"use client";

import { ReactNode } from "react";
import Floating from "../ui/Floating";

interface SkillBadgeProps {
  children: ReactNode;
  index: number;
}

export default function SkillBadge({ children, index }: SkillBadgeProps) {
  return (
    <Floating duration={3 + (index % 3) * 0.5} distance={6} delay={index * 50}>
      <div className="bg-secondary/80 border-border/50 hover:border-border flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-sm">
        {children}
      </div>
    </Floating>
  );
}
