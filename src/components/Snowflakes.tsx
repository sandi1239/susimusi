import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  animationDuration: number;
  delay: number;
  opacity: number;
}

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      animationDuration: Math.random() * 8 + 8,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-white"
            style={{
              boxShadow: `0 0 ${flake.size * 2}px rgba(255, 255, 255, 0.3)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
