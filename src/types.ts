export type Cuisine =
  | 'chinese' | 'japanese' | 'indonesian' | 'indian'
  | 'korean' | 'vietnamese' | 'malay' | 'thai' | 'other';
export type Diet = 'pescatarian' | 'vegetarian' | 'vegan';
/** g/ml are metric; tsp = 5 ml, tbsp = 15 ml, cup = 250 ml; pc = countable item. */
export type Unit = 'g' | 'ml' | 'tsp' | 'tbsp' | 'cup' | 'pc' | 'pinch' | 'taste';

export interface Ingredient { id: string; name: string; amount?: number; unit: Unit; note?: string }
/** A replacement keeps the original amount/unit unless it sets its own. */
export interface Swap { name: string; amount?: number; unit?: Unit }

export interface Recipe {
  slug: string;
  title: string;
  native?: string;
  cuisine: Cuisine;
  /** Add real photos under /public/images and credit them. Without one, an illustration is shown. */
  image?: { src: string; alt: string; credit?: string };
  description: string;
  tags: string[];
  spice: 0 | 1 | 2 | 3 | 4 | 5;
  minutes: number;
  servings: number;
  /** What the traditional recipe already is. */
  original: 'omnivore' | Diet;
  /** replace[ingredientId] = replacement, or null to leave the ingredient out. */
  swaps: Partial<Record<Diet, { note: string; replace: Record<string, Swap | null> }>>;
  authenticity: { what: string; essentials: string[]; liberties?: string };
  ingredients: Ingredient[];
  steps: { text: string; science?: string[] }[];
}
export interface Technique { id: string; name: string; summary: string; science: string }
