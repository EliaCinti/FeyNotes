const LESSON = {
    id: "L35", date: "Lezione 29 — 12 Mag 2026",
    title: "Forme Bilineari Simmetriche e Matrice di Gram",
    abstract: "Definizione rigorosa di forma bilineare simmetrica, costruzione della matrice di Gram rispetto a una base, formula di cambiamento di base (congruenza), esempi dettagliati su ℝⁿ e spazi di polinomi.",

    sections: [
        {
            id: "s35-definizione",
            type: "section",
            title: "Definizione e Prime Proprietà",
            icon: "📐",
            content: `<p>Riprendiamo la definizione formale di forma bilineare simmetrica, l'oggetto centrale di questa parte del corso.</p>`,
            subsections: [
                {
                    subtitle: "Forma bilineare simmetrica",
                    content: `<p>Sia $V$ uno spazio vettoriale su $\\mathbb{R}$. Una <strong>forma bilineare simmetrica</strong> su $V$ è una funzione</p>
<p>$$\\phi: V \\times V \\to \\mathbb{R}$$</p>
<p>che associa a ogni coppia di vettori $(\\vec{u}, \\vec{v})$ uno scalare $\\phi(\\vec{u}, \\vec{v})$, soddisfacendo due proprietà:</p>
<p><strong>1. Linearità a sinistra</strong>: per ogni $\\vec{u}, \\vec{v}, \\vec{w} \\in V$ e per ogni $a, b \\in \\mathbb{R}$:</p>
<p>$$\\phi(a\\vec{u} + b\\vec{v},\\; \\vec{w}) = a\\,\\phi(\\vec{u}, \\vec{w}) + b\\,\\phi(\\vec{v}, \\vec{w})$$</p>
<p><strong>2. Simmetria</strong>: per ogni $\\vec{u}, \\vec{v} \\in V$:</p>
<p>$$\\phi(\\vec{u}, \\vec{v}) = \\phi(\\vec{v}, \\vec{u})$$</p>`
                },
                {
                    subtitle: "Linearità a destra (conseguenza automatica)",
                    content: `<p>La combinazione di linearità a sinistra e simmetria implica anche la <strong>linearità a destra</strong>. Per ogni $\\vec{u}, \\vec{v}, \\vec{w} \\in V$ e $a, b \\in \\mathbb{R}$:</p>
<p>$$\\phi(\\vec{u},\\; a\\vec{v} + b\\vec{w}) = \\phi(a\\vec{v} + b\\vec{w},\\; \\vec{u}) = a\\,\\phi(\\vec{v}, \\vec{u}) + b\\,\\phi(\\vec{w}, \\vec{u}) = a\\,\\phi(\\vec{u}, \\vec{v}) + b\\,\\phi(\\vec{u}, \\vec{w})$$</p>
<p>Il primo passaggio usa la simmetria, il secondo la linearità a sinistra, il terzo nuovamente la simmetria. Una funzione lineare in <strong>entrambi</strong> gli argomenti si dice <strong>bilineare</strong>.</p>`
                }
            ],
            formulas: [
                { label: "Linearità a sinistra", latex: "\\phi(a\\vec{u} + b\\vec{v},\\, \\vec{w}) = a\\,\\phi(\\vec{u}, \\vec{w}) + b\\,\\phi(\\vec{v}, \\vec{w})" },
                { label: "Simmetria", latex: "\\phi(\\vec{u}, \\vec{v}) = \\phi(\\vec{v}, \\vec{u})" }
            ]
        },
        {
            id: "s35-esempi-fondamentali",
            type: "section",
            title: "Esempi Fondamentali",
            icon: "🧪",
            content: `<p>Vediamo esempi concreti per costruire l'intuizione, partendo dal caso più semplice e salendo di complessità.</p>`,
            subsections: [
                {
                    subtitle: "Esempio 1: Forme bilineari su ℝ",
                    content: `<p>Sia $V = \\mathbb{R}$. Fissiamo $g \\in \\mathbb{R}$ e definiamo:</p>
<p>$$\\phi(x, y) = g\\,x\\,y$$</p>
<p><strong>Verifica della linearità a sinistra</strong>: siano $x, y, z \\in \\mathbb{R}$ e $a, b \\in \\mathbb{R}$:</p>
<p>$$\\phi(ax+by,\\, z) = g(ax+by)z = a(gxz) + b(gyz) = a\\,\\phi(x,z) + b\\,\\phi(y,z)$$</p>
<p><strong>Verifica della simmetria</strong>:</p>
<p>$$\\phi(x,y) = gxy = gyx = \\phi(y,x)$$</p>
<p>Viceversa, <strong>ogni</strong> forma bilineare simmetrica su $\\mathbb{R}$ è di questo tipo. Infatti, data $\\phi: \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$, ponendo $g = \\phi(1,1)$:</p>
<p>$$\\phi(x,y) = \\phi(x \\cdot 1,\\; y \\cdot 1) = x\\,\\phi(1,\\; y \\cdot 1) = xy\\,\\phi(1,1) = gxy$$</p>
<p>La forma è <strong>completamente determinata</strong> dal singolo valore $g = \\phi(1,1)$. Questa è un'anticipazione del ruolo della matrice di Gram.</p>`
                },
                {
                    subtitle: "Esempio 2: Forme bilineari su ℝⁿ con matrice simmetrica",
                    content: `<p>Fissiamo una matrice simmetrica $G \\in M_{n,n}(\\mathbb{R})$ (cioè $G^T = G$). Definiamo $\\phi: \\mathbb{R}^n \\times \\mathbb{R}^n \\to \\mathbb{R}$ come:</p>
<p>$$\\phi(\\vec{x}, \\vec{y}) = \\vec{x}^T G\\, \\vec{y}$$</p>
<p>dove $\\vec{x}$ e $\\vec{y}$ sono vettori colonna. Il risultato è una matrice $1 \\times 1$, che identifichiamo con il suo unico elemento reale (uno scalare).</p>
<p><strong>Linearità a sinistra</strong>:</p>
<p>$$\\phi(a\\vec{x} + b\\vec{y},\\, \\vec{z}) = (a\\vec{x} + b\\vec{y})^T G\\,\\vec{z} = (a\\vec{x}^T + b\\vec{y}^T)G\\,\\vec{z} = a(\\vec{x}^T G\\,\\vec{z}) + b(\\vec{y}^T G\\,\\vec{z})$$</p>
<p><strong>Simmetria</strong>: poiché $\\phi(\\vec{x}, \\vec{y})$ è uno scalare, coincide con la sua trasposta:</p>
<p>$$\\phi(\\vec{x}, \\vec{y}) = (\\vec{x}^T G\\,\\vec{y})^T = \\vec{y}^T G^T \\vec{x} = \\vec{y}^T G\\,\\vec{x} = \\phi(\\vec{y}, \\vec{x})$$</p>
<p>dove nell'ultimo passaggio abbiamo usato $G^T = G$.</p>
<p>Per $n=2$, con $G = \\begin{pmatrix} g_{11} & g_{12} \\\\ g_{12} & g_{22} \\end{pmatrix}$, la forma diventa il polinomio omogeneo:</p>
<p>$$\\phi(\\vec{x}, \\vec{y}) = g_{11}x_1y_1 + g_{12}(x_1y_2 + x_2y_1) + g_{22}x_2y_2$$</p>`
                }
            ],
            formulas: [
                { label: "Forma su ℝ", latex: "\\phi(x,y) = g\\,xy \\quad\\text{con } g = \\phi(1,1)" },
                { label: "Forma su ℝⁿ", latex: "\\phi(\\vec{x}, \\vec{y}) = \\vec{x}^T G\\, \\vec{y}" }
            ]
        },
        {
            id: "s35-matrice-gram",
            type: "section",
            title: "La Matrice di Gram",
            icon: "🔲",
            content: `<p>L'esempio su $\\mathbb{R}^n$ suggerisce un'idea potente: <strong>qualsiasi</strong> forma bilineare simmetrica su uno spazio di dimensione finita può essere rappresentata da una matrice, una volta fissata una base.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p>Sia $\\phi$ una forma bilineare simmetrica su $V$ di dimensione $n$, e sia $B = \\{\\vec{b}_1, \\vec{b}_2, \\dots, \\vec{b}_n\\}$ una base di $V$. La <strong>matrice di Gram</strong> di $\\phi$ rispetto a $B$, denotata $G_B(\\phi)$ o semplicemente $G_B$, è la matrice $n \\times n$ con componenti:</p>
<p>$$g_{ij} = \\phi(\\vec{b}_i, \\vec{b}_j)$$</p>
<p>La matrice di Gram è sempre <strong>simmetrica</strong>, per la simmetria di $\\phi$:</p>
<p>$$g_{ij} = \\phi(\\vec{b}_i, \\vec{b}_j) = \\phi(\\vec{b}_j, \\vec{b}_i) = g_{ji}$$</p>`
                },
                {
                    subtitle: "Calcolo della forma tramite coordinate",
                    content: `<p><strong>Proposizione.</strong> Per ogni coppia di vettori $\\vec{u}, \\vec{v} \\in V$, se $\\vec{x} = [\\vec{u}]_B$ e $\\vec{y} = [\\vec{v}]_B$ sono i vettori delle coordinate rispetto a $B$, allora:</p>
<p>$$\\phi(\\vec{u}, \\vec{v}) = \\vec{x}^T G_B\\, \\vec{y}$$</p>
<p><strong>Dimostrazione.</strong> Scriviamo $\\vec{u} = \\sum_{i=1}^n x_i \\vec{b}_i$ e $\\vec{v} = \\sum_{j=1}^n y_j \\vec{b}_j$. Usando la bilinearità:</p>
<p>$$\\phi(\\vec{u}, \\vec{v}) = \\phi\\!\\left(\\sum_i x_i \\vec{b}_i,\\; \\sum_j y_j \\vec{b}_j\\right) = \\sum_i x_i \\sum_j y_j\\, \\phi(\\vec{b}_i, \\vec{b}_j) = \\sum_{i,j} x_i\\, g_{ij}\\, y_j$$</p>
<p>Questa doppia sommatoria è esattamente il prodotto matriciale $\\vec{x}^T G_B\\, \\vec{y}$. $\\square$</p>
<p>Questo risultato è fondamentale: la matrice di Gram <strong>codifica completamente</strong> la forma bilineare rispetto a una data base.</p>`
                }
            ],
            formulas: [
                { label: "Componenti della matrice di Gram", latex: "g_{ij} = \\phi(\\vec{b}_i, \\vec{b}_j)" },
                { label: "Calcolo con coordinate", latex: "\\phi(\\vec{u}, \\vec{v}) = \\vec{x}^T G_B\\, \\vec{y}" }
            ]
        },
        {
            id: "s35-cambio-base",
            type: "section",
            title: "Cambiamento di Base e Congruenza",
            icon: "🔄",
            content: `<p>Come cambia la matrice di Gram quando cambiamo la base di $V$? La risposta è la <strong>formula di congruenza</strong>, analoga (ma diversa!) dalla formula di similitudine per le applicazioni lineari.</p>`,
            subsections: [
                {
                    subtitle: "Formula del cambiamento di base",
                    content: `<p><strong>Proposizione.</strong> Siano $B$ e $B'$ due basi di $V$, con matrici di Gram $G = G_B(\\phi)$ e $G' = G_{B'}(\\phi)$. Se $P$ è la matrice le cui colonne sono le coordinate dei vettori di $B'$ rispetto a $B$ (cioè la matrice di cambiamento di base da $B'$ a $B$), allora:</p>
<p>$$G' = P^T G\\, P$$</p>
<p><strong>Dimostrazione.</strong> Per ogni $\\vec{u}, \\vec{v} \\in V$, siano $\\vec{x}, \\vec{y}$ le coordinate rispetto a $B$ e $\\vec{x}', \\vec{y}'$ le coordinate rispetto a $B'$. La relazione tra coordinate è:</p>
<p>$$\\vec{x} = P\\vec{x}' \\qquad \\vec{y} = P\\vec{y}'$$</p>
<p>Scrivendo $\\phi(\\vec{u}, \\vec{v})$ in entrambe le basi:</p>
<p>$$\\phi(\\vec{u}, \\vec{v}) = \\vec{x}^T G\\, \\vec{y} = (P\\vec{x}')^T G\\, (P\\vec{y}') = (\\vec{x}')^T P^T G\\, P\\, \\vec{y}'$$</p>
<p>Ma anche $\\phi(\\vec{u}, \\vec{v}) = (\\vec{x}')^T G'\\, \\vec{y}'$. Confrontando:</p>
<p>$$(\\vec{x}')^T G'\\, \\vec{y}' = (\\vec{x}')^T (P^T G\\, P)\\, \\vec{y}'$$</p>
<p>Per concludere che $G' = P^T G P$, scegliamo $\\vec{x}' = \\vec{e}_i$ e $\\vec{y}' = \\vec{e}_j$ (vettori della base canonica di $\\mathbb{R}^n$). Allora il membro sinistro dà $g'_{ij}$ e il membro destro dà $(P^T G P)_{ij}$, per ogni $i,j$. Dunque le due matrici sono uguali componente per componente. $\\square$</p>`
                },
                {
                    subtitle: "Matrici congruenti",
                    content: `<p>Due matrici quadrate $A, B \\in M_{n,n}(\\mathbb{R})$ si dicono <strong>congruenti</strong> se esiste una matrice invertibile $P$ tale che:</p>
<p>$$B = P^T A\\, P$$</p>
<p>La proposizione ci dice che <strong>due matrici di Gram della stessa forma bilineare rispetto a basi diverse sono sempre congruenti</strong>.</p>
<p>Attenzione alla differenza con la <strong>similitudine</strong> ($B = P^{-1}AP$), che descrive il cambiamento di base per le applicazioni lineari. Per le forme bilineari la formula è $P^T A P$, non $P^{-1} A P$.</p>`
                }
            ],
            formulas: [
                { label: "Cambiamento di base (Gram)", latex: "G' = P^T G\\, P" },
                { label: "Congruenza", latex: "B = P^T A\\, P \\quad (P \\text{ invertibile})" }
            ]
        },
        {
            id: "s35-nota-direzione",
            type: "note_box",
            title: "Attenzione alla direzione di P",
            icon: "⚠️",
            content: `<p>La matrice $P$ nella formula $G' = P^T G P$ è la matrice le cui <strong>colonne sono le coordinate dei vettori della nuova base $B'$ rispetto alla vecchia base $B$</strong>.</p>
<p>Non confondere la direzione: $P$ porta le coordinate <em>da $B'$ a $B$</em> (cioè $\\vec{x} = P\\vec{x}'$). Nell'esempio che segue, $P = P^T$ per pura coincidenza numerica. <strong>In generale $P \\neq P^T$</strong> e il ruolo della trasposta nella formula è essenziale.</p>`
        },
        {
            id: "s35-diagramma-cambio",
            type: "section",
            title: "Diagramma del Cambiamento di Base",
            icon: "🗺️",
            content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Cambiamento di base per la matrice di Gram</strong></p>
  <p><em>Diagramma commutativo che mostra: un vettore $\\vec{u} \\in V$ ha coordinate $\\vec{x}' = [\\vec{u}]_{B'}$ nella nuova base. La moltiplicazione per $P$ porta alle coordinate $\\vec{x} = P\\vec{x}' = [\\vec{u}]_B$ nella vecchia base. La forma $\\phi(\\vec{u}, \\vec{v})$ si calcola come $(\\vec{x}')^T G' \\vec{y}'$ oppure come $\\vec{x}^T G \\vec{y} = (P\\vec{x}')^T G (P\\vec{y}')$. La relazione $G' = P^T G P$ garantisce la coerenza.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
        },
        {
            id: "s35-esempio-calcolo",
            type: "section",
            title: "Esempio Completo su ℝ²",
            icon: "✏️",
            content: `<p>Applichiamo tutta la teoria a un esempio concreto. Consideriamo la forma bilineare su $\\mathbb{R}^2$:</p>
<p>$$\\phi(\\vec{x}, \\vec{y}) = x_1y_1 + 3x_1y_2 + 3x_2y_1 + 2x_2y_2$$</p>
<p>Sia $E = \\{\\vec{e}_1, \\vec{e}_2\\}$ la base canonica e $B = \\{\\vec{b}_1, \\vec{b}_2\\} = \\{(1,1),\\; (1,-1)\\}$.</p>`,
            subsections: [
                {
                    subtitle: "Passo 1 — Matrice di Gram rispetto a E",
                    content: `<p>I coefficienti del polinomio forniscono direttamente la matrice:</p>
<p>$$G_E = \\begin{pmatrix} \\phi(\\vec{e}_1, \\vec{e}_1) & \\phi(\\vec{e}_1, \\vec{e}_2) \\\\ \\phi(\\vec{e}_2, \\vec{e}_1) & \\phi(\\vec{e}_2, \\vec{e}_2) \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Passo 2 — Matrice di Gram rispetto a B (calcolo diretto)",
                    content: `<p>Calcoliamo le componenti $g'_{ij} = \\phi(\\vec{b}_i, \\vec{b}_j)$ una per una:</p>
<p>$$g'_{11} = \\phi((1,1),(1,1)) = 1 + 3 + 3 + 2 = 9$$</p>
<p>$$g'_{12} = \\phi((1,1),(1,-1)) = 1 - 3 + 3 - 2 = -1$$</p>
<p>$$g'_{21} = \\phi((1,-1),(1,1)) = 1 + 3 - 3 - 2 = -1$$</p>
<p>$$g'_{22} = \\phi((1,-1),(1,-1)) = 1 - 3 - 3 + 2 = -3$$</p>
<p>Quindi:</p>
<p>$$G_B = \\begin{pmatrix} 9 & -1 \\\\ -1 & -3 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Passo 3 — Verifica con la formula di cambiamento di base",
                    content: `<p>La matrice $P$ le cui colonne sono i vettori di $B$ espressi in coordinate rispetto a $E$ è:</p>
<p>$$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$</p>
<p>Calcoliamo $P^T G_E P$ (notare che qui $P^T = P$ <strong>per pura coincidenza</strong>):</p>
<p>$$P^T G_E P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$</p>
<p>Primo prodotto:</p>
<p>$$\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ -2 & 1 \\end{pmatrix}$$</p>
<p>Secondo prodotto:</p>
<p>$$\\begin{pmatrix} 4 & 5 \\\\ -2 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = \\begin{pmatrix} 9 & -1 \\\\ -1 & -3 \\end{pmatrix} = G_B \\quad \\checkmark$$</p>`
                },
                {
                    subtitle: "Passo 4 — Calcolo di φ(u,v) usando G_B",
                    content: `<p>Siano $\\vec{u} = (1,1)$ e $\\vec{v} = (1,4)$. Troviamo le coordinate rispetto a $B$.</p>
<p>$\\vec{u} = \\vec{b}_1 \\Rightarrow [\\vec{u}]_B = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$</p>
<p>Per $\\vec{v} = (1,4)$, risolviamo $(1,4) = c_1(1,1) + c_2(1,-1)$. Si trova $c_1 = \\frac{5}{2},\\; c_2 = -\\frac{3}{2}$.</p>
<p>$$\\phi(\\vec{u}, \\vec{v}) = [\\vec{u}]_B^T\\, G_B\\, [\\vec{v}]_B = \\begin{pmatrix} 1 & 0 \\end{pmatrix} \\begin{pmatrix} 9 & -1 \\\\ -1 & -3 \\end{pmatrix} \\begin{pmatrix} 5/2 \\\\ -3/2 \\end{pmatrix}$$</p>
<p>$$= \\begin{pmatrix} 9 & -1 \\end{pmatrix} \\begin{pmatrix} 5/2 \\\\ -3/2 \\end{pmatrix} = \\frac{45}{2} + \\frac{3}{2} = 24$$</p>`
                },
                {
                    subtitle: "Passo 5 — Verifica diretta",
                    content: `<p>$$\\phi((1,1),(1,4)) = 1(1) + 3(1)(4) + 3(1)(1) + 2(1)(4) = 1 + 12 + 3 + 8 = 24 \\quad \\checkmark$$</p>
<p>I due metodi danno lo stesso risultato, come garantito dalla teoria.</p>`
                }
            ],
            formulas: [
                { label: "G rispetto a E", latex: "G_E = \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix}" },
                { label: "G rispetto a B", latex: "G_B = \\begin{pmatrix} 9 & -1 \\\\ -1 & -3 \\end{pmatrix}" }
            ]
        },
        {
            id: "s35-alert-pt",
            type: "alert_box",
            title: "P = Pᵀ è una coincidenza!",
            icon: "🚨",
            content: `<p>Nell'esempio precedente la matrice $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ è simmetrica, dunque $P = P^T$. Questo è un <strong>caso fortuito</strong> dovuto alla scelta particolare dei vettori di $B$.</p>
<p>In generale $P \\neq P^T$, e nella formula $G' = P^T G P$ la trasposta e la matrice originale giocano ruoli diversi (una agisce "a sinistra", l'altra "a destra"). Non cadere nella trappola di semplificare la formula a $G' = P G P$ o $G' = P^2 G$!</p>`
        },
        {
            id: "s35-prodotto-scalare",
            type: "section",
            title: "Prodotto Scalare come Forma Bilineare",
            icon: "📏",
            content: `<p>Il prodotto scalare è il caso più importante di forma bilineare simmetrica.</p>`,
            subsections: [
                {
                    subtitle: "Prodotto punto in ℝⁿ",
                    content: `<p>Il <strong>prodotto punto</strong> (o prodotto scalare standard) è:</p>
<p>$$\\phi(\\vec{x}, \\vec{y}) = \\vec{x} \\cdot \\vec{y} = \\vec{x}^T \\vec{y} = \\sum_{i=1}^n x_i y_i$$</p>
<p>La matrice di Gram rispetto alla base canonica è la <strong>matrice identità</strong> $I$, poiché $\\vec{x}^T I\\, \\vec{y} = \\vec{x}^T \\vec{y}$.</p>`
                },
                {
                    subtitle: "Prodotto scalare geometrico",
                    content: `<p>Il prodotto scalare geometrico tra vettori è definito come:</p>
<p>$$\\phi(\\vec{u}, \\vec{v}) = \\|\\vec{u}\\|\\, \\|\\vec{v}\\| \\cos\\theta$$</p>
<p>dove $\\theta$ è l'angolo tra i due vettori. Si dimostra (usando il Teorema del Coseno) che questa è una forma bilineare simmetrica. Se si fissa una base ortonormale, questo prodotto coincide con il prodotto punto standard.</p>`
                }
            ],
            formulas: [
                { label: "Prodotto scalare standard", latex: "\\phi(\\vec{x}, \\vec{y}) = \\vec{x}^T \\vec{y} = \\sum_{i=1}^n x_i y_i" },
                { label: "Gram del prodotto standard", latex: "G_E = I" }
            ]
        },
        {
            id: "s35-polinomi",
            type: "section",
            title: "Esempio: Spazio di Polinomi e Matrice di Hilbert",
            icon: "∫",
            content: `<p>Questo esempio mostra che la teoria si applica a spazi molto diversi da $\\mathbb{R}^n$.</p>`,
            subsections: [
                {
                    subtitle: "Definizione della forma bilineare",
                    content: `<p>Sia $V = \\mathbb{R}_2[t]$ lo spazio dei polinomi di grado $\\leq 2$. Definiamo:</p>
<p>$$\\phi(p(t), q(t)) = \\int_0^1 p(t)\\,q(t)\\, dt$$</p>
<p>Questa è una forma bilineare simmetrica (la linearità viene dalle proprietà dell'integrale, la simmetria dal fatto che $p(t)q(t) = q(t)p(t)$).</p>`
                },
                {
                    subtitle: "Calcolo della matrice di Gram",
                    content: `<p>Rispetto alla base canonica $B = \\{1, t, t^2\\}$, calcoliamo i 9 integrali $g_{ij} = \\phi(t^{i-1}, t^{j-1})$. Per simmetria bastano 6 calcoli:</p>
<p>$$g_{11} = \\int_0^1 1 \\cdot 1\\, dt = 1 \\qquad g_{12} = \\int_0^1 t\\, dt = \\frac{1}{2} \\qquad g_{13} = \\int_0^1 t^2\\, dt = \\frac{1}{3}$$</p>
<p>$$g_{22} = \\int_0^1 t^2\\, dt = \\frac{1}{3} \\qquad g_{23} = \\int_0^1 t^3\\, dt = \\frac{1}{4} \\qquad g_{33} = \\int_0^1 t^4\\, dt = \\frac{1}{5}$$</p>
<p>La matrice di Gram risultante è:</p>
<p>$$G_B = \\begin{pmatrix} 1 & 1/2 & 1/3 \\\\ 1/2 & 1/3 & 1/4 \\\\ 1/3 & 1/4 & 1/5 \\end{pmatrix}$$</p>
<p>Questa è la celebre <strong>matrice di Hilbert</strong> $3 \\times 3$, il cui elemento generico è $g_{ij} = \\frac{1}{i+j-1}$.</p>`
                },
                {
                    subtitle: "Applicazione: calcolo tramite G_B",
                    content: `<p>Usiamo la matrice di Gram per calcolare $\\phi(1+t,\\; t^2)$. Le coordinate sono $[1+t]_B = (1, 1, 0)^T$ e $[t^2]_B = (0, 0, 1)^T$.</p>
<p>$$\\phi(1+t,\\; t^2) = \\begin{pmatrix} 1 & 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 1/2 & 1/3 \\\\ 1/2 & 1/3 & 1/4 \\\\ 1/3 & 1/4 & 1/5 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>$$= \\begin{pmatrix} 1 & 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1/3 \\\\ 1/4 \\\\ 1/5 \\end{pmatrix} = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$$</p>
<p><strong>Verifica diretta</strong>:</p>
<p>$$\\int_0^1 (1+t)\\,t^2\\, dt = \\int_0^1 (t^2 + t^3)\\, dt = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12} \\quad \\checkmark$$</p>`
                },
                {
                    subtitle: "Osservazione sulla matrice di Hilbert",
                    content: `<p>La matrice di Hilbert è un oggetto famoso in analisi numerica: è <strong>definita positiva</strong> (tutti gli autovalori sono positivi), ma è anche notoriamente <strong>mal condizionata</strong> — il rapporto tra il più grande e il più piccolo autovalore cresce rapidamente con la dimensione. Questo significa che piccoli errori di arrotondamento possono causare grandi errori nei calcoli.</p>
<p>Il fatto che sia definita positiva riflette una proprietà della forma: $\\phi(p,p) = \\int_0^1 p(t)^2\\, dt \\geq 0$, e vale $0$ solo se $p = 0$. Questa è la definizione di <strong>prodotto scalare</strong> (forma bilineare simmetrica definita positiva).</p>`
                }
            ],
            formulas: [
                { label: "Forma integrale", latex: "\\phi(p,q) = \\int_0^1 p(t)\\,q(t)\\, dt" },
                { label: "Matrice di Hilbert 3×3", latex: "G_B = \\begin{pmatrix} 1 & 1/2 & 1/3 \\\\ 1/2 & 1/3 & 1/4 \\\\ 1/3 & 1/4 & 1/5 \\end{pmatrix}" }
            ]
        },
        {
            id: "s35-classificazione",
            type: "section",
            title: "Verso la Classificazione: Segnatura e Teorema di Sylvester",
            icon: "🧭",
            content: `<p>Abbiamo visto che la matrice di Gram dipende dalla base scelta, ma matrici di Gram diverse della stessa forma sono legate dalla relazione di congruenza $G' = P^T G P$. Questo solleva la domanda naturale: <strong>cosa resta invariante</strong> al cambiamento di base?</p>`,
            subsections: [
                {
                    subtitle: "Classificazione delle forme",
                    content: `<p>Una forma bilineare simmetrica $\\phi$ si dice:</p>
<ul>
<li><strong>Definita positiva</strong>: se $\\phi(\\vec{v}, \\vec{v}) \\gt 0$ per ogni $\\vec{v} \\neq \\vec{0}$.</li>
<li><strong>Definita negativa</strong>: se $\\phi(\\vec{v}, \\vec{v}) \\lt 0$ per ogni $\\vec{v} \\neq \\vec{0}$.</li>
<li><strong>Semidefinita positiva</strong>: se $\\phi(\\vec{v}, \\vec{v}) \\geq 0$ per ogni $\\vec{v}$.</li>
<li><strong>Indefinita</strong>: se assume sia valori positivi che negativi.</li>
</ul>
<p>Per esempio, il prodotto scalare standard è definito positivo (con $G_E = I$), mentre la forma dell'esempio su $\\mathbb{R}^2$ (con $\\det G_E = 2 - 9 = -7 \\lt 0$) è indefinita.</p>`
                },
                {
                    subtitle: "Il Teorema di Sylvester (anticipazione)",
                    content: `<p>Il <strong>Teorema della Segnatura di Sylvester</strong> (che vedremo in dettaglio nelle prossime lezioni) afferma che, per ogni forma bilineare simmetrica, esiste una base in cui la matrice di Gram è <strong>diagonale</strong> con solo $+1$, $-1$ e $0$ sulla diagonale:</p>
<p>$$G_{B^*} = \\begin{pmatrix} I_p & 0 & 0 \\\\ 0 & -I_q & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>La coppia $(p, q)$ si chiama <strong>segnatura</strong> della forma ed è un <strong>invariante</strong>: non dipende dalla base scelta. Due forme bilineari su spazi della stessa dimensione sono equivalenti (legate da un cambiamento di base) se e solo se hanno la stessa segnatura.</p>
<p>Il <strong>rango</strong> della forma è $p + q$ (= rango di qualsiasi matrice di Gram), e $p + q + \\dim(\\ker) = n$.</p>`
                }
            ],
            formulas: [
                { label: "Segnatura", latex: "(p, q) \\quad \\text{con } p + q \\leq n" },
                { label: "Forma canonica di Sylvester", latex: "G_{B^*} = \\text{diag}(\\underbrace{+1,\\dots,+1}_{p},\\; \\underbrace{-1,\\dots,-1}_{q},\\; \\underbrace{0,\\dots,0}_{n-p-q})" }
            ]
        },
        {
            id: "s35-riepilogo",
            type: "oral_box",
            title: "Schema Riepilogativo: Applicazioni Lineari vs Forme Bilineari",
            icon: "⚖️",
            content: `<p>Le due teorie hanno strutture parallele ma formule diverse:</p>`,
            table_compare: {
                headers: ["", "Applicazione Lineare", "Forma Bilineare Simm."],
                rows: [
                    ["Oggetto", "$f: V \\to W$", "$\\phi: V \\times V \\to \\mathbb{R}$"],
                    ["Matrice", "$A = M_B(f)$", "$G_B = (\\phi(\\vec{b}_i, \\vec{b}_j))$"],
                    ["Proprietà matrice", "Qualsiasi", "Simmetrica ($G = G^T$)"],
                    ["Cambio base", "$A' = P^{-1} A P$", "$G' = P^T G P$"],
                    ["Relazione", "Similitudine", "Congruenza"],
                    ["Invariante", "Autovalori", "Segnatura $(p,q)$"]
                ]
            }
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è una forma bilineare simmetrica su uno spazio vettoriale V?",
            back: "È una funzione $\\phi: V \\times V \\to \\mathbb{R}$ che è <strong>lineare nel primo argomento</strong> ($\\phi(a\\vec{u}+b\\vec{v}, \\vec{w}) = a\\phi(\\vec{u},\\vec{w}) + b\\phi(\\vec{v},\\vec{w})$) e <strong>simmetrica</strong> ($\\phi(\\vec{u},\\vec{v}) = \\phi(\\vec{v},\\vec{u})$). La simmetria + linearità a sinistra implicano automaticamente la linearità a destra."
        },
        {
            type: "definizione",
            front: "Cos'è la matrice di Gram di φ rispetto a una base B?",
            back: "È la matrice $G_B$ di dimensione $n \\times n$ con componenti $g_{ij} = \\phi(\\vec{b}_i, \\vec{b}_j)$. È sempre <strong>simmetrica</strong>. Permette di calcolare $\\phi(\\vec{u}, \\vec{v}) = \\vec{x}^T G_B \\vec{y}$ dove $\\vec{x} = [\\vec{u}]_B$ e $\\vec{y} = [\\vec{v}]_B$."
        },
        {
            type: "formula",
            front: "Come si trasforma la matrice di Gram al cambiamento di base?",
            back: "Se $P$ è la matrice le cui colonne sono le coordinate dei vettori della nuova base $B'$ rispetto alla vecchia base $B$, allora: $$G' = P^T G P$$ Questa è la relazione di <strong>congruenza</strong>, diversa dalla similitudine $A' = P^{-1}AP$ delle applicazioni lineari."
        },
        {
            type: "dimostrazione",
            front: "Dimostra la formula G' = PᵀGP per il cambiamento di base della matrice di Gram.",
            back: "Si scrive $\\phi(\\vec{u},\\vec{v})$ in due modi: in base $B$ è $\\vec{x}^T G \\vec{y}$, in base $B'$ è $(\\vec{x}')^T G' \\vec{y}'$. Poiché $\\vec{x} = P\\vec{x}'$ e $\\vec{y} = P\\vec{y}'$, si ha $\\vec{x}^T G \\vec{y} = (P\\vec{x}')^T G (P\\vec{y}') = (\\vec{x}')^T P^T G P \\vec{y}'$. Scegliendo $\\vec{x}' = \\vec{e}_i$ e $\\vec{y}' = \\vec{e}_j$ si ottiene $g'_{ij} = (P^T G P)_{ij}$ per ogni $i,j$, dunque $G' = P^T G P$."
        },
        {
            type: "tranello",
            front: "Qual è la differenza tra similitudine e congruenza di matrici?",
            back: "Similitudine: $B = P^{-1}AP$ (cambio base per applicazioni lineari). Congruenza: $B = P^T A P$ (cambio base per forme bilineari). In generale $P^{-1} \\neq P^T$, quindi le due relazioni sono <strong>diverse</strong>. Coincidono solo se $P$ è ortogonale ($P^{-1} = P^T$)."
        },
        {
            type: "tranello",
            front: "Se in un esempio risulta P = Pᵀ, posso concludere che è sempre così?",
            back: "Assolutamente no! $P = P^T$ è una coincidenza numerica che può capitare per scelte particolari della base. In generale $P \\neq P^T$ e la distinzione tra $P$ e $P^T$ nella formula $G' = P^T G P$ è essenziale."
        },
        {
            type: "domanda",
            front: "Perché la matrice di Gram è sempre simmetrica?",
            back: "Perché $g_{ij} = \\phi(\\vec{b}_i, \\vec{b}_j) = \\phi(\\vec{b}_j, \\vec{b}_i) = g_{ji}$, usando la simmetria della forma bilineare. La simmetria della matrice <strong>riflette</strong> la simmetria della forma."
        },
        {
            type: "domanda",
            front: "Qual è la matrice di Gram del prodotto scalare standard rispetto alla base canonica?",
            back: "È la matrice identità $I$, poiché $g_{ij} = \\vec{e}_i \\cdot \\vec{e}_j = \\delta_{ij}$ (simbolo di Kronecker). Segue che $\\phi(\\vec{x},\\vec{y}) = \\vec{x}^T I \\vec{y} = \\vec{x}^T \\vec{y}$."
        },
        {
            type: "domanda",
            front: "Cos'è la segnatura di una forma bilineare simmetrica e perché è importante?",
            back: "La segnatura $(p,q)$ conta il numero di $+1$ e $-1$ nella forma diagonale canonica di Sylvester. È l'<strong>invariante fondamentale</strong>: non dipende dalla base scelta. Due forme su spazi della stessa dimensione sono equivalenti (per congruenza) se e solo se hanno la stessa segnatura. Il rango è $p+q$."
        },
        {
            type: "domanda",
            front: "Cos'è la matrice di Hilbert e perché compare nello studio delle forme bilineari?",
            back: "La matrice di Hilbert $H_n$ ha componenti $h_{ij} = \\frac{1}{i+j-1}$. Compare come matrice di Gram della forma $\\phi(p,q) = \\int_0^1 p(t)q(t)\\,dt$ su $\\mathbb{R}_{n-1}[t]$ rispetto alla base canonica. È definita positiva (poiché $\\int_0^1 p^2 \\gt 0$ per $p \\neq 0$) ma notoriamente mal condizionata."
        }
    ]
};

