# FeyNotes — sito delle lezioni

Sito statico che pubblica le lezioni prodotte dalla pipeline audio→LaTeX.
Build custom (`build.js`), rendering KaTeX lato client, deploy su Hetzner via
GitHub Actions.

## Struttura

```
index.html              # homepage — manuale, TRANNE la sezione corsi (fra i marcatori CORSI): la genera build.js
build.js                # genera HTML da template + config
src/
  config.js             # SOURCE OF TRUTH: corsi, categorie, lezioni
  templates/            # lezione.html, corso.html
  data/                 # fisica/L01.js…, geometria/…, controlli/…
css/
  base.css              # design system + temi colore (dark/light)
  style.css             # layout e componenti — NESSUN colore
js/
  renderer.js           # rendering lezioni + KaTeX
  theme.js              # toggle tema (localStorage)
.github/workflows/deploy.yml   # build + deploy su Hetzner
```

Le lezioni hanno `sections`, `oral_cards` e `formulas`. **Nessuna sezione quiz.**

## Regole CSS — non negoziabili

- **Mai colori hardcoded.** Sempre `var(--nome)` definite in `base.css`.
  Niente `#ffffff`, `#000000`, `rgba(18,20,30,…)` scritti a mano.
- `style.css` contiene **solo** layout token in `:root` (sidebar-w, header-h,
  radius, font). Tutti i colori stanno in `base.css`.
- Dopo ogni modifica CSS: bumpa `cssVersion` in `config.js` **e** aggiorna a
  mano il `?v=` hardcoded nel link CSS di `index.html`. Sono due posti.

## Home: corsi per anno e semestre

Ogni corso in `config.js` ha `anno` (1-3, anno di corso) e `semestre` (1-2):
`build.js` genera la sezione corsi della home raggruppandoli in quest'ordine, e il
colore del corso e' quello del suo anno (`theme: 'annoN'`, temi in `base.css`).
Un corso senza `anno` non compare in home ne' nella sitemap (il precorso).

## Trovare una lezione — la trappola

`id` (es. `L31`) e `num` mostrato (es. "Lezione 26") **non coincidono**, per
rinumerazioni passate. Cerca per `num` in `src/config.js`, poi usa l'`id` per
aprire il file: "Lezione 26" di Fisica → `id: 'L31'` → `src/data/fisica/L31.js`.

## Procedure

- Formule rosse / errori di rendering → skill **`fix-katex`**
- Pubblicare una nuova lezione → skill **`processa-lezione`**
