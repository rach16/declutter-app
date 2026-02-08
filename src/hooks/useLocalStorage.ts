"use client";

import { useState, useEffect, useCallback } from "react";

const ACTIONS_KEY = "declutter-app-actions";
const BAGS_KEY = "declutter-app-bags";

export type ItemAction = "trash" | "donate" | "keep" | "skip";

// Maps item ID -> action taken by user
export type ItemActions = Record<string, ItemAction>;

export function useItemActions() {
  const [actions, setActions] = useState<ItemActions>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ACTIONS_KEY);
      if (stored) {
        setActions(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(ACTIONS_KEY, JSON.stringify(actions));
    }
  }, [actions, loaded]);

  const setItemAction = useCallback((id: string, action: ItemAction) => {
    setActions((prev) => ({ ...prev, [id]: action }));
  }, []);

  const clearItemAction = useCallback((id: string) => {
    setActions((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const getItemAction = useCallback(
    (id: string): ItemAction | undefined => actions[id],
    [actions]
  );

  const isActioned = useCallback(
    (id: string) => id in actions,
    [actions]
  );

  const resetAll = useCallback(() => {
    setActions({});
  }, []);

  const actionCounts = useCallback(() => {
    const counts = { trash: 0, donate: 0, keep: 0, skip: 0 };
    Object.values(actions).forEach((a) => { counts[a]++; });
    return counts;
  }, [actions]);

  return { actions, setItemAction, clearItemAction, getItemAction, isActioned, resetAll, actionCounts, loaded };
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
