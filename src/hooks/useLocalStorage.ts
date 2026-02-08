"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "declutter-app-checked";
const BAGS_KEY = "declutter-app-bags";

export function useCheckedItems() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCheckedItems(new Set(JSON.parse(stored)));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checkedItems)));
    }
  }, [checkedItems, loaded]);

  const toggleItem = useCallback((id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isChecked = useCallback(
    (id: string) => checkedItems.has(id),
    [checkedItems]
  );

  const resetAll = useCallback(() => {
    setCheckedItems(new Set());
  }, []);

  return { checkedItems, toggleItem, isChecked, resetAll, loaded };
}

export function useBags() {
  const [bags, setBags] = useState({ trash: 0, donate: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(BAGS_KEY);
      if (stored) {
        setBags(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(BAGS_KEY, JSON.stringify(bags));
    }
  }, [bags, loaded]);

  const updateBags = useCallback(
    (type: "trash" | "donate", value: number) => {
      setBags((prev) => ({ ...prev, [type]: Math.max(0, value) }));
    },
    []
  );

  return { bags, updateBags, loaded };
}
