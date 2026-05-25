const LESSON = {
    id: "L44", date: "Lezione 33 — 21 Mag 2026",
    title: "Spazi euclidei: criteri di positività, norma e angolo",
    abstract: "Criteri operativi per riconoscere matrici definite positive (minori principali e Jacobi), definizione di spazio euclideo, norma, ortogonalità, parallelismo, disuguaglianza di Cauchy-Schwarz, angolo tra vettori e disuguaglianza triangolare.",

    sections: [
        {
            id: "s44-richiami",
            type: "section",
            title: "Richiami e contesto",
            icon: "🔗",
            content: `<p>Nella lezione precedente abbiamo concluso la classificazione qualitativa degli spazi pseudoeuclidei, distinguendo spazi definiti positivi, semidefiniti positivi, definiti negativi, semidefiniti negativi e indefiniti. Abbiamo inoltre osservato che una matrice reale simmetrica $G$ è definita positiva se e solo se è congruente alla matrice identità, ovvero se e solo se esiste una matrice invertibile $P$ tale che $G = P^T P$.</p>
<p>Gli esempi prototipici sono $(\\mathbb{R}^n, \\text{prodotto punto})$ e $(\\mathcal{V}_O, \\text{prodotto scalare geometrico})$ tra i definiti positivi, e lo spazio di Minkowski tra gli indefiniti.</p>
<p>In questa lezione approfondiamo il caso <strong>definito positivo</strong>, che è quello geometricamente più significativo. Introduciamo due criteri operativi (alternativi all'Algoritmo di Gauss-Lagrange) per riconoscere le matrici definite positive, e diamo poi inizio alla teoria degli <strong>spazi euclidei</strong>: norma, ortogonalità, parallelismo, disuguaglianza di Cauchy-Schwarz, angolo, disuguaglianza triangolare.</p>`
        },
        {
            id: "s44-criteri-positive",
            type: "section",
            title: "Criteri per matrici definite positive",
            icon: "✅",
            content: `<p>Tra gli spazi pseudoeuclidei, quelli definiti positivi sono di grande interesse perché più si avvicinano agli spazi geometrici. Uno spazio siffatto si dice <strong>spazio euclideo</strong>. Per riconoscere se uno spazio pseudoeuclideo è euclideo possiamo applicare l'Algoritmo di Gauss-Lagrange, ma ci sono anche altri criteri.</p>`,
            subsections: [
                {
                    subtitle: "Criterio dei minori principali",
                    content: `<p><strong>Proposizione (Criterio dei minori principali).</strong> Sia $G$ una matrice reale simmetrica. Allora:</p>
<p>(1) $G$ è definita positiva se e solo se tutti i suoi <strong>minori principali</strong> hanno determinante positivo;</p>
<p>(2) $G$ è definita negativa se e solo se tutti i suoi minori principali di ordine dispari hanno determinante negativo, e quelli di ordine pari hanno determinante positivo.</p>
<p>Il <strong>minore principale di $G$ di ordine $i$</strong> è la sottomatrice di $G$ formata dagli elementi comuni alle prime $i$ righe ed alle prime $i$ colonne. Per esempio, i minori principali di una matrice $3 \\times 3$:</p>
<p>$$\\begin{pmatrix} g_{11} & g_{12} & g_{13} \\\\ g_{21} & g_{22} & g_{23} \\\\ g_{31} & g_{32} & g_{33} \\end{pmatrix}$$</p>
<p>sono:</p>
<p>$$\\begin{pmatrix} g_{11} \\end{pmatrix}, \\qquad \\begin{pmatrix} g_{11} & g_{12} \\\\ g_{21} & g_{22} \\end{pmatrix}, \\qquad \\begin{pmatrix} g_{11} & g_{12} & g_{13} \\\\ g_{21} & g_{22} & g_{23} \\\\ g_{31} & g_{32} & g_{33} \\end{pmatrix}.$$</p>`
                },
                {
                    subtitle: "Criterio di Jacobi",
                    content: `<p><strong>Proposizione (Criterio di Jacobi).</strong> Sia $G$ una matrice reale simmetrica. Allora $G$ è definita positiva se e solo se tutti i coefficienti del polinomio caratteristico di $G$ sono non nulli ed hanno <strong>segni alterni</strong>.</p>
<p>Da notare: il collegamento tra segni alterni dei coefficienti e positività degli autovalori si spiega tramite le relazioni di Vieta. I coefficienti del polinomio caratteristico sono (a meno di segno) le funzioni simmetriche elementari degli autovalori. Se tutti gli autovalori sono positivi, le somme dei loro prodotti a gruppi sono tutte positive, e i segni nel polinomio caratteristico risultano alterni. Ad esempio, per una matrice $3 \\times 3$ con autovalori $\\lambda_1, \\lambda_2, \\lambda_3 \\gt 0$, il polinomio caratteristico è:</p>
<p>$$p_G(t) = -t^3 + (\\lambda_1 + \\lambda_2 + \\lambda_3)t^2 - (\\lambda_1\\lambda_2 + \\lambda_1\\lambda_3 + \\lambda_2\\lambda_3)t + \\lambda_1\\lambda_2\\lambda_3$$</p>
<p>dove i coefficienti hanno segni $-, +, -, +$ (alterni) proprio perché tutte le somme di prodotti di autovalori positivi sono positive.</p>`
                }
            ]
        },
        {
            id: "s44-esempi-criteri",
            type: "section",
            title: "Esempi sui criteri di positività",
            icon: "📝",
            content: `<p>Vediamo tre esempi che illustrano l'uso dei vari criteri e le loro applicazioni.</p>`,
            subsections: [
                {
                    subtitle: "Esempio 1 — Forma quadratica su ℝ³ e base ortonormale",
                    content: `<p>Si consideri la forma quadratica $q : \\mathbb{R}^3 \\to \\mathbb{R}$ definita da:</p>
<p>$$q(\\mathbf{u}) := 6x_1^2 - 2x_1 x_2 + 6x_1 x_3 + 2x_2^2 + 2x_2 x_3 + 6x_3^2.$$</p>
<p>Provare che $(\\mathbb{R}^3, q)$ è uno spazio euclideo, e calcolarne una base ortonormale.</p>
<p><strong>Svolgimento.</strong> La matrice di Gram di $q$ rispetto alla base canonica $\\mathcal{E}$ è:</p>
<p>$$G_{\\mathcal{E}}^{\\mathcal{E}}(q) = \\begin{pmatrix} 6 & -1 & 3 \\\\ -1 & 2 & 1 \\\\ 3 & 1 & 6 \\end{pmatrix}.$$</p>
<p>Applichiamo l'Algoritmo di Gauss-Lagrange alla matrice aumentata:</p>
<p>$$\\begin{pmatrix} 6 & -1 & 3 & 1 & 0 & 0 \\\\ -1 & 2 & 1 & 0 & 1 & 0 \\\\ 3 & 1 & 6 & 0 & 0 & 1 \\end{pmatrix}$$</p>
<p><strong>Primo passo:</strong> si elimina usando il pivot $6$ in posizione $(1,1)$. Si esegue $R_2 \\to R_2 + \\frac{1}{6} R_1$ e $R_3 \\to R_3 - \\frac{1}{2} R_1$, ottenendo una matrice intermedia con il nuovo pivot $\\frac{11}{6}$ in posizione $(2,2)$.</p>
<p><strong>Secondo passo:</strong> si elimina usando il pivot $\\frac{11}{6}$ per azzerare la posizione $(3,2)$, ottenendo il pivot $\\frac{36}{11}$ in posizione $(3,3)$.</p>
<p>Il risultato finale è:</p>
<p>$$\\begin{pmatrix} 6 & 0 & 0 & 1 & 0 & 0 \\\\ 0 & \\frac{11}{6} & 0 & \\frac{1}{6} & 1 & 0 \\\\ 0 & 0 & \\frac{36}{11} & -\\frac{7}{11} & -\\frac{9}{11} & 1 \\end{pmatrix}.$$</p>
<p>Poiché i tre pivot sono $6, \\frac{11}{6}, \\frac{36}{11}$, tutti positivi, si ha $p = r = 3 = \\dim \\mathbb{R}^3$, quindi $(\\mathbb{R}^3, q)$ è uno <strong>spazio euclideo</strong>.</p>
<p><strong>Base ortonormale.</strong> I vettori della base si leggono dalle righe della parte destra della matrice aumentata; i coefficienti di normalizzazione sono le radici inverse dei pivot corrispondenti. Otteniamo:</p>
<p>$$\\frac{1}{\\sqrt{6}}\\, \\mathbf{e}_1, \\qquad \\sqrt{\\frac{6}{11}}\\left( \\frac{1}{6} \\mathbf{e}_1 + \\mathbf{e}_2 \\right), \\qquad \\sqrt{\\frac{11}{36}}\\left( -\\frac{7}{11} \\mathbf{e}_1 - \\frac{9}{11} \\mathbf{e}_2 + \\mathbf{e}_3 \\right).$$</p>
<p>Rispetto a tale base, se $\\mathbf{x}'$ denotano le nuove coordinate:</p>
<p>$$q(\\mathbf{u}) = {x'_1}^2 + {x'_2}^2 + {x'_3}^2.$$</p>`
                },
                {
                    subtitle: "Esempio 2 — Tre metodi per verificare la positività",
                    content: `<p>Provare che la matrice $G = \\begin{pmatrix} 6 & -1 & 3 \\\\ -1 & 2 & 1 \\\\ 3 & 1 & 6 \\end{pmatrix}$ è definita positiva.</p>
<p><strong>Metodo 1 — Gauss-Lagrange.</strong> Dall'esempio precedente, la matrice diagonale ottenuta è:</p>
<p>$$\\begin{pmatrix} 6 & 0 & 0 \\\\ 0 & \\frac{11}{6} & 0 \\\\ 0 & 0 & \\frac{36}{11} \\end{pmatrix}.$$</p>
<p>L'indice è $3$, quindi $G \\gt 0$.</p>
<p><strong>Metodo 2 — Criterio dei minori principali.</strong> Calcoliamo:</p>
<p>$$\\det \\begin{pmatrix} 6 \\end{pmatrix} = 6 \\gt 0, \\quad \\det \\begin{pmatrix} 6 & -1 \\\\ -1 & 2 \\end{pmatrix} = 11 \\gt 0, \\quad \\det \\begin{pmatrix} 6 & -1 & 3 \\\\ -1 & 2 & 1 \\\\ 3 & 1 & 6 \\end{pmatrix} = 36 \\gt 0.$$</p>
<p>Tutti positivi, quindi $G \\gt 0$ per il Criterio dei minori principali.</p>
<p><strong>Metodo 3 — Criterio di Jacobi.</strong> Il polinomio caratteristico di $G$ è:</p>
<p>$$p_G(t) = -t^3 + 14 t^2 - 49 t + 36.$$</p>
<p>I coefficienti sono $-1, +14, -49, +36$: tutti non nulli e con segni alterni ($-, +, -, +$). Quindi $G \\gt 0$ per il Criterio di Jacobi.</p>`
                },
                {
                    subtitle: "Esempio 3 — Applicazione alla disuguaglianza",
                    content: `<p>Provare che comunque si assegnino tre numeri reali $x, y, z$ non tutti nulli allora:</p>
<p>$$6 x^2 - 2 x y + 6 x z + 2 y^2 + 2 y z + 6 z^2 \\gt 0.$$</p>
<p><strong>Svolgimento.</strong> È sufficiente osservare che l'espressione $q(x, y, z) = 6 x^2 - 2 x y + 6 x z + 2 y^2 + 2 y z + 6 z^2$ è la forma quadratica dell'esempio precedente, che è <strong>definita positiva</strong>. Per definizione, una forma quadratica definita positiva assume valori strettamente positivi su tutti i vettori non nulli.</p>`
                }
            ]
        },
        {
            id: "s44-spazi-euclidei",
            type: "section",
            title: "Spazi euclidei: definizione e proprietà",
            icon: "📐",
            content: `<p><strong>Definizione (Spazio euclideo).</strong> Uno spazio pseudoeuclideo $(V, \\phi)$ si dice <strong>euclideo</strong> se è definito positivo, cioè se $\\phi(\\mathbf{u}, \\mathbf{u}) \\gt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}_V$ in $V$.</p>
<p>Per uno spazio euclideo si adotta la notazione:</p>
<p>$$\\langle \\mathbf{u}, \\mathbf{v} \\rangle := \\phi(\\mathbf{u}, \\mathbf{v}),$$</p>
<p>e si dice che $\\langle \\mathbf{u}, \\mathbf{v} \\rangle$ è il <strong>prodotto scalare</strong> di $\\mathbf{u}$ con $\\mathbf{v}$ nello spazio euclideo $(V, \\langle \\, , \\, \\rangle)$.</p>
<p><strong>Regole di calcolo</strong> in uno spazio euclideo:</p>
<ul>
<li>$\\langle a \\mathbf{u} + b \\mathbf{v}, \\mathbf{w} \\rangle = a \\langle \\mathbf{u}, \\mathbf{w} \\rangle + b \\langle \\mathbf{v}, \\mathbf{w} \\rangle$ (bilinearità)</li>
<li>$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle$ (simmetria)</li>
<li>$\\langle \\mathbf{u}, \\boldsymbol{0}_V \\rangle = 0$ per ogni $\\mathbf{u} \\in V$</li>
<li>$\\langle \\mathbf{u}, \\mathbf{u} \\rangle \\gt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}_V$ (positività)</li>
<li>$\\langle \\mathbf{u} + \\mathbf{v}, \\mathbf{u} + \\mathbf{v} \\rangle = \\langle \\mathbf{u}, \\mathbf{u} \\rangle + \\langle \\mathbf{v}, \\mathbf{v} \\rangle + 2 \\langle \\mathbf{u}, \\mathbf{v} \\rangle$ (espansione del quadrato)</li>
</ul>`,
            subsections: [
                {
                    subtitle: "Norma, ortogonalità, parallelismo",
                    content: `<p>Grazie alla positività, in uno spazio euclideo si può definire la <strong>norma</strong> di un vettore.</p>
<p><strong>Definizione (Norma).</strong> Sia $(V, \\langle \\, , \\, \\rangle)$ uno spazio euclideo. La <strong>norma</strong> $\\| \\mathbf{u} \\|$ di un vettore $\\mathbf{u} \\in V$ (detta anche <em>lunghezza</em> di $\\mathbf{u}$) è definita come:</p>
<p>$$\\| \\mathbf{u} \\| := \\sqrt{\\langle \\mathbf{u}, \\mathbf{u} \\rangle}.$$</p>
<p>Siano $\\mathbf{u}, \\mathbf{v}$ vettori in $(V, \\langle \\, , \\, \\rangle)$:</p>
<ul>
<li>$\\mathbf{u}, \\mathbf{v}$ sono <strong>ortogonali</strong> se $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$, e si scrive $\\mathbf{u} \\perp \\mathbf{v}$;</li>
<li>$\\mathbf{v}$ è <strong>parallelo</strong> a $\\mathbf{u}$ se $\\mathbf{v}$ è un multiplo di $\\mathbf{u}$, e si scrive $\\mathbf{v} \\parallel \\mathbf{u}$.</li>
</ul>
<p>Da notare: la definizione di parallelismo si può dare in un qualsiasi spazio vettoriale, quella di ortogonalità in un qualunque spazio pseudoeuclideo, mentre per definire la norma è necessario uno spazio euclideo (serve la radice quadrata di una quantità non negativa).</p>`
                },
                {
                    subtitle: "Basi ortonormali e espressione in coordinate",
                    content: `<p>Sia $\\mathcal{B} = \\{ \\mathbf{b}_1, \\dots, \\mathbf{b}_n \\}$ una base di $(V, \\langle \\, , \\, \\rangle)$:</p>
<ul>
<li>$\\mathcal{B}$ è <strong>ortogonale</strong> se $\\langle \\mathbf{b}_i, \\mathbf{b}_j \\rangle = 0$ per ogni $i \\neq j$;</li>
<li>$\\mathcal{B}$ è <strong>ortonormale</strong> se è ortogonale e $\\| \\mathbf{b}_i \\| = 1$ per ogni $i$.</li>
</ul>
<p>In tal caso $G_{\\mathcal{B}}^{\\mathcal{B}}(\\langle \\, , \\, \\rangle) = I$, e rispetto a $\\mathcal{B}$:</p>
<p>$$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = x_1 y_1 + \\cdots + x_n y_n = \\mathbf{x}^T \\mathbf{y},$$</p>
<p>$$\\langle \\mathbf{u}, \\mathbf{u} \\rangle = x_1^2 + \\cdots + x_n^2 = \\mathbf{x}^T \\mathbf{x},$$</p>
<p>$$\\| \\mathbf{u} \\| = \\sqrt{x_1^2 + \\cdots + x_n^2} = \\sqrt{\\mathbf{x}^T \\mathbf{x}}.$$</p>`
                },
                {
                    subtitle: "Esempi di spazi euclidei",
                    content: `<p><strong>(i)</strong> Lo spazio numerico $\\mathbb{R}^n$ con il prodotto punto è uno spazio euclideo. La base canonica è una base ortonormale. A meno di esplicito avviso, tutte le volte che si usa un prodotto scalare tra vettori numerici ci si riferisce al prodotto punto.</p>
<p><strong>(ii)</strong> Lo spazio $(\\mathcal{V}_O, \\text{prodotto scalare geometrico})$ è uno spazio euclideo. La norma coincide con la lunghezza "fisica" dei vettori geometrici. Due vettori geometrici sono ortogonali se formano un angolo retto ($90°$), e paralleli se stanno sulla stessa retta passante per $O$.</p>
<p><strong>(iii)</strong> Lo spazio $(\\mathbb{R}^3, \\langle \\, , \\, \\rangle)$ con $\\langle \\mathbf{u}, \\mathbf{u} \\rangle = 6 x_1^2 - 2 x_1 x_2 + 6 x_1 x_3 + 2 x_2^2 + 2 x_2 x_3 + 6 x_3^2$ è euclideo. In questo caso la base canonica <strong>non</strong> è ortonormale. Infatti:</p>
<p>$$\\langle \\mathbf{e}_1, \\mathbf{e}_2 \\rangle = -1, \\qquad \\| \\mathbf{e}_1 \\| = \\sqrt{6}.$$</p>`
                }
            ],
            formulas: [
                { label: "Norma", latex: "\\| \\mathbf{u} \\| := \\sqrt{\\langle \\mathbf{u}, \\mathbf{u} \\rangle}" },
                { label: "Ortogonalità", latex: "\\mathbf{u} \\perp \\mathbf{v} \\iff \\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0" },
                { label: "Prodotto scalare in base ortonormale", latex: "\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{x}^T \\mathbf{y} = x_1 y_1 + \\cdots + x_n y_n" }
            ]
        },
        {
            id: "s44-cauchy-schwarz",
            type: "section",
            title: "La disuguaglianza di Cauchy-Schwarz e l'angolo tra vettori",
            icon: "📏",
            content: `<p>In uno spazio euclideo, oltre alla norma, si può definire l'<strong>angolo tra due vettori</strong>. Ciò è conseguenza della seguente fondamentale disuguaglianza.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato e dimostrazione",
                    content: `<p><strong>Proposizione (Disuguaglianza di Cauchy-Schwarz).</strong> Siano $\\mathbf{u}, \\mathbf{v}$ vettori in uno spazio euclideo. Allora:</p>
<p>$$| \\langle \\mathbf{u}, \\mathbf{v} \\rangle | \\leq \\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|.$$</p>
<p><strong>Dimostrazione.</strong> Se $\\mathbf{u} = \\boldsymbol{0}_V$ allora entrambi i membri sono $0$ e la disuguaglianza è verificata. Possiamo quindi assumere $\\mathbf{u} \\neq \\boldsymbol{0}_V$.</p>
<p>Poiché siamo in uno spazio euclideo, per ogni $x \\in \\mathbb{R}$ si ha:</p>
<p>$$\\langle x \\mathbf{u} + \\mathbf{v}, x \\mathbf{u} + \\mathbf{v} \\rangle \\geq 0.$$</p>
<p>Espandendo:</p>
<p>$$\\| \\mathbf{u} \\|^2 x^2 + 2 x \\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\| \\mathbf{v} \\|^2 \\geq 0.$$</p>
<p>Questa è una disequazione di secondo grado in $x$ con coefficiente direttore $\\| \\mathbf{u} \\|^2 \\gt 0$, che assume sempre valori $\\geq 0$. Ciò accade solo quando il discriminante $\\Delta$ è $\\leq 0$:</p>
<p>$$\\Delta = 4 \\langle \\mathbf{u}, \\mathbf{v} \\rangle^2 - 4 \\| \\mathbf{u} \\|^2 \\| \\mathbf{v} \\|^2 \\leq 0.$$</p>
<p>Da cui la tesi. $\\square$</p>`
                },
                {
                    subtitle: "Definizione di angolo tra vettori",
                    content: `<p>Siano $\\mathbf{u}, \\mathbf{v}$ vettori <strong>non nulli</strong> in uno spazio euclideo. Dalla Disuguaglianza di Cauchy-Schwarz, dividendo entrambi i membri per $\\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\| \\gt 0$ (entrambi non nulli per ipotesi), otteniamo:</p>
<p>$$-1 \\leq \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|} \\leq 1.$$</p>
<p>Quindi esiste un unico angolo $\\alpha$ con $0 \\leq \\alpha \\leq \\pi$ tale che:</p>
<p>$$\\cos \\alpha = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|}.$$</p>
<p>Tale angolo si chiama l'<strong>angolo compreso</strong> tra $\\mathbf{u}$ e $\\mathbf{v}$, denotato $\\widehat{\\mathbf{u} \\mathbf{v}} := \\alpha$.</p>`
                },
                {
                    subtitle: "Osservazioni sull'angolo",
                    content: `<p><strong>(i)</strong> Nel caso del prodotto scalare tra vettori geometrici, la nozione di angolo appena data coincide con quella classica di angolo tra vettori geometrici.</p>
<p><strong>(ii)</strong> $\\mathbf{u} \\perp \\mathbf{v}$ se e solo se $\\alpha = \\frac{\\pi}{2}$.</p>
<p><strong>(iii)</strong> $\\mathbf{v} \\parallel \\mathbf{u}$ se e solo se $\\alpha \\in \\{ 0, \\pi \\}$. Infatti dire che $\\mathbf{v} \\parallel \\mathbf{u}$ equivale a dire che esiste $x \\in \\mathbb{R}$ tale che $x \\mathbf{u} + \\mathbf{v} = \\boldsymbol{0}_V$. Ciò equivale a dire che la disequazione nella dimostrazione di Cauchy-Schwarz ha discriminante nullo, cioè $| \\langle \\mathbf{u}, \\mathbf{v} \\rangle | = \\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|$.</p>
<p><strong>(iv)</strong> In coordinate rispetto a una base ortonormale, la Disuguaglianza di Cauchy-Schwarz diventa:</p>
<p>$$\\left| \\sum_{i=1}^n x_i y_i \\right| \\leq \\left( \\sum_{i=1}^n x_i^2 \\right)^{1/2} \\cdot \\left( \\sum_{i=1}^n y_i^2 \\right)^{1/2},$$</p>
<p>che è una disuguaglianza numerica (apparentemente) non banale.</p>`
                }
            ],
            formulas: [
                { label: "Cauchy-Schwarz", latex: "| \\langle \\mathbf{u}, \\mathbf{v} \\rangle | \\leq \\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|" },
                { label: "Angolo tra vettori", latex: "\\cos \\alpha = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|}" }
            ]
        },
        {
            id: "s44-triangolare",
            type: "section",
            title: "La disuguaglianza triangolare e proprietà della norma",
            icon: "🔺",
            content: `<p>Un'altra conseguenza della Disuguaglianza di Cauchy-Schwarz è la <strong>Disuguaglianza triangolare</strong>, che estende agli spazi euclidei astratti una proprietà ben nota della geometria: in un triangolo, la lunghezza di un lato è minore o uguale alla somma delle lunghezze degli altri due lati.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato e dimostrazione",
                    content: `<p><strong>Proposizione (Disuguaglianza triangolare).</strong> Siano $\\mathbf{u}, \\mathbf{v}$ vettori in uno spazio euclideo. Allora:</p>
<p>$$\\| \\mathbf{u} + \\mathbf{v} \\| \\leq \\| \\mathbf{u} \\| + \\| \\mathbf{v} \\|.$$</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Interpretazione geometrica della disuguaglianza triangolare</strong></p>
  <p><em>Triangolo formato dai vettori: $\\mathbf{u}$ dal punto $O$ ad $A$, $\\mathbf{v}$ da $A$ a $B$, $\\mathbf{u}+\\mathbf{v}$ da $O$ a $B$. Etichette: $\\|\\mathbf{u}\\|$ sul lato $OA$, $\\|\\mathbf{v}\\|$ sul lato $AB$, $\\|\\mathbf{u}+\\mathbf{v}\\|$ sul lato $OB$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p><strong>Dimostrazione.</strong> Basta osservare che:</p>
<p>$$\\| \\mathbf{u} + \\mathbf{v} \\|^2 = \\langle \\mathbf{u} + \\mathbf{v}, \\mathbf{u} + \\mathbf{v} \\rangle = \\| \\mathbf{u} \\|^2 + 2 \\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\| \\mathbf{v} \\|^2$$</p>
<p>$$\\leq \\| \\mathbf{u} \\|^2 + 2 \\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\| + \\| \\mathbf{v} \\|^2 = (\\| \\mathbf{u} \\| + \\| \\mathbf{v} \\|)^2.$$</p>
<p>Nel passaggio con il $\\leq$ interviene la Disuguaglianza di Cauchy-Schwarz (che garantisce $\\langle \\mathbf{u}, \\mathbf{v} \\rangle \\leq |\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|$). $\\square$</p>`
                },
                {
                    subtitle: "Proprietà della norma",
                    content: `<p><strong>Corollario (Proprietà della norma in uno spazio euclideo).</strong> Sia $(V, \\langle \\, , \\, \\rangle)$ uno spazio euclideo. Allora:</p>
<ol>
<li>Per ogni $\\mathbf{u} \\in V$ si ha $\\| \\mathbf{u} \\| \\geq 0$, e $\\| \\mathbf{u} \\| = 0$ se e solo se $\\mathbf{u} = \\boldsymbol{0}_V$;</li>
<li>Per ogni $\\mathbf{u} \\in V$ e ogni $c \\in \\mathbb{R}$ si ha $\\| c \\mathbf{u} \\| = | c | \\, \\| \\mathbf{u} \\|$;</li>
<li>Per ogni $\\mathbf{u}, \\mathbf{v} \\in V$ si ha $\\| \\mathbf{u} + \\mathbf{v} \\| \\leq \\| \\mathbf{u} \\| + \\| \\mathbf{v} \\|$.</li>
</ol>
<p>Le proprietà 1 e 2 seguono direttamente dalla definizione: $\\| \\mathbf{u} \\| = \\sqrt{\\langle \\mathbf{u}, \\mathbf{u} \\rangle} \\geq 0$ con uguaglianza se e solo se $\\mathbf{u} = \\boldsymbol{0}_V$ per la positività del prodotto scalare; $\\| c\\mathbf{u} \\| = \\sqrt{\\langle c\\mathbf{u}, c\\mathbf{u} \\rangle} = \\sqrt{c^2 \\langle \\mathbf{u}, \\mathbf{u} \\rangle} = |c| \\, \\| \\mathbf{u} \\|$. La proprietà 3 è la disuguaglianza triangolare appena dimostrata.</p>`
                }
            ],
            formulas: [
                { label: "Disuguaglianza triangolare", latex: "\\| \\mathbf{u} + \\mathbf{v} \\| \\leq \\| \\mathbf{u} \\| + \\| \\mathbf{v} \\|" },
                { label: "Omogeneità della norma", latex: "\\| c \\mathbf{u} \\| = | c | \\, \\| \\mathbf{u} \\|" }
            ]
        },
        {
            id: "s44-esempi-finali",
            type: "section",
            title: "Esempi su norma e angolo",
            icon: "🎯",
            content: `<p>Alcuni esempi applicativi che illustrano i concetti introdotti.</p>`,
            subsections: [
                {
                    subtitle: "Versori",
                    content: `<p>Se $\\mathbf{u}$ è un vettore non nullo, allora:</p>
<p>$$\\frac{\\mathbf{u}}{\\| \\mathbf{u} \\|}$$</p>
<p>è un vettore parallelo a $\\mathbf{u}$ di lunghezza $1$. In $\\mathrm{Span}(\\mathbf{u})$ ci sono esattamente due vettori di lunghezza $1$:</p>
<p>$$\\frac{\\mathbf{u}}{\\| \\mathbf{u} \\|} \\qquad \\text{e} \\qquad -\\frac{\\mathbf{u}}{\\| \\mathbf{u} \\|}.$$</p>
<p>Questi si chiamano <strong>versori</strong> di $\\mathrm{Span}(\\mathbf{u})$.</p>`
                },
                {
                    subtitle: "Calcolo dell'angolo in ℝ³",
                    content: `<p>Nello spazio euclideo $(\\mathbb{R}^3, \\text{prodotto punto})$, calcolare l'angolo $\\alpha$ tra i vettori $(1, 0, 0)$ e $(3, 0, 3)$.</p>
<p><strong>Svolgimento.</strong></p>
<p>$$\\cos \\alpha = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\| \\mathbf{u} \\| \\, \\| \\mathbf{v} \\|} = \\frac{3}{1 \\cdot 3\\sqrt{2}} = \\frac{3}{3\\sqrt{2}} = \\frac{\\sqrt{2}}{2}.$$</p>
<p>Quindi $\\alpha = \\frac{\\pi}{4}$.</p>`
                },
                {
                    subtitle: "Costruzione di un prodotto scalare con angolo assegnato",
                    content: `<p>Fare un esempio di spazio euclideo $(\\mathbb{R}^2, \\langle \\, , \\, \\rangle)$ in cui i vettori canonici hanno lunghezza $1$ ma formano un angolo di $120°$.</p>
