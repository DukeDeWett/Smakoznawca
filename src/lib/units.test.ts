import { describe, expect, it } from 'vitest';
import { formatAmount, fraction } from './units';

describe('formatAmount', () => {
  it('uses metric weights and volumes', () => {
    expect(formatAmount(500, 'g', 2)).toBe('1 kg');
    expect(formatAmount(250, 'g', 1)).toBe('250 g');
    expect(formatAmount(30, 'ml', 0.5)).toBe('15 ml');
  });
  it('keeps a cup at 250 ml and a tablespoon at 15 ml', () => {
    expect(formatAmount(1, 'cup', 0.5)).toBe('½ cup');
    expect(formatAmount(1, 'tbsp', 3)).toBe('3 tbsp');
    expect(formatAmount(1, 'tsp', 3)).toBe('1 tbsp');
    expect(formatAmount(1, 'cup', 1.5)).toBe('1½ cups');
  });
  it('handles pinches, counts and to-taste', () => {
    expect(formatAmount(1, 'pinch')).toBe('a pinch');
    expect(formatAmount(2, 'pc', 1.5)).toBe('3');
    expect(formatAmount(undefined, 'taste')).toBe('to taste');
  });
});
describe('fraction', () => {
  it('rounds to kitchen fractions', () => {
    expect(fraction(0.33)).toBe('⅓');
    expect(fraction(2.9)).toBe('3');
  });
});
