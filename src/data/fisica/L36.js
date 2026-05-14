const LESSON = {
    id: "L36", date: "Lezione 28 — 13 Mag 2026",
    title: "Il Corpo Rigido: Definizioni e Proprietà",
    abstract: "Definizione di corpo rigido e vincolo di rigidità. Lavoro nullo delle forze interne e conseguenze energetiche. Calcolo del centro di massa per corpi continui con densità volumica, superficiale e lineare. Esempi: sbarra omogenea, semicirconferenza, sbarra non omogenea. Cinematica: pura traslazione, pura rotazione e moto roto-traslatorio.",

    sections: [
        {
            id: "s36-definizione-corpo-rigido",
            type: "section",
            title: "Definizione di Corpo Rigido",
            icon: "🧱",
            content: `<p>In questa lezione iniziamo la trattazione di un particolare e importante sistema di punti materiali: il <strong>corpo rigido</strong>. Un corpo rigido è un sistema in cui la distanza relativa tra due punti qualunque che lo compongono non varia mai, indipendentemente dal moto del corpo o dalle forze applicate.</p>
<p>Se $\\vec{r}_{ij} = \\vec{r}_j - \\vec{r}_i$ è il vettore posizione relativa tra due punti $i$ e $j$, il <strong>vincolo di rigidità</strong> si esprime come:</p>
<p>$$\\|\\vec{r}_{ij}\\| = \\text{costante} \\quad \\forall\\, i,j$$</p>
<p>Questo implica che la variazione infinitesima della distanza è nulla:</p>
<p>$$d(\\|\\vec{r}_{ij}\\|) = 0$$</p>
<p>Un tale sistema è anche detto <strong>indeformabile</strong>.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Corpo rigido con vincolo di rigidità</strong></p>
  <p><em>Corpo rigido (regione colorata) con due punti materiali $m_i$ e $m_j$ collegati dal vettore $\\vec{r}_{ij}$. A lato, l'indicazione del vincolo $\\|\\vec{r}_{ij}\\| = \\text{costante}$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Corpi discreti e corpi continui",
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
            title: "Decomposizione del Moto",
            icon: "🔀",
            content: `<p>Come per ogni sistema di punti materiali, il moto di un corpo rigido può essere scomposto in un <strong>moto di insieme</strong> (la traslazione del centro di massa) e un <strong>moto relativo</strong> al centro di massa:</p>
<p>$$\\text{Moto Totale} = \\text{Moto del Centro di Massa} + \\text{Moto rispetto al Centro di Massa}$$</p>
<p>La peculiarità del corpo rigido è che il moto relativo al centro di massa è fortemente limitato dal vincolo di rigidità. Mentre in un sistema generico i punti possono avvicinarsi o allontanarsi, in un corpo rigido l'unico moto relativo possibile è una <strong>rotazione</strong> attorno a un asse passante per il centro di massa.</p>`
        },
        {
            id: "s36-lavoro-forze-interne",
            type: "section",
            title: "Lavoro Nullo delle Forze Interne",
            icon: "⚙️",
            content: `<p>Una delle proprietà più importanti del corpo rigido riguarda il lavoro compiuto dalle forze interne.</p>
<p><strong>Teorema:</strong> Il lavoro totale compiuto dalle forze interne in un corpo rigido è sempre nullo:</p>
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
<p>dove $d\\vec{r}_{ij}$ è lo spostamento relativo infinitesimo. Possiamo scriverlo come $d\\vec{r}_{ij} = \\vec{v}_{ij}\\, dt$, dove $\\vec{v}_{ij} = \\vec{v}_j - \\vec{v}_i$ è la velocità relativa.</p>
<p>Il vincolo di rigidità impone che la distanza $\\|\\vec{r}_{ij}\\|$ sia costante. Elevando al quadrato:</p>
<p>$$\\|\\vec{r}_{ij}\\|^2 = \\vec{r}_{ij} \\cdot \\vec{r}_{ij} = \\text{costante}$$</p>
<p>Derivando rispetto al tempo:</p>
<p>$$\\frac{d}{dt}(\\vec{r}_{ij} \\cdot \\vec{r}_{ij}) = 0 \\quad \\Rightarrow \\quad 2\\,\\vec{v}_{ij} \\cdot \\vec{r}_{ij} = 0$$</p>
<p>Questo significa che il vettore velocità relativa $\\vec{v}_{ij}$ è sempre <strong>perpendicolare</strong> al vettore posizione relativa $\\vec{r}_{ij}$:</p>
<p>$$\\vec{v}_{ij} \\perp \\vec{r}_{ij}$$</p>
<p>Poiché $\\vec{F}_{ij}$ è parallela a $\\vec{r}_{ij}$, ne consegue che $\\vec{F}_{ij}$ è perpendicolare a $\\vec{v}_{ij}$:</p>
<p>$$\\vec{F}_{ij} \\perp \\vec{v}_{ij} \\quad \\Rightarrow \\quad \\vec{F}_{ij} \\cdot \\vec{v}_{ij} = 0$$</p>
<p>Il lavoro infinitesimo è quindi nullo:</p>
<p>$$dW_{int}^{(i,j)} = (\\vec{F}_{ij} \\cdot \\vec{v}_{ij})\\, dt = 0$$</p>
<p>Poiché questo vale per ogni coppia di punti $(i,j)$, il lavoro totale delle forze interne, che è la somma su tutte le coppie, è nullo.</p>`
                },
                {
                    subtitle: "Conseguenze energetiche",
                    content: `<p>Dal teorema del lavoro nullo delle forze interne, i teoremi energetici per un corpo rigido si semplificano:</p>
<ul>
<li><strong>Teorema dell'energia cinetica</strong>: Il lavoro totale delle sole forze esterne è pari alla variazione dell'energia cinetica totale del corpo:
<p>$$L_{est} = \\Delta E_k$$</p></li>
<li><strong>Teorema dell'energia meccanica</strong>: Il lavoro delle sole forze non conservative esterne è pari alla variazione dell'energia meccanica totale del corpo:
<p>$$L_{nc,\\, est} = \\Delta E_m$$</p></li>
</ul>
<p>Per un corpo rigido, ogni variazione del suo stato dinamico (quantità di moto, momento angolare, energia cinetica) dipende <strong>esclusivamente</strong> dalle forze esterne e dai loro momenti. Le forze interne, pur garantendo la coesione del corpo, non contribuiscono a variare queste quantità globali.</p>`
                }
            ],
            formulas: [
                { label: "Lavoro forze interne", latex: "L_{int} = 0" },
                { label: "Teorema en. cinetica (corpo rigido)", latex: "L_{est} = \\Delta E_k" },
                { label: "Teorema en. meccanica (corpo rigido)", latex: "L_{nc,\\, est} = \\Delta E_m" }
            ]
        },
        {
            id: "s36-centro-massa-continui",
            type: "section",
            title: "Centro di Massa per Corpi Continui",
            icon: "📐",
            content: `<p>Per un corpo rigido discreto, la posizione del centro di massa si calcola con la sommatoria:</p>
<p>$$\\vec{r}_{CM} = \\frac{1}{M} \\sum_{i=1}^{N} m_i \\vec{r}_i$$</p>
<p>Per un corpo continuo, la sommatoria viene sostituita da un integrale esteso a tutto il volume del corpo. La massa $m_i$ diventa un elemento infinitesimo di massa $dm$:</p>
<p>$$\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm$$</p>
<p>dove $M = \\int_{corpo} dm$ è la massa totale. Per calcolare questo integrale, è necessario introdurre il concetto di <strong>densità</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Densità di massa",
                    content: `<p>La densità di massa descrive come la massa è distribuita nello spazio. A seconda della dimensionalità del corpo:</p>
<ul>
<li><strong>Densità volumica ($\\rho$)</strong>: per corpi tridimensionali.
<p>$$\\rho = \\frac{dm}{dV} \\quad \\Rightarrow \\quad dm = \\rho\\, dV$$</p></li>
<li><strong>Densità superficiale ($\\sigma$)</strong>: per corpi bidimensionali (es. lastra sottile).
<p>$$\\sigma = \\frac{dm}{dS} \\quad \\Rightarrow \\quad dm = \\sigma\\, dS$$</p></li>
<li><strong>Densità lineare ($\\lambda$)</strong>: per corpi monodimensionali (es. filo o sbarra sottile).
<p>$$\\lambda = \\frac{dm}{dL} \\quad \\Rightarrow \\quad dm = \\lambda\\, dL$$</p></li>
</ul>
<p>Un corpo si dice <strong>omogeneo</strong> se la sua densità è costante in ogni punto. In tal caso: $\\rho = M/V_{tot}$, $\\sigma = M/S_{tot}$, $\\lambda = M/L_{tot}$.</p>`
                }
            ],
            formulas: [
                { label: "Centro di massa (continuo)", latex: "\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm" },
                { label: "Densità volumica", latex: "dm = \\rho\\, dV" },
                { label: "Densità superficiale", latex: "dm = \\sigma\\, dS" },
                { label: "Densità lineare", latex: "dm = \\lambda\\, dL" }
            ]
        },
        {
            id: "s36-esempio-sbarra",
            type: "section",
            title: "Esempio: Sbarra Omogenea",
            icon: "📏",
            content: `<p>Calcoliamo il centro di massa di una sbarra omogenea di lunghezza $L$ e massa $M$.</p>
<p>Scegliamo un asse $x$ coincidente con la sbarra e con l'origine a un suo estremo. Essendo un corpo monodimensionale omogeneo, la densità lineare è costante:</p>
<p>$$\\rho_L = \\frac{M}{L}$$</p>
<p>L'elementino di massa $dm$ corrispondente a un tratto di lunghezza $dx$ è $dm = \\rho_L\\, dx$. La posizione del centro di massa ha solo la componente $x$:</p>
<p>$$x_{CM} = \\frac{1}{M} \\int_{0}^{L} x\\, dm = \\frac{1}{M} \\int_{0}^{L} x\\, (\\rho_L\\, dx) = \\frac{\\rho_L}{M} \\int_{0}^{L} x\\, dx = \\frac{\\rho_L}{M} \\left[ \\frac{x^2}{2} \\right]_0^L = \\frac{\\rho_L}{M} \\frac{L^2}{2}$$</p>
<p>Sostituendo $\\rho_L = M/L$:</p>
<p>$$x_{CM} = \\frac{M/L}{M} \\frac{L^2}{2} = \\frac{L}{2}$$</p>
<p>Come atteso, il centro di massa si trova nel <strong>centro geometrico</strong> della sbarra.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Sbarra omogenea con asse x</strong></p>
  <p><em>Asse $x$ con sbarra da $0$ a $L$, punto CM indicato a $L/2$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            formulas: [
                { label: "CM sbarra omogenea", latex: "x_{CM} = \\frac{L}{2}" }
            ]
        },
        {
            id: "s36-esempio-semicirconferenza",
            type: "section",
            title: "Esempio: Semicirconferenza Omogenea",
            icon: "🌙",
            content: `<p>Calcoliamo il centro di massa di un filo omogeneo di massa $M$ e raggio $R$ piegato a formare una semicirconferenza.</p>
<p>Per simmetria, la coordinata $x$ del centro di massa è nulla: $x_{CM} = 0$. Calcoliamo la coordinata $y$.</p>
<p>La lunghezza totale è $\\pi R$, quindi la densità lineare è $\\rho_L = M/(\\pi R)$.</p>
<p>In coordinate polari, un elementino di lunghezza $dL$ è $R\\, d\\phi$. L'elementino di massa è $dm = \\rho_L\\, dL = \\rho_L\\, R\\, d\\phi$. La posizione $y$ di un punto sulla semicirconferenza è $y = R \\cos\\phi$ (con $\\phi$ misurato dall'asse $y$).</p>
<p>$$y_{CM} = \\frac{1}{M} \\int y\\, dm = \\frac{1}{M} \\int_{-\\pi/2}^{\\pi/2} (R \\cos\\phi)(\\rho_L\\, R\\, d\\phi)$$</p>
<p>$$y_{CM} = \\frac{\\rho_L R^2}{M} \\int_{-\\pi/2}^{\\pi/2} \\cos\\phi\\, d\\phi = \\frac{\\rho_L R^2}{M} [\\sin\\phi]_{-\\pi/2}^{\\pi/2}$$</p>
<p>$$y_{CM} = \\frac{\\rho_L R^2}{M} (\\sin(\\pi/2) - \\sin(-\\pi/2)) = \\frac{\\rho_L R^2}{M} (1 - (-1)) = \\frac{2\\rho_L R^2}{M}$$</p>
<p>Sostituendo $\\rho_L = M/(\\pi R)$:</p>
<p>$$y_{CM} = \\frac{2(M/\\pi R) R^2}{M} = \\frac{2R}{\\pi} \\approx 0.64\\, R$$</p>
<p>Il centro di massa si trova sull'asse di simmetria a un'altezza di $2R/\\pi$ dal centro.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Semicirconferenza omogenea</strong></p>
  <p><em>Assi $x$ e $y$, semicirconferenza di raggio $R$ nell'emipiano $y \\gt 0$, punto CM indicato sull'asse $y$ a quota $2R/\\pi$, angolo $\\phi$ misurato dall'asse $y$, vettore posizione $\\vec{r}$ verso un punto generico sulla semicirconferenza.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            formulas: [
                { label: "CM semicirconferenza", latex: "y_{CM} = \\frac{2R}{\\pi}" }
            ]
        },
        {
            id: "s36-esercizi-assegnati",
            type: "note_box",
            title: "Esercizi Assegnati dal Prof.",
            icon: "📝",
            content: `<p>Il prof Mercuri ha assegnato esplicitamente tre esercizi per casa sul calcolo del centro di massa.</p>
<blockquote><em>«Questi sono, come dire, i compiti per le vacanze.»</em></blockquote>
<blockquote><em>«In molti casi non lo dovete nemmeno fare, lo sapete… Però ci sono casi in cui vi si dice "c'ho una sbarra non omogenea… trova la posizione del centro di massa". E vi sta chiedendo "fate l'integrale quello lassù e ditemi dove sta".»</em></blockquote>`,
            subsections: [
                {
                    subtitle: "Esercizio 1: Anello Omogeneo",
                    content: `<p>Calcolare $\\vec{r}_{CM}$ di un anello omogeneo di raggio $R$ e massa $M$ (filo chiuso a circonferenza completa).</p>
<p><strong>Hint:</strong> usare la stessa parametrizzazione del filo semicircolare, con $\\phi \\in [-\\pi, \\pi]$ (anziché $[-\\pi/2, \\pi/2]$).</p>
<p><strong>Risultato atteso:</strong> per simmetria, $\\vec{r}_{CM} = \\vec{0}$ (coincide con il centro geometrico). Lo scopo dell'esercizio è proprio verificare via integrale che le componenti $x_{CM}$ e $y_{CM}$ si annullano.</p>`
                },
                {
                    subtitle: "Esercizio 2: Sbarra non Omogenea",
                    content: `<p>Calcolare $x_{CM}$ di una sbarra di lunghezza $L$ la cui densità lineare varia linearmente con la posizione:</p>
<p>$$\\rho_L(x) = \\lambda_1 + \\frac{\\lambda_2 - \\lambda_1}{L}\\, x$$</p>
<p>dove $\\lambda_1$ e $\\lambda_2$ sono le densità agli estremi $x=0$ e $x=L$.</p>
<blockquote><em>«C'ha tanta massa all'inizio e man mano che vi allontanate, poca massa all'inizio e man mano che vi allontanate diventa sempre più densa»</em> (se $\\lambda_2 \\gt \\lambda_1$).</blockquote>
<p><strong>Risultato fornito dal prof (da verificare svolgendo l'integrale):</strong></p>
<p>$$x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\, L}{3(\\lambda_1 + \\lambda_2)}$$</p>
<p><strong>Sanity check:</strong> nel caso omogeneo $\\lambda_1 = \\lambda_2$ si recupera $x_{CM} = L/2$ (centro geometrico) — sempre buona pratica controllare i casi limite.</p>`
                },
                {
                    subtitle: "Esercizio 3: Disco Omogeneo",
                    content: `<p>Calcolare $\\vec{r}_{CM}$ di un disco omogeneo pieno di raggio $R$ e massa $M$.</p>
<p><strong>Hint del prof:</strong> usare l'elemento di superficie in coordinate polari:</p>
<p>$$dS = R\\, dR\\, d\\phi$$</p>
<p>con i due integrali su $R \\in [0, R_{\\max}]$ e $\\phi \\in [-\\pi, \\pi]$.</p>
<p><strong>Risultato atteso:</strong> per simmetria, $\\vec{r}_{CM} = \\vec{0}$. L'esercizio serve a prendere confidenza con l'elemento di superficie in coordinate polari, che ricomparirà in molti problemi futuri.</p>`
                }
            ],
            extra_content: `<blockquote><em>«Non c'è niente di teorico in questo, c'è soltanto una grande pratica per poter fare tutti i problemi sul corpo rigido. … è abbastanza utile per superare lo scritto, se c'avete un problema con un corpo rigido, di solito ce n'è uno, che voi sappiate calcolare la posizione del centro di massa.»</em></blockquote>
<p>Il prof avverte che gli esercizi d'esame sono <em>«di solito più semplici di questi, … quasi sempre più o meno uguali all'esercizio numero due»</em> (la sbarra non omogenea).</p>`,
            formulas: [
                { label: "CM sbarra non omogenea", latex: "x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\, L}{3(\\lambda_1 + \\lambda_2)}" }
            ]
        },
        {
            id: "s36-pura-traslazione",
            type: "section",
            title: "Moto di Pura Traslazione",
            icon: "➡️",
            content: `<p>Un corpo rigido è in moto di <strong>pura traslazione</strong> se tutti i suoi punti hanno, in ogni istante, la stessa velocità:</p>
<p>$$\\vec{v}_i(t) = \\vec{v}(t) \\quad \\forall\\, i$$</p>
<p>In questo caso, la velocità di ogni punto coincide con quella del centro di massa, $\\vec{v}_{CM}$. Non c'è moto relativo al centro di massa.</p>`,
            quote: {
                text: "Pensate al moto di questo bordo qui e pensate al moto del centro di massa e poi dell'altro bordo. … che c'hanno di diverso i moti di questo estremo, del centro di massa e di quest'altro bordo? … Esattamente la stessa cosa. Quindi … tutti i punti del corpo rigido hanno lo stesso moto, cioè hanno tutti la stessa V.",
                src: "Prof. Mercuri — dimostrazione in aula con un coperchio"
            },
            subsections: [
                {
                    subtitle: "Punto chiave: stessa velocità ≠ velocità costante",
                    content: `<p>«Stessa velocità» non vuol dire «velocità costante»: la velocità comune può variare nel tempo (in modulo e direzione), basta che sia la stessa per tutti i punti del corpo.</p>`
                },
                {
                    subtitle: "Conseguenze dai teoremi di König",
                    content: `<p>Il prof richiama esplicitamente i teoremi di König: <em>«Ricordatevi i teoremi di König»</em>. Le conseguenze sono:</p>
<ul>
<li><strong>Quantità di moto</strong>: $\\vec{P}' = 0 \\Rightarrow \\vec{P} = \\vec{P}_{CM} = M\\vec{v}_{CM}$</li>
<li><strong>Momento angolare</strong>: $\\vec{L}' = 0 \\Rightarrow \\vec{L} = \\vec{L}_{CM} = \\vec{r}_{CM} \\times \\vec{P}$</li>
<li><strong>Energia cinetica</strong>: $E_k' = 0 \\Rightarrow E_k = E_{k,CM} = \\frac{1}{2} M v_{CM}^2$</li>
</ul>
<p>La dinamica di un corpo in pura traslazione è interamente descritta dalla dinamica del suo centro di massa, come se fosse un punto materiale.</p>`
                }
            ],
            formulas: [
                { label: "Pura traslazione", latex: "\\vec{v}_i(t) = \\vec{v}_{CM}(t) \\quad \\forall\\, i" },
                { label: "Energia cinetica (traslazione)", latex: "E_k = \\frac{1}{2} M v_{CM}^2" }
            ]
        },
        {
            id: "s36-pura-rotazione",
            type: "section",
            title: "Moto di Pura Rotazione",
            icon: "🔄",
            content: `<p>Un corpo rigido è in moto di <strong>pura rotazione</strong> attorno a un asse fisso se il suo centro di massa (o un punto sull'asse) è fermo e tutti gli altri punti descrivono traiettorie circolari attorno a tale asse:</p>
<p>$$\\vec{v}_{CM} = 0$$</p>
<p>In questo caso, non c'è moto del centro di massa. La dinamica è interamente descritta dal moto interno (rotatorio). Le conseguenze dai teoremi di König sono:</p>
<ul>
<li><strong>Quantità di moto</strong>: $\\vec{P}_{CM} = 0 \\Rightarrow \\vec{P} = \\vec{P}'$</li>
<li><strong>Momento angolare</strong>: $\\vec{L}_{CM} = 0 \\Rightarrow \\vec{L} = \\vec{L}'$</li>
<li><strong>Energia cinetica</strong>: $E_{k,CM} = 0 \\Rightarrow E_k = E_k'$</li>
</ul>
<p>Tutte le quantità dinamiche dipendono solo dal moto rotatorio rispetto al centro di massa.</p>`
        },
        {
            id: "s36-roto-traslazione",
            type: "section",
            title: "Moto Roto-traslatorio",
            icon: "🌀",
            content: `<p>Il caso generale, e in fondo l'unico che conta davvero per i problemi sui corpi rigidi, è quello in cui il moto non è né di pura traslazione né di pura rotazione. Il moto generale di un corpo rigido, detto <strong>roto-traslatorio</strong>, può essere visto come la sovrapposizione di una traslazione e di una rotazione.</p>`,
            quote: {
                text: "Allora, se questo moto qualunque io lo spezzetto in frazioni infinitesime di moto, ogni frazione infinitesima di moto la posso considerare come una combinazione di traslazione pura e rotazione pura. Poi un altro pezzettino, l'asse si è riorientato, la velocità magari è cambiata, altra traslazione pura e rotazione pura. Potrebbe pure non esserci la rotazione, potrebbe pure non esserci la traslazione, ma in generale ci sono sia l'una che l'altra e in generale sia l'una che l'altra cambiano nel tempo.",
                src: "Prof. Mercuri"
            },
            subsections: [
                {
                    subtitle: "L'enunciato operativo",
                    content: `<blockquote><em>«Allora, un moto qualunque, alla fine, lo potrò modellizzare per un corpo rigido, come un moto che è una combinazione di una traslazione e di una rotazione. In particolare, come moto di una traslazione del centro di massa e di rotazione intorno a un asse passante per il centro di massa, ad esempio.»</em></blockquote>
<p>Operativamente, per descrivere il moto di un corpo rigido in modo completo bastano <strong>due ingredienti</strong>, istante per istante:</p>
<ol>
<li>La velocità del centro di massa $\\vec{v}_{CM}(t)$ (la parte di <em>traslazione</em>);</li>
<li>La velocità angolare $\\vec{\\omega}(t)$ rispetto a un asse passante per il centro di massa (la parte di <em>rotazione</em>).</li>
</ol>
<p>Da questi due, si ricava la velocità di ogni altro punto del corpo:</p>
<p>$$\\vec{v}_i = \\vec{v}_{CM} + \\vec{\\omega} \\times \\vec{r}_i'$$</p>
<p>dove $\\vec{r}_i'$ è la posizione del punto $i$ rispetto al centro di massa.</p>`
                },
                {
                    subtitle: "Stesso moto, descrizioni diverse",
                    content: `<p>Un punto su cui il prof insiste è che lo stesso moto può essere descritto in modi diversi a seconda dell'osservatore. Esempio: una sbarra che ruota attorno a un suo estremo. Da fuori la vedete come «pura rotazione attorno all'estremo». Ma se vi mettete nel sistema del centro di massa, vedete il centro di massa traslare <em>e</em> la sbarra ruotare attorno a esso: <em>roto-traslazione</em>.</p>
<blockquote><em>«Il moto è lo stesso, non è che sta, è quello che succede, il fenomeno dipende da chi lo descrive.»</em></blockquote>`
                }
            ],
            formulas: [
                { label: "Velocità punto generico", latex: "\\vec{v}_i = \\vec{v}_{CM} + \\vec{\\omega} \\times \\vec{r}_i'" }
            ],
            extra_content: `<blockquote><em>«Di solito 'ste cose si saltano, invece ho visto che se uno [le approfondisce] un po' con gli studenti su questa questione, quello che si studia dopo è solo formalismo, i risultati più chiari.»</em></blockquote>
<p>La descrizione completa di questo moto, con tanto di equazioni della dinamica per corpi rigidi, è l'oggetto delle prossime lezioni.</p>`
        },
        {
            id: "s36-riepilogo-confronto",
            type: "section",
            title: "Riepilogo: Traslazione vs Rotazione vs Roto-traslazione",
            icon: "📋",
            table_compare: {
                headers: ["Grandezza", "Pura Traslazione", "Pura Rotazione", "Roto-traslazione"],
                rows: [
                    ["$\\vec{v}_{CM}$", "$\\neq 0$", "$= 0$", "$\\neq 0$"],
                    ["$\\vec{\\omega}$", "$= 0$", "$\\neq 0$", "$\\neq 0$"],
                    ["$\\vec{P}$", "$M\\vec{v}_{CM}$", "$\\vec{P}'$", "$M\\vec{v}_{CM} + \\vec{P}'$ (ma $\\vec{P}' = 0$)"],
                    ["$E_k$", "$\\frac{1}{2}Mv_{CM}^2$", "$E_k'$", "$\\frac{1}{2}Mv_{CM}^2 + E_k'$"],
                    ["$\\vec{L}$", "$\\vec{r}_{CM} \\times M\\vec{v}_{CM}$", "$\\vec{L}'$", "$\\vec{L}_{CM} + \\vec{L}'$"]
                ]
            },
            content: `<p>Questa tabella sintetizza come le quantità dinamiche si ripartiscono nei tre casi. Nel moto roto-traslatorio si usa la decomposizione di König: ogni grandezza è la somma del contributo del centro di massa e del contributo del moto relativo.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è un corpo rigido? Come si esprime matematicamente il vincolo di rigidità?",
            back: "Un corpo rigido è un sistema di punti materiali in cui la distanza tra due punti qualsiasi $i$ e $j$ rimane costante nel tempo: $\\|\\vec{r}_{ij}\\| = \\text{costante}\\;\\forall\\, i,j$. Il corpo è indeformabile."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che il lavoro delle forze interne in un corpo rigido è sempre nullo.",
            back: "Per una coppia $(i,j)$: il lavoro infinitesimo è $dW = \\vec{F}_{ij} \\cdot \\vec{v}_{ij}\\, dt$. Il vincolo di rigidità $\\|\\vec{r}_{ij}\\|^2 = \\text{cost}$ implica, derivando, $2\\vec{v}_{ij} \\cdot \\vec{r}_{ij} = 0$, cioè $\\vec{v}_{ij} \\perp \\vec{r}_{ij}$. Poiché $\\vec{F}_{ij} \\parallel \\vec{r}_{ij}$ (forze centrali interne), si ha $\\vec{F}_{ij} \\perp \\vec{v}_{ij}$, quindi $\\vec{F}_{ij} \\cdot \\vec{v}_{ij} = 0$. Sommando su tutte le coppie: $L_{int} = 0$."
        },
        {
            type: "domanda",
            front: "Quali conseguenze ha il fatto che $L_{int} = 0$ per un corpo rigido sui teoremi energetici?",
            back: "Il teorema dell'energia cinetica diventa $L_{est} = \\Delta E_k$ (solo forze esterne contano). Il teorema dell'energia meccanica diventa $L_{nc,\\, est} = \\Delta E_m$. Ogni variazione dello stato dinamico del corpo rigido dipende esclusivamente dalle forze esterne."
        },
        {
            type: "formula",
            front: "Come si calcola il centro di massa di un corpo continuo? Quali tipi di densità si possono usare?",
            back: "$\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm$. Si usa: densità volumica $dm = \\rho\\, dV$ (3D), densità superficiale $dm = \\sigma\\, dS$ (2D), densità lineare $dm = \\lambda\\, dL$ (1D). Per corpi omogenei la densità è costante."
        },
        {
            type: "domanda",
            front: "Qual è il centro di massa di una semicirconferenza omogenea di raggio $R$?",
            back: "Per simmetria $x_{CM} = 0$. La componente $y$ si calcola con $y_{CM} = \\frac{\\rho_L R^2}{M} \\int_{-\\pi/2}^{\\pi/2} \\cos\\phi\\, d\\phi$. Risultato: $y_{CM} = \\frac{2R}{\\pi} \\approx 0.64\\, R$."
        },
        {
            type: "formula",
            front: "Qual è il centro di massa di una sbarra non omogenea con densità $\\rho_L(x) = \\lambda_1 + \\frac{\\lambda_2 - \\lambda_1}{L} x$?",
            back: "$x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\, L}{3(\\lambda_1 + \\lambda_2)}$. Sanity check: per $\\lambda_1 = \\lambda_2$ si ottiene $x_{CM} = L/2$."
        },
        {
            type: "definizione",
            front: "Cosa si intende per moto di pura traslazione di un corpo rigido? Quali conseguenze ha sui teoremi di König?",
            back: "Pura traslazione: tutti i punti hanno la stessa velocità $\\vec{v}_i(t) = \\vec{v}_{CM}(t)\\;\\forall\\, i$. Non c'è moto relativo al CM. Conseguenze: $\\vec{P}' = 0$, $\\vec{L}' = 0$, $E_k' = 0$. L'energia cinetica è solo $E_k = \\frac{1}{2}Mv_{CM}^2$."
        },
        {
            type: "domanda",
            front: "Come si descrive il moto generale (roto-traslatorio) di un corpo rigido? Di quanti ingredienti si ha bisogno?",
            back: "Servono due ingredienti istante per istante: (1) la velocità del centro di massa $\\vec{v}_{CM}(t)$ (traslazione) e (2) la velocità angolare $\\vec{\\omega}(t)$ rispetto a un asse per il CM (rotazione). La velocità di un punto generico è $\\vec{v}_i = \\vec{v}_{CM} + \\vec{\\omega} \\times \\vec{r}_i'$."
        },
        {
            type: "tranello",
            front: "«Pura traslazione» significa che la velocità è costante nel tempo?",
            back: "No! «Stessa velocità» non vuol dire «velocità costante». In pura traslazione la velocità comune può variare nel tempo (in modulo e direzione), l'importante è che sia la stessa per tutti i punti del corpo in ogni istante."
        },
        {
            type: "domanda",
            front: "Lo stesso moto di un corpo rigido può essere descritto come pura rotazione da un osservatore e come roto-traslazione da un altro?",
            back: "Sì. Esempio: una sbarra che ruota attorno a un estremo. Da un sistema esterno è pura rotazione attorno all'estremo. Dal sistema del centro di massa, il CM trasla e la sbarra ruota attorno a esso: roto-traslazione. Il moto è lo stesso, la descrizione dipende dall'osservatore."
        }
    ]
};

