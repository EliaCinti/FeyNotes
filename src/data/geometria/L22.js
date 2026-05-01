const LESSON = {
    id: "L22", date: "Lezione 22 — 27 Apr 2026",
    title: "Matrice Associata a un'Applicazione Lineare",
    abstract: "Come ogni applicazione lineare tra spazi di dimensione finita può essere rappresentata da una matrice, una volta scelte le basi. Costruzione della matrice rappresentativa, proprietà fondamentali (azione sui vettori, composizione, invertibilità) e esempi di calcolo dettagliati.",

    sections: [
        {
            id: "s22-intro-richiami",
            type: "section",
            title: "Introduzione e Richiami",
            icon: "🔗",
            content: `<p>In questa lezione approfondiamo il legame tra <strong>applicazioni lineari</strong> e <strong>matrici</strong>. L'idea centrale è che ogni applicazione lineare tra spazi vettoriali di dimensione finita può essere completamente descritta da una matrice, a patto di scegliere delle basi per gli spazi coinvolti.</p>
<p>Ricordiamo il punto di partenza: data una matrice $A \\in M_{m,n}(\\mathbb{R})$, l'applicazione $L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$ definita da $L_A(\\vec{x}) = A\\vec{x}$ è un'applicazione lineare. Oggi vedremo che, <strong>in un certo senso, ogni applicazione lineare è di questo tipo</strong>, a patto di lavorare con le coordinate.</p>`
        },
        {
            id: "s22-costruzione-da-matrice",
            type: "section",
            title: "Costruzione di un'Applicazione Lineare da una Matrice",
            icon: "🏗️",
            content: `<p>Consideriamo due spazi vettoriali $V$ e $V'$, con $\\dim(V) = n$ e $\\dim(V') = m$. Siano $B$ una base di $V$ e $B'$ una base di $V'$. Sia inoltre $A$ una matrice di dimensioni $m \\times n$.</p>
<p>A partire da questi elementi, possiamo costruire un'applicazione lineare $F: V \\to V'$. Il procedimento si basa sulla <strong>composizione di tre mappe</strong>:</p>`,
            subsections: [
                {
                    subtitle: "Il diagramma concettuale",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Composizione: dalla matrice all'applicazione lineare</strong></p>
  <p><em>Diagramma commutativo con quattro nodi:<br>
  In alto a sinistra: $V$ — In alto a destra: $\\mathbb{R}^n$<br>
  In basso a sinistra: $V'$ — In basso a destra: $\\mathbb{R}^m$<br>
  Freccia orizzontale in alto: $[\\cdot]_B$ (da $V$ a $\\mathbb{R}^n$)<br>
  Freccia verticale a destra: $L_A$ (da $\\mathbb{R}^n$ a $\\mathbb{R}^m$)<br>
  Freccia orizzontale in basso: $[\\cdot]_{B'}^{-1}$ (da $\\mathbb{R}^m$ a $V'$)<br>
  Freccia diagonale o verticale a sinistra: $F$ (da $V$ a $V'$)<br>
  Il diagramma commuta: $F = [\\cdot]_{B'}^{-1} \\circ L_A \\circ [\\cdot]_B$</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Le tre mappe che compongono $F$ sono:</p>
<ul>
  <li>$[\\cdot]_B: V \\to \\mathbb{R}^n$ — l'isomorfismo che associa a ogni vettore $\\vec{v} \\in V$ il vettore delle sue coordinate rispetto alla base $B$.</li>
  <li>$L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$ — l'applicazione lineare definita dalla moltiplicazione per la matrice $A$, cioè $L_A(\\vec{x}) = A\\vec{x}$.</li>
  <li>$[\\cdot]_{B'}^{-1}: \\mathbb{R}^m \\to V'$ — l'isomorfismo inverso delle coordinate, che prende un vettore di coordinate in $\\mathbb{R}^m$ e restituisce il corrispondente vettore in $V'$ rispetto alla base $B'$.</li>
</ul>`
                },
                {
                    subtitle: "Definizione formale",
                    content: `<p><strong>Definizione (Applicazione lineare associata a una matrice e a due basi).</strong> Date due basi $B$ di $V$ e $B'$ di $V'$, e una matrice $A \\in M_{m,n}(\\mathbb{R})$, definiamo l'applicazione $F: V \\to V'$ come la composizione:</p>
<p>$$F = [\\cdot]_{B'}^{-1} \\circ L_A \\circ [\\cdot]_B$$</p>
<p>Questa applicazione $F$ è lineare. Utilizzeremo la notazione $F_{B,B'}(A)$ per indicare l'applicazione così costruita.</p>
<p><strong>Perché è lineare?</strong> Perché è una composizione di applicazioni lineari: le mappe che estraggono le coordinate e le loro inverse sono isomorfismi (quindi lineari), e $L_A$ è lineare. La composizione di applicazioni lineari è ancora un'applicazione lineare.</p>`
                },
                {
                    subtitle: "Proprietà fondamentale",
                    content: `<p>Il funzionamento di questa applicazione è descritto dalla seguente proprietà: per ogni vettore $\\vec{u} \\in V$, il vettore delle coordinate della sua immagine $F(\\vec{u})$ rispetto alla base $B'$ si ottiene moltiplicando la matrice $A$ per il vettore delle coordinate di $\\vec{u}$ rispetto alla base $B$:</p>
<p>$$[F(\\vec{u})]_{B'} = A \\cdot [\\vec{u}]_B$$</p>
<p>Questa è la formula chiave che rende le matrici così utili: <strong>trasformano il problema di applicare una funzione lineare nel problema (meccanico) di moltiplicare una matrice per un vettore</strong>.</p>`
                }
            ],
            formulas: [
                { label: "Costruzione dalla matrice", latex: "F = [\\cdot]_{B'}^{-1} \\circ L_A \\circ [\\cdot]_B" },
                { label: "Azione sulle coordinate", latex: "[F(\\vec{u})]_{B'} = A \\cdot [\\vec{u}]_B" }
            ]
        },
        {
            id: "s22-esempio-costruzione",
            type: "section",
            title: "Esempio: Costruzione con Basi Canoniche",
            icon: "📐",
            content: `<p>Vediamo subito un esempio concreto per capire come funziona la costruzione.</p>
<p>Siano $V = \\mathbb{R}^3$ e $V' = \\mathbb{R}^4$. Scegliamo le basi canoniche $E_3$ per $\\mathbb{R}^3$ e $E_4$ per $\\mathbb{R}^4$. Consideriamo la matrice $A \\in M_{4,3}(\\mathbb{R})$:</p>
<p>$$A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 1 & 0 & -1 \\\\ -2 & -1 & 1 \\\\ 3 & 1 & -2 \\end{pmatrix}$$</p>
<p>Costruiamo l'applicazione lineare $F = F_{E_3, E_4}(A): \\mathbb{R}^3 \\to \\mathbb{R}^4$. Dato un generico vettore $(x, y, z) \\in \\mathbb{R}^3$, le sue coordinate rispetto alla base canonica sono proprio $(x, y, z)$. L'applicazione $F$ agisce come:</p>
<p>$$F(x, y, z) = A \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} x+y \\\\ x-z \\\\ -2x-y+z \\\\ 3x+y-2z \\end{pmatrix}$$</p>`,
            subsections: [
                {
                    subtitle: "Immagini dei vettori della base",
                    content: `<p>Calcoliamo l'immagine di alcuni vettori per capire la struttura:</p>
<ul>
  <li>$F(0,0,0) = (0,0,0,0)$ — come per ogni applicazione lineare, il vettore nullo va nel vettore nullo.</li>
  <li>$F(1,0,0) = (1,1,-2,3)$ — l'immagine del <strong>primo</strong> vettore della base canonica è la <strong>prima colonna</strong> di $A$.</li>
  <li>$F(0,1,0) = (1,0,-1,1)$ — l'immagine del <strong>secondo</strong> vettore della base è la <strong>seconda colonna</strong> di $A$.</li>
  <li>$F(0,0,1) = (0,-1,1,-2)$ — l'immagine del <strong>terzo</strong> vettore della base è la <strong>terza colonna</strong> di $A$.</li>
  <li>$F(1,1,1) = (1+1, 1-1, -2-1+1, 3+1-2) = (2,0,-2,2)$ — la somma delle tre colonne di $A$.</li>
</ul>
<p><strong>Osservazione chiave:</strong> poiché stiamo usando le basi canoniche, l'applicazione $F$ coincide semplicemente con la moltiplicazione per la matrice $A$. In questo caso, le colonne della matrice <em>sono</em> le immagini dei vettori della base.</p>`
                }
            ]
        },
        {
            id: "s22-matrice-rappresentativa",
            type: "section",
            title: "La Matrice Rappresentativa",
            icon: "📋",
            content: `<p>Il procedimento inverso è di <strong>fondamentale importanza</strong>: data un'applicazione lineare $F: V \\to V'$, vogliamo trovare una matrice $A$ che la rappresenti, una volta scelte le basi.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p><strong>Definizione (Matrice Rappresentativa).</strong> Sia $F: V \\to V'$ un'applicazione lineare. Siano $B = \\{\\vec{v}_1, \\dots, \\vec{v}_n\\}$ una base di $V$ e $B' = \\{\\vec{v'}_1, \\dots, \\vec{v'}_m\\}$ una base di $V'$.</p>
<p>Si definisce <strong>matrice rappresentativa</strong> (o <strong>matrice associata</strong>) di $F$ rispetto alle basi $B$ e $B'$ la matrice $A \\in M_{m,n}(\\mathbb{R})$ la cui $j$-esima colonna è data dal vettore delle coordinate dell'immagine del $j$-esimo vettore della base $B$, cioè $F(\\vec{v}_j)$, rispetto alla base $B'$:</p>
<p>$$A^{(j)} = [F(\\vec{v}_j)]_{B'}$$</p>
<p>Useremo la notazione $A = M_{B,B'}(F)$ per indicare tale matrice.</p>`
                },
                {
                    subtitle: "Ricetta operativa",
                    content: `<p>In pratica, per calcolare $M_{B,B'}(F)$:</p>
<ol>
  <li>Prendi ogni vettore $\\vec{v}_j$ della base $B$ (nell'ordine).</li>
  <li>Calcola la sua immagine $F(\\vec{v}_j)$.</li>
  <li>Esprimi $F(\\vec{v}_j)$ come combinazione lineare dei vettori della base $B'$.</li>
  <li>I coefficienti di quella combinazione formano la $j$-esima colonna della matrice.</li>
</ol>
<p>La matrice risultante ha $m$ righe (dimensione dello spazio di arrivo) e $n$ colonne (dimensione dello spazio di partenza).</p>`
                },
                {
                    subtitle: "Relazione duale con la costruzione precedente",
                    content: `<p>Le due costruzioni che abbiamo visto — dalla matrice all'applicazione lineare e viceversa — sono <strong>inverse l'una dell'altra</strong>:</p>
<p>$$M_{B,B'}(F_{B,B'}(A)) = A \\qquad \\text{e} \\qquad F_{B,B'}(M_{B,B'}(F)) = F$$</p>
<p>Questo stabilisce una <strong>corrispondenza biunivoca</strong> tra le applicazioni lineari $F: V \\to V'$ e le matrici $M_{m,n}(\\mathbb{R})$, una volta fissate le basi $B$ e $B'$.</p>`
                }
            ],
            formulas: [
                { label: "Colonna j-esima", latex: "A^{(j)} = [F(\\vec{v}_j)]_{B'}" },
                { label: "Notazione", latex: "A = M_{B,B'}(F)" }
            ]
        },
        {
            id: "s22-proprieta-teorema",
            type: "section",
            title: "Proprietà della Matrice Rappresentativa",
            icon: "⚙️",
            content: `<p>La matrice rappresentativa gode di tre proprietà cruciali che collegano le operazioni sulle applicazioni lineari (composizione, inversione) alle operazioni sulle matrici (prodotto, inversione).</p>`,
            subsections: [
                {
                    subtitle: "Proprietà 1 — Azione sui vettori",
                    content: `<p><strong>Enunciato.</strong> Sia $F: V \\to V'$ un'applicazione lineare, $B$ una base di $V$ e $B'$ una base di $V'$. Allora per ogni $\\vec{u} \\in V$:</p>
<p>$$[F(\\vec{u})]_{B'} = M_{B,B'}(F) \\cdot [\\vec{u}]_B$$</p>
<p><strong>Dimostrazione.</strong> Sia $A = M_{B,B'}(F)$. Sia $\\vec{u} \\in V$ e sia $\\vec{x} = [\\vec{u}]_B = (x_1, \\dots, x_n)^T$. Per definizione di coordinate:</p>
<p>$$\\vec{u} = \\sum_{j=1}^n x_j \\vec{v}_j$$</p>
<p>Applichiamo $F$ a entrambi i membri. Per la linearità di $F$:</p>
<p>$$F(\\vec{u}) = F\\left(\\sum_{j=1}^n x_j \\vec{v}_j\\right) = \\sum_{j=1}^n x_j F(\\vec{v}_j)$$</p>
<p>Ora calcoliamo le coordinate di $F(\\vec{u})$ rispetto alla base $B'$. Poiché l'applicazione che calcola le coordinate è lineare:</p>
<p>$$[F(\\vec{u})]_{B'} = \\left[ \\sum_{j=1}^n x_j F(\\vec{v}_j) \\right]_{B'} = \\sum_{j=1}^n x_j [F(\\vec{v}_j)]_{B'}$$</p>
<p>Per definizione di matrice rappresentativa, $[F(\\vec{v}_j)]_{B'}$ è la $j$-esima colonna di $A$, che denotiamo con $A^{(j)}$. Quindi:</p>
<p>$$[F(\\vec{u})]_{B'} = \\sum_{j=1}^n x_j A^{(j)}$$</p>
<p>Questa espressione è <strong>esattamente la definizione di prodotto matrice-vettore</strong> $A\\vec{x}$. Dunque:</p>
<p>$$[F(\\vec{u})]_{B'} = A \\vec{x} = M_{B,B'}(F) \\cdot [\\vec{u}]_B \\qquad \\blacksquare$$</p>`
                },
                {
                    subtitle: "Proprietà 2 — Composizione",
                    content: `<p><strong>Enunciato.</strong> Siano $F: V \\to V'$ e $G: V' \\to V''$ applicazioni lineari, e siano $B, B', B''$ basi di $V, V', V''$ rispettivamente. Allora:</p>
<p>$$M_{B,B''}(G \\circ F) = M_{B',B''}(G) \\cdot M_{B,B'}(F)$$</p>
<p><strong>Dimostrazione.</strong> Siano $A = M_{B,B'}(F)$, $P = M_{B',B''}(G)$ e $C = M_{B,B''}(G \\circ F)$. Vogliamo dimostrare che $C = P \\cdot A$.</p>
<p><em>(Nota: usiamo la lettera $P$ per la matrice di $G$ per evitare confusione con la base $B$.)</em></p>
<p>Prendiamo un generico vettore $\\vec{u} \\in V$. Applichiamo la Proprietà 1 a $G \\circ F$:</p>
<p>$$[(G \\circ F)(\\vec{u})]_{B''} = C \\cdot [\\vec{u}]_B$$</p>
<p>D'altra parte, calcoliamo lo stesso membro in un altro modo. Sia $\\vec{v} = F(\\vec{u})$. Allora $(G \\circ F)(\\vec{u}) = G(\\vec{v})$. Applichiamo la Proprietà 1 a $G$:</p>
<p>$$[G(\\vec{v})]_{B''} = P \\cdot [\\vec{v}]_{B'} \\Rightarrow [G(F(\\vec{u}))]_{B''} = P \\cdot [F(\\vec{u})]_{B'}$$</p>
<p>Ora applichiamo la Proprietà 1 a $F$ per sostituire $[F(\\vec{u})]_{B'}$:</p>
<p>$$[F(\\vec{u})]_{B'} = A \\cdot [\\vec{u}]_B$$</p>
<p>Sostituendo:</p>
<p>$$[(G \\circ F)(\\vec{u})]_{B''} = P \\cdot (A \\cdot [\\vec{u}]_B) = (P \\cdot A) \\cdot [\\vec{u}]_B$$</p>
<p>Confrontando le due espressioni:</p>
<p>$$C \\cdot [\\vec{u}]_B = (P \\cdot A) \\cdot [\\vec{u}]_B$$</p>
<p>Poiché questa uguaglianza vale per le coordinate di <strong>ogni</strong> vettore $\\vec{u} \\in V$, e quindi per ogni vettore di coordinate in $\\mathbb{R}^n$, deve valere $C = P \\cdot A$. $\\blacksquare$</p>`
                },
                {
                    subtitle: "Proprietà 3 — Invertibilità",
                    content: `<p><strong>Enunciato.</strong> Se $F: V \\to V'$ è un isomorfismo (applicazione lineare biiettiva), allora anche $F^{-1}: V' \\to V$ è lineare, la matrice $M_{B,B'}(F)$ è invertibile e:</p>
<p>$$M_{B',B}(F^{-1}) = \\left( M_{B,B'}(F) \\right)^{-1}$$</p>
<p><strong>Dimostrazione.</strong> Sappiamo che $F^{-1} \\circ F = \\text{Id}_V$. Usando la Proprietà 2:</p>
<p>$$M_{B,B}(\\text{Id}_V) = M_{B',B}(F^{-1}) \\cdot M_{B,B'}(F)$$</p>
<p>La matrice rappresentativa dell'identità rispetto alla stessa base in partenza e in arrivo è la matrice identità $I$. Quindi:</p>
<p>$$I = M_{B',B}(F^{-1}) \\cdot M_{B,B'}(F)$$</p>
<p>Questo dimostra che $M_{B',B}(F^{-1})$ è <strong>inversa sinistra</strong> di $M_{B,B'}(F)$.</p>
<p>Analogamente, da $F \\circ F^{-1} = \\text{Id}_{V'}$ e dalla Proprietà 2 si ottiene:</p>
<p>$$M_{B',B'}(\\text{Id}_{V'}) = M_{B,B'}(F) \\cdot M_{B',B}(F^{-1})$$</p>
<p>cioè:</p>
<p>$$I = M_{B,B'}(F) \\cdot M_{B',B}(F^{-1})$$</p>
<p>Quindi $M_{B',B}(F^{-1})$ è anche <strong>inversa destra</strong> di $M_{B,B'}(F)$. Essendo sia inversa sinistra che inversa destra, $M_{B,B'}(F)$ è invertibile e la sua inversa è proprio $M_{B',B}(F^{-1})$. $\\blacksquare$</p>`
                }
            ],
            formulas: [
                { label: "Azione sui vettori", latex: "[F(\\vec{u})]_{B'} = M_{B,B'}(F) \\cdot [\\vec{u}]_B" },
                { label: "Composizione", latex: "M_{B,B''}(G \\circ F) = M_{B',B''}(G) \\cdot M_{B,B'}(F)" },
                { label: "Invertibilità", latex: "M_{B',B}(F^{-1}) = \\left( M_{B,B'}(F) \\right)^{-1}" }
            ]
        },
        {
            id: "s22-composizione-significato",
            type: "alert_box",
            title: "Attenzione all'ordine nella composizione!",
            icon: "⚠️",
            content: `<p>Nella Proprietà 2, l'ordine delle matrici nel prodotto è <strong>cruciale</strong>:</p>
<p>$$M_{B,B''}(G \\circ F) = M_{B',B''}(G) \\cdot M_{B,B'}(F)$$</p>
<p>La matrice di $G$ (la funzione applicata <em>per seconda</em>) sta a <strong>sinistra</strong> nel prodotto. Questo rispecchia il fatto che nella composizione $G \\circ F$ prima si applica $F$ e poi $G$, ma nella moltiplicazione matriciale l'ordine si "inverte".</p>
<p>Inoltre, osserva come le basi si "concatenano": la base $B'$ che appare come <em>arrivo</em> di $F$ è la stessa che appare come <em>partenza</em> di $G$. È come una catena: $B \\to B' \\to B''$.</p>`
        },
        {
            id: "s22-esempio-R2-R4",
            type: "section",
            title: "Esempio Completo: da ℝ² a ℝ⁴",
            icon: "🧮",
            content: `<p>Sia $F: \\mathbb{R}^2 \\to \\mathbb{R}^4$ l'applicazione definita da:</p>
<p>$$F(x,y) = (x-y,\\; x-y,\\; 2x-2y,\\; 3x-3y)$$</p>
<p>Siano $E_2, E_4$ le basi canoniche di $\\mathbb{R}^2$ e $\\mathbb{R}^4$. Sia $B = \\{(2,1), (1,1)\\}$ una base di $\\mathbb{R}^2$. Sia $\\vec{u}$ il vettore di $\\mathbb{R}^2$ tale che $[\\vec{u}]_B = (-1, 3)^T$.</p>`,
            subsections: [
                {
                    subtitle: "1. Verifica della linearità",
                    content: `<p>L'applicazione $F$ può essere scritta come $F(\\vec{v}) = A\\vec{v}$ con:</p>
<p>$$A = \\begin{pmatrix} 1 & -1 \\\\ 1 & -1 \\\\ 2 & -2 \\\\ 3 & -3 \\end{pmatrix}$$</p>
<p>Poiché $F$ è della forma $L_A$ (moltiplicazione per matrice), è automaticamente lineare.</p>`
                },
                {
                    subtitle: "2. Calcolo di M_{E₂,E₄}(F)",
                    content: `<p>La matrice $A$ appena scritta è proprio la matrice rappresentativa di $F$ rispetto alle basi canoniche, poiché le sue colonne sono $F(1,0)$ e $F(0,1)$:</p>
<p>$$M_{E_2, E_4}(F) = A = \\begin{pmatrix} 1 & -1 \\\\ 1 & -1 \\\\ 2 & -2 \\\\ 3 & -3 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "3. Calcolo di M_{B,E₄}(F)",
                    content: `<p>Osserviamo che $F: \\mathbb{R}^2 \\to \\mathbb{R}^4$ può essere vista come la composizione $F = F \\circ \\text{Id}_{\\mathbb{R}^2}$, dove l'identità è vista come mappa da $(\\mathbb{R}^2, B)$ a $(\\mathbb{R}^2, E_2)$. Per la Proprietà 2 (composizione):</p>
<p>$$M_{B, E_4}(F) = M_{E_2, E_4}(F) \\cdot M_{B, E_2}(\\text{Id})$$</p>
<p>La matrice $M_{B, E_2}(\\text{Id})$ è la matrice di cambiamento di base da $B$ a $E_2$, le cui colonne sono i vettori della base $B$ espressi nelle coordinate canoniche:</p>
<p>$$M_{B, E_2}(\\text{Id}) = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$$</p>
<p>Quindi:</p>
<p>$$M_{B, E_4}(F) = \\begin{pmatrix} 1 & -1 \\\\ 1 & -1 \\\\ 2 & -2 \\\\ 3 & -3 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\\\ 2 & 0 \\\\ 3 & 0 \\end{pmatrix}$$</p>
<p><strong>Osservazione:</strong> la seconda colonna è tutta nulla! Questo significa che $F(1,1) = (0,0,0,0)$: il secondo vettore della base $B$ è nel nucleo di $F$.</p>`
                },
                {
                    subtitle: "4. Calcolo di F(u⃗)",
                    content: `<p>Usiamo la Proprietà 1 con la matrice appena calcolata:</p>
<p>$$[F(\\vec{u})]_{E_4} = M_{B, E_4}(F) \\cdot [\\vec{u}]_B = \\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\\\ 2 & 0 \\\\ 3 & 0 \\end{pmatrix} \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ -1 \\\\ -2 \\\\ -3 \\end{pmatrix}$$</p>
<p>Poiché le coordinate sono rispetto alla base canonica $E_4$, il vettore è $F(\\vec{u}) = (-1, -1, -2, -3)$.</p>`
                },
                {
                    subtitle: "5. Espressione esplicita rispetto a B e E₄",
                    content: `<p>L'espressione esplicita rispetto alle basi $B$ e $E_4$ si ottiene applicando la matrice $M_{B, E_4}(F)$ a un generico vettore di coordinate $(x', y')^T$ rispetto a $B$:</p>
<p>$$\\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\\\ 2 & 0 \\\\ 3 & 0 \\end{pmatrix} \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x' \\\\ x' \\\\ 2x' \\\\ 3x' \\end{pmatrix}$$</p>
<p>Quindi, se un vettore ha coordinate $(x', y')$ rispetto a $B$, la sua immagine ha coordinate $(x', x', 2x', 3x')$ rispetto a $E_4$. Notiamo che l'immagine <strong>non dipende da $y'$</strong>, coerentemente con il fatto che il secondo vettore di $B$ è nel nucleo di $F$.</p>`
                }
            ]
        },
        {
            id: "s22-esempio-derivata",
            type: "section",
            title: "Esempio: La Derivata come Applicazione Lineare",
            icon: "📈",
            content: `<p>Sia $D: \\mathbb{R}_3[t] \\to \\mathbb{R}_3[t]$ l'applicazione di derivata su polinomi di grado al più 3. Sia $E = \\{1, t, t^2, t^3\\}$ la base canonica di $\\mathbb{R}_3[t]$. Calcoliamo la matrice rappresentativa $M_{E,E}(D)$.</p>
<p>Osserviamo innanzitutto che $D$ è lineare per le proprietà della derivata: $D(p+q) = D(p)+D(q)$ e $D(\\lambda p) = \\lambda D(p)$ per ogni $p, q \\in \\mathbb{R}_3[t]$ e $\\lambda \\in \\mathbb{R}$.</p>`,
            subsections: [
                {
                    subtitle: "Calcolo colonna per colonna",
                    content: `<p>Dobbiamo calcolare l'immagine di ogni vettore della base $E$ e trovare le sue coordinate rispetto a $E$:</p>
<ul>
  <li>$D(1) = 0$ — coordinate: $(0,0,0,0)^T$ → <strong>prima colonna</strong></li>
  <li>$D(t) = 1$ — coordinate: $(1,0,0,0)^T$ → <strong>seconda colonna</strong></li>
  <li>$D(t^2) = 2t$ — coordinate: $(0,2,0,0)^T$ → <strong>terza colonna</strong></li>
  <li>$D(t^3) = 3t^2$ — coordinate: $(0,0,3,0)^T$ → <strong>quarta colonna</strong></li>
</ul>
<p>Assemblando le colonne:</p>
<p>$$M_{E,E}(D) = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 0 & 3 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Verifica e interpretazione",
                    content: `<p>L'espressione esplicita di questa applicazione è la seguente: se un polinomio $p(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$ ha coordinate $(a_0, a_1, a_2, a_3)^T$ rispetto a $E$, allora la sua derivata ha coordinate:</p>
<p>$$M_{E,E}(D) \\begin{pmatrix} a_0 \\\\ a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix} = \\begin{pmatrix} a_1 \\\\ 2a_2 \\\\ 3a_3 \\\\ 0 \\end{pmatrix}$$</p>
<p>Che corrisponde al polinomio $a_1 + 2a_2 t + 3a_3 t^2$, cioè esattamente $p'(t)$. ✓</p>
<p><strong>Osservazioni strutturali sulla matrice:</strong></p>
<ul>
  <li>La prima colonna è nulla: la derivata di una costante è zero.</li>
  <li>L'ultima riga è nulla: la derivata di un polinomio di grado $\\leq 3$ ha grado $\\leq 2$, quindi il coefficiente di $t^3$ è sempre 0.</li>
  <li>La matrice <strong>non è invertibile</strong> (ha una colonna nulla). Questo riflette il fatto che $D$ non è iniettiva: polinomi che differiscono per una costante hanno la stessa derivata.</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Matrice della derivata", latex: "M_{E,E}(D) = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 0 & 3 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}" }
            ]
        },
        {
            id: "s22-riepilogo-metodo",
            type: "note_box",
            title: "Riepilogo del Metodo",
            icon: "📝",
            content: `<p>Per calcolare la matrice rappresentativa $M_{B,B'}(F)$:</p>
<ol>
  <li><strong>Calcola le immagini</strong> dei vettori della base di partenza: $F(\\vec{v}_1), \\dots, F(\\vec{v}_n)$.</li>
  <li><strong>Esprimi</strong> ciascuna immagine come combinazione lineare della base di arrivo $B'$.</li>
  <li><strong>Assembla</strong> le coordinate ottenute come colonne della matrice.</li>
</ol>
<p>Se le basi sono canoniche ($\\mathbb{R}^n, \\mathbb{R}^m$), il passaggio 2 è immediato: le coordinate coincidono con le componenti del vettore.</p>
<p>Se la base di partenza non è canonica, puoi usare la Proprietà 2 per fattorizzare: $M_{B, B'}(F) = M_{E, B'}(F) \\cdot M_{B, E}(\\text{Id})$, dove $M_{B, E}(\\text{Id})$ ha come colonne i vettori di $B$.</p>`
        },
        {
            id: "s22-orale-composizione",
            type: "oral_box",
            title: "Domanda tipica: composizione e prodotto di matrici",
            icon: "🎤",
            content: `<p><strong>Domanda:</strong> "Qual è il legame tra la composizione di applicazioni lineari e il prodotto di matrici?"</p>
<p><strong>Risposta modello:</strong> La matrice rappresentativa della composizione $G \\circ F$ è il <em>prodotto</em> delle matrici rappresentative, nell'ordine $M(G) \\cdot M(F)$. Questo vale a patto di scegliere basi compatibili: la base di arrivo di $F$ deve coincidere con la base di partenza di $G$.</p>
<p>In formule: $M_{B,B''}(G \\circ F) = M_{B',B''}(G) \\cdot M_{B,B'}(F)$.</p>
<p>La dimostrazione usa due volte la Proprietà 1 (azione sui vettori) e l'associatività del prodotto matriciale.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è la matrice rappresentativa $M_{B,B'}(F)$ di un'applicazione lineare $F: V \\to V'$?",
            back: "È la matrice $A \\in M_{m,n}(\\mathbb{R})$ la cui $j$-esima colonna è il vettore delle coordinate dell'immagine del $j$-esimo vettore della base $B$, espresse rispetto alla base $B'$: $$A^{(j)} = [F(\\vec{v}_j)]_{B'}$$ Ha $m$ righe (dimensione di $V'$) e $n$ colonne (dimensione di $V$)."
        },
        {
            type: "formula",
            front: "Come si calcola l'immagine di un vettore $\\vec{u}$ usando la matrice rappresentativa?",
            back: "Tramite la Proprietà 1: $$[F(\\vec{u})]_{B'} = M_{B,B'}(F) \\cdot [\\vec{u}]_B$$ Le coordinate dell'immagine rispetto a $B'$ si ottengono moltiplicando la matrice rappresentativa per le coordinate di $\\vec{u}$ rispetto a $B$."
        },
        {
            type: "formula",
            front: "Qual è la relazione tra la matrice della composizione $G \\circ F$ e le matrici di $F$ e $G$?",
            back: "La matrice della composizione è il prodotto delle matrici, con $G$ a sinistra: $$M_{B,B''}(G \\circ F) = M_{B',B''}(G) \\cdot M_{B,B'}(F)$$ Attenzione all'ordine: la funzione applicata per ultima ($G$) corrisponde alla matrice a sinistra nel prodotto."
        },
        {
            type: "dimostrazione",
            front: "Come si dimostra che se $F$ è un isomorfismo, allora $M_{B,B'}(F)$ è invertibile con $M_{B',B}(F^{-1}) = (M_{B,B'}(F))^{-1}$?",
            back: "Si usa la Proprietà 2 due volte. Da $F^{-1} \\circ F = \\text{Id}_V$ si ottiene $M_{B',B}(F^{-1}) \\cdot M_{B,B'}(F) = I$ (inversa sinistra). Da $F \\circ F^{-1} = \\text{Id}_{V'}$ si ottiene $M_{B,B'}(F) \\cdot M_{B',B}(F^{-1}) = I$ (inversa destra). Essendo sia inversa sinistra che destra, la matrice è invertibile."
        },
        {
            type: "domanda",
            front: "Come si costruisce un'applicazione lineare $F: V \\to V'$ a partire da una matrice $A$ e due basi $B, B'$?",
            back: "Si compongono tre mappe: $$F = [\\cdot]_{B'}^{-1} \\circ L_A \\circ [\\cdot]_B$$ Prima si estraggono le coordinate rispetto a $B$, poi si moltiplica per $A$, infine si ricostruisce il vettore in $V'$ dalle coordinate rispetto a $B'$. La costruzione è l'inversa della matrice rappresentativa: $F_{B,B'}(A)$ e $M_{B,B'}(F)$ sono operazioni inverse."
        },
        {
            type: "tranello",
            front: "Se uso le basi canoniche per $\\mathbb{R}^n$ e $\\mathbb{R}^m$, che relazione c'è tra la matrice rappresentativa e la matrice che definisce $L_A$?",
            back: "Coincidono! Se $B = E_n$ e $B' = E_m$, allora $M_{E_n, E_m}(L_A) = A$. Le colonne di $A$ sono le immagini dei vettori della base canonica: $A^{(j)} = L_A(\\vec{e}_j) = A\\vec{e}_j$, che è esattamente la $j$-esima colonna di $A$. Attenzione: questo non vale con basi diverse da quella canonica!"
        },
        {
            type: "domanda",
            front: "Come si calcola $M_{B,E_4}(F)$ se si conosce $M_{E_2,E_4}(F)$ e la base $B$ di $\\mathbb{R}^2$?",
            back: "Si usa la Proprietà 2 fattorizzando: $F = F \\circ \\text{Id}_{\\mathbb{R}^2}$, quindi $$M_{B,E_4}(F) = M_{E_2,E_4}(F) \\cdot M_{B,E_2}(\\text{Id})$$ La matrice $M_{B,E_2}(\\text{Id})$ ha come colonne i vettori della base $B$ espressi in coordinate canoniche."
        },
        {
            type: "domanda",
            front: "Qual è la matrice rappresentativa della derivata $D: \\mathbb{R}_3[t] \\to \\mathbb{R}_3[t]$ rispetto alla base canonica $E = \\{1, t, t^2, t^3\\}$?",
            back: "Si calcola colonna per colonna: $D(1) = 0$, $D(t) = 1$, $D(t^2) = 2t$, $D(t^3) = 3t^2$. $$M_{E,E}(D) = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 0 & 3 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$ La matrice non è invertibile (prima colonna nulla), coerentemente col fatto che $D$ non è iniettiva."
        },
        {
            type: "tranello",
            front: "La matrice rappresentativa ha dimensione $n \\times m$ o $m \\times n$, dove $\\dim(V) = n$ e $\\dim(V') = m$?",
            back: "Ha dimensione $m \\times n$ (righe = dimensione dello spazio di arrivo, colonne = dimensione dello spazio di partenza). Errore comune: invertire le dimensioni. Ricorda: ogni colonna rappresenta le coordinate di un'immagine in $V'$ (che ha dimensione $m$), quindi ogni colonna ha $m$ componenti."
        }
    ]
};

