const LESSON = {
    id: "L21", date: "Lezione 21 — 26 Ott 2026",
    title: "Teoremi sui Limiti di Funzioni, Algebra dei Limiti e Gerarchia degli Infiniti",
    abstract: "Ripresa della definizione di limite di funzione e del Teorema Ponte, usato come motore per trasferire alle funzioni i teoremi già dimostrati per le successioni: unicità, permanenza del segno (due forme) e confronto. Segue la dimostrazione geometrica del limite del seno in zero, l'algebra dei limiti con le forme indeterminate, la gerarchia degli infiniti e i limiti delle funzioni elementari.",

    sections: [
      {
        id: "s21-definizione-limite",
        type: "section",
        title: "Ripasso: definizione di limite di una funzione",
        icon: "📐",
        content: `<p>Riprendiamo da dove avevamo interrotto l'ultima volta, cioè dalla definizione di limite di una funzione.</p>
<p><strong>Definizione (limite di una funzione).</strong> Sia $f: A \\to \\mathbb{R}$ una funzione, con $A \\subseteq \\mathbb{R}$, e sia $x_0$ un punto di accumulazione per $A$. Diciamo che il limite di $f(x)$ per $x$ che tende a $x_0$ è $L \\in \\mathbb{R}$, e scriviamo</p>
<p>$$\\lim_{x \\to x_0} f(x) = L$$</p>
<p>se per ogni intorno $U$ di $L$, esiste un intorno $V$ di $x_0$ tale che per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$, si ha che $f(x) \\in U$.</p>`,
        subsections: [
          {
            subtitle: "Il valore in $x_0$ non conta",
            content: `<p>Nella definizione di limite, il valore della funzione nel punto $x_0$ <strong>non ha alcuna importanza</strong>. La condizione è richiesta per ogni $x$ nell'intorno di $x_0$, escluso il punto $x_0$ stesso. Non ci interessa sapere quanto vale la funzione in $x_0$, o addirittura se la funzione è definita in $x_0$.</p>`
          },
          {
            subtitle: "Il ruolo dell'ipotesi di punto di accumulazione",
            content: `<p>L'ipotesi che $x_0$ sia un punto di accumulazione per $A$ non è un dettaglio tecnico: essa garantisce che l'insieme $V \\cap A \\setminus \\{x_0\\}$ sia <em>non vuoto</em> per ogni intorno $V$ di $x_0$. Senza di essa la definizione sarebbe vuota (soddisfatta da qualunque $L$) e, come vedremo subito, il limite non sarebbe unico.</p>
<p>Conviene fissare da ora una conseguenza che useremo più volte nelle dimostrazioni: se $x_0$ è punto di accumulazione di $A$, allora per ogni $n \\ge 1$ l'intervallo $\\left(x_0 - \\frac{1}{n},\\, x_0 + \\frac{1}{n}\\right)$ contiene almeno un punto di $A$ diverso da $x_0$; possiamo dunque scegliere</p>
<p>$$a_n \\in A \\quad \\text{con} \\quad 0 \\lt |a_n - x_0| \\lt \\frac{1}{n}.$$</p>
<p>La successione $(a_n)_{n \\ge 1}$ così costruita soddisfa $a_n \\in A$, $a_n \\neq x_0$ e $a_n \\to x_0$: è quindi una successione <strong>ammissibile</strong> nel senso del Teorema Ponte. In particolare, almeno una successione ammissibile esiste sempre.</p>`
          },
          {
            subtitle: "Esempio: il valore nel punto è irrilevante",
            content: `<p>Consideriamo una funzione definita così:</p>
<p>$$f(x) = \\begin{cases} 1 & \\text{se } x \\in (0, 1) \\\\ 5 & \\text{se } x = 0 \\end{cases}$$</p>
<p>Il limite per $x$ che tende a $0$ (da destra, in questo caso) di $f(x)$ è $1$:</p>
<p>$$\\lim_{x \\to 0^+} f(x) = 1$$</p>
<p>Non ci interessa che in $x=0$ la funzione valga $5$. Il limite descrive il comportamento della funzione <em>vicino</em> al punto, non <em>nel</em> punto.</p>`
          },
          {
            subtitle: "Anticipazione sulla continuità",
            content: `<p>Se il limite di una funzione in un punto coinciderà con il valore della funzione in quel punto, chiameremo quella proprietà <strong>continuità</strong>. Ma per il momento, ci occupiamo solo della nozione di limite.</p>`
          }
        ]
      },
      {
        id: "s21-teorema-ponte",
        type: "section",
        title: "Il Teorema Ponte",
        icon: "🌉",
        content: `<p>Abbiamo visto un teorema fondamentale che collega i limiti di funzioni ai limiti di successioni. Questo risultato è estremamente potente.</p>
<p><strong>Teorema Ponte.</strong> Sia $f: A \\to \\mathbb{R}$ e $x_0$ un punto di accumulazione per $A$. Allora</p>
<p>$$\\lim_{x \\to x_0} f(x) = L$$</p>
<p>se e solo se per ogni successione $(a_n)_{n \\in \\mathbb{N}}$ tale che:</p>
<ol>
  <li>$a_n \\in A$ per ogni $n \\in \\mathbb{N}$,</li>
  <li>$a_n \\neq x_0$ per ogni $n \\in \\mathbb{N}$,</li>
  <li>$\\lim_{n \\to \\infty} a_n = x_0$,</li>
</ol>
<p>risulta che $\\lim_{n \\to \\infty} f(a_n) = L$.</p>`,
        quote: {
          text: "Questo teorema è \"buono\" perché ci permette di trasportare tutti i teoremi che abbiamo dimostrato per i limiti di successioni ai limiti di funzioni. Lo sforzo che faremo per dimostrare i prossimi teoremi sarà quasi nullo, proprio perché abbiamo già fatto il lavoro pesante con le successioni.",
          src: "Nota del Prof."
        },
        subsections: [
          {
            subtitle: "Come si usa il Teorema Ponte negli esercizi",
            content: `<p>Il Teorema Ponte si usa in due direzioni diverse, ed è importante tenerle distinte.</p>
<ul>
  <li><strong>Direzione costruttiva</strong>: se sappiamo che $\\lim_{x \\to x_0} f(x) = L$, allora possiamo calcolare il limite di $f(a_n)$ lungo <em>qualunque</em> successione $a_n \\to x_0$ ammissibile. È così che si dimostrano i teoremi di questa lezione.</li>
  <li><strong>Direzione negativa</strong>: poiché la condizione deve valere per <em>ogni</em> successione ammissibile, basta esibire <em>due</em> successioni ammissibili $a_n \\to x_0$ e $b_n \\to x_0$ con $$\\lim_{n \\to \\infty} f(a_n) \\neq \\lim_{n \\to \\infty} f(b_n)$$ per concludere che il limite $\\lim_{x \\to x_0} f(x)$ <strong>non esiste</strong>. Questa è la tecnica standard per dimostrare la non esistenza di un limite.</li>
</ul>`
          }
        ],
        formulas: [
          { label: "Teorema Ponte", latex: "\\lim_{x \\to x_0} f(x) = L \\iff \\forall (a_n) \\text{ ammissibile},\\ \\lim_{n \\to \\infty} f(a_n) = L" },
          { label: "Successione ammissibile", latex: "a_n \\in A,\\quad a_n \\neq x_0,\\quad a_n \\to x_0" }
        ]
      },
      {
        id: "s21-integrazione-ponte-negazione",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempio illustrativo: il ponte per negare l'esistenza di un limite.</strong></p>
<p>Consideriamo $f(x) = \\sin\\!\\left(\\frac{1}{x}\\right)$ definita su $A = \\mathbb{R} \\setminus \\{0\\}$, e studiamo il comportamento per $x \\to 0$. Il punto $x_0 = 0$ è di accumulazione per $A$, quindi la domanda ha senso.</p>
<p>Scegliamo due successioni ammissibili, entrambe in $A$, entrambe diverse da $0$ ed entrambe convergenti a $0$:</p>
<p>$$a_n = \\frac{1}{n\\pi}, \\qquad b_n = \\frac{1}{\\frac{\\pi}{2} + 2n\\pi}, \\qquad n \\ge 1.$$</p>
<p>Calcoliamo i valori della funzione lungo queste successioni:</p>
<p>$$f(a_n) = \\sin(n\\pi) = 0 \\quad \\Longrightarrow \\quad \\lim_{n \\to \\infty} f(a_n) = 0,$$</p>
<p>$$f(b_n) = \\sin\\!\\left(\\frac{\\pi}{2} + 2n\\pi\\right) = 1 \\quad \\Longrightarrow \\quad \\lim_{n \\to \\infty} f(b_n) = 1.$$</p>
<p>I due limiti sono diversi ($0 \\neq 1$). Se il limite $\\lim_{x \\to 0} \\sin(1/x)$ esistesse e valesse $L$, per il Teorema Ponte dovremmo avere contemporaneamente $L = 0$ e $L = 1$, che è assurdo. Dunque $\\lim_{x \\to 0} \\sin\\!\\left(\\frac{1}{x}\\right)$ <strong>non esiste</strong>.</p>
<p><strong>Morale operativa</strong>: per negare un limite non si usa la definizione, si cercano due successioni "furbe" che tendano al punto lungo cui la funzione si comporta in modo diverso.</p>`
      },
      {
        id: "s21-unicita",
        type: "section",
        title: "Unicità del limite",
        icon: "🎯",
        content: `<p>Come per le successioni, anche per le funzioni il limite, se esiste, è unico.</p>
<p><strong>Teorema (unicità del limite).</strong> Sia $f: A \\to \\mathbb{R}$ con $A \\subseteq \\mathbb{R}$ e sia $x_0$ un punto di accumulazione per $A$. Se il limite di $f(x)$ per $x \\to x_0$ esiste, allora è unico.</p>`,
        subsections: [
          {
            subtitle: "Dimostrazione",
            content: `<p>La dimostrazione è un'applicazione diretta del teorema ponte e dell'analogo teorema per le successioni.</p>
<p>Supponiamo per assurdo che il limite non sia unico. Ovvero, supponiamo che esistano due limiti distinti $L$ e $M$, con $L \\neq M$:</p>
<p>$$\\lim_{x \\to x_0} f(x) = L \\quad \\text{e} \\quad \\lim_{x \\to x_0} f(x) = M$$</p>
<p><strong>Costruiamo anzitutto una successione ammissibile.</strong> Poiché $x_0$ è un punto di accumulazione di $A$, per ogni $n \\ge 1$ l'intorno $\\left(x_0 - \\frac{1}{n},\\, x_0 + \\frac{1}{n}\\right)$ contiene almeno un punto di $A$ distinto da $x_0$: possiamo quindi scegliere</p>
<p>$$a_n \\in A \\quad \\text{con} \\quad 0 \\lt |a_n - x_0| \\lt \\frac{1}{n}.$$</p>
<p>Da $|a_n - x_0| \\lt 1/n \\to 0$ segue $a_n \\to x_0$, e per costruzione $a_n \\in A$, $a_n \\neq x_0$. La successione $(a_n)$ è dunque ammissibile per il teorema ponte: è esattamente qui che l'ipotesi "$x_0$ punto di accumulazione" entra in gioco, garantendo che una tale successione esista davvero (altrimenti non avremmo nulla su cui ragionare).</p>
<p>Per il teorema ponte, se il limite della funzione è $L$, allora per ogni successione $a_n \\to x_0$ (con $a_n \\in A$, $a_n \\neq x_0$), e in particolare per la successione appena costruita, deve valere $\\lim_{n \\to \\infty} f(a_n) = L$. Allo stesso modo, se il limite della funzione è $M$, allora per la stessa successione $a_n$ (che è ammissibile, quindi il teorema ponte si applica anche con $M$) deve valere $\\lim_{n \\to \\infty} f(a_n) = M$.</p>
<p>Ma la successione di numeri reali $(f(a_n))_{n \\in \\mathbb{N}}$ non può avere due limiti diversi. Per il teorema di unicità del limite per le successioni, deve essere $L = M$. Questo contraddice la nostra ipotesi iniziale che $L \\neq M$. Dunque, l'assurdo deriva dall'aver supposto l'esistenza di due limiti distinti. Il limite deve essere unico.</p>`
          }
        ],
        extra_content: `<p><strong>Osservazione.</strong> Si noti che senza l'ipotesi di punto di accumulazione il teorema sarebbe falso. Se $x_0$ fosse un punto isolato di $A$, non esisterebbe alcuna successione ammissibile, l'insieme $V \\cap A \\setminus \\{x_0\\}$ sarebbe vuoto per qualche intorno $V$ e la definizione di limite risulterebbe verificata da <em>ogni</em> numero reale $L$.</p>`
      },
      {
        id: "s21-permanenza-i",
        type: "section",
        title: "Permanenza del segno — I forma",
        icon: "➕",
        content: `<p>Anche questo teorema ha un analogo per le successioni e si dimostra in modo simile. Lo presentiamo in due forme.</p>
<p><strong>Teorema (permanenza del segno, I forma).</strong> Sia $f: A \\to \\mathbb{R}$ con $A \\subseteq \\mathbb{R}$, sia $x_0$ un punto di accumulazione per $A$ e sia $\\lim_{x \\to x_0} f(x) = L$ con $L \\in \\mathbb{R}$. Se $L \\gt 0$, allora esiste un intorno $V$ di $x_0$ tale che $f(x) \\gt 0$ per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$.</p>`,
        subsections: [
          {
            subtitle: "Dimostrazione",
            content: `<p>L'idea è che se il limite $L$ è positivo, possiamo scegliere un intorno di $L$ abbastanza piccolo da contenere solo numeri positivi.</p>
<p>Poiché $L \\gt 0$, possiamo scegliere $\\epsilon = L/2$. Questo $\\epsilon$ è positivo. Consideriamo l'intorno $U$ di $L$ dato da $U = (L-\\epsilon, L+\\epsilon) = (L/2, 3L/2)$. Ogni elemento di questo intorno $U$ è strettamente positivo.</p>
<p>Per la definizione di limite, in corrispondenza di questo intorno $U$, esiste un intorno $V$ di $x_0$ tale che per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$, si ha $f(x) \\in U$. Ma se $f(x) \\in U$, allora $f(x) \\gt L/2 \\gt 0$. Quindi, per tutti questi $x$, la funzione $f(x)$ è positiva.</p>`
          }
        ],
        formulas: [
          { label: "Scelta chiave di epsilon", latex: "\\epsilon = \\frac{L}{2} \\quad \\Rightarrow \\quad U = \\left(\\frac{L}{2}, \\frac{3L}{2}\\right) \\subset (0, +\\infty)" }
        ]
      },
      {
        id: "s21-integrazione-perm-i",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempio illustrativo: come si usa la I forma.</strong></p>
<p>Sia $f(x) = x^2 - 3x + 1$ e consideriamo $x_0 = 0$. Si ha $\\lim_{x \\to 0} f(x) = 1 \\gt 0$.</p>
<p>La I forma ci garantisce, senza fare alcun calcolo esplicito, che esiste un intorno di $0$ in cui $f(x) \\gt 0$: ripercorrendo la dimostrazione con $L = 1$ ed $\\epsilon = L/2 = 1/2$, in tale intorno vale addirittura $f(x) \\gt 1/2$.</p>
<p><strong>A cosa serve negli esercizi</strong>: questo è il risultato che si invoca quando bisogna sapere che una quantità <em>non si annulla e non cambia segno</em> vicino al punto, per esempio per poter dividere per $f(x)$, per studiare $\\frac{1}{f(x)}$ oppure per applicare un logaritmo. Non fornisce il valore dell'intorno, ma garantisce che ne esista uno: nella pratica è sufficiente.</p>`
      },
      {
        id: "s21-permanenza-ii",
        type: "section",
        title: "Permanenza del segno — II forma",
        icon: "➖",
        content: `<p><strong>Teorema (permanenza del segno, II forma).</strong> Sia $f(x) \\ge 0$ in un intorno di $x_0$ (cioè, $\\exists V$ intorno di $x_0$ tale che $f(x) \\ge 0$ per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$). Se esiste il limite $\\lim_{x \\to x_0} f(x) = L$, allora $L \\ge 0$.</p>`,
        subsections: [
          {
            subtitle: "Dimostrazione",
            content: `<p>Procediamo per assurdo, usando il teorema ponte. Supponiamo per assurdo che $L \\lt 0$.</p>
<p>Come osservato nella dimostrazione dell'unicità, poiché $x_0$ è un punto di accumulazione di $A$ possiamo scegliere, per ogni $n \\ge 1$, un punto $a_n \\in A$ con $0 \\lt |a_n - x_0| \\lt 1/n$: la successione $(a_n)$ così ottenuta verifica $a_n \\in A$, $a_n \\neq x_0$ e $a_n \\to x_0$, ed è quindi ammissibile per il teorema ponte. Fissiamo questa successione.</p>
<p>Per il teorema ponte, poiché $\\lim_{x \\to x_0} f(x) = L$, per ogni successione $a_n \\to x_0$ (con $a_n \\in A$, $a_n \\neq x_0$) si ha che $\\lim_{n \\to \\infty} f(a_n) = L$; in particolare questo vale per la successione appena costruita.</p>
<p>Dato che $a_n \\to x_0$, per la definizione di limite di una successione, la successione $(a_n)$ entra definitivamente nell'intorno $V$ dove $f(x) \\ge 0$. Cioè, esiste un indice $n_0$ tale che per ogni $n \\gt n_0$, $a_n \\in V$. Di conseguenza, per $n \\gt n_0$, vale $f(a_n) \\ge 0$ (si usa qui che $a_n \\in A$ e $a_n \\neq x_0$, cioè che $a_n \\in V \\cap A \\setminus \\{x_0\\}$).</p>
<p>Abbiamo quindi una successione $(f(a_n))_{n \\in \\mathbb{N}}$ che è definitivamente a termini non negativi. Per il teorema della permanenza del segno per le successioni, il suo limite deve essere maggiore o uguale a zero. Quindi $L = \\lim_{n \\to \\infty} f(a_n) \\ge 0$.</p>
<p>Questo contraddice la nostra ipotesi iniziale $L \\lt 0$. L'assurdo dimostra che la tesi è vera, cioè $L \\ge 0$.</p>`
          }
        ]
      },
      {
        id: "s21-integrazione-perm-ii",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempio illustrativo: perché la II forma dà solo $L \\ge 0$.</strong></p>
<p>È naturale chiedersi se, assumendo l'ipotesi <em>forte</em> $f(x) \\gt 0$ in un intorno di $x_0$, si possa concludere $L \\gt 0$. La risposta è <strong>no</strong>, e il controesempio è elementare.</p>
<p>Prendiamo $f(x) = x^2$ su $A = \\mathbb{R} \\setminus \\{0\\}$ e $x_0 = 0$. Per ogni $x \\in A$ si ha $f(x) = x^2 \\gt 0$ (disuguaglianza <em>stretta</em>, in ogni intorno di $0$), e tuttavia</p>
<p>$$\\lim_{x \\to 0} x^2 = 0.$$</p>
<p>Dunque la disuguaglianza stretta sui valori della funzione si "indebolisce" nel passaggio al limite: il meglio che si può concludere è $L \\ge 0$.</p>
<p><strong>Morale operativa</strong>: il passaggio al limite conserva le disuguaglianze <em>larghe</em> ($\\ge$, $\\le$), non quelle <em>strette</em> ($\\gt$, $\\lt$). Negli esercizi si può quindi scrivere "$f \\ge g$ vicino a $x_0$ implica $\\lim f \\ge \\lim g$", ma non si può mai dedurre una disuguaglianza stretta tra i limiti partendo da una disuguaglianza stretta tra le funzioni. Si noti anche l'asimmetria con la I forma: lì si parte da $L \\gt 0$ (ipotesi sul limite) e si ottiene $f(x) \\gt 0$ vicino al punto; qui si parte da $f(x) \\ge 0$ (ipotesi sulla funzione) e si ottiene solo $L \\ge 0$.</p>`
      },
      {
        id: "s21-confronto",
        type: "section",
        title: "Teorema del Confronto (o dei due Carabinieri)",
        icon: "👮",
        content: `<p>Questo è un altro strumento potentissimo per calcolare i limiti, esattamente come lo era per le successioni.</p>
<p><strong>Teorema del Confronto.</strong> Siano $f(x)$, $g(x)$, $h(x)$ tre funzioni definite su un insieme $A$, e sia $x_0$ un punto di accumulazione per $A$. Supponiamo che esista un intorno $V$ di $x_0$ tale che per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$ valga</p>
<p>$$f(x) \\le g(x) \\le h(x)$$</p>
<p>Se inoltre i limiti delle funzioni "esterne" esistono e coincidono:</p>
<p>$$\\lim_{x \\to x_0} f(x) = \\lim_{x \\to x_0} h(x) = L$$</p>
<p>allora anche il limite della funzione "interna" esiste e vale $L$:</p>
<p>$$\\lim_{x \\to x_0} g(x) = L$$</p>`,
        subsections: [
          {
            subtitle: "Dimostrazione",
            content: `<p>Ancora una volta, la dimostrazione si basa sul teorema ponte e sull'analogo teorema per le successioni.</p>
<p>Vogliamo dimostrare che $\\lim_{x \\to x_0} g(x) = L$. Usando il teorema ponte, questo equivale a dimostrare che per una <em>qualunque</em> successione $a_n \\to x_0$ (con $a_n \\in A$, $a_n \\neq x_0$), si ha $\\lim_{n \\to \\infty} g(a_n) = L$.</p>
<p>Consideriamo quindi una generica successione $(a_n)$ con le proprietà richieste (sappiamo che almeno una ne esiste, essendo $x_0$ punto di accumulazione di $A$).</p>
<ol>
  <li><strong>Cosa sappiamo dei limiti di $f(a_n)$ e $h(a_n)$?</strong> Dalle ipotesi, sappiamo che $\\lim_{x \\to x_0} f(x) = L$ e $\\lim_{x \\to x_0} h(x) = L$. Applicando il teorema ponte a $f$ e $h$, concludiamo che $$\\lim_{n \\to \\infty} f(a_n) = L \\quad \\text{e} \\quad \\lim_{n \\to \\infty} h(a_n) = L$$</li>
  <li><strong>Cosa sappiamo della relazione tra le successioni?</strong> Sappiamo che $f(x) \\le g(x) \\le h(x)$ in un intorno $V$ di $x_0$. Poiché $a_n \\to x_0$, la successione $(a_n)$ cade definitivamente in questo intorno $V$. Quindi, esiste un $n_0$ tale che per ogni $n \\gt n_0$ vale $$f(a_n) \\le g(a_n) \\le h(a_n)$$</li>
  <li><strong>Applichiamo il teorema del confronto per le successioni.</strong> Abbiamo tre successioni di numeri reali, $(f(a_n))$, $(g(a_n))$, $(h(a_n))$. La successione $(g(a_n))$ è (definitivamente) compresa tra due successioni che convergono entrambe allo stesso limite $L$. Per il teorema dei due carabinieri per le successioni, anche la successione $(g(a_n))$ deve convergere a $L$: $$\\lim_{n \\to \\infty} g(a_n) = L$$</li>
  <li><strong>Conclusione tramite il teorema ponte.</strong> Abbiamo dimostrato che per una <em>qualsiasi</em> successione $a_n \\to x_0$, il limite di $g(a_n)$ è $L$. Poiché la scelta di $(a_n)$ era arbitraria, il teorema ponte (usato nella direzione inversa) ci permette di concludere che il limite della funzione $g(x)$ è proprio $L$: $$\\lim_{x \\to x_0} g(x) = L$$</li>
</ol>
<p>Questo completa la dimostrazione.</p>`
          },
          {
            subtitle: "Strategia d'uso del confronto",
            content: `<p>Il teorema del confronto non si usa per "semplificare" un'espressione, ma per <em>incastrarla</em> tra due funzioni di cui sappiamo già calcolare il limite. Lo schema è sempre lo stesso:</p>
<ol>
  <li>si individua nella funzione un fattore <strong>limitato</strong> (tipicamente $\\sin$, $\\cos$, una parte frazionaria, un segno) di cui non si sa calcolare il limite;</li>
  <li>si sostituisce quel fattore con le sue stime estreme, ottenendo le due funzioni "carabiniere";</li>
  <li>si verifica che le due funzioni esterne abbiano lo stesso limite $L$;</li>
  <li>si conclude che anche la funzione centrale tende a $L$.</li>
</ol>
<p>È lo strumento d'elezione quando il limite <strong>non</strong> si può calcolare con l'algebra dei limiti, perché un pezzo della funzione non ammette limite.</p>`
          }
        ]
      },
      {
        id: "s21-integrazione-xsin",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempio illustrativo: $\\lim_{x \\to 0} x \\sin(1/x)$.</strong></p>
<p>Calcoliamo $\\lim_{x \\to 0} x \\sin\\!\\left(\\frac{1}{x}\\right)$, dove la funzione $g(x) = x \\sin(1/x)$ è definita su $A = \\mathbb{R} \\setminus \\{0\\}$ e $x_0 = 0$ è punto di accumulazione per $A$.</p>
<p><strong>Perché non basta l'algebra dei limiti.</strong> Si potrebbe pensare di scrivere il limite come prodotto $\\left(\\lim_{x \\to 0} x\\right) \\cdot \\left(\\lim_{x \\to 0} \\sin(1/x)\\right)$, ma abbiamo visto sopra che $\\lim_{x \\to 0} \\sin(1/x)$ <strong>non esiste</strong>: il teorema sul prodotto dei limiti non è applicabile. Serve il confronto.</p>
<p><strong>Passo 1: la stima.</strong> Per ogni $t \\in \\mathbb{R}$ vale $-1 \\le \\sin t \\le 1$, dunque per ogni $x \\neq 0$</p>
<p>$$\\left| \\sin\\!\\left(\\frac{1}{x}\\right) \\right| \\le 1 \\quad \\Longrightarrow \\quad \\left| x \\sin\\!\\left(\\frac{1}{x}\\right) \\right| = |x| \\cdot \\left| \\sin\\!\\left(\\frac{1}{x}\\right) \\right| \\le |x|.$$</p>
<p>Equivalentemente, per ogni $x \\in A$:</p>
<p>$$-|x| \\;\\le\\; x \\sin\\!\\left(\\frac{1}{x}\\right) \\;\\le\\; |x|.$$</p>
<p>Si noti che si è usato il valore assoluto $|x|$ e non $x$: in questo modo la catena di disuguaglianze è valida sia per $x \\gt 0$ sia per $x \\lt 0$, cioè in un intero intorno di $0$ privato dell'origine. (Se avessimo scritto $-x \\le x\\sin(1/x) \\le x$ la stima sarebbe stata falsa per $x \\lt 0$: è l'errore tipico da evitare.)</p>
<p><strong>Passo 2: i due carabinieri.</strong> Poniamo $f(x) = -|x|$, $g(x) = x \\sin\\!\\left(\\frac{1}{x}\\right)$, $h(x) = |x|$, così che $f(x) \\le g(x) \\le h(x)$ su tutto $A$, in particolare in ogni intorno di $0$ privato di $0$.</p>
<p><strong>Passo 3: i limiti esterni.</strong> Si ha $\\lim_{x \\to 0} \\left(-|x|\\right) = 0$ e $\\lim_{x \\to 0} |x| = 0$, quindi i due limiti esistono e coincidono, con valore comune $L = 0$.</p>
<p><strong>Passo 4: conclusione.</strong> Per il Teorema del Confronto, il limite della funzione centrale esiste e vale $L = 0$:</p>
<p>$$\\lim_{x \\to 0} x \\sin\\!\\left(\\frac{1}{x}\\right) = 0$$</p>
<p><strong>Osservazione sul risultato.</strong> Il fattore $\\sin(1/x)$ oscilla indefinitamente tra $-1$ e $1$ anche in intorni piccolissimi di $0$, ma il fattore $x$, che tende a $0$, "schiaccia" queste oscillazioni: il prodotto di una quantità infinitesima per una quantità <em>limitata</em> è infinitesimo. Questa è una regola generale che conviene memorizzare, e si dimostra sempre con lo stesso confronto $-M|x| \\le x \\cdot (\\text{funzione limitata da } M) \\le M|x|$.</p>`
      },
      {
        id: "s21-integrazione-schema",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🗺️",
        content: `<p><strong>Quale teorema usare? Un piccolo schema riassuntivo.</strong></p>
<p>Alla fine di questa lezione abbiamo quattro strumenti; conviene sapere <em>quando</em> usare ciascuno.</p>
<ul>
  <li><strong>Teorema Ponte</strong>: lo si usa quasi sempre per <em>negare</em> l'esistenza di un limite, esibendo due successioni ammissibili con limiti di $f$ diversi (esempio: $\\sin(1/x)$ in $0$). È anche il motore teorico di tutte le dimostrazioni di questa lezione.</li>
  <li><strong>Unicità</strong>: giustifica la notazione $\\lim_{x \\to x_0} f(x) = L$ e legittima il metodo "calcolo il limite in un modo qualsiasi, il risultato è quello".</li>
  <li><strong>Permanenza del segno, I forma</strong>: da un'informazione sul <em>limite</em> si ricava il segno della <em>funzione</em> vicino al punto. Serve quando occorre garantire che $f$ non si annulli (divisioni, logaritmi, radici).</li>
  <li><strong>Permanenza del segno, II forma</strong>: da un'informazione sulla <em>funzione</em> si ricava il segno del <em>limite</em>. Attenzione: le disuguaglianze strette diventano larghe (caso $x^2$ in $0$).</li>
  <li><strong>Confronto</strong>: si usa per <em>calcolare</em> un limite quando l'algebra dei limiti fallisce perché un fattore è limitato ma oscillante.</li>
</ul>`
      },
      {
        id: "s21-limite-seno",
        type: "section",
        title: "Un limite notevole geometrico: $\\lim_{x \\to 0} \\sin x$",
        icon: "🔵",
        content: `<p>Iniziamo con la dimostrazione di un limite fondamentale, quello della funzione seno per $x$ che tende a zero. Utilizzeremo un approccio geometrico basato sul confronto tra aree.</p>
