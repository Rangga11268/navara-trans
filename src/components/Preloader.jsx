import React, { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800); // Wait for exit animation
          }, 500);
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-slate-950/50 to-slate-950 animate-slow-spin opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Text */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 tracking-widest animate-fade-in-up">
            NAVARA TRANS
          </h1>
        </div>

        {/* Subtitle / Slogan */}
        <div className="overflow-hidden mb-8">
          <p className="font-sans text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase animate-fade-in-up delay-200">
            Premium Bus Services
          </p>
        </div>

        {/* Progress Line */}
        <div className="w-48 h-[1px] bg-slate-800 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <div className="mt-2 font-mono text-amber-500/80 text-xs">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
