export type ItemColor = "red" | "orange" | "blue" | "green";

export interface Item {
  id: string;
  text: string;
  color: ItemColor;
}

export interface Subsection {
  name: string;
  items: Item[];
}

export interface Section {
  name: string;
  subsections: Subsection[];
}

export interface Room {
  name: string;
  icon: string;
  sections: Section[];
}

export interface Rooms {
  [key: string]: Room;
}

export const COLOR_MAP: Record<ItemColor, { hex: string; label: string; bg: string; border: string; text: string }> = {
  red: { hex: "#DC3545", label: "TRASH", bg: "bg-red-50", border: "border-red-300", text: "text-red-600" },
  orange: { hex: "#F59E0B", label: "DECIDE", bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-600" },
  blue: { hex: "#3B82F6", label: "DONATE", bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-600" },
  green: { hex: "#22C55E", label: "KEEP", bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-600" },
};

import type { ItemAction } from "@/hooks/useLocalStorage";

export const ACTION_CONFIG: Record<ItemAction, { label: string; icon: string; bg: string; activeBg: string; text: string; hex: string }> = {
  trash: { label: "Trash", icon: "🗑", bg: "bg-red-50 border-red-200", activeBg: "bg-red-500", text: "text-red-700", hex: "#EF4444" },
  donate: { label: "Donate", icon: "📦", bg: "bg-blue-50 border-blue-200", activeBg: "bg-blue-500", text: "text-blue-700", hex: "#3B82F6" },
  keep: { label: "Keep", icon: "✓", bg: "bg-emerald-50 border-emerald-200", activeBg: "bg-emerald-500", text: "text-emerald-700", hex: "#22C55E" },
  skip: { label: "Skip", icon: "—", bg: "bg-gray-50 border-gray-200", activeBg: "bg-gray-400", text: "text-gray-600", hex: "#9CA3AF" },
};

export const rooms: Rooms = {
  bedroom: {
    name: "Bedroom",
    icon: "\u{1F6CF}\uFE0F",
    sections: [
      {
        name: "Closet - Clothing",
        subsections: [
          {
            name: "Tops (Shirts, Blouses, T-shirts, Sweaters)",
            items: [
              { id: "bed-tops-1", text: "Stained shirts (pit stains, food stains, bleach spots)", color: "red" },
              { id: "bed-tops-2", text: "Shirts with holes, tears, or pilling", color: "red" },
              { id: "bed-tops-3", text: "Faded or discolored tops", color: "red" },
              { id: "bed-tops-4", text: "Stretched out necklines or hems", color: "red" },
              { id: "bed-tops-5", text: "Tops that don't fit - too small", color: "blue" },
              { id: "bed-tops-6", text: "Tops that don't fit - too large", color: "blue" },
              { id: "bed-tops-7", text: "Tops not worn in 12+ months (good condition)", color: "blue" },
              { id: "bed-tops-8", text: "Tops you keep for 'someday' weight loss", color: "orange" },
              { id: "bed-tops-9", text: "Unflattering colors/styles you never reach for", color: "blue" },
              { id: "bed-tops-10", text: "Work clothes from old job you'll never wear again", color: "blue" },
              { id: "bed-tops-11", text: "Tops you wear weekly/monthly", color: "green" },
              { id: "bed-tops-12", text: "Favorite comfortable basics", color: "green" },
            ],
          },
          {
            name: "Bottoms (Pants, Jeans, Shorts, Skirts)",
            items: [
              { id: "bed-bot-1", text: "Pants with broken zippers you haven't fixed", color: "red" },
              { id: "bed-bot-2", text: "Jeans with holes in inner thighs", color: "red" },
              { id: "bed-bot-3", text: "Stained or bleached pants", color: "red" },
              { id: "bed-bot-4", text: "Pants that don't fit at the waist", color: "blue" },
              { id: "bed-bot-5", text: "Pants that are too long/short and you never hem", color: "blue" },
              { id: "bed-bot-6", text: "Shorts you haven't worn in 2+ summers", color: "blue" },
              { id: "bed-bot-7", text: "Skirts from a style you no longer wear", color: "blue" },
              { id: "bed-bot-8", text: "'Skinny' clothes kept for motivation", color: "orange" },
              { id: "bed-bot-9", text: "Pants you wear regularly", color: "green" },
            ],
          },
          {
            name: "Dresses & Jumpsuits",
            items: [
              { id: "bed-dress-1", text: "Dresses with broken zippers or missing buttons", color: "red" },
              { id: "bed-dress-2", text: "Stained or faded dresses", color: "red" },
              { id: "bed-dress-3", text: "Formal dresses worn once (wedding guest, etc.)", color: "orange" },
              { id: "bed-dress-4", text: "Dresses that no longer fit your lifestyle", color: "blue" },
              { id: "bed-dress-5", text: "Bridesmaid dresses you'll never wear again", color: "blue" },
              { id: "bed-dress-6", text: "Dresses you feel great in and wear", color: "green" },
            ],
          },
          {
            name: "Outerwear (Coats, Jackets, Hoodies)",
            items: [
              { id: "bed-outer-1", text: "Coats with broken zippers", color: "red" },
              { id: "bed-outer-2", text: "Jackets with permanent stains", color: "red" },
              { id: "bed-outer-3", text: "Pilling or worn fleece jackets", color: "red" },
              { id: "bed-outer-4", text: "Coats that don't fit", color: "blue" },
              { id: "bed-outer-5", text: "Trendy jackets from 5+ years ago", color: "blue" },
              { id: "bed-outer-6", text: "Duplicate coats for same purpose", color: "orange" },
              { id: "bed-outer-7", text: "Coats you never wear (too formal, wrong climate)", color: "blue" },
              { id: "bed-outer-8", text: "Your go-to jacket for each season", color: "green" },
              { id: "bed-outer-9", text: "One nice coat for formal occasions", color: "green" },
            ],
          },
          {
            name: "Activewear & Loungewear",
            items: [
              { id: "bed-active-1", text: "Stretched out yoga pants/leggings", color: "red" },
              { id: "bed-active-2", text: "Sports bras that have lost elasticity", color: "red" },
              { id: "bed-active-3", text: "Pilling or faded workout clothes", color: "red" },
              { id: "bed-active-4", text: "Gym clothes that smell even after washing", color: "red" },
              { id: "bed-active-5", text: "Activewear you don't exercise in", color: "blue" },
              { id: "bed-active-6", text: "Loungewear with holes (unless truly loved)", color: "orange" },
              { id: "bed-active-7", text: "Workout clothes you actually use", color: "green" },
              { id: "bed-active-8", text: "Comfortable loungewear for home", color: "green" },
            ],
          },
          {
            name: "Sleepwear",
            items: [
              { id: "bed-sleep-1", text: "Pajamas with holes or tears", color: "red" },
              { id: "bed-sleep-2", text: "Stained nightgowns/pajamas", color: "red" },
              { id: "bed-sleep-3", text: "Old t-shirts used as pajamas (holey, stretched)", color: "red" },
              { id: "bed-sleep-4", text: "Pajamas that don't fit", color: "blue" },
              { id: "bed-sleep-5", text: "Robes that are worn out", color: "red" },
              { id: "bed-sleep-6", text: "2-3 sets of comfortable sleepwear", color: "green" },
              { id: "bed-sleep-7", text: "One good robe", color: "green" },
            ],
          },
          {
            name: "Underwear & Bras",
            items: [
              { id: "bed-under-1", text: "Underwear with holes or stretched elastic", color: "red" },
              { id: "bed-under-2", text: "Bras with broken underwires", color: "red" },
              { id: "bed-under-3", text: "Bras that don't fit (band or cup size)", color: "red" },
              { id: "bed-under-4", text: "Stained underwear", color: "red" },
              { id: "bed-under-5", text: "Shapewear you never wear", color: "blue" },
              { id: "bed-under-6", text: "Uncomfortable underwear you avoid", color: "red" },
              { id: "bed-under-7", text: "Single socks (wait 1 month for match, then toss)", color: "orange" },
              { id: "bed-under-8", text: "Socks with holes", color: "red" },
              { id: "bed-under-9", text: "Socks that have lost elasticity", color: "red" },
              { id: "bed-under-10", text: "Well-fitting, comfortable everyday underwear", color: "green" },
              { id: "bed-under-11", text: "3-4 well-fitting bras", color: "green" },
              { id: "bed-under-12", text: "Matched sock pairs in good condition", color: "green" },
            ],
          },
          {
            name: "Formal Wear & Special Occasion",
            items: [
              { id: "bed-formal-1", text: "Suits that don't fit", color: "blue" },
              { id: "bed-formal-2", text: "Outdated formal wear (very dated style)", color: "blue" },
              { id: "bed-formal-3", text: "Formal wear for events you no longer attend", color: "blue" },
              { id: "bed-formal-4", text: "One good suit/formal outfit", color: "green" },
              { id: "bed-formal-5", text: "Versatile dressy pieces", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Closet - Shoes",
        subsections: [
          {
            name: "Everyday Shoes",
            items: [
              { id: "bed-shoe-1", text: "Shoes with holes in soles", color: "red" },
              { id: "bed-shoe-2", text: "Shoes with broken heels", color: "red" },
              { id: "bed-shoe-3", text: "Shoes that smell even after cleaning", color: "red" },
              { id: "bed-shoe-4", text: "Shoes that hurt your feet", color: "red" },
              { id: "bed-shoe-5", text: "Shoes with worn out insoles", color: "red" },
              { id: "bed-shoe-6", text: "Shoes that don't fit (too small/large)", color: "blue" },
              { id: "bed-shoe-7", text: "Shoes you haven't worn in 2+ years", color: "blue" },
              { id: "bed-shoe-8", text: "Trendy shoes from seasons past", color: "blue" },
              { id: "bed-shoe-9", text: "Duplicate styles (3+ black flats, etc.)", color: "orange" },
              { id: "bed-shoe-10", text: "Comfortable everyday shoes you wear", color: "green" },
            ],
          },
          {
            name: "Boots",
            items: [
              { id: "bed-boot-1", text: "Boots with broken zippers", color: "red" },
              { id: "bed-boot-2", text: "Cracked or peeling leather boots", color: "red" },
              { id: "bed-boot-3", text: "Boots that leak water", color: "red" },
              { id: "bed-boot-4", text: "Boots that hurt your feet", color: "red" },
              { id: "bed-boot-5", text: "Boots you haven't worn in 3+ winters", color: "blue" },
              { id: "bed-boot-6", text: "Good condition boots for your climate", color: "green" },
            ],
          },
          {
            name: "Athletic Shoes",
            items: [
              { id: "bed-ath-1", text: "Running shoes with worn treads (replace every 300-500 miles)", color: "red" },
              { id: "bed-ath-2", text: "Gym shoes that smell permanently", color: "red" },
              { id: "bed-ath-3", text: "Athletic shoes you don't exercise in", color: "blue" },
              { id: "bed-ath-4", text: "Current athletic shoes you use", color: "green" },
            ],
          },
          {
            name: "Dress Shoes & Heels",
            items: [
              { id: "bed-heel-1", text: "Heels with broken or worn tips", color: "red" },
              { id: "bed-heel-2", text: "Scuffed dress shoes beyond repair", color: "red" },
              { id: "bed-heel-3", text: "Heels that are painful to wear", color: "orange" },
              { id: "bed-heel-4", text: "Dress shoes that don't match anything you own", color: "blue" },
              { id: "bed-heel-5", text: "Comfortable dress shoes/heels for events", color: "green" },
            ],
          },
          {
            name: "Sandals & Seasonal",
            items: [
              { id: "bed-sand-1", text: "Flip flops with worn footbeds", color: "red" },
              { id: "bed-sand-2", text: "Sandals with broken straps", color: "red" },
              { id: "bed-sand-3", text: "Sandals from 5+ years ago", color: "orange" },
              { id: "bed-sand-4", text: "Sandals you wear each summer", color: "green" },
            ],
          },
          {
            name: "Specialty Shoes",
            items: [
              { id: "bed-spec-1", text: "Hiking boots you haven't hiked in 3+ years", color: "blue" },
              { id: "bed-spec-2", text: "Specialty sport shoes for activities you quit", color: "blue" },
              { id: "bed-spec-3", text: "Slippers that are worn out", color: "red" },
              { id: "bed-spec-4", text: "One good pair of slippers", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Closet - Accessories",
        subsections: [
          {
            name: "Bags & Purses",
            items: [
              { id: "bed-bag-1", text: "Bags with broken zippers or straps", color: "red" },
              { id: "bed-bag-2", text: "Bags with torn lining", color: "red" },
              { id: "bed-bag-3", text: "Stained or peeling purses", color: "red" },
              { id: "bed-bag-4", text: "Bags you haven't used in 2+ years", color: "blue" },
              { id: "bed-bag-5", text: "Trendy bags from past seasons", color: "blue" },
              { id: "bed-bag-6", text: "Free tote bags (keep 2-3 max)", color: "orange" },
              { id: "bed-bag-7", text: "Duplicate styles you don't need", color: "blue" },
              { id: "bed-bag-8", text: "Your everyday bag", color: "green" },
              { id: "bed-bag-9", text: "One dressy bag for events", color: "green" },
              { id: "bed-bag-10", text: "One practical travel/weekend bag", color: "green" },
            ],
          },
          {
            name: "Belts",
            items: [
              { id: "bed-belt-1", text: "Belts with cracked or peeling leather", color: "red" },
              { id: "bed-belt-2", text: "Belts that don't fit", color: "red" },
              { id: "bed-belt-3", text: "Belts with broken buckles", color: "red" },
              { id: "bed-belt-4", text: "Belts you never wear", color: "blue" },
              { id: "bed-belt-5", text: "1-2 belts that fit and match your wardrobe", color: "green" },
            ],
          },
          {
            name: "Scarves & Wraps",
            items: [
              { id: "bed-scarf-1", text: "Scarves with pulls or holes", color: "red" },
              { id: "bed-scarf-2", text: "Scarves you've never worn (still has tags)", color: "blue" },
              { id: "bed-scarf-3", text: "Scarves that don't match anything", color: "blue" },
              { id: "bed-scarf-4", text: "Too many similar scarves (keep favorites)", color: "orange" },
              { id: "bed-scarf-5", text: "Scarves you actually wear", color: "green" },
            ],
          },
          {
            name: "Jewelry",
            items: [
              { id: "bed-jew-1", text: "Broken jewelry you won't repair", color: "red" },
              { id: "bed-jew-2", text: "Tarnished jewelry beyond cleaning", color: "red" },
              { id: "bed-jew-3", text: "Single earrings (missing pair)", color: "red" },
              { id: "bed-jew-4", text: "Tangled necklaces beyond saving", color: "red" },
              { id: "bed-jew-5", text: "Costume jewelry that's turned green/discolored", color: "red" },
              { id: "bed-jew-6", text: "Jewelry you never wear (not sentimental)", color: "blue" },
              { id: "bed-jew-7", text: "Jewelry from exes you don't want", color: "orange" },
              { id: "bed-jew-8", text: "Pieces that don't match your style anymore", color: "blue" },
              { id: "bed-jew-9", text: "Everyday jewelry you love", color: "green" },
              { id: "bed-jew-10", text: "Sentimental pieces (even if not worn)", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Dresser & Nightstand",
        subsections: [
          {
            name: "Dresser Drawers",
            items: [
              { id: "bed-dresser-1", text: "Random receipts and papers", color: "red" },
              { id: "bed-dresser-2", text: "Old gift cards (check balances first)", color: "orange" },
              { id: "bed-dresser-3", text: "Coins (collect and cash in)", color: "orange" },
              { id: "bed-dresser-4", text: "Expired coupons", color: "red" },
              { id: "bed-dresser-5", text: "Broken items collecting dust", color: "red" },
              { id: "bed-dresser-6", text: "Keys to unknown locks", color: "orange" },
              { id: "bed-dresser-7", text: "Old phones/chargers", color: "orange" },
              { id: "bed-dresser-8", text: "Items that belong in other rooms", color: "orange" },
            ],
          },
          {
            name: "Nightstand",
            items: [
              { id: "bed-night-1", text: "Old receipts and random papers", color: "red" },
              { id: "bed-night-2", text: "Expired medications", color: "red" },
              { id: "bed-night-3", text: "Empty pill bottles", color: "red" },
              { id: "bed-night-4", text: "Broken electronics", color: "red" },
              { id: "bed-night-5", text: "Old magazines", color: "red" },
              { id: "bed-night-6", text: "Books you've read and won't read again", color: "blue" },
              { id: "bed-night-7", text: "Books you'll never read (be honest)", color: "blue" },
              { id: "bed-night-8", text: "Tangled cables for old devices", color: "red" },
              { id: "bed-night-9", text: "Dead batteries", color: "red" },
              { id: "bed-night-10", text: "Dried-up pens", color: "red" },
              { id: "bed-night-11", text: "Phone/tablet charger", color: "green" },
              { id: "bed-night-12", text: "Current book you're reading", color: "green" },
              { id: "bed-night-13", text: "Glasses/eye mask/earplugs", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Linens & Bedding",
        subsections: [
          {
            name: "Sheets",
            items: [
              { id: "bed-sheet-1", text: "Sheets with holes or tears", color: "red" },
              { id: "bed-sheet-2", text: "Stained sheets (even if clean)", color: "red" },
              { id: "bed-sheet-3", text: "Pilling sheets", color: "red" },
              { id: "bed-sheet-4", text: "Mismatched sheet sets (missing pieces)", color: "orange" },
              { id: "bed-sheet-5", text: "Sheets that don't fit current mattress", color: "blue" },
              { id: "bed-sheet-6", text: "2-3 complete sheet sets per bed", color: "green" },
            ],
          },
          {
            name: "Pillows & Blankets",
            items: [
              { id: "bed-pillow-1", text: "Flat, lumpy pillows", color: "red" },
              { id: "bed-pillow-2", text: "Yellowed pillows", color: "red" },
              { id: "bed-pillow-3", text: "Pillows older than 2 years", color: "orange" },
              { id: "bed-pillow-4", text: "Extra decorative pillows you hate arranging", color: "blue" },
              { id: "bed-pillow-5", text: "Blankets with holes", color: "red" },
              { id: "bed-pillow-6", text: "Stained comforters", color: "red" },
              { id: "bed-pillow-7", text: "Too many throw blankets (keep 2-3)", color: "orange" },
              { id: "bed-pillow-8", text: "2 good sleeping pillows per person", color: "green" },
              { id: "bed-pillow-9", text: "Current comforter/duvet", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Under the Bed",
        subsections: [
          {
            name: "Storage Containers",
            items: [
              { id: "bed-underbed-1", text: "Unlabeled boxes you haven't opened in a year", color: "orange" },
              { id: "bed-underbed-2", text: "Broken storage bins (cracked lids, warped)", color: "red" },
              { id: "bed-underbed-3", text: "Storage containers with items you forgot about", color: "orange" },
              { id: "bed-underbed-4", text: "Seasonal clothes in labeled bins", color: "green" },
              { id: "bed-underbed-5", text: "Extra bedding in sealed bags", color: "green" },
            ],
          },
          {
            name: "Random Items",
            items: [
              { id: "bed-underbed-6", text: "Dust bunnies and lost items (clean it out!)", color: "red" },
              { id: "bed-underbed-7", text: "Old magazines and newspapers", color: "red" },
              { id: "bed-underbed-8", text: "Single shoes or slippers (missing pair)", color: "red" },
              { id: "bed-underbed-9", text: "Old gift bags and wrapping paper (wrinkled)", color: "red" },
              { id: "bed-underbed-10", text: "Exercise equipment you never use", color: "blue" },
              { id: "bed-underbed-11", text: "Books you've already read", color: "blue" },
              { id: "bed-underbed-12", text: "Old electronics and chargers", color: "orange" },
              { id: "bed-underbed-13", text: "Luggage you use for travel", color: "green" },
            ],
          },
        ],
      },
    ],
  },
  bathroom: {
    name: "Bathroom",
    icon: "\u{1F6BF}",
    sections: [
      {
        name: "Medicine Cabinet",
        subsections: [
          {
            name: "Prescription Medications",
            items: [
              { id: "bath-rx-1", text: "Expired prescriptions (dispose properly)", color: "red" },
              { id: "bath-rx-2", text: "Medications for conditions you no longer have", color: "red" },
              { id: "bath-rx-3", text: "Medications from people who don't live here", color: "red" },
              { id: "bath-rx-4", text: "Prescriptions you stopped taking", color: "orange" },
              { id: "bath-rx-5", text: "Current prescriptions (check expiration)", color: "green" },
            ],
          },
          {
            name: "Over-the-Counter Medications",
            items: [
              { id: "bath-otc-1", text: "Expired pain relievers (check date!)", color: "red" },
              { id: "bath-otc-2", text: "Expired cold/flu medicine", color: "red" },
              { id: "bath-otc-3", text: "Expired allergy medicine", color: "red" },
              { id: "bath-otc-4", text: "Expired stomach remedies", color: "red" },
              { id: "bath-otc-5", text: "Expired first aid ointments", color: "red" },
              { id: "bath-otc-6", text: "Medications you never use", color: "orange" },
              { id: "bath-otc-7", text: "Duplicate medications (consolidate)", color: "orange" },
              { id: "bath-otc-8", text: "Basic first aid supplies (in-date)", color: "green" },
              { id: "bath-otc-9", text: "Pain relievers you use (check date)", color: "green" },
            ],
          },
          {
            name: "Vitamins & Supplements",
            items: [
              { id: "bath-vit-1", text: "Expired vitamins (check date!)", color: "red" },
              { id: "bath-vit-2", text: "Supplements you stopped taking", color: "orange" },
              { id: "bath-vit-3", text: "Supplements you bought but never started", color: "orange" },
              { id: "bath-vit-4", text: "Duplicates (consolidate)", color: "orange" },
              { id: "bath-vit-5", text: "Current vitamins you take daily", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Skincare Products",
        subsections: [
          {
            name: "Cleansers & Toners",
            items: [
              { id: "bath-clean-1", text: "Expired cleansers", color: "red" },
              { id: "bath-clean-2", text: "Cleansers that irritated your skin", color: "red" },
              { id: "bath-clean-3", text: "Cleansers that didn't work for you", color: "blue" },
              { id: "bath-clean-4", text: "Almost-empty bottles (just finish them)", color: "orange" },
              { id: "bath-clean-5", text: "Expired toners (6-12 months after opening)", color: "red" },
              { id: "bath-clean-6", text: "Your current daily cleanser", color: "green" },
              { id: "bath-clean-7", text: "Toners you use in current routine", color: "green" },
            ],
          },
          {
            name: "Serums & Treatments",
            items: [
              { id: "bath-serum-1", text: "Vitamin C that turned orange/brown", color: "red" },
              { id: "bath-serum-2", text: "Retinol older than 6 months", color: "red" },
              { id: "bath-serum-3", text: "Serums that irritated your skin", color: "red" },
              { id: "bath-serum-4", text: "Expensive serums that didn't work", color: "orange" },
              { id: "bath-serum-5", text: "Acne treatments that are expired", color: "red" },
              { id: "bath-serum-6", text: "Serums in your current routine", color: "green" },
            ],
          },
          {
            name: "Moisturizers & Sunscreen",
            items: [
              { id: "bath-moist-1", text: "Expired moisturizers", color: "red" },
              { id: "bath-moist-2", text: "Moisturizers that caused breakouts", color: "red" },
              { id: "bath-moist-3", text: "Old jar moisturizers (bacteria concern)", color: "orange" },
              { id: "bath-moist-4", text: "Sunscreen older than 1 year (won't protect!)", color: "red" },
              { id: "bath-moist-5", text: "Sunscreen that's separated or smells off", color: "red" },
              { id: "bath-moist-6", text: "Your current day/night moisturizer", color: "green" },
              { id: "bath-moist-7", text: "Fresh facial sunscreen", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Makeup",
        subsections: [
          {
            name: "Eye Makeup - CHECK THESE FIRST",
            items: [
              { id: "bath-eye-1", text: "Mascara older than 3 months (bacteria risk!)", color: "red" },
              { id: "bath-eye-2", text: "Liquid eyeliner older than 6 months", color: "red" },
              { id: "bath-eye-3", text: "Mascara that's clumpy or dry", color: "red" },
              { id: "bath-eye-4", text: "Eye makeup that irritates your eyes", color: "red" },
              { id: "bath-eye-5", text: "Pencil eyeliners that are dried out", color: "red" },
              { id: "bath-eye-6", text: "Eyeshadow palettes with hard pan", color: "red" },
              { id: "bath-eye-7", text: "Eyeshadow palettes you never touch", color: "blue" },
              { id: "bath-eye-8", text: "Duplicate neutral palettes (pick favorite)", color: "orange" },
              { id: "bath-eye-9", text: "Fresh mascara (current)", color: "green" },
              { id: "bath-eye-10", text: "Eyeliners you use", color: "green" },
              { id: "bath-eye-11", text: "2-3 eyeshadow palettes you love", color: "green" },
            ],
          },
          {
            name: "Face Makeup",
            items: [
              { id: "bath-face-1", text: "Foundation that's separated", color: "red" },
              { id: "bath-face-2", text: "Foundation that oxidizes on your skin", color: "red" },
              { id: "bath-face-3", text: "Foundation in the wrong shade", color: "blue" },
              { id: "bath-face-4", text: "Foundation older than 12 months", color: "orange" },
              { id: "bath-face-5", text: "Concealer that's old and thick", color: "red" },
              { id: "bath-face-6", text: "Powder products with hard pan", color: "red" },
              { id: "bath-face-7", text: "Blush you never use", color: "blue" },
              { id: "bath-face-8", text: "Current foundation/concealer", color: "green" },
              { id: "bath-face-9", text: "Blush and bronzer you use", color: "green" },
            ],
          },
          {
            name: "Lip Products",
            items: [
              { id: "bath-lip-1", text: "Lipstick that smells waxy or off", color: "red" },
              { id: "bath-lip-2", text: "Lip gloss that's thick and gloopy", color: "red" },
              { id: "bath-lip-3", text: "Lip products older than 2 years", color: "orange" },
              { id: "bath-lip-4", text: "Lip colors you never wear", color: "blue" },
              { id: "bath-lip-5", text: "Lip liners that are dried out", color: "red" },
              { id: "bath-lip-6", text: "Lip colors you actually wear", color: "green" },
            ],
          },
          {
            name: "Makeup Tools",
            items: [
              { id: "bath-tool-1", text: "Makeup sponges older than 3 months", color: "red" },
              { id: "bath-tool-2", text: "Stained or shedding brushes", color: "red" },
              { id: "bath-tool-3", text: "Dirty brushes (clean or toss)", color: "orange" },
              { id: "bath-tool-4", text: "Brushes you never use", color: "blue" },
              { id: "bath-tool-5", text: "Broken compacts", color: "red" },
              { id: "bath-tool-6", text: "Clean brushes you use", color: "green" },
              { id: "bath-tool-7", text: "Current makeup sponge", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Hair Care",
        subsections: [
          {
            name: "Shampoo & Styling",
            items: [
              { id: "bath-hair-1", text: "Expired shampoo/conditioner (2-3 years)", color: "red" },
              { id: "bath-hair-2", text: "Products that don't work for your hair", color: "blue" },
              { id: "bath-hair-3", text: "Almost-empty bottles taking up space", color: "orange" },
              { id: "bath-hair-4", text: "Dried out hair gel", color: "red" },
              { id: "bath-hair-5", text: "Hairspray that doesn't spray well", color: "red" },
              { id: "bath-hair-6", text: "Products for hairstyles you don't do anymore", color: "blue" },
              { id: "bath-hair-7", text: "Current shampoo and conditioner", color: "green" },
              { id: "bath-hair-8", text: "Styling products you use regularly", color: "green" },
            ],
          },
          {
            name: "Hair Tools",
            items: [
              { id: "bath-htool-1", text: "Broken hair dryers", color: "red" },
              { id: "bath-htool-2", text: "Broken flat irons/curling irons", color: "red" },
              { id: "bath-htool-3", text: "Hair tools you never use", color: "blue" },
              { id: "bath-htool-4", text: "Brushes with missing/bent bristles", color: "red" },
              { id: "bath-htool-5", text: "Old hair ties (stretched out)", color: "red" },
              { id: "bath-htool-6", text: "Broken hair clips", color: "red" },
              { id: "bath-htool-7", text: "Hair tools you use weekly", color: "green" },
              { id: "bath-htool-8", text: "Working hair ties and clips", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Oral & Body Care",
        subsections: [
          {
            name: "Oral Care",
            items: [
              { id: "bath-oral-1", text: "Toothbrushes older than 3-4 months", color: "red" },
              { id: "bath-oral-2", text: "Toothbrushes with frayed bristles", color: "red" },
              { id: "bath-oral-3", text: "Old electric toothbrush heads", color: "red" },
              { id: "bath-oral-4", text: "Expired toothpaste", color: "red" },
              { id: "bath-oral-5", text: "Expired mouthwash", color: "red" },
              { id: "bath-oral-6", text: "Current toothbrush (new-ish)", color: "green" },
              { id: "bath-oral-7", text: "Toothpaste (check date)", color: "green" },
              { id: "bath-oral-8", text: "Floss and mouthwash", color: "green" },
            ],
          },
          {
            name: "Bath & Shower",
            items: [
              { id: "bath-show-1", text: "Almost-empty bottles taking up space", color: "orange" },
              { id: "bath-show-2", text: "Body wash you don't like the smell of", color: "blue" },
              { id: "bath-show-3", text: "Loofahs older than 3-4 weeks", color: "red" },
              { id: "bath-show-4", text: "Old razors (rusty or dull)", color: "red" },
              { id: "bath-show-5", text: "Shower poufs that are falling apart", color: "red" },
              { id: "bath-show-6", text: "Current body wash", color: "green" },
              { id: "bath-show-7", text: "Fresh loofah/shower tool", color: "green" },
              { id: "bath-show-8", text: "Current razor with fresh blades", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Towels & Samples",
        subsections: [
          {
            name: "Towels",
            items: [
              { id: "bath-towel-1", text: "Stained towels", color: "red" },
              { id: "bath-towel-2", text: "Towels that smell musty even when clean", color: "red" },
              { id: "bath-towel-3", text: "Threadbare or holey towels", color: "red" },
              { id: "bath-towel-4", text: "Towels that have lost absorbency", color: "red" },
              { id: "bath-towel-5", text: "Too many towels (2-3 per person)", color: "orange" },
              { id: "bath-towel-6", text: "Old washcloths", color: "red" },
              { id: "bath-towel-7", text: "Fresh, absorbent bath towels", color: "green" },
              { id: "bath-towel-8", text: "Fresh hand towels and washcloths", color: "green" },
            ],
          },
          {
            name: "Samples & Travel Sizes",
            items: [
              { id: "bath-sample-1", text: "Samples older than 1-2 years", color: "red" },
              { id: "bath-sample-2", text: "Samples of products that didn't work", color: "red" },
              { id: "bath-sample-3", text: "Hotel toiletries you'll never use", color: "blue" },
              { id: "bath-sample-4", text: "Samples you've been 'saving'", color: "orange" },
              { id: "bath-sample-5", text: "Too many samples (pick 5-10 to keep)", color: "orange" },
              { id: "bath-sample-6", text: "Travel sizes you'll actually travel with", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Bathroom Cabinets & Under Sink",
        subsections: [
          {
            name: "Under Vanity / Sink Cabinet",
            items: [
              { id: "bath-cab-1", text: "Leaking or rusty products under sink", color: "red" },
              { id: "bath-cab-2", text: "Dried-up cleaning products", color: "red" },
              { id: "bath-cab-3", text: "Old sponges and rags", color: "red" },
              { id: "bath-cab-4", text: "Unused feminine hygiene products (expired)", color: "orange" },
              { id: "bath-cab-5", text: "Backup products you already have too many of", color: "orange" },
              { id: "bath-cab-6", text: "Cleaning supplies you never use", color: "blue" },
              { id: "bath-cab-7", text: "Toilet bowl cleaner and bathroom spray", color: "green" },
              { id: "bath-cab-8", text: "Backup toilet paper and tissue", color: "green" },
            ],
          },
          {
            name: "Linen / Storage Cabinet",
            items: [
              { id: "bath-cab-9", text: "Towels that are stained or threadbare", color: "red" },
              { id: "bath-cab-10", text: "Old bathmats (worn, stained, curling)", color: "red" },
              { id: "bath-cab-11", text: "Empty product bottles taking up space", color: "red" },
              { id: "bath-cab-12", text: "Hot tools you never use (old curling iron)", color: "blue" },
              { id: "bath-cab-13", text: "Gift sets still in packaging from years ago", color: "orange" },
              { id: "bath-cab-14", text: "Too many candles (keep a few favorites)", color: "orange" },
              { id: "bath-cab-15", text: "Neatly folded fresh towels", color: "green" },
              { id: "bath-cab-16", text: "First aid kit (check expiration dates)", color: "green" },
            ],
          },
        ],
      },
    ],
  },
  kitchen: {
    name: "Kitchen",
    icon: "\u{1F373}",
    sections: [
      {
        name: "Refrigerator",
        subsections: [
          {
            name: "Dairy",
            items: [
              { id: "kit-dairy-1", text: "Expired milk", color: "red" },
              { id: "kit-dairy-2", text: "Expired yogurt", color: "red" },
              { id: "kit-dairy-3", text: "Moldy cheese", color: "red" },
              { id: "kit-dairy-4", text: "Sour cream past date", color: "red" },
              { id: "kit-dairy-5", text: "Cream cheese past date or dried out", color: "red" },
              { id: "kit-dairy-6", text: "Butter past date or rancid smell", color: "red" },
              { id: "kit-dairy-7", text: "Eggs past date (do the float test)", color: "orange" },
              { id: "kit-dairy-8", text: "Fresh dairy you'll use", color: "green" },
            ],
          },
          {
            name: "Condiments",
            items: [
              { id: "kit-cond-1", text: "Expired ketchup, mustard, mayo", color: "red" },
              { id: "kit-cond-2", text: "Expired salad dressings", color: "red" },
              { id: "kit-cond-3", text: "Expired hot sauce (1-2 years max)", color: "orange" },
              { id: "kit-cond-4", text: "Condiments you never use", color: "orange" },
              { id: "kit-cond-5", text: "Crusted-over bottle tops (clean or toss)", color: "orange" },
              { id: "kit-cond-6", text: "Duplicate condiments (consolidate)", color: "orange" },
              { id: "kit-cond-7", text: "Opened jam/jelly past date", color: "red" },
              { id: "kit-cond-8", text: "Condiments you use regularly", color: "green" },
            ],
          },
          {
            name: "Produce & Leftovers",
            items: [
              { id: "kit-prod-1", text: "Leftovers older than 5-7 days", color: "red" },
              { id: "kit-prod-2", text: "Unidentifiable containers", color: "red" },
              { id: "kit-prod-3", text: "Takeout boxes from last week", color: "red" },
              { id: "kit-prod-4", text: "Wilted, slimy vegetables", color: "red" },
              { id: "kit-prod-5", text: "Moldy fruit", color: "red" },
              { id: "kit-prod-6", text: "Brown, mushy produce", color: "red" },
              { id: "kit-prod-7", text: "Fresh leftovers (label them!)", color: "green" },
              { id: "kit-prod-8", text: "Fresh produce you'll eat", color: "green" },
            ],
          },
          {
            name: "Meat & Protein",
            items: [
              { id: "kit-meat-1", text: "Meat past use-by date", color: "red" },
              { id: "kit-meat-2", text: "Meat with off smell or color", color: "red" },
              { id: "kit-meat-3", text: "Opened deli meat past 5 days", color: "red" },
              { id: "kit-meat-4", text: "Expired tofu", color: "red" },
              { id: "kit-meat-5", text: "Fresh meat you'll cook soon", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Freezer",
        subsections: [
          {
            name: "Frozen Foods",
            items: [
              { id: "kit-freeze-1", text: "Freezer-burned meat (gray, dry spots)", color: "red" },
              { id: "kit-freeze-2", text: "Meat frozen 6+ months (quality degrades)", color: "orange" },
              { id: "kit-freeze-3", text: "Unlabeled mystery meat", color: "orange" },
              { id: "kit-freeze-4", text: "Freezer-burned TV dinners", color: "red" },
              { id: "kit-freeze-5", text: "Frozen meals from 1+ year ago", color: "orange" },
              { id: "kit-freeze-6", text: "Ice cream with freezer burn", color: "red" },
              { id: "kit-freeze-7", text: "Freezer-burned bread", color: "red" },
              { id: "kit-freeze-8", text: "Mystery containers with no labels", color: "orange" },
              { id: "kit-freeze-9", text: "Well-wrapped, labeled items", color: "green" },
              { id: "kit-freeze-10", text: "Frozen vegetables you use", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Pantry",
        subsections: [
          {
            name: "Canned Goods",
            items: [
              { id: "kit-can-1", text: "Dented cans (if seal is broken)", color: "red" },
              { id: "kit-can-2", text: "Bulging cans (dangerous!)", color: "red" },
              { id: "kit-can-3", text: "Rusted cans", color: "red" },
              { id: "kit-can-4", text: "Canned goods 2+ years past date", color: "orange" },
              { id: "kit-can-5", text: "Canned goods you never cook with", color: "blue" },
              { id: "kit-can-6", text: "Canned goods you use regularly", color: "green" },
            ],
          },
          {
            name: "Grains, Pasta & Baking",
            items: [
              { id: "kit-grain-1", text: "Pasta with bugs or weevils", color: "red" },
              { id: "kit-grain-2", text: "Rice with bugs", color: "red" },
              { id: "kit-grain-3", text: "Flour with bugs or weevils", color: "red" },
              { id: "kit-grain-4", text: "Flour older than 6-12 months", color: "orange" },
              { id: "kit-grain-5", text: "Baking powder/soda past 6 months", color: "orange" },
              { id: "kit-grain-6", text: "Expired yeast", color: "red" },
              { id: "kit-grain-7", text: "Specialty grains you never cook", color: "blue" },
              { id: "kit-grain-8", text: "Pasta and grains you use", color: "green" },
              { id: "kit-grain-9", text: "Fresh baking supplies you use", color: "green" },
            ],
          },
          {
            name: "Spices & Seasonings",
            items: [
              { id: "kit-spice-1", text: "Spices older than 2-4 years (no flavor)", color: "red" },
              { id: "kit-spice-2", text: "Spices that have no smell", color: "red" },
              { id: "kit-spice-3", text: "Duplicate spices (consolidate)", color: "orange" },
              { id: "kit-spice-4", text: "Spice blends you never use", color: "orange" },
              { id: "kit-spice-5", text: "Expired seasoning packets", color: "red" },
              { id: "kit-spice-6", text: "Fresh, fragrant spices you use", color: "green" },
            ],
          },
          {
            name: "Snacks & Cereals",
            items: [
              { id: "kit-snack-1", text: "Stale chips and crackers", color: "red" },
              { id: "kit-snack-2", text: "Stale cereal", color: "red" },
              { id: "kit-snack-3", text: "Expired granola bars", color: "orange" },
              { id: "kit-snack-4", text: "Snacks you bought but don't like", color: "blue" },
              { id: "kit-snack-5", text: "Snacks you eat regularly", color: "green" },
            ],
          },
          {
            name: "Oils & Beverages",
            items: [
              { id: "kit-oil-1", text: "Rancid oil (smells off)", color: "red" },
              { id: "kit-oil-2", text: "Oils past 6-12 months after opening", color: "orange" },
              { id: "kit-oil-3", text: "Stale coffee (older than 1 month if opened)", color: "orange" },
              { id: "kit-oil-4", text: "Tea you've had for years", color: "orange" },
              { id: "kit-oil-5", text: "Fresh oils you use", color: "green" },
              { id: "kit-oil-6", text: "Fresh coffee and tea you drink", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Dishes & Cookware",
        subsections: [
          {
            name: "Plates, Bowls & Glasses",
            items: [
              { id: "kit-dish-1", text: "Chipped plates or bowls", color: "red" },
              { id: "kit-dish-2", text: "Cracked plates (can harbor bacteria)", color: "red" },
              { id: "kit-dish-3", text: "Chipped or cracked glasses", color: "red" },
              { id: "kit-dish-4", text: "Cloudy glasses that won't come clean", color: "red" },
              { id: "kit-dish-5", text: "Mugs with stains you can't remove", color: "red" },
              { id: "kit-dish-6", text: "Promotional mugs you don't love", color: "blue" },
              { id: "kit-dish-7", text: "Too many plates (keep 8-12 per size)", color: "orange" },
              { id: "kit-dish-8", text: "Too many mugs (keep 4-6)", color: "orange" },
              { id: "kit-dish-9", text: "Your everyday dishes", color: "green" },
              { id: "kit-dish-10", text: "Your daily mugs", color: "green" },
            ],
          },
          {
            name: "Pots, Pans & Bakeware",
            items: [
              { id: "kit-pot-1", text: "Pans with scratched non-stick coating", color: "red" },
              { id: "kit-pot-2", text: "Warped pans", color: "red" },
              { id: "kit-pot-3", text: "Pans with broken handles", color: "red" },
              { id: "kit-pot-4", text: "Rusty pans or bakeware", color: "red" },
              { id: "kit-pot-5", text: "Pans you never use (wrong size)", color: "blue" },
              { id: "kit-pot-6", text: "Duplicate pans", color: "orange" },
              { id: "kit-pot-7", text: "Lids that don't match any pot/pan", color: "red" },
              { id: "kit-pot-8", text: "Specialty bakeware used once", color: "blue" },
              { id: "kit-pot-9", text: "Your daily-use pots and pans", color: "green" },
              { id: "kit-pot-10", text: "Bakeware you use regularly", color: "green" },
            ],
          },
          {
            name: "Food Storage Containers",
            items: [
              { id: "kit-cont-1", text: "Containers without lids", color: "red" },
              { id: "kit-cont-2", text: "Lids without containers", color: "red" },
              { id: "kit-cont-3", text: "Stained plastic containers", color: "orange" },
              { id: "kit-cont-4", text: "Warped or cracked containers", color: "red" },
              { id: "kit-cont-5", text: "Containers that smell even when clean", color: "red" },
              { id: "kit-cont-6", text: "Too many takeout containers (keep 5-10)", color: "orange" },
              { id: "kit-cont-7", text: "Matching containers with lids", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Utensils & Tools",
        subsections: [
          {
            name: "Silverware & Cooking Utensils",
            items: [
              { id: "kit-uten-1", text: "Bent or damaged utensils", color: "red" },
              { id: "kit-uten-2", text: "Rusty utensils", color: "red" },
              { id: "kit-uten-3", text: "Melted spatulas/spoons", color: "red" },
              { id: "kit-uten-4", text: "Cracked wooden spoons", color: "red" },
              { id: "kit-uten-5", text: "Duplicate utensils (2 spatulas = enough)", color: "orange" },
              { id: "kit-uten-6", text: "Utensils you never reach for", color: "blue" },
              { id: "kit-uten-7", text: "Your everyday flatware set", color: "green" },
              { id: "kit-uten-8", text: "Your go-to cooking utensils", color: "green" },
            ],
          },
          {
            name: "Knives & Cutting",
            items: [
              { id: "kit-knife-1", text: "Rusty knives", color: "red" },
              { id: "kit-knife-2", text: "Knives that won't sharpen anymore", color: "red" },
              { id: "kit-knife-3", text: "Dull knives (sharpen or replace)", color: "orange" },
              { id: "kit-knife-4", text: "Knives with broken handles", color: "red" },
              { id: "kit-knife-5", text: "Cutting boards with deep grooves", color: "red" },
              { id: "kit-knife-6", text: "Warped or smelly cutting boards", color: "red" },
              { id: "kit-knife-7", text: "Your chef's knife, paring knife, bread knife", color: "green" },
              { id: "kit-knife-8", text: "Your daily cutting boards (2-3)", color: "green" },
            ],
          },
          {
            name: "Gadgets & Specialty Tools",
            items: [
              { id: "kit-gadget-1", text: "Garlic press you never use", color: "blue" },
              { id: "kit-gadget-2", text: "Specialty tools used once", color: "blue" },
              { id: "kit-gadget-3", text: "Broken kitchen gadgets", color: "red" },
              { id: "kit-gadget-4", text: "Duplicate can openers", color: "orange" },
              { id: "kit-gadget-5", text: "Gadgets that don't work well", color: "blue" },
              { id: "kit-gadget-6", text: "Measuring cups with faded markings", color: "orange" },
              { id: "kit-gadget-7", text: "Tools you use weekly", color: "green" },
              { id: "kit-gadget-8", text: "Complete measuring cup/spoon set", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Appliances & Under Sink",
        subsections: [
          {
            name: "Small Appliances",
            items: [
              { id: "kit-app-1", text: "Broken appliances", color: "red" },
              { id: "kit-app-2", text: "Appliances with missing parts", color: "red" },
              { id: "kit-app-3", text: "Appliances you haven't used in 2+ years", color: "blue" },
              { id: "kit-app-4", text: "Bread maker (if you never make bread)", color: "blue" },
              { id: "kit-app-5", text: "Specialty appliances (fondue, ice cream, etc.)", color: "orange" },
              { id: "kit-app-6", text: "Duplicate appliances (2 blenders, etc.)", color: "orange" },
              { id: "kit-app-7", text: "Appliances with frayed cords", color: "red" },
              { id: "kit-app-8", text: "Coffee maker you use daily", color: "green" },
              { id: "kit-app-9", text: "Toaster, blender you use", color: "green" },
              { id: "kit-app-10", text: "Appliances used at least monthly", color: "green" },
            ],
          },
          {
            name: "Under the Sink",
            items: [
              { id: "kit-sink-1", text: "Dried-up cleaning products", color: "red" },
              { id: "kit-sink-2", text: "Cleaning products you never use", color: "blue" },
              { id: "kit-sink-3", text: "Duplicate products (consolidate)", color: "orange" },
              { id: "kit-sink-4", text: "Old sponges (replace monthly)", color: "red" },
              { id: "kit-sink-5", text: "Worn-out scrub brushes", color: "red" },
              { id: "kit-sink-6", text: "Plastic bags (keep reasonable amount)", color: "orange" },
              { id: "kit-sink-7", text: "Cleaning supplies you use regularly", color: "green" },
              { id: "kit-sink-8", text: "Fresh sponges and dish soap", color: "green" },
            ],
          },
          {
            name: "Junk Drawer",
            items: [
              { id: "kit-junk-1", text: "Dead batteries", color: "red" },
              { id: "kit-junk-2", text: "Dried-up pens and markers", color: "red" },
              { id: "kit-junk-3", text: "Expired coupons", color: "red" },
              { id: "kit-junk-4", text: "Menus from closed restaurants", color: "red" },
              { id: "kit-junk-5", text: "Keys to unknown locks", color: "orange" },
              { id: "kit-junk-6", text: "Chargers for devices you don't own", color: "red" },
              { id: "kit-junk-7", text: "Instruction manuals (look up online)", color: "orange" },
              { id: "kit-junk-8", text: "Broken items", color: "red" },
              { id: "kit-junk-9", text: "Working flashlight with batteries", color: "green" },
              { id: "kit-junk-10", text: "Tape, scissors, notepad, working pens", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Kitchen Cabinets",
        subsections: [
          {
            name: "Upper Cabinets",
            items: [
              { id: "kit-ucab-1", text: "Chipped or cracked dishes pushed to the back", color: "red" },
              { id: "kit-ucab-2", text: "Mismatched glasses you never use", color: "blue" },
              { id: "kit-ucab-3", text: "Novelty mugs and promotional cups", color: "blue" },
              { id: "kit-ucab-4", text: "Expired spices tucked behind others", color: "red" },
              { id: "kit-ucab-5", text: "Plastic cups from takeout you saved", color: "red" },
              { id: "kit-ucab-6", text: "Wine glasses for 20 when you host 4", color: "orange" },
              { id: "kit-ucab-7", text: "Vases you never put flowers in", color: "blue" },
              { id: "kit-ucab-8", text: "Travel mugs with broken lids", color: "red" },
              { id: "kit-ucab-9", text: "Baby dishes/cups if kids are older", color: "blue" },
              { id: "kit-ucab-10", text: "Your everyday plates, bowls, and glasses", color: "green" },
            ],
          },
          {
            name: "Lower Cabinets",
            items: [
              { id: "kit-lcab-1", text: "Pots and pans you never cook with", color: "blue" },
              { id: "kit-lcab-2", text: "Rusted baking sheets and muffin tins", color: "red" },
              { id: "kit-lcab-3", text: "Lids that don't match anything", color: "red" },
              { id: "kit-lcab-4", text: "Duplicate casserole dishes", color: "orange" },
              { id: "kit-lcab-5", text: "Appliances stored here that you forgot about", color: "blue" },
              { id: "kit-lcab-6", text: "Plastic containers avalanche (mismatched)", color: "orange" },
              { id: "kit-lcab-7", text: "Heavy serving platters used once a year", color: "orange" },
              { id: "kit-lcab-8", text: "Reusable bags (keep 5-10, recycle rest)", color: "orange" },
              { id: "kit-lcab-9", text: "Pots and pans you use weekly", color: "green" },
              { id: "kit-lcab-10", text: "Neatly stacked containers with matching lids", color: "green" },
            ],
          },
          {
            name: "Lazy Susan & Corner Cabinets",
            items: [
              { id: "kit-corner-1", text: "Expired items hiding in the back", color: "red" },
              { id: "kit-corner-2", text: "Duplicate oils and vinegars", color: "orange" },
              { id: "kit-corner-3", text: "Specialty ingredients bought for one recipe", color: "orange" },
              { id: "kit-corner-4", text: "Open packages of stale snacks", color: "red" },
              { id: "kit-corner-5", text: "Items you can't identify anymore", color: "red" },
              { id: "kit-corner-6", text: "Pantry staples you use regularly", color: "green" },
            ],
          },
        ],
      },
    ],
  },
  livingroom: {
    name: "Living Room",
    icon: "\u{1F6CB}\uFE0F",
    sections: [
      {
        name: "Entertainment & Electronics",
        subsections: [
          {
            name: "TV & Media",
            items: [
              { id: "lr-tv-1", text: "DVDs and Blu-rays you'll never rewatch", color: "blue" },
              { id: "lr-tv-2", text: "VHS tapes (if you don't have a player)", color: "red" },
              { id: "lr-tv-3", text: "Old streaming devices (replaced by newer ones)", color: "red" },
              { id: "lr-tv-4", text: "Remote controls for devices you don't own", color: "red" },
              { id: "lr-tv-5", text: "Tangled cables behind the TV", color: "orange" },
              { id: "lr-tv-6", text: "Video games you've finished or won't play", color: "blue" },
              { id: "lr-tv-7", text: "Old gaming consoles collecting dust", color: "blue" },
              { id: "lr-tv-8", text: "CD collection (if you only stream now)", color: "orange" },
              { id: "lr-tv-9", text: "Current TV, streaming device, and speaker", color: "green" },
              { id: "lr-tv-10", text: "Gaming setup you actively use", color: "green" },
            ],
          },
          {
            name: "Cables & Chargers",
            items: [
              { id: "lr-cable-1", text: "Unidentified chargers and adapters", color: "orange" },
              { id: "lr-cable-2", text: "Frayed or broken cables", color: "red" },
              { id: "lr-cable-3", text: "Micro-USB cables (if all devices are USB-C)", color: "red" },
              { id: "lr-cable-4", text: "Duplicate HDMI cables (keep 1-2 spare)", color: "orange" },
              { id: "lr-cable-5", text: "Phone chargers for phones you no longer own", color: "red" },
              { id: "lr-cable-6", text: "Chargers and cables you use daily", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Bookshelves & Display",
        subsections: [
          {
            name: "Books",
            items: [
              { id: "lr-book-1", text: "Books you read and won't read again", color: "blue" },
              { id: "lr-book-2", text: "Books you started and never finished (be honest)", color: "orange" },
              { id: "lr-book-3", text: "Outdated reference books (old travel guides, tech books)", color: "red" },
              { id: "lr-book-4", text: "Textbooks from school you'll never open", color: "blue" },
              { id: "lr-book-5", text: "Duplicate copies", color: "blue" },
              { id: "lr-book-6", text: "Water-damaged or moldy books", color: "red" },
              { id: "lr-book-7", text: "Coffee table books you never look at", color: "orange" },
              { id: "lr-book-8", text: "Books you love and reread", color: "green" },
              { id: "lr-book-9", text: "Books on your 'to read' list (be realistic)", color: "orange" },
              { id: "lr-book-10", text: "Reference books you actually reference", color: "green" },
            ],
          },
          {
            name: "Decor & Display Items",
            items: [
              { id: "lr-decor-1", text: "Dusty artificial flowers/plants", color: "red" },
              { id: "lr-decor-2", text: "Knick-knacks that just collect dust", color: "orange" },
              { id: "lr-decor-3", text: "Souvenirs from trips you don't care about", color: "blue" },
              { id: "lr-decor-4", text: "Candles that are burned down or dusty", color: "red" },
              { id: "lr-decor-5", text: "Picture frames with no photos in them", color: "red" },
              { id: "lr-decor-6", text: "Decor that doesn't match your style anymore", color: "blue" },
              { id: "lr-decor-7", text: "Awards/trophies from decades ago", color: "orange" },
              { id: "lr-decor-8", text: "Photos and art you love looking at", color: "green" },
              { id: "lr-decor-9", text: "Meaningful decor that brings you joy", color: "green" },
            ],
          },
          {
            name: "Magazines & Papers",
            items: [
              { id: "lr-mag-1", text: "Magazines older than 3 months", color: "red" },
              { id: "lr-mag-2", text: "Newspapers (recycle daily!)", color: "red" },
              { id: "lr-mag-3", text: "Catalogs you never ordered from", color: "red" },
              { id: "lr-mag-4", text: "Junk mail piling up", color: "red" },
              { id: "lr-mag-5", text: "Takeout menus (use apps instead)", color: "red" },
              { id: "lr-mag-6", text: "Current magazine you're reading", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Furniture Surfaces",
        subsections: [
          {
            name: "Coffee Table & Side Tables",
            items: [
              { id: "lr-table-1", text: "Random receipts and papers", color: "red" },
              { id: "lr-table-2", text: "Old coasters (stained, cracked)", color: "red" },
              { id: "lr-table-3", text: "Dead batteries from remotes", color: "red" },
              { id: "lr-table-4", text: "Random small items that accumulated", color: "orange" },
              { id: "lr-table-5", text: "Empty snack wrappers or cups", color: "red" },
              { id: "lr-table-6", text: "Items that belong in other rooms", color: "orange" },
              { id: "lr-table-7", text: "Remote controls you actually use", color: "green" },
              { id: "lr-table-8", text: "A coaster set in good condition", color: "green" },
            ],
          },
          {
            name: "Couch & Seating Area",
            items: [
              { id: "lr-couch-1", text: "Throw pillows that are flat or stained", color: "red" },
              { id: "lr-couch-2", text: "Throw blankets with holes or pilling", color: "red" },
              { id: "lr-couch-3", text: "Too many throw pillows (keep 2-4)", color: "orange" },
              { id: "lr-couch-4", text: "Coins and crumbs in cushions (clean it!)", color: "orange" },
              { id: "lr-couch-5", text: "Slipcovers that don't fit well", color: "orange" },
              { id: "lr-couch-6", text: "Your favorite throw blanket", color: "green" },
              { id: "lr-couch-7", text: "Comfortable throw pillows you use", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Storage & Miscellaneous",
        subsections: [
          {
            name: "Board Games & Toys",
            items: [
              { id: "lr-game-1", text: "Board games with missing pieces", color: "red" },
              { id: "lr-game-2", text: "Card games with missing cards", color: "red" },
              { id: "lr-game-3", text: "Puzzles with missing pieces", color: "red" },
              { id: "lr-game-4", text: "Games you never play", color: "blue" },
              { id: "lr-game-5", text: "Kids' toys they've outgrown", color: "blue" },
              { id: "lr-game-6", text: "Games you play regularly", color: "green" },
            ],
          },
          {
            name: "Baskets & Storage Bins",
            items: [
              { id: "lr-basket-1", text: "Baskets full of random 'stuff'", color: "orange" },
              { id: "lr-basket-2", text: "Broken or fraying baskets", color: "red" },
              { id: "lr-basket-3", text: "Storage bins you haven't opened in a year", color: "orange" },
              { id: "lr-basket-4", text: "Old pet toys (worn, dirty)", color: "red" },
              { id: "lr-basket-5", text: "Organized storage that makes sense", color: "green" },
            ],
          },
        ],
      },
    ],
  },
  closet: {
    name: "Hall / Linen Closet",
    icon: "\u{1F6AA}",
    sections: [
      {
        name: "Coats & Outerwear",
        subsections: [
          {
            name: "Jackets, Coats & Accessories",
            items: [
              { id: "cl-coat-1", text: "Coats no one has worn in 2+ years", color: "blue" },
              { id: "cl-coat-2", text: "Jackets with broken zippers", color: "red" },
              { id: "cl-coat-3", text: "Kids' coats they've outgrown", color: "blue" },
              { id: "cl-coat-4", text: "Stained or torn raincoats", color: "red" },
              { id: "cl-coat-5", text: "Guest jackets (do guests actually use them?)", color: "orange" },
              { id: "cl-coat-6", text: "Hats and gloves with no match", color: "red" },
              { id: "cl-coat-7", text: "Scarves you never wear", color: "blue" },
              { id: "cl-coat-8", text: "Umbrellas that are broken", color: "red" },
              { id: "cl-coat-9", text: "Too many umbrellas (keep 2-3)", color: "orange" },
              { id: "cl-coat-10", text: "Your go-to coats for each season", color: "green" },
              { id: "cl-coat-11", text: "One good umbrella per person", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Linens & Towels",
        subsections: [
          {
            name: "Bed Linens",
            items: [
              { id: "cl-linen-1", text: "Sheets for bed sizes you no longer own", color: "blue" },
              { id: "cl-linen-2", text: "Stained or threadbare spare sheets", color: "red" },
              { id: "cl-linen-3", text: "Pillow cases without matching sets", color: "orange" },
              { id: "cl-linen-4", text: "Too many sets (2-3 per bed is enough)", color: "orange" },
              { id: "cl-linen-5", text: "Complete, fresh spare sheet sets", color: "green" },
            ],
          },
          {
            name: "Towels & Washcloths",
            items: [
              { id: "cl-towel-1", text: "Stained towels downgraded to 'rags'", color: "red" },
              { id: "cl-towel-2", text: "Threadbare towels", color: "red" },
              { id: "cl-towel-3", text: "Musty-smelling towels", color: "red" },
              { id: "cl-towel-4", text: "Beach towels (keep 1-2 per person)", color: "orange" },
              { id: "cl-towel-5", text: "Too many hand towels", color: "orange" },
              { id: "cl-towel-6", text: "Fresh guest towels (2-3 sets)", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Cleaning & Household",
        subsections: [
          {
            name: "Cleaning Supplies",
            items: [
              { id: "cl-clean-1", text: "Dried-up cleaning products", color: "red" },
              { id: "cl-clean-2", text: "Cleaning products you never use", color: "blue" },
              { id: "cl-clean-3", text: "Duplicate products (consolidate)", color: "orange" },
              { id: "cl-clean-4", text: "Old mop heads and broom (worn out)", color: "red" },
              { id: "cl-clean-5", text: "Vacuum bags for a vacuum you replaced", color: "red" },
              { id: "cl-clean-6", text: "Cleaning supplies you use weekly", color: "green" },
              { id: "cl-clean-7", text: "Vacuum and mop in working condition", color: "green" },
            ],
          },
          {
            name: "Household Supplies",
            items: [
              { id: "cl-house-1", text: "Light bulbs for fixtures you don't have", color: "red" },
              { id: "cl-house-2", text: "Old paint cans (dried up or wrong color)", color: "orange" },
              { id: "cl-house-3", text: "Expired batteries", color: "red" },
              { id: "cl-house-4", text: "Random hardware (screws, nails, hooks)", color: "orange" },
              { id: "cl-house-5", text: "Tools you never use", color: "blue" },
              { id: "cl-house-6", text: "Basic toolkit and fresh batteries", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Seasonal & Storage",
        subsections: [
          {
            name: "Seasonal Items",
            items: [
              { id: "cl-season-1", text: "Holiday decorations you never put up", color: "blue" },
              { id: "cl-season-2", text: "Broken ornaments or lights", color: "red" },
              { id: "cl-season-3", text: "Decorations for holidays you don't celebrate", color: "blue" },
              { id: "cl-season-4", text: "Wrapping paper that's torn or wrinkled", color: "red" },
              { id: "cl-season-5", text: "Gift bags that are worn (keep 5-10 good ones)", color: "orange" },
              { id: "cl-season-6", text: "Holiday decorations you love", color: "green" },
              { id: "cl-season-7", text: "Good wrapping supplies", color: "green" },
            ],
          },
          {
            name: "Miscellaneous Storage",
            items: [
              { id: "cl-misc-1", text: "Boxes from items you bought (warranty expired)", color: "red" },
              { id: "cl-misc-2", text: "Shopping bags you'll never reuse", color: "red" },
              { id: "cl-misc-3", text: "Luggage with broken wheels or zippers", color: "red" },
              { id: "cl-misc-4", text: "Sports equipment no one uses", color: "blue" },
              { id: "cl-misc-5", text: "Board games shoved in here", color: "orange" },
              { id: "cl-misc-6", text: "Reusable shopping bags (keep 5-10)", color: "orange" },
              { id: "cl-misc-7", text: "Working luggage set", color: "green" },
            ],
          },
        ],
      },
    ],
  },
  study: {
    name: "Study / Office",
    icon: "\u{1F4DA}",
    sections: [
      {
        name: "Desk Surface",
        subsections: [
          {
            name: "Desktop Clutter",
            items: [
              { id: "st-desk-1", text: "Sticky notes that are no longer relevant", color: "red" },
              { id: "st-desk-2", text: "Pens and markers that are dried up", color: "red" },
              { id: "st-desk-3", text: "Random papers and receipts", color: "red" },
              { id: "st-desk-4", text: "Business cards you'll never contact", color: "red" },
              { id: "st-desk-5", text: "Old to-do lists (already done or abandoned)", color: "red" },
              { id: "st-desk-6", text: "Trinkets and fidget toys you don't use", color: "orange" },
              { id: "st-desk-7", text: "Cups/mugs that have been sitting there", color: "orange" },
              { id: "st-desk-8", text: "Your daily-use pens and notepad", color: "green" },
              { id: "st-desk-9", text: "Monitor, keyboard, and mouse", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Desk Drawers",
        subsections: [
          {
            name: "Top Drawer (Everyday Items)",
            items: [
              { id: "st-draw-1", text: "Dried-up highlighters and markers", color: "red" },
              { id: "st-draw-2", text: "Broken pencils and pen caps", color: "red" },
              { id: "st-draw-3", text: "Old stamps (check if still valid)", color: "orange" },
              { id: "st-draw-4", text: "Rubber bands that have dried out", color: "red" },
              { id: "st-draw-5", text: "Paper clips you'll never use that many of", color: "orange" },
              { id: "st-draw-6", text: "USB drives (check contents, then decide)", color: "orange" },
              { id: "st-draw-7", text: "Working pens, scissors, tape, stapler", color: "green" },
            ],
          },
          {
            name: "Lower Drawers",
            items: [
              { id: "st-draw-8", text: "Old notebooks with a few pages used", color: "orange" },
              { id: "st-draw-9", text: "Instruction manuals (find online instead)", color: "red" },
              { id: "st-draw-10", text: "Old calendars and planners", color: "red" },
              { id: "st-draw-11", text: "Spare office supplies you'll never need", color: "blue" },
              { id: "st-draw-12", text: "Tangled cables and old chargers", color: "orange" },
              { id: "st-draw-13", text: "Software CDs/DVDs", color: "red" },
              { id: "st-draw-14", text: "Supplies you use regularly", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Papers & Documents",
        subsections: [
          {
            name: "Active Papers",
            items: [
              { id: "st-paper-1", text: "Junk mail that piled up", color: "red" },
              { id: "st-paper-2", text: "Old bank/credit card statements (shred!)", color: "red" },
              { id: "st-paper-3", text: "Expired warranties and manuals", color: "red" },
              { id: "st-paper-4", text: "Old tax returns beyond 7 years", color: "red" },
              { id: "st-paper-5", text: "Receipts for items past return period", color: "red" },
              { id: "st-paper-6", text: "Outdated insurance documents", color: "red" },
              { id: "st-paper-7", text: "Coupons that are expired", color: "red" },
              { id: "st-paper-8", text: "Current year tax documents", color: "green" },
              { id: "st-paper-9", text: "Active warranties and contracts", color: "green" },
              { id: "st-paper-10", text: "Important IDs and certificates", color: "green" },
            ],
          },
          {
            name: "Sentimental Papers",
            items: [
              { id: "st-sent-1", text: "Old school papers and assignments", color: "orange" },
              { id: "st-sent-2", text: "Cards from people you don't remember", color: "orange" },
              { id: "st-sent-3", text: "Duplicate photos (keep the best ones)", color: "orange" },
              { id: "st-sent-4", text: "Kids' artwork (photograph then recycle most)", color: "orange" },
              { id: "st-sent-5", text: "Meaningful letters and cards", color: "green" },
              { id: "st-sent-6", text: "Important certificates and diplomas", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Books & Shelves",
        subsections: [
          {
            name: "Study Books & References",
            items: [
              { id: "st-book-1", text: "Textbooks from courses you finished years ago", color: "blue" },
              { id: "st-book-2", text: "Outdated tech/programming books", color: "red" },
              { id: "st-book-3", text: "Self-help books you read once", color: "blue" },
              { id: "st-book-4", text: "Books someone gave you that you'll never read", color: "blue" },
              { id: "st-book-5", text: "Damaged or water-stained books", color: "red" },
              { id: "st-book-6", text: "Reference books you actually use", color: "green" },
              { id: "st-book-7", text: "Books you plan to read soon (max 5)", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Electronics & Tech",
        subsections: [
          {
            name: "Devices & Accessories",
            items: [
              { id: "st-tech-1", text: "Old phones and tablets (wipe and recycle)", color: "orange" },
              { id: "st-tech-2", text: "Chargers for devices you no longer own", color: "red" },
              { id: "st-tech-3", text: "Broken headphones or earbuds", color: "red" },
              { id: "st-tech-4", text: "Old external hard drives (back up and recycle)", color: "orange" },
              { id: "st-tech-5", text: "Tangled cable mess (sort, test, toss dead ones)", color: "orange" },
              { id: "st-tech-6", text: "Old webcams or mice you replaced", color: "blue" },
              { id: "st-tech-7", text: "Printer ink for a printer you don't have", color: "red" },
              { id: "st-tech-8", text: "Current devices and working accessories", color: "green" },
            ],
          },
        ],
      },
    ],
  },
  makeup: {
    name: "Makeup & Cosmetics",
    icon: "\u{1F484}",
    sections: [
      {
        name: "Eye Products",
        subsections: [
          {
            name: "Mascara (EXPIRES: 3 months opened, 2 years unopened)",
            items: [
              { id: "mk-eye-1", text: "Mascara opened 3+ months ago (bacteria risk!)", color: "red" },
              { id: "mk-eye-2", text: "Clumpy, dry, or flaky mascara", color: "red" },
              { id: "mk-eye-3", text: "Mascara that smells off or irritates eyes", color: "red" },
              { id: "mk-eye-4", text: "Unopened mascara older than 2 years", color: "orange" },
              { id: "mk-eye-5", text: "Your current daily mascara (under 3 months)", color: "green" },
            ],
          },
          {
            name: "Eyeliner (Liquid: 3-6 mo, Pencil: 1-2 yr opened)",
            items: [
              { id: "mk-eye-6", text: "Liquid eyeliner older than 6 months", color: "red" },
              { id: "mk-eye-7", text: "Eyeliner that skips, drags, or is dried out", color: "red" },
              { id: "mk-eye-8", text: "Pencil eyeliner older than 2 years", color: "red" },
              { id: "mk-eye-9", text: "Eyeliner that irritates your eyes", color: "red" },
              { id: "mk-eye-10", text: "Eyeliner colors you never wear", color: "blue" },
              { id: "mk-eye-11", text: "Your go-to eyeliners (fresh)", color: "green" },
            ],
          },
          {
            name: "Eyeshadow (Powder: 2 yr, Cream: 6-12 mo opened)",
            items: [
              { id: "mk-eye-12", text: "Powder eyeshadow with hard pan (no pigment)", color: "red" },
              { id: "mk-eye-13", text: "Cream eyeshadow older than 12 months", color: "red" },
              { id: "mk-eye-14", text: "Eyeshadow palettes you never reach for", color: "blue" },
              { id: "mk-eye-15", text: "Duplicate neutral palettes (pick your favorite)", color: "orange" },
              { id: "mk-eye-16", text: "Shattered or crumbling shadows", color: "red" },
              { id: "mk-eye-17", text: "Colors that don't suit your skin tone", color: "blue" },
              { id: "mk-eye-18", text: "Dried, cracked, or smells-off cream shadows", color: "red" },
              { id: "mk-eye-19", text: "2-3 palettes you love and use", color: "green" },
              { id: "mk-eye-20", text: "Single shadows you reach for often", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Face Products",
        subsections: [
          {
            name: "Foundation & Concealer (Liquid: 6-12 mo, Powder: 2 yr)",
            items: [
              { id: "mk-face-1", text: "Foundation that has separated (oil on top)", color: "red" },
              { id: "mk-face-2", text: "Foundation that oxidizes or turns orange on skin", color: "red" },
              { id: "mk-face-3", text: "Foundation in the wrong shade (too dark/light)", color: "blue" },
              { id: "mk-face-4", text: "Liquid foundation older than 12 months", color: "red" },
              { id: "mk-face-5", text: "Concealer that's thick, cakey, or changed color", color: "red" },
              { id: "mk-face-6", text: "Concealer older than 12 months", color: "orange" },
              { id: "mk-face-7", text: "Foundation samples you tried and didn't like", color: "red" },
              { id: "mk-face-8", text: "Your current foundation match", color: "green" },
              { id: "mk-face-9", text: "Your daily concealer (fresh)", color: "green" },
            ],
          },
          {
            name: "Powder Products (Setting powder, Blush, Bronzer: 2 yr)",
            items: [
              { id: "mk-face-10", text: "Setting powder that's caked or hard", color: "red" },
              { id: "mk-face-11", text: "Setting powder with changed color", color: "red" },
              { id: "mk-face-12", text: "Powder blush with hard pan (no pigment)", color: "red" },
              { id: "mk-face-13", text: "Cream blush older than 12 months", color: "red" },
              { id: "mk-face-14", text: "Bronzer with no shimmer or pigment left", color: "red" },
              { id: "mk-face-15", text: "Highlighter that's hard pan", color: "red" },
              { id: "mk-face-16", text: "Blush colors you never wear", color: "blue" },
              { id: "mk-face-17", text: "Your daily blush, bronzer, and highlighter", color: "green" },
              { id: "mk-face-18", text: "Setting powder you use (under 2 years)", color: "green" },
            ],
          },
          {
            name: "Primer & Setting Spray (Primer: 1 yr, Spray: 1-2 yr)",
            items: [
              { id: "mk-face-19", text: "Primer older than 1 year (pills, separates, smells off)", color: "red" },
              { id: "mk-face-20", text: "Setting spray that separates or clogs", color: "red" },
              { id: "mk-face-21", text: "Setting spray older than 2 years", color: "orange" },
              { id: "mk-face-22", text: "Primers that broke you out or didn't work", color: "red" },
              { id: "mk-face-23", text: "Your current primer (under 1 year)", color: "green" },
              { id: "mk-face-24", text: "Your current setting spray", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Lip Products",
        subsections: [
          {
            name: "Lipstick & Lip Liner (Lipstick: 1-2 yr, Liner: 1-2 yr)",
            items: [
              { id: "mk-lip-1", text: "Lipstick that smells waxy, crayon-like, or off", color: "red" },
              { id: "mk-lip-2", text: "Lipstick with changed texture (gritty, sweating)", color: "red" },
              { id: "mk-lip-3", text: "Lipstick older than 2 years", color: "red" },
              { id: "mk-lip-4", text: "Lip liner that's dry, crumbly, hard to apply", color: "red" },
              { id: "mk-lip-5", text: "Lip colors that don't suit you", color: "blue" },
              { id: "mk-lip-6", text: "Trendy lip colors from years ago you won't wear", color: "blue" },
              { id: "mk-lip-7", text: "Duplicate shades (keep your favorite formula)", color: "orange" },
              { id: "mk-lip-8", text: "Lipsticks you wear regularly", color: "green" },
              { id: "mk-lip-9", text: "Your everyday lip liner", color: "green" },
            ],
          },
          {
            name: "Lip Gloss & Liquid Lips (Gloss: 1 yr, Liquid: 1-2 yr)",
            items: [
              { id: "mk-lip-10", text: "Lip gloss that's thick, sticky, or gloopy", color: "red" },
              { id: "mk-lip-11", text: "Lip gloss that smells off", color: "red" },
              { id: "mk-lip-12", text: "Lip gloss older than 1 year", color: "orange" },
              { id: "mk-lip-13", text: "Liquid lipstick that's dried out or crumbles", color: "red" },
              { id: "mk-lip-14", text: "Liquid lips with a doe foot that's gunky", color: "red" },
              { id: "mk-lip-15", text: "Lip glosses you never reach for", color: "blue" },
              { id: "mk-lip-16", text: "Your go-to lip gloss (fresh)", color: "green" },
            ],
          },
          {
            name: "Lip Care",
            items: [
              { id: "mk-lip-17", text: "Lip balm that's old, melted, or gritty", color: "red" },
              { id: "mk-lip-18", text: "Lip scrubs that are dried out", color: "red" },
              { id: "mk-lip-19", text: "Lip masks older than 1 year", color: "orange" },
              { id: "mk-lip-20", text: "Too many lip balms (keep 2-3)", color: "orange" },
              { id: "mk-lip-21", text: "Your daily lip balm", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Brows",
        subsections: [
          {
            name: "Brow Products",
            items: [
              { id: "mk-brow-1", text: "Brow pencil that's dried out or hard", color: "red" },
              { id: "mk-brow-2", text: "Brow gel that's clumpy or dried", color: "red" },
              { id: "mk-brow-3", text: "Brow pomade that's hard and cracking", color: "red" },
              { id: "mk-brow-4", text: "Brow products in the wrong shade", color: "blue" },
              { id: "mk-brow-5", text: "Duplicate brow products", color: "orange" },
              { id: "mk-brow-6", text: "Your daily brow product", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Tools & Brushes",
        subsections: [
          {
            name: "Brushes & Sponges",
            items: [
              { id: "mk-tool-1", text: "Makeup sponges older than 3 months", color: "red" },
              { id: "mk-tool-2", text: "Sponges that are stained, torn, or won't clean", color: "red" },
              { id: "mk-tool-3", text: "Brushes that shed or have lost their shape", color: "red" },
              { id: "mk-tool-4", text: "Brushes with broken or loose handles", color: "red" },
              { id: "mk-tool-5", text: "Brushes you never use", color: "blue" },
              { id: "mk-tool-6", text: "Duplicate brushes (keep your favorites)", color: "orange" },
              { id: "mk-tool-7", text: "Dirty brushes (clean them or toss!)", color: "orange" },
              { id: "mk-tool-8", text: "Clean brushes you use regularly", color: "green" },
              { id: "mk-tool-9", text: "Fresh makeup sponge (under 3 months)", color: "green" },
            ],
          },
          {
            name: "Tools & Accessories",
            items: [
              { id: "mk-tool-10", text: "Eyelash curler with worn rubber pad", color: "red" },
              { id: "mk-tool-11", text: "Broken compact mirrors", color: "red" },
              { id: "mk-tool-12", text: "Dried-up brush cleaner", color: "red" },
              { id: "mk-tool-13", text: "Old makeup bags (stained, broken zipper)", color: "red" },
              { id: "mk-tool-14", text: "False lashes that are worn out or crusty", color: "red" },
              { id: "mk-tool-15", text: "Lash glue older than 6 months", color: "red" },
              { id: "mk-tool-16", text: "Sharpeners clogged with old product", color: "orange" },
              { id: "mk-tool-17", text: "Working eyelash curler", color: "green" },
              { id: "mk-tool-18", text: "Clean makeup bag", color: "green" },
            ],
          },
        ],
      },
      {
        name: "Skincare in Makeup Bag",
        subsections: [
          {
            name: "Makeup-Adjacent Skincare",
            items: [
              { id: "mk-skin-1", text: "Makeup remover that's old or irritating", color: "red" },
              { id: "mk-skin-2", text: "Micellar water older than 12 months", color: "orange" },
              { id: "mk-skin-3", text: "Face mist/spray that smells off", color: "red" },
              { id: "mk-skin-4", text: "Blotting papers you never use", color: "orange" },
              { id: "mk-skin-5", text: "Makeup wipes (consider reusable pads instead)", color: "orange" },
              { id: "mk-skin-6", text: "Your current makeup remover", color: "green" },
              { id: "mk-skin-7", text: "Fresh blotting papers or setting products", color: "green" },
            ],
          },
        ],
      },
    ],
  },
};

export function getAllItems(roomId: string): Item[] {
  const room = rooms[roomId];
  if (!room) return [];
  return room.sections.flatMap((s) => s.subsections.flatMap((ss) => ss.items));
}

export function getTotalItemCount(): number {
  return Object.keys(rooms).reduce((total, roomId) => total + getAllItems(roomId).length, 0);
}

// Lookup item text by ID across all rooms
const _itemTextCache: Record<string, string> = {};
export function getItemText(id: string): string {
  if (_itemTextCache[id]) return _itemTextCache[id];
  for (const roomId of Object.keys(rooms)) {
    for (const item of getAllItems(roomId)) {
      _itemTextCache[item.id] = item.text;
    }
  }
  return _itemTextCache[id] || id;
}
