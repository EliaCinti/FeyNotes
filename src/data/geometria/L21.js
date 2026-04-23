const LESSON = {
    id: "L21", date: "Lezione 21 — 23 Apr 2026",
    title: "Applicazione delle Coordinate e Applicazioni Lineari",
    abstract: "Dall'applicazione delle coordinate (biettiva e lineare) che traduce qualsiasi spazio vettoriale in ℝⁿ, alle applicazioni lineari: definizione, proprietà di calcolo, esempi fondamentali e controesempi.",

    sections: [
        {
            id: "s21-coordinate",
            type: "section",
            title: "L'Applicazione delle Coordinate",
            icon: "📐",
            content: `<p>Richiamiamo il concetto chiave. Dato uno spazio vettoriale $V$ di dimensione $n$ e una sua base $B = \\{\\vec{v}_1, \\vec{v}_2, \\dots, \\vec{v}_n\\}$, per qualunque vettore $\\vec{u} \\in V$ esistono e sono <strong>unici</strong> degli scalari $x_1, x_2, \\dots, x_n \\in \\mathbb{R}$ tali che:</p>
<p>$$\\vec{u} = x_1\\vec{v}_1 + x_2\\vec{v}_2 + \\dots + x_n\\vec{v}_n$$</p>
<p>L'<strong>esistenza</strong> è garantita dal fatto che $B$ è un sistema di generatori; l'<strong>unicità</strong> deriva dall'indipendenza lineare dei vettori di $B$.</p>
<p>Questi scalari, messi in ordine in un vettore colonna, formano le <strong>coordinate</strong> di $\\vec{u}$ rispetto alla base $B$:</p>
<p>$$[\\vec{u}]_B = \\begin{pmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{pmatrix} \\in \\mathbb{R}^n$$</p>
<p>Il significato geometrico di queste coordinate è una generalizzazione dei concetti di ascissa e ordinata nel piano cartesiano: se in $\\mathbb{R}^2$ fissiamo una base $B = \\{\\vec{b}_1, \\vec{b}_2\\}$ (non necessariamente ortogonale!), le coordinate $x_1, x_2$ ci dicono "quanto" di ciascun vettore di base serve per costruire $\\vec{u}$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Coordinate rispetto a una base obliqua</strong></p>
  <p><em>Piano $\\mathbb{R}^2$ con una base obliqua $\\{\\vec{b}_1, \\vec{b}_2\\}$. Un vettore $\\vec{u}$ è rappresentato come combinazione lineare $x_1\\vec{b}_1 + x_2\\vec{b}_2$, con le "proiezioni" lungo le direzioni oblique evidenziate.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Questo ci permette di stabilire una <strong>corrispondenza</strong> tra i vettori di uno spazio vettoriale astratto $V$ e i vettori numerici di $\\mathbb{R}^n$.</p>`,
            subsections: [
                {
                    subtitle: "Definizione: Applicazione delle Coordinate",
                    content: `<p>Sia $V$ uno spazio vettoriale su $\\mathbb{R}$ di dimensione $n$ e sia $B$ una sua base. L'applicazione che associa ad ogni vettore $\\vec{u} \\in V$ il suo vettore di coordinate in $\\mathbb{R}^n$:</p>
<p>$$\\vec{u} \\mapsto [\\vec{u}]_B$$</p>
<p>prende il nome di <strong>applicazione delle coordinate di $V$ rispetto alla base $B$</strong>. La denoteremo con il simbolo $[\\cdot]_B$.</p>
<p>Questa applicazione gode di proprietà importantissime che la legano alla struttura di spazio vettoriale.</p>`
                }
            ],
            formulas: [
                { label: "Coordinate rispetto a B", latex: "[\\vec{u}]_B = \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} \\text{ dove } \\vec{u} = x_1\\vec{v}_1 + \\dots + x_n\\vec{v}_n" }
            ]
        },
        {
            id: "s21-proprieta-coordinate",
            type: "section",
            title: "Proprietà dell'Applicazione delle Coordinate",
            icon: "⚙️",
            content: `<p>Sia $V$ uno spazio vettoriale con base $B$. L'applicazione delle coordinate $[\\cdot]_B: V \\to \\mathbb{R}^n$ ha le seguenti proprietà:</p>
<p><strong>1.</strong> È una funzione <strong>biiettiva</strong>.</p>
<p><strong>2.</strong> L'immagine del vettore nullo di $V$ è il vettore nullo di $\\mathbb{R}^n$: $[\\vec{0}_V]_B = \\vec{0}_{\\mathbb{R}^n}$.</p>
<p><strong>3.</strong> Per ogni $\\vec{u}, \\vec{v} \\in V$: $[\\vec{u} + \\vec{v}]_B = [\\vec{u}]_B + [\\vec{v}]_B$.</p>
<p><strong>4.</strong> Per ogni $\\vec{u} \\in V$ e per ogni scalare $c \\in \\mathbb{R}$: $[c\\vec{u}]_B = c[\\vec{u}]_B$.</p>
<p><strong>5. (Linearità)</strong> Per ogni $\\vec{u}, \\vec{v} \\in V$ e per ogni $a, b \\in \\mathbb{R}$:</p>
<p>$$[a\\vec{u} + b\\vec{v}]_B = a[\\vec{u}]_B + b[\\vec{v}]_B$$</p>`,
            subsections: [
                {
                    subtitle: "Osservazione chiave",
                    content: `<p>La proprietà 1 (biiettività) significa che esiste una <strong>corrispondenza uno-a-uno</strong> tra i vettori di $V$ e i vettori numerici di $\\mathbb{R}^n$. Questo ci permette, in un certo senso, di "identificare" lo spazio $V$ con $\\mathbb{R}^n$, <strong>a patto di aver fissato una base</strong>. Cambiando base, cambia l'identificazione.</p>
<p>Nelle proprietà 3 e 4, è fondamentale notare che le <strong>operazioni a sinistra</strong> dell'uguale (somma e prodotto per scalare) sono quelle definite nello spazio vettoriale $V$, mentre quelle <strong>a destra</strong> sono le operazioni standard tra vettori colonna in $\\mathbb{R}^n$. Le proprietà 3 e 4 ci dicono che l'applicazione delle coordinate è "compatibile" con le operazioni di spazio vettoriale.</p>`
                },
                {
                    subtitle: "Dimostrazione della proprietà 3 (additività)",
                    content: `<p>Sia $B = \\{\\vec{b}_1, \\dots, \\vec{b}_n\\}$ la base di $V$. Siano $\\vec{u}, \\vec{v} \\in V$. Per definizione di coordinate, esistono unici scalari $x_1, \\dots, x_n$ e $y_1, \\dots, y_n$ tali che:</p>
<p>$$\\vec{u} = x_1\\vec{b}_1 + \\dots + x_n\\vec{b}_n \\quad \\Rightarrow \\quad [\\vec{u}]_B = \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix}$$</p>
<p>$$\\vec{v} = y_1\\vec{b}_1 + \\dots + y_n\\vec{b}_n \\quad \\Rightarrow \\quad [\\vec{v}]_B = \\begin{pmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{pmatrix}$$</p>
<p>Sommando i due vettori in $V$ e usando le proprietà di spazio vettoriale (distributiva e commutativa):</p>
<p>$$\\vec{u} + \\vec{v} = (x_1 + y_1)\\vec{b}_1 + \\dots + (x_n + y_n)\\vec{b}_n$$</p>
<p>Per definizione, le coordinate del vettore $\\vec{u}+\\vec{v}$ sono gli scalari $(x_1+y_1), \\dots, (x_n+y_n)$. Quindi:</p>
<p>$$[\\vec{u}+\\vec{v}]_B = \\begin{pmatrix} x_1+y_1 \\\\ \\vdots \\\\ x_n+y_n \\end{pmatrix} = \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} + \\begin{pmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{pmatrix} = [\\vec{u}]_B + [\\vec{v}]_B \\quad \\square$$</p>`
                },
                {
                    subtitle: "Dimostrazione della proprietà 4 (omogenità)",
                    content: `<p>Sia $\\vec{u} = x_1\\vec{b}_1 + \\dots + x_n\\vec{b}_n$, quindi $[\\vec{u}]_B = (x_1, \\dots, x_n)^T$. Per ogni $c \\in \\mathbb{R}$:</p>
<p>$$c\\vec{u} = c(x_1\\vec{b}_1 + \\dots + x_n\\vec{b}_n) = (cx_1)\\vec{b}_1 + \\dots + (cx_n)\\vec{b}_n$$</p>
<p>Per definizione di coordinate:</p>
<p>$$[c\\vec{u}]_B = \\begin{pmatrix} cx_1 \\\\ \\vdots \\\\ cx_n \\end{pmatrix} = c \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} = c[\\vec{u}]_B \\quad \\square$$</p>`
                },
                {
                    subtitle: "Dimostrazione della proprietà 5 (linearità)",
                    content: `<p>Questa proprietà è una <strong>conseguenza diretta</strong> delle proprietà 3 e 4:</p>
<p>$$[a\\vec{u} + b\\vec{v}]_B \\overset{(3)}{=} [a\\vec{u}]_B + [b\\vec{v}]_B \\overset{(4)}{=} a[\\vec{u}]_B + b[\\vec{v}]_B \\quad \\square$$</p>`
                }
            ],
            formulas: [
                { label: "Additività delle coordinate", latex: "[\\vec{u} + \\vec{v}]_B = [\\vec{u}]_B + [\\vec{v}]_B" },
                { label: "Omogenità delle coordinate", latex: "[c\\vec{u}]_B = c[\\vec{u}]_B" },
                { label: "Linearità delle coordinate", latex: "[a\\vec{u} + b\\vec{v}]_B = a[\\vec{u}]_B + b[\\vec{v}]_B" }
            ]
        },
        {
            id: "s21-corollario-indipendenza",
            type: "section",
            title: "Indipendenza Lineare e Coordinate",
            icon: "🔗",
            content: `<p>Una conseguenza fondamentale delle proprietà dell'applicazione delle coordinate è che lo studio della dipendenza/indipendenza lineare in uno <strong>spazio vettoriale qualsiasi</strong> può essere ricondotto a un problema in $\\mathbb{R}^n$, che sappiamo risolvere con <strong>Gauss</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Corollario",
                    content: `<p>Sia $V$ uno spazio vettoriale con base $B$. Un insieme di vettori $\\{\\vec{u}_1, \\dots, \\vec{u}_k\\} \\subset V$ è linearmente indipendente <strong>se e solo se</strong> l'insieme dei corrispondenti vettori di coordinate $\\{[\\vec{u}_1]_B, \\dots, [\\vec{u}_k]_B\\} \\subset \\mathbb{R}^n$ è linearmente indipendente.</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>L'idea è che i vettori $\\vec{u}_1, \\dots, \\vec{u}_k$ hanno le <strong>stesse relazioni lineari</strong> dei loro vettori di coordinate. Infatti, una generica combinazione lineare dei vettori $\\vec{u}_i$ è nulla se e solo se la stessa combinazione lineare delle coordinate è nulla:</p>
<p>$$a_1\\vec{u}_1 + \\dots + a_k\\vec{u}_k = \\vec{0}_V$$</p>
<p>Applichiamo $[\\cdot]_B$ ad entrambi i membri (e usiamo linearità + proprietà 2):</p>
<p>$$\\iff [a_1\\vec{u}_1 + \\dots + a_k\\vec{u}_k]_B = [\\vec{0}_V]_B$$</p>
<p>$$\\iff a_1[\\vec{u}_1]_B + \\dots + a_k[\\vec{u}_k]_B = \\vec{0}_{\\mathbb{R}^n}$$</p>
<p>Di conseguenza, l'insieme $\\{\\vec{u}_i\\}$ è linearmente indipendente (l'unica soluzione è quella banale con tutti i coefficienti nulli) se e solo se l'insieme delle coordinate è linearmente indipendente. $\\square$</p>`
                },
                {
                    subtitle: "Esempio applicativo: polinomi",
                    content: `<p>Il seguente esempio illustra come applicare il corollario in pratica: prendiamo i vettori in $V$, calcoliamo le coordinate, mettiamo in matrice e applichiamo Gauss.</p>
<p>Consideriamo i seguenti polinomi in $\\mathbb{R}[t]_{\\le 3}$:</p>
<p>$$p(t) = 1 + 2t + 3t^2 + t^3$$</p>
<p>$$q(t) = 1 - 4t + 7t^2 - 9t^3$$</p>
<p>$$r(t) = 1 + 5t + t^2 + 6t^3$$</p>
<p>Vogliamo stabilire se sono linearmente indipendenti. Fissiamo la base canonica $\\mathcal{E} = \\{1, t, t^2, t^3\\}$ di $\\mathbb{R}[t]_{\\le 3}$. I vettori di coordinate sono:</p>
<p>$$[p(t)]_{\\mathcal{E}} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\\\ 1 \\end{pmatrix}, \\quad [q(t)]_{\\mathcal{E}} = \\begin{pmatrix} 1 \\\\ -4 \\\\ 7 \\\\ -9 \\end{pmatrix}, \\quad [r(t)]_{\\mathcal{E}} = \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\\\ 6 \\end{pmatrix}$$</p>
<p>Li mettiamo come righe di una matrice e riduciamo a scala:</p>
<p>$$\\begin{pmatrix} 1 & 2 & 3 & 1 \\\\ 1 & -4 & 7 & -9 \\\\ 1 & 5 & 1 & 6 \\end{pmatrix} \\overset{R_2 - R_1,\\; R_3 - R_1}{\\longrightarrow} \\begin{pmatrix} 1 & 2 & 3 & 1 \\\\ 0 & -6 & 4 & -10 \\\\ 0 & 3 & -2 & 5 \\end{pmatrix} \\overset{R_3 + \\frac{1}{2}R_2}{\\longrightarrow} \\begin{pmatrix} 1 & 2 & 3 & 1 \\\\ 0 & -6 & 4 & -10 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>La matrice ridotta ha <strong>rango 2</strong>. Poiché abbiamo 3 vettori, essi sono <strong>linearmente dipendenti</strong>. Di conseguenza, anche i polinomi $p(t), q(t), r(t)$ sono linearmente dipendenti.</p>`
                }
            ],
            formulas: [
                { label: "Equivalenza indipendenza/coordinate", latex: "\\{\\vec{u}_1, \\dots, \\vec{u}_k\\} \\text{ lin. ind.} \\iff \\{[\\vec{u}_1]_B, \\dots, [\\vec{u}_k]_B\\} \\text{ lin. ind.}" }
            ]
        },
        {
            id: "s21-applicazioni-lineari-def",
            type: "section",
            title: "Applicazioni Lineari: Definizione",
            icon: "🔀",
            content: `<p>In matematica, il confronto tra oggetti diversi si effettua tramite lo studio delle <strong>applicazioni (funzioni)</strong> tra di essi. Quando gli oggetti sono spazi vettoriali, le applicazioni più interessanti sono quelle "compatibili" con le operazioni di somma e prodotto per scalare. Queste sono le <strong>applicazioni lineari</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione formale",
                    content: `<p>Siano $V$ e $V'$ due spazi vettoriali su $\\mathbb{R}$. Un'applicazione $f: V \\to V'$ si dice <strong>lineare</strong> se soddisfa le seguenti due condizioni per ogni scelta di vettori $\\vec{u}, \\vec{v} \\in V$ e per ogni scalare $c \\in \\mathbb{R}$:</p>
<p><strong>1. Additività:</strong> $f(\\vec{u} + \\vec{v}) = f(\\vec{u}) + f(\\vec{v})$</p>
<p><strong>2. Omogenità:</strong> $f(c\\vec{u}) = c \\cdot f(\\vec{u})$</p>`
                },
                {
                    subtitle: "Dove si svolgono le operazioni?",
                    content: `<p>Attenzione: nella definizione è cruciale capire <strong>dove</strong> si svolgono le operazioni.</p>
<p>In $f(\\vec{u} + \\vec{v})$, il simbolo "$+$" indica la somma <strong>in $V$</strong> (dominio).</p>
<p>In $f(\\vec{u}) + f(\\vec{v})$, il simbolo "$+$" indica la somma <strong>in $V'$</strong> (codominio).</p>
<p>In $f(c\\vec{u})$, il prodotto è quello per scalare <strong>in $V$</strong>.</p>
<p>In $c \\cdot f(\\vec{u})$, il prodotto è quello per scalare <strong>in $V'$</strong>.</p>
<p>Un'applicazione lineare è una funzione che <strong>"rispetta"</strong> le operazioni di spazio vettoriale: non importa se sommiamo prima e applichiamo dopo, o viceversa — il risultato è lo stesso.</p>`
                }
            ],
            formulas: [
                { label: "Additività", latex: "f(\\vec{u} + \\vec{v}) = f(\\vec{u}) + f(\\vec{v})" },
                { label: "Omogenità", latex: "f(c\\vec{u}) = c \\cdot f(\\vec{u})" }
            ]
        },
        {
            id: "s21-controesempio",
            type: "alert_box",
            title: "⚠️ Esempio di applicazione NON lineare",
            icon: "🚫",
            content: `<p>Per capire davvero la definizione, è fondamentale vedere dove può <strong>fallire</strong>. Consideriamo $f: \\mathbb{R} \\to \\mathbb{R}$ definita da $f(x) = x^2$.</p>
<p><strong>Test di additività:</strong> prendiamo $x = 1, y = 2$:</p>
<p>$$f(x + y) = f(3) = 9 \\qquad \\text{ma} \\qquad f(x) + f(y) = 1 + 4 = 5$$</p>
<p>Poiché $9 \\neq 5$, l'additività fallisce: $f(x) = x^2$ <strong>non è lineare</strong>.</p>
<p>Altro esempio insidioso: $g: \\mathbb{R} \\to \\mathbb{R}$ definita da $g(x) = x + 1$. Sembra "quasi" lineare, ma:</p>
<p>$$g(0) = 0 + 1 = 1 \\neq 0$$</p>
<p>Come vedremo tra poco, un'applicazione lineare deve mandare il vettore nullo nel vettore nullo. Quindi $g$ <strong>non è lineare</strong>. Un'applicazione affine (del tipo $ax + b$ con $b \\neq 0$) non è mai lineare!</p>`
        },
        {
            id: "s21-proprieta-calcolo",
            type: "section",
            title: "Proprietà di Calcolo delle Applicazioni Lineari",
            icon: "🧮",
            content: `<p>Sia $f: V \\to V'$ un'applicazione lineare. Dalla definizione discendono numerose proprietà di calcolo.</p>`,
            subsections: [
                {
                    subtitle: "Proprietà 1 — f manda zero in zero",
                    content: `<p>$f(\\vec{0}_V) = \\vec{0}_{V'}$.</p>
<p><strong>Dimostrazione:</strong> Poiché $f$ è lineare:</p>
<p>$$f(\\vec{0}_V) = f(\\vec{0}_V + \\vec{0}_V) = f(\\vec{0}_V) + f(\\vec{0}_V)$$</p>
<p>Sottraendo $f(\\vec{0}_V)$ da entrambi i membri (operazione lecita in $V'$), otteniamo $\\vec{0}_{V'} = f(\\vec{0}_V)$. $\\square$</p>
<p><em>Nota: questa è una condizione necessaria (ma non sufficiente!) per la linearità. Se $f(\\vec{0}) \\neq \\vec{0}$, $f$ non è lineare — punto.</em></p>`
                },
                {
                    subtitle: "Proprietà 2 — f e l'opposto",
                    content: `<p>Per ogni $\\vec{u} \\in V$: $f(-\\vec{u}) = -f(\\vec{u})$.</p>
<p><strong>Dimostrazione:</strong> Dalla proprietà 1:</p>
<p>$$\\vec{0}_{V'} = f(\\vec{0}_V) = f(\\vec{u} + (-\\vec{u})) = f(\\vec{u}) + f(-\\vec{u})$$</p>
<p>Questo implica che $f(-\\vec{u})$ è l'opposto di $f(\\vec{u})$, cioè $f(-\\vec{u}) = -f(\\vec{u})$. $\\square$</p>`
                },
                {
                    subtitle: "Proprietà 3 — f e la differenza",
                    content: `<p>Per ogni $\\vec{u}, \\vec{v} \\in V$: $f(\\vec{u} - \\vec{v}) = f(\\vec{u}) - f(\\vec{v})$.</p>
<p><strong>Dimostrazione:</strong></p>
<p>$$f(\\vec{u} - \\vec{v}) = f(\\vec{u} + (-\\vec{v})) = f(\\vec{u}) + f(-\\vec{v}) = f(\\vec{u}) - f(\\vec{v}) \\quad \\square$$</p>`
                },
                {
                    subtitle: "Proprietà 4 — Linearità completa",
                    content: `<p>Per ogni $\\vec{u}, \\vec{v} \\in V$ e $a, b \\in \\mathbb{R}$:</p>
<p>$$f(a\\vec{u} + b\\vec{v}) = af(\\vec{u}) + bf(\\vec{v})$$</p>
<p><strong>Dimostrazione:</strong></p>
<p>$$f(a\\vec{u} + b\\vec{v}) = f(a\\vec{u}) + f(b\\vec{v}) = af(\\vec{u}) + bf(\\vec{v}) \\quad \\square$$</p>
<p>(Primo uguale: additività. Secondo uguale: omogenità applicata a ciascun termine.)</p>`
                },
                {
                    subtitle: "Proprietà 5 — Linearità dell'inversa",
                    content: `<p>Se $f$ è biiettiva, anche la sua inversa $f^{-1}: V' \\to V$ è lineare.</p>
<p><strong>Dimostrazione (additività):</strong> Siano $\\vec{u}', \\vec{v}' \\in V'$. Poiché $f$ è biiettiva, esistono unici $\\vec{u}, \\vec{v} \\in V$ tali che $f(\\vec{u}) = \\vec{u}'$ e $f(\\vec{v}) = \\vec{v}'$.</p>
<p>$$f^{-1}(\\vec{u}' + \\vec{v}') = f^{-1}(f(\\vec{u}) + f(\\vec{v})) = f^{-1}(f(\\vec{u}+\\vec{v})) = (f^{-1} \\circ f)(\\vec{u}+\\vec{v}) = \\vec{u}+\\vec{v} = f^{-1}(\\vec{u}') + f^{-1}(\\vec{v}')$$</p>
<p><strong>Dimostrazione (omogenità):</strong> Sia $\\vec{u}' \\in V'$ e $c \\in \\mathbb{R}$. Con $\\vec{u} = f^{-1}(\\vec{u}')$:</p>
<p>$$f^{-1}(c\\vec{u}') = f^{-1}(cf(\\vec{u})) = f^{-1}(f(c\\vec{u})) = (f^{-1} \\circ f)(c\\vec{u}) = c\\vec{u} = cf^{-1}(\\vec{u}') \\quad \\square$$</p>`
                },
                {
                    subtitle: "Proprietà 6 — Composizione di lineari",
                    content: `<p>Se $f: V \\to V'$ e $g: V' \\to V''$ sono lineari, anche la composizione $g \\circ f: V \\to V''$ è lineare.</p>
<p><strong>Dimostrazione (additività):</strong></p>
<p>$$(g \\circ f)(\\vec{u}+\\vec{v}) = g(f(\\vec{u}+\\vec{v})) = g(f(\\vec{u})+f(\\vec{v})) = g(f(\\vec{u}))+g(f(\\vec{v})) = (g \\circ f)(\\vec{u}) + (g \\circ f)(\\vec{v})$$</p>
<p><strong>Dimostrazione (omogenità):</strong></p>
<p>$$(g \\circ f)(c\\vec{u}) = g(f(c\\vec{u})) = g(cf(\\vec{u})) = cg(f(\\vec{u})) = c(g \\circ f)(\\vec{u}) \\quad \\square$$</p>`
                },
                {
                    subtitle: "Proprietà 7 — Somma e prodotto per scalare di lineari",
                    content: `<p>Se $f, g: V \\to V'$ sono lineari e $c \\in \\mathbb{R}$, anche le applicazioni $(f+g)$ e $(c \\cdot f)$ sono lineari.</p>
<p><strong>Dimostrazione per $(f+g)$ (additività):</strong></p>
<p>$$(f+g)(\\vec{u}+\\vec{v}) = f(\\vec{u}+\\vec{v}) + g(\\vec{u}+\\vec{v}) = (f(\\vec{u})+f(\\vec{v})) + (g(\\vec{u})+g(\\vec{v}))$$</p>
<p>$$= (f(\\vec{u})+g(\\vec{u})) + (f(\\vec{v})+g(\\vec{v})) = (f+g)(\\vec{u}) + (f+g)(\\vec{v}) \\quad \\checkmark$$</p>
<p><strong>Dimostrazione per $(c \\cdot f)$ (additività):</strong></p>
<p>$$(c \\cdot f)(\\vec{u}+\\vec{v}) = c \\cdot f(\\vec{u}+\\vec{v}) = c(f(\\vec{u}) + f(\\vec{v})) = cf(\\vec{u}) + cf(\\vec{v}) = (c \\cdot f)(\\vec{u}) + (c \\cdot f)(\\vec{v}) \\quad \\checkmark$$</p>
<p><strong>Dimostrazione per $(c \\cdot f)$ (omogenità):</strong></p>
<p>$$(c \\cdot f)(\\lambda \\vec{u}) = c \\cdot f(\\lambda \\vec{u}) = c(\\lambda f(\\vec{u})) = \\lambda(c \\cdot f(\\vec{u})) = \\lambda (c \\cdot f)(\\vec{u}) \\quad \\square$$</p>
<p>La verifica dell'omogenità per $(f+g)$ è analoga e lasciata come esercizio.</p>`
                }
            ],
            formulas: [
                { label: "Zero va in zero", latex: "f(\\vec{0}_V) = \\vec{0}_{V'}" },
                { label: "Linearità completa", latex: "f(a\\vec{u} + b\\vec{v}) = af(\\vec{u}) + bf(\\vec{v})" }
            ]
        },
        {
            id: "s21-esempi-lineari",
            type: "section",
            title: "Esempi Fondamentali di Applicazioni Lineari",
            icon: "📋",
            content: `<p>Vediamo una lista di esempi importanti che ricorrono continuamente nel corso.</p>`,
            subsections: [
                {
                    subtitle: "1. L'applicazione delle coordinate",
                    content: `<p>L'applicazione delle coordinate $[\\cdot]_B: V \\to \\mathbb{R}^n$ è un'applicazione lineare. Lo abbiamo dimostrato con le proprietà 3 e 4 della prima proposizione. È anche biiettiva, quindi è il prototipo di "isomorfismo" tra spazi vettoriali.</p>`
                },
                {
                    subtitle: "2. L'applicazione identica",
                    content: `<p>L'applicazione identica $\\text{id}_V: V \\to V$, definita da $\\text{id}_V(\\vec{u}) = \\vec{u}$, è lineare.</p>
<p>Verifica immediata: $\\text{id}_V(\\vec{u}+\\vec{v}) = \\vec{u}+\\vec{v} = \\text{id}_V(\\vec{u}) + \\text{id}_V(\\vec{v})$ e $\\text{id}_V(c\\vec{u}) = c\\vec{u} = c\\,\\text{id}_V(\\vec{u})$.</p>`
                },
                {
                    subtitle: "3. L'applicazione nulla",
                    content: `<p>L'applicazione nulla $f: V \\to V'$, definita da $f(\\vec{u}) = \\vec{0}_{V'}$ per ogni $\\vec{u} \\in V$, è lineare.</p>
<p>Verifica: $f(\\vec{u}+\\vec{v}) = \\vec{0}_{V'} = \\vec{0}_{V'} + \\vec{0}_{V'} = f(\\vec{u}) + f(\\vec{v})$ e $f(c\\vec{u}) = \\vec{0}_{V'} = c\\vec{0}_{V'} = cf(\\vec{u})$.</p>`
                },
                {
                    subtitle: "4. L'applicazione L_A (la più importante!)",
                    content: `<p>Fissata una matrice $A \\in M_{m,n}(\\mathbb{R})$, l'applicazione $L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$ definita da $L_A(\\vec{x}) = A\\vec{x}$ è lineare. Questo è <strong>il collegamento fondamentale tra applicazioni lineari e matrici</strong>.</p>
<p><strong>Verifica esplicita dell'additività:</strong></p>
<p>$$L_A(\\vec{u}+\\vec{v}) = A(\\vec{u}+\\vec{v}) = A\\vec{u} + A\\vec{v} = L_A(\\vec{u}) + L_A(\\vec{v})$$</p>
<p>(Si usa la proprietà distributiva del prodotto matrice-vettore.)</p>
<p><strong>Verifica esplicita dell'omogenità:</strong></p>
<p>$$L_A(c\\vec{u}) = A(c\\vec{u}) = c(A\\vec{u}) = cL_A(\\vec{u})$$</p>
<p>(Si usa la proprietà di compatibilità con lo scalare del prodotto matrice-vettore.)</p>
<p>Questo esempio è cruciale: vedremo che <strong>ogni</strong> applicazione lineare tra spazi $\\mathbb{R}^n$ e $\\mathbb{R}^m$ può essere rappresentata in questa forma, per un'opportuna matrice $A$.</p>`
                },
                {
                    subtitle: "5. Le applicazioni lineari da ℝ in ℝ",
                    content: `<p>L'applicazione $f: \\mathbb{R} \\to \\mathbb{R}$ definita da $f(x) = ax$ per uno scalare fissato $a \\in \\mathbb{R}$ è lineare (è un caso particolare dell'esempio 4 con $A = (a)$, matrice $1 \\times 1$).</p>
<p>Fatto notevole: <strong>tutte</strong> le applicazioni lineari da $\\mathbb{R}$ in $\\mathbb{R}$ sono di questa forma.</p>
<p><strong>Dimostrazione:</strong> Basta porre $a = f(1)$. Allora per ogni $x \\in \\mathbb{R}$:</p>
<p>$$f(x) = f(x \\cdot 1) = x \\cdot f(1) = ax$$</p>
<p>dove si usa l'omogenità ($f(x \\cdot 1) = x \\cdot f(1)$). Quindi $f$ è necessariamente del tipo $f(x) = ax$. Geometricamente: le applicazioni lineari $\\mathbb{R} \\to \\mathbb{R}$ sono esattamente le rette passanti per l'origine.</p>`
                }
            ]
        },
        {
            id: "s21-nota-pattern",
            type: "note_box",
            title: "Il pattern delle dimostrazioni di linearità",
            icon: "💡",
            content: `<p>Per dimostrare che un'applicazione $f$ è lineare, il procedimento è sempre lo stesso:</p>
<p><strong>Passo 1 — Additività:</strong> Prendi due vettori generici $\\vec{u}, \\vec{v}$ nel dominio. Calcola $f(\\vec{u}+\\vec{v})$ sviluppando l'espressione. Calcola separatamente $f(\\vec{u}) + f(\\vec{v})$. Verifica che sono uguali.</p>
<p><strong>Passo 2 — Omogenità:</strong> Prendi un vettore generico $\\vec{u}$ e uno scalare $c$. Calcola $f(c\\vec{u})$. Calcola $cf(\\vec{u})$. Verifica che sono uguali.</p>
<p>Per dimostrare che $f$ <strong>non</strong> è lineare, basta trovare un <strong>singolo controesempio</strong> che violi una delle due proprietà, oppure verificare che $f(\\vec{0}) \\neq \\vec{0}$.</p>`
        },
        {
            id: "s21-riepilogo",
            type: "oral_box",
            title: "Domanda tipica: collegare coordinate e indipendenza lineare",
            icon: "🎯",
            content: `<p><strong>Domanda:</strong> "Come si studia l'indipendenza lineare di vettori in uno spazio vettoriale qualsiasi?"</p>
<p><strong>Risposta attesa:</strong> Si fissa una base $B$ di $V$. Si calcolano le coordinate dei vettori rispetto a $B$. Per il corollario, i vettori in $V$ sono linearmente indipendenti se e solo se i corrispondenti vettori di coordinate in $\\mathbb{R}^n$ lo sono. A questo punto si procede con Gauss.</p>
<p><strong>Attenzione:</strong> la scelta della base $B$ non influenza il risultato (indipendente/dipendente), ma cambia i vettori di coordinate. Scegliete la base più comoda (di solito quella canonica, se esiste).</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è l'applicazione delle coordinate $[\\cdot]_B$ e quali proprietà ha?",
            back: "Data una base $B = \\{\\vec{v}_1, \\dots, \\vec{v}_n\\}$ di $V$, è l'applicazione $\\vec{u} \\mapsto [\\vec{u}]_B \\in \\mathbb{R}^n$ che associa a ogni vettore il vettore colonna delle sue coordinate. È <strong>biiettiva</strong> e <strong>lineare</strong>: $[\\vec{u}+\\vec{v}]_B = [\\vec{u}]_B + [\\vec{v}]_B$ e $[c\\vec{u}]_B = c[\\vec{u}]_B$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che $[\\vec{u}+\\vec{v}]_B = [\\vec{u}]_B + [\\vec{v}]_B$.",
            back: "Se $\\vec{u} = x_1\\vec{b}_1 + \\dots + x_n\\vec{b}_n$ e $\\vec{v} = y_1\\vec{b}_1 + \\dots + y_n\\vec{b}_n$, allora $\\vec{u}+\\vec{v} = (x_1+y_1)\\vec{b}_1 + \\dots + (x_n+y_n)\\vec{b}_n$. Quindi $[\\vec{u}+\\vec{v}]_B = (x_1+y_1, \\dots, x_n+y_n)^T = (x_1, \\dots, x_n)^T + (y_1, \\dots, y_n)^T = [\\vec{u}]_B + [\\vec{v}]_B$."
        },
        {
            type: "definizione",
            front: "Cos'è un'applicazione lineare? Enuncia la definizione completa.",
            back: "Un'applicazione $f: V \\to V'$ è lineare se per ogni $\\vec{u}, \\vec{v} \\in V$ e ogni $c \\in \\mathbb{R}$: (1) $f(\\vec{u}+\\vec{v}) = f(\\vec{u}) + f(\\vec{v})$ (additività) e (2) $f(c\\vec{u}) = cf(\\vec{u})$ (omogenità). Le operazioni a sinistra sono in $V$, quelle a destra in $V'$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che se $f$ è lineare, allora $f(\\vec{0}_V) = \\vec{0}_{V'}$.",
            back: "$f(\\vec{0}_V) = f(\\vec{0}_V + \\vec{0}_V) = f(\\vec{0}_V) + f(\\vec{0}_V)$. Sottraendo $f(\\vec{0}_V)$ da entrambi i membri si ottiene $\\vec{0}_{V'} = f(\\vec{0}_V)$. Alternativamente: $f(\\vec{0}_V) = f(0 \\cdot \\vec{u}) = 0 \\cdot f(\\vec{u}) = \\vec{0}_{V'}$."
        },
        {
            type: "tranello",
            front: "L'applicazione $f(x) = x + 1$ da $\\mathbb{R}$ in $\\mathbb{R}$ è lineare?",
            back: "No! $f(0) = 1 \\neq 0$. Un'applicazione lineare deve mandare lo zero nello zero. Più in generale, le applicazioni affini $f(x) = ax + b$ con $b \\neq 0$ non sono mai lineari."
        },
        {
            type: "domanda",
            front: "Come si verifica l'indipendenza lineare di vettori in uno spazio astratto come $\\mathbb{R}[t]_{\\le 3}$?",
            back: "Si fissa una base $B$ (es. la canonica $\\{1, t, t^2, t^3\\}$), si calcolano le coordinate dei vettori rispetto a $B$, e si studia l'indipendenza dei vettori di coordinate in $\\mathbb{R}^n$ con il metodo di Gauss. Per il corollario, il risultato è equivalente."
        },
        {
            type: "formula",
            front: "Perché $L_A(\\vec{x}) = A\\vec{x}$ è un'applicazione lineare?",
            back: "Additività: $L_A(\\vec{u}+\\vec{v}) = A(\\vec{u}+\\vec{v}) = A\\vec{u} + A\\vec{v} = L_A(\\vec{u}) + L_A(\\vec{v})$. Omogenità: $L_A(c\\vec{u}) = A(c\\vec{u}) = c(A\\vec{u}) = cL_A(\\vec{u})$. Segue dalle proprietà distributive del prodotto matrice-vettore."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che se $f$ è lineare e biiettiva, anche $f^{-1}$ è lineare.",
            back: "Per l'additività: siano $\\vec{u}' = f(\\vec{u}), \\vec{v}' = f(\\vec{v})$. Allora $f^{-1}(\\vec{u}'+\\vec{v}') = f^{-1}(f(\\vec{u})+f(\\vec{v})) = f^{-1}(f(\\vec{u}+\\vec{v})) = \\vec{u}+\\vec{v} = f^{-1}(\\vec{u}')+f^{-1}(\\vec{v}')$. Per l'omogenità: $f^{-1}(c\\vec{u}') = f^{-1}(cf(\\vec{u})) = f^{-1}(f(c\\vec{u})) = c\\vec{u} = cf^{-1}(\\vec{u}')$."
        },
        {
            type: "domanda",
            front: "Quali sono tutte le applicazioni lineari da $\\mathbb{R}$ in $\\mathbb{R}$?",
            back: "Sono tutte e sole le funzioni del tipo $f(x) = ax$ con $a \\in \\mathbb{R}$. Dimostrazione: posto $a = f(1)$, per omogenità $f(x) = f(x \\cdot 1) = x \\cdot f(1) = ax$. Geometricamente: le rette passanti per l'origine."
        },
        {
            type: "tranello",
            front: "$f(x) = x^2$ è un'applicazione lineare da $\\mathbb{R}$ in $\\mathbb{R}$?",
            back: "No! L'additività fallisce: $f(1+2) = f(3) = 9$, ma $f(1)+f(2) = 1+4 = 5$. Anche l'omogenità fallisce: $f(2 \\cdot 3) = f(6) = 36$, ma $2 \\cdot f(3) = 2 \\cdot 9 = 18$."
        }
    ]
};

