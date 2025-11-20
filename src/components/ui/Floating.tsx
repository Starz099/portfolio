"use client";

import { useEffect, useState } from "react";

interface FloatingProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
}

export default function Floating({
  children,
  duration = 3,
  delay = 0,
  distance = 10,
  className = "",
}: FloatingProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={className}
      style={{
        animation: mounted
          ? `float ${duration}s ease-in-out ${delay}s infinite`
          : "none",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-${distance}px);
          }
        }
      `}</style>
    </div>
  );
}
