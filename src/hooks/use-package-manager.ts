"use client";

import * as React from "react";

const STORAGE_KEY = "package-manager";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export function usePackageManager() {
  const [value, setValue] = React.useState<PackageManager>("npm");

  // Load from localStorage on mount
  React.useEffect(() => {
    const storedValue = localStorage.getItem(
      STORAGE_KEY,
    ) as PackageManager | null;
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  // Update value and localStorage
  const setPackageManager = React.useCallback((newValue: PackageManager) => {
    setValue(newValue);
    localStorage.setItem(STORAGE_KEY, newValue);
    // Dispatch custom event to notify other components on the same page
    window.dispatchEvent(
      new CustomEvent("package-manager-change", { detail: newValue }),
    );
  }, []);

  // Synchronize with other components/tabs
  React.useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setValue(e.newValue as PackageManager);
      }
    };

    const handleCustomChange = (e: CustomEvent<PackageManager>) => {
      setValue(e.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    //@ts-expect-error - Custom event type
    window.addEventListener("package-manager-change", handleCustomChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      //@ts-expect-error - Custom event type
      window.removeEventListener("package-manager-change", handleCustomChange);
    };
  }, []);

  return [value, setPackageManager] as const;
}
