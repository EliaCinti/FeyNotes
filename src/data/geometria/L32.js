const LESSON = {
    id: "L32", date: "Lezione 27 — 07 Mag 2026",
    title: "Molteplicità Algebrica e Geometrica e Algoritmo di Diagonalizzazione",
    abstract: "Introduzione delle molteplicità algebrica e geometrica di un autovalore, dimostrazione della relazione fondamentale tra le due, e derivazione dell'algoritmo completo di diagonalizzazione con esempio applicativo.",

    sections: [
        {
            id: "s32-riepilogo",
            type: "section",
            title: "Riepilogo dei concetti chiave",
            icon: "🔄",
            content: `<p>Prima di introdurre le nuove nozioni, richiamiamo brevemente i concetti fondamentali dalla lezione precedente.</p>
<p><strong>Endomorfismo:</strong> Sia $F: V \\to V$ un operatore lineare su uno spazio vettoriale $V$. Poiché dominio e codominio coincidono, $F$ è detto <strong>endomorfismo</strong>.</p>
<p><strong>Esempio fondamentale:</strong> Data una matrice $A \\in M_{n \\times n}(\\mathbb{R})$, l'applicazione $L_A: \\mathbb{R}^n \\to \\mathbb{R}^n$ definita da $L_A(\\vec{x}) = A\\vec{x}$ è un endomorfismo. La sua matrice rappresentativa rispetto alla base canonica $E$ è proprio $A$: $M_{E,E}(L_A) = A$.</p>`,
            subsections: [
                {
                    subtitle: "Autovalori e autovettori",
                    content: `<p>Sia $F: V \\to V$ un endomorfismo e $\\lambda \\in \\mathbb{R}$. Diciamo che $\\lambda$ è un <strong>autovalore</strong> per $F$ se esiste $\\vec{v} \\in V$, con $\\vec{v} \\neq \\vec{0}$, tale che:</p>
<p>$$F(\\vec{v}) = \\lambda \\vec{v}$$</p>
<p>Il vettore $\\vec{v}$ si chiama <strong>autovettore</strong> di $F$ associato all'autovalore $\\lambda$.</p>`
                },
                {
                    subtitle: "Diagonalizzabilità",
                    content: `<p><strong>Endomorfismo diagonalizzabile:</strong> $F: V \\to V$ si dice <strong>diagonalizzabile</strong> se esiste una base $\\mathcal{A}$ di $V$ tale che $M_{\\mathcal{A},\\mathcal{A}}(F)$ è una matrice diagonale. Una base che diagonalizza $F$ deve essere necessariamente composta da autovettori di $F$.</p>
<p><strong>Matrice diagonalizzabile:</strong> Una matrice quadrata $A$ si dice <strong>diagonalizzabile</strong> se è simile a una matrice diagonale, cioè se esiste una matrice invertibile $P$ tale che $P^{-1}AP$ è diagonale.</p>`
                },
                {
                    subtitle: "Collegamento matrici–endomorfismi",
                    content: `<p><strong>Proposizione:</strong> Una matrice $A$ è diagonalizzabile se e solo se l'endomorfismo associato $L_A$ è diagonalizzabile.</p>
<div class="note-box" style="border-left: 3px solid var(--accent); padding: 10px 15px; margin: 15px 0; background: var(--bg-alt, rgba(100,100,255,0.05)); border-radius: 4px;">
<p><strong>🔗 Perché?</strong> Diagonalizzare $L_A$ significa trovare una base $\\mathcal{A}$ di autovettori: rispetto a quella base, la matrice rappresentativa è diagonale con gli autovalori sulla diagonale. La matrice di cambiamento di base $P$ (le cui colonne sono gli autovettori) è esattamente la matrice invertibile tale che $P^{-1}AP = D$. Dunque "trovare una base di autovettori per $L_A$" e "trovare $P$ che diagonalizza $A$" sono lo stesso problema.</p>
</div>`
                },
                {
                    subtitle: "Come trovare gli autovalori",
                    content: `<p><strong>Proposizione:</strong> Un numero $\\lambda \\in \\mathbb{R}$ è un autovalore di $F$ se e solo se $\\det(A - \\lambda I) = 0$, dove $A$ è una qualsiasi matrice rappresentativa di $F$.</p>
<p>Questo conduce al concetto di <strong>polinomio caratteristico</strong>:</p>
<p>$$p_F(t) = \\det(A - tI)$$</p>
<p>Il polinomio caratteristico <strong>non dipende dalla base scelta</strong>: matrici simili hanno lo stesso polinomio caratteristico. Gli autovalori di $F$ sono le radici di $p_F(t)$, e il loro insieme si chiama <strong>spettro</strong> di $F$, denotato $\\operatorname{spec}(F)$.</p>`
                }
            ]
        },
        {
            id: "s32-molt-algebrica",
            type: "section",
            title: "Molteplicità Algebrica",
            icon: "🔢",
            content: `<p>Ogni autovalore $\\lambda$ di un endomorfismo possiede due tipi di molteplicità. La prima riguarda il suo "peso" come radice del polinomio caratteristico.</p>`,
            subsections: [
                {
                    subtitle: "Definizione",
                    content: `<p>Sia $\\lambda$ un autovalore dell'endomorfismo $F$. La <strong>molteplicità algebrica</strong> di $\\lambda$, denotata $m_a(\\lambda)$, è la <strong>massima potenza</strong> $h$ tale che $(t - \\lambda)^h$ divide il polinomio caratteristico $p_F(t)$.</p>
<p>In pratica, fattorizzando con Ruffini iterato:</p>
<p>$$p_F(t) = (t - \\lambda)^h \\, q_h(t), \\quad \\text{con } q_h(\\lambda) \\neq 0$$</p>
<p>L'esponente $h$ è la molteplicità algebrica di $\\lambda$.</p>`
                },
                {
                    subtitle: "Esempi",
                    content: `<p><strong>Esempio 1.</strong> Se $p_F(t) = t^3(t-8)^5$, gli autovalori sono $0$ e $8$ con:</p>
<p>$$m_a(0) = 3, \\quad m_a(8) = 5$$</p>
<p><strong>Esempio 2.</strong> Se $p_F(t) = -t^3 - 2t^2 - t$, fattorizziamo:</p>
<p>$$p_F(t) = -t(t^2 + 2t + 1) = -t(t+1)^2$$</p>
<p>Gli autovalori sono $0$ e $-1$, con:</p>
<p>$$m_a(0) = 1, \\quad m_a(-1) = 2$$</p>
<p><strong>Esempio 3.</strong> Data la matrice diagonale:</p>
<p>$$D = \\begin{pmatrix} -5 & 0 & 0 & 0 \\\\ 0 & -2 & 0 & 0 \\\\ 0 & 0 & -2 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}$$</p>
<p>Il polinomio caratteristico è:</p>
<p>$$p_F(t) = (-5-t)(-2-t)^2(1-t) = (t+5)(t+2)^2(t-1)$$</p>
<p>Lo spettro è $\\operatorname{spec}(F) = \\{-5,\\, -2,\\, 1\\}$ con:</p>
<p>$$m_a(-5) = 1, \\quad m_a(-2) = 2, \\quad m_a(1) = 1$$</p>`
                },
                {
                    subtitle: "Osservazione per matrici diagonali",
                    content: `<p>Se un endomorfismo $F$ è diagonalizzabile e $D$ è una matrice diagonale che lo rappresenta, la molteplicità algebrica di un autovalore $\\lambda$ è esattamente il <strong>numero di volte che $\\lambda$ compare sulla diagonale principale</strong> di $D$.</p>`
                }
            ],
            formulas: [
                { label: "Molteplicità algebrica", latex: "p_F(t) = (t - \\lambda)^{m_a(\\lambda)} \\, q(t), \\quad q(\\lambda) \\neq 0" }
            ]
        },
        {
            id: "s32-molt-geometrica",
            type: "section",
            title: "Molteplicità Geometrica",
            icon: "📐",
            content: `<p>La seconda nozione di molteplicità è legata alla dimensione dell'autospazio, cioè allo "spazio di manovra" degli autovettori.</p>`,
            subsections: [
                {
                    subtitle: "Autospazio",
                    content: `<p>Sia $\\lambda$ un autovalore di $F$. L'<strong>autospazio</strong> relativo a $\\lambda$, denotato $V_\\lambda$, è:</p>
<p>$$V_\\lambda = \\{\\vec{v} \\in V \\mid F(\\vec{v}) = \\lambda \\vec{v}\\}$$</p>
<p>Contiene tutti gli autovettori associati a $\\lambda$ <strong>più il vettore nullo</strong>.</p>
<p><strong>Proposizione:</strong> L'autospazio $V_\\lambda$ è un sottospazio vettoriale di $V$ e coincide con il nucleo:</p>
<p>$$V_\\lambda = \\ker(F - \\lambda \\operatorname{Id}_V)$$</p>
<p><strong>Dimostrazione:</strong> $\\vec{v} \\in V_\\lambda$ se e solo se $F(\\vec{v}) = \\lambda \\vec{v}$, cioè $F(\\vec{v}) - \\lambda \\vec{v} = \\vec{0}$, cioè $(F - \\lambda \\operatorname{Id}_V)(\\vec{v}) = \\vec{0}$, cioè $\\vec{v} \\in \\ker(F - \\lambda \\operatorname{Id}_V)$. Poiché il nucleo di un operatore lineare è sempre un sottospazio, anche $V_\\lambda$ lo è. $\\square$</p>`
                },
                {
                    subtitle: "Definizione di molteplicità geometrica",
                    content: `<p>La <strong>molteplicità geometrica</strong> di un autovalore $\\lambda$, denotata $m_g(\\lambda)$, è la dimensione del corrispondente autospazio:</p>
<p>$$m_g(\\lambda) = \\dim(V_\\lambda)$$</p>
<p>Essa rappresenta il <strong>massimo numero di autovettori linearmente indipendenti</strong> associati a $\\lambda$.</p>`
                },
                {
                    subtitle: "Calcolo pratico tramite il rango",
                    content: `<p>Per il teorema del rango-nullità:</p>
<p>$$m_g(\\lambda) = \\dim(\\ker(F - \\lambda \\operatorname{Id}_V)) = n - \\operatorname{rank}(A - \\lambda I)$$</p>
<p>dove $A$ è una matrice rappresentativa di $F$ e $n = \\dim(V)$.</p>
<p><strong>In pratica:</strong> si costruisce la matrice $A - \\lambda I$, si riduce a scala per trovarne il rango, e si calcola $m_g(\\lambda) = n - \\operatorname{rank}(A - \\lambda I)$.</p>`
                },
                {
                    subtitle: "Esempio di calcolo di m_g",
                    content: `<p>Consideriamo la matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ in $\\mathbb{R}^2$. Il polinomio caratteristico è:</p>
<p>$$p_F(t) = \\det(A - tI) = (2-t)^2$$</p>
<p>Dunque $\\lambda = 2$ è l'unico autovalore, con $m_a(2) = 2$.</p>
<p>Calcoliamo $m_g(2)$. Costruiamo:</p>
<p>$$A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$$</p>
<p>Questa matrice è già in forma a scala: ha <strong>una</strong> riga non nulla, quindi $\\operatorname{rank}(A - 2I) = 1$.</p>
<p>$$m_g(2) = n - \\operatorname{rank}(A - 2I) = 2 - 1 = 1$$</p>
<p>Poiché $m_g(2) = 1 \\neq 2 = m_a(2)$, questa matrice <strong>non è diagonalizzabile</strong>.</p>`
                }
            ],
            formulas: [
                { label: "Molteplicità geometrica", latex: "m_g(\\lambda) = \\dim(V_\\lambda) = n - \\operatorname{rank}(A - \\lambda I)" }
            ]
        },
        {
            id: "s32-det-blocchi",
            type: "note_box",
            title: "Proprietà: determinante di una matrice a blocchi triangolare",
            icon: "🧱",
            content: `<p>Nella dimostrazione che segue useremo una proprietà fondamentale che è bene ricordare esplicitamente.</p>
<p><strong>Proprietà:</strong> Se $M$ è una matrice a blocchi <strong>triangolare superiore</strong> (o inferiore):</p>
<p>$$M = \\begin{pmatrix} A & C \\\\ 0 & B \\end{pmatrix}$$</p>
<p>allora $\\det(M) = \\det(A) \\cdot \\det(B)$.</p>
<p><strong>Esempio:</strong> Consideriamo la matrice $3 \\times 3$:</p>
<p>$$M = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 5 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$$</p>
<p>Possiamo scomporla con blocchi $A = (2)$, $B = \\begin{pmatrix} 5 & 7 \\\\ 0 & 4 \\end{pmatrix}$. Si ha $\\det(M) = 2 \\cdot (5 \\cdot 4 - 0) = 2 \\cdot 20 = 40$, che coincide col prodotto degli elementi diagonali $2 \\cdot 5 \\cdot 4 = 40$.</p>
<p>Questa proprietà si generalizza a qualunque numero di blocchi diagonali.</p>`
        },
        {
            id: "s32-relazione-molt",
            type: "section",
            title: "Relazione tra Molteplicità",
            icon: "⚖️",
            content: `<p>La seguente proposizione stabilisce la disuguaglianza fondamentale che lega le due molteplicità.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato",
                    content: `<p><strong>Proposizione:</strong> Per ogni autovalore $\\lambda$ di un endomorfismo $F$, si ha:</p>
<p>$$1 \\le m_g(\\lambda) \\le m_a(\\lambda)$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Sia $h = m_g(\\lambda) = \\dim(V_\\lambda)$. Poiché $\\lambda$ è un autovalore, esiste almeno un autovettore, dunque $V_\\lambda$ non è banale e $h \\ge 1$.</p>
<p>Prendiamo una base $\\{\\vec{v}_1, \\dots, \\vec{v}_h\\}$ per $V_\\lambda$ e completiamola a una base di tutto $V$:</p>
<p>$$\\mathcal{B} = \\{\\vec{v}_1, \\dots, \\vec{v}_h, \\vec{v}_{h+1}, \\dots, \\vec{v}_n\\}$$</p>
<p>Per i primi $h$ vettori si ha $F(\\vec{v}_i) = \\lambda \\vec{v}_i$, quindi la matrice $M_{\\mathcal{B},\\mathcal{B}}(F)$ ha la struttura a blocchi:</p>
<p>$$M_{\\mathcal{B},\\mathcal{B}}(F) = \\begin{pmatrix} \\lambda I_h & C \\\\ 0 & E \\end{pmatrix}$$</p>
<p>dove $I_h$ è l'identità $h \\times h$, $C$ è un blocco $h \\times (n-h)$, ed $E$ è il blocco $(n-h) \\times (n-h)$ in basso a destra (la "parte restante" della matrice, <strong>non</strong> la matrice diagonale $D$ che useremo dopo).</p>
<p>Calcoliamo il polinomio caratteristico. La matrice $M_{\\mathcal{B},\\mathcal{B}}(F) - tI$ è:</p>
<p>$$\\begin{pmatrix} (\\lambda - t)I_h & C \\\\ 0 & E - tI_{n-h} \\end{pmatrix}$$</p>
<p>Questa è triangolare superiore a blocchi, quindi per la proprietà dei determinanti a blocchi:</p>
<p>$$p_F(t) = \\det((\\lambda - t)I_h) \\cdot \\det(E - tI_{n-h}) = (\\lambda - t)^h \\cdot \\det(E - tI_{n-h})$$</p>
<p>Questo mostra che $(t - \\lambda)^h$ divide $p_F(t)$. Poiché $m_a(\\lambda)$ è la <strong>massima</strong> potenza di $(t - \\lambda)$ che divide $p_F(t)$, deve essere:</p>
<p>$$h \\le m_a(\\lambda) \\quad \\Rightarrow \\quad m_g(\\lambda) \\le m_a(\\lambda) \\quad \\square$$</p>`
                }
            ],
            formulas: [
                { label: "Disuguaglianza fondamentale", latex: "1 \\le m_g(\\lambda) \\le m_a(\\lambda)" }
            ]
        },
        {
            id: "s32-lemma-autovettori-li",
            type: "alert_box",
            title: "Lemma: Autovettori di autovalori distinti sono linearmente indipendenti",
            icon: "🔑",
            content: `<p>Questo risultato è il <strong>cuore nascosto</strong> dell'algoritmo di diagonalizzazione. Senza di esso, non possiamo garantire che l'unione delle basi degli autospazi sia una base dello spazio.</p>
<p><strong>Lemma:</strong> Siano $\\lambda_1, \\dots, \\lambda_k$ autovalori <strong>distinti</strong> di un endomorfismo $F$, e per ogni $i$ sia $\\{\\vec{v}_1^{(i)}, \\dots, \\vec{v}_{r_i}^{(i)}\\}$ una base dell'autospazio $V_{\\lambda_i}$. Allora l'unione di tutte queste basi è un insieme di vettori <strong>linearmente indipendenti</strong>.</p>
<p><strong>Dimostrazione (caso semplificato con un autovettore per autovalore):</strong> Mostriamo il caso in cui prendiamo un singolo autovettore $\\vec{v}_i$ per ciascun autovalore $\\lambda_i$. Procedendo per induzione su $k$:</p>
<p><strong>Base ($k=1$):</strong> Un singolo autovettore $\\vec{v}_1 \\neq \\vec{0}$ è banalmente linearmente indipendente.</p>
<p><strong>Passo induttivo:</strong> Supponiamo che $\\vec{v}_1, \\dots, \\vec{v}_{k-1}$ (relativi a $\\lambda_1, \\dots, \\lambda_{k-1}$ distinti) siano linearmente indipendenti. Consideriamo una combinazione:</p>
<p>$$c_1 \\vec{v}_1 + c_2 \\vec{v}_2 + \\dots + c_k \\vec{v}_k = \\vec{0} \\qquad (*)$$</p>
<p>Applichiamo $F$ a entrambi i membri:</p>
<p>$$c_1 \\lambda_1 \\vec{v}_1 + c_2 \\lambda_2 \\vec{v}_2 + \\dots + c_k \\lambda_k \\vec{v}_k = \\vec{0} \\qquad (**)$$</p>
<p>Moltiplichiamo $(*)$ per $\\lambda_k$:</p>
<p>$$c_1 \\lambda_k \\vec{v}_1 + c_2 \\lambda_k \\vec{v}_2 + \\dots + c_k \\lambda_k \\vec{v}_k = \\vec{0} \\qquad (***)$$</p>
<p>Sottraendo $(***)$ da $(**)$:</p>
<p>$$c_1(\\lambda_1 - \\lambda_k)\\vec{v}_1 + c_2(\\lambda_2 - \\lambda_k)\\vec{v}_2 + \\dots + c_{k-1}(\\lambda_{k-1} - \\lambda_k)\\vec{v}_{k-1} = \\vec{0}$$</p>
<p>Per ipotesi induttiva, $\\vec{v}_1, \\dots, \\vec{v}_{k-1}$ sono linearmente indipendenti, quindi $c_i(\\lambda_i - \\lambda_k) = 0$ per ogni $i = 1, \\dots, k-1$. Poiché gli autovalori sono <strong>distinti</strong>, $\\lambda_i - \\lambda_k \\neq 0$, dunque $c_i = 0$ per $i = 1, \\dots, k-1$. Tornando a $(*)$: $c_k \\vec{v}_k = \\vec{0}$, e poiché $\\vec{v}_k \\neq \\vec{0}$, si ha $c_k = 0$. $\\square$</p>
<p>Il risultato si estende al caso generale (più autovettori per autovalore) mostrando che la somma degli autospazi è una somma diretta: $V_{\\lambda_1} + \\dots + V_{\\lambda_k} = V_{\\lambda_1} \\oplus \\dots \\oplus V_{\\lambda_k}$.</p>`
        },
        {
            id: "s32-teorema-diag",
            type: "section",
            title: "Teorema: Criterio di Diagonalizzabilità",
            icon: "⭐",
            content: `<p>Questo è il teorema centrale della lezione, che fornisce condizioni <strong>necessarie e sufficienti</strong> per la diagonalizzabilità.</p>`,
            subsections: [
                {
                    subtitle: "Enunciato",
                    content: `<p><strong>Teorema (Criterio di Diagonalizzabilità):</strong> Sia $F: V \\to V$ un endomorfismo su uno spazio vettoriale $V$ di dimensione finita $n$. Allora $F$ è <strong>diagonalizzabile</strong> se e solo se valgono <strong>entrambe</strong> le seguenti condizioni:</p>
<ol>
<li>Il polinomio caratteristico $p_F(t)$ si scompone completamente nel prodotto di fattori lineari a coefficienti reali.</li>
<li>Per ogni autovalore $\\lambda$ di $F$: $m_g(\\lambda) = m_a(\\lambda)$.</li>
</ol>`
                },
                {
                    subtitle: "Dimostrazione (⇒): se F è diagonalizzabile",
                    content: `<p>Supponiamo che $F$ sia diagonalizzabile. Allora esiste una base $\\mathcal{A}$ di autovettori tale che $D = M_{\\mathcal{A},\\mathcal{A}}(F)$ è diagonale.</p>
<p><strong>Condizione 1:</strong> Il polinomio caratteristico è:</p>
<p>$$p_F(t) = \\det(D - tI) = \\prod_{i=1}^{n} (\\lambda_i - t)$$</p>
<p>dove $\\lambda_i$ sono gli elementi sulla diagonale. Questo è un prodotto di fattori lineari. ✓</p>
<p><strong>Condizione 2:</strong> Sia $\\lambda$ un autovalore. La sua molteplicità algebrica $m_a(\\lambda)$ è il numero di volte che $\\lambda$ compare sulla diagonale di $D$. Questo significa che ci sono esattamente $m_a(\\lambda)$ vettori della base $\\mathcal{A}$ che sono autovettori per $\\lambda$. Questi vettori sono linearmente indipendenti (fanno parte di una base!) e appartengono a $V_\\lambda$, quindi:</p>
<p>$$m_g(\\lambda) = \\dim(V_\\lambda) \\ge m_a(\\lambda)$$</p>
<p>Combinando con la disuguaglianza $m_g(\\lambda) \\le m_a(\\lambda)$ già dimostrata, otteniamo $m_g(\\lambda) = m_a(\\lambda)$. ✓</p>`
                },
                {
                    subtitle: "Dimostrazione (⇐): se le due condizioni valgono",
                    content: `<p>Supponiamo che le condizioni 1 e 2 siano verificate. Siano $\\lambda_1, \\dots, \\lambda_k$ gli autovalori distinti di $F$.</p>
<p><strong>Dalla condizione 1:</strong> il polinomio si fattorizza completamente, quindi la somma delle molteplicità algebriche dà il grado del polinomio:</p>
<p>$$\\sum_{i=1}^{k} m_a(\\lambda_i) = n$$</p>
<p><strong>Dalla condizione 2:</strong> $m_g(\\lambda_i) = m_a(\\lambda_i)$ per ogni $i$, quindi:</p>
<p>$$\\sum_{i=1}^{k} m_g(\\lambda_i) = \\sum_{i=1}^{k} \\dim(V_{\\lambda_i}) = n$$</p>
<p>Per ogni autospazio $V_{\\lambda_i}$, prendiamo una base $\\mathcal{A}_i$. L'unione $\\mathcal{A} = \\mathcal{A}_1 \\cup \\dots \\cup \\mathcal{A}_k$ contiene un totale di $\\sum \\dim(V_{\\lambda_i}) = n$ vettori.</p>
<p>Per il <strong>Lemma</strong> dimostrato sopra (autovettori di autovalori distinti sono linearmente indipendenti), l'insieme $\\mathcal{A}$ è linearmente indipendente.</p>
<p>Poiché $\\mathcal{A}$ contiene $n$ vettori linearmente indipendenti in uno spazio di dimensione $n$, <strong>$\\mathcal{A}$ è una base di $V$</strong>. Essendo formata interamente da autovettori, $F$ è diagonalizzabile. $\\square$</p>`
                }
            ],
            formulas: [
                { label: "Criterio di diagonalizzabilità", latex: "F \\text{ diag.} \\iff p_F(t) = \\prod(t-\\lambda_i)^{m_a(\\lambda_i)} \\text{ e } m_g(\\lambda_i) = m_a(\\lambda_i) \\; \\forall i" }
            ]
        },
        {
            id: "s32-conseguenze",
            type: "section",
            title: "Conseguenze del Teorema",
            icon: "💡",
            content: `<p>Dal teorema discendono alcune osservazioni importanti.</p>`,
            subsections: [
                {
                    subtitle: "Caso di n autovalori distinti",
                    content: `<p>Se un endomorfismo $F$ su uno spazio di dimensione $n$ possiede <strong>$n$ autovalori distinti</strong>, allora è <strong>sicuramente diagonalizzabile</strong>. Infatti, ogni autovalore ha $m_a(\\lambda) = 1$, e poiché $1 \\le m_g(\\lambda) \\le m_a(\\lambda)$, deve essere $m_g(\\lambda) = 1 = m_a(\\lambda)$ per tutti gli autovalori.</p>
<p>Attenzione: il viceversa è <strong>falso</strong>! Un endomorfismo può essere diagonalizzabile anche con autovalori ripetuti (basta che $m_g = m_a$ per ciascuno).</p>`
                },
                {
                    subtitle: "Somma diretta degli autospazi",
                    content: `<p>Se $F$ è diagonalizzabile, lo spazio $V$ è la <strong>somma diretta</strong> dei suoi autospazi:</p>
<p>$$V = V_{\\lambda_1} \\oplus V_{\\lambda_2} \\oplus \\dots \\oplus V_{\\lambda_k}$$</p>`
                },
                {
                    subtitle: "L'autovalore zero",
                    content: `<p>$0$ è un autovalore di $F$ se e solo se $\\ker(F) \\neq \\{\\vec{0}\\}$. In tal caso, l'autospazio $V_0$ coincide con il nucleo: $V_0 = \\ker(F)$.</p>`
                }
            ]
        },
        {
            id: "s32-algoritmo",
            type: "section",
            title: "Algoritmo di Diagonalizzazione",
            icon: "⚙️",
            content: `<p>Il teorema ci fornisce un <strong>algoritmo pratico</strong> in 7 passi per determinare se un endomorfismo è diagonalizzabile e, in caso affermativo, per costruire la base di autovettori e le matrici $P$ e $D$.</p>`,
            subsections: [
                {
                    subtitle: "I 7 passi dell'algoritmo",
                    content: `<ol>
<li><strong>Calcolare il polinomio caratteristico</strong> $p_F(t) = \\det(A - tI)$.</li>
<li><strong>Trovare le radici</strong> del polinomio, cioè gli autovalori $\\lambda_1, \\dots, \\lambda_k$.</li>
<li><strong>Verificare la condizione 1:</strong> se il polinomio <strong>non</strong> si fattorizza completamente in fattori lineari reali (ad esempio, ha radici complesse), l'endomorfismo <strong>non è diagonalizzabile</strong> su $\\mathbb{R}$. Altrimenti, procedere.</li>
<li><strong>Calcolare le molteplicità:</strong> per ogni autovalore $\\lambda_i$, determinare $m_a(\\lambda_i)$ (contando le ripetizioni delle radici) e $m_g(\\lambda_i) = n - \\operatorname{rank}(A - \\lambda_i I)$.</li>
<li><strong>Verificare la condizione 2:</strong> se $m_g(\\lambda_i) = m_a(\\lambda_i)$ per ogni $i$, allora $F$ è diagonalizzabile. Altrimenti, <strong>non lo è</strong>.</li>
<li><strong>Costruire la base diagonalizzante:</strong> per ogni $\\lambda_i$, trovare una base $\\mathcal{A}_i$ di $V_{\\lambda_i}$ risolvendo il sistema omogeneo $(A - \\lambda_i I)\\vec{x} = \\vec{0}$. L'unione $\\mathcal{A} = \\bigcup \\mathcal{A}_i$ è la base di autovettori.</li>
<li><strong>Costruire $P$ e $D$:</strong> la matrice $P$ ha come colonne gli autovettori (ordinati coerentemente), la matrice $D$ ha gli autovalori sulla diagonale nello stesso ordine. Si ha $D = P^{-1}AP$.</li>
</ol>`
                },
                {
                    subtitle: "Schema visivo di P e D",
                    content: `<p>Se gli autovalori distinti sono $\\lambda_1, \\dots, \\lambda_k$ con basi $\\{\\vec{v}_1^{(i)}, \\dots, \\vec{v}_{m_i}^{(i)}\\}$ per $V_{\\lambda_i}$, le matrici hanno la forma:</p>
<p>$$P = \\begin{pmatrix} | & | & & | & | & & | \\\\ \\vec{v}_1^{(1)} & \\cdots & \\cdots & \\vec{v}_{m_1}^{(1)} & \\vec{v}_1^{(2)} & \\cdots & \\vec{v}_{m_k}^{(k)} \\\\ | & | & & | & | & & | \\end{pmatrix}$$</p>
<p>$$D = \\begin{pmatrix} \\lambda_1 & & & & & \\\\ & \\ddots & & & & \\\\ & & \\lambda_1 & & & \\\\ & & & \\lambda_2 & & \\\\ & & & & \\ddots & \\\\ & & & & & \\lambda_k \\end{pmatrix}$$</p>
<p>dove $\\lambda_i$ appare $m_a(\\lambda_i)$ volte sulla diagonale di $D$, e le colonne corrispondenti di $P$ sono gli autovettori di $V_{\\lambda_i}$.</p>`
                }
            ]
        },
        {
            id: "s32-esempio-completo",
            type: "section",
            title: "Esempio completo: applicazione dell'algoritmo",
            icon: "📝",
            content: `<p>Applichiamo tutti e 7 i passi dell'algoritmo alla matrice:</p>
<p>$$A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$$</p>`,
            subsections: [
                {
                    subtitle: "Passo 1: Polinomio caratteristico",
                    content: `<p>$$A - tI = \\begin{pmatrix} 2-t & 0 & 0 \\\\ 1 & 3-t & 0 \\\\ 0 & 0 & 3-t \\end{pmatrix}$$</p>
<p>Essendo triangolare inferiore, il determinante è il prodotto degli elementi diagonali:</p>
<p>$$p_F(t) = (2-t)(3-t)(3-t) = (2-t)(3-t)^2$$</p>`
                },
                {
                    subtitle: "Passo 2–3: Autovalori e fattorizzazione",
                    content: `<p>Le radici sono $\\lambda_1 = 2$ e $\\lambda_2 = 3$. Il polinomio si fattorizza completamente in fattori lineari reali: <strong>condizione 1 verificata</strong>. ✓</p>`
                },
                {
                    subtitle: "Passo 4: Molteplicità",
                    content: `<p><strong>Molteplicità algebriche</strong> (lette dalla fattorizzazione):</p>
<p>$$m_a(2) = 1, \\quad m_a(3) = 2$$</p>
<p><strong>Molteplicità geometriche</strong> (calcolate col rango):</p>
<p>Per $\\lambda_1 = 2$:</p>
<p>$$A - 2I = \\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\quad \\Rightarrow \\quad \\operatorname{rank} = 2 \\quad \\Rightarrow \\quad m_g(2) = 3 - 2 = 1$$</p>
<p>Per $\\lambda_2 = 3$:</p>
<p>$$A - 3I = \\begin{pmatrix} -1 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix} \\quad \\Rightarrow \\quad \\operatorname{rank} = 1 \\quad \\Rightarrow \\quad m_g(3) = 3 - 1 = 2$$</p>`
                },
                {
                    subtitle: "Passo 5: Verifica condizione 2",
                    content: `<p>$$m_g(2) = 1 = m_a(2) \\quad \\checkmark$$</p>
<p>$$m_g(3) = 2 = m_a(3) \\quad \\checkmark$$</p>
<p><strong>La matrice è diagonalizzabile!</strong></p>`
                },
                {
                    subtitle: "Passo 6: Basi degli autospazi",
                    content: `<p><strong>Autospazio $V_2$:</strong> Risolviamo $(A - 2I)\\vec{x} = \\vec{0}$:</p>
<p>$$\\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$</p>
<p>Si ottiene $x_1 = -x_2$, $x_3 = 0$, con $x_2$ libero. Base: $\\mathcal{A}_1 = \\left\\{\\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix}\\right\\}$</p>
<p><strong>Autospazio $V_3$:</strong> Risolviamo $(A - 3I)\\vec{x} = \\vec{0}$:</p>
<p>$$\\begin{pmatrix} -1 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$</p>
<p>Si ottiene $x_1 = 0$, con $x_2, x_3$ liberi. Base: $\\mathcal{A}_2 = \\left\\{\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}\\right\\}$</p>`
                },
                {
                    subtitle: "Passo 7: Matrici P e D",
                    content: `<p>$$P = \\begin{pmatrix} -1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\qquad D = P^{-1}AP = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$$</p>
<p>Si può verificare che $D = P^{-1}AP$ calcolando il prodotto esplicitamente.</p>`
                }
            ]
        },
        {
            id: "s32-tranello-non-diag",
            type: "alert_box",
            title: "Trappola d'esame: quando la diagonalizzazione fallisce",
            icon: "⚠️",
            content: `<p>Attenzione ai due modi in cui la diagonalizzazione può fallire:</p>
<p><strong>Fallimento della condizione 1:</strong> ad esempio, $p_F(t) = t^2 + 1$ non ha radici reali — nessun autovalore su $\\mathbb{R}$, dunque non diagonalizzabile.</p>
<p><strong>Fallimento della condizione 2:</strong> ad esempio, $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ ha $p_F(t) = (t-2)^2$, quindi $m_a(2) = 2$. Ma $A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ ha rango 1, quindi $m_g(2) = 2 - 1 = 1 \\neq 2$. <strong>Non diagonalizzabile.</strong></p>
<p><strong>Errore comune:</strong> lo studente trova che il polinomio si fattorizza e conclude che $F$ è diagonalizzabile senza verificare la condizione 2. La condizione 1 è <strong>necessaria ma non sufficiente!</strong></p>`
        },
        {
            id: "s32-oral-box",
            type: "oral_box",
            title: "Domanda d'esame tipica",
            icon: "🎤",
            content: `<p><strong>"Enunci e dimostri il criterio di diagonalizzabilità."</strong></p>
<p>Questa è una delle domande più frequenti. La risposta richiede:</p>
<ol>
<li>Enunciare il teorema con entrambe le condizioni.</li>
<li>Dimostrare la disuguaglianza $1 \\le m_g(\\lambda) \\le m_a(\\lambda)$ (completamento a base, matrice a blocchi triangolare).</li>
<li>Dimostrare la direzione $\\Rightarrow$ (da diagonalizzabile alle due condizioni).</li>
<li>Dimostrare la direzione $\\Leftarrow$ (dalle condizioni alla diagonalizzabilità, usando il lemma sull'indipendenza lineare).</li>
</ol>
<p>Il professore si aspetta che sappiate citare il lemma sugli autovettori di autovalori distinti e che la dimostrazione della proposizione sulle molteplicità sia presentata correttamente.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è la molteplicità algebrica di un autovalore?",
            back: "La molteplicità algebrica $m_a(\\lambda)$ è la massima potenza $h$ tale che $(t - \\lambda)^h$ divide il polinomio caratteristico $p_F(t)$. Se $p_F(t) = (t-\\lambda)^h q(t)$ con $q(\\lambda) \\neq 0$, allora $m_a(\\lambda) = h$."
        },
        {
            type: "definizione",
            front: "Che cos'è la molteplicità geometrica di un autovalore?",
            back: "La molteplicità geometrica $m_g(\\lambda)$ è la dimensione dell'autospazio $V_\\lambda = \\ker(F - \\lambda \\operatorname{Id}_V)$. Si calcola come $m_g(\\lambda) = n - \\operatorname{rank}(A - \\lambda I)$, dove $A$ è una matrice rappresentativa e $n = \\dim(V)$."
        },
        {
            type: "formula",
            front: "Qual è la relazione tra molteplicità algebrica e geometrica?",
            back: "Per ogni autovalore $\\lambda$ vale: $$1 \\le m_g(\\lambda) \\le m_a(\\lambda)$$La molteplicità geometrica è almeno 1 (esiste almeno un autovettore) e al più uguale alla molteplicità algebrica."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che $m_g(\\lambda) \\le m_a(\\lambda)$.",
            back: "Si prende una base $\\{\\vec{v}_1, \\dots, \\vec{v}_h\\}$ di $V_\\lambda$ ($h = m_g(\\lambda)$) e la si completa a una base $\\mathcal{B}$ di $V$. La matrice $M_{\\mathcal{B},\\mathcal{B}}(F)$ ha la forma a blocchi triangolare superiore $\\begin{pmatrix} \\lambda I_h & C \\\\ 0 & E \\end{pmatrix}$. Il polinomio caratteristico diventa $p_F(t) = (\\lambda - t)^h \\cdot \\det(E - tI_{n-h})$, quindi $(t-\\lambda)^h$ divide $p_F(t)$ e $h \\le m_a(\\lambda)$."
        },
        {
            type: "domanda",
            front: "Enuncia il criterio di diagonalizzabilità.",
            back: "$F: V \\to V$ è diagonalizzabile se e solo se: (1) $p_F(t)$ si scompone completamente in fattori lineari reali, e (2) per ogni autovalore $\\lambda$: $m_g(\\lambda) = m_a(\\lambda)$."
        },
        {
            type: "dimostrazione",
            front: "Perché autovettori di autovalori distinti sono linearmente indipendenti?",
            back: "Per induzione. Se $c_1\\vec{v}_1 + \\dots + c_k\\vec{v}_k = \\vec{0}$ con $F(\\vec{v}_i) = \\lambda_i\\vec{v}_i$, si applica $F$ e si sottrae $\\lambda_k$ volte l'equazione originale: $\\sum_{i=1}^{k-1} c_i(\\lambda_i - \\lambda_k)\\vec{v}_i = \\vec{0}$. Per ipotesi induttiva e $\\lambda_i \\neq \\lambda_k$, si ha $c_i = 0$ per ogni $i$, e quindi anche $c_k = 0$."
        },
        {
            type: "tranello",
            front: "Se il polinomio caratteristico si fattorizza completamente, la matrice è diagonalizzabile?",
            back: "NO! La fattorizzazione completa (condizione 1) è necessaria ma NON sufficiente. Serve anche che $m_g(\\lambda) = m_a(\\lambda)$ per ogni autovalore (condizione 2). Controesempio: $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ ha $p_F(t) = (t-2)^2$ (fattorizzato) ma $m_g(2) = 1 \\neq 2 = m_a(2)$."
        },
        {
            type: "domanda",
            front: "Se $F$ su $V$ di dimensione $n$ ha $n$ autovalori distinti, è diagonalizzabile?",
            back: "Sì, sempre! Con $n$ autovalori distinti, ogni autovalore ha $m_a(\\lambda) = 1$. Dalla disuguaglianza $1 \\le m_g(\\lambda) \\le m_a(\\lambda) = 1$, segue $m_g(\\lambda) = 1 = m_a(\\lambda)$. Entrambe le condizioni del criterio sono soddisfatte automaticamente."
        },
        {
            type: "domanda",
            front: "Qual è il legame tra l'autovalore $0$ e il nucleo?",
            back: "$0$ è autovalore di $F$ se e solo se $\\ker(F) \\neq \\{\\vec{0}\\}$, cioè se e solo se $F$ non è iniettiva. In tal caso, l'autospazio $V_0$ coincide esattamente con $\\ker(F)$."
        },
        {
            type: "formula",
            front: "Descrivi la struttura delle matrici $P$ e $D$ nella diagonalizzazione $D = P^{-1}AP$.",
            back: "$P$ ha come colonne gli autovettori di $A$ (le basi degli autospazi, una dopo l'altra). $D$ ha sulla diagonale gli autovalori, ciascuno ripetuto $m_a(\\lambda_i)$ volte, nello stesso ordine delle colonne di $P$. L'ordine delle colonne di $P$ deve corrispondere all'ordine degli autovalori sulla diagonale di $D$."
        }
    ]
};

