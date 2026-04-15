const LESSON = {
    id: "L17", date: "Lezione 17 — 15 Apr 2026",
    title: "Momento Angolare e Dinamica delle Rotazioni",
    abstract: "Costruzione del formalismo per la dinamica rotazionale: momento di un vettore, momento angolare, teorema del momento angolare (seconda equazione cardinale), teorema del momento dell'impulso e lavoro nelle rotazioni. Analogie complete tra dinamica traslazionale e rotazionale.",

    sections: [
      {
        id: "s17-intro-rotazioni",
        type: "section",
        title: "Introduzione ai Fenomeni Rotatori",
        icon: "🔄",
        content: `<p>In questa lezione riprendiamo e approfondiamo il concetto di fenomeni rotatori, introdotto nell'ultima parte della lezione precedente. L'obiettivo è costruire un formalismo per descrivere la <strong>dinamica delle rotazioni</strong>, un problema fondamentale che si presenta in innumerevoli contesti fisici, dalla meccanica dei sistemi di punti ai corpi rigidi.</p>
<p>Un esempio emblematico è il funzionamento di un motore a combustione interna, dove il moto lineare alternato dei pistoni viene convertito nel moto rotatorio dell'albero motore, che a sua volta trasmette la rotazione alle ruote attraverso ingranaggi e assi. Quasi ogni componente di un veicolo, dal motore alle ruote, è coinvolto in un moto rotatorio.</p>`,
        subsections: [
          {
            subtitle: "La Percezione della Rotazione e il Ruolo dell'Osservatore",
            content: `<p>Un aspetto cruciale dei fenomeni rotatori è che la loro <em>percezione</em> dipende intrinsecamente dal punto di osservazione. Il punto da cui un osservatore descrive il moto è detto <strong>polo</strong>, indicato con $O$.</p>
<p>Consideriamo un semplice esempio. Un treno si muove a velocità costante su un binario rettilineo:</p>
<ul>
<li><strong>Osservatore sul binario:</strong> vede il treno allontanarsi o avvicinarsi lungo una linea retta. Non percepisce alcuna rotazione: il moto è puramente traslatorio.</li>
<li><strong>Osservatore sulla banchina:</strong> mentre il treno passa, deve ruotare la testa per seguirlo con lo sguardo. Dal suo punto di vista, il treno sembra compiere una rotazione attorno a lui.</li>
</ul>
<p>Questo esempio dimostra che lo <strong>stesso moto fisico</strong> può essere percepito come puramente traslatorio o come una combinazione di traslazione e rotazione, a seconda della posizione dell'osservatore (il polo). La nostra descrizione della dinamica rotazionale dovrà quindi tenere conto esplicitamente del polo scelto.</p>
<p>Il nostro compito sarà definire una grandezza fisica che catturi questa componente rotatoria del moto e trovare l'equivalente della seconda legge di Newton per descriverne le variazioni.</p>`
          }
        ]
      },
      {
        id: "s17-riepilogo-dinamica",
        type: "section",
        title: "Riepilogo delle Grandezze Fondamentali della Dinamica",
        icon: "📋",
        content: `<p>Prima di introdurre nuove grandezze, ripassiamo i due pilastri su cui si fonda la dinamica del punto materiale.</p>`,
        subsections: [
          {
            subtitle: "Quantità di Moto e Seconda Legge di Newton",
            content: `<p>Lo stato di moto generale di un corpo in dinamica è descritto dalla <strong>quantità di moto</strong>:</p>
<p>$$\\vec{p} = m\\vec{v}$$</p>
<p>La sua variazione nel tempo è legata alla causa del moto. La formulazione più generale della seconda legge di Newton è:</p>
<p>$$\\vec{F}_{\\text{ris}} = \\frac{d\\vec{p}}{dt}$$</p>
<p>Questa equazione rappresenta la sintesi della dinamica traslazionale: la <em>causa</em> ($\\vec{F}_{\\text{ris}}$) produce un <em>effetto</em> (la variazione dello stato di moto, $\\frac{d\\vec{p}}{dt}$). La legge è valida in sistemi di riferimento inerziali.</p>`
          },
          {
            subtitle: "Energia e Lavoro",
            content: `<p>Una sottocategoria di problemi della dinamica riguarda la capacità di un sistema di variare la <em>rapidità</em> (il modulo della velocità) del moto. Questa capacità è quantificata dall'<strong>energia</strong>, grandezza scalare.</p>
<p>In meccanica, le forme principali di energia sono:</p>
<ul>
<li><strong>Energia cinetica ($E_k$)</strong>: associata allo stato di moto di un corpo.</li>
<li><strong>Energia potenziale ($U$)</strong>: associata alla configurazione di un sistema in cui agiscono forze conservative.</li>
</ul>
<p>Il trasferimento di energia avviene tramite il <strong>lavoro</strong>, compiuto dalle forze.</p>`
          },
          {
            subtitle: "Teorema dell'Energia Cinetica (Forze Vive)",
            content: `<p>Il lavoro totale $L_{\\text{tot}}$ compiuto dalla risultante delle forze su un punto materiale da A a B è uguale alla variazione della sua energia cinetica:</p>
<p>$$L_{\\text{tot}}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}$$</p>
<p><strong>Dimostrazione.</strong> Partiamo da $\\vec{F} = m\\vec{a}$ e calcoliamo il lavoro infinitesimo:</p>
<p>$$dL = \\vec{F} \\cdot d\\vec{s} = m\\vec{a} \\cdot d\\vec{s}$$</p>
<p>Ricordando che $\\vec{a} = \\frac{d\\vec{v}}{dt}$ e $d\\vec{s} = \\vec{v}\\,dt$:</p>
<p>$$dL = m \\frac{d\\vec{v}}{dt} \\cdot \\vec{v}\\,dt = m\\vec{v} \\cdot d\\vec{v}$$</p>
<p>Utilizzando l'identità $d(\\vec{v} \\cdot \\vec{v}) = d(v^2) = 2\\vec{v} \\cdot d\\vec{v}$, quindi $\\vec{v} \\cdot d\\vec{v} = \\frac{1}{2}d(v^2)$:</p>
<p>$$dL = m \\cdot \\frac{1}{2}d(v^2) = d\\left(\\frac{1}{2}mv^2\\right) = dE_k$$</p>
<p>Integrando da A a B:</p>
<p>$$L_{\\text{tot}}^{A \\to B} = \\int_A^B dL = \\int_{E_{k,A}}^{E_{k,B}} dE_k = E_{k,B} - E_{k,A} = \\Delta E_k$$</p>`
          }
        ],
        formulas: [
          { label: "Quantità di moto", latex: "\\vec{p} = m\\vec{v}" },
          { label: "II legge di Newton", latex: "\\vec{F}_{\\text{ris}} = \\frac{d\\vec{p}}{dt}" },
          { label: "Teorema delle forze vive", latex: "L_{\\text{tot}}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}" }
        ]
      },
      {
        id: "s17-momento-vettore",
        type: "section",
        title: "Il Momento di un Vettore Rispetto a un Polo",
        icon: "🔧",
        content: `<p>Per costruire il formalismo della dinamica rotazionale, abbiamo bisogno di uno strumento matematico che catturi l'idea di <strong>effetto rotatorio</strong>. Questo strumento è il <strong>momento di un vettore</strong>.</p>`,
        subsections: [
          {
            subtitle: "Definizione e Significato Geometrico",
            content: `<p><strong>Attenzione:</strong> il momento di un vettore non è una proprietà intrinseca del vettore stesso, ma è sempre definito <strong>rispetto a un polo</strong>. Omettere il riferimento al polo è un errore concettuale grave.</p>
<p>Dato un vettore $\\vec{A}$ applicato in un punto $P$ e un punto di osservazione (polo) $O$, si definisce <strong>momento del vettore $\\vec{A}$ rispetto al polo $O$</strong>:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}$$</p>
<p>dove $\\vec{r} = \\vec{OP}$ è il vettore posizione che congiunge il polo $O$ con il punto di applicazione $P$ del vettore $\\vec{A}$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Momento di un vettore rispetto a un polo</strong></p>
  <p><em>Polo $O$ a sinistra, punto di applicazione $P$ in alto a destra. Vettore $\\vec{r} = \\vec{OP}$ (blu) dal polo al punto. Vettore $\\vec{A}$ (rosso) applicato in $P$. Retta d'azione di $\\vec{A}$ tratteggiata. Segmento perpendicolare $h$ (braccio) da $O$ alla retta d'azione, con simbolo di angolo retto. Angolo $\\theta$ tra $\\vec{r}$ e $\\vec{A}$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
          },
          {
            subtitle: "Modulo del Momento e Braccio",
            content: `<p>Il modulo del momento è dato da:</p>
<p>$$|\\vec{M}_O| = |\\vec{r}| \\, |\\vec{A}| \\sin\\theta$$</p>
<p>dove $\\theta$ è l'angolo tra $\\vec{r}$ e $\\vec{A}$. Definiamo il <strong>braccio</strong> $h$ come la distanza perpendicolare tra il polo $O$ e la retta d'azione del vettore $\\vec{A}$. Dalla geometria:</p>
<p>$$h = |\\vec{r}| \\sin\\theta$$</p>
<p>Quindi il modulo del momento si riscrive come:</p>
<p>$$|\\vec{M}_O| = |\\vec{A}| \\cdot h$$</p>
<p>Il momento quantifica l'<strong>effetto di "leva"</strong> del vettore $\\vec{A}$ rispetto al polo $O$. A parità di intensità di $\\vec{A}$, l'effetto rotatorio è maggiore quanto più grande è il braccio.</p>`
          },
          {
            subtitle: "Teorema del Trasporto dei Momenti",
            content: `<p>Come cambia il momento di un vettore se cambiamo il polo di osservazione? Il <strong>Teorema del Trasporto</strong> ci dà la risposta.</p>
<p>Dati un vettore $\\vec{A}$ e due poli $O$ e $O'$, i momenti sono legati dalla relazione:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}$$</p>
<p><strong>Dimostrazione.</strong> Sia $P$ il punto di applicazione di $\\vec{A}$. Definiamo i vettori posizione $\\vec{r} = \\vec{OP}$ e $\\vec{r}' = \\vec{O'P}$. Dalla relazione di Chasles:</p>
<p>$$\\vec{r} = \\vec{OP} = \\vec{OO'} + \\vec{O'P} = \\vec{OO'} + \\vec{r}'$$</p>
<p>Calcoliamo il momento rispetto a $O$:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A} = (\\vec{OO'} + \\vec{r}') \\times \\vec{A} = (\\vec{OO'} \\times \\vec{A}) + (\\vec{r}' \\times \\vec{A})$$</p>
<p>Riconoscendo che $\\vec{r}' \\times \\vec{A} = \\vec{M}_{O'}(\\vec{A})$, otteniamo la tesi:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}$$</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Teorema del Trasporto dei Momenti</strong></p>
  <p><em>Due poli $O$ e $O'$, punto $P$ di applicazione di $\\vec{A}$. Vettore $\\vec{r} = \\vec{OP}$ (blu), vettore $\\vec{r}' = \\vec{O'P}$ (verde), vettore $\\vec{OO'}$ (arancione) da $O$ a $O'$. Vettore $\\vec{A}$ (rosso) applicato in $P$. La relazione di Chasles $\\vec{r} = \\vec{OO'} + \\vec{r}'$ è visibile nel triangolo vettoriale.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
          }
        ],
        formulas: [
          { label: "Momento di un vettore", latex: "\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}" },
          { label: "Modulo (con braccio)", latex: "|\\vec{M}_O| = |\\vec{A}| \\cdot h" },
          { label: "Teorema del Trasporto", latex: "\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}" }
        ]
      },
      {
        id: "s17-momento-angolare",
        type: "section",
        title: "Momento Angolare",
        icon: "🌀",
        content: `<p>Ora applichiamo lo strumento matematico del momento di un vettore al nostro problema fisico. Vogliamo una grandezza che descriva lo <strong>stato di moto rotatorio</strong>. Il moto è descritto dalla quantità di moto $\\vec{p}$: è naturale definire la grandezza rotazionale come il momento della quantità di moto.</p>`,
        subsections: [
          {
            subtitle: "Definizione",
            content: `<p>Si definisce <strong>momento angolare</strong> $\\vec{L}_O$ di un punto materiale rispetto a un polo $O$ il momento della sua quantità di moto $\\vec{p}$ rispetto allo stesso polo:</p>
<p>$$\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$$</p>
<p>dove $\\vec{r}$ è il vettore posizione del punto materiale rispetto al polo $O$.</p>`
          },
          {
            subtitle: "Proprietà Fondamentali",
            content: `<p>Il momento angolare cattura tutte le proprietà che intuitivamente associamo alla percezione della rotazione:</p>
<p><strong>1. Dipendenza dal polo:</strong> come tutti i momenti, $\\vec{L}_O$ dipende dalla scelta del polo $O$.</p>
<p><strong>2. Dipendenza dal braccio:</strong> il suo modulo è $|\\vec{L}_O| = |\\vec{r}||\\vec{p}|\\sin\\theta = p \\cdot h$, dove $h$ è la distanza del polo dalla retta su cui giace $\\vec{p}$. A parità di quantità di moto, un braccio maggiore implica un momento angolare maggiore.</p>
<p><strong>3. Dipendenza dalla componente trasversale della velocità:</strong> la velocità $\\vec{v}$ può essere scomposta in una componente radiale $\\vec{v}_r$ (parallela a $\\vec{r}$) e una trasversale $\\vec{v}_t$ (perpendicolare a $\\vec{r}$):</p>
<p>$$\\vec{v} = \\vec{v}_r + \\vec{v}_t$$</p>
<p>Calcolando il momento angolare:</p>
<p>$$\\vec{L}_O = m(\\vec{r} \\times (\\vec{v}_r + \\vec{v}_t)) = m(\\vec{r} \\times \\vec{v}_r) + m(\\vec{r} \\times \\vec{v}_t)$$</p>
<p>Poiché $\\vec{r}$ e $\\vec{v}_r$ sono paralleli, il loro prodotto vettoriale è nullo: $\\vec{r} \\times \\vec{v}_r = \\vec{0}$. Quindi:</p>
<p>$$\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$$</p>
<p>Il momento angolare dipende <strong>esclusivamente</strong> dalla componente della velocità trasversale alla congiungente polo-punto. Questo formalizza l'idea che la percezione della rotazione è legata al moto "di traverso" rispetto all'osservatore.</p>`
          }
        ],
        formulas: [
          { label: "Momento angolare", latex: "\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})" },
          { label: "Solo componente trasversale", latex: "\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)" }
        ]
      },
      {
        id: "s17-teorema-momento-angolare",
        type: "section",
        title: "Teorema del Momento Angolare",
        icon: "⚖️",
        content: `<p>Deriviamo ora l'equazione che governa la dinamica del momento angolare: la <strong>seconda legge di Newton per le rotazioni</strong>.</p>`,
        subsections: [
          {
            subtitle: "Derivazione",
            content: `<p>Calcoliamo la derivata del momento angolare rispetto al tempo:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p})$$</p>
<p>Usando la regola di derivazione del prodotto vettoriale:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$</p>
<p><strong>Primo termine:</strong> $\\frac{d\\vec{r}}{dt} = \\vec{v}$ e $\\vec{p} = m\\vec{v}$, quindi:</p>
<p>$$\\frac{d\\vec{r}}{dt} \\times \\vec{p} = \\vec{v} \\times (m\\vec{v}) = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$$</p>
<p>Il prodotto vettoriale di un vettore con se stesso è sempre nullo.</p>
<p><strong>Secondo termine:</strong> per la seconda legge di Newton, $\\frac{d\\vec{p}}{dt} = \\vec{F}$, quindi:</p>
<p>$$\\vec{r} \\times \\frac{d\\vec{p}}{dt} = \\vec{r} \\times \\vec{F} = \\vec{M}_O$$</p>
<p>che è esattamente il momento della forza rispetto al polo $O$.</p>`
          },
          {
            subtitle: "Enunciato del Teorema",
            content: `<p>Mettendo insieme i risultati, otteniamo il teorema fondamentale:</p>
<p>$$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$$</p>
<p>Per un punto materiale, la derivata temporale del momento angolare $\\vec{L}_O$ (calcolato rispetto a un polo fisso $O$) è uguale al momento totale $\\vec{M}_O$ delle forze applicate, calcolato rispetto allo stesso polo.</p>`
          }
        ],
        formulas: [
          { label: "Seconda equazione cardinale", latex: "\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}" }
        ],
        extra_content: `<p><strong>Nota importante:</strong> la derivazione è valida per un polo $O$ fisso. Se il polo fosse in moto con velocità $\\vec{v}_O$, la derivata di $\\vec{r}$ sarebbe $\\vec{v} - \\vec{v}_O$ e il primo termine non si annullerebbe in generale. Il teorema resta valido anche per il centro di massa come polo, come vedremo in seguito.</p>`
      },
      {
        id: "s17-analogia-traslazione-rotazione",
        type: "note_box",
        title: "Analogia tra Dinamica Traslazionale e Rotazionale",
        icon: "🔀",
        content: `<p>Esiste una profonda analogia tra le equazioni della dinamica traslazionale e quelle della dinamica rotazionale:</p>`,
        table_compare: {
          headers: ["Moto Traslazionale", "Moto Rotazionale"],
          rows: [
            ["Quantità di moto: $\\vec{p}$", "Momento angolare: $\\vec{L}_O$"],
            ["Causa della variazione: Forza $\\vec{F}$", "Causa della variazione: Momento della forza $\\vec{M}_O$"],
            ["$\\vec{F} = \\frac{d\\vec{p}}{dt}$", "$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$"]
          ]
        },
        extra_content: `<p><strong>Il momento della forza sta al momento angolare come la forza sta alla quantità di moto.</strong> Tutto ciò che in generale producono le forze nelle traslazioni, nelle rotazioni lo producono i momenti delle forze.</p>`
      },
      {
        id: "s17-conservazione-L",
        type: "section",
        title: "Conservazione del Momento Angolare",
        icon: "🔒",
        content: `<p>Se il momento totale delle forze esterne rispetto a un polo $O$ è nullo ($\\vec{M}_O = \\vec{0}$), allora il momento angolare $\\vec{L}_O$ si conserva:</p>
<p>$$\\text{Se } \\vec{M}_O = \\vec{0} \\Rightarrow \\frac{d\\vec{L}_O}{dt} = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{costante}$$</p>
<p>La condizione $\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\vec{0}$ si verifica in due casi importanti:</p>
<ol>
<li><strong>La forza risultante è nulla</strong> ($\\vec{F} = \\vec{0}$). In questo caso si conserva anche la quantità di moto.</li>
<li><strong>La forza risultante è parallela al vettore posizione $\\vec{r}$.</strong> Questo tipo di forza, sempre diretta verso (o da) un punto fisso (il polo), è detta <strong>forza centrale</strong>. In questo caso $\\vec{p}$ non si conserva, ma $\\vec{L}_O$ sì.</li>
</ol>`,
        formulas: [
          { label: "Conservazione di L", latex: "\\vec{M}_O = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{costante}" }
        ]
      },
      {
        id: "s17-alert-forze-centrali",
        type: "alert_box",
        title: "Forze Centrali e Conservazione di L",
        icon: "⚠️",
        content: `<p><strong>Trappola d'esame:</strong> una forza centrale ($\\vec{F} \\parallel \\vec{r}$) <em>non</em> conserva la quantità di moto (il corpo accelera o decelera), ma conserva il momento angolare. Non confondere le due conservazioni!</p>
<p>Esempio classico: la forza gravitazionale è una forza centrale. Un pianeta in orbita ellittica cambia continuamente velocità (non si conserva $\\vec{p}$), ma il suo momento angolare rispetto al Sole resta costante.</p>`
      },
      {
        id: "s17-teorema-impulso",
        type: "section",
        title: "Riepilogo: Il Teorema dell'Impulso",
        icon: "💥",
        content: `<p>Prima di passare all'analogo rotazionale, richiamiamo il teorema dell'impulso nella dinamica traslazionale.</p>
<p>Se conosciamo come varia la forza agente su un punto nel tempo, possiamo calcolare l'effetto prodotto dalla forza che agisce per un intervallo da $t_A$ a $t_B$. L'<strong>impulso</strong> della forza è definito come:</p>
<p>$$\\vec{J} = \\int_{t_A}^{t_B} \\vec{F}(t) \\, dt$$</p>
<p>Il teorema dell'impulso afferma che:</p>
<p>$$\\vec{J} = \\vec{p}(t_B) - \\vec{p}(t_A) = \\Delta\\vec{p}$$</p>
<p>L'impulso di una forza è uguale alla variazione di quantità di moto che produce.</p>`,
        formulas: [
          { label: "Impulso", latex: "\\vec{J} = \\int_{t_A}^{t_B} \\vec{F}(t) \\, dt" },
          { label: "Teorema dell'impulso", latex: "\\vec{J} = \\Delta\\vec{p}" }
        ]
      },
      {
        id: "s17-momento-impulso",
        type: "section",
        title: "Il Teorema del Momento dell'Impulso",
        icon: "🔨",
        content: `<p>Adesso estendiamo il ragionamento dell'impulso alle rotazioni. La seconda equazione cardinale ci dice che:</p>
<p>$$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$$</p>
<p>Se conosciamo istante per istante il momento delle forze $\\vec{M}_O(t)$, possiamo integrare nel tempo:</p>
<p>$$\\int_0^t \\vec{M}_O(t') \\, dt' = \\int_0^t \\left( \\vec{r}(t') \\times \\vec{F}(t') \\right) dt'$$</p>`,
        subsections: [
          {
            subtitle: "Approssimazione per Fenomeni Impulsivi",
            content: `<p>Per fenomeni molto brevi (urti, impulsi), il vettore posizione $\\vec{r}$ non cambia significativamente durante l'intervallo di tempo considerato. Il professore ha fatto un esempio efficace: se osservate una mosca a 25 metri di distanza per 3 millisecondi, la sua posizione relativa a voi non cambia percettibilmente.</p>
<p>Sotto l'ipotesi $\\vec{r}(t) \\approx \\text{costante}$, possiamo portare $\\vec{r}$ fuori dall'integrale:</p>
<p>$$\\int_0^t \\vec{M}_O(t') \\, dt' \\approx \\vec{r} \\times \\left( \\int_0^t \\vec{F}(t') \\, dt' \\right) = \\vec{r} \\times \\vec{J}$$</p>
<p>Integrando anche il secondo membro:</p>
<p>$$\\int_0^t \\frac{d\\vec{L}_O}{dt'} \\, dt' = \\vec{L}_O(t) - \\vec{L}_O(0) = \\Delta\\vec{L}_O$$</p>`
          },
          {
            subtitle: "Enunciato del Teorema",
            content: `<p>In un fenomeno impulsivo (braccio $\\vec{r}$ approssimativamente costante), la variazione del momento angolare è uguale al <strong>momento dell'impulso</strong>:</p>
<p>$$\\int_0^t \\vec{M}_O(t') \\, dt' = \\Delta\\vec{L}_O$$</p>
<p>Poiché $\\vec{J} = \\Delta\\vec{p}$, possiamo anche scrivere:</p>
<p>$$\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J} = \\vec{r} \\times \\Delta\\vec{p}$$</p>`
          },
          {
            subtitle: "Esempio: Sbloccare un Bullone",
            content: `<p>Immaginate un bullone ingrippato. Prendete una chiave inglese (braccio $\\vec{r}$ grande) e un martello. Date una botta secca con il martello all'estremità della chiave.</p>
<p>L'interazione martello-chiave è un impulso $\\vec{J}$. Applicato a un grande braccio $\\vec{r}$, produce un grande momento dell'impulso $\\vec{r} \\times \\vec{J}$, che causa una variazione di momento angolare $\\Delta\\vec{L}_O$ sufficiente a sbloccare il bullone.</p>
<p><strong>Regola pratica:</strong> per massimizzare l'effetto rotatorio, applicate l'impulso il più lontano possibile dall'asse di rotazione, per massimizzare il braccio.</p>`
          }
        ],
        formulas: [
          { label: "Momento dell'impulso", latex: "\\Delta\\vec{L}_O = \\vec{r} \\times \\vec{J}" },
          { label: "Integrale del momento", latex: "\\int_0^t \\vec{M}_O(t') \\, dt' = \\Delta\\vec{L}_O" }
        ]
      },
      {
        id: "s17-lavoro-rotazioni",
        type: "section",
        title: "Lavoro ed Energia nelle Rotazioni",
        icon: "⚡",
        content: `<p>Se voglio far girare un sistema più rapidamente, devo aumentare la sua energia cinetica. Per farlo, una forza deve compiere lavoro. Vediamo come si esprime il lavoro nel contesto rotazionale.</p>`,
        subsections: [
          {
            subtitle: "Derivazione per Moto Circolare",
            content: `<p>Il lavoro elementare è $dL = \\vec{F} \\cdot d\\vec{s}$. Consideriamo un <strong>moto circolare di raggio $R$ costante</strong>. Lo spostamento infinitesimo $d\\vec{s}$ è sempre tangente alla traiettoria, quindi solo la componente tangenziale della forza, $F_t$, compie lavoro:</p>
<p>$$dL = F_t \\, ds$$</p>
<p>In un moto circolare, l'arco infinitesimo è legato all'angolo da $ds = R \\, d\\theta$. Sostituendo:</p>
<p>$$dL = F_t (R \\, d\\theta)$$</p>
<p>Riconosciamo che il prodotto $R \\cdot F_t$ è il modulo del momento della forza rispetto al centro di rotazione $O$:</p>
<p>$$M_O = |\\vec{r} \\times \\vec{F}| = R F_t$$</p>
<p>Quindi il lavoro per una rotazione da $\\theta_A$ a $\\theta_B$ è:</p>
<p>$$L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O \\, d\\theta$$</p>
<p><strong>Nota:</strong> questa derivazione assume raggio $R$ costante (moto circolare). La formula $L = \\int M_O \\, d\\theta$ rimane valida in generale se $M_O$ è il momento rispetto all'asse di rotazione.</p>`
          }
        ],
        formulas: [
          { label: "Lavoro nelle rotazioni", latex: "L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O \\, d\\theta" },
          { label: "Momento come R·Ft", latex: "M_O = R \\, F_t" }
        ]
      },
      {
        id: "s17-analogia-completa",
        type: "note_box",
        title: "Tavola Completa delle Analogie Traslazione ↔ Rotazione",
        icon: "📊",
        content: `<p>Riassumiamo tutte le corrispondenze emerse in questa lezione:</p>`,
        table_compare: {
          headers: ["Traslazione", "Rotazione"],
          rows: [
            ["Quantità di moto $\\vec{p} = m\\vec{v}$", "Momento angolare $\\vec{L}_O = \\vec{r} \\times \\vec{p}$"],
            ["Forza $\\vec{F}$", "Momento della forza $\\vec{M}_O = \\vec{r} \\times \\vec{F}$"],
            ["$\\vec{F} = \\frac{d\\vec{p}}{dt}$", "$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$"],
            ["Impulso: $\\vec{J} = \\int \\vec{F} \\, dt = \\Delta\\vec{p}$", "Momento dell'impulso: $\\int \\vec{M}_O \\, dt = \\Delta\\vec{L}_O$"],
            ["Lavoro: $L = \\int \\vec{F} \\cdot d\\vec{s}$", "Lavoro: $L = \\int M_O \\, d\\theta$"],
            ["Se $\\vec{F} = 0$: $\\vec{p}$ costante", "Se $\\vec{M}_O = 0$: $\\vec{L}_O$ costante"]
          ]
        }
      },
      {
        id: "s17-anticipazioni",
        type: "note_box",
        title: "Anticipazioni: Il Pendolo Semplice in Tre Modi",
        icon: "🔮",
        content: `<p>Nella prossima lezione affronteremo il <strong>pendolo semplice</strong> con tre approcci diversi, per consolidare i concetti e vedere come siano equivalenti:</p>
<ol>
<li><strong>Dinamica generale:</strong> applicazione diretta della seconda legge di Newton ($\\vec{F} = m\\vec{a}$) per trovare l'equazione del moto.</li>
<li><strong>Approccio energetico:</strong> uso del teorema dell'energia cinetica e della conservazione dell'energia meccanica (la forza peso è conservativa).</li>
<li><strong>Dinamica rotazionale:</strong> ci posizioniamo nel punto di ancoraggio del pendolo e lo studiamo come moto rotatorio, analizzando come il momento della forza peso causa una variazione del momento angolare.</li>
</ol>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Il pendolo semplice</strong></p>
  <p><em>Punto di sospensione $O$ in alto, filo di lunghezza $l$, massa $m$ all'estremità. Angolo $\\theta$ rispetto alla verticale. Forza peso $m\\vec{g}$ verso il basso, tensione $\\vec{T}$ lungo il filo verso $O$. Componente tangenziale $-mg\\sin\\theta$ e componente radiale della forza peso indicate.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Definisci il momento di un vettore rispetto a un polo e spiega il significato del braccio.",
        back: "Il momento del vettore $\\vec{A}$ applicato in $P$ rispetto al polo $O$ è $\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}$, dove $\\vec{r} = \\vec{OP}$. Il suo modulo è $|\\vec{M}_O| = |\\vec{A}| \\cdot h$, dove $h = |\\vec{r}|\\sin\\theta$ è il **braccio**, cioè la distanza perpendicolare dal polo alla retta d'azione di $\\vec{A}$. Il momento quantifica l'effetto di \"leva\" del vettore rispetto al polo."
      },
      {
        type: "definizione",
        front: "Definisci il momento angolare di un punto materiale e spiega da quale componente della velocità dipende.",
        back: "Il momento angolare è $\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$. Scomponendo $\\vec{v} = \\vec{v}_r + \\vec{v}_t$, si ha $\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$ perché $\\vec{r} \\times \\vec{v}_r = \\vec{0}$ (vettori paralleli). Il momento angolare dipende **solo dalla componente trasversale** della velocità."
      },
      {
        type: "dimostrazione",
        front: "Dimostra il Teorema del Momento Angolare (seconda equazione cardinale della dinamica).",
        back: "Si calcola $\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = (\\dot{\\vec{r}} \\times \\vec{p}) + (\\vec{r} \\times \\dot{\\vec{p}})$. Il primo termine: $\\dot{\\vec{r}} \\times \\vec{p} = \\vec{v} \\times m\\vec{v} = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$. Il secondo termine: $\\vec{r} \\times \\dot{\\vec{p}} = \\vec{r} \\times \\vec{F} = \\vec{M}_O$. Risultato: $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$. Vale per polo fisso $O$."
      },
      {
        type: "dimostrazione",
        front: "Enuncia e dimostra il Teorema del Trasporto dei momenti.",
        back: "Dati due poli $O$ e $O'$: $\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}$. Dim: dalla relazione di Chasles $\\vec{r} = \\vec{OO'} + \\vec{r}'$, si ha $\\vec{M}_O = \\vec{r} \\times \\vec{A} = (\\vec{OO'} + \\vec{r}') \\times \\vec{A} = \\vec{OO'} \\times \\vec{A} + \\vec{r}' \\times \\vec{A} = \\vec{OO'} \\times \\vec{A} + \\vec{M}_{O'}$."
      },
      {
        type: "domanda",
        front: "Quando si conserva il momento angolare di un punto materiale? In quali casi specifici il momento delle forze è nullo?",
        back: "Il momento angolare si conserva quando $\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\vec{0}$. Questo accade in due casi: (1) la forza risultante è nulla ($\\vec{F} = \\vec{0}$), caso in cui si conserva anche $\\vec{p}$; (2) la forza è **centrale**, cioè parallela a $\\vec{r}$ (diretta verso o da un punto fisso). Nel secondo caso $\\vec{p}$ non si conserva."
      },
      {
        type: "tranello",
        front: "Un corpo si muove sotto l'azione di una forza centrale. Si conserva la quantità di moto?",
        back: "**NO!** Una forza centrale ($\\vec{F} \\parallel \\vec{r}$) ha momento nullo rispetto al centro di forza, quindi conserva il **momento angolare** $\\vec{L}_O$, ma la forza stessa non è nulla, quindi $\\vec{p}$ **non** si conserva. Il corpo accelera e decelera. Errore frequente: confondere conservazione di $\\vec{L}$ con conservazione di $\\vec{p}$."
      },
      {
        type: "domanda",
        front: "Enuncia il Teorema del Momento dell'Impulso e spiega sotto quale ipotesi vale.",
        back: "In un fenomeno impulsivo (durata $\\Delta t$ molto breve), la variazione del momento angolare è $\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J}$, dove $\\vec{J} = \\int \\vec{F} \\, dt$ è l'impulso. L'ipotesi fondamentale è che $\\vec{r}$ sia approssimativamente costante durante l'intervallo $\\Delta t$, il che permette di portarlo fuori dall'integrale."
      },
      {
        type: "formula",
        front: "Come si esprime il lavoro nel contesto di un moto rotatorio di raggio R costante?",
        back: "Il lavoro è $L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O \\, d\\theta$, dove $M_O = R \\cdot F_t$ è il momento della forza rispetto al centro di rotazione. Si ottiene notando che $dL = F_t \\, ds = F_t \\, R \\, d\\theta = M_O \\, d\\theta$. Questa è l'analogia rotazionale di $L = \\int \\vec{F} \\cdot d\\vec{s}$."
      },
      {
        type: "tranello",
        front: "Il momento angolare dipende dal polo scelto? E il Teorema del Momento Angolare vale per qualsiasi polo?",
        back: "**Sì**, il momento angolare dipende dal polo: $\\vec{L}_O = \\vec{r} \\times \\vec{p}$ e $\\vec{r}$ cambia con il polo. Il Teorema $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$ vale solo per **polo fisso** (o per il centro di massa come polo speciale). Per un polo in moto generico il primo termine della derivazione ($\\dot{\\vec{r}} \\times \\vec{p}$) non si annulla."
      },
      {
        type: "dimostrazione",
        front: "Dimostra il Teorema dell'Energia Cinetica (Forze Vive).",
        back: "Da $\\vec{F} = m\\vec{a}$, il lavoro elementare è $dL = \\vec{F} \\cdot d\\vec{s} = m\\vec{a} \\cdot d\\vec{s}$. Con $\\vec{a} = \\frac{d\\vec{v}}{dt}$ e $d\\vec{s} = \\vec{v} \\, dt$: $dL = m\\vec{v} \\cdot d\\vec{v} = \\frac{m}{2}d(v^2) = d(\\frac{1}{2}mv^2) = dE_k$. Integrando: $L_{tot}^{A \\to B} = E_{k,B} - E_{k,A} = \\Delta E_k$."
      }
    ]
};

