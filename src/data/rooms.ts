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
