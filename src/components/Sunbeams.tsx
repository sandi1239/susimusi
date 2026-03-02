const Sunbeams = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Top-left sunbeam */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-[0.07] animate-sunbeam-1"
        style={{
          background:
            "conic-gradient(from 160deg at 30% 30%, transparent 0deg, hsl(45 90% 65% / 0.6) 15deg, transparent 40deg, transparent 120deg, hsl(40 80% 60% / 0.4) 140deg, transparent 170deg)",
          filter: "blur(40px)",
        }}
      />
      {/* Top-right sunbeam */}
      <div
        className="absolute -top-[15%] -right-[10%] w-[55%] h-[55%] opacity-[0.06] animate-sunbeam-2"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 30%, transparent 0deg, hsl(35 85% 65% / 0.5) 20deg, transparent 50deg, transparent 150deg, hsl(45 80% 70% / 0.3) 170deg, transparent 200deg)",
          filter: "blur(50px)",
        }}
      />
      {/* Soft warm glow top-center */}
      <div
        className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] opacity-[0.04] animate-sunbeam-3"
        style={{
          background: "radial-gradient(ellipse at center, hsl(40 90% 70% / 0.5), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
};

export default Sunbeams;
