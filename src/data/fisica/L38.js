const LESSON = {
    id: "L38", date: "Lezione 29 — 14 Mag 2026",
    title: "Dinamica del Corpo Rigido: Rotazione attorno a un Asse Fisso",
    abstract: "Spostamenti infinitesimi di un corpo rigido, rotazione attorno a un asse fisso, momento di inerzia, assi principali di inerzia (Teorema di Poinsot), equazione del moto rotazionale M = Iα e il problema dell'equilibratura.",

    sections: [
        {
            id: "s38-spostamenti-infinitesimi",
            type: "section",
            title: "Spostamenti infinitesimi di un corpo rigido",
            icon: "🔄",
            content: `<p>Riprendiamo il discorso lasciato in sospeso nella lezione precedente. Abbiamo visto che il moto più generale di un corpo rigido è una combinazione di traslazioni e rotazioni. Ora enunciamo un principio fondamentale che descrive gli spostamenti su scala infinitesima.</p>
<p><strong>Principio degli spostamenti infinitesimi:</strong> Qualunque spostamento infinitesimo di un corpo rigido, che sia di traslazione, rotazione o roto-traslazione, è descrivibile come la combinazione di una <strong>traslazione infinitesima</strong> e una <strong>rotazione infinitesima</strong> attorno a un asse istantaneo di rotazione.</p>`,
            quote: {
                text: "Questa affermazione, scritta in un italiano un po' «brutto», rende però l'idea fondamentale: per un intervallo di tempo infinitesimo dt, qualsiasi moto complesso di un corpo rigido può essere visto come una semplice rotazione attorno a un asse (che può cambiare da istante a istante) più una traslazione.",
                src: "Nota del Prof."
            },
            subsections: [
                {
                    subtitle: "Esempio: il moto di puro rotolamento",
                    content: `<p>Consideriamo una ruota che avanza rotolando senza strisciare su un piano. Questo moto è detto di <strong>puro rotolamento</strong>.</p>
<p>Nel puro rotolamento, il punto di contatto $O$ tra la ruota e il piano ha istantaneamente velocità nulla (non slitta). Per un intervallo di tempo infinitesimo $dt$, possiamo pensare che l'intera ruota stia compiendo una piccola rotazione attorno al punto di contatto $O$. In questo frangente, $O$ si comporta come un asse di rotazione fisso.</p>

<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Ruota in moto di puro rotolamento</strong></p>
  <p><em>Una ruota di raggio R appoggiata su un piano orizzontale. Centro di massa C con vettore velocità $\\vec{v}_C$ orizzontale (rosso). Punto di contatto O alla base. Freccia curva blu per $\\vec{\\omega}$. Raggio tratteggiato da O a C.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>

<p>Questo moto può essere descritto in <strong>due modi equivalenti</strong>:</p>
<p><strong>Descrizione 1 — Pura rotazione attorno a O:</strong> l'unica equazione necessaria è quella dei momenti calcolata rispetto al polo $O$:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\vec{M}_{O, ext}$$</p>
<p><strong>Descrizione 2 — Traslazione + rotazione attorno al centro di massa:</strong> si scompone il moto in:</p>
<ol>
<li>Una <strong>traslazione</strong> del centro di massa $C$ con velocità $\\vec{v}_{CM}$</li>
<li>Una <strong>rotazione</strong> con velocità angolare $\\vec{\\omega}$ attorno a un asse passante per $C$</li>
</ol>
<p>In questo caso servono le due equazioni cardinali della dinamica:</p>
<p>$$\\sum \\vec{F}_{ext} = \\frac{d\\vec{p}_{CM}}{dt}$$</p>
<p>$$\\sum \\vec{M}_{C, ext} = \\frac{d\\vec{L}_C}{dt}$$</p>
<p>Lo stesso fenomeno fisico (il rotolamento) può dunque essere raccontato come una pura rotazione attorno a un asse istantaneo (il punto di contatto $O$), oppure come una combinazione di traslazione del centro di massa e rotazione attorno ad esso. Questo dimostra la validità del principio degli spostamenti infinitesimi.</p>`
                }
            ]
        },
        {
            id: "s38-rotazione-asse-fisso",
            type: "section",
            title: "Rotazione attorno a un asse fisso",
            icon: "⚙️",
            content: `<p>Il principio appena visto vale per spostamenti infinitesimi, durante i quali l'asse istantaneo di rotazione può essere considerato fisso. Un caso particolare, ma estremamente importante e frequente in fisica e ingegneria, è quello in cui l'asse di rotazione <strong>non cambia nel tempo</strong>, cioè è un <strong>asse fisso</strong>.</p>
<p>Pensate a tutte le componenti in rotazione in un motore termico o elettrico, dall'asse motore all'asse delle ruote di un'auto: quasi tutto funziona girando attorno ad un asse fisso.</p>
<p>Quando un corpo rigido ruota attorno a un asse fisso, valgono alcune proprietà importanti:</p>
<ol>
<li>La velocità angolare $\\omega$ è <strong>la stessa</strong> per tutti i punti del corpo rigido.</li>
<li>Il vettore $\\vec{\\omega}$ ha <strong>direzione fissa</strong>, coincidente con quella dell'asse di rotazione. Possono cambiare il suo modulo e il suo verso, ma non la sua direzione.</li>
<li>Anche il vettore accelerazione angolare $\\vec{\\alpha}$ è parallelo all'asse di rotazione.</li>
<li>Tutti i punti del corpo rigido descrivono un <strong>moto circolare</strong> in un piano perpendicolare all'asse di rotazione.</li>
</ol>
<p><strong>Dimostrazione della proprietà 3:</strong> Sia $\\hat{u}_z$ il versore dell'asse di rotazione fisso. Allora $\\vec{\\omega}(t) = \\omega(t)\\hat{u}_z$. Poiché l'asse è fisso, $\\hat{u}_z$ è un vettore costante. Derivando rispetto al tempo:</p>
<p>$$\\vec{\\alpha} = \\frac{d\\vec{\\omega}}{dt} = \\frac{d}{dt}(\\omega(t)\\hat{u}_z) = \\frac{d\\omega}{dt}\\hat{u}_z + \\omega \\frac{d\\hat{u}_z}{dt}$$</p>
<p>Ma $\\frac{d\\hat{u}_z}{dt} = 0$, quindi:</p>
<p>$$\\vec{\\alpha} = \\frac{d\\omega}{dt}\\hat{u}_z = \\alpha\\,\\hat{u}_z$$</p>
<p>Questo dimostra che $\\vec{\\alpha}$ è parallelo a $\\hat{u}_z$ e quindi a $\\vec{\\omega}$.</p>`,
            subsections: [
                {
                    subtitle: "Momento angolare per una rotazione attorno a un asse fisso",
                    content: `<p>Calcoliamo il momento angolare di un corpo rigido che ruota attorno a un asse fisso $z$. Scegliamo un polo $O$ sull'asse di rotazione. Consideriamo una massetta $i$-esima $m_i$ del corpo, posta a distanza $\\vec{r}_i$ da $O$.</p>
<p>La sua velocità è data dalla legge del moto circolare:</p>
<p>$$\\vec{v}_i = \\vec{\\omega} \\times \\vec{r}_i$$</p>
<p>Il momento angolare della singola massetta rispetto al polo $O$ è:</p>
<p>$$\\vec{L}_i = \\vec{r}_i \\times \\vec{p}_i = m_i(\\vec{r}_i \\times \\vec{v}_i)$$</p>
<p>Sostituendo l'espressione di $\\vec{v}_i$:</p>
<p>$$\\vec{L}_i = m_i\\,\\vec{r}_i \\times (\\vec{\\omega} \\times \\vec{r}_i)$$</p>
<p>Usando l'identità del doppio prodotto vettoriale $\\vec{A} \\times (\\vec{B} \\times \\vec{C}) = \\vec{B}(\\vec{A} \\cdot \\vec{C}) - \\vec{C}(\\vec{A} \\cdot \\vec{B})$, otteniamo:</p>
<p>$$\\vec{L}_i = m_i\\left[\\vec{\\omega}(\\vec{r}_i \\cdot \\vec{r}_i) - \\vec{r}_i(\\vec{r}_i \\cdot \\vec{\\omega})\\right] = m_i\\left[r_i^2\\,\\vec{\\omega} - (\\vec{r}_i \\cdot \\vec{\\omega})\\vec{r}_i\\right]$$</p>
<p>Il momento angolare totale del corpo rigido è la somma dei momenti angolari di tutte le sue parti:</p>
<p>$$\\vec{L} = \\sum_i \\vec{L}_i = \\sum_i m_i\\left[r_i^2\\,\\vec{\\omega} - (\\vec{r}_i \\cdot \\vec{\\omega})\\vec{r}_i\\right]$$</p>
<p><strong>Osservazione importante:</strong> dall'espressione $\\vec{L}_i = m_i\\left[r_i^2\\,\\vec{\\omega} - (\\vec{r}_i \\cdot \\vec{\\omega})\\vec{r}_i\\right]$, notiamo che $\\vec{L}_i$ è una combinazione lineare dei vettori $\\vec{\\omega}$ e $\\vec{r}_i$. Questo significa che, in generale, $\\vec{L}_i$ <strong>non è parallelo</strong> a $\\vec{\\omega}$. Il momento angolare del singolo punto non ha la stessa direzione dell'asse di rotazione.</p>

<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Decomposizione del momento angolare $\\vec{L}_i$</strong></p>
  <p><em>Asse $z$ verticale con polo $O$ alla base e $\\vec{\\omega}$ lungo $z$ (blu). Massetta $m_i$ collegata a $O$ dal vettore $\\vec{r}_i$. Distanza $R_i$ dall'asse (perpendicolare tratteggiata). Vettore $\\vec{L}_i$ (rosso) NON parallelo a $z$, scomposto in componente assiale $\\vec{L}_{i,z}$ e trasversale $\\vec{L}_{i,\\perp}$ (tratteggiati rossi).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
                },
                {
                    subtitle: "Componente assiale e momento di inerzia",
                    content: `<p>Analizziamo separatamente la componente del momento angolare lungo l'asse di rotazione $z$ (componente <em>assiale</em>) e quella perpendicolare (componente <em>trasversale</em>).</p>
<p>La componente assiale di $\\vec{L}_i$ è la sua proiezione sull'asse $z$:</p>
<p>$$L_{i,z} = \\vec{L}_i \\cdot \\hat{u}_z = m_i\\left(\\vec{r}_i \\times (\\vec{\\omega} \\times \\vec{r}_i)\\right) \\cdot \\hat{u}_z$$</p>
<p>Usando l'identità del prodotto misto $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = \\vec{B} \\cdot (\\vec{C} \\times \\vec{A})$, con $\\vec{A} = \\hat{u}_z$, $\\vec{B} = \\vec{r}_i$, $\\vec{C} = (\\vec{\\omega} \\times \\vec{r}_i)$, possiamo riscrivere la proiezione come:</p>
<p>$$L_{i,z} = m_i(\\vec{\\omega} \\times \\vec{r}_i) \\cdot (\\hat{u}_z \\times \\vec{r}_i)$$</p>
<p>Poiché $\\vec{\\omega} = \\omega\\,\\hat{u}_z$:</p>
<p>$$L_{i,z} = m_i(\\omega\\,\\hat{u}_z \\times \\vec{r}_i) \\cdot (\\hat{u}_z \\times \\vec{r}_i)$$</p>
<p>Posto $\\vec{A} = \\hat{u}_z \\times \\vec{r}_i$, l'espressione diventa $L_{i,z} = m_i\\omega\\,(\\vec{A} \\cdot \\vec{A}) = m_i\\omega\\,|\\vec{A}|^2$.</p>
<p>Il modulo di $\\vec{A}$ è $|\\hat{u}_z \\times \\vec{r}_i| = r_i\\sin\\theta_i$, dove $\\theta_i$ è l'angolo tra $\\vec{r}_i$ e l'asse $z$. Ma $r_i\\sin\\theta_i$ non è altro che la distanza $R_i$ della massa $m_i$ dall'asse di rotazione. Quindi:</p>
<p>$$L_{i,z} = m_i R_i^2\\,\\omega$$</p>
<p>La componente assiale totale del momento angolare è:</p>
<p>$$L_z = \\sum_i L_{i,z} = \\sum_i m_i R_i^2\\,\\omega = \\left(\\sum_i m_i R_i^2\\right)\\omega$$</p>
<p>La quantità tra parentesi dipende solo dalla distribuzione della massa rispetto all'asse $z$. Questa grandezza fondamentale prende il nome di <strong>momento di inerzia</strong>.</p>`
                },
                {
                    subtitle: "Definizione di momento di inerzia",
                    content: `<p>Il <strong>momento di inerzia</strong> di un corpo rigido rispetto a un asse $z$ è definito come la somma dei prodotti delle masse di ciascun punto del corpo per il quadrato della loro distanza dall'asse:</p>
<p>$$I_z = \\sum_i m_i R_i^2 \\quad \\text{(sistemi discreti)}$$</p>
<p>Nel caso di un corpo continuo:</p>
<p>$$I_z = \\int_V R^2\\,dm = \\int_V R^2\\,\\rho(\\vec{r})\\,dV$$</p>
<p>dove $R$ è la distanza del volumetto infinitesimo $dV$ dall'asse $z$.</p>
<p>Usando questa definizione, la componente assiale del momento angolare assume una forma molto semplice:</p>
<p>$$L_z = I_z\\,\\omega$$</p>
<p>Questa relazione scalare è <strong>sempre valida</strong> per un corpo rigido in rotazione attorno a un asse fisso $z$.</p>`
                }
            ],
            formulas: [
                { label: "Velocità del punto i-esimo", latex: "\\vec{v}_i = \\vec{\\omega} \\times \\vec{r}_i" },
                { label: "Momento angolare (componente assiale)", latex: "L_z = I_z\\,\\omega" },
                { label: "Momento di inerzia (discreto)", latex: "I_z = \\sum_i m_i R_i^2" },
                { label: "Momento di inerzia (continuo)", latex: "I_z = \\int_V R^2\\,\\rho(\\vec{r})\\,dV" }
            ]
        },
        {
            id: "s38-assi-principali",
            type: "section",
            title: "Assi principali di inerzia — Teorema di Poinsot",
            icon: "🎯",
            content: `<p>In generale, la componente trasversale $\\vec{L}_{\\perp}$ del momento angolare non è nulla: il momento angolare totale $\\vec{L}$ ha una direzione diversa da quella di $\\vec{\\omega}$.</p>
<p>Tuttavia, esistono delle direzioni privilegiate per ogni corpo rigido.</p>
<p><strong>Teorema di Poinsot:</strong> Per ogni corpo rigido, esistono almeno tre assi ortogonali tra loro, detti <strong>assi principali di inerzia</strong>, tali che se il corpo ruota attorno a uno di essi, il suo momento angolare $\\vec{L}$ è parallelo alla velocità angolare $\\vec{\\omega}$.</p>`,
            subsections: [
                {
                    subtitle: "Perché esistono gli assi principali?",
                    content: `<p>Da notare: la relazione $\\vec{L} = I\\vec{\\omega}$ in forma vettoriale richiede in realtà una <strong>matrice</strong> (il cosiddetto <em>tensore di inerzia</em>) che moltiplica $\\vec{\\omega}$ per dare $\\vec{L}$. Gli assi principali di inerzia sono gli <strong>autovettori</strong> di questa matrice: lungo queste direzioni, il tensore agisce come una semplice moltiplicazione scalare, e $\\vec{L}$ risulta parallelo a $\\vec{\\omega}$. L'esistenza di almeno tre autovettori ortogonali è garantita dal fatto che il tensore di inerzia è una matrice simmetrica reale $3 \\times 3$.</p>`
                },
                {
                    subtitle: "Simmetrie e assi principali",
                    content: `<p>Se un corpo ha una geometria regolare e una distribuzione di massa omogenea, i suoi <strong>assi di simmetria sono assi principali di inerzia</strong>. Per esempio, per un cilindro omogeneo, l'asse del cilindro è un asse principale di inerzia.</p>
<p>Intuitivamente: se il corpo è simmetrico rispetto a un asse, la componente trasversale $\\vec{L}_{\\perp}$ si cancella per simmetria, e $\\vec{L}$ risulta allineato con $\\vec{\\omega}$.</p>`
                },
                {
                    subtitle: "Relazione scalare vs. vettoriale",
                    content: `<p>Ricapitolando le due relazioni fondamentali:</p>
<ul>
<li>$L_z = I_z\\,\\omega$ (relazione <strong>scalare</strong>): è <strong>sempre vera</strong> per la componente del momento angolare lungo l'asse di rotazione fisso $z$.</li>
<li>$\\vec{L} = I_z\\,\\vec{\\omega}$ (relazione <strong>vettoriale</strong>): è vera <strong>solo se</strong> l'asse di rotazione $z$ è un asse principale di inerzia.</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Relazione vettoriale (asse principale)", latex: "\\vec{L} = I_z\\,\\vec{\\omega}" }
            ]
        },
        {
            id: "s38-equazione-moto-rotazionale",
            type: "section",
            title: "Equazione del moto per rotazioni attorno a un asse principale fisso",
            icon: "📐",
            content: `<p>Consideriamo il caso molto comune in cui un corpo rigido ruota attorno a un asse fisso $z$ che è anche un asse principale di inerzia. Vale la relazione vettoriale $\\vec{L} = I_z\\,\\vec{\\omega}$.</p>
<p>Partiamo dalla seconda equazione cardinale della dinamica:</p>
<p>$$\\vec{M}_{O, ext} = \\frac{d\\vec{L}}{dt}$$</p>
<p>Sostituiamo l'espressione di $\\vec{L}$:</p>
<p>$$\\vec{M}_{O, ext} = \\frac{d}{dt}(I_z\\,\\vec{\\omega})$$</p>
<p>$I_z$ è costante perché le distanze $R_i$ di ciascuna massa dall'asse non cambiano nel tempo (il corpo è rigido) e l'asse è fisso (quindi $R_i$ è misurata sempre rispetto allo stesso asse). Possiamo portarlo fuori dalla derivata:</p>
<p>$$\\vec{M}_{O, ext} = I_z\\frac{d\\vec{\\omega}}{dt} = I_z\\,\\vec{\\alpha}$$</p>
<p>Questa è l'<strong>equazione fondamentale della dinamica rotazionale</strong> per rotazioni attorno a un asse principale fisso:</p>
<p>$$\\vec{M}_{O, ext} = I_z\\,\\vec{\\alpha}$$</p>`,
            subsections: [
                {
                    subtitle: "Analogia traslazionale–rotazionale",
                    content: `<p>Questa equazione è l'analogo rotazionale della seconda legge di Newton, $\\vec{F} = m\\vec{a}$. Il momento di inerzia $I$ gioca nel moto rotazionale lo stesso ruolo che la massa $m$ gioca nel moto traslazionale: è una misura della <strong>resistenza del corpo a cambiare il suo stato di moto rotatorio</strong>.</p>`
                },
                {
                    subtitle: "Distribuzione della massa e momento di inerzia",
                    content: `<p>A differenza della massa, che è una proprietà intrinseca del corpo, il momento di inerzia $I_z = \\sum_i m_i R_i^2$ dipende non solo dalla massa, ma anche da <strong>come la massa è distribuita</strong> rispetto all'asse di rotazione. Masse più lontane dall'asse contribuiscono molto di più (con il quadrato della distanza $R_i^2$).</p>`
                },
                {
                    subtitle: "Esempio numerico: disco soggetto a un momento esterno",
                    content: `<p>Un disco omogeneo di massa $M = 2\\,\\text{kg}$ e raggio $R = 0{,}3\\,\\text{m}$ è soggetto a un momento esterno $M_{ext} = 1{,}5\\,\\text{N}\\cdot\\text{m}$. Calcoliamo l'accelerazione angolare.</p>
<p>Il momento di inerzia di un disco omogeneo rispetto all'asse passante per il centro e perpendicolare al piano del disco è:</p>
<p>$$I_z = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0{,}3)^2 = \\frac{1}{2}(2)(0{,}09) = 0{,}09\\,\\text{kg}\\cdot\\text{m}^2$$</p>
<p>Dall'equazione $M_{ext} = I_z\\,\\alpha$:</p>
<p>$$\\alpha = \\frac{M_{ext}}{I_z} = \\frac{1{,}5}{0{,}09} \\approx 16{,}7\\,\\text{rad/s}^2$$</p>
<p>Da notare: un disco così leggero e piccolo acquista un'accelerazione angolare notevole con un momento esterno relativamente modesto. Se la massa fosse distribuita più lontano dall'asse (a parità di massa totale), $I_z$ sarebbe maggiore e $\\alpha$ minore.</p>`
                },
                {
                    subtitle: "Esempio: la piroetta del pattinatore",
                    content: `<p>Un esempio classico per illustrare il concetto di momento di inerzia e la <strong>conservazione del momento angolare</strong> è quello di un pattinatore che esegue una piroetta.</p>
<p>Supponiamo che non ci siano momenti di forze esterne significative (attrito con il ghiaccio trascurabile). Il momento angolare $L = I\\omega$ del pattinatore si conserva.</p>
<ol>
<li><strong>Braccia e gambe larghe:</strong> il pattinatore gira con braccia e una gamba estese. Una parte significativa della massa si trova a grande distanza dall'asse di rotazione. Il momento di inerzia $I$ è grande, la velocità angolare $\\omega$ è relativamente bassa.</li>
<li><strong>Braccia e gambe raccolte:</strong> il pattinatore raccoglie braccia e gambe verso il corpo. La distanza $R_i$ media delle particelle diminuisce, il momento di inerzia $I$ <strong>diminuisce drasticamente</strong>.</li>
</ol>
<p>Poiché $L = I\\omega$ deve conservarsi, se $I$ diminuisce, $\\omega$ deve necessariamente <strong>aumentare</strong> per mantenere il prodotto costante. Il pattinatore gira molto più velocemente. Per rallentare, allarga di nuovo le braccia.</p>`
                }
            ],
            table_compare: {
                headers: ["Moto traslazionale", "Moto rotazionale (asse principale fisso)"],
                rows: [
                    ["Posizione $\\vec{r}$", "Angolo $\\theta$"],
                    ["Velocità $\\vec{v}$", "Velocità angolare $\\vec{\\omega}$"],
                    ["Accelerazione $\\vec{a}$", "Accelerazione angolare $\\vec{\\alpha}$"],
                    ["Massa (inerzia) $m$", "Momento di inerzia $I$"],
                    ["Quantità di moto $\\vec{p} = m\\vec{v}$", "Momento angolare $\\vec{L} = I\\vec{\\omega}$"],
                    ["Forza $\\vec{F}$", "Momento della forza $\\vec{M}$"],
                    ["Legge del moto $\\vec{F} = m\\vec{a}$", "Legge del moto $\\vec{M} = I\\vec{\\alpha}$"]
                ]
            },
            formulas: [
                { label: "Equazione del moto rotazionale", latex: "\\vec{M}_{O, ext} = I_z\\,\\vec{\\alpha}" },
                { label: "Conservazione del momento angolare", latex: "L = I\\omega = \\text{costante} \\quad (\\text{se } M_{ext} = 0)" }
            ]
        },
        {
            id: "s38-equilibratura",
            type: "section",
            title: "Il problema dell'equilibratura",
            icon: "🔧",
            content: `<p>Abbiamo visto che se un corpo non ruota attorno a un asse principale di inerzia, il suo momento angolare $\\vec{L}$ non è parallelo a $\\vec{\\omega}$. Esiste una componente trasversale $\\vec{L}_{\\perp}$ che, ruotando insieme al corpo, <strong>cambia continuamente direzione</strong>.</p>
<p>La seconda equazione cardinale ci dice che $\\vec{M}_{ext} = d\\vec{L}/dt$. Se $\\vec{L}_{\\perp}$ cambia direzione, la sua derivata temporale non è nulla, anche se $\\omega$ è costante. Questo implica che per mantenere il corpo in rotazione attorno a un asse non principale, è necessario applicare un <strong>momento di forze esterne</strong> fornito dai vincoli (es. i cuscinetti dell'asse).</p>
<p>Questi momenti variabili nel tempo generano forze sui vincoli che causano <strong>vibrazioni</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Esempio: equilibratura delle ruote dell'auto",
                    content: `<p>Quando prendete una buca e deformate leggermente un cerchione, la distribuzione di massa della ruota non è più simmetrica rispetto all'asse di rotazione. L'asse di rotazione non è più un asse principale di inerzia.</p>
<p>Quando la ruota gira, specialmente ad alta velocità, si genera una componente trasversale del momento angolare che ruota. Per mantenere l'asse fisso, i supporti della ruota devono esercitare forze variabili che vengono percepite come una <strong>vibrazione al volante</strong>.</p>
<p>Il gommista, per risolvere il problema, esegue l'<strong>equilibratura</strong>: aggiunge piccoli pesi di piombo sul cerchione in posizioni strategiche per riportare la distribuzione di massa ad essere simmetrica. In questo modo, l'asse di rotazione torna ad essere un asse principale di inerzia, $\\vec{L}$ torna ad essere parallelo a $\\vec{\\omega}$, e le vibrazioni spariscono.</p>`
                }
            ]
        },
        {
            id: "s38-calcolo-inerzia-asta",
            type: "note_box",
            title: "Esempio di calcolo: momento di inerzia di un'asta",
            icon: "📝",
            content: `<p>Per vedere come si usa concretamente la formula integrale del momento di inerzia, calcoliamo $I$ per un'asta omogenea di massa $M$ e lunghezza $L$ rispetto all'asse perpendicolare passante per un estremo.</p>
<p>Scegliamo l'asse $x$ lungo l'asta con l'origine nell'estremo. La densità lineare è $\\lambda = M/L$. Un elemento infinitesimo $dm = \\lambda\\,dx$ si trova a distanza $R = x$ dall'asse di rotazione (perpendicolare all'asta e passante per $x = 0$):</p>
<p>$$I = \\int_0^L x^2\\,dm = \\int_0^L x^2\\,\\frac{M}{L}\\,dx = \\frac{M}{L}\\left[\\frac{x^3}{3}\\right]_0^L = \\frac{M}{L}\\cdot\\frac{L^3}{3} = \\frac{1}{3}ML^2$$</p>
<p>Per confronto, se l'asse passasse per il centro dell'asta, si troverebbe $I_{cm} = \\frac{1}{12}ML^2$, cioè un valore quattro volte più piccolo: spostare l'asse verso un estremo aumenta il momento di inerzia perché più massa si trova lontano dall'asse.</p>`,
            formulas: [
                { label: "Asta (asse per un estremo)", latex: "I = \\frac{1}{3}ML^2" },
                { label: "Asta (asse per il centro)", latex: "I_{cm} = \\frac{1}{12}ML^2" }
            ]
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Enuncia il principio degli spostamenti infinitesimi di un corpo rigido.",
            back: "Qualunque spostamento infinitesimo di un corpo rigido è descrivibile come la combinazione di una traslazione infinitesima e una rotazione infinitesima attorno a un asse istantaneo di rotazione. Per un $dt$ infinitesimo, qualsiasi moto complesso è scomponibile in traslazione + rotazione attorno a un asse che può cambiare da istante a istante."
        },
        {
            type: "domanda",
            front: "In quanti modi equivalenti si può descrivere il moto di puro rotolamento di una ruota? Quali equazioni si usano in ciascun caso?",
            back: "In due modi: (1) come pura rotazione attorno al punto di contatto $O$ (asse istantaneo), usando $\\frac{d\\vec{L}_O}{dt} = \\vec{M}_{O,ext}$; (2) come traslazione del centro di massa più rotazione attorno ad esso, usando le due equazioni cardinali $\\sum\\vec{F}_{ext} = \\frac{d\\vec{p}_{CM}}{dt}$ e $\\sum\\vec{M}_{C,ext} = \\frac{d\\vec{L}_C}{dt}$."
        },
        {
            type: "definizione",
            front: "Cos'è il momento di inerzia di un corpo rigido rispetto a un asse $z$?",
            back: "È la grandezza $I_z = \\sum_i m_i R_i^2$ (caso discreto) o $I_z = \\int_V R^2\\,\\rho\\,dV$ (caso continuo), dove $R_i$ (o $R$) è la distanza della massa dall'asse $z$. Misura la resistenza del corpo a cambiare il proprio stato di moto rotatorio attorno a quell'asse."
        },
        {
            type: "domanda",
            front: "La relazione $\\vec{L} = I_z\\vec{\\omega}$ (vettoriale) è sempre valida per un corpo che ruota attorno a un asse fisso?",
            back: "No! La relazione scalare $L_z = I_z\\omega$ è sempre valida per la componente lungo l'asse. Ma la relazione vettoriale $\\vec{L} = I_z\\vec{\\omega}$ vale solo se l'asse di rotazione è un asse principale di inerzia. In generale $\\vec{L}$ ha anche una componente trasversale $\\vec{L}_\\perp$ non nulla."
        },
        {
            type: "tranello",
            front: "Perché in generale $\\vec{L}$ non è parallelo a $\\vec{\\omega}$ per un corpo rigido in rotazione?",
            back: "Perché il momento angolare della singola massetta è $\\vec{L}_i = m_i[r_i^2\\vec{\\omega} - (\\vec{r}_i \\cdot \\vec{\\omega})\\vec{r}_i]$, combinazione lineare di $\\vec{\\omega}$ e $\\vec{r}_i$: in generale questo vettore non è allineato con $\\vec{\\omega}$. La componente trasversale si annulla solo se la rotazione avviene attorno a un asse principale di inerzia."
        },
        {
            type: "formula",
            front: "Scrivi l'equazione del moto rotazionale per un corpo rigido che ruota attorno a un asse principale fisso e spiega l'analogia con la traslazione.",
            back: "$\\vec{M}_{O,ext} = I_z\\vec{\\alpha}$. È l'analogo di $\\vec{F} = m\\vec{a}$: il momento delle forze $\\vec{M}$ sostituisce la forza $\\vec{F}$, il momento di inerzia $I$ sostituisce la massa $m$, e l'accelerazione angolare $\\vec{\\alpha}$ sostituisce l'accelerazione lineare $\\vec{a}$."
        },
        {
            type: "domanda",
            front: "Perché il momento di inerzia $I_z$ si può portare fuori dalla derivata temporale nella derivazione di $M = I\\alpha$?",
            back: "Perché $I_z = \\sum_i m_i R_i^2$ è costante nel tempo: le distanze $R_i$ di ciascuna massa dall'asse non cambiano (il corpo è rigido) e l'asse è fisso (quindi $R_i$ è misurata sempre rispetto allo stesso asse)."
        },
        {
            type: "domanda",
            front: "Spiega l'esempio del pattinatore sul ghiaccio in termini di conservazione del momento angolare.",
            back: "Se i momenti esterni sono trascurabili, $L = I\\omega = \\text{cost}$. Raccogliendo le braccia, il pattinatore riduce $I$ (massa più vicina all'asse). Per conservare $L$, la velocità angolare $\\omega$ deve aumentare. Allargando le braccia, $I$ aumenta e $\\omega$ diminuisce."
        },
        {
            type: "domanda",
            front: "Cos'è il problema dell'equilibratura e come si risolve?",
            back: "Se una ruota ha distribuzione di massa non simmetrica, l'asse di rotazione non è un asse principale: $\\vec{L}$ ha una componente trasversale che ruota, generando forze variabili sui vincoli (vibrazioni). Si risolve con l'equilibratura: aggiungere piccoli pesi sul cerchione per ripristinare la simmetria della distribuzione di massa, rendendo l'asse di rotazione nuovamente un asse principale di inerzia."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che, per un asse di rotazione fisso, l'accelerazione angolare $\\vec{\\alpha}$ è parallela a $\\vec{\\omega}$.",
            back: "Sia $\\hat{u}_z$ il versore dell'asse fisso. Allora $\\vec{\\omega}(t) = \\omega(t)\\hat{u}_z$. Derivando: $\\vec{\\alpha} = \\frac{d\\vec{\\omega}}{dt} = \\frac{d\\omega}{dt}\\hat{u}_z + \\omega\\frac{d\\hat{u}_z}{dt}$. Poiché l'asse è fisso, $\\frac{d\\hat{u}_z}{dt} = 0$, quindi $\\vec{\\alpha} = \\dot{\\omega}\\,\\hat{u}_z$, che è parallelo a $\\vec{\\omega}$."
        }
    ]
};

