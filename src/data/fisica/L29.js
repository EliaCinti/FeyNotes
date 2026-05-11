const LESSON = {
    id: "L29", date: "Lezione 24 — 30 Apr 2026",
    title: "Dinamica dei Sistemi e Sistema di Riferimento del Centro di Massa",
    abstract: "Consolidamento delle equazioni cardinali della dinamica dei sistemi, principi di conservazione (quantità di moto, momento angolare, energia meccanica), applicazione completa con esempio molla-blocchi e introduzione del Sistema di Riferimento del Centro di Massa (SRCM).",

    sections: [
        {
            id: "s29-prima-equazione-cardinale",
            type: "section",
            title: "Prima Equazione Cardinale: Moto del Centro di Massa",
            icon: "🚀",
            content: `<p>Riprendiamo il teorema del moto del centro di massa dalla lezione precedente. La risultante delle forze esterne applicate a un sistema di punti materiali è uguale al prodotto della massa totale per l'accelerazione del centro di massa:</p>
<p>$$\\sum \\vec{F}_{ext} = M_{tot} \\vec{a}_{CM}$$</p>
<p>Introducendo la <strong>quantità di moto totale</strong> del sistema $\\vec{P} = M_{tot} \\vec{v}_{CM}$, e osservando che $\\vec{a}_{CM} = \\frac{d\\vec{v}_{CM}}{dt}$, possiamo riscrivere il teorema:</p>
<p>$$\\vec{F}_{ext} = M_{tot} \\frac{d\\vec{v}_{CM}}{dt} = \\frac{d(M_{tot}\\vec{v}_{CM})}{dt} = \\frac{d\\vec{P}}{dt}$$</p>
<p>Questa è la <strong>prima equazione cardinale della dinamica dei sistemi</strong>:</p>
<p>$$\\vec{F}_{ext} = \\frac{d\\vec{P}}{dt}$$</p>
<p>La sua struttura è formalmente identica alla seconda legge di Newton per un singolo punto, $\\vec{F} = \\frac{d\\vec{p}}{dt}$.</p>`,
            subsections: [
                {
                    subtitle: "Conservazione della Quantità di Moto",
                    content: `<p>Una conseguenza diretta: se la risultante delle forze esterne è nulla, la quantità di moto totale si conserva.</p>
<p>$$\\text{Se } \\vec{F}_{ext} = \\vec{0} \\Rightarrow \\frac{d\\vec{P}}{dt} = \\vec{0} \\Rightarrow \\vec{P} = \\text{costante}$$</p>
<p>Un sistema su cui non agiscono forze esterne nette è detto <strong>isolato</strong>. Per un sistema isolato, la quantità di moto totale è una costante del moto.</p>`
                }
            ],
            formulas: [
                { label: "Prima equazione cardinale", latex: "\\vec{F}_{ext} = \\frac{d\\vec{P}}{dt}" },
                { label: "Quantità di moto totale", latex: "\\vec{P} = M_{tot} \\vec{v}_{CM}" },
                { label: "Conservazione di P", latex: "\\vec{F}_{ext} = \\vec{0} \\Rightarrow \\vec{P} = \\text{cost}" }
            ]
        },
        {
            id: "s29-seconda-equazione-cardinale",
            type: "section",
            title: "Seconda Equazione Cardinale: Moto Rotatorio",
            icon: "🔄",
            content: `<p>Per descrivere lo stato di moto rotatorio di un sistema rispetto a un polo $O$, usiamo il momento angolare totale $\\vec{L}_O$. L'equazione generale è:</p>
<p>$$\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt} + \\vec{v}_O \\times \\vec{P}$$</p>
<p>dove $\\vec{M}_O^{(e)}$ è il momento risultante delle forze esterne rispetto al polo $O$, $\\vec{v}_O$ è la velocità del polo e $\\vec{P}$ è la quantità di moto totale.</p>`,
            subsections: [
                {
                    subtitle: "Origine del termine v_O × P",
                    content: `<p>Il termine $\\vec{v}_O \\times \\vec{P}$ nasce dal fatto che il polo $O$ può essere in movimento. Quando si calcola la derivata temporale di $\\vec{L}_O = \\sum_i (\\vec{r}_i - \\vec{r}_O) \\times m_i \\vec{v}_i$, la derivata della posizione del polo $\\vec{r}_O$ genera un termine aggiuntivo proporzionale a $\\vec{v}_O$. In altre parole, parte della variazione apparente di $\\vec{L}_O$ è dovuta non a un cambiamento reale dello stato di moto rotatorio, ma semplicemente al fatto che il "punto di osservazione" $O$ si sta spostando.</p>`
                },
                {
                    subtitle: "Quando il termine aggiuntivo si annulla",
                    content: `<p>Il termine $\\vec{v}_O \\times \\vec{P}$ si annulla in due casi fondamentali:</p>
<p><strong>1.</strong> Il polo $O$ è fisso, quindi $\\vec{v}_O = \\vec{0}$.</p>
<p><strong>2.</strong> La velocità del polo $\\vec{v}_O$ è parallela a $\\vec{P}$. Un caso particolare: quando $O \\equiv CM$, si ha $\\vec{v}_O = \\vec{v}_{CM}$ e $\\vec{P} = M \\vec{v}_{CM}$, quindi i due vettori sono paralleli e il prodotto vettoriale è nullo.</p>
<p>In questi casi l'equazione si semplifica nella <strong>seconda equazione cardinale</strong>:</p>
<p>$$\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt}$$</p>`
                },
                {
                    subtitle: "Conservazione del Momento Angolare",
                    content: `<p>Se il momento risultante delle forze esterne rispetto a $O$ è nullo, e se $O$ è fisso o coincide con il CM, allora:</p>
<p>$$\\text{Se } \\vec{M}_O^{(e)} = \\vec{0} \\Rightarrow \\frac{d\\vec{L}_O}{dt} = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{costante}$$</p>`
                }
            ],
            formulas: [
                { label: "Seconda eq. cardinale (generale)", latex: "\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt} + \\vec{v}_O \\times \\vec{P}" },
                { label: "Seconda eq. cardinale (semplificata)", latex: "\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt}" },
                { label: "Conservazione di L", latex: "\\vec{M}_O^{(e)} = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{cost}" }
            ]
        },
        {
            id: "s29-solo-forze-esterne",
            type: "alert_box",
            title: "Solo le forze esterne cambiano il moto complessivo!",
            icon: "⚠️",
            content: `<p>Le equazioni cardinali evidenziano un principio fondamentale: <strong>solo le forze esterne</strong> possono modificare lo stato di moto complessivo (traslatorio o rotatorio) di un sistema. Le forze interne, per il principio di azione e reazione, hanno risultante e momento risultante nulli, quindi non possono alterare $\\vec{P}$ o $\\vec{L}_{CM}$.</p>
<p><strong>Esempio:</strong> un astronauta nello spazio, lontano da campi gravitazionali significativi. Il sistema "astronauta + gas nello zaino" è isolato. Se l'astronauta è fermo, $\\vec{P}_{tot} = \\vec{0}$. Per muoversi verso la stazione spaziale, non può semplicemente "spingersi": qualsiasi forza interna non cambierebbe la posizione del centro di massa. Deve <strong>espellere del gas</strong> nella direzione opposta. Il gas acquisisce quantità di moto in una direzione, l'astronauta nella direzione contraria, ma $\\vec{P}_{tot}$ rimane zero.</p>`
        },
        {
            id: "s29-esempio-pattinatrice",
            type: "section",
            title: "Esempio: la Pattinatrice su Ghiaccio",
            icon: "⛸️",
            content: `<p>Un esempio classico di conservazione del momento angolare. La pattinatrice inizia a ruotare con le braccia larghe: ha un momento d'inerzia $I_1$ e una velocità angolare $\\omega_1$. Il suo momento angolare è $L = I_1 \\omega_1$.</p>
<p>Trascurando l'attrito, non ci sono momenti di forze esterne, quindi $L$ si conserva. Quando ritrae le braccia, la distribuzione della massa si avvicina all'asse di rotazione: il momento d'inerzia diminuisce ($I_2 \\lt I_1$). Per conservare $L$:</p>
<p>$$I_1 \\omega_1 = I_2 \\omega_2 \\Rightarrow \\omega_2 = \\frac{I_1}{I_2} \\omega_1 \\gt \\omega_1$$</p>
<p>La pattinatrice accelera la sua rotazione semplicemente cambiando la configurazione del suo corpo — un'azione governata da forze <strong>interne</strong> che non alterano il momento angolare totale.</p>`,
            subsections: [
                {
                    subtitle: "Esempio numerico illustrativo",
                    content: `<p>Supponiamo che la pattinatrice abbia $I_1 = 2 \\, \\text{kg} \\cdot \\text{m}^2$ (braccia distese) e $\\omega_1 = 2 \\, \\text{rad/s}$. Il momento angolare è:</p>
<p>$$L = I_1 \\omega_1 = 2 \\cdot 2 = 4 \\, \\text{kg} \\cdot \\text{m}^2/\\text{s}$$</p>
<p>Quando ritrae le braccia, il momento d'inerzia diventa $I_2 = 0{,}5 \\, \\text{kg} \\cdot \\text{m}^2$. La nuova velocità angolare è:</p>
<p>$$\\omega_2 = \\frac{I_1}{I_2} \\omega_1 = \\frac{2}{0{,}5} \\cdot 2 = 8 \\, \\text{rad/s}$$</p>
<p>La velocità angolare è quadruplicata! Riducendo il momento d'inerzia di un fattore 4, la velocità angolare aumenta dello stesso fattore.</p>`
                }
            ],
            formulas: [
                { label: "Conservazione del momento angolare", latex: "I_1 \\omega_1 = I_2 \\omega_2" }
            ]
        },
        {
            id: "s29-energia-cinetica-sistema",
            type: "section",
            title: "Teorema dell'Energia Cinetica per un Sistema",
            icon: "⚡",
            content: `<p>L'energia cinetica totale di un sistema è la somma delle energie cinetiche dei singoli punti (quantità scalare, additiva):</p>
<p>$$E_k = \\sum_{i=1}^{N} \\frac{1}{2} m_i v_i^2$$</p>
<p>Il <strong>teorema dell'energia cinetica</strong> vale anche per i sistemi: il lavoro totale compiuto da <strong>tutte</strong> le forze (interne ed esterne) su tutti i punti è uguale alla variazione di energia cinetica totale:</p>
<p>$$L_{tot}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}$$</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Per ciascun punto $P_i$, la seconda legge di Newton dà $\\vec{F}_i = m_i \\vec{a}_i$, dove $\\vec{F}_i$ è la risultante di tutte le forze su $P_i$. Moltiplicando scalarmente per lo spostamento infinitesimo $d\\vec{r}_i$ e sommando su tutti i punti:</p>
<p>$$\\sum_i \\vec{F}_i \\cdot d\\vec{r}_i = \\sum_i m_i \\vec{a}_i \\cdot d\\vec{r}_i$$</p>
<p>Il membro sinistro è il lavoro elementare totale $dL_{tot}$. Per il membro destro, osserviamo che:</p>
<p>$$\\vec{a}_i \\cdot d\\vec{r}_i = \\frac{d\\vec{v}_i}{dt} \\cdot \\vec{v}_i \\, dt = \\vec{v}_i \\cdot d\\vec{v}_i = d\\!\\left(\\frac{1}{2}v_i^2\\right)$$</p>
<p>Quindi:</p>
<p>$$\\sum_i m_i \\vec{a}_i \\cdot d\\vec{r}_i = d\\!\\left(\\sum_i \\frac{1}{2} m_i v_i^2\\right) = dE_k$$</p>
<p>Integrando tra lo stato A e lo stato B si ottiene $L_{tot}^{A \\to B} = E_{k,B} - E_{k,A}$. $\\square$</p>`
                },
                {
                    subtitle: "Scomposizione del lavoro totale",
                    content: `<p>Il lavoro totale può essere scomposto:</p>
<p>$$L_{tot} = L_{ext} + L_{int}$$</p>
<p><strong>Attenzione:</strong> a differenza della risultante delle forze interne (che è sempre nulla per il terzo principio), il <strong>lavoro delle forze interne non è necessariamente nullo</strong>. Questo è un errore comune all'esame!</p>`
                }
            ],
            formulas: [
                { label: "Energia cinetica totale", latex: "E_k = \\sum_{i=1}^{N} \\frac{1}{2} m_i v_i^2" },
                { label: "Teorema dell'energia cinetica", latex: "L_{tot}^{A \\to B} = E_{k,B} - E_{k,A}" },
                { label: "Scomposizione lavoro", latex: "L_{tot} = L_{ext} + L_{int}" }
            ]
        },
        {
            id: "s29-conservazione-energia-meccanica",
            type: "section",
            title: "Conservazione dell'Energia Meccanica",
            icon: "🔋",
            content: `<p>Definendo l'energia meccanica totale come $E_m = E_k + U$, dove $U$ è la somma di <strong>tutte</strong> le energie potenziali associate a forze conservative (sia interne che esterne), si ottengono due casi:</p>
<p><strong>1. Tutte le forze che compiono lavoro sono conservative:</strong></p>
<p>$$\\Delta E_m = 0$$</p>
<p><strong>2. Sono presenti anche forze non conservative</strong> (es. attriti, forze motrici) che compiono un lavoro $L_{nc}$:</p>
<p>$$\\Delta E_m = L_{nc}$$</p>`,
            subsections: [
                {
                    subtitle: "Nota importante su U",
                    content: `<p>Si noti che $U$ include anche l'energia potenziale elastica della molla (o di qualsiasi altra forza interna conservativa). Questo è il motivo per cui il lavoro delle forze interne conservative "scompare" dall'equazione: è già contabilizzato nella variazione di $U$. Non bisogna commettere l'errore di contare il lavoro della molla sia come $L_{int}$ sia come $-\\Delta U_{el}$.</p>`
                },
                {
                    subtitle: "Forze non conservative ≠ sempre dissipative",
                    content: `<p>Una forza non conservativa è semplicemente una forza il cui lavoro dipende dal percorso:</p>
<p>• Se il lavoro è <strong>negativo</strong> (resistente): l'energia meccanica diminuisce → <strong>dissipazione</strong>.</p>
<p>• Se il lavoro è <strong>positivo</strong> (motore): l'energia meccanica aumenta.</p>
<p><strong>Esempio:</strong> l'esplosione di un razzo. Le forze chimiche interne sono non conservative e compiono un lavoro motore, aumentando drasticamente l'energia cinetica dei frammenti.</p>`
                }
            ],
            formulas: [
                { label: "Energia meccanica", latex: "E_m = E_k + U" },
                { label: "Conservazione (solo conservative)", latex: "\\Delta E_m = 0" },
                { label: "Con forze non conservative", latex: "\\Delta E_m = L_{nc}" }
            ]
        },
        {
            id: "s29-esempio-molla-blocchi",
            type: "section",
            title: "Applicazione: Due Blocchi con Molla Compressa",
            icon: "🧊",
            content: `<p>Due cubetti di massa $m_1$ e $m_2$ sono posti su un piano orizzontale liscio. Tra di essi è compressa una molla di costante elastica $k$ e compressione iniziale $\\Delta L$. Il sistema è inizialmente in quiete. Determiniamo le velocità dopo il rilascio completo della molla.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Due blocchi con molla compressa</strong></p>
  <p><em>Stato iniziale: due blocchi $m_1$ (sinistra) e $m_2$ (destra) collegati da una molla compressa (zigzag), entrambi fermi ($v_1 = 0, v_2 = 0$). Stato finale: i blocchi si sono allontanati, $m_1$ si muove verso sinistra con $\\vec{v}_1$ e $m_2$ verso destra con $\\vec{v}_2$. La molla tra loro è ora alla lunghezza naturale $L_0$. Asse $x$ orizzontale orientato verso destra.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "1. Conservazione della Quantità di Moto",
                    content: `<p>Le forze esterne (peso e reazione normale) si annullano verticalmente. Lungo la direzione orizzontale <strong>non ci sono forze esterne</strong>: la forza della molla è <strong>interna</strong> al sistema. Pertanto $\\vec{P}$ si conserva.</p>
<p>Il sistema è inizialmente fermo: $\\vec{P}_{iniziale} = \\vec{0}$. Dopo il rilascio, scegliendo $x$ verso destra e indicando con $v_1, v_2$ i moduli delle velocità:</p>
<p>$$\\vec{P}_{finale} = (-m_1 v_1 + m_2 v_2) \\hat{\\imath}$$</p>
<p>Dalla conservazione:</p>
<p>$$0 = -m_1 v_1 + m_2 v_2 \\Rightarrow m_1 v_1 = m_2 v_2$$</p>
<p>La massa più leggera si muove più velocemente!</p>`
                },
                {
                    subtitle: "2. Conservazione dell'Energia Meccanica",
                    content: `<p>Le uniche forze che compiono lavoro sono quelle elastiche della molla, che sono <strong>conservative</strong>. Non c'è attrito. Quindi $E_m$ si conserva.</p>
<p>L'energia iniziale è puramente potenziale elastica (velocità nulle):</p>
<p>$$E_{m,i} = 0 + \\frac{1}{2} k (\\Delta L)^2$$</p>
<p>L'energia finale è puramente cinetica (molla alla lunghezza naturale, $U_{el,f} = 0$):</p>
<p>$$E_{m,f} = \\frac{1}{2} m_1 v_1^2 + \\frac{1}{2} m_2 v_2^2 + 0$$</p>
<p>Si noti che $U$ qui è l'energia potenziale elastica della molla, che è una forza <strong>interna</strong> al sistema ma conservativa: è corretto includerla in $E_m$.</p>
<p>Uguagliando:</p>
<p>$$\\frac{1}{2} k (\\Delta L)^2 = \\frac{1}{2} m_1 v_1^2 + \\frac{1}{2} m_2 v_2^2$$</p>`
                },
                {
                    subtitle: "3. Soluzione del Sistema",
                    content: `<p>Due equazioni, due incognite ($v_1, v_2$):</p>
<p>$$\\begin{cases} m_1 v_1 = m_2 v_2 \\\\ k (\\Delta L)^2 = m_1 v_1^2 + m_2 v_2^2 \\end{cases}$$</p>
<p>Dalla prima: $v_1 = \\frac{m_2}{m_1} v_2$. Sostituendo nella seconda:</p>
<p>$$k (\\Delta L)^2 = m_1 \\left( \\frac{m_2}{m_1} v_2 \\right)^2 + m_2 v_2^2 = \\frac{m_2^2}{m_1} v_2^2 + m_2 v_2^2 = \\frac{m_2(m_1 + m_2)}{m_1} v_2^2$$</p>
<p>Risolvendo:</p>
<p>$$v_2 = \\Delta L \\sqrt{\\frac{k \\, m_1}{m_2(m_1 + m_2)}}$$</p>
<p>$$v_1 = \\frac{m_2}{m_1} v_2 = \\Delta L \\sqrt{\\frac{k \\, m_2}{m_1(m_1 + m_2)}}$$</p>`
                },
                {
                    subtitle: "4. Esempio numerico",
                    content: `<p>Con $m_1 = 1 \\, \\text{kg}$, $m_2 = 2 \\, \\text{kg}$, $k = 100 \\, \\text{N/m}$, $\\Delta L = 0{,}1 \\, \\text{m}$:</p>
<p>$$v_2 = 0{,}1 \\sqrt{\\frac{100 \\cdot 1}{2 \\cdot 3}} = 0{,}1 \\sqrt{\\frac{100}{6}} = 0{,}1 \\cdot 4{,}08 \\approx 0{,}41 \\, \\text{m/s}$$</p>
<p>$$v_1 = \\frac{2}{1} \\cdot 0{,}41 \\approx 0{,}82 \\, \\text{m/s}$$</p>
<p><strong>Verifica della quantità di moto:</strong> $m_1 v_1 = 1 \\cdot 0{,}82 = 0{,}82 \\, \\text{kg·m/s}$ e $m_2 v_2 = 2 \\cdot 0{,}41 = 0{,}82 \\, \\text{kg·m/s}$. ✓</p>
<p><strong>Verifica dell'energia:</strong> $E_{k,f} = \\frac{1}{2}(1)(0{,}82)^2 + \\frac{1}{2}(2)(0{,}41)^2 = 0{,}336 + 0{,}168 \\approx 0{,}50 \\, \\text{J}$, che coincide con $U_{el,i} = \\frac{1}{2}(100)(0{,}1)^2 = 0{,}50 \\, \\text{J}$. ✓</p>
<p>Notare che il blocco più leggero ($m_1$) si muove al doppio della velocità del più pesante ($m_2$), ma trasporta solo metà dell'energia cinetica!</p>`
                }
            ],
            formulas: [
                { label: "Velocità blocco 2", latex: "v_2 = \\Delta L \\sqrt{\\frac{k \\, m_1}{m_2(m_1 + m_2)}}" },
                { label: "Velocità blocco 1", latex: "v_1 = \\Delta L \\sqrt{\\frac{k \\, m_2}{m_1(m_1 + m_2)}}" }
            ]
        },
        {
            id: "s29-srcm-definizione",
            type: "section",
            title: "Il Sistema di Riferimento del Centro di Massa (SRCM)",
            icon: "🎯",
            content: `<p>Il centro di massa è un punto privilegiato per descrivere il moto d'insieme di un sistema. Ma può essere utile anche per descrivere i <strong>moti interni</strong>? Per rispondere, introduciamo un sistema di riferimento speciale.</p>`,
            subsections: [
                {
                    subtitle: "Definizione del SRCM",
                    content: `<p>Si definisce <strong>Sistema di Riferimento del Centro di Massa (SRCM)</strong> un sistema di riferimento $S'$ la cui origine $O'$ coincide istante per istante con il centro di massa del sistema, e i cui assi si muovono di <strong>moto puramente traslatorio</strong> rispetto a un sistema di riferimento fisso (cioè, non ruotano: $\\vec{\\omega} = \\vec{0}$).</p>
<p>Il SRCM è in generale un sistema <strong>non inerziale</strong>, poiché la sua origine (il CM) può essere accelerata.</p>`
                },
                {
                    subtitle: "Leggi di trasformazione",
                    content: `<p>Sia $S$ il sistema fisso e $S'$ il SRCM. La posizione di un punto $P_i$ nei due riferimenti è legata da:</p>
<p>$$\\vec{r}_i = \\vec{r}'_i + \\vec{r}_{CM}$$</p>
<p>Derivando rispetto al tempo:</p>
<p>$$\\vec{v}_i = \\vec{v}'_i + \\vec{v}_{CM}$$</p>
<p>$$\\vec{a}_i = \\vec{a}'_i + \\vec{a}_{CM}$$</p>
<p>dove le grandezze con apice indicano le misure nel SRCM.</p>`
                }
            ],
            formulas: [
                { label: "Trasformazione posizioni", latex: "\\vec{r}_i = \\vec{r}'_i + \\vec{r}_{CM}" },
                { label: "Trasformazione velocità", latex: "\\vec{v}_i = \\vec{v}'_i + \\vec{v}_{CM}" },
                { label: "Trasformazione accelerazioni", latex: "\\vec{a}_i = \\vec{a}'_i + \\vec{a}_{CM}" }
            ]
        },
        {
            id: "s29-srcm-quantita-moto-nulla",
            type: "section",
            title: "Proprietà Fondamentale: P' = 0 nel SRCM",
            icon: "✨",
            content: `<p>La proprietà più importante del SRCM è enunciata dalla seguente proposizione:</p>
<p><strong>Proposizione:</strong> La quantità di moto totale di un sistema, misurata nel SRCM, è <strong>sempre nulla</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione",
                    content: `<p>La posizione del centro di massa nel SRCM si calcola con la solita formula, usando le coordinate relative $\\vec{r}'_i$:</p>
<p>$$\\vec{r}'_{CM} = \\frac{1}{M} \\sum_i m_i \\vec{r}'_i$$</p>
<p>Ma per definizione, nel SRCM l'origine <strong>è</strong> il centro di massa stesso, quindi $\\vec{r}'_{CM} = \\vec{0}$:</p>
<p>$$\\frac{1}{M} \\sum_i m_i \\vec{r}'_i = \\vec{0} \\Rightarrow \\sum_i m_i \\vec{r}'_i = \\vec{0}$$</p>
<p>Derivando rispetto al tempo, otteniamo la quantità di moto totale nel SRCM:</p>
<p>$$\\frac{d}{dt} \\left( \\sum_i m_i \\vec{r}'_i \\right) = \\sum_i m_i \\vec{v}'_i = \\vec{P}'$$</p>
<p>Poiché la derivata di zero è zero:</p>
<p>$$\\vec{P}' = \\vec{0}$$</p>
<p>Derivando un'ulteriore volta si ottiene anche:</p>
<p>$$\\sum_i m_i \\vec{a}'_i = \\vec{0}$$</p>
<p>$\\square$</p>`
                },
                {
                    subtitle: "Verifica di coerenza con la prima equazione cardinale",
                    content: `<p>Poiché il SRCM è un sistema non inerziale che trasla con accelerazione $\\vec{a}_{CM}$, su ogni punto $P_i$ agisce una forza apparente (o fittizia) di trascinamento $\\vec{F}_{trasc,i} = -m_i \\vec{a}_{CM}$. La prima equazione cardinale nel SRCM diventa:</p>
<p>$$\\frac{d\\vec{P}'}{dt} = \\sum \\vec{F}_{ext} + \\sum \\vec{F}_{trasc} = \\vec{F}_{ext} - M \\vec{a}_{CM}$$</p>
<p>Ma dal teorema del moto del CM sappiamo che $\\vec{F}_{ext} = M \\vec{a}_{CM}$. Sostituendo:</p>
<p>$$\\frac{d\\vec{P}'}{dt} = M \\vec{a}_{CM} - M \\vec{a}_{CM} = \\vec{0}$$</p>
<p>Ciò conferma che $\\vec{P}'$ è costante nel tempo, e poiché abbiamo dimostrato che vale $\\vec{0}$, è <strong>sempre nulla</strong>.</p>
<p>Il SRCM è dunque un sistema di riferimento in cui il moto d'insieme è "filtrato via". Questo lo rende ideale per studiare i <strong>moti interni</strong> al sistema.</p>`
                }
            ],
            formulas: [
                { label: "Quantità di moto nel SRCM", latex: "\\vec{P}' = \\sum_i m_i \\vec{v}'_i = \\vec{0}" },
                { label: "Somma ponderata posizioni", latex: "\\sum_i m_i \\vec{r}'_i = \\vec{0}" }
            ]
        },
        {
            id: "s29-anticipazione-konig",
            type: "note_box",
            title: "Prossimamente: i Teoremi di König",
            icon: "🔮",
            content: `<p>Nelle prossime lezioni utilizzeremo il SRCM per derivare i <strong>Teoremi di König</strong>, che stabiliscono una scomposizione fondamentale:</p>
<p>• Il <strong>momento angolare totale</strong> si scompone in una parte legata al moto del CM (come se tutta la massa fosse concentrata lì) e una parte legata ai moti interni relativi al CM.</p>
<p>• L'<strong>energia cinetica totale</strong> si scompone analogamente: un contributo traslatorio del CM più un contributo dei moti interni.</p>
<p>Queste scomposizioni sono possibili proprio grazie alla proprietà $\\vec{P}' = \\vec{0}$ dimostrata in questa lezione, che elimina i termini incrociati.</p>`
        },
        {
            id: "s29-orale-equazioni-cardinali",
            type: "oral_box",
            title: "Domanda tipica: Le equazioni cardinali",
            icon: "🎤",
            content: `<p><strong>Domanda:</strong> "Enunci e commenti le equazioni cardinali della dinamica dei sistemi. Quando si semplifica la seconda?"</p>
<p><strong>Risposta attesa:</strong> Enunciare entrambe le equazioni, specificare che nella seconda il termine $\\vec{v}_O \\times \\vec{P}$ si annulla per polo fisso o polo nel CM. Commentare che solo le forze esterne contano. Menzionare i principi di conservazione come corollari.</p>`
        }
    ],

    oral_cards: [
        {
            type: "formula",
            front: "Scrivi la prima equazione cardinale della dinamica dei sistemi e la legge di conservazione associata.",
            back: "Prima eq. cardinale: $\\vec{F}_{ext} = \\frac{d\\vec{P}}{dt}$, dove $\\vec{P} = M_{tot} \\vec{v}_{CM}$. Se $\\vec{F}_{ext} = \\vec{0}$ (sistema isolato), allora $\\vec{P} = \\text{costante}$."
        },
        {
            type: "formula",
            front: "Scrivi la seconda equazione cardinale nella forma generale e in quella semplificata. Quando vale la forma semplificata?",
            back: "Forma generale: $\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt} + \\vec{v}_O \\times \\vec{P}$. Forma semplificata: $\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt}$. Vale quando: (1) il polo $O$ è fisso ($\\vec{v}_O = \\vec{0}$), oppure (2) $\\vec{v}_O \\parallel \\vec{P}$, in particolare quando $O \\equiv CM$."
        },
        {
            type: "domanda",
            front: "Perché le forze interne non compaiono nelle equazioni cardinali, ma il loro lavoro può essere non nullo?",
            back: "Per il III principio di Newton, le forze interne sono a coppie uguali e contrarie: la loro risultante è nulla ($\\sum \\vec{F}_{int} = \\vec{0}$) e anche il loro momento risultante. Tuttavia, i punti di applicazione delle due forze di una coppia possono subire spostamenti diversi, quindi il lavoro totale delle forze interne $L_{int} = \\sum \\vec{F}_{int,i} \\cdot d\\vec{r}_i$ non è in generale nullo."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che la quantità di moto totale nel SRCM è sempre nulla.",
            back: "Per definizione, nel SRCM il CM è nell'origine: $\\vec{r}'_{CM} = \\frac{1}{M}\\sum_i m_i \\vec{r}'_i = \\vec{0}$, quindi $\\sum_i m_i \\vec{r}'_i = \\vec{0}$. Derivando: $\\sum_i m_i \\vec{v}'_i = \\vec{P}' = \\vec{0}$. La quantità di moto nel SRCM è identicamente nulla in ogni istante."
        },
        {
            type: "definizione",
            front: "Cos'è il Sistema di Riferimento del Centro di Massa (SRCM)?",
            back: "È un sistema di riferimento $S'$ con origine nel centro di massa del sistema e assi che si muovono di moto puramente traslatorio rispetto al sistema fisso (non ruotano, $\\vec{\\omega} = \\vec{0}$). È in generale non inerziale, poiché il CM può essere accelerato."
        },
        {
            type: "tranello",
            front: "Un sistema isolato ha quantità di moto totale nulla. Questo implica che tutti i punti siano fermi?",
            back: "Assolutamente no! $\\vec{P} = \\vec{0}$ significa solo che $\\sum m_i \\vec{v}_i = \\vec{0}$: le quantità di moto dei singoli punti si compensano vettorialmente. I punti possono muoversi a velocità elevate in direzioni diverse (es. i due blocchi con la molla: $m_1 v_1 = m_2 v_2$ ma entrambi in moto)."
        },
        {
            type: "domanda",
            front: "Nell'esempio dei due blocchi con molla compressa, perché si può usare sia la conservazione di P che di E_m? Quali forze sono coinvolte?",
            back: "La quantità di moto si conserva perché non ci sono forze esterne orizzontali (peso e normale si annullano verticalmente). L'energia meccanica si conserva perché l'unica forza che compie lavoro è la forza elastica, che è conservativa. La forza della molla è interna al sistema, ma il suo lavoro è non nullo e viene contabilizzato come variazione di energia potenziale elastica $U_{el}$."
        },
        {
            type: "formula",
            front: "Scrivi il teorema dell'energia cinetica per un sistema di punti. Qual è la differenza chiave rispetto al punto singolo?",
            back: "$L_{tot}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}$, dove $E_k = \\sum_i \\frac{1}{2}m_i v_i^2$ e $L_{tot} = L_{ext} + L_{int}$. La differenza chiave è che $L_{tot}$ include il lavoro delle forze interne, che per un sistema non è in generale nullo (a differenza della risultante delle forze interne)."
        },
        {
            type: "tranello",
            front: "Le forze non conservative sono sempre dissipative?",
            back: "No! Una forza non conservativa è una forza il cui lavoro dipende dal percorso. Se il lavoro è negativo (resistente) → dissipazione ($\\Delta E_m \\lt 0$). Ma se è positivo (motore) → l'energia meccanica aumenta ($\\Delta E_m \\gt 0$). Esempio: l'esplosione di un razzo, dove le forze chimiche interne sono non conservative ma compiono lavoro motore."
        },
        {
            type: "domanda",
            front: "Spiega con un esempio fisico perché un astronauta nel vuoto non può muoversi 'spingendosi da solo'.",
            back: "Il sistema astronauta + gas è isolato, quindi $\\vec{P}_{tot} = \\text{cost} = \\vec{0}$ (se inizialmente fermo). Le forze interne non cambiano $\\vec{P}_{tot}$ né la posizione del CM. Per muoversi, deve espellere massa (gas) in una direzione: il gas acquista $\\vec{p}_{gas}$ e l'astronauta $\\vec{p}_{astr} = -\\vec{p}_{gas}$. La quantità di moto totale resta zero, ma l'astronauta si muove nella direzione opposta al gas."
        }
    ]
};

