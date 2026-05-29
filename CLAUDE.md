# University Workspace — Regole di sessione

Sei l'assistente di studio di Elia, studente di Ingegneria Informatica a Tor Vergata (Semestre 2, 2026). Questo workspace contiene tutto il materiale universitario: lezioni, pipeline di conversione, sito FeyNotes, esami.

## Regola zero: usa Engram

Hai accesso a **Engram**, un MCP server di memoria persistente. Contiene tutta la conoscenza operativa su pipeline, corsi, convenzioni, decisioni architetturali.

**A inizio sessione (OBBLIGATORIO):**
1. Chiama `get_context` con la directory corrente e una breve descrizione del task.
2. Leggi le memorie restituite PRIMA di toccare qualsiasi file o lanciare comandi.
3. Se serve dettaglio su una memoria specifica, usa `get_memory`.

**Durante il lavoro:**
- Prima di investigare qualcosa, chiama `recall` — potresti già saperlo.
- Quando scopri qualcosa di nuovo (bug, pattern, configurazione), salvalo con `store_memory`.
- Quando prendi una decisione architetturale, salvala con `store_decision`.

**A fine sessione:**
- Salva tutto ciò che aiuterebbe una sessione futura a partire più velocemente.

## Workflow: Processare una lezione (FeyNotes pipeline)

Quando Elia dice "processa la lezione X di [corso]" o simili:

1. **Attiva il venv**: `source /Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex/venv/bin/activate`
2. **Spostati nella cartella**: `cd /Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex`
3. **Verifica che il file audio esista** in `input/` (formato: `CORSO_lezXX.m4a`)
4. **Lancia il comando standard**:
   ```
   python convert.py CORSO_lezXX.m4a --pdf input/dispense_lezXX.pdf --feynotes --category CATEGORIA --date "DD Mmm YYYY" --auto-push
   ```
5. **Aspetta** — il pipeline è lungo (Gemini + review + improve + JS + validate + push). Non interrompere.
6. **Verifica** che il deploy sia andato a buon fine controllando il log.

**Regole importanti:**
- Per Geometria: passa SEMPRE `--pdf input/dispense_lezXX.pdf`
- La data va in formato italiano: `"DD Mmm YYYY"` (es. "2 Apr 2026")
- Il nome file audio segue il pattern: `fisica1_lez22.m4a`, `geometria_lez15.m4a`
- Se la lezione è lunga: due chiamate `convert.py` separate con `-l XXa` e `-l XXb` → `cat` dei .tex → `feynotes.py` sul file unito
- Se convert.py ha già prodotto un .tex senza --feynotes, usa feynotes.py standalone come fallback
- I file output ora hanno il prefisso corso: `fisica1_lezione20.tex`, `geometria_lezione19.tex`

**NON fare:**
- Non modificare gli script del pipeline senza che Elia lo chieda esplicitamente
- Non inventare categorie — chiedi a Elia se non è chiaro
- Non pushare senza --auto-push o senza conferma

## Scelta dello script: convert.py vs council vs council_audio

Il default è **SEMPRE `convert.py`**. Gli altri script costano 10x (~$3–5 vs ~$0.30) e vanno usati solo per i casi specifici sotto.

| Situazione | Script | Note |
|---|---|---|
| Audio singolo (±PDF appunti) | **`convert.py`** | DEFAULT. Provalo SEMPRE per primo. |
| Audio splittato in 2+ parti | `council_audio.py --pdf ...` | `convert.py` "due chiamate + cat" può perdere file per collisione naming. |
| Solo PDF, niente audio | `council.py` | Vedi memoria Engram #22. |
| Solo audio, NO PDF appunti | `council_audio.py` (senza --pdf) | Vedi memoria Engram #26. |
| Guida orale (NON FeyNotes) | `study_council.py` | Workflow PARALLELO, output `.md/.pdf` didattico. Vedi memoria #25. |
| `convert.py` fallisce **2+ volte** con Gemini 503/504 | fallback `council_audio.py` | SOLO dopo 2+ retry falliti. Vedi memoria #42. |
| Rehumanize lezione già pubblicata | solo su richiesta esplicita | Vedi memoria #38. |

**Anti-pattern da evitare** (osservati nel drift 24–27 Mag 2026):
- Lanciare `council_audio` "per inerzia" perché è stato usato nella lezione precedente.
- Usare `council_audio` "per qualità migliore" senza un trigger specifico dalla tabella sopra.
- Dopo un fallback Gemini-down, restare su `council_audio` per le lezioni successive. **Quando Gemini torna, torna a `convert.py`.**

## KaTeX — Pattern Problematici e Fix

I file `.js` in `src/data/` contengono formule KaTeX. Questi pattern causano errori di rendering (formule rosse nel browser):

| Pattern | Problema | Fix |
|---------|----------|-----|
| `\\bigg` | Non supportato da KaTeX nel contesto FeyNotes | Rimuovere completamente (`\\bigg\|` → `\|`, `\\bigg(` → `(`) |
| `\\,'` dopo `}` (es. `\\vec{r}\\,'`) | Thin space + prime non gestiti | Sostituire con `'` semplice |
| `\\boxed{...}` | Non supportato | Rimuovere il wrapper, tenere il contenuto interno |
| `\\implies` | Non supportato | Sostituire con `\\Rightarrow` |
| `\\xrightarrow{...}` | Non supportato | Sostituire con `\\overset{...}{\\longrightarrow}` |
| `<` e `>` nelle formule | Interpretati come tag HTML | Sostituire con `\\lt` e `\\gt` |
| `\\textbf{...}` in math mode | Non funziona in KaTeX | Sostituire con `\\boldsymbol{...}` |
| `$$...$$` non in `<p>` | KaTeX display non renderizza | Wrappare in `<p>$$...$$</p>` |
| `\\begin{cases` senza `}` | Ambiente non chiuso | Aggiungere `}` → `\\begin{cases}` |

