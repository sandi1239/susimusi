import { useEffect, useState } from "react";

interface Seed {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

const DandelionSeeds = () => {
  const [seeds, setSeeds] = useState<Seed[]>([]);

  useEffect(() => {
    const generated: Seed[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 7 + 5,
      duration: Math.random() * 10 + 14,
      delay: Math.random() * 12,
      opacity: Math.random() * 0.3 + 0.2,
      drift: (Math.random() - 0.5) * 250,
    }));
    setSeeds(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <style>{`
        @keyframes dandelion-float {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--seed-opacity);
          }
          90% {
            opacity: var(--seed-opacity);
          }
          100% {
            transform: translateY(-20vh) translateX(var(--seed-drift)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {seeds.map((seed) => (
        <div
          key={seed.id}
          className="absolute"
          style={{
            left: `${seed.left}%`,
            animationName: "dandelion-float",
            animationDuration: `${seed.duration}s`,
            animationDelay: `${seed.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            ["--seed-opacity" as string]: seed.opacity,
            ["--seed-drift" as string]: `${seed.drift}px`,
          }}
        >
          {/* Dandelion seed SVG */}
          <svg
            width={seed.size * 3}
            height={seed.size * 4}
            viewBox="0 0 12 16"
            fill="none"
            style={{ opacity: seed.opacity }}
          >
            {/* Stem */}
            <line x1="6" y1="8" x2="6" y2="16" stroke="white" strokeWidth="0.3" opacity="0.6" />
            {/* Fluff rays */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <line
                key={angle}
                x1="6"
                y1="4"
                x2={6 + Math.cos((angle * Math.PI) / 180) * 5}
                y2={4 + Math.sin((angle * Math.PI) / 180) * 5}
                stroke="white"
                strokeWidth="0.2"
                opacity="0.5"
              />
            ))}
            {/* Center dot */}
            <circle cx="6" cy="4" r="0.8" fill="white" opacity="0.7" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default DandelionSeeds;
