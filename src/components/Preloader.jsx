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
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
        isExiting ? "pointer-events-none" : ""
      }`}
    >
      {/* Top Shutter */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-brand-black transition-transform duration-1000 ease-in-out z-0 ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      ></div>

      {/* Bottom Shutter */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-brand-black transition-transform duration-1000 ease-in-out z-0 ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      ></div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center transition-opacity duration-500 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Background Glow (Inside Content to fade out with it) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

        {/* Main Text */}
        <div className="overflow-hidden mb-8 relative">
          <h1 className="font-display text-6xl md:text-9xl font-black text-white tracking-tighter animate-fade-in-up">
            NAVARA
            <span className="text-brand-primary animate-pulse">.</span>
          </h1>
        </div>

        {/* Loading Bar */}
        <div className="w-48 md:w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-brand-primary transition-all duration-200 ease-out shadow-[0_0_10px_rgba(193,147,73,0.8)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage & Status */}
        <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] font-display uppercase">
          <span className="text-white">Loading System</span>
          <span className="text-brand-primary">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
