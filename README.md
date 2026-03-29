# FeyNotes

Appunti di Ingegneria Informatica — Università di Roma Tor Vergata.

🌐 **[eliacinti.dev](https://eliacinti.dev)**

---

## Struttura

```
FeyNotes/
  index.html                 ← Homepage
  fisica1/index.html         ← Index Fisica 1
  css/
    base.css                 ← Design system (temi, layout, componenti)
    style.css                ← Stili lezione (sidebar, contenuto, flashcard)
  js/
    renderer.js              ← Render LESSON → HTML
    graphs.js                ← Grafici interattivi
  src/
    config.js                ← Configurazione corsi e metadati lezioni
    templates/
      lezione.html           ← Template unico per tutte le lezioni
    data/
      fisica/
        L01.js … L10.js      ← Dati di ogni lezione (oggetto LESSON)
  lezioni/                   ← OUTPUT generato da build.js
    L01/index.html
    L02/index.html
    ...
  build.js                   ← Build script
  sitemap.xml                ← Generato da build.js
  robots.txt
```

## Aggiungere una nuova lezione

### 1. Crea il file dati

```bash
touch src/data/fisica/L11.js
```

Incolla l'oggetto LESSON con la struttura standard:

```javascript
const LESSON = {
    id: "L11", date: "Lezione 11 — DD Mmm 2026",
    title: "Titolo della lezione",
    abstract: "Abstract breve.",
    sections: [ ... ],
    oral_cards: [ ... ]
};
```

### 2. Registra la lezione in config.js

Apri `src/config.js` e aggiungi alla lista `lessons` del corso:

```javascript
{ id: 'L11', num: 'Lezione 11', date: 'DD Mmm 2026', title: '...', abstract: '...', category: 'dinamica' },
```

### 3. Build

```bash
# Solo la nuova lezione
node build.js --lesson L11

# Oppure tutto il corso
node build.js --course fisica

# Oppure tutto
node build.js
```

### 4. Deploy

```bash
git add .
git commit -m "feat: add L11"
git push
ssh elia@eliacinti.dev "cd ~/website && git pull"
```

## Aggiungere un nuovo corso

### 1. Aggiungi il corso in `src/config.js`

```javascript
geometria: {
  id: 'geometria',
  theme: 'geometria',       // corrisponde a [data-theme="geometria"] in base.css
  name: 'Geometria',
  icon: '△',
  indexUrl: '/geometria/',
  professor: 'Trusiani / Di Gennaro',
  university: 'Università di Roma Tor Vergata',
  year: 'A.A. 2025/2026',
  nav: [ ... ],
  lessons: [ ... ],
},
```

### 2. Crea la cartella dati

```bash
mkdir -p src/data/geometria
```

### 3. Aggiungi il tema in `css/base.css`

```css
[data-theme="geometria"] {
  --accent: #ff8c42;
  --accent-dim: #d4702e;
  --accent-glow: rgba(255,140,66,0.12);
  --accent-glow-strong: rgba(255,140,66,0.25);
}
```

### 4. Build e deploy

```bash
node build.js --course geometria
```

## Cache busting

Dopo aver modificato `base.css` o `style.css`, incrementa `cssVersion` in `src/config.js` e rifai il build. Il numero di versione viene iniettato in tutti i link CSS e JS.

## Temi disponibili

| Corso | Theme | Accento |
|-------|-------|---------|
| Homepage | `home` | `#8b8b8b` (grigio) |
| Fisica 1 | `fisica` | `#e8d44d` (giallo) |
| Geometria | `geometria` | `#ff8c42` (arancione) |
| FdC | `controlli` | `#ff6b6b` (coral) |

## Tecnologie

- HTML/CSS/JS statico (nessun framework)
- KaTeX per le formule
- Node.js per il build (zero dipendenze)
- Nginx + Docker + Cloudflare
- Hetzner CX23
