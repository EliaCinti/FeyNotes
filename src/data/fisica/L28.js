const LESSON = {
    id: "L28", date: "Lezione 23 — 29 Apr 2026",
    title: "Conservazione della Quantità di Moto e Momento Angolare",
    abstract: "Applicazioni della conservazione della quantità di moto (uomo su barca, proiettile che esplode), introduzione del momento angolare e della seconda equazione cardinale, conservazione del momento angolare con esempio del sistema rotante, e problema del blocco su cuneo mobile con doppia conservazione.",

    sections: [
        {
            id: "s28-uomo-barca",
            type: "section",
            title: "Uomo su una Barca",
            icon: "🚣",
            content: `<p>Applichiamo i principi di conservazione della quantità di moto e del centro di massa a un problema classico.</p>
<p>Una barca di massa $M$ e lunghezza $L$ è ferma in acque tranquille. Su un'estremità si trova una persona di massa $m$. Il sistema è inizialmente fermo. La persona cammina da un'estremità all'altra della barca. <strong>Quanto si sposta la barca?</strong> (Attrito con l'acqua trascurabile.)</p>`,
            subsections: [
                {
                    subtitle: "Perché il centro di massa non si muove",
                    content: `<p>Dato che l'attrito con l'acqua è trascurabile, non ci sono forze esterne orizzontali sul sistema. La risultante delle forze esterne lungo $x$ è nulla:</p>
<p>$$\\sum \\vec{F}_{\\text{ext}, x} = \\vec{0}$$</p>
<p>Per la prima equazione cardinale, $\\sum \\vec{F}_{\\text{ext}} = M_{\\text{tot}} \\vec{a}_{CM}$. Quindi lungo $x$:</p>
<p>$$M_{\\text{tot}} \\, a_{CM,x} = 0 \\Rightarrow a_{CM,x} = 0$$</p>
<p>Il sistema parte da fermo, quindi $v_{CM,x} = 0$ per tutto il moto. Integrando: la <strong>posizione del centro di massa resta costante</strong>:</p>
<p>$$x_{CM,\\text{in}} = x_{CM,\\text{fin}}$$</p>`
                },
                {
                    subtitle: "Centro di massa di un corpo omogeneo (la barca)",
                    content: `<p>Per un corpo esteso omogeneo come la barca (assimilabile a un'asta), il centro di massa si trova nel punto medio. Introducendo la densità lineare $\\lambda = M/L$, un elemento $dx$ ha massa $dM = \\lambda\\,dx$:</p>
<p>$$x_{CM,\\text{barca}} = \\frac{1}{M} \\int_0^L x\\,\\lambda\\,dx = \\frac{1}{L}\\frac{L^2}{2} = \\frac{L}{2}$$</p>
<p>Possiamo quindi trattare la barca come una massa puntiforme $M$ localizzata in $L/2$.</p>`
                },
                {
                    subtitle: "Calcolo dello spostamento della barca",
                    content: `<p>Fissiamo un sistema di riferimento con l'origine $x=0$ all'estremità sinistra della barca nella posizione iniziale. La persona si trova all'estremità destra, in $x = L$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Uomo su barca: stato iniziale e finale</strong></p>
  <p><em>Stato iniziale: origine x=0 all'estremità sinistra della barca, barca da 0 a L, CM barca in L/2, persona (massa m) in x=L. Stato finale: barca spostata di x_A verso destra, persona all'estremità sinistra della barca in posizione assoluta x_A, CM barca in x_A + L/2. Asse x orizzontale con frecce che indicano gli spostamenti.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p><strong>Posizione iniziale del CM:</strong> persona in $x_p = L$, centro barca in $x_b = L/2$:</p>
<p>$$x_{CM,\\text{in}} = \\frac{m \\cdot L + M \\cdot \\frac{L}{2}}{m + M}$$</p>
<p><strong>Posizione finale del CM:</strong> la barca si sposta di $x_A$ verso destra. La persona è all'estremità sinistra della barca, in posizione assoluta $x_A$. Il centro della barca è in $x_A + L/2$:</p>
<p>$$x_{CM,\\text{fin}} = \\frac{m \\cdot x_A + M \\cdot (x_A + L/2)}{m + M}$$</p>
<p><strong>Uguagliando</strong> $x_{CM,\\text{in}} = x_{CM,\\text{fin}}$:</p>
<p>$$mL + M\\frac{L}{2} = m\\,x_A + M\\,x_A + M\\frac{L}{2}$$</p>
<p>$$mL = (m + M)\\,x_A$$</p>
<p>$$x_A = \\frac{mL{m + M}}$$</p>`
                },
                {
                    subtitle: "Tempo di attraversamento",
                    content: `<p>Secondo quesito: la persona si muove verso sinistra con velocità costante $v_0$ rispetto a un osservatore esterno. Quanto tempo $t_0$ impiega?</p>
<p>La quantità di moto totale si conserva e resta nulla:</p>
<p>$$m(-v_0) + M\\,v_b = 0 \\Rightarrow v_b = \\frac{m}{M}v_0$$</p>
<p>La barca si muove verso destra. La velocità relativa persona-barca è:</p>
<p>$$v_{\\text{rel}} = v_p - v_b = -v_0 - \\frac{m}{M}v_0 = -v_0\\left(1 + \\frac{m}{M}\\right)$$</p>
<p>Il tempo per percorrere la lunghezza $L$ della barca:</p>
<p>$$t_0 = \\frac{L}{|v_{\\text{rel}}|} = \\frac{L}{v_0\\left(1 + \\frac{m}{M}\\right)} = \\frac{LM}{v_0(M + m)}$$</p>
<p>Il tempo è <strong>minore</strong> di $L/v_0$: mentre la persona cammina verso sinistra, la barca le viene incontro spostandosi verso destra, riducendo la distanza relativa da percorrere.</p>`
                }
            ],
            formulas: [
                { label: "Spostamento barca", latex: "x_A = \\frac{mL}{m + M}" },
                { label: "Tempo di attraversamento", latex: "t_0 = \\frac{LM}{v_0(M + m)}" }
            ]
        },
        {
            id: "s28-proiettile-esplode",
            type: "section",
            title: "Proiettile che Esplode",
            icon: "💥",
            content: `<p>Un proiettile di massa $M$ viene lanciato dall'origine con velocità $v_0$ e angolo di alzo $\\alpha$. Nel punto più alto, esplode in due frammenti: $m_1 = \\frac{3}{4}M$ e $m_2 = \\frac{1}{4}M$. I due frammenti atterrano <strong>simultaneamente</strong>. Il frammento $m_2$ atterra a distanza $x_2$ dall'origine. Dove atterra $m_1$?</p>`,
            subsections: [
                {
                    subtitle: "Perché il CM segue la traiettoria originale",
                    content: `<p>L'esplosione è causata da <strong>forze interne</strong> al sistema. Le forze interne non alterano il moto del centro di massa. Pertanto, il CM dei due frammenti continua a seguire la traiettoria parabolica che il proiettile avrebbe seguito se non fosse esploso.</p>
<p>La condizione di <strong>atterraggio simultaneo è cruciale</strong>: ci permette di scrivere la posizione del centro di massa in un unico istante temporale in cui entrambi i frammenti sono a terra. Se atterrassero in momenti diversi, non potremmo applicare direttamente la formula del CM a quell'istante.</p>`
                },
                {
                    subtitle: "Calcolo della gittata",
                    content: `<p>Il tempo di volo si ottiene da $y(t_{\\text{volo}}) = 0$:</p>
<p>$$t_{\\text{volo}} = \\frac{2v_0 \\sin\\alpha}{g}$$</p>
<p>La gittata (posizione finale del CM):</p>
<p>$$R = v_0 \\cos\\alpha \\cdot t_{\\text{volo}} = \\frac{v_0^2 \\sin(2\\alpha)}{g}$$</p>`
                },
                {
                    subtitle: "Risoluzione",
                    content: `<p>Poiché i frammenti atterrano simultaneamente, la posizione del CM al momento dell'atterraggio è:</p>
<p>$$R = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{\\frac{3}{4}M \\cdot x_1 + \\frac{1}{4}M \\cdot x_2}{M}$$</p>
<p>$$R = \\frac{3}{4}x_1 + \\frac{1}{4}x_2$$</p>
<p>Da cui:</p>
<p>$$x_1 = \\frac{4R - x_2}{3} = \\frac{4\\frac{v_0^2 \\sin(2\\alpha)}{g} - x_2}{3}$$</p>`
                }
            ],
            formulas: [
                { label: "Gittata parabolica", latex: "R = \\frac{v_0^2 \\sin(2\\alpha)}{g}" },
                { label: "Posizione frammento 1", latex: "x_1 = \\frac{4R - x_2}{3}" }
            ]
        },
        {
            id: "s28-momento-angolare",
            type: "section",
            title: "Il Momento Angolare e la Seconda Equazione Cardinale",
            icon: "🔄",
            content: `<p>Introduciamo il concetto analogo alla quantità di moto per le rotazioni: il <strong>momento angolare</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Momento Angolare",
                    content: `<p>Dato un punto materiale di massa $m$ e velocità $\\vec{v}$, situato in posizione $\\vec{r}$ rispetto a un polo fisso $O$, si definisce <strong>momento angolare</strong> $\\vec{L}_O$ rispetto al polo $O$:</p>
<p>$$\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$$</p>
<p>dove $\\vec{p} = m\\vec{v}$ è la quantità di moto del punto.</p>`
                },
                {
                    subtitle: "Equazione del Momento Angolare per un Punto",
                    content: `<p>La derivata temporale del momento angolare, calcolata rispetto a un polo fisso $O$, è uguale al momento delle forze:</p>
<p>$$\\vec{M}_O = \\frac{d\\vec{L}_O}{dt}$$</p>
<p><strong>Dimostrazione:</strong> Deriviamo usando la regola del prodotto vettoriale:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$</p>
<p>Il primo termine è $\\vec{v} \\times (m\\vec{v}) = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$ (prodotto vettoriale di un vettore per sé stesso).</p>
<p>Il secondo termine è $\\vec{r} \\times \\vec{F}_{\\text{tot}} = \\vec{M}_O$ per definizione.</p>
<p>Quindi: $\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O$ $\\quad \\square$</p>`
                },
                {
                    subtitle: "Seconda Equazione Cardinale (sistema di punti)",
                    content: `<p>Per un sistema di $N$ punti materiali, il momento angolare totale è:</p>
<p>$$\\vec{L}_O = \\sum_{i=1}^N \\vec{L}_{O,i} = \\sum_{i=1}^N (\\vec{r}_i \\times \\vec{p}_i)$$</p>
<p>La <strong>seconda equazione cardinale della dinamica</strong> afferma:</p>
<p>$$\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt}$$</p>
<p>dove $\\vec{M}_O^{(e)}$ è il momento risultante delle <strong>sole forze esterne</strong>.</p>`
                },
                {
                    subtitle: "Dimostrazione: le forze interne non contribuiscono",
                    content: `<p>Deriviamo il momento angolare totale:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\sum_{i=1}^N (\\vec{r}_i \\times \\vec{F}_i^{(e)}) + \\sum_{i=1}^N \\sum_{j \\neq i} (\\vec{r}_i \\times \\vec{F}_{ij})$$</p>
<p>Il primo termine è il momento delle forze esterne $\\vec{M}_O^{(e)}$. Analizziamo il secondo raggruppando a coppie di azione-reazione:</p>
<p>$$\\sum_{i \\lt j} (\\vec{r}_i \\times \\vec{F}_{ij} + \\vec{r}_j \\times \\vec{F}_{ji})$$</p>
<p>Per il terzo principio, $\\vec{F}_{ji} = -\\vec{F}_{ij}$:</p>
<p>$$\\sum_{i \\lt j} (\\vec{r}_i - \\vec{r}_j) \\times \\vec{F}_{ij}$$</p>
<p>Se le forze interne soddisfano il <strong>principio di azione e reazione in forma forte</strong> (giacciono lungo la retta congiungente), allora $\\vec{F}_{ij}$ è parallelo a $(\\vec{r}_i - \\vec{r}_j)$. Il prodotto vettoriale tra vettori paralleli è nullo. $\\quad \\square$</p>`
                },
                {
                    subtitle: "Conservazione del Momento Angolare",
                    content: `<p>Se il momento totale delle forze esterne è nullo rispetto a un polo $O$:</p>
<p>$$\\vec{M}_O^{(e)} = \\vec{0} \\Rightarrow \\frac{d\\vec{L}_O}{dt} = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{costante}$$</p>`
                }
            ],
            formulas: [
                { label: "Momento angolare", latex: "\\vec{L}_O = \\vec{r} \\times (m\\vec{v})" },
                { label: "Seconda eq. cardinale", latex: "\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O^{(e)}" },
                { label: "Conservazione", latex: "\\vec{M}_O^{(e)} = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{cost.}" }
            ]
        },
        {
            id: "s28-scelta-polo",
            type: "note_box",
            title: "Scelta del Polo di Riferimento",
            icon: "📌",
            content: `<p>La seconda equazione cardinale $\\vec{M}_O^{(e)} = \\frac{d\\vec{L}_O}{dt}$ nella forma semplice è valida se il polo $O$ è:</p>
<ol>
<li><strong>Un punto fisso</strong> in un sistema di riferimento inerziale.</li>
<li><strong>Il centro di massa</strong> del sistema, anche se in moto accelerato.</li>
</ol>
<p>In generale, per un polo $O$ in moto con velocità $\\vec{v}_O$, la formula diventa:</p>
<p>$$\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O^{(e)} - \\vec{v}_O \\times \\vec{P}_{\\text{tot}}$$</p>
<p>Questa formula generale si ottiene derivando il momento angolare rispetto a un polo mobile e applicando la regola della catena; il termine correttivo $-\\vec{v}_O \\times \\vec{P}_{\\text{tot}}$ nasce dal moto del polo stesso.</p>
<p>Il termine correttivo si annulla quando:</p>
<ul>
<li>$\\vec{v}_O = \\vec{0}$ (polo fisso)</li>
<li>$O \\equiv CM$ — in quel caso $\\vec{v}_O = \\vec{v}_{CM}$ e $\\vec{P}_{\\text{tot}} = M_{\\text{tot}}\\vec{v}_{CM}$, il prodotto vettoriale $\\vec{v}_{CM} \\times (M_{\\text{tot}}\\vec{v}_{CM}) = \\vec{0}$ perché i vettori sono paralleli</li>
<li>$\\vec{v}_O$ è parallela a $\\vec{P}_{\\text{tot}}$</li>
</ul>`
        },
        {
            id: "s28-coppia-forze",
            type: "section",
            title: "Coppia di Forze",
            icon: "⚙️",
            content: `<p>Una <strong>coppia di forze</strong> è un sistema di due forze $\\vec{F}_1$ e $\\vec{F}_2$ tali che:</p>
<ul>
<li>Stesso modulo: $|\\vec{F}_1| = |\\vec{F}_2| = F$</li>
<li>Direzioni parallele e versi opposti: $\\vec{F}_1 = -\\vec{F}_2$</li>
<li>Rette d'azione distinte</li>
</ul>
<p>La risultante è sempre nulla, ma il <strong>momento non lo è</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Il momento di una coppia è indipendente dal polo",
                    content: `<p>Siano $\\vec{r}_1$ e $\\vec{r}_2$ i punti di applicazione di $\\vec{F}$ e $-\\vec{F}$ rispettivamente. Il momento rispetto a un polo $O$:</p>
<p>$$\\vec{M}_O = (\\vec{r}_1 \\times \\vec{F}) + (\\vec{r}_2 \\times (-\\vec{F})) = (\\vec{r}_1 - \\vec{r}_2) \\times \\vec{F}$$</p>
<p>Il vettore $(\\vec{r}_1 - \\vec{r}_2)$ <strong>non dipende dalla posizione del polo $O$</strong>, quindi anche il momento è indipendente da $O$.</p>
<p>Il modulo è:</p>
<p>$$|\\vec{M}| = F \\cdot b$$</p>
<p>dove $b$ è la distanza perpendicolare tra le rette d'azione (<em>braccio</em> della coppia).</p>`
                }
            ],
            formulas: [
                { label: "Momento di una coppia", latex: "|\\vec{M}| = F \\cdot b" }
            ]
        },
        {
            id: "s28-correzione",
            type: "alert_box",
            title: "Correzione dalla Lezione Precedente",
            icon: "⚠️",
            content: `<p><strong>Precisazione importante:</strong> nella lezione precedente è stato detto che "se le forze esterne sono nulle, l'accelerazione del centro di massa è costante". Questa formulazione è imprecisa.</p>
<p>La dicitura corretta è: se la <strong>risultante delle forze esterne è nulla</strong>, l'accelerazione del centro di massa è <strong>pari a zero</strong> (non semplicemente "costante"). Ciò implica che la velocità del CM è costante e la quantità di moto totale si conserva.</p>`
        },
        {
            id: "s28-esempio-rotante",
            type: "section",
            title: "Sistema Rotante con Masse Variabili",
            icon: "🌀",
            content: `<p>Un'asticella di massa trascurabile ruota attorno a un asse verticale passante per il centro $O$. Agli estremi sono fissate due masse $m$, inizialmente a distanza $R_1$ con velocità angolare $\\omega_1$. Le masse vengono poi allontanate a distanza $R_2 \\gt R_1$. Trovare la nuova velocità angolare $\\omega_2$.</p>`,
            subsections: [
                {
                    subtitle: "Verifica della conservazione del momento angolare",
                    content: `
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Sistema rotante: stato iniziale e finale</strong></p>
  <p><em>Stato iniziale: asse verticale in O, asticella orizzontale, masse m a distanza R₁ dal centro, frecce rette tangenziali verso l'alto (v₁ = ω₁R₁) sulle masse a destra e verso il basso sulle masse a sinistra, freccia curva rossa per ω₁. Stato finale: stessa configurazione con masse a distanza R₂ > R₁, frecce tangenziali più corte (v₂ = ω₂R₂), freccia curva rossa più piccola per ω₂.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Le forze esterne (pesi e reazioni normali) sono tutte <strong>parallele all'asse di rotazione</strong>. Il loro momento rispetto a $O$ è nullo:</p>
<p>$$\\vec{M}_O^{(E)} = \\vec{0} \\Rightarrow \\vec{L}_O = \\text{costante}$$</p>`
                },
                {
                    subtitle: "Calcolo di ω₂",
                    content: `<p>Per una massa puntiforme in moto circolare: $L = mr\\omega r = m\\omega r^2$. Il momento angolare totale (due masse):</p>
<p>$$L_{O,\\text{in}} = 2m\\omega_1 R_1^2$$</p>
<p>$$L_{O,\\text{fin}} = 2m\\omega_2 R_2^2$$</p>
<p>Uguagliando:</p>
<p>$$2m\\omega_1 R_1^2 = 2m\\omega_2 R_2^2$$</p>
<p>$$\\omega_2 = \\omega_1 \\frac{R_1^2}{R_2^2}$$</p>
<p>Dato che $R_2 \\gt R_1$, si ha $\\omega_2 \\lt \\omega_1$: <strong>quando le masse si allontanano dall'asse, il sistema rallenta</strong>. È lo stesso principio sfruttato dai pattinatori: allargando le braccia rallentano la piroetta, stringendole accelerano.</p>`
                }
            ],
            formulas: [
                { label: "Conservazione L", latex: "\\omega_1 R_1^2 = \\omega_2 R_2^2" },
                { label: "Velocità angolare finale", latex: "\\omega_2 = \\omega_1 \\frac{R_1^2}{R_2^2}" }
            ]
        },
        {
            id: "s28-energia-rotante",
            type: "section",
            title: "Variazione dell'Energia Cinetica e Lavoro delle Forze Interne",
            icon: "⚡",
            content: `<p>Proseguiamo l'analisi del sistema rotante: il momento angolare si conserva, ma <strong>l'energia cinetica no</strong>. Dove va l'energia?</p>`,
            subsections: [
                {
                    subtitle: "Calcolo della variazione di energia cinetica",
                    content: `<p>Energia cinetica iniziale (due masse):</p>
<p>$$E_{k,1} = m v_1^2 = m(\\omega_1 R_1)^2 = m\\omega_1^2 R_1^2$$</p>
<p>Energia cinetica finale, sostituendo $\\omega_2 = \\omega_1 R_1^2/R_2^2$:</p>
<p>$$E_{k,2} = m\\omega_2^2 R_2^2 = m\\omega_1^2 \\frac{R_1^4}{R_2^2}$$</p>
<p>Il rapporto:</p>
<p>$$E_{k,2} = E_{k,1} \\frac{R_1^2}{R_2^2}$$</p>
<p>La variazione:</p>
<p>$$\\Delta E_k = E_{k,1}\\left(\\frac{R_1^2}{R_2^2} - 1\\right) \\lt 0$$</p>
<p>L'energia cinetica <strong>diminuisce</strong>.</p>`
                },
                {
                    subtitle: "Lavoro delle forze interne (tensione)",
                    content: `<p>Le forze esterne (peso e reazione normale) sono perpendicolari allo spostamento orizzontale: lavoro nullo. Il lavoro deve essere stato compiuto dalle <strong>forze interne</strong>: la tensione dell'asticella, che fornisce la forza centripeta.</p>
<p>$$T(r) = m\\omega^2 r$$</p>
<p>Ma $\\omega$ non è costante: dalla conservazione di $L$, $\\omega(r) = \\omega_1 R_1^2/r^2$. Quindi:</p>
<p>$$T(r) = m\\left(\\omega_1 \\frac{R_1^2}{r^2}\\right)^2 r = \\frac{m\\omega_1^2 R_1^4}{r^3}$$</p>
<p>La tensione è diretta verso il centro ($\\vec{T} = -T\\hat{r}$) mentre lo spostamento radiale verso l'esterno è $d\\vec{r} = dr\\,\\hat{r}$ con $dr \\gt 0$. Quindi $\\vec{T} \\cdot d\\vec{r} = -T\\,dr$. Il lavoro totale (doppio per due masse):</p>
<p>$$L_{\\text{int}} = -2\\int_{R_1}^{R_2} \\frac{m\\omega_1^2 R_1^4}{r^3}\\,dr = m\\omega_1^2 R_1^4 \\left(\\frac{1}{R_2^2} - \\frac{1}{R_1^2}\\right)$$</p>
<p>$$L_{\\text{int}} = E_{k,1}\\left(\\frac{R_1^2}{R_2^2} - 1\\right) = \\Delta E_k \\quad \\checkmark$$</p>
<p>La diminuzione di energia cinetica è esattamente il lavoro negativo delle forze interne.</p>`
                }
            ],
            extra_content: `<p><strong>Punto fondamentale:</strong> in un sistema di particelle, le forze interne <strong>possono compiere lavoro</strong> e modificare l'energia cinetica totale. Ciò accade quando la distanza tra i punti di applicazione varia (il sistema si <em>deforma</em>). In un corpo rigido, le distanze sono costanti e il lavoro delle forze interne è nullo.</p>`,
            formulas: [
                { label: "Variazione energia cinetica", latex: "\\Delta E_k = E_{k,1}\\left(\\frac{R_1^2}{R_2^2} - 1\\right)" },
                { label: "Tensione in funzione di r", latex: "T(r) = \\frac{m\\omega_1^2 R_1^4}{r^3}" }
            ]
        },
        {
            id: "s28-blocco-cuneo",
            type: "section",
            title: "Blocco su Cuneo Mobile: Doppia Conservazione",
            icon: "⛰️",
            content: `<p>Un blocco di massa $m$ viene lanciato con velocità orizzontale $v_0$ su un piano liscio. Sul piano c'è un cuneo di massa $M$ e altezza $H$, libero di muoversi senza attrito (anche la superficie del cuneo è liscia). Qual è la <strong>velocità minima $v_0$</strong> per raggiungere la sommità del cuneo?</p>`,
            subsections: [
                {
                    subtitle: "Analisi delle conservazioni",
                    content: `
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Blocco su cuneo: stato iniziale e finale</strong></p>
  <p><em>Stato iniziale: piano orizzontale, cuneo triangolare (massa M, altezza H) a destra, blocchetto (massa m) a sinistra del cuneo con freccia v₀ verso destra. Stato finale: cuneo spostato verso destra, blocchetto in cima al cuneo (altezza H), entrambi con freccia V nella stessa direzione (verso destra). Indicare chiaramente lo spostamento del cuneo e l'altezza H.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Lungo la direzione orizzontale non ci sono forze esterne (piano liscio) $\\Rightarrow$ <strong>quantità di moto orizzontale conservata</strong>.</p>
<p>Tutte le forze sono conservative o non compiono lavoro (reazioni normali ⊥ spostamento, niente attrito) $\\Rightarrow$ <strong>energia meccanica conservata</strong>.</p>
<p>Quando il blocco raggiunge la massima altezza $H$, la sua <strong>velocità relativa al cuneo è nulla</strong>: blocco e cuneo si muovono insieme con velocità $V$.</p>`
                },
                {
                    subtitle: "Conservazione della quantità di moto",
                    content: `<p>$$mv_0 = (m + M)V \\Rightarrow V = \\frac{m}{m + M}v_0$$</p>`
                },
                {
                    subtitle: "Conservazione dell'energia meccanica",
                    content: `<p>$$\\frac{1}{2}mv_0^2 = \\frac{1}{2}(m + M)V^2 + mgH$$</p>
<p>Sostituiamo $V$:</p>
<p>$$\\frac{1}{2}mv_0^2 = \\frac{1}{2}(m+M)\\frac{m^2}{(m+M)^2}v_0^2 + mgH$$</p>
<p>$$\\frac{1}{2}mv_0^2 = \\frac{1}{2}\\frac{m^2}{m+M}v_0^2 + mgH$$</p>
<p>Raccogliendo $v_0^2$:</p>
<p>$$v_0^2 \\cdot \\frac{m}{2}\\left(1 - \\frac{m}{m+M}\\right) = mgH$$</p>
<p>$$v_0^2 \\cdot \\frac{m}{2} \\cdot \\frac{M}{m+M} = mgH$$</p>
<p>$$v_0^2 = 2gH\\frac{m+M}{M}$$</p>
<p>$$v_0 = \\sqrt{2gH\\left(1 + \\frac{m}{M}\\right)}$$</p>`
                },
                {
                    subtitle: "Confronto con cuneo fisso",
                    content: `<p>Se il cuneo fosse fisso: $\\frac{1}{2}mv_0^2 = mgH \\Rightarrow v_0 = \\sqrt{2gH}$.</p>
<p>Con cuneo mobile, il fattore $\\sqrt{1 + m/M} \\gt 1$: serve una velocità iniziale <strong>maggiore</strong>.</p>
<p>Il motivo è fisico: parte dell'energia cinetica iniziale del blocco viene trasferita al cuneo per metterlo in movimento. Questa "frazione" di energia non è più disponibile per la conversione in energia potenziale gravitazionale.</p>`
                }
            ],
            formulas: [
                { label: "Velocità comune", latex: "V = \\frac{m}{m+M}v_0" },
                { label: "Velocità minima (cuneo mobile)", latex: "v_0 = \\sqrt{2gH\\left(1 + \\frac{m}{M}\\right)}" },
                { label: "Velocità minima (cuneo fisso)", latex: "v_0 = \\sqrt{2gH}" }
            ]
        },
        {
            id: "s28-forze-interne-lavoro",
            type: "alert_box",
            title: "Le Forze Interne Possono Compiere Lavoro!",
            icon: "🔑",
            content: `<p>Un errore comune è pensare che le forze interne non facciano mai lavoro. Questo è vero <strong>solo per i corpi rigidi</strong>, dove le distanze tra i punti di applicazione sono costanti.</p>
<p>In un sistema deformabile (come le masse che si allontanano sull'asticella), le forze interne <strong>compiono lavoro</strong> e possono modificare l'energia cinetica totale. Il momento angolare si conserva, ma l'energia cinetica no!</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Definisci il momento angolare di un punto materiale rispetto a un polo O.",
            back: "Il momento angolare è $\\vec{L}_O = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$, dove $\\vec{r}$ è il vettore posizione del punto rispetto al polo $O$ e $\\vec{p} = m\\vec{v}$ è la quantità di moto."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che la derivata temporale del momento angolare è uguale al momento delle forze (per un punto materiale).",
            back: "Si deriva: $\\frac{d\\vec{L}_O}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = (\\dot{\\vec{r}} \\times \\vec{p}) + (\\vec{r} \\times \\dot{\\vec{p}})$. Il primo termine è $\\vec{v} \\times m\\vec{v} = \\vec{0}$ (vettore per sé stesso). Il secondo è $\\vec{r} \\times \\vec{F}_{\\text{tot}} = \\vec{M}_O$. Quindi $\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O$."
        },
        {
            type: "dimostrazione",
            front: "Nella seconda equazione cardinale per un sistema, perché le forze interne non contribuiscono al momento totale?",
            back: "Raggruppando a coppie azione-reazione: $\\sum_{i\lt j}(\\vec{r}_i - \\vec{r}_j) \\times \\vec{F}_{ij}$. Se vale il principio di azione-reazione in forma forte, $\\vec{F}_{ij}$ è parallelo a $(\\vec{r}_i - \\vec{r}_j)$, e il prodotto vettoriale tra vettori paralleli è nullo."
        },
        {
            type: "domanda",
            front: "Per quali scelte del polo O la seconda equazione cardinale vale nella forma semplice $\\frac{d\\vec{L}_O}{dt} = \\vec{M}_O^{(e)}$?",
            back: "Vale per: (1) polo fisso ($\\vec{v}_O = \\vec{0}$), (2) polo coincidente col centro di massa (anche in moto accelerato), (3) polo con velocità parallela a $\\vec{P}_{\\text{tot}}$. In generale l'equazione ha un termine correttivo $-\\vec{v}_O \\times \\vec{P}_{\\text{tot}}$."
        },
        {
            type: "domanda",
            front: "Nell'esempio dell'uomo sulla barca, perché il centro di massa non si muove?",
            back: "Non ci sono forze esterne orizzontali (attrito con l'acqua trascurabile). Dalla prima equazione cardinale: $\\vec{F}_{\\text{ext},x} = 0 \\Rightarrow a_{CM,x} = 0$. Il sistema parte da fermo, quindi $v_{CM,x} = 0$ sempre, e $x_{CM} = \\text{costante}$."
        },
        {
            type: "formula",
            front: "Qual è lo spostamento della barca (massa $M$, lunghezza $L$) quando una persona (massa $m$) la attraversa da un'estremità all'altra?",
            back: "La barca si sposta di $x_A = \\frac{mL}{m+M}$ nella direzione opposta al moto della persona."
        },
        {
            type: "domanda",
            front: "Nel sistema rotante, perché il momento angolare si conserva ma l'energia cinetica no?",
            back: "Il momento delle forze esterne (pesi e reazioni normali, tutti verticali) rispetto all'asse è nullo, quindi $\\vec{L}_O$ si conserva. Ma le forze interne (tensione) compiono lavoro negativo quando le masse si allontanano (forza centripeta opposta allo spostamento radiale), riducendo $E_k$. In sistemi deformabili le forze interne possono fare lavoro!"
        },
        {
            type: "tranello",
            front: "Le forze interne a un sistema possono compiere lavoro?",
            back: "Sì! È un errore comune pensare il contrario. Le forze interne compiono lavoro nullo solo nei corpi rigidi (distanze costanti). In un sistema deformabile, come masse che cambiano distanza dall'asse, le forze interne (tensione) compiono lavoro e modificano l'energia cinetica totale."
        },
        {
            type: "formula",
            front: "Blocco (massa $m$) su cuneo mobile (massa $M$, altezza $H$): qual è la velocità minima per raggiungere la sommità?",
            back: "$v_0 = \\sqrt{2gH\\left(1 + \\frac{m}{M}\\right)}$. È maggiore del caso cuneo fisso ($\\sqrt{2gH}$) perché parte dell'energia cinetica viene trasferita al cuneo per metterlo in movimento."
        },
        {
            type: "domanda",
            front: "Perché il momento di una coppia di forze è indipendente dal polo?",
            back: "Il momento è $\\vec{M}_O = (\\vec{r}_1 - \\vec{r}_2) \\times \\vec{F}$. Il vettore $(\\vec{r}_1 - \\vec{r}_2)$ che congiunge i punti di applicazione non dipende dalla scelta del polo $O$, quindi neanche il momento ne dipende. Il modulo è $|\\vec{M}| = F \\cdot b$ dove $b$ è il braccio."
        },
        {
            type: "tranello",
            front: "Nel problema del proiettile che esplode, perché è essenziale che i due frammenti atterrino simultaneamente?",
            back: "Perché la formula $x_{CM} = \\frac{m_1 x_1 + m_2 x_2}{M}$ vale solo se calcoliamo le posizioni nello stesso istante. Se atterrassero in momenti diversi, non potremmo applicare la formula del CM a un unico istante in cui entrambi sono a terra. L'atterraggio simultaneo ci permette di uguagliare $x_{CM,\\text{fin}}$ alla gittata $R$."
        }
    ]
};

