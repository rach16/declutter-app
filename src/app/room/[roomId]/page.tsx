"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { rooms, COLOR_MAP, type ItemColor } from "@/data/rooms";
import { useCheckedItems } from "@/hooks/useLocalStorage";

function ColorDot({ color }: { color: ItemColor }) {
  return (
    <span
      className="inline-block w-3 h-3 rounded-full flex-shrink-0"
      style={{ backgroundColor: COLOR_MAP[color].hex }}
      title={COLOR_MAP[color].label}
    />
  );
}

export default function RoomPage() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.roomId as string;
  const room = rooms[roomId];

  const { checkedItems, toggleItem, isChecked, loaded } = useCheckedItems();
  const [search, setSearch] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [expandedSubs, setExpandedSubs] = useState<Set<string>>(new Set());
  const [colorFilter, setColorFilter] = useState<ItemColor | "all">("all");

  // Auto-expand all sections on first load
  const [initialized, setInitialized] = useState(false);
  if (!initialized && room) {
    const sectionKeys = new Set(room.sections.map((s) => s.name));
    setExpandedSections(sectionKeys);
    setInitialized(true);
  }

  const toggleSection = (name: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleSub = (name: string) => {
    setExpandedSubs((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const filteredRoom = useMemo(() => {
    if (!room) return null;
    const q = search.toLowerCase();
    return {
      ...room,
      sections: room.sections
        .map((section) => ({
          ...section,
          subsections: section.subsections
            .map((sub) => ({
              ...sub,
              items: sub.items.filter((item) => {
                const matchSearch = !q || item.text.toLowerCase().includes(q);
                const matchColor =
                  colorFilter === "all" || item.color === colorFilter;
                return matchSearch && matchColor;
              }),
            }))
            .filter((sub) => sub.items.length > 0),
        }))
        .filter((section) => section.subsections.length > 0),
    };
  }, [room, search, colorFilter]);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!room || !filteredRoom) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-gray-500">Room not found</p>
        <button
          onClick={() => router.push("/")}
          className="text-indigo-600 font-medium"
        >
          Go Home
        </button>
      </div>
    );
  }

  // Progress
  const allItems = room.sections.flatMap((s) =>
    s.subsections.flatMap((ss) => ss.items)
  );
  const totalChecked = allItems.filter((i) => checkedItems.has(i.id)).length;
  const totalItems = allItems.length;
  const pct = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  return (
    <div className="pb-6 safe-bottom">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
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
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-indigo-600">{pct}%</span>
            <span className="text-xs text-gray-400">
              {totalChecked}/{totalItems}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{room.icon}</span>
          <h1 className="text-xl font-bold text-gray-900">{room.name}</h1>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              pct === 100 ? "bg-green-500" : "bg-indigo-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Search */}
        <div className="relative mb-2">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Color filter */}
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setColorFilter("all")}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex-shrink-0 ${
              colorFilter === "all"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            All
          </button>
          {(Object.keys(COLOR_MAP) as ItemColor[]).map((color) => (
            <button
              key={color}
              onClick={() =>
                setColorFilter(colorFilter === color ? "all" : color)
              }
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                colorFilter === color
                  ? `${COLOR_MAP[color].bg} ${COLOR_MAP[color].text}`
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: COLOR_MAP[color].hex }}
              />
              {COLOR_MAP[color].label}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="px-4 mt-3">
        {filteredRoom.sections.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg mb-1">No items found</p>
            <p className="text-sm">Try adjusting your search or filter</p>
          </div>
        ) : (
          filteredRoom.sections.map((section) => {
            const sectionItems = section.subsections.flatMap(
              (ss) => ss.items
            );
            const sectionChecked = sectionItems.filter((i) =>
              checkedItems.has(i.id)
            ).length;
            const sectionTotal = sectionItems.length;
            const sectionPct =
              sectionTotal > 0
                ? Math.round((sectionChecked / sectionTotal) * 100)
                : 0;
            const isExpanded = expandedSections.has(section.name);

            return (
              <div
                key={section.name}
                className="mb-3 bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.name)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <svg
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="font-semibold text-sm text-gray-800 truncate">
                      {section.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                    {sectionPct}%
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4">
                    {section.subsections.map((sub) => {
                      const subChecked = sub.items.filter((i) =>
                        checkedItems.has(i.id)
                      ).length;
                      const subKey = `${section.name}-${sub.name}`;
                      const isSubExpanded = expandedSubs.has(subKey);

                      return (
                        <div key={sub.name} className="mb-2">
                          <button
                            onClick={() => toggleSub(subKey)}
                            className="w-full flex items-center justify-between py-2 text-left"
                          >
                            <div className="flex items-center gap-2">
                              <svg
                                className={`w-3 h-3 text-gray-400 transition-transform ${
                                  isSubExpanded ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                              <span className="text-sm font-medium text-gray-700">
                                {sub.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-400">
                              {subChecked}/{sub.items.length}
                            </span>
                          </button>

                          {isSubExpanded && (
                            <div className="ml-5 space-y-1 mt-1">
                              {sub.items.map((item) => {
                                const checked = isChecked(item.id);
                                return (
                                  <label
                                    key={item.id}
                                    className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-colors ${
                                      checked
                                        ? "bg-gray-100 opacity-60"
                                        : COLOR_MAP[item.color].bg
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => toggleItem(item.id)}
                                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0"
                                    />
                                    <span
                                      className={`text-sm leading-snug flex-1 ${
                                        checked
                                          ? "line-through text-gray-400"
                                          : "text-gray-800"
                                      }`}
                                    >
                                      {item.text}
                                    </span>
                                    <ColorDot color={item.color} />
                                  </label>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