<p><strong>Svolgimento.</strong> Le condizioni impongono $\\langle \\mathbf{e}_1, \\mathbf{e}_1 \\rangle = 1$, $\\langle \\mathbf{e}_2, \\mathbf{e}_2 \\rangle = 1$, e $\\langle \\mathbf{e}_1, \\mathbf{e}_2 \\rangle = \\cos 120° = -\\frac{1}{2}$. La matrice di Gram è univocamente determinata:</p>
<p>$$G_{\\mathcal{E}}^{\\mathcal{E}}(\\langle \\, , \\, \\rangle) = \\begin{pmatrix} 1 & -\\frac{1}{2} \\\\ -\\frac{1}{2} & 1 \\end{pmatrix}.$$</p>
<p>Verifichiamo che è definita positiva con il Criterio dei minori principali: $\\det(1) = 1 \\gt 0$ e $\\det(G) = 1 \\cdot 1 - (-\\frac{1}{2})(-\\frac{1}{2}) = 1 - \\frac{1}{4} = \\frac{3}{4} \\gt 0$. Quindi la matrice è definita positiva e l'esempio richiesto è:</p>
<p>$$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = x_1 y_1 - \\tfrac{1}{2} x_1 y_2 - \\tfrac{1}{2} x_2 y_1 + x_2 y_2.$$</p>`
                }
            ]
        },
        {
            id: "s44-riepilogo-criteri",
            type: "note_box",
            title: "Riepilogo: tre modi per verificare G > 0",
            icon: "📋",
            content: `<p>Per verificare che una matrice simmetrica $G$ è definita positiva, si può usare uno qualunque dei seguenti metodi:</p>`,
            table_compare: {
                headers: ["Metodo", "Cosa si verifica", "Quando conviene"],
                rows: [
                    ["Gauss-Lagrange", "Tutti i pivot positivi (indice = n)", "Quando serve anche la base ortonormale"],
                    ["Minori principali", "det dei minori principali tutti > 0", "Matrici piccole (2×2, 3×3)"],
                    ["Criterio di Jacobi", "Coefficienti del pol. car. a segni alterni", "Quando si è già calcolato p_G(t)"]
                ]
            }
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è uno spazio euclideo?",
            back: "Uno spazio pseudoeuclideo $(V, \\phi)$ si dice **euclideo** se è definito positivo, cioè se $\\phi(\\mathbf{u}, \\mathbf{u}) \gt 0$ per ogni $\\mathbf{u} \\neq \\boldsymbol{0}_V$. Si adotta la notazione $\\langle \\mathbf{u}, \\mathbf{v} \\rangle := \\phi(\\mathbf{u}, \\mathbf{v})$, chiamata prodotto scalare."
        },
        {
            type: "definizione",
            front: "Come si definisce la norma di un vettore in uno spazio euclideo?",
            back: "La norma di $\\mathbf{u}$ è $\\| \\mathbf{u} \\| := \\sqrt{\\langle \\mathbf{u}, \\mathbf{u} \\rangle}$. Si può definire solo in spazio euclideo (serve che $\\langle \\mathbf{u}, \\mathbf{u} \\rangle \\geq 0$). L'ortogonalità si può definire in qualunque spazio pseudoeuclideo, il parallelismo in qualsiasi spazio vettoriale."
        },
        {
            type: "formula",
            front: "Enuncia il Criterio dei minori principali per matrici definite positive e definite negative.",
            back: "$G$ è **definita positiva** sse tutti i minori principali hanno determinante positivo. $G$ è **definita negativa** sse i minori principali di ordine dispari hanno det negativo e quelli di ordine pari hanno det positivo. Il minore principale di ordine $i$ è la sottomatrice delle prime $i$ righe e $i$ colonne."
        },
        {
            type: "formula",
            front: "Enuncia il Criterio di Jacobi per matrici definite positive.",
            back: "$G$ è definita positiva sse tutti i coefficienti del polinomio caratteristico $p_G(t)$ sono non nulli e hanno **segni alterni**. Ad esempio per $3 \\times 3$: $p_G(t) = -t^3 + at^2 - bt + c$ con $a, b, c \gt 0$, i segni sono $-, +, -, +$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra la disuguaglianza di Cauchy-Schwarz.",
            back: "Se $\\mathbf{u} = \\boldsymbol{0}_V$ è banale. Altrimenti, per ogni $x \\in \\mathbb{R}$: $\\langle x\\mathbf{u} + \\mathbf{v}, x\\mathbf{u} + \\mathbf{v} \\rangle \\geq 0$, cioè $\\|\\mathbf{u}\\|^2 x^2 + 2x\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\|\\mathbf{v}\\|^2 \\geq 0$ per ogni $x$. Polinomio di secondo grado con coeff. direttore $\gt 0$ sempre $\\geq 0$ implica $\\Delta \\leq 0$: $4\\langle \\mathbf{u}, \\mathbf{v} \\rangle^2 - 4\\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2 \\leq 0$."
        },
        {
            type: "formula",
            front: "Come si definisce l'angolo tra due vettori non nulli in uno spazio euclideo?",
            back: "Dalla Cauchy-Schwarz si ha $-1 \\leq \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|} \\leq 1$. Esiste un unico $\\alpha \\in [0, \\pi]$ tale che $\\cos \\alpha = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$. Si ha $\\mathbf{u} \\perp \\mathbf{v} \\iff \\alpha = \\pi/2$ e $\\mathbf{v} \\parallel \\mathbf{u} \\iff \\alpha \\in \\{0, \\pi\\}$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra la disuguaglianza triangolare a partire da Cauchy-Schwarz.",
            back: "$\\|\\mathbf{u}+\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + 2\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\|\\mathbf{v}\\|^2 \\leq \\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{u}\\|\\|\\mathbf{v}\\| + \\|\\mathbf{v}\\|^2 = (\\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|)^2$, dove il $\\leq$ usa Cauchy-Schwarz: $\\langle \\mathbf{u}, \\mathbf{v} \\rangle \\leq |\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$."
        },
        {
            type: "domanda",
            front: "Quali sono le tre proprietà della norma in uno spazio euclideo?",
            back: "1) $\\|\\mathbf{u}\\| \\geq 0$ e $\\|\\mathbf{u}\\| = 0 \\iff \\mathbf{u} = \\boldsymbol{0}_V$; 2) $\\|c\\mathbf{u}\\| = |c|\\|\\mathbf{u}\\|$; 3) $\\|\\mathbf{u}+\\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$ (dis. triangolare). Le prime due seguono dalla definizione, la terza da Cauchy-Schwarz."
        },
        {
            type: "tranello",
            front: "In uno spazio euclideo con prodotto scalare non standard, la base canonica è ortonormale?",
            back: "No, non necessariamente! Ad esempio in $(\\mathbb{R}^3, q)$ con $q(\\mathbf{u}) = 6x_1^2 - 2x_1x_2 + \\dots$ si ha $\\langle \\mathbf{e}_1, \\mathbf{e}_2 \\rangle = -1 \\neq 0$ e $\\|\\mathbf{e}_1\\| = \\sqrt{6} \\neq 1$. La base canonica è ortonormale solo rispetto al prodotto punto standard."
        },
        {
            type: "domanda",
            front: "Quando nella dimostrazione di Cauchy-Schwarz si ha uguaglianza? Cosa significa geometricamente?",
            back: "Si ha $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$ sse $\\Delta = 0$, cioè sse esiste $x \\in \\mathbb{R}$ con $x\\mathbf{u} + \\mathbf{v} = \\boldsymbol{0}_V$, cioè sse $\\mathbf{v} \\parallel \\mathbf{u}$. Geometricamente: angolo $\\alpha \\in \\{0, \\pi\\}$."
        }
    ]
};

