const LESSON = {
    id: "L17", date: "Lezione 17 — 14 Apr 2026",
    title: "Sistemi Lineari e Determinanti",
    abstract: "Teorema di Rouché-Capelli per la compatibilità dei sistemi lineari, discussione di sistemi con parametro e teorema di Cramer per la risoluzione tramite determinanti.",

    sections: [
        {
            id: "s18-rouche-capelli",
            type: "section",
            title: "Il Teorema di Rouché-Capelli",
            icon: "⚖️",
            content: `<p>Consideriamo un sistema lineare $S$ in forma matriciale:</p>
<p>$$A \\vec{x} = \\vec{b}$$</p>
<p>Sappiamo già come descrivere l'insieme delle soluzioni usando le operazioni elementari (Gauss-Jordan). Ora vediamo un approccio diverso, basato sui <strong>determinanti</strong>, che ci permette di stabilire criteri generali di compatibilità.</p>
<p>Ricordiamo le matrici associate al sistema:</p>
<ul>
<li>$A$: la <strong>matrice incompleta</strong> (o matrice dei coefficienti)</li>
<li>$B = (A|\\vec{b})$: la <strong>matrice completa</strong>, ottenuta aggiungendo ad $A$ la colonna dei termini noti</li>
</ul>`,
            subsections: [
                {
                    subtitle: "Enunciato del Teorema",
                    content: `<p><strong>Teorema (di Rouché-Capelli).</strong> Un sistema lineare $S$ è compatibile (cioè ammette almeno una soluzione) se e solo se il rango della matrice incompleta $A$ è uguale al rango della matrice completa $B$:</p>
<p>$$S \\text{ è compatibile} \\iff \\text{rango}(A) = \\text{rango}(B)$$</p>`
                },
                {
                    subtitle: "Dimostrazione (schizzo)",
                    content: `<p>Il risultato deriva direttamente dall'algoritmo di riduzione a scala.</p>
<p>Sappiamo che $\\text{rango}(A) \\leq \\text{rango}(B)$, poiché $A$ è una sottomatrice di $B$.</p>
<ul>
<li><strong>Se $\\text{rango}(A) \\lt \\text{rango}(B)$</strong>: durante la riduzione a scala di $B$, comparirà una riga della forma $(0, 0, \\dots, 0 \\;|\\; c)$ con $c \\neq 0$. Questa corrisponde all'equazione $0 = c$, che è <strong>impossibile</strong>. Il sistema non è compatibile.</li>
<li><strong>Se $\\text{rango}(A) = \\text{rango}(B)$</strong>: non si presentano mai equazioni impossibili del tipo $0 = c$. Il sistema è quindi compatibile.</li>
</ul>
<p><em>Nota:</em> questa è una dimostrazione informale che cattura l'idea principale. La dimostrazione rigorosa richiederebbe di formalizzare il legame tra operazioni elementari e rango, ma l'intuizione è esattamente questa: una riga con tutti zeri a sinistra e un valore non nullo a destra è l'unico ostacolo alla compatibilità, e questo accade precisamente quando $\\text{rango}(A) \\lt \\text{rango}(B)$.</p>`
                },
                {
                    subtitle: "Numero di soluzioni e variabili libere",
                    content: `<p>Sia $p = \\text{rango}(A) = \\text{rango}(B)$ e sia $n$ il numero di incognite. Allora:</p>
<ul>
<li>Il sistema è compatibile.</li>
<li>Le soluzioni dipendono da $n - p$ parametri (<strong>variabili libere</strong>).</li>
<li>Il numero di soluzioni è $\\infty^{n-p}$.</li>
</ul>
<p>Il valore comune $p$ è detto <strong>rango del sistema</strong> $S$.</p>
<p><strong>Cosa significa $\\infty^{n-p}$?</strong> La notazione $\\infty^{n-p}$ indica che le soluzioni dipendono da $n - p$ parametri liberi. Quando $n - p = 0$, non ci sono parametri liberi e la soluzione è unica: $\\infty^0 = 1$. Quando $n - p = 1$, le soluzioni formano una retta (dipendono da un parametro), e così via.</p>`
                },
                {
                    subtitle: "Caso particolare: soluzione unica",
                    content: `<p>Un caso particolarmente importante: se il sistema è compatibile e $p = n$ (rango uguale al numero di incognite), allora:</p>
<p>$$\\infty^{n-n} = \\infty^0 = 1$$</p>
<p>Il sistema ammette <strong>un'unica soluzione</strong>.</p>`
                },
                {
                    subtitle: "Importanza pratica",
                    content: `<p>Questo teorema è di grande importanza sia teorica che pratica. Per esempio, in campi come la meteorologia si lavora con sistemi lineari enormi (es. un miliardo di equazioni in centomila incognite). Già solo stabilire se una soluzione esista o meno è un risultato cruciale, e il teorema di Rouché-Capelli fornisce un criterio preciso per farlo.</p>`
                }
            ],
            formulas: [
                { label: "Criterio di Rouché-Capelli", latex: "S \\text{ compatibile} \\iff \\text{rango}(A) = \\text{rango}(B)" },
                { label: "Numero di soluzioni", latex: "\\infty^{n-p} \\quad \\text{dove } p = \\text{rango}(A) = \\text{rango}(B)" }
            ]
        },
        {
            id: "s18-esempio-rouche",
            type: "section",
            title: "Esempio: Sistema 2×2",
            icon: "📐",
            content: `<p>Risolviamo il sistema:</p>
<p>$$\\begin{cases} x + y = 1 \\\\ x - y = 3 \\end{cases}$$</p>
<p>La matrice incompleta è $A = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ e la matrice completa è $B = \\left(\\begin{array}{cc|c} 1 & 1 & 1 \\\\ 1 & -1 & 3 \\end{array}\\right)$.</p>
<p>Applichiamo $R_2 \\to R_2 - R_1$:</p>
<p>$$\\left(\\begin{array}{cc|c} 1 & 1 & 1 \\\\ 0 & -2 & 2 \\end{array}\\right)$$</p>
<p>Da questa forma a scala: $\\text{rango}(A) = 2$ e $\\text{rango}(B) = 2$. Il numero di incognite è $n = 2$.</p>
<p>Poiché $p = 2 = n$, il sistema ammette <strong>un'unica soluzione</strong>.</p>
<p>Il sistema ridotto è:</p>
<p>$$\\begin{cases} x + y = 1 \\\\ -2y = 2 \\end{cases}$$</p>
<p>Dalla seconda equazione: $y = -1$. Sostituendo nella prima: $x + (-1) = 1 \\Rightarrow x = 2$.</p>
<p>L'unica soluzione è $\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.</p>
<p>La rappresentazione parametrica, in questo caso, è un'applicazione da $\\mathbb{R}^0$ a $\\mathbb{R}^2$. Poiché $\\mathbb{R}^0 = \\{0\\}$, l'applicazione manda l'unico punto in $\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.</p>`
        },
        {
            id: "s18-esercizio-parametro",
            type: "section",
            title: "Esercizio con Parametro",
            icon: "🔧",
            content: `<p>Discutiamo la compatibilità e troviamo le soluzioni del seguente sistema al variare di $k \\in \\mathbb{R}$:</p>
<p>$$S_k: \\begin{cases} 2kx + (k+2)y + (k+4)z = k+5 \\\\ kx + (k+1)y + 2z = 3 \\\\ kx + y + z = 1 \\end{cases}$$</p>
<p>Scriviamo la matrice completa $B_k$ e riduciamola a scala.</p>
<p>$$B_k = \\left(\\begin{array}{ccc|c} 2k & k+2 & k+4 & k+5 \\\\ k & k+1 & 2 & 3 \\\\ k & 1 & 1 & 1 \\end{array}\\right)$$</p>`,
            subsections: [
                {
                    subtitle: "Riduzione a scala",
                    content: `<p>Per facilitare i calcoli, scambiamo $R_1 \\leftrightarrow R_3$:</p>
<p>$$\\left(\\begin{array}{ccc|c} k & 1 & 1 & 1 \\\\ k & k+1 & 2 & 3 \\\\ 2k & k+2 & k+4 & k+5 \\end{array}\\right)$$</p>
<p>Eseguiamo $R_2 \\to R_2 - R_1$ e $R_3 \\to R_3 - 2R_1$:</p>
<p>$$\\left(\\begin{array}{ccc|c} k & 1 & 1 & 1 \\\\ 0 & k & 1 & 2 \\\\ 0 & k & k+2 & k+3 \\end{array}\\right)$$</p>
<p>Infine $R_3 \\to R_3 - R_2$:</p>
<p>$$B'_k = \\left(\\begin{array}{ccc|c} k & 1 & 1 & 1 \\\\ 0 & k & 1 & 2 \\\\ 0 & 0 & k+1 & k+1 \\end{array}\\right)$$</p>
<p>Questa è la matrice ridotta a scala. I pivot sono $k$ (posizione 1,1), $k$ (posizione 2,2) e $k+1$ (posizione 3,3).</p>
<p><strong>Perché studiare i casi separatamente?</strong> Un pivot nullo significa che quella riga non contribuisce al rango della matrice, e potrebbe rivelare incompatibilità o infinite soluzioni. Dobbiamo quindi analizzare separatamente i valori di $k$ che annullano almeno un pivot: $k = 0$ e $k = -1$.</p>`
                },
                {
                    subtitle: "Caso 1: k ≠ 0 e k ≠ −1",
                    content: `<p>Tutti i pivot sono diversi da zero:</p>
<p>$$\\text{rango}(A_k) = 3, \\quad \\text{rango}(B_k) = 3$$</p>
<p>Con $n = 3$ incognite e $p = 3$, il sistema è compatibile con <strong>un'unica soluzione</strong>. Risolviamo per sostituzione all'indietro:</p>
<ul>
<li><strong>Terza riga:</strong> $(k+1)z = k+1 \\Rightarrow z = 1$</li>
<li><strong>Seconda riga:</strong> $ky + 1 = 2 \\Rightarrow y = \\frac{1}{k}$</li>
<li><strong>Prima riga:</strong> $kx + \\frac{1}{k} + 1 = 1 \\Rightarrow kx = -\\frac{1}{k} \\Rightarrow x = -\\frac{1}{k^2}$</li>
</ul>
<p>L'unica soluzione è $\\left(-\\dfrac{1}{k^2},\\; \\dfrac{1}{k},\\; 1\\right)$.</p>
<p><strong>Verifica:</strong> sostituiamo nella prima equazione originale $2kx + (k+2)y + (k+4)z = k+5$:</p>
<p>$$2k\\left(-\\frac{1}{k^2}\\right) + (k+2)\\frac{1}{k} + (k+4)(1) = -\\frac{2}{k} + 1 + \\frac{2}{k} + k + 4 = k + 5 \\;\\; \\checkmark$$</p>`
                },
                {
                    subtitle: "Caso 2: k = 0",
                    content: `<p>Sostituiamo $k = 0$ nella matrice ridotta $B'_k$:</p>
<p>$$B'_0 = \\left(\\begin{array}{ccc|c} 0 & 1 & 1 & 1 \\\\ 0 & 0 & 1 & 2 \\\\ 0 & 0 & 1 & 1 \\end{array}\\right)$$</p>
<p>Notiamo che le righe 2 e 3 hanno la <strong>stessa parte sinistra</strong> $(0, 0, 1)$ ma <strong>termini noti diversi</strong> (2 e 1): questo è già un segnale di contraddizione. Confermiamolo con $R_3 \\to R_3 - R_2$:</p>
<p>$$\\left(\\begin{array}{ccc|c} 0 & 1 & 1 & 1 \\\\ 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & -1 \\end{array}\\right)$$</p>
<p>L'ultima riga corrisponde all'equazione $0 = -1$, che è <strong>impossibile</strong>.</p>
<p>Infatti $\\text{rango}(A_0) = 2$ mentre $\\text{rango}(B_0) = 3$. Per Rouché-Capelli, il sistema è <strong>incompatibile</strong>.</p>`
                },
                {
                    subtitle: "Caso 3: k = −1",
                    content: `<p>Sostituiamo $k = -1$ nella matrice ridotta $B'_k$:</p>
<p>$$B'_{-1} = \\left(\\begin{array}{ccc|c} -1 & 1 & 1 & 1 \\\\ 0 & -1 & 1 & 2 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$$</p>
<p>L'ultima riga è $0 = 0$ (identità). I pivot sono $-1$ e $-1$.</p>
<p>$$\\text{rango}(A_{-1}) = 2, \\quad \\text{rango}(B_{-1}) = 2$$</p>
<p>Il sistema è <strong>compatibile</strong> con $n = 3$ e $p = 2$, quindi $\\infty^{3-2} = \\infty^1$ soluzioni (dipendono da <strong>un parametro libero</strong>).</p>
<p>Le colonne con pivot sono la prima e la seconda ($x$ e $y$). La terza colonna ($z$) non ha pivot, quindi $z$ è la variabile libera. Poniamo $z = \\lambda$ con $\\lambda \\in \\mathbb{R}$:</p>
<ul>
<li><strong>Seconda riga:</strong> $-y + \\lambda = 2 \\Rightarrow y = \\lambda - 2$</li>
<li><strong>Prima riga:</strong> $-x + (\\lambda - 2) + \\lambda = 1 \\Rightarrow -x + 2\\lambda - 2 = 1 \\Rightarrow x = 2\\lambda - 3$</li>
</ul>
<p>L'insieme delle soluzioni è $(2\\lambda - 3,\\; \\lambda - 2,\\; \\lambda)$ con $\\lambda \\in \\mathbb{R}$.</p>
<p>In forma parametrica vettoriale:</p>
<p>$$\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -2 \\\\ 0 \\end{pmatrix} + \\lambda \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}$$</p>`
                },
                {
                    subtitle: "Riepilogo della discussione",
                    content: `<p>Riassumiamo i risultati al variare di $k$:</p>`
                }
            ],
            formulas: [
                { label: "Pivot della matrice ridotta", latex: "k, \\quad k, \\quad k+1" },
                { label: "Soluzione per k ≠ 0, −1", latex: "\\left(-\\frac{1}{k^2},\\; \\frac{1}{k},\\; 1\\right)" },
                { label: "Soluzioni per k = −1", latex: "\\begin{pmatrix} -3 \\\\ -2 \\\\ 0 \\end{pmatrix} + \\lambda \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}" }
            ],
            table_compare: {
                headers: ["Valore di k", "rango(A)", "rango(B)", "Esito"],
                rows: [
                    ["k ≠ 0, k ≠ −1", "3", "3", "Unica soluzione"],
                    ["k = 0", "2", "3", "Incompatibile"],
                    ["k = −1", "2", "2", "∞¹ soluzioni (1 parametro libero)"]
                ]
            }
        },
        {
            id: "s18-cramer",
            type: "section",
            title: "Il Teorema di Cramer",
            icon: "🎯",
            content: `<p>Il teorema di Cramer fornisce una <strong>formula esplicita</strong> per la soluzione di un sistema lineare, ma si applica solo a un caso molto specifico: sistemi <strong>quadrati</strong> con matrice dei coefficienti <strong>invertibile</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato",
                    content: `<p><strong>Teorema (di Cramer).</strong> Sia $S$ un sistema lineare $A\\vec{x} = \\vec{b}$ <strong>quadrato</strong> ($n$ equazioni in $n$ incognite), con $\\det(A) \\neq 0$. Allora il sistema ammette un'unica soluzione $\\vec{y} = (y_1, \\dots, y_n)$, le cui componenti sono:</p>
<p>$$y_i = \\frac{\\det(A_i)}{\\det(A)} \\quad \\text{per } i = 1, \\dots, n$$</p>
<p>dove $A_i$ è la matrice ottenuta da $A$ sostituendo la sua $i$-esima colonna con il vettore dei termini noti $\\vec{b}$:</p>
<p>$$A_i = \\Big[\\, \\vec{a}_1 \\;\\Big|\\; \\cdots \\;\\Big|\\; \\vec{a}_{i-1} \\;\\Big|\\; \\underbrace{\\vec{b}}_{\\text{colonna } i} \\;\\Big|\\; \\vec{a}_{i+1} \\;\\Big|\\; \\cdots \\;\\Big|\\; \\vec{a}_n \\,\\Big]$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Poiché $\\det(A) \\neq 0$, la matrice $A$ è invertibile e l'unica soluzione è $\\vec{y} = A^{-1}\\vec{b}$.</p>
<p>Ricordiamo la formula per la matrice inversa tramite l'aggiunta classica:</p>
<p>$$A^{-1} = \\frac{1}{\\det(A)} A^*$$</p>
<p>dove $A^*$ è la <strong>trasposta della matrice dei cofattori</strong> di $A$ (detta anche matrice aggiunta classica).</p>
<p>La soluzione è quindi $\\vec{y} = \\dfrac{1}{\\det(A)} A^* \\vec{b}$. La $i$-esima componente è:</p>
<p>$$y_i = \\frac{1}{\\det(A)} \\sum_{j=1}^{n} (A^*)_{ij} \\, b_j$$</p>
<p><strong>Passaggio chiave — lo scambio degli indici.</strong> Ricordiamo che la matrice aggiunta $A^*$ è definita come la <strong>trasposta</strong> della matrice dei cofattori. Questo significa che l'elemento $(i,j)$ di $A^*$ è il cofattore $C_{ji}$ (con indici scambiati rispetto alla posizione!). In formula: $(A^*)_{ij} = C_{ji}$, dove $C_{ji}$ è il cofattore di $A$ di posto $(j,i)$. Quindi:</p>
<p>$$y_i = \\frac{1}{\\det(A)} \\sum_{j=1}^{n} C_{ji} \\, b_j$$</p>
<p><strong>Perché questa somma è $\\det(A_i)$?</strong> Osserviamo che la matrice $A_i$ differisce da $A$ <em>solo</em> nella colonna $i$ (dove $\\vec{b}$ sostituisce $\\vec{a}_i$). I cofattori $C_{ji}$ si calcolano cancellando la riga $j$ e la colonna $i$: questa operazione <strong>non coinvolge</strong> la colonna $i$ stessa, quindi i cofattori rispetto alla colonna $i$ sono identici in $A$ e in $A_i$.</p>
<p>Di conseguenza, la sommatoria $\\sum_{j=1}^{n} C_{ji} \\, b_j$ è esattamente lo <strong>sviluppo di Laplace</strong> del determinante di $A_i$ lungo la sua $i$-esima colonna (dove gli elementi sono $b_j$ e i cofattori sono $C_{ji}$):</p>
<p>$$\\sum_{j=1}^{n} C_{ji} \\, b_j = \\det(A_i)$$</p>
<p>Sostituendo, otteniamo la tesi:</p>
<p>$$y_i = \\frac{\\det(A_i)}{\\det(A)}$$</p>`
                },
                {
                    subtitle: "Quando NON si applica Cramer",
                    content: `<p><strong>Attenzione:</strong> il teorema di Cramer si applica <strong>SOLO</strong> se:</p>
<ol>
<li>Il sistema è <strong>quadrato</strong> ($n$ equazioni, $n$ incognite)</li>
<li>$\\det(A) \\neq 0$ (matrice dei coefficienti invertibile)</li>
</ol>
<p>Se il sistema non è quadrato, Cramer non è applicabile e bisogna usare altri metodi (Gauss, Rouché-Capelli). Se il sistema è quadrato ma $\\det(A) = 0$, il sistema può essere <strong>incompatibile</strong> (nessuna soluzione) oppure avere <strong>infinite soluzioni</strong>: in ogni caso, Cramer non fornisce informazioni e bisogna procedere diversamente.</p>`
                }
            ],
            formulas: [
                { label: "Formula di Cramer", latex: "y_i = \\frac{\\det(A_i)}{\\det(A)}" },
                { label: "Inversa tramite aggiunta", latex: "A^{-1} = \\frac{1}{\\det(A)} A^*" }
            ]
        },
        {
            id: "s18-cramer-limiti",
            type: "alert_box",
            title: "⚠️ Limiti del Teorema di Cramer",
            icon: "⚠️",
            content: `<p>Il teorema di Cramer è elegante ma ha forti limitazioni pratiche:</p>
<ul>
<li><strong>Solo sistemi quadrati</strong> con $\\det(A) \\neq 0$</li>
<li><strong>Costo computazionale elevato</strong>: per un sistema $n \\times n$ bisogna calcolare $n+1$ determinanti di ordine $n$</li>
<li>Per sistemi grandi, il metodo di Gauss è enormemente più efficiente</li>
</ul>
<p>Cramer è utile soprattutto per sistemi $2 \\times 2$ e $3 \\times 3$, e ha grande valore <strong>teorico</strong> (dimostra che la soluzione dipende razionalmente dai coefficienti).</p>`
        },
        {
            id: "s18-esempio-cramer",
            type: "section",
            title: "Esempio: Cramer su un sistema 2×2",
            icon: "✏️",
            content: `<p>Risolviamo con Cramer il sistema già visto:</p>
<p>$$\\begin{cases} x + y = 1 \\\\ x - y = 3 \\end{cases}$$</p>
<p>La matrice dei coefficienti è $A = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ con $\\det(A) = -1 - 1 = -2 \\neq 0$. Il sistema è di Cramer.</p>
<p>Calcoliamo le matrici $A_1$ (colonna 1 sostituita con $\\vec{b}$) e $A_2$ (colonna 2 sostituita con $\\vec{b}$):</p>
<p>$$A_1 = \\begin{pmatrix} 1 & 1 \\\\ 3 & -1 \\end{pmatrix} \\Rightarrow \\det(A_1) = -1 - 3 = -4$$</p>
<p>$$A_2 = \\begin{pmatrix} 1 & 1 \\\\ 1 & 3 \\end{pmatrix} \\Rightarrow \\det(A_2) = 3 - 1 = 2$$</p>
<p>Applichiamo la formula di Cramer:</p>
<p>$$x = \\frac{\\det(A_1)}{\\det(A)} = \\frac{-4}{-2} = 2$$</p>
<p>$$y = \\frac{\\det(A_2)}{\\det(A)} = \\frac{2}{-2} = -1$$</p>
<p>La soluzione è $(2, -1)$, che coincide con quella trovata precedentemente con il metodo di riduzione.</p>`
        },
        {
            id: "s18-metodo-confronto",
            type: "note_box",
            title: "📝 Confronto tra i metodi risolutivi",
            icon: "📝",
            content: `<p>In questa lezione abbiamo visto due approcci per risolvere sistemi lineari:</p>`,
            table_compare: {
                headers: ["Caratteristica", "Gauss + Rouché-Capelli", "Cramer"],
                rows: [
                    ["Tipo di sistema", "Qualunque (m×n)", "Solo quadrato (n×n)"],
                    ["Requisiti", "Nessuno", "det(A) ≠ 0"],
                    ["Output", "Compatibilità + soluzioni", "Solo la soluzione (se esiste)"],
                    ["Efficienza", "Alta (anche per sistemi grandi)", "Bassa per n grande"],
                    ["Valore principale", "Pratico e universale", "Teorico ed elegante"]
                ]
            }
        },
        {
            id: "s18-orale-rouche",
            type: "oral_box",
            title: "🎤 Domanda tipica: Rouché-Capelli",
            icon: "🎤",
            content: `<p><strong>Domanda:</strong> "Enunci il teorema di Rouché-Capelli e spieghi cosa ci dice sul numero di soluzioni."</p>
<p><strong>Schema di risposta:</strong></p>
<ol>
<li>Enunciare il criterio: $S$ compatibile $\\iff \\text{rango}(A) = \\text{rango}(B)$</li>
<li>Ricordare che $\\text{rango}(A) \\leq \\text{rango}(B)$ sempre</li>
<li>Se compatibile con rango $p$ e $n$ incognite: $\\infty^{n-p}$ soluzioni</li>
<li>Caso particolare: $p = n \\Rightarrow$ soluzione unica</li>
</ol>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Enuncia il teorema di Rouché-Capelli.",
            back: "Un sistema lineare $A\\vec{x} = \\vec{b}$ è compatibile se e solo se $\\text{rango}(A) = \\text{rango}(B)$, dove $B = (A|\\vec{b})$ è la matrice completa. Se il sistema è compatibile con rango $p$ e $n$ incognite, le soluzioni sono $\\infty^{n-p}$ (dipendono da $n - p$ parametri liberi)."
        },
        {
            type: "domanda",
            front: "Cosa significa $\\infty^0 = 1$ nel contesto di Rouché-Capelli?",
            back: "La notazione $\\infty^{n-p}$ indica che le soluzioni dipendono da $n - p$ parametri liberi. Quando $n - p = 0$ (rango uguale al numero di incognite), non ci sono parametri liberi: la soluzione è unica. Quindi $\\infty^0 = 1$ significa esattamente 'una sola soluzione'."
        },
        {
            type: "definizione",
            front: "Enuncia il teorema di Cramer.",
            back: "Sia $A\\vec{x} = \\vec{b}$ un sistema quadrato ($n$ equazioni, $n$ incognite) con $\\det(A) \\neq 0$. Allora l'unica soluzione ha componenti $y_i = \\frac{\\det(A_i)}{\\det(A)}$, dove $A_i$ è la matrice ottenuta da $A$ sostituendo la colonna $i$-esima con $\\vec{b}$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra la formula di Cramer $y_i = \\frac{\\det(A_i)}{\\det(A)}$.",
            back: "Si parte da $\\vec{y} = A^{-1}\\vec{b} = \\frac{1}{\\det(A)} A^* \\vec{b}$, dove $A^*$ è la trasposta della matrice dei cofattori. La componente $i$-esima è $y_i = \\frac{1}{\\det(A)} \\sum_{j=1}^{n} (A^*)_{ij} b_j = \\frac{1}{\\det(A)} \\sum_{j=1}^{n} C_{ji} b_j$, dove lo scambio di indici deriva dal fatto che $A^*$ è la TRASPOSTA dei cofattori. Questa somma è lo sviluppo di Laplace di $\\det(A_i)$ lungo la colonna $i$ (i cofattori $C_{ji}$ sono gli stessi perché non coinvolgono la colonna sostituita)."
        },
        {
            type: "tranello",
            front: "Il teorema di Cramer si applica sempre a un sistema lineare?",
            back: "NO! Cramer richiede due condizioni: (1) il sistema deve essere quadrato ($n$ equazioni, $n$ incognite), e (2) $\\det(A) \\neq 0$. Se il sistema non è quadrato, Cramer non è applicabile. Se è quadrato ma $\\det(A) = 0$, il sistema può essere incompatibile o avere infinite soluzioni, e serve un altro metodo (es. Gauss)."
        },
        {
            type: "domanda",
            front: "Nell'esercizio con parametro, perché bisogna studiare separatamente $k = 0$ e $k = -1$?",
            back: "I pivot della matrice ridotta sono $k$, $k$ e $k+1$. Un pivot nullo significa che quella riga non contribuisce al rango della matrice e può rivelare incompatibilità o infinite soluzioni. Per $k = 0$ i primi due pivot si annullano (incompatibilità), per $k = -1$ il terzo pivot si annulla (infinite soluzioni)."
        },
        {
            type: "formula",
            front: "Come si costruisce la matrice $A_i$ nella formula di Cramer?",
            back: "$A_i$ si ottiene da $A$ sostituendo la $i$-esima colonna con il vettore dei termini noti $\\vec{b}$: $$A_i = [\\vec{a}_1 | \\cdots | \\vec{a}_{i-1} | \\vec{b} | \\vec{a}_{i+1} | \\cdots | \\vec{a}_n]$$"
        },
        {
            type: "domanda",
            front: "Nella dimostrazione di Cramer, perché $(A^*)_{ij} = C_{ji}$ con gli indici scambiati?",
            back: "Perché la matrice aggiunta $A^*$ è definita come la TRASPOSTA della matrice dei cofattori. Se $M$ è la matrice dei cofattori con $M_{ij} = C_{ij}$, allora $A^* = M^T$, e quindi $(A^*)_{ij} = M_{ji} = C_{ji}$. Lo scambio degli indici è esattamente l'effetto della trasposizione."
        },
        {
            type: "tranello",
            front: "Se $\\text{rango}(A) \lt \\text{rango}(B)$, il sistema ha infinite soluzioni?",
            back: "NO! Se $\\text{rango}(A) \\lt \\text{rango}(B)$, il sistema è INCOMPATIBILE (nessuna soluzione). Nella riduzione a scala compare una riga del tipo $(0\\; 0\\; \\cdots\\; 0 \\;|\\; c)$ con $c \\neq 0$, cioè l'equazione impossibile $0 = c$. Il sistema ha infinite soluzioni solo quando $\\text{rango}(A) = \\text{rango}(B) \\lt n$."
        },
        {
            type: "domanda",
            front: "Perché nella dimostrazione di Cramer i cofattori $C_{ji}$ di $A$ coincidono con quelli di $A_i$?",
            back: "La matrice $A_i$ differisce da $A$ solo nella colonna $i$ (sostituita con $\\vec{b}$). Il cofattore $C_{ji}$ si calcola cancellando la riga $j$ e la colonna $i$: questa operazione elimina proprio la colonna che è stata modificata, quindi il minore complementare risultante è identico in $A$ e in $A_i$. I cofattori rispetto alla colonna $i$ sono quindi gli stessi."
        }
    ]
};

