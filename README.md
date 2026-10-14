# Smakoznawca

An open-source cooking site focused on Asian cuisines. Every recipe aims to stay **true to the dish**:
it explains what makes the dish that dish, and gives the **food science** behind techniques such as
velveting or blooming spices. *Smakoznawca* is Polish for "connoisseur".

This repository is the **frontend** (React + TypeScript + Vite). There is no backend: recipes are typed data files.

## Features

- Search by dish, ingredient or tag, plus filters for cuisine, diet and maximum spice level
- Cuisines: Chinese, Japanese, Indonesian, Indian, Korean, Vietnamese, Malay, Thai, other
- Spice level 0-5 on every recipe
- "Can be pescatarian / vegetarian / vegan" with documented swaps; switching diet rewrites the ingredient list
- Servings stepper that scales ingredients; metric units, with tsp (5 ml), tbsp (15 ml) and cup (250 ml)
- Authenticity panel: what makes the dish, what not to skip, where you can adapt
- Method steps with "why it works" notes and expandable science explanations

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # unit tests for scaling and unit formatting
npm run build    # type-check + production build into dist/
```

## Add a recipe

1. Add an object to `src/data/recipes.ts` (see the `Recipe` type in `src/types.ts`).
2. Give each ingredient a stable `id`. Diet swaps refer to those ids; `null` means "leave out".
3. Reuse a technique from `src/data/techniques.ts` by id, or add a new one with a source-checked explanation.
4. Photos: put the file in `public/images/`, set `image: { src, alt, credit }`. Only use photos you own or that
   are licensed for reuse (e.g. CC BY / CC BY-SA from Wikimedia Commons) and credit them. Without a photo,
   an illustration placeholder is shown.

## Content principles

- Authenticity first: name the region and the traditional method; say clearly when a swap changes the dish.
- Science claims must be accurate and hedged where the research is not settled. Cite sources in PRs.
- Metric only, plus tsp / tbsp / cup (250 ml).

## Roadmap

Recipes for Korean, Vietnamese, Indonesian, Malay, Thai and other cuisines; real photos; unit tests for data
integrity; Polish translation; print view; deploy to GitHub Pages.

## License

[MIT](LICENSE). Recipe contributions are accepted under the same license.
