# Declutter

A mobile-first Progressive Web App to help you declutter your home room by room. Each item is color-coded so you know exactly what to **trash**, **donate**, **keep**, or **decide on**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8)

## Features

- **3 Rooms** — Bedroom, Bathroom, Kitchen with 300+ curated checklist items
- **Color-Coded System**
  - :red_circle: **TRASH** — Expired, broken, damaged, worn out
  - :orange_circle: **DECIDE** — Check dates, evaluate condition
  - :large_blue_circle: **DONATE** — Good condition but not for you
  - :green_circle: **KEEP** — Use regularly, need it, love it
- **Collapsible Sections** — Organized by category and subcategory
- **Search & Filter** — Find items quickly or filter by color category
- **Progress Tracking** — Per-section, per-room, and overall percentages
- **Stats Dashboard** — Category breakdown, room progress, bags filled tracker
- **Offline Ready** — Works without internet, installable on your phone
- **Persistent** — All progress saved to localStorage across sessions

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State | localStorage |
| PWA | Web App Manifest |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) on your phone or browser.

## Project Structure

```
src/
  app/
    page.tsx                  # Home — room cards with progress
    room/[roomId]/page.tsx    # Room — checklist with search & filters
    stats/page.tsx            # Stats — dashboard & bags tracker
    layout.tsx                # Root layout with PWA config
    globals.css               # Tailwind + custom styles
  data/
    rooms.ts                  # All room/section/item data
  hooks/
    useLocalStorage.ts        # Persistence hooks
public/
  manifest.json               # PWA manifest
  icon-*.svg                  # App icons
```

## Deploy

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rach16/declutter-app)

Or manually:

```bash
npx vercel
```

## License

MIT
