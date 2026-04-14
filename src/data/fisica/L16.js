const LESSON = {
    id: "L16", date: "Lezione 16 — 13 Apr 2026",
    title: "Esercizi su Lavoro ed Energia, Introduzione al Momento Angolare",
    abstract: "Esercizi applicativi sul teorema dell'energia meccanica (piano inclinato con e senza attrito, guida circolare verticale), seguiti dall'introduzione al momento angolare, al momento della forza e alla seconda equazione cardinale della dinamica.",

    sections: [
        {
            id: "s16-avvisi",
            type: "note_box",
            title: "Avvisi del professore",
            icon: "📢",
            content: `<p><strong>Mercoledì prossimo:</strong> Si concluderà la dinamica del punto materiale, trattando i moti relativi e le forze di inerzia, con esercizi annessi.</p>
<p><strong>Giovedì prossimo:</strong> La lezione in presenza è annullata. Si terrà una lezione online di 45 minuti, dalle 12:00 alle 12:45, come introduzione alla dinamica dei sistemi di punti materiali. La partecipazione non è strettamente obbligatoria, poiché l'argomento verrà ripreso nelle lezioni successive. Si invita a controllare gli avvisi su Teams.</p>`
        },
        {
            id: "s16-riepilogo-strategie",
            type: "section",
            title: "Riepilogo e Strategie di Risoluzione",
            icon: "🧭",
            content: `<p>Prima di iniziare con gli esercizi, riassumiamo i concetti fondamentali legati al lavoro e all'energia. Abbiamo introdotto il concetto di <strong>lavoro</strong> e di <strong>energia cinetica</strong>, e il <strong>teorema dell'energia cinetica</strong> che li lega. Successivamente, abbiamo definito le <strong>forze conservative</strong> e l'<strong>energia potenziale</strong> associata.</p>
<p>La somma dell'energia cinetica e dell'energia potenziale costituisce l'<strong>energia meccanica</strong>, $E_m$, che rappresenta il serbatoio energetico di un sistema, ovvero la sua capacità di compiere lavoro.</p>`,
            subsections: [
                {
                    subtitle: "Il bivio fondamentale: forze conservative o no?",
                    content: `<p>Quando si affronta un problema di dinamica utilizzando i concetti di energia, il primo passo fondamentale è <strong>analizzare le forze in gioco</strong>. Ci si trova sempre di fronte a un bivio:</p>
<p><strong>1. Agiscono solo forze conservative?</strong> In questo caso, l'energia meccanica del sistema si conserva:</p>
<p>$$\\Delta E_m = 0 \\Rightarrow E_{m,\\text{iniziale}} = E_{m,\\text{finale}}$$</p>
<p>I problemi si risolvono impostando l'equazione di conservazione dell'energia meccanica.</p>
<p><strong>2. Agiscono anche forze non conservative?</strong> In questo caso, l'energia meccanica non si conserva. La sua variazione è uguale al lavoro compiuto dalle forze non conservative:</p>
<p>$$\\Delta E_m = L_{nc}$$</p>
<p>Per risolvere il problema, è necessario calcolare il lavoro delle forze non conservative (come l'attrito).</p>`
                }
            ],
            formulas: [
                { label: "Conservazione energia meccanica", latex: "\\Delta E_m = 0 \\Rightarrow E_{m,i} = E_{m,f}" },
                { label: "Energia meccanica con forze non conservative", latex: "\\Delta E_m = L_{nc}" }
            ]
        },
        {
            id: "s16-piano-inclinato",
            type: "section",
            title: "Esercizio: Piano Inclinato con e senza Attrito",
            icon: "📐",
            content: `<p><strong>Testo del problema:</strong> Un corpo di massa $m$ viene lanciato lungo un piano inclinato di un angolo $\\theta$ rispetto all'orizzontale. Parte da una quota $h$ con una velocità iniziale $v_0$. Calcolare la velocità finale $v_f$ quando raggiunge la base del piano inclinato ($h=0$) nei seguenti due casi:</p>
<ol>
<li>Il piano è liscio (attrito nullo, $\\mu = 0$).</li>
<li>Il piano è scabro (coefficiente di attrito dinamico $\\mu \\gt 0$).</li>
</ol>
<p><strong>Dati noti:</strong> $v_0, h, \\theta, \\mu$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Piano inclinato con massa m</strong></p>
  <p><em>Piano inclinato con angolo θ alla base. Il corpo parte dall'alto (quota h) con velocità $v_0$ diretta lungo il piano verso il basso. Alla base del piano (quota 0) il corpo arriva con velocità $v_f$. Indicare il sistema di assi x (orizzontale) e z (verticale), la quota h con una freccia verticale, e le posizioni iniziale e finale del corpo.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Caso 1: Attrito nullo (μ = 0)",
                    content: `<p>Le forze che agiscono sul corpo sono la forza peso $\\vec{P}$ e la reazione normale del piano $\\vec{R}_N$.</p>
<p>La reazione normale è sempre <strong>perpendicolare allo spostamento</strong>, quindi il suo lavoro è nullo: $L_{R_N} = 0$. La forza peso è una forza conservativa. Poiché è l'unica forza a compiere lavoro, <strong>l'energia meccanica si conserva</strong>.</p>
<p>$$\\Delta E_m = 0 \\Rightarrow E_{m,f} = E_{m,i}$$</p>
<p>Scegliamo il livello di energia potenziale zero alla base del piano ($h = 0$).</p>
<p>Energia meccanica iniziale (a quota $h$):</p>
<p>$$E_{m,i} = E_{k,i} + U_i = \\frac{1}{2}mv_0^2 + mgh$$</p>
<p>Energia meccanica finale (a quota $0$):</p>
<p>$$E_{m,f} = E_{k,f} + U_f = \\frac{1}{2}mv_f^2 + 0$$</p>
<p>Eguagliando le due espressioni:</p>
<p>$$\\frac{1}{2}mv_f^2 = \\frac{1}{2}mv_0^2 + mgh$$</p>
<p>$$v_f^2 = v_0^2 + 2gh$$</p>
<p>$$v_f = \\sqrt{v_0^2 + 2gh}$$</p>
<p><strong>Osservazione:</strong> La velocità finale è maggiore di quella iniziale, poiché la forza peso compie un lavoro motore (positivo), convertendo energia potenziale in energia cinetica.</p>
<p><strong>Verifica — caso limite $\\theta = 0$ (piano orizzontale):</strong> Se $\\theta = 0$, allora $h = 0$ e la formula restituisce $v_f = v_0$. Questo è corretto: in assenza di attrito e con la forza peso perpendicolare al moto, non c'è lavoro e l'energia cinetica rimane costante, in accordo con il principio di inerzia.</p>`
                },
                {
                    subtitle: "Caso 2: Attrito presente (μ > 0)",
                    content: `<p>In questo caso, oltre alla forza peso e alla reazione normale, agisce la <strong>forza di attrito dinamico</strong> $\\vec{F}_a$, che è una forza <strong>non conservativa</strong>. L'energia meccanica non si conserva:</p>
<p>$$\\Delta E_m = L_{nc} = L_a$$</p>
<p>dove $L_a$ è il lavoro della forza d'attrito.</p>
<p>La forza d'attrito ha modulo $F_a = \\mu R_N$. Sul piano inclinato, la reazione normale bilancia la componente della forza peso perpendicolare al piano, quindi $R_N = mg\\cos\\theta$:</p>
<p>$$F_a = \\mu mg\\cos\\theta$$</p>
<p>La forza d'attrito è sempre opposta allo spostamento. Lo spostamento lungo il piano è $x_f = \\frac{h}{\\sin\\theta}$. Il lavoro della forza d'attrito è quindi negativo:</p>
<p>$$L_a = -F_a \\cdot x_f = -(\\mu mg\\cos\\theta)\\left(\\frac{h}{\\sin\\theta}\\right) = -\\mu mgh\\cot\\theta$$</p>
<p>Applichiamo il teorema dell'energia meccanica:</p>
<p>$$E_{m,f} - E_{m,i} = L_a$$</p>
<p>$$\\frac{1}{2}mv_f^2 - \\left(\\frac{1}{2}mv_0^2 + mgh\\right) = -\\mu mgh\\cot\\theta$$</p>
<p>Risolvendo per $v_f^2$:</p>
<p>$$v_f^2 = v_0^2 + 2gh - 2\\mu gh\\cot\\theta = v_0^2 + 2gh(1 - \\mu\\cot\\theta)$$</p>
<p>$$v_f = \\sqrt{v_0^2 + 2gh(1 - \\mu\\cot\\theta)}$$</p>
<p><strong>Osservazione:</strong> Come ci aspettavamo, la velocità finale è <strong>minore</strong> rispetto al caso senza attrito, a causa del termine negativo che rappresenta l'energia dissipata dall'attrito. Se poniamo $\\mu = 0$, ritroviamo la soluzione del caso 1.</p>`
                }
            ],
            formulas: [
                { label: "v finale senza attrito", latex: "v_f = \\sqrt{v_0^2 + 2gh}" },
                { label: "v finale con attrito", latex: "v_f = \\sqrt{v_0^2 + 2gh(1 - \\mu\\cot\\theta)}" },
                { label: "Lavoro dell'attrito su piano inclinato", latex: "L_a = -\\mu mgh\\cot\\theta" }
            ]
        },
        {
            id: "s16-guida-circolare",
            type: "section",
            title: "Esercizio: Guida Circolare Verticale con Attrito",
            icon: "🎡",
            content: `<p><strong>Testo del problema:</strong> Un carrellino di massa $m = 0.3\\,\\text{kg}$ si muove lungo una guida circolare verticale di raggio $R = 2.2\\,\\text{m}$. Parte dal punto più alto A con velocità $v_0 = 5.8\\,\\text{m/s}$. Nel primo quarto di giro (da A al punto B, orizzontale rispetto al centro), agisce una forza di attrito tangenziale costante $F_T = 3.1\\,\\text{N}$. Dal punto B in poi, l'attrito è nullo. Calcolare la <strong>reazione normale</strong> della guida sul carrellino nel punto P, situato a un angolo $\\theta = 30°$ rispetto alla verticale inferiore.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Guida circolare verticale</strong></p>
  <p><em>Guida circolare verticale di raggio R con centro O. Punto A in alto (ore 12), punto B a destra (ore 3), punto C in basso (ore 6). Il punto P si trova a un angolo θ = 30° dalla verticale inferiore OC, sul lato sinistro della guida (tra C e la posizione delle ore 9). Disegnare: velocità $v_0$ in A (tangente, verso destra), zona di attrito da A a B, e in P i vettori peso $\\vec{P}$ (verso il basso), reazione normale $\\vec{R}_N$ (radiale verso il centro O), e velocità $\\vec{v}_P$ (tangente alla guida). Scomporre il peso in componente radiale $P_\\perp = mg\\cos\\theta$ e tangenziale.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Strategia di risoluzione",
                    content: `<p>Il problema richiede di calcolare una forza, la reazione normale $R_N$ nel punto P. Questa è una grandezza <strong>dinamica</strong>. Scrivendo la seconda legge di Newton per il moto circolare lungo la <strong>direzione radiale</strong> (verso il centro) in P, otteniamo:</p>
<p>$$\\sum F_{\\text{radiali}} = ma_c \\Rightarrow R_N - P_\\perp = m\\frac{v_P^2}{R}$$</p>
<p>Poiché $\\theta$ è misurato dalla verticale inferiore, il raggio OP forma un angolo $\\theta$ con la verticale. La componente della forza peso nella direzione radiale (verso il centro) è quindi $P_\\perp = mg\\cos\\theta$. Dunque:</p>
<p>$$R_N = mg\\cos\\theta + m\\frac{v_P^2}{R}$$</p>
<p>Per calcolare $R_N$, dobbiamo prima trovare la velocità $v_P$ nel punto P. Poiché agisce una forza non conservativa (l'attrito $F_T$), useremo il <strong>teorema dell'energia meccanica</strong>: $\\Delta E_m = L_{nc}$.</p>`
                },
                {
                    subtitle: "Passo 1: Calcolo di v_P con il teorema dell'energia meccanica",
                    content: `<p>Applichiamo il teorema tra il punto iniziale A e il punto finale P:</p>
<p>$$E_{m,P} - E_{m,A} = L_{F_T}$$</p>
<p>Scegliamo il livello di energia potenziale zero nel punto più basso della guida (C).</p>
<p><strong>Energia meccanica in A:</strong> La quota di A è $h_A = 2R$ (diametro della guida).</p>
<p>$$E_{m,A} = \\frac{1}{2}mv_0^2 + mg(2R)$$</p>
<p><strong>Energia meccanica in P:</strong> Il punto P si trova a un angolo $\\theta$ dalla verticale inferiore (da C). La sua quota rispetto a C si ricava dalla geometria: la proiezione del raggio OP sulla verticale è $R\\cos\\theta$, quindi la distanza verticale di P dal centro O è $R\\cos\\theta$ verso il basso. Poiché C si trova a distanza $R$ sotto il centro, la quota di P rispetto a C è:</p>
<p>$$h_P = R - R\\cos\\theta = R(1 - \\cos\\theta)$$</p>
<p>$$E_{m,P} = \\frac{1}{2}mv_P^2 + mgR(1 - \\cos\\theta)$$</p>
<p><strong>Lavoro della forza d'attrito:</strong> L'attrito agisce solo lungo l'arco AB (primo quarto di giro), la cui lunghezza è $s_{AB} = R \\cdot \\frac{\\pi}{2}$. Il lavoro è resistente (negativo):</p>
<p>$$L_{F_T} = -F_T \\cdot s_{AB} = -F_T R\\frac{\\pi}{2}$$</p>
<p>Sostituendo nell'equazione principale:</p>
<p>$$\\left(\\frac{1}{2}mv_P^2 + mgR(1-\\cos\\theta)\\right) - \\left(\\frac{1}{2}mv_0^2 + 2mgR\\right) = -F_T R\\frac{\\pi}{2}$$</p>
<p>Isoliamo $v_P^2$:</p>
<p>$$\\frac{1}{2}mv_P^2 = \\frac{1}{2}mv_0^2 + 2mgR - mgR(1-\\cos\\theta) - F_T R\\frac{\\pi}{2}$$</p>
<p>$$v_P^2 = v_0^2 + 4gR - 2gR(1-\\cos\\theta) - \\frac{F_T R\\pi}{m}$$</p>
<p>$$v_P^2 = v_0^2 + 2gR(2 - 1 + \\cos\\theta) - \\frac{F_T R\\pi}{m}$$</p>
<p>$$v_P^2 = v_0^2 + 2gR(1 + \\cos\\theta) - \\frac{F_T R\\pi}{m}$$</p>`
                },
                {
                    subtitle: "Passo 2: Calcolo di R_N",
                    content: `<p>Sostituiamo l'espressione di $v_P^2$ nell'equazione della dinamica radiale:</p>
<p>$$R_N = mg\\cos\\theta + \\frac{m}{R}v_P^2$$</p>
<p>$$R_N = mg\\cos\\theta + \\frac{m}{R}\\left(v_0^2 + 2gR(1+\\cos\\theta) - \\frac{F_T R\\pi}{m}\\right)$$</p>
<p>$$R_N = mg\\cos\\theta + \\frac{mv_0^2}{R} + 2mg(1+\\cos\\theta) - F_T\\pi$$</p>
<p>$$R_N = mg\\cos\\theta + \\frac{mv_0^2}{R} + 2mg + 2mg\\cos\\theta - F_T\\pi$$</p>
<p>$$R_N = 3mg\\cos\\theta + 2mg + \\frac{mv_0^2}{R} - F_T\\pi$$</p>`
                },
                {
                    subtitle: "Calcolo numerico",
                    content: `<p>Sostituiamo i valori dati ($m = 0.3\\,\\text{kg}$, $g = 9.8\\,\\text{m/s}^2$, $\\theta = 30°$, $v_0 = 5.8\\,\\text{m/s}$, $R = 2.2\\,\\text{m}$, $F_T = 3.1\\,\\text{N}$):</p>
<p>$$R_N = 3(0.3)(9.8)\\cos 30° + 2(0.3)(9.8) + \\frac{0.3 \\cdot (5.8)^2}{2.2} - 3.1 \\cdot \\pi$$</p>
<p>$$R_N = (0.9)(9.8)(0.866) + (0.6)(9.8) + \\frac{0.3 \\cdot 33.64}{2.2} - 9.74$$</p>
<p>$$R_N \\approx 7.64\\,\\text{N} + 5.88\\,\\text{N} + 4.59\\,\\text{N} - 9.74\\,\\text{N}$$</p>
<p>$$R_N \\approx 8.37\\,\\text{N} \\approx 8.4\\,\\text{N}$$</p>`
                }
            ],
            formulas: [
                { label: "Dinamica radiale in P", latex: "R_N - mg\\cos\\theta = m\\frac{v_P^2}{R}" },
                { label: "Quota di P rispetto a C", latex: "h_P = R(1 - \\cos\\theta)" },
                { label: "Velocità in P", latex: "v_P^2 = v_0^2 + 2gR(1+\\cos\\theta) - \\frac{F_T R\\pi}{m}" },
                { label: "Reazione normale in P", latex: "R_N = 3mg\\cos\\theta + 2mg + \\frac{mv_0^2}{R} - F_T\\pi" }
            ]
        },
        {
            id: "s16-momento-angolare-intro",
            type: "section",
            title: "Momento Angolare e Momento della Forza",
            icon: "🔄",
            content: `<p>Finora abbiamo descritto i fenomeni dinamici attraverso la seconda legge di Newton, $\\vec{F} = m\\vec{a}$, e attraverso i concetti di lavoro ed energia. Queste trattazioni si concentrano principalmente sulle cause delle variazioni del moto (forze) e sulle variazioni della rapidità (energia cinetica).</p>
<p>Vogliamo ora introdurre un nuovo approccio per descrivere gli <strong>aspetti rotatori</strong> di un moto. Per fare ciò, dobbiamo definire un punto di osservazione, che chiameremo <strong>polo</strong>, indicato con O.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Momento Angolare",
                    content: `<p>Dato un punto materiale di massa $m$ che si muove con quantità di moto $\\vec{p} = m\\vec{v}$ e la cui posizione rispetto a un polo O è data dal vettore $\\vec{r}$, si definisce <strong>momento angolare</strong> $\\vec{L}$ del punto rispetto al polo O il prodotto vettoriale:</p>
<p>$$\\vec{L} = \\vec{r} \\times \\vec{p}$$</p>
<p>Il momento angolare è un vettore <strong>perpendicolare al piano</strong> formato da $\\vec{r}$ e $\\vec{p}$. Esso quantifica la "rotazione" del moto del corpo attorno al polo O.</p>`
                },
                {
                    subtitle: "Derivata temporale del Momento Angolare",
                    content: `<p>Analizziamo come varia nel tempo il momento angolare, calcolandone la derivata rispetto al tempo:</p>
<p>$$\\frac{d\\vec{L}}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p})$$</p>
<p>Applicando la regola di derivazione del prodotto vettoriale:</p>
<p>$$\\frac{d\\vec{L}}{dt} = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$</p>
<p><strong>Primo termine:</strong> Contiene $\\frac{d\\vec{r}}{dt} = \\vec{v}$. Diventa $\\vec{v} \\times \\vec{p} = \\vec{v} \\times (m\\vec{v})$. Poiché $\\vec{v}$ e $m\\vec{v}$ sono paralleli, il loro prodotto vettoriale è <strong>nullo</strong>:</p>
<p>$$\\frac{d\\vec{r}}{dt} \\times \\vec{p} = \\vec{v} \\times (m\\vec{v}) = \\vec{0}$$</p>
<p><strong>Secondo termine:</strong> Contiene $\\frac{d\\vec{p}}{dt}$. Dalla seconda legge di Newton, $\\frac{d\\vec{p}}{dt} = \\vec{F}_{\\text{tot}}$. Il termine diventa quindi $\\vec{r} \\times \\vec{F}_{\\text{tot}}$.</p>
<p>Questo secondo termine, $\\vec{r} \\times \\vec{F}$, è una grandezza fisica fondamentale: il <strong>momento della forza</strong>.</p>`
                },
                {
                    subtitle: "Definizione di Momento della Forza (Torque)",
                    content: `<p>Data una forza $\\vec{F}$ applicata a un punto materiale la cui posizione rispetto a un polo O è $\\vec{r}$, si definisce <strong>momento della forza</strong> $\\vec{M}$ (o momento meccanico, o torque) rispetto al polo O il prodotto vettoriale:</p>
