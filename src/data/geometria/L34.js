const LESSON = {
    id: "L34", date: "Lezione 28 — 11 Mag 2026",
    title: "Autovettori, Diagonalizzabilità e Forme Bilineari",
    abstract: "Dimostrazione del lemma fondamentale sull'indipendenza lineare di autovettori relativi ad autovalori distinti, esercizio completo di diagonalizzazione su ℝ³, e introduzione alle forme bilineari simmetriche con la matrice di Gram.",

    sections: [
        {
            id: "s34-lemma-indipendenza",
            type: "section",
            title: "Lemma Fondamentale sull'Indipendenza degli Autovettori",
            icon: "🔗",
            content: `<p>Riprendiamo un lemma lasciato in sospeso, che costituisce il <strong>cuore della condizione sufficiente per la diagonalizzabilità</strong> di un endomorfismo.</p>
<p>Intuitivamente, il lemma ci garantisce che autovettori relativi ad autovalori distinti sono sempre linearmente indipendenti tra loro. Come conseguenza diretta: se un endomorfismo $f$ di uno spazio vettoriale $V$ di dimensione $n$ possiede $n$ autovalori distinti, allora possiamo trovare $n$ autovettori linearmente indipendenti, che formano una <strong>base di diagonalizzazione</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato del Lemma",
                    content: `<p>Sia $f$ un endomorfismo di uno spazio vettoriale reale $V$ di dimensione finita. Siano $\\lambda_1, \\dots, \\lambda_r$ autovalori distinti di $f$.</p>
<p>Per ogni $i \\in \\{1, \\dots, r\\}$, sia:</p>
<p>$$\\mathcal{B}_i = \\{\\mathbf{v}_{1i}, \\dots, \\mathbf{v}_{L_i, i}\\}$$</p>
<p>un insieme di $L_i \\geq 1$ autovettori linearmente indipendenti relativi all'autovalore $\\lambda_i$, dove $L_i$ è il numero di autovettori linearmente indipendenti scelti per $\\lambda_i$ (tipicamente $L_i$ è la molteplicità geometrica di $\\lambda_i$, cioè $L_i = \\dim V_{\\lambda_i}$).</p>
<p>Allora l'insieme ottenuto dall'unione di tutti questi vettori:</p>
<p>$$\\mathcal{B} = \\bigcup_{i=1}^{r} \\mathcal{B}_i = \\{\\mathbf{v}_{ji} \\mid i=1, \\dots, r, \\quad j=1, \\dots, L_i\\}$$</p>
<p>è un sistema <strong>linearmente indipendente</strong> di vettori.</p>`
                },
                {
                    subtitle: "Dimostrazione — Passo base (r = 1)",
                    content: `<p>La dimostrazione procede per <strong>induzione</strong> sul numero $r$ di autovalori distinti.</p>
<p>Se $r = 1$, abbiamo un solo autovalore $\\lambda_1$. L'insieme di vettori è $\\mathcal{B} = \\mathcal{B}_1 = \\{\\mathbf{v}_{11}, \\dots, \\mathbf{v}_{L_1, 1}\\}$.</p>
<p>La tesi coincide esattamente con l'ipotesi: $\\mathcal{B} = \\mathcal{B}_1$ è per ipotesi un insieme di autovettori linearmente indipendenti, quindi $\\mathcal{B}$ è linearmente indipendente. ✓</p>`
                },
                {
                    subtitle: "Dimostrazione — Passo induttivo (r > 1)",
                    content: `<p>Assumiamo che il lemma sia vero per $r-1$ autovalori distinti e dimostriamolo per $r$.</p>
<p>Prendiamo una combinazione lineare uguale a zero di tutti i vettori dell'insieme $\\mathcal{B}$:</p>
<p>$$\\sum_{i=1}^{r} \\sum_{j=1}^{L_i} a_{ji} \\mathbf{v}_{ji} = \\mathbf{0} \\qquad (\\star)$$</p>
<p>Vogliamo dimostrare che <strong>tutti</strong> i coefficienti $a_{ji}$ sono nulli.</p>
<p><strong>Passo 1:</strong> Applichiamo l'endomorfismo $f$ a entrambi i membri di $(\\star)$. Per la linearità di $f$ e usando $f(\\mathbf{v}_{ji}) = \\lambda_i \\mathbf{v}_{ji}$:</p>
<p>$$\\sum_{i=1}^{r} \\sum_{j=1}^{L_i} a_{ji} \\lambda_i \\mathbf{v}_{ji} = \\mathbf{0} \\qquad (\\star\\star)$$</p>
<p><strong>Passo 2:</strong> Moltiplichiamo $(\\star)$ per $\\lambda_1$:</p>
<p>$$\\sum_{i=1}^{r} \\sum_{j=1}^{L_i} a_{ji} \\lambda_1 \\mathbf{v}_{ji} = \\mathbf{0} \\qquad (\\star\\star\\star)$$</p>
<p><strong>Passo 3:</strong> Sottraiamo $(\\star\\star\\star)$ da $(\\star\\star)$:</p>
<p>$$\\sum_{i=1}^{r} \\sum_{j=1}^{L_i} a_{ji} (\\lambda_i - \\lambda_1) \\mathbf{v}_{ji} = \\mathbf{0}$$</p>
<p>Per $i = 1$, il fattore $(\\lambda_1 - \\lambda_1) = 0$ annulla tutti i termini corrispondenti. Resta:</p>
<p>$$\\sum_{i=2}^{r} \\sum_{j=1}^{L_i} a_{ji} (\\lambda_i - \\lambda_1) \\mathbf{v}_{ji} = \\mathbf{0}$$</p>
<p>Questa è una combinazione lineare di autovettori relativi a $r - 1$ autovalori distinti ($\\lambda_2, \\dots, \\lambda_r$). Per l'<strong>ipotesi induttiva</strong>, questi vettori sono linearmente indipendenti. Quindi tutti i coefficienti devono essere nulli:</p>
<p>$$a_{ji} (\\lambda_i - \\lambda_1) = 0 \\quad \\text{per ogni } i \\in \\{2, \\dots, r\\},\\; j \\in \\{1, \\dots, L_i\\}$$</p>
<p>Poiché gli autovalori sono distinti, $\\lambda_i - \\lambda_1 \\neq 0$ per $i \\geq 2$. Questo implica:</p>
<p>$$a_{ji} = 0 \\quad \\text{per ogni } i \\geq 2$$</p>
<p><strong>Passo 4:</strong> Sostituendo nella relazione originale $(\\star)$, resta:</p>
<p>$$\\sum_{j=1}^{L_1} a_{j1} \\mathbf{v}_{j1} = \\mathbf{0}$$</p>
<p>Ma i vettori $\\{\\mathbf{v}_{11}, \\dots, \\mathbf{v}_{L_1, 1}\\}$ sono linearmente indipendenti per ipotesi. Quindi anche $a_{j1} = 0$ per ogni $j$.</p>
<p>Avendo dimostrato che <strong>tutti</strong> i coefficienti $a_{ji}$ sono nulli, l'insieme $\\mathcal{B}$ è linearmente indipendente. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Unione delle basi degli autospazi", latex: "\\mathcal{B} = \\bigcup_{i=1}^{r} \\mathcal{B}_i" },
                { label: "Trucco della dimostrazione", latex: "\\sum_{i=2}^{r} \\sum_{j=1}^{L_i} a_{ji}(\\lambda_i - \\lambda_1)\\mathbf{v}_{ji} = \\mathbf{0}" }
            ]
        },
        {
            id: "s34-esercizio-diagonalizzazione",
            type: "section",
            title: "Esercizio Completo di Diagonalizzazione",
            icon: "📐",
            content: `<p>Applichiamo la procedura completa di diagonalizzazione a un endomorfismo $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ definito da:</p>
<p>$$f(x, y, z) = (3x + 3y - z,\\; -4x - 2y + 2z,\\; -2x + 2y + 2z)$$</p>`,
            subsections: [
                {
                    subtitle: "Matrice rappresentativa e polinomio caratteristico",
                    content: `<p>La matrice rappresentativa rispetto alla base canonica $\\mathcal{E}$ è:</p>
<p>$$A = M_{\\mathcal{E}}^{\\mathcal{E}}(f) = \\begin{pmatrix} 3 & 3 & -1 \\\\ -4 & -2 & 2 \\\\ -2 & 2 & 2 \\end{pmatrix}$$</p>
<p>Calcoliamo $p_f(t) = \\det(A - tI)$ con la matrice:</p>
<p>$$A - tI = \\begin{pmatrix} 3-t & 3 & -1 \\\\ -4 & -2-t & 2 \\\\ -2 & 2 & 2-t \\end{pmatrix}$$</p>
<p>Sviluppiamo lungo la prima riga (Laplace). Servono tre determinanti $2 \\times 2$:</p>
<p><strong>Primo:</strong></p>
<p>$$\\det\\begin{pmatrix} -2-t & 2 \\\\ 2 & 2-t \\end{pmatrix} = (-2-t)(2-t) - 4 = -(2+t)(2-t) - 4 = -(4 - t^2) - 4 = t^2 - 8$$</p>
<p><strong>Secondo:</strong></p>
<p>$$\\det\\begin{pmatrix} -4 & 2 \\\\ -2 & 2-t \\end{pmatrix} = -4(2-t) - 2(-2) = -8 + 4t + 4 = 4t - 4$$</p>
<p><strong>Terzo:</strong></p>
<p>$$\\det\\begin{pmatrix} -4 & -2-t \\\\ -2 & 2 \\end{pmatrix} = (-4)(2) - (-2-t)(-2) = -8 - 2(2+t) = -12 - 2t$$</p>
<p>Sostituendo nello sviluppo:</p>
<p>$$\\det(A - tI) = (3-t)(t^2 - 8) - 3(4t - 4) + (-1)(-12 - 2t)$$</p>
<p>$$= 3t^2 - 24 - t^3 + 8t - 12t + 12 + 12 + 2t = -t^3 + 3t^2 - 2t$$</p>
<p>Raccogliamo $-t$ e fattorizziamo:</p>
<p>$$p_f(t) = -t(t^2 - 3t + 2) = -t(t-1)(t-2)$$</p>
<p>Gli autovalori sono $\\lambda_1 = 0$, $\\lambda_2 = 1$, $\\lambda_3 = 2$. Sono <strong>3 autovalori distinti</strong> in dimensione 3, quindi $f$ è <strong>diagonalizzabile</strong>.</p>`
                },
                {
                    subtitle: "Autospazio V₀ (λ₁ = 0)",
                    content: `<p>Risolviamo $A\\mathbf{x} = \\mathbf{0}$. Riduciamo la matrice $A$:</p>
<p>$$\\begin{pmatrix} 3 & 3 & -1 \\\\ -4 & -2 & 2 \\\\ -2 & 2 & 2 \\end{pmatrix} \\overset{\\text{riduzione}}{\\longrightarrow} \\begin{pmatrix} 3 & 3 & -1 \\\\ 0 & 2 & \\frac{2}{3} \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>Rango 2, variabile libera $z$. Dalla seconda riga: $y = -\\frac{1}{3}z$. Dalla prima: $x = \\frac{2}{3}z$. Ponendo $z = 3$:</p>
<p>$$\\mathbf{v}_1 = (2, -1, 3) \\qquad V_0 = \\text{Span}(\\mathbf{v}_1)$$</p>`
                },
                {
                    subtitle: "Autospazio V₁ (λ₂ = 1)",
                    content: `<p>Risolviamo $(A - I)\\mathbf{x} = \\mathbf{0}$:</p>
<p>$$\\begin{pmatrix} 2 & 3 & -1 \\\\ -4 & -3 & 2 \\\\ -2 & 2 & 1 \\end{pmatrix} \\overset{\\text{riduzione}}{\\longrightarrow} \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>Rango 2, variabile libera $z$. Dalla seconda riga: $y = 0$. Dalla prima: $x = \\frac{1}{2}z$. Ponendo $z = 2$:</p>
<p>$$\\mathbf{v}_2 = (1, 0, 2) \\qquad V_1 = \\text{Span}(\\mathbf{v}_2)$$</p>`
                },
                {
                    subtitle: "Autospazio V₂ (λ₃ = 2)",
                    content: `<p>Risolviamo $(A - 2I)\\mathbf{x} = \\mathbf{0}$:</p>
<p>$$\\begin{pmatrix} 1 & 3 & -1 \\\\ -4 & -4 & 2 \\\\ -2 & 2 & 0 \\end{pmatrix} \\overset{\\text{riduzione}}{\\longrightarrow} \\begin{pmatrix} 1 & 3 & -1 \\\\ 0 & 8 & -2 \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>Rango 2, variabile libera $z$. Dalla seconda riga: $y = \\frac{1}{4}z$. Dalla prima: $x = \\frac{1}{4}z$. Ponendo $z = 4$:</p>
<p>$$\\mathbf{v}_3 = (1, 1, 4) \\qquad V_2 = \\text{Span}(\\mathbf{v}_3)$$</p>`
                },
                {
                    subtitle: "Risultato della diagonalizzazione",
                    content: `<p>La base di autovettori è:</p>
<p>$$\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\} = \\{(2, -1, 3),\\; (1, 0, 2),\\; (1, 1, 4)\\}$$</p>
<p>La matrice di cambio di base (colonne = autovettori) e la matrice diagonale sono:</p>
<p>$$P = \\begin{pmatrix} 2 & 1 & 1 \\\\ -1 & 0 & 1 \\\\ 3 & 2 & 4 \\end{pmatrix}, \\qquad D = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$$</p>
<p>con la relazione $P^{-1}AP = D$.</p>`
                }
            ],
            extra_content: `<p><strong>Verifica rapida.</strong> Si può controllare che $AP = PD$, il che equivale a $P^{-1}AP = D$. Basta verificare che $A\\mathbf{v}_i = \\lambda_i \\mathbf{v}_i$ per ciascun autovettore, il che è già garantito dalla costruzione degli autospazi. Ad esempio: $A\\mathbf{v}_1 = A(2,-1,3) = (0,0,0) = 0 \\cdot \\mathbf{v}_1$. ✓</p>`,
            formulas: [
                { label: "Polinomio caratteristico", latex: "p_f(t) = -t(t-1)(t-2)" },
                { label: "Relazione di diagonalizzazione", latex: "P^{-1}AP = D" }
            ]
        },
        {
            id: "s34-alert-diag",
            type: "alert_box",
            title: "⚠️ Attenzione: 3 autovalori distinti ≠ unica condizione",
            icon: "⚠️",
            content: `<p>In questo esercizio la diagonalizzabilità è stata immediata perché abbiamo trovato <strong>3 autovalori distinti in dimensione 3</strong>. Questa è una <strong>condizione sufficiente</strong> ma <strong>non necessaria</strong>!</p>
<p>Un endomorfismo può essere diagonalizzabile anche con autovalori ripetuti, a patto che per ogni autovalore la <strong>molteplicità geometrica</strong> (dimensione dell'autospazio) sia uguale alla <strong>molteplicità algebrica</strong> (molteplicità come radice del polinomio caratteristico).</p>
<p>All'esame, se il polinomio caratteristico ha radici ripetute, <strong>non concludere subito</strong>: bisogna calcolare la dimensione di ogni autospazio.</p>`
        },
        {
            id: "s34-forme-bilineari",
            type: "section",
            title: "Forme Bilineari Simmetriche",
            icon: "🔀",
            content: `<p>Iniziamo una nuova sezione dedicata alle <strong>forme bilineari simmetriche</strong>, un argomento strettamente legato allo studio delle forme quadratiche.</p>
<p>Le forme bilineari simmetriche generalizzano il concetto di <strong>prodotto scalare</strong>: il prodotto scalare standard su $\\mathbb{R}^n$, definito da $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\sum_i u_i v_i$, è un caso particolare di forma bilineare simmetrica. In seguito studieremo le <em>forme quadratiche</em>, che si ottengono ponendo i due argomenti uguali: $q(\\mathbf{v}) = \\phi(\\mathbf{v}, \\mathbf{v})$.</p>
<p>Fissiamo uno spazio vettoriale $V$ di dimensione finita su $\\mathbb{R}$.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p>Una <strong>forma bilineare simmetrica</strong> su $V$ è una funzione $\\phi: V \\times V \\to \\mathbb{R}$ che soddisfa:</p>
<p><strong>1. Linearità a sinistra:</strong> Per ogni $\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V$ e $a, b \\in \\mathbb{R}$:</p>
<p>$$\\phi(a\\mathbf{u} + b\\mathbf{v},\\; \\mathbf{w}) = a\\,\\phi(\\mathbf{u}, \\mathbf{w}) + b\\,\\phi(\\mathbf{v}, \\mathbf{w})$$</p>
<p><strong>2. Simmetria:</strong> Per ogni $\\mathbf{u}, \\mathbf{v} \\in V$:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = \\phi(\\mathbf{v}, \\mathbf{u})$$</p>
<p>Il termine "bilineare" si giustifica perché queste due proprietà insieme implicano anche la <strong>linearità a destra</strong>.</p>`
                },
                {
                    subtitle: "Linearità a destra (conseguenza)",
                    content: `<p>Mostriamo che $\\phi$ è anche lineare nel secondo argomento. Per ogni $\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V$ e $a, b \\in \\mathbb{R}$:</p>
<p>$$\\phi(\\mathbf{u},\\; a\\mathbf{v} + b\\mathbf{w}) = \\phi(a\\mathbf{v} + b\\mathbf{w},\\; \\mathbf{u}) \\quad \\text{(simmetria)}$$</p>
<p>$$= a\\,\\phi(\\mathbf{v}, \\mathbf{u}) + b\\,\\phi(\\mathbf{w}, \\mathbf{u}) \\quad \\text{(linearità a sinistra)}$$</p>
<p>$$= a\\,\\phi(\\mathbf{u}, \\mathbf{v}) + b\\,\\phi(\\mathbf{u}, \\mathbf{w}) \\quad \\text{(simmetria)}$$</p>
<p>Quindi bastano linearità a sinistra + simmetria per ottenere la bilinearità completa.</p>`
                }
            ],
            formulas: [
                { label: "Linearità a sinistra", latex: "\\phi(a\\mathbf{u} + b\\mathbf{v}, \\mathbf{w}) = a\\,\\phi(\\mathbf{u}, \\mathbf{w}) + b\\,\\phi(\\mathbf{v}, \\mathbf{w})" },
                { label: "Simmetria", latex: "\\phi(\\mathbf{u}, \\mathbf{v}) = \\phi(\\mathbf{v}, \\mathbf{u})" }
            ]
        },
        {
            id: "s34-esempio-forma",
            type: "section",
            title: "Esempio: Forma Bilineare su ℝ²",
            icon: "✏️",
            content: `<p>Consideriamo $\\phi: \\mathbb{R}^2 \\times \\mathbb{R}^2 \\to \\mathbb{R}$ con $\\mathbf{u} = (x_1, x_2)$ e $\\mathbf{v} = (y_1, y_2)$:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = x_1 y_1 + 3x_1 y_2 + 3x_2 y_1 + 2x_2 y_2$$</p>
<p>Proviamo che è una forma bilineare simmetrica con due metodi.</p>`,
            subsections: [
                {
                    subtitle: "Metodo 1: Verifica diretta",
                    content: `<p><strong>Simmetria:</strong> Scambiando $\\mathbf{u}$ e $\\mathbf{v}$:</p>
<p>$$\\phi(\\mathbf{v}, \\mathbf{u}) = y_1 x_1 + 3y_1 x_2 + 3y_2 x_1 + 2y_2 x_2 = x_1 y_1 + 3x_2 y_1 + 3x_1 y_2 + 2x_2 y_2 = \\phi(\\mathbf{u}, \\mathbf{v}) \\; \\checkmark$$</p>
<p><strong>Linearità a sinistra:</strong> Siano $\\mathbf{u} = (x_1, x_2)$, $\\mathbf{v} = (x_1', x_2')$, $\\mathbf{w} = (y_1, y_2)$ e $a, b \\in \\mathbb{R}$. Allora $a\\mathbf{u} + b\\mathbf{v} = (ax_1 + bx_1',\\; ax_2 + bx_2')$ e:</p>
<p>$$\\phi(a\\mathbf{u} + b\\mathbf{v},\\; \\mathbf{w}) = (ax_1 + bx_1')y_1 + 3(ax_1 + bx_1')y_2 + 3(ax_2 + bx_2')y_1 + 2(ax_2 + bx_2')y_2$$</p>
<p>Distribuendo e raggruppando per $a$ e $b$:</p>
<p>$$= a(x_1 y_1 + 3x_1 y_2 + 3x_2 y_1 + 2x_2 y_2) + b(x_1' y_1 + 3x_1' y_2 + 3x_2' y_1 + 2x_2' y_2)$$</p>
<p>$$= a\\,\\phi(\\mathbf{u}, \\mathbf{w}) + b\\,\\phi(\\mathbf{v}, \\mathbf{w}) \\; \\checkmark$$</p>`
                },
                {
                    subtitle: "Metodo 2: Rappresentazione matriciale",
                    content: `<p>Riscriviamo $\\phi$ in forma matriciale. Raccogliendo:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = x_1(y_1 + 3y_2) + x_2(3y_1 + 2y_2) = \\begin{pmatrix} x_1 & x_2 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix} \\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix}$$</p>
<p>Siano $\\mathbf{x} = [\\mathbf{u}]_{\\mathcal{E}}$, $\\mathbf{y} = [\\mathbf{v}]_{\\mathcal{E}}$, $\\mathbf{z} = [\\mathbf{w}]_{\\mathcal{E}}$ i vettori colonna delle coordinate rispetto alla base canonica $\\mathcal{E}$, e sia $G = \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix}$. Allora:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y}$$</p>
<p>Ora le proprietà seguono direttamente dall'algebra matriciale:</p>
<p><strong>Linearità a sinistra:</strong></p>
<p>$$\\phi(a\\mathbf{u} + b\\mathbf{v},\\; \\mathbf{w}) = (a\\mathbf{x} + b\\mathbf{y})^T G \\mathbf{z} = (a\\mathbf{x}^T + b\\mathbf{y}^T) G \\mathbf{z} = a(\\mathbf{x}^T G \\mathbf{z}) + b(\\mathbf{y}^T G \\mathbf{z}) = a\\,\\phi(\\mathbf{u}, \\mathbf{w}) + b\\,\\phi(\\mathbf{v}, \\mathbf{w})$$</p>
<p><strong>Simmetria:</strong> Il risultato $\\mathbf{x}^T G \\mathbf{y}$ è uno scalare (matrice $1 \\times 1$), quindi coincide con la sua trasposta:</p>
<p>$$(\\mathbf{x}^T G \\mathbf{y})^T = \\mathbf{y}^T G^T \\mathbf{x}$$</p>
<p>Dato che $G$ è simmetrica ($G = G^T$), otteniamo $\\mathbf{y}^T G \\mathbf{x} = \\phi(\\mathbf{v}, \\mathbf{u})$, quindi $\\phi(\\mathbf{u}, \\mathbf{v}) = \\phi(\\mathbf{v}, \\mathbf{u})$. ✓</p>`
                },
                {
                    subtitle: "Confronto tra i due metodi",
                    content: `<p>Il <strong>Metodo 2 è preferibile</strong>, soprattutto all'esame, per due motivi:</p>
<p><strong>1. Generalità:</strong> Mostra che <em>qualsiasi</em> funzione della forma $\\phi(\\mathbf{u}, \\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y}$ con $G$ simmetrica è automaticamente una forma bilineare simmetrica. Non serve verificare ogni volta linearità e simmetria "a mano".</p>
<p><strong>2. Efficienza:</strong> Una volta scritta la matrice $G$, basta controllare che $G = G^T$ per avere la simmetria, e la linearità è garantita dall'algebra matriciale.</p>
<p>Il Metodo 1 (verifica diretta) è utile come esercizio didattico per capire cosa significano le proprietà, ma nella pratica il metodo matriciale è più potente e rapido.</p>`
                }
            ],
            formulas: [
                { label: "Forma bilineare dell'esempio", latex: "\\phi(\\mathbf{u}, \\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y} = \\mathbf{x}^T \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix} \\mathbf{y}" }
            ]
        },
        {
            id: "s34-matrice-gram",
            type: "section",
            title: "La Matrice di Gram",
            icon: "📊",
            content: `<p>L'esempio precedente suggerisce una costruzione generale: data una forma bilineare simmetrica e una base, possiamo sempre rappresentare $\\phi$ attraverso una matrice.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p>Sia $\\phi: V \\times V \\to \\mathbb{R}$ una forma bilineare simmetrica e sia $\\mathcal{B} = \\{\\mathbf{e}_1, \\dots, \\mathbf{e}_n\\}$ una base di $V$. La <strong>matrice di Gram</strong> di $\\phi$ relativa alla base $\\mathcal{B}$ è la matrice $G \\in \\mathbb{R}^{n \\times n}$ definita da:</p>
<p>$$G_{ij} = \\phi(\\mathbf{e}_i, \\mathbf{e}_j), \\qquad i, j = 1, \\dots, n$$</p>
<p>La proprietà fondamentale è che, dati $\\mathbf{u}, \\mathbf{v} \\in V$ con coordinate $\\mathbf{x} = [\\mathbf{u}]_{\\mathcal{B}}$ e $\\mathbf{y} = [\\mathbf{v}]_{\\mathcal{B}}$ rispetto alla base $\\mathcal{B}$:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y}$$</p>`
                },
                {
                    subtitle: "Derivazione della formula φ = x^T G y",
                    content: `<p>Questa formula <strong>non è ovvia</strong> e merita una dimostrazione esplicita. Scriviamo i vettori nelle coordinate rispetto a $\\mathcal{B}$:</p>
<p>$$\\mathbf{u} = \\sum_{i=1}^{n} x_i \\mathbf{e}_i, \\qquad \\mathbf{v} = \\sum_{j=1}^{n} y_j \\mathbf{e}_j$$</p>
<p>Usando la <strong>bilinearità</strong> (linearità in entrambi gli argomenti):</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = \\phi\\!\\left(\\sum_{i=1}^{n} x_i \\mathbf{e}_i,\\; \\sum_{j=1}^{n} y_j \\mathbf{e}_j\\right) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i \\, y_j \\, \\phi(\\mathbf{e}_i, \\mathbf{e}_j)$$</p>
<p>Riconoscendo che $\\phi(\\mathbf{e}_i, \\mathbf{e}_j) = G_{ij}$:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i \\, G_{ij} \\, y_j = \\mathbf{x}^T G \\mathbf{y}$$</p>
<p>L'ultimo passaggio è proprio la definizione del prodotto matriciale $\\mathbf{x}^T G \\mathbf{y}$: la componente $(1,1)$ del risultato è esattamente $\\sum_{i,j} x_i G_{ij} y_j$.</p>`
                },
                {
                    subtitle: "Simmetria della matrice di Gram",
                    content: `<p>La simmetria di $\\phi$ implica che la matrice di Gram è <strong>simmetrica</strong>: $G = G^T$. Infatti:</p>
<p>$$G_{ij} = \\phi(\\mathbf{e}_i, \\mathbf{e}_j) = \\phi(\\mathbf{e}_j, \\mathbf{e}_i) = G_{ji}$$</p>
<p>Questo è un fatto notevole: la matrice di Gram eredita la simmetria dalla forma bilineare.</p>`
                }
            ],
            extra_content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Schema della matrice di Gram</strong></p>
  <p><em>Vettori $\\mathbf{u}, \\mathbf{v} \\in V$ → coordinate $\\mathbf{x} = [\\mathbf{u}]_{\\mathcal{B}}$, $\\mathbf{y} = [\\mathbf{v}]_{\\mathcal{B}}$ rispetto alla base $\\mathcal{B}$ → calcolo $\\mathbf{x}^T G \\mathbf{y}$ → scalare $\\phi(\\mathbf{u}, \\mathbf{v}) \\in \\mathbb{R}$. La matrice $G$ è costruita dalla base $\\mathcal{B}$: $G_{ij} = \\phi(\\mathbf{e}_i, \\mathbf{e}_j)$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            formulas: [
                { label: "Entrate della matrice di Gram", latex: "G_{ij} = \\phi(\\mathbf{e}_i, \\mathbf{e}_j)" },
                { label: "Formula fondamentale", latex: "\\phi(\\mathbf{u}, \\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y}" },
                { label: "Simmetria", latex: "G = G^T" }
            ]
        },
        {
            id: "s34-note-prossimi-passi",
            type: "note_box",
            title: "📝 Dove stiamo andando: prossimi passi con le forme bilineari",
            icon: "📝",
            content: `<p>La matrice di Gram è solo il punto di partenza. Nelle prossime lezioni vedremo:</p>
<p><strong>1. Cambio di base:</strong> Se si cambia base da $\\mathcal{B}$ a $\\mathcal{B}'$ con matrice di passaggio $M$, la matrice di Gram si trasforma come $G' = M^T G M$ (formula di congruenza, diversa dalla similitudine $P^{-1}AP$ degli endomorfismi!).</p>
<p><strong>2. Forme quadratiche:</strong> Ponendo $\\mathbf{v} = \\mathbf{u}$, si ottiene $q(\\mathbf{u}) = \\phi(\\mathbf{u}, \\mathbf{u}) = \\mathbf{x}^T G \\mathbf{x}$, una funzione da $V$ a $\\mathbb{R}$.</p>
<p><strong>3. Diagonalizzazione e segnatura:</strong> Si può sempre trovare una base in cui $G$ diventa diagonale (teorema di Sylvester). Il numero di elementi positivi, negativi e nulli sulla diagonale (la <strong>segnatura</strong>) è un invariante della forma, indipendente dalla base.</p>
<p><strong>4. Forme non degeneri:</strong> Una forma è non degenere se $\\det G \\neq 0$, cioè se non esistono vettori "invisibili" alla forma.</p>`
        },
        {
            id: "s34-oral-diag",
            type: "oral_box",
            title: "🎯 Domanda d'esame: Diagonalizzabilità e autovalori distinti",
            icon: "🎯",
            content: `<p><strong>Domanda tipica:</strong> "Se un endomorfismo $f: V \\to V$ con $\\dim V = n$ ha $n$ autovalori distinti, è diagonalizzabile? E se ha autovalori ripetuti?"</p>
<p><strong>Risposta attesa:</strong> Sì, se ci sono $n$ autovalori distinti, $f$ è certamente diagonalizzabile (per il lemma sull'indipendenza degli autovettori). Se ci sono autovalori ripetuti, la diagonalizzabilità <strong>non è garantita</strong>: bisogna verificare che per ogni autovalore $\\lambda_i$, la molteplicità geometrica $\\dim V_{\\lambda_i}$ sia uguale alla molteplicità algebrica $m_a(\\lambda_i)$.</p>`
        }
    ],

    oral_cards: [
        {
            type: "dimostrazione",
            front: "Enuncia e dimostra il lemma sull'indipendenza lineare di autovettori relativi ad autovalori distinti.",
            back: "Se $\\lambda_1, \\dots, \\lambda_r$ sono autovalori distinti di $f$ e per ogni $i$ si sceglie un insieme $\\mathcal{B}_i$ di autovettori l.i. relativi a $\\lambda_i$, allora $\\mathcal{B} = \\bigcup \\mathcal{B}_i$ è l.i. La dimostrazione è per induzione su $r$: si parte da una combinazione lineare nulla $\\sum a_{ji}\\mathbf{v}_{ji} = \\mathbf{0}$, si applica $f$ per ottenere $\\sum a_{ji}\\lambda_i\\mathbf{v}_{ji} = \\mathbf{0}$, si sottrae la prima moltiplicata per $\\lambda_1$ per eliminare i termini con $i=1$, e per ipotesi induttiva i coefficienti per $i \\geq 2$ sono nulli (perché $\\lambda_i - \\lambda_1 \\neq 0$). Sostituendo, anche i coefficienti per $i=1$ risultano nulli."
        },
        {
            type: "tranello",
            front: "Un endomorfismo su ℝ⁴ ha polinomio caratteristico $p(t) = (t-1)^2(t-3)^2$. È diagonalizzabile?",
            back: "Non si può concludere solo dal polinomio caratteristico! Bisogna calcolare la dimensione degli autospazi $V_1$ e $V_3$. Se $\\dim V_1 = 2$ e $\\dim V_3 = 2$ (molteplicità geometrica = algebrica per entrambi), allora sì. Se anche solo una molteplicità geometrica è 1, allora no. L'errore comune è pensare che autovalori ripetuti implichino non-diagonalizzabilità."
        },
        {
            type: "definizione",
            front: "Cos'è una forma bilineare simmetrica?",
            back: "È una funzione $\\phi: V \\times V \\to \\mathbb{R}$ che soddisfa: (1) linearità a sinistra: $\\phi(a\\mathbf{u} + b\\mathbf{v}, \\mathbf{w}) = a\\phi(\\mathbf{u},\\mathbf{w}) + b\\phi(\\mathbf{v},\\mathbf{w})$; (2) simmetria: $\\phi(\\mathbf{u},\\mathbf{v}) = \\phi(\\mathbf{v},\\mathbf{u})$. Da queste due segue anche la linearità a destra, quindi $\\phi$ è lineare in entrambi gli argomenti. Il prodotto scalare standard è un caso particolare."
        },
        {
            type: "definizione",
            front: "Cos'è la matrice di Gram di una forma bilineare simmetrica φ rispetto a una base $\\mathcal{B}$?",
            back: "Data una base $\\mathcal{B} = \\{\\mathbf{e}_1, \\dots, \\mathbf{e}_n\\}$, la matrice di Gram è $G \\in \\mathbb{R}^{n \\times n}$ con $G_{ij} = \\phi(\\mathbf{e}_i, \\mathbf{e}_j)$. È sempre simmetrica ($G = G^T$). La proprietà fondamentale è che $\\phi(\\mathbf{u}, \\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y}$, dove $\\mathbf{x}$ e $\\mathbf{y}$ sono le coordinate di $\\mathbf{u}$ e $\\mathbf{v}$ nella base $\\mathcal{B}$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che φ(u,v) = x^T G y, dove G è la matrice di Gram.",
            back: "Si scrive $\\mathbf{u} = \\sum_i x_i \\mathbf{e}_i$ e $\\mathbf{v} = \\sum_j y_j \\mathbf{e}_j$. Per bilinearità: $\\phi(\\mathbf{u},\\mathbf{v}) = \\sum_{i,j} x_i y_j \\phi(\\mathbf{e}_i, \\mathbf{e}_j) = \\sum_{i,j} x_i G_{ij} y_j$. Questa doppia somma è esattamente il prodotto matriciale $\\mathbf{x}^T G \\mathbf{y}$."
        },
        {
            type: "domanda",
            front: "Perché dalla linearità a sinistra e dalla simmetria segue la linearità a destra?",
            back: "Si usa la simmetria per 'spostare' l'argomento che vogliamo trattare: $\\phi(\\mathbf{u}, a\\mathbf{v}+b\\mathbf{w}) = \\phi(a\\mathbf{v}+b\\mathbf{w}, \\mathbf{u})$ (simmetria) $= a\\phi(\\mathbf{v},\\mathbf{u}) + b\\phi(\\mathbf{w},\\mathbf{u})$ (linearità a sinistra) $= a\\phi(\\mathbf{u},\\mathbf{v}) + b\\phi(\\mathbf{u},\\mathbf{w})$ (simmetria). Tre passaggi, tutti giustificati."
        },
        {
            type: "formula",
            front: "Come si fattorizza e risolve il polinomio caratteristico dell'esempio $\\det(A - tI) = -t^3 + 3t^2 - 2t$?",
            back: "Si raccoglie $-t$: $-t(t^2 - 3t + 2)$. Il trinomio $t^2 - 3t + 2$ ha radici $t=1$ e $t=2$ (somma 3, prodotto 2). Quindi $p_f(t) = -t(t-1)(t-2)$, con autovalori $\\lambda = 0, 1, 2$."
        },
        {
            type: "domanda",
            front: "Perché il Metodo 2 (matriciale) è preferibile al Metodo 1 (verifica diretta) per dimostrare che φ è bilineare simmetrica?",
            back: "Perché una volta scritto $\\phi(\\mathbf{u},\\mathbf{v}) = \\mathbf{x}^T G \\mathbf{y}$, basta controllare che $G = G^T$ per avere la simmetria, e la linearità è automatica (proprietà dell'algebra matriciale). Il risultato è generale: qualsiasi funzione della forma $\\mathbf{x}^T G \\mathbf{y}$ con $G$ simmetrica è una forma bilineare simmetrica."
        },
        {
            type: "tranello",
            front: "Qual è il trucco chiave nella dimostrazione del lemma per induzione sugli autovettori?",
            back: "Il trucco è applicare $f$ alla combinazione lineare nulla per ottenere una seconda relazione (con i $\\lambda_i$), poi sottrarre la prima moltiplicata per $\\lambda_1$. Questo elimina tutti i termini con $i=1$ (perché $\\lambda_1 - \\lambda_1 = 0$), lasciando una combinazione di autovettori relativi a $r-1$ autovalori distinti, a cui si applica l'ipotesi induttiva."
        }
    ]
};

