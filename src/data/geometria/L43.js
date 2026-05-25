const LESSON = {
    id: "L43", date: "Lezione 32 — 19 Mag 2026",
    title: "Forma canonica per congruenza e classificazione degli spazi pseudoeuclidei",
    abstract: "Dalla base ortonormale alla forma canonica per congruenza: unicità garantita dal Teorema di Sylvester, criterio di congruenza tra matrici simmetriche, classificazione completa degli spazi pseudoeuclidei (definito positivo, semidefinito, indefinito) e introduzione allo spazio euclideo.",

    sections: [
        {
            id: "s43-richiamo-base-ortonormale",
            type: "section",
            title: "Richiamo: base ortonormale e forma canonica",
            icon: "🧱",
            content: `<p>Nella lezione precedente abbiamo dimostrato che in ogni spazio pseudoeuclideo $(V, \\phi)$ di dimensione $n$, rango $p$ e indice $r$, esiste una <strong>base ortonormale</strong> $\\mathcal{C}$ tale che la matrice di Gram assuma la forma diagonale a blocchi:</p>
<p>$$G_{\\mathcal{C}}^{\\mathcal{C}}(\\phi) = \\begin{bmatrix} I_r & & \\\\ & -I_{p-r} & \\\\ & & \\boldsymbol{0}_{n-p} \\end{bmatrix}$$</p>
<p>La costruzione partiva da una base ortogonale (ottenuta ad esempio con l'Algoritmo di Gauss-Lagrange) e procedeva normalizzando opportunamente i vettori. Da questo risultato di esistenza discende una nozione fondamentale per la teoria delle matrici simmetriche reali rispetto alla relazione di congruenza.</p>`
        },
        {
            id: "s43-forma-canonica-congruenza",
            type: "section",
            title: "La forma canonica rispetto alla congruenza",
            icon: "📐",
            content: `<p>Riprendiamo i risultati conclusivi della lezione precedente, per battezzare la forma canonica e metterne in evidenza l'unicità.</p>`,
            subsections: [
                {
                    subtitle: "Proposizione: esistenza della base ortonormale",
                    content: `<p>Sia $(V, \\phi)$ uno spazio pseudoeuclideo di dimensione $n$, rango $p$ e indice $r$. Allora esiste una base ortonormale $\\mathcal{B}$ per $(V, \\phi)$, cioè una base $\\mathcal{B}$ tale che:</p>
<p>$$G_{\\mathcal{B}}^{\\mathcal{B}}(\\phi) = \\begin{bmatrix} I_r & & \\\\ & -I_{p-r} & \\\\ & & \\boldsymbol{0}_{n-p} \\end{bmatrix}$$</p>
<p>Se $\\mathbf{x}$ denotano le coordinate rispetto alla base $\\mathcal{B}$, allora la forma bilineare e la forma quadratica associata si esprimono come:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = x_1 y_1 + \\cdots + x_r y_r - x_{r+1} y_{r+1} - \\cdots - x_p y_p$$</p>
<p>$$q(\\mathbf{u}) = x_1^2 + \\cdots + x_r^2 - x_{r+1}^2 - \\cdots - x_p^2$$</p>`
                },
                {
                    subtitle: "Corollario 1: congruenza alla forma canonica",
                    content: `<p>Sia $G$ una matrice reale simmetrica $n \\times n$, di rango $p$ e indice $r$. Allora $G$ è <strong>congruente</strong> alla matrice:</p>
<p>$$\\begin{bmatrix} I_r & & \\\\ & -I_{p-r} & \\\\ & & \\boldsymbol{0}_{n-p} \\end{bmatrix}$$</p>
<p>Questa matrice si dice <strong>la forma canonica di $G$ rispetto alla congruenza</strong>.</p>
<p>Ricordiamo che due matrici $G$ e $G'$ si dicono <em>congruenti</em> se esiste una matrice invertibile $P$ tale che $G' = P^T G P$. La forma canonica rispetto alla congruenza è <strong>unica</strong>: per il Teorema di Sylvester, rango e indice sono invarianti per congruenza, sicché due forme canoniche distinte non possono essere congruenti tra loro.</p>`
                },
                {
                    subtitle: "Corollario 2: criterio di confronto tra matrici simmetriche",
                    content: `<p>Siano $G$ e $G'$ due matrici reali simmetriche $n \\times n$. Allora:</p>
<p>$$G \\text{ e } G' \\text{ sono congruenti} \\iff \\text{hanno lo stesso rango e lo stesso indice}$$</p>
<p><strong>Dimostrazione.</strong> Se hanno lo stesso rango e lo stesso indice, allora hanno la stessa forma canonica rispetto alla congruenza, e per transitività della relazione di congruenza sono congruenti tra loro. Viceversa, se $G$ e $G'$ sono congruenti, per il Teorema di Sylvester hanno lo stesso rango e lo stesso indice. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Forma canonica per congruenza", latex: "\\begin{bmatrix} I_r & & \\\\ & -I_{p-r} & \\\\ & & \\boldsymbol{0}_{n-p} \\end{bmatrix}" },
                { label: "Criterio di congruenza", latex: "G \\sim G' \\iff \\text{stesso rango } p \\text{ e stesso indice } r" }
            ]
        },
        {
            id: "s43-teorema-sylvester",
            type: "note_box",
            title: "Teorema di Sylvester (richiamo)",
            icon: "📌",
            content: `<p>Nel testo si fa riferimento più volte al <strong>Teorema di Sylvester</strong> (detto anche Legge d'inerzia di Sylvester). Questo teorema garantisce che <strong>rango e indice di una matrice simmetrica sono invarianti per congruenza</strong>: se $G' = P^T G P$ con $P$ invertibile, allora $G$ e $G'$ hanno lo stesso rango $p$ e lo stesso indice $r$.</p>
<p>È proprio questo teorema a rendere la forma canonica per congruenza <strong>unica</strong> e a fondare il criterio di confronto del Corollario 2.</p>`
        },
        {
            id: "s43-esempio-base-ortonormale",
            type: "section",
            title: "Esempio 1: calcolo di una base ortonormale",
            icon: "🔢",
            content: `<p>Si consideri lo spazio pseudoeuclideo $(\\mathbb{R}^3, \\phi)$ dove $\\phi$ è la forma bilineare simmetrica definita ponendo:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = x_1 y_1 - 2x_1 y_2 + 3x_1 y_3 - 2x_2 y_1 + 6x_2 y_2 - 10x_2 y_3 + 3x_3 y_1 - 10x_3 y_2 + 8x_3 y_3$$</p>
<p>Qui $\\mathbf{e}_1 = (1,0,0)$, $\\mathbf{e}_2 = (0,1,0)$, $\\mathbf{e}_3 = (0,0,1)$ sono i vettori della base canonica di $\\mathbb{R}^3$, e le coordinate $x_i, y_i$ sono le componenti rispetto a questa base.</p>`,
            subsections: [
                {
                    subtitle: "Punto di partenza: la base ortogonale",
                    content: `<p>Applicando l'Algoritmo di Gauss-Lagrange alla matrice di Gram rispetto alla base canonica (procedimento svolto nella lezione precedente), si ottiene che la base:</p>
<p>$$\\mathcal{B} = \\{\\mathbf{e}_1,\\; 2\\mathbf{e}_1 + \\mathbf{e}_2,\\; \\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3\\}$$</p>
<p>è una <strong>base ortogonale</strong> (cioè i vettori sono a due a due ortogonali rispetto a $\\phi$), con i seguenti valori del prodotto:</p>
<p>$$\\phi(\\mathbf{e}_1, \\mathbf{e}_1) = 1, \\qquad \\phi(2\\mathbf{e}_1 + \\mathbf{e}_2,\\, 2\\mathbf{e}_1 + \\mathbf{e}_2) = 2, \\qquad \\phi(\\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3,\\, \\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3) = -9$$</p>
<p>Questa base non è ortonormale perché i valori diagonali non sono $\\pm 1$. Occorre normalizzare.</p>`
                },
                {
                    subtitle: "Normalizzazione dei vettori",
                    content: `<p>Si definiscono i vettori normalizzati. Per i vettori con $\\phi$-quadrato positivo, si divide per la radice del quadrato; per quelli con quadrato negativo, si divide per la radice dell'opposto:</p>
<p>$$\\mathbf{c}_1 := \\frac{\\mathbf{e}_1}{\\sqrt{\\phi(\\mathbf{e}_1, \\mathbf{e}_1)}} = \\mathbf{e}_1$$</p>
<p>$$\\mathbf{c}_2 := \\frac{2\\mathbf{e}_1 + \\mathbf{e}_2}{\\sqrt{\\phi(2\\mathbf{e}_1 + \\mathbf{e}_2,\\, 2\\mathbf{e}_1 + \\mathbf{e}_2)}} = \\frac{2\\mathbf{e}_1 + \\mathbf{e}_2}{\\sqrt{2}}$$</p>
<p>$$\\mathbf{c}_3 := \\frac{\\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3}{\\sqrt{-\\phi(\\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3,\\, \\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3)}} = \\frac{\\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3}{\\sqrt{9}} = \\frac{\\mathbf{e}_1 + 2\\mathbf{e}_2 + \\mathbf{e}_3}{3}$$</p>
<p>Esplicitando in coordinate (ricordando che $\\frac{2}{\\sqrt{2}} = \\sqrt{2}$):</p>
<p>$$\\mathbf{c}_2 = \\left(\\frac{2}{\\sqrt{2}},\\, \\frac{1}{\\sqrt{2}},\\, 0\\right) = \\left(\\sqrt{2},\\, \\frac{1}{\\sqrt{2}},\\, 0\\right)$$</p>`
                },
                {
                    subtitle: "Base ortonormale e forma canonica",
                    content: `<p>La base ortonormale cercata è dunque:</p>
<p>$$\\mathcal{C} = \\left\\{ (1,0,0),\\; \\left(\\sqrt{2},\\, \\tfrac{1}{\\sqrt{2}},\\, 0\\right),\\; \\left(\\tfrac{1}{3},\\, \\tfrac{2}{3},\\, \\tfrac{1}{3}\\right) \\right\\}$$</p>
<p>La matrice di Gram rispetto a $\\mathcal{C}$ è:</p>
<p>$$G_{\\mathcal{C}}^{\\mathcal{C}}(\\phi) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}$$</p>
<p>Denotando con $\\mathbf{x}'$ le coordinate rispetto a $\\mathcal{C}$:</p>
<p>$$\\phi(\\mathbf{u}, \\mathbf{v}) = x'_1 y'_1 + x'_2 y'_2 - x'_3 y'_3 \\qquad \\text{e} \\qquad q(\\mathbf{u}) = {x'_1}^2 + {x'_2}^2 - {x'_3}^2$$</p>
<p>Questo spazio ha dimensione $n = 3$, rango $p = 3$ e indice $r = 2$: è <strong>indefinito</strong>.</p>`
                }
            ]
        },
        {
            id: "s43-esempio-congruenza",
            type: "section",
            title: "Esempio 2: verifica di congruenza tra matrici",
            icon: "⚖️",
            content: `<p>Dire se le matrici seguenti sono congruenti:</p>
<p>$$\\begin{bmatrix} 1 & -2 & 3 \\\\ -2 & 6 & -10 \\\\ 3 & -10 & 8 \\end{bmatrix}, \\qquad \\begin{bmatrix} -167 & 0 & 0 \\\\ 0 & 16 & 0 \\\\ 0 & 0 & 8\\pi \\end{bmatrix}$$</p>`,
            subsections: [
                {
                    subtitle: "Svolgimento",
                    content: `<p>Dagli esempi precedenti sappiamo che la prima matrice ha <strong>rango 3</strong> e <strong>indice 2</strong> (due valori positivi e uno negativo nella forma canonica).</p>
<p>La seconda matrice è già diagonale: ha un elemento negativo ($-167$) e due positivi ($16$ e $8\\pi$). Dunque ha anch'essa <strong>rango 3</strong> e <strong>indice 2</strong>.</p>
<p>Per il criterio di congruenza (Corollario 2), le due matrici <strong>sono congruenti</strong>.</p>
<p>Da notare: non importa il valore esatto degli elementi — solo il numero di positivi, negativi e nulli. Matrici dall'aspetto completamente diverso possono essere congruenti!</p>`
                }
            ]
        },
        {
            id: "s43-classificazione-forme-quadratiche",
            type: "section",
            title: "Classificazione delle forme quadratiche in dimensione bassa",
            icon: "📋",
            content: `<p>I risultati sulla forma canonica permettono di <strong>elencare esaustivamente</strong> tutte le forme quadratiche possibili su $\\mathbb{R}^n$ (a meno di cambiamento di coordinate), classificandole mediante la terna $(p, r, s)$ dove $p$ è il rango, $r$ è l'indice e $s = 2r - p$ è la <strong>segnatura</strong>.</p>
<p>La segnatura $s$ è definita come la differenza tra il numero di $+1$ e il numero di $-1$ nella forma canonica: se ci sono $r$ termini positivi e $p - r$ termini negativi, allora $s = r - (p-r) = 2r - p$.</p>`,
            subsections: [
                {
                    subtitle: "Forme quadratiche su ℝ",
                    content: `<p>Su $\\mathbb{R}$, le forme quadratiche $q: \\mathbb{R} \\to \\mathbb{R}$ si riducono a tre casi:</p>
<ul>
<li>$(p,r,s) = (1,1,1)$: $q(\\mathbf{u}) = x_1^2$</li>
<li>$(p,r,s) = (1,0,-1)$: $q(\\mathbf{u}) = -x_1^2$</li>
<li>$(p,r,s) = (0,0,0)$: $q(\\mathbf{u}) = 0$</li>
</ul>`
                },
                {
                    subtitle: "Forme quadratiche su ℝ²",
                    content: `<p>Su $\\mathbb{R}^2$, ci sono <strong>6 classi</strong>:</p>
<ul>
<li>$(2,2,2)$: $q(\\mathbf{u}) = x_1^2 + x_2^2$ — definita positiva</li>
<li>$(2,1,0)$: $q(\\mathbf{u}) = x_1^2 - x_2^2$ — indefinita</li>
<li>$(2,0,-2)$: $q(\\mathbf{u}) = -x_1^2 - x_2^2$ — definita negativa</li>
<li>$(1,1,1)$: $q(\\mathbf{u}) = x_1^2$ — semidefinita positiva</li>
<li>$(1,0,-1)$: $q(\\mathbf{u}) = -x_1^2$ — semidefinita negativa</li>
<li>$(0,0,0)$: $q(\\mathbf{u}) = 0$ — nulla</li>
</ul>`
                },
                {
                    subtitle: "Forme quadratiche su ℝ³",
                    content: `<p>Su $\\mathbb{R}^3$, ci sono <strong>10 classi</strong>:</p>
<ul>
<li>$(3,3,3)$: $q(\\mathbf{u}) = x_1^2 + x_2^2 + x_3^2$ — definita positiva</li>
<li>$(3,2,1)$: $q(\\mathbf{u}) = x_1^2 + x_2^2 - x_3^2$ — indefinita</li>
<li>$(3,1,-1)$: $q(\\mathbf{u}) = x_1^2 - x_2^2 - x_3^2$ — indefinita</li>
<li>$(3,0,-3)$: $q(\\mathbf{u}) = -x_1^2 - x_2^2 - x_3^2$ — definita negativa</li>
<li>$(2,2,2)$: $q(\\mathbf{u}) = x_1^2 + x_2^2$ — semidefinita positiva</li>
<li>$(2,1,0)$: $q(\\mathbf{u}) = x_1^2 - x_2^2$ — indefinita</li>
<li>$(2,0,-2)$: $q(\\mathbf{u}) = -x_1^2 - x_2^2$ — semidefinita negativa</li>
<li>$(1,1,1)$: $q(\\mathbf{u}) = x_1^2$ — semidefinita positiva</li>
<li>$(1,0,-1)$: $q(\\mathbf{u}) = -x_1^2$ — semidefinita negativa</li>
<li>$(0,0,0)$: $q(\\mathbf{u}) = 0$ — nulla</li>
</ul>`
                },
                {
                    subtitle: "Classificazione delle matrici simmetriche 2×2 per congruenza",
                    content: `<p>Le matrici reali simmetriche $2 \\times 2$ si ripartiscono in <strong>6 classi di congruenza</strong>, ciascuna rappresentata dalla forma canonica corrispondente:</p>
<ul>
<li>$(2,2,2)$: $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$</li>
<li>$(2,1,0)$: $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$</li>
<li>$(2,0,-2)$: $\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$</li>
<li>$(1,1,1)$: $\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$</li>
<li>$(1,0,-1)$: $\\begin{bmatrix} -1 & 0 \\\\ 0 & 0 \\end{bmatrix}$</li>
<li>$(0,0,0)$: $\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$</li>
</ul>`
                }
            ]
        },
        {
            id: "s43-classificazione-spazi",
            type: "section",
            title: "Classificazione degli spazi pseudoeuclidei",
            icon: "🗺️",
            content: `<p>I valori della terna $(p, r, s)$ non si limitano a fornire un'etichetta combinatoria: hanno un <strong>significato geometrico e analitico</strong> molto preciso, che si traduce nel segno assunto dalla forma quadratica $q(\\mathbf{u}) = \\phi(\\mathbf{u}, \\mathbf{u})$.</p>`,
            subsections: [
                {
                    subtitle: "Definito positivo",
                    content: `<p>Lo spazio $(V, \\phi)$ è <strong>definito positivo</strong> se $n = p = r$.</p>
<p>Equivalentemente, in opportune coordinate:</p>
<p>$$q(\\mathbf{u}) = x_1^2 + x_2^2 + \\cdots + x_n^2$$</p>
<p>Equivalentemente: $q(\\mathbf{u}) \\gt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}_V$.</p>`
                },
                {
                    subtitle: "Semidefinito positivo",
                    content: `<p>Lo spazio $(V, \\phi)$ è <strong>semidefinito positivo</strong> se $n \\gt p = r$.</p>
<p>Equivalentemente, in opportune coordinate:</p>
<p>$$q(\\mathbf{u}) = x_1^2 + x_2^2 + \\cdots + x_r^2 \\quad \\text{con } r \\lt n$$</p>
<p>Equivalentemente: $q(\\mathbf{u}) \\geq 0$ per ogni $\\mathbf{u}$, ed esiste un $\\mathbf{u} \\neq \\boldsymbol{0}_V$ tale che $q(\\mathbf{u}) = 0$.</p>`
                },
                {
                    subtitle: "Definito negativo",
                    content: `<p>Lo spazio $(V, \\phi)$ è <strong>definito negativo</strong> se $(V, -\\phi)$ è definito positivo, cioè se $n = p$ e $r = 0$.</p>
<p>Equivalentemente, in opportune coordinate:</p>
<p>$$q(\\mathbf{u}) = -x_1^2 - x_2^2 - \\cdots - x_n^2$$</p>
<p>Equivalentemente: $q(\\mathbf{u}) \\lt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}_V$.</p>`
                },
                {
                    subtitle: "Semidefinito negativo",
                    content: `<p>Lo spazio $(V, \\phi)$ è <strong>semidefinito negativo</strong> se $(V, -\\phi)$ è semidefinito positivo, cioè se $n \\gt p$ e $r = 0$.</p>
<p>Equivalentemente, in opportune coordinate:</p>
<p>$$q(\\mathbf{u}) = -x_1^2 - x_2^2 - \\cdots - x_p^2 \\quad \\text{con } p \\lt n$$</p>
<p>Equivalentemente: $q(\\mathbf{u}) \\leq 0$ per ogni $\\mathbf{u}$, ed esiste un $\\mathbf{u} \\neq \\boldsymbol{0}_V$ tale che $q(\\mathbf{u}) = 0$.</p>`
                },
                {
                    subtitle: "Indefinito",
                    content: `<p>Lo spazio $(V, \\phi)$ è <strong>indefinito</strong> se esistono vettori $\\mathbf{u}, \\mathbf{v}$ non nulli tali che $q(\\mathbf{u}) \\gt 0$ e $q(\\mathbf{v}) \\lt 0$.</p>
<p>Equivalentemente: $0 \\lt r \\lt p$.</p>
<p>In opportune coordinate la forma quadratica contiene sia termini positivi che negativi:</p>
<p>$$q(\\mathbf{u}) = x_1^2 + \\cdots + x_r^2 - x_{r+1}^2 - \\cdots - x_p^2 \\quad \\text{con } 0 \\lt r \\lt p$$</p>`
                }
            ],
            formulas: [
                { label: "Definito positivo", latex: "n = p = r \\iff q(\\mathbf{u}) > 0 \\;\\forall\\, \\mathbf{u} \\neq \\boldsymbol{0}" },
                { label: "Semidefinito positivo", latex: "n > p = r \\iff q(\\mathbf{u}) \\geq 0 \\;\\forall\\, \\mathbf{u}" },
                { label: "Definito negativo", latex: "n = p,\\; r = 0 \\iff q(\\mathbf{u}) < 0 \\;\\forall\\, \\mathbf{u} \\neq \\boldsymbol{0}" },
                { label: "Indefinito", latex: "0 < r < p" }
            ],
            extra_content: `<div class="table-container"><table><thead><tr><th>Tipo</th><th>Condizione su $(n, p, r)$</th><th>Segno di $q$</th></tr></thead><tbody><tr><td>Definito positivo</td><td>$n = p = r$</td><td>$q(\\mathbf{u}) \\gt 0$ per $\\mathbf{u} \\neq \\boldsymbol{0}$</td></tr><tr><td>Semidefinito positivo</td><td>$n \\gt p = r$</td><td>$q(\\mathbf{u}) \\geq 0$, con $q = 0$ per qualche $\\mathbf{u} \\neq \\boldsymbol{0}$</td></tr><tr><td>Definito negativo</td><td>$n = p$, $r = 0$</td><td>$q(\\mathbf{u}) \\lt 0$ per $\\mathbf{u} \\neq \\boldsymbol{0}$</td></tr><tr><td>Semidefinito negativo</td><td>$n \\gt p$, $r = 0$</td><td>$q(\\mathbf{u}) \\leq 0$, con $q = 0$ per qualche $\\mathbf{u} \\neq \\boldsymbol{0}$</td></tr><tr><td>Indefinito</td><td>$0 \\lt r \\lt p$</td><td>$q$ assume sia valori positivi che negativi</td></tr></tbody></table></div>`
        },
        {
            id: "s43-matrici-definite-positive",
            type: "section",
            title: "Matrici definite positive e notazione",
            icon: "✅",
            content: `<p>La classificazione si trasferisce alle matrici reali simmetriche. Una matrice simmetrica $G$ ($n \\times n$) si dice <strong>definita positiva</strong> se la forma quadratica</p>
<p>$$\\mathbf{x} \\in \\mathbb{R}^n \\;\\mapsto\\; \\mathbf{x}^T G\\, \\mathbf{x} \\in \\mathbb{R}$$</p>
<p>è definita positiva. In tal caso si può scrivere $G \\gt 0$.</p>`,
            subsections: [
                {
                    subtitle: "Attenzione alla notazione G > 0",
                    content: `<p>La notazione $G \\gt 0$ per matrici simmetriche indica che $G$ è <strong>definita positiva</strong>, <em>non</em> che ogni elemento di $G$ è positivo. Analogamente, $G \\geq 0$ indica semidefinita positiva. Si tratta di una notazione standard ma potenzialmente fuorviante: ad esempio la matrice $\\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$ è definita positiva (cioè $G \\gt 0$) pur avendo elementi negativi.</p>`
                },
                {
                    subtitle: "Caratterizzazione tramite fattorizzazione",
                    content: `<p>Una matrice reale simmetrica $G$ è definita positiva se e solo se è congruente a $I$, cioè se e solo se esiste una matrice invertibile $P$ tale che:</p>
<p>$$G = P^T P$$</p>
<p>Dunque, facendo variare $P$ nell'insieme delle matrici invertibili, le matrici $P^T P$ descrivono <strong>tutte e sole</strong> le matrici definite positive.</p>`
                }
            ],
            formulas: [
                { label: "Matrice definita positiva", latex: "G > 0 \\iff \\exists\\, P \\text{ invertibile}: G = P^T P" }
            ]
        },
        {
            id: "s43-esempi-classificazione",
            type: "section",
            title: "Esempi di classificazione",
            icon: "🏷️",
            content: `<p>Vediamo come la classificazione si declina in dimensione bassa con esempi concreti.</p>`,
            subsections: [
                {
                    subtitle: "Esempi su ℝ²",
                    content: `<p>Su $\\mathbb{R}^2$:</p>
<ul>
<li>$q(\\mathbf{u}) = x_1^2 + x_2^2$ è <strong>definita positiva</strong></li>
<li>$q(\\mathbf{u}) = x_1^2$ è <strong>semidefinita positiva</strong></li>
<li>$q(\\mathbf{u}) = -x_1^2 - x_2^2$ è <strong>definita negativa</strong></li>
<li>$q(\\mathbf{u}) = -x_1^2$ è <strong>semidefinita negativa</strong></li>
<li>$q(\\mathbf{u}) = x_1^2 - x_2^2$ è <strong>indefinita</strong></li>
</ul>`
                },
                {
                    subtitle: "Esempi su ℝ³",
                    content: `<p>Su $\\mathbb{R}^3$:</p>
<ul>
<li>$q(\\mathbf{u}) = x_1^2 + x_2^2 + x_3^2$ — definita positiva</li>
<li>$q(\\mathbf{u}) = -x_1^2 - x_2^2 - x_3^2$ — definita negativa</li>
<li>$q(\\mathbf{u}) = x_1^2 + x_2^2$ e $q(\\mathbf{u}) = x_1^2$ — semidefinite positive</li>
<li>$q(\\mathbf{u}) = -x_1^2 - x_2^2$ e $q(\\mathbf{u}) = -x_1^2$ — semidefinite negative</li>
<li>$q(\\mathbf{u}) = x_1^2 + x_2^2 - x_3^2$, $q(\\mathbf{u}) = x_1^2 - x_2^2 - x_3^2$, $q(\\mathbf{u}) = x_1^2 - x_2^2$ — indefinite</li>
</ul>`
                },
                {
                    subtitle: "Esempi notevoli",
                    content: `<p><strong>(i)</strong> Lo spazio $(\\mathbb{R}^n, \\text{prodotto punto})$ è <strong>definito positivo</strong>.</p>
<p><strong>(ii)</strong> Lo spazio $(\\mathcal{V}_O, \\text{prodotto scalare geometrico})$ è <strong>definito positivo</strong>.</p>
<p><strong>(iii)</strong> Lo spazio $(\\mathbb{R}^4, \\phi)$ con coordinate $x_1, x_2, x_3, t$ e forma quadratica</p>
<p>$$q(\\mathbf{u}) = x_1^2 + x_2^2 + x_3^2 - t^2$$</p>
<p>è <strong>indefinito</strong> (ha rango $p = 4$ e indice $r = 3$, quindi $0 \\lt r \\lt p$). Questo spazio è detto <strong>spazio di Minkowski</strong>.</p>
<p>Lo spazio di Minkowski è il modello matematico della <em>relatività speciale</em> di Einstein: le coordinate $x_1, x_2, x_3$ rappresentano lo spazio e $t$ rappresenta il tempo. La forma quadratica che combina termini spaziali con segno positivo e il termine temporale con segno negativo è ciò che distingue la geometria relativistica da quella euclidea.</p>`
                }
            ]
        },
        {
            id: "s43-spazi-euclidei",
            type: "section",
            title: "Spazi euclidei e prospettive",
            icon: "🎯",
            content: `<p>Tra tutti gli spazi pseudoeuclidei, risultano di grande interesse gli spazi <strong>definiti positivi</strong>, perché sono quelli che più si avvicinano agli spazi geometrici. Uno spazio pseudoeuclideo definito positivo si dice <strong>spazio euclideo</strong>.</p>
<p>Per riconoscere se uno spazio pseudoeuclideo è oppure no uno spazio euclideo, possiamo applicare l'<strong>Algoritmo di Gauss-Lagrange</strong>: se tutti i coefficienti diagonali ottenuti sono positivi, lo spazio è euclideo. Ma ci sono anche altri criteri (come il criterio dei minori principali di Sylvester), che verranno trattati nella prossima lezione.</p>`,
            formulas: [
                { label: "Spazio euclideo", latex: "(V, \\phi) \\text{ euclideo} \\iff n = p = r \\iff q(\\mathbf{u}) > 0 \\;\\forall\\, \\mathbf{u} \\neq \\boldsymbol{0}" }
            ]
        },
        {
            id: "s43-alert-congruenza-similitudine",
            type: "alert_box",
            title: "Congruenza ≠ similitudine!",
            icon: "⚠️",
            content: `<p>Non confondere le due relazioni di equivalenza tra matrici:</p>
<ul>
<li><strong>Congruenza:</strong> $G' = P^T G P$ — preserva rango e indice (Sylvester). La forma canonica ha $+1$, $-1$ e $0$ sulla diagonale.</li>
<li><strong>Similitudine:</strong> $A' = P^{-1} A P$ — preserva autovalori, traccia, determinante. La forma canonica è la forma di Jordan.</li>
</ul>
<p>Per matrici simmetriche reali entrambe le relazioni sono definite, ma danno classificazioni diverse! Due matrici possono essere congruenti senza essere simili e viceversa.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è la forma canonica di una matrice simmetrica rispetto alla congruenza?",
            back: "Data una matrice reale simmetrica $G$ di dimensione $n \\times n$, rango $p$ e indice $r$, la sua forma canonica rispetto alla congruenza è la matrice diagonale a blocchi $$\\begin{bmatrix} I_r & & \\\\ & -I_{p-r} & \\\\ & & \\boldsymbol{0}_{n-p} \\end{bmatrix}$$ Per il Teorema di Sylvester, rango e indice sono invarianti per congruenza, quindi questa forma canonica è **unica**."
        },
        {
            type: "domanda",
            front: "Quando due matrici reali simmetriche $n \\times n$ sono congruenti?",
            back: "Due matrici reali simmetriche $G$ e $G'$ di dimensione $n \\times n$ sono congruenti **se e solo se hanno lo stesso rango e lo stesso indice**. Infatti se hanno stessi invarianti hanno la stessa forma canonica, e per transitività della congruenza sono congruenti. Viceversa, se sono congruenti il Teorema di Sylvester garantisce stessi rango e indice."
        },
        {
            type: "definizione",
            front: "Definisci: spazio pseudoeuclideo definito positivo, semidefinito positivo, indefinito.",
            back: "Sia $(V, \\phi)$ pseudoeuclideo di dimensione $n$, rango $p$, indice $r$:\n• **Definito positivo:** $n = p = r$, cioè $q(\\mathbf{u}) \gt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}$\n• **Semidefinito positivo:** $n \gt p = r$, cioè $q(\\mathbf{u}) \\geq 0$ per ogni $\\mathbf{u}$, con $q(\\mathbf{u}) = 0$ per qualche $\\mathbf{u} \\neq \\boldsymbol{0}$\n• **Indefinito:** $0 \lt r \lt p$, cioè $q$ assume sia valori positivi che negativi"
        },
        {
            type: "definizione",
            front: "Cos'è uno spazio euclideo?",
            back: "Uno **spazio euclideo** è uno spazio pseudoeuclideo $(V, \\phi)$ che è **definito positivo**, cioè con $n = p = r$. Equivale a dire che $q(\\mathbf{u}) = \\phi(\\mathbf{u}, \\mathbf{u}) \gt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}$. Esempi: $(\\mathbb{R}^n, \\text{prodotto punto})$ e $(\\mathcal{V}_O, \\text{prodotto scalare geometrico})$."
        },
        {
            type: "formula",
            front: "Quando una matrice simmetrica $G$ è definita positiva? Qual è la caratterizzazione tramite fattorizzazione?",
            back: "$G$ è definita positiva se $\\mathbf{x}^T G \\mathbf{x} \gt 0$ per ogni $\\mathbf{x} \\neq \\boldsymbol{0}$. Equivalentemente, $G$ è congruente a $I$, cioè esiste $P$ invertibile tale che $G = P^T P$. La notazione $G \gt 0$ indica che $G$ è definita positiva (non che ogni elemento è positivo!)."
        },
        {
            type: "domanda",
            front: "Quante classi di congruenza ci sono per le matrici simmetriche reali $2 \\times 2$? Elencale.",
            back: "Ci sono **6 classi**, una per ogni terna $(p,r,s)$ ammissibile:\n1. $(2,2,2)$: $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ — def. positiva\n2. $(2,1,0)$: $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ — indefinita\n3. $(2,0,-2)$: $\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ — def. negativa\n4. $(1,1,1)$: $\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ — semidef. positiva\n5. $(1,0,-1)$: $\\begin{bmatrix} -1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ — semidef. negativa\n6. $(0,0,0)$: $\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$ — nulla"
        },
        {
            type: "domanda",
            front: "Lo spazio di Minkowski $(\\mathbb{R}^4, \\phi)$ con $q(\\mathbf{u}) = x_1^2 + x_2^2 + x_3^2 - t^2$ è definito positivo, negativo o indefinito?",
            back: "È **indefinito**. Infatti ha dimensione $n = 4$, rango $p = 4$ (nessun termine nullo) e indice $r = 3$ (tre termini positivi). Poiché $0 \lt r = 3 \lt p = 4$, lo spazio è indefinito: ad esempio $q(1,0,0,0) = 1 \gt 0$ ma $q(0,0,0,1) = -1 \lt 0$."
        },
        {
            type: "tranello",
            front: "Se due matrici simmetriche hanno gli stessi autovalori, sono necessariamente congruenti?",
            back: "**No!** Avere gli stessi autovalori significa essere **simili**, non congruenti. Due matrici possono essere simili senza essere congruenti e viceversa. Il criterio per la congruenza è avere lo **stesso rango e lo stesso indice** (stesso numero di autovalori positivi, negativi e nulli), non gli stessi autovalori esatti. Ad esempio $\\text{diag}(1,2)$ e $\\text{diag}(3,7)$ sono congruenti (stesso rango 2, stesso indice 2) ma non simili."
        },
        {
            type: "dimostrazione",
            front: "Come si costruisce una base ortonormale a partire da una base ortogonale di uno spazio pseudoeuclideo?",
            back: "Data una base ortogonale $\\mathcal{B} = \\{\\mathbf{b}_1, \\ldots, \\mathbf{b}_n\\}$, si normalizza ciascun vettore:\n• Se $\\phi(\\mathbf{b}_i, \\mathbf{b}_i) \gt 0$: $\\mathbf{c}_i = \\frac{\\mathbf{b}_i}{\\sqrt{\\phi(\\mathbf{b}_i, \\mathbf{b}_i)}}$, così $\\phi(\\mathbf{c}_i, \\mathbf{c}_i) = +1$\n• Se $\\phi(\\mathbf{b}_i, \\mathbf{b}_i) \lt 0$: $\\mathbf{c}_i = \\frac{\\mathbf{b}_i}{\\sqrt{-\\phi(\\mathbf{b}_i, \\mathbf{b}_i)}}$, così $\\phi(\\mathbf{c}_i, \\mathbf{c}_i) = -1$\n• Se $\\phi(\\mathbf{b}_i, \\mathbf{b}_i) = 0$: si lascia invariato (contribuisce al blocco $\\boldsymbol{0}$)"
        },
        {
            type: "definizione",
            front: "Cos'è la segnatura $s$ di una forma quadratica e come si calcola?",
            back: "La **segnatura** è $s = 2r - p$, dove $r$ è l'indice (numero di $+1$ nella forma canonica) e $p$ è il rango ($+1$ più $-1$). Equivalentemente: $s = (\\text{numero di } +1) - (\\text{numero di } -1) = r - (p - r) = 2r - p$. Ad esempio per $q = x_1^2 + x_2^2 - x_3^2$ si ha $p = 3$, $r = 2$, $s = 2 \\cdot 2 - 3 = 1$."
        }
    ]
};

