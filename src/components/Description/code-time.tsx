// src/components/CodedTodayBadge.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function CodedTodayBadge() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/wakatime");
        setText(res.data.text);
      } catch (e) {
        console.error(e);
        setText("0 mins");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-muted-foreground mt-4 flex items-center gap-3">
      {text ? (
        <div className="bg-accent flex items-center gap-2 rounded-lg px-3.5 py-1 text-sm">
          <span>{text} coded today</span>
        </div>
      ) : (
        <div className="animate-pulse rounded-lg bg-zinc-700 px-3.5 py-1 text-sm">
          Loading…
        </div>
      )}
      <div className="bg-accent flex items-center gap-2 rounded-lg px-3.5 py-1 text-sm">
        <div className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </div>
        <span>Open to work</span>
      </div>
    </div>
  );
}
