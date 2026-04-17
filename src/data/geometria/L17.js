const LESSON = {
    id: "L17", date: "Lezione 17 — 14 Apr 2026",
    title: "Momento Angolare e Fenomeni Rotatori",
    abstract: "Costruzione del formalismo della dinamica rotazionale: dal momento di un vettore al momento angolare, passando per il teorema del momento angolare (seconda equazione cardinale), il teorema del momento dell'impulso e il lavoro nelle rotazioni. Analogia completa tra dinamica traslazionale e rotazionale.",

    sections: [
        {
            id: "s17-intro-rotazioni",
            type: "section",
            title: "Introduzione ai Fenomeni Rotatori",
            icon: "🔄",
            content: `<p>In questa lezione riprendiamo e approfondiamo il concetto di fenomeni rotatori. L'obiettivo è costruire un <strong>formalismo completo</strong> per descrivere la dinamica delle rotazioni — l'equivalente della seconda legge di Newton, ma per i moti rotatori.</p>
<p>Un esempio emblematico è il funzionamento di un motore a combustione interna: il moto lineare alternato dei pistoni viene convertito nel moto rotatorio dell'albero motore, che trasmette la rotazione alle ruote attraverso ingranaggi e assi. Quasi ogni componente di un veicolo, dal motore alle ruote, è coinvolto in un moto rotatorio.</p>`,
            subsections: [
                {
                    subtitle: "La Percezione della Rotazione e il Ruolo dell'Osservatore",
                    content: `<p>Un aspetto cruciale dei fenomeni rotatori è che la loro <strong>percezione dipende dal punto di osservazione</strong>. Il punto da cui un osservatore descrive il moto è detto <strong>polo</strong>, indicato con $O$.</p>
<p>Consideriamo un semplice esempio:</p>
<p><strong>Un treno si muove a velocità costante su un binario rettilineo.</strong></p>
<ol>
<li><strong>Osservatore lontano (in fondo al binario):</strong> vede il treno allontanarsi o avvicinarsi lungo una linea retta. Non percepisce alcuna rotazione — il moto è puramente traslatorio.</li>
<li><strong>Osservatore vicino (sulla banchina):</strong> mentre il treno passa, deve ruotare la testa per seguirlo con lo sguardo. Dal suo punto di vista, il treno sembra compiere una rotazione attorno a lui.</li>
</ol>
<p>Lo stesso moto fisico può essere percepito come puramente traslatorio o come una combinazione di traslazione e rotazione, a seconda della posizione dell'osservatore. L'osservatore sulla banchina percepisce una rotazione perché la velocità del treno possiede una <strong>componente trasversale non nulla</strong> rispetto alla congiungente osservatore-treno: è proprio questa componente che, come vedremo, determina il momento angolare del sistema rispetto a quel polo.</p>
<p>Il nostro compito sarà definire una grandezza fisica che catturi questa componente rotatoria del moto e trovare l'equivalente della seconda legge di Newton per descriverne le variazioni.</p>`
                }
            ]
        },
        {
            id: "s17-riepilogo-dinamica",
            type: "section",
            title: "Riepilogo delle Grandezze Fondamentali della Dinamica",
            icon: "📋",
            content: `<p>Prima di introdurre nuove grandezze, ripassiamo i due pilastri su cui si fonda la dinamica del punto materiale.</p>`,
            subsections: [
                {
                    subtitle: "Quantità di Moto e Seconda Legge di Newton",
                    content: `<p>Lo stato di moto generale di un corpo è descritto dalla <strong>quantità di moto</strong>:</p>
<p>$$\\vec{p} = m\\vec{v}$$</p>
<p>La sua variazione nel tempo è legata alla causa del moto (la forza). La formulazione più generale della seconda legge di Newton è:</p>
<p>$$\\vec{F}_{\\text{ris}} = \\frac{d\\vec{p}}{dt}$$</p>
<p>Questa equazione rappresenta la sintesi della dinamica traslazionale: la <strong>causa</strong> ($\\vec{F}_{\\text{ris}}$) produce un <strong>effetto</strong> (la variazione dello stato di moto, $\\frac{d\\vec{p}}{dt}$). È valida in sistemi di riferimento inerziali.</p>`
                },
                {
                    subtitle: "Energia e Lavoro",
                    content: `<p>Una sottocategoria di problemi riguarda la capacità di un sistema di variare la <strong>rapidità</strong> (il modulo della velocità) del moto. Questa capacità è quantificata dall'<strong>energia</strong>, grandezza scalare.</p>
<p>In meccanica, le forme principali di energia sono:</p>
<ul>
<li><strong>Energia cinetica ($E_k$)</strong>: associata allo stato di moto di un corpo.</li>
<li><strong>Energia potenziale ($U$)</strong>: associata alla configurazione di un sistema in cui agiscono forze conservative.</li>
</ul>
<p>Il trasferimento di energia avviene tramite il <strong>lavoro</strong> compiuto dalle forze.</p>`
                },
                {
                    subtitle: "Teorema dell'Energia Cinetica (Forze Vive)",
                    content: `<p>Il lavoro totale $L_{\\text{tot}}$ compiuto dalla risultante delle forze su un punto materiale da A a B è uguale alla variazione della sua energia cinetica:</p>
<p>$$L_{\\text{tot}}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}$$</p>
<p>dove $E_k = \\frac{1}{2}mv^2$.</p>
<p><strong>Dimostrazione:</strong> Partiamo da $\\vec{F} = m\\vec{a}$ e calcoliamo il lavoro infinitesimo:</p>
<p>$$dL = \\vec{F} \\cdot d\\vec{s} = m\\vec{a} \\cdot d\\vec{s}$$</p>
<p>Ricordando che $\\vec{a} = \\frac{d\\vec{v}}{dt}$ e $d\\vec{s} = \\vec{v}\\,dt$:</p>
<p>$$dL = m \\frac{d\\vec{v}}{dt} \\cdot \\vec{v}\\,dt = m\\,\\vec{v} \\cdot d\\vec{v}$$</p>
<p>Usando l'identità $d(\\vec{v} \\cdot \\vec{v}) = d(v^2) = 2\\vec{v} \\cdot d\\vec{v}$, otteniamo $\\vec{v} \\cdot d\\vec{v} = \\frac{1}{2}d(v^2)$:</p>
<p>$$dL = m \\cdot \\frac{1}{2}d(v^2) = d\\!\\left(\\frac{1}{2}mv^2\\right) = dE_k$$</p>
<p>Integrando da A a B:</p>
<p>$$L_{\\text{tot}}^{A \\to B} = \\int_A^B dL = \\int_{E_{k,A}}^{E_{k,B}} dE_k = E_{k,B} - E_{k,A} = \\Delta E_k \\qquad \\square$$</p>`
                }
            ],
            formulas: [
                { label: "Quantità di moto", latex: "\\vec{p} = m\\vec{v}" },
                { label: "Seconda legge di Newton", latex: "\\vec{F}_{\\text{ris}} = \\frac{d\\vec{p}}{dt}" },
                { label: "Teorema delle forze vive", latex: "L_{\\text{tot}}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}" }
            ]
        },
        {
            id: "s17-momento-vettore",
            type: "section",
            title: "Il Momento di un Vettore Rispetto a un Polo",
            icon: "↗️",
            content: `<p>Per costruire il formalismo della dinamica rotazionale, abbiamo bisogno di uno strumento matematico che catturi l'idea di <strong>effetto rotatorio</strong>. Questo strumento è il <strong>momento di un vettore</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione e Proprietà",
                    content: `<p><strong>⚠️ Il momento di un vettore non è una proprietà intrinseca del vettore stesso, ma è sempre definito rispetto a un polo. Omettere il riferimento al polo è un errore concettuale grave.</strong></p>
<p>Dato un vettore $\\vec{A}$ applicato in un punto $P$ e un punto di osservazione (polo) $O$, si definisce <strong>momento del vettore $\\vec{A}$ rispetto al polo $O$</strong>:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}$$</p>
<p>dove $\\vec{r} = \\vec{OP}$ è il vettore posizione che congiunge il polo $O$ con il punto di applicazione $P$ del vettore $\\vec{A}$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Momento di un vettore: polo, braccio e angolo</strong></p>
  <p><em>Polo $O$ in basso a sinistra. Vettore $\\vec{r}$ da $O$ al punto di applicazione $P$. Vettore $\\vec{A}$ (rosso) applicato in $P$. Retta d'azione tratteggiata che prolunga $\\vec{A}$ in entrambe le direzioni. Segmento punteggiato $h$ (braccio) perpendicolare da $O$ alla retta d'azione, con piede $H$. Angolo $\\theta$ tra $\\vec{r}$ e $\\vec{A}$ indicato nel punto $P$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem;">Nota: il punto $H$ è la proiezione ortogonale di $O$ sulla <em>retta d'azione</em> di $\\vec{A}$ (non sul segmento), e la retta d'azione si estende in entrambe le direzioni oltre il vettore $\\vec{A}$ stesso.</p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
                },
                {
                    subtitle: "Modulo del Momento e Braccio",
                    content: `<p>Il modulo del momento è:</p>
<p>$$|\\vec{M}_O| = |\\vec{r}|\\,|\\vec{A}|\\,\\sin\\theta$$</p>
<p>dove $\\theta$ è l'angolo tra $\\vec{r}$ e $\\vec{A}$.</p>
<p>Definiamo il <strong>braccio</strong> $h$ come la distanza perpendicolare tra il polo $O$ e la retta d'azione del vettore $\\vec{A}$. Dalla geometria:</p>
<p>$$h = |\\vec{r}|\\sin\\theta$$</p>
<p>Quindi il modulo del momento si scrive in modo compatto:</p>
<p>$$|\\vec{M}_O| = |\\vec{A}| \\cdot h$$</p>
<p>Il momento quantifica l'<strong>effetto di leva</strong> del vettore $\\vec{A}$ rispetto al polo $O$. A parità di intensità di $\\vec{A}$, l'effetto rotatorio è maggiore quanto più grande è il braccio.</p>`
                },
                {
                    subtitle: "Teorema del Trasporto dei Momenti",
                    content: `<p>Come cambia il momento di un vettore se cambiamo il polo di osservazione?</p>
<p>Dati un vettore $\\vec{A}$ e due poli $O$ e $O'$, i momenti sono legati dalla relazione:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}$$</p>
<p><strong>Dimostrazione:</strong> Sia $P$ il punto di applicazione di $\\vec{A}$. Definiamo $\\vec{r} = \\vec{OP}$ e $\\vec{r}' = \\vec{O'P}$. Dalla regola di Chasles:</p>
<p>$$\\vec{OP} = \\vec{OO'} + \\vec{O'P} \\quad \\Rightarrow \\quad \\vec{r} = \\vec{OO'} + \\vec{r}'$$</p>
<p>Calcoliamo il momento rispetto a $O'$:</p>
<p>$$\\vec{M}_{O'}(\\vec{A}) = \\vec{r}' \\times \\vec{A} = (\\vec{r} - \\vec{OO'}) \\times \\vec{A} = (\\vec{r} \\times \\vec{A}) - (\\vec{OO'} \\times \\vec{A}) = \\vec{M}_O(\\vec{A}) - \\vec{OO'} \\times \\vec{A}$$</p>
<p>Riorganizzando si ottiene la tesi. $\\square$</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Teorema del trasporto dei momenti</strong></p>
  <p><em>Due poli $O$ e $O'$. Vettore $\\vec{OO'}$ (arancione) da $O$ a $O'$. Vettore $\\vec{r}$ (blu) da $O$ a $P$. Vettore $\\vec{r}'$ (verde) da $O'$ a $P$. Vettore $\\vec{A}$ (rosso) applicato in $P$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
                }
            ],
            formulas: [
                { label: "Momento di un vettore", latex: "\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}" },
                { label: "Modulo del momento", latex: "|\\vec{M}_O| = |\\vec{A}| \\cdot h" },
                { label: "Braccio", latex: "h = |\\vec{r}|\\sin\\theta" },
                { label: "Trasporto dei momenti", latex: "\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}" }
            ]
        },
        {
            id: "s17-momento-angolare",
            type: "section",
            title: "Momento Angolare",
            icon: "🌀",
            content: `<p>Ora applichiamo lo strumento matematico del momento di un vettore al nostro problema fisico. Vogliamo una grandezza che descriva lo <strong>stato di moto rotatorio</strong>. Il moto è descritto dalla quantità di moto $\\vec{p}$, quindi è naturale definire la grandezza rotazionale come il <strong>momento della quantità di moto</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p>Si definisce <strong>momento angolare</strong> $\\vec{L}_O$ di un punto materiale rispetto a un polo $O$:</p>
<p>$$\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$$</p>
<p>dove $\\vec{r}$ è il vettore posizione del punto materiale rispetto al polo $O$.</p>`
                },
                {
                    subtitle: "Proprietà Fondamentali",
                    content: `<p>Il momento angolare cattura tutte le proprietà che intuitivamente associamo alla percezione della rotazione:</p>
<ol>
<li><strong>Dipendenza dal polo:</strong> come tutti i momenti, $\\vec{L}_O$ dipende dalla scelta del polo $O$.</li>
<li><strong>Dipendenza dal braccio:</strong> il suo modulo è $|\\vec{L}_O| = |\\vec{r}||\\vec{p}|\\sin\\theta = p \\cdot h$, dove $h$ è la distanza del polo dalla retta su cui giace $\\vec{p}$.</li>
<li><strong>Dipendenza dalla componente trasversale della velocità:</strong> questo è il punto chiave.</li>
</ol>
<p>La velocità $\\vec{v}$ può essere scomposta in componente radiale $\\vec{v}_r$ (parallela a $\\vec{r}$) e trasversale $\\vec{v}_t$ (perpendicolare a $\\vec{r}$):</p>
<p>$$\\vec{v} = \\vec{v}_r + \\vec{v}_t$$</p>
<p>Calcolando il momento angolare:</p>
<p>$$\\vec{L}_O = m(\\vec{r} \\times (\\vec{v}_r + \\vec{v}_t)) = m(\\vec{r} \\times \\vec{v}_r) + m(\\vec{r} \\times \\vec{v}_t)$$</p>
<p>Poiché $\\vec{r}$ e $\\vec{v}_r$ sono paralleli, il loro prodotto vettoriale è nullo: $\\vec{r} \\times \\vec{v}_r = \\vec{0}$. Quindi:</p>
<p>$$\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$$</p>
<p>Il momento angolare dipende <strong>esclusivamente</strong> dalla componente della velocità trasversale alla congiungente polo-punto. Questo formalizza l'idea che la percezione della rotazione è legata al moto "di traverso" rispetto all'osservatore.</p>`
                },
                {
                    subtitle: "Esempio Illustrativo: Momento Angolare con Polo Fisso",
                    content: `<p>Un punto materiale di massa $m = 2\\;\\text{kg}$ si muove con velocità $\\vec{v} = 3\\,\\hat{u}_x\\;\\text{m/s}$ (moto rettilineo uniforme lungo l'asse $x$) e passa per il punto $P = (4, 3)\\;\\text{m}$. Polo: $O = (0,0)$.</p>
<p>Il vettore posizione è $\\vec{r} = 4\\,\\hat{u}_x + 3\\,\\hat{u}_y\\;\\text{m}$.</p>
<p>La quantità di moto: $\\vec{p} = m\\vec{v} = 2\\,\\text{kg} \\times 3\\,\\hat{u}_x\\,\\text{m/s} = 6\\,\\hat{u}_x\\;\\text{kg·m/s}$.</p>
<p>Il momento angolare vale:</p>
<p>$$\\vec{L}_O = \\vec{r} \\times \\vec{p} = (4\\,\\hat{u}_x + 3\\,\\hat{u}_y) \\times (6\\,\\hat{u}_x) = 24\\,(\\hat{u}_x \\times \\hat{u}_x) + 18\\,(\\hat{u}_y \\times \\hat{u}_x)$$</p>
<p>Poiché $\\hat{u}_x \\times \\hat{u}_x = \\vec{0}$ e $\\hat{u}_y \\times \\hat{u}_x = -\\hat{u}_z$:</p>
<p>$$\\vec{L}_O = -18\\,\\hat{u}_z\\;\\text{kg·m}^2\\text{/s}$$</p>
<p><strong>Verifica con il braccio:</strong> il braccio è la distanza del polo dalla retta del moto (la retta $y = 3$), cioè $h = 3\\;\\text{m}$. Verifica: $|\\vec{L}_O| = p \\cdot h = 6 \\times 3 = 18\\;\\text{kg·m}^2\\text{/s}$ ✓</p>
<p>Se la risultante delle forze è nulla ($\\vec{F} = \\vec{0}$), allora $\\vec{M}_O = \\vec{0}$ e il momento angolare si conserva: nonostante $\\vec{r}$ cambi nel tempo, $\\vec{L}_O$ resta costante.</p>`
                }
            ],
            formulas: [
                { label: "Momento angolare", latex: "\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})" },
                { label: "Solo componente trasversale", latex: "\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)" },
                { label: "Modulo del momento angolare", latex: "|\\vec{L}_O| = p \\cdot h" }
            ]
        },
        {
            id: "s17-momento-forza",
            type: "section",
            title: "Momento di una Forza",
            icon: "🔧",
            content: `<p>Prima di enunciare il teorema del momento angolare, esplicitiamo il collegamento tra la definizione generale di momento di un vettore e il caso specifico in cui il vettore è una <strong>forza</strong>.</p>
<p>Dato un punto materiale in posizione $P$ soggetto a una forza $\\vec{F}$, e scelto un polo $O$, si definisce <strong>momento della forza</strong> $\\vec{F}$ rispetto al polo $O$:</p>
<p>$$\\vec{M}_O(\\vec{F}) = \\vec{r} \\times \\vec{F}$$</p>
<p>dove $\\vec{r} = \\vec{OP}$. In molti contesti lo si indica semplicemente con $\\vec{M}_O$.</p>
<p>Il momento della forza è un caso particolare del momento di un vettore generico $\\vec{A}$: si ottiene ponendo $\\vec{A} = \\vec{F}$. Tutte le proprietà viste (dipendenza dal polo, ruolo del braccio, teorema del trasporto) si applicano identicamente.</p>`,
            formulas: [
                { label: "Momento di una forza", latex: "\\vec{M}_O(\\vec{F}) = \\vec{r} \\times \\vec{F}" }
            ]
        },
        {
            id: "s17-teorema-momento-angolare",
            type: "section",
            title: "Teorema del Momento Angolare",
            icon: "⚖️",
            content: `<p>Deriviamo ora l'equazione che governa la dinamica del momento angolare — l'<strong>analogo della seconda legge di Newton per le rotazioni</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Derivazione",
                    content: `<p><strong>Ipotesi:</strong> il polo $O$ è <strong>fisso</strong> nel sistema di riferimento inerziale. (Se il polo fosse in moto, comparirebbe un termine aggiuntivo. Il teorema resta valido nella stessa forma anche quando il polo coincide con il centro di massa, anche se in moto — caso trattato nella lezione sui sistemi di punti.)</p>
<p>Calcoliamo la derivata del momento angolare rispetto al tempo:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p})$$</p>
<p>Usando la regola di derivazione del prodotto vettoriale:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$</p>
<p><strong>Primo termine:</strong> $\\frac{d\\vec{r}}{dt} = \\vec{v}$ (polo fisso) e $\\vec{p} = m\\vec{v}$, quindi:</p>
<p>$$\\frac{d\\vec{r}}{dt} \\times \\vec{p} = \\vec{v} \\times (m\\vec{v}) = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$$</p>
<p>Il prodotto vettoriale di un vettore con sé stesso è <strong>sempre nullo</strong>.</p>
<p><strong>Secondo termine:</strong> $\\frac{d\\vec{p}}{dt} = \\vec{F}$ (seconda legge di Newton), quindi:</p>
<p>$$\\vec{r} \\times \\frac{d\\vec{p}}{dt} = \\vec{r} \\times \\vec{F} = \\vec{M}_O$$</p>
<p>Mettendo insieme i risultati:</p>`
                },
                {
                    subtitle: "Enunciato del Teorema",
                    content: `<p>Per un punto materiale, la derivata temporale del suo momento angolare $\\vec{L}_O$, calcolato rispetto a un polo fisso $O$, è uguale al momento totale $\\vec{M}_O$ delle forze applicate, calcolato rispetto allo stesso polo:</p>
<p>$$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$$</p>
<p>Questa è la <strong>seconda equazione cardinale della dinamica</strong>.</p>`
                },
                {
                    subtitle: "Conservazione del Momento Angolare",
                    content: `<p>Se il momento totale delle forze esterne rispetto a un polo $O$ è nullo ($\\vec{M}_O = \\vec{0}$), allora il momento angolare si conserva:</p>
<p>$$\\vec{M}_O = \\vec{0} \\quad \\Rightarrow \\quad \\frac{d\\vec{L}_O}{dt} = \\vec{0} \\quad \\Rightarrow \\quad \\vec{L}_O = \\text{costante}$$</p>
<p>La condizione $\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\vec{0}$ si verifica in due casi importanti:</p>
<ol>
<li><strong>La forza risultante è nulla</strong> ($\\vec{F} = \\vec{0}$). In questo caso si conserva anche la quantità di moto.</li>
<li><strong>La forza risultante è parallela a $\\vec{r}$</strong>. Questo tipo di forza, sempre diretta verso (o da) un punto fisso (il polo), è detta <strong>forza centrale</strong>.</li>
</ol>`
                }
            ],
            formulas: [
                { label: "Seconda equazione cardinale", latex: "\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}" },
                { label: "Conservazione di L", latex: "\\vec{M}_O = \\vec{0} \\;\\Rightarrow\\; \\vec{L}_O = \\text{costante}" }
            ]
        },
        {
            id: "s17-analogia-trasl-rot",
            type: "alert_box",
            title: "Analogia Traslazionale ↔ Rotazionale",
            icon: "🔀",
            content: `<p>Esiste una <strong>profonda analogia</strong> tra le equazioni della dinamica traslazionale e quelle della dinamica rotazionale. Memorizzare questa tabella è fondamentale per l'esame:</p>`,
            table_compare: {
                headers: ["Moto Traslazionale", "Moto Rotazionale"],
                rows: [
                    ["Quantità di moto: $\\vec{p}$", "Momento angolare: $\\vec{L}_O$"],
                    ["Causa della variazione: Forza $\\vec{F}$", "Causa della variazione: Momento $\\vec{M}_O$"],
                    ["$\\vec{F} = \\frac{d\\vec{p}}{dt}$ (I eq. cardinale)", "$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$ (II eq. cardinale)"]
                ]
            },
            extra_content: `<p>Il momento della forza sta al momento angolare come la forza sta alla quantità di moto. Tutto ciò che le forze producono nelle traslazioni, nelle rotazioni lo producono i <strong>momenti delle forze</strong>.</p>`
        },
        {
            id: "s17-impulso-momento-impulso",
            type: "section",
            title: "Teorema dell'Impulso e Momento dell'Impulso",
            icon: "💥",
            content: `<p>Passiamo ora alle forme integrali delle equazioni cardinali, fondamentali per lo studio dei fenomeni impulsivi (urti, colpi).</p>`,
            subsections: [
                {
                    subtitle: "Riepilogo: Il Teorema dell'Impulso",
                    content: `<p>Se conosciamo come varia la forza istante per istante, possiamo calcolare l'effetto prodotto da una forza che agisce per un intervallo di tempo.</p>
<p>Definendo l'<strong>impulso</strong> della forza $\\vec{F}$:</p>
<p>$$\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}(t)\\,dt$$</p>
<p>Il teorema dell'impulso afferma che:</p>
<p>$$\\vec{J} = \\vec{p}(t_f) - \\vec{p}(t_i) = \\Delta\\vec{p}$$</p>`
                },
                {
                    subtitle: "Il Teorema del Momento dell'Impulso",
                    content: `<p>Analogamente, per le rotazioni: integrando la seconda equazione cardinale $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$ su un intervallo di tempo, si ottiene la <strong>relazione esatta</strong> (sempre valida):</p>
<p>$$\\int_{t_i}^{t_f} \\vec{M}_O(t')\\,dt' = \\Delta\\vec{L}_O$$</p>
<p>Il termine $\\int \\vec{M}_O\\,dt$ è detto <strong>momento dell'impulso</strong>. Questa relazione è esatta perché è semplicemente la forma integrale della seconda equazione cardinale.</p>
<p><strong>Approssimazione per fenomeni impulsivi:</strong> Nei fenomeni impulsivi (urti, colpi), l'intervallo di tempo è così breve che il vettore posizione $\\vec{r}$ può essere considerato approssimativamente costante. In tal caso si può portare $\\vec{r}$ fuori dall'integrale:</p>
<p>$$\\int_{t_i}^{t_f} \\vec{M}_O(t')\\,dt' = \\int_{t_i}^{t_f} (\\vec{r}(t') \\times \\vec{F}(t'))\\,dt' \\approx \\vec{r} \\times \\int_{t_i}^{t_f} \\vec{F}(t')\\,dt' = \\vec{r} \\times \\vec{J}$$</p>
<p>Ottenendo:</p>
<p>$$\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J} = \\vec{r} \\times \\Delta\\vec{p}$$</p>
<p>Questa seconda relazione è un'<strong>approssimazione</strong>, valida solo quando $\\vec{r}$ varia trascurabilmente durante il fenomeno.</p>`
                },
                {
                    subtitle: "Quando l'Approssimazione è Valida?",
                    content: `<p>Un corpo si trova a distanza $r = 0{,}5\\;\\text{m}$ dal polo e si muove a $v = 10\\;\\text{m/s}$. Un urto dura $\\Delta t = 1\\;\\text{ms}$.</p>
<p>Spostamento durante l'urto:</p>
<p>$$\\Delta s \\approx v \\cdot \\Delta t = 10 \\times 10^{-3} = 0{,}01\\;\\text{m}$$</p>
<p>Variazione relativa:</p>
<p>$$\\frac{\\Delta s}{r} = \\frac{0{,}01}{0{,}5} = 0{,}02 = 2\\%$$</p>
<p>Poiché $\\Delta s \\ll r$, l'approssimazione è pienamente giustificata.</p>
<p>Viceversa, se $r = 0{,}02\\;\\text{m}$, avremmo $\\Delta s / r = 50\\%$: l'approssimazione sarebbe <strong>inaccettabile</strong> e occorrerebbe usare la relazione esatta.</p>`
                },
                {
                    subtitle: "Esempio Pratico: il Bullone Ingrippato",
                    content: `<p>A che serve questo teorema? Serve quando vogliamo produrre una <strong>rotazione impulsiva</strong>.</p>
<p>Immaginate un bullone ingrippato. Cosa faccio? Prendo una <strong>chiave inglese</strong> (una leva, quindi un braccio $\\vec{r}$ grande) e un <strong>martello</strong>. Do una botta secca con il martello all'estremità della chiave.</p>
<p>L'interazione martello-chiave è un impulso $\\vec{J}$. Questo impulso, applicato a un grande braccio $\\vec{r}$, produce un grande momento dell'impulso $\\vec{r} \\times \\vec{J}$, che causa una variazione del momento angolare $\\Delta\\vec{L}_O$ e riesce a sbloccare il bullone.</p>
<p><strong>Per avere un effetto massimo, applica l'impulso il più lontano possibile dall'asse di rotazione</strong>, per massimizzare il braccio.</p>`
                }
            ],
            formulas: [
                { label: "Impulso", latex: "\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}(t)\\,dt = \\Delta\\vec{p}" },
                { label: "Momento dell'impulso (esatto)", latex: "\\int_{t_i}^{t_f} \\vec{M}_O\\,dt = \\Delta\\vec{L}_O" },
                { label: "Approssimazione impulsiva", latex: "\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J}" }
            ]
        },
        {
            id: "s17-lavoro-rotazioni",
            type: "section",
            title: "Lavoro ed Energia nelle Rotazioni",
            icon: "⚡",
            content: `<p>Anche per l'energia troviamo un'analogia tra moti traslatori e rotatori. Se un oggetto sta ruotando e voglio farlo girare più rapidamente, devo aumentare la sua energia cinetica — e per farlo, una forza deve compiere <strong>lavoro</strong> sul sistema.</p>`,
            subsections: [
                {
                    subtitle: "Derivazione per Moto Circolare",
                    content: `<p>Il lavoro elementare è $dL = \\vec{F} \\cdot d\\vec{s}$. Per un moto circolare di raggio $R$, lo spostamento $d\\vec{s}$ è sempre tangente alla traiettoria, quindi solo la componente tangenziale $F_t$ compie lavoro:</p>
<p>$$dL = F_t\\,ds$$</p>
<p>In moto circolare, lo spostamento infinitesimo è legato all'angolo: $ds = R\\,d\\theta$. Sostituendo:</p>
<p>$$dL = F_t\\,(R\\,d\\theta)$$</p>
<p>Riconosciamo che $R \\cdot F_t$ è il modulo del momento della forza rispetto al centro $O$:</p>
<p>$$M_O = |\\vec{r} \\times \\vec{F}| = R\\,F_t$$</p>`
                },
                {
                    subtitle: "Perché solo la Componente Tangenziale Conta",
                    content: `<p>Scomponiamo $\\vec{F} = \\vec{F}_r + \\vec{F}_t$ in componente radiale e tangenziale:</p>
<p>$$\\vec{r} \\times \\vec{F} = \\vec{r} \\times (\\vec{F}_r + \\vec{F}_t) = \\underbrace{\\vec{r} \\times \\vec{F}_r}_{= \\vec{0}} + \\vec{r} \\times \\vec{F}_t$$</p>
<p>Il termine $\\vec{r} \\times \\vec{F}_r = \\vec{0}$ perché $\\vec{F}_r$ è parallela a $\\vec{r}$. Poiché $\\vec{r}$ e $\\vec{F}_t$ sono perpendicolari:</p>
<p>$$|\\vec{r} \\times \\vec{F}| = |\\vec{r}|\\,|\\vec{F}_t|\\,\\sin 90° = R\\,F_t$$</p>
<p><strong>La componente radiale della forza non contribuisce al momento: solo la componente tangenziale genera un effetto rotatorio.</strong></p>`
                },
                {
                    subtitle: "Formula del Lavoro nelle Rotazioni",
                    content: `<p>Il lavoro per una rotazione da un angolo $\\theta_A$ a un angolo $\\theta_B$ è:</p>
<p>$$L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O\\,d\\theta$$</p>
<p>Questo è l'<strong>analogo rotazionale</strong> della formula del lavoro $L = \\int \\vec{F} \\cdot d\\vec{s}$.</p>
<p><strong>Nota sulla validità:</strong> questa derivazione è stata condotta per il caso specifico di un <strong>moto circolare di raggio $R$ costante</strong>. Per questo corso, la formula sarà applicata principalmente a corpi rigidi in rotazione attorno a un asse fisso, dove la geometria è analoga. Nel caso generale di traiettorie non circolari, occorre prestare attenzione alla geometria del problema e alla definizione del momento rispetto all'asse di rotazione.</p>`
                }
            ],
            formulas: [
                { label: "Lavoro nelle rotazioni", latex: "L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O\\,d\\theta" },
                { label: "Momento dal braccio e forza tangenziale", latex: "M_O = R\\,F_t" }
            ]
        },
        {
            id: "s17-tabella-analogie-completa",
            type: "section",
            title: "Tabella Riassuntiva delle Analogie",
            icon: "📊",
            content: `<p>Raccogliamo in una tabella finale <strong>tutte</strong> le analogie tra dinamica traslazionale e rotazionale:</p>`,
            table_compare: {
                headers: ["Moto Traslazionale", "Moto Rotazionale"],
                rows: [
                    ["Stato di moto: $\\vec{p}$", "Stato di moto: $\\vec{L}_O$"],
                    ["Causa della variazione: $\\vec{F}$", "Causa della variazione: $\\vec{M}_O$"],
                    ["$\\vec{F} = \\frac{d\\vec{p}}{dt}$", "$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$"],
                    ["Impulso: $\\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p}$", "Momento dell'impulso: $\\int \\vec{M}_O\\,dt = \\Delta\\vec{L}_O$"],
                    ["Lavoro: $L = \\int \\vec{F} \\cdot d\\vec{s}$", "Lavoro: $L = \\int M_O\\,d\\theta$"]
                ]
            },
            extra_content: `<p><strong>Tutto ciò che le forze producono nelle traslazioni, nelle rotazioni lo producono i momenti delle forze.</strong></p>`
        },
        {
            id: "s17-anticipazioni",
            type: "note_box",
            title: "Prossima Lezione: il Pendolo Semplice",
            icon: "🔮",
            content: `<p>Nella prossima lezione affronteremo il <strong>pendolo semplice</strong> — un problema classico risolto in tre modi diversi per consolidare tutti i concetti visti finora:</p>
<ol>
<li><strong>Con la dinamica generale:</strong> applicheremo $\\vec{F} = m\\vec{a}$ per trovare l'equazione del moto.</li>
<li><strong>Con l'energia:</strong> il pendolo si muove sotto forza conservativa (peso), quindi studieremo la variazione di rapidità usando il teorema dell'energia cinetica e la conservazione dell'energia meccanica.</li>
<li><strong>Con la dinamica rotazionale:</strong> dal punto di ancoraggio, vedremo il pendolo come un moto rotatorio e analizzeremo come il momento della forza peso causa una variazione del momento angolare.</li>
</ol>
<p>Questo mostrerà come i tre approcci (dinamico, energetico, rotazionale) siano <strong>equivalenti</strong> e forniscano una comprensione più profonda del problema.</p>
<p><em>Nota: questo materiale è prospettico e non è da studiare per questa lezione.</em></p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è il momento di un vettore rispetto a un polo? Perché è fondamentale specificare il polo?",
            back: "Il momento del vettore $\\vec{A}$ applicato in $P$ rispetto al polo $O$ è $\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}$, dove $\\vec{r} = \\vec{OP}$. Il polo è fondamentale perché il momento <strong>non è una proprietà intrinseca</strong> del vettore: cambiando polo, cambia il momento (Teorema del Trasporto). Omettere il polo è un errore concettuale grave."
        },
        {
            type: "definizione",
            front: "Definisci il momento angolare di un punto materiale. Da cosa dipende?",
            back: "Il momento angolare di un punto materiale rispetto a un polo fisso $O$ è $\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$. Il suo modulo è $|\\vec{L}_O| = p \\cdot h$, dove $h$ è il braccio (distanza del polo dalla retta di $\\vec{p}$). Dipende <strong>solo dalla componente trasversale</strong> della velocità: $\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$, poiché la componente radiale non contribuisce."
        },
        {
            type: "domanda",
            front: "Enuncia il Teorema del Momento Angolare e spiega le ipotesi sotto cui è valido.",
            back: "Il teorema afferma che $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$: la derivata temporale del momento angolare rispetto a un polo $O$ è uguale al momento totale delle forze rispetto allo stesso polo. È la <strong>seconda equazione cardinale della dinamica</strong>. Ipotesi: il polo $O$ deve essere <strong>fisso</strong> in un sistema inerziale. Vale anche se il polo coincide con il centro di massa (anche in moto), ma questo caso sarà trattato per i sistemi di punti."
        },
        {
            type: "dimostrazione",
            front: "Dimostra il Teorema del Momento Angolare partendo dalla derivata di $\\vec{L}_O$.",
            back: "Si calcola $\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = (\\frac{d\\vec{r}}{dt} \\times \\vec{p}) + (\\vec{r} \\times \\frac{d\\vec{p}}{dt})$. Il primo termine: $\\frac{d\\vec{r}}{dt} = \\vec{v}$ (polo fisso), e $\\vec{v} \\times m\\vec{v} = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$. Il secondo termine: $\\frac{d\\vec{p}}{dt} = \\vec{F}$ (II legge Newton), quindi $\\vec{r} \\times \\vec{F} = \\vec{M}_O$. Risultato: $\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O$."
        },
        {
            type: "domanda",
            front: "In quali casi si conserva il momento angolare? Fai esempi.",
            back: "Il momento angolare $\\vec{L}_O$ si conserva quando $\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\vec{0}$. Questo accade in due casi: (1) $\\vec{F} = \\vec{0}$, cioè forza risultante nulla (in questo caso si conserva anche $\\vec{p}$); (2) $\\vec{F}$ è parallela a $\\vec{r}$, cioè la forza è sempre diretta verso (o da) il polo — si tratta di una <strong>forza centrale</strong> (es. forza gravitazionale, forza elastica diretta verso il centro)."
        },
        {
            type: "formula",
            front: "Scrivi il Teorema del Trasporto dei Momenti e spiega cosa collega.",
            back: "Il teorema del trasporto collega i momenti dello stesso vettore rispetto a due poli diversi: $\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\vec{OO'} \\times \\vec{A}$. Permette di 'trasportare' il calcolo del momento da un polo a un altro senza ricalcolare tutto da zero. Si dimostra dalla regola di Chasles: $\\vec{r} = \\vec{OO'} + \\vec{r}'$."
        },
        {
            type: "tranello",
            front: "Qual è la differenza tra la relazione esatta del momento dell'impulso e l'approssimazione impulsiva?",
            back: "La relazione <strong>esatta</strong> (sempre valida) è $\\int_{t_i}^{t_f} \\vec{M}_O\\,dt = \\Delta\\vec{L}_O$. L'<strong>approssimazione</strong> $\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J}$ vale solo se $\\vec{r}$ è approssimativamente costante durante il fenomeno (cioè $\\Delta s \\ll r$). L'errore tipico all'esame è usare l'approssimazione quando il corpo è troppo vicino al polo o il fenomeno non è abbastanza breve."
        },
        {
            type: "formula",
            front: "Come si esprime il lavoro in funzione del momento della forza per un moto circolare?",
            back: "Per un moto circolare di raggio $R$ costante, il lavoro è $L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O\\,d\\theta$, dove $M_O = R\\,F_t$ è il modulo del momento della forza. Solo la <strong>componente tangenziale</strong> $F_t$ contribuisce: la componente radiale $F_r$ non compie lavoro perché è perpendicolare allo spostamento, e non produce momento perché è parallela a $\\vec{r}$."
        },
        {
            type: "domanda",
            front: "Perché il momento angolare dipende solo dalla componente trasversale della velocità e non da quella radiale?",
            back: "Scomponendo $\\vec{v} = \\vec{v}_r + \\vec{v}_t$, si ha $\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_r) + m(\\vec{r} \\times \\vec{v}_t)$. Il termine $\\vec{r} \\times \\vec{v}_r = \\vec{0}$ perché $\\vec{v}_r$ è parallelo a $\\vec{r}$ (il prodotto vettoriale di vettori paralleli è nullo). Resta solo $\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$. Fisicamente: un corpo che si avvicina o si allontana dal polo lungo la congiungente non 'ruota' attorno al polo — solo il moto trasversale contribuisce alla rotazione."
        },
        {
            type: "tranello",
            front: "Un corpo si muove in linea retta a velocità costante. Il suo momento angolare rispetto a un polo generico è nullo?",
            back: "<strong>No!</strong> Il momento angolare è $\\vec{L}_O = \\vec{r} \\times m\\vec{v}$, e il suo modulo è $|\\vec{L}_O| = m v h$, dove $h$ è la distanza perpendicolare del polo dalla retta del moto. Se il polo non si trova sulla retta del moto ($h \\neq 0$), il momento angolare è <strong>non nullo e costante</strong> (perché $\\vec{F} = \\vec{0}$ implica $\\vec{M}_O = \\vec{0}$, quindi $\\vec{L}_O$ si conserva). Nell'esempio della lezione: $m = 2\\;\\text{kg}$, $v = 3\\;\\text{m/s}$, $h = 3\\;\\text{m}$ danno $|\\vec{L}_O| = 18\\;\\text{kg·m}^2\\text{/s}$."
        }
    ]
};

