"use client";

import { useRouter } from "next/navigation";
import { rooms, getAllItems, COLOR_MAP, type ItemColor } from "@/data/rooms";
import { useCheckedItems, useBags } from "@/hooks/useLocalStorage";

export default function StatsPage() {
  const router = useRouter();
  const { checkedItems, resetAll, loaded } = useCheckedItems();
  const { bags, updateBags, loaded: bagsLoaded } = useBags();

  if (!loaded || !bagsLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  const allItems = Object.keys(rooms).flatMap((r) => getAllItems(r));
  const checkedAll = allItems.filter((i) => checkedItems.has(i.id));
  const totalItems = allItems.length;
  const totalChecked = checkedAll.length;
  const overallPct =
    totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  // Count by color
  const colorCounts: Record<ItemColor, number> = {
    red: 0,
    orange: 0,
    blue: 0,
    green: 0,
  };
  checkedAll.forEach((item) => {
    colorCounts[item.color]++;
  });

  // Per room stats
  const roomStats = Object.keys(rooms).map((roomId) => {
    const items = getAllItems(roomId);
    const checked = items.filter((i) => checkedItems.has(i.id)).length;
    const total = items.length;
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { roomId, name: rooms[roomId].name, icon: rooms[roomId].icon, checked, total, pct };
  });

  return (
    <div className="px-4 py-6 safe-bottom">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1 text-indigo-600 font-medium text-sm"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <h1 className="text-xl font-bold text-gray-900">My Stats</h1>
        <div className="w-14" />
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-center mb-6">
        <div className="text-5xl font-bold mb-1">{overallPct}%</div>
        <div className="text-indigo-200 text-sm">Overall Progress</div>
        <div className="text-indigo-200 text-xs mt-1">
          {totalChecked} of {totalItems} items reviewed
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 mt-3">
          <div
            className="h-2 rounded-full bg-white transition-all duration-500"
            style={{ width: `${overallPct}%` }}
          />
        </div>
      </div>

      {/* Category Breakdown */}
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
        Items by Category
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {(Object.keys(COLOR_MAP) as ItemColor[]).map((color) => (
          <div
            key={color}
            className={`${COLOR_MAP[color].bg} rounded-2xl p-4 text-center`}
          >
            <div
              className="w-6 h-6 rounded-full mx-auto mb-2"
              style={{ backgroundColor: COLOR_MAP[color].hex }}
            />
            <div className={`text-2xl font-bold ${COLOR_MAP[color].text}`}>
              {colorCounts[color]}
            </div>
            <div className={`text-xs font-medium ${COLOR_MAP[color].text} opacity-75`}>
              {COLOR_MAP[color].label}
            </div>
          </div>
        ))}
      </div>

      {/* Room Progress */}
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
        Room Progress
      </h2>
      <div className="space-y-3 mb-6">
        {roomStats.map((rs) => (
          <div
            key={rs.roomId}
            className="bg-gray-50 rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <span className="text-xl">{rs.icon}</span>
                <span className="font-medium text-gray-800 text-sm">
                  {rs.name}
                </span>
              </span>
              <span className="text-sm font-bold text-indigo-600">
                {rs.pct}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  rs.pct === 100 ? "bg-green-500" : "bg-indigo-500"
                }`}
                style={{ width: `${rs.pct}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {rs.checked}/{rs.total} items
            </div>
          </div>
        ))}
      </div>

      {/* Bags Tracker */}
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
        Bags Filled
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-red-50 rounded-2xl p-4 text-center">
          <div className="text-2xl mb-2">🗑️</div>
          <div className="text-sm font-medium text-red-700 mb-2">
            Trash Bags
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => updateBags("trash", bags.trash - 1)}
              className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-lg flex items-center justify-center active:bg-red-200"
            >
              -
            </button>
            <span className="text-2xl font-bold text-red-600 w-8 text-center">
              {bags.trash}
            </span>
            <button
              onClick={() => updateBags("trash", bags.trash + 1)}
              className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-lg flex items-center justify-center active:bg-red-200"
            >
              +
            </button>
          </div>
        </div>
        <div className="bg-blue-50 rounded-2xl p-4 text-center">
          <div className="text-2xl mb-2">📦</div>
          <div className="text-sm font-medium text-blue-700 mb-2">
            Donate Bags
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => updateBags("donate", bags.donate - 1)}
              className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-lg flex items-center justify-center active:bg-blue-200"
            >
              -
            </button>
            <span className="text-2xl font-bold text-blue-600 w-8 text-center">
              {bags.donate}
            </span>
            <button
              onClick={() => updateBags("donate", bags.donate + 1)}
              className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-lg flex items-center justify-center active:bg-blue-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          if (
            window.confirm(
              "Are you sure you want to reset all progress? This cannot be undone."
            )
          ) {
            resetAll();
          }
        }}
        className="w-full py-3 rounded-2xl border-2 border-red-200 text-red-500 font-medium text-sm hover:bg-red-50 transition-colors"
      >
        Reset All Progress
      </button>
    </div>
  );
}
