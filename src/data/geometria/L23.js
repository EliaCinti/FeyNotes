const LESSON = {
    id: "L23", date: "Lezione 23 — 28 Apr 2026",
    title: "Nucleo e Immagine di Applicazioni Lineari",
    abstract: "Esempi geometrici di applicazioni lineari nel piano (rotazioni, riflessioni, proiezioni ortogonali), definizione di nucleo e immagine, criteri di iniettività e suriettività, e il fondamentale Teorema della Dimensione (Rank-Nullity).",

    sections: [
        {
            id: "s23-intro",
            type: "section",
            title: "Introduzione",
            icon: "🎯",
            content: `<p>In questa lezione vogliamo parlare del <strong>nucleo</strong> e dell'<strong>immagine</strong> di un'applicazione lineare. Prima di entrare nel vivo dell'argomento, però, faremo alcuni esempi geometrici di applicazioni lineari, per mostrare come queste abbiano un'interpretazione geometrica concreta.</p>`
        },
        {
            id: "s23-rotazioni",
            type: "section",
            title: "Rotazioni nel Piano",
            icon: "🔄",
            content: `<p>Consideriamo una rotazione nel piano di un angolo fisso $\\alpha$. Fissato un angolo $\\alpha \\in \\mathbb{R}$, consideriamo lo spazio vettoriale dei vettori geometrici applicati in un punto $O$ del piano. Prendiamo un qualsiasi vettore $\\vec{v} = \\vec{OX}$ e lo ruotiamo in senso antiorario di un angolo $\\alpha$, ottenendo un nuovo vettore $\\vec{w} = \\vec{OY}$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Rotazione di un vettore nel piano</strong></p>
  <p><em>Dall'origine O partono due vettori: $\\vec{v} = \\vec{OX}$ che forma un angolo $\\phi$ con l'asse x, e $\\vec{w} = \\vec{OY}$ che forma un angolo $\\phi + \\alpha$. L'angolo $\\alpha$ è indicato tra i due vettori.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Questa operazione definisce un'applicazione $F_\\alpha$ che associa ad ogni vettore $\\vec{v}$ il suo ruotato $\\vec{w}$. Il vettore $\\vec{OY}$ è detto la <strong>rotazione</strong> di $\\vec{OX}$ di angolo $\\alpha$ in senso antiorario.</p>
<p>Vogliamo dimostrare che questa applicazione è lineare. Per farlo, introduciamo un sistema di coordinate.</p>`,
            subsections: [
                {
                    subtitle: "Derivazione della matrice di rotazione",
                    content: `<p>Fissiamo una base ortonormale $B = \\{\\vec{e}_1, \\vec{e}_2\\}$ nel piano. Un vettore $\\vec{v} = \\vec{OX}$ avrà coordinate $(x_1, x_2)$ e il suo ruotato $\\vec{w} = \\vec{OY}$ avrà coordinate $(y_1, y_2)$.</p>
<p>Sia $L$ la lunghezza del vettore $\\vec{v}$, e sia $\\phi$ l'angolo che $\\vec{v}$ forma con l'asse delle ascisse. Le coordinate di $X$ sono:</p>
<p>$$\\begin{cases} x_1 = L \\cos\\phi \\\\ x_2 = L \\sin\\phi \\end{cases}$$</p>
<p>Il vettore ruotato $\\vec{w}$ avrà la stessa lunghezza $L$, ma formerà un angolo $\\phi + \\alpha$ con l'asse delle ascisse:</p>
<p>$$\\begin{cases} y_1 = L \\cos(\\phi + \\alpha) \\\\ y_2 = L \\sin(\\phi + \\alpha) \\end{cases}$$</p>
<p>Utilizzando le <strong>formule di addizione</strong> per il coseno e il seno, e ricordando che $L\\cos\\phi = x_1$ e $L\\sin\\phi = x_2$:</p>
<p>$$y_1 = L(\\cos\\phi \\cos\\alpha - \\sin\\phi \\sin\\alpha) = x_1 \\cos\\alpha - x_2 \\sin\\alpha$$</p>
<p>$$y_2 = L(\\sin\\phi \\cos\\alpha + \\cos\\phi \\sin\\alpha) = x_2 \\cos\\alpha + x_1 \\sin\\alpha$$</p>
<p>Questo è un sistema di equazioni lineari in $x_1$ e $x_2$, che possiamo scrivere in forma matriciale:</p>
<p>$$\\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}$$</p>
<p>La matrice $R_\\alpha$ è detta <strong>matrice di rotazione</strong>. Poiché la trasformazione è rappresentata da una matrice, essa è un'applicazione lineare.</p>`
                },
                {
                    subtitle: "Determinante della matrice di rotazione",
                    content: `<p>Il determinante della matrice di rotazione è:</p>
<p>$$\\det(R_\\alpha) = \\cos^2\\alpha - (-\\sin\\alpha)(\\sin\\alpha) = \\cos^2\\alpha + \\sin^2\\alpha = 1$$</p>
<p>Un determinante pari a <strong>1</strong> significa che la trasformazione <strong>preserva l'orientazione</strong>.</p>`
                },
                {
                    subtitle: "Esempi di rotazioni",
                    content: `<p><strong>Rotazione di 90°:</strong> Se $\\alpha = \\frac{\\pi}{2}$:</p>
<p>$$R_{\\pi/2} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$</p>
<p>L'espressione esplicita è $f(x_1, x_2) = (-x_2, x_1)$. Per esempio, il vettore $(1,0)$ viene mappato in $(0,1)$.</p>
<p><strong>Rotazione di 45°:</strong> Se $\\alpha = \\frac{\\pi}{4}$, abbiamo $\\cos(\\pi/4) = \\sin(\\pi/4) = \\frac{\\sqrt{2}}{2}$:</p>
<p>$$R_{\\pi/4} = \\frac{\\sqrt{2}}{2} \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$$</p>
<p>L'espressione esplicita è $f(x_1, x_2) = \\left( \\frac{\\sqrt{2}}{2}(x_1 - x_2),\\; \\frac{\\sqrt{2}}{2}(x_1 + x_2) \\right)$.</p>
<p><strong>Rotazione di 180°:</strong> Se $\\alpha = \\pi$:</p>
<p>$$R_{\\pi} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I$$</p>
<p>L'espressione esplicita è $f(x_1, x_2) = (-x_1, -x_2)$, che corrisponde a una <strong>simmetria centrale</strong> rispetto all'origine.</p>`
                }
            ],
            formulas: [
                { label: "Matrice di rotazione", latex: "R_\\alpha = \\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{pmatrix}" },
                { label: "Determinante rotazione", latex: "\\det(R_\\alpha) = 1" }
            ]
        },
        {
            id: "s23-riflessioni",
            type: "section",
            title: "Riflessioni nel Piano",
            icon: "🪞",
            content: `<p>Un altro esempio di trasformazione geometrica è la <strong>riflessione</strong> (o simmetria) rispetto a una retta $r$ passante per l'origine. Dato un vettore $\\vec{v} = \\vec{OX}$, il suo riflesso $\\vec{w} = \\vec{OY}$ si ottiene costruendo il punto $Y$ simmetrico a $X$ rispetto alla retta $r$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Riflessione di un vettore rispetto a una retta</strong></p>
  <p><em>Dall'origine O partono due vettori: $\\vec{OX}$ (blu) con angolo $\\phi$ e $\\vec{OY}$ (rosso) con angolo $2\\alpha - \\phi$. La retta tratteggiata $r$ forma un angolo $\\alpha$ con l'asse x. Il punto medio $M$ del segmento $XY$ giace sulla retta $r$. Gli archi degli angoli $\\alpha$ e $\\phi$ devono essere ben distinti (raggio diverso o colore diverso).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Giustificazione geometrica dell'angolo del riflesso",
                    content: `<p>La riflessione rispetto alla retta $r$ porta l'angolo $\\phi$ nell'angolo $2\\alpha - \\phi$. Per capire perché, osserviamo che la retta $r$ è la <strong>bisettrice</strong> dell'angolo formato dal vettore originale $\\vec{OX}$ e dal suo riflesso $\\vec{OY}$. Se denotiamo con $\\theta$ l'angolo di $\\vec{OY}$, la condizione di bisettrice impone:</p>
<p>$$\\alpha = \\frac{\\phi + \\theta}{2}$$</p>
<p>da cui ricaviamo $\\theta = 2\\alpha - \\phi$. Geometricamente, l'angolo tra $\\vec{OX}$ e la retta $r$ è $\\phi - \\alpha$, e il riflesso si trova "dall'altra parte" della retta $r$, alla stessa distanza angolare ma in verso opposto, cioè all'angolo $\\alpha - (\\phi - \\alpha) = 2\\alpha - \\phi$.</p>`
                },
                {
                    subtitle: "Derivazione della matrice di riflessione",
                    content: `<p>Le coordinate di $Y$ sono (ricordando che $L\\cos\\phi = x_1$ e $L\\sin\\phi = x_2$):</p>
<p>$$y_1 = L \\cos(2\\alpha - \\phi) = L(\\cos(2\\alpha)\\cos\\phi + \\sin(2\\alpha)\\sin\\phi) = x_1 \\cos(2\\alpha) + x_2 \\sin(2\\alpha)$$</p>
<p>$$y_2 = L \\sin(2\\alpha - \\phi) = L(\\sin(2\\alpha)\\cos\\phi - \\cos(2\\alpha)\\sin\\phi) = x_1 \\sin(2\\alpha) - x_2 \\cos(2\\alpha)$$</p>
<p>In forma matriciale:</p>
<p>$$\\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} \\cos(2\\alpha) & \\sin(2\\alpha) \\\\ \\sin(2\\alpha) & -\\cos(2\\alpha) \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}$$</p>
<p>Anche la riflessione è un'applicazione lineare.</p>`
                },
                {
                    subtitle: "Proprietà e esempio",
                    content: `<p>La matrice di riflessione $S_\\alpha$ è <strong>simmetrica</strong>. Il suo determinante è:</p>
<p>$$\\det(S_\\alpha) = -\\cos^2(2\\alpha) - \\sin^2(2\\alpha) = -(\\cos^2(2\\alpha) + \\sin^2(2\\alpha)) = -1$$</p>
<p>Un determinante pari a $-1$ significa che la trasformazione <strong>inverte l'orientazione</strong> del piano.</p>
<p><strong>Esempio — Riflessione rispetto alla bisettrice del primo quadrante:</strong> La retta è $y = x$, che forma un angolo $\\alpha = \\frac{\\pi}{4}$ con l'asse x. Quindi $2\\alpha = \\frac{\\pi}{2}$:</p>
<p>$$S_{\\pi/4} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$</p>
<p>L'espressione esplicita è $f(x_1, x_2) = (x_2, x_1)$, che <strong>scambia semplicemente le coordinate</strong>, come ci si aspetta.</p>`
                }
            ],
            formulas: [
                { label: "Matrice di riflessione", latex: "S_\\alpha = \\begin{pmatrix} \\cos(2\\alpha) & \\sin(2\\alpha) \\\\ \\sin(2\\alpha) & -\\cos(2\\alpha) \\end{pmatrix}" },
                { label: "Determinante riflessione", latex: "\\det(S_\\alpha) = -1" }
            ]
        },
        {
            id: "s23-proiezioni",
            type: "section",
            title: "Proiezioni Ortogonali nel Piano",
            icon: "📐",
            content: `<p>Consideriamo la <strong>proiezione ortogonale</strong> di un vettore $\\vec{OX}$ su una retta $r$ passante per l'origine. L'immagine di $\\vec{OX}$ è il vettore $\\vec{OH}$, dove $H$ è la proiezione ortogonale del punto $X$ sulla retta $r$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 3 — Proiezione ortogonale su una retta</strong></p>
  <p><em>Dall'origine O partono: $\\vec{OX}$ (blu) con angolo $\\phi$, e $\\vec{OH}$ (rosso) sulla retta tratteggiata $r$ con angolo $\\alpha$. Il segmento tratteggiato da $X$ a $H$ è perpendicolare a $r$ (angolo retto indicato). Il versore $\\vec{u}$ è indicato sulla retta $r$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Giustificazione della lunghezza della proiezione",
                    content: `<p>Il vettore $\\vec{OH}$ è la proiezione di $\\vec{OX}$ sul versore $\\vec{u} = (\\cos\\alpha, \\sin\\alpha)$ della retta $r$. La sua lunghezza è data dal prodotto scalare tra $\\vec{OX}$ e $\\vec{u}$:</p>
<p>$$|\\vec{OH}| = \\vec{OX} \\cdot \\vec{u} = L\\cos\\phi \\cdot \\cos\\alpha + L\\sin\\phi \\cdot \\sin\\alpha = L\\cos(\\phi - \\alpha)$$</p>
<p>dove abbiamo usato la formula di addizione del coseno. Il vettore $\\vec{OH}$ si ottiene poi moltiplicando questa lunghezza per il versore $\\vec{u}$ della retta $r$.</p>`
                },
                {
                    subtitle: "Derivazione della matrice di proiezione",
                    content: `<p>Le coordinate di $H$ sono (ricordando che $L\\cos\\phi = x_1$ e $L\\sin\\phi = x_2$, come fatto per la rotazione):</p>
<p>$$y_1 = (L \\cos(\\phi - \\alpha)) \\cos\\alpha = L(\\cos\\phi\\cos\\alpha + \\sin\\phi\\sin\\alpha)\\cos\\alpha = x_1 \\cos^2\\alpha + x_2 \\sin\\alpha\\cos\\alpha$$</p>
<p>$$y_2 = (L \\cos(\\phi - \\alpha)) \\sin\\alpha = L(\\cos\\phi\\cos\\alpha + \\sin\\phi\\sin\\alpha)\\sin\\alpha = x_1 \\sin\\alpha\\cos\\alpha + x_2 \\sin^2\\alpha$$</p>
<p>In forma matriciale:</p>
<p>$$\\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} \\cos^2\\alpha & \\sin\\alpha\\cos\\alpha \\\\ \\sin\\alpha\\cos\\alpha & \\sin^2\\alpha \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Proprietà della matrice di proiezione",
                    content: `<p>La matrice di proiezione $P_\\alpha$ è <strong>simmetrica</strong>. Il suo determinante è:</p>
<p>$$\\det(P_\\alpha) = (\\cos^2\\alpha)(\\sin^2\\alpha) - (\\sin\\alpha\\cos\\alpha)^2 = 0$$</p>
<p>Il determinante nullo significa che la proiezione <strong>non è iniettiva</strong>: vettori diversi possono avere la stessa proiezione sulla retta $r$. In particolare, tutti i vettori perpendicolari a $r$ vengono mandati nel vettore nullo. Questo si collega al concetto di <strong>nucleo non banale</strong> che studieremo nella prossima sezione: il nucleo della proiezione è l'intera retta perpendicolare a $r$ passante per l'origine.</p>`
                },
                {
                    subtitle: "Esempio: proiezione sull'asse x",
                    content: `<p>Per $\\alpha = 0$ (proiezione sull'asse $x$), abbiamo $\\cos 0 = 1$ e $\\sin 0 = 0$:</p>
<p>$$P_0 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$$</p>
<p>L'espressione esplicita è $f(x_1, x_2) = (x_1, 0)$: la proiezione "schiaccia" ogni vettore sull'asse $x$, annullando la componente verticale.</p>
<p><strong>Verifica:</strong> il vettore $(0, 1)$ (perpendicolare all'asse $x$) viene mappato in $(0, 0)$, confermando che appartiene al nucleo. Il vettore $(3, 5)$ viene mappato in $(3, 0)$.</p>`
                }
            ],
            formulas: [
                { label: "Matrice di proiezione ortogonale", latex: "P_\\alpha = \\begin{pmatrix} \\cos^2\\alpha & \\sin\\alpha\\cos\\alpha \\\\ \\sin\\alpha\\cos\\alpha & \\sin^2\\alpha \\end{pmatrix}" },
                { label: "Determinante proiezione", latex: "\\det(P_\\alpha) = 0" }
            ]
        },
        {
            id: "s23-confronto-trasformazioni",
            type: "section",
            title: "Confronto tra le Trasformazioni Geometriche",
            icon: "⚖️",
            content: `<p>Riassumiamo le proprietà delle tre trasformazioni geometriche studiate.</p>`,
            table_compare: {
                headers: ["Proprietà", "Rotazione $R_\\alpha$", "Riflessione $S_\\alpha$", "Proiezione $P_\\alpha$"],
                rows: [
                    ["Determinante", "$1$", "$-1$", "$0$"],
                    ["Orientazione", "Preservata", "Invertita", "—"],
                    ["Iniettività", "Sì", "Sì", "No"],
                    ["Matrice simmetrica", "No (in generale)", "Sì", "Sì"],
                    ["Nucleo", "$\\{\\vec{0}\\}$", "$\\{\\vec{0}\\}$", "Retta $\\perp r$"]
                ]
            }
        },
        {
            id: "s23-nucleo-immagine-def",
            type: "section",
            title: "Nucleo e Immagine: Definizioni",
            icon: "📦",
            content: `<p>Ad ogni applicazione lineare $F: V \\to V'$ possiamo associare due sottospazi fondamentali che ne descrivono la struttura: il <strong>nucleo</strong> e l'<strong>immagine</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Nucleo di un'applicazione lineare",
                    content: `<p>Si definisce <strong>nucleo</strong> di $F$, e si denota con $\\ker(F)$, l'insieme di tutti i vettori di $V$ che hanno come immagine il vettore nullo di $V'$:</p>
<p>$$\\ker(F) := \\{ \\vec{u} \\in V \\mid F(\\vec{u}) = \\vec{0}_{V'} \\}$$</p>
<p>Il nucleo è un sottoinsieme del <strong>dominio</strong> $V$.</p>`
                },
                {
                    subtitle: "Immagine di un'applicazione lineare",
                    content: `<p>Si definisce <strong>immagine</strong> di $F$, e si denota con $\\text{Im}(F)$, l'insieme di tutti i vettori di $V'$ che sono immagine di almeno un vettore di $V$:</p>
<p>$$\\text{Im}(F) := \\{ \\vec{u}' \\in V' \\mid \\exists\\, \\vec{u} \\in V \\text{ tale che } F(\\vec{u}) = \\vec{u}' \\}$$</p>
<p>L'immagine è un sottoinsieme del <strong>codominio</strong> $V'$.</p>`
                }
            ],
            formulas: [
                { label: "Nucleo", latex: "\\ker(F) = \\{ \\vec{u} \\in V \\mid F(\\vec{u}) = \\vec{0}_{V'} \\}" },
                { label: "Immagine", latex: "\\text{Im}(F) = \\{ \\vec{u}' \\in V' \\mid \\exists\\, \\vec{u} \\in V,\\; F(\\vec{u}) = \\vec{u}' \\}" }
            ]
        },
        {
            id: "s23-nucleo-proprieta",
            type: "section",
            title: "Proprietà del Nucleo",
            icon: "🔬",
            content: `<p>Il nucleo non è un insieme qualsiasi: ha una struttura algebrica molto ricca.</p>`,
            subsections: [
                {
                    subtitle: "Il nucleo è un sottospazio",
                    content: `<p><strong>Proposizione.</strong> Il nucleo $\\ker(F)$ di un'applicazione lineare $F: V \\to V'$ è un <strong>sottospazio vettoriale</strong> di $V$.</p>
<p><strong>Dimostrazione.</strong> Verifichiamo le tre proprietà dei sottospazi:</p>
<p><strong>1.</strong> Il vettore nullo $\\vec{0}_V$ appartiene a $\\ker(F)$, poiché per ogni applicazione lineare $F(\\vec{0}_V) = \\vec{0}_{V'}$.</p>
<p><strong>2.</strong> Siano $\\vec{u}, \\vec{v} \\in \\ker(F)$. Allora $F(\\vec{u}) = \\vec{0}_{V'}$ e $F(\\vec{v}) = \\vec{0}_{V'}$. Per la linearità:</p>
<p>$$F(\\vec{u} + \\vec{v}) = F(\\vec{u}) + F(\\vec{v}) = \\vec{0}_{V'} + \\vec{0}_{V'} = \\vec{0}_{V'}$$</p>
<p>Quindi anche $\\vec{u} + \\vec{v} \\in \\ker(F)$.</p>
<p><strong>3.</strong> Siano $\\vec{u} \\in \\ker(F)$ e $c \\in \\mathbb{R}$. Per la linearità:</p>
<p>$$F(c\\vec{u}) = c\\,F(\\vec{u}) = c \\cdot \\vec{0}_{V'} = \\vec{0}_{V'}$$</p>
<p>Quindi anche $c\\vec{u} \\in \\ker(F)$. $\\square$</p>`
                },
                {
                    subtitle: "Criterio di iniettività",
                    content: `<p><strong>Proposizione (Criterio di iniettività).</strong> Un'applicazione lineare $F: V \\to V'$ è iniettiva se e solo se $\\ker(F) = \\{\\vec{0}_V\\}$.</p>
<p><strong>Dimostrazione ($\\Rightarrow$).</strong> Supponiamo che $F$ sia iniettiva. Sia $\\vec{u} \\in \\ker(F)$. Per definizione, $F(\\vec{u}) = \\vec{0}_{V'}$. Sappiamo anche che $F(\\vec{0}_V) = \\vec{0}_{V'}$. Poiché $F$ è iniettiva e $F(\\vec{u}) = F(\\vec{0}_V)$, deve essere $\\vec{u} = \\vec{0}_V$.</p>
<p><strong>Dimostrazione ($\\Leftarrow$).</strong> Supponiamo che $\\ker(F) = \\{\\vec{0}_V\\}$. Siano $\\vec{u}, \\vec{v} \\in V$ tali che $F(\\vec{u}) = F(\\vec{v})$. Allora:</p>
<p>$$F(\\vec{u} - \\vec{v}) = F(\\vec{u}) - F(\\vec{v}) = \\vec{0}_{V'}$$</p>
<p>Quindi $\\vec{u} - \\vec{v} \\in \\ker(F) = \\{\\vec{0}_V\\}$, da cui $\\vec{u} = \\vec{v}$. Questo dimostra che $F$ è iniettiva. $\\square$</p>`
                },
                {
                    subtitle: "Conservazione dell'indipendenza lineare",
                    content: `<p><strong>Proposizione.</strong> Se un'applicazione lineare $F$ è iniettiva, allora trasforma insiemi di vettori linearmente indipendenti in insiemi di vettori linearmente indipendenti.</p>
<p><strong>Dimostrazione.</strong> Sia $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$ un insieme di vettori linearmente indipendenti in $V$. Consideriamo:</p>
<p>$$a_1 F(\\vec{u}_1) + \\dots + a_h F(\\vec{u}_h) = \\vec{0}_{V'}$$</p>
<p>Per la linearità di $F$:</p>
<p>$$F(a_1 \\vec{u}_1 + \\dots + a_h \\vec{u}_h) = \\vec{0}_{V'}$$</p>
<p>Questo implica che $a_1 \\vec{u}_1 + \\dots + a_h \\vec{u}_h \\in \\ker(F)$. Poiché $F$ è iniettiva, $\\ker(F) = \\{\\vec{0}_V\\}$, quindi:</p>
<p>$$a_1 \\vec{u}_1 + \\dots + a_h \\vec{u}_h = \\vec{0}_V$$</p>
<p>Ma i vettori sono linearmente indipendenti, quindi tutti gli $a_i = 0$. Ciò dimostra che anche $\\{F(\\vec{u}_1), \\dots, F(\\vec{u}_h)\\}$ è linearmente indipendente. $\\square$</p>`
                }
            ],
            extra_content: `<p><strong>Osservazione importante.</strong> Se $F = L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$ è l'applicazione associata a una matrice $A$, il nucleo $\\ker(L_A)$ coincide con lo <strong>spazio delle soluzioni del sistema lineare omogeneo</strong> $A\\vec{x} = \\vec{0}$.</p>`,
            formulas: [
                { label: "Criterio di iniettività", latex: "F \\text{ iniettiva} \\iff \\ker(F) = \\{\\vec{0}_V\\}" }
            ]
        },
        {
            id: "s23-immagine-proprieta",
            type: "section",
            title: "Proprietà dell'Immagine",
            icon: "🎯",
            content: `<p>Anche l'immagine gode di una struttura algebrica fondamentale.</p>`,
            subsections: [
                {
                    subtitle: "L'immagine è un sottospazio",
                    content: `<p><strong>Proposizione.</strong> L'immagine $\\text{Im}(F)$ di un'applicazione lineare $F: V \\to V'$ è un <strong>sottospazio vettoriale</strong> di $V'$.</p>
<p><strong>Dimostrazione.</strong></p>
<p><strong>1.</strong> $\\vec{0}_{V'} \\in \\text{Im}(F)$ perché $F(\\vec{0}_V) = \\vec{0}_{V'}$.</p>
<p><strong>2.</strong> Siano $\\vec{u}', \\vec{v}' \\in \\text{Im}(F)$. Esistono $\\vec{u}, \\vec{v} \\in V$ tali che $F(\\vec{u}) = \\vec{u}'$ e $F(\\vec{v}) = \\vec{v}'$. Allora:</p>
<p>$$\\vec{u}' + \\vec{v}' = F(\\vec{u}) + F(\\vec{v}) = F(\\vec{u} + \\vec{v}) \\in \\text{Im}(F)$$</p>
<p><strong>3.</strong> Sia $\\vec{u}' \\in \\text{Im}(F)$ e $c \\in \\mathbb{R}$. Esiste $\\vec{u} \\in V$ con $F(\\vec{u}) = \\vec{u}'$. Allora:</p>
<p>$$c\\vec{u}' = cF(\\vec{u}) = F(c\\vec{u}) \\in \\text{Im}(F) \\quad \\square$$</p>`
                },
                {
                    subtitle: "Criterio di suriettività",
                    content: `<p><strong>Proposizione (Criterio di suriettività).</strong> Un'applicazione lineare $F: V \\to V'$ è suriettiva se e solo se $\\text{Im}(F) = V'$.</p>
<p>Questa è la <strong>definizione stessa di suriettività</strong>, ma è importante enunciarla formalmente per simmetria con il criterio di iniettività: mentre l'iniettività si verifica controllando il nucleo, la suriettività si verifica controllando l'immagine.</p>`
                },
                {
                    subtitle: "Generatori dell'immagine",
                    content: `<p><strong>Proposizione.</strong> Se $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$ genera lo spazio $V$, allora $\\{F(\\vec{u}_1), \\dots, F(\\vec{u}_h)\\}$ genera lo spazio $\\text{Im}(F)$.</p>
<p><strong>Dimostrazione.</strong> Sia $\\vec{u}'$ un qualsiasi vettore in $\\text{Im}(F)$. Per definizione, esiste $\\vec{u} \\in V$ tale che $F(\\vec{u}) = \\vec{u}'$. Poiché $\\{\\vec{u}_i\\}$ generano $V$, possiamo scrivere $\\vec{u} = a_1 \\vec{u}_1 + \\dots + a_h \\vec{u}_h$. Applicando $F$:</p>
<p>$$\\vec{u}' = F(\\vec{u}) = F(a_1 \\vec{u}_1 + \\dots + a_h \\vec{u}_h) = a_1 F(\\vec{u}_1) + \\dots + a_h F(\\vec{u}_h)$$</p>
<p>Ogni vettore dell'immagine è combinazione lineare dei $\\{F(\\vec{u}_i)\\}$, che quindi generano $\\text{Im}(F)$. $\\square$</p>`
                }
            ],
            extra_content: `<p><strong>Osservazione importante.</strong> Se $F = L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$, l'immagine $\\text{Im}(L_A)$ coincide con lo <strong>spazio generato dalle colonne</strong> della matrice $A$ (spazio delle colonne).</p>`,
            formulas: [
                { label: "Criterio di suriettività", latex: "F \\text{ suriettiva} \\iff \\text{Im}(F) = V'" }
            ]
        },
        {
            id: "s23-esempio-numerico",
            type: "section",
            title: "Esempio Numerico: Calcolo di Nucleo e Immagine",
            icon: "🧮",
            content: `<p>Vediamo un esempio concreto che illustra tutti i concetti introdotti.</p>
<p>Sia $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 3 & 5 \\end{pmatrix}$ e consideriamo l'applicazione lineare $L_A: \\mathbb{R}^3 \\to \\mathbb{R}^3$ definita da $L_A(\\vec{x}) = A\\vec{x}$.</p>`,
            subsections: [
                {
                    subtitle: "Calcolo del nucleo",
                    content: `<p>Dobbiamo risolvere il sistema omogeneo $A\\vec{x} = \\vec{0}$. Riduciamo la matrice a scalini:</p>
<p>$$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 3 & 5 \\end{pmatrix} \\overset{R_3 \\leftarrow R_3 - R_1}{\\longrightarrow} \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & 1 & 2 \\end{pmatrix} \\overset{R_3 \\leftarrow R_3 - R_2}{\\longrightarrow} \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>I pivot sono nelle colonne 1 e 2; la variabile $x_3$ è libera. Ponendo $x_3 = t$:</p>
<p>Dalla seconda riga: $x_2 + 2t = 0$, quindi $x_2 = -2t$.</p>
<p>Dalla prima riga: $x_1 + 2(-2t) + 3t = x_1 - 4t + 3t = x_1 - t = 0$, quindi $x_1 = t$.</p>
<p>$$\\ker(L_A) = \\left\\{ t \\begin{pmatrix} 1 \\\\ -2 \\\\ 1 \\end{pmatrix} : t \\in \\mathbb{R} \\right\\} = \\text{Span}\\left( \\begin{pmatrix} 1 \\\\ -2 \\\\ 1 \\end{pmatrix} \\right)$$</p>
<p>Il nucleo ha <strong>dimensione 1</strong> (nullità $= 1$).</p>`
                },
                {
                    subtitle: "Calcolo dell'immagine",
                    content: `<p>L'immagine di $L_A$ è lo spazio generato dalle colonne di $A$. Dalla riduzione a scalini, i pivot si trovano nella prima e nella seconda colonna. Quindi le <strong>colonne pivot della matrice originale</strong> formano una base dell'immagine:</p>
<p>$$\\text{Im}(L_A) = \\text{Span}\\left( \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} \\right)$$</p>
<p>L'immagine ha <strong>dimensione 2</strong> (rango $= 2$).</p>`
                },
                {
                    subtitle: "Verifica del Teorema della Dimensione",
                    content: `<p>$$\\dim(\\mathbb{R}^3) = 3 = \\underbrace{\\dim(\\ker(L_A))}_{=1} + \\underbrace{\\dim(\\text{Im}(L_A))}_{=2} \\quad \\checkmark$$</p>`
                }
            ]
        },
        {
            id: "s23-teorema-dimensione",
            type: "section",
            title: "Il Teorema della Dimensione (Rank-Nullity)",
            icon: "⭐",
            content: `<p>Uno dei risultati più importanti riguardanti nucleo e immagine è il seguente teorema, anche noto come <strong>teorema del rango-nullità</strong>, dove la "nullità" è la dimensione del nucleo e il "rango" è la dimensione dell'immagine.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato",
                    content: `<p><strong>Teorema della Dimensione.</strong> Sia $F: V \\to V'$ un'applicazione lineare, con $V$ spazio vettoriale di dimensione finita. Allora:</p>
<p>$$\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))$$</p>`
                },
                {
                    subtitle: "Dimostrazione — Passo 1: estensione della base del nucleo",
                    content: `<p>Sia $k = \\dim(\\ker(F))$ e sia $n = \\dim(V)$. Scegliamo una base $\\{\\vec{u}_1, \\dots, \\vec{u}_k\\}$ del nucleo $\\ker(F)$.</p>
<p>Poiché $\\ker(F)$ è un sottospazio di $V$, possiamo estendere questa base a una base di $V$. Esistono vettori $\\vec{v}_1, \\dots, \\vec{v}_r \\in V$ (con $r = n - k$) tali che:</p>
<p>$$\\mathcal{B} = \\{\\vec{u}_1, \\dots, \\vec{u}_k, \\vec{v}_1, \\dots, \\vec{v}_r\\}$$</p>
<p>è una base di $V$.</p>`
                },
                {
                    subtitle: "Dimostrazione — Passo 2: i vettori F(v_j) generano Im(F)",
                    content: `<p>Per la Proposizione sui generatori dell'immagine, le immagini dei vettori di $\\mathcal{B}$ generano $\\text{Im}(F)$. Ma $F(\\vec{u}_i) = \\vec{0}_{V'}$ per ogni $i = 1, \\dots, k$ (poiché $\\vec{u}_i \\in \\ker(F)$). Quindi ogni vettore dell'immagine si scrive come combinazione lineare dei soli $F(\\vec{v}_1), \\dots, F(\\vec{v}_r)$, che pertanto <strong>generano</strong> $\\text{Im}(F)$.</p>`
                },
                {
                    subtitle: "Dimostrazione — Passo 3: indipendenza lineare delle immagini",
                    content: `<p>Supponiamo che:</p>
<p>$$c_1 F(\\vec{v}_1) + \\dots + c_r F(\\vec{v}_r) = \\vec{0}_{V'}$$</p>
<p>Per la linearità: $F(c_1 \\vec{v}_1 + \\dots + c_r \\vec{v}_r) = \\vec{0}_{V'}$.</p>
<p>Quindi $\\vec{w} = c_1 \\vec{v}_1 + \\dots + c_r \\vec{v}_r \\in \\ker(F)$. Essendo $\\{\\vec{u}_1, \\dots, \\vec{u}_k\\}$ base del nucleo, esistono $b_1, \\dots, b_k$ tali che:</p>
<p>$$c_1 \\vec{v}_1 + \\dots + c_r \\vec{v}_r = b_1 \\vec{u}_1 + \\dots + b_k \\vec{u}_k$$</p>
<p>Riscrivendo:</p>
<p>$$b_1 \\vec{u}_1 + \\dots + b_k \\vec{u}_k - c_1 \\vec{v}_1 - \\dots - c_r \\vec{v}_r = \\vec{0}_V$$</p>
<p>Ma $\\{\\vec{u}_1, \\dots, \\vec{u}_k, \\vec{v}_1, \\dots, \\vec{v}_r\\}$ è una <strong>base</strong> di $V$, quindi sono linearmente indipendenti. Ne segue che tutti i coefficienti sono nulli:</p>
<p>$$b_1 = \\dots = b_k = 0 \\quad \\text{e} \\quad c_1 = \\dots = c_r = 0$$</p>
<p>In particolare $c_1 = \\dots = c_r = 0$, e quindi $\\{F(\\vec{v}_1), \\dots, F(\\vec{v}_r)\\}$ sono <strong>linearmente indipendenti</strong>.</p>`
                },
                {
                    subtitle: "Conclusione",
                    content: `<p>Abbiamo mostrato che $\\{F(\\vec{v}_1), \\dots, F(\\vec{v}_r)\\}$ è una base di $\\text{Im}(F)$, quindi $\\dim(\\text{Im}(F)) = r$. Poiché $r = n - k$:</p>
<p>$$\\dim(V) = n = k + r = \\dim(\\ker(F)) + \\dim(\\text{Im}(F)) \\quad \\square$$</p>`
                }
            ],
            formulas: [
                { label: "Teorema della Dimensione", latex: "\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))" },
                { label: "Nullità + Rango = Dimensione", latex: "\\text{nullità}(F) + \\text{rango}(F) = \\dim(V)" }
            ]
        },
        {
            id: "s23-corollario-rango",
            type: "section",
            title: "Corollario: Rango e Dimensione dell'Immagine",
            icon: "📊",
            content: `<p>Il Teorema della Dimensione ha un'importante conseguenza quando si lavora con le matrici.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato del corollario",
                    content: `<p><strong>Corollario.</strong> Sia $A$ una qualsiasi matrice rappresentativa dell'applicazione lineare $F$. Allora:</p>
<p>$$\\dim(\\text{Im}(F)) = \\text{rank}(A)$$</p>
<p>$$\\dim(\\ker(F)) = \\dim(V) - \\text{rank}(A)$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Mostriamo perché $\\dim(\\text{Im}(F)) = \\text{rank}(A)$ nel caso $F = L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$.</p>
<p>Siano $\\vec{a}_1, \\dots, \\vec{a}_n$ le colonne della matrice $A$. Per ogni vettore $\\vec{x} = (x_1, \\dots, x_n)^T \\in \\mathbb{R}^n$:</p>
<p>$$L_A(\\vec{x}) = A\\vec{x} = x_1 \\vec{a}_1 + x_2 \\vec{a}_2 + \\dots + x_n \\vec{a}_n$$</p>
<p>Questo mostra che l'immagine di $L_A$ è l'insieme di tutte le combinazioni lineari delle colonne di $A$:</p>
<p>$$\\text{Im}(L_A) = \\text{Span}(\\vec{a}_1, \\vec{a}_2, \\dots, \\vec{a}_n)$$</p>
<p>La dimensione di questo sottospazio è, per definizione, il <strong>rango</strong> della matrice $A$. La seconda formula segue immediatamente dal Teorema della Dimensione. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Dim. immagine = rango", latex: "\\dim(\\text{Im}(F)) = \\text{rank}(A)" },
                { label: "Dim. nucleo da rango", latex: "\\dim(\\ker(F)) = \\dim(V) - \\text{rank}(A)" }
            ]
        },
        {
            id: "s23-rango-indipendente-base",
            type: "note_box",
            title: "Il Rango non Dipende dalla Scelta della Base",
            icon: "💡",
            content: `<p>Il rango di una matrice rappresentativa <strong>non dipende dalla scelta delle basi</strong>. Questo segue dal fatto che cambiare base nello spazio di partenza o di arrivo corrisponde a moltiplicare la matrice $A$ per matrici invertibili (a sinistra e a destra), e la moltiplicazione per matrici invertibili non cambia il rango.</p>
<p>Più precisamente, se $A$ e $A'$ sono due matrici rappresentative della stessa applicazione lineare $F$ rispetto a basi diverse, allora $A' = P^{-1}AP$ per opportune matrici invertibili, e si può dimostrare che <strong>matrici simili hanno lo stesso rango</strong> (questo sarà trattato rigorosamente nelle prossime lezioni).</p>
<p>Di conseguenza, il rango della matrice è una <strong>proprietà intrinseca dell'applicazione lineare</strong> (la dimensione della sua immagine), e non un artefatto della rappresentazione matriciale scelta.</p>`
        },
        {
            id: "s23-alert-trappole",
            type: "alert_box",
            title: "Trappole Comuni su Nucleo e Immagine",
            icon: "⚠️",
            content: `<p><strong>Attenzione a non confondere i due sottospazi:</strong></p>
<p>• Il <strong>nucleo</strong> $\\ker(F)$ vive nel <strong>dominio</strong> $V$ — è formato dai vettori che "vengono uccisi" da $F$.</p>
<p>• L'<strong>immagine</strong> $\\text{Im}(F)$ vive nel <strong>codominio</strong> $V'$ — è l'insieme dei vettori "raggiungibili" tramite $F$.</p>
<p><strong>Un errore frequente all'esame:</strong> confondere "base dell'immagine" con "colonne della matrice ridotta a scalini". La base dell'immagine si trova prendendo le <strong>colonne della matrice originale</strong> corrispondenti alle posizioni dei pivot nella forma ridotta, <strong>non</strong> le colonne della matrice ridotta!</p>
<p><strong>Altro tranello:</strong> il Teorema della Dimensione vale solo se $V$ ha <strong>dimensione finita</strong>. Non è applicabile a spazi vettoriali di dimensione infinita senza ulteriori ipotesi.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è il nucleo di un'applicazione lineare?",
            back: "Il nucleo di $F: V \\to V'$ è l'insieme $\\ker(F) = \\{ \\vec{u} \\in V \\mid F(\\vec{u}) = \\vec{0}_{V'} \\}$, ovvero l'insieme di tutti i vettori del dominio che vengono mandati nel vettore nullo del codominio. È un sottospazio di $V$."
        },
        {
            type: "definizione",
            front: "Che cos'è l'immagine di un'applicazione lineare?",
            back: "L'immagine di $F: V \\to V'$ è $\\text{Im}(F) = \\{ \\vec{u}' \\in V' \\mid \\exists\\, \\vec{u} \\in V,\\; F(\\vec{u}) = \\vec{u}' \\}$, ovvero l'insieme di tutti i vettori del codominio che sono effettivamente raggiunti da $F$. È un sottospazio di $V'$."
        },
        {
            type: "domanda",
            front: "Quando un'applicazione lineare è iniettiva? Come si verifica in pratica?",
            back: "$F$ è iniettiva se e solo se $\\ker(F) = \\{\\vec{0}\\}$. In pratica, per $L_A$, si risolve il sistema omogeneo $A\\vec{x} = \\vec{0}$: se l'unica soluzione è quella banale, $F$ è iniettiva."
        },
        {
            type: "formula",
            front: "Enuncia il Teorema della Dimensione (Rank-Nullity).",
            back: "Sia $F: V \\to V'$ lineare con $V$ di dimensione finita. Allora: $$\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))$$ Equivalentemente: nullità + rango = dimensione del dominio."
        },
        {
            type: "dimostrazione",
            front: "Descrivi l'idea della dimostrazione del Teorema della Dimensione.",
            back: "Si parte da una base $\\{\\vec{u}_1, \\dots, \\vec{u}_k\\}$ del nucleo e la si estende a una base $\\{\\vec{u}_1, \\dots, \\vec{u}_k, \\vec{v}_1, \\dots, \\vec{v}_r\\}$ di $V$ (con $r = n - k$). Si dimostra che $\\{F(\\vec{v}_1), \\dots, F(\\vec{v}_r)\\}$ è base di $\\text{Im}(F)$: genera perché le immagini degli $\\vec{u}_i$ sono nulle, ed è indipendente perché una relazione lineare tra i $F(\\vec{v}_j)$ implicherebbe una dipendenza tra i vettori della base di $V$."
        },
        {
            type: "formula",
            front: "Scrivi la matrice di rotazione nel piano di un angolo α.",
            back: "$$R_\\alpha = \\begin{pmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{pmatrix}$$ Ha determinante $\\det(R_\\alpha) = 1$ (preserva l'orientazione)."
        },
        {
            type: "formula",
            front: "Scrivi la matrice di riflessione rispetto a una retta passante per l'origine con angolo α.",
            back: "$$S_\\alpha = \\begin{pmatrix} \\cos(2\\alpha) & \\sin(2\\alpha) \\\\ \\sin(2\\alpha) & -\\cos(2\\alpha) \\end{pmatrix}$$ È simmetrica e ha determinante $\\det(S_\\alpha) = -1$ (inverte l'orientazione)."
        },
        {
            type: "tranello",
            front: "Come si trova una base dell'immagine di L_A? Qual è l'errore più comune?",
            back: "Si riduce $A$ a scalini e si identificano le colonne pivot. Poi si prendono le colonne corrispondenti della matrice **originale** $A$, non della matrice ridotta! L'errore comune è prendere le colonne della matrice ridotta, che generano lo stesso spazio ma non sono le colonne di $A$."
        },
        {
            type: "domanda",
            front: "Se F è un'applicazione lineare con ker(F) = {0}, cosa puoi dire dei vettori linearmente indipendenti?",
            back: "Se $F$ è iniettiva (cioè $\\ker(F) = \\{\\vec{0}\\}$), allora $F$ trasforma insiemi di vettori linearmente indipendenti in insiemi di vettori linearmente indipendenti. In altre parole, l'iniettività preserva l'indipendenza lineare."
        },
        {
            type: "domanda",
            front: "Perché il determinante della matrice di proiezione ortogonale è zero? Cosa implica?",
            back: "$\\det(P_\\alpha) = \\cos^2\\alpha \\sin^2\\alpha - (\\sin\\alpha \\cos\\alpha)^2 = 0$. Questo implica che la proiezione **non è iniettiva**: il nucleo è non banale (è l'intera retta perpendicolare alla retta di proiezione). Tutti i vettori perpendicolari a $r$ vengono mandati in $\\vec{0}$."
        },
        {
            type: "domanda",
            front: "Il rango di una matrice rappresentativa dipende dalla scelta della base?",
            back: "No. Cambiare base corrisponde a moltiplicare la matrice per matrici invertibili, e il rango è invariante per moltiplicazione per matrici invertibili. Il rango è una proprietà intrinseca dell'applicazione lineare (è la dimensione dell'immagine)."
        }
    ]
};

