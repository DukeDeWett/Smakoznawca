import { useEffect, useMemo, useState } from 'react';
import { RECIPES, TECHNIQUES } from './data/recipes';
import { CUISINES, DIETS, EMPTY, HEAT, allTags, canBe, filterRecipes, type Filters } from './lib/recipes';
import { formatAmount } from './lib/units';
import type { Cuisine, Diet, Recipe } from './types';

const TINT: Record<Cuisine, string> = {
  chinese: '#C23B22', japanese: '#2F3E8F', indonesian: '#8A5A2B', indian: '#E3A008', korean: '#A12D5A',
  vietnamese: '#2E6B5E', malay: '#5B7F2B', thai: '#D2691E', other: '#6B6F76',
};
const cuisineLabel = (c: Cuisine) => CUISINES.find((x) => x.id === c)!.label;

function useRoute(): string | null {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const on = () => { setHash(location.hash); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  const m = hash.match(/^#\/r\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

function Dish({ r }: { r: Recipe }) {
  if (r.image) return <img src={r.image.src} alt={r.image.alt} loading="lazy" />;
  const c = TINT[r.cuisine];
  return (
    <svg viewBox="0 0 160 100" role="img" aria-label={`Placeholder illustration of ${r.title}`}>
      <rect width="160" height="100" fill={c} opacity=".14" />
      <path d="M30 50h100a50 40 0 0 1-100 0z" fill={c} />
      <ellipse cx="80" cy="50" rx="50" ry="9" fill="#fff" opacity=".35" />
    </svg>
  );
}

function Spice({ level }: { level: number }) {
  return (
    <span className="spice" role="img" aria-label={`Spice level ${level} of 5: ${HEAT[level]}`}>
      {[1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= level ? 'on' : ''} />)}
      <span aria-hidden="true">{HEAT[level]}</span>
    </span>
  );
}

const Chip = ({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button type="button" className={'chip' + (on ? ' on' : '')} aria-pressed={on} onClick={onClick}>{children}</button>
);

function Browse() {
  const [f, setF] = useState<Filters>(EMPTY);
  const tags = useMemo(() => allTags(RECIPES), []);
  const results = useMemo(() => filterRecipes(RECIPES, f), [f]);
  const set = (p: Partial<Filters>) => setF((x) => ({ ...x, ...p }));
  const dirty = JSON.stringify(f) !== JSON.stringify(EMPTY);
  return (
    <main>
      <section className="hero">
        <h1>Smakoznawca</h1>
        <p>Asian recipes that stay true to the dish, and explain why the technique works.</p>
        <label className="search">
          <span className="sr">Search recipes</span>
          <input type="search" placeholder="Search by dish, ingredient or tag" value={f.q} onChange={(e) => set({ q: e.target.value })} />
        </label>
      </section>

      <section className="filters" aria-label="Filters">
        <div className="row">
          {CUISINES.map((c) => (
            <Chip key={c.id} on={f.cuisine === c.id} onClick={() => set({ cuisine: f.cuisine === c.id ? null : c.id })}>{c.label}</Chip>
          ))}
        </div>
        <div className="row">
          {DIETS.map((d) => (
            <Chip key={d} on={f.diet === d} onClick={() => set({ diet: f.diet === d ? null : d })}>Can be {d}</Chip>
          ))}
          <label className="range">
            Max spice: {HEAT[f.maxSpice]}
            <input type="range" min={0} max={5} value={f.maxSpice} onChange={(e) => set({ maxSpice: +e.target.value })} />
          </label>
        </div>
        <div className="row tags">
          {tags.map((t) => (
            <Chip key={t} on={f.tags.includes(t)} onClick={() => set({ tags: f.tags.includes(t) ? f.tags.filter((x) => x !== t) : [...f.tags, t] })}>#{t}</Chip>
          ))}
        </div>
      </section>

      <p className="count" aria-live="polite">
        {results.length} {results.length === 1 ? 'recipe' : 'recipes'}
        {dirty && <button type="button" className="link" onClick={() => setF(EMPTY)}>Clear filters</button>}
      </p>

      {results.length === 0 ? (
        <p className="empty">Nothing matches. Remove a filter or try a broader search term.</p>
      ) : (
        <ul className="grid">
          {results.map((r) => (
            <li key={r.slug}>
              <a className="tile" href={`#/r/${r.slug}`}>
                <Dish r={r} />
                <div className="body">
                  <h2>{r.title}</h2>
                  <p className="meta">{cuisineLabel(r.cuisine)}, {r.minutes} min</p>
                  <Spice level={r.spice} />
                  <p className="diets">{DIETS.filter((d) => canBe(r, d)).map((d) => <span key={d}>{d}</span>)}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function RecipePage({ r }: { r: Recipe }) {
  const [servings, setServings] = useState(r.servings);
  const [diet, setDiet] = useState<'original' | Diet>('original');
  const factor = servings / r.servings;
  const swap = diet === 'original' ? undefined : r.swaps[diet];
  const options = DIETS.filter((d) => r.swaps[d]);
  return (
    <main className="recipe">
      <a className="back" href="#/">Back to all recipes</a>
      <header>
        <div className="hero-img"><Dish r={r} /></div>
        <h1>{r.title}</h1>
        {r.native && <p className="native" lang="und">{r.native}</p>}
        <p className="meta">{cuisineLabel(r.cuisine)}, {r.minutes} min, <Spice level={r.spice} /></p>
        <p className="lede">{r.description}</p>
        {r.image?.credit && <p className="credit">Photo: {r.image.credit}</p>}
      </header>

      <section className="authentic">
        <h2>What makes it {r.title.toLowerCase()}</h2>
        <p>{r.authenticity.what}</p>
        <h3>Do not skip</h3>
        <ul>{r.authenticity.essentials.map((e) => <li key={e}>{e}</li>)}</ul>
        {r.authenticity.liberties && <p><strong>Room to adapt:</strong> {r.authenticity.liberties}</p>}
      </section>

      <section>
        <h2>Ingredients</h2>
        <div className="controls">
          <div className="stepper" role="group" aria-label="Servings">
            <button type="button" aria-label="Fewer servings" disabled={servings <= 1} onClick={() => setServings(servings - 1)}>-</button>
            <output>{servings} {servings === 1 ? 'serving' : 'servings'}</output>
            <button type="button" aria-label="More servings" disabled={servings >= 24} onClick={() => setServings(servings + 1)}>+</button>
          </div>
          <div className="row">
            <Chip on={diet === 'original'} onClick={() => setDiet('original')}>Original ({r.original === 'omnivore' ? 'with meat' : r.original})</Chip>
            {options.map((d) => <Chip key={d} on={diet === d} onClick={() => setDiet(d)}>{d}</Chip>)}
          </div>
        </div>
        {swap && <p className="swapnote">{swap.note}</p>}
        <ul className="ingredients">
          {r.ingredients.map((i) => {
            const s = swap?.replace[i.id];
            const omitted = s === null;
            const name = s ? s.name : i.name;
            const amount = s?.amount ?? i.amount;
            const unit = s?.unit ?? i.unit;
            return (
              <li key={i.id} className={omitted ? 'omit' : ''}>
                <span className="amt">{omitted ? '' : formatAmount(amount, unit, factor)}</span>
                <span>
                  {name}{i.note && <em> ({i.note})</em>}
                  {s !== undefined && <small> instead of {i.name}</small>}
                  {omitted && <small> omitted in this version</small>}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="credit">Metric weights; 1 tsp = 5 ml, 1 tbsp = 15 ml, 1 cup = 250 ml.</p>
      </section>

      <section>
        <h2>Method</h2>
        <ol className="steps">
          {r.steps.map((s, n) => (
            <li key={n}>
              <p>{s.text}</p>
              {s.science?.map((id) => {
                const t = TECHNIQUES[id];
                return (
                  <aside className="why" key={id}>
                    <strong>{t.name}.</strong> {t.summary}
                    <details><summary>The science</summary><p>{t.science}</p></details>
                  </aside>
                );
              })}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default function App() {
  const slug = useRoute();
  const recipe = slug ? RECIPES.find((r) => r.slug === slug) : undefined;
  return (
    <>
      {slug && !recipe ? (
        <main><p className="empty">That recipe does not exist. <a href="#/">Browse all recipes</a>.</p></main>
      ) : recipe ? <RecipePage key={recipe.slug} r={recipe} /> : <Browse />}
      <footer>Smakoznawca is open source (MIT). Recipes and corrections welcome on GitHub.</footer>
    </>
  );
}
