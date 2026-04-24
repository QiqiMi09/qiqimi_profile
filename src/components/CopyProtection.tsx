"use client";

import { useEffect } from "react";

/** 点击/选择在文字节点上时，event.target 可能是 Text，需先归一到父元素再 closest */
function elementFromEventTarget(target: EventTarget | null): Element | null {
  if (!target) return null;
  if (target instanceof Element) return target;
  if (target instanceof Text) return target.parentElement;
  return null;
}

function isInteractiveTarget(target: EventTarget | null) {
  const el = elementFromEventTarget(target);
  if (!el) return false;
  return Boolean(
    el.closest("a[href], button, input, textarea, select, [role='link'], [role='button']"),
  );
}

function isFormFieldTarget(target: EventTarget | null) {
  const el = elementFromEventTarget(target);
  if (!el) return false;
  return Boolean(el.closest("input, textarea, select, [contenteditable='true']"));
}

export function CopyProtection() {
  useEffect(() => {
    const preventCopyCut = (event: ClipboardEvent) => {
      if (isFormFieldTarget(event.target)) return;
      event.preventDefault();
    };

    const preventSelectOrDrag = (event: Event) => {
      if (isInteractiveTarget(event.target)) return;
      event.preventDefault();
    };

    const preventCopyShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isModifierPressed = event.metaKey || event.ctrlKey;
      if (isModifierPressed && ["a", "c", "x", "s", "u", "p"].includes(key)) {
        event.preventDefault();
      }
    };

    const preventContextMenu = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener("copy", preventCopyCut);
    document.addEventListener("cut", preventCopyCut);
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("selectstart", preventSelectOrDrag);
    document.addEventListener("dragstart", preventSelectOrDrag);
    document.addEventListener("keydown", preventCopyShortcuts);

    return () => {
      document.removeEventListener("copy", preventCopyCut);
      document.removeEventListener("cut", preventCopyCut);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("selectstart", preventSelectOrDrag);
      document.removeEventListener("dragstart", preventSelectOrDrag);
      document.removeEventListener("keydown", preventCopyShortcuts);
    };
  }, []);

  return null;
}
