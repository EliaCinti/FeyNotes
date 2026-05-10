const LESSON = {
    id: "L27", date: "Lezione 27 — 27 Apr 2026",
    title: "Dinamica dei Sistemi di Punti Materiali",
    abstract: "Estensione della dinamica dal punto materiale ai sistemi: forze interne ed esterne, centro di massa, Prima e Seconda Equazione Cardinale, conservazione della quantità di moto e del momento angolare, Teorema di König per l'energia cinetica.",

    sections: [
        {
            id: "s27-introduzione",
            type: "section",
            title: "Dal Punto al Sistema: una Nuova Prospettiva",
            icon: "🔭",
            content: `<p>In questa lezione estendiamo i concetti della dinamica del punto materiale a sistemi composti da più punti materiali. L'obiettivo è ripercorrere le tappe fondamentali della dinamica, cercando di mantenere gli schemi di risoluzione dei problemi già sviluppati per il singolo punto.</p>
<p>La prima, grande differenza che incontriamo nel passare dal punto al sistema è la <strong>natura delle forze agenti</strong>. Per un singolo punto, abbiamo sempre considerato forze che agiscono <em>sul</em> punto, provenienti dall'esterno. Quando abbiamo a che fare con un sistema — come una sedia, una nuvola di gas, o qualsiasi oggetto fisico reale — dobbiamo introdurre una distinzione fondamentale tra forze interne e forze esterne.</p>
<p>Abbiamo già sfiorato il concetto di interazione tra più corpi in diversi contesti:</p>
<ul>
<li>Il <strong>terzo principio della dinamica</strong>, che descrive l'azione mutua tra due corpi.</li>
<li>Le <strong>forze centrali</strong>, come l'interazione gravitazionale Terra-Sole.</li>
<li>Il <strong>primo principio della dinamica</strong>, che afferma che lo stato di moto di un punto non cambia a meno che non interagisca con <em>altri</em> sistemi.</li>
</ul>
<p>In tutti questi casi, la forza agisce come un mediatore: è l'effetto di un'interazione, ma diventa poi la causa delle variazioni dello stato di moto (l'accelerazione). Ora vedremo come questi concetti si generalizzano ai sistemi.</p>`
        },
        {
            id: "s27-forze-interne-esterne",
            type: "section",
            title: "Forze Interne e Forze Esterne",
            icon: "⚖️",
            content: `<p>Quando consideriamo un sistema di $N$ punti materiali, le forze che agiscono su un generico punto $i$-esimo possono essere classificate in due categorie.</p>`,
            subsections: [
                {
                    subtitle: "Definizione e Classificazione",
                    content: `<p><strong>Forze esterne</strong> ($\\vec{F}^{(e)}$): le forze esercitate sul sistema da corpi o agenti <em>esterni</em> al sistema stesso. Ad esempio, la forza di gravità che la Terra esercita su una sedia, o la forza di attrito tra la sedia e il pavimento.</p>
<p><strong>Forze interne</strong> ($\\vec{F}^{(i)}$): le forze che i punti materiali del sistema si scambiano <em>reciprocamente</em>. Sono le forze di interazione che tengono insieme il sistema (es. i legami molecolari che rendono una sedia un corpo rigido).</p>
<p>La forza totale agente sull'$i$-esimo punto materiale è quindi:</p>
<p>$$\\vec{F}_i = \\vec{F}_i^{(e)} + \\vec{F}_i^{(i)} = \\vec{F}_i^{(e)} + \\sum_{j=1,\\, j \\neq i}^{N} \\vec{F}_{ji}$$</p>
<p>dove $\\vec{F}_{ji}$ è la forza che il punto $j$ esercita sul punto $i$.</p>`
                },
                {
                    subtitle: "Schema delle Forze su un Sistema",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Forze interne ed esterne su un sistema di punti</strong></p>
  <p><em>Ellisse tratteggiata blu che racchiude il sistema. All'interno: punti $m_i$, $m_j$, $m_k$ e altri. Frecce rosse dalle masse $m_j$, $m_k$, ecc. verso $m_i$ etichettate $\\vec{F}_{ji}$, $\\vec{F}_{ki}$, ecc. (forze interne). Una freccia blu dall'esterno verso $m_i$ etichettata $\\vec{F}_i^{(e)}$ (forza esterna). Tutte le frecce interne devono avere etichetta.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p><strong>Osservazione importante:</strong> mentre la risultante delle forze interne agenti su un <em>singolo</em> punto del sistema ($\\vec{F}_i^{(i)}$) non è in generale nulla, la risultante di <em>tutte</em> le forze interne del sistema è sempre nulla. Questo è un risultato fondamentale.</p>`
                },
                {
                    subtitle: "Teorema: la Risultante delle Forze Interne è Nulla",
                    content: `<p><strong>Enunciato:</strong> La risultante vettoriale di tutte le forze interne agenti su un sistema di punti materiali è sempre nulla.</p>
<p><strong>Dimostrazione:</strong> La risultante totale delle forze interne è:</p>
<p>$$\\vec{F}_{tot}^{(i)} = \\sum_{i=1}^{N} \\vec{F}_i^{(i)} = \\sum_{i=1}^{N} \\sum_{j=1,\\, j \\neq i}^{N} \\vec{F}_{ji}$$</p>
<p>Questa doppia sommatoria si estende su tutte le possibili coppie di particelle $(i, j)$. Per ogni termine $\\vec{F}_{ji}$ (forza di $j$ su $i$) presente nella somma, esisterà anche il termine $\\vec{F}_{ij}$ (forza di $i$ su $j$).</p>
<p>Per il <strong>terzo principio della dinamica</strong> (nella forma debole: $\\vec{F}_{ij} = -\\vec{F}_{ji}$), ogni coppia dà contributo nullo:</p>
<p>$$\\vec{F}_{ij} + \\vec{F}_{ji} = \\vec{0}$$</p>
<p>Raggruppando tutti i termini in coppie:</p>
<p>$$\\vec{F}_{tot}^{(i)} = \\vec{0}$$</p>
<p>Questo risultato è fondamentale e avrà conseguenze importantissime per tutta la dinamica dei sistemi. ∎</p>`
                }
            ],
            formulas: [
                { label: "Forza totale sull'i-esimo punto", latex: "\\vec{F}_i = \\vec{F}_i^{(e)} + \\sum_{j \\neq i} \\vec{F}_{ji}" },
                { label: "Risultante forze interne", latex: "\\vec{F}_{tot}^{(i)} = \\vec{0}" }
            ]
        },
        {
            id: "s27-centro-massa",
            type: "section",
            title: "Centro di Massa e sue Proprietà",
            icon: "🎯",
            content: `<p>Per descrivere il moto d'insieme di un sistema complesso — come uno sciame d'api o una nuvola — non siamo interessati al moto di ogni singola particella. Abbiamo bisogno di un <strong>punto rappresentativo</strong> che descriva il moto collettivo del sistema. Questo punto è il <strong>centro di massa</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Centro di Massa",
                    content: `<p>Il <strong>centro di massa</strong> (CM) è un punto geometrico la cui posizione $\\vec{r}_{CM}$ è definita come la <strong>media pesata</strong> delle posizioni $\\vec{r}_i$ dei singoli punti materiali, usando le rispettive masse $m_i$ come pesi:</p>
<p>$$\\vec{r}_{CM} = \\frac{\\sum_{i=1}^{N} m_i \\vec{r}_i}{\\sum_{i=1}^{N} m_i} = \\frac{1}{M_{tot}} \\sum_{i=1}^{N} m_i \\vec{r}_i$$</p>
<p>dove $M_{tot} = \\sum_{i=1}^{N} m_i$ è la massa totale del sistema.</p>
<p><strong>Nota:</strong> il centro di massa è un punto geometrico e <em>non necessariamente</em> coincide con la posizione di un punto materiale del sistema. Ad esempio, il centro di massa di un anello si trova al centro dell'anello, dove non c'è materia.</p>`
                },
                {
                    subtitle: "Esempio: Centro di Massa per Due Punti",
                    content: `<p>Consideriamo un sistema unidimensionale con $m_1 = 2\\,\\text{kg}$ in posizione $x_1 = 0\\,\\text{m}$ e $m_2 = 1\\,\\text{kg}$ in posizione $x_2 = 3\\,\\text{m}$.</p>
<p>La massa totale è $M_{tot} = 2 + 1 = 3\\,\\text{kg}$. La posizione del centro di massa:</p>
<p>$$x_{CM} = \\frac{m_1 x_1 + m_2 x_2}{M_{tot}} = \\frac{2 \\cdot 0 + 1 \\cdot 3}{3} = 1\\,\\text{m}$$</p>
<p>Il centro di massa si trova a $1\\,\\text{m}$ dall'origine, <strong>più vicino alla massa maggiore</strong> $m_1$. Questo illustra il concetto di media pesata: il punto più massivo "attira" il centro di massa verso di sé.</p>`
                },
                {
                    subtitle: "Velocità del CM e Quantità di Moto",
                    content: `<p>La velocità del centro di massa si ottiene derivando la posizione rispetto al tempo:</p>
<p>$$\\vec{v}_{CM} = \\frac{d\\vec{r}_{CM}}{dt} = \\frac{1}{M_{tot}} \\sum_{i=1}^{N} m_i \\vec{v}_i$$</p>
<p>Riconoscendo che $\\sum_{i=1}^{N} m_i \\vec{v}_i = \\sum_{i=1}^{N} \\vec{p}_i = \\vec{P}_{tot}$ è la quantità di moto totale del sistema, otteniamo un risultato fondamentale.</p>
<p><strong>Proposizione — Quantità di Moto del Sistema:</strong></p>
<p>$$\\vec{P}_{tot} = M_{tot} \\vec{v}_{CM}$$</p>
<p>In altre parole, la quantità di moto del sistema è uguale alla quantità di moto che avrebbe un singolo punto materiale con la massa totale del sistema, posizionato nel centro di massa e in moto con la velocità del centro di massa.</p>
<p><strong>Dimostrazione:</strong> Per definizione $\\vec{P}_{tot} = \\sum_{i=1}^{N} m_i \\vec{v}_i$. Dall'espressione della velocità del CM, moltiplicando entrambi i membri per $M_{tot}$:</p>
<p>$$M_{tot} \\vec{v}_{CM} = \\sum_{i=1}^{N} m_i \\vec{v}_i = \\vec{P}_{tot} \\quad \\blacksquare$$</p>`
                }
            ],
            formulas: [
                { label: "Posizione del CM", latex: "\\vec{r}_{CM} = \\frac{1}{M_{tot}} \\sum_{i=1}^{N} m_i \\vec{r}_i" },
                { label: "Velocità del CM", latex: "\\vec{v}_{CM} = \\frac{1}{M_{tot}} \\sum_{i=1}^{N} m_i \\vec{v}_i" },
                { label: "Quantità di moto totale", latex: "\\vec{P}_{tot} = M_{tot} \\vec{v}_{CM}" }
            ]
        },
        {
            id: "s27-prima-equazione-cardinale",
            type: "section",
            title: "Prima Equazione Cardinale della Dinamica",
            icon: "📐",
            content: `<p>Derivando ulteriormente la velocità del centro di massa, otteniamo la sua accelerazione e arriviamo al <strong>teorema fondamentale della dinamica dei sistemi</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Derivazione",
                    content: `<p>L'accelerazione del centro di massa è:</p>
<p>$$\\vec{a}_{CM} = \\frac{d\\vec{v}_{CM}}{dt} = \\frac{1}{M_{tot}} \\sum_{i=1}^{N} m_i \\vec{a}_i$$</p>
<p>Moltiplicando per $M_{tot}$:</p>
<p>$$M_{tot} \\vec{a}_{CM} = \\sum_{i=1}^{N} m_i \\vec{a}_i$$</p>
<p>Per il secondo principio applicato a ciascun punto, $m_i \\vec{a}_i = \\vec{F}_i$, dove $\\vec{F}_i$ è la forza totale (interna + esterna) agente sull'$i$-esimo punto:</p>
<p>$$M_{tot} \\vec{a}_{CM} = \\sum_{i=1}^{N} \\vec{F}_i = \\sum_{i=1}^{N} \\vec{F}_i^{(e)} + \\sum_{i=1}^{N} \\vec{F}_i^{(i)}$$</p>
<p>Abbiamo però dimostrato che la risultante di tutte le forze interne è nulla: $\\sum \\vec{F}_i^{(i)} = \\vec{0}$. Di conseguenza:</p>`
                },
                {
                    subtitle: "Enunciato della Prima Equazione Cardinale",
                    content: `<p><strong>Teorema:</strong> La risultante delle sole forze esterne agenti su un sistema di punti materiali è uguale al prodotto della massa totale per l'accelerazione del centro di massa:</p>
<p>$$\\vec{F}_{tot}^{(e)} = \\sum_{i=1}^{N} \\vec{F}_i^{(e)} = M_{tot} \\vec{a}_{CM}$$</p>
<p>Equivalentemente, in forma di derivata della quantità di moto:</p>
<p>$$\\vec{F}_{tot}^{(e)} = \\frac{d\\vec{P}_{tot}}{dt}$$</p>
<p>poiché $M_{tot} \\vec{a}_{CM} = \\frac{d}{dt}(M_{tot} \\vec{v}_{CM}) = \\frac{d\\vec{P}_{tot}}{dt}$.</p>`
                },
                {
                    subtitle: "Significato Fisico",
                    content: `<p>Questo risultato è di <strong>enorme importanza</strong>. Ci dice che il moto del centro di massa di un sistema è determinato <strong>esclusivamente</strong> dalla risultante delle forze esterne. Le forze interne, per quanto complesse, non possono alterare il moto del centro di massa.</p>
<p>Ad esempio, se uno sciame d'api si muove, le interazioni tra le singole api (forze interne) non cambiano la traiettoria complessiva dello sciame. Solo una forza esterna, come una raffica di vento, può deviare il moto del centro di massa.</p>
<p>Questo significa che, per studiare il moto d'insieme di un sistema, possiamo trattarlo come un <strong>singolo punto materiale</strong> (il centro di massa) con massa pari alla massa totale, su cui agisce la somma di tutte le forze esterne.</p>`
                },
                {
                    subtitle: "Esempio: Due Blocchi Collegati da una Molla",
                    content: `<p>Consideriamo due blocchi su un piano orizzontale liscio: $m_1 = 3\\,\\text{kg}$ e $m_2 = 1\\,\\text{kg}$, collegati da una molla. Una forza esterna orizzontale $\\vec{F} = 8\\,\\text{N}\\,\\hat{x}$ viene applicata al blocco $m_1$.</p>
<p>Massa totale: $M_{tot} = 3 + 1 = 4\\,\\text{kg}$.</p>
<p>Forze esterne: la forza applicata $\\vec{F}$, i pesi e le reazioni normali (che si equilibrano in verticale). <strong>La forza della molla è una forza interna</strong> al sistema e non compare nell'equazione del centro di massa!</p>
<p>$$\\vec{F}_{tot}^{(e)} = \\vec{F} = 8\\,\\text{N}\\,\\hat{x}$$</p>
<p>Per la Prima Equazione Cardinale:</p>
<p>$$\\vec{a}_{CM} = \\frac{\\vec{F}_{tot}^{(e)}}{M_{tot}} = \\frac{8}{4}\\,\\hat{x} = 2\\,\\text{m/s}^2\\,\\hat{x}$$</p>
<p>Il centro di massa accelera a $2\\,\\text{m/s}^2$ nella direzione di $\\vec{F}$, <strong>indipendentemente</strong> dal fatto che la molla si comprima, si estenda o oscilli durante il moto.</p>`
                }
            ],
            formulas: [
                { label: "Prima Equazione Cardinale", latex: "\\vec{F}_{tot}^{(e)} = M_{tot} \\vec{a}_{CM}" },
                { label: "Forma con quantità di moto", latex: "\\vec{F}_{tot}^{(e)} = \\frac{d\\vec{P}_{tot}}{dt}" }
            ]
        },
        {
            id: "s27-conservazione-qdm",
            type: "section",
            title: "Conservazione della Quantità di Moto",
            icon: "🛡️",
            content: `<p>Un'importante conseguenza della Prima Equazione Cardinale si ha nel caso in cui la risultante delle forze esterne sia nulla.</p>`,
            subsections: [
                {
                    subtitle: "Teorema di Conservazione",
                    content: `<p><strong>Teorema:</strong> Se la risultante delle forze esterne agenti su un sistema è nulla, la quantità di moto totale del sistema si conserva:</p>
<p>$$\\vec{F}_{tot}^{(e)} = \\vec{0} \\;\\Rightarrow\\; \\frac{d\\vec{P}_{tot}}{dt} = \\vec{0} \\;\\Rightarrow\\; \\vec{P}_{tot} = \\text{costante}$$</p>
<p><strong>Dimostrazione:</strong> Se $\\vec{F}_{tot}^{(e)} = \\vec{0}$, dalla Prima Equazione Cardinale si ha immediatamente $\\frac{d\\vec{P}_{tot}}{dt} = \\vec{0}$, il che implica $\\vec{P}_{tot} = M_{tot}\\vec{v}_{CM} = \\text{costante}$. Di conseguenza, anche la velocità del centro di massa è costante: il centro di massa si muove di <strong>moto rettilineo uniforme</strong> (o rimane fermo). $\\blacksquare$</p>`
                },
                {
                    subtitle: "Sistema Isolato e Conservazione Componente per Componente",
                    content: `<p>Un <strong>sistema isolato</strong> è un sistema su cui la risultante delle forze esterne è nulla: $\\vec{F}_{tot}^{(e)} = \\vec{0}$. Per un sistema isolato, la quantità di moto totale si conserva.</p>
<p><strong>Osservazione importante:</strong> la conservazione della quantità di moto vale anche <strong>componente per componente</strong>. Se la risultante delle forze esterne è nulla solo lungo una certa direzione (ad esempio $\\hat{x}$), allora la componente $P_{tot,x}$ si conserva lungo quella direzione, anche se le altre componenti variano.</p>`
                }
            ],
            formulas: [
                { label: "Conservazione della quantità di moto", latex: "\\vec{F}_{tot}^{(e)} = \\vec{0} \\;\\Rightarrow\\; \\vec{P}_{tot} = \\text{costante}" }
            ]
        },
        {
            id: "s27-momento-angolare",
            type: "section",
            title: "Momento Angolare del Sistema e Seconda Equazione Cardinale",
            icon: "🌀",
            content: `<p>Così come per il punto materiale, possiamo definire il momento angolare per un sistema di punti e derivare la <strong>Seconda Equazione Cardinale della Dinamica</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizioni Fondamentali",
                    content: `<p><strong>Momento angolare totale</strong> di un sistema di $N$ punti materiali rispetto a un polo fisso $O$:</p>
<p>$$\\vec{L}_{tot} = \\sum_{i=1}^{N} \\vec{L}_i = \\sum_{i=1}^{N} \\vec{r}_i \\times \\vec{p}_i = \\sum_{i=1}^{N} m_i \\left(\\vec{r}_i \\times \\vec{v}_i\\right)$$</p>
<p>dove $\\vec{r}_i$ è il vettore posizione dell'$i$-esimo punto rispetto al polo $O$.</p>
<p><strong>Momento totale delle forze esterne</strong> (torque) rispetto allo stesso polo:</p>
<p>$$\\vec{M}_{tot}^{(e)} = \\sum_{i=1}^{N} \\vec{r}_i \\times \\vec{F}_i^{(e)}$$</p>`
                },
                {
                    subtitle: "Seconda Equazione Cardinale: Enunciato e Dimostrazione",
                    content: `<p><strong>Teorema:</strong> Il momento totale delle forze esterne rispetto a un polo fisso $O$ è uguale alla derivata temporale del momento angolare totale del sistema rispetto allo stesso polo:</p>
<p>$$\\vec{M}_{tot}^{(e)} = \\frac{d\\vec{L}_{tot}}{dt}$$</p>
<p><strong>Dimostrazione:</strong> Deriviamo il momento angolare totale:</p>
<p>$$\\frac{d\\vec{L}_{tot}}{dt} = \\frac{d}{dt} \\sum_{i=1}^{N} \\left(\\vec{r}_i \\times m_i \\vec{v}_i\\right) = \\sum_{i=1}^{N} \\left(\\underbrace{\\vec{v}_i \\times m_i \\vec{v}_i}_{= \\vec{0}} + \\vec{r}_i \\times m_i \\vec{a}_i\\right)$$</p>
<p>Il primo termine si annulla (prodotto vettoriale di un vettore con se stesso). Rimane:</p>
<p>$$\\frac{d\\vec{L}_{tot}}{dt} = \\sum_{i=1}^{N} \\vec{r}_i \\times \\vec{F}_i = \\sum_{i=1}^{N} \\vec{r}_i \\times \\vec{F}_i^{(e)} + \\sum_{i=1}^{N} \\vec{r}_i \\times \\vec{F}_i^{(i)}$$</p>
<p>Il secondo termine è il momento totale delle forze interne. Raggruppando le coppie $(i,j)$, il contributo di ciascuna coppia è:</p>
<p>$$\\vec{r}_i \\times \\vec{F}_{ji} + \\vec{r}_j \\times \\vec{F}_{ij} = (\\vec{r}_i - \\vec{r}_j) \\times \\vec{F}_{ji}$$</p>
<p>Questo si annulla se $\\vec{F}_{ji}$ è parallelo a $(\\vec{r}_i - \\vec{r}_j)$, cioè se la forza è diretta lungo la congiungente. Pertanto il momento totale delle forze interne è nullo e:</p>
<p>$$\\frac{d\\vec{L}_{tot}}{dt} = \\sum_{i=1}^{N} \\vec{r}_i \\times \\vec{F}_i^{(e)} = \\vec{M}_{tot}^{(e)} \\quad \\blacksquare$$</p>`
                },
                {
                    subtitle: "Conservazione del Momento Angolare",
                    content: `<p>In modo analogo alla Prima Equazione Cardinale, se il momento totale delle forze esterne rispetto a un polo è nullo, il momento angolare totale si conserva:</p>
<p>$$\\vec{M}_{tot}^{(e)} = \\vec{0} \\;\\Rightarrow\\; \\vec{L}_{tot} = \\text{costante}$$</p>
<p>Questa è la <strong>legge di conservazione del momento angolare</strong> per un sistema di punti.</p>`
                },
                {
                    subtitle: "Esempio: Il Pattinatore che Ritira le Braccia",
                    content: `<p>Un esempio classico di conservazione del momento angolare: un pattinatore sul ghiaccio ruota su se stesso con le braccia aperte. Quando ritira le braccia verso il corpo, la sua velocità di rotazione aumenta drasticamente.</p>
<p><strong>Perché?</strong> Il sistema (pattinatore) è approssimativamente isolato per il momento angolare: le forze esterne (peso e reazione normale) passano per l'asse di rotazione e hanno momento nullo. Quindi $\\vec{M}_{tot}^{(e)} \\approx \\vec{0}$ e $\\vec{L}_{tot}$ si conserva.</p>
<p>Il ritirare le braccia è un'operazione interna al sistema: riduce il "momento d'inerzia" (concetto che vedremo per i corpi rigidi), ma non può cambiare $L_{tot}$. Poiché $L_{tot} = I\\omega$, se $I$ diminuisce, $\\omega$ deve aumentare per compensare.</p>`
                }
            ],
            formulas: [
                { label: "Momento angolare totale", latex: "\\vec{L}_{tot} = \\sum_{i=1}^{N} \\vec{r}_i \\times m_i \\vec{v}_i" },
                { label: "Seconda Equazione Cardinale", latex: "\\vec{M}_{tot}^{(e)} = \\frac{d\\vec{L}_{tot}}{dt}" },
                { label: "Conservazione di L", latex: "\\vec{M}_{tot}^{(e)} = \\vec{0} \\;\\Rightarrow\\; \\vec{L}_{tot} = \\text{costante}" }
            ]
        },
        {
            id: "s27-terzo-principio-forme",
            type: "alert_box",
            title: "⚠️ Terzo Principio: Forma Debole vs Forma Forte",
            icon: "⚠️",
            content: `<p>Nella dimostrazione della Seconda Equazione Cardinale abbiamo usato un'ipotesi più restrittiva rispetto alla Prima Equazione Cardinale. È fondamentale capire la differenza:</p>
<p><strong>Terzo principio — forma debole:</strong> $\\vec{F}_{ij} = -\\vec{F}_{ji}$ (le forze sono uguali e opposte). Basta per dimostrare che $\\vec{F}_{tot}^{(i)} = \\vec{0}$ e quindi per la <strong>Prima Equazione Cardinale</strong>.</p>
<p><strong>Terzo principio — forma forte:</strong> $\\vec{F}_{ij} = -\\vec{F}_{ji}$ <em>e</em> le forze sono dirette lungo la congiungente $\\vec{r}_i - \\vec{r}_j$ (forze centrali). Serve per dimostrare che il <strong>momento delle forze interne è nullo</strong> e quindi per la <strong>Seconda Equazione Cardinale</strong>.</p>
<p><strong>Attenzione:</strong> La forma forte è soddisfatta dalle forze gravitazionali, elettrostatiche, dai legami meccanici rigidi. Non è sempre soddisfatta dalle forze magnetiche tra cariche in moto. Se le forze interne non sono centrali, il momento delle forze interne potrebbe non annullarsi e la Seconda Equazione Cardinale nella forma semplice non è più valida.</p>
<p>Questo è un punto che viene spesso chiesto all'esame orale!</p>`
        },
        {
            id: "s27-energia-cinetica-konig",
            type: "section",
            title: "Energia Cinetica del Sistema e Teorema di König",
            icon: "⚡",
            content: `<p>Per un sistema di punti materiali, l'energia cinetica totale ha una struttura particolarmente interessante quando viene decomposta nel moto del centro di massa e nel moto relativo ad esso.</p>`,
            subsections: [
                {
                    subtitle: "Energia Cinetica Totale e Decomposizione delle Velocità",
                    content: `<p>L'<strong>energia cinetica totale</strong> di un sistema di $N$ punti materiali è la somma delle energie cinetiche dei singoli punti:</p>
<p>$$T = \\sum_{i=1}^{N} \\frac{1}{2} m_i v_i^2$$</p>
<p>Per analizzare questa quantità, esprimiamo la velocità di ciascun punto come somma della velocità del centro di massa e della velocità relativa al CM:</p>
<p>$$\\vec{v}_i = \\vec{v}_{CM} + \\vec{v}_i'$$</p>
<p>dove $\\vec{v}_i' = \\vec{v}_i - \\vec{v}_{CM}$ è la velocità dell'$i$-esimo punto nel riferimento del centro di massa.</p>`
                },
                {
                    subtitle: "Enunciato del Teorema di König",
                    content: `<p><strong>Teorema di König per l'Energia Cinetica:</strong> L'energia cinetica totale di un sistema si decompone in:</p>
<p>$$T = \\underbrace{\\frac{1}{2} M_{tot}\\, v_{CM}^2}_{T_{CM}} + \\underbrace{\\sum_{i=1}^{N} \\frac{1}{2} m_i\\, v_i'^{\\,2}}_{T_{int}}$$</p>
<ul>
<li>$T_{CM} = \\frac{1}{2} M_{tot}\\, v_{CM}^2$: <strong>energia cinetica del centro di massa</strong> (traslazionale), pari all'energia cinetica di un punto materiale di massa $M_{tot}$ che si muove con $\\vec{v}_{CM}$.</li>
<li>$T_{int} = \\sum \\frac{1}{2} m_i v_i'^{\\,2}$: <strong>energia cinetica interna</strong> (o relativa), dovuta al moto dei punti rispetto al centro di massa.</li>
</ul>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Sostituiamo $\\vec{v}_i = \\vec{v}_{CM} + \\vec{v}_i'$ nell'espressione dell'energia cinetica:</p>
<p>$$T = \\sum_{i=1}^{N} \\frac{1}{2} m_i (\\vec{v}_{CM} + \\vec{v}_i') \\cdot (\\vec{v}_{CM} + \\vec{v}_i')$$</p>
<p>Espandendo il prodotto scalare:</p>
<p>$$T = \\sum_i \\frac{1}{2} m_i v_{CM}^2 + \\sum_i m_i\\, \\vec{v}_{CM} \\cdot \\vec{v}_i' + \\sum_i \\frac{1}{2} m_i v_i'^{\\,2}$$</p>
<p>Il primo termine dà $\\frac{1}{2} M_{tot} v_{CM}^2$. Il <strong>termine misto</strong> contiene il fattore:</p>
<p>$$\\vec{v}_{CM} \\cdot \\sum_{i=1}^{N} m_i \\vec{v}_i' = \\vec{v}_{CM} \\cdot \\sum_{i=1}^{N} m_i (\\vec{v}_i - \\vec{v}_{CM}) = \\vec{v}_{CM} \\cdot \\left(\\vec{P}_{tot} - M_{tot}\\vec{v}_{CM}\\right) = \\vec{0}$$</p>
<p>poiché $\\vec{P}_{tot} = M_{tot}\\vec{v}_{CM}$ (per la Proposizione sulla Quantità di Moto del Sistema dimostrata in precedenza). Il termine misto si annulla, e rimane:</p>
<p>$$T = \\frac{1}{2} M_{tot}\\, v_{CM}^2 + \\sum_{i=1}^{N} \\frac{1}{2} m_i\\, v_i'^{\\,2} \\quad \\blacksquare$$</p>`
                },
                {
                    subtitle: "Esempio: Due Masse con Molla",
                    content: `<p>Consideriamo due masse uguali $m_1 = m_2 = m$ collegate da una molla, che oscillano simmetricamente rispetto al centro di massa (che rimane fermo, $v_{CM} = 0$).</p>
<p>Se in un certo istante $m_1$ ha velocità $+v$ e $m_2$ ha velocità $-v$:</p>
<p><strong>Calcolo diretto:</strong> $T = \\frac{1}{2}m v^2 + \\frac{1}{2}m v^2 = m v^2$</p>
<p><strong>Con König:</strong> Il CM è fermo, quindi $T_{CM} = \\frac{1}{2}(2m) \\cdot 0^2 = 0$. Le velocità relative al CM sono $v_1' = +v$ e $v_2' = -v$, quindi:</p>
<p>$$T_{int} = \\frac{1}{2}m v^2 + \\frac{1}{2}m v^2 = m v^2$$</p>
<p>$$T = T_{CM} + T_{int} = 0 + m v^2 = m v^2 \\quad \\checkmark$$</p>
<p>Tutta l'energia cinetica è interna! Se invece il sistema si muovesse anche traslazionalmente con $v_{CM} \\neq 0$, avremmo un contributo $T_{CM}$ aggiuntivo, ma i due termini sarebbero <strong>sempre separabili</strong>.</p>`
                },
                {
                    subtitle: "Significato Fisico",
                    content: `<p>Il Teorema di König è concettualmente molto importante: ci dice che l'energia cinetica di un sistema si può <strong>sempre separare</strong> in una parte legata al moto d'insieme (traslazione del CM) e una parte legata al moto "interno" (moto relativo al CM, che include rotazioni, vibrazioni, deformazioni, ecc.).</p>
<p>Questa separazione è alla base di molte analisi in meccanica dei sistemi e dei corpi rigidi, dove il termine interno diventerà l'energia cinetica di rotazione.</p>`
                }
            ],
            formulas: [
                { label: "Energia cinetica totale", latex: "T = \\sum_{i=1}^{N} \\frac{1}{2} m_i v_i^2" },
                { label: "Teorema di König", latex: "T = \\frac{1}{2} M_{tot} v_{CM}^2 + \\sum_{i=1}^{N} \\frac{1}{2} m_i v_i'^{\\,2}" }
            ]
        },
        {
            id: "s27-riepilogo",
            type: "note_box",
            title: "Riepilogo e Prospettive",
            icon: "📋",
            content: `<p>In questa lezione abbiamo costruito i tre pilastri fondamentali della dinamica dei sistemi di punti materiali:</p>
<ol>
<li><strong>Prima Equazione Cardinale:</strong> $\\vec{F}_{tot}^{(e)} = M_{tot} \\vec{a}_{CM}$ — il moto del centro di massa è governato dalle sole forze esterne. Richiede il terzo principio nella forma debole.</li>
<li><strong>Seconda Equazione Cardinale:</strong> $\\vec{M}_{tot}^{(e)} = \\frac{d\\vec{L}_{tot}}{dt}$ — il momento angolare è governato dal momento delle sole forze esterne. Richiede il terzo principio nella forma forte (forze centrali).</li>
<li><strong>Teorema di König:</strong> $T = T_{CM} + T_{int}$ — l'energia cinetica si separa in contributo traslazionale del CM e contributo interno.</li>
</ol>
<p>Nelle lezioni successive vedremo come queste equazioni si applicano ai <strong>corpi rigidi</strong>, dove il moto interno si riduce alla sola rotazione, e introdurremo i concetti di <strong>energia potenziale del sistema</strong> e <strong>momento d'inerzia</strong>.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cosa sono le forze interne e le forze esterne di un sistema di punti materiali?",
            back: "Le <strong>forze esterne</strong> ($\\vec{F}^{(e)}$) sono quelle esercitate da agenti esterni al sistema. Le <strong>forze interne</strong> ($\\vec{F}^{(i)}$) sono le forze di interazione reciproca tra i punti del sistema. La forza totale sull'$i$-esimo punto è $\\vec{F}_i = \\vec{F}_i^{(e)} + \\sum_{j \\neq i} \\vec{F}_{ji}$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che la risultante delle forze interne di un sistema è nulla.",
            back: "Si calcola $\\vec{F}_{tot}^{(i)} = \\sum_i \\sum_{j \\neq i} \\vec{F}_{ji}$. Raggruppando in coppie, per ogni $(i,j)$ si ha $\\vec{F}_{ji} + \\vec{F}_{ij} = \\vec{0}$ per il terzo principio (forma debole). Ogni coppia dà contributo nullo, quindi $\\vec{F}_{tot}^{(i)} = \\vec{0}$."
        },
        {
            type: "definizione",
            front: "Definisci il centro di massa di un sistema di punti materiali e scrivi la sua espressione.",
            back: "Il centro di massa è il punto geometrico la cui posizione è la media pesata delle posizioni dei punti, con pesi dati dalle masse: $$\\vec{r}_{CM} = \\frac{1}{M_{tot}} \\sum_{i=1}^{N} m_i \\vec{r}_i$$ Non coincide necessariamente con un punto materiale del sistema (es. centro di un anello)."
        },
        {
            type: "formula",
            front: "Enuncia la Prima Equazione Cardinale della Dinamica.",
            back: "$$\\vec{F}_{tot}^{(e)} = M_{tot} \\vec{a}_{CM} = \\frac{d\\vec{P}_{tot}}{dt}$$ La risultante delle sole forze esterne determina il moto del centro di massa. Le forze interne non influenzano il moto del CM."
        },
        {
            type: "domanda",
            front: "In quali condizioni si conserva la quantità di moto totale di un sistema? Vale anche componente per componente?",
            back: "La quantità di moto si conserva se $\\vec{F}_{tot}^{(e)} = \\vec{0}$ (sistema isolato): $\\vec{P}_{tot} = \\text{costante}$, e il CM si muove di moto rettilineo uniforme. Sì, vale anche componente per componente: se $F_{tot,x}^{(e)} = 0$, si conserva $P_{tot,x}$ anche se le altre componenti variano."
        },
        {
            type: "tranello",
            front: "Qual è la differenza tra il terzo principio in forma debole e in forma forte? Per quali equazioni cardinali servono?",
            back: "<strong>Forma debole:</strong> $\\vec{F}_{ij} = -\\vec{F}_{ji}$ (uguali e opposte). Basta per la <strong>Prima Equazione Cardinale</strong>. <strong>Forma forte:</strong> le forze sono anche dirette lungo la congiungente (forze centrali). Serve per la <strong>Seconda Equazione Cardinale</strong>, perché solo così $(\\vec{r}_i - \\vec{r}_j) \\times \\vec{F}_{ji} = \\vec{0}$. Le forze magnetiche possono violare la forma forte!"
        },
        {
            type: "dimostrazione",
            front: "Enuncia e dimostra il Teorema di König per l'energia cinetica.",
            back: "Si pone $\\vec{v}_i = \\vec{v}_{CM} + \\vec{v}_i'$ e si espande $T = \\sum \\frac{1}{2}m_i v_i^2$. Si ottengono tre termini: $\\frac{1}{2}M_{tot}v_{CM}^2$ (CM), un termine misto, e $\\sum \\frac{1}{2}m_i v_i'^{\\,2}$ (interno). Il termine misto contiene $\\sum m_i \\vec{v}_i' = \\vec{P}_{tot} - M_{tot}\\vec{v}_{CM} = \\vec{0}$, quindi si annulla. Risultato: $$T = \\frac{1}{2}M_{tot}v_{CM}^2 + \\sum \\frac{1}{2}m_i v_i'^{\\,2}$$"
        },
        {
            type: "domanda",
            front: "Enuncia la Seconda Equazione Cardinale e spiega quando si conserva il momento angolare totale.",
            back: "$$\\vec{M}_{tot}^{(e)} = \\frac{d\\vec{L}_{tot}}{dt}$$ Il momento delle forze esterne rispetto a un polo fisso $O$ è uguale alla derivata del momento angolare totale. Se $\\vec{M}_{tot}^{(e)} = \\vec{0}$, allora $\\vec{L}_{tot} = \\text{costante}$. Esempio classico: il pattinatore che ritira le braccia (momento delle forze esterne nullo rispetto all'asse di rotazione)."
        },
        {
            type: "domanda",
            front: "Nel Teorema di König, qual è l'interpretazione fisica dei due termini dell'energia cinetica?",
            back: "$T_{CM} = \\frac{1}{2}M_{tot}v_{CM}^2$ è l'energia cinetica <strong>traslazionale</strong>, legata al moto d'insieme del sistema. $T_{int} = \\sum \\frac{1}{2}m_i v_i'^{\\,2}$ è l'energia cinetica <strong>interna</strong>, legata a rotazioni, vibrazioni, deformazioni. I due contributi sono sempre separabili. Per i corpi rigidi, $T_{int}$ diventerà l'energia cinetica di rotazione."
        }
    ]
};

