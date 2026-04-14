# FeyNotes — Documentazione Completa del Progetto

## Indice

1. [L'Idea](#idea)
2. [Architettura del Sistema](#architettura)
3. [Tecnologie Utilizzate](#tecnologie)
4. [Il Pipeline: Come Funziona](#pipeline)
5. [Guida ai Comandi](#comandi)
6. [Aggiungere un Nuovo Corso](#nuovo-corso)
7. [Aggiungere una Nuova Categoria](#nuova-categoria)
8. [Struttura delle Cartelle](#struttura)
9. [Design System](#design)
10. [Troubleshooting](#troubleshooting)

---

## 1. L'Idea <a name="idea"></a>

FeyNotes è una piattaforma di appunti universitari automatizzata. L'obiettivo è trasformare le registrazioni audio delle lezioni in appunti interattivi pubblicati su un sito web, con il minimo intervento manuale.

Il nome "FeyNotes" si ispira a Richard Feynman e alla sua filosofia: capire davvero le cose, non solo memorizzarle.

Il sito è live su **eliacinti.dev** e copre attualmente tre corsi del corso di laurea in Ingegneria Informatica all'Università di Roma Tor Vergata:

- **Fisica 1** (Prof. Mercuri) — lezioni complete con formule KaTeX, flashcard per l'orale, placeholder per diagrammi
- **Geometria** (Trusiani / Di Gennaro) — spazi vettoriali, matrici, sistemi lineari
- **Fondamenti di Controlli** — guide risolutive per esercizi, organizzate per blocchi tematici

---

## 2. Architettura del Sistema <a name="architettura"></a>

Il sistema è composto da due progetti che lavorano insieme:

```
┌─────────────────────────────────────────────────────┐
│              AUDIO-TO-LATEX (pipeline)               │
│                                                      │
│  Audio (.m4a) ──→ Gemini 2.5 Pro ──→ LaTeX (.tex)  │
│                                                      │
│  LaTeX (.tex) ──→ Claude Sonnet ──→ Review + Score  │
│                        │                             │
│                   Score < 8?                         │
│                   ╭── Sì → Claude Opus migliora     │
│                   │         ↓ Re-review             │
│                   ╰── No → Procedi                  │
│                                                      │
│  LaTeX (.tex) ──→ Claude Opus 4.6 ──→ .js           │
│                                                      │
│  .js ──→ Validator (auto-fix) ──→ .js pulito        │
│                                                      │
│  .js + config.js update ──→ git push                │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                FEYNOTES (sito web)                    │
│                                                      │
│  GitHub Actions:                                     │
│    build.js ──→ genera HTML statici                  │
│    rsync ──→ deploy su Hetzner                       │
│                                                      │
│  eliacinti.dev 🚀                                    │
└─────────────────────────────────────────────────────┘
```

### Il flusso completo in un comando

```bash
python convert.py fisica1_lez16.m4a --feynotes --category dinamica --auto-push
```

Questo singolo comando fa:

1. **Gemini 2.5 Pro** ascolta l'audio e genera LaTeX strutturato
2. **Claude Sonnet 4.6** fa una review pedagogica (score su 7 criteri)
3. Se lo score è sotto 8, **Claude Opus 4.6** migliora il LaTeX applicando i consigli
4. **Claude Opus 4.6** converte il LaTeX in un oggetto JavaScript per FeyNotes
5. Il **Validator** auto-corregge problemi KaTeX noti (formule bare, `<` / `>`, `\boxed`, ecc.)
6. `config.js` viene aggiornato automaticamente con i metadati della lezione
7. `git push` invia tutto a GitHub
8. **GitHub Actions** lancia `build.js`, genera gli HTML e deploya su Hetzner via rsync

Tempo totale: circa 5 minuti da audio a lezione live.

---

## 3. Tecnologie Utilizzate <a name="tecnologie"></a>

### Pipeline di Conversione

| Componente | Tecnologia | Ruolo |
|-----------|-----------|-------|
| Trascrizione audio | Google Gemini 2.5 Pro | Ascolta l'audio e genera LaTeX strutturato |
| Review qualità | Claude Sonnet 4.6 (Anthropic) | Valuta il LaTeX su 7 criteri pedagogici |
| Miglioramento | Claude Opus 4.6 (Anthropic) | Migliora il LaTeX seguendo i consigli della review |
| Conversione JS | Claude Opus 4.6 (Anthropic) | Converte LaTeX in oggetto LESSON JavaScript |
| Validazione | Python (regex + Claude Sonnet fallback) | Auto-fix KaTeX, struttura, HTML entities |
| Linguaggio | Python 3.14 | Script del pipeline |

### Sito Web

| Componente | Tecnologia | Ruolo |
|-----------|-----------|-------|
| Build system | Node.js (build.js v3) | Genera HTML da template + dati |
| Rendering formule | KaTeX 0.16.11 | Renderizza formule matematiche nel browser |
| Hosting | Hetzner CX23 (Ubuntu) | Server VPS con Nginx in Docker |
| SSL/CDN | Cloudflare | HTTPS, caching, protezione |
| CI/CD | GitHub Actions | Build automatico + deploy via rsync |
| Design | CSS custom (base.css) | Design system con temi per corso |
| Font | Outfit + JetBrains Mono | Typography: body + terminal elements |

### Infrastruttura

| Componente | Dettaglio |
|-----------|----------|
| Repository | github.com/EliaCinti/FeyNotes |
| Dominio | eliacinti.dev |
| Server | Hetzner CX23, Nginx in Docker, HTTPS via Cloudflare |
| Deploy | GitHub Actions → rsync (solo file necessari, no sorgenti) |

---

## 4. Il Pipeline: Come Funziona <a name="pipeline"></a>

### 4.1 Gemini 2.5 Pro (Audio → LaTeX)

Gemini riceve il file audio e un system prompt che specifica:

- Formato LaTeX senza preambolo (solo `\chapter` → contenuto)
- Ambienti italiani: `teorema`, `definizione`, `esempio`, `osservazione`, `nota`
- Macro: `\R`, `\N`, `\Q`, `\C`
- Nessun carattere non-ASCII (accenti come macro LaTeX)
- Nessun `\textbf` in math mode

Output: file `.tex` in `output/`.

### 4.2 Claude Sonnet 4.6 (Review)

Valuta il LaTeX su 7 criteri (ciascuno da 1 a 10):

- Chiarezza espositiva
- Ambienti e struttura
- Formule e passaggi
- Diagrammi e figure
- Completezza
- Didattica e pedagogia
- Encoding e pulizia

Score complessivo ≥ 8 → procedi. Score < 8 → Claude Opus migliora.

### 4.3 Claude Opus 4.6 (Miglioramento)

Se attivato dalla review, riceve:

- Il LaTeX originale
- Tutti i consigli di Sonnet (critici + consigliati)
- Istruzioni per applicare le correzioni senza inventare contenuto

Massimo 2 round di miglioramento. Dopo ogni round, Sonnet ri-valuta.

### 4.4 Claude Opus 4.6 (LaTeX → JavaScript)

Converte il LaTeX in un oggetto `const LESSON = { ... }` con:

- `sections`: array di sezioni con contenuto HTML + KaTeX
- `oral_cards`: flashcard per l'esame orale
- `formulas`: formule chiave evidenziate
- Placeholder per diagrammi dove il LaTeX indica figure

Il prompt specifica regole KaTeX rigide (no `\boxed`, no `<` / `>`, formule in `<p>`, ecc.).

### 4.5 Validator

Auto-fix gratuiti (regex):

- Formule `$$...$$` non wrappate in `<p>`
- `<` / `>` nelle formule → `\lt` / `\gt`
- `\boxed` → rimosso
- `\implies` → `\Rightarrow`
- `\xrightarrow` → `\overset`
- `\textbf` in math mode → `\boldsymbol`

Se dopo l'auto-fix ci sono ancora problemi strutturali, Claude Sonnet interviene.

### 4.6 Config.js Updater

Aggiunge o aggiorna la lezione in `src/config.js`:

- Se la lezione esiste → sostituisce la riga
- Se l'array ha lezioni → aggiunge dopo l'ultima
- Se l'array è vuoto (`lessons: []`) → lo espande

Gestisce automaticamente il label del corso (`Lezione` per Fisica/Geometria, `Guida` per FdC).

### 4.7 GitHub Actions

Trigger: push su `main`. Steps:

1. Checkout repo
2. Setup Node.js 22
3. `node build.js` (genera tutti gli HTML)
4. rsync al server Hetzner (esclusi: `.git`, `.github`, `src`, `build.js`, `node_modules`)

---

## 5. Guida ai Comandi <a name="comandi"></a>

### Setup (fai sempre prima)

```bash
cd /Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex
source venv/bin/activate
```

---

### convert.py — Audio → LaTeX (+ opzionalmente FeyNotes)

**Sintassi:**

```bash
python convert.py [FILE...] [opzioni]
```

**Flag:**

| Flag | Descrizione | Obbligatorio |
|------|-------------|:---:|
| `FILE` | File audio da convertire | Sì (o processa tutto in `input/`) |
| `-c, --corso NOME` | Corso: `fisica1`, `geometria`, `algebra`, `fdc` | No (estratto dal nome file) |
| `-l, --lezione NUM` | Numero lezione (es. `14`, `14a`) | No (estratto dal nome file) |
| `--feynotes` | Dopo il LaTeX, genera anche il .js per FeyNotes | No |
| `--both` | Genera sia LaTeX che .js | No |
| `--category CAT` | Categoria per FeyNotes (es. `dinamica`, `sistemi-lineari`) | No |
| `--auto-push` | Git push automatico dopo la conversione | No |
| `--dry-run` | Mostra cosa farebbe senza eseguire | No |

**Formato nome file audio:** `corso_lezNUMERO.ext`

| Corso | Esempio |
|-------|---------|
| Fisica 1 | `fisica1_lez16.m4a` |
| Geometria | `geometria_lez17.m4a` |
| FdC | `fdc_lez01.m4a` |
| Algebra | `algebra_lez01.m4a` |

**Esempi di uso:**

```bash
# Lezione normale — tutto automatico
python convert.py fisica1_lez16.m4a --feynotes --category dinamica --auto-push

# Solo LaTeX, senza FeyNotes
python convert.py geometria_lez18.m4a

# Lezione lunga (due parti)
python convert.py fisica1_lez14a.m4a -c fisica1 -l 14a
python convert.py fisica1_lez14b.m4a -c fisica1 -l 14b
cat output/lezione14a.tex output/lezione14b.tex > output/lezione14.tex
python feynotes.py output/lezione14.tex --corso fisica1 -l L14 -d "8 Apr 2026" --category dinamica --auto-push

# Processa tutti i file nella cartella input/
python convert.py --feynotes --auto-push
```

---

### feynotes.py — LaTeX → FeyNotes JavaScript

**Sintassi:**

```bash
python feynotes.py FILE --corso NOME [opzioni]
```

**Flag:**

| Flag | Descrizione | Obbligatorio |
|------|-------------|:---:|
| `FILE` | Path al file .tex | Sì |
| `-c, --corso NOME` | Corso: `fisica1`, `geometria`, `algebra`, `fdc` | Sì |
| `-l, --lezione ID` | ID lezione (es. `L14`). Se omesso: prossimo disponibile | No |
| `-d, --date DATA` | Data (es. `"8 Apr 2026"`). Se omesso: oggi | No |
| `--category CAT` | Categoria. Se omessa: avviso + default alla prima del corso | No |
| `--auto-push` | Git push automatico | No |

**Esempi di uso:**

```bash
# Fisica 1
python feynotes.py output/lezione16.tex --corso fisica1 -l L16 -d "9 Apr 2026" --category dinamica --auto-push

# Geometria
python feynotes.py /path/lezione11.tex --corso geometria -l L11 -d "26 Mar 2026" --category matrici --auto-push

# Fondamenti di Controlli
python feynotes.py /path/fratti_semplici.tex --corso fdc -l L04 -d "6 Apr 2026" --category blocco-5 --auto-push

# Senza specificare ID e data (auto-detected)
python feynotes.py output/lezione.tex --corso fisica1 --category dinamica --auto-push

# Rigenerare una lezione esistente (sovrascrive)
python feynotes.py output/lezione14_W.tex --corso fisica1 -l L14 -d "8 Apr 2026" --category dinamica --auto-push
```

**Nota sulla categoria:** se non la specifichi e Claude ne genera una non valida per il corso, il sistema ti avvisa e usa la prima categoria del corso come default. Puoi poi correggerla manualmente in `config.js`.

---

### validator.py — Validazione e auto-fix standalone

**Sintassi:**

```bash
python validator.py FILE
```

**Quando usarlo:** se una lezione ha formule rotte dopo il deploy.

```bash
python validator.py "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes/src/data/fisica/L14.js"
cd "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes"
git add . && git commit -m "fix: validate L14" && git push
```

---

### improver.py — Miglioramento standalone del LaTeX

**Sintassi:**

```bash
python improver.py FILE [--threshold 8]
```

**Quando usarlo:** se vuoi migliorare un LaTeX manualmente con il loop review+improve.

```bash
python improver.py output/lezione14b.tex --threshold 8.5
```

---

### build.js — Generazione HTML (nel repo FeyNotes)

**Sintassi (dalla cartella FeyNotes):**

```bash
node build.js [opzioni]
```

| Comando | Descrizione |
|---------|-------------|
| `node build.js` | Builda tutto (tutte le lezioni + index + homepage + sitemap) |
| `node build.js --course fisica` | Solo un corso |
| `node build.js --lesson L14` | Solo una lezione (+ index del corso) |
| `node build.js --sitemap` | Solo la sitemap |

**Nota:** se usi `--auto-push`, non serve lanciare build.js — GitHub Actions lo fa.

---

## 6. Aggiungere un Nuovo Corso <a name="nuovo-corso"></a>

### Checklist completa

#### A) Nel repo FeyNotes

**1. `src/config.js`** — Aggiungi il corso nell'oggetto `COURSES`:

```javascript
nome_corso: {
    id: 'nome_corso',
    theme: 'nome_corso',           // deve matchare il data-theme in base.css
    name: 'Nome Visualizzato',
    icon: '📚',                    // emoji per il tab del browser
    basePath: '/nome_corso',       // URL base (es. /algebra)
    indexUrl: '/nome_corso/',
    professor: 'Prof. Cognome',
    university: 'Università di Roma Tor Vergata',
    year: 'A.A. 2025/2026',
    lessonLabel: 'Lezione',        // o 'Guida' per corsi con guide
    description: 'Descrizione breve del corso.',
    nav: [
      { label: 'Lezioni', href: '/nome_corso/', active: true },
    ],
    categories: [
      { id: 'cat-1', label: 'nome categoria 1', gridId: 'cat1-grid' },
      { id: 'cat-2', label: 'nome categoria 2', gridId: 'cat2-grid' },
    ],
    lessons: [],
},
```

**Regole per l'id della categoria:** kebab-case, descrittivo. Esempi: `spazi-vettoriali`, `sistemi-lineari`, `blocco-1`.

**2. `css/base.css`** — Aggiungi il tema colore:

```css
[data-theme="nome_corso"] {
    --accent: #COLORE_HEX;
    --accent-dim: #COLORE_SCURO;
    --accent-glow: rgba(R,G,B,0.12);
    --accent-glow-strong: rgba(R,G,B,0.25);
}
```

Colori già usati (evita doppioni):

| Corso | Colore | Hex |
|-------|--------|-----|
| Homepage | Grigio | `#8b8b8b` |
| Fisica 1 | Giallo | `#e8d44d` |
| Geometria | Arancione | `#ff8c42` |
| FdC | Coral | `#ff6b6b` |

**3. Cartelle:**

```bash
mkdir -p src/data/nome_corso nome_corso
```

**4. `index.html`** — Rendi la card cliccabile. Trova il `<div>` con `data-course="nome_corso"` e sostituiscilo con:

```html
<a href="/nome_corso/" class="fn-course-card fn-fade fn-dX" data-course="nome_corso">
    <div class="fn-course-glow"></div>
    <div class="fn-course-icon">fn::nome_corso</div>
    <div class="fn-course-name">Nome Corso</div>
    <div class="fn-course-prof">prof. cognome</div>
    <div class="fn-course-meta">
        <span class="fn-course-count">0 lezioni</span>
        <span class="fn-course-arrow">&rarr;</span>
    </div>
</a>
```

**5. Build e deploy:**

```bash
node build.js
git add . && git commit -m "feat: add corso nome_corso" && git push
```

#### B) Nel pipeline audio-to-latex

**6. `feynotes.py`** — Aggiungi il corso in `COURSE_MAP`:

```python
COURSE_MAP = {
    ...
    "chiave_audio": {"feynotes_id": "nome_corso", "base_path": "nome_corso", "label": "Lezione"},
}
```

- `chiave_audio`: il prefisso del nome file audio (es. `fisica1`, `geometria`, `fdc`)
- `feynotes_id`: deve corrispondere all'`id` in `config.js`
- `label`: `"Lezione"` o `"Guida"`

**7. `config.py`** (opzionale) — Se il corso ha un professore specifico, aggiungilo in `COURSES`:

```python
COURSES = {
    ...
    "chiave_audio": {
        "name": "Nome Corso",
        "professor": "Prof. Cognome",
        "color_primary": "ColoreCorso",
    },
}
```

---

## 7. Aggiungere una Nuova Categoria <a name="nuova-categoria"></a>

Serve solo una modifica in `src/config.js` nel repo FeyNotes.

### Step 1 — Apri `src/config.js`

Trova il corso e aggiungi la nuova categoria nell'array `categories`:

```javascript
categories: [
    { id: 'spazi-vettoriali', label: 'spazi vettoriali', gridId: 'spazi-grid' },
    { id: 'matrici', label: 'matrici', gridId: 'matrici-grid' },
    // AGGIUNGI QUI:
    { id: 'nuova-categoria', label: 'nome visualizzato', gridId: 'nuovacat-grid' },
],
```

**Regole:**

- `id`: kebab-case, unico nel corso. Questo è il valore che passi a `--category`.
- `label`: testo visualizzato nella sezione del corso (minuscolo).
- `gridId`: id univoco per l'HTML. Convenzione: abbreviazione + `-grid`.

### Step 2 — Build e deploy

```bash
node build.js
git add . && git commit -m "feat: add category nuova-categoria" && git push
```

### Step 3 — Usa la categoria

```bash
python feynotes.py file.tex --corso CORSO --category nuova-categoria --auto-push
```

O da audio:

```bash
python convert.py file.m4a --feynotes --category nuova-categoria --auto-push
```

**Nessuna modifica al pipeline.** La categoria è solo un'etichetta in `config.js` — `feynotes.py` e `build.js` la leggono automaticamente.

---

## 8. Struttura delle Cartelle <a name="struttura"></a>

### Pipeline (audio-to-latex)

```
/Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex/
│
├── convert.py              # Audio → LaTeX (Gemini 2.5 Pro)
├── feynotes.py             # LaTeX → FeyNotes JS (Claude Opus 4.6)
├── validator.py            # Auto-fix + AI review per file .js
├── improver.py             # Loop review → improve per LaTeX
├── reviewer.py             # Review pedagogica (Claude Sonnet 4.6)
├── config.py               # API keys, modelli, percorsi, corsi
├── learn.py                # Regole apprese da review precedenti
├── corrections.json        # Database regole apprese
│
├── prompts/
│   ├── system_prompt.txt       # Prompt per Gemini (genera LaTeX)
│   ├── reviewer_prompt.txt     # Prompt per Sonnet (review)
│   ├── feynotes_prompt.txt     # Prompt per Opus (genera JS)
│   └── feynotes_example.js     # Esempio L10.js come riferimento
│
├── input/                  # Metti qui i file audio
├── output/                 # File .tex generati
├── completed/              # Audio già processati
│
├── venv/                   # Virtual environment Python
├── GUIDA-PIPELINE.md       # Guida rapida ai comandi
└── requirements.txt
```

### Sito Web (FeyNotes)

```
/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes/
│
├── index.html              # Homepage
├── build.js                # Generatore HTML (v3)
├── sitemap.xml             # Generato da build.js
│
├── src/                    # SORGENTI (non vanno sul server)
│   ├── config.js           # Source of truth: corsi + lezioni
│   ├── templates/
│   │   ├── lezione.html    # Template per pagina lezione
│   │   └── corso.html      # Template per index corso
│   └── data/
│       ├── fisica/         # L01.js, L02.js, ... L15.js
│       ├── geometria/      # L01.js, L02.js, ... L17.js
│       └── controlli/      # L01.js, L02.js, ...
│
├── css/
│   ├── base.css            # Design system + temi colore
│   └── style.css           # Stili aggiuntivi
│
├── js/
│   └── renderer.js         # Renderizza lezioni + KaTeX
│
├── fisica1/                # OUTPUT generato (va sul server)
│   ├── index.html
│   └── lezioni/L01/index.html ...
│
├── geometria/              # OUTPUT generato
│   ├── index.html
│   └── lezioni/L01/index.html ...
│
├── controlli/              # OUTPUT generato
│   ├── index.html
│   └── lezioni/L01/index.html ...
│
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions: build + deploy
```

---

## 9. Design System <a name="design"></a>

### Temi per Corso

Ogni corso ha un tema definito in `css/base.css` tramite `data-theme`:

```css
[data-theme="fisica"] {
    --accent: #e8d44d;          /* Colore principale */
    --accent-dim: #c4b030;       /* Colore scuro (hover) */
    --accent-glow: rgba(232,212,77,0.12);       /* Glow leggero */
    --accent-glow-strong: rgba(232,212,77,0.25); /* Glow forte */
}
```

Il tema viene applicato automaticamente tramite `build.js` che inietta `data-theme="TEMA"` nell'HTML generato.

### Typography

- **Outfit** — body text, titoli, UI
- **JetBrains Mono** — elementi terminale, codice, label `fn::corso`

### Componenti

- `fn-card` — card delle lezioni nell'index del corso
- `fn-course-card` — card dei corsi nella homepage
- `diagram-placeholder` — segnaposto per diagrammi da disegnare
- `alert_box` — avvisi importanti, trappole d'esame
- `note_box` — note didattiche
- `oral_box` — domande tipiche dell'orale
- `formulas` — box con formule chiave della sezione

### KaTeX — Regole Critiche

| Regola | Sbagliato | Giusto |
|--------|-----------|--------|
| Formule display in `<p>` | `$$formula$$` | `<p>$$formula$$</p>` |
| Minore/maggiore | `$x < 0$` | `$x \lt 0$` |
| Box | `\boxed{formula}` | `formula` (senza box) |
| Implicazione | `\implies` | `\Rightarrow` |
| Freccia con testo | `\xrightarrow{testo}` | `\overset{testo}{\longrightarrow}` |
| Grassetto in formula | `\textbf{x}` | `\boldsymbol{x}` |

---

## 10. Troubleshooting <a name="troubleshooting"></a>

### La lezione non appare sul sito

**Causa più comune:** la categoria non è valida per il corso.

```bash
cd "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes"
grep "LXX" src/config.js
```

Controlla che la `category` corrisponda a una delle categorie definite nel corso. Fix:

```bash
sed -i '' "s|category: 'SBAGLIATA'|category: 'GIUSTA'|" src/config.js
node build.js && git add . && git commit -m "fix" && git push
```

### La data è in formato ISO (2026-04-14)

Il fix è ora automatico grazie a `normalize_date()`. Se trovi date vecchie in formato ISO, correggile manualmente in `config.js`.

### Le formule sono rosse o non renderizzate

```bash
cd /Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex
python validator.py "/path/al/file.js"
cd "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes"
git add . && git commit -m "fix: validate" && git push
```

### Le matrici mostrano &amp;

Il fix è nel renderer.js (decode `&amp;` → `&`). Se lo vedi ancora è cache:

- Hard refresh: `⌘+Shift+R`
- Incrementa `cssVersion` in `src/config.js` → rebuild → push

### Timeout Gemini (503/504)

Gemini è sovraccarico. Il .tex è stato comunque salvato in `output/`. Usa feynotes.py direttamente:

```bash
python feynotes.py output/lezioneXX.tex --corso CORSO --category CAT --auto-push
```

### Lezione duplicata in config.js

Il bug è stato fixato — `feynotes.py` ora sostituisce se l'ID esiste già. Se hai duplicati vecchi, rimuovili manualmente in VS Code.

### Score basso dopo miglioramento

Il loop fa massimo 2 round di miglioramento. Se lo score resta sotto 8 dopo 2 round, il sistema procede con il risultato migliore disponibile. Puoi:

1. Rigenerare il LaTeX: `python convert.py file.m4a -c corso -l XX`
2. Migliorare manualmente il .tex e rilanciare feynotes.py

### Git push fallisce da feynotes.py

Probabilmente ci sono modifiche non committate nel repo FeyNotes. Vai nel repo, committa tutto manualmente, poi rilancia.

---

## Cheat Sheet Rapido

```bash
# ═══════════ SETUP ═══════════
cd /Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex
source venv/bin/activate

# ═══════════ LEZIONE DA AUDIO (caso più comune) ═══════════
cp /path/audio.m4a input/fisica1_lez16.m4a
python convert.py fisica1_lez16.m4a --feynotes --category dinamica --auto-push

# ═══════════ LEZIONE DA LATEX ESISTENTE ═══════════
python feynotes.py /path/file.tex --corso geometria -l L11 -d "26 Mar 2026" --category matrici --auto-push

# ═══════════ LEZIONE LUNGA (2 PARTI) ═══════════
python convert.py fisica1_lez14a.m4a -c fisica1 -l 14a
python convert.py fisica1_lez14b.m4a -c fisica1 -l 14b
cat output/lezione14a.tex output/lezione14b.tex > output/lezione14.tex
python feynotes.py output/lezione14.tex --corso fisica1 -l L14 -d "8 Apr 2026" --category dinamica --auto-push

# ═══════════ FIX FORMULE ═══════════
python validator.py /path/al/file.js

# ═══════════ RIGENERARE UNA LEZIONE ═══════════
python feynotes.py output/lezioneXX.tex --corso CORSO -l LXX --category CAT --auto-push

# ═══════════ CORREGGERE CATEGORIA ═══════════
cd "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes"
grep "LXX" src/config.js
# Poi sed per cambiare la categoria + node build.js + git push
```
