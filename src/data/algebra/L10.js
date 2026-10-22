const LESSON = {
    id: "L10", date: "Lezione 10 — 22 Ott 2026",
    title: "Divisione Euclidea e Numerazione in Base Arbitraria",
    abstract: "Il teorema della divisione con resto in $\\mathbb{N}$ (esistenza, con due dimostrazioni, e unicità) e la sua conseguenza più importante: ogni numero naturale ha una e una sola scrittura posizionale in una base $b \\gt 1$. Seguono l'algoritmo delle divisioni successive, le operazioni in colonna in base arbitraria e la conversione rapida tra basi che sono potenze l'una dell'altra.",

    sections: [
      {
        id: "s10-divisione-euclidea",
        type: "section",
        title: "Divisione con resto in ℕ",
        icon: "📐",
        content: `<p>La divisione con resto — nota anche come <strong>algoritmo di divisione euclidea</strong> — è il mattone su cui poggia tutta la lezione: da essa discendono sia il concetto di divisibilità, sia l'esistenza e l'unicità della scrittura posizionale in una base qualsiasi.</p>`,
        subsections: [
          {
            subtitle: "Teorema (divisione euclidea)",
            content: `<p>Siano $n \\in \\mathbb{N}$ e $b \\in \\mathbb{N}_{+}$. Allora <strong>esistono e sono unici</strong> $q, r \\in \\mathbb{N}$ tali che</p>
<p>$$n = bq + r \\qquad \\text{e} \\qquad 0 \\le r \\le b-1.$$</p>
<p>Due condizioni, non una: l'uguaglianza $n = bq+r$ da sola non basta (potrei prendere $q=0$ e $r=n$ sempre). È il vincolo $0 \\le r \\le b-1$ a rendere la coppia $(q,r)$ unica.</p>`
          },
          {
            subtitle: "Definizione (resto, divisibilità)",
            content: `<p>Il numero $r$ si dice il <strong>resto</strong> della divisione di $n$ per $b$. Se $r = 0$, si dice che $b$ <strong>divide</strong> $n$ e si scrive $b \\mid n$.</p>`
          }
        ],
        formulas: [
          { label: "Divisione euclidea", latex: "n = bq + r, \\qquad 0 \\le r \\le b-1" },
          { label: "Divisibilità", latex: "b \\mid n \\iff r = 0" }
        ]
      },

      {
        id: "s10-unicita",
        type: "section",
        title: "Dimostrazione — a) Unicità di quoziente e resto",
        icon: "🔒",
        content: `<p>Supponiamo per assurdo che esistano due coppie distinte $(q,r)$ e $(q',r')$ che soddisfano le condizioni del teorema:</p>
<p>$$n = bq + r,\\quad 0 \\le r \\le b-1, \\qquad n = bq' + r',\\quad 0 \\le r' \\le b-1.$$</p>
<p>Senza perdita di generalità assumiamo $r' \\le r$ (altrimenti basta scambiare i nomi delle due coppie).</p>
<p>Uguagliando le due espressioni per $n$:</p>
<p>$$bq' + r' = bq + r \\qquad \\Longrightarrow \\qquad b(q' - q) = r - r'.$$</p>
<p>Poiché $0 \\le r' \\le r \\le b-1$, si ha $0 \\le r - r' \\lt b$. Ma l'uguaglianza appena scritta dice che $r - r'$ è un <strong>multiplo di $b$</strong>, e l'unico multiplo di $b$ nell'insieme $\\{0, 1, \\dots, b-1\\}$ è $0$. Dunque</p>
<p>$$r - r' = 0 \\qquad \\Longrightarrow \\qquad r = r'.$$</p>
<p>Sostituendo nell'equazione $b(q'-q) = r-r'$ otteniamo $b(q'-q) = 0$; poiché $b \\in \\mathbb{N}_{+}$ si ha $b \\ne 0$, e quindi $q' - q = 0$, cioè $q' = q$.</p>
<p>Le due coppie coincidono, contro l'ipotesi che fossero distinte: la scrittura $n = bq+r$ con $0 \\le r \\le b-1$ è dunque <strong>unica</strong>. $\\blacksquare$</p>`
      },

      {
        id: "s10-esistenza",
        type: "section",
        title: "Dimostrazione — b) Esistenza (due metodi)",
        icon: "🪜",
        content: `<p>Dell'esistenza vediamo <strong>due dimostrazioni indipendenti</strong>: una per induzione su $n$, l'altra tramite il principio del minimo. Entrambe usano in modo essenziale l'ipotesi $b \\ge 1$.</p>`,
        subsections: [
          {
            subtitle: "Metodo 1 — Induzione sul numero n",
            content: `<p>Fissiamo $b \\in \\mathbb{N}_{+}$ e dimostriamo per induzione su $n \\in \\mathbb{N}$ che esistono $q,r$ con $n = bq+r$ e $0 \\le r \\le b-1$.</p>
<p><strong>Base dell'induzione.</strong> Per $n = 0$ scegliamo $q = 0$ e $r = 0$: infatti $0 = b\\cdot 0 + 0$, e la condizione $0 \\le 0 \\le b-1$ è soddisfatta perché $b \\ge 1$.</p>
<p><strong>Ipotesi induttiva.</strong> Supponiamo la tesi vera per un certo $n$: esistono $q, r \\in \\mathbb{N}$ con $n = bq + r$ e $0 \\le r \\le b-1$.</p>
<p><strong>Passo induttivo.</strong> Dimostriamo la tesi per $n+1$. Dall'ipotesi induttiva:</p>
<p>$$n+1 = (bq+r)+1 = bq + (r+1).$$</p>
<p>Poniamo $q' = q$, $r' = r+1$ e verifichiamo se $0 \\le r' \\le b-1$. Due casi:</p>
<p><strong>Caso 1: $r \\lt b-1$.</strong> Allora $r+1 \\le b-1$ e, poiché $r \\ge 0 \\Rightarrow r+1 \\ge 1 \\ge 0$, la coppia $q' = q$, $r' = r+1$ va bene:</p>
<p>$$n+1 = bq + (r+1).$$</p>
<p><strong>Caso 2: $r = b-1$.</strong> Allora $r+1 = b$ e l'espressione si riassorbe nel quoziente:</p>
<p>$$n+1 = bq + (b-1) + 1 = bq + b = b(q+1) + 0,$$</p>
<p>quindi si prende $q' = q+1$ e $r' = 0$, e la condizione $0 \\le 0 \\le b-1$ è soddisfatta.</p>
<p>In entrambi i casi abbiamo trovato una coppia $(q',r')$ buona per $n+1$. Per il principio di induzione la tesi vale per ogni $n \\in \\mathbb{N}$.</p>`
          },
          {
            subtitle: "Metodo 2 — Principio del minimo (buon ordinamento)",
            content: `<p>L'idea è che <strong>il resto è il più piccolo valore non negativo che si ottiene sottraendo da $n$ multipli di $b$</strong>. Consideriamo</p>
<p>$$T = \\{\\, n - bq \\;\\mid\\; q \\in \\mathbb{N},\\ n - bq \\ge 0 \\,\\} \\subseteq \\mathbb{N}.$$</p>
<p><strong>$T$ non è vuoto:</strong> prendendo $q = 0$ si ottiene $n - b\\cdot 0 = n$, e $n \\ge 0$, dunque $n \\in T$.</p>
<p>Essendo $T$ un sottoinsieme non vuoto di $\\mathbb{N}$, per il <strong>principio del minimo</strong> esso ammette un elemento minimo; chiamiamolo $r$. Per definizione di $T$ esiste $q \\in \\mathbb{N}$ con $r = n - bq$ e $r \\ge 0$, da cui</p>
<p>$$n = bq + r.$$</p>
<p>Resta da mostrare che $r \\le b-1$, cioè $r \\lt b$. Procediamo per assurdo supponendo $r \\ge b$ e poniamo $r' = r - b$. Da $r \\ge b$ segue $r' \\ge 0$; inoltre</p>
<p>$$r' = (n - bq) - b = n - b(q+1),$$</p>
<p>cioè $r'$ ha la forma richiesta con $q' = q+1 \\in \\mathbb{N}$, dunque $r' \\in T$. Ma $b \\gt 0$ implica $r' = r - b \\lt r$: abbiamo trovato in $T$ un elemento più piccolo del minimo, assurdo.</p>
<p>Quindi $r \\lt b$, cioè $0 \\le r \\le b-1$: esistenza dimostrata. $\\blacksquare$</p>`
          }
        ]
      },

      {
        id: "s10-base-arbitraria",
        type: "section",
        title: "Numerazione in base arbitraria",
        icon: "🔢",
        content: `<p>Il sistema decimale a cui siamo abituati è solo un caso particolare di <strong>scrittura posizionale</strong>: la posizione di una cifra ne determina il peso.</p>`,
        subsections: [
          {
            subtitle: "Osservazione — la base 10",
            content: `<p>Scrivendo $n = 35071$ intendiamo la somma delle cifre pesate con le potenze di $10$:</p>
<p>$$n = 3\\cdot 10^4 + 5\\cdot 10^3 + 0\\cdot 10^2 + 7\\cdot 10^1 + 1\\cdot 10^0.$$</p>
<p>In generale, $n = c_k c_{k-1}\\dots c_1 c_0$ in base $10$, con cifre $c_i \\in \\{0,1,\\dots,9\\}$, rappresenta</p>
<p>$$n = \\sum_{s=0}^{k} c_s \\cdot 10^{s}.$$</p>`
          },
          {
            subtitle: "Osservazione — generalizzazione a una base qualsiasi",
            content: `<p>L'idea si estende immediatamente:</p>
<ul>
<li>si sceglie una <strong>base</strong> $b \\in \\mathbb{N}$, $b \\gt 1$, arbitraria;</li>
<li>si scelgono $b$ simboli diversi, le <strong>cifre</strong>, che indicano i numeri da $0$ a $b-1$.</li>
</ul>
<p>Allora ogni numero naturale $n$ si può scrivere come</p>
<p>$$n = \\sum_{s=0}^{k} c_s \\cdot b^{s},$$</p>
<p>dove le cifre $c_s$ rappresentano valori in $\\{0,1,\\dots,b-1\\}$.</p>`
          },
          {
            subtitle: "Definizione (scrittura posizionale)",
            content: `<p>Per ogni $b \\in \\mathbb{N}$ con $b \\gt 1$, la scrittura</p>
<p>$$n = [\\,c_k c_{k-1}\\dots c_1 c_0\\,]_b$$</p>
<p>— oppure semplicemente $n = c_k c_{k-1}\\dots c_1 c_0$ se la base è sottintesa — si dice <strong>scrittura posizionale</strong> di $n$ in base $b$.</p>`
          }
        ],
        formulas: [
          { label: "Valore di una scrittura posizionale", latex: "n = \\sum_{s=0}^{k} c_s\\, b^{s}, \\qquad c_s \\in \\{0,1,\\dots,b-1\\}" }
        ]
      },

      {
        id: "s10-teorema-posizionale",
        type: "section",
        title: "Teorema di esistenza e unicità della scrittura posizionale",
        icon: "🏛️",
        content: `<p>Sia $b \\in \\mathbb{N}$, $b \\gt 1$. Allora <strong>esiste ed è unica</strong> la scrittura posizionale di ogni $n \\in \\mathbb{N}$: esistono unici $k \\in \\mathbb{N}$ e cifre $c_0, c_1, \\dots, c_k \\in \\{0,1,\\dots,b-1\\}$ tali che</p>
<p>$$n = \\sum_{s=0}^{k} c_s\\, b^{s} \\qquad \\text{con} \\qquad \\begin{cases} c_k \\ne 0 & \\text{se } n \\ne 0,\\\\[2pt] c_0 = 0,\\ k = 0 & \\text{se } n = 0.\\end{cases}$$</p>
<p>Le due clausole servono a eliminare gli <strong>zeri iniziali</strong>: senza di esse la stessa quantità avrebbe infinite scritture.</p>`
      },

      {
        id: "s10-dim-posizionale",
        type: "section",
        title: "Dimostrazione — l'algoritmo delle divisioni successive",
        icon: "⚙️",
        content: `<p>Presentiamo un metodo operativo che dimostra l'esistenza e fornisce al tempo stesso un <strong>algoritmo</strong> per trovare le cifre $c_0, c_1, \\dots, c_k$; l'unicità verrà poi dedotta dall'unicità della divisione euclidea.</p>`,
        subsections: [
          {
            subtitle: "Caso n = 0",
            content: `<p>Il numero zero va trattato a parte, perché è l'unico caso in cui si ammette la cifra iniziale nulla. Per $n=0$ si prende $k=0$ e $c_0 = 0$: infatti $0 = 0\\cdot b^{0}$, come richiesto dall'enunciato.</p>`
          },
          {
            subtitle: "Algoritmo di conversione (esistenza per n > 0)",
            content: `<p>Sia $n \\gt 0$. Applichiamo ripetutamente la divisione euclidea con divisore $b$. Per avere una notazione uniforme fin dal primo passo poniamo</p>
<p>$$q_{-1} := n,$$</p>
<p>e definiamo ricorsivamente, per $i = 0,1,2,\\dots$,</p>
<p>$$q_{i-1} = b\\,q_i + r_i, \\qquad 0 \\le r_i \\le b-1,$$</p>
<p>dove $q_i$ e $r_i$ sono quoziente e resto della divisione di $q_{i-1}$ per $b$ (esistono e sono unici per il teorema della divisione euclidea). Esplicitamente i primi passi sono</p>
<p>$$n = b\\,q_0 + r_0, \\qquad q_0 = b\\,q_1 + r_1, \\qquad q_1 = b\\,q_2 + r_2, \\qquad \\dots$$</p>`
          },
          {
            subtitle: "L'algoritmo termina",
            content: `<p><strong>Finché</strong> $q_{i-1} \\gt 0$ vale</p>
<p>$$q_i = \\frac{q_{i-1} - r_i}{b} \\le \\frac{q_{i-1}}{b} \\lt q_{i-1},$$</p>
<p>dove l'ultima disuguaglianza stretta usa $b \\ge 2$ e $q_{i-1} \\gt 0$. Dunque la successione $q_{-1}, q_0, q_1, \\dots$ è strettamente decrescente <em>fino al primo termine nullo</em>: non si può affermare che sia decrescente oltre quel punto, perché da lì in poi tutti i quozienti restano uguali a $0$. Poiché una successione strettamente decrescente di numeri naturali non può essere infinita, <strong>esiste un primo indice $k \\ge 0$ con $q_k = 0$</strong>.</p>
<p>Per la minimalità di $k$ si ha $q_{k-1} \\gt 0$: se $k \\ge 1$ ciò segue dal fatto che $q_{k-1}$ non è il primo quoziente nullo; se $k = 0$ si ha $q_{-1} = n \\gt 0$ per ipotesi. In particolare l'ultima divisione effettuata è</p>
<p>$$q_{k-1} = b\\cdot 0 + r_k, \\qquad \\text{cioè} \\qquad r_k = q_{k-1} \\gt 0,$$</p>
<p>e questo garantisce che la <strong>cifra più significativa non sia nulla</strong>. La formulazione copre anche i numeri con poche cifre: per $0 \\lt n \\lt b$ si ha già $k = 0$, $r_0 = n$, e nessun indice negativo viene mai usato come cifra.</p>`
          },
          {
            subtitle: "Sostituzione a ritroso",
            content: `<p>Dimostriamo per induzione discendente su $j = k, k-1, \\dots, 0$ che</p>
<p>$$q_{j-1} = \\sum_{s=j}^{k} r_s\\, b^{\\,s-j}.$$</p>
<p>Per $j = k$ l'uguaglianza è esattamente $q_{k-1} = r_k$, già verificata sopra. Se la formula vale per $j+1$, allora</p>
<p>$$q_{j-1} = b\\,q_j + r_j = b\\sum_{s=j+1}^{k} r_s\\, b^{\\,s-j-1} + r_j = \\sum_{s=j+1}^{k} r_s\\, b^{\\,s-j} + r_j = \\sum_{s=j}^{k} r_s\\, b^{\\,s-j}.$$</p>
<p>Per $j = 0$, ricordando che $q_{-1} = n$, otteniamo</p>
<p>$$n = \\sum_{s=0}^{k} r_s\\, b^{s}.$$</p>
<p>I resti $r_0, r_1, \\dots, r_k$ sono dunque le cifre cercate, cioè $c_s = r_s$: per costruzione ogni $r_s$ è compreso tra $0$ e $b-1$, e $r_k \\ne 0$. Quindi</p>
<p>$$n = [\\,r_k r_{k-1}\\dots r_1 r_0\\,]_b.$$</p>
<p>Lo stesso ragionamento, letto al contrario, spiega la regola pratica: <strong>i resti si leggono dall'ultimo al primo</strong>.</p>`
          },
          {
            subtitle: "Unicità",
            content: `<p>L'algoritmo produce, dati $n$ e $b$, un risultato determinato, perché a ogni passo quoziente e resto della divisione per $b$ sono unici. Questo però non basta: dobbiamo mostrare che <strong>qualunque</strong> scrittura posizionale di $n$ coincide con quella prodotta dall'algoritmo.</p>
<p>Sia $n \\gt 0$ e sia</p>
<p>$$n = \\sum_{s=0}^{k} c_s\\, b^{s}, \\qquad 0 \\le c_s \\le b-1, \\qquad c_k \\ne 0,$$</p>
<p>una scrittura qualsiasi con le proprietà dell'enunciato. Raccogliamo $b$ in tutti i termini tranne quello di indice $0$:</p>
<p>$$n = b\\sum_{s=1}^{k} c_s\\, b^{\\,s-1} + c_0,$$</p>
<p>dove <strong>per $k = 0$ la sommatoria è vuota e vale $0$</strong>, cosicché la formula si riduce correttamente a $n = b\\cdot 0 + c_0 = c_0$ (coerente con $0 \\lt n \\lt b$).</p>
<p>Poiché $0 \\le c_0 \\le b-1$, questa è una divisione euclidea di $n$ per $b$; per l'unicità di quoziente e resto si ha necessariamente</p>
<p>$$c_0 = r_0 \\qquad \\text{e} \\qquad \\sum_{s=1}^{k} c_s\\, b^{\\,s-1} = q_0.$$</p>
<p>Il quoziente è identificato, e il suo sviluppo è a sua volta una scrittura posizionale di $q_0$. Ripetendo il ragionamento si ottiene, per <strong>ogni indice $j$ con $0 \\le j \\le k$</strong>,</p>
<p>$$c_j = r_j \\qquad \\text{e} \\qquad q_j = \\sum_{s=j+1}^{k} c_s\\, b^{\\,s-j-1}.$$</p>
<p>Il confronto si ferma a $s = k$: non si estende a indici oltre $k$, perché lì le cifre non sono definite. Che il procedimento arrivi davvero fino a $j = k$ è garantito dal fatto che, per $j \\lt k$, il quoziente $q_j$ contiene ancora il termine $c_k b^{\\,k-j-1} \\ge 1$, dunque $q_j \\gt 0$ e l'algoritmo non si è ancora fermato.</p>
<p>Resta il numero di cifre. Dalle formule appena ottenute, $q_{k-1} = c_k \\ne 0$ e $q_k = 0$ (somma vuota): dunque $k$ è proprio il <strong>primo</strong> indice con quoziente nullo, cioè lo stesso $k$ determinato dall'algoritmo. $\\blacksquare$</p>`
          }
        ],
        formulas: [
          { label: "Passo dell'algoritmo", latex: "q_{i-1} = b\\,q_i + r_i, \\qquad 0 \\le r_i \\le b-1, \\qquad q_{-1} = n" },
          { label: "Lettura delle cifre", latex: "n = [\\,r_k r_{k-1}\\dots r_1 r_0\\,]_b" }
        ]
      },

      {
        id: "s10-alert-zeri",
        type: "alert_box",
        title: "Trappola — la condizione cₖ ≠ 0 non è un dettaglio estetico",
        icon: "⚠️",
        content: `<p>È proprio l'esclusione degli zeri iniziali a far funzionare l'unicità. Senza la condizione $c_k \\ne 0$ si potrebbero premettere arbitrariamente cifre nulle, perché $0 \\cdot b^{s} = 0$, e si avrebbero infinite scritture dello stesso numero:</p>
<p>$$[13]_{10} = [013]_{10} = [0013]_{10} = \\dots$$</p>
<p>In quel caso cadrebbe in particolare l'unicità di $k$, cioè del numero di cifre. Per $n = 0$ lo stesso ruolo è svolto dalla convenzione $k = 0$, $c_0 = 0$.</p>`
      },

      {
        id: "s10-ex-8-6",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Esercizio 8.6 (conversioni di base)",
        icon: "✎",
        source: "docente",
        content: `<p><strong>1.</strong> Convertire in base $10$ i seguenti numeri: a) $[7204]_8$; b) $[3241]_5$; c) $[4315]_6$.</p>
<p><strong>2.</strong> Scrivere $[798]_{10}$ in base: a) $b = 5$; b) $b = 6$; c) $b = 8$.</p>
<p>I punti 1a), 1b) e 2a) sono svolti qui di seguito; i punti 1c), 2b) e 2c) sono <em>proposti per il lavoro autonomo</em>, con i risultati di controllo riportati in fondo.</p>`,
        steps: [
          `<p><strong>1a) $[7204]_8$ in base 10.</strong> Si applica direttamente la definizione di scrittura posizionale:</p>
<p>$$[7204]_8 = 7\\cdot 8^3 + 2\\cdot 8^2 + 0\\cdot 8^1 + 4\\cdot 8^0 = 7\\cdot 512 + 2\\cdot 64 + 0 + 4 = 3584 + 128 + 4 = [3716]_{10}.$$</p>`,
          `<p><strong>1b) $[3241]_5$ in base 10.</strong></p>
<p>$$[3241]_5 = 3\\cdot 5^3 + 2\\cdot 5^2 + 4\\cdot 5^1 + 1\\cdot 5^0 = 375 + 50 + 20 + 1 = [446]_{10}.$$</p>`,
          `<p><strong>1c)</strong> Proposto per il lavoro autonomo: stesso schema dei punti precedenti, con le potenze di $6$.</p>`,
          `<p><strong>2a) $[798]_{10}$ in base 5.</strong> Si usa l'algoritmo delle divisioni successive:</p>
<p>$$\\begin{aligned}
798 \\div 5 &= 159 \\ \\text{con resto } 3 &&(c_0 = 3)\\\\
159 \\div 5 &= 31 \\ \\text{con resto } 4 &&(c_1 = 4)\\\\
31 \\div 5 &= 6 \\ \\text{con resto } 1 &&(c_2 = 1)\\\\
6 \\div 5 &= 1 \\ \\text{con resto } 1 &&(c_3 = 1)\\\\
1 \\div 5 &= 0 \\ \\text{con resto } 1 &&(c_4 = 1)
\\end{aligned}$$</p>
<p>Il primo quoziente nullo compare all'ultimo passo, quindi $k = 4$. Leggendo i resti <strong>dal basso verso l'alto</strong>:</p>
<p>$$[798]_{10} = [11143]_5.$$</p>`,
          `<p><strong>2b), 2c)</strong> Proposti per il lavoro autonomo: stesso algoritmo delle divisioni successive, con $b = 6$ e $b = 8$.</p>`,
          `<p><strong>Risultati di controllo dei punti proposti.</strong></p>
<p>$$[4315]_6 = [983]_{10}, \\qquad [798]_{10} = [3410]_6, \\qquad [798]_{10} = [1436]_8.$$</p>
<p>Ogni risultato si verifica riconvertendo in base 10:</p>
<p>$$[3410]_6 = 3\\cdot 216 + 4\\cdot 36 + 1\\cdot 6 + 0 = 648 + 144 + 6 = 798,$$</p>
<p>$$[1436]_8 = 512 + 4\\cdot 64 + 3\\cdot 8 + 6 = 798.$$</p>`
        ]
      },

      {
        id: "s10-ex-8-7",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Esercizio 8.7 (trovare la base)",
        icon: "✎",
        source: "docente",
        content: `<p>Trovare, se esiste, una base $b \\gt 5$ tale che $[303]_8 = [523]_b$.</p>`,
        steps: [
          `<p><strong>Passaggio a un terreno comune.</strong> Convertiamo entrambi i numeri in base 10:</p>
<p>$$\\begin{aligned}
[303]_8 &= 3\\cdot 8^2 + 0\\cdot 8^1 + 3\\cdot 8^0 = 192 + 3 = 195,\\\\
[523]_b &= 5b^2 + 2b + 3.
\\end{aligned}$$</p>`,
          `<p><strong>Equazione.</strong> Uguagliando le due espressioni:</p>
<p>$$5b^2 + 2b + 3 = 195 \\qquad \\Rightarrow \\qquad 5b^2 + 2b - 192 = 0.$$</p>`,
          `<p><strong>Risoluzione.</strong></p>
<p>$$b = \\frac{-2 \\pm \\sqrt{4 - 4\\cdot 5\\cdot(-192)}}{10} = \\frac{-2 \\pm \\sqrt{4 + 3840}}{10} = \\frac{-2 \\pm \\sqrt{3844}}{10} = \\frac{-2 \\pm 62}{10}.$$</p>
<p>Le due soluzioni sono $b_1 = \\frac{60}{10} = 6$ e $b_2 = \\frac{-64}{10} = -6{,}4$.</p>`,
          `<p><strong>Scelta della soluzione ammissibile.</strong> La base deve essere un intero maggiore di $1$ e, affinché la cifra $5$ sia lecita, deve valere $b \\ge 6$. L'unica soluzione accettabile è $b = 6$, che soddisfa anche la richiesta $b \\gt 5$. Dunque</p>
<p>$$[303]_8 = [523]_6.$$</p>`
        ]
      },

      {
        id: "s10-ex-8-8",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Esercizio 8.8 (operazioni in base 3)",
        icon: "✎",
        source: "docente",
        content: `<p>Scrivere le tavole di Cayley per somma e prodotto in base $b = 3$ e calcolare: a) $[12]_3 + [21]_3$; b) $[210]_3 - [12]_3$; c) $[12]_3 \\cdot [102]_3$.</p>
<p>Le cifre in base 3 sono $\\{0,1,2\\}$. Le tabelle seguenti raccolgono i risultati delle <strong>operazioni elementari tra cifre, scritti in base 3</strong>.</p>
<p>$$\\begin{array}{c|ccc}
+ & 0 & 1 & 2\\\\ \\hline
0 & 0 & 1 & 2\\\\
1 & 1 & 2 & 10\\\\
2 & 2 & 10 & 11
\\end{array}
\\qquad\\qquad
\\begin{array}{c|ccc}
\\cdot & 0 & 1 & 2\\\\ \\hline
0 & 0 & 0 & 0\\\\
1 & 0 & 1 & 2\\\\
2 & 0 & 2 & 11
\\end{array}$$</p>`,
        steps: [
          `<p><strong>a) Somma $[12]_3 + [21]_3$.</strong> In colonna, con i riporti scritti sopra la colonna a cui entrano:</p>
<p>$$\\begin{array}{cccc}
 & 1 & 1 & \\\\
 &   & 1 & 2\\\\
+ &  & 2 & 1\\\\ \\hline
 & 1 & 1 & 0
\\end{array}$$</p>
<p>Calcolo da destra: $2+1 = 3 = [10]_3$, scrivo $0$ e riporto $1$; poi $1 + 2 + 1_{(\\text{riporto})} = 4 = [11]_3$, scrivo $1$ e riporto $1$; infine scrivo l'ultimo riporto $1$. Risultato: $[110]_3$.</p>`,
          `<p><strong>b) Sottrazione $[210]_3 - [12]_3$.</strong></p>
<p>$$\\begin{array}{cccc}
 & 2 & 1 & 0\\\\
- &   & 1 & 2\\\\ \\hline
 & 1 & 2 & 1
\\end{array}$$</p>
<p>Calcolo da destra: $0 - 2$ non si può, chiedo un prestito e diventa $(0+3) - 2 = 1$. La cifra a sinistra diventa $1 - 1 = 0$, ma deve ancora sottrarre $1$: chiede a sua volta un prestito e diventa $(0+3) - 1 = 2$. La cifra più a sinistra diventa $2 - 1 = 1$. Risultato: $[121]_3$.</p>`,
          `<p><strong>c) Moltiplicazione $[12]_3 \\cdot [102]_3$.</strong></p>
<p>$$\\begin{array}{ccccc}
 &  & 1 & 0 & 2\\\\
\\times &  &  & 1 & 2\\\\ \\hline
 &  & 2 & 1 & 1\\\\
+ & 1 & 0 & 2 & 0\\\\ \\hline
 & 2 & 0 & 0 & 1
\\end{array}$$</p>
<p>La prima riga è $[102]_3 \\cdot 2$, la seconda è $[102]_3 \\cdot [10]_3$ (cioè il prodotto per la cifra $1$, traslato di una posizione).</p>`,
          `<p><strong>Verifica in base 10.</strong> $[12]_3 = 1\\cdot 3 + 2 = 5$ e $[102]_3 = 9 + 0 + 2 = 11$, quindi $5 \\cdot 11 = 55$. D'altra parte</p>
<p>$$[2001]_3 = 2\\cdot 27 + 0 + 0 + 1 = 54 + 1 = 55.$$</p>
<p>Il risultato è corretto.</p>`
        ]
      },

      {
        id: "s10-nota-tabelle",
        type: "note_box",
        title: "Nota — che cosa contengono (e che cosa non contengono) quelle tabelle",
        icon: "📝",
        content: `<p>Attenzione a non confondere due oggetti diversi. Le tabelle appena scritte sono le <strong>tabelle delle operazioni elementari in base 3</strong>: le caselle contengono i risultati aritmetici veri (ad esempio $2+2 = 4$, $2\\cdot 2 = 4$) semplicemente <em>rappresentati in base 3</em>, e perciò possono richiedere <strong>due cifre</strong>: $10$ e $11$.</p>
<p>Di conseguenza <strong>non</strong> descrivono operazioni interne sull'insieme delle cifre $\\{0,1,2\\}$ e <strong>non</strong> sono le tavole di somma e prodotto modulo $3$: lì si avrebbe $2+2 = 1$ e $2\\cdot 2 = 1$. Qui le due cifre eccedenti sono proprio ciò che genera il <strong>riporto</strong> nel calcolo in colonna.</p>`
      },

      {
        id: "s10-ex-8-10",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Esercizio 8.10 (quanti numeri con N cifre)",
        icon: "✎",
        source: "docente",
        content: `<p>Dimostrare che i numeri scrivibili in base $b$ con al più $N$ cifre sono tutti e soli quelli da $0$ a $b^N - 1$.</p>
<p>Fissiamo $b \\ge 2$ e $N \\ge 1$. L'affermazione richiede <strong>due</strong> verifiche: che nessun numero rappresentabile superi $b^N - 1$, e che <em>tutti</em> i numeri dell'intervallo $\\{0,1,\\dots,b^N-1\\}$ siano effettivamente rappresentabili, cioè che non vi siano lacune tra gli estremi.</p>`,
        steps: [
          `<p><strong>1) L'estremo superiore è $b^N - 1$.</strong> Il più piccolo numero scrivibile con $N$ cifre (o meno) è $0$. Il più grande è quello con tutte le cifre uguali al valore massimo $b-1$. Posto $\\beta = b-1$, il numero è $[\\beta\\beta\\dots\\beta]_b$ ($N$ volte) e vale</p>
<p>$$\\sum_{s=0}^{N-1} \\beta\\, b^{s} = (b-1)\\sum_{s=0}^{N-1} b^{s}.$$</p>`,
          `<p>La sommatoria è una progressione geometrica, la cui somma è $\\dfrac{b^N - 1}{b-1}$ (qui si usa $b \\ne 1$). Sostituendo:</p>
<p>$$(b-1)\\cdot \\frac{b^N - 1}{b-1} = b^N - 1.$$</p>
<p>Quindi ogni numero con al più $N$ cifre è $\\le b^N - 1$.</p>`,
          `<p><strong>2) Non ci sono lacune.</strong> Il calcolo del minimo e del massimo da solo non garantisce che ogni valore intermedio sia rappresentabile: serve il teorema di rappresentazione.</p>
<p>Sia $n$ intero con $0 \\le n \\le b^N - 1$. Se $n = 0$, esso è rappresentato con una sola cifra, $[0]_b$, dunque con al più $N$ cifre (essendo $N \\ge 1$).</p>`,
          `<p>Se invece $0 \\lt n \\lt b^N$, per il teorema di rappresentazione esistono $k$ e cifre $c_0,\\dots,c_k \\in \\{0,\\dots,b-1\\}$ con $c_k \\ne 0$ tali che $n = \\sum_{s=0}^{k} c_s b^{s}$: il numero di cifre di $n$ è $k+1$. Supponiamo per assurdo che $n$ richieda almeno $N+1$ cifre, cioè $k \\ge N$. Allora, poiché tutti gli addendi sono non negativi e $c_k \\ge 1$,</p>
<p>$$n \\ge c_k\\, b^{k} \\ge b^{k} \\ge b^{N},$$</p>
<p>in contraddizione con $n \\lt b^N$. Dunque $k \\le N-1$, cioè $n$ si scrive con al più $N$ cifre (eventualmente completate a sinistra con zeri).</p>`,
          `<p><strong>Conclusione.</strong> Mettendo insieme i due punti: i numeri scrivibili in base $b$ con al più $N$ cifre sono esattamente gli interi dell'intervallo $\\{0,1,\\dots,b^N-1\\}$, che sono in tutto $b^N$.</p>`
        ]
      },

      {
        id: "s10-ex-8-11",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Esempio 8.11 (conversione rapida tra basi potenza)",
        icon: "⚡",
        source: "docente",
        content: `<p>La conversione tra una base $b$ e una base $b^k$ è particolarmente semplice. Vediamo il caso tra base $2$ e base $8$ (perché $8 = 2^3$).</p>
<p>Per passare da base 2 a base 8 si raggruppano le cifre binarie a gruppi di $3$ (partendo da destra) e si converte ogni gruppo nella corrispondente cifra ottale:</p>
<p>$$n = [\\dots c_5 c_4 c_3 \\mid c_2 c_1 c_0]_2 = [\\dots \\mid k_1 \\mid k_0]_8,$$</p>
<p>dove $[k_0]_8 = [c_2 c_1 c_0]_2$ e $[k_1]_8 = [c_5 c_4 c_3]_2$.</p>`,
        steps: [
          `<p><strong>Perché il raggruppamento conserva il valore.</strong> La regola non è una convenzione, ma segue da un semplice raccoglimento. Isoliamo nello sviluppo binario i tre termini di indici $3j$, $3j+1$, $3j+2$ e raccogliamo $2^{3j} = 8^{\\,j}$:</p>
<p>$$c_{3j+2}\\,2^{3j+2} + c_{3j+1}\\,2^{3j+1} + c_{3j}\\,2^{3j} = \\bigl(4c_{3j+2} + 2c_{3j+1} + c_{3j}\\bigr)\\,8^{\\,j}.$$</p>
<p>Il coefficiente tra parentesi è un intero compreso tra $0$ e $7$ (perché $4\\cdot 1 + 2\\cdot 1 + 1 = 7$): è dunque esattamente una cifra ottale, e precisamente il valore del gruppo binario $c_{3j+2}c_{3j+1}c_{3j}$. Sommando su $j$ si ottiene lo sviluppo di $n$ in potenze di $8$. Il gruppo di indice $j=0$, cioè quello più a destra, fornisce la cifra ottale più a destra; il gruppo $j=1$ la successiva, e così via.</p>`,
          `<p><strong>Esempio: $n = [11010111011]_2$ in base 8.</strong> Raggruppiamo a 3 partendo da destra:</p>
<p>$$[11 \\mid 010 \\mid 111 \\mid 011]_2$$</p>
<p>e aggiungiamo uno zero a sinistra per completare il primo gruppo: $[011 \\mid 010 \\mid 111 \\mid 011]_2$.</p>`,
          `<p>Convertiamo ogni gruppo <strong>mantenendo l'ordine di scrittura</strong> (raggruppare partendo da destra serve solo ad allineare i gruppi alle potenze di $8$, e non significa affatto invertirne l'ordine):</p>
<p>$$\\begin{array}{cccc}
011 & 010 & 111 & 011\\\\
\\downarrow & \\downarrow & \\downarrow & \\downarrow\\\\
3 & 2 & 7 & 3
\\end{array}$$</p>
<p>dove $[011]_2 = 0\\cdot 4 + 1\\cdot 2 + 1 = 3$, $[010]_2 = 2$, $[111]_2 = 4+2+1 = 7$, $[011]_2 = 3$. Quindi $[11010111011]_2 = [3273]_8$.</p>`,
          `<p><strong>Verso opposto: da base 8 a base 2.</strong> Si converte ogni cifra ottale nel suo gruppo di $3$ cifre binarie, sempre nello stesso ordine. Ad esempio, per $n = [73051406]_8$:</p>
<p>$$\\begin{array}{cccccccc}
7 & 3 & 0 & 5 & 1 & 4 & 0 & 6\\\\
\\downarrow & \\downarrow & \\downarrow & \\downarrow & \\downarrow & \\downarrow & \\downarrow & \\downarrow\\\\
111 & 011 & 000 & 101 & 001 & 100 & 000 & 110
\\end{array}$$</p>
<p>Quindi $[73051406]_8 = [111011000101001100000110]_2$.</p>`
        ]
      },

      {
        id: "s10-ex-8-12",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Esercizio 8.12 (somma in base 12)",
        icon: "✎",
        source: "docente",
        content: `<p>Usando le dodici cifre $0, 1, \\dots, 9, A, B$ (dove $A = 10$ e $B = 11$), calcolare in base 12:</p>
<p>$$[9A7BA302A]_{12} + [3B254ABB1]_{12}.$$</p>`,
        steps: [
          `<p><strong>Impostazione in colonna.</strong> Ogni riporto si ottiene dividendo per $12$. Nella riga superiore i riporti sono allineati <strong>sopra la colonna in cui entrano</strong>; il riporto finale è quello più a sinistra, che diventa la cifra iniziale del risultato.</p>
<p>$$\\begin{array}{ccccccccccc}
 & 1 & 1 &   & 1 & 1 & 1 & 1 & 1 &   &  \\\\
 &   & 9 & A & 7 & B & A & 3 & 0 & 2 & A\\\\
+ &   & 3 & B & 2 & 5 & 4 & A & B & B & 1\\\\ \\hline
 & 1 & 1 & 9 & A & 5 & 3 & 2 & 0 & 1 & B
\\end{array}$$</p>`,
          `<p><strong>Dettaglio delle colonne, da destra verso sinistra.</strong></p>
<ul>
<li>$A + 1 = 10 + 1 = 11 = B_{12}$. Scrivo $B$, nessun riporto.</li>
<li>$2 + B = 13 = 1\\cdot 12 + 1$. Scrivo $1$, riporto $1$.</li>
<li>$0 + B + 1 = 12 = 1\\cdot 12 + 0$. Scrivo $0$, riporto $1$.</li>
<li>$3 + A + 1 = 14 = 1\\cdot 12 + 2$. Scrivo $2$, riporto $1$.</li>
<li>$A + 4 + 1 = 15 = 1\\cdot 12 + 3$. Scrivo $3$, riporto $1$.</li>
<li>$B + 5 + 1 = 17 = 1\\cdot 12 + 5$. Scrivo $5$, riporto $1$.</li>
<li>$7 + 2 + 1 = 10 = A_{12}$. Scrivo $A$, nessun riporto.</li>
<li>$A + B = 21 = 1\\cdot 12 + 9$. Scrivo $9$, riporto $1$.</li>
<li>$9 + 3 + 1 = 13 = 1\\cdot 12 + 1$. Scrivo $1$, riporto $1$.</li>
<li>Scrivo l'ultimo riporto $1$.</li>
</ul>
<p>In tutto i riporti unitari sono <strong>sette</strong>: sei entranti nelle colonne interne e uno finale.</p>`,
          `<p><strong>Risultato.</strong></p>
<p>$$[9A7BA302A]_{12} + [3B254ABB1]_{12} = [119A53201B]_{12}.$$</p>`
        ]
      },

      {
        id: "s10-integrazione-box",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e <strong>non svolti dal docente</strong>. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s10-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enunciare il teorema della divisione euclidea in $\\mathbb{N}$ e spiegare in quali punti si usa l'ipotesi $b \\ne 0$.</p>`,
        solution: `<p><strong>Enunciato.</strong> Per ogni $n \\in \\mathbb{N}$ e ogni $b \\in \\mathbb{N}_{+}$ esistono e sono unici $q, r \\in \\mathbb{N}$ tali che $n = bq + r$ e $0 \\le r \\le b-1$.</p>
<p><strong>Dove serve $b \\ne 0$.</strong> L'ipotesi interviene in tre punti.</p>
<p><strong>(i) Nella tesi stessa.</strong> Se fosse $b = 0$, la condizione $0 \\le r \\le b-1$ diventerebbe $0 \\le r \\le -1$, impossibile in $\\mathbb{N}$: l'esistenza cadrebbe.</p>
<p><strong>(ii) Nell'unicità, primo passaggio.</strong> Si osserva che l'unico multiplo di $b$ compreso tra $0$ e $b-1$ è $0$: questo richiede $b \\ge 1$.</p>
<p><strong>(iii) Nell'unicità, secondo passaggio.</strong> Da $b(q'-q) = 0$ si conclude $q' = q$ solo perché $b \\ne 0$; con $b = 0$ l'uguaglianza $0\\cdot(q'-q) = 0$ è vera per ogni $q, q'$ e il quoziente resterebbe arbitrario.</p>
<p>Si noti inoltre che nella dimostrazione per induzione la base usa $b \\ge 1$ (per avere $0 \\le 0 \\le b-1$) e nel metodo del minimo si usa $b \\gt 0$ per garantire $r - b \\lt r$.</p>`
      },

      {
        id: "s10-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dimostrare che quoziente e resto della divisione euclidea di $n \\in \\mathbb{N}$ per $b \\in \\mathbb{N}_{+}$ sono unici.</p>`,
        solution: `<p><strong>Impostazione.</strong> Siano $(q,r)$ e $(q',r')$ due coppie di naturali con</p>
<p>$$n = bq + r = bq' + r', \\qquad 0 \\le r \\le b-1, \\qquad 0 \\le r' \\le b-1.$$</p>
<p>A meno di scambiare i nomi possiamo supporre $r' \\le r$.</p>
<p><strong>Uguaglianza dei resti.</strong> Uguagliando le due espressioni di $n$:</p>
<p>$$bq + r = bq' + r' \\qquad \\Longrightarrow \\qquad b(q' - q) = r - r'.$$</p>
<p>Dalle disuguaglianze $0 \\le r' \\le r \\le b-1$ segue $0 \\le r - r' \\le b-1 \\lt b$. Ma $r - r'$ è un multiplo di $b$ (vale $b$ volte l'intero $q'-q$) e l'unico multiplo di $b$ in $\\{0,1,\\dots,b-1\\}$ è $0$: dunque $r - r' = 0$, ossia $r = r'$.</p>
<p><strong>Uguaglianza dei quozienti.</strong> Sostituendo si ottiene $b(q'-q) = 0$ e, poiché $b \\ne 0$, si conclude $q' - q = 0$, cioè $q' = q$.</p>
<p>Le due coppie coincidono: quoziente e resto sono unici. $\\blacksquare$</p>`
      },

      {
        id: "s10-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Nel teorema di esistenza e unicità della scrittura posizionale si richiede $c_k \\ne 0$ quando $n \\ne 0$. Spiegare perché tale condizione serve all'unicità e dedurre quante cifre ha $n \\gt 0$ in base $b$.</p>`,
        solution: `<p><strong>Perché serve $c_k \\ne 0$.</strong> Senza quella condizione si possono premettere arbitrariamente cifre nulle senza alterare il valore, perché $0\\cdot b^{s} = 0$. Per esempio in base $10$:</p>
<p>$$13 = 1\\cdot 10 + 3 = 0\\cdot 10^2 + 1\\cdot 10 + 3 = 0\\cdot 10^3 + 0\\cdot 10^2 + 1\\cdot 10 + 3,$$</p>
<p>cioè $[13]_{10} = [013]_{10} = [0013]_{10}$: ci sarebbero infinite scritture dello stesso numero e l'unicità (in particolare quella di $k$) cadrebbe.</p>
<p><strong>Stima inferiore.</strong> Con la condizione $c_k \\ne 0$, invece, $k$ è determinato da $n$. Sia $n = \\sum_{s=0}^{k} c_s b^{s}$ con $0 \\le c_s \\le b-1$ e $c_k \\ge 1$. Poiché tutti gli addendi sono non negativi,</p>
<p>$$\\begin{aligned} n \\;\\ge\\; c_k\\, b^{k} \\;\\ge\\; b^{k}. \\end{aligned}$$</p>
<p><strong>Stima superiore.</strong> Maggiorando ogni cifra con $b-1$ e usando la somma geometrica,</p>
<p>$$\\begin{aligned}
n \\;&\\le\\; \\sum_{s=0}^{k} (b-1)\\, b^{s}\\\\
&=\\; (b-1)\\cdot \\frac{b^{k+1}-1}{b-1}\\\\
&=\\; b^{k+1} - 1 \\;\\lt\\; b^{k+1}.
\\end{aligned}$$</p>
<p><strong>Conclusione.</strong> Dunque $b^{k} \\le n \\lt b^{k+1}$ e, poiché gli intervalli $[b^{k}, b^{k+1})$ al variare di $k \\in \\mathbb{N}$ sono a due a due disgiunti, $k$ è l'unico naturale con questa proprietà (equivalentemente $k = \\lfloor \\log_b n \\rfloor$). Il numero di cifre di $n \\gt 0$ in base $b$ è quindi $k+1$. Per $n = 0$ la convenzione $k = 0$, $c_0 = 0$ fissa l'unica scrittura, di una sola cifra.</p>`
      },

      {
        id: "s10-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Convertire $[2043]_5$ in base $10$ e scrivere poi il risultato in base $7$.</p>`,
        solution: `<p><strong>Prima conversione (base 5 → base 10).</strong> Si usa la definizione di scrittura posizionale:</p>
<p>$$\\begin{aligned}
[2043]_5 &= 2\\cdot 5^3 + 0\\cdot 5^2 + 4\\cdot 5^1 + 3\\cdot 5^0\\\\
&= 250 + 0 + 20 + 3 = 273,
\\end{aligned}$$</p>
<p>cioè $[2043]_5 = [273]_{10}$.</p>
<p><strong>Seconda conversione (base 10 → base 7).</strong> Algoritmo delle divisioni successive per $7$:</p>
<p>$$\\begin{aligned}
273 &= 7\\cdot 39 + 0 &&(c_0 = 0)\\\\
39 &= 7\\cdot 5 + 4 &&(c_1 = 4)\\\\
5 &= 7\\cdot 0 + 5 &&(c_2 = 5)
\\end{aligned}$$</p>
<p>Il primo quoziente nullo si ottiene al passo di indice $k = 2$, dunque leggendo i resti dall'ultimo al primo: $[273]_{10} = [540]_7$.</p>
<p><strong>Verifica.</strong> $[540]_7 = 5\\cdot 49 + 4\\cdot 7 + 0 = 245 + 28 = 273$. In conclusione</p>
<p>$$[2043]_5 = [273]_{10} = [540]_7.$$</p>`
      },

      {
        id: "s10-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Determinare tutte le basi $b$ per cui vale $[132]_b = [90]_{10}$.</p>`,
        solution: `<p><strong>Vincolo sulle cifre.</strong> Perché la scrittura $[132]_b$ abbia senso, le cifre $1, 3, 2$ devono essere minori di $b$: deve valere $b \\ge 4$ (con $b$ intero e $b \\gt 1$).</p>
<p><strong>Equazione.</strong> Convertendo in base 10, $[132]_b = b^2 + 3b + 2$, quindi</p>
<p>$$b^2 + 3b + 2 = 90 \\qquad \\Longrightarrow \\qquad b^2 + 3b - 88 = 0.$$</p>
<p><strong>Risoluzione.</strong> Il discriminante vale $\\Delta = 9 + 4\\cdot 88 = 361 = 19^2$, quindi</p>
<p>$$b = \\frac{-3 \\pm 19}{2}, \\qquad b_1 = \\frac{16}{2} = 8, \\qquad b_2 = \\frac{-22}{2} = -11.$$</p>
<p><strong>Selezione e verifica.</strong> La radice $b_2 = -11$ non è accettabile perché negativa; $b_1 = 8$ è intero e soddisfa $b \\ge 4$. Verifica: $[132]_8 = 1\\cdot 64 + 3\\cdot 8 + 2 = 90$. L'unica base è dunque $b = 8$.</p>`
      },

      {
        id: "s10-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Eseguire il prodotto $[253]_7 \\cdot [46]_7$ lavorando direttamente in base $7$ e verificare il risultato convertendo in base $10$.</p>`,
        solution: `<p>Le cifre in base $7$ sono $\\{0,1,2,3,4,5,6\\}$ e ogni riporto si ottiene dividendo per $7$.</p>
<p><strong>Primo prodotto parziale: $[253]_7 \\cdot 6$.</strong></p>
<p>$$\\begin{aligned}
3\\cdot 6 &= 18 = 2\\cdot 7 + 4 &&\\text{scrivo } 4,\\ \\text{riporto } 2\\\\
5\\cdot 6 + 2 &= 32 = 4\\cdot 7 + 4 &&\\text{scrivo } 4,\\ \\text{riporto } 4\\\\
2\\cdot 6 + 4 &= 16 = 2\\cdot 7 + 2 &&\\text{scrivo } 2,\\ \\text{riporto } 2\\\\
&&&\\text{scrivo l'ultimo riporto } 2
\\end{aligned}$$</p>
<p>Dunque $[253]_7 \\cdot 6 = [2244]_7$.</p>
<p><strong>Secondo prodotto parziale: $[253]_7 \\cdot 4$.</strong></p>
<p>$$\\begin{aligned}
3\\cdot 4 &= 12 = 1\\cdot 7 + 5 &&\\text{scrivo } 5,\\ \\text{riporto } 1\\\\
5\\cdot 4 + 1 &= 21 = 3\\cdot 7 + 0 &&\\text{scrivo } 0,\\ \\text{riporto } 3\\\\
2\\cdot 4 + 3 &= 11 = 1\\cdot 7 + 4 &&\\text{scrivo } 4,\\ \\text{riporto } 1\\\\
&&&\\text{scrivo l'ultimo riporto } 1
\\end{aligned}$$</p>
<p>Dunque $[253]_7 \\cdot 4 = [1405]_7$, che va traslato di una posizione perché la cifra $4$ occupa il posto delle unità di ordine $7$: contribuisce come $[14050]_7$.</p>
<p><strong>Somma dei prodotti parziali in base 7.</strong> Sommiamo $[02244]_7$ e $[14050]_7$ procedendo da destra:</p>
<p>$$\\begin{aligned}
4 + 0 &= 4\\\\
4 + 5 &= 9 = 1\\cdot 7 + 2 &&\\text{scrivo } 2,\\ \\text{riporto } 1\\\\
2 + 0 + 1 &= 3\\\\
2 + 4 &= 6\\\\
0 + 1 &= 1
\\end{aligned}$$</p>
<p>Il risultato è $[16324]_7$.</p>
<p><strong>Verifica in base 10.</strong></p>
<p>$$\\begin{aligned}
[253]_7 &= 2\\cdot 49 + 5\\cdot 7 + 3 = 136, \\qquad [46]_7 = 4\\cdot 7 + 6 = 34,\\\\
136 \\cdot 34 &= 4624,\\\\
[16324]_7 &= 2401 + 6\\cdot 343 + 3\\cdot 49 + 2\\cdot 7 + 4\\\\
&= 2401 + 2058 + 147 + 14 + 4 = 4624.
\\end{aligned}$$</p>
<p>Il risultato è corretto.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Enuncia il teorema della divisione euclidea in $\\mathbb{N}$.",
        back: "Siano $n \\in \\mathbb{N}$ e $b \\in \\mathbb{N}_{+}$. Allora esistono e sono unici $q, r \\in \\mathbb{N}$ tali che $n = bq + r$ e $0 \\le r \\le b-1$. Il numero $r$ si dice resto; se $r = 0$ si dice che $b$ divide $n$ e si scrive $b \\mid n$. Attenzione: sono due condizioni, l'uguaglianza da sola non determina la coppia."
      },
      {
        type: "dimostrazione",
        front: "Dimostra l'unicità di quoziente e resto nella divisione euclidea.",
        back: "Siano $n = bq + r = bq' + r'$ con $0 \\le r, r' \\le b-1$ e, a meno di scambiare i nomi, $r' \\le r$. Allora $b(q'-q) = r - r'$, con $0 \\le r - r' \\lt b$. Ma $r-r'$ è un multiplo di $b$ e l'unico multiplo di $b$ in $\\{0,\\dots,b-1\\}$ è $0$: dunque $r = r'$. Sostituendo, $b(q'-q) = 0$ e, poiché $b \\ne 0$, segue $q' = q$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra l'esistenza di quoziente e resto usando il principio del minimo.",
        back: "Si pone $T = \\{\\, n - bq \\mid q \\in \\mathbb{N},\\ n - bq \\ge 0 \\,\\} \\subseteq \\mathbb{N}$. $T \\ne \\emptyset$ perché con $q=0$ si ha $n \\in T$. Per il principio del minimo $T$ ha un minimo $r = n - bq \\ge 0$, da cui $n = bq + r$. Se fosse $r \\ge b$, allora $r' = r - b = n - b(q+1) \\ge 0$ apparterrebbe a $T$ e, poiché $b \\gt 0$, sarebbe $r' \\lt r$: assurdo. Quindi $r \\lt b$."
      },
      {
        type: "tranello",
        front: "Perché nella divisione euclidea si richiede $b \\ne 0$? Che cosa si rompe con $b = 0$?",
        back: "Tre punti. (i) La tesi: con $b=0$ la condizione $0 \\le r \\le b-1$ diventa $0 \\le r \\le -1$, impossibile in $\\mathbb{N}$. (ii) Nell'unicità si usa che l'unico multiplo di $b$ tra $0$ e $b-1$ è $0$, e ciò richiede $b \\ge 1$. (iii) Sempre nell'unicità, da $b(q'-q) = 0$ si deduce $q'=q$ solo se $b \\ne 0$: con $b=0$ il quoziente resterebbe arbitrario."
      },
      {
        type: "definizione",
        front: "Che cos'è la scrittura posizionale di $n$ in base $b$?",
        back: "Scelta una base $b \\in \\mathbb{N}$ con $b \\gt 1$ e $b$ simboli (le cifre) per i valori $0, \\dots, b-1$, la scrittura $n = [c_k c_{k-1}\\dots c_1 c_0]_b$ indica la quantità $n = \\sum_{s=0}^{k} c_s b^{s}$, con $c_s \\in \\{0,1,\\dots,b-1\\}$."
      },
      {
        type: "formula",
        front: "Enuncia il teorema di esistenza e unicità della scrittura posizionale.",
        back: "Sia $b \\gt 1$. Per ogni $n \\in \\mathbb{N}$ esistono unici $k$ e cifre $c_0,\\dots,c_k \\in \\{0,\\dots,b-1\\}$ con $n = \\sum_{s=0}^{k} c_s b^{s}$, dove $c_k \\ne 0$ se $n \\ne 0$, mentre $k=0$ e $c_0=0$ se $n = 0$."
      },
      {
        type: "domanda",
        front: "Descrivi l'algoritmo che produce le cifre di $n \\gt 0$ in base $b$ e spiega perché termina.",
        back: "Si pone $q_{-1} = n$ e si itera la divisione euclidea $q_{i-1} = b\\,q_i + r_i$ con $0 \\le r_i \\le b-1$. Finché $q_{i-1} \\gt 0$ si ha $q_i \\le q_{i-1}/b \\lt q_{i-1}$ (usando $b \\ge 2$), quindi i quozienti decrescono strettamente fino al primo termine nullo; una successione strettamente decrescente di naturali è finita, dunque esiste un primo $k$ con $q_k = 0$. Le cifre sono $c_s = r_s$, e la scrittura è $n = [r_k \\dots r_0]_b$: i resti si leggono dall'ultimo al primo."
      },
      {
        type: "tranello",
        front: "Perché nell'enunciato della scrittura posizionale serve la condizione $c_k \\ne 0$?",
        back: "Perché $0\\cdot b^{s} = 0$: senza quella condizione si potrebbero premettere arbitrariamente zeri iniziali, ottenendo infinite scritture dello stesso numero (ad esempio $[13]_{10} = [013]_{10} = [0013]_{10}$) e cadrebbe l'unicità, in particolare quella di $k$. Per $n = 0$ lo stesso ruolo è svolto dalla convenzione $k=0$, $c_0=0$."
      },
      {
        type: "domanda",
        front: "Quanti sono i numeri scrivibili in base $b$ con al più $N$ cifre, e perché?",
        back: "Sono esattamente gli interi da $0$ a $b^N - 1$, in tutto $b^N$. Il massimo è $[(b-1)(b-1)\\dots(b-1)]_b = (b-1)\\sum_{s=0}^{N-1} b^{s} = b^N - 1$. Per escludere lacune serve il teorema di rappresentazione: se $0 \\lt n \\lt b^N$ richiedesse $k \\ge N$ cifre, allora $n \\ge c_k b^{k} \\ge b^{k} \\ge b^{N}$, contro $n \\lt b^N$."
      },
      {
        type: "domanda",
        front: "Come si converte rapidamente da base 2 a base 8 e perché la regola funziona?",
        back: "Si raggruppano le cifre binarie a gruppi di 3 partendo da destra (completando a sinistra con zeri) e si traduce ogni gruppo in una cifra ottale, mantenendo l'ordine. Funziona perché, raccogliendo $2^{3j} = 8^{\\,j}$, si ha $c_{3j+2}2^{3j+2} + c_{3j+1}2^{3j+1} + c_{3j}2^{3j} = (4c_{3j+2} + 2c_{3j+1} + c_{3j})\\,8^{\\,j}$, e il coefficiente è un intero fra $0$ e $7$, cioè proprio una cifra ottale. Esempio: $[11010111011]_2 = [3273]_8$."
      },
      {
        type: "tranello",
        front: "Le tabelle di somma e prodotto delle cifre in base 3 contengono $10$ e $11$: sono le tavole modulo 3?",
        back: "No. Sono le tabelle delle operazioni elementari in base 3: le caselle riportano i risultati aritmetici veri ($2+2 = 4$, $2\\cdot 2 = 4$) scritti in base 3, e perciò possono richiedere due cifre. Non sono operazioni interne all'insieme delle cifre $\\{0,1,2\\}$ e non coincidono con le tavole modulo 3, dove sarebbe $2+2 = 1$ e $2\\cdot 2 = 1$. L'eccedenza di cifra è esattamente ciò che genera il riporto in colonna."
      },
      {
        type: "domanda",
        front: "Come si imposta un esercizio del tipo «trovare la base $b$ tale che $[303]_8 = [523]_b$»?",
        back: "Si converte tutto in base 10: $[303]_8 = 195$ e $[523]_b = 5b^2 + 2b + 3$. Si risolve $5b^2 + 2b - 192 = 0$, che dà $b = \\frac{-2 \\pm 62}{10}$, cioè $b = 6$ oppure $b = -6{,}4$. Si scartano le radici non intere o negative e si impone che tutte le cifre usate siano lecite: la cifra $5$ richiede $b \\ge 6$. Resta $b = 6$."
      }
    ]
};

