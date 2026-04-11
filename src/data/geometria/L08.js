const LESSON = {
    id: "L08", date: "Lezione 08 — 17 Mar 2026",
    title: "Basi, Dimensione e Formula di Grassmann",
    abstract: "Definizione di dimensione di uno spazio vettoriale, le 8 proprietà fondamentali di basi e dimensione, intersezione e somma di sottospazi, e dimostrazione completa della Formula di Grassmann.",

    sections: [
        {
            id: "s08-dimensione",
            type: "section",
            title: "Dimensione di uno Spazio Vettoriale",
            icon: "📏",
            content: `<p>Partendo dal <strong>Lemma di Steinitz</strong> (o Lemma Sostitutivo), sappiamo che in uno spazio vettoriale finitamente generabile $V$, il numero di elementi che compongono una base è sempre lo stesso, indipendentemente dalla base scelta. Questo numero prende il nome di <strong>dimensione</strong> di $V$, denotata con $\\dim(V)$.</p>`,
            subsections: [
                {
                    subtitle: "Esempi fondamentali",
                    content: `<p>Vediamo le dimensioni degli spazi vettoriali più comuni:</p>
<ul>
<li>Lo <strong>spazio nullo</strong> $V = \\{\\mathbf{0}\\}$ ha dimensione $0$.</li>
<li>Nello spazio $\\mathbb{R}^n$, la base canonica è formata da $n$ vettori $(\\mathbf{e}_1, \\dots, \\mathbf{e}_n)$, dunque $\\dim(\\mathbb{R}^n) = n$.</li>
<li>Lo spazio delle matrici $\\mathcal{M}(m, n)$ ha come base le matrici canoniche $E_{ij}$, che sono in totale $m \\cdot n$. Pertanto $\\dim(\\mathcal{M}(m, n)) = m \\cdot n$.</li>
<li>Lo spazio dei polinomi di grado al più $h$, denotato con $\\mathbb{R}[t]_{\\leq h}$, ha come base $\\{1, t, t^2, \\dots, t^h\\}$. Dato che partiamo dal grado zero, i vettori sono $h + 1$. Pertanto $\\dim(\\mathbb{R}[t]_{\\leq h}) = h + 1$.</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Dimensione di ℝⁿ", latex: "\\dim(\\mathbb{R}^n) = n" },
                { label: "Dimensione matrici", latex: "\\dim(\\mathcal{M}(m, n)) = m \\cdot n" },
                { label: "Dimensione polinomi", latex: "\\dim(\\mathbb{R}[t]_{\\leq h}) = h + 1" }
            ]
        },
        {
            id: "s08-proprieta-dimensione",
            type: "section",
            title: "Le 8 Proprietà della Dimensione e delle Basi",
            icon: "📋",
            content: `<p>Sia $V$ uno spazio vettoriale finitamente generabile di dimensione $n$. Valgono le seguenti <strong>8 proprietà fondamentali</strong>:</p>
<ol>
<li><p>$\\dim(V) = 0 \\iff V = \\{\\mathbf{0}\\}$.</p></li>
<li><p>$\\dim(V) = 1 \\iff \\exists\\, \\mathbf{v} \\in V,\\, \\mathbf{v} \\neq \\mathbf{0}$ tale che $V = \\text{Span}(\\mathbf{v})$.</p></li>
<li><p>Se $\\dim(V) = n$ e abbiamo $n$ vettori <strong>linearmente indipendenti</strong>, essi formano automaticamente una base per $V$.</p></li>
<li><p>Se $\\dim(V) = n$ e abbiamo un sistema di $n$ <strong>generatori</strong>, essi formano automaticamente una base per $V$.</p></li>
<li><p>Le seguenti affermazioni sono <strong>equivalenti</strong>:</p>
<ul>
<li>$\\dim(V) = n$;</li>
<li>$n$ è il <em>massimo numero</em> di vettori linearmente indipendenti che si possono trovare in $V$;</li>
<li>$n$ è il <em>minimo numero</em> di generatori necessari per generare $V$.</li>
</ul></li>
<li><p><strong>Estrazione di una base:</strong> Da ogni sistema di generatori di $V$ si può estrarre una base scartando, passo dopo passo, i vettori linearmente dipendenti (sovrabbondanti).</p></li>
<li><p><strong>Completamento a base:</strong> Ogni sistema di vettori linearmente indipendenti di $V$ può essere esteso aggiungendo opportuni vettori fino a formare una base di $V$.</p></li>
<li><p>Se $W$ è un sottospazio di $V$, allora $\\dim(W) \\leq \\dim(V)$. Vale l'uguaglianza $\\dim(W) = \\dim(V)$ se e solo se $W = V$.</p></li>
</ol>`
        },
        {
            id: "s08-proprieta-cruciali",
            type: "alert_box",
            title: "⚠️ Proprietà 3 e 4: Trappole d'esame!",
            icon: "⚠️",
            content: `<p>Le proprietà 3 e 4 sono spesso fonte di errori all'esame. Attenzione:</p>
<ul>
<li><strong>Proprietà 3:</strong> Se conosci $\\dim(V) = n$ e trovi $n$ vettori linearmente indipendenti, <strong>non serve verificare che generano</strong> — sono automaticamente una base.</li>
<li><strong>Proprietà 4:</strong> Se conosci $\\dim(V) = n$ e hai $n$ generatori, <strong>non serve verificare l'indipendenza lineare</strong> — sono automaticamente una base.</li>
</ul>
<p>Il punto cruciale è che <strong>devi già conoscere la dimensione</strong> perché queste scorciatoie funzionino!</p>`
        },
        {
            id: "s08-intersezione-somma",
            type: "section",
            title: "Intersezione, Unione e Somma di Sottospazi",
            icon: "🔗",
            content: `<p>Dati due sottospazi $U$ e $W$ di uno spazio vettoriale $V$, possiamo definire nuove strutture a partire da essi.</p>
<ul>
<li>L'<strong>intersezione</strong> $U \\cap W$ è ancora un sottospazio vettoriale.</li>
<li>L'<strong>unione</strong> $U \\cup W$, in generale, <strong>NON è un sottospazio vettoriale</strong> (a meno che uno non sia contenuto nell'altro). Basti pensare alla regola del parallelogramma: prendendo un vettore sulla retta $U$ e uno sulla retta $W$, la loro somma esce da entrambe le rette.</li>
</ul>`,
            subsections: [
                {
                    subtitle: "Definizione di Somma di Sottospazi",
                    content: `<p>Per ovviare al problema dell'unione, si definisce la <strong>somma di due sottospazi</strong>:</p>
<p>$$U + W := \\text{Span}(U \\cup W)$$</p>
<p>I vettori di $U + W$ sono tutti e soli i vettori che si ottengono sommando un vettore di $U$ con un vettore di $W$:</p>
<p>$$U + W = \\{\\mathbf{u} + \\mathbf{w} \\mid \\mathbf{u} \\in U,\\, \\mathbf{w} \\in W\\}$$</p>
<p>Questa caratterizzazione è estremamente utile: per verificare che un vettore $\\mathbf{v}$ appartiene a $U + W$, basta trovare una decomposizione $\\mathbf{v} = \\mathbf{u} + \\mathbf{w}$ con $\\mathbf{u} \\in U$ e $\\mathbf{w} \\in W$.</p>`
                }
            ],
            formulas: [
                { label: "Somma di sottospazi", latex: "U + W = \\{\\mathbf{u} + \\mathbf{w} \\mid \\mathbf{u} \\in U,\\, \\mathbf{w} \\in W\\}" }
            ]
        },
        {
            id: "s08-unione-non-sottospazio",
            type: "note_box",
            title: "Perché l'unione non è un sottospazio?",
            icon: "💡",
            content: `<p>Un esempio concreto in $\\mathbb{R}^2$: siano $U = \\text{Span}((1,0))$ (l'asse $x$) e $W = \\text{Span}((0,1))$ (l'asse $y$). Allora $(1,0) \\in U \\cup W$ e $(0,1) \\in U \\cup W$, ma la loro somma $(1,1)$ non appartiene né a $U$ né a $W$, quindi $(1,1) \\notin U \\cup W$. L'unione non è chiusa rispetto alla somma!</p>`
        },
        {
            id: "s08-formula-grassmann",
            type: "section",
            title: "La Formula di Grassmann",
            icon: "⚡",
            content: `<p>Veniamo al <strong>teorema centrale della lezione</strong>. La Formula di Grassmann mette in relazione le dimensioni dei sottospazi $U, W$, della loro intersezione e della loro somma.</p>
<p><strong>Teorema (Formula di Grassmann):</strong> Siano $U$ e $W$ due sottospazi finitamente generabili di uno spazio vettoriale $V$. Allora vale:</p>
<p>$$\\dim(U + W) = \\dim(U) + \\dim(W) - \\dim(U \\cap W)$$</p>
<p>La formula ricorda molto il <strong>principio di inclusione-esclusione</strong> della teoria degli insiemi: $|A \\cup B| = |A| + |B| - |A \\cap B|$. L'analogia non è casuale!</p>`,
            formulas: [
                { label: "Formula di Grassmann", latex: "\\dim(U + W) = \\dim(U) + \\dim(W) - \\dim(U \\cap W)" }
            ]
        },
        {
            id: "s08-dimostrazione-grassmann",
            type: "section",
            title: "Dimostrazione della Formula di Grassmann",
            icon: "🔬",
            content: `<p>La dimostrazione consiste nel costruire esplicitamente una base per $U + W$ partendo dall'intersezione, e poi verificare che ha il numero giusto di elementi. Poniamo per comodità:</p>
<ul>
<li>$\\dim(U \\cap W) = h$</li>
<li>$\\dim(U) = n$</li>
<li>$\\dim(W) = m$</li>
</ul>`,
            subsections: [
                {
                    subtitle: "Passo 1: Base dell'intersezione",
                    content: `<p>Fissiamo una base per il sottospazio intersezione $U \\cap W$. Siccome ha dimensione $h$, la base sarà formata da $h$ vettori:</p>
<p>$$\\mathcal{B}_{U \\cap W} = \\{\\mathbf{i}_1, \\mathbf{i}_2, \\dots, \\mathbf{i}_h\\}$$</p>`
                },
                {
                    subtitle: "Passo 2: Estensione a base di U",
                    content: `<p>Poiché $U \\cap W \\subseteq U$, possiamo usare il <strong>Teorema di completamento della base</strong> (Proprietà 7). Aggiungiamo $n - h$ vettori per completare la base di $U$:</p>
<p>$$\\mathcal{B}_U = \\{\\mathbf{i}_1, \\dots, \\mathbf{i}_h, \\mathbf{u}_{h+1}, \\dots, \\mathbf{u}_n\\} \\subset U$$</p>`
                },
                {
                    subtitle: "Passo 3: Estensione a base di W",
                    content: `<p>Con lo stesso ragionamento, completiamo la base dell'intersezione per ottenere una base di $W$, aggiungendo $m - h$ vettori:</p>
<p>$$\\mathcal{B}_W = \\{\\mathbf{i}_1, \\dots, \\mathbf{i}_h, \\mathbf{w}_{h+1}, \\dots, \\mathbf{w}_m\\} \\subset W$$</p>`
                },
                {
                    subtitle: "Passo 4: Il candidato per la base di U + W",
                    content: `<p>Consideriamo l'unione dei vettori trovati. Definiamo:</p>
<p>$$\\mathcal{B} = \\{\\underbrace{\\mathbf{i}_1, \\dots, \\mathbf{i}_h}_{h \\text{ vett.}},\\; \\underbrace{\\mathbf{u}_{h+1}, \\dots, \\mathbf{u}_n}_{n-h \\text{ vett.}},\\; \\underbrace{\\mathbf{w}_{h+1}, \\dots, \\mathbf{w}_m}_{m-h \\text{ vett.}}\\}$$</p>
<p>Se dimostriamo che $\\mathcal{B}$ è una base per $U + W$, abbiamo finito. Contando i vettori:</p>
<p>$$\\text{Numero vettori} = h + (n - h) + (m - h) = n + m - h$$</p>
<p>che corrisponde esattamente a $\\dim(U) + \\dim(W) - \\dim(U \\cap W)$.</p>`
                },
                {
                    subtitle: "Passo 5: B è un sistema di generatori per U + W",
                    content: `<p>Ogni vettore $\\mathbf{v} \\in U + W$ si scrive come $\\mathbf{v} = \\mathbf{u} + \\mathbf{w}$. Poiché $\\mathbf{u}$ è combinazione lineare degli elementi di $\\mathcal{B}_U$ e $\\mathbf{w}$ degli elementi di $\\mathcal{B}_W$, la loro somma sarà generata dall'unione dei due insiemi, ovvero da $\\mathcal{B}$. ✓</p>`
                },
                {
                    subtitle: "Passo 6: B è linearmente indipendente (cuore della dimostrazione)",
                    content: `<p>Questo è il passaggio più delicato. Poniamo una combinazione lineare dei vettori di $\\mathcal{B}$ uguale al vettore nullo:</p>
<p>$$a_1\\mathbf{i}_1 + \\dots + a_h\\mathbf{i}_h + b_{h+1}\\mathbf{u}_{h+1} + \\dots + b_n\\mathbf{u}_n + c_{h+1}\\mathbf{w}_{h+1} + \\dots + c_m\\mathbf{w}_m = \\mathbf{0} \\quad (*)$$</p>
<p>Obiettivo: dimostrare che <strong>tutti i coefficienti $a, b, c$ sono zero</strong>.</p>
<p>Spostiamo la parte con le $\\mathbf{w}$ e definiamo un vettore $\\mathbf{x}$:</p>
<p>$$\\underbrace{a_1\\mathbf{i}_1 + \\dots + a_h\\mathbf{i}_h + b_{h+1}\\mathbf{u}_{h+1} + \\dots + b_n\\mathbf{u}_n}_{\\in U} = \\underbrace{-c_{h+1}\\mathbf{w}_{h+1} - \\dots - c_m\\mathbf{w}_m}_{\\in W} =: \\mathbf{x}$$</p>
<p>Osserviamo:</p>
<ul>
<li>Dalla parte sinistra: $\\mathbf{x}$ è combinazione lineare della base di $U$, quindi $\\mathbf{x} \\in U$.</li>
<li>Dalla parte destra: $\\mathbf{x}$ è combinazione lineare di vettori di $W$, quindi $\\mathbf{x} \\in W$.</li>
</ul>
<p>Se $\\mathbf{x}$ sta sia in $U$ che in $W$, allora <strong>$\\mathbf{x} \\in U \\cap W$</strong>. Quindi $\\mathbf{x}$ si scrive come combinazione lineare della base dell'intersezione:</p>
<p>$$\\mathbf{x} = d_1\\mathbf{i}_1 + \\dots + d_h\\mathbf{i}_h$$</p>
<p>Uguagliando alla parte destra:</p>
<p>$$-c_{h+1}\\mathbf{w}_{h+1} - \\dots - c_m\\mathbf{w}_m = d_1\\mathbf{i}_1 + \\dots + d_h\\mathbf{i}_h$$</p>
<p>Portando tutto a sinistra:</p>
<p>$$d_1\\mathbf{i}_1 + \\dots + d_h\\mathbf{i}_h + c_{h+1}\\mathbf{w}_{h+1} + \\dots + c_m\\mathbf{w}_m = \\mathbf{0}$$</p>
<p>Ma i vettori coinvolti sono esattamente $\\mathcal{B}_W$, che è una base di $W$ e quindi è linearmente indipendente. Dunque:</p>
<p>$$d_1 = \\dots = d_h = c_{h+1} = \\dots = c_m = 0$$</p>
<p>Tutti i coefficienti $c$ sono zero! Tornando all'equazione $(*)$, la parte con le $\\mathbf{w}$ svanisce:</p>
<p>$$a_1\\mathbf{i}_1 + \\dots + a_h\\mathbf{i}_h + b_{h+1}\\mathbf{u}_{h+1} + \\dots + b_n\\mathbf{u}_n = \\mathbf{0}$$</p>
<p>Ma questi vettori sono esattamente $\\mathcal{B}_U$, base di $U$, quindi linearmente indipendenti. Dunque:</p>
<p>$$a_1 = \\dots = a_h = b_{h+1} = \\dots = b_n = 0$$</p>
<p><strong>Conclusione:</strong> Tutti i coefficienti sono zero, quindi $\\mathcal{B}$ è linearmente indipendente. Essendo anche un sistema di generatori, $\\mathcal{B}$ è una base di $U + W$ con $n + m - h$ elementi. ∎</p>`
                }
            ]
        },
        {
            id: "s08-schema-dimostrazione",
            type: "note_box",
            title: "Schema riassuntivo della dimostrazione",
            icon: "🗺️",
            content: `<p>La strategia della dimostrazione in poche parole:</p>
<ol>
<li>Prendi una base dell'intersezione $U \\cap W$ ($h$ vettori)</li>
<li>Completa a base di $U$ (aggiungi $n - h$ vettori)</li>
<li>Completa a base di $W$ (aggiungi $m - h$ vettori)</li>
<li>Unisci tutto: hai $h + (n-h) + (m-h) = n + m - h$ vettori</li>
<li>Verifica che generano $U + W$ (facile)</li>
<li>Verifica l'indipendenza lineare con il <strong>trucco del vettore $\\mathbf{x}$</strong>: separi i pezzi di $U$ e $W$, noti che il vettore intermedio sta nell'intersezione, e sfrutti l'indipendenza delle basi già note</li>
</ol>`
        },
        {
            id: "s08-domanda-orale-grassmann",
            type: "oral_box",
            title: "Domanda tipica: Enunciare e dimostrare la Formula di Grassmann",
            icon: "🎤",
            content: `<p>Questa è una delle dimostrazioni più richieste all'orale di geometria. Il professore si aspetta:</p>
<ul>
<li>Enunciato preciso con ipotesi (sottospazi finitamente generabili)</li>
<li>La costruzione esplicita della base candidata partendo dall'intersezione</li>
<li>La verifica che è sistema di generatori</li>
<li>La verifica dell'indipendenza lineare con il <strong>trucco del vettore $\\mathbf{x}$</strong> che sta in entrambi i sottospazi</li>
<li>Il conteggio finale dei vettori</li>
</ul>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è la dimensione di uno spazio vettoriale?",
            back: "La <strong>dimensione</strong> di uno spazio vettoriale finitamente generabile $V$, denotata $\\dim(V)$, è il numero di elementi di una qualsiasi base di $V$. Per il Lemma di Steinitz, questo numero è indipendente dalla base scelta."
        },
        {
            type: "formula",
            front: "Quali sono le dimensioni di $\\mathbb{R}^n$, $\\mathcal{M}(m,n)$ e $\\mathbb{R}[t]_{\\leq h}$?",
            back: "$\\dim(\\mathbb{R}^n) = n$ (base canonica: $n$ vettori).<br>$\\dim(\\mathcal{M}(m,n)) = m \\cdot n$ (base: matrici elementari $E_{ij}$).<br>$\\dim(\\mathbb{R}[t]_{\\leq h}) = h + 1$ (base: $\\{1, t, t^2, \\dots, t^h\\}$)."
        },
        {
            type: "domanda",
            front: "Se $\\dim(V) = n$ e ho $n$ vettori linearmente indipendenti in $V$, cosa posso concludere?",
            back: "Che quei $n$ vettori formano <strong>automaticamente una base</strong> di $V$ (Proprietà 3). Non serve verificare che generano $V$: il conteggio giusto + indipendenza lineare bastano."
        },
        {
            type: "domanda",
            front: "L'unione di due sottospazi è un sottospazio? E la somma?",
            back: "L'<strong>unione</strong> $U \\cup W$ in generale <strong>NON</strong> è un sottospazio (non è chiusa per somma). La <strong>somma</strong> $U + W = \\{\\mathbf{u} + \\mathbf{w} \\mid \\mathbf{u} \\in U,\\, \\mathbf{w} \\in W\\}$ è invece sempre un sottospazio, ed è il più piccolo sottospazio che contiene sia $U$ che $W$."
        },
        {
            type: "tranello",
            front: "Errore comune: confondere $U \\cup W$ con $U + W$.",
            back: "Esempio in $\\mathbb{R}^2$: $U$ = asse $x$, $W$ = asse $y$. Allora $U \\cup W$ è la croce degli assi (non un sottospazio), mentre $U + W = \\mathbb{R}^2$ (tutto il piano). La somma è molto più grande dell'unione!"
        },
        {
            type: "formula",
            front: "Enunciare la Formula di Grassmann.",
            back: "Siano $U$ e $W$ due sottospazi finitamente generabili di $V$. Allora: $$\\dim(U + W) = \\dim(U) + \\dim(W) - \\dim(U \\cap W)$$"
        },
        {
            type: "dimostrazione",
            front: "Qual è l'idea chiave della dimostrazione della Formula di Grassmann?",
            back: "Si costruisce una base candidata per $U + W$: si parte da una base dell'intersezione ($h$ vettori), la si completa a base di $U$ (aggiungendo $n-h$ vettori) e a base di $W$ (aggiungendo $m-h$ vettori). L'unione di questi vettori ($n + m - h$ in totale) è la base cercata. La parte cruciale è dimostrare l'indipendenza lineare con il <strong>trucco del vettore $\\mathbf{x}$</strong>: si separa la combinazione lineare nulla in parte $U$ e parte $W$, si osserva che il vettore intermedio sta in $U \\cap W$, e si usa l'indipendenza delle basi note per concludere che tutti i coefficienti sono zero."
        },
        {
            type: "domanda",
            front: "Se $W$ è un sottospazio di $V$, cosa si può dire sulle dimensioni?",
            back: "$\\dim(W) \\leq \\dim(V)$. Inoltre, vale l'uguaglianza $\\dim(W) = \\dim(V)$ <strong>se e solo se</strong> $W = V$ (Proprietà 8). Questo è molto utile: per dimostrare che un sottospazio coincide con tutto lo spazio, basta mostrare che hanno la stessa dimensione."
        },
        {
            type: "tranello",
            front: "Nella dimostrazione di Grassmann, perché il vettore $\\mathbf{x}$ sta nell'intersezione?",
            back: "Perché $\\mathbf{x}$ è scritto in due modi: come combinazione lineare di vettori di $U$ (parte sinistra) e come combinazione lineare di vettori di $W$ (parte destra, con segno cambiato). Quindi $\\mathbf{x} \\in U$ e $\\mathbf{x} \\in W$ simultaneamente, il che implica $\\mathbf{x} \\in U \\cap W$. A questo punto si può esprimere $\\mathbf{x}$ nella base dell'intersezione e sfruttare l'indipendenza lineare."
        },
        {
            type: "domanda",
            front: "Come si può estrarre una base da un sistema di generatori? E come si completa un sistema indipendente a base?",
            back: "<strong>Estrazione (Proprietà 6):</strong> Si parte dai generatori e si scartano uno alla volta i vettori che sono combinazione lineare dei restanti, fino a ottenere un insieme linearmente indipendente che genera ancora $V$.<br><strong>Completamento (Proprietà 7):</strong> Si parte dai vettori indipendenti e si aggiungono vettori (non già nello span) fino a raggiungere $n = \\dim(V)$ elementi."
        }
    ]
};