<p>Consideriamo una circonferenza goniometrica (raggio $r=1$) e un angolo $x$ nel primo quadrante, misurato in radianti, con $0 \\lt x \\lt \\frac{\\pi}{2}$.</p>
<p>La figura seguente mostra il confronto geometrico tra l'area del triangolo $OAP$ (in rosso) e l'area del settore circolare $OAP$ (in blu); le frecce indicano i punti $O$, $A(1,0)$ e $P(\\cos x, \\sin x)$, i lati $OP = 1$ e $OA = 1$ e l'altezza $\\sin x$ (tratteggiata).</p>
<figure class="figura" data-id="analisi1_lez21b_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="analisi1_lez21b_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="257.521pt" height="181.985pt" viewBox="0 0 257.521 181.985" version="1.2"><style>#analisi1_lez21b_d1 [fill="rgb(0%,0%,0%)"],#analisi1_lez21b_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#analisi1_lez21b_d1 [stroke="rgb(0%,0%,0%)"],#analisi1_lez21b_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#analisi1_lez21b_d1 [fill="rgb(39.99939%,39.99939%,100%)"],#analisi1_lez21b_d1 [style*="fill:rgb(39.99939%,39.99939%,100%)"]{fill:#6666ff!important}[data-mode="light"] #analisi1_lez21b_d1 [fill="rgb(39.99939%,39.99939%,100%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="fill:rgb(39.99939%,39.99939%,100%)"]{fill:#6666ff!important}#analisi1_lez21b_d1 [stroke="rgb(39.99939%,39.99939%,100%)"],#analisi1_lez21b_d1 [style*="stroke:rgb(39.99939%,39.99939%,100%)"]{stroke:#6666ff!important}[data-mode="light"] #analisi1_lez21b_d1 [stroke="rgb(39.99939%,39.99939%,100%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="stroke:rgb(39.99939%,39.99939%,100%)"]{stroke:#6666ff!important}#analisi1_lez21b_d1 [fill="rgb(100%,29.998779%,29.998779%)"],#analisi1_lez21b_d1 [style*="fill:rgb(100%,29.998779%,29.998779%)"]{fill:#ff5c5c!important}[data-mode="light"] #analisi1_lez21b_d1 [fill="rgb(100%,29.998779%,29.998779%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="fill:rgb(100%,29.998779%,29.998779%)"]{fill:#ff4c4c!important}#analisi1_lez21b_d1 [stroke="rgb(100%,29.998779%,29.998779%)"],#analisi1_lez21b_d1 [style*="stroke:rgb(100%,29.998779%,29.998779%)"]{stroke:#ff5c5c!important}[data-mode="light"] #analisi1_lez21b_d1 [stroke="rgb(100%,29.998779%,29.998779%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="stroke:rgb(100%,29.998779%,29.998779%)"]{stroke:#ff4c4c!important}#analisi1_lez21b_d1 [fill="rgb(0%,0%,54.998779%)"],#analisi1_lez21b_d1 [style*="fill:rgb(0%,0%,54.998779%)"]{fill:#5c5cff!important}[data-mode="light"] #analisi1_lez21b_d1 [fill="rgb(0%,0%,54.998779%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="fill:rgb(0%,0%,54.998779%)"]{fill:#00008c!important}#analisi1_lez21b_d1 [stroke="rgb(0%,0%,54.998779%)"],#analisi1_lez21b_d1 [style*="stroke:rgb(0%,0%,54.998779%)"]{stroke:#5c5cff!important}[data-mode="light"] #analisi1_lez21b_d1 [stroke="rgb(0%,0%,54.998779%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="stroke:rgb(0%,0%,54.998779%)"]{stroke:#00008c!important}#analisi1_lez21b_d1 [fill="rgb(59.999084%,0%,0%)"],#analisi1_lez21b_d1 [style*="fill:rgb(59.999084%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #analisi1_lez21b_d1 [fill="rgb(59.999084%,0%,0%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="fill:rgb(59.999084%,0%,0%)"]{fill:#990000!important}#analisi1_lez21b_d1 [stroke="rgb(59.999084%,0%,0%)"],#analisi1_lez21b_d1 [style*="stroke:rgb(59.999084%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #analisi1_lez21b_d1 [stroke="rgb(59.999084%,0%,0%)"],[data-mode="light"] #analisi1_lez21b_d1 [style*="stroke:rgb(59.999084%,0%,0%)"]{stroke:#990000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph0-1">
<path style="stroke:none;" d="M 4.171875 -1.140625 C 4.171875 -1.21875 4.109375 -1.234375 4.0625 -1.234375 C 3.953125 -1.234375 3.9375 -1.1875 3.921875 -1.109375 C 3.765625 -0.578125 3.3125 -0.140625 2.84375 -0.140625 C 2.578125 -0.140625 2.390625 -0.3125 2.390625 -0.65625 C 2.390625 -0.8125 2.4375 -1 2.546875 -1.4375 L 2.828125 -2.53125 C 2.9375 -2.9375 3.21875 -3.28125 3.578125 -3.28125 C 3.609375 -3.28125 3.8125 -3.28125 3.984375 -3.171875 C 3.640625 -3.078125 3.625 -2.78125 3.625 -2.75 C 3.625 -2.5625 3.75 -2.453125 3.921875 -2.453125 C 4.109375 -2.453125 4.375 -2.578125 4.375 -2.921875 C 4.375 -3.375 3.875 -3.5 3.578125 -3.5 C 3.203125 -3.5 2.90625 -3.25 2.71875 -2.9375 C 2.546875 -3.359375 2.125 -3.5 1.8125 -3.5 C 0.9375 -3.5 0.453125 -2.515625 0.453125 -2.296875 C 0.453125 -2.21875 0.515625 -2.1875 0.578125 -2.1875 C 0.671875 -2.1875 0.6875 -2.234375 0.703125 -2.328125 C 0.890625 -2.90625 1.375 -3.28125 1.78125 -3.28125 C 2.09375 -3.28125 2.25 -3.0625 2.25 -2.78125 C 2.25 -2.609375 2.140625 -2.25 2.078125 -2 L 1.8125 -0.90625 C 1.703125 -0.484375 1.421875 -0.140625 1.0625 -0.140625 C 1.03125 -0.140625 0.8125 -0.140625 0.65625 -0.25 C 1.015625 -0.34375 1.015625 -0.6875 1.015625 -0.6875 C 1.015625 -0.859375 0.875 -0.984375 0.703125 -0.984375 C 0.484375 -0.984375 0.25 -0.796875 0.25 -0.5 C 0.25 -0.125 0.640625 0.078125 1.046875 0.078125 C 1.46875 0.078125 1.765625 -0.234375 1.90625 -0.5 C 2.078125 -0.109375 2.453125 0.078125 2.828125 0.078125 C 3.703125 0.078125 4.171875 -0.921875 4.171875 -1.140625 Z M 4.171875 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph0-2">
<path style="stroke:none;" d="M 6.296875 -4.21875 C 6.296875 -4.890625 5.65625 -5.4375 4.625 -5.4375 L 1.953125 -5.4375 C 1.8125 -5.4375 1.703125 -5.4375 1.703125 -5.28125 C 1.703125 -5.171875 1.8125 -5.171875 1.9375 -5.171875 C 2.1875 -5.171875 2.421875 -5.171875 2.421875 -5.046875 C 2.421875 -5.015625 2.421875 -5 2.390625 -4.90625 L 1.328125 -0.625 C 1.25 -0.328125 1.234375 -0.265625 0.671875 -0.265625 C 0.5 -0.265625 0.40625 -0.265625 0.40625 -0.109375 C 0.40625 -0.078125 0.421875 0 0.53125 0 C 0.6875 0 0.875 -0.015625 1.03125 -0.03125 L 1.53125 -0.03125 C 2.296875 -0.03125 2.5 0 2.5625 0 C 2.609375 0 2.71875 0 2.71875 -0.15625 C 2.71875 -0.265625 2.609375 -0.265625 2.484375 -0.265625 C 2.453125 -0.265625 2.3125 -0.265625 2.171875 -0.28125 C 2.015625 -0.296875 2 -0.3125 2 -0.390625 C 2 -0.421875 2.015625 -0.484375 2.015625 -0.515625 L 2.5 -2.484375 L 3.953125 -2.484375 C 5.09375 -2.484375 6.296875 -3.28125 6.296875 -4.21875 Z M 5.515625 -4.390625 C 5.515625 -4.28125 5.484375 -3.578125 5.03125 -3.140625 C 4.921875 -3.015625 4.53125 -2.71875 3.75 -2.71875 L 2.546875 -2.71875 L 3.078125 -4.875 C 3.15625 -5.140625 3.171875 -5.171875 3.484375 -5.171875 L 4.359375 -5.171875 C 5.015625 -5.171875 5.515625 -4.984375 5.515625 -4.390625 Z M 5.515625 -4.390625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph0-3">
<path style="stroke:none;" d="M 1.703125 -0.03125 C 1.703125 -0.53125 1.515625 -0.875 1.171875 -0.875 C 0.890625 -0.875 0.734375 -0.65625 0.734375 -0.453125 C 0.734375 -0.21875 0.875 0 1.171875 0 C 1.375 0 1.484375 -0.125 1.484375 -0.125 C 1.484375 0.390625 1.375 0.84375 0.875 1.34375 C 0.84375 1.375 0.828125 1.390625 0.828125 1.421875 C 0.828125 1.484375 0.90625 1.53125 0.953125 1.53125 C 1.046875 1.53125 1.703125 0.90625 1.703125 -0.03125 Z M 1.703125 -0.03125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph0-4">
<path style="stroke:none;" d="M 6.21875 -3.421875 C 6.21875 -4.71875 5.3125 -5.59375 4.03125 -5.59375 C 2.171875 -5.59375 0.40625 -3.765625 0.40625 -1.984375 C 0.40625 -0.765625 1.265625 0.171875 2.59375 0.171875 C 4.375 0.171875 6.21875 -1.546875 6.21875 -3.421875 Z M 5.46875 -3.703125 C 5.46875 -3.265625 5.3125 -2.015625 4.484375 -1.046875 C 4.03125 -0.5 3.34375 -0.09375 2.671875 -0.09375 C 1.859375 -0.09375 1.1875 -0.671875 1.1875 -1.8125 C 1.1875 -1.9375 1.1875 -3.265625 2.109375 -4.390625 C 2.40625 -4.75 3.125 -5.359375 3.984375 -5.359375 C 4.765625 -5.359375 5.46875 -4.796875 5.46875 -3.703125 Z M 5.46875 -3.703125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph0-5">
<path style="stroke:none;" d="M 6.078125 -0.15625 C 6.078125 -0.265625 5.96875 -0.265625 5.84375 -0.265625 C 5.40625 -0.265625 5.40625 -0.328125 5.375 -0.53125 L 4.75 -5.453125 C 4.71875 -5.625 4.71875 -5.671875 4.578125 -5.671875 C 4.4375 -5.671875 4.390625 -5.59375 4.34375 -5.515625 L 1.46875 -0.953125 C 1.109375 -0.359375 0.78125 -0.28125 0.5 -0.265625 C 0.40625 -0.25 0.3125 -0.25 0.3125 -0.109375 C 0.3125 -0.09375 0.328125 0 0.421875 0 C 0.5 0 0.546875 -0.03125 1.109375 -0.03125 C 1.640625 -0.03125 1.828125 0 1.875 0 C 1.90625 0 2.03125 0 2.03125 -0.15625 C 2.03125 -0.25 1.921875 -0.265625 1.890625 -0.265625 C 1.71875 -0.265625 1.546875 -0.328125 1.546875 -0.515625 C 1.546875 -0.625 1.609375 -0.734375 1.765625 -0.96875 L 2.3125 -1.84375 L 4.484375 -1.84375 L 4.65625 -0.5 C 4.65625 -0.375 4.515625 -0.265625 4.140625 -0.265625 C 4.015625 -0.265625 3.90625 -0.265625 3.90625 -0.109375 C 3.90625 -0.109375 3.921875 0 4.046875 0 C 4.125 0 4.4375 -0.015625 4.5 -0.03125 L 5 -0.03125 C 5.71875 -0.03125 5.859375 0 5.921875 0 C 5.953125 0 6.078125 0 6.078125 -0.15625 Z M 4.453125 -2.09375 L 2.46875 -2.09375 L 4.125 -4.71875 Z M 4.453125 -2.09375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-1">
<path style="stroke:none;" d="M 2.8125 1.890625 C 2.8125 1.859375 2.796875 1.859375 2.703125 1.75 C 1.609375 0.71875 1.34375 -0.75 1.34375 -1.984375 C 1.34375 -4.28125 2.28125 -5.359375 2.6875 -5.71875 C 2.796875 -5.828125 2.8125 -5.828125 2.8125 -5.875 C 2.8125 -5.90625 2.78125 -5.96875 2.703125 -5.96875 C 2.5625 -5.96875 2.171875 -5.5625 2.109375 -5.484375 C 1.046875 -4.375 0.8125 -2.9375 0.8125 -1.984375 C 0.8125 -0.203125 1.5625 1.21875 2.640625 1.984375 C 2.71875 1.984375 2.8125 1.984375 2.8125 1.890625 Z M 2.8125 1.890625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-2">
<path style="stroke:none;" d="M 3.5 -0.953125 C 3.5 -1.046875 3.40625 -1.046875 3.375 -1.046875 C 3.328125 -1.046875 3.28125 -1.046875 3.265625 -0.96875 C 3.203125 -0.796875 2.984375 -0.171875 2.1875 -0.171875 C 1.6875 -0.171875 0.984375 -0.546875 0.984375 -1.71875 C 0.984375 -2.875 1.578125 -3.296875 2.15625 -3.296875 C 2.234375 -3.296875 2.640625 -3.296875 2.921875 -3.15625 C 2.703125 -3.078125 2.671875 -2.90625 2.671875 -2.8125 C 2.671875 -2.59375 2.828125 -2.4375 3.046875 -2.4375 C 3.25 -2.4375 3.421875 -2.578125 3.421875 -2.8125 C 3.421875 -3.3125 2.875 -3.546875 2.125 -3.546875 C 1.03125 -3.546875 0.28125 -2.671875 0.28125 -1.71875 C 0.28125 -0.703125 1.109375 0.078125 2.109375 0.078125 C 3.234375 0.078125 3.5 -0.859375 3.5 -0.953125 Z M 3.5 -0.953125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-3">
<path style="stroke:none;" d="M 3.984375 -1.6875 C 3.984375 -2.6875 3.15625 -3.546875 2.109375 -3.546875 C 1.0625 -3.546875 0.234375 -2.6875 0.234375 -1.6875 C 0.234375 -0.703125 1.09375 0.078125 2.109375 0.078125 C 3.140625 0.078125 3.984375 -0.703125 3.984375 -1.6875 Z M 3.265625 -1.765625 C 3.265625 -1.40625 3.25 -0.96875 3.03125 -0.625 C 2.8125 -0.3125 2.453125 -0.171875 2.109375 -0.171875 C 1.671875 -0.171875 1.34375 -0.375 1.171875 -0.65625 C 0.96875 -0.984375 0.953125 -1.375 0.953125 -1.765625 C 0.953125 -2.0625 0.953125 -2.546875 1.1875 -2.890625 C 1.40625 -3.171875 1.734375 -3.328125 2.109375 -3.328125 C 2.515625 -3.328125 2.859375 -3.125 3.046875 -2.84375 C 3.265625 -2.515625 3.265625 -2.078125 3.265625 -1.765625 Z M 3.265625 -1.765625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-4">
<path style="stroke:none;" d="M 3.046875 -1.03125 C 3.046875 -1.40625 2.8125 -1.96875 1.875 -2.140625 C 1.8125 -2.15625 1.359375 -2.234375 1.328125 -2.234375 C 1.078125 -2.296875 0.703125 -2.453125 0.703125 -2.78125 C 0.703125 -3.015625 0.875 -3.34375 1.640625 -3.34375 C 2.53125 -3.34375 2.5625 -2.703125 2.578125 -2.46875 C 2.59375 -2.40625 2.640625 -2.390625 2.703125 -2.390625 C 2.828125 -2.390625 2.828125 -2.4375 2.828125 -2.59375 L 2.828125 -3.34375 C 2.828125 -3.46875 2.828125 -3.546875 2.734375 -3.546875 C 2.6875 -3.546875 2.671875 -3.546875 2.53125 -3.421875 C 2.515625 -3.40625 2.453125 -3.34375 2.421875 -3.34375 C 2.421875 -3.34375 2.40625 -3.34375 2.359375 -3.375 C 2.234375 -3.453125 2 -3.546875 1.640625 -3.546875 C 0.53125 -3.546875 0.28125 -2.9375 0.28125 -2.5625 C 0.28125 -2.15625 0.578125 -1.9375 0.59375 -1.90625 C 0.921875 -1.671875 1.09375 -1.640625 1.625 -1.546875 C 2 -1.46875 2.609375 -1.359375 2.609375 -0.8125 C 2.609375 -0.515625 2.40625 -0.140625 1.671875 -0.140625 C 0.875 -0.140625 0.640625 -0.765625 0.546875 -1.1875 C 0.515625 -1.28125 0.5 -1.328125 0.40625 -1.328125 C 0.28125 -1.328125 0.28125 -1.265625 0.28125 -1.109375 L 0.28125 -0.125 C 0.28125 0 0.28125 0.078125 0.375 0.078125 C 0.421875 0.078125 0.4375 0.078125 0.578125 -0.078125 C 0.625 -0.125 0.703125 -0.21875 0.75 -0.265625 C 1.109375 0.0625 1.484375 0.078125 1.6875 0.078125 C 2.703125 0.078125 3.046875 -0.5 3.046875 -1.03125 Z M 3.046875 -1.03125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-5">
<path style="stroke:none;" d="M 2.0625 0 L 2.0625 -0.265625 C 1.546875 -0.265625 1.515625 -0.296875 1.515625 -0.609375 L 1.515625 -3.5 L 0.359375 -3.421875 L 0.359375 -3.15625 C 0.859375 -3.15625 0.9375 -3.109375 0.9375 -2.71875 L 0.9375 -0.625 C 0.9375 -0.265625 0.84375 -0.265625 0.328125 -0.265625 L 0.328125 0 C 0.640625 -0.03125 1.09375 -0.03125 1.203125 -0.03125 C 1.3125 -0.03125 1.796875 -0.03125 2.0625 0 Z M 1.609375 -4.78125 C 1.609375 -5.046875 1.40625 -5.234375 1.171875 -5.234375 C 0.953125 -5.234375 0.734375 -5.046875 0.734375 -4.78125 C 0.734375 -4.5625 0.921875 -4.34375 1.171875 -4.34375 C 1.421875 -4.34375 1.609375 -4.5625 1.609375 -4.78125 Z M 1.609375 -4.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-6">
<path style="stroke:none;" d="M 4.46875 0 L 4.46875 -0.265625 C 3.953125 -0.265625 3.859375 -0.265625 3.859375 -0.625 L 3.859375 -2.40625 C 3.859375 -3.078125 3.5625 -3.5 2.734375 -3.5 C 1.9375 -3.5 1.578125 -2.9375 1.484375 -2.75 L 1.484375 -3.5 L 0.328125 -3.421875 L 0.328125 -3.15625 C 0.859375 -3.15625 0.9375 -3.109375 0.9375 -2.71875 L 0.9375 -0.625 C 0.9375 -0.265625 0.828125 -0.265625 0.328125 -0.265625 L 0.328125 0 C 0.671875 -0.03125 1.015625 -0.03125 1.234375 -0.03125 C 1.46875 -0.03125 1.796875 -0.03125 2.140625 0 L 2.140625 -0.265625 C 1.625 -0.265625 1.53125 -0.265625 1.53125 -0.625 L 1.53125 -2.0625 C 1.53125 -2.890625 2.171875 -3.28125 2.65625 -3.28125 C 3.140625 -3.28125 3.265625 -2.9375 3.265625 -2.4375 L 3.265625 -0.625 C 3.265625 -0.265625 3.171875 -0.265625 2.65625 -0.265625 L 2.65625 0 C 3 -0.03125 3.34375 -0.03125 3.5625 -0.03125 C 3.796875 -0.03125 4.125 -0.03125 4.46875 0 Z M 4.46875 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-7">
<path style="stroke:none;" d="M 2.453125 -1.984375 C 2.453125 -2.75 2.328125 -3.65625 1.84375 -4.59375 C 1.453125 -5.328125 0.71875 -5.96875 0.578125 -5.96875 C 0.5 -5.96875 0.484375 -5.90625 0.484375 -5.875 C 0.484375 -5.84375 0.484375 -5.828125 0.578125 -5.71875 C 1.6875 -4.671875 1.9375 -3.21875 1.9375 -1.984375 C 1.9375 0.296875 1 1.375 0.59375 1.734375 C 0.484375 1.84375 0.484375 1.859375 0.484375 1.890625 C 0.484375 1.9375 0.5 1.984375 0.578125 1.984375 C 0.703125 1.984375 1.109375 1.578125 1.171875 1.515625 C 2.234375 0.390625 2.453125 -1.03125 2.453125 -1.984375 Z M 2.453125 -1.984375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-8">
<path style="stroke:none;" d="M 6.09375 -2.828125 C 6.09375 -3.015625 5.90625 -3.015625 5.78125 -3.015625 L 0.78125 -3.015625 C 0.65625 -3.015625 0.46875 -3.015625 0.46875 -2.828125 C 0.46875 -2.640625 0.625 -2.640625 0.75 -2.640625 L 5.8125 -2.640625 C 5.9375 -2.640625 6.09375 -2.640625 6.09375 -2.828125 Z M 6.09375 -1.140625 C 6.09375 -1.328125 5.9375 -1.328125 5.8125 -1.328125 L 0.75 -1.328125 C 0.625 -1.328125 0.46875 -1.328125 0.46875 -1.140625 C 0.46875 -0.96875 0.65625 -0.96875 0.78125 -0.96875 L 5.78125 -0.96875 C 5.90625 -0.96875 6.09375 -0.96875 6.09375 -1.140625 Z M 6.09375 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-9">
<path style="stroke:none;" d="M 3.5625 0 L 3.5625 -0.265625 L 3.28125 -0.265625 C 2.515625 -0.265625 2.5 -0.359375 2.5 -0.65625 L 2.5 -5.0625 C 2.5 -5.28125 2.484375 -5.28125 2.265625 -5.28125 C 1.9375 -4.96875 1.515625 -4.78125 0.765625 -4.78125 L 0.765625 -4.515625 C 0.984375 -4.515625 1.40625 -4.515625 1.875 -4.734375 L 1.875 -0.65625 C 1.875 -0.359375 1.84375 -0.265625 1.09375 -0.265625 L 0.8125 -0.265625 L 0.8125 0 C 1.140625 -0.03125 1.828125 -0.03125 2.171875 -0.03125 C 2.53125 -0.03125 3.234375 -0.03125 3.5625 0 Z M 3.5625 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph1-10">
<path style="stroke:none;" d="M 3.890625 -2.53125 C 3.890625 -3.390625 3.796875 -3.90625 3.546875 -4.40625 C 3.1875 -5.109375 2.546875 -5.28125 2.109375 -5.28125 C 1.109375 -5.28125 0.734375 -4.546875 0.625 -4.3125 C 0.34375 -3.734375 0.328125 -2.953125 0.328125 -2.53125 C 0.328125 -2.015625 0.34375 -1.203125 0.734375 -0.578125 C 1.09375 0.015625 1.6875 0.171875 2.109375 0.171875 C 2.484375 0.171875 3.171875 0.046875 3.578125 -0.734375 C 3.859375 -1.3125 3.890625 -2.015625 3.890625 -2.53125 Z M 3.1875 -2.625 C 3.1875 -2.15625 3.1875 -1.453125 3.078125 -1 C 2.921875 -0.171875 2.375 -0.0625 2.109375 -0.0625 C 1.84375 -0.0625 1.28125 -0.1875 1.125 -1.015625 C 1.03125 -1.46875 1.03125 -2.21875 1.03125 -2.625 C 1.03125 -3.1875 1.03125 -3.734375 1.125 -4.171875 C 1.28125 -4.984375 1.90625 -5.0625 2.109375 -5.0625 C 2.375 -5.0625 2.921875 -4.9375 3.078125 -4.203125 C 3.1875 -3.765625 3.1875 -3.171875 3.1875 -2.625 Z M 3.1875 -2.625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-1">
<path style="stroke:none;" d="M 4.09375 -0.71875 L 4.09375 -1.15625 L 3.84375 -1.15625 L 3.84375 -0.71875 C 3.84375 -0.390625 3.71875 -0.265625 3.5625 -0.265625 C 3.265625 -0.265625 3.265625 -0.625 3.265625 -0.71875 L 3.265625 -2.375 C 3.265625 -3.15625 2.5 -3.546875 1.78125 -3.546875 C 1.125 -3.546875 0.53125 -3.296875 0.53125 -2.765625 C 0.53125 -2.53125 0.703125 -2.390625 0.90625 -2.390625 C 1.125 -2.390625 1.28125 -2.546875 1.28125 -2.765625 C 1.28125 -2.953125 1.15625 -3.078125 0.984375 -3.125 C 1.28125 -3.328125 1.703125 -3.328125 1.765625 -3.328125 C 2.21875 -3.328125 2.65625 -3.015625 2.65625 -2.359375 L 2.65625 -2.109375 C 2.1875 -2.09375 1.65625 -2.0625 1.109375 -1.84375 C 0.40625 -1.53125 0.265625 -1.078125 0.265625 -0.8125 C 0.265625 -0.125 1.078125 0.078125 1.625 0.078125 C 2.203125 0.078125 2.5625 -0.25 2.734375 -0.5625 C 2.78125 -0.265625 2.984375 0.046875 3.328125 0.046875 C 3.40625 0.046875 4.09375 0.015625 4.09375 -0.71875 Z M 2.65625 -1.125 C 2.65625 -0.34375 2 -0.140625 1.6875 -0.140625 C 1.265625 -0.140625 0.921875 -0.421875 0.921875 -0.796875 C 0.921875 -1.328125 1.421875 -1.875 2.65625 -1.90625 Z M 2.65625 -1.125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-2">
<path style="stroke:none;" d="M 3.046875 -3 C 3.046875 -3.28125 2.796875 -3.5 2.453125 -3.5 C 1.9375 -3.5 1.578125 -3.125 1.421875 -2.671875 L 1.40625 -2.671875 L 1.40625 -3.5 L 0.28125 -3.421875 L 0.28125 -3.15625 C 0.8125 -3.15625 0.875 -3.109375 0.875 -2.71875 L 0.875 -0.625 C 0.875 -0.265625 0.78125 -0.265625 0.28125 -0.265625 L 0.28125 0 C 0.59375 -0.03125 1.03125 -0.03125 1.21875 -0.03125 C 1.6875 -0.03125 1.703125 -0.03125 2.21875 0 L 2.21875 -0.265625 L 2.0625 -0.265625 C 1.484375 -0.265625 1.46875 -0.34375 1.46875 -0.640625 L 1.46875 -1.8125 C 1.46875 -2.40625 1.703125 -3.265625 2.46875 -3.28125 C 2.421875 -3.25 2.34375 -3.1875 2.34375 -3 C 2.34375 -2.765625 2.53125 -2.640625 2.703125 -2.640625 C 2.890625 -2.640625 3.046875 -2.78125 3.046875 -3 Z M 3.046875 -3 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-3">
<path style="stroke:none;" d="M 3.5 -0.953125 C 3.5 -0.984375 3.484375 -1.0625 3.375 -1.0625 C 3.296875 -1.0625 3.28125 -1.015625 3.265625 -0.96875 C 2.96875 -0.1875 2.296875 -0.171875 2.140625 -0.171875 C 1.796875 -0.171875 1.421875 -0.328125 1.1875 -0.703125 C 0.953125 -1.0625 0.953125 -1.578125 0.953125 -1.8125 L 3.28125 -1.8125 C 3.453125 -1.8125 3.5 -1.8125 3.5 -2 C 3.5 -2.703125 3.125 -3.546875 2 -3.546875 C 1.015625 -3.546875 0.234375 -2.734375 0.234375 -1.734375 C 0.234375 -0.71875 1.09375 0.078125 2.09375 0.078125 C 3.109375 0.078125 3.5 -0.765625 3.5 -0.953125 Z M 2.96875 -2.015625 L 0.953125 -2.015625 C 1.03125 -3.140625 1.703125 -3.328125 2 -3.328125 C 2.921875 -3.328125 2.953125 -2.203125 2.96875 -2.015625 Z M 2.96875 -2.015625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-4">
<path style="stroke:none;" d="M 3.046875 -1.03125 C 3.046875 -1.40625 2.8125 -1.96875 1.875 -2.140625 C 1.8125 -2.15625 1.359375 -2.234375 1.328125 -2.234375 C 1.078125 -2.296875 0.703125 -2.453125 0.703125 -2.78125 C 0.703125 -3.015625 0.875 -3.34375 1.640625 -3.34375 C 2.53125 -3.34375 2.5625 -2.703125 2.578125 -2.46875 C 2.59375 -2.40625 2.640625 -2.390625 2.703125 -2.390625 C 2.828125 -2.390625 2.828125 -2.4375 2.828125 -2.59375 L 2.828125 -3.34375 C 2.828125 -3.46875 2.828125 -3.546875 2.734375 -3.546875 C 2.6875 -3.546875 2.671875 -3.546875 2.53125 -3.421875 C 2.515625 -3.40625 2.453125 -3.34375 2.421875 -3.34375 C 2.421875 -3.34375 2.40625 -3.34375 2.359375 -3.375 C 2.234375 -3.453125 2 -3.546875 1.640625 -3.546875 C 0.53125 -3.546875 0.28125 -2.9375 0.28125 -2.5625 C 0.28125 -2.15625 0.578125 -1.9375 0.59375 -1.90625 C 0.921875 -1.671875 1.09375 -1.640625 1.625 -1.546875 C 2 -1.46875 2.609375 -1.359375 2.609375 -0.8125 C 2.609375 -0.515625 2.40625 -0.140625 1.671875 -0.140625 C 0.875 -0.140625 0.640625 -0.765625 0.546875 -1.1875 C 0.515625 -1.28125 0.5 -1.328125 0.40625 -1.328125 C 0.28125 -1.328125 0.28125 -1.265625 0.28125 -1.109375 L 0.28125 -0.125 C 0.28125 0 0.28125 0.078125 0.375 0.078125 C 0.421875 0.078125 0.4375 0.078125 0.578125 -0.078125 C 0.625 -0.125 0.703125 -0.21875 0.75 -0.265625 C 1.109375 0.0625 1.484375 0.078125 1.6875 0.078125 C 2.703125 0.078125 3.046875 -0.5 3.046875 -1.03125 Z M 3.046875 -1.03125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-5">
<path style="stroke:none;" d="M 2.8125 -1 L 2.8125 -1.4375 L 2.5625 -1.4375 L 2.5625 -1.015625 C 2.5625 -0.46875 2.3125 -0.171875 2.015625 -0.171875 C 1.484375 -0.171875 1.484375 -0.84375 1.484375 -0.984375 L 1.484375 -3.171875 L 2.671875 -3.171875 L 2.671875 -3.421875 L 1.484375 -3.421875 L 1.484375 -4.890625 L 1.234375 -4.890625 C 1.21875 -4.171875 0.90625 -3.40625 0.15625 -3.390625 L 0.15625 -3.171875 L 0.875 -3.171875 L 0.875 -1 C 0.875 -0.0625 1.59375 0.078125 1.953125 0.078125 C 2.484375 0.078125 2.8125 -0.390625 2.8125 -1 Z M 2.8125 -1 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-6">
<path style="stroke:none;" d="M 3.984375 -1.6875 C 3.984375 -2.6875 3.15625 -3.546875 2.109375 -3.546875 C 1.0625 -3.546875 0.234375 -2.6875 0.234375 -1.6875 C 0.234375 -0.703125 1.09375 0.078125 2.109375 0.078125 C 3.140625 0.078125 3.984375 -0.703125 3.984375 -1.6875 Z M 3.265625 -1.765625 C 3.265625 -1.40625 3.25 -0.96875 3.03125 -0.625 C 2.8125 -0.3125 2.453125 -0.171875 2.109375 -0.171875 C 1.671875 -0.171875 1.34375 -0.375 1.171875 -0.65625 C 0.96875 -0.984375 0.953125 -1.375 0.953125 -1.765625 C 0.953125 -2.0625 0.953125 -2.546875 1.1875 -2.890625 C 1.40625 -3.171875 1.734375 -3.328125 2.109375 -3.328125 C 2.515625 -3.328125 2.859375 -3.125 3.046875 -2.84375 C 3.265625 -2.515625 3.265625 -2.078125 3.265625 -1.765625 Z M 3.265625 -1.765625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-7">
<path style="stroke:none;" d="M 2.0625 0 L 2.0625 -0.265625 C 1.546875 -0.265625 1.515625 -0.296875 1.515625 -0.609375 L 1.515625 -3.5 L 0.359375 -3.421875 L 0.359375 -3.15625 C 0.859375 -3.15625 0.9375 -3.109375 0.9375 -2.71875 L 0.9375 -0.625 C 0.9375 -0.265625 0.84375 -0.265625 0.328125 -0.265625 L 0.328125 0 C 0.640625 -0.03125 1.09375 -0.03125 1.203125 -0.03125 C 1.3125 -0.03125 1.796875 -0.03125 2.0625 0 Z M 1.609375 -4.78125 C 1.609375 -5.046875 1.40625 -5.234375 1.171875 -5.234375 C 0.953125 -5.234375 0.734375 -5.046875 0.734375 -4.78125 C 0.734375 -4.5625 0.921875 -4.34375 1.171875 -4.34375 C 1.421875 -4.34375 1.609375 -4.5625 1.609375 -4.78125 Z M 1.609375 -4.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-8">
<path style="stroke:none;" d="M 4.46875 0 L 4.46875 -0.265625 C 3.953125 -0.265625 3.859375 -0.265625 3.859375 -0.625 L 3.859375 -2.40625 C 3.859375 -3.078125 3.5625 -3.5 2.734375 -3.5 C 1.9375 -3.5 1.578125 -2.9375 1.484375 -2.75 L 1.484375 -3.5 L 0.328125 -3.421875 L 0.328125 -3.15625 C 0.859375 -3.15625 0.9375 -3.109375 0.9375 -2.71875 L 0.9375 -0.625 C 0.9375 -0.265625 0.828125 -0.265625 0.328125 -0.265625 L 0.328125 0 C 0.671875 -0.03125 1.015625 -0.03125 1.234375 -0.03125 C 1.46875 -0.03125 1.796875 -0.03125 2.140625 0 L 2.140625 -0.265625 C 1.625 -0.265625 1.53125 -0.265625 1.53125 -0.625 L 1.53125 -2.0625 C 1.53125 -2.890625 2.171875 -3.28125 2.65625 -3.28125 C 3.140625 -3.28125 3.265625 -2.9375 3.265625 -2.4375 L 3.265625 -0.625 C 3.265625 -0.265625 3.171875 -0.265625 2.65625 -0.265625 L 2.65625 0 C 3 -0.03125 3.34375 -0.03125 3.5625 -0.03125 C 3.796875 -0.03125 4.125 -0.03125 4.46875 0 Z M 4.46875 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-9">
<path style="stroke:none;" d="M 4.09375 -3.1875 C 4.09375 -3.328125 4 -3.59375 3.640625 -3.59375 C 3.5 -3.59375 3.125 -3.5625 2.765625 -3.234375 C 2.5625 -3.375 2.25 -3.5 1.875 -3.5 C 1.09375 -3.5 0.515625 -2.953125 0.515625 -2.34375 C 0.515625 -1.96875 0.71875 -1.6875 0.875 -1.53125 C 0.703125 -1.328125 0.640625 -1.078125 0.640625 -0.875 C 0.640625 -0.5625 0.796875 -0.3125 0.984375 -0.171875 C 0.5625 -0.0625 0.234375 0.25 0.234375 0.609375 C 0.234375 1.1875 1.0625 1.625 2.109375 1.625 C 3.109375 1.625 3.984375 1.21875 3.984375 0.59375 C 3.984375 0.171875 3.71875 -0.171875 3.453125 -0.296875 C 2.984375 -0.546875 2.59375 -0.546875 1.828125 -0.546875 L 1.375 -0.546875 C 1.125 -0.578125 0.9375 -0.78125 0.9375 -1.078125 C 0.9375 -1.265625 0.984375 -1.34375 1.03125 -1.40625 C 1.375 -1.203125 1.671875 -1.171875 1.875 -1.171875 C 2.65625 -1.171875 3.234375 -1.71875 3.234375 -2.34375 C 3.234375 -2.640625 3.109375 -2.890625 2.90625 -3.109375 C 3.015625 -3.203125 3.28125 -3.359375 3.671875 -3.375 C 3.640625 -3.34375 3.609375 -3.3125 3.609375 -3.1875 C 3.609375 -3.03125 3.703125 -2.9375 3.84375 -2.9375 C 3.953125 -2.9375 4.09375 -3 4.09375 -3.1875 Z M 2.609375 -2.34375 C 2.609375 -2.046875 2.5625 -1.84375 2.453125 -1.671875 C 2.28125 -1.453125 2.015625 -1.40625 1.875 -1.40625 C 1.140625 -1.40625 1.140625 -2.15625 1.140625 -2.34375 C 1.140625 -2.625 1.171875 -2.84375 1.296875 -3 C 1.4375 -3.1875 1.65625 -3.28125 1.875 -3.28125 C 2.609375 -3.28125 2.609375 -2.515625 2.609375 -2.34375 Z M 3.5 0.609375 C 3.5 1.03125 2.890625 1.40625 2.109375 1.40625 C 1.3125 1.40625 0.703125 1.03125 0.703125 0.609375 C 0.703125 0.4375 0.828125 -0.03125 1.484375 -0.03125 L 2.25 -0.03125 C 2.46875 -0.03125 3.5 -0.03125 3.5 0.609375 Z M 3.5 0.609375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph2-10">
<path style="stroke:none;" d="M 2.125 0 L 2.125 -0.265625 C 1.609375 -0.265625 1.515625 -0.265625 1.515625 -0.625 L 1.515625 -5.515625 L 0.328125 -5.4375 L 0.328125 -5.171875 C 0.875 -5.171875 0.9375 -5.109375 0.9375 -4.71875 L 0.9375 -0.625 C 0.9375 -0.265625 0.84375 -0.265625 0.328125 -0.265625 L 0.328125 0 C 0.640625 -0.03125 1.09375 -0.03125 1.21875 -0.03125 C 1.390625 -0.03125 1.8125 -0.03125 2.125 0 Z M 2.125 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph3-1">
<path style="stroke:none;" d="M 3.578125 -0.859375 C 3.578125 -0.859375 3.5625 -0.9375 3.46875 -0.9375 C 3.375 -0.9375 3.359375 -0.90625 3.34375 -0.84375 C 3.171875 -0.328125 2.75 -0.140625 2.5 -0.140625 C 2.28125 -0.140625 2.109375 -0.265625 2.109375 -0.515625 C 2.109375 -0.625 2.140625 -0.765625 2.203125 -0.96875 L 2.390625 -1.75 C 2.453125 -1.984375 2.484375 -2.09375 2.609375 -2.234375 C 2.6875 -2.328125 2.828125 -2.4375 3.015625 -2.4375 C 3.046875 -2.4375 3.234375 -2.4375 3.359375 -2.34375 C 3.15625 -2.28125 3.109375 -2.109375 3.109375 -2.015625 C 3.109375 -1.828125 3.265625 -1.796875 3.34375 -1.796875 C 3.515625 -1.796875 3.6875 -1.9375 3.6875 -2.171875 C 3.6875 -2.484375 3.34375 -2.625 3.03125 -2.625 C 2.640625 -2.625 2.40625 -2.328125 2.328125 -2.21875 C 2.25 -2.359375 2.03125 -2.625 1.578125 -2.625 C 0.890625 -2.625 0.484375 -1.921875 0.484375 -1.71875 C 0.484375 -1.6875 0.515625 -1.625 0.59375 -1.625 C 0.6875 -1.625 0.703125 -1.671875 0.71875 -1.71875 C 0.859375 -2.203125 1.265625 -2.4375 1.5625 -2.4375 C 1.859375 -2.4375 1.953125 -2.25 1.953125 -2.046875 C 1.953125 -1.96875 1.953125 -1.921875 1.890625 -1.734375 C 1.765625 -1.1875 1.625 -0.640625 1.59375 -0.5625 C 1.515625 -0.34375 1.296875 -0.140625 1.046875 -0.140625 C 1.015625 -0.140625 0.84375 -0.140625 0.703125 -0.234375 C 0.9375 -0.296875 0.96875 -0.5 0.96875 -0.546875 C 0.96875 -0.703125 0.84375 -0.78125 0.71875 -0.78125 C 0.5625 -0.78125 0.375 -0.65625 0.375 -0.40625 C 0.375 -0.0625 0.75 0.0625 1.03125 0.0625 C 1.375 0.0625 1.625 -0.171875 1.734375 -0.359375 C 1.84375 -0.109375 2.140625 0.0625 2.484375 0.0625 C 3.1875 0.0625 3.578125 -0.65625 3.578125 -0.859375 Z M 3.578125 -0.859375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph4-1">
<path style="stroke:none;" d="M 3.21875 -1.109375 L 2.984375 -1.109375 C 2.984375 -1.03125 2.921875 -0.640625 2.828125 -0.578125 C 2.78125 -0.53125 2.296875 -0.53125 2.21875 -0.53125 L 1.109375 -0.53125 L 1.875 -1.15625 C 2.078125 -1.3125 2.609375 -1.703125 2.78125 -1.875 C 2.96875 -2.0625 3.21875 -2.359375 3.21875 -2.78125 C 3.21875 -3.53125 2.53125 -3.96875 1.734375 -3.96875 C 0.96875 -3.96875 0.4375 -3.46875 0.4375 -2.90625 C 0.4375 -2.59375 0.6875 -2.5625 0.75 -2.5625 C 0.90625 -2.5625 1.078125 -2.671875 1.078125 -2.890625 C 1.078125 -3.015625 1 -3.203125 0.734375 -3.203125 C 0.875 -3.515625 1.234375 -3.734375 1.640625 -3.734375 C 2.28125 -3.734375 2.609375 -3.265625 2.609375 -2.78125 C 2.609375 -2.359375 2.328125 -1.921875 1.90625 -1.546875 L 0.5 -0.25 C 0.4375 -0.1875 0.4375 -0.1875 0.4375 0 L 3.03125 0 Z M 3.21875 -1.109375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph4-2">
<path style="stroke:none;" d="M 2.59375 -0.765625 C 2.59375 -1.015625 2.46875 -1.1875 2.34375 -1.296875 C 2.09375 -1.515625 1.84375 -1.5625 1.5 -1.625 C 1.046875 -1.6875 0.640625 -1.765625 0.640625 -2.078125 C 0.640625 -2.25 0.8125 -2.484375 1.421875 -2.484375 C 1.84375 -2.484375 2.15625 -2.328125 2.203125 -1.90625 C 2.203125 -1.828125 2.203125 -1.78125 2.296875 -1.78125 C 2.421875 -1.78125 2.421875 -1.84375 2.421875 -1.953125 L 2.421875 -2.5 C 2.421875 -2.59375 2.421875 -2.65625 2.328125 -2.65625 C 2.296875 -2.65625 2.28125 -2.65625 2.1875 -2.59375 C 2.171875 -2.578125 2.171875 -2.578125 2.078125 -2.5 C 1.859375 -2.65625 1.546875 -2.65625 1.4375 -2.65625 C 0.5 -2.65625 0.3125 -2.1875 0.3125 -1.921875 C 0.3125 -1.34375 1.015625 -1.21875 1.46875 -1.15625 C 1.75 -1.109375 2.265625 -1.03125 2.265625 -0.625 C 2.265625 -0.40625 2.078125 -0.125 1.46875 -0.125 C 0.90625 -0.125 0.65625 -0.46875 0.546875 -0.90625 C 0.53125 -0.96875 0.515625 -1 0.4375 -1 C 0.3125 -1 0.3125 -0.953125 0.3125 -0.828125 L 0.3125 -0.109375 C 0.3125 0 0.3125 0.0625 0.40625 0.0625 C 0.453125 0.0625 0.453125 0.046875 0.5625 -0.046875 L 0.703125 -0.203125 C 1 0.0625 1.359375 0.0625 1.46875 0.0625 C 2.359375 0.0625 2.59375 -0.421875 2.59375 -0.765625 Z M 2.59375 -0.765625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph4-3">
<path style="stroke:none;" d="M 1.75 0 L 1.75 -0.234375 C 1.375 -0.234375 1.328125 -0.234375 1.328125 -0.484375 L 1.328125 -2.625 L 0.40625 -2.5625 L 0.40625 -2.328125 C 0.796875 -2.328125 0.859375 -2.296875 0.859375 -2 L 0.859375 -0.484375 C 0.859375 -0.234375 0.796875 -0.234375 0.375 -0.234375 L 0.375 0 L 1.078125 -0.03125 C 1.140625 -0.03125 1.59375 -0.015625 1.75 0 Z M 1.40625 -3.59375 C 1.40625 -3.78125 1.25 -3.953125 1.046875 -3.953125 C 0.828125 -3.953125 0.6875 -3.765625 0.6875 -3.59375 C 0.6875 -3.390625 0.84375 -3.234375 1.046875 -3.234375 C 1.265625 -3.234375 1.40625 -3.421875 1.40625 -3.59375 Z M 1.40625 -3.59375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez21b_d1-glyph4-4">
<path style="stroke:none;" d="M 3.734375 0 L 3.734375 -0.234375 C 3.328125 -0.234375 3.265625 -0.234375 3.265625 -0.484375 L 3.265625 -1.796875 C 3.265625 -2.390625 2.9375 -2.625 2.328125 -2.625 C 1.796875 -2.625 1.46875 -2.359375 1.296875 -2.078125 L 1.296875 -2.625 L 0.375 -2.5625 L 0.375 -2.328125 C 0.796875 -2.328125 0.84375 -2.296875 0.84375 -2 L 0.84375 -0.484375 C 0.84375 -0.234375 0.78125 -0.234375 0.375 -0.234375 L 0.375 0 C 0.421875 0 0.828125 -0.03125 1.09375 -0.03125 C 1.359375 -0.03125 1.75 0 1.8125 0 L 1.8125 -0.234375 C 1.40625 -0.234375 1.34375 -0.234375 1.34375 -0.484375 L 1.34375 -1.546875 C 1.34375 -2.203125 1.90625 -2.4375 2.28125 -2.4375 C 2.671875 -2.4375 2.765625 -2.1875 2.765625 -1.828125 L 2.765625 -0.484375 C 2.765625 -0.234375 2.703125 -0.234375 2.296875 -0.234375 L 2.296875 0 C 2.34375 0 2.75 -0.03125 3.015625 -0.03125 C 3.28125 -0.03125 3.671875 0 3.734375 0 Z M 3.734375 0 "/>
</symbol>
</g>
</defs>
<g id="analisi1_lez21b_d1-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -85.039452 0.00146517 L 84.642766 0.00146517 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072718 2.392623 C -1.693107 0.956363 -0.851701 0.279325 0.00144535 0.00146517 C -0.851701 -0.280308 -1.693107 -0.957346 -2.072718 -2.389693 " transform="matrix(0.998143,0,0,-0.998143,173.740745,89.735837)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00124652 -85.039233 L 0.00124652 84.642985 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072499 2.389912 C -1.692888 0.957565 -0.851482 0.280527 0.001664 -0.00124652 C -0.851482 -0.279106 -1.692888 -0.956144 -2.072499 -2.392405 " transform="matrix(0,-0.998143,-0.998143,0,89.05735,5.052442)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(39.99939%,39.99939%,100%);fill-opacity:0.2;" d="M 89.058594 89.734375 L 156.964844 89.734375 C 156.964844 73.773438 151.339844 58.3125 141.078125 46.085938 Z M 89.058594 89.734375 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,29.998779%,29.998779%);fill-opacity:0.3;" d="M 89.058594 89.734375 L 156.964844 89.734375 L 141.078125 46.085938 Z M 89.058594 89.734375 "/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 68.033805 0.00146517 C 68.033805 37.57513 37.574912 68.034024 0.00124652 68.034024 C -37.572419 68.034024 -68.031312 37.57513 -68.031312 0.00146517 C -68.031312 -37.5722 -37.572419 -68.031093 0.00124652 -68.031093 C 37.574912 -68.031093 68.033805 -37.5722 68.033805 0.00146517 Z M 68.033805 0.00146517 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00124652 0.00146517 L 68.033805 0.00146517 L 52.117536 43.731091 Z M 0.00124652 0.00146517 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 52.117536 43.731091 L 52.117536 0.00146517 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 17.009386 0.00146517 C 17.009386 3.997165 15.596607 7.871545 13.029341 10.931915 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-1" x="112.202299" y="82.158931"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 90.488281 89.734375 C 90.488281 88.945312 89.847656 88.304688 89.058594 88.304688 C 88.265625 88.304688 87.625 88.945312 87.625 89.734375 C 87.625 90.527344 88.265625 91.167969 89.058594 91.167969 C 89.847656 91.167969 90.488281 90.527344 90.488281 89.734375 Z M 90.488281 89.734375 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 158.398438 89.734375 C 158.398438 88.945312 157.757812 88.304688 156.964844 88.304688 C 156.175781 88.304688 155.535156 88.945312 155.535156 89.734375 C 155.535156 90.527344 156.175781 91.167969 156.964844 91.167969 C 157.757812 91.167969 158.398438 90.527344 158.398438 89.734375 Z M 158.398438 89.734375 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 142.511719 46.085938 C 142.511719 45.292969 141.867188 44.652344 141.078125 44.652344 C 140.289062 44.652344 139.644531 45.292969 139.644531 46.085938 C 139.644531 46.875 140.289062 47.515625 141.078125 47.515625 C 141.867188 47.515625 142.511719 46.875 142.511719 46.085938 Z M 142.511719 46.085938 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-2" x="124.701051" y="11.597179"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-1" x="131.233899" y="11.597179"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-2" x="134.52103" y="11.597179"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-3" x="138.277524" y="11.597179"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-4" x="142.504177" y="11.597179"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-1" x="147.247114" y="11.597179"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph0-3" x="152.005181" y="11.597179"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-4" x="155.761277" y="11.597179"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-5" x="159.095345" y="11.597179"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-6" x="161.442955" y="11.597179"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-1" x="167.548353" y="11.597179"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-7" x="172.306503" y="11.597179"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.67891 78.940992 L 49.198054 49.624845 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.760424 0.00083611 C 3.299671 0.111094 1.266866 0.750935 0.000477073 1.447966 L -0.000704656 -1.447049 C 1.269114 -0.752572 3.29877 -0.111199 3.760424 0.00083611 Z M 3.760424 0.00083611 " transform="matrix(0.442936,0.894406,0.894406,-0.442936,138.165656,40.20343)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-4" x="47.825043" y="16.400245"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-2" x="54.469312" y="16.400245"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-8" x="63.354159" y="16.400245"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-9" x="72.275235" y="16.400245"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -9.931257 70.632598 L 24.468547 29.114109 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.761549 0.000105935 C 3.300718 0.112564 1.267449 0.750279 -0.00129596 1.445761 L 0.000306926 -1.447616 C 1.269154 -0.750526 3.296841 -0.112944 3.761549 0.000105935 Z M 3.761549 0.000105935 " transform="matrix(0.636806,0.76854,0.76854,-0.636806,113.479543,60.675571)"/>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph2-1" x="168.160215" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-2" x="172.386867" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-3" x="175.681158" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-1" x="179.437652" y="36.76237"/>
</g>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph2-4" x="186.480482" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-3" x="189.814549" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-5" x="193.571043" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-5" x="196.858174" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-6" x="200.145305" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-2" x="204.371958" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-3" x="207.666249" y="36.76237"/>
</g>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-4" x="214.241502" y="36.76237"/>
</g>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-5" x="220.885771" y="36.76237"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph0-2" x="227.216601" y="36.76237"/>
</g>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-8" x="236.100842" y="36.76237"/>
</g>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph3-1" x="246.217026" y="33.509421"/>
</g>
<path style="fill:none;stroke-width:0.398;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,54.998779%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00172733 -0.000367655 L 4.173535 -0.000367655 " transform="matrix(0.998143,0,0,-0.998143,246.217026,34.773071)"/>
<g style="fill:rgb(0%,0%,54.998779%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph4-1" x="246.475545" y="39.881569"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,54.998779%);stroke-opacity:1;stroke-miterlimit:10;" d="M 76.530048 53.346599 L 61.686082 37.755152 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,54.998779%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,54.998779%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.759229 -0.000582344 C 3.299706 0.113067 1.269575 0.752292 -0.000747355 1.444934 L 0.000636507 -1.445162 C 1.268848 -0.750855 3.299698 -0.11393 3.759229 -0.000582344 Z M 3.759229 -0.000582344 " transform="matrix(-0.68831,0.722776,0.722776,0.68831,150.626997,52.048947)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-4" x="168.160215" y="69.89075"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-5" x="171.494282" y="69.89075"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-6" x="173.841892" y="69.89075"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-1" x="179.94729" y="69.89075"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 76.150437 21.960202 L 58.324372 15.765107 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.760324 0.00216977 C 3.29761 0.113299 1.269774 0.751928 -0.00111211 1.446461 L 0.000216489 -1.446058 C 1.269083 -0.751867 3.298454 -0.110735 3.760324 0.00216977 Z M 3.760324 0.00216977 " transform="matrix(-0.942776,0.32773,0.32773,0.942776,147.274902,73.999957)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-5" x="168.160215" y="109.3793"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-1" x="174.491439" y="109.3793"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-9" x="177.77857" y="109.3793"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-3" x="182.004464" y="109.3793"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-10" x="185.761476" y="109.3793"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph1-7" x="189.988128" y="109.3793"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 76.631799 -10.838974 L 72.119516 -5.152635 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.760908 0.00112439 C 3.299567 0.112247 1.270004 0.752773 0.000596448 1.444809 L 0.0000182701 -1.446936 C 1.270879 -0.751467 3.300523 -0.113294 3.760908 0.00112439 Z M 3.760908 0.00112439 " transform="matrix(-0.620186,-0.782005,-0.782005,0.620186,161.044281,94.877853)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-4" x="133.218208" y="147.112115"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-5" x="139.870433" y="147.112115"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-8" x="148.545699" y="147.112115"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-9" x="157.466775" y="147.112115"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 58.26567 -48.87052 L 51.424844 -7.845134 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762802 0.0000802956 C 3.297618 0.11333 1.269599 0.75292 0.000162491 1.444612 L -0.0018248 -1.44752 C 1.268926 -0.750731 3.299544 -0.113151 3.762802 0.0000802956 Z M 3.762802 0.0000802956 " transform="matrix(-0.164105,-0.984509,-0.984509,0.164105,140.387104,97.56778)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-4" x="8.739744" y="112.825889"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -70.680762 -20.004428 L -6.326909 -1.790925 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762194 0.000426898 C 3.29744 0.111618 1.269677 0.750566 -0.001312 1.447856 L 0.00163528 -1.444889 C 1.26806 -0.749842 3.299077 -0.112551 3.762194 0.000426898 Z M 3.762194 0.000426898 " transform="matrix(0.960384,-0.271794,-0.271794,-0.960384,82.742436,91.522953)"/>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph2-1" x="57.239532" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-2" x="61.466184" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-3" x="64.760475" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-1" x="68.516969" y="173.219554"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph2-5" x="75.559799" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-2" x="78.84693" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-7" x="82.141221" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-1" x="84.488831" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-8" x="88.715483" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-9" x="93.411498" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-6" x="97.638151" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-10" x="101.864803" y="173.219554"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph2-6" x="104.212413" y="173.219554"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-4" x="111.256059" y="173.219554"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-5" x="117.900328" y="173.219554"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph0-2" x="124.239113" y="173.219554"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph1-8" x="133.116398" y="173.219554"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph4-2" x="143.231583" y="169.967603"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph4-3" x="146.143236" y="169.967603"/>
  <use xlink:href="#analisi1_lez21b_d1-glyph4-4" x="148.242252" y="169.967603"/>
