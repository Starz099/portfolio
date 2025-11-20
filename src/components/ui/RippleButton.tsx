"use client";

import { useState, MouseEvent } from "react";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function RippleButton({
  children,
  className = "",
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const addRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    onClick?.(e);
  };

  return (
    <button
      className={`bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={addRipple}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="animate-ripple pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          to {
            width: 500px;
            height: 500px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
    </button>
  );
}
