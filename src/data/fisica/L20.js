const LESSON = {
    id: "L20", date: "Lezione 20 — 22 Apr 2026",
    title: "Sistemi di Riferimento non Inerziali, Forze Apparenti e Forze Centrali",
    abstract: "Analisi della dinamica nei sistemi di riferimento non inerziali con introduzione delle forze apparenti (trascinamento, Coriolis, centrifuga), seguita dalla classificazione delle forze centrali e dalle loro tre proprietà fondamentali: conservazione del momento angolare, velocità areolare costante e natura conservativa.",

    sections: [
        {
            id: "s20-pendolo-accelerato",
            type: "section",
            title: "Analisi del Pendolo in un Sistema Accelerato",
            icon: "🚂",
            content: `<p>Consideriamo un problema classico che illustra la differenza tra sistemi di riferimento inerziali e non inerziali.</p>
<p>Un pendolo, costituito da un filo inestensibile di massa trascurabile e una massa puntiforme $M$, è appeso al soffitto di un vagone ferroviario. Il vagone si muove con un'accelerazione costante $\\vec{a}$ parallela al terreno. Il pendolo non si trova in posizione verticale, ma forma un angolo costante $\\theta$ con la verticale. Vogliamo determinare questo angolo.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Pendolo nel vagone accelerato</strong></p>
  <p><em>Vagone con ruote su un binario, sistema inerziale $(O,x,y)$ fisso a terra, sistema non inerziale $(O',x',y')$ solidale al vagone. Il pendolo pende dal soffitto del vagone formando un angolo $\\theta$ con la verticale tratteggiata. La massa $M$ è all'estremità del filo. Freccia rossa $\\vec{a}$ indica l'accelerazione del vagone verso destra. L'arco dell'angolo $\\theta$ è chiaramente disegnato tra la verticale (verso il basso) e il filo del pendolo.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Punto di Vista dell'Osservatore Inerziale (O)",
                    content: `<p>L'osservatore $O$ è fermo rispetto al terreno e vede il vagone accelerare. Per questo osservatore, il sistema di riferimento $(O,x,y)$ è inerziale. Le forze che agiscono sulla massa $M$ sono <strong>forze reali</strong>:</p>
<ul>
<li>La forza peso $\\vec{P} = M\\vec{g}$, diretta verticalmente verso il basso.</li>
<li>La tensione del filo $\\vec{T}$, diretta lungo il filo.</li>
</ul>
<p>Poiché la massa $M$ è solidale con il vagone, essa si muove con la stessa accelerazione $\\vec{a}$ del vagone. Applicando la seconda legge di Newton:</p>
<p>$$\\vec{T} + \\vec{P} = M\\vec{a}$$</p>
<p>Scomponiamo lungo gli assi $x$ e $y$:</p>
<p><strong>Lungo l'asse $x$</strong> — la componente orizzontale della tensione causa l'accelerazione:</p>
<p>$$T \\sin\\theta = Ma$$</p>
<p><strong>Lungo l'asse $y$</strong> — nessuna accelerazione verticale, quindi:</p>
<p>$$T \\cos\\theta - Mg = 0 \\quad \\Rightarrow \\quad T \\cos\\theta = Mg$$</p>
<p>Dividendo la prima equazione per la seconda si elimina $T$:</p>
<p>$$\\frac{T \\sin\\theta}{T \\cos\\theta} = \\frac{Ma}{Mg} \\quad \\Rightarrow \\quad \\tan\\theta = \\frac{a}{g}$$</p>
<p>L'angolo di equilibrio è quindi:</p>
<p>$$\\theta = \\arctan\\!\\left(\\frac{a}{g}\\right)$$</p>`
                },
                {
                    subtitle: "Punto di Vista dell'Osservatore non Inerziale (O')",
                    content: `<p>L'osservatore $O'$ è seduto all'interno del vagone. Il suo sistema di riferimento $(O',x',y')$ è solidale con il vagone e quindi è <strong>non inerziale</strong>, poiché accelera rispetto al sistema inerziale $O$.</p>
<p>Dal punto di vista di $O'$, la massa $M$ è <strong>ferma</strong>. Questo significa che la somma delle forze agenti su $M$ deve essere nulla:</p>
<p>$$\\sum \\vec{F}' = 0$$</p>
<p>L'osservatore $O'$ vede le stesse forze reali di $O$: la tensione $\\vec{T}$ e il peso $\\vec{P}$. Tuttavia, la loro somma non è nulla ($\\vec{T}+\\vec{P}=M\\vec{a}$). Per far tornare i conti, l'osservatore non inerziale deve introdurre una <strong>forza apparente</strong> (o forza d'inerzia).</p>
<p>Poiché il sistema di $O'$ trasla con accelerazione $\\vec{a}$ rispetto a $O$, la forza apparente di trascinamento è:</p>
<p>$$\\vec{F}_{app} = -M\\vec{a}_{trasc} = -M\\vec{a}$$</p>
<p>Questa forza è diretta in verso opposto all'accelerazione del sistema. L'equazione di equilibrio diventa:</p>
<p>$$\\vec{T} + \\vec{P} + \\vec{F}_{app} = 0$$</p>
<p>Scomponiamo lungo gli assi $x'$ e $y'$ (paralleli a $x$ e $y$):</p>
<p><strong>Lungo $x'$:</strong></p>
<p>$$T \\sin\\theta - F_{app} = 0 \\quad \\Rightarrow \\quad T \\sin\\theta = Ma$$</p>
<p><strong>Lungo $y'$:</strong></p>
<p>$$T \\cos\\theta - Mg = 0 \\quad \\Rightarrow \\quad T \\cos\\theta = Mg$$</p>
<p>Otteniamo <strong>esattamente lo stesso sistema di equazioni</strong> del caso inerziale. La soluzione è identica:</p>
<p>$$\\tan\\theta = \\frac{a}{g}$$</p>`
                }
            ],
            formulas: [
                { label: "Angolo del pendolo accelerato", latex: "\\tan\\theta = \\frac{a}{g}" },
                { label: "Forza apparente di trascinamento", latex: "\\vec{F}_{app} = -M\\vec{a}" }
            ],
            extra_content: `<p><strong>Osservazione fondamentale:</strong> Entrambi gli approcci portano allo stesso risultato fisico. L'osservatore inerziale spiega l'inclinazione del pendolo come il risultato di un'accelerazione prodotta da una forza reale (la tensione). L'osservatore non inerziale, vedendo il pendolo fermo, postula l'esistenza di una forza apparente che bilancia le forze reali, creando una situazione di <strong>equilibrio statico</strong> nel suo sistema di riferimento.</p>`
        },
        {
            id: "s20-forze-apparenti",
            type: "section",
            title: "Generalizzazione: Le Forze Apparenti",
            icon: "👻",
            content: `<p>Il problema del pendolo ci mostra che la seconda legge di Newton, nella sua forma classica $\\sum \\vec{F} = m\\vec{a}$, <strong>vale solo nei sistemi di riferimento inerziali</strong>. In un sistema non inerziale, per descrivere correttamente la dinamica, dobbiamo introdurre delle forze fittizie.</p>
<p>La legge fondamentale della dinamica in un sistema di riferimento non inerziale si scrive come:</p>
<p>$$m\\vec{a}' = \\vec{F}' = \\sum \\vec{F}_{reali} + \\sum \\vec{F}_{apparenti}$$</p>
<p>dove $\\vec{a}'$ è l'accelerazione del corpo misurata nel sistema non inerziale.</p>
<p>Le forze apparenti <strong>non nascono da interazioni fisiche fondamentali</strong> (gravitazionale, elettromagnetica, ecc.), ma sono una conseguenza del moto accelerato dell'osservatore.</p>`,
            subsections: [
                {
                    subtitle: "Forza di Trascinamento",
                    content: `<p>Se un sistema di riferimento non inerziale trasla con un'accelerazione $\\vec{a}_{tr}$ rispetto a un sistema inerziale, su ogni corpo di massa $m$ agisce una <strong>forza di trascinamento</strong>:</p>
<p>$$\\vec{F}_{tr} = -m\\vec{a}_{tr}$$</p>
<p>Questa forza è <strong>sempre opposta</strong> all'accelerazione del sistema di riferimento.</p>`
                },
                {
                    subtitle: "Forza di Coriolis",
                    content: `<p>Se un sistema di riferimento non inerziale ruota con velocità angolare $\\vec{\\omega}$ rispetto a un sistema inerziale, e un corpo di massa $m$ si muove con velocità $\\vec{v}'$ relativa a tale sistema, su di esso agisce una <strong>forza di Coriolis</strong>:</p>
<p>$$\\vec{F}_{Cor} = -2m(\\vec{\\omega} \\times \\vec{v}')$$</p>
<p>Questa forza è sempre <strong>perpendicolare</strong> sia alla velocità angolare del sistema sia alla velocità relativa del corpo.</p>
<p><strong>Esempio concreto:</strong> un corpo che si muove radialmente verso l'esterno su una piattaforma rotante subisce una deviazione laterale a causa della forza di Coriolis. Nell'atmosfera terrestre, questa forza è responsabile della deviazione dei venti: nell'emisfero nord i venti vengono deviati verso destra rispetto alla loro direzione di moto, nell'emisfero sud verso sinistra. È la ragione per cui i cicloni ruotano in senso antiorario nell'emisfero boreale.</p>`
                },
                {
                    subtitle: "Forza Centrifuga",
                    content: `<p>In un sistema in rotazione esiste anche la <strong>forza centrifuga</strong>, che è in realtà un caso particolare della forza di trascinamento, dove l'accelerazione di trascinamento è l'accelerazione centripeta. La forza centrifuga è diretta radialmente verso l'esterno rispetto all'asse di rotazione.</p>`
                }
            ],
            formulas: [
                { label: "Dinamica nel SdR non inerziale", latex: "m\\vec{a}' = \\sum \\vec{F}_{reali} + \\sum \\vec{F}_{apparenti}" },
                { label: "Forza di trascinamento", latex: "\\vec{F}_{tr} = -m\\vec{a}_{tr}" },
                { label: "Forza di Coriolis", latex: "\\vec{F}_{Cor} = -2m(\\vec{\\omega} \\times \\vec{v}')" }
            ]
        },
        {
            id: "s20-esempi-apparenti",
            type: "section",
            title: "Esempi e Applicazioni delle Forze Apparenti",
            icon: "🎡",
            content: `<p>Vediamo alcuni esempi classici che chiariscono il ruolo delle forze apparenti nella vita quotidiana.</p>`,
            subsections: [
                {
                    subtitle: "Passeggero sull'autobus",
                    content: `<p>Quando un autobus frena bruscamente, i passeggeri si sentono spinti in avanti. L'autobus è un sistema non inerziale con un'accelerazione $\\vec{a}$ diretta all'indietro (decelerazione). Nel sistema di riferimento dell'autobus, ogni passeggero sperimenta una forza di trascinamento:</p>
<p>$$\\vec{F}_{tr} = -m\\vec{a}$$</p>
<p>Essendo $\\vec{a}$ rivolta all'indietro, la forza apparente è diretta <strong>in avanti</strong>. Questa è ciò che il passeggero percepisce come una "spinta".</p>`
                },
                {
                    subtitle: "Paracadutisti in caduta libera",
                    content: `<p>Due paracadutisti in caduta libera (prima di aprire il paracadute) sono in un sistema di riferimento che accelera verso il basso con $\\vec{a}_{tr} = \\vec{g}$. La forza reale è il peso $\\vec{P} = m\\vec{g}$ (verso il basso). La forza apparente di trascinamento è $\\vec{F}_{tr} = -m\\vec{g}$ (verso l'alto).</p>
<p>Nel loro sistema di riferimento, la forza totale apparente è:</p>
<p>$$\\vec{F}' = \\vec{P} + \\vec{F}_{tr} = m\\vec{g} + (-m\\vec{g}) = 0$$</p>
<p>Questo spiega perché si sentono <strong>"senza peso"</strong>: nel loro sistema di riferimento accelerato, la forza apparente cancella esattamente la forza di gravità.</p>`
                },
                {
                    subtitle: "La giostra e il Rotor",
                    content: `<p>Consideriamo una giostra cilindrica ("Rotor") che ruota a velocità angolare $\\omega$ costante. Una persona all'interno si trova schiacciata contro la parete. Se il pavimento viene abbassato, la persona non cade.</p>
<p><strong>Punto di vista inerziale (esterno):</strong> la persona si muove di moto circolare uniforme. La parete esercita una forza normale $\\vec{N}$ che funge da forza centripeta: $N = m\\omega^2 R$. Per non scivolare verso il basso, l'attrito statico $\\vec{f}_s$ deve bilanciare il peso: $f_s = mg$. La condizione è $f_s \\le \\mu_s N$, ovvero:</p>
<p>$$mg \\le \\mu_s (m\\omega^2 R)$$</p>
<p><strong>Punto di vista non inerziale (sulla giostra):</strong> la persona è ferma. Oltre alle forze reali ($\\vec{P}$, $\\vec{N}$, $\\vec{f}_s$), c'è la <strong>forza centrifuga</strong> diretta verso l'esterno: $F_{cf} = m\\omega^2 R$. Le equazioni di equilibrio sono:</p>
<ul>
<li><strong>Verticale:</strong> $f_s - mg = 0$</li>
<li><strong>Radiale:</strong> $N - F_{cf} = 0 \\Rightarrow N = m\\omega^2 R$</li>
</ul>
<p>La condizione per non scivolare è la stessa: $mg \\le \\mu_s N$. La forza centrifuga apparente "spinge" la persona contro la parete, generando la forza normale necessaria a sostenere l'attrito.</p>`
                }
            ],
            formulas: [
                { label: "Condizione Rotor (non scivolare)", latex: "mg \\le \\mu_s m\\omega^2 R" },
                { label: "Forza centrifuga", latex: "F_{cf} = m\\omega^2 R" }
            ]
        },
        {
            id: "s20-pendolo-conico",
            type: "section",
            title: "Il Pendolo Conico",
            icon: "🔄",
            content: `<p>Un altro esempio classico di moto circolare è il pendolo conico. Una massa $m$ è legata a un filo di lunghezza $L$ e viene fatta ruotare in modo che descriva una circonferenza orizzontale con velocità angolare costante $\\omega$. Il filo forma un angolo $\\theta$ con la verticale.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Pendolo conico</strong></p>
  <p><em>Supporto in alto, filo di lunghezza $L$ che forma angolo $\\theta$ con la verticale tratteggiata. La massa $m$ all'estremità descrive una traiettoria circolare di raggio $R = L\\sin\\theta$ nel piano orizzontale (ellisse in prospettiva). Forze: peso $\\vec{P} = m\\vec{g}$ verso il basso, tensione $\\vec{T}$ lungo il filo verso il supporto. Indicare il centro della traiettoria circolare e il raggio $R$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Analisi dal sistema inerziale",
                    content: `<p>La massa $m$ si muove di moto circolare uniforme. L'accelerazione è puramente centripeta, diretta verso il centro della circonferenza: $a_c = \\omega^2 R$, con raggio $R = L \\sin\\theta$.</p>
<p><strong>Direzione verticale</strong> — nessuna accelerazione verticale:</p>
<p>$$T \\cos\\theta - mg = 0 \\quad \\Rightarrow \\quad T \\cos\\theta = mg$$</p>
<p><strong>Direzione radiale (orizzontale)</strong> — la componente orizzontale della tensione fornisce la forza centripeta:</p>
<p>$$T \\sin\\theta = m\\omega^2 R = m\\omega^2 (L \\sin\\theta)$$</p>
<p>Dalla seconda equazione, se $\\sin\\theta \\neq 0$, semplifichiamo e troviamo la tensione:</p>
<p>$$T = m\\omega^2 L$$</p>
<p>Sostituendo nella prima equazione:</p>
<p>$$(m\\omega^2 L) \\cos\\theta = mg \\quad \\Rightarrow \\quad \\cos\\theta = \\frac{g}{\\omega^2 L}$$</p>`
                },
                {
                    subtitle: "Condizione di esistenza e calcolo numerico",
                    content: `<p><strong>Attenzione:</strong> questa soluzione ha senso solo se $\\frac{g}{\\omega^2 L} \\le 1$, ovvero $\\omega^2 \\ge \\frac{g}{L}$. Se la velocità angolare è troppo bassa, il pendolo non riesce a sollevarsi e rimane in posizione verticale ($\\theta = 0$).</p>
<p><strong>Dati del problema:</strong> $m = 0.3$ kg, $L = 0.7$ m, $\\omega = 4$ rad/s.</p>
<p>Tensione:</p>
<p>$$T = (0.3)(4)^2(0.7) = 0.3 \\cdot 16 \\cdot 0.7 = 3.36 \\text{ N} \\approx 3.4 \\text{ N}$$</p>
<p>Angolo:</p>
<p>$$\\cos\\theta = \\frac{9.8}{(4)^2 \\cdot 0.7} = \\frac{9.8}{11.2} \\approx 0.875$$</p>
<p>$$\\theta = \\arccos(0.875) \\approx 29°$$</p>`
                }
            ],
            formulas: [
                { label: "Tensione del pendolo conico", latex: "T = m\\omega^2 L" },
                { label: "Angolo del pendolo conico", latex: "\\cos\\theta = \\frac{g}{\\omega^2 L}" },
                { label: "Condizione di esistenza", latex: "\\omega^2 \\ge \\frac{g}{L}" }
            ]
        },
        {
            id: "s20-forze-centrali-def",
            type: "section",
            title: "Forze Centrali: Definizione e Classificazione",
            icon: "🎯",
            content: `<p>Introduciamo ora una nuova categoria di forze, definite sulla base della loro struttura matematica. Prima di farlo, richiamiamo brevemente come si classificano le forze.</p>`,
            subsections: [
                {
                    subtitle: "Classificazione delle forze",
                    content: `<p>Le forze incontrate finora possono essere classificate in vari modi. Alcune derivano da <strong>interazioni fondamentali</strong> della natura (gravità, forza elettromagnetica). Altre sono <strong>forze efficaci</strong> che descrivono interazioni complesse a livello macroscopico (reazioni vincolari, attrito statico e dinamico).</p>
<p>Anche la forza centripeta è una <em>categoria</em>, non una forza fondamentale a sé stante. A seconda del problema, il ruolo di forza centripeta può essere svolto da forze diverse: la reazione normale di un piano inclinato, la tensione di un filo, la forza di attrito statico per un'automobile in curva. In ogni caso, si tratta di una forza reale che mantiene un corpo in traiettoria curva.</p>`
                },
                {
                    subtitle: "Richiamo sulle forze conservative",
                    content: `<p>Una forza si dice <strong>conservativa</strong> se il lavoro da essa compiuto per spostare un punto materiale da A a B dipende solo da A e B, e <strong>non dal percorso</strong> seguito.</p>
<p>Conseguenza diretta: il lavoro compiuto da una forza conservativa lungo un percorso chiuso è nullo:</p>
<p>$$L_{\\text{chiuso}} = \\oint \\vec{F}_{\\text{cons}} \\cdot d\\vec{s} = 0$$</p>
<p><strong>Esempio:</strong> la forza peso è conservativa. Se lanciamo un sasso verso l'alto da A e lo riprendiamo in A, il lavoro motore in discesa compensa esattamente il lavoro resistente in salita. Al contrario, l'attrito è non conservativo: il lavoro dipende dalla lunghezza del percorso.</p>`
                },
                {
                    subtitle: "Definizione di Forza Centrale",
                    content: `<p>Si definisce <strong>forza centrale</strong> una forza $\\vec{F}_C$ che soddisfa due condizioni:</p>
<ol>
<li>La sua direzione passa sempre per un punto fisso $O$, detto <strong>centro della forza</strong>.</li>
<li>Il suo modulo dipende unicamente dalla distanza $r$ del punto di applicazione dal centro $O$.</li>
</ol>
<p>Matematicamente:</p>
<p>$$\\vec{F}_C = F(r)\\,\\hat{u}_r$$</p>
<p>dove $\\hat{u}_r$ è il versore radiale che punta dal centro $O$ verso il punto di applicazione $P$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Forza centrale</strong></p>
  <p><em>Centro $O$ come origine; punto $P$ sulla traiettoria (curva rossa che passa per $P$); vettore posizione $\\vec{r}$ da $O$ a $P$; versore $\\hat{u}_r$ come freccia unitaria corta da $O$ nella stessa direzione di $\\vec{r}$ (chiaramente più corta di $\\vec{r}$, con etichetta laterale); vettore $\\vec{F}_C$ in blu applicato in $P$ nella direzione radiale.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>La funzione $F(r)$ determina se la forza è attrattiva o repulsiva:</p>
<ul>
<li>Se $F(r) \\lt 0$: la forza punta verso il centro $O$ → <strong>attrattiva</strong>.</li>
<li>Se $F(r) \\gt 0$: la forza punta lontano dal centro $O$ → <strong>repulsiva</strong>.</li>
</ul>`
                },
                {
                    subtitle: "Esempi di Forze Centrali",
                    content: `<p><strong>Forza elastica:</strong> una massa collegata a una molla con l'altro estremo fissato nell'origine $O$. La legge di Hooke dà:</p>
<p>$$\\vec{F}_{el} = -k\\vec{r} = -kr\\,\\hat{u}_r$$</p>
<p>Il centro della forza è la posizione di riposo. Il modulo $kr$ dipende solo dalla distanza $r$, e il segno negativo indica una forza attrattiva (di richiamo).</p>
<p><strong>Forza di gravitazione universale:</strong> la forza tra il Sole (in $O$) e la Terra (in $P$) è una forza centrale. Il modulo dipende solo dalla distanza Terra-Sole, la direzione è sempre lungo la congiungente, ed è attrattiva.</p>`
                }
            ],
            formulas: [
                { label: "Forza centrale (definizione)", latex: "\\vec{F}_C = F(r)\\,\\hat{u}_r" },
                { label: "Forza elastica come forza centrale", latex: "\\vec{F}_{el} = -kr\\,\\hat{u}_r" },
                { label: "Lavoro nullo su percorso chiuso (conservativa)", latex: "\\oint \\vec{F}_{\\text{cons}} \\cdot d\\vec{s} = 0" }
            ]
        },
        {
            id: "s20-proprieta-centrali",
            type: "section",
            title: "Le Tre Proprietà Fondamentali delle Forze Centrali",
            icon: "⭐",
            content: `<p>Le forze centrali possiedono tre proprietà fondamentali di grande importanza. Sotto l'azione di una forza centrale $\\vec{F}_C$ con centro in $O$:</p>
<ol>
<li><strong>Il momento angolare</strong> $\\vec{L}_O$ rispetto al centro $O$ si conserva.</li>
<li><strong>La velocità areolare</strong> è costante.</li>
<li><strong>La forza è conservativa.</strong></li>
</ol>
<p>Queste tre proprietà rendono le forze centrali un elemento fondamentale nello studio della meccanica, dalla dinamica dei pianeti alla fisica atomica.</p>`,
            subsections: [
                {
                    subtitle: "Proprietà 1: Conservazione del Momento Angolare",
                    content: `<p><strong>Enunciato:</strong> sotto l'azione di una forza centrale, il momento angolare del punto materiale, calcolato rispetto al centro della forza, è costante nel tempo.</p>
<p><strong>Dimostrazione:</strong> partiamo dalla seconda equazione cardinale della dinamica:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O$$</p>
<p>dove $\\vec{M}_O$ è il momento della forza rispetto al polo $O$:</p>
<p>$$\\vec{M}_O = \\vec{r} \\times \\vec{F}_C = \\vec{r} \\times (F(r)\\,\\hat{u}_r)$$</p>
<p>Poiché $\\vec{r}$ e $\\hat{u}_r$ sono <strong>paralleli</strong> per definizione (hanno la stessa direzione), il loro prodotto vettoriale è nullo:</p>
<p>$$\\vec{r} \\times \\hat{u}_r = \\vec{0} \\quad \\Rightarrow \\quad \\vec{M}_O = \\vec{0}$$</p>
<p>Di conseguenza:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\vec{0} \\quad \\Rightarrow \\quad \\vec{L}_O = \\text{costante}$$</p>
<p>La conservazione del momento angolare implica che lo stato di moto rotatorio del sistema non cambia, a meno che non intervenga una forza esterna con momento non nullo rispetto al centro.</p>`
                },
                {
                    subtitle: "Proprietà 2: Velocità Areolare Costante",
                    content: `<p>La <strong>velocità areolare</strong> $\\frac{dA}{dt}$ è la rapidità con cui l'area viene spazzata dal vettore posizione $\\vec{r}$ che congiunge il centro $O$ con il punto materiale $P$.</p>
<p>In un intervallo infinitesimo $dt$, lo spostamento è $d\\vec{s} = \\vec{v}\\,dt$. L'area infinitesima spazzata è:</p>
<p>$$dA = \\frac{1}{2} |\\vec{r} \\times d\\vec{s}| = \\frac{1}{2} |\\vec{r} \\times \\vec{v}\\,dt|$$</p>
<p>La velocità areolare è quindi:</p>
<p>$$\\frac{dA}{dt} = \\frac{1}{2} |\\vec{r} \\times \\vec{v}|$$</p>
<p>Ricordando che il momento angolare è $\\vec{L}_O = m(\\vec{r} \\times \\vec{v})$, si ottiene:</p>
<p>$$\\frac{dA}{dt} = \\frac{|\\vec{L}_O|}{2m}$$</p>
<p>Poiché per una forza centrale $\\vec{L}_O$ è costante e anche $m$ è costante, la velocità areolare è costante. ∎</p>`
                },
                {
                    subtitle: "Collegamento con la Seconda Legge di Keplero",
                    content: `<p>Questo risultato è noto come la <strong>seconda legge di Keplero</strong>: il raggio vettore che unisce un pianeta al Sole spazza aree uguali in tempi uguali.</p>
<p>La catena logica completa è: forza gravitazionale è una forza centrale → $\\vec{M}_O = \\vec{0}$ → $\\vec{L}_O$ costante → $|\\vec{L}_O|$ costante → $dA/dt$ costante → <strong>seconda legge di Keplero</strong>.</p>
<p>Ciò implica che un pianeta si muove <strong>più velocemente</strong> quando è più vicino al Sole (perielio) e <strong>più lentamente</strong> quando è più lontano (afelio).</p>`
                },
                {
                    subtitle: "Proprietà 3: Le Forze Centrali sono Conservative",
                    content: `<p><strong>Enunciato:</strong> ogni forza centrale è una forza conservativa.</p>
<p><strong>Dimostrazione:</strong> calcoliamo il lavoro della forza centrale $\\vec{F}_C$ per spostare un punto da A a B:</p>
<p>$$L_{A \\to B} = \\int_A^B \\vec{F}_C \\cdot d\\vec{s} = \\int_A^B F(r)\\,\\hat{u}_r \\cdot d\\vec{s}$$</p>
<p>Il passaggio chiave è capire perché $\\hat{u}_r \\cdot d\\vec{s} = dr$. Decomponendo lo spostamento in coordinate polari:</p>
<p>$$d\\vec{s} = dr\\,\\hat{u}_r + r\\,d\\theta\\,\\hat{u}_\\theta$$</p>
<p>Poiché $\\hat{u}_r \\cdot \\hat{u}_r = 1$ e $\\hat{u}_r \\cdot \\hat{u}_\\theta = 0$ (i due versori sono ortogonali), si ottiene:</p>
<p>$$\\hat{u}_r \\cdot d\\vec{s} = \\hat{u}_r \\cdot (dr\\,\\hat{u}_r + r\\,d\\theta\\,\\hat{u}_\\theta) = dr \\cdot 1 + r\\,d\\theta \\cdot 0 = dr$$</p>
<p>Sostituendo nell'integrale:</p>
<p>$$L_{A \\to B} = \\int_{r_A}^{r_B} F(r)\\,dr$$</p>
<p>Questo integrale dipende <strong>unicamente</strong> dalla distanza iniziale $r_A$ e finale $r_B$ dal centro $O$, e <strong>non dalla forma del cammino</strong> percorso. Per definizione, la forza è quindi conservativa. ∎</p>`
                },
                {
                    subtitle: "Corollario: Energia Potenziale",
                    content: `<p>Essendo le forze centrali conservative, per esse è possibile definire un'<strong>energia potenziale</strong> $U(r)$ e vale la conservazione dell'energia meccanica totale:</p>
<p>$$E = E_k + U(r) = \\text{costante}$$</p>
<p>se la forza centrale è l'unica forza agente o se le altre forze non compiono lavoro.</p>`
                }
            ],
            formulas: [
                { label: "Momento nullo della forza centrale", latex: "\\vec{M}_O = \\vec{r} \\times F(r)\\hat{u}_r = \\vec{0}" },
                { label: "Conservazione momento angolare", latex: "\\frac{d\\vec{L}_O}{dt} = \\vec{0}" },
                { label: "Velocità areolare", latex: "\\frac{dA}{dt} = \\frac{|\\vec{L}_O|}{2m}" },
                { label: "Lavoro della forza centrale", latex: "L_{A \\to B} = \\int_{r_A}^{r_B} F(r)\\,dr" },
                { label: "Decomposizione spostamento (polari)", latex: "d\\vec{s} = dr\\,\\hat{u}_r + r\\,d\\theta\\,\\hat{u}_\\theta" }
            ]
        },
        {
            id: "s20-alert-apparenti",
            type: "alert_box",
            title: "⚠️ Trappola d'Esame: Forze Apparenti",
            icon: "⚠️",
            content: `<p>Le forze apparenti <strong>non esistono</strong> nel sistema inerziale. Un errore frequentissimo all'esame è introdurre la forza centrifuga nel diagramma delle forze quando si lavora nel sistema inerziale. La forza centrifuga compare <strong>solo</strong> se si adotta il punto di vista dell'osservatore non inerziale (solidale al sistema rotante). Nel sistema inerziale esiste solo la forza centripeta (che è una forza reale: tensione, normale, attrito...).</p>
<p>Regola pratica: <strong>prima scegli il sistema di riferimento, poi disegna le forze</strong>. Se il sistema è inerziale, scrivi solo forze reali. Se è non inerziale, aggiungi le forze apparenti.</p>`
        },
        {
            id: "s20-note-passaggio-chiave",
            type: "note_box",
            title: "📝 Passaggio Chiave: Proiezione Radiale dello Spostamento",
            icon: "📝",
            content: `<p>Nella dimostrazione che le forze centrali sono conservative, il passaggio $\\hat{u}_r \\cdot d\\vec{s} = dr$ è spesso dato per scontato ma merita attenzione. La chiave è la decomposizione dello spostamento in coordinate polari:</p>
<p>$$d\\vec{s} = dr\\,\\hat{u}_r + r\\,d\\theta\\,\\hat{u}_\\theta$$</p>
<p>Il primo termine è la componente <strong>radiale</strong> (avvicinamento/allontanamento dal centro), il secondo è la componente <strong>tangenziale</strong> (rotazione attorno al centro). Poiché $\\hat{u}_r \\perp \\hat{u}_\\theta$, il prodotto scalare $\\hat{u}_r \\cdot d\\vec{s}$ seleziona solo la componente radiale $dr$. Questo è il motivo per cui la componente tangenziale del moto <strong>non contribuisce</strong> al lavoro della forza centrale.</p>`
        },
        {
            id: "s20-oral-keplero",
            type: "oral_box",
            title: "🎤 Domanda Orale: Dalla Forza Centrale alla Seconda Legge di Keplero",
            icon: "🎤",
            content: `<p><strong>Domanda tipica:</strong> "Dimostri che la seconda legge di Keplero è una conseguenza del fatto che la gravità è una forza centrale."</p>
<p><strong>Risposta attesa:</strong> La catena logica è: la gravità è una forza centrale → il momento $\\vec{M}_O = \\vec{r} \\times \\vec{F}_C = \\vec{0}$ perché $\\vec{r} \\parallel \\hat{u}_r$ → $d\\vec{L}_O/dt = \\vec{0}$ → $\\vec{L}_O$ costante → $|\\vec{L}_O|$ costante → la velocità areolare $dA/dt = |\\vec{L}_O|/(2m)$ è costante → aree uguali in tempi uguali → seconda legge di Keplero.</p>
<p>Il professore si aspetta che colleghi esplicitamente ogni passaggio, non che salti dalla forza centrale direttamente a Keplero.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è una forza apparente e quando compare?",
            back: "Una forza apparente (o forza d'inerzia) è una forza fittizia che non nasce da un'interazione fisica fondamentale, ma dalla scelta di un sistema di riferimento non inerziale. Compare quando si descrive la dinamica in un sistema accelerato. La legge diventa: $m\\vec{a}' = \\sum \\vec{F}_{reali} + \\sum \\vec{F}_{apparenti}$."
        },
        {
            type: "formula",
            front: "Scrivi la forza di trascinamento e la forza di Coriolis.",
            back: "Forza di trascinamento: $\\vec{F}_{tr} = -m\\vec{a}_{tr}$ (opposta all'accelerazione del sistema). Forza di Coriolis: $\\vec{F}_{Cor} = -2m(\\vec{\\omega} \\times \\vec{v}')$ (perpendicolare a $\\vec{\\omega}$ e $\\vec{v}'$)."
        },
        {
            type: "domanda",
            front: "Un pendolo in un vagone accelerato forma angolo θ con la verticale. Qual è θ? Dimostralo da entrambi i sistemi di riferimento.",
            back: "Dal sistema inerziale: $T\\sin\\theta = Ma$ e $T\\cos\\theta = Mg$, dividendo si ottiene $\\tan\\theta = a/g$. Dal sistema non inerziale: il pendolo è fermo, si aggiunge $\\vec{F}_{app} = -M\\vec{a}$, le equazioni sono identiche e si ottiene lo stesso $\\tan\\theta = a/g$."
        },
        {
            type: "definizione",
            front: "Definisci forza centrale e scrivi la sua espressione matematica.",
            back: "Una forza centrale $\\vec{F}_C = F(r)\\,\\hat{u}_r$ soddisfa due condizioni: (1) la sua direzione passa sempre per un punto fisso $O$ (centro della forza); (2) il suo modulo dipende solo dalla distanza $r$ dal centro. Se $F(r) \\lt 0$ è attrattiva, se $F(r) \\gt 0$ è repulsiva."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che sotto una forza centrale il momento angolare si conserva.",
            back: "Dalla seconda equazione cardinale: $d\\vec{L}_O/dt = \\vec{M}_O$. Il momento della forza è $\\vec{M}_O = \\vec{r} \\times F(r)\\hat{u}_r$. Poiché $\\vec{r} \\parallel \\hat{u}_r$, il prodotto vettoriale è nullo: $\\vec{M}_O = \\vec{0}$. Quindi $d\\vec{L}_O/dt = \\vec{0}$ e $\\vec{L}_O$ è costante."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che ogni forza centrale è conservativa.",
            back: "Il lavoro è $L = \\int_A^B F(r)\\hat{u}_r \\cdot d\\vec{s}$. Decompongo $d\\vec{s} = dr\\,\\hat{u}_r + r\\,d\\theta\\,\\hat{u}_\\theta$. Poiché $\\hat{u}_r \\cdot \\hat{u}_\\theta = 0$, si ha $\\hat{u}_r \\cdot d\\vec{s} = dr$. Quindi $L = \\int_{r_A}^{r_B} F(r)\\,dr$, che dipende solo dagli estremi e non dal percorso. La forza è conservativa."
        },
        {
            type: "formula",
            front: "Scrivi la velocità areolare e collegala al momento angolare.",
            back: "$\\frac{dA}{dt} = \\frac{|\\vec{L}_O|}{2m}$. Per una forza centrale $\\vec{L}_O$ è costante, quindi $dA/dt$ è costante. Questo è il contenuto della seconda legge di Keplero."
        },
        {
            type: "tranello",
            front: "Errore comune: inserire la forza centrifuga nel diagramma delle forze di un sistema inerziale.",
            back: "La forza centrifuga è una forza apparente che esiste SOLO nel sistema non inerziale rotante. Nel sistema inerziale, c'è solo la forza centripeta (che è una forza reale: tensione, normale, attrito...). Prima scegli il sistema di riferimento, poi disegna le forze!"
        },
        {
            type: "domanda",
            front: "Nel pendolo conico, qual è la condizione sulla velocità angolare perché il pendolo si sollevi dalla verticale?",
            back: "Dall'equazione $\\cos\\theta = g/(\\omega^2 L)$, la soluzione esiste solo se $\\cos\\theta \\le 1$, cioè $\\omega^2 \\ge g/L$. Se $\\omega$ è troppo piccola, il pendolo resta verticale ($\\theta = 0$). La velocità angolare minima è $\\omega_{min} = \\sqrt{g/L}$."
        },
        {
            type: "domanda",
            front: "Perché i paracadutisti in caduta libera si sentono 'senza peso'?",
            back: "Il loro sistema di riferimento accelera con $\\vec{a}_{tr} = \\vec{g}$. La forza apparente $\\vec{F}_{tr} = -m\\vec{g}$ cancella esattamente il peso $\\vec{P} = m\\vec{g}$. La forza totale percepita è $\\vec{F}' = m\\vec{g} - m\\vec{g} = 0$. Non sentono alcuna forza, dunque si sentono in assenza di peso."
        }
    ]
};

