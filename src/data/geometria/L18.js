const LESSON = {
    id: "L18", date: "Lezione 18 — 16 Apr 2026",
    title: "Sistemi Lineari Rettangolari e Rappresentazioni di Sottospazi",
    abstract: "Come usare Cramer anche su sistemi non quadrati: riduzione tramite minore fondamentale, variabili libere come parametri. Rappresentazioni cartesiane e parametriche di sottospazi vettoriali e algoritmi per passare dall'una all'altra.",

    sections: [
        {
            id: "s18-cramer-rettangolari",
            type: "section",
            title: "Cramer per Sistemi Rettangolari",
            icon: "🔧",
            content: `<p>Il Teorema di Cramer si applica direttamente solo a sistemi quadrati ($n$ equazioni, $n$ incognite, determinante non nullo). Ma possiamo estenderne l'uso a <strong>sistemi rettangolari</strong> ($m$ equazioni, $n$ incognite con $m \\neq n$), a patto che siano compatibili.</p>
<p>La strategia: <strong>ridurre</strong> il sistema rettangolare a un sistema di Cramer equivalente, trattando alcune incognite come parametri.</p>`,
            subsections: [
                {
                    subtitle: "Esempio completo: sistema 3×4",
                    content: `<p>Consideriamo il sistema:</p>
<p>$$S: \\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\\\ 3x_1 + 4x_4 = 1 \\end{cases}$$</p>
<p>Questo è un sistema di 3 equazioni in 4 incognite: <strong>non è quadrato</strong>, quindi Cramer non si applica direttamente.</p>

<p><strong>Passo 1 — Analisi del rango e compatibilità.</strong></p>
<p>Scriviamo la matrice incompleta $A$ e la matrice completa $B$:</p>
<p>$$A = \\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\end{pmatrix}$$</p>
<p>Il minore $M$ formato dalle prime due righe e dalle prime due colonne ha determinante non nullo:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} = -2 - 1 = -3 \\neq 0$$</p>
<p>Questo è un minore fondamentale di ordine 2. Per verificare che il rango non sia 3, calcoliamo il minore $3 \\times 3$ formato dalle colonne 1, 2, 3:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 3 & 0 & 0 \\end{pmatrix} = 2(0) - 1(0 - (-3)) + 1(0 - (-3)) = 0 - 3 + 3 = 0$$</p>
<p>Analogamente si verifica che tutti gli altri minori $3 \\times 3$ di $A$ hanno determinante nullo (e lo stesso vale per gli orlati della matrice completa $B$). Dunque $\\text{rango}(A) = \\text{rango}(B) = 2$.</p>
<p>Per il <strong>Teorema di Rouché-Capelli</strong>, il sistema è compatibile.</p>

<p><strong>Passo 2 — Riduzione del sistema.</strong></p>
<p>Il rango è 2 e il minore fondamentale coinvolge le prime due righe: la terza riga è <strong>sovrabbondante</strong>. Verifichiamolo: sommando la prima e la seconda equazione:</p>
<p>$$(2x_1 + x_2 + x_3 + x_4) + (x_1 - x_2 - x_3 + 3x_4) = 1 + 0 \\;\\Rightarrow\\; 3x_1 + 4x_4 = 1$$</p>
<p>che è esattamente la terza equazione. Il sistema è equivalente a:</p>
<p>$$S': \\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\end{cases}$$</p>

<p><strong>Passo 3 — Riorganizzazione come sistema di Cramer.</strong></p>
<p>Il sistema $S'$ ha 2 equazioni e 4 incognite. Le colonne del minore fondamentale corrispondono a $x_1$ e $x_2$: queste sono le <strong>incognite principali</strong>. Le altre, $x_3$ e $x_4$, sono i <strong>parametri liberi</strong> ($n - p = 4 - 2 = 2$). Spostiamo i termini con $x_3$ e $x_4$ al secondo membro:</p>
<p>$$\\begin{cases} 2x_1 + x_2 = 1 - x_3 - x_4 \\\\ x_1 - x_2 = x_3 - 3x_4 \\end{cases}$$</p>
<p>Ora abbiamo un sistema di <strong>Cramer $2 \\times 2$</strong> nelle incognite $x_1, x_2$, con matrice dei coefficienti uguale al minore fondamentale (determinante $-3$). Per ogni scelta dei parametri $x_3, x_4$, il sistema ha soluzione unica. Poiché ci sono 2 parametri liberi, il sistema avrà $\\infty^2$ soluzioni.</p>

<p><strong>Passo 4 — Risoluzione con la regola di Cramer.</strong></p>
<p>Per $x_1$:</p>
<p>$$x_1 = \\frac{1}{-3} \\det \\begin{pmatrix} 1 - x_3 - x_4 & 1 \\\\ x_3 - 3x_4 & -1 \\end{pmatrix}$$</p>
<p>$$\\det(A_1) = (1 - x_3 - x_4)(-1) - 1(x_3 - 3x_4) = -1 + x_3 + x_4 - x_3 + 3x_4 = 4x_4 - 1$$</p>
<p>$$x_1 = \\frac{4x_4 - 1}{-3} = \\frac{1 - 4x_4}{3}$$</p>
<p>Per $x_2$:</p>
<p>$$x_2 = \\frac{1}{-3} \\det \\begin{pmatrix} 2 & 1 - x_3 - x_4 \\\\ 1 & x_3 - 3x_4 \\end{pmatrix}$$</p>
<p>$$\\det(A_2) = 2(x_3 - 3x_4) - 1(1 - x_3 - x_4) = 2x_3 - 6x_4 - 1 + x_3 + x_4 = 3x_3 - 5x_4 - 1$$</p>
<p>$$x_2 = \\frac{3x_3 - 5x_4 - 1}{-3} = \\frac{-3x_3 + 5x_4 + 1}{3}$$</p>

<p><strong>Passo 5 — Soluzione parametrica.</strong></p>
<p>$$\\begin{cases} x_1 = \\frac{1}{3} - \\frac{4}{3}x_4 \\\\[4pt] x_2 = \\frac{1}{3} - x_3 + \\frac{5}{3}x_4 \\\\[4pt] x_3 = x_3 \\quad (\\text{parametro libero}) \\\\[4pt] x_4 = x_4 \\quad (\\text{parametro libero}) \\end{cases}$$</p>

<p><strong>Passo 6 — Forma vettoriale.</strong></p>
<p>Separando la parte costante dai coefficienti dei parametri:</p>
<p>$$\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{pmatrix} = \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 0 \\\\ 0 \\end{pmatrix} + x_3 \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix} + x_4 \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>Questa forma evidenzia che lo <strong>spazio delle soluzioni è uno spazio affine</strong>: una soluzione particolare più un sottospazio vettoriale di dimensione 2.</p>`
                }
            ],
            formulas: [
                { label: "Determinante minore fondamentale", latex: "\\det \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} = -3" },
                { label: "Soluzione vettoriale", latex: "\\boldsymbol{x} = \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 0 \\\\ 0 \\end{pmatrix} + x_3 \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix} + x_4 \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}" }
            ]
        },
        {
            id: "s18-algoritmo-rettangolari",
            type: "alert_box",
            title: "Algoritmo Generale per Sistemi Rettangolari",
            icon: "📋",
            content: `<p>Il procedimento dell'esempio precedente si generalizza a <strong>qualsiasi sistema lineare</strong> $S: A\\boldsymbol{x} = \\boldsymbol{b}$ di $m$ equazioni in $n$ incognite. Questo è l'algoritmo centrale della lezione, da saper applicare meccanicamente.</p>
<p><strong>1. Verifica compatibilità:</strong> Calcolare $\\text{rango}(A)$ e $\\text{rango}(B)$ (matrice completa). Se $\\text{rango}(A) \\neq \\text{rango}(B)$, il sistema è <strong>incompatibile</strong> (Rouché-Capelli). Se $\\text{rango}(A) = \\text{rango}(B) = p$, il sistema è compatibile.</p>
<p><strong>2. Individuazione minore fondamentale:</strong> Trovare un minore $M$ di $A$ di ordine $p$ con determinante non nullo.</p>
<p><strong>3. Riduzione del sistema:</strong> Eliminare le $m - p$ equazioni sovrabbondanti (quelle le cui righe non concorrono a formare $M$). Restano $p$ equazioni in $n$ incognite.</p>
<p><strong>4. Scelta variabili libere:</strong> Le $n - p$ incognite che <strong>non</strong> corrispondono alle colonne di $M$ diventano parametri liberi.</p>
<p><strong>5. Riorganizzazione:</strong> Spostare i parametri liberi al secondo membro. Si ottiene un sistema quadrato $p \\times p$ la cui matrice dei coefficienti è proprio $M$.</p>
<p><strong>6. Risoluzione con Cramer:</strong> Risolvere il sistema $p \\times p$, esprimendo le $p$ incognite principali in funzione degli $n - p$ parametri. Questo fornisce la <strong>rappresentazione parametrica</strong> di tutte le soluzioni.</p>`,
            formulas: [
                { label: "Numero parametri liberi", latex: "\\text{parametri liberi} = n - p" },
                { label: "Cardinalità soluzioni", latex: "\\infty^{n-p} \\text{ soluzioni}" }
            ]
        },
        {
            id: "s18-omogenei-sottospazi",
            type: "section",
            title: "Sistemi Omogenei e Sottospazi Vettoriali",
            icon: "🎯",
            content: `<p>Un sistema lineare $A\\boldsymbol{x} = \\boldsymbol{b}$ si dice <strong>omogeneo</strong> se $\\boldsymbol{b} = \\boldsymbol{0}$. Questa distinzione è cruciale perché determina la struttura geometrica delle soluzioni.</p>`,
            subsections: [
                {
                    subtitle: "Caratterizzazione fondamentale",
                    content: `<p><strong>Proposizione:</strong> L'insieme delle soluzioni di un sistema lineare $A\\boldsymbol{x} = \\boldsymbol{b}$ forma un <strong>sottospazio vettoriale</strong> di $\\mathbb{R}^n$ se e solo se il sistema è omogeneo ($\\boldsymbol{b} = \\boldsymbol{0}$).</p>
<p><strong>Dimostrazione ($\\Rightarrow$):</strong> Se $\\text{Sol}(S)$ è un sottospazio vettoriale, deve contenere $\\boldsymbol{0}$. Sostituendo $\\boldsymbol{x} = \\boldsymbol{0}$ nel sistema: $A\\boldsymbol{0} = \\boldsymbol{b}$, ma $A\\boldsymbol{0} = \\boldsymbol{0}$, quindi $\\boldsymbol{b} = \\boldsymbol{0}$.</p>
<p><strong>Dimostrazione ($\\Leftarrow$):</strong> Se $\\boldsymbol{b} = \\boldsymbol{0}$, verifichiamo le tre proprietà per $U = \\text{Sol}(S)$:</p>
<p><strong>1)</strong> $A\\boldsymbol{0} = \\boldsymbol{0}$ ✓, quindi $\\boldsymbol{0} \\in U$.</p>
<p><strong>2)</strong> Se $\\boldsymbol{x}, \\boldsymbol{y} \\in U$, allora $A(\\boldsymbol{x} + \\boldsymbol{y}) = A\\boldsymbol{x} + A\\boldsymbol{y} = \\boldsymbol{0} + \\boldsymbol{0} = \\boldsymbol{0}$, quindi $\\boldsymbol{x} + \\boldsymbol{y} \\in U$ ✓.</p>
<p><strong>3)</strong> Se $\\boldsymbol{x} \\in U$ e $c \\in \\mathbb{R}$, allora $A(c\\boldsymbol{x}) = c(A\\boldsymbol{x}) = c\\boldsymbol{0} = \\boldsymbol{0}$, quindi $c\\boldsymbol{x} \\in U$ ✓. $\\square$</p>`
                }
            ]
        },
        {
            id: "s18-definizioni-repr",
            type: "section",
            title: "Rappresentazioni Cartesiane e Parametriche",
            icon: "📐",
            content: `<p>Ogni sottospazio vettoriale può essere descritto in due modi equivalenti. Capire la differenza e saper passare dall'uno all'altro è una competenza fondamentale.</p>`,
            subsections: [
                {
                    subtitle: "Rappresentazione Cartesiana",
                    content: `<p>Un sistema lineare omogeneo $S: A\\boldsymbol{x} = \\boldsymbol{0}$ si dice <strong>rappresentazione cartesiana</strong> di un sottospazio vettoriale $U \\subseteq \\mathbb{R}^n$ se:</p>
<p>$$U = \\text{Sol}(S) = \\{\\boldsymbol{x} \\in \\mathbb{R}^n \\mid A\\boldsymbol{x} = \\boldsymbol{0}\\}$$</p>
<p>In pratica, il sottospazio è descritto come l'insieme dei vettori che soddisfano certe <strong>equazioni</strong> (vincoli).</p>`
                },
                {
                    subtitle: "Rappresentazione Parametrica",
                    content: `<p>Sia $U$ un sottospazio vettoriale di $\\mathbb{R}^n$ di dimensione $h$, e sia $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ una <strong>base</strong> di $U$. Una <strong>rappresentazione parametrica</strong> di $U$ è l'applicazione:</p>
<p>$$\\rho(\\lambda_1, \\dots, \\lambda_h) = \\lambda_1 \\boldsymbol{u}_1 + \\lambda_2 \\boldsymbol{u}_2 + \\dots + \\lambda_h \\boldsymbol{u}_h$$</p>
<p>dove $\\lambda_1, \\dots, \\lambda_h$ sono i parametri.</p>
<p><strong>Nota importante:</strong> $\\rho$ è biiettiva <strong>se e solo se</strong> $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ è una base di $U$ (vettori linearmente indipendenti). Se si usasse un sistema di generatori non indipendente, la rappresentazione sarebbe surgettiva ma non iniettiva.</p>
<p>Scrivendo per componenti, se $\\boldsymbol{x} = (x_1, \\dots, x_n)$:</p>
<p>$$\\begin{cases} x_1 = \\lambda_1 u_{11} + \\lambda_2 u_{21} + \\dots + \\lambda_h u_{h1} \\\\ x_2 = \\lambda_1 u_{12} + \\lambda_2 u_{22} + \\dots + \\lambda_h u_{h2} \\\\ \\vdots \\\\ x_n = \\lambda_1 u_{1n} + \\lambda_2 u_{2n} + \\dots + \\lambda_h u_{hn} \\end{cases}$$</p>`
                }
            ],
            table_compare: {
                headers: ["Caratteristica", "Cartesiana", "Parametrica"],
                rows: [
                    ["Forma", "Ax = 0 (equazioni)", "x = λ₁u₁ + ... + λₕuₕ (combinazioni)"],
                    ["Descrive U tramite", "Vincoli che i vettori devono soddisfare", "Generatori con cui costruire i vettori"],
                    ["N. equazioni/parametri", "n − h equazioni indipendenti", "h parametri liberi"],
                    ["Verifica appartenenza", "Semplice: sostituire e controllare", "Richiede risolvere un sistema"],
                    ["Trovare una base", "Richiede risolvere il sistema", "Immediata: i vettori uᵢ"]
                ]
            }
        },
        {
            id: "s18-dimensione-soluzioni",
            type: "section",
            title: "Dimensione dello Spazio delle Soluzioni",
            icon: "📏",
            content: `<p><strong>Proposizione:</strong> Sia $S: A\\boldsymbol{x} = \\boldsymbol{0}$ un sistema lineare omogeneo con $n$ incognite e sia $p = \\text{rango}(A)$. Allora:</p>
<p>$$\\dim(\\text{Sol}(S)) = n - p$$</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Dall'algoritmo di risoluzione, il sistema ridotto ha $p$ equazioni con $p$ incognite principali e $n - p$ parametri liberi. La soluzione generale si scrive:</p>
<p>$$\\boldsymbol{x} = \\lambda_1 \\boldsymbol{v}_1 + \\lambda_2 \\boldsymbol{v}_2 + \\dots + \\lambda_{n-p} \\boldsymbol{v}_{n-p}$$</p>
<p>dove $\\boldsymbol{v}_k$ è il vettore ottenuto ponendo il $k$-esimo parametro libero uguale a 1 e tutti gli altri a 0.</p>
<p><strong>Perché questi vettori formano una base?</strong> Per costruzione, ciascun $\\boldsymbol{v}_k$ ha la componente corrispondente alla $k$-esima variabile libera uguale a 1, mentre tutti gli altri $\\boldsymbol{v}_j$ (con $j \\neq k$) hanno 0 in quella stessa componente. Se $c_1\\boldsymbol{v}_1 + \\dots + c_{n-p}\\boldsymbol{v}_{n-p} = \\boldsymbol{0}$, guardando la componente della $k$-esima variabile libera si ottiene immediatamente $c_k = 0$ per ogni $k$.</p>
<p>Dunque $\\{\\boldsymbol{v}_1, \\dots, \\boldsymbol{v}_{n-p}\\}$ è un sistema di generatori <strong>linearmente indipendente</strong> per $\\text{Sol}(S)$, quindi è una base. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Dimensione spazio soluzioni", latex: "\\dim(\\text{Sol}(S)) = n - p" },
                { label: "Relazione complementare", latex: "h + (n - h) = n" }
            ]
        },
        {
            id: "s18-cartesiano-parametrico",
            type: "section",
            title: "Dal Cartesiano al Parametrico: Esempio",
            icon: "➡️",
            content: `<p>Risolvere un sistema lineare omogeneo (rappresentazione cartesiana) equivale a trovare la rappresentazione parametrica del sottospazio delle soluzioni. Vediamolo con un esempio completo.</p>
<p><em>Nota:</em> in questo esempio usiamo le variabili $(x, y, z, t)$ in luogo della notazione $(x_1, x_2, x_3, x_4)$; le due notazioni sono del tutto equivalenti.</p>`,
            subsections: [
                {
                    subtitle: "Il sistema omogeneo",
                    content: `<p>$$S: \\begin{cases} 2x + y + z + t = 0 \\\\ x - y - z + 3t = 0 \\\\ 3x + 4t = 0 \\\\ x + z + t = 0 \\end{cases}$$</p>
<p>La matrice dei coefficienti è:</p>
<p>$$A = \\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\\\ 1 & 0 & 1 & 1 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Passo 1 — Calcolo del rango",
                    content: `<p>Il minore formato dalle prime due righe e colonne ha determinante:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} = -3 \\neq 0$$</p>
<p>Il rango è almeno 2. Verifichiamo se è almeno 3 calcolando un orlato $3 \\times 3$. Prendiamo le righe 1, 2, 4 e le colonne 1, 2, 3:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 1 & 0 & 1 \\end{pmatrix} = 2(-1 - 0) - 1(1 - (-1)) + 1(0 - (-1)) = -2 - 2 + 1 = -3 \\neq 0$$</p>
<p>Il rango è almeno 3. Verifichiamo se è 4 calcolando $\\det(A)$. Sviluppiamo lungo la seconda colonna:</p>
<p>$$\\det(A) = 1 \\cdot (-1)^{1+2}\\det\\begin{pmatrix}1&-1&3\\\\3&0&4\\\\1&1&1\\end{pmatrix} + (-1)\\cdot(-1)^{2+2}\\det\\begin{pmatrix}2&1&1\\\\3&0&4\\\\1&1&1\\end{pmatrix} + 0 + 0$$</p>
<p>I due determinanti $3 \\times 3$:</p>
<p>$$\\det\\begin{pmatrix}1&-1&3\\\\3&0&4\\\\1&1&1\\end{pmatrix} = 1(0-4)+1(3-4)+3(3-0) = -4 -1 + 9 = 4$$</p>
<p>$$\\det\\begin{pmatrix}2&1&1\\\\3&0&4\\\\1&1&1\\end{pmatrix} = 2(0-4)-1(3-4)+1(3-0) = -8+1+3 = -4$$</p>
<p>Quindi:</p>
<p>$$\\det(A) = 1 \\cdot (-1) \\cdot 4 + (-1) \\cdot 1 \\cdot (-4) = -4 + 4 = 0$$</p>
<p>Poiché esiste un minore $3 \\times 3$ non nullo ma $\\det(A) = 0$, concludiamo: $\\text{rango}(A) = 3$.</p>`
                },
                {
                    subtitle: "Passo 2 — Scelta del minore fondamentale e riduzione",
                    content: `<p>Il minore fondamentale di ordine 3 trovato sopra coinvolge le <strong>righe 1, 2, 4</strong> e le <strong>colonne 1, 2, 3</strong>. La terza equazione ($3x + 4t = 0$) è sovrabbondante e viene eliminata. Il sistema si riduce a:</p>
<p>$$S': \\begin{cases} 2x + y + z + t = 0 \\\\ x - y - z + 3t = 0 \\\\ x + z + t = 0 \\end{cases}$$</p>`
                },
                {
                    subtitle: "Passo 3 — Riorganizzazione e risoluzione con Cramer",
                    content: `<p>Le <strong>variabili principali</strong> (colonne del minore fondamentale) sono $x, y, z$. La <strong>variabile libera</strong> è $t$ ($n - p = 4 - 3 = 1$ parametro). Spostiamo $t$ al secondo membro:</p>
<p>$$\\begin{cases} 2x + y + z = -t \\\\ x - y - z = -3t \\\\ x + z = -t \\end{cases}$$</p>
<p>La matrice dei coefficienti è il minore fondamentale:</p>
<p>$$M = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 1 & 0 & 1 \\end{pmatrix}, \\quad \\det(M) = -3 \\neq 0$$</p>
<p>Applichiamo Cramer. Per $x$:</p>
<p>$$x = \\frac{1}{-3}\\det\\begin{pmatrix} -t & 1 & 1 \\\\ -3t & -1 & -1 \\\\ -t & 0 & 1 \\end{pmatrix}$$</p>
<p>$$= \\frac{1}{-3}\\big[-t(-1-0) - 1(-3t-(-1)(-t)) + 1(0-(-1)(-t))\\big]$$</p>
<p>$$= \\frac{1}{-3}\\big[t - 1(-3t - t) + (0 - t)\\big] = \\frac{1}{-3}\\big[t + 4t - t\\big] = \\frac{4t}{-3} = -\\frac{4}{3}t$$</p>
<p>Per $y$:</p>
<p>$$y = \\frac{1}{-3}\\det\\begin{pmatrix} 2 & -t & 1 \\\\ 1 & -3t & -1 \\\\ 1 & -t & 1 \\end{pmatrix}$$</p>
<p>$$= \\frac{1}{-3}\\big[2(-3t-t) + t(1-(-1)) + 1(-t+3t)\\big] = \\frac{1}{-3}\\big[-8t + 2t + 2t\\big] = \\frac{-4t}{-3} = \\frac{4}{3}t$$</p>
<p>Per $z$:</p>
<p>$$z = \\frac{1}{-3}\\det\\begin{pmatrix} 2 & 1 & -t \\\\ 1 & -1 & -3t \\\\ 1 & 0 & -t \\end{pmatrix}$$</p>
<p>$$= \\frac{1}{-3}\\big[2(t - 0) - 1(-t + 3t) + (-t)(0 + 1)\\big] = \\frac{1}{-3}\\big[2t - 2t - t\\big] = \\frac{-t}{-3} = \\frac{1}{3}t$$</p>`
                },
                {
                    subtitle: "Passo 4 — Soluzione parametrica e base",
                    content: `<p>La soluzione parametrica è:</p>
<p>$$\\begin{cases} x = -\\frac{4}{3}t \\\\[4pt] y = \\frac{4}{3}t \\\\[4pt] z = \\frac{1}{3}t \\\\[4pt] t = t \\quad (\\text{parametro libero}) \\end{cases}$$</p>
<p>La dimensione è $n - p = 4 - 3 = 1$. Ponendo $t = 3$ (per eliminare i denominatori):</p>
<p>$$\\boldsymbol{u}_1 = (-4, 4, 1, 3)$$</p>
<p>Una base per lo spazio delle soluzioni è $\\{(-4, 4, 1, 3)\\}$.</p>
<p><strong>Verifica.</strong> Sostituiamo nel sistema originale (tutte e 4 le equazioni):</p>
<p>$2(-4) + 4 + 1 + 3 = -8 + 8 = 0$ ✓</p>
<p>$(-4) - 4 - 1 + 9 = 0$ ✓</p>
<p>$3(-4) + 12 = 0$ ✓</p>
<p>$(-4) + 1 + 3 = 0$ ✓</p>`
                }
            ],
            formulas: [
                { label: "Rango della matrice", latex: "\\text{rango}(A) = 3" },
                { label: "Dimensione Sol(S)", latex: "\\dim(\\text{Sol}(S)) = 4 - 3 = 1" },
                { label: "Base dello spazio soluzioni", latex: "\\{(-4, 4, 1, 3)\\}" }
            ]
        },
        {
            id: "s18-parametrico-cartesiano",
            type: "section",
            title: "Dal Parametrico al Cartesiano: Algoritmo ed Esempio",
            icon: "⬅️",
            content: `<p>Il passaggio inverso — dalla rappresentazione parametrica a quella cartesiana — richiede un algoritmo specifico basato sul <strong>Teorema degli Orlati</strong>.</p>`,
            subsections: [
                {
                    subtitle: "L'algoritmo",
                    content: `<p>Data una base $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ di un sottospazio $U \\subseteq \\mathbb{R}^n$:</p>
<p><strong>1.</strong> Un generico $\\boldsymbol{x} = (x_1, \\dots, x_n) \\in U$ se e solo se $\\{\\boldsymbol{x}, \\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ è linearmente dipendente.</p>
<p><strong>2.</strong> Costruire la matrice $M$ con colonne $\\boldsymbol{x}, \\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h$ (matrice $n \\times (h+1)$).</p>
<p><strong>3.</strong> La condizione di dipendenza è $\\text{rango}(M) = h$ (non $h+1$).</p>
<p><strong>4.</strong> Poiché $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ è una base, esiste un minore fondamentale di ordine $h$ nelle ultime $h$ colonne con determinante non nullo.</p>
<p><strong>5.</strong> Per il <strong>Teorema degli Orlati</strong>, imporre che tutti i minori di ordine $h+1$ che orlano il minore fondamentale abbiano determinante nullo.</p>
<p><strong>6.</strong> Ogni equazione $\\det(\\text{orlato}) = 0$, sviluppata lungo la colonna di $\\boldsymbol{x}$, produce un'equazione lineare omogenea in $x_1, \\dots, x_n$. L'insieme di queste equazioni è la rappresentazione cartesiana.</p>`
                },
                {
                    subtitle: "Esempio completo",
                    content: `<p>Prendiamo il sottospazio direzionale dell'Esempio 1 (sistema non omogeneo), con base:</p>
<p>$$\\boldsymbol{u}_1 = (0, -1, 1, 0), \\quad \\boldsymbol{u}_2 = (-4/3, 5/3, 0, 1)$$</p>
<p>Per comodità, moltiplichiamo $\\boldsymbol{u}_2$ per 3 (il sottospazio generato non cambia):</p>
<p>$$\\boldsymbol{u}_1 = (0, -1, 1, 0), \\quad \\boldsymbol{u}_2 = (-4, 5, 0, 3)$$</p>

<p><strong>Passo 1.</strong> Costruiamo la matrice $M$ con colonne $\\boldsymbol{x}, \\boldsymbol{u}_1, \\boldsymbol{u}_2$:</p>
<p>$$M = \\begin{pmatrix} x_1 & 0 & -4 \\\\ x_2 & -1 & 5 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 3 \\end{pmatrix}$$</p>

<p><strong>Passo 2.</strong> La base ha $h = 2$ vettori. Cerchiamo un minore fondamentale $2 \\times 2$ nelle ultime due colonne. Prendendo le righe 2 e 3:</p>
<p>$$\\det\\begin{pmatrix} -1 & 5 \\\\ 1 & 0 \\end{pmatrix} = 0 - 5 = -5 \\neq 0$$</p>

<p><strong>Passo 3.</strong> Per il Teorema degli Orlati, $\\text{rango}(M) = 2$ se e solo se tutti i minori $3 \\times 3$ che orlano questo minore hanno determinante nullo. Gli orlati si ottengono aggiungendo la riga 1 o la riga 4 (non nel minore) e la colonna 1 (di $\\boldsymbol{x}$).</p>

<p><strong>Orlato con riga 1:</strong></p>
<p>$$\\det\\begin{pmatrix} x_1 & 0 & -4 \\\\ x_2 & -1 & 5 \\\\ x_3 & 1 & 0 \\end{pmatrix} = 0$$</p>
<p>Sviluppando lungo la prima colonna:</p>
<p>$$x_1(-5) - x_2(0+4) + x_3(0-4) = -5x_1 - 4x_2 - 4x_3 = 0$$</p>
<p>Dividendo per $-1$: $\\;5x_1 + 4x_2 + 4x_3 = 0$.</p>

<p><strong>Orlato con riga 4:</strong></p>
<p>$$\\det\\begin{pmatrix} x_2 & -1 & 5 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 3 \\end{pmatrix} = 0$$</p>
<p>Sviluppando lungo la prima colonna:</p>
<p>$$x_2(3) - x_3(-3-0) + x_4(-5) = 3x_2 + 3x_3 - 5x_4 = 0$$</p>

<p><strong>Risultato:</strong> la rappresentazione cartesiana è:</p>
<p>$$U = \\left\\{\\boldsymbol{x} \\in \\mathbb{R}^4 \\;\\middle|\\; \\begin{cases} 5x_1 + 4x_2 + 4x_3 = 0 \\\\ 3x_2 + 3x_3 - 5x_4 = 0 \\end{cases}\\right\\}$$</p>
<p>Abbiamo $n - h = 4 - 2 = 2$ equazioni linearmente indipendenti, come previsto dal corollario.</p>`
                }
            ],
            formulas: [
                { label: "Condizione di appartenenza", latex: "\\boldsymbol{x} \\in U \\;\\Leftrightarrow\\; \\text{rango}(M) = h" },
                { label: "Equazione cartesiana 1", latex: "5x_1 + 4x_2 + 4x_3 = 0" },
                { label: "Equazione cartesiana 2", latex: "3x_2 + 3x_3 - 5x_4 = 0" }
            ]
        },
        {
            id: "s18-corollario-dualita",
            type: "note_box",
            title: "Dualità Dimensione–Equazioni",
            icon: "💡",
            content: `<p><strong>Corollario:</strong> Un sottospazio vettoriale $U \\subseteq \\mathbb{R}^n$ di dimensione $h$ può essere descritto come l'insieme delle soluzioni di un sistema lineare omogeneo di $n - h$ equazioni linearmente indipendenti.</p>
<p><strong>Intuizione:</strong> ogni equazione lineare omogenea indipendente impone un vincolo che <strong>riduce la dimensione dello spazio di 1</strong>. Partendo da $\\mathbb{R}^n$ (dimensione $n$), per "ritagliare" un sottospazio di dimensione $h$ servono esattamente $n - h$ equazioni indipendenti:</p>
<p>$$\\underbrace{h}_{\\text{dim. di } U} + \\underbrace{(n-h)}_{\\text{n. equazioni}} = n$$</p>
<p><strong>Esempi concreti in $\\mathbb{R}^3$:</strong></p>
<p>• Un <strong>piano</strong> (dim. 2): descritto da $3 - 2 = 1$ equazione (es. $ax + by + cz = 0$).</p>
<p>• Una <strong>retta</strong> (dim. 1): descritta da $3 - 1 = 2$ equazioni (intersezione di due piani).</p>
<p>• L'<strong>origine</strong> (dim. 0): descritta da $3 - 0 = 3$ equazioni indipendenti.</p>`
        },
        {
            id: "s18-trappola-omogeneo",
            type: "oral_box",
            title: "Sottospazio solo se omogeneo!",
            icon: "⚠️",
            content: `<p><strong>Domanda tipica:</strong> "L'insieme delle soluzioni di un sistema lineare è sempre un sottospazio vettoriale?"</p>
<p><strong>Risposta:</strong> <strong>No!</strong> È un sottospazio se e solo se il sistema è omogeneo ($\\boldsymbol{b} = \\boldsymbol{0}$). Se $\\boldsymbol{b} \\neq \\boldsymbol{0}$ e il sistema è compatibile, le soluzioni formano uno <strong>spazio affine</strong> (traslazione di un sottospazio), che non contiene il vettore nullo e quindi non è un sottospazio.</p>
<p>L'esempio del sistema $3 \\times 4$ (primo esempio della lezione) lo mostra chiaramente: le soluzioni hanno la forma "soluzione particolare + sottospazio", non "sottospazio".</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Quando l'insieme delle soluzioni di un sistema lineare è un sottospazio vettoriale?",
            back: "Se e solo se il sistema è <strong>omogeneo</strong> ($A\\boldsymbol{x} = \\boldsymbol{0}$). Se $\\boldsymbol{b} \\neq \\boldsymbol{0}$, le soluzioni non contengono il vettore nullo e quindi non formano un sottospazio."
        },
        {
            type: "formula",
            front: "Qual è la dimensione dello spazio delle soluzioni di un sistema omogeneo $A\\boldsymbol{x} = \\boldsymbol{0}$ con $n$ incognite e $\\text{rango}(A) = p$?",
            back: "$\\dim(\\text{Sol}(S)) = n - p$. I $n - p$ vettori ottenuti ponendo ciascun parametro libero uguale a 1 e gli altri a 0 sono linearmente indipendenti per costruzione e formano una base."
        },
        {
            type: "domanda",
            front: "Descrivi l'algoritmo per risolvere un sistema rettangolare compatibile con la regola di Cramer.",
            back: "1) Verificare compatibilità con Rouché-Capelli: $\\text{rango}(A) = \\text{rango}(B) = p$. 2) Trovare un minore fondamentale $M$ di ordine $p$. 3) Eliminare le $m - p$ equazioni sovrabbondanti. 4) Le $n - p$ incognite fuori dalle colonne di $M$ diventano parametri liberi. 5) Spostare i parametri al secondo membro: si ottiene un sistema di Cramer $p \\times p$. 6) Risolvere con Cramer."
        },
        {
            type: "definizione",
            front: "Qual è la differenza tra rappresentazione cartesiana e parametrica di un sottospazio?",
            back: "<strong>Cartesiana:</strong> $U = \\{\\boldsymbol{x} \\in \\mathbb{R}^n \\mid A\\boldsymbol{x} = \\boldsymbol{0}\\}$ — equazioni che i vettori devono soddisfare. <strong>Parametrica:</strong> $\\boldsymbol{x} = \\lambda_1\\boldsymbol{u}_1 + \\dots + \\lambda_h\\boldsymbol{u}_h$ — combinazioni lineari di una base. Per un sottospazio di dimensione $h$ in $\\mathbb{R}^n$: la cartesiana usa $n - h$ equazioni, la parametrica usa $h$ parametri."
        },
        {
            type: "dimostrazione",
            front: "Come si passa dalla rappresentazione parametrica a quella cartesiana di un sottospazio?",
            back: "Data la base $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$: 1) Costruire la matrice $M$ con colonne $\\boldsymbol{x}, \\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h$ (matrice $n \\times (h+1)$). 2) Trovare un minore fondamentale di ordine $h$ nelle ultime $h$ colonne. 3) Per il Teorema degli Orlati, imporre $\\det(\\text{orlato}) = 0$ per tutti gli orlati di ordine $h+1$. 4) Sviluppando lungo la colonna di $\\boldsymbol{x}$, ogni orlato dà un'equazione lineare omogenea nelle $x_i$."
        },
        {
            type: "tranello",
            front: "Perché non si può applicare direttamente Cramer a un sistema rettangolare?",
            back: "La regola di Cramer richiede un sistema <strong>quadrato</strong> ($n$ equazioni, $n$ incognite) con determinante della matrice dei coefficienti $\\neq 0$. Un sistema rettangolare ha $m \\neq n$: bisogna prima ridurlo eliminando le equazioni sovrabbondanti, poi trattare le variabili extra come parametri per ottenere un sistema quadrato."
        },
        {
            type: "domanda",
            front: "Enuncia il corollario sulla dualità dimensione–equazioni e dai un esempio.",
            back: "Un sottospazio $U \\subseteq \\mathbb{R}^n$ di dimensione $h$ è descritto da $n - h$ equazioni lineari omogenee indipendenti. Ogni equazione indipendente abbassa la dimensione di 1. Esempio: un piano in $\\mathbb{R}^3$ ha dimensione 2 e serve $3 - 2 = 1$ equazione; una retta in $\\mathbb{R}^3$ ha dimensione 1 e servono $3 - 1 = 2$ equazioni."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che l'insieme delle soluzioni di un sistema omogeneo è un sottospazio vettoriale.",
            back: "Sia $U = \\{\\boldsymbol{x} \\mid A\\boldsymbol{x} = \\boldsymbol{0}\\}$. 1) $\\boldsymbol{0} \\in U$: $A\\boldsymbol{0} = \\boldsymbol{0}$ ✓. 2) Chiusura per somma: se $A\\boldsymbol{x} = \\boldsymbol{0}$ e $A\\boldsymbol{y} = \\boldsymbol{0}$, allora $A(\\boldsymbol{x}+\\boldsymbol{y}) = A\\boldsymbol{x} + A\\boldsymbol{y} = \\boldsymbol{0}$ ✓. 3) Chiusura per scalare: $A(c\\boldsymbol{x}) = c(A\\boldsymbol{x}) = c\\boldsymbol{0} = \\boldsymbol{0}$ ✓."
        },
        {
            type: "tranello",
            front: "Nella dimostrazione che $\\dim(\\text{Sol}(S)) = n - p$, perché non basta dire 'ci sono $n - p$ parametri liberi'?",
            back: "Bisogna dimostrare che i vettori corrispondenti ai parametri sono <strong>linearmente indipendenti</strong> (e non solo generatori). Per costruzione, il $k$-esimo vettore $\\boldsymbol{v}_k$ ha 1 nella posizione della $k$-esima variabile libera e 0 nelle posizioni delle altre variabili libere. Quindi se $c_1\\boldsymbol{v}_1 + \\dots + c_{n-p}\\boldsymbol{v}_{n-p} = \\boldsymbol{0}$, guardando la componente della variabile libera $k$-esima si ottiene subito $c_k = 0$."
        },
        {
            type: "formula",
            front: "In un sistema omogeneo 4×4 con rango della matrice uguale a 3, qual è la struttura dello spazio delle soluzioni?",
            back: "Lo spazio delle soluzioni ha dimensione $n - p = 4 - 3 = 1$: è una <strong>retta</strong> passante per l'origine in $\\mathbb{R}^4$. C'è un solo parametro libero e la base è formata da un singolo vettore. Ad esempio, nell'esempio della lezione: $U = \\text{Span}\\{(-4, 4, 1, 3)\\}$."
        }
    ]
};

