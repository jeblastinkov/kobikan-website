#!/usr/bin/env bash
# Replace hero orbit frame sequence from a source video.
# Usage: bash scripts/replace-hero-frames.sh "/path/to/hero-orbit.mov"
set -euo pipefail

IN="${1:?Usage: bash scripts/replace-hero-frames.sh /path/to/video.mov}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/video/frames/hero"
FRAMES=120

command -v ffmpeg >/dev/null || { echo "ffmpeg not found — install with: brew install ffmpeg"; exit 1; }
[ -f "$IN" ] || { echo "ERROR: source video not found: $IN"; exit 1; }

# restore a previous backup if hero dir is empty (failed earlier run)
if [ ! -d "$OUT" ] || [ -z "$(ls "$OUT" 2>/dev/null)" ]; then
  LAST_BK=$(ls -d "$ROOT/public/video/frames/hero_backup_"* 2>/dev/null | sort | tail -1 || true)
  if [ -n "${LAST_BK:-}" ]; then
    rm -rf "$OUT"
    cp -R "$LAST_BK" "$OUT"
    echo "Restored frames from: $LAST_BK"
  fi
fi

# backup current frames
if [ -d "$OUT" ] && [ -n "$(ls "$OUT" 2>/dev/null)" ]; then
  BK="$ROOT/public/video/frames/hero_backup_$(date +%s)"
  mv "$OUT" "$BK"
  echo "Old frames backed up to: $BK"
fi
mkdir -p "$OUT"

DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$IN")
echo "Source duration: ${DUR}s — extracting $FRAMES frames..."

VF="fps=$FRAMES/$DUR,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720"

if ffmpeg -hide_banner -encoders 2>/dev/null | grep -q libwebp; then
  ffmpeg -v error -y -i "$IN" -vf "$VF" \
    -frames:v $FRAMES -c:v libwebp -quality 80 -start_number 1 "$OUT/%03d.webp"
else
  echo "ffmpeg has no webp encoder — extracting PNG, converting with sips..."
  TMP=$(mktemp -d)
  ffmpeg -v error -y -i "$IN" -vf "$VF" -frames:v $FRAMES -start_number 1 "$TMP/%03d.png"
  if sips -s format webp -s formatOptions 80 "$TMP/001.png" --out "$OUT/001.webp" >/dev/null 2>&1; then
    for f in "$TMP"/*.png; do
      n=$(basename "$f" .png)
      sips -s format webp -s formatOptions 80 "$f" --out "$OUT/$n.webp" >/dev/null
    done
  else
    echo "WARNING: sips can't write webp — producing JPG frames instead."
    echo ">>> Tell Claude the frames are JPG so the code can be updated. <<<"
    rm -f "$OUT"/001.webp
    for f in "$TMP"/*.png; do
      n=$(basename "$f" .png)
      sips -s format jpeg -s formatOptions 82 "$f" --out "$OUT/$n.jpg" >/dev/null
    done
  fi
  rm -rf "$TMP"
fi

COUNT=$(ls "$OUT" | wc -l | tr -d ' ')
# pad if rounding produced fewer than FRAMES
while [ "$COUNT" -lt "$FRAMES" ]; do
  NEXT=$(printf "%03d" $((COUNT + 1)))
  cp "$OUT/$(printf "%03d" "$COUNT").webp" "$OUT/$NEXT.webp"
  COUNT=$((COUNT + 1))
done

echo "Done: $COUNT frames in public/video/frames/hero/"
