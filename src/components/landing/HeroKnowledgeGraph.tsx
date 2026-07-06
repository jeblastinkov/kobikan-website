import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function GraphScene() {
  const groupRef = useRef<Group>(null);

  const { points, edges } = useMemo(() => {
    const core = [
      [-3.2, -1.4, 0.2],
      [-1.2, 1.2, -0.5],
      [0.5, -0.6, 0.4],
      [2.4, 0.8, -0.2],
      [3.1, -1, 0.6],
    ];

    const cloud = Array.from({ length: 95 }, (_, i) => {
      const angle = i * 0.72;
      const radius = 1.4 + ((i * 37) % 100) / 48;
      return [
        Math.cos(angle) * radius + (((i * 17) % 20) - 10) / 24,
        Math.sin(angle * 0.84) * 1.2 + (((i * 11) % 20) - 10) / 28,
        Math.sin(angle) * 0.9,
      ];
    });

    const graphPoints = [...core, ...cloud];
    const graphEdges: number[] = [];

    core.forEach((start, i) => {
      const end = core[(i + 1) % core.length];
      graphEdges.push(...start, ...end);
    });

    cloud.forEach((point, i) => {
      const target = core[i % core.length];
      graphEdges.push(...point, ...target);
    });

    return {
      points: new Float32Array(graphPoints.flat()),
      edges: new Float32Array(graphEdges),
    };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = pointer.x * 0.16 + Math.sin(clock.elapsedTime * 0.12) * 0.08;
    groupRef.current.rotation.x = pointer.y * -0.08;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edges, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ff3333" transparent opacity={0.16} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#ff3333" size={0.045} transparent opacity={0.72} />
      </points>
    </group>
  );
}

export default function HeroKnowledgeGraph() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 52 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <GraphScene />
      </Canvas>
      <div className="absolute right-[8%] top-[22%] grid gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
        {["PLC", "PDF", "MES", "Voice", "Chat"].map((label) => (
          <span key={label} className="rounded border border-white/10 bg-white/[0.03] px-2 py-1">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
