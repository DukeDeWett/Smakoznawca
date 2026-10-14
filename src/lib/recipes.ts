import type { Cuisine, Diet, Recipe } from '../types';

export const CUISINES: { id: Cuisine; label: string }[] = [
  { id: 'chinese', label: 'Chinese' }, { id: 'japanese', label: 'Japanese' },
  { id: 'indonesian', label: 'Indonesian' }, { id: 'indian', label: 'Indian' },
  { id: 'korean', label: 'Korean' }, { id: 'vietnamese', label: 'Vietnamese' },
  { id: 'malay', label: 'Malay' }, { id: 'thai', label: 'Thai' }, { id: 'other', label: 'Other cuisines' },
];
export const DIETS: Diet[] = ['pescatarian', 'vegetarian', 'vegan'];
export const HEAT = ['No heat', 'Mild', 'Warm', 'Hot', 'Very hot', 'Fiery'];

const RANK = { omnivore: 0, pescatarian: 1, vegetarian: 2, vegan: 3 } as const;
/** A recipe fits a diet if it already does (vegan fits vegetarian) or has a documented swap. */
export const canBe = (r: Recipe, d: Diet) => RANK[r.original] >= RANK[d] || !!r.swaps[d];

export interface Filters { q: string; cuisine: Cuisine | null; diet: Diet | null; maxSpice: number; tags: string[] }
export const EMPTY: Filters = { q: '', cuisine: null, diet: null, maxSpice: 5, tags: [] };

export function filterRecipes(rs: Recipe[], f: Filters): Recipe[] {
  const terms = f.q.toLowerCase().split(/\s+/).filter(Boolean);
  return rs.filter((r) => {
    if (f.cuisine && r.cuisine !== f.cuisine) return false;
    if (f.diet && !canBe(r, f.diet)) return false;
    if (r.spice > f.maxSpice) return false;
    if (!f.tags.every((t) => r.tags.includes(t))) return false;
    const hay = [r.title, r.native ?? '', r.description, r.cuisine, ...r.tags, ...r.ingredients.map((i) => i.name)]
      .join(' ').toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}
export const allTags = (rs: Recipe[]) => [...new Set(rs.flatMap((r) => r.tags))].sort();
