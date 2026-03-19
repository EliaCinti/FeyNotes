# Fisica 1 — Study Guide

Guida allo studio di Fisica 1 per il corso di Ingegneria Informatica @ Università di Roma Tor Vergata.

## Struttura del progetto

```
fisica1-guide/
├── index.html              ← Landing page con griglia lezioni
├── css/
│   └── style.css           ← Design system condiviso (dark theme)
├── js/
│   └── renderer.js         ← Engine che converte dati lezione → HTML
├── lezioni/
│   ├── L01.html            ← Ogni lezione è un file separato
│   ├── L02.html
│   └── ...
├── animations/             ← Video/GIF generati con Manim
│   ├── vettori-scalari.mp4
│   ├── moto-parabolico.mp4
│   └── ...
└── assets/                 ← Immagini, icone, altro
```

## Come funziona

### Aggiungere una nuova lezione

1. Crea un nuovo file `lezioni/LXX.html` copiando il template da una lezione esistente
2. Modifica l'oggetto `LESSON` con i dati della nuova lezione
3. Aggiungi la lezione all'array `LESSON_INDEX` in `index.html`
4. Aggiorna i link "Prec./Succ." nella sidebar

### Formato dati lezione

Ogni lezione è un oggetto JavaScript con questa struttura:

```javascript
const LESSON = {
  id: "L06",
  date: "Lezione 6 — 18 Mar 2026",
  title: "Titolo della Lezione",
  abstract: "Descrizione breve...",

  sections: [
    // Sezione standard
    {
      id: "s-mio-id",        // ID per il link nella sidebar
      type: "section",        // "section" | "info_corso" | "alert_box"
      title: "Titolo Sezione",
      icon: "📌",
      content: `<p>Testo HTML con $formule$ KaTeX inline.</p>`,
      
      // Opzionali:
      formulas: [
        { label: "Nome", latex: "E = mc^2" }
      ],
      steps: [
        "Primo passo...",
        "Secondo passo..."
      ],
      table_compare: {
        headers: ["Col1", "Col2"],
        rows: [["a", "b"], ["c", "d"]]
      },
      subsections: [
        { subtitle: "Sottotitolo", content: `<p>...</p>`, equations: ["x^2"] }
      ],
      quote: {
        text: "Citazione del prof...",
        src: "— Prof. Mercuri"
      },
      
      // Animazione Manim (video/GIF)
      animation: {
        type: "video",         // "video" o "gif"
        src: "../animations/nome-file.mp4",
        caption: "Descrizione dell'animazione"
      },

      // Grafico interattivo Canvas
      graph: {
        id: "graph-nome",
        width: 700, height: 400,
        caption: "Descrizione"
      }
    }
  ]
};
```

### Integrare un'animazione Manim

1. Genera l'animazione:
   ```bash
   manim-on
   manim -qm --format gif file.py NomeScena    # per GIF
   manim -qm file.py NomeScena                 # per MP4
   ```
2. Copia il file in `animations/`
3. Nella sezione della lezione, aggiungi:
   ```javascript
   animation: {
     type: "video",  // oppure "gif"
     src: "../animations/nome-file.mp4",
     caption: "Cosa mostra questa animazione"
   }
   ```

Il video appare inline con un badge "Manim" e i controlli di riproduzione.

## Servire il sito

### Sviluppo locale
```bash
cd fisica1-guide
python3 -m http.server 8000
# Apri http://localhost:8000
```

### Su un server
Basta copiare l'intera cartella su qualsiasi web server statico (Nginx, Apache, GitHub Pages, Netlify, Cloudflare Pages, ecc.).

## Tech stack

- **HTML/CSS/JS** puro — nessun framework, nessun build step
- **KaTeX** per le formule matematiche
- **Manim** (Community Edition) per le animazioni
- **Canvas API** per i grafici interattivi
