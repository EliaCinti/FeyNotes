const LESSON = {
    id: "L02", date: "Lezione 2 — 9 Set 2026",
    title: "Equazioni e Disequazioni: Concetti di Base",
    abstract: "Richiami di algebra elementare, equazioni di primo e secondo grado, discriminante, campo di esistenza, equazioni irrazionali e fratte, disequazioni di primo e secondo grado, disequazioni irrazionali con discussione del segno, divisione tra polinomi e sistemi.",

    sections: [
      {
        id: "s01-richiami-algebra",
        type: "section",
        title: "Richiami di Algebra Elementare",
        icon: "🧮",
        content: `<p>Prima di entrare nel vivo dell'argomento, è utile tenere a mente alcune regole fondamentali che useremo costantemente.</p>`,
        subsections: [
          {
            subtitle: "Regole dei segni",
            content: `<p>Le regole dei segni per la moltiplicazione (e la divisione) sono le seguenti:</p>
            <ul>
              <li>Un numero positivo moltiplicato per un numero positivo dà un risultato positivo: $$(+) \\cdot (+) = (+)$$</li>
              <li>Un numero positivo moltiplicato per un numero negativo dà un risultato negativo: $$(+) \\cdot (-) = (-)$$</li>
              <li>Un numero negativo moltiplicato per un numero negativo dà un risultato positivo: $$(-) \\cdot (-) = (+)$$</li>
            </ul>`
          },
          {
            subtitle: "Divisione per zero",
            content: `<p>In matematica, la divisione per zero <strong>non è definita</strong>. Non esiste nessun numero che, moltiplicato per zero, possa restituire un valore diverso da zero.</p>
            <p>$$\\frac{a}{0} \\rightarrow \\text{non definita (o impossibile)}$$</p>
            <p>In informatica, nell'aritmetica a virgola mobile (standard IEEE 754), $a/0$ con $a \\neq 0$ restituisce $\\pm\\infty$, mentre è la forma $0/0$ a restituire <code>NaN</code> (Not a Number).</p>`
          },
          {
            subtitle: "Legge di annullamento del prodotto",
            content: `<p>Un prodotto tra due o più fattori è uguale a zero <strong>se e solo se</strong> almeno uno dei fattori è uguale a zero.</p>
            <p>$$a \\cdot b = 0 \\iff a=0 \\text{ oppure } b=0$$</p>`
          },
          {
            subtitle: "Condizione di esistenza della radice quadrata",
            content: `<p>Nel campo dei numeri reali $\\mathbb{R}$, la radice quadrata di un numero $a$ è definita se e solo se $a$ è maggiore o uguale a zero.</p>
            <p>$$\\sqrt{a} \\text{ è definita in } \\mathbb{R} \\iff a \\ge 0$$</p>
            <p>In questa lezione non tratteremo i numeri complessi.</p>`
          },
          {
            subtitle: "Prodotti notevoli",
            content: `<p>Ricordiamo due identità algebriche molto utili:</p>
            <p>Quadrato di un binomio: $$(a-b)^2 = a^2 - 2ab + b^2$$</p>
            <p>Differenza di quadrati (o somma per differenza): $$a^2 - b^2 = (a+b)(a-b)$$</p>`
          }
        ],
        formulas: [
          { label: "Annullamento del prodotto", latex: "a \\cdot b = 0 \\iff a=0 \\ \\text{oppure} \\ b=0" },
          { label: "Esistenza della radice", latex: "\\sqrt{a} \\ \\text{definita in} \\ \\mathbb{R} \\iff a \\ge 0" },
          { label: "Quadrato di binomio", latex: "(a-b)^2 = a^2 - 2ab + b^2" },
          { label: "Differenza di quadrati", latex: "a^2 - b^2 = (a+b)(a-b)" }
        ]
      },

      {
        id: "s02-equazioni-primo-grado",
        type: "section",
        title: "Equazioni di Primo Grado",
        icon: "📐",
        content: `<p>Un'equazione è un'uguaglianza algebrica tra due espressioni contenenti una o più incognite. <strong>Risolvere un'equazione</strong> significa trovare i valori dell'incognita che rendono vera l'uguaglianza.</p>`,
        subsections: [
          {
            subtitle: "Due strade equivalenti per isolare l'incognita",
            content: `<p><strong>Principio di equivalenza</strong>: si somma o si sottrae la stessa quantità da entrambi i membri, mantenendo l'uguaglianza.</p>
            <p><strong>Regola del trasporto</strong>: si "sposta" un termine da un membro all'altro cambiandogli il segno. È una conseguenza diretta del principio di equivalenza.</p>`
          }
        ]
      },

      {
        id: "s03-es-lineare-semplice",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione lineare semplice",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione: $$x + 2 = 5$$</p>`,
        steps: [
          `Questa è un'equazione di <strong>primo grado</strong>, perché l'esponente massimo dell'incognita $x$ è 1.`,
          `Intuitivamente, cerchiamo quel numero che, sommato a 2, dà 5. Questo numero è 3.`,
          `<strong>Principio di equivalenza</strong>: sottraiamo la stessa quantità (in questo caso 2) da entrambi i membri: $$x + 2 - 2 = 5 - 2 \\Rightarrow x = 3$$`,
          `<strong>Regola del trasporto</strong>: "spostiamo" il termine noto $(+2)$ dal primo al secondo membro, cambiandogli il segno: $$x = 5 - 2 \\Rightarrow x = 3$$`
        ]
      },

      {
        id: "s04-es-termini-simili",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione con termini simili",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione: $$3x - 2x + 5 - 8 = 0$$</p>`,
        steps: [
          `Nel calcolo simbolico, possiamo sommare e sottrarre tra loro solo i termini <strong>omogenei</strong>, cioè i termini che hanno la stessa parte letterale (in questo caso la $x$) e i termini noti (i numeri senza incognita).`,
          `Sommiamo i termini con la $x$: $$3x - 2x = (3-2)x = 1x = x$$`,
          `Sommiamo i termini noti: $$5 - 8 = -3$$`,
          `L'equazione semplificata diventa: $$x - 3 = 0$$`,
          `Risolvendo, otteniamo: $$x = 3$$`
        ]
      },

      {
        id: "s05-alert-omogenei",
        type: "alert_box",
        title: "Attenzione ai termini non omogenei",
        icon: "⚠️",
        content: `<p>Attenzione a non sommare termini non omogenei. Per esempio, in un'espressione come $3y - 2x$, <strong>non possiamo</strong> eseguire la sottrazione perché le variabili sono diverse. L'espressione rimane così com'è.</p>
        <p>Per risolvere un sistema con due incognite, avremmo bisogno di almeno <strong>due equazioni distinte</strong>.</p>`
      },

      {
        id: "s06-equazioni-secondo-grado",
        type: "section",
        title: "Equazioni di Secondo Grado",
        icon: "🎯",
        content: `<p>Un'equazione è di secondo grado se l'esponente massimo dell'incognita è 2. La forma generale (o <em>forma normale</em>) è</p>
        <p>$$ax^2 + bx + c = 0, \\qquad \\text{con } a \\neq 0.$$</p>
        <p>Se $b=0$ l'equazione si dice <em>pura</em> e si risolve direttamente estraendo la radice quadrata; se invece tutti i coefficienti sono diversi da zero l'equazione si dice <em>completa</em> e conviene usare la formula risolutiva.</p>
        <p>Se $a=0$, l'equazione si riduce a $bx+c=0$, che è un'equazione di primo grado: la condizione $a \\neq 0$ è quindi ciò che rende l'equazione davvero di secondo grado.</p>`,
        formulas: [
          { label: "Forma normale", latex: "ax^2 + bx + c = 0, \\quad a \\neq 0" }
        ]
      },

      {
        id: "s07-es-pura",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione di secondo grado pura",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione: $$x^2 - 9 = 0$$</p>`,
        steps: [
          `Isoliamo il termine con l'incognita al quadrato: $$x^2 = 9$$`,
          `Per trovare $x$, dobbiamo estrarre la radice quadrata di entrambi i membri: $$\\sqrt{x^2} = \\sqrt{9}$$`,
          `<strong>Attenzione</strong>: quando si estrae una radice di indice pari (come la radice quadrata), bisogna considerare <strong>sia la soluzione positiva sia quella negativa</strong>. Questo perché sia $(+3)^2$ sia $(-3)^2$ danno come risultato 9. $$x = \\pm 3$$`,
          `L'equazione ha quindi due soluzioni: $x_1 = 3$ e $x_2 = -3$.`
        ]
      },

      {
        id: "s08-interpretazione-parabola",
        type: "note_box",
        title: "Interpretazione grafica",
        icon: "📈",
        content: `<p>L'espressione $y = x^2 - 9$ rappresenta una <strong>parabola</strong> nel piano cartesiano. Le soluzioni dell'equazione $x^2 - 9 = 0$ corrispondono ai punti in cui la parabola interseca l'asse delle ascisse (l'asse $x$), ovvero i punti in cui $y=0$. Questi punti sono detti "radici" o "zeri" dell'equazione.</p>
        <figure class="figura" data-id="precorso_lez02a_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 101.76 364 
L 101.76 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="mb174d3854c" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mb174d3854c" x="101.76" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(96.5625 250.202769) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-14" d="M 320 2035 
L 320 1523 
L 2170 1523 
L 2170 2035 
L 320 2035 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1b" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 158.72 364 
L 158.72 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#mb174d3854c" x="158.72" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(153.5225 250.202769) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1a" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 215.68 364 
L 215.68 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#mb174d3854c" x="215.68" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(210.4825 250.202769) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-19" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#mb174d3854c" x="329.6" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.542344 250.202769) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 443.52 364 
L 443.52 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#mb174d3854c" x="443.52" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(440.462344 250.202769) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 500.48 364 
L 500.48 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#mb174d3854c" x="500.48" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(497.422344 250.202769) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="xtick_7">
     <g id="line2d_13">
      <path d="M 557.44 364 
L 557.44 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#mb174d3854c" x="557.44" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(554.382344 250.202769) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_15">
      <path d="M 44.8 350.923077 
L 614.4 350.923077 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <defs>
       <path id="mee82c1c3a8" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="350.923077" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- -9 -->
      <g style="fill: currentColor" transform="translate(312.705 356.159077) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-20" d="M 858 1094 
L 314 1094 
Q 365 506 742 218 
Q 1120 -70 1690 -70 
Q 2515 -70 2889 560 
Q 3264 1190 3264 2368 
Q 3264 3014 3139 3433 
Q 3014 3853 2803 4096 
Q 2592 4339 2310 4438 
Q 2029 4538 1709 4538 
Q 1382 4538 1107 4429 
Q 832 4320 633 4125 
Q 435 3930 326 3658 
Q 218 3386 218 3059 
Q 218 2726 310 2444 
Q 403 2163 585 1964 
Q 768 1766 1037 1654 
Q 1306 1542 1651 1542 
Q 1984 1542 2265 1712 
Q 2547 1882 2701 2170 
L 2714 2157 
Q 2688 1267 2438 835 
Q 2189 403 1690 403 
Q 1363 403 1126 582 
Q 890 762 858 1094 
z
M 2618 3021 
Q 2618 2822 2554 2640 
Q 2490 2458 2368 2320 
Q 2246 2182 2073 2102 
Q 1901 2022 1690 2022 
Q 1491 2022 1328 2102 
Q 1165 2182 1046 2316 
Q 928 2451 861 2624 
Q 794 2797 794 2982 
Q 794 3194 842 3386 
Q 890 3578 995 3728 
Q 1101 3878 1270 3968 
Q 1440 4058 1683 4058 
Q 1914 4058 2086 3974 
Q 2259 3891 2377 3747 
Q 2496 3603 2557 3417 
Q 2618 3232 2618 3021 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-20" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_17">
      <path d="M 44.8 337.846154 
L 614.4 337.846154 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="337.846154" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- -8 -->
      <g style="fill: currentColor" transform="translate(312.705 343.082154) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1f" d="M 992 3360 
Q 992 3533 1056 3661 
Q 1120 3789 1225 3878 
Q 1331 3968 1478 4013 
Q 1626 4058 1786 4058 
Q 2118 4058 2332 3882 
Q 2547 3706 2547 3360 
Q 2547 3014 2336 2822 
Q 2125 2630 1798 2630 
Q 1632 2630 1485 2675 
Q 1338 2720 1229 2809 
Q 1120 2899 1056 3036 
Q 992 3174 992 3360 
z
M 416 3379 
Q 416 3072 589 2813 
Q 762 2554 1050 2438 
Q 666 2304 461 2006 
Q 256 1709 256 1306 
Q 256 960 374 701 
Q 493 442 701 269 
Q 909 96 1190 13 
Q 1472 -70 1798 -70 
Q 2112 -70 2387 19 
Q 2662 109 2864 285 
Q 3066 461 3184 717 
Q 3302 973 3302 1306 
Q 3302 1728 3104 2019 
Q 2906 2310 2496 2438 
Q 2784 2566 2953 2819 
Q 3123 3072 3123 3379 
Q 3123 3597 3046 3805 
Q 2970 4013 2806 4176 
Q 2643 4339 2380 4438 
Q 2118 4538 1747 4538 
Q 1485 4538 1245 4461 
Q 1005 4384 819 4237 
Q 634 4090 525 3875 
Q 416 3661 416 3379 
z
M 832 1280 
Q 832 1478 905 1638 
Q 979 1798 1110 1913 
Q 1242 2029 1418 2089 
Q 1594 2150 1792 2150 
Q 1984 2150 2153 2083 
Q 2323 2016 2451 1901 
Q 2579 1786 2652 1629 
Q 2726 1472 2726 1286 
Q 2726 1094 2659 934 
Q 2592 774 2467 656 
Q 2342 538 2172 470 
Q 2003 403 1798 403 
Q 1376 403 1104 636 
Q 832 870 832 1280 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1f" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_19">
      <path d="M 44.8 285.538462 
L 614.4 285.538462 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="285.538462" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(312.705 290.774462) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1b" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_21">
      <path d="M 44.8 233.230769 
L 614.4 233.230769 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.984688 238.466769) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_23">
      <path d="M 44.8 180.923077 
L 614.4 180.923077 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_24">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="180.923077" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_12">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(316.984688 186.159077) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="ytick_6">
     <g id="line2d_25">
      <path d="M 44.8 128.615385 
L 614.4 128.615385 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_26">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="128.615385" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_13">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(316.984688 133.851385) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1f"/>
      </g>
     </g>
    </g>
    <g id="ytick_7">
     <g id="line2d_27">
      <path d="M 44.8 76.307692 
L 614.4 76.307692 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_28">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="76.307692" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_14">
      <!-- 12 -->
      <g style="fill: currentColor" transform="translate(310.869375 81.543692) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-19" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_8">
     <g id="line2d_29">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_30">
      <g>
       <use xlink:href="#mee82c1c3a8" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_15">
      <!-- 16 -->
      <g style="fill: currentColor" transform="translate(310.869375 29.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-1d" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_31">
    <defs>
     <path id="mfc4bbe81f1" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mfc4bbe81f1" x="614.4" y="233.230769" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_32">
    <defs>
     <path id="m99a89ccf9a" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m99a89ccf9a" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_33">
    <path d="M 44.8 24 
L 52.876063 42.278207 
L 60.952127 60.030646 
L 69.02819 77.257315 
L 77.104254 93.958215 
L 85.180317 110.133346 
L 92.781318 124.876712 
L 100.382319 139.154344 
L 107.983319 152.966243 
L 115.58432 166.312409 
L 123.185321 179.192842 
L 130.311259 190.845267 
L 137.437198 202.088357 
L 144.563136 212.922111 
L 151.689074 223.346529 
L 158.815013 233.361611 
L 165.465888 242.339709 
L 172.116764 250.961231 
L 178.76764 259.226175 
L 185.418515 267.134543 
L 192.069391 274.686333 
L 198.720267 281.881547 
L 204.89608 288.243534 
L 211.071893 294.298065 
L 217.247706 300.04514 
L 223.42352 305.484758 
L 229.599333 310.616919 
L 235.775146 315.441623 
L 241.475897 319.622306 
L 247.176647 323.541014 
L 252.877398 327.197747 
L 258.578148 330.592505 
L 264.278899 333.725289 
L 269.97965 336.596097 
L 275.6804 339.20493 
L 281.381151 341.551789 
L 286.606839 343.472938 
L 291.832527 345.173956 
L 297.058215 346.654842 
L 302.283903 347.915596 
L 307.509591 348.956218 
L 312.735279 349.776709 
L 317.960967 350.377068 
L 323.186656 350.757296 
L 328.412344 350.917392 
L 333.638032 350.857356 
L 338.86372 350.577188 
L 344.089408 350.076889 
L 349.315096 349.356458 
L 354.540784 348.415895 
L 359.766472 347.255201 
L 364.99216 345.874375 
L 370.217848 344.273417 
L 375.443536 342.452328 
L 380.669224 340.411106 
L 386.369975 337.933261 
L 392.070726 335.19344 
L 397.771476 332.191644 
L 403.472227 328.927873 
L 409.172977 325.402128 
L 414.873728 321.614407 
L 420.574479 317.564712 
L 426.275229 313.253041 
L 431.97598 308.679396 
L 438.151793 303.428982 
L 444.327606 297.871112 
L 450.50342 292.005785 
L 456.679233 285.833001 
L 462.855046 279.352761 
L 469.030859 272.565064 
L 475.681735 264.911394 
L 482.332611 256.901148 
L 488.983486 248.534324 
L 495.634362 239.810924 
L 502.285238 230.730946 
L 508.936113 221.294392 
L 516.062052 210.788107 
L 523.18799 199.872486 
L 530.313928 188.547529 
L 537.439867 176.813236 
L 544.565805 164.669608 
L 552.166806 151.265225 
L 559.767807 137.39511 
L 567.368807 123.059261 
L 574.969808 108.257679 
L 582.570809 92.990363 
L 590.646872 76.258536 
L 598.722936 59.000939 
L 606.798999 41.217573 
L 614.4 24 
L 614.4 24 
" clip-path="url(#p9261fc175a)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 233.230769 
L 614.4 233.230769 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_16">
    <g style="fill: currentColor" transform="translate(164.72 227.230769) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
      <path id="DejaVuSans-15" d="M 1228 531 
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
      <path id="DejaVuSans-20" d="M 678 2906 
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
      <path id="DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-16" d="M 2597 2516 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-15" transform="translate(59.179688 -14.218701) scale(0.7)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(125.932617 0.78125)"/>
     <use xlink:href="#DejaVuSans-c9c" transform="translate(229.204102 0.78125)"/>
     <use xlink:href="#DejaVuSans-16" transform="translate(312.993164 0.78125)"/>
    </g>
   </g>
   <g id="text_17">
    <g style="fill: currentColor" transform="translate(506.48 227.230769) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-14" d="M 794 531 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-14" transform="translate(59.179688 -14.218701) scale(0.7)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(125.932617 0.78125)"/>
     <use xlink:href="#DejaVuSans-16" transform="translate(229.204102 0.78125)"/>
    </g>
   </g>
   <g id="text_18">
    <!-- Vertice -->
    <g style="fill: currentColor" transform="translate(335.6 344.923077) scale(0.11 -0.11)">
     <defs>
      <path id="HelveticaNeue-3d" d="M 2298 0 
L 3923 4570 
L 3290 4570 
L 1971 608 
L 1958 608 
L 653 4570 
L 0 4570 
L 1606 0 
L 2298 0 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-4c" d="M 2707 1971 
L 806 1971 
Q 819 2163 889 2332 
Q 960 2502 1081 2630 
Q 1203 2758 1372 2832 
Q 1542 2906 1754 2906 
Q 1958 2906 2128 2832 
Q 2298 2758 2422 2633 
Q 2547 2509 2620 2336 
Q 2694 2163 2707 1971 
z
M 3232 1050 
L 2694 1050 
Q 2624 723 2403 563 
Q 2182 403 1837 403 
Q 1568 403 1369 492 
Q 1171 582 1043 732 
Q 915 883 857 1078 
Q 800 1274 806 1491 
L 3283 1491 
Q 3296 1792 3229 2125 
Q 3162 2458 2986 2739 
Q 2810 3021 2518 3203 
Q 2227 3386 1786 3386 
Q 1446 3386 1161 3258 
Q 877 3130 669 2899 
Q 461 2669 345 2355 
Q 230 2042 230 1664 
Q 243 1286 342 966 
Q 442 646 640 416 
Q 838 186 1129 58 
Q 1421 -70 1818 -70 
Q 2381 -70 2752 211 
Q 3123 493 3232 1050 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-59" d="M 390 3309 
L 390 0 
L 934 0 
L 934 1472 
Q 934 1792 998 2038 
Q 1062 2285 1203 2457 
Q 1344 2630 1574 2720 
Q 1805 2810 2131 2810 
L 2131 3386 
Q 1690 3398 1402 3206 
Q 1114 3014 915 2611 
L 902 2611 
L 902 3309 
L 390 3309 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-5b" d="M 1165 3309 
L 1165 4301 
L 621 4301 
L 621 3309 
L 58 3309 
L 58 2829 
L 621 2829 
L 621 723 
Q 621 493 665 352 
Q 710 211 803 134 
Q 896 58 1046 29 
Q 1197 0 1408 0 
L 1824 0 
L 1824 480 
L 1574 480 
Q 1446 480 1366 489 
Q 1286 499 1241 531 
Q 1197 563 1181 620 
Q 1165 678 1165 774 
L 1165 2829 
L 1824 2829 
L 1824 3309 
L 1165 3309 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-50" d="M 986 3904 
L 986 4570 
L 442 4570 
L 442 3904 
L 986 3904 
z
M 442 3309 
L 442 0 
L 986 0 
L 986 3309 
L 442 3309 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-4a" d="M 2656 2246 
L 3219 2246 
Q 3187 2541 3065 2755 
Q 2944 2970 2755 3110 
Q 2566 3251 2320 3318 
Q 2074 3386 1792 3386 
Q 1402 3386 1107 3248 
Q 813 3110 617 2870 
Q 422 2630 326 2307 
Q 230 1984 230 1613 
Q 230 1242 329 931 
Q 429 621 624 397 
Q 819 173 1110 51 
Q 1402 -70 1779 -70 
Q 2413 -70 2781 262 
Q 3149 595 3238 1210 
L 2682 1210 
Q 2630 826 2403 614 
Q 2176 403 1773 403 
Q 1517 403 1331 505 
Q 1146 608 1030 777 
Q 915 947 860 1164 
Q 806 1382 806 1613 
Q 806 1862 857 2096 
Q 909 2330 1027 2509 
Q 1146 2688 1344 2797 
Q 1542 2906 1837 2906 
Q 2182 2906 2387 2733 
Q 2592 2560 2656 2246 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#HelveticaNeue-3d"/>
     <use xlink:href="#HelveticaNeue-4c" transform="translate(55.59375 0)"/>
     <use xlink:href="#HelveticaNeue-59" transform="translate(109.296875 0)"/>
     <use xlink:href="#HelveticaNeue-5b" transform="translate(142.59375 0)"/>
     <use xlink:href="#HelveticaNeue-50" transform="translate(174.09375 0)"/>
     <use xlink:href="#HelveticaNeue-4a" transform="translate(196.296875 0)"/>
     <use xlink:href="#HelveticaNeue-4c" transform="translate(250 0)"/>
    </g>
   </g>
   <g id="line2d_34">
    <defs>
     <path id="m5aef826fa4" d="M 0 2.75 
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
    <g clip-path="url(#p9261fc175a)">
     <use xlink:href="#m5aef826fa4" x="158.72" y="233.230769" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="line2d_35">
    <g clip-path="url(#p9261fc175a)">
     <use xlink:href="#m5aef826fa4" x="500.48" y="233.230769" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="line2d_36">
    <g clip-path="url(#p9261fc175a)">
     <use xlink:href="#m5aef826fa4" x="329.6" y="350.923077" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_37">
     <path d="M 54.7 347.907 
L 65.7 347.907 
L 76.7 347.907 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_19">
     <g style="fill: currentColor" transform="translate(85.5 351.757) scale(0.11 -0.11)">
      <defs>
       <path id="DejaVuSans-Oblique-5c" d="M 1588 -325 
Q 1188 -997 936 -1164 
Q 684 -1331 294 -1331 
L -159 -1331 
L -63 -850 
L 269 -850 
Q 509 -850 678 -719 
Q 847 -588 1056 -206 
L 1234 128 
L 459 3500 
L 1069 3500 
L 1650 819 
L 3256 3500 
L 3859 3500 
L 1588 -325 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-1c" d="M 703 97 
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
      <use xlink:href="#DejaVuSans-Oblique-5c" transform="translate(0 0.746875)"/>
      <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.746875)"/>
      <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(181.933594 0.746875)"/>
      <use xlink:href="#DejaVuSans-15" transform="translate(245.579427 42.046875) scale(0.7)"/>
      <use xlink:href="#DejaVuSans-c9c" transform="translate(312.332357 0.746875)"/>
      <use xlink:href="#DejaVuSans-1c" transform="translate(415.603841 0.746875)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p9261fc175a">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
        <p>Si vedono chiaramente le due intersezioni con l'asse $x$ in $x=-3$ e $x=3$, e il vertice in $(0,-9)$.</p>`
      },

      {
        id: "s09-formula-discriminante",
        type: "section",
        title: "La formula risolutiva e il discriminante",
        icon: "Δ",
        content: `<p>Quando l'equazione di secondo grado è completa non basta più estrarre una radice: serve uno strumento generale.</p>
        <p><strong>Formula risolutiva.</strong> Data l'equazione $ax^2 + bx + c = 0$ con $a \\neq 0$, le sue soluzioni reali (quando esistono) sono date da</p>
        <p>$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}.$$</p>
        <p><strong>Discriminante.</strong> La quantità sotto radice nella formula risolutiva si chiama <em>discriminante</em> e si indica con la lettera greca $\\Delta$ (delta):</p>
        <p>$$\\Delta = b^2 - 4ac.$$</p>`,
        subsections: [
          {
            subtitle: "Come leggere il segno del discriminante",
            content: `<p>Il segno di $\\Delta$ ci dice immediatamente quante soluzioni reali ha l'equazione, ancor prima di completare i calcoli:</p>
            <ul>
              <li>se $\\Delta \\gt 0$, la radice quadrata esiste ed è diversa da zero: l'equazione ha <strong>due soluzioni reali distinte</strong>, $x_1 = \\dfrac{-b + \\sqrt{\\Delta}}{2a}$ e $x_2 = \\dfrac{-b - \\sqrt{\\Delta}}{2a}$;</li>
              <li>se $\\Delta = 0$, la radice quadrata vale zero e il segno $\\pm$ non produce differenza: l'equazione ha <strong>una sola soluzione</strong> (detta doppia o coincidente), $x = -\\dfrac{b}{2a}$;</li>
              <li>se $\\Delta \\lt 0$, la radice quadrata non esiste in $\\mathbb{R}$: l'equazione <strong>non ha soluzioni reali</strong>.</li>
            </ul>`
          },
          {
            subtitle: "I due campanelli d'allarme della formula",
            content: `<p>La formula risolutiva presenta due punti da controllare sempre:</p>
            <ol>
              <li><strong>La frazione</strong>: il denominatore $2a$ non può essere nullo. Questo è garantito dalla definizione stessa di equazione di secondo grado, dove abbiamo imposto $a \\neq 0$.</li>
              <li><strong>La radice quadrata</strong>: l'argomento della radice, ovvero il discriminante $\\Delta$, deve essere maggiore o uguale a zero per avere soluzioni nel campo dei numeri reali.</li>
            </ol>
            <p>La condizione $\\Delta \\ge 0$ è dunque una vera e propria <strong>condizione di esistenza</strong> per le soluzioni reali.</p>`
          }
        ],
        formulas: [
          { label: "Formula risolutiva", latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" },
          { label: "Discriminante", latex: "\\Delta = b^2 - 4ac" },
          { label: "Caso Δ = 0", latex: "x_1 = x_2 = -\\frac{b}{2a}" }
        ],
        extra_content: `<p>La dimostrazione della formula risolutiva (che si ottiene con la tecnica del <em>completamento del quadrato</em>) verrà presentata nelle lezioni successive; per ora ci limitiamo ad applicarla correttamente.</p>`
      },

      {
        id: "s10-es-formula-diretta",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Applicazione diretta della formula risolutiva",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione di secondo grado completa: $$x^2 - 5x + 6 = 0$$</p>`,
        steps: [
          `<strong>Identifichiamo i coefficienti.</strong> Confrontando con la forma normale $ax^2+bx+c=0$: $$a = 1, \\qquad b = -5, \\qquad c = 6.$$`,
          `<strong>Calcoliamo il discriminante.</strong> Attenzione ai segni: $b$ vale $-5$, quindi $b^2 = (-5)^2 = 25$. $$\\Delta = b^2 - 4ac = (-5)^2 - 4 \\cdot 1 \\cdot 6 = 25 - 24 = 1$$ Poiché $\\Delta = 1 \\gt 0$, ci aspettiamo due soluzioni reali distinte.`,
          `<strong>Applichiamo la formula risolutiva</strong>: $$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{-(-5) \\pm \\sqrt{1}}{2 \\cdot 1} = \\frac{5 \\pm 1}{2}$$`,
          `<strong>Separiamo i due casi</strong> (prima il segno $+$, poi il segno $-$): $$x_1 = \\frac{5 + 1}{2} = \\frac{6}{2} = 3, \\qquad x_2 = \\frac{5 - 1}{2} = \\frac{4}{2} = 2.$$`,
          `<strong>Verifica.</strong> Sostituendo $x=3$: $9 - 15 + 6 = 0$, corretto. Sostituendo $x=2$: $4 - 10 + 6 = 0$, corretto. Le soluzioni sono dunque $x_1 = 3$ e $x_2 = 2$.`
        ]
      },

      {
        id: "s11-scomposizione-trinomio",
        type: "note_box",
        title: "Scomposizione del trinomio: un metodo alternativo",
        icon: "🧩",
        content: `<p>Un metodo alternativo per risolvere l'esercizio precedente è la <strong>scomposizione del trinomio</strong>. Cerchiamo due numeri la cui somma sia $b=-5$ e il cui prodotto sia $c=6$. I numeri sono $-2$ e $-3$. Possiamo quindi scrivere:</p>
        <p>$$x^2 - 5x + 6 = (x-2)(x-3) = 0$$</p>
        <p>Per la <strong>legge di annullamento del prodotto</strong>, questa equazione è verificata se $x-2=0$ oppure $x-3=0$, da cui si ottengono le stesse soluzioni $x=2$ e $x=3$.</p>
        <figure class="figura" data-id="precorso_lez02ba_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="m5a490da48b" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#m5a490da48b" x="44.8" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(39.6025 338.472) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-14" d="M 320 2035 
L 320 1523 
L 2170 1523 
L 2170 2035 
L 320 2035 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-18" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#m5a490da48b" x="139.733333" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(136.675677 338.472) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#m5a490da48b" x="234.666667" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(231.60901 338.472) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#m5a490da48b" x="329.6" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(326.542344 338.472) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#m5a490da48b" x="424.533333" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(421.475677 338.472) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#m5a490da48b" x="519.466667" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(516.40901 338.472) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="xtick_7">
     <g id="line2d_13">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#m5a490da48b" x="614.4" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(611.342344 338.472) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1c" d="M 3008 3981 
L 3008 4461 
L 768 4461 
L 346 2106 
L 813 2080 
Q 973 2272 1181 2390 
Q 1389 2509 1658 2509 
Q 1888 2509 2077 2432 
Q 2266 2355 2400 2217 
Q 2534 2080 2608 1891 
Q 2682 1702 2682 1478 
Q 2682 1210 2605 1008 
Q 2528 806 2397 672 
Q 2266 538 2090 470 
Q 1914 403 1722 403 
Q 1517 403 1347 464 
Q 1178 525 1053 637 
Q 928 749 854 899 
Q 781 1050 768 1222 
L 224 1222 
Q 230 915 345 672 
Q 461 429 659 265 
Q 858 102 1117 16 
Q 1376 -70 1670 -70 
Q 2067 -70 2364 54 
Q 2662 179 2860 390 
Q 3059 602 3158 874 
Q 3258 1146 3258 1434 
Q 3258 1824 3142 2115 
Q 3027 2406 2828 2601 
Q 2630 2797 2361 2893 
Q 2093 2989 1792 2989 
Q 1562 2989 1328 2909 
Q 1094 2829 947 2662 
L 934 2675 
L 1178 3981 
L 3008 3981 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1c"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_15">
      <path d="M 44.8 321.5 
L 614.4 321.5 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <defs>
       <path id="m8273aef705" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#m8273aef705" x="139.733333" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(127.118021 326.736) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_17">
      <path d="M 44.8 236.5 
L 614.4 236.5 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#m8273aef705" x="139.733333" y="236.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(127.118021 241.736) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_19">
      <path d="M 44.8 151.5 
L 614.4 151.5 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <g>
       <use xlink:href="#m8273aef705" x="139.733333" y="151.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(127.118021 156.736) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_21">
      <path d="M 44.8 66.5 
L 614.4 66.5 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#m8273aef705" x="139.733333" y="66.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(127.118021 71.736) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_23">
    <defs>
     <path id="mfdadc50b42" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mfdadc50b42" x="614.4" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_24">
    <defs>
     <path id="m92af4b911b" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m92af4b911b" x="139.733333" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_25">
    <path d="M 111.283273 -1 
L 118.909758 17.843387 
L 126.985822 37.199499 
L 134.586822 54.855079 
L 142.187823 71.965752 
L 149.788824 88.531516 
L 157.389825 104.552373 
L 164.515763 119.07704 
L 171.641701 133.122783 
L 178.76764 146.689604 
L 185.893578 159.777502 
L 193.019516 172.386477 
L 199.670392 183.722759 
L 206.321268 194.641845 
L 212.972143 205.143737 
L 219.623019 215.228434 
L 226.273895 224.895935 
L 232.449708 233.499341 
L 238.625521 241.743023 
L 244.801334 249.62698 
L 250.977148 257.151213 
L 257.152961 264.315722 
L 263.328774 271.120507 
L 269.029525 277.082564 
L 274.730275 282.738111 
L 280.431026 288.087148 
L 286.131776 293.129673 
L 291.832527 297.865688 
L 297.533278 302.295193 
L 302.758966 306.086311 
L 307.984654 309.619875 
L 313.210342 312.895885 
L 318.43603 315.91434 
L 323.661718 318.675242 
L 328.887406 321.17859 
L 334.113094 323.424383 
L 339.338782 325.412622 
L 344.56447 327.143308 
L 349.315096 328.493161 
L 354.065721 329.630159 
L 358.816347 330.554303 
L 363.566972 331.265592 
L 368.317598 331.764027 
L 373.068224 332.049607 
L 377.818849 332.122332 
L 382.569475 331.982203 
L 387.3201 331.629219 
L 392.070726 331.06338 
L 396.821351 330.284687 
L 401.571977 329.293139 
L 406.322602 328.088737 
L 411.073228 326.67148 
L 415.823853 325.041369 
L 421.049541 323.002399 
L 426.275229 320.705875 
L 431.500917 318.151797 
L 436.726606 315.340165 
L 441.952294 312.270979 
L 447.177982 308.944239 
L 452.40367 305.359944 
L 457.629358 301.518096 
L 462.855046 297.418694 
L 468.555796 292.652879 
L 474.256547 287.580554 
L 479.957298 282.201718 
L 485.658048 276.516371 
L 491.358799 270.524514 
L 497.05955 264.226146 
L 503.235363 257.057025 
L 509.411176 249.52818 
L 515.586989 241.639611 
L 521.762802 233.391318 
L 527.938616 224.7833 
L 534.114429 215.815558 
L 540.765304 205.755694 
L 547.41618 195.278635 
L 554.067056 184.384382 
L 560.717932 173.072933 
L 567.368807 161.344289 
L 574.494746 148.314926 
L 581.620684 134.806641 
L 588.746622 120.819432 
L 595.87256 106.353301 
L 602.998499 91.408246 
L 610.5995 74.938976 
L 614.4 66.5 
L 614.4 66.5 
" clip-path="url(#pfc80c1e2bd)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 139.733333 364 
L 139.733333 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 321.5 
L 614.4 321.5 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_12">
    <g style="fill: currentColor" transform="translate(335.6 315.5) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
      <path id="DejaVuSans-20" d="M 678 2906 
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
      <path id="DejaVuSans-15" d="M 1228 531 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
     <use xlink:href="#DejaVuSans-15" transform="translate(181.933594 0.78125)"/>
    </g>
   </g>
   <g id="text_13">
    <g style="fill: currentColor" transform="translate(430.533333 315.5) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-16" d="M 2597 2516 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
     <use xlink:href="#DejaVuSans-16" transform="translate(181.933594 0.78125)"/>
    </g>
   </g>
   <g id="line2d_26">
    <defs>
     <path id="m023af3964f" d="M 0 2.75 
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
    <g clip-path="url(#pfc80c1e2bd)">
     <use xlink:href="#m023af3964f" x="329.6" y="321.5" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="line2d_27">
    <g clip-path="url(#pfc80c1e2bd)">
     <use xlink:href="#m023af3964f" x="424.533333" y="321.5" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_28">
     <path d="M 559.047656 40.522 
L 570.047656 40.522 
L 581.047656 40.522 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_14">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(589.847656 44.372) scale(0.11 -0.11)">
      <defs>
       <path id="HelveticaNeue-4d" d="M 634 2829 
L 634 0 
L 1178 0 
L 1178 2829 
L 1818 2829 
L 1818 3309 
L 1178 3309 
L 1178 3770 
Q 1178 3987 1286 4064 
Q 1395 4141 1594 4141 
Q 1664 4141 1747 4131 
Q 1830 4122 1901 4096 
L 1901 4570 
Q 1824 4595 1725 4608 
Q 1626 4621 1549 4621 
Q 1101 4621 867 4413 
Q 634 4205 634 3802 
L 634 3309 
L 77 3309 
L 77 2829 
L 634 2829 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-f" d="M 1306 -1261 
L 1722 -1261 
Q 1267 -525 1072 198 
Q 877 922 877 1728 
Q 877 2515 1069 3232 
Q 1261 3949 1722 4678 
L 1306 4678 
Q 806 4019 553 3251 
Q 301 2483 301 1728 
Q 301 1306 371 922 
Q 442 538 573 173 
Q 704 -192 889 -547 
Q 1075 -902 1306 -1261 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-5f" d="M 1299 1741 
L 58 0 
L 717 0 
L 1638 1370 
L 2560 0 
L 3258 0 
L 1978 1786 
L 3117 3309 
L 2464 3309 
L 1638 2150 
L 845 3309 
L 147 3309 
L 1299 1741 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-10" d="M -58 -1261 
L 352 -1261 
Q 851 -602 1104 163 
Q 1357 928 1357 1683 
Q 1357 2106 1286 2490 
Q 1216 2874 1085 3242 
Q 954 3610 768 3965 
Q 582 4320 352 4678 
L -58 4678 
Q 390 3942 585 3216 
Q 781 2490 781 1683 
Q 781 902 589 182 
Q 397 -538 -58 -1261 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#HelveticaNeue-4d"/>
      <use xlink:href="#HelveticaNeue-f" transform="translate(29.59375 0)"/>
      <use xlink:href="#HelveticaNeue-5f" transform="translate(55.5 0)"/>
      <use xlink:href="#HelveticaNeue-10" transform="translate(107.296875 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="pfc80c1e2bd">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
        <p>La parabola $y = x^2-5x+6$ ha $\\Delta \\gt 0$ e taglia l'asse $x$ nei due punti $x=2$ e $x=3$.</p>`
      },

      {
        id: "s12-tre-casi-delta",
        type: "section",
        title: "I tre casi del discriminante a confronto",
        icon: "🔍",
        content: `<p>Confrontiamo tre equazioni molto simili tra loro, per vedere all'opera i tre casi possibili.</p>
        <ul>
          <li>$x^2 - 4x + 3 = 0$: qui $\\Delta = 16 - 12 = 4 \\gt 0$, quindi $x = \\dfrac{4 \\pm 2}{2} \\Rightarrow x_1 = 3, \\ x_2 = 1$ (due soluzioni distinte).</li>
          <li>$x^2 - 4x + 4 = 0$: qui $\\Delta = 16 - 16 = 0$, quindi $x = \\dfrac{4 \\pm 0}{2} = 2$ (una sola soluzione, doppia).</li>
          <li>$x^2 - 4x + 5 = 0$: qui $\\Delta = 16 - 20 = -4 \\lt 0$, quindi non esistono soluzioni reali.</li>
        </ul>
        <p>Graficamente: nel primo caso la parabola taglia l'asse $x$ in due punti, nel secondo lo tocca in un solo punto (vertice sull'asse), nel terzo non lo incontra mai.</p>`,
        table_compare: {
          headers: ["Segno di Δ", "Soluzioni reali", "Parabola y = ax²+bx+c"],
          rows: [
            ["Δ > 0", "Due soluzioni distinte x₁ ≠ x₂", "Taglia l'asse x in due punti"],
            ["Δ = 0", "Una soluzione doppia x = −b/(2a)", "Tangente all'asse x nel vertice"],
            ["Δ < 0", "Nessuna soluzione reale", "Non interseca mai l'asse x"]
          ]
        }
      },

      {
        id: "s13-es-delta-negativo",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Caso con Δ < 0",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere l'equazione: $$2x^2 - x + 5 = 0$$</p>`,
        steps: [
          `<strong>Identificazione dei coefficienti</strong>: $a=2$, $b=-1$, $c=5$.`,
          `<strong>Verifica delle condizioni</strong>: la prima condizione, $a \\neq 0$, è soddisfatta poiché $a=2$.`,
          `<strong>Calcolo del discriminante</strong>: $$\\Delta = b^2 - 4ac = (-1)^2 - 4(2)(5) = 1 - 40 = -39$$`,
          `<strong>Conclusione</strong>: poiché $\\Delta = -39 \\lt 0$, l'equazione non ha soluzioni reali. Se provassimo ad applicare la formula, otterremmo $\\sqrt{-39}$, che non è un numero reale.`
        ]
      },

      {
        id: "s14-es-delta-zero",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Caso con Δ = 0",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere le seguenti equazioni: (a) $x^2 + 4x + 4 = 0$; (b) $x^2 - 6x + 9 = 0$.</p>`,
        steps: [
          `<strong>(a) Coefficienti</strong>: $a=1$, $b=4$, $c=4$. <strong>Discriminante</strong>: $\\Delta = 4^2 - 4(1)(4) = 16 - 16 = 0$.`,
          `<strong>(a) Soluzione</strong>: poiché $\\Delta=0$, abbiamo due soluzioni reali coincidenti: $$x = -\\frac{b}{2a} = -\\frac{4}{2(1)} = -2$$`,
          `<strong>(a) Nota</strong>: il trinomio è un quadrato perfetto, $x^2 + 4x + 4 = (x+2)^2$. L'equazione $(x+2)^2=0$ ha come unica soluzione $x=-2$.`,
          `<figure class="figura" data-id="precorso_lez02ba_g2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="m266d42e9e3" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#m266d42e9e3" x="44.8" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- -5 -->
      <g style="fill: currentColor" transform="translate(39.6025 346.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-14" d="M 320 2035 
L 320 1523 
L 2170 1523 
L 2170 2035 
L 320 2035 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-1c" d="M 3008 3981 
L 3008 4461 
L 768 4461 
L 346 2106 
L 813 2080 
Q 973 2272 1181 2390 
Q 1389 2509 1658 2509 
Q 1888 2509 2077 2432 
Q 2266 2355 2400 2217 
Q 2534 2080 2608 1891 
Q 2682 1702 2682 1478 
Q 2682 1210 2605 1008 
Q 2528 806 2397 672 
Q 2266 538 2090 470 
Q 1914 403 1722 403 
Q 1517 403 1347 464 
Q 1178 525 1053 637 
Q 928 749 854 899 
Q 781 1050 768 1222 
L 224 1222 
Q 230 915 345 672 
Q 461 429 659 265 
Q 858 102 1117 16 
Q 1376 -70 1670 -70 
Q 2067 -70 2364 54 
Q 2662 179 2860 390 
Q 3059 602 3158 874 
Q 3258 1146 3258 1434 
Q 3258 1824 3142 2115 
Q 3027 2406 2828 2601 
Q 2630 2797 2361 2893 
Q 2093 2989 1792 2989 
Q 1562 2989 1328 2909 
Q 1094 2829 947 2662 
L 934 2675 
L 1178 3981 
L 3008 3981 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1c" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#m266d42e9e3" x="139.733333" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(134.535833 346.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1b" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#m266d42e9e3" x="234.666667" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(229.469167 346.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1a" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#m266d42e9e3" x="329.6" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(324.4025 346.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-19" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#m266d42e9e3" x="424.533333" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(419.335833 346.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-18" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#m266d42e9e3" x="519.466667" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(516.40901 346.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_7">
     <g id="line2d_13">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#m266d42e9e3" x="614.4" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(611.342344 346.972) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_15">
      <path d="M 44.8 330 
L 614.4 330 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <defs>
       <path id="mea6650b19c" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mea6650b19c" x="519.466667" y="330" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(506.851354 335.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_17">
      <path d="M 44.8 262 
L 614.4 262 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#mea6650b19c" x="519.466667" y="262" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(506.851354 267.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_19">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <g>
       <use xlink:href="#mea6650b19c" x="519.466667" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(506.851354 199.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_21">
      <path d="M 44.8 126 
L 614.4 126 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#mea6650b19c" x="519.466667" y="126" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(506.851354 131.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_23">
      <path d="M 44.8 58 
L 614.4 58 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_24">
      <g>
       <use xlink:href="#mea6650b19c" x="519.466667" y="58" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_12">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(506.851354 63.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1f" d="M 992 3360 
Q 992 3533 1056 3661 
Q 1120 3789 1225 3878 
Q 1331 3968 1478 4013 
Q 1626 4058 1786 4058 
Q 2118 4058 2332 3882 
Q 2547 3706 2547 3360 
Q 2547 3014 2336 2822 
Q 2125 2630 1798 2630 
Q 1632 2630 1485 2675 
Q 1338 2720 1229 2809 
Q 1120 2899 1056 3036 
Q 992 3174 992 3360 
z
M 416 3379 
Q 416 3072 589 2813 
Q 762 2554 1050 2438 
Q 666 2304 461 2006 
Q 256 1709 256 1306 
Q 256 960 374 701 
Q 493 442 701 269 
Q 909 96 1190 13 
Q 1472 -70 1798 -70 
Q 2112 -70 2387 19 
Q 2662 109 2864 285 
Q 3066 461 3184 717 
Q 3302 973 3302 1306 
Q 3302 1728 3104 2019 
Q 2906 2310 2496 2438 
Q 2784 2566 2953 2819 
Q 3123 3072 3123 3379 
Q 3123 3597 3046 3805 
Q 2970 4013 2806 4176 
Q 2643 4339 2380 4438 
Q 2118 4538 1747 4538 
Q 1485 4538 1245 4461 
Q 1005 4384 819 4237 
Q 634 4090 525 3875 
Q 416 3661 416 3379 
z
M 832 1280 
Q 832 1478 905 1638 
Q 979 1798 1110 1913 
Q 1242 2029 1418 2089 
Q 1594 2150 1792 2150 
Q 1984 2150 2153 2083 
Q 2323 2016 2451 1901 
Q 2579 1786 2652 1629 
Q 2726 1472 2726 1286 
Q 2726 1094 2659 934 
Q 2592 774 2467 656 
Q 2342 538 2172 470 
Q 2003 403 1798 403 
Q 1376 403 1104 636 
Q 832 870 832 1280 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1f"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_25">
    <defs>
     <path id="mca21cc585f" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mca21cc585f" x="614.4" y="330" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_26">
    <defs>
     <path id="m4f61671589" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m4f61671589" x="519.466667" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_27">
    <path d="M 44.8 24 
L 53.351126 42.099453 
L 61.427189 58.686787 
L 69.503253 74.782001 
L 77.579316 90.385096 
L 85.655379 105.49607 
L 93.731443 120.114925 
L 101.332444 133.424298 
L 108.933445 146.297745 
L 116.534445 158.735265 
L 124.135446 170.73686 
L 131.736447 182.302528 
L 138.862385 192.749432 
L 145.988324 202.813198 
L 153.114262 212.493825 
L 160.2402 221.791315 
L 167.366138 230.705666 
L 174.017014 238.680051 
L 180.66789 246.32068 
L 187.318766 253.627553 
L 193.969641 260.60067 
L 200.620517 267.240031 
L 206.79633 273.106304 
L 212.972143 278.684798 
L 219.147957 283.975512 
L 225.32377 288.978447 
L 231.499583 293.693602 
L 237.675396 298.120978 
L 243.851209 302.260574 
L 249.55196 305.826315 
L 255.252711 309.146847 
L 260.953461 312.22217 
L 266.654212 315.052285 
L 272.354962 317.637191 
L 278.055713 319.976889 
L 283.756464 322.071379 
L 289.457214 323.920659 
L 295.157965 325.524732 
L 300.858716 326.883596 
L 306.559466 327.997251 
L 312.260217 328.865698 
L 317.485905 329.446365 
L 322.711593 329.820989 
L 327.937281 329.98957 
L 333.162969 329.952108 
L 338.388657 329.708602 
L 343.614345 329.259053 
L 348.840033 328.603461 
L 354.065721 327.741825 
L 359.766472 326.566868 
L 365.467223 325.146702 
L 371.167973 323.481328 
L 376.868724 321.570745 
L 382.569475 319.414953 
L 388.270225 317.013953 
L 393.970976 314.367745 
L 399.671726 311.476328 
L 405.372477 308.339702 
L 411.073228 304.957868 
L 416.773978 301.330825 
L 422.949791 297.124818 
L 429.125605 292.631032 
L 435.301418 287.849466 
L 441.477231 282.78012 
L 447.653044 277.422996 
L 453.828857 271.778091 
L 460.004671 265.845408 
L 466.655546 259.134528 
L 473.306422 252.089891 
L 479.957298 244.711499 
L 486.608173 236.999351 
L 493.259049 228.953447 
L 499.909925 220.573786 
L 507.035863 211.225212 
L 514.161802 201.493499 
L 521.28774 191.378648 
L 528.413678 180.880659 
L 535.539616 169.999531 
L 543.140617 157.970691 
L 550.741618 145.505925 
L 558.342619 132.605233 
L 565.94362 119.268615 
L 573.544621 105.49607 
L 581.620684 90.385096 
L 589.696747 74.782001 
L 597.772811 58.686787 
L 605.848874 42.099453 
L 613.924937 25.019999 
L 614.4 24 
L 614.4 24 
" clip-path="url(#p3283cc9115)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 519.466667 364 
L 519.466667 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 330 
L 614.4 330 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_13">
    <g style="fill: currentColor" transform="translate(335.6 324) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-Oblique-39" d="M 1319 0 
L 500 4666 
L 1119 4666 
L 1797 653 
L 4063 4666 
L 4750 4666 
L 2053 0 
L 1319 0 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-Oblique-48" d="M 3078 2063 
Q 3088 2113 3092 2166 
Q 3097 2219 3097 2272 
Q 3097 2653 2873 2875 
Q 2650 3097 2266 3097 
Q 1838 3097 1509 2826 
Q 1181 2556 1013 2059 
L 3078 2063 
z
M 3578 1613 
L 903 1613 
Q 884 1494 878 1425 
Q 872 1356 872 1306 
Q 872 872 1139 634 
Q 1406 397 1894 397 
Q 2269 397 2603 481 
Q 2938 566 3225 728 
L 3116 159 
Q 2806 34 2476 -28 
Q 2147 -91 1806 -91 
Q 1078 -91 686 257 
Q 294 606 294 1247 
Q 294 1794 489 2264 
Q 684 2734 1063 3103 
Q 1306 3334 1642 3459 
Q 1978 3584 2356 3584 
Q 2950 3584 3301 3228 
Q 3653 2872 3653 2272 
Q 3653 2128 3634 1964 
Q 3616 1800 3578 1613 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-Oblique-55" d="M 2853 2969 
Q 2766 3016 2653 3041 
Q 2541 3066 2413 3066 
Q 1953 3066 1609 2717 
Q 1266 2369 1153 1784 
L 800 0 
L 225 0 
L 909 3500 
L 1484 3500 
L 1375 2956 
Q 1603 3259 1920 3421 
Q 2238 3584 2597 3584 
Q 2691 3584 2781 3573 
Q 2872 3563 2963 3538 
L 2853 2969 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-Oblique-57" d="M 2706 3500 
L 2619 3053 
L 1472 3053 
L 1100 1153 
Q 1081 1047 1072 975 
Q 1063 903 1063 863 
Q 1063 663 1183 572 
Q 1303 481 1569 481 
L 2150 481 
L 2053 0 
L 1503 0 
Q 991 0 739 200 
Q 488 400 488 806 
Q 488 878 497 964 
Q 506 1050 525 1153 
L 897 3053 
L 409 3053 
L 500 3500 
L 978 3500 
L 1172 4494 
L 1747 4494 
L 1556 3500 
L 2706 3500 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-Oblique-4c" d="M 1172 4863 
L 1747 4863 
L 1606 4134 
L 1031 4134 
L 1172 4863 
z
M 909 3500 
L 1484 3500 
L 800 0 
L 225 0 
L 909 3500 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-Oblique-46" d="M 3431 3366 
L 3316 2797 
Q 3109 2947 2876 3022 
Q 2644 3097 2394 3097 
Q 2119 3097 1870 3000 
Q 1622 2903 1453 2725 
Q 1184 2453 1037 2087 
Q 891 1722 891 1331 
Q 891 859 1127 628 
Q 1363 397 1844 397 
Q 2081 397 2348 469 
Q 2616 541 2906 684 
L 2797 116 
Q 2547 13 2283 -39 
Q 2019 -91 1741 -91 
Q 1044 -91 669 257 
Q 294 606 294 1253 
Q 294 1797 489 2255 
Q 684 2713 1069 3078 
Q 1331 3328 1684 3456 
Q 2038 3584 2456 3584 
Q 2700 3584 2940 3529 
Q 3181 3475 3431 3366 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
      <path id="DejaVuSans-20" d="M 678 2906 
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
      <path id="DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
      <path id="DejaVuSans-15" d="M 1228 531 
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
     <use xlink:href="#DejaVuSans-Oblique-39" transform="translate(0 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-48" transform="translate(62.408203 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-55" transform="translate(123.931641 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-57" transform="translate(165.044922 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-4c" transform="translate(204.253906 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-46" transform="translate(232.037109 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-48" transform="translate(287.017578 0.015625)"/>
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(348.541016 0.015625)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(427.203125 0.015625)"/>
     <use xlink:href="#DejaVuSans-c9c" transform="translate(530.474609 0.015625)"/>
     <use xlink:href="#DejaVuSans-15" transform="translate(614.263672 0.015625)"/>
    </g>
   </g>
   <g id="line2d_28">
    <defs>
     <path id="m018194bc32" d="M 0 2.75 
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
    <g clip-path="url(#p3283cc9115)">
     <use xlink:href="#m018194bc32" x="329.6" y="330" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_29">
     <path d="M 54.7 347.907 
L 65.7 347.907 
L 76.7 347.907 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_14">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(85.5 351.757) scale(0.11 -0.11)">
      <defs>
       <path id="HelveticaNeue-4d" d="M 634 2829 
L 634 0 
L 1178 0 
L 1178 2829 
L 1818 2829 
L 1818 3309 
L 1178 3309 
L 1178 3770 
Q 1178 3987 1286 4064 
Q 1395 4141 1594 4141 
Q 1664 4141 1747 4131 
Q 1830 4122 1901 4096 
L 1901 4570 
Q 1824 4595 1725 4608 
Q 1626 4621 1549 4621 
Q 1101 4621 867 4413 
Q 634 4205 634 3802 
L 634 3309 
L 77 3309 
L 77 2829 
L 634 2829 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-f" d="M 1306 -1261 
L 1722 -1261 
Q 1267 -525 1072 198 
Q 877 922 877 1728 
Q 877 2515 1069 3232 
Q 1261 3949 1722 4678 
L 1306 4678 
Q 806 4019 553 3251 
Q 301 2483 301 1728 
Q 301 1306 371 922 
Q 442 538 573 173 
Q 704 -192 889 -547 
Q 1075 -902 1306 -1261 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-5f" d="M 1299 1741 
L 58 0 
L 717 0 
L 1638 1370 
L 2560 0 
L 3258 0 
L 1978 1786 
L 3117 3309 
L 2464 3309 
L 1638 2150 
L 845 3309 
L 147 3309 
L 1299 1741 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-10" d="M -58 -1261 
L 352 -1261 
Q 851 -602 1104 163 
Q 1357 928 1357 1683 
Q 1357 2106 1286 2490 
Q 1216 2874 1085 3242 
Q 954 3610 768 3965 
Q 582 4320 352 4678 
L -58 4678 
Q 390 3942 585 3216 
Q 781 2490 781 1683 
Q 781 902 589 182 
Q 397 -538 -58 -1261 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#HelveticaNeue-4d"/>
      <use xlink:href="#HelveticaNeue-f" transform="translate(29.59375 0)"/>
      <use xlink:href="#HelveticaNeue-5f" transform="translate(55.5 0)"/>
      <use xlink:href="#HelveticaNeue-10" transform="translate(107.296875 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p3283cc9115">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`,
          `<strong>(b) Coefficienti</strong>: $a=1$, $b=-6$, $c=9$. <strong>Discriminante</strong>: $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$.`,
          `<strong>(b) Soluzione</strong>: $$x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$$ Anche questo è un quadrato perfetto: $x^2 - 6x + 9 = (x-3)^2$.`
        ]
      },

      {
        id: "s15-campo-esistenza",
        type: "section",
        title: "Equazioni Irrazionali e Campo di Esistenza",
        icon: "√",
        content: `<p>Le <strong>equazioni irrazionali</strong> sono quelle in cui l'incognita compare sotto il segno di radice.</p>
        <p><strong>Definizione (Campo di Esistenza, C.E.).</strong> Il Campo di Esistenza (o dominio) di un'espressione matematica è l'insieme di tutti i valori che l'incognita può assumere affinché l'espressione stessa abbia significato nel campo dei numeri reali.</p>`,
        quote: {
          text: "Quando si affronta un'equazione con radici o frazioni, la prima cosa in assoluto da fare è stabilire il Campo di Esistenza. Risolvere l'equazione e solo dopo verificare la C.E. è un errore metodologico che può portare a soluzioni errate.",
          src: "Nota del Prof."
        }
      },

      {
        id: "s16-es-irrazionale-base",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione irrazionale",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione: $$\\sqrt{2x - 8} = 0$$</p>`,
        steps: [
          `<strong>Campo di Esistenza (C.E.)</strong>: la radice quadrata è definita solo se il suo argomento (il radicando) è maggiore o uguale a zero: $$2x - 8 \\ge 0$$ Trasportiamo $-8$ a destra cambiandogli segno e dividiamo per $2$, che è positivo, quindi il verso della disuguaglianza non cambia: $$2x \\ge 8 \\Rightarrow x \\ge 4$$ Il C.E. è l'insieme di tutti i numeri reali $x$ tali che $x \\ge 4$. Qualsiasi soluzione troveremo dovrà appartenere a questo intervallo.`,
          `<strong>Risoluzione dell'equazione</strong>: per eliminare la radice, eleviamo al quadrato entrambi i membri: $$(\\sqrt{2x - 8})^2 = (0)^2 \\Rightarrow 2x - 8 = 0 \\Rightarrow 2x = 8 \\Rightarrow x = 4$$`,
          `<strong>Verifica della soluzione</strong>: la soluzione trovata è $x=4$. Verifichiamo se appartiene al Campo di Esistenza ($x \\ge 4$): $4 \\ge 4$ è vero, quindi la soluzione è <strong>accettabile</strong>.`
        ]
      },

      {
        id: "s17-figura-radice",
        type: "note_box",
        title: "Lettura grafica del C.E.",
        icon: "📈",
        content: `<p>La funzione $y = \\sqrt{2x-8}$ esiste soltanto a destra di $x=4$: prima di quel punto il radicando è negativo e la funzione non è definita in $\\mathbb{R}$.</p>
        <figure class="figura" data-id="precorso_lez02a_g2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="m4947fd70f5" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#m4947fd70f5" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(41.742344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 116 364 
L 116 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#m4947fd70f5" x="116" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(112.942344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1c" d="M 3008 3981 
L 3008 4461 
L 768 4461 
L 346 2106 
L 813 2080 
Q 973 2272 1181 2390 
Q 1389 2509 1658 2509 
Q 1888 2509 2077 2432 
Q 2266 2355 2400 2217 
Q 2534 2080 2608 1891 
Q 2682 1702 2682 1478 
Q 2682 1210 2605 1008 
Q 2528 806 2397 672 
Q 2266 538 2090 470 
Q 1914 403 1722 403 
Q 1517 403 1347 464 
Q 1178 525 1053 637 
Q 928 749 854 899 
Q 781 1050 768 1222 
L 224 1222 
Q 230 915 345 672 
Q 461 429 659 265 
Q 858 102 1117 16 
Q 1376 -70 1670 -70 
Q 2067 -70 2364 54 
Q 2662 179 2860 390 
Q 3059 602 3158 874 
Q 3258 1146 3258 1434 
Q 3258 1824 3142 2115 
Q 3027 2406 2828 2601 
Q 2630 2797 2361 2893 
Q 2093 2989 1792 2989 
Q 1562 2989 1328 2909 
Q 1094 2829 947 2662 
L 934 2675 
L 1178 3981 
L 3008 3981 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1c"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#m4947fd70f5" x="187.2" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(184.142344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 258.4 364 
L 258.4 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#m4947fd70f5" x="258.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 7 -->
      <g style="fill: currentColor" transform="translate(255.342344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1e" d="M 3258 3994 
L 3258 4461 
L 320 4461 
L 320 3949 
L 2701 3949 
Q 2342 3571 2032 3123 
Q 1722 2675 1485 2172 
Q 1248 1670 1097 1123 
Q 947 576 909 0 
L 1517 0 
Q 1549 531 1696 1094 
Q 1843 1658 2076 2189 
Q 2310 2720 2611 3187 
Q 2912 3654 3258 3994 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1e"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#m4947fd70f5" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(326.542344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1f" d="M 992 3360 
Q 992 3533 1056 3661 
Q 1120 3789 1225 3878 
Q 1331 3968 1478 4013 
Q 1626 4058 1786 4058 
Q 2118 4058 2332 3882 
Q 2547 3706 2547 3360 
Q 2547 3014 2336 2822 
Q 2125 2630 1798 2630 
Q 1632 2630 1485 2675 
Q 1338 2720 1229 2809 
Q 1120 2899 1056 3036 
Q 992 3174 992 3360 
z
M 416 3379 
Q 416 3072 589 2813 
Q 762 2554 1050 2438 
Q 666 2304 461 2006 
Q 256 1709 256 1306 
Q 256 960 374 701 
Q 493 442 701 269 
Q 909 96 1190 13 
Q 1472 -70 1798 -70 
Q 2112 -70 2387 19 
Q 2662 109 2864 285 
Q 3066 461 3184 717 
Q 3302 973 3302 1306 
Q 3302 1728 3104 2019 
Q 2906 2310 2496 2438 
Q 2784 2566 2953 2819 
Q 3123 3072 3123 3379 
Q 3123 3597 3046 3805 
Q 2970 4013 2806 4176 
Q 2643 4339 2380 4438 
Q 2118 4538 1747 4538 
Q 1485 4538 1245 4461 
Q 1005 4384 819 4237 
Q 634 4090 525 3875 
Q 416 3661 416 3379 
z
M 832 1280 
Q 832 1478 905 1638 
Q 979 1798 1110 1913 
Q 1242 2029 1418 2089 
Q 1594 2150 1792 2150 
Q 1984 2150 2153 2083 
Q 2323 2016 2451 1901 
Q 2579 1786 2652 1629 
Q 2726 1472 2726 1286 
Q 2726 1094 2659 934 
Q 2592 774 2467 656 
Q 2342 538 2172 470 
Q 2003 403 1798 403 
Q 1376 403 1104 636 
Q 832 870 832 1280 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1f"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 400.8 364 
L 400.8 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#m4947fd70f5" x="400.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 9 -->
      <g style="fill: currentColor" transform="translate(397.742344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-20" d="M 858 1094 
L 314 1094 
Q 365 506 742 218 
Q 1120 -70 1690 -70 
Q 2515 -70 2889 560 
Q 3264 1190 3264 2368 
Q 3264 3014 3139 3433 
Q 3014 3853 2803 4096 
Q 2592 4339 2310 4438 
Q 2029 4538 1709 4538 
Q 1382 4538 1107 4429 
Q 832 4320 633 4125 
Q 435 3930 326 3658 
Q 218 3386 218 3059 
Q 218 2726 310 2444 
Q 403 2163 585 1964 
Q 768 1766 1037 1654 
Q 1306 1542 1651 1542 
Q 1984 1542 2265 1712 
Q 2547 1882 2701 2170 
L 2714 2157 
Q 2688 1267 2438 835 
Q 2189 403 1690 403 
Q 1363 403 1126 582 
Q 890 762 858 1094 
z
M 2618 3021 
Q 2618 2822 2554 2640 
Q 2490 2458 2368 2320 
Q 2246 2182 2073 2102 
Q 1901 2022 1690 2022 
Q 1491 2022 1328 2102 
Q 1165 2182 1046 2316 
Q 928 2451 861 2624 
Q 794 2797 794 2982 
Q 794 3194 842 3386 
Q 890 3578 995 3728 
Q 1101 3878 1270 3968 
Q 1440 4058 1683 4058 
Q 1914 4058 2086 3974 
Q 2259 3891 2377 3747 
Q 2496 3603 2557 3417 
Q 2618 3232 2618 3021 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-20"/>
      </g>
     </g>
    </g>
    <g id="xtick_7">
     <g id="line2d_13">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#m4947fd70f5" x="472" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 10 -->
      <g style="fill: currentColor" transform="translate(465.884687 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-17" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_8">
     <g id="line2d_15">
      <path d="M 543.2 364 
L 543.2 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <g>
       <use xlink:href="#m4947fd70f5" x="543.2" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- 11 -->
      <g style="fill: currentColor" transform="translate(537.084688 380.972) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-18" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_9">
     <g id="line2d_17">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#m4947fd70f5" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- 12 -->
      <g style="fill: currentColor" transform="translate(608.284688 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-19" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_19">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <defs>
       <path id="mcadcca92c7" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mcadcca92c7" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(32.184688 369.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_21">
      <path d="M 44.8 279 
L 614.4 279 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#mcadcca92c7" x="44.8" y="279" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(32.184688 284.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_23">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_24">
      <g>
       <use xlink:href="#mcadcca92c7" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_12">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(32.184688 199.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_25">
      <path d="M 44.8 109 
L 614.4 109 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_26">
      <g>
       <use xlink:href="#mcadcca92c7" x="44.8" y="109" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_13">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(32.184688 114.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_27">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_28">
      <g>
       <use xlink:href="#mcadcca92c7" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_14">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(32.184688 29.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_29">
    <defs>
     <path id="mb4579435e4" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mb4579435e4" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_30">
    <defs>
     <path id="mb22ce2b463" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mb22ce2b463" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_31">
    <path d="M 44.8 364 
L 45.275063 354.180953 
L 46.225188 346.992912 
L 47.175313 342.043944 
L 48.6005 336.227542 
L 50.025688 331.433906 
L 51.925938 325.970996 
L 53.826188 321.199768 
L 56.201501 315.896692 
L 58.576814 311.122815 
L 61.427189 305.909736 
L 64.277565 301.127424 
L 67.603003 295.971649 
L 71.403503 290.520983 
L 75.204003 285.447626 
L 79.479566 280.106028 
L 84.230192 274.544227 
L 89.45588 268.80081 
L 94.681568 263.384712 
L 100.382319 257.790771 
L 106.558132 252.045643 
L 113.209008 246.17144 
L 120.334946 240.186532 
L 127.935947 234.106222 
L 136.01201 227.943298 
L 144.563136 221.708495 
L 153.589324 215.410861 
L 163.090575 209.058057 
L 173.066889 202.656599 
L 183.518265 196.212056 
L 194.444704 189.729209 
L 206.321268 182.945725 
L 218.672894 176.150576 
L 231.499583 169.344983 
L 245.276397 162.290872 
L 259.528274 155.244204 
L 274.730275 147.980973 
L 290.407339 140.73811 
L 307.034529 133.304637 
L 324.136781 125.900771 
L 342.189158 118.32753 
L 361.19166 110.600099 
L 381.144287 102.73216 
L 401.571977 94.915121 
L 422.949791 86.970601 
L 445.277731 78.909259 
L 468.555796 70.740728 
L 492.783987 62.473719 
L 517.962302 54.116113 
L 544.090742 45.675047 
L 571.64437 37.009528 
L 600.148123 28.28049 
L 614.4 24 
L 614.4 24 
" clip-path="url(#p3f801d053d)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 44.8 364 
L 44.8 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 364 
L 614.4 364 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_15">
    <g style="fill: currentColor" transform="translate(50.8 358) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
      <path id="DejaVuSans-20" d="M 678 2906 
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
      <path id="DejaVuSans-17" d="M 2419 4116 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.09375)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.09375)"/>
     <use xlink:href="#DejaVuSans-17" transform="translate(181.933594 0.09375)"/>
    </g>
   </g>
   <g id="line2d_32">
    <defs>
     <path id="m9994a91e80" d="M 0 2.75 
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
    <g clip-path="url(#p3f801d053d)">
     <use xlink:href="#m9994a91e80" x="44.8" y="364" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_33">
     <path d="M 54.7 40.522 
L 65.7 40.522 
L 76.7 40.522 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_16">
     <g style="fill: currentColor" transform="translate(85.5 44.372) scale(0.11 -0.11)">
      <defs>
       <path id="DejaVuSans-Oblique-5c" d="M 1588 -325 
Q 1188 -997 936 -1164 
Q 684 -1331 294 -1331 
L -159 -1331 
L -63 -850 
L 269 -850 
Q 509 -850 678 -719 
Q 847 -588 1056 -206 
L 1234 128 
L 459 3500 
L 1069 3500 
L 1650 819 
L 3256 3500 
L 3859 3500 
L 1588 -325 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-Oblique-56" d="M 3200 3397 
L 3091 2853 
Q 2863 2978 2609 3040 
Q 2356 3103 2088 3103 
Q 1634 3103 1373 2948 
Q 1113 2794 1113 2528 
Q 1113 2219 1719 2053 
Q 1766 2041 1788 2034 
L 1972 1978 
Q 2547 1819 2739 1644 
Q 2931 1469 2931 1166 
Q 2931 609 2489 259 
Q 2047 -91 1331 -91 
Q 1053 -91 747 -37 
Q 441 16 72 128 
L 184 722 
Q 500 559 806 475 
Q 1113 391 1394 391 
Q 1816 391 2080 572 
Q 2344 753 2344 1031 
Q 2344 1331 1650 1516 
L 1591 1531 
L 1394 1581 
Q 956 1697 753 1886 
Q 550 2075 550 2369 
Q 550 2928 970 3256 
Q 1391 3584 2113 3584 
Q 2397 3584 2667 3537 
Q 2938 3491 3200 3397 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-Oblique-54" d="M 2669 525 
Q 2438 222 2123 65 
Q 1809 -91 1428 -91 
Q 897 -91 595 267 
Q 294 625 294 1253 
Q 294 1759 480 2231 
Q 666 2703 1013 3078 
Q 1238 3322 1530 3453 
Q 1822 3584 2144 3584 
Q 2531 3584 2781 3431 
Q 3031 3278 3144 2969 
L 3244 3494 
L 3822 3494 
L 2888 -1319 
L 2309 -1319 
L 2669 525 
z
M 891 1338 
Q 891 875 1084 633 
Q 1278 391 1644 391 
Q 2188 391 2572 911 
Q 2956 1431 2956 2175 
Q 2956 2625 2757 2864 
Q 2559 3103 2188 3103 
Q 1916 3103 1684 2976 
Q 1453 2850 1281 2606 
Q 1100 2350 995 2006 
Q 891 1663 891 1338 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-Oblique-55" d="M 2853 2969 
Q 2766 3016 2653 3041 
Q 2541 3066 2413 3066 
Q 1953 3066 1609 2717 
Q 1266 2369 1153 1784 
L 800 0 
L 225 0 
L 909 3500 
L 1484 3500 
L 1375 2956 
Q 1603 3259 1920 3421 
Q 2238 3584 2597 3584 
Q 2691 3584 2781 3573 
Q 2872 3563 2963 3538 
L 2853 2969 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-Oblique-57" d="M 2706 3500 
L 2619 3053 
L 1472 3053 
L 1100 1153 
Q 1081 1047 1072 975 
Q 1063 903 1063 863 
Q 1063 663 1183 572 
Q 1303 481 1569 481 
L 2150 481 
L 2053 0 
L 1503 0 
Q 991 0 739 200 
Q 488 400 488 806 
Q 488 878 497 964 
Q 506 1050 525 1153 
L 897 3053 
L 409 3053 
L 500 3500 
L 978 3500 
L 1172 4494 
L 1747 4494 
L 1556 3500 
L 2706 3500 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-b" d="M 1984 4856 
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
       <path id="DejaVuSans-15" d="M 1228 531 
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
       <path id="DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-1b" d="M 2034 2216 
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
       <path id="DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#DejaVuSans-Oblique-5c" transform="translate(0 0.125)"/>
      <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.125)"/>
      <use xlink:href="#DejaVuSans-Oblique-56" transform="translate(181.933594 0.125)"/>
      <use xlink:href="#DejaVuSans-Oblique-54" transform="translate(234.033203 0.125)"/>
      <use xlink:href="#DejaVuSans-Oblique-55" transform="translate(297.509766 0.125)"/>
      <use xlink:href="#DejaVuSans-Oblique-57" transform="translate(338.623047 0.125)"/>
      <use xlink:href="#DejaVuSans-b" transform="translate(377.832031 0.125)"/>
      <use xlink:href="#DejaVuSans-15" transform="translate(416.845703 0.125)"/>
      <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(480.46875 0.125)"/>
      <use xlink:href="#DejaVuSans-c9c" transform="translate(559.130859 0.125)"/>
      <use xlink:href="#DejaVuSans-1b" transform="translate(662.402344 0.125)"/>
      <use xlink:href="#DejaVuSans-c" transform="translate(726.025391 0.125)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p3f801d053d">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
        <p>Il grafico interseca l'asse $x$ esattamente in $x=4$, che è la soluzione trovata.</p>`
      },

      {
        id: "s18-disequazioni-intro",
        type: "section",
        title: "Disequazioni di Primo Grado: principi di equivalenza",
        icon: "⚖️",
        content: `<p>Nell'esercizio precedente abbiamo incontrato, come passaggio strumentale, la disuguaglianza $2x-8 \\ge 0$. Vale la pena fermarsi e sistematizzare le regole di risoluzione delle disequazioni, perché ne faremo un uso costante nel calcolo dei Campi di Esistenza.</p>
        <p><strong>Definizione.</strong> Una <em>disequazione</em> è una disuguaglianza tra due espressioni contenenti un'incognita, del tipo</p>
        <p>$$A(x) \\gt B(x), \\qquad A(x) \\ge B(x), \\qquad A(x) \\lt B(x), \\qquad A(x) \\le B(x).$$</p>
        <p>Risolvere una disequazione significa determinare l'insieme (in generale un intervallo o un'unione di intervalli) di tutti i valori dell'incognita che rendono vera la disuguaglianza.</p>
        <p>La differenza sostanziale rispetto alle equazioni è che la soluzione, di norma, <strong>non è costituita da pochi valori isolati ma da infiniti valori</strong>: un intervallo. Per questo la risposta si scrive nella forma $x \\gt 4$, $x \\le -1$, e così via.</p>`,
        subsections: [
          {
            subtitle: "Regole fondamentali",
            content: `<p>Data una disequazione, essa si trasforma in una disequazione equivalente (cioè con le stesse soluzioni) se:</p>
            <ol>
              <li>si somma o si sottrae la <strong>stessa quantità</strong> a entrambi i membri; il verso della disuguaglianza <strong>non cambia</strong>. Da qui segue la regola del trasporto, identica a quella delle equazioni: $$2x - 8 \\ge 0 \\iff 2x \\ge 8;$$</li>
              <li>si moltiplicano o si dividono entrambi i membri per una <strong>quantità positiva</strong>; il verso <strong>non cambia</strong>: $$2x \\ge 8 \\iff x \\ge 4;$$</li>
              <li>si moltiplicano o si dividono entrambi i membri per una <strong>quantità negativa</strong>; in questo caso il verso <strong>si inverte</strong>: $$-x \\ge 4 \\iff x \\le -4.$$</li>
            </ol>`
          }
        ]
      },

      {
        id: "s19-alert-cambio-verso",
        type: "alert_box",
        title: "Errore tipico: il cambio di verso",
        icon: "⚠️",
        content: `<p>Il cambio di verso quando si moltiplica o si divide per un numero negativo è <strong>l'errore più frequente in assoluto</strong>.</p>
        <p>Un controllo mentale rapido: $2 \\lt 3$ è vero; moltiplicando entrambi i membri per $-1$ si ottiene $-2$ e $-3$, e infatti $-2 \\gt -3$. La disuguaglianza si è rovesciata.</p>`
      },

      {
        id: "s20-es-diseq-cambio-verso",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione di primo grado con cambio di verso",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$3 - 2x \\lt 9$$</p>`,
        steps: [
          `Trasportiamo il termine noto $3$ al secondo membro, cambiandogli segno (il verso resta invariato): $$-2x \\lt 9 - 3 \\Rightarrow -2x \\lt 6$$`,
          `Dividiamo entrambi i membri per $-2$. Poiché stiamo dividendo per un numero <strong>negativo</strong>, dobbiamo <strong>invertire il verso</strong>: $$x \\gt \\frac{6}{-2} \\Rightarrow x \\gt -3$$`,
          `<strong>Soluzione</strong>: tutti i numeri reali maggiori di $-3$, cioè l'intervallo $(-3, +\\infty)$.`,
          `<strong>Verifica</strong>: proviamo con $x = 0$ (maggiore di $-3$): $3 - 0 = 3 \\lt 9$, vero. Proviamo con $x = -5$ (non appartiene alla soluzione): $3 + 10 = 13 \\lt 9$, falso. La soluzione è corretta.`
        ]
      },

      {
        id: "s21-es-diseq-lineare",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione lineare semplice",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$3x - 5 \\gt 7$$</p>`,
        steps: [
          `Portiamo il termine noto al secondo membro, cambiando di segno: $$3x \\gt 7 + 5 \\Rightarrow 3x \\gt 12$$`,
          `Dividiamo entrambi i membri per il coefficiente della $x$ (in questo caso 3, che è positivo, quindi <strong>non</strong> invertiamo il verso): $$x \\gt 4$$`,
          `La soluzione è l'intervallo di tutti i numeri reali maggiori di 4: $$x \\in (4, +\\infty)$$ dove la parentesi tonda indica che l'estremo 4 è <strong>escluso</strong>. Se avessimo avuto $\\ge$, avremmo incluso l'estremo usando una parentesi quadra: $[4, +\\infty)$.`,
          `<strong>Verifica rapida</strong>: per $x=5$ si ha $3(5)-5 = 10 \\gt 7$, vero. Per $x=0$ si ha $-5 \\gt 7$, falso. La soluzione è coerente.`
        ]
      },

      {
        id: "s22-figura-diseq-lineare",
        type: "note_box",
        title: "Lettura geometrica di 3x − 5 > 7",
        icon: "📈",
        content: `<p>Risolvere $3x-5 \\gt 7$ significa cercare dove la retta $y=3x-5$ sta sopra la retta orizzontale $y=7$.</p>
        <figure class="figura" data-id="precorso_lez02bb_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="m435141f2bb" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#m435141f2bb" x="44.8" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(39.6025 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-14" d="M 320 2035 
L 320 1523 
L 2170 1523 
L 2170 2035 
L 320 2035 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-18" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 116 364 
L 116 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#m435141f2bb" x="116" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(112.942344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#m435141f2bb" x="187.2" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(184.142344 244.972) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 258.4 364 
L 258.4 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#m435141f2bb" x="258.4" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(255.342344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#m435141f2bb" x="329.6" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(326.542344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 400.8 364 
L 400.8 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#m435141f2bb" x="400.8" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(397.742344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="xtick_7">
     <g id="line2d_13">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#m435141f2bb" x="472" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(468.942344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1c" d="M 3008 3981 
L 3008 4461 
L 768 4461 
L 346 2106 
L 813 2080 
Q 973 2272 1181 2390 
Q 1389 2509 1658 2509 
Q 1888 2509 2077 2432 
Q 2266 2355 2400 2217 
Q 2534 2080 2608 1891 
Q 2682 1702 2682 1478 
Q 2682 1210 2605 1008 
Q 2528 806 2397 672 
Q 2266 538 2090 470 
Q 1914 403 1722 403 
Q 1517 403 1347 464 
Q 1178 525 1053 637 
Q 928 749 854 899 
Q 781 1050 768 1222 
L 224 1222 
Q 230 915 345 672 
Q 461 429 659 265 
Q 858 102 1117 16 
Q 1376 -70 1670 -70 
Q 2067 -70 2364 54 
Q 2662 179 2860 390 
Q 3059 602 3158 874 
Q 3258 1146 3258 1434 
Q 3258 1824 3142 2115 
Q 3027 2406 2828 2601 
Q 2630 2797 2361 2893 
Q 2093 2989 1792 2989 
Q 1562 2989 1328 2909 
Q 1094 2829 947 2662 
L 934 2675 
L 1178 3981 
L 3008 3981 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1c"/>
      </g>
     </g>
    </g>
    <g id="xtick_8">
     <g id="line2d_15">
      <path d="M 543.2 364 
L 543.2 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <g>
       <use xlink:href="#m435141f2bb" x="543.2" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(540.142344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
    <g id="xtick_9">
     <g id="line2d_17">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#m435141f2bb" x="614.4" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- 7 -->
      <g style="fill: currentColor" transform="translate(611.342344 244.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1e" d="M 3258 3994 
L 3258 4461 
L 320 4461 
L 320 3949 
L 2701 3949 
Q 2342 3571 2032 3123 
Q 1722 2675 1485 2172 
Q 1248 1670 1097 1123 
Q 947 576 909 0 
L 1517 0 
Q 1549 531 1696 1094 
Q 1843 1658 2076 2189 
Q 2310 2720 2611 3187 
Q 2912 3654 3258 3994 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1e"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_19">
      <path d="M 44.8 336.8 
L 614.4 336.8 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <defs>
       <path id="me37f9ec010" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="336.8" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- -8 -->
      <g style="fill: currentColor" transform="translate(99.105 342.036) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1f" d="M 992 3360 
Q 992 3533 1056 3661 
Q 1120 3789 1225 3878 
Q 1331 3968 1478 4013 
Q 1626 4058 1786 4058 
Q 2118 4058 2332 3882 
Q 2547 3706 2547 3360 
Q 2547 3014 2336 2822 
Q 2125 2630 1798 2630 
Q 1632 2630 1485 2675 
Q 1338 2720 1229 2809 
Q 1120 2899 1056 3036 
Q 992 3174 992 3360 
z
M 416 3379 
Q 416 3072 589 2813 
Q 762 2554 1050 2438 
Q 666 2304 461 2006 
Q 256 1709 256 1306 
Q 256 960 374 701 
Q 493 442 701 269 
Q 909 96 1190 13 
Q 1472 -70 1798 -70 
Q 2112 -70 2387 19 
Q 2662 109 2864 285 
Q 3066 461 3184 717 
Q 3302 973 3302 1306 
Q 3302 1728 3104 2019 
Q 2906 2310 2496 2438 
Q 2784 2566 2953 2819 
Q 3123 3072 3123 3379 
Q 3123 3597 3046 3805 
Q 2970 4013 2806 4176 
Q 2643 4339 2380 4438 
Q 2118 4538 1747 4538 
Q 1485 4538 1245 4461 
Q 1005 4384 819 4237 
Q 634 4090 525 3875 
Q 416 3661 416 3379 
z
M 832 1280 
Q 832 1478 905 1638 
Q 979 1798 1110 1913 
Q 1242 2029 1418 2089 
Q 1594 2150 1792 2150 
Q 1984 2150 2153 2083 
Q 2323 2016 2451 1901 
Q 2579 1786 2652 1629 
Q 2726 1472 2726 1286 
Q 2726 1094 2659 934 
Q 2592 774 2467 656 
Q 2342 538 2172 470 
Q 2003 403 1798 403 
Q 1376 403 1104 636 
Q 832 870 832 1280 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1f" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_21">
      <path d="M 44.8 282.4 
L 614.4 282.4 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="282.4" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(99.105 287.636) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1b" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_23">
      <path d="M 44.8 228 
L 614.4 228 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_24">
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_12">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(103.384687 233.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_25">
      <path d="M 44.8 173.6 
L 614.4 173.6 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_26">
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="173.6" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_13">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(103.384687 178.836) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_27">
      <path d="M 44.8 132.8 
L 614.4 132.8 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_28">
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="132.8" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_14">
      <!-- 7 -->
      <g style="fill: currentColor" transform="translate(103.384687 138.036) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1e"/>
      </g>
     </g>
    </g>
    <g id="ytick_6">
     <g id="line2d_29">
      <path d="M 44.8 119.2 
L 614.4 119.2 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_30">
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="119.2" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_15">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(103.384687 124.436) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1f"/>
      </g>
     </g>
    </g>
    <g id="ytick_7">
     <g id="line2d_31">
      <path d="M 44.8 64.8 
L 614.4 64.8 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_32">
      <g>
       <use xlink:href="#me37f9ec010" x="116" y="64.8" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_16">
      <!-- 12 -->
      <g style="fill: currentColor" transform="translate(97.269375 70.036) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-19" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_33">
    <defs>
     <path id="m8dae1ac754" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m8dae1ac754" x="614.4" y="228" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_34">
    <defs>
     <path id="mdd58f8cf0c" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mdd58f8cf0c" x="116" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_35">
    <path d="M 44.8 336.8 
L 614.4 10.4 
L 614.4 10.4 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="line2d_36">
    <path d="M 44.8 132.8 
L 614.4 132.8 
L 614.4 132.8 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: #2f9e8f; stroke-width: 2"/>
   </g>
   <g id="line2d_37">
    <path d="M 401.096914 132.629858 
L 614.4 10.4 
L 614.4 10.4 
" clip-path="url(#p84b81ca067)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 116 364 
L 116 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 228 
L 614.4 228 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_17">
    <!-- x &gt; 4 -->
    <g style="fill: currentColor" transform="translate(495.335859 61.6) scale(0.11 -0.11)">
     <defs>
      <path id="HelveticaNeue-5f" d="M 1299 1741 
L 58 0 
L 717 0 
L 1638 1370 
L 2560 0 
L 3258 0 
L 1978 1786 
L 3117 3309 
L 2464 3309 
L 1638 2150 
L 845 3309 
L 147 3309 
L 1299 1741 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-3" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-25" d="M 294 384 
L 294 -45 
L 3546 1421 
L 3546 1818 
L 294 3290 
L 294 2854 
L 3014 1619 
L 294 384 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#HelveticaNeue-5f"/>
     <use xlink:href="#HelveticaNeue-3" transform="translate(51.796875 0)"/>
     <use xlink:href="#HelveticaNeue-25" transform="translate(79.59375 0)"/>
     <use xlink:href="#HelveticaNeue-3" transform="translate(139.59375 0)"/>
     <use xlink:href="#HelveticaNeue-1b" transform="translate(167.390625 0)"/>
    </g>
   </g>
   <g id="text_18">
    <!-- P -->
    <g style="fill: currentColor" transform="translate(406.8 126.8) scale(0.11 -0.11)">
     <defs>
      <path id="HelveticaNeue-37" d="M 1107 2381 
L 1107 4058 
L 2298 4058 
Q 2816 4058 3056 3843 
Q 3296 3629 3296 3219 
Q 3296 2810 3056 2592 
Q 2816 2374 2298 2381 
L 1107 2381 
z
M 499 4570 
L 499 0 
L 1107 0 
L 1107 1869 
L 2502 1869 
Q 3194 1862 3549 2220 
Q 3904 2579 3904 3219 
Q 3904 3859 3549 4214 
Q 3194 4570 2502 4570 
L 499 4570 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#HelveticaNeue-37"/>
    </g>
   </g>
   <g id="line2d_38">
    <defs>
     <path id="m90b3f31984" d="M 0 2.75 
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
    <g clip-path="url(#p84b81ca067)">
     <use xlink:href="#m90b3f31984" x="400.8" y="132.8" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_39">
     <path d="M 54.7 40.522 
L 65.7 40.522 
L 76.7 40.522 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_19">
     <g style="fill: currentColor" transform="translate(85.5 44.372) scale(0.11 -0.11)">
      <defs>
       <path id="DejaVuSans-Oblique-5c" d="M 1588 -325 
Q 1188 -997 936 -1164 
Q 684 -1331 294 -1331 
L -159 -1331 
L -63 -850 
L 269 -850 
Q 509 -850 678 -719 
Q 847 -588 1056 -206 
L 1234 128 
L 459 3500 
L 1069 3500 
L 1650 819 
L 3256 3500 
L 3859 3500 
L 1588 -325 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-20" d="M 678 2906 
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
       <path id="DejaVuSans-16" d="M 2597 2516 
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
       <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
       <path id="DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-18" d="M 691 4666 
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
      <use xlink:href="#DejaVuSans-Oblique-5c" transform="translate(0 0.78125)"/>
      <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
      <use xlink:href="#DejaVuSans-16" transform="translate(181.933594 0.78125)"/>
      <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(245.556641 0.78125)"/>
      <use xlink:href="#DejaVuSans-c9c" transform="translate(324.21875 0.78125)"/>
      <use xlink:href="#DejaVuSans-18" transform="translate(427.490234 0.78125)"/>
     </g>
    </g>
    <g id="line2d_40">
     <path d="M 54.7 58.837 
L 65.7 58.837 
L 76.7 58.837 
" style="fill: none; stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: #2f9e8f; stroke-width: 2"/>
    </g>
    <g id="text_20">
     <g style="fill: currentColor" transform="translate(85.5 62.687) scale(0.11 -0.11)">
      <defs>
       <path id="DejaVuSans-1a" d="M 525 4666 
L 3525 4666 
L 3525 4397 
L 1831 0 
L 1172 0 
L 2766 4134 
L 525 4134 
L 525 4666 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#DejaVuSans-Oblique-5c" transform="translate(0 0.09375)"/>
      <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.09375)"/>
      <use xlink:href="#DejaVuSans-1a" transform="translate(181.933594 0.09375)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p84b81ca067">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
        <p>La retta $y=3x-5$ si trova sopra la retta $y=7$ esattamente a destra del punto di intersezione $P=(4,7)$: questa è la lettura geometrica della soluzione $x \\gt 4$.</p>`
      },

      {
        id: "s23-es-diseq-due-membri",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione con termini su entrambi i membri",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$2x - 1 \\gt -x + 7$$</p>`,
        steps: [
          `Raggruppiamo i termini con la $x$ al primo membro e i termini noti al secondo, ricordando di cambiare i segni quando spostiamo i termini: $$2x + x \\gt 7 + 1$$`,
          `Sommiamo i termini simili: $$3x \\gt 8$$`,
          `Dividiamo per 3 (positivo, il verso non cambia): $$x \\gt \\frac{8}{3}$$`,
          `Geometricamente, stiamo cercando i valori di $x$ per cui la retta $y=2x-1$ si trova sopra la retta $y=-x+7$.`
        ]
      },

      {
        id: "s24-figura-due-rette",
        type: "note_box",
        title: "Confronto tra due rette",
        icon: "📈",
        content: `<p>Il punto di intersezione delle due rette ha ascissa $x = 8/3$; a destra di quel punto $y=2x-1$ sta sopra $y=-x+7$.</p>
        <figure class="figura" data-id="precorso_lez02bb_g2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="mc70623d233" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mc70623d233" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(41.742344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#mc70623d233" x="139.733333" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(136.675677 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#mc70623d233" x="234.666667" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(231.60901 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 297.955556 364 
L 297.955556 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#mc70623d233" x="297.955556" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 2.67 -->
      <g style="fill: currentColor" transform="translate(287.253759 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-15" d="M 531 710 
L 531 0 
L 1242 0 
L 1242 710 
L 531 710 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
        <path id="HelveticaNeue-1e" d="M 3258 3994 
L 3258 4461 
L 320 4461 
L 320 3949 
L 2701 3949 
Q 2342 3571 2032 3123 
Q 1722 2675 1485 2172 
Q 1248 1670 1097 1123 
Q 947 576 909 0 
L 1517 0 
Q 1549 531 1696 1094 
Q 1843 1658 2076 2189 
Q 2310 2720 2611 3187 
Q 2912 3654 3258 3994 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-19"/>
       <use xlink:href="#HelveticaNeue-15" transform="translate(55.59375 0)"/>
       <use xlink:href="#HelveticaNeue-1d" transform="translate(83.390625 0)"/>
       <use xlink:href="#HelveticaNeue-1e" transform="translate(138.984375 0)"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#mc70623d233" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(326.542344 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#mc70623d233" x="424.533333" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(421.475677 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="xtick_7">
     <g id="line2d_13">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#mc70623d233" x="519.466667" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(516.40901 380.972) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1c" d="M 3008 3981 
L 3008 4461 
L 768 4461 
L 346 2106 
L 813 2080 
Q 973 2272 1181 2390 
Q 1389 2509 1658 2509 
Q 1888 2509 2077 2432 
Q 2266 2355 2400 2217 
Q 2534 2080 2608 1891 
Q 2682 1702 2682 1478 
Q 2682 1210 2605 1008 
Q 2528 806 2397 672 
Q 2266 538 2090 470 
Q 1914 403 1722 403 
Q 1517 403 1347 464 
Q 1178 525 1053 637 
Q 928 749 854 899 
Q 781 1050 768 1222 
L 224 1222 
Q 230 915 345 672 
Q 461 429 659 265 
Q 858 102 1117 16 
Q 1376 -70 1670 -70 
Q 2067 -70 2364 54 
Q 2662 179 2860 390 
Q 3059 602 3158 874 
Q 3258 1146 3258 1434 
Q 3258 1824 3142 2115 
Q 3027 2406 2828 2601 
Q 2630 2797 2361 2893 
Q 2093 2989 1792 2989 
Q 1562 2989 1328 2909 
Q 1094 2829 947 2662 
L 934 2675 
L 1178 3981 
L 3008 3981 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1c"/>
      </g>
     </g>
    </g>
    <g id="xtick_8">
     <g id="line2d_15">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <g>
       <use xlink:href="#mc70623d233" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(611.342344 380.972) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_17">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <defs>
       <path id="md5d28c4767" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(32.184688 369.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_19">
      <path d="M 44.8 296 
L 614.4 296 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="296" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(32.184688 301.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_21">
      <path d="M 44.8 228 
L 614.4 228 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="228" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(32.184688 233.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_23">
      <path d="M 44.8 216.666667 
L 614.4 216.666667 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_24">
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="216.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_12">
      <!-- 4.33 -->
      <g style="fill: currentColor" transform="translate(16.896406 221.902667) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
       <use xlink:href="#HelveticaNeue-15" transform="translate(55.59375 0)"/>
       <use xlink:href="#HelveticaNeue-1a" transform="translate(83.390625 0)"/>
       <use xlink:href="#HelveticaNeue-1a" transform="translate(138.984375 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_25">
      <path d="M 44.8 160 
L 614.4 160 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_26">
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="160" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_13">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(32.184688 165.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
    <g id="ytick_6">
     <g id="line2d_27">
      <path d="M 44.8 92 
L 614.4 92 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_28">
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="92" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_14">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(32.184688 97.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1f" d="M 992 3360 
Q 992 3533 1056 3661 
Q 1120 3789 1225 3878 
Q 1331 3968 1478 4013 
Q 1626 4058 1786 4058 
Q 2118 4058 2332 3882 
Q 2547 3706 2547 3360 
Q 2547 3014 2336 2822 
Q 2125 2630 1798 2630 
Q 1632 2630 1485 2675 
Q 1338 2720 1229 2809 
Q 1120 2899 1056 3036 
Q 992 3174 992 3360 
z
M 416 3379 
Q 416 3072 589 2813 
Q 762 2554 1050 2438 
Q 666 2304 461 2006 
Q 256 1709 256 1306 
Q 256 960 374 701 
Q 493 442 701 269 
Q 909 96 1190 13 
Q 1472 -70 1798 -70 
Q 2112 -70 2387 19 
Q 2662 109 2864 285 
Q 3066 461 3184 717 
Q 3302 973 3302 1306 
Q 3302 1728 3104 2019 
Q 2906 2310 2496 2438 
Q 2784 2566 2953 2819 
Q 3123 3072 3123 3379 
Q 3123 3597 3046 3805 
Q 2970 4013 2806 4176 
Q 2643 4339 2380 4438 
Q 2118 4538 1747 4538 
Q 1485 4538 1245 4461 
Q 1005 4384 819 4237 
Q 634 4090 525 3875 
Q 416 3661 416 3379 
z
M 832 1280 
Q 832 1478 905 1638 
Q 979 1798 1110 1913 
Q 1242 2029 1418 2089 
Q 1594 2150 1792 2150 
Q 1984 2150 2153 2083 
Q 2323 2016 2451 1901 
Q 2579 1786 2652 1629 
Q 2726 1472 2726 1286 
Q 2726 1094 2659 934 
Q 2592 774 2467 656 
Q 2342 538 2172 470 
Q 2003 403 1798 403 
Q 1376 403 1104 636 
Q 832 870 832 1280 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1f"/>
      </g>
     </g>
    </g>
    <g id="ytick_7">
     <g id="line2d_29">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_30">
      <g>
       <use xlink:href="#md5d28c4767" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_15">
      <!-- 10 -->
      <g style="fill: currentColor" transform="translate(26.069375 29.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
       <use xlink:href="#HelveticaNeue-17" transform="translate(55.59375 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_31">
    <defs>
     <path id="me61e3b93bf" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#me61e3b93bf" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_32">
    <defs>
     <path id="m085cb58d87" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m085cb58d87" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_33">
    <path d="M 44.8 398 
L 601.835294 -1 
L 601.835294 -1 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="line2d_34">
    <path d="M 44.8 126 
L 614.4 330 
L 614.4 330 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="line2d_35">
    <path d="M 298.00834 216.628857 
L 601.835294 -1 
L 601.835294 -1 
" clip-path="url(#p3739d0bb43)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 44.8 364 
L 44.8 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 364 
L 614.4 364 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_16">
    <!-- x &gt; 8/3 -->
    <g style="fill: currentColor" transform="translate(439.024653 93.333333) scale(0.11 -0.11)">
     <defs>
      <path id="HelveticaNeue-5f" d="M 1299 1741 
L 58 0 
L 717 0 
L 1638 1370 
L 2560 0 
L 3258 0 
L 1978 1786 
L 3117 3309 
L 2464 3309 
L 1638 2150 
L 845 3309 
L 147 3309 
L 1299 1741 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-3" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-25" d="M 294 384 
L 294 -45 
L 3546 1421 
L 3546 1818 
L 294 3290 
L 294 2854 
L 3014 1619 
L 294 384 
z
" transform="scale(0.015625)"/>
      <path id="HelveticaNeue-16" d="M 1779 4678 
L -109 -102 
L 352 -102 
L 2246 4678 
L 1779 4678 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#HelveticaNeue-5f"/>
     <use xlink:href="#HelveticaNeue-3" transform="translate(51.796875 0)"/>
     <use xlink:href="#HelveticaNeue-25" transform="translate(79.59375 0)"/>
     <use xlink:href="#HelveticaNeue-3" transform="translate(139.59375 0)"/>
     <use xlink:href="#HelveticaNeue-1f" transform="translate(167.390625 0)"/>
     <use xlink:href="#HelveticaNeue-16" transform="translate(222.984375 0)"/>
     <use xlink:href="#HelveticaNeue-1a" transform="translate(256.28125 0)"/>
    </g>
   </g>
   <g id="text_17">
    <!-- P -->
    <g style="fill: currentColor" transform="translate(303.955556 210.666667) scale(0.11 -0.11)">
     <defs>
      <path id="HelveticaNeue-37" d="M 1107 2381 
L 1107 4058 
L 2298 4058 
Q 2816 4058 3056 3843 
Q 3296 3629 3296 3219 
Q 3296 2810 3056 2592 
Q 2816 2374 2298 2381 
L 1107 2381 
z
M 499 4570 
L 499 0 
L 1107 0 
L 1107 1869 
L 2502 1869 
Q 3194 1862 3549 2220 
Q 3904 2579 3904 3219 
Q 3904 3859 3549 4214 
Q 3194 4570 2502 4570 
L 499 4570 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#HelveticaNeue-37"/>
    </g>
   </g>
   <g id="line2d_36">
    <defs>
     <path id="m54c5b2fdd0" d="M 0 2.75 
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
    <g clip-path="url(#p3739d0bb43)">
     <use xlink:href="#m54c5b2fdd0" x="297.955556" y="216.666667" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_37">
     <path d="M 54.7 40.522 
L 65.7 40.522 
L 76.7 40.522 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_18">
     <g style="fill: currentColor" transform="translate(85.5 44.372) scale(0.11 -0.11)">
      <defs>
       <path id="DejaVuSans-Oblique-5c" d="M 1588 -325 
Q 1188 -997 936 -1164 
Q 684 -1331 294 -1331 
L -159 -1331 
L -63 -850 
L 269 -850 
Q 509 -850 678 -719 
Q 847 -588 1056 -206 
L 1234 128 
L 459 3500 
L 1069 3500 
L 1650 819 
L 3256 3500 
L 3859 3500 
L 1588 -325 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-20" d="M 678 2906 
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
       <path id="DejaVuSans-15" d="M 1228 531 
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
       <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
       <path id="DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-14" d="M 794 531 
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
      <use xlink:href="#DejaVuSans-Oblique-5c" transform="translate(0 0.78125)"/>
      <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
      <use xlink:href="#DejaVuSans-15" transform="translate(181.933594 0.78125)"/>
      <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(245.556641 0.78125)"/>
      <use xlink:href="#DejaVuSans-c9c" transform="translate(324.21875 0.78125)"/>
      <use xlink:href="#DejaVuSans-14" transform="translate(427.490234 0.78125)"/>
     </g>
    </g>
    <g id="line2d_38">
     <path d="M 54.7 58.837 
L 65.7 58.837 
L 76.7 58.837 
" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_19">
     <g style="fill: currentColor" transform="translate(85.5 62.687) scale(0.11 -0.11)">
      <defs>
       <path id="DejaVuSans-e" d="M 2944 4013 
L 2944 2272 
L 4684 2272 
L 4684 1741 
L 2944 1741 
L 2944 0 
L 2419 0 
L 2419 1741 
L 678 1741 
L 678 2272 
L 2419 2272 
L 2419 4013 
L 2944 4013 
z
" transform="scale(0.015625)"/>
       <path id="DejaVuSans-1a" d="M 525 4666 
L 3525 4666 
L 3525 4397 
L 1831 0 
L 1172 0 
L 2766 4134 
L 525 4134 
L 525 4666 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#DejaVuSans-Oblique-5c" transform="translate(0 0.09375)"/>
      <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.09375)"/>
      <use xlink:href="#DejaVuSans-c9c" transform="translate(181.933594 0.09375)"/>
      <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(265.722656 0.09375)"/>
      <use xlink:href="#DejaVuSans-e" transform="translate(344.384766 0.09375)"/>
      <use xlink:href="#DejaVuSans-1a" transform="translate(447.65625 0.09375)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p3739d0bb43">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
      },

      {
        id: "s25-diseq-secondo-grado",
        type: "section",
        title: "Disequazioni di Secondo Grado e Metodo della Parabola",
        icon: "🎢",
        content: `<p>Per una disequazione di secondo grado non si procede "isolando la $x$": si sfrutta invece il legame con la <strong>parabola</strong>.</p>`,
        subsections: [
          {
            subtitle: "Il metodo della parabola",
            content: `<p>Per risolvere una disequazione del tipo $ax^2+bx+c \\gt 0$ (o con altri segni di disuguaglianza):</p>
            <ol>
              <li>Si risolve l'equazione associata $ax^2+bx+c=0$ per trovare le radici (intersezioni con l'asse $x$), se esistono.</li>
              <li>Si osserva il segno di $a$: se $a \\gt 0$ la parabola ha la concavità verso l'alto ("sorride"); se $a \\lt 0$ ha la concavità verso il basso ("piange").</li>
              <li>Si disegna un grafico qualitativo della parabola e si determina l'intervallo in cui la disequazione è soddisfatta (sopra l'asse $x$ per $\\gt 0$, sotto per $\\lt 0$).</li>
            </ol>
            <p>La regola pratica che ne discende è la nota formula <strong>"valori esterni / valori interni"</strong>: con $a \\gt 0$ la disequazione $\\gt 0$ è soddisfatta <em>fuori</em> dalle radici, mentre la disequazione $\\lt 0$ è soddisfatta <em>tra</em> le radici (e viceversa se $a \\lt 0$).</p>`
          },
          {
            subtitle: "Regola pratica per a > 0",
            content: `<p>Si risolve prima l'equazione associata e si guarda il discriminante $\\Delta$:</p>
            <ul>
              <li>se $\\Delta \\gt 0$ ci sono due radici $x_1 \\lt x_2$, e la parabola sta <strong>sopra</strong> l'asse $x$ all'esterno delle radici e <strong>sotto</strong> nell'intervallo interno: $$ax^2+bx+c \\gt 0 \\iff x \\lt x_1 \\ \\text{oppure} \\ x \\gt x_2,$$ $$ax^2+bx+c \\lt 0 \\iff x_1 \\lt x \\lt x_2;$$</li>
              <li>se $\\Delta = 0$ l'espressione è sempre positiva tranne nell'unica radice, dove vale zero;</li>
              <li>se $\\Delta \\lt 0$ l'espressione è sempre positiva per ogni $x \\in \\mathbb{R}$ (la parabola non incontra mai l'asse $x$).</li>
            </ul>
            <p>Se invece $a \\lt 0$ conviene moltiplicare tutta la disequazione per $-1$, <strong>ricordando di invertire il verso</strong>, per riportarsi al caso $a \\gt 0$.</p>`
          }
        ]
      },

      {
        id: "s26-es-diseq-2g-alto",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Parabola con concavità verso l'alto",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$x^2 - 5x + 6 \\gt 0$$</p>`,
        steps: [
          `<strong>Equazione associata</strong>: risolviamo $x^2 - 5x + 6 = 0$. Il discriminante è $\\Delta = 25 - 24 = 1 \\gt 0$, quindi $$x_{1,2} = \\frac{5 \\pm 1}{2} \\Rightarrow x_1 = 2, \\quad x_2 = 3.$$ (Le rinominiamo in ordine crescente, come richiede la regola pratica $x_1 \\lt x_2$.)`,
          `<strong>Analisi della parabola</strong>: il coefficiente di $x^2$ è $a=1 \\gt 0$, quindi la parabola ha la concavità verso l'alto. Di conseguenza l'espressione è positiva "esternamente" alle due radici e negativa fra di esse.`,
          `<strong>Soluzione</strong>: poiché la disequazione richiede il segno positivo, $$x \\lt 2 \\quad \\text{oppure} \\quad x \\gt 3.$$`,
          `<strong>Verifica su valori di prova</strong>: per $x = 0$ (esterno) si ha $6 \\gt 0$, vero; per $x = 2.5$ (interno) si ha $6.25 - 12.5 + 6 = -0.25$, negativo, quindi correttamente escluso; per $x = 4$ (esterno) si ha $16 - 20 + 6 = 2 \\gt 0$, vero.`
        ]
      },

      {
        id: "s27-figura-parabola-positiva",
        type: "note_box",
        title: "Le zone di positività evidenziate",
        icon: "📈",
        content: `<p>Le aree colorate indicano dove la parabola sta sopra l'asse $x$: sono esattamente le zone esterne alle radici.</p>
        <figure class="figura" data-id="precorso_lez02bb_g3"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="FillBetweenPolyCollection_1">
    <defs>
     <path id="m8f43fff684" d="M 44.8 -73.777778 
L 44.8 -300.444444 
L 45.944925 -298.549879 
L 47.089849 -296.662946 
L 48.234774 -294.783645 
L 49.379698 -292.911975 
L 50.524623 -291.047936 
L 51.669548 -289.19153 
L 52.814472 -287.342755 
L 53.959397 -285.501612 
L 55.104322 -283.6681 
L 56.249246 -281.842221 
L 57.394171 -280.023972 
L 58.539095 -278.213356 
L 59.68402 -276.410371 
L 60.828945 -274.615018 
L 61.973869 -272.827297 
L 63.118794 -271.047207 
L 64.263719 -269.274749 
L 65.408643 -267.509923 
L 66.553568 -265.752728 
L 67.698492 -264.003165 
L 68.843417 -262.261234 
L 69.988342 -260.526934 
L 71.133266 -258.800266 
L 72.278191 -257.08123 
L 73.423116 -255.369825 
L 74.56804 -253.666052 
L 75.712965 -251.969911 
L 76.857889 -250.281401 
L 78.002814 -248.600524 
L 79.147739 -246.927277 
L 80.292663 -245.261663 
L 81.437588 -243.60368 
L 82.582513 -241.953329 
L 83.727437 -240.310609 
L 84.872362 -238.675522 
L 86.017286 -237.048066 
L 87.162211 -235.428241 
L 88.307136 -233.816048 
L 89.45206 -232.211487 
L 90.596985 -230.614558 
L 91.74191 -229.02526 
L 92.886834 -227.443594 
L 94.031759 -225.86956 
L 95.176683 -224.303157 
L 96.321608 -222.744386 
L 97.466533 -221.193247 
L 98.611457 -219.649739 
L 99.756382 -218.113864 
L 100.901307 -216.585619 
L 102.046231 -215.065007 
L 103.191156 -213.552026 
L 104.33608 -212.046677 
L 105.481005 -210.548959 
L 106.62593 -209.058873 
L 107.770854 -207.576419 
L 108.915779 -206.101597 
L 110.060704 -204.634406 
L 111.205628 -203.174847 
L 112.350553 -201.722919 
L 113.495477 -200.278624 
L 114.640402 -198.84196 
L 115.785327 -197.412927 
L 116.930251 -195.991527 
L 118.075176 -194.577758 
L 119.220101 -193.17162 
L 120.365025 -191.773115 
L 121.50995 -190.382241 
L 122.654874 -188.998998 
L 123.799799 -187.623388 
L 124.944724 -186.255409 
L 126.089648 -184.895062 
L 127.234573 -183.542346 
L 128.379497 -182.197262 
L 129.524422 -180.85981 
L 130.669347 -179.529989 
L 131.814271 -178.207801 
L 132.959196 -176.893243 
L 134.104121 -175.586318 
L 135.249045 -174.287024 
L 136.39397 -172.995362 
L 137.538894 -171.711332 
L 138.683819 -170.434933 
L 139.828744 -169.166166 
L 140.973668 -167.90503 
L 142.118593 -166.651527 
L 143.263518 -165.405655 
L 144.408442 -164.167414 
L 145.553367 -162.936806 
L 146.698291 -161.713829 
L 147.843216 -160.498483 
L 148.988141 -159.29077 
L 150.133065 -158.090688 
L 151.27799 -156.898238 
L 152.422915 -155.713419 
L 153.567839 -154.536232 
L 154.712764 -153.366677 
L 155.857688 -152.204754 
L 157.002613 -151.050462 
L 158.147538 -149.903802 
L 159.292462 -148.764773 
L 160.437387 -147.633376 
L 161.582312 -146.509611 
L 162.727236 -145.393478 
L 163.872161 -144.284976 
L 165.017085 -143.184106 
L 166.16201 -142.090868 
L 167.306935 -141.005261 
L 168.451859 -139.927286 
L 169.596784 -138.856942 
L 170.741709 -137.794231 
L 171.886633 -136.739151 
L 173.031558 -135.691703 
L 174.176482 -134.651886 
L 175.321407 -133.619701 
L 176.466332 -132.595148 
L 177.611256 -131.578226 
L 178.756181 -130.568936 
L 179.901106 -129.567278 
L 181.04603 -128.573252 
L 182.190955 -127.586857 
L 183.335879 -126.608094 
L 184.480804 -125.636962 
L 185.625729 -124.673462 
L 186.770653 -123.717594 
L 187.915578 -122.769358 
L 189.060503 -121.828753 
L 190.205427 -120.89578 
L 191.350352 -119.970438 
L 192.495276 -119.052729 
L 193.640201 -118.142651 
L 194.785126 -117.240204 
L 195.93005 -116.34539 
L 197.074975 -115.458207 
L 198.219899 -114.578655 
L 199.364824 -113.706736 
L 200.509749 -112.842448 
L 201.654673 -111.985792 
L 202.799598 -111.136767 
L 203.944523 -110.295374 
L 205.089447 -109.461613 
L 206.234372 -108.635483 
L 207.379296 -107.816986 
L 208.524221 -107.006119 
L 209.669146 -106.202885 
L 210.81407 -105.407282 
L 211.958995 -104.619311 
L 213.10392 -103.838972 
L 214.248844 -103.066264 
L 215.393769 -102.301188 
L 216.538693 -101.543743 
L 217.683618 -100.793931 
L 218.828543 -100.05175 
L 219.973467 -99.3172 
L 221.118392 -98.590283 
L 222.263317 -97.870997 
L 223.408241 -97.159342 
L 224.553166 -96.45532 
L 225.69809 -95.758929 
L 226.843015 -95.070169 
L 227.98794 -94.389042 
L 229.132864 -93.715546 
L 230.277789 -93.049682 
L 231.422714 -92.391449 
L 232.567638 -91.740848 
L 233.712563 -91.097879 
L 234.857487 -90.462542 
L 236.002412 -89.834836 
L 237.147337 -89.214762 
L 238.292261 -88.602319 
L 239.437186 -87.997508 
L 240.582111 -87.400329 
L 241.727035 -86.810782 
L 242.87196 -86.228866 
L 244.016884 -85.654582 
L 245.161809 -85.08793 
L 246.306734 -84.528909 
L 247.451658 -83.97752 
L 248.596583 -83.433763 
L 249.741508 -82.897637 
L 250.886432 -82.369143 
L 252.031357 -81.848281 
L 253.176281 -81.33505 
L 254.321206 -80.829452 
L 255.466131 -80.331484 
L 256.611055 -79.841149 
L 257.75598 -79.358445 
L 258.900905 -78.883373 
L 260.045829 -78.415932 
L 261.190754 -77.956123 
L 262.335678 -77.503946 
L 263.480603 -77.059401 
L 264.625528 -76.622487 
L 265.770452 -76.193205 
L 266.915377 -75.771555 
L 268.060302 -75.357536 
L 269.205226 -74.951149 
L 270.350151 -74.552393 
L 271.495075 -74.16127 
L 272.64 -73.777778 
L 272.64 -73.777778 
L 272.64 -73.777778 
L 271.495075 -73.777778 
L 270.350151 -73.777778 
L 269.205226 -73.777778 
L 268.060302 -73.777778 
L 266.915377 -73.777778 
L 265.770452 -73.777778 
L 264.625528 -73.777778 
L 263.480603 -73.777778 
L 262.335678 -73.777778 
L 261.190754 -73.777778 
L 260.045829 -73.777778 
L 258.900905 -73.777778 
L 257.75598 -73.777778 
L 256.611055 -73.777778 
L 255.466131 -73.777778 
L 254.321206 -73.777778 
L 253.176281 -73.777778 
L 252.031357 -73.777778 
L 250.886432 -73.777778 
L 249.741508 -73.777778 
L 248.596583 -73.777778 
L 247.451658 -73.777778 
L 246.306734 -73.777778 
L 245.161809 -73.777778 
L 244.016884 -73.777778 
L 242.87196 -73.777778 
L 241.727035 -73.777778 
L 240.582111 -73.777778 
L 239.437186 -73.777778 
L 238.292261 -73.777778 
L 237.147337 -73.777778 
L 236.002412 -73.777778 
L 234.857487 -73.777778 
L 233.712563 -73.777778 
L 232.567638 -73.777778 
L 231.422714 -73.777778 
L 230.277789 -73.777778 
L 229.132864 -73.777778 
L 227.98794 -73.777778 
L 226.843015 -73.777778 
L 225.69809 -73.777778 
L 224.553166 -73.777778 
L 223.408241 -73.777778 
L 222.263317 -73.777778 
L 221.118392 -73.777778 
L 219.973467 -73.777778 
L 218.828543 -73.777778 
L 217.683618 -73.777778 
L 216.538693 -73.777778 
L 215.393769 -73.777778 
L 214.248844 -73.777778 
L 213.10392 -73.777778 
L 211.958995 -73.777778 
L 210.81407 -73.777778 
L 209.669146 -73.777778 
L 208.524221 -73.777778 
L 207.379296 -73.777778 
L 206.234372 -73.777778 
L 205.089447 -73.777778 
L 203.944523 -73.777778 
L 202.799598 -73.777778 
L 201.654673 -73.777778 
L 200.509749 -73.777778 
L 199.364824 -73.777778 
L 198.219899 -73.777778 
L 197.074975 -73.777778 
L 195.93005 -73.777778 
L 194.785126 -73.777778 
L 193.640201 -73.777778 
L 192.495276 -73.777778 
L 191.350352 -73.777778 
L 190.205427 -73.777778 
L 189.060503 -73.777778 
L 187.915578 -73.777778 
L 186.770653 -73.777778 
L 185.625729 -73.777778 
L 184.480804 -73.777778 
L 183.335879 -73.777778 
L 182.190955 -73.777778 
L 181.04603 -73.777778 
L 179.901106 -73.777778 
L 178.756181 -73.777778 
L 177.611256 -73.777778 
L 176.466332 -73.777778 
L 175.321407 -73.777778 
L 174.176482 -73.777778 
L 173.031558 -73.777778 
L 171.886633 -73.777778 
L 170.741709 -73.777778 
L 169.596784 -73.777778 
L 168.451859 -73.777778 
L 167.306935 -73.777778 
L 166.16201 -73.777778 
L 165.017085 -73.777778 
L 163.872161 -73.777778 
L 162.727236 -73.777778 
L 161.582312 -73.777778 
L 160.437387 -73.777778 
L 159.292462 -73.777778 
L 158.147538 -73.777778 
L 157.002613 -73.777778 
L 155.857688 -73.777778 
L 154.712764 -73.777778 
L 153.567839 -73.777778 
L 152.422915 -73.777778 
L 151.27799 -73.777778 
L 150.133065 -73.777778 
L 148.988141 -73.777778 
L 147.843216 -73.777778 
L 146.698291 -73.777778 
L 145.553367 -73.777778 
L 144.408442 -73.777778 
L 143.263518 -73.777778 
L 142.118593 -73.777778 
L 140.973668 -73.777778 
L 139.828744 -73.777778 
L 138.683819 -73.777778 
L 137.538894 -73.777778 
L 136.39397 -73.777778 
L 135.249045 -73.777778 
L 134.104121 -73.777778 
L 132.959196 -73.777778 
L 131.814271 -73.777778 
L 130.669347 -73.777778 
L 129.524422 -73.777778 
L 128.379497 -73.777778 
L 127.234573 -73.777778 
L 126.089648 -73.777778 
L 124.944724 -73.777778 
L 123.799799 -73.777778 
L 122.654874 -73.777778 
L 121.50995 -73.777778 
L 120.365025 -73.777778 
L 119.220101 -73.777778 
L 118.075176 -73.777778 
L 116.930251 -73.777778 
L 115.785327 -73.777778 
L 114.640402 -73.777778 
L 113.495477 -73.777778 
L 112.350553 -73.777778 
L 111.205628 -73.777778 
L 110.060704 -73.777778 
L 108.915779 -73.777778 
L 107.770854 -73.777778 
L 106.62593 -73.777778 
L 105.481005 -73.777778 
L 104.33608 -73.777778 
L 103.191156 -73.777778 
L 102.046231 -73.777778 
L 100.901307 -73.777778 
L 99.756382 -73.777778 
L 98.611457 -73.777778 
L 97.466533 -73.777778 
L 96.321608 -73.777778 
L 95.176683 -73.777778 
L 94.031759 -73.777778 
L 92.886834 -73.777778 
L 91.74191 -73.777778 
L 90.596985 -73.777778 
L 89.45206 -73.777778 
L 88.307136 -73.777778 
L 87.162211 -73.777778 
L 86.017286 -73.777778 
L 84.872362 -73.777778 
L 83.727437 -73.777778 
L 82.582513 -73.777778 
L 81.437588 -73.777778 
L 80.292663 -73.777778 
L 79.147739 -73.777778 
L 78.002814 -73.777778 
L 76.857889 -73.777778 
L 75.712965 -73.777778 
L 74.56804 -73.777778 
L 73.423116 -73.777778 
L 72.278191 -73.777778 
L 71.133266 -73.777778 
L 69.988342 -73.777778 
L 68.843417 -73.777778 
L 67.698492 -73.777778 
L 66.553568 -73.777778 
L 65.408643 -73.777778 
L 64.263719 -73.777778 
L 63.118794 -73.777778 
L 61.973869 -73.777778 
L 60.828945 -73.777778 
L 59.68402 -73.777778 
L 58.539095 -73.777778 
L 57.394171 -73.777778 
L 56.249246 -73.777778 
L 55.104322 -73.777778 
L 53.959397 -73.777778 
L 52.814472 -73.777778 
L 51.669548 -73.777778 
L 50.524623 -73.777778 
L 49.379698 -73.777778 
L 48.234774 -73.777778 
L 47.089849 -73.777778 
L 45.944925 -73.777778 
L 44.8 -73.777778 
z
"/>
    </defs>
    <g clip-path="url(#p77bc64d961)">
     <use xlink:href="#m8f43fff684" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="FillBetweenPolyCollection_2">
    <defs>
     <path id="m8e743a1811" d="M 386.56 -73.777778 
L 386.56 -73.777778 
L 387.704925 -74.16127 
L 388.849849 -74.552393 
L 389.994774 -74.951149 
L 391.139698 -75.357536 
L 392.284623 -75.771555 
L 393.429548 -76.193205 
L 394.574472 -76.622487 
L 395.719397 -77.059401 
L 396.864322 -77.503946 
L 398.009246 -77.956123 
L 399.154171 -78.415932 
L 400.299095 -78.883373 
L 401.44402 -79.358445 
L 402.588945 -79.841149 
L 403.733869 -80.331484 
L 404.878794 -80.829452 
L 406.023719 -81.33505 
L 407.168643 -81.848281 
L 408.313568 -82.369143 
L 409.458492 -82.897637 
L 410.603417 -83.433763 
L 411.748342 -83.97752 
L 412.893266 -84.528909 
L 414.038191 -85.08793 
L 415.183116 -85.654582 
L 416.32804 -86.228866 
L 417.472965 -86.810782 
L 418.617889 -87.400329 
L 419.762814 -87.997508 
L 420.907739 -88.602319 
L 422.052663 -89.214762 
L 423.197588 -89.834836 
L 424.342513 -90.462542 
L 425.487437 -91.097879 
L 426.632362 -91.740848 
L 427.777286 -92.391449 
L 428.922211 -93.049682 
L 430.067136 -93.715546 
L 431.21206 -94.389042 
L 432.356985 -95.070169 
L 433.50191 -95.758929 
L 434.646834 -96.45532 
L 435.791759 -97.159342 
L 436.936683 -97.870997 
L 438.081608 -98.590283 
L 439.226533 -99.3172 
L 440.371457 -100.05175 
L 441.516382 -100.793931 
L 442.661307 -101.543743 
L 443.806231 -102.301188 
L 444.951156 -103.066264 
L 446.09608 -103.838972 
L 447.241005 -104.619311 
L 448.38593 -105.407282 
L 449.530854 -106.202885 
L 450.675779 -107.006119 
L 451.820704 -107.816986 
L 452.965628 -108.635483 
L 454.110553 -109.461613 
L 455.255477 -110.295374 
L 456.400402 -111.136767 
L 457.545327 -111.985792 
L 458.690251 -112.842448 
L 459.835176 -113.706736 
L 460.980101 -114.578655 
L 462.125025 -115.458207 
L 463.26995 -116.34539 
L 464.414874 -117.240204 
L 465.559799 -118.142651 
L 466.704724 -119.052729 
L 467.849648 -119.970438 
L 468.994573 -120.89578 
L 470.139497 -121.828753 
L 471.284422 -122.769358 
L 472.429347 -123.717594 
L 473.574271 -124.673462 
L 474.719196 -125.636962 
L 475.864121 -126.608094 
L 477.009045 -127.586857 
L 478.15397 -128.573252 
L 479.298894 -129.567278 
L 480.443819 -130.568936 
L 481.588744 -131.578226 
L 482.733668 -132.595148 
L 483.878593 -133.619701 
L 485.023518 -134.651886 
L 486.168442 -135.691703 
L 487.313367 -136.739151 
L 488.458291 -137.794231 
L 489.603216 -138.856942 
L 490.748141 -139.927286 
L 491.893065 -141.005261 
L 493.03799 -142.090868 
L 494.182915 -143.184106 
L 495.327839 -144.284976 
L 496.472764 -145.393478 
L 497.617688 -146.509611 
L 498.762613 -147.633376 
L 499.907538 -148.764773 
L 501.052462 -149.903802 
L 502.197387 -151.050462 
L 503.342312 -152.204754 
L 504.487236 -153.366677 
L 505.632161 -154.536232 
L 506.777085 -155.713419 
L 507.92201 -156.898238 
L 509.066935 -158.090688 
L 510.211859 -159.29077 
L 511.356784 -160.498483 
L 512.501709 -161.713829 
L 513.646633 -162.936806 
L 514.791558 -164.167414 
L 515.936482 -165.405655 
L 517.081407 -166.651527 
L 518.226332 -167.90503 
L 519.371256 -169.166166 
L 520.516181 -170.434933 
L 521.661106 -171.711332 
L 522.80603 -172.995362 
L 523.950955 -174.287024 
L 525.095879 -175.586318 
L 526.240804 -176.893243 
L 527.385729 -178.207801 
L 528.530653 -179.529989 
L 529.675578 -180.85981 
L 530.820503 -182.197262 
L 531.965427 -183.542346 
L 533.110352 -184.895062 
L 534.255276 -186.255409 
L 535.400201 -187.623388 
L 536.545126 -188.998998 
L 537.69005 -190.382241 
L 538.834975 -191.773115 
L 539.979899 -193.17162 
L 541.124824 -194.577758 
L 542.269749 -195.991527 
L 543.414673 -197.412927 
L 544.559598 -198.84196 
L 545.704523 -200.278624 
L 546.849447 -201.722919 
L 547.994372 -203.174847 
L 549.139296 -204.634406 
L 550.284221 -206.101597 
L 551.429146 -207.576419 
L 552.57407 -209.058873 
L 553.718995 -210.548959 
L 554.86392 -212.046677 
L 556.008844 -213.552026 
L 557.153769 -215.065007 
L 558.298693 -216.585619 
L 559.443618 -218.113864 
L 560.588543 -219.649739 
L 561.733467 -221.193247 
L 562.878392 -222.744386 
L 564.023317 -224.303157 
L 565.168241 -225.86956 
L 566.313166 -227.443594 
L 567.45809 -229.02526 
L 568.603015 -230.614558 
L 569.74794 -232.211487 
L 570.892864 -233.816048 
L 572.037789 -235.428241 
L 573.182714 -237.048066 
L 574.327638 -238.675522 
L 575.472563 -240.310609 
L 576.617487 -241.953329 
L 577.762412 -243.60368 
L 578.907337 -245.261663 
L 580.052261 -246.927277 
L 581.197186 -248.600524 
L 582.342111 -250.281401 
L 583.487035 -251.969911 
L 584.63196 -253.666052 
L 585.776884 -255.369825 
L 586.921809 -257.08123 
L 588.066734 -258.800266 
L 589.211658 -260.526934 
L 590.356583 -262.261234 
L 591.501508 -264.003165 
L 592.646432 -265.752728 
L 593.791357 -267.509923 
L 594.936281 -269.274749 
L 596.081206 -271.047207 
L 597.226131 -272.827297 
L 598.371055 -274.615018 
L 599.51598 -276.410371 
L 600.660905 -278.213356 
L 601.805829 -280.023972 
L 602.950754 -281.842221 
L 604.095678 -283.6681 
L 605.240603 -285.501612 
L 606.385528 -287.342755 
L 607.530452 -289.19153 
L 608.675377 -291.047936 
L 609.820302 -292.911975 
L 610.965226 -294.783645 
L 612.110151 -296.662946 
L 613.255075 -298.549879 
L 614.4 -300.444444 
L 614.4 -73.777778 
L 614.4 -73.777778 
L 613.255075 -73.777778 
L 612.110151 -73.777778 
L 610.965226 -73.777778 
L 609.820302 -73.777778 
L 608.675377 -73.777778 
L 607.530452 -73.777778 
L 606.385528 -73.777778 
L 605.240603 -73.777778 
L 604.095678 -73.777778 
L 602.950754 -73.777778 
L 601.805829 -73.777778 
L 600.660905 -73.777778 
L 599.51598 -73.777778 
L 598.371055 -73.777778 
L 597.226131 -73.777778 
L 596.081206 -73.777778 
L 594.936281 -73.777778 
L 593.791357 -73.777778 
L 592.646432 -73.777778 
L 591.501508 -73.777778 
L 590.356583 -73.777778 
L 589.211658 -73.777778 
L 588.066734 -73.777778 
L 586.921809 -73.777778 
L 585.776884 -73.777778 
L 584.63196 -73.777778 
L 583.487035 -73.777778 
L 582.342111 -73.777778 
L 581.197186 -73.777778 
L 580.052261 -73.777778 
L 578.907337 -73.777778 
L 577.762412 -73.777778 
L 576.617487 -73.777778 
L 575.472563 -73.777778 
L 574.327638 -73.777778 
L 573.182714 -73.777778 
L 572.037789 -73.777778 
L 570.892864 -73.777778 
L 569.74794 -73.777778 
L 568.603015 -73.777778 
L 567.45809 -73.777778 
L 566.313166 -73.777778 
L 565.168241 -73.777778 
L 564.023317 -73.777778 
L 562.878392 -73.777778 
L 561.733467 -73.777778 
L 560.588543 -73.777778 
L 559.443618 -73.777778 
L 558.298693 -73.777778 
L 557.153769 -73.777778 
L 556.008844 -73.777778 
L 554.86392 -73.777778 
L 553.718995 -73.777778 
L 552.57407 -73.777778 
L 551.429146 -73.777778 
L 550.284221 -73.777778 
L 549.139296 -73.777778 
L 547.994372 -73.777778 
L 546.849447 -73.777778 
L 545.704523 -73.777778 
L 544.559598 -73.777778 
L 543.414673 -73.777778 
L 542.269749 -73.777778 
L 541.124824 -73.777778 
L 539.979899 -73.777778 
L 538.834975 -73.777778 
L 537.69005 -73.777778 
L 536.545126 -73.777778 
L 535.400201 -73.777778 
L 534.255276 -73.777778 
L 533.110352 -73.777778 
L 531.965427 -73.777778 
L 530.820503 -73.777778 
L 529.675578 -73.777778 
L 528.530653 -73.777778 
L 527.385729 -73.777778 
L 526.240804 -73.777778 
L 525.095879 -73.777778 
L 523.950955 -73.777778 
L 522.80603 -73.777778 
L 521.661106 -73.777778 
L 520.516181 -73.777778 
L 519.371256 -73.777778 
L 518.226332 -73.777778 
L 517.081407 -73.777778 
L 515.936482 -73.777778 
L 514.791558 -73.777778 
L 513.646633 -73.777778 
L 512.501709 -73.777778 
L 511.356784 -73.777778 
L 510.211859 -73.777778 
L 509.066935 -73.777778 
L 507.92201 -73.777778 
L 506.777085 -73.777778 
L 505.632161 -73.777778 
L 504.487236 -73.777778 
L 503.342312 -73.777778 
L 502.197387 -73.777778 
L 501.052462 -73.777778 
L 499.907538 -73.777778 
L 498.762613 -73.777778 
L 497.617688 -73.777778 
L 496.472764 -73.777778 
L 495.327839 -73.777778 
L 494.182915 -73.777778 
L 493.03799 -73.777778 
L 491.893065 -73.777778 
L 490.748141 -73.777778 
L 489.603216 -73.777778 
L 488.458291 -73.777778 
L 487.313367 -73.777778 
L 486.168442 -73.777778 
L 485.023518 -73.777778 
L 483.878593 -73.777778 
L 482.733668 -73.777778 
L 481.588744 -73.777778 
L 480.443819 -73.777778 
L 479.298894 -73.777778 
L 478.15397 -73.777778 
L 477.009045 -73.777778 
L 475.864121 -73.777778 
L 474.719196 -73.777778 
L 473.574271 -73.777778 
L 472.429347 -73.777778 
L 471.284422 -73.777778 
L 470.139497 -73.777778 
L 468.994573 -73.777778 
L 467.849648 -73.777778 
L 466.704724 -73.777778 
L 465.559799 -73.777778 
L 464.414874 -73.777778 
L 463.26995 -73.777778 
L 462.125025 -73.777778 
L 460.980101 -73.777778 
L 459.835176 -73.777778 
L 458.690251 -73.777778 
L 457.545327 -73.777778 
L 456.400402 -73.777778 
L 455.255477 -73.777778 
L 454.110553 -73.777778 
L 452.965628 -73.777778 
L 451.820704 -73.777778 
L 450.675779 -73.777778 
L 449.530854 -73.777778 
L 448.38593 -73.777778 
L 447.241005 -73.777778 
L 446.09608 -73.777778 
L 444.951156 -73.777778 
L 443.806231 -73.777778 
L 442.661307 -73.777778 
L 441.516382 -73.777778 
L 440.371457 -73.777778 
L 439.226533 -73.777778 
L 438.081608 -73.777778 
L 436.936683 -73.777778 
L 435.791759 -73.777778 
L 434.646834 -73.777778 
L 433.50191 -73.777778 
L 432.356985 -73.777778 
L 431.21206 -73.777778 
L 430.067136 -73.777778 
L 428.922211 -73.777778 
L 427.777286 -73.777778 
L 426.632362 -73.777778 
L 425.487437 -73.777778 
L 424.342513 -73.777778 
L 423.197588 -73.777778 
L 422.052663 -73.777778 
L 420.907739 -73.777778 
L 419.762814 -73.777778 
L 418.617889 -73.777778 
L 417.472965 -73.777778 
L 416.32804 -73.777778 
L 415.183116 -73.777778 
L 414.038191 -73.777778 
L 412.893266 -73.777778 
L 411.748342 -73.777778 
L 410.603417 -73.777778 
L 409.458492 -73.777778 
L 408.313568 -73.777778 
L 407.168643 -73.777778 
L 406.023719 -73.777778 
L 404.878794 -73.777778 
L 403.733869 -73.777778 
L 402.588945 -73.777778 
L 401.44402 -73.777778 
L 400.299095 -73.777778 
L 399.154171 -73.777778 
L 398.009246 -73.777778 
L 396.864322 -73.777778 
L 395.719397 -73.777778 
L 394.574472 -73.777778 
L 393.429548 -73.777778 
L 392.284623 -73.777778 
L 391.139698 -73.777778 
L 389.994774 -73.777778 
L 388.849849 -73.777778 
L 387.704925 -73.777778 
L 386.56 -73.777778 
z
"/>
    </defs>
    <g clip-path="url(#p77bc64d961)">
     <use xlink:href="#m8e743a1811" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="mf89118fc29" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mf89118fc29" x="44.8" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(41.742344 343.194222) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 158.72 364 
L 158.72 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#mf89118fc29" x="158.72" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(155.662344 343.194222) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 272.64 364 
L 272.64 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#mf89118fc29" x="272.64" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(269.582344 343.194222) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 386.56 364 
L 386.56 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#mf89118fc29" x="386.56" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(383.502344 343.194222) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 500.48 364 
L 500.48 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#mf89118fc29" x="500.48" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(497.422344 343.194222) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="xtick_6">
     <g id="line2d_11">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <g>
       <use xlink:href="#mf89118fc29" x="614.4" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(611.342344 343.194222) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1c" d="M 3008 3981 
L 3008 4461 
L 768 4461 
L 346 2106 
L 813 2080 
Q 973 2272 1181 2390 
Q 1389 2509 1658 2509 
Q 1888 2509 2077 2432 
Q 2266 2355 2400 2217 
Q 2534 2080 2608 1891 
Q 2682 1702 2682 1478 
Q 2682 1210 2605 1008 
Q 2528 806 2397 672 
Q 2266 538 2090 470 
Q 1914 403 1722 403 
Q 1517 403 1347 464 
Q 1178 525 1053 637 
Q 928 749 854 899 
Q 781 1050 768 1222 
L 224 1222 
Q 230 915 345 672 
Q 461 429 659 265 
Q 858 102 1117 16 
Q 1376 -70 1670 -70 
Q 2067 -70 2364 54 
Q 2662 179 2860 390 
Q 3059 602 3158 874 
Q 3258 1146 3258 1434 
Q 3258 1824 3142 2115 
Q 3027 2406 2828 2601 
Q 2630 2797 2361 2893 
Q 2093 2989 1792 2989 
Q 1562 2989 1328 2909 
Q 1094 2829 947 2662 
L 934 2675 
L 1178 3981 
L 3008 3981 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1c"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_13">
      <path d="M 44.8 326.222222 
L 614.4 326.222222 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <defs>
       <path id="mb79007c7e2" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#mb79007c7e2" x="44.8" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(32.184688 331.458222) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_15">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <g>
       <use xlink:href="#mb79007c7e2" x="44.8" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(32.184688 255.902667) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_17">
      <path d="M 44.8 175.111111 
L 614.4 175.111111 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#mb79007c7e2" x="44.8" y="175.111111" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(32.184688 180.347111) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_19">
      <path d="M 44.8 99.555556 
L 614.4 99.555556 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <g>
       <use xlink:href="#mb79007c7e2" x="44.8" y="99.555556" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(32.184688 104.791556) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1d" d="M 2650 3379 
L 3194 3379 
Q 3142 3942 2809 4240 
Q 2477 4538 1914 4538 
Q 1427 4538 1107 4333 
Q 787 4128 595 3789 
Q 403 3450 323 3011 
Q 243 2573 243 2106 
Q 243 1747 297 1363 
Q 352 979 518 659 
Q 685 339 992 134 
Q 1299 -70 1805 -70 
Q 2234 -70 2525 74 
Q 2816 218 2992 438 
Q 3168 659 3245 928 
Q 3322 1197 3322 1446 
Q 3322 1760 3226 2029 
Q 3130 2298 2954 2496 
Q 2778 2694 2518 2806 
Q 2259 2918 1933 2918 
Q 1562 2918 1277 2777 
Q 992 2637 800 2323 
L 787 2336 
Q 794 2598 838 2899 
Q 883 3200 1001 3459 
Q 1120 3718 1331 3888 
Q 1542 4058 1888 4058 
Q 2214 4058 2412 3872 
Q 2611 3686 2650 3379 
z
M 1830 2438 
Q 2061 2438 2233 2355 
Q 2406 2272 2521 2134 
Q 2637 1997 2691 1808 
Q 2746 1619 2746 1408 
Q 2746 1210 2685 1027 
Q 2624 845 2509 704 
Q 2394 563 2224 483 
Q 2054 403 1830 403 
Q 1606 403 1430 483 
Q 1254 563 1136 697 
Q 1018 832 954 1017 
Q 890 1203 890 1414 
Q 890 1626 950 1814 
Q 1011 2003 1132 2140 
Q 1254 2278 1427 2358 
Q 1600 2438 1830 2438 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1d"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_21">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#mb79007c7e2" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(32.184688 29.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1f" d="M 992 3360 
Q 992 3533 1056 3661 
Q 1120 3789 1225 3878 
Q 1331 3968 1478 4013 
Q 1626 4058 1786 4058 
Q 2118 4058 2332 3882 
Q 2547 3706 2547 3360 
Q 2547 3014 2336 2822 
Q 2125 2630 1798 2630 
Q 1632 2630 1485 2675 
Q 1338 2720 1229 2809 
Q 1120 2899 1056 3036 
Q 992 3174 992 3360 
z
M 416 3379 
Q 416 3072 589 2813 
Q 762 2554 1050 2438 
Q 666 2304 461 2006 
Q 256 1709 256 1306 
Q 256 960 374 701 
Q 493 442 701 269 
Q 909 96 1190 13 
Q 1472 -70 1798 -70 
Q 2112 -70 2387 19 
Q 2662 109 2864 285 
Q 3066 461 3184 717 
Q 3302 973 3302 1306 
Q 3302 1728 3104 2019 
Q 2906 2310 2496 2438 
Q 2784 2566 2953 2819 
Q 3123 3072 3123 3379 
Q 3123 3597 3046 3805 
Q 2970 4013 2806 4176 
Q 2643 4339 2380 4438 
Q 2118 4538 1747 4538 
Q 1485 4538 1245 4461 
Q 1005 4384 819 4237 
Q 634 4090 525 3875 
Q 416 3661 416 3379 
z
M 832 1280 
Q 832 1478 905 1638 
Q 979 1798 1110 1913 
Q 1242 2029 1418 2089 
Q 1594 2150 1792 2150 
Q 1984 2150 2153 2083 
Q 2323 2016 2451 1901 
Q 2579 1786 2652 1629 
Q 2726 1472 2726 1286 
Q 2726 1094 2659 934 
Q 2592 774 2467 656 
Q 2342 538 2172 470 
Q 2003 403 1798 403 
Q 1376 403 1104 636 
Q 832 870 832 1280 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1f"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_23">
    <defs>
     <path id="mfef02aad9c" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#mfef02aad9c" x="614.4" y="326.222222" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_24">
    <defs>
     <path id="m9a8c61a339" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m9a8c61a339" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_25">
    <path d="M 44.8 99.555556 
L 53.351126 113.521183 
L 61.902252 127.061101 
L 70.453378 140.17531 
L 78.529441 152.170062 
L 86.605505 163.785091 
L 94.681568 175.020398 
L 102.757631 185.875983 
L 110.833695 196.351846 
L 118.909758 206.447987 
L 126.510759 215.603363 
L 134.11176 224.422377 
L 141.712761 232.905027 
L 149.313761 241.051314 
L 156.914762 248.861239 
L 164.040701 255.877558 
L 171.166639 262.598245 
L 178.292577 269.023301 
L 185.418515 275.152725 
L 192.544454 280.986518 
L 199.670392 286.52468 
L 206.79633 291.76721 
L 213.447206 296.393513 
L 220.098082 300.762288 
L 226.748957 304.873536 
L 233.399833 308.727255 
L 240.050709 312.323447 
L 246.701585 315.662111 
L 253.35246 318.743247 
L 260.003336 321.566855 
L 266.654212 324.132936 
L 272.830025 326.285133 
L 279.005838 328.215277 
L 285.181651 329.92337 
L 291.357465 331.40941 
L 297.533278 332.673399 
L 303.709091 333.715335 
L 309.884904 334.53522 
L 316.060717 335.133052 
L 322.23653 335.508832 
L 328.412344 335.662561 
L 334.588157 335.594237 
L 340.76397 335.303861 
L 346.939783 334.791433 
L 353.115596 334.056954 
L 359.29141 333.100422 
L 365.467223 331.921838 
L 371.643036 330.521202 
L 377.818849 328.898514 
L 383.994662 327.053774 
L 390.170475 324.986982 
L 396.346289 322.698138 
L 402.522102 320.187242 
L 409.172977 317.23487 
L 415.823853 314.02497 
L 422.474729 310.557542 
L 429.125605 306.832586 
L 435.77648 302.850103 
L 442.427356 298.610092 
L 449.078232 294.112552 
L 455.729108 289.357486 
L 462.379983 284.344891 
L 469.505922 278.688477 
L 476.63186 272.736431 
L 483.757798 266.488754 
L 490.883736 259.945446 
L 498.009675 253.106506 
L 505.135613 245.971935 
L 512.736614 238.035874 
L 520.337615 229.763451 
L 527.938616 221.154664 
L 535.539616 212.209515 
L 543.140617 202.928003 
L 550.741618 193.310128 
L 558.817681 182.722582 
L 566.893745 171.755314 
L 574.969808 160.408323 
L 583.045872 148.681611 
L 591.121935 136.575177 
L 599.673061 123.342715 
L 608.224187 109.684544 
L 614.4 99.555556 
L 614.4 99.555556 
" clip-path="url(#p77bc64d961)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 44.8 364 
L 44.8 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 326.222222 
L 614.4 326.222222 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_12">
    <g style="fill: currentColor" transform="translate(278.64 320.222222) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
      <path id="DejaVuSans-20" d="M 678 2906 
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
      <path id="DejaVuSans-15" d="M 1228 531 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
     <use xlink:href="#DejaVuSans-15" transform="translate(181.933594 0.78125)"/>
    </g>
   </g>
   <g id="text_13">
    <g style="fill: currentColor" transform="translate(392.56 320.222222) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-16" d="M 2597 2516 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
     <use xlink:href="#DejaVuSans-16" transform="translate(181.933594 0.78125)"/>
    </g>
   </g>
   <g id="line2d_26">
    <defs>
     <path id="m25fc8456ec" d="M 0 2.75 
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
    <g clip-path="url(#p77bc64d961)">
     <use xlink:href="#m25fc8456ec" x="272.64" y="326.222222" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="line2d_27">
    <g clip-path="url(#p77bc64d961)">
     <use xlink:href="#m25fc8456ec" x="386.56" y="326.222222" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_28">
     <path d="M 559.047656 40.522 
L 570.047656 40.522 
L 581.047656 40.522 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_14">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(589.847656 44.372) scale(0.11 -0.11)">
      <defs>
       <path id="HelveticaNeue-4d" d="M 634 2829 
L 634 0 
L 1178 0 
L 1178 2829 
L 1818 2829 
L 1818 3309 
L 1178 3309 
L 1178 3770 
Q 1178 3987 1286 4064 
Q 1395 4141 1594 4141 
Q 1664 4141 1747 4131 
Q 1830 4122 1901 4096 
L 1901 4570 
Q 1824 4595 1725 4608 
Q 1626 4621 1549 4621 
Q 1101 4621 867 4413 
Q 634 4205 634 3802 
L 634 3309 
L 77 3309 
L 77 2829 
L 634 2829 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-f" d="M 1306 -1261 
L 1722 -1261 
Q 1267 -525 1072 198 
Q 877 922 877 1728 
Q 877 2515 1069 3232 
Q 1261 3949 1722 4678 
L 1306 4678 
Q 806 4019 553 3251 
Q 301 2483 301 1728 
Q 301 1306 371 922 
Q 442 538 573 173 
Q 704 -192 889 -547 
Q 1075 -902 1306 -1261 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-5f" d="M 1299 1741 
L 58 0 
L 717 0 
L 1638 1370 
L 2560 0 
L 3258 0 
L 1978 1786 
L 3117 3309 
L 2464 3309 
L 1638 2150 
L 845 3309 
L 147 3309 
L 1299 1741 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-10" d="M -58 -1261 
L 352 -1261 
Q 851 -602 1104 163 
Q 1357 928 1357 1683 
Q 1357 2106 1286 2490 
Q 1216 2874 1085 3242 
Q 954 3610 768 3965 
Q 582 4320 352 4678 
L -58 4678 
Q 390 3942 585 3216 
Q 781 2490 781 1683 
Q 781 902 589 182 
Q 397 -538 -58 -1261 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#HelveticaNeue-4d"/>
      <use xlink:href="#HelveticaNeue-f" transform="translate(29.59375 0)"/>
      <use xlink:href="#HelveticaNeue-5f" transform="translate(55.5 0)"/>
      <use xlink:href="#HelveticaNeue-10" transform="translate(107.296875 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p77bc64d961">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
      },

      {
        id: "s28-es-diseq-2g-basso",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Parabola con concavità verso il basso",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$-x^2 + 4x - 3 \\ge 0$$</p>`,
        steps: [
          `<strong>Equazione associata</strong>: risolviamo $-x^2 + 4x - 3 = 0$, ovvero $x^2 - 4x + 3 = 0$. Le radici sono $x_1=1$ e $x_2=3$.`,
          `<strong>Analisi della parabola</strong>: il coefficiente di $x^2$ è $a=-1 \\lt 0$, quindi la parabola ha la concavità verso il basso.`,
          `<strong>Interpretazione grafica</strong>: la parabola interseca l'asse $x$ in 1 e 3 ed è rivolta verso il basso. Sarà positiva o nulla (sopra o sull'asse $x$) per i <strong>valori interni</strong> alle radici, inclusi gli estremi.`,
          `<strong>Soluzione</strong>: $$1 \\le x \\le 3$$`
        ]
      },

      {
        id: "s29-figura-parabola-basso",
        type: "note_box",
        title: "Concavità verso il basso: valori interni",
        icon: "📈",
        content: `<figure class="figura" data-id="precorso_lez02bb_g4"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 <metadata>
  <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   <cc:Work>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:format>image/svg+xml</dc:format>
    <dc:creator>
     <cc:Agent>
      <dc:title>Matplotlib v3.11.1, https://matplotlib.org/</dc:title>
     </cc:Agent>
    </dc:creator>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs>
  <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style>
 </defs>
 <g id="figure_1">
  <g id="patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="axes_1">
   <g id="patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="FillBetweenPolyCollection_1">
    <defs>
     <path id="mf0f3f5013a" d="M 187.2 -262.666667 
L 187.2 -262.666667 
L 188.631156 -263.799971 
L 190.062312 -264.921829 
L 191.493467 -266.032238 
L 192.924623 -267.1312 
L 194.355779 -268.218715 
L 195.786935 -269.294782 
L 197.21809 -270.359402 
L 198.649246 -271.412574 
L 200.080402 -272.454298 
L 201.511558 -273.484575 
L 202.942714 -274.503405 
L 204.373869 -275.510787 
L 205.805025 -276.506721 
L 207.236181 -277.491208 
L 208.667337 -278.464248 
L 210.098492 -279.425839 
L 211.529648 -280.375984 
L 212.960804 -281.314681 
L 214.39196 -282.24193 
L 215.823116 -283.157732 
L 217.254271 -284.062086 
L 218.685427 -284.954993 
L 220.116583 -285.836452 
L 221.547739 -286.706464 
L 222.978894 -287.565028 
L 224.41005 -288.412144 
L 225.841206 -289.247814 
L 227.272362 -290.072035 
L 228.703518 -290.884809 
L 230.134673 -291.686136 
L 231.565829 -292.476015 
L 232.996985 -293.254446 
L 234.428141 -294.02143 
L 235.859296 -294.776967 
L 237.290452 -295.521056 
L 238.721608 -296.253697 
L 240.152764 -296.974891 
L 241.58392 -297.684638 
L 243.015075 -298.382936 
L 244.446231 -299.069788 
L 245.877387 -299.745192 
L 247.308543 -300.409148 
L 248.739698 -301.061657 
L 250.170854 -301.702718 
L 251.60201 -302.332332 
L 253.033166 -302.950498 
L 254.464322 -303.557217 
L 255.895477 -304.152488 
L 257.326633 -304.736311 
L 258.757789 -305.308687 
L 260.188945 -305.869616 
L 261.620101 -306.419097 
L 263.051256 -306.957131 
L 264.482412 -307.483717 
L 265.913568 -307.998855 
L 267.344724 -308.502546 
L 268.775879 -308.99479 
L 270.207035 -309.475586 
L 271.638191 -309.944934 
L 273.069347 -310.402835 
L 274.500503 -310.849288 
L 275.931658 -311.284294 
L 277.362814 -311.707852 
L 278.79397 -312.119963 
L 280.225126 -312.520627 
L 281.656281 -312.909842 
L 283.087437 -313.287611 
L 284.518593 -313.653931 
L 285.949749 -314.008804 
L 287.380905 -314.35223 
L 288.81206 -314.684208 
L 290.243216 -315.004739 
L 291.674372 -315.313822 
L 293.105528 -315.611458 
L 294.536683 -315.897646 
L 295.967839 -316.172386 
L 297.398995 -316.435679 
L 298.830151 -316.687525 
L 300.261307 -316.927923 
L 301.692462 -317.156873 
L 303.123618 -317.374376 
L 304.554774 -317.580431 
L 305.98593 -317.775039 
L 307.417085 -317.9582 
L 308.848241 -318.129913 
L 310.279397 -318.290178 
L 311.710553 -318.438996 
L 313.141709 -318.576366 
L 314.572864 -318.702289 
L 316.00402 -318.816764 
L 317.435176 -318.919792 
L 318.866332 -319.011372 
L 320.297487 -319.091504 
L 321.728643 -319.16019 
L 323.159799 -319.217427 
L 324.590955 -319.263217 
L 326.022111 -319.29756 
L 327.453266 -319.320455 
L 328.884422 -319.331902 
L 330.315578 -319.331902 
L 331.746734 -319.320455 
L 333.177889 -319.29756 
L 334.609045 -319.263217 
L 336.040201 -319.217427 
L 337.471357 -319.16019 
L 338.902513 -319.091504 
L 340.333668 -319.011372 
L 341.764824 -318.919792 
L 343.19598 -318.816764 
L 344.627136 -318.702289 
L 346.058291 -318.576366 
L 347.489447 -318.438996 
L 348.920603 -318.290178 
L 350.351759 -318.129913 
L 351.782915 -317.9582 
L 353.21407 -317.775039 
L 354.645226 -317.580431 
L 356.076382 -317.374376 
L 357.507538 -317.156873 
L 358.938693 -316.927923 
L 360.369849 -316.687525 
L 361.801005 -316.435679 
L 363.232161 -316.172386 
L 364.663317 -315.897646 
L 366.094472 -315.611458 
L 367.525628 -315.313822 
L 368.956784 -315.004739 
L 370.38794 -314.684208 
L 371.819095 -314.35223 
L 373.250251 -314.008804 
L 374.681407 -313.653931 
L 376.112563 -313.287611 
L 377.543719 -312.909842 
L 378.974874 -312.520627 
L 380.40603 -312.119963 
L 381.837186 -311.707852 
L 383.268342 -311.284294 
L 384.699497 -310.849288 
L 386.130653 -310.402835 
L 387.561809 -309.944934 
L 388.992965 -309.475586 
L 390.424121 -308.99479 
L 391.855276 -308.502546 
L 393.286432 -307.998855 
L 394.717588 -307.483717 
L 396.148744 -306.957131 
L 397.579899 -306.419097 
L 399.011055 -305.869616 
L 400.442211 -305.308687 
L 401.873367 -304.736311 
L 403.304523 -304.152488 
L 404.735678 -303.557217 
L 406.166834 -302.950498 
L 407.59799 -302.332332 
L 409.029146 -301.702718 
L 410.460302 -301.061657 
L 411.891457 -300.409148 
L 413.322613 -299.745192 
L 414.753769 -299.069788 
L 416.184925 -298.382936 
L 417.61608 -297.684638 
L 419.047236 -296.974891 
L 420.478392 -296.253697 
L 421.909548 -295.521056 
L 423.340704 -294.776967 
L 424.771859 -294.02143 
L 426.203015 -293.254446 
L 427.634171 -292.476015 
L 429.065327 -291.686136 
L 430.496482 -290.884809 
L 431.927638 -290.072035 
L 433.358794 -289.247814 
L 434.78995 -288.412144 
L 436.221106 -287.565028 
L 437.652261 -286.706464 
L 439.083417 -285.836452 
L 440.514573 -284.954993 
L 441.945729 -284.062086 
L 443.376884 -283.157732 
L 444.80804 -282.24193 
L 446.239196 -281.314681 
L 447.670352 -280.375984 
L 449.101508 -279.425839 
L 450.532663 -278.464248 
L 451.963819 -277.491208 
L 453.394975 -276.506721 
L 454.826131 -275.510787 
L 456.257286 -274.503405 
L 457.688442 -273.484575 
L 459.119598 -272.454298 
L 460.550754 -271.412574 
L 461.98191 -270.359402 
L 463.413065 -269.294782 
L 464.844221 -268.218715 
L 466.275377 -267.1312 
L 467.706533 -266.032238 
L 469.137688 -264.921829 
L 470.568844 -263.799971 
L 472 -262.666667 
L 472 -262.666667 
L 472 -262.666667 
L 470.568844 -262.666667 
L 469.137688 -262.666667 
L 467.706533 -262.666667 
L 466.275377 -262.666667 
L 464.844221 -262.666667 
L 463.413065 -262.666667 
L 461.98191 -262.666667 
L 460.550754 -262.666667 
L 459.119598 -262.666667 
L 457.688442 -262.666667 
L 456.257286 -262.666667 
L 454.826131 -262.666667 
L 453.394975 -262.666667 
L 451.963819 -262.666667 
L 450.532663 -262.666667 
L 449.101508 -262.666667 
L 447.670352 -262.666667 
L 446.239196 -262.666667 
L 444.80804 -262.666667 
L 443.376884 -262.666667 
L 441.945729 -262.666667 
L 440.514573 -262.666667 
L 439.083417 -262.666667 
L 437.652261 -262.666667 
L 436.221106 -262.666667 
L 434.78995 -262.666667 
L 433.358794 -262.666667 
L 431.927638 -262.666667 
L 430.496482 -262.666667 
L 429.065327 -262.666667 
L 427.634171 -262.666667 
L 426.203015 -262.666667 
L 424.771859 -262.666667 
L 423.340704 -262.666667 
L 421.909548 -262.666667 
L 420.478392 -262.666667 
L 419.047236 -262.666667 
L 417.61608 -262.666667 
L 416.184925 -262.666667 
L 414.753769 -262.666667 
L 413.322613 -262.666667 
L 411.891457 -262.666667 
L 410.460302 -262.666667 
L 409.029146 -262.666667 
L 407.59799 -262.666667 
L 406.166834 -262.666667 
L 404.735678 -262.666667 
L 403.304523 -262.666667 
L 401.873367 -262.666667 
L 400.442211 -262.666667 
L 399.011055 -262.666667 
L 397.579899 -262.666667 
L 396.148744 -262.666667 
L 394.717588 -262.666667 
L 393.286432 -262.666667 
L 391.855276 -262.666667 
L 390.424121 -262.666667 
L 388.992965 -262.666667 
L 387.561809 -262.666667 
L 386.130653 -262.666667 
L 384.699497 -262.666667 
L 383.268342 -262.666667 
L 381.837186 -262.666667 
L 380.40603 -262.666667 
L 378.974874 -262.666667 
L 377.543719 -262.666667 
L 376.112563 -262.666667 
L 374.681407 -262.666667 
L 373.250251 -262.666667 
L 371.819095 -262.666667 
L 370.38794 -262.666667 
L 368.956784 -262.666667 
L 367.525628 -262.666667 
L 366.094472 -262.666667 
L 364.663317 -262.666667 
L 363.232161 -262.666667 
L 361.801005 -262.666667 
L 360.369849 -262.666667 
L 358.938693 -262.666667 
L 357.507538 -262.666667 
L 356.076382 -262.666667 
L 354.645226 -262.666667 
L 353.21407 -262.666667 
L 351.782915 -262.666667 
L 350.351759 -262.666667 
L 348.920603 -262.666667 
L 347.489447 -262.666667 
L 346.058291 -262.666667 
L 344.627136 -262.666667 
L 343.19598 -262.666667 
L 341.764824 -262.666667 
L 340.333668 -262.666667 
L 338.902513 -262.666667 
L 337.471357 -262.666667 
L 336.040201 -262.666667 
L 334.609045 -262.666667 
L 333.177889 -262.666667 
L 331.746734 -262.666667 
L 330.315578 -262.666667 
L 328.884422 -262.666667 
L 327.453266 -262.666667 
L 326.022111 -262.666667 
L 324.590955 -262.666667 
L 323.159799 -262.666667 
L 321.728643 -262.666667 
L 320.297487 -262.666667 
L 318.866332 -262.666667 
L 317.435176 -262.666667 
L 316.00402 -262.666667 
L 314.572864 -262.666667 
L 313.141709 -262.666667 
L 311.710553 -262.666667 
L 310.279397 -262.666667 
L 308.848241 -262.666667 
L 307.417085 -262.666667 
L 305.98593 -262.666667 
L 304.554774 -262.666667 
L 303.123618 -262.666667 
L 301.692462 -262.666667 
L 300.261307 -262.666667 
L 298.830151 -262.666667 
L 297.398995 -262.666667 
L 295.967839 -262.666667 
L 294.536683 -262.666667 
L 293.105528 -262.666667 
L 291.674372 -262.666667 
L 290.243216 -262.666667 
L 288.81206 -262.666667 
L 287.380905 -262.666667 
L 285.949749 -262.666667 
L 284.518593 -262.666667 
L 283.087437 -262.666667 
L 281.656281 -262.666667 
L 280.225126 -262.666667 
L 278.79397 -262.666667 
L 277.362814 -262.666667 
L 275.931658 -262.666667 
L 274.500503 -262.666667 
L 273.069347 -262.666667 
L 271.638191 -262.666667 
L 270.207035 -262.666667 
L 268.775879 -262.666667 
L 267.344724 -262.666667 
L 265.913568 -262.666667 
L 264.482412 -262.666667 
L 263.051256 -262.666667 
L 261.620101 -262.666667 
L 260.188945 -262.666667 
L 258.757789 -262.666667 
L 257.326633 -262.666667 
L 255.895477 -262.666667 
L 254.464322 -262.666667 
L 253.033166 -262.666667 
L 251.60201 -262.666667 
L 250.170854 -262.666667 
L 248.739698 -262.666667 
L 247.308543 -262.666667 
L 245.877387 -262.666667 
L 244.446231 -262.666667 
L 243.015075 -262.666667 
L 241.58392 -262.666667 
L 240.152764 -262.666667 
L 238.721608 -262.666667 
L 237.290452 -262.666667 
L 235.859296 -262.666667 
L 234.428141 -262.666667 
L 232.996985 -262.666667 
L 231.565829 -262.666667 
L 230.134673 -262.666667 
L 228.703518 -262.666667 
L 227.272362 -262.666667 
L 225.841206 -262.666667 
L 224.41005 -262.666667 
L 222.978894 -262.666667 
L 221.547739 -262.666667 
L 220.116583 -262.666667 
L 218.685427 -262.666667 
L 217.254271 -262.666667 
L 215.823116 -262.666667 
L 214.39196 -262.666667 
L 212.960804 -262.666667 
L 211.529648 -262.666667 
L 210.098492 -262.666667 
L 208.667337 -262.666667 
L 207.236181 -262.666667 
L 205.805025 -262.666667 
L 204.373869 -262.666667 
L 202.942714 -262.666667 
L 201.511558 -262.666667 
L 200.080402 -262.666667 
L 198.649246 -262.666667 
L 197.21809 -262.666667 
L 195.786935 -262.666667 
L 194.355779 -262.666667 
L 192.924623 -262.666667 
L 191.493467 -262.666667 
L 190.062312 -262.666667 
L 188.631156 -262.666667 
L 187.2 -262.666667 
z
"/>
    </defs>
    <g clip-path="url(#p4b96959a99)">
     <use xlink:href="#mf0f3f5013a" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="matplotlib.axis_1">
    <g id="xtick_1">
     <g id="line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_2">
      <defs>
       <path id="me2a61e89a9" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#me2a61e89a9" x="44.8" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_1">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(41.742344 154.305333) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-17" d="M 845 2234 
Q 845 2400 848 2601 
Q 851 2803 880 3004 
Q 909 3206 963 3398 
Q 1018 3590 1123 3734 
Q 1229 3878 1389 3968 
Q 1549 4058 1779 4058 
Q 2010 4058 2170 3968 
Q 2330 3878 2435 3734 
Q 2541 3590 2595 3398 
Q 2650 3206 2678 3004 
Q 2707 2803 2710 2601 
Q 2714 2400 2714 2234 
Q 2714 1978 2698 1661 
Q 2682 1344 2595 1065 
Q 2509 787 2317 595 
Q 2125 403 1779 403 
Q 1434 403 1242 595 
Q 1050 787 963 1065 
Q 877 1344 861 1661 
Q 845 1978 845 2234 
z
M 269 2227 
Q 269 1978 281 1709 
Q 294 1440 345 1184 
Q 397 928 493 701 
Q 589 474 755 301 
Q 922 128 1174 29 
Q 1427 -70 1779 -70 
Q 2138 -70 2387 29 
Q 2637 128 2803 301 
Q 2970 474 3066 701 
Q 3162 928 3213 1184 
Q 3264 1440 3277 1709 
Q 3290 1978 3290 2227 
Q 3290 2477 3277 2745 
Q 3264 3014 3213 3270 
Q 3162 3526 3066 3756 
Q 2970 3987 2803 4160 
Q 2637 4333 2384 4435 
Q 2131 4538 1779 4538 
Q 1427 4538 1174 4435 
Q 922 4333 755 4160 
Q 589 3987 493 3756 
Q 397 3526 345 3270 
Q 294 3014 281 2745 
Q 269 2477 269 2227 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="xtick_2">
     <g id="line2d_3">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_4">
      <g>
       <use xlink:href="#me2a61e89a9" x="187.2" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_2">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(184.142344 154.305333) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-18" d="M 2278 0 
L 2278 4538 
L 1862 4538 
Q 1818 4282 1696 4115 
Q 1574 3949 1398 3853 
Q 1222 3757 1004 3721 
Q 787 3686 557 3686 
L 557 3251 
L 1734 3251 
L 1734 0 
L 2278 0 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="xtick_3">
     <g id="line2d_5">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_6">
      <g>
       <use xlink:href="#me2a61e89a9" x="329.6" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_3">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(326.542344 154.305333) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-19" d="M 282 2931 
L 826 2931 
Q 819 3136 867 3337 
Q 915 3539 1024 3699 
Q 1133 3859 1302 3958 
Q 1472 4058 1709 4058 
Q 1888 4058 2048 4000 
Q 2208 3942 2326 3833 
Q 2445 3725 2515 3574 
Q 2586 3424 2586 3238 
Q 2586 3002 2512 2822 
Q 2438 2643 2294 2489 
Q 2150 2336 1932 2185 
Q 1715 2035 1427 1856 
Q 1190 1715 972 1555 
Q 755 1395 582 1184 
Q 410 973 298 688 
Q 186 403 154 0 
L 3117 0 
L 3117 480 
L 787 480 
Q 826 691 950 854 
Q 1075 1018 1251 1158 
Q 1427 1299 1638 1424 
Q 1850 1549 2061 1677 
Q 2272 1811 2470 1958 
Q 2669 2106 2822 2288 
Q 2976 2470 3069 2700 
Q 3162 2931 3162 3232 
Q 3162 3552 3050 3795 
Q 2938 4038 2746 4201 
Q 2554 4365 2294 4451 
Q 2035 4538 1741 4538 
Q 1382 4538 1100 4416 
Q 819 4294 630 4080 
Q 442 3866 352 3571 
Q 262 3277 282 2931 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
    <g id="xtick_4">
     <g id="line2d_7">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_8">
      <g>
       <use xlink:href="#me2a61e89a9" x="472" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_4">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(468.942344 154.305333) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1a" d="M 1395 2592 
L 1395 2131 
Q 1549 2150 1722 2150 
Q 1926 2150 2102 2096 
Q 2278 2042 2406 1930 
Q 2534 1818 2611 1654 
Q 2688 1491 2688 1280 
Q 2688 1075 2608 912 
Q 2528 749 2393 637 
Q 2259 525 2080 464 
Q 1901 403 1702 403 
Q 1235 403 992 681 
Q 749 960 736 1402 
L 192 1402 
Q 186 1050 291 774 
Q 397 499 595 310 
Q 794 122 1075 26 
Q 1357 -70 1702 -70 
Q 2022 -70 2307 16 
Q 2592 102 2803 275 
Q 3014 448 3139 707 
Q 3264 966 3264 1306 
Q 3264 1715 3062 2016 
Q 2861 2317 2445 2406 
L 2445 2419 
Q 2714 2541 2893 2777 
Q 3072 3014 3072 3322 
Q 3072 3635 2966 3865 
Q 2861 4096 2675 4243 
Q 2490 4390 2237 4464 
Q 1984 4538 1690 4538 
Q 1350 4538 1091 4429 
Q 832 4320 659 4128 
Q 486 3936 393 3667 
Q 301 3398 288 3072 
L 832 3072 
Q 832 3270 883 3449 
Q 934 3629 1040 3763 
Q 1146 3898 1309 3978 
Q 1472 4058 1690 4058 
Q 2035 4058 2265 3875 
Q 2496 3693 2496 3328 
Q 2496 3149 2425 3008 
Q 2355 2867 2236 2774 
Q 2118 2682 1961 2634 
Q 1805 2586 1632 2586 
L 1517 2586 
Q 1485 2586 1453 2586 
Q 1427 2586 1395 2592 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1a"/>
      </g>
     </g>
    </g>
    <g id="xtick_5">
     <g id="line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_10">
      <g>
       <use xlink:href="#me2a61e89a9" x="614.4" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_5">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(611.342344 154.305333) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-1b" d="M 2170 1542 
L 646 1542 
L 2157 3763 
L 2170 3763 
L 2170 1542 
z
M 2682 1542 
L 2682 4538 
L 2246 4538 
L 179 1587 
L 179 1062 
L 2170 1062 
L 2170 0 
L 2682 0 
L 2682 1062 
L 3296 1062 
L 3296 1542 
L 2682 1542 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-1b"/>
      </g>
     </g>
    </g>
   </g>
   <g id="matplotlib.axis_2">
    <g id="ytick_1">
     <g id="line2d_11">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_12">
      <defs>
       <path id="me527c327aa" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_6">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(27.905 369.236) scale(0.11 -0.11)">
       <defs>
        <path id="HelveticaNeue-14" d="M 320 2035 
L 320 1523 
L 2170 1523 
L 2170 2035 
L 320 2035 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1b" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_2">
     <g id="line2d_13">
      <path d="M 44.8 307.333333 
L 614.4 307.333333 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_14">
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_7">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(27.905 312.569333) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-1a" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_3">
     <g id="line2d_15">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_16">
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_8">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(27.905 255.902667) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-19" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_4">
     <g id="line2d_17">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_18">
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_9">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(27.905 199.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-14"/>
       <use xlink:href="#HelveticaNeue-18" transform="translate(38.90625 0)"/>
      </g>
     </g>
    </g>
    <g id="ytick_5">
     <g id="line2d_19">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_20">
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_10">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(32.184688 142.569333) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-17"/>
      </g>
     </g>
    </g>
    <g id="ytick_6">
     <g id="line2d_21">
      <path d="M 44.8 80.666667 
L 614.4 80.666667 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_22">
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="80.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_11">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(32.184688 85.902667) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-18"/>
      </g>
     </g>
    </g>
    <g id="ytick_7">
     <g id="line2d_23">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="line2d_24">
      <g>
       <use xlink:href="#me527c327aa" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="text_12">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(32.184688 29.236) scale(0.11 -0.11)">
       <use xlink:href="#HelveticaNeue-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="line2d_25">
    <defs>
     <path id="m2860964a6f" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#m2860964a6f" x="614.4" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_26">
    <defs>
     <path id="md64a3aa63f" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#md64a3aa63f" x="44.8" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="line2d_27">
    <path d="M 44.8 307.333333 
L 53.351126 293.926331 
L 61.902252 280.928009 
L 70.453378 268.338369 
L 79.004504 256.157409 
L 87.080567 245.028424 
L 95.156631 234.263972 
L 103.232694 223.864054 
L 111.308757 213.828668 
L 119.384821 204.157816 
L 126.985822 195.388837 
L 134.586822 186.942766 
L 142.187823 178.819603 
L 149.788824 171.019349 
L 157.389825 163.542003 
L 164.990826 156.387566 
L 172.116764 149.973547 
L 179.242702 143.843334 
L 186.368641 137.996927 
L 193.494579 132.434327 
L 200.620517 127.155532 
L 207.746455 122.160544 
L 214.872394 117.449362 
L 221.523269 113.308315 
L 228.174145 109.414495 
L 234.825021 105.767901 
L 241.475897 102.368534 
L 248.126772 99.216394 
L 254.777648 96.31148 
L 261.428524 93.653794 
L 268.079399 91.243333 
L 274.730275 89.0801 
L 281.381151 87.164093 
L 288.032027 85.495313 
L 294.20784 84.1671 
L 300.383653 83.052057 
L 306.559466 82.150184 
L 312.735279 81.461482 
L 318.911093 80.985949 
L 325.086906 80.723586 
L 331.262719 80.674393 
L 337.438532 80.838369 
L 343.614345 81.215516 
L 349.790158 81.805833 
L 355.965972 82.60932 
L 362.141785 83.625976 
L 368.317598 84.855803 
L 374.493411 86.2988 
L 380.669224 87.954966 
L 387.3201 89.976927 
L 393.970976 92.246115 
L 400.621852 94.76253 
L 407.272727 97.526171 
L 413.923603 100.537039 
L 420.574479 103.795133 
L 427.225354 107.300454 
L 433.87623 111.053002 
L 440.527106 115.052777 
L 447.177982 119.299778 
L 454.30392 124.124483 
L 461.429858 129.232993 
L 468.555796 134.62531 
L 475.681735 140.301433 
L 482.807673 146.261362 
L 489.933611 152.505097 
L 497.05955 159.032639 
L 504.66055 166.308167 
L 512.261551 173.906604 
L 519.862552 181.827949 
L 527.463553 190.072202 
L 535.064554 198.639363 
L 542.665555 207.529433 
L 550.741618 217.328944 
L 558.817681 227.492988 
L 566.893745 238.021566 
L 574.969808 248.914676 
L 583.045872 260.17232 
L 591.121935 271.794497 
L 599.673061 284.49766 
L 608.224187 297.609504 
L 614.4 307.333333 
L 614.4 307.333333 
" clip-path="url(#p4b96959a99)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="patch_3">
    <path d="M 44.8 364 
L 44.8 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="patch_4">
    <path d="M 44.8 137.333333 
L 614.4 137.333333 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="text_13">
    <g style="fill: currentColor" transform="translate(193.2 131.333333) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-Oblique-5b" d="M 3841 3500 
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
      <path id="DejaVuSans-20" d="M 678 2906 
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
      <path id="DejaVuSans-14" d="M 794 531 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.09375)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.09375)"/>
     <use xlink:href="#DejaVuSans-14" transform="translate(181.933594 0.09375)"/>
    </g>
   </g>
   <g id="text_14">
    <g style="fill: currentColor" transform="translate(478 131.333333) scale(0.11 -0.11)">
     <defs>
      <path id="DejaVuSans-16" d="M 2597 2516 
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
     <use xlink:href="#DejaVuSans-Oblique-5b" transform="translate(0 0.78125)"/>
     <use xlink:href="#DejaVuSans-20" transform="translate(78.662109 0.78125)"/>
     <use xlink:href="#DejaVuSans-16" transform="translate(181.933594 0.78125)"/>
    </g>
   </g>
   <g id="line2d_28">
    <defs>
     <path id="m344103d75e" d="M 0 2.75 
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
    <g clip-path="url(#p4b96959a99)">
     <use xlink:href="#m344103d75e" x="187.2" y="137.333333" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="line2d_29">
    <g clip-path="url(#p4b96959a99)">
     <use xlink:href="#m344103d75e" x="472" y="137.333333" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="legend_1">
    <g id="line2d_30">
     <path d="M 559.047656 40.522 
L 570.047656 40.522 
L 581.047656 40.522 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="text_15">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(589.847656 44.372) scale(0.11 -0.11)">
      <defs>
       <path id="HelveticaNeue-4d" d="M 634 2829 
L 634 0 
L 1178 0 
L 1178 2829 
L 1818 2829 
L 1818 3309 
L 1178 3309 
L 1178 3770 
Q 1178 3987 1286 4064 
Q 1395 4141 1594 4141 
Q 1664 4141 1747 4131 
Q 1830 4122 1901 4096 
L 1901 4570 
Q 1824 4595 1725 4608 
Q 1626 4621 1549 4621 
Q 1101 4621 867 4413 
Q 634 4205 634 3802 
L 634 3309 
L 77 3309 
L 77 2829 
L 634 2829 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-f" d="M 1306 -1261 
L 1722 -1261 
Q 1267 -525 1072 198 
Q 877 922 877 1728 
Q 877 2515 1069 3232 
Q 1261 3949 1722 4678 
L 1306 4678 
Q 806 4019 553 3251 
Q 301 2483 301 1728 
Q 301 1306 371 922 
Q 442 538 573 173 
Q 704 -192 889 -547 
Q 1075 -902 1306 -1261 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-5f" d="M 1299 1741 
L 58 0 
L 717 0 
L 1638 1370 
L 2560 0 
L 3258 0 
L 1978 1786 
L 3117 3309 
L 2464 3309 
L 1638 2150 
L 845 3309 
L 147 3309 
L 1299 1741 
z
" transform="scale(0.015625)"/>
       <path id="HelveticaNeue-10" d="M -58 -1261 
L 352 -1261 
Q 851 -602 1104 163 
Q 1357 928 1357 1683 
Q 1357 2106 1286 2490 
Q 1216 2874 1085 3242 
Q 954 3610 768 3965 
Q 582 4320 352 4678 
L -58 4678 
Q 390 3942 585 3216 
Q 781 2490 781 1683 
Q 781 902 589 182 
Q 397 -538 -58 -1261 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#HelveticaNeue-4d"/>
      <use xlink:href="#HelveticaNeue-f" transform="translate(29.59375 0)"/>
      <use xlink:href="#HelveticaNeue-5f" transform="translate(55.5 0)"/>
      <use xlink:href="#HelveticaNeue-10" transform="translate(107.296875 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="p4b96959a99">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
        <p><strong>Cambiare segno in una disequazione.</strong> Nell'esercizio precedente avremmo potuto moltiplicare entrambi i membri per $-1$ per rendere positivo il coefficiente di $x^2$. Attenzione: quando si moltiplica (o divide) per un numero negativo, <strong>bisogna invertire il verso della disequazione</strong>:</p>
        <p>$$-x^2 + 4x - 3 \\ge 0 \\Rightarrow x^2 - 4x + 3 \\le 0$$</p>
        <p>Risolvendo $x^2 - 4x + 3 \\le 0$ (parabola verso l'alto, valori interni) si ottiene la stessa soluzione $1 \\le x \\le 3$. Per evitare errori, è spesso più sicuro lavorare con la forma originale.</p>`
      },

      {
        id: "s30-es-diseq-coeff-negativo",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione di secondo grado con coefficiente negativo",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$-x^2 + 4 \\ge 0$$</p>`,
        steps: [
          `Moltiplichiamo tutti i termini per $-1$ e <strong>invertiamo il verso</strong>: $$x^2 - 4 \\le 0$$`,
          `<strong>Equazione associata</strong>: $x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$. Le radici sono $x_1 = -2$ e $x_2 = 2$.`,
          `Ora $a = 1 \\gt 0$ e cerchiamo dove l'espressione è negativa o nulla: la zona "interna" alle radici, estremi inclusi (perché la disuguaglianza è $\\le$).`,
          `<strong>Soluzione</strong>: $$-2 \\le x \\le 2$$`
        ]
      },

      {
        id: "s31-integr-diseq-fratte",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p>Le disequazioni fratte e quelle irrazionali (dove occorre combinare lo studio del segno con il Campo di Esistenza) richiedono la costruzione di uno schema dei segni per numeratore e denominatore separatamente: verranno affrontate nelle lezioni successive del precorso. Per ora è essenziale padroneggiare i due casi visti qui, perché sono esattamente gli strumenti che servono per determinare i Campi di Esistenza.</p>`
      },

      {
        id: "s32-parentesi-frazioni",
        type: "section",
        title: "Equazioni con Parentesi e Frazioni",
        icon: "🔧",
        content: `<p>Passiamo ora a due tecniche di manipolazione algebrica indispensabili: l'eliminazione delle parentesi tramite la proprietà distributiva e l'eliminazione dei denominatori tramite il minimo comune multiplo.</p>`
      },

      {
        id: "s33-es-parentesi",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione con parentesi",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione: $$2(x-1) - (x-3) = 0$$</p>`,
        steps: [
          `Applichiamo la proprietà distributiva per eliminare le parentesi: $$2 \\cdot x + 2 \\cdot (-1) - 1 \\cdot x - 1 \\cdot (-3) = 0$$ $$2x - 2 - x + 3 = 0$$`,
          `Raggruppiamo i termini simili: $$(2x - x) + (-2 + 3) = 0 \\Rightarrow x + 1 = 0$$`,
          `La soluzione è: $$x = -1$$`
        ]
      },

      {
        id: "s34-es-fratta-numerica",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione fratta con denominatori numerici",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente equazione: $$\\frac{x-1}{2} + \\frac{x+2}{3} = 0$$</p>`,
        steps: [
          `Per eliminare i denominatori, troviamo il minimo comune multiplo (m.c.m.) tra 2 e 3, che è 6.`,
          `Moltiplichiamo entrambi i membri dell'equazione per il m.c.m.: $$6 \\cdot \\left( \\frac{x-1}{2} + \\frac{x+2}{3} \\right) = 6 \\cdot 0$$ $$6 \\cdot \\frac{x-1}{2} + 6 \\cdot \\frac{x+2}{3} = 0$$`,
          `Semplifichiamo: $$3(x-1) + 2(x+2) = 0$$`,
          `Risolviamo l'equazione intera risultante: $$3x - 3 + 2x + 4 = 0 \\Rightarrow 5x + 1 = 0 \\Rightarrow 5x = -1 \\Rightarrow x = -\\frac{1}{5}$$`
        ]
      },

      {
        id: "s35-es-fratta-impossibile",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione fratta impossibile",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere: $$\\frac{1}{x-1} = 0$$</p>`,
        steps: [
          `<strong>C.E.</strong>: il denominatore non può essere zero: $$x - 1 \\neq 0 \\Rightarrow x \\neq 1$$`,
          `<strong>Risoluzione</strong>: una frazione è uguale a zero se e solo se il suo <strong>numeratore</strong> è uguale a zero. In questo caso il numeratore è 1, che non è mai zero.`,
          `<strong>Conclusione</strong>: l'equazione non ha soluzioni. È <strong>impossibile</strong>.`
        ]
      },

      {
        id: "s36-es-fratta-semplice",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione fratta semplice",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere: $$\\frac{x+2}{x-1} = 0$$</p>`,
        steps: [
          `<strong>C.E.</strong>: $$x - 1 \\neq 0 \\Rightarrow x \\neq 1$$`,
          `<strong>Risoluzione</strong>: poniamo il numeratore uguale a zero: $$x + 2 = 0 \\Rightarrow x = -2$$`,
          `<strong>Verifica</strong>: la soluzione $x=-2$ è diversa da 1, quindi rispetta il C.E. ed è <strong>accettabile</strong>.`
        ]
      },

      {
        id: "s37-es-fratta-complessa",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione fratta complessa",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere: $$\\frac{x+2}{x-3} + \\frac{x-1}{x+1} = 0$$</p>`,
        steps: [
          `<strong>C.E.</strong>: dobbiamo imporre che entrambi i denominatori siano diversi da zero: $$\\begin{cases} x - 3 \\neq 0 \\\\ x + 1 \\neq 0 \\end{cases} \\Rightarrow \\begin{cases} x \\neq 3 \\\\ x \\neq -1 \\end{cases}$$`,
          `<strong>Risoluzione</strong>: il m.c.m. dei denominatori è $(x-3)(x+1)$. Moltiplichiamo entrambi i membri per questa quantità (possiamo farlo perché, grazie al C.E., sappiamo che non è zero): $$(x+1)(x+2) + (x-3)(x-1) = 0$$`,
          `Sviluppiamo i prodotti: $$(x^2 + 2x + x + 2) + (x^2 - x - 3x + 3) = 0$$ Sommiamo i termini simili: $$(x^2 + x^2) + (3x - 4x) + (2 + 3) = 0 \\Rightarrow 2x^2 - x + 5 = 0$$`,
          `<strong>Equazione di secondo grado</strong>: con $a=2$, $b=-1$, $c=5$, calcoliamo il discriminante: $$\\Delta = (-1)^2 - 4(2)(5) = 1 - 40 = -39$$`,
          `<strong>Conclusione</strong>: poiché $\\Delta \\lt 0$, non è possibile estrarre la sua radice quadrata nel campo dei numeri reali. L'equazione di secondo grado non ha soluzioni reali, e di conseguenza anche l'equazione fratta di partenza è <strong>impossibile</strong>.`
        ]
      },

      {
        id: "s38-saluto-presidente",
        type: "oral_box",
        title: "Un saluto dal Presidente della Macroarea di Ingegneria, Prof. Caragnano",
        icon: "🎓",
        content: `<p><em>Nota del Prof.: Durante la lezione, abbiamo avuto il piacere di ricevere un saluto dal Prof. Caragnano, che ha condiviso alcune riflessioni importanti per chi inizia il percorso universitario.</em></p>
        <p>Il percorso di ingegneria richiede un certo impegno. Questa difficoltà iniziale non deve essere vista come un fatto negativo o uno scoglio insormontabile. Quando ci si confronta con qualcosa di nuovo e avanzato, è normale incontrare delle difficoltà.</p>
        <p>Le materie di base come Analisi, Fisica, Geometria, che a volte possono sembrare noiose o slegate dalla pratica, sono in realtà fondamentali. Perché? Perché un ingegnere deve risolvere problemi, spesso nuovi e sconosciuti. Per farlo, deve saper <strong>astrarre</strong> e <strong>modellizzare</strong> la realtà. Queste materie vi allenano a questo: a creare una formazione ampia e flessibile, come un pugile che si allena per un avversario che non conosce.</p>
        <p>Non sentitevi soli. Se incontrate difficoltà, non scappate. Alzate la mano, chiedete aiuto. Noi docenti, l'università intera, siamo una squadra. Il nostro obiettivo è portarvi al traguardo. Sfruttate l'università: studiate insieme, usate la biblioteca, parlate con i docenti. La vita universitaria, vissuta intensamente, è una parte fondamentale della vostra crescita. La scelta che avete fatto è bellissima, è una grande sfida ma dà enormi soddisfazioni. Non mollate.</p>`
      },

      {
        id: "s39-irrazionali-metodo",
        type: "section",
        title: "Equazioni Irrazionali: il metodo generale",
        icon: "√",
        content: `<p>Le equazioni irrazionali sono equazioni in cui l'incognita compare sotto il segno di radice. La strategia risolutiva prevede di <strong>isolare la radice</strong> e poi <strong>elevare entrambi i membri</strong> a una potenza che elimini la radice stessa.</p>
        <p>Quando si lavora con le radici, è fondamentale stabilire il <strong>campo di esistenza</strong> (C.E.) prima di iniziare a manipolare l'equazione. Per una radice con indice pari (come la radice quadrata), il radicando deve essere sempre maggiore o uguale a zero.</p>
        <p>Consideriamo un'equazione della forma $$\\sqrt{f(x)} = g(x)$$ Per risolverla correttamente, dobbiamo imporre un sistema di condizioni:</p>
        <ol>
          <li><strong>Esistenza della radice</strong>: $f(x) \\ge 0$.</li>
          <li><strong>Concordanza di segno</strong>: poiché una radice quadrata dà sempre un risultato non negativo, anche il secondo membro deve esserlo. Quindi $g(x) \\ge 0$.</li>
          <li><strong>Risoluzione</strong>: elevando al quadrato entrambi i membri, si risolve l'equazione $f(x) = [g(x)]^2$.</li>
        </ol>
        <p>Le soluzioni trovate al punto 3 devono essere <strong>verificate</strong> rispetto alle condizioni dei punti 1 e 2.</p>`,
        formulas: [
          { label: "Sistema per √f(x) = g(x)", latex: "\\begin{cases} f(x) \\ge 0 \\\\ g(x) \\ge 0 \\\\ f(x) = [g(x)]^2 \\end{cases}" }
        ]
      },

      {
        id: "s40-alert-quadrato",
        type: "alert_box",
        title: "Perché non basta elevare al quadrato",
        icon: "⚠️",
        content: `<p>L'elevamento al quadrato è un'operazione che può <em>creare</em> soluzioni che non appartengono all'equazione di partenza (le cosiddette <strong>soluzioni estranee</strong> o spurie): infatti da $A = B$ segue sempre $A^2 = B^2$, ma <strong>non vale il viceversa</strong> (ad esempio $-2 \\ne 2$ ma $(-2)^2 = 2^2$).</p>
        <p>Per questo motivo, ogni soluzione ottenuta dopo l'elevamento al quadrato va sempre <strong>verificata</strong> nel C.E. e, quando possibile, sostituita nell'equazione originale.</p>`
      },

      {
        id: "s41-es-irraz-fratta",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione irrazionale e fratta",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere l'equazione: $$\\frac{\\sqrt{x+1}}{x-1} = 1$$</p>`,
        steps: [
          `<strong>Campo di Esistenza (C.E.)</strong>: abbiamo due problemi, un denominatore e una radice quadrata. Denominatore: $x-1 \\neq 0 \\Rightarrow x \\neq 1$. Radicando: $x+1 \\ge 0 \\Rightarrow x \\ge -1$. Il C.E. complessivo è l'intersezione: $x \\in [-1, 1) \\cup (1, +\\infty)$.`,
          `<strong>Risoluzione</strong>: moltiplichiamo entrambi i membri per $(x-1)$, che sappiamo essere diverso da zero dal C.E.: $$\\sqrt{x+1} = x-1$$ Questa è della forma $\\sqrt{f(x)} = g(x)$: dobbiamo aggiungere la condizione di concordanza di segno.`,
          `<strong>Condizione di concordanza di segno</strong>: $$x-1 \\ge 0 \\Rightarrow x \\ge 1$$`,
          `<strong>Unione di tutte le condizioni</strong>: mettendo a sistema il C.E. ($x \\ge -1$ e $x \\neq 1$) con la condizione di concordanza ($x \\ge 1$), otteniamo la condizione finale: $x \\gt 1$.`,
          `<strong>Elevamento al quadrato</strong>: $$(\\sqrt{x+1})^2 = (x-1)^2 \\Rightarrow x+1 = x^2 - 2x + 1 \\Rightarrow x^2 - 3x = 0$$`,
          `<strong>Risoluzione dell'equazione di secondo grado</strong>: scomponiamo mettendo in evidenza la $x$: $$x(x-3) = 0$$ Le possibili soluzioni sono $x_1=0$ e $x_2=3$.`,
          `<strong>Verifica delle soluzioni</strong> con la condizione restrittiva $x \\gt 1$: $x_1=0$ non è maggiore di 1, quindi è una <strong>soluzione non accettabile</strong> (spuria), introdotta dall'elevamento al quadrato (infatti $\\sqrt{1}=-1$ darebbe $1=-1$, falso). $x_2=3$ è maggiore di 1, quindi è <strong>accettabile</strong>. L'unica soluzione è $x=3$.`
        ]
      },

      {
        id: "s42-es-irraz-no-sol",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Equazione irrazionale senza soluzioni reali",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere l'equazione: $$\\sqrt{2x-3} = x$$</p>`,
        steps: [
          `<strong>Campo di Esistenza (C.E.)</strong>: il primo passo fondamentale è sempre determinare il campo di esistenza. Il radicando deve essere non negativo: $$2x - 3 \\ge 0 \\Rightarrow 2x \\ge 3 \\Rightarrow x \\ge \\frac{3}{2}$$ Va inoltre imposta la concordanza di segno: $x \\ge 0$. L'intersezione delle due condizioni è $x \\ge \\frac{3}{2}$.`,
          `<strong>Elevamento al quadrato</strong>: $$(\\sqrt{2x-3})^2 = x^2 \\Rightarrow 2x - 3 = x^2$$`,
          `<strong>Forma standard</strong>: riorganizziamo i termini: $$x^2 - 2x + 3 = 0$$`,
          `<strong>Calcolo del discriminante</strong>: $$\\Delta = (-2)^2 - 4(1)(3) = 4 - 12 = -8$$`,
          `<strong>Conclusione</strong>: poiché $\\Delta \\lt 0$, l'equazione di secondo grado non ammette soluzioni reali. Di conseguenza, l'equazione irrazionale di partenza <strong>non ha soluzioni</strong>.`
        ]
      },

      {
        id: "s43-ce-vs-soluzioni",
        type: "alert_box",
        title: "Campo di Esistenza ≠ Insieme delle Soluzioni",
        icon: "⚠️",
        content: `<p>Questo esercizio evidenzia un punto cruciale: <strong>non bisogna confondere il campo di esistenza con l'insieme delle soluzioni</strong>.</p>
        <ul>
          <li>Il <strong>campo di esistenza</strong> ($x \\ge 3/2$) ci dice per quali valori di $x$ l'equazione è ben definita, cioè ha senso matematicamente.</li>
          <li>L'<strong>insieme delle soluzioni</strong> ci dice per quali valori di $x$ (all'interno del C.E.) l'uguaglianza è verificata.</li>
        </ul>
        <p>In questo caso, anche se esiste un C.E., non ci sono valori di $x$ che soddisfano l'equazione.</p>
        <p>L'interpretazione geometrica chiarisce la situazione: stiamo cercando i punti di intersezione tra la curva $y = \\sqrt{2x-3}$ (un ramo di parabola) e la retta $y=x$. Il calcolo ha dimostrato che queste due curve <strong>non si intersecano mai</strong>.</p>`
      },

      {
        id: "s44-diseq-irrazionali",
        type: "section",
        title: "Disequazioni Irrazionali: il metodo dei due casi",
        icon: "⚡",
        content: `<p>Le disequazioni irrazionali richiedono più attenzione delle equazioni: mentre in un'equazione l'elevamento al quadrato può al più <em>introdurre</em> soluzioni estranee (che eliminiamo con una verifica), in una disequazione un elevamento al quadrato eseguito senza precauzioni può anche <strong>perdere</strong> soluzioni.</p>`,
        subsections: [
          {
            subtitle: "Il metodo corretto per √A(x) ≥ B(x)",
            content: `<p>Prima di tutto serve il campo di esistenza $A(x) \\ge 0$. Poi si osserva che la radice quadrata è sempre $\\ge 0$, quindi bisogna distinguere due casi in base al <em>segno del secondo membro</em>:</p>
            <p><strong>Caso 1: $B(x) \\lt 0$.</strong> Il primo membro è non negativo e il secondo è negativo, quindi la disuguaglianza è <em>automaticamente vera</em>. Basta imporre il C.E.:</p>
            <p>$$\\begin{cases} A(x) \\ge 0 \\\\ B(x) \\lt 0 \\end{cases}$$</p>
            <p><strong>Caso 2: $B(x) \\ge 0$.</strong> Entrambi i membri sono non negativi, quindi possiamo elevare al quadrato senza alterare il verso:</p>
            <p>$$\\begin{cases} B(x) \\ge 0 \\\\ A(x) \\ge B(x)^2 \\end{cases}$$</p>
            <p>Qui la condizione $A(x) \\ge B(x)^2 \\ge 0$ garantisce da sola il C.E., che quindi non serve riscrivere.</p>
            <p>La soluzione finale è l'<strong>unione</strong> delle soluzioni dei due sistemi. Elevare al quadrato <em>direttamente</em>, senza discutere il segno di $B(x)$, significa risolvere solo il Caso 2 e quindi dimenticare tutte le soluzioni del Caso 1.</p>`
          },
          {
            subtitle: "Il metodo per √f(x) < g(x)",
            content: `<p>Consideriamo ora il caso in cui il segno della disequazione è invertito: $\\sqrt{f(x)} \\lt g(x)$. La radice produce un risultato non negativo; affinché la disequazione possa essere vera, anche il termine a destra $g(x)$ deve essere <strong>strettamente positivo</strong>. Se $g(x)$ fosse negativo o nullo, non potrebbe mai essere maggiore di una quantità non negativa.</p>
            <p>Dobbiamo dunque imporre <strong>tre condizioni contemporaneamente</strong>, in un <strong>unico sistema</strong>:</p>
            <p>$$\\begin{cases} f(x) \\ge 0 & \\text{(esistenza della radice)} \\\\ g(x) \\gt 0 & \\text{(concordanza dei segni)} \\\\ f(x) \\lt [g(x)]^2 & \\text{(elevamento al quadrato)} \\end{cases}$$</p>
            <p>A differenza del caso $\\ge$, qui la condizione di esistenza $f(x) \\ge 0$ <strong>non è implicita</strong> nelle altre e deve essere sempre esplicitata.</p>`
          },
          {
            subtitle: "Perché il segno conta",
            content: `<p>La ragione profonda è che la funzione $t \\mapsto t^2$ conserva le disuguaglianze <strong>solo sui numeri non negativi</strong>: se $0 \\le u \\le v$ allora $u^2 \\le v^2$, ma se $u$ o $v$ sono negativi la conclusione cade (ad esempio $-5 \\le 2$ ma $25 \\ge 4$).</p>
            <p>Nelle equazioni questo si traduce nel rischio di soluzioni estranee; nelle disequazioni si traduce nel rischio, ben più insidioso, di <em>perdere</em> soluzioni. Il metodo dei due casi serve esattamente a garantire che l'elevamento al quadrato venga fatto solo dove è lecito.</p>`
          }
        ],
        formulas: [
          { label: "√f ≥ g — Caso 1 (g < 0)", latex: "\\begin{cases} f(x) \\ge 0 \\\\ g(x) \\lt 0 \\end{cases}" },
          { label: "√f ≥ g — Caso 2 (g ≥ 0)", latex: "\\begin{cases} g(x) \\ge 0 \\\\ f(x) \\ge [g(x)]^2 \\end{cases}" },
          { label: "√f < g — sistema unico", latex: "\\begin{cases} f(x) \\ge 0 \\\\ g(x) \\gt 0 \\\\ f(x) \\lt [g(x)]^2 \\end{cases}" }
        ],
        extra_content: `<p><strong>Nota del Tutor.</strong> Una studentessa ha correttamente notato che la risoluzione della disequazione $\\sqrt{x+1} \\ge x-1$ richiede di impostare un'<strong>unione di due sistemi</strong>, a seconda del segno del termine a destra. Il procedimento completo è svolto nell'esercizio che segue.</p>`
      },

      {
        id: "s45-es-diseq-irraz",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione irrazionale √(x+1) ≥ x−1",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la disequazione: $$\\sqrt{x+1} \\ge x-1$$</p>`,
        steps: [
          `<strong>Identificazione dei termini</strong>: $f(x) = x+1$ e $g(x) = x-1$. Il <strong>Campo di Esistenza</strong> richiede $x+1 \\ge 0$, cioè $x \\ge -1$.`,
          `<strong>Discussione del segno del secondo membro</strong>: $g(x) = x-1$ cambia segno in $x=1$. Distinguiamo quindi due casi.`,
          `<strong>Caso 1: $x - 1 \\lt 0$, cioè $x \\lt 1$.</strong> Qui il primo membro $\\sqrt{x+1}$ è non negativo e il secondo membro è negativo: la disuguaglianza è sempre verificata. Resta solo da imporre il C.E.: $$\\begin{cases} x \\ge -1 \\\\ x \\lt 1 \\end{cases} \\Rightarrow S_1 = [-1, 1)$$`,
          `<strong>Caso 2: $x - 1 \\ge 0$, cioè $x \\ge 1$.</strong> Ora entrambi i membri sono non negativi e possiamo elevare al quadrato: $$x+1 \\ge (x-1)^2 \\Rightarrow x+1 \\ge x^2 - 2x + 1 \\Rightarrow 0 \\ge x^2 - 3x$$`,
          `Cioè $x^2 - 3x \\le 0$, ovvero $x(x-3) \\le 0$. Le radici sono $x=0$ e $x=3$; la parabola ha concavità verso l'alto, quindi la soluzione è data dai <strong>valori interni</strong>: $0 \\le x \\le 3$. Mettendo a sistema con la condizione del caso: $$\\begin{cases} x \\ge 1 \\\\ 0 \\le x \\le 3 \\end{cases} \\Rightarrow S_2 = [1, 3]$$`,
          `<strong>Unione dei due casi</strong>: la soluzione complessiva è $$S = S_1 \\cup S_2 = [-1, 1) \\cup [1, 3] = [-1, 3]$$`,
          `<strong>Soluzione finale</strong>: $$-1 \\le x \\le 3$$`
        ]
      },

      {
        id: "s46-alert-perdere-soluzioni",
        type: "alert_box",
        title: "L'elevamento al quadrato \"diretto\" perde soluzioni",
        icon: "🚨",
        content: `<p>Se in questo esercizio avessimo elevato subito al quadrato entrambi i membri, senza discutere il segno di $x-1$, avremmo ottenuto $x^2-3x \\le 0$, cioè $0 \\le x \\le 3$, e intersecando con il C.E. $x \\ge -1$ saremmo arrivati alla risposta $[0,3]$: una risposta <strong>incompleta e quindi sbagliata</strong>.</p>
        <p>Per convincersene basta una verifica numerica. Prendiamo $x = -\\tfrac{1}{2}$, che appartiene al C.E. ($-\\tfrac12 \\ge -1$) ma non a $[0,3]$:</p>
        <p>$$\\sqrt{-\\tfrac12 + 1} = \\sqrt{\\tfrac12} \\approx 0{,}707, \\qquad x - 1 = -\\tfrac{3}{2} = -1{,}5,$$</p>
        <p>e infatti $0{,}707 \\ge -1{,}5$ è <strong>vero</strong>. Dunque $x=-\\tfrac12$ è una soluzione che il metodo "diretto" aveva perso. Il metodo semplificato ha perso l'intervallo $[-1,0)$; i punti di $[0,1)$, che pure appartengono al Caso 1, sono stati recuperati solo per coincidenza, perché soddisfano anche $x^2-3x \\le 0$.</p>
        <p><strong>Morale:</strong> per le disequazioni irrazionali del tipo $\\sqrt{A} \\ge B$ (o $\\sqrt{A} \\gt B$) bisogna <em>sempre</em> discutere il segno del secondo membro. Elevare al quadrato è lecito solo quando entrambi i membri sono non negativi.</p>`
      },

      {
        id: "s47-studio-segno-tabella",
        type: "note_box",
        title: "Metodo alternativo: studio del segno con tabella",
        icon: "📋",
        content: `<p>Nel Caso 2 abbiamo dovuto risolvere la disequazione di secondo grado $x^2 - 3x \\le 0$. Oltre al metodo della parabola, si può procedere studiando il <strong>segno dei singoli fattori</strong>, $x$ e $x-3$.</p>
        <p>Si studia quando ogni fattore è maggiore o uguale a zero: Fattore 1: $x \\ge 0$; Fattore 2: $x-3 \\ge 0 \\Rightarrow x \\ge 3$. Poi si costruisce la tabella dei segni per determinare il segno del prodotto.</p>`,
        table_compare: {
          headers: ["Fattore", "x < 0", "x = 0", "0 < x < 3", "x = 3", "x > 3"],
          rows: [
            ["x", "−", "0", "+", "+", "+"],
            ["x − 3", "−", "−", "−", "0", "+"],
            ["Prodotto", "+", "0", "−", "0", "+"]
          ]
        },
        extra_content: `<p>Cerchiamo dove il prodotto è $\\le 0$ (negativo o nullo). Dalla tabella, ciò accade nell'intervallo $[0, 3]$, confermando il risultato ottenuto con la parabola.</p>
        <p><strong>Si noti bene</strong>: $[0,3]$ è la soluzione della <em>sola</em> disequazione di secondo grado, non della disequazione irrazionale di partenza. Per ottenere quest'ultima occorre ancora intersecare con la condizione $x \\ge 1$ del Caso 2 e poi unire con il Caso 1, ottenendo $[-1,3]$.</p>
        <p><strong>Lettura geometrica.</strong> Risolvere $\\sqrt{x+1} \\ge x-1$ significa cercare gli $x$ del dominio $[-1,+\\infty)$ per cui il ramo di parabola $y=\\sqrt{x+1}$ sta <em>sopra</em> (o sulla) la retta $y=x-1$. Le due curve si incontrano in $x=3$ (infatti $\\sqrt{4}=2=3-1$): a sinistra di questo punto la radice sta sopra la retta, a destra sotto. Ciò conferma che la soluzione è tutto l'intervallo $[-1,3]$ e rende evidente perché la risposta $[0,3]$ non poteva essere corretta: il punto $x=0$ non ha alcun ruolo geometrico particolare in questo confronto.</p>`
      },

      {
        id: "s48-es-prodotto-fattori",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione con prodotto di fattori (x²+2)(x−1) ≤ 0",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente disequazione: $$(x^2+2)(x-1) \\le 0$$</p>`,
        steps: [
          `<strong>Analisi dei singoli fattori.</strong> Primo fattore: $x^2+2$. Studiamo quando $x^2+2 \\gt 0$: è la somma di un quadrato ($x^2 \\ge 0$) e di un numero positivo (2), quindi $x^2+2$ è <strong>sempre strettamente positivo</strong> per ogni $x \\in \\mathbb{R}$.`,
          `Secondo fattore: $x-1$. Studiamo quando $x-1 \\gt 0$: questo è vero per $x \\gt 1$.`,
          `<strong>Studio del segno del prodotto.</strong> Poiché il primo fattore è sempre positivo, non influisce sul segno del prodotto. La disequazione originale è quindi equivalente a studiare il segno del solo secondo fattore: $$x-1 \\le 0 \\Rightarrow x \\le 1$$`,
          `<strong>Verifica con la tabella dei segni.</strong> Il fattore $x^2+2$ è sempre $+$; il fattore $x-1$ è $-$ per $x \\lt 1$, nullo in $x=1$, $+$ per $x \\gt 1$. Il prodotto ha lo stesso andamento del secondo fattore: negativo per $x \\lt 1$, nullo in $x=1$, positivo per $x \\gt 1$.`,
          `La disequazione chiede $\\le 0$, quindi la <strong>soluzione</strong> è $x \\le 1$, cioè $(-\\infty, 1]$.`
        ]
      },

      {
        id: "s49-divisione-polinomi",
        type: "section",
        title: "Divisione tra Polinomi",
        icon: "➗",
        content: `<p>La divisione tra polinomi è un argomento fondamentale. Dati un dividendo $N(x)$ e un divisore $D(x)$, si cercano un <strong>quoziente</strong> $Q(x)$ e un <strong>resto</strong> $R(x)$ tali che</p>
        <p>$$N(x) = D(x) \\cdot Q(x) + R(x)$$</p>
        <p>con il grado di $R(x)$ strettamente minore del grado di $D(x)$: è questa condizione che dice quando fermarsi.</p>`
      },

      {
        id: "s50-es-divisione",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Divisione tra polinomi (Esercizio 7.1)",
        icon: "✎",
        source: "docente",
        content: `<p>Calcolare quoziente e resto della divisione tra i polinomi $N(x) = x^5 - x^3 + 1$ e $D(x) = x^2 + 1$.</p>`,
        steps: [
          `<strong>Impostazione della divisione in colonna.</strong> Scriviamo i polinomi in ordine decrescente di grado, aggiungendo termini con coefficiente zero per le potenze mancanti: $$x^5 + 0x^4 - x^3 + 0x^2 + 0x + 1 \\quad \\big| \\quad x^2+1$$ Non è strettamente necessario scrivere i termini con coefficiente zero, ma è una buona pratica per non commettere errori di allineamento.`,
          `<strong>Primo passo: divisione dei termini di grado massimo.</strong> Dividiamo il termine di grado massimo del dividendo ($x^5$) per quello del divisore ($x^2$): $$\\frac{x^5}{x^2} = x^3$$ Questo è il primo termine del quoziente.`,
          `<strong>Moltiplicazione e sottrazione.</strong> Moltiplichiamo $x^3$ per l'intero divisore: $$x^3 \\cdot (x^2+1) = x^5 + x^3$$ Cambiando di segno otteniamo $-x^5 - x^3$ e sommiamo in colonna. Il primo resto parziale è $-2x^3 + 1$.`,
          `<strong>Secondo passo: iterazione.</strong> Ripetiamo usando il resto parziale come nuovo dividendo: $$\\frac{-2x^3}{x^2} = -2x$$ Questo è il secondo termine del quoziente, che diventa $x^3 - 2x$.`,
          `Moltiplichiamo $-2x$ per il divisore: $-2x \\cdot (x^2+1) = -2x^3 - 2x$. Cambiamo di segno ($+2x^3 + 2x$) e sommiamo. Il nuovo resto parziale è $2x+1$.`,
          `<strong>Conclusione.</strong> Il grado del nuovo resto ($2x+1$, grado 1) è minore del grado del divisore ($x^2+1$, grado 2): la divisione termina qui. Quoziente $Q(x) = x^3 - 2x$, resto $R(x) = 2x + 1$.`,
          `<strong>Verifica</strong> della relazione $N(x) = D(x) \\cdot Q(x) + R(x)$: $$(x^2+1)(x^3-2x) + (2x+1) = (x^5 - 2x^3 + x^3 - 2x) + 2x + 1 = x^5 - x^3 + 1$$ che è esattamente il polinomio di partenza $N(x)$.`
        ]
      },

      {
        id: "s51-es-sistema-fratto",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Sistema di equazioni fratte (Esercizio 12.1)",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere il seguente sistema di equazioni fratte:</p>
        <p>$$\\begin{cases} \\dfrac{3}{x+1} + \\dfrac{2}{y-1} = 4 \\\\[6pt] \\dfrac{1}{x+1} - \\dfrac{4}{y-1} = -1 \\end{cases}$$</p>`,
        steps: [
          `<strong>Condizioni di Esistenza (C.E.).</strong> Prima di tutto, dobbiamo assicurarci che i denominatori non si annullino: $$x+1 \\neq 0 \\Rightarrow x \\neq -1 \\quad \\text{e} \\quad y-1 \\neq 0 \\Rightarrow y \\neq 1$$`,
          `<strong>Sostituzione di variabili.</strong> Per semplificare il sistema, che non è lineare, introduciamo variabili ausiliarie: $$T = \\frac{1}{x+1} \\quad \\text{e} \\quad Z = \\frac{1}{y-1}$$ Il sistema diventa lineare nelle variabili $T$ e $Z$: $$\\begin{cases} 3T + 2Z = 4 \\\\ T - 4Z = -1 \\end{cases}$$`,
          `<strong>Risoluzione del sistema lineare.</strong> Dalla seconda equazione ricaviamo $T = 4Z - 1$ e sostituiamo nella prima: $$3(4Z - 1) + 2Z = 4 \\Rightarrow 12Z - 3 + 2Z = 4 \\Rightarrow 14Z = 7 \\Rightarrow Z = \\frac{1}{2}$$ Quindi $T = 4\\left(\\frac{1}{2}\\right) - 1 = 1$. La soluzione è $(T, Z) = (1, 1/2)$.`,
          `<strong>Ritorno alle variabili originali.</strong> $$T = \\frac{1}{x+1} \\Rightarrow 1 = \\frac{1}{x+1} \\Rightarrow x+1 = 1 \\Rightarrow x = 0$$ $$Z = \\frac{1}{y-1} \\Rightarrow \\frac{1}{2} = \\frac{1}{y-1} \\Rightarrow y-1 = 2 \\Rightarrow y = 3$$`,
          `<strong>Verifica delle C.E. e soluzione finale.</strong> La soluzione trovata è $(x, y) = (0, 3)$: $x=0 \\neq -1$ e $y=3 \\neq 1$, le condizioni sono soddisfatte. La soluzione del sistema è $(x, y) = (0, 3)$.`
        ]
      },

      {
        id: "s52-nota-or-logico",
        type: "note_box",
        title: "Il simbolo ∨ (\"oppure\")",
        icon: "🔤",
        content: `<p>Nell'esercizio che segue useremo il simbolo logico $\\lor$. Si legge <strong>"oppure"</strong> e indica l'<strong>unione logica</strong>: scrivere $(A) \\lor (B)$ significa che la condizione è soddisfatta se vale $A$, <em>oppure</em> se vale $B$, <em>oppure</em> se valgono entrambe. In termini di insiemi di soluzioni corrisponde all'<strong>unione</strong> $\\cup$ degli intervalli.</p>
        <p>Da non confondere con il sistema $\\begin{cases} A \\\\ B \\end{cases}$, che richiede invece che <em>entrambe</em> le condizioni valgano contemporaneamente (intersezione $\\cap$).</p>`
      },

      {
        id: "s53-es-diseq-irraz-81",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Disequazione irrazionale (Esercizio 8.1)",
        icon: "✎",
        source: "docente",
        content: `<p>Risolvere la seguente disequazione irrazionale: $$\\sqrt{x(x-4)+4} \\gt 2x+1$$</p>
        <p>La disequazione è nella forma $\\sqrt{f(x)} \\gt g(x)$.</p>`,
        steps: [
          `<strong>Semplificazione e Condizione di Esistenza (C.E.).</strong> Semplifichiamo l'argomento della radice: $$x(x-4)+4 = x^2 - 4x + 4 = (x-2)^2$$ La disequazione diventa $$\\sqrt{(x-2)^2} \\gt 2x+1$$ Ricordando che $\\sqrt{A^2} = |A|$, otteniamo $$|x-2| \\gt 2x+1$$ Questa non è più una disequazione irrazionale, ma una disequazione con <strong>valore assoluto</strong>. La condizione di esistenza $(x-2)^2 \\ge 0$ è sempre verificata per ogni $x \\in \\mathbb{R}$.`,
          `<strong>Risoluzione della disequazione con valore assoluto.</strong> Una disequazione della forma $|A| \\gt B$ è equivalente all'unione di due casi: $$(A \\gt B) \\quad \\lor \\quad (A \\lt -B)$$ Nel nostro caso: $$(x-2 \\gt 2x+1) \\quad \\lor \\quad (x-2 \\lt -(2x+1))$$`,
          `<strong>Prima disequazione:</strong> $$x-2 \\gt 2x+1 \\Rightarrow -x \\gt 3 \\Rightarrow x \\lt -3$$ (dividendo per $-1$ si inverte il verso).`,
          `<strong>Seconda disequazione:</strong> $$x-2 \\lt -2x-1 \\Rightarrow 3x \\lt 1 \\Rightarrow x \\lt \\frac{1}{3}$$`,
          `<strong>Unione delle soluzioni.</strong> La soluzione finale è l'unione dei due insiemi: $$(-\\infty, -3) \\cup \\left(-\\infty, \\tfrac{1}{3}\\right)$$ L'unione di questi due intervalli è l'intervallo più grande, cioè $\\left(-\\infty, \\tfrac{1}{3}\\right)$. La soluzione della disequazione è $x \\lt 1/3$.`
        ]
      },

      {
        id: "s54-metodo-alternativo-81",
        type: "note_box",
        title: "Metodo alternativo per √f(x) > g(x)",
        icon: "🔁",
        content: `<p>Se non avessimo riconosciuto il quadrato perfetto, avremmo dovuto risolvere la disequazione irrazionale $\\sqrt{x^2-4x+4} \\gt 2x+1$ con il metodo standard. Questo metodo prevede la discussione di due casi, uniti da un "oppure" (unione logica, $\\lor$).</p>
        <p>La disequazione $\\sqrt{f(x)} \\gt g(x)$ è equivalente a:</p>
        <p>$$\\begin{cases} f(x) \\ge 0 \\\\ g(x) \\lt 0 \\end{cases} \\quad \\lor \\quad \\begin{cases} g(x) \\ge 0 \\\\ f(x) \\gt [g(x)]^2 \\end{cases}$$</p>
        <p><strong>Primo sistema:</strong></p>
        <p>$$\\begin{cases} x^2-4x+4 \\ge 0 \\Rightarrow (x-2)^2 \\ge 0 \\Rightarrow \\forall x \\in \\mathbb{R} \\\\ 2x+1 \\lt 0 \\Rightarrow x \\lt -1/2 \\end{cases}$$</p>
        <p>La soluzione di questo sistema è $x \\lt -1/2$.</p>
        <p><strong>Secondo sistema:</strong></p>
        <p>$$\\begin{cases} 2x+1 \\ge 0 \\Rightarrow x \\ge -1/2 \\\\ x^2-4x+4 \\gt (2x+1)^2 \\end{cases}$$</p>
        <p>Risolviamo la seconda disequazione:</p>
        <p>$$x^2-4x+4 \\gt 4x^2+4x+1 \\ \\Rightarrow \\ -3x^2 - 8x + 3 \\gt 0 \\ \\Rightarrow \\ 3x^2 + 8x - 3 \\lt 0$$</p>
        <p>Troviamo le radici dell'equazione associata $3x^2+8x-3=0$:</p>
        <p>$$x = \\frac{-8 \\pm \\sqrt{64 - 4(3)(-3)}}{6} = \\frac{-8 \\pm \\sqrt{64+36}}{6} = \\frac{-8 \\pm \\sqrt{100}}{6} = \\frac{-8 \\pm 10}{6}$$</p>
        <p>Le radici sono $x_1 = \\frac{2}{6} = \\frac{1}{3}$ e $x_2 = \\frac{-18}{6} = -3$. La parabola $y=3x^2+8x-3$ è rivolta verso l'alto, quindi la disequazione $3x^2+8x-3 \\lt 0$ è soddisfatta per valori interni alle radici: $-3 \\lt x \\lt 1/3$.</p>
        <p>Intersecando con la prima condizione del sistema ($x \\ge -1/2$):</p>
        <p>$$(-3, 1/3) \\cap [-1/2, +\\infty) = [-1/2, 1/3)$$</p>
        <p><strong>Unione finale:</strong></p>
        <p>$$(-\\infty, -1/2) \\cup [-1/2, 1/3) = (-\\infty, 1/3)$$</p>
        <p>La soluzione finale è $x \\lt 1/3$, che <strong>coincide</strong> con il risultato ottenuto con il metodo del valore assoluto.</p>`
      },

      {
        id: "s55-esercizi-proposti",
        type: "integrazione_box",
        title: "Integrazione — Esercizi proposti",
        icon: "📝",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e <strong>non svolti dal docente</strong>. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s56-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dare la definizione di discriminante di un'equazione di secondo grado $ax^2+bx+c=0$ (con $a \\neq 0$) e spiegare, a partire dalla formula risolutiva, come il segno di $\\Delta$ determina il numero di soluzioni reali. Nel caso $\\Delta = 0$ scrivere esplicitamente la soluzione.</p>`,
        solution: `<p>Il discriminante è $\\Delta = b^2 - 4ac$, cioè la quantità sotto radice nella formula risolutiva $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.</p>
        <p>Se $\\Delta \\gt 0$ la radice $\\sqrt{\\Delta}$ esiste ed è un numero positivo, quindi i due segni $\\pm$ producono due valori distinti: $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ e $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$ (due soluzioni reali distinte).</p>
        <p>Se $\\Delta = 0$ si ha $\\sqrt{\\Delta} = 0$ e il segno $\\pm$ non produce differenza: l'unica soluzione (doppia) è $x = -\\frac{b}{2a}$.</p>
        <p>Se $\\Delta \\lt 0$ la radice quadrata di un numero negativo non è definita in $\\mathbb{R}$ e l'equazione non ha soluzioni reali.</p>
        <p>Graficamente la parabola $y = ax^2+bx+c$ taglia l'asse $x$ in due punti, lo tocca in un solo punto (il vertice, di ascissa $-\\frac{b}{2a}$) oppure non lo incontra.</p>
        <p>Esempio: $x^2-4x+3=0$ ($\\Delta = 4$, soluzioni $1$ e $3$), $x^2-4x+4=0$ ($\\Delta = 0$, soluzione doppia $2$), $x^2-4x+5=0$ ($\\Delta = -4$, nessuna soluzione reale).</p>`
      },

      {
        id: "s57-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Data l'equazione $ax^2+bx+c=0$ con $a \\neq 0$, definire il discriminante $\\Delta$ e descrivere, al variare del segno di $\\Delta$, quante soluzioni reali ammette l'equazione e come si scrivono. Dare infine l'interpretazione geometrica dei tre casi in termini della parabola $y=ax^2+bx+c$.</p>`,
        solution: `<p>Il discriminante è $\\Delta = b^2-4ac$. Le soluzioni reali, quando esistono, sono date dalla formula $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.</p>
        <p>Se $\\Delta \\gt 0$ ci sono due soluzioni reali e distinte $x_{1,2} = \\frac{-b\\pm\\sqrt{\\Delta}}{2a}$; se $\\Delta = 0$ la radice si annulla e si ottiene un'unica soluzione (due soluzioni coincidenti) $x_1=x_2=-\\frac{b}{2a}$; se $\\Delta \\lt 0$ la quantità $\\sqrt{\\Delta}$ non è definita in $\\mathbb{R}$ e l'equazione non ha soluzioni reali.</p>
        <p>Geometricamente $y=ax^2+bx+c$ è una parabola e le soluzioni dell'equazione sono le ascisse dei punti in cui la parabola interseca l'asse $x$ (dove $y=0$): per $\\Delta \\gt 0$ la parabola taglia l'asse $x$ in due punti distinti, per $\\Delta=0$ è tangente all'asse $x$ nel vertice, di ascissa $-\\frac{b}{2a}$, per $\\Delta \\lt 0$ non tocca mai l'asse $x$ (sta tutta sopra se $a \\gt 0$, tutta sotto se $a \\lt 0$).</p>`
      },

      {
        id: "s58-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Perché, dopo aver elevato al quadrato un'equazione irrazionale del tipo $\\sqrt{A(x)} = B(x)$, le soluzioni trovate vanno verificate? Illustrare con un esempio numerico in cui compare una soluzione estranea.</p>`,
        solution: `<p>Da $A = B$ segue sempre $A^2 = B^2$, ma non vale il viceversa: ad esempio $(-2)^2 = 2^2$ pur essendo $-2 \\ne 2$. Quindi l'equazione $A(x)^2 = B(x)^2$ può avere soluzioni che non risolvono $A(x)=B(x)$ (soluzioni estranee).</p>
        <p>Nel caso $\\sqrt{A(x)} = B(x)$ va imposto il C.E. $A(x) \\ge 0$ e, poiché la radice è non negativa, anche $B(x) \\ge 0$; le soluzioni di $A(x) = B(x)^2$ vanno accettate solo se rispettano queste condizioni (o, equivalentemente, se sostituite nell'equazione originale la verificano).</p>
        <p>Esempio: $\\sqrt{x+3} = x+1$. Elevando al quadrato si ottiene $x+3 = x^2+2x+1$, cioè $x^2+x-2=0$, con radici $x=1$ e $x=-2$. Per $x=-2$ si ha $\\sqrt{1} = 1 \\ne -1$: è una soluzione estranea (viola $B(x)=x+1 \\ge 0$). L'unica soluzione è $x=1$, per cui $\\sqrt{4}=2=1+1$.</p>`
      },

      {
        id: "s59-teoria-4",
        type: "esercizio",
        title: "Teoria 4",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enunciare il metodo di risoluzione della disequazione $\\sqrt{f(x)} \\ge g(x)$, indicando i due sistemi da impostare, e spiegare perché nel secondo sistema la condizione di esistenza $f(x) \\ge 0$ può essere omessa.</p>`,
        solution: `<p>Si distinguono due casi in base al segno di $g(x)$.</p>
        <p><strong>Caso $g(x) \\lt 0$</strong>: quando la radice esiste il suo valore è $\\ge 0$, dunque è automaticamente maggiore di $g(x)$; basta imporre $g(x) \\lt 0$ e $f(x) \\ge 0$.</p>
        <p><strong>Caso $g(x) \\ge 0$</strong>: entrambi i membri sono non negativi e per quantità non negative $a \\ge b$ equivale ad $a^2 \\ge b^2$; si impone quindi $g(x) \\ge 0$ e $f(x) \\ge [g(x)]^2$.</p>
        <p>La soluzione della disequazione è l'<strong>unione</strong> delle soluzioni dei due sistemi.</p>
        <p>Nel secondo sistema si ha $[g(x)]^2 \\ge 0$, quindi da $f(x) \\ge [g(x)]^2$ segue $f(x) \\ge 0$: la condizione di esistenza è già implicata e non serve scriverla.</p>`
      },

      {
        id: "s60-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Risolvere l'equazione $3(x-2) - 2(x+1) = 4 - x$ e la disequazione $5 - 3x \\ge 2x - 10$, verificando i risultati con valori di prova.</p>`,
        solution: `<p><strong>Equazione</strong>: sviluppando le parentesi, $3x - 6 - 2x - 2 = 4 - x$, cioè $x - 8 = 4 - x$. Trasportando $-x$ a sinistra e $-8$ a destra: $2x = 12$, quindi $x = 6$. Verifica: $3(6-2) - 2(6+1) = 12 - 14 = -2$ e $4 - 6 = -2$, uguaglianza vera.</p>
        <p><strong>Disequazione</strong>: trasportando, $-3x - 2x \\ge -10 - 5$, cioè $-5x \\ge -15$. Dividendo per $-5$, che è negativo, si inverte il verso: $x \\le 3$. Soluzione: $x \\le 3$, cioè l'intervallo $(-\\infty, 3]$.</p>
        <p>Verifica: per $x = 0$ si ha $5 \\ge -10$, vero; per $x = 4$ si ha $5 - 12 = -7$ e $8 - 10 = -2$, ma $-7 \\ge -2$ è falso, quindi $4$ è correttamente escluso; per $x = 3$ si ha $-4 \\ge -4$, vero (estremo incluso).</p>`
      },

      {
        id: "s61-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Risolvere in $\\mathbb{R}$ le seguenti equazioni, calcolando prima il discriminante: (a) $3x^2-7x+2=0$; (b) $4x^2-12x+9=0$; (c) $x^2+2x+5=0$.</p>`,
        solution: `<p><strong>(a)</strong> $a=3$, $b=-7$, $c=2$: $\\Delta=(-7)^2-4\\cdot 3\\cdot 2=49-24=25 \\gt 0$, due soluzioni reali distinte $x=\\frac{7\\pm 5}{6}$, cioè $x_1=2$ e $x_2=\\frac{1}{3}$; infatti $3x^2-7x+2=(x-2)(3x-1)$.</p>
        <p><strong>(b)</strong> $a=4$, $b=-12$, $c=9$: $\\Delta=144-144=0$, due soluzioni reali coincidenti $x=-\\frac{b}{2a}=\\frac{12}{8}=\\frac{3}{2}$; infatti $4x^2-12x+9=(2x-3)^2$.</p>
        <p><strong>(c)</strong> $a=1$, $b=2$, $c=5$: $\\Delta=4-20=-16 \\lt 0$, nessuna soluzione reale: la parabola $y=x^2+2x+5$ non interseca l'asse $x$.</p>`
      },

      {
        id: "s62-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Risolvere l'equazione $\\sqrt{x+3} = x+1$.</p>`,
        solution: `<p>C.E.: $x+3 \\ge 0$, cioè $x \\ge -3$. Inoltre il primo membro è non negativo, quindi deve essere $x+1 \\ge 0$, cioè $x \\ge -1$.</p>
        <p>Elevando al quadrato: $x+3 = (x+1)^2 = x^2+2x+1$, da cui $x^2+x-2 = 0$. Il discriminante è $\\Delta = 1+8 = 9$ e le radici sono $x = \\frac{-1 \\pm 3}{2}$, cioè $x_1 = 1$ e $x_2 = -2$.</p>
        <p>La radice $x_2=-2$ non rispetta $x \\ge -1$: sostituendo si ottiene infatti $\\sqrt{1} = 1 \\ne -1$, soluzione estranea. La radice $x_1 = 1$ verifica $\\sqrt{4} = 2 = 1+1$.</p>
        <p>Soluzione: $x = 1$.</p>`
      },

      {
        id: "s63-scritto-4",
        type: "esercizio",
        title: "Scritto 4",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Risolvere la disequazione $\\sqrt{2x+3} \\lt x$.</p>`,
        solution: `<p>È della forma $\\sqrt{f(x)} \\lt g(x)$ con $f(x) = 2x+3$ e $g(x) = x$. Si impone l'unico sistema: $2x+3 \\ge 0$, $x \\gt 0$, $2x+3 \\lt x^2$.</p>
        <p>Prima condizione: $x \\ge -\\frac{3}{2}$. Seconda condizione: $x \\gt 0$. Terza condizione: $x^2 - 2x - 3 \\gt 0$; le radici di $x^2-2x-3=0$ sono $x = -1$ e $x = 3$, la parabola ha concavità verso l'alto, quindi la disequazione è soddisfatta per valori esterni: $x \\lt -1$ oppure $x \\gt 3$.</p>
        <p>Intersecando le tre condizioni si ottiene $x \\gt 3$. Soluzione: $S = (3, +\\infty)$.</p>
        <p>Verifica: per $x = 4$, $\\sqrt{11} \\approx 3{,}32 \\lt 4$ vera; per $x = 3$, $\\sqrt{9} = 3 \\lt 3$ falsa, coerentemente con l'esclusione dell'estremo.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Che cos'è il Campo di Esistenza (C.E.) di un'espressione?",
        back: "Il Campo di Esistenza (o dominio) è l'insieme di tutti i valori che l'incognita può assumere affinché l'espressione abbia significato nel campo dei numeri reali. In pratica: radicandi di indice pari $\\ge 0$ e denominatori $\\neq 0$. Nota del Prof.: quando si affronta un'equazione con radici o frazioni, la prima cosa in assoluto da fare è stabilire il C.E.; risolvere prima e verificare dopo è un errore metodologico."
      },
      {
        type: "formula",
        front: "Scrivi la formula risolutiva dell'equazione di secondo grado e la definizione di discriminante.",
        back: "Data $ax^2+bx+c=0$ con $a \\neq 0$: $$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$ dove $\\Delta = b^2 - 4ac$ è il discriminante. I due campanelli d'allarme: il denominatore $2a$ deve essere non nullo (garantito da $a \\neq 0$) e il radicando $\\Delta$ deve essere $\\ge 0$ per avere soluzioni reali."
      },
      {
        type: "domanda",
        front: "Come il segno del discriminante determina il numero di soluzioni reali? Dai anche l'interpretazione geometrica.",
        back: "Se $\\Delta \\gt 0$: due soluzioni reali distinte, la parabola taglia l'asse $x$ in due punti. Se $\\Delta = 0$: una sola soluzione (doppia/coincidente) $x = -\\frac{b}{2a}$, la parabola è tangente all'asse $x$ nel vertice. Se $\\Delta \\lt 0$: nessuna soluzione reale, la parabola non interseca mai l'asse $x$."
      },
      {
        type: "tranello",
        front: "Risolvendo $x^2 = 9$, perché non basta scrivere $x = 3$?",
        back: "Perché quando si estrae una radice di indice pari bisogna considerare <strong>sia la soluzione positiva sia quella negativa</strong>: infatti sia $(+3)^2$ sia $(-3)^2$ valgono 9. La risposta corretta è $x = \\pm 3$, cioè $x_1 = 3$ e $x_2 = -3$."
      },
      {
        type: "tranello",
        front: "Qual è l'errore più frequente in assoluto nella risoluzione delle disequazioni?",
        back: "Dimenticare di <strong>invertire il verso</strong> della disuguaglianza quando si moltiplica o si divide per una quantità negativa. Controllo mentale rapido: $2 \\lt 3$ è vero; moltiplicando per $-1$ si ottiene $-2$ e $-3$, e infatti $-2 \\gt -3$: la disuguaglianza si è rovesciata. Esempio: $-2x \\lt 6 \\Rightarrow x \\gt -3$."
      },
      {
        type: "domanda",
        front: "Come si risolve una disequazione di secondo grado con il metodo della parabola?",
        back: "Si risolve l'equazione associata $ax^2+bx+c=0$ per trovare le radici; si guarda il segno di $a$ (se $a \\gt 0$ la parabola 'sorride', se $a \\lt 0$ 'piange'); si legge sul grafico qualitativo dove la parabola sta sopra o sotto l'asse $x$. Regola pratica per $a \\gt 0$ e $\\Delta \\gt 0$: l'espressione è positiva per i <strong>valori esterni</strong> alle radici ($x \\lt x_1$ oppure $x \\gt x_2$) e negativa per i <strong>valori interni</strong> ($x_1 \\lt x \\lt x_2$)."
      },
      {
        type: "dimostrazione",
        front: "Perché le soluzioni di un'equazione irrazionale vanno sempre verificate dopo l'elevamento al quadrato?",
        back: "Perché da $A = B$ segue sempre $A^2 = B^2$, ma <strong>non vale il viceversa</strong> (ad esempio $-2 \\ne 2$ ma $(-2)^2 = 2^2$). L'elevamento al quadrato può quindi <em>creare</em> soluzioni estranee (spurie) che non risolvono l'equazione di partenza. Esempio visto in aula: in $\\sqrt{x+1} = x-1$ si ottengono $x=0$ e $x=3$, ma $x=0$ darebbe $\\sqrt{1} = -1$, cioè $1 = -1$, falso: va scartata."
      },
      {
        type: "domanda",
        front: "Enuncia il metodo dei due casi per $\\sqrt{f(x)} \\ge g(x)$ e spiega perché non si può elevare direttamente al quadrato.",
        back: "Caso 1 ($g(x) \\lt 0$): la radice è $\\ge 0$ e il secondo membro è negativo, quindi la disuguaglianza è automaticamente vera; basta il sistema $f(x) \\ge 0$, $g(x) \\lt 0$. Caso 2 ($g(x) \\ge 0$): entrambi i membri sono non negativi, si può elevare al quadrato: $g(x) \\ge 0$, $f(x) \\ge [g(x)]^2$ (qui il C.E. è implicito perché $[g(x)]^2 \\ge 0$). La soluzione è l'<strong>unione</strong> dei due sistemi. Elevando direttamente si risolve solo il Caso 2 e si <strong>perdono soluzioni</strong>: in $\\sqrt{x+1} \\ge x-1$ si otterrebbe $[0,3]$ invece del corretto $[-1,3]$."
      },
      {
        type: "domanda",
        front: "Come si risolve $\\sqrt{f(x)} \\lt g(x)$? In cosa differisce dal caso $\\ge$?",
        back: "Serve un <strong>unico sistema</strong> con tre condizioni: $f(x) \\ge 0$ (esistenza della radice), $g(x) \\gt 0$ (concordanza dei segni: se $g$ fosse $\\le 0$ non potrebbe superare una quantità non negativa), $f(x) \\lt [g(x)]^2$. A differenza del caso $\\ge$, qui la condizione di esistenza $f(x) \\ge 0$ <strong>non è implicita</strong> nelle altre e va sempre esplicitata."
      },
      {
        type: "tranello",
        front: "Il campo di esistenza coincide con l'insieme delle soluzioni?",
        back: "No, assolutamente. Il C.E. dice per quali valori di $x$ l'equazione è ben definita, cioè ha senso matematicamente; l'insieme delle soluzioni dice per quali valori (all'interno del C.E.) l'uguaglianza è verificata. Esempio: $\\sqrt{2x-3} = x$ ha C.E. $x \\ge 3/2$ ma <strong>nessuna soluzione</strong>, perché l'equazione $x^2-2x+3=0$ ha $\\Delta = -8 \\lt 0$."
      },
      {
        type: "domanda",
        front: "Quando ci si ferma nella divisione tra polinomi? Qual è la relazione di verifica?",
        back: "Ci si ferma quando il grado del resto è <strong>strettamente minore</strong> del grado del divisore. La relazione di verifica è $N(x) = D(x) \\cdot Q(x) + R(x)$. Esempio svolto: $x^5 - x^3 + 1$ diviso $x^2+1$ dà $Q(x) = x^3 - 2x$ e $R(x) = 2x+1$, e infatti $(x^2+1)(x^3-2x) + (2x+1) = x^5 - x^3 + 1$."
      },
      {
        type: "domanda",
        front: "Come si risolve un sistema di equazioni fratte come quello dell'Esercizio 12.1?",
        back: "Prima si impongono le C.E. sui denominatori ($x \\neq -1$, $y \\neq 1$). Poi si introducono <strong>variabili ausiliarie</strong> $T = \\frac{1}{x+1}$ e $Z = \\frac{1}{y-1}$, che trasformano il sistema non lineare in uno <strong>lineare</strong> in $T$ e $Z$. Risolto quello ($T=1$, $Z=1/2$), si torna alle variabili originali ottenendo $x=0$ e $y=3$, e infine si verificano le C.E."
      },
      {
        type: "tranello",
        front: "Nella disequazione $(x^2+2)(x-1) \\le 0$, cosa si nota subito sul primo fattore?",
        back: "Il fattore $x^2+2$ è la somma di un quadrato ($x^2 \\ge 0$) e di un numero positivo, quindi è <strong>sempre strettamente positivo</strong> per ogni $x \\in \\mathbb{R}$: non influisce sul segno del prodotto. La disequazione si riduce quindi a $x-1 \\le 0$, cioè $x \\le 1$."
      },
      {
        type: "formula",
        front: "Come si risolve $|A| \\gt B$ e a cosa serve nell'esercizio 8.1?",
        back: "$|A| \\gt B$ equivale all'unione (simbolo $\\lor$, che si legge 'oppure') di due casi: $(A \\gt B) \\lor (A \\lt -B)$. Nell'esercizio 8.1 si riconosce che $x(x-4)+4 = (x-2)^2$, quindi $\\sqrt{(x-2)^2} = |x-2|$ e la disequazione diventa $|x-2| \\gt 2x+1$: risolvendo i due casi si ottiene $x \\lt -3$ oppure $x \\lt 1/3$, la cui unione è $x \\lt 1/3$."
      }
    ]
};

