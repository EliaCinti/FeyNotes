const LESSON = {
    id: "L15", date: "Lezione 15 — 9 Apr 2026",
    title: "Lavoro, Energia e Forze Conservative",
    abstract: "Applicazione del teorema dell'energia cinetica a problemi di dinamica, introduzione delle forze conservative e dell'energia potenziale, principio di conservazione dell'energia meccanica, effetto delle forze non conservative e definizione di potenza.",

    sections: [
        {
            id: "s15-teorema-energia-cinetica-applicazione",
            type: "section",
            title: "Applicazione del Teorema dell'Energia Cinetica",
            icon: "⚡",
            content: `<p>In questa lezione applicheremo i concetti visti in precedenza, in particolare il <strong>teorema dell'energia cinetica</strong>, per risolvere problemi di dinamica in modo più efficiente rispetto all'uso diretto delle leggi di Newton.</p>
<p>Ricordiamo il risultato fondamentale: il lavoro totale $W$ compiuto su un corpo è uguale alla variazione della sua energia cinetica $\\Delta E_k$:</p>
<p>$$W = \\Delta E_k$$</p>
<p>Vediamo subito un'applicazione pratica per risolvere un problema che, con i metodi della cinematica, richiederebbe più passaggi.</p>`,
            subsections: [
                {
                    subtitle: "Esempio: Corpo su un piano inclinato (senza attrito)",
                    content: `<p>Consideriamo un oggetto di massa $m$ lanciato su un piano inclinato di angolo $\\theta$ <strong>senza attrito</strong>. L'oggetto parte dal punto A con velocità iniziale $v_0$ e raggiunge una quota massima $h$ nel punto B, dove si ferma momentaneamente. Vogliamo determinare $h$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Piano inclinato con corpo in salita</strong></p>
  <p><em>Piano inclinato di angolo θ. Punto A alla base con velocità v₀ verso l'alto. Punto B in cima a quota h. Relazione geometrica: h = x_B sin θ.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p><strong>Nota:</strong> Con la cinematica, dovremmo prima trovare l'accelerazione lungo il piano ($a = -g\\sin\\theta$), poi usare $v_f^2 = v_i^2 + 2ad$ per trovare lo spazio $x_B$, e infine ricavare $h$. L'approccio energetico è molto più diretto.</p>`
                },
                {
                    subtitle: "Calcolo della variazione di energia cinetica",
                    content: `<p>L'energia cinetica iniziale è $E_{k,i} = \\frac{1}{2}mv_0^2$. Nel punto B il corpo si ferma, quindi $E_{k,f} = 0$.</p>
<p>$$\\Delta E_k = E_{k,f} - E_{k,i} = 0 - \\frac{1}{2}mv_0^2 = -\\frac{1}{2}mv_0^2$$</p>`
                },
                {
                    subtitle: "Calcolo del lavoro",
                    content: `<p>Le forze agenti sul corpo sono la forza peso $\\vec{P}$ e la reazione normale $\\vec{N}$ del piano. Il lavoro della reazione normale è <strong>nullo</strong>, poiché $\\vec{N}$ è sempre perpendicolare allo spostamento. Il lavoro totale è quindi uguale al lavoro compiuto dalla forza peso.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Forze sul corpo lungo il piano inclinato</strong></p>
  <p><em>Corpo sul piano inclinato con forza peso mg verso il basso, reazione normale N perpendicolare al piano, e decomposizione del peso in componente parallela P∥ = mg sin θ e perpendicolare P⊥ = mg cos θ.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>La componente della forza peso parallela al piano è $P_{\\parallel} = mg\\sin\\theta$, diretta verso il basso lungo il piano. Lo spostamento $x_B$ è diretto verso l'alto. Poiché forza e spostamento hanno verso opposto, il lavoro è <strong>negativo</strong>:</p>
<p>$$W = W_P = \\int_A^B \\vec{P} \\cdot d\\vec{s} = \\int_0^{x_B} (-mg\\sin\\theta)\\,dx = -mg\\sin\\theta \\cdot x_B$$</p>
<p>Ricordando la relazione geometrica $h = x_B \\sin\\theta$, otteniamo:</p>
<p>$$W = -mgh$$</p>`
                },
                {
                    subtitle: "Soluzione",
                    content: `<p>Uguagliando il lavoro e la variazione di energia cinetica:</p>
<p>$$-mgh = -\\frac{1}{2}mv_0^2$$</p>
<p>$$h = \\frac{v_0^2}{2g}$$</p>
<p>Questo risultato è <strong>notevole</strong>: la quota massima raggiunta <strong>non dipende né dalla massa del corpo né dall'angolo di inclinazione del piano</strong>. Dipende solo dalla velocità iniziale e dall'accelerazione di gravità.</p>`
                }
            ],
            formulas: [
                { label: "Teorema dell'energia cinetica", latex: "W = \\Delta E_k = E_{k,f} - E_{k,i}" },
                { label: "Lavoro della forza peso (piano inclinato)", latex: "W_P = -mgh" },
                { label: "Quota massima (senza attrito)", latex: "h = \\frac{v_0^2}{2g}" }
            ]
        },
        {
            id: "s15-forze-conservative-energia-potenziale",
            type: "section",
            title: "Forze Conservative ed Energia Potenziale",
            icon: "🔄",
            content: `<p>Il calcolo del lavoro tramite l'integrale può essere complesso. Per una classe speciale di forze, dette <strong>conservative</strong>, possiamo introdurre una funzione — l'<strong>energia potenziale</strong> — che semplifica notevolmente il calcolo.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di forza conservativa",
                    content: `<p>Una forza $\\vec{F}$ è detta <strong>conservativa</strong> se il lavoro $W_{A \\to B}$ che essa compie per spostare un corpo da un punto A a un punto B può essere espresso come la variazione, cambiata di segno, di una funzione della sola posizione $E_p$, chiamata <strong>energia potenziale</strong>:</p>
<p>$$W_{A \\to B}^{\\text{cons}} = -\\Delta E_p = -(E_{p,B} - E_{p,A})$$</p>
<p>La forza peso e la forza elastica sono esempi fondamentali di forze conservative.</p>`
                },
                {
                    subtitle: "Rivisitazione del piano inclinato con l'energia potenziale",
                    content: `<p>La forza peso è conservativa e la sua energia potenziale è $E_p = mgh$, dove $h$ è la quota rispetto a un livello di riferimento (che poniamo a $h=0$ nel punto A).</p>
<p>Il lavoro compiuto dalla forza peso per andare da A a B è:</p>
<p>$$W_P = -\\Delta E_p = -(E_{p,\\text{finale}} - E_{p,\\text{iniziale}}) = -(mgh - 0) = -mgh$$</p>
<p>Questo è lo <strong>stesso risultato</strong> ottenuto con l'integrale, ma calcolato in modo molto più rapido!</p>`
                }
            ],
            formulas: [
                { label: "Lavoro di una forza conservativa", latex: "W_{A \\to B}^{\\text{cons}} = -\\Delta E_p = -(E_{p,B} - E_{p,A})" },
                { label: "Energia potenziale gravitazionale", latex: "E_p = mgh" }
            ]
        },
        {
            id: "s15-conservazione-energia-meccanica",
            type: "section",
            title: "Conservazione dell'Energia Meccanica",
            icon: "⚖️",
            content: `<p>Questo è il <strong>punto fondamentale della lezione</strong>. Se in un sistema agiscono solo forze conservative, possiamo combinare il teorema dell'energia cinetica con la definizione di lavoro conservativo per ottenere un principio potentissimo.</p>`,
            subsections: [
                {
                    subtitle: "Energia meccanica",
                    content: `<p>Si definisce <strong>energia meccanica</strong> ($E_m$) di un sistema la somma della sua energia cinetica e della sua energia potenziale:</p>
<p>$$E_m = E_k + E_p$$</p>`
                },
                {
                    subtitle: "Teorema di conservazione",
                    content: `<p><strong>In un sistema isolato in cui agiscono solo forze conservative, l'energia meccanica totale si conserva:</strong></p>
<p>$$\\Delta E_m = 0 \\quad \\iff \\quad E_{m,\\text{iniziale}} = E_{m,\\text{finale}}$$</p>
<p>Ciò si traduce nella forma operativa:</p>
<p>$$E_{k,i} + E_{p,i} = E_{k,f} + E_{p,f}$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Partiamo dal teorema dell'energia cinetica: $W_{\\text{tot}} = \\Delta E_k$.</p>
<p>Se tutte le forze agenti sono conservative, il lavoro totale è $W_{\\text{tot}} = W_{\\text{cons}}$. Per definizione, il lavoro delle forze conservative è $W_c = -\\Delta E_p$.</p>
<p>Uguagliando le due espressioni per il lavoro:</p>
<p>$$\\Delta E_k = -\\Delta E_p$$</p>
<p>$$E_{k,f} - E_{k,i} = -(E_{p,f} - E_{p,i})$$</p>
<p>$$E_{k,f} - E_{k,i} = -E_{p,f} + E_{p,i}$$</p>
<p>$$E_{k,f} + E_{p,f} = E_{k,i} + E_{p,i}$$</p>
<p>Utilizzando la definizione di energia meccanica ($E_m = E_k + E_p$):</p>
<p>$$E_{m,f} = E_{m,i} \\Rightarrow \\Delta E_m = 0$$</p>
<p><strong>L'energia meccanica si conserva.</strong></p>`
                },
                {
                    subtitle: "Esempio: piano inclinato con conservazione dell'energia",
                    content: `<p>Applichiamo il principio al problema del piano inclinato (senza attrito).</p>
<p><strong>Stato iniziale (punto A):</strong> Scegliamo il livello $h=0$ in A.</p>
<p>$$E_{m,i} = E_{k,i} + E_{p,i} = \\frac{1}{2}mv_0^2 + 0$$</p>
<p><strong>Stato finale (punto B):</strong> Il corpo è fermo ($v_f = 0$) a quota $h$.</p>
<p>$$E_{m,f} = E_{k,f} + E_{p,f} = 0 + mgh$$</p>
<p>Poiché agisce solo la forza peso (conservativa), $E_{m,i} = E_{m,f}$:</p>
<p>$$\\frac{1}{2}mv_0^2 = mgh$$</p>
<p>$$h = \\frac{v_0^2}{2g}$$</p>
<p>Otteniamo lo stesso risultato in modo <strong>ancora più diretto</strong>, senza calcolare esplicitamente il lavoro, ma semplicemente confrontando l'energia meccanica nei due stati.</p>`
                }
            ],
            formulas: [
                { label: "Energia meccanica", latex: "E_m = E_k + E_p" },
                { label: "Conservazione dell'energia meccanica", latex: "E_{k,i} + E_{p,i} = E_{k,f} + E_{p,f}" }
            ]
        },
        {
            id: "s15-energia-potenziale-elastica",
            type: "section",
            title: "Energia Potenziale Elastica",
            icon: "🔧",
            content: `<p>Un altro esempio fondamentale di forza conservativa è la <strong>forza elastica</strong> di una molla, descritta dalla legge di Hooke ($\\vec{F} = -k\\vec{x}$).</p>
<p>Quando comprimiamo o allunghiamo una molla, compiamo lavoro su di essa. Questa energia non viene persa, ma <strong>immagazzinata</strong> nel sistema sotto forma di energia potenziale elastica. La molla accumula la capacità di compiere lavoro positivo in seguito, quando verrà rilasciata.</p>`,
            subsections: [
                {
                    subtitle: "Formula dell'energia potenziale elastica",
                    content: `<p>L'energia potenziale immagazzinata in una molla di costante elastica $k$, deformata di una quantità $x$ rispetto alla sua posizione di riposo, è:</p>
<p>$$E_{p,\\text{el}} = \\frac{1}{2}kx^2$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Il lavoro compiuto dalla forza elastica ($\\vec{F} = -k\\vec{x}$) per portare la molla da deformazione 0 a $x$ è:</p>
<p>$$W = \\int_0^x (-kx')\\,dx' = -\\frac{1}{2}kx^2$$</p>
<p>Poiché la forza elastica è conservativa, $W = -\\Delta E_p = -(E_p(x) - E_p(0))$. Ponendo per convenzione $E_p(0) = 0$:</p>
<p>$$E_p(x) = -W = \\frac{1}{2}kx^2$$</p>`
                },
                {
                    subtitle: "Scambio di energia nell'oscillatore armonico",
                    content: `<p>Nel moto di un oscillatore armonico (massa attaccata a una molla), l'energia meccanica totale $E_m = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$ si conserva. L'energia si trasforma continuamente:</p>
<p><strong>Agli estremi del moto</strong> ($v = 0$): tutta l'energia è potenziale elastica.</p>
<p><strong>Al centro</strong> ($x = 0$, velocità massima): tutta l'energia è cinetica.</p>
<p>La somma rimane sempre costante.</p>`
                }
            ],
            formulas: [
                { label: "Energia potenziale elastica", latex: "E_{p,\\text{el}} = \\frac{1}{2}kx^2" },
                { label: "Energia meccanica oscillatore armonico", latex: "E_m = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\text{costante}" }
            ]
        },
        {
            id: "s15-ek-vs-ep",
            type: "note_box",
            title: "Energia Cinetica vs. Energia Potenziale",
            icon: "💡",
            content: `<p>È utile distinguere concettualmente queste due forme di energia:</p>
<p><strong>Energia Cinetica ($E_k$):</strong> è l'energia associata al <strong>moto</strong> di un corpo. Un corpo possiede energia cinetica se si sta muovendo.</p>
<p><strong>Energia Potenziale ($E_p$):</strong> è l'energia associata alla <strong>configurazione</strong> di un sistema, cioè alla posizione relativa delle sue parti (es. la distanza tra un oggetto e la Terra, o la compressione di una molla). Rappresenta il "potenziale" che il sistema ha di compiere lavoro a causa della sua configurazione.</p>`
        },
        {
            id: "s15-forze-non-conservative",
            type: "section",
            title: "Forze Non Conservative e Variazione dell'Energia Meccanica",
            icon: "🔥",
            content: `<p>Abbiamo visto che il concetto di energia potenziale è strettamente legato alle forze conservative. Ma cosa succede se nel sistema agiscono anche forze <strong>non conservative</strong>, come l'attrito?</p>
<p>Il concetto di energia potenziale può essere definito <strong>solo</strong> per le forze conservative. Per una forza non conservativa, come l'attrito, il lavoro compiuto dipende dal percorso e non può essere espresso come variazione di una funzione di stato.</p>
<p>In presenza di forze non conservative, l'energia meccanica del sistema <strong>non si conserva</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Teorema dell'Energia Meccanica (Forma Generale)",
                    content: `<p>In un sistema in cui agiscono sia forze conservative ($W_c$) che forze non conservative ($W_{nc}$), la variazione dell'energia meccanica totale $\\Delta E_m$ è uguale al lavoro compiuto dalle <strong>sole forze non conservative</strong>:</p>
<p>$$W_{nc} = \\Delta E_m = \\Delta E_k + \\Delta E_p$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Il lavoro totale compiuto sul sistema è la somma dei lavori delle forze conservative e non conservative:</p>
<p>$$W_{\\text{tot}} = W_c + W_{nc}$$</p>
<p>Dal teorema dell'energia cinetica: $W_{\\text{tot}} = \\Delta E_k$.</p>
<p>$$\\Delta E_k = W_c + W_{nc}$$</p>
<p>Per definizione, il lavoro delle forze conservative è $W_c = -\\Delta E_p$. Sostituendo:</p>
<p>$$\\Delta E_k = -\\Delta E_p + W_{nc}$$</p>
<p>Riorganizzando:</p>
<p>$$W_{nc} = \\Delta E_k + \\Delta E_p = \\Delta E_m$$</p>`
                },
                {
                    subtitle: "Interpretazione fisica",
                    content: `<p>Se $W_{nc} \\gt 0$: l'energia meccanica del sistema <strong>aumenta</strong> (una forza esterna sta fornendo energia).</p>
<p>Se $W_{nc} \\lt 0$: l'energia meccanica del sistema <strong>diminuisce</strong>. Questo è il caso tipico delle forze dissipative come l'attrito, che compiono lavoro negativo e "dissipano" energia meccanica trasformandola in calore.</p>
<p>Se $W_{nc} = 0$: si ritorna al caso della conservazione dell'energia meccanica.</p>`
                },
                {
                    subtitle: "Esempio: Piano inclinato con attrito",
                    content: `<p>Consideriamo nuovamente il blocco lanciato sul piano inclinato, ma questa volta in presenza di una forza di <strong>attrito dinamico</strong> con coefficiente $\\mu_d$. Vogliamo calcolare la nuova altezza massima $h'$ raggiunta.</p>
<p>Applichiamo il teorema: $W_{nc} = \\Delta E_m$.</p>
<p><strong>Lavoro non conservativo:</strong> l'unica forza non conservativa è l'attrito. La forza di attrito è $F_{att} = \\mu_d N = \\mu_d mg\\cos\\theta$, diretta in verso opposto al moto. Se $x'_B$ è lo spazio percorso lungo il piano:</p>
<p>$$W_{nc} = W_{att} = -F_{att} \\cdot x'_B = -\\mu_d mg\\cos\\theta \\cdot x'_B$$</p>
<p><strong>Variazione di energia meccanica:</strong></p>
<p>Stato iniziale: $E_{m,i} = \\frac{1}{2}mv_0^2 + 0$</p>
<p>Stato finale: $E_{m,f} = 0 + mgh'$</p>
<p>$$\\Delta E_m = mgh' - \\frac{1}{2}mv_0^2$$</p>
<p><strong>Soluzione:</strong> uguagliamo le due espressioni:</p>
<p>$$-\\mu_d mg\\cos\\theta \\cdot x'_B = mgh' - \\frac{1}{2}mv_0^2$$</p>
<p>Usando la relazione $h' = x'_B \\sin\\theta$, quindi $x'_B = \\frac{h'}{\\sin\\theta}$:</p>
<p>$$-\\mu_d mg\\cos\\theta \\cdot \\frac{h'}{\\sin\\theta} = mgh' - \\frac{1}{2}mv_0^2$$</p>
<p>$$-\\mu_d mg\\cot\\theta \\cdot h' = mgh' - \\frac{1}{2}mv_0^2$$</p>
<p>Risolviamo per $h'$:</p>
<p>$$\\frac{1}{2}mv_0^2 = mgh' + \\mu_d mg\\cot\\theta \\cdot h'$$</p>
<p>$$\\frac{1}{2}v_0^2 = gh'(1 + \\mu_d \\cot\\theta)$$</p>
<p>$$h' = \\frac{v_0^2}{2g(1 + \\mu_d \\cot\\theta)}$$</p>
<p>Il denominatore è maggiore di $2g$, quindi $h' \\lt h = \\frac{v_0^2}{2g}$, come ci aspettavamo. L'attrito ha compiuto lavoro negativo, causando una <strong>diminuzione dell'energia meccanica</strong>. L'energia "persa" non è stata distrutta, ma trasformata in calore (come vedremo in termodinamica).</p>`
                }
            ],
            formulas: [
                { label: "Teorema energia meccanica (generale)", latex: "W_{nc} = \\Delta E_m = \\Delta E_k + \\Delta E_p" },
                { label: "Quota massima con attrito", latex: "h' = \\frac{v_0^2}{2g(1 + \\mu_d \\cot\\theta)}" }
            ]
        },
        {
            id: "s15-attrito-dissipa",
            type: "alert_box",
            title: "L'attrito dissipa energia meccanica!",
            icon: "⚠️",
            content: `<p>Un errore comune è dimenticare che in presenza di attrito l'energia meccanica <strong>non si conserva</strong>. Non si può scrivere $E_{m,i} = E_{m,f}$ se ci sono forze non conservative! Bisogna usare la forma generale:</p>
<p>$$W_{nc} = \\Delta E_m$$</p>
<p>Il lavoro dell'attrito è <strong>sempre negativo</strong> (forza opposta allo spostamento), quindi l'energia meccanica <strong>diminuisce sempre</strong> in presenza di attrito.</p>`
        },
        {
            id: "s15-potenza",
            type: "section",
            title: "Potenza",
            icon: "⏱️",
            content: `<p>In molti fenomeni meccanici, non è importante solo la quantità di lavoro compiuto (o di energia trasferita), ma anche la <strong>rapidità</strong> con cui questo avviene.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di potenza",
                    content: `<p>La <strong>potenza</strong> ($P$) è definita come il rapporto tra il lavoro $W$ compiuto e l'intervallo di tempo $\\Delta t$ impiegato per compierlo. Rappresenta la rapidità con cui l'energia viene trasferita o trasformata:</p>
<p>$$P = \\frac{W}{\\Delta t}$$</p>
<p>Se la potenza non è costante, si definisce la <strong>potenza istantanea</strong> come:</p>
<p>$$P(t) = \\frac{dW}{dt}$$</p>
<p>L'unità di misura nel Sistema Internazionale è il <strong>Watt</strong> (W): $1\\,\\text{W} = 1\\,\\frac{\\text{J}}{\\text{s}}$.</p>`
                },
                {
                    subtitle: "Potenza come prodotto scalare forza-velocità",
                    content: `<p>La potenza può anche essere espressa in funzione della forza e della velocità. Poiché il lavoro infinitesimo è $dW = \\vec{F} \\cdot d\\vec{s}$:</p>
<p>$$P = \\frac{dW}{dt} = \\frac{\\vec{F} \\cdot d\\vec{s}}{dt} = \\vec{F} \\cdot \\frac{d\\vec{s}}{dt} = \\vec{F} \\cdot \\vec{v}$$</p>
<p>La potenza istantanea è il <strong>prodotto scalare</strong> tra la forza applicata e la velocità del corpo.</p>`
                },
                {
                    subtitle: "Esempio: automobile con potenza costante",
                    content: `<p>Un'automobile di massa $m$ accelera da una velocità $v_0$ in un tempo $\\Delta t$, grazie a un motore che eroga una potenza costante $P$. Calcoliamo la velocità finale $v_f$.</p>
<p>Il lavoro compiuto dal motore è $W = P \\cdot \\Delta t$. Questo lavoro produce una variazione di energia cinetica:</p>
<p>$$W = \\Delta E_k = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_0^2$$</p>
<p>Uguagliando:</p>
<p>$$P \\cdot \\Delta t = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_0^2$$</p>
<p>$$\\frac{1}{2}mv_f^2 = P \\cdot \\Delta t + \\frac{1}{2}mv_0^2$$</p>
<p>$$v_f = \\sqrt{v_0^2 + \\frac{2P\\Delta t}{m}}$$</p>
<p>La velocità finale dipende dalla potenza del motore, dal tempo di accelerazione e dalla massa del veicolo.</p>`
                }
            ],
            formulas: [
                { label: "Potenza media", latex: "P = \\frac{W}{\\Delta t}" },
                { label: "Potenza istantanea", latex: "P(t) = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}" },
                { label: "Velocità finale (potenza costante)", latex: "v_f = \\sqrt{v_0^2 + \\frac{2P\\Delta t}{m}}" }
            ]
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Enuncia il teorema dell'energia cinetica.",
            back: "Il lavoro totale $W$ compiuto su un corpo è uguale alla variazione della sua energia cinetica: $W = \\Delta E_k = E_{k,f} - E_{k,i}$."
        },
        {
            type: "definizione",
            front: "Quando una forza si dice conservativa?",
            back: "Una forza $\\vec{F}$ è conservativa se il lavoro che compie per spostare un corpo da A a B può essere espresso come la variazione, cambiata di segno, di una funzione della sola posizione chiamata energia potenziale: $W_{A \\to B}^{\\text{cons}} = -\\Delta E_p = -(E_{p,B} - E_{p,A})$."
        },
        {
            type: "definizione",
            front: "Cos'è l'energia meccanica e quando si conserva?",
            back: "L'energia meccanica è la somma di energia cinetica e potenziale: $E_m = E_k + E_p$. Si conserva quando nel sistema agiscono solo forze conservative: $E_{k,i} + E_{p,i} = E_{k,f} + E_{p,f}$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra il principio di conservazione dell'energia meccanica.",
            back: "Dal teorema dell'energia cinetica: $W_{\\text{tot}} = \\Delta E_k$. Se tutte le forze sono conservative: $W_{\\text{tot}} = W_c = -\\Delta E_p$. Quindi $\\Delta E_k = -\\Delta E_p$, cioè $E_{k,f} - E_{k,i} = -(E_{p,f} - E_{p,i})$, da cui $E_{k,f} + E_{p,f} = E_{k,i} + E_{p,i}$, ovvero $\\Delta E_m = 0$."
        },
        {
            type: "formula",
            front: "Qual è l'energia potenziale elastica di una molla?",
            back: "L'energia potenziale elastica è $E_{p,\\text{el}} = \\frac{1}{2}kx^2$, dove $k$ è la costante elastica e $x$ è la deformazione rispetto alla posizione di riposo. Si ricava dal lavoro della forza elastica: $W = \\int_0^x (-kx')dx' = -\\frac{1}{2}kx^2$, e poiché $W = -\\Delta E_p$, si ottiene $E_p(x) = \\frac{1}{2}kx^2$."
        },
        {
            type: "domanda",
            front: "Cosa succede all'energia meccanica in presenza di forze non conservative?",
            back: "L'energia meccanica non si conserva. La sua variazione è pari al lavoro delle sole forze non conservative: $W_{nc} = \\Delta E_m = \\Delta E_k + \\Delta E_p$. Se l'attrito è l'unica forza non conservativa, $W_{nc} \\lt 0$ e l'energia meccanica diminuisce."
        },
        {
            type: "tranello",
            front: "Un corpo lanciato su un piano inclinato senza attrito raggiunge una quota h. Questa quota dipende dall'angolo del piano?",
            back: "No! La quota massima è $h = \\frac{v_0^2}{2g}$ e dipende solo dalla velocità iniziale, non dall'angolo né dalla massa. È un risultato che discende direttamente dalla conservazione dell'energia meccanica. Un errore comune è pensare che piani più ripidi portino a quote diverse."
        },
        {
            type: "domanda",
            front: "Come si definisce la potenza e quali sono le sue espressioni?",
            back: "La potenza è la rapidità con cui si compie lavoro: $P = \\frac{W}{\\Delta t}$ (media) oppure $P(t) = \\frac{dW}{dt}$ (istantanea). Si può anche scrivere come $P = \\vec{F} \\cdot \\vec{v}$. L'unità di misura è il Watt: $1\\,\\text{W} = 1\\,\\text{J/s}$."
        },
        {
            type: "tranello",
            front: "Si può definire un'energia potenziale per la forza di attrito?",
            back: "No! L'energia potenziale può essere definita solo per le forze conservative. L'attrito è una forza non conservativa perché il suo lavoro dipende dal percorso seguito, non solo dai punti iniziale e finale. Per l'attrito si deve calcolare il lavoro esplicitamente lungo il percorso."
        },
        {
            type: "domanda",
            front: "In un oscillatore armonico, come si trasforma l'energia durante il moto?",
            back: "L'energia meccanica totale $E_m = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$ è costante. Agli estremi del moto ($v=0$) tutta l'energia è potenziale elastica. Al centro ($x=0$, velocità massima) tutta l'energia è cinetica. C'è una continua conversione tra le due forme, ma la somma resta invariata."
        }
    ]
};

