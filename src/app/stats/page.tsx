"use client";

import { useRouter } from "next/navigation";
import { rooms, getAllItems, ACTION_CONFIG } from "@/data/rooms";
import { useItemActions, useBags, type ItemAction } from "@/hooks/useLocalStorage";

const ACTION_ORDER: ItemAction[] = ["trash", "donate", "keep", "skip"];

export default function StatsPage() {
  const router = useRouter();
  const { actions, actionCounts, resetAll, loaded } = useItemActions();
  const { bags, updateBags, loaded: bagsLoaded } = useBags();

  if (!loaded || !bagsLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  const allItems = Object.keys(rooms).flatMap((r) => getAllItems(r));
  const totalItems = allItems.length;
  const totalActioned = Object.keys(actions).length;
  const overallPct = totalItems > 0 ? Math.round((totalActioned / totalItems) * 100) : 0;
  const counts = actionCounts();

  const roomStats = Object.keys(rooms).map((roomId) => {
    const items = getAllItems(roomId);
    const actioned = items.filter((i) => i.id in actions).length;
    const total = items.length;
    const pct = total > 0 ? Math.round((actioned / total) * 100) : 0;
    return { roomId, name: rooms[roomId].name, icon: rooms[roomId].icon, actioned, total, pct };
  });

  return (
    <div className="px-5 py-8 safe-bottom">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1 text-sm font-medium text-gray-500"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="text-lg font-bold text-gray-900 tracking-tight">My Stats</h1>
        <div className="w-12" />
      </div>

      {/* Overall */}
      <div className="bg-gray-900 rounded-xl p-6 mb-6 text-center">
        <div className="text-4xl font-bold text-white tabular-nums">{overallPct}%</div>
        <div className="text-sm text-gray-400 mt-1">Overall Progress</div>
        <div className="text-xs text-gray-500 mt-0.5">{totalActioned} of {totalItems} items reviewed</div>
        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
          <div className="h-1.5 rounded-full bg-white transition-all duration-500" style={{ width: `${overallPct}%` }} />
        </div>
      </div>

      {/* Action Breakdown */}
      <h2 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Your Decisions</h2>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {ACTION_ORDER.map((action) => {
          const config = ACTION_CONFIG[action];
          return (
            <div key={action} className="bg-white border border-gray-200 rounded-xl p-3 text-center">
              <div className="text-lg mb-1">{config.icon}</div>
              <div className="text-xl font-bold tabular-nums" style={{ color: config.hex }}>{counts[action]}</div>
              <div className="text-[10px] font-medium text-gray-400 uppercase">{config.label}</div>
            </div>
          );
        })}
      </div>

      {/* Room Progress */}
      <h2 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Room Progress</h2>
      <div className="space-y-2 mb-6">
        {roomStats.map((rs) => (
          <div key={rs.roomId} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{rs.icon}</span>
                <span className="text-[13px] font-medium text-gray-900">{rs.name}</span>
              </div>
              <span className={`text-sm font-semibold tabular-nums ${rs.pct === 100 ? "text-emerald-600" : "text-gray-900"}`}>
                {rs.pct}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${rs.pct === 100 ? "bg-emerald-500" : "bg-gray-900"}`}
                style={{ width: `${rs.pct}%` }}
              />
            </div>
            <div className="text-[11px] text-gray-400 mt-1.5 tabular-nums">{rs.actioned}/{rs.total} items</div>
          </div>
        ))}
      </div>

      {/* Bags */}
      <h2 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Bags Filled</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <div className="text-lg mb-1">🗑️</div>
          <div className="text-[11px] font-medium text-gray-500 mb-2">Trash Bags</div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => updateBags("trash", bags.trash - 1)}
              className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold text-sm flex items-center justify-center active:bg-gray-200"
            >
              -
            </button>
            <span className="text-xl font-bold text-gray-900 tabular-nums w-6 text-center">{bags.trash}</span>
            <button
              onClick={() => updateBags("trash", bags.trash + 1)}
              className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold text-sm flex items-center justify-center active:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <div className="text-lg mb-1">📦</div>
          <div className="text-[11px] font-medium text-gray-500 mb-2">Donate Bags</div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => updateBags("donate", bags.donate - 1)}
              className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold text-sm flex items-center justify-center active:bg-gray-200"
            >
              -
            </button>
            <span className="text-xl font-bold text-gray-900 tabular-nums w-6 text-center">{bags.donate}</span>
            <button
              onClick={() => updateBags("donate", bags.donate + 1)}
              className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold text-sm flex items-center justify-center active:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          if (window.confirm("Reset all progress? This cannot be undone.")) {
            resetAll();
          }
        }}
        className="w-full py-2.5 rounded-lg border border-gray-200 text-[13px] font-medium text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors"
      >
        Reset All Progress
      </button>
    </div>
  );
}
