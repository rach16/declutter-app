"use client";

import Link from "next/link";
import { rooms, getAllItems, COLOR_MAP } from "@/data/rooms";
import { useCheckedItems } from "@/hooks/useLocalStorage";

function RoomCard({
  roomId,
  checkedItems,
}: {
  roomId: string;
  checkedItems: Set<string>;
}) {
  const room = rooms[roomId];
  const items = getAllItems(roomId);
  const checked = items.filter((i) => checkedItems.has(i.id)).length;
  const total = items.length;
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

  const statusColor =
    pct === 100
      ? "bg-green-500"
      : pct > 0
      ? "bg-indigo-500"
      : "bg-gray-300";

  return (
    <Link href={`/room/${roomId}`} className="block">
      <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow active:scale-[0.98] transition-transform">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{room.icon}</span>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {room.name}
              </h2>
              <p className="text-sm text-gray-500">
                {checked}/{total} items
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold ${
                pct === 100 ? "text-green-600" : "text-indigo-600"
              }`}
            >
              {pct}%
            </span>
            <div className={`w-3 h-3 rounded-full ${statusColor}`} />
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${
              pct === 100 ? "bg-green-500" : "bg-indigo-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const { checkedItems, loaded } = useCheckedItems();

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  const allItems = Object.keys(rooms).flatMap((r) => getAllItems(r));
  const totalChecked = allItems.filter((i) => checkedItems.has(i.id)).length;
  const totalItems = allItems.length;
  const overallPct =
    totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  return (
    <div className="px-4 py-6 safe-bottom">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Declutter
        </h1>
        <p className="text-sm text-gray-500">
          Room by room, item by item
        </p>
        <div className="mt-4 bg-indigo-50 rounded-2xl p-4">
          <div className="text-3xl font-bold text-indigo-600">{overallPct}%</div>
          <div className="text-xs text-indigo-400 mt-1">
            {totalChecked} of {totalItems} items reviewed
          </div>
          <div className="w-full bg-indigo-100 rounded-full h-2 mt-2">
            <div
              className="h-2 rounded-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${overallPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Color Legend */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {(Object.keys(COLOR_MAP) as Array<keyof typeof COLOR_MAP>).map(
          (color) => (
            <div
              key={color}
              className={`flex flex-col items-center p-2 rounded-xl ${COLOR_MAP[color].bg}`}
            >
              <div
                className="w-4 h-4 rounded-full mb-1"
                style={{ backgroundColor: COLOR_MAP[color].hex }}
              />
              <span className={`text-[10px] font-bold ${COLOR_MAP[color].text}`}>
                {COLOR_MAP[color].label}
              </span>
            </div>
          )
        )}
      </div>

      {/* Room Cards */}
      <div className="space-y-3 mb-6">
        {Object.keys(rooms).map((roomId) => (
          <RoomCard
            key={roomId}
            roomId={roomId}
            checkedItems={checkedItems}
          />
        ))}
      </div>

      {/* Stats Link */}
      <Link href="/stats" className="block">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-5 text-white text-center hover:shadow-lg transition-shadow active:scale-[0.98] transition-transform">
          <span className="text-2xl block mb-1">📊</span>
          <span className="font-semibold">My Stats</span>
        </div>
      </Link>
    </div>
  );
}
