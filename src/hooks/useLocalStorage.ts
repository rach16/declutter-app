"use client";

import { useState, useEffect, useCallback } from "react";

const ACTIONS_KEY = "declutter-app-actions";
const BAGS_KEY = "declutter-app-bags";

export type ItemAction = "trash" | "donate" | "keep" | "skip";

export type ActionEntry = { action: ItemAction; date: string };

// Maps item ID -> action + timestamp
export type ItemActions = Record<string, ActionEntry>;

function migrateActions(raw: Record<string, unknown>): ItemActions {
  const now = new Date().toISOString();
  const result: ItemActions = {};
  for (const [id, val] of Object.entries(raw)) {
    if (typeof val === "string") {
      // Old format: plain action string — migrate
      result[id] = { action: val as ItemAction, date: now };
    } else if (val && typeof val === "object" && "action" in val && "date" in val) {
      result[id] = val as ActionEntry;
    }
  }
  return result;
}

export function useItemActions() {
  const [actions, setActions] = useState<ItemActions>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ACTIONS_KEY);
      if (stored) {
        setActions(migrateActions(JSON.parse(stored)));
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
    setActions((prev) => ({
      ...prev,
      [id]: { action, date: new Date().toISOString() },
    }));
  }, []);

  const clearItemAction = useCallback((id: string) => {
    setActions((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const getItemAction = useCallback(
    (id: string): ItemAction | undefined => actions[id]?.action,
    [actions]
  );

  const getItemDate = useCallback(
    (id: string): string | undefined => actions[id]?.date,
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
    Object.values(actions).forEach((entry) => { counts[entry.action]++; });
    return counts;
  }, [actions]);

  const getStartDate = useCallback((): string | null => {
    const dates = Object.values(actions).map((e) => e.date);
    if (dates.length === 0) return null;
    dates.sort();
    return dates[0];
  }, [actions]);

  const getRecentActions = useCallback(
    (limit: number = 8): Array<{ id: string; action: ItemAction; date: string }> => {
      return Object.entries(actions)
        .map(([id, entry]) => ({ id, action: entry.action, date: entry.date }))
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, limit);
    },
    [actions]
  );

  return {
    actions,
    setItemAction,
    clearItemAction,
    getItemAction,
    getItemDate,
    isActioned,
    resetAll,
    actionCounts,
    getStartDate,
    getRecentActions,
    loaded,
  };
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
