"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { rooms, COLOR_MAP, ACTION_CONFIG, type ItemColor } from "@/data/rooms";
import { useItemActions, type ItemAction } from "@/hooks/useLocalStorage";

const ACTIONS: ItemAction[] = ["trash", "donate", "keep", "skip"];

export default function RoomPage() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.roomId as string;
  const room = rooms[roomId];

  const { actions, setItemAction, clearItemAction, getItemAction, loaded } = useItemActions();
  const [search, setSearch] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandedSubs, setExpandedSubs] = useState<Set<string>>(new Set());
  const [colorFilter, setColorFilter] = useState<ItemColor | "all">("all");
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const [initialized, setInitialized] = useState(false);
  if (!initialized && room) {
    setExpandedSections(new Set(room.sections.map((s) => s.name)));
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
                const matchColor = colorFilter === "all" || item.color === colorFilter;
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
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  if (!room || !filteredRoom) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <p className="text-gray-400">Room not found</p>
        <button onClick={() => router.push("/")} className="text-sm font-medium text-gray-900 underline">
          Go Home
        </button>
      </div>
    );
  }

  const allItems = room.sections.flatMap((s) => s.subsections.flatMap((ss) => ss.items));
  const totalActioned = allItems.filter((i) => i.id in actions).length;
  const totalItems = allItems.length;
  const pct = totalItems > 0 ? Math.round((totalActioned / totalItems) * 100) : 0;

  return (
    <div className="pb-8 safe-bottom">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-1 text-sm font-medium text-gray-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="text-xs text-gray-400 tabular-nums">{totalActioned}/{totalItems}</span>
        </div>

        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-xl">{room.icon}</span>
          <h1 className="text-lg font-bold text-gray-900 tracking-tight">{room.name}</h1>
          <span className={`ml-auto text-sm font-semibold tabular-nums ${pct === 100 ? "text-emerald-600" : "text-gray-900"}`}>
            {pct}%
          </span>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${pct === 100 ? "bg-emerald-500" : "bg-gray-900"}`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Search */}
        <div className="relative mb-2.5">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Color filter */}
        <div className="flex gap-1.5 overflow-x-auto">
          <button
            onClick={() => setColorFilter("all")}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors flex-shrink-0 ${
              colorFilter === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            All
          </button>
          {(Object.keys(COLOR_MAP) as ItemColor[]).map((color) => (
            <button
              key={color}
              onClick={() => setColorFilter(colorFilter === color ? "all" : color)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                colorFilter === color ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLOR_MAP[color].hex }} />
              {COLOR_MAP[color].label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 mt-4">
        {filteredRoom.sections.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">No items match your search.</p>
          </div>
        ) : (
          filteredRoom.sections.map((section) => {
            const sectionItems = section.subsections.flatMap((ss) => ss.items);
            const sectionActioned = sectionItems.filter((i) => i.id in actions).length;
            const sectionTotal = sectionItems.length;
            const sectionPct = sectionTotal > 0 ? Math.round((sectionActioned / sectionTotal) * 100) : 0;
            const isExpanded = expandedSections.has(section.name);

            return (
              <div key={section.name} className="mb-3">
                <button
                  onClick={() => toggleSection(section.name)}
                  className="w-full flex items-center justify-between py-2.5 text-left"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <svg
                      className={`w-3.5 h-3.5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-[13px] font-semibold text-gray-900 truncate">{section.name}</span>
                  </div>
                  <span className="text-[11px] text-gray-400 tabular-nums ml-2 flex-shrink-0">
                    {sectionActioned}/{sectionTotal} · {sectionPct}%
                  </span>
                </button>

                {isExpanded && (
                  <div className="ml-1">
                    {section.subsections.map((sub) => {
                      const subActioned = sub.items.filter((i) => i.id in actions).length;
                      const subKey = `${section.name}-${sub.name}`;
                      const isSubExpanded = expandedSubs.has(subKey);

                      return (
                        <div key={sub.name} className="mb-1">
                          <button
                            onClick={() => toggleSub(subKey)}
                            className="w-full flex items-center justify-between py-2 text-left pl-3"
                          >
                            <div className="flex items-center gap-1.5">
                              <svg
                                className={`w-3 h-3 text-gray-300 transition-transform duration-200 ${isSubExpanded ? "rotate-90" : ""}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <span className="text-[13px] font-medium text-gray-600">{sub.name}</span>
                            </div>
                            <span className="text-[11px] text-gray-400 tabular-nums">{subActioned}/{sub.items.length}</span>
                          </button>

                          {isSubExpanded && (
                            <div className="ml-6 space-y-1.5 mt-1 mb-3">
                              {sub.items.map((item) => {
                                const currentAction = getItemAction(item.id);
                                const isActive = activeItem === item.id;
                                const isDone = !!currentAction;

                                return (
                                  <div key={item.id}>
                                    {/* Item row */}
                                    <button
                                      onClick={() => setActiveItem(isActive ? null : item.id)}
                                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                                        isDone
                                          ? "bg-gray-50 border-gray-100"
                                          : `${COLOR_MAP[item.color].bg} border ${COLOR_MAP[item.color].border}`
                                      }`}
                                    >
                                      <div className="flex items-start gap-2.5">
                                        {/* Status indicator */}
                                        {isDone ? (
                                          <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px]"
                                            style={{ backgroundColor: ACTION_CONFIG[currentAction].hex }}
                                          >
                                            {ACTION_CONFIG[currentAction].icon}
                                          </div>
                                        ) : (
                                          <div
                                            className="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5"
                                            style={{ borderColor: COLOR_MAP[item.color].hex }}
                                          />
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <span className={`text-[13px] leading-snug ${isDone ? "text-gray-400 line-through" : "text-gray-800"}`}>
                                            {item.text}
                                          </span>
                                          {isDone && (
                                            <span className="ml-2 text-[10px] font-medium uppercase tracking-wide" style={{ color: ACTION_CONFIG[currentAction].hex }}>
                                              {ACTION_CONFIG[currentAction].label}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </button>

                                    {/* Action buttons - shown when item is tapped */}
                                    {isActive && (
                                      <div className="flex gap-1.5 mt-1.5 ml-7">
                                        {ACTIONS.map((action) => {
                                          const config = ACTION_CONFIG[action];
                                          const isSelected = currentAction === action;
                                          return (
                                            <button
                                              key={action}
                                              onClick={() => {
                                                if (isSelected) {
                                                  clearItemAction(item.id);
                                                } else {
                                                  setItemAction(item.id, action);
                                                }
                                                setActiveItem(null);
                                              }}
                                              className={`flex-1 py-2 rounded-lg text-[11px] font-semibold transition-all border ${
                                                isSelected
                                                  ? `${config.activeBg} text-white border-transparent`
                                                  : `${config.bg} ${config.text}`
                                              }`}
                                            >
                                              <span className="block text-center">
                                                {config.icon} {config.label}
                                              </span>
                                            </button>
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
