const LESSON = {
    id: "L36", date: "Lezione 28 — 13 Mag 2026",
    title: "Il Corpo Rigido: Definizioni e Proprietà",
    abstract: "Introduzione al corpo rigido come sistema di punti materiali con vincolo di rigidità. Proprietà fondamentali: lavoro nullo delle forze interne, calcolo del centro di massa per corpi continui, e classificazione dei moti (traslazione, rotazione, roto-traslazione).",

    sections: [
        {
            id: "s36-definizione-corpo-rigido",
            type: "section",
            title: "Definizione di Corpo Rigido",
            icon: "🧱",
            content: `<p>In questa lezione iniziamo la trattazione di un particolare e importante sistema di punti materiali: il <strong>corpo rigido</strong>. Un corpo rigido è un sistema in cui la distanza relativa tra due punti qualunque che lo compongono non varia mai, indipendentemente dal moto del corpo o dalle forze applicate.</p>
<p>Se $\\vec{r}_{ij} = \\vec{r}_j - \\vec{r}_i$ è il vettore posizione relativa tra due punti $i$ e $j$ del sistema, il <strong>vincolo di rigidità</strong> si esprime come:</p>
<p>$$\\|\\vec{r}_{ij}\\| = \\text{costante} \\quad \\forall\\, i,j$$</p>
<p>Questo implica che la variazione infinitesima della distanza è nulla:</p>
<p>$$d(\\|\\vec{r}_{ij}\\|) = 0$$</p>
<p>Un tale sistema è anche detto <strong>indeformabile</strong>.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Corpo rigido con vincolo di rigidità</strong></p>
  <p><em>Corpo rigido (forma irregolare colorata) con due punti materiali $m_i$ e $m_j$ evidenziati. Un vettore rosso $\\vec{r}_{ij}$ collega i due punti. A lato, la condizione di vincolo $\\|\\vec{r}_{ij}\\| = \\text{costante}$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Modelli: Corpi Discreti e Continui",
                    content: `<p>I corpi rigidi possono essere modellizzati in due modi:</p>
<ul>
<li><strong>Corpi discreti</strong>: un insieme di un numero finito di masse puntiformi, collegate da aste ideali di massa trascurabile e inestensibili.</li>
<li><strong>Corpi continui</strong>: corpi in cui la massa è distribuita con continuità su un volume, una superficie o una linea. Questo è il modello che useremo più spesso per descrivere gli oggetti macroscopici.</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Vincolo di rigidità", latex: "\\|\\vec{r}_{ij}\\| = \\text{costante} \\quad \\forall\\, i,j" }
            ]
        },
        {
            id: "s36-decomposizione-moto",
            type: "section",
            title: "Proprietà Generali: Decomposizione del Moto",
            icon: "🔀",
            content: `<p>Come per ogni sistema di punti materiali, il moto di un corpo rigido può essere scomposto in un <strong>moto di insieme</strong> (la traslazione del centro di massa) e un <strong>moto relativo</strong> al centro di massa:</p>
<p>$$\\text{Moto Totale} = \\text{Moto del Centro di Massa} + \\text{Moto rispetto al Centro di Massa}$$</p>
<p>La peculiarità del corpo rigido è che il moto relativo al centro di massa è fortemente limitato dal vincolo di rigidità. Mentre in un sistema generico i punti possono avvicinarsi o allontanarsi, in un corpo rigido l'unico moto relativo possibile è una <strong>rotazione</strong> attorno a un asse passante per il centro di massa.</p>`
        },
        {
            id: "s36-lavoro-forze-interne",
            type: "section",
            title: "Lavoro Nullo delle Forze Interne",
            icon: "⚡",
            content: `<p>Una delle proprietà più importanti del corpo rigido riguarda il lavoro compiuto dalle forze interne.</p>
<p><strong>Teorema:</strong> Il lavoro totale compiuto dalle forze interne in un corpo rigido è <strong>sempre nullo</strong>:</p>
<p>$$L_{int} = 0$$</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Consideriamo una coppia di punti $i$ e $j$ all'interno del corpo rigido. Per il terzo principio della dinamica:</p>
<p>$$\\vec{F}_{ji} = -\\vec{F}_{ij}$$</p>
<p>Inoltre, queste forze sono dirette lungo la congiungente i due punti, quindi sono parallele al vettore posizione relativa $\\vec{r}_{ij} = \\vec{r}_j - \\vec{r}_i$.</p>
<p>Il lavoro infinitesimo compiuto da questa coppia di forze interne è:</p>
<p>$$dW_{int}^{(i,j)} = \\vec{F}_{ij} \\cdot d\\vec{r}_j + \\vec{F}_{ji} \\cdot d\\vec{r}_i = \\vec{F}_{ij} \\cdot d\\vec{r}_j - \\vec{F}_{ij} \\cdot d\\vec{r}_i$$</p>
<p>$$= \\vec{F}_{ij} \\cdot (d\\vec{r}_j - d\\vec{r}_i) = \\vec{F}_{ij} \\cdot d\\vec{r}_{ij}$$</p>
<p>dove $d\\vec{r}_{ij}$ è lo spostamento relativo infinitesimo. Possiamo scriverlo come $d\\vec{r}_{ij} = \\vec{v}_{ij}\\,dt$, dove $\\vec{v}_{ij} = \\vec{v}_j - \\vec{v}_i$ è la velocità relativa.</p>
<p>Il vincolo di rigidità impone che $\\|\\vec{r}_{ij}\\|$ sia costante. Elevando al quadrato e derivando:</p>
<p>$$\\|\\vec{r}_{ij}\\|^2 = \\vec{r}_{ij} \\cdot \\vec{r}_{ij} = \\text{costante}$$</p>
<p>$$\\frac{d}{dt}(\\vec{r}_{ij} \\cdot \\vec{r}_{ij}) = 2\\,\\vec{v}_{ij} \\cdot \\vec{r}_{ij} = 0$$</p>
<p>Questo significa che il vettore velocità relativa $\\vec{v}_{ij}$ è sempre <strong>perpendicolare</strong> al vettore posizione relativa $\\vec{r}_{ij}$:</p>
<p>$$\\vec{v}_{ij} \\perp \\vec{r}_{ij}$$</p>
<p>Poiché $\\vec{F}_{ij}$ è parallela a $\\vec{r}_{ij}$, ne consegue che $\\vec{F}_{ij}$ è perpendicolare a $\\vec{v}_{ij}$:</p>
<p>$$\\vec{F}_{ij} \\perp \\vec{v}_{ij} \\Rightarrow \\vec{F}_{ij} \\cdot \\vec{v}_{ij} = 0$$</p>
<p>Il lavoro infinitesimo è quindi nullo:</p>
<p>$$dW_{int}^{(i,j)} = (\\vec{F}_{ij} \\cdot \\vec{v}_{ij})\\,dt = 0$$</p>
<p>Poiché questo vale per <strong>ogni coppia</strong> di punti $(i,j)$, il lavoro totale delle forze interne, che è la somma su tutte le coppie, è nullo. $\\blacksquare$</p>`
                },
                {
                    subtitle: "Conseguenze: Teoremi dell'Energia per Corpi Rigidi",
                    content: `<p>Dal teorema del lavoro nullo delle forze interne, i teoremi energetici per un corpo rigido si semplificano notevolmente:</p>
<ul>
<li><strong>Teorema dell'energia cinetica</strong>: il lavoro totale delle sole forze esterne è pari alla variazione dell'energia cinetica totale del corpo:</li>
</ul>
<p>$$L_{est} = \\Delta E_k$$</p>
<ul>
<li><strong>Teorema dell'energia meccanica</strong>: il lavoro delle sole forze non conservative esterne è pari alla variazione dell'energia meccanica totale del corpo:</li>
</ul>
<p>$$L_{nc,\\,est} = \\Delta E_m$$</p>`
                }
            ],
            formulas: [
                { label: "Lavoro forze interne", latex: "L_{int} = 0" },
                { label: "Perpendicolarità velocità-posizione relativa", latex: "\\vec{v}_{ij} \\perp \\vec{r}_{ij}" },
                { label: "Teorema energia cinetica (corpo rigido)", latex: "L_{est} = \\Delta E_k" }
            ]
        },
        {
            id: "s36-forze-interne-nota",
            type: "alert_box",
            title: "Le Forze Interne Non Cambiano le Quantità Globali",
            icon: "⚠️",
            content: `<p>Per un corpo rigido, ogni variazione del suo stato dinamico (quantità di moto, momento angolare, energia cinetica) dipende <strong>esclusivamente</strong> dalle forze esterne e dai loro momenti. Le forze interne, pur garantendo la coesione del corpo, <strong>non contribuiscono</strong> a variare queste quantità globali. Questo è un punto chiave che il professore ha sottolineato e che viene spesso chiesto all'esame orale.</p>`
        },
        {
            id: "s36-centro-massa-continui",
            type: "section",
            title: "Calcolo del Centro di Massa per Corpi Continui",
            icon: "📐",
            content: `<p>Per un corpo rigido discreto, la posizione del centro di massa si calcola con la sommatoria:</p>
<p>$$\\vec{r}_{CM} = \\frac{1}{M} \\sum_{i=1}^{N} m_i \\vec{r}_i$$</p>
<p>Per un corpo continuo, la sommatoria viene sostituita da un <strong>integrale</strong> esteso a tutto il volume del corpo. La massa $m_i$ diventa un elemento infinitesimo di massa $dm$:</p>
<p>$$\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm$$</p>
<p>dove $M = \\int_{corpo} dm$ è la massa totale. Per calcolare questo integrale, è necessario introdurre il concetto di <strong>densità</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Densità di Massa",
                    content: `<p>La densità di massa descrive come la massa è distribuita nello spazio. A seconda della dimensionalità del corpo:</p>
<ul>
<li><strong>Densità volumica ($\\rho$)</strong>: per corpi tridimensionali.
<p>$$\\rho = \\frac{dm}{dV} \\Rightarrow dm = \\rho\\, dV$$</p></li>
<li><strong>Densità superficiale ($\\sigma$)</strong>: per corpi bidimensionali (es. una lastra sottile).
<p>$$\\sigma = \\frac{dm}{dS} \\Rightarrow dm = \\sigma\\, dS$$</p></li>
<li><strong>Densità lineare ($\\lambda$)</strong>: per corpi monodimensionali (es. un filo o una sbarra sottile).
<p>$$\\lambda = \\frac{dm}{dL} \\Rightarrow dm = \\lambda\\, dL$$</p></li>
</ul>
<p>Un corpo si dice <strong>omogeneo</strong> se la sua densità è costante in ogni punto. In tal caso: $\\rho = M/V_{tot}$, $\\sigma = M/S_{tot}$, $\\lambda = M/L_{tot}$.</p>`
                }
            ],
            formulas: [
                { label: "Centro di massa (discreto)", latex: "\\vec{r}_{CM} = \\frac{1}{M} \\sum_{i=1}^{N} m_i \\vec{r}_i" },
                { label: "Centro di massa (continuo)", latex: "\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm" }
            ]
        },
        {
            id: "s36-esempio-barra-omogenea",
            type: "section",
            title: "Esempio: Barra Omogenea",
            icon: "📏",
            content: `<p>Calcoliamo il centro di massa di una sbarra omogenea di lunghezza $L$ e massa $M$.</p>
<p>Scegliamo un asse $x$ coincidente con la sbarra e con l'origine a un suo estremo. Essendo un corpo monodimensionale omogeneo, la densità lineare è costante:</p>
<p>$$\\lambda = \\frac{M}{L}$$</p>
<p>L'elementino di massa $dm$ corrispondente a un tratto di lunghezza $dx$ è $dm = \\lambda\\, dx$. La posizione del centro di massa ha solo la componente $x$:</p>
<p>$$x_{CM} = \\frac{1}{M} \\int_{0}^{L} x\\, dm = \\frac{1}{M} \\int_{0}^{L} x\\,(\\lambda\\, dx) = \\frac{\\lambda}{M} \\int_{0}^{L} x\\, dx$$</p>
<p>$$= \\frac{\\lambda}{M} \\left[ \\frac{x^2}{2} \\right]_0^L = \\frac{\\lambda}{M} \\frac{L^2}{2}$$</p>
<p>Sostituendo $\\lambda = M/L$:</p>
<p>$$x_{CM} = \\frac{M/L}{M} \\frac{L^2}{2} = \\frac{L}{2}$$</p>
<p>Come atteso, il centro di massa si trova nel <strong>centro geometrico</strong> della sbarra.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Barra omogenea con centro di massa</strong></p>
  <p><em>Asse $x$ orizzontale con sbarra blu da $0$ a $L$. Punto rosso "CM" a $L/2$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            formulas: [
                { label: "CM barra omogenea", latex: "x_{CM} = \\frac{L}{2}" }
            ]
        },
        {
            id: "s36-esempio-barra-non-omogenea",
            type: "section",
            title: "Esempio: Barra Non Omogenea",
            icon: "📊",
            content: `<p>Calcoliamo il centro di massa di una sbarra di lunghezza $L$ la cui densità lineare varia linearmente con la posizione:</p>
<p>$$\\lambda(x) = \\lambda_1 + \\frac{\\lambda_2 - \\lambda_1}{L}\\, x$$</p>
<p>dove $\\lambda_1$ e $\\lambda_2$ sono le densità agli estremi $x = 0$ e $x = L$.</p>
<p>Il risultato (fornito dal professore) è:</p>
<p>$$x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\,L}{3(\\lambda_1 + \\lambda_2)}$$</p>
<p>Si noti che se $\\lambda_1 = \\lambda_2$ (barra omogenea), si ottiene $x_{CM} = L/2$ come atteso. Se $\\lambda_2 \\gt \\lambda_1$, il centro di massa si sposta verso l'estremo più pesante ($x = L$).</p>`,
            formulas: [
                { label: "CM barra non omogenea", latex: "x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\,L}{3(\\lambda_1 + \\lambda_2)}" }
            ]
        },
        {
            id: "s36-esempio-semicirconferenza",
            type: "section",
            title: "Esempio: Semicirconferenza Omogenea",
            icon: "🌙",
            content: `<p>Calcoliamo il centro di massa di un filo omogeneo di massa $M$ e raggio $R$ piegato a formare una semicirconferenza.</p>
<p>Per <strong>simmetria</strong>, la coordinata $x$ del centro di massa deve essere nulla: $x_{CM} = 0$. Calcoliamo la coordinata $y$.</p>
<p>La lunghezza totale è $\\pi R$, quindi la densità lineare è:</p>
<p>$$\\lambda = \\frac{M}{\\pi R}$$</p>
<p>In coordinate polari, un elementino di lunghezza $dL$ è $R\\, d\\phi$. L'elementino di massa è $dm = \\lambda\\, R\\, d\\phi$. La posizione $y$ di un punto sulla semicirconferenza è $y = R\\cos\\phi$ (con $\\phi$ misurato dall'asse $y$).</p>
<p>$$y_{CM} = \\frac{1}{M} \\int y\\, dm = \\frac{1}{M} \\int_{-\\pi/2}^{\\pi/2} (R\\cos\\phi)(\\lambda\\, R\\, d\\phi)$$</p>
<p>$$= \\frac{\\lambda R^2}{M} \\int_{-\\pi/2}^{\\pi/2} \\cos\\phi\\, d\\phi = \\frac{\\lambda R^2}{M} [\\sin\\phi]_{-\\pi/2}^{\\pi/2}$$</p>
<p>$$= \\frac{\\lambda R^2}{M}(1 - (-1)) = \\frac{2\\lambda R^2}{M}$$</p>
<p>Sostituendo $\\lambda = M/(\\pi R)$:</p>
<p>$$y_{CM} = \\frac{2(M/\\pi R)\\, R^2}{M} = \\frac{2R}{\\pi} \\approx 0.64\\, R$$</p>
<p>Il centro di massa si trova sull'asse di simmetria a un'altezza di $2R/\\pi$ dal centro.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Semicirconferenza omogenea con CM</strong></p>
  <p><em>Assi $x$ e $y$ con semicirconferenza blu (arco da $-\\pi/2$ a $\\pi/2$). Raggio $R$ tratteggiato, angolo $\\phi$ indicato. Punto rosso "CM" sull'asse $y$ a $y = 2R/\\pi$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            formulas: [
                { label: "CM semicirconferenza", latex: "y_{CM} = \\frac{2R}{\\pi}" }
            ]
        },
        {
            id: "s36-cinematica-tipi-moto",
            type: "section",
            title: "Cinematica del Corpo Rigido: Tipi di Moto",
            icon: "🔄",
            content: `<p>Il moto generale di un corpo rigido, detto <strong>roto-traslatorio</strong>, può essere visto come la sovrapposizione di due moti più semplici: la pura traslazione e la pura rotazione.</p>`,
            subsections: [
                {
                    subtitle: "Moto di Pura Traslazione",
                    content: `<p>Un corpo rigido è in moto di pura traslazione se tutti i suoi punti hanno, in ogni istante, la stessa velocità:</p>
<p>$$\\vec{v}_i(t) = \\vec{v}(t) \\quad \\forall\\, i$$</p>
<p>In questo caso, la velocità di ogni punto coincide con quella del centro di massa, $\\vec{v}_{CM}$. Non c'è moto relativo al centro di massa. Le conseguenze dai teoremi di König sono:</p>
<ul>
<li><strong>Quantità di moto</strong>: $\\vec{P}' = 0 \\Rightarrow \\vec{P} = \\vec{P}_{CM} = M\\vec{v}_{CM}$</li>
<li><strong>Momento angolare</strong>: $\\vec{L}' = 0 \\Rightarrow \\vec{L} = \\vec{L}_{CM} = \\vec{r}_{CM} \\times \\vec{P}$</li>
<li><strong>Energia cinetica</strong>: $E_k' = 0 \\Rightarrow E_k = E_{k,CM} = \\frac{1}{2}Mv_{CM}^2$</li>
</ul>
<p>La dinamica di un corpo in pura traslazione è interamente descritta dalla dinamica del suo centro di massa, <strong>come se fosse un punto materiale</strong>.</p>`
                },
                {
                    subtitle: "Moto di Pura Rotazione",
                    content: `<p>Un corpo rigido è in moto di pura rotazione attorno a un asse fisso se il suo centro di massa (o un punto sull'asse) è fermo e tutti gli altri punti descrivono traiettorie circolari attorno a tale asse:</p>
<p>$$\\vec{v}_{CM} = 0$$</p>
<p>Non c'è moto del centro di massa. La dinamica è interamente descritta dal moto interno (rotatorio). Le conseguenze dai teoremi di König sono:</p>
<ul>
<li><strong>Quantità di moto</strong>: $\\vec{P}_{CM} = 0 \\Rightarrow \\vec{P} = \\vec{P}'$</li>
<li><strong>Momento angolare</strong>: $\\vec{L}_{CM} = 0 \\Rightarrow \\vec{L} = \\vec{L}'$</li>
<li><strong>Energia cinetica</strong>: $E_{k,CM} = 0 \\Rightarrow E_k = E_k'$</li>
</ul>
<p>Tutte le quantità dinamiche dipendono <strong>solo</strong> dal moto rotatorio rispetto al centro di massa.</p>`
                },
                {
                    subtitle: "Moto Roto-traslatorio e Teorema di Chasles",
                    content: `<p>Il moto più generale di un corpo rigido è una combinazione di traslazione e rotazione.</p>
<p><strong>Teorema di Chasles (Atto di moto rigido):</strong> Lo spostamento più generale di un corpo rigido può essere ottenuto come la composizione di una traslazione e di una rotazione attorno a un asse opportuno (asse istantaneo di rotazione).</p>
<p>Questo significa che il moto di un corpo rigido può essere studiato "istante per istante" come la sovrapposizione di:</p>
<ul>
<li>un moto di <strong>pura traslazione</strong> con la velocità del centro di massa $\\vec{v}_{CM}$</li>
<li>un moto di <strong>pura rotazione</strong> con velocità angolare $\\vec{\\omega}$ attorno a un asse passante per il centro di massa</li>
</ul>
<p>La descrizione completa di questo moto sarà l'oggetto delle prossime lezioni.</p>`
                }
            ],
            formulas: [
                { label: "Pura traslazione", latex: "\\vec{v}_i(t) = \\vec{v}_{CM}(t) \\quad \\forall\\, i" },
                { label: "Pura rotazione", latex: "\\vec{v}_{CM} = 0" }
            ]
        },
        {
            id: "s36-tabella-moti",
            type: "section",
            title: "Confronto tra i Tipi di Moto",
            icon: "📋",
            content: `<p>Riepilogo delle proprietà dinamiche nei tre tipi di moto del corpo rigido:</p>`,
            table_compare: {
                headers: ["Grandezza", "Pura Traslazione", "Pura Rotazione", "Roto-traslazione"],
                rows: [
                    ["$\\vec{v}_{CM}$", "$\\vec{v}_{CM} \\neq 0$", "$\\vec{v}_{CM} = 0$", "$\\vec{v}_{CM} \\neq 0$"],
                    ["$\\vec{\\omega}$", "$\\vec{\\omega} = 0$", "$\\vec{\\omega} \\neq 0$", "$\\vec{\\omega} \\neq 0$"],
                    ["$\\vec{P}$", "$M\\vec{v}_{CM}$", "$\\vec{P}'$", "$M\\vec{v}_{CM} + \\vec{P}'$"],
                    ["$E_k$", "$\\frac{1}{2}Mv_{CM}^2$", "$E_k'$", "$\\frac{1}{2}Mv_{CM}^2 + E_k'$"],
                    ["$L_{int}$", "$0$", "$0$", "$0$"]
                ]
            }
        },
        {
            id: "s36-oral-chasles",
            type: "oral_box",
            title: "Domanda orale tipica: Teorema di Chasles",
            icon: "🎤",
            content: `<p><strong>Domanda:</strong> "Enuncia il Teorema di Chasles e spiega come si scompone il moto di un corpo rigido."</p>
<p><strong>Risposta attesa:</strong> Lo spostamento più generale di un corpo rigido può essere decomposto in una traslazione (del centro di massa) e una rotazione attorno a un asse passante per il centro di massa (asse istantaneo di rotazione). Questo vale istante per istante: in ogni istante si possono identificare una velocità di traslazione $\\vec{v}_{CM}$ e una velocità angolare $\\vec{\\omega}$ di rotazione.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è un corpo rigido e qual è il vincolo di rigidità?",
            back: "Un corpo rigido è un sistema di punti materiali in cui la distanza tra due punti qualsiasi $i$ e $j$ rimane costante nel tempo: $\\|\\vec{r}_{ij}\\| = \\text{costante}\\;\\forall\\, i,j$. Il corpo è quindi indeformabile."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che il lavoro delle forze interne in un corpo rigido è nullo.",
            back: "Per una coppia $(i,j)$: il lavoro infinitesimo è $dW = \\vec{F}_{ij} \\cdot \\vec{v}_{ij}\\,dt$. Il vincolo di rigidità $\\|\\vec{r}_{ij}\\|^2 = \\text{cost}$ implica, derivando, che $\\vec{v}_{ij} \\perp \\vec{r}_{ij}$. Poiché $\\vec{F}_{ij} \\parallel \\vec{r}_{ij}$ (forze centrali), allora $\\vec{F}_{ij} \\perp \\vec{v}_{ij}$ e quindi $\\vec{F}_{ij} \\cdot \\vec{v}_{ij} = 0$. Sommando su tutte le coppie: $L_{int} = 0$."
        },
        {
            type: "formula",
            front: "Scrivi la formula del centro di massa per un corpo continuo e le tre forme di densità.",
            back: "$$\\vec{r}_{CM} = \\frac{1}{M}\\int_{corpo} \\vec{r}\\, dm$$ Densità volumica: $dm = \\rho\\, dV$. Densità superficiale: $dm = \\sigma\\, dS$. Densità lineare: $dm = \\lambda\\, dL$."
        },
        {
            type: "domanda",
            front: "Qual è il centro di massa di una semicirconferenza omogenea di raggio R?",
            back: "Per simmetria $x_{CM} = 0$. La componente $y$ è: $$y_{CM} = \\frac{2R}{\\pi} \\approx 0.64\\, R$$ Si trova sull'asse di simmetria, sopra il centro del cerchio."
        },
        {
            type: "domanda",
            front: "Quali sono le conseguenze del lavoro nullo delle forze interne sui teoremi energetici?",
            back: "Poiché $L_{int} = 0$, il teorema dell'energia cinetica diventa $L_{est} = \\Delta E_k$ (solo forze esterne) e il teorema dell'energia meccanica diventa $L_{nc,\\,est} = \\Delta E_m$ (solo forze non conservative esterne)."
        },
        {
            type: "domanda",
            front: "Quali sono le differenze tra moto di pura traslazione e moto di pura rotazione per un corpo rigido?",
            back: "Pura traslazione: tutti i punti hanno la stessa velocità $\\vec{v}_i = \\vec{v}_{CM}$, $\\vec{\\omega} = 0$, $E_k = \\frac{1}{2}Mv_{CM}^2$. Pura rotazione: $\\vec{v}_{CM} = 0$, i punti ruotano con velocità angolare $\\vec{\\omega}$ attorno a un asse fisso, $E_k = E_k'$ (solo energia cinetica interna)."
        },
        {
            type: "definizione",
            front: "Enuncia il Teorema di Chasles per il corpo rigido.",
            back: "Lo spostamento più generale di un corpo rigido può essere ottenuto come la composizione di una traslazione e di una rotazione attorno a un asse opportuno, detto asse istantaneo di rotazione. Istante per istante: moto = traslazione con $\\vec{v}_{CM}$ + rotazione con $\\vec{\\omega}$ attorno al CM."
        },
        {
            type: "tranello",
            front: "Le forze interne di un corpo rigido sono nulle?",
            back: "No! Le forze interne non sono nulle: garantiscono la coesione del corpo e impongono il vincolo di rigidità. È il loro **lavoro totale** che è nullo ($L_{int} = 0$), perché la velocità relativa tra due punti è sempre perpendicolare alla forza interna che li collega."
        },
        {
            type: "formula",
            front: "Centro di massa di una barra non omogenea con densità $\\lambda(x) = \\lambda_1 + \\frac{\\lambda_2 - \\lambda_1}{L}x$?",
            back: "$$x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\,L}{3(\\lambda_1 + \\lambda_2)}$$ Caso particolare: se $\\lambda_1 = \\lambda_2$ (omogenea), si ritrova $x_{CM} = L/2$."
        }
    ]
};

