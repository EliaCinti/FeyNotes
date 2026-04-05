const LESSON = {
    id: "L13", date: "Lezione 13 — 5 Apr 2026",
    title: "La Tensione e le Funi Ideali",
    abstract: "Definizione di fune ideale e tensione come forza vincolare. Dimostrazione della costanza della tensione lungo una fune ideale. Applicazioni: due masse collegate, macchina di Atwood, massa sospesa a due funi. Forza centripeta e attrito statico in curva.",

    sections: [
        {
            id: "s13-tensione-vincolare",
            type: "section",
            title: "La Tensione come Forza Vincolare",
            icon: "🪢",
            content: `<p>La tensione è una <strong>forza di reazione vincolare</strong> prodotta da una fune tesa. Il modello che considereremo, salvo diversa indicazione, è quello di una <strong>fune ideale</strong>.</p>
<p><strong>Definizione — Fune Ideale:</strong> una fune ideale è un modello fisico che possiede le seguenti proprietà:</p>
<ul>
<li>È <strong>priva di massa</strong> ($m_{\\text{fune}} = 0$).</li>
<li>È <strong>inestensibile</strong>: la sua lunghezza non varia quando viene sottoposta a trazione.</li>
<li>Esercita una forza (tensione) <strong>solo se è tesa</strong>. Se la fune non è tesa, non esercita alcuna forza.</li>
</ul>
<p>La fune rappresenta un vincolo di contatto, ma a differenza di un piano d'appoggio, il contatto è <strong>puntuale</strong>, avvenendo solo all'estremità della fune a cui è collegato un corpo. Il vincolo cessa di esistere nel momento in cui la fune non è più tesa.</p>
<p>Come tutti i vincoli, la presenza di una fune altera il moto libero di un corpo. Ricordiamo che un vincolo è un sistema che, interagendo con un corpo, ne altera il moto libero generando una forza di reazione vincolare. Abbiamo già visto diversi esempi:</p>
<ul>
<li>Un tavolo che impedisce la caduta di un oggetto esercita una <strong>reazione normale</strong>.</li>
<li>L'interazione tra superfici a contatto può generare una forza di <strong>attrito statico o dinamico</strong>.</li>
<li>Un paracadute che interagisce con l'aria genera una forza di <strong>resistenza viscosa</strong>.</li>
<li>Una molla collegata a un corpo esercita una <strong>forza elastica</strong>.</li>
</ul>
<p>La fune tesa rientra in questa categoria, generando una forza che chiamiamo <strong>tensione</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Proprietà della Tensione — Dimostrazione",
                    content: `<p><strong>Proposizione:</strong> In una fune ideale (priva di massa, inestensibile e tesa), la tensione ha la <strong>stessa magnitudine in ogni suo punto</strong>. La sua direzione è sempre <strong>tangente alla fune</strong>, orientata in modo da "tirare" il corpo a cui è collegata.</p>
<p><strong>Dimostrazione:</strong> Consideriamo un segmento di fune ideale tesa, delimitato da due punti A e B, agli estremi del quale sono applicate due forze esterne $\\vec{F}_A$ e $\\vec{F}_B$. Applichiamo la seconda legge di Newton al segmento:</p>
$$\\vec{F}_A + \\vec{F}_B = m_{\\text{fune}} \\vec{a}$$
<p>Poiché la fune è ideale, $m_{\\text{fune}} = 0$. Di conseguenza, il prodotto $m_{\\text{fune}} \\vec{a}$ è nullo, <strong>indipendentemente dall'accelerazione del sistema</strong>:</p>
$$\\vec{F}_A + \\vec{F}_B = 0 \\quad \\Rightarrow \\quad \\vec{F}_A = -\\vec{F}_B$$
<p>Questo ci dice che le forze applicate agli estremi di un qualsiasi segmento di fune ideale devono essere <strong>uguali e opposte</strong>.</p>
<p>Analizziamo ora le forze agenti sugli elementini infinitesimali di fune nei punti A e B. Considerando l'equilibrio (o il moto) di questi elementini di massa nulla:</p>
$$\\text{In A:} \\quad \\vec{F}_A + \\vec{T}_A = 0$$
$$\\text{In B:} \\quad \\vec{F}_B + \\vec{T}_B = 0$$
<p>Da queste relazioni otteniamo $\\vec{T}_A = -\\vec{F}_A$ e $\\vec{T}_B = -\\vec{F}_B$. Poiché abbiamo dimostrato che $\\vec{F}_A = -\\vec{F}_B$, segue che:</p>
$$\\vec{T}_A = -(-\\vec{F}_B) = \\vec{F}_B = -\\vec{T}_B$$
<p>I vettori tensione ai due estremi sono opposti, $\\vec{T}_A = -\\vec{T}_B$, e quindi hanno la stessa magnitudine:</p>
$$\\| \\vec{T}_A \\| = \\| \\vec{T}_B \\|$$
<p>Poiché A e B sono due punti <strong>arbitrari</strong> della fune, concludiamo che la magnitudine della tensione $T$ è <strong>costante lungo tutta la fune</strong>. ∎</p>
<p>La fune ideale è quindi un dispositivo che <strong>trasferisce una forza da un estremo all'altro</strong>, mantenendone inalterata la magnitudine. Questo è utilissimo per cambiare la direzione di una forza applicata, come vedremo con le carrucole.</p>`
                }
            ],
            formulas: [
                { label: "Equilibrio fune ideale", latex: "\\vec{F}_A = -\\vec{F}_B" },
                { label: "Costanza della tensione", latex: "\\| \\vec{T}_A \\| = \\| \\vec{T}_B \\| = T" }
            ]
        },
        {
            id: "s13-due-masse-piano",
            type: "section",
            title: "Due Masse Collegate su un Piano Orizzontale",
            icon: "🔗",
            content: `<p>Consideriamo due masse $m_1$ e $m_2$ appoggiate su un piano orizzontale <strong>privo di attrito</strong>, collegate da una fune ideale. Una forza orizzontale $\\vec{F}$ viene applicata alla massa $m_1$. Vogliamo determinare l'accelerazione del sistema e la tensione della fune.</p>`,
            subsections: [
                {
                    subtitle: "Schema delle forze e equazioni del moto",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Due masse collegate su piano orizzontale</strong></p>
  <p><em>Due blocchi $m_2$ (a sinistra) e $m_1$ (a destra) collegati da fune. Forza $\\vec{F}$ applicata a $m_1$ verso destra. Tensione $\\vec{T}$ sulla fune tra i due blocchi.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Poiché la fune è inestensibile, le due masse si muovono insieme con la <strong>stessa accelerazione</strong> $\\vec{a}$. Scegliamo un asse $x$ orientato come la forza $\\vec{F}$.</p>
<p><strong>Massa $m_1$:</strong> agiscono la forza esterna $\\vec{F}$ (verso destra) e la tensione $\\vec{T}$ (verso sinistra, la fune "tira" indietro):</p>
$$F - T = m_1 a$$
<p><strong>Massa $m_2$:</strong> agisce solo la tensione $\\vec{T}$ (verso destra, la fune "tira" in avanti):</p>
$$T = m_2 a$$`
                },
                {
                    subtitle: "Risoluzione del sistema",
                    content: `<p>Abbiamo il sistema:</p>
$$\\begin{cases} F - T = m_1 a \\\\ T = m_2 a \\end{cases}$$
<p>Sostituiamo la seconda nella prima:</p>
$$F - m_2 a = m_1 a \\quad \\Rightarrow \\quad F = (m_1 + m_2)a$$
<p>Da cui ricaviamo l'<strong>accelerazione</strong>:</p>
$$a = \\frac{F}{m_1 + m_2}$$
<p>E sostituendo nella seconda equazione, otteniamo la <strong>tensione</strong>:</p>
$$T = m_2 \\cdot \\frac{F}{m_1 + m_2} = F \\frac{m_2}{m_1 + m_2}$$
<p><strong>Controlli di coerenza:</strong></p>
<ul>
<li>L'accelerazione è la stessa che si avrebbe applicando la forza $F$ a un unico corpo di massa totale $M = m_1 + m_2$.</li>
<li>La tensione $T$ è <strong>sempre minore</strong> della forza applicata $F$, poiché il fattore $\\frac{m_2}{m_1 + m_2}$ è sempre minore di 1. La forza $F$ deve accelerare entrambe le masse, mentre la tensione $T$ deve accelerare solo $m_2$.</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Accelerazione (due masse)", latex: "a = \\frac{F}{m_1 + m_2}" },
                { label: "Tensione (due masse)", latex: "T = F \\frac{m_2}{m_1 + m_2}" }
            ]
        },
        {
            id: "s13-macchina-atwood",
            type: "section",
            title: "La Macchina di Atwood",
            icon: "⚙️",
            content: `<p>La macchina di Atwood è un dispositivo costituito da una <strong>carrucola ideale</strong> (massa e attrito trascurabili) attorno alla quale scorre una fune ideale, ai cui estremi sono appese due masse $m_1$ e $m_2$. È un problema classico che il professore ha affrontato in dettaglio.</p>`,
            subsections: [
                {
                    subtitle: "Impostazione del problema",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Macchina di Atwood</strong></p>
  <p><em>Carrucola ideale fissata in alto. Fune ideale con massa $m_1$ a sinistra e $m_2$ a destra. Asse $y$ verticale orientato verso l'alto. Su ciascuna massa agiscono peso $m_i g$ (verso il basso) e tensione $T$ (verso l'alto).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Scegliamo un asse $y$ verticale orientato verso l'alto. Le forze agenti su ciascuna massa sono la <strong>forza peso</strong> e la <strong>tensione</strong> della fune.</p>
<p>Poiché la fune è ideale e scorre su una carrucola ideale, la tensione $T$ ha la <strong>stessa magnitudine per entrambe le masse</strong>.</p>
<p>Il vincolo della fune inestensibile impone che se una massa sale, l'altra scende della stessa quantità. Le accelerazioni sono quindi <strong>uguali in modulo ma opposte in verso</strong>.</p>
<p>Assumiamo che $m_2$ scenda e $m_1$ salga. Se $a$ è il modulo dell'accelerazione: $a_1 = a$ (verso l'alto) e $a_2 = -a$ (verso il basso).</p>`
                },
                {
                    subtitle: "Equazioni del moto e risoluzione",
                    content: `<p><strong>Massa $m_1$</strong> (sale):</p>
$$T - m_1 g = m_1 a$$
<p><strong>Massa $m_2$</strong> (scende):</p>
$$T - m_2 g = -m_2 a$$
<p>Sistema:</p>
$$\\begin{cases} T - m_1 g = m_1 a \\\\ T - m_2 g = -m_2 a \\end{cases}$$
<p>Sottraiamo la seconda equazione dalla prima:</p>
$$(T - m_1 g) - (T - m_2 g) = m_1 a + m_2 a$$
$$-m_1 g + m_2 g = (m_1 + m_2) a$$
$$(m_2 - m_1)g = (m_1 + m_2) a$$
<p>Da cui l'<strong>accelerazione</strong>:</p>
$$a = \\frac{m_2 - m_1}{m_1 + m_2} \\, g$$`
                },
                {
                    subtitle: "Discussione del risultato",
                    content: `<ul>
<li>Se $m_2 \\gt m_1$, allora $a \\gt 0$: $m_2$ scende e $m_1$ sale (come ipotizzato).</li>
<li>Se $m_1 \\gt m_2$, allora $a \\lt 0$: il moto avviene in direzione opposta, $m_1$ scende e $m_2$ sale.</li>
<li>Se $m_1 = m_2$, allora $a = 0$: il sistema è in <strong>equilibrio indifferente</strong> (o si muove a velocità costante).</li>
</ul>`
                },
                {
                    subtitle: "Calcolo della tensione",
                    content: `<p>Sostituiamo l'espressione di $a$ nella prima equazione:</p>
$$T = m_1(g + a) = m_1 \\left( g + \\frac{m_2 - m_1}{m_1 + m_2} g \\right) = m_1 g \\left( \\frac{m_1 + m_2 + m_2 - m_1}{m_1 + m_2} \\right)$$
$$T = \\frac{2 m_1 m_2}{m_1 + m_2} \\, g$$
<p>Notiamo che questa espressione è <strong>simmetrica</strong> in $m_1$ e $m_2$, come ci aspettiamo: la tensione non dipende da quale massa sale o scende.</p>`
                }
            ],
            formulas: [
                { label: "Accelerazione (Atwood)", latex: "a = \\frac{m_2 - m_1}{m_1 + m_2} \\, g" },
                { label: "Tensione (Atwood)", latex: "T = \\frac{2 m_1 m_2}{m_1 + m_2} \\, g" }
            ]
        },
        {
            id: "s13-massa-due-funi",
            type: "section",
            title: "Massa Sospesa a Due Funi",
            icon: "🔺",
            content: `<p>Consideriamo una massa $m = 2.04 \\, \\text{kg}$ sospesa in equilibrio da due funi ideali. Gli angoli che le funi formano con la verticale sono $\\theta_1 = 30°$ e $\\theta_2 = 45°$. Vogliamo calcolare le tensioni $T_1$ e $T_2$.</p>`,
            subsections: [
                {
                    subtitle: "Schema e impostazione",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Massa sospesa a due funi</strong></p>
  <p><em>Massa $m$ nel punto di congiunzione. Fune sinistra forma angolo $\\theta_1 = 30°$ con la verticale, fune destra forma angolo $\\theta_2 = 45°$ con la verticale. Peso $\\vec{P}$ verso il basso.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Poiché il sistema è in equilibrio, la risultante delle forze è nulla:</p>
$$\\vec{T}_1 + \\vec{T}_2 + \\vec{P} = 0$$
<p>Proiettiamo lungo gli assi cartesiani ($x$ orizzontale, $y$ verticale verso l'alto).</p>
<p><strong>Componente $x$:</strong></p>
$$-T_1 \\sin\\theta_1 + T_2 \\sin\\theta_2 = 0$$
<p><strong>Componente $y$:</strong></p>
$$T_1 \\cos\\theta_1 + T_2 \\cos\\theta_2 - mg = 0$$`
                },
                {
                    subtitle: "Risoluzione analitica e numerica",
                    content: `<p>Dalla prima equazione:</p>
$$T_2 = T_1 \\frac{\\sin\\theta_1}{\\sin\\theta_2}$$
<p>Sostituendo nella seconda:</p>
$$T_1 \\cos\\theta_1 + T_1 \\frac{\\sin\\theta_1}{\\sin\\theta_2} \\cos\\theta_2 = mg$$
$$T_1 (\\cos\\theta_1 + \\sin\\theta_1 \\cot\\theta_2) = mg$$
$$T_1 = \\frac{mg}{\\cos\\theta_1 + \\sin\\theta_1 \\cot\\theta_2}$$
<p><strong>Calcolo numerico:</strong></p>
<ul>
<li>$mg = 2.04 \\times 9.8 \\approx 20 \\, \\text{N}$</li>
<li>$\\cos(30°) = \\frac{\\sqrt{3}}{2} \\approx 0.866$, $\\sin(30°) = 0.5$</li>
<li>$\\cot(45°) = 1$</li>
</ul>
$$T_1 = \\frac{20}{0.866 + 0.5 \\times 1} = \\frac{20}{1.366} \\approx 14.7 \\, \\text{N}$$
$$T_2 = T_1 \\frac{\\sin(30°)}{\\sin(45°)} = 14.7 \\cdot \\frac{0.5}{\\frac{\\sqrt{2}}{2}} = 14.7 \\cdot \\frac{1}{\\sqrt{2}} \\approx 10.4 \\, \\text{N}$$`
                }
            ],
            formulas: [
                { label: "Tensione T₁ (due funi)", latex: "T_1 = \\frac{mg}{\\cos\\theta_1 + \\sin\\theta_1 \\cot\\theta_2}" },
                { label: "Relazione T₁-T₂", latex: "T_2 = T_1 \\frac{\\sin\\theta_1}{\\sin\\theta_2}" }
            ]
        },
        {
            id: "s13-centripeta-attrito",
            type: "section",
            title: "Forza Centripeta e Attrito Statico: l'Automobile in Curva",
            icon: "🚗",
            content: `<p>Un'automobile di massa $m$ percorre una curva circolare di raggio $R$ a velocità costante $v$. Qual è la massima velocità alla quale l'auto può percorrere la curva senza slittare, dato un coefficiente di attrito statico $\\mu_S$ tra pneumatici e asfalto?</p>`,
            subsections: [
                {
                    subtitle: "Analisi delle forze",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 4 — Automobile in curva (vista posteriore)</strong></p>
  <p><em>Auto vista da dietro. Peso $\\vec{P}$ verso il basso, reazione normale $\\vec{R}_N$ verso l'alto, forza di attrito statico $\\vec{F}_S$ diretta orizzontalmente verso il centro della curva (a sinistra).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>L'automobile compie un <strong>moto circolare uniforme</strong>, soggetta a un'accelerazione centripeta $a_c = v^2/R$ diretta verso il centro della curva. Le forze agenti sono:</p>
<ul>
<li><strong>Forza peso $\\vec{P}$</strong>: diretta verso il basso.</li>
<li><strong>Reazione normale $\\vec{R}_N$</strong>: diretta verso l'alto, esercitata dalla strada.</li>
<li><strong>Forza di attrito statico $\\vec{F}_S$</strong>: diretta orizzontalmente <strong>verso il centro della curva</strong>.</li>
</ul>
<p>È proprio l'<strong>attrito statico</strong> a fornire la forza centripeta! L'auto tende a "partire per la tangente", cioè a proseguire in linea retta. L'attrito statico si oppone a questo slittamento laterale, "trattenendo" l'auto in traiettoria curva.</p>`
                },
                {
                    subtitle: "Calcolo della velocità massima",
                    content: `<p><strong>Direzione verticale</strong> (equilibrio):</p>
$$R_N - mg = 0 \\quad \\Rightarrow \\quad R_N = mg$$
<p><strong>Direzione radiale</strong> (orizzontale): l'attrito statico fornisce la forza centripeta:</p>
$$F_S = m \\frac{v^2}{R}$$
<p>La forza di attrito statico ha un valore massimo:</p>
$$F_{S,\\text{max}} = \\mu_S R_N = \\mu_S m g$$
<p>Perché l'auto non slitti, la forza centripeta richiesta deve essere minore o uguale alla massima forza di attrito disponibile:</p>
$$m \\frac{v^2}{R} \\le \\mu_S m g$$
<p>La massa $m$ si semplifica — la velocità massima <strong>non dipende dalla massa del veicolo</strong>!</p>
$$\\frac{v^2}{R} \\le \\mu_S g \\quad \\Rightarrow \\quad v^2 \\le \\mu_S g R$$
$$v_{\\text{max}} = \\sqrt{\\mu_S \\, g \\, R}$$
<p>Se l'auto supera questa velocità, l'attrito statico non è più sufficiente: l'auto inizia a <strong>slittare verso l'esterno della curva</strong>.</p>`
                }
            ],
            formulas: [
                { label: "Velocità massima in curva", latex: "v_{\\text{max}} = \\sqrt{\\mu_S \\, g \\, R}" },
                { label: "Condizione di non slittamento", latex: "\\frac{v^2}{R} \\le \\mu_S g" }
            ]
        },
        {
            id: "s13-alert-fune",
            type: "alert_box",
            title: "⚠️ Trappola: la fune ideale ha massa nulla!",
            icon: "⚠️",
            content: `<p>Un errore molto comune è dimenticare che nella fune ideale $m_{\\text{fune}} = 0$ implica che la <strong>risultante delle forze sulla fune è sempre zero</strong>, indipendentemente dall'accelerazione. Questo è il motivo per cui la tensione è costante lungo la fune.</p>
<p>Se la fune avesse massa, la tensione <strong>non sarebbe costante</strong>: sarebbe diversa nei vari punti della fune. A esame, se non è specificato diversamente, assumete sempre fune ideale.</p>
<p>Altro errore frequente: la tensione è una forza che <strong>tira</strong>, mai che spinge. Se la fune non è tesa, $T = 0$.</p>`
        },
        {
            id: "s13-nota-atwood",
            type: "note_box",
            title: "📝 Nota: casi limite della macchina di Atwood",
            icon: "📝",
            content: `<p>Vale la pena verificare i casi limite della formula $a = \\frac{m_2 - m_1}{m_1 + m_2} g$:</p>
<ul>
<li>Se $m_1 = 0$: $a = g$, cioè $m_2$ cade in caduta libera. Corretto: non c'è nulla che la trattenga.</li>
<li>Se $m_1 = m_2$: $a = 0$, equilibrio indifferente. Corretto.</li>
<li>Se $m_2 \\gg m_1$: $a \\approx g$. La massa piccola è "trascinata" quasi in caduta libera.</li>
</ul>
<p>Per la tensione $T = \\frac{2m_1 m_2}{m_1 + m_2} g$:</p>
<ul>
<li>Se $m_1 = m_2 = m$: $T = mg$. Ciascuna massa è sostenuta dal proprio peso: equilibrio.</li>
<li>Se $m_1 = 0$: $T = 0$. La fune è "scarica", coerente con la caduta libera di $m_2$.</li>
</ul>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Quali sono le tre proprietà di una fune ideale?",
            back: "Una fune ideale è: (1) <strong>priva di massa</strong> ($m_{\\text{fune}} = 0$), (2) <strong>inestensibile</strong> (lunghezza costante sotto trazione), (3) esercita forza <strong>solo se tesa</strong> (se non è tesa, $T = 0$)."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che la tensione è costante lungo una fune ideale.",
            back: "Si applica $\\vec{F} = m\\vec{a}$ a un segmento arbitrario di fune tra A e B. Poiché $m_{\\text{fune}} = 0$, si ha $\\vec{F}_A + \\vec{F}_B = 0$, cioè le forze esterne sono uguali e opposte. Analizzando l'equilibrio degli elementini infinitesimi agli estremi (anch'essi di massa nulla), si ottiene $\\vec{T}_A = -\\vec{T}_B$, quindi $\\|\\vec{T}_A\\| = \\|\\vec{T}_B\\| = T$ costante lungo tutta la fune."
        },
        {
            type: "formula",
            front: "Scrivi accelerazione e tensione per la macchina di Atwood.",
            back: "$$a = \\frac{m_2 - m_1}{m_1 + m_2} \\, g$$ $$T = \\frac{2 m_1 m_2}{m_1 + m_2} \\, g$$"
        },
        {
            type: "domanda",
            front: "Nella macchina di Atwood, cosa succede se $m_1 = m_2$?",
            back: "L'accelerazione è $a = 0$: il sistema è in <strong>equilibrio indifferente</strong>. La tensione diventa $T = mg$, pari al peso di ciascuna massa. Il sistema resta fermo o si muove a velocità costante."
        },
        {
            type: "domanda",
            front: "Due masse collegate da fune ideale su piano senza attrito, con forza $F$ su $m_1$. Perché la tensione $T$ è minore di $F$?",
            back: "Perché $T = F \\frac{m_2}{m_1 + m_2}$ e il fattore $\\frac{m_2}{m_1 + m_2} \\lt 1$. La forza $F$ deve accelerare <strong>entrambe</strong> le masse, mentre la tensione $T$ deve accelerare solo $m_2$. Parte della forza $F$ è 'consumata' per accelerare $m_1$ stessa."
        },
        {
            type: "domanda",
            front: "Quale forza fisica fornisce la forza centripeta a un'auto in curva su strada piana?",
            back: "L'<strong>attrito statico</strong> tra pneumatici e asfalto. L'auto tenderebbe a proseguire in linea retta (per inerzia); l'attrito statico si oppone allo slittamento laterale, fornendo la forza centripeta diretta verso il centro della curva."
        },
        {
            type: "formula",
            front: "Qual è la velocità massima di un'auto in curva di raggio $R$ con attrito statico $\\mu_S$?",
            back: "$$v_{\\text{max}} = \\sqrt{\\mu_S \\, g \\, R}$$ Nota importante: <strong>non dipende dalla massa</strong> del veicolo! La massa si semplifica nell'equazione $m\\frac{v^2}{R} \\le \\mu_S m g$."
        },
        {
            type: "tranello",
            front: "La velocità massima in curva dipende dalla massa dell'auto?",
            back: "<strong>No!</strong> Questo è un tranello classico. Dalla condizione $m\\frac{v^2}{R} \\le \\mu_S mg$, la massa $m$ si semplifica. La velocità massima $v_{\\text{max}} = \\sqrt{\\mu_S g R}$ dipende solo dal coefficiente di attrito, dal raggio della curva e da $g$. Un camion e un'utilitaria hanno la stessa $v_{\\text{max}}$ (a parità di $\\mu_S$ e $R$)."
        },
        {
            type: "domanda",
            front: "Come si imposta il sistema di equazioni per una massa sospesa a due funi con angoli $\\theta_1$ e $\\theta_2$ rispetto alla verticale?",
            back: "Equilibrio $\\Rightarrow$ risultante nulla. Si proietta su $x$ (orizzontale) e $y$ (verticale): $$x: \\quad -T_1 \\sin\\theta_1 + T_2 \\sin\\theta_2 = 0$$ $$y: \\quad T_1 \\cos\\theta_1 + T_2 \\cos\\theta_2 = mg$$ Dalla prima si ricava $T_2$ in funzione di $T_1$ e si sostituisce nella seconda."
        },
        {
            type: "tranello",
            front: "Se la fune non è tesa, la tensione è nulla. Perché questo è importante?",
            back: "Perché il vincolo <strong>cessa di esistere</strong> quando la fune non è tesa. A differenza di un piano d'appoggio che può sia spingere sia trattenere, la fune può solo <strong>tirare</strong>. In un problema, se i calcoli danno $T \\lt 0$, significa che la fune dovrebbe spingere, il che è fisicamente impossibile: la fune si affloscia e $T = 0$."
        }
    ]
};
