const LESSON = {
    id: "L23", date: "Lezione 23 — 30 Ott 2026",
    title: "Ordini di Infinito e Infinitesimo, Simboli di Landau e Sviluppi Asintotici",
    abstract: "Dal confronto fra potenze dentro un quoziente (a infinito e a zero) alla notazione di Landau: definizione rigorosa di o piccolo, algebra dei resti, sviluppi asintotici notevoli e applicazione sistematica al calcolo dei limiti in forma indeterminata.",

    sections: [
      {
        id: "s23-nota-apertura",
        type: "note_box",
        title: "Apertura della lezione",
        icon: "🗣️",
        content: `<p>La lezione si apre con un richiamo all'esercitazione del giorno precedente.</p>`,
        quote: {
          text: "Ieri c'è stata l'esercitazione, spero vi sia andata bene. Avete visto che il primo scoglio di questo esame è risolvere gli esercizi. Più ne vedete e più ne fate, meglio è. Io ho cercato oggi di pubblicare anche le soluzioni della parte dei limiti di funzioni, così potete avere un confronto.",
          src: "Nota del Prof."
        }
      },

      {
        id: "s23-confronto-potenze",
        type: "section",
        title: "Confronto tra Infiniti e Infinitesimi",
        icon: "⚖️",
        content: `<p>Ripartiamo da una cosa facile: il confronto fra potenze dentro un quoziente. L'idea generale è sempre la stessa, cioè <strong>identificare in numeratore e denominatore il termine dominante</strong>, ma la scelta di quale termine sia dominante cambia a seconda che ci si avvicini a $+\\infty$ oppure a $0$.</p>`,
        subsections: [
          {
            subtitle: "Esempio — confronto fra potenze per $x \\to +\\infty$",
            content: `<p>Calcoliamo</p>
            <p>$$\\lim_{x \\to +\\infty} \\frac{x^8 + x^6 + 2}{x^7 + x^6}$$</p>
            <p>Al numeratore la quantità tende a $+\\infty$, perché è somma di quantità positive divergenti; anche al denominatore c'è una competizione fra termini che divergono. Si tratta dunque di una forma indeterminata $\\frac{\\infty}{\\infty}$ e dobbiamo capire, sia sopra che sotto, con quale <strong>ordine</strong> le due quantità vanno a infinito.</p>
            <p>Nel caso di un limite a infinito mettiamo in evidenza, sopra e sotto, il <strong>termine di grado più alto</strong>: $x^8$ al numeratore e $x^7$ al denominatore.</p>
            <p>$$\\begin{aligned}
            \\lim_{x \\to +\\infty} \\frac{x^8 + x^6 + 2}{x^7 + x^6}
            &= \\lim_{x \\to +\\infty} \\frac{x^8\\left(1 + \\frac{x^6}{x^8} + \\frac{2}{x^8}\\right)}{x^7\\left(1 + \\frac{x^6}{x^7}\\right)}
            = \\lim_{x \\to +\\infty} \\frac{x^8\\left(1 + \\frac{1}{x^2} + \\frac{2}{x^8}\\right)}{x^7\\left(1 + \\frac{1}{x}\\right)} \\\\
            &= \\lim_{x \\to +\\infty} x \\cdot \\frac{1 + \\frac{1}{x^2} + \\frac{2}{x^8}}{1 + \\frac{1}{x}}
            = \\lim_{x \\to +\\infty} x \\cdot \\frac{1 + o(1)}{1 + o(1)}
            \\end{aligned}$$</p>
            <p>Qui abbiamo usato la notazione $o(1)$ (si legge "o piccolo di uno") per indicare funzioni che tendono a zero: i termini $\\frac{1}{x^2}$, $\\frac{2}{x^8}$ e $\\frac{1}{x}$ sono tutti $o(1)$ per $x \\to +\\infty$, e la somma di due $o(1)$ è ancora un $o(1)$.</p>
            <p>Il numeratore tende a $1$, il denominatore tende a $1$, e il fattore $x$ tende a $+\\infty$. Quindi</p>
            <p>$$\\lim_{x \\to +\\infty} \\frac{x^8 + x^6 + 2}{x^7 + x^6} = +\\infty$$</p>`
          },
          {
            subtitle: "Che cosa significa essere un $o(1)$",
            content: `<p>Ricordiamo che una funzione $f(x)$ è un "$o(1)$" per $x \\to x_0$ se il suo limite per $x \\to x_0$ è zero:</p>
            <p>$$\\lim_{x \\to x_0} f(x) = 0$$</p>
            <p>Quando andiamo a infinito, dunque, domina il termine che cresce più in fretta, sia al numeratore che al denominatore, e poi si confrontano i due termini dominanti. Vediamo ora cosa succede quando andiamo a zero: la strategia va <strong>rovesciata</strong>.</p>`
          },
          {
            subtitle: "Esempio — confronto fra potenze per $x \\to 0^+$",
            content: `<p>Consideriamo un limite formalmente simile al precedente:</p>
            <p>$$\\lim_{x \\to 0^+} \\frac{x^8 - x^6 + 2x^2}{x^7 - x^2 + \\sqrt{x}}$$</p>
            <p>Osserviamo subito che la presenza di $\\sqrt{x}$ richiede $x \\geq 0$ e l'annullarsi del denominatore in $x=0$ esclude l'origine, cosicché il dominio della funzione è $x \\gt 0$: il limite per $x \\to 0$ va dunque inteso <strong>nel dominio della funzione</strong>, cioè solo attraverso valori positivi. Per questo scriviamo esplicitamente $x \\to 0^+$ in tutto l'esempio.</p>
            <p>A zero, cosa conviene mettere in evidenza? Sempre il grado più alto? Proviamo. Raccogliendo $x^8$ al numeratore e $x^7$ al denominatore si ottiene, per $x \\gt 0$,</p>
            <p>$$\\frac{x^8 - x^6 + 2x^2}{x^7 - x^2 + \\sqrt{x}}
            = \\frac{x^8\\left(1 - \\frac{1}{x^2} + \\frac{2}{x^6}\\right)}{x^7\\left(1 - \\frac{1}{x^5} + \\frac{1}{x^{13/2}}\\right)}
            = x \\cdot \\frac{1 - \\frac{1}{x^2} + \\frac{2}{x^6}}{1 - \\frac{1}{x^5} + \\frac{1}{x^{13/2}}}$$</p>
            <p>Questo passaggio è perfettamente lecito: è una semplice riscrittura algebrica, valida per $x \\gt 0$. Il punto è che <strong>non ci avvicina alla soluzione</strong>. Infatti, per $x \\to 0^+$, le espressioni dentro le due parentesi non tendono ad alcun limite finito: i termini $\\frac{1}{x^2}$, $\\frac{2}{x^6}$, $\\frac{1}{x^5}$, $\\frac{1}{x^{13/2}}$ divergono. Il fattore $x$ tende a $0$ e il quoziente delle due parentesi è a sua volta una forma indeterminata, che richiederebbe un ulteriore confronto fra termini divergenti. Abbiamo quindi solo spostato il problema.</p>
            <p>Se invece mettiamo in evidenza il grado più <strong>basso</strong>, la situazione cambia. Al numeratore il termine di grado più basso è $2x^2$; al denominatore è $\\sqrt{x} = x^{1/2}$.</p>
            <p>$$\\begin{aligned}
            \\lim_{x \\to 0^+} \\frac{x^8 - x^6 + 2x^2}{x^7 - x^2 + \\sqrt{x}}
            &= \\lim_{x \\to 0^+} \\frac{2x^2\\left(\\frac{x^8}{2x^2} - \\frac{x^6}{2x^2} + 1\\right)}{\\sqrt{x}\\left(\\frac{x^7}{\\sqrt{x}} - \\frac{x^2}{\\sqrt{x}} + 1\\right)}
            = \\lim_{x \\to 0^+} \\frac{2x^2\\left(\\frac{1}{2}x^6 - \\frac{1}{2}x^4 + 1\\right)}{\\sqrt{x}\\left(x^{13/2} - x^{3/2} + 1\\right)} \\\\
            &= \\lim_{x \\to 0^+} 2x^{2 - 1/2} \\cdot \\frac{1 + o(1)}{1 + o(1)}
            = \\lim_{x \\to 0^+} 2x^{3/2} = 0
            \\end{aligned}$$</p>
            <p>Ora tutti i termini nelle parentesi diversi da $1$ tendono a zero, cioè sono $o(1)$, le parentesi tendono entrambe a $1$ e possiamo concludere.</p>`
          },
          {
            subtitle: "Perché a zero conta il grado più basso e a infinito il grado più alto",
            content: `<p>Quando $x \\to 0$, i termini di grado più alto, come $x^8$, vanno a zero molto più velocemente di quelli di grado basso, come $x$. Se $x = 1/2$, allora $x^8 = (1/2)^8$ è piccolissimo, mentre $x = 1/2$ è molto più grande. Quindi, vicino a zero, il termine "più ingombrante", quello che dà il contributo maggiore, è quello con la <strong>potenza più bassa</strong>.</p>
            <p>Al contrario, quando $x \\to +\\infty$, il termine più ingombrante è quello che cresce più velocemente, cioè quello con la <strong>potenza più alta</strong>.</p>`
          }
        ]
      },

      {
        id: "s23-landau-definizione",
        type: "section",
        title: "I Simboli di Landau: l'\"o piccolo\"",
        icon: "🔍",
        content: `<p>Abbiamo visto che dire che una quantità va a zero, cioè è un $o(1)$, <strong>non dà abbastanza informazioni</strong> per risolvere forme indeterminate come $\\frac{0}{0}$. Dobbiamo essere più fini per capire "come" una quantità va a zero.</p>
        <p>Consideriamo lo sviluppo asintotico di $e^x$ per $x \\to 0$:</p>
        <p>$$e^x = 1 + x(1+o(1)) = 1 + x + x \\cdot o(1)$$</p>
        <p>Questo ci dice che $e^x$ è approssimato da $1+x$ con un errore, $x \\cdot o(1)$, che va a zero più velocemente di $x$ stesso, perché è $x$ moltiplicato per qualcosa che va a zero. Questa idea ci porta a una notazione più generale.</p>`,
        subsections: [
          {
            subtitle: "Definizione (simbolo \"o piccolo\" di Landau)",
            content: `<p>Siano $f, g: A \\to \\mathbb{R}$, con $x_0$ punto di accumulazione per $A$. Supponiamo che $g(x) \\neq 0$ <strong>definitivamente</strong> per $x \\to x_0$ (cioè in un intorno di $x_0$ intersecato con $A$, eventualmente privato di $x_0$). Scriveremo che</p>
            <p>$$f(x) = o(g(x)) \\quad \\text{per } x \\to x_0$$</p>
            <p>(si legge "$f(x)$ è un o piccolo di $g(x)$") se</p>
            <p>$$\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = 0$$</p>
            <p>L'ipotesi "$g$ definitivamente non nulla" non è un dettaglio formale: serve a <strong>dare senso al quoziente</strong> $\\frac{f(x)}{g(x)}$ vicino a $x_0$. Tutte le regole di calcolo che seguono vanno lette con questa ipotesi sottintesa su ogni termine di confronto che compare a denominatore.</p>`
          },
          {
            subtitle: "Prime osservazioni",
            content: `<p><strong>1.</strong> La notazione $f(x) = o(1)$ è coerente con questa definizione. Infatti, prendendo $g(x)=1$ (che è ovviamente non nulla), si ha:</p>
            <p>$$\\lim_{x \\to x_0} \\frac{f(x)}{1} = 0 \\iff \\lim_{x \\to x_0} f(x) = 0$$</p>
            <p><strong>2.</strong> Se $f(x)$ e $g(x)$ sono funzioni <strong>infinitesime</strong> per $x \\to x_0$ (cioè tendono entrambe a zero), allora $f(x) = o(g(x))$ significa che $f(x)$ va a zero <strong>più velocemente</strong> di $g(x)$. Ad esempio, per $x \\to 0$, $x^4$ è un o piccolo di $x^3$: infatti $x^3 \\neq 0$ per $x \\neq 0$ e</p>
            <p>$$\\lim_{x \\to 0} \\frac{x^4}{x^3} = \\lim_{x \\to 0} x = 0$$</p>
            <p>quindi possiamo scrivere $x^4 = o(x^3)$ per $x \\to 0$.</p>
            <p><strong>3.</strong> Se $f(x)$ e $g(x)$ sono funzioni <strong>infinite</strong> per $x \\to x_0$ (cioè tendono entrambe a $\\pm\\infty$), allora $f(x) = o(g(x))$ significa che $g(x)$ va a infinito <strong>più velocemente</strong> di $f(x)$.</p>`
          }
        ],
        formulas: [
          { label: "Definizione di o piccolo", latex: "f(x) = o(g(x)) \\iff \\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = 0" },
          { label: "Caso particolare $g=1$", latex: "f(x) = o(1) \\iff \\lim_{x \\to x_0} f(x) = 0" }
        ]
      },

      {
        id: "s23-segno-uguale",
        type: "alert_box",
        title: "Come va letto il segno \"=\" negli o piccoli",
        icon: "⚠️",
        content: `<p>La scrittura $f(x) = o(g(x))$ <strong>non è un'uguaglianza fra due funzioni determinate</strong>: il simbolo $o(g(x))$ denota <em>una qualunque</em> funzione il cui rapporto con $g$ tende a zero. Di conseguenza:</p>
        <ul>
          <li>l'uguaglianza si legge sempre <strong>da sinistra verso destra</strong> e non è reversibile;</li>
          <li>due occorrenze diverse del simbolo $o(g(x))$ nella stessa formula possono rappresentare <strong>funzioni diverse</strong>, e quindi <strong>non</strong> si cancellano automaticamente l'una con l'altra.</li>
        </ul>
        <p>Ad esempio, da $x^4 = o(x^3)$ e $x^5 = o(x^3)$ <strong>non</strong> si può dedurre $x^4 = x^5$.</p>
        <p>In particolare $o(f) - o(f)$ <strong>non</strong> vale $0$, bensì di nuovo $o(f)$: le uguaglianze di assorbimento descrivono soltanto la <strong>classe</strong> a cui appartiene il resto risultante.</p>`
      },

      {
        id: "s23-algebra-o-piccoli",
        type: "section",
        title: "Algebra degli \"o piccoli\"",
        icon: "🧮",
        content: `<p>Raccogliamo in un unico enunciato le proprietà che useremo per manipolare gli "o piccoli" nei calcoli.</p>
        <p>Sia $x \\to x_0$ (con $x_0$ eventualmente $\\pm\\infty$) e siano $f, g, h$ funzioni definite in un intorno bucato di $x_0$. Supponiamo che tutti i termini di confronto che compaiono a denominatore siano <strong>definitivamente non nulli</strong> per $x \\to x_0$: in particolare $f(x) \\neq 0$ definitivamente, e, nelle proprietà 3 e 4 dove il denominatore è il prodotto $g(x)f(x)$, richiediamo che <strong>sia $f$ sia $g$</strong> siano non nulle in tale intorno bucato.</p>`,
        subsections: [
          {
            subtitle: "Le sette regole di calcolo",
            content: `<p><strong>1. Assorbimento di costanti moltiplicative.</strong> Per ogni costante $c \\in \\mathbb{R}$, $c \\neq 0$:</p>
            <p>$$c \\cdot o(f(x)) = o(f(x)) = o(c \\cdot f(x))$$</p>
            <p><strong>2. Addizione.</strong> La somma di due termini "o piccolo" della stessa funzione è ancora un "o piccolo" di quella funzione:</p>
            <p>$$o(f(x)) + o(f(x)) = o(f(x))$$</p>
            <p><strong>3. Moltiplicazione per una funzione.</strong> Se $g(x) \\neq 0$ definitivamente:</p>
            <p>$$g(x) \\cdot o(f(x)) = o\\big(g(x)f(x)\\big)$$</p>
            <p><strong>4. Moltiplicazione tra "o piccoli".</strong> Se $g(x) \\neq 0$ definitivamente:</p>
            <p>$$o(g(x)) \\cdot o(f(x)) = o\\big(g(x)f(x)\\big)$$</p>
            <p><strong>5. Assorbimento nella somma.</strong> Se $g(x) = o(f(x))$ e $g(x) \\neq 0$ definitivamente, allora</p>
            <p>$$o(f(x)) + o(g(x)) = o(f(x))$$</p>
            <p>(il termine "più piccolo" viene assorbito).</p>
            <p><strong>6. Composizione.</strong> $o\\big(o(f(x))\\big) = o(f(x))$, nel senso precisato sotto.</p>
            <p><strong>7. O piccolo di una somma.</strong> $o\\big(f(x) + o(f(x))\\big) = o(f(x))$.</p>`
          },
          {
            subtitle: "Dimostrazione delle proprietà 2 e 3",
            content: `<p>Dimostriamo le proprietà 2 e 3, che sono quelle usate più spesso nei calcoli. L'idea è sempre la stessa: <strong>tornare alla definizione</strong>, cioè al limite del rapporto.</p>
            <p><strong>Proprietà 2.</strong> Siano $g(x) = o(f(x))$ e $h(x) = o(f(x))$, con $g$ e $h$ in generale <strong>diverse</strong>. Dobbiamo mostrare che $g(x)+h(x) = o(f(x))$. Poiché $f(x) \\neq 0$ definitivamente, possiamo spezzare la frazione (lecito perché i due limiti esistono finiti):</p>
            <p>$$\\lim_{x \\to x_0} \\frac{g(x)+h(x)}{f(x)} = \\lim_{x \\to x_0} \\left( \\frac{g(x)}{f(x)} + \\frac{h(x)}{f(x)} \\right) = 0 + 0 = 0$$</p>
            <p>poiché per ipotesi entrambi i limiti sono nulli.</p>
            <p><strong>Proprietà 3.</strong> Sia $h(x) = o(f(x))$. Dobbiamo mostrare che $g(x)h(x) = o(g(x)f(x))$. Poiché $g(x) \\neq 0$ e $f(x) \\neq 0$ definitivamente, anche il prodotto $g(x)f(x)$ è definitivamente non nullo e possiamo semplificare il fattore $g(x)$:</p>
            <p>$$\\lim_{x \\to x_0} \\frac{g(x)h(x)}{g(x)f(x)} = \\lim_{x \\to x_0} \\frac{h(x)}{f(x)} = 0$$</p>
            <p>perché $h(x) = o(f(x))$. Si noti che è proprio l'ipotesi $g(x) \\neq 0$ definitivamente a rendere lecita la cancellazione.</p>
            <p>Le dimostrazioni delle altre proprietà sono analoghe e sono <strong>lasciate per esercizio</strong>.</p>`
          },
          {
            subtitle: "Lettura della regola $o(o(f)) = o(f)$",
            content: `<p>La scrittura $o\\big(o(f(x))\\big) = o(f(x))$ va letta così: se $h(x) = o(f(x))$, con $h$ definitivamente non nulla, e se $r(x) = o(h(x))$, allora $r(x) = o(f(x))$. Infatti, dove tutti i quozienti sono definiti,</p>
            <p>$$\\frac{r(x)}{f(x)} = \\frac{r(x)}{h(x)} \\cdot \\frac{h(x)}{f(x)} \\overset{x \\to x_0}{\\longrightarrow} 0 \\cdot 0 = 0$$</p>
            <p>Si tratta dunque di un'<strong>implicazione</strong> ("un resto di un resto è ancora un resto"), non di un'uguaglianza reversibile: non è vero che ogni $o(f)$ sia anche un $o(o(f))$.</p>
            <p>In parole: una quantità trascurabile rispetto a qualcosa di già trascurabile rispetto a $f$ è, a maggior ragione, trascurabile rispetto a $f$.</p>`
          },
          {
            subtitle: "Che cosa la regola di assorbimento NON dice",
            content: `<p>La regola $o(f) + o(g) = o(f)$, con $g = o(f)$, individua soltanto la <strong>classe</strong> a cui appartiene il resto complessivo; <strong>non</strong> afferma che sia il termine $o(f)$ a dominare la somma.</p>
            <p>Esempio: per $x \\to 0$, con $f(x) = x$ e $g(x) = x^2$ (e infatti $g = o(f)$), le funzioni $x^4$ e $x^3$ soddisfano $x^4 = o(f)$ e $x^3 = o(g)$; nella somma $x^4 + x^3$ domina proprio $x^3$, cioè il termine scelto come $o(g)$. La regola resta vera, perché $x^4 + x^3 = o(x)$, ma <strong>la dominanza va determinata caso per caso</strong> sulle funzioni concrete.</p>
            <p><em>Intuizione (solo per funzioni infinitesime).</em> Quando $f$ e $g$ sono entrambe infinitesime, si può pensare che, tra due quantità che tendono a zero, quella che tende a zero più lentamente è quella che "comanda"; e poiché qualunque $o(g)$ tende a zero ancora più in fretta di $g$, la stima complessiva è governata da $f$.</p>
            <p>Analogamente, nella proprietà 7, dentro l'argomento dell'o piccolo il termine dominante è $f(x)$, poiché $o(f(x))$ è trascurabile rispetto a $f(x)$: l'argomento $f(x) + o(f(x))$ e la funzione $f(x)$ hanno quindi lo stesso ordine.</p>`
          },
          {
            subtitle: "Esempio illustrativo — uso combinato delle regole",
            content: `<p>Semplifichiamo, per $x \\to 0$, l'espressione</p>
            <p>$$3\\,o(x^2) \\;+\\; x \\cdot o(x) \\;+\\; o(x^3)$$</p>
            <p>Procediamo termine per termine:</p>
            <ul>
              <li>$3\\,o(x^2) = o(x^2)$ per la proprietà 1 (la costante $3 \\neq 0$ viene assorbita);</li>
              <li>$x \\cdot o(x) = o(x \\cdot x) = o(x^2)$ per la proprietà 3;</li>
              <li>$o(x^3) = o(x^2)$ per la transitività del confronto (proprietà 6 e nota alla proprietà 5): infatti per $x \\to 0$ si ha $x^3 = o(x^2)$, quindi ogni funzione trascurabile rispetto a $x^3$ lo è anche rispetto a $x^2$.</li>
            </ul>
            <p>Sommando i tre contributi e applicando due volte la proprietà 2:</p>
            <p>$$o(x^2) + o(x^2) + o(x^2) = o(x^2)$$</p>
            <p>L'intera espressione è dunque un $o(x^2)$ per $x \\to 0$: è trascurabile rispetto a $x^2$, e questo è <strong>tutto ciò che possiamo (e che ci serve) affermare</strong> su di essa.</p>`
          }
        ],
        formulas: [
          { label: "Costante assorbita", latex: "c \\cdot o(f) = o(f) = o(c\\,f), \\qquad c \\neq 0" },
          { label: "Somma", latex: "o(f) + o(f) = o(f)" },
          { label: "Prodotto per funzione", latex: "g \\cdot o(f) = o(g f)" },
          { label: "Prodotto di resti", latex: "o(g) \\cdot o(f) = o(g f)" },
          { label: "Assorbimento", latex: "g = o(f) \\;\\Rightarrow\\; o(f) + o(g) = o(f)" },
          { label: "Composizione", latex: "o(o(f)) = o(f)" },
          { label: "O piccolo di una somma", latex: "o(f + o(f)) = o(f)" }
        ]
      },

      {
        id: "s23-sviluppi-notevoli",
        type: "section",
        title: "Sviluppi Asintotici Notevoli",
        icon: "📐",
        content: `<p>Grazie alla notazione di Landau possiamo scrivere gli sviluppi arrestati al primo ordine (o successivi) in modo compatto. Questi sono fondamentali per il calcolo dei limiti: approssimano funzioni complicate con <strong>polinomi semplici</strong> (spesso rette) vicino a un punto, <strong>controllando l'errore</strong> commesso.</p>
        <p>L'idea di Landau era che, nel calcolo di un limite, non tutti i termini di un'espressione sono ugualmente importanti: ci interessano solo i termini rilevanti, mentre tutto il resto può essere raggruppato in un "o piccolo", che rappresenta ciò che è trascurabile.</p>
        <p>Siano $\\alpha \\in \\mathbb{R}$ una costante fissata e $a \\gt 0$ una costante fissata. Tutte le funzioni che seguono sono considerate nel loro dominio reale, in un intorno di $0$ (per $(1+x)^\\alpha$ si richiede $1+x \\gt 0$, cioè $x \\gt -1$; ci si può dunque restringere all'intorno $|x| \\lt 1$). Allora, per $x \\to 0$, valgono gli sviluppi:</p>
        <p>$$\\begin{aligned}
        e^x &= 1 + x + o(x) \\\\
        \\ln(1+x) &= x + o(x) \\\\
        (1+x)^\\alpha &= 1 + \\alpha x + o(x) \\\\
        \\sin(x) &= x + o(x) \\\\
        \\cos(x) &= 1 - \\frac{x^2}{2} + o(x^2) \\\\
        \\tan(x) &= x + o(x) \\\\
        a^x &= 1 + x \\ln(a) + o(x) \\\\
        \\arcsin(x) &= x + o(x) \\\\
        \\arctan(x) &= x + o(x)
        \\end{aligned}$$</p>`,
        subsections: [
          {
            subtitle: "Attenzione alle ipotesi su $a$ e su $\\alpha$",
            content: `<p>Lo sviluppo $a^x = 1 + x\\ln(a) + o(x)$ richiede $a \\gt 0$: solo in tal caso $a^x = e^{x \\ln a}$ è definita per ogni $x$ reale, ed è proprio da questa identità, combinata con lo sviluppo dell'esponenziale, che lo sviluppo si ottiene.</p>
            <p>Analogamente, in $(1+x)^\\alpha$ l'esponente $\\alpha$ è una <strong>costante reale fissata, indipendente da $x$</strong>: non è lecito applicare lo sviluppo quando l'esponente varia con $x$.</p>`
          },
          {
            subtitle: "Perché il coseno si sviluppa al secondo ordine",
            content: `<p>Lo sviluppo del coseno è dato al secondo ordine perché il <strong>termine di primo ordine è nullo</strong>. Questo è cruciale in molti limiti. Ad esempio, se usassimo soltanto $\\cos(x) = 1 + o(x)$, non saremmo in grado di risolvere limiti come $\\lim_{x \\to 0} \\frac{1-\\cos(x)}{x^2}$: l'informazione contenuta nello sviluppo al primo ordine sarebbe troppo grossolana.</p>`
          },
          {
            subtitle: "Dimostrazione dello sviluppo dell'esponenziale",
            content: `<p>Dal limite notevole $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$, sappiamo che $\\frac{e^x - 1}{x} = 1 + o(1)$. Moltiplicando per $x$ otteniamo</p>
            <p>$$e^x - 1 = x(1 + o(1)) = x + x \\cdot o(1)$$</p>
            <p>Per la proprietà 3 degli "o piccoli", $x \\cdot o(1) = o(x \\cdot 1) = o(x)$. Quindi $e^x - 1 = x + o(x)$, da cui segue la tesi.</p>
            <p>Graficamente, lo sviluppo $e^x = 1+x+o(x)$ dice che vicino a $x=0$ la funzione $e^x$ si approssima bene con la sua <strong>retta tangente</strong> $y = 1+x$.</p>
            <figure class="figura" data-id="analisi1_lez23b_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez23b_g1-figure_1">
  <g id="analisi1_lez23b_g1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez23b_g1-axes_1">
   <g id="analisi1_lez23b_g1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez23b_g1-matplotlib.axis_1">
    <g id="analisi1_lez23b_g1-xtick_1">
     <g id="analisi1_lez23b_g1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_2">
      <defs>
       <path id="analisi1_lez23b_g1-m7006eef09c" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez23b_g1-m7006eef09c" x="44.8" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez23b_g1-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez23b_g1-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-xtick_2">
     <g id="analisi1_lez23b_g1-line2d_3">
      <path d="M 207.542857 364 
L 207.542857 24 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-m7006eef09c" x="207.542857" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(202.059185 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez23b_g1-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-xtick_3">
     <g id="analisi1_lez23b_g1-line2d_5">
      <path d="M 370.285714 364 
L 370.285714 24 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-m7006eef09c" x="370.285714" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(366.786339 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez23b_g1-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-xtick_4">
     <g id="analisi1_lez23b_g1-line2d_7">
      <path d="M 533.028571 364 
L 533.028571 24 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-m7006eef09c" x="533.028571" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(529.529196 322.190755) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez23b_g1-matplotlib.axis_2">
    <g id="analisi1_lez23b_g1-ytick_1">
     <g id="analisi1_lez23b_g1-line2d_9">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_10">
      <defs>
       <path id="analisi1_lez23b_g1-mf740acfa60" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_5">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(352.818371 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-ytick_2">
     <g id="analisi1_lez23b_g1-line2d_11">
      <path d="M 44.8 307.333333 
L 614.4 307.333333 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_6">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(356.786964 311.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-ytick_3">
     <g id="analisi1_lez23b_g1-line2d_13">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_7">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(356.786964 254.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-ytick_4">
     <g id="analisi1_lez23b_g1-line2d_15">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_8">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(356.786964 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-ytick_5">
     <g id="analisi1_lez23b_g1-line2d_17">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_9">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(356.786964 141.512044) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez23b_g1-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-ytick_6">
     <g id="analisi1_lez23b_g1-line2d_19">
      <path d="M 44.8 80.666667 
L 614.4 80.666667 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="80.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_10">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(356.786964 84.845378) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez23b_g1-DejaVuSans-17" d="M 2419 4116 
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
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-ytick_7">
     <g id="analisi1_lez23b_g1-line2d_21">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez23b_g1-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez23b_g1-mf740acfa60" x="370.285714" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez23b_g1-text_11">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(356.786964 28.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez23b_g1-DejaVuSans-18" d="M 691 4666 
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
       <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-18"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez23b_g1-line2d_23">
    <defs>
     <path id="analisi1_lez23b_g1-mf1693b3e93" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez23b_g1-mf1693b3e93" x="614.4" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez23b_g1-line2d_24">
    <defs>
     <path id="analisi1_lez23b_g1-m614a655ab7" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez23b_g1-m614a655ab7" x="370.285714" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez23b_g1-line2d_25">
    <path d="M 44.8 299.664334 
L 71.878565 298.275999 
L 96.581818 296.791326 
L 119.859883 295.170269 
L 141.237698 293.462847 
L 161.665388 291.607818 
L 180.66789 289.660148 
L 198.720267 287.586872 
L 215.822519 285.398808 
L 231.974646 283.110124 
L 247.176647 280.738355 
L 261.903586 278.219469 
L 276.155463 275.554912 
L 289.457214 272.848409 
L 302.283903 270.020477 
L 314.63553 267.078321 
L 326.987156 263.904173 
L 338.86372 260.616312 
L 350.265221 257.22602 
L 361.19166 253.746347 
L 371.643036 250.192074 
L 382.094412 246.402057 
L 392.070726 242.550043 
L 402.047039 238.45451 
L 411.54829 234.313524 
L 421.049541 229.923582 
L 430.07573 225.508921 
L 439.101918 220.842492 
L 447.653044 216.176423 
L 456.20417 211.258625 
L 464.755296 206.075519 
L 472.831359 200.923864 
L 480.907423 195.51011 
L 488.983486 189.820923 
L 496.584487 184.202246 
L 504.185488 178.314921 
L 511.786489 172.146103 
L 519.38749 165.682332 
L 526.98849 158.909505 
L 534.114429 152.266164 
L 541.240367 145.325471 
L 548.366305 138.074119 
L 555.492244 130.498201 
L 562.618182 122.583191 
L 569.74412 114.313911 
L 576.394996 106.262307 
L 583.045872 97.87484 
L 589.696747 89.137498 
L 596.347623 80.035687 
L 602.998499 70.554203 
L 609.649374 60.677209 
L 614.4 53.370953 
L 614.4 53.370953 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez23b_g1-line2d_26">
    <path d="M 44.8 364 
L 614.4 165.666667 
L 614.4 165.666667 
" clip-path="url(#analisi1_lez23b_g1-p186a1106be)" style="fill: none; stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: #2f9e8f; stroke-width: 2"/>
   </g>
   <g id="analisi1_lez23b_g1-patch_3">
    <path d="M 370.285714 364 
L 370.285714 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez23b_g1-patch_4">
    <path d="M 44.8 307.333333 
L 614.4 307.333333 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez23b_g1-text_12">
    <!-- (0,1) -->
    <g style="fill: currentColor" transform="translate(376.285714 244.666667) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez23b_g1-DejaVuSans-b" d="M 1984 4856 
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
      <path id="analisi1_lez23b_g1-DejaVuSans-f" d="M 750 794 
L 1409 794 
L 1409 256 
L 897 -744 
L 494 -744 
L 750 256 
L 750 794 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez23b_g1-DejaVuSans-c" d="M 513 4856 
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
     <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-b"/>
     <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-13" transform="translate(39.015625 0)"/>
     <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-f" transform="translate(102.640625 0)"/>
     <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-14" transform="translate(134.421875 0)"/>
     <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-c" transform="translate(198.046875 0)"/>
    </g>
   </g>
   <g id="analisi1_lez23b_g1-line2d_27">
    <defs>
     <path id="analisi1_lez23b_g1-m0105ab9a92" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez23b_g1-p186a1106be)">
     <use xlink:href="#analisi1_lez23b_g1-m0105ab9a92" x="370.285714" y="250.666667" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez23b_g1-legend_1">
    <g id="analisi1_lez23b_g1-line2d_28">
     <path d="M 54.7 38.85 
L 65.7 38.85 
L 76.7 38.85 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez23b_g1-text_13">
     <g style="fill: currentColor" transform="translate(85.5 42.7) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez23b_g1-DejaVuSans-Oblique-49" d="M 3059 4863 
L 2969 4384 
L 2419 4384 
Q 2106 4384 1964 4261 
Q 1822 4138 1753 3809 
L 1691 3500 
L 2638 3500 
L 2553 3053 
L 1606 3053 
L 1013 0 
L 434 0 
L 1031 3053 
L 481 3053 
L 563 3500 
L 1113 3500 
L 1159 3744 
Q 1278 4363 1576 4613 
Q 1875 4863 2516 4863 
L 3059 4863 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez23b_g1-DejaVuSans-Oblique-5b" d="M 3841 3500 
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
       <path id="analisi1_lez23b_g1-DejaVuSans-20" d="M 678 2906 
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
       <path id="analisi1_lez23b_g1-DejaVuSans-Oblique-48" d="M 3078 2063 
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
      </defs>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-Oblique-49" transform="translate(0 0.41875)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-b" transform="translate(35.205078 0.41875)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-Oblique-5b" transform="translate(74.21875 0.41875)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-c" transform="translate(133.398438 0.41875)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-20" transform="translate(191.894531 0.41875)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-Oblique-48" transform="translate(295.166016 0.41875)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-Oblique-5b" transform="translate(361.339349 41.71875) scale(0.7)"/>
     </g>
    </g>
    <g id="analisi1_lez23b_g1-line2d_29">
     <path d="M 54.7 55.350859 
L 65.7 55.350859 
L 76.7 55.350859 
" style="fill: none; stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: #2f9e8f; stroke-width: 2"/>
    </g>
    <g id="analisi1_lez23b_g1-text_14">
     <g style="fill: currentColor" transform="translate(85.5 59.200859) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez23b_g1-DejaVuSans-Oblique-5c" d="M 1588 -325 
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
       <path id="analisi1_lez23b_g1-DejaVuSans-e" d="M 2944 4013 
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
      </defs>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-Oblique-5c" transform="translate(0 0.09375)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-20" transform="translate(78.662109 0.09375)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-14" transform="translate(181.933594 0.09375)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-e" transform="translate(265.039062 0.09375)"/>
      <use xlink:href="#analisi1_lez23b_g1-DejaVuSans-Oblique-5b" transform="translate(368.310547 0.09375)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez23b_g1-p186a1106be">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
          },
          {
            subtitle: "Dimostrazione dello sviluppo del coseno",
            content: `<p>Dal limite notevole $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2} = \\frac{1}{2}$, abbiamo $\\frac{1 - \\cos(x)}{x^2} = \\frac{1}{2} + o(1)$. Moltiplicando per $x^2$:</p>
            <p>$$1 - \\cos(x) = \\frac{1}{2}x^2 + x^2 \\cdot o(1) = \\frac{1}{2}x^2 + o(x^2)$$</p>
            <p>Riorganizzando i termini si ottiene la tesi.</p>`
          },
          {
            subtitle: "Dimostrazione dello sviluppo di $a^x$",
            content: `<p>Distinguiamo due casi, perché l'assorbimento della costante richiede che essa sia non nulla.</p>
            <p><em>Caso $a = 1$.</em> Si ha $1^x = 1$ per ogni $x$ e $\\ln(1) = 0$, quindi la formula da dimostrare diventa $1 = 1 + 0 + o(x)$: essa è vera con resto identicamente nullo, poiché la funzione nulla soddisfa banalmente $\\frac{0}{x} \\to 0$.</p>
            <p><em>Caso $a \\neq 1$ (con $a \\gt 0$), per cui $\\ln(a) \\neq 0$.</em> Usiamo la relazione $a^x = e^{\\ln(a^x)} = e^{x \\ln(a)}$. Poniamo $y = x \\ln(a)$: per $x \\to 0$, anche $y \\to 0$. Usando lo sviluppo $e^y = 1 + y + o(y)$:</p>
            <p>$$e^{x \\ln(a)} = 1 + (x \\ln(a)) + o(x \\ln(a))$$</p>
            <p>Poiché $\\ln(a)$ è una costante <strong>non nulla</strong>, per la proprietà 1 degli "o piccoli" abbiamo $o(x \\ln(a)) = o(x)$. Sostituendo, otteniamo la tesi.</p>`
          }
        ],
        extra_content: `<p>Tutti questi sviluppi sono centrati in $x_0=0$. Essi forniscono un'approssimazione polinomiale della funzione in un intorno dell'origine, con un termine di errore che diventa trascurabile più velocemente del termine polinomiale stesso.</p>
        <p><strong>Convenzione sulle notazioni:</strong> da qui in avanti $\\log$ indica il logaritmo naturale, cioè $\\log = \\ln$.</p>`
      },

      {
        id: "s23-primo-ordine-insufficiente",
        type: "alert_box",
        title: "Quando gli sviluppi al primo ordine NON bastano",
        icon: "🚨",
        content: `<p>Consideriamo</p>
        <p>$$\\lim_{x \\to 0} \\frac{x - \\sin(x)}{\\cos(x) - 1}$$</p>
        <p>Se usiamo gli sviluppi al primo ordine, $\\sin(x) = x+o(x)$ e $\\cos(x)=1+o(x)$, otteniamo:</p>
        <p>$$\\lim_{x \\to 0} \\frac{x - (x+o(x))}{1+o(x) - 1} = \\lim_{x \\to 0} \\frac{o(x)}{o(x)}$$</p>
        <p>Si noti che i due $o(x)$ che compaiono rappresentano <strong>funzioni diverse</strong> e dunque non si semplificano: la scrittura $\\frac{o(x)}{o(x)}$ non contiene alcuna informazione sul limite. In altre parole, in questo quoziente i <strong>termini principali si cancellano</strong> e tutto ciò che resta è nascosto dentro i resti.</p>
        <p>Per calcolare il limite servono sviluppi più precisi, di ordine superiore, capaci di catturare il <strong>primo termine non nullo</strong> di numeratore e denominatore.</p>`
      },

      {
        id: "s23-integrazione-ordine-superiore",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p>Anticipiamo qui, a titolo di completamento, gli sviluppi di ordine superiore che permettono di concludere il calcolo precedente; saranno ripresi sistematicamente quando studieremo la formula di Taylor. Per $x \\to 0$ valgono</p>
        <p>$$\\sin(x) = x - \\frac{x^3}{6} + o(x^3), \\qquad \\cos(x) = 1 - \\frac{x^2}{2} + o(x^2)$$</p>
        <p>Di conseguenza</p>
        <p>$$x - \\sin(x) = \\frac{x^3}{6} + o(x^3), \\qquad \\cos(x) - 1 = -\\frac{x^2}{2} + o(x^2)$$</p>
        <p>e quindi</p>
        <p>$$\\lim_{x \\to 0} \\frac{x - \\sin(x)}{\\cos(x) - 1}
        = \\lim_{x \\to 0} \\frac{\\frac{x^3}{6} + o(x^3)}{-\\frac{x^2}{2} + o(x^2)}
        = \\lim_{x \\to 0} \\frac{x^3\\left(\\frac{1}{6} + o(1)\\right)}{x^2\\left(-\\frac{1}{2} + o(1)\\right)}
        = \\lim_{x \\to 0} x \\cdot \\frac{\\frac{1}{6} + o(1)}{-\\frac{1}{2} + o(1)} = 0$$</p>
        <p>Il numeratore è un infinitesimo di ordine $3$, il denominatore di ordine $2$: il quoziente si comporta come $-\\frac{x}{3}$ e tende a zero.</p>`
      },

      {
        id: "s23-esercizio-svolto-limite",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Calcolo di un limite con sviluppi asintotici",
        icon: "✎",
        source: "docente",
        content: `<p>Calcolare il seguente limite:</p>
        <p>$$\\lim_{n \\to +\\infty} \\frac{\\sin\\left(\\frac{4}{n}\\right)}{\\tan\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right)}$$</p>`,
        steps: [
          `<strong>Analisi degli argomenti.</strong> Per $n \\to +\\infty$, l'argomento del seno, $\\frac{4}{n}$, tende a $0$. Anche l'argomento della tangente, $y = \\frac{1}{n^2} - \\frac{1}{n}$, tende a $0$. Possiamo quindi usare gli sviluppi asintotici per $x \\to 0$, componendoli con queste successioni infinitesime.`,
          `<strong>Sviluppo del numeratore.</strong> Usiamo $\\sin(x) = x + o(x)$ con $x = \\frac{4}{n}$:
          <p>$$\\sin\\left(\\frac{4}{n}\\right) = \\frac{4}{n} + o\\left(\\frac{4}{n}\\right) = \\frac{4}{n} + o\\left(\\frac{1}{n}\\right)$$</p>
          dove nell'ultimo passaggio abbiamo usato la regola $o(c \\cdot f) = o(f)$ con $c = 4 \\neq 0$.`,
          `<strong>Sviluppo del denominatore.</strong> Usiamo $\\tan(y) = y + o(y)$ con $y = \\frac{1}{n^2} - \\frac{1}{n}$, che è definitivamente non nulla, essendo $y = -\\frac{1}{n}\\left(1 - \\frac{1}{n}\\right) \\neq 0$ per $n \\geq 2$:
          <p>$$\\tan\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) = \\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) + o\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right)$$</p>
          Per $n \\to +\\infty$ il termine dominante in $y$ è $-\\frac{1}{n}$; poiché $\\frac{y}{-1/n} \\to 1$, si ha $o\\!\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) = o\\!\\left(-\\frac{1}{n}\\right) = o\\!\\left(\\frac{1}{n}\\right)$.`,
          `<strong>Assorbimento del termine più piccolo.</strong> Il denominatore diventa
          <p>$$-\\frac{1}{n} + \\frac{1}{n^2} + o\\left(\\frac{1}{n}\\right)$$</p>
          Poiché $\\frac{1}{n^2} = o\\!\\left(\\frac{1}{n}\\right)$, possiamo "assorbirlo" nell'o piccolo (regola di assorbimento del termine più piccolo):
          <p>$$-\\frac{1}{n} + o\\left(\\frac{1}{n}\\right)$$</p>`,
          `<strong>Calcolo del limite.</strong> Sostituiamo gli sviluppi nel limite originale:
          <p>$$\\lim_{n \\to +\\infty} \\frac{\\frac{4}{n} + o\\left(\\frac{1}{n}\\right)}{-\\frac{1}{n} + o\\left(\\frac{1}{n}\\right)}$$</p>
          Mettiamo in evidenza $\\frac{1}{n}$ al numeratore e al denominatore, ricordando che $\\frac{o(1/n)}{1/n} = o(1)$:
          <p>$$\\lim_{n \\to +\\infty} \\frac{\\frac{1}{n}\\left(4 + \\frac{o(1/n)}{1/n}\\right)}{\\frac{1}{n}\\left(-1 + \\frac{o(1/n)}{1/n}\\right)}
          = \\lim_{n \\to +\\infty} \\frac{4 + o(1)}{-1 + o(1)} = \\frac{4}{-1} = -4$$</p>`,
          `<strong>Conclusione.</strong> Il risultato è $-4$. Si osservi che la strategia è sempre la stessa vista all'inizio della lezione: isolare il termine dominante sopra e sotto (qui $\\frac{1}{n}$) e ricondursi a un quoziente di quantità con limite finito e non nullo.`
        ]
      },

      {
        id: "s23-utilita-landau",
        type: "section",
        title: "Ripasso e approfondimento: a che serve l'\"o piccolo\"",
        icon: "💡",
        content: `<p><em>Questa parte della lezione riprende la definizione e le regole già viste, con esempi nuovi e un'attenzione particolare al linguaggio: va letta come un <strong>consolidamento</strong>, non come materiale aggiuntivo.</em></p>
        <p>Per capire l'utilità del simbolo di "o piccolo", consideriamo un semplice confronto fra potenze. Confrontiamo $f(x) = x^3$ e $g(x) = x^4$ per $x \\to +\\infty$: quale delle due è un "o piccolo" dell'altra?</p>
        <p>$$\\lim_{x \\to +\\infty} \\frac{x^3}{x^4} = \\lim_{x \\to +\\infty} \\frac{1}{x} = 0$$</p>
        <p>Il rapporto $\\frac{f(x)}{g(x)}$ tende a zero: questo significa che $f$ cresce più lentamente di $g$ ed è quindi <strong>trascurabile</strong> rispetto a $g$. Scriviamo:</p>
        <p>$$x^3 = o(x^4) \\quad \\text{per } x \\to +\\infty$$</p>`,
        subsections: [
          {
            subtitle: "Attenzione al linguaggio: infiniti vs infinitesimi",
            content: `<p>Per $x \\to +\\infty$ entrambe le funzioni $x^3$ e $x^4$ <strong>divergono</strong>: sono quindi entrambe infiniti, e nessuna delle due è un infinitesimo. Ciò che è infinitesimo è il loro <strong>rapporto</strong> $\\frac{x^3}{x^4} = \\frac{1}{x}$. Il modo corretto di esprimersi è dunque:</p>
            <ul>
              <li>$x^3$ è un infinito di ordine <strong>inferiore</strong> rispetto a $x^4$;</li>
              <li>equivalentemente, $x^3$ è trascurabile rispetto a $x^4$, cioè $x^3 = o(x^4)$.</li>
            </ul>
            <p>La locuzione "infinitesimo di ordine superiore" si usa invece quando entrambe le funzioni tendono a $0$: ad esempio, per $x \\to 0$ si ha $x^4 = o(x^3)$ e in quel caso $x^4$ è un infinitesimo di ordine superiore rispetto a $x^3$. Si noti che <strong>l'ordine del confronto si rovescia</strong> a seconda che $x \\to 0$ oppure $x \\to +\\infty$: è sempre il limite del rapporto a decidere.</p>`
          },
          {
            subtitle: "Criterio del rapporto (riformulazione)",
            content: `<p>Siano $f$ e $h$ due funzioni definite in un intorno bucato di $x_0$ (dove $x_0$ può essere anche $\\pm\\infty$), con $f(x) \\neq 0$ in tale intorno bucato. Diciamo che</p>
            <p>$$h(x) = o(f(x)) \\quad \\text{per } x \\to x_0 \\qquad \\Longleftrightarrow \\qquad \\lim_{x \\to x_0} \\frac{h(x)}{f(x)} = 0$$</p>
            <p>Diciamo allora che $h$ è <strong>trascurabile</strong> rispetto a $f$ per $x \\to x_0$. Tutte le dimostrazioni delle regole algebriche si riducono a verificare un limite di rapporto.</p>`
          }
        ],
        extra_content: `<blockquote><p>A cosa serve questa notazione? In fondo, è un modo più rigoroso per esprimere un concetto che già utilizzavamo: quello di <strong>termine dominante</strong>. Quando studiavamo il limite di un polinomio per $x \\to +\\infty$, come ad esempio $\\lim_{x \\to +\\infty} (x^4 + x^3 + x^2)$, dicevamo di mettere in evidenza il termine di grado massimo, perché è quello che "comanda". Ora possiamo formalizzare questa idea. Per $x \\to +\\infty$, abbiamo che $x^3 = o(x^4)$ e $x^2 = o(x^4)$, quindi</p>
        <p>$$x^4 + x^3 + x^2 = x^4 + o(x^4) + o(x^4) = x^4 + o(x^4)$$</p>
        <p>(usando la regola di addizione $o(f)+o(f)=o(f)$ già dimostrata). Questa scrittura ci dice che il polinomio è composto dal suo termine dominante, $x^4$, più "qualcosa" che è trascurabile rispetto a $x^4$ al limite. Stiamo solo scrivendo in modo più formale quello che prima facevamo in modo più intuitivo.</p>
        <p>Vedete come siamo partiti un mese fa e certi concetti sembravano difficili, come un punto di accumulazione o la definizione di limite, e adesso li usiamo in modo molto più naturale. Fa parte del processo di apprendimento: ci si abitua a maneggiare questi strumenti e diventano parte del nostro linguaggio.</p><p><em>— Note del Prof.</em></p></blockquote>`
      },

      {
        id: "s23-prodotti-asintotici",
        type: "section",
        title: "Comportamento Asintotico di Prodotti di Funzioni",
        icon: "✖️",
        content: `<p>Vediamo come determinare il comportamento asintotico di una funzione data dal prodotto di altre funzioni di cui conosciamo lo sviluppo.</p>`,
        subsections: [
          {
            subtitle: "Esempio — $f(x) = \\sin(x)\\,(e^{x^2} - 1)$ per $x \\to 0$",
            content: `<p>Sappiamo che per $x \\to 0$ gli sviluppi delle singole funzioni sono:</p>
            <ul>
              <li>$\\sin(x) = x + o(x)$;</li>
              <li>per l'esponenziale, ricordiamo $e^y - 1 = y + o(y)$ per $y \\to 0$; ponendo $y = x^2$, che tende a $0$ quando $x \\to 0$, otteniamo $e^{x^2} - 1 = x^2 + o(x^2)$.</li>
            </ul>
            <p>Ora moltiplichiamo i due sviluppi, applicando le regole dell'algebra degli "o piccoli":</p>
            <p>$$\\begin{aligned}
            f(x) &= (\\sin(x)) \\cdot (e^{x^2} - 1) \\\\
            &= (x + o(x)) \\cdot (x^2 + o(x^2)) \\\\
            &= x \\cdot x^2 + x \\cdot o(x^2) + o(x) \\cdot x^2 + o(x) \\cdot o(x^2)
            \\end{aligned}$$</p>
            <p>Analizziamo i singoli termini:</p>
            <ul>
              <li>$x \\cdot x^2 = x^3$;</li>
              <li>$x \\cdot o(x^2) = o(x^3)$ (dalla proprietà $g \\cdot o(f) = o(g f)$);</li>
              <li>$o(x) \\cdot x^2 = o(x^3)$ (dalla stessa proprietà);</li>
              <li>$o(x) \\cdot o(x^2) = o(x^3)$ (dalla proprietà $o(f) \\cdot o(g) = o(f g)$).</li>
            </ul>
            <p>Sommando tutti i termini, e ricordando che la somma di "o piccoli" dello stesso ordine è ancora un "o piccolo" di quell'ordine ($o(x^3) + o(x^3) = o(x^3)$), otteniamo:</p>
            <p>$$f(x) = x^3 + o(x^3) + o(x^3) + o(x^3) = x^3 + o(x^3)$$</p>
            <p>Quindi, per $x \\to 0$, la funzione $f(x)$ <strong>si comporta come il polinomio $x^3$</strong>. Abbiamo trasformato una funzione complessa in un'espressione polinomiale molto più semplice da studiare in un intorno di zero.</p>`
          },
          {
            subtitle: "Attenzione: gli sviluppi valgono quando l'ARGOMENTO tende a zero",
            content: `<p>È fondamentale ricordare che questi sviluppi sono validi solo quando <strong>l'argomento delle funzioni tende a zero</strong>. In questo caso studiamo il limite per $x \\to 0$, quindi l'argomento di $\\sin(x)$ è $x \\to 0$ e l'argomento di $e^{x^2}$ è $x^2 \\to 0$.</p>
            <p>Se il limite fosse stato per $x \\to \\infty$, gli argomenti $x$ e $x^2$ non sarebbero stati infinitesimi e questi sviluppi non sarebbero stati applicabili a questa funzione. Resta invece lecito usarli anche in un limite per $x \\to \\infty$ ogni volta che l'argomento tende a $0$: per esempio $\\sin(1/x) = 1/x + o(1/x)$ per $x \\to \\infty$, poiché $1/x \\to 0$.</p>`
          }
        ]
      },

      {
        id: "s23-limiti-indeterminati",
        type: "section",
        title: "Calcolo di Limiti con Forme Indeterminate",
        icon: "🧩",
        content: `<p>Gli sviluppi asintotici sono uno strumento potentissimo per risolvere forme indeterminate del tipo $\\frac{0}{0}$.</p>`,
        subsections: [
          {
            subtitle: "Esempio 1 — $\\lim_{x \\to 0} \\frac{x \\sin(x)}{\\cos(x) - 1}$",
            content: `<p>Sostituendo gli sviluppi notevoli per $x \\to 0$:</p>
            <ul>
              <li><strong>Numeratore:</strong> $\\sin(x) = x + o(x)$, quindi $x \\sin(x) = x(x + o(x)) = x^2 + x \\cdot o(x) = x^2 + o(x^2)$.</li>
              <li><strong>Denominatore:</strong> $\\cos(x) = 1 - \\frac{x^2}{2} + o(x^2)$, quindi $\\cos(x) - 1 = -\\frac{x^2}{2} + o(x^2)$.</li>
            </ul>
            <p>Si noti che il seno è stato usato al primo ordine e il coseno al secondo: ciò che conta è arrivare, in ogni blocco dell'espressione, al <strong>primo termine non nullo</strong>.</p>
            <p>Sostituiamo questi sviluppi nel limite:</p>
            <p>$$\\lim_{x \\to 0} \\frac{x^2 + o(x^2)}{-\\frac{x^2}{2} + o(x^2)}$$</p>
            <p>Ora siamo di fronte a un rapporto di polinomi "perturbati" da termini di ordine superiore. Il termine che comanda sia al numeratore che al denominatore è $x^2$. Mettiamolo in evidenza:</p>
            <p>$$\\lim_{x \\to 0} \\frac{x^2 \\left(1 + \\frac{o(x^2)}{x^2}\\right)}{x^2 \\left(-\\frac{1}{2} + \\frac{o(x^2)}{x^2}\\right)}$$</p>
            <p>Per definizione di "o piccolo", $\\lim_{x \\to 0} \\frac{o(x^2)}{x^2} = 0$. Semplificando il termine $x^2$ (lecito perché siamo in un intorno di $0$ escluso lo $0$), il limite diventa:</p>
            <p>$$\\lim_{x \\to 0} \\frac{1 + 0}{-\\frac{1}{2} + 0} = \\frac{1}{-\\frac{1}{2}} = -2$$</p>`
          },
          {
            subtitle: "Esempio 2 — versione \"moltiplicata per $n$\" del limite con seno e tangente",
            content: `<p>Calcoliamo</p>
            <p>$$\\lim_{n \\to \\infty} \\frac{n \\sin\\left(\\frac{4}{n}\\right)}{n \\tan\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right)}$$</p>
            <blockquote><p>Il problema che risolviamo è quello scritto qui sopra. Durante la lezione a voce e nel PDF di riferimento potrebbe esserci un'imprecisione nella trascrizione del denominatore. La versione qui riportata è quella che porta al risultato finito calcolato.</p><p><em>— Nota del Prof.</em></p></blockquote>
            <p><strong>Numeratore.</strong> L'argomento del seno, $\\frac{4}{n}$, tende a $0$. Usiamo $\\sin(x) = x + o(x)$ con $x = \\frac{4}{n}$:</p>
            <p>$$\\sin\\left(\\frac{4}{n}\\right) = \\frac{4}{n} + o\\left(\\frac{4}{n}\\right) = \\frac{4}{n} + o\\left(\\frac{1}{n}\\right)$$</p>
            <p>Moltiplicando per $n$:</p>
            <p>$$n \\sin\\left(\\frac{4}{n}\\right) = n \\left(\\frac{4}{n} + o\\left(\\frac{1}{n}\\right)\\right) = 4 + n \\cdot o\\left(\\frac{1}{n}\\right) = 4 + o(1)$$</p>
            <p>Il numeratore tende a $4$.</p>
            <p><strong>Denominatore.</strong> L'argomento della tangente è $\\frac{1}{n^2} - \\frac{1}{n}$, che per $n \\to \\infty$ tende a $0$. Il termine dominante è $-\\frac{1}{n}$, poiché va a zero più lentamente di $\\frac{1}{n^2}$. Usiamo $\\tan(x) = x + o(x)$:</p>
            <p>$$\\tan\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) = \\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) + o\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) = -\\frac{1}{n} + \\frac{1}{n^2} + o\\left(\\frac{1}{n}\\right)$$</p>
            <p>poiché il termine dominante nell'argomento è $-\\frac{1}{n}$ e dunque l'"o piccolo" si comporta come $o\\!\\left(\\frac{1}{n}\\right)$. Moltiplicando per $n$:</p>
            <p>$$n \\tan\\left(\\frac{1}{n^2} - \\frac{1}{n}\\right) = n \\left(-\\frac{1}{n} + o\\left(\\frac{1}{n}\\right)\\right) = -1 + o(1)$$</p>
            <p>Il denominatore tende a $-1$. <strong>Conclusione:</strong></p>
            <p>$$\\lim_{n \\to \\infty} \\frac{4 + o(1)}{-1 + o(1)} = \\frac{4}{-1} = -4$$</p>`
          },
          {
            subtitle: "Esempio 3 — un caso con radici $n$-esime e logaritmi",
            content: `<p>Analizziamo il comportamento asintotico per $n \\to \\infty$ dell'espressione</p>
            <p>$$\\frac{\\left(\\sqrt[n]{2}\\,\\ln n - \\ln n\\right) - \\left(\\sqrt[n]{2\\ln n} - 1\\right)}{\\frac{\\ln n}{n}}$$</p>
            <p>Questo esercizio è più complesso e richiede di analizzare i termini con attenzione. Scomponiamolo in parti.</p>
            <p><strong>Primo termine del numeratore: $(\\sqrt[n]{2} - 1)\\ln n$.</strong> Riscriviamo la radice $n$-esima usando l'esponenziale (ricordando che qui il logaritmo è quello naturale):</p>
            <p>$$\\sqrt[n]{2} = 2^{1/n} = e^{\\frac{1}{n}\\ln 2}$$</p>
            <p>Poiché per $n \\to \\infty$ l'esponente $\\frac{\\ln 2}{n} \\to 0$, possiamo usare $e^x = 1 + x + o(x)$ con $x = \\frac{\\ln 2}{n}$:</p>
            <p>$$\\sqrt[n]{2} = 1 + \\frac{\\ln 2}{n} + o\\left(\\frac{1}{n}\\right)$$</p>
            <p>Sostituendo:</p>
            <p>$$\\begin{aligned}
            (\\sqrt[n]{2} - 1)\\ln n &= \\left(1 + \\frac{\\ln 2}{n} + o\\left(\\frac{1}{n}\\right) - 1\\right) \\ln n \\\\
            &= \\left(\\frac{\\ln 2}{n} + o\\left(\\frac{1}{n}\\right)\\right) \\ln n \\\\
            &= \\frac{\\ln 2 \\,\\ln n}{n} + o\\left(\\frac{\\ln n}{n}\\right)
            \\end{aligned}$$</p>
            <p><strong>Secondo termine del numeratore: $\\sqrt[n]{2\\ln n} - 1$.</strong> Anche qui usiamo la forma esponenziale:</p>
            <p>$$\\sqrt[n]{2\\ln n} - 1 = (2\\ln n)^{1/n} - 1 = e^{\\frac{1}{n}\\ln(2\\ln n)} - 1$$</p>
            <p>L'esponente è $x = \\frac{\\ln(2\\ln n)}{n} = \\frac{\\ln 2 + \\ln(\\ln n)}{n}$. Per $n \\to \\infty$ questo esponente tende a $0$ (poiché il logaritmo cresce più lentamente di $n$). Usiamo di nuovo $e^x - 1 = x + o(x)$:</p>
            <p>$$\\begin{aligned}
            \\sqrt[n]{2\\ln n} - 1 &= \\frac{\\ln 2 + \\ln(\\ln n)}{n} + o\\left(\\frac{\\ln 2 + \\ln(\\ln n)}{n}\\right) \\\\
            &= \\frac{\\ln 2}{n} + \\frac{\\ln(\\ln n)}{n} + o\\left(\\frac{\\ln(\\ln n)}{n}\\right)
            \\end{aligned}$$</p>
            <p>perché $\\ln(\\ln n)$ è il termine dominante nell'argomento dell'"o piccolo".</p>
            <p><strong>Calcolo del limite.</strong> Il numeratore completo è</p>
            <p>$$\\begin{aligned}
            \\text{Num} &= \\left[\\frac{\\ln 2 \\,\\ln n}{n} + o\\left(\\frac{\\ln n}{n}\\right)\\right] - \\left[\\frac{\\ln 2}{n} + \\frac{\\ln(\\ln n)}{n} + o\\left(\\frac{\\ln(\\ln n)}{n}\\right)\\right] \\\\
            &= \\frac{\\ln 2 \\,\\ln n}{n} - \\frac{\\ln 2}{n} - \\frac{\\ln(\\ln n)}{n} + o\\left(\\frac{\\ln n}{n}\\right)
            \\end{aligned}$$</p>
            <p>L'ultimo "o piccolo" assorbe l'altro, poiché $\\frac{\\ln n}{n}$ va a zero più lentamente di $\\frac{\\ln(\\ln n)}{n}$. Dividiamo ora per il denominatore $\\frac{\\ln n}{n}$, termine a termine:</p>
            <p>$$\\lim_{n \\to \\infty} \\left[ \\ln 2 - \\frac{\\ln 2}{\\ln n} - \\frac{\\ln(\\ln n)}{\\ln n} + \\frac{o\\left(\\frac{\\ln n}{n}\\right)}{\\frac{\\ln n}{n}} \\right]$$</p>
            <p>Analizziamo i limiti dei singoli addendi:</p>
            <ul>
              <li>$\\ln 2$ è una costante;</li>
              <li>$\\lim_{n \\to \\infty} \\frac{\\ln 2}{\\ln n} = 0$;</li>
              <li>$\\lim_{n \\to \\infty} \\frac{\\ln(\\ln n)}{\\ln n} = 0$ (per confronto tra infiniti);</li>
              <li>$\\lim_{n \\to \\infty} \\frac{o\\left(\\frac{\\ln n}{n}\\right)}{\\frac{\\ln n}{n}} = 0$ (per definizione di "o piccolo").</li>
            </ul>
            <p>Il risultato del limite è quindi $\\ln 2$.</p>`
          }
        ],
        extra_content: `<blockquote><p>Questi esercizi possono sembrare complicati, ma la procedura è molto meccanica. L'importante è padroneggiare gli sviluppi notevoli e le proprietà degli "o piccoli". Vi lascerò degli esercizi da fare, incluso quello dell'esonero dell'anno scorso. Siete già in grado di affrontare il primo punto, quello sui limiti. Esercitatevi, perché la tecnica è sempre la stessa: si riconosce la forma, si applica lo sviluppo corretto e si manipola l'algebra degli "o piccoli" per arrivare al risultato.</p><p><em>— Nota del Prof.</em></p></blockquote>`
      },

      {
        id: "s23-integrazione-applicazione",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p><strong>Applicazione guidata: un limite in forma indeterminata $\\frac{0}{0}$.</strong></p>
        <p>Calcoliamo</p>
        <p>$$\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin(x)}$$</p>
        <p>Per $x \\to 0$ numeratore e denominatore tendono entrambi a $0$: siamo nella forma indeterminata $\\frac{0}{0}$.</p>
        <p><em>Passo 1: sostituire gli sviluppi.</em> Per $x \\to 0$:</p>
        <p>$$e^x = 1 + x + o(x) \\quad \\Longrightarrow \\quad e^x - 1 = x + o(x), \\qquad\\qquad \\sin(x) = x + o(x)$$</p>
        <p>(Si ricordi che i due simboli $o(x)$ denotano funzioni in generale diverse: non possiamo semplificarli fra loro.) Il rapporto diventa</p>
        <p>$$\\frac{e^x - 1}{\\sin(x)} = \\frac{x + o(x)}{x + o(x)}$$</p>
        <p><em>Passo 2: dividere numeratore e denominatore per $x$.</em> Per $x \\neq 0$ in un intorno bucato di $0$:</p>
        <p>$$\\frac{x + o(x)}{x + o(x)} = \\frac{\\dfrac{x}{x} + \\dfrac{o(x)}{x}}{\\dfrac{x}{x} + \\dfrac{o(x)}{x}} = \\frac{1 + \\dfrac{o(x)}{x}}{1 + \\dfrac{o(x)}{x}}$$</p>
        <p><em>Passo 3: perché $\\frac{o(x)}{x} \\to 0$.</em> Questo è esattamente il contenuto della definizione: se $h(x) = o(x)$ per $x \\to 0$, allora per il criterio del rapporto $\\lim_{x \\to 0} \\frac{h(x)}{x} = 0$. Non si tratta di una semplificazione algebrica, ma della lettura diretta della definizione di "o piccolo".</p>
        <p><em>Passo 4: conclusione.</em> Passando al limite, numeratore e denominatore tendono entrambi a $1 + 0 = 1$, e il denominatore è definitivamente diverso da zero; quindi</p>
        <p>$$\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin(x)} = \\frac{1}{1} = 1$$</p>
        <p><strong>Morale del metodo.</strong> La strategia è sempre la stessa: (i) sostituire a ogni funzione il suo sviluppo asintotico, (ii) raccogliere il termine dominante di numeratore e denominatore e dividere per esso, (iii) usare $\\frac{o(f)}{f} \\to 0$ per far sparire i resti, (iv) calcolare il limite rimasto.</p>
        <p>L'unica attenzione da avere è di sviluppare <strong>ciascuna funzione fino all'ordine necessario a individuare i primi termini non nulli dell'espressione complessiva</strong>, tenendo conto di prodotti e cancellazioni: gli ordini delle singole funzioni non devono necessariamente coincidere. Ad esempio, in un limite in cui compare $1 - \\cos(x)$ serve lo sviluppo al secondo ordine $\\cos(x) = 1 - \\frac{1}{2}x^2 + o(x^2)$, perché fermarsi all'ordine uno darebbe soltanto l'informazione, inutilizzabile, $1 - \\cos(x) = o(x)$; mentre nel limite $\\frac{x\\sin(x)}{\\cos(x)-1}$ per il seno basta il primo ordine, perché il suo termine principale non si cancella.</p>`
      },

      {
        id: "s23-avviso-esonero",
        type: "note_box",
        title: "Avviso organizzativo",
        icon: "📅",
        content: `<p>Le iscrizioni per l'esonero di quest'anno sono aperte su Delphi. Si prega gli studenti del primo anno di iscriversi per tempo, entro la data di scadenza (indicativamente il <strong>23 Novembre</strong>), per facilitare l'organizzazione delle aule.</p>`
      },

      {
        id: "s23-esercizi-proposti-box",
        type: "integrazione_box",
        title: "Esercizi proposti — non svolti dal docente",
        icon: "📝",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s23-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        icon: "🎓",
        content: `<p>Dare la definizione di $f(x)=o(g(x))$ per $x \\to x_0$, precisando l'ipotesi su $g$ e il motivo per cui serve. Spiegare poi perché la scrittura non è un'uguaglianza reversibile e verificare, con la definizione, che $x^4 = o(x^3)$ per $x \\to 0$.</p>`,
        solution: `<p>Siano $f, g: A \\to \\mathbb{R}$ e sia $x_0$ un punto di accumulazione di $A$. Si suppone che $g(x) \\neq 0$ definitivamente per $x \\to x_0$, cioè in un intorno di $x_0$ intersecato con $A$, eventualmente privato di $x_0$: questa ipotesi serve a dare senso al quoziente $\\frac{f(x)}{g(x)}$ vicino a $x_0$. Si scrive allora $f(x)=o(g(x))$ per $x \\to x_0$ se</p>
        <p>$$\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=0$$</p>
        <p>Il simbolo $o(g(x))$ non indica una funzione determinata, ma una qualunque funzione il cui rapporto con $g$ tende a $0$: per questo l'uguaglianza va letta solo da sinistra verso destra e non è reversibile, e due occorrenze dello stesso simbolo nella stessa formula possono rappresentare funzioni diverse, che quindi non si cancellano fra loro. Ad esempio da $x^4=o(x^3)$ e $x^5=o(x^3)$ non si può dedurre $x^4=x^5$.</p>
        <p>Infine, per $x \\to 0$ si ha $x^3 \\neq 0$ per ogni $x \\neq 0$ e</p>
        <p>$$\\lim_{x\\to 0}\\frac{x^4}{x^3}=\\lim_{x\\to 0}x=0$$</p>
        <p>dunque $x^4=o(x^3)$ per $x \\to 0$: $x^4$ è infinitesimo di ordine superiore rispetto a $x^3$, cioè va a zero più velocemente.</p>`
      },

      {
        id: "s23-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        icon: "🎓",
        content: `<p>Enuncia il criterio del rapporto che definisce la scrittura $h(x)=o(f(x))$ per $x \\to x_0$, precisando le ipotesi su $f$. Spiega poi perché la scrittura $o(f)-o(f)$ non vale $0$ e mostralo con un esempio esplicito per $x \\to 0$ con $f(x)=x$.</p>`,
        solution: `<p><strong>Definizione.</strong> Siano $f$ e $h$ definite in un intorno bucato di $x_0$ (con $x_0$ eventualmente $\\pm\\infty$) e sia $f(x) \\neq 0$ in tale intorno bucato. Si scrive $h(x)=o(f(x))$ per $x \\to x_0$ se e solo se $\\lim_{x\\to x_0}\\frac{h(x)}{f(x)}=0$; si dice che $h$ è trascurabile rispetto a $f$. L'ipotesi $f \\neq 0$ in un intorno bucato serve perché $f$ compare a denominatore.</p>
        <p>Il simbolo $o(f)$ non denota una funzione precisa ma la <strong>classe</strong> di tutte le funzioni il cui rapporto con $f$ tende a $0$: due occorrenze di $o(f)$ nella stessa formula possono quindi essere funzioni diverse, e per questo le uguaglianze con gli o piccoli si leggono solo da sinistra a destra e non autorizzano cancellazioni.</p>
        <p><strong>Esempio</strong> con $f(x)=x$ e $x \\to 0$: le funzioni $h_1(x)=x^2$ e $h_2(x)=x^3$ sono entrambe $o(x)$, perché $\\frac{x^2}{x}=x\\to 0$ e $\\frac{x^3}{x}=x^2\\to 0$. La loro differenza è $h_1(x)-h_2(x)=x^2-x^3$, che non è la funzione nulla (per $x=\\tfrac12$ vale $\\tfrac18$), ma soddisfa $\\frac{x^2-x^3}{x}=x-x^2\\to 0$, cioè è ancora un $o(x)$. Dunque la lettura corretta è $o(x)-o(x)=o(x)$ e non $o(x)-o(x)=0$.</p>`
      },

      {
        id: "s23-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        icon: "🎓",
        content: `<p>Dare la definizione di $f(x) = o(g(x))$ per $x \\to x_0$ e dimostrare, a partire dalla definizione, le due proprietà usate nella lezione: $x \\cdot o(x^2) = o(x^3)$ e $o(x) \\cdot o(x^2) = o(x^3)$ per $x \\to 0$.</p>`,
        solution: `<p><strong>Definizione.</strong> Si scrive $f(x) = o(g(x))$ per $x \\to x_0$ se esiste una funzione $\\varepsilon$ definita in un intorno di $x_0$ con $f(x) = \\varepsilon(x) g(x)$ e $\\lim_{x \\to x_0} \\varepsilon(x) = 0$. Se $g(x) \\neq 0$ in un intorno bucato di $x_0$, ciò equivale a $\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = 0$.</p>
        <p><strong>Prima proprietà.</strong> Sia $h(x) = o(x^2)$ per $x \\to 0$, cioè $h(x) = \\varepsilon(x) x^2$ con $\\varepsilon(x) \\to 0$. Allora $x\\,h(x) = \\varepsilon(x) x^3$ con $\\varepsilon(x) \\to 0$, dunque $x \\cdot o(x^2) = o(x^3)$. Equivalentemente</p>
        <p>$$\\lim_{x \\to 0} \\frac{x\\,h(x)}{x^3} = \\lim_{x \\to 0} \\frac{h(x)}{x^2} = 0$$</p>
        <p><strong>Seconda proprietà.</strong> Siano $h_1(x) = \\varepsilon_1(x) x$ e $h_2(x) = \\varepsilon_2(x) x^2$ con $\\varepsilon_1(x) \\to 0$ e $\\varepsilon_2(x) \\to 0$. Allora $h_1(x) h_2(x) = \\varepsilon_1(x)\\varepsilon_2(x)\\, x^3$ e $\\varepsilon_1(x)\\varepsilon_2(x) \\to 0$, quindi $o(x) \\cdot o(x^2) = o(x^3)$.</p>
        <p>Si noti che vale anche $o(x^3) + o(x^3) = o(x^3)$, poiché la somma di due infinitesimi $\\varepsilon_1 + \\varepsilon_2$ tende ancora a $0$: è questa proprietà che permette di scrivere $x^3 + o(x^3) + o(x^3) + o(x^3) = x^3 + o(x^3)$.</p>`
      },

      {
        id: "s23-es-teoria-4",
        type: "esercizio",
        title: "Teoria 4",
        kind: "teoria",
        source: "integrazione",
        icon: "🎓",
        content: `<p>Enunciare e dimostrare la regola di assorbimento: se $g(x)=o(f(x))$, con $f$ e $g$ definitivamente non nulle per $x \\to x_0$, allora $o(f(x))+o(g(x))=o(f(x))$. Dedurne che per $n \\to +\\infty$ si ha $-\\frac{1}{n}+\\frac{1}{n^2}+o\\!\\left(\\frac{1}{n}\\right)=-\\frac{1}{n}+o\\!\\left(\\frac{1}{n}\\right)$.</p>`,
        solution: `<p>Siano $r(x)=o(f(x))$ e $s(x)=o(g(x))$, con $g(x)=o(f(x))$ e $f,g$ definitivamente non nulle. Dove tutti i quozienti sono definiti si ha</p>
        <p>$$\\frac{r(x)+s(x)}{f(x)}=\\frac{r(x)}{f(x)}+\\frac{s(x)}{g(x)}\\cdot\\frac{g(x)}{f(x)}\\overset{x \\to x_0}{\\longrightarrow}0+0\\cdot 0=0$$</p>
        <p>perché $\\frac{r}{f}\\to 0$ per ipotesi, $\\frac{s}{g}\\to 0$ per ipotesi e $\\frac{g}{f}\\to 0$ essendo $g=o(f)$. Dunque $r+s=o(f)$, cioè $o(f(x))+o(g(x))=o(f(x))$: il resto relativo al termine <strong>più piccolo</strong> viene assorbito.</p>
        <p><strong>Applicazione.</strong> Per $n \\to +\\infty$ si ha $\\frac{1/n^2}{1/n}=\\frac{1}{n}\\to 0$, quindi $\\frac{1}{n^2}=o\\!\\left(\\frac{1}{n}\\right)$. Allora $\\frac{1}{n^2}+o\\!\\left(\\frac{1}{n}\\right)$ è somma di due $o\\!\\left(\\frac{1}{n}\\right)$ e per la regola $o(f)+o(f)=o(f)$ vale $\\frac{1}{n^2}+o\\!\\left(\\frac{1}{n}\\right)=o\\!\\left(\\frac{1}{n}\\right)$, da cui</p>
        <p>$$-\\frac{1}{n}+\\frac{1}{n^2}+o\\!\\left(\\frac{1}{n}\\right)=-\\frac{1}{n}+o\\!\\left(\\frac{1}{n}\\right)$$</p>`
      },

      {
        id: "s23-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        icon: "✏️",
        content: `<p>Calcolare $\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{\\ln(1+5x)}$ usando gli sviluppi asintotici.</p>`,
        solution: `<p>Per $x \\to 0$ gli argomenti $3x$ e $5x$ tendono a $0$ e sia il numeratore sia il denominatore tendono a $0$: si tratta della forma indeterminata $\\frac{0}{0}$.</p>
        <p>Dallo sviluppo $\\sin(y)=y+o(y)$ con $y=3x$ si ottiene</p>
        <p>$$\\sin(3x)=3x+o(3x)=3x+o(x)$$</p>
        <p>dove si è usata la regola $o(c\\cdot f)=o(f)$ con $c=3\\neq 0$. Dallo sviluppo $\\ln(1+y)=y+o(y)$ con $y=5x$ si ottiene</p>
        <p>$$\\ln(1+5x)=5x+o(5x)=5x+o(x)$$</p>
        <p>Si noti che $5x+o(x)$ è definitivamente non nullo per $x \\to 0$, perché $\\frac{5x+o(x)}{x}\\to 5\\neq 0$. Mettendo in evidenza $x$ sopra e sotto e usando $\\frac{o(x)}{x}=o(1)$:</p>
        <p>$$\\lim_{x\\to 0}\\frac{3x+o(x)}{5x+o(x)}=\\lim_{x\\to 0}\\frac{x\\left(3+o(1)\\right)}{x\\left(5+o(1)\\right)}=\\lim_{x\\to 0}\\frac{3+o(1)}{5+o(1)}=\\frac{3}{5}$$</p>
        <p>Il limite vale dunque $\\frac{3}{5}$.</p>`
      },

      {
        id: "s23-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        icon: "✏️",
        content: `<p>Semplifica, per $x \\to 0$, l'espressione</p>
        <p>$$4\\,o(x^3)\\;+\\;x^2\\cdot o(x)\\;+\\;o(5x^3)\\;+\\;o(x^4)\\;+\\;o\\big(o(x^3)\\big)$$</p>
        <p>indicando per ogni passaggio la proprietà degli o piccoli utilizzata.</p>`,
        solution: `<p>Si tratta ogni addendo separatamente, ricordando che tutte le uguaglianze vanno lette da sinistra verso destra (ogni $o(\\cdot)$ denota una classe di funzioni).</p>
        <ul>
          <li><strong>(i)</strong> $4\\,o(x^3)=o(x^3)$: assorbimento della costante moltiplicativa $4\\neq 0$.</li>
          <li><strong>(ii)</strong> $x^2\\cdot o(x)=o(x^2\\cdot x)=o(x^3)$: moltiplicazione per una funzione; l'ipotesi è soddisfatta perché $x^2\\neq 0$ e $x\\neq 0$ in un intorno bucato di $0$.</li>
          <li><strong>(iii)</strong> $o(5x^3)=o(x^3)$: assorbimento della costante $5\\neq 0$ dentro l'argomento, cioè $\\frac{h(x)}{5x^3}\\to 0 \\iff \\frac{h(x)}{x^3}\\to 0$.</li>
          <li><strong>(iv)</strong> $o(x^4)=o(x^3)$: per $x \\to 0$ si ha $\\frac{x^4}{x^3}=x\\to 0$, cioè $x^4=o(x^3)$; se $h=o(x^4)$ allora $\\frac{h}{x^3}=\\frac{h}{x^4}\\cdot\\frac{x^4}{x^3}\\to 0\\cdot 0=0$, dunque $h=o(x^3)$ (transitività del confronto).</li>
          <li><strong>(v)</strong> $o\\big(o(x^3)\\big)=o(x^3)$: proprietà di composizione, con la stessa catena di rapporti del punto precedente.</li>
        </ul>
        <p>Tutti e cinque i termini appartengono quindi alla classe $o(x^3)$ e, applicando quattro volte la proprietà di addizione $o(x^3)+o(x^3)=o(x^3)$, si ottiene</p>
        <p>$$4\\,o(x^3)+x^2\\cdot o(x)+o(5x^3)+o(x^4)+o\\big(o(x^3)\\big)=o(x^3)\\qquad (x\\to 0)$$</p>
        <p>L'espressione è dunque trascurabile rispetto a $x^3$ per $x \\to 0$, e questa è tutta l'informazione disponibile: non si tratta di una funzione determinata, quindi non si può concludere nulla di più preciso (in particolare non si possono cancellare fra loro i vari resti).</p>`
      },

      {
        id: "s23-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        icon: "✏️",
        content: `<p>Calcolare $\\displaystyle \\lim_{x \\to 0} \\frac{\\sin(3x)\\left(e^{x} - 1\\right)}{x^2}$ usando gli sviluppi asintotici.</p>`,
        solution: `<p>La forma è $\\frac{0}{0}$. Per $x \\to 0$ gli argomenti $3x$ e $x$ sono infinitesimi, quindi</p>
        <p>$$\\sin(3x) = 3x + o(3x) = 3x + o(x), \\qquad e^{x} - 1 = x + o(x)$$</p>
        <p>Moltiplicando con l'algebra degli $o$ piccoli:</p>
        <p>$$\\begin{aligned}
        \\sin(3x)\\left(e^{x}-1\\right) &= (3x + o(x))(x + o(x)) \\\\
        &= 3x^2 + 3x\\,o(x) + x\\,o(x) + o(x)\\,o(x) \\\\
        &= 3x^2 + o(x^2)
        \\end{aligned}$$</p>
        <p>perché $x \\cdot o(x) = o(x^2)$ e $o(x) \\cdot o(x) = o(x^2)$, e la somma di $o(x^2)$ è ancora $o(x^2)$.</p>
        <p>Quindi, per $x \\neq 0$ in un intorno bucato di $0$,</p>
        <p>$$\\frac{\\sin(3x)(e^x-1)}{x^2} = \\frac{3x^2 + o(x^2)}{x^2} = 3 + \\frac{o(x^2)}{x^2} \\overset{x \\to 0}{\\longrightarrow} 3$$</p>
        <p>Il limite vale $3$.</p>`
      },

      {
        id: "s23-es-scritto-4",
        type: "esercizio",
        title: "Scritto 4",
        kind: "scritto",
        source: "integrazione",
        icon: "✏️",
        content: `<p>Calcolare $\\lim_{x\\to 0}\\dfrac{e^{x^2}-1}{1-\\cos(2x)}$.</p>`,
        solution: `<p>Entrambi gli argomenti, $x^2$ e $2x$, tendono a $0$ per $x \\to 0$, e numeratore e denominatore tendono a $0$: forma indeterminata $\\frac{0}{0}$.</p>
        <p><strong>Numeratore.</strong> Da $e^{y}=1+y+o(y)$ con $y=x^2$:</p>
        <p>$$e^{x^2}-1=x^2+o(x^2)$$</p>
        <p><strong>Denominatore.</strong> Da $\\cos(y)=1-\\frac{y^2}{2}+o(y^2)$ con $y=2x$:</p>
        <p>$$\\cos(2x)=1-\\frac{(2x)^2}{2}+o\\big((2x)^2\\big)=1-2x^2+o(x^2)$$</p>
        <p>dove si è usato $o(4x^2)=o(x^2)$; quindi</p>
        <p>$$1-\\cos(2x)=2x^2+o(x^2)$$</p>
        <p>quantità definitivamente non nulla per $x \\to 0$ poiché $\\frac{2x^2+o(x^2)}{x^2}\\to 2\\neq 0$. Mettendo in evidenza $x^2$:</p>
        <p>$$\\lim_{x\\to 0}\\frac{x^2+o(x^2)}{2x^2+o(x^2)}=\\lim_{x\\to 0}\\frac{x^2\\left(1+o(1)\\right)}{x^2\\left(2+o(1)\\right)}=\\lim_{x\\to 0}\\frac{1+o(1)}{2+o(1)}=\\frac{1}{2}$$</p>
        <p><strong>Osservazione:</strong> qui è indispensabile lo sviluppo del coseno al secondo ordine, perché il suo termine di primo ordine è nullo. Il limite vale $\\frac{1}{2}$.</p>`
      },

      {
        id: "s23-oral-box",
        type: "oral_box",
        title: "Domande tipiche all'orale su questo blocco",
        icon: "🎤",
        content: `<p>Le domande più probabili ruotano attorno a tre nuclei: (1) la <strong>definizione</strong> di o piccolo con l'ipotesi su $g$ e il perché serve; (2) la <strong>lettura non simmetrica</strong> del segno "=" e le conseguenze (nessuna cancellazione fra resti); (3) la <strong>dimostrazione</strong> di una delle regole di calcolo o di uno degli sviluppi notevoli a partire dal corrispondente limite notevole.</p>
        <p>Una domanda ricorrente è: "Perché lo sviluppo del coseno si dà al secondo ordine?" — la risposta deve citare l'annullarsi del termine di primo ordine e un limite, come $\\frac{1-\\cos x}{x^2}$, che altrimenti non si potrebbe calcolare.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Dai la definizione di $f(x) = o(g(x))$ per $x \\to x_0$. Quale ipotesi serve su $g$ e perché?",
        back: "Siano $f, g: A \\to \\mathbb{R}$ con $x_0$ punto di accumulazione per $A$, e si supponga $g(x) \\neq 0$ <strong>definitivamente</strong> per $x \\to x_0$ (in un intorno di $x_0$ intersecato con $A$, eventualmente privato di $x_0$). Si scrive $f(x) = o(g(x))$ se $\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = 0$. L'ipotesi su $g$ serve a <strong>dare senso al quoziente</strong> $\\frac{f(x)}{g(x)}$ vicino a $x_0$, dato che $g$ compare a denominatore."
      },
      {
        type: "tranello",
        front: "Da $x^4 = o(x^3)$ e $x^5 = o(x^3)$ posso concludere $x^4 = x^5$?",
        back: "No. Il simbolo $o(x^3)$ non denota una funzione determinata, ma <strong>una qualunque</strong> funzione il cui rapporto con $x^3$ tende a zero: denota cioè un'intera classe. L'uguaglianza si legge solo <strong>da sinistra verso destra</strong> e non è reversibile; due occorrenze diverse dello stesso simbolo possono essere funzioni diverse. Per lo stesso motivo $o(f) - o(f)$ non vale $0$, ma di nuovo $o(f)$."
      },
      {
        type: "domanda",
        front: "Nel calcolo di un limite di quoziente di potenze, perché a $+\\infty$ si raccoglie il grado più alto e a $0$ il grado più basso?",
        back: "Quando $x \\to 0$ i termini di grado alto, come $x^8$, vanno a zero molto più velocemente di quelli di grado basso: con $x = 1/2$, $x^8$ è piccolissimo mentre $x$ è molto più grande. Quindi vicino a zero il termine che dà il contributo maggiore è quello con la <strong>potenza più bassa</strong>. Quando invece $x \\to +\\infty$ il termine più ingombrante è quello che cresce più velocemente, cioè la <strong>potenza più alta</strong>. Raccogliendo il termine giusto si ottengono parentesi della forma $1 + o(1)$, che tendono a $1$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra che $o(f(x)) + o(f(x)) = o(f(x))$.",
        back: "Siano $g(x) = o(f(x))$ e $h(x) = o(f(x))$ (in generale funzioni <strong>diverse</strong>), con $f(x) \\neq 0$ definitivamente. Allora $$\\lim_{x \\to x_0} \\frac{g(x)+h(x)}{f(x)} = \\lim_{x \\to x_0}\\left(\\frac{g(x)}{f(x)} + \\frac{h(x)}{f(x)}\\right) = 0 + 0 = 0$$ perché per ipotesi entrambi i limiti sono nulli. Dunque $g+h = o(f)$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra che $g(x) \\cdot o(f(x)) = o(g(x) f(x))$ e spiega dove serve l'ipotesi $g \\neq 0$.",
        back: "Sia $h(x) = o(f(x))$. Poiché $f$ e $g$ sono definitivamente non nulle, anche $g f$ lo è e si può semplificare: $$\\lim_{x \\to x_0} \\frac{g(x)h(x)}{g(x)f(x)} = \\lim_{x \\to x_0}\\frac{h(x)}{f(x)} = 0$$ È proprio l'ipotesi $g(x) \\neq 0$ definitivamente a rendere <strong>lecita la cancellazione</strong> del fattore $g(x)$ e a dare senso al quoziente con denominatore $g f$."
      },
      {
        type: "formula",
        front: "Elenca gli sviluppi asintotici notevoli per $x \\to 0$.",
        back: "$e^x = 1+x+o(x)$; $\\ln(1+x) = x+o(x)$; $(1+x)^\\alpha = 1+\\alpha x+o(x)$ (con $\\alpha$ costante fissata e $x \\gt -1$); $\\sin(x) = x+o(x)$; $\\cos(x) = 1-\\frac{x^2}{2}+o(x^2)$; $\\tan(x) = x+o(x)$; $a^x = 1+x\\ln(a)+o(x)$ (con $a \\gt 0$); $\\arcsin(x) = x+o(x)$; $\\arctan(x) = x+o(x)$."
      },
      {
        type: "domanda",
        front: "Perché lo sviluppo del coseno si dà al secondo ordine e non al primo?",
        back: "Perché il <strong>termine di primo ordine è nullo</strong>: fermandosi al primo ordine si otterrebbe solo $\\cos(x) = 1 + o(x)$, informazione troppo grossolana. Ad esempio $\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$ non sarebbe calcolabile, mentre con $\\cos(x) = 1-\\frac{x^2}{2}+o(x^2)$ si ottiene subito $\\frac{1}{2}$. In generale serve sviluppare fino a catturare il <strong>primo termine non nullo</strong>."
      },
      {
        type: "dimostrazione",
        front: "Ricava lo sviluppo $e^x = 1 + x + o(x)$ dal limite notevole.",
        back: "Dal limite notevole $\\lim_{x\\to 0}\\frac{e^x-1}{x} = 1$ segue $\\frac{e^x-1}{x} = 1+o(1)$. Moltiplicando per $x$: $e^x - 1 = x(1+o(1)) = x + x\\cdot o(1)$. Per la regola $g\\cdot o(f) = o(gf)$ si ha $x \\cdot o(1) = o(x)$, dunque $e^x = 1+x+o(x)$. Geometricamente: vicino a $x=0$ la funzione $e^x$ è ben approssimata dalla sua <strong>retta tangente</strong> $y = 1+x$."
      },
      {
        type: "tranello",
        front: "Perché gli sviluppi al primo ordine non permettono di calcolare $\\lim_{x\\to 0}\\frac{x-\\sin x}{\\cos x - 1}$?",
        back: "Con $\\sin(x) = x+o(x)$ e $\\cos(x) = 1+o(x)$ si ottiene $\\frac{x-(x+o(x))}{1+o(x)-1} = \\frac{o(x)}{o(x)}$: i <strong>termini principali si cancellano</strong> e tutta l'informazione resta nascosta nei resti. Inoltre i due $o(x)$ sono funzioni diverse e non si semplificano, quindi la scrittura non contiene alcuna informazione sul limite. Servono sviluppi di ordine superiore."
      },
      {
        type: "domanda",
        front: "Per $x \\to +\\infty$ si ha $x^3 = o(x^4)$: posso dire che $x^3$ è un infinitesimo di ordine superiore?",
        back: "No, è un <strong>errore di linguaggio</strong>. Per $x \\to +\\infty$ sia $x^3$ sia $x^4$ divergono: sono entrambe infiniti, nessuna è infinitesima. Infinitesimo è il loro <strong>rapporto</strong> $\\frac{x^3}{x^4} = \\frac{1}{x}$. Si dice correttamente: $x^3$ è un infinito di ordine <strong>inferiore</strong> rispetto a $x^4$, cioè è trascurabile rispetto a $x^4$. La locuzione «infinitesimo di ordine superiore» si usa quando entrambe tendono a $0$: per $x \\to 0$ è $x^4 = o(x^3)$. L'ordine del confronto si rovescia: decide sempre il limite del rapporto."
      },
      {
        type: "domanda",
        front: "Qual è la strategia standard per calcolare un limite in forma $\\frac{0}{0}$ con gli sviluppi asintotici?",
        back: "(i) Sostituire a ogni funzione il suo sviluppo asintotico, verificando che l'<strong>argomento tenda a zero</strong>; (ii) raccogliere il termine dominante di numeratore e denominatore e dividere per esso; (iii) usare $\\frac{o(f)}{f} \\to 0$ per far sparire i resti; (iv) calcolare il limite rimasto, un quoziente di quantità con limite finito e non nullo. Attenzione: ogni funzione va sviluppata fino all'ordine necessario a individuare i <strong>primi termini non nulli dell'espressione complessiva</strong>, tenendo conto di prodotti e cancellazioni — gli ordini delle singole funzioni non devono necessariamente coincidere."
      },
      {
        type: "domanda",
        front: "Che cosa NON dice la regola di assorbimento $o(f) + o(g) = o(f)$ con $g = o(f)$?",
        back: "Non dice che sia il termine $o(f)$ a <strong>dominare</strong> la somma: individua soltanto la classe del resto complessivo. Esempio per $x \\to 0$ con $f(x) = x$, $g(x) = x^2$ (e $g = o(f)$): $x^4 = o(f)$ e $x^3 = o(g)$, ma in $x^4 + x^3$ domina $x^3$, cioè il termine scelto come $o(g)$. La regola resta vera ($x^4+x^3 = o(x)$), ma la dominanza va determinata caso per caso sulle funzioni concrete."
      }
    ]
};

