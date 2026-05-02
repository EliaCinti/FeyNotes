const LESSON = {
    id: "L24", date: "Lezione 24 — 30 Apr 2026",
    title: "Nucleo e Immagine di Applicazioni Lineari",
    abstract: "Metodi pratici per calcolare basi di nucleo e immagine di un'applicazione lineare tramite coordinate e matrici rappresentative. Teorema della dimensione (del rango). Isomorfismi tra spazi vettoriali.",

    sections: [
        {
            id: "s24-nucleo-calcolo",
            type: "section",
            title: "Calcolo del Nucleo di un'Applicazione Lineare",
            icon: "🎯",
            content: `<p>Nella lezione precedente abbiamo introdotto il concetto di nucleo di un'applicazione lineare e dimostrato che è un sottospazio. Richiamiamo la definizione e sviluppiamo un <strong>metodo sistematico</strong> per calcolarne una base.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Nucleo (richiamo)",
                    content: `<p>Sia $F: V \\to V'$ un'applicazione lineare tra spazi vettoriali. Il <strong>nucleo</strong> di $F$, denotato con $\\ker(F)$, è il sottoinsieme di $V$ definito come:</p>
<p>$$\\ker(F) = \\{ \\boldsymbol{v} \\in V \\mid F(\\boldsymbol{v}) = \\boldsymbol{0}_{V'} \\}$$</p>
<p>Abbiamo già visto che il nucleo è un <strong>sottospazio vettoriale</strong> di $V$. Il problema ora è: come trovare concretamente una base e la dimensione di $\\ker(F)$?</p>`
                },
                {
                    subtitle: "L'idea chiave: passaggio alle coordinate",
                    content: `<p>L'idea consiste nel <strong>tradurre il problema in un sistema lineare omogeneo</strong>. Fissiamo:</p>
<ul>
<li>Una base $B = \\{\\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_n\\}$ per $V$ (con $\\dim(V) = n$)</li>
<li>Una base $B' = \\{\\boldsymbol{b}'_1, \\dots, \\boldsymbol{b}'_m\\}$ per $V'$ (con $\\dim(V') = m$)</li>
</ul>
<p>Queste basi ci permettono di identificare $V$ con $\\mathbb{R}^n$ e $V'$ con $\\mathbb{R}^m$ tramite le <strong>applicazioni delle coordinate</strong>, che sono isomorfismi:</p>
<p>$$\\phi_B: V \\to \\mathbb{R}^n, \\quad \\boldsymbol{v} \\mapsto [\\boldsymbol{v}]_B$$</p>
<p>$$\\phi_{B'}: V' \\to \\mathbb{R}^m, \\quad \\boldsymbol{v}' \\mapsto [\\boldsymbol{v}']_{B'}$$</p>
<p>L'applicazione lineare $F$ è rappresentata dalla matrice $A = M_{B,B'}(F)$, una matrice $m \\times n$. Si ha la relazione fondamentale:</p>
<p>$$F = \\phi_{B'}^{-1} \\circ L_A \\circ \\phi_B$$</p>
<p>dove $L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$ è definita da $L_A(\\boldsymbol{x}) = A\\boldsymbol{x}$, e $\\phi_{B'}^{-1}$ è l'applicazione inversa che mappa un vettore di coordinate in $\\mathbb{R}^m$ nel corrispondente vettore in $V'$.</p>`
                },
                {
                    subtitle: "Il diagramma commutativo",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Diagramma commutativo del passaggio alle coordinate</strong></p>
  <p><em>Quadrato con $V$ in alto a sinistra, $V'$ in alto a destra, $\\mathbb{R}^n$ in basso a sinistra, $\\mathbb{R}^m$ in basso a destra. Freccia orizzontale in alto: $F$. Freccia verticale sinistra verso il basso: $\\phi_B$. Freccia verticale destra verso il basso: $\\phi_{B'}$, con accanto una freccia tratteggiata verso l'alto etichettata $\\phi_{B'}^{-1}$. Freccia orizzontale in basso: $L_A$.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Il diagramma si legge così: partendo da $\\boldsymbol{v} \\in V$, possiamo calcolare $F(\\boldsymbol{v})$ in <strong>due modi equivalenti</strong>:</p>
<ol>
<li><strong>Direttamente:</strong> applicando $F$ (freccia orizzontale in alto)</li>
<li><strong>Tramite coordinate:</strong> prima si scende a $\\mathbb{R}^n$ con $\\phi_B$, poi si va a destra con $L_A$ (moltiplicazione per matrice), infine si <strong>risale</strong> a $V'$ con $\\phi_{B'}^{-1}$ (l'inversa di $\\phi_{B'}$, che ricostruisce il vettore dalle coordinate)</li>
</ol>
<p>Questa equivalenza è il motivo per cui il <strong>calcolo del nucleo di $F$ si riduce allo studio del sistema lineare omogeneo</strong> $A\\boldsymbol{x} = \\boldsymbol{0}$.</p>`
                },
                {
                    subtitle: "Proposizione: Calcolo del nucleo tramite coordinate",
                    content: `<p>Sia $\\{\\boldsymbol{x}_1, \\dots, \\boldsymbol{x}_h\\}$ una base per il nucleo di $L_A$, ovvero per lo spazio delle soluzioni del sistema $A\\boldsymbol{x} = \\boldsymbol{0}$. Siano $\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h$ i vettori di $V$ le cui coordinate rispetto a $B$ sono rispettivamente $\\boldsymbol{x}_1, \\dots, \\boldsymbol{x}_h$:</p>
<p>$$[\\boldsymbol{u}_j]_B = \\boldsymbol{x}_j \\quad \\text{per } j=1, \\dots, h$$</p>
<p>Allora $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ è una <strong>base per $\\ker(F)$</strong>. Inoltre:</p>
<p>$$\\dim(\\ker(F)) = \\dim(\\ker(L_A)) = n - \\text{rk}(A)$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Dobbiamo dimostrare tre cose: (1) appartenenza al nucleo, (2) indipendenza lineare, (3) generazione.</p>
<p><strong>1. Appartenenza al nucleo.</strong> Calcoliamo le coordinate di $F(\\boldsymbol{u}_j)$ rispetto a $B'$:</p>
<p>$$[F(\\boldsymbol{u}_j)]_{B'} = A [\\boldsymbol{u}_j]_B = A \\boldsymbol{x}_j$$</p>
<p>Ma per ipotesi $\\boldsymbol{x}_j \\in \\ker(L_A)$, quindi $A\\boldsymbol{x}_j = \\boldsymbol{0}$. Di conseguenza $[F(\\boldsymbol{u}_j)]_{B'} = \\boldsymbol{0}$. Un vettore con coordinate nulle è necessariamente il vettore nullo, quindi $F(\\boldsymbol{u}_j) = \\boldsymbol{0}_{V'}$ e $\\boldsymbol{u}_j \\in \\ker(F)$.</p>
<p><strong>2. Indipendenza lineare.</strong> L'applicazione delle coordinate $\\phi_B: V \\to \\mathbb{R}^n$ è un isomorfismo, e un isomorfismo mappa insiemi linearmente indipendenti in insiemi linearmente indipendenti. Poiché $\\{\\boldsymbol{x}_1, \\dots, \\boldsymbol{x}_h\\}$ è una base per $\\ker(L_A)$ (e quindi i suoi vettori sono linearmente indipendenti in $\\mathbb{R}^n$), anche i corrispondenti $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ sono linearmente indipendenti in $V$.</p>
<p><strong>3. Generazione del nucleo.</strong> Sia $\\boldsymbol{u} \\in \\ker(F)$ un generico vettore del nucleo. Allora $F(\\boldsymbol{u}) = \\boldsymbol{0}_{V'}$. Passando alle coordinate:</p>
<p>$$A [\\boldsymbol{u}]_B = [F(\\boldsymbol{u})]_{B'} = [\\boldsymbol{0}_{V'}]_{B'} = \\boldsymbol{0}$$</p>
<p>Chiamiamo $\\boldsymbol{x} = [\\boldsymbol{u}]_B$. Allora $A\\boldsymbol{x} = \\boldsymbol{0}$, cioè $\\boldsymbol{x} \\in \\ker(L_A)$. Poiché $\\{\\boldsymbol{x}_1, \\dots, \\boldsymbol{x}_h\\}$ è una base per $\\ker(L_A)$, esistono scalari $a_1, \\dots, a_h$ tali che:</p>
<p>$$\\boldsymbol{x} = a_1 \\boldsymbol{x}_1 + \\dots + a_h \\boldsymbol{x}_h$$</p>
<p>Sostituendo le coordinate:</p>
<p>$$[\\boldsymbol{u}]_B = a_1 [\\boldsymbol{u}_1]_B + \\dots + a_h [\\boldsymbol{u}_h]_B = [a_1 \\boldsymbol{u}_1 + \\dots + a_h \\boldsymbol{u}_h]_B$$</p>
<p>Poiché $\\phi_B$ è biiettiva, se due vettori hanno le stesse coordinate devono coincidere:</p>
<p>$$\\boldsymbol{u} = a_1 \\boldsymbol{u}_1 + \\dots + a_h \\boldsymbol{u}_h$$</p>
<p>Questo dimostra che ogni vettore del nucleo è generato da $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Nucleo", latex: "\\ker(F) = \\{ \\boldsymbol{v} \\in V \\mid F(\\boldsymbol{v}) = \\boldsymbol{0}_{V'} \\}" },
                { label: "Relazione fondamentale", latex: "F = \\phi_{B'}^{-1} \\circ L_A \\circ \\phi_B" },
                { label: "Dimensione del nucleo", latex: "\\dim(\\ker(F)) = n - \\text{rk}(A)" }
            ]
        },
        {
            id: "s24-immagine",
            type: "section",
            title: "Calcolo dell'Immagine di un'Applicazione Lineare",
            icon: "🖼️",
            content: `<p>Dopo il nucleo, studiamo l'altro sottospazio fondamentale associato a un'applicazione lineare: l'<strong>immagine</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione di Immagine",
                    content: `<p>Sia $F: V \\to V'$ un'applicazione lineare. L'<strong>immagine</strong> di $F$, denotata con $\\text{Im}(F)$, è:</p>
<p>$$\\text{Im}(F) = \\{ \\boldsymbol{v}' \\in V' \\mid \\exists \\boldsymbol{v} \\in V \\text{ tale che } F(\\boldsymbol{v}) = \\boldsymbol{v}' \\}$$</p>
<p>In altre parole, l'immagine è l'insieme di tutti i vettori di $V'$ che vengono effettivamente "raggiunti" da $F$.</p>`
                },
                {
                    subtitle: "Proprietà 1: L'immagine è un sottospazio",
                    content: `<p>$\\text{Im}(F)$ è un <strong>sottospazio vettoriale</strong> di $V'$. La dimostrazione verifica le tre proprietà:</p>
<p><strong>Vettore nullo:</strong> Poiché $F$ è lineare, $F(\\boldsymbol{0}_V) = \\boldsymbol{0}_{V'}$, quindi $\\boldsymbol{0}_{V'} \\in \\text{Im}(F)$.</p>
<p><strong>Chiusura per somma:</strong> Se $\\boldsymbol{v}'_1 = F(\\boldsymbol{v}_1)$ e $\\boldsymbol{v}'_2 = F(\\boldsymbol{v}_2)$ appartengono a $\\text{Im}(F)$, allora:</p>
<p>$$\\boldsymbol{v}'_1 + \\boldsymbol{v}'_2 = F(\\boldsymbol{v}_1) + F(\\boldsymbol{v}_2) = F(\\boldsymbol{v}_1 + \\boldsymbol{v}_2) \\in \\text{Im}(F)$$</p>
<p><strong>Chiusura per scalari:</strong> Se $\\boldsymbol{v}' = F(\\boldsymbol{v})$ e $\\lambda \\in \\mathbb{R}$, allora:</p>
<p>$$\\lambda \\boldsymbol{v}' = \\lambda F(\\boldsymbol{v}) = F(\\lambda \\boldsymbol{v}) \\in \\text{Im}(F)$$</p>`
                },
                {
                    subtitle: "Proprietà 2: Suriettività",
                    content: `<p>L'applicazione $F$ è <strong>suriettiva</strong> se e solo se $\\text{Im}(F) = V'$.</p>
<p>Questo è quasi immediato dalla definizione: $F$ è suriettiva significa che ogni $\\boldsymbol{v}' \\in V'$ ha una preimmagine, il che equivale a dire che ogni elemento di $V'$ appartiene all'immagine.</p>`
                },
                {
                    subtitle: "Proprietà 3: Generatori dell'immagine",
                    content: `<p>Se $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ è un <strong>sistema di generatori</strong> per $V$, allora $\\{F(\\boldsymbol{u}_1), \\dots, F(\\boldsymbol{u}_h)\\}$ è un sistema di generatori per $\\text{Im}(F)$.</p>
<p><strong>Dimostrazione:</strong> Sia $\\boldsymbol{v}' \\in \\text{Im}(F)$. Esiste $\\boldsymbol{v} \\in V$ con $F(\\boldsymbol{v}) = \\boldsymbol{v}'$. Poiché $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ genera $V$, esistono scalari $a_1, \\dots, a_h$ con $\\boldsymbol{v} = a_1 \\boldsymbol{u}_1 + \\dots + a_h \\boldsymbol{u}_h$. Applicando $F$:</p>
<p>$$\\boldsymbol{v}' = F(\\boldsymbol{v}) = a_1 F(\\boldsymbol{u}_1) + \\dots + a_h F(\\boldsymbol{u}_h)$$</p>
<p>Questa proprietà è molto potente: <strong>per descrivere l'immagine basta conoscere le immagini dei generatori</strong> (e in particolare dei vettori di una base). $\\square$</p>`
                },
                {
                    subtitle: "Proprietà 4: Immagine di L_A e spazio delle colonne",
                    content: `<p>Se $F = L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$, allora $\\text{Im}(L_A) = C(A)$, lo <strong>spazio delle colonne</strong> di $A$.</p>
<p>Per capire perché, siano $\\boldsymbol{A}_1, \\dots, \\boldsymbol{A}_n$ le colonne di $A$. Per ogni $\\boldsymbol{x} = (x_1, \\dots, x_n)^T \\in \\mathbb{R}^n$:</p>
<p>$$L_A(\\boldsymbol{x}) = A\\boldsymbol{x} = x_1 \\boldsymbol{A}_1 + x_2 \\boldsymbol{A}_2 + \\dots + x_n \\boldsymbol{A}_n$$</p>
<p>Ogni vettore nell'immagine di $L_A$ è una combinazione lineare delle colonne di $A$, e viceversa ogni combinazione lineare delle colonne si ottiene scegliendo opportunamente $\\boldsymbol{x}$. Pertanto:</p>
<p>$$\\text{Im}(L_A) = \\text{Span}(\\boldsymbol{A}_1, \\dots, \\boldsymbol{A}_n) = C(A)$$</p>`
                }
            ],
            formulas: [
                { label: "Immagine", latex: "\\text{Im}(F) = \\{ \\boldsymbol{v}' \\in V' \\mid \\exists \\boldsymbol{v} \\in V : F(\\boldsymbol{v}) = \\boldsymbol{v}' \\}" },
                { label: "Immagine di L_A", latex: "\\text{Im}(L_A) = C(A) = \\text{Span}(\\text{colonne di } A)" }
            ]
        },
        {
            id: "s24-base-immagine",
            type: "section",
            title: "Base dell'Immagine tramite Colonne Pivot",
            icon: "📐",
            content: `<p>Sappiamo che l'immagine è generata dalle immagini dei vettori di base. Ma come selezioniamo una <strong>base</strong> (e non solo un sistema di generatori) per l'immagine?</p>`,
            subsections: [
                {
                    subtitle: "Proposizione: Calcolo della base dell'immagine tramite coordinate",
                    content: `<p>Sia $B = \\{\\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_n\\}$ una base di $V$ e $A = M_{B,B'}(F)$. Siano $\\boldsymbol{A}_{i_1}, \\dots, \\boldsymbol{A}_{i_k}$ le <strong>colonne pivot</strong> di $A$ (quelle corrispondenti alle posizioni dei pivot nella riduzione a scalini). Allora:</p>
<p>$$\\{F(\\boldsymbol{b}_{i_1}), \\dots, F(\\boldsymbol{b}_{i_k})\\} \\text{ è una base per } \\text{Im}(F)$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Per la Proprietà 3, poiché $B$ è una base di $V$, le immagini $\\{F(\\boldsymbol{b}_1), \\dots, F(\\boldsymbol{b}_n)\\}$ generano $\\text{Im}(F)$.</p>
<p>La $j$-esima colonna $\\boldsymbol{A}_j$ di $A$ è, per definizione, il vettore delle coordinate di $F(\\boldsymbol{b}_j)$ rispetto a $B'$: $\\boldsymbol{A}_j = [F(\\boldsymbol{b}_j)]_{B'}$.</p>
<p>Le colonne pivot sono quelle che rimangono linearmente indipendenti dopo la riduzione a scalini e formano una base di $C(A)$. Le colonne non pivot sono combinazioni lineari delle colonne pivot: se $\\boldsymbol{A}_j = c_1 \\boldsymbol{A}_{i_1} + \\dots + c_k \\boldsymbol{A}_{i_k}$, allora per la linearità dell'applicazione delle coordinate:</p>
<p>$$F(\\boldsymbol{b}_j) = c_1 F(\\boldsymbol{b}_{i_1}) + \\dots + c_k F(\\boldsymbol{b}_{i_k})$$</p>
<p>Pertanto $\\{F(\\boldsymbol{b}_{i_1}), \\dots, F(\\boldsymbol{b}_{i_k})\\}$ genera $\\text{Im}(F)$.</p>
<p>L'indipendenza lineare delle colonne pivot in $\\mathbb{R}^m$ si trasferisce all'indipendenza dei corrispondenti vettori in $V'$, poiché $\\phi_{B'}$ è un isomorfismo. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Dimensione dell'immagine", latex: "\\dim(\\text{Im}(F)) = \\text{rk}(A)" }
            ]
        },
        {
            id: "s24-colonne-pivot-attenzione",
            type: "alert_box",
            title: "⚠️ Colonne pivot: della matrice ORIGINALE!",
            icon: "⚠️",
            content: `<p>Un errore molto comune: quando si trovano le colonne pivot tramite riduzione a scalini, si devono prendere le colonne corrispondenti dalla <strong>matrice ORIGINALE $A$</strong>, NON dalla matrice ridotta!</p>
<p>Le operazioni elementari per righe <strong>cambiano le colonne</strong>: le colonne della matrice ridotta non sono più le coordinate dei vettori dell'immagine. Tuttavia, le operazioni per righe <strong>non cambiano le relazioni di dipendenza lineare</strong> tra le colonne (quali colonne sono combinazioni lineari di quali altre). Quindi:</p>
<ul>
<li>La riduzione a scalini serve solo per <strong>identificare le posizioni dei pivot</strong></li>
<li>Le colonne che formano la base di $C(A)$ vanno lette dalla <strong>matrice originale</strong></li>
</ul>`
        },
        {
            id: "s24-teorema-dimensione",
            type: "section",
            title: "Teorema della Dimensione (del Rango)",
            icon: "⚖️",
            content: `<p>Nucleo e immagine non sono indipendenti: le loro dimensioni sono legate da una relazione fondamentale.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato",
                    content: `<p>Sia $F: V \\to V'$ un'applicazione lineare con $\\dim(V) = n$. Allora:</p>
<p>$$\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))$$</p>
<p>Equivalentemente: $n = (n - \\text{rk}(A)) + \\text{rk}(A)$.</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Dalle proprietà precedenti sappiamo che:</p>
<ul>
<li>$\\dim(\\ker(F)) = n - \\text{rk}(A)$</li>
<li>$\\dim(\\text{Im}(F)) = \\text{rk}(A)$</li>
</ul>
<p>Sommando:</p>
<p>$$\\dim(\\ker(F)) + \\dim(\\text{Im}(F)) = (n - \\text{rk}(A)) + \\text{rk}(A) = n = \\dim(V) \\quad \\square$$</p>
<p>Questo teorema è estremamente utile: conoscendo una delle due dimensioni, l'altra si ricava immediatamente. È anche un ottimo <strong>strumento di verifica</strong> nei calcoli.</p>`
                }
            ],
            formulas: [
                { label: "Teorema della dimensione", latex: "\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))" }
            ]
        },
        {
            id: "s24-esempio1",
            type: "section",
            title: "Esempio 1: Nucleo e Immagine con basi canoniche",
            icon: "✏️",
            content: `<p>Sia $F: \\mathbb{R}^4 \\to \\mathbb{R}^3$ definita da $F(x,y,z,t) = (x+t,\\; x+y-z,\\; x+t)$. Calcoliamo una base per $\\ker(F)$ e $\\text{Im}(F)$.</p>`,
            subsections: [
                {
                    subtitle: "Matrice rappresentativa",
                    content: `<p>Usando le basi canoniche, la matrice si ottiene calcolando le immagini dei vettori della base canonica di $\\mathbb{R}^4$:</p>
<p>$$A = \\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 1 & 1 & -1 & 0 \\\\ 1 & 0 & 0 & 1 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Calcolo del nucleo",
                    content: `<p>Risolviamo $A\\boldsymbol{x} = \\boldsymbol{0}$:</p>
<p>$$\\begin{cases} x+t = 0 \\\\ x+y-z = 0 \\\\ x+t = 0 \\end{cases}$$</p>
<p>La terza equazione è identica alla prima. Dalla prima: $x = -t$. Sostituendo nella seconda: $-t + y - z = 0$, quindi $y = z + t$. Le <strong>variabili libere</strong> sono $z$ e $t$:</p>
<p>$$\\begin{pmatrix} x \\\\ y \\\\ z \\\\ t \\end{pmatrix} = z \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>Una base per $\\ker(F)$ è:</p>
<p>$$\\text{Base di } \\ker(F) = \\left\\{ \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\\\ 1 \\end{pmatrix} \\right\\}$$</p>
<p>Quindi $\\dim(\\ker(F)) = 2$.</p>`
                },
                {
                    subtitle: "Calcolo dell'immagine",
                    content: `<p>L'immagine è lo spazio delle colonne di $A$. Riduciamo a scalini per identificare le colonne pivot:</p>
<p>$$A = \\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 1 & 1 & -1 & 0 \\\\ 1 & 0 & 0 & 1 \\end{pmatrix} \\overset{R_2 - R_1,\\; R_3 - R_1}{\\longrightarrow} \\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>I pivot si trovano nelle colonne <strong>1 e 2</strong>. Pertanto $\\text{rk}(A) = 2$.</p>
<p>Le colonne pivot della <strong>matrice originale</strong> $A$ sono $(1,1,1)^T$ e $(0,1,0)^T$. Queste formano una base per lo spazio delle colonne:</p>
<p>$$\\text{Base di } \\text{Im}(F) = \\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\}$$</p>
<p><strong>Verifica con il Teorema della Dimensione:</strong> $\\dim(\\ker(F)) + \\dim(\\text{Im}(F)) = 2 + 2 = 4 = \\dim(\\mathbb{R}^4)$. ✓</p>`
                }
            ]
        },
        {
            id: "s24-esempio2",
            type: "section",
            title: "Esempio 2: Nucleo e Immagine con base non canonica",
            icon: "🔧",
            content: `<p>Sia $F: \\mathbb{R}^3 \\to \\mathbb{R}^3$ con $B = \\{(1,1,1),\\, (1,2,1),\\, (2,5,3)\\}$ base di $\\mathbb{R}^3$. L'espressione di $F$ rispetto a $B$ (sia in partenza che in arrivo) è $F(x',y',z') = (x'+z',\\, y',\\, x'+z')$, dove $(x',y',z')$ sono le coordinate rispetto a $B$.</p>`,
            subsections: [
                {
                    subtitle: "Matrice rappresentativa",
                    content: `<p>$$A = M_{B,B}(F) = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Calcolo del nucleo",
                    content: `<p>Risolviamo il sistema nelle coordinate $A\\boldsymbol{x}' = \\boldsymbol{0}$:</p>
<p>$$\\begin{cases} x'+z' = 0 \\\\ y' = 0 \\\\ x'+z' = 0 \\end{cases}$$</p>
<p>Otteniamo $y' = 0$ e $x' = -z'$. La soluzione in coordinate è $(-z', 0, z') = z'(-1, 0, 1)$.</p>
<p>Una base per $\\ker(L_A)$ è $\\{(-1,0,1)\\}$. <strong>Attenzione:</strong> questo è il vettore delle <em>coordinate</em>, non il vettore vero e proprio! Per trovare il vettore $\\boldsymbol{u}$ del nucleo, ricostruiamo:</p>
<p>$$\\boldsymbol{u} = -1 \\cdot (1,1,1) + 0 \\cdot (1,2,1) + 1 \\cdot (2,5,3) = (-1+2,\\, -1+5,\\, -1+3) = (1,4,2)$$</p>
<p>Quindi una base per $\\ker(F)$ è $\\{(1,4,2)\\}$.</p>`
                },
                {
                    subtitle: "Calcolo dell'immagine",
                    content: `<p>La terza colonna $(1,0,1)^T$ è uguale alla prima, quindi $\\text{rk}(A) = 2$. Le prime due colonne $(1,0,1)^T$ e $(0,1,0)^T$ sono linearmente indipendenti (la sottomatrice $2 \\times 2$ estratta dalle prime due righe ha determinante $1 \\neq 0$).</p>
<p>Una base per $C(A)$ è $\\{(1,0,1)^T,\\, (0,1,0)^T\\}$. Questi sono i <em>vettori delle coordinate</em> di $F(\\boldsymbol{b}_1)$ e $F(\\boldsymbol{b}_2)$ rispetto a $B$. Ricostruiamo i vettori veri:</p>
<ul>
<li>$F(\\boldsymbol{b}_1)$: coordinate $(1,0,1) \\Rightarrow 1 \\cdot (1,1,1) + 0 \\cdot (1,2,1) + 1 \\cdot (2,5,3) = (3,6,4)$</li>
<li>$F(\\boldsymbol{b}_2)$: coordinate $(0,1,0) \\Rightarrow 0 \\cdot (1,1,1) + 1 \\cdot (1,2,1) + 0 \\cdot (2,5,3) = (1,2,1)$</li>
</ul>
<p>Una base per $\\text{Im}(F)$ è $\\{(3,6,4),\\, (1,2,1)\\}$.</p>
<p><strong>Verifica:</strong> $\\dim(\\ker(F)) + \\dim(\\text{Im}(F)) = 1 + 2 = 3 = \\dim(\\mathbb{R}^3)$. ✓</p>`
                }
            ]
        },
        {
            id: "s24-nota-basi-non-canoniche",
            type: "note_box",
            title: "📝 Coordinate vs. Vettori: la trappola delle basi non canoniche",
            icon: "📝",
            content: `<p>L'Esempio 2 illustra un punto <strong>cruciale</strong>: quando si lavora con basi non canoniche, la riduzione a scalini e il sistema omogeneo producono <strong>vettori di coordinate</strong>, non i vettori veri e propri dello spazio.</p>
<p>Per ottenere i vettori del nucleo e dell'immagine bisogna <strong>ricostruirli</strong> come combinazioni lineari dei vettori della base $B$:</p>
<p>$$\\boldsymbol{u} = x'_1 \\boldsymbol{b}_1 + x'_2 \\boldsymbol{b}_2 + \\dots + x'_n \\boldsymbol{b}_n$$</p>
<p>Se la base è canonica, coordinate e vettori coincidono e questo passaggio non serve. Ma con basi non canoniche, <strong>dimenticare la ricostruzione è un errore grave</strong>.</p>`
        },
        {
            id: "s24-isomorfismi",
            type: "section",
            title: "Isomorfismi tra Spazi Vettoriali",
            icon: "🔄",
            content: `<p>Introduciamo ora un concetto che cattura l'idea di "stessa struttura algebrica" tra spazi vettoriali.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p>Un'applicazione lineare $F: V \\to V'$ si dice <strong>isomorfismo</strong> se è biiettiva (iniettiva e suriettiva). Due spazi vettoriali $V$ e $V'$ si dicono <strong>isomorfi</strong> se esiste un isomorfismo tra di essi. Si scrive $V \\cong V'$.</p>`
                },
                {
                    subtitle: "Relazione di equivalenza",
                    content: `<p>La relazione "essere isomorfi" è una <strong>relazione di equivalenza</strong>:</p>
<ul>
<li><strong>Riflessiva:</strong> Ogni spazio $V$ è isomorfo a se stesso tramite $\\text{Id}_V$</li>
<li><strong>Simmetrica:</strong> Se $F: V \\to V'$ è un isomorfismo, anche $F^{-1}: V' \\to V$ lo è</li>
<li><strong>Transitiva:</strong> Se $F: V \\to V'$ e $G: V' \\to V''$ sono isomorfismi, anche $G \\circ F: V \\to V''$ lo è</li>
</ul>`
                },
                {
                    subtitle: "Proprietà degli isomorfismi",
                    content: `<p>Sia $F: V \\to V'$ un isomorfismo tra spazi finitamente generabili. Allora:</p>
<p><strong>Punto 1. L'inversa è un isomorfismo.</strong> Poiché $F$ è biiettiva, $F^{-1}$ è ben definita e biiettiva. Resta da verificare che $F^{-1}$ è lineare. Siano $\\boldsymbol{v}'_1, \\boldsymbol{v}'_2 \\in V'$ e $\\lambda \\in \\mathbb{R}$. Poniamo $\\boldsymbol{v}_i = F^{-1}(\\boldsymbol{v}'_i)$. Per la linearità di $F$:</p>
<p>$$F(\\boldsymbol{v}_1 + \\lambda \\boldsymbol{v}_2) = \\boldsymbol{v}'_1 + \\lambda \\boldsymbol{v}'_2$$</p>
<p>Applicando $F^{-1}$: $F^{-1}(\\boldsymbol{v}'_1 + \\lambda \\boldsymbol{v}'_2) = \\boldsymbol{v}_1 + \\lambda \\boldsymbol{v}_2 = F^{-1}(\\boldsymbol{v}'_1) + \\lambda F^{-1}(\\boldsymbol{v}'_2)$. $\\square$</p>
<p><strong>Punto 2. Un isomorfismo trasforma basi in basi.</strong> Se $\\{\\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_n\\}$ è una base di $V$, allora $\\{F(\\boldsymbol{b}_1), \\dots, F(\\boldsymbol{b}_n)\\}$ è una base di $V'$. Infatti:</p>
<ul>
<li><em>Generazione:</em> Per la Proprietà 3 dell'immagine, $\\{F(\\boldsymbol{b}_1), \\dots, F(\\boldsymbol{b}_n)\\}$ genera $\\text{Im}(F) = V'$ (poiché $F$ è suriettiva).</li>
<li><em>Indipendenza:</em> Se $a_1 F(\\boldsymbol{b}_1) + \\dots + a_n F(\\boldsymbol{b}_n) = \\boldsymbol{0}$, allora $F(a_1 \\boldsymbol{b}_1 + \\dots + a_n \\boldsymbol{b}_n) = \\boldsymbol{0}$. Poiché $\\ker(F) = \\{\\boldsymbol{0}\\}$ (iniettività), si ha $a_1 \\boldsymbol{b}_1 + \\dots + a_n \\boldsymbol{b}_n = \\boldsymbol{0}$, e dall'indipendenza dei $\\boldsymbol{b}_i$ segue $a_1 = \\dots = a_n = 0$.</li>
</ul>
<p><em>Viceversa:</em> se $\\{F(\\boldsymbol{b}_1), \\dots, F(\\boldsymbol{b}_n)\\}$ è una base di $V'$, applicando lo stesso ragionamento a $F^{-1}$ (che è anch'esso un isomorfismo per il Punto 1) si ottiene che $\\{\\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_n\\} = \\{F^{-1}(F(\\boldsymbol{b}_1)), \\dots, F^{-1}(F(\\boldsymbol{b}_n))\\}$ è una base di $V$.</p>
<p><strong>Punto 3.</strong> Segue dal Punto 2: se $B$ è base di $V$ con $n$ elementi, allora $F(B)$ è base di $V'$ con $n$ elementi, quindi $\\dim(V) = \\dim(V')$.</p>
<p><strong>Punto 4. Matrice rappresentativa invertibile.</strong> Posto $M = M_{B,B'}(F)$ e $N = M_{B',B}(F^{-1})$:</p>
<p>$$M_{B,B}(F^{-1} \\circ F) = N \\cdot M = I_n$$</p>
<p>$$M_{B',B'}(F \\circ F^{-1}) = M \\cdot N = I_n$$</p>
<p>Dunque $M$ è invertibile e $M^{-1} = M_{B',B}(F^{-1})$. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Inversa della matrice rappresentativa", latex: "(M_{B,B'}(F))^{-1} = M_{B',B}(F^{-1})" }
            ]
        },
        {
            id: "s24-classificazione-isomorfismi",
            type: "section",
            title: "Classificazione: Stessa Dimensione ⟺ Isomorfi",
            icon: "🏛️",
            content: `<p>Il risultato seguente è uno dei più importanti dell'algebra lineare: riduce la classificazione degli spazi vettoriali (a meno di isomorfismo) a un singolo numero intero.</p>`,
            subsections: [
                {
                    subtitle: "Teorema: Ogni spazio n-dimensionale è isomorfo a ℝⁿ",
                    content: `<p>Ogni spazio vettoriale $V$ di dimensione $n$ è isomorfo a $\\mathbb{R}^n$.</p>
<p><strong>Dimostrazione:</strong> L'isomorfismo è dato dall'applicazione delle coordinate $\\phi_B: V \\to \\mathbb{R}^n$ rispetto a una qualsiasi base $B$ di $V$. Questa è lineare e biiettiva, dunque è un isomorfismo. $\\square$</p>`
                },
                {
                    subtitle: "Corollario: Criterio dimensionale",
                    content: `<p>Due spazi vettoriali finitamente generabili sono <strong>isomorfi se e solo se hanno la stessa dimensione</strong>.</p>
<p><strong>Dimostrazione ($\\Rightarrow$):</strong> Se $V \\cong V'$, dal Punto 3 della proposizione precedente $\\dim(V) = \\dim(V')$.</p>
<p><strong>Dimostrazione ($\\Leftarrow$):</strong> Se $\\dim(V) = \\dim(V') = n$, allora $V \\cong \\mathbb{R}^n$ e $V' \\cong \\mathbb{R}^n$. Per la transitività (e simmetria):</p>
<p>$$V \\cong \\mathbb{R}^n \\cong V'$$</p>
<p>Dunque $V \\cong V'$. $\\square$</p>`
                },
                {
                    subtitle: "Esempio: Polinomi e ℝ³",
                    content: `<p>Lo spazio $\\mathbb{R}_2[t]$ dei polinomi di grado $\\leq 2$ ha dimensione $3$ (una base è $\\{1, t, t^2\\}$), quindi è <strong>isomorfo a $\\mathbb{R}^3$</strong>, nonostante i suoi elementi siano oggetti di natura completamente diversa dai vettori geometrici.</p>
<p>Un isomorfismo esplicito è:</p>
<p>$$F: \\mathbb{R}_2[t] \\to \\mathbb{R}^3, \\quad F(a + bt + ct^2) = (a, b, c)$$</p>
<p><strong>Linearità:</strong> $F((a + bt + ct^2) + \\lambda(a' + b't + c't^2)) = F((a + \\lambda a') + (b + \\lambda b')t + (c + \\lambda c')t^2) = (a + \\lambda a', b + \\lambda b', c + \\lambda c') = (a,b,c) + \\lambda(a',b',c') = F(a + bt + ct^2) + \\lambda F(a' + b't + c't^2)$.</p>
<p><strong>Iniettività:</strong> Se $F(a + bt + ct^2) = (0,0,0)$, allora $a = b = c = 0$, cioè il polinomio è il polinomio nullo.</p>
<p><strong>Suriettività:</strong> Ogni $(a,b,c) \\in \\mathbb{R}^3$ è immagine del polinomio $a + bt + ct^2$.</p>
<p>Questo è semplicemente l'applicazione delle coordinate rispetto alla base $\\{1, t, t^2\\}$!</p>`
                }
            ],
            formulas: [
                { label: "Criterio di isomorfismo", latex: "V \\cong V' \\iff \\dim(V) = \\dim(V')" }
            ]
        },
        {
            id: "s24-orale-dim",
            type: "oral_box",
            title: "💬 Domanda d'esame: Teorema della Dimensione",
            icon: "💬",
            content: `<p><strong>Domanda tipica:</strong> "Enunci e dimostri il Teorema della Dimensione (del Rango)."</p>
<p>Il professore si aspetta: enunciato preciso ($\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))$), e la dimostrazione che passa per le uguaglianze $\\dim(\\ker(F)) = n - \\text{rk}(A)$ e $\\dim(\\text{Im}(F)) = \\text{rk}(A)$. Ricordatevi di citare che queste seguono dal calcolo del nucleo tramite il sistema omogeneo e dal fatto che l'immagine è lo spazio delle colonne.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Definisci il nucleo e l'immagine di un'applicazione lineare $F: V \\to V'$.",
            back: "Il <strong>nucleo</strong> è $\\ker(F) = \\{ \\boldsymbol{v} \\in V \\mid F(\\boldsymbol{v}) = \\boldsymbol{0}_{V'} \\}$. L'<strong>immagine</strong> è $\\text{Im}(F) = \\{ \\boldsymbol{v}' \\in V' \\mid \\exists \\boldsymbol{v} \\in V : F(\\boldsymbol{v}) = \\boldsymbol{v}' \\}$. Entrambi sono sottospazi vettoriali (del dominio e del codominio rispettivamente)."
        },
        {
            type: "domanda",
            front: "Come si calcola in pratica una base del nucleo di un'applicazione lineare $F: V \\to V'$?",
            back: "Si fissa una base $B$ di $V$ e una base $B'$ di $V'$, si costruisce la matrice rappresentativa $A = M_{B,B'}(F)$, si risolve il sistema omogeneo $A\\boldsymbol{x} = \\boldsymbol{0}$. Le soluzioni danno i <strong>vettori delle coordinate</strong> dei vettori del nucleo. Se la base è non canonica, bisogna ricostruire i vettori come combinazioni lineari dei vettori di $B$. La dimensione è $\\dim(\\ker(F)) = n - \\text{rk}(A)$."
        },
        {
            type: "formula",
            front: "Enuncia il Teorema della Dimensione (del Rango).",
            back: "Sia $F: V \\to V'$ lineare con $\\dim(V) = n$. Allora: $$\\dim(V) = \\dim(\\ker(F)) + \\dim(\\text{Im}(F))$$ Equivalentemente: $n = (n - \\text{rk}(A)) + \\text{rk}(A)$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che l'immagine $\\text{Im}(F)$ è un sottospazio vettoriale di $V'$.",
            back: "(1) $\\boldsymbol{0}_{V'} = F(\\boldsymbol{0}_V) \\in \\text{Im}(F)$. (2) Se $\\boldsymbol{v}'_1 = F(\\boldsymbol{v}_1), \\boldsymbol{v}'_2 = F(\\boldsymbol{v}_2) \\in \\text{Im}(F)$, allora $\\boldsymbol{v}'_1 + \\boldsymbol{v}'_2 = F(\\boldsymbol{v}_1 + \\boldsymbol{v}_2) \\in \\text{Im}(F)$. (3) Se $\\boldsymbol{v}' = F(\\boldsymbol{v}) \\in \\text{Im}(F)$ e $\\lambda \\in \\mathbb{R}$, allora $\\lambda \\boldsymbol{v}' = F(\\lambda \\boldsymbol{v}) \\in \\text{Im}(F)$."
        },
        {
            type: "tranello",
            front: "Quando si calcola una base dell'immagine tramite colonne pivot, quali colonne si prendono: quelle della matrice ridotta o della matrice originale?",
            back: "Si prendono le colonne della <strong>matrice ORIGINALE</strong> $A$, NON della matrice ridotta a scalini! La riduzione serve solo per identificare le <em>posizioni</em> dei pivot. Le operazioni per righe cambiano le colonne ma preservano le relazioni di dipendenza lineare tra di esse."
        },
        {
            type: "domanda",
            front: "Perché $\\text{Im}(L_A)$ coincide con lo spazio delle colonne $C(A)$?",
            back: "Perché $L_A(\\boldsymbol{x}) = A\\boldsymbol{x} = x_1 \\boldsymbol{A}_1 + \\dots + x_n \\boldsymbol{A}_n$: ogni vettore nell'immagine è una combinazione lineare delle colonne di $A$, e viceversa ogni combinazione lineare si ottiene scegliendo opportunamente $\\boldsymbol{x}$. Quindi $\\text{Im}(L_A) = \\text{Span}(\\boldsymbol{A}_1, \\dots, \\boldsymbol{A}_n) = C(A)$."
        },
        {
            type: "definizione",
            front: "Cos'è un isomorfismo tra spazi vettoriali? Quando due spazi sono isomorfi?",
            back: "Un <strong>isomorfismo</strong> è un'applicazione lineare biiettiva $F: V \\to V'$. Due spazi $V, V'$ sono <strong>isomorfi</strong> ($V \\cong V'$) se esiste un isomorfismo tra di essi. Il criterio fondamentale: $V \\cong V'$ se e solo se $\\dim(V) = \\dim(V')$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che se $F: V \\to V'$ è un isomorfismo, allora $\\dim(V) = \\dim(V')$.",
            back: "Se $\\{\\boldsymbol{b}_1, \\dots, \\boldsymbol{b}_n\\}$ è base di $V$, allora $\\{F(\\boldsymbol{b}_1), \\dots, F(\\boldsymbol{b}_n)\\}$ è base di $V'$. Generazione: per la suriettività $\\text{Im}(F) = V'$, e le immagini dei generatori generano l'immagine. Indipendenza: se $\\sum a_i F(\\boldsymbol{b}_i) = \\boldsymbol{0}$, per linearità $F(\\sum a_i \\boldsymbol{b}_i) = \\boldsymbol{0}$, e per iniettività ($\\ker(F) = \\{\\boldsymbol{0}\\}$) si ottiene $\\sum a_i \\boldsymbol{b}_i = \\boldsymbol{0}$, da cui tutti $a_i = 0$."
        },
        {
            type: "tranello",
            front: "Quando lavori con una base non canonica, qual è l'errore più comune nel calcolo del nucleo?",
            back: "Dimenticare che il sistema $A\\boldsymbol{x}' = \\boldsymbol{0}$ produce <strong>vettori di coordinate</strong>, non i vettori veri dello spazio. Bisogna ricostruire il vettore come combinazione lineare dei vettori della base: $\\boldsymbol{u} = x'_1 \\boldsymbol{b}_1 + \\dots + x'_n \\boldsymbol{b}_n$. Con la base canonica questo passaggio è trasparente perché coordinate e vettori coincidono."
        },
        {
            type: "domanda",
            front: "Dimostra che l'inversa di un isomorfismo è ancora un'applicazione lineare.",
            back: "Siano $\\boldsymbol{v}'_1, \\boldsymbol{v}'_2 \\in V'$ e $\\lambda \\in \\mathbb{R}$. Poniamo $\\boldsymbol{v}_i = F^{-1}(\\boldsymbol{v}'_i)$. Per linearità di $F$: $F(\\boldsymbol{v}_1 + \\lambda \\boldsymbol{v}_2) = F(\\boldsymbol{v}_1) + \\lambda F(\\boldsymbol{v}_2) = \\boldsymbol{v}'_1 + \\lambda \\boldsymbol{v}'_2$. Applicando $F^{-1}$: $\\boldsymbol{v}_1 + \\lambda \\boldsymbol{v}_2 = F^{-1}(\\boldsymbol{v}'_1 + \\lambda \\boldsymbol{v}'_2)$, che è $F^{-1}(\\boldsymbol{v}'_1) + \\lambda F^{-1}(\\boldsymbol{v}'_2)$."
        }
    ]
};

