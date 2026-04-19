const LESSON = {
    id: "L18", date: "Lezione 18 — 19 Apr 2026",
    title: "Applicazioni del Teorema di Cramer e Rappresentazioni di Sottospazi",
    abstract: "Come usare la regola di Cramer per risolvere sistemi rettangolari riducendoli a sistemi quadrati, e come passare tra rappresentazione parametrica e cartesiana di un sottospazio vettoriale.",

    sections: [
        {
            id: "s18-cramer-rettangolari",
            type: "section",
            title: "Utilizzo del Teorema di Cramer per Sistemi Rettangolari",
            icon: "🔧",
            content: `<p>In questa sezione vediamo come applicare la <strong>regola di Cramer</strong> per risolvere sistemi lineari <strong>non quadrati</strong> (rettangolari). L'idea fondamentale è ridurre il sistema a un sistema quadrato di Cramer, sfruttando i concetti di rango e variabili libere.</p>`,
            subsections: [
                {
                    subtitle: "Esempio completo: sistema 3×4",
                    content: `<p>Risolviamo il seguente sistema lineare, già analizzato nella lezione precedente:</p>
<p>$$\\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\\\ 3x_1 + 4x_4 = 1 \\end{cases}$$</p>
<p>Si tratta di un sistema di 3 equazioni in 4 incognite. La matrice incompleta $A$ e la matrice completa $B$ sono:</p>
<p>$$A = \\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\end{pmatrix} \\qquad B = \\left( \\begin{array}{cccc|c} 2 & 1 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 & 0 \\\\ 3 & 0 & 0 & 4 & 1 \\end{array} \\right)$$</p>
<p>Dalla lezione precedente, sappiamo che il minore $M = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$ ha determinante:</p>
<p>$$\\det(M) = 2 \\cdot (-1) - 1 \\cdot 1 = -2 - 1 = -3 \\neq 0$$</p>
<p>Abbiamo anche verificato che tutti i suoi orlati in $B$ (e quindi anche in $A$) hanno determinante nullo. Pertanto, per il Teorema degli Orlati:</p>
<p>$$\\text{rango}(A) = \\text{rango}(B) = 2$$</p>
<p>Il sistema è <strong>compatibile</strong>. Poiché il rango è 2 e le equazioni sono 3, una delle equazioni è sovrabbondante. In particolare, la terza riga è combinazione lineare delle prime due. Possiamo quindi eliminare la terza equazione:</p>
<p>$$\\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\end{cases}$$</p>
<p>Il minore fondamentale scelto coinvolge le colonne delle variabili $x_1$ e $x_2$: queste sono le <strong>variabili dipendenti</strong>. Le altre, $x_3$ e $x_4$, sono le <strong>variabili libere</strong> (parametri). Spostiamo i termini con $x_3$ e $x_4$ al secondo membro:</p>
<p>$$\\begin{cases} 2x_1 + x_2 = 1 - x_3 - x_4 \\\\ x_1 - x_2 = x_3 - 3x_4 \\end{cases}$$</p>
<p>Questo è ora un <strong>sistema di Cramer</strong> $2 \\times 2$ nelle incognite $x_1$ e $x_2$. La matrice dei coefficienti è $A' = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$ con $\\det(A') = -3$.</p>`
                },
                {
                    subtitle: "Calcolo di x₁ con Cramer",
                    content: `<p>Applichiamo la regola di Cramer per $x_1$. Sostituiamo la prima colonna di $A'$ con il vettore dei termini noti:</p>
<p>$$x_1 = \\frac{\\det \\begin{pmatrix} 1 - x_3 - x_4 & 1 \\\\ x_3 - 3x_4 & -1 \\end{pmatrix}}{\\det(A')}$$</p>
<p>Calcoliamo il determinante al numeratore usando la formula $\\det = ad - bc$:</p>
<p>$$= (1 - x_3 - x_4)(-1) - (1)(x_3 - 3x_4)$$</p>
<p>$$= -(1 - x_3 - x_4) - (x_3 - 3x_4)$$</p>
<p>$$= -1 + x_3 + x_4 - x_3 + 3x_4 = 4x_4 - 1$$</p>
<p>Quindi:</p>
<p>$$x_1 = \\frac{4x_4 - 1}{-3} = \\frac{1 - 4x_4}{3}$$</p>`
                },
                {
                    subtitle: "Calcolo di x₂ con Cramer",
                    content: `<p>Sostituiamo la seconda colonna di $A'$ con il vettore dei termini noti:</p>
<p>$$x_2 = \\frac{\\det \\begin{pmatrix} 2 & 1 - x_3 - x_4 \\\\ 1 & x_3 - 3x_4 \\end{pmatrix}}{\\det(A')}$$</p>
<p>Calcoliamo il determinante al numeratore ($ad - bc$):</p>
<p>$$= 2(x_3 - 3x_4) - 1(1 - x_3 - x_4)$$</p>
<p>$$= 2x_3 - 6x_4 - 1 + x_3 + x_4 = 3x_3 - 5x_4 - 1$$</p>
<p>Quindi:</p>
<p>$$x_2 = \\frac{3x_3 - 5x_4 - 1}{-3} = \\frac{1 - 3x_3 + 5x_4}{3}$$</p>`
                },
                {
                    subtitle: "Soluzione generale in forma vettoriale",
                    content: `<p>Le soluzioni del sistema sono date in forma parametrica, con $x_3$ e $x_4$ come parametri liberi:</p>
<p>$$\\begin{cases} x_1 = \\frac{1}{3} - \\frac{4}{3}x_4 \\\\ x_2 = \\frac{1}{3} - x_3 + \\frac{5}{3}x_4 \\\\ x_3 = x_3 \\\\ x_4 = x_4 \\end{cases}$$</p>
<p>In forma vettoriale, separando la <strong>soluzione particolare</strong> dallo <strong>spazio delle soluzioni omogenee</strong>:</p>
<p>$$\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{pmatrix} = \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 0 \\\\ 0 \\end{pmatrix} + x_3 \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix} + x_4 \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>Questo ci dà tutte le $\\infty^{n-p} = \\infty^{4-2} = \\infty^2$ soluzioni del sistema.</p>`
                }
            ]
        },
        {
            id: "s18-algoritmo-cramer",
            type: "note_box",
            title: "Algoritmo Generale: Cramer per Sistemi Rettangolari",
            icon: "📋",
            content: `<p>Dato un sistema lineare $S$ di $m$ equazioni in $n$ incognite, $A\\vec{x} = \\vec{b}$:</p>
<ol>
<li><strong>Calcolo del rango:</strong> si calcola il rango $p$ di $A$ e di $B = (A|\\vec{b})$. Se $\\text{rango}(A) \\neq \\text{rango}(B)$, il sistema è <strong>incompatibile</strong>: ci si ferma.</li>
<li><strong>Compatibilità:</strong> se $\\text{rango}(A) = \\text{rango}(B) = p$, il sistema è compatibile.</li>
<li><strong>Minore fondamentale:</strong> si individua un minore $M$ di ordine $p$ nella matrice $A$ con $\\det(M) \\neq 0$. (Un minore fondamentale è un minore di ordine $p$ = rango con determinante non nullo; la sua esistenza è garantita dalla definizione stessa di rango.)</li>
<li><strong>Eliminazione equazioni:</strong> si eliminano le $m - p$ equazioni che non concorrono a formare il minore fondamentale (equazioni sovrabbondanti). Si ottiene un sistema ridotto $S'$ di $p$ equazioni in $n$ incognite.</li>
<li><strong>Variabili dipendenti/libere:</strong> le $p$ variabili corrispondenti alle colonne di $M$ sono le <strong>variabili dipendenti</strong>. Le restanti $n - p$ variabili sono le <strong>variabili libere</strong> (parametri).</li>
<li><strong>Riordino:</strong> si spostano i termini contenenti le variabili libere al secondo membro.</li>
<li><strong>Sistema di Cramer:</strong> si ottiene un sistema $p \\times p$ nelle variabili dipendenti, i cui termini noti dipendono dalle variabili libere.</li>
<li><strong>Soluzione:</strong> si risolve con la regola di Cramer, ottenendo le espressioni per le variabili dipendenti in funzione delle variabili libere.</li>
</ol>`
        },
        {
            id: "s18-rappresentazioni",
            type: "section",
            title: "Rappresentazione Cartesiana e Parametrica di un Sottospazio",
            icon: "📐",
            content: `<p>Un sistema lineare omogeneo $A\\vec{x} = \\vec{0}$ ha come insieme delle soluzioni un <strong>sottospazio vettoriale</strong>. Questo ci permette di definire due modi duali per descrivere un sottospazio.</p>`,
            subsections: [
                {
                    subtitle: "Rappresentazione Cartesiana",
                    content: `<p>Un sistema di equazioni lineari omogenee $S$ si dice una <strong>rappresentazione cartesiana</strong> di un sottospazio vettoriale $U$ se l'insieme delle soluzioni di $S$ coincide con $U$:</p>
<p>$$U = \\text{Sol}(S)$$</p>
<p>In altre parole, un vettore $\\vec{x}$ appartiene a $U$ se e solo se soddisfa tutte le equazioni del sistema $S$.</p>`
                },
                {
                    subtitle: "Rappresentazione Parametrica",
                    content: `<p>Sia $U$ un sottospazio vettoriale con base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$. L'espressione del generico vettore $\\vec{u} \\in U$ come combinazione lineare:</p>
<p>$$\\vec{u} = \\lambda_1 \\vec{u}_1 + \\lambda_2 \\vec{u}_2 + \\dots + \\lambda_h \\vec{u}_h$$</p>
<p>al variare dei parametri $\\lambda_1, \\dots, \\lambda_h \\in \\mathbb{R}$, si dice una <strong>rappresentazione parametrica</strong> di $U$.</p>`
                },
                {
                    subtitle: "I due problemi fondamentali",
                    content: `<p>Si presentano due problemi fondamentali di conversione:</p>
<ol>
<li><strong>Da cartesiana a parametrica:</strong> trovare una base del sottospazio a partire dalle equazioni.</li>
<li><strong>Da parametrica a cartesiana:</strong> trovare le equazioni a partire dalla base.</li>
</ol>`
                }
            ]
        },
        {
            id: "s18-cart-a-param",
            type: "section",
            title: "Dalla Rappresentazione Cartesiana alla Parametrica",
            icon: "➡️",
            content: `<p>Questo problema è già stato ampiamente trattato nelle lezioni precedenti. Passare da una rappresentazione cartesiana a una parametrica significa semplicemente <strong>risolvere il sistema lineare omogeneo</strong>.</p>
<p>La soluzione generale del sistema, espressa in funzione delle variabili libere, è esattamente la rappresentazione parametrica del sottospazio delle soluzioni. I vettori che moltiplicano i parametri liberi formano una base per il sottospazio.</p>`,
            subsections: [
                {
                    subtitle: "Micro-esempio di riepilogo",
                    content: `<p>Ad esempio, consideriamo il sistema omogeneo in $\\mathbb{R}^4$:</p>
<p>$$\\begin{cases} x - z = 0 \\\\ y - t = 0 \\end{cases}$$</p>
<p>La soluzione è $x = z$, $y = t$, con $z$ e $t$ parametri liberi. Quindi la rappresentazione parametrica è:</p>
<p>$$\\begin{pmatrix} x \\\\ y \\\\ z \\\\ t \\end{pmatrix} = z \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>I vettori $(1,0,1,0)$ e $(0,1,0,1)$ formano una base del sottospazio.</p>`
                }
            ]
        },
        {
            id: "s18-param-a-cart",
            type: "section",
            title: "Dalla Rappresentazione Parametrica alla Cartesiana",
            icon: "⬅️",
            content: `<p>Questo è il problema inverso e più complesso. Data una base di un sottospazio, vogliamo trovare un sistema di equazioni lineari omogenee il cui spazio delle soluzioni sia esattamente quel sottospazio.</p>
<p>L'idea chiave è la seguente: un vettore $\\vec{x}$ appartiene a $U = \\text{Span}(\\vec{u}_1, \\dots, \\vec{u}_h)$ se e solo se è combinazione lineare dei vettori della base. Cioè il sistema $\\lambda_1 \\vec{u}_1 + \\dots + \\lambda_h \\vec{u}_h = \\vec{x}$ ha soluzione. Questo equivale a dire che <strong>$\\vec{x}$ non aggiunge rango</strong> alla matrice dei vettori della base, ovvero:</p>
<p>$$\\vec{x} \\in U \\iff \\text{rango}(\\vec{u}_1, \\dots, \\vec{u}_h, \\vec{x}) = h$$</p>
<p>In altre parole, i vettori $\\{\\vec{u}_1, \\dots, \\vec{u}_h, \\vec{x}\\}$ sono <strong>linearmente dipendenti</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Esempio: sottospazio di ℝ⁴",
                    content: `<p>Sia $U$ il sottospazio di $\\mathbb{R}^4$ generato dai vettori:</p>
<p>$$\\vec{u}_1 = (1, 0, 1, 0) \\qquad \\vec{u}_2 = (0, 1, 0, 1)$$</p>
<p>Questi sono linearmente indipendenti, quindi formano una base per $U$ e $\\dim(U) = 2$.</p>
<p>Un generico vettore $\\vec{x} = (x, y, z, t) \\in \\mathbb{R}^4$ appartiene a $U$ se e solo se $\\vec{x}$ è combinazione lineare di $\\vec{u}_1$ e $\\vec{u}_2$. Poiché $\\{\\vec{u}_1, \\vec{u}_2\\}$ è una base di $U$, questo equivale a dire che il sistema $\\lambda_1 \\vec{u}_1 + \\lambda_2 \\vec{u}_2 = \\vec{x}$ ammette soluzione, cioè $\\vec{x}$ non aggiunge rango alla matrice dei generatori. La condizione è:</p>
<p>$$\\text{rango} \\begin{pmatrix} 1 & 0 & x \\\\ 0 & 1 & y \\\\ 1 & 0 & z \\\\ 0 & 1 & t \\end{pmatrix} = 2$$</p>`
                },
                {
                    subtitle: "Scelta del minore e calcolo degli orlati",
                    content: `<p>Per imporre questa condizione, usiamo il <strong>Teorema degli Orlati</strong>. Scegliamo un minore di ordine 2 con determinante non nullo dalle prime 2 colonne. Il minore in alto a sinistra:</p>
<p>$$\\det \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1 \\neq 0$$</p>
<p>Il rango della matrice sarà 2 se e solo se <strong>tutti i suoi orlati di ordine 3</strong> hanno determinante nullo. Ci sono due orlati possibili (aggiungendo la terza o la quarta riga).</p>`
                },
                {
                    subtitle: "Orlato 1: aggiungendo la terza riga",
                    content: `<p>Orliamo con la terza riga e la terza colonna:</p>
<p>$$\\det \\begin{pmatrix} 1 & 0 & x \\\\ 0 & 1 & y \\\\ 1 & 0 & z \\end{pmatrix}$$</p>
<p>Sviluppiamo con Laplace <strong>lungo la prima riga</strong>:</p>
<p>$$= 1 \\cdot \\det \\begin{pmatrix} 1 & y \\\\ 0 & z \\end{pmatrix} - 0 \\cdot \\det \\begin{pmatrix} 0 & y \\\\ 1 & z \\end{pmatrix} + x \\cdot \\det \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$</p>
<p>$$= 1 \\cdot (1 \\cdot z - y \\cdot 0) - 0 + x \\cdot (0 \\cdot 0 - 1 \\cdot 1)$$</p>
<p>$$= z + x \\cdot (-1) = z - x$$</p>
<p>Imponendo il determinante nullo, otteniamo la prima equazione: $x - z = 0$.</p>`
                },
                {
                    subtitle: "Orlato 2: aggiungendo la quarta riga",
                    content: `<p>Orliamo con la quarta riga e la terza colonna:</p>
<p>$$\\det \\begin{pmatrix} 1 & 0 & x \\\\ 0 & 1 & y \\\\ 0 & 1 & t \\end{pmatrix}$$</p>
<p>Sviluppiamo con Laplace <strong>lungo la prima riga</strong>:</p>
<p>$$= 1 \\cdot \\det \\begin{pmatrix} 1 & y \\\\ 1 & t \\end{pmatrix} - 0 \\cdot \\det \\begin{pmatrix} 0 & y \\\\ 0 & t \\end{pmatrix} + x \\cdot \\det \\begin{pmatrix} 0 & 1 \\\\ 0 & 1 \\end{pmatrix}$$</p>
<p>$$= 1 \\cdot (t - y) - 0 + x \\cdot (0 - 0) = t - y$$</p>
<p>Imponendo il determinante nullo, otteniamo la seconda equazione: $y - t = 0$.</p>`
                },
                {
                    subtitle: "Risultato: rappresentazione cartesiana",
                    content: `<p>La <strong>rappresentazione cartesiana</strong> di $U$ è quindi:</p>
<p>$$\\begin{cases} x - z = 0 \\\\ y - t = 0 \\end{cases}$$</p>
<p>Verifica: il sottospazio ha dimensione $h = 2$ in $\\mathbb{R}^4$ ($n = 4$), e abbiamo ottenuto $n - h = 4 - 2 = 2$ equazioni indipendenti. ✓</p>`
                }
            ]
        },
        {
            id: "s18-codimensione",
            type: "alert_box",
            title: "Numero di equazioni e codimensione",
            icon: "⚠️",
            content: `<p>Dato un sottospazio $U$ di $\\mathbb{R}^n$ di dimensione $h$, la sua rappresentazione cartesiana sarà un sistema di <strong>$n - h$ equazioni</strong> lineari omogenee indipendenti.</p>
<p>Il numero $n - h$ si chiama <strong>codimensione</strong> di $U$ in $\\mathbb{R}^n$: è il "numero di gradi di libertà persi" rispetto allo spazio ambiente.</p>
<p>Questo è un ottimo strumento di verifica: se trovi un numero diverso di equazioni indipendenti, hai fatto un errore!</p>`
        },
        {
            id: "s18-algoritmo-param-cart",
            type: "note_box",
            title: "Algoritmo Generale: da Parametrica a Cartesiana",
            icon: "📝",
            content: `<p>Sia $U$ un sottospazio di $\\mathbb{R}^n$ con base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$. Per trovare la rappresentazione cartesiana:</p>
<ol>
<li><strong>Vettore generico:</strong> si considera $\\vec{x} = (x_1, \\dots, x_n) \\in \\mathbb{R}^n$.</li>
<li><strong>Costruzione della matrice:</strong> si costruisce la matrice $M$ che ha come colonne i vettori della base e il vettore $\\vec{x}$:
<p>$$M = \\left( \\vec{u}_1 \\mid \\vec{u}_2 \\mid \\cdots \\mid \\vec{u}_h \\mid \\vec{x} \\right) \\quad \\text{dimensioni } n \\times (h+1)$$</p></li>
<li><strong>Condizione di appartenenza:</strong> $\\vec{x} \\in U$ se e solo se $\\text{rango}(M) = h$ (aggiungere $\\vec{x}$ non aumenta il rango).</li>
<li><strong>Minore fondamentale:</strong> si sceglie un minore $M_h$ di ordine $h$ con $\\det \\neq 0$ dalle prime $h$ colonne (esiste perché i vettori formano una base).</li>
<li><strong>Orlati:</strong> si calcolano i determinanti di tutti gli orlati $(h+1) \\times (h+1)$ di $M_h$ e si impongono uguali a zero.</li>
<li><strong>Risultato:</strong> le equazioni ottenute formano la rappresentazione cartesiana di $U$. Il numero di equazioni indipendenti sarà $n - h$ (la codimensione).</li>
</ol>`
        },
        {
            id: "s18-orale-riepilogo",
            type: "oral_box",
            title: "Domande tipiche d'esame su questo argomento",
            icon: "🎤",
            content: `<p>Il professore potrebbe chiedere:</p>
<ul>
<li>"Dato un sottospazio in forma parametrica, trovarne la rappresentazione cartesiana."</li>
<li>"Spiegare il procedimento che porta dalla rappresentazione parametrica alla cartesiana, giustificando la condizione sul rango."</li>
<li>"Perché il numero di equazioni cartesiane è $n - h$?"</li>
<li>"Come si applica la regola di Cramer a un sistema rettangolare?"</li>
</ul>
<p><strong>Attenzione:</strong> all'orale è fondamentale saper giustificare <em>perché</em> la dipendenza lineare di $\\vec{x}$ dai vettori della base equivale all'appartenenza al sottospazio.</p>`
        }
    ],

    oral_cards: [
        {
            type: "domanda",
            front: "Come si applica la regola di Cramer a un sistema lineare rettangolare (non quadrato)?",
            back: "Si trova il rango $p$ di $A$ e $B$; se sono uguali, si sceglie un minore fondamentale $p \\times p$ con $\\det \\neq 0$. Si eliminano le $m - p$ equazioni sovrabbondanti, si pongono le $n - p$ variabili non coinvolte nel minore come parametri liberi e si portano al secondo membro. Si ottiene un sistema di Cramer $p \\times p$ nelle variabili dipendenti, che si risolve con la regola di Cramer."
        },
        {
            type: "definizione",
            front: "Che cos'è la rappresentazione cartesiana di un sottospazio vettoriale $U$?",
            back: "È un sistema di equazioni lineari omogenee $S$ tale che $U = \\text{Sol}(S)$, cioè un vettore $\\vec{x}$ appartiene a $U$ se e solo se soddisfa tutte le equazioni di $S$."
        },
        {
            type: "definizione",
            front: "Che cos'è la rappresentazione parametrica di un sottospazio vettoriale $U$?",
            back: "Data una base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$ di $U$, la rappresentazione parametrica è $\\vec{u} = \\lambda_1 \\vec{u}_1 + \\dots + \\lambda_h \\vec{u}_h$ al variare di $\\lambda_1, \\dots, \\lambda_h \\in \\mathbb{R}$."
        },
        {
            type: "domanda",
            front: "Come si passa dalla rappresentazione cartesiana alla parametrica?",
            back: "Si risolve il sistema lineare omogeneo. La soluzione generale, espressa in funzione delle variabili libere, è la rappresentazione parametrica. I vettori che moltiplicano i parametri liberi formano una base del sottospazio."
        },
        {
            type: "dimostrazione",
            front: "Come si passa dalla rappresentazione parametrica alla cartesiana? Descrivere l'algoritmo.",
            back: "Data una base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$, si costruisce la matrice $M = (\\vec{u}_1 | \\cdots | \\vec{u}_h | \\vec{x})$ di dimensioni $n \\times (h+1)$. La condizione $\\vec{x} \\in U$ equivale a $\\text{rango}(M) = h$. Si sceglie un minore $h \\times h$ con $\\det \\neq 0$ dalle prime $h$ colonne, poi si impone che tutti gli orlati $(h+1) \\times (h+1)$ abbiano determinante nullo. Le equazioni ottenute (saranno $n - h$ indipendenti) formano la rappresentazione cartesiana."
        },
        {
            type: "domanda",
            front: "Perché $\\vec{x} \\in U$ equivale a $\\text{rango}(\\vec{u}_1, \\dots, \\vec{u}_h, \\vec{x}) = h$?",
            back: "Poiché $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$ è una base di $U$, il loro rango è $h$. $\\vec{x} \\in U$ se e solo se $\\vec{x}$ è combinazione lineare della base, cioè il sistema $\\lambda_1 \\vec{u}_1 + \\dots + \\lambda_h \\vec{u}_h = \\vec{x}$ ha soluzione. Ciò accade se e solo se aggiungere $\\vec{x}$ come colonna non aumenta il rango, cioè $\\text{rango}(\\vec{u}_1, \\dots, \\vec{u}_h, \\vec{x}) = h$."
        },
        {
            type: "formula",
            front: "Quante equazioni indipendenti ha la rappresentazione cartesiana di un sottospazio $U$ di dimensione $h$ in $\\mathbb{R}^n$?",
            back: "Esattamente $n - h$ equazioni indipendenti. Questo numero si chiama **codimensione** di $U$ in $\\mathbb{R}^n$: $\\text{codim}(U) = n - \\dim(U) = n - h$."
        },
        {
            type: "tranello",
            front: "Un errore comune: confondere variabili dipendenti e libere nella regola di Cramer per sistemi rettangolari.",
            back: "Le variabili **dipendenti** sono quelle corrispondenti alle colonne del minore fondamentale (sono $p$, il rango). Le variabili **libere** sono le restanti $n - p$ variabili, che diventano parametri. Le variabili dipendenti si esprimono IN FUNZIONE delle libere, non viceversa! La scelta del minore fondamentale determina quali variabili sono dipendenti."
        },
        {
            type: "tranello",
            front: "Cosa succede se si sceglie un minore fondamentale diverso nel Teorema di Cramer per sistemi rettangolari?",
            back: "La forma della soluzione cambia (cambiano le variabili dipendenti e libere), ma l'**insieme delle soluzioni** resta lo stesso. Scegliere un minore diverso equivale a parametrizzare lo stesso sottospazio in modo diverso. Il risultato finale è identico."
        },
        {
            type: "domanda",
            front: "Cos'è un minore fondamentale e perché esiste sempre?",
            back: "Un minore fondamentale è un minore di ordine $p$ (= rango della matrice) con determinante non nullo. La sua esistenza è garantita dalla **definizione stessa di rango**: il rango $p$ è il massimo ordine di un minore con determinante non nullo, quindi esiste almeno un minore di ordine $p$ con $\\det \\neq 0$."
        }
    ]
};