</g>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph3-1" x="153.545399" y="169.967603"/>
</g>
<path style="fill:none;stroke-width:0.398;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(59.999084%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.00111649 -0.000214781 L 14.506287 -0.000214781 " transform="matrix(0.998143,0,0,-0.998143,143.231583,171.230254)"/>
<g style="fill:rgb(59.999084%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez21b_d1-glyph4-1" x="148.647509" y="176.33975"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(59.999084%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 31.411124 -73.345648 L 37.586652 5.691717 " transform="matrix(0.998143,0,0,-0.998143,89.05735,89.735837)"/>
<path style="fill-rule:nonzero;fill:rgb(59.999084%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(59.999084%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762407 -0.00139153 C 3.298207 0.111525 1.26979 0.749995 -0.00166367 1.447593 L 0.000555147 -1.445464 C 1.269161 -0.749666 3.299973 -0.112101 3.762407 -0.00139153 Z M 3.762407 -0.00139153 " transform="matrix(0.0777254,-0.995049,-0.995049,-0.0777254,126.573368,84.056172)"/>
</g>
</svg></figure>
<p><strong>Da notare:</strong> questa stessa costruzione geometrica (triangolo inscritto, settore circolare) verrà riutilizzata nella prossima lezione per dimostrare il limite notevole $\\frac{\\sin x}{x} \\to 1$. Qui ci serve per un primo risultato più semplice: la stima $|\\sin x| \\le |x|$ e il limite del seno in zero.</p>`,
        subsections: [
          {
            subtitle: "Confronto tra le due aree",
            content: `<p><strong>1. L'area del triangolo $OAP$</strong>, dove $O$ è l'origine, $A=(1,0)$ e $P=(\\cos x, \\sin x)$. La base $OA$ ha lunghezza $1$ e l'altezza relativa a questa base è la coordinata $y$ del punto $P$, cioè $\\sin x$:</p>
<p>$$\\text{Area}(\\text{triangolo } OAP) = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{altezza} = \\frac{1}{2} \\cdot 1 \\cdot \\sin x = \\frac{\\sin x}{2}$$</p>
<p><strong>2. L'area del settore circolare $OAP$</strong>, sotteso dall'angolo $x$. L'area di un settore circolare è proporzionale all'angolo. Poiché l'area dell'intero cerchio ($\\pi r^2 = \\pi$) corrisponde a un angolo di $2\\pi$ radianti, l'area del settore con angolo $x$ è:</p>
<p>$$\\text{Area}(\\text{settore } OAP) = \\pi \\cdot \\frac{x}{2\\pi} = \\frac{x}{2}$$</p>
<p>Dal punto di vista geometrico, è evidente che il triangolo $OAP$ è contenuto nel settore circolare $OAP$. Pertanto, la sua area deve essere minore o uguale:</p>
<p>$$\\frac{\\sin x}{2} \\le \\frac{x}{2} \\quad \\Rightarrow \\quad \\sin x \\le x \\qquad \\forall x \\in \\left(0, \\frac{\\pi}{2}\\right)$$</p>`
          },
          {
            subtitle: "Estensione ai valori negativi per disparità",
            content: `<p>Ora estendiamo questa disuguaglianza per valori di $x$ negativi, vicini a zero. Sfruttiamo il fatto che sia la funzione $f(x) = \\sin x$ sia $g(x) = x$ sono funzioni dispari.</p>
<p>Sia $x \\in \\left(-\\frac{\\pi}{2}, 0\\right)$. Possiamo scrivere $x = -t$ con $t \\in \\left(0, \\frac{\\pi}{2}\\right)$. Per $t \\gt 0$ sappiamo che $\\sin t \\le t$. Sostituendo $t = -x$:</p>
<p>$$\\sin(-x) \\le -x \\quad \\Longleftrightarrow \\quad -\\sin x \\le -x$$</p>
<p>Moltiplicando entrambi i membri per $-1$, invertiamo il verso della disuguaglianza:</p>
<p>$$\\sin x \\ge x \\qquad \\forall x \\in \\left(-\\frac{\\pi}{2}, 0\\right)$$</p>
<p>Abbiamo quindi dimostrato che:</p>
<ul>
  <li>per $x \\in \\left(0, \\frac{\\pi}{2}\\right)$, vale $0 \\lt \\sin x \\le x$;</li>
  <li>per $x \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, vale $x \\le \\sin x \\lt 0$.</li>
</ul>
<p>Entrambe le relazioni possono essere sintetizzate in un'unica disuguaglianza usando il valore assoluto:</p>
<p>$$|\\sin x| \\le |x| \\qquad \\forall x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$</p>
<p>Questa disuguaglianza è equivalente a $-|x| \\le \\sin x \\le |x|$.</p>`
          },
          {
            subtitle: "Applicazione del Teorema del Confronto",
            content: `<p>Siamo ora pronti ad applicare il Teorema del Confronto (o dei due Carabinieri). Consideriamo i limiti per $x \\to 0$ delle due funzioni che "schiacciano" $\\sin x$:</p>
<p>$$\\lim_{x \\to 0} (-|x|) = 0 \\quad \\text{e} \\quad \\lim_{x \\to 0} |x| = 0$$</p>
<p>Poiché $\\sin x$ è compreso tra due funzioni che tendono a $0$, anche $\\sin x$ deve tendere a $0$.</p>
<p><strong>Proposizione (limite notevole del seno).</strong></p>
<p>$$\\lim_{x \\to 0} \\sin x = 0$$</p>
<p><strong>Osservazione.</strong> Un altro limite fondamentale, che si può dimostrare in modo analogo o dedurre dalla continuità della funzione coseno, è</p>
<p>$$\\lim_{x \\to 0} \\cos x = 1$$</p>
<p>Infatti, $\\cos(0) = 1$.</p>`
          }
        ],
        formulas: [
          { label: "Stima fondamentale del seno", latex: "|\\sin x| \\le |x| \\qquad \\forall x \\in \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)" },
          { label: "Limite notevole del seno", latex: "\\lim_{x \\to 0} \\sin x = 0" },
          { label: "Limite del coseno", latex: "\\lim_{x \\to 0} \\cos x = 1" }
        ]
      },
      {
        id: "s21-algebra-limiti",
        type: "section",
        title: "Algebra dei limiti",
        icon: "➗",
        content: `<p>Le regole algebriche per le operazioni sui limiti di funzioni sono le stesse che abbiamo già visto per le successioni. Questo non è un caso: la loro validità si estende dalle successioni alle funzioni grazie al <strong>Teorema Ponte</strong>.</p>`,
        subsections: [
          {
            subtitle: "Convenzione sui punti di accumulazione ammessi",
            content: `<p>Nel seguito scriviamo</p>
<p>$$\\mathbb{R}^* := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$$</p>
<p>(la <em>retta reale estesa</em>): il simbolo $\\mathbb{R}^*$ indica dunque che il punto $x_0$ in cui si calcola il limite può essere un numero reale <em>oppure</em> uno dei due punti all'infinito. In particolare $x_0 = 0$ è perfettamente ammesso.</p>
<p>Per $x_0 \\in \\mathbb{R}$, "intorno di $x_0$" ha il significato usuale: un intervallo $(x_0-\\delta, x_0+\\delta)$ con $\\delta \\gt 0$; l'"intorno puntato" è $(x_0-\\delta,x_0)\\cup(x_0,x_0+\\delta)$. Per i punti all'infinito si adotta la convenzione:</p>
<p>$$\\text{intorno di } +\\infty: \\; (M,+\\infty), \\qquad \\text{intorno di } -\\infty: \\; (-\\infty,-M), \\qquad M \\gt 0.$$</p>
<p>Con questa lettura gli enunciati che seguono coprono in un colpo solo i limiti al finito e i limiti all'infinito.</p>`
          },
          {
            subtitle: "Proposizione: algebra dei limiti",
            content: `<p>Siano $f, g$ due funzioni definite in un intorno di $x_0 \\in \\mathbb{R}^* = \\mathbb{R} \\cup \\{-\\infty,+\\infty\\}$, escluso al più $x_0$. Se esistono finiti i limiti</p>
<p>$$\\lim_{x \\to x_0} f(x) = L \\in \\mathbb{R} \\quad \\text{e} \\quad \\lim_{x \\to x_0} g(x) = M \\in \\mathbb{R}$$</p>
<p>allora valgono le seguenti proprietà:</p>
<ol>
  <li><strong>Limite della somma</strong>: $$\\lim_{x \\to x_0} (f(x) + g(x)) = L + M$$</li>
  <li><strong>Limite del prodotto</strong>: $$\\lim_{x \\to x_0} (f(x) \\cdot g(x)) = L \\cdot M$$</li>
  <li><strong>Limite del prodotto per una costante</strong>: per ogni $c \\in \\mathbb{R}$, $$\\lim_{x \\to x_0} (c \\cdot f(x)) = c \\cdot L$$</li>
  <li><strong>Limite del quoziente</strong>: se $M \\ne 0$, $$\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = \\frac{L}{M}$$ (il quoziente è ben definito in un intorno puntato di $x_0$, perché da $M \\ne 0$ segue $g(x) \\ne 0$ definitivamente).</li>
</ol>`
          },
          {
            subtitle: "Come si trasferiscono dal mondo delle successioni",
            content: `<blockquote><p><strong>Nota del Prof.</strong> Non dimostriamo nuovamente questi teoremi da capo. L'idea è che, grazie al Teorema Ponte, possiamo trasferire i risultati noti per le successioni. Per esempio, per dimostrare la regola della somma:</p>
<ol>
  <li>Prendiamo una qualunque successione $(a_n)$ tale che $a_n \\to x_0$ (con $a_n \\ne x_0$).</li>
  <li>Per il Teorema Ponte, sappiamo che $\\lim_{n \\to \\infty} f(a_n) = L$ e $\\lim_{n \\to \\infty} g(a_n) = M$.</li>
  <li>Per l'algebra dei limiti delle successioni (che già conosciamo), vale $\\lim_{n \\to \\infty} (f(a_n) + g(a_n)) = L+M$.</li>
  <li>Poiché questo vale per <em>qualunque</em> successione $(a_n)$ che tende a $x_0$, il Teorema Ponte (usato al contrario) ci garantisce che $\\lim_{x \\to x_0} (f(x) + g(x)) = L+M$.</li>
</ol>
<p>Lo stesso ragionamento si applica a tutte le altre operazioni.</p></blockquote>`
          }
        ]
      },
      {
        id: "s21-algebra-estesa",
        type: "section",
        title: "Algebra estesa: operazioni con $\\pm\\infty$",
        icon: "♾️",
        content: `<p>Le regole si estendono anche ai casi in cui i limiti sono infiniti. La maggior parte dei casi si risolve intuitivamente, ma emergono delle <strong>forme indeterminate</strong>, che richiedono un'analisi più approfondita.</p>
<p>Siano $\\lim_{x \\to x_0} f(x) = +\\infty$ e $\\lim_{x \\to x_0} g(x) = L \\in \\mathbb{R}$.</p>
<ul>
  <li><strong>Somma</strong>: $+\\infty + L = +\\infty$.</li>
  <li><strong>Prodotto</strong>: se $L \\gt 0$, $(+\\infty) \\cdot L = +\\infty$. Se $L \\lt 0$, $(+\\infty) \\cdot L = -\\infty$.</li>
</ul>`,
        subsections: [
          {
            subtitle: "Quoziente con denominatore infinitesimo",
            content: `<p>Siano $\\lim_{x \\to x_0} f(x) = L \\in \\mathbb{R} \\setminus \\{0\\}$ e $\\lim_{x \\to x_0} g(x) = 0$. In questo caso <em>non</em> si può concludere nulla sulla sola base di queste ipotesi: occorre sapere <strong>con quale segno</strong> $g$ tende a zero. Ricordiamo che</p>
<p>$$g(x) \\to 0^+ \\iff g(x) \\to 0 \\ \\text{ e } \\ g(x) \\gt 0 \\text{ definitivamente (in un intorno puntato di } x_0),$$</p>
<p>$$g(x) \\to 0^- \\iff g(x) \\to 0 \\ \\text{ e } \\ g(x) \\lt 0 \\text{ definitivamente (in un intorno puntato di } x_0).$$</p>
<p>Sotto questa ipotesi aggiuntiva si ha:</p>
<ul>
  <li>se $g(x) \\to 0^+$: $\\displaystyle\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = +\\infty$ se $L \\gt 0$, $= -\\infty$ se $L \\lt 0$;</li>
  <li>se $g(x) \\to 0^-$: $\\displaystyle\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = -\\infty$ se $L \\gt 0$, $= +\\infty$ se $L \\lt 0$.</li>
</ul>
<p>In sintesi, <strong>il segno dell'infinito è il prodotto del segno di $L$ per il segno con cui $g(x)$ tende a zero</strong>.</p>`
          },
          {
            subtitle: "Limitata per infinitesima",
            content: `<p>Sia $f$ <em>limitata in un intorno puntato</em> di $x_0$ (cioè esiste $C \\gt 0$ tale che $|f(x)| \\le C$ per ogni $x$ in tale intorno) e sia $\\lim_{x\\to x_0} g(x) = 0$. Allora</p>
<p>$$\\lim_{x \\to x_0} f(x)g(x) = 0.$$</p>
<p>Infatti, nell'intorno considerato,</p>
<p>$$0 \\le |f(x)g(x)| = |f(x)|\\,|g(x)| \\le C\\,|g(x)| \\overset{x \\to x_0}{\\longrightarrow} 0,$$</p>
<p>e la tesi segue dal Teorema del Confronto. Si noti che <em>non</em> si richiede che $f$ abbia limite: basta che sia limitata vicino a $x_0$.</p>`
          }
        ],
        extra_content: `<p><strong>Attenzione</strong>: se $g$ non ha segno definitivamente costante, il limite può <em>non esistere</em>. Controesempio: $f(x)=1$, $g(x)=x$, $x_0=0$. Si ha $g(x)\\to 0$ ma $g$ cambia segno in ogni intorno di $0$, e infatti</p>
<p>$$\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty, \\qquad \\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty,$$</p>
<p>quindi $\\lim_{x\\to 0} \\frac{1}{x}$ non esiste. In casi come questo è necessaria un'analisi ulteriore (tipicamente lo studio dei due limiti laterali).</p>`
      },
      {
        id: "s21-integrazione-limitata-infinitesima",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempio illustrativo (limitata per infinitesima).</strong> La funzione $f(x)=\\sin\\frac{1}{x}$ non ha limite per $x\\to 0$ (oscilla indefinitamente), ma è limitata: $\\left|\\sin\\frac{1}{x}\\right| \\le 1$ per ogni $x \\ne 0$. Prendendo $g(x)=x$, che è infinitesima, si ottiene</p>
<p>$$\\left| x \\sin\\frac{1}{x} \\right| \\le 1 \\cdot |x| = |x| \\overset{x\\to 0}{\\longrightarrow} 0 \\quad\\Longrightarrow\\quad \\lim_{x\\to 0} x \\sin\\frac{1}{x} = 0.$$</p>
<p>Qui $C=1$: l'esistenza del limite di $f$ non è mai stata usata.</p>`
      },
      {
        id: "s21-forme-indeterminate",
        type: "alert_box",
        title: "Forme indeterminate",
        icon: "⚠️",
        content: `<p><strong>Definizione.</strong> Le seguenti operazioni non hanno un risultato definito a priori e sono dette <strong>forme indeterminate</strong>:</p>
<ul>
  <li>Somma: $(+\\infty) + (-\\infty)$ oppure $(+\\infty) - (+\\infty)$</li>
  <li>Prodotto: $0 \\cdot (\\pm\\infty)$</li>
  <li>Quoziente: $\\dfrac{0}{0}$</li>
  <li>Quoziente: $\\dfrac{\\pm\\infty}{\\pm\\infty}$</li>
</ul>
<p>A queste si aggiungeranno in seguito le forme indeterminate per le potenze: $1^\\infty$, $0^0$, $\\infty^0$.</p>`
      },
      {
        id: "s21-integrazione-indeterminata",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempio illustrativo: perché "indeterminata" significa davvero indeterminata.</strong></p>
<p>Dire che un limite si presenta nella forma $\\frac{0}{0}$ <em>non</em> è un risultato: è solo la constatazione che l'algebra dei limiti non si applica. Il valore dipende da <em>come</em> numeratore e denominatore tendono a zero. Confrontiamo tre quozienti per $x \\to 0$, tutti della forma $\\frac{0}{0}$:</p>
<p>$$\\lim_{x\\to 0} \\frac{x}{x} = \\lim_{x \\to 0} 1 = 1$$</p>
<p>$$\\lim_{x\\to 0} \\frac{x^2}{x} = \\lim_{x \\to 0} x = 0$$</p>
<p>$$\\lim_{x\\to 0^+} \\frac{x}{x^2} = \\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$</p>
<p>Tre risultati diversi ($1$, $0$, $+\\infty$) a partire dalla stessa forma: ecco perché in presenza di una forma indeterminata bisogna <em>manipolare</em> l'espressione (semplificare, raccogliere il termine dominante, usare limiti notevoli) prima di passare al limite.</p>
<p><strong>Procedura tipica.</strong> Di fronte a $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$:</p>
<ol>
  <li>si riconosce la forma indeterminata sostituendo formalmente;</li>
  <li>si cerca il termine "dominante" a numeratore e a denominatore;</li>
  <li>si semplifica (o si raccoglie) e si riapplica l'algebra dei limiti.</li>
</ol>`
      },
      {
        id: "s21-gerarchia-infiniti",
        type: "section",
        title: "Gerarchia degli infiniti",
        icon: "📈",
        content: `<p>Anche per le funzioni vale la gerarchia degli infiniti che abbiamo stabilito per le successioni. L'esponenziale "vince" sulla potenza, e la potenza "vince" sul logaritmo.</p>
<p><strong>Proposizione (gerarchia degli infiniti).</strong></p>
<ul>
  <li><strong>Esponenziale vs Potenza</strong>: per ogni $\\alpha \\in \\mathbb{R}$ e $b \\gt 1$, $$\\lim_{x \\to +\\infty} \\frac{x^\\alpha}{b^x} = 0$$</li>
  <li><strong>Potenza vs Logaritmo</strong>: per ogni $\\alpha \\in \\mathbb{R}$, $\\beta \\gt 0$ e $b \\gt 0$, $b \\ne 1$, $$\\lim_{x \\to +\\infty} \\frac{|\\log_b x|^\\alpha}{x^\\beta} = 0$$</li>
  <li><strong>Comportamento in zero</strong>: per ogni $\\alpha \\in \\mathbb{R}$, $\\beta \\gt 0$ e $b \\gt 0$, $b \\ne 1$, $$\\lim_{x \\to 0^+} x^\\beta \\,|\\log_b x|^\\alpha = 0$$</li>
</ul>`,
        subsections: [
          {
            subtitle: "Perché il valore assoluto sul logaritmo",
            content: `<p>Il valore assoluto non è un vezzo di notazione: serve a rendere l'enunciato sensato per <em>ogni</em> base ammessa e per ogni esponente reale $\\alpha$. Infatti se $0 \\lt b \\lt 1$ e $x \\gt 1$ si ha $\\log_b x \\lt 0$, e una potenza reale arbitraria di un numero negativo non è in generale definita: con $\\alpha = \\frac12$ la scrittura $(\\log_b x)^{1/2}$ richiederebbe la radice quadrata di un numero negativo. Scrivendo $|\\log_b x|^\\alpha$ la base della potenza è positiva e tutto è ben definito (per $x \\ne 1$).</p>
<p>In alternativa, si può mantenere $(\\log_b x)^\\alpha$ restringendo l'enunciato al caso $b \\gt 1$, dove $\\log_b x \\gt 0$ per $x \\gt 1$. Le due formulazioni sono equivalenti a meno del segno, perché $\\log_{1/b} x = -\\log_b x$.</p>`
          }
        ],
        formulas: [
          { label: "Esponenziale batte potenza", latex: "\\lim_{x \\to +\\infty} \\frac{x^\\alpha}{b^x} = 0 \\qquad (b \\gt 1)" },
          { label: "Potenza batte logaritmo", latex: "\\lim_{x \\to +\\infty} \\frac{|\\log_b x|^\\alpha}{x^\\beta} = 0 \\qquad (\\beta \\gt 0)" },
          { label: "Comportamento in zero", latex: "\\lim_{x \\to 0^+} x^\\beta |\\log_b x|^\\alpha = 0 \\qquad (\\beta \\gt 0)" }
        ]
      },
      {
        id: "s21-integrazione-gerarchia",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Esempi illustrativi di uso della gerarchia.</strong></p>
<p><em>(a) Esponenziale contro potenza.</em> Calcoliamo $\\lim_{x \\to +\\infty} \\dfrac{x^3}{2^x}$. Il limite si presenta nella forma indeterminata $\\frac{+\\infty}{+\\infty}$: sia $x^3 \\to +\\infty$ sia $2^x \\to +\\infty$. La gerarchia degli infiniti si applica direttamente con $\\alpha = 3$ e $b = 2 \\gt 1$:</p>
<p>$$\\lim_{x \\to +\\infty} \\frac{x^3}{2^x} = 0.$$</p>
<p>Interpretazione: l'esponenziale con base $\\gt 1$ cresce più rapidamente di <em>qualunque</em> potenza, anche di esponente grande; il denominatore domina e il rapporto è infinitesimo.</p>
<p><em>(b) Potenza contro logaritmo in zero.</em> Calcoliamo $\\lim_{x \\to 0^+} x^{1/2}\\,|\\log x|$. Qui $x^{1/2} \\to 0$ mentre $|\\log x| \\to +\\infty$: la forma è $0 \\cdot (+\\infty)$, indeterminata. Applichiamo il terzo punto della proposizione con $\\beta = \\frac12 \\gt 0$, $\\alpha = 1$ e $b = e$:</p>
<p>$$\\lim_{x \\to 0^+} x^{1/2}\\,|\\log x| = 0.$$</p>
<p>Interpretazione: per $x \\to 0^+$ il logaritmo diverge, ma "lentamente"; qualunque potenza $x^\\beta$ con $\\beta \\gt 0$ lo schiaccia a zero.</p>
<p><em>(c) Come si riconosce il caso.</em> In entrambi gli esempi la strategia è la stessa: individuare quale dei due fattori (o termini del quoziente) è il "più forte" secondo la scala</p>
<p>$$\\text{logaritmo} \\prec \\text{potenza} \\prec \\text{esponenziale} \\qquad (\\text{per } x \\to +\\infty),$$</p>
<p>e concludere che il rapporto tende a $0$ se il termine dominante sta al denominatore, a $\\pm\\infty$ se sta al numeratore. Per esempio, per lo stesso motivo</p>
<p>$$\\lim_{x \\to +\\infty} \\frac{2^x}{x^3} = +\\infty, \\qquad \\lim_{x \\to +\\infty} \\frac{x^{1/2}}{\\log x} = +\\infty.$$</p>`
      },
      {
        id: "s21-funzioni-elementari",
        type: "section",
        title: "Limiti di funzioni elementari",
        icon: "📚",
        content: `<p>Riassumiamo i limiti delle principali funzioni elementari. La maggior parte di questi derivano dalla proprietà di continuità: per una funzione continua $f$, $\\lim_{x \\to x_0} f(x) = f(x_0)$.</p>`,
        subsections: [
          {
            subtitle: "Funzioni potenza: $f(x) = x^\\alpha$",
            content: `<ul>
  <li>Per $x_0$ nel dominio, $\\lim_{x \\to x_0} x^\\alpha = x_0^\\alpha$.</li>
  <li>Limite a $+\\infty$: $$\\lim_{x \\to +\\infty} x^\\alpha = \\begin{cases} +\\infty & \\text{se } \\alpha \\gt 0 \\\\ 1 & \\text{se } \\alpha = 0 \\\\ 0 & \\text{se } \\alpha \\lt 0 \\end{cases}$$</li>
  <li>Limite a $0^+$: $$\\lim_{x \\to 0^+} x^\\alpha = \\begin{cases} 0 & \\text{se } \\alpha \\gt 0 \\\\ 1 & \\text{se } \\alpha = 0 \\\\ +\\infty & \\text{se } \\alpha \\lt 0 \\end{cases}$$</li>
</ul>
<figure class="figura" data-id="analisi1_lez21b_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.2, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="analisi1_lez21b_g1-figure_1">
  <g id="analisi1_lez21b_g1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez21b_g1-axes_1">
   <g id="analisi1_lez21b_g1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez21b_g1-matplotlib.axis_1">
    <g id="analisi1_lez21b_g1-xtick_1">
     <g id="analisi1_lez21b_g1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_2">
      <defs>
       <path id="analisi1_lez21b_g1-md7955bd37c" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g1-md7955bd37c" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_1">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(41.300625 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g1-DejaVuSans-13" d="M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-xtick_2">
     <g id="analisi1_lez21b_g1-line2d_3">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez21b_g1-md7955bd37c" x="234.666667" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_2">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(231.167292 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g1-DejaVuSans-14" d="M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-xtick_3">
     <g id="analisi1_lez21b_g1-line2d_5">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez21b_g1-md7955bd37c" x="424.533333" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_3">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(421.033958 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g1-DejaVuSans-15" d="M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-xtick_4">
     <g id="analisi1_lez21b_g1-line2d_7">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez21b_g1-md7955bd37c" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_4">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(610.900625 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g1-DejaVuSans-16" d="M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g1-matplotlib.axis_2">
    <g id="analisi1_lez21b_g1-ytick_1">
     <g id="analisi1_lez21b_g1-line2d_9">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_10">
      <defs>
       <path id="analisi1_lez21b_g1-m890531e9e5" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g1-m890531e9e5" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_5">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(31.30125 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-ytick_2">
     <g id="analisi1_lez21b_g1-line2d_11">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez21b_g1-m890531e9e5" x="44.8" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_6">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(31.30125 254.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-ytick_3">
     <g id="analisi1_lez21b_g1-line2d_13">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez21b_g1-m890531e9e5" x="44.8" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_7">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(31.30125 141.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-ytick_4">
     <g id="analisi1_lez21b_g1-line2d_15">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g1-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez21b_g1-m890531e9e5" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g1-text_8">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(31.30125 28.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g1-line2d_17">
    <defs>
     <path id="analisi1_lez21b_g1-m8132a0f083" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g1-m8132a0f083" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g1-line2d_18">
    <defs>
     <path id="analisi1_lez21b_g1-md11df9a3b4" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g1-md11df9a3b4" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g1-line2d_19">
    <path d="M 44.8 364 
L 50.975813 363.880092 
L 57.151626 363.520368 
L 63.32744 362.920827 
L 69.503253 362.08147 
L 75.679066 361.002298 
L 81.854879 359.683309 
L 88.030692 358.124503 
L 94.206505 356.325882 
L 100.382319 354.287444 
L 106.558132 352.00919 
L 112.733945 349.49112 
L 118.909758 346.733234 
L 125.085571 343.735532 
L 131.261384 340.498013 
L 137.437198 337.020678 
L 143.613011 333.303527 
L 150.263887 329.032245 
L 156.914762 324.482832 
L 163.565638 319.65529 
L 170.216514 314.549617 
L 176.867389 309.165814 
L 183.518265 303.503882 
L 190.169141 297.563819 
L 197.295079 290.890827 
L 204.421018 283.898553 
L 211.546956 276.586997 
L 218.672894 268.95616 
L 225.798832 261.00604 
L 232.924771 252.736638 
L 240.525771 243.564024 
L 248.126772 234.028137 
L 255.727773 224.128979 
L 263.328774 213.866549 
L 270.929775 203.240846 
L 279.005838 191.553 
L 287.081902 179.455053 
L 295.157965 166.947007 
L 303.234028 154.028861 
L 311.310092 140.700614 
L 319.386155 126.962268 
L 327.937281 111.96879 
L 336.488407 96.515545 
L 345.039533 80.602534 
L 353.590659 64.229758 
L 362.616847 46.448593 
L 371.643036 28.155158 
L 380.669224 9.349454 
L 385.53461 -1 
L 385.53461 -1 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g1-line2d_20">
    <path d="M 44.8 364 
L 614.4 24 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g1-line2d_21">
    <path d="M 44.8 364 
L 45.275063 358.330971 
L 46.225188 354.180953 
L 47.175313 351.323665 
L 48.6005 347.965564 
L 50.025688 345.197957 
L 51.925938 342.043944 
L 53.826188 339.289274 
L 56.201501 336.227542 
L 59.051877 332.949448 
L 62.377314 329.516641 
L 65.702752 326.395914 
L 69.503253 323.120049 
L 73.778816 319.723466 
L 78.529441 316.23191 
L 83.755129 312.664757 
L 89.45588 309.036722 
L 95.631693 305.359105 
L 102.757631 301.383525 
L 110.358632 297.403985 
L 118.434696 293.421155 
L 127.460884 289.220368 
L 136.962135 285.039559 
L 147.413511 280.682626 
L 158.815013 276.175776 
L 171.166639 271.540931 
L 184.46839 266.796397 
L 198.720267 261.957473 
L 213.922269 257.03697 
L 230.074395 252.045643 
L 247.176647 246.992555 
L 265.704087 241.753854 
L 285.181651 236.47834 
L 306.084404 231.049479 
L 328.412344 225.485301 
L 352.165471 219.801468 
L 377.343786 214.011584 
L 403.947289 208.127466 
L 431.97598 202.159392 
L 461.429858 196.116314 
L 492.783987 189.91372 
L 525.563303 183.657139 
L 560.242869 177.265928 
L 596.822686 170.753444 
L 614.4 167.700908 
L 614.4 167.700908 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #d97706; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g1-line2d_22">
    <path d="M 103.75437 -1 
L 106.558132 15.57265 
L 109.408507 30.944444 
L 112.258882 45.017214 
L 115.109258 57.948949 
L 117.959633 69.873016 
L 120.810008 80.902778 
L 123.660384 91.135207 
L 126.985822 102.175979 
L 130.311259 112.358025 
L 133.636697 121.777778 
L 136.962135 130.517755 
L 140.287573 138.648977 
L 143.613011 146.232906 
L 146.938449 153.322997 
L 150.738949 160.880917 
L 154.53945 167.915344 
L 158.33995 174.478847 
L 162.14045 180.617184 
L 165.940951 186.37037 
L 170.216514 192.425926 
L 174.492077 198.082214 
L 178.76764 203.377463 
L 183.043203 208.34517 
L 187.793828 213.516427 
L 192.544454 218.355127 
L 197.295079 222.89235 
L 202.520767 227.567604 
L 207.746455 231.942987 
L 213.447206 236.406886 
L 219.147957 240.578868 
L 224.848707 244.486661 
L 231.02452 248.450113 
L 237.200334 252.159122 
L 243.851209 255.896049 
L 250.977148 259.63236 
L 258.103086 263.11903 
L 265.704087 266.590203 
L 273.78015 270.025818 
L 282.331276 273.408889 
L 290.882402 276.556843 
L 299.90859 279.650735 
L 309.409842 282.679433 
L 319.386155 285.633987 
L 330.312594 288.633019 
L 341.714095 291.527111 
L 353.590659 294.31453 
L 366.417348 297.093714 
L 379.719099 299.750985 
L 393.970976 302.373394 
L 409.172977 304.944517 
L 425.325104 307.451242 
L 442.902419 309.948024 
L 461.429858 312.351704 
L 481.382485 314.712127 
L 502.7603 317.012909 
L 525.563303 319.241546 
L 550.266555 321.428989 
L 576.870058 323.55754 
L 605.373812 325.613936 
L 614.4 326.222222 
L 614.4 326.222222 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke: #c2185b; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g1-line2d_23">
    <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez21b_g1-pc0cf74adac)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_g1-patch_3">
    <path d="M 44.8 364 
L 44.8 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g1-patch_4">
    <path d="M 44.8 364 
L 614.4 364 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g1-legend_1" transform="translate(402 189)">
    <g id="analisi1_lez21b_g1-line2d_24">
     <path d="M 54.7 40.39 
L 65.7 40.39 
L 76.7 40.39 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g1-text_9">
     <g style="fill: currentColor" transform="translate(85.5 44.24) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g1-DejaVuSans-Oblique-5b" d="M 3841 3500 
L 2234 1784 
L 3219 0 
L 2559 0 
L 1819 1388 
L 531 0 
L -166 0 
L 1556 1844 
L 641 3500 
L 1300 3500 
L 1972 2234 
L 3144 3500 
L 3841 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g1-DejaVuSans-b" d="M 1984 4856 
Q 1566 4138 1362 3434 
Q 1159 2731 1159 2009 
Q 1159 1288 1364 580 
Q 1569 -128 1984 -844 
L 1484 -844 
Q 1016 -109 783 600 
Q 550 1309 550 2009 
Q 550 2706 781 3412 
Q 1013 4119 1484 4856 
L 1984 4856 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g1-DejaVuSans-Oblique-345" d="M 2619 1628 
L 2622 2350 
Q 2625 3088 2069 3091 
Q 1653 3094 1394 2747 
Q 1069 2319 959 1747 
Q 825 1059 994 731 
Q 1169 397 1547 397 
Q 1966 397 2319 1063 
L 2619 1628 
z
M 2166 3578 
Q 3141 3594 3128 2584 
Q 3128 2584 3616 3500 
L 4128 3500 
L 3119 1603 
L 3109 919 
Q 3109 766 3194 638 
Q 3291 488 3391 488 
L 3669 488 
L 3575 0 
L 3228 0 
Q 2934 0 2722 263 
Q 2622 394 2619 669 
Q 2416 334 2066 50 
Q 1900 -81 1453 -78 
Q 722 -72 456 397 
Q 184 884 353 1747 
Q 534 2675 1009 3097 
Q 1544 3569 2166 3578 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g1-DejaVuSans-21" d="M 678 3150 
L 678 3719 
L 4684 2266 
L 4684 1747 
L 678 294 
L 678 863 
L 3897 2003 
L 678 3150 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g1-DejaVuSans-c" d="M 513 4856 
L 1013 4856 
Q 1481 4119 1714 3412 
Q 1947 2706 1947 2009 
Q 1947 1309 1714 600 
Q 1481 -109 1013 -844 
L 513 -844 
Q 928 -128 1133 580 
Q 1338 1288 1338 2009 
Q 1338 2731 1133 3434 
Q 928 4138 513 4856 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-5b" transform="translate(0 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-15" transform="translate(63.645833 42.046875) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-b" transform="translate(143.38672 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-345" transform="translate(182.400391 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-21" transform="translate(267.800782 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14" transform="translate(371.072266 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-c" transform="translate(434.695313 0.746875)"/>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-line2d_25">
     <path d="M 54.7 56.892578 
L 65.7 56.892578 
L 76.7 56.892578 
" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g1-text_10">
     <g style="fill: currentColor" transform="translate(85.5 60.742578) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g1-DejaVuSans-20" d="M 678 2906 
L 4684 2906 
L 4684 2381 
L 678 2381 
L 678 2906 
z
M 678 1631 
L 4684 1631 
L 4684 1100 
L 678 1100 
L 678 1631 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-5b" transform="translate(0 0.125)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-b" transform="translate(91.650066 0.125)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-345" transform="translate(130.663738 0.125)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-20" transform="translate(216.064128 0.125)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14" transform="translate(319.335613 0.125)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-c" transform="translate(382.95866 0.125)"/>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-line2d_26">
     <path d="M 54.7 75.375156 
L 65.7 75.375156 
L 76.7 75.375156 
" style="fill: none; stroke: #d97706; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g1-text_11">
     <g style="fill: currentColor" transform="translate(85.5 79.225156) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g1-DejaVuSans-12" d="M 1625 4666 
L 2156 4666 
L 531 -594 
L 0 -594 
L 1625 4666 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g1-DejaVuSans-1f" d="M 4684 3150 
L 1459 2003 
L 4684 863 
L 4684 294 
L 678 1747 
L 678 2266 
L 4684 3719 
L 4684 3150 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-5b" transform="translate(0 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14" transform="translate(63.645833 42.046875) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-12" transform="translate(108.181966 42.046875) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-15" transform="translate(131.765951 42.046875) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-b" transform="translate(211.506837 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-13" transform="translate(250.520509 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-1f" transform="translate(333.625977 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-345" transform="translate(436.897462 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-1f" transform="translate(522.297852 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14" transform="translate(625.569337 0.746875)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-c" transform="translate(689.192384 0.746875)"/>
     </g>
    </g>
    <g id="analisi1_lez21b_g1-line2d_27">
     <path d="M 54.7 93.747734 
L 65.7 93.747734 
L 76.7 93.747734 
" style="fill: none; stroke: #c2185b; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g1-text_12">
     <g style="fill: currentColor" transform="translate(85.5 97.597734) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g1-DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-5b" transform="translate(0 0.665625)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-c9c" transform="translate(63.645833 41.965625) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-14" transform="translate(122.298177 41.965625) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-b" transform="translate(202.039063 0.665625)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-Oblique-345" transform="translate(241.052735 0.665625)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-1f" transform="translate(326.453126 0.665625)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-13" transform="translate(429.72461 0.665625)"/>
      <use xlink:href="#analisi1_lez21b_g1-DejaVuSans-c" transform="translate(493.347657 0.665625)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez21b_g1-pc0cf74adac">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
<p>Per $x \\gt 0$: se $\\alpha \\gt 0$ le curve tendono a $0$ per $x \\to 0^+$; se $\\alpha \\lt 0$ l'asse $y$ è asintoto verticale.</p>`
          },
          {
            subtitle: "Funzioni esponenziali: $f(x) = b^x$ con $b \\gt 0$",
            content: `<ul>
  <li>Per ogni $x_0 \\in \\mathbb{R}$, $\\lim_{x \\to x_0} b^x = b^{x_0}$.</li>
  <li>Limite a $+\\infty$: $$\\lim_{x \\to +\\infty} b^x = \\begin{cases} +\\infty & \\text{se } b \\gt 1 \\\\ 1 & \\text{se } b = 1 \\\\ 0 & \\text{se } 0 \\lt b \\lt 1 \\end{cases}$$</li>
  <li>Limite a $-\\infty$: $$\\lim_{x \\to -\\infty} b^x = \\begin{cases} 0 & \\text{se } b \\gt 1 \\\\ 1 & \\text{se } b = 1 \\\\ +\\infty & \\text{se } 0 \\lt b \\lt 1 \\end{cases}$$</li>
</ul>
<figure class="figura" data-id="analisi1_lez21b_g2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.2, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="analisi1_lez21b_g2-figure_1">
  <g id="analisi1_lez21b_g2-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez21b_g2-axes_1">
   <g id="analisi1_lez21b_g2-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez21b_g2-matplotlib.axis_1">
    <g id="analisi1_lez21b_g2-xtick_1">
     <g id="analisi1_lez21b_g2-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_2">
      <defs>
       <path id="analisi1_lez21b_g2-m597d84dcfc" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_1">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(39.316328 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez21b_g2-DejaVuSans-16" d="M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-xtick_2">
     <g id="analisi1_lez21b_g2-line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="139.733333" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_2">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(134.249661 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-15" d="M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-xtick_3">
     <g id="analisi1_lez21b_g2-line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="234.666667" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_3">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(229.182995 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-14" d="M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-xtick_4">
     <g id="analisi1_lez21b_g2-line2d_7">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_4">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-13" d="M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-xtick_5">
     <g id="analisi1_lez21b_g2-line2d_9">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="424.533333" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_5">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(421.033958 378.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-xtick_6">
     <g id="analisi1_lez21b_g2-line2d_11">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="519.466667" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_6">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(515.967292 378.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-xtick_7">
     <g id="analisi1_lez21b_g2-line2d_13">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m597d84dcfc" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_7">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(610.900625 378.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-16"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g2-matplotlib.axis_2">
    <g id="analisi1_lez21b_g2-ytick_1">
     <g id="analisi1_lez21b_g2-line2d_15">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_16">
      <defs>
       <path id="analisi1_lez21b_g2-m54ab1e47f5" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m54ab1e47f5" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_8">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-ytick_2">
     <g id="analisi1_lez21b_g2-line2d_17">
      <path d="M 44.8 279 
L 614.4 279 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m54ab1e47f5" x="329.6" y="279" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_9">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(316.10125 283.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-ytick_3">
     <g id="analisi1_lez21b_g2-line2d_19">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m54ab1e47f5" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_10">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(316.10125 198.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-17" d="M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-ytick_4">
     <g id="analisi1_lez21b_g2-line2d_21">
      <path d="M 44.8 109 
L 614.4 109 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m54ab1e47f5" x="329.6" y="109" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_11">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 113.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-19" d="M 2113 2584 
Q 1688 2584 1439 2293 
Q 1191 2003 1191 1497 
Q 1191 994 1439 701 
Q 1688 409 2113 409 
Q 2538 409 2786 701 
Q 3034 994 3034 1497 
Q 3034 2003 2786 2293 
Q 2538 2584 2113 2584 
z
M 3366 4563 
L 3366 3988 
Q 3128 4100 2886 4159 
Q 2644 4219 2406 4219 
Q 1781 4219 1451 3797 
Q 1122 3375 1075 2522 
Q 1259 2794 1537 2939 
Q 1816 3084 2150 3084 
Q 2853 3084 3261 2657 
Q 3669 2231 3669 1497 
Q 3669 778 3244 343 
Q 2819 -91 2113 -91 
Q 1303 -91 875 529 
Q 447 1150 447 2328 
Q 447 3434 972 4092 
Q 1497 4750 2381 4750 
Q 2619 4750 2861 4703 
Q 3103 4656 3366 4563 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-19"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-ytick_5">
     <g id="analisi1_lez21b_g2-line2d_23">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g2-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez21b_g2-m54ab1e47f5" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g2-text_12">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(316.10125 28.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g2-DejaVuSans-1b" d="M 2034 2216 
Q 1584 2216 1326 1975 
Q 1069 1734 1069 1313 
Q 1069 891 1326 650 
Q 1584 409 2034 409 
Q 2484 409 2743 651 
Q 3003 894 3003 1313 
Q 3003 1734 2745 1975 
Q 2488 2216 2034 2216 
z
M 1403 2484 
Q 997 2584 770 2862 
Q 544 3141 544 3541 
Q 544 4100 942 4425 
Q 1341 4750 2034 4750 
Q 2731 4750 3128 4425 
Q 3525 4100 3525 3541 
Q 3525 3141 3298 2862 
Q 3072 2584 2669 2484 
Q 3125 2378 3379 2068 
Q 3634 1759 3634 1313 
Q 3634 634 3220 271 
Q 2806 -91 2034 -91 
Q 1263 -91 848 271 
Q 434 634 434 1313 
Q 434 1759 690 2068 
Q 947 2378 1403 2484 
z
M 1172 3481 
Q 1172 3119 1398 2916 
Q 1625 2713 2034 2713 
Q 2441 2713 2670 2916 
Q 2900 3119 2900 3481 
Q 2900 3844 2670 4047 
Q 2441 4250 2034 4250 
Q 1625 4250 1398 4047 
Q 1172 3844 1172 3481 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-1b"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g2-line2d_25">
    <defs>
     <path id="analisi1_lez21b_g2-m20d8052b92" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g2-m20d8052b92" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g2-line2d_26">
    <defs>
     <path id="analisi1_lez21b_g2-mdc916829fd" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g2-mdc916829fd" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g2-line2d_27">
    <path d="M 44.8 358.6875 
L 71.878565 357.526129 
L 96.581818 356.246512 
L 118.909758 354.873628 
L 139.81251 353.368856 
L 159.290075 351.744173 
L 177.342452 350.017461 
L 194.444704 348.157759 
L 210.596831 346.174801 
L 225.798832 344.082292 
L 240.050709 341.898002 
L 253.827523 339.559095 
L 266.654212 337.159523 
L 279.005838 334.626428 
L 290.882402 331.965578 
L 302.283903 329.184661 
L 313.210342 326.29335 
L 323.661718 323.303331 
L 333.638032 320.228304 
L 343.614345 316.920929 
L 353.115596 313.538984 
L 362.616847 309.914095 
L 371.643036 306.229543 
L 380.194162 302.507649 
L 388.745288 298.54597 
L 397.296414 294.329057 
L 405.372477 290.097254 
L 413.44854 285.608411 
L 421.049541 281.134844 
L 428.650542 276.405984 
L 436.251543 271.407263 
L 443.377481 266.462189 
L 450.50342 261.253016 
L 457.629358 255.765638 
L 464.755296 249.985197 
L 471.406172 244.311915 
L 478.057048 238.356336 
L 484.707923 232.104413 
L 491.358799 225.541399 
L 498.009675 218.651814 
L 504.66055 211.41941 
L 510.836364 204.381745 
L 517.012177 197.019473 
L 523.18799 189.317622 
L 529.363803 181.260528 
L 535.539616 172.831807 
L 541.71543 164.014318 
L 547.891243 154.790128 
L 554.067056 145.14048 
L 560.242869 135.045749 
L 565.94362 125.314754 
L 571.64437 115.170172 
L 577.345121 104.594427 
L 583.045872 93.569192 
L 588.746622 82.075363 
L 594.447373 70.093024 
L 600.148123 57.601413 
L 605.848874 44.578885 
L 611.549625 31.002874 
L 614.4 24 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g2-line2d_28">
    <path d="M 44.8 24 
L 50.500751 37.861512 
L 56.201501 51.157902 
L 61.902252 63.91221 
L 67.603003 76.146535 
L 73.303753 87.882077 
L 79.004504 99.139171 
L 84.705254 109.937323 
L 90.406005 120.295243 
L 96.581818 131.040333 
L 102.757631 141.311665 
L 108.933445 151.130128 
L 115.109258 160.515689 
L 121.285071 169.487435 
L 127.460884 178.063611 
L 133.636697 186.261659 
L 139.81251 194.098249 
L 145.988324 201.58932 
L 152.164137 208.750105 
L 158.815013 216.109036 
L 165.465888 223.119149 
L 172.116764 229.796979 
L 178.76764 236.158276 
L 185.418515 242.218044 
L 192.069391 247.990576 
L 199.195329 253.872143 
L 206.321268 259.455519 
L 213.447206 264.755824 
L 220.573144 269.787408 
L 228.174145 274.873579 
L 235.775146 279.685168 
L 243.376147 284.236997 
L 251.45221 288.80437 
L 259.528274 293.110206 
L 267.604337 297.169483 
L 276.155463 301.214475 
L 284.706589 305.01464 
L 293.732777 308.776678 
L 302.758966 312.298775 
L 312.260217 315.76384 
L 321.761468 318.996673 
L 331.737781 322.158224 
L 342.189158 325.232376 
L 353.115596 328.205041 
L 364.042035 330.949766 
L 375.443536 333.589692 
L 387.3201 336.11564 
L 399.671726 338.52031 
L 412.973478 340.878564 
L 426.750292 343.091203 
L 441.002168 345.157571 
L 456.20417 347.137114 
L 472.356297 349.01302 
L 489.458549 350.772324 
L 507.510926 352.405817 
L 526.98849 353.94279 
L 547.891243 355.366325 
L 570.694245 356.690491 
L 595.397498 357.896834 
L 614.4 358.6875 
L 614.4 358.6875 
" clip-path="url(#analisi1_lez21b_g2-p48ff2bcf00)" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g2-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g2-patch_4">
    <path d="M 44.8 364 
L 614.4 364 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g2-legend_1" transform="translate(117 14)">
    <g id="analisi1_lez21b_g2-line2d_29">
     <path d="M 279.55 38.85 
L 290.55 38.85 
L 301.55 38.85 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g2-text_13">
     <g style="fill: currentColor" transform="translate(310.35 42.7) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g2-DejaVuSans-Oblique-45" d="M 3169 2138 
Q 3169 2591 2961 2847 
Q 2753 3103 2388 3103 
Q 2122 3103 1889 2973 
Q 1656 2844 1484 2597 
Q 1303 2338 1198 1995 
Q 1094 1653 1094 1313 
Q 1094 881 1298 636 
Q 1503 391 1863 391 
Q 2134 391 2365 517 
Q 2597 644 2772 891 
Q 2950 1147 3059 1487 
Q 3169 1828 3169 2138 
z
M 1381 2969 
Q 1594 3256 1914 3420 
Q 2234 3584 2584 3584 
Q 3122 3584 3439 3221 
Q 3756 2859 3756 2241 
Q 3756 1734 3570 1259 
Q 3384 784 3041 416 
Q 2816 172 2522 40 
Q 2228 -91 1906 -91 
Q 1566 -91 1316 65 
Q 1066 222 909 531 
L 806 0 
L 231 0 
L 1178 4863 
L 1753 4863 
L 1381 2969 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g2-DejaVuSans-Oblique-5b" d="M 3841 3500 
L 2234 1784 
L 3219 0 
L 2559 0 
L 1819 1388 
L 531 0 
L -166 0 
L 1556 1844 
L 641 3500 
L 1300 3500 
L 1972 2234 
L 3144 3500 
L 3841 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g2-DejaVuSans-b" d="M 1984 4856 
Q 1566 4138 1362 3434 
Q 1159 2731 1159 2009 
Q 1159 1288 1364 580 
Q 1569 -128 1984 -844 
L 1484 -844 
Q 1016 -109 783 600 
Q 550 1309 550 2009 
Q 550 2706 781 3412 
Q 1013 4119 1484 4856 
L 1984 4856 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g2-DejaVuSans-21" d="M 678 3150 
L 678 3719 
L 4684 2266 
L 4684 1747 
L 678 294 
L 678 863 
L 3897 2003 
L 678 3150 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g2-DejaVuSans-c" d="M 513 4856 
L 1013 4856 
Q 1481 4119 1714 3412 
Q 1947 2706 1947 2009 
Q 1947 1309 1714 600 
Q 1481 -109 1013 -844 
L 513 -844 
Q 928 -128 1133 580 
Q 1338 1288 1338 2009 
Q 1338 2731 1133 3434 
Q 928 4138 513 4856 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-Oblique-45" transform="translate(0 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-Oblique-5b" transform="translate(70.924271 41.71875) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-b" transform="translate(115.084427 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-Oblique-45" transform="translate(154.098099 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-21" transform="translate(237.057083 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-14" transform="translate(340.328568 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-c" transform="translate(403.951615 0.41875)"/>
     </g>
    </g>
    <g id="analisi1_lez21b_g2-line2d_30">
     <path d="M 279.55 55.792578 
L 290.55 55.792578 
L 301.55 55.792578 
" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g2-text_14">
     <g style="fill: currentColor" transform="translate(310.35 59.642578) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g2-DejaVuSans-1f" d="M 4684 3150 
L 1459 2003 
L 4684 863 
L 4684 294 
L 678 1747 
L 678 2266 
L 4684 3719 
L 4684 3150 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-Oblique-45" transform="translate(0 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-Oblique-5b" transform="translate(70.924271 41.71875) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-b" transform="translate(115.084427 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-13" transform="translate(154.098099 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-1f" transform="translate(237.203568 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-Oblique-45" transform="translate(340.475052 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-1f" transform="translate(423.434036 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-14" transform="translate(526.705521 0.41875)"/>
      <use xlink:href="#analisi1_lez21b_g2-DejaVuSans-c" transform="translate(590.328568 0.41875)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez21b_g2-p48ff2bcf00">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
          },
          {
            subtitle: "Funzioni logaritmiche: $f(x) = \\log_b x$ con $b \\gt 0$, $b \\ne 1$",
            content: `<ul>
  <li>Per ogni $x_0 \\gt 0$, $\\lim_{x \\to x_0} \\log_b x = \\log_b x_0$.</li>
  <li>Limite a $+\\infty$: $$\\lim_{x \\to +\\infty} \\log_b x = \\begin{cases} +\\infty & \\text{se } b \\gt 1 \\\\ -\\infty & \\text{se } 0 \\lt b \\lt 1 \\end{cases}$$</li>
  <li>Limite a $0^+$: $$\\lim_{x \\to 0^+} \\log_b x = \\begin{cases} -\\infty & \\text{se } b \\gt 1 \\\\ +\\infty & \\text{se } 0 \\lt b \\lt 1 \\end{cases}$$</li>
</ul>
<figure class="figura" data-id="analisi1_lez21b_g3"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.2, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="analisi1_lez21b_g3-figure_1">
  <g id="analisi1_lez21b_g3-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez21b_g3-axes_1">
   <g id="analisi1_lez21b_g3-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez21b_g3-matplotlib.axis_1">
    <g id="analisi1_lez21b_g3-xtick_1">
     <g id="analisi1_lez21b_g3-line2d_1">
      <path d="M 157.806814 364 
L 157.806814 24 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_2">
      <defs>
       <path id="analisi1_lez21b_g3-mec5ecd9ffd" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mec5ecd9ffd" x="157.806814" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_1">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(154.307439 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-14" d="M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-xtick_2">
     <g id="analisi1_lez21b_g3-line2d_3">
      <path d="M 271.95511 364 
L 271.95511 24 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mec5ecd9ffd" x="271.95511" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_2">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(268.455735 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-15" d="M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-xtick_3">
     <g id="analisi1_lez21b_g3-line2d_5">
      <path d="M 386.103407 364 
L 386.103407 24 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mec5ecd9ffd" x="386.103407" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_3">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(382.604032 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-16" d="M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-xtick_4">
     <g id="analisi1_lez21b_g3-line2d_7">
      <path d="M 500.251703 364 
L 500.251703 24 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mec5ecd9ffd" x="500.251703" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_4">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(496.752328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-17" d="M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-xtick_5">
     <g id="analisi1_lez21b_g3-line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mec5ecd9ffd" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_5">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(610.900625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-18" d="M 691 4666 
L 3169 4666 
L 3169 4134 
L 1269 4134 
L 1269 2991 
Q 1406 3038 1543 3061 
Q 1681 3084 1819 3084 
Q 2600 3084 3056 2656 
Q 3513 2228 3513 1497 
Q 3513 744 3044 326 
Q 2575 -91 1722 -91 
Q 1428 -91 1123 -41 
Q 819 9 494 109 
L 494 744 
Q 775 591 1075 516 
Q 1375 441 1709 441 
Q 2250 441 2565 725 
Q 2881 1009 2881 1497 
Q 2881 1984 2565 2268 
Q 2250 2553 1709 2553 
Q 1456 2553 1204 2497 
Q 953 2441 691 2322 
L 691 4666 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-18"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g3-matplotlib.axis_2">
    <g id="analisi1_lez21b_g3-ytick_1">
     <g id="analisi1_lez21b_g3-line2d_11">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_12">
      <defs>
       <path id="analisi1_lez21b_g3-mc2786ea287" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_6">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(27.332656 368.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-ytick_2">
     <g id="analisi1_lez21b_g3-line2d_13">
      <path d="M 44.8 307.333333 
L 614.4 307.333333 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_7">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(27.332656 311.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-ytick_3">
     <g id="analisi1_lez21b_g3-line2d_15">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_8">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(27.332656 254.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-ytick_4">
     <g id="analisi1_lez21b_g3-line2d_17">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_9">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(31.30125 198.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g3-DejaVuSans-13" d="M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-ytick_5">
     <g id="analisi1_lez21b_g3-line2d_19">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_10">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(31.30125 141.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-ytick_6">
     <g id="analisi1_lez21b_g3-line2d_21">
      <path d="M 44.8 80.666667 
L 614.4 80.666667 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="80.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_11">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(31.30125 84.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-ytick_7">
     <g id="analisi1_lez21b_g3-line2d_23">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g3-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez21b_g3-mc2786ea287" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g3-text_12">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(31.30125 28.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-16"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g3-line2d_25">
    <defs>
     <path id="analisi1_lez21b_g3-md0ec462dbc" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g3-md0ec462dbc" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g3-line2d_26">
    <defs>
     <path id="analisi1_lez21b_g3-md98e7c68ec" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g3-md98e7c68ec" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g3-line2d_27">
    <path d="M 52.735682 401 
L 53.826188 391.701393 
L 55.251376 380.97739 
L 57.151626 368.56816 
L 59.051877 357.79666 
L 60.952127 348.280575 
L 62.852377 339.757578 
L 65.22769 330.219106 
L 67.603003 321.678159 
L 69.978315 313.94571 
L 72.353628 306.88184 
L 75.204003 299.139551 
L 78.054379 292.067471 
L 80.904754 285.558756 
L 84.230192 278.567325 
L 87.55563 272.126978 
L 90.881068 266.157149 
L 94.681568 259.829001 
L 98.482068 253.955693 
L 102.282569 248.476202 
L 106.558132 242.721221 
L 110.833695 237.344854 
L 115.109258 232.300346 
L 119.859883 227.037832 
L 124.610509 222.093681 
L 129.836197 216.979646 
L 135.061885 212.166772 
L 140.762636 207.220613 
L 146.463386 202.556708 
L 152.639199 197.787424 
L 159.290075 192.944535 
L 165.940951 188.372556 
L 173.066889 183.742108 
L 180.66789 179.075969 
L 188.743953 174.393709 
L 196.820017 169.965153 
L 205.371143 165.523697 
L 214.397331 161.083368 
L 223.898582 156.656077 
L 233.874896 152.251845 
L 244.326272 147.87903 
L 255.252711 143.544527 
L 267.129274 139.079985 
L 279.480901 134.681825 
L 292.30759 130.351903 
L 306.084404 125.943293 
L 320.33628 121.619816 
L 335.538282 117.246991 
L 351.215346 112.969858 
L 367.842535 108.66546 
L 385.41985 104.348809 
L 403.947289 100.032819 
L 423.424854 95.728514 
L 443.852544 91.445216 
L 465.230359 87.190747 
L 488.033361 82.884157 
L 511.786489 78.627027 
L 536.964804 74.344121 
L 563.093244 70.124789 
L 590.646872 65.899289 
L 614.4 62.424075 
L 614.4 62.424075 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g3-line2d_28">
    <path d="M 54.169953 -1 
L 55.251376 7.02261 
L 57.151626 19.43184 
L 59.051877 30.20334 
L 60.952127 39.719425 
L 62.852377 48.242422 
L 65.22769 57.780894 
L 67.603003 66.321841 
L 69.978315 74.05429 
L 72.353628 81.11816 
L 75.204003 88.860449 
L 78.054379 95.932529 
L 80.904754 102.441244 
L 84.230192 109.432675 
L 87.55563 115.873022 
L 90.881068 121.842851 
L 94.681568 128.170999 
L 98.482068 134.044307 
L 102.282569 139.523798 
L 106.558132 145.278779 
L 110.833695 150.655146 
L 115.109258 155.699654 
L 119.859883 160.962168 
L 124.610509 165.906319 
L 129.836197 171.020354 
L 135.061885 175.833228 
L 140.762636 180.779387 
L 146.463386 185.443292 
L 152.639199 190.212576 
L 159.290075 195.055465 
L 165.940951 199.627444 
L 173.066889 204.257892 
L 180.66789 208.924031 
L 188.743953 213.606291 
L 196.820017 218.034847 
L 205.371143 222.476303 
L 214.397331 226.916632 
L 223.898582 231.343923 
L 233.874896 235.748155 
L 244.326272 240.12097 
L 255.252711 244.455473 
L 267.129274 248.920015 
L 279.480901 253.318175 
L 292.30759 257.648097 
L 306.084404 262.056707 
L 320.33628 266.380184 
L 335.538282 270.753009 
L 351.215346 275.030142 
L 367.842535 279.33454 
L 385.41985 283.651191 
L 403.947289 287.967181 
L 423.424854 292.271486 
L 443.852544 296.554784 
L 465.230359 300.809253 
L 488.033361 305.115843 
L 511.786489 309.372973 
L 536.964804 313.655879 
L 563.093244 317.875211 
L 590.646872 322.100711 
L 614.4 325.575925 
L 614.4 325.575925 
" clip-path="url(#analisi1_lez21b_g3-pca69d531e8)" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g3-patch_3">
    <path d="M 44.8 364 
L 44.8 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g3-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g3-legend_1" transform="translate(-114 154)">
    <g id="analisi1_lez21b_g3-line2d_29">
     <path d="M 486.69 184.757422 
L 497.69 184.757422 
L 508.69 184.757422 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g3-text_13">
     <g style="fill: currentColor" transform="translate(517.49 188.607422) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g3-DejaVuSans-4f" d="M 603 4863 
L 1178 4863 
L 1178 0 
L 603 0 
L 603 4863 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-52" d="M 1959 3097 
Q 1497 3097 1228 2736 
Q 959 2375 959 1747 
Q 959 1119 1226 758 
Q 1494 397 1959 397 
Q 2419 397 2687 759 
Q 2956 1122 2956 1747 
Q 2956 2369 2687 2733 
Q 2419 3097 1959 3097 
z
M 1959 3584 
Q 2709 3584 3137 3096 
Q 3566 2609 3566 1747 
Q 3566 888 3137 398 
Q 2709 -91 1959 -91 
Q 1206 -91 779 398 
Q 353 888 353 1747 
Q 353 2609 779 3096 
Q 1206 3584 1959 3584 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-4a" d="M 2906 1791 
Q 2906 2416 2648 2759 
Q 2391 3103 1925 3103 
Q 1463 3103 1205 2759 
Q 947 2416 947 1791 
Q 947 1169 1205 825 
Q 1463 481 1925 481 
Q 2391 481 2648 825 
Q 2906 1169 2906 1791 
z
M 3481 434 
Q 3481 -459 3084 -895 
Q 2688 -1331 1869 -1331 
Q 1566 -1331 1297 -1286 
Q 1028 -1241 775 -1147 
L 775 -588 
Q 1028 -725 1275 -790 
Q 1522 -856 1778 -856 
Q 2344 -856 2625 -561 
Q 2906 -266 2906 331 
L 2906 616 
Q 2728 306 2450 153 
Q 2172 0 1784 0 
Q 1141 0 747 490 
Q 353 981 353 1791 
Q 353 2603 747 3093 
Q 1141 3584 1784 3584 
Q 2172 3584 2450 3431 
Q 2728 3278 2906 2969 
L 2906 3500 
L 3481 3500 
L 3481 434 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-Oblique-45" d="M 3169 2138 
Q 3169 2591 2961 2847 
Q 2753 3103 2388 3103 
Q 2122 3103 1889 2973 
Q 1656 2844 1484 2597 
Q 1303 2338 1198 1995 
Q 1094 1653 1094 1313 
Q 1094 881 1298 636 
Q 1503 391 1863 391 
Q 2134 391 2365 517 
Q 2597 644 2772 891 
Q 2950 1147 3059 1487 
Q 3169 1828 3169 2138 
z
M 1381 2969 
Q 1594 3256 1914 3420 
Q 2234 3584 2584 3584 
Q 3122 3584 3439 3221 
Q 3756 2859 3756 2241 
Q 3756 1734 3570 1259 
Q 3384 784 3041 416 
Q 2816 172 2522 40 
Q 2228 -91 1906 -91 
Q 1566 -91 1316 65 
Q 1066 222 909 531 
L 806 0 
L 231 0 
L 1178 4863 
L 1753 4863 
L 1381 2969 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-Oblique-5b" d="M 3841 3500 
L 2234 1784 
L 3219 0 
L 2559 0 
L 1819 1388 
L 531 0 
L -166 0 
L 1556 1844 
L 641 3500 
L 1300 3500 
L 1972 2234 
L 3144 3500 
L 3841 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-b" d="M 1984 4856 
Q 1566 4138 1362 3434 
Q 1159 2731 1159 2009 
Q 1159 1288 1364 580 
Q 1569 -128 1984 -844 
L 1484 -844 
Q 1016 -109 783 600 
Q 550 1309 550 2009 
Q 550 2706 781 3412 
Q 1013 4119 1484 4856 
L 1984 4856 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-21" d="M 678 3150 
L 678 3719 
L 4684 2266 
L 4684 1747 
L 678 294 
L 678 863 
L 3897 2003 
L 678 3150 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g3-DejaVuSans-c" d="M 513 4856 
L 1013 4856 
Q 1481 4119 1714 3412 
Q 1947 2706 1947 2009 
Q 1947 1309 1714 600 
Q 1481 -109 1013 -844 
L 513 -844 
Q 928 -128 1133 580 
Q 1338 1288 1338 2009 
Q 1338 2731 1133 3434 
Q 928 4138 513 4856 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-4f" transform="translate(0 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-52" transform="translate(27.783203 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-4a" transform="translate(88.964844 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-Oblique-45" transform="translate(153.398438 -14.984326) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-Oblique-5b" transform="translate(216.802083 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-b" transform="translate(275.98177 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-Oblique-45" transform="translate(314.995442 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-21" transform="translate(397.954426 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-14" transform="translate(501.225911 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-c" transform="translate(564.848958 0.015625)"/>
     </g>
    </g>
    <g id="analisi1_lez21b_g3-line2d_30">
     <path d="M 486.69 201.26 
L 497.69 201.26 
L 508.69 201.26 
" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g3-text_14">
     <g style="fill: currentColor" transform="translate(517.49 205.11) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g3-DejaVuSans-1f" d="M 4684 3150 
L 1459 2003 
L 4684 863 
L 4684 294 
L 678 1747 
L 678 2266 
L 4684 3719 
L 4684 3150 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-4f" transform="translate(0 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-52" transform="translate(27.783203 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-4a" transform="translate(88.964844 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-Oblique-45" transform="translate(153.398438 -14.984326) scale(0.7)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-Oblique-5b" transform="translate(216.802083 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-b" transform="translate(275.98177 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-13" transform="translate(314.995442 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-1f" transform="translate(398.100911 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-Oblique-45" transform="translate(501.372395 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-1f" transform="translate(584.331379 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-14" transform="translate(687.602864 0.015625)"/>
      <use xlink:href="#analisi1_lez21b_g3-DejaVuSans-c" transform="translate(751.225911 0.015625)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez21b_g3-pca69d531e8">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
          },
          {
            subtitle: "Funzioni trigonometriche",
            content: `<ul>
  <li>Per ogni $x_0 \\in \\mathbb{R}$, $\\lim_{x \\to x_0} \\sin x = \\sin x_0$ e $\\lim_{x \\to x_0} \\cos x = \\cos x_0$.</li>
  <li>Per ogni $x_0 \\in \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$, $\\lim_{x \\to x_0} \\tan x = \\tan x_0$.</li>
</ul>`
          }
        ]
      },
      {
        id: "s21-es-svolto-tangente",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Limiti della funzione tangente",
        icon: "✎",
        source: "docente",
        content: `<p>Calcolare i limiti destro e sinistro della funzione $f(x) = \\tan x$ per $x \\to \\frac{\\pi}{2}$.</p>
<p>Osserviamo subito che siamo nella situazione "numeratore con limite non nullo, denominatore infinitesimo": proprio il caso in cui occorre determinare il segno con cui il denominatore tende a zero. Per questo i due limiti laterali vanno trattati separatamente.</p>`,
        steps: [
          `<strong>Limite sinistro: $x \\to \\left(\\frac{\\pi}{2}\\right)^-$.</strong> Scriviamo la tangente come rapporto tra seno e coseno: $$\\lim_{x \\to (\\frac{\\pi}{2})^-} \\tan x = \\lim_{x \\to (\\frac{\\pi}{2})^-} \\frac{\\sin x}{\\cos x}$$`,
          `Analizziamo separatamente numeratore e denominatore: il numeratore tende a $\\lim_{x \\to (\\frac{\\pi}{2})^-} \\sin x = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$; il denominatore tende a $\\lim_{x \\to (\\frac{\\pi}{2})^-} \\cos x = \\cos\\left(\\frac{\\pi}{2}\\right) = 0$.`,
          `Dobbiamo determinare il segno con cui il denominatore tende a zero. Per $x$ in un intorno sinistro di $\\frac{\\pi}{2}$ (cioè $x \\lt \\frac{\\pi}{2}$), la funzione coseno è positiva: il segno è dunque <em>definitivamente</em> positivo e possiamo scrivere $\\cos x \\to 0^+$.`,
          `Il limite è del tipo $\\frac{1}{0^+}$: $$\\lim_{x \\to (\\frac{\\pi}{2})^-} \\tan x = \\frac{1}{0^+} = +\\infty$$`,
          `<strong>Limite destro: $x \\to \\left(\\frac{\\pi}{2}\\right)^+$.</strong> Il procedimento è analogo. Il numeratore tende sempre a $1$: $\\lim_{x \\to (\\frac{\\pi}{2})^+} \\sin x = 1$.`,
          `Il denominatore tende ancora a $0$, ma questa volta dobbiamo considerare $x$ in un intorno destro di $\\frac{\\pi}{2}$ (cioè $x \\gt \\frac{\\pi}{2}$). In questo intervallo, la funzione coseno è negativa, dunque $\\cos x \\to 0^-$.`,
          `Il limite è del tipo $\\frac{1}{0^-}$: $$\\lim_{x \\to (\\frac{\\pi}{2})^+} \\tan x = \\frac{1}{0^-} = -\\infty$$`,
          `<strong>Conclusione.</strong> I due limiti laterali sono diversi, quindi $\\lim_{x \\to \\pi/2} \\tan x$ non esiste: la retta $x=\\frac{\\pi}{2}$ è un asintoto verticale. Questo è esattamente il fenomeno descritto dal controesempio $\\frac{1}{x}$ in $x_0=0$: senza segno definitivamente costante del denominatore non si può attribuire un unico valore $\\pm\\infty$ al limite bilaterale.`,
          `<figure class="figura" data-id="analisi1_lez21b_g4"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.2, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="analisi1_lez21b_g4-figure_1">
  <g id="analisi1_lez21b_g4-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez21b_g4-axes_1">
   <g id="analisi1_lez21b_g4-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez21b_g4-matplotlib.axis_1">
    <g id="analisi1_lez21b_g4-xtick_1">
     <g id="analisi1_lez21b_g4-line2d_1">
      <path d="M 57.628012 364 
L 57.628012 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_2">
      <defs>
       <path id="analisi1_lez21b_g4-m0a2c663fab" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="57.628012" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_1">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(52.14434 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez21b_g4-DejaVuSans-19" d="M 2113 2584 
Q 1688 2584 1439 2293 
Q 1191 2003 1191 1497 
Q 1191 994 1439 701 
Q 1688 409 2113 409 
Q 2538 409 2786 701 
Q 3034 994 3034 1497 
Q 3034 2003 2786 2293 
Q 2538 2584 2113 2584 
z
M 3366 4563 
L 3366 3988 
Q 3128 4100 2886 4159 
Q 2644 4219 2406 4219 
Q 1781 4219 1451 3797 
Q 1122 3375 1075 2522 
Q 1259 2794 1537 2939 
Q 1816 3084 2150 3084 
Q 2853 3084 3261 2657 
Q 3669 2231 3669 1497 
Q 3669 778 3244 343 
Q 2819 -91 2113 -91 
Q 1303 -91 875 529 
Q 447 1150 447 2328 
Q 447 3434 972 4092 
Q 1497 4750 2381 4750 
Q 2619 4750 2861 4703 
Q 3103 4656 3366 4563 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_2">
     <g id="analisi1_lez21b_g4-line2d_3">
      <path d="M 115.9937 364 
L 115.9937 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="115.9937" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_2">
      <!-- -4.71 -->
      <g style="fill: currentColor" transform="translate(101.76331 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-17" d="M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez21b_g4-DejaVuSans-11" d="M 684 794 
L 1344 794 
L 1344 0 
L 684 0 
L 684 794 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez21b_g4-DejaVuSans-1a" d="M 525 4666 
L 3525 4666 
L 3525 4397 
L 1831 0 
L 1172 0 
L 2766 4134 
L 525 4134 
L 525 4666 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez21b_g4-DejaVuSans-14" d="M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-17" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-11" transform="translate(99.703125 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-1a" transform="translate(131.484375 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-14" transform="translate(195.109375 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_3">
     <g id="analisi1_lez21b_g4-line2d_5">
      <path d="M 148.285341 364 
L 148.285341 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="148.285341" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_3" visibility="hidden">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(142.80167 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-17" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_4">
     <g id="analisi1_lez21b_g4-line2d_7">
      <path d="M 238.942671 364 
L 238.942671 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="238.942671" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_4" visibility="hidden">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(233.458999 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-15" d="M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_5">
     <g id="analisi1_lez21b_g4-line2d_9">
      <path d="M 258.3979 364 
L 258.3979 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="258.3979" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_5">
      <!-- -1.57 -->
      <g style="fill: currentColor" transform="translate(244.167509 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-18" d="M 691 4666 
L 3169 4666 
L 3169 4134 
L 1269 4134 
L 1269 2991 
Q 1406 3038 1543 3061 
Q 1681 3084 1819 3084 
Q 2600 3084 3056 2656 
Q 3513 2228 3513 1497 
Q 3513 744 3044 326 
Q 2575 -91 1722 -91 
Q 1428 -91 1123 -41 
Q 819 9 494 109 
L 494 744 
Q 775 591 1075 516 
Q 1375 441 1709 441 
Q 2250 441 2565 725 
Q 2881 1009 2881 1497 
Q 2881 1984 2565 2268 
Q 2250 2553 1709 2553 
Q 1456 2553 1204 2497 
Q 953 2441 691 2322 
L 691 4666 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-14" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-11" transform="translate(99.703125 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-18" transform="translate(131.484375 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-1a" transform="translate(195.109375 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_6">
     <g id="analisi1_lez21b_g4-line2d_11">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_6">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-13" d="M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_7">
     <g id="analisi1_lez21b_g4-line2d_13">
      <path d="M 400.8021 364 
L 400.8021 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="400.8021" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_7">
      <!-- 1.57 -->
      <g style="fill: currentColor" transform="translate(388.556006 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-11" transform="translate(63.625 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-18" transform="translate(95.40625 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-1a" transform="translate(159.03125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_8">
     <g id="analisi1_lez21b_g4-line2d_15">
      <path d="M 420.257329 364 
L 420.257329 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="420.257329" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_8" visibility="hidden">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(416.757954 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_9">
     <g id="analisi1_lez21b_g4-line2d_17">
      <path d="M 510.914659 364 
L 510.914659 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="510.914659" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_9" visibility="hidden">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(507.415284 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_10">
     <g id="analisi1_lez21b_g4-line2d_19">
      <path d="M 543.2063 364 
L 543.2063 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="543.2063" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_10">
      <!-- 4.71 -->
      <g style="fill: currentColor" transform="translate(530.960206 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-17"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-11" transform="translate(63.625 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-1a" transform="translate(95.40625 0)"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-14" transform="translate(159.03125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-xtick_11">
     <g id="analisi1_lez21b_g4-line2d_21">
      <path d="M 601.571988 364 
L 601.571988 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-m0a2c663fab" x="601.571988" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_11">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(598.072613 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g4-matplotlib.axis_2">
    <g id="analisi1_lez21b_g4-ytick_1">
     <g id="analisi1_lez21b_g4-line2d_23">
      <path d="M 44.8 347 
L 614.4 347 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_24">
      <defs>
       <path id="analisi1_lez21b_g4-mdc28465ad0" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="347" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_12">
      <!-- -9 -->
      <g style="fill: currentColor" transform="translate(312.132656 351.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-1c" d="M 703 97 
L 703 672 
Q 941 559 1184 500 
Q 1428 441 1663 441 
Q 2288 441 2617 861 
Q 2947 1281 2994 2138 
Q 2813 1869 2534 1725 
Q 2256 1581 1919 1581 
Q 1219 1581 811 2004 
Q 403 2428 403 3163 
Q 403 3881 828 4315 
Q 1253 4750 1959 4750 
Q 2769 4750 3195 4129 
Q 3622 3509 3622 2328 
Q 3622 1225 3098 567 
Q 2575 -91 1691 -91 
Q 1453 -91 1209 -44 
Q 966 3 703 97 
z
M 1959 2075 
Q 2384 2075 2632 2365 
Q 2881 2656 2881 3163 
Q 2881 3666 2632 3958 
Q 2384 4250 1959 4250 
Q 1534 4250 1286 3958 
Q 1038 3666 1038 3163 
Q 1038 2656 1286 2365 
Q 1534 2075 1959 2075 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-1c" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-ytick_2">
     <g id="analisi1_lez21b_g4-line2d_25">
      <path d="M 44.8 296 
L 614.4 296 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="296" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_13">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(312.132656 300.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-ytick_3">
     <g id="analisi1_lez21b_g4-line2d_27">
      <path d="M 44.8 245 
L 614.4 245 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_28">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="245" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_14">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(312.132656 249.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_g4-DejaVuSans-16" d="M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-ytick_4">
     <g id="analisi1_lez21b_g4-line2d_29">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_30">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_15" visibility="hidden">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-ytick_5">
     <g id="analisi1_lez21b_g4-line2d_31">
      <path d="M 44.8 143 
L 614.4 143 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_32">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="143" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_16">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(316.10125 147.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-ytick_6">
     <g id="analisi1_lez21b_g4-line2d_33">
      <path d="M 44.8 92 
L 614.4 92 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_34">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="92" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_17">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 96.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-19"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_g4-ytick_7">
     <g id="analisi1_lez21b_g4-line2d_35">
      <path d="M 44.8 41 
L 614.4 41 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_g4-line2d_36">
      <g>
       <use xlink:href="#analisi1_lez21b_g4-mdc28465ad0" x="329.6" y="41" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_g4-text_18">
      <!-- 9 -->
      <g style="fill: currentColor" transform="translate(316.10125 45.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-1c"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_g4-line2d_37">
    <defs>
     <path id="analisi1_lez21b_g4-m6544b13045" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g4-m6544b13045" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g4-line2d_38">
    <defs>
     <path id="analisi1_lez21b_g4-mb297609f43" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_g4-mb297609f43" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_g4-line2d_39">
    <path d="M 44.8 193.99685 
L 57.151626 189.246104 
L 63.32744 186.633069 
L 68.078065 184.407591 
L 72.353628 182.167693 
L 76.154128 179.915136 
L 79.479566 177.671449 
L 82.329942 175.481038 
L 84.705254 173.413127 
L 87.080567 171.064705 
L 89.45588 168.358615 
L 91.35613 165.865514 
L 93.25638 163.000451 
L 95.156631 159.660795 
L 96.581818 156.760252 
L 98.007006 153.430457 
L 99.432193 149.560248 
L 100.857381 144.996631 
L 102.282569 139.523032 
L 103.707756 132.822426 
L 104.657882 127.444977 
L 105.608007 121.105912 
L 106.558132 113.51464 
L 107.508257 104.250425 
L 108.458382 92.680347 
L 109.408507 77.806217 
L 110.358632 57.956647 
L 111.308757 30.104412 
L 112.037896 -1 
L 112.037896 -1 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_40">
    <path d="M 119.721195 401 
L 120.334946 370.96069 
L 121.285071 338.968851 
L 122.235196 316.680704 
L 123.185321 300.250154 
L 124.135446 287.626424 
L 125.085571 277.615973 
L 126.035696 269.47696 
L 126.985822 262.724028 
L 128.411009 254.497366 
L 129.836197 247.926885 
L 131.261384 242.548536 
L 132.686572 238.056717 
L 134.11176 234.24196 
L 135.536947 230.955869 
L 137.437198 227.21413 
L 139.337448 224.039231 
L 141.237698 221.302499 
L 143.137948 218.911225 
L 145.513261 216.305229 
L 147.888574 214.034818 
L 150.738949 211.654349 
L 153.589324 209.566085 
L 156.914762 207.413974 
L 160.715263 205.239941 
L 164.990826 203.064674 
L 170.216514 200.683439 
L 176.392327 198.130222 
L 185.418515 194.666892 
L 199.670392 189.199745 
L 205.846205 186.581978 
L 210.596831 184.350864 
L 214.872394 182.103799 
L 218.672894 179.842523 
L 221.998332 177.588642 
L 224.848707 175.386824 
L 227.22402 173.306824 
L 229.599333 170.943117 
L 231.974646 168.21736 
L 233.874896 165.70419 
L 235.775146 162.813752 
L 237.675396 159.441395 
L 239.100584 156.509718 
L 240.525771 153.141044 
L 241.950959 149.221429 
L 243.376147 144.593714 
L 244.801334 139.034886 
L 246.226522 132.217517 
L 247.176647 126.736439 
L 248.126772 120.263835 
L 249.076897 112.496397 
L 250.027023 102.993118 
L 250.977148 91.087146 
L 251.927273 75.719968 
L 252.877398 55.104369 
L 253.827523 25.966992 
L 254.443642 -1 
L 254.443642 -1 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_41">
    <path d="M 262.12714 401 
L 262.853711 366.382446 
L 263.803837 335.868193 
L 264.753962 314.440968 
L 265.704087 298.555566 
L 266.654212 286.29868 
L 267.604337 276.546826 
L 268.554462 268.596909 
L 269.504587 261.986413 
L 270.929775 253.915498 
L 272.354962 247.45534 
L 273.78015 242.15797 
L 275.205338 237.727333 
L 276.630525 233.959916 
L 278.055713 230.711198 
L 279.955963 227.008166 
L 281.856214 223.862895 
L 283.756464 221.149329 
L 285.656714 218.776495 
L 288.032027 216.18868 
L 290.407339 213.932479 
L 293.257715 211.565278 
L 296.10809 209.487277 
L 299.433528 207.344395 
L 303.234028 205.178295 
L 307.509591 203.009565 
L 312.735279 200.633881 
L 318.911093 198.084747 
L 327.937281 194.623864 
L 341.714095 189.345401 
L 347.889908 186.742367 
L 353.115596 184.293973 
L 357.391159 182.039679 
L 361.19166 179.769603 
L 364.517098 177.505429 
L 367.367473 175.292087 
L 369.742786 173.199865 
L 372.118098 170.820693 
L 374.493411 168.075017 
L 376.393661 165.541503 
L 378.293912 162.625315 
L 380.194162 159.219729 
L 381.619349 156.256375 
L 383.044537 152.848094 
L 384.469725 148.878068 
L 385.894912 144.184834 
L 387.3201 138.538698 
L 388.745288 131.601392 
L 389.695413 126.013587 
L 390.645538 119.403091 
L 391.595663 111.453174 
L 392.545788 101.70132 
L 393.495913 89.444434 
L 394.446038 73.559032 
L 395.396163 52.131807 
L 396.346289 21.617554 
L 396.856033 -1 
L 396.856033 -1 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_42">
    <path d="M 404.526033 401 
L 405.372477 362.033008 
L 406.322602 332.895631 
L 407.272727 312.280032 
L 408.222852 296.912854 
L 409.172977 285.006882 
L 410.123103 275.503603 
L 411.073228 267.736165 
L 412.023353 261.263561 
L 413.44854 253.343904 
L 414.873728 246.991231 
L 416.298916 241.772958 
L 417.724103 237.402205 
L 419.149291 233.681204 
L 420.574479 230.469183 
L 422.474729 226.804215 
L 424.374979 223.688119 
L 426.275229 220.997391 
L 428.17548 218.642754 
L 430.550792 216.072898 
L 432.926105 213.830746 
L 435.77648 211.476671 
L 438.626856 209.408831 
L 441.952294 207.275091 
L 445.752794 205.116853 
L 450.028357 202.954604 
L 455.254045 200.58442 
L 461.429858 198.039328 
L 470.931109 194.402526 
L 484.232861 189.299181 
L 490.408674 186.691515 
L 495.159299 184.472439 
L 499.434862 182.24068 
L 503.235363 179.998023 
L 506.560801 177.765905 
L 509.411176 175.588431 
L 511.786489 173.534219 
L 514.161802 171.203105 
L 516.537114 168.519264 
L 518.437364 166.048841 
L 520.337615 163.212419 
L 522.237865 159.909626 
L 523.663053 157.044131 
L 525.08824 153.75804 
L 526.513428 149.943283 
L 527.938616 145.451464 
L 529.363803 140.073115 
L 530.788991 133.502634 
L 531.739116 128.24035 
L 532.689241 122.049282 
L 533.639366 114.65261 
L 534.589491 105.651428 
L 535.539616 94.4491 
L 536.489741 80.1114 
L 537.439867 61.088393 
L 538.389992 34.607123 
L 539.256897 -1 
L 539.256897 -1 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_43">
    <path d="M 546.923113 401 
L 547.41618 376.515973 
L 548.366305 342.692841 
L 549.31643 319.351567 
L 550.266555 302.260336 
L 551.216681 289.195094 
L 552.166806 278.875084 
L 553.116931 270.510683 
L 554.067056 263.588574 
L 555.492244 255.177574 
L 556.917431 248.476968 
L 558.342619 243.003369 
L 559.767807 238.439752 
L 561.192994 234.569543 
L 562.618182 231.239748 
L 564.518432 227.452812 
L 566.418682 224.243372 
L 568.318932 221.479668 
L 570.219183 219.066945 
L 572.594495 216.439823 
L 574.969808 214.152916 
L 577.820183 211.757058 
L 580.670559 209.6569 
L 583.995997 207.494099 
L 587.796497 205.310882 
L 592.07206 203.128047 
L 597.297748 200.740386 
L 603.473561 198.182434 
L 612.49975 194.716241 
L 614.4 194.00315 
L 614.4 194.00315 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_44">
    <path d="M 115.9937 364 
L 115.9937 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_45">
    <path d="M 258.3979 364 
L 258.3979 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_46">
    <path d="M 400.8021 364 
L 400.8021 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_g4-line2d_47">
    <path d="M 543.2063 364 
L 543.2063 24 
" clip-path="url(#analisi1_lez21b_g4-pa22a252242)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_g4-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_g4-legend_1" transform="translate(-131 0)">
    <g id="analisi1_lez21b_g4-line2d_48">
     <path d="M 301 347.607422 
L 312 347.607422 
L 323 347.607422 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_g4-text_19">
     <g style="fill: currentColor" transform="translate(331.8 351.457422) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_g4-DejaVuSans-57" d="M 1172 4494 
L 1172 3500 
L 2356 3500 
L 2356 3053 
L 1172 3053 
L 1172 1153 
Q 1172 725 1289 603 
Q 1406 481 1766 481 
L 2356 481 
L 2356 0 
L 1766 0 
Q 1100 0 847 248 
Q 594 497 594 1153 
L 594 3053 
L 172 3053 
L 172 3500 
L 594 3500 
L 594 4494 
L 1172 4494 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g4-DejaVuSans-44" d="M 2194 1759 
Q 1497 1759 1228 1600 
Q 959 1441 959 1056 
Q 959 750 1161 570 
Q 1363 391 1709 391 
Q 2188 391 2477 730 
Q 2766 1069 2766 1631 
L 2766 1759 
L 2194 1759 
z
M 3341 1997 
L 3341 0 
L 2766 0 
L 2766 531 
Q 2569 213 2275 61 
Q 1981 -91 1556 -91 
Q 1019 -91 701 211 
Q 384 513 384 1019 
Q 384 1609 779 1909 
Q 1175 2209 1959 2209 
L 2766 2209 
L 2766 2266 
Q 2766 2663 2505 2880 
Q 2244 3097 1772 3097 
Q 1472 3097 1187 3025 
Q 903 2953 641 2809 
L 641 3341 
Q 956 3463 1253 3523 
Q 1550 3584 1831 3584 
Q 2591 3584 2966 3190 
Q 3341 2797 3341 1997 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g4-DejaVuSans-51" d="M 3513 2113 
L 3513 0 
L 2938 0 
L 2938 2094 
Q 2938 2591 2744 2837 
Q 2550 3084 2163 3084 
Q 1697 3084 1428 2787 
Q 1159 2491 1159 1978 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1366 3272 1645 3428 
Q 1925 3584 2291 3584 
Q 2894 3584 3203 3211 
Q 3513 2838 3513 2113 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez21b_g4-DejaVuSans-Oblique-5b" d="M 3841 3500 
L 2234 1784 
L 3219 0 
L 2559 0 
L 1819 1388 
L 531 0 
L -166 0 
L 1556 1844 
L 641 3500 
L 1300 3500 
L 1972 2234 
L 3144 3500 
L 3841 3500 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-57" transform="translate(0 0.78125)"/>
      <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-44" transform="translate(39.208984 0.78125)"/>
      <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-51" transform="translate(100.488281 0.78125)"/>
      <use xlink:href="#analisi1_lez21b_g4-DejaVuSans-Oblique-5b" transform="translate(180.102864 0.78125)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez21b_g4-pa22a252242">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
        ]
      },
      {
        id: "s21-box-esercizi",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "📝",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },
      {
        id: "s21-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        icon: "🧠",
        content: `<p>Enuncia la definizione di limite di una funzione $f : A \\to \\mathbb{R}$ per $x \\to x_0$ (versione con gli intorni e versione $\\varepsilon$-$\\delta$) e spiega, con un esempio, per quale motivo il valore $f(x_0)$ non interviene nella definizione.</p>`,
        solution: `<p>Sia $f : A \\to \\mathbb{R}$ con $A \\subseteq \\mathbb{R}$ e sia $x_0$ un punto di accumulazione per $A$. Si dice che $\\lim_{x \\to x_0} f(x) = L \\in \\mathbb{R}$ se per ogni intorno $U$ di $L$ esiste un intorno $V$ di $x_0$ tale che per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$ si ha $f(x) \\in U$.</p>
<p>Equivalentemente, in termini di $\\varepsilon$-$\\delta$: per ogni $\\varepsilon \\gt 0$ esiste $\\delta \\gt 0$ tale che, se $x \\in A$ e $0 \\lt |x - x_0| \\lt \\delta$, allora $|f(x) - L| \\lt \\varepsilon$.</p>
<p>Il punto $x_0$ è escluso esplicitamente dall'insieme $V \\cap A \\setminus \\{x_0\\}$ (equivalentemente, si richiede $0 \\lt |x-x_0|$): la condizione non dice nulla su $f(x_0)$, che può valere qualunque cosa o non essere nemmeno definito, poiché non si richiede $x_0 \\in A$ ma solo che $x_0$ sia di accumulazione per $A$. Proprio l'ipotesi di punto di accumulazione garantisce che $V \\cap A \\setminus \\{x_0\\} \\neq \\emptyset$ per ogni intorno $V$, cioè che la condizione non sia vuota.</p>
<p><strong>Esempio.</strong> Sia $A = [0,1)$ e $f(x) = 1$ per $x \\in (0,1)$, $f(0) = 5$. Per ogni $\\varepsilon \\gt 0$ basta prendere $\\delta = 1$: se $x \\in A$ e $0 \\lt |x - 0| \\lt 1$ allora $x \\in (0,1)$ e $|f(x) - 1| = 0 \\lt \\varepsilon$. Dunque $\\lim_{x \\to 0} f(x) = 1$, mentre $f(0) = 5$: il limite descrive il comportamento di $f$ vicino a $x_0$, non in $x_0$. La coincidenza $\\lim_{x \\to x_0} f(x) = f(x_0)$ è una proprietà aggiuntiva, che si chiamerà continuità in $x_0$.</p>`
      },
      {
        id: "s21-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        icon: "🧠",
        content: `<p>Enunciare i limiti delle funzioni elementari esponenziale e logaritmica: calcolare $\\lim_{x\\to+\\infty}b^x$, $\\lim_{x\\to-\\infty}b^x$ (per $b \\gt 0$) e $\\lim_{x\\to 0^+}\\log_b x$, $\\lim_{x\\to+\\infty}\\log_b x$ (per $b \\gt 0$, $b\\neq 1$), distinguendo tutti i casi sulla base $b$ e giustificando brevemente il risultato.</p>`,
        solution: `<p>Per l'esponenziale $f(x)=b^x$ con $b \\gt 0$ si ha, anzitutto, la continuità: per ogni $x_0\\in\\mathbb{R}$ vale $\\lim_{x\\to x_0}b^x=b^{x_0}$.</p>
<p>All'infinito: $\\lim_{x\\to+\\infty}b^x=+\\infty$ se $b \\gt 1$, $=1$ se $b=1$, $=0$ se $0 \\lt b \\lt 1$; $\\lim_{x\\to-\\infty}b^x=0$ se $b \\gt 1$, $=1$ se $b=1$, $=+\\infty$ se $0 \\lt b \\lt 1$.</p>
<p><em>Giustificazione</em>: per $b \\gt 1$ la funzione è strettamente crescente e non limitata superiormente, quindi diverge a $+\\infty$ per $x\\to+\\infty$ e, essendo positiva e decrescente verso l'estremo inferiore $\\inf_{\\mathbb{R}}b^x=0$, tende a $0$ per $x\\to-\\infty$. Il caso $0 \\lt b \\lt 1$ si riporta al precedente con l'identità $b^x=(1/b)^{-x}$, dove $1/b \\gt 1$: cambiando $x$ in $-x$ i due limiti si scambiano. Per $b=1$ la funzione è costantemente $1$.</p>
<p>Per il logaritmo $g(x)=\\log_b x$, definito per $x \\gt 0$, la continuità dà $\\lim_{x\\to x_0}\\log_b x=\\log_b x_0$ per ogni $x_0 \\gt 0$. Agli estremi del dominio: $\\lim_{x\\to+\\infty}\\log_b x=+\\infty$ e $\\lim_{x\\to 0^+}\\log_b x=-\\infty$ se $b \\gt 1$; $\\lim_{x\\to+\\infty}\\log_b x=-\\infty$ e $\\lim_{x\\to 0^+}\\log_b x=+\\infty$ se $0 \\lt b \\lt 1$.</p>
<p><em>Giustificazione</em>: $\\log_b$ è la funzione inversa di $b^x$, quindi è strettamente crescente e non limitata (in valore assoluto) per $b \\gt 1$, strettamente decrescente per $0 \\lt b \\lt 1$; in alternativa si usa $\\log_{1/b}x=-\\log_b x$, che scambia i due casi cambiando il segno.</p>`
      },
      {
        id: "s21-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        icon: "🧠",
        content: `<p>Enuncia il Teorema Ponte e descrivi la tecnica, basata su di esso, per dimostrare che un limite non esiste. Applicala a $f(x) = \\sin\\left(\\frac{1}{x}\\right)$ per $x \\to 0$.</p>`,
        solution: `<p><strong>Teorema Ponte.</strong> Sia $f : A \\to \\mathbb{R}$ e sia $x_0$ un punto di accumulazione per $A$. Allora $\\lim_{x \\to x_0} f(x) = L$ se e solo se per ogni successione $(a_n)$ con (i) $a_n \\in A$ per ogni $n$, (ii) $a_n \\neq x_0$ per ogni $n$, (iii) $a_n \\to x_0$ (successione <em>ammissibile</em>) risulta $\\lim_{n \\to \\infty} f(a_n) = L$.</p>
<p>Si osservi che almeno una successione ammissibile esiste sempre: essendo $x_0$ di accumulazione, per ogni $n \\ge 1$ si può scegliere $a_n \\in A$ con $0 \\lt |a_n - x_0| \\lt 1/n$.</p>
<p><strong>Tecnica per negare un limite.</strong> Poiché la condizione $\\lim_n f(a_n) = L$ deve valere per <em>ogni</em> successione ammissibile, basta esibire due successioni ammissibili $a_n \\to x_0$ e $b_n \\to x_0$ con $\\lim_n f(a_n) \\neq \\lim_n f(b_n)$: se il limite di $f$ esistesse e valesse $L$, si otterrebbe $L = \\lim_n f(a_n)$ e $L = \\lim_n f(b_n)$, cioè due valori distinti per lo stesso numero $L$, assurdo.</p>
<p><strong>Applicazione.</strong> $f(x) = \\sin(1/x)$ su $A = \\mathbb{R} \\setminus \\{0\\}$, $x_0 = 0$ (punto di accumulazione di $A$). Poniamo, per $n \\ge 1$, $a_n = \\frac{1}{n\\pi}$ e $b_n = \\frac{1}{\\frac{\\pi}{2} + 2n\\pi}$: entrambe stanno in $A$, sono diverse da $0$ e tendono a $0$, dunque sono ammissibili. Si ha $f(a_n) = \\sin(n\\pi) = 0$, quindi $\\lim_n f(a_n) = 0$, mentre $f(b_n) = \\sin\\left(\\frac{\\pi}{2} + 2n\\pi\\right) = 1$, quindi $\\lim_n f(b_n) = 1$. Essendo $0 \\neq 1$, il limite $\\lim_{x \\to 0} \\sin(1/x)$ non esiste.</p>`
      },
      {
        id: "s21-es-teoria-4",
        type: "esercizio",
        title: "Teoria 4",
        kind: "teoria",
        source: "integrazione",
        icon: "🧠",
        content: `<p>Siano $\\lim_{x\\to x_0}f(x)=L\\in\\mathbb{R}\\setminus\\{0\\}$ e $\\lim_{x\\to x_0}g(x)=0$. È vero che allora $\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=\\pm\\infty$? Enunciare con precisione la regola corretta, specificando l'ipotesi aggiuntiva necessaria, e fornire un controesempio che mostri che senza tale ipotesi il limite può non esistere.</p>`,
        solution: `<p>La conclusione, così come è formulata, è <strong>falsa</strong>: le sole ipotesi $L\\neq 0$ e $g\\to 0$ non determinano il limite del quoziente, perché non dicono con quale segno $g$ tende a zero.</p>
<p>La regola corretta richiede che $g$ abbia segno definitivamente costante in un intorno puntato di $x_0$, cioè che sia $g(x)\\to 0^+$ (ovvero $g(x)\\to 0$ e $g(x) \\gt 0$ definitivamente) oppure $g(x)\\to 0^-$ (ovvero $g(x)\\to 0$ e $g(x) \\lt 0$ definitivamente). In tal caso: se $g(x)\\to 0^+$ allora $\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=+\\infty$ per $L \\gt 0$ e $=-\\infty$ per $L \\lt 0$; se $g(x)\\to 0^-$ allora il limite è $-\\infty$ per $L \\gt 0$ e $+\\infty$ per $L \\lt 0$. In sintesi, il segno dell'infinito è il prodotto del segno di $L$ per il segno con cui $g$ tende a $0$.</p>
<p><strong>Controesempio</strong>: $f(x)=1$, $g(x)=x$, $x_0=0$. Si ha $L=1\\neq 0$ e $g(x)\\to 0$, ma $g$ cambia segno in ogni intorno puntato di $0$; infatti $\\lim_{x\\to 0^+}\\frac{1}{x}=+\\infty$ mentre $\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty$, quindi $\\lim_{x\\to 0}\\frac{1}{x}$ non esiste.</p>
<p>Lo stesso fenomeno si presenta per $\\tan x=\\frac{\\sin x}{\\cos x}$ in $x_0=\\frac{\\pi}{2}$: il numeratore tende a $1$, il denominatore tende a $0$ ma è positivo a sinistra e negativo a destra, così $\\lim_{x\\to(\\pi/2)^-}\\tan x=+\\infty$ e $\\lim_{x\\to(\\pi/2)^+}\\tan x=-\\infty$.</p>
<p>Si osservi che, comunque, sotto le sole ipotesi iniziali resta vero che $\\left|\\frac{f(x)}{g(x)}\\right|\\to+\\infty$: è solo il segno a non essere determinato.</p>`
      },
      {
        id: "s21-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        icon: "✍️",
        content: `<p>Calcolare, giustificando il procedimento con i teoremi visti a lezione, $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$.</p>`,
        solution: `<p>La funzione $g(x) = x^2 \\cos\\left(\\frac{1}{x}\\right)$ è definita su $A = \\mathbb{R} \\setminus \\{0\\}$ e $x_0 = 0$ è punto di accumulazione per $A$, quindi la richiesta ha senso.</p>
<p>Non si può usare l'algebra dei limiti scrivendo $\\left(\\lim_{x \\to 0} x^2\\right)\\left(\\lim_{x \\to 0}\\cos(1/x)\\right)$, perché il secondo limite non esiste. Usiamo il Teorema del Confronto.</p>
<p>Per ogni $t \\in \\mathbb{R}$ vale $|\\cos t| \\le 1$, dunque per ogni $x \\in A$ si ha</p>
<p>$$\\left|x^2 \\cos\\left(\\frac{1}{x}\\right)\\right| = x^2 \\left|\\cos\\left(\\frac{1}{x}\\right)\\right| \\le x^2,$$</p>
<p>cioè $-x^2 \\le x^2 \\cos\\left(\\frac{1}{x}\\right) \\le x^2$ per ogni $x \\in A$ (la catena vale sia per $x \\gt 0$ sia per $x \\lt 0$, poiché $x^2 \\ge 0$).</p>
<p>Poniamo $f(x) = -x^2$ e $h(x) = x^2$: si ha $f(x) \\le g(x) \\le h(x)$ in ogni intorno di $0$ privato di $0$ e $\\lim_{x \\to 0} (-x^2) = 0 = \\lim_{x \\to 0} x^2$. I limiti delle due funzioni esterne esistono e coincidono con $L = 0$, dunque per il Teorema del Confronto</p>
<p>$$\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right) = 0.$$</p>
<p>Il risultato illustra la regola generale: infinitesimo per limitata dà infinitesimo.</p>`
      },
      {
        id: "s21-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        icon: "✍️",
        content: `<p>Calcolare $\\lim_{x\\to+\\infty}\\frac{x^3+5\\log x}{2^x+x^2}$, giustificando ogni passaggio con l'algebra dei limiti e la gerarchia degli infiniti.</p>`,
        solution: `<p>Numeratore e denominatore tendono entrambi a $+\\infty$: il limite si presenta nella forma indeterminata $\\frac{+\\infty}{+\\infty}$.</p>
<p>Secondo la scala $\\text{logaritmo}\\prec\\text{potenza}\\prec\\text{esponenziale}$ il termine dominante è $2^x$; raccogliamolo dividendo numeratore e denominatore per $2^x$ (lecito perché $2^x \\gt 0$):</p>
<p>$$\\frac{x^3+5\\log x}{2^x+x^2}=\\frac{\\dfrac{x^3}{2^x}+5\\,\\dfrac{\\log x}{2^x}}{1+\\dfrac{x^2}{2^x}}.$$</p>
<p>Per la gerarchia degli infiniti (esponenziale contro potenza, con $b=2 \\gt 1$) si ha $\\lim_{x\\to+\\infty}\\frac{x^3}{2^x}=0$ e $\\lim_{x\\to+\\infty}\\frac{x^2}{2^x}=0$.</p>
<p>Per il termine logaritmico: per $x\\ge 1$ vale $0\\le\\log x\\le x$, quindi $0\\le\\frac{\\log x}{2^x}\\le\\frac{x}{2^x}\\to 0$ e, per il Teorema del Confronto, $\\lim_{x\\to+\\infty}\\frac{\\log x}{2^x}=0$.</p>
<p>Per l'algebra dei limiti il numeratore tende a $0+5\\cdot 0=0$ e il denominatore tende a $1+0=1\\neq 0$, dunque</p>
<p>$$\\lim_{x\\to+\\infty}\\frac{x^3+5\\log x}{2^x+x^2}=\\frac{0}{1}=0.$$</p>`
      },
      {
        id: "s21-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        icon: "✍️",
        content: `<p>Dimostrare, usando il Teorema Ponte, che $\\lim_{x \\to 0} \\cos\\left(\\frac{1}{x}\\right)$ non esiste. Dedurne che per $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$ il teorema del prodotto dei limiti non è applicabile.</p>`,
        solution: `<p>La funzione $f(x) = \\cos\\left(\\frac{1}{x}\\right)$ è definita su $A = \\mathbb{R} \\setminus \\{0\\}$ e $x_0 = 0$ è punto di accumulazione per $A$. Scegliamo due successioni ammissibili.</p>
<p>Per $n \\ge 1$ sia $a_n = \\frac{1}{2n\\pi}$: si ha $a_n \\in A$, $a_n \\neq 0$, $a_n \\to 0$ e $f(a_n) = \\cos(2n\\pi) = 1$, dunque $\\lim_{n \\to \\infty} f(a_n) = 1$.</p>
<p>Per $n \\ge 0$ sia $b_n = \\frac{1}{(2n+1)\\pi}$: si ha $b_n \\in A$, $b_n \\neq 0$, $b_n \\to 0$ e $f(b_n) = \\cos\\left((2n+1)\\pi\\right) = -1$, dunque $\\lim_{n \\to \\infty} f(b_n) = -1$.</p>
<p>Se il limite $\\lim_{x \\to 0} \\cos\\left(\\frac{1}{x}\\right)$ esistesse e valesse $L$, per il Teorema Ponte si avrebbe $L = \\lim_n f(a_n) = 1$ e contemporaneamente $L = \\lim_n f(b_n) = -1$, in contrasto con l'unicità del limite: assurdo. Quindi il limite non esiste.</p>
<p>Di conseguenza, nel prodotto $x^2 \\cos\\left(\\frac{1}{x}\\right)$ uno dei due fattori non ammette limite per $x \\to 0$: l'ipotesi del teorema sul prodotto dei limiti (esistenza di entrambi i limiti) non è soddisfatta e il teorema non è applicabile. Il limite del prodotto va quindi calcolato con il Teorema del Confronto, e vale $0$; si noti che l'esistenza del limite del prodotto non implica l'esistenza dei limiti dei singoli fattori.</p>`
      },
      {
        id: "s21-es-scritto-4",
        type: "esercizio",
        title: "Scritto 4",
        kind: "scritto",
        source: "integrazione",
        icon: "✍️",
        content: `<p>Sia $f(x)=\\frac{x+2}{x^2-1}$. Risolvere la disequazione $f(x)\\ge 0$ e, usando lo studio del segno trovato, calcolare i quattro limiti laterali di $f$ in $x=-1$ e in $x=1$, dicendo quali rette sono asintoti verticali.</p>`,
        solution: `<p>Il dominio è $\\{x\\in\\mathbb{R}:x\\neq-1,\\ x\\neq 1\\}$, perché $x^2-1=0$ per $x=\\pm 1$.</p>
<p><strong>Segno dei fattori</strong>: $x+2\\ge 0\\iff x\\ge-2$; $x^2-1 \\gt 0\\iff x \\lt -1$ oppure $x \\gt 1$, e $x^2-1 \\lt 0\\iff -1 \\lt x \\lt 1$.</p>
<p>Combinando i segni: per $x \\lt -2$ si ha numeratore $\\lt 0$ e denominatore $\\gt 0$, quindi $f(x) \\lt 0$; in $x=-2$ si ha $f(-2)=0$; per $-2 \\lt x \\lt -1$ numeratore $\\gt 0$ e denominatore $\\gt 0$, quindi $f(x) \\gt 0$; per $-1 \\lt x \\lt 1$ numeratore $\\gt 0$ e denominatore $\\lt 0$, quindi $f(x) \\lt 0$; per $x \\gt 1$ numeratore $\\gt 0$ e denominatore $\\gt 0$, quindi $f(x) \\gt 0$.</p>
<p>L'insieme delle soluzioni di $f(x)\\ge 0$ è $[-2,-1)\\cup(1,+\\infty)$ (i punti $x=\\pm 1$ sono esclusi perché fuori dal dominio, mentre $x=-2$ è incluso perché lì $f$ si annulla).</p>
<p><strong>Limiti laterali in $x=-1$</strong>: il numeratore tende a $-1+2=1\\neq 0$, il denominatore tende a $0$, dunque siamo nel caso "limite non nullo diviso infinitesimo" e serve il segno del denominatore. Per $x\\to-1^-$ si ha $x \\lt -1$, quindi $x^2-1 \\gt 0$, cioè $x^2-1\\to 0^+$ e $\\lim_{x\\to-1^-}f(x)=\\frac{1}{0^+}=+\\infty$. Per $x\\to-1^+$ si ha $-1 \\lt x \\lt 1$, quindi $x^2-1\\to 0^-$ e $\\lim_{x\\to-1^+}f(x)=\\frac{1}{0^-}=-\\infty$.</p>
<p><strong>Limiti laterali in $x=1$</strong>: il numeratore tende a $3\\neq 0$. Per $x\\to 1^-$ si ha $-1 \\lt x \\lt 1$, quindi $x^2-1\\to 0^-$ e $\\lim_{x\\to 1^-}f(x)=\\frac{3}{0^-}=-\\infty$; per $x\\to 1^+$ si ha $x \\gt 1$, quindi $x^2-1\\to 0^+$ e $\\lim_{x\\to 1^+}f(x)=\\frac{3}{0^+}=+\\infty$.</p>
<p>I segni degli infiniti sono coerenti con lo studio del segno. In entrambi i punti i limiti laterali sono infiniti (e diversi tra loro, quindi i limiti bilaterali non esistono): le rette $x=-1$ e $x=1$ sono asintoti verticali.</p>
<figure class="figura" data-id="analisi1_lez21b_gp1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.2, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="analisi1_lez21b_gp1-figure_1">
  <g id="analisi1_lez21b_gp1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez21b_gp1-axes_1">
   <g id="analisi1_lez21b_gp1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez21b_gp1-FillBetweenPolyCollection_1">
    <path d="M 187.2 194 
L 187.2 194 
L 187.557789 193.964166 
L 187.915578 193.927846 
L 188.273367 193.891034 
L 188.631156 193.853721 
L 188.988945 193.815898 
L 189.346734 193.777557 
L 189.704523 193.73869 
L 190.062312 193.699286 
L 190.420101 193.659338 
L 190.777889 193.618836 
L 191.135678 193.57777 
L 191.493467 193.536131 
L 191.851256 193.493908 
L 192.209045 193.451092 
L 192.566834 193.407672 
L 192.924623 193.363637 
L 193.282412 193.318977 
L 193.640201 193.273681 
L 193.99799 193.227737 
L 194.355779 193.181133 
L 194.713568 193.133859 
L 195.071357 193.0859 
L 195.429146 193.037246 
L 195.786935 192.987883 
L 196.144724 192.937799 
L 196.502513 192.88698 
L 196.860302 192.835412 
L 197.21809 192.783081 
L 197.575879 192.729974 
L 197.933668 192.676075 
L 198.291457 192.621369 
L 198.649246 192.565842 
L 199.007035 192.509477 
L 199.364824 192.452258 
L 199.722613 192.394169 
L 200.080402 192.335192 
L 200.438191 192.275311 
L 200.79598 192.214508 
L 201.153769 192.152764 
L 201.511558 192.09006 
L 201.869347 192.026378 
L 202.227136 191.961697 
L 202.584925 191.895998 
L 202.942714 191.82926 
L 203.300503 191.761461 
L 203.658291 191.692579 
L 204.01608 191.622593 
L 204.373869 191.551478 
L 204.731658 191.479212 
L 205.089447 191.40577 
L 205.447236 191.331127 
L 205.805025 191.255258 
L 206.162814 191.178136 
L 206.520603 191.099733 
L 206.878392 191.020023 
L 207.236181 190.938976 
L 207.59397 190.856563 
L 207.951759 190.772754 
L 208.309548 190.687517 
L 208.667337 190.60082 
L 209.025126 190.51263 
L 209.382915 190.422914 
L 209.740704 190.331636 
L 210.098492 190.23876 
L 210.456281 190.144249 
L 210.81407 190.048065 
L 211.171859 189.950168 
L 211.529648 189.850517 
L 211.887437 189.749071 
L 212.245226 189.645786 
L 212.603015 189.540618 
L 212.960804 189.433521 
L 213.318593 189.324446 
L 213.676382 189.213346 
L 214.034171 189.100169 
L 214.39196 188.984863 
L 214.749749 188.867375 
L 215.107538 188.747647 
L 215.465327 188.625623 
L 215.823116 188.501243 
L 216.180905 188.374446 
L 216.538693 188.245166 
L 216.896482 188.113339 
L 217.254271 187.978897 
L 217.61206 187.841767 
L 217.969849 187.701877 
L 218.327638 187.559152 
L 218.685427 187.413512 
L 219.043216 187.264876 
L 219.401005 187.113159 
L 219.758794 186.958274 
L 220.116583 186.80013 
L 220.474372 186.638632 
L 220.832161 186.473682 
L 221.18995 186.305178 
L 221.547739 186.133016 
L 221.905528 185.957083 
L 222.263317 185.777267 
L 222.621106 185.593449 
L 222.978894 185.405504 
L 223.336683 185.213303 
L 223.694472 185.016714 
L 224.052261 184.815594 
L 224.41005 184.6098 
L 224.767839 184.399179 
L 225.125628 184.183573 
L 225.483417 183.962816 
L 225.841206 183.736736 
L 226.198995 183.505151 
L 226.556784 183.267875 
L 226.914573 183.024709 
L 227.272362 182.775447 
L 227.630151 182.519874 
L 227.98794 182.257764 
L 228.345729 181.988879 
L 228.703518 181.712972 
L 229.061307 181.429783 
L 229.419095 181.139037 
L 229.776884 180.840448 
L 230.134673 180.533715 
L 230.492462 180.218521 
L 230.850251 179.894532 
L 231.20804 179.561397 
L 231.565829 179.218746 
L 231.923618 178.866189 
L 232.281407 178.503316 
L 232.639196 178.129691 
L 232.996985 177.744857 
L 233.354774 177.348329 
L 233.712563 176.939593 
L 234.070352 176.518106 
L 234.428141 176.083293 
L 234.78593 175.634543 
L 235.143719 175.171208 
L 235.501508 174.692598 
L 235.859296 174.197982 
L 236.217085 173.68658 
L 236.574874 173.157559 
L 236.932663 172.610035 
L 237.290452 172.043059 
L 237.648241 171.45562 
L 238.00603 170.846636 
L 238.363819 170.214945 
L 238.721608 169.559302 
L 239.079397 168.87837 
L 239.437186 168.170711 
L 239.794975 167.434776 
L 240.152764 166.668894 
L 240.510553 165.871261 
L 240.868342 165.039926 
L 241.226131 164.172774 
L 241.58392 163.267511 
L 241.941709 162.321644 
L 242.299497 161.332455 
L 242.657286 160.296984 
L 243.015075 159.211992 
L 243.372864 158.073931 
L 243.730653 156.87891 
L 244.088442 155.622646 
L 244.446231 154.300417 
L 244.80402 152.907004 
L 245.161809 151.436626 
L 245.519598 149.882857 
L 245.877387 148.238535 
L 246.235176 146.49566 
L 246.592965 144.645258 
L 246.950754 142.677235 
L 247.308543 140.580194 
L 247.666332 138.341219 
L 248.024121 135.945611 
L 248.38191 133.376572 
L 248.739698 130.614815 
L 249.097487 127.638085 
L 249.455276 124.420567 
L 249.813065 120.932144 
L 250.170854 117.137457 
L 250.528643 112.994724 
L 250.886432 108.454199 
L 251.244221 103.45619 
L 251.60201 97.928436 
L 251.959799 91.782619 
L 252.317588 84.909639 
L 252.675377 77.17312 
L 253.033166 68.400323 
L 253.390955 58.369149 
L 253.748744 46.789163 
L 254.106533 33.27312 
L 254.464322 17.292954 
L 254.822111 -1.890625 
L 255.179899 -25.345482 
L 255.537688 -54.673414 
L 255.895477 -92.391534 
L 256.253266 -142.695029 
L 256.611055 -213.135236 
L 256.968844 -318.814832 
L 257.326633 -494.9734 
L 257.684422 -847.329688 
L 258.042211 -1904.477444 
L 258.042211 194 
L 258.042211 194 
L 257.684422 194 
L 257.326633 194 
L 256.968844 194 
L 256.611055 194 
L 256.253266 194 
L 255.895477 194 
L 255.537688 194 
L 255.179899 194 
L 254.822111 194 
L 254.464322 194 
L 254.106533 194 
L 253.748744 194 
L 253.390955 194 
L 253.033166 194 
L 252.675377 194 
L 252.317588 194 
L 251.959799 194 
L 251.60201 194 
L 251.244221 194 
L 250.886432 194 
L 250.528643 194 
L 250.170854 194 
L 249.813065 194 
L 249.455276 194 
L 249.097487 194 
L 248.739698 194 
L 248.38191 194 
L 248.024121 194 
L 247.666332 194 
L 247.308543 194 
L 246.950754 194 
L 246.592965 194 
L 246.235176 194 
L 245.877387 194 
L 245.519598 194 
L 245.161809 194 
L 244.80402 194 
L 244.446231 194 
L 244.088442 194 
L 243.730653 194 
L 243.372864 194 
L 243.015075 194 
L 242.657286 194 
L 242.299497 194 
L 241.941709 194 
L 241.58392 194 
L 241.226131 194 
L 240.868342 194 
L 240.510553 194 
L 240.152764 194 
L 239.794975 194 
L 239.437186 194 
L 239.079397 194 
L 238.721608 194 
L 238.363819 194 
L 238.00603 194 
L 237.648241 194 
L 237.290452 194 
L 236.932663 194 
L 236.574874 194 
L 236.217085 194 
L 235.859296 194 
L 235.501508 194 
L 235.143719 194 
L 234.78593 194 
L 234.428141 194 
L 234.070352 194 
L 233.712563 194 
L 233.354774 194 
L 232.996985 194 
L 232.639196 194 
L 232.281407 194 
L 231.923618 194 
L 231.565829 194 
L 231.20804 194 
L 230.850251 194 
L 230.492462 194 
L 230.134673 194 
L 229.776884 194 
L 229.419095 194 
L 229.061307 194 
L 228.703518 194 
L 228.345729 194 
L 227.98794 194 
L 227.630151 194 
L 227.272362 194 
L 226.914573 194 
L 226.556784 194 
L 226.198995 194 
L 225.841206 194 
L 225.483417 194 
L 225.125628 194 
L 224.767839 194 
L 224.41005 194 
L 224.052261 194 
L 223.694472 194 
L 223.336683 194 
L 222.978894 194 
L 222.621106 194 
L 222.263317 194 
L 221.905528 194 
L 221.547739 194 
L 221.18995 194 
L 220.832161 194 
L 220.474372 194 
L 220.116583 194 
L 219.758794 194 
L 219.401005 194 
L 219.043216 194 
L 218.685427 194 
L 218.327638 194 
L 217.969849 194 
L 217.61206 194 
L 217.254271 194 
L 216.896482 194 
L 216.538693 194 
L 216.180905 194 
L 215.823116 194 
L 215.465327 194 
L 215.107538 194 
L 214.749749 194 
L 214.39196 194 
L 214.034171 194 
L 213.676382 194 
L 213.318593 194 
L 212.960804 194 
L 212.603015 194 
L 212.245226 194 
L 211.887437 194 
L 211.529648 194 
L 211.171859 194 
L 210.81407 194 
L 210.456281 194 
L 210.098492 194 
L 209.740704 194 
L 209.382915 194 
L 209.025126 194 
L 208.667337 194 
L 208.309548 194 
L 207.951759 194 
L 207.59397 194 
L 207.236181 194 
L 206.878392 194 
L 206.520603 194 
L 206.162814 194 
L 205.805025 194 
L 205.447236 194 
L 205.089447 194 
L 204.731658 194 
L 204.373869 194 
L 204.01608 194 
L 203.658291 194 
L 203.300503 194 
L 202.942714 194 
L 202.584925 194 
L 202.227136 194 
L 201.869347 194 
L 201.511558 194 
L 201.153769 194 
L 200.79598 194 
L 200.438191 194 
L 200.080402 194 
L 199.722613 194 
L 199.364824 194 
L 199.007035 194 
L 198.649246 194 
L 198.291457 194 
L 197.933668 194 
L 197.575879 194 
L 197.21809 194 
L 196.860302 194 
L 196.502513 194 
L 196.144724 194 
L 195.786935 194 
L 195.429146 194 
L 195.071357 194 
L 194.713568 194 
L 194.355779 194 
L 193.99799 194 
L 193.640201 194 
L 193.282412 194 
L 192.924623 194 
L 192.566834 194 
L 192.209045 194 
L 191.851256 194 
L 191.493467 194 
L 191.135678 194 
L 190.777889 194 
L 190.420101 194 
L 190.062312 194 
L 189.704523 194 
L 189.346734 194 
L 188.988945 194 
L 188.631156 194 
L 188.273367 194 
L 187.915578 194 
L 187.557789 194 
L 187.2 194 
z
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: #7c4dff; fill-opacity: 0.15"/>
   </g>
   <g id="analisi1_lez21b_gp1-FillBetweenPolyCollection_2">
    <path d="M 401.873367 194 
L 401.873367 -1915.102244 
L 402.946734 -857.953899 
L 404.020101 -505.596642 
L 405.093467 -329.436738 
L 406.166834 -223.755448 
L 407.240201 -153.313201 
L 408.313568 -103.00733 
L 409.386935 -65.286508 
L 410.460302 -35.955556 
L 411.533668 -12.497371 
L 412.607035 6.689833 
L 413.680402 22.673915 
L 414.753769 36.194156 
L 415.827136 47.778612 
L 416.900503 57.814522 
L 417.973869 66.592314 
L 419.047236 74.334076 
L 420.120603 81.212543 
L 421.19397 87.364083 
L 422.267337 92.897789 
L 423.340704 97.901973 
L 424.41407 102.448888 
L 425.487437 106.598222 
L 426.560804 110.399712 
L 427.634171 113.895137 
L 428.707538 117.119849 
L 429.780905 120.103959 
L 430.854271 122.873277 
L 431.927638 125.450053 
L 433.001005 127.853569 
L 434.074372 130.100618 
L 435.147739 132.205893 
L 436.221106 134.182306 
L 437.294472 136.04125 
L 438.367839 137.792815 
L 439.441206 139.445968 
L 440.514573 141.008708 
L 441.58794 142.488191 
L 442.661307 143.890839 
L 443.734673 145.22243 
L 444.80804 146.488179 
L 445.881407 147.692805 
L 446.954774 148.840585 
L 448.028141 149.93541 
L 449.101508 150.980821 
L 450.174874 151.980056 
L 451.248241 152.936072 
L 452.321608 153.851582 
L 453.394975 154.729077 
L 454.468342 155.570849 
L 455.541709 156.379008 
L 456.615075 157.155504 
L 457.688442 157.902137 
L 458.761809 158.620577 
L 459.835176 159.312369 
L 460.908543 159.978948 
L 461.98191 160.621651 
L 463.055276 161.241718 
L 464.128643 161.84031 
L 465.20201 162.418505 
L 466.275377 162.977314 
L 467.348744 163.517683 
L 468.422111 164.040494 
L 469.495477 164.546577 
L 470.568844 165.03671 
L 471.642211 165.511624 
L 472.715578 165.972006 
L 473.788945 166.418501 
L 474.862312 166.851719 
L 475.935678 167.272233 
L 477.009045 167.680586 
L 478.082412 168.077288 
L 479.155779 168.462823 
L 480.229146 168.837647 
L 481.302513 169.202194 
L 482.375879 169.556872 
L 483.449246 169.902071 
L 484.522613 170.238158 
L 485.59598 170.565484 
L 486.669347 170.88438 
L 487.742714 171.195162 
L 488.81608 171.49813 
L 489.889447 171.79357 
L 490.962814 172.081754 
L 492.036181 172.36294 
L 493.109548 172.637377 
L 494.182915 172.905299 
L 495.256281 173.166931 
L 496.329648 173.422489 
L 497.403015 173.672176 
L 498.476382 173.91619 
L 499.549749 174.154718 
L 500.623116 174.387939 
L 501.696482 174.616024 
L 502.769849 174.839138 
L 503.843216 175.05744 
L 504.916583 175.271079 
L 505.98995 175.4802 
L 507.063317 175.684943 
L 508.136683 175.885441 
L 509.21005 176.081821 
L 510.283417 176.274207 
L 511.356784 176.462717 
L 512.430151 176.647464 
L 513.503518 176.828558 
L 514.576884 177.006104 
L 515.650251 177.180202 
L 516.723618 177.350951 
L 517.796985 177.518444 
L 518.870352 177.68277 
L 519.943719 177.844018 
L 521.017085 178.002272 
L 522.090452 178.157611 
L 523.163819 178.310114 
L 524.237186 178.459857 
L 525.310553 178.606912 
L 526.38392 178.751349 
L 527.457286 178.893237 
L 528.530653 179.03264 
L 529.60402 179.169621 
L 530.677387 179.304243 
L 531.750754 179.436564 
L 532.824121 179.566641 
L 533.897487 179.69453 
L 534.970854 179.820285 
L 536.044221 179.943956 
L 537.117588 180.065595 
L 538.190955 180.18525 
L 539.264322 180.302967 
L 540.337688 180.418794 
L 541.411055 180.532773 
L 542.484422 180.644948 
L 543.557789 180.755361 
L 544.631156 180.864051 
L 545.704523 180.971058 
L 546.777889 181.076419 
L 547.851256 181.180172 
L 548.924623 181.282352 
L 549.99799 181.382994 
L 551.071357 181.482132 
L 552.144724 181.579798 
L 553.21809 181.676024 
L 554.291457 181.770842 
L 555.364824 181.86428 
L 556.438191 181.956369 
L 557.511558 182.047136 
L 558.584925 182.13661 
L 559.658291 182.224817 
L 560.731658 182.311783 
L 561.805025 182.397533 
L 562.878392 182.482094 
L 563.951759 182.565487 
L 565.025126 182.647738 
L 566.098492 182.728868 
L 567.171859 182.8089 
L 568.245226 182.887856 
L 569.318593 182.965756 
L 570.39196 183.042622 
L 571.465327 183.118473 
L 572.538693 183.193328 
L 573.61206 183.267208 
L 574.685427 183.340129 
L 575.758794 183.412112 
L 576.832161 183.483172 
L 577.905528 183.553327 
L 578.978894 183.622595 
L 580.052261 183.690991 
L 581.125628 183.758531 
L 582.198995 183.825231 
L 583.272362 183.891107 
L 584.345729 183.956172 
L 585.419095 184.020443 
L 586.492462 184.083932 
L 587.565829 184.146653 
L 588.639196 184.208621 
L 589.712563 184.269848 
L 590.78593 184.330347 
L 591.859296 184.390131 
L 592.932663 184.449213 
L 594.00603 184.507603 
L 595.079397 184.565315 
L 596.152764 184.622359 
L 597.226131 184.678747 
L 598.299497 184.734489 
L 599.372864 184.789598 
L 600.446231 184.844082 
L 601.519598 184.897952 
L 602.592965 184.951219 
L 603.666332 185.003893 
L 604.739698 185.055982 
L 605.813065 185.107497 
L 606.886432 185.158446 
L 607.959799 185.20884 
L 609.033166 185.258685 
L 610.106533 185.307992 
L 611.179899 185.356769 
L 612.253266 185.405024 
L 613.326633 185.452765 
L 614.4 185.5 
L 614.4 194 
L 614.4 194 
L 613.326633 194 
L 612.253266 194 
L 611.179899 194 
L 610.106533 194 
L 609.033166 194 
L 607.959799 194 
L 606.886432 194 
L 605.813065 194 
L 604.739698 194 
L 603.666332 194 
L 602.592965 194 
L 601.519598 194 
L 600.446231 194 
L 599.372864 194 
L 598.299497 194 
L 597.226131 194 
L 596.152764 194 
L 595.079397 194 
L 594.00603 194 
L 592.932663 194 
L 591.859296 194 
L 590.78593 194 
L 589.712563 194 
L 588.639196 194 
L 587.565829 194 
L 586.492462 194 
L 585.419095 194 
L 584.345729 194 
L 583.272362 194 
L 582.198995 194 
L 581.125628 194 
L 580.052261 194 
L 578.978894 194 
L 577.905528 194 
L 576.832161 194 
L 575.758794 194 
L 574.685427 194 
L 573.61206 194 
L 572.538693 194 
L 571.465327 194 
L 570.39196 194 
L 569.318593 194 
L 568.245226 194 
L 567.171859 194 
L 566.098492 194 
L 565.025126 194 
L 563.951759 194 
L 562.878392 194 
L 561.805025 194 
L 560.731658 194 
L 559.658291 194 
L 558.584925 194 
L 557.511558 194 
L 556.438191 194 
L 555.364824 194 
L 554.291457 194 
L 553.21809 194 
L 552.144724 194 
L 551.071357 194 
L 549.99799 194 
L 548.924623 194 
L 547.851256 194 
L 546.777889 194 
L 545.704523 194 
L 544.631156 194 
L 543.557789 194 
L 542.484422 194 
L 541.411055 194 
L 540.337688 194 
L 539.264322 194 
L 538.190955 194 
L 537.117588 194 
L 536.044221 194 
L 534.970854 194 
L 533.897487 194 
L 532.824121 194 
L 531.750754 194 
L 530.677387 194 
L 529.60402 194 
L 528.530653 194 
L 527.457286 194 
L 526.38392 194 
L 525.310553 194 
L 524.237186 194 
L 523.163819 194 
L 522.090452 194 
L 521.017085 194 
L 519.943719 194 
L 518.870352 194 
L 517.796985 194 
L 516.723618 194 
L 515.650251 194 
L 514.576884 194 
L 513.503518 194 
L 512.430151 194 
L 511.356784 194 
L 510.283417 194 
L 509.21005 194 
L 508.136683 194 
L 507.063317 194 
L 505.98995 194 
L 504.916583 194 
L 503.843216 194 
L 502.769849 194 
L 501.696482 194 
L 500.623116 194 
L 499.549749 194 
L 498.476382 194 
L 497.403015 194 
L 496.329648 194 
L 495.256281 194 
L 494.182915 194 
L 493.109548 194 
L 492.036181 194 
L 490.962814 194 
L 489.889447 194 
L 488.81608 194 
L 487.742714 194 
L 486.669347 194 
L 485.59598 194 
L 484.522613 194 
L 483.449246 194 
L 482.375879 194 
L 481.302513 194 
L 480.229146 194 
L 479.155779 194 
L 478.082412 194 
L 477.009045 194 
L 475.935678 194 
L 474.862312 194 
L 473.788945 194 
L 472.715578 194 
L 471.642211 194 
L 470.568844 194 
L 469.495477 194 
L 468.422111 194 
L 467.348744 194 
L 466.275377 194 
L 465.20201 194 
L 464.128643 194 
L 463.055276 194 
L 461.98191 194 
L 460.908543 194 
L 459.835176 194 
L 458.761809 194 
L 457.688442 194 
L 456.615075 194 
L 455.541709 194 
L 454.468342 194 
L 453.394975 194 
L 452.321608 194 
L 451.248241 194 
L 450.174874 194 
L 449.101508 194 
L 448.028141 194 
L 446.954774 194 
L 445.881407 194 
L 444.80804 194 
L 443.734673 194 
L 442.661307 194 
L 441.58794 194 
L 440.514573 194 
L 439.441206 194 
L 438.367839 194 
L 437.294472 194 
L 436.221106 194 
L 435.147739 194 
L 434.074372 194 
L 433.001005 194 
L 431.927638 194 
L 430.854271 194 
L 429.780905 194 
L 428.707538 194 
L 427.634171 194 
L 426.560804 194 
L 425.487437 194 
L 424.41407 194 
L 423.340704 194 
L 422.267337 194 
L 421.19397 194 
L 420.120603 194 
L 419.047236 194 
L 417.973869 194 
L 416.900503 194 
L 415.827136 194 
L 414.753769 194 
L 413.680402 194 
L 412.607035 194 
L 411.533668 194 
L 410.460302 194 
L 409.386935 194 
L 408.313568 194 
L 407.240201 194 
L 406.166834 194 
L 405.093467 194 
L 404.020101 194 
L 402.946734 194 
L 401.873367 194 
z
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: #7c4dff; fill-opacity: 0.15"/>
   </g>
   <g id="analisi1_lez21b_gp1-matplotlib.axis_1">
    <g id="analisi1_lez21b_gp1-xtick_1">
     <g id="analisi1_lez21b_gp1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_2">
      <defs>
       <path id="analisi1_lez21b_gp1-m3bddce89ad" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_1">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(39.316328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_gp1-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez21b_gp1-DejaVuSans-17" d="M 2419 4116 
L 825 1625 
L 2419 1625 
L 2419 4116 
z
M 2253 4666 
L 3047 4666 
L 3047 1625 
L 3713 1625 
L 3713 1100 
L 3047 1100 
L 3047 0 
L 2419 0 
L 2419 1100 
L 313 1100 
L 313 1709 
L 2253 4666 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-17" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_2">
     <g id="analisi1_lez21b_gp1-line2d_3">
      <path d="M 116 364 
L 116 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="116" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_2">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(110.516328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_gp1-DejaVuSans-16" d="M 2597 2516 
Q 3050 2419 3304 2112 
Q 3559 1806 3559 1356 
Q 3559 666 3084 287 
Q 2609 -91 1734 -91 
Q 1441 -91 1130 -33 
Q 819 25 488 141 
L 488 750 
Q 750 597 1062 519 
Q 1375 441 1716 441 
Q 2309 441 2620 675 
Q 2931 909 2931 1356 
Q 2931 1769 2642 2001 
Q 2353 2234 1838 2234 
L 1294 2234 
L 1294 2753 
L 1863 2753 
Q 2328 2753 2575 2939 
Q 2822 3125 2822 3475 
Q 2822 3834 2567 4026 
Q 2313 4219 1838 4219 
Q 1578 4219 1281 4162 
Q 984 4106 628 3988 
L 628 4550 
Q 988 4650 1302 4700 
Q 1616 4750 1894 4750 
Q 2613 4750 3031 4423 
Q 3450 4097 3450 3541 
Q 3450 3153 3228 2886 
Q 3006 2619 2597 2516 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_3">
     <g id="analisi1_lez21b_gp1-line2d_5">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="187.2" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_3">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(181.716328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_gp1-DejaVuSans-15" d="M 1228 531 
L 3431 531 
L 3431 0 
L 469 0 
L 469 531 
Q 828 903 1448 1529 
Q 2069 2156 2228 2338 
Q 2531 2678 2651 2914 
Q 2772 3150 2772 3378 
Q 2772 3750 2511 3984 
Q 2250 4219 1831 4219 
Q 1534 4219 1204 4116 
Q 875 4013 500 3803 
L 500 4441 
Q 881 4594 1212 4672 
Q 1544 4750 1819 4750 
Q 2544 4750 2975 4387 
Q 3406 4025 3406 3419 
Q 3406 3131 3298 2873 
Q 3191 2616 2906 2266 
Q 2828 2175 2409 1742 
Q 1991 1309 1228 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_4">
     <g id="analisi1_lez21b_gp1-line2d_7">
      <path d="M 258.4 364 
L 258.4 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="258.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_4">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(252.916328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_gp1-DejaVuSans-14" d="M 794 531 
L 1825 531 
L 1825 4091 
L 703 3866 
L 703 4441 
L 1819 4666 
L 2450 4666 
L 2450 531 
L 3481 531 
L 3481 0 
L 794 0 
L 794 531 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_5">
     <g id="analisi1_lez21b_gp1-line2d_9">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_5">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_gp1-DejaVuSans-13" d="M 2034 4250 
Q 1547 4250 1301 3770 
Q 1056 3291 1056 2328 
Q 1056 1369 1301 889 
Q 1547 409 2034 409 
Q 2525 409 2770 889 
Q 3016 1369 3016 2328 
Q 3016 3291 2770 3770 
Q 2525 4250 2034 4250 
z
M 2034 4750 
Q 2819 4750 3233 4129 
Q 3647 3509 3647 2328 
Q 3647 1150 3233 529 
Q 2819 -91 2034 -91 
Q 1250 -91 836 529 
Q 422 1150 422 2328 
Q 422 3509 836 4129 
Q 1250 4750 2034 4750 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_6">
     <g id="analisi1_lez21b_gp1-line2d_11">
      <path d="M 400.8 364 
L 400.8 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="400.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_6">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(397.300625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_7">
     <g id="analisi1_lez21b_gp1-line2d_13">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="472" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_7">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(468.500625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_8">
     <g id="analisi1_lez21b_gp1-line2d_15">
      <path d="M 543.2 364 
L 543.2 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="543.2" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_8">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(539.700625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-xtick_9">
     <g id="analisi1_lez21b_gp1-line2d_17">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m3bddce89ad" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_9">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(610.900625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-17"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_gp1-matplotlib.axis_2">
    <g id="analisi1_lez21b_gp1-ytick_1">
     <g id="analisi1_lez21b_gp1-line2d_19">
      <path d="M 44.8 321.5 
L 614.4 321.5 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_20">
      <defs>
       <path id="analisi1_lez21b_gp1-m63291393a8" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m63291393a8" x="329.6" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_10">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(312.132656 325.678711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez21b_gp1-DejaVuSans-19" d="M 2113 2584 
Q 1688 2584 1439 2293 
Q 1191 2003 1191 1497 
Q 1191 994 1439 701 
Q 1688 409 2113 409 
Q 2538 409 2786 701 
Q 3034 994 3034 1497 
Q 3034 2003 2786 2293 
Q 2538 2584 2113 2584 
z
M 3366 4563 
L 3366 3988 
Q 3128 4100 2886 4159 
Q 2644 4219 2406 4219 
Q 1781 4219 1451 3797 
Q 1122 3375 1075 2522 
Q 1259 2794 1537 2939 
Q 1816 3084 2150 3084 
Q 2853 3084 3261 2657 
Q 3669 2231 3669 1497 
Q 3669 778 3244 343 
Q 2819 -91 2113 -91 
Q 1303 -91 875 529 
Q 447 1150 447 2328 
Q 447 3434 972 4092 
Q 1497 4750 2381 4750 
Q 2619 4750 2861 4703 
Q 3103 4656 3366 4563 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-ytick_2">
     <g id="analisi1_lez21b_gp1-line2d_21">
      <path d="M 44.8 257.75 
L 614.4 257.75 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m63291393a8" x="329.6" y="257.75" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_11">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(312.132656 261.928711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-ytick_3">
     <g id="analisi1_lez21b_gp1-line2d_23">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m63291393a8" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_12">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-ytick_4">
     <g id="analisi1_lez21b_gp1-line2d_25">
      <path d="M 44.8 130.25 
L 614.4 130.25 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m63291393a8" x="329.6" y="130.25" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_13">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(316.10125 134.428711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez21b_gp1-ytick_5">
     <g id="analisi1_lez21b_gp1-line2d_27">
      <path d="M 44.8 66.5 
L 614.4 66.5 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez21b_gp1-line2d_28">
      <g>
       <use xlink:href="#analisi1_lez21b_gp1-m63291393a8" x="329.6" y="66.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez21b_gp1-text_14">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 70.678711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_29">
    <defs>
     <path id="analisi1_lez21b_gp1-m173ce6f2e1" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_gp1-m173ce6f2e1" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_30">
    <defs>
     <path id="analisi1_lez21b_gp1-m384ca89a22" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez21b_gp1-m384ca89a22" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_31">
    <path d="M 44.8 196.833333 
L 95.631693 196.789169 
L 125.085571 196.556788 
L 145.513261 196.188596 
L 160.715263 195.708612 
L 172.591827 195.128691 
L 182.56814 194.423472 
L 190.644204 193.634035 
L 197.295079 192.771719 
L 202.99583 191.819262 
L 207.746455 190.821017 
L 212.022018 189.710439 
L 215.822519 188.501453 
L 219.147957 187.220784 
L 221.998332 185.91082 
L 224.848707 184.35089 
L 227.22402 182.80949 
L 229.599333 180.989621 
L 231.499583 179.282924 
L 233.399833 177.297536 
L 235.300083 174.963962 
L 237.200334 172.187754 
L 238.625521 169.737806 
L 240.050709 166.890507 
L 241.475897 163.544988 
L 242.901084 159.563254 
L 244.326272 154.751395 
L 245.75146 148.828079 
L 246.701585 144.060723 
L 247.65171 138.435683 
L 248.601835 131.703147 
L 249.55196 123.505992 
L 250.502085 113.315235 
L 251.45221 100.312527 
L 252.402335 83.160942 
L 253.35246 59.516915 
L 254.302585 24.863118 
L 254.803308 -1 
L 254.803308 -1 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_32">
    <path d="M 262.370071 401 
L 262.853711 380.310389 
L 263.803837 350.559289 
L 264.753962 329.741432 
L 265.704087 314.37133 
L 266.654212 302.568341 
L 267.604337 293.228359 
L 268.554462 285.660529 
L 269.504587 279.410448 
L 270.929775 271.851322 
L 272.354962 265.879142 
L 273.78015 261.054062 
L 275.205338 257.085495 
L 276.630525 253.773775 
L 278.055713 250.977197 
L 279.480901 248.592428 
L 281.381151 245.922819 
L 283.281401 243.716073 
L 285.181651 241.876189 
L 287.081902 240.332763 
L 288.982152 239.033053 
L 291.357465 237.690739 
L 293.732777 236.607678 
L 296.583153 235.589112 
L 299.433528 234.825203 
L 302.283903 234.275512 
L 305.609341 233.865996 
L 308.934779 233.674559 
L 312.735279 233.693633 
L 316.53578 233.94578 
L 320.33628 234.419424 
L 324.136781 235.111522 
L 327.937281 236.026672 
L 331.737781 237.176956 
L 335.538282 238.582427 
L 338.86372 240.04425 
L 342.189158 241.750119 
L 345.514595 243.734581 
L 348.364971 245.690963 
L 351.215346 247.920801 
L 354.065721 250.469529 
L 356.441034 252.878305 
L 358.816347 255.590388 
L 361.19166 258.658085 
L 363.566972 262.14727 
L 365.467223 265.297797 
L 367.367473 268.825432 
L 369.267723 272.797317 
L 371.167973 277.297894 
L 373.068224 282.434821 
L 374.968474 288.347506 
L 376.868724 295.219709 
L 378.293912 301.149125 
L 379.719099 307.892312 
L 381.144287 315.625833 
L 382.569475 324.581486 
L 383.994662 335.069723 
L 385.41985 347.51609 
L 386.845038 362.519998 
L 388.270225 380.9536 
L 389.51724 401 
L 389.51724 401 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_33">
    <path d="M 412.155959 -1 
L 413.44854 19.4513 
L 414.873728 37.576766 
L 416.298916 52.361442 
L 417.724103 64.649499 
L 419.149291 75.022834 
L 420.574479 83.895585 
L 421.999666 91.570521 
L 423.424854 98.274119 
L 425.325104 105.99414 
L 427.225354 112.597535 
L 429.125605 118.309232 
L 431.025855 123.297585 
L 432.926105 127.691111 
L 434.826355 131.58961 
L 437.201668 135.884901 
L 439.576981 139.648484 
L 441.952294 142.972632 
L 444.327606 145.929463 
L 446.702919 148.576163 
L 449.553294 151.406856 
L 452.40367 153.91998 
L 455.254045 156.165604 
L 458.579483 158.50046 
L 461.904921 160.57632 
L 465.705421 162.682943 
L 469.980984 164.770206 
L 474.256547 166.608826 
L 479.007173 168.410095 
L 484.232861 170.14831 
L 489.933611 171.805569 
L 496.109425 173.370541 
L 503.235363 174.934397 
L 510.836364 176.371795 
L 519.38749 177.760837 
L 528.888741 179.078604 
L 539.815179 180.362644 
L 552.166806 181.581792 
L 566.418682 182.752856 
L 582.570809 183.848143 
L 601.098249 184.876878 
L 614.4 185.5 
L 614.4 185.5 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_34">
    <path d="M 258.4 364 
L 258.4 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_35">
    <path d="M 400.8 364 
L 400.8 24 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_36">
    <path d="M 187.318766 193.988158 
L 194.444704 193.169447 
L 200.620517 192.244443 
L 205.846205 191.246446 
L 210.596831 190.106667 
L 214.397331 188.983116 
L 217.722769 187.79878 
L 221.048207 186.372365 
L 223.898582 184.902544 
L 226.273895 183.455957 
L 228.649208 181.755316 
L 231.02452 179.733436 
L 232.924771 177.823456 
L 234.825021 175.584642 
L 236.725271 172.929715 
L 238.150459 170.594442 
L 239.575646 167.889355 
L 241.000834 164.723106 
L 242.426022 160.971734 
L 243.851209 156.462682 
L 245.276397 150.94841 
L 246.226522 146.539045 
L 247.176647 141.369044 
L 248.126772 135.227076 
L 249.076897 127.815654 
L 250.027023 118.702255 
L 250.977148 107.232889 
L 251.927273 92.369565 
L 252.877398 72.359956 
L 253.827523 43.995238 
L 254.302585 24.863118 
L 254.803308 -1 
L 254.803308 -1 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_37">
    <path d="M 412.155959 -1 
L 413.44854 19.4513 
L 414.873728 37.576766 
L 416.298916 52.361442 
L 417.724103 64.649499 
L 419.149291 75.022834 
L 420.574479 83.895585 
L 421.999666 91.570521 
L 423.424854 98.274119 
L 425.325104 105.99414 
L 427.225354 112.597535 
L 429.125605 118.309232 
L 431.025855 123.297585 
L 432.926105 127.691111 
L 434.826355 131.58961 
L 437.201668 135.884901 
L 439.576981 139.648484 
L 441.952294 142.972632 
L 444.327606 145.929463 
L 446.702919 148.576163 
L 449.553294 151.406856 
L 452.40367 153.91998 
L 455.254045 156.165604 
L 458.579483 158.50046 
L 461.904921 160.57632 
L 465.705421 162.682943 
L 469.980984 164.770206 
L 474.256547 166.608826 
L 479.007173 168.410095 
L 484.232861 170.14831 
L 489.933611 171.805569 
L 496.109425 173.370541 
L 503.235363 174.934397 
L 510.836364 176.371795 
L 519.38749 177.760837 
L 528.888741 179.078604 
L 539.815179 180.362644 
L 552.166806 181.581792 
L 566.418682 182.752856 
L 582.570809 183.848143 
L 601.098249 184.876878 
L 614.4 185.5 
L 614.4 185.5 
" clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez21b_gp1-text_15" transform="translate(-47.2 0)">
    <g style="fill: currentColor" transform="translate(193.2 188) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez21b_gp1-DejaVuSans-Oblique-5b" d="M 3841 3500 
L 2234 1784 
L 3219 0 
L 2559 0 
L 1819 1388 
L 531 0 
L -166 0 
L 1556 1844 
L 641 3500 
L 1300 3500 
L 1972 2234 
L 3144 3500 
L 3841 3500 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez21b_gp1-DejaVuSans-20" d="M 678 2906 
L 4684 2906 
L 4684 2381 
L 678 2381 
L 678 2906 
z
M 678 1631 
L 4684 1631 
L 4684 1100 
L 678 1100 
L 678 1631 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez21b_gp1-DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
     <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-c9c" transform="translate(181.933594 0.78125)"/>
     <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-15" transform="translate(265.722656 0.78125)"/>
    </g>
   </g>
   <g id="analisi1_lez21b_gp1-line2d_38">
    <defs>
     <path id="analisi1_lez21b_gp1-m97125fc1d7" d="M 0 2.75 
C 0.729309 2.75 1.428845 2.460243 1.944544 1.944544 
C 2.460243 1.428845 2.75 0.729309 2.75 0 
C 2.75 -0.729309 2.460243 -1.428845 1.944544 -1.944544 
C 1.428845 -2.460243 0.729309 -2.75 0 -2.75 
C -0.729309 -2.75 -1.428845 -2.460243 -1.944544 -1.944544 
C -2.460243 -1.428845 -2.75 -0.729309 -2.75 0 
C -2.75 0.729309 -2.460243 1.428845 -1.944544 1.944544 
C -1.428845 2.460243 -0.729309 2.75 0 2.75 
z
" style="stroke: #7c4dff"/>
    </defs>
    <g clip-path="url(#analisi1_lez21b_gp1-pd0e8d45459)">
     <use xlink:href="#analisi1_lez21b_gp1-m97125fc1d7" x="187.2" y="194" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez21b_gp1-legend_1">
    <g id="analisi1_lez21b_gp1-line2d_39">
     <path d="M 569.827656 38.408281 
L 580.827656 38.408281 
L 591.827656 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez21b_gp1-text_16">
     <!-- f -->
     <g style="fill: currentColor" transform="translate(600.627656 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez21b_gp1-DejaVuSans-49" d="M 2375 4863 
L 2375 4384 
L 1825 4384 
Q 1516 4384 1395 4259 
Q 1275 4134 1275 3809 
L 1275 3500 
L 2222 3500 
L 2222 3053 
L 1275 3053 
L 1275 0 
L 697 0 
L 697 3053 
L 147 3053 
L 147 3500 
L 697 3500 
L 697 3744 
Q 697 4328 969 4595 
Q 1241 4863 1831 4863 
L 2375 4863 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez21b_gp1-DejaVuSans-49"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez21b_gp1-pd0e8d45459">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
<p>Il grafico mostra il segno di $f(x)=\\frac{x+2}{x^2-1}$ e gli asintoti verticali; l'insieme soluzione di $f(x)\\ge 0$ è $[-2,-1)\\cup(1,+\\infty)$.</p>`
      },
      {
        id: "s21-oral-box",
        type: "oral_box",
        title: "Domande tipiche dell'orale",
        icon: "🎤",
        content: `<p>Le domande più ricorrenti su questa lezione riguardano: (a) il ruolo dell'ipotesi di punto di accumulazione nella definizione di limite e nelle dimostrazioni; (b) l'uso del Teorema Ponte per negare l'esistenza di un limite; (c) l'asimmetria tra le due forme della permanenza del segno; (d) perché il quoziente "non nullo diviso infinitesimo" richiede il segno del denominatore.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Enuncia la definizione di limite di una funzione con gli intorni.",
        back: "Sia $f: A \\to \\mathbb{R}$, $A \\subseteq \\mathbb{R}$, e sia $x_0$ punto di accumulazione per $A$. Si ha $\\lim_{x \\to x_0} f(x) = L \\in \\mathbb{R}$ se per ogni intorno $U$ di $L$ esiste un intorno $V$ di $x_0$ tale che per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$ si ha $f(x) \\in U$. Il valore $f(x_0)$ è irrilevante: $x_0$ è escluso, e la funzione può anche non essere definita in $x_0$."
      },
      {
        type: "domanda",
        front: "Perché nella definizione di limite si richiede che $x_0$ sia punto di accumulazione di $A$?",
        back: "Perché garantisce che $V \\cap A \\setminus \\{x_0\\}$ sia non vuoto per ogni intorno $V$ di $x_0$. Senza questa ipotesi la definizione sarebbe vuota, soddisfatta da <em>ogni</em> $L \\in \\mathbb{R}$, e il limite non sarebbe unico. Inoltre l'ipotesi garantisce l'esistenza di almeno una successione ammissibile: per ogni $n \\ge 1$ si può scegliere $a_n \\in A$ con $0 \\lt |a_n - x_0| \\lt 1/n$, da cui $a_n \\to x_0$, $a_n \\neq x_0$."
      },
      {
        type: "definizione",
        front: "Enuncia il Teorema Ponte.",
        back: "Sia $f: A \\to \\mathbb{R}$ e $x_0$ punto di accumulazione per $A$. Allora $\\lim_{x \\to x_0} f(x) = L$ se e solo se per ogni successione $(a_n)$ con $a_n \\in A$, $a_n \\neq x_0$ e $a_n \\to x_0$ (successione ammissibile) risulta $\\lim_{n \\to \\infty} f(a_n) = L$. Serve a trasportare tutti i teoremi dimostrati per le successioni ai limiti di funzioni."
      },
      {
        type: "dimostrazione",
        front: "Come si dimostra che $\\lim_{x \\to 0} \\sin(1/x)$ non esiste?",
        back: "Con il Teorema Ponte in direzione negativa: si esibiscono due successioni ammissibili con limiti diversi. Prendendo $a_n = \\frac{1}{n\\pi}$ si ha $f(a_n) = \\sin(n\\pi) = 0 \\to 0$; prendendo $b_n = \\frac{1}{\\frac{\\pi}{2}+2n\\pi}$ si ha $f(b_n) = \\sin\\left(\\frac{\\pi}{2}+2n\\pi\\right) = 1 \\to 1$. Se il limite esistesse e valesse $L$, avremmo $L=0$ e $L=1$: assurdo."
      },
      {
        type: "dimostrazione",
        front: "Dimostra l'unicità del limite di una funzione.",
        back: "Per assurdo siano $L \\neq M$ due limiti. Essendo $x_0$ di accumulazione, costruisco $a_n \\in A$ con $0 \\lt |a_n - x_0| \\lt 1/n$: è una successione ammissibile. Per il Teorema Ponte applicato con $L$ si ha $f(a_n) \\to L$; applicato con $M$ si ha $f(a_n) \\to M$. Ma la successione reale $(f(a_n))$ ha limite unico (unicità per le successioni), quindi $L = M$: contraddizione."
      },
      {
        type: "domanda",
        front: "Quali sono le due forme della permanenza del segno e in che senso sono asimmetriche?",
        back: "<strong>I forma</strong>: se $\\lim_{x\\to x_0} f(x) = L \\gt 0$, allora esiste un intorno $V$ di $x_0$ con $f(x) \\gt 0$ per ogni $x \\in V \\cap A \\setminus \\{x_0\\}$ (si prende $\\epsilon = L/2$). <strong>II forma</strong>: se $f(x) \\ge 0$ in un intorno di $x_0$ e il limite esiste e vale $L$, allora $L \\ge 0$. L'asimmetria: nella I si parte da un'ipotesi sul <em>limite</em> e si ottiene il segno della <em>funzione</em>; nella II si parte dalla <em>funzione</em> e si ottiene il segno del <em>limite</em>, ma solo con disuguaglianza larga."
      },
      {
        type: "tranello",
        front: "Se $f(x) \\gt 0$ (strettamente) in un intorno di $x_0$, posso concludere che $\\lim_{x \\to x_0} f(x) \\gt 0$?",
        back: "No. Controesempio: $f(x) = x^2$ su $A = \\mathbb{R}\\setminus\\{0\\}$ con $x_0 = 0$: si ha $f(x) \\gt 0$ per ogni $x \\in A$, eppure $\\lim_{x\\to 0} x^2 = 0$. Il passaggio al limite conserva le disuguaglianze <strong>larghe</strong> ($\\ge$, $\\le$) ma non quelle <strong>strette</strong>: il meglio che si conclude è $L \\ge 0$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra il Teorema del Confronto per le funzioni.",
        back: "Sia $f(x) \\le g(x) \\le h(x)$ in $V \\cap A \\setminus \\{x_0\\}$ e $\\lim_{x\\to x_0} f = \\lim_{x\\to x_0} h = L$. Prendo una generica successione ammissibile $a_n \\to x_0$. Per il Ponte, $f(a_n) \\to L$ e $h(a_n) \\to L$. Poiché $a_n$ cade definitivamente in $V$, per $n \\gt n_0$ vale $f(a_n) \\le g(a_n) \\le h(a_n)$. Per il teorema dei due carabinieri per le successioni, $g(a_n) \\to L$. Essendo $(a_n)$ arbitraria, il Ponte in direzione inversa dà $\\lim_{x\\to x_0} g(x) = L$."
      },
      {
        type: "dimostrazione",
        front: "Come si dimostra geometricamente che $\\lim_{x\\to 0}\\sin x = 0$?",
        back: "Su circonferenza goniometrica, per $0 \\lt x \\lt \\frac{\\pi}{2}$ il triangolo $OAP$ (con $O$ origine, $A=(1,0)$, $P=(\\cos x, \\sin x)$) è contenuto nel settore circolare $OAP$. Quindi $\\frac{\\sin x}{2} \\le \\frac{x}{2}$, cioè $\\sin x \\le x$. Per disparità di $\\sin$ e di $x$, per $x \\in \\left(-\\frac{\\pi}{2},0\\right)$ vale $\\sin x \\ge x$. In sintesi $|\\sin x| \\le |x|$, cioè $-|x| \\le \\sin x \\le |x|$. Poiché $\\pm|x| \\to 0$, per il Teorema del Confronto $\\sin x \\to 0$."
      },
      {
        type: "formula",
        front: "Elenca le forme indeterminate viste.",
        back: "$(+\\infty)+(-\\infty)$ (equivalentemente $(+\\infty)-(+\\infty)$), $0 \\cdot (\\pm\\infty)$, $\\frac{0}{0}$, $\\frac{\\pm\\infty}{\\pm\\infty}$. In seguito si aggiungeranno le forme per le potenze: $1^\\infty$, $0^0$, $\\infty^0$. Dire che un limite è nella forma $\\frac{0}{0}$ non è un risultato: è solo la constatazione che l'algebra dei limiti non si applica."
      },
      {
        type: "tranello",
        front: "Se $\\lim f = L \\neq 0$ e $\\lim g = 0$, è vero che $\\lim \\frac{f}{g} = \\pm\\infty$?",
        back: "Non con queste sole ipotesi: serve che $g$ abbia <strong>segno definitivamente costante</strong> vicino a $x_0$, cioè $g \\to 0^+$ oppure $g \\to 0^-$. Allora il segno dell'infinito è il prodotto del segno di $L$ per il segno con cui $g$ tende a zero. Controesempio senza l'ipotesi: $f=1$, $g=x$, $x_0=0$: $\\lim_{x\\to 0^+}\\frac1x = +\\infty$ ma $\\lim_{x\\to 0^-}\\frac1x = -\\infty$, quindi il limite bilaterale non esiste."
      },
      {
        type: "formula",
        front: "Enuncia il risultato \"limitata per infinitesima\".",
        back: "Se $f$ è limitata in un intorno puntato di $x_0$ (esiste $C \\gt 0$ con $|f(x)| \\le C$) e $\\lim_{x\\to x_0} g(x) = 0$, allora $\\lim_{x\\to x_0} f(x)g(x) = 0$. Dimostrazione: $0 \\le |f(x)g(x)| \\le C|g(x)| \\to 0$ e si conclude con il Confronto. <strong>Non</strong> si richiede che $f$ abbia limite: esempio $x\\sin(1/x) \\to 0$ con $C=1$."
      },
      {
        type: "formula",
        front: "Enuncia la gerarchia degli infiniti per le funzioni.",
        back: "Per $\\alpha \\in \\mathbb{R}$, $b \\gt 1$: $\\lim_{x\\to+\\infty}\\frac{x^\\alpha}{b^x} = 0$ (esponenziale batte potenza). Per $\\alpha \\in \\mathbb{R}$, $\\beta \\gt 0$, $b \\gt 0$, $b \\ne 1$: $\\lim_{x\\to+\\infty}\\frac{|\\log_b x|^\\alpha}{x^\\beta} = 0$ (potenza batte logaritmo) e $\\lim_{x\\to 0^+} x^\\beta|\\log_b x|^\\alpha = 0$. Scala: $\\text{logaritmo} \\prec \\text{potenza} \\prec \\text{esponenziale}$."
      },
      {
        type: "domanda",
        front: "Perché nella gerarchia si scrive $|\\log_b x|^\\alpha$ con il valore assoluto?",
        back: "Perché per $0 \\lt b \\lt 1$ e $x \\gt 1$ si ha $\\log_b x \\lt 0$, e una potenza reale arbitraria di un numero negativo non è in generale definita (con $\\alpha = \\frac12$ servirebbe la radice di un numero negativo). Con il valore assoluto la base della potenza è positiva e tutto è ben definito per $x \\ne 1$. In alternativa si mantiene $(\\log_b x)^\\alpha$ restringendosi a $b \\gt 1$; le due versioni sono equivalenti perché $\\log_{1/b} x = -\\log_b x$."
      },
      {
        type: "domanda",
        front: "Calcola i limiti laterali di $\\tan x$ per $x \\to \\frac{\\pi}{2}$ e interpreta il risultato.",
        back: "Scrivo $\\tan x = \\frac{\\sin x}{\\cos x}$: il numeratore tende a $1$, il denominatore a $0$. Per $x \\to \\left(\\frac{\\pi}{2}\\right)^-$ si ha $\\cos x \\to 0^+$, quindi il limite è $\\frac{1}{0^+} = +\\infty$. Per $x \\to \\left(\\frac{\\pi}{2}\\right)^+$ si ha $\\cos x \\to 0^-$, quindi il limite è $\\frac{1}{0^-} = -\\infty$. I due limiti laterali differiscono: $\\lim_{x\\to\\pi/2}\\tan x$ non esiste e $x = \\frac{\\pi}{2}$ è asintoto verticale."
      },
      {
        type: "domanda",
        front: "Perché per calcolare $\\lim_{x\\to 0} x\\sin(1/x)$ non si può usare il teorema del prodotto dei limiti?",
        back: "Perché l'ipotesi del teorema è che <em>entrambi</em> i limiti esistano, e $\\lim_{x\\to 0}\\sin(1/x)$ non esiste (si nega con il Ponte usando $a_n = \\frac{1}{n\\pi}$ e $b_n = \\frac{1}{\\frac{\\pi}{2}+2n\\pi}$). Si usa invece il Confronto: $-|x| \\le x\\sin(1/x) \\le |x|$ con entrambi gli estremi tendenti a $0$, quindi il limite è $0$. Nota: l'esistenza del limite del prodotto non implica l'esistenza dei limiti dei fattori."
      },
      {
        type: "tranello",
        front: "Nella stima per il confronto di $x\\sin(1/x)$, posso scrivere $-x \\le x\\sin(1/x) \\le x$?",
        back: "No: questa catena è falsa per $x \\lt 0$. Occorre il valore assoluto: $-|x| \\le x\\sin\\left(\\frac{1}{x}\\right) \\le |x|$, che vale sia per $x \\gt 0$ sia per $x \\lt 0$, cioè in un intero intorno di $0$ privato dell'origine, come richiesto dal Teorema del Confronto. È l'errore tipico da evitare."
      }
    ]
};

