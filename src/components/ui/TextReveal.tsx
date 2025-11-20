"use client";

import { useEffect, useRef } from "react";

interface TextRevealProps {
  children: string;
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll(".word");
            words.forEach((word, index) => {
              setTimeout(
                () => {
                  word.classList.add("revealed");
                },
                delay + index * 50,
              );
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  const words = children.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word inline-block translate-y-4 opacity-0 transition-all duration-500 ease-out"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </span>
      ))}
      <style jsx>{`
        .word.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
