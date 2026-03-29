const LESSON = {
    id: "L04", date: "Lezione 4 — 9 Mar 2026",
    title: "Moti Particolari: MRU, MUA, Caduta Libera e Moto del Proiettile",
    abstract: "Dalla teoria generale ai casi concreti. Moto rettilineo uniforme, moto uniformemente accelerato, caduta libera in tre varianti (da fermo, lancio verso il basso, lancio verso l'alto), e il problema della gittata. Come modellizzare e scegliere gli assi per semplificare.",

    sections: [
      // ──────────────── SEZIONE 1: METODOLOGIA ────────────────
      {
        id: "s4-metodologia",
        type: "section",
        title: "Dal Generale al Particolare: l'Arte della Modellizzazione",
        icon: "🎯",
        content: `<p>La lezione inizia ricordando le <strong>leggi orarie generali</strong> della cinematica:</p>`,

        formulas: [
          { label: "Legge oraria posizione", latex: "\\vec{r}(t) = \\vec{r}_0 + \\int_{t_0}^{t} \\vec{v}(t')\\,dt'" },
          { label: "Legge oraria velocità", latex: "\\vec{v}(t) = \\vec{v}_0 + \\int_{t_0}^{t} \\vec{a}(t')\\,dt'" }
        ],

        extra_content: `<p>Queste due equazioni vettoriali, una volta proiettate sugli assi, possono generare fino a <strong>6 equazioni algebriche</strong> (3 per la posizione + 3 per la velocità). Ma la scelta intelligente degli assi può ridurle drasticamente.</p>
<p>Il messaggio chiave del professore: la maggior parte degli <strong>errori</strong> non nasce dalla matematica, ma dall'incapacità di <strong>modellizzare</strong> correttamente le equazioni generali per il caso specifico.</p>`,

        quote: {
          text: "Il fenomeno naturale non dipende da come voi lo descrivete... ma il modo in cui voi elaborate le grandezze... quello sì che dipende da come voi fate le vostre scelte.",
          src: "— Prof. Mercuri, Lezione 4"
        }
      },

      // ──────────────── SEZIONE 2: MRU ────────────────
      {
        id: "s4-mru",
        type: "section",
        title: "Caso 1: Moto Rettilineo Uniforme (MRU)",
        icon: "➡️",
        content: `<p>Il caso più semplice: un punto si muove con velocità <strong>costante</strong> — non cambiano né modulo, né direzione, né verso. Di conseguenza l'accelerazione è <strong>nulla</strong>.</p>`,

        formulas: [
          { label: "Velocità", latex: "\\vec{v}(t) = \\vec{v}_0 = \\text{cost}" },
          { label: "Accelerazione", latex: "\\vec{a}(t) = \\vec{0}" }
        ],

        extra_content: `<p>Scegliendo l'asse $x$ nella direzione di $\\vec{v}_0$ (scelta "furba"!), le componenti $y$ e $z$ sono identicamente nulle. Le 6 equazioni si riducono a <strong>2</strong>:</p>`,

        subsections: [
          {
            subtitle: "Leggi orarie del MRU (con $t_0 = 0$)",
            content: `<p>Unica componente non banale — lungo $x$:</p>`,
            equations: [
              "x(t) = x_0 + v_0\\,t",
              "v_x(t) = v_0 = \\text{cost}"
            ]
          },
          {
            subtitle: "Componenti annullate dalla scelta degli assi",
            content: `<p>$$y(t) = 0, \\quad v_y(t) = 0$$
$$z(t) = 0, \\quad v_z(t) = 0$$</p>
<p>Le 3 coppie (una per asse) compongono le leggi delle componenti. Il professore ha annotato: <em>"perché ho scelto bene gli assi"</em>.</p>`
          },
          {
            subtitle: "Caso limite: la quiete",
            content: `<p>La quiete è un caso particolare di MRU con $\\vec{v}_0 = \\vec{0}$. Il corpo resta fermo: $\\vec{r}(t) = \\vec{r}_0$ per ogni $t$.</p>`
          }
        ]
      },

      // ──────────────── SEZIONE 3: MUA ────────────────
      {
        id: "s4-mua",
        type: "section",
        title: "Caso 2: Moto Uniformemente Accelerato (MUA)",
        icon: "📈",
        content: `<p>Il MUA è un moto con <strong>accelerazione costante</strong>: $\\vec{a}(t) = \\vec{a} = \\text{cost}$. Integrando le leggi generali con $\\vec{a} = \\text{cost}$ si ottengono le formule fondamentali della cinematica.</p>`,

        subsections: [
          {
            subtitle: "Derivazione per una singola componente (es. $x$)",
            content: `<p>Partendo da $a_x = \\text{cost}$ e integrando con $t_0 = 0$:</p>
<p>$$v_x(t) = v_{0x} + a_x\\,t \\qquad \\text{(retta — eq. di 1° grado in } t\\text{)}$$</p>
<p>Integrando ancora:</p>
<p>$$x(t) = x_0 + v_{0x}\\,t + \\tfrac{1}{2}\\,a_x\\,t^2 \\qquad \\text{(parabola — eq. di 2° grado in } t\\text{)}$$</p>
<p>Lo stesso vale identicamente per $y$ e $z$, con le rispettive componenti.</p>`
          }
        ],

        formulas: [
          { label: "Posizione (vettoriale)", latex: "\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0\\,t + \\tfrac{1}{2}\\,\\vec{a}\\,t^2" },
          { label: "Velocità (vettoriale)", latex: "\\vec{v}(t) = \\vec{v}_0 + \\vec{a}\\,t" }
        ],

        extra_content: `<p>Queste sono le <strong>formule più usate</strong> in cinematica. Da imparare, ma soprattutto da <strong>saper derivare</strong> partendo dall'integrale generale — il professore vuole vedere il ragionamento, non la formula memorizzata.</p>`,

        table_compare: {
          headers: ["Grandezza", "MRU ($\\vec{a} = 0$)", "MUA ($\\vec{a} = \\text{cost}$)"],
          rows: [
            ["Posizione", "$\\vec{r}_0 + \\vec{v}_0\\,t$", "$\\vec{r}_0 + \\vec{v}_0\\,t + \\tfrac{1}{2}\\vec{a}\\,t^2$"],
            ["Velocità", "$\\vec{v}_0$ (costante)", "$\\vec{v}_0 + \\vec{a}\\,t$ (lineare)"],
            ["Accelerazione", "$\\vec{0}$", "$\\vec{a}$ (costante)"],
            ["Tipo di $x(t)$", "Retta", "Parabola"],
            ["Tipo di $v(t)$", "Costante", "Retta"]
          ]
        }
      },

      // ──────────────── ALERT: A NON COSTANTE ────────────────
      {
        id: "s4-alert-a-non-cost",
        type: "alert_box",
        title: "🚨 Se l'accelerazione NON è costante, le formule del MUA non valgono!",
        content: `<p>Se $\\vec{a}(t)$ è una funzione del tempo (es. $a = 2t$), <strong>non puoi usare</strong> $x = x_0 + v_0 t + \\frac{1}{2}at^2$. Devi tornare all'integrale generale e calcolare esplicitamente:</p>
<p>$$\\vec{v}(t) = \\vec{v}_0 + \\int_{t_0}^{t} \\vec{a}(t')\\,dt'$$</p>
<p>Il professore ha detto esplicitamente: <em>"Se l'accelerazione non è costante, fatevi una ragione, dovete partire dall'integrale generale"</em>.</p>`
      },

      // ──────────────── SEZIONE 4: CADUTA LIBERA INTRO ────────────────
      {
        id: "s4-caduta-intro",
        type: "section",
        title: "Caduta Libera: Impostazione del Problema",
        icon: "🪨",
        content: `<p>Un corpo cade da un'altezza $H$ sotto l'effetto della gravità. Il moto è <strong>verticale</strong> (1D), quindi basta un solo asse — scegliamo $y$ verso l'alto, con l'origine al suolo.</p>`,

        steps: [
          "<strong>Sistema di riferimento</strong>: asse $y$ verso l'alto, origine al suolo ($y = 0$).",
          "<strong>Accelerazione di gravità</strong>: $\\vec{g}$ punta verso il basso, quindi $a_y = -g = -9{,}81$ m/s².",
          "<strong>Posizione iniziale</strong>: $y_0 = H$ (il corpo parte dall'altezza $H$).",
          "Componenti $x$ e $z$: <strong>tutte nulle</strong> (moto puramente verticale)."
        ],

        extra_content: `<p>Le leggi orarie per la componente $y$ (MUA con $a_y = -g$):</p>`,

        formulas: [
          { label: "Posizione", latex: "y(t) = H + v_{0y}\\,t - \\tfrac{1}{2}\\,g\\,t^2" },
          { label: "Velocità", latex: "v_y(t) = v_{0y} - g\\,t" }
        ],

        extra_content: `<p>Il valore di $v_{0y}$ cambia a seconda del caso. Negli appunti hai sottolineato: <em>"capire bene come si arriva a queste formule"</em>.</p>`
      },

      // ──────────────── SEZIONE 5: CASO 1 — DA FERMO ────────────────
      {
        id: "s4-caduta-caso1",
        type: "section",
        title: "Caduta Libera — Caso 1: Partenza da Fermo ($\\vec{v}_0 = 0$)",
        icon: "1️⃣",
        content: `<p>L'oggetto viene <strong>lasciato cadere</strong> senza velocità iniziale: $\\vec{v}_0 = 0 \\Rightarrow v_{0y} = 0$.</p>`,

        formulas: [
          { label: "Posizione", latex: "y(t) = H - \\tfrac{1}{2}\\,g\\,t^2" },
          { label: "Velocità", latex: "v_y(t) = -g\\,t" }
        ],

        extra_content: `<p>Osservazione dai tuoi appunti: $v_y(t)$ è <strong>negativa</strong> per ogni $t > 0$. Significa che l'oggetto si muove sempre verso il basso. Ha senso!</p>`,

        subsections: [
          {
            subtitle: "Tempo di caduta $T_c$",
            content: `<p>L'oggetto tocca terra quando $y = 0$:</p>
<p>$$0 = H - \\tfrac{1}{2}\\,g\\,T_c^2 \\quad \\Rightarrow \\quad \\tfrac{1}{2}\\,g\\,T_c^2 = H \\quad \\Rightarrow \\quad T_c = \\sqrt{\\frac{2H}{g}}$$</p>
<p>Si prende solo la soluzione positiva perché un tempo negativo non ha senso fisico.</p>`
          },
          {
            subtitle: "Velocità d'impatto $v_c$",
            content: `<p>Sostituendo $T_c$ nella formula della velocità:</p>
<p>$$v_y(T_c) = -g\\sqrt{\\frac{2H}{g}} = -\\sqrt{2gH}$$</p>
<p>Il segno negativo indica verso il basso. <strong>Ricomposizione vettoriale</strong>:</p>
<p>$$\\vec{v}(T_c) = -\\sqrt{2gH}\\;\\hat{j}$$</p>`
          }
        ]
      },

      // ──────────────── SEZIONE 6: CASO 2 — LANCIO VERSO IL BASSO ────────────────
      {
        id: "s4-caduta-caso2",
        type: "section",
        title: "Caduta Libera — Caso 2: Lancio verso il Basso ($\\vec{v}_0 \\neq 0$, verso il basso)",
        icon: "2️⃣",
        content: `<p>L'oggetto viene <strong>lanciato verso il basso</strong> con velocità iniziale $v_0$. Poiché punta verso il basso e l'asse $y$ punta verso l'alto: $v_{0y} = -v_0$.</p>`,

        formulas: [
          { label: "Posizione", latex: "y(t) = H - v_0\\,t - \\tfrac{1}{2}\\,g\\,t^2" },
          { label: "Velocità", latex: "v_y(t) = -v_0 - g\\,t" }
        ],

        extra_content: `<p>Rispetto al Caso 1 c'è un termine in più: $-v_0\\,t$ nella posizione. Il moto è "più veloce" perché la velocità iniziale si <em>somma</em> a quella acquistata per gravità.</p>`,

        subsections: [
          {
            subtitle: "Tempo di caduta (equazione di 2° grado)",
            content: `<p>Ponendo $y = 0$:</p>
<p>$$0 = H - v_0\\,T_c - \\tfrac{1}{2}\\,g\\,T_c^2$$</p>
<p>Riordinando in forma standard $\\frac{1}{2}g\\,T_c^2 + v_0\\,T_c - H = 0$, con $a = \\frac{g}{2}$, $b = v_0$, $c = -H$:</p>
<p>$$T_c = \\frac{-v_0 + \\sqrt{v_0^2 + 2gH}}{g}$$</p>
<p>Si prende la soluzione positiva.</p>`
          },
          {
            subtitle: "Velocità d'impatto",
            content: `<p>$$|v_c| = \\sqrt{v_0^2 + 2gH}$$</p>
<p>Ricomposizione: $\\vec{v}(T_c) = -\\sqrt{v_0^2 + 2gH}\\;\\hat{j}$ (diretta verso il basso).</p>`
          }
        ]
      },

      // ──────────────── SEZIONE 7: CASO 3 — LANCIO VERSO L'ALTO ────────────────
      {
        id: "s4-caduta-caso3",
        type: "section",
        title: "Caduta Libera — Caso 3: Lancio verso l'Alto",
        icon: "3️⃣",
        content: `<p>L'oggetto viene <strong>lanciato verso l'alto</strong> da altezza $H$ con $v_0$. Poiché $\\vec{v}_0$ è concorde con $y$: $v_{0y} = +v_0$.</p>`,

        formulas: [
          { label: "Posizione", latex: "y(t) = H + v_0\\,t - \\tfrac{1}{2}\\,g\\,t^2" },
          { label: "Velocità", latex: "v_y(t) = v_0 - g\\,t" }
        ],

        extra_content: `<p>Il moto ha <strong>tre fasi</strong> distinte:</p>`,

        steps: [
          "<strong>Fase 1 — Sale</strong>: all'inizio $v_y > 0$ (la gravità lo rallenta).",
          "<strong>Fase 2 — Quota massima</strong>: a un certo istante $v_y = 0$ (punto più alto, prima dell'inversione di segno della velocità).",
          "<strong>Fase 3 — Scende</strong>: dopo il punto più alto, $v_y < 0$."
        ],

        subsections: [
          {
            subtitle: "Quota massima $y_{\\text{max}}$",
            content: `<p>Si raggiunge quando $v_y = 0$:</p>
<p>$$0 = v_0 - g\\,t_{\\text{max}} \\quad \\Rightarrow \\quad t_{\\text{max}} = \\frac{v_0}{g}$$</p>
<p>Sostituendo in $y(t)$:</p>
<p>$$y_{\\text{max}} = H + v_0 \\cdot \\frac{v_0}{g} - \\frac{1}{2}g\\left(\\frac{v_0}{g}\\right)^2 = H + \\frac{v_0^2}{2g}$$</p>`
          },
          {
            subtitle: "Tempo di caduta (arriva a terra)",
            content: `<p>Ponendo $y = 0$: $\\frac{1}{2}g\\,T_c^2 - v_0\\,T_c - H = 0$, con $a = \\frac{g}{2}$, $b = -v_0$, $c = -H$:</p>
<p>$$T_c = \\frac{v_0 + \\sqrt{v_0^2 + 2gH}}{g}$$</p>
<p>Il $T_c$ del Caso 3 è <strong>maggiore</strong> di quelli dei Casi 1 e 2 (l'oggetto deve prima salire e poi scendere).</p>`
          },
          {
            subtitle: "Velocità d'impatto",
            content: `<p>$$|v_c| = \\sqrt{v_0^2 + 2gH}$$</p>
<p>Risultato sorprendente dai tuoi appunti: Caso 2 e Caso 3 hanno la <strong>stessa velocità d'impatto</strong> ma <strong>tempi diversi</strong>! L'altezza extra del Caso 3 "compensa" la rapidità iniziale del Caso 2. Cambia solo il tempo.</p>`
          }
        ]
      },

      // ──────────────── METHOD BOX: CADUTA LIBERA ────────────────
      {
        id: "s4-metodo-caduta",
        type: "method_box",
        title: "Schema Risolutivo per la Caduta Libera",
        steps: [
          "<strong>Scegli il sistema di riferimento</strong>: $y$ verso l'alto, origine al suolo. L'accelerazione ha componente $a_y = -g$.",
          "<strong>Scrivi le leggi orarie</strong> del MUA per la componente $y$: $y(t) = y_0 + v_{0y}t - \\frac{1}{2}gt^2$ e $v_y(t) = v_{0y} - gt$.",
          "<strong>Sostituisci le condizioni iniziali</strong>: $y_0 = H$, e $v_{0y}$ secondo il caso (0, $-v_0$, o $+v_0$).",
          "<strong>Imponi le condizioni</strong> richieste: $y = 0$ per il tempo di caduta, $v_y = 0$ per la quota massima.",
          "<strong>Risolvi algebricamente</strong> (eq. di 1° o 2° grado) e <strong>ricomponi vettorialmente</strong>."
        ]
      },

      // ──────────────── SEZIONE 8: MOTO DEL PROIETTILE ────────────────
      {
        id: "s4-gittata",
        type: "section",
        title: "Il Moto del Proiettile (Problema della Gittata)",
        icon: "🎯",
        content: `<p>Un proiettile viene lanciato dal suolo con velocità $v_0$ ad un angolo $\\theta$ rispetto all'orizzontale. Il moto avviene in un <strong>piano verticale</strong> e combina:</p>
<p>• <strong>Asse $x$ (orizzontale)</strong>: moto rettilineo uniforme ($a_x = 0$)</p>
<p>• <strong>Asse $y$ (verticale)</strong>: moto uniformemente accelerato ($a_y = -g$)</p>`,

        subsections: [
          {
            subtitle: "Scomposizione della velocità iniziale",
            content: `<p>$$v_{0x} = v_0\\cos\\theta, \\qquad v_{0y} = v_0\\sin\\theta$$</p>`
          },
          {
            subtitle: "Accelerazione",
            content: `<p>$$a_x = 0, \\qquad a_y = -g, \\qquad a_z = 0$$</p>`
          }
        ],

        formulas: [
          { label: "Posizione x (MRU)", latex: "x(t) = (v_0\\cos\\theta)\\,t" },
          { label: "Velocità x", latex: "v_x(t) = v_0\\cos\\theta = \\text{cost}" },
          { label: "Posizione y (MUA)", latex: "y(t) = (v_0\\sin\\theta)\\,t - \\tfrac{1}{2}\\,g\\,t^2" },
          { label: "Velocità y", latex: "v_y(t) = v_0\\sin\\theta - g\\,t" }
        ],

        extra_content: `<p>Le equazioni per $z$ sono banali: $z(t) = 0$, $v_z(t) = 0$.</p>`
      },

      // ──────────────── SEZIONE 9: GITTATA — RISULTATI ────────────────
      {
        id: "s4-gittata-risultati",
        type: "section",
        title: "Risultati del Moto Parabolico",
        icon: "📊",
        content: `<p>Imponendo le condizioni fisiche (tornare al suolo, raggiungere la quota massima) si ottengono i risultati fondamentali.</p>`,

        subsections: [
          {
            subtitle: "Tempo di volo $T$",
            content: `<p>Il proiettile tocca il suolo quando $y = 0$:</p>
<p>$$0 = (v_0\\sin\\theta)\\,t - \\tfrac{1}{2}\\,g\\,t^2 = t\\left[v_0\\sin\\theta - \\tfrac{1}{2}g\\,t\\right]$$</p>
<p>Due soluzioni: $t = 0$ (partenza) e:</p>
<p>$$T = \\frac{2\\,v_0\\sin\\theta}{g}$$</p>`
          },
          {
            subtitle: "Quota massima $y_{\\text{max}}$ (a metà del tempo di volo)",
            content: `<p>Si raggiunge quando $v_y = 0$, cioè a $t_{\\text{max}} = \\frac{v_0\\sin\\theta}{g} = \\frac{T}{2}$:</p>
<p>$$y_{\\text{max}} = \\frac{v_0^2\\sin^2\\theta}{2g}$$</p>`
          },
          {
            subtitle: "Gittata $R$ (distanza orizzontale)",
            content: `<p>Sostituendo $T$ in $x(t)$:</p>
<p>$$R = x(T) = v_0\\cos\\theta \\cdot \\frac{2v_0\\sin\\theta}{g} = \\frac{v_0^2\\sin(2\\theta)}{g}$$</p>
<p>(usando $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$). La gittata è <strong>massima</strong> per $\\theta = 45°$.</p>`
          }
        ]
      },

      // ──────────────── ALERT: TERMINOLOGIA ────────────────
      {
        id: "s4-alert-terminologia",
        type: "alert_box",
        title: "🚨 \"Uniforme\" vs \"Uniformemente Accelerato\" — Non confondere!",
        content: `<p><strong>Moto uniforme</strong> = $|\\vec{v}| = \\text{cost}$ (modulo della velocità costante). Può essere accelerato se cambia la direzione!</p>
<p><strong>Moto uniformemente accelerato</strong> = $\\vec{a} = \\text{cost}$ (vettore accelerazione costante). La velocità cambia in modo lineare.</p>
<p>Un moto circolare uniforme è un moto <strong>accelerato</strong> (cambia direzione). Un MUA non è "uniforme" nel senso precedente (il modulo di $\\vec{v}$ cambia).</p>`
      },

      // ──────────────── NOTE BOX: OSSERVAZIONE v IMPATTO ────────────────
      {
        id: "s4-note-v-impatto",
        type: "note_box",
        title: "📚 Osservazione Notevole: stessa $|v_c|$ per lancio verso l'alto e verso il basso",
        content: `<p>Dai tuoi appunti (pagine 9-10), il Caso 2 (lancio verso il basso con $v_0$) e il Caso 3 (lancio verso l'alto con $v_0$) dalla stessa altezza $H$ danno la <strong>stessa velocità d'impatto</strong>:</p>
<p>$$|v_c| = \\sqrt{v_0^2 + 2gH}$$</p>
<p>Cambia solo il <strong>tempo di caduta</strong> ($T_{c,3} > T_{c,2}$). L'altezza extra raggiunta nel lancio verso l'alto "compensa" esattamente la rapidità iniziale del lancio verso il basso. Questo risultato si spiega con la <strong>conservazione dell'energia</strong> (che vedremo più avanti nel corso).</p>`
      },

      // ──────────────── GRAPH: MRU vs MUA ────────────────
      {
        type: "graph",
        id: "graph-mru-mua",
        title: "Confronto: MRU vs MUA",
        graphType: "mru_mua",
        caption: "Il MUA parte lento ma supera il MRU grazie all'accelerazione costante"
      },

      // ──────────────── GRAPH: FREE FALL ────────────────
      {
        type: "graph",
        id: "graph-free-fall",
        title: "Caduta Libera — I Tre Casi",
        graphType: "free_fall",
        caption: "Confronto tra caduta da fermo, lancio verso il basso e lancio verso l'alto"
      },

      // ──────────────── GRAPH: PARABOLIC MOTION ────────────────
      {
        id: "s4-graph-parabolic",
        type: "graph",
        graphType: "parabolic_motion",
        title: "Moto del Proiettile — Traiettoria Parabolica (slider angolo e v₀)"
      }
    ],

    // ──────────────── FLASHCARD ORALE ────────────────
    oral_cards: [
      {
        type: "definizione",
        front: "Scrivi le <strong>leggi orarie del MRU</strong> e spiega perché si riducono a una sola equazione.",
        back: "$$x(t) = x_0 + v_0\\,t, \\qquad v_x(t) = v_0$$ Si riducono a una equazione perché, scegliendo $x$ lungo la direzione del moto, le componenti $y$ e $z$ sono <strong>identicamente nulle</strong>. L'accelerazione è $\\vec{a} = \\vec{0}$."
      },
      {
        type: "definizione",
        front: "Scrivi le <strong>leggi orarie del MUA</strong> in forma vettoriale e in componenti (asse $x$).",
        back: "Vettoriale: $$\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0\\,t + \\tfrac{1}{2}\\vec{a}\\,t^2$$ $$\\vec{v}(t) = \\vec{v}_0 + \\vec{a}\\,t$$ Componente $x$: $$x(t) = x_0 + v_{0x}t + \\tfrac{1}{2}a_x t^2 \\quad \\text{(parabola)}$$ $$v_x(t) = v_{0x} + a_x t \\quad \\text{(retta)}$$"
      },
      {
        type: "definizione",
        front: "Caduta libera da fermo da altezza $H$: scrivi $T_c$ e $v_c$.",
        back: "Tempo di caduta (da $y = 0$): $$T_c = \\sqrt{\\frac{2H}{g}}$$ Velocità d'impatto: $$v_y(T_c) = -\\sqrt{2gH}$$ Ricomposizione: $\\vec{v}(T_c) = -\\sqrt{2gH}\\;\\hat{j}$ (diretta verso il basso)."
      },
      {
        type: "domanda",
        front: "Nel moto del proiettile, quanti e quali tipi di moto coesistono?",
        back: "<strong>Due</strong> moti indipendenti: <br>• Asse $x$ (orizzontale): <strong>MRU</strong> — $a_x = 0$, velocità costante $v_0\\cos\\theta$.<br>• Asse $y$ (verticale): <strong>MUA</strong> — $a_y = -g$, velocità lineare. <br>I due moti si analizzano separatamente e si ricompongono."
      },
      {
        type: "domanda",
        front: "Per quale angolo la <strong>gittata</strong> è massima? Dimostra.",
        back: "La gittata è $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Il $\\sin(2\\theta)$ è massimo quando $2\\theta = 90°$, cioè: $$\\theta = 45°$$ A quell'angolo, $\\sin 90° = 1$ e $R_{\\text{max}} = \\frac{v_0^2}{g}$."
      },
      {
        type: "domanda",
        front: "Perché la scelta del sistema di coordinate è così importante se la fisica non ne dipende?",
        back: "Le <strong>leggi fisiche</strong> sono invarianti, ma la <strong>complessità dei calcoli</strong> dipende dalla scelta. Un asse allineato con il moto annulla le componenti sugli altri assi, riducendo 6 equazioni a 2. Il professore dice: \"Il fenomeno non dipende da come lo descrivete, ma l'elaborazione sì\"."
      },
      {
        type: "tranello",
        front: "Puoi usare $x = x_0 + v_0 t + \\frac{1}{2}at^2$ se l'accelerazione è $a(t) = 3t$?",
        back: "<strong>No!</strong> Quella formula vale SOLO per $\\vec{a} = \\text{cost}$. Se $a$ dipende dal tempo, devi tornare all'integrale generale: $$v(t) = v_0 + \\int_0^t a(t')\\,dt'$$ In questo caso: $v(t) = v_0 + \\frac{3}{2}t^2$, e poi integri di nuovo per $x(t)$."
      },
      {
        type: "tranello",
        front: "Caso 2 e Caso 3 della caduta: perché la velocità d'impatto è uguale ma il tempo no?",
        back: "Entrambi partono da altezza $H$ con rapidità $v_0$. Il Caso 3 (lancio in alto) sale fino a $H + v_0^2/(2g)$ e poi ridiscende. L'altezza extra <strong>compensa esattamente</strong> la rapidità iniziale del Caso 2. Il modulo della velocità d'impatto è $\\sqrt{v_0^2 + 2gH}$ in entrambi i casi, ma il tempo del Caso 3 è maggiore."
      },
      {
        type: "tranello",
        front: "Nel moto del proiettile, perché il tempo di caduta si trova ponendo $y = 0$ e non $x = 0$?",
        back: "Perché il suolo è a <strong>quota $y = 0$</strong>, non a $x = 0$. La condizione di impatto è sulla componente <strong>verticale</strong>. L'equazione $y(T) = 0$ dà il tempo; sostituendolo in $x(T)$ si trova <em>dove</em> atterra (gittata). L'asse $x$ non ha vincoli."
      },
      {
        type: "dimostrazione",
        front: "Dimostra la formula del MUA partendo dall'integrale di $\\vec{a} = \\text{cost}$.",
        back: "Da $\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}\\,dt' = \\vec{v}_0 + \\vec{a}\\,t$ (l'accelerazione esce dall'integrale perché costante). Integrando ancora: $$\\vec{r}(t) = \\vec{r}_0 + \\int_0^t (\\vec{v}_0 + \\vec{a}\\,t')\\,dt' = \\vec{r}_0 + \\vec{v}_0\\,t + \\tfrac{1}{2}\\vec{a}\\,t^2 \\quad \\blacksquare$$"
      }
    ]
  };
