import { useEffect, useState } from "react";
import { T, type Lang } from "@/lib/i18n";

const KEY = "kobikan_cookie_consent_v1";

export function CookieBanner({ lang = "sk" }: { lang?: Lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* ignore */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  const t = T[lang].cookie;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-4 md:bottom-4 md:max-w-md">
      <div className="rounded-2xl border border-white/10 bg-[color:var(--color-dark)] text-white shadow-2xl p-5">
        <p className="text-sm text-white/80 leading-relaxed">{t.msg}</p>
        <div className="mt-4 flex gap-2 justify-end">
          <button
            onClick={() => decide("rejected")}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:border-white/40 transition"
          >
            {t.reject}
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-xs font-semibold text-white hover:brightness-110 transition"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
