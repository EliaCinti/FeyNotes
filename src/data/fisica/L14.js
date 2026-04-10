const LESSON = {
    id: "L14", date: "Lezione 14 — 8 Apr 2026",
    title: "Lavoro, Energia Cinetica e Forze Conservative",
    abstract: "Dai limiti dell'approccio vettoriale alla definizione di lavoro come prodotto scalare forza-spostamento. Dimostrazione del teorema dell'energia cinetica. Confronto con il teorema dell'impulso. Energia potenziale gravitazionale ed elastica. Classificazione delle forze in conservative e dissipative.",

    sections: [
        {
            id: "s14-introduzione",
            type: "section",
            title: "Perché introdurre Lavoro ed Energia?",
            icon: "💡",
            content: `<p>Finora lo studio della dinamica si è basato sulla seconda legge di Newton, $\\vec{F} = m\\vec{a}$, un'equazione <strong>vettoriale</strong> che descrive completamente il moto. Tuttavia, in molti fenomeni fisici non ci interessa conoscere l'evoluzione completa del vettore velocità $\\vec{v}$ (modulo, direzione e verso), ma soltanto la variazione del suo <strong>modulo</strong>, ovvero la rapidità del moto.</p>
<p>Pensiamo al pendolo di Newton: quando una sferetta urta la seconda, la quota raggiunta dalla seconda dipende dalla <strong>rapidità</strong> con cui è stata urtata, non dalla direzione esatta del moto. La domanda è: è possibile derivare dalla legge $\\vec{F} = m\\vec{a}$ delle <strong>relazioni scalari</strong>, più semplici da gestire, che descrivano unicamente le variazioni del modulo della velocità?</p>
<p>Per rispondere, dobbiamo identificare quale parte dell'azione di una forza è responsabile delle variazioni di rapidità.</p>`,
            subsections: [
                {
                    subtitle: "Scomposizione dell'accelerazione e della forza",
                    content: `<p>Ricordiamo la scomposizione del vettore accelerazione nelle componenti tangenziale e normale alla traiettoria:</p>
<p>$$\\vec{a} = \\vec{a}_t + \\vec{a}_n = \\frac{dv}{dt}\\hat{\\tau} + \\frac{v^2}{\\rho}\\hat{n}$$</p>
<p>dove $v = \\|\\vec{v}\\|$ è il modulo della velocità, $\\hat{\\tau}$ è il versore tangente e $\\hat{n}$ il versore normale. Moltiplicando per la massa $m$:</p>
<p>$$\\vec{F} = m\\vec{a} = m\\vec{a}_t + m\\vec{a}_n = \\vec{F}_t + \\vec{F}_n$$</p>
<p>Da questa scomposizione ricaviamo un'informazione <strong>fondamentale</strong>:</p>
<ul>
<li>La <strong>componente tangenziale</strong> $\\vec{F}_t$ è la sola responsabile delle variazioni del <strong>modulo</strong> della velocità.</li>
<li>La <strong>componente normale</strong> $\\vec{F}_n$ è la sola responsabile delle variazioni della <strong>direzione</strong> della velocità.</li>
</ul>
<p>Se vogliamo studiare le variazioni di rapidità, dobbiamo concentrarci su $\\vec{F}_t$. L'effetto di questa forza dipende non solo dalla sua intensità, ma anche da <strong>quanto a lungo</strong> agisce sul corpo mentre si sposta: più lungo è il tratto di traiettoria su cui la forza agisce, maggiore sarà il suo effetto sulla rapidità.</p>`
                }
            ]
        },
        {
            id: "s14-definizione-lavoro",
            type: "section",
            title: "Definizione di Lavoro di una Forza",
            icon: "⚙️",
            content: `<p>L'intuizione della sezione precedente ci porta a definire una nuova grandezza fisica che quantifichi l'"azione" della forza lungo uno spostamento.</p>`,
            subsections: [
                {
                    subtitle: "Lavoro elementare",
                    content: `<p>Si definisce <strong>lavoro elementare</strong> $dL$ compiuto da una forza $\\vec{F}$ su un corpo che subisce uno spostamento infinitesimo $d\\vec{s}$ come il <strong>prodotto scalare</strong> tra il vettore forza e il vettore spostamento:</p>
<p>$$dL = \\vec{F} \\cdot d\\vec{s}$$</p>
<p>Essendo un prodotto scalare, il lavoro è una grandezza <strong>scalare</strong>. Se $\\theta$ è l'angolo tra $\\vec{F}$ e $d\\vec{s}$:</p>
<p>$$dL = \\|\\vec{F}\\| \\, \\|d\\vec{s}\\| \\cos\\theta = F_t \\, ds$$</p>
<p>dove $F_t = F \\cos\\theta$ è la componente della forza lungo la direzione dello spostamento e $ds = \\|d\\vec{s}\\|$.</p>`
                },
                {
                    subtitle: "Segno del lavoro",
                    content: `<p>Il segno del lavoro dipende dall'angolo $\\theta$ tra forza e spostamento:</p>
<ul>
<li>Se $0 \\le \\theta \\lt \\pi/2$, allora $\\cos\\theta \\gt 0$ e $dL \\gt 0$: lavoro <strong>motore</strong>. La forza tende a far aumentare la rapidità.</li>
<li>Se $\\theta = \\pi/2$, allora $\\cos\\theta = 0$ e $dL = 0$: lavoro <strong>nullo</strong>. La forza è perpendicolare allo spostamento.</li>
<li>Se $\\pi/2 \\lt \\theta \\le \\pi$, allora $\\cos\\theta \\lt 0$ e $dL \\lt 0$: lavoro <strong>resistente</strong>. La forza tende a far diminuire la rapidità.</li>
</ul>`
                },
                {
                    subtitle: "Lavoro lungo una traiettoria generica",
                    content: `<p>Per calcolare il lavoro totale compiuto da una forza (che può variare lungo il percorso) su un corpo che si sposta da A a B lungo una traiettoria generica $\\gamma$, sommiamo tutti i contributi elementari tramite un <strong>integrale di linea</strong>:</p>
<p>$$L_{A \\to B} = \\int_{A}^{B} \\vec{F} \\cdot d\\vec{s}$$</p>`
                }
            ],
            formulas: [
                { label: "Lavoro elementare", latex: "dL = \\vec{F} \\cdot d\\vec{s} = F \\cos\\theta \\, ds" },
                { label: "Lavoro lungo traiettoria", latex: "L_{A \\to B} = \\int_{A}^{B} \\vec{F} \\cdot d\\vec{s}" }
            ]
        },
        {
            id: "s14-teorema-energia-cinetica",
            type: "section",
            title: "Teorema dell'Energia Cinetica (Forze Vive)",
            icon: "⚡",
            content: `<p>Ora cerchiamo la relazione diretta tra il lavoro compiuto su un corpo e la variazione della sua rapidità. Questo è il cuore della lezione.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato del teorema",
                    content: `<p>Il lavoro compiuto dalla <strong>forza risultante</strong> su un punto materiale, mentre si sposta da A a B, è uguale alla variazione della sua energia cinetica:</p>
<p>$$L_{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}$$</p>
<p>dove l'energia cinetica è definita come:</p>
<p>$$E_k = \\frac{1}{2} m v^2$$</p>`
                },
                {
                    subtitle: "Dimostrazione completa",
                    content: `<p>Partiamo dalla definizione di lavoro elementare e sostituiamo la seconda legge di Newton $\\vec{F} = m\\vec{a}$:</p>
<p>$$dL = m\\vec{a} \\cdot d\\vec{s}$$</p>
<p>Solo la componente tangenziale della forza compie lavoro:</p>
<p>$$dL = F_t \\, ds$$</p>
<p>dove $F_t = m a_t = m \\frac{dv}{dt}$ e $ds$ è il modulo dello spostamento infinitesimo. Poiché $v = \\frac{ds}{dt}$, possiamo scrivere $ds = v \\, dt$. Sostituendo:</p>
<p>$$dL = \\left( m \\frac{dv}{dt} \\right)(v \\, dt) = m v \\, dv$$</p>
<p>Questa relazione è <strong>fondamentale</strong>: il lavoro elementare è direttamente proporzionale alla variazione infinitesima di velocità, pesata dalla velocità stessa.</p>
<p>Integrando tra il punto iniziale A e il punto finale B:</p>
<p>$$L_{A \\to B} = \\int_{v_A}^{v_B} m v \\, dv = m \\left[ \\frac{1}{2} v^2 \\right]_{v_A}^{v_B} = \\frac{1}{2} m v_B^2 - \\frac{1}{2} m v_A^2$$</p>
<p>Definendo l'<strong>energia cinetica</strong> $E_k = \\frac{1}{2} m v^2$, otteniamo la tesi:</p>
<p>$$L_{A \\to B} = E_{k,B} - E_{k,A} = \\Delta E_k$$</p>`
                },
                {
                    subtitle: "Interpretazione: lavoro come trasferimento di energia",
                    content: `<p>Il teorema ci offre un'interpretazione fisica profonda, con un'analogia bancaria molto efficace:</p>
<ul>
<li>L'<strong>energia cinetica</strong> è una forma di energia <strong>contenuta</strong> nel sistema, legata al suo stato di moto. È come il <strong>saldo</strong> di un conto in banca.</li>
<li>Il <strong>lavoro</strong> è una forma di energia <strong>trasferita</strong> a (o da) un sistema. È come un <strong>versamento o un prelievo</strong>.</li>
</ul>
<p>Se $L \\gt 0$: l'energia cinetica aumenta (la rapidità cresce).</p>
<p>Se $L \\lt 0$: l'energia cinetica diminuisce (la rapidità cala).</p>
<p>Se $L = 0$: l'energia cinetica (e la rapidità) resta costante.</p>`
                }
            ],
            formulas: [
                { label: "Teorema dell'energia cinetica", latex: "L_{A \\to B} = \\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2 = \\Delta E_k" },
                { label: "Energia cinetica", latex: "E_k = \\frac{1}{2} m v^2" },
                { label: "Passaggio chiave della dimostrazione", latex: "dL = m v \\, dv" }
            ]
        },
        {
            id: "s14-unita-formalismo",
            type: "note_box",
            title: "Unità di Misura e Formalismo",
            icon: "📐",
            content: `<p>Sia il lavoro che l'energia cinetica si misurano in <strong>Joule</strong> (J) nel Sistema Internazionale:</p>
<p>$$1 \\text{ J} = 1 \\text{ N} \\cdot \\text{m}$$</p>
<p>Attenzione alla natura delle grandezze:</p>
<ul>
<li>Il lavoro $L$ e l'energia cinetica $E_k$ sono grandezze <strong>scalari</strong>. Non ha senso scrivere $\\vec{L}$ o $\\vec{E}_k$.</li>
<li>La definizione di lavoro <strong>non è</strong> "forza per spostamento", ma il <strong>prodotto scalare</strong> tra il vettore forza e il vettore spostamento.</li>
<li>Il prodotto tra grandezze scalari si indica senza simbolo (es. $mv^2$). Il puntino ($\\cdot$) è riservato al prodotto scalare tra vettori, la croce ($\\times$) al prodotto vettoriale.</li>
</ul>`
        },
        {
            id: "s14-confronto-impulso",
            type: "section",
            title: "Confronto: Teorema dell'Energia Cinetica vs Teorema dell'Impulso",
            icon: "⚖️",
            content: `<p>Due teoremi che discendono dalla stessa legge $\\vec{F} = m\\vec{a}$ ma catturano aspetti <strong>molto diversi</strong> della dinamica.</p>`,
            subsections: [
                {
                    subtitle: "Teorema dell'energia cinetica (scalare)",
                    content: `<p>$$L = \\Delta E_k = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$</p>
<p>Qui $v$ è il <strong>modulo</strong> della velocità (la <em>speed</em>). Il teorema mette in relazione il lavoro con le variazioni del <strong>modulo</strong> della velocità, ma non fornisce informazioni sulla <strong>direzione</strong>.</p>`
                },
                {
                    subtitle: "Teorema dell'impulso (vettoriale)",
                    content: `<p>$$\\vec{J} = \\Delta \\vec{p} = m\\vec{v}_f - m\\vec{v}_i$$</p>
<p>Qui $\\vec{v}$ è il <strong>vettore</strong> velocità. Questo teorema descrive la variazione completa dello stato di moto, includendo cambiamenti sia nel modulo sia nella direzione e verso.</p>`
                },
                {
                    subtitle: "Esempio chiave: Moto Circolare Uniforme",
                    content: `<p>Questo esempio chiarisce perfettamente la differenza tra i due teoremi:</p>
<ul>
<li><strong>Energia Cinetica e Lavoro</strong>: $|\\vec{v}|$ è costante $\\Rightarrow$ $E_k = \\frac{1}{2}mv^2$ è costante $\\Rightarrow$ $\\Delta E_k = 0$ $\\Rightarrow$ $L = 0$. Coerente: la forza centripeta è sempre perpendicolare allo spostamento!</li>
<li><strong>Quantità di moto e Impulso</strong>: $\\vec{v}$ cambia continuamente direzione $\\Rightarrow$ $\\vec{p} = m\\vec{v}$ non è costante $\\Rightarrow$ $\\Delta\\vec{p} \\neq \\vec{0}$ $\\Rightarrow$ $\\vec{J} \\neq \\vec{0}$.</li>
</ul>
<p>Il teorema dell'energia cinetica cattura solo le variazioni di "intensità" del moto; il teorema dell'impulso descrive la variazione completa dello stato di moto.</p>`
                }
            ],
            table_compare: {
                headers: ["Proprietà", "Teorema Energia Cinetica", "Teorema dell'Impulso"],
                rows: [
                    ["Natura", "Scalare", "Vettoriale"],
                    ["Grandezza causa", "Lavoro $L$", "Impulso $\\vec{J}$"],
                    ["Grandezza effetto", "$\\Delta E_k = \\Delta(\\frac{1}{2}mv^2)$", "$\\Delta\\vec{p} = \\Delta(m\\vec{v})$"],
                    ["Cosa descrive", "Variazione del modulo di $\\vec{v}$", "Variazione completa di $\\vec{v}$"],
                    ["MCU: risultato", "$L = 0$", "$\\vec{J} \\neq \\vec{0}$"]
                ]
            }
        },
        {
            id: "s14-energia-potenziale",
            type: "section",
            title: "Energia Potenziale",
            icon: "🏔️",
            content: `<p>Il concetto di energia può essere inteso come la <strong>capacità di un sistema di compiere lavoro</strong>. Quando solleviamo un oggetto, trasferiamo energia al sistema Terra-oggetto, conferendogli la capacità di compiere lavoro (se lasciato cadere, la gravità lo accelererà).</p>`,
            subsections: [
                {
                    subtitle: "Lavoro della Forza Peso",
                    content: `<p>Consideriamo un oggetto di massa $m$ spostato da quota $z_A$ a quota $z_B$ lungo la verticale. La forza peso è $\\vec{P} = -mg\\hat{k}$ e lo spostamento infinitesimo è $d\\vec{s} = dz\\,\\hat{k}$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Spostamento verticale nel campo gravitazionale</strong></p>
  <p><em>Oggetto di massa m che si sposta da quota z_A a z_B, con la forza peso P diretta verso il basso e lo spostamento ds verso l'alto.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Calcoliamo il lavoro:</p>
<p>$$L_{AB} = \\int_{z_A}^{z_B} (-mg) \\, dz = -mg[z]_{z_A}^{z_B} = -mg(z_B - z_A) = mgz_A - mgz_B$$</p>
<p>Il risultato dipende <strong>esclusivamente</strong> dalle quote iniziale e finale, non dal percorso seguito. Questo ci permette di definire l'<strong>energia potenziale gravitazionale</strong>:</p>
<p>$$U_g(z) = mgz$$</p>
<p>Il lavoro della forza peso si scrive allora come:</p>
<p>$$L_{AB} = U_g(z_A) - U_g(z_B) = -\\Delta U_g$$</p>`
                },
                {
                    subtitle: "Lavoro della Forza Elastica",
                    content: `<p>Consideriamo una massa collegata a una molla di costante elastica $k$ con posizione di riposo in $x = 0$. La forza elastica (legge di Hooke) è $\\vec{F}_{el} = -kx\\hat{i}$ e lo spostamento infinitesimo è $d\\vec{s} = dx\\,\\hat{i}$.</p>
<p>$$L_{AB} = \\int_{x_A}^{x_B} (-kx) \\, dx = -k\\left[\\frac{1}{2}x^2\\right]_{x_A}^{x_B} = -\\left(\\frac{1}{2}kx_B^2 - \\frac{1}{2}kx_A^2\\right)$$</p>
<p>Anche in questo caso il lavoro dipende solo dalle posizioni iniziale e finale. Definiamo l'<strong>energia potenziale elastica</strong>:</p>
<p>$$U_{el}(x) = \\frac{1}{2}kx^2$$</p>
<p>E il lavoro della forza elastica si scrive:</p>
<p>$$L_{AB} = U_{el}(x_A) - U_{el}(x_B) = -\\Delta U_{el}$$</p>`
                }
            ],
            formulas: [
                { label: "Energia potenziale gravitazionale", latex: "U_g(z) = mgz" },
                { label: "Energia potenziale elastica", latex: "U_{el}(x) = \\frac{1}{2}kx^2" },
                { label: "Lavoro di forza conservativa", latex: "L_{AB} = -\\Delta U = U_A - U_B" }
            ]
        },
        {
            id: "s14-forze-conservative",
            type: "section",
            title: "Forze Conservative e Forze Dissipative",
            icon: "🔄",
            content: `<p>Abbiamo visto due forze (peso ed elastica) il cui lavoro non dipende dal cammino percorso. Non tutte le forze hanno questa proprietà.</p>`,
            subsections: [
                {
                    subtitle: "Lavoro della Forza d'Attrito (controesempio)",
                    content: `<p>La forza di attrito dinamico $\\vec{F}_a$ è sempre opposta allo spostamento, con modulo costante $|\\vec{F}_a| = \\mu_d R_N$. Poiché l'angolo tra $\\vec{F}_a$ e $d\\vec{s}$ è sempre $180°$:</p>
<p>$$L_{AB} = \\int_A^B \\vec{F}_a \\cdot d\\vec{s} = -\\mu_d R_N \\int_A^B ds = -\\mu_d R_N \\cdot (\\text{lunghezza del percorso})$$</p>
<p>Il lavoro della forza d'attrito <strong>dipende dal cammino percorso</strong>: un percorso più lungo produce un lavoro (negativo) maggiore in valore assoluto. Impossibile definire un'energia potenziale per questa forza!</p>`
                },
                {
                    subtitle: "Definizione: Forze Conservative",
                    content: `<p>Una forza è <strong>conservativa</strong> se il lavoro che compie per spostare un corpo da A a B dipende <strong>solo</strong> dalle posizioni di A e B, e <strong>non</strong> dal percorso seguito.</p>
<p>Per ogni forza conservativa si può definire una funzione <strong>energia potenziale</strong> $U$ tale che:</p>
<p>$$L_{AB} = -\\Delta U = U_A - U_B$$</p>
<p>Esempi: forza peso, forza elastica, forza gravitazionale di Newton.</p>`
                },
                {
                    subtitle: "Definizione: Forze Non Conservative (Dissipative)",
                    content: `<p>Una forza è <strong>non conservativa</strong> (o <strong>dissipativa</strong>) se il lavoro dipende dal percorso. Per queste forze <strong>non è possibile</strong> definire un'energia potenziale. Esempio classico: la forza d'attrito.</p>`
                },
                {
                    subtitle: "Il significato di \"conservativo\"",
                    content: `<p>Il termine si riferisce al fatto che, in un sistema dove agiscono <strong>solo</strong> forze conservative, l'energia meccanica totale (cinetica + potenziale) si <strong>conserva</strong>.</p>
<p>Pensiamo a un pendolo ideale senza attriti: l'energia si trasforma continuamente da potenziale a cinetica e viceversa, ma la loro somma resta costante e il moto prosegue indefinitamente.</p>
<p>Le forze dissipative come l'attrito tendono a "dissipare" l'energia meccanica, trasformandola in calore. Un oggetto lanciato su una superficie scabra si ferma perché l'attrito compie lavoro negativo azzerando l'energia cinetica.</p>`
                }
            ],
            formulas: [
                { label: "Lavoro dell'attrito", latex: "L_{AB} = -\\mu_d R_N \\cdot (\\text{lunghezza percorso})" }
            ]
        },
        {
            id: "s14-nota-termodinamica",
            type: "note_box",
            title: "Energia Cinetica in Termodinamica",
            icon: "🌡️",
            content: `<p>Il concetto di energia cinetica è universale e attraversa tutta la fisica. In termodinamica, l'<strong>energia interna</strong> di un gas ideale è la somma delle energie cinetiche delle sue molecole. La <strong>temperatura</strong> di un gas è una misura macroscopica dell'energia cinetica media microscopica: le particelle di un corpo caldo si muovono più velocemente, e questa agitazione termica è una forma di energia.</p>`
        },
        {
            id: "s14-trappola-segno",
            type: "alert_box",
            title: "Trappola d'esame: il segno del lavoro",
            icon: "⚠️",
            content: `<p>Un errore frequentissimo è confondere il segno del lavoro. Ricorda:</p>
<ul>
<li>Il lavoro della <strong>forza peso</strong> è $L = -mg\\Delta z = -mg(z_B - z_A)$. Se l'oggetto <strong>sale</strong>, $z_B \\gt z_A$ e il lavoro della forza peso è <strong>negativo</strong> (resistente). Se <strong>scende</strong>, è positivo (motore).</li>
<li>Il lavoro è $L_{AB} = U_A - U_B = -\\Delta U$, cioè l'<strong>opposto</strong> della variazione di energia potenziale. Attenzione al segno meno!</li>
<li>Una forza perpendicolare allo spostamento compie lavoro <strong>nullo</strong>, anche se è intensa (es. forza centripeta, reazione vincolare su piano orizzontale).</li>
</ul>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Definisci il lavoro elementare di una forza e spiega perché è una grandezza scalare.",
            back: "Il lavoro elementare è il prodotto scalare $dL = \\vec{F} \\cdot d\\vec{s} = F \\cos\\theta \\, ds$. È scalare perché il prodotto scalare di due vettori restituisce uno scalare. Dipende dalla componente della forza nella direzione dello spostamento."
        },
        {
            type: "dimostrazione",
            front: "Dimostra il teorema dell'energia cinetica partendo dalla seconda legge di Newton.",
            back: "Da $dL = \\vec{F} \\cdot d\\vec{s} = m\\vec{a} \\cdot d\\vec{s}$. Solo la componente tangenziale contribuisce: $dL = m\\frac{dv}{dt} \\cdot v\\,dt = mv\\,dv$. Integrando: $L_{A \\to B} = \\int_{v_A}^{v_B} mv\\,dv = \\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2 = \\Delta E_k$."
        },
        {
            type: "domanda",
            front: "Nel moto circolare uniforme, il lavoro della forza centripeta è nullo ma l'impulso no. Perché?",
            back: "Il lavoro è scalare e dipende da $\\cos\\theta$: la forza centripeta è perpendicolare a $d\\vec{s}$, quindi $L=0$ e $|\\vec{v}|$ non cambia. L'impulso è vettoriale: la forza centripeta cambia la direzione di $\\vec{v}$, quindi $\\Delta\\vec{p} \\neq \\vec{0}$ e $\\vec{J} \\neq \\vec{0}$."
        },
        {
            type: "definizione",
            front: "Cosa si intende per forza conservativa? Fai un esempio e un controesempio.",
            back: "Una forza è conservativa se il lavoro da A a B dipende solo dalle posizioni iniziale e finale, non dal percorso. Si può definire un'energia potenziale $U$ tale che $L_{AB} = -\\Delta U$. Esempio: forza peso ($U = mgz$). Controesempio: attrito dinamico, il cui lavoro $L = -\\mu_d R_N \\cdot$(lunghezza percorso) dipende dal cammino."
        },
        {
            type: "formula",
            front: "Scrivi le espressioni dell'energia potenziale gravitazionale e dell'energia potenziale elastica.",
            back: "Energia potenziale gravitazionale: $U_g = mgz$. Energia potenziale elastica: $U_{el} = \\frac{1}{2}kx^2$, dove $x$ è la deformazione rispetto alla posizione di riposo."
        },
        {
            type: "tranello",
            front: "\"Il lavoro è forza per spostamento\". Perché questa frase è sbagliata?",
            back: "Il lavoro è il **prodotto scalare** $\\vec{F} \\cdot d\\vec{s}$, non il semplice prodotto dei moduli. Serve il fattore $\\cos\\theta$: $L = F \\cdot s \\cdot \\cos\\theta$. Dire \"forza per spostamento\" ignora l'angolo e suggerirebbe un risultato sempre positivo, il che è falso (il lavoro può essere negativo o nullo)."
        },
        {
            type: "domanda",
            front: "Quale componente della forza è responsabile della variazione del modulo della velocità? E quale della direzione?",
            back: "La componente **tangenziale** $\\vec{F}_t = m\\frac{dv}{dt}\\hat{\\tau}$ varia il modulo della velocità. La componente **normale** $\\vec{F}_n = m\\frac{v^2}{\\rho}\\hat{n}$ varia la direzione. Per questo solo $\\vec{F}_t$ compie lavoro."
        },
        {
            type: "tranello",
            front: "Perché il lavoro della forza d'attrito non permette di definire un'energia potenziale?",
            back: "Perché il lavoro dell'attrito è $L = -\\mu_d R_N \\cdot$(lunghezza del percorso): dipende dal cammino seguito, non solo da posizione iniziale e finale. L'energia potenziale si può definire solo per forze conservative, il cui lavoro è indipendente dal percorso."
        },
        {
            type: "domanda",
            front: "Se il lavoro totale su un corpo è nullo, cosa puoi concludere sul suo moto?",
            back: "Per il teorema dell'energia cinetica, $L = \\Delta E_k = 0$, quindi $\\frac{1}{2}mv_B^2 = \\frac{1}{2}mv_A^2$: il **modulo** della velocità non cambia. Attenzione: la **direzione** può cambiare! (es. moto circolare uniforme, dove $L=0$ ma $\\vec{v}$ cambia direzione)."
        },
        {
            type: "domanda",
            front: "Spiega l'analogia tra energia cinetica/lavoro e il saldo/versamento di un conto in banca.",
            back: "L'energia cinetica è l'energia **contenuta** nel sistema (come il saldo del conto). Il lavoro è l'energia **trasferita** al sistema (come un versamento o prelievo). $L \\gt 0$: versamento, $E_k$ aumenta. $L \\lt 0$: prelievo, $E_k$ diminuisce. $L = 0$: il saldo resta invariato."
        }
    ]
};

