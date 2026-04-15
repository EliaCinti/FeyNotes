const LESSON = {
    id: "L17", date: "Lezione 17 — 15 Apr 2026",
    title: "Momento Angolare e Fenomeni Rotatori",
    abstract: "Costruzione del formalismo della dinamica rotazionale: dal momento di un vettore al momento angolare, passando per il teorema del momento angolare (seconda equazione cardinale), il teorema del momento dell'impulso e il lavoro nelle rotazioni. Analogia completa tra dinamica traslazionale e rotazionale.",

    sections: [
        {
            id: "s17-intro-rotazioni",
            type: "section",
            title: "Introduzione ai Fenomeni Rotatori",
            icon: "🔄",
            content: `<p>In questa lezione riprendiamo e approfondiamo i <strong>fenomeni rotatori</strong>. L'obiettivo è costruire un formalismo per descrivere la dinamica delle rotazioni, un problema fondamentale che si presenta in innumerevoli contesti fisici, dalla meccanica dei sistemi di punti ai corpi rigidi.</p>
<p>Un esempio emblematico è il funzionamento di un <strong>motore a combustione interna</strong>: il moto lineare alternato dei pistoni viene convertito nel moto rotatorio dell'albero motore, che a sua volta trasmette la rotazione alle ruote attraverso ingranaggi e assi. Quasi ogni componente di un veicolo, dal motore alle ruote, è coinvolto in un moto rotatorio.</p>`,
            subsections: [
                {
                    subtitle: "La Percezione della Rotazione e il Ruolo dell'Osservatore",
                    content: `<p>Un aspetto cruciale dei fenomeni rotatori è che la loro <em>percezione</em> dipende intrinsecamente dal punto di osservazione. Il punto da cui un osservatore descrive il moto è detto <strong>polo</strong>, indicato con $O$.</p>
<p>Consideriamo un semplice esempio. Un treno si muove a velocità costante su un binario rettilineo:</p>
<ul>
<li><strong>Osservatore sul binario</strong>: vede il treno allontanarsi o avvicinarsi lungo una linea retta. Non percepisce alcuna rotazione. Il moto è puramente traslatorio.</li>
<li><strong>Osservatore sulla banchina</strong>: mentre il treno passa, deve ruotare la testa per seguirlo con lo sguardo. Dal suo punto di vista, il treno sembra compiere una rotazione attorno a lui.</li>
</ul>
<p>Questo esempio dimostra che lo <strong>stesso moto fisico</strong> può essere percepito come puramente traslatorio o come una combinazione di traslazione e rotazione, <strong>a seconda della posizione dell'osservatore</strong> (il polo). La descrizione della dinamica rotazionale dovrà quindi tenere conto esplicitamente del polo scelto.</p>
<p>Il nostro compito sarà definire una grandezza fisica che catturi la componente rotatoria del moto e trovare l'equivalente della seconda legge di Newton per descriverne le variazioni.</p>`
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
                    content: `<p>Lo stato di moto generale di un corpo in dinamica è descritto dalla <strong>quantità di moto</strong>:</p>
<p>$$\\vec{p} = m\\vec{v}$$</p>
<p>La quantità di moto è la grandezza centrale della dinamica. La sua variazione nel tempo è legata alla causa del moto, ovvero la forza. La formulazione più generale della seconda legge di Newton è:</p>
<p>$$\\vec{F}_{\\text{ris}} = \\frac{d\\vec{p}}{dt}$$</p>
<p>Questa equazione rappresenta la <strong>sintesi della dinamica traslazionale</strong>: la causa ($\\vec{F}_{\\text{ris}}$) produce un effetto (la variazione dello stato di moto, $\\frac{d\\vec{p}}{dt}$). Questa legge è valida in sistemi di riferimento inerziali.</p>`
                },
                {
                    subtitle: "Energia e Lavoro",
                    content: `<p>Una sottocategoria di problemi della dinamica riguarda la capacità di un sistema di variare la <em>rapidità</em> (il modulo della velocità) del moto. Questa capacità è quantificata da una grandezza scalare: l'<strong>energia</strong>.</p>
<p>In meccanica, le forme principali sono:</p>
<ul>
<li><strong>Energia cinetica ($E_k$)</strong>: associata allo stato di moto di un corpo.</li>
<li><strong>Energia potenziale ($U$)</strong>: associata alla configurazione di un sistema in cui agiscono forze conservative.</li>
</ul>
<p>Il trasferimento di energia tra sistemi o la conversione da una forma all'altra avviene tramite il <strong>lavoro</strong>, compiuto dalle forze.</p>`
                },
                {
                    subtitle: "Teorema dell'Energia Cinetica (Forze Vive)",
                    content: `<p>Il lavoro totale $L_{\\text{tot}}$ compiuto dalla risultante delle forze su un punto materiale mentre si sposta da A a B è uguale alla variazione della sua energia cinetica:</p>
<p>$$L_{\\text{tot}}^{A \\to B} = \\Delta E_k = E_{k,B} - E_{k,A}$$</p>
<p>dove $E_k = \\frac{1}{2}mv^2$.</p>
<p><strong>Dimostrazione:</strong> Partiamo da $\\vec{F} = m\\vec{a}$. Il lavoro infinitesimo è:</p>
<p>$$dL = \\vec{F} \\cdot d\\vec{s} = m\\vec{a} \\cdot d\\vec{s}$$</p>
<p>Ricordando che $\\vec{a} = \\frac{d\\vec{v}}{dt}$ e $d\\vec{s} = \\vec{v}\\,dt$:</p>
<p>$$dL = m \\frac{d\\vec{v}}{dt} \\cdot \\vec{v}\\,dt = m\\vec{v} \\cdot d\\vec{v}$$</p>
<p>Utilizzando l'identità $d(\\vec{v} \\cdot \\vec{v}) = d(v^2) = 2\\vec{v} \\cdot d\\vec{v}$, quindi $\\vec{v} \\cdot d\\vec{v} = \\frac{1}{2}d(v^2)$:</p>
<p>$$dL = m \\cdot \\frac{1}{2}d(v^2) = d\\left(\\frac{1}{2}mv^2\\right) = dE_k$$</p>
<p>Integrando da A a B:</p>
<p>$$L_{\\text{tot}}^{A \\to B} = \\int_A^B dL = \\int_{E_{k,A}}^{E_{k,B}} dE_k = E_{k,B} - E_{k,A} = \\Delta E_k$$</p>`
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
            icon: "🔧",
            content: `<p>Per costruire il formalismo della dinamica rotazionale, abbiamo bisogno di uno strumento matematico che catturi l'idea di <strong>"effetto rotatorio"</strong>. Questo strumento è il <strong>momento di un vettore</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Momento di un Vettore",
                    content: `<p><strong>Attenzione:</strong> il momento di un vettore non è una proprietà intrinseca del vettore stesso, ma è sempre definito <strong>rispetto a un polo</strong>. Omettere il riferimento al polo è un errore concettuale grave.</p>
<p>Dato un vettore $\\vec{A}$ applicato in un punto $P$ e un punto di osservazione (polo) $O$, si definisce <strong>momento del vettore $\\vec{A}$ rispetto al polo $O$</strong>:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}$$</p>
<p>dove $\\vec{r} = \\overrightarrow{OP}$ è il vettore posizione che congiunge il polo $O$ con il punto di applicazione $P$ del vettore $\\vec{A}$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Momento di un vettore rispetto a un polo</strong></p>
  <p><em>Polo O, punto di applicazione P, vettore posizione r da O a P, vettore A applicato in P, angolo θ tra r e A, braccio h (distanza perpendicolare da O alla retta d'azione di A).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
                },
                {
                    subtitle: "Modulo del Momento e Braccio",
                    content: `<p>Il modulo del momento è dato da:</p>
<p>$$|\\vec{M}_O| = |\\vec{r}|\\,|\\vec{A}|\\,\\sin\\theta$$</p>
<p>dove $\\theta$ è l'angolo tra $\\vec{r}$ e $\\vec{A}$.</p>
<p>Definiamo il <strong>braccio</strong> $h$ come la distanza perpendicolare tra il polo $O$ e la retta d'azione del vettore $\\vec{A}$. Dalla geometria:</p>
<p>$$h = |\\vec{r}|\\sin\\theta$$</p>
<p>Quindi il modulo del momento si può scrivere nella forma compatta:</p>
<p>$$|\\vec{M}_O| = |\\vec{A}| \\cdot h$$</p>
<p>Il momento quantifica l'<strong>effetto di "leva"</strong> del vettore $\\vec{A}$ rispetto al polo $O$. A parità di intensità di $\\vec{A}$, l'effetto rotatorio è maggiore quanto più grande è il braccio.</p>`
                },
                {
                    subtitle: "Teorema del Trasporto dei Momenti",
                    content: `<p>Come cambia il momento di un vettore se cambiamo il polo di osservazione?</p>
<p>Dato un vettore $\\vec{A}$ e due poli $O$ e $O'$, i momenti sono legati dalla relazione:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\overrightarrow{OO'} \\times \\vec{A}$$</p>
<p><strong>Dimostrazione:</strong> Sia $P$ il punto di applicazione di $\\vec{A}$. Definiamo $\\vec{r} = \\overrightarrow{OP}$ e $\\vec{r}' = \\overrightarrow{O'P}$. Dalla regola di Chasles:</p>
<p>$$\\vec{r} = \\overrightarrow{OO'} + \\vec{r}'$$</p>
<p>Quindi:</p>
<p>$$\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A} = (\\overrightarrow{OO'} + \\vec{r}') \\times \\vec{A} = \\overrightarrow{OO'} \\times \\vec{A} + \\vec{r}' \\times \\vec{A}$$</p>
<p>Riconoscendo $\\vec{r}' \\times \\vec{A} = \\vec{M}_{O'}(\\vec{A})$, si ottiene la tesi.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Trasporto dei momenti tra due poli</strong></p>
  <p><em>Due poli O e O', punto P di applicazione di A, vettori r = OP, r' = O'P, e il vettore OO' che li collega. Vettore A uscente da P.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
                }
            ],
            formulas: [
                { label: "Momento di un vettore", latex: "\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}" },
                { label: "Modulo del momento (con braccio)", latex: "|\\vec{M}_O| = |\\vec{A}| \\cdot h" },
                { label: "Teorema del trasporto", latex: "\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\overrightarrow{OO'} \\times \\vec{A}" }
            ]
        },
        {
            id: "s17-momento-angolare",
            type: "section",
            title: "Momento Angolare",
            icon: "🌀",
            content: `<p>Applichiamo ora lo strumento del momento di un vettore al nostro problema fisico. Vogliamo una grandezza che descriva lo <strong>stato di moto rotatorio</strong>. Il moto è descritto dalla quantità di moto $\\vec{p}$. Sembra naturale definire la grandezza rotazionale come il <strong>momento della quantità di moto</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Momento Angolare",
                    content: `<p>Si definisce <strong>momento angolare</strong> $\\vec{L}$ di un punto materiale rispetto a un polo $O$ il momento della sua quantità di moto $\\vec{p}$ rispetto allo stesso polo:</p>
<p>$$\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$$</p>
<p>dove $\\vec{r}$ è il vettore posizione del punto materiale rispetto al polo $O$.</p>`
                },
                {
                    subtitle: "Proprietà del Momento Angolare",
                    content: `<p>Il momento angolare cattura tutte le proprietà che intuitivamente associamo alla percezione della rotazione:</p>
<p><strong>1. Dipendenza dal polo:</strong> Come tutti i momenti, $\\vec{L}_O$ dipende dalla scelta del polo $O$.</p>
<p><strong>2. Dipendenza dal braccio:</strong> Il suo modulo è $|\\vec{L}_O| = |\\vec{r}||\\vec{p}|\\sin\\theta = p \\cdot h$, dove $h$ è la distanza del polo dalla retta su cui giace $\\vec{p}$. A parità di quantità di moto, un braccio maggiore implica un momento angolare maggiore.</p>
<p><strong>3. Dipendenza dalla componente trasversale della velocità:</strong> La velocità $\\vec{v}$ può essere scomposta in una componente radiale $\\vec{v}_r$ (parallela a $\\vec{r}$) e una componente trasversale $\\vec{v}_t$ (perpendicolare a $\\vec{r}$):</p>
<p>$$\\vec{v} = \\vec{v}_r + \\vec{v}_t$$</p>
<p>Calcolando il momento angolare:</p>
<p>$$\\vec{L}_O = m(\\vec{r} \\times (\\vec{v}_r + \\vec{v}_t)) = m(\\vec{r} \\times \\vec{v}_r) + m(\\vec{r} \\times \\vec{v}_t)$$</p>
<p>Poiché $\\vec{r}$ e $\\vec{v}_r$ sono paralleli, $\\vec{r} \\times \\vec{v}_r = \\vec{0}$. Quindi:</p>
<p>$$\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$$</p>
<p>Il momento angolare dipende <strong>esclusivamente</strong> dalla componente della velocità trasversale alla congiungente polo-punto. Questo formalizza l'idea che la percezione della rotazione è legata al moto "di traverso" rispetto all'osservatore.</p>`
                }
            ],
            formulas: [
                { label: "Momento angolare", latex: "\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})" },
                { label: "Modulo del momento angolare", latex: "|\\vec{L}_O| = |\\vec{r}||\\vec{p}|\\sin\\theta = p \\cdot h" },
                { label: "Solo componente trasversale contribuisce", latex: "\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)" }
            ]
        },
        {
            id: "s17-teorema-momento-angolare",
            type: "section",
            title: "Teorema del Momento Angolare",
            icon: "⚖️",
            content: `<p>Deriviamo ora l'equazione che governa la dinamica del momento angolare: la <strong>seconda legge di Newton per le rotazioni</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Derivazione del Teorema",
                    content: `<p>Calcoliamo la derivata del momento angolare rispetto al tempo:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p})$$</p>
<p>Usando la regola di derivazione del prodotto vettoriale:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$</p>
<p><strong>Primo termine:</strong> $\\frac{d\\vec{r}}{dt} = \\vec{v}$ e $\\vec{p} = m\\vec{v}$, quindi:</p>
<p>$$\\frac{d\\vec{r}}{dt} \\times \\vec{p} = \\vec{v} \\times (m\\vec{v}) = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$$</p>
<p>Il prodotto vettoriale di un vettore con se stesso è <strong>sempre nullo</strong>.</p>
<p><strong>Nota importante:</strong> questo risultato è valido se il polo $O$ è fisso. Se il polo fosse in moto con velocità $\\vec{v}_O$, la derivata di $\\vec{r}$ sarebbe $\\vec{v} - \\vec{v}_O$. Il teorema vale per <strong>poli fissi</strong> o per il <strong>centro di massa</strong>.</p>
<p><strong>Secondo termine:</strong> Per la seconda legge di Newton, $\\frac{d\\vec{p}}{dt} = \\vec{F}$, quindi:</p>
<p>$$\\vec{r} \\times \\frac{d\\vec{p}}{dt} = \\vec{r} \\times \\vec{F} = \\vec{M}_O$$</p>
<p>Questa è esattamente la definizione del <strong>momento della forza</strong> rispetto al polo $O$.</p>`
                },
                {
                    subtitle: "Enunciato del Teorema",
                    content: `<p>Per un punto materiale, la derivata temporale del suo momento angolare $\\vec{L}_O$, calcolato rispetto a un polo fisso $O$, è uguale al momento totale $\\vec{M}_O$ delle forze applicate al punto, calcolato rispetto allo stesso polo:</p>
<p>$$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$$</p>
<p>Questa è anche nota come <strong>seconda equazione cardinale della dinamica</strong>.</p>`
                },
                {
                    subtitle: "Analogia Traslazione–Rotazione",
                    content: `<p>Esiste una profonda analogia tra dinamica traslazionale e rotazionale:</p>`
                }
            ],
            table_compare: {
                headers: ["Moto Traslazionale", "Moto Rotazionale"],
                rows: [
                    ["Quantità di moto: $\\vec{p}$", "Momento angolare: $\\vec{L}_O$"],
                    ["Causa della variazione: Forza $\\vec{F}$", "Causa della variazione: Momento della forza $\\vec{M}_O$"],
                    ["Legge: $\\vec{F} = \\frac{d\\vec{p}}{dt}$", "Legge: $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$"]
                ]
            },
            formulas: [
                { label: "Teorema del momento angolare", latex: "\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}" },
                { label: "Momento della forza", latex: "\\vec{M}_O = \\vec{r} \\times \\vec{F}" }
            ]
        },
        {
            id: "s17-conservazione-L",
            type: "alert_box",
            title: "Conservazione del Momento Angolare",
            icon: "🔒",
            content: `<p>Se il momento totale delle forze esterne rispetto a un polo $O$ è nullo ($\\vec{M}_O = \\vec{0}$), allora il momento angolare si <strong>conserva</strong>:</p>
<p>$$\\vec{M}_O = \\vec{0} \\;\\Rightarrow\\; \\frac{d\\vec{L}_O}{dt} = \\vec{0} \\;\\Rightarrow\\; \\vec{L}_O = \\text{costante}$$</p>
<p>La condizione $\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\vec{0}$ si verifica in due casi importanti:</p>
<ol>
<li><strong>La forza risultante è nulla</strong> ($\\vec{F} = \\vec{0}$): in questo caso si conserva anche la quantità di moto.</li>
<li><strong>La forza è parallela a $\\vec{r}$</strong>: una forza sempre diretta verso (o da) un punto fisso (il polo) è detta <strong>forza centrale</strong>. In questo caso $\\vec{r} \\times \\vec{F} = \\vec{0}$ anche se $\\vec{F} \\neq \\vec{0}$.</li>
</ol>
<p><strong>Attenzione all'esame:</strong> non confondere la conservazione di $\\vec{L}$ con la conservazione di $\\vec{p}$. Il momento angolare può conservarsi anche quando la quantità di moto non si conserva (caso delle forze centrali)!</p>`
        },
        {
            id: "s17-teorema-impulso",
            type: "section",
            title: "Riepilogo: Il Teorema dell'Impulso",
            icon: "💥",
            content: `<p>Quando conosciamo la forza $\\vec{F}$ istante per istante, possiamo calcolare l'effetto prodotto su un corpo in un intervallo di tempo tramite il <strong>teorema dell'impulso</strong>.</p>
<p>Definendo l'impulso della forza come:</p>
<p>$$\\vec{J} = \\int_{t_A}^{t_B} \\vec{F}(t) \\, dt$$</p>
<p>il teorema afferma che:</p>
<p>$$\\vec{J} = \\vec{p}(t_B) - \\vec{p}(t_A) = \\Delta\\vec{p}$$</p>
<p>L'impulso della forza è uguale alla variazione della quantità di moto del corpo.</p>`,
            formulas: [
                { label: "Impulso della forza", latex: "\\vec{J} = \\int_{t_A}^{t_B} \\vec{F}(t) \\, dt" },
                { label: "Teorema dell'impulso", latex: "\\vec{J} = \\Delta\\vec{p}" }
            ]
        },
        {
            id: "s17-momento-impulso",
            type: "section",
            title: "Il Teorema del Momento dell'Impulso",
            icon: "🔨",
            content: `<p>Dalla seconda equazione cardinale $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$, possiamo costruire l'analogo rotazionale del teorema dell'impulso. Se conosciamo istante per istante come varia il momento delle forze $\\vec{M}_O(t)$, possiamo integrare nel tempo:</p>
<p>$$\\int_0^t \\vec{M}_O(t') \\, dt' = \\int_0^t \\left( \\vec{r}(t') \\times \\vec{F}(t') \\right) dt'$$</p>`,
            subsections: [
                {
                    subtitle: "Approssimazione per Fenomeni Impulsivi",
                    content: `<p>Facciamo un'ipotesi fondamentale: per fenomeni molto brevi (urti, impulsi), il vettore posizione $\\vec{r}$ non cambia apprezzabilmente durante l'interazione.</p>
<p>Il professore ha usato un esempio efficace: <em>"Se osservo una mosca a 25 metri di distanza per 3 millisecondi, la sua posizione relativa a me non cambia di tanto."</em></p>
<p>Sotto questa ipotesi ($\\vec{r}(t) \\approx \\text{costante}$), possiamo portare $\\vec{r}$ fuori dall'integrale:</p>
<p>$$\\int_0^t \\vec{M}_O(t') \\, dt' \\approx \\vec{r} \\times \\left( \\int_0^t \\vec{F}(t') \\, dt' \\right) = \\vec{r} \\times \\vec{J}$$</p>
<p>Integrando anche l'altro membro:</p>
<p>$$\\int_0^t \\frac{d\\vec{L}_O}{dt'} \\, dt' = \\vec{L}_O(t) - \\vec{L}_O(0) = \\Delta\\vec{L}_O$$</p>`
                },
                {
                    subtitle: "Enunciato del Teorema",
                    content: `<p>In un fenomeno impulsivo, la variazione del momento angolare è uguale al <strong>momento dell'impulso</strong>:</p>
<p>$$\\int_0^t \\vec{M}_O(t') \\, dt' = \\Delta\\vec{L}_O$$</p>
<p>E poiché $\\vec{J} = \\Delta\\vec{p}$:</p>
<p>$$\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J} = \\vec{r} \\times \\Delta\\vec{p}$$</p>`
                },
                {
                    subtitle: "Esempio: Il Bullone Ingrippato",
                    content: `<p>Immaginate un bullone bloccato. Cosa fare? Prendete una <strong>chiave inglese</strong> (una leva, quindi un braccio $\\vec{r}$ grande) e un <strong>martello</strong>. Date una botta secca all'estremità della chiave.</p>
<p>L'interazione martello-chiave è un impulso $\\vec{J}$. Questo impulso, applicato a un grande braccio $\\vec{r}$, produce un grande momento dell'impulso $\\vec{r} \\times \\vec{J}$, che causa una variazione del momento angolare $\\Delta\\vec{L}_O$ sufficiente a sbloccare il bullone.</p>
<p><strong>Regola pratica:</strong> per massimizzare l'effetto rotatorio, applicate l'impulso il più lontano possibile dall'asse di rotazione!</p>`
                }
            ],
            formulas: [
                { label: "Momento dell'impulso", latex: "\\int_0^t \\vec{M}_O(t') \\, dt' = \\Delta\\vec{L}_O" },
                { label: "Approssimazione impulsiva", latex: "\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J}" }
            ]
        },
        {
            id: "s17-lavoro-rotazioni",
            type: "section",
            title: "Lavoro ed Energia nelle Rotazioni",
            icon: "⚡",
            content: `<p>Anche per l'energia possiamo trovare un'analogia tra moti traslatori e rotatori. Se un oggetto sta ruotando e vogliamo farlo girare più rapidamente, dobbiamo aumentare la sua energia cinetica. Per farlo, una forza deve compiere <strong>lavoro</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Lavoro nel Moto Circolare",
                    content: `<p>Il lavoro elementare è $dL = \\vec{F} \\cdot d\\vec{s}$. Nel caso di un moto circolare di raggio $R$, lo spostamento infinitesimo $d\\vec{s}$ è sempre tangente alla traiettoria. Solo la componente tangenziale della forza $F_t$ compie lavoro:</p>
<p>$$dL = F_t \\, ds$$</p>
<p>In un moto circolare, $ds = R \\, d\\theta$. Sostituendo:</p>
<p>$$dL = F_t \\cdot R \\, d\\theta$$</p>
<p>Riconosciamo che $R \\cdot F_t$ è il modulo del momento della forza rispetto al centro:</p>
<p>$$M_O = |\\vec{r} \\times \\vec{F}| = R F_t$$</p>
<p>Quindi il lavoro per una rotazione da $\\theta_A$ a $\\theta_B$ è:</p>
<p>$$L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O \\, d\\theta$$</p>
<p>Questo è l'<strong>analogo rotazionale</strong> della formula del lavoro.</p>`
                },
                {
                    subtitle: "Riepilogo delle Analogie Traslazione–Rotazione",
                    content: `<p>Il professore ha sottolineato: <em>"Tutto ciò che in generale producono le forze nelle traslazioni, nelle rotazioni lo producono i momenti delle forze."</em></p>
<ul>
<li><strong>Causa del moto</strong>: forza $\\vec{F}$ ↔ momento della forza $\\vec{M}$</li>
<li><strong>Lavoro traslazionale</strong>: $L = \\int \\vec{F} \\cdot d\\vec{s}$ ↔ <strong>Lavoro rotazionale</strong>: $L = \\int M_O \\, d\\theta$</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Lavoro rotazionale", latex: "L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O \\, d\\theta" },
                { label: "Momento della forza (moto circolare)", latex: "M_O = R \\cdot F_t" }
            ]
        },
        {
            id: "s17-anticipazioni-pendolo",
            type: "note_box",
            title: "Anticipazioni: Il Pendolo Semplice",
            icon: "🔮",
            content: `<p>Nella prossima lezione studieremo il <strong>pendolo semplice</strong> con tre approcci diversi:</p>
<ol>
<li><strong>Dinamica generale</strong>: applicando $\\vec{F} = m\\vec{a}$ per trovare l'equazione del moto.</li>
<li><strong>Energia</strong>: usando la conservazione dell'energia meccanica (forza peso è conservativa) per studiare come varia la rapidità.</li>
<li><strong>Dinamica rotazionale</strong>: ponendosi nel punto di ancoraggio e analizzando come il momento della forza peso causa variazioni del momento angolare.</li>
</ol>
<p>I tre approcci sono <strong>equivalenti</strong> e forniscono una comprensione più profonda del problema.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è il momento di un vettore rispetto a un polo?",
            back: "Dato un vettore $\\vec{A}$ applicato in un punto $P$ e un polo $O$, il momento del vettore rispetto al polo è $\\vec{M}_O(\\vec{A}) = \\vec{r} \\times \\vec{A}$, dove $\\vec{r} = \\overrightarrow{OP}$. Il suo modulo è $|\\vec{M}_O| = |\\vec{A}| \\cdot h$, dove $h$ è il braccio (distanza perpendicolare dal polo alla retta d'azione del vettore). Il momento dipende sempre dal polo scelto."
        },
        {
            type: "definizione",
            front: "Che cos'è il momento angolare di un punto materiale?",
            back: "Il momento angolare $\\vec{L}_O$ di un punto materiale rispetto a un polo $O$ è il momento della sua quantità di moto: $\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$. Dipende solo dalla componente trasversale della velocità: $\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$, poiché la componente radiale non contribuisce ($\\vec{r} \\times \\vec{v}_r = \\vec{0}$)."
        },
        {
            type: "dimostrazione",
            front: "Dimostra il teorema del momento angolare (seconda equazione cardinale della dinamica).",
            back: "Si parte da $\\vec{L}_O = \\vec{r} \\times \\vec{p}$ e si deriva: $\\frac{d\\vec{L}_O}{dt} = \\frac{d\\vec{r}}{dt} \\times \\vec{p} + \\vec{r} \\times \\frac{d\\vec{p}}{dt}$. Il primo termine è $\\vec{v} \\times m\\vec{v} = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$ (prodotto vettoriale di un vettore con sé stesso). Il secondo, per la II legge di Newton, è $\\vec{r} \\times \\vec{F} = \\vec{M}_O$. Risultato: $\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$. Vale per polo fisso $O$."
        },
        {
            type: "domanda",
            front: "Quando si conserva il momento angolare? In quali casi il momento delle forze è nullo?",
            back: "Il momento angolare si conserva quando $\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\vec{0}$. Ciò accade in due casi: (1) la forza risultante è nulla ($\\vec{F} = \\vec{0}$), e allora si conserva anche $\\vec{p}$; (2) la forza è parallela a $\\vec{r}$ (forza centrale), cioè diretta verso/da un punto fisso. In questo caso $\\vec{L}$ si conserva anche se $\\vec{F} \\neq \\vec{0}$ e $\\vec{p}$ può non conservarsi."
        },
        {
            type: "tranello",
            front: "Il momento angolare è una proprietà intrinseca del corpo in moto?",
            back: "No! Il momento angolare dipende sempre dalla scelta del polo $O$. Cambiando polo, cambia il momento angolare. Omettere il riferimento al polo è un errore concettuale grave. Lo stesso moto fisico può avere momento angolare nullo rispetto a un polo e non nullo rispetto a un altro. Lo stesso vale per il momento di un vettore e per il momento di una forza."
        },
        {
            type: "dimostrazione",
            front: "Enuncia e dimostra il teorema del trasporto dei momenti.",
            back: "Se si cambia polo da $O$ a $O'$, i momenti sono legati da: $\\vec{M}_O(\\vec{A}) = \\vec{M}_{O'}(\\vec{A}) + \\overrightarrow{OO'} \\times \\vec{A}$. Dim.: con $\\vec{r} = \\overrightarrow{OP}$ e $\\vec{r}' = \\overrightarrow{O'P}$, dalla relazione $\\vec{r} = \\overrightarrow{OO'} + \\vec{r}'$, si ha $\\vec{M}_O = \\vec{r} \\times \\vec{A} = (\\overrightarrow{OO'} + \\vec{r}') \\times \\vec{A} = \\overrightarrow{OO'} \\times \\vec{A} + \\vec{M}_{O'}$."
        },
        {
            type: "formula",
            front: "Scrivi la formula del lavoro rotazionale e spiega l'analogia con il lavoro traslazionale.",
            back: "Il lavoro rotazionale è $L_{AB} = \\int_{\\theta_A}^{\\theta_B} M_O \\, d\\theta$, dove $M_O$ è il momento della forza rispetto al centro di rotazione. È l'analogo di $L_{AB} = \\int_A^B \\vec{F} \\cdot d\\vec{s}$. Nel moto circolare di raggio $R$: $ds = R\\,d\\theta$ e $M_O = R \\cdot F_t$, da cui $dL = F_t \\, ds = (M_O / R)(R\\,d\\theta) = M_O \\, d\\theta$."
        },
        {
            type: "domanda",
            front: "Che cos'è il teorema del momento dell'impulso e quando si applica?",
            back: "Per fenomeni impulsivi (molto brevi), il braccio $\\vec{r}$ resta circa costante. Integrando la seconda equazione cardinale: $\\int_0^t \\vec{M}_O \\, dt' = \\Delta\\vec{L}_O$. Il termine integrale è detto momento dell'impulso. Si può scrivere $\\Delta\\vec{L}_O \\approx \\vec{r} \\times \\vec{J}$, dove $\\vec{J} = \\Delta\\vec{p}$ è l'impulso. Esempio: colpire con un martello l'estremità di una chiave inglese per sbloccare un bullone."
        },
        {
            type: "domanda",
            front: "Perché solo la componente trasversale della velocità contribuisce al momento angolare?",
            back: "Scomponendo $\\vec{v} = \\vec{v}_r + \\vec{v}_t$, il termine $\\vec{r} \\times \\vec{v}_r = \\vec{0}$ perché $\\vec{v}_r$ è parallelo a $\\vec{r}$ (prodotto vettoriale di vettori paralleli è nullo). Resta $\\vec{L}_O = m(\\vec{r} \\times \\vec{v}_t)$. Fisicamente: un moto puramente radiale (avvicinamento/allontanamento dal polo) non genera alcuna percezione di rotazione; solo il moto 'di traverso' contribuisce."
        },
        {
            type: "tranello",
            front: "Il teorema del momento angolare vale per qualsiasi polo O, anche in moto?",
            back: "No! Nella derivazione, il termine $\\frac{d\\vec{r}}{dt} \\times \\vec{p}$ si annulla solo se il polo è fisso (perché $\\frac{d\\vec{r}}{dt} = \\vec{v}$ e $\\vec{v} \\times m\\vec{v} = \\vec{0}$). Se il polo è in moto con velocità $\\vec{v}_O$, la derivata di $\\vec{r}$ diventa $\\vec{v} - \\vec{v}_O$ e il termine non si annulla in generale. Il teorema vale per poli fissi e, come caso speciale, per il centro di massa."
        }
    ]
};

