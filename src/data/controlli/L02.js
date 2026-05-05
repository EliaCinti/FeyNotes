const LESSON = {
    id: "L02", date: "Lezione 02 — 6 Apr 2026",
    title: "Modellazione Meccanica: da Lagrange allo Spazio di Stato",
    abstract: "Procedura completa per ricavare il modello nello spazio di stato (ẋ = Ax + Bu) a partire da un sistema meccanico, passando per i gradi di libertà, le energie T, U, F, la tabella di Eulero-Lagrange e la scelta delle variabili di stato.",

    sections: [
        {
            id: "s02-gradi-liberta",
            type: "section",
            title: "Passo 1 — Gradi di Libertà",
            icon: "📐",
            content: `<figure style="text-align: center; margin: 1.5rem 0;">
  <img src="../assets/L02/Comprensione.png" alt="Sistema masse-molle-smorzatori con masse m1, m2, molle k1, k2, k3, smorzatore d1 e frecce q1, q2, q3 che indicano i gradi di libertà" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);">
  <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Sistema meccanico di riferimento con gradi di libertà evidenziati.</figcaption>
</figure>
<p>La prima cosa da fare è chiedersi: <strong>le frecce dei gradi di libertà ci sono?</strong> Se sì, si passa al passo 2. Altrimenti si parte da qui.</p>`,
            subsections: [
                {
                    subtitle: "Come individuare i gradi di libertà",
                    content: `<p>Da sinistra verso destra, si disegna una freccia $q_i$ che arriva sotto ogni massa $m_i$.</p>
<p>Poi si individuano i <strong>punti liberi</strong>: estremi di molla o smorzatore che non toccano né una massa né il muro. A ognuno di questi punti va assegnata una nuova freccia (un nuovo grado di libertà).</p>
<p><strong>Regola fondamentale:</strong> il numero di frecce è uguale al numero di gradi di libertà.</p>
<p>$$\\# \\text{frecce} = \\# \\text{gradi di libertà}$$</p>`
                }
            ]
        },
        {
            id: "s02-energia-cinetica",
            type: "section",
            title: "Passo 2 — Energia Cinetica T",
            icon: "⚡",
            content: `<p>Si guardano <strong>solo le masse</strong>. Ogni massa $m_i$ contribuisce con un termine $+\\frac{1}{2}m_i \\dot{q}_i^2$.</p>
<p>$$T = \\frac{1}{2}m_1 \\dot{q}_1^2 + \\dots + \\frac{1}{2}m_i \\dot{q}_i^2$$</p>`,
            formulas: [
                { label: "Contributo massa i-esima a T", latex: "+\\frac{1}{2}m_i \\dot{q}_i^2" }
            ]
        },
        {
            id: "s02-energia-potenziale",
            type: "section",
            title: "Passo 3 — Energia Potenziale U",
            icon: "🔧",
            content: `<p>Si guardano <strong>solo le molle</strong>. Ogni molla $k_i$ è attaccata tra due punti, le cui posizioni chiamiamo $q_A$ e $q_B$. Questi possono essere masse, nodi liberi, oppure il muro (che vale $0$).</p>
<p>$$U = \\frac{1}{2}k_1(q_{1A} - q_{1B})^2 + \\dots + \\frac{1}{2}k_i(q_{iA} - q_{iB})^2$$</p>
<p>$A$ e $B$ sono le posizioni (gli estremi) di ogni molla.</p>`,
            formulas: [
                { label: "Contributo molla i-esima a U", latex: "+\\frac{1}{2}k_i(q_A - q_B)^2" }
            ]
        },
        {
            id: "s02-dissipazione",
            type: "section",
            title: "Passo 4 — Funzione di Dissipazione F",
            icon: "💧",
            content: `<p>Si guardano <strong>solo gli smorzatori</strong>. Ogni smorzatore $d_i$ è attaccato a due punti con velocità $\\dot{q}_A$ e $\\dot{q}_B$ (il muro ha velocità zero).</p>
<p>$$F = \\frac{1}{2}d_1(\\dot{q}_{1A} - \\dot{q}_{1B})^2 + \\dots + \\frac{1}{2}d_i(\\dot{q}_{iA} - \\dot{q}_{iB})^2$$</p>`,
            formulas: [
                { label: "Contributo smorzatore i-esimo a F", latex: "+\\frac{1}{2}d_i(\\dot{q}_A - \\dot{q}_B)^2" }
            ]
        },
        {
            id: "s02-lagrangiana",
            type: "section",
            title: "Passo 5 — La Lagrangiana L",
            icon: "📝",
            content: `<p>Per ottenere la Lagrangiana si fa semplicemente:</p>
<p>$$L = T - U$$</p>`,
            formulas: [
                { label: "Lagrangiana", latex: "L = T - U" }
            ]
        },
        {
            id: "s02-tabella-eulero-lagrange",
            type: "section",
            title: "Passo 6 — La Tabella di Eulero-Lagrange",
            icon: "📊",
            content: `<p>L'obiettivo è costruire una tabella con le derivate parziali, dalla quale ricaveremo le equazioni del moto. Ci saranno <strong>tante righe quanti sono i gradi di libertà</strong>.</p>`,
            table_compare: {
                headers: ["$i$", "$\\frac{\\partial L}{\\partial \\dot{q}_i}$", "$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i}$", "$\\frac{\\partial L}{\\partial q_i}$", "$\\frac{\\partial F}{\\partial \\dot{q}_i}$", "$u_i$"],
                rows: [
                    ["1", "$m_1 \\dot{q}_1$", "$m_1 \\ddot{q}_1$", "$-k_2 q_1 - k_3(q_1 - q_2)$", "$0$", "$0$"],
                    ["2", "$m_2 \\dot{q}_2$", "$m_2 \\ddot{q}_2$", "$k_3(q_1 - q_2)$", "$-d_1(\\dot{q}_3 - \\dot{q}_2)$", "$0$"],
                    ["3", "$0$", "$0$", "$-k_1 q_3$", "$d_1(\\dot{q}_3 - \\dot{q}_2)$", "$0$"]
                ]
            },
            subsections: [
                {
                    subtitle: "Come compilare ogni colonna",
                    content: `<ul>
<li><strong>Colonna 1:</strong> l'indice $i$ che scorre i gradi di libertà.</li>
<li><strong>Colonna 2:</strong> in $L$, cosa dipende da $\\dot{q}_i$.</li>
<li><strong>Colonna 3:</strong> aggiungo un pallino (un grado di derivazione) a ciò che sta nella colonna precedente sulla stessa riga.</li>
<li><strong>Colonna 4:</strong> in $L$, cosa dipende da $q_i$.</li>
<li><strong>Colonna 5:</strong> in $F$, cosa dipende da $\\dot{q}_i$.</li>
<li><strong>Colonna 6:</strong> forza esterna applicata al nodo $i$-esimo.</li>
</ul>`
                },
                {
                    subtitle: "Dalla tabella alle equazioni",
                    content: `<p>Si applica la formula di Eulero-Lagrange per ogni riga:</p>
<p>$$\\text{Col. 3} - \\text{Col. 4} + \\text{Col. 5} = \\text{Col. 6}$$</p>
<p>Si ottengono le equazioni del moto:</p>
<p>1) $m_1 \\ddot{q}_1 + k_2 q_1 + k_3(q_1 - q_2) = 0$</p>
<p>2) $m_2 \\ddot{q}_2 - k_3(q_1 - q_2) - d_1(\\dot{q}_3 - \\dot{q}_2) = 0$</p>
<p>3) $k_1 q_3 + d_1(\\dot{q}_3 - \\dot{q}_2) = 0$</p>`
                }
            ],
            formulas: [
                { label: "Equazione di Eulero-Lagrange (riga i)", latex: "\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} + \\frac{\\partial F}{\\partial \\dot{q}_i} = u_i" }
            ]
        },
        {
            id: "s02-variabili-stato",
            type: "section",
            title: "Passo 7 — Scelta delle Variabili di Stato",
            icon: "🔀",
            content: `<p>L'obiettivo è arrivare alla forma $\\dot{x} = Ax + Bu$, dove a sinistra ci sono <strong>solo derivate prime</strong> e a destra <strong>nessuna derivata</strong>.</p>
<p>Per farlo, si guarda l'<strong>ordine massimo di derivazione</strong> di ogni $q_i$ nelle equazioni:</p>
<ul>
<li>$q_1$: compare $\\ddot{q}_1$ nell'eq. 1 $\\Rightarrow$ ordine 2</li>
<li>$q_2$: compare $\\ddot{q}_2$ nell'eq. 2 $\\Rightarrow$ ordine 2</li>
<li>$q_3$: compare $\\dot{q}_3$ nell'eq. 3 $\\Rightarrow$ ordine 1</li>
</ul>`,
            subsections: [
                {
                    subtitle: "Assegnazione delle variabili",
                    content: `<p>Se $q_i$ ha ordine 2, servono <strong>2 variabili</strong> (posizione + velocità). Se ha ordine 1, ne basta <strong>1</strong>. Prima si elencano tutte le posizioni, poi le velocità:</p>
<ul>
<li>$q_1$ ha ordine 2 $\\Rightarrow$ $x_1 = q_1$ e $x_4 = \\dot{q}_1$</li>
<li>$q_2$ ha ordine 2 $\\Rightarrow$ $x_2 = q_2$ e $x_5 = \\dot{q}_2$</li>
<li>$q_3$ ha ordine 1 $\\Rightarrow$ $x_3 = q_3$</li>
</ul>
<p>$$\\begin{pmatrix} q_1 \\\\ q_2 \\\\ q_3 \\\\ \\dot{q}_1 \\\\ \\dot{q}_2 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\\\ x_5 \\end{pmatrix}$$</p>
<p>Il trucco è che ora $\\dot{x}_4 = \\ddot{q}_1$: le derivate seconde sono ancora raggiungibili, ma <strong>"nascoste"</strong> dentro le derivate prime delle nuove variabili.</p>`
                },
                {
                    subtitle: "Costruzione delle equazioni di stato",
                    content: `<p>Servono 5 equazioni, una per $\\dot{x}_i$ di ciascuna variabile. Si inizia dalle <strong>equazioni ovvie</strong>:</p>
<ul>
<li>$x_1 = q_1$ e $x_4 = \\dot{q}_1$ $\\Rightarrow$ $\\dot{x}_1 = x_4$</li>
<li>$x_2 = q_2$ e $x_5 = \\dot{q}_2$ $\\Rightarrow$ $\\dot{x}_2 = x_5$</li>
</ul>
<p>Per le altre 3 equazioni si usano le equazioni di Eulero-Lagrange. Si prende l'equazione $i$-esima, si cerca la derivata più alta di $q_i$ e la si isola:</p>
<ul>
<li>$\\dot{x}_3 = -\\frac{k_1}{d_1}x_3 + x_5$</li>
<li>$\\dot{x}_4 = -\\frac{k_2}{m_1}x_1 - \\frac{k_3}{m_1}(x_1 - x_2)$</li>
<li>$\\dot{x}_5 = \\frac{k_3}{m_2}(x_1 - x_2) - \\frac{k_1}{m_2}x_3$</li>
</ul>`
                }
            ]
        },
        {
            id: "s02-matrice-A",
            type: "section",
            title: "Passo 8 — Costruzione della Matrice A",
            icon: "🧮",
            content: `<p>Dopo aver trasformato tutte le equazioni, si è pronti a <strong>leggere i coefficienti</strong> per trovare la matrice $A$. Ogni equazione diventa una riga. I coefficienti delle variabili di stato sono le colonne.</p>
<p>$$\\begin{aligned} \\dot{x}_1 &= x_4 \\\\ \\dot{x}_2 &= x_5 \\\\ \\dot{x}_3 &= -\\frac{k_1}{d_1}x_3 + x_5 \\\\ \\dot{x}_4 &= \\frac{-k_2 - k_3}{m_1}x_1 + \\frac{k_3}{m_1}x_2 \\\\ \\dot{x}_5 &= \\frac{k_3}{m_2}x_1 - \\frac{k_3}{m_2}x_2 - \\frac{k_1}{m_2}x_3 \\end{aligned}$$</p>
<p>$$A = \\begin{pmatrix} 0 & 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & -\\frac{k_1}{d_1} & 0 & 1 \\\\ \\frac{-k_2 - k_3}{m_1} & \\frac{k_3}{m_1} & 0 & 0 & 0 \\\\ \\frac{k_3}{m_2} & -\\frac{k_3}{m_2} & -\\frac{k_1}{m_2} & 0 & 0 \\end{pmatrix}$$</p>`,
            formulas: [
                { label: "Struttura matrice A", latex: "\\dot{x} = Ax + Bu" }
            ]
        },
        {
            id: "s02-matrice-B",
            type: "section",
            title: "Passo 9 — Costruzione della Matrice B",
            icon: "📥",
            content: `<p>$B$ è una matrice con <strong>tante righe quante sono le equazioni</strong> ricavate (indicizzate da $\\dot{x}_1, \\dots, \\dot{x}_n$) e <strong>tante colonne quante sono le forze esterne</strong> $u_1, \\dots, u_m$.</p>
<p>In questo caso <strong>non ci sono forze esterne</strong>, quindi l'equazione diventa semplicemente $\\dot{x} = Ax$ e:</p>
<p>$$B = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$</p>`
        },
        {
            id: "s02-matrici-CD",
            type: "section",
            title: "Passo 10 — Matrici C e D (Uscita)",
            icon: "📤",
            content: `<p>Se il testo definisce $y(t)$ come combinazione di $q$ e $\\dot{q}$, allora dobbiamo scrivere anche le matrici $C$ e $D$ per completare il modello:</p>
<p>$$y = Cx + Du$$</p>`,
            subsections: [
                {
                    subtitle: "Trovare C",
                    content: `<p>Si sostituisce l'uscita $y$ con le variabili di stato $x$ e poi si leggono i coefficienti. Ci saranno <strong>tante righe quante le $q$ o $\\dot{q}$ presenti in uscita</strong>.</p>`
                },
                {
                    subtitle: "Trovare D",
                    content: `<p>$D$ dice se l'uscita dipende <strong>direttamente dalle forze esterne</strong>, cioè se nella definizione di $y$ compare $u$.</p>
<p><strong>Quasi sempre $D = 0$</strong>, poiché $u$ non comparirà praticamente mai nell'espressione dell'uscita.</p>`
                }
            ],
            formulas: [
                { label: "Equazione di uscita", latex: "y = Cx + Du" }
            ]
        },
        {
            id: "s02-alert-procedura",
            type: "alert_box",
            title: "⚠️ Trappole d'esame sulla procedura",
            icon: "⚠️",
            content: `<ul>
<li><strong>Punti liberi dimenticati:</strong> un estremo di molla/smorzatore che non tocca né massa né muro è un grado di libertà in più! Non dimenticarlo.</li>
<li><strong>Ordine delle variabili di stato:</strong> prima tutte le posizioni $q_i$, poi le velocità $\\dot{q}_i$. Se $q_i$ ha ordine 1 non genera una variabile velocità.</li>
<li><strong>Segni nella tabella:</strong> attenzione che $\\frac{\\partial L}{\\partial q_i}$ porta un segno meno nella formula di Eulero-Lagrange: è $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} \\mathbf{-} \\frac{\\partial L}{\\partial q_i} + \\frac{\\partial F}{\\partial \\dot{q}_i} = u_i$. Un errore di segno rovina tutto.</li>
<li><strong>Il muro vale 0:</strong> sia in posizione ($q = 0$) che in velocità ($\\dot{q} = 0$). Non dimenticarlo quando scrivi i contributi di molle e smorzatori.</li>
</ul>`
        },
        {
            id: "s02-riepilogo",
            type: "note_box",
            title: "📋 Riepilogo della Procedura Completa",
            icon: "📋",
            content: `<ol>
<li><strong>Gradi di libertà:</strong> frecce $q_i$ sotto ogni massa + punti liberi.</li>
<li><strong>T:</strong> $\\frac{1}{2}m_i \\dot{q}_i^2$ per ogni massa.</li>
<li><strong>U:</strong> $\\frac{1}{2}k_i(q_A - q_B)^2$ per ogni molla.</li>
<li><strong>F:</strong> $\\frac{1}{2}d_i(\\dot{q}_A - \\dot{q}_B)^2$ per ogni smorzatore.</li>
<li><strong>L:</strong> $L = T - U$.</li>
<li><strong>Tabella:</strong> derivate parziali $\\Rightarrow$ equazioni di Eulero-Lagrange.</li>
<li><strong>Variabili di stato:</strong> ordine massimo di ogni $q_i$ $\\Rightarrow$ numero di variabili necessarie.</li>
<li><strong>Equazioni ovvie + isolamento:</strong> $\\dot{x}_i = \\dots$</li>
<li><strong>Matrice A:</strong> leggere i coefficienti dalle equazioni.</li>
<li><strong>Matrice B:</strong> coefficienti delle forze esterne.</li>
<li><strong>Matrici C e D:</strong> dall'equazione di uscita $y$.</li>
</ol>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Come si individuano i gradi di libertà di un sistema meccanico?",
            back: "Si assegna una freccia $q_i$ ad ogni massa (da sinistra a destra), poi si cercano i <strong>punti liberi</strong>: estremi di molle o smorzatori che non toccano né una massa né il muro. Il numero totale di frecce è il numero di gradi di libertà."
        },
        {
            type: "formula",
            front: "Come si scrivono le energie T, U e F per un sistema meccanico?",
            back: "$T = \\sum \\frac{1}{2}m_i \\dot{q}_i^2$ (una per massa)<br>$U = \\sum \\frac{1}{2}k_i(q_A - q_B)^2$ (una per molla)<br>$F = \\sum \\frac{1}{2}d_i(\\dot{q}_A - \\dot{q}_B)^2$ (una per smorzatore)<br>Dove $A$ e $B$ sono gli estremi dell'elemento. Il muro ha posizione e velocità $= 0$."
        },
        {
            type: "formula",
            front: "Qual è l'equazione di Eulero-Lagrange usata nella tabella?",
            back: "$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} + \\frac{\\partial F}{\\partial \\dot{q}_i} = u_i$$<br>dove $L = T - U$, $F$ è la funzione di dissipazione e $u_i$ è la forza esterna sul nodo $i$."
        },
        {
            type: "domanda",
            front: "Come si scelgono le variabili di stato a partire dalle equazioni di Eulero-Lagrange?",
            back: "Si guarda l'<strong>ordine massimo di derivazione</strong> di ogni $q_i$. Se è ordine 2, servono 2 variabili ($x_j = q_i$ e $x_k = \\dot{q}_i$). Se è ordine 1, basta 1 variabile ($x_j = q_i$). Si elencano prima tutte le posizioni, poi tutte le velocità."
        },
        {
            type: "dimostrazione",
            front: "Come si ricavano le equazioni di stato una volta scelte le variabili?",
            back: "1. <strong>Equazioni ovvie:</strong> se $x_j = q_i$ e $x_k = \\dot{q}_i$, allora $\\dot{x}_j = x_k$.<br>2. <strong>Equazioni da Eulero-Lagrange:</strong> si prende l'equazione $i$-esima, si isola la derivata più alta di $q_i$ e si esprime tutto in funzione delle variabili $x$.<br>Il risultato è un sistema $\\dot{x} = Ax + Bu$."
        },
        {
            type: "domanda",
            front: "Come si costruisce la matrice A?",
            back: "Ogni equazione $\\dot{x}_i = \\dots$ diventa una <strong>riga</strong> della matrice. I <strong>coefficienti</strong> di $x_1, x_2, \\dots, x_n$ in quell'equazione diventano le colonne. Se $x_j$ non compare, il coefficiente è $0$."
        },
        {
            type: "domanda",
            front: "Come si costruisce la matrice B?",
            back: "$B$ ha tante righe quante le variabili di stato e tante colonne quante le forze esterne $u_i$. Ogni elemento indica quanto la forza esterna $u_j$ influenza l'equazione $\\dot{x}_i$. Se non ci sono forze esterne, $B$ è un vettore colonna di zeri."
        },
        {
            type: "tranello",
            front: "Cosa succede se dimentichi un punto libero nei gradi di libertà?",
            back: "Il modello avrà <strong>meno gradi di libertà del dovuto</strong>: mancheranno variabili, le equazioni saranno incomplete e la matrice $A$ avrà dimensioni sbagliate. È un errore grave che invalida tutta la procedura."
        },
        {
            type: "tranello",
            front: "Qual è l'errore più comune nella tabella di Eulero-Lagrange?",
            back: "Sbagliare il <strong>segno</strong>. Nella formula $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} \\mathbf{-} \\frac{\\partial L}{\\partial q_i} + \\frac{\\partial F}{\\partial \\dot{q}_i} = u_i$ c'è un meno davanti alla derivata parziale rispetto a $q_i$. Dimenticarlo porta a equazioni completamente sbagliate."
        },
        {
            type: "domanda",
            front: "Quando servono le matrici C e D?",
            back: "$C$ e $D$ servono quando il problema definisce un'uscita $y(t)$ come combinazione di $q$ e $\\dot{q}$. Si sostituiscono le variabili di stato e si leggono i coefficienti per $C$. $D$ indica se $y$ dipende direttamente da $u$: <strong>quasi sempre $D = 0$</strong>."
        }
    ]
};

