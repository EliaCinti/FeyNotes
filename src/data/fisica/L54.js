const LESSON = {
    id: "L54", date: "Lezione 39 — 08 Giu 2026",
    title: "Teorema di Clausius ed Entropia",
    abstract: "Dal teorema di Carnot alla disuguaglianza di Clausius, nascita dell'entropia come funzione di stato e formulazione analitica del Secondo Principio della Termodinamica.",

    sections: [
        {
            id: "s54-richiamo-carnot",
            type: "section",
            title: "Dal Teorema di Carnot alla relazione fondamentale",
            icon: "🔄",
            content: `<p>Nella lezione precedente abbiamo introdotto il <strong>teorema di Carnot</strong>, un risultato fondamentale per le macchine termiche che operano tra due sole sorgenti.</p>
<p><strong>Teorema di Carnot:</strong> Il rendimento di una macchina termica che opera tra due sorgenti a temperature $T_1$ e $T_2$ (con $T_2 \\gt T_1$) è massimo se la macchina opera reversibilmente. Tutte le macchine reversibili che operano tra le stesse due sorgenti hanno lo stesso rendimento:</p>
<p>$$\\eta_{rev} = 1 - \\frac{T_1}{T_2}$$</p>
<p>Qualsiasi macchina irreversibile che opera tra le stesse due sorgenti ha un rendimento inferiore: $\\eta_{irr} \\lt \\eta_{rev}$.</p>`,
            subsections: [
                {
                    subtitle: "Conseguenza: la relazione tra calori e temperature",
                    content: `<p>Ricordiamo che il rendimento è definito come $\\eta = \\frac{L}{Q_a} = \\frac{Q_a + Q_c}{Q_a} = 1 + \\frac{Q_c}{Q_a}$, dove $Q_c \\lt 0$ per convenzione di segno (il calore ceduto alla sorgente fredda è negativo).</p>
<p>Eguagliando questa definizione generale con quella del ciclo di Carnot, si ottiene una relazione notevole per le trasformazioni reversibili. Indicando con $Q_2$ il calore assorbito dalla sorgente calda a temperatura $T_2$ (quindi $Q_a = Q_2 \\gt 0$) e con $Q_1$ il calore ceduto alla sorgente fredda a temperatura $T_1$ (quindi $Q_c = Q_1 \\lt 0$):</p>
<p>$$1 + \\frac{Q_1}{Q_2} = 1 - \\frac{T_1}{T_2} \\quad \\Rightarrow \\quad \\frac{Q_1}{Q_2} = -\\frac{T_1}{T_2} \\quad \\Rightarrow \\quad \\frac{Q_1}{T_1} = -\\frac{Q_2}{T_2}$$</p>
<p>Da cui si ottiene la relazione fondamentale:</p>
<p>$$\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0$$</p>
<p>Questa relazione vale per qualsiasi ciclo reversibile che opera tra due sorgenti.</p>`
                },
                {
                    subtitle: "Limiti del teorema di Carnot",
                    content: `<p>Il teorema di Carnot, per quanto potente, ha due limitazioni principali:</p>
<ol>
<li>Si applica solo a macchine che operano tra <strong>due sole</strong> sorgenti.</li>
<li>Fornisce una disuguaglianza per le macchine irreversibili ($\\eta_{irr} \\lt \\eta_{max}$), ma non dà uno strumento quantitativo per misurare il grado di irreversibilità.</li>
</ol>
<p>Per superare questi limiti, il fisico tedesco Rudolf Clausius generalizzò il risultato di Carnot.</p>`
                }
            ],
            formulas: [
                { label: "Rendimento di Carnot", latex: "\\eta_{rev} = 1 - \\frac{T_1}{T_2}" },
                { label: "Relazione calori-temperature (2 sorgenti)", latex: "\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0" }
            ]
        },
        {
            id: "s54-teorema-clausius",
            type: "section",
            title: "Il Teorema di Clausius",
            icon: "📐",
            content: `<p>Clausius si chiese se fosse possibile estendere la relazione trovata per il ciclo di Carnot a macchine termiche che operano tra un <strong>numero arbitrario di sorgenti</strong>, $N \\ge 2$, e anche per cicli irreversibili. La risposta è affermativa.</p>
<p>Notiamo che la relazione di Carnot può essere scritta in forma di sommatoria:</p>
<p>$$\\sum_{i=1}^{2} \\frac{Q_i}{T_i} = 0 \\quad \\text{(per trasformazioni reversibili)}$$</p>`,
            subsections: [
                {
                    subtitle: "Enunciato del teorema",
                    content: `<p><strong>Teorema di Clausius:</strong> Per una qualsiasi macchina termica che compie un ciclo scambiando calore con $N$ sorgenti a temperature $T_i$:</p>
<ul>
<li>Se il ciclo è <strong>reversibile</strong>: $$\\sum_{i=1}^{N} \\frac{Q_i}{T_i} = 0$$</li>
<li>Se il ciclo è <strong>irreversibile</strong>: $$\\sum_{i=1}^{N} \\frac{Q_i}{T_i} \\lt 0$$</li>
</ul>`
                },
                {
                    subtitle: "Forma integrale: il caso continuo",
                    content: `<p>Possiamo estendere il risultato al caso di un numero infinito di sorgenti, cioè a una trasformazione continua. La sommatoria diventa un integrale esteso a tutto il ciclo. L'integrale ciclico (cioè su un percorso chiuso) si indica con il simbolo $\\oint$.</p>
<p>La <strong>disuguaglianza di Clausius</strong> in forma integrale diventa:</p>
<p>$$\\oint \\frac{\\delta Q}{T} \\le 0$$</p>
<p>dove:</p>
<ul>
<li>l'<strong>uguaglianza</strong> vale per un ciclo reversibile: $\\oint \\frac{\\delta Q_{rev}}{T} = 0$</li>
<li>la <strong>disuguaglianza stretta</strong> vale per un ciclo irreversibile: $\\oint \\frac{\\delta Q_{irr}}{T} \\lt 0$</li>
</ul>`
                },
                {
                    subtitle: "Idea intuitiva della generalizzazione",
                    content: `<p>Da notare: il passaggio da 2 sorgenti a $N$ (e poi a infinite) sorgenti si basa sull'idea che qualsiasi ciclo può essere approssimato da una serie di cicli di Carnot infinitesimi, ciascuno operante tra due sorgenti a temperature infinitamente vicine. Applicando la relazione $\\sum Q_i/T_i = 0$ (o $\\lt 0$) a ciascun ciclo elementare e sommando, si ottiene il risultato integrale per il ciclo complessivo.</p>`
                }
            ],
            formulas: [
                { label: "Clausius (N sorgenti, reversibile)", latex: "\\sum_{i=1}^{N} \\frac{Q_i}{T_i} = 0" },
                { label: "Clausius (N sorgenti, irreversibile)", latex: "\\sum_{i=1}^{N} \\frac{Q_i}{T_i} < 0" },
                { label: "Disuguaglianza di Clausius (integrale)", latex: "\\oint \\frac{\\delta Q}{T} \\le 0" }
            ],
            extra_content: `<blockquote>"Questo rapporto $\\delta Q/T$ sembra essere una grandezza importante. Quantifica in qualche modo il grado di irreversibilità di un processo. Per un ciclo ideale, reversibile, la sua somma (o integrale) su un percorso chiuso è zero. Se c'è irreversibilità, il risultato è negativo, e tanto più negativo quanto più il processo è irreversibile, cioè quanto più calore viene «sprecato»."</blockquote>`
        },
        {
            id: "s54-entropia-funzione-stato",
            type: "section",
            title: "L'Entropia come Funzione di Stato",
            icon: "🎯",
            content: `<p>Analizziamo la conseguenza più importante del teorema di Clausius, che riguarda i <strong>cicli reversibili</strong>. Consideriamo un ciclo reversibile che porta un sistema da uno stato A a uno stato B attraverso un percorso (I) e lo riporta da B ad A attraverso un percorso (II).</p>`,
            subsections: [
                {
                    subtitle: "Il diagramma del ciclo reversibile",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Ciclo reversibile nel piano PV</strong></p>
  <p><em>Due stati A (in basso a sinistra) e B (in alto a destra) collegati da due percorsi: il percorso (I) in blu, curva superiore da A a B; il percorso (II) in rosso, curva inferiore da B ad A. Entrambi i percorsi sono reversibili.</em></p>
  <p style="margin-top: 4px;"><em>Ciclo reversibile: A $\\to$ B (percorso I) e B $\\to$ A (percorso II).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
                },
                {
                    subtitle: "Dimostrazione: indipendenza dal percorso",
                    content: `<p>Poiché il ciclo completo A $\\to$ B $\\to$ A è reversibile, il teorema di Clausius ci dice che:</p>
<p>$$\\oint \\frac{\\delta Q_{rev}}{T} = 0$$</p>
<p>Spezziamo l'integrale ciclico nella somma degli integrali sui due percorsi:</p>
<p>$$\\int_{A,\\,(I)}^{B} \\frac{\\delta Q_{rev}}{T} + \\int_{B,\\,(II)}^{A} \\frac{\\delta Q_{rev}}{T} = 0$$</p>
<p>Invertendo gli estremi di integrazione del secondo integrale (e cambiandone il segno):</p>
<p>$$\\int_{A,\\,(I)}^{B} \\frac{\\delta Q_{rev}}{T} - \\int_{A,\\,(II)}^{B} \\frac{\\delta Q_{rev}}{T} = 0$$</p>
<p>Da cui segue:</p>
<p>$$\\int_{A,\\,(I)}^{B} \\frac{\\delta Q_{rev}}{T} = \\int_{A,\\,(II)}^{B} \\frac{\\delta Q_{rev}}{T}$$</p>
<p>Questo risultato è fondamentale: l'integrale di $\\frac{\\delta Q_{rev}}{T}$ tra due stati A e B <strong>non dipende dal percorso reversibile seguito</strong>, ma solo dagli stati iniziale e finale. Questa è la proprietà che definisce una <strong>funzione di stato</strong>.</p>`
                },
                {
                    subtitle: "Definizione di entropia",
                    content: `<p>Esiste quindi una funzione di stato, che chiameremo <strong>entropia</strong> ($S$), la cui variazione tra due stati è data da:</p>
<p>$$\\Delta S = S_B - S_A \\equiv \\int_A^B \\frac{\\delta Q_{rev}}{T}$$</p>
<p>dove l'integrale è calcolato lungo una qualsiasi trasformazione <strong>reversibile</strong> che connette A e B.</p>
<p>In forma differenziale:</p>
<p>$$dS = \\frac{\\delta Q_{rev}}{T}$$</p>
<p>Poiché $S$ è una funzione di stato, il suo differenziale $dS$ è un <strong>differenziale esatto</strong>.</p>`
                },
                {
                    subtitle: "Proprietà di additività",
                    content: `<p>L'entropia è una grandezza <strong>additiva</strong> (o estensiva). Se un sistema è composto da due sottosistemi 1 e 2:</p>
<p>$$S_{tot} = S_1 + S_2$$</p>
<p>Analogamente, la variazione di entropia totale è la somma delle variazioni:</p>
<p>$$\\Delta S_{tot} = \\Delta S_1 + \\Delta S_2$$</p>`
                }
            ],
            formulas: [
                { label: "Definizione di entropia", latex: "\\Delta S = S_B - S_A = \\int_A^B \\frac{\\delta Q_{rev}}{T}" },
                { label: "Forma differenziale", latex: "dS = \\frac{\\delta Q_{rev}}{T}" }
            ]
        },
        {
            id: "s54-clausius-irreversibile",
            type: "section",
            title: "La Disuguaglianza di Clausius e il Calcolo dell'Entropia",
            icon: "⚖️",
            content: `<p>Cosa succede per una trasformazione <strong>irreversibile</strong>? Consideriamo un ciclo composto da una trasformazione irreversibile da A a B (percorso I) e una trasformazione reversibile da B ad A (percorso II).</p>`,
            subsections: [
                {
                    subtitle: "Derivazione della disuguaglianza",
                    content: `<p>Per questo ciclo, la disuguaglianza di Clausius vale nella forma stretta:</p>
<p>$$\\oint \\frac{\\delta Q}{T} = \\int_{A,\\,(I)}^{B} \\frac{\\delta Q_{irr}}{T} + \\int_{B,\\,(II)}^{A} \\frac{\\delta Q_{rev}}{T} \\lt 0$$</p>
<p>Poiché il percorso (II) è reversibile e va da B ad A, per definizione di entropia $\\int_{B,\\,(II)}^{A} \\frac{\\delta Q_{rev}}{T} = S_A - S_B = -\\Delta S_{A \\to B}$. Sostituendo:</p>
<p>$$\\int_{A,\\,(I)}^{B} \\frac{\\delta Q_{irr}}{T} - \\Delta S_{A \\to B} \\lt 0$$</p>
<p>Da cui:</p>
<p>$$\\Delta S_{A \\to B} \\gt \\int_{A,\\,(I)}^{B} \\frac{\\delta Q_{irr}}{T}$$</p>
<p>Combinando con il caso reversibile, la <strong>relazione generale</strong> è:</p>
<p>$$\\Delta S \\ge \\int_A^B \\frac{\\delta Q}{T}$$</p>
<p>dove l'uguaglianza vale per trasformazioni reversibili e la disuguaglianza stretta per trasformazioni irreversibili.</p>`
                }
            ],
            formulas: [
                { label: "Relazione generale entropia-calore", latex: "\\Delta S \\ge \\int_A^B \\frac{\\delta Q}{T}" }
            ]
        },
        {
            id: "s54-calcolo-ds-irreversibile",
            type: "note_box",
            title: "Come calcolare ΔS per un processo irreversibile",
            icon: "🧮",
            content: `<p>La definizione di $\\Delta S$ richiede un integrale su un percorso <strong>reversibile</strong>. Come si calcola allora la variazione di entropia per una trasformazione irreversibile da A a B?</p>
<p>La chiave è che l'entropia è una <strong>funzione di stato</strong>. La sua variazione dipende solo dagli stati A e B, non da come ci si arriva. La procedura è:</p>
<ol>
<li><strong>Identificare</strong> gli stati di equilibrio iniziale (A) e finale (B).</li>
<li><strong>Immaginare</strong> una qualsiasi trasformazione <strong>reversibile</strong> che connetta gli stessi stati A e B.</li>
<li><strong>Calcolare</strong> l'integrale $\\int_A^B \\frac{\\delta Q_{rev}}{T}$ lungo questo percorso fittizio.</li>
</ol>
<p>Il risultato sarà la variazione di entropia del processo irreversibile originale.</p>`,
            subsections: [
                {
                    subtitle: "Esempio: espansione libera di un gas ideale",
                    content: `<p>Consideriamo l'espansione libera di un gas ideale da un volume $V_A$ a un volume $V_B$. Questa è una trasformazione <strong>irreversibile</strong> e adiabatica ($\\delta Q = 0$), ma durante la quale la temperatura non cambia (per un gas ideale, $\\Delta U = 0 \\Rightarrow \\Delta T = 0$ poiché $L=0$ e $Q=0$).</p>
<p>Per calcolare $\\Delta S$, sostituiamo questa trasformazione con un'<strong>espansione isoterma reversibile</strong> tra gli stessi stati A e B.</p>
<p>Durante un'isoterma reversibile, $\\Delta U = 0$, quindi $\\delta Q = \\delta L = p\\,dV$:</p>
<p>$$\\Delta S = \\int_A^B \\frac{\\delta Q_{rev}}{T} = \\int_A^B \\frac{p\\,dV}{T}$$</p>
<p>Usando l'equazione di stato dei gas perfetti, $p = nRT/V$:</p>
<p>$$\\Delta S = \\int_{V_A}^{V_B} \\frac{nRT}{V} \\frac{dV}{T} = nR \\int_{V_A}^{V_B} \\frac{dV}{V} = nR \\ln\\left(\\frac{V_B}{V_A}\\right)$$</p>
<p>Poiché $V_B \\gt V_A$, la variazione di entropia è <strong>positiva</strong>, come ci aspettiamo per un processo spontaneo e irreversibile.</p>`
                }
            ],
            formulas: [
                { label: "ΔS espansione libera gas ideale", latex: "\\Delta S = nR \\ln\\left(\\frac{V_B}{V_A}\\right)" }
            ]
        },
        {
            id: "s54-sistema-isolato",
            type: "section",
            title: "Variazione di Entropia in un Sistema Isolato",
            icon: "📦",
            content: `<p>Un caso di fondamentale importanza è quello di un <strong>sistema isolato</strong>: non scambia né calore né lavoro con l'ambiente. In particolare, $\\delta Q = 0$ per qualsiasi trasformazione.</p>
<p>Applichiamo la disuguaglianza di Clausius:</p>
<p>$$\\Delta S \\ge \\int_A^B \\frac{\\delta Q}{T} = \\int_A^B \\frac{0}{T} = 0$$</p>
<p>Otteniamo un risultato di portata enorme:</p>
<p>$$\\Delta S_{isolato} \\ge 0$$</p>`,
            subsections: [
                {
                    subtitle: "Principio di Aumento dell'Entropia",
                    content: `<p>Per qualsiasi trasformazione che avviene in un sistema isolato, l'entropia può solo <strong>aumentare o rimanere costante</strong>. Non può mai diminuire.</p>
<ul>
<li>$\\Delta S_{isolato} = 0$ se la trasformazione è <strong>reversibile</strong>.</li>
<li>$\\Delta S_{isolato} \\gt 0$ se la trasformazione è <strong>irreversibile</strong>.</li>
</ul>
<p>Questo principio fornisce una <strong>"freccia del tempo"</strong> per i processi termodinamici: i processi spontanei (irreversibili) in un sistema isolato evolvono sempre nella direzione in cui l'entropia aumenta.</p>`
                },
                {
                    subtitle: "Trasformazioni adiabatiche e entropia",
                    content: `<ul>
<li>Una trasformazione <strong>adiabatica reversibile</strong> è anche <strong>isentropica</strong>, cioè a entropia costante. Infatti, essendo reversibile e adiabatica ($\\delta Q_{rev} = 0$), si ha $\\Delta S = \\int \\frac{\\delta Q_{rev}}{T} = 0$.</li>
<li>Una trasformazione <strong>adiabatica irreversibile</strong> avviene con un <strong>aumento di entropia</strong>. Essendo un processo spontaneo in un sistema termicamente isolato, si ha $\\Delta S \\gt 0$.</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Principio di aumento dell'entropia", latex: "\\Delta S_{isolato} \\ge 0" }
            ]
        },
        {
            id: "s54-entropia-universo",
            type: "section",
            title: "L'Entropia dell'Universo e il Secondo Principio",
            icon: "🌌",
            content: `<p>Possiamo considerare l'intero <strong>universo termodinamico</strong> come un sistema isolato. L'universo è definito come l'unione del sistema che stiamo studiando e del suo ambiente:</p>
<p>$$\\text{Universo} = \\text{Sistema} + \\text{Ambiente}$$</p>
<p>Per definizione, non c'è nulla al di fuori dell'universo con cui scambiare energia. Quindi, per qualsiasi processo:</p>
<p>$$\\Delta S_{universo} \\ge 0$$</p>
<p>Poiché l'entropia è additiva:</p>
<p>$$\\Delta S_{universo} = \\Delta S_{sistema} + \\Delta S_{ambiente} \\ge 0$$</p>
<p>Questa è considerata la <strong>formulazione più generale e analitica del Secondo Principio della Termodinamica</strong>. È equivalente agli enunciati storici di Kelvin-Planck e di Clausius.</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione dell'enunciato di Clausius",
                    content: `<p>Vediamo come dal principio di aumento dell'entropia si possa dimostrare l'impossibilità del "frigorifero perfetto" di Clausius (una macchina che trasferisce calore da una sorgente fredda a una calda senza lavoro esterno).</p>
<p><strong>Dimostrazione per assurdo:</strong> Supponiamo che esista una macchina ciclica il cui unico risultato sia trasferire una quantità di calore $Q \\gt 0$ da una sorgente fredda a temperatura $T_1$ a una sorgente calda a temperatura $T_2 \\gt T_1$.</p>
<p>Consideriamo l'universo termodinamico composto dal sistema (la macchina) e dall'ambiente (le due sorgenti):</p>
<ul>
<li><strong>Variazione di entropia del sistema:</strong> La macchina opera in un ciclo, quindi torna al suo stato iniziale. Essendo l'entropia una funzione di stato, $\\Delta S_{sistema} = 0$.</li>
<li><strong>Variazione di entropia dell'ambiente:</strong>
  <ul>
    <li>La sorgente fredda a $T_1$ cede il calore $Q$: $\\Delta S_1 = -Q/T_1$</li>
    <li>La sorgente calda a $T_2$ assorbe il calore $Q$: $\\Delta S_2 = +Q/T_2$</li>
  </ul>
  Quindi $\\Delta S_{ambiente} = \\frac{Q}{T_2} - \\frac{Q}{T_1}$
</li>
</ul>
<p>La variazione di entropia dell'universo è:</p>
<p>$$\\Delta S_{universo} = 0 + Q\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$</p>
<p>Poiché $T_2 \\gt T_1$, ne consegue che $\\frac{1}{T_2} \\lt \\frac{1}{T_1}$, e quindi il termine tra parentesi è negativo. Essendo $Q \\gt 0$:</p>
<p>$$\\Delta S_{universo} \\lt 0$$</p>
<p>Questo <strong>contraddice</strong> il principio di aumento dell'entropia. L'ipotesi iniziale è assurda e una tale macchina non può esistere. ∎</p>`
                },
                {
                    subtitle: "Nota sull'enunciato di Kelvin-Planck",
                    content: `<p>Punto chiave: la dimostrazione dell'equivalenza con l'enunciato di Kelvin-Planck (impossibilità del motore perfetto, cioè una macchina ciclica che converte integralmente calore in lavoro assorbendo da una sola sorgente) segue un ragionamento analogo. Si può verificare che anche in quel caso si otterrebbe $\\Delta S_{universo} \\lt 0$, in contraddizione con il principio.</p>`
                }
            ],
            formulas: [
                { label: "Entropia dell'universo", latex: "\\Delta S_{universo} = \\Delta S_{sistema} + \\Delta S_{ambiente} \\ge 0" }
            ]
        },
        {
            id: "s54-riepilogo",
            type: "alert_box",
            title: "Mappa concettuale: dal Carnot all'Entropia",
            icon: "🗺️",
            content: `<p>Ecco la catena logica completa di questa lezione:</p>
<ol>
<li><strong>Teorema di Carnot</strong> (2 sorgenti) → $\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0$ per cicli reversibili</li>
<li><strong>Teorema di Clausius</strong> (N sorgenti) → $\\sum \\frac{Q_i}{T_i} \\le 0$, con uguaglianza solo per cicli reversibili</li>
<li><strong>Forma integrale</strong> → $\\oint \\frac{\\delta Q}{T} \\le 0$</li>
<li>Per cicli reversibili, $\\oint \\frac{\\delta Q_{rev}}{T} = 0$ → l'integrale non dipende dal percorso → <strong>esiste una funzione di stato: l'entropia</strong></li>
<li>$\\Delta S = \\int_A^B \\frac{\\delta Q_{rev}}{T}$ → definizione di entropia</li>
<li>Per sistemi isolati: $\\Delta S \\ge 0$ → <strong>Secondo Principio</strong></li>
</ol>`,
            table_compare: {
                headers: ["Tipo di processo", "Entropia del sistema", "Entropia dell'universo"],
                rows: [
                    ["Reversibile qualsiasi", "Può aumentare, diminuire o restare costante", "ΔS_univ = 0"],
                    ["Irreversibile qualsiasi", "Può aumentare, diminuire o restare costante", "ΔS_univ > 0"],
                    ["Adiabatico reversibile", "ΔS = 0 (isentropico)", "ΔS_univ = 0"],
                    ["Adiabatico irreversibile", "ΔS > 0", "ΔS_univ > 0"],
                    ["Sistema isolato (qualsiasi)", "ΔS ≥ 0", "—"]
                ]
            }
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Definisci l'entropia come funzione di stato e spiega come si dimostra che è tale.",
            back: "L'entropia è definita come $\\Delta S = S_B - S_A = \\int_A^B \\frac{\\delta Q_{rev}}{T}$. Si dimostra che è una funzione di stato partendo dal teorema di Clausius per cicli reversibili ($\\oint \\frac{\\delta Q_{rev}}{T} = 0$): spezzando l'integrale su due percorsi reversibili qualsiasi tra A e B, si mostra che l'integrale $\\int_A^B \\frac{\\delta Q_{rev}}{T}$ non dipende dal percorso scelto, ma solo dagli stati iniziale e finale."
        },
        {
            type: "domanda",
            front: "Enuncia il teorema di Clausius nella sua forma generale (sia discreta che integrale).",
            back: "Per una macchina termica che compie un ciclo scambiando calore con $N$ sorgenti: $\\sum_{i=1}^{N} \\frac{Q_i}{T_i} \\le 0$. L'uguaglianza vale per cicli reversibili, la disuguaglianza stretta per cicli irreversibili. In forma integrale (caso continuo): $\\oint \\frac{\\delta Q}{T} \\le 0$."
        },
        {
            type: "formula",
            front: "Qual è la relazione generale tra variazione di entropia e calore scambiato? Quando vale l'uguaglianza e quando la disuguaglianza?",
            back: "$\\Delta S \\ge \\int_A^B \\frac{\\delta Q}{T}$. L'uguaglianza vale per trasformazioni reversibili ($\\Delta S = \\int_A^B \\frac{\\delta Q_{rev}}{T}$), la disuguaglianza stretta per trasformazioni irreversibili ($\\Delta S \gt \\int_A^B \\frac{\\delta Q_{irr}}{T}$)."
        },
        {
            type: "domanda",
            front: "Cosa afferma il principio di aumento dell'entropia per un sistema isolato?",
            back: "Per qualsiasi trasformazione in un sistema isolato, $\\Delta S_{isolato} \\ge 0$. L'entropia può solo aumentare (processi irreversibili) o restare costante (processi reversibili), mai diminuire. Questo fornisce una «freccia del tempo» termodinamica."
        },
        {
            type: "dimostrazione",
            front: "Come si calcola la variazione di entropia per un processo irreversibile, dato che la definizione richiede un percorso reversibile?",
            back: "Si sfrutta il fatto che $S$ è funzione di stato: $\\Delta S$ dipende solo dagli stati A e B, non dal percorso. Procedura: (1) Identificare gli stati di equilibrio iniziale e finale. (2) Immaginare un percorso reversibile fittizio che connetta gli stessi stati. (3) Calcolare $\\int_A^B \\frac{\\delta Q_{rev}}{T}$ lungo quel percorso. Il risultato è la $\\Delta S$ del processo irreversibile originale."
        },
        {
            type: "dimostrazione",
            front: "Calcola la variazione di entropia per l'espansione libera di un gas ideale da $V_A$ a $V_B$.",
            back: "L'espansione libera è irreversibile, con $Q=0$, $L=0$, $\\Delta U=0$, $\\Delta T=0$. Si sostituisce con un'isoterma reversibile tra gli stessi stati: $\\Delta S = \\int_{V_A}^{V_B} \\frac{p\\,dV}{T} = \\int_{V_A}^{V_B} \\frac{nRT}{VT}\\,dV = nR\\ln\\left(\\frac{V_B}{V_A}\\right) \gt 0$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che l'enunciato di Clausius (impossibilità del frigorifero perfetto) segue dal principio di aumento dell'entropia.",
            back: "Per assurdo, supponiamo che una macchina ciclica trasferisca calore $Q \gt 0$ da $T_1$ (fredda) a $T_2 \gt T_1$ (calda) senza lavoro esterno. $\\Delta S_{sistema} = 0$ (ciclo). $\\Delta S_{ambiente} = -Q/T_1 + Q/T_2 = Q(1/T_2 - 1/T_1)$. Poiché $T_2 \gt T_1$, si ha $1/T_2 \lt 1/T_1$, quindi $\\Delta S_{universo} \lt 0$. Contraddizione con $\\Delta S_{universo} \\ge 0$."
        },
        {
            type: "tranello",
            front: "Una trasformazione adiabatica è sempre isentropica?",
            back: "No! Solo una trasformazione adiabatica <strong>reversibile</strong> è isentropica ($\\Delta S = 0$, perché $\\delta Q_{rev} = 0$). Una trasformazione adiabatica <strong>irreversibile</strong> ha $\\Delta S \gt 0$: l'entropia aumenta anche se non c'è scambio di calore."
        },
        {
            type: "tranello",
            front: "L'entropia di un sistema può diminuire?",
            back: "Sì, l'entropia di un <strong>sistema</strong> può diminuire (ad esempio raffreddandolo cedendo calore all'ambiente). Ciò che non può mai diminuire è l'entropia dell'<strong>universo</strong> (sistema + ambiente): $\\Delta S_{universo} \\ge 0$. L'eventuale diminuzione di $\\Delta S_{sistema}$ è sempre compensata (o più che compensata) da un aumento di $\\Delta S_{ambiente}$."
        },
        {
            type: "domanda",
            front: "Perché la formulazione $\\Delta S_{universo} \\ge 0$ è considerata la forma più generale del Secondo Principio?",
            back: "Perché è equivalente agli enunciati storici di Kelvin-Planck e di Clausius, ma ha un carattere quantitativo: non dice solo che certi processi sono impossibili, ma fornisce uno strumento matematico ($\\Delta S$) per misurare il grado di irreversibilità. Inoltre, definisce la direzione spontanea dei processi: sono possibili solo quelli per cui l'entropia dell'universo non diminuisce."
        }
    ]
};

