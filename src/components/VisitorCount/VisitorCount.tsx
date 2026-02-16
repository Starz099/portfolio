"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

type CountResponse = {
  count: number;
};

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  const formatOrdinal = (value: number) => {
    const moduloTen = value % 10;
    const moduloHundred = value % 100;
    if (moduloHundred >= 11 && moduloHundred <= 13) {
      return `${value}th`;
    }
    if (moduloTen === 1) {
      return `${value}st`;
    }
    if (moduloTen === 2) {
      return `${value}nd`;
    }
    if (moduloTen === 3) {
      return `${value}rd`;
    }
    return `${value}th`;
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchCount = async () => {
      const response = await fetch("/api/visit?mode=count", {
        signal: controller.signal,
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as CountResponse;
      setCount(data.count);
    };

    const registerVisit = async () => {
      const response = await fetch("/api/visit", {
        method: "POST",
        signal: controller.signal,
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as CountResponse;
      setCount(data.count);
    };

    fetchCount().catch(() => {
      // Ignore network errors; we'll retry on the next visit.
    });

    registerVisit().catch(() => {
      // Ignore network errors; we'll retry on the next visit.
    });

    return () => controller.abort();
  }, []);

  return (
    <div className="bg-accent text-muted-foreground mb-6 inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm">
      <Eye className="h-4 w-4" />
      <span>
        You are the {count === null ? "--" : formatOrdinal(count)} visitor
      </span>
    </div>
  );
}
