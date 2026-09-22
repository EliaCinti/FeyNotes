const LESSON = {
    id: "L01",
    date: "Lezione 1 — 21 Set 2026",
    title: "Linguaggio matematico, insiemi e relazioni d'ordine",
    abstract: "Presentazione del corso e dell'esame; linguaggio degli insiemi, operazioni e complementari, prodotto cartesiano, insiemi numerici, operazioni binarie e relazioni d'ordine totale. Esempi ed esercizi proposti con soluzioni.",

    sections: [
        {
            id: "s01-presentazione",
            type: "section",
            title: "Presentazione del corso",
            icon: "🎓",
            content: `<p>Il corso è <strong>Analisi 1</strong>, tenuto da <strong>Emanuele Marinacci</strong>. L'ufficio del docente si trova al Dipartimento di Matematica, in una struttura diversa da quella delle lezioni.</p><p>La pagina web del corso raccoglierà le informazioni principali, l'orario di ricevimento e i materiali. È <strong>fondamentale iscriversi al corso sulla piattaforma Delphi e al canale Teams</strong>: le comunicazioni urgenti verranno pubblicate lì.</p>`
        },
        {
            id: "s01-esame",
            type: "note_box",
            title: "Modalità d'esame e consigli del Prof.",
            icon: "📝",
            content: `<blockquote><p>Questo corso è intenso, andremo veloci e vedremo parecchie cose, quindi cercate di stare al passo. Io vi darò periodicamente degli esercizi. Ci saranno anche dei momenti di esercitazione e di spiegazione con dei tutor.</p></blockquote>`,
            subsections: [
                {
                    subtitle: "Prerequisiti",
                    content: `<p>Servono le nozioni di base del liceo, soprattutto la capacità di <strong>risolvere equazioni e disequazioni</strong>. Alcuni concetti verranno ripresi, ma molto velocemente.</p>`
                },
                {
                    subtitle: "Scritto e orale",
                    content: `<p>L'esame comprende una <strong>prova scritta</strong>, dedicata principalmente agli esercizi, e una <strong>prova orale</strong>, concentrata sulla teoria. Per superare l'esame bisogna <strong>passarle entrambe</strong>.</p><p><strong>Un buon voto allo scritto non basta per passare l'orale:</strong> chi all'orale dimostra di non conoscere la teoria non supera l'esame.</p>`
                },
                {
                    subtitle: "Esoneri per le matricole",
                    content: `<p>Gli studenti iscritti per la prima volta quest'anno possono dividere lo scritto in due parti, chiamate <strong>esoneri</strong>.</p><ul><li>Il <strong>primo esonero</strong> si terrà a metà corso, indicativamente verso fine novembre, e riguarderà la prima parte del programma.</li><li>Il <strong>secondo esonero</strong> si terrà alla fine del corso e riguarderà la seconda parte.</li></ul><p>La somma dei voti degli esoneri, se sufficienti, sostituisce la prova scritta. <strong>Chi supera entrambi gli esoneri ha superato lo scritto.</strong></p>`
                },
                {
                    subtitle: "Sessioni e appelli",
                    content: `<p>Le sessioni d'esame sono tre:</p><ul><li><strong>Invernale:</strong> gennaio-febbraio.</li><li><strong>Estiva:</strong> giugno-luglio.</li><li><strong>Autunnale:</strong> settembre.</li></ul><p>Ogni sessione comprende due appelli: sono quindi disponibili <strong>sei appelli più gli esoneri</strong>.</p><blockquote><p>Ognuno ha il suo tempo: non fatevi prendere dall'ansia se non passate il primo appello. L'importante è venire preparati.</p></blockquote>`
                },
                {
                    subtitle: "Consiglio fondamentale",
                    content: `<blockquote><p>Fate tanti esercizi. Sul sito del corso troverete fogli di esercizi e temi d'esame degli anni passati, spesso con soluzioni.</p></blockquote>`
                }
            ]
        },
        {
            id: "s01-astrazione",
            type: "section",
            title: "Il linguaggio matematico e l'astrazione",
            icon: "💬",
            content: `<p>Analisi 1 è più vicina all'apprendimento di una lingua che all'apprendimento dei soli calcoli: l'obiettivo è sviluppare un linguaggio per descrivere concetti in modo <strong>preciso e astratto</strong>.</p><p>L'<strong>astrazione</strong> permette di riconoscere un concetto al di là dei singoli oggetti. Alcuni uccelli sanno contare fino a un certo numero di uova; i bambini imparano a distinguere oggetti animati e inanimati senza partire da una definizione formale. Sentendo la parola “sedia”, persone diverse immaginano sedie diverse, ma condividono il concetto astratto.</p><p>In matematica dobbiamo costruire un linguaggio che esprima questi concetti. Per descrivere una <strong>funzione crescente</strong>, per esempio, non basta un disegno: serve una definizione rigorosa che catturi l'idea. Il percorso comincia dagli insiemi.</p>`
        },
        {
            id: "s01-insiemi",
            type: "section",
            title: "Insiemi, elementi e appartenenza",
            icon: "🧩",
            content: `<p>Un <strong>insieme</strong> è una collezione di oggetti, chiamati <strong>elementi</strong> dell'insieme.</p><p>Gli insiemi si indicano con lettere maiuscole, come $A,B,\\dots$; gli elementi con lettere minuscole, come $a,b,\\dots$.</p><p>Per indicare che un elemento appartiene a un insieme scriviamo:</p><p>$$a\\in A.$$</p><p>Per indicare che non vi appartiene scriviamo:</p><p>$$a\\notin A.$$</p>`,
            subsections: [
                {
                    subtitle: "Insieme vuoto",
                    content: `<p>L'<strong>insieme vuoto</strong> non contiene alcun elemento. Si indica con:</p><p>$$\\emptyset.$$</p><p>Contiene quindi zero elementi.</p>`
                },
                {
                    subtitle: "Esempi: un insieme infinito e uno finito",
                    content: `<p>L'insieme dei <strong>numeri naturali</strong> è:</p><p>$$\\mathbb{N}=\\{0,1,2,3,\\dots\\}.$$</p><p>Ha infiniti elementi. Nel corso adottiamo la convenzione <strong>$0\\in\\mathbb{N}$</strong>.</p><p>L'insieme:</p><p>$$A=\\{1,4,5\\}$$</p><p>è invece <strong>finito</strong> e contiene esattamente tre elementi.</p>`
                }
            ]
        },
        {
            id: "s01-simboli",
            type: "note_box",
            title: "Come leggere i simboli logici",
            icon: "🔎",
            content: `<p>Questi simboli permettono di leggere le definizioni e le descrizioni degli insiemi:</p><ul><li>$\\forall$ significa <strong>“per ogni”</strong>.</li><li>$\\exists$ significa <strong>“esiste almeno un”</strong>.</li><li>$\\land$ significa <strong>“e”</strong>: devono valere entrambe le condizioni.</li><li>$\\lor$ significa <strong>“oppure” in senso inclusivo</strong>: deve valere almeno una condizione, eventualmente entrambe.</li><li>$\\iff$ significa <strong>“se e solo se”</strong>: le affermazioni sono equivalenti e ciascuna implica l'altra.</li><li>$\\Rightarrow$ significa <strong>“implica”</strong>.</li><li>$:=$ significa <strong>“uguale per definizione”</strong>.</li></ul><p>Per esempio:</p><p>$$a\\in A\\Rightarrow a\\in B$$</p><p>si legge: “se $a$ appartiene ad $A$, allora $a$ appartiene a $B$”. L'affermazione $a\\in A$ è l'<strong>antecedente</strong>; l'affermazione $a\\in B$ è il <strong>conseguente</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Descrivere un insieme mediante una proprietà",
                    content: `<p>La scrittura:</p><p>$$\\{n\\in\\mathbb{N}\\mid\\text{proprietà di }n\\}$$</p><p>si legge: “l'insieme dei numeri naturali $n$ tali che vale la proprietà indicata”. La barra $\\mid$ significa <strong>“tali che”</strong> e separa gli elementi da considerare dalla condizione richiesta. Anche i due punti dopo un quantificatore introducono la condizione da soddisfare.</p>`
                }
            ]
        },
        {
            id: "s01-sottoinsiemi",
            type: "section",
            title: "Sottoinsiemi e sottoinsiemi propri",
            icon: "📦",
            content: `<p>Dati due insiemi $A$ e $B$, diciamo che $A$ è un <strong>sottoinsieme</strong> di $B$ se ogni elemento di $A$ è anche un elemento di $B$. Scriviamo:</p><p>$$A\\subseteq B.$$</p><p>Formalmente:</p><p>$$A\\subseteq B\\iff\\bigl(\\forall a\\in A,\\;a\\in B\\bigr).$$</p><p>Si legge: “$A$ è un sottoinsieme di $B$ se e solo se, per ogni elemento $a$ di $A$, $a$ appartiene anche a $B$”. La scrittura $\\forall a\\in A$ restringe già l'attenzione agli elementi di $A$; dopo la virgola si indica la proprietà richiesta, cioè $a\\in B$.</p>`,
            subsections: [
                {
                    subtitle: "Numeri pari",
                    content: `<p>L'insieme dei <strong>numeri pari</strong> è un sottoinsieme dei naturali:</p><p>$$P:=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}\\text{ tale che }n=2k\\}.$$</p><p>Per esteso: “$P$ è, per definizione, l'insieme dei numeri naturali $n$ tali che esiste almeno un numero naturale $k$ per cui $n=2k$”.</p><p><strong>Verifica su $0$, $2$ e $3$:</strong></p><ul><li>$0\\in P$, perché scegliendo $k=0\\in\\mathbb{N}$ si ottiene $0=2\\cdot0$.</li><li>$2\\in P$, perché scegliendo $k=1\\in\\mathbb{N}$ si ottiene $2=2\\cdot1$.</li><li>$3\\notin P$, perché $3=2k$ richiederebbe $k=\\frac{3}{2}$, che non appartiene a $\\mathbb{N}$.</li></ul><p>Per verificare l'appartenenza a $P$ bisogna trovare un valore <strong>naturale</strong> di $k$ che soddisfi la condizione.</p>`
                },
                {
                    subtitle: "Numeri dispari",
                    content: `<p>L'insieme dei <strong>numeri dispari</strong> è:</p><p>$$D:=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}\\text{ tale che }n=2k+1\\}.$$</p><p>Si legge: “l'insieme dei numeri naturali $n$ per cui esiste un numero naturale $k$ tale che $n=2k+1$”. In entrambe le definizioni si scelgono soltanto elementi di $\\mathbb{N}$, quindi:</p><p>$$P\\subseteq\\mathbb{N},\\qquad D\\subseteq\\mathbb{N}.$$</p>`
                },
                {
                    subtitle: "Inclusione propria",
                    content: `<p>Se $A\\subseteq B$ e $A\\neq B$, allora $A$ è un <strong>sottoinsieme proprio</strong> di $B$. Sotto l'ipotesi di inclusione, la disuguaglianza significa che esiste almeno un elemento di $B$ che non appartiene ad $A$. Si scrive:</p><p>$$A\\subset B\\quad\\text{oppure}\\quad A\\subsetneq B.$$</p><p>Sia $P$ sia $D$ sono sottoinsiemi propri di $\\mathbb{N}$: esistono naturali che non sono pari, cioè i dispari, e naturali che non sono dispari, cioè i pari. Pertanto:</p><p>$$P\\subset\\mathbb{N},\\qquad D\\subset\\mathbb{N}.$$</p>`
                }
            ]
        },
        {
            id: "s01-unione-intersezione",
            type: "section",
            title: "Unione e intersezione",
            icon: "🔗",
            content: `<p>Le operazioni tra insiemi costruiscono nuovi insiemi a partire da quelli assegnati. Consideriamo $A$ e $B$ come sottoinsiemi di un <strong>insieme universo</strong> $U$, che contiene tutti gli elementi di cui ci occupiamo.</p>`,
            subsections: [
                {
                    subtitle: "Unione: almeno una delle due appartenenze",
                    content: `<p>L'<strong>unione</strong> contiene gli elementi che appartengono ad $A$ <strong>oppure</strong> a $B$, compresi quelli che appartengono a entrambi:</p><p>$$A\\cup B:=\\{x\\in U\\mid x\\in A\\text{ oppure }x\\in B\\}.$$</p><p>Con i simboli logici:</p><p>$$A\\cup B=\\{x\\in U\\mid(x\\in A)\\lor(x\\in B)\\}.$$</p>`
                },
                {
                    subtitle: "Intersezione: entrambe le appartenenze",
                    content: `<p>L'<strong>intersezione</strong> contiene gli elementi che appartengono <strong>sia</strong> ad $A$ <strong>sia</strong> a $B$:</p><p>$$A\\cap B:=\\{x\\in U\\mid x\\in A\\text{ e }x\\in B\\}.$$</p><p>Con i simboli logici:</p><p>$$A\\cap B=\\{x\\in U\\mid(x\\in A)\\land(x\\in B)\\}.$$</p>`
                },
                {
                    subtitle: "Esempio di calcolo",
                    content: `<p>Nell'universo $U=\\mathbb{N}$ consideriamo:</p><p>$$A=\\{1,2,4\\},\\qquad B=\\{2,5\\}.$$</p><p>Raccogliendo gli elementi presenti in almeno uno dei due insiemi otteniamo:</p><p>$$A\\cup B=\\{1,2,4,5\\}.$$</p><p>L'elemento $2$, presente in entrambi, viene scritto <strong>una sola volta</strong>. Raccogliendo soltanto gli elementi comuni otteniamo:</p><p>$$A\\cap B=\\{2\\}.$$</p>`
                }
            ]
        },
        {
            id: "s01-complementare",
            type: "section",
            title: "Complementare e dipendenza dall'universo",
            icon: "🌐",
            content: `<p>Dato $A\\subseteq U$, il <strong>complementare</strong> di $A$ rispetto a $U$ è l'insieme degli elementi di $U$ che non appartengono ad $A$. Si indica con $A^c$, oppure con $\\bar{A}$ o $C_U(A)$:</p><p>$$A^c:=\\{x\\in U\\mid x\\notin A\\}.$$</p><p><strong>Il complementare si calcola sempre rispetto a un universo fissato e dipende dall'universo scelto.</strong></p>`,
            subsections: [
                {
                    subtitle: "Il complementare dei pari",
                    content: `<p>Nell'universo $U=\\mathbb{N}$, il complementare dell'insieme dei pari è l'insieme dei dispari:</p><p>$$P^c=D\\quad(\\text{in }\\mathbb{N}).$$</p><p>Infatti ogni naturale è pari oppure dispari. La definizione dei pari può anche essere scritta usando i due punti dopo il quantificatore:</p><p>$$P=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}:n=2k\\}.$$</p><p>Si legge: “i naturali $n$ per cui esiste un naturale $k$ tale che $n=2k$”. Poiché $0\\in\\mathbb{N}$, anche $0=2\\cdot0$ appartiene a $P$.</p>`
                },
                {
                    subtitle: "Multipli di 3 e intersezione con i pari",
                    content: `<p>Sia $A$ l'insieme dei multipli di $3$:</p><p>$$A=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}:n=3k\\}.$$</p><p>I numeri che sono sia pari sia multipli di $3$ sono i multipli di $6$:</p><p>$$P\\cap A=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}:n=6k\\}.$$</p><p>Il complementare di $A$ contiene i naturali che non sono multipli di $3$: nella divisione per $3$ hanno resto $1$ oppure $2$. Quindi:</p><p>$$A^c=\\{n\\in\\mathbb{N}\\mid(\\exists k\\in\\mathbb{N}:n=3k+1)\\lor(\\exists k\\in\\mathbb{N}:n=3k+2)\\}.$$</p><p>Scegliendo $k=0$ nelle due condizioni si ottengono rispettivamente $1$ e $2$, che appartengono entrambi ad $A^c$.</p>`
                }
            ]
        },
        {
            id: "s01-proprieta-complementare",
            type: "section",
            title: "Proprietà del complementare e leggi di De Morgan",
            icon: "⚖️",
            content: `<p>Siano $A,B\\subseteq U$. <strong>Tutti i complementari devono essere calcolati rispetto allo stesso universo $U$.</strong></p>`,
            subsections: [
                {
                    subtitle: "Un insieme e il suo complementare",
                    content: `<p>Il complementare del complementare è l'insieme di partenza:</p><p>$$(A^c)^c=A.$$</p><p>Un insieme e il suo complementare non hanno elementi comuni:</p><p>$$A\\cap A^c=\\emptyset.$$</p><p>Infatti appartenere ad $A^c$ significa non appartenere ad $A$: nessun elemento può soddisfare contemporaneamente entrambe le condizioni.</p><p>La loro unione è l'intero universo:</p><p>$$A\\cup A^c=U.$$</p><p>Ogni elemento di $U$ appartiene ad $A$ oppure non vi appartiene; nel secondo caso appartiene ad $A^c$.</p>`
                },
                {
                    subtitle: "Le due identità",
                    content: `<p>Le seguenti identità sono note come <strong>leggi di De Morgan</strong>; il testo precisa che nella lezione il loro nome non viene introdotto formalmente.</p><p>$$(A\\cup B)^c=A^c\\cap B^c.$$</p><p>Non appartenere all'unione significa non appartenere <strong>né ad $A$ né a $B$</strong>. Bisogna quindi appartenere sia ad $A^c$ sia a $B^c$: questo spiega l'intersezione.</p><p>$$(A\\cap B)^c=A^c\\cup B^c.$$</p><p>Non appartenere all'intersezione significa essere esclusi da <strong>almeno uno</strong> dei due insiemi. Basta appartenere ad $A^c$ oppure a $B^c$, eventualmente a entrambi: questo spiega l'unione.</p>`
                }
            ],
            formulas: [
                {
                    label: "Complementare dell'unione",
                    latex: "(A\\cup B)^c=A^c\\cap B^c"
                },
                {
                    label: "Complementare dell'intersezione",
                    latex: "(A\\cap B)^c=A^c\\cup B^c"
                }
            ]
        },
        {
            id: "s01-de-morgan-esempio-quattro",
            type: "section",
            title: "De Morgan: esempio con quattro elementi",
            icon: "🔢",
            content: `<p>Scegliamo:</p><p>$$U=\\{1,2,3,4\\},\\qquad A=\\{1,2\\},\\qquad B=\\{2,3\\}.$$</p><p>Calcoliamo prima unione e intersezione:</p><p>$$A\\cup B=\\{1,2,3\\},\\qquad A\\cap B=\\{2\\}.$$</p><p>Nell'unione elenchiamo gli elementi presenti in almeno uno dei due insiemi, senza ripetizioni; nell'intersezione teniamo soltanto quelli comuni.</p><p>Per i complementari prendiamo gli elementi di $U$ che mancano nell'insieme considerato:</p><p>$$A^c=\\{3,4\\},\\qquad B^c=\\{1,4\\}.$$</p>`,
            subsections: [
                {
                    subtitle: "Prima legge: confronto dei due membri",
                    content: `<p>Il membro sinistro è:</p><p>$$(A\\cup B)^c=\\{1,2,3\\}^c=\\{4\\}.$$</p><p>Il membro destro è:</p><p>$$A^c\\cap B^c=\\{3,4\\}\\cap\\{1,4\\}=\\{4\\}.$$</p><p>I risultati coincidono: $4$ è l'unico elemento di $U$ che non appartiene né ad $A$ né a $B$.</p>`
                },
                {
                    subtitle: "Seconda legge: confronto dei due membri",
                    content: `<p>Il membro sinistro è:</p><p>$$(A\\cap B)^c=\\{2\\}^c=\\{1,3,4\\}.$$</p><p>Il membro destro è:</p><p>$$A^c\\cup B^c=\\{3,4\\}\\cup\\{1,4\\}=\\{1,3,4\\}.$$</p><p>Anche questi risultati coincidono. Si esclude soltanto $2$, l'unico elemento che appartiene a entrambi gli insiemi.</p>`
                }
            ],
            extra_content: `<p><strong>Questi calcoli verificano le identità per gli insiemi scelti; non sostituiscono una dimostrazione valida per tutti gli insiemi.</strong></p>`
        },
        {
            id: "s01-dimostrazione-prima-legge",
            type: "section",
            title: "Dimostrazione grafica della prima legge",
            icon: "🔍",
            content: `<p>La dimostrazione usa i diagrammi di Venn per giustificare:</p><p>$$(A\\cup B)^c=A^c\\cap B^c.$$</p><p>Il rettangolo rappresenta l'universo $U$: le regioni esterne ai cerchi vengono considerate <strong>soltanto all'interno dell'universo</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Il complementare dell'unione",
                    content: `<p>$A\\cup B$ è l'area totale coperta dai due cerchi. Il suo complementare comprende ciò che, dentro $U$, sta <strong>fuori da entrambi</strong> i cerchi.</p>`
                },
                {
                    subtitle: "L'intersezione dei complementari",
                    content: `<p>$A^c$ comprende ciò che è fuori da $A$ ma dentro $U$; $B^c$ comprende ciò che è fuori da $B$ ma dentro $U$. La loro intersezione è la regione che sta <strong>sia fuori da $A$ sia fuori da $B$</strong>: è la stessa regione del complementare dell'unione.</p><p>Nella dimostrazione le quattro regioni sono distinte così:</p><ul><li><strong>Blu:</strong> la parte di $B$ che non appartiene ad $A$.</li><li><strong>Rosso:</strong> la parte di $A$ che non appartiene a $B$.</li><li><strong>Viola:</strong> la regione di $U$ esterna a entrambi i cerchi.</li><li><strong>Bianco:</strong> l'intersezione $A\\cap B$, che non appartiene a nessuno dei due complementari.</li></ul><p>$A^c$ comprende le regioni <strong>blu e viola</strong>; $B^c$ comprende le regioni <strong>rossa e viola</strong>. La regione viola è l'unica comune ai due complementari.</p>`
                }
            ],
            extra_content: `<p>La regione grigia usata per il complementare dell'unione e quella viola usata per l'intersezione dei complementari coincidono: rappresentano gli elementi di $U$ che non appartengono né ad $A$ né a $B$. Dunque:</p><p>$$(A\\cup B)^c=A^c\\cap B^c.$$</p><p>La dimostrazione della seconda legge è analoga ed è <strong>lasciata come esercizio</strong>.</p>`
        },
        {
            id: "s01-de-morgan-esempio-sei",
            type: "section",
            title: "De Morgan: esempio con sei elementi",
            icon: "🔢",
            content: `<p>Consideriamo:</p><p>$$U=\\{1,2,3,4,5,6\\},\\qquad A=\\{1,2,4\\},\\qquad B=\\{2,5\\}.$$</p><p>Tutti i complementari sono riferiti a questo universo finito:</p><p>$$A^c=\\{3,5,6\\},\\qquad B^c=\\{1,3,4,6\\}.$$</p>`,
            subsections: [
                {
                    subtitle: "Prima legge",
                    content: `<p>Calcoliamo separatamente i due membri:</p><p>$$A\\cup B=\\{1,2,4,5\\}\\quad\\Rightarrow\\quad(A\\cup B)^c=\\{3,6\\}.$$</p><p>$$A^c\\cap B^c=\\{3,5,6\\}\\cap\\{1,3,4,6\\}=\\{3,6\\}.$$</p><p>I risultati coincidono: $3$ e $6$ non appartengono né ad $A$ né a $B$.</p>`
                },
                {
                    subtitle: "Seconda legge",
                    content: `<p>Si ottiene:</p><p>$$A\\cap B=\\{2\\}\\quad\\Rightarrow\\quad(A\\cap B)^c=\\{1,3,4,5,6\\}.$$</p><p>$$A^c\\cup B^c=\\{3,5,6\\}\\cup\\{1,3,4,6\\}=\\{1,3,4,5,6\\}.$$</p><p>Anche questi risultati coincidono: tutti gli elementi di $U$ tranne $2$ sono esclusi da almeno uno dei due insiemi.</p>`
                }
            ]
        },
        {
            id: "s01-disgiunti",
            type: "section",
            title: "Insiemi disgiunti",
            icon: "↔️",
            content: `<p>Due insiemi $A$ e $B$ si dicono <strong>disgiunti</strong> se la loro intersezione è l'insieme vuoto:</p><p>$$A,B\\text{ disgiunti}\\iff A\\cap B=\\emptyset.$$</p>`
        },
        {
            id: "s01-prodotto-cartesiano",
            type: "section",
            title: "Coppie ordinate e prodotto cartesiano",
            icon: "📍",
            content: `<p>Dopo le operazioni che selezionano elementi degli insiemi, introduciamo il <strong>prodotto cartesiano</strong>, i cui elementi sono coppie ordinate.</p>`,
            subsections: [
                {
                    subtitle: "Coppia ordinata",
                    content: `<p>Una <strong>coppia ordinata</strong> $(a,b)$ ha una prima componente $a$ e una seconda componente $b$, anche coincidenti. Due coppie sono uguali se e solo se sono uguali le componenti corrispondenti:</p><p>$$(a,b)=(c,d)\\iff(a=c)\\land(b=d).$$</p><p>In generale $(a,b)\\neq(b,a)$, a meno che $a=b$.</p><p>La coppia $(a,b)$ va distinta dall'insieme $\\{a,b\\}$: in un insieme l'ordine non conta, quindi $\\{a,b\\}=\\{b,a\\}$. Inoltre $\\{a,a\\}=\\{a\\}$ ha un solo elemento, mentre $(a,a)$ ha <strong>due componenti coincidenti</strong>.</p>`
                },
                {
                    subtitle: "Definizione di prodotto cartesiano",
                    content: `<p>Il <strong>prodotto cartesiano</strong> di $A$ e $B$ è l'insieme di tutte le coppie ordinate con prima componente in $A$ e seconda componente in $B$:</p><p>$$A\\times B=\\{(a,b)\\mid a\\in A,\\;b\\in B\\}.$$</p>`
                },
                {
                    subtitle: "Esempio: l'ordine dei fattori conta",
                    content: `<p>Siano:</p><p>$$A=\\{1,2,4\\},\\qquad B=\\{1,5\\}.$$</p><p>Si ha:</p><p>$$A\\times B=\\{(1,1),(1,5),(2,1),(2,5),(4,1),(4,5)\\}.$$</p><p>Invertendo l'ordine:</p><p>$$B\\times A=\\{(1,1),(1,2),(1,4),(5,1),(5,2),(5,4)\\}.$$</p><p>In generale <strong>$A\\times B\\neq B\\times A$</strong>. Per esempio $(2,5)$ appartiene ad $A\\times B$, ma non a $B\\times A$.</p><p>Questi insiemi di coppie possono essere rappresentati come insiemi di punti su un piano cartesiano.</p>`
                }
            ]
        },
        {
            id: "s01-insiemi-numerici",
            type: "section",
            title: "Insiemi numerici fondamentali",
            icon: "🔢",
            content: `<p>Gli insiemi numerici introdotti sono i naturali, gli interi e i razionali.</p>`,
            subsections: [
                {
                    subtitle: "Numeri naturali",
                    content: `<p>I <strong>numeri naturali</strong> sono i numeri usati per contare:</p><p>$$\\mathbb{N}=\\{0,1,2,3,\\dots\\}.$$</p><p>Nel corso <strong>lo zero è incluso</strong>.</p>`
                },
                {
                    subtitle: "Numeri interi",
                    content: `<p>L'equazione $x+5=2$ non ha soluzione in $\\mathbb{N}$. Per poter risolvere equazioni di questo tipo si introducono i numeri negativi.</p><p>L'insieme dei <strong>numeri interi</strong> comprende i naturali e i loro opposti:</p><p>$$\\mathbb{Z}=\\{\\dots,-3,-2,-1,0,1,2,3,\\dots\\}.$$</p>`
                },
                {
                    subtitle: "Numeri razionali",
                    content: `<p>L'equazione $2x=1$ non ha soluzione in $\\mathbb{Z}$. Si estende quindi l'insieme degli interi includendo i quozienti con denominatore non nullo.</p><p>L'insieme dei <strong>numeri razionali</strong> contiene i numeri esprimibili come frazione di due interi, con denominatore diverso da zero:</p><p>$$\\mathbb{Q}=\\left\\{\\frac{p}{q}\\mid p\\in\\mathbb{Z},\\;q\\in\\mathbb{Z},\\;q\\neq0\\right\\}.$$</p>`
                }
            ]
        },
        {
            id: "s01-integrazione-differenza",
            type: "integrazione_box",
            title: "Integrazione — non detto dal docente",
            content: `<p><strong>Lettura della differenza tra insiemi:</strong> $A\\setminus B$ indica gli elementi di $A$ che non appartengono a $B$. In particolare, $\\mathbb{N}\\setminus\\{0\\}$ indica i numeri naturali diversi da zero.</p>`
        },
        {
            id: "s01-rappresentazione-razionali",
            type: "note_box",
            title: "Rappresentazione unica dei numeri razionali",
            icon: "✏️",
            content: `<p>Un numero razionale può avere diverse rappresentazioni come frazione. Per esempio:</p><p>$$\\frac{1}{2}=\\frac{2}{4}=\\frac{-3}{-6}.$$</p><p>Per ottenere una rappresentazione unica si impongono due condizioni:</p><ol><li>La frazione deve essere <strong>ridotta ai minimi termini</strong>: il massimo comun divisore tra il valore assoluto del numeratore e il denominatore deve essere $1$.</li><li>Il denominatore deve essere <strong>positivo</strong>.</li></ol><p>Ogni razionale ha così un'unica scrittura $\\frac{p}{q}$ con:</p><p>$$p\\in\\mathbb{Z},\\qquad q\\in\\mathbb{N}\\setminus\\{0\\},\\qquad\\operatorname{MCD}(|p|,q)=1.$$</p>`
        },
        {
            id: "s01-operazioni-binarie",
            type: "section",
            title: "Operazioni binarie",
            icon: "⚙️",
            content: `<p>Un'<strong>operazione binaria</strong> su un insieme $X$ è una funzione che associa a <strong>ogni coppia ordinata</strong> di elementi di $X$ un <strong>unico elemento di $X$</strong>:</p><p>$$f:X\\times X\\to X.$$</p>`,
            subsections: [
                {
                    subtitle: "Somma e prodotto",
                    content: `<p>Somma e prodotto sono operazioni binarie su $\\mathbb{N}$:</p><ul><li>La <strong>somma</strong> prende $(a,b)\\in\\mathbb{N}\\times\\mathbb{N}$ e restituisce $a+b\\in\\mathbb{N}$.</li><li>Il <strong>prodotto</strong> prende $(a,b)\\in\\mathbb{N}\\times\\mathbb{N}$ e restituisce $a\\cdot b\\in\\mathbb{N}$.</li></ul><p>Queste operazioni sono definite anche su $\\mathbb{Z}$ e $\\mathbb{Q}$.</p>`
                }
            ]
        },
        {
            id: "s01-relazioni",
            type: "section",
            title: "Una relazione come insieme di coppie",
            icon: "🔗",
            content: `<p>Su $\\mathbb{N}$, $\\mathbb{Z}$ e $\\mathbb{Q}$ è definita una relazione d'ordine che permette di confrontare gli elementi. Per precisare il concetto partiamo dal prodotto cartesiano.</p><p>Una <strong>relazione</strong> su un insieme $X$ è un sottoinsieme $\\mathcal{R}$ di $X\\times X$. Dire che $x$ è in relazione con $y$ significa che la coppia $(x,y)$ appartiene a $\\mathcal{R}$.</p><p>Quando la relazione è indicata con $\\leq$, la scrittura $x\\leq y$ significa:</p><p>$$(x,y)\\in\\mathcal{R}.$$</p><p>Le proprietà della relazione dipendono dalle coppie che appartengono a questo sottoinsieme.</p>`
        },
        {
            id: "s01-ordine-totale",
            type: "section",
            title: "Relazione d'ordine totale",
            icon: "⚖️",
            content: `<p>Una relazione $\\leq$ su un insieme $X$ è una <strong>relazione d'ordine totale</strong> se soddisfa le quattro proprietà seguenti.</p>`,
            subsections: [
                {
                    subtitle: "Totalità o dicotomia",
                    content: `<p>Due elementi qualsiasi sono sempre confrontabili:</p><p>$$\\forall x,y\\in X,\\quad(x\\leq y)\\lor(y\\leq x).$$</p>`
                },
                {
                    subtitle: "Riflessività",
                    content: `<p>Ogni elemento è in relazione con se stesso:</p><p>$$\\forall x\\in X,\\quad x\\leq x.$$</p>`
                },
                {
                    subtitle: "Antisimmetria",
                    content: `<p>Se $x$ è minore o uguale a $y$ e $y$ è minore o uguale a $x$, i due elementi coincidono:</p><p>$$\\forall x,y\\in X,\\quad(x\\leq y\\land y\\leq x)\\Rightarrow x=y.$$</p>`
                },
                {
                    subtitle: "Transitività",
                    content: `<p>Se $x$ è minore o uguale a $y$ e $y$ è minore o uguale a $z$, allora $x$ è minore o uguale a $z$:</p><p>$$\\forall x,y,z\\in X,\\quad(x\\leq y\\land y\\leq z)\\Rightarrow x\\leq z.$$</p>`
                }
            ],
            extra_content: `<p>La relazione usuale $\\leq$ su $\\mathbb{N}$, $\\mathbb{Z}$ e $\\mathbb{Q}$ soddisfa tutte queste proprietà: sono quindi <strong>insiemi totalmente ordinati</strong>.</p>`
        },
        {
            id: "s01-antisimmetria",
            type: "alert_box",
            title: "Antisimmetria e “oppure” inclusivo",
            icon: "⚠️",
            content: `<p>L'<strong>antisimmetria non vieta</strong> che valgano entrambe le direzioni $x\\leq y$ e $y\\leq x$: stabilisce che questo può accadere <strong>soltanto quando $x=y$</strong>.</p><p>Quando gli elementi coincidono, entrambe le disuguaglianze sono ammesse, in accordo con la riflessività. Anche l'“oppure” della proprietà totale è <strong>inclusivo</strong>.</p>`
        },
        {
            id: "s01-esempio-ordine",
            type: "section",
            title: "Verificare un ordine totale su un insieme finito",
            icon: "✅",
            content: `<p>Consideriamo $X=\\{1,2\\}$ con l'usuale relazione $\\leq$. Come sottoinsieme di $X\\times X$, la relazione è:</p><p>$$\\mathcal{R}=\\{(1,1),(1,2),(2,2)\\}.$$</p>`,
            subsections: [
                {
                    subtitle: "Totalità",
                    content: `<p>I due elementi distinti sono confrontabili perché $1\\leq2$. Per gli elementi uguali valgono $1\\leq1$ e $2\\leq2$.</p>`
                },
                {
                    subtitle: "Riflessività",
                    content: `<p>Le coppie $(1,1)$ e $(2,2)$ appartengono entrambe a $\\mathcal{R}$.</p>`
                },
                {
                    subtitle: "Antisimmetria",
                    content: `<p>Per gli elementi distinti vale $1\\leq2$, ma non $2\\leq1$. Entrambe le direzioni valgono soltanto quando gli elementi coincidono.</p>`
                },
                {
                    subtitle: "Transitività",
                    content: `<p>Le sole catene possibili $x\\leq y\\leq z$ sono:</p><p>$$1\\leq1\\leq1,\\qquad1\\leq1\\leq2,\\qquad1\\leq2\\leq2,\\qquad2\\leq2\\leq2.$$</p><p>In ogni caso vale anche $x\\leq z$, come si controlla dalla presenza delle coppie $(1,1)$, $(1,2)$ e $(2,2)$ in $\\mathcal{R}$.</p>`
                }
            ],
            extra_content: `<p>La verifica considera <strong>tutte le possibilità</strong> nell'insieme finito $X$ e mostra come controllare le proprietà richieste.</p>`
        },
        {
            id: "s01-nota-prof-ripasso",
            type: "note_box",
            title: "Nota del Prof. — Proprietà da ripassare",
            icon: "📚",
            content: `<blockquote><p>Vi invito a ripassare le proprietà delle operazioni di somma e prodotto (commutativa, associativa, distributiva) e l'esistenza dell'elemento neutro e dell'opposto/reciproco nei vari insiemi numerici. Queste proprietà sono fondamentali e verranno date per scontate.</p></blockquote>`
        },
        {
            id: "s01-integrazione-esercizi",
            type: "integrazione_box",
            title: "Integrazione — non detto dal docente",
            content: `<p>Esercizi sui contenuti di questa lezione, <strong>generati dal verificatore e non svolti dal docente</strong>. Le soluzioni sono nel box sotto ogni traccia.</p>`
        },
        {
            id: "s01-teoria-1",
            type: "esercizio",
            title: "Teoria 1",
            kind: "teoria",
            source: "integrazione",
            content: `<p>Definire le relazioni $A\\subseteq B$ e $A\\subsetneq B$. Spiegare perché $\\emptyset\\subseteq B$ per ogni insieme $B$ e precisare quando questa inclusione è propria.</p>`,
            solution: `<p><strong>Inclusione.</strong> Si ha $A\\subseteq B$ quando ogni elemento di $A$ appartiene anche a $B$, cioè:</p><p>$$\\forall a\\in A,\\quad a\\in B.$$</p><p><strong>Inclusione propria.</strong> Si ha $A\\subsetneq B$ quando $A\\subseteq B$ e $A\\neq B$. Sotto l'ipotesi di inclusione, questo equivale all'esistenza di un elemento di $B$ che non appartiene ad $A$.</p><p><strong>Insieme vuoto.</strong> L'inclusione $\\emptyset\\subseteq B$ vale perché non esistono elementi dell'insieme vuoto che possano violarla. È propria esattamente quando $B\\neq\\emptyset$.</p>`
        },
        {
            id: "s01-teoria-2",
            type: "esercizio",
            title: "Teoria 2",
            kind: "teoria",
            source: "integrazione",
            content: `<p>Siano $A,B\\subseteq U$. Definire $A\\cup B$, $A\\cap B$ e $A^c$. Quando $A$ e $B$ sono disgiunti? Mostrare con un esempio che il complementare dipende dall'universo.</p>`,
            solution: `<p><strong>Definizioni.</strong></p><p>$$A\\cup B=\\{x\\in U\\mid x\\in A\\lor x\\in B\\}.$$</p><p>$$A\\cap B=\\{x\\in U\\mid x\\in A\\land x\\in B\\}.$$</p><p>$$A^c=\\{x\\in U\\mid x\\notin A\\}.$$</p><p>L'unione include anche gli elementi comuni. Gli insiemi sono <strong>disgiunti</strong> se:</p><p>$$A\\cap B=\\emptyset.$$</p><p><strong>Dipendenza dall'universo.</strong> Se $A=\\{1\\}$, il complementare rispetto a $U=\\{1,2\\}$ è $\\{2\\}$; rispetto a $V=\\{1,2,3\\}$ è invece $\\{2,3\\}$.</p>`
        },
        {
            id: "s01-teoria-3",
            type: "esercizio",
            title: "Teoria 3",
            kind: "teoria",
            source: "integrazione",
            content: `<p>Definire il complementare di $A\\subseteq U$ e spiegare con un esempio perché dipende dall'universo. Giustificare le identità $A\\cap A^c=\\emptyset$ e $A\\cup A^c=U$.</p>`,
            solution: `<p><strong>Definizione.</strong> Il complementare è:</p><p>$$A^c=\\{x\\in U\\mid x\\notin A\\}.$$</p><p>Per $A=\\{0,2\\}$, il complementare in $U=\\{0,1,2\\}$ è $\\{1\\}$; in $V=\\{0,1,2,3\\}$ è $\\{1,3\\}$.</p><p><strong>Intersezione.</strong> Nessun elemento può appartenere ad $A$ e contemporaneamente non appartenervi, quindi:</p><p>$$A\\cap A^c=\\emptyset.$$</p><p><strong>Unione.</strong> Ogni elemento di $U$ appartiene ad $A$ oppure non vi appartiene; nel secondo caso appartiene ad $A^c$. Poiché entrambi gli insiemi sono contenuti in $U$, segue:</p><p>$$A\\cup A^c=U.$$</p>`
        },
        {
            id: "s01-teoria-4",
            type: "esercizio",
            title: "Teoria 4",
            kind: "teoria",
            source: "integrazione",
            content: `<p>Definire un'operazione binaria su un insieme $X$. Stabilire se la sottrazione e la divisione usuali sono operazioni binarie su ciascuno degli insiemi $\\mathbb{N}$, $\\mathbb{Z}$ e $\\mathbb{Q}$, motivando le risposte.</p>`,
            solution: `<p><strong>Definizione.</strong> Un'operazione binaria su $X$ è una funzione:</p><p>$$f:X\\times X\\to X.$$</p><p>Deve assegnare a ogni coppia di elementi di $X$ un unico risultato appartenente a $X$.</p><p><strong>Sottrazione.</strong> Non è un'operazione binaria su $\\mathbb{N}$, perché:</p><p>$$1-2=-1\\notin\\mathbb{N}.$$</p><p>Lo è su $\\mathbb{Z}$ e su $\\mathbb{Q}$: la differenza di due interi è intera e quella di due razionali è razionale.</p><p><strong>Divisione.</strong> Non è un'operazione binaria su nessuno dei tre insiemi: tutti contengono $0$ e la divisione per $0$ non è definita.</p><p>Inoltre, su $\\mathbb{N}$ e $\\mathbb{Z}$ può mancare la chiusura anche con denominatore non nullo, come mostra $\\frac{1}{2}$. Su $\\mathbb{Q}$ la divisione definisce invece una funzione:</p><p>$$\\mathbb{Q}\\times(\\mathbb{Q}\\setminus\\{0\\})\\to\\mathbb{Q}.$$</p>`
        },
        {
            id: "s01-scritto-1",
            type: "esercizio",
            title: "Scritto 1",
            kind: "scritto",
            source: "integrazione",
            content: `<p>Siano:</p><p>$$U=\\{0,1,2,3,4,5,6\\},\\qquad A=\\{0,2,4,6\\},\\qquad B=\\{1,2,3\\}.$$</p><p>Calcolare $A\\cup B$, $A\\cap B$, $A^c$ e $B^c$, con complementari in $U$. Stabilire se $A\\subseteq B$ oppure $B\\subseteq A$.</p>`,
            solution: `<p><strong>Unione.</strong> Raccogliendo gli elementi presenti in almeno uno dei due insiemi:</p><p>$$A\\cup B=\\{0,1,2,3,4,6\\}.$$</p><p><strong>Intersezione.</strong> L'unico elemento comune è $2$, quindi:</p><p>$$A\\cap B=\\{2\\}.$$</p><p><strong>Complementari.</strong> Gli elementi di $U$ assenti da $A$ formano:</p><p>$$A^c=\\{1,3,5\\}.$$</p><p>Quelli assenti da $B$ formano:</p><p>$$B^c=\\{0,4,5,6\\}.$$</p><p><strong>Inclusioni.</strong> $A\\subseteq B$ è falsa perché $0\\in A$ ma $0\\notin B$. Anche $B\\subseteq A$ è falsa perché $1\\in B$ ma $1\\notin A$.</p>`
        },
        {
            id: "s01-scritto-2",
            type: "esercizio",
            title: "Scritto 2",
            kind: "scritto",
            source: "integrazione",
            content: `<p>Siano:</p><p>$$U=\\{0,1,2,3,4,5,6,7\\},\\qquad A=\\{0,2,4,6\\},\\qquad B=\\{0,3,6\\}.$$</p><p>Calcolare $A\\cup B$, $A\\cap B$, $A^c$ e $B^c$ rispetto a $U$. Verificare $(A\\cup B)^c=A^c\\cap B^c$ ed elencare gli elementi di $(A\\cap B)\\times\\{1,2\\}$.</p>`,
            solution: `<p><strong>Unione e intersezione.</strong> Raccogliendo tutti gli elementi e poi quelli comuni:</p><p>$$A\\cup B=\\{0,2,3,4,6\\}.$$</p><p>$$A\\cap B=\\{0,6\\}.$$</p><p><strong>Complementari.</strong> Gli elementi di $U$ esclusi dai due insiemi danno:</p><p>$$A^c=\\{1,3,5,7\\}.$$</p><p>$$B^c=\\{1,2,4,5,7\\}.$$</p><p><strong>Prima legge di De Morgan: membro sinistro.</strong></p><p>$$(A\\cup B)^c=\\{1,5,7\\}.$$</p><p><strong>Membro destro.</strong></p><p>$$A^c\\cap B^c=\\{1,5,7\\}.$$</p><p>I due risultati coincidono e verificano la legge per questi insiemi.</p><p><strong>Prodotto cartesiano.</strong> La prima componente è $0$ oppure $6$; la seconda è $1$ oppure $2$:</p><p>$$(A\\cap B)\\times\\{1,2\\}=\\{(0,1),(0,2),(6,1),(6,2)\\}.$$</p>`
        },
        {
            id: "s01-scritto-3",
            type: "esercizio",
            title: "Scritto 3",
            kind: "scritto",
            source: "integrazione",
            content: `<p>Adottando $0\\in\\mathbb{N}$, siano:</p><p>$$U=\\{n\\in\\mathbb{N}\\mid n\\leq12\\},$$</p><p>$$A=\\{n\\in U\\mid\\exists k\\in\\mathbb{N},\\;n=2k\\},$$</p><p>$$B=\\{n\\in U\\mid\\exists k\\in\\mathbb{N},\\;n=3k\\}.$$</p><p>Elencare $A$ e $B$ e verificare entrambe le leggi di De Morgan calcolandone separatamente i due membri nell'universo $U$.</p>`,
            solution: `<p><strong>1. Elenchiamo gli insiemi.</strong></p><p>$$A=\\{0,2,4,6,8,10,12\\}.$$</p><p>$$B=\\{0,3,6,9,12\\}.$$</p><p>Lo zero appartiene a entrambi scegliendo $k=0$.</p><p><strong>2. Calcoliamo unione e intersezione.</strong></p><p>$$A\\cup B=\\{0,2,3,4,6,8,9,10,12\\}.$$</p><p>$$A\\cap B=\\{0,6,12\\}.$$</p><p><strong>3. Calcoliamo i complementari.</strong></p><p>$$A^c=\\{1,3,5,7,9,11\\}.$$</p><p>$$B^c=\\{1,2,4,5,7,8,10,11\\}.$$</p><p><strong>4. Prima legge: membro sinistro.</strong></p><p>$$(A\\cup B)^c=\\{1,5,7,11\\}.$$</p><p><strong>Prima legge: membro destro.</strong></p><p>$$A^c\\cap B^c=\\{1,5,7,11\\}.$$</p><p><strong>5. Seconda legge: membro sinistro.</strong></p><p>$$(A\\cap B)^c=\\{1,2,3,4,5,7,8,9,10,11\\}.$$</p><p><strong>Seconda legge: membro destro.</strong></p><p>$$A^c\\cup B^c=\\{1,2,3,4,5,7,8,9,10,11\\}.$$</p><p>Le due uguaglianze risultano verificate per gli insiemi assegnati.</p>`
        },
        {
            id: "s01-scritto-4",
            type: "esercizio",
            title: "Scritto 4",
            kind: "scritto",
            source: "integrazione",
            content: `<p>Scrivere:</p><p>$$r=\\frac{-18}{-24},\\qquad s=\\frac{42}{-30},\\qquad t=\\frac{0}{-9}$$</p><p>nella forma unica con denominatore positivo e numeratore e denominatore coprimi. Calcolare $r+s$ e $rs$ nella stessa forma. Risolvere infine $rx=s$ in $\\mathbb{Q}$ e stabilire se esistono soluzioni in $\\mathbb{Z}$ e in $\\mathbb{N}$.</p>`,
            solution: `<p><strong>1. Riduzione di $r$.</strong> Si eliminano i due segni negativi e si divide per $\\operatorname{MCD}(18,24)=6$, ottenendo:</p><p>$$r=\\frac{3}{4}.$$</p><p><strong>2. Riduzione di $s$.</strong> Si porta il segno al numeratore e si divide per $\\operatorname{MCD}(42,30)=6$, ottenendo:</p><p>$$s=-\\frac{7}{5}.$$</p><p><strong>3. Rappresentazione di $t$.</strong></p><p>$$t=\\frac{0}{1}.$$</p><p>Infatti $\\operatorname{MCD}(0,q)=q$ per $q\\gt0$: la coprimalità impone quindi $q=1$.</p><p><strong>4. Somma e prodotto.</strong></p><p>$$r+s=\\frac{15}{20}-\\frac{28}{20}=-\\frac{13}{20}.$$</p><p>$$rs=\\frac{3}{4}\\cdot\\left(-\\frac{7}{5}\\right)=-\\frac{21}{20}.$$</p><p>Entrambe le frazioni sono ridotte ai minimi termini.</p><p><strong>5. Soluzione dell'equazione.</strong> Poiché $r\\neq0$, l'equazione ha un'unica soluzione razionale:</p><p>$$x=\\frac{s}{r}=-\\frac{7}{5}\\cdot\\frac{4}{3}=-\\frac{28}{15}.$$</p><p>La frazione ridotta ha denominatore diverso da $1$, quindi non è un intero. <strong>Non esistono soluzioni in $\\mathbb{Z}$ né in $\\mathbb{N}$.</strong></p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Che cos'è un insieme? Che cos'è l'insieme vuoto?",
            back: "Un insieme è una collezione di oggetti chiamati elementi. L'insieme vuoto, indicato con $\\emptyset$, non contiene alcun elemento."
        },
        {
            type: "definizione",
            front: "Quando un insieme è un sottoinsieme di un altro? Quando l'inclusione è propria?",
            back: "$A\\subseteq B$ significa che ogni elemento di $A$ appartiene a $B$: $\\forall a\\in A,\\;a\\in B$. L'inclusione è propria se inoltre $A\\neq B$, e si scrive $A\\subsetneq B$ o, nella notazione della lezione, $A\\subset B$."
        },
        {
            type: "domanda",
            front: "Come si leggono i quantificatori e i principali simboli logici?",
            back: "$\\forall$ significa «per ogni»; $\\exists$ significa «esiste almeno un»; $\\land$ significa «e»; $\\lor$ significa «oppure» inclusivo; $\\Rightarrow$ significa «implica»; $\\iff$ significa «se e solo se»."
        },
        {
            type: "domanda",
            front: "Come si definiscono i numeri pari e i numeri dispari mediante una proprietà?",
            back: "$P=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}:n=2k\\}$ e $D=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}:n=2k+1\\}$. Il valore di $k$ deve essere naturale."
        },
        {
            type: "tranello",
            front: "Lo zero è un numero pari nella convenzione del corso?",
            back: "Sì. Nel corso $0\\in\\mathbb{N}$ e, scegliendo $k=0$, si ha $0=2\\cdot0$. Quindi $0\\in P$."
        },
        {
            type: "definizione",
            front: "Come si definiscono unione e intersezione?",
            back: "Per $A,B\\subseteq U$, $A\\cup B=\\{x\\in U\\mid x\\in A\\lor x\\in B\\}$ e $A\\cap B=\\{x\\in U\\mid x\\in A\\land x\\in B\\}$. L'unione richiede almeno un'appartenenza; l'intersezione le richiede entrambe."
        },
        {
            type: "tranello",
            front: "L'“oppure” nella definizione di unione esclude gli elementi comuni?",
            back: "No. È inclusivo: gli elementi che appartengono a entrambi gli insiemi appartengono anche all'unione e vengono elencati una sola volta."
        },
        {
            type: "definizione",
            front: "Che cos'è il complementare e quale dato bisogna fissare?",
            back: "Per $A\\subseteq U$, il complementare è $A^c=\\{x\\in U\\mid x\\notin A\\}$. Bisogna fissare l'universo $U$, perché il complementare dipende da esso."
        },
        {
            type: "dimostrazione",
            front: "Perché un insieme e il suo complementare hanno intersezione vuota e unione uguale all'universo?",
            back: "Nessun elemento può appartenere ad $A$ e contemporaneamente non appartenervi, quindi $A\\cap A^c=\\emptyset$. Ogni elemento di $U$ appartiene ad $A$ oppure, se non vi appartiene, ad $A^c$: quindi $A\\cup A^c=U$."
        },
        {
            type: "formula",
            front: "Quali sono le due identità che collegano complementare, unione e intersezione?",
            back: "$(A\\cup B)^c=A^c\\cap B^c$ e $(A\\cap B)^c=A^c\\cup B^c$. Tutti i complementari devono essere riferiti allo stesso universo."
        },
        {
            type: "dimostrazione",
            front: "Come si giustifica graficamente la prima legge di De Morgan?",
            back: "$(A\\cup B)^c$ è la regione dell'universo esterna a entrambi i cerchi. Anche $A^c\\cap B^c$ richiede di essere sia fuori da $A$ sia fuori da $B$. Le due regioni coincidono."
        },
        {
            type: "domanda",
            front: "Come si legge la seconda legge di De Morgan?",
            back: "Non appartenere ad $A\\cap B$ significa essere esclusi da almeno uno dei due insiemi. Occorre quindi appartenere ad $A^c$ oppure a $B^c$, eventualmente a entrambi: $(A\\cap B)^c=A^c\\cup B^c$."
        },
        {
            type: "tranello",
            front: "Verificare un'identità su due insiemi finiti scelti dimostra che vale per tutti gli insiemi?",
            back: "No. Il calcolo verifica l'identità per gli insiemi scelti, ma non sostituisce una dimostrazione generale."
        },
        {
            type: "definizione",
            front: "Quando due insiemi sono disgiunti?",
            back: "Quando non hanno elementi comuni, cioè quando $A\\cap B=\\emptyset$."
        },
        {
            type: "domanda",
            front: "Qual è l'intersezione tra i naturali pari e i multipli di 3?",
            back: "È l'insieme dei multipli di $6$: $P\\cap A=\\{n\\in\\mathbb{N}\\mid\\exists k\\in\\mathbb{N}:n=6k\\}$."
        },
        {
            type: "domanda",
            front: "Come si descrivono i naturali che non sono multipli di 3?",
            back: "Sono quelli che nella divisione per $3$ hanno resto $1$ oppure $2$: $A^c=\\{n\\in\\mathbb{N}\\mid(\\exists k\\in\\mathbb{N}:n=3k+1)\\lor(\\exists k\\in\\mathbb{N}:n=3k+2)\\}$."
        },
        {
            type: "definizione",
            front: "Quando due coppie ordinate sono uguali?",
            back: "$(a,b)=(c,d)$ se e solo se $a=c$ e $b=d$. Le componenti devono coincidere nelle rispettive posizioni."
        },
        {
            type: "tranello",
            front: "Qual è la differenza tra una coppia ordinata e un insieme di due elementi?",
            back: "Nella coppia l'ordine conta: in generale $(a,b)\\neq(b,a)$ se $a\\neq b$. Nell'insieme $\\{a,b\\}=\\{b,a\\}$. Inoltre $\\{a,a\\}=\\{a\\}$ ha un solo elemento, mentre $(a,a)$ ha due componenti coincidenti."
        },
        {
            type: "definizione",
            front: "Che cos'è il prodotto cartesiano?",
            back: "$A\\times B=\\{(a,b)\\mid a\\in A,\\;b\\in B\\}$: è l'insieme delle coppie ordinate con prima componente in $A$ e seconda componente in $B$."
        },
        {
            type: "tranello",
            front: "Il prodotto cartesiano resta sempre uguale scambiando i fattori?",
            back: "No. Nell'esempio $A=\\{1,2,4\\}$ e $B=\\{1,5\\}$, la coppia $(2,5)$ appartiene ad $A\\times B$ ma non a $B\\times A$. In generale $A\\times B\\neq B\\times A$."
        },
        {
            type: "domanda",
            front: "Quali equazioni motivano l'introduzione degli interi e dei razionali nella lezione?",
            back: "$x+5=2$ non ha soluzione in $\\mathbb{N}$ e motiva l'introduzione dei numeri negativi. $2x=1$ non ha soluzione in $\\mathbb{Z}$ e motiva l'introduzione dei quozienti con denominatore non nullo."
        },
        {
            type: "definizione",
            front: "Che cos'è un numero razionale?",
            back: "È un numero esprimibile come $\\frac{p}{q}$ con $p,q\\in\\mathbb{Z}$ e $q\\neq0$."
        },
        {
            type: "domanda",
            front: "Quali condizioni rendono unica la rappresentazione di un razionale come frazione?",
            back: "La frazione deve essere ridotta ai minimi termini e avere denominatore positivo: $p\\in\\mathbb{Z}$, $q\\in\\mathbb{N}\\setminus\\{0\\}$ e $\\operatorname{MCD}(|p|,q)=1$."
        },
        {
            type: "definizione",
            front: "Che cos'è un'operazione binaria su un insieme?",
            back: "È una funzione $f:X\\times X\\to X$: associa a ogni coppia ordinata di elementi di $X$ un unico elemento di $X$. Somma e prodotto sono esempi su $\\mathbb{N}$, $\\mathbb{Z}$ e $\\mathbb{Q}$."
        },
        {
            type: "definizione",
            front: "Come si definisce una relazione su un insieme?",
            back: "Una relazione su $X$ è un sottoinsieme $\\mathcal{R}\\subseteq X\\times X$. Dire che $x$ è in relazione con $y$ significa che $(x,y)\\in\\mathcal{R}$."
        },
        {
            type: "formula",
            front: "Quali proprietà definiscono una relazione d'ordine totale?",
            back: "Per tutti $x,y,z\\in X$: totalità, $(x\\leq y)\\lor(y\\leq x)$; riflessività, $x\\leq x$; antisimmetria, $(x\\leq y\\land y\\leq x)\\Rightarrow x=y$; transitività, $(x\\leq y\\land y\\leq z)\\Rightarrow x\\leq z$."
        },
        {
            type: "tranello",
            front: "L'antisimmetria vieta che valgano entrambe le direzioni di confronto?",
            back: "No. Se valgono sia $x\\leq y$ sia $y\\leq x$, l'antisimmetria impone $x=y$. Per elementi coincidenti entrambe le disuguaglianze sono ammesse."
        },
        {
            type: "domanda",
            front: "Quali coppie rappresentano l'ordine usuale sull'insieme formato da 1 e 2?",
            back: "Per $X=\\{1,2\\}$ si ha $\\mathcal{R}=\\{(1,1),(1,2),(2,2)\\}$. La coppia $(2,1)$ non appartiene alla relazione."
        },
        {
            type: "dimostrazione",
            front: "Come si verifica la transitività nell'esempio dell'ordine su due elementi?",
            back: "Per $X=\\{1,2\\}$ le sole catene sono $1\\leq1\\leq1$, $1\\leq1\\leq2$, $1\\leq2\\leq2$ e $2\\leq2\\leq2$. In ciascuna vale il confronto tra il primo e l'ultimo elemento."
        }
    ]
};

