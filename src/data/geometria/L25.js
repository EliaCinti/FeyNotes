const LESSON = {
    id: "L25", date: "Lezione 25 — 4 Mag 2026",
    title: "Proprietà degli Isomorfismi e Diagonalizzabilità",
    abstract: "Classificazione degli spazi vettoriali tramite isomorfismi, lo spazio Hom(V,V') e la sua struttura, formula del cambio di base A' = P⁻¹AP, matrici simili e introduzione alla diagonalizzabilità con esempi ed esempi di matrici non diagonalizzabili.",

    sections: [
        {
            id: "s25-isomorfismi-basi",
            type: "section",
            title: "Proprietà degli Isomorfismi",
            icon: "🔄",
            content: `<p>Riprendiamo il concetto di <strong>isomorfismo lineare</strong>. Un'applicazione lineare $F: V \\to V'$ è un isomorfismo se è biiettiva (iniettiva e suriettiva). La proprietà fondamentale è che gli isomorfismi <strong>preservano le basi</strong>.</p>
<p><strong>Proposizione.</strong> Sia $F: V \\to V'$ un isomorfismo. Un sistema $\\{v_1, \\dots, v_n\\}$ è una base di $V$ se e solo se $\\{F(v_1), \\dots, F(v_n)\\}$ è una base di $V'$.</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione (⇒): base di V implica base di V'",
                    content: `<p>Assumiamo che $\\{v_1, \\dots, v_n\\}$ sia una base di $V$. Dobbiamo verificare indipendenza lineare e generazione per $\\{F(v_1), \\dots, F(v_n)\\}$.</p>
<p><strong>Indipendenza lineare.</strong> Consideriamo una combinazione lineare nulla:</p>
<p>$$a_1 F(v_1) + \\dots + a_n F(v_n) = \\boldsymbol{0}_{V'}$$</p>
<p>Per la linearità di $F$:</p>
<p>$$F(a_1 v_1 + \\dots + a_n v_n) = \\boldsymbol{0}_{V'}$$</p>
<p>Poiché $F$ è <strong>iniettiva</strong>, l'unico vettore mandato in $\\boldsymbol{0}_{V'}$ è $\\boldsymbol{0}_V$, quindi:</p>
<p>$$a_1 v_1 + \\dots + a_n v_n = \\boldsymbol{0}_V$$</p>
<p>Ma $\\{v_1, \\dots, v_n\\}$ è una base, dunque linearmente indipendente, il che forza $a_1 = a_2 = \\dots = a_n = 0$.</p>
<p><strong>Generazione.</strong> Sia $v' \\in V'$ un vettore generico. Per la <strong>suriettività</strong> di $F$, esiste $v \\in V$ tale che $F(v) = v'$. Poiché $\\{v_1, \\dots, v_n\\}$ è base di $V$:</p>
<p>$$v = a_1 v_1 + \\dots + a_n v_n$$</p>
<p>Applicando $F$ e usando la linearità:</p>
<p>$$v' = F(v) = a_1 F(v_1) + \\dots + a_n F(v_n)$$</p>
<p>Quindi $\\{F(v_1), \\dots, F(v_n)\\}$ genera $V'$. ∎</p>`
                },
                {
                    subtitle: "Dimostrazione (⇐): base di V' implica base di V",
                    content: `<p>Assumiamo che $\\{F(v_1), \\dots, F(v_n)\\}$ sia una base di $V'$. Poiché $F$ è un isomorfismo, anche $F^{-1}: V' \\to V$ è un isomorfismo.</p>
<p>Applichiamo il risultato appena dimostrato (direzione $\\Rightarrow$) all'isomorfismo $F^{-1}$ e alla base $\\{F(v_1), \\dots, F(v_n)\\}$ di $V'$:</p>
<p>$$\\{F^{-1}(F(v_1)), \\dots, F^{-1}(F(v_n))\\} = \\{v_1, \\dots, v_n\\}$$</p>
<p>è una base di $V$. ∎</p>`
                }
            ]
        },
        {
            id: "s25-classificazione",
            type: "section",
            title: "Classificazione degli Spazi Vettoriali",
            icon: "🏷️",
            content: `<p>La relazione "essere isomorfi" tra spazi vettoriali è una <strong>relazione di equivalenza</strong>:</p>
<ul>
<li><strong>Riflessiva:</strong> $V \\cong V$ tramite l'identità $Id_V$.</li>
<li><strong>Simmetrica:</strong> se $F: V \\to V'$ è isomorfismo, allora $F^{-1}: V' \\to V$ è isomorfismo.</li>
<li><strong>Transitiva:</strong> se $F: V \\to V'$ e $G: V' \\to V''$ sono isomorfismi, la composizione $G \\circ F: V \\to V''$ è isomorfismo.</li>
</ul>
<p>Questa relazione ci permette di <strong>classificare completamente</strong> gli spazi vettoriali di dimensione finita.</p>`,
            subsections: [
                {
                    subtitle: "Teorema: ogni spazio n-dimensionale è isomorfo a ℝⁿ",
                    content: `<p><strong>Teorema.</strong> Ogni spazio vettoriale $V$ di dimensione finita $n$ è isomorfo a $\\mathbb{R}^n$.</p>
<p><strong>Dimostrazione.</strong> Fissiamo una base $B = \\{v_1, \\dots, v_n\\}$ di $V$. L'applicazione delle coordinate:</p>
<p>$$[\\cdot]_B : V \\to \\mathbb{R}^n, \\qquad v = a_1 v_1 + \\dots + a_n v_n \\mapsto \\begin{pmatrix} a_1 \\\\ \\vdots \\\\ a_n \\end{pmatrix}$$</p>
<p>è un isomorfismo. Infatti:</p>
<ul>
<li><strong>Linearità:</strong> le coordinate di $a \\cdot v + b \\cdot w$ sono $a \\cdot [v]_B + b \\cdot [w]_B$, per la definizione di combinazione lineare in termini di base.</li>
<li><strong>Iniettività:</strong> un vettore ha coordinate nulle se e solo se è il vettore nullo (per l'unicità della rappresentazione in base).</li>
<li><strong>Suriettività:</strong> per ogni $n$-upla $(a_1, \\dots, a_n) \\in \\mathbb{R}^n$, il vettore $a_1 v_1 + \\dots + a_n v_n \\in V$ ha esattamente quelle coordinate. ∎</li>
</ul>`
                },
                {
                    subtitle: "Corollario: la dimensione classifica tutto",
                    content: `<p><strong>Corollario.</strong> Due spazi vettoriali di dimensione finita sono isomorfi <strong>se e solo se</strong> hanno la stessa dimensione.</p>
<p><strong>Dimostrazione (⇒).</strong> Se $F: V \\to V'$ è un isomorfismo e $\\{v_1, \\dots, v_n\\}$ è base di $V$, per la proposizione precedente $\\{F(v_1), \\dots, F(v_n)\\}$ è base di $V'$. Dunque $\\dim(V') = n = \\dim(V)$.</p>
<p><strong>Dimostrazione (⇐).</strong> Se $\\dim(V) = \\dim(V') = n$, allora $V \\cong \\mathbb{R}^n$ e $V' \\cong \\mathbb{R}^n$. Per transitività e simmetria, $V \\cong V'$. ∎</p>
<p>Questo risultato è potentissimo: <strong>a meno di isomorfismo, per ogni $n \\in \\mathbb{N}_0$ esiste un unico spazio vettoriale di dimensione $n$</strong>. La mappa $[V] \\mapsto \\dim(V) \\in \\mathbb{N}_0$ è una biiezione tra classi di equivalenza e numeri naturali.</p>`
                }
            ]
        },
        {
            id: "s25-hom",
            type: "section",
            title: "Lo Spazio delle Applicazioni Lineari Hom(V, V')",
            icon: "📐",
            content: `<p>Siano $V$ e $V'$ spazi vettoriali. L'insieme $Hom(V, V')$ di tutte le applicazioni lineari da $V$ a $V'$ è esso stesso uno <strong>spazio vettoriale</strong> con le operazioni:</p>
<ul>
<li><strong>Somma:</strong> $(F + G)(v) = F(v) + G(v)$ per ogni $v \\in V$</li>
<li><strong>Prodotto per scalare:</strong> $(cF)(v) = c \\cdot F(v)$ per ogni $v \\in V$</li>
</ul>
<p>L'elemento nullo è l'applicazione nulla $v \\mapsto \\boldsymbol{0}_{V'}$, e l'opposto di $F$ è $(-F)(v) = -F(v)$.</p>`,
            subsections: [
                {
                    subtitle: "Isomorfismo con lo spazio delle matrici",
                    content: `<p><strong>Proposizione.</strong> Se $\\dim(V) = n$ e $\\dim(V') = m$, allora $Hom(V, V') \\cong M_{m,n}(\\mathbb{R})$.</p>
<p><strong>Dimostrazione.</strong> Fissiamo una base $B$ di $V$ e una base $B'$ di $V'$. L'applicazione che associa a ogni funzione lineare la sua matrice rappresentativa:</p>
<p>$$\\mathcal{M}_{B, B'}: Hom(V, V') \\to M_{m,n}(\\mathbb{R})$$</p>
<p>è lineare. Le proprietà di linearità:</p>
<p>$$\\mathcal{M}_{B, B'}(F+G) = \\mathcal{M}_{B, B'}(F) + \\mathcal{M}_{B, B'}(G)$$</p>
<p>$$\\mathcal{M}_{B, B'}(cF) = c \\cdot \\mathcal{M}_{B, B'}(F)$$</p>
<p>seguono direttamente dalla definizione di matrice rappresentativa: la $j$-esima colonna di $\\mathcal{M}_{B,B'}(F)$ è $[F(v_j)]_{B'}$, e le coordinate sono lineari.</p>
<p>Per mostrare che è un isomorfismo, costruiamo l'<strong>inversa</strong>. Definiamo:</p>
<p>$$\\mathcal{F}_{B, B'}(A) = [\\cdot]_{B'}^{-1} \\circ L_A \\circ [\\cdot]_B$$</p>
<p>dove $L_A: \\mathbb{R}^n \\to \\mathbb{R}^m$ è la moltiplicazione per $A$, e $[\\cdot]_{B'}^{-1}: \\mathbb{R}^m \\to V'$ è l'applicazione che, dato un vettore di coordinate $(a_1, \\dots, a_m)$, restituisce il vettore $a_1 w_1 + \\dots + a_m w_m \\in V'$ (con $B' = \\{w_1, \\dots, w_m\\}$).</p>
<p><strong>Verifica che sono inverse.</strong> Dato $F \\in Hom(V,V')$, per ogni $v \\in V$:</p>
<p>$$\\mathcal{F}_{B,B'}(\\mathcal{M}_{B,B'}(F))(v) = [\\cdot]_{B'}^{-1}\\bigl(\\mathcal{M}_{B,B'}(F) \\cdot [v]_B\\bigr) = [\\cdot]_{B'}^{-1}\\bigl([F(v)]_{B'}\\bigr) = F(v)$$</p>
<p>dove abbiamo usato che $\\mathcal{M}_{B,B'}(F) \\cdot [v]_B = [F(v)]_{B'}$ per definizione. Analogamente $\\mathcal{M}_{B,B'}(\\mathcal{F}_{B,B'}(A)) = A$, poiché $\\mathcal{F}_{B,B'}(A)$ manda $v_j$ nel vettore le cui coordinate rispetto a $B'$ sono la $j$-esima colonna di $A$. ∎</p>`
                },
                {
                    subtitle: "L'algebra degli endomorfismi End(V)",
                    content: `<p>Quando $V' = V$, lo spazio $Hom(V, V)$ si denota $End(V)$ (<strong>endomorfismi</strong> di $V$). Oltre alla somma e al prodotto per scalare, in $End(V)$ è definita anche la <strong>composizione</strong> di funzioni, che agisce come una moltiplicazione interna.</p>
<p>Questa struttura — spazio vettoriale con una moltiplicazione interna compatibile — si chiama <strong>algebra</strong>.</p>
<p>Fissata una base $B$ di $V$, l'isomorfismo:</p>
<p>$$\\mathcal{M}_B: End(V) \\to M_{n,n}(\\mathbb{R})$$</p>
<p>è un <strong>isomorfismo di algebre</strong>, poiché preserva anche la moltiplicazione:</p>
<p>$$\\mathcal{M}_B(G \\circ F) = \\mathcal{M}_B(G) \\cdot \\mathcal{M}_B(F)$$</p>`
                }
            ],
            formulas: [
                { label: "Isomorfismo Hom ↔ Matrici", latex: "\\mathcal{M}_{B,B'}: Hom(V,V') \\overset{\\sim}{\\to} M_{m,n}(\\mathbb{R})" },
                { label: "Composizione ↔ Prodotto", latex: "\\mathcal{M}_B(G \\circ F) = \\mathcal{M}_B(G) \\cdot \\mathcal{M}_B(F)" }
            ]
        },
        {
            id: "s25-cambio-base",
            type: "section",
            title: "Cambio di Base e Matrici Simili",
            icon: "🔀",
            content: `<p>Ci chiediamo: <strong>come cambia la matrice rappresentativa di un endomorfismo al variare della base?</strong></p>
<p>Sia $F \\in End(V)$ e siano $B, B'$ due basi di $V$. Scriviamo $F = Id_V \\circ F \\circ Id_V$ e applichiamo la proprietà fondamentale della composizione.</p>`,
            subsections: [
                {
                    subtitle: "Proprietà chiave: indici di base nella composizione",
                    content: `<p>Se $G: V_1 \\to V_2$ e $H: V_2 \\to V_3$ sono applicazioni lineari con basi $B_1, B_2, B_3$, allora:</p>
<p>$$\\mathcal{M}_{B_1, B_3}(H \\circ G) = \\mathcal{M}_{B_2, B_3}(H) \\cdot \\mathcal{M}_{B_1, B_2}(G)$$</p>
<p>Gli <strong>indici di base intermedi devono coincidere</strong>: la base di arrivo della prima matrice (a destra) deve essere uguale alla base di partenza della seconda (a sinistra).</p>`
                },
                {
                    subtitle: "Derivazione della formula A' = P⁻¹AP",
                    content: `<p>Applichiamo questa proprietà a $F = Id_V \\circ F \\circ Id_V$, dove vogliamo esprimere $F$ nella base $B'$. Inseriamo $B$ come base intermedia:</p>
<p>$$\\mathcal{M}_{B'}(F) = \\mathcal{M}_{B, B'}(Id_V) \\cdot \\mathcal{M}_B(F) \\cdot \\mathcal{M}_{B', B}(Id_V)$$</p>
<p>Poniamo:</p>
<ul>
<li>$A = \\mathcal{M}_B(F)$ — matrice di $F$ nella base $B$</li>
<li>$A' = \\mathcal{M}_{B'}(F)$ — matrice di $F$ nella base $B'$</li>
<li>$P = \\mathcal{M}_{B', B}(Id_V)$ — matrice di cambiamento di base da $B'$ a $B$</li>
</ul>
<p>Poiché $Id_V \\circ Id_V = Id_V$, abbiamo $\\mathcal{M}_{B',B}(Id_V) \\cdot \\mathcal{M}_{B,B'}(Id_V) = \\mathcal{M}_{B',B'}(Id_V) = I$, il che implica $\\mathcal{M}_{B,B'}(Id_V) = P^{-1}$. La formula diventa:</p>
<p>$$A' = P^{-1} A P$$</p>`
                },
                {
                    subtitle: "Matrici simili",
                    content: `<p><strong>Definizione.</strong> Due matrici quadrate $A, A' \\in M_{n,n}(\\mathbb{R})$ si dicono <strong>simili</strong> se esiste una matrice invertibile $P$ tale che $A' = P^{-1} A P$.</p>
<p>La similitudine è una <strong>relazione di equivalenza</strong>:</p>
<ul>
<li><strong>Riflessiva:</strong> $A = I^{-1} A I$</li>
<li><strong>Simmetrica:</strong> se $A' = P^{-1}AP$, allora $A = (P^{-1})^{-1} A' (P^{-1})$</li>
<li><strong>Transitiva:</strong> se $A' = P^{-1}AP$ e $A'' = Q^{-1}A'Q$, allora $A'' = (PQ)^{-1} A (PQ)$</li>
</ul>
<p><strong>Significato geometrico:</strong> due matrici sono simili se e solo se rappresentano lo <strong>stesso endomorfismo</strong> rispetto a basi diverse.</p>`
                }
            ],
            formulas: [
                { label: "Cambio di base per endomorfismi", latex: "A' = P^{-1} A P" },
                { label: "Matrice di cambio base", latex: "P = \\mathcal{M}_{B', B}(Id_V)" }
            ]
        },
        {
            id: "s25-diagonalizzabilita",
            type: "section",
            title: "Diagonalizzabilità",
            icon: "⬜",
            content: `<p><strong>Definizione.</strong> Un endomorfismo $F: V \\to V$ si dice <strong>diagonalizzabile</strong> se esiste una base $B$ di $V$ tale che $\\mathcal{M}_B(F)$ sia una matrice diagonale.</p>
<p><strong>Definizione equivalente.</strong> Una matrice quadrata $A$ si dice <strong>diagonalizzabile</strong> se è simile a una matrice diagonale, cioè se esiste $P$ invertibile tale che $P^{-1}AP$ sia diagonale.</p>
<p>Le due definizioni sono equivalenti: un endomorfismo $F$ è diagonalizzabile se e solo se una (e quindi ogni) sua matrice rappresentativa è diagonalizzabile.</p>`,
            subsections: [
                {
                    subtitle: "Esempio 1: la riflessione nel piano",
                    content: `<p>Consideriamo la <strong>riflessione</strong> $F$ nel piano rispetto a una retta $r$. Scegliamo la base $B = \\{e_1, e_2\\}$ dove $e_1$ è direttore di $r$ e $e_2$ è ortogonale a $r$:</p>
<p>$$F(e_1) = e_1 \\qquad F(e_2) = -e_2$$</p>
<p>La matrice rappresentativa è:</p>
<p>$$\\mathcal{M}_B(F) = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Riflessione rispetto alla retta r</strong></p>
  <p><em>Asse orizzontale: retta $r$. Vettore $e_1$ lungo $r$ (blu, freccia solida) con etichetta "$e_1 = F(e_1)$" (resta invariato). Vettore $e_2$ verso l'alto (rosso, freccia solida). Vettore $F(e_2) = -e_2$ verso il basso (rosso, freccia tratteggiata). Origine $O$ al centro.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Il punto chiave è la <strong>scelta della base</strong>: $e_1$ viene "fissato" dalla riflessione, $e_2$ viene "ribaltato". Ogni vettore di base viene semplicemente <strong>scalato</strong> ($\\times 1$ per $e_1$ e $\\times(-1)$ per $e_2$), il che corrisponde a una matrice diagonale. Questi vettori si chiamano <strong>autovettori</strong>.</p>`
                },
                {
                    subtitle: "Esempio 2: diagonalizzazione di un operatore su ℝ³",
                    content: `<p>Consideriamo $F: \\mathbb{R}^3 \\to \\mathbb{R}^3$ definito da:</p>
<p>$$F(x,y,z) = (3x+3y-z, \\; -4x-2y+2z, \\; -2x+2y+2z)$$</p>
<p>La matrice nella base canonica è $A = \\begin{pmatrix} 3 & 3 & -1 \\\\ -4 & -2 & 2 \\\\ -2 & 2 & 2 \\end{pmatrix}$.</p>
<p>Consideriamo la base $B = \\{v_1, v_2, v_3\\}$ con $v_1 = (-2,1,-3)$, $v_2 = (1,0,2)$, $v_3 = (1,1,4)$. Calcoliamo le immagini:</p>
<p>$$F(v_1) = F(-2,1,-3) = (0,0,0) = 0 \\cdot v_1$$</p>
<p>$$F(v_2) = F(1,0,2) = (1,0,2) = 1 \\cdot v_2$$</p>
<p>$$F(v_3) = F(1,1,4) = (2,2,8) = 2 \\cdot v_3$$</p>
<p>Ogni vettore di base viene semplicemente <strong>scalato</strong>! La matrice rappresentativa è diagonale:</p>
<p>$$\\mathcal{M}_B(F) = D = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$$</p>
<p>Quindi $F$ (e anche $A$) è diagonalizzabile.</p>`
                },
                {
                    subtitle: "Verifica: AP = PD",
                    content: `<p>La matrice di cambio base è $P = \\begin{pmatrix} -2 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ -3 & 2 & 4 \\end{pmatrix}$ (colonne = coordinate dei $v_i$ nella base canonica).</p>
<p>La relazione $A = PDP^{-1}$ equivale a $AP = PD$. Verifichiamolo calcolando la prima colonna di $AP$:</p>
<p>$$A \\cdot \\begin{pmatrix} -2 \\\\ 1 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 3(-2)+3(1)+(-1)(-3) \\\\ -4(-2)+(-2)(1)+2(-3) \\\\ -2(-2)+2(1)+2(-3) \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$</p>
<p>Analogamente per le altre colonne. Il risultato completo:</p>
<p>$$AP = \\begin{pmatrix} 0 & 1 & 2 \\\\ 0 & 0 & 2 \\\\ 0 & 2 & 8 \\end{pmatrix}$$</p>
<p>$$PD = \\begin{pmatrix} -2 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ -3 & 2 & 4 \\end{pmatrix} \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 & 2 \\\\ 0 & 0 & 2 \\\\ 0 & 2 & 8 \\end{pmatrix}$$</p>
<p>$AP = PD$ ✓, confermando $A = PDP^{-1}$.</p>`
                },
                {
                    subtitle: "Applicazione: potenze di matrici",
                    content: `<p>La diagonalizzazione è utilissima per calcolare <strong>potenze</strong>. Se $A = PDP^{-1}$:</p>
<p>$$A^h = (PDP^{-1})^h = PD^h P^{-1}$$</p>
<p>dove i fattori intermedi $P^{-1}P = I$ si cancellano. La potenza di una matrice diagonale è banale:</p>
<p>$$D^h = \\begin{pmatrix} 0^h & 0 & 0 \\\\ 0 & 1^h & 0 \\\\ 0 & 0 & 2^h \\end{pmatrix} = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2^h \\end{pmatrix} \\quad (h \\ge 1)$$</p>
<p>Si riduce tutto a un prodotto di tre matrici, di cui quella centrale è semplicissima.</p>`
                }
            ],
            formulas: [
                { label: "Diagonalizzazione", latex: "A = P D P^{-1}" },
                { label: "Potenza h-esima", latex: "A^h = P D^h P^{-1}" }
            ]
        },
        {
            id: "s25-non-diagonalizzabile",
            type: "alert_box",
            title: "⚠️ Non tutte le matrici sono diagonalizzabili!",
            icon: "🚫",
            content: `<p>Consideriamo la matrice $A = \\begin{pmatrix} 1 & -1 \\\\ 1 & -1 \\end{pmatrix}$.</p>
<p>Le due righe sono uguali, quindi $\\text{rk}(A) = 1$. L'applicazione $F_A(x,y) = (x-y, \\, x-y)$ ha:</p>
<ul>
<li>$\\mathrm{Im}(F_A) = \\{(t,t) : t \\in \\mathbb{R}\\}$ — la retta $y = x$</li>
<li>$\\ker(F_A) = \\{(t,t) : t \\in \\mathbb{R}\\}$ — la stessa retta!</li>
</ul>
<p><strong>Perché non è diagonalizzabile?</strong> Per diagonalizzare servirebbe una base $\\{w_1, w_2\\}$ con $F_A(w_i) = \\lambda_i w_i$ (autovettori). L'unico autovalore possibile è $\\lambda = 0$ (nucleo unidimensionale). Per $\\lambda \\neq 0$ servirebbe $F_A(w) = \\lambda w$ con $\\lambda w$ sulla retta $y = x$, il che forza $w$ sulla stessa retta, cioè nel nucleo: <strong>contraddizione</strong> con $\\lambda \\neq 0$.</p>
<p>L'autospazio è unidimensionale: non si trovano 2 autovettori linearmente indipendenti in $\\mathbb{R}^2$. La matrice <strong>non è diagonalizzabile</strong>.</p>
<p>Nelle prossime lezioni vedremo un metodo sistematico basato sul <strong>polinomio caratteristico</strong>.</p>`
        },
        {
            id: "s25-riepilogo",
            type: "note_box",
            title: "📝 Riepilogo: la grande architettura",
            icon: "🏗️",
            content: `<p>In questa lezione abbiamo costruito un'architettura concettuale potente:</p>
<ol>
<li><strong>Classificazione:</strong> la dimensione classifica completamente gli spazi vettoriali a meno di isomorfismo.</li>
<li><strong>$Hom(V,V') \\cong M_{m,n}(\\mathbb{R})$:</strong> studiare applicazioni lineari equivale a studiare matrici (una volta fissate le basi).</li>
<li><strong>$A' = P^{-1}AP$:</strong> cambiare base in un endomorfismo corrisponde a coniugare la matrice. La similitudine è una relazione di equivalenza.</li>
<li><strong>Diagonalizzabilità:</strong> trovare una base in cui la matrice è diagonale — il caso più semplice e computazionalmente potente. Non sempre possibile!</li>
</ol>`
        },
        {
            id: "s25-orale-domanda",
            type: "oral_box",
            title: "🎤 Domanda tipica d'esame orale",
            icon: "🎤",
            content: `<p><strong>"Enunci e dimostri che due spazi vettoriali di dimensione finita sono isomorfi se e solo se hanno la stessa dimensione."</strong></p>
<p>Questa domanda richiede di enunciare il corollario e poi dimostrare entrambe le direzioni. Ricorda:</p>
<ul>
<li><strong>(⇒)</strong> usa la proposizione sulle basi: un isomorfismo manda basi in basi.</li>
<li><strong>(⇐)</strong> usa il fatto che entrambi sono isomorfi a $\\mathbb{R}^n$ e la transitività.</li>
</ul>
<p>Un'altra domanda frequente: <em>"Perché $A' = P^{-1}AP$? Derivi la formula."</em> Parti da $F = Id \\circ F \\circ Id$ e usa la proprietà della composizione con le basi intermedie.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Quando due spazi vettoriali si dicono isomorfi?",
            back: "Due spazi vettoriali $V$ e $V'$ sono isomorfi se esiste un'applicazione lineare $F: V \\to V'$ che sia biiettiva (iniettiva e suriettiva). Tale $F$ si chiama isomorfismo."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che un isomorfismo manda basi in basi.",
            back: "Sia $F: V \\to V'$ isomorfismo e $\\{v_1, \\dots, v_n\\}$ base di $V$. **Indipendenza:** se $\\sum a_i F(v_i) = \\boldsymbol{0}$, per linearità $F(\\sum a_i v_i) = \\boldsymbol{0}$; per iniettività $\\sum a_i v_i = \\boldsymbol{0}$; per indipendenza dei $v_i$, tutti $a_i = 0$. **Generazione:** per ogni $v' \\in V'$, per suriettività esiste $v = \\sum a_i v_i$ con $F(v) = v'$, dunque $v' = \\sum a_i F(v_i)$."
        },
        {
            type: "domanda",
            front: "Due spazi vettoriali di dimensione finita sono isomorfi se e solo se...?",
            back: "...hanno la **stessa dimensione**. (⇒) Un isomorfismo manda basi in basi, quindi le dimensioni coincidono. (⇐) Se $\\dim V = \\dim V' = n$, allora $V \\cong \\mathbb{R}^n \\cong V'$ per transitività."
        },
        {
            type: "definizione",
            front: "Cos'è Hom(V, V') e che struttura ha?",
            back: "$Hom(V, V')$ è l'insieme di tutte le applicazioni lineari da $V$ a $V'$. Con la somma $(F+G)(v) = F(v) + G(v)$ e il prodotto per scalare $(cF)(v) = cF(v)$, è uno **spazio vettoriale**. Se $\\dim V = n$ e $\\dim V' = m$, allora $Hom(V,V') \\cong M_{m,n}(\\mathbb{R})$."
        },
        {
            type: "definizione",
            front: "Cos'è End(V) e perché si chiama 'algebra'?",
            back: "$End(V) = Hom(V, V)$ è lo spazio degli endomorfismi. Oltre a somma e prodotto per scalare, ha anche la **composizione** come moltiplicazione interna. Questa struttura (spazio vettoriale + moltiplicazione compatibile) si chiama **algebra**. È isomorfo come algebra a $M_{n,n}(\\mathbb{R})$."
        },
        {
            type: "formula",
            front: "Scrivi la formula del cambio di base per un endomorfismo e spiega cosa rappresenta P.",
            back: "$$A' = P^{-1} A P$$ dove $A = \\mathcal{M}_B(F)$, $A' = \\mathcal{M}_{B'}(F)$, e $P = \\mathcal{M}_{B',B}(Id_V)$ è la matrice di cambiamento di base da $B'$ a $B$ (le colonne di $P$ sono le coordinate dei vettori di $B'$ espressi nella base $B$)."
        },
        {
            type: "definizione",
            front: "Quando due matrici si dicono simili? Che relazione è?",
            back: "$A$ e $A'$ sono **simili** se esiste $P$ invertibile tale che $A' = P^{-1}AP$. È una relazione di equivalenza (riflessiva: $P = I$; simmetrica: $P \\to P^{-1}$; transitiva: $P, Q \\to PQ$). Due matrici sono simili ⟺ rappresentano lo stesso endomorfismo in basi diverse."
        },
        {
            type: "definizione",
            front: "Cosa significa che una matrice (o un endomorfismo) è diagonalizzabile?",
            back: "Un endomorfismo $F$ è **diagonalizzabile** se esiste una base $B$ in cui $\\mathcal{M}_B(F)$ è diagonale. Equivalentemente, una matrice $A$ è diagonalizzabile se è simile a una matrice diagonale: $\\exists P$ invertibile t.c. $P^{-1}AP = D$ diagonale."
        },
        {
            type: "domanda",
            front: "Perché la diagonalizzazione è utile per calcolare potenze di matrici?",
            back: "Se $A = PDP^{-1}$, allora $A^h = PD^hP^{-1}$. La potenza di una matrice diagonale è banale: basta elevare a potenza ogni elemento diagonale. Si riduce il calcolo di $A^h$ a un prodotto di tre matrici."
        },
        {
            type: "tranello",
            front: "La matrice $A = \\begin{pmatrix} 1 & -1 \\\\ 1 & -1 \\end{pmatrix}$ è diagonalizzabile?",
            back: "**No!** Ha rango 1, nucleo e immagine coincidenti (la retta $y = x$). L'unico autovalore è $\\lambda = 0$ con autospazio unidimensionale. Per $\\lambda \\neq 0$, ogni autovettore dovrebbe stare nell'immagine (retta $y=x$) ma questa coincide col nucleo → contraddizione. Non si trovano 2 autovettori indipendenti in $\\mathbb{R}^2$."
        },
        {
            type: "dimostrazione",
            front: "Deriva la formula A' = P⁻¹AP dal concetto di composizione.",
            back: "Scrivi $F = Id_V \\circ F \\circ Id_V$. Usa la proprietà $\\mathcal{M}_{B_1,B_3}(H \\circ G) = \\mathcal{M}_{B_2,B_3}(H) \\cdot \\mathcal{M}_{B_1,B_2}(G)$ con basi intermedie: $\\mathcal{M}_{B'}(F) = \\mathcal{M}_{B,B'}(Id) \\cdot \\mathcal{M}_B(F) \\cdot \\mathcal{M}_{B',B}(Id)$. Ponendo $P = \\mathcal{M}_{B',B}(Id)$, si ha $\\mathcal{M}_{B,B'}(Id) = P^{-1}$ (poiché $P \\cdot P^{-1} = \\mathcal{M}_{B',B'}(Id) = I$), da cui $A' = P^{-1}AP$."
        }
    ]
};