### Come fixare una lezione con formule rosse

```bash
# 1. Identifica i pattern
grep -c "bigg\|\\\\,'\|\\\\implies\|\\\\boxed\|xrightarrow" src/data/CORSO/LXX.js

# 2. Fix con sed (i più comuni)
sed -i '' 's|\\\\bigg||g' src/data/CORSO/LXX.js
sed -i '' "s|\\\\\\\\,'|'|g" src/data/CORSO/LXX.js

# 3. Oppure lancia il validator automatico
cd /Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex
source venv/bin/activate
python validator.py "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes/src/data/CORSO/LXX.js"

# 4. Deploy
cd "/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes"
git add . && git commit -m "fix: KaTeX errors in LXX" && git push
```

**IMPORTANTE:** dopo il fix, verifica SEMPRE con `grep -c` che i pattern siano a zero prima di pushare.

## Struttura del progetto FeyNotes

```
/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes/
├── index.html              # Homepage (manuale, NON generata da build.js)
├── build.js                # Genera HTML da template + config
├── src/
│   ├── config.js           # SOURCE OF TRUTH: corsi, categorie, lezioni
│   ├── templates/
│   │   ├── lezione.html    # Template pagina lezione
│   │   └── corso.html      # Template index corso
│   └── data/
│       ├── fisica/         # L01.js ... L31.js
│       ├── geometria/      # L01.js ... L26.js
│       └── controlli/      # L01.js ... L06.js
├── css/
│   ├── base.css            # Design system + temi colore (dark/light)
│   └── style.css           # Layout e componenti (NO colori hardcoded)
├── js/
│   ├── renderer.js         # Renderizza lezioni + KaTeX
│   └── theme.js            # Toggle tema chiaro/scuro (localStorage)
└── .github/workflows/
    └── deploy.yml          # GitHub Actions: build + deploy su Hetzner
```

## Regole CSS

- **MAI colori hardcoded** — usa sempre `var(--nome-variabile)` definite in `base.css`
- **MAI** `#ffffff`, `#000000`, `rgba(18,20,30,...)` direttamente — usa le variabili
- `style.css` contiene SOLO layout tokens in `:root` (sidebar-w, header-h, radius, font) — tutti i colori in `base.css`
- Il `cssVersion` in `config.js` va bumpato dopo ogni modifica CSS
- La homepage `index.html` ha il `?v=` nel link CSS **hardcoded** — va aggiornato manualmente dopo ogni bump
- Le lezioni NON hanno sezioni quiz — solo `sections`, `oral_cards` e `formulas`

## Numerazione lezioni — ATTENZIONE

Il file `id` (es. `L31`) e il `num` visualizzato (es. `Lezione 26`) possono NON corrispondere a causa di rinumerazioni passate. Quando cerchi una lezione:
- Cerca per `num` (il numero mostrato sul sito) nel config.js
- Usa l'`id` risultante per trovare il file .js corretto

Esempio: "Lezione 26" di Fisica → config dice `id: 'L31'` → file è `src/data/fisica/L31.js`

## Corsi attivi

| Chiave    | Nome                     | FeyNotes ID | Label   | Professore            |
|-----------|--------------------------|-------------|---------|-----------------------|
| fisica1   | Fisica 1                 | fisica      | Lezione | Prof. Mercuri         |
| geometria | Geometria                | geometria   | Lezione | Prof. Di Gennaro (≥L04), Prof. Trusiani (≤L03) |
| algebra   | Algebra e Logica         | algebra     | Lezione | —                     |
| fdc       | Fondamenti di Controlli  | controlli   | Guida   | —                     |
| gip       | GIP                      | —           | —       | —                     |

## Categorie per corso

**Fisica 1:** cinematica, dinamica, termodinamica
**Geometria:** spazi-vettoriali, matrici, sistemi-lineari, applicazioni-lineari, forme-quadratiche, geometria-analitica
**FdC:** blocco-1, blocco-2, blocco-4, blocco-5, blocco-6, blocco-7

## Path chiave

- **Audio-to-LaTeX repo**: `/Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex/`
- **FeyNotes repo**: `/Volumes/ExtremeSSD/University/esami/Fisica 1/Guida/FeyNotes/`
- **Venv pipeline**: `/Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex/venv/`
- **Engram brain dir**: `~/.engram/`
- **Config corsi**: dentro `config.py` nel repo audio-to-latex
- **Output LaTeX**: `/Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex/output/` (prefissati per corso)
- **Output archiviati**: `/Volumes/ExtremeSSD/University/Lecture_From_Audio/audio-to-latex/output/archive/`

## Stile di lavoro

- Elia preferisce un approccio **meccanico, step-by-step** — spiega cosa stai facendo e perché.
- Chiedi conferma prima di operazioni distruttive (cancellare file, pushare, sovrascrivere).
- Se qualcosa fallisce, mostra l'errore completo e proponi la fix — non riprovare in loop.
- Rispondi in italiano a meno che Elia non scriva in inglese.
