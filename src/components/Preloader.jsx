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
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-brand-black transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-black/50 to-brand-black animate-slow-spin opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Text */}
        <div className="overflow-hidden mb-6">
          <h1 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter animate-fade-in-up">
            NAVARA
            <span className="text-brand-primary">.</span>
          </h1>
        </div>

        {/* Subtitle / Slogan */}
        <div className="overflow-hidden mb-12">
          <p className="font-sans text-white/50 text-sm md:text-base tracking-[0.4em] uppercase animate-fade-in-up delay-200 font-bold">
            Transportasi Premium
          </p>
        </div>

        {/* Progress Line */}
        <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-brand-primary transition-all duration-300 ease-out shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <div className="mt-4 font-display font-bold text-brand-primary text-xl">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
