import type { Recipe } from '../types';

export { TECHNIQUES } from './techniques';

export const RECIPES: Recipe[] = [
  {
    slug: 'kung-pao-chicken',
    title: 'Kung pao chicken',
    native: '宫保鸡丁 · gōngbǎo jīdīng',
    cuisine: 'chinese',
    description:
      'Diced chicken, scorched dried chillies, Sichuan pepper and roasted peanuts in a glossy sweet, sour and savoury sauce.',
    tags: ['sichuan', 'stir-fry', 'wok', 'mala', 'weeknight'],
    spice: 3,
    minutes: 35,
    servings: 4,
    original: 'omnivore',
    swaps: {
      pescatarian: {
        note: 'Peeled raw prawns take velveting well. Cook them for about 2 minutes only.',
        replace: { chicken: { name: 'raw peeled prawns' } },
      },
      vegetarian: {
        note: 'King oyster mushrooms keep a chewy bite. The sauce stays faithful; the savoury depth of chicken is lost.',
        replace: { chicken: { name: 'king oyster mushrooms, cut in 2 cm cubes' } },
      },
      vegan: {
        note: 'Mushrooms replace the chicken. Without egg white the coating is thinner: add 1 tbsp water to the marinade.',
        replace: { chicken: { name: 'king oyster mushrooms, cut in 2 cm cubes' }, eggwhite: null },
      },
    },
    authenticity: {
      what:
        'Gongbao jiding is a Sichuan dish built on what Chinese cooks call scorched-chilli lychee flavour: sweet, sour and savoury notes meeting in the middle, with dried chilli and Sichuan pepper heat on top. Bell pepper, carrot and onion are common in export versions, but not in the classic.',
      essentials: [
        'Dried chillies fried until dark red, with Sichuan peppercorns',
        'Chinkiang black vinegar for the sour note',
        'Roasted peanuts added at the very end',
      ],
      liberties: 'Chicken thigh is traditional in many kitchens, but breast works if you velvet it.',
    },
    ingredients: [
      { id: 'chicken', name: 'boneless chicken thigh', amount: 500, unit: 'g' },
      { id: 'eggwhite', name: 'egg white', amount: 1, unit: 'pc', note: 'marinade' },
      { id: 'cs1', name: 'cornstarch', amount: 1, unit: 'tbsp', note: 'marinade' },
      { id: 'wine', name: 'Shaoxing wine', amount: 1, unit: 'tbsp', note: 'marinade' },
      { id: 'salt', name: 'salt', amount: 0.5, unit: 'tsp', note: 'marinade' },
      { id: 'soy', name: 'light soy sauce', amount: 1, unit: 'tbsp', note: 'sauce' },
      { id: 'vinegar', name: 'Chinkiang black vinegar', amount: 2, unit: 'tbsp', note: 'sauce' },
      { id: 'sugar', name: 'sugar', amount: 2, unit: 'tsp', note: 'sauce' },
      { id: 'cs2', name: 'cornstarch', amount: 1, unit: 'tsp', note: 'sauce' },
      { id: 'water', name: 'water', amount: 30, unit: 'ml', note: 'sauce' },
      { id: 'chillies', name: 'dried red chillies, snipped, seeds shaken out', amount: 15, unit: 'g' },
      { id: 'sichuan', name: 'Sichuan peppercorns', amount: 1, unit: 'tsp' },
      { id: 'oil', name: 'neutral oil', amount: 3, unit: 'tbsp' },
      { id: 'ginger', name: 'ginger, finely chopped', amount: 10, unit: 'g' },
      { id: 'garlic', name: 'garlic cloves, sliced', amount: 3, unit: 'pc' },
      { id: 'scallion', name: 'spring onion whites, in 1 cm pieces', amount: 40, unit: 'g' },
      { id: 'peanuts', name: 'roasted peanuts', amount: 60, unit: 'g' },
    ],
    steps: [
      { text: 'Cut the chicken into 2 cm cubes. Mix with the marinade ingredients and rest for 20 minutes.', science: ['velveting'] },
      { text: 'Stir the sauce ingredients together in a small bowl until the cornstarch has dissolved.' },
      { text: 'Heat the oil in a wok over medium-low heat. Add the chillies and Sichuan peppercorns and stir for about a minute, until the chillies turn deep red and smell toasted, not burnt.', science: ['bloom', 'sanshool'] },
      { text: 'Turn the heat to maximum. Add the chicken in one layer and leave it for 30 seconds, then stir-fry until just cooked, about 3 minutes.', science: ['wokhei'] },
      { text: 'Push the chicken aside, fry the ginger, garlic and spring onion for 15 seconds, then pour in the sauce and toss until glossy. Fold in the peanuts and serve at once.' },
    ],
  },
  {
    slug: 'dal-tadka',
    title: 'Dal tadka',
    native: 'दाल तड़का',
    cuisine: 'indian',
    description:
      'Soft yellow lentils finished with a sizzling spiced fat poured over at the end, then brought to the table still crackling.',
    tags: ['north indian', 'lentils', 'tempering', 'comfort', 'weeknight'],
    spice: 2,
    minutes: 45,
    servings: 4,
    original: 'vegetarian',
    swaps: {
      vegan: {
        note: 'Sunflower or mustard oil replaces ghee. You lose the nutty dairy aroma but the dish keeps its structure.',
        replace: { ghee: { name: 'neutral oil' } },
      },
    },
    authenticity: {
      what:
        'Dal tadka is plain, soft-cooked lentils finished with a tadka (also called chaunk or tarka): spices sizzled in hot fat and added at the end. That last step, not the lentils, is what makes it this dish rather than lentil soup.',
      essentials: [
        'Lentils cooked until they fall apart, with turmeric',
        'Cumin seeds and dried chilli sizzled in ghee',
        'The tadka goes in last, while still hot',
      ],
      liberties: 'Toor dal is classic; a mix with masoor dal cooks faster and is common at home.',
    },
    ingredients: [
      { id: 'dal', name: 'toor dal (split pigeon peas), rinsed', amount: 200, unit: 'g' },
      { id: 'water', name: 'water', amount: 800, unit: 'ml' },
      { id: 'turmeric', name: 'ground turmeric', amount: 0.5, unit: 'tsp' },
      { id: 'salt', name: 'salt', amount: 1, unit: 'tsp' },
      { id: 'ghee', name: 'ghee', amount: 2, unit: 'tbsp', note: 'tadka' },
      { id: 'cumin', name: 'cumin seeds', amount: 1, unit: 'tsp', note: 'tadka' },
      { id: 'chilli', name: 'dried red chillies', amount: 2, unit: 'pc', note: 'tadka' },
      { id: 'hing', name: 'asafoetida (hing)', amount: 1, unit: 'pinch', note: 'tadka' },
      { id: 'garlic', name: 'garlic cloves, chopped', amount: 4, unit: 'pc', note: 'tadka' },
      { id: 'kashmiri', name: 'Kashmiri chilli powder', amount: 1, unit: 'tsp', note: 'tadka' },
      { id: 'tomato', name: 'ripe tomatoes, chopped', amount: 2, unit: 'pc' },
      { id: 'coriander', name: 'fresh coriander, chopped', amount: 20, unit: 'g' },
    ],
    steps: [
      { text: 'Simmer the dal with the water, turmeric, salt and tomatoes for 30 to 35 minutes, until completely soft. Whisk lightly so it is creamy.' },
      { text: 'Heat the ghee in a small pan until a cumin seed sizzles at once. Add the cumin and dried chillies and wait for a few seconds, until the cumin darkens a shade.', science: ['bloom'] },
      { text: 'Add the asafoetida and garlic and fry until the garlic is golden. Take the pan off the heat, stir in the chilli powder, and pour it straight over the dal.' },
      { text: 'Cover for a minute so the aroma stays in the pot, then stir in the coriander.' },
    ],
  },
  {
    slug: 'miso-soup',
    title: 'Miso soup',
    native: '味噌汁 · misoshiru',
    cuisine: 'japanese',
    description: 'Clear, savoury dashi with miso whisked in at the last moment, silken tofu and wakame.',
    tags: ['dashi', 'soup', 'quick', 'umami', 'fermented'],
    spice: 0,
    minutes: 20,
    servings: 4,
    original: 'pescatarian',
    swaps: {
      vegetarian: {
        note: 'Soak kombu and dried shiitake in the water for a few hours (or overnight in the fridge) instead of using bonito.',
        replace: { katsuo: { name: 'dried shiitake mushrooms', amount: 10, unit: 'g' } },
      },
      vegan: {
        note: 'Same kombu and shiitake dashi. Check that your miso contains no fish stock (some "instant" miso does).',
        replace: { katsuo: { name: 'dried shiitake mushrooms', amount: 10, unit: 'g' } },
      },
    },
    authenticity: {
      what:
        'Miso soup is a dashi dish first and a miso dish second. A clean kombu and katsuobushi dashi gives the savoury base, and miso is dissolved at the very end, off the boil.',
      essentials: ['Homemade dashi, not boiled hard', 'Miso added off the boil', 'Few, simple ingredients'],
    },
    ingredients: [
      { id: 'water', name: 'water', amount: 1000, unit: 'ml' },
      { id: 'kombu', name: 'kombu', amount: 10, unit: 'g' },
      { id: 'katsuo', name: 'katsuobushi (bonito flakes)', amount: 20, unit: 'g' },
      { id: 'miso', name: 'miso paste', amount: 3, unit: 'tbsp' },
      { id: 'tofu', name: 'silken tofu, cubed', amount: 200, unit: 'g' },
      { id: 'wakame', name: 'dried wakame', amount: 1, unit: 'tbsp' },
      { id: 'scallion', name: 'spring onions, sliced', amount: 2, unit: 'pc' },
    ],
    steps: [
      { text: 'Wipe the kombu (do not wash off the white powder) and put it in the water. Heat slowly and take the kombu out just before the water boils.', science: ['umami'] },
      { text: 'Add the katsuobushi, switch off the heat and let it sink, about 1 to 2 minutes. Strain without pressing.' },
      { text: 'Return the dashi to a gentle heat. Add the wakame and tofu and warm through for 2 minutes.' },
      { text: 'Turn the heat off. Dissolve the miso in a ladle of dashi with a whisk, then stir it back in. Add the spring onions and serve immediately.', science: ['misoheat'] },
    ],
  },
];
