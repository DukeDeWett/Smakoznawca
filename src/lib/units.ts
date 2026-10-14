import type { Unit } from '../types';

const ML: Partial<Record<Unit, number>> = { tsp: 5, tbsp: 15, cup: 250 };
const FRACTIONS: [number, string][] = [
  [0, ''], [1 / 8, '⅛'], [1 / 4, '¼'], [1 / 3, '⅓'], [1 / 2, '½'], [2 / 3, '⅔'], [3 / 4, '¾'], [1, ''],
];

/** 1.5 -> "1½", 0.33 -> "⅓". */
export function fraction(v: number): string {
  const whole = Math.floor(v);
  const rest = v - whole;
  let best = FRACTIONS[0];
  for (const f of FRACTIONS) if (Math.abs(f[0] - rest) < Math.abs(best[0] - rest)) best = f;
  if (best[0] === 1) return String(whole + 1);
  return (whole ? String(whole) : '') + best[1] || '0';
}

function metric(v: number, base: 'g' | 'ml'): string {
  if (v >= 1000) return `${+(v / 1000).toFixed(2)} ${base === 'g' ? 'kg' : 'l'}`;
  const r = v < 10 ? Math.round(v * 2) / 2 : v < 100 ? Math.round(v) : Math.round(v / 5) * 5;
  return `${r} ${base}`;
}

/** Scale an authored amount and print it in a cook-friendly way (spoons switch size as they grow). */
export function formatAmount(amount: number | undefined, unit: Unit, factor = 1): string {
  if (unit === 'taste' || amount === undefined) return 'to taste';
  const v = amount * factor;
  switch (unit) {
    case 'g':
    case 'ml':
      return metric(v, unit);
    case 'pinch': {
      const n = Math.max(1, Math.round(v));
      return n === 1 ? 'a pinch' : `${n} pinches`;
    }
    case 'pc':
      return v < 4 ? fraction(Math.max(0.5, Math.round(v * 2) / 2)) : String(Math.round(v));
    default: {
      const ml = v * ML[unit]!;
      if (ml < 0.6) return 'a pinch';
      if (ml < 15) return `${fraction(ml / 5)} tsp`;
      if (ml < 60) return `${fraction(ml / 15)} tbsp`;
      return `${fraction(ml / 250)} cup${ml / 250 > 1.05 ? 's' : ''}`;
    }
  }
}
