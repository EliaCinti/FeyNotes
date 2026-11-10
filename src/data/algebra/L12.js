const LESSON = {
    id: "L12", date: "Lezione 12 — 6 Nov 2026",
    title: "Il Secondo Teorema di Cantor e i Cardinali Infiniti",
    abstract: "Il Secondo Teorema di Cantor stabilisce che $|X| \\lt |\\mathcal{P}(X)|$ per ogni insieme: esistono infiniti strettamente più grandi di altri. Vedremo la dimostrazione classica con l'insieme diagonale, la versione equivalente con le funzioni caratteristiche, l'argomento diagonale applicato alla non-numerabilità di $\\mathbb{R}$ e la gerarchia dei cardinali infiniti fino all'Ipotesi del Continuo.",

    sections: [
      {
        id: "s12-secondo-teorema",
        type: "section",
        title: "Il Secondo Teorema di Cantor",
        icon: "🔺",
        content: `<p>Il risultato centrale della lezione è il seguente.</p>
        <p><strong>Teorema (Secondo Teorema di Cantor).</strong> Per ogni insieme $X$ (finito o meno), si ha</p>
        <p>$$|X| \\lt |\\mathcal{P}(X)|$$</p>
        <p><strong>Morale del teorema:</strong> il teorema dimostra che <em>esistono degli infiniti strettamente più grandi di altri</em>. Ad esempio, la cardinalità di un insieme infinito $X$ è strettamente minore della cardinalità del suo insieme delle parti $\\mathcal{P}(X)$.</p>`,
        subsections: [
          {
            subtitle: "Struttura della dimostrazione",
            content: `<p>La dimostrazione si articola in due parti: prima si mostra che $|X| \\le |\\mathcal{P}(X)|$ e poi, per assurdo, che $|X| \\ne |\\mathcal{P}(X)|$.</p>`
          },
          {
            subtitle: "Caso $X$ finito",
            content: `<p>Se $|X| = n \\in \\mathbb{N}$, allora sappiamo che $|\\mathcal{P}(X)| = 2^{|X|} = 2^n$. Poiché per ogni $n \\in \\mathbb{N}$ si ha $n \\lt 2^n$, la tesi $|X| \\lt |\\mathcal{P}(X)|$ è verificata.</p>`
          },
          {
            subtitle: "Caso $X$ infinito — parte 1: $|X| \\le |\\mathcal{P}(X)|$",
            content: `<p>Per dimostrare questa parte, è sufficiente trovare una funzione iniettiva da $X$ a $\\mathcal{P}(X)$. Consideriamo la funzione $j: X \\to \\mathcal{P}(X)$ definita come</p>
            <p>$$j(x) = \\{x\\}, \\quad \\forall x \\in X$$</p>
            <p>Questa funzione associa ad ogni elemento $x$ di $X$ il singoletto che contiene solo $x$. La funzione $j$ è iniettiva: se $j(x_1) = j(x_2)$, allora $\\{x_1\\} = \\{x_2\\}$, il che implica $x_1 = x_2$.</p>
            <p>L'esistenza di una funzione iniettiva da $X$ a $\\mathcal{P}(X)$ prova che $|X| \\le |\\mathcal{P}(X)|$.</p>`
          },
          {
            subtitle: "Caso $X$ infinito — parte 2: $|X| \\ne |\\mathcal{P}(X)|$ (per assurdo)",
            content: `<p>Per dimostrare che la disuguaglianza è stretta, dobbiamo provare che non esiste alcuna funzione biiettiva tra $X$ e $\\mathcal{P}(X)$. Supponiamo per assurdo che esista una biiezione $f: X \\to \\mathcal{P}(X)$. Poiché $f$ è biiettiva, essa è in particolare <strong>suriettiva</strong>.</p>
            <p>Consideriamo ora il seguente sottoinsieme di $X$ (l'<strong>insieme diagonale</strong>):</p>
            <p>$$X_f := \\{x \\in X \\mid x \\notin f(x)\\}$$</p>
            <p>Questo insieme è ben definito: per ogni $x \\in X$, $f(x)$ è un sottoinsieme di $X$, quindi ha senso chiedersi se $x$ appartenga o meno a $f(x)$.</p>
            <p>Poiché $X_f$ è un sottoinsieme di $X$, esso è un elemento di $\\mathcal{P}(X)$, cioè $X_f \\in \\mathcal{P}(X)$. Dato che abbiamo ipotizzato che $f$ sia suriettiva, deve esistere un elemento $y \\in X$ tale che la sua immagine tramite $f$ sia proprio l'insieme $X_f$:</p>
            <p>$$\\exists y \\in X \\text{ tale che } f(y) = X_f$$</p>
            <p>A questo punto analizziamo l'appartenenza di $y$ a $X_f$. Si presentano due casi, <strong>entrambi contraddittori</strong>:</p>
            <p><strong>Primo caso: $y \\in X_f$.</strong> Per definizione di $X_f$, se $y \\in X_f$, allora $y$ deve soddisfare la condizione $y \\notin f(y)$. Ma poiché $f(y) = X_f$, questo implica $y \\notin X_f$. Contraddizione: $y \\in X_f \\Rightarrow y \\notin X_f$.</p>
            <p><strong>Secondo caso: $y \\notin X_f$.</strong> Se $y$ non appartiene a $X_f$, significa che non soddisfa la condizione di appartenenza a $X_f$, cioè non è vero che $y \\notin f(y)$. Questo equivale a dire che $y \\in f(y)$. Ma poiché $f(y) = X_f$, questo implica $y \\in X_f$. Anche in questo caso contraddizione: $y \\notin X_f \\Rightarrow y \\in X_f$.</p>
            <p>In entrambi i casi si giunge a una contraddizione. L'assurdo nasce dall'ipotesi che esista una funzione <strong>suriettiva</strong> $f: X \\to \\mathcal{P}(X)$. Pertanto non può esistere alcuna funzione suriettiva, e a maggior ragione nessuna biiezione, tra $X$ e $\\mathcal{P}(X)$.</p>
            <p>Concludiamo quindi che $|X| \\ne |\\mathcal{P}(X)|$. Unito al risultato precedente $|X| \\le |\\mathcal{P}(X)|$, otteniamo la tesi $|X| \\lt |\\mathcal{P}(X)|$. $\\square$</p>`
          }
        ],
        formulas: [
          { label: "Secondo Teorema di Cantor", latex: "|X| \\lt |\\mathcal{P}(X)| \\quad \\forall X" },
          { label: "Iniezione canonica", latex: "j: X \\to \\mathcal{P}(X), \\quad j(x) = \\{x\\}" },
          { label: "Insieme diagonale", latex: "X_f := \\{x \\in X \\mid x \\notin f(x)\\}" }
        ]
      },

      {
        id: "s12-alert-suriettiva",
        type: "alert_box",
        title: "Cosa viene davvero negato",
        icon: "⚠️",
        content: `<p>La parte per assurdo non nega soltanto l'esistenza di una biiezione: nega l'esistenza di <strong>qualsiasi funzione suriettiva</strong> $f: X \\to \\mathcal{P}(X)$. Infatti nell'argomento si usa <em>solo</em> la suriettività, mai l'iniettività.</p>
        <p>Questo è più forte, ed è il motivo per cui l'enunciato si può riformulare così: per ogni $f: X \\to \\mathcal{P}(X)$, l'insieme $X_f$ è un elemento di $\\mathcal{P}(X)$ che <strong>non sta nell'immagine di $f$</strong>. Nessuna suriettività $\\Rightarrow$ a maggior ragione nessuna biiezione.</p>`
      },

      {
        id: "s12-dim-alternativa",
        type: "section",
        title: "Dimostrazione alternativa e argomento diagonale",
        icon: "🔀",
        content: `<p>Esiste una dimostrazione alternativa del Secondo Teorema di Cantor appena dimostrato, del tutto equivalente, che fa uso delle <strong>funzioni caratteristiche</strong> e mette in luce una tecnica potente nota come <strong>argomento diagonale di Cantor</strong>.</p>`,
        subsections: [
          {
            subtitle: "Richiamo: $\\mathcal{P}(X)$ e $\\{0,1\\}^X$",
            content: `<p>Ricordiamo che esiste una biiezione $\\varphi: \\mathcal{P}(X) \\to \\{0,1\\}^X$, dove $\\{0,1\\}^X$ è l'insieme di tutte le funzioni da $X$ a $\\{0,1\\}$. Questa biiezione associa a ogni sottoinsieme $Y \\subseteq X$ la sua <strong>funzione caratteristica</strong> $\\chi_Y: X \\to \\{0,1\\}$, definita da</p>
            <p>$$\\chi_Y(x) = \\begin{cases} 1 & \\text{se } x \\in Y \\\\ 0 & \\text{se } x \\notin Y \\end{cases}$$</p>
            <p>Grazie a questa biiezione abbiamo $|\\mathcal{P}(X)| = |\\{0,1\\}^X|$. La tesi del Teorema di Cantor, $|X| \\lt |\\mathcal{P}(X)|$, diventa quindi equivalente a dimostrare che $|X| \\lt |\\{0,1\\}^X|$.</p>`
          },
          {
            subtitle: "Dimostrazione: nessuna $g: X \\to \\{0,1\\}^X$ è suriettiva",
            content: `<p>Supponiamo per assurdo che esista una funzione suriettiva $g: X \\to \\{0,1\\}^X$. Per ogni $x \\in X$, $g(x)$ è una funzione da $X$ a $\\{0,1\\}$. Chiamiamo $\\chi_x := g(x)$; quindi, per ogni $x \\in X$, $\\chi_x: X \\to \\{0,1\\}$.</p>
            <p>Costruiamo ora una nuova funzione $\\eta_g: X \\to \\{0,1\\}$ che non appartiene all'immagine di $g$. Definiamo</p>
            <p>$$\\eta_g(x) = 1 - \\chi_x(x) \\quad \\forall x \\in X$$</p>
            <p>La funzione $\\eta_g$ è ben definita, poiché $\\chi_x(x)$ può valere solo $0$ o $1$, e quindi $1 - \\chi_x(x)$ varrà $1$ o $0$. Dunque $\\eta_g \\in \\{0,1\\}^X$.</p>
            <p>Mostriamo ora che $\\eta_g$ non può trovarsi nell'immagine di $g$. Se per assurdo $\\eta_g \\in \\mathrm{im}(g)$, allora per definizione di immagine deve esistere un elemento $y \\in X$ tale che $g(y) = \\eta_g$, cioè $\\chi_y = \\eta_g$. Ma se queste due funzioni fossero uguali, dovrebbero assumere lo stesso valore per ogni elemento del dominio, in particolare per $y$ stesso. Valutiamole in $y$:</p>
            <p>— per definizione di $\\eta_g$: $\\eta_g(y) = 1 - \\chi_y(y)$;<br>
            — per l'ipotesi $\\chi_y = \\eta_g$: $\\chi_y(y) = \\eta_g(y)$.</p>
            <p>Sostituendo la seconda nella prima otteniamo</p>
            <p>$$\\chi_y(y) = 1 - \\chi_y(y)$$</p>
            <p>Questa equazione non ha soluzione in $\\{0,1\\}$. Se $\\chi_y(y) = 0$ si ottiene $0 = 1$, assurdo. Se $\\chi_y(y) = 1$ si ottiene $1 = 0$, assurdo.</p>
            <p>La contraddizione dimostra che l'elemento $\\eta_g$ non può essere nell'immagine di $g$. Quindi la funzione $g$ non è suriettiva. $\\square$</p>`
          },
          {
            subtitle: "Equivalenza delle due dimostrazioni per $X = \\mathbb{N}$",
            content: `<p>Le due dimostrazioni sono profondamente legate. Vediamo l'equivalenza per $X = \\mathbb{N}$.</p>
            <p>Sia $f: \\mathbb{N} \\to \\mathcal{P}(\\mathbb{N})$ una funzione e consideriamo la biiezione $\\varphi: \\mathcal{P}(\\mathbb{N}) \\to \\{0,1\\}^{\\mathbb{N}}$. La composizione $f' = \\varphi \\circ f$ è una funzione $f': \\mathbb{N} \\to \\{0,1\\}^{\\mathbb{N}}$.</p>
            <p>L'insieme "diagonale" della prima dimostrazione era $N_f = \\{n \\in \\mathbb{N} \\mid n \\notin f(n)\\}$. La funzione "diagonale" della seconda dimostrazione, costruita a partire da $f'$, è $\\eta_{f'}: \\mathbb{N} \\to \\{0,1\\}$ definita da $\\eta_{f'}(n) = 1 - f'(n)(n)$.</p>
            <p>Mostriamo che $\\varphi(N_f) = \\eta_{f'}$. La funzione caratteristica di $N_f$, che è $\\varphi(N_f)$, vale $1$ per un certo $n$ se e solo se $n \\in N_f$, cioè $n \\notin f(n)$. D'altra parte, $n \\notin f(n)$ significa che la funzione caratteristica di $f(n)$, che è $\\varphi(f(n)) = f'(n)$, vale $0$ in $n$, cioè $f'(n)(n) = 0$. Quindi</p>
            <p>$$\\varphi(N_f)(n) = 1 \\iff f'(n)(n) = 0$$</p>
            <p>che è esattamente come è definita $\\eta_{f'}(n) = 1 - f'(n)(n)$.</p>
            <p>L'insieme "problematico" della prima dimostrazione corrisponde esattamente alla funzione "problematica" della seconda.</p>`
          }
        ],
        formulas: [
          { label: "Funzione caratteristica", latex: "\\chi_Y(x) = 1 \\text{ se } x \\in Y, \\quad \\chi_Y(x) = 0 \\text{ se } x \\notin Y" },
          { label: "Biiezione parti–funzioni", latex: "\\varphi: \\mathcal{P}(X) \\to \\{0,1\\}^X, \\quad |\\mathcal{P}(X)| = |\\{0,1\\}^X|" },
          { label: "Funzione diagonale", latex: "\\eta_g(x) = 1 - \\chi_x(x)" },
          { label: "Equazione impossibile", latex: "\\chi_y(y) = 1 - \\chi_y(y)" }
        ]
      },

      {
        id: "s12-diagonale-reali",
        type: "section",
        title: "L'argomento diagonale e la non-numerabilità di $\\mathbb{R}$",
        icon: "📐",
        content: `<p>L'argomento diagonale è una tecnica potente che può essere usata anche per dimostrare che l'insieme dei numeri reali $\\mathbb{R}$ <strong>non è numerabile</strong>.</p>`,
        subsections: [
          {
            subtitle: "Esempio: $(0,1)$ non è numerabile",
            content: `<p>Dimostriamo che l'intervallo $(0,1)$ non è numerabile. Poiché $(0,1) \\subset \\mathbb{R}$, questo implica che anche $\\mathbb{R}$ non è numerabile.</p>
            <p>Supponiamo per assurdo che $(0,1)$ sia numerabile. Allora esiste una biiezione $f: \\mathbb{N} \\to (0,1)$, il che significa che possiamo elencare tutti i numeri reali in $(0,1)$ in una successione $\\{x_n\\}_{n \\in \\mathbb{N}}$.</p>
            <p>Scriviamo ogni numero $x_n$ nella sua rappresentazione decimale infinita, fissando la convenzione che garantisce l'unicità: si scelgono le espansioni <strong>non definitivamente uguali a $9$</strong> (sono dunque ammesse le code di zeri). Con questa scelta ogni reale di $(0,1)$ ha una e una sola scrittura $0,a_0a_1a_2\\dots$</p>
            <p>$$\\begin{aligned}
            x_0 &= 0,a_{00}\\,a_{01}\\,a_{02}\\,a_{03}\\dots \\\\
            x_1 &= 0,a_{10}\\,a_{11}\\,a_{12}\\,a_{13}\\dots \\\\
            x_2 &= 0,a_{20}\\,a_{21}\\,a_{22}\\,a_{23}\\dots \\\\
            &\\vdots \\\\
            x_n &= 0,a_{n0}\\,a_{n1}\\,a_{n2}\\dots a_{nn}\\dots \\\\
            &\\vdots
            \\end{aligned}$$</p>
            <p>dove $a_{ij}$ è la $j$-esima cifra decimale dell'$i$-esimo numero.</p>
            <p>Costruiamo ora un nuovo numero reale $y \\in (0,1)$ che non compare in questa lista. Sia $y = 0,b_0b_1b_2\\dots$, dove le cifre $b_n$ sono definite come segue:</p>
            <p>$$b_n = \\begin{cases} 5 & \\text{se } a_{nn} = 4 \\\\ 4 & \\text{se } a_{nn} \\ne 4 \\end{cases}$$</p>
            <p>Questo nuovo numero $y$ è sicuramente un elemento di $(0,1)$. Tuttavia $y$ non può essere uguale a nessuno degli $x_n$ nella lista: per ogni $n \\in \\mathbb{N}$ il numero $y$ differisce dal numero $x_n$ almeno nella $n$-esima cifra decimale, perché per costruzione $b_n \\ne a_{nn}$.</p>
            <p>Quindi $y$ è un elemento di $(0,1)$ che non era presente nell'elenco. Ciò contraddice l'ipotesi che l'elenco fosse completo. Pertanto l'intervallo $(0,1)$ e l'insieme $\\mathbb{R}$ non sono numerabili. $\\square$</p>`
          },
          {
            subtitle: "Perché le cifre 4 e 5",
            content: `<p>Da notare: la scelta di usare <strong>solo le cifre $4$ e $5$</strong> non è casuale. Il passaggio delicato dell'argomento è: "le scritture decimali differiscono $\\Rightarrow$ i numeri sono diversi". Questa implicazione è falsa in generale, perché un numero può avere due scritture decimali (ad esempio $0,5000\\dots = 0,4999\\dots$).</p>
            <p>Il numero $y$ costruito con sole cifre $4$ e $5$ non presenta mai questa doppia rappresentazione: le scritture ambigue sono esattamente quelle definitivamente uguali a $9$ e le corrispondenti scritture definitivamente uguali a $0$, mentre $y$ non ha né code di $9$ né code di $0$. Dunque, avendo fissato per gli $x_n$ le espansioni non definitivamente uguali a $9$, dalla disuguaglianza di cifre $b_n \\ne a_{nn}$ segue davvero $y \\ne x_n$.</p>`
          },
          {
            subtitle: "Visualizzazione dell'argomento diagonale",
            content: `<p>La seconda dimostrazione del Teorema di Cantor per $X = \\mathbb{N}$ può essere visualizzata in modo simile. Se $g: \\mathbb{N} \\to \\{0,1\\}^{\\mathbb{N}}$ fosse suriettiva, potremmo elencare tutte le successioni di $0$ e $1$, $\\chi_n = g(n)$:</p>
            <p>$$\\begin{aligned}
            \\chi_0 &= (\\chi_{0,0}, \\chi_{0,1}, \\chi_{0,2}, \\dots) \\\\
            \\chi_1 &= (\\chi_{1,0}, \\chi_{1,1}, \\chi_{1,2}, \\dots) \\\\
            \\chi_2 &= (\\chi_{2,0}, \\chi_{2,1}, \\chi_{2,2}, \\dots) \\\\
            &\\vdots
            \\end{aligned}$$</p>
            <p>La successione "diagonale" $\\eta_g$ è costruita prendendo gli elementi sulla diagonale principale $(\\chi_{0,0}, \\chi_{1,1}, \\chi_{2,2}, \\dots)$ e "invertendoli":</p>
            <p>$$\\eta_g = (1-\\chi_{0,0},\\ 1-\\chi_{1,1},\\ 1-\\chi_{2,2},\\ \\dots)$$</p>
            <p>Per costruzione $\\eta_g$ differisce da ogni $\\chi_n$ nell'$n$-esima posizione, quindi non può essere presente nella lista.</p>`
          }
        ],
        formulas: [
          { label: "Cifra diagonale modificata", latex: "b_n = 5 \\text{ se } a_{nn} = 4, \\quad b_n = 4 \\text{ se } a_{nn} \\ne 4" },
          { label: "Non-numerabilità", latex: "|\\mathbb{N}| \\lt |(0,1)| \\le |\\mathbb{R}|" }
        ]
      },

      {
        id: "s12-cardinali",
        type: "section",
        title: "Cardinali infiniti: la gerarchia dell'insieme delle parti",
        icon: "🪜",
        content: `<p>Il Teorema di Cantor apre la porta a una <strong>gerarchia di infiniti</strong>. Per classificarli si introducono i numeri cardinali transfiniti.</p>
        <p><strong>Definizione.</strong> Si definisce ricorsivamente la gerarchia dei cardinali ottenuta iterando l'insieme delle parti (in notazione standard i cardinali <em>beth</em>, lettera ebraica $\\beth$):</p>
        <p>$$\\beth_0 := |\\mathbb{N}|, \\qquad \\beth_{n+1} := |\\mathcal{P}(X_n)| \\ \\text{ dove } |X_n| = \\beth_n$$</p>
        <p>cioè $X_n$ è un qualsiasi insieme di cardinalità $\\beth_n$ (la definizione è ben posta: vedi l'esercizio Teoria 3).</p>
        <p>In particolare:</p>
        <p>— $\\beth_0 = \\aleph_0 = |\\mathbb{N}|$ è la <strong>potenza del numerabile</strong>;<br>
        — $\\beth_1 := |\\mathcal{P}(\\mathbb{N})|$ è la <strong>potenza del continuo</strong>.</p>`,
        subsections: [
          {
            subtitle: "La cardinalità di $\\mathbb{R}$",
            content: `<p>Enunciamo senza dimostrazione il fatto che giustifica il nome "potenza del continuo": la cardinalità dei numeri reali è uguale a quella dell'insieme delle parti dei numeri naturali,</p>
            <p>$$|\\mathbb{R}| = |\\mathcal{P}(\\mathbb{N})| = \\beth_1$$</p>`
          },
          {
            subtitle: "La gerarchia è strettamente crescente",
            content: `<p>Il Teorema di Cantor implica che questa successione di cardinali è strettamente crescente:</p>
            <p>$$\\beth_0 \\lt \\beth_1 \\lt \\beth_2 \\lt \\dots \\lt \\beth_n \\lt \\beth_{n+1} \\lt \\dots$$</p>
            <p>Questo significa che <strong>esistono infiniti livelli di infinito</strong>, uno strettamente più grande dell'altro.</p>`
          },
          {
            subtitle: "L'ordine fra cardinalità",
            content: `<p>Si può dimostrare, ma solo usando l'<strong>assioma della scelta</strong>, che la relazione d'ordine $\\le$ tra cardinalità è un <em>buon ordinamento</em>. Senza l'assioma della scelta la confrontabilità di due cardinali qualsiasi può fallire; l'antisimmetria, cioè il <strong>teorema di Cantor–Bernstein</strong>, vale invece senza di esso.</p>
            <p>In particolare, con l'assioma della scelta si ha un ordinamento <strong>totale</strong>: dati due insiemi qualsiasi $X, Y$, si ha sempre $|X| \\le |Y|$ oppure $|Y| \\le |X|$.</p>`
          }
        ],
        formulas: [
          { label: "Potenza del numerabile", latex: "\\beth_0 = \\aleph_0 = |\\mathbb{N}|" },
          { label: "Potenza del continuo", latex: "\\beth_1 = |\\mathcal{P}(\\mathbb{N})| = |\\mathbb{R}|" },
          { label: "Passo ricorsivo", latex: "\\beth_{n+1} = |\\mathcal{P}(X_n)|, \\quad |X_n| = \\beth_n" }
        ]
      },

      {
        id: "s12-alert-notazione",
        type: "alert_box",
        title: "Trappola di notazione: aleph contro beth",
        icon: "🚨",
        content: `<p>In aula la gerarchia ottenuta iterando l'insieme delle parti è stata indicata con la lettera <strong>Aleph</strong> ($\\aleph_0, \\aleph_1, \\aleph_2, \\dots$). Nella notazione standard della teoria degli insiemi, però, i due simboli hanno significati <strong>diversi</strong> e non vanno confusi:</p>
        <p>— $\\beth_0 = |\\mathbb{N}|$, $\\beth_{n+1} = |\\mathcal{P}(X_n)|$: la gerarchia <strong>beth</strong>, definita iterando l'insieme delle parti. Quindi $|\\mathbb{R}| = \\beth_1$ è un <em>teorema</em> (dato per noto).</p>
        <p>— $\\aleph_1$: il <strong>più piccolo cardinale non numerabile</strong>, definito come primo cardinale $\\gt \\aleph_0$ (nessun riferimento a $\\mathcal{P}$).</p>
        <p>Conseguenza cruciale: l'uguaglianza $|\\mathbb{R}| = \\aleph_1$, cioè $\\beth_1 = \\aleph_1$, <strong>non è un teorema</strong>: è esattamente l'Ipotesi del Continuo. Usare $\\aleph_1$ per denotare $|\\mathcal{P}(\\mathbb{N})|$ rende CH una tautologia e fa svanire tutto il problema. Per questo in queste note la gerarchia delle parti si scrive con $\\beth$ e $\\aleph_1$ resta riservato al minimo cardinale non numerabile.</p>`
      },

      {
        id: "s12-ch",
        type: "section",
        title: "Ipotesi del Continuo (CH)",
        icon: "❓",
        content: `<p><strong>Definizione (Ipotesi del Continuo, Cantor).</strong> L'ipotesi afferma che non esiste alcun insieme $X$ la cui cardinalità sia strettamente compresa tra quella dei numeri naturali e quella dei numeri reali. In simboli:</p>
        <p>$$\\nexists X \\text{ tale che } \\aleph_0 \\lt |X| \\lt |\\mathbb{R}|$$</p>
        <p>Equivalentemente, nella notazione corretta: $\\beth_1 = \\aleph_1$, ossia $|\\mathbb{R}|$ è <em>il primo</em> cardinale non numerabile, cioè $2^{\\aleph_0} = \\aleph_1$.</p>
        <p>Detto in modo intuitivo: fra il numerabile e il continuo <strong>non c'è niente in mezzo</strong>.</p>`,
        formulas: [
          { label: "CH (forma insiemistica)", latex: "\\nexists X : \\aleph_0 \\lt |X| \\lt |\\mathbb{R}|" },
          { label: "CH (forma cardinale)", latex: "2^{\\aleph_0} = \\beth_1 = \\aleph_1" }
        ]
      },

      {
        id: "s12-gch",
        type: "section",
        title: "Ipotesi del Continuo Generalizzata (GCH)",
        icon: "🌐",
        content: `<p><strong>Definizione (Ipotesi del Continuo Generalizzata).</strong> È una generalizzazione dell'ipotesi precedente: per ogni insieme infinito $X$ non esiste alcun insieme $Y$ con cardinalità strettamente compresa tra $|X|$ e $|\\mathcal{P}(X)|$,</p>
        <p>$$\\nexists Y \\text{ tale che } |X| \\lt |Y| \\lt |\\mathcal{P}(X)|$$</p>
        <p>In particolare, lungo la gerarchia delle parti, per ogni $n \\in \\mathbb{N}$:</p>
        <p>$$\\nexists Y \\text{ tale che } \\beth_n \\lt |Y| \\lt \\beth_{n+1}$$</p>
        <p>Questo equivale a dire che la successione dei cardinali $\\beth_n$ <em>non ha buchi</em>.</p>`,
        extra_content: `<p><strong>Attenzione alla forza degli enunciati:</strong> l'enunciato relativo ai soli $\\beth_n$ con $n \\in \\mathbb{N}$ è <strong>strettamente più debole</strong> di GCH nella sua forma generale, perché non tutti i cardinali infiniti sono della forma $\\beth_n$ con $n \\in \\mathbb{N}$ (la gerarchia prosegue oltre, sugli indici ordinali transfiniti).</p>`,
        formulas: [
          { label: "GCH (forma generale)", latex: "\\nexists Y : |X| \\lt |Y| \\lt |\\mathcal{P}(X)|" },
          { label: "GCH lungo la gerarchia", latex: "\\nexists Y : \\beth_n \\lt |Y| \\lt \\beth_{n+1}" }
        ]
      },

      {
        id: "s12-status-ch",
        type: "note_box",
        title: "Status dell'Ipotesi del Continuo: l'indipendenza da ZFC",
        icon: "🏛️",
        content: `<p>La questione se l'ipotesi del continuo sia vera o falsa è uno dei problemi più profondi della matematica. I due risultati chiave sono di <strong>consistenza relativa</strong>: valgono <em>a patto che ZFC sia coerente</em>.</p>
        <p><strong>Se ZFC è coerente</strong>, allora:</p>
        <p>— <strong>Kurt Gödel (1940):</strong> l'ipotesi del continuo <em>non può essere dimostrata falsa</em> a partire dagli assiomi standard della teoria degli insiemi (Zermelo–Fraenkel con l'assioma della scelta, ZFC). Cioè: ZFC $+$ CH è coerente.</p>
        <p>— <strong>Paul Cohen (1963):</strong> l'ipotesi del continuo <em>non può essere dimostrata vera</em> a partire dagli stessi assiomi. Cioè: ZFC $+$ $\\lnot$CH è coerente.</p>
        <p>Il risultato complessivo è che l'ipotesi del continuo è <strong>indipendente</strong> dagli assiomi ZFC. Ciò significa che, sempre sotto l'ipotesi che ZFC sia coerente, si può scegliere di accettare CH come nuovo assioma oppure di accettare la sua negazione: entrambe le teorie risultanti (ZFC $+$ CH e ZFC $+$ $\\lnot$CH) sono coerenti, dando origine a due diverse "matematiche".</p>`,
        extra_content: `<p><strong>Precisazione importante.</strong> Questo fenomeno <strong>non</strong> è una conseguenza dei <em>Teoremi di Incompletezza di Gödel</em>: l'indipendenza dell'ipotesi del continuo è stata ottenuta con tecniche del tutto diverse — il modello interno degli <strong>insiemi costruibili</strong> di Gödel e il metodo del <strong>forcing</strong> di Cohen. Ne costituisce un esempio concettualmente analogo (un enunciato indecidibile in ZFC), <strong>non un corollario</strong>.</p>`,
        table_compare: {
          headers: ["Autore / anno", "Tecnica", "Risultato (se ZFC è coerente)"],
          rows: [
            ["Gödel, 1940", "Modello interno degli insiemi costruibili $L$", "ZFC $+$ CH è coerente: CH non è refutabile in ZFC"],
            ["Cohen, 1963", "Metodo del forcing", "ZFC $+$ $\\lnot$CH è coerente: CH non è dimostrabile in ZFC"],
            ["Conclusione", "—", "CH è indipendente da ZFC"]
          ]
        }
      },

      {
        id: "s12-oral-box",
        type: "oral_box",
        title: "Domanda tipica all'orale",
        icon: "🎓",
        content: `<p><em>«Mi dimostri che esistono infiniti più grandi di altri.»</em></p>
        <p>È la richiesta del Secondo Teorema di Cantor. Schema di risposta in quattro mosse:</p>
        <p><strong>1.</strong> Enunciato: per ogni insieme $X$, $|X| \\lt |\\mathcal{P}(X)|$.</p>
        <p><strong>2.</strong> Disuguaglianza larga: $j(x) = \\{x\\}$ è iniettiva $X \\to \\mathcal{P}(X)$, quindi $|X| \\le |\\mathcal{P}(X)|$.</p>
        <p><strong>3.</strong> Stretta: data una qualsiasi $f: X \\to \\mathcal{P}(X)$, si pone $X_f = \\{x \\in X \\mid x \\notin f(x)\\} \\in \\mathcal{P}(X)$ e si mostra che $X_f \\notin \\mathrm{im}(f)$, perché per ogni $y$ con $f(y) = X_f$ si avrebbe $y \\in X_f \\iff y \\notin X_f$.</p>
        <p><strong>4.</strong> Conclusione: nessuna $f$ è suriettiva, dunque nessuna è biiettiva, e con il punto 2 si ottiene la disuguaglianza stretta.</p>
        <p>Se si chiede l'enunciato della gerarchia, ricordarsi di non confondere $\\beth_1 = |\\mathcal{P}(\\mathbb{N})|$ con $\\aleph_1$: la loro uguaglianza è CH, non un teorema.</p>`
      },

      {
        id: "s12-integrazione-esercizi",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s12-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enuncia il secondo teorema di Cantor e dimostra in dettaglio la sola disuguaglianza larga $|X| \\le |\\mathcal{P}(X)|$, esibendo esplicitamente una funzione e verificandone l'iniettività. Il caso $X = \\emptyset$ è compreso?</p>`,
        solution: `<p><strong>Enunciato:</strong> per ogni insieme $X$ (finito o infinito) si ha $|X| \\lt |\\mathcal{P}(X)|$.</p>
        <p>Per la disuguaglianza larga, per definizione, basta esibire una funzione iniettiva $j: X \\to \\mathcal{P}(X)$. Poniamo $j(x) = \\{x\\}$ per ogni $x \\in X$: la definizione ha senso perché $\\{x\\} \\subseteq X$, cioè $\\{x\\} \\in \\mathcal{P}(X)$.</p>
        <p><strong>Iniettività:</strong> se $j(x_1) = j(x_2)$ allora $\\{x_1\\} = \\{x_2\\}$; poiché $x_1 \\in \\{x_1\\} = \\{x_2\\}$ e l'unico elemento di $\\{x_2\\}$ è $x_2$, si ottiene $x_1 = x_2$. Dunque $j$ è iniettiva e $|X| \\le |\\mathcal{P}(X)|$.</p>
        <p><strong>Caso vuoto:</strong> il caso $X = \\emptyset$ è compreso: $j$ è la funzione vuota, che è (banalmente) iniettiva, e infatti $|\\emptyset| = 0 \\lt 1 = |\\mathcal{P}(\\emptyset)|$ dato che $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$.</p>
        <p>Si noti che questa parte non usa alcuna ipotesi su $X$: la distinzione fra caso finito e caso infinito serve solo per comodità espositiva, l'argomento vale in generale.</p>`
      },

      {
        id: "s12-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Sia $X$ un insieme e sia $f: X \\to \\mathcal{P}(X)$ una funzione qualsiasi. Posto $X_f := \\{x \\in X \\mid x \\notin f(x)\\}$, dimostra che $X_f \\notin \\mathrm{im}(f)$. Dedurne che nessuna funzione da $X$ a $\\mathcal{P}(X)$ è suriettiva e, insieme all'esercizio precedente, la tesi $|X| \\lt |\\mathcal{P}(X)|$.</p>`,
        solution: `<p>Anzitutto $X_f$ è ben definito: per ogni $x \\in X$ si ha $f(x) \\in \\mathcal{P}(X)$, cioè $f(x) \\subseteq X$, quindi la condizione $x \\notin f(x)$ è una proprietà sensata di $x$. Inoltre $X_f \\subseteq X$, dunque $X_f \\in \\mathcal{P}(X)$.</p>
        <p>Supponiamo per assurdo $X_f \\in \\mathrm{im}(f)$: esiste allora $y \\in X$ con $f(y) = X_f$. Si danno due casi.</p>
        <p>— Se $y \\in X_f$, per definizione di $X_f$ vale $y \\notin f(y) = X_f$, cioè $y \\notin X_f$: assurdo.</p>
        <p>— Se $y \\notin X_f$, allora $y$ non soddisfa la condizione che definisce $X_f$, cioè non è vero che $y \\notin f(y)$, dunque $y \\in f(y) = X_f$: assurdo.</p>
        <p>In sintesi $y \\in X_f \\iff y \\notin f(y) \\iff y \\notin X_f$, impossibile. Quindi $X_f \\notin \\mathrm{im}(f)$.</p>
        <p>Poiché $X_f \\in \\mathcal{P}(X)$, la funzione $f$ non è suriettiva; essendo $f$ arbitraria, nessuna funzione $X \\to \\mathcal{P}(X)$ è suriettiva, e in particolare nessuna è biiettiva: $|X| \\ne |\\mathcal{P}(X)|$. Unendo a $|X| \\le |\\mathcal{P}(X)|$ si ottiene $|X| \\lt |\\mathcal{P}(X)|$.</p>`
      },

      {
        id: "s12-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Si definisca $\\beth_0 := |\\mathbb{N}|$ e $\\beth_{n+1} := |\\mathcal{P}(X_n)|$, dove $X_n$ è un qualsiasi insieme con $|X_n| = \\beth_n$. (a) Verifica che la definizione è ben posta, cioè che non dipende dalla scelta di $X_n$. (b) Dimostra che $\\beth_n \\lt \\beth_{n+1}$ per ogni $n \\in \\mathbb{N}$ e che quindi $\\beth_m \\lt \\beth_n$ per ogni $m \\lt n$.</p>`,
        solution: `<p><strong>(a)</strong> Basta mostrare che se $|X| = |Y|$ allora $|\\mathcal{P}(X)| = |\\mathcal{P}(Y)|$. Sia $b: X \\to Y$ una biiezione e si definisca $B: \\mathcal{P}(X) \\to \\mathcal{P}(Y)$ con $B(A) = b(A) = \\{b(a) \\mid a \\in A\\}$. La funzione $C: \\mathcal{P}(Y) \\to \\mathcal{P}(X)$, $C(D) = b^{-1}(D) = \\{b^{-1}(d) \\mid d \\in D\\}$, è ben definita e soddisfa $C(B(A)) = A$ e $B(C(D)) = D$ (perché $b$ è biiettiva), dunque $B$ è biiettiva e $|\\mathcal{P}(X)| = |\\mathcal{P}(Y)|$. Quindi $\\beth_{n+1}$ non dipende dal rappresentante $X_n$ scelto.</p>
        <p><strong>(b)</strong> Per il teorema di Cantor applicato a $X_n$ si ha $\\beth_n = |X_n| \\lt |\\mathcal{P}(X_n)| = \\beth_{n+1}$. Per la transitività: se $m \\lt n$, componendo le iniezioni $X_m \\hookrightarrow \\mathcal{P}(X_m) \\hookrightarrow \\dots$ si ottiene $\\beth_m \\le \\beth_n$, e se fosse $\\beth_m = \\beth_n$ allora da $\\beth_m \\lt \\beth_{m+1} \\le \\beth_n = \\beth_m$ si avrebbe $\\beth_m \\lt \\beth_m$, assurdo.</p>
        <p>Dunque $\\beth_0 \\lt \\beth_1 \\lt \\beth_2 \\lt \\dots$: esistono infiniti livelli di infinito, ciascuno strettamente maggiore del precedente.</p>`
      },

      {
        id: "s12-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sia $X = \\{1,2,3\\}$ e sia $f: X \\to \\mathcal{P}(X)$ definita da $f(1) = \\{1,2\\}$, $f(2) = \\emptyset$, $f(3) = \\{1,3\\}$. Determina l'insieme diagonale $X_f = \\{x \\in X \\mid x \\notin f(x)\\}$, verifica che $X_f \\notin \\mathrm{im}(f)$ ed esibisci tutti i sottoinsiemi di $X$ non appartenenti a $\\mathrm{im}(f)$.</p>`,
        solution: `<p>Si controlla elemento per elemento: $1 \\in f(1) = \\{1,2\\}$, quindi $1 \\notin X_f$; $2 \\notin f(2) = \\emptyset$, quindi $2 \\in X_f$; $3 \\in f(3) = \\{1,3\\}$, quindi $3 \\notin X_f$. Dunque</p>
        <p>$$X_f = \\{2\\}$$</p>
        <p>L'immagine di $f$ è $\\mathrm{im}(f) = \\{\\{1,2\\},\\ \\emptyset,\\ \\{1,3\\}\\}$ e in effetti $\\{2\\} \\notin \\mathrm{im}(f)$, come garantito dall'argomento diagonale.</p>
        <p>Poiché $|\\mathcal{P}(X)| = 2^3 = 8 \\gt 3 = |X|$, i sottoinsiemi non raggiunti sono $8 - 3 = 5$, cioè</p>
        <p>$$\\{1\\},\\quad \\{2\\},\\quad \\{3\\},\\quad \\{2,3\\},\\quad \\{1,2,3\\}$$</p>
        <p>Si osservi la coerenza con la dimostrazione del teorema: $f$ non può essere suriettiva perché $3 \\lt 8$, e l'argomento diagonale ne esibisce esplicitamente un testimone, $X_f = \\{2\\}$.</p>`
      },

      {
        id: "s12-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sia $g: \\mathbb{N} \\to \\{0,1\\}^{\\mathbb{N}}$ definita da $g(n) = \\chi_n$, dove $\\chi_n(m) = 1$ se $m \\le n$ e $\\chi_n(m) = 0$ se $m \\gt n$. Calcola la funzione diagonale $\\eta_g(n) = 1 - \\chi_n(n)$, verifica direttamente che $\\eta_g \\notin \\mathrm{im}(g)$ e descrivi, tramite la biiezione $\\varphi: \\mathcal{P}(\\mathbb{N}) \\to \\{0,1\\}^{\\mathbb{N}}$, il sottoinsieme di $\\mathbb{N}$ corrispondente e la funzione $f = \\varphi^{-1} \\circ g$ con il suo insieme diagonale $N_f$.</p>`,
        solution: `<p>Per ogni $n$ si ha $n \\le n$, dunque $\\chi_n(n) = 1$ e quindi $\\eta_g(n) = 1 - 1 = 0$ per ogni $n \\in \\mathbb{N}$: $\\eta_g$ è la <strong>funzione identicamente nulla</strong>.</p>
        <p><strong>Verifica diretta che $\\eta_g \\notin \\mathrm{im}(g)$:</strong> ogni elemento dell'immagine è un $\\chi_n$ e $\\chi_n(0) = 1$ (perché $0 \\le n$), mentre $\\eta_g(0) = 0$; dunque $\\eta_g \\ne \\chi_n$ per ogni $n$ e $g$ non è suriettiva.</p>
        <p><strong>Traduzione insiemistica:</strong> $\\varphi^{-1}(\\eta_g) = \\{n \\in \\mathbb{N} \\mid \\eta_g(n) = 1\\} = \\emptyset$. La funzione $f = \\varphi^{-1} \\circ g: \\mathbb{N} \\to \\mathcal{P}(\\mathbb{N})$ è</p>
        <p>$$f(n) = \\{m \\in \\mathbb{N} \\mid \\chi_n(m) = 1\\} = \\{0,1,\\dots,n\\}$$</p>
        <p>e il suo insieme diagonale è $N_f = \\{n \\in \\mathbb{N} \\mid n \\notin f(n)\\} = \\emptyset$, poiché $n \\in \\{0,\\dots,n\\}$ per ogni $n$.</p>
        <p>Coerentemente con l'equivalenza fra le due dimostrazioni, $\\varphi(N_f) = \\varphi(\\emptyset) = \\eta_g$, e $\\emptyset \\notin \\mathrm{im}(f)$ perché ogni $f(n)$ è non vuoto.</p>`
      },

      {
        id: "s12-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sia $X$ un insieme qualsiasi. Dimostra che non esiste alcuna funzione iniettiva $h: \\mathcal{P}(X) \\to X$ (cioè che $|\\mathcal{P}(X)| \\le |X|$ è falso) e deduci che non esiste un insieme $U$ di cardinalità massima, cioè tale che $|Y| \\le |U|$ per ogni insieme $Y$.</p>`,
        solution: `<p>Supponiamo per assurdo che esista $h: \\mathcal{P}(X) \\to X$ iniettiva. Osserviamo intanto che $X \\ne \\emptyset$, perché $h(\\emptyset) \\in X$.</p>
        <p>Costruiamo una funzione $f: X \\to \\mathcal{P}(X)$ così: se $x \\in \\mathrm{im}(h)$, per l'iniettività di $h$ esiste un <em>unico</em> $Y_x \\in \\mathcal{P}(X)$ con $h(Y_x) = x$ e poniamo $f(x) := Y_x$; se $x \\notin \\mathrm{im}(h)$ poniamo $f(x) := \\emptyset$. La definizione è lecita proprio grazie all'unicità di $Y_x$ (non serve l'assioma della scelta).</p>
        <p>Allora $f$ è suriettiva: dato $Y \\in \\mathcal{P}(X)$, posto $x := h(Y) \\in \\mathrm{im}(h)$ si ha $Y_x = Y$, cioè $f(h(Y)) = Y$. Ma per il secondo teorema di Cantor nessuna funzione $X \\to \\mathcal{P}(X)$ è suriettiva: contraddizione. Dunque non esiste alcuna iniezione $\\mathcal{P}(X) \\to X$ e $|\\mathcal{P}(X)| \\not\\le |X|$.</p>
        <p><strong>Deduzione:</strong> se esistesse $U$ con $|Y| \\le |U|$ per ogni $Y$, scegliendo $Y = \\mathcal{P}(U)$ si otterrebbe $|\\mathcal{P}(U)| \\le |U|$, cioè un'iniezione $\\mathcal{P}(U) \\to U$, che abbiamo appena escluso. Quindi non esiste una cardinalità massima: <strong>la gerarchia degli infiniti non ha un elemento più grande di tutti</strong>.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Enuncia il Secondo Teorema di Cantor.",
        back: "Per ogni insieme $X$, finito o infinito, si ha $|X| \\lt |\\mathcal{P}(X)|$. La morale: esistono infiniti strettamente più grandi di altri, perché per $X$ infinito la cardinalità di $X$ è strettamente minore di quella di $\\mathcal{P}(X)$."
      },
      {
        type: "dimostrazione",
        front: "Come si dimostra la disuguaglianza larga $|X| \\le |\\mathcal{P}(X)|$?",
        back: "Basta esibire un'iniezione $j: X \\to \\mathcal{P}(X)$. Si prende $j(x) = \\{x\\}$ (il singoletto), che è ben definita perché $\\{x\\} \\subseteq X$. È iniettiva: se $\\{x_1\\} = \\{x_2\\}$ allora $x_1 = x_2$. L'esistenza di un'iniezione dà $|X| \\le |\\mathcal{P}(X)|$."
      },
      {
        type: "dimostrazione",
        front: "Come si dimostra che non esiste una biiezione $f: X \\to \\mathcal{P}(X)$?",
        back: "Per assurdo, sia $f$ suriettiva. Si definisce l'insieme diagonale $X_f := \\{x \\in X \\mid x \\notin f(x)\\}$, ben definito perché ogni $f(x)$ è un sottoinsieme di $X$. Essendo $X_f \\in \\mathcal{P}(X)$, per suriettività esiste $y$ con $f(y) = X_f$. Se $y \\in X_f$ allora $y \\notin f(y) = X_f$: assurdo. Se $y \\notin X_f$ allora $y \\in f(y) = X_f$: assurdo. Dunque nessuna $f$ è suriettiva, a maggior ragione nessuna è biiettiva, quindi $|X| \\ne |\\mathcal{P}(X)|$."
      },
      {
        type: "tranello",
        front: "Nella dimostrazione per assurdo del teorema di Cantor si usa l'iniettività di $f$?",
        back: "No. Si usa <strong>solo la suriettività</strong>. L'argomento dimostra il fatto più forte che per ogni $f: X \\to \\mathcal{P}(X)$ l'insieme $X_f$ non sta in $\\mathrm{im}(f)$, cioè nessuna funzione $X \\to \\mathcal{P}(X)$ è suriettiva. La non esistenza di biiezioni è solo un corollario."
      },
      {
        type: "definizione",
        front: "Cos'è la funzione caratteristica e perché $|\\mathcal{P}(X)| = |\\{0,1\\}^X|$?",
        back: "Per $Y \\subseteq X$, $\\chi_Y: X \\to \\{0,1\\}$ vale $1$ se $x \\in Y$ e $0$ se $x \\notin Y$. La mappa $\\varphi: \\mathcal{P}(X) \\to \\{0,1\\}^X$, $\\varphi(Y) = \\chi_Y$, è una biiezione; quindi $|\\mathcal{P}(X)| = |\\{0,1\\}^X|$ e la tesi di Cantor diventa $|X| \\lt |\\{0,1\\}^X|$."
      },
      {
        type: "dimostrazione",
        front: "Versione con funzioni caratteristiche: perché nessuna $g: X \\to \\{0,1\\}^X$ è suriettiva?",
        back: "Posto $\\chi_x := g(x)$, si costruisce $\\eta_g(x) = 1 - \\chi_x(x)$, che è ben definita e sta in $\\{0,1\\}^X$. Se fosse $\\eta_g = g(y) = \\chi_y$, valutando in $y$ si otterrebbe $\\chi_y(y) = 1 - \\chi_y(y)$, equazione senza soluzione in $\\{0,1\\}$ ($0=1$ oppure $1=0$). Dunque $\\eta_g \\notin \\mathrm{im}(g)$ e $g$ non è suriettiva."
      },
      {
        type: "domanda",
        front: "Che legame c'è tra l'insieme diagonale $N_f$ e la funzione diagonale $\\eta_{f'}$ per $X = \\mathbb{N}$?",
        back: "Posto $f' = \\varphi \\circ f$, si ha $\\varphi(N_f) = \\eta_{f'}$. Infatti $\\varphi(N_f)(n) = 1 \\iff n \\in N_f \\iff n \\notin f(n) \\iff f'(n)(n) = 0$, che è esattamente $\\eta_{f'}(n) = 1 - f'(n)(n)$. L'insieme problematico della prima dimostrazione corrisponde alla funzione problematica della seconda."
      },
      {
        type: "dimostrazione",
        front: "Dimostra con l'argomento diagonale che $(0,1)$ non è numerabile.",
        back: "Per assurdo si elenchino tutti gli $x_n \\in (0,1)$ con la rappresentazione decimale infinita non definitivamente uguale a $9$ (unica), $x_n = 0,a_{n0}a_{n1}\\dots$. Si costruisce $y = 0,b_0b_1\\dots$ con $b_n = 5$ se $a_{nn} = 4$ e $b_n = 4$ altrimenti. Allora $y \\in (0,1)$ e per ogni $n$ vale $b_n \\ne a_{nn}$, quindi $y \\ne x_n$: l'elenco non era completo. Dunque $(0,1)$, e con esso $\\mathbb{R}$, non è numerabile."
      },
      {
        type: "tranello",
        front: "Perché nella diagonale sui reali si usano solo le cifre 4 e 5?",
        back: "Perché \"cifre diverse\" non implica in generale \"numeri diversi\": $0,5000\\dots = 0,4999\\dots$. Le ambiguità riguardano solo le espansioni definitivamente uguali a $9$ (e le corrispondenti code di zeri). Un numero scritto con sole cifre $4$ e $5$ non ha né code di $9$ né code di $0$, quindi non ha doppia rappresentazione: avendo fissato per gli $x_n$ le espansioni non definitivamente uguali a $9$, da $b_n \\ne a_{nn}$ segue davvero $y \\ne x_n$."
      },
      {
        type: "definizione",
        front: "Come si definisce la gerarchia dei cardinali ottenuta iterando l'insieme delle parti?",
        back: "Ricorsivamente: $\\beth_0 := |\\mathbb{N}|$ e $\\beth_{n+1} := |\\mathcal{P}(X_n)|$, con $X_n$ un qualsiasi insieme di cardinalità $\\beth_n$ (la definizione non dipende dal rappresentante). $\\beth_0 = \\aleph_0$ è la potenza del numerabile, $\\beth_1 = |\\mathcal{P}(\\mathbb{N})|$ la potenza del continuo. Per il teorema di Cantor $\\beth_0 \\lt \\beth_1 \\lt \\beth_2 \\lt \\dots$: infiniti livelli di infinito."
      },
      {
        type: "tranello",
        front: "Qual è la differenza tra $\\beth_1$ e $\\aleph_1$?",
        back: "$\\beth_1 := |\\mathcal{P}(\\mathbb{N})| = |\\mathbb{R}| = 2^{\\aleph_0}$ è definito iterando l'insieme delle parti. $\\aleph_1$ è invece <strong>il più piccolo cardinale non numerabile</strong>, definito senza riferimento a $\\mathcal{P}$. L'uguaglianza $\\beth_1 = \\aleph_1$, cioè $|\\mathbb{R}| = \\aleph_1$, <strong>non è un teorema</strong>: è esattamente l'Ipotesi del Continuo. Scrivere $\\aleph_1$ per $|\\mathcal{P}(\\mathbb{N})|$ fa sparire il problema per pura notazione."
      },
      {
        type: "definizione",
        front: "Enuncia l'Ipotesi del Continuo (CH).",
        back: "Non esiste alcun insieme $X$ con cardinalità strettamente compresa fra quella dei naturali e quella dei reali: $\\nexists X$ tale che $\\aleph_0 \\lt |X| \\lt |\\mathbb{R}|$. In forma cardinale: $2^{\\aleph_0} = \\beth_1 = \\aleph_1$, cioè $|\\mathbb{R}|$ è il primo cardinale non numerabile."
      },
      {
        type: "definizione",
        front: "Enuncia l'Ipotesi del Continuo Generalizzata (GCH) e dì in che senso la versione sui soli indici naturali è più debole.",
        back: "GCH: per ogni insieme infinito $X$ non esiste $Y$ con $|X| \\lt |Y| \\lt |\\mathcal{P}(X)|$. Lungo la gerarchia delle parti: $\\nexists Y$ con $\\beth_n \\lt |Y| \\lt \\beth_{n+1}$ per ogni $n \\in \\mathbb{N}$, cioè la successione dei $\\beth_n$ non ha buchi. Quest'ultima versione è strettamente più debole, perché non tutti i cardinali infiniti sono della forma $\\beth_n$ con $n \\in \\mathbb{N}$."
      },
      {
        type: "domanda",
        front: "Qual è lo status di CH rispetto a ZFC? Chi ha dimostrato cosa?",
        back: "CH è <strong>indipendente</strong> da ZFC, come consistenza relativa: <em>se ZFC è coerente</em>, allora Gödel (1940, insiemi costruibili) mostra che ZFC $+$ CH è coerente (CH non è refutabile) e Cohen (1963, forcing) mostra che ZFC $+$ $\\lnot$CH è coerente (CH non è dimostrabile). Sotto quella ipotesi si può accettare CH o la sua negazione ottenendo due \"matematiche\" entrambe coerenti."
      },
      {
        type: "tranello",
        front: "L'indipendenza di CH è un corollario dei Teoremi di Incompletezza di Gödel?",
        back: "No. È un esempio concettualmente analogo — un enunciato indecidibile in ZFC — ma <strong>non un corollario</strong>: è stata ottenuta con tecniche del tutto diverse, il modello interno degli insiemi costruibili di Gödel e il metodo del forcing di Cohen."
      },
      {
        type: "domanda",
        front: "L'ordine $\\le$ fra cardinalità è totale? Serve l'assioma della scelta?",
        back: "Che $\\le$ sia un buon ordinamento (e in particolare un ordine totale, cioè che per ogni $X,Y$ valga $|X| \\le |Y|$ oppure $|Y| \\le |X|$) si dimostra <strong>solo usando l'assioma della scelta</strong>: senza di esso la confrontabilità può fallire. L'antisimmetria invece, cioè il teorema di Cantor–Bernstein, vale senza assioma della scelta."
      },
      {
        type: "domanda",
        front: "Esiste un insieme di cardinalità massima?",
        back: "No. Se esistesse $U$ con $|Y| \\le |U|$ per ogni $Y$, prendendo $Y = \\mathcal{P}(U)$ si avrebbe $|\\mathcal{P}(U)| \\le |U|$, cioè un'iniezione $\\mathcal{P}(U) \\to U$; da essa si costruisce una suriezione $U \\to \\mathcal{P}(U)$, contro il teorema di Cantor. La gerarchia degli infiniti non ha un elemento più grande di tutti."
      }
    ]
};

