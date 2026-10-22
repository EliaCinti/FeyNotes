const LESSON = {
    id: "L09", date: "Lezione 9 — 21 Ott 2026",
    title: "Divisione con Resto e Numerazione in Base Arbitraria",
    abstract: "Il teorema di divisione euclidea in $\\mathbb{N}$ con dimostrazione completa di unicità ed esistenza (per induzione e per principio del minimo), e la sua applicazione fondamentale: la scrittura posizionale dei numeri in base arbitraria, l'algoritmo delle divisioni successive e le operazioni eseguite direttamente in base $b$.",

    sections: [
      {
        id: "s09-divisione-euclidea",
        type: "section",
        title: "Divisione euclidea in $\\mathbb{N}$",
        icon: "➗",
        content: `<p>Il risultato di partenza di tutta la lezione è un teorema che formalizza l'operazione di "divisione con resto" che si impara alle elementari. La sua forza sta nel fatto che garantisce <strong>esistenza</strong> e <strong>unicità</strong> della coppia quoziente-resto.</p>`,
        subsections: [
          {
            subtitle: "Teorema (Divisione euclidea)",
            content: `<p>Siano $n \\in \\mathbb{N}$ e $b \\in \\mathbb{N}_+$. Allora esistono, e sono unici, due numeri $q, r \\in \\mathbb{N}$ tali che</p>
<p>$$n = bq + r \\qquad \\text{e} \\qquad 0 \\le r \\le b-1.$$</p>
<p>Si noti l'ipotesi $b \\in \\mathbb{N}_+$: il divisore deve essere <strong>strettamente positivo</strong>. È un'ipotesi usata in modo essenziale nella dimostrazione.</p>`
          },
          {
            subtitle: "Definizione (quoziente, resto, divisibilità)",
            content: `<p>Con riferimento al teorema precedente:</p>
<ul>
  <li>il numero $q$ è detto <strong>quoziente</strong>;</li>
  <li>il numero $r$ è detto <strong>resto</strong> della divisione;</li>
  <li>se $r = 0$, si dice che $b$ <strong>divide</strong> $n$ (o che $n$ è un multiplo di $b$) e si scrive $b \\mid n$.</li>
</ul>`
          },
          {
            subtitle: "Osservazione sulla notazione",
            content: `<p>La notazione $b \\mid n$ per "$b$ divide $n$" <strong>non va confusa</strong> con la notazione $A \\mid B$ che a volte si usa per indicare "$A$ tale che $B$" (per esempio nella descrizione degli insiemi). Il contesto chiarisce sempre quale dei due significati è in gioco.</p>`
          }
        ],
        formulas: [
          { label: "Divisione euclidea", latex: "n = bq + r, \\qquad 0 \\le r \\le b-1" },
          { label: "Divisibilità", latex: "b \\mid n \\iff \\exists q \\in \\mathbb{N} : n = bq" }
        ]
      },

      {
        id: "s09-unicita",
        type: "section",
        title: "Dimostrazione: unicità della coppia $(q,r)$",
        icon: "🔒",
        content: `<p>Si procede per assurdo: supponiamo che esistano <strong>due coppie distinte</strong> $(q,r)$ e $(q',r')$ che soddisfano entrambe le condizioni del teorema.</p>
<p>$$n = bq + r, \\quad 0 \\le r \\le b-1$$</p>
<p>$$n = bq' + r', \\quad 0 \\le r' \\le b-1$$</p>`,
        subsections: [
          {
            subtitle: "Passaggio 1 — eguagliare le due espressioni",
            content: `<p>Poiché entrambe esprimono lo stesso $n$:</p>
<p>$$bq + r = bq' + r' \\quad \\Rightarrow \\quad b(q - q') = r' - r$$</p>
<p>Senza perdita di generalità assumiamo $r' \\ge r$ (se non fosse così si scambiano i ruoli delle due coppie).</p>`
          },
          {
            subtitle: "Passaggio 2 — stimare la differenza dei resti",
            content: `<p>Dalle condizioni sui resti sappiamo che $0 \\le r \\le r' \\le b-1$. Di conseguenza</p>
<p>$$0 \\le r' - r \\le (b-1) - 0 = b-1,$$</p>
<p>cioè $0 \\le r' - r \\lt b$.</p>`
          },
          {
            subtitle: "Passaggio 3 — l'unico multiplo di $b$ minore di $b$ è zero",
            content: `<p>L'uguaglianza $b(q-q') = r'-r$ dice che $r'-r$ è un <strong>multiplo di $b$</strong>. Ma l'unico multiplo non negativo di $b$ strettamente minore di $b$ è $0$. Pertanto</p>
<p>$$r' - r = 0 \\quad \\Rightarrow \\quad r' = r.$$</p>`
          },
          {
            subtitle: "Passaggio 4 — qui serve $b \\ne 0$",
            content: `<p>Sostituendo $r'=r$ nell'equazione si ottiene $b(q-q') = 0$. Poiché per ipotesi $b \\in \\mathbb{N}_+$, si ha $b \\ne 0$, e dunque necessariamente $q - q' = 0$, ovvero $q = q'$.</p>
<p>Avendo dimostrato $r = r'$ e $q = q'$, le due coppie <strong>coincidono</strong>: contraddizione con l'ipotesi che fossero distinte. L'unicità è provata.</p>`
          }
        ]
      },

      {
        id: "s09-esistenza",
        type: "section",
        title: "Dimostrazione: esistenza (due vie)",
        icon: "🛠️",
        content: `<p>L'esistenza si dimostra in due modi indipendenti: uno con il <strong>principio di induzione</strong>, l'altro con il <strong>principio del minimo</strong> (buon ordinamento). Entrambi vanno saputi.</p>`,
        subsections: [
          {
            subtitle: "Metodo 1 — induzione su $n$",
            content: `<p>Fissato $b \\in \\mathbb{N}_+$, dimostriamo per induzione su $n$ la proprietà</p>
<p>$$P(n): \\ \\exists\\, q,r \\in \\mathbb{N} \\ \\text{tali che} \\ n = bq + r, \\ 0 \\le r \\le b-1.$$</p>
<p><strong>Base ($n=0$).</strong> Scegliendo $q=0$ e $r=0$ si ha $0 = b\\cdot 0 + 0$; la condizione $0 \\le 0 \\le b-1$ è vera perché $b \\ge 1$. Dunque $P(0)$ è vera.</p>
<p><strong>Passo induttivo.</strong> Supponiamo $P(n)$ vera: esistono $q,r$ con $n = bq+r$ e $0 \\le r \\le b-1$. Allora</p>
<p>$$n+1 = (bq+r)+1 = bq + (r+1).$$</p>
<p>Si distinguono due casi per $r+1$:</p>
<ul>
  <li><strong>Caso $r+1 \\lt b$</strong> (cioè $r \\le b-2$): poniamo $q' = q$ e $r' = r+1$. Allora $n+1 = bq' + r'$ con $0 \\lt r' \\le b-1$: condizioni soddisfatte.</li>
  <li><strong>Caso $r+1 = b$</strong> (cioè $r = b-1$): allora
  <p>$$n+1 = bq + (b-1) + 1 = bq + b = b(q+1) + 0,$$</p>
  e poniamo $q' = q+1$, $r' = 0$, che soddisfa $0 \\le 0 \\le b-1$.</li>
</ul>
<p>In entrambi i casi $P(n+1)$ è vera, dunque per il principio di induzione la proprietà vale per ogni $n \\in \\mathbb{N}$.</p>`
          },
          {
            subtitle: "Metodo 2 — principio del minimo",
            content: `<p>Procediamo per assurdo. Sia $T$ l'insieme dei naturali per i quali la coppia $(q,r)$ <em>non</em> esiste:</p>
<p>$$T = \\{\\, n \\in \\mathbb{N} \\ \\mid \\ \\neg(\\exists\\, q,r \\in \\mathbb{N},\\ n = bq+r,\\ 0 \\le r \\le b-1) \\,\\}$$</p>
<p>Supponiamo $T \\ne \\emptyset$. Per il principio del minimo $T$ ha un elemento minimo $n_0$.</p>
<ul>
  <li>Ogni numero $n \\lt b$ si scrive come $n = b\\cdot 0 + n$, con $q=0$ e $r=n$; la condizione $0 \\le n \\le b-1$ è vera. Dunque <strong>nessun numero minore di $b$ appartiene a $T$</strong>, da cui $n_0 \\ge b$.</li>
  <li>Poiché $n_0 \\ge b$, il numero $n' = n_0 - b$ è un naturale e $n' \\lt n_0$.</li>
  <li>Essendo $n_0$ il minimo di $T$, si ha $n' \\notin T$: esistono quindi $q', r' \\in \\mathbb{N}$ con $n' = bq' + r'$ e $0 \\le r' \\le b-1$.</li>
  <li>Sostituendo:
  <p>$$n_0 - b = bq' + r' \\quad \\Rightarrow \\quad n_0 = bq' + b + r' = b(q'+1) + r'.$$</p>
  </li>
  <li>Ponendo $q = q'+1$ e $r = r'$ abbiamo trovato una coppia valida per $n_0$.</li>
</ul>
<p>Questo contraddice $n_0 \\in T$. Dunque $T = \\emptyset$ e l'esistenza è provata per ogni $n \\in \\mathbb{N}$.</p>`
          }
        ],
        extra_content: `<p><strong>Punto chiave:</strong> nel metodo del minimo la mossa decisiva è <em>scendere di $b$</em>, cioè passare da $n_0$ a $n_0 - b$: è esattamente l'idea di "sottrarre $b$ ripetutamente" che sta dietro l'algoritmo della divisione.</p>`
      },

      {
        id: "s09-posizionale",
        type: "section",
        title: "Scrittura posizionale",
        icon: "🔢",
        content: `<p>La divisione euclidea è lo strumento che permette di <strong>formalizzare e generalizzare</strong> la scrittura posizionale dei numeri, quella che usiamo ogni giorno in base 10 senza pensarci.</p>`,
        subsections: [
          {
            subtitle: "Il caso familiare: base 10",
            content: `<p>Quando scriviamo $n = 35071$ stiamo usando implicitamente una scrittura posizionale in base 10:</p>
<p>$$n = 3 \\cdot 10^4 + 5 \\cdot 10^3 + 0 \\cdot 10^2 + 7 \\cdot 10^1 + 1 \\cdot 10^0$$</p>
<p>Le caratteristiche del sistema sono tre:</p>
<ul>
  <li>ogni <strong>cifra</strong> ($0, 1, \\dots, 9$) ha un valore intrinseco;</li>
  <li>la <strong>posizione</strong> della cifra (contando da destra, a partire da $0$) determina la potenza della base per cui va moltiplicata;</li>
  <li>il valore del numero è la <strong>somma</strong> di questi prodotti.</li>
</ul>
<p>In generale, $n = c_k c_{k-1} \\dots c_1 c_0$ in base 10, con $c_i \\in \\{0,\\dots,9\\}$, rappresenta</p>
<p>$$n = \\sum_{s=0}^{k} c_s \\cdot 10^s.$$</p>`
          },
          {
            subtitle: "Definizione (scrittura posizionale in base $b$)",
            content: `<p>Sia $b \\in \\mathbb{N}$ con $b \\gt 1$ (la <strong>base</strong>). Sia $\\mathcal{C} = \\{\\chi_0, \\chi_1, \\dots, \\chi_{b-1}\\}$ un insieme di $b$ simboli distinti (le <strong>cifre</strong>), dove $\\chi_i$ rappresenta il numero $i$. La scrittura</p>
<p>$$n = [c_k c_{k-1} \\dots c_1 c_0]_b, \\qquad c_i \\in \\mathcal{C},$$</p>
<p>è detta <strong>scrittura posizionale</strong> di $n$ in base $b$ e rappresenta il numero (identificando, come d'uso, ogni simbolo $\\chi_i$ con il valore numerico $i \\in \\{0,1,\\dots,b-1\\}$ che esso denota):</p>
<p>$$n = \\sum_{s=0}^{k} c_s \\cdot b^s.$$</p>
<p>Se la base è chiara dal contesto, si può omettere il pedice.</p>`
          }
        ],
        formulas: [
          { label: "Valore di una scrittura posizionale", latex: "[c_k c_{k-1}\\dots c_0]_b = \\sum_{s=0}^{k} c_s \\cdot b^s" },
          { label: "Numero di cifre disponibili", latex: "|\\mathcal{C}| = b, \\qquad \\mathcal{C} = \\{\\chi_0,\\dots,\\chi_{b-1}\\}" }
        ]
      },

      {
        id: "s09-teorema-base",
        type: "section",
        title: "Esistenza e unicità della scrittura in base $b$",
        icon: "✅",
        content: `<p><strong>Teorema.</strong> Sia $b \\in \\mathbb{N}$ con $b \\gt 1$. Per ogni $n \\in \\mathbb{N}$ esiste ed è unica una sequenza finita di cifre $c_0, c_1, \\dots, c_k \\in \\{0,1,\\dots,b-1\\}$ tale che</p>
<p>$$n = \\sum_{s=0}^{k} c_s \\cdot b^s$$</p>
<p>con la condizione che, se $n \\gt 0$, la cifra più significativa sia non nulla ($c_k \\ne 0$). Se $n = 0$, la sua rappresentazione è $[0]_b$.</p>`,
        subsections: [
          {
            subtitle: "Nota sulla dimostrazione",
            content: `<p>La dimostrazione di esistenza e unicità si può effettuare tramite il <strong>principio di induzione forte</strong>. In aula <strong>si è scelto di ometterla</strong> per concentrarsi sul metodo operativo che determina effettivamente le cifre: è quello che serve negli esercizi.</p>`
          },
          {
            subtitle: "Metodo operativo per il cambio di base",
            content: `<p>L'algoritmo per trovare le cifre $c_0, c_1, \\dots, c_k$ di $n$ in base $b$ si basa su <strong>divisioni euclidee successive</strong>. Il punto di partenza è il raccoglimento di $b$:</p>
<p>$$n = c_k b^k + \\dots + c_1 b + c_0 = \\big(c_k b^{k-1} + \\dots + c_1\\big)\\cdot b + c_0$$</p>
<p>Poiché $0 \\le c_0 \\le b-1$, per l'<strong>unicità</strong> della divisione euclidea $c_0$ è esattamente il resto della divisione di $n$ per $b$, e il quoziente è</p>
<p>$$q_0 = c_k b^{k-1} + \\dots + c_1.$$</p>
<p>Ripetendo il procedimento su $q_0$:</p>
<p>$$q_0 = \\big(c_k b^{k-2} + \\dots + c_2\\big)\\cdot b + c_1,$$</p>
<p>quindi $c_1$ è il resto della divisione di $q_0$ per $b$. Si prosegue così: la cifra $c_i$ è il resto della divisione del quoziente $q_{i-1}$ per $b$. Il processo <strong>termina quando si ottiene quoziente nullo</strong>, e le cifre della rappresentazione sono i <strong>resti letti in ordine inverso</strong>, dall'ultimo al primo.</p>`
          }
        ],
        formulas: [
          { label: "Ricorsione dell'algoritmo", latex: "q_{i-1} = b\\,q_i + c_i, \\qquad 0 \\le c_i \\le b-1" }
        ]
      },

      {
        id: "s09-alert-base",
        type: "alert_box",
        title: "Trappole da evitare",
        icon: "⚠️",
        content: `<ul>
  <li><strong>I resti si leggono al contrario.</strong> Il primo resto che ottieni è $c_0$ (le unità), l'ultimo è la cifra più significativa. Scrivere i resti nell'ordine in cui escono è l'errore più comune.</li>
  <li><strong>Il divisore deve essere positivo.</strong> Nel teorema di divisione euclidea $b \\in \\mathbb{N}_+$: per $b=0$ la condizione $0 \\le r \\le b-1$ diventa $0 \\le r \\le -1$, impossibile.</li>
  <li><strong>La base deve essere $b \\gt 1$.</strong> Con $b=1$ l'unica cifra disponibile è $0$ e ogni scrittura vale $0$; inoltre l'algoritmo delle divisioni successive non terminerebbe mai.</li>
  <li><strong>$b \\mid n$ non vuol dire "$b$ tale che $n$".</strong> La barra verticale ha due usi diversi: divisibilità e "tale che". Guarda il contesto.</li>
</ul>`
      },

      {
        id: "s09-es-8-6",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Conversioni (Esercizio 8.6)",
        icon: "✎",
        source: "docente",
        content: `<p><strong>(1)</strong> Convertire in base 10 i numeri $[7204]_8$, $[3241]_5$, $[4315]_6$.<br>
<strong>(2)</strong> Scrivere $[798]_{10}$ in base 5, 6 e 8.</p>`,
        steps: [
          `<p><strong>$[7204]_8$ in base 10</strong> — espansione posizionale, valutazione delle potenze, somma:</p>
<p>$$\\begin{aligned}
[7204]_8 &= 7\\cdot 8^3 + 2\\cdot 8^2 + 0\\cdot 8^1 + 4\\cdot 8^0 \\\\
&= 7\\cdot 512 + 2\\cdot 64 + 0 + 4 \\\\
&= 3584 + 128 + 4 = [3716]_{10}
\\end{aligned}$$</p>`,
          `<p><strong>$[3241]_5$ in base 10:</strong></p>
<p>$$\\begin{aligned}
[3241]_5 &= 3\\cdot 5^3 + 2\\cdot 5^2 + 4\\cdot 5^1 + 1\\cdot 5^0 \\\\
&= 3\\cdot 125 + 2\\cdot 25 + 20 + 1 \\\\
&= 375 + 50 + 20 + 1 = [446]_{10}
\\end{aligned}$$</p>`,
          `<p><strong>$[4315]_6$ in base 10:</strong></p>
<p>$$\\begin{aligned}
[4315]_6 &= 4\\cdot 6^3 + 3\\cdot 6^2 + 1\\cdot 6^1 + 5\\cdot 6^0 \\\\
&= 4\\cdot 216 + 3\\cdot 36 + 6 + 5 \\\\
&= 864 + 108 + 6 + 5 = [983]_{10}
\\end{aligned}$$</p>`,
          `<p><strong>$798$ in base 5</strong> — divisioni successive per $5$, una riga per passo:</p>
<p>$$\\begin{aligned}
798 \\div 5 &= 159 \\ \\text{ con resto } 3 \\quad (c_0) \\\\
159 \\div 5 &= 31 \\ \\ \\text{ con resto } 4 \\quad (c_1) \\\\
31 \\div 5 &= 6 \\ \\ \\ \\text{ con resto } 1 \\quad (c_2) \\\\
6 \\div 5 &= 1 \\ \\ \\ \\text{ con resto } 1 \\quad (c_3) \\\\
1 \\div 5 &= 0 \\ \\ \\ \\text{ con resto } 1 \\quad (c_4)
\\end{aligned}$$</p>
<p>Leggendo i resti dal basso verso l'alto: $[798]_{10} = [11143]_5$.</p>`,
          `<p><strong>$798$ in base 6:</strong></p>
<p>$$\\begin{aligned}
798 \\div 6 &= 133 \\ \\text{ con resto } 0 \\\\
133 \\div 6 &= 22 \\ \\ \\text{ con resto } 1 \\\\
22 \\div 6 &= 3 \\ \\ \\ \\text{ con resto } 4 \\\\
3 \\div 6 &= 0 \\ \\ \\ \\text{ con resto } 3
\\end{aligned}$$</p>
<p>Quindi $[798]_{10} = [3410]_6$. Verifica: $3\\cdot 216 + 4\\cdot 36 + 1\\cdot 6 + 0 = 648 + 144 + 6 = 798$.</p>`,
          `<p><strong>$798$ in base 8:</strong></p>
<p>$$\\begin{aligned}
798 \\div 8 &= 99 \\ \\text{ con resto } 6 \\\\
99 \\div 8 &= 12 \\ \\text{ con resto } 3 \\\\
12 \\div 8 &= 1 \\ \\ \\text{ con resto } 4 \\\\
1 \\div 8 &= 0 \\ \\ \\text{ con resto } 1
\\end{aligned}$$</p>
<p>Quindi $[798]_{10} = [1436]_8$. Verifica: $1\\cdot 512 + 4\\cdot 64 + 3\\cdot 8 + 6 = 512 + 256 + 24 + 6 = 798$.</p>`
        ]
      },

      {
        id: "s09-es-8-7",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Trovare la base (Esercizio 8.7)",
        icon: "✎",
        source: "docente",
        content: `<p>Trovare, se esiste, una base $b \\gt 5$ tale che $[303]_8 = [523]_b$.</p>`,
        steps: [
          `<p>Prima convertiamo il membro noto in base 10:</p>
<p>$$[303]_8 = 3\\cdot 8^2 + 0\\cdot 8^1 + 3\\cdot 8^0 = 3\\cdot 64 + 3 = 192 + 3 = 195.$$</p>`,
          `<p>Poi esprimiamo $[523]_b$ in funzione dell'incognita $b$:</p>
<p>$$[523]_b = 5\\cdot b^2 + 2\\cdot b^1 + 3\\cdot b^0 = 5b^2 + 2b + 3.$$</p>`,
          `<p>Uguagliando le due espressioni si ottiene un'equazione di secondo grado in $b$:</p>
<p>$$5b^2 + 2b + 3 = 195 \\quad \\Rightarrow \\quad 5b^2 + 2b - 192 = 0.$$</p>`,
          `<p>Risolviamo:</p>
<p>$$b = \\frac{-2 \\pm \\sqrt{2^2 - 4\\cdot 5\\cdot(-192)}}{2\\cdot 5} = \\frac{-2 \\pm \\sqrt{4 + 3840}}{10} = \\frac{-2 \\pm \\sqrt{3844}}{10} = \\frac{-2 \\pm 62}{10}.$$</p>`,
          `<p>Poiché la base deve essere un intero positivo, scartiamo la soluzione negativa:</p>
<p>$$b = \\frac{-2+62}{10} = \\frac{60}{10} = 6.$$</p>
<p>La soluzione $b=6$ soddisfa la condizione $b \\gt 5$ (necessaria perché compaia la cifra $5$). La base cercata è dunque $b = 6$.</p>`
        ]
      },

      {
        id: "s09-es-8-8",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Operazioni in base 3 (Esercizio 8.8)",
        icon: "✎",
        source: "docente",
        content: `<p>Scrivere le <strong>tabelle di somma e prodotto delle cifre, con risultati scritti in base 3</strong>, ed eseguire le operazioni. Le cifre in base 3 sono $\\{0,1,2\\}$.</p>
<p><strong>Attenzione:</strong> non si sta calcolando modulo 3. I risultati possono richiedere <strong>due cifre</strong> (come $10$ o $11$ in base 3) e generare <strong>riporti</strong>: queste non sono dunque tavole di operazioni interne all'insieme delle cifre $\\{0,1,2\\}$, ma tabelle di appoggio per i calcoli in colonna.</p>`,
        steps: [
          `<p><strong>Tabella dell'addizione delle cifre (risultati in base 3):</strong></p>
<table style="border-collapse: collapse; margin: 12px 0;">
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">+</th><th style="border: 1px solid var(--border-light); padding: 6px 12px;">0</th><th style="border: 1px solid var(--border-light); padding: 6px 12px;">1</th><th style="border: 1px solid var(--border-light); padding: 6px 12px;">2</th></tr>
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">0</th><td style="border: 1px solid var(--border-light); padding: 6px 12px;">0</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">1</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">2</td></tr>
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">1</th><td style="border: 1px solid var(--border-light); padding: 6px 12px;">1</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">2</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">10</td></tr>
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">2</th><td style="border: 1px solid var(--border-light); padding: 6px 12px;">2</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">10</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">11</td></tr>
</table>
<p>Qui $[10]_3$ vale $3$ e $[11]_3$ vale $4$: la seconda cifra è il riporto.</p>`,
          `<p><strong>Tabella della moltiplicazione delle cifre (risultati in base 3):</strong></p>
<table style="border-collapse: collapse; margin: 12px 0;">
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">·</th><th style="border: 1px solid var(--border-light); padding: 6px 12px;">0</th><th style="border: 1px solid var(--border-light); padding: 6px 12px;">1</th><th style="border: 1px solid var(--border-light); padding: 6px 12px;">2</th></tr>
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">0</th><td style="border: 1px solid var(--border-light); padding: 6px 12px;">0</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">0</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">0</td></tr>
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">1</th><td style="border: 1px solid var(--border-light); padding: 6px 12px;">0</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">1</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">2</td></tr>
<tr><th style="border: 1px solid var(--border-light); padding: 6px 12px;">2</th><td style="border: 1px solid var(--border-light); padding: 6px 12px;">0</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">2</td><td style="border: 1px solid var(--border-light); padding: 6px 12px;">11</td></tr>
</table>
<p>Infatti $2 \\cdot 2 = 4 = [11]_3$.</p>`,
          `<p><strong>(1) $[12]_3 + [21]_3$:</strong></p>
<p>$$\\begin{array}{rr}
  & \\overset{1}{1}2_3 \\\\
+ & 21_3 \\\\
\\hline
  & 110_3
\\end{array}$$</p>
<p>Unità: $2+1 = 3 = [10]_3$, scrivo $0$ e riporto $1$. Cifra successiva: $1+2+1 = 4 = [11]_3$, scrivo $1$ e riporto $1$. Risultato: $[110]_3$.</p>`,
          `<p><strong>(2) $[210]_3 - [12]_3$:</strong></p>
<p>$$\\begin{array}{rrrrr}
  & \\overset{1}{2} & \\overset{3}{1} & \\overset{3}{0} & {}_3 \\\\
- &   & 1 & 2 & {}_3 \\\\
\\hline
  & 1 & 2 & 1 & {}_3
\\end{array}$$</p>
<p>$0-2$: chiedo prestito, $1$ diventa $0$ e $0$ diventa $3$, quindi $3-2=1$. Poi $0-1$: chiedo prestito, $2$ diventa $1$ e $0$ diventa $3$, quindi $3-1=2$. Infine $1-0=1$. Risultato: $[121]_3$.</p>`,
          `<p><strong>(3) $[12]_3 \\cdot [102]_3$:</strong></p>
<p>$$\\begin{array}{rrrrrr}
  &   &   & 1 & 0 & 2_3 \\\\
\\times &   &   &   & 1 & 2_3 \\\\
\\hline
  &   &   & 2 & 1 & 1_3 \\\\
+ &   & 1 & 0 & 2 & 0_3 \\\\
\\hline
  &   & 2 & 0 & 0 & 1_3
\\end{array}$$</p>
<p>Primo prodotto parziale $[102]_3 \\times 2$: $2\\cdot 2 = 4 = [11]_3$, scrivo $1$ e riporto $1$; $2\\cdot 0 + 1 = 1$; $2\\cdot 1 = 2$ — risultato $[211]_3$. Secondo prodotto parziale: $[102]_3 \\times [10]_3 = [1020]_3$. Sommando: $[2001]_3$.</p>`
        ]
      },

      {
        id: "s09-es-8-10",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Quanti numeri con al più $N$ cifre (Esercizio 8.10)",
        icon: "✎",
        source: "docente",
        content: `<p>Dimostrare che i numeri scritti in base $b$ con al più $N$ cifre sono tutti quelli da $0$ a $b^N - 1$.</p>`,
        steps: [
          `<p>Una stringa di $N$ cifre in base $b$ si scrive $[c_{N-1}c_{N-2}\\dots c_0]_b$ e il suo valore è $\\sum_{i=0}^{N-1} c_i b^i$.</p>
<p>Il <strong>valore minimo</strong> si ha con tutte le cifre nulle e vale $0$.</p>`,
          `<p>Il <strong>valore massimo</strong> si ha con $c_i = b-1$ per ogni $i$:</p>
<p>$$\\sum_{i=0}^{N-1}(b-1)b^i = (b-1)\\sum_{i=0}^{N-1} b^i = (b-1)\\cdot\\frac{b^N-1}{b-1} = b^N - 1,$$</p>
<p>dove si è usata la somma della progressione geometrica.</p>`,
          `<p><strong>Conteggio.</strong> Le stringhe di <em>esattamente</em> $N$ cifre in base $b$ (ammettendo zeri iniziali) sono esattamente $b^N$. Per l'unicità della scrittura posizionale, a stringhe distinte corrispondono valori distinti: l'applicazione che a ogni stringa associa il suo valore è <strong>iniettiva</strong> e, per i due punti precedenti, ha immagine contenuta in $\\{0,1,\\dots,b^N-1\\}$, insieme con esattamente $b^N$ elementi.</p>`,
          `<p>Un'applicazione iniettiva tra insiemi finiti con lo stesso numero di elementi è anche <strong>surgettiva</strong>. Dunque ogni intero dell'intervallo $[0,\\,b^N-1]$ corrisponde a <strong>una e una sola stringa di esattamente $N$ cifre</strong>, zeri iniziali ammessi.</p>
<p><strong>Precisazione importante.</strong> Eliminando gli zeri iniziali da quella stringa si ottiene la <em>rappresentazione canonica</em> del numero, che ha al più $N$ cifre. L'unicità va intesa fra stringhe di lunghezza fissata $N$: come stringhe di "al più $N$ cifre", per esempio $1$ e $01$ rappresentano lo stesso numero. La corrispondenza biunivoca con $\\{0,\\dots,b^N-1\\}$ è quindi con le stringhe di lunghezza esattamente $N$, o equivalentemente con le rappresentazioni canoniche di al più $N$ cifre.</p>`
        ]
      },

      {
        id: "s09-es-8-11",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Conversioni rapide tra basi potenza (Esempio 8.11)",
        icon: "✎",
        source: "docente",
        content: `<p>Quando una base è potenza dell'altra la conversione si fa <strong>per raggruppamento di cifre</strong>, senza passare dalla base 10. Caso tipico: base 2 e base 8, con $8 = 2^3$.</p>`,
        steps: [
          `<p><strong>Da base 2 a base 8:</strong> si raggruppano le cifre binarie in gruppi di $3$ <em>a partire da destra</em>; ogni gruppo di 3 cifre binarie corrisponde a una singola cifra ottale. Convertiamo $n = [11010111]_2$:</p>
<p>$$n = [\\underbrace{011}_{3}\\ \\underbrace{010}_{2}\\ \\underbrace{111}_{7}]_2 = [327]_8$$</p>`,
          `<p>Verifica gruppo per gruppo:</p>
<ul>
  <li>$[111]_2 = 1\\cdot 4 + 1\\cdot 2 + 1\\cdot 1 = 7 = [7]_8$</li>
  <li>$[010]_2 = 0\\cdot 4 + 1\\cdot 2 + 0\\cdot 1 = 2 = [2]_8$</li>
  <li>$[011]_2 = 0\\cdot 4 + 1\\cdot 2 + 1\\cdot 1 = 3 = [3]_8$ (si è aggiunto uno zero a sinistra per completare il gruppo)</li>
</ul>`,
          `<p><strong>Viceversa, da base 8 a base 2:</strong> si sostituisce ogni cifra ottale con il suo gruppo di 3 cifre binarie:</p>
<p>$$[561]_8 = [\\underbrace{101}_{5}\\ \\underbrace{110}_{6}\\ \\underbrace{001}_{1}]_2 = [101110001]_2$$</p>`
        ]
      },

      {
        id: "s09-es-8-9",
        type: "esercizio",
        title: "Esercizio 8.9 — Operazioni in base 5",
        kind: "scritto",
        source: "docente",
        content: `<p>Scrivere le tabelle di somma e prodotto delle cifre in base $b=5$ (con risultati scritti in base 5) e calcolare:</p>
<ol>
  <li>$[1234]_5 + [2341]_5 + [3412]_5 + [4123]_5$</li>
  <li>$[43210]_5 - [1234]_5$</li>
  <li>$[412]_5 \\cdot [304]_5$</li>
</ol>`,
        solution: ``
      },

      {
        id: "s09-es-8-12",
        type: "esercizio",
        title: "Esercizio 8.12 — Operazioni in base 12",
        kind: "scritto",
        source: "docente",
        content: `<p>Usando le dodici cifre $\\{0,1,\\dots,9,A,B\\}$ (con $A = 10$, $B = 11$) calcolare:</p>
<ol>
  <li>$[9A7BA302A]_{12} + [3B254ABB1]_{12}$</li>
  <li>$[3B7]_{12} \\cdot [4A]_{12}$</li>
</ol>`,
        solution: ``
      },

      {
        id: "s09-integrazione-esercizi",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s09-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enuncia il teorema della divisione euclidea in $\\mathbb{N}$ e dimostrane la parte di unicità. Indica esattamente dove, nella dimostrazione, si usa l'ipotesi $b \\ne 0$.</p>`,
        solution: `<p><strong>Enunciato.</strong> Per ogni $n \\in \\mathbb{N}$ e ogni $b \\in \\mathbb{N}_+$ esiste un'unica coppia $(q,r) \\in \\mathbb{N}\\times\\mathbb{N}$ tale che $n = bq + r$ e $0 \\le r \\le b-1$.</p>
<p><strong>Unicità.</strong> Siano $(q,r)$ e $(q',r')$ due coppie che soddisfano le condizioni, cioè $n = bq+r$ con $0 \\le r \\le b-1$ e $n = bq'+r'$ con $0 \\le r' \\le b-1$. Uguagliando:</p>
<p>$$bq + r = bq' + r' \\quad \\Rightarrow \\quad b(q-q') = r'-r.$$</p>
<p>Senza perdita di generalità supponiamo $r' \\ge r$ (altrimenti si scambiano i ruoli delle due coppie). Allora</p>
<p>$$0 \\le r' - r \\le (b-1) - 0 = b-1 \\lt b.$$</p>
<p>Ma $r'-r = b(q-q')$ è un multiplo di $b$: l'unico multiplo di $b$ compreso tra $0$ e $b-1$ è $0$, dunque $r'-r = 0$, cioè $r = r'$. Sostituendo si ottiene $b(q-q') = 0$ e, poiché $b \\ne 0$, segue $q-q' = 0$, cioè $q = q'$. Le due coppie coincidono.</p>
<p><strong>Dove serve $b \\ne 0$.</strong> In due punti.</p>
<ul>
  <li><em>Primo:</em> nel passaggio da $b(q-q')=0$ a $q=q'$, che è la legge di annullamento del prodotto applicata con $b \\ne 0$ (se $b=0$ l'equazione $0\\cdot(q-q')=0$ non dà alcuna informazione su $q$).</li>
  <li><em>Secondo:</em> la condizione $0 \\le r \\le b-1$ è soddisfacibile solo se $b \\ge 1$; per $b=0$ chiederebbe $0 \\le r \\le -1$, impossibile. Infatti per $b=0$ il teorema è falso: senza il vincolo sul resto, per $b=0$ si avrebbe $r = n$ e $q$ arbitrario, quindi infinite coppie $(q,n)$; con il vincolo richiesto, invece, non esiste alcuna coppia.</li>
</ul>`
      },

      {
        id: "s09-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Mostra con un esempio numerico che, se si elimina la condizione $0 \\le r \\le b-1$, la coppia $(q,r)$ con $n = bq+r$ non è più unica. Spiega poi perché nella definizione di scrittura posizionale si richiede $b \\gt 1$, discutendo che cosa accade per $b=1$ sia a livello di rappresentazione sia a livello di algoritmo delle divisioni successive.</p>`,
        solution: `<p><strong>Necessità della condizione sul resto.</strong> Prendiamo $n = 17$ e $b = 5$. Si ha</p>
<p>$$17 = 5\\cdot 3 + 2, \\qquad 17 = 5\\cdot 2 + 7, \\qquad 17 = 5\\cdot 1 + 12, \\qquad 17 = 5\\cdot 0 + 17,$$</p>
<p>tutte coppie $(q,r) \\in \\mathbb{N}\\times\\mathbb{N}$ con $n = bq+r$. Fra queste, l'unica che rispetta $0 \\le r \\le b-1 = 4$ è $(q,r) = (3,2)$. Dunque la condizione $0 \\le r \\le b-1$ non è un dettaglio: è esattamente ciò che <strong>seleziona una sola coppia fra le diverse coppie possibili senza il vincolo sul resto</strong>. (Si noti che con $n$ fissato e $b$ positivo le coppie senza vincolo sono in numero finito, perché $q \\le n/b$.)</p>
<p><strong>Perché $b \\gt 1$.</strong> L'alfabeto delle cifre è $\\mathcal{C} = \\{\\chi_0,\\dots,\\chi_{b-1}\\}$ e ha $b$ simboli. Se $b = 1$ l'unica cifra disponibile è $0$, quindi ogni scrittura posizionale vale</p>
<p>$$\\sum_{s=0}^{k} 0\\cdot 1^s = 0:$$</p>
<p>si rappresenterebbe solo il numero $0$ e nessun $n \\ge 1$. Se $b = 0$ l'alfabeto è vuoto e non esiste alcuna scrittura.</p>
<p>Anche l'<strong>algoritmo operativo</strong> richiede $b \\gt 1$. Per $b \\ge 2$ e $q_{i-1} \\ge 1$ la divisione euclidea $q_{i-1} = b\\,q_i + c_i$ con $0 \\le c_i \\le b-1$ dà $q_i \\le q_{i-1}/b \\lt q_{i-1}$: la successione dei quozienti è strettamente decrescente in $\\mathbb{N}$, quindi raggiunge $0$ in un numero finito di passi e l'algoritmo termina. Per $b=1$ la divisione di $n$ per $1$ dà quoziente $n$ e resto $0$: i quozienti non decrescono mai e il procedimento non termina (coerentemente col fatto che la scrittura in base $1$ non esiste).</p>`
      },

      {
        id: "s09-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Sia $b \\gt 1$ e sia $n \\ge 1$. Dimostra che la scrittura di $n$ in base $b$ ha esattamente $k+1$ cifre, cioè $n = [c_k c_{k-1}\\dots c_0]_b$ con $c_k \\ne 0$, se e solo se $b^k \\le n \\le b^{k+1}-1$.</p>`,
        solution: `<p><strong>($\\Rightarrow$)</strong> Sia $n = \\sum_{s=0}^{k} c_s b^s$ con $c_s \\in \\{0,\\dots,b-1\\}$ e $c_k \\ne 0$, dunque $c_k \\ge 1$. Poiché tutti gli addendi sono $\\ge 0$,</p>
<p>$$n \\ge c_k b^k \\ge b^k.$$</p>
<p>Inoltre, maggiorando ogni cifra con $b-1$ e usando la somma geometrica,</p>
<p>$$n \\le \\sum_{s=0}^{k}(b-1)b^s = (b-1)\\cdot\\frac{b^{k+1}-1}{b-1} = b^{k+1}-1.$$</p>
<p>Quindi $b^k \\le n \\le b^{k+1}-1$.</p>
<p><strong>($\\Leftarrow$)</strong> Osserviamo prima che gli intervalli</p>
<p>$$I_k = \\{m \\in \\mathbb{N} : b^k \\le m \\le b^{k+1}-1\\}, \\qquad k \\ge 0,$$</p>
<p>sono a due a due disgiunti e la loro unione è $\\{m \\in \\mathbb{N} : m \\ge 1\\}$: infatti $b^0 = 1$ e l'estremo superiore di $I_k$ è $b^{k+1}-1$, che precede l'estremo inferiore $b^{k+1}$ di $I_{k+1}$, e le potenze $b^k$ superano ogni intero perché $b \\ge 2$.</p>
<p>Sia ora $n \\ge 1$ con $b^k \\le n \\le b^{k+1}-1$. Per il teorema di esistenza e unicità della scrittura in base $b$, $n$ ammette una (sola) scrittura $n = [c_{k'}\\dots c_0]_b$ con $c_{k'} \\ne 0$, per un certo $k' \\ge 0$. Per la parte già dimostrata, $n \\in I_{k'}$. Ma $n \\in I_k$ per ipotesi e gli intervalli sono disgiunti, quindi $k' = k$: la scrittura di $n$ ha esattamente $k+1$ cifre.</p>
<p><em>Conseguenza:</em> il numero di cifre di $n \\ge 1$ in base $b$ è $k+1$, con $k$ l'unico intero tale che $b^k \\le n \\lt b^{k+1}$.</p>`
      },

      {
        id: "s09-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Converti $[2043]_5$ in base $10$ e scrivi poi il risultato in base $7$ e in base $2$.</p>`,
        solution: `<p><strong>Da base 5 a base 10.</strong></p>
<p>$$\\begin{aligned}
[2043]_5 &= 2\\cdot 5^3 + 0\\cdot 5^2 + 4\\cdot 5^1 + 3\\cdot 5^0 \\\\
&= 2\\cdot 125 + 0 + 20 + 3 \\\\
&= 250 + 23 = 273
\\end{aligned}$$</p>
<p><strong>Da base 10 a base 7</strong> (divisioni successive per $7$):</p>
<p>$$\\begin{aligned}
273 \\div 7 &= 39 \\ \\text{ con resto } 0 \\quad (c_0) \\\\
39 \\div 7 &= 5 \\ \\ \\text{ con resto } 4 \\quad (c_1) \\\\
5 \\div 7 &= 0 \\ \\ \\text{ con resto } 5 \\quad (c_2)
\\end{aligned}$$</p>
<p>Leggendo i resti dall'ultimo al primo: $273 = [540]_7$. Verifica: $5\\cdot 49 + 4\\cdot 7 + 0 = 245 + 28 = 273$.</p>
<p><strong>Da base 10 a base 2</strong> (divisioni successive per $2$):</p>
<p>$$\\begin{aligned}
273 \\div 2 &= 136 \\ \\text{ r } 1 \\\\
136 \\div 2 &= 68 \\ \\ \\text{ r } 0 \\\\
68 \\div 2 &= 34 \\ \\ \\text{ r } 0 \\\\
34 \\div 2 &= 17 \\ \\ \\text{ r } 0 \\\\
17 \\div 2 &= 8 \\ \\ \\ \\text{ r } 1 \\\\
8 \\div 2 &= 4 \\ \\ \\ \\text{ r } 0 \\\\
4 \\div 2 &= 2 \\ \\ \\ \\text{ r } 0 \\\\
2 \\div 2 &= 1 \\ \\ \\ \\text{ r } 0 \\\\
1 \\div 2 &= 0 \\ \\ \\ \\text{ r } 1
\\end{aligned}$$</p>
<p>Quindi $273 = [100010001]_2$. Verifica: $2^8 + 2^4 + 2^0 = 256 + 16 + 1 = 273$.</p>`
      },

      {
        id: "s09-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Lavorando direttamente in base $7$, esegui le operazioni $[3456]_7 + [654]_7$ e $[245]_7 \\cdot [13]_7$, e verifica i risultati convertendo tutto in base $10$.</p>`,
        solution: `<p><strong>Addizione $[3456]_7 + [654]_7$.</strong> Si incolonna e si riporta ogni volta che la somma raggiunge $7$:</p>
<p>$$\\begin{aligned}
\\text{unità:} \\quad & 6+4 = 10 = 1\\cdot 7 + 3 \\ \\Rightarrow \\ \\text{scrivo } 3, \\text{ riporto } 1 \\\\
\\text{decine:} \\quad & 5+5+1 = 11 = 1\\cdot 7 + 4 \\ \\Rightarrow \\ \\text{scrivo } 4, \\text{ riporto } 1 \\\\
\\text{centinaia:} \\quad & 4+6+1 = 11 = 1\\cdot 7 + 4 \\ \\Rightarrow \\ \\text{scrivo } 4, \\text{ riporto } 1 \\\\
\\text{migliaia:} \\quad & 3+1 = 4 \\ \\Rightarrow \\ \\text{scrivo } 4
\\end{aligned}$$</p>
<p>Quindi $[3456]_7 + [654]_7 = [4443]_7$.</p>
<p><em>Verifica.</em> $[3456]_7 = 3\\cdot 343 + 4\\cdot 49 + 5\\cdot 7 + 6 = 1029 + 196 + 35 + 6 = 1266$ e $[654]_7 = 6\\cdot 49 + 5\\cdot 7 + 4 = 294 + 35 + 4 = 333$; dunque $1266 + 333 = 1599$, e $[4443]_7 = 4\\cdot 343 + 4\\cdot 49 + 4\\cdot 7 + 3 = 1372 + 196 + 28 + 3 = 1599$.</p>
<p><strong>Moltiplicazione $[245]_7 \\cdot [13]_7$.</strong> Primo prodotto parziale, $[245]_7 \\cdot 3$:</p>
<p>$$\\begin{aligned}
& 5\\cdot 3 = 15 = 2\\cdot 7 + 1 \\ \\Rightarrow \\ \\text{scrivo } 1, \\text{ riporto } 2 \\\\
& 4\\cdot 3 + 2 = 14 = 2\\cdot 7 + 0 \\ \\Rightarrow \\ \\text{scrivo } 0, \\text{ riporto } 2 \\\\
& 2\\cdot 3 + 2 = 8 = 1\\cdot 7 + 1 \\ \\Rightarrow \\ \\text{scrivo } 1, \\text{ riporto } 1 \\\\
& \\text{resta il riporto } 1
\\end{aligned}$$</p>
<p>Dunque $[245]_7 \\cdot 3 = [1101]_7$. Secondo prodotto parziale: $[245]_7 \\cdot [10]_7 = [2450]_7$ (moltiplicare per la base significa aggiungere uno zero).</p>
<p>Somma in base $7$: unità $1+0=1$; decine $0+5=5$; centinaia $1+4=5$; migliaia $1+2=3$. Quindi</p>
<p>$$[245]_7 \\cdot [13]_7 = [3551]_7.$$</p>
<p><em>Verifica.</em> $[245]_7 = 2\\cdot 49 + 4\\cdot 7 + 5 = 131$, $[13]_7 = 1\\cdot 7 + 3 = 10$, e $131\\cdot 10 = 1310$; inoltre $[3551]_7 = 3\\cdot 343 + 5\\cdot 49 + 5\\cdot 7 + 1 = 1029 + 245 + 35 + 1 = 1310$.</p>`
      },

      {
        id: "s09-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Sia $b \\gt 1$ e sia $n = [c_k c_{k-1}\\dots c_0]_b$. Dimostra che $n$ e la somma delle sue cifre $S = c_0 + c_1 + \\dots + c_k$ hanno lo stesso resto nella divisione per $b-1$; dedurne che $(b-1) \\mid n$ se e solo se $(b-1) \\mid S$. Applica poi il criterio a $n = [3456]_7$ (caso $b-1 = 6$) e ritrova il criterio di divisibilità per $9$ in base $10$.</p>`,
        solution: `<p><strong>Dimostrazione.</strong> Per definizione $n = \\sum_{s=0}^{k} c_s b^s$, dunque</p>
<p>$$n - S = \\sum_{s=0}^{k} c_s\\,(b^s - 1).$$</p>
<p>Per $s = 0$ si ha $b^0 - 1 = 0$; per $s \\ge 1$ vale l'identità della somma geometrica</p>
<p>$$b^s - 1 = (b-1)\\big(b^{s-1} + b^{s-2} + \\dots + b + 1\\big).$$</p>
<p>Quindi ogni addendo è un multiplo non negativo di $b-1$ e, posto $m = \\sum_{s=1}^{k} c_s\\big(b^{s-1} + \\dots + 1\\big) \\in \\mathbb{N}$, si ha $n - S = (b-1)m$, cioè $n = S + (b-1)m$ con $n \\ge S$.</p>
<p>Applichiamo ora la divisione euclidea di $S$ per $b-1$ (lecito perché $b-1 \\in \\mathbb{N}_+$): esistono unici $t,\\rho \\in \\mathbb{N}$ con $S = (b-1)t + \\rho$ e $0 \\le \\rho \\le b-2$. Sostituendo:</p>
<p>$$n = (b-1)t + \\rho + (b-1)m = (b-1)(t+m) + \\rho, \\qquad 0 \\le \\rho \\le b-2.$$</p>
<p>Questa è una scrittura di $n$ nella forma richiesta dal teorema di divisione euclidea con divisore $b-1$; per l'<strong>unicità</strong> del quoziente e del resto, $\\rho$ è esattamente il resto della divisione di $n$ per $b-1$. Dunque $n$ e $S$ hanno lo stesso resto modulo $b-1$. In particolare</p>
<p>$$(b-1) \\mid n \\iff \\rho = 0 \\iff (b-1) \\mid S.$$</p>
<p><strong>Applicazione a $[3456]_7$.</strong> Qui $b = 7$, $b-1 = 6$ e $S = 3+4+5+6 = 18 = 6\\cdot 3$, dunque $6 \\mid S$ e per il criterio $6 \\mid n$. Verifica diretta: $[3456]_7 = 3\\cdot 343 + 4\\cdot 49 + 5\\cdot 7 + 6 = 1266 = 6\\cdot 211$, con resto $0$.</p>
<p><strong>Caso $b = 10$.</strong> Con $b-1 = 9$ l'enunciato dice che un numero scritto in base $10$ ha lo stesso resto della somma delle sue cifre nella divisione per $9$; in particolare è divisibile per $9$ se e solo se lo è la somma delle sue cifre. Per esempio $n = 35071$ ha $S = 3+5+0+7+1 = 16$, che diviso per $9$ dà resto $7$: infatti $35071 = 9\\cdot 3896 + 7$.</p>`
      },

      {
        id: "s09-oral-box",
        type: "oral_box",
        title: "Come viene chiesto all'orale",
        icon: "🎤",
        content: `<p>Le richieste tipiche su questa lezione sono tre:</p>
<ul>
  <li><strong>Enunciare e dimostrare la divisione euclidea.</strong> L'unicità va saputa per filo e per segno, compreso il punto in cui si usa $b \\ne 0$. Per l'esistenza basta uno dei due metodi, ma saperli entrambi è un vantaggio.</li>
  <li><strong>Spiegare perché la scrittura posizionale funziona.</strong> Cioè: come si deduce l'algoritmo delle divisioni successive dall'unicità della divisione euclidea.</li>
  <li><strong>Un calcolo alla lavagna</strong>: una conversione di base o un'operazione in colonna in base $b \\ne 10$.</li>
</ul>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Enuncia il teorema della divisione euclidea in $\\mathbb{N}$.",
        back: "Siano $n \\in \\mathbb{N}$ e $b \\in \\mathbb{N}_+$. Allora esistono e sono unici $q, r \\in \\mathbb{N}$ tali che $n = bq + r$ con $0 \\le r \\le b-1$. Il numero $q$ è il quoziente, $r$ è il resto; se $r = 0$ si dice che $b$ divide $n$ e si scrive $b \\mid n$. Ipotesi essenziale: $b$ strettamente positivo."
      },
      {
        type: "dimostrazione",
        front: "Dimostra l'unicità della coppia $(q,r)$ nella divisione euclidea.",
        back: "Siano $(q,r)$ e $(q',r')$ due coppie valide. Da $bq+r = bq'+r'$ segue $b(q-q') = r'-r$. Assumendo $r' \\ge r$ si ha $0 \\le r'-r \\le b-1 \\lt b$. Ma $r'-r$ è multiplo di $b$ e l'unico multiplo non negativo di $b$ strettamente minore di $b$ è $0$: quindi $r = r'$. Allora $b(q-q') = 0$ e, poiché $b \\ne 0$, si conclude $q = q'$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra l'esistenza di $(q,r)$ usando il principio del minimo.",
        back: "Sia $T$ l'insieme degli $n$ per cui la coppia non esiste, e per assurdo $T \\ne \\emptyset$: sia $n_0 = \\min T$. Ogni $n \\lt b$ si scrive $n = b\\cdot 0 + n$ con $0 \\le n \\le b-1$, quindi $n_0 \\ge b$. Allora $n' = n_0 - b \\in \\mathbb{N}$ e $n' \\lt n_0$, dunque $n' \\notin T$: esistono $q',r'$ con $n' = bq'+r'$, $0 \\le r' \\le b-1$. Ma allora $n_0 = b(q'+1) + r'$, cioè $n_0 \\notin T$: assurdo. Quindi $T = \\emptyset$."
      },
      {
        type: "dimostrazione",
        front: "Come si fa il passo induttivo nella dimostrazione dell'esistenza per induzione su $n$?",
        back: "Da $n = bq+r$ con $0 \\le r \\le b-1$ si scrive $n+1 = bq + (r+1)$ e si distinguono due casi. Se $r+1 \\lt b$ (cioè $r \\le b-2$) si prende $q' = q$, $r' = r+1$. Se $r+1 = b$ (cioè $r = b-1$) allora $n+1 = bq + b = b(q+1) + 0$, quindi $q' = q+1$, $r' = 0$. In entrambi i casi le condizioni sono soddisfatte."
      },
      {
        type: "formula",
        front: "Che numero rappresenta la scrittura posizionale $[c_k c_{k-1}\\dots c_0]_b$?",
        back: "Rappresenta $n = \\sum_{s=0}^{k} c_s \\cdot b^s$, con $c_i$ cifre nell'insieme $\\{0,1,\\dots,b-1\\}$ e $b \\gt 1$. La posizione (contata da destra a partire da $0$) determina l'esponente della base."
      },
      {
        type: "domanda",
        front: "Descrivi l'algoritmo per convertire $n$ in base $b$ e spiega perché funziona.",
        back: "Si divide $n$ per $b$: il resto è $c_0$. Si divide il quoziente $q_0$ per $b$: il resto è $c_1$. Si prosegue finché il quoziente è $0$; le cifre sono i resti letti in ordine inverso. Funziona perché $n = (c_k b^{k-1} + \\dots + c_1)b + c_0$ con $0 \\le c_0 \\le b-1$: per l'<strong>unicità</strong> della divisione euclidea $c_0$ è necessariamente il resto di $n$ diviso $b$, e si itera sul quoziente."
      },
      {
        type: "tranello",
        front: "Perché nella definizione di scrittura posizionale si richiede $b \\gt 1$?",
        back: "Con $b = 1$ l'unica cifra disponibile è $0$, quindi ogni scrittura vale $\\sum_s 0\\cdot 1^s = 0$: si rappresenterebbe solo lo zero. Inoltre l'algoritmo non terminerebbe: dividendo per $1$ il quoziente resta $n$ e i quozienti non decrescono. Con $b = 0$ l'alfabeto delle cifre è vuoto. Serve $b \\ge 2$ perché i quozienti decrescano strettamente."
      },
      {
        type: "tranello",
        front: "Che cosa succede se nella divisione euclidea si elimina la condizione $0 \\le r \\le b-1$?",
        back: "Si perde l'unicità. Per $n = 17$, $b = 5$: $17 = 5\\cdot 3 + 2 = 5\\cdot 2 + 7 = 5\\cdot 1 + 12 = 5\\cdot 0 + 17$. La condizione sul resto è precisamente ciò che seleziona una sola coppia fra quelle possibili senza vincolo, cioè $(3,2)$."
      },
      {
        type: "domanda",
        front: "Quali numeri si scrivono in base $b$ con al più $N$ cifre, e perché?",
        back: "Esattamente quelli da $0$ a $b^N - 1$. Il minimo è $0$ (tutte cifre nulle), il massimo è $\\sum_{i=0}^{N-1}(b-1)b^i = (b-1)\\frac{b^N-1}{b-1} = b^N-1$. Le stringhe di esattamente $N$ cifre sono $b^N$ e, per l'unicità della scrittura, l'applicazione stringa $\\mapsto$ valore è iniettiva in un insieme di $b^N$ elementi: iniettiva tra insiemi finiti equipotenti $\\Rightarrow$ surgettiva. Attenzione: l'unicità è fra stringhe di lunghezza esattamente $N$ (zeri iniziali ammessi); togliendo gli zeri iniziali si ottiene la rappresentazione canonica."
      },
      {
        type: "domanda",
        front: "Come si converte rapidamente tra base 2 e base 8 senza passare dalla base 10?",
        back: "Poiché $8 = 2^3$, si raggruppano le cifre binarie a tre a tre partendo da destra e ogni gruppo diventa una cifra ottale. Esempio: $[11010111]_2 = [\\,011\\,010\\,111\\,]_2 = [327]_8$. Al contrario, ogni cifra ottale si espande nei suoi tre bit: $[561]_8 = [101110001]_2$."
      },
      {
        type: "tranello",
        front: "Le tabelle di somma e prodotto delle cifre in base 3 sono operazioni modulo 3?",
        back: "No. Sono tabelle di somma e prodotto delle cifre con i <strong>risultati scritti in base 3</strong>: per esempio $1+2 = [10]_3$ e $2\\cdot 2 = [11]_3$. I risultati possono richiedere due cifre e generare riporti, quindi non appartengono all'insieme delle cifre $\\{0,1,2\\}$: non si tratta di operazioni interne a quell'insieme né di aritmetica modulare."
      },
      {
        type: "tranello",
        front: "Che differenza c'è tra i due usi del simbolo $\\mid$?",
        back: "In $b \\mid n$ significa \"$b$ divide $n$\", cioè il resto della divisione di $n$ per $b$ è zero. In scritture come $\\{x \\mid P(x)\\}$ significa invece \"tale che\". Sono notazioni omografe ma indipendenti: è il contesto a chiarire quale si sta usando."
      }
    ]
};

