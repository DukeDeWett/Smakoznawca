import type { Technique } from '../types';

/** Shared explanations. Recipes point at these by id, so each idea is written (and fact-checked) once. */
export const TECHNIQUES: Record<string, Technique> = {
  velveting: {
    id: 'velveting',
    name: 'Velveting',
    summary: 'A thin starch coating keeps meat tender in a very hot wok.',
    science:
      'Muscle proteins squeeze out water as they heat. A coating of cornstarch (and egg white) gelatinises into a thin gel that shields the surface and slows moisture loss. Salt, and a tiny amount of bicarbonate of soda where used, shifts the meat away from the pH at which its proteins hold water least well, so more juice stays inside. The result is meat that is tender rather than stringy.',
  },
  bloom: {
    id: 'bloom',
    name: 'Blooming spices in fat',
    summary: 'Hot oil pulls flavour out of spices that water cannot.',
    science:
      'Many aroma and colour compounds in spices (terpenes, carotenoids, curcuminoids, capsaicin) dissolve in fat far better than in water. Gentle heat moves them into the oil, which then carries them through the whole dish, and drives off raw, harsh notes. Too much heat burns the spice and turns it bitter, which is why the timing in recipes is short.',
  },
  wokhei: {
    id: 'wokhei',
    name: 'Wok hei',
    summary: 'Very high heat and small batches give a smoky, seared character.',
    science:
      'At the high surface temperatures of a hot wok, sugars and amino acids brown quickly (Maillard reaction and caramelisation). Droplets of oil and sauce also vaporise and flare, depositing smoky aroma compounds on the food. Overloading the wok drops the temperature, and food steams instead of searing.',
  },
  sanshool: {
    id: 'sanshool',
    name: 'Why Sichuan pepper numbs',
    summary: 'It is a tingle, not heat: a different sense altogether.',
    science:
      'Hydroxy-alpha-sanshool in Sichuan peppercorns activates touch-sensitive nerve endings and produces a buzzing sensation, often described as vibrating at around 50 Hz. Chilli heat (capsaicin) acts on a separate pain-and-heat receptor, which is why the two combine into "mala" rather than cancelling out. Sanshool oxidises over time, so fresh, fragrant peppercorns matter.',
  },
  umami: {
    id: 'umami',
    name: 'Umami synergy',
    summary: 'Kombu and bonito together taste far savoury-er than either alone.',
    science:
      'Kombu is rich in glutamate; katsuobushi (dried bonito) is rich in inosinate; dried shiitake in guanylate. Glutamate and these nucleotides bind the same taste receptor and strengthen each other, so the combination tastes much more savoury than the sum of its parts. Kombu is steeped, not boiled, because hard boiling pulls out bitterness and sliminess.',
  },
  misoheat: {
    id: 'misoheat',
    name: 'Miso goes in last',
    summary: 'Boiling flattens miso: its aroma is delicate.',
    science:
      'Miso is a fermented paste whose fragrance comes from volatile compounds made during fermentation. Prolonged boiling drives these off and kills the live cultures in unpasteurised miso, leaving a duller, saltier soup. Dissolving it into hot, not boiling, dashi preserves both.',
  },
};
