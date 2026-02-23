"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type BoomBotContextValue = {
  enabled: boolean;
  ready: boolean;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
};

const BoomBotContext = createContext<BoomBotContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "boombot-enabled";

export function BoomBotProvider({
  children,
  defaultEnabled = true,
}: {
  children: React.ReactNode;
  defaultEnabled?: boolean;
}) {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return defaultEnabled;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) return stored === "true";
    } catch (err) {
      console.warn("Failed to read BoomBot setting", err);
    }
    return defaultEnabled;
  });
  const [ready, setReady] = useState(false);
  const toggle = () => setEnabled((prev) => !prev);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, String(enabled));
    } catch (err) {
      console.warn("Failed to persist BoomBot setting", err);
    }
  }, [enabled]);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <BoomBotContext.Provider value={{ enabled, ready, toggle, setEnabled }}>
      {children}
    </BoomBotContext.Provider>
  );
}

export function useBoomBot() {
  const ctx = useContext(BoomBotContext);
  if (!ctx) {
    throw new Error("useBoomBot must be used within BoomBotProvider");
  }
  return ctx;
}
