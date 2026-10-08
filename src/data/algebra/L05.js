const LESSON = {
    id: "L05", date: "Lezione 5 — 7 Ott 2026",
    title: "Relazioni di Equivalenza, Partizioni e Aritmetica Modulare",
    abstract: "La corrispondenza biunivoca tra relazioni di equivalenza e partizioni (Prop. 4.9 e 4.10), la decomposizione canonica di una funzione come suriezione + biiezione + iniezione, e la costruzione dell'anello delle classi di resto $\\mathbb{Z}_n$ con il criterio di invertibilità.",

    sections: [
      {
        id: "s05-ripasso-partizioni",
        type: "section",
        title: "Ripasso sulle Partizioni",
        icon: "🧩",
        content: `<p>Nella scorsa lezione abbiamo introdotto il concetto di partizione. Rivediamolo brevemente, perché è il mattone su cui si costruisce tutta la lezione di oggi.</p>`,
        subsections: [
          {
            subtitle: "Definizione (Partizione, da Definizione 1.9)",
            content: `<p>Dato un insieme non vuoto $X$, una <strong>partizione</strong> di $X$ è una famiglia di sottoinsiemi <em>non vuoti</em> di $X$, che chiameremo componenti o classi, tale che:</p>
<ol>
  <li>Ogni componente è non vuota: se $\\pi_j$ è una componente della partizione, allora $\\pi_j \\neq \\emptyset$.</li>
  <li>L'unione di tutti i sottoinsiemi è l'intero insieme $X$ (proprietà di <strong>ricoprimento</strong>).</li>
  <li>L'intersezione di due sottoinsiemi distinti qualsiasi è l'insieme vuoto. In altre parole, se l'intersezione tra due componenti non è vuota, allora le due componenti devono essere identiche.</li>
</ol>`
          }
        ]
      },

      {
        id: "s05-perche-non-vuote",
        type: "note_box",
        title: "Perché richiedere componenti non vuote",
        icon: "⚠️",
        content: `<p>La richiesta che ogni componente sia non vuota <strong>non è un dettaglio pedante: è indispensabile</strong>.</p>
<p>Senza di essa, per $X = \\{a\\}$ la famiglia $\\{\\{a\\}, \\emptyset\\}$ soddisferebbe ricoprimento e disgiunzione e sarebbe quindi una "partizione"; ma la relazione di equivalenza associata avrebbe come unica classe $\\{a\\}$, e ricostruendo la partizione dal quoziente otterremmo</p>
<p>$$\\{\\{a\\}\\} \\neq \\{\\{a\\}, \\emptyset\\}.$$</p>
<p>In altre parole, la Proposizione 4.10 (la corrispondenza biunivoca tra equivalenze e partizioni) sarebbe falsa. Il vuoto, insomma, non può essere una classe.</p>`,
        subsections: [
          {
            subtitle: "Convenzione sull'insieme vuoto",
            content: `<p>In tutta la lezione supporremo sempre $X \\neq \\emptyset$, coerentemente con la Definizione 1.9. Se si vuole includere il caso $X = \\emptyset$, si adotta la convenzione che l'unica partizione di $\\emptyset$ sia la famiglia vuota $\\emptyset$ (nessuna componente), cui corrisponde l'unica relazione di equivalenza su $\\emptyset$, ossia la relazione vuota; con questa convenzione tutti gli enunciati che seguono restano validi anche per $X = \\emptyset$.</p>`
          }
        ]
      },

      {
        id: "s05-classi-resto",
        type: "section",
        title: "Esempio fondamentale: le classi di resto",
        icon: "🔢",
        content: `<p>Un esempio fondamentale di partizione è dato dalle classi di resto nella divisione tra interi. Se consideriamo la divisione per un numero naturale $n \\gt 1$, ogni numero intero $z \\in \\mathbb{Z}$ avrà un resto unico compreso tra $0$ e $n-1$.</p>
<p>Ad esempio, per $n = 3$, abbiamo tre classi di resto:</p>
<ul>
  <li>La classe del resto 0: $\\{\\dots, -6, -3, 0, 3, 6, 9, \\dots\\}$</li>
  <li>La classe del resto 1: $\\{\\dots, -5, -2, 1, 4, 7, 10, \\dots\\}$</li>
  <li>La classe del resto 2: $\\{\\dots, -4, -1, 2, 5, 8, 11, \\dots\\}$</li>
</ul>
<p>Queste tre classi formano una partizione dell'insieme $\\mathbb{Z}$ dei numeri interi. Ogni intero appartiene a una e una sola classe, la loro unione è $\\mathbb{Z}$, sono a due a due disgiunte e nessuna di esse è vuota.</p>
<p>In generale, per un qualsiasi intero $n \\gt 1$, la divisione per $n$ induce una partizione di $\\mathbb{Z}$ in $n$ classi di resto (per $n = 1$ si ottiene l'unica classe $\\mathbb{Z}$, mentre per $n = 0$ la divisione non è definita).</p>`,
        extra_content: `<p><strong>Intuizione da portare via.</strong> Ogni numero intero ha un posto ben preciso in una delle classi. Non è possibile che un numero appartenga a due classi di resto diverse. Questa struttura è ciò che lega intimamente le partizioni alle relazioni di equivalenza.</p>`
      },

      {
        id: "s05-richiami-equivalenza",
        type: "section",
        title: "Richiami: classi di equivalenza e insieme quoziente",
        icon: "📚",
        content: `<p>Prima di enunciare il risultato centrale, fissiamo con precisione il linguaggio che useremo nelle dimostrazioni. Tutti gli oggetti che seguono sono già noti dalle lezioni precedenti, ma conviene averli sotto gli occhi.</p>`,
        subsections: [
          {
            subtitle: "Definizione (Relazione di equivalenza, classe, quoziente)",
            content: `<p>Sia $X$ un insieme non vuoto e sia $\\eta$ una relazione binaria su $X$. Diciamo che $\\eta$ è una <strong>relazione di equivalenza</strong> se è:</p>
<ul>
  <li><strong>riflessiva:</strong> $x \\, \\eta \\, x$ per ogni $x \\in X$;</li>
  <li><strong>simmetrica:</strong> se $x \\, \\eta \\, x'$ allora $x' \\, \\eta \\, x$;</li>
  <li><strong>transitiva:</strong> se $x \\, \\eta \\, x'$ e $x' \\, \\eta \\, x''$ allora $x \\, \\eta \\, x''$.</li>
</ul>
<p>Data una relazione di equivalenza $\\eta$ su $X$ e un elemento $x \\in X$, la <strong>classe di equivalenza</strong> di $x$ è il sottoinsieme</p>
<p>$$[x]_\\eta = \\{ y \\in X \\mid y \\, \\eta \\, x \\},$$</p>
<p>e l'<strong>insieme quoziente</strong> di $X$ modulo $\\eta$ è l'insieme di tutte le classi di equivalenza:</p>
<p>$$X/\\eta = \\{ [x]_\\eta \\mid x \\in X \\}.$$</p>
<p>Si noti che $X/\\eta$ è un insieme di <em>sottoinsiemi</em> di $X$: i suoi elementi sono le classi, non gli elementi di $X$.</p>`
          },
          {
            subtitle: "Proprietà chiave delle classi",
            content: `<p>Vale il seguente fatto, che useremo più volte e che dimostreremo esplicitamente nella prima dimostrazione della Proposizione 4.9:</p>
<p>$$x_1 \\, \\eta \\, x_2 \\iff [x_1]_\\eta = [x_2]_\\eta .$$</p>
<p>Cioè: <strong>due elementi sono in relazione se e solo se hanno la stessa classe.</strong> È questo il ponte tra "essere in relazione" (linguaggio delle equivalenze) e "stare nello stesso sottoinsieme" (linguaggio delle partizioni).</p>`
          }
        ],
        formulas: [
          { label: "Classe di equivalenza", latex: "[x]_\\eta = \\{ y \\in X \\mid y \\, \\eta \\, x \\}" },
          { label: "Insieme quoziente", latex: "X/\\eta = \\{ [x]_\\eta \\mid x \\in X \\}" },
          { label: "Proprietà chiave", latex: "x_1 \\, \\eta \\, x_2 \\iff [x_1]_\\eta = [x_2]_\\eta" }
        ]
      },

      {
        id: "s05-prop49",
        type: "section",
        title: "Proposizione 4.9 — Ogni equivalenza dà una partizione e viceversa",
        icon: "🔄",
        content: `<p>Il punto cruciale della lezione di oggi è stabilire una corrispondenza biunivoca tra le relazioni di equivalenza su un insieme $X$ e le partizioni di $X$. Vedremo che ogni equivalenza induce una partizione e, viceversa, ogni partizione induce un'equivalenza.</p>
<p><strong>Proposizione 4.9.</strong> Sia $X$ un insieme non vuoto.</p>
<ol>
  <li>Se $\\eta$ è una relazione di equivalenza su $X$, allora l'insieme quoziente $X/\\eta$ (l'insieme di tutte le classi di equivalenza) è una <strong>partizione</strong> di $X$.</li>
  <li>Se $\\pi = \\{\\pi_j\\}_{j \\in I}$ è una partizione di $X$, allora la relazione $\\eta_\\pi$ definita da
  <p>$$x \\, \\eta_\\pi \\, x' \\iff \\exists j \\in I \\text{ tale che } (x \\in \\pi_j \\land x' \\in \\pi_j)$$</p>
  (ovvero "$x$ e $x'$ stanno nella stessa componente della partizione") è una <strong>relazione di equivalenza</strong> su $X$.</li>
</ol>`,
        subsections: [
          {
            subtitle: "Punto 1: Da equivalenza a partizione",
            content: `<p>Sia $\\eta$ una relazione di equivalenza su $X$. L'insieme quoziente è $X/\\eta = \\{[x]_\\eta \\mid x \\in X\\}$, dove $[x]_\\eta = \\{ y \\in X \\mid y \\, \\eta \\, x \\}$. Dobbiamo verificare le tre richieste della Definizione 1.9.</p>
<p><strong>(a) Le classi non sono vuote.</strong> Per ogni $x \\in X$, grazie alla proprietà riflessiva di $\\eta$, abbiamo $x \\, \\eta \\, x$. Questo significa che $x \\in [x]_\\eta$. Di conseguenza, nessuna classe di equivalenza è vuota.</p>
<p><strong>(b) Ricoprimento.</strong> Dobbiamo dimostrare che $\\bigcup_{x \\in X} [x]_\\eta = X$. L'inclusione $\\bigcup [x]_\\eta \\subseteq X$ è ovvia, poiché ogni classe $[x]_\\eta$ è un sottoinsieme di $X$. Per l'inclusione opposta, $X \\subseteq \\bigcup [x]_\\eta$, consideriamo un qualsiasi elemento $x_0 \\in X$. Come abbiamo appena visto, $x_0 \\in [x_0]_\\eta$. Poiché $[x_0]_\\eta$ è una delle classi nell'unione, $x_0$ appartiene all'unione. Questo vale per ogni $x_0 \\in X$, quindi l'unione di tutte le classi ricopre l'intero insieme $X$.</p>
<p><strong>(c) Classi disgiunte o identiche.</strong> Siano $[x_1]_\\eta$ e $[x_2]_\\eta$ due classi di equivalenza e supponiamo che la loro intersezione non sia vuota: $[x_1]_\\eta \\cap [x_2]_\\eta \\neq \\emptyset$. Dobbiamo dimostrare che allora $[x_1]_\\eta = [x_2]_\\eta$.</p>
<p>Se l'intersezione non è vuota, esiste un elemento $x$ tale che $x \\in [x_1]_\\eta$ e $x \\in [x_2]_\\eta$. Per definizione di classe di equivalenza, questo significa:</p>
<p>$$x \\, \\eta \\, x_1 \\quad \\text{e} \\quad x \\, \\eta \\, x_2$$</p>
<p>Usando la proprietà simmetrica sulla prima relazione, otteniamo $x_1 \\, \\eta \\, x$. Ora, usando la proprietà transitiva, poiché $x_1 \\, \\eta \\, x$ e $x \\, \\eta \\, x_2$, concludiamo che</p>
<p>$$x_1 \\, \\eta \\, x_2 .$$</p>
<p>Resta da dedurre da qui che le due classi coincidono. Questo passaggio è decisivo, quindi lo svolgiamo per intero verificando le due inclusioni.</p>
<p>$(\\subseteq)$ Sia $y \\in [x_1]_\\eta$. Per definizione di classe, $y \\, \\eta \\, x_1$. Poiché sappiamo che $x_1 \\, \\eta \\, x_2$, per transitività otteniamo $y \\, \\eta \\, x_2$, cioè $y \\in [x_2]_\\eta$. Dunque $[x_1]_\\eta \\subseteq [x_2]_\\eta$.</p>
<p>$(\\supseteq)$ Sia $y \\in [x_2]_\\eta$, cioè $y \\, \\eta \\, x_2$. Applichiamo prima la simmetria a $x_1 \\, \\eta \\, x_2$, ottenendo $x_2 \\, \\eta \\, x_1$. Per transitività, da $y \\, \\eta \\, x_2$ e $x_2 \\, \\eta \\, x_1$ segue $y \\, \\eta \\, x_1$, cioè $y \\in [x_1]_\\eta$. Dunque $[x_2]_\\eta \\subseteq [x_1]_\\eta$.</p>
<p>Dalle due inclusioni segue $[x_1]_\\eta = [x_2]_\\eta$. Abbiamo quindi dimostrato che se due classi hanno anche un solo elemento in comune, allora sono la stessa classe. Questo completa la dimostrazione che $X/\\eta$ è una partizione.</p>`
          },
          {
            subtitle: "Osservazione: metà della proprietà chiave è già dimostrata",
            content: `<p>L'argomento appena svolto dimostra in particolare l'implicazione</p>
<p>$$x_1 \\, \\eta \\, x_2 \\Rightarrow [x_1]_\\eta = [x_2]_\\eta ,$$</p>
<p>cioè una metà della "proprietà chiave delle classi". L'implicazione opposta è immediata: se $[x_1]_\\eta = [x_2]_\\eta$, poiché $x_1 \\in [x_1]_\\eta$ per riflessività, si ha $x_1 \\in [x_2]_\\eta$, ossia $x_1 \\, \\eta \\, x_2$. Useremo liberamente questa equivalenza nel resto della lezione.</p>`
          },
          {
            subtitle: "Punto 2: Da partizione a equivalenza",
            content: `<p>Sia $\\pi = \\{\\pi_j\\}_{j \\in I}$ una partizione di $X$. Definiamo la relazione $x \\, \\eta_\\pi \\, x'$ se e solo se $x$ e $x'$ appartengono alla stessa componente $\\pi_j$. Verifichiamo le tre proprietà.</p>
<p><strong>Riflessività.</strong> Sia $x \\in X$. Poiché $\\pi$ è un ricoprimento di $X$, deve esistere una componente $\\pi_j$ tale che $x \\in \\pi_j$. Banalmente, $x$ è nella stessa componente di se stesso, quindi $x \\, \\eta_\\pi \\, x$.</p>
<p><strong>Simmetria.</strong> Siano $x, x' \\in X$ tali che $x \\, \\eta_\\pi \\, x'$. Per definizione, esiste una componente $\\pi_j$ tale che $\\{x, x'\\} \\subseteq \\pi_j$. L'espressione "$x \\in \\pi_j$ e $x' \\in \\pi_j$" è simmetrica rispetto a $x$ e $x'$. Quindi anche $x' \\, \\eta_\\pi \\, x$.</p>
<p><strong>Transitività.</strong> Siano $x, x', x'' \\in X$ tali che $x \\, \\eta_\\pi \\, x'$ e $x' \\, \\eta_\\pi \\, x''$. Da $x \\, \\eta_\\pi \\, x'$ segue che esiste una componente $\\pi_j$ tale che $\\{x, x'\\} \\subseteq \\pi_j$; da $x' \\, \\eta_\\pi \\, x''$ segue che esiste una componente $\\pi_k$ tale che $\\{x', x''\\} \\subseteq \\pi_k$. L'elemento $x'$ appartiene sia a $\\pi_j$ che a $\\pi_k$, quindi $\\pi_j \\cap \\pi_k \\neq \\emptyset$. Poiché $\\pi$ è una partizione, se l'intersezione di due componenti non è vuota le componenti devono essere identiche: dunque $\\pi_j = \\pi_k$. Ma allora $x \\in \\pi_j$ e $x'' \\in \\pi_j$, il che significa che $x$ e $x''$ sono nella stessa componente, cioè $x \\, \\eta_\\pi \\, x''$.</p>
<p>Avendo verificato le tre proprietà, concludiamo che $\\eta_\\pi$ è una relazione di equivalenza. $\\square$</p>`
          }
        ]
      },

      {
        id: "s05-prop410",
        type: "section",
        title: "Proposizione 4.10 — La biiezione tra equivalenze e partizioni",
        icon: "⚖️",
        content: `<p>La proposizione precedente ci mostra che possiamo passare da un'equivalenza a una partizione e viceversa. La seguente proposizione formalizza questa idea, affermando che <strong>queste due operazioni sono una l'inversa dell'altra</strong>.</p>
<p><strong>Proposizione 4.10.</strong> Sia $X$ un insieme non vuoto. Denotiamo con $E_X$ l'insieme di tutte le relazioni di equivalenza su $X$ e con $P_X$ l'insieme di tutte le partizioni di $X$. Definiamo le due funzioni:</p>
<p>$$p: E_X \\to P_X, \\quad \\eta \\mapsto X/\\eta \\qquad\\qquad e: P_X \\to E_X, \\quad \\pi \\mapsto \\eta_\\pi$$</p>
<p>Allora le due funzioni sono una l'inversa dell'altra, cioè</p>
<p>$$p \\circ e = \\mathrm{id}_{P_X} \\quad \\text{e} \\quad e \\circ p = \\mathrm{id}_{E_X}.$$</p>
<p>In altre parole:</p>
<ul>
  <li>Per ogni partizione $\\pi \\in P_X$, si ha $X/\\eta_\\pi = \\pi$.</li>
  <li>Per ogni equivalenza $\\eta \\in E_X$, si ha $\\eta_{X/\\eta} = \\eta$.</li>
</ul>`,
        subsections: [
          {
            subtitle: "Dimostrazione di $X/\\eta_\\pi = \\pi$ (cioè $p \\circ e = \\mathrm{id}_{P_X}$)",
            content: `<p>Vogliamo dimostrare che, data una partizione $\\pi$, se costruiamo la relazione di equivalenza $\\eta_\\pi$ (stare nella stessa componente di $\\pi$) e poi calcoliamo l'insieme quoziente $X/\\eta_\\pi$, otteniamo di nuovo la partizione $\\pi$ di partenza.</p>
<p>Sia $C$ una generica classe di equivalenza in $X/\\eta_\\pi$. Per definizione, $C = [x_0]_{\\eta_\\pi}$ per qualche $x_0 \\in X$. La classe $[x_0]_{\\eta_\\pi}$ è l'insieme di tutti gli $x \\in X$ tali che $x \\, \\eta_\\pi \\, x_0$. Per definizione di $\\eta_\\pi$, questo significa che $x$ e $x_0$ devono stare nella stessa componente della partizione $\\pi$.</p>
<p>Poiché $\\pi$ è una partizione, esiste un'unica componente $\\pi_k \\in \\pi$ che contiene $x_0$ (esiste per il ricoprimento, ed è unica perché due componenti distinte sono disgiunte). Quindi la classe $[x_0]_{\\eta_\\pi}$ è esattamente l'insieme $\\pi_k$. Questo dimostra che ogni elemento di $X/\\eta_\\pi$ è un elemento di $\\pi$.</p>
<p>Viceversa, sia $\\pi_k$ una generica componente della partizione $\\pi$. Poiché $\\pi_k$ non è vuota (<strong>è esattamente qui che serve la richiesta di non vuotezza delle componenti</strong>), possiamo scegliere un elemento $x_0 \\in \\pi_k$. La classe $[x_0]_{\\eta_\\pi}$ sarà, come abbiamo appena visto, proprio $\\pi_k$. Questo dimostra che ogni elemento di $\\pi$ è anche un elemento di $X/\\eta_\\pi$.</p>
<p>Le due collezioni di insiemi sono quindi identiche: $X/\\eta_\\pi = \\pi$.</p>`
          },
          {
            subtitle: "Dimostrazione di $\\eta_{X/\\eta} = \\eta$ (cioè $e \\circ p = \\mathrm{id}_{E_X}$)",
            content: `<p>Dobbiamo dimostrare che per ogni $x, x' \\in X$:</p>
<p>$$x \\, \\eta_{X/\\eta} \\, x' \\iff x \\, \\eta \\, x'$$</p>
<p>$(\\Rightarrow)$ Supponiamo $x \\, \\eta_{X/\\eta} \\, x'$. Per definizione, questo significa che $x$ e $x'$ appartengono alla stessa componente della partizione $X/\\eta$. Le componenti di questa partizione sono le classi di equivalenza $[y]_\\eta$. Quindi esiste una classe $[y]_\\eta$ tale che $x \\in [y]_\\eta$ e $x' \\in [y]_\\eta$. Da $x \\in [y]_\\eta$ segue $x \\, \\eta \\, y$; da $x' \\in [y]_\\eta$ segue $x' \\, \\eta \\, y$. Per simmetria, da $x' \\, \\eta \\, y$ otteniamo $y \\, \\eta \\, x'$. Per transitività, da $x \\, \\eta \\, y$ e $y \\, \\eta \\, x'$ segue $x \\, \\eta \\, x'$.</p>
<p>$(\\Leftarrow)$ Supponiamo $x \\, \\eta \\, x'$. Per la proprietà chiave delle classi dimostrata nel Punto 1 della Proposizione 4.9, questo significa $[x]_\\eta = [x']_\\eta$. In particolare $x$ appartiene alla classe $[x]_\\eta$ (per riflessività) e anche $x'$ appartiene alla stessa classe $[x]_\\eta$. Le classi di equivalenza sono le componenti della partizione $X/\\eta$, quindi $x$ e $x'$ stanno nella stessa componente di $X/\\eta$: per definizione, $x \\, \\eta_{X/\\eta} \\, x'$.</p>
<p>Avendo dimostrato entrambe le implicazioni, concludiamo che le due relazioni sono identiche. $\\square$</p>`
          }
        ],
        formulas: [
          { label: "Equivalenza → partizione", latex: "p(\\eta) = X/\\eta" },
          { label: "Partizione → equivalenza", latex: "e(\\pi) = \\eta_\\pi" },
          { label: "Inverse l'una dell'altra", latex: "p \\circ e = \\mathrm{id}_{P_X}, \\qquad e \\circ p = \\mathrm{id}_{E_X}" }
        ]
      },

      {
        id: "s05-esempio-svolto-concreto",
        type: "section",
        title: "Un esempio svolto delle due costruzioni",
        icon: "✏️",
        content: `<p>Le due proposizioni precedenti sono molto astratte: conviene vederle all'opera su un insieme minuscolo, dove tutto si può scrivere per esteso. Percorriamo l'esempio nei due sensi.</p>`,
        subsections: [
          {
            subtitle: "Dalla partizione all'equivalenza e ritorno",
            content: `<p>Sia $X = \\{1, 2, 3\\}$ e consideriamo la partizione</p>
<p>$$\\pi = \\big\\{ \\{1,2\\}, \\; \\{3\\} \\big\\}.$$</p>
<p>Verifichiamo intanto che $\\pi$ è davvero una partizione: le componenti $\\{1,2\\}$ e $\\{3\\}$ sono non vuote, la loro unione è $\\{1,2,3\\} = X$ e la loro intersezione è vuota.</p>
<p><strong>Passo 1: costruiamo $\\eta_\\pi$ (applicazione della funzione $e$).</strong> Per definizione, $x \\, \\eta_\\pi \\, x'$ se e solo se $x$ e $x'$ stanno nella stessa componente. Elenchiamo tutte le coppie:</p>
<ul>
  <li>dalla componente $\\{1,2\\}$ otteniamo le coppie $(1,1)$, $(1,2)$, $(2,1)$, $(2,2)$;</li>
  <li>dalla componente $\\{3\\}$ otteniamo la coppia $(3,3)$.</li>
</ul>
<p>Quindi, come sottoinsieme di $X \\times X$,</p>
<p>$$\\eta_\\pi = \\{ (1,1), \\, (1,2), \\, (2,1), \\, (2,2), \\, (3,3) \\}.$$</p>
<p>Si controlla a occhio che è un'equivalenza, come garantito dalla Proposizione 4.9: contiene tutte le coppie $(x,x)$ (riflessività), è chiusa per scambio delle componenti, poiché contiene sia $(1,2)$ sia $(2,1)$ (simmetria), e non ci sono catene da chiudere oltre quelle già presenti (transitività). Si noti invece che $(1,3) \\notin \\eta_\\pi$: gli elementi $1$ e $3$ stanno in componenti diverse.</p>
<p><strong>Passo 2: calcoliamo il quoziente $X/\\eta_\\pi$ (applicazione della funzione $p$).</strong> Usiamo $[x]_{\\eta_\\pi} = \\{ y \\in X \\mid y \\, \\eta_\\pi \\, x \\}$:</p>
<p>$$\\begin{aligned}
[1]_{\\eta_\\pi} &= \\{ y \\mid (y,1) \\in \\eta_\\pi \\} = \\{1, 2\\}, \\\\
[2]_{\\eta_\\pi} &= \\{ y \\mid (y,2) \\in \\eta_\\pi \\} = \\{1, 2\\}, \\\\
[3]_{\\eta_\\pi} &= \\{ y \\mid (y,3) \\in \\eta_\\pi \\} = \\{3\\}.
\\end{aligned}$$</p>
<p>Le classi $[1]_{\\eta_\\pi}$ e $[2]_{\\eta_\\pi}$ coincidono, coerentemente con il fatto che $1 \\, \\eta_\\pi \\, 2$. L'insieme quoziente è allora</p>
<p>$$X/\\eta_\\pi = \\big\\{ \\{1,2\\}, \\; \\{3\\} \\big\\} = \\pi .$$</p>
<p>Abbiamo ritrovato esattamente la partizione di partenza: questa è la verifica concreta dell'identità $p \\circ e = \\mathrm{id}_{P_X}$.</p>`
          },
          {
            subtitle: "Il percorso inverso: $e \\circ p = \\mathrm{id}_{E_X}$",
            content: `<p>Partiamo ora dall'altro capo, cioè da una relazione di equivalenza su $X = \\{1,2,3\\}$. Prendiamo</p>
<p>$$\\eta = \\{ (1,1), \\, (1,2), \\, (2,1), \\, (2,2), \\, (3,3) \\},$$</p>
<p>assegnata direttamente come relazione (si verifica come sopra che è riflessiva, simmetrica e transitiva).</p>
<p><strong>Passo 1: costruiamo la partizione $X/\\eta$ (applicazione di $p$).</strong> Come calcolato nell'esempio precedente, le classi sono $[1]_\\eta = [2]_\\eta = \\{1,2\\}$ e $[3]_\\eta = \\{3\\}$, dunque</p>
<p>$$X/\\eta = \\big\\{ \\{1,2\\}, \\; \\{3\\} \\big\\}.$$</p>
<p><strong>Passo 2: ricostruiamo la relazione $\\eta_{X/\\eta}$ (applicazione di $e$).</strong> Due elementi sono in relazione $\\eta_{X/\\eta}$ se e solo se stanno nella stessa componente di $X/\\eta$. Dalla componente $\\{1,2\\}$ otteniamo $(1,1), (1,2), (2,1), (2,2)$; dalla componente $\\{3\\}$ otteniamo $(3,3)$. Dunque</p>
<p>$$\\eta_{X/\\eta} = \\{ (1,1), \\, (1,2), \\, (2,1), \\, (2,2), \\, (3,3) \\} = \\eta .$$</p>
<p>Anche qui siamo tornati al punto di partenza: è la verifica concreta di $e \\circ p = \\mathrm{id}_{E_X}$.</p>`
          }
        ],
        extra_content: `<p><strong>Morale operativa.</strong> In pratica: data una partizione, per ottenere la relazione si "incollano" tutte le coppie interne a ciascuna componente; data una relazione di equivalenza, per ottenere la partizione si raggruppano gli elementi che sono tra loro in relazione. Le due operazioni si annullano l'una con l'altra.</p>`
      },

      {
        id: "s05-collegamento-funzioni",
        type: "section",
        title: "Riassunto 4.11 — Collegamento con le funzioni",
        icon: "🔗",
        content: `<p>Questa corrispondenza è un risultato fondamentale. Ci dice che <strong>parlare di relazioni di equivalenza o di partizioni è essenzialmente la stessa cosa</strong>.</p>
<p>Ricordiamo (Teorema 4.3) che ogni funzione $f: X \\to Y$ induce una relazione di equivalenza $\\eta_f$ su $X$ definita da</p>
<p>$$x \\, \\eta_f \\, x' \\iff f(x) = f(x').$$</p>
<p>Vale anche il viceversa, che non segue dalla Proposizione 4.10 ma dalla proprietà chiave delle classi: per ogni relazione di equivalenza $\\eta$ su $X$ esiste una funzione tale che $\\eta$ è la relazione indotta da essa. Si tratta della <strong>proiezione canonica</strong></p>
<p>$$p_\\eta : X \\to X/\\eta, \\qquad p_\\eta(x) = [x]_\\eta ,$$</p>
<p>cioè la funzione che a ogni elemento associa la propria classe di equivalenza. Verifichiamo che la relazione indotta da $p_\\eta$ è proprio $\\eta$: per ogni $x, x' \\in X$,</p>
<p>$$x \\, \\eta_{p_\\eta} \\, x' \\iff p_\\eta(x) = p_\\eta(x') \\iff [x]_\\eta = [x']_\\eta \\iff x \\, \\eta \\, x',$$</p>
<p>dove la prima equivalenza è la definizione di relazione indotta da una funzione, la seconda è la definizione di $p_\\eta$ e la terza è la proprietà chiave delle classi dimostrata nel Punto 1 della Proposizione 4.9.</p>`,
        extra_content: `<p><strong>In sintesi (Riassunto 4.11):</strong> le relazioni di equivalenza su un insieme $X$ sono <strong>tutte e sole</strong> quelle indotte da una qualche funzione $f$ che parte da $X$.</p>
<p>Questo concetto sarà la base per il teorema fondamentale di omomorfismo che vedremo più avanti nel corso.</p>`
      },

      {
        id: "s05-ripasso-relazioni-tipi",
        type: "section",
        title: "Ripasso: preordini, ordini, equivalenze e relazione indotta",
        icon: "📐",
        content: `<p>Ricordiamo le proprietà che caratterizzano una relazione di equivalenza $\\eta$ su un insieme $X$:</p>
<ul>
  <li><strong>Riflessiva</strong>: per ogni $x \\in X$, $x \\, \\eta \\, x$.</li>
  <li><strong>Simmetrica</strong>: per ogni $x, y \\in X$, se $x \\, \\eta \\, y$ allora $y \\, \\eta \\, x$.</li>
  <li><strong>Transitiva</strong>: per ogni $x, y, z \\in X$, se $x \\, \\eta \\, y$ e $y \\, \\eta \\, z$ allora $x \\, \\eta \\, z$.</li>
</ul>
<p>Un <strong>preordine</strong> è una relazione riflessiva e transitiva. Un <strong>ordine parziale</strong> è un preordine antisimmetrico. Una <strong>relazione di equivalenza</strong> è un preordine simmetrico.</p>`,
        subsections: [
          {
            subtitle: "Richiamo: classi, quoziente, proiezione canonica",
            content: `<p>Poiché nel seguito useremo ripetutamente questi oggetti, conviene richiamarli subito. Sia $\\eta$ una relazione di equivalenza su un insieme $X$ e sia $a \\in X$. La <em>classe di equivalenza</em> di $a$ è il sottoinsieme di $X$ formato da tutti gli elementi in relazione con $a$:</p>
<p>$$[a]_{\\eta} = \\{x \\in X : x \\, \\eta \\, a\\}$$</p>
<p>L'<em>insieme quoziente</em> $X/\\eta$ è l'insieme che ha come elementi tutte queste classi:</p>
<p>$$X/\\eta = \\{[a]_{\\eta} : a \\in X\\}$$</p>
<p>La <em>proiezione canonica</em> è la funzione</p>
<p>$$p_{\\eta}: X \\to X/\\eta, \\qquad p_{\\eta}(a) = [a]_{\\eta}$$</p>
<p>che manda ogni elemento nella propria classe; essa è per costruzione <strong>suriettiva</strong>, perché ogni classe di $X/\\eta$ è della forma $[a]_{\\eta}$ per qualche $a \\in X$.</p>
<p>La proprietà che useremo più spesso è la seguente: due classi coincidono esattamente quando i loro rappresentanti sono in relazione, cioè</p>
<p>$$[a]_{\\eta} = [b]_{\\eta} \\iff a \\, \\eta \\, b$$</p>
<p>In altre parole, scegliere un rappresentante diverso della stessa classe non cambia la classe, e viceversa rappresentanti non in relazione danno classi disgiunte.</p>`
          },
          {
            subtitle: "La relazione indotta da una funzione è un'equivalenza",
            content: `<p>Come già accennato, ogni funzione $f: X \\to Y$ induce una relazione $\\eta_f$ su $X$ definita da $x \\, \\eta_f \\, x' \\iff f(x) = f(x')$. Verifichiamo brevemente che si tratta effettivamente di una relazione di equivalenza.</p>
<ul>
  <li><strong>Riflessività</strong>: per ogni $a \\in X$, è ovvio che $f(a) = f(a)$, quindi $a \\, \\eta_f \\, a$.</li>
  <li><strong>Simmetria</strong>: se $a \\, \\eta_f \\, b$, allora $f(a) = f(b)$. Ma l'uguaglianza è simmetrica, quindi $f(b) = f(a)$, il che significa $b \\, \\eta_f \\, a$.</li>
  <li><strong>Transitività</strong>: se $a \\, \\eta_f \\, b$ e $b \\, \\eta_f \\, c$, allora $f(a) = f(b)$ e $f(b) = f(c)$. Per la transitività dell'uguaglianza, segue $f(a) = f(c)$, e quindi $a \\, \\eta_f \\, c$.</li>
</ul>
<p>Essendo riflessiva, simmetrica e transitiva, $\\eta_f$ è una relazione di equivalenza. Applicando il richiamo precedente a questa particolare relazione, la classe di un elemento $a \\in X$ è la <em>fibra</em> di $f$ sopra $f(a)$:</p>
<p>$$[a]_{\\eta_f} = \\{x \\in X : f(x) = f(a)\\}$$</p>`
          }
        ]
      },

      {
        id: "s05-congruenza-mod-n",
        type: "section",
        title: "Esempio cruciale: la congruenza modulo n",
        icon: "🕐",
        content: `<p>Un esempio cruciale di relazione di equivalenza è la congruenza modulo $n$ sull'insieme dei numeri interi $\\mathbb{Z}$. Fissato un intero $n \\gt 0$, definiamo una relazione $\\equiv_n$ (spesso indicata con $\\equiv \\pmod n$) come segue:</p>
<p>$$a \\equiv_n b \\iff n \\text{ divide } (a-b)$$</p>
<p>Questo significa che esiste un intero $k$ tale che $a - b = k \\cdot n$. Verifichiamo che è una relazione di equivalenza:</p>
<ul>
  <li><strong>Riflessiva</strong>: per ogni $a \\in \\mathbb{Z}$, $a - a = 0$. Poiché $0 = 0 \\cdot n$, $n$ divide $0$. Quindi $a \\equiv_n a$.</li>
  <li><strong>Simmetrica</strong>: se $a \\equiv_n b$, allora $a - b = k \\cdot n$ per qualche $k \\in \\mathbb{Z}$. Allora $b - a = (-k) \\cdot n$. Poiché $-k$ è ancora un intero, $n$ divide $b-a$, e quindi $b \\equiv_n a$.</li>
  <li><strong>Transitiva</strong>: se $a \\equiv_n b$ e $b \\equiv_n c$, allora esistono $k, l \\in \\mathbb{Z}$ tali che $a-b = k \\cdot n$ e $b-c = l \\cdot n$. Sommando le due equazioni:
  <p>$$(a-b) + (b-c) = k \\cdot n + l \\cdot n \\;\\Rightarrow\\; a-c = (k+l) \\cdot n$$</p>
  Poiché $k+l$ è un intero, $n$ divide $a-c$, e quindi $a \\equiv_n c$.</li>
</ul>
<p>Questa relazione sarà oggetto di studio approfondito più avanti nella lezione.</p>`,
        formulas: [
          { label: "Congruenza modulo n", latex: "a \\equiv_n b \\iff n \\mid (a-b) \\iff \\exists k \\in \\mathbb{Z} : a-b = kn" }
        ]
      },

      {
        id: "s05-decomp-suriettiva",
        type: "section",
        title: "Decomposizione canonica: la componente suriettiva",
        icon: "🪓",
        content: `<p>Data una funzione qualsiasi $f: A \\to B$, spesso è utile "smontarla" nei suoi componenti fondamentali, isolando le sue proprietà di suriettività e iniettività.</p>
<p>Per rendere una funzione suriettiva, l'idea è semplice: <strong>basta restringere il suo codominio alla sua immagine</strong>.</p>`,
        subsections: [
          {
            subtitle: "Definizione (Co-restrizione e inclusione canonica)",
            content: `<p>Data $f: A \\to B$, definiamo:</p>
<p><strong>1.</strong> La <strong>co-restrizione</strong> di $f$ alla sua immagine, denotata con $f'$, è la funzione</p>
<p>$$f': A \\to \\mathrm{Im}(f), \\quad \\text{definita da} \\quad f'(a) = f(a)$$</p>
<p>Per costruzione, $f'$ è <strong>suriettiva</strong>.</p>
<p><strong>2.</strong> L'<strong>inclusione canonica</strong> dell'immagine nel codominio, denotata con $j_f$, è la funzione</p>
<p>$$j_f: \\mathrm{Im}(f) \\to B, \\quad \\text{definita da} \\quad j_f(y) = y$$</p>
<p>Questa funzione è sempre <strong>iniettiva</strong>.</p>`
          }
        ],
        extra_content: `<p>Con queste due funzioni, possiamo decomporre $f$ come composizione di una funzione suriettiva seguita da una iniettiva:</p>
<p>$$f = j_f \\circ f'$$</p>
<p>Questo può essere visualizzato con un diagramma commutativo: la fattorizzazione di $f$ attraverso l'immagine.</p>
<figure class="figura" data-id="algebra_lez05b_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="algebra_lez05b_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107.415pt" height="74.488pt" viewBox="0 0 107.415 74.488" version="1.2"><style>#algebra_lez05b_d1 [fill="rgb(0%,0%,0%)"],#algebra_lez05b_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#algebra_lez05b_d1 [stroke="rgb(0%,0%,0%)"],#algebra_lez05b_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph0-1">
<path style="stroke:none;" d="M 7.125 -0.203125 C 7.125 -0.3125 7.03125 -0.3125 6.90625 -0.3125 C 6.296875 -0.3125 6.296875 -0.375 6.265625 -0.65625 L 5.65625 -6.84375 C 5.640625 -7.046875 5.640625 -7.078125 5.46875 -7.078125 C 5.3125 -7.078125 5.265625 -7.015625 5.21875 -6.90625 L 1.765625 -1.140625 C 1.375 -0.46875 0.984375 -0.34375 0.546875 -0.3125 C 0.4375 -0.296875 0.34375 -0.296875 0.34375 -0.109375 C 0.34375 -0.046875 0.390625 0 0.46875 0 C 0.734375 0 1.046875 -0.03125 1.328125 -0.03125 C 1.65625 -0.03125 2 0 2.3125 0 C 2.375 0 2.5 0 2.5 -0.1875 C 2.5 -0.296875 2.40625 -0.3125 2.34375 -0.3125 C 2.109375 -0.328125 1.875 -0.40625 1.875 -0.65625 C 1.875 -0.765625 1.9375 -0.875 2.015625 -1.015625 C 2.09375 -1.140625 2.09375 -1.140625 2.765625 -2.28125 L 5.25 -2.28125 C 5.265625 -2.078125 5.40625 -0.734375 5.40625 -0.640625 C 5.40625 -0.34375 4.890625 -0.3125 4.703125 -0.3125 C 4.5625 -0.3125 4.453125 -0.3125 4.453125 -0.109375 C 4.453125 0 4.59375 0 4.59375 0 C 5 0 5.4375 -0.03125 5.828125 -0.03125 C 6.078125 -0.03125 6.703125 0 6.953125 0 C 7.015625 0 7.125 0 7.125 -0.203125 Z M 5.21875 -2.59375 L 2.953125 -2.59375 L 4.90625 -5.859375 Z M 5.21875 -2.59375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph0-2">
<path style="stroke:none;" d="M 6.9375 -2.140625 C 6.9375 -2.84375 6.375 -3.421875 5.40625 -3.53125 C 6.4375 -3.71875 7.484375 -4.453125 7.484375 -5.390625 C 7.484375 -6.125 6.828125 -6.75 5.640625 -6.75 L 2.3125 -6.75 C 2.125 -6.75 2.03125 -6.75 2.03125 -6.5625 C 2.03125 -6.453125 2.109375 -6.453125 2.296875 -6.453125 C 2.296875 -6.453125 2.515625 -6.453125 2.6875 -6.421875 C 2.859375 -6.40625 2.953125 -6.40625 2.953125 -6.265625 C 2.953125 -6.234375 2.9375 -6.203125 2.90625 -6.078125 L 1.578125 -0.765625 C 1.484375 -0.390625 1.46875 -0.3125 0.6875 -0.3125 C 0.515625 -0.3125 0.421875 -0.3125 0.421875 -0.109375 C 0.421875 0 0.5 0 0.6875 0 L 4.21875 0 C 5.78125 0 6.9375 -1.171875 6.9375 -2.140625 Z M 6.578125 -5.4375 C 6.578125 -4.5625 5.734375 -3.625 4.515625 -3.625 L 3.078125 -3.625 L 3.6875 -6.078125 C 3.78125 -6.421875 3.796875 -6.453125 4.21875 -6.453125 L 5.5 -6.453125 C 6.375 -6.453125 6.578125 -5.859375 6.578125 -5.4375 Z M 6.015625 -2.25 C 6.015625 -1.265625 5.140625 -0.3125 3.96875 -0.3125 L 2.625 -0.3125 C 2.5 -0.3125 2.46875 -0.3125 2.40625 -0.3125 C 2.3125 -0.328125 2.28125 -0.34375 2.28125 -0.421875 C 2.28125 -0.4375 2.28125 -0.46875 2.328125 -0.640625 L 3.015625 -3.40625 L 4.890625 -3.40625 C 5.828125 -3.40625 6.015625 -2.671875 6.015625 -2.25 Z M 6.015625 -2.25 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph0-3">
<path style="stroke:none;" d="M 5.453125 -6.296875 C 5.453125 -6.75 5 -6.96875 4.59375 -6.96875 C 4.265625 -6.96875 3.640625 -6.796875 3.34375 -5.8125 C 3.28125 -5.609375 3.25 -5.515625 3.015625 -4.265625 L 2.328125 -4.265625 C 2.140625 -4.265625 2.03125 -4.265625 2.03125 -4.078125 C 2.03125 -3.953125 2.125 -3.953125 2.3125 -3.953125 L 2.96875 -3.953125 L 2.21875 -0.046875 C 2.046875 0.90625 1.875 1.8125 1.359375 1.8125 C 1.328125 1.8125 1.078125 1.8125 0.890625 1.625 C 1.34375 1.609375 1.4375 1.25 1.4375 1.09375 C 1.4375 0.875 1.25 0.75 1.0625 0.75 C 0.8125 0.75 0.53125 0.96875 0.53125 1.34375 C 0.53125 1.796875 0.953125 2.03125 1.359375 2.03125 C 1.90625 2.03125 2.296875 1.4375 2.484375 1.0625 C 2.796875 0.4375 3.03125 -0.75 3.03125 -0.828125 L 3.625 -3.953125 L 4.484375 -3.953125 C 4.671875 -3.953125 4.78125 -3.953125 4.78125 -4.15625 C 4.78125 -4.265625 4.671875 -4.265625 4.515625 -4.265625 L 3.6875 -4.265625 C 3.796875 -4.84375 3.78125 -4.8125 3.890625 -5.390625 C 3.9375 -5.59375 4.078125 -6.296875 4.140625 -6.421875 C 4.21875 -6.609375 4.390625 -6.75 4.59375 -6.75 C 4.640625 -6.75 4.890625 -6.75 5.078125 -6.578125 C 4.65625 -6.53125 4.546875 -6.1875 4.546875 -6.046875 C 4.546875 -5.8125 4.734375 -5.703125 4.921875 -5.703125 C 5.171875 -5.703125 5.453125 -5.921875 5.453125 -6.296875 Z M 5.453125 -6.296875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph0-4">
<path style="stroke:none;" d="M 3.921875 -6.1875 C 3.921875 -6.375 3.78125 -6.53125 3.546875 -6.53125 C 3.328125 -6.53125 3.03125 -6.3125 3.03125 -6.015625 C 3.03125 -5.8125 3.171875 -5.65625 3.390625 -5.65625 C 3.65625 -5.65625 3.921875 -5.921875 3.921875 -6.1875 Z M 3.515625 -3.09375 C 3.5625 -3.296875 3.5625 -3.4375 3.5625 -3.46875 C 3.5625 -4.03125 3.140625 -4.375 2.65625 -4.375 C 1.640625 -4.375 1.078125 -2.9375 1.078125 -2.84375 C 1.078125 -2.75 1.203125 -2.75 1.203125 -2.75 C 1.28125 -2.75 1.296875 -2.765625 1.375 -2.953125 C 1.625 -3.546875 2.078125 -4.15625 2.625 -4.15625 C 2.765625 -4.15625 2.9375 -4.109375 2.9375 -3.703125 C 2.9375 -3.46875 2.90625 -3.359375 2.875 -3.1875 L 1.9375 0.5 C 1.75 1.25 1.28125 1.8125 0.71875 1.8125 C 0.65625 1.8125 0.515625 1.8125 0.34375 1.71875 C 0.640625 1.65625 0.78125 1.390625 0.78125 1.203125 C 0.78125 1.03125 0.671875 0.84375 0.40625 0.84375 C 0.15625 0.84375 -0.125 1.0625 -0.125 1.421875 C -0.125 1.8125 0.265625 2.03125 0.734375 2.03125 C 1.4375 2.03125 2.359375 1.5 2.59375 0.53125 Z M 3.515625 -3.09375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph1-1">
<path style="stroke:none;" d="M 3.296875 0 L 3.296875 -0.3125 L 3.03125 -0.3125 C 2.25 -0.3125 2.21875 -0.421875 2.21875 -0.765625 L 2.21875 -5.984375 C 2.21875 -6.34375 2.25 -6.453125 3.03125 -6.453125 L 3.296875 -6.453125 L 3.296875 -6.75 C 2.953125 -6.71875 2.171875 -6.71875 1.796875 -6.71875 C 1.40625 -6.71875 0.625 -6.71875 0.28125 -6.75 L 0.28125 -6.453125 L 0.53125 -6.453125 C 1.3125 -6.453125 1.34375 -6.34375 1.34375 -5.984375 L 1.34375 -0.765625 C 1.34375 -0.421875 1.3125 -0.3125 0.53125 -0.3125 L 0.28125 -0.3125 L 0.28125 0 C 0.625 -0.03125 1.40625 -0.03125 1.78125 -0.03125 C 2.171875 -0.03125 2.953125 -0.03125 3.296875 0 Z M 3.296875 0 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph1-2">
<path style="stroke:none;" d="M 8.046875 0 L 8.046875 -0.3125 C 7.53125 -0.3125 7.28125 -0.3125 7.265625 -0.609375 L 7.265625 -2.5 C 7.265625 -3.34375 7.265625 -3.65625 6.96875 -4 C 6.828125 -4.171875 6.5 -4.375 5.921875 -4.375 C 5.09375 -4.375 4.65625 -3.78125 4.484375 -3.40625 C 4.359375 -4.265625 3.625 -4.375 3.171875 -4.375 C 2.453125 -4.375 1.984375 -3.953125 1.71875 -3.328125 L 1.71875 -4.375 L 0.3125 -4.265625 L 0.3125 -3.953125 C 1.015625 -3.953125 1.09375 -3.890625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.875 -0.3125 1.765625 -0.3125 1.765625 -0.75 L 1.765625 -2.578125 C 1.765625 -3.59375 2.46875 -4.15625 3.109375 -4.15625 C 3.734375 -4.15625 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.0625 -0.3125 L 3.0625 0 L 4.1875 -0.03125 L 5.296875 0 L 5.296875 -0.3125 C 4.625 -0.3125 4.515625 -0.3125 4.515625 -0.75 L 4.515625 -2.578125 C 4.515625 -3.59375 5.21875 -4.15625 5.859375 -4.15625 C 6.484375 -4.15625 6.59375 -3.625 6.59375 -3.0625 L 6.59375 -0.75 C 6.59375 -0.3125 6.484375 -0.3125 5.8125 -0.3125 L 5.8125 0 L 6.9375 -0.03125 Z M 8.046875 0 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph1-3">
<path style="stroke:none;" d="M 3.28125 2.375 C 3.28125 2.34375 3.28125 2.328125 3.109375 2.15625 C 1.875 0.90625 1.546875 -0.953125 1.546875 -2.46875 C 1.546875 -4.1875 1.921875 -5.921875 3.140625 -7.15625 C 3.28125 -7.265625 3.28125 -7.296875 3.28125 -7.3125 C 3.28125 -7.390625 3.234375 -7.421875 3.171875 -7.421875 C 3.078125 -7.421875 2.1875 -6.75 1.609375 -5.484375 C 1.09375 -4.40625 0.984375 -3.296875 0.984375 -2.46875 C 0.984375 -1.703125 1.09375 -0.5 1.625 0.609375 C 2.21875 1.828125 3.078125 2.46875 3.171875 2.46875 C 3.234375 2.46875 3.28125 2.4375 3.28125 2.375 Z M 3.28125 2.375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph1-4">
<path style="stroke:none;" d="M 2.859375 -2.46875 C 2.859375 -3.25 2.75 -4.4375 2.203125 -5.5625 C 1.609375 -6.78125 0.765625 -7.421875 0.65625 -7.421875 C 0.609375 -7.421875 0.5625 -7.375 0.5625 -7.3125 C 0.5625 -7.296875 0.5625 -7.265625 0.75 -7.09375 C 1.71875 -6.109375 2.28125 -4.546875 2.28125 -2.46875 C 2.28125 -0.78125 1.921875 0.953125 0.6875 2.203125 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.4375 0.609375 2.46875 0.65625 2.46875 C 0.765625 2.46875 1.65625 1.796875 2.234375 0.546875 C 2.734375 -0.546875 2.859375 -1.640625 2.859375 -2.46875 Z M 2.859375 -2.46875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph2-1">
<path style="stroke:none;" d="M 2.0625 -3.484375 C 2.0625 -3.703125 1.875 -3.875 1.65625 -3.875 C 1.390625 -3.875 1.3125 -3.640625 1.28125 -3.546875 L 0.359375 -0.546875 L 0.328125 -0.4375 C 0.328125 -0.359375 0.546875 -0.28125 0.609375 -0.28125 C 0.65625 -0.28125 0.671875 -0.3125 0.703125 -0.390625 L 2.015625 -3.28125 C 2.046875 -3.34375 2.0625 -3.390625 2.0625 -3.484375 Z M 2.0625 -3.484375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d1-glyph3-1">
<path style="stroke:none;" d="M 4.1875 -4.375 C 4.1875 -4.703125 3.84375 -4.875 3.484375 -4.875 C 3.1875 -4.875 2.84375 -4.703125 2.65625 -4.359375 C 2.515625 -4.09375 2.46875 -3.78125 2.3125 -2.984375 L 1.765625 -2.984375 C 1.640625 -2.984375 1.546875 -2.984375 1.546875 -2.828125 C 1.546875 -2.734375 1.640625 -2.734375 1.765625 -2.734375 L 2.265625 -2.734375 L 1.65625 0.546875 C 1.625 0.6875 1.515625 1.21875 1.171875 1.21875 C 1.171875 1.21875 1 1.21875 0.875 1.140625 C 1.15625 1.046875 1.171875 0.796875 1.171875 0.75 C 1.171875 0.609375 1.0625 0.5 0.90625 0.5 C 0.71875 0.5 0.5 0.65625 0.5 0.921875 C 0.5 1.234375 0.828125 1.40625 1.171875 1.40625 C 1.625 1.40625 1.921875 0.953125 2 0.796875 C 2.25 0.34375 2.421875 -0.515625 2.421875 -0.59375 L 2.8125 -2.734375 L 3.5 -2.734375 C 3.640625 -2.734375 3.71875 -2.734375 3.71875 -2.890625 C 3.71875 -2.984375 3.640625 -2.984375 3.515625 -2.984375 L 2.859375 -2.984375 C 3.03125 -3.859375 3.078125 -4.1875 3.140625 -4.375 C 3.171875 -4.53125 3.328125 -4.671875 3.484375 -4.671875 C 3.484375 -4.671875 3.6875 -4.671875 3.8125 -4.59375 C 3.53125 -4.5 3.515625 -4.25 3.515625 -4.21875 C 3.515625 -4.0625 3.625 -3.953125 3.78125 -3.953125 C 3.96875 -3.953125 4.1875 -4.125 4.1875 -4.375 Z M 4.1875 -4.375 "/>
</symbol>
</g>
</defs>
<g id="algebra_lez05b_d1-surface1">
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph0-1" x="7.332264" y="22.927406"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph0-2" x="91.500725" y="22.927406"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph1-1" x="40.523124" y="64.250369"/>
  <use xlink:href="#algebra_lez05b_d1-glyph1-2" x="44.09606" y="64.250369"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph1-3" x="52.410483" y="64.250369"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph0-3" x="56.262935" y="64.250369"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph1-4" x="62.172316" y="64.250369"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 7.25678 42.519768 L 77.092903 42.519768 " transform="matrix(0.993173,0,0,-0.993173,11.04276,61.776375)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072263 2.390893 C -1.694685 0.955311 -0.849069 0.278818 0.0004807 -0.000432212 C -0.849069 -0.279682 -1.694685 -0.956176 -2.072263 -2.391757 " transform="matrix(0.993173,0,0,-0.993173,87.808116,19.546446)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph0-3" x="50.171803" y="14.126897"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 6.922466 35.597512 L 33.742275 8.781636 " transform="matrix(0.993173,0,0,-0.993173,11.04276,61.776375)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071303 2.392368 C -1.693155 0.957262 -0.847723 0.278603 -0.00226593 0.000432283 C -0.85054 -0.280412 -1.693277 -0.956182 -2.071607 -2.39124 " transform="matrix(0.702313,0.702223,0.702223,-0.702313,44.692694,53.193301)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph0-3" x="19.193733" y="50.812734"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph2-1" x="25.103115" y="47.222412"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 51.020383 8.502386 L 77.836258 35.314329 " transform="matrix(0.993173,0,0,-0.993173,11.04276,61.776375)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072207 2.389471 C -1.693877 0.954413 -0.85114 0.278643 -0.0000846444 0.000579947 C -0.851104 -0.277591 -1.693755 -0.959031 -2.074684 -2.391357 " transform="matrix(0.702313,-0.702223,-0.702223,-0.702313,88.488748,26.562848)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph0-4" x="78.666939" y="49.900008"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d1-glyph3-1" x="82.740936" y="51.383809"/>
</g>
</g>
</svg></figure>
<p>Il diagramma è commutativo perché per ogni $a \\in A$ si ha $(j_f \\circ f')(a) = j_f(f'(a)) = j_f(f(a)) = f(a)$.</p>`
      },

      {
        id: "s05-decomp-iniettiva",
        type: "section",
        title: "Decomposizione canonica: la componente iniettiva",
        icon: "🧮",
        content: `<p>Per isolare la componente iniettiva, l'idea è di <strong>"identificare" tutti gli elementi del dominio che hanno la stessa immagine</strong>. Questo si fa costruendo l'insieme quoziente rispetto alla relazione di equivalenza $\\eta_f$ indotta da $f$.</p>
<p>Sia $\\eta_f$ la relazione su $A$ definita da $a \\, \\eta_f \\, a' \\iff f(a) = f(a')$. Consideriamo l'insieme quoziente $A/\\eta_f$ e la proiezione canonica $p_{\\eta_f}: A \\to A/\\eta_f$, che associa ad ogni elemento la sua classe di equivalenza.</p>`,
        subsections: [
          {
            subtitle: "Promemoria sugli oggetti in gioco",
            content: `<p>Riassumiamo, nel caso specifico della relazione $\\eta_f$, i tre oggetti che stiamo usando:</p>
<ul>
  <li>la classe di $a \\in A$ è $[a]_{\\eta_f} = \\{x \\in A : f(x) = f(a)\\}$, cioè l'insieme degli elementi che $f$ manda nello stesso valore di $a$;</li>
  <li>l'insieme quoziente $A/\\eta_f$ è l'insieme di tutte queste classi: i suoi elementi sono <em>insiemi</em> di elementi di $A$, non elementi di $A$;</li>
  <li>la proiezione canonica è $p_{\\eta_f}: A \\to A/\\eta_f$ con $p_{\\eta_f}(a) = [a]_{\\eta_f}$, ed è suriettiva.</li>
</ul>
<p>Vale inoltre, come in generale per ogni relazione di equivalenza,</p>
<p>$$[a]_{\\eta_f} = [a']_{\\eta_f} \\iff a \\, \\eta_f \\, a' \\iff f(a) = f(a')$$</p>
<p>ed è proprio questa catena di equivalenze che useremo ripetutamente nel seguito.</p>`
          },
          {
            subtitle: "Definizione e buona definizione di $f_*$",
            content: `<p>Vogliamo definire una nuova funzione $f_*: A/\\eta_f \\to B$ che completi il diagramma. L'unica definizione sensata per $f_*$ su una classe di equivalenza $C = [a]_{\\eta_f}$ è:</p>
<p>$$f_*(C) = f_*([a]_{\\eta_f}) = f(a)$$</p>
<p>Una questione fondamentale sorge immediatamente: <strong>questa definizione è ben posta?</strong> Il valore di $f_*([a])$ dipende dalla scelta del rappresentante $a$ della classe? Dobbiamo assicurarci che se $[a]_{\\eta_f} = [a']_{\\eta_f}$, allora $f(a) = f(a')$.</p>
<p>Questo è garantito proprio dalla definizione di $\\eta_f$. Infatti:</p>
<p>$$[a]_{\\eta_f} = [a']_{\\eta_f} \\iff a \\, \\eta_f \\, a' \\iff f(a) = f(a')$$</p>
<p>Quindi la definizione di $f_*$ è indipendente dal rappresentante scelto ed è <strong>ben definita</strong>.</p>`
          },
          {
            subtitle: "Proposizione: $f_*$ è iniettiva",
            content: `<p><strong>Enunciato.</strong> La funzione $f_*: A/\\eta_f \\to B$ definita da $f_*([a]_{\\eta_f}) = f(a)$ è iniettiva.</p>
<p><strong>Dimostrazione.</strong> Dobbiamo dimostrare che se $f_*(C) = f_*(C')$, allora $C = C'$. Siano $C = [a]_{\\eta_f}$ e $C' = [a']_{\\eta_f}$ due classi in $A/\\eta_f$. Allora</p>
<p>$$\\begin{aligned}
f_*(C) = f_*(C') &\\Rightarrow f_*([a]_{\\eta_f}) = f_*([a']_{\\eta_f}) \\\\
&\\Rightarrow f(a) = f(a') && \\text{(per definizione di } f_*) \\\\
&\\Rightarrow a \\, \\eta_f \\, a' && \\text{(per definizione di } \\eta_f) \\\\
&\\Rightarrow [a]_{\\eta_f} = [a']_{\\eta_f} && \\text{(proprietà chiave delle classi)} \\\\
&\\Rightarrow C = C'
\\end{aligned}$$</p>
<p>La funzione $f_*$ è quindi iniettiva. $\\square$</p>`
          }
        ],
        extra_content: `<p>Otteniamo così una seconda decomposizione di $f$, come composizione di una funzione suriettiva (la proiezione canonica) seguita da una iniettiva:</p>
<p>$$f = f_* \\circ p_{\\eta_f}$$</p>
<p>Il diagramma commutativo è la fattorizzazione di $f$ attraverso il quoziente.</p>
<figure class="figura" data-id="algebra_lez05b_d2"><?xml version="1.0" encoding="UTF-8"?>
<svg id="algebra_lez05b_d2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107.415pt" height="74.667pt" viewBox="0 0 107.415 74.667" version="1.2"><style>#algebra_lez05b_d2 [fill="rgb(0%,0%,0%)"],#algebra_lez05b_d2 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#algebra_lez05b_d2 [stroke="rgb(0%,0%,0%)"],#algebra_lez05b_d2 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-1">
<path style="stroke:none;" d="M 7.140625 -0.203125 C 7.140625 -0.3125 7.046875 -0.3125 6.921875 -0.3125 C 6.296875 -0.3125 6.296875 -0.375 6.265625 -0.65625 L 5.671875 -6.859375 C 5.640625 -7.046875 5.640625 -7.09375 5.484375 -7.09375 C 5.3125 -7.09375 5.28125 -7.03125 5.21875 -6.921875 L 1.765625 -1.140625 C 1.375 -0.46875 0.984375 -0.34375 0.5625 -0.3125 C 0.4375 -0.296875 0.34375 -0.296875 0.34375 -0.109375 C 0.34375 -0.046875 0.390625 0 0.46875 0 C 0.75 0 1.046875 -0.03125 1.328125 -0.03125 C 1.65625 -0.03125 2 0 2.3125 0 C 2.375 0 2.5 0 2.5 -0.1875 C 2.5 -0.296875 2.421875 -0.3125 2.34375 -0.3125 C 2.125 -0.328125 1.875 -0.40625 1.875 -0.65625 C 1.875 -0.765625 1.9375 -0.875 2.015625 -1.015625 C 2.09375 -1.140625 2.09375 -1.140625 2.78125 -2.28125 L 5.265625 -2.28125 C 5.28125 -2.078125 5.421875 -0.734375 5.421875 -0.640625 C 5.421875 -0.34375 4.90625 -0.3125 4.703125 -0.3125 C 4.5625 -0.3125 4.46875 -0.3125 4.46875 -0.109375 C 4.46875 0 4.609375 0 4.609375 0 C 5.015625 0 5.4375 -0.03125 5.84375 -0.03125 C 6.09375 -0.03125 6.71875 0 6.96875 0 C 7.03125 0 7.140625 0 7.140625 -0.203125 Z M 5.234375 -2.59375 L 2.96875 -2.59375 L 4.90625 -5.859375 Z M 5.234375 -2.59375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-2">
<path style="stroke:none;" d="M 6.953125 -2.140625 C 6.953125 -2.859375 6.375 -3.421875 5.421875 -3.53125 C 6.453125 -3.71875 7.484375 -4.453125 7.484375 -5.40625 C 7.484375 -6.125 6.828125 -6.765625 5.640625 -6.765625 L 2.3125 -6.765625 C 2.125 -6.765625 2.03125 -6.765625 2.03125 -6.5625 C 2.03125 -6.453125 2.125 -6.453125 2.3125 -6.453125 C 2.3125 -6.453125 2.515625 -6.453125 2.6875 -6.4375 C 2.859375 -6.421875 2.953125 -6.40625 2.953125 -6.28125 C 2.953125 -6.234375 2.9375 -6.21875 2.90625 -6.09375 L 1.578125 -0.765625 C 1.484375 -0.390625 1.46875 -0.3125 0.6875 -0.3125 C 0.515625 -0.3125 0.421875 -0.3125 0.421875 -0.109375 C 0.421875 0 0.5 0 0.6875 0 L 4.21875 0 C 5.78125 0 6.953125 -1.171875 6.953125 -2.140625 Z M 6.59375 -5.4375 C 6.59375 -4.5625 5.734375 -3.625 4.53125 -3.625 L 3.078125 -3.625 L 3.6875 -6.078125 C 3.78125 -6.421875 3.796875 -6.453125 4.234375 -6.453125 L 5.515625 -6.453125 C 6.375 -6.453125 6.59375 -5.875 6.59375 -5.4375 Z M 6.03125 -2.25 C 6.03125 -1.265625 5.15625 -0.3125 3.984375 -0.3125 L 2.640625 -0.3125 C 2.5 -0.3125 2.484375 -0.3125 2.421875 -0.3125 C 2.3125 -0.328125 2.28125 -0.34375 2.28125 -0.421875 C 2.28125 -0.453125 2.28125 -0.46875 2.34375 -0.640625 L 3.015625 -3.40625 L 4.890625 -3.40625 C 5.84375 -3.40625 6.03125 -2.671875 6.03125 -2.25 Z M 6.03125 -2.25 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-3">
<path style="stroke:none;" d="M 4.390625 -7.234375 C 4.390625 -7.34375 4.3125 -7.4375 4.203125 -7.4375 C 4.125 -7.4375 4.0625 -7.40625 4.03125 -7.34375 L 0.59375 2.09375 C 0.546875 2.234375 0.546875 2.28125 0.546875 2.28125 C 0.546875 2.390625 0.640625 2.484375 0.75 2.484375 C 0.875 2.484375 0.90625 2.40625 0.953125 2.234375 L 4.34375 -7.046875 C 4.390625 -7.1875 4.390625 -7.234375 4.390625 -7.234375 Z M 4.390625 -7.234375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-4">
<path style="stroke:none;" d="M 4.828125 -2.75 C 4.890625 -2.921875 4.90625 -3.046875 4.90625 -3.3125 C 4.90625 -3.96875 4.515625 -4.375 3.78125 -4.375 C 2.984375 -4.375 2.484375 -3.859375 2.234375 -3.515625 C 2.1875 -4.078125 1.765625 -4.375 1.328125 -4.375 C 0.875 -4.375 0.6875 -4 0.59375 -3.8125 C 0.421875 -3.484375 0.28125 -2.875 0.28125 -2.859375 C 0.28125 -2.75 0.40625 -2.75 0.40625 -2.75 C 0.5 -2.75 0.515625 -2.765625 0.578125 -2.984375 C 0.75 -3.6875 0.9375 -4.15625 1.296875 -4.15625 C 1.46875 -4.15625 1.609375 -4.078125 1.609375 -3.703125 C 1.609375 -3.5 1.578125 -3.390625 1.453125 -2.875 L 0.875 -0.578125 C 0.84375 -0.4375 0.78125 -0.203125 0.78125 -0.15625 C 0.78125 0.015625 0.921875 0.109375 1.0625 0.109375 C 1.1875 0.109375 1.359375 0.03125 1.4375 -0.171875 C 1.453125 -0.1875 1.5625 -0.65625 1.625 -0.90625 L 1.84375 -1.796875 C 1.90625 -2.015625 1.96875 -2.234375 2.015625 -2.453125 C 2.03125 -2.515625 2.109375 -2.84375 2.125 -2.90625 C 2.15625 -2.984375 2.453125 -3.546875 2.796875 -3.8125 C 3.015625 -3.96875 3.3125 -4.15625 3.75 -4.15625 C 4.171875 -4.15625 4.28125 -3.828125 4.28125 -3.46875 C 4.28125 -3.421875 4.28125 -3.234375 4.1875 -2.84375 L 3.046875 1.71875 C 3.015625 1.828125 3.015625 1.875 3.015625 1.875 C 3.015625 2.015625 3.125 2.140625 3.296875 2.140625 C 3.609375 2.140625 3.671875 1.859375 3.703125 1.75 Z M 4.828125 -2.75 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-5">
<path style="stroke:none;" d="M 5.46875 -6.296875 C 5.46875 -6.75 5.015625 -6.984375 4.609375 -6.984375 C 4.265625 -6.984375 3.640625 -6.8125 3.34375 -5.828125 C 3.28125 -5.609375 3.265625 -5.515625 3.015625 -4.265625 L 2.34375 -4.265625 C 2.15625 -4.265625 2.046875 -4.265625 2.046875 -4.078125 C 2.046875 -3.96875 2.125 -3.96875 2.3125 -3.96875 L 2.96875 -3.96875 L 2.234375 -0.046875 C 2.046875 0.90625 1.875 1.8125 1.359375 1.8125 C 1.328125 1.8125 1.078125 1.8125 0.890625 1.640625 C 1.34375 1.609375 1.4375 1.25 1.4375 1.09375 C 1.4375 0.875 1.265625 0.75 1.0625 0.75 C 0.8125 0.75 0.53125 0.96875 0.53125 1.34375 C 0.53125 1.796875 0.953125 2.03125 1.359375 2.03125 C 1.90625 2.03125 2.3125 1.453125 2.484375 1.0625 C 2.796875 0.453125 3.03125 -0.75 3.046875 -0.828125 L 3.640625 -3.96875 L 4.484375 -3.96875 C 4.6875 -3.96875 4.78125 -3.96875 4.78125 -4.15625 C 4.78125 -4.265625 4.6875 -4.265625 4.515625 -4.265625 L 3.6875 -4.265625 C 3.796875 -4.84375 3.796875 -4.828125 3.90625 -5.40625 C 3.9375 -5.609375 4.078125 -6.3125 4.140625 -6.421875 C 4.234375 -6.625 4.390625 -6.765625 4.609375 -6.765625 C 4.640625 -6.765625 4.90625 -6.765625 5.09375 -6.59375 C 4.65625 -6.546875 4.5625 -6.203125 4.5625 -6.046875 C 4.5625 -5.828125 4.734375 -5.703125 4.921875 -5.703125 C 5.1875 -5.703125 5.46875 -5.921875 5.46875 -6.296875 Z M 5.46875 -6.296875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph0-6">
<path style="stroke:none;" d="M 4.859375 -2.796875 C 4.859375 -3.71875 4.296875 -4.375 3.53125 -4.375 C 3.046875 -4.375 2.5625 -4.015625 2.234375 -3.640625 C 2.140625 -4.171875 1.71875 -4.375 1.34375 -4.375 C 0.890625 -4.375 0.703125 -4 0.609375 -3.8125 C 0.4375 -3.484375 0.3125 -2.875 0.3125 -2.859375 C 0.3125 -2.75 0.421875 -2.75 0.421875 -2.75 C 0.53125 -2.75 0.53125 -2.765625 0.59375 -2.984375 C 0.765625 -3.6875 0.953125 -4.15625 1.3125 -4.15625 C 1.484375 -4.15625 1.625 -4.078125 1.625 -3.703125 C 1.625 -3.484375 1.59375 -3.375 1.5625 -3.203125 L 0.453125 1.203125 C 0.359375 1.546875 0.34375 1.609375 -0.09375 1.609375 C -0.203125 1.609375 -0.3125 1.609375 -0.3125 1.796875 C -0.3125 1.875 -0.265625 1.921875 -0.1875 1.921875 C 0.078125 1.921875 0.359375 1.890625 0.640625 1.890625 C 0.96875 1.890625 1.3125 1.921875 1.625 1.921875 C 1.671875 1.921875 1.796875 1.921875 1.796875 1.71875 C 1.796875 1.609375 1.703125 1.609375 1.5625 1.609375 C 1.0625 1.609375 1.0625 1.546875 1.0625 1.453125 C 1.0625 1.34375 1.484375 -0.28125 1.5625 -0.53125 C 1.6875 -0.234375 1.96875 0.109375 2.46875 0.109375 C 3.609375 0.109375 4.859375 -1.34375 4.859375 -2.796875 Z M 3.640625 -1.125 C 3.296875 -0.4375 2.828125 -0.109375 2.453125 -0.109375 C 1.796875 -0.109375 1.671875 -0.9375 1.671875 -0.984375 C 1.671875 -0.984375 1.671875 -1.03125 1.703125 -1.15625 L 2.1875 -3.09375 C 2.265625 -3.359375 2.53125 -3.640625 2.703125 -3.78125 C 3.046875 -4.09375 3.34375 -4.15625 3.5 -4.15625 C 3.90625 -4.15625 4.140625 -3.8125 4.140625 -3.234375 C 4.140625 -2.640625 3.8125 -1.5 3.640625 -1.125 Z M 3.640625 -1.125 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph1-1">
<path style="stroke:none;" d="M 4.1875 -4.390625 C 4.1875 -4.703125 3.84375 -4.890625 3.5 -4.890625 C 3.1875 -4.890625 2.84375 -4.703125 2.65625 -4.359375 C 2.53125 -4.109375 2.46875 -3.796875 2.328125 -2.984375 L 1.78125 -2.984375 C 1.640625 -2.984375 1.546875 -2.984375 1.546875 -2.84375 C 1.546875 -2.734375 1.640625 -2.734375 1.765625 -2.734375 L 2.28125 -2.734375 L 1.671875 0.546875 C 1.625 0.6875 1.515625 1.21875 1.171875 1.21875 C 1.171875 1.21875 1 1.21875 0.875 1.140625 C 1.15625 1.046875 1.171875 0.796875 1.171875 0.75 C 1.171875 0.609375 1.0625 0.5 0.90625 0.5 C 0.71875 0.5 0.5 0.65625 0.5 0.921875 C 0.5 1.234375 0.828125 1.421875 1.171875 1.421875 C 1.625 1.421875 1.921875 0.953125 2.015625 0.8125 C 2.265625 0.34375 2.421875 -0.515625 2.4375 -0.59375 L 2.828125 -2.734375 L 3.5 -2.734375 C 3.640625 -2.734375 3.734375 -2.734375 3.734375 -2.890625 C 3.734375 -2.984375 3.640625 -2.984375 3.515625 -2.984375 L 2.875 -2.984375 C 3.03125 -3.875 3.09375 -4.1875 3.140625 -4.390625 C 3.171875 -4.546875 3.328125 -4.6875 3.5 -4.6875 C 3.5 -4.6875 3.6875 -4.6875 3.828125 -4.609375 C 3.53125 -4.515625 3.515625 -4.265625 3.515625 -4.21875 C 3.515625 -4.078125 3.640625 -3.96875 3.796875 -3.96875 C 3.984375 -3.96875 4.1875 -4.125 4.1875 -4.390625 Z M 4.1875 -4.390625 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph1-2">
<path style="stroke:none;" d="M 3.125 1.15625 L 3.875 -1.890625 C 3.921875 -2.078125 3.9375 -2.109375 3.9375 -2.265625 C 3.9375 -2.375 3.9375 -2.671875 3.671875 -2.875 C 3.5625 -2.96875 3.359375 -3.0625 3.03125 -3.0625 C 2.734375 -3.0625 2.3125 -2.984375 1.859375 -2.4375 C 1.8125 -2.953125 1.34375 -3.0625 1.125 -3.0625 C 0.859375 -3.0625 0.6875 -2.875 0.578125 -2.6875 C 0.4375 -2.453125 0.328125 -2.046875 0.328125 -2 C 0.328125 -1.90625 0.421875 -1.90625 0.4375 -1.90625 C 0.546875 -1.90625 0.546875 -1.921875 0.59375 -2.109375 C 0.703125 -2.515625 0.828125 -2.859375 1.109375 -2.859375 C 1.28125 -2.859375 1.328125 -2.71875 1.328125 -2.53125 C 1.328125 -2.390625 1.265625 -2.140625 1.21875 -1.953125 L 1.0625 -1.328125 L 0.84375 -0.4375 C 0.8125 -0.34375 0.78125 -0.171875 0.78125 -0.15625 C 0.78125 0 0.90625 0.0625 1.015625 0.0625 C 1.140625 0.0625 1.25 -0.015625 1.28125 -0.078125 C 1.3125 -0.140625 1.375 -0.375 1.40625 -0.515625 L 1.5625 -1.140625 C 1.609375 -1.296875 1.640625 -1.4375 1.671875 -1.609375 C 1.75 -1.90625 1.75 -1.921875 1.890625 -2.125 C 2.109375 -2.46875 2.46875 -2.859375 3 -2.859375 C 3.390625 -2.859375 3.40625 -2.546875 3.40625 -2.375 C 3.40625 -2.1875 3.40625 -2.125 3.359375 -2 L 2.578125 1.109375 C 2.546875 1.21875 2.546875 1.265625 2.546875 1.265625 C 2.546875 1.421875 2.671875 1.484375 2.78125 1.484375 C 3.03125 1.484375 3.09375 1.25 3.125 1.15625 Z M 3.125 1.15625 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph2-1">
<path style="stroke:none;" d="M 3.421875 -3.109375 C 3.421875 -3.390625 3.09375 -3.484375 2.859375 -3.484375 C 2.234375 -3.484375 2.109375 -2.890625 2.0625 -2.671875 C 2.015625 -2.46875 2.046875 -2.59375 1.96875 -2.140625 L 1.515625 -2.140625 C 1.421875 -2.140625 1.34375 -2.140625 1.34375 -2 C 1.34375 -1.90625 1.421875 -1.90625 1.5 -1.90625 L 1.9375 -1.90625 C 1.84375 -1.421875 1.625 -0.046875 1.484375 0.46875 C 1.46875 0.59375 1.34375 0.84375 1.15625 0.84375 C 1.125 0.84375 1.015625 0.84375 0.921875 0.796875 C 1.0625 0.734375 1.125 0.609375 1.125 0.515625 C 1.125 0.390625 1.03125 0.3125 0.90625 0.3125 C 0.765625 0.3125 0.59375 0.421875 0.59375 0.640625 C 0.59375 0.9375 0.953125 1.015625 1.140625 1.015625 C 1.4375 1.015625 1.65625 0.78125 1.765625 0.640625 C 1.96875 0.359375 2.078125 -0.296875 2.078125 -0.3125 L 2.359375 -1.90625 L 2.90625 -1.90625 C 3.015625 -1.90625 3.015625 -1.921875 3.046875 -1.9375 C 3.078125 -1.953125 3.078125 -2.015625 3.078125 -2.046875 C 3.078125 -2.140625 3.015625 -2.140625 2.921875 -2.140625 L 2.390625 -2.140625 C 2.453125 -2.5 2.5625 -3.125 2.625 -3.203125 C 2.6875 -3.28125 2.78125 -3.328125 2.859375 -3.328125 C 2.890625 -3.328125 3 -3.328125 3.09375 -3.265625 C 2.90625 -3.1875 2.90625 -3 2.90625 -2.984375 C 2.90625 -2.859375 3 -2.78125 3.125 -2.78125 C 3.25 -2.78125 3.421875 -2.890625 3.421875 -3.109375 Z M 3.421875 -3.109375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d2-glyph3-1">
<path style="stroke:none;" d="M 3.4375 -1.09375 C 3.4375 -1.21875 3.34375 -1.265625 3.296875 -1.28125 L 2.234375 -1.734375 L 3.265625 -2.171875 C 3.359375 -2.21875 3.4375 -2.25 3.4375 -2.375 C 3.4375 -2.46875 3.359375 -2.59375 3.21875 -2.59375 C 3.171875 -2.59375 3.15625 -2.578125 3.078125 -2.53125 L 2.125 -1.90625 L 2.234375 -2.9375 L 2.234375 -3.03125 C 2.234375 -3.109375 2.171875 -3.21875 2.03125 -3.21875 C 1.890625 -3.21875 1.8125 -3.125 1.8125 -3.03125 L 1.921875 -1.90625 L 0.984375 -2.53125 C 0.890625 -2.59375 0.859375 -2.59375 0.828125 -2.59375 C 0.6875 -2.59375 0.609375 -2.46875 0.609375 -2.375 C 0.609375 -2.25 0.6875 -2.21875 0.78125 -2.171875 L 1.8125 -1.734375 L 0.78125 -1.296875 C 0.6875 -1.25 0.609375 -1.21875 0.609375 -1.09375 C 0.609375 -0.984375 0.6875 -0.875 0.828125 -0.875 C 0.875 -0.875 0.90625 -0.875 0.96875 -0.921875 L 1.921875 -1.5625 L 1.8125 -0.4375 C 1.8125 -0.34375 1.890625 -0.234375 2.03125 -0.234375 C 2.171875 -0.234375 2.234375 -0.34375 2.234375 -0.4375 C 2.234375 -0.46875 2.125 -1.53125 2.125 -1.5625 L 2.96875 -0.984375 C 3.15625 -0.875 3.171875 -0.875 3.21875 -0.875 C 3.359375 -0.875 3.4375 -0.984375 3.4375 -1.09375 Z M 3.4375 -1.09375 "/>
</symbol>
</g>
</defs>
<g id="algebra_lez05b_d2-surface1">
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph0-1" x="7.266426" y="22.995587"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph0-2" x="91.55438" y="22.995587"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph0-1" x="42.049989" y="64.19819"/>
  <use xlink:href="#algebra_lez05b_d2-glyph0-3" x="49.481466" y="64.19819"/>
  <use xlink:href="#algebra_lez05b_d2-glyph0-4" x="54.435784" y="64.19819"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph1-1" x="59.355739" y="65.684098"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 7.256335 42.520654 L 77.095568 42.520654 " transform="matrix(0.994583,0,0,-0.994583,10.982189,61.899708)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070871 2.392316 C -1.693829 0.954842 -0.849411 0.279308 -0.00106572 0.00045354 C -0.849411 -0.278401 -1.693829 -0.957862 -2.070871 -2.391409 " transform="matrix(0.994583,0,0,-0.994583,87.856529,19.609826)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph0-5" x="50.166783" y="14.183578"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 6.922495 35.596429 L 33.558964 8.963888 " transform="matrix(0.994583,0,0,-0.994583,10.982189,61.899708)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.069985 2.391017 C -1.695178 0.955149 -0.850954 0.27743 -0.00114022 -0.000366704 C -0.851001 -0.278019 -1.695341 -0.955595 -2.070391 -2.391399 " transform="matrix(0.70332,0.7032,0.7032,-0.70332,44.50106,53.125544)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph0-6" x="13.720277" y="47.648324"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph1-2" x="18.705129" y="49.134231"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph2-1" x="22.787893" y="50.1865"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 51.201402 8.681106 L 77.83787 35.313647 " transform="matrix(0.994583,0,0,-0.994583,10.982189,61.899708)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071673 2.392794 C -1.693879 0.954216 -0.84956 0.276627 0.000289067 -0.00104177 C -0.849524 -0.278818 -1.693757 -0.956515 -2.071369 -2.389587 " transform="matrix(0.70331,-0.70322,-0.70322,-0.70331,88.538127,26.636189)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph0-5" x="78.790892" y="50.263083"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d2-glyph3-1" x="83.642469" y="51.748991"/>
</g>
</g>
</svg></figure>`
      },

      {
        id: "s05-teorema-decomposizione",
        type: "section",
        title: "Teorema di decomposizione canonica",
        icon: "⭐",
        content: `<p>Mettendo insieme le due idee, possiamo ottenere una decomposizione completa di $f$ in tre parti: una suriettiva, una biiettiva e una iniettiva.</p>
<p>L'idea è applicare la prima decomposizione a $f_*$. La funzione $f_*: A/\\eta_f \\to B$ ha come immagine $\\mathrm{Im}(f_*) = \\mathrm{Im}(f)$: infatti i valori assunti da $f_*$ sono esattamente i valori $f(a)$ con $a \\in A$. Possiamo quindi co-restringere $f_*$ alla propria immagine, ottenendo una nuova funzione che indichiamo con $f_{**}$.</p>`,
        subsections: [
          {
            subtitle: "Definizione (La funzione indotta $f_{**}$)",
            content: `<p>Data $f: A \\to B$, la <strong>funzione indotta</strong> sul quoziente, a valori nell'immagine, è</p>
<p>$$f_{**}: A/\\eta_f \\to \\mathrm{Im}(f), \\qquad f_{**}([a]_{\\eta_f}) = f(a)$$</p>
<p>Si tratta della co-restrizione di $f_*$ a $\\mathrm{Im}(f)$: è ben definita per lo stesso motivo per cui lo è $f_*$ (il valore non dipende dal rappresentante $a$ scelto nella classe).</p>
<p>Osserviamo che $f_{**}$ è:</p>
<ul>
  <li><strong>Iniettiva</strong>: per lo stesso motivo per cui $f_*$ è iniettiva (cambiare il codominio non altera l'iniettività).</li>
  <li><strong>Suriettiva</strong>: per costruzione, dato che il codominio è esattamente $\\mathrm{Im}(f) = \\mathrm{Im}(f_*)$.</li>
</ul>
<p>Quindi $f_{**}$ è <strong>biiettiva</strong>.</p>`
          },
          {
            subtitle: "Teorema (Decomposizione canonica — Teorema Fondamentale di Omomorfismo per insiemi)",
            content: `<p>Sia $f: A \\to B$ una funzione qualsiasi, sia $\\eta_f$ la relazione di equivalenza su $A$ definita da $a \\, \\eta_f \\, a' \\iff f(a) = f(a')$ e si considerino le tre funzioni:</p>
<ol>
  <li>la proiezione canonica $p_{\\eta_f}: A \\to A/\\eta_f$, $\\; p_{\\eta_f}(a) = [a]_{\\eta_f}$, che è <strong>suriettiva</strong>;</li>
  <li>la funzione indotta $f_{**}: A/\\eta_f \\to \\mathrm{Im}(f)$, $\\; f_{**}([a]_{\\eta_f}) = f(a)$, che è <strong>biiettiva</strong>;</li>
  <li>l'inclusione canonica $j_f: \\mathrm{Im}(f) \\to B$, $\\; j_f(y) = y$, che è <strong>iniettiva</strong>.</li>
</ol>
<p>Allora vale l'identità di decomposizione</p>
<p>$$f = j_f \\circ f_{**} \\circ p_{\\eta_f}$$</p>
<p>Ogni funzione si scrive dunque, in modo canonico, come una <strong>suriezione seguita da una biiezione seguita da una iniezione</strong>.</p>`
          },
          {
            subtitle: "Dimostrazione",
            content: `<p>Le proprietà delle tre mappe sono state verificate sopra: $p_{\\eta_f}$ è suriettiva perché ogni classe ha almeno un rappresentante, $f_{**}$ è iniettiva e suriettiva (quindi biiettiva) e $j_f$ è iniettiva perché è l'identità su $\\mathrm{Im}(f)$.</p>
<p>Resta da verificare l'uguaglianza delle funzioni, cioè che le due funzioni assumano lo stesso valore su ogni $a \\in A$:</p>
<p>$$(j_f \\circ f_{**} \\circ p_{\\eta_f})(a) = j_f\\big(f_{**}([a]_{\\eta_f})\\big) = j_f\\big(f(a)\\big) = f(a)$$</p>
<p>Dato che ciò vale per ogni $a \\in A$, le due funzioni coincidono. $\\square$</p>`
          }
        ],
        formulas: [
          { label: "Decomposizione canonica", latex: "f = j_f \\circ f_{**} \\circ p_{\\eta_f}" },
          { label: "Funzione indotta (biiettiva)", latex: "f_{**}: A/\\eta_f \\to \\mathrm{Im}(f), \\quad f_{**}([a]_{\\eta_f}) = f(a)" }
        ],
        extra_content: `<p>Il diagramma commutativo generale raccoglie i tre pezzi: suriezione, biiezione, inclusione.</p>
<figure class="figura" data-id="algebra_lez05b_d3"><?xml version="1.0" encoding="UTF-8"?>
<svg id="algebra_lez05b_d3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="257.017pt" height="97.162pt" viewBox="0 0 257.017 97.162" version="1.2"><style>#algebra_lez05b_d3 [fill="rgb(0%,0%,0%)"],#algebra_lez05b_d3 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#algebra_lez05b_d3 [stroke="rgb(0%,0%,0%)"],#algebra_lez05b_d3 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-1">
<path style="stroke:none;" d="M 7.125 -0.203125 C 7.125 -0.3125 7.015625 -0.3125 6.890625 -0.3125 C 6.28125 -0.3125 6.28125 -0.375 6.25 -0.65625 L 5.65625 -6.828125 C 5.625 -7.03125 5.625 -7.078125 5.453125 -7.078125 C 5.296875 -7.078125 5.265625 -7 5.203125 -6.90625 L 1.765625 -1.140625 C 1.375 -0.46875 0.984375 -0.328125 0.546875 -0.3125 C 0.4375 -0.296875 0.34375 -0.296875 0.34375 -0.109375 C 0.34375 -0.046875 0.390625 0 0.46875 0 C 0.734375 0 1.046875 -0.03125 1.328125 -0.03125 C 1.65625 -0.03125 2 0 2.3125 0 C 2.375 0 2.5 0 2.5 -0.1875 C 2.5 -0.296875 2.40625 -0.3125 2.34375 -0.3125 C 2.109375 -0.328125 1.875 -0.40625 1.875 -0.65625 C 1.875 -0.765625 1.9375 -0.875 2.015625 -1.015625 C 2.078125 -1.140625 2.09375 -1.140625 2.765625 -2.28125 L 5.25 -2.28125 C 5.265625 -2.078125 5.40625 -0.734375 5.40625 -0.625 C 5.40625 -0.328125 4.890625 -0.3125 4.6875 -0.3125 C 4.546875 -0.3125 4.453125 -0.3125 4.453125 -0.109375 C 4.453125 0 4.59375 0 4.59375 0 C 5 0 5.421875 -0.03125 5.828125 -0.03125 C 6.078125 -0.03125 6.6875 0 6.9375 0 C 7 0 7.125 0 7.125 -0.203125 Z M 5.21875 -2.59375 L 2.953125 -2.59375 L 4.890625 -5.84375 Z M 5.21875 -2.59375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-2">
<path style="stroke:none;" d="M 6.9375 -2.140625 C 6.9375 -2.84375 6.359375 -3.421875 5.40625 -3.53125 C 6.421875 -3.71875 7.46875 -4.4375 7.46875 -5.375 C 7.46875 -6.109375 6.8125 -6.75 5.625 -6.75 L 2.3125 -6.75 C 2.125 -6.75 2.03125 -6.75 2.03125 -6.546875 C 2.03125 -6.4375 2.109375 -6.4375 2.296875 -6.4375 C 2.296875 -6.4375 2.515625 -6.4375 2.671875 -6.421875 C 2.859375 -6.40625 2.9375 -6.390625 2.9375 -6.265625 C 2.9375 -6.21875 2.9375 -6.1875 2.90625 -6.078125 L 1.578125 -0.765625 C 1.484375 -0.390625 1.46875 -0.3125 0.6875 -0.3125 C 0.515625 -0.3125 0.421875 -0.3125 0.421875 -0.109375 C 0.421875 0 0.5 0 0.6875 0 L 4.203125 0 C 5.765625 0 6.9375 -1.171875 6.9375 -2.140625 Z M 6.5625 -5.421875 C 6.5625 -4.546875 5.71875 -3.609375 4.515625 -3.609375 L 3.078125 -3.609375 L 3.6875 -6.0625 C 3.765625 -6.40625 3.796875 -6.4375 4.21875 -6.4375 L 5.484375 -6.4375 C 6.359375 -6.4375 6.5625 -5.859375 6.5625 -5.421875 Z M 6.015625 -2.234375 C 6.015625 -1.265625 5.140625 -0.3125 3.96875 -0.3125 L 2.625 -0.3125 C 2.484375 -0.3125 2.46875 -0.3125 2.40625 -0.3125 C 2.3125 -0.328125 2.28125 -0.328125 2.28125 -0.421875 C 2.28125 -0.4375 2.28125 -0.46875 2.328125 -0.640625 L 3.015625 -3.390625 L 4.875 -3.390625 C 5.828125 -3.390625 6.015625 -2.671875 6.015625 -2.234375 Z M 6.015625 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-3">
<path style="stroke:none;" d="M 4.390625 -7.203125 C 4.390625 -7.3125 4.296875 -7.40625 4.1875 -7.40625 C 4.125 -7.40625 4.046875 -7.375 4.015625 -7.3125 L 0.59375 2.09375 C 0.546875 2.21875 0.546875 2.265625 0.546875 2.265625 C 0.546875 2.375 0.625 2.46875 0.734375 2.46875 C 0.875 2.46875 0.90625 2.40625 0.953125 2.234375 L 4.328125 -7.03125 C 4.390625 -7.15625 4.390625 -7.203125 4.390625 -7.203125 Z M 4.390625 -7.203125 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-4">
<path style="stroke:none;" d="M 4.8125 -2.734375 C 4.875 -2.90625 4.890625 -3.046875 4.890625 -3.3125 C 4.890625 -3.953125 4.5 -4.359375 3.765625 -4.359375 C 2.984375 -4.359375 2.46875 -3.84375 2.234375 -3.5 C 2.1875 -4.0625 1.765625 -4.359375 1.328125 -4.359375 C 0.875 -4.359375 0.6875 -3.984375 0.59375 -3.796875 C 0.421875 -3.46875 0.28125 -2.875 0.28125 -2.84375 C 0.28125 -2.75 0.40625 -2.75 0.40625 -2.75 C 0.5 -2.75 0.515625 -2.75 0.578125 -2.96875 C 0.734375 -3.671875 0.9375 -4.140625 1.296875 -4.140625 C 1.46875 -4.140625 1.59375 -4.0625 1.59375 -3.6875 C 1.59375 -3.484375 1.5625 -3.375 1.4375 -2.859375 L 0.875 -0.578125 C 0.84375 -0.4375 0.78125 -0.203125 0.78125 -0.15625 C 0.78125 0.015625 0.921875 0.109375 1.0625 0.109375 C 1.1875 0.109375 1.359375 0.03125 1.4375 -0.171875 C 1.4375 -0.1875 1.5625 -0.65625 1.625 -0.90625 L 1.84375 -1.78125 C 1.890625 -2 1.953125 -2.21875 2 -2.453125 C 2.03125 -2.515625 2.109375 -2.828125 2.109375 -2.890625 C 2.140625 -2.984375 2.453125 -3.53125 2.78125 -3.796875 C 3 -3.953125 3.3125 -4.140625 3.734375 -4.140625 C 4.15625 -4.140625 4.265625 -3.8125 4.265625 -3.453125 C 4.265625 -3.40625 4.265625 -3.234375 4.171875 -2.828125 L 3.046875 1.703125 C 3.015625 1.828125 3.015625 1.859375 3.015625 1.859375 C 3.015625 2.015625 3.125 2.140625 3.28125 2.140625 C 3.59375 2.140625 3.65625 1.84375 3.6875 1.734375 Z M 4.8125 -2.734375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-5">
<path style="stroke:none;" d="M 5.453125 -6.28125 C 5.453125 -6.734375 5 -6.96875 4.59375 -6.96875 C 4.25 -6.96875 3.640625 -6.78125 3.34375 -5.8125 C 3.28125 -5.59375 3.25 -5.5 3.015625 -4.25 L 2.328125 -4.25 C 2.140625 -4.25 2.03125 -4.25 2.03125 -4.0625 C 2.03125 -3.953125 2.125 -3.953125 2.3125 -3.953125 L 2.96875 -3.953125 L 2.21875 -0.046875 C 2.046875 0.90625 1.875 1.8125 1.359375 1.8125 C 1.328125 1.8125 1.078125 1.8125 0.890625 1.625 C 1.34375 1.59375 1.4375 1.25 1.4375 1.09375 C 1.4375 0.875 1.25 0.75 1.0625 0.75 C 0.8125 0.75 0.515625 0.96875 0.515625 1.34375 C 0.515625 1.78125 0.953125 2.03125 1.359375 2.03125 C 1.90625 2.03125 2.296875 1.4375 2.484375 1.0625 C 2.796875 0.4375 3.015625 -0.75 3.03125 -0.8125 L 3.625 -3.953125 L 4.46875 -3.953125 C 4.671875 -3.953125 4.765625 -3.953125 4.765625 -4.140625 C 4.765625 -4.25 4.671875 -4.25 4.5 -4.25 L 3.6875 -4.25 C 3.796875 -4.828125 3.78125 -4.8125 3.890625 -5.375 C 3.9375 -5.59375 4.0625 -6.296875 4.125 -6.40625 C 4.21875 -6.59375 4.390625 -6.75 4.59375 -6.75 C 4.625 -6.75 4.890625 -6.75 5.078125 -6.5625 C 4.640625 -6.53125 4.546875 -6.1875 4.546875 -6.03125 C 4.546875 -5.8125 4.71875 -5.6875 4.90625 -5.6875 C 5.171875 -5.6875 5.453125 -5.90625 5.453125 -6.28125 Z M 5.453125 -6.28125 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-6">
<path style="stroke:none;" d="M 4.84375 -2.78125 C 4.84375 -3.71875 4.28125 -4.359375 3.53125 -4.359375 C 3.03125 -4.359375 2.5625 -4.015625 2.234375 -3.625 C 2.140625 -4.15625 1.703125 -4.359375 1.34375 -4.359375 C 0.890625 -4.359375 0.703125 -3.984375 0.609375 -3.796875 C 0.4375 -3.46875 0.3125 -2.875 0.3125 -2.84375 C 0.3125 -2.75 0.421875 -2.75 0.421875 -2.75 C 0.515625 -2.75 0.53125 -2.75 0.59375 -2.96875 C 0.765625 -3.671875 0.953125 -4.140625 1.3125 -4.140625 C 1.484375 -4.140625 1.625 -4.0625 1.625 -3.6875 C 1.625 -3.46875 1.59375 -3.359375 1.546875 -3.1875 L 0.4375 1.203125 C 0.359375 1.546875 0.34375 1.609375 -0.09375 1.609375 C -0.203125 1.609375 -0.3125 1.609375 -0.3125 1.796875 C -0.3125 1.875 -0.265625 1.921875 -0.1875 1.921875 C 0.078125 1.921875 0.359375 1.890625 0.640625 1.890625 C 0.96875 1.890625 1.296875 1.921875 1.625 1.921875 C 1.671875 1.921875 1.796875 1.921875 1.796875 1.71875 C 1.796875 1.609375 1.703125 1.609375 1.5625 1.609375 C 1.0625 1.609375 1.0625 1.546875 1.0625 1.453125 C 1.0625 1.328125 1.484375 -0.28125 1.546875 -0.515625 C 1.671875 -0.234375 1.953125 0.109375 2.453125 0.109375 C 3.609375 0.109375 4.84375 -1.328125 4.84375 -2.78125 Z M 3.625 -1.125 C 3.28125 -0.4375 2.8125 -0.109375 2.453125 -0.109375 C 1.796875 -0.109375 1.671875 -0.921875 1.671875 -0.984375 C 1.671875 -0.984375 1.671875 -1.03125 1.703125 -1.140625 L 2.1875 -3.078125 C 2.25 -3.34375 2.515625 -3.625 2.703125 -3.765625 C 3.046875 -4.078125 3.328125 -4.140625 3.5 -4.140625 C 3.890625 -4.140625 4.125 -3.796875 4.125 -3.21875 C 4.125 -2.640625 3.796875 -1.5 3.625 -1.125 Z M 3.625 -1.125 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph0-7">
<path style="stroke:none;" d="M 3.921875 -6.171875 C 3.921875 -6.359375 3.78125 -6.53125 3.546875 -6.53125 C 3.3125 -6.53125 3.015625 -6.296875 3.015625 -6 C 3.015625 -5.8125 3.15625 -5.65625 3.390625 -5.65625 C 3.65625 -5.65625 3.921875 -5.90625 3.921875 -6.171875 Z M 3.5 -3.09375 C 3.5625 -3.28125 3.5625 -3.421875 3.5625 -3.453125 C 3.5625 -4.015625 3.140625 -4.359375 2.640625 -4.359375 C 1.640625 -4.359375 1.078125 -2.9375 1.078125 -2.84375 C 1.078125 -2.75 1.1875 -2.75 1.1875 -2.75 C 1.28125 -2.75 1.296875 -2.75 1.375 -2.9375 C 1.625 -3.546875 2.078125 -4.140625 2.609375 -4.140625 C 2.75 -4.140625 2.9375 -4.109375 2.9375 -3.6875 C 2.9375 -3.46875 2.90625 -3.359375 2.859375 -3.1875 L 1.9375 0.5 C 1.75 1.25 1.28125 1.8125 0.71875 1.8125 C 0.65625 1.8125 0.515625 1.8125 0.328125 1.71875 C 0.625 1.65625 0.78125 1.390625 0.78125 1.1875 C 0.78125 1.03125 0.671875 0.84375 0.40625 0.84375 C 0.15625 0.84375 -0.125 1.0625 -0.125 1.40625 C -0.125 1.8125 0.265625 2.03125 0.734375 2.03125 C 1.4375 2.03125 2.34375 1.5 2.59375 0.515625 Z M 3.5 -3.09375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph1-1">
<path style="stroke:none;" d="M 4.1875 -4.375 C 4.1875 -4.703125 3.84375 -4.875 3.484375 -4.875 C 3.1875 -4.875 2.84375 -4.703125 2.65625 -4.359375 C 2.515625 -4.09375 2.46875 -3.78125 2.3125 -2.984375 L 1.765625 -2.984375 C 1.640625 -2.984375 1.546875 -2.984375 1.546875 -2.828125 C 1.546875 -2.734375 1.640625 -2.734375 1.765625 -2.734375 L 2.265625 -2.734375 L 1.65625 0.546875 C 1.625 0.6875 1.515625 1.21875 1.171875 1.21875 C 1.171875 1.21875 1 1.21875 0.875 1.140625 C 1.15625 1.046875 1.171875 0.796875 1.171875 0.75 C 1.171875 0.609375 1.0625 0.5 0.90625 0.5 C 0.71875 0.5 0.5 0.65625 0.5 0.921875 C 0.5 1.234375 0.828125 1.40625 1.171875 1.40625 C 1.625 1.40625 1.921875 0.953125 2 0.796875 C 2.25 0.34375 2.421875 -0.515625 2.421875 -0.59375 L 2.8125 -2.734375 L 3.5 -2.734375 C 3.640625 -2.734375 3.71875 -2.734375 3.71875 -2.890625 C 3.71875 -2.984375 3.640625 -2.984375 3.515625 -2.984375 L 2.859375 -2.984375 C 3.03125 -3.859375 3.078125 -4.1875 3.140625 -4.375 C 3.171875 -4.53125 3.328125 -4.671875 3.484375 -4.671875 C 3.484375 -4.671875 3.6875 -4.671875 3.8125 -4.59375 C 3.53125 -4.5 3.515625 -4.25 3.515625 -4.21875 C 3.515625 -4.0625 3.625 -3.953125 3.78125 -3.953125 C 3.96875 -3.953125 4.1875 -4.125 4.1875 -4.375 Z M 4.1875 -4.375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph1-2">
<path style="stroke:none;" d="M 3.109375 1.15625 L 3.875 -1.875 C 3.921875 -2.078125 3.921875 -2.109375 3.921875 -2.265625 C 3.921875 -2.375 3.921875 -2.671875 3.671875 -2.859375 C 3.546875 -2.953125 3.34375 -3.046875 3.03125 -3.046875 C 2.734375 -3.046875 2.3125 -2.96875 1.859375 -2.421875 C 1.8125 -2.953125 1.328125 -3.046875 1.125 -3.046875 C 0.84375 -3.046875 0.6875 -2.875 0.578125 -2.6875 C 0.4375 -2.453125 0.328125 -2.03125 0.328125 -2 C 0.328125 -1.90625 0.421875 -1.90625 0.4375 -1.90625 C 0.546875 -1.90625 0.546875 -1.921875 0.59375 -2.109375 C 0.703125 -2.515625 0.828125 -2.859375 1.09375 -2.859375 C 1.28125 -2.859375 1.328125 -2.703125 1.328125 -2.515625 C 1.328125 -2.390625 1.265625 -2.125 1.21875 -1.9375 L 1.0625 -1.328125 L 0.84375 -0.4375 C 0.8125 -0.34375 0.78125 -0.171875 0.78125 -0.15625 C 0.78125 0 0.90625 0.0625 1.015625 0.0625 C 1.140625 0.0625 1.25 -0.015625 1.28125 -0.078125 C 1.3125 -0.140625 1.375 -0.359375 1.40625 -0.515625 L 1.5625 -1.140625 C 1.59375 -1.28125 1.640625 -1.4375 1.671875 -1.59375 C 1.75 -1.890625 1.75 -1.90625 1.890625 -2.125 C 2.109375 -2.46875 2.453125 -2.859375 3 -2.859375 C 3.390625 -2.859375 3.40625 -2.546875 3.40625 -2.375 C 3.40625 -2.1875 3.390625 -2.125 3.359375 -2 L 2.578125 1.109375 C 2.546875 1.21875 2.546875 1.265625 2.546875 1.265625 C 2.546875 1.40625 2.671875 1.484375 2.78125 1.484375 C 3.03125 1.484375 3.09375 1.25 3.109375 1.15625 Z M 3.109375 1.15625 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph2-1">
<path style="stroke:none;" d="M 3.28125 0 L 3.28125 -0.3125 L 3.03125 -0.3125 C 2.25 -0.3125 2.21875 -0.421875 2.21875 -0.765625 L 2.21875 -5.96875 C 2.21875 -6.328125 2.25 -6.4375 3.03125 -6.4375 L 3.28125 -6.4375 L 3.28125 -6.75 C 2.9375 -6.71875 2.15625 -6.71875 1.78125 -6.71875 C 1.40625 -6.71875 0.625 -6.71875 0.28125 -6.75 L 0.28125 -6.4375 L 0.53125 -6.4375 C 1.3125 -6.4375 1.34375 -6.328125 1.34375 -5.96875 L 1.34375 -0.765625 C 1.34375 -0.421875 1.3125 -0.3125 0.53125 -0.3125 L 0.28125 -0.3125 L 0.28125 0 C 0.625 -0.03125 1.40625 -0.03125 1.78125 -0.03125 C 2.15625 -0.03125 2.9375 -0.03125 3.28125 0 Z M 3.28125 0 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph2-2">
<path style="stroke:none;" d="M 8.03125 0 L 8.03125 -0.3125 C 7.515625 -0.3125 7.265625 -0.3125 7.265625 -0.609375 L 7.265625 -2.484375 C 7.265625 -3.34375 7.265625 -3.640625 6.953125 -4 C 6.8125 -4.171875 6.484375 -4.359375 5.921875 -4.359375 C 5.078125 -4.359375 4.65625 -3.765625 4.484375 -3.390625 C 4.34375 -4.25 3.609375 -4.359375 3.171875 -4.359375 C 2.453125 -4.359375 1.984375 -3.9375 1.703125 -3.328125 L 1.703125 -4.359375 L 0.3125 -4.25 L 0.3125 -3.953125 C 1 -3.953125 1.09375 -3.875 1.09375 -3.390625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.53125 0 L 2.53125 -0.3125 C 1.875 -0.3125 1.765625 -0.3125 1.765625 -0.75 L 1.765625 -2.5625 C 1.765625 -3.59375 2.46875 -4.140625 3.09375 -4.140625 C 3.71875 -4.140625 3.828125 -3.609375 3.828125 -3.046875 L 3.828125 -0.75 C 3.828125 -0.3125 3.71875 -0.3125 3.0625 -0.3125 L 3.0625 0 L 4.171875 -0.03125 L 5.28125 0 L 5.28125 -0.3125 C 4.625 -0.3125 4.515625 -0.3125 4.515625 -0.75 L 4.515625 -2.5625 C 4.515625 -3.59375 5.21875 -4.140625 5.84375 -4.140625 C 6.46875 -4.140625 6.578125 -3.609375 6.578125 -3.046875 L 6.578125 -0.75 C 6.578125 -0.3125 6.46875 -0.3125 5.8125 -0.3125 L 5.8125 0 L 6.921875 -0.03125 Z M 8.03125 0 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph2-3">
<path style="stroke:none;" d="M 3.265625 2.375 C 3.265625 2.34375 3.265625 2.328125 3.09375 2.15625 C 1.859375 0.90625 1.546875 -0.953125 1.546875 -2.46875 C 1.546875 -4.1875 1.921875 -5.90625 3.140625 -7.140625 C 3.265625 -7.265625 3.265625 -7.28125 3.265625 -7.3125 C 3.265625 -7.375 3.234375 -7.40625 3.171875 -7.40625 C 3.078125 -7.40625 2.1875 -6.734375 1.59375 -5.484375 C 1.09375 -4.390625 0.984375 -3.296875 0.984375 -2.46875 C 0.984375 -1.703125 1.09375 -0.5 1.625 0.609375 C 2.21875 1.828125 3.078125 2.46875 3.171875 2.46875 C 3.234375 2.46875 3.265625 2.4375 3.265625 2.375 Z M 3.265625 2.375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph2-4">
<path style="stroke:none;" d="M 2.859375 -2.46875 C 2.859375 -3.234375 2.75 -4.4375 2.203125 -5.546875 C 1.609375 -6.765625 0.765625 -7.40625 0.65625 -7.40625 C 0.609375 -7.40625 0.5625 -7.359375 0.5625 -7.3125 C 0.5625 -7.28125 0.5625 -7.265625 0.75 -7.078125 C 1.71875 -6.109375 2.28125 -4.53125 2.28125 -2.46875 C 2.28125 -0.78125 1.921875 0.953125 0.6875 2.203125 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.421875 0.609375 2.46875 0.65625 2.46875 C 0.765625 2.46875 1.65625 1.796875 2.234375 0.546875 C 2.734375 -0.546875 2.859375 -1.640625 2.859375 -2.46875 Z M 2.859375 -2.46875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph3-1">
<path style="stroke:none;" d="M 3.421875 -3.09375 C 3.421875 -3.390625 3.09375 -3.484375 2.859375 -3.484375 C 2.234375 -3.484375 2.109375 -2.890625 2.0625 -2.671875 C 2.015625 -2.453125 2.046875 -2.59375 1.953125 -2.125 L 1.515625 -2.125 C 1.421875 -2.125 1.34375 -2.125 1.34375 -1.984375 C 1.34375 -1.90625 1.40625 -1.90625 1.5 -1.90625 L 1.921875 -1.90625 C 1.828125 -1.421875 1.625 -0.046875 1.484375 0.46875 C 1.453125 0.59375 1.34375 0.84375 1.140625 0.84375 C 1.109375 0.84375 1 0.84375 0.921875 0.796875 C 1.046875 0.734375 1.109375 0.609375 1.109375 0.515625 C 1.109375 0.390625 1.015625 0.3125 0.90625 0.3125 C 0.765625 0.3125 0.59375 0.421875 0.59375 0.625 C 0.59375 0.9375 0.953125 1.015625 1.140625 1.015625 C 1.421875 1.015625 1.640625 0.78125 1.75 0.625 C 1.953125 0.359375 2.0625 -0.296875 2.078125 -0.3125 L 2.34375 -1.90625 L 2.90625 -1.90625 C 3 -1.90625 3.015625 -1.90625 3.03125 -1.9375 C 3.0625 -1.953125 3.078125 -2.015625 3.078125 -2.046875 C 3.078125 -2.125 3 -2.125 2.921875 -2.125 L 2.390625 -2.125 C 2.453125 -2.5 2.546875 -3.125 2.609375 -3.1875 C 2.6875 -3.28125 2.765625 -3.3125 2.84375 -3.3125 C 2.875 -3.3125 2.984375 -3.3125 3.09375 -3.265625 C 2.890625 -3.171875 2.890625 -3 2.890625 -2.984375 C 2.890625 -2.859375 2.984375 -2.78125 3.109375 -2.78125 C 3.234375 -2.78125 3.421875 -2.890625 3.421875 -3.09375 Z M 3.421875 -3.09375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-1">
<path style="stroke:none;" d="M 3.265625 2.375 C 3.265625 2.34375 3.265625 2.328125 3.09375 2.15625 C 1.859375 0.90625 1.546875 -0.953125 1.546875 -2.46875 C 1.546875 -4.1875 1.921875 -5.90625 3.140625 -7.140625 C 3.265625 -7.265625 3.265625 -7.28125 3.265625 -7.3125 C 3.265625 -7.375 3.234375 -7.40625 3.171875 -7.40625 C 3.078125 -7.40625 2.1875 -6.734375 1.59375 -5.484375 C 1.09375 -4.390625 0.984375 -3.296875 0.984375 -2.46875 C 0.984375 -1.703125 1.09375 -0.5 1.625 0.609375 C 2.21875 1.828125 3.078125 2.46875 3.171875 2.46875 C 3.234375 2.46875 3.265625 2.4375 3.265625 2.375 Z M 3.265625 2.375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-2">
<path style="stroke:none;" d="M 3.5625 -1.265625 C 3.5625 -1.78125 3.265625 -2.078125 3.140625 -2.203125 C 2.8125 -2.515625 2.421875 -2.59375 2.015625 -2.671875 C 1.46875 -2.78125 0.796875 -2.90625 0.796875 -3.484375 C 0.796875 -3.828125 1.0625 -4.234375 1.90625 -4.234375 C 2.984375 -4.234375 3.046875 -3.34375 3.0625 -3.046875 C 3.078125 -2.953125 3.1875 -2.953125 3.1875 -2.953125 C 3.3125 -2.953125 3.3125 -3 3.3125 -3.1875 L 3.3125 -4.1875 C 3.3125 -4.359375 3.3125 -4.421875 3.203125 -4.421875 C 3.15625 -4.421875 3.125 -4.421875 3 -4.3125 C 2.96875 -4.265625 2.875 -4.171875 2.828125 -4.140625 C 2.453125 -4.421875 2.046875 -4.421875 1.90625 -4.421875 C 0.703125 -4.421875 0.328125 -3.765625 0.328125 -3.203125 C 0.328125 -2.859375 0.484375 -2.59375 0.75 -2.375 C 1.0625 -2.109375 1.34375 -2.046875 2.046875 -1.921875 C 2.265625 -1.875 3.078125 -1.71875 3.078125 -1 C 3.078125 -0.5 2.734375 -0.109375 1.96875 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.640625 0.546875 -1.671875 0.453125 -1.671875 C 0.328125 -1.671875 0.328125 -1.609375 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.875 -0.3125 C 1.3125 0.09375 1.75 0.109375 1.96875 0.109375 C 3.09375 0.109375 3.5625 -0.546875 3.5625 -1.265625 Z M 3.5625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-3">
<path style="stroke:none;" d="M 5.28125 0 L 5.28125 -0.3125 C 4.59375 -0.3125 4.515625 -0.375 4.515625 -0.859375 L 4.515625 -4.359375 L 3.0625 -4.25 L 3.0625 -3.953125 C 3.75 -3.953125 3.828125 -3.875 3.828125 -3.390625 L 3.828125 -1.640625 C 3.828125 -0.78125 3.359375 -0.109375 2.640625 -0.109375 C 1.8125 -0.109375 1.765625 -0.578125 1.765625 -1.09375 L 1.765625 -4.359375 L 0.3125 -4.25 L 0.3125 -3.953125 C 1.09375 -3.953125 1.09375 -3.921875 1.09375 -3.046875 L 1.09375 -1.5625 C 1.09375 -0.796875 1.09375 0.109375 2.59375 0.109375 C 3.140625 0.109375 3.578125 -0.171875 3.859375 -0.78125 L 3.859375 0.109375 Z M 5.28125 0 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-4">
<path style="stroke:none;" d="M 3.59375 -3.765625 C 3.59375 -4.078125 3.28125 -4.359375 2.859375 -4.359375 C 2.140625 -4.359375 1.78125 -3.703125 1.65625 -3.28125 L 1.65625 -4.359375 L 0.28125 -4.25 L 0.28125 -3.953125 C 0.96875 -3.953125 1.046875 -3.875 1.046875 -3.390625 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.796875 -0.03125 2.265625 -0.03125 2.65625 0 L 2.65625 -0.3125 L 2.453125 -0.3125 C 1.71875 -0.3125 1.703125 -0.421875 1.703125 -0.765625 L 1.703125 -2.296875 C 1.703125 -3.265625 2.109375 -4.140625 2.859375 -4.140625 C 2.9375 -4.140625 2.953125 -4.140625 2.96875 -4.140625 C 2.9375 -4.125 2.75 -4.015625 2.75 -3.75 C 2.75 -3.46875 2.953125 -3.328125 3.171875 -3.328125 C 3.34375 -3.328125 3.59375 -3.453125 3.59375 -3.765625 Z M 3.59375 -3.765625 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-5">
<path style="stroke:none;" d="M 2.4375 0 L 2.4375 -0.3125 C 1.78125 -0.3125 1.75 -0.359375 1.75 -0.734375 L 1.75 -4.359375 L 0.359375 -4.25 L 0.359375 -3.953125 C 1 -3.953125 1.09375 -3.890625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.328125 -0.3125 L 0.328125 0 L 1.40625 -0.03125 C 1.75 -0.03125 2.109375 -0.015625 2.4375 0 Z M 1.890625 -5.96875 C 1.890625 -6.234375 1.671875 -6.484375 1.375 -6.484375 C 1.03125 -6.484375 0.84375 -6.21875 0.84375 -5.96875 C 0.84375 -5.703125 1.0625 -5.4375 1.359375 -5.4375 C 1.703125 -5.4375 1.890625 -5.71875 1.890625 -5.96875 Z M 1.890625 -5.96875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-6">
<path style="stroke:none;" d="M 4.09375 -1.171875 C 4.09375 -1.28125 4.015625 -1.296875 3.96875 -1.296875 C 3.875 -1.296875 3.859375 -1.234375 3.84375 -1.15625 C 3.5 -0.140625 2.609375 -0.140625 2.515625 -0.140625 C 2.015625 -0.140625 1.625 -0.4375 1.390625 -0.796875 C 1.09375 -1.28125 1.09375 -1.921875 1.09375 -2.28125 L 3.84375 -2.28125 C 4.0625 -2.28125 4.09375 -2.28125 4.09375 -2.484375 C 4.09375 -3.46875 3.5625 -4.421875 2.328125 -4.421875 C 1.1875 -4.421875 0.28125 -3.40625 0.28125 -2.171875 C 0.28125 -0.84375 1.3125 0.109375 2.453125 0.109375 C 3.65625 0.109375 4.09375 -0.984375 4.09375 -1.171875 Z M 3.453125 -2.484375 L 1.109375 -2.484375 C 1.171875 -3.953125 2 -4.203125 2.328125 -4.203125 C 3.34375 -4.203125 3.453125 -2.875 3.453125 -2.484375 Z M 3.453125 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-7">
<path style="stroke:none;" d="M 3.28125 -1.21875 L 3.28125 -1.78125 L 3.03125 -1.78125 L 3.03125 -1.25 C 3.03125 -0.515625 2.734375 -0.140625 2.375 -0.140625 C 1.703125 -0.140625 1.703125 -1.03125 1.703125 -1.203125 L 1.703125 -3.953125 L 3.125 -3.953125 L 3.125 -4.25 L 1.703125 -4.25 L 1.703125 -6.078125 L 1.46875 -6.078125 C 1.453125 -5.265625 1.15625 -4.203125 0.1875 -4.171875 L 0.1875 -3.953125 L 1.03125 -3.953125 L 1.03125 -1.21875 C 1.03125 -0.015625 1.953125 0.109375 2.296875 0.109375 C 3 0.109375 3.28125 -0.59375 3.28125 -1.21875 Z M 3.28125 -1.21875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-8">
<path style="stroke:none;" d="M 5.015625 -3.953125 L 5.015625 -4.25 C 4.796875 -4.234375 4.5 -4.21875 4.28125 -4.21875 L 3.421875 -4.25 L 3.421875 -3.953125 C 3.78125 -3.9375 3.890625 -3.71875 3.890625 -3.53125 C 3.890625 -3.4375 3.875 -3.390625 3.828125 -3.28125 L 2.828125 -0.765625 L 1.71875 -3.53125 C 1.65625 -3.65625 1.65625 -3.6875 1.65625 -3.6875 C 1.65625 -3.953125 2.046875 -3.953125 2.21875 -3.953125 L 2.21875 -4.25 L 1.140625 -4.21875 C 0.875 -4.21875 0.484375 -4.234375 0.1875 -4.25 L 0.1875 -3.953125 C 0.8125 -3.953125 0.84375 -3.890625 0.984375 -3.578125 L 2.40625 -0.078125 C 2.453125 0.0625 2.484375 0.109375 2.609375 0.109375 C 2.734375 0.109375 2.78125 0.015625 2.8125 -0.078125 L 4.109375 -3.28125 C 4.203125 -3.515625 4.359375 -3.9375 5.015625 -3.953125 Z M 5.015625 -3.953125 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-9">
<path style="stroke:none;" d="M 4.765625 -0.875 L 4.765625 -1.4375 L 4.515625 -1.4375 L 4.515625 -0.875 C 4.515625 -0.3125 4.28125 -0.25 4.171875 -0.25 C 3.84375 -0.25 3.796875 -0.6875 3.796875 -0.734375 L 3.796875 -2.71875 C 3.796875 -3.125 3.796875 -3.515625 3.453125 -3.875 C 3.0625 -4.265625 2.5625 -4.421875 2.09375 -4.421875 C 1.28125 -4.421875 0.609375 -3.953125 0.609375 -3.3125 C 0.609375 -3.015625 0.796875 -2.84375 1.0625 -2.84375 C 1.328125 -2.84375 1.515625 -3.046875 1.515625 -3.296875 C 1.515625 -3.421875 1.46875 -3.75 1 -3.75 C 1.28125 -4.09375 1.75 -4.203125 2.078125 -4.203125 C 2.5625 -4.203125 3.125 -3.828125 3.125 -2.9375 L 3.125 -2.578125 C 2.609375 -2.546875 1.921875 -2.515625 1.296875 -2.21875 C 0.5625 -1.890625 0.3125 -1.375 0.3125 -0.9375 C 0.3125 -0.140625 1.28125 0.109375 1.890625 0.109375 C 2.546875 0.109375 3 -0.28125 3.1875 -0.75 C 3.234375 -0.359375 3.5 0.0625 3.953125 0.0625 C 4.171875 0.0625 4.765625 -0.078125 4.765625 -0.875 Z M 3.125 -1.375 C 3.125 -0.4375 2.40625 -0.109375 1.96875 -0.109375 C 1.484375 -0.109375 1.078125 -0.453125 1.078125 -0.953125 C 1.078125 -1.484375 1.484375 -2.3125 3.125 -2.375 Z M 3.125 -1.375 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-10">
<path style="stroke:none;" d="M 2.859375 -2.46875 C 2.859375 -3.234375 2.75 -4.4375 2.203125 -5.546875 C 1.609375 -6.765625 0.765625 -7.40625 0.65625 -7.40625 C 0.609375 -7.40625 0.5625 -7.359375 0.5625 -7.3125 C 0.5625 -7.28125 0.5625 -7.265625 0.75 -7.078125 C 1.71875 -6.109375 2.28125 -4.53125 2.28125 -2.46875 C 2.28125 -0.78125 1.921875 0.953125 0.6875 2.203125 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.421875 0.609375 2.46875 0.65625 2.46875 C 0.765625 2.46875 1.65625 1.796875 2.234375 0.546875 C 2.734375 -0.546875 2.859375 -1.640625 2.859375 -2.46875 Z M 2.859375 -2.46875 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-11">
<path style="stroke:none;" d="M 5.28125 0 L 5.28125 -0.3125 C 4.765625 -0.3125 4.515625 -0.3125 4.515625 -0.609375 L 4.515625 -2.484375 C 4.515625 -3.34375 4.515625 -3.640625 4.203125 -4 C 4.0625 -4.171875 3.75 -4.359375 3.171875 -4.359375 C 2.453125 -4.359375 1.984375 -3.9375 1.703125 -3.328125 L 1.703125 -4.359375 L 0.3125 -4.25 L 0.3125 -3.953125 C 1 -3.953125 1.09375 -3.875 1.09375 -3.390625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.53125 0 L 2.53125 -0.3125 C 1.875 -0.3125 1.765625 -0.3125 1.765625 -0.75 L 1.765625 -2.5625 C 1.765625 -3.59375 2.46875 -4.140625 3.09375 -4.140625 C 3.71875 -4.140625 3.828125 -3.609375 3.828125 -3.046875 L 3.828125 -0.75 C 3.828125 -0.3125 3.71875 -0.3125 3.0625 -0.3125 L 3.0625 0 L 4.171875 -0.03125 Z M 5.28125 0 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph4-12">
<path style="stroke:none;" d="M 5.140625 -2.140625 C 5.140625 -3.390625 4.171875 -4.359375 3.046875 -4.359375 C 2.28125 -4.359375 1.859375 -3.90625 1.703125 -3.71875 L 1.703125 -6.859375 L 0.28125 -6.75 L 0.28125 -6.4375 C 0.96875 -6.4375 1.046875 -6.375 1.046875 -5.890625 L 1.046875 0 L 1.296875 0 L 1.65625 -0.609375 C 1.796875 -0.390625 2.21875 0.109375 2.9375 0.109375 C 4.125 0.109375 5.140625 -0.859375 5.140625 -2.140625 Z M 4.328125 -2.140625 C 4.328125 -1.78125 4.3125 -1.1875 4.015625 -0.734375 C 3.8125 -0.4375 3.4375 -0.109375 2.90625 -0.109375 C 2.453125 -0.109375 2.109375 -0.34375 1.859375 -0.71875 C 1.734375 -0.921875 1.734375 -0.953125 1.734375 -1.125 L 1.734375 -3.15625 C 1.734375 -3.34375 1.734375 -3.359375 1.84375 -3.515625 C 2.21875 -4.0625 2.765625 -4.140625 3 -4.140625 C 3.453125 -4.140625 3.796875 -3.890625 4.03125 -3.515625 C 4.296875 -3.109375 4.328125 -2.546875 4.328125 -2.140625 Z M 4.328125 -2.140625 "/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="algebra_lez05b_d3-glyph5-1">
<path style="stroke:none;" d="M 3.4375 -1.09375 C 3.4375 -1.21875 3.34375 -1.265625 3.296875 -1.28125 L 2.234375 -1.71875 L 3.265625 -2.171875 C 3.359375 -2.203125 3.4375 -2.25 3.4375 -2.375 C 3.4375 -2.46875 3.34375 -2.59375 3.21875 -2.59375 C 3.15625 -2.59375 3.140625 -2.578125 3.078125 -2.53125 L 2.125 -1.890625 L 2.21875 -2.9375 L 2.234375 -3.03125 C 2.234375 -3.109375 2.15625 -3.21875 2.015625 -3.21875 C 1.875 -3.21875 1.8125 -3.109375 1.8125 -3.03125 L 1.921875 -1.890625 L 0.96875 -2.53125 C 0.890625 -2.578125 0.84375 -2.59375 0.828125 -2.59375 C 0.6875 -2.59375 0.609375 -2.46875 0.609375 -2.375 C 0.609375 -2.25 0.6875 -2.203125 0.78125 -2.171875 L 1.8125 -1.734375 L 0.78125 -1.28125 C 0.6875 -1.25 0.609375 -1.21875 0.609375 -1.09375 C 0.609375 -0.984375 0.6875 -0.859375 0.828125 -0.859375 C 0.875 -0.859375 0.90625 -0.875 0.96875 -0.921875 L 1.921875 -1.5625 L 1.8125 -0.421875 C 1.8125 -0.34375 1.875 -0.234375 2.015625 -0.234375 C 2.15625 -0.234375 2.234375 -0.34375 2.234375 -0.421875 C 2.234375 -0.46875 2.125 -1.53125 2.125 -1.5625 L 2.96875 -0.984375 C 3.15625 -0.859375 3.171875 -0.859375 3.21875 -0.859375 C 3.34375 -0.859375 3.4375 -0.984375 3.4375 -1.09375 Z M 3.4375 -1.09375 "/>
</symbol>
</g>
</defs>
<g id="algebra_lez05b_d3-surface1">
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-1" x="73.019084" y="22.8876"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-2" x="185.146014" y="22.8876"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-1" x="65.53761" y="78.012163"/>
  <use xlink:href="#algebra_lez05b_d3-glyph0-3" x="72.945667" y="78.012163"/>
  <use xlink:href="#algebra_lez05b_d3-glyph0-4" x="77.884372" y="78.012163"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph1-1" x="82.788822" y="79.493388"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph2-1" x="176.413332" y="78.190624"/>
  <use xlink:href="#algebra_lez05b_d3-glyph2-2" x="179.980064" y="78.190624"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph2-3" x="188.280052" y="78.190624"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-5" x="192.125815" y="78.190624"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph2-4" x="198.024937" y="78.190624"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 7.256886 56.693997 L 105.440203 56.693997 " transform="matrix(0.991449,0,0,-0.991449,76.723137,75.720924)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071089 2.391921 C -1.692854 0.957783 -0.849707 0.280113 0.00132015 0.000377144 C -0.849707 -0.279359 -1.692854 -0.957028 -2.071089 -2.391167 " transform="matrix(0.991449,0,0,-0.991449,181.459629,19.512093)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-5" x="129.837042" y="14.10237"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000484793 49.771522 L -0.000484793 9.079816 " transform="matrix(0.991449,0,0,-0.991449,76.723137,75.720924)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070958 2.391059 C -1.692724 0.956921 -0.849576 0.279251 0.00145091 -0.000484793 C -0.849576 -0.280221 -1.692724 -0.95789 -2.070958 -2.392029 " transform="matrix(0,0.991449,0.991449,0,76.723137,66.91653)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-6" x="7.855108" y="48.704931"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph1-2" x="12.82425" y="50.186156"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph3-1" x="16.894148" y="51.234117"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph4-1" x="25.135072" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-2" x="28.976397" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-3" x="32.873035" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-4" x="38.360924" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="42.229905" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-6" x="44.973849" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-7" x="49.364358" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-7" x="53.205682" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="57.047007" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-8" x="59.790951" y="48.704931"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph4-9" x="64.451113" y="48.704931"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-10" x="69.389818" y="48.704931"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 113.387063 8.500645 L 113.387063 49.369648 " transform="matrix(0.991449,0,0,-0.991449,76.723137,75.720924)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072424 2.391721 C -1.69419 0.957582 -0.851042 0.279913 -0.0000153012 0.000176807 C -0.851042 -0.279559 -1.69419 -0.957229 -2.072424 -2.391367 " transform="matrix(0,-0.991449,-0.991449,0,189.1408,26.574204)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-7" x="192.629471" y="49.126297"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph1-1" x="196.697386" y="50.607522"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph4-1" x="205.109831" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="208.951156" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-11" x="211.6951" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="217.182989" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-6" x="219.926933" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-7" x="224.317442" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-7" x="228.158766" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="232.000091" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-8" x="234.744035" y="49.126297"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph4-9" x="239.404197" y="49.126297"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-10" x="244.342902" y="49.126297"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 14.801872 -0.00174682 L 96.634436 -0.00174682 " transform="matrix(0.991449,0,0,-0.991449,76.723137,75.720924)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072766 2.389797 C -1.694531 0.955659 -0.851384 0.277989 -0.000356837 -0.00174682 C -0.851384 -0.277543 -1.694531 -0.955212 -2.072766 -2.389351 " transform="matrix(0.991449,0,0,-0.991449,172.726916,75.720924)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph0-5" x="102.264846" y="86.618932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph5-1" x="107.100142" y="88.100156"/>
  <use xlink:href="#algebra_lez05b_d3-glyph5-1" x="111.147004" y="88.100156"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph4-1" x="118.980675" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-12" x="122.822" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="128.309889" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="131.053833" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-6" x="133.797777" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-7" x="138.188286" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-7" x="142.029611" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-5" x="145.870935" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-8" x="148.61488" y="86.618932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#algebra_lez05b_d3-glyph4-9" x="153.275041" y="86.618932"/>
  <use xlink:href="#algebra_lez05b_d3-glyph4-10" x="158.213746" y="86.618932"/>
</g>
</g>
</svg></figure>
<p><strong>Da ricordare.</strong> Vale la pena memorizzare lo schema del teorema, perché ritornerà in forme analoghe per le strutture algebriche (gruppi, anelli, spazi vettoriali): in tutti quei casi il quoziente rispetto alla relazione "avere la stessa immagine" è in corrispondenza biunivoca con l'immagine. La versione insiemistica appena dimostrata è il prototipo di tutti quei risultati.</p>`
      },

      {
        id: "s05-esempio-valore-assoluto",
        type: "section",
        title: "Esempio: la funzione valore assoluto",
        icon: "📏",
        content: `<p>Adottiamo la convenzione $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$ (i naturali comprendono lo zero): questa convenzione è necessaria perché $v(0) = 0$, e dunque $0 \\in \\mathrm{Im}(v)$.</p>
<p>Consideriamo la funzione valore assoluto $v: \\mathbb{Z} \\to \\mathbb{Q}$ definita da $v(z) = |z|$.</p>
<ul>
  <li><strong>Iniettività e suriettività</strong>: la funzione non è iniettiva, poiché ad esempio $v(2) = v(-2) = 2$. Non è neanche suriettiva, poiché l'immagine è $\\mathrm{Im}(v) = \\mathbb{N} \\subset \\mathbb{Q}$.</li>
  <li><strong>Relazione di equivalenza $\\eta_v$</strong>:
  $$z \\, \\eta_v \\, z' \\iff |z| = |z'| \\iff z = \\pm z'$$</li>
  <li><strong>Insieme quoziente $\\mathbb{Z}/\\eta_v$</strong>: le classi di equivalenza sono
  <p>$$[0]_{\\eta_v} = \\{0\\}, \\quad [z]_{\\eta_v} = \\{z, -z\\} \\text{ per } z \\neq 0$$</p>
  L'insieme quoziente può essere messo in corrispondenza biunivoca con i numeri naturali:
  $$\\mathbb{Z}/\\eta_v = \\{[0], [1], [2], \\dots \\}$$</li>
</ul>`,
        subsections: [
          {
            subtitle: "La decomposizione in tre pezzi",
            content: `<ol>
  <li>La proiezione canonica $p_{\\eta_v}: \\mathbb{Z} \\to \\mathbb{Z}/\\eta_v$ manda $z$ in $[z]_{\\eta_v}$. È <strong>suriettiva</strong>.</li>
  <li>La funzione $v_{**}: \\mathbb{Z}/\\eta_v \\to \\mathbb{N}$ è definita da $v_{**}([z]_{\\eta_v}) = |z|$. Ad esempio, $v_{**}([3]) = 3$. È <strong>biiettiva</strong> (il codominio è $\\mathbb{N} = \\{0,1,2,\\dots\\}$, coerentemente con il fatto che $0 \\in \\mathrm{Im}(v)$).</li>
  <li>L'inclusione $j_v: \\mathbb{N} \\to \\mathbb{Q}$ è definita da $j_v(n) = n$. È <strong>iniettiva</strong>.</li>
</ol>
<p>Si verifica direttamente l'identità del teorema: per ogni $z \\in \\mathbb{Z}$,</p>
<p>$$(j_v \\circ v_{**} \\circ p_{\\eta_v})(z) = j_v\\big(v_{**}([z]_{\\eta_v})\\big) = j_v(|z|) = |z| = v(z)$$</p>`
          }
        ]
      },

      {
        id: "s05-zn",
        type: "section",
        title: "Aritmetica modulare: l'insieme quoziente $\\mathbb{Z}_n$",
        icon: "🔁",
        content: `<p>Torniamo all'esempio della congruenza modulo $n$. L'insieme quoziente $\\mathbb{Z}/\\equiv_n$ è di fondamentale importanza in algebra.</p>`,
        subsections: [
          {
            subtitle: "Definizione (Classi di resto modulo n)",
            content: `<p>L'insieme delle classi di resto modulo $n$ (con $n \\gt 0$), denotato con $\\mathbb{Z}_n$, è l'insieme quoziente di $\\mathbb{Z}$ rispetto alla relazione di congruenza modulo $n$:</p>
<p>$$\\mathbb{Z}_n = \\mathbb{Z}/\\equiv_n = \\{[0]_n, [1]_n, \\dots, [n-1]_n\\}$$</p>
<p>Ogni intero appartiene a una e una sola di queste $n$ classi.</p>`
          },
          {
            subtitle: "Come sono fatte le classi",
            content: `<p>Per ogni intero $a$ (positivo, negativo o nullo) si ha</p>
<p>$$[a]_n = \\{x \\in \\mathbb{Z} : n \\text{ divide } (x - a)\\} = \\{a + kn : k \\in \\mathbb{Z}\\}$$</p>
<p>cioè la classe di $a$ è l'insieme degli interi che differiscono da $a$ per un multiplo di $n$.</p>
<p>Se inoltre $0 \\le a \\lt n$, allora $a$ è proprio il resto della divisione di se stesso per $n$ e in questo caso $[a]_n$ è precisamente l'insieme degli interi che, divisi per $n$, danno resto $a$. <strong>La restrizione $0 \\le a \\lt n$ è essenziale</strong>: ad esempio $[7]_5 = [2]_5$, e il resto della divisione di $7$ per $5$ è $2$, non $7$. Per questo nella scrittura $\\mathbb{Z}_n = \\{[0]_n, \\dots, [n-1]_n\\}$ scegliamo come rappresentanti proprio i possibili resti $0, 1, \\dots, n-1$.</p>`
          }
        ]
      },

      {
        id: "s05-operazioni-zn",
        type: "section",
        title: "Operazioni in $\\mathbb{Z}_n$ e buona definizione",
        icon: "➕",
        content: `<p>La cosa straordinaria è che possiamo definire operazioni di somma e prodotto su $\\mathbb{Z}_n$ in modo naturale.</p>
<p><strong>Definizione.</strong> Date due classi $[a]_n, [b]_n \\in \\mathbb{Z}_n$, definiamo:</p>
<ul>
  <li><strong>Somma</strong>: $[a]_n + [b]_n = [a+b]_n$</li>
  <li><strong>Prodotto</strong>: $[a]_n \\cdot [b]_n = [a \\cdot b]_n$</li>
</ul>`,
        subsections: [
          {
            subtitle: "Proposizione (Buona definizione delle operazioni)",
            content: `<p><strong>Enunciato.</strong> Le operazioni di somma e prodotto in $\\mathbb{Z}_n$ sono ben definite, cioè il risultato non dipende dalla scelta dei rappresentanti delle classi.</p>
<p><strong>Dimostrazione.</strong> Dobbiamo mostrare che se $[a]_n = [a']_n$ e $[b]_n = [b']_n$, allora $[a+b]_n = [a'+b']_n$ e $[a \\cdot b]_n = [a' \\cdot b']_n$.</p>
<p>L'ipotesi $[a]_n = [a']_n$ significa che $a \\equiv_n a'$, cioè $a - a' = k \\cdot n$ per un $k \\in \\mathbb{Z}$. Quindi $a = a' + kn$. Analogamente, $[b]_n = [b']_n$ significa $b = b' + ln$ per un $l \\in \\mathbb{Z}$.</p>
<p><strong>Somma:</strong></p>
<p>$$\\begin{aligned}
a+b &= (a' + kn) + (b' + ln) \\\\
    &= (a' + b') + (k+l)n
\\end{aligned}$$</p>
<p>Questo implica che $(a+b) - (a'+b')$ è un multiplo di $n$, quindi $a+b \\equiv_n a'+b'$, ovvero $[a+b]_n = [a'+b']_n$. La somma è ben definita.</p>
<p><strong>Prodotto:</strong></p>
<p>$$\\begin{aligned}
a \\cdot b &= (a' + kn) \\cdot (b' + ln) \\\\
        &= a'b' + a'ln + b'kn + kln^2 \\\\
        &= a'b' + n(a'l + b'k + kln)
\\end{aligned}$$</p>
<p>Questo implica che $a \\cdot b - a'b'$ è un multiplo di $n$, quindi $a \\cdot b \\equiv_n a'b'$, ovvero $[a \\cdot b]_n = [a' \\cdot b']_n$. Il prodotto è ben definito. $\\square$</p>`
          },
          {
            subtitle: "Che cosa significa «anello commutativo con unità»",
            content: `<p>L'insieme $\\mathbb{Z}_n$ dotato di queste due operazioni, $(\\mathbb{Z}_n, +, \\cdot)$, forma una struttura algebrica chiamata <strong>anello commutativo con unità</strong>. Il nome riassume le proprietà che si verificano direttamente a partire dalle analoghe proprietà in $\\mathbb{Z}$:</p>
<ul>
  <li><em>anello</em>: la somma è associativa, commutativa, ha elemento neutro $[0]_n$ e ogni classe ha un opposto ($-[a]_n = [-a]_n$); il prodotto è associativo e distribuisce rispetto alla somma;</li>
  <li><em>commutativo</em>: $[a]_n \\cdot [b]_n = [b]_n \\cdot [a]_n$ per ogni coppia di classi;</li>
  <li><em>con unità</em>: esiste l'elemento neutro del prodotto, cioè $[1]_n$, per cui $[1]_n \\cdot [a]_n = [a]_n$.</li>
</ul>
<p>Si noti che negli assiomi di anello <strong>non</strong> si richiede che le classi non nulle abbiano un inverso rispetto al prodotto: questa è esattamente la questione che studieremo nel prossimo paragrafo.</p>`
          }
        ],
        formulas: [
          { label: "Somma di classi", latex: "[a]_n + [b]_n = [a+b]_n" },
          { label: "Prodotto di classi", latex: "[a]_n \\cdot [b]_n = [a \\cdot b]_n" }
        ]
      },

      {
        id: "s05-inverso-moltiplicativo",
        type: "section",
        title: "Inverso moltiplicativo e tavole di $\\mathbb{Z}_5$",
        icon: "🔑",
        content: `<p><strong>Definizione (Inverso moltiplicativo).</strong> Sia $[a]_n \\in \\mathbb{Z}_n$. Diciamo che $[a]_n$ è <strong>invertibile</strong> (o che ammette <strong>inverso moltiplicativo</strong>) se esiste una classe $[b]_n \\in \\mathbb{Z}_n$ tale che</p>
<p>$$[a]_n \\cdot [b]_n = [1]_n$$</p>
<p>In tal caso tale classe $[b]_n$ è unica e si scrive $[a]_n^{-1} = [b]_n$.</p>
<p>Ad esempio, nella tavola di $\\mathbb{Z}_5$ che vediamo qui sotto si legge $[2]_5 \\cdot [3]_5 = [6]_5 = [1]_5$: dunque $[2]_5$ è invertibile e $[2]_5^{-1} = [3]_5$. <strong>Operativamente, cercare l'inverso di una classe significa cercare il valore $[1]$ nella riga corrispondente della tavola di moltiplicazione.</strong></p>`,
        subsections: [
          {
            subtitle: "Tavole di $\\mathbb{Z}_5$",
            content: `<p>Costruiamo le tavole di addizione e moltiplicazione per $\\mathbb{Z}_5$. Gli elementi sono $\\{[0], [1], [2], [3], [4]\\}$.</p>
<p><strong>Addizione in $\\mathbb{Z}_5$</strong></p>
<table style="border-collapse: collapse; margin: 12px 0;">
<thead><tr>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$+$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[0]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[1]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[2]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[3]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[4]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td></tr>
</tbody>
</table>
<p><strong>Moltiplicazione in $\\mathbb{Z}_5$</strong></p>
<table style="border-collapse: collapse; margin: 12px 0;">
<thead><tr>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$\\cdot$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[0]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[1]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[2]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[3]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[4]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td></tr>
</tbody>
</table>
<p>Applicando la definizione di inverso ($[a]\\cdot[b] = [1]$) alla tavola di moltiplicazione, notiamo che in $\\mathbb{Z}_5$ <strong>ogni elemento non nullo ha un inverso moltiplicativo</strong>: $[1]^{-1}=[1]$ (perché $[1][1]=[1]$), $[2]^{-1}=[3]$ (perché $[2][3]=[6]=[1]$), $[3]^{-1}=[2]$, $[4]^{-1}=[4]$ (perché $[4][4]=[16]=[1]$). In ogni riga non nulla della tavola compare il valore $[1]$.</p>`
          }
        ]
      },

      {
        id: "s05-divisori-zero",
        type: "section",
        title: "Divisori dello zero",
        icon: "🚫",
        content: `<p><strong>Definizione (Divisore dello zero).</strong> In un anello commutativo con unità, un elemento $x \\neq 0$ si dice <strong>divisore dello zero</strong> se esiste un elemento $y \\neq 0$ tale che $x \\cdot y = 0$.</p>`,
        subsections: [
          {
            subtitle: "Esempio: i divisori dello zero in $\\mathbb{Z}_6$",
            content: `<p>La situazione è diversa da $\\mathbb{Z}_5$. Consideriamo la tavola di moltiplicazione di $\\mathbb{Z}_6$:</p>
<table style="border-collapse: collapse; margin: 12px 0;">
<thead><tr>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$\\cdot$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</th>
<th style="border:1px solid var(--border-light); padding:4px 10px;">$[5]$</th>
</tr></thead>
<tbody>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[0]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[1]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[5]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[2]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[3]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[4]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td></tr>
<tr><td style="border:1px solid var(--border-light); padding:4px 10px;"><strong>$[5]$</strong></td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[0]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[5]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[4]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[3]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[2]$</td><td style="border:1px solid var(--border-light); padding:4px 10px;">$[1]$</td></tr>
</tbody>
</table>
<p>In $\\mathbb{Z}_6$ ci sono elementi non nulli il cui prodotto è nullo, ad esempio $[2] \\cdot [3] = [0]$ e $[4] \\cdot [3] = [0]$. Nella tavola si riconoscono subito: sono gli elementi non nulli nella cui riga compare lo $[0]$ al di fuori della colonna di $[0]$. In $\\mathbb{Z}_6$ i divisori dello zero sono $[2]$, $[3]$ e $[4]$, mentre $[1]$ e $[5]$ non lo sono.</p>`
          },
          {
            subtitle: "Proposizione: un divisore dello zero non è invertibile",
            content: `<p><strong>Enunciato.</strong> In un anello commutativo con unità, se $x$ è un divisore dello zero allora $x$ non ammette inverso moltiplicativo.</p>
<p><strong>Dimostrazione.</strong> Sia $x$ un divisore dello zero: esiste quindi $y \\neq 0$ con $xy = 0$. Supponiamo per assurdo che $x$ sia invertibile, cioè che esista $x^{-1}$ con $x^{-1}x = 1$. Allora</p>
<p>$$y = 1 \\cdot y = (x^{-1} x) y = x^{-1} (x y) = x^{-1} \\cdot 0 = 0$$</p>
<p>dove abbiamo usato l'associatività del prodotto. Ma questo contraddice l'ipotesi $y \\neq 0$. Dunque $x$ non può essere invertibile. $\\square$</p>`
          }
        ],
        extra_content: `<p><strong>Conseguenza concreta.</strong> Questa proposizione spiega perché nella tavola di $\\mathbb{Z}_6$ le righe di $[2]$, $[3]$ e $[4]$ non contengono mai $[1]$: ciascuno di questi elementi è un divisore dello zero, quindi è necessariamente non invertibile. Al contrario $[5]$, che non è divisore dello zero, risulta invertibile con $[5]^{-1} = [5]$.</p>`
      },

      {
        id: "s05-criterio-invertibilita",
        type: "section",
        title: "Criterio di invertibilità in $\\mathbb{Z}_n$",
        icon: "🧰",
        content: `<p><strong>Teorema (Criterio di invertibilità in $\\mathbb{Z}_n$).</strong> Un elemento $[a]_n \\in \\mathbb{Z}_n$ ammette un inverso moltiplicativo se e solo se il massimo comun divisore tra $a$ e $n$ è 1, cioè $\\mathrm{MCD}(a,n) = 1$.</p>
<p>La dimostrazione completa di questo risultato verrà presentata nelle lezioni successive: essa si basa sull'identità di Bézout, che permette di scrivere $\\mathrm{MCD}(a,n) = \\alpha a + \\beta n$ per opportuni interi $\\alpha, \\beta$. Per il momento ci limitiamo a usare il criterio come strumento di calcolo.</p>`,
        subsections: [
          {
            subtitle: "Uso del criterio in $\\mathbb{Z}_6$ e in $\\mathbb{Z}_5$",
            content: `<p>Vediamo come il criterio permette di decidere l'invertibilità <em>senza</em> costruire tutta la tavola.</p>
<ul>
  <li>Prendiamo $[5]_6$. Si ha $\\mathrm{MCD}(5,6) = 1$, quindi $[5]_6$ è invertibile. In effetti, cercando nella riga di $[5]$ della tavola, $[5]_6 \\cdot [5]_6 = [25]_6 = [1]_6$, cioè $[5]_6^{-1} = [5]_6$.</li>
  <li>Prendiamo $[2]_6$. Si ha $\\mathrm{MCD}(2,6) = 2 \\neq 1$, quindi $[2]_6$ non è invertibile: nessuna classe $[b]_6$ soddisfa $[2]_6[b]_6 = [1]_6$, come conferma la riga di $[2]$ nella tavola.</li>
  <li>Analogamente $\\mathrm{MCD}(3,6)=3$ e $\\mathrm{MCD}(4,6)=2$ escludono l'invertibilità di $[3]_6$ e $[4]_6$.</li>
</ul>
<p>In conclusione, gli elementi invertibili di $\\mathbb{Z}_6$ sono soltanto $[1]_6$ e $[5]_6$: esattamente i rappresentanti $a \\in \\{0,1,\\dots,5\\}$ con $\\mathrm{MCD}(a,6)=1$.</p>
<p>Ripetendo il conto in $\\mathbb{Z}_5$: $\\mathrm{MCD}(1,5)=\\mathrm{MCD}(2,5)=\\mathrm{MCD}(3,5)=\\mathrm{MCD}(4,5)=1$, quindi <em>tutte</em> le classi non nulle sono invertibili, in accordo con la tavola di moltiplicazione vista sopra.</p>`
          }
        ],
        formulas: [
          { label: "Criterio di invertibilità", latex: "[a]_n \\text{ invertibile} \\iff \\mathrm{MCD}(a,n) = 1" }
        ]
      },

      {
        id: "s05-campo",
        type: "section",
        title: "Quando $\\mathbb{Z}_n$ è un campo",
        icon: "🏛️",
        content: `<p><strong>Definizione (Campo).</strong> Un <strong>campo</strong> è un anello commutativo con unità in cui l'unità è distinta dallo zero, cioè $[1] \\neq [0]$, e in cui <strong>ogni elemento non nullo ammette inverso moltiplicativo</strong>. La condizione $[1] \\neq [0]$ fa parte della definizione e non va dimenticata.</p>
<p><strong>Corollario.</strong> Sia $n \\ge 2$. Allora $\\mathbb{Z}_n$ è un campo se e solo se $n$ è un numero primo.</p>`,
        subsections: [
          {
            subtitle: "Precisazioni sull'enunciato",
            content: `<p>L'enunciato è stato formulato per $n \\ge 2$: il caso $n = 1$, pur ammesso dalla condizione iniziale $n \\gt 0$, va trattato separatamente. Infatti $\\mathbb{Z}_1 = \\{[0]_1\\}$ ha un solo elemento, dunque $[1]_1 = [0]_1$: non ci sono elementi non nulli (e quindi nulla da invertire), ma $\\mathbb{Z}_1$ <strong>non</strong> è un campo perché viene a mancare la richiesta $[1] \\neq [0]$. Coerentemente, $1$ non è un numero primo.</p>
<p>Il corollario segue dal criterio di invertibilità: per $n \\ge 2$, tutte le classi non nulle $[a]_n$ con $1 \\le a \\le n-1$ sono invertibili se e solo se $\\mathrm{MCD}(a,n)=1$ per ogni tale $a$, cioè se e solo se $n$ non ha divisori $d$ con $1 \\lt d \\lt n$, ovvero $n$ è primo.</p>
<p>I due esempi visti lo illustrano: $5$ è primo e $\\mathbb{Z}_5$ è un campo; $6 = 2 \\cdot 3$ non è primo e in $\\mathbb{Z}_6$ le classi $[2]$, $[3]$, $[4]$ non sono invertibili, quindi $\\mathbb{Z}_6$ non è un campo.</p>`
          }
        ],
        table_compare: {
          headers: ["", "$\\mathbb{Z}_5$", "$\\mathbb{Z}_6$"],
          rows: [
            ["$n$ primo?", "sì", "no ($6 = 2\\cdot 3$)"],
            ["Invertibili", "$[1],[2],[3],[4]$ (tutti i non nulli)", "$[1],[5]$"],
            ["Divisori dello zero", "nessuno", "$[2],[3],[4]$"],
            ["È un campo?", "sì", "no"]
          ]
        }
      },

      {
        id: "s05-trappole",
        type: "alert_box",
        title: "Trappole d'esame",
        icon: "🚨",
        content: `<p><strong>1. Componenti non vuote.</strong> Nella definizione di partizione la non vuotezza delle componenti è un assioma, non un dettaglio: senza di essa la corrispondenza biunivoca della Proposizione 4.10 fallisce. È esattamente nel passaggio "scegliamo $x_0 \\in \\pi_k$" della dimostrazione di $X/\\eta_\\pi = \\pi$ che la si usa.</p>
<p><strong>2. $X/\\eta$ non è un sottoinsieme di $X$.</strong> Gli elementi di $X/\\eta$ sono <em>insiemi</em> di elementi di $X$. Confondere $[a]_\\eta$ con $a$ è l'errore più comune.</p>
<p><strong>3. Buona definizione.</strong> Ogni volta che si definisce qualcosa su un quoziente usando un rappresentante, bisogna <strong>verificare</strong> che il risultato non dipenda dal rappresentante. Vale per $f_*$, per $f_{**}$ e per le operazioni $+$ e $\\cdot$ in $\\mathbb{Z}_n$.</p>
<p><strong>4. Rappresentanti e resti.</strong> $[a]_n$ è "l'insieme degli interi con resto $a$" soltanto se $0 \\le a \\lt n$. Ad esempio $[7]_5 = [2]_5$ e il resto è $2$, non $7$.</p>
<p><strong>5. $n = 1$ e il campo.</strong> $\\mathbb{Z}_1$ ha un solo elemento e non è un campo, perché $[1]_1 = [0]_1$. Il corollario si enuncia per $n \\ge 2$.</p>
<p><strong>6. Senza transitività tutto crolla.</strong> Se una relazione è riflessiva e simmetrica ma non transitiva, gli insiemi $[x]$ ricoprono $X$ ma non sono a due a due disgiunti: non si ottiene una partizione.</p>`
      },

      {
        id: "s05-oral",
        type: "oral_box",
        title: "Domande tipiche all'orale",
        icon: "🎤",
        content: `<ul>
  <li>Enuncia e dimostra che l'insieme quoziente $X/\\eta$ è una partizione di $X$, indicando dove si usa ciascuna delle tre proprietà di $\\eta$.</li>
  <li>Enuncia la Proposizione 4.10 e spiega in quale punto della dimostrazione si usa la non vuotezza delle componenti.</li>
  <li>Dimostra la proprietà chiave $x_1 \\, \\eta \\, x_2 \\iff [x_1]_\\eta = [x_2]_\\eta$.</li>
  <li>Enuncia il teorema di decomposizione canonica e dimostra che $f_{**}$ è ben definita e biiettiva.</li>
  <li>Perché le relazioni di equivalenza su $X$ sono tutte e sole quelle indotte da una funzione che parte da $X$?</li>
  <li>Dimostra che le operazioni su $\\mathbb{Z}_n$ sono ben definite.</li>
  <li>Dimostra che un divisore dello zero non è invertibile. Perché quindi $\\mathbb{Z}_6$ non è un campo?</li>
</ul>`
      },

      {
        id: "s05-integrazione-esercizi",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧪",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s05-ex-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Sia $\\eta$ una relazione di equivalenza sull'insieme non vuoto $X$ e sia $[x]_\\eta = \\{y \\in X \\mid y\\,\\eta\\,x\\}$. Dimostrare che per ogni $x_1, x_2 \\in X$ vale $x_1\\,\\eta\\,x_2 \\iff [x_1]_\\eta = [x_2]_\\eta$, indicando per ciascuna implicazione quali proprietà di $\\eta$ vengono usate.</p>`,
        solution: `<p><strong>$(\\Rightarrow)$</strong> Sia $x_1\\,\\eta\\,x_2$. Se $y \\in [x_1]_\\eta$, cioè $y\\,\\eta\\,x_1$, dalla transitività applicata a $y\\,\\eta\\,x_1$ e $x_1\\,\\eta\\,x_2$ segue $y\\,\\eta\\,x_2$, ossia $y \\in [x_2]_\\eta$: dunque $[x_1]_\\eta \\subseteq [x_2]_\\eta$.</p>
<p>Per l'inclusione opposta, dalla simmetria si ha $x_2\\,\\eta\\,x_1$; se $y \\in [x_2]_\\eta$, cioè $y\\,\\eta\\,x_2$, per transitività da $y\\,\\eta\\,x_2$ e $x_2\\,\\eta\\,x_1$ segue $y\\,\\eta\\,x_1$, ossia $y \\in [x_1]_\\eta$. Quindi $[x_1]_\\eta = [x_2]_\\eta$. Qui si usano <strong>simmetria e transitività</strong>.</p>
<p><strong>$(\\Leftarrow)$</strong> Sia $[x_1]_\\eta = [x_2]_\\eta$. Per riflessività $x_1\\,\\eta\\,x_1$, dunque $x_1 \\in [x_1]_\\eta = [x_2]_\\eta$; per definizione di classe, $x_1 \\in [x_2]_\\eta$ significa esattamente $x_1\\,\\eta\\,x_2$. Qui si usa la <strong>riflessività</strong>.</p>
<p>In conclusione $x_1\\,\\eta\\,x_2 \\iff [x_1]_\\eta = [x_2]_\\eta$: è il "ponte" tra l'essere in relazione e lo stare nella stessa componente del quoziente.</p>`
      },

      {
        id: "s05-ex-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Sia $f: A \\to B$ una funzione. Definisci la relazione $\\eta_f$ indotta da $f$ su $A$, dimostra che è una relazione di equivalenza e descrivi le sue classi. Applica poi il tutto alla funzione $v: \\mathbb{Z} \\to \\mathbb{Q}$, $v(z) = |z|$.</p>`,
        solution: `<p>Si pone $a\\,\\eta_f\\,a' \\iff f(a) = f(a')$.</p>
<p><strong>Riflessività:</strong> per ogni $a \\in A$ vale $f(a) = f(a)$, quindi $a\\,\\eta_f\\,a$.</p>
<p><strong>Simmetria:</strong> se $f(a) = f(a')$, per la simmetria dell'uguaglianza $f(a') = f(a)$, cioè $a'\\,\\eta_f\\,a$.</p>
<p><strong>Transitività:</strong> se $f(a) = f(a')$ e $f(a') = f(a'')$, allora $f(a) = f(a'')$.</p>
<p>Dunque $\\eta_f$ è di equivalenza e la classe di $a$ è la fibra di $f$ sopra $f(a)$:</p>
<p>$$[a]_{\\eta_f} = \\{x \\in A : f(x) = f(a)\\}$$</p>
<p><strong>Caso $v(z) = |z|$.</strong> Adottiamo la convenzione $\\mathbb{N} = \\{0,1,2,\\dots\\}$. Si ha</p>
<p>$$z\\,\\eta_v\\,z' \\iff |z| = |z'| \\iff z' = \\pm z,$$</p>
<p>quindi $[0]_{\\eta_v} = \\{0\\}$ e $[z]_{\\eta_v} = \\{z, -z\\}$ per $z \\neq 0$. L'insieme quoziente è $\\mathbb{Z}/\\eta_v = \\{[n]_{\\eta_v} : n \\in \\mathbb{N}\\}$ ed è in corrispondenza biunivoca con $\\mathrm{Im}(v) = \\mathbb{N}$ tramite $[z]_{\\eta_v} \\mapsto |z|$.</p>`
      },

      {
        id: "s05-ex-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Sia $\\pi = \\{\\pi_j\\}_{j \\in I}$ una partizione dell'insieme non vuoto $X$ e sia $\\eta_\\pi$ definita da $x\\,\\eta_\\pi\\,x' \\iff \\exists j \\in I$ tale che $x \\in \\pi_j$ e $x' \\in \\pi_j$. Dimostrare che $\\eta_\\pi$ è una relazione di equivalenza, precisando per ciascuna delle tre proprietà quale richiesta della definizione di partizione viene usata.</p>`,
        solution: `<p><strong>Riflessività:</strong> sia $x \\in X$. Per la proprietà di ricoprimento esiste $j \\in I$ con $x \\in \\pi_j$; allora $x \\in \\pi_j$ e $x \\in \\pi_j$, cioè $x\\,\\eta_\\pi\\,x$. Si usa il <strong>ricoprimento</strong>.</p>
<p><strong>Simmetria:</strong> se $x\\,\\eta_\\pi\\,x'$ esiste $j$ con $x \\in \\pi_j$ e $x' \\in \\pi_j$; la condizione "$x \\in \\pi_j$ e $x' \\in \\pi_j$" è invariante per scambio di $x$ e $x'$, quindi $x'\\,\\eta_\\pi\\,x$. Si usa solo la forma simmetrica della definizione, <strong>nessuna proprietà specifica della partizione</strong>.</p>
<p><strong>Transitività:</strong> se $x\\,\\eta_\\pi\\,x'$ e $x'\\,\\eta_\\pi\\,x''$, esistono $j, k \\in I$ con $\\{x,x'\\} \\subseteq \\pi_j$ e $\\{x',x''\\} \\subseteq \\pi_k$. Allora $x' \\in \\pi_j \\cap \\pi_k$, dunque $\\pi_j \\cap \\pi_k \\neq \\emptyset$ e, poiché due componenti con intersezione non vuota coincidono, $\\pi_j = \\pi_k$. Quindi $x \\in \\pi_j$ e $x'' \\in \\pi_j$, cioè $x\\,\\eta_\\pi\\,x''$. Si usa la <strong>disgiunzione delle componenti distinte</strong>.</p>
<p>Si osservi che la richiesta di non vuotezza delle componenti non interviene in questa dimostrazione: essa serve invece per provare $X/\\eta_\\pi = \\pi$.</p>`
      },

      {
        id: "s05-ex-teoria-4",
        type: "esercizio",
        title: "Teoria 4",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enuncia il teorema di decomposizione canonica di una funzione $f: A \\to B$ e dimostra che la funzione indotta $f_{**}: A/\\eta_f \\to \\mathrm{Im}(f)$, $f_{**}([a]_{\\eta_f}) = f(a)$, è ben definita e biiettiva.</p>`,
        solution: `<p><strong>Teorema.</strong> Per ogni $f: A \\to B$, posto $a\\,\\eta_f\\,a' \\iff f(a) = f(a')$, si ha</p>
<p>$$f = j_f \\circ f_{**} \\circ p_{\\eta_f}$$</p>
<p>dove le tre mappe sono</p>
<p>$$\\begin{aligned}
p_{\\eta_f} &: A \\to A/\\eta_f, & p_{\\eta_f}(a) &= [a]_{\\eta_f} && \\text{(suriettiva)} \\\\
f_{**} &: A/\\eta_f \\to \\mathrm{Im}(f), & f_{**}([a]_{\\eta_f}) &= f(a) && \\text{(biiettiva)} \\\\
j_f &: \\mathrm{Im}(f) \\to B, & j_f(y) &= y && \\text{(iniettiva)}
\\end{aligned}$$</p>
<p><strong>Buona definizione.</strong> Se $[a]_{\\eta_f} = [a']_{\\eta_f}$ allora $a\\,\\eta_f\\,a'$, cioè $f(a) = f(a')$; dunque il valore $f_{**}([a]_{\\eta_f})$ non dipende dal rappresentante scelto. Inoltre $f(a) \\in \\mathrm{Im}(f)$, quindi il codominio è corretto.</p>
<p><strong>Iniettività.</strong> Se $f_{**}([a]_{\\eta_f}) = f_{**}([a']_{\\eta_f})$ allora $f(a) = f(a')$, cioè $a\\,\\eta_f\\,a'$, cioè $[a]_{\\eta_f} = [a']_{\\eta_f}$.</p>
<p><strong>Suriettività.</strong> Ogni $y \\in \\mathrm{Im}(f)$ è della forma $y = f(a)$ per qualche $a \\in A$, e allora $y = f_{**}([a]_{\\eta_f})$.</p>
<p>Quindi $f_{**}$ è biiettiva.</p>
<p><strong>Verifica dell'identità.</strong> Infine, per ogni $a \\in A$,</p>
<p>$$(j_f \\circ f_{**} \\circ p_{\\eta_f})(a) = j_f\\big(f_{**}([a]_{\\eta_f})\\big) = j_f\\big(f(a)\\big) = f(a),$$</p>
<p>e l'identità del teorema è verificata.</p>`
      },

      {
        id: "s05-ex-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sia $X = \\{1,2,3,4\\}$ e sia $\\pi = \\big\\{\\{1,3\\}, \\{2,4\\}\\big\\}$.</p>
<p>(a) Verificare che $\\pi$ è una partizione di $X$.<br>
(b) Scrivere $\\eta_\\pi$ come sottoinsieme di $X \\times X$.<br>
(c) Calcolare le classi $[x]_{\\eta_\\pi}$ per ogni $x \\in X$ e l'insieme quoziente $X/\\eta_\\pi$, verificando che $X/\\eta_\\pi = \\pi$.</p>`,
        solution: `<p><strong>(a)</strong> Le componenti $\\{1,3\\}$ e $\\{2,4\\}$ sono non vuote, la loro unione è $\\{1,2,3,4\\} = X$ e la loro intersezione è $\\emptyset$: le tre richieste della definizione di partizione sono soddisfatte.</p>
<p><strong>(b)</strong> $x\\,\\eta_\\pi\\,x'$ se e solo se $x$ e $x'$ stanno nella stessa componente. Dalla componente $\\{1,3\\}$ si ottengono $(1,1),(1,3),(3,1),(3,3)$; dalla componente $\\{2,4\\}$ si ottengono $(2,2),(2,4),(4,2),(4,4)$. Dunque</p>
<p>$$\\eta_\\pi = \\{(1,1),(1,3),(3,1),(3,3),(2,2),(2,4),(4,2),(4,4)\\},$$</p>
<p>che ha $8$ elementi. Si noti che $(1,2) \\notin \\eta_\\pi$.</p>
<p><strong>(c)</strong> Con $[x]_{\\eta_\\pi} = \\{y \\in X \\mid (y,x) \\in \\eta_\\pi\\}$ si ha $[1]_{\\eta_\\pi} = \\{1,3\\}$, $[3]_{\\eta_\\pi} = \\{1,3\\}$, $[2]_{\\eta_\\pi} = \\{2,4\\}$, $[4]_{\\eta_\\pi} = \\{2,4\\}$. Le classi distinte sono due, quindi</p>
<p>$$X/\\eta_\\pi = \\big\\{\\{1,3\\}, \\{2,4\\}\\big\\} = \\pi,$$</p>
<p>in accordo con $p \\circ e = \\mathrm{id}_{P_X}$.</p>`
      },

      {
        id: "s05-ex-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        content: `<p>In $\\mathbb{Z}_{12}$ determina tutti gli elementi invertibili con i rispettivi inversi e tutti i divisori dello zero. $\\mathbb{Z}_{12}$ è un campo?</p>`,
        solution: `<p><strong>Invertibili.</strong> Per il criterio di invertibilità, $[a]_{12}$ è invertibile se e solo se $\\mathrm{MCD}(a,12) = 1$, con $a \\in \\{0,1,\\dots,11\\}$. Si ha $\\mathrm{MCD}(1,12) = \\mathrm{MCD}(5,12) = \\mathrm{MCD}(7,12) = \\mathrm{MCD}(11,12) = 1$, mentre tutti gli altri valori hanno $\\mathrm{MCD}$ pari a $2, 3, 4, 6$ o $12$.</p>
<p>Quindi gli invertibili sono $[1], [5], [7], [11]$ e gli inversi si trovano cercando $[1]$ nelle rispettive righe:</p>
<p>$$\\begin{aligned}
[1]^{-1} &= [1], \\\\
[5][5] &= [25] = [1] &&\\Rightarrow\\; [5]^{-1} = [5], \\\\
[7][7] &= [49] = [1] &&\\Rightarrow\\; [7]^{-1} = [7], \\\\
[11][11] &= [121] = [1] &&\\Rightarrow\\; [11]^{-1} = [11].
\\end{aligned}$$</p>
<p><strong>Divisori dello zero.</strong> Le classi non nulle restanti sono $[2],[3],[4],[6],[8],[9],[10]$ e sono tutte divisori dello zero:</p>
<p>$$[2][6] = [12] = [0], \\quad [3][4] = [12] = [0], \\quad [4][3] = [0], \\quad [6][2] = [0],$$</p>
<p>$$[8][3] = [24] = [0], \\quad [9][4] = [36] = [0], \\quad [10][6] = [60] = [0].$$</p>
<p>Essendo divisori dello zero, per la proposizione vista non sono invertibili, in accordo con il calcolo dei $\\mathrm{MCD}$.</p>
<p><strong>Conclusione.</strong> Poiché $12 = 2^2 \\cdot 3$ non è primo, $\\mathbb{Z}_{12}$ non è un campo (ad esempio $[2]_{12} \\neq [0]_{12}$ non ha inverso).</p>`
      },

      {
        id: "s05-ex-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sull'insieme $X = \\{1,2,3\\}$ si consideri la relazione $\\sigma = \\{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2)\\}$.</p>
<p>(a) Stabilire se $\\sigma$ è una relazione di equivalenza.<br>
(b) Calcolare gli insiemi $[x]_\\sigma = \\{y \\in X \\mid y\\,\\sigma\\,x\\}$ per $x = 1,2,3$ e verificare che non formano una partizione di $X$.<br>
(c) Determinare la più piccola relazione di equivalenza su $X$ che contiene $\\sigma$ e la partizione ad essa associata.</p>`,
        solution: `<p><strong>(a)</strong> $\\sigma$ è riflessiva, perché contiene $(1,1),(2,2),(3,3)$, ed è simmetrica, perché contiene $(1,2)$ e $(2,1)$, $(2,3)$ e $(3,2)$. Non è però transitiva: $1\\,\\sigma\\,2$ e $2\\,\\sigma\\,3$ ma $(1,3) \\notin \\sigma$. Dunque $\\sigma$ non è una relazione di equivalenza.</p>
<p><strong>(b)</strong> $[1]_\\sigma = \\{y \\mid (y,1) \\in \\sigma\\} = \\{1,2\\}$, $[2]_\\sigma = \\{1,2,3\\}$, $[3]_\\sigma = \\{2,3\\}$. Questi insiemi sono non vuoti e la loro unione è $X$, ma $[1]_\\sigma \\cap [3]_\\sigma = \\{2\\} \\neq \\emptyset$ mentre $[1]_\\sigma \\neq [3]_\\sigma$: viene violata la terza richiesta della definizione di partizione. Questo mostra concretamente che <strong>senza la transitività il punto 1 della Proposizione 4.9 cade</strong>.</p>
<p><strong>(c)</strong> Una relazione di equivalenza $\\tau \\supseteq \\sigma$ deve contenere $(1,2)$ e $(2,3)$, quindi per transitività $(1,3)$ e per simmetria $(3,1)$. La relazione</p>
<p>$$\\tau = \\{(1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3)\\} = X \\times X$$</p>
<p>è riflessiva, simmetrica e transitiva, contiene $\\sigma$ ed è minimale perché ogni equivalenza contenente $\\sigma$ contiene tutte le nove coppie elencate. Le sue classi sono $[1]_\\tau = [2]_\\tau = [3]_\\tau = \\{1,2,3\\}$, dunque $X/\\tau = \\big\\{\\{1,2,3\\}\\big\\}$: la partizione banale con un'unica componente.</p>`
      },

      {
        id: "s05-ex-scritto-4",
        type: "esercizio",
        title: "Scritto 4",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sia $f: \\mathbb{Z} \\to \\mathbb{Z}$ la funzione che associa a ogni intero $a$ il resto della divisione di $a$ per $4$. Determina la relazione $\\eta_f$, l'insieme quoziente $\\mathbb{Z}/\\eta_f$, l'immagine $\\mathrm{Im}(f)$ e scrivi esplicitamente la decomposizione canonica $f = j_f \\circ f_{**} \\circ p_{\\eta_f}$, verificandola su $a = 11$.</p>`,
        solution: `<p><strong>La relazione $\\eta_f$.</strong> Per la divisione euclidea, $f(a) = r$ con $a = 4q + r$ e $0 \\le r \\lt 4$. Due interi hanno lo stesso resto modulo $4$ se e solo se la loro differenza è multipla di $4$: infatti se $a = 4q + r$ e $a' = 4q' + r$ allora $a - a' = 4(q - q')$, e viceversa se $a - a' = 4k$ i resti coincidono per unicità del resto. Dunque</p>
<p>$$a\\,\\eta_f\\,a' \\iff f(a) = f(a') \\iff 4 \\mid (a - a') \\iff a \\equiv_4 a',$$</p>
<p>cioè $\\eta_f$ è esattamente la congruenza modulo $4$.</p>
<p><strong>Quoziente e immagine.</strong> Di conseguenza</p>
<p>$$\\mathbb{Z}/\\eta_f = \\mathbb{Z}_4 = \\{[0]_4, [1]_4, [2]_4, [3]_4\\}, \\qquad \\mathrm{Im}(f) = \\{0,1,2,3\\} \\subset \\mathbb{Z}$$</p>
<p>(i resti possibili, tutti raggiunti: $f(0)=0$, $f(1)=1$, $f(2)=2$, $f(3)=3$).</p>
<p><strong>Le tre mappe della decomposizione.</strong></p>
<p>$$\\begin{aligned}
p_{\\eta_f} &: \\mathbb{Z} \\to \\mathbb{Z}_4, & p_{\\eta_f}(a) &= [a]_4 && \\text{(suriettiva)} \\\\
f_{**} &: \\mathbb{Z}_4 \\to \\{0,1,2,3\\}, & f_{**}([a]_4) &= f(a) && \\text{(ben definita e biiettiva)} \\\\
j_f &: \\{0,1,2,3\\} \\to \\mathbb{Z}, & j_f(y) &= y && \\text{(iniettiva)}
\\end{aligned}$$</p>
<p>dove $f_{**}$ è ben definita perché classi uguali hanno lo stesso resto, e in esplicito</p>
<p>$$f_{**}([0]_4) = 0, \\quad f_{**}([1]_4) = 1, \\quad f_{**}([2]_4) = 2, \\quad f_{**}([3]_4) = 3.$$</p>
<p><strong>Verifica per $a = 11$.</strong> Si ha $11 = 4 \\cdot 2 + 3$, dunque $f(11) = 3$. D'altra parte</p>
<p>$$p_{\\eta_f}(11) = [11]_4 = [3]_4, \\qquad f_{**}([3]_4) = 3, \\qquad j_f(3) = 3.$$</p>
<p>Quindi $(j_f \\circ f_{**} \\circ p_{\\eta_f})(11) = 3 = f(11)$.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Che cos'è una partizione di un insieme $X$ non vuoto?",
        back: "È una famiglia di sottoinsiemi di $X$ tale che: (1) ogni componente è <strong>non vuota</strong>, $\\pi_j \\neq \\emptyset$; (2) l'unione di tutte le componenti è $X$ (ricoprimento); (3) due componenti distinte sono disgiunte, ossia se $\\pi_j \\cap \\pi_k \\neq \\emptyset$ allora $\\pi_j = \\pi_k$."
      },
      {
        type: "tranello",
        front: "Perché la richiesta «ogni componente è non vuota» non si può omettere dalla definizione di partizione?",
        back: "Perché senza di essa la corrispondenza biunivoca tra equivalenze e partizioni (Prop. 4.10) è falsa. Con $X = \\{a\\}$, la famiglia $\\{\\{a\\}, \\emptyset\\}$ soddisferebbe ricoprimento e disgiunzione, ma la relazione associata ha come unica classe $\\{a\\}$, e ricostruendo si ottiene $\\{\\{a\\}\\} \\neq \\{\\{a\\}, \\emptyset\\}$. Inoltre nella dimostrazione di $X/\\eta_\\pi = \\pi$ serve poter scegliere $x_0 \\in \\pi_k$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra la proprietà chiave delle classi: $x_1\\,\\eta\\,x_2 \\iff [x_1]_\\eta = [x_2]_\\eta$.",
        back: "$(\\Rightarrow)$ Se $y \\in [x_1]_\\eta$, cioè $y\\,\\eta\\,x_1$, per transitività con $x_1\\,\\eta\\,x_2$ segue $y \\in [x_2]_\\eta$. Per l'altra inclusione si usa la simmetria ($x_2\\,\\eta\\,x_1$) e poi di nuovo la transitività. $(\\Leftarrow)$ Per riflessività $x_1 \\in [x_1]_\\eta = [x_2]_\\eta$, e $x_1 \\in [x_2]_\\eta$ significa esattamente $x_1\\,\\eta\\,x_2$."
      },
      {
        type: "dimostrazione",
        front: "Perché $X/\\eta$ è una partizione di $X$? Dove si usa ciascuna proprietà di $\\eta$?",
        back: "<strong>Non vuotezza:</strong> per <em>riflessività</em> $x \\in [x]_\\eta$. <strong>Ricoprimento:</strong> ogni $x_0$ sta in $[x_0]_\\eta$, quindi $\\bigcup_x [x]_\\eta = X$ (l'altra inclusione è ovvia). <strong>Disgiunzione:</strong> se $x \\in [x_1]_\\eta \\cap [x_2]_\\eta$ allora $x\\,\\eta\\,x_1$ e $x\\,\\eta\\,x_2$; per <em>simmetria</em> $x_1\\,\\eta\\,x$ e per <em>transitività</em> $x_1\\,\\eta\\,x_2$, da cui $[x_1]_\\eta = [x_2]_\\eta$ verificando le due inclusioni."
      },
      {
        type: "domanda",
        front: "Enuncia la Proposizione 4.10 e spiega che cosa afferma in sostanza.",
        back: "Dette $E_X$ le equivalenze su $X$ e $P_X$ le partizioni di $X$, le mappe $p(\\eta) = X/\\eta$ e $e(\\pi) = \\eta_\\pi$ soddisfano $p \\circ e = \\mathrm{id}_{P_X}$ e $e \\circ p = \\mathrm{id}_{E_X}$. In sostanza: <strong>parlare di relazioni di equivalenza su $X$ o di partizioni di $X$ è la stessa cosa</strong>, le due costruzioni sono inverse l'una dell'altra."
      },
      {
        type: "formula",
        front: "Enuncia il teorema di decomposizione canonica di una funzione $f: A \\to B$.",
        back: "Posto $a\\,\\eta_f\\,a' \\iff f(a) = f(a')$, vale $f = j_f \\circ f_{**} \\circ p_{\\eta_f}$ con $p_{\\eta_f}: A \\to A/\\eta_f$ suriettiva, $f_{**}: A/\\eta_f \\to \\mathrm{Im}(f)$, $f_{**}([a]) = f(a)$, biiettiva, e $j_f: \\mathrm{Im}(f) \\to B$, $j_f(y) = y$, iniettiva. Ogni funzione è dunque <strong>suriezione + biiezione + iniezione</strong>."
      },
      {
        type: "dimostrazione",
        front: "Perché $f_{**}([a]_{\\eta_f}) = f(a)$ è ben definita e biiettiva?",
        back: "<strong>Ben definita:</strong> se $[a]_{\\eta_f} = [a']_{\\eta_f}$ allora $a\\,\\eta_f\\,a'$, cioè $f(a) = f(a')$: il valore non dipende dal rappresentante. <strong>Iniettiva:</strong> $f(a) = f(a') \\Rightarrow a\\,\\eta_f\\,a' \\Rightarrow [a] = [a']$. <strong>Suriettiva:</strong> ogni $y \\in \\mathrm{Im}(f)$ è $f(a)$ per qualche $a$, quindi $y = f_{**}([a])$."
      },
      {
        type: "domanda",
        front: "In che senso «le relazioni di equivalenza su $X$ sono tutte e sole quelle indotte da una funzione»?",
        back: "Ogni $f: X \\to Y$ induce $\\eta_f$ ($x\\,\\eta_f\\,x' \\iff f(x) = f(x')$). Viceversa, data $\\eta$, la proiezione canonica $p_\\eta: X \\to X/\\eta$, $p_\\eta(x) = [x]_\\eta$, induce proprio $\\eta$: infatti $p_\\eta(x) = p_\\eta(x') \\iff [x]_\\eta = [x']_\\eta \\iff x\\,\\eta\\,x'$ per la proprietà chiave delle classi."
      },
      {
        type: "dimostrazione",
        front: "Dimostra che le operazioni $[a]_n + [b]_n = [a+b]_n$ e $[a]_n[b]_n = [ab]_n$ sono ben definite.",
        back: "Siano $a = a' + kn$ e $b = b' + ln$. Somma: $a+b = (a'+b') + (k+l)n$, quindi $(a+b)-(a'+b')$ è multiplo di $n$. Prodotto: $ab = a'b' + a'ln + b'kn + kln^2 = a'b' + n(a'l + b'k + kln)$, quindi $ab - a'b'$ è multiplo di $n$. In entrambi i casi il risultato non dipende dai rappresentanti."
      },
      {
        type: "dimostrazione",
        front: "Dimostra che in un anello commutativo con unità un divisore dello zero non è invertibile.",
        back: "Sia $xy = 0$ con $y \\neq 0$ e supponiamo per assurdo che esista $x^{-1}$. Allora $y = 1 \\cdot y = (x^{-1}x)y = x^{-1}(xy) = x^{-1} \\cdot 0 = 0$ (usando l'associatività), contro $y \\neq 0$. Dunque $x$ non è invertibile."
      },
      {
        type: "formula",
        front: "Quando $[a]_n \\in \\mathbb{Z}_n$ è invertibile? E quando $\\mathbb{Z}_n$ è un campo?",
        back: "$[a]_n$ è invertibile $\\iff \\mathrm{MCD}(a,n) = 1$ (criterio, dimostrato più avanti tramite l'identità di Bézout). Per $n \\ge 2$: $\\mathbb{Z}_n$ è un campo $\\iff n$ è primo. Esempi: $\\mathbb{Z}_5$ è un campo; $\\mathbb{Z}_6$ no, perché $[2],[3],[4]$ non sono invertibili."
      },
      {
        type: "tranello",
        front: "Perché il corollario «$\\mathbb{Z}_n$ campo $\\iff n$ primo» si enuncia per $n \\ge 2$?",
        back: "Perché $\\mathbb{Z}_1 = \\{[0]_1\\}$ ha un solo elemento, dunque $[1]_1 = [0]_1$: non ci sono elementi non nulli da invertire, ma viene a mancare la richiesta $[1] \\neq [0]$ della definizione di campo. Quindi $\\mathbb{Z}_1$ <strong>non</strong> è un campo — coerentemente col fatto che $1$ non è primo."
      },
      {
        type: "tranello",
        front: "Vero o falso: $[a]_n$ è «l'insieme degli interi che divisi per $n$ danno resto $a$».",
        back: "Vero <strong>solo se</strong> $0 \\le a \\lt n$. In generale $[a]_n = \\{a + kn : k \\in \\mathbb{Z}\\}$. Controesempio: $[7]_5 = [2]_5$, e il resto della divisione di $7$ per $5$ è $2$, non $7$. Per questo si scelgono come rappresentanti canonici i resti $0,1,\\dots,n-1$."
      }
    ]
};

