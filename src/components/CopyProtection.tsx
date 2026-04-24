"use client";

import { useEffect } from "react";

export function CopyProtection() {
  useEffect(() => {
    const preventDefault = (event: Event) => {
      event.preventDefault();
    };

    const preventCopyShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isModifierPressed = event.metaKey || event.ctrlKey;
      if (isModifierPressed && ["a", "c", "x", "s", "u", "p"].includes(key)) {
        event.preventDefault();
      }
    };

    document.addEventListener("copy", preventDefault);
    document.addEventListener("cut", preventDefault);
    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("selectstart", preventDefault);
    document.addEventListener("dragstart", preventDefault);
    document.addEventListener("keydown", preventCopyShortcuts);

    return () => {
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("selectstart", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
      document.removeEventListener("keydown", preventCopyShortcuts);
    };
  }, []);

  return null;
}