<p>$$\\vec{M} = \\vec{r} \\times \\vec{F}$$</p>`
                }
            ],
            formulas: [
                { label: "Momento angolare", latex: "\\vec{L} = \\vec{r} \\times \\vec{p}" },
                { label: "Momento della forza (torque)", latex: "\\vec{M} = \\vec{r} \\times \\vec{F}" }
            ]
        },
        {
            id: "s16-seconda-equazione-cardinale",
            type: "section",
            title: "Seconda Equazione Cardinale della Dinamica",
            icon: "⚙️",
            content: `<p>Mettendo insieme i risultati della derivazione precedente, otteniamo una delle equazioni più importanti della dinamica.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato e dimostrazione",
                    content: `<p><strong>Teorema (Seconda Equazione Cardinale):</strong> La derivata temporale del momento angolare di un punto materiale, calcolato rispetto a un polo O, è uguale al momento totale delle forze agenti sul punto, calcolato rispetto allo stesso polo O:</p>
<p>$$\\frac{d\\vec{L}}{dt} = \\vec{M}_{\\text{tot}}$$</p>
<p><strong>Dimostrazione:</strong></p>
<p>$$\\frac{d\\vec{L}}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$</p>
<p>$$= (\\vec{v} \\times m\\vec{v}) + (\\vec{r} \\times \\vec{F}_{\\text{tot}}) = \\vec{0} + \\vec{M}_{\\text{tot}} = \\vec{M}_{\\text{tot}} \\quad \\blacksquare$$</p>`
                },
                {
                    subtitle: "Analogia traslazione–rotazione",
                    content: `<p>Esiste una profonda analogia tra le grandezze traslazionali e quelle rotazionali:</p>
<p><strong>Prima Equazione Cardinale (moto traslazionale):</strong></p>
<p>$$\\frac{d\\vec{p}}{dt} = \\vec{F}_{\\text{tot}}$$</p>
<p>Una forza causa una variazione della quantità di moto.</p>
<p><strong>Seconda Equazione Cardinale (moto rotazionale):</strong></p>
<p>$$\\frac{d\\vec{L}}{dt} = \\vec{M}_{\\text{tot}}$$</p>
<p>Un momento della forza causa una variazione del momento angolare.</p>`
                },
                {
                    subtitle: "Conservazione del Momento Angolare",
                    content: `<p><strong>Corollario:</strong> Se il momento totale delle forze agenti su un punto materiale rispetto a un polo O è nullo, allora il momento angolare del punto rispetto a quello stesso polo si conserva:</p>
<p>$$\\text{Se } \\vec{M}_{\\text{tot}} = \\vec{0} \\Rightarrow \\frac{d\\vec{L}}{dt} = \\vec{0} \\Rightarrow \\vec{L} = \\text{costante}$$</p>
<p>Questa è la legge di <strong>conservazione del momento angolare</strong>, analoga alla conservazione della quantità di moto quando la forza totale è nulla.</p>`
                },
                {
                    subtitle: "Esempio applicativo: Moto circolare uniforme",
                    content: `<p>Consideriamo un punto materiale di massa $m$ in moto circolare uniforme di raggio $R$ con velocità $v$, e calcoliamo il momento angolare rispetto al centro della traiettoria O.</p>
<p>Il vettore posizione $\\vec{r}$ ha modulo $R$ e il vettore quantità di moto $\\vec{p} = m\\vec{v}$ ha modulo $mv$. Poiché nel moto circolare $\\vec{r}$ e $\\vec{v}$ sono sempre <strong>perpendicolari</strong>, il modulo del momento angolare è:</p>
<p>$$|\\vec{L}| = |\\vec{r} \\times \\vec{p}| = Rmv\\sin 90° = mRv$$</p>
<p>La direzione di $\\vec{L}$ è perpendicolare al piano del moto (parallela all'asse di rotazione), e il verso si determina con la regola della mano destra. Poiché $v$ e $R$ sono costanti nel moto circolare uniforme, anche $|\\vec{L}|$ è costante, e la direzione non cambia: il momento angolare si conserva.</p>`
                }
            ],
            formulas: [
                { label: "Seconda equazione cardinale", latex: "\\frac{d\\vec{L}}{dt} = \\vec{M}_{\\text{tot}}" },
                { label: "Conservazione del momento angolare", latex: "\\vec{M}_{\\text{tot}} = \\vec{0} \\Rightarrow \\vec{L} = \\text{costante}" },
                { label: "Momento angolare nel moto circolare", latex: "|\\vec{L}| = mRv" }
            ]
        },
        {
            id: "s16-nota-polo",
            type: "note_box",
            title: "La scelta del polo è fondamentale",
            icon: "⚠️",
            content: `<p>La definizione di momento angolare e momento della forza dipende <strong>esplicitamente dalla scelta del polo O</strong>. Cambiando il polo, queste grandezze cambiano. La fisica del fenomeno non cambia, ma la sua descrizione in termini di rotazione sì.</p>
<p>Questo sarà un concetto chiave per le prossime lezioni. Il professore ha sottolineato che <strong>è sempre necessario specificare rispetto a quale polo</strong> si calcolano momento angolare e momento della forza.</p>`
        },
        {
            id: "s16-orale-dinamica-radiale",
            type: "oral_box",
            title: "Domanda d'esame: perché mg cos θ nella direzione radiale?",
            icon: "🎤",
            content: `<p><strong>Domanda tipica:</strong> "Nella guida circolare, perché la componente radiale del peso è $mg\\cos\\theta$ e non $mg\\sin\\theta$?"</p>
<p><strong>Risposta:</strong> Dipende da come è definito l'angolo $\\theta$. Se $\\theta$ è misurato <strong>dalla verticale inferiore</strong> (come in questo esercizio), il raggio OP forma un angolo $\\theta$ con la direzione verticale. La componente del peso lungo la direzione radiale (cioè lungo OP) è la proiezione di $\\vec{P}$ su quella direzione, che fa un angolo $\\theta$ con $\\vec{P}$ stesso: quindi è $mg\\cos\\theta$. <strong>Non confondere</strong> con il piano inclinato, dove $\\theta$ è l'angolo del piano con l'orizzontale.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Come si definisce il momento angolare di un punto materiale rispetto a un polo O?",
            back: "Il momento angolare è $\\vec{L} = \\vec{r} \\times \\vec{p}$, dove $\\vec{r}$ è il vettore posizione del punto rispetto al polo O e $\\vec{p} = m\\vec{v}$ è la quantità di moto. È un vettore perpendicolare al piano formato da $\\vec{r}$ e $\\vec{p}$."
        },
        {
            type: "definizione",
            front: "Come si definisce il momento della forza (torque) rispetto a un polo O?",
            back: "Il momento della forza è $\\vec{M} = \\vec{r} \\times \\vec{F}$, dove $\\vec{r}$ è il vettore posizione del punto di applicazione della forza rispetto al polo O e $\\vec{F}$ è la forza applicata."
        },
        {
            type: "dimostrazione",
            front: "Dimostra la seconda equazione cardinale della dinamica per un punto materiale.",
            back: "Si parte da $\\vec{L} = \\vec{r} \\times \\vec{p}$ e si deriva nel tempo: $\\frac{d\\vec{L}}{dt} = \\frac{d\\vec{r}}{dt} \\times \\vec{p} + \\vec{r} \\times \\frac{d\\vec{p}}{dt}$. Il primo termine è $\\vec{v} \\times m\\vec{v} = \\vec{0}$ (vettori paralleli). Il secondo termine è $\\vec{r} \\times \\vec{F}_{\\text{tot}} = \\vec{M}_{\\text{tot}}$ (per la II legge di Newton). Dunque $\\frac{d\\vec{L}}{dt} = \\vec{M}_{\\text{tot}}$."
        },
        {
            type: "domanda",
            front: "Quando si conserva il momento angolare di un punto materiale?",
            back: "Quando il momento totale delle forze agenti sul punto rispetto al polo scelto è nullo: $\\vec{M}_{\\text{tot}} = \\vec{0} \\Rightarrow \\vec{L} = \\text{costante}$. Attenzione: questa condizione dipende dalla scelta del polo O."
        },
        {
            type: "domanda",
            front: "Qual è la strategia per decidere se usare la conservazione dell'energia meccanica o il teorema dell'energia meccanica con lavoro non conservativo?",
            back: "Si analizzano le forze: se agiscono solo forze conservative (peso, elastica) e forze che non fanno lavoro (reazione normale), si usa $\\Delta E_m = 0$. Se agiscono anche forze non conservative che compiono lavoro (attrito), si usa $\\Delta E_m = L_{nc}$."
        },
        {
            type: "formula",
            front: "Qual è la velocità finale di un corpo che scende un piano inclinato con attrito?",
            back: "$$v_f = \\sqrt{v_0^2 + 2gh(1 - \\mu\\cot\\theta)}$$ dove $h$ è il dislivello, $\\theta$ l'angolo del piano, $\\mu$ il coefficiente d'attrito dinamico. Il termine $\\mu\\cot\\theta$ rappresenta l'effetto dell'attrito. Per $\\mu = 0$ si ritrova $v_f = \\sqrt{v_0^2 + 2gh}$."
        },
        {
            type: "tranello",
            front: "Un errore comune nell'esercizio della guida circolare: dove si sbaglia spesso nel calcolare la quota di un punto P?",
            back: "Si confonde l'angolo dalla verticale inferiore con l'angolo dalla verticale superiore. Se θ è misurato dalla verticale inferiore (dal punto più basso C), la quota di P rispetto a C è $h_P = R - R\\cos\\theta = R(1 - \\cos\\theta)$. Se fosse misurato dalla verticale superiore, la formula sarebbe diversa: $h_P = R + R\\cos\\theta$. Bisogna sempre fare un disegno!"
        },
        {
            type: "tranello",
            front: "Perché la reazione normale della guida non compare nel bilancio energetico?",
            back: "La reazione normale è sempre perpendicolare allo spostamento (che è tangente alla guida), quindi il suo lavoro è nullo: $L_{R_N} = 0$. Non contribuisce alla variazione di energia meccanica. Però compare nell'equazione della dinamica radiale! Non confondere bilancio energetico e bilancio di forze."
        },
        {
            type: "domanda",
            front: "Quale analogia esiste tra la prima e la seconda equazione cardinale della dinamica?",
            back: "Prima equazione: $\\frac{d\\vec{p}}{dt} = \\vec{F}_{\\text{tot}}$ — la forza causa variazione della quantità di moto (traslazione). Seconda equazione: $\\frac{d\\vec{L}}{dt} = \\vec{M}_{\\text{tot}}$ — il momento della forza causa variazione del momento angolare (rotazione). $\\vec{F} \\leftrightarrow \\vec{M}$, $\\vec{p} \\leftrightarrow \\vec{L}$."
        },
        {
            type: "domanda",
            front: "Come si calcola il lavoro dell'attrito su un piano inclinato? Perché compare la cotangente?",
            back: "Il lavoro dell'attrito è $L_a = -F_a \\cdot d = -\\mu mg\\cos\\theta \\cdot \\frac{h}{\\sin\\theta} = -\\mu mgh\\cot\\theta$. La cotangente compare perché lo spostamento lungo il piano è $d = h/\\sin\\theta$ (relazione geometrica) e la forza d'attrito è $F_a = \\mu mg\\cos\\theta$ (bilancio nella direzione normale al piano)."
        }
    ]
};

