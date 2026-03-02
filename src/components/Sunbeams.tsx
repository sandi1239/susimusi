const Sunbeams = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Top-left sunbeam */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[65%] h-[65%] opacity-[0.25] animate-sunbeam-1"
        style={{
          background:
            "conic-gradient(from 160deg at 30% 30%, transparent 0deg, hsl(45 90% 65% / 0.9) 15deg, transparent 40deg, transparent 120deg, hsl(40 80% 60% / 0.7) 140deg, transparent 170deg)",
          filter: "blur(30px)",
        }}
      />
      {/* Top-right sunbeam */}
      <div
        className="absolute -top-[15%] -right-[10%] w-[60%] h-[60%] opacity-[0.2] animate-sunbeam-2"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 30%, transparent 0deg, hsl(35 85% 65% / 0.8) 20deg, transparent 50deg, transparent 150deg, hsl(45 80% 70% / 0.6) 170deg, transparent 200deg)",
          filter: "blur(35px)",
        }}
      />
      {/* Soft warm glow top-center */}
      <div
        className="absolute -top-[10%] left-[20%] w-[45%] h-[45%] opacity-[0.18] animate-sunbeam-3"
        style={{
          background: "radial-gradient(ellipse at center, hsl(40 90% 70% / 0.8), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default Sunbeams;
