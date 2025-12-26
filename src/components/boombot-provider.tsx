"use client";

import React, { createContext, useContext, useState } from "react";

type BoomBotContextValue = {
  enabled: boolean;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
};

const BoomBotContext = createContext<BoomBotContextValue | undefined>(
  undefined,
);

export function BoomBotProvider({
  children,
  defaultEnabled = true,
}: {
  children: React.ReactNode;
  defaultEnabled?: boolean;
}) {
  const [enabled, setEnabled] = useState<boolean>(defaultEnabled);
  const toggle = () => setEnabled((prev) => !prev);

  return (
    <BoomBotContext.Provider value={{ enabled, toggle, setEnabled }}>
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
