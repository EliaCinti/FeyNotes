const LESSON = {
    id: "L37", date: "Lezione 29 — 13 Mag 2026",
    title: "Il Corpo Rigido: Definizioni e Proprietà",
    abstract: "Definizione formale di corpo rigido e vincolo di rigidità. Dimostrazione del lavoro nullo delle forze interne. Calcolo del centro di massa per corpi continui con densità volumica, superficiale e lineare. Esempi: sbarra omogenea, semicirconferenza, sbarra non omogenea. Cinematica del corpo rigido: pura traslazione, pura rotazione e moto roto-traslatorio.",

    sections: [
        {
            id: "s37-definizione-corpo-rigido",
            type: "section",
            title: "Definizione di Corpo Rigido",
            icon: "🧱",
            content: `<p>In questa lezione iniziamo la trattazione di un particolare e importante sistema di punti materiali: il <strong>corpo rigido</strong>. Un corpo rigido è un sistema in cui la distanza relativa tra due punti qualunque che lo compongono non varia mai, indipendentemente dal moto del corpo o dalle forze applicate.</p>
<p>Se $\\vec{r}_{ij} = \\vec{r}_j - \\vec{r}_i$ è il vettore posizione relativa tra due punti $i$ e $j$ del sistema, il <strong>vincolo di rigidità</strong> si esprime come:</p>
<p>$$\\|\\vec{r}_{ij}\\| = \\text{costante} \\quad \\forall\\, i,j$$</p>
<p>Questo implica che la variazione infinitesima della distanza è nulla:</p>
<p>$$d(\\|\\vec{r}_{ij}\\|) = 0$$</p>
<p>Un tale sistema è anche detto <strong>indeformabile</strong>.</p>`,
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
            ],
            extra_content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Corpo rigido con vincolo di rigidità</strong></p>
  <p><em>Corpo rigido (regione ombreggiata) con due punti $m_i$ e $m_j$ collegati dal vettore $\\vec{r}_{ij}$. La distanza $\\|\\vec{r}_{ij}\\|$ resta costante nel tempo.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
        },
        {
            id: "s37-lavoro-forze-interne",
            type: "section",
            title: "Lavoro Nullo delle Forze Interne",
            icon: "⚙️",
            content: `<p>Una delle proprietà più importanti del corpo rigido riguarda il lavoro compiuto dalle forze interne.</p>
<p><strong>Teorema:</strong> Il lavoro totale compiuto dalle forze interne in un corpo rigido è <strong>sempre nullo</strong>.</p>
<p>$$L_{int} = 0$$</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Consideriamo una coppia di punti $i$ e $j$ all'interno del corpo rigido. Per il terzo principio della dinamica:</p>
<p>$$\\vec{F}_{ji} = -\\vec{F}_{ij}$$</p>
<p>Inoltre, queste forze sono dirette lungo la congiungente i due punti, quindi sono parallele al vettore posizione relativa $\\vec{r}_{ij} = \\vec{r}_j - \\vec{r}_i$.</p>
<p>Il lavoro infinitesimo compiuto da questa coppia di forze interne è:</p>
<p>$$dW_{int}^{(i,j)} = \\vec{F}_{ij} \\cdot d\\vec{r}_j + \\vec{F}_{ji} \\cdot d\\vec{r}_i$$</p>
<p>$$= \\vec{F}_{ij} \\cdot d\\vec{r}_j - \\vec{F}_{ij} \\cdot d\\vec{r}_i$$</p>
<p>$$= \\vec{F}_{ij} \\cdot (d\\vec{r}_j - d\\vec{r}_i) = \\vec{F}_{ij} \\cdot d\\vec{r}_{ij}$$</p>
<p>dove $d\\vec{r}_{ij}$ è lo spostamento relativo infinitesimo. Possiamo scriverlo come $d\\vec{r}_{ij} = \\vec{v}_{ij}\\, dt$, dove $\\vec{v}_{ij} = \\vec{v}_j - \\vec{v}_i$ è la velocità relativa.</p>
<p>Il vincolo di rigidità impone che la distanza $\\|\\vec{r}_{ij}\\|$ sia costante. Elevando al quadrato:</p>
<p>$$\\|\\vec{r}_{ij}\\|^2 = \\vec{r}_{ij} \\cdot \\vec{r}_{ij} = \\text{costante}$$</p>
<p>Derivando rispetto al tempo:</p>
<p>$$\\frac{d}{dt}(\\vec{r}_{ij} \\cdot \\vec{r}_{ij}) = 0$$</p>
<p>$$2\\,\\vec{v}_{ij} \\cdot \\vec{r}_{ij} = 0$$</p>
<p>Questo significa che il vettore velocità relativa $\\vec{v}_{ij}$ è sempre <strong>perpendicolare</strong> al vettore posizione relativa $\\vec{r}_{ij}$:</p>
<p>$$\\vec{v}_{ij} \\perp \\vec{r}_{ij}$$</p>
<p>Poiché $\\vec{F}_{ij}$ è parallela a $\\vec{r}_{ij}$, ne consegue che $\\vec{F}_{ij}$ è perpendicolare a $\\vec{v}_{ij}$:</p>
<p>$$\\vec{F}_{ij} \\perp \\vec{v}_{ij} \\Rightarrow \\vec{F}_{ij} \\cdot \\vec{v}_{ij} = 0$$</p>
<p>Il lavoro infinitesimo è quindi nullo:</p>
<p>$$dW_{int}^{(i,j)} = (\\vec{F}_{ij} \\cdot \\vec{v}_{ij})\\, dt = 0$$</p>
<p>Poiché questo vale per <strong>ogni coppia</strong> di punti $(i,j)$, il lavoro totale delle forze interne, che è la somma su tutte le coppie, è nullo. $\\square$</p>`
                },
                {
                    subtitle: "Conseguenze: Teoremi dell'Energia per Corpi Rigidi",
                    content: `<p>Dal teorema del lavoro nullo delle forze interne, i teoremi energetici per un corpo rigido si semplificano notevolmente:</p>
<ul>
<li><strong>Teorema dell'energia cinetica</strong>: il lavoro totale delle sole forze esterne è pari alla variazione dell'energia cinetica totale del corpo:
<p>$$L_{est} = \\Delta E_k$$</p></li>
<li><strong>Teorema dell'energia meccanica</strong>: il lavoro delle sole forze non conservative esterne è pari alla variazione dell'energia meccanica totale:
<p>$$L_{nc,\\, est} = \\Delta E_m$$</p></li>
</ul>`
                }
            ],
            formulas: [
                { label: "Lavoro forze interne", latex: "L_{int} = 0" },
                { label: "Velocità relativa ⊥ posizione relativa", latex: "\\vec{v}_{ij} \\perp \\vec{r}_{ij}" },
                { label: "Teorema energia cinetica (rigido)", latex: "L_{est} = \\Delta E_k" }
            ]
        },
        {
            id: "s37-importanza-forze-esterne",
            type: "alert_box",
            title: "Solo le Forze Esterne Contano!",
            icon: "⚠️",
            content: `<p>Per un corpo rigido, <strong>ogni variazione</strong> del suo stato dinamico (quantità di moto, momento angolare, energia cinetica) dipende <strong>esclusivamente</strong> dalle forze esterne e dai loro momenti. Le forze interne, pur garantendo la coesione del corpo, non contribuiscono a variare queste quantità globali.</p>
<p>Questo è un punto chiave che semplifica enormemente la trattazione del corpo rigido rispetto a un sistema generico di punti materiali.</p>`
        },
        {
            id: "s37-centro-massa-continui",
            type: "section",
            title: "Calcolo del Centro di Massa per Corpi Continui",
            icon: "📐",
            content: `<p>Per un corpo rigido discreto, la posizione del centro di massa si calcola con la sommatoria:</p>
<p>$$\\vec{r}_{CM} = \\frac{1}{M} \\sum_{i=1}^{N} m_i \\vec{r}_i$$</p>
<p>Per un corpo continuo, la sommatoria viene sostituita da un integrale esteso a tutto il corpo. La massa $m_i$ diventa un elemento infinitesimo di massa $dm$:</p>
<p>$$\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm$$</p>
<p>dove $M = \\int_{corpo} dm$ è la massa totale. Per calcolare questo integrale, è necessario introdurre il concetto di densità.</p>`,
            subsections: [
                {
                    subtitle: "Densità di massa",
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
            id: "s37-esempio-sbarra-omogenea",
            type: "section",
            title: "Esempio: Sbarra Omogenea",
            icon: "📏",
            content: `<p>Calcoliamo il centro di massa di una sbarra omogenea di lunghezza $L$ e massa $M$.</p>
<p>Scegliamo un asse $x$ coincidente con la sbarra e con l'origine a un suo estremo. Essendo un corpo monodimensionale omogeneo, la densità lineare è costante:</p>
<p>$$\\lambda = \\frac{M}{L}$$</p>
<p>L'elementino di massa $dm$ corrispondente a un tratto di lunghezza $dx$ è $dm = \\lambda\\, dx$. La posizione del centro di massa ha solo la componente $x$:</p>
<p>$$x_{CM} = \\frac{1}{M} \\int_{0}^{L} x\\, dm = \\frac{1}{M} \\int_{0}^{L} x\\, (\\lambda\\, dx) = \\frac{\\lambda}{M} \\int_{0}^{L} x\\, dx$$</p>
<p>$$= \\frac{\\lambda}{M} \\left[ \\frac{x^2}{2} \\right]_0^L = \\frac{\\lambda}{M} \\frac{L^2}{2}$$</p>
<p>Sostituendo $\\lambda = M/L$:</p>
<p>$$x_{CM} = \\frac{M/L}{M} \\cdot \\frac{L^2}{2} = \\frac{L}{2}$$</p>
<p>Come atteso, il centro di massa si trova nel <strong>centro geometrico</strong> della sbarra.</p>`,
            formulas: [
                { label: "CM sbarra omogenea", latex: "x_{CM} = \\frac{L}{2}" }
            ],
            extra_content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Sbarra omogenea con sistema di coordinate</strong></p>
  <p><em>Asse $x$ orizzontale, sbarra da $0$ a $L$, centro di massa indicato in rosso a $L/2$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
        },
        {
            id: "s37-esempio-semicirconferenza",
            type: "section",
            title: "Esempio: Semicirconferenza Omogenea",
            icon: "🌙",
            content: `<p>Calcoliamo il centro di massa di un filo omogeneo di massa $M$ e raggio $R$ piegato a formare una semicirconferenza.</p>
<p>Per simmetria, la coordinata $x$ del centro di massa deve essere nulla: $x_{CM} = 0$. Calcoliamo la coordinata $y$.</p>
<p>La lunghezza totale è $\\pi R$, quindi la densità lineare è $\\lambda = M/(\\pi R)$.</p>
<p>In coordinate polari, un elementino di lunghezza $dL$ è $R\\, d\\phi$. L'elementino di massa è $dm = \\lambda\\, dL = \\lambda\\, R\\, d\\phi$.</p>
<p>La posizione $y$ di un punto sulla semicirconferenza è $y = R \\cos\\phi$ (con $\\phi$ misurato dall'asse $y$).</p>
<p>$$y_{CM} = \\frac{1}{M} \\int y\\, dm = \\frac{1}{M} \\int_{-\\pi/2}^{\\pi/2} (R \\cos\\phi)(\\lambda\\, R\\, d\\phi)$$</p>
<p>$$= \\frac{\\lambda R^2}{M} \\int_{-\\pi/2}^{\\pi/2} \\cos\\phi\\, d\\phi = \\frac{\\lambda R^2}{M} [\\sin\\phi]_{-\\pi/2}^{\\pi/2}$$</p>
<p>$$= \\frac{\\lambda R^2}{M} (\\sin(\\pi/2) - \\sin(-\\pi/2)) = \\frac{\\lambda R^2}{M} (1 - (-1)) = \\frac{2\\lambda R^2}{M}$$</p>
<p>Sostituendo $\\lambda = M/(\\pi R)$:</p>
<p>$$y_{CM} = \\frac{2(M/\\pi R) R^2}{M} = \\frac{2R}{\\pi} \\approx 0.64\\, R$$</p>
<p>Il centro di massa si trova sull'asse di simmetria a un'altezza di $2R/\\pi$ dal centro.</p>`,
            formulas: [
                { label: "CM semicirconferenza", latex: "y_{CM} = \\frac{2R}{\\pi}" }
            ],
            extra_content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Semicirconferenza omogenea</strong></p>
  <p><em>Assi $x$ e $y$, semicirconferenza di raggio $R$ nell'emisfero superiore, centro di massa indicato in rosso sull'asse $y$ a quota $2R/\\pi$. Angolo $\\phi$ misurato dall'asse $y$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
        },
        {
            id: "s37-esercizi-assegnati",
            type: "note_box",
            title: "Esercizi Assegnati dal Prof. Mercuri",
            icon: "📝",
            content: `<p>Il prof ha assegnato esplicitamente tre esercizi per casa sul calcolo del centro di massa.</p>`,
            quote: { text: "Questi sono, come dire, i compiti per le vacanze. [...] è abbastanza utile per superare lo scritto, se c'avete un problema con un corpo rigido, di solito ce n'è uno, che voi sappiate calcolare la posizione del centro di massa.", src: "Prof. Mercuri" },
            subsections: [
                {
                    subtitle: "Esercizio 1: Anello Omogeneo",
                    content: `<p>Calcolare $\\vec{r}_{CM}$ di un anello omogeneo di raggio $R$ e massa $M$ (filo chiuso a circonferenza completa).</p>
<p><strong>Hint:</strong> usare la stessa parametrizzazione del filo semicircolare, con $\\phi \\in [-\\pi, \\pi]$ (anziché $[-\\pi/2, \\pi/2]$).</p>
<p><strong>Risultato atteso:</strong> per simmetria, $\\vec{r}_{CM} = \\vec{0}$ (coincide con il centro geometrico). Lo scopo dell'esercizio è proprio verificare via integrale che le componenti $x_{CM}$ e $y_{CM}$ si annullano.</p>`
                },
                {
                    subtitle: "Esercizio 2: Sbarra non Omogenea (il più importante!)",
                    content: `<p>Calcolare $x_{CM}$ di una sbarra di lunghezza $L$ la cui densità lineare varia linearmente con la posizione:</p>
<p>$$\\lambda(x) = \\lambda_1 + \\frac{\\lambda_2 - \\lambda_1}{L}\\, x$$</p>
<p>dove $\\lambda_1$ e $\\lambda_2$ sono le densità agli estremi $x=0$ e $x=L$.</p>
<p><strong>Risultato fornito dal prof (da verificare svolgendo l'integrale):</strong></p>
<p>$$x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\,L}{3(\\lambda_1 + \\lambda_2)}$$</p>
<p><strong>Sanity check:</strong> nel caso omogeneo $\\lambda_1 = \\lambda_2$ si recupera $x_{CM} = L/2$ (centro geometrico) — sempre buona pratica controllare i casi limite.</p>
<p>Il prof avverte che gli esercizi d'esame sono <em>"di solito più semplici di questi, quasi sempre più o meno uguali all'esercizio numero due"</em> (la sbarra non omogenea).</p>`
                },
                {
                    subtitle: "Esercizio 3: Disco Omogeneo",
                    content: `<p>Calcolare $\\vec{r}_{CM}$ di un disco omogeneo pieno di raggio $R$ e massa $M$.</p>
<p><strong>Hint del prof:</strong> usare l'elemento di superficie in coordinate polari:</p>
<p>$$dS = R\\, dR\\, d\\phi$$</p>
<p>con i due integrali su $R \\in [0, R_{\\max}]$ e $\\phi \\in [-\\pi, \\pi]$.</p>
<p><strong>Risultato atteso:</strong> per simmetria, $\\vec{r}_{CM} = \\vec{0}$. L'esercizio serve a prendere confidenza con l'elemento di superficie in coordinate polari, che ricomparirà in molti problemi futuri.</p>`
                }
            ]
        },
        {
            id: "s37-pura-traslazione",
            type: "section",
            title: "Moto di Pura Traslazione",
            icon: "➡️",
            content: `<p>Passiamo ora alla <strong>cinematica del corpo rigido</strong>. Il moto generale di un corpo rigido, detto <strong>roto-traslatorio</strong>, può essere visto come la sovrapposizione di due moti più semplici: la pura traslazione e la pura rotazione.</p>
<p>Un corpo rigido è in moto di <strong>pura traslazione</strong> se tutti i suoi punti hanno, in ogni istante, la stessa velocità:</p>
<p>$$\\vec{v}_i(t) = \\vec{v}(t) \\quad \\forall\\, i$$</p>
<p>In questo caso, la velocità di ogni punto coincide con quella del centro di massa, $\\vec{v}_{CM}$. Non c'è moto relativo al centro di massa.</p>`,
            quote: { text: "Pensate al moto di questo bordo qui e pensate al moto del centro di massa e poi dell'altro bordo. Che c'hanno di diverso? Esattamente la stessa cosa. Tutti i punti del corpo rigido hanno lo stesso moto, cioè hanno tutti la stessa V.", src: "Prof. Mercuri (con il coperchietto in mano)" },
            subsections: [
                {
                    subtitle: "Attenzione: stessa velocità ≠ velocità costante",
                    content: `<p>Il punto chiave è che <strong>"stessa velocità" non vuol dire "velocità costante"</strong>: la velocità comune può variare nel tempo (in modulo e direzione), basta che sia la stessa per tutti i punti del corpo nello stesso istante.</p>`
                },
                {
                    subtitle: "Conseguenze dai Teoremi di König",
                    content: `<p>In pura traslazione, tutte le quantità "prime" (relative al centro di massa) sono nulle:</p>
<ul>
<li><strong>Quantità di moto</strong>: $\\vec{P}' = 0 \\Rightarrow \\vec{P} = \\vec{P}_{CM} = M\\vec{v}_{CM}$</li>
<li><strong>Momento angolare</strong>: $\\vec{L}' = 0 \\Rightarrow \\vec{L} = \\vec{L}_{CM} = \\vec{r}_{CM} \\times \\vec{P}$</li>
<li><strong>Energia cinetica</strong>: $E_k' = 0 \\Rightarrow E_k = E_{k,CM} = \\frac{1}{2} M v_{CM}^2$</li>
</ul>
<p>La dinamica di un corpo in pura traslazione è interamente descritta dalla dinamica del suo centro di massa, <strong>come se fosse un punto materiale</strong>.</p>`
                }
            ],
            formulas: [
                { label: "Pura traslazione", latex: "\\vec{v}_i(t) = \\vec{v}_{CM}(t) \\quad \\forall\\, i" },
                { label: "Energia cinetica (traslazione)", latex: "E_k = \\frac{1}{2} M v_{CM}^2" }
            ]
        },
        {
            id: "s37-pura-rotazione",
            type: "section",
            title: "Moto di Pura Rotazione",
            icon: "🔄",
            content: `<p>Un corpo rigido è in moto di <strong>pura rotazione</strong> attorno a un asse fisso se il suo centro di massa (o un punto sull'asse) è fermo e tutti gli altri punti descrivono traiettorie circolari attorno a tale asse.</p>
<p>$$\\vec{v}_{CM} = 0$$</p>
<p>In questo caso, non c'è moto del centro di massa. La dinamica è interamente descritta dal moto interno (rotatorio).</p>`,
            subsections: [
                {
                    subtitle: "Conseguenze dai Teoremi di König",
                    content: `<p>In pura rotazione, tutte le quantità del centro di massa sono nulle:</p>
<ul>
<li><strong>Quantità di moto</strong>: $\\vec{P}_{CM} = 0 \\Rightarrow \\vec{P} = \\vec{P}'$</li>
<li><strong>Momento angolare</strong>: $\\vec{L}_{CM} = 0 \\Rightarrow \\vec{L} = \\vec{L}'$</li>
<li><strong>Energia cinetica</strong>: $E_{k,CM} = 0 \\Rightarrow E_k = E_k'$</li>
</ul>
<p>Tutte le quantità dinamiche dipendono <strong>solo dal moto rotatorio</strong> rispetto al centro di massa.</p>`
                }
            ],
            formulas: [
                { label: "Pura rotazione", latex: "\\vec{v}_{CM} = 0" }
            ]
        },
        {
            id: "s37-traslazione-vs-rotazione",
            type: "section",
            title: "Confronto: Traslazione vs Rotazione",
            icon: "⚖️",
            content: `<p>Per avere un quadro chiaro delle due situazioni limite:</p>`,
            table_compare: {
                headers: ["Proprietà", "Pura Traslazione", "Pura Rotazione"],
                rows: [
                    ["Velocità punti", "Tutte uguali: $\\vec{v}_i = \\vec{v}_{CM}$", "Diverse: dipendono dalla distanza dall'asse"],
                    ["$\\vec{v}_{CM}$", "$\\neq 0$", "$= 0$"],
                    ["Moto relativo al CM", "Assente ($\\vec{P}' = 0$)", "Unico moto presente ($\\vec{P}_{CM} = 0$)"],
                    ["$E_k$", "$\\frac{1}{2}Mv_{CM}^2$", "$E_k'$ (solo rotazionale)"],
                    ["Descrizione", "Come un punto materiale", "Serve momento d'inerzia"]
                ]
            }
        },
        {
            id: "s37-roto-traslazione",
            type: "section",
            title: "Moto Roto-traslatorio: il Caso Generale",
            icon: "🌀",
            content: `<p>Il caso generale, e in fondo l'unico che conta davvero per i problemi sui corpi rigidi, è quello in cui il moto non è né di pura traslazione né di pura rotazione.</p>`,
            quote: { text: "Allora, un moto qualunque, alla fine, lo potrò modellizzare per un corpo rigido, come un moto che è una combinazione di una traslazione e di una rotazione. In particolare, come moto di una traslazione del centro di massa e di rotazione intorno a un asse passante per il centro di massa.", src: "Prof. Mercuri" },
            subsections: [
                {
                    subtitle: "L'idea chiave: scomposizione istante per istante",
                    content: `<p>Se il moto qualunque viene "spezzettato" in frazioni infinitesime, ogni frazione infinitesima può essere considerata come una <strong>combinazione di traslazione pura e rotazione pura</strong>. Poi un altro pezzettino, l'asse si è riorientato, la velocità magari è cambiata, altra traslazione pura e rotazione pura.</p>
<p>Potrebbe pure non esserci la rotazione, potrebbe pure non esserci la traslazione, ma in generale ci sono sia l'una che l'altra e in generale sia l'una che l'altra cambiano nel tempo.</p>`
                },
                {
                    subtitle: "I due ingredienti del moto",
                    content: `<p>Per descrivere il moto di un corpo rigido in modo completo bastano <strong>due ingredienti</strong>, istante per istante:</p>
<ol>
<li>La <strong>velocità del centro di massa</strong> $\\vec{v}_{CM}(t)$ (la parte di traslazione)</li>
<li>La <strong>velocità angolare</strong> $\\vec{\\omega}(t)$ rispetto a un asse passante per il centro di massa (la parte di rotazione)</li>
</ol>
<p>Da questi due, si ricava la velocità di ogni altro punto del corpo:</p>
<p>$$\\vec{v}_i = \\vec{v}_{CM} + \\vec{\\omega} \\times \\vec{r}'_i$$</p>
<p>dove $\\vec{r}'_i$ è la posizione del punto $i$ rispetto al centro di massa.</p>`
                },
                {
                    subtitle: "Stessa fisica, descrizioni diverse",
                    content: `<p>Un punto su cui il prof insiste è che lo <strong>stesso moto</strong> può essere descritto in modi diversi a seconda dell'osservatore. Esempio: una sbarra che ruota attorno a un suo estremo. Da fuori la vedete come "pura rotazione attorno all'estremo". Ma se vi mettete nel sistema del centro di massa, vedete il centro di massa traslare <em>e</em> la sbarra ruotare attorno a esso: <em>roto-traslazione</em>.</p>
<p>Il moto è lo stesso, il fenomeno non dipende da chi lo descrive — ma la <strong>descrizione matematica</strong> cambia.</p>`
                }
            ],
            formulas: [
                { label: "Velocità di un punto generico", latex: "\\vec{v}_i = \\vec{v}_{CM} + \\vec{\\omega} \\times \\vec{r}'_i" }
            ]
        },
        {
            id: "s37-perche-intuizioni",
            type: "note_box",
            title: "Perché il Prof. insiste sulle intuizioni",
            icon: "💡",
            content: `<p>Il prof si dilunga volutamente su questi aspetti concettuali prima di passare al formalismo:</p>`,
            quote: { text: "Di solito 'ste cose si saltano, invece ho visto che se uno le approfondisce un po' con gli studenti su questa questione, quello che si studia dopo è solo formalismo, i risultati più chiari.", src: "Prof. Mercuri" },
            extra_content: `<p>Prendetela come un investimento: il prof sta costruendo le intuizioni <strong>ora</strong> così che, nelle prossime lezioni, dimostrazioni e formalismi sui moti rigidi vi sembreranno solo conseguenze naturali. La descrizione completa con le equazioni della dinamica è l'oggetto delle prossime lezioni.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è un corpo rigido? Enuncia il vincolo di rigidità.",
            back: "Un corpo rigido è un sistema di punti materiali in cui la distanza tra due punti qualsiasi $i$ e $j$ rimane costante nel tempo: $\\|\\vec{r}_{ij}\\| = \\text{costante}$ $\\forall\\, i,j$. Equivalentemente, $d(\\|\\vec{r}_{ij}\\|) = 0$. Il corpo è detto indeformabile."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che il lavoro delle forze interne in un corpo rigido è sempre nullo.",
            back: "Per il III principio, $\\vec{F}_{ji} = -\\vec{F}_{ij}$ e le forze sono parallele a $\\vec{r}_{ij}$. Il lavoro di una coppia è $dW = \\vec{F}_{ij} \\cdot d\\vec{r}_{ij} = \\vec{F}_{ij} \\cdot \\vec{v}_{ij}\\, dt$. Dal vincolo di rigidità: $\\|\\vec{r}_{ij}\\|^2 = \\text{cost}$, derivando si ottiene $2\\vec{v}_{ij} \\cdot \\vec{r}_{ij} = 0$, quindi $\\vec{v}_{ij} \\perp \\vec{r}_{ij}$. Poiché $\\vec{F}_{ij} \\parallel \\vec{r}_{ij}$, si ha $\\vec{F}_{ij} \\perp \\vec{v}_{ij}$, dunque $\\vec{F}_{ij} \\cdot \\vec{v}_{ij} = 0$ per ogni coppia e $L_{int} = 0$."
        },
        {
            type: "domanda",
            front: "Quali conseguenze ha il fatto che $L_{int} = 0$ per un corpo rigido sui teoremi dell'energia?",
            back: "Il teorema dell'energia cinetica diventa $L_{est} = \\Delta E_k$ (solo forze esterne). Il teorema dell'energia meccanica diventa $L_{nc,\\, est} = \\Delta E_m$. In pratica, ogni variazione dello stato dinamico del corpo rigido dipende esclusivamente dalle forze esterne."
        },
        {
            type: "formula",
            front: "Come si calcola il centro di massa di un corpo continuo? Elenca i tre tipi di densità.",
            back: "$$\\vec{r}_{CM} = \\frac{1}{M} \\int_{corpo} \\vec{r}\\, dm$$ I tre tipi di densità: volumica $\\rho = dm/dV$, superficiale $\\sigma = dm/dS$, lineare $\\lambda = dm/dL$. Per un corpo omogeneo la densità è costante: $\\rho = M/V$, $\\sigma = M/S$, $\\lambda = M/L$."
        },
        {
            type: "formula",
            front: "Calcola il centro di massa di una semicirconferenza omogenea di raggio $R$.",
            back: "Per simmetria $x_{CM} = 0$. Con $\\lambda = M/(\\pi R)$ e $dm = \\lambda R\\, d\\phi$: $$y_{CM} = \\frac{\\lambda R^2}{M} \\int_{-\\pi/2}^{\\pi/2} \\cos\\phi\\, d\\phi = \\frac{2\\lambda R^2}{M} = \\frac{2R}{\\pi} \\approx 0.64\\, R$$"
        },
        {
            type: "formula",
            front: "Qual è il centro di massa di una sbarra non omogenea con $\\lambda(x) = \\lambda_1 + \\frac{\\lambda_2 - \\lambda_1}{L} x$?",
            back: "$$x_{CM} = \\frac{(2\\lambda_2 + \\lambda_1)\\, L}{3(\\lambda_1 + \\lambda_2)}$$ Sanity check: se $\\lambda_1 = \\lambda_2$ (omogenea) si recupera $x_{CM} = L/2$."
        },
        {
            type: "domanda",
            front: "Qual è la differenza tra pura traslazione e pura rotazione per un corpo rigido?",
            back: "In pura traslazione tutti i punti hanno la stessa velocità $\\vec{v}_i = \\vec{v}_{CM}$, non c'è moto relativo al CM. L'energia cinetica è $E_k = \\frac{1}{2}Mv_{CM}^2$. In pura rotazione il CM è fermo ($\\vec{v}_{CM} = 0$), tutti i punti ruotano attorno all'asse. L'energia cinetica è solo rotazionale $E_k = E_k'$."
        },
        {
            type: "domanda",
            front: "Come si descrive il moto roto-traslatorio di un corpo rigido? Quali sono i due ingredienti necessari?",
            back: "Servono: (1) la velocità del centro di massa $\\vec{v}_{CM}(t)$ e (2) la velocità angolare $\\vec{\\omega}(t)$ rispetto a un asse per il CM. La velocità di ogni punto è: $\\vec{v}_i = \\vec{v}_{CM} + \\vec{\\omega} \\times \\vec{r}'_i$, dove $\\vec{r}'_i$ è la posizione rispetto al CM."
        },
        {
            type: "tranello",
            front: "\"Pura traslazione\" implica velocità costante?",
            back: "No! Pura traslazione significa che tutti i punti hanno la stessa velocità nello stesso istante, ma questa velocità comune può variare nel tempo in modulo e direzione. L'importante è che sia uguale per tutti i punti, non che sia costante."
        },
        {
            type: "tranello",
            front: "Una sbarra che ruota attorno a un suo estremo è in pura rotazione o roto-traslazione?",
            back: "Dipende dal riferimento! Nel riferimento del laboratorio è pura rotazione attorno all'estremo. Ma nel riferimento del centro di massa, il CM trasla E la sbarra ruota attorno a esso: è roto-traslazione. Il moto fisico è lo stesso, cambia la descrizione matematica."
        }
    ]
};

