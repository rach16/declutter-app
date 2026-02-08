"use client";

import Link from "next/link";
import { rooms, getAllItems, COLOR_MAP } from "@/data/rooms";
import { useItemActions } from "@/hooks/useLocalStorage";
import type { ItemAction } from "@/hooks/useLocalStorage";

export default function Home() {
  const { actions, actionCounts, loaded } = useItemActions();

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  const allItems = Object.keys(rooms).flatMap((r) => getAllItems(r));
  const totalActioned = Object.keys(actions).length;
  const totalItems = allItems.length;
  const overallPct = totalItems > 0 ? Math.round((totalActioned / totalItems) * 100) : 0;
  const counts = actionCounts();

  return (
    <div className="px-5 py-8 safe-bottom">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Declutter</h1>
        <p className="text-sm text-gray-400 mt-0.5">Room by room, item by item.</p>
      </div>

      {/* Overall Progress */}
      <div className="bg-gray-900 rounded-xl p-5 mb-6">
        <div className="flex items-end justify-between mb-3">
          <div>
            <div className="text-3xl font-bold text-white tabular-nums">{overallPct}%</div>
            <div className="text-xs text-gray-400 mt-0.5">{totalActioned} of {totalItems} items</div>
          </div>
          <div className="flex gap-3 text-xs text-gray-400">
            {(["trash", "donate", "keep", "skip"] as ItemAction[]).map((a) => (
              <div key={a} className="text-center">
                <div className="text-sm font-semibold text-white tabular-nums">{counts[a]}</div>
                <div className="capitalize">{a}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-white transition-all duration-500"
            style={{ width: `${overallPct}%` }}
          />
        </div>
      </div>

      {/* Suggestion Legend */}
      <div className="flex items-center gap-4 mb-6 px-1">
        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Suggestions</span>
        <div className="flex gap-3">
          {(Object.keys(COLOR_MAP) as Array<keyof typeof COLOR_MAP>).map((color) => (
            <div key={color} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLOR_MAP[color].hex }} />
              <span className="text-[11px] text-gray-500">{COLOR_MAP[color].label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Room Cards */}
      <div className="space-y-3 mb-6">
        {Object.keys(rooms).map((roomId) => {
          const room = rooms[roomId];
          const items = getAllItems(roomId);
          const actioned = items.filter((i) => i.id in actions).length;
          const total = items.length;
          const pct = total > 0 ? Math.round((actioned / total) * 100) : 0;

          return (
            <Link key={roomId} href={`/room/${roomId}`} className="block group">
              <div className="border border-gray-200 rounded-xl p-4 bg-white transition-all group-hover:border-gray-300 group-active:scale-[0.99]">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{room.icon}</span>
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">{room.name}</h2>
                      <p className="text-xs text-gray-400">{actioned}/{total} items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold tabular-nums ${pct === 100 ? "text-emerald-600" : "text-gray-900"}`}>
                      {pct}%
                    </span>
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${pct === 100 ? "bg-emerald-500" : "bg-gray-900"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Stats Link */}
      <Link href="/stats" className="block group">
        <div className="border border-gray-200 rounded-xl p-4 bg-white flex items-center justify-between transition-all group-hover:border-gray-300 group-active:scale-[0.99]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <span className="text-[15px] font-semibold text-gray-900">My Stats</span>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
