const LESSON = {
    id: "L04", date: "Lezione 4 — 2 Ott 2026",
    title: "Flusso di un Campo Vettoriale, Angolo Solido e Teorema di Gauss",
    abstract: "Dall'analogia idraulica alla definizione di flusso di un campo vettoriale; angolo piano e angolo solido (geometrico e orientato); flusso del campo di una carica puntiforme e dimostrazione del teorema di Gauss per carica interna, esterna e per distribuzioni di cariche.",

    sections: [
      {
        id: "s04-flusso-intro",
        type: "section",
        title: "Il flusso: l'analogia con il fluido",
        icon: "💧",
        content: `<p>Iniziamo con un concetto fondamentale che ritroveremo in diverse aree della fisica: il <strong>flusso di un campo vettoriale</strong>. Per capire intuitivamente di cosa si tratta, conviene l'analogia con la fluidodinamica studiata in Fisica 1.</p>`,
        quote: {
          text: "In realtà, vedrete che Fisica 2 e Fisica 1 sono la stessa cosa. Molti dei concetti che introdurremo, come i campi vettoriali, hanno un'analogia diretta con, ad esempio, il moto di un fluido come l'acqua. Se parlate con un ingegnere idraulico, potreste capirvi perfettamente usando le equazioni di Fisica 2, anche se lui parla di acqua e voi di campi elettrici.",
          src: "Nota del Prof."
        },
        subsections: [
          {
            subtitle: "Da che cosa dipende la quantità di fluido che attraversa una superficie",
            content: `<p>Immaginiamo un tubo in cui scorre dell'acqua: le particelle del fluido si muovono con velocità $\\vec{v}$. Vogliamo quantificare «quanta acqua» attraversa una determinata superficie in un certo intervallo di tempo.</p>
            <p>Consideriamo una superficie infinitesima $dS$ posta all'interno del flusso. La quantità di fluido che la attraversa in un intervallo $dt$ dipende da:</p>
            <ul>
              <li>la densità del fluido, $\\rho$;</li>
              <li>la velocità del fluido, $v = \\| \\vec{v} \\|$;</li>
              <li>l'intervallo di tempo, $dt$;</li>
              <li>l'area della superficie, $dS$;</li>
              <li>l'<strong>orientazione</strong> della superficie rispetto alla direzione del flusso.</li>
            </ul>
            <p>Se la superficie è perpendicolare al flusso, la quantità di fluido che la attraversa è massima; se è parallela al flusso, nessuna particella la attraversa. L'effetto dell'orientazione è catturato dal coseno dell'angolo $\\alpha$ tra la normale $\\hat{n}$ e la velocità $\\vec{v}$.</p>`
          },
          {
            subtitle: "Convenzione di orientazione (fonte principale di errori di segno)",
            content: `<p>Su una superficie infinitesima $dS$ scegliamo <em>una</em> delle due normali unitarie possibili e la chiamiamo $\\hat{n}$: questa scelta <strong>orienta</strong> la superficie. Tutte le quantità scritte con un prodotto scalare contenente $\\hat{n}$ (volume netto, massa netta, flusso, angolo solido orientato) sono quantità <em>orientate</em>: cambiano segno se si sostituisce $\\hat{n}$ con $-\\hat{n}$.</p>
            <p>Se invece ci interessa una quantità intrinsecamente non negativa (la massa che attraversa in modulo, l'area, l'ampiezza di un angolo) dobbiamo usare il valore assoluto. Per una superficie <strong>chiusa</strong> la convenzione standard è $\\hat{n}$ <strong>uscente</strong>.</p>`
          },
          {
            subtitle: "Volume e massa netti attraverso $dS$",
            content: `<p>Con questa convenzione, il volume netto $dV$ che attraversa $dS$ nel tempo $dt$ <em>nel verso di</em> $\\hat{n}$ è il volume del cilindretto obliquo di base $dS$ e generatrice $\\vec{v}\\,dt$, preso con il segno di $\\vec{v} \\cdot \\hat{n}$ (il volume geometrico del cilindretto è $|dV|$):</p>
            <p>$$dV = \\vec{v} \\cdot \\hat{n} \\, dS \\, dt = v \\, \\cos(\\alpha) \\, dS \\, dt$$</p>
            <p>e la massa netta orientata corrispondente è</p>
            <p>$$dm = \\rho \\, dV = \\rho \\, v \\, \\cos(\\alpha) \\, dS \\, dt .$$</p>
            <p>La quantità $dm$ è una massa <em>netta orientata</em>: è positiva se il fluido attraversa $dS$ nel verso di $\\hat{n}$ e negativa nel verso opposto. Invertendo la normale ($\\hat{n} \\to -\\hat{n}$, cioè $\\alpha \\to \\pi - \\alpha$) il segno di $dm$ si inverte. La massa effettivamente attraversata, non negativa, è</p>
            <p>$$|dm| = \\rho \\, v \\, |\\cos(\\alpha)| \\, dS \\, dt .$$</p>`
          }
        ]
      },

      {
        id: "s04-flusso-def",
        type: "section",
        title: "Definizione di flusso di un campo vettoriale",
        icon: "🌊",
        content: `<p>Le espressioni precedenti ci portano a definire una nuova quantità, il <strong>flusso</strong>, che non dipende dalla natura del campo ma solo dalle sue proprietà vettoriali.</p>
        <p>Dato un campo vettoriale $\\vec{v}$ e una superficie infinitesima $dS$ con versore normale $\\hat{n}$ (scelto, e quindi fissata l'orientazione), si definisce <strong>flusso infinitesimo</strong> $d\\Phi$ la quantità scalare</p>
        <p>$$d\\Phi = \\vec{v} \\cdot \\hat{n} \\, dS .$$</p>
        <p>Definendo il <strong>vettore superficie</strong> $\\vec{dS} = \\hat{n} \\, dS$, la definizione diventa più compatta: $d\\Phi = \\vec{v} \\cdot \\vec{dS}$.</p>
        <p>Per calcolare il flusso attraverso una superficie finita $S$ sommiamo i contributi infinitesimi di tutte le piccole aree $dS$, e questo «sommare» si traduce in un integrale di superficie. Il <strong>flusso totale</strong> attraverso una superficie finita $S$, orientata da un campo continuo di normali $\\hat{n}$, è</p>
        <p>$$\\Phi(\\vec{v}) = \\int_S d\\Phi = \\int_S \\vec{v} \\cdot \\vec{dS} = \\int_S \\vec{v} \\cdot \\hat{n} \\, dS .$$</p>`,
        subsections: [
          {
            subtitle: "I due flussi del fluido: portata volumetrica e portata massica",
            content: `<p>Nel caso del fluido conviene distinguere chiaramente due flussi diversi, perché hanno <strong>dimensioni diverse</strong>:</p>
            <p>$$d\\Phi_{\\vec{v}} = \\frac{dV}{dt} = \\vec{v} \\cdot \\hat{n} \\, dS \\qquad \\left[\\mathrm{m^3/s}\\right],$$</p>
            <p>cioè il flusso del campo di velocità è una <strong>portata volumetrica</strong>, e</p>
            <p>$$d\\Phi_{\\rho \\vec{v}} = \\frac{dm}{dt} = \\rho \\, \\vec{v} \\cdot \\hat{n} \\, dS = \\rho \\, d\\Phi_{\\vec{v}} \\qquad \\left[\\mathrm{kg/s}\\right],$$</p>
            <p>cioè il flusso del campo $\\rho \\vec{v}$ è una <strong>portata massica</strong>. Quando più avanti parleremo di flusso del campo elettrico non ci sarà nulla che «scorre»: resta solo la struttura matematica $\\vec{E} \\cdot \\hat{n} \\, dS$.</p>`
          },
          {
            subtitle: "I tre casi notevoli",
            content: `<p>Il prodotto scalare cattura esattamente l'idea intuitiva discussa:</p>
            <ul>
              <li>se $\\vec{v}$ è parallelo a $\\hat{n}$ (flusso perpendicolare alla superficie), l'angolo è $0$, $\\cos(0)=1$ e il flusso è <strong>massimo</strong>: $d\\Phi = v \\, dS$;</li>
              <li>se $\\vec{v}$ è perpendicolare a $\\hat{n}$ (flusso parallelo alla superficie), l'angolo è $\\pi/2$, $\\cos(\\pi/2)=0$ e il flusso è <strong>nullo</strong>;</li>
              <li>se $\\vec{v}$ è antiparallelo a $\\hat{n}$, l'angolo è $\\pi$ e il flusso è <strong>minimo</strong> (negativo): $d\\Phi = -v \\, dS$. Il fluido attraversa la superficie dalla parte «sbagliata» rispetto alla normale scelta.</li>
            </ul>`
          }
        ],
        formulas: [
          { label: "Flusso infinitesimo", latex: "d\\Phi = \\vec{v} \\cdot \\hat{n} \\, dS = \\vec{v} \\cdot \\vec{dS}" },
          { label: "Flusso totale", latex: "\\Phi(\\vec{v}) = \\int_S \\vec{v} \\cdot \\hat{n} \\, dS" },
          { label: "Portata volumetrica", latex: "\\Phi(\\vec{v}) = \\frac{dV}{dt} \\quad [\\mathrm{m^3/s}]" },
          { label: "Portata massica", latex: "\\Phi(\\rho\\vec{v}) = \\rho \\, \\Phi(\\vec{v}) = \\frac{dm}{dt} \\quad [\\mathrm{kg/s}]" }
        ]
      },

      {
        id: "s04-secchio",
        type: "note_box",
        title: "Il secchio sotto la cascata: il segno non è l'acqua raccolta",
        icon: "🪣",
        content: `<p>Pensate di riempire un secchio sotto una cascata. Per raccogliere la massima quantità di acqua lo mettete con l'apertura rivolta verso l'alto; attenzione però al segno.</p>
        <p>L'acqua cade verso il basso, quindi se orientiamo la superficie dell'apertura con la normale <em>verso l'alto</em> la normale è <em>antiparallela</em> alla velocità: il flusso è <strong>negativo</strong> e massimo <em>in modulo</em>. Se invece scegliamo la normale <em>verso il basso</em>, lo stesso attraversamento dà un flusso <strong>positivo</strong> e massimo.</p>
        <p>In entrambi i casi l'acqua raccolta è la stessa: ciò che cambia è solo il segno, cioè l'informazione su quale verso di attraversamento abbiamo deciso di chiamare positivo. Se invece mettete il secchio di lato (normale perpendicolare alla velocità), non raccoglierete quasi nulla: il flusso è nullo sia in segno sia in modulo.</p>`
      },

      {
        id: "s04-int-flusso-uniforme",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p><strong>Esempio illustrativo: flusso di un campo uniforme attraverso una superficie piana inclinata.</strong></p>
        <p>Questo esempio non è stato svolto a lezione, ma mostra la procedura operativa minima che dovete saper ripetere all'esame.</p>
        <p>Consideriamo un campo di velocità uniforme $\\vec{v} = v_0 \\, \\hat{x}$ con $v_0 = 2 \\ \\mathrm{m/s}$, e una superficie piana rettangolare di area $S = 0{,}5 \\ \\mathrm{m^2}$, la cui normale $\\hat{n}$ forma un angolo $\\alpha = 60^\\circ$ con l'asse $x$.</p>
        <p><em>Passo 1 — orientare la superficie.</em> Scegliamo $\\hat{n}$ con componente positiva lungo $x$, cioè concorde al flusso: il risultato sarà positivo.</p>
        <p><em>Passo 2 — il campo è uniforme, quindi esce dall'integrale.</em></p>
        <p>$$\\Phi(\\vec{v}) = \\int_S \\vec{v} \\cdot \\hat{n} \\, dS = v_0 \\cos\\alpha \\int_S dS = v_0 \\, S \\cos\\alpha$$</p>
        <p><em>Passo 3 — sostituire i numeri.</em></p>
        <p>$$\\Phi(\\vec{v}) = 2 \\cdot 0{,}5 \\cdot \\cos 60^\\circ = 2 \\cdot 0{,}5 \\cdot \\tfrac{1}{2} = 0{,}5 \\ \\mathrm{m^3/s}$$</p>
        <p>cioè una portata volumetrica di mezzo metro cubo al secondo. Se il fluido è acqua, $\\rho = 1000 \\ \\mathrm{kg/m^3}$, la portata massica è</p>
        <p>$$\\Phi(\\rho \\vec{v}) = \\rho \\, \\Phi(\\vec{v}) = 1000 \\cdot 0{,}5 = 500 \\ \\mathrm{kg/s}.$$</p>
        <p><em>Controllo di coerenza.</em> Se avessimo scelto la normale opposta avremmo ottenuto $\\Phi = -0{,}5 \\ \\mathrm{m^3/s}$: il modulo è lo stesso, cambia solo il verso di attraversamento. Se la superficie fosse parallela al flusso ($\\alpha = 90^\\circ$) otterremmo $\\Phi = 0$, come deve essere.</p>`
      },

      {
        id: "s04-angolo-piano",
        type: "section",
        title: "Richiamo: l'angolo piano",
        icon: "📐",
        content: `<p>Un altro concetto geometrico estremamente utile, specialmente per il campo elettrico, è quello di <strong>angolo solido</strong>. Per introdurlo partiamo dal concetto più familiare di angolo piano.</p>
        <p>Data una circonferenza di raggio $R$, un angolo infinitesimo $d\\theta$ con vertice nel centro sottende un arco di lunghezza infinitesima $dl$.</p>
        <figure class="figura" data-id="fisica2_lez04a_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04a_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="155.77pt" height="155.77pt" viewBox="0 0 155.77 155.77" version="1.2"><style>#fisica2_lez04a_d1 [fill="rgb(0%,0%,0%)"],#fisica2_lez04a_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez04a_d1 [stroke="rgb(0%,0%,0%)"],#fisica2_lez04a_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez04a_d1 [fill="rgb(100%,0%,0%)"],#fisica2_lez04a_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez04a_d1 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04a_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez04a_d1 [stroke="rgb(100%,0%,0%)"],#fisica2_lez04a_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez04a_d1 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04a_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04a_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d1-glyph0-1">
<path style="stroke:none;" d="M 6.421875 -5.5 C 6.421875 -5.171875 6.265625 -4.484375 5.875 -4.09375 C 5.625 -3.828125 5.09375 -3.515625 4.203125 -3.515625 L 3.078125 -3.515625 L 3.734375 -6.109375 C 3.796875 -6.34375 3.828125 -6.453125 4.015625 -6.484375 C 4.09375 -6.484375 4.421875 -6.484375 4.625 -6.484375 C 5.328125 -6.484375 6.421875 -6.484375 6.421875 -5.5 Z M 7.515625 -0.921875 C 7.515625 -1.046875 7.390625 -1.046875 7.390625 -1.046875 C 7.3125 -1.046875 7.28125 -0.96875 7.265625 -0.90625 C 7.015625 -0.171875 6.59375 0 6.359375 0 C 6.03125 0 5.96875 -0.21875 5.96875 -0.609375 C 5.96875 -0.921875 6.015625 -1.421875 6.0625 -1.734375 C 6.078125 -1.875 6.09375 -2.0625 6.09375 -2.203125 C 6.09375 -2.96875 5.4375 -3.28125 5.171875 -3.390625 C 6.171875 -3.609375 7.359375 -4.296875 7.359375 -5.3125 C 7.359375 -6.15625 6.453125 -6.796875 5.15625 -6.796875 L 2.3125 -6.796875 C 2.125 -6.796875 2.03125 -6.796875 2.03125 -6.59375 C 2.03125 -6.484375 2.125 -6.484375 2.3125 -6.484375 C 2.3125 -6.484375 2.515625 -6.484375 2.6875 -6.46875 C 2.859375 -6.453125 2.953125 -6.4375 2.953125 -6.3125 C 2.953125 -6.265625 2.953125 -6.234375 2.921875 -6.125 L 1.578125 -0.78125 C 1.484375 -0.390625 1.46875 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.40625 -0.3125 0.40625 -0.109375 C 0.40625 0 0.546875 0 0.546875 0 L 1.796875 -0.03125 L 3.0625 0 C 3.140625 0 3.265625 0 3.265625 -0.203125 C 3.265625 -0.3125 3.171875 -0.3125 2.984375 -0.3125 C 2.625 -0.3125 2.34375 -0.3125 2.34375 -0.484375 C 2.34375 -0.546875 2.359375 -0.59375 2.375 -0.65625 L 3.03125 -3.296875 L 4.203125 -3.296875 C 5.109375 -3.296875 5.296875 -2.734375 5.296875 -2.390625 C 5.296875 -2.234375 5.21875 -1.9375 5.15625 -1.703125 C 5.09375 -1.421875 5 -1.0625 5 -0.859375 C 5 0.21875 6.1875 0.21875 6.3125 0.21875 C 7.171875 0.21875 7.515625 -0.78125 7.515625 -0.921875 Z M 7.515625 -0.921875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d1-glyph0-2">
<path style="stroke:none;" d="M 4.953125 -1.421875 C 4.953125 -1.515625 4.859375 -1.515625 4.84375 -1.515625 C 4.734375 -1.515625 4.734375 -1.484375 4.703125 -1.34375 C 4.53125 -0.703125 4.34375 -0.109375 3.9375 -0.109375 C 3.671875 -0.109375 3.640625 -0.375 3.640625 -0.5625 C 3.640625 -0.8125 3.65625 -0.875 3.703125 -1.046875 L 5.140625 -6.796875 C 5.140625 -6.796875 5.140625 -6.90625 5 -6.90625 C 4.859375 -6.90625 3.90625 -6.8125 3.75 -6.796875 C 3.65625 -6.78125 3.609375 -6.734375 3.609375 -6.609375 C 3.609375 -6.484375 3.6875 -6.484375 3.84375 -6.484375 C 4.3125 -6.484375 4.34375 -6.421875 4.34375 -6.3125 L 4.3125 -6.125 L 3.71875 -3.765625 C 3.53125 -4.125 3.25 -4.40625 2.796875 -4.40625 C 1.625 -4.40625 0.390625 -2.9375 0.390625 -1.484375 C 0.390625 -0.546875 0.953125 0.109375 1.71875 0.109375 C 1.921875 0.109375 2.421875 0.0625 3.015625 -0.640625 C 3.09375 -0.21875 3.4375 0.109375 3.921875 0.109375 C 4.265625 0.109375 4.5 -0.125 4.65625 -0.4375 C 4.828125 -0.796875 4.953125 -1.421875 4.953125 -1.421875 Z M 3.5625 -3.140625 L 3.0625 -1.1875 C 3.015625 -1 3.015625 -0.984375 2.859375 -0.8125 C 2.421875 -0.265625 2.015625 -0.109375 1.734375 -0.109375 C 1.25 -0.109375 1.109375 -0.65625 1.109375 -1.046875 C 1.109375 -1.546875 1.421875 -2.765625 1.65625 -3.21875 C 1.953125 -3.8125 2.40625 -4.1875 2.8125 -4.1875 C 3.453125 -4.1875 3.59375 -3.359375 3.59375 -3.296875 C 3.59375 -3.25 3.578125 -3.1875 3.5625 -3.140625 Z M 3.5625 -3.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d1-glyph0-3">
<path style="stroke:none;" d="M 2.390625 -1.421875 C 2.390625 -1.515625 2.296875 -1.515625 2.265625 -1.515625 C 2.171875 -1.515625 2.15625 -1.484375 2.125 -1.34375 C 1.953125 -0.703125 1.765625 -0.109375 1.375 -0.109375 C 1.078125 -0.109375 1.078125 -0.421875 1.078125 -0.5625 C 1.078125 -0.8125 1.078125 -0.859375 1.140625 -1.046875 L 2.5625 -6.796875 C 2.5625 -6.796875 2.5625 -6.90625 2.4375 -6.90625 C 2.203125 -6.90625 1.484375 -6.828125 1.21875 -6.8125 C 1.140625 -6.796875 1.03125 -6.78125 1.03125 -6.59375 C 1.03125 -6.484375 1.140625 -6.484375 1.28125 -6.484375 C 1.765625 -6.484375 1.765625 -6.40625 1.765625 -6.3125 L 1.734375 -6.125 L 0.484375 -1.140625 C 0.453125 -1.03125 0.4375 -0.96875 0.4375 -0.8125 C 0.4375 -0.234375 0.875 0.109375 1.34375 0.109375 C 1.671875 0.109375 1.921875 -0.09375 2.09375 -0.453125 C 2.265625 -0.828125 2.390625 -1.421875 2.390625 -1.421875 Z M 2.390625 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d1-glyph0-4">
<path style="stroke:none;" d="M 4.53125 -4.96875 C 4.53125 -5.640625 4.34375 -7.015625 3.328125 -7.015625 C 1.953125 -7.015625 0.421875 -4.203125 0.421875 -1.9375 C 0.421875 -1 0.703125 0.109375 1.609375 0.109375 C 3.015625 0.109375 4.53125 -2.75 4.53125 -4.96875 Z M 3.546875 -3.609375 L 1.46875 -3.609375 C 1.640625 -4.25 1.84375 -5.046875 2.234375 -5.75 C 2.515625 -6.234375 2.875 -6.796875 3.328125 -6.796875 C 3.8125 -6.796875 3.875 -6.15625 3.875 -5.59375 C 3.875 -5.109375 3.796875 -4.59375 3.546875 -3.609375 Z M 3.46875 -3.296875 C 3.359375 -2.84375 3.140625 -1.984375 2.765625 -1.28125 C 2.421875 -0.59375 2.046875 -0.109375 1.609375 -0.109375 C 1.28125 -0.109375 1.078125 -0.390625 1.078125 -1.328125 C 1.078125 -1.734375 1.140625 -2.3125 1.390625 -3.296875 Z M 3.46875 -3.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d1-glyph0-5">
<path style="stroke:none;" d="M 7.359375 -4.34375 C 7.359375 -5.9375 6.3125 -7.015625 4.828125 -7.015625 C 2.671875 -7.015625 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.609375 0.21875 3.03125 0.21875 C 5.140625 0.21875 7.359375 -1.953125 7.359375 -4.34375 Z M 6.484375 -4.734375 C 6.484375 -4.015625 6.203125 -2.453125 5.21875 -1.234375 C 4.75 -0.625 3.9375 -0.046875 3.09375 -0.046875 C 2.109375 -0.046875 1.40625 -0.84375 1.40625 -2.15625 C 1.40625 -2.59375 1.546875 -4.046875 2.3125 -5.21875 C 3 -6.25 3.984375 -6.765625 4.765625 -6.765625 C 5.578125 -6.765625 6.484375 -6.203125 6.484375 -4.734375 Z M 6.484375 -4.734375 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez04a_d1-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -73.703053 0.000639244 L 73.701775 0.000639244 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000639244 -73.701775 L -0.000639244 73.703053 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 56.692322 0.000639244 C 56.692322 31.312429 31.311151 56.6936 -0.000639244 56.6936 C -31.312429 56.6936 -56.6936 31.312429 -56.6936 0.000639244 C -56.6936 -31.311151 -31.312429 -56.692322 -0.000639244 -56.692322 C 31.311151 -56.692322 56.692322 -31.311151 56.692322 0.000639244 Z M 56.692322 0.000639244 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000639244 0.000639244 L 54.376407 14.568993 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070164 2.391284 C -1.692836 0.957741 -0.850198 0.278383 -0.000788796 0.00221093 C -0.850094 -0.280545 -1.695576 -0.957176 -2.071717 -2.391351 " transform="matrix(0.964506,-0.258408,-0.258408,-0.964506,132.259145,63.169897)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d1-glyph0-1" x="108.62561" y="80.75676"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000639244 0.000639244 L 36.443718 43.427948 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 54.763697 14.674618 C 51.751443 25.909933 45.351382 35.952082 36.443718 43.427948 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d1-glyph0-2" x="129.456852" y="45.639611"/>
  <use xlink:href="#fisica2_lez04a_d1-glyph0-3" x="134.63474" y="45.639611"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 18.072883 4.843717 C 17.07923 8.548398 14.966741 11.865789 12.024903 14.33036 " transform="matrix(0.998526,0,0,-0.998526,77.77017,77.77017)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d1-glyph0-2" x="96.579397" y="66.017523"/>
  <use xlink:href="#fisica2_lez04a_d1-glyph0-4" x="101.757285" y="66.017523"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d1-glyph0-5" x="66.390971" y="88.081944"/>
</g>
</g>
</svg></figure>
        <p>Nella figura l'arco rosso $dl$ è sotteso esattamente dai due raggi che delimitano $d\\theta$, e il raggio $R$ termina sulla circonferenza. L'angolo $d\\theta$ è definito come il rapporto adimensionale</p>
        <p>$$d\\theta = \\frac{dl}{R} .$$</p>
        <p>Integrando su tutta la circonferenza, l'arco totale è $l = 2\\pi R$ e l'angolo totale è $\\theta = \\frac{2\\pi R}{R} = 2\\pi$ radianti, come ci aspettiamo.</p>`,
        subsections: [
          {
            subtitle: "Angolo sotteso da un segmento infinitesimo generico",
            content: `<p>Consideriamo ora una situazione più generale: invece di un arco di circonferenza $dl$, prendiamo un segmento infinitesimo generico $\\vec{dl}'$ che non giace necessariamente sulla circonferenza. L'angolo sotteso dipende solo dalla sua componente <em>tangenziale</em>, cioè ortogonale al raggio vettore: un segmento diretto radialmente, «visto» dal vertice, sottende un angolo nullo.</p>
            <p>Sia $O$ il vertice, $\\vec{dl}'$ il segmento infinitesimo e $R$ la <strong>distanza locale</strong> tra $O$ e il segmento (non il raggio di una circonferenza fissa: se il segmento appartiene a una curva generica, $R$ varia da punto a punto). Indichiamo con $\\hat{u}_R$ il versore radiale che punta da $O$ verso il segmento e con $\\hat{t}$ il <strong>versore tangente orientato</strong>, ottenuto ruotando $\\hat{u}_R$ di $+\\pi/2$ (verso antiorario). Allora l'<strong>angolo orientato</strong> sotteso è</p>
            <p>$$d\\theta = \\frac{\\hat{t} \\cdot \\vec{dl}'}{R},$$</p>
            <p>mentre la sua <strong>ampiezza</strong> (non negativa) è</p>
            <p>$$|d\\theta| = \\frac{|\\hat{t} \\cdot \\vec{dl}'|}{R} = \\frac{dl' \\, |\\cos\\alpha|}{R},$$</p>
            <p>dove $\\alpha$ è l'angolo tra $\\vec{dl}'$ e la direzione tangente $\\hat{t}$ e $dl' = \\|\\vec{dl}'\\|$.</p>`
          },
          {
            subtitle: "Perché il tangente e non il radiale",
            content: `<p>È essenziale proiettare su $\\hat{t}$ e non su $\\hat{u}_R$. La proiezione radiale $\\hat{u}_R \\cdot \\vec{dl}'$ misura lo spostamento <em>verso</em> o <em>lontano da</em> $O$, che non contribuisce all'angolo: per un segmento puramente radiale essa è massima mentre l'angolo sotteso è nullo.</p>
            <p>Viceversa, per un segmento tangente alla circonferenza (il caso $\\alpha = 0$) si ha $\\hat{u}_R \\cdot \\vec{dl}' = 0$, mentre $\\hat{t} \\cdot \\vec{dl}' = dl'$ e correttamente $d\\theta = dl'/R$. Le due scritture sono quindi coerenti tra loro: la prima porta in più l'informazione sul segno, cioè sul verso di percorrenza.</p>`
          }
        ],
        formulas: [
          { label: "Angolo piano (arco su circonferenza)", latex: "d\\theta = \\frac{dl}{R}" },
          { label: "Angolo piano orientato (segmento generico)", latex: "d\\theta = \\frac{\\hat{t} \\cdot \\vec{dl}'}{R}" }
        ]
      },

      {
        id: "s04-angolo-solido",
        type: "section",
        title: "Angolo solido: geometrico e orientato",
        icon: "🌐",
        content: `<p>Estendiamo l'idea dal piano allo spazio tridimensionale. L'analogo di una circonferenza è una <strong>sfera</strong>, e l'analogo di un arco è un'<strong>area</strong> su questa sfera.</p>
        <p>Dato un punto $O$ e una superficie infinitesima $dS_{\\text{sfera}}$ appartenente a una sfera di raggio $R_0$ centrata in $O$, si definisce <strong>angolo solido geometrico infinitesimo</strong> il rapporto adimensionale</p>
        <p>$$d\\Omega_{\\text{geom}} = \\frac{dS_{\\text{sfera}}}{R_0^2} .$$</p>
        <p>L'unità di misura è lo <strong>steradiante</strong> (sr). In questa forma $dS_{\\text{sfera}}$ è un'area, dunque positiva, e $d\\Omega_{\\text{geom}}$ è non negativo. Se la sfera viene orientata con la normale uscente, l'angolo solido <em>orientato</em> $d\\Omega$ coincide con quello geometrico.</p>
        <figure class="figura" data-id="fisica2_lez04a_d2"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04a_d2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170.614pt" height="166.289pt" viewBox="0 0 170.614 166.289" version="1.2"><style>#fisica2_lez04a_d2 [fill="rgb(0%,0%,0%)"],#fisica2_lez04a_d2 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez04a_d2 [stroke="rgb(0%,0%,0%)"],#fisica2_lez04a_d2 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez04a_d2 [fill="rgb(75%,75%,100%)"],#fisica2_lez04a_d2 [style*="fill:rgb(75%,75%,100%)"]{fill:#141452!important}[data-mode="light"] #fisica2_lez04a_d2 [fill="rgb(75%,75%,100%)"],[data-mode="light"] #fisica2_lez04a_d2 [style*="fill:rgb(75%,75%,100%)"]{fill:#bfbfff!important}#fisica2_lez04a_d2 [stroke="rgb(75%,75%,100%)"],#fisica2_lez04a_d2 [style*="stroke:rgb(75%,75%,100%)"]{stroke:#bfbfff!important}[data-mode="light"] #fisica2_lez04a_d2 [stroke="rgb(75%,75%,100%)"],[data-mode="light"] #fisica2_lez04a_d2 [style*="stroke:rgb(75%,75%,100%)"]{stroke:#bfbfff!important}#fisica2_lez04a_d2 [fill="rgb(0%,0%,59.999084%)"],#fisica2_lez04a_d2 [style*="fill:rgb(0%,0%,59.999084%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez04a_d2 [fill="rgb(0%,0%,59.999084%)"],[data-mode="light"] #fisica2_lez04a_d2 [style*="fill:rgb(0%,0%,59.999084%)"]{fill:#000099!important}#fisica2_lez04a_d2 [stroke="rgb(0%,0%,59.999084%)"],#fisica2_lez04a_d2 [style*="stroke:rgb(0%,0%,59.999084%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez04a_d2 [stroke="rgb(0%,0%,59.999084%)"],[data-mode="light"] #fisica2_lez04a_d2 [style*="stroke:rgb(0%,0%,59.999084%)"]{stroke:#000099!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph0-1">
<path style="stroke:none;" d="M 4.9375 -1.421875 C 4.9375 -1.515625 4.859375 -1.515625 4.828125 -1.515625 C 4.71875 -1.515625 4.71875 -1.484375 4.6875 -1.34375 C 4.515625 -0.6875 4.328125 -0.109375 3.921875 -0.109375 C 3.65625 -0.109375 3.625 -0.359375 3.625 -0.5625 C 3.625 -0.796875 3.65625 -0.875 3.6875 -1.046875 L 5.125 -6.78125 C 5.125 -6.78125 5.125 -6.890625 4.984375 -6.890625 C 4.84375 -6.890625 3.90625 -6.796875 3.734375 -6.78125 C 3.65625 -6.765625 3.59375 -6.71875 3.59375 -6.59375 C 3.59375 -6.46875 3.6875 -6.46875 3.828125 -6.46875 C 4.3125 -6.46875 4.328125 -6.40625 4.328125 -6.296875 L 4.296875 -6.109375 L 3.703125 -3.75 C 3.515625 -4.125 3.234375 -4.390625 2.78125 -4.390625 C 1.625 -4.390625 0.390625 -2.921875 0.390625 -1.484375 C 0.390625 -0.546875 0.9375 0.109375 1.71875 0.109375 C 1.921875 0.109375 2.40625 0.0625 3 -0.640625 C 3.078125 -0.21875 3.4375 0.109375 3.90625 0.109375 C 4.25 0.109375 4.484375 -0.125 4.640625 -0.4375 C 4.8125 -0.796875 4.9375 -1.421875 4.9375 -1.421875 Z M 3.546875 -3.125 L 3.0625 -1.1875 C 3 -1 3 -0.984375 2.859375 -0.8125 C 2.421875 -0.265625 2.015625 -0.109375 1.734375 -0.109375 C 1.234375 -0.109375 1.09375 -0.65625 1.09375 -1.046875 C 1.09375 -1.53125 1.421875 -2.765625 1.640625 -3.21875 C 1.953125 -3.796875 2.40625 -4.171875 2.796875 -4.171875 C 3.4375 -4.171875 3.578125 -3.359375 3.578125 -3.296875 C 3.578125 -3.234375 3.5625 -3.171875 3.546875 -3.125 Z M 3.546875 -3.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph0-2">
<path style="stroke:none;" d="M 5.484375 -2.328125 C 5.484375 -3.015625 5.15625 -3.359375 5 -3.5 C 4.765625 -3.71875 4.625 -3.765625 3.734375 -3.984375 L 3.078125 -4.171875 C 2.8125 -4.25 2.46875 -4.546875 2.46875 -5.0625 C 2.46875 -5.875 3.265625 -6.71875 4.203125 -6.71875 C 5.03125 -6.71875 5.640625 -6.296875 5.640625 -5.171875 C 5.640625 -4.859375 5.59375 -4.6875 5.59375 -4.625 C 5.59375 -4.625 5.59375 -4.53125 5.71875 -4.53125 C 5.8125 -4.53125 5.828125 -4.546875 5.859375 -4.71875 L 6.40625 -6.890625 C 6.40625 -6.921875 6.375 -7 6.296875 -7 C 6.234375 -7 6.234375 -6.984375 6.109375 -6.84375 L 5.640625 -6.28125 C 5.375 -6.75 4.859375 -7 4.21875 -7 C 2.953125 -7 1.765625 -5.859375 1.765625 -4.65625 C 1.765625 -3.84375 2.296875 -3.390625 2.796875 -3.25 L 3.859375 -2.96875 C 4.234375 -2.875 4.765625 -2.734375 4.765625 -1.921875 C 4.765625 -1.015625 3.953125 -0.09375 2.984375 -0.09375 C 2.34375 -0.09375 1.25 -0.3125 1.25 -1.53125 C 1.25 -1.78125 1.296875 -2.015625 1.3125 -2.078125 C 1.3125 -2.109375 1.328125 -2.140625 1.328125 -2.140625 C 1.328125 -2.25 1.265625 -2.25 1.203125 -2.25 C 1.15625 -2.25 1.140625 -2.25 1.109375 -2.21875 C 1.078125 -2.171875 0.515625 0.09375 0.515625 0.125 C 0.515625 0.171875 0.5625 0.21875 0.625 0.21875 C 0.671875 0.21875 0.6875 0.203125 0.796875 0.0625 L 1.296875 -0.5 C 1.71875 0.078125 2.390625 0.21875 2.96875 0.21875 C 4.3125 0.21875 5.484375 -1.09375 5.484375 -2.328125 Z M 5.484375 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph0-3">
<path style="stroke:none;" d="M 7.34375 -4.328125 C 7.34375 -5.921875 6.296875 -7 4.8125 -7 C 2.671875 -7 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.59375 0.21875 3.03125 0.21875 C 5.125 0.21875 7.34375 -1.953125 7.34375 -4.328125 Z M 6.453125 -4.71875 C 6.453125 -4 6.1875 -2.453125 5.203125 -1.234375 C 4.734375 -0.625 3.921875 -0.046875 3.078125 -0.046875 C 2.109375 -0.046875 1.40625 -0.84375 1.40625 -2.15625 C 1.40625 -2.59375 1.546875 -4.03125 2.3125 -5.203125 C 3 -6.234375 3.96875 -6.75 4.75 -6.75 C 5.5625 -6.75 6.453125 -6.1875 6.453125 -4.71875 Z M 6.453125 -4.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph0-4">
<path style="stroke:none;" d="M 6.40625 -5.484375 C 6.40625 -5.15625 6.25 -4.46875 5.859375 -4.078125 C 5.609375 -3.8125 5.078125 -3.5 4.1875 -3.5 L 3.078125 -3.5 L 3.71875 -6.09375 C 3.78125 -6.328125 3.8125 -6.421875 4 -6.453125 C 4.09375 -6.46875 4.40625 -6.46875 4.609375 -6.46875 C 5.3125 -6.46875 6.40625 -6.46875 6.40625 -5.484375 Z M 7.484375 -0.921875 C 7.484375 -1.046875 7.375 -1.046875 7.375 -1.046875 C 7.28125 -1.046875 7.265625 -0.96875 7.25 -0.90625 C 7 -0.171875 6.5625 0 6.34375 0 C 6.015625 0 5.9375 -0.21875 5.9375 -0.609375 C 5.9375 -0.90625 6 -1.421875 6.046875 -1.734375 C 6.0625 -1.875 6.078125 -2.0625 6.078125 -2.203125 C 6.078125 -2.96875 5.421875 -3.28125 5.15625 -3.375 C 6.15625 -3.59375 7.328125 -4.28125 7.328125 -5.28125 C 7.328125 -6.140625 6.4375 -6.78125 5.140625 -6.78125 L 2.3125 -6.78125 C 2.109375 -6.78125 2.03125 -6.78125 2.03125 -6.578125 C 2.03125 -6.46875 2.109375 -6.46875 2.296875 -6.46875 C 2.296875 -6.46875 2.515625 -6.46875 2.671875 -6.453125 C 2.859375 -6.421875 2.953125 -6.421875 2.953125 -6.296875 C 2.953125 -6.25 2.9375 -6.21875 2.90625 -6.109375 L 1.578125 -0.78125 C 1.484375 -0.390625 1.453125 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.40625 -0.3125 0.40625 -0.109375 C 0.40625 0 0.546875 0 0.546875 0 L 1.796875 -0.03125 L 3.0625 0 C 3.140625 0 3.25 0 3.25 -0.203125 C 3.25 -0.3125 3.171875 -0.3125 2.96875 -0.3125 C 2.609375 -0.3125 2.328125 -0.3125 2.328125 -0.484375 C 2.328125 -0.546875 2.34375 -0.59375 2.359375 -0.65625 L 3.015625 -3.28125 L 4.203125 -3.28125 C 5.09375 -3.28125 5.28125 -2.734375 5.28125 -2.375 C 5.28125 -2.234375 5.203125 -1.921875 5.140625 -1.703125 C 5.0625 -1.421875 4.984375 -1.046875 4.984375 -0.859375 C 4.984375 0.21875 6.171875 0.21875 6.296875 0.21875 C 7.140625 0.21875 7.484375 -0.78125 7.484375 -0.921875 Z M 7.484375 -0.921875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph1-1">
<path style="stroke:none;" d="M 2.828125 -0.90625 C 2.828125 -1.171875 2.703125 -1.375 2.53125 -1.546875 C 2.265625 -1.796875 1.9375 -1.84375 1.703125 -1.890625 C 1.140625 -1.984375 0.6875 -2.0625 0.6875 -2.4375 C 0.6875 -2.65625 0.875 -2.921875 1.546875 -2.921875 C 2.34375 -2.921875 2.375 -2.359375 2.390625 -2.171875 C 2.40625 -2.09375 2.484375 -2.09375 2.515625 -2.09375 C 2.625 -2.09375 2.625 -2.140625 2.625 -2.265625 L 2.625 -2.90625 C 2.625 -3.03125 2.625 -3.09375 2.53125 -3.09375 C 2.5 -3.09375 2.484375 -3.09375 2.390625 -3.015625 C 2.375 -3 2.3125 -2.9375 2.265625 -2.90625 C 2.0625 -3.046875 1.796875 -3.09375 1.546875 -3.09375 C 0.546875 -3.09375 0.3125 -2.578125 0.3125 -2.234375 C 0.3125 -2 0.40625 -1.828125 0.578125 -1.6875 C 0.84375 -1.453125 1.109375 -1.40625 1.53125 -1.34375 C 1.875 -1.28125 2.4375 -1.171875 2.4375 -0.71875 C 2.4375 -0.4375 2.25 -0.125 1.59375 -0.125 C 0.921875 -0.125 0.6875 -0.5625 0.5625 -1.03125 C 0.53125 -1.125 0.53125 -1.15625 0.4375 -1.15625 C 0.3125 -1.15625 0.3125 -1.109375 0.3125 -0.96875 L 0.3125 -0.109375 C 0.3125 0 0.3125 0.0625 0.40625 0.0625 C 0.46875 0.0625 0.609375 -0.078125 0.75 -0.234375 C 1.046875 0.0625 1.421875 0.0625 1.59375 0.0625 C 2.484375 0.0625 2.828125 -0.421875 2.828125 -0.90625 Z M 2.828125 -0.90625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph1-2">
<path style="stroke:none;" d="M 2.765625 -4.375 C 2.765625 -4.671875 2.46875 -4.890625 2.078125 -4.890625 C 1.53125 -4.890625 0.90625 -4.5 0.90625 -3.765625 L 0.90625 -2.984375 L 0.3125 -2.984375 L 0.3125 -2.734375 L 0.90625 -2.734375 L 0.90625 -0.546875 C 0.90625 -0.25 0.84375 -0.25 0.390625 -0.25 L 0.390625 0 C 0.421875 0 0.890625 -0.03125 1.171875 -0.03125 L 2.078125 0 L 2.078125 -0.25 L 1.9375 -0.25 C 1.421875 -0.25 1.421875 -0.328125 1.421875 -0.5625 L 1.421875 -2.734375 L 2.296875 -2.734375 L 2.296875 -2.984375 L 1.40625 -2.984375 L 1.40625 -3.765625 C 1.40625 -4.390625 1.78125 -4.6875 2.078125 -4.6875 C 2.140625 -4.6875 2.203125 -4.671875 2.28125 -4.65625 C 2.171875 -4.59375 2.125 -4.484375 2.125 -4.375 C 2.125 -4.1875 2.25 -4.0625 2.4375 -4.0625 C 2.625 -4.0625 2.765625 -4.1875 2.765625 -4.375 Z M 2.765625 -4.375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph1-3">
<path style="stroke:none;" d="M 3.25 -0.828125 C 3.25 -0.859375 3.234375 -0.921875 3.125 -0.921875 C 3.03125 -0.921875 3.03125 -0.890625 3 -0.8125 C 2.78125 -0.25 2.265625 -0.15625 2.015625 -0.15625 C 1.6875 -0.15625 1.375 -0.296875 1.171875 -0.5625 C 0.90625 -0.890625 0.90625 -1.3125 0.90625 -1.578125 L 3.046875 -1.578125 C 3.203125 -1.578125 3.25 -1.578125 3.25 -1.734375 C 3.25 -2.34375 2.90625 -3.09375 1.875 -3.09375 C 0.96875 -3.09375 0.265625 -2.375 0.265625 -1.515625 C 0.265625 -0.640625 1.046875 0.0625 1.96875 0.0625 C 2.90625 0.0625 3.25 -0.6875 3.25 -0.828125 Z M 2.765625 -1.765625 L 0.90625 -1.765625 C 0.984375 -2.734375 1.609375 -2.90625 1.875 -2.90625 C 2.71875 -2.90625 2.75 -1.9375 2.765625 -1.765625 Z M 2.765625 -1.765625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph1-4">
<path style="stroke:none;" d="M 2.828125 -2.609375 C 2.828125 -2.84375 2.609375 -3.0625 2.28125 -3.0625 C 1.921875 -3.0625 1.546875 -2.84375 1.34375 -2.3125 L 1.328125 -2.3125 L 1.328125 -3.0625 L 0.34375 -2.984375 L 0.34375 -2.734375 C 0.8125 -2.734375 0.859375 -2.6875 0.859375 -2.34375 L 0.859375 -0.546875 C 0.859375 -0.25 0.796875 -0.25 0.34375 -0.25 L 0.34375 0 C 0.375 0 0.84375 -0.03125 1.125 -0.03125 L 2.03125 0 L 2.03125 -0.25 L 1.890625 -0.25 C 1.375 -0.25 1.375 -0.328125 1.375 -0.5625 L 1.375 -1.578125 C 1.375 -2.171875 1.65625 -2.859375 2.3125 -2.859375 C 2.25 -2.8125 2.1875 -2.71875 2.1875 -2.609375 C 2.1875 -2.390625 2.375 -2.296875 2.5 -2.296875 C 2.671875 -2.296875 2.828125 -2.40625 2.828125 -2.609375 Z M 2.828125 -2.609375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph1-5">
<path style="stroke:none;" d="M 3.78125 -0.625 L 3.78125 -1 L 3.53125 -1 L 3.53125 -0.625 C 3.53125 -0.5625 3.53125 -0.234375 3.28125 -0.234375 C 3.03125 -0.234375 3.03125 -0.5625 3.03125 -0.640625 L 3.03125 -1.859375 C 3.03125 -2.234375 3.03125 -2.484375 2.703125 -2.75 C 2.421875 -2.984375 2.09375 -3.09375 1.671875 -3.09375 C 1.015625 -3.09375 0.5625 -2.84375 0.5625 -2.421875 C 0.5625 -2.203125 0.703125 -2.078125 0.890625 -2.078125 C 1.078125 -2.078125 1.21875 -2.21875 1.21875 -2.40625 C 1.21875 -2.53125 1.15625 -2.671875 0.96875 -2.71875 C 1.21875 -2.90625 1.625 -2.90625 1.671875 -2.90625 C 2.046875 -2.90625 2.484375 -2.640625 2.484375 -2.0625 L 2.484375 -1.84375 C 2.09375 -1.828125 1.640625 -1.8125 1.125 -1.625 C 0.5 -1.390625 0.3125 -1.015625 0.3125 -0.703125 C 0.3125 -0.109375 1.03125 0.0625 1.53125 0.0625 C 2.078125 0.0625 2.40625 -0.25 2.546875 -0.515625 C 2.578125 -0.234375 2.765625 0.03125 3.09375 0.03125 C 3.09375 0.03125 3.78125 0.03125 3.78125 -0.625 Z M 2.484375 -0.984375 C 2.484375 -0.3125 1.890625 -0.125 1.578125 -0.125 C 1.234375 -0.125 0.890625 -0.359375 0.890625 -0.703125 C 0.890625 -1.078125 1.234375 -1.609375 2.484375 -1.671875 Z M 2.484375 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph2-1">
<path style="stroke:none;" d="M 6.71875 -1.609375 L 6.46875 -1.609375 C 6.421875 -1.34375 6.375 -1.125 6.296875 -0.890625 C 6.234375 -0.71875 6.21875 -0.640625 5.640625 -0.640625 L 4.84375 -0.640625 C 4.96875 -1.203125 5.28125 -1.671875 5.71875 -2.328125 C 6.1875 -3.03125 6.59375 -3.71875 6.59375 -4.5 C 6.59375 -5.890625 5.265625 -7 3.578125 -7 C 1.875 -7 0.5625 -5.859375 0.5625 -4.5 C 0.5625 -3.71875 0.96875 -3.03125 1.421875 -2.328125 C 1.859375 -1.671875 2.1875 -1.203125 2.3125 -0.640625 L 1.515625 -0.640625 C 0.9375 -0.640625 0.90625 -0.71875 0.859375 -0.875 C 0.78125 -1.09375 0.734375 -1.359375 0.6875 -1.609375 L 0.4375 -1.609375 L 0.765625 0 L 2.34375 0 C 2.5625 0 2.59375 0 2.59375 -0.203125 C 2.59375 -0.90625 2.296875 -1.78125 2.0625 -2.40625 C 1.859375 -2.984375 1.578125 -3.765625 1.578125 -4.515625 C 1.578125 -6.109375 2.671875 -6.78125 3.578125 -6.78125 C 4.53125 -6.78125 5.578125 -6.0625 5.578125 -4.515625 C 5.578125 -3.765625 5.3125 -3.015625 5.015625 -2.203125 C 4.875 -1.78125 4.546875 -0.890625 4.546875 -0.203125 C 4.546875 0 4.578125 0 4.8125 0 L 6.390625 0 Z M 6.71875 -1.609375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d2-glyph3-1">
<path style="stroke:none;" d="M 3.578125 -2.21875 C 3.578125 -2.96875 3.484375 -3.53125 3.171875 -4.015625 C 2.953125 -4.328125 2.53125 -4.609375 1.96875 -4.609375 C 0.359375 -4.609375 0.359375 -2.71875 0.359375 -2.21875 C 0.359375 -1.71875 0.359375 0.140625 1.96875 0.140625 C 3.578125 0.140625 3.578125 -1.71875 3.578125 -2.21875 Z M 2.953125 -2.296875 C 2.953125 -1.796875 2.953125 -1.28125 2.859375 -0.84375 C 2.71875 -0.203125 2.25 -0.0625 1.96875 -0.0625 C 1.65625 -0.0625 1.234375 -0.25 1.09375 -0.8125 C 0.984375 -1.21875 0.984375 -1.796875 0.984375 -2.296875 C 0.984375 -2.8125 0.984375 -3.34375 1.09375 -3.71875 C 1.234375 -4.265625 1.6875 -4.40625 1.96875 -4.40625 C 2.34375 -4.40625 2.703125 -4.1875 2.828125 -3.78125 C 2.9375 -3.40625 2.953125 -2.90625 2.953125 -2.296875 Z M 2.953125 -2.296875 "/>
</symbol>
</g>
<clipPath id="fisica2_lez04a_d2-clip1">
  <path d="M 0.171875 3 L 163 3 L 163 165.582031 L 0.171875 165.582031 Z M 0.171875 3 "/>
</clipPath>
<clipPath id="fisica2_lez04a_d2-clip2">
  <path d="M 0.171875 56 L 163 56 L 163 114 L 0.171875 114 Z M 0.171875 56 "/>
</clipPath>
</defs>
<g id="fisica2_lez04a_d2-surface1">
<g clip-path="url(#fisica2_lez04a_d2-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 76.536314 0.00157296 C 76.536314 42.27138 42.269329 76.538365 -0.000477813 76.538365 C -42.270285 76.538365 -76.53727 42.27138 -76.53727 0.00157296 C -76.53727 -42.272157 -42.270285 -76.535219 -0.000477813 -76.535219 C 42.269329 -76.535219 76.536314 -42.272157 76.536314 0.00157296 Z M 76.536314 0.00157296 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
</g>
<g clip-path="url(#fisica2_lez04a_d2-clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 76.536314 0.00157296 C 76.536314 12.680554 42.269329 22.96261 -0.000477813 22.96261 C -42.270285 22.96261 -76.53727 12.680554 -76.53727 0.00157296 C -76.53727 -12.681331 -42.270285 -22.959465 -0.000477813 -22.959465 C 42.269329 -22.959465 76.536314 -12.681331 76.536314 0.00157296 Z M 76.536314 0.00157296 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.000477813 0.00157296 L 54.120567 54.118695 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.000477813 0.00157296 L 32.344261 69.367209 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
<path style="fill-rule:nonzero;fill:rgb(75%,75%,100%);fill-opacity:0.6;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,59.999084%);stroke-opacity:1;stroke-miterlimit:10;" d="M 54.08526 54.130463 C 55.540675 56.209628 51.853101 61.297697 45.850984 65.503101 C 39.848868 69.704582 33.803599 71.426758 32.352107 69.347594 C 30.896691 67.272352 34.580343 62.180361 40.58246 57.978879 C 46.584576 53.777398 52.629845 52.051299 54.08526 54.130463 Z M 54.08526 54.130463 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph0-1" x="134.858135" y="14.163442"/>
  <use xlink:href="#fisica2_lez04a_d2-glyph0-2" x="140.021591" y="14.163442"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph1-1" x="146.105046" y="15.651081"/>
  <use xlink:href="#fisica2_lez04a_d2-glyph1-2" x="149.24795" y="15.651081"/>
  <use xlink:href="#fisica2_lez04a_d2-glyph1-3" x="151.707554" y="15.651081"/>
  <use xlink:href="#fisica2_lez04a_d2-glyph1-4" x="155.234467" y="15.651081"/>
  <use xlink:href="#fisica2_lez04a_d2-glyph1-5" x="158.334317" y="15.651081"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 15.153885 15.152013 C 13.384634 16.921265 11.321161 18.364911 9.057618 19.424108 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph0-1" x="92.450457" y="62.847285"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph2-1" x="97.613382" y="62.847285"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph0-3" x="69.199869" y="95.48872"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000477813 0.00157296 L 76.136173 0.00157296 " transform="matrix(0.995743,0,0,-0.995743,80.547351,85.204691)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072305 2.390651 C -1.691779 0.95485 -0.848344 0.280103 -0.000986615 0.00157296 C -0.848344 -0.28088 -1.691779 -0.955627 -2.072305 -2.391428 " transform="matrix(0.995743,0,0,-0.995743,156.559576,85.204691)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph0-4" x="112.661043" y="95.48872"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d2-glyph3-1" x="120.192839" y="96.976359"/>
</g>
</g>
</svg></figure>
        <p>Il cono con vertice in $O$ intercetta sulla sfera di raggio $R_0$ la porzione di superficie $dS_{\\text{sfera}}$: le generatrici tratteggiate congiungono $O$ al bordo della porzione e terminano sulla sfera, come il raggio $R_0$.</p>
        <p>Come per l'angolo piano, calcoliamo l'angolo solido totale sotteso dall'intera sfera attorno a $O$. L'area totale è $S = 4\\pi R_0^2$, quindi</p>
        <p>$$\\Omega_{\\text{tot}} = \\int_{\\text{sfera}} d\\Omega_{\\text{geom}} = \\frac{1}{R_0^2} \\int dS_{\\text{sfera}} = \\frac{4\\pi R_0^2}{R_0^2} = 4\\pi \\ \\text{sr} .$$</p>`,
        subsections: [
          {
            subtitle: "Teorema: angolo solido totale attorno a un punto interno",
            content: `<p>Sia $S$ una superficie chiusa regolare, orientata con normale $\\hat{n}$ <strong>uscente</strong>, e sia $O$ un punto <strong>interno</strong> a $S$. Allora l'angolo solido <em>orientato</em> sotteso da $S$ rispetto a $O$ vale</p>
            <p>$$\\Omega = \\oint_S \\frac{\\hat{n} \\cdot \\hat{u}_r}{r^2} \\, dS = 4\\pi \\ \\text{sr},$$</p>
            <p>dove $r$ è la distanza dell'elemento $dS$ da $O$ e $\\hat{u}_r$ il versore radiale da $O$ all'elemento. Il valore $4\\pi$ è <strong>indipendente dalla forma della superficie e dalla posizione di $O$ al suo interno</strong>.</p>`
          },
          {
            subtitle: "Perché serve l'orientazione: $4\\pi$ non è un'area",
            content: `<p>Il conto diretto sulla sfera usa un'area positiva e dunque un angolo solido geometrico. Nel teorema compare invece l'angolo solido <em>orientato</em>, il cui integrando $(\\hat{n} \\cdot \\hat{u}_r)/r^2$ può essere negativo.</p>
            <p>La distinzione è inessenziale per una superficie convessa, dove la normale uscente ha sempre $\\hat{n} \\cdot \\hat{u}_r \\gt 0$, ma diventa cruciale per una superficie <strong>non convessa</strong>: in tal caso una stessa direzione uscente da $O$ può attraversare $S$ più volte, con contributi alternativamente positivi e negativi che si cancellano a coppie, lasciando il valore netto $4\\pi$.</p>
            <p>Se invece si sommassero i moduli si otterrebbe</p>
            <p>$$\\oint_S \\frac{|\\hat{n} \\cdot \\hat{u}_r|}{r^2} \\, dS \\ \\ge \\ 4\\pi ,$$</p>
            <p>cioè un valore <em>almeno</em> pari a $4\\pi$ e in generale maggiore, perché alcune direzioni vengono contate più di una volta. Attenzione: la disuguaglianza è <em>stretta</em> solo quando gli attraversamenti multipli riguardano un insieme di direzioni di misura non nulla. Esistono infatti superfici non convesse ma <em>stellate</em> rispetto a $O$, cioè tali che ogni semiretta uscente da $O$ le attraversa esattamente una volta: per queste la normale uscente ha sempre $\\hat{n} \\cdot \\hat{u}_r \\gt 0$ e anche l'integrale dei moduli vale esattamente $4\\pi$. La dimostrazione completa verrà presentata nelle lezioni successive, in connessione con il teorema di Gauss.</p>`
          },
          {
            subtitle: "Generalizzazione a un elemento di superficie qualsiasi",
            content: `<p>Generalizziamo la definizione a una superficie infinitesima qualsiasi $\\vec{dS} = \\hat{n} \\, dS$, non necessariamente parte di una sfera centrata nell'origine. Indichiamo con $r$ la <strong>distanza dell'elemento da $O$</strong> (che su una superficie generica varia da punto a punto) e con $R_0$ il raggio della sfera di riferimento su cui proiettiamo.</p>
            <figure class="figura" data-id="fisica2_lez04a_d3"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04a_d3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="185.467pt" height="124.217pt" viewBox="0 0 185.467 124.217" version="1.2"><style>#fisica2_lez04a_d3 [fill="rgb(0%,0%,0%)"],#fisica2_lez04a_d3 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez04a_d3 [stroke="rgb(0%,0%,0%)"],#fisica2_lez04a_d3 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez04a_d3 [fill="rgb(100%,0%,0%)"],#fisica2_lez04a_d3 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez04a_d3 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04a_d3 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez04a_d3 [stroke="rgb(100%,0%,0%)"],#fisica2_lez04a_d3 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez04a_d3 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04a_d3 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-1">
<path style="stroke:none;" d="M 3.296875 -1.140625 C 3.296875 -1.546875 3.125 -1.78125 2.921875 -1.984375 C 2.625 -2.28125 2.296875 -2.34375 1.640625 -2.46875 C 1.40625 -2.515625 0.75 -2.625 0.75 -3.140625 C 0.75 -3.421875 0.96875 -3.796875 1.765625 -3.796875 C 2.734375 -3.796875 2.796875 -3.0625 2.8125 -2.828125 C 2.828125 -2.71875 2.828125 -2.671875 2.9375 -2.671875 C 3.0625 -2.671875 3.0625 -2.734375 3.0625 -2.90625 L 3.0625 -3.765625 C 3.0625 -3.90625 3.0625 -3.984375 2.953125 -3.984375 C 2.90625 -3.984375 2.890625 -3.984375 2.78125 -3.890625 C 2.765625 -3.859375 2.6875 -3.78125 2.625 -3.734375 C 2.34375 -3.9375 2.078125 -3.984375 1.765625 -3.984375 C 0.59375 -3.984375 0.296875 -3.34375 0.296875 -2.890625 C 0.296875 -2.59375 0.421875 -2.375 0.625 -2.171875 C 0.9375 -1.890625 1.28125 -1.828125 1.734375 -1.75 C 2.1875 -1.671875 2.328125 -1.640625 2.53125 -1.484375 C 2.625 -1.421875 2.84375 -1.25 2.84375 -0.90625 C 2.84375 -0.125 1.9375 -0.125 1.8125 -0.125 C 0.90625 -0.125 0.671875 -0.875 0.5625 -1.359375 C 0.546875 -1.453125 0.53125 -1.5 0.421875 -1.5 C 0.296875 -1.5 0.296875 -1.4375 0.296875 -1.28125 L 0.296875 -0.140625 C 0.296875 0.015625 0.296875 0.09375 0.40625 0.09375 C 0.46875 0.09375 0.46875 0.09375 0.625 -0.078125 C 0.671875 -0.140625 0.765625 -0.25 0.8125 -0.296875 C 1.1875 0.078125 1.59375 0.09375 1.8125 0.09375 C 2.90625 0.09375 3.296875 -0.546875 3.296875 -1.140625 Z M 3.296875 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-2">
<path style="stroke:none;" d="M 3.265625 -5.640625 C 3.265625 -5.984375 2.921875 -6.28125 2.4375 -6.28125 C 1.734375 -6.28125 1 -5.75 1 -4.859375 L 1 -3.84375 L 0.296875 -3.84375 L 0.296875 -3.5625 L 1 -3.5625 L 1 -0.6875 C 1 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.796875 -0.015625 0.90625 -0.03125 1.359375 -0.03125 L 2.5 0 L 2.5 -0.28125 L 2.3125 -0.28125 C 1.671875 -0.28125 1.640625 -0.375 1.640625 -0.703125 L 1.640625 -3.5625 L 2.671875 -3.5625 L 2.671875 -3.84375 L 1.609375 -3.84375 L 1.609375 -4.84375 C 1.609375 -5.65625 2.046875 -6.0625 2.4375 -6.0625 C 2.515625 -6.0625 2.609375 -6.03125 2.703125 -6 C 2.609375 -5.96875 2.46875 -5.859375 2.46875 -5.640625 C 2.46875 -5.40625 2.640625 -5.25 2.859375 -5.25 C 3.09375 -5.25 3.265625 -5.421875 3.265625 -5.640625 Z M 3.265625 -5.640625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-3">
<path style="stroke:none;" d="M 3.796875 -1.0625 C 3.796875 -1.125 3.765625 -1.171875 3.671875 -1.171875 C 3.59375 -1.171875 3.5625 -1.109375 3.546875 -1.078125 C 3.25 -0.171875 2.453125 -0.15625 2.328125 -0.15625 C 1.890625 -0.15625 1.53125 -0.390625 1.328125 -0.6875 C 1.03125 -1.125 1.03125 -1.671875 1.03125 -2.046875 L 3.5625 -2.046875 C 3.765625 -2.046875 3.796875 -2.046875 3.796875 -2.234375 C 3.796875 -3.140625 3.296875 -3.984375 2.171875 -3.984375 C 1.09375 -3.984375 0.265625 -3.0625 0.265625 -1.953125 C 0.265625 -0.796875 1.1875 0.09375 2.28125 0.09375 C 3.359375 0.09375 3.796875 -0.859375 3.796875 -1.0625 Z M 3.203125 -2.25 L 1.03125 -2.25 C 1.109375 -3.625 1.921875 -3.765625 2.171875 -3.765625 C 2.65625 -3.765625 3.1875 -3.390625 3.203125 -2.25 Z M 3.203125 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-4">
<path style="stroke:none;" d="M 3.328125 -3.390625 C 3.328125 -3.671875 3.0625 -3.9375 2.65625 -3.9375 C 2.125 -3.9375 1.75 -3.5625 1.546875 -3.015625 L 1.53125 -3.015625 L 1.53125 -3.9375 L 0.265625 -3.84375 L 0.265625 -3.5625 C 0.875 -3.5625 0.953125 -3.5 0.953125 -3.0625 L 0.953125 -0.6875 C 0.953125 -0.28125 0.859375 -0.28125 0.265625 -0.28125 L 0.265625 0 C 0.734375 -0.015625 0.859375 -0.03125 1.3125 -0.03125 L 2.4375 0 L 2.4375 -0.28125 L 2.265625 -0.28125 C 1.609375 -0.28125 1.578125 -0.375 1.578125 -0.703125 L 1.578125 -2.046875 C 1.578125 -2.40625 1.6875 -3.71875 2.703125 -3.71875 L 2.703125 -3.703125 C 2.6875 -3.703125 2.53125 -3.59375 2.53125 -3.375 C 2.53125 -3.140625 2.71875 -2.984375 2.9375 -2.984375 C 3.125 -2.984375 3.328125 -3.125 3.328125 -3.390625 Z M 3.328125 -3.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-5">
<path style="stroke:none;" d="M 4.421875 -0.796875 L 4.421875 -1.296875 L 4.171875 -1.296875 L 4.171875 -0.796875 C 4.171875 -0.703125 4.171875 -0.265625 3.859375 -0.265625 C 3.53125 -0.265625 3.53125 -0.6875 3.53125 -0.828125 L 3.53125 -2.390625 C 3.53125 -2.890625 3.53125 -3.203125 3.140625 -3.5625 C 2.8125 -3.859375 2.375 -3.984375 1.9375 -3.984375 C 1.1875 -3.984375 0.5625 -3.609375 0.5625 -3.046875 C 0.5625 -2.765625 0.75 -2.625 0.984375 -2.625 C 1.21875 -2.625 1.390625 -2.796875 1.390625 -3.03125 C 1.390625 -3.40625 0.984375 -3.453125 0.984375 -3.453125 C 1.234375 -3.6875 1.65625 -3.765625 1.921875 -3.765625 C 2.375 -3.765625 2.875 -3.421875 2.875 -2.640625 L 2.875 -2.34375 C 2.390625 -2.328125 1.734375 -2.28125 1.125 -2 C 0.484375 -1.6875 0.296875 -1.234375 0.296875 -0.875 C 0.296875 -0.140625 1.15625 0.09375 1.75 0.09375 C 2.5 0.09375 2.828125 -0.390625 2.953125 -0.640625 C 3 -0.265625 3.265625 0.046875 3.640625 0.046875 C 3.859375 0.046875 4.421875 -0.078125 4.421875 -0.796875 Z M 2.875 -1.25 C 2.875 -0.390625 2.203125 -0.125 1.8125 -0.125 C 1.390625 -0.125 1 -0.421875 1 -0.875 C 1 -1.453125 1.515625 -2.078125 2.875 -2.140625 Z M 2.875 -1.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-6">
<path style="stroke:none;" d="M 4.8125 0 L 4.8125 -0.28125 C 4.203125 -0.28125 4.125 -0.34375 4.125 -0.78125 L 4.125 -6.1875 L 2.8125 -6.078125 L 2.8125 -5.8125 C 3.40625 -5.8125 3.484375 -5.75 3.484375 -5.3125 L 3.484375 -3.40625 C 3.453125 -3.46875 3.046875 -3.9375 2.34375 -3.9375 C 1.25 -3.9375 0.296875 -3.0625 0.296875 -1.921875 C 0.296875 -0.796875 1.1875 0.09375 2.25 0.09375 C 2.90625 0.09375 3.296875 -0.28125 3.46875 -0.46875 L 3.46875 0.09375 Z M 3.46875 -1.0625 C 3.46875 -0.90625 3.46875 -0.875 3.328125 -0.6875 C 3.0625 -0.296875 2.640625 -0.125 2.28125 -0.125 C 1.90625 -0.125 1.546875 -0.34375 1.3125 -0.71875 C 1.09375 -1.09375 1.0625 -1.625 1.0625 -1.90625 C 1.0625 -2.328125 1.125 -2.796875 1.359375 -3.15625 C 1.546875 -3.4375 1.921875 -3.71875 2.390625 -3.71875 C 2.765625 -3.71875 3.125 -3.53125 3.359375 -3.1875 C 3.46875 -3.046875 3.46875 -3.03125 3.46875 -2.875 Z M 3.46875 -1.0625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-7">
<path style="stroke:none;" d="M 2.25 0 L 2.25 -0.28125 C 1.671875 -0.28125 1.640625 -0.328125 1.640625 -0.671875 L 1.640625 -3.9375 L 0.359375 -3.84375 L 0.359375 -3.5625 C 0.921875 -3.5625 1 -3.515625 1 -3.078125 L 1 -0.6875 C 1 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.71875 -0.015625 0.90625 -0.03125 1.296875 -0.03125 C 1.4375 -0.03125 1.8125 -0.03125 2.25 0 Z M 1.75 -5.375 C 1.75 -5.640625 1.546875 -5.84375 1.28125 -5.84375 C 1 -5.84375 0.796875 -5.640625 0.796875 -5.375 C 0.796875 -5.109375 1 -4.890625 1.28125 -4.890625 C 1.546875 -4.890625 1.75 -5.109375 1.75 -5.375 Z M 1.75 -5.375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-8">
<path style="stroke:none;" d="M 4.4375 -3.59375 C 4.4375 -3.765625 4.3125 -4.03125 3.96875 -4.03125 C 3.703125 -4.03125 3.296875 -3.9375 3 -3.609375 C 2.75 -3.8125 2.40625 -3.9375 2.03125 -3.9375 C 1.1875 -3.9375 0.546875 -3.328125 0.546875 -2.625 C 0.546875 -2.171875 0.8125 -1.859375 0.953125 -1.71875 C 0.9375 -1.703125 0.6875 -1.390625 0.6875 -0.984375 C 0.6875 -0.671875 0.828125 -0.359375 1.0625 -0.203125 C 0.609375 -0.046875 0.265625 0.28125 0.265625 0.6875 C 0.265625 1.328125 1.140625 1.828125 2.28125 1.828125 C 3.375 1.828125 4.3125 1.359375 4.3125 0.671875 C 4.3125 0.3125 4.140625 -0.078125 3.8125 -0.296875 C 3.3125 -0.609375 2.796875 -0.609375 1.953125 -0.609375 C 1.765625 -0.609375 1.484375 -0.609375 1.421875 -0.625 C 1.15625 -0.671875 0.984375 -0.921875 0.984375 -1.203125 C 0.984375 -1.34375 1.03125 -1.484375 1.109375 -1.59375 C 1.34375 -1.453125 1.609375 -1.3125 2.015625 -1.3125 C 2.875 -1.3125 3.515625 -1.921875 3.515625 -2.625 C 3.515625 -3.0625 3.265625 -3.359375 3.140625 -3.484375 C 3.5 -3.8125 3.921875 -3.8125 4.03125 -3.8125 C 3.984375 -3.78125 3.90625 -3.734375 3.90625 -3.578125 C 3.90625 -3.484375 3.96875 -3.3125 4.171875 -3.3125 C 4.296875 -3.3125 4.4375 -3.40625 4.4375 -3.59375 Z M 2.828125 -2.625 C 2.828125 -2.421875 2.828125 -1.5625 2.015625 -1.5625 C 1.234375 -1.5625 1.234375 -2.4375 1.234375 -2.625 C 1.234375 -2.875 1.25 -3.171875 1.390625 -3.390625 C 1.53125 -3.5625 1.765625 -3.703125 2.015625 -3.703125 C 2.828125 -3.703125 2.828125 -2.828125 2.828125 -2.625 Z M 3.8125 0.6875 C 3.8125 1.1875 3.125 1.59375 2.28125 1.59375 C 1.421875 1.59375 0.75 1.171875 0.75 0.6875 C 0.75 0.546875 0.84375 -0.046875 1.609375 -0.046875 L 2.4375 -0.046875 C 2.71875 -0.046875 3.8125 -0.03125 3.8125 0.6875 Z M 3.8125 0.6875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph0-9">
<path style="stroke:none;" d="M 4.3125 -1.890625 C 4.3125 -3.0625 3.390625 -3.984375 2.28125 -3.984375 C 1.15625 -3.984375 0.265625 -3.03125 0.265625 -1.890625 C 0.265625 -0.78125 1.1875 0.09375 2.28125 0.09375 C 3.40625 0.09375 4.3125 -0.796875 4.3125 -1.890625 Z M 3.546875 -1.984375 C 3.546875 -1.640625 3.546875 -1.125 3.328125 -0.734375 C 3.078125 -0.328125 2.65625 -0.15625 2.28125 -0.15625 C 1.84375 -0.15625 1.46875 -0.375 1.265625 -0.71875 C 1.03125 -1.09375 1.03125 -1.5625 1.03125 -1.984375 C 1.03125 -2.3125 1.03125 -2.8125 1.25 -3.171875 C 1.515625 -3.640625 1.953125 -3.765625 2.28125 -3.765625 C 2.78125 -3.765625 3.15625 -3.484375 3.328125 -3.171875 C 3.53125 -2.8125 3.546875 -2.34375 3.546875 -1.984375 Z M 3.546875 -1.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph1-1">
<path style="stroke:none;" d="M 5.875 -4.90625 C 5.875 -4.578125 5.75 -3.90625 5.234375 -3.53125 C 5.015625 -3.390625 4.578125 -3.15625 3.859375 -3.15625 L 2.8125 -3.15625 L 3.390625 -5.453125 C 3.453125 -5.6875 3.46875 -5.765625 3.640625 -5.796875 C 3.71875 -5.8125 4.015625 -5.8125 4.1875 -5.8125 C 4.90625 -5.8125 5.875 -5.8125 5.875 -4.90625 Z M 6.90625 -0.84375 C 6.90625 -0.90625 6.84375 -0.953125 6.78125 -0.953125 C 6.6875 -0.953125 6.6875 -0.90625 6.640625 -0.796875 C 6.5 -0.34375 6.15625 -0.03125 5.828125 -0.03125 C 5.5 -0.03125 5.484375 -0.296875 5.484375 -0.546875 C 5.484375 -0.78125 5.546875 -1.296875 5.546875 -1.359375 C 5.5625 -1.5 5.609375 -1.859375 5.609375 -1.984375 C 5.609375 -2.5 5.296875 -2.84375 4.78125 -3.015625 C 5.984375 -3.328125 6.734375 -4.015625 6.734375 -4.734375 C 6.734375 -5.515625 5.890625 -6.078125 4.703125 -6.078125 L 2.125 -6.078125 C 1.953125 -6.078125 1.859375 -6.078125 1.859375 -5.921875 C 1.859375 -5.8125 1.9375 -5.8125 2.125 -5.8125 C 2.15625 -5.8125 2.3125 -5.8125 2.453125 -5.796875 C 2.609375 -5.765625 2.671875 -5.75 2.671875 -5.65625 C 2.671875 -5.609375 2.65625 -5.578125 2.640625 -5.484375 L 1.4375 -0.671875 C 1.359375 -0.359375 1.34375 -0.28125 0.671875 -0.28125 C 0.5 -0.28125 0.40625 -0.28125 0.40625 -0.109375 C 0.40625 -0.015625 0.46875 0 0.53125 0 L 1.09375 -0.015625 C 1.28125 -0.03125 1.296875 -0.03125 1.640625 -0.03125 L 2.21875 -0.015625 L 2.78125 0 C 2.84375 0 2.96875 0 2.96875 -0.15625 C 2.96875 -0.28125 2.875 -0.28125 2.6875 -0.28125 C 2.65625 -0.28125 2.5 -0.28125 2.34375 -0.296875 C 2.15625 -0.328125 2.140625 -0.359375 2.140625 -0.4375 C 2.140625 -0.46875 2.140625 -0.484375 2.1875 -0.640625 L 2.765625 -2.9375 L 3.859375 -2.9375 C 4.65625 -2.9375 4.859375 -2.46875 4.859375 -2.125 C 4.859375 -2.0625 4.859375 -2 4.8125 -1.8125 C 4.59375 -0.984375 4.59375 -0.90625 4.59375 -0.78125 C 4.59375 0.03125 5.359375 0.203125 5.8125 0.203125 C 6.578125 0.203125 6.90625 -0.703125 6.90625 -0.84375 Z M 6.90625 -0.84375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph1-2">
<path style="stroke:none;" d="M 4.578125 -1.28125 C 4.578125 -1.3125 4.546875 -1.375 4.46875 -1.375 C 4.359375 -1.375 4.34375 -1.34375 4.3125 -1.171875 C 4.109375 -0.390625 3.921875 -0.125 3.640625 -0.125 C 3.421875 -0.125 3.359375 -0.34375 3.359375 -0.53125 C 3.359375 -0.65625 3.40625 -0.90625 3.421875 -0.921875 L 4.671875 -5.875 C 4.703125 -6 4.703125 -6.015625 4.703125 -6.0625 C 4.703125 -6.140625 4.65625 -6.1875 4.5625 -6.1875 C 4.4375 -6.1875 3.65625 -6.109375 3.484375 -6.09375 C 3.390625 -6.078125 3.296875 -6.078125 3.296875 -5.921875 C 3.296875 -5.8125 3.390625 -5.8125 3.53125 -5.8125 C 3.953125 -5.8125 3.953125 -5.75 3.953125 -5.671875 C 3.953125 -5.609375 3.875 -5.296875 3.828125 -5.109375 C 3.703125 -4.625 3.78125 -4.90625 3.65625 -4.421875 L 3.40625 -3.390625 C 3.234375 -3.703125 2.953125 -3.9375 2.5625 -3.9375 C 1.515625 -3.9375 0.375 -2.703125 0.375 -1.34375 C 0.375 -0.359375 1 0.09375 1.59375 0.09375 C 2.171875 0.09375 2.640625 -0.390625 2.78125 -0.546875 C 2.890625 -0.0625 3.328125 0.09375 3.609375 0.09375 C 3.875 0.09375 4.09375 -0.015625 4.296875 -0.390625 C 4.453125 -0.6875 4.578125 -1.234375 4.578125 -1.28125 Z M 3.265625 -2.8125 L 2.828125 -1.078125 C 2.78125 -0.9375 2.78125 -0.921875 2.640625 -0.734375 C 2.3125 -0.359375 1.953125 -0.125 1.625 -0.125 C 1.1875 -0.125 1.03125 -0.578125 1.03125 -0.96875 C 1.03125 -1.390625 1.296875 -2.421875 1.5 -2.84375 C 1.796875 -3.390625 2.203125 -3.71875 2.5625 -3.71875 C 3.15625 -3.71875 3.28125 -3 3.28125 -2.953125 C 3.28125 -2.90625 3.265625 -2.84375 3.265625 -2.8125 Z M 3.265625 -2.8125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph1-3">
<path style="stroke:none;" d="M 5.03125 -2.078125 C 5.03125 -3.171875 4.15625 -3.40625 3.890625 -3.46875 L 3.078125 -3.671875 C 2.78125 -3.75 2.234375 -3.890625 2.234375 -4.5625 C 2.234375 -5.25 2.953125 -6.03125 3.84375 -6.03125 C 4.1875 -6.03125 4.546875 -5.9375 4.796875 -5.6875 C 5.125 -5.359375 5.140625 -4.875 5.140625 -4.640625 C 5.140625 -4.34375 5.109375 -4.25 5.109375 -4.171875 C 5.109375 -4.109375 5.140625 -4.0625 5.234375 -4.0625 C 5.328125 -4.0625 5.328125 -4.078125 5.375 -4.25 L 5.828125 -6.03125 C 5.84375 -6.140625 5.84375 -6.15625 5.84375 -6.1875 C 5.84375 -6.1875 5.84375 -6.28125 5.75 -6.28125 C 5.703125 -6.28125 5.6875 -6.265625 5.578125 -6.140625 C 5.453125 -6.015625 5.5625 -6.125 5.15625 -5.640625 C 4.828125 -6.140625 4.3125 -6.28125 3.84375 -6.28125 C 2.6875 -6.28125 1.609375 -5.25 1.609375 -4.1875 C 1.609375 -3.828125 1.71875 -3.515625 1.953125 -3.265625 C 2.203125 -3 2.4375 -2.953125 3.078125 -2.78125 L 3.828125 -2.59375 C 4.109375 -2.5 4.40625 -2.21875 4.40625 -1.703125 C 4.40625 -0.921875 3.640625 -0.078125 2.75 -0.078125 C 2.234375 -0.078125 1.171875 -0.234375 1.171875 -1.375 C 1.171875 -1.453125 1.171875 -1.59375 1.21875 -1.859375 C 1.234375 -1.890625 1.234375 -1.921875 1.234375 -1.921875 C 1.234375 -1.953125 1.21875 -2.015625 1.109375 -2.015625 C 1 -2.015625 1 -1.984375 0.96875 -1.828125 L 0.484375 0.09375 C 0.484375 0.15625 0.53125 0.203125 0.59375 0.203125 C 0.640625 0.203125 0.65625 0.1875 0.765625 0.0625 C 0.8125 0 1.078125 -0.328125 1.1875 -0.4375 C 1.640625 0.15625 2.46875 0.203125 2.734375 0.203125 C 3.96875 0.203125 5.03125 -0.953125 5.03125 -2.078125 Z M 5.03125 -2.078125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph2-1">
<path style="stroke:none;" d="M 3.265625 -1.890625 C 3.265625 -2.328125 3.265625 -3.953125 1.8125 -3.953125 C 0.359375 -3.953125 0.359375 -2.328125 0.359375 -1.890625 C 0.359375 -1.46875 0.359375 0.125 1.8125 0.125 C 3.265625 0.125 3.265625 -1.46875 3.265625 -1.890625 Z M 2.703125 -1.96875 C 2.703125 -1.59375 2.703125 -0.984375 2.59375 -0.65625 C 2.4375 -0.140625 2 -0.0625 1.8125 -0.0625 C 1.5625 -0.0625 1.15625 -0.1875 1.015625 -0.671875 C 0.921875 -1.015625 0.921875 -1.609375 0.921875 -1.96875 C 0.921875 -2.375 0.921875 -2.828125 1 -3.140625 C 1.15625 -3.6875 1.609375 -3.765625 1.8125 -3.765625 C 2.078125 -3.765625 2.46875 -3.625 2.609375 -3.171875 C 2.703125 -2.859375 2.703125 -2.421875 2.703125 -1.96875 Z M 2.703125 -1.96875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-1">
<path style="stroke:none;" d="M 4.3125 -3.734375 C 4.3125 -4.078125 4 -4.375 3.5 -4.375 C 2.859375 -4.375 2.421875 -3.890625 2.234375 -3.609375 C 2.15625 -4.0625 1.796875 -4.375 1.328125 -4.375 C 0.875 -4.375 0.6875 -4 0.59375 -3.8125 C 0.421875 -3.484375 0.28125 -2.875 0.28125 -2.859375 C 0.28125 -2.75 0.40625 -2.75 0.40625 -2.75 C 0.5 -2.75 0.515625 -2.765625 0.578125 -2.984375 C 0.75 -3.6875 0.9375 -4.15625 1.296875 -4.15625 C 1.46875 -4.15625 1.609375 -4.078125 1.609375 -3.703125 C 1.609375 -3.5 1.578125 -3.390625 1.453125 -2.875 L 0.875 -0.578125 C 0.84375 -0.4375 0.78125 -0.203125 0.78125 -0.15625 C 0.78125 0.015625 0.921875 0.109375 1.0625 0.109375 C 1.1875 0.109375 1.359375 0.03125 1.4375 -0.171875 C 1.453125 -0.203125 1.796875 -1.5625 1.828125 -1.734375 L 2.15625 -3.015625 C 2.1875 -3.15625 2.46875 -3.609375 2.703125 -3.828125 C 2.78125 -3.90625 3.078125 -4.15625 3.5 -4.15625 C 3.75 -4.15625 3.90625 -4.046875 3.90625 -4.046875 C 3.609375 -4 3.390625 -3.75 3.390625 -3.5 C 3.390625 -3.34375 3.5 -3.15625 3.78125 -3.15625 C 4.046875 -3.15625 4.3125 -3.375 4.3125 -3.734375 Z M 4.3125 -3.734375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-2">
<path style="stroke:none;" d="M 5.375 -1.421875 C 5.375 -1.515625 5.296875 -1.515625 5.265625 -1.515625 C 5.15625 -1.515625 5.15625 -1.46875 5.125 -1.34375 C 4.984375 -0.78125 4.796875 -0.109375 4.375 -0.109375 C 4.171875 -0.109375 4.078125 -0.234375 4.078125 -0.5625 C 4.078125 -0.78125 4.1875 -1.25 4.265625 -1.59375 L 4.546875 -2.671875 C 4.578125 -2.8125 4.671875 -3.1875 4.71875 -3.34375 C 4.765625 -3.5625 4.859375 -3.9375 4.859375 -4 C 4.859375 -4.1875 4.71875 -4.265625 4.578125 -4.265625 C 4.53125 -4.265625 4.265625 -4.265625 4.1875 -3.921875 L 3.453125 -0.9375 C 3.4375 -0.90625 3.046875 -0.109375 2.3125 -0.109375 C 1.796875 -0.109375 1.703125 -0.5625 1.703125 -0.921875 C 1.703125 -1.46875 1.984375 -2.265625 2.234375 -2.9375 C 2.359375 -3.234375 2.40625 -3.375 2.40625 -3.5625 C 2.40625 -4.015625 2.09375 -4.375 1.59375 -4.375 C 0.65625 -4.375 0.28125 -2.9375 0.28125 -2.859375 C 0.28125 -2.75 0.40625 -2.75 0.40625 -2.75 C 0.5 -2.75 0.515625 -2.78125 0.5625 -2.9375 C 0.8125 -3.796875 1.1875 -4.15625 1.5625 -4.15625 C 1.65625 -4.15625 1.8125 -4.15625 1.8125 -3.828125 C 1.8125 -3.59375 1.703125 -3.3125 1.640625 -3.15625 C 1.28125 -2.171875 1.0625 -1.5625 1.0625 -1.078125 C 1.0625 -0.140625 1.75 0.109375 2.28125 0.109375 C 2.9375 0.109375 3.296875 -0.34375 3.46875 -0.5625 C 3.578125 -0.15625 3.921875 0.109375 4.34375 0.109375 C 4.703125 0.109375 4.921875 -0.125 5.078125 -0.4375 C 5.25 -0.796875 5.375 -1.421875 5.375 -1.421875 Z M 5.375 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-3">
<path style="stroke:none;" d="M 4.9375 -1.421875 C 4.9375 -1.515625 4.84375 -1.515625 4.8125 -1.515625 C 4.71875 -1.515625 4.703125 -1.46875 4.671875 -1.34375 C 4.5 -0.6875 4.328125 -0.109375 3.921875 -0.109375 C 3.65625 -0.109375 3.625 -0.359375 3.625 -0.5625 C 3.625 -0.796875 3.640625 -0.875 3.6875 -1.046875 L 5.109375 -6.765625 C 5.109375 -6.765625 5.109375 -6.875 4.984375 -6.875 C 4.828125 -6.875 3.890625 -6.78125 3.71875 -6.765625 C 3.640625 -6.75 3.59375 -6.703125 3.59375 -6.578125 C 3.59375 -6.453125 3.671875 -6.453125 3.828125 -6.453125 C 4.296875 -6.453125 4.3125 -6.390625 4.3125 -6.296875 L 4.296875 -6.09375 L 3.6875 -3.75 C 3.515625 -4.109375 3.234375 -4.375 2.78125 -4.375 C 1.625 -4.375 0.390625 -2.921875 0.390625 -1.46875 C 0.390625 -0.546875 0.9375 0.109375 1.71875 0.109375 C 1.90625 0.109375 2.40625 0.0625 3 -0.640625 C 3.078125 -0.21875 3.421875 0.109375 3.90625 0.109375 C 4.25 0.109375 4.484375 -0.125 4.640625 -0.4375 C 4.796875 -0.796875 4.9375 -1.421875 4.9375 -1.421875 Z M 3.546875 -3.125 L 3.046875 -1.171875 C 3 -1 3 -0.984375 2.859375 -0.8125 C 2.421875 -0.265625 2.015625 -0.109375 1.734375 -0.109375 C 1.234375 -0.109375 1.09375 -0.65625 1.09375 -1.046875 C 1.09375 -1.53125 1.421875 -2.75 1.640625 -3.203125 C 1.953125 -3.796875 2.390625 -4.15625 2.796875 -4.15625 C 3.4375 -4.15625 3.578125 -3.34375 3.578125 -3.28125 C 3.578125 -3.234375 3.5625 -3.171875 3.546875 -3.125 Z M 3.546875 -3.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-4">
<path style="stroke:none;" d="M 5.484375 -2.328125 C 5.484375 -3.015625 5.140625 -3.34375 5 -3.484375 C 4.765625 -3.71875 4.609375 -3.75 3.734375 -3.984375 L 3.078125 -4.15625 C 2.796875 -4.25 2.46875 -4.53125 2.46875 -5.0625 C 2.46875 -5.859375 3.265625 -6.703125 4.203125 -6.703125 C 5.015625 -6.703125 5.625 -6.28125 5.625 -5.171875 C 5.625 -4.859375 5.59375 -4.671875 5.59375 -4.609375 C 5.59375 -4.609375 5.59375 -4.515625 5.703125 -4.515625 C 5.8125 -4.515625 5.8125 -4.546875 5.859375 -4.71875 L 6.390625 -6.890625 C 6.390625 -6.921875 6.375 -6.984375 6.28125 -6.984375 C 6.234375 -6.984375 6.21875 -6.96875 6.109375 -6.828125 L 5.625 -6.265625 C 5.375 -6.734375 4.859375 -6.984375 4.203125 -6.984375 C 2.953125 -6.984375 1.765625 -5.84375 1.765625 -4.640625 C 1.765625 -3.84375 2.28125 -3.390625 2.796875 -3.234375 L 3.859375 -2.96875 C 4.21875 -2.875 4.765625 -2.71875 4.765625 -1.90625 C 4.765625 -1.015625 3.953125 -0.09375 2.984375 -0.09375 C 2.34375 -0.09375 1.25 -0.3125 1.25 -1.53125 C 1.25 -1.765625 1.296875 -2.015625 1.3125 -2.078125 C 1.3125 -2.109375 1.328125 -2.140625 1.328125 -2.140625 C 1.328125 -2.234375 1.265625 -2.25 1.203125 -2.25 C 1.15625 -2.25 1.140625 -2.234375 1.109375 -2.203125 C 1.0625 -2.171875 0.515625 0.09375 0.515625 0.125 C 0.515625 0.171875 0.5625 0.21875 0.625 0.21875 C 0.671875 0.21875 0.6875 0.203125 0.796875 0.0625 L 1.28125 -0.5 C 1.71875 0.078125 2.390625 0.21875 2.96875 0.21875 C 4.3125 0.21875 5.484375 -1.09375 5.484375 -2.328125 Z M 5.484375 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-5">
<path style="stroke:none;" d="M 5.65625 -1.421875 C 5.65625 -1.515625 5.5625 -1.515625 5.53125 -1.515625 C 5.4375 -1.515625 5.4375 -1.484375 5.390625 -1.34375 C 5.1875 -0.65625 4.859375 -0.109375 4.375 -0.109375 C 4.203125 -0.109375 4.140625 -0.203125 4.140625 -0.4375 C 4.140625 -0.6875 4.234375 -0.921875 4.3125 -1.140625 C 4.5 -1.671875 4.921875 -2.75 4.921875 -3.3125 C 4.921875 -3.984375 4.5 -4.375 3.78125 -4.375 C 2.890625 -4.375 2.40625 -3.75 2.234375 -3.515625 C 2.1875 -4.078125 1.78125 -4.375 1.328125 -4.375 C 0.875 -4.375 0.6875 -4 0.578125 -3.8125 C 0.421875 -3.484375 0.28125 -2.890625 0.28125 -2.859375 C 0.28125 -2.75 0.40625 -2.75 0.40625 -2.75 C 0.5 -2.75 0.515625 -2.765625 0.578125 -2.984375 C 0.75 -3.6875 0.9375 -4.15625 1.296875 -4.15625 C 1.5 -4.15625 1.609375 -4.03125 1.609375 -3.703125 C 1.609375 -3.5 1.578125 -3.390625 1.453125 -2.875 L 0.875 -0.578125 C 0.84375 -0.4375 0.78125 -0.203125 0.78125 -0.15625 C 0.78125 0.015625 0.921875 0.109375 1.0625 0.109375 C 1.1875 0.109375 1.359375 0.03125 1.4375 -0.171875 C 1.453125 -0.1875 1.5625 -0.65625 1.625 -0.90625 L 1.84375 -1.796875 C 1.90625 -2.015625 1.96875 -2.234375 2.015625 -2.453125 L 2.140625 -2.953125 C 2.28125 -3.265625 2.8125 -4.15625 3.75 -4.15625 C 4.203125 -4.15625 4.296875 -3.796875 4.296875 -3.46875 C 4.296875 -2.859375 3.796875 -1.578125 3.640625 -1.15625 C 3.5625 -0.9375 3.546875 -0.8125 3.546875 -0.703125 C 3.546875 -0.234375 3.890625 0.109375 4.359375 0.109375 C 5.296875 0.109375 5.65625 -1.34375 5.65625 -1.421875 Z M 5.65625 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-6">
<path style="stroke:none;" d="M 5.828125 -0.59375 C 5.828125 -0.65625 5.78125 -0.6875 5.71875 -0.6875 C 5.640625 -0.6875 5.609375 -0.65625 5.59375 -0.59375 C 5.40625 -0.109375 5.03125 -0.109375 5.03125 -0.109375 C 4.71875 -0.109375 4.71875 -0.875 4.71875 -1.125 C 4.71875 -1.328125 4.71875 -1.34375 4.828125 -1.46875 C 5.75 -2.640625 5.96875 -3.796875 5.96875 -3.796875 C 5.96875 -3.796875 5.953125 -3.890625 5.84375 -3.890625 C 5.75 -3.890625 5.75 -3.859375 5.703125 -3.6875 C 5.515625 -3.0625 5.1875 -2.3125 4.71875 -1.71875 L 4.71875 -2.34375 C 4.71875 -3.890625 3.796875 -4.375 3.078125 -4.375 C 1.71875 -4.375 0.40625 -2.96875 0.40625 -1.5625 C 0.40625 -0.640625 1 0.109375 2.015625 0.109375 C 2.640625 0.109375 3.34375 -0.125 4.09375 -0.71875 C 4.234375 -0.203125 4.5625 0.109375 5 0.109375 C 5.53125 0.109375 5.828125 -0.4375 5.828125 -0.59375 Z M 4.0625 -0.984375 C 3.1875 -0.21875 2.421875 -0.109375 2.03125 -0.109375 C 1.4375 -0.109375 1.140625 -0.5625 1.140625 -1.1875 C 1.140625 -1.671875 1.390625 -2.75 1.71875 -3.25 C 2.171875 -3.96875 2.71875 -4.15625 3.0625 -4.15625 C 4.046875 -4.15625 4.046875 -2.859375 4.046875 -2.09375 C 4.046875 -1.71875 4.046875 -1.15625 4.0625 -0.984375 Z M 4.0625 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph3-7">
<path style="stroke:none;" d="M 7.328125 -4.3125 C 7.328125 -5.90625 6.28125 -6.984375 4.796875 -6.984375 C 2.671875 -6.984375 0.484375 -4.734375 0.484375 -2.421875 C 0.484375 -0.78125 1.59375 0.21875 3.015625 0.21875 C 5.125 0.21875 7.328125 -1.953125 7.328125 -4.3125 Z M 6.453125 -4.703125 C 6.453125 -4 6.1875 -2.453125 5.203125 -1.234375 C 4.71875 -0.625 3.90625 -0.046875 3.078125 -0.046875 C 2.09375 -0.046875 1.40625 -0.84375 1.40625 -2.15625 C 1.40625 -2.578125 1.546875 -4.03125 2.3125 -5.1875 C 2.984375 -6.21875 3.96875 -6.734375 4.75 -6.734375 C 5.5625 -6.734375 6.453125 -6.1875 6.453125 -4.703125 Z M 6.453125 -4.703125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph4-1">
<path style="stroke:none;" d="M 3.984375 -5.25 L 2.484375 -6.859375 L 0.96875 -5.25 L 1.09375 -5.109375 L 2.484375 -6.1875 L 3.859375 -5.109375 Z M 3.984375 -5.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph5-1">
<path style="stroke:none;" d="M 3.546875 -2.546875 C 3.546875 -2.90625 3.171875 -3.0625 2.8125 -3.0625 C 2.453125 -3.0625 2.140625 -2.90625 1.84375 -2.5625 C 1.71875 -2.984375 1.296875 -3.0625 1.125 -3.0625 C 0.875 -3.0625 0.6875 -2.90625 0.578125 -2.703125 C 0.421875 -2.4375 0.328125 -2.03125 0.328125 -2 C 0.328125 -1.90625 0.421875 -1.90625 0.4375 -1.90625 C 0.546875 -1.90625 0.546875 -1.921875 0.59375 -2.109375 C 0.703125 -2.546875 0.828125 -2.859375 1.109375 -2.859375 C 1.28125 -2.859375 1.328125 -2.71875 1.328125 -2.53125 C 1.328125 -2.390625 1.265625 -2.140625 1.21875 -1.953125 L 1.0625 -1.328125 L 0.84375 -0.4375 C 0.8125 -0.34375 0.78125 -0.171875 0.78125 -0.15625 C 0.78125 0 0.90625 0.0625 1.015625 0.0625 C 1.109375 0.0625 1.25 0 1.3125 -0.125 C 1.328125 -0.171875 1.40625 -0.484375 1.4375 -0.65625 L 1.625 -1.40625 C 1.640625 -1.4375 1.796875 -2.0625 1.8125 -2.109375 C 1.828125 -2.15625 2.03125 -2.5 2.25 -2.671875 C 2.328125 -2.71875 2.515625 -2.859375 2.8125 -2.859375 C 2.875 -2.859375 3.046875 -2.859375 3.1875 -2.765625 C 2.96875 -2.703125 2.890625 -2.515625 2.890625 -2.390625 C 2.890625 -2.234375 3 -2.125 3.15625 -2.125 C 3.328125 -2.125 3.546875 -2.265625 3.546875 -2.546875 Z M 3.546875 -2.546875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph6-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph6-1">
<path style="stroke:none;" d="M 2.578125 -0.765625 C 2.578125 -1 2.453125 -1.1875 2.328125 -1.296875 C 2.078125 -1.515625 1.84375 -1.5625 1.484375 -1.609375 C 1.046875 -1.6875 0.640625 -1.75 0.640625 -2.0625 C 0.640625 -2.234375 0.796875 -2.46875 1.421875 -2.46875 C 1.828125 -2.46875 2.15625 -2.328125 2.1875 -1.90625 C 2.1875 -1.828125 2.203125 -1.78125 2.296875 -1.78125 C 2.40625 -1.78125 2.40625 -1.828125 2.40625 -1.9375 L 2.40625 -2.484375 C 2.40625 -2.578125 2.40625 -2.640625 2.3125 -2.640625 C 2.28125 -2.640625 2.265625 -2.640625 2.171875 -2.578125 C 2.171875 -2.5625 2.15625 -2.5625 2.078125 -2.484375 C 1.84375 -2.640625 1.546875 -2.640625 1.421875 -2.640625 C 0.5 -2.640625 0.3125 -2.171875 0.3125 -1.90625 C 0.3125 -1.328125 1.015625 -1.21875 1.46875 -1.140625 C 1.734375 -1.109375 2.25 -1.015625 2.25 -0.625 C 2.25 -0.390625 2.078125 -0.125 1.46875 -0.125 C 0.890625 -0.125 0.65625 -0.46875 0.546875 -0.90625 C 0.515625 -0.96875 0.515625 -1 0.421875 -1 C 0.3125 -1 0.3125 -0.9375 0.3125 -0.828125 L 0.3125 -0.109375 C 0.3125 0 0.3125 0.0625 0.40625 0.0625 C 0.453125 0.0625 0.453125 0.046875 0.5625 -0.046875 L 0.703125 -0.203125 C 0.984375 0.0625 1.34375 0.0625 1.46875 0.0625 C 2.34375 0.0625 2.578125 -0.421875 2.578125 -0.765625 Z M 2.578125 -0.765625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph6-2">
<path style="stroke:none;" d="M 2.5 -3.734375 C 2.5 -4 2.25 -4.1875 1.890625 -4.1875 C 1.40625 -4.1875 0.859375 -3.84375 0.859375 -3.21875 L 0.859375 -2.5625 L 0.3125 -2.5625 L 0.3125 -2.328125 L 0.859375 -2.328125 L 0.859375 -0.484375 C 0.859375 -0.234375 0.796875 -0.234375 0.390625 -0.234375 L 0.390625 0 C 0.53125 -0.015625 0.96875 -0.03125 1.109375 -0.03125 C 1.40625 -0.03125 1.828125 0 1.90625 0 L 1.90625 -0.234375 L 1.78125 -0.234375 C 1.328125 -0.234375 1.328125 -0.296875 1.328125 -0.5 L 1.328125 -2.328125 L 2.109375 -2.328125 L 2.109375 -2.5625 L 1.296875 -2.5625 L 1.296875 -3.203125 C 1.296875 -3.765625 1.640625 -3.984375 1.890625 -3.984375 C 1.96875 -3.984375 2.03125 -3.96875 2.046875 -3.96875 C 2.015625 -3.9375 1.953125 -3.890625 1.953125 -3.734375 C 1.953125 -3.59375 2.046875 -3.46875 2.234375 -3.46875 C 2.40625 -3.46875 2.5 -3.59375 2.5 -3.734375 Z M 2.5 -3.734375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph6-3">
<path style="stroke:none;" d="M 2.96875 -0.71875 C 2.96875 -0.75 2.953125 -0.8125 2.84375 -0.8125 C 2.765625 -0.8125 2.765625 -0.765625 2.734375 -0.703125 C 2.5625 -0.265625 2.109375 -0.15625 1.84375 -0.15625 C 1.515625 -0.15625 1.234375 -0.296875 1.0625 -0.515625 C 0.84375 -0.796875 0.84375 -1.1875 0.84375 -1.34375 L 2.78125 -1.34375 C 2.921875 -1.34375 2.96875 -1.34375 2.96875 -1.484375 C 2.96875 -1.9375 2.703125 -2.640625 1.71875 -2.640625 C 0.890625 -2.640625 0.28125 -2.015625 0.28125 -1.296875 C 0.28125 -0.546875 0.96875 0.0625 1.8125 0.0625 C 2.65625 0.0625 2.96875 -0.578125 2.96875 -0.71875 Z M 2.53125 -1.515625 L 0.859375 -1.515625 C 0.921875 -2.3125 1.46875 -2.453125 1.71875 -2.453125 C 2.484375 -2.453125 2.53125 -1.6875 2.53125 -1.515625 Z M 2.53125 -1.515625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph6-4">
<path style="stroke:none;" d="M 2.578125 -2.234375 C 2.578125 -2.46875 2.34375 -2.625 2.09375 -2.625 C 1.734375 -2.625 1.4375 -2.40625 1.25 -2 L 1.234375 -2 L 1.234375 -2.625 L 0.34375 -2.546875 L 0.34375 -2.328125 C 0.765625 -2.328125 0.8125 -2.28125 0.8125 -1.984375 L 0.8125 -0.484375 C 0.8125 -0.234375 0.75 -0.234375 0.34375 -0.234375 L 0.34375 0 C 0.5 -0.015625 0.9375 -0.03125 1.0625 -0.03125 C 1.375 -0.03125 1.78125 0 1.859375 0 L 1.859375 -0.234375 L 1.734375 -0.234375 C 1.28125 -0.234375 1.28125 -0.296875 1.28125 -0.5 L 1.28125 -1.328125 C 1.28125 -1.875 1.5625 -2.421875 2.09375 -2.421875 C 2.046875 -2.375 2.015625 -2.296875 2.015625 -2.234375 C 2.015625 -2.0625 2.140625 -1.953125 2.296875 -1.953125 C 2.453125 -1.953125 2.578125 -2.0625 2.578125 -2.234375 Z M 2.578125 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04a_d3-glyph6-5">
<path style="stroke:none;" d="M 3.4375 -0.53125 L 3.4375 -0.859375 L 3.21875 -0.859375 L 3.21875 -0.546875 C 3.21875 -0.484375 3.21875 -0.21875 3 -0.21875 C 2.765625 -0.21875 2.765625 -0.484375 2.765625 -0.546875 L 2.765625 -1.765625 C 2.765625 -2.328125 2.203125 -2.640625 1.53125 -2.640625 C 1.25 -2.640625 0.546875 -2.625 0.546875 -2.125 C 0.546875 -1.953125 0.65625 -1.828125 0.84375 -1.828125 C 1.015625 -1.828125 1.125 -1.953125 1.125 -2.109375 C 1.125 -2.21875 1.078125 -2.328125 0.96875 -2.375 C 1.15625 -2.453125 1.453125 -2.453125 1.515625 -2.453125 C 1.9375 -2.453125 2.265625 -2.203125 2.265625 -1.75 L 2.265625 -1.609375 C 2 -1.59375 1.515625 -1.578125 1.09375 -1.421875 C 0.6875 -1.28125 0.328125 -1.015625 0.328125 -0.625 C 0.328125 -0.09375 0.953125 0.0625 1.40625 0.0625 C 1.90625 0.0625 2.203125 -0.1875 2.34375 -0.421875 C 2.375 -0.109375 2.578125 0.03125 2.78125 0.03125 C 2.8125 0.03125 3.4375 0.03125 3.4375 -0.53125 Z M 2.265625 -0.84375 C 2.265625 -0.21875 1.65625 -0.125 1.46875 -0.125 C 1.140625 -0.125 0.84375 -0.328125 0.84375 -0.625 C 0.84375 -0.953125 1.15625 -1.390625 2.265625 -1.421875 Z M 2.265625 -0.84375 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez04a_d3-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 54.427691 -0.00162108 C 54.427691 24.629229 37.878716 46.197929 14.085141 52.569874 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph0-1" x="7.576287" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-2" x="11.188496" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-3" x="13.98631" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-4" x="18.060069" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-5" x="21.641983" y="53.701493"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph0-6" x="29.277163" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-7" x="34.364907" y="53.701493"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph0-4" x="39.956079" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-5" x="43.537994" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-8" x="48.116963" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-8" x="52.695933" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-7" x="57.274902" y="53.701493"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph0-9" x="59.818774" y="53.701493"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph1-1" x="67.450869" y="53.701493"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph2-1" x="74.38019" y="54.691254"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.000823551 -0.00162108 L 76.118248 63.875065 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071641 2.391236 C -1.69508 0.956522 -0.851859 0.279688 0.00128806 -0.0000707622 C -0.850268 -0.281 -1.695135 -0.957552 -2.07202 -2.391179 " transform="matrix(0.761202,-0.638793,-0.638793,-0.761202,143.213818,42.313269)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph3-1" x="122.75029" y="71.761652"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.000823551 -0.00162108 L 25.445364 21.350881 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551061 3.112405 C -2.086319 1.244545 -1.046462 0.36172 0.000709706 0.00130861 C -1.0444 -0.363559 -2.086233 -1.244331 -2.550604 -3.112553 " transform="matrix(0.761222,-0.638754,-0.638754,-0.761222,93.012014,84.442856)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph4-1" x="97.44679" y="94.506281"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph3-2" x="96.812786" y="94.506281"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph5-1" x="102.481056" y="95.990923"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 57.918306 72.750976 L 94.927475 55.514098 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph3-3" x="165.567393" y="55.269609"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph3-4" x="170.720444" y="55.269609"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 76.424856 64.130572 L 87.588535 88.073519 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.550895 3.110752 C -2.084829 1.246183 -1.044954 0.364825 0.0003043 0.00211459 C -1.047316 -0.364938 -2.086071 -1.243993 -2.550438 -3.113025 " transform="matrix(0.419953,-0.900623,-0.900623,-0.419953,154.626777,18.036318)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph4-1" x="145.914276" y="14.080245"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph3-5" x="145.418402" y="14.080245"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 88.579115 74.339049 C 87.089315 76.111873 85.226081 77.54271 83.126995 78.521498 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph3-6" x="158.433362" y="26.920308"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 0.000823551 -0.00162108 L 57.918306 72.750976 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 0.000823551 -0.00162108 L 94.927475 55.514098 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 46.990479 27.459458 C 43.594205 33.265357 39.144457 38.403008 33.881018 42.589388 " transform="matrix(0.993736,0,0,-0.993736,67.421057,105.916358)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph1-2" x="86.86052" y="80.408148"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph1-3" x="91.60522" y="80.408148"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph6-1" x="97.19935" y="81.430703"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph6-2" x="100.098146" y="81.430703"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph6-3" x="102.380354" y="81.430703"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph6-4" x="105.625461" y="81.430703"/>
  <use xlink:href="#fisica2_lez04a_d3-glyph6-5" x="108.485647" y="81.430703"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04a_d3-glyph3-7" x="56.097435" y="116.178669"/>
</g>
</g>
</svg></figure>
            <p>Sia $\\alpha$ l'angolo tra la normale $\\hat{n}$ e il versore radiale $\\hat{u}_r$. L'inclinazione riduce l'area «vista» da $O$ del fattore $|\\cos\\alpha|$; inoltre, poiché l'elemento sta a distanza $r$ e non $R_0$, la proiezione sulla sfera di riferimento richiede il fattore di scala $R_0^2/r^2$ (le aree scalano con il quadrato della distanza). Dunque, in termini di aree geometriche (tutte positive),</p>
            <p>$$dS_{\\text{sfera}} = \\frac{R_0^2}{r^2} \\, |\\cos\\alpha| \\, dS ,$$</p>
            <p>e sostituendo nella definizione si ottiene un risultato <strong>indipendente da $R_0$</strong>:</p>
            <p>$$d\\Omega_{\\text{geom}} = \\frac{dS_{\\text{sfera}}}{R_0^2} = \\frac{|\\cos\\alpha| \\, dS}{r^2} .$$</p>
            <p>Questa derivazione, condotta con aree positive, fornisce l'angolo solido <em>geometrico</em>: per ottenere la quantità orientata, quella che compare nel teorema e che useremo nel resto del capitolo, basta sopprimere il valore assoluto e tenere il segno di $\\hat{n} \\cdot \\hat{u}_r$.</p>`
          },
          {
            subtitle: "Definizione generale: le due quantità da non confondere",
            content: `<p>Sia $dS$ un elemento di superficie a distanza $r$ da $O$, con versore radiale $\\hat{u}_r$ (da $O$ verso l'elemento) e normale $\\hat{n}$. Si definiscono:</p>
            <ul>
              <li>l'<strong>angolo solido geometrico</strong> infinitesimo, non negativo,
              <p>$$d\\Omega_{\\text{geom}} = \\frac{|\\hat{n} \\cdot \\hat{u}_r| \\, dS}{r^2} = \\frac{|\\cos\\alpha| \\, dS}{r^2};$$</p></li>
              <li>l'<strong>angolo solido orientato</strong> infinitesimo, di segno concorde a $\\hat{n} \\cdot \\hat{u}_r$,
              <p>$$d\\Omega = \\frac{(\\hat{n} \\cdot \\hat{u}_r) \\, dS}{r^2} = \\frac{\\vec{dS} \\cdot \\hat{u}_r}{r^2} = \\frac{\\cos\\alpha \\, dS}{r^2},$$</p>
              dove $\\vec{dS} = \\hat{n} \\, dS$ è il vettore superficie.</li>
            </ul>
            <p>Le due coincidono quando $\\hat{n} \\cdot \\hat{u}_r \\ge 0$, cioè quando la normale scelta ha <strong>componente radiale positiva</strong>: poiché $\\hat{u}_r$ punta da $O$ verso l'elemento, questo significa che $\\hat{n}$ punta nel verso di <em>allontanamento</em> da $O$. Coincidono anche nel caso limite $\\hat{n} \\cdot \\hat{u}_r = 0$ (elemento visto «di taglio» da $O$), in cui entrambe sono nulle. Se invece $\\hat{n}$ ha componente radiale negativa, cioè punta verso $O$, l'angolo solido orientato è negativo e vale $d\\Omega = -d\\Omega_{\\text{geom}}$.</p>
            <p>Nel seguito, salvo avviso contrario, su superfici chiuse useremo la normale uscente e dunque l'angolo solido orientato.</p>`
          },
          {
            subtitle: "Confronto fra la costruzione piana e quella solida",
            content: `<p>In entrambi i casi si proietta l'elemento sulla figura di riferimento (circonferenza o sfera) e si divide per la potenza appropriata della distanza locale:</p>
            <p>$$d\\theta = \\frac{\\hat{t} \\cdot \\vec{dl}'}{R} , \\qquad d\\Omega = \\frac{\\hat{u}_r \\cdot \\vec{dS}}{r^2} .$$</p>
            <p>La differenza non è solo l'esponente: nel caso piano si proietta sulla direzione <em>tangente</em>, nel caso solido si proietta la <em>normale</em> sulla direzione radiale. In entrambi i casi la quantità è adimensionale e, dove compare un prodotto scalare, è orientata.</p>`
          }
        ],
        formulas: [
          { label: "Angolo solido geometrico (caso sferico)", latex: "d\\Omega_{\\text{geom}} = \\frac{dS_{\\text{sfera}}}{R_0^2}" },
          { label: "Angolo solido geometrico (caso generale)", latex: "d\\Omega_{\\text{geom}} = \\frac{|\\cos\\alpha| \\, dS}{r^2}" },
          { label: "Angolo solido orientato", latex: "d\\Omega = \\frac{\\vec{dS} \\cdot \\hat{u}_r}{r^2} = \\frac{\\cos\\alpha \\, dS}{r^2}" },
          { label: "Angolo solido totale", latex: "\\Omega_{\\text{tot}} = 4\\pi \\ \\text{sr}" }
        ],
        extra_content: `<p>Questa espressione sarà cruciale per il calcolo del flusso del campo elettrico e per il teorema di Gauss: vedremo che il flusso del campo di una carica puntiforme attraverso un elemento di superficie è proporzionale, proprio, all'angolo solido <strong>orientato</strong> $d\\Omega$ sotteso da quell'elemento.</p>`
      },

      {
        id: "s04-int-calotta",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p><strong>Esempio illustrativo: angolo solido di una porzione sferica di area nota.</strong></p>
        <p>Anche questo esempio è un'aggiunta rispetto alla lezione, pensata per rendere operativa la definizione.</p>
        <p><em>(a) Area assegnata.</em> Una calotta sferica di area $S = 1 \\ \\mathrm{m^2}$ appartiene a una sfera di raggio $R_0 = 2 \\ \\mathrm{m}$ centrata in $O$. Poiché l'elemento è sulla sfera, $\\hat{n} \\parallel \\hat{u}_r$ e $\\cos\\alpha = 1$ (normale uscente), quindi non c'è correzione di inclinazione:</p>
        <p>$$\\Omega = \\frac{S}{R_0^2} = \\frac{1}{2^2} = 0{,}25 \\ \\text{sr}.$$</p>
        <p><em>(b) Controllo sul caso limite.</em> Se la porzione è l'intera sfera, $S = 4\\pi R_0^2 = 16\\pi \\approx 50{,}3 \\ \\mathrm{m^2}$, e si ritrova $\\Omega = 4\\pi \\approx 12{,}57$ sr, in accordo con il teorema.</p>
        <p><em>(c) Calotta individuata da un semiangolo.</em> Fissiamo un asse passante per il centro $O$ della sfera e chiamiamo $\\theta_0$ il <strong>semiangolo al vertice</strong>, cioè l'angolo tra quell'asse e il raggio che congiunge $O$ a un punto del <em>bordo</em> della calotta. La calotta è dunque l'insieme dei punti della sfera il cui raggio vettore forma con l'asse un angolo $\\theta \\le \\theta_0$.</p>
        <p>Per calcolarne l'area non serve ricordare una formula: basta suddividere la calotta in fasce circolari («corone») comprese tra $\\theta$ e $\\theta + d\\theta$. Una tale fascia è un anello di raggio $R_0 \\sin\\theta$ (distanza dall'asse) e di larghezza $R_0 \\, d\\theta$ (lunghezza d'arco lungo il meridiano), quindi</p>
        <p>$$dS = \\underbrace{2\\pi R_0 \\sin\\theta}_{\\text{circonferenza}} \\cdot \\underbrace{R_0 \\, d\\theta}_{\\text{larghezza}} = 2\\pi R_0^2 \\sin\\theta \\, d\\theta .$$</p>
        <p>Integrando da $\\theta = 0$ (polo, sull'asse) a $\\theta = \\theta_0$ (bordo):</p>
        <p>$$S = \\int_0^{\\theta_0} 2\\pi R_0^2 \\sin\\theta \\, d\\theta = 2\\pi R_0^2 \\big[ -\\cos\\theta \\big]_0^{\\theta_0} = 2\\pi R_0^2 \\, (1 - \\cos\\theta_0).$$</p>
        <p>Un controllo immediato: per $\\theta_0 = \\pi$ si ottiene $S = 4\\pi R_0^2$, l'area dell'intera sfera. Dividendo per $R_0^2$:</p>
        <p>$$\\Omega = \\frac{S}{R_0^2} = 2\\pi \\, (1 - \\cos\\theta_0),$$</p>
        <p>indipendente da $R_0$, come deve essere per una grandezza puramente angolare. Per $\\theta_0 = 60^\\circ$: $\\Omega = 2\\pi(1 - 1/2) = \\pi \\approx 3{,}14$ sr; per $\\theta_0 = 90^\\circ$ (mezza sfera): $\\Omega = 2\\pi$ sr; per $\\theta_0 = 180^\\circ$: $\\Omega = 4\\pi$ sr.</p>
        <p><em>Come gestire il segno.</em> Se nella parte (a) avessimo scelto la normale <em>entrante</em> (componente radiale negativa, cioè diretta verso $O$), avremmo $\\cos\\alpha = -1$ e $\\Omega = -0{,}25$ sr, mentre l'angolo solido geometrico resterebbe $0{,}25$ sr. La regola pratica è: fissate prima la normale, poi leggete il segno come informazione su da quale lato si sta guardando la superficie.</p>`
      },

      {
        id: "s04-richiami-omega",
        type: "section",
        title: "Richiami sull'angolo solido in vista del teorema di Gauss",
        icon: "🔭",
        content: `<p>Riprendiamo l'angolo solido, strumento geometrico che ci servirà tra poco per dimostrare il teorema di Gauss.</p>
        <p>Dato un punto $O$ e un elemento di superficie $dS$ posto a distanza $R$ da $O$, l'<strong>angolo solido geometrico</strong> $d\\Omega_{\\text{geom}}$ sotteso da $dS$ rispetto a $O$ è il rapporto</p>
        <p>$$d\\Omega_{\\text{geom}} = \\frac{dS_{\\perp}}{R^2},$$</p>
        <p>dove $dS_{\\perp}$ è la proiezione di $dS$ sul piano perpendicolare alla direzione $O \\to dS$, ossia l'area che il cono di vertice $O$ e base $dS$ intercetta sulla sfera di centro $O$ e raggio $R$; esplicitamente $dS_\\perp = |\\cos\\alpha| \\, dS$. L'angolo solido è adimensionale e la sua unità di misura è lo <em>steradiante</em> (sr).</p>
        <p><strong>Nota di notazione:</strong> essendo $dS_\\perp$ un'area, questa definizione dà una quantità non negativa, cioè l'angolo solido <em>geometrico</em>. La quantità che comparirà nel flusso è invece quella <em>orientata</em>, $d\\Omega_{\\text{or}} = (\\hat{u}_R \\cdot \\hat{n})\\,dS / R^2$, che porta anche il segno: il valore assoluto <strong>non</strong> va trasferito nella formula del flusso.</p>`,
        subsections: [
          {
            subtitle: "Fascia sferica e calotta sferica: due oggetti distinti",
            content: `<p>È utile avere ben presenti due oggetti geometrici distinti, che spesso vengono confusi perché entrambi si costruiscono su una sfera di raggio $R$.</p>
            <p><strong>Fascia sferica</strong> compresa tra i coni di semiapertura $\\theta$ e $\\theta + d\\theta$. La sua area è il prodotto della larghezza $R \\, d\\theta$ per la lunghezza del parallelo $2\\pi R \\sin\\theta$:</p>
            <p>$$dS_{\\text{fascia}} = (R \\, d\\theta)\\,(2\\pi R \\sin\\theta) = 2\\pi R^2 \\sin\\theta \\, d\\theta \\qquad \\Longrightarrow \\qquad d\\Omega_{\\text{fascia}} = 2\\pi \\sin\\theta \\, d\\theta .$$</p>
            <p>Si tratta di un angolo solido <em>infinitesimo del primo ordine</em> in $d\\theta$, associato a una corona attorno all'asse.</p>
            <p><strong>Calotta sferica</strong> di semiapertura $\\beta$, cioè il «tappo» intercettato da un unico cono di vertice il centro e semiapertura $\\beta$. Integrando la fascia da $0$ a $\\beta$:</p>
            <p>$$\\Omega_{\\text{calotta}} = \\int_0^{\\beta} 2\\pi \\sin\\theta \\, d\\theta = 2\\pi\\,(1 - \\cos\\beta) \\;\\approx\\; 2\\pi \\cdot \\frac{\\beta^2}{2} = \\pi \\beta^2 \\qquad (\\beta \\ll 1).$$</p>
            <p>Questa è una quantità <em>finita</em> (piccola, ma non infinitesima del primo ordine): descrive un piccolo cono attorno al polo, non una corona.</p>`
          },
          {
            subtitle: "Che cosa ricordare",
            content: `<p>La cosa fondamentale è che l'angolo solido è una quantità <strong>adimensionale che non dipende dal raggio $R$</strong>, ma solo dalla geometria angolare del cono che sottende la superficie. L'angolo solido totale attorno a un punto è $\\Omega_{\\text{tot}} = 4\\pi$ steradianti, ottenuto ponendo $\\beta = \\pi$ nella formula della calotta.</p>`
          },
          {
            subtitle: "Esempio: un piccolo cono",
            content: `<p>Consideriamo un cono di semiapertura $\\beta = 0{,}1$ rad. L'angolo solido esatto è</p>
            <p>$$\\Omega = 2\\pi\\,(1-\\cos 0{,}1) = 2\\pi \\cdot 4{,}996\\cdot 10^{-3} \\approx 3{,}14 \\cdot 10^{-2}\\ \\text{sr},$$</p>
            <p>mentre l'approssimazione per piccoli angoli dà $\\Omega \\approx \\pi\\beta^2 = \\pi \\cdot 10^{-2} \\approx 3{,}14\\cdot 10^{-2}$ sr: le due stime coincidono entro lo $0{,}1\\%$.</p>
            <p>Se la base del cono si trova a $R = 2$ m, l'area intercettata sulla sfera è $\\Omega R^2 \\approx 0{,}126$ m$^2$; se si trova a $R = 4$ m, l'area è quattro volte maggiore, ma l'angolo solido è lo stesso.</p>`
          }
        ],
        formulas: [
          { label: "Angolo solido (proiezione)", latex: "d\\Omega_{\\text{geom}} = \\frac{dS_\\perp}{R^2}, \\qquad dS_\\perp = |\\cos\\alpha|\\, dS" },
          { label: "Fascia sferica", latex: "d\\Omega_{\\text{fascia}} = 2\\pi \\sin\\theta \\, d\\theta" },
          { label: "Calotta di semiapertura β", latex: "\\Omega_{\\text{calotta}} = 2\\pi (1 - \\cos\\beta) \\approx \\pi\\beta^2 \\quad (\\beta \\ll 1)" }
        ]
      },

      {
        id: "s04-alert-fascia-calotta",
        type: "alert_box",
        title: "Trappola: fascia o calotta?",
        icon: "⚠️",
        content: `<p>Il cambio di oggetto geometrico è la fonte più frequente di errori: $2\\pi \\sin\\theta \\, d\\theta$ si riferisce alla <strong>fascia</strong> tra $\\theta$ e $\\theta + d\\theta$, mentre $2\\pi(1-\\cos\\beta)$ è l'angolo solido dell'intera <strong>calotta</strong> di semiapertura $\\beta$, che solo per $\\beta \\ll 1$ si approssima con $\\pi\\beta^2$.</p>
        <p>Le due formule non sono alternative: la seconda si ottiene <em>integrando</em> la prima (e, nella forma $\\pi\\beta^2$, sviluppando il risultato per piccoli $\\beta$).</p>`
      },

      {
        id: "s04-flusso-carica",
        type: "section",
        title: "Flusso del campo elettrostatico di una carica puntiforme",
        icon: "⚡",
        content: `<p>Applichiamo questi concetti al campo elettrostatico. Supponiamo di mettere una particella con carica puntiforme $Q \\gt 0$ all'interno di una superficie chiusa. Per semplicità, iniziamo immaginando la carica al centro di una sfera.</p>
        <figure class="figura" data-id="fisica2_lez04b_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04b_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="237.261pt" height="220.967pt" viewBox="0 0 237.261 220.967" version="1.2"><style>#fisica2_lez04b_d1 [fill="rgb(0%,0%,0%)"],#fisica2_lez04b_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez04b_d1 [stroke="rgb(0%,0%,0%)"],#fisica2_lez04b_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez04b_d1 [fill="rgb(0%,0%,100%)"],#fisica2_lez04b_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d1 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez04b_d1 [stroke="rgb(0%,0%,100%)"],#fisica2_lez04b_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d1 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph0-1">
<path style="stroke:none;" d="M 5.5 -2.328125 C 5.5 -3.015625 5.15625 -3.359375 5.015625 -3.5 C 4.78125 -3.734375 4.625 -3.765625 3.75 -4 L 3.078125 -4.171875 C 2.8125 -4.265625 2.46875 -4.546875 2.46875 -5.078125 C 2.46875 -5.890625 3.265625 -6.734375 4.21875 -6.734375 C 5.03125 -6.734375 5.640625 -6.296875 5.640625 -5.1875 C 5.640625 -4.875 5.609375 -4.6875 5.609375 -4.625 C 5.609375 -4.625 5.609375 -4.53125 5.71875 -4.53125 C 5.828125 -4.53125 5.828125 -4.5625 5.875 -4.734375 L 6.40625 -6.90625 C 6.40625 -6.9375 6.390625 -7 6.296875 -7 C 6.25 -7 6.234375 -7 6.125 -6.859375 L 5.640625 -6.296875 C 5.390625 -6.75 4.875 -7 4.21875 -7 C 2.96875 -7 1.765625 -5.859375 1.765625 -4.65625 C 1.765625 -3.859375 2.296875 -3.40625 2.796875 -3.25 L 3.859375 -2.96875 C 4.234375 -2.875 4.78125 -2.734375 4.78125 -1.921875 C 4.78125 -1.03125 3.96875 -0.09375 2.984375 -0.09375 C 2.359375 -0.09375 1.25 -0.3125 1.25 -1.546875 C 1.25 -1.78125 1.296875 -2.015625 1.3125 -2.078125 C 1.328125 -2.109375 1.328125 -2.140625 1.328125 -2.140625 C 1.328125 -2.25 1.265625 -2.25 1.21875 -2.25 C 1.15625 -2.25 1.140625 -2.25 1.109375 -2.21875 C 1.078125 -2.171875 0.515625 0.09375 0.515625 0.125 C 0.515625 0.171875 0.5625 0.21875 0.625 0.21875 C 0.671875 0.21875 0.6875 0.203125 0.8125 0.0625 L 1.296875 -0.5 C 1.71875 0.078125 2.390625 0.21875 2.96875 0.21875 C 4.328125 0.21875 5.5 -1.109375 5.5 -2.328125 Z M 5.5 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph0-2">
<path style="stroke:none;" d="M 6.453125 0 C 6.453125 -0.0625 6.375 -0.09375 6.34375 -0.09375 C 6.265625 -0.09375 6.234375 -0.046875 6.21875 0.015625 C 5.984375 0.71875 5.40625 0.96875 5.0625 0.96875 C 4.59375 0.96875 4.453125 0.703125 4.359375 -0.0625 C 5.890625 -0.640625 7.359375 -2.421875 7.359375 -4.328125 C 7.359375 -5.9375 6.296875 -7 4.8125 -7 C 2.671875 -7 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.59375 0.21875 3.03125 0.21875 C 3.28125 0.21875 3.625 0.171875 4 0.0625 C 3.96875 0.6875 3.96875 0.703125 3.96875 0.828125 C 3.96875 1.15625 3.96875 1.921875 4.796875 1.921875 C 5.96875 1.921875 6.453125 0.109375 6.453125 0 Z M 6.484375 -4.65625 C 6.484375 -3.65625 5.96875 -1.328125 4.296875 -0.390625 C 4.25 -0.75 4.15625 -1.46875 3.421875 -1.46875 C 2.90625 -1.46875 2.421875 -0.96875 2.421875 -0.453125 C 2.421875 -0.265625 2.46875 -0.140625 2.46875 -0.140625 C 1.703125 -0.453125 1.359375 -1.21875 1.359375 -2.109375 C 1.359375 -2.796875 1.625 -4.21875 2.375 -5.28125 C 3.09375 -6.296875 4.03125 -6.75 4.765625 -6.75 C 5.75 -6.75 6.484375 -5.984375 6.484375 -4.65625 Z M 4.03125 -0.40625 C 4.03125 -0.265625 4.03125 -0.25 3.921875 -0.203125 C 3.671875 -0.09375 3.375 -0.03125 3.09375 -0.03125 C 2.953125 -0.03125 2.640625 -0.03125 2.640625 -0.453125 C 2.640625 -0.859375 3.015625 -1.25 3.421875 -1.25 C 3.84375 -1.25 4.03125 -1.015625 4.03125 -0.40625 Z M 4.03125 -0.40625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph0-3">
<path style="stroke:none;" d="M 4.953125 -1.421875 C 4.953125 -1.515625 4.859375 -1.515625 4.828125 -1.515625 C 4.734375 -1.515625 4.71875 -1.484375 4.6875 -1.34375 C 4.515625 -0.703125 4.34375 -0.109375 3.9375 -0.109375 C 3.671875 -0.109375 3.640625 -0.375 3.640625 -0.5625 C 3.640625 -0.8125 3.65625 -0.875 3.703125 -1.046875 L 5.125 -6.78125 C 5.125 -6.78125 5.125 -6.890625 5 -6.890625 C 4.84375 -6.890625 3.90625 -6.8125 3.734375 -6.78125 C 3.65625 -6.78125 3.59375 -6.734375 3.59375 -6.59375 C 3.59375 -6.484375 3.6875 -6.484375 3.828125 -6.484375 C 4.3125 -6.484375 4.328125 -6.40625 4.328125 -6.3125 L 4.296875 -6.109375 L 3.703125 -3.75 C 3.53125 -4.125 3.234375 -4.390625 2.796875 -4.390625 C 1.625 -4.390625 0.390625 -2.9375 0.390625 -1.484375 C 0.390625 -0.546875 0.9375 0.109375 1.71875 0.109375 C 1.921875 0.109375 2.421875 0.0625 3.015625 -0.640625 C 3.09375 -0.21875 3.4375 0.109375 3.921875 0.109375 C 4.265625 0.109375 4.484375 -0.125 4.65625 -0.4375 C 4.8125 -0.796875 4.953125 -1.421875 4.953125 -1.421875 Z M 3.5625 -3.125 L 3.0625 -1.1875 C 3.015625 -1 3.015625 -0.984375 2.859375 -0.8125 C 2.421875 -0.265625 2.015625 -0.109375 1.734375 -0.109375 C 1.25 -0.109375 1.109375 -0.65625 1.109375 -1.046875 C 1.109375 -1.546875 1.421875 -2.765625 1.65625 -3.21875 C 1.953125 -3.8125 2.40625 -4.171875 2.796875 -4.171875 C 3.453125 -4.171875 3.59375 -3.359375 3.59375 -3.296875 C 3.59375 -3.234375 3.5625 -3.1875 3.5625 -3.125 Z M 3.5625 -3.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph1-1">
<path style="stroke:none;" d="M 7.171875 -2.484375 C 7.171875 -2.6875 6.96875 -2.6875 6.84375 -2.6875 L 4.0625 -2.6875 L 4.0625 -5.46875 C 4.0625 -5.609375 4.0625 -5.796875 3.859375 -5.796875 C 3.671875 -5.796875 3.671875 -5.609375 3.671875 -5.46875 L 3.671875 -2.6875 L 0.890625 -2.6875 C 0.75 -2.6875 0.5625 -2.6875 0.5625 -2.484375 C 0.5625 -2.28125 0.75 -2.28125 0.890625 -2.28125 L 3.671875 -2.28125 L 3.671875 0.5 C 3.671875 0.640625 3.671875 0.828125 3.859375 0.828125 C 4.0625 0.828125 4.0625 0.640625 4.0625 0.5 L 4.0625 -2.28125 L 6.84375 -2.28125 C 6.96875 -2.28125 7.171875 -2.28125 7.171875 -2.484375 Z M 7.171875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph2-1">
<path style="stroke:none;" d="M 7.1875 -2.71875 L 6.71875 -2.71875 C 6.5 -1.34375 6.21875 -0.46875 4.375 -0.46875 L 2.875 -0.46875 L 2.875 -3.265625 L 3.421875 -3.265625 C 4.375 -3.265625 4.46875 -2.84375 4.46875 -2.109375 L 4.9375 -2.109375 L 4.9375 -4.90625 L 4.46875 -4.90625 C 4.46875 -4.15625 4.375 -3.734375 3.421875 -3.734375 L 2.875 -3.734375 L 2.875 -6.296875 L 4.375 -6.296875 C 5.984375 -6.296875 6.234375 -5.5625 6.40625 -4.359375 L 6.859375 -4.359375 L 6.5625 -6.75 L 0.390625 -6.75 L 0.390625 -6.296875 L 1.453125 -6.296875 L 1.453125 -0.46875 L 0.390625 -0.46875 L 0.390625 0 L 6.734375 0 Z M 7.1875 -2.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d1-glyph2-2">
<path style="stroke:none;" d="M 6.109375 0 L 6.109375 -0.46875 L 5.421875 -0.46875 L 5.421875 -3.046875 C 5.421875 -4.078125 4.890625 -4.46875 3.890625 -4.46875 C 2.9375 -4.46875 2.421875 -3.90625 2.15625 -3.40625 L 2.15625 -4.46875 L 0.453125 -4.390625 L 0.453125 -3.921875 C 1.0625 -3.921875 1.140625 -3.921875 1.140625 -3.53125 L 1.140625 -0.46875 L 0.453125 -0.46875 L 0.453125 0 L 1.703125 -0.03125 L 2.953125 0 L 2.953125 -0.46875 L 2.265625 -0.46875 L 2.265625 -2.546875 C 2.265625 -3.625 3.125 -4.109375 3.75 -4.109375 C 4.078125 -4.109375 4.296875 -3.90625 4.296875 -3.15625 L 4.296875 -0.46875 L 3.609375 -0.46875 L 3.609375 0 L 4.859375 -0.03125 Z M 6.109375 0 "/>
</symbol>
</g>
<clipPath id="fisica2_lez04b_d1-clip1">
  <path d="M 102 0.328125 L 118 0.328125 L 118 16 L 102 16 Z M 102 0.328125 "/>
</clipPath>
<clipPath id="fisica2_lez04b_d1-clip2">
  <path d="M 102 205 L 118 205 L 118 220.609375 L 102 220.609375 Z M 102 205 "/>
</clipPath>
</defs>
<g id="fisica2_lez04b_d1-surface1">
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 85.042082 -0.00120406 C 85.042082 46.968859 46.966826 85.040197 0.000681473 85.040197 C -46.965463 85.040197 -85.040719 46.968859 -85.040719 -0.00120406 C -85.040719 -46.967348 -46.965463 -85.038687 0.000681473 -85.038687 C 46.966826 -85.038687 85.042082 -46.967348 85.042082 -0.00120406 Z M 85.042082 -0.00120406 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d1-glyph0-1" x="40.023339" y="47.013192"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 112.820312 110.46875 C 112.820312 108.988281 111.621094 107.785156 110.140625 107.785156 C 108.660156 107.785156 107.457031 108.988281 107.457031 110.46875 C 107.457031 111.949219 108.660156 113.148438 110.140625 113.148438 C 111.621094 113.148438 112.820312 111.949219 112.820312 110.46875 Z M 112.820312 110.46875 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d1-glyph1-1" x="90.352578" y="121.465295"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d1-glyph0-2" x="98.077517" y="121.465295"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L 100.829384 -0.00120406 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.650135 -0.00120406 C 4.078046 0.139859 1.570259 0.923542 -0.00102617 1.777757 L -0.00102617 -1.780165 C 1.570259 -0.92595 4.078046 -0.138349 4.650135 -0.00120406 Z M 4.650135 -0.00120406 " transform="matrix(0.996895,0,0,-0.996895,210.657273,110.46755)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L 71.296276 71.298309 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.648882 0.00143748 C 4.078104 0.139976 1.570561 0.924102 -0.000463184 1.780269 L -0.000463184 -1.777394 C 1.56779 -0.923998 4.078104 -0.137101 4.648882 0.00143748 Z M 4.648882 0.00143748 " transform="matrix(0.704904,-0.704904,-0.704904,-0.704904,181.216184,39.391312)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L 0.000681473 100.831417 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;" d="M 110.140625 5.316406 C 110 5.886719 109.21875 8.386719 108.367188 9.949219 L 111.914062 9.949219 C 111.0625 8.386719 110.277344 5.886719 110.140625 5.316406 Z M 110.140625 5.316406 "/>
<g clip-path="url(#fisica2_lez04b_d1-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.648249 -0.000681473 C 4.07616 0.140382 1.568373 0.924065 0.00100672 1.77828 L 0.00100672 -1.779643 C 1.568373 -0.925428 4.07616 -0.137826 4.648249 -0.000681473 Z M 4.648249 -0.000681473 " transform="matrix(0,-0.996895,-0.996895,0,110.139946,9.950222)"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L -71.298832 71.298309 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.650689 0.000369527 C 4.079911 0.138908 1.566826 0.923035 0.00134382 1.779201 L 0.00134382 -1.778462 C 1.569597 -0.925066 4.079911 -0.138169 4.650689 0.000369527 Z M 4.650689 0.000369527 " transform="matrix(-0.704904,-0.704904,-0.704904,0.704904,39.063708,39.391312)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L -100.831939 -0.00120406 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.648772 0.00120406 C 4.076683 0.138349 1.568896 0.92595 0.0015293 1.780165 L 0.0015293 -1.777757 C 1.568896 -0.923542 4.076683 -0.139859 4.648772 0.00120406 Z M 4.648772 0.00120406 " transform="matrix(-0.996895,0,0,0.996895,9.622618,110.46755)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L -71.298832 -71.296799 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.649621 -0.00143748 C 4.078843 0.137101 1.568529 0.923998 0.00027587 1.777394 L 0.00027587 -1.780269 C 1.565758 -0.924102 4.078843 -0.139976 4.649621 -0.00143748 Z M 4.649621 -0.00143748 " transform="matrix(-0.704904,0.704904,0.704904,0.704904,39.063708,181.543788)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L 0.000681473 -100.829906 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;" d="M 110.140625 215.617188 C 110.277344 215.050781 111.0625 212.546875 111.914062 210.984375 L 108.367188 210.984375 C 109.21875 212.546875 110 215.050781 110.140625 215.617188 Z M 110.140625 215.617188 "/>
<g clip-path="url(#fisica2_lez04b_d1-clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.646739 0.000681473 C 4.078568 0.137826 1.566863 0.925428 -0.000503585 1.779643 L -0.000503585 -1.77828 C 1.566863 -0.924065 4.078568 -0.140382 4.646739 0.000681473 Z M 4.646739 0.000681473 " transform="matrix(0,0.996895,0.996895,0,110.139946,210.984877)"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.10246 -0.00120406 L 0.000681473 -0.00120406 L 71.296276 -71.296799 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.647814 -0.000369527 C 4.077036 0.138169 1.566722 0.925066 -0.00153114 1.778462 L -0.00153114 -1.779201 C 1.569493 -0.923035 4.077036 -0.138908 4.647814 -0.000369527 Z M 4.647814 -0.000369527 " transform="matrix(0.704904,0.704904,0.704904,-0.704904,181.216184,181.543788)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d1-glyph2-1" x="221.737352" y="113.871946"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 66.844954 54.304135 L 80.449698 30.734858 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 73.647326 42.521456 L 96.699372 55.828399 " transform="matrix(0.996895,0,0,-0.996895,110.139946,110.46755)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.627045 -0.000870561 C 3.180879 0.111928 1.224476 0.743718 0.00174914 1.431546 L 0.000206431 -1.431685 C 1.224666 -0.74501 3.18329 -0.111173 3.627045 -0.000870561 Z M 3.627045 -0.000870561 " transform="matrix(0.863321,-0.498428,-0.498428,-0.863321,206.540137,54.810974)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d1-glyph2-2" x="217.074874" y="49.034895"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d1-glyph0-3" x="190.781769" y="94.286948"/>
  <use xlink:href="#fisica2_lez04b_d1-glyph0-1" x="195.951201" y="94.286948"/>
</g>
</g>
</svg></figure>
        <p>Le linee di campo, essendo la carica positiva, sono radiali e uscenti. Su una sfera centrata nella carica la normale uscente $\\hat{n}$ è parallela a $\\vec{E}$ in ogni punto, dunque $\\alpha = 0$ e il contributo di ogni elemento al flusso è il massimo possibile a parità di area, $d\\Phi = E\\, dS$; il flusso totale vale invece $Q/\\varepsilon_0$ per <em>ogni</em> superficie chiusa che racchiuda la carica, qualunque sia la sua forma.</p>
        <p>Generalizziamo: consideriamo una superficie chiusa $S$ di forma qualsiasi, con una carica $Q$ al suo interno. La carica produce sempre un campo elettrostatico, e le linee di campo si propagano radialmente a partire dalla carica; incontrando la superficie $S$, la attraversano con inclinazioni diverse da punto a punto.</p>
        <figure class="figura" data-id="fisica2_lez04b_d2"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04b_d2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="159.932pt" height="157.88pt" viewBox="0 0 159.932 157.88" version="1.2"><style>#fisica2_lez04b_d2 [fill="rgb(0%,0%,100%)"],#fisica2_lez04b_d2 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d2 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d2 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez04b_d2 [stroke="rgb(0%,0%,100%)"],#fisica2_lez04b_d2 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d2 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d2 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#fisica2_lez04b_d2 [fill="rgb(100%,0%,0%)"],#fisica2_lez04b_d2 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez04b_d2 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04b_d2 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez04b_d2 [stroke="rgb(100%,0%,0%)"],#fisica2_lez04b_d2 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez04b_d2 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04b_d2 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04b_d2-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d2-glyph0-1">
<path style="stroke:none;" d="M 5.5 -2.34375 C 5.5 -3.03125 5.171875 -3.359375 5.015625 -3.5 C 4.78125 -3.734375 4.640625 -3.765625 3.75 -4 L 3.078125 -4.1875 C 2.8125 -4.265625 2.484375 -4.5625 2.484375 -5.09375 C 2.484375 -5.890625 3.28125 -6.734375 4.21875 -6.734375 C 5.046875 -6.734375 5.65625 -6.3125 5.65625 -5.203125 C 5.65625 -4.875 5.609375 -4.703125 5.609375 -4.640625 C 5.609375 -4.640625 5.609375 -4.53125 5.734375 -4.53125 C 5.828125 -4.53125 5.84375 -4.5625 5.875 -4.734375 L 6.421875 -6.921875 C 6.421875 -6.953125 6.40625 -7.015625 6.3125 -7.015625 C 6.265625 -7.015625 6.25 -7 6.125 -6.875 L 5.65625 -6.296875 C 5.390625 -6.765625 4.875 -7.015625 4.234375 -7.015625 C 2.96875 -7.015625 1.765625 -5.875 1.765625 -4.671875 C 1.765625 -3.859375 2.296875 -3.40625 2.8125 -3.25 L 3.875 -2.96875 C 4.234375 -2.890625 4.78125 -2.734375 4.78125 -1.921875 C 4.78125 -1.03125 3.96875 -0.09375 3 -0.09375 C 2.359375 -0.09375 1.25 -0.3125 1.25 -1.546875 C 1.25 -1.78125 1.296875 -2.015625 1.3125 -2.078125 C 1.328125 -2.125 1.328125 -2.15625 1.328125 -2.15625 C 1.328125 -2.25 1.265625 -2.265625 1.21875 -2.265625 C 1.171875 -2.265625 1.140625 -2.25 1.109375 -2.21875 C 1.078125 -2.1875 0.515625 0.09375 0.515625 0.125 C 0.515625 0.171875 0.5625 0.21875 0.625 0.21875 C 0.671875 0.21875 0.6875 0.203125 0.8125 0.0625 L 1.296875 -0.5 C 1.71875 0.078125 2.40625 0.21875 2.96875 0.21875 C 4.328125 0.21875 5.5 -1.109375 5.5 -2.34375 Z M 5.5 -2.34375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d2-glyph0-2">
<path style="stroke:none;" d="M 6.453125 0 C 6.453125 -0.0625 6.390625 -0.09375 6.34375 -0.09375 C 6.265625 -0.09375 6.25 -0.046875 6.234375 0.015625 C 5.984375 0.71875 5.421875 0.96875 5.0625 0.96875 C 4.609375 0.96875 4.453125 0.703125 4.359375 -0.0625 C 5.90625 -0.640625 7.359375 -2.421875 7.359375 -4.34375 C 7.359375 -5.9375 6.3125 -7.015625 4.828125 -7.015625 C 2.671875 -7.015625 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.609375 0.21875 3.03125 0.21875 C 3.28125 0.21875 3.625 0.171875 4.015625 0.0625 C 3.96875 0.6875 3.96875 0.703125 3.96875 0.84375 C 3.96875 1.15625 3.96875 1.9375 4.796875 1.9375 C 5.984375 1.9375 6.453125 0.109375 6.453125 0 Z M 6.484375 -4.65625 C 6.484375 -3.65625 5.984375 -1.328125 4.3125 -0.390625 C 4.265625 -0.75 4.15625 -1.46875 3.4375 -1.46875 C 2.90625 -1.46875 2.421875 -0.96875 2.421875 -0.453125 C 2.421875 -0.265625 2.484375 -0.140625 2.484375 -0.140625 C 1.703125 -0.453125 1.359375 -1.21875 1.359375 -2.125 C 1.359375 -2.8125 1.625 -4.21875 2.375 -5.296875 C 3.109375 -6.3125 4.046875 -6.765625 4.765625 -6.765625 C 5.765625 -6.765625 6.484375 -5.984375 6.484375 -4.65625 Z M 4.046875 -0.40625 C 4.046875 -0.265625 4.03125 -0.25 3.9375 -0.203125 C 3.671875 -0.09375 3.375 -0.03125 3.09375 -0.03125 C 2.953125 -0.03125 2.640625 -0.03125 2.640625 -0.453125 C 2.640625 -0.859375 3.015625 -1.25 3.4375 -1.25 C 3.859375 -1.25 4.046875 -1.015625 4.046875 -0.40625 Z M 4.046875 -0.40625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d2-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d2-glyph1-1">
<path style="stroke:none;" d="M 7.171875 -2.484375 C 7.171875 -2.6875 6.984375 -2.6875 6.84375 -2.6875 L 4.078125 -2.6875 L 4.078125 -5.46875 C 4.078125 -5.609375 4.078125 -5.796875 3.875 -5.796875 C 3.671875 -5.796875 3.671875 -5.609375 3.671875 -5.46875 L 3.671875 -2.6875 L 0.890625 -2.6875 C 0.75 -2.6875 0.5625 -2.6875 0.5625 -2.484375 C 0.5625 -2.296875 0.75 -2.296875 0.890625 -2.296875 L 3.671875 -2.296875 L 3.671875 0.5 C 3.671875 0.640625 3.671875 0.828125 3.875 0.828125 C 4.078125 0.828125 4.078125 0.640625 4.078125 0.5 L 4.078125 -2.296875 L 6.84375 -2.296875 C 6.984375 -2.296875 7.171875 -2.296875 7.171875 -2.484375 Z M 7.171875 -2.484375 "/>
</symbol>
</g>
<clipPath id="fisica2_lez04b_d2-clip1">
  <path d="M 0.0273438 5 L 159.835938 5 L 159.835938 148 L 0.0273438 148 Z M 0.0273438 5 "/>
</clipPath>
</defs>
<g id="fisica2_lez04b_d2-surface1">
<g clip-path="url(#fisica2_lez04b_d2-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 68.031684 51.022513 C 90.685608 43.473811 109.59841 -7.588408 102.049708 -34.014729 C 94.497097 -60.444958 64.220195 -68.032753 34.017569 -68.032753 C 3.811034 -68.032753 -26.465868 -49.119951 -34.01457 -34.014729 C -41.567181 -18.913415 -22.654379 -18.878232 -0.000454855 -0.000613773 C 22.653469 18.877005 45.37776 58.575124 68.031684 51.022513 Z M 68.031684 51.022513 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d2-glyph0-1" x="110.582729" y="14.102281"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,0%,0%);fill-opacity:1;" d="M 81.722656 85.601562 C 81.722656 84.609375 80.921875 83.808594 79.933594 83.808594 C 78.941406 83.808594 78.140625 84.609375 78.140625 85.601562 C 78.140625 86.589844 78.941406 87.390625 79.933594 87.390625 C 80.921875 87.390625 81.722656 86.589844 81.722656 85.601562 Z M 81.722656 85.601562 "/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d2-glyph1-1" x="72.12496" y="95.919095"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d2-glyph0-2" x="79.868074" y="95.919095"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L 101.650968 -17.009626 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070528 2.390826 C -1.695243 0.956143 -0.850852 0.279848 0.00135768 -0.00161576 C -0.850852 -0.27917 -1.695243 -0.955465 -2.070528 -2.390149 " transform="matrix(0.999241,0,0,-0.999241,147.713487,85.599948)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L 81.839045 30.81576 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071904 2.391669 C -1.6932 0.957017 -0.8501 0.279773 -0.00147146 0.000582902 C -0.8501 -0.278608 -1.6932 -0.955852 -2.071904 -2.390504 " transform="matrix(0.706563,-0.706563,-0.706563,-0.706563,127.860827,37.671247)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L 34.017569 50.623773 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073613 2.390953 C -1.694419 0.95627 -0.850028 0.279975 -0.0017272 -0.00148912 C -0.850028 -0.279044 -1.694419 -0.955339 -2.073613 -2.390022 " transform="matrix(0,-0.999241,-0.999241,0,79.932106,17.818587)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L -13.807816 30.81576 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071245 2.391162 C -1.692541 0.95651 -0.849442 0.279266 -0.000813148 0.0000754074 C -0.849442 -0.279115 -1.692541 -0.956359 -2.071245 -2.391011 " transform="matrix(-0.706563,-0.706563,-0.706563,0.706563,32.003385,37.671247)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L -33.615829 -17.009626 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073507 2.390149 C -1.694312 0.955465 -0.849921 0.27917 -0.00162056 0.00161576 C -0.849921 -0.279848 -1.694312 -0.956143 -2.073507 -2.390826 " transform="matrix(-0.999241,0,0,0.999241,12.150724,85.599948)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L -13.807816 -64.831102 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.07176 2.390496 C -1.693056 0.955845 -0.849956 0.2786 -0.00132771 -0.000589973 C -0.849956 -0.27978 -1.693056 -0.957025 -2.07176 -2.391676 " transform="matrix(-0.706563,0.706563,0.706563,0.706563,32.003385,133.528699)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L 34.017569 -84.643024 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070432 2.390022 C -1.695147 0.955339 -0.850755 0.279044 0.00145432 0.00148912 C -0.850755 -0.279975 -1.695147 -0.95627 -2.070432 -2.390953 " transform="matrix(0,0.999241,0.999241,0,79.932106,153.381359)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 34.017569 -17.009626 L 81.839045 -64.831102 " transform="matrix(0.999241,0,0,-0.999241,45.941861,68.604855)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072418 2.391018 C -1.693714 0.956366 -0.850614 0.279122 -0.00198602 -0.0000683362 C -0.850614 -0.279259 -1.693714 -0.956503 -2.072418 -2.391155 " transform="matrix(0.706563,0.706563,0.706563,-0.706563,127.860827,133.528699)"/>
</g>
</svg></figure>`,
        subsections: [
          {
            subtitle: "Flusso infinitesimo del campo elettrico",
            content: `<p>Quando una superficie è investita da un campo vettoriale, come il campo elettrostatico $\\vec{E}$, abbiamo un <strong>flusso</strong>. Il flusso infinitesimo attraverso un elemento di superficie orientato $d\\vec{S} = \\hat{n}\\, dS$ è</p>
            <p>$$d\\Phi(\\vec{E}) = \\vec{E} \\cdot d\\vec{S} = \\vec{E} \\cdot \\hat{n} \\, dS = E \\, \\cos\\alpha \\, dS,$$</p>
            <p>dove $\\hat{n}$ è il versore normale nel punto considerato e $\\alpha$ l'angolo tra $\\vec{E}$ e $\\hat{n}$. Il flusso attraverso una superficie finita si ottiene integrando: $\\Phi_S(\\vec{E}) = \\int_S \\vec{E}\\cdot d\\vec{S}$.</p>`
          },
          {
            subtitle: "Convenzione sulla normale per superfici chiuse",
            content: `<p>Quando si lavora con una superficie <em>chiusa</em>, per convenzione il versore normale $\\hat{n}$ è scelto in ogni punto <strong>uscente</strong> dal volume racchiuso. Il flusso attraverso una superficie chiusa si indica con il simbolo di integrale su circuito chiuso:</p>
            <p>$$\\Phi_S(\\vec{E}) = \\oint_S \\vec{E}\\cdot \\hat{n}\\, dS .$$</p>`
          },
          {
            subtitle: "Che cosa fissa, e che cosa non fissa, la convenzione",
            content: `<p>Pensate alle porte di emergenza di quest'aula: sono progettate per essere attraversate dall'interno verso l'esterno, e questo definisce quale sia la direzione che chiamiamo «positiva».</p>
            <p>Attenzione però: la convenzione stabilisce <em>soltanto</em> il segno positivo del flusso, non impone nulla al campo. Il campo elettrico può perfettamente <strong>entrare</strong> attraverso un elemento di superficie: in quel punto l'angolo $\\alpha$ tra $\\vec{E}$ e la normale uscente è ottuso, $\\cos\\alpha \\lt 0$, e il contributo al flusso è <strong>negativo</strong>. Vedremo subito che proprio questi contributi negativi sono essenziali: nel caso di una carica esterna sono loro a cancellare esattamente quelli positivi.</p>`
          }
        ],
        formulas: [
          { label: "Flusso infinitesimo di E", latex: "d\\Phi(\\vec{E}) = \\vec{E} \\cdot \\hat{n} \\, dS = E \\cos\\alpha \\, dS" },
          { label: "Flusso su superficie chiusa", latex: "\\Phi_S(\\vec{E}) = \\oint_S \\vec{E} \\cdot \\hat{n} \\, dS" }
        ]
      },

      {
        id: "s04-dim-gauss-interna",
        type: "section",
        title: "Dimostrazione del teorema di Gauss — carica interna",
        icon: "✍️",
        content: `<p>Consideriamo una carica puntiforme $Q$ all'interno di una superficie chiusa $S$ generica e analizziamo il flusso attraverso un piccolo elemento $dS$. La costruzione geometrica di riferimento è la seguente: il cono infinitesimo di vertice $Q$ intercetta l'elemento $dS$ sulla superficie, attorno al punto $P$, e l'elemento $dS_{\\text{sfera}}$ sulla sfera di centro $Q$ e raggio $R = |QP|$. L'angolo $\\alpha$ è misurato in $P$ tra il versore radiale $\\hat{u}_R$ e la normale uscente $\\hat{n}$; vale $dS_{\\text{sfera}} = |\\cos\\alpha|\\, dS$.</p>
        <figure class="figura" data-id="fisica2_lez04b_d3"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04b_d3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="295.349pt" height="210.191pt" viewBox="0 0 295.349 210.191" version="1.2"><style>#fisica2_lez04b_d3 [fill="rgb(0%,0%,100%)"],#fisica2_lez04b_d3 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d3 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d3 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez04b_d3 [stroke="rgb(0%,0%,100%)"],#fisica2_lez04b_d3 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d3 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d3 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#fisica2_lez04b_d3 [fill="rgb(100%,0%,0%)"],#fisica2_lez04b_d3 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez04b_d3 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04b_d3 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez04b_d3 [stroke="rgb(100%,0%,0%)"],#fisica2_lez04b_d3 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez04b_d3 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04b_d3 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}#fisica2_lez04b_d3 [fill="rgb(0%,0%,0%)"],#fisica2_lez04b_d3 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez04b_d3 [stroke="rgb(0%,0%,0%)"],#fisica2_lez04b_d3 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez04b_d3 [fill="rgb(100%,100%,100%)"],#fisica2_lez04b_d3 [style*="fill:rgb(100%,100%,100%)"]{fill:var(--bg-primary)!important}#fisica2_lez04b_d3 [stroke="rgb(100%,100%,100%)"],#fisica2_lez04b_d3 [style*="stroke:rgb(100%,100%,100%)"]{stroke:var(--bg-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-1">
<path style="stroke:none;" d="M 5.484375 -2.328125 C 5.484375 -3.015625 5.15625 -3.359375 5 -3.5 C 4.765625 -3.71875 4.625 -3.765625 3.734375 -3.984375 L 3.078125 -4.171875 C 2.8125 -4.25 2.46875 -4.546875 2.46875 -5.0625 C 2.46875 -5.875 3.265625 -6.71875 4.203125 -6.71875 C 5.03125 -6.71875 5.640625 -6.296875 5.640625 -5.171875 C 5.640625 -4.859375 5.59375 -4.6875 5.59375 -4.625 C 5.59375 -4.625 5.59375 -4.53125 5.71875 -4.53125 C 5.8125 -4.53125 5.828125 -4.546875 5.859375 -4.71875 L 6.40625 -6.890625 C 6.40625 -6.921875 6.375 -7 6.296875 -7 C 6.234375 -7 6.234375 -6.984375 6.109375 -6.84375 L 5.640625 -6.28125 C 5.375 -6.75 4.859375 -7 4.21875 -7 C 2.953125 -7 1.765625 -5.859375 1.765625 -4.65625 C 1.765625 -3.84375 2.296875 -3.390625 2.796875 -3.25 L 3.859375 -2.96875 C 4.234375 -2.875 4.765625 -2.734375 4.765625 -1.921875 C 4.765625 -1.015625 3.953125 -0.09375 2.984375 -0.09375 C 2.34375 -0.09375 1.25 -0.3125 1.25 -1.53125 C 1.25 -1.78125 1.296875 -2.015625 1.3125 -2.078125 C 1.3125 -2.109375 1.328125 -2.140625 1.328125 -2.140625 C 1.328125 -2.25 1.265625 -2.25 1.203125 -2.25 C 1.15625 -2.25 1.140625 -2.25 1.109375 -2.21875 C 1.078125 -2.171875 0.515625 0.09375 0.515625 0.125 C 0.515625 0.171875 0.5625 0.21875 0.625 0.21875 C 0.671875 0.21875 0.6875 0.203125 0.796875 0.0625 L 1.296875 -0.5 C 1.71875 0.078125 2.390625 0.21875 2.96875 0.21875 C 4.3125 0.21875 5.484375 -1.09375 5.484375 -2.328125 Z M 5.484375 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-2">
<path style="stroke:none;" d="M 6.4375 0 C 6.4375 -0.0625 6.375 -0.09375 6.328125 -0.09375 C 6.25 -0.09375 6.234375 -0.046875 6.21875 0.015625 C 5.96875 0.71875 5.390625 0.96875 5.046875 0.96875 C 4.59375 0.96875 4.4375 0.6875 4.34375 -0.0625 C 5.890625 -0.640625 7.34375 -2.40625 7.34375 -4.328125 C 7.34375 -5.921875 6.296875 -7 4.8125 -7 C 2.671875 -7 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.59375 0.21875 3.03125 0.21875 C 3.28125 0.21875 3.609375 0.171875 4 0.0625 C 3.953125 0.6875 3.953125 0.703125 3.953125 0.828125 C 3.953125 1.15625 3.953125 1.921875 4.78125 1.921875 C 5.96875 1.921875 6.4375 0.109375 6.4375 0 Z M 6.46875 -4.640625 C 6.46875 -3.65625 5.96875 -1.328125 4.296875 -0.390625 C 4.25 -0.75 4.140625 -1.46875 3.421875 -1.46875 C 2.890625 -1.46875 2.40625 -0.96875 2.40625 -0.453125 C 2.40625 -0.265625 2.46875 -0.140625 2.46875 -0.140625 C 1.703125 -0.453125 1.359375 -1.21875 1.359375 -2.109375 C 1.359375 -2.796875 1.625 -4.203125 2.375 -5.28125 C 3.09375 -6.296875 4.03125 -6.75 4.75 -6.75 C 5.75 -6.75 6.46875 -5.96875 6.46875 -4.640625 Z M 4.03125 -0.40625 C 4.03125 -0.265625 4.015625 -0.25 3.921875 -0.203125 C 3.65625 -0.09375 3.359375 -0.03125 3.078125 -0.03125 C 2.953125 -0.03125 2.625 -0.03125 2.625 -0.453125 C 2.625 -0.859375 3 -1.25 3.421875 -1.25 C 3.84375 -1.25 4.03125 -1.015625 4.03125 -0.40625 Z M 4.03125 -0.40625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-3">
<path style="stroke:none;" d="M 6.40625 -5.484375 C 6.40625 -5.15625 6.25 -4.46875 5.859375 -4.078125 C 5.609375 -3.8125 5.078125 -3.5 4.1875 -3.5 L 3.078125 -3.5 L 3.71875 -6.09375 C 3.78125 -6.328125 3.8125 -6.421875 4 -6.453125 C 4.09375 -6.46875 4.40625 -6.46875 4.609375 -6.46875 C 5.3125 -6.46875 6.40625 -6.46875 6.40625 -5.484375 Z M 7.484375 -0.921875 C 7.484375 -1.046875 7.375 -1.046875 7.375 -1.046875 C 7.28125 -1.046875 7.265625 -0.96875 7.25 -0.90625 C 7 -0.171875 6.5625 0 6.34375 0 C 6.015625 0 5.9375 -0.21875 5.9375 -0.609375 C 5.9375 -0.90625 6 -1.421875 6.046875 -1.734375 C 6.0625 -1.875 6.078125 -2.0625 6.078125 -2.203125 C 6.078125 -2.96875 5.421875 -3.28125 5.15625 -3.375 C 6.15625 -3.59375 7.328125 -4.28125 7.328125 -5.28125 C 7.328125 -6.140625 6.4375 -6.78125 5.140625 -6.78125 L 2.3125 -6.78125 C 2.109375 -6.78125 2.03125 -6.78125 2.03125 -6.578125 C 2.03125 -6.46875 2.109375 -6.46875 2.296875 -6.46875 C 2.296875 -6.46875 2.515625 -6.46875 2.671875 -6.453125 C 2.859375 -6.421875 2.953125 -6.421875 2.953125 -6.296875 C 2.953125 -6.25 2.9375 -6.21875 2.90625 -6.109375 L 1.578125 -0.78125 C 1.484375 -0.390625 1.453125 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.40625 -0.3125 0.40625 -0.109375 C 0.40625 0 0.546875 0 0.546875 0 L 1.796875 -0.03125 L 3.0625 0 C 3.140625 0 3.25 0 3.25 -0.203125 C 3.25 -0.3125 3.171875 -0.3125 2.96875 -0.3125 C 2.609375 -0.3125 2.328125 -0.3125 2.328125 -0.484375 C 2.328125 -0.546875 2.34375 -0.59375 2.359375 -0.65625 L 3.015625 -3.28125 L 4.203125 -3.28125 C 5.09375 -3.28125 5.28125 -2.734375 5.28125 -2.375 C 5.28125 -2.234375 5.203125 -1.921875 5.140625 -1.703125 C 5.0625 -1.421875 4.984375 -1.046875 4.984375 -0.859375 C 4.984375 0.21875 6.171875 0.21875 6.296875 0.21875 C 7.140625 0.21875 7.484375 -0.78125 7.484375 -0.921875 Z M 7.484375 -0.921875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-4">
<path style="stroke:none;" d="M 7.484375 -5.28125 C 7.484375 -6.046875 6.828125 -6.78125 5.53125 -6.78125 L 2.3125 -6.78125 C 2.125 -6.78125 2.015625 -6.78125 2.015625 -6.59375 C 2.015625 -6.46875 2.109375 -6.46875 2.296875 -6.46875 C 2.4375 -6.46875 2.609375 -6.453125 2.734375 -6.453125 C 2.890625 -6.421875 2.953125 -6.40625 2.953125 -6.296875 C 2.953125 -6.25 2.9375 -6.21875 2.90625 -6.109375 L 1.578125 -0.78125 C 1.484375 -0.390625 1.453125 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.390625 -0.3125 0.390625 -0.125 C 0.390625 0 0.515625 0 0.546875 0 L 1.8125 -0.03125 L 2.4375 -0.015625 C 2.65625 -0.015625 2.875 0 3.078125 0 C 3.15625 0 3.28125 0 3.28125 -0.203125 C 3.28125 -0.3125 3.1875 -0.3125 3 -0.3125 C 2.640625 -0.3125 2.359375 -0.3125 2.359375 -0.484375 C 2.359375 -0.546875 2.375 -0.59375 2.390625 -0.65625 L 3 -3.140625 L 4.6875 -3.140625 C 6.109375 -3.140625 7.484375 -4.171875 7.484375 -5.28125 Z M 6.5625 -5.515625 C 6.5625 -5.125 6.359375 -4.28125 5.96875 -3.921875 C 5.484375 -3.46875 4.875 -3.390625 4.4375 -3.390625 L 3.046875 -3.390625 L 3.71875 -6.09375 C 3.8125 -6.4375 3.828125 -6.46875 4.25 -6.46875 L 5.203125 -6.46875 C 6.03125 -6.46875 6.5625 -6.203125 6.5625 -5.515625 Z M 6.5625 -5.515625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-5">
<path style="stroke:none;" d="M 4.9375 -1.421875 C 4.9375 -1.515625 4.859375 -1.515625 4.828125 -1.515625 C 4.71875 -1.515625 4.71875 -1.484375 4.6875 -1.34375 C 4.515625 -0.6875 4.328125 -0.109375 3.921875 -0.109375 C 3.65625 -0.109375 3.625 -0.359375 3.625 -0.5625 C 3.625 -0.796875 3.65625 -0.875 3.6875 -1.046875 L 5.125 -6.78125 C 5.125 -6.78125 5.125 -6.890625 4.984375 -6.890625 C 4.84375 -6.890625 3.90625 -6.796875 3.734375 -6.78125 C 3.65625 -6.765625 3.59375 -6.71875 3.59375 -6.59375 C 3.59375 -6.46875 3.6875 -6.46875 3.828125 -6.46875 C 4.3125 -6.46875 4.328125 -6.40625 4.328125 -6.296875 L 4.296875 -6.109375 L 3.703125 -3.75 C 3.515625 -4.125 3.234375 -4.390625 2.78125 -4.390625 C 1.625 -4.390625 0.390625 -2.921875 0.390625 -1.484375 C 0.390625 -0.546875 0.9375 0.109375 1.71875 0.109375 C 1.921875 0.109375 2.40625 0.0625 3 -0.640625 C 3.078125 -0.21875 3.4375 0.109375 3.90625 0.109375 C 4.25 0.109375 4.484375 -0.125 4.640625 -0.4375 C 4.8125 -0.796875 4.9375 -1.421875 4.9375 -1.421875 Z M 3.546875 -3.125 L 3.0625 -1.1875 C 3 -1 3 -0.984375 2.859375 -0.8125 C 2.421875 -0.265625 2.015625 -0.109375 1.734375 -0.109375 C 1.234375 -0.109375 1.09375 -0.65625 1.09375 -1.046875 C 1.09375 -1.53125 1.421875 -2.765625 1.640625 -3.21875 C 1.953125 -3.796875 2.40625 -4.171875 2.796875 -4.171875 C 3.4375 -4.171875 3.578125 -3.359375 3.578125 -3.296875 C 3.578125 -3.234375 3.5625 -3.171875 3.546875 -3.125 Z M 3.546875 -3.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-6">
<path style="stroke:none;" d="M 6.203125 -6.109375 C 6.203125 -6.203125 6.125 -6.25 6.0625 -6.296875 C 5.84375 -6.453125 5.734375 -6.625 5.65625 -6.859375 C 5.640625 -6.953125 5.59375 -7.078125 5.453125 -7.078125 C 5.3125 -7.078125 5.265625 -6.953125 5.265625 -6.875 C 5.265625 -6.828125 5.34375 -6.515625 5.5 -6.296875 L 2.15625 -6.296875 C 1.984375 -6.296875 1.8125 -6.296875 1.8125 -6.109375 C 1.8125 -5.90625 1.984375 -5.90625 2.15625 -5.90625 L 5.328125 -5.90625 C 5.1875 -5.78125 4.859375 -5.5 4.859375 -5.3125 C 4.859375 -5.21875 4.953125 -5.125 5.0625 -5.125 C 5.15625 -5.125 5.203125 -5.1875 5.25 -5.25 C 5.375 -5.390625 5.59375 -5.671875 6.03125 -5.890625 C 6.109375 -5.9375 6.203125 -5.984375 6.203125 -6.109375 Z M 6.203125 -6.109375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-7">
<path style="stroke:none;" d="M 7.078125 -2.453125 C 7.078125 -2.453125 7.078125 -2.5625 6.953125 -2.5625 C 6.859375 -2.5625 6.84375 -2.5 6.828125 -2.4375 C 6.1875 -0.96875 5.8125 -0.3125 4.125 -0.3125 L 2.671875 -0.3125 C 2.53125 -0.3125 2.515625 -0.3125 2.453125 -0.3125 C 2.34375 -0.328125 2.328125 -0.34375 2.328125 -0.421875 C 2.328125 -0.453125 2.328125 -0.46875 2.375 -0.640625 L 3.046875 -3.359375 L 4.03125 -3.359375 C 4.875 -3.359375 4.875 -3.140625 4.875 -2.890625 C 4.875 -2.828125 4.875 -2.703125 4.796875 -2.40625 C 4.78125 -2.359375 4.765625 -2.328125 4.765625 -2.296875 C 4.765625 -2.25 4.8125 -2.1875 4.90625 -2.1875 C 4.984375 -2.1875 5.015625 -2.25 5.046875 -2.390625 L 5.609375 -4.71875 C 5.609375 -4.765625 5.5625 -4.828125 5.5 -4.828125 C 5.40625 -4.828125 5.390625 -4.765625 5.359375 -4.640625 C 5.15625 -3.890625 4.96875 -3.65625 4.0625 -3.65625 L 3.125 -3.65625 L 3.71875 -6.046875 C 3.8125 -6.40625 3.8125 -6.4375 4.25 -6.4375 L 5.65625 -6.4375 C 6.859375 -6.4375 7.15625 -6.15625 7.15625 -5.34375 C 7.15625 -5.09375 7.15625 -5.078125 7.125 -4.8125 C 7.125 -4.75 7.109375 -4.6875 7.109375 -4.640625 C 7.109375 -4.578125 7.140625 -4.515625 7.234375 -4.515625 C 7.34375 -4.515625 7.359375 -4.578125 7.375 -4.765625 L 7.578125 -6.484375 C 7.59375 -6.75 7.546875 -6.75 7.296875 -6.75 L 2.296875 -6.75 C 2.09375 -6.75 2 -6.75 2 -6.546875 C 2 -6.4375 2.078125 -6.4375 2.265625 -6.4375 C 2.640625 -6.4375 2.921875 -6.4375 2.921875 -6.265625 C 2.921875 -6.21875 2.921875 -6.203125 2.875 -6.015625 L 1.5625 -0.78125 C 1.453125 -0.390625 1.4375 -0.3125 0.65625 -0.3125 C 0.484375 -0.3125 0.375 -0.3125 0.375 -0.125 C 0.375 0 0.46875 0 0.65625 0 L 5.796875 0 C 6.03125 0 6.046875 -0.015625 6.109375 -0.171875 L 7.03125 -2.3125 C 7.046875 -2.359375 7.078125 -2.453125 7.078125 -2.453125 Z M 7.078125 -2.453125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-8">
<path style="stroke:none;" d="M 5.390625 -1.421875 C 5.390625 -1.515625 5.296875 -1.515625 5.265625 -1.515625 C 5.171875 -1.515625 5.15625 -1.484375 5.125 -1.34375 C 4.984375 -0.78125 4.796875 -0.109375 4.390625 -0.109375 C 4.171875 -0.109375 4.078125 -0.234375 4.078125 -0.5625 C 4.078125 -0.78125 4.203125 -1.25 4.28125 -1.59375 L 4.546875 -2.671875 C 4.578125 -2.8125 4.6875 -3.1875 4.71875 -3.34375 C 4.765625 -3.578125 4.875 -3.953125 4.875 -4.015625 C 4.875 -4.1875 4.734375 -4.28125 4.578125 -4.28125 C 4.53125 -4.28125 4.28125 -4.265625 4.203125 -3.921875 L 3.453125 -0.9375 C 3.4375 -0.90625 3.046875 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.5625 1.703125 -0.921875 C 1.703125 -1.484375 1.984375 -2.265625 2.25 -2.953125 C 2.359375 -3.25 2.40625 -3.390625 2.40625 -3.578125 C 2.40625 -4.015625 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.8125 -3.796875 1.1875 -4.171875 1.5625 -4.171875 C 1.65625 -4.171875 1.8125 -4.15625 1.8125 -3.84375 C 1.8125 -3.609375 1.703125 -3.3125 1.640625 -3.171875 C 1.28125 -2.1875 1.078125 -1.5625 1.078125 -1.078125 C 1.078125 -0.140625 1.75 0.109375 2.296875 0.109375 C 2.953125 0.109375 3.296875 -0.34375 3.46875 -0.5625 C 3.578125 -0.15625 3.921875 0.109375 4.359375 0.109375 C 4.703125 0.109375 4.9375 -0.125 5.09375 -0.4375 C 5.265625 -0.796875 5.390625 -1.421875 5.390625 -1.421875 Z M 5.390625 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-9">
<path style="stroke:none;" d="M 5.671875 -1.421875 C 5.671875 -1.515625 5.578125 -1.515625 5.546875 -1.515625 C 5.453125 -1.515625 5.453125 -1.484375 5.390625 -1.34375 C 5.203125 -0.671875 4.875 -0.109375 4.390625 -0.109375 C 4.21875 -0.109375 4.140625 -0.203125 4.140625 -0.4375 C 4.140625 -0.6875 4.234375 -0.921875 4.328125 -1.140625 C 4.515625 -1.671875 4.9375 -2.765625 4.9375 -3.328125 C 4.9375 -3.984375 4.5 -4.390625 3.796875 -4.390625 C 2.890625 -4.390625 2.40625 -3.75 2.25 -3.515625 C 2.1875 -4.078125 1.78125 -4.390625 1.328125 -4.390625 C 0.875 -4.390625 0.6875 -4 0.578125 -3.8125 C 0.421875 -3.484375 0.28125 -2.890625 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.765625 0.578125 -2.984375 C 0.75 -3.6875 0.9375 -4.171875 1.296875 -4.171875 C 1.5 -4.171875 1.609375 -4.03125 1.609375 -3.703125 C 1.609375 -3.5 1.578125 -3.390625 1.453125 -2.875 L 0.875 -0.578125 C 0.84375 -0.4375 0.78125 -0.203125 0.78125 -0.15625 C 0.78125 0.015625 0.921875 0.109375 1.078125 0.109375 C 1.1875 0.109375 1.375 0.03125 1.4375 -0.171875 C 1.453125 -0.1875 1.5625 -0.65625 1.625 -0.90625 L 1.84375 -1.796875 C 1.90625 -2.015625 1.96875 -2.234375 2.015625 -2.453125 L 2.140625 -2.953125 C 2.296875 -3.265625 2.8125 -4.171875 3.765625 -4.171875 C 4.203125 -4.171875 4.296875 -3.796875 4.296875 -3.46875 C 4.296875 -2.859375 3.8125 -1.59375 3.65625 -1.15625 C 3.5625 -0.9375 3.546875 -0.8125 3.546875 -0.703125 C 3.546875 -0.234375 3.90625 0.109375 4.359375 0.109375 C 5.296875 0.109375 5.671875 -1.34375 5.671875 -1.421875 Z M 5.671875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph0-10">
<path style="stroke:none;" d="M 5.84375 -0.59375 C 5.84375 -0.671875 5.78125 -0.6875 5.71875 -0.6875 C 5.65625 -0.6875 5.625 -0.671875 5.59375 -0.59375 C 5.421875 -0.109375 5.046875 -0.109375 5.046875 -0.109375 C 4.734375 -0.109375 4.734375 -0.890625 4.734375 -1.125 C 4.734375 -1.328125 4.734375 -1.34375 4.828125 -1.46875 C 5.765625 -2.640625 5.96875 -3.796875 5.96875 -3.796875 C 5.96875 -3.796875 5.96875 -3.90625 5.859375 -3.90625 C 5.75 -3.90625 5.75 -3.875 5.703125 -3.6875 C 5.53125 -3.0625 5.203125 -2.3125 4.734375 -1.71875 L 4.734375 -2.34375 C 4.734375 -3.90625 3.8125 -4.390625 3.078125 -4.390625 C 1.71875 -4.390625 0.40625 -2.96875 0.40625 -1.5625 C 0.40625 -0.640625 1 0.109375 2.015625 0.109375 C 2.640625 0.109375 3.359375 -0.125 4.109375 -0.71875 C 4.234375 -0.203125 4.5625 0.109375 5.015625 0.109375 C 5.53125 0.109375 5.84375 -0.4375 5.84375 -0.59375 Z M 4.0625 -0.984375 C 3.1875 -0.21875 2.4375 -0.109375 2.03125 -0.109375 C 1.4375 -0.109375 1.140625 -0.5625 1.140625 -1.1875 C 1.140625 -1.671875 1.40625 -2.75 1.71875 -3.25 C 2.1875 -3.984375 2.71875 -4.171875 3.0625 -4.171875 C 4.046875 -4.171875 4.046875 -2.875 4.046875 -2.09375 C 4.046875 -1.71875 4.046875 -1.15625 4.0625 -0.984375 Z M 4.0625 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-1">
<path style="stroke:none;" d="M 3.578125 -1.265625 C 3.578125 -1.796875 3.28125 -2.09375 3.15625 -2.21875 C 2.828125 -2.53125 2.4375 -2.609375 2.03125 -2.6875 C 1.46875 -2.796875 0.796875 -2.921875 0.796875 -3.5 C 0.796875 -3.84375 1.0625 -4.25 1.921875 -4.25 C 3 -4.25 3.0625 -3.359375 3.078125 -3.0625 C 3.078125 -2.96875 3.1875 -2.96875 3.1875 -2.96875 C 3.328125 -2.96875 3.328125 -3.015625 3.328125 -3.203125 L 3.328125 -4.203125 C 3.328125 -4.375 3.328125 -4.4375 3.21875 -4.4375 C 3.171875 -4.4375 3.140625 -4.4375 3.015625 -4.328125 C 2.984375 -4.28125 2.890625 -4.203125 2.84375 -4.171875 C 2.46875 -4.4375 2.0625 -4.4375 1.921875 -4.4375 C 0.703125 -4.4375 0.328125 -3.78125 0.328125 -3.21875 C 0.328125 -2.875 0.484375 -2.59375 0.75 -2.375 C 1.078125 -2.125 1.34375 -2.0625 2.0625 -1.921875 C 2.28125 -1.890625 3.09375 -1.71875 3.09375 -1.015625 C 3.09375 -0.5 2.75 -0.109375 1.96875 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.640625 0.5625 -1.6875 0.453125 -1.6875 C 0.328125 -1.6875 0.328125 -1.625 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.890625 -0.3125 C 1.3125 0.09375 1.765625 0.109375 1.96875 0.109375 C 3.109375 0.109375 3.578125 -0.5625 3.578125 -1.265625 Z M 3.578125 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-2">
<path style="stroke:none;" d="M 3.546875 -6.296875 C 3.546875 -6.671875 3.171875 -7 2.65625 -7 C 1.953125 -7 1.109375 -6.46875 1.109375 -5.421875 L 1.109375 -4.28125 L 0.328125 -4.28125 L 0.328125 -3.96875 L 1.109375 -3.96875 L 1.109375 -0.75 C 1.109375 -0.3125 1 -0.3125 0.34375 -0.3125 L 0.34375 0 L 1.46875 -0.03125 C 1.859375 -0.03125 2.328125 -0.03125 2.734375 0 L 2.734375 -0.3125 L 2.515625 -0.3125 C 1.78125 -0.3125 1.765625 -0.421875 1.765625 -0.78125 L 1.765625 -3.96875 L 2.890625 -3.96875 L 2.890625 -4.28125 L 1.734375 -4.28125 L 1.734375 -5.421875 C 1.734375 -6.296875 2.21875 -6.78125 2.65625 -6.78125 C 2.671875 -6.78125 2.828125 -6.78125 2.96875 -6.703125 C 2.859375 -6.671875 2.671875 -6.53125 2.671875 -6.296875 C 2.671875 -6.0625 2.84375 -5.859375 3.109375 -5.859375 C 3.390625 -5.859375 3.546875 -6.0625 3.546875 -6.296875 Z M 3.546875 -6.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-3">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.03125 -1.296875 3.984375 -1.296875 C 3.90625 -1.296875 3.875 -1.234375 3.859375 -1.15625 C 3.515625 -0.140625 2.625 -0.140625 2.515625 -0.140625 C 2.03125 -0.140625 1.625 -0.4375 1.40625 -0.796875 C 1.09375 -1.28125 1.09375 -1.9375 1.09375 -2.296875 L 3.875 -2.296875 C 4.09375 -2.296875 4.125 -2.296875 4.125 -2.5 C 4.125 -3.484375 3.578125 -4.4375 2.34375 -4.4375 C 1.1875 -4.4375 0.28125 -3.421875 0.28125 -2.1875 C 0.28125 -0.859375 1.3125 0.109375 2.453125 0.109375 C 3.671875 0.109375 4.125 -0.984375 4.125 -1.1875 Z M 3.46875 -2.5 L 1.109375 -2.5 C 1.171875 -3.984375 2 -4.234375 2.34375 -4.234375 C 3.359375 -4.234375 3.46875 -2.890625 3.46875 -2.5 Z M 3.46875 -2.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-4">
<path style="stroke:none;" d="M 3.609375 -3.78125 C 3.609375 -4.09375 3.296875 -4.390625 2.875 -4.390625 C 2.15625 -4.390625 1.796875 -3.71875 1.65625 -3.296875 L 1.65625 -4.390625 L 0.28125 -4.28125 L 0.28125 -3.96875 C 0.96875 -3.96875 1.046875 -3.90625 1.046875 -3.40625 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.8125 -0.03125 2.265625 -0.03125 2.671875 0 L 2.671875 -0.3125 L 2.453125 -0.3125 C 1.71875 -0.3125 1.703125 -0.421875 1.703125 -0.78125 L 1.703125 -2.296875 C 1.703125 -3.28125 2.125 -4.171875 2.875 -4.171875 C 2.953125 -4.171875 2.96875 -4.171875 2.984375 -4.15625 C 2.953125 -4.140625 2.765625 -4.03125 2.765625 -3.765625 C 2.765625 -3.5 2.96875 -3.34375 3.1875 -3.34375 C 3.359375 -3.34375 3.609375 -3.46875 3.609375 -3.78125 Z M 3.609375 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-5">
<path style="stroke:none;" d="M 4.796875 -0.890625 L 4.796875 -1.4375 L 4.546875 -1.4375 L 4.546875 -0.890625 C 4.546875 -0.3125 4.296875 -0.25 4.1875 -0.25 C 3.859375 -0.25 3.8125 -0.6875 3.8125 -0.75 L 3.8125 -2.734375 C 3.8125 -3.140625 3.8125 -3.53125 3.46875 -3.90625 C 3.078125 -4.28125 2.578125 -4.4375 2.109375 -4.4375 C 1.296875 -4.4375 0.609375 -3.984375 0.609375 -3.328125 C 0.609375 -3.03125 0.796875 -2.859375 1.0625 -2.859375 C 1.34375 -2.859375 1.515625 -3.0625 1.515625 -3.3125 C 1.515625 -3.4375 1.46875 -3.765625 1.015625 -3.765625 C 1.28125 -4.125 1.765625 -4.234375 2.078125 -4.234375 C 2.5625 -4.234375 3.140625 -3.84375 3.140625 -2.953125 L 3.140625 -2.59375 C 2.625 -2.5625 1.9375 -2.53125 1.3125 -2.234375 C 0.5625 -1.890625 0.3125 -1.375 0.3125 -0.9375 C 0.3125 -0.140625 1.28125 0.109375 1.90625 0.109375 C 2.5625 0.109375 3.015625 -0.28125 3.203125 -0.75 C 3.25 -0.359375 3.515625 0.0625 3.984375 0.0625 C 4.1875 0.0625 4.796875 -0.078125 4.796875 -0.890625 Z M 3.140625 -1.390625 C 3.140625 -0.453125 2.421875 -0.109375 1.96875 -0.109375 C 1.484375 -0.109375 1.078125 -0.453125 1.078125 -0.953125 C 1.078125 -1.5 1.5 -2.328125 3.140625 -2.375 Z M 3.140625 -1.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-6">
<path style="stroke:none;" d="M 5.234375 0 L 5.234375 -0.3125 C 4.53125 -0.3125 4.453125 -0.375 4.453125 -0.859375 L 4.453125 -6.890625 L 3.03125 -6.78125 L 3.03125 -6.46875 C 3.71875 -6.46875 3.796875 -6.40625 3.796875 -5.90625 L 3.796875 -3.765625 C 3.515625 -4.125 3.078125 -4.390625 2.546875 -4.390625 C 1.375 -4.390625 0.34375 -3.40625 0.34375 -2.140625 C 0.34375 -0.875 1.3125 0.109375 2.4375 0.109375 C 3.078125 0.109375 3.515625 -0.234375 3.765625 -0.546875 L 3.765625 0.109375 Z M 3.765625 -1.171875 C 3.765625 -0.984375 3.765625 -0.96875 3.65625 -0.796875 C 3.359375 -0.328125 2.921875 -0.109375 2.484375 -0.109375 C 2.046875 -0.109375 1.6875 -0.359375 1.453125 -0.75 C 1.1875 -1.15625 1.15625 -1.71875 1.15625 -2.125 C 1.15625 -2.484375 1.1875 -3.078125 1.46875 -3.53125 C 1.671875 -3.84375 2.046875 -4.171875 2.59375 -4.171875 C 2.9375 -4.171875 3.359375 -4.015625 3.65625 -3.578125 C 3.765625 -3.40625 3.765625 -3.390625 3.765625 -3.203125 Z M 3.765625 -1.171875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-7">
<path style="stroke:none;" d="M 2.453125 0 L 2.453125 -0.3125 C 1.796875 -0.3125 1.75 -0.359375 1.75 -0.75 L 1.75 -4.390625 L 0.359375 -4.28125 L 0.359375 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.421875 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.328125 -0.3125 L 0.328125 0 L 1.421875 -0.03125 C 1.765625 -0.03125 2.109375 -0.015625 2.453125 0 Z M 1.90625 -6 C 1.90625 -6.265625 1.671875 -6.515625 1.375 -6.515625 C 1.046875 -6.515625 0.84375 -6.234375 0.84375 -6 C 0.84375 -5.71875 1.078125 -5.46875 1.375 -5.46875 C 1.703125 -5.46875 1.90625 -5.75 1.90625 -6 Z M 1.90625 -6 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-8">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.015625 -1.28125 3.984375 -1.28125 C 3.90625 -1.28125 3.875 -1.234375 3.859375 -1.1875 C 3.578125 -0.265625 2.921875 -0.140625 2.5625 -0.140625 C 2.03125 -0.140625 1.15625 -0.5625 1.15625 -2.15625 C 1.15625 -3.78125 1.96875 -4.203125 2.5 -4.203125 C 2.59375 -4.203125 3.21875 -4.1875 3.5625 -3.828125 C 3.15625 -3.796875 3.09375 -3.5 3.09375 -3.375 C 3.09375 -3.109375 3.28125 -2.921875 3.546875 -2.921875 C 3.8125 -2.921875 4.015625 -3.078125 4.015625 -3.390625 C 4.015625 -4.0625 3.25 -4.4375 2.484375 -4.4375 C 1.25 -4.4375 0.34375 -3.375 0.34375 -2.140625 C 0.34375 -0.875 1.3125 0.109375 2.46875 0.109375 C 3.796875 0.109375 4.125 -1.078125 4.125 -1.1875 Z M 4.125 -1.1875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-9">
<path style="stroke:none;" d="M 5.3125 0 L 5.3125 -0.3125 C 4.796875 -0.3125 4.546875 -0.3125 4.53125 -0.609375 L 4.53125 -2.5 C 4.53125 -3.359375 4.53125 -3.65625 4.234375 -4.015625 C 4.09375 -4.1875 3.765625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 Z M 5.3125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-10">
<path style="stroke:none;" d="M 3.296875 -1.234375 L 3.296875 -1.796875 L 3.046875 -1.796875 L 3.046875 -1.25 C 3.046875 -0.515625 2.75 -0.140625 2.375 -0.140625 C 1.71875 -0.140625 1.71875 -1.046875 1.71875 -1.203125 L 1.71875 -3.96875 L 3.140625 -3.96875 L 3.140625 -4.28125 L 1.71875 -4.28125 L 1.71875 -6.109375 L 1.46875 -6.109375 C 1.453125 -5.28125 1.15625 -4.234375 0.1875 -4.1875 L 0.1875 -3.96875 L 1.03125 -3.96875 L 1.03125 -1.234375 C 1.03125 -0.015625 1.953125 0.109375 2.3125 0.109375 C 3.015625 0.109375 3.296875 -0.59375 3.296875 -1.234375 Z M 3.296875 -1.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-11">
<path style="stroke:none;" d="M 4.671875 -2.125 C 4.671875 -3.390625 3.6875 -4.4375 2.484375 -4.4375 C 1.234375 -4.4375 0.28125 -3.359375 0.28125 -2.125 C 0.28125 -0.84375 1.3125 0.109375 2.46875 0.109375 C 3.671875 0.109375 4.671875 -0.859375 4.671875 -2.125 Z M 3.84375 -2.203125 C 3.84375 -1.84375 3.84375 -1.3125 3.625 -0.875 C 3.40625 -0.421875 2.96875 -0.140625 2.484375 -0.140625 C 2.046875 -0.140625 1.625 -0.34375 1.34375 -0.796875 C 1.09375 -1.234375 1.09375 -1.84375 1.09375 -2.203125 C 1.09375 -2.59375 1.09375 -3.125 1.34375 -3.5625 C 1.609375 -4.015625 2.078125 -4.234375 2.46875 -4.234375 C 2.90625 -4.234375 3.328125 -4.015625 3.59375 -3.578125 C 3.84375 -3.15625 3.84375 -2.578125 3.84375 -2.203125 Z M 3.84375 -2.203125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-12">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.640625 1.78125 -1.046875 1.375 -1.046875 C 1.03125 -1.046875 0.859375 -0.78125 0.859375 -0.53125 C 0.859375 -0.265625 1.015625 0 1.375 0 C 1.53125 0 1.671875 -0.0625 1.78125 -0.15625 C 1.796875 0.625 1.515625 1.234375 1.078125 1.703125 C 1.015625 1.75 1.015625 1.765625 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.234375 1.921875 2.015625 1.125 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph1-13">
<path style="stroke:none;" d="M 4.8125 -4.015625 C 4.8125 -4.171875 4.6875 -4.5 4.3125 -4.5 C 4.109375 -4.5 3.671875 -4.4375 3.25 -4.03125 C 2.84375 -4.359375 2.421875 -4.390625 2.203125 -4.390625 C 1.28125 -4.390625 0.59375 -3.703125 0.59375 -2.9375 C 0.59375 -2.5 0.8125 -2.125 1.0625 -1.921875 C 0.9375 -1.765625 0.75 -1.4375 0.75 -1.09375 C 0.75 -0.78125 0.890625 -0.40625 1.1875 -0.203125 C 0.59375 -0.046875 0.28125 0.390625 0.28125 0.78125 C 0.28125 1.5 1.265625 2.046875 2.46875 2.046875 C 3.640625 2.046875 4.671875 1.53125 4.671875 0.765625 C 4.671875 0.421875 4.53125 -0.09375 4.03125 -0.359375 C 3.5 -0.640625 2.921875 -0.640625 2.328125 -0.640625 C 2.078125 -0.640625 1.640625 -0.640625 1.578125 -0.65625 C 1.265625 -0.6875 1.046875 -1 1.046875 -1.3125 C 1.046875 -1.359375 1.046875 -1.59375 1.21875 -1.78125 C 1.609375 -1.515625 2.015625 -1.484375 2.203125 -1.484375 C 3.125 -1.484375 3.8125 -2.15625 3.8125 -2.921875 C 3.8125 -3.296875 3.65625 -3.65625 3.40625 -3.890625 C 3.765625 -4.234375 4.125 -4.28125 4.296875 -4.28125 C 4.296875 -4.28125 4.359375 -4.28125 4.390625 -4.265625 C 4.28125 -4.234375 4.234375 -4.125 4.234375 -4 C 4.234375 -3.828125 4.359375 -3.703125 4.53125 -3.703125 C 4.625 -3.703125 4.8125 -3.78125 4.8125 -4.015625 Z M 3.0625 -2.9375 C 3.0625 -2.671875 3.0625 -2.34375 2.90625 -2.109375 C 2.828125 -1.984375 2.59375 -1.703125 2.203125 -1.703125 C 1.34375 -1.703125 1.34375 -2.703125 1.34375 -2.921875 C 1.34375 -3.1875 1.34375 -3.515625 1.5 -3.765625 C 1.578125 -3.875 1.8125 -4.15625 2.203125 -4.15625 C 3.0625 -4.15625 3.0625 -3.171875 3.0625 -2.9375 Z M 4.15625 0.78125 C 4.15625 1.3125 3.453125 1.8125 2.484375 1.8125 C 1.484375 1.8125 0.796875 1.3125 0.796875 0.78125 C 0.796875 0.328125 1.171875 -0.046875 1.609375 -0.0625 L 2.1875 -0.0625 C 3.046875 -0.0625 4.15625 -0.0625 4.15625 0.78125 Z M 4.15625 0.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph2-1">
<path style="stroke:none;" d="M 7.15625 -3.4375 C 7.15625 -3.640625 6.96875 -3.640625 6.828125 -3.640625 L 0.890625 -3.640625 C 0.75 -3.640625 0.5625 -3.640625 0.5625 -3.4375 C 0.5625 -3.25 0.75 -3.25 0.890625 -3.25 L 6.8125 -3.25 C 6.96875 -3.25 7.15625 -3.25 7.15625 -3.4375 Z M 7.15625 -1.515625 C 7.15625 -1.71875 6.96875 -1.71875 6.8125 -1.71875 L 0.890625 -1.71875 C 0.75 -1.71875 0.5625 -1.71875 0.5625 -1.515625 C 0.5625 -1.3125 0.75 -1.3125 0.890625 -1.3125 L 6.828125 -1.3125 C 6.96875 -1.3125 7.15625 -1.3125 7.15625 -1.515625 Z M 7.15625 -1.515625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph2-2">
<path style="stroke:none;" d="M 3.984375 -5.265625 L 2.484375 -6.859375 L 0.96875 -5.265625 L 1.09375 -5.125 L 2.484375 -6.1875 L 3.859375 -5.125 Z M 3.984375 -5.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph3-1">
<path style="stroke:none;" d="M 1.578125 2.15625 L 1.578125 -7.109375 C 1.578125 -7.25 1.578125 -7.4375 1.375 -7.4375 C 1.1875 -7.4375 1.1875 -7.25 1.1875 -7.109375 L 1.1875 2.15625 C 1.1875 2.296875 1.1875 2.484375 1.375 2.484375 C 1.578125 2.484375 1.578125 2.296875 1.578125 2.15625 Z M 1.578125 2.15625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph4-1">
<path style="stroke:none;" d="M 2.828125 -0.90625 C 2.828125 -1.171875 2.71875 -1.390625 2.53125 -1.546875 C 2.265625 -1.796875 1.953125 -1.84375 1.703125 -1.890625 C 1.140625 -1.984375 0.703125 -2.078125 0.703125 -2.4375 C 0.703125 -2.65625 0.890625 -2.9375 1.546875 -2.9375 C 2.34375 -2.9375 2.390625 -2.375 2.40625 -2.171875 C 2.40625 -2.09375 2.484375 -2.09375 2.515625 -2.09375 C 2.640625 -2.09375 2.640625 -2.140625 2.640625 -2.28125 L 2.640625 -2.921875 C 2.640625 -3.03125 2.640625 -3.09375 2.53125 -3.09375 C 2.5 -3.09375 2.484375 -3.09375 2.40625 -3.015625 C 2.390625 -3.015625 2.3125 -2.953125 2.28125 -2.90625 C 2.0625 -3.0625 1.796875 -3.09375 1.546875 -3.09375 C 0.546875 -3.09375 0.3125 -2.578125 0.3125 -2.234375 C 0.3125 -2.015625 0.40625 -1.828125 0.578125 -1.6875 C 0.84375 -1.453125 1.109375 -1.40625 1.53125 -1.34375 C 1.890625 -1.28125 2.453125 -1.1875 2.453125 -0.71875 C 2.453125 -0.4375 2.265625 -0.125 1.59375 -0.125 C 0.921875 -0.125 0.6875 -0.5625 0.5625 -1.03125 C 0.53125 -1.125 0.53125 -1.15625 0.4375 -1.15625 C 0.3125 -1.15625 0.3125 -1.109375 0.3125 -0.96875 L 0.3125 -0.109375 C 0.3125 0 0.3125 0.0625 0.40625 0.0625 C 0.46875 0.0625 0.609375 -0.078125 0.75 -0.234375 C 1.046875 0.0625 1.421875 0.0625 1.59375 0.0625 C 2.5 0.0625 2.828125 -0.421875 2.828125 -0.90625 Z M 2.828125 -0.90625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph4-2">
<path style="stroke:none;" d="M 2.765625 -4.390625 C 2.765625 -4.6875 2.46875 -4.890625 2.09375 -4.890625 C 1.53125 -4.890625 0.90625 -4.5 0.90625 -3.78125 L 0.90625 -3 L 0.3125 -3 L 0.3125 -2.75 L 0.90625 -2.75 L 0.90625 -0.546875 C 0.90625 -0.25 0.84375 -0.25 0.390625 -0.25 L 0.390625 0 C 0.421875 0 0.890625 -0.03125 1.1875 -0.03125 L 2.09375 0 L 2.09375 -0.25 L 1.953125 -0.25 C 1.4375 -0.25 1.4375 -0.328125 1.4375 -0.5625 L 1.4375 -2.75 L 2.296875 -2.75 L 2.296875 -3 L 1.40625 -3 L 1.40625 -3.78125 C 1.40625 -4.40625 1.78125 -4.703125 2.078125 -4.703125 C 2.140625 -4.703125 2.21875 -4.6875 2.28125 -4.671875 C 2.1875 -4.609375 2.125 -4.5 2.125 -4.390625 C 2.125 -4.203125 2.265625 -4.0625 2.453125 -4.0625 C 2.640625 -4.0625 2.765625 -4.203125 2.765625 -4.390625 Z M 2.765625 -4.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph4-3">
<path style="stroke:none;" d="M 3.25 -0.828125 C 3.25 -0.859375 3.234375 -0.9375 3.140625 -0.9375 C 3.046875 -0.9375 3.03125 -0.890625 3.015625 -0.828125 C 2.796875 -0.25 2.265625 -0.15625 2.015625 -0.15625 C 1.6875 -0.15625 1.375 -0.296875 1.171875 -0.5625 C 0.90625 -0.890625 0.90625 -1.3125 0.90625 -1.578125 L 3.0625 -1.578125 C 3.203125 -1.578125 3.25 -1.578125 3.25 -1.734375 C 3.25 -2.34375 2.90625 -3.09375 1.875 -3.09375 C 0.96875 -3.09375 0.265625 -2.375 0.265625 -1.515625 C 0.265625 -0.640625 1.046875 0.0625 1.96875 0.0625 C 2.90625 0.0625 3.25 -0.6875 3.25 -0.828125 Z M 2.765625 -1.765625 L 0.90625 -1.765625 C 0.984375 -2.75 1.609375 -2.90625 1.875 -2.90625 C 2.734375 -2.90625 2.765625 -1.9375 2.765625 -1.765625 Z M 2.765625 -1.765625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph4-4">
<path style="stroke:none;" d="M 2.828125 -2.625 C 2.828125 -2.859375 2.609375 -3.0625 2.28125 -3.0625 C 1.9375 -3.0625 1.546875 -2.84375 1.34375 -2.328125 L 1.328125 -2.328125 L 1.328125 -3.0625 L 0.34375 -2.984375 L 0.34375 -2.734375 C 0.8125 -2.734375 0.859375 -2.6875 0.859375 -2.34375 L 0.859375 -0.546875 C 0.859375 -0.25 0.796875 -0.25 0.34375 -0.25 L 0.34375 0 C 0.375 0 0.84375 -0.03125 1.140625 -0.03125 L 2.03125 0 L 2.03125 -0.25 L 1.890625 -0.25 C 1.390625 -0.25 1.390625 -0.328125 1.390625 -0.5625 L 1.390625 -1.578125 C 1.390625 -2.171875 1.65625 -2.875 2.3125 -2.875 C 2.25 -2.828125 2.203125 -2.734375 2.203125 -2.625 C 2.203125 -2.390625 2.375 -2.296875 2.515625 -2.296875 C 2.671875 -2.296875 2.828125 -2.40625 2.828125 -2.625 Z M 2.828125 -2.625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph4-5">
<path style="stroke:none;" d="M 3.78125 -0.625 L 3.78125 -1.015625 L 3.546875 -1.015625 L 3.546875 -0.625 C 3.546875 -0.5625 3.546875 -0.234375 3.28125 -0.234375 C 3.03125 -0.234375 3.03125 -0.5625 3.03125 -0.640625 L 3.03125 -1.859375 C 3.03125 -2.234375 3.03125 -2.5 2.71875 -2.75 C 2.421875 -2.984375 2.09375 -3.09375 1.6875 -3.09375 C 1.015625 -3.09375 0.5625 -2.84375 0.5625 -2.421875 C 0.5625 -2.203125 0.703125 -2.09375 0.890625 -2.09375 C 1.078125 -2.09375 1.21875 -2.21875 1.21875 -2.40625 C 1.21875 -2.53125 1.15625 -2.671875 0.96875 -2.734375 C 1.21875 -2.90625 1.625 -2.90625 1.671875 -2.90625 C 2.0625 -2.90625 2.484375 -2.65625 2.484375 -2.0625 L 2.484375 -1.84375 C 2.09375 -1.828125 1.640625 -1.8125 1.140625 -1.625 C 0.5 -1.390625 0.3125 -1.015625 0.3125 -0.703125 C 0.3125 -0.109375 1.03125 0.0625 1.53125 0.0625 C 2.09375 0.0625 2.40625 -0.25 2.5625 -0.515625 C 2.59375 -0.234375 2.78125 0.03125 3.09375 0.03125 C 3.09375 0.03125 3.78125 0.03125 3.78125 -0.625 Z M 2.484375 -0.984375 C 2.484375 -0.3125 1.890625 -0.125 1.578125 -0.125 C 1.234375 -0.125 0.890625 -0.359375 0.890625 -0.703125 C 0.890625 -1.078125 1.234375 -1.625 2.484375 -1.671875 Z M 2.484375 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d3-glyph5-1">
<path style="stroke:none;" d="M 4.984375 -3.78125 C 4.984375 -3.5 4.84375 -3.0625 4.515625 -2.8125 C 4.234375 -2.59375 3.796875 -2.46875 3.328125 -2.46875 L 2.421875 -2.46875 L 2.875 -4.265625 C 2.921875 -4.453125 2.9375 -4.484375 3.09375 -4.5 L 3.53125 -4.5 C 4.171875 -4.5 4.984375 -4.5 4.984375 -3.78125 Z M 5.90625 -0.671875 C 5.90625 -0.6875 5.890625 -0.765625 5.78125 -0.765625 C 5.6875 -0.765625 5.6875 -0.71875 5.65625 -0.640625 C 5.5625 -0.34375 5.3125 -0.0625 5.015625 -0.0625 C 4.828125 -0.0625 4.703125 -0.125 4.703125 -0.5 C 4.703125 -0.6875 4.734375 -1.046875 4.765625 -1.234375 C 4.796875 -1.421875 4.796875 -1.484375 4.796875 -1.5625 C 4.796875 -1.640625 4.796875 -1.859375 4.609375 -2.078125 C 4.46875 -2.21875 4.28125 -2.3125 4.125 -2.359375 C 4.953125 -2.5625 5.6875 -3.0625 5.6875 -3.671875 C 5.6875 -4.28125 4.984375 -4.75 3.984375 -4.75 L 1.84375 -4.75 C 1.703125 -4.75 1.625 -4.75 1.625 -4.59375 C 1.625 -4.5 1.703125 -4.5 1.84375 -4.5 C 1.84375 -4.5 1.984375 -4.5 2.109375 -4.484375 C 2.25 -4.46875 2.265625 -4.453125 2.265625 -4.390625 C 2.265625 -4.390625 2.265625 -4.34375 2.234375 -4.234375 L 1.3125 -0.546875 C 1.265625 -0.3125 1.25 -0.25 0.703125 -0.25 C 0.578125 -0.25 0.5 -0.25 0.5 -0.109375 C 0.5 -0.03125 0.546875 0 0.609375 0 C 0.734375 0 0.890625 -0.015625 1.03125 -0.015625 L 1.5 -0.03125 L 1.9375 -0.015625 C 2.09375 -0.015625 2.265625 0 2.40625 0 C 2.4375 0 2.546875 0 2.546875 -0.140625 C 2.546875 -0.25 2.484375 -0.25 2.328125 -0.25 C 2.21875 -0.25 2.1875 -0.25 2.0625 -0.265625 C 1.90625 -0.28125 1.90625 -0.296875 1.90625 -0.375 C 1.90625 -0.375 1.90625 -0.421875 1.9375 -0.515625 L 2.375 -2.28125 L 3.3125 -2.28125 C 3.921875 -2.28125 4.171875 -1.984375 4.171875 -1.65625 C 4.171875 -1.5625 4.109375 -1.328125 4.078125 -1.171875 C 3.984375 -0.84375 3.96875 -0.75 3.96875 -0.625 C 3.96875 -0.078125 4.46875 0.140625 4.984375 0.140625 C 5.625 0.140625 5.90625 -0.546875 5.90625 -0.671875 Z M 5.90625 -0.671875 "/>
</symbol>
</g>
<clipPath id="fisica2_lez04b_d3-clip1">
  <path d="M 12 49 L 247 49 L 247 209.386719 L 12 209.386719 Z M 12 49 "/>
</clipPath>
</defs>
<g id="fisica2_lez04b_d3-surface1">
<g clip-path="url(#fisica2_lez04b_d3-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 114.188848 30.596532 C 114.188848 30.596532 127.799627 24.412666 131.642486 13.264454 C 135.489266 2.120163 143.069109 -6.926241 132.66202 -22.960374 C 122.258851 -38.994507 108.185361 -54.224777 81.638263 -63.780948 C 55.091166 -73.337119 34.304436 -75.254627 5.102629 -68.882539 C -24.099178 -62.510452 -43.278182 -52.27982 -58.677067 -33.163557 C -74.075952 -14.051215 -77.910968 2.786781 -68.884171 22.961791 C -59.857373 43.1368 -39.729419 54.755567 -15.307658 63.778443 C 9.114103 72.80524 29.563603 68.593781 48.472037 66.331199 C 67.384393 64.068618 75.552429 52.904721 75.552429 52.904721 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-1" x="15.303978" y="97.864332"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 97.056755 -31.536224 C 114.47118 22.067738 85.136049 79.64004 31.536009 97.054465 C 15.650885 102.214876 -1.269459 103.399104 -17.719248 100.501274 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph1-1" x="5.203852" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-2" x="9.119029" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-3" x="12.151926" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-4" x="16.563323" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-5" x="20.450712" y="11.798589"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph1-6" x="28.717739" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-7" x="34.231736" y="11.798589"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph1-8" x="40.293561" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-3" x="44.704958" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-9" x="49.116355" y="11.798589"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph1-10" x="54.362394" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-4" x="58.221994" y="11.798589"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-11" x="62.109382" y="11.798589"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-2" x="70.375016" y="11.798589"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph1-12" x="78.220819" y="11.798589"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph1-4" x="9.222386" y="23.708748"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-5" x="13.109774" y="23.708748"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-13" x="18.071975" y="23.708748"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-13" x="23.034176" y="23.708748"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-7" x="27.996377" y="23.708748"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph1-11" x="30.753376" y="23.708748"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-3" x="39.022688" y="23.708748"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph2-1" x="49.391778" y="23.708748"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph3-1" x="59.867459" y="23.708748"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-2" x="62.624846" y="23.708748"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph0-4" x="70.471078" y="23.708748"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph3-1" x="78.220819" y="23.708748"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 0.00103738 -0.00125243 L 114.208454 30.600453 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 0.00103738 -0.00125243 L 75.564193 52.912563 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00103738 -0.00125243 L 92.500222 43.132879 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 143.101562 111.003906 L 153.09375 111.003906 L 153.09375 101.839844 L 143.101562 101.839844 Z M 143.101562 111.003906 "/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-3" x="144.290525" y="109.811349"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 114.208454 30.600453 L 75.564193 52.912563 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 110.722432 32.60423 L 126.031127 36.992147 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-5" x="225.145324" y="96.64901"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph0-1" x="230.310975" y="96.64901"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 98.570371 26.412521 C 95.492162 37.905807 90.41802 48.78345 83.594984 58.531764 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 98.570371 26.412521 L 86.739855 9.182396 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-5" x="154.199386" y="129.483633"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph0-1" x="159.365038" y="129.483633"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph4-1" x="165.45108" y="130.971905"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph4-2" x="168.59532" y="130.971905"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph4-3" x="171.055969" y="130.971905"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph4-4" x="174.584382" y="130.971905"/>
  <use xlink:href="#fisica2_lez04b_d3-glyph4-5" x="177.68555" y="130.971905"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 92.500222 43.132879 L 138.626294 64.641126 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,0%,0%);fill-opacity:1;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.305559 -0.000285454 C 4.655463 0.164395 1.789909 1.089542 0.0010263 2.096751 L -0.0000497322 -2.099643 C 1.78987 -1.091095 4.653906 -0.163708 5.305559 -0.000285454 Z M 5.305559 -0.000285454 " transform="matrix(0.902825,-0.42098,-0.42098,-0.902825,235.510669,65.659056)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-6" x="247.16059" y="63.505575"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-7" x="245.629483" y="66.01392"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph2-1" x="256.284473" y="66.01392"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-7" x="266.760154" y="66.01392"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph2-2" x="276.947942" y="66.01392"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-8" x="276.312388" y="66.01392"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph5-1" x="281.993522" y="67.502192"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 92.500222 43.132879 L 112.851689 78.385229 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.305762 -0.00227987 C 4.652771 0.164083 1.791599 1.088647 0.000603209 2.096762 L -0.000706052 -2.096913 C 1.790578 -1.089905 4.656662 -0.164214 5.305762 -0.00227987 Z M 5.305762 -0.00227987 " transform="matrix(0.498063,-0.86269,-0.86269,-0.498063,209.835898,51.970621)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph2-2" x="211.223906" y="42.190613"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-9" x="210.725823" y="42.190613"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 111.910581 52.183204 C 110.051892 56.171151 107.008975 59.488558 103.201408 61.688398 " transform="matrix(0.996166,0,0,-0.996166,97.416935,130.05344)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-10" x="209.588202" y="67.938513"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,0%,0%);fill-opacity:1;" d="M 100.273438 130.054688 C 100.273438 128.476562 98.996094 127.195312 97.417969 127.195312 C 95.839844 127.195312 94.558594 128.476562 94.558594 130.054688 C 94.558594 131.632812 95.839844 132.910156 97.417969 132.910156 C 98.996094 132.910156 100.273438 131.632812 100.273438 130.054688 Z M 100.273438 130.054688 "/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-2" x="87.387537" y="139.017937"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 192.421875 87.085938 C 192.421875 85.507812 191.140625 84.226562 189.5625 84.226562 C 187.984375 84.226562 186.703125 85.507812 186.703125 87.085938 C 186.703125 88.664062 187.984375 89.941406 189.5625 89.941406 C 191.140625 89.941406 192.421875 88.664062 192.421875 87.085938 Z M 192.421875 87.085938 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 169.253906 92.191406 L 179.386719 92.191406 L 179.386719 83.03125 L 169.253906 83.03125 Z M 169.253906 92.191406 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d3-glyph0-4" x="170.44486" y="91.002741"/>
</g>
</g>
</svg></figure>`,
        subsections: [
          {
            subtitle: "Passo 1 — il flusso elementare",
            content: `<p>Il campo elettrico generato da $Q$ nel punto $P$, a distanza $R$ dalla carica, è</p>
            <p>$$\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{R^2} \\hat{u}_R ,$$</p>
            <p>dove $\\hat{u}_R$ è il versore radiale uscente da $Q$. Il flusso infinitesimo attraverso $dS$ è</p>
            <p>$$d\\Phi(\\vec{E}) = \\vec{E} \\cdot \\hat{n} \\, dS = \\left( \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{R^2} \\hat{u}_R \\right) \\cdot \\hat{n} \\, dS = \\frac{Q}{4\\pi\\varepsilon_0} \\frac{\\hat{u}_R \\cdot \\hat{n}}{R^2} \\, dS .$$</p>
            <p>Il termine $\\hat{u}_R \\cdot \\hat{n} = \\cos\\alpha$ è il coseno dell'angolo tra la direzione radiale (quella di $\\vec{E}$) e la normale uscente, così che</p>
            <p>$$d\\Phi(\\vec{E}) = \\frac{Q}{4\\pi\\varepsilon_0} \\frac{\\cos\\alpha \\, dS}{R^2} .$$</p>`
          },
          {
            subtitle: "Passo 2 — riconoscere l'angolo solido (geometrico oppure orientato)",
            content: `<p>Riconosciamo la struttura dell'angolo solido, ma dobbiamo distinguere con cura <strong>due</strong> quantità:</p>
            <p>$$d\\Omega_{\\text{geom}} = \\frac{|\\cos\\alpha| \\, dS}{R^2} \\ge 0 , \\qquad\\qquad d\\Omega_{\\text{or}} = \\frac{\\cos\\alpha \\, dS}{R^2} = \\frac{\\hat{u}_R\\cdot\\hat{n}\\, dS}{R^2} .$$</p>
            <p>La prima è l'angolo solido <em>geometrico</em>: è il rapporto tra l'area $dS_{\\text{sfera}} = |\\cos\\alpha|\\,dS$ effettivamente intercettata dal cono sulla sfera di centro $Q$ e raggio $R$, e il quadrato del raggio. Essendo un'area, è sempre positiva.</p>
            <p>La seconda è l'<em>elemento di angolo solido orientato</em>: coincide con $d\\Omega_{\\text{geom}}$ se l'attraversamento è uscente ($\\cos\\alpha \\gt 0$), ma vale $-d\\Omega_{\\text{geom}}$ se l'attraversamento è entrante ($\\cos\\alpha \\lt 0$). È <strong>questa</strong>, e non l'area geometrica, la quantità che compare nel flusso:</p>
            <p>$$d\\Phi(\\vec{E}) = \\frac{Q}{4\\pi\\varepsilon_0} \\, d\\Omega_{\\text{or}} .$$</p>`
          },
          {
            subtitle: "Passo 3 — integrare sulla superficie chiusa",
            content: `<p>Portando fuori le costanti:</p>
            <p>$$\\Phi(\\vec{E}) = \\oint_S d\\Phi(\\vec{E}) = \\frac{Q}{4\\pi\\varepsilon_0} \\oint_S d\\Omega_{\\text{or}} .$$</p>
            <p>Resta da valutare $\\oint_S d\\Omega_{\\text{or}}$. Fissiamo una direzione $\\hat{u}$ uscente da $Q$ e consideriamo il cono infinitesimo attorno a essa, di angolo solido geometrico $d\\Omega_{\\text{geom}}$. Poiché $Q$ è <em>interna</em> a $S$ e $S$ è chiusa, la semiretta uscente da $Q$ in direzione $\\hat{u}$ attraversa $S$ un numero <strong>dispari</strong> di volte: un attraversamento uscente «finale» più, eventualmente, ulteriori attraversamenti che si presentano necessariamente a coppie (uno entrante e uno uscente) quando la superficie non è convessa. Nel conteggio algebrico ogni coppia contribuisce $-d\\Omega_{\\text{geom}} + d\\Omega_{\\text{geom}} = 0$, e sopravvive il solo attraversamento uscente netto:</p>
            <p>$$\\sum_{\\text{attraversamenti in direzione } \\hat{u}} d\\Omega_{\\text{or}} = +\\, d\\Omega_{\\text{geom}} .$$</p>
            <p>Sommando su tutte le direzioni $\\hat{u}$ dello spazio si ottiene l'angolo solido totale attorno a un punto:</p>
            <p>$$\\oint_S d\\Omega_{\\text{or}} = \\int_{4\\pi} d\\Omega_{\\text{geom}} = 4\\pi \\ \\text{sr} .$$</p>
            <p>Pertanto</p>
            <p>$$\\Phi(\\vec{E}) = \\frac{Q}{4\\pi\\varepsilon_0} \\,(4\\pi) = \\frac{Q}{\\varepsilon_0} ,$$</p>
            <p>che è la tesi per una singola carica interna. $\\blacksquare$</p>`
          },
          {
            subtitle: "Il ruolo del conteggio algebrico",
            content: `<p>L'identificazione ingenua «$dS\\cos\\alpha = $ area della calotta sferica» funziona solo dove l'attraversamento è uscente. Su una superficie chiusa non convessa possono esistere elementi attraversati dal campo <em>verso l'interno</em> anche con la carica dentro: lì $\\cos\\alpha \\lt 0$ e il contributo al flusso è negativo, mentre un'area geometrica resterebbe positiva. È proprio il passaggio all'angolo solido <em>orientato</em>, con la cancellazione a coppie degli attraversamenti aggiuntivi, che rende lecito scrivere $\\oint_S d\\Omega_{\\text{or}} = 4\\pi$.</p>`
          }
        ],
        formulas: [
          { label: "Campo di carica puntiforme", latex: "\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{R^2} \\hat{u}_R" },
          { label: "Flusso e angolo solido orientato", latex: "d\\Phi(\\vec{E}) = \\frac{Q}{4\\pi\\varepsilon_0} \\, d\\Omega_{\\text{or}}" },
          { label: "Risultato (carica interna)", latex: "\\Phi(\\vec{E}) = \\frac{Q}{\\varepsilon_0}" }
        ],
        extra_content: `<p><strong>Perché il risultato è così potente.</strong> La relazione $d\\Phi = \\dfrac{Q}{4\\pi\\varepsilon_0}\\,d\\Omega_{\\text{or}}$ dice che <strong>due elementi di superficie diversi, intercettati dallo stesso cono orientato uscente da $Q$, danno lo stesso flusso</strong>, qualunque sia la loro distanza dalla carica e la loro inclinazione. Il fattore $1/R^2$ della legge di Coulomb viene esattamente compensato dal fattore $R^2$ con cui cresce l'area intercettata dal cono.</p>
        <p><strong>Attenzione a non leggere male l'enunciato:</strong> se si tiene fissata l'<em>area</em> $dS$ e si sposta o si inclina l'elemento, l'angolo solido sotteso cambia, e con esso il flusso. Per un elemento di area assegnata il flusso dipende infatti sia da $R$ (come $1/R^2$) sia dall'inclinazione (come $\\cos\\alpha$). L'invarianza riguarda l'<strong>angolo solido</strong>, non l'area.</p>`
      },

      {
        id: "s04-carica-esterna",
        type: "section",
        title: "Caso di una carica esterna alla superficie",
        icon: "🚪",
        content: `<p>Cosa succede se la carica $Q$ si trova all'<strong>esterno</strong> della superficie chiusa $S$?</p>
        <figure class="figura" data-id="fisica2_lez04b_d4"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez04b_d4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="249.839pt" height="125.387pt" viewBox="0 0 249.839 125.387" version="1.2"><style>#fisica2_lez04b_d4 [fill="rgb(0%,0%,100%)"],#fisica2_lez04b_d4 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d4 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d4 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez04b_d4 [stroke="rgb(0%,0%,100%)"],#fisica2_lez04b_d4 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez04b_d4 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez04b_d4 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#fisica2_lez04b_d4 [fill="rgb(100%,0%,0%)"],#fisica2_lez04b_d4 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez04b_d4 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04b_d4 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez04b_d4 [stroke="rgb(100%,0%,0%)"],#fisica2_lez04b_d4 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez04b_d4 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez04b_d4 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}#fisica2_lez04b_d4 [fill="rgb(0%,0%,0%)"],#fisica2_lez04b_d4 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez04b_d4 [stroke="rgb(0%,0%,0%)"],#fisica2_lez04b_d4 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph0-1">
<path style="stroke:none;" d="M 5.484375 -2.328125 C 5.484375 -3.015625 5.15625 -3.359375 5 -3.5 C 4.765625 -3.71875 4.625 -3.765625 3.734375 -3.984375 L 3.078125 -4.171875 C 2.8125 -4.25 2.46875 -4.546875 2.46875 -5.0625 C 2.46875 -5.875 3.265625 -6.71875 4.203125 -6.71875 C 5.03125 -6.71875 5.640625 -6.296875 5.640625 -5.171875 C 5.640625 -4.859375 5.59375 -4.6875 5.59375 -4.625 C 5.59375 -4.625 5.59375 -4.53125 5.71875 -4.53125 C 5.8125 -4.53125 5.828125 -4.546875 5.859375 -4.71875 L 6.40625 -6.890625 C 6.40625 -6.921875 6.375 -7 6.296875 -7 C 6.234375 -7 6.234375 -6.984375 6.109375 -6.84375 L 5.640625 -6.28125 C 5.375 -6.75 4.859375 -7 4.21875 -7 C 2.953125 -7 1.765625 -5.859375 1.765625 -4.65625 C 1.765625 -3.84375 2.296875 -3.390625 2.796875 -3.25 L 3.859375 -2.96875 C 4.234375 -2.875 4.765625 -2.734375 4.765625 -1.921875 C 4.765625 -1.015625 3.953125 -0.09375 2.984375 -0.09375 C 2.34375 -0.09375 1.25 -0.3125 1.25 -1.53125 C 1.25 -1.78125 1.296875 -2.015625 1.3125 -2.078125 C 1.3125 -2.109375 1.328125 -2.140625 1.328125 -2.140625 C 1.328125 -2.25 1.265625 -2.25 1.203125 -2.25 C 1.15625 -2.25 1.140625 -2.25 1.109375 -2.21875 C 1.078125 -2.171875 0.515625 0.09375 0.515625 0.125 C 0.515625 0.171875 0.5625 0.21875 0.625 0.21875 C 0.671875 0.21875 0.6875 0.203125 0.796875 0.0625 L 1.296875 -0.5 C 1.71875 0.078125 2.390625 0.21875 2.96875 0.21875 C 4.3125 0.21875 5.484375 -1.09375 5.484375 -2.328125 Z M 5.484375 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph0-2">
<path style="stroke:none;" d="M 6.4375 0 C 6.4375 -0.0625 6.375 -0.09375 6.328125 -0.09375 C 6.25 -0.09375 6.234375 -0.046875 6.21875 0.015625 C 5.96875 0.71875 5.390625 0.96875 5.046875 0.96875 C 4.59375 0.96875 4.4375 0.6875 4.34375 -0.0625 C 5.890625 -0.640625 7.34375 -2.40625 7.34375 -4.328125 C 7.34375 -5.921875 6.296875 -7 4.8125 -7 C 2.671875 -7 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.59375 0.21875 3.03125 0.21875 C 3.28125 0.21875 3.609375 0.171875 4 0.0625 C 3.953125 0.6875 3.953125 0.703125 3.953125 0.828125 C 3.953125 1.15625 3.953125 1.921875 4.78125 1.921875 C 5.96875 1.921875 6.4375 0.109375 6.4375 0 Z M 6.46875 -4.640625 C 6.46875 -3.65625 5.96875 -1.328125 4.296875 -0.390625 C 4.25 -0.75 4.140625 -1.46875 3.421875 -1.46875 C 2.890625 -1.46875 2.40625 -0.96875 2.40625 -0.453125 C 2.40625 -0.265625 2.46875 -0.140625 2.46875 -0.140625 C 1.703125 -0.453125 1.359375 -1.21875 1.359375 -2.109375 C 1.359375 -2.796875 1.625 -4.203125 2.375 -5.28125 C 3.09375 -6.296875 4.03125 -6.75 4.75 -6.75 C 5.75 -6.75 6.46875 -5.96875 6.46875 -4.640625 Z M 4.03125 -0.40625 C 4.03125 -0.265625 4.015625 -0.25 3.921875 -0.203125 C 3.65625 -0.09375 3.359375 -0.03125 3.078125 -0.03125 C 2.953125 -0.03125 2.625 -0.03125 2.625 -0.453125 C 2.625 -0.859375 3 -1.25 3.421875 -1.25 C 3.84375 -1.25 4.03125 -1.015625 4.03125 -0.40625 Z M 4.03125 -0.40625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph0-3">
<path style="stroke:none;" d="M 4.9375 -1.421875 C 4.9375 -1.515625 4.859375 -1.515625 4.828125 -1.515625 C 4.71875 -1.515625 4.71875 -1.484375 4.6875 -1.34375 C 4.515625 -0.6875 4.328125 -0.109375 3.921875 -0.109375 C 3.65625 -0.109375 3.625 -0.359375 3.625 -0.5625 C 3.625 -0.796875 3.65625 -0.875 3.6875 -1.046875 L 5.125 -6.78125 C 5.125 -6.78125 5.125 -6.890625 4.984375 -6.890625 C 4.84375 -6.890625 3.90625 -6.796875 3.734375 -6.78125 C 3.65625 -6.765625 3.59375 -6.71875 3.59375 -6.59375 C 3.59375 -6.46875 3.6875 -6.46875 3.828125 -6.46875 C 4.3125 -6.46875 4.328125 -6.40625 4.328125 -6.296875 L 4.296875 -6.109375 L 3.703125 -3.75 C 3.515625 -4.125 3.234375 -4.390625 2.78125 -4.390625 C 1.625 -4.390625 0.390625 -2.921875 0.390625 -1.484375 C 0.390625 -0.546875 0.9375 0.109375 1.71875 0.109375 C 1.921875 0.109375 2.40625 0.0625 3 -0.640625 C 3.078125 -0.21875 3.4375 0.109375 3.90625 0.109375 C 4.25 0.109375 4.484375 -0.125 4.640625 -0.4375 C 4.8125 -0.796875 4.9375 -1.421875 4.9375 -1.421875 Z M 3.546875 -3.125 L 3.0625 -1.1875 C 3 -1 3 -0.984375 2.859375 -0.8125 C 2.421875 -0.265625 2.015625 -0.109375 1.734375 -0.109375 C 1.234375 -0.109375 1.09375 -0.65625 1.09375 -1.046875 C 1.09375 -1.53125 1.421875 -2.765625 1.640625 -3.21875 C 1.953125 -3.796875 2.40625 -4.171875 2.796875 -4.171875 C 3.4375 -4.171875 3.578125 -3.359375 3.578125 -3.296875 C 3.578125 -3.234375 3.5625 -3.171875 3.546875 -3.125 Z M 3.546875 -3.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph0-4">
<path style="stroke:none;" d="M 5.84375 -0.59375 C 5.84375 -0.671875 5.78125 -0.6875 5.71875 -0.6875 C 5.65625 -0.6875 5.625 -0.671875 5.59375 -0.59375 C 5.421875 -0.109375 5.046875 -0.109375 5.046875 -0.109375 C 4.734375 -0.109375 4.734375 -0.890625 4.734375 -1.125 C 4.734375 -1.328125 4.734375 -1.34375 4.828125 -1.46875 C 5.765625 -2.640625 5.96875 -3.796875 5.96875 -3.796875 C 5.96875 -3.796875 5.96875 -3.90625 5.859375 -3.90625 C 5.75 -3.90625 5.75 -3.875 5.703125 -3.6875 C 5.53125 -3.0625 5.203125 -2.3125 4.734375 -1.71875 L 4.734375 -2.34375 C 4.734375 -3.90625 3.8125 -4.390625 3.078125 -4.390625 C 1.71875 -4.390625 0.40625 -2.96875 0.40625 -1.5625 C 0.40625 -0.640625 1 0.109375 2.015625 0.109375 C 2.640625 0.109375 3.359375 -0.125 4.109375 -0.71875 C 4.234375 -0.203125 4.5625 0.109375 5.015625 0.109375 C 5.53125 0.109375 5.84375 -0.4375 5.84375 -0.59375 Z M 4.0625 -0.984375 C 3.1875 -0.21875 2.4375 -0.109375 2.03125 -0.109375 C 1.4375 -0.109375 1.140625 -0.5625 1.140625 -1.1875 C 1.140625 -1.671875 1.40625 -2.75 1.71875 -3.25 C 2.1875 -3.984375 2.71875 -4.171875 3.0625 -4.171875 C 4.046875 -4.171875 4.046875 -2.875 4.046875 -2.09375 C 4.046875 -1.71875 4.046875 -1.15625 4.0625 -0.984375 Z M 4.0625 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph0-5">
<path style="stroke:none;" d="M 7.484375 -5.28125 C 7.484375 -6.046875 6.828125 -6.78125 5.53125 -6.78125 L 2.3125 -6.78125 C 2.125 -6.78125 2.015625 -6.78125 2.015625 -6.59375 C 2.015625 -6.46875 2.109375 -6.46875 2.296875 -6.46875 C 2.4375 -6.46875 2.609375 -6.453125 2.734375 -6.453125 C 2.890625 -6.421875 2.953125 -6.40625 2.953125 -6.296875 C 2.953125 -6.25 2.9375 -6.21875 2.90625 -6.109375 L 1.578125 -0.78125 C 1.484375 -0.390625 1.453125 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.390625 -0.3125 0.390625 -0.125 C 0.390625 0 0.515625 0 0.546875 0 L 1.8125 -0.03125 L 2.4375 -0.015625 C 2.65625 -0.015625 2.875 0 3.078125 0 C 3.15625 0 3.28125 0 3.28125 -0.203125 C 3.28125 -0.3125 3.1875 -0.3125 3 -0.3125 C 2.640625 -0.3125 2.359375 -0.3125 2.359375 -0.484375 C 2.359375 -0.546875 2.375 -0.59375 2.390625 -0.65625 L 3 -3.140625 L 4.6875 -3.140625 C 6.109375 -3.140625 7.484375 -4.171875 7.484375 -5.28125 Z M 6.5625 -5.515625 C 6.5625 -5.125 6.359375 -4.28125 5.96875 -3.921875 C 5.484375 -3.46875 4.875 -3.390625 4.4375 -3.390625 L 3.046875 -3.390625 L 3.71875 -6.09375 C 3.8125 -6.4375 3.828125 -6.46875 4.25 -6.46875 L 5.203125 -6.46875 C 6.03125 -6.46875 6.5625 -6.203125 6.5625 -5.515625 Z M 6.5625 -5.515625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph1-1">
<path style="stroke:none;" d="M 6.71875 -1.609375 L 6.46875 -1.609375 C 6.421875 -1.34375 6.375 -1.125 6.296875 -0.890625 C 6.234375 -0.71875 6.21875 -0.640625 5.640625 -0.640625 L 4.84375 -0.640625 C 4.96875 -1.203125 5.28125 -1.671875 5.71875 -2.328125 C 6.1875 -3.03125 6.59375 -3.71875 6.59375 -4.5 C 6.59375 -5.890625 5.265625 -7 3.578125 -7 C 1.875 -7 0.5625 -5.859375 0.5625 -4.5 C 0.5625 -3.71875 0.96875 -3.03125 1.421875 -2.328125 C 1.859375 -1.671875 2.1875 -1.203125 2.3125 -0.640625 L 1.515625 -0.640625 C 0.9375 -0.640625 0.90625 -0.71875 0.859375 -0.875 C 0.78125 -1.09375 0.734375 -1.359375 0.6875 -1.609375 L 0.4375 -1.609375 L 0.765625 0 L 2.34375 0 C 2.5625 0 2.59375 0 2.59375 -0.203125 C 2.59375 -0.90625 2.296875 -1.78125 2.0625 -2.40625 C 1.859375 -2.984375 1.578125 -3.765625 1.578125 -4.515625 C 1.578125 -6.109375 2.671875 -6.78125 3.578125 -6.78125 C 4.53125 -6.78125 5.578125 -6.0625 5.578125 -4.515625 C 5.578125 -3.765625 5.3125 -3.015625 5.015625 -2.203125 C 4.875 -1.78125 4.546875 -0.890625 4.546875 -0.203125 C 4.546875 0 4.578125 0 4.8125 0 L 6.390625 0 Z M 6.71875 -1.609375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph2-1">
<path style="stroke:none;" d="M 6.109375 0 L 6.109375 -0.46875 L 5.421875 -0.46875 L 5.421875 -3.03125 C 5.421875 -4.078125 4.875 -4.46875 3.890625 -4.46875 C 2.9375 -4.46875 2.40625 -3.90625 2.15625 -3.390625 L 2.15625 -4.46875 L 0.453125 -4.390625 L 0.453125 -3.921875 C 1.0625 -3.921875 1.125 -3.921875 1.125 -3.53125 L 1.125 -0.46875 L 0.453125 -0.46875 L 0.453125 0 L 1.703125 -0.03125 L 2.953125 0 L 2.953125 -0.46875 L 2.265625 -0.46875 L 2.265625 -2.546875 C 2.265625 -3.625 3.109375 -4.109375 3.734375 -4.109375 C 4.078125 -4.109375 4.28125 -3.90625 4.28125 -3.140625 L 4.28125 -0.46875 L 3.609375 -0.46875 L 3.609375 0 L 4.859375 -0.03125 Z M 6.109375 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph2-2">
<path style="stroke:none;" d="M 7.171875 -2.71875 L 6.703125 -2.71875 C 6.484375 -1.34375 6.21875 -0.46875 4.375 -0.46875 L 2.875 -0.46875 L 2.875 -3.265625 L 3.40625 -3.265625 C 4.359375 -3.265625 4.46875 -2.84375 4.46875 -2.109375 L 4.9375 -2.109375 L 4.9375 -4.890625 L 4.46875 -4.890625 C 4.46875 -4.15625 4.375 -3.734375 3.40625 -3.734375 L 2.875 -3.734375 L 2.875 -6.28125 L 4.375 -6.28125 C 5.96875 -6.28125 6.234375 -5.5625 6.390625 -4.359375 L 6.859375 -4.359375 L 6.546875 -6.75 L 0.390625 -6.75 L 0.390625 -6.28125 L 1.453125 -6.28125 L 1.453125 -0.46875 L 0.390625 -0.46875 L 0.390625 0 L 6.71875 0 Z M 7.171875 -2.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph3-1">
<path style="stroke:none;" d="M 3.28125 0 L 3.28125 -0.25 L 3.015625 -0.25 C 2.328125 -0.25 2.328125 -0.34375 2.328125 -0.5625 L 2.328125 -4.40625 C 2.328125 -4.59375 2.3125 -4.609375 2.109375 -4.609375 C 1.671875 -4.171875 1.046875 -4.15625 0.75 -4.15625 L 0.75 -3.90625 C 0.921875 -3.90625 1.375 -3.90625 1.765625 -4.109375 L 1.765625 -0.5625 C 1.765625 -0.34375 1.765625 -0.25 1.0625 -0.25 L 0.8125 -0.25 L 0.8125 0 L 2.046875 -0.03125 Z M 3.28125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez04b_d4-glyph3-2">
<path style="stroke:none;" d="M 3.5 -1.265625 L 3.265625 -1.265625 C 3.25 -1.109375 3.171875 -0.703125 3.09375 -0.625 C 3.03125 -0.59375 2.5 -0.59375 2.40625 -0.59375 L 1.125 -0.59375 C 1.859375 -1.234375 2.09375 -1.421875 2.515625 -1.75 C 3.03125 -2.171875 3.5 -2.59375 3.5 -3.25 C 3.5 -4.09375 2.765625 -4.609375 1.875 -4.609375 C 1.015625 -4.609375 0.4375 -4 0.4375 -3.359375 C 0.4375 -3.015625 0.734375 -2.96875 0.8125 -2.96875 C 0.96875 -2.96875 1.171875 -3.09375 1.171875 -3.34375 C 1.171875 -3.46875 1.125 -3.71875 0.765625 -3.71875 C 0.984375 -4.203125 1.453125 -4.359375 1.78125 -4.359375 C 2.46875 -4.359375 2.828125 -3.8125 2.828125 -3.25 C 2.828125 -2.65625 2.40625 -2.171875 2.171875 -1.921875 L 0.5 -0.265625 C 0.4375 -0.203125 0.4375 -0.1875 0.4375 0 L 3.296875 0 Z M 3.5 -1.265625 "/>
</symbol>
</g>
<clipPath id="fisica2_lez04b_d4-clip1">
  <path d="M 71 24 L 221 24 L 221 124.777344 L 71 124.777344 Z M 71 24 "/>
</clipPath>
<clipPath id="fisica2_lez04b_d4-clip2">
  <path d="M 13 37 L 249.152344 37 L 249.152344 84 L 13 84 Z M 13 37 "/>
</clipPath>
</defs>
<g id="fisica2_lez04b_d4-surface1">
<g clip-path="url(#fisica2_lez04b_d4-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 63.780808 0.000609577 C 63.780808 23.482036 35.223908 42.51997 0.00176803 42.51997 C -35.224297 42.51997 -63.781197 23.482036 -63.781197 0.000609577 C -63.781197 -23.484742 -35.224297 -42.51875 0.00176803 -42.51875 C 35.223908 -42.51875 63.780808 -23.484742 63.780808 0.000609577 Z M 63.780808 0.000609577 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-1" x="142.76625" y="26.482531"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,0%,0%);fill-opacity:1;" d="M 21.367188 78.101562 C 21.367188 76.871094 20.367188 75.871094 19.136719 75.871094 C 17.90625 75.871094 16.90625 76.871094 16.90625 78.101562 C 16.90625 79.335938 17.90625 80.332031 19.136719 80.332031 C 20.367188 80.332031 21.367188 79.335938 21.367188 78.101562 Z M 21.367188 78.101562 "/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-2" x="7.798091" y="80.525323"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -127.575939 0.000609577 L 97.566271 45.028266 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<g clip-path="url(#fisica2_lez04b_d4-clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -127.575939 0.000609577 L 99.379781 34.728156 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -127.575939 0.000609577 L 95.301346 55.151737 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-3" x="29.072085" y="94.238282"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph1-1" x="34.232855" y="94.238282"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -109.703833 -8.929555 L -108.055188 3.007425 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.074158 2.39212 C -1.693586 0.954635 -0.851335 0.278273 -0.000505192 -0.000634811 C -0.849586 -0.280229 -1.695579 -0.955669 -2.072235 -2.390613 " transform="matrix(0.135975,-0.985751,-0.985751,-0.135975,38.589287,74.913478)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 87.0625 64.773438 C 87.0625 64.113281 86.53125 63.582031 85.871094 63.582031 C 85.214844 63.582031 84.683594 64.113281 84.683594 64.773438 C 84.683594 65.429688 85.214844 65.960938 85.871094 65.960938 C 86.53125 65.960938 87.0625 65.429688 87.0625 64.773438 Z M 87.0625 64.773438 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 186.554688 44.839844 C 186.554688 44.183594 186.019531 43.648438 185.363281 43.648438 C 184.707031 43.648438 184.171875 44.183594 184.171875 44.839844 C 184.171875 45.496094 184.707031 46.03125 185.363281 46.03125 C 186.019531 46.03125 186.554688 45.496094 186.554688 44.839844 Z M 186.554688 44.839844 "/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -55.954055 22.524251 L -65.060861 4.263537 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -60.507458 13.393894 L -88.330318 27.266071 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551629 3.111859 C -2.085013 1.243395 -1.044956 0.362669 -0.000798234 0.00158962 C -1.047536 -0.362381 -2.086083 -1.244257 -2.549921 -3.111664 " transform="matrix(-0.890526,-0.443999,-0.443999,0.890526,57.835932,50.791199)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph2-1" x="42.998998" y="45.425919"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-1" x="49.334027" y="46.913646"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -60.507458 13.393894 L -25.850568 20.326057 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.552595 3.109824 C -2.085278 1.242944 -1.044433 0.362246 0.000256284 0.00119696 C -1.045196 -0.362182 -2.086024 -1.2429 -2.551764 -3.11133 " transform="matrix(0.97578,-0.195146,-0.195146,-0.97578,120.757796,57.798093)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph2-2" x="124.84785" y="68.219484"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-1" x="132.338231" y="69.707211"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -45.49693 16.396785 C -47.157352 24.683192 -55.220015 30.060918 -63.510348 28.404421 C -68.146183 27.474114 -72.095083 24.455522 -74.206919 20.223998 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-4" x="74.753754" y="43.172933"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-1" x="81.095748" y="44.659665"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-5" x="89.383232" y="78.024549"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-1" x="95.748115" y="79.512275"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-3" x="62.931551" y="94.340781"/>
  <use xlink:href="#fisica2_lez04b_d4-glyph0-1" x="68.091856" y="94.340781"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-1" x="74.1716" y="95.828507"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -72.283499 -9.353493 L -66.332673 2.124222 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 30.423208 38.162834 L 48.491581 28.679196 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 39.459357 33.421015 L 53.90856 60.949474 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.549846 3.110789 C -2.084546 1.244688 -1.045195 0.362691 0.00148056 -0.00117311 C -1.044882 -0.364241 -2.086317 -1.243444 -2.551623 -3.110369 " transform="matrix(0.462509,-0.881073,-0.881073,-0.462509,199.924063,17.098418)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph2-1" x="194.716273" y="11.559487"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-2" x="201.051302" y="13.047214"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 39.459357 33.421015 L 74.116247 40.353178 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.550631 3.10983 C -2.083314 1.24295 -1.046318 0.363022 0.00222089 0.00120285 C -1.04708 -0.361407 -2.084059 -1.242894 -2.5498 -3.111324 " transform="matrix(0.97578,-0.195146,-0.195146,-0.97578,220.236349,37.868795)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph2-2" x="224.325517" y="40.447259"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-2" x="231.815898" y="41.93399"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 54.465959 36.423906 C 53.56313 40.949831 50.658373 44.828074 46.572086 46.971313 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-4" x="199.56258" y="31.466166"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-2" x="205.904575" y="32.952898"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-5" x="169.059705" y="55.121518"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-2" x="175.424587" y="56.60825"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph0-3" x="209.33381" y="66.414309"/>
  <use xlink:href="#fisica2_lez04b_d4-glyph0-1" x="214.494115" y="66.414309"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez04b_d4-glyph3-2" x="220.572864" y="67.902036"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 64.632608 17.857014 L 50.17163 28.062916 " transform="matrix(0.995135,0,0,-0.995135,146.091991,78.102169)"/>
</g>
</svg></figure>
        <p>La <em>stessa</em> semiretta uscente da $Q$ interseca $S$ nei due punti $P_1$ e $P_2$: in $P_1$ il campo $\\vec{E}_1$ forma con la normale uscente $\\hat{n}_1$ un angolo ottuso (attraversamento entrante, flusso negativo), in $P_2$ forma con $\\hat{n}_2$ un angolo acuto (attraversamento uscente, flusso positivo). I due elementi sono visti dalla carica sotto lo <strong>stesso angolo solido geometrico</strong> $d\\Omega_{\\text{geom}}$.</p>`,
        subsections: [
          {
            subtitle: "Dimostrazione",
            content: `<p>Consideriamo un cono infinitesimo di angolo solido geometrico $d\\Omega_{\\text{geom}}$ che parte dalla carica $Q$ ed entra nella regione racchiusa da $S$. Poiché $Q$ è esterna, ogni semiretta uscente da $Q$ interseca la superficie chiusa un numero <strong>pari</strong> di volte (due nel caso in figura; in generale $2k$). Gli attraversamenti si presentano quindi a coppie «entrante–uscente».</p>
            <ul>
              <li>In corrispondenza dell'elemento $dS_1$ il campo <strong>entra</strong> nel volume: l'angolo tra $\\vec{E}_1$ e $\\hat{n}_1$ è ottuso ($\\alpha_1 \\gt 90^\\circ$), dunque $\\vec{E}_1\\cdot\\hat{n}_1 \\lt 0$ e si ha $d\\Omega_{\\text{or}} = -\\,d\\Omega_{\\text{geom}}$. Il flusso $d\\Phi_1$ è <strong>negativo</strong>.</li>
              <li>In corrispondenza dell'elemento $dS_2$ il campo <strong>esce</strong> dal volume: l'angolo tra $\\vec{E}_2$ e $\\hat{n}_2$ è acuto ($\\alpha_2 \\lt 90^\\circ$), dunque $\\vec{E}_2\\cdot\\hat{n}_2 \\gt 0$ e si ha $d\\Omega_{\\text{or}} = +\\,d\\Omega_{\\text{geom}}$. Il flusso $d\\Phi_2$ è <strong>positivo</strong>.</li>
            </ul>
            <p>Entrambi gli elementi sono intercettati dal medesimo cono, dunque dalla relazione $d\\Phi = \\frac{Q}{4\\pi\\varepsilon_0} d\\Omega_{\\text{or}}$ segue</p>
            <p>$$d\\Phi_1 = -\\,\\frac{Q}{4\\pi\\varepsilon_0} d\\Omega_{\\text{geom}} , \\qquad d\\Phi_2 = +\\,\\frac{Q}{4\\pi\\varepsilon_0} d\\Omega_{\\text{geom}} ,$$</p>
            <p>e il flusso netto attraverso il cono è</p>
            <p>$$d\\Phi_{\\text{netto}} = d\\Phi_1 + d\\Phi_2 = 0 .$$</p>
            <p>Lo stesso ragionamento si applica a ciascuna delle $k$ coppie, nel caso di superfici attraversate più volte. Essendo il bilancio nullo per ogni cono uscente da $Q$, l'integrazione su tutte le direzioni dà $\\oint_S d\\Omega_{\\text{or}} = 0$ e quindi $\\Phi(\\vec{E}) = 0$. $\\blacksquare$</p>`
          }
        ],
        extra_content: `<p><strong>In breve:</strong> per una carica esterna, ogni linea di campo che entra nella superficie deve anche uscirne. «Tanto entra, tanto esce»: il bilancio netto del flusso è zero.</p>`
      },

      {
        id: "s04-sovrapposizione",
        type: "section",
        title: "Principio di sovrapposizione: più cariche",
        icon: "➕",
        content: `<p>Se all'interno della superficie chiusa $S$ ci sono più cariche $Q_1, Q_2, \\dots, Q_N$, il campo elettrico totale in un punto è la somma vettoriale dei campi generati da ciascuna carica (principio di sovrapposizione):</p>
        <p>$$\\vec{E}_{\\text{tot}} = \\sum_{i=1}^N \\vec{E}_i$$</p>
        <p>Il flusso è <strong>lineare nel campo</strong>, dunque il flusso totale è la somma dei flussi generati da ogni carica:</p>
        <p>$$\\Phi(\\vec{E}_{\\text{tot}}) = \\oint_S \\left(\\sum_{i=1}^N \\vec{E}_i\\right) \\cdot d\\vec{S} = \\sum_{i=1}^N \\oint_S \\vec{E}_i \\cdot d\\vec{S} = \\sum_{i=1}^N \\Phi(\\vec{E}_i) .$$</p>
        <p>Applicando i due risultati precedenti a ciascun addendo, il flusso della carica $Q_i$ vale $Q_i/\\varepsilon_0$ se $Q_i$ è interna e $0$ se è esterna. Pertanto il flusso totale è determinato solo dalla somma delle cariche <strong>interne</strong> alla superficie:</p>
        <p>$$\\Phi(\\vec{E}_{\\text{tot}}) = \\frac{1}{\\varepsilon_0} \\sum_{i \\in \\text{int}} Q_i = \\frac{Q_{\\text{int, tot}}}{\\varepsilon_0} .$$</p>`
      },

      {
        id: "s04-enunciato-gauss",
        type: "section",
        title: "Enunciato e significato del teorema di Gauss",
        icon: "🏛️",
        content: `<p>Il flusso del campo elettrostatico $\\vec{E}$ attraverso una qualsiasi superficie chiusa $S$ (detta <strong>superficie gaussiana</strong>), calcolato con la normale uscente, è uguale al rapporto tra la carica elettrica totale $Q_{\\text{int}}$ contenuta all'interno della superficie e la costante dielettrica del vuoto $\\varepsilon_0$:</p>
        <p>$$\\Phi_S(\\vec{E}) = \\oint_S \\vec{E} \\cdot d\\vec{S} = \\frac{Q_{\\text{int}}}{\\varepsilon_0}$$</p>
        <p><strong>Ipotesi da non dimenticare:</strong> nel caso di cariche puntiformi, nessuna di esse deve trovarsi <em>su</em> $S$ (lì il campo non è definito e il teorema non si applica direttamente). Il caso singolare di una carica su uno spigolo o su un vertice si tratta con l'argomento dell'angolo solido, come nell'esercizio Scritto 4.</p>`,
        subsections: [
          {
            subtitle: "Significato fisico: le cariche sono le sorgenti del campo",
            content: `<p>Il teorema di Gauss è una delle quattro equazioni di Maxwell e racchiude un concetto fisico fondamentale: <strong>le cariche elettriche sono le sorgenti del campo elettrostatico</strong>. Possiamo fare un'analogia con un fluido come l'acqua.</p>
            <ul>
              <li>Una <strong>carica positiva</strong> si comporta come una <strong>sorgente</strong> (un rubinetto): le linee di campo «sgorgano» da essa, generando un flusso positivo (uscente) attraverso una superficie che la racchiude.</li>
              <li>Una <strong>carica negativa</strong> si comporta come un <strong>pozzo</strong> (uno scarico): le linee di campo «convergono» su di essa, generando un flusso negativo (entrante).</li>
              <li>Se una superficie <strong>non racchiude cariche</strong> (né rubinetti né scarichi), il flusso netto è zero. Tanta acqua entra, tanta acqua esce: il fluido attraversa semplicemente la regione, senza avere lì le sue sorgenti.</li>
            </ul>
            <p>Il teorema ci dice che per sapere il flusso totale attraverso una superficie non abbiamo bisogno di conoscere i dettagli del campo in ogni suo punto: ci basta «contare» quante cariche ci sono dentro.</p>`
          },
          {
            subtitle: "Esempio: la scatola con cariche dentro e fuori",
            content: `<ol>
              <li>Se mettiamo una carica $Q_1$ all'interno e una carica $Q_2$ all'esterno, il flusso totale attraverso la scatola è $\\Phi = Q_1 / \\varepsilon_0$: la carica esterna $Q_2$ non contribuisce al flusso <em>netto</em>. Questo non significa che $Q_2$ sia irrilevante: il campo $\\vec{E}$ in ciascun punto della scatola è la somma dei contributi di $Q_1$ e $Q_2$, dunque dipende eccome da $Q_2$. Ciò che accade è che i contributi di $Q_2$ al flusso, punto per punto, si cancellano esattamente a coppie nell'integrale su tutta la superficie chiusa.</li>
              <li>Se all'interno ci sono tre cariche $Q_1, Q_2, Q_3$, il flusso totale è $\\Phi = (Q_1 + Q_2 + Q_3) / \\varepsilon_0$. La forma della superficie e la posizione esatta delle cariche all'interno non contano.</li>
              <li>Se la carica interna netta è nulla (per esempio $Q_1 = +q$ e $Q_2 = -q$, entrambe dentro la scatola), allora $\\Phi = 0$.</li>
            </ol>`
          },
          {
            subtitle: "Esempio numerico",
            content: `<p>Una scatola chiusa racchiude una carica netta $Q_{\\text{int}} = 2{,}0$ nC $= 2{,}0\\cdot 10^{-9}$ C. Una seconda carica, di valore qualsiasi, si trova fuori dalla scatola. Il flusso del campo elettrico attraverso la superficie della scatola è</p>
            <p>$$\\Phi = \\frac{Q_{\\text{int}}}{\\varepsilon_0} = \\frac{2{,}0\\cdot 10^{-9}\\ \\text{C}}{8{,}854\\cdot 10^{-12}\\ \\text{C}^2/(\\text{N}\\cdot\\text{m}^2)} \\approx 2{,}3\\cdot 10^{2}\\ \\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}} .$$</p>
            <p>Il risultato non cambia se deformiamo la scatola, se spostiamo la carica al suo interno o se avviciniamo la carica esterna: dipende <em>solo</em> dalla carica racchiusa.</p>`
          }
        ],
        formulas: [
          { label: "Teorema di Gauss", latex: "\\Phi_S(\\vec{E}) = \\oint_S \\vec{E} \\cdot d\\vec{S} = \\frac{Q_{\\text{int}}}{\\varepsilon_0}" }
        ]
      },

      {
        id: "s04-alert-flusso-nullo",
        type: "alert_box",
        title: "Trappola: $\\Phi = 0$ non implica $\\vec{E} = \\vec{0}$",
        icon: "⚠️",
        content: `<p>Se la carica interna netta è nulla, allora $\\Phi = 0$. Attenzione: $\\Phi = 0$ <strong>non</strong> implica $\\vec{E} = \\vec{0}$ sulla superficie. Il campo è in generale diverso da zero in ogni punto; è soltanto il suo <strong>bilancio algebrico</strong>, uscente meno entrante, a essere nullo.</p>
        <p>Allo stesso modo, una carica esterna dà flusso netto nullo ma contribuisce al campo in ogni punto della superficie.</p>`
      },

      {
        id: "s04-note-coulomb",
        type: "note_box",
        title: "Perché Gauss funziona: la dipendenza $1/R^2$",
        icon: "🔑",
        content: `<p>Un punto cruciale, a volte dato per scontato, è che il teorema di Gauss nella sua forma semplice vale <strong>perché</strong> il campo elettrostatico di una carica puntiforme decade esattamente con il quadrato della distanza ($1/R^2$).</p>
        <p>Se la dipendenza fosse diversa, ad esempio $1/R^3$, il fattore geometrico dell'area ($R^2$) non si cancellerebbe più e il flusso dipenderebbe dalla distanza e dalla forma della superficie. La validità del teorema di Gauss è una conseguenza diretta e profonda della legge di Coulomb.</p>`
      },

      {
        id: "s04-esercizi-intro",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s04-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1 — Flusso infinitesimo e totale",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dai la definizione di flusso infinitesimo e di flusso totale di un campo vettoriale $\\vec{v}$ attraverso una superficie orientata. Che cosa cambia nel risultato se si sostituisce $\\hat{n}$ con $-\\hat{n}$? Nel caso di un fluido, che dimensioni hanno il flusso di $\\vec{v}$ e quello di $\\rho\\vec{v}$?</p>`,
        solution: `<p><strong>Definizioni.</strong> Fissata su $dS$ una delle due normali unitarie $\\hat{n}$ (scelta che orienta la superficie), si definisce flusso infinitesimo lo scalare</p>
        <p>$$d\\Phi = \\vec{v}\\cdot\\hat{n}\\,dS = \\vec{v}\\cdot\\vec{dS}, \\qquad \\vec{dS} = \\hat{n}\\,dS .$$</p>
        <p>Per una superficie finita $S$ orientata da un campo continuo di normali:</p>
        <p>$$\\Phi(\\vec{v}) = \\int_S \\vec{v}\\cdot\\hat{n}\\,dS$$</p>
        <p>(su una superficie chiusa si usa per convenzione la normale uscente).</p>
        <p><strong>Casi notevoli.</strong> Scrivendo $d\\Phi = v\\cos\\alpha\\,dS$ con $\\alpha$ angolo fra $\\vec{v}$ e $\\hat{n}$: il flusso è massimo e positivo se $\\alpha = 0$ ($d\\Phi = v\\,dS$), nullo se $\\alpha = \\pi/2$, minimo e negativo se $\\alpha = \\pi$ ($d\\Phi = -v\\,dS$).</p>
        <p><strong>Inversione della normale.</strong> Sostituendo $\\hat{n}$ con $-\\hat{n}$ si ha $\\alpha \\to \\pi - \\alpha$, dunque</p>
        <p>$$\\cos\\alpha \\to -\\cos\\alpha \\qquad \\Rightarrow \\qquad \\Phi \\to -\\Phi :$$</p>
        <p>il modulo non cambia, cambia solo l'informazione su quale verso di attraversamento si è deciso di chiamare positivo.</p>
        <p><strong>Dimensioni.</strong></p>
        <p>$$\\Phi(\\vec{v}) = \\frac{dV}{dt} \\ \\left[\\mathrm{m^3/s}\\right] \\ \\text{(portata volumetrica)}, \\qquad \\Phi(\\rho\\vec{v}) = \\frac{dm}{dt} \\ \\left[\\mathrm{kg/s}\\right] \\ \\text{(portata massica)},$$</p>
        <p>e per $\\rho$ costante $\\Phi(\\rho\\vec{v}) = \\rho\\,\\Phi(\\vec{v})$.</p>`
      },

      {
        id: "s04-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2 — Angolo solido e calotta sferica",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Definisci l'angolo solido sotteso da un elemento di superficie $dS$ rispetto a un punto $O$, spiega perché non dipende dalla distanza $R$, e ricava l'angolo solido di una calotta sferica di semiapertura $\\beta$ deducendone il valore dell'angolo solido totale attorno a un punto.</p>`,
        solution: `<p><strong>Passo 1 — definizione.</strong> Per definizione</p>
        <p>$$d\\Omega_{\\text{geom}} = \\frac{dS_\\perp}{R^2},$$</p>
        <p>dove $dS_\\perp$ è la proiezione di $dS$ sul piano perpendicolare alla congiungente $O\\to dS$, cioè l'area che il cono di vertice $O$ e base $dS$ intercetta sulla sfera di centro $O$ e raggio $R$. Se $\\alpha$ è l'angolo fra la normale a $dS$ e la direzione radiale,</p>
        <p>$$dS_\\perp = |\\cos\\alpha|\\, dS .$$</p>
        <p>Il rapporto fra un'area e il quadrato di una lunghezza è adimensionale (unità: steradiante). <em>Nota:</em> questa è la quantità <strong>geometrica</strong>, non negativa; nella formula del flusso si usa invece l'angolo solido <strong>orientato</strong>, senza valore assoluto.</p>
        <p><strong>Passo 2 — indipendenza da $R$.</strong> L'area intercettata dal cono su una sfera cresce proporzionalmente a $R^2$: raddoppiando $R$ l'area quadruplica e il rapporto resta invariato. Dunque $d\\Omega$ dipende solo dall'apertura angolare del cono.</p>
        <p><strong>Passo 3 — fascia sferica.</strong> La fascia fra i coni di semiapertura $\\theta$ e $\\theta+d\\theta$ ha area</p>
        <p>$$dS = (R\\,d\\theta)(2\\pi R\\sin\\theta) = 2\\pi R^2 \\sin\\theta\\, d\\theta \\qquad \\Rightarrow \\qquad d\\Omega = 2\\pi \\sin\\theta\\, d\\theta .$$</p>
        <p><strong>Passo 4 — calotta.</strong> Integrando da $0$ a $\\beta$:</p>
        <p>$$\\Omega(\\beta) = \\int_0^{\\beta} 2\\pi\\sin\\theta\\, d\\theta = 2\\pi\\left[-\\cos\\theta\\right]_0^{\\beta} = 2\\pi(1-\\cos\\beta).$$</p>
        <p>Per $\\beta\\ll 1$, $1-\\cos\\beta \\approx \\beta^2/2$ e dunque $\\Omega \\approx \\pi\\beta^2$.</p>
        <p><strong>Passo 5 — controllo del risultato.</strong> Ponendo $\\beta = \\pi$ la calotta diventa l'intera sfera:</p>
        <p>$$\\Omega_{\\text{tot}} = 2\\pi(1-\\cos\\pi) = 4\\pi \\ \\text{sr}.$$</p>`
      },

      {
        id: "s04-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3 — Dal caso sferico all'elemento generico",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Partendo dalla definizione di angolo solido per un elemento appartenente a una sfera di raggio $R_0$ centrata in $O$, ricava l'espressione dell'angolo solido sotteso da un elemento generico $dS$ posto a distanza $r$ da $O$ e con normale $\\hat{n}$ inclinata di $\\alpha$ rispetto a $\\hat{u}_r$. Mostra che il risultato non dipende da $R_0$ e distingui angolo solido geometrico e orientato.</p>`,
        solution: `<p><strong>Passo 1 — caso sferico.</strong> Per un elemento sulla sfera di riferimento si pone</p>
        <p>$$d\\Omega_{\\text{geom}} = \\frac{dS_{\\text{sfera}}}{R_0^2},$$</p>
        <p>rapporto adimensionale (steradianti).</p>
        <p><strong>Passo 2 — proiezione dell'elemento generico.</strong> Si proietta $dS$ sulla sfera di raggio $R_0$ lungo il cono di vertice $O$: l'inclinazione riduce l'area vista del fattore $|\\cos\\alpha|$, e il passaggio dalla distanza $r$ alla distanza $R_0$ riscala le aree del fattore $R_0^2/r^2$, cioè</p>
        <p>$$dS_{\\text{sfera}} = \\frac{R_0^2}{r^2}\\,|\\cos\\alpha|\\,dS .$$</p>
        <p><strong>Passo 3 — sostituzione.</strong> Dividendo per $R_0^2$ i due fattori $R_0^2$ si cancellano:</p>
        <p>$$d\\Omega_{\\text{geom}} = \\frac{|\\cos\\alpha|\\,dS}{r^2} = \\frac{|\\hat{n}\\cdot\\hat{u}_r|\\,dS}{r^2},$$</p>
        <p>indipendente da $R_0$: l'angolo solido è una proprietà del cono, non della sfera ausiliaria scelta.</p>
        <p><strong>Passo 4 — versione orientata.</strong> Sopprimendo il valore assoluto si ottiene</p>
        <p>$$d\\Omega = \\frac{(\\hat{n}\\cdot\\hat{u}_r)\\,dS}{r^2} = \\frac{\\vec{dS}\\cdot\\hat{u}_r}{r^2},$$</p>
        <p>positivo se $\\hat{n}$ ha componente radiale positiva (punta nel verso di allontanamento da $O$), nullo se l'elemento è visto di taglio ($\\hat{n}\\cdot\\hat{u}_r = 0$) e uguale a $-d\\Omega_{\\text{geom}}$ se $\\hat{n}$ punta verso $O$. Entrambe le quantità sono adimensionali.</p>`
      },

      {
        id: "s04-es-teoria-4",
        type: "esercizio",
        title: "Teoria 4 — Gauss e il caso della carica esterna",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enuncia il teorema di Gauss per il campo elettrostatico e dimostra che una carica puntiforme $Q$ <em>esterna</em> a una superficie chiusa $S$ dà flusso netto nullo attraverso $S$, chiarendo il ruolo dell'angolo solido orientato $d\\Omega_{\\text{or}}$.</p>`,
        solution: `<p><strong>Enunciato.</strong> Per ogni superficie chiusa $S$, orientata con la normale uscente e priva di cariche puntiformi sulla superficie stessa,</p>
        <p>$$\\Phi_S(\\vec{E}) = \\oint_S \\vec{E}\\cdot\\hat{n}\\, dS = \\frac{Q_{\\text{int}}}{\\varepsilon_0},$$</p>
        <p>dove $Q_{\\text{int}}$ è la carica totale racchiusa da $S$.</p>
        <p><strong>Passo 1 — flusso elementare.</strong> Per una carica puntiforme $\\vec{E} = \\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{R^2}\\hat{u}_R$, quindi</p>
        <p>$$d\\Phi = \\frac{Q}{4\\pi\\varepsilon_0}\\frac{\\cos\\alpha\\, dS}{R^2} = \\frac{Q}{4\\pi\\varepsilon_0}\\, d\\Omega_{\\text{or}}, \\qquad d\\Omega_{\\text{or}} = \\frac{\\hat{u}_R\\cdot\\hat{n}\\, dS}{R^2},$$</p>
        <p>pari a $+d\\Omega_{\\text{geom}}$ se l'attraversamento è uscente ($\\cos\\alpha \\gt 0$) e a $-d\\Omega_{\\text{geom}}$ se è entrante ($\\cos\\alpha \\lt 0$), dove $d\\Omega_{\\text{geom}} = \\dfrac{|\\cos\\alpha|\\, dS}{R^2} \\gt 0$ è l'angolo solido geometrico.</p>
        <p><strong>Passo 2 — conteggio degli attraversamenti.</strong> Se $Q$ è esterna a $S$, ogni semiretta uscente da $Q$ interseca $S$ un numero <em>pari</em> di volte, $2k$, e gli attraversamenti si organizzano in $k$ coppie entrante–uscente. Tutti gli elementi tagliati dallo stesso cono infinitesimo sottendono lo stesso $d\\Omega_{\\text{geom}}$ (il cono è uno solo), dunque ogni coppia contribuisce</p>
        <p>$$-\\frac{Q}{4\\pi\\varepsilon_0}d\\Omega_{\\text{geom}} + \\frac{Q}{4\\pi\\varepsilon_0}d\\Omega_{\\text{geom}} = 0 .$$</p>
        <p><strong>Passo 3 — conclusione.</strong> Poiché ciò vale per ogni direzione uscente da $Q$,</p>
        <p>$$\\oint_S d\\Omega_{\\text{or}} = 0 \\qquad \\Rightarrow \\qquad \\Phi_S(\\vec{E}) = 0 :$$</p>
        <p>«tanto entra, tanto esce».</p>
        <p><strong>Osservazioni finali.</strong> È essenziale usare l'angolo solido <em>orientato</em>: con l'area geometrica (sempre positiva) i due contributi si sommerebbero invece di cancellarsi. Si noti inoltre che $\\Phi=0$ non significa $\\vec{E}=\\vec{0}$ su $S$.</p>`
      },

      {
        id: "s04-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1 — Flusso attraverso un disco inclinato",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Un fluido ha campo di velocità uniforme $\\vec{v} = 3\\,\\hat{z} \\ \\mathrm{m/s}$. Calcola il flusso di $\\vec{v}$ attraverso un disco piano di raggio $a = 0{,}20 \\ \\mathrm{m}$ la cui normale $\\hat{n}$ forma un angolo di $30^\\circ$ con $\\hat{z}$, scegliendo $\\hat{n}$ concorde al flusso. Quanto vale la corrispondente portata massica se il fluido è acqua ($\\rho = 1000 \\ \\mathrm{kg/m^3}$)? Che cosa cambia con la normale opposta e che cosa accadrebbe se il disco fosse parallelo a $\\vec{v}$?</p>`,
        solution: `<p><strong>Passo 1 — area del disco.</strong></p>
        <p>$$S = \\pi a^2 = \\pi (0{,}20)^2 = 0{,}1257 \\ \\mathrm{m^2}.$$</p>
        <p><strong>Passo 2 — formula.</strong> Il campo è uniforme, quindi esce dall'integrale:</p>
        <p>$$\\Phi(\\vec{v}) = \\int_S \\vec{v}\\cdot\\hat{n}\\,dS = v\\cos\\alpha \\int_S dS = v\\,S\\cos\\alpha .$$</p>
        <p><strong>Passo 3 — sostituzione numerica.</strong> Con $\\alpha = 30^\\circ$, $\\cos 30^\\circ = \\sqrt{3}/2 = 0{,}8660$:</p>
        <p>$$\\Phi(\\vec{v}) = 3 \\cdot 0{,}1257 \\cdot 0{,}8660 = 0{,}326 \\ \\mathrm{m^3/s},$$</p>
        <p>positivo perché la normale è stata scelta concorde al flusso.</p>
        <p><strong>Passo 4 — portata massica.</strong></p>
        <p>$$\\Phi(\\rho\\vec{v}) = \\rho\\,\\Phi(\\vec{v}) = 1000 \\cdot 0{,}326 = 3{,}3\\cdot 10^{2} \\ \\mathrm{kg/s}.$$</p>
        <p><strong>Passo 5 — controllo dei casi limite.</strong> Con la normale opposta si ha $\\alpha \\to 180^\\circ - 30^\\circ = 150^\\circ$, dunque</p>
        <p>$$\\Phi(\\vec{v}) = -0{,}326 \\ \\mathrm{m^3/s} :$$</p>
        <p>stesso modulo, segno invertito, perché la quantità d'acqua che attraversa il disco è la stessa e cambia solo il verso che chiamiamo positivo. Se il disco fosse parallelo a $\\vec{v}$ la normale sarebbe ortogonale a $\\vec{v}$ ($\\alpha = 90^\\circ$) e si avrebbe $\\Phi = 0$, nullo sia in segno sia in modulo.</p>`
      },

      {
        id: "s04-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2 — Carica al centro di un cubo",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Una carica puntiforme $q = +3{,}0$ nC è posta nel centro di un cubo di lato $a = 20$ cm. Calcola il flusso del campo elettrico attraverso l'intera superficie del cubo e attraverso una singola faccia. I risultati dipendono da $a$?</p>`,
        solution: `<p><strong>Passo 1 — flusso totale (teorema di Gauss).</strong> La superficie del cubo è chiusa e racchiude tutta la carica, quindi</p>
        <p>$$\\Phi_{\\text{tot}} = \\frac{q}{\\varepsilon_0} .$$</p>
        <p><strong>Passo 2 — sostituzione numerica.</strong></p>
        <p>$$\\Phi_{\\text{tot}} = \\frac{3{,}0\\cdot 10^{-9}\\ \\text{C}}{8{,}854\\cdot 10^{-12}\\ \\text{C}^2/(\\text{N}\\cdot\\text{m}^2)} \\approx 3{,}4\\cdot 10^{2}\\ \\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}} .$$</p>
        <p><strong>Passo 3 — simmetria e angolo solido di una faccia.</strong> Le sei facce sono equivalenti per simmetria rispetto al centro: ciascuna è vista dalla carica sotto l'angolo solido</p>
        <p>$$\\Omega_{\\text{faccia}} = \\frac{4\\pi}{6} = \\frac{2\\pi}{3} \\ \\text{sr}.$$</p>
        <p><strong>Passo 4 — flusso attraverso una faccia.</strong></p>
        <p>$$\\Phi_{\\text{faccia}} = \\frac{q}{4\\pi\\varepsilon_0}\\cdot\\frac{2\\pi}{3} = \\frac{q}{6\\varepsilon_0} = \\frac{\\Phi_{\\text{tot}}}{6} \\approx 5{,}6\\cdot 10^{1}\\ \\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}} .$$</p>
        <p><strong>Passo 5 — controllo del risultato.</strong> Nessuno dei due valori dipende da $a$: il teorema di Gauss dà il flusso in funzione della sola carica racchiusa, e l'angolo solido sotteso da una faccia è una quantità puramente angolare, indipendente dalle dimensioni del cubo (aumentando $a$ il campo sulla faccia diminuisce come $1/a^2$, ma l'area cresce come $a^2$).</p>`
      },

      {
        id: "s04-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3 — Angolo solido di un disco: stima ed esatto",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Un disco piano di raggio $a = 0{,}10 \\ \\mathrm{m}$ ha il centro sull'asse passante per il punto $O$ e ortogonale al disco, a distanza $d = 2{,}0 \\ \\mathrm{m}$ da $O$. (a) Stima l'angolo solido sotteso dal disco rispetto a $O$ trattandolo come elemento piccolo. (b) Calcolalo esattamente, osservando che il disco è sotteso dallo stesso cono di una calotta sferica, e confronta i due valori giustificando lo scarto.</p>`,
        solution: `<p><strong>(a) Stima come elemento piccolo.</strong> Il centro del disco sta a distanza $r \\simeq d$ e la normale (orientata nel verso di allontanamento da $O$) è parallela a $\\hat{u}_r$, quindi $\\cos\\alpha \\simeq 1$:</p>
        <p>$$\\Omega \\simeq \\frac{S}{d^2} = \\frac{\\pi a^2}{d^2} = \\frac{\\pi \\cdot 0{,}010}{4{,}0} = 7{,}85 \\cdot 10^{-3} \\ \\mathrm{sr}.$$</p>
        <p><strong>(b) Calcolo esatto — passo 1: il semiangolo del cono.</strong> Il bordo del disco è visto da $O$ sotto il semiangolo $\\theta_0$ con $\\tan\\theta_0 = a/d = 0{,}050$, dunque</p>
        <p>$$\\cos\\theta_0 = \\frac{d}{\\sqrt{d^2 + a^2}} = \\frac{2{,}0}{\\sqrt{4{,}01}} = 0{,}998752 .$$</p>
        <p><strong>Passo 2 — formula della calotta.</strong> Poiché l'angolo solido dipende solo dal cono, coincide con quello della calotta sferica di semiangolo $\\theta_0$:</p>
        <p>$$\\Omega = 2\\pi(1 - \\cos\\theta_0) = 2\\pi \\cdot 1{,}248\\cdot 10^{-3} = 7{,}84\\cdot 10^{-3} \\ \\mathrm{sr},$$</p>
        <p>indipendente dal raggio della sfera usata.</p>
        <p><strong>Passo 3 — confronto.</strong> I due valori differiscono di circa lo $0{,}2\\%$: l'approssimazione (a) ignora che i punti periferici del disco stanno a distanza $r = \\sqrt{d^2+a^2} \\gt d$ e hanno normale inclinata di un angolo fino a $\\theta_0$ rispetto a $\\hat{u}_r$, due effetti che riducono il contributo. Poiché $a \\ll d$, entrambe le correzioni sono di ordine $(a/d)^2 = 2{,}5\\cdot 10^{-3}$.</p>`
      },

      {
        id: "s04-es-scritto-4",
        type: "esercizio",
        title: "Scritto 4 — Carica su un vertice del cubo",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Una carica puntiforme $q = +8{,}0$ nC è posta in uno dei vertici di un cubo. Calcola il flusso del campo elettrico attraverso la superficie totale del cubo, spiega quanto vale il flusso attraverso le tre facce che contengono il vertice occupato dalla carica e determina il flusso attraverso ciascuna delle altre tre facce.</p>`,
        solution: `<p><strong>Passo 1 — perché Gauss non si applica direttamente.</strong> La carica sta sul bordo della superficie, quindi non si può scrivere immediatamente $\\Phi = q/\\varepsilon_0$: si usa l'argomento dell'angolo solido. (Più precisamente, il flusso va inteso come limite degli integrali sulle facce private di un piccolo intorno del vertice occupato dalla carica, dove il campo non è definito.)</p>
        <p><strong>Passo 2 — costruzione geometrica.</strong> Circondiamo la carica con <strong>otto cubi identici, uno per ciascun ottante</strong> definito dai tre piani che si incontrano nel vertice, disposti in modo da formare un cubo più grande con la carica al centro. In questo modo si copre tutto lo spazio attorno a $q$, cioè $4\\pi$ sr, e gli otto cubi sono equivalenti per simmetria:</p>
        <p>$$\\Omega_{\\text{cubo}} = \\frac{4\\pi}{8} = \\frac{\\pi}{2} \\ \\text{sr}.$$</p>
        <p><strong>Passo 3 — flusso attraverso il cubo.</strong></p>
        <p>$$\\Phi_{\\text{cubo}} = \\frac{q}{4\\pi\\varepsilon_0}\\cdot\\frac{\\pi}{2} = \\frac{q}{8\\varepsilon_0} = \\frac{8{,}0\\cdot 10^{-9}}{8\\cdot 8{,}854\\cdot 10^{-12}} \\approx 1{,}1\\cdot 10^{2}\\ \\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}} .$$</p>
        <p><strong>Passo 4 — le tre facce adiacenti alla carica.</strong> Esse giacciono in piani passanti per $q$: in ogni loro punto <em>diverso dal vertice occupato dalla carica</em>, il campo $\\vec{E}$, essendo radiale, appartiene al piano della faccia ed è quindi perpendicolare alla normale, $\\cos\\alpha = 0$. Il flusso attraverso ciascuna di esse è dunque nullo (inteso come limite degli integrali sulla faccia privata di un piccolo intorno del vertice).</p>
        <p><strong>Passo 5 — le tre facce opposte.</strong> Tutto il flusso passa per le tre facce lontane, equivalenti fra loro per simmetria rispetto alla diagonale uscente dal vertice:</p>
        <p>$$\\Phi_{\\text{faccia lontana}} = \\frac{1}{3}\\cdot\\frac{q}{8\\varepsilon_0} = \\frac{q}{24\\varepsilon_0} \\approx 3{,}8\\cdot 10^{1}\\ \\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}} .$$</p>
        <p><strong>Controllo.</strong> $3 \\cdot 3{,}8\\cdot 10^{1} \\approx 1{,}1\\cdot 10^{2}$, cioè il flusso totale del cubo: coerente.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Definisci il flusso infinitesimo e il flusso totale di un campo vettoriale attraverso una superficie orientata.",
        back: "Fissata su $dS$ una delle due normali unitarie $\\hat{n}$ (scelta che orienta la superficie), il flusso infinitesimo è lo scalare $d\\Phi = \\vec{v}\\cdot\\hat{n}\\,dS = \\vec{v}\\cdot\\vec{dS}$ con $\\vec{dS} = \\hat{n}\\,dS$. Per una superficie finita $S$ orientata da un campo continuo di normali: $\\Phi(\\vec{v}) = \\int_S \\vec{v}\\cdot\\hat{n}\\,dS$. Su una superficie chiusa si usa per convenzione la normale uscente e si scrive $\\oint_S$."
      },
      {
        type: "tranello",
        front: "Se invertiamo la normale $\\hat{n} \\to -\\hat{n}$, cambia la quantità di fluido che attraversa la superficie?",
        back: "No. Cambia solo il <strong>segno</strong> del flusso: $\\alpha \\to \\pi - \\alpha$, quindi $\\cos\\alpha \\to -\\cos\\alpha$ e $\\Phi \\to -\\Phi$. Il modulo resta lo stesso. Il segno è solo l'informazione su quale verso di attraversamento abbiamo deciso di chiamare positivo. Esempio del secchio sotto la cascata: con normale verso l'alto il flusso è negativo, con normale verso il basso è positivo, ma l'acqua raccolta è identica."
      },
      {
        type: "domanda",
        front: "Che dimensioni hanno il flusso di $\\vec{v}$ e il flusso di $\\rho\\vec{v}$ per un fluido?",
        back: "$\\Phi(\\vec{v}) = dV/dt$ è una <strong>portata volumetrica</strong>, $[\\mathrm{m^3/s}]$. $\\Phi(\\rho\\vec{v}) = dm/dt$ è una <strong>portata massica</strong>, $[\\mathrm{kg/s}]$, e per $\\rho$ costante $\\Phi(\\rho\\vec{v}) = \\rho\\,\\Phi(\\vec{v})$. Nel caso del campo elettrico non c'è nulla che scorre: resta solo la struttura matematica $\\vec{E}\\cdot\\hat{n}\\,dS$."
      },
      {
        type: "definizione",
        front: "Definisci l'angolo solido geometrico e quello orientato sotteso da un elemento $dS$ rispetto a un punto $O$.",
        back: "Geometrico (non negativo): $d\\Omega_{\\text{geom}} = \\dfrac{|\\hat{n}\\cdot\\hat{u}_r|\\,dS}{r^2} = \\dfrac{|\\cos\\alpha|\\,dS}{r^2} = \\dfrac{dS_\\perp}{r^2}$. Orientato (col segno di $\\hat{n}\\cdot\\hat{u}_r$): $d\\Omega = \\dfrac{\\vec{dS}\\cdot\\hat{u}_r}{r^2} = \\dfrac{\\cos\\alpha\\,dS}{r^2}$. Coincidono se $\\hat{n}$ ha componente radiale positiva; se $\\hat{n}$ punta verso $O$ allora $d\\Omega = -d\\Omega_{\\text{geom}}$. Unità: steradiante (adimensionale)."
      },
      {
        type: "domanda",
        front: "Perché l'angolo solido non dipende dalla distanza $R$ a cui si trova la superficie?",
        back: "Perché l'area intercettata dal cono su una sfera cresce come $R^2$: raddoppiando $R$ l'area quadruplica e il rapporto $dS_\\perp/R^2$ resta invariato. L'angolo solido dipende solo dall'apertura angolare del cono, non dalla sfera ausiliaria scelta. Nella derivazione generale i fattori $R_0^2$ si cancellano esattamente."
      },
      {
        type: "tranello",
        front: "Qual è la differenza tra $2\\pi\\sin\\theta\\,d\\theta$ e $2\\pi(1-\\cos\\beta)$?",
        back: "Sono due oggetti geometrici diversi. $d\\Omega = 2\\pi\\sin\\theta\\,d\\theta$ è l'angolo solido della <strong>fascia</strong> sferica tra $\\theta$ e $\\theta+d\\theta$ (una corona attorno all'asse, infinitesima del primo ordine). $\\Omega = 2\\pi(1-\\cos\\beta)$ è l'angolo solido dell'intera <strong>calotta</strong> di semiapertura $\\beta$ (quantità finita), e si ottiene integrando la prima da $0$ a $\\beta$. Solo per $\\beta \\ll 1$ vale $\\Omega \\approx \\pi\\beta^2$."
      },
      {
        type: "dimostrazione",
        front: "Dimostra il teorema di Gauss per una carica puntiforme $Q$ interna a una superficie chiusa $S$.",
        back: "Con $\\vec{E} = \\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{R^2}\\hat{u}_R$ si ha $d\\Phi = \\dfrac{Q}{4\\pi\\varepsilon_0}\\dfrac{\\hat{u}_R\\cdot\\hat{n}}{R^2}dS = \\dfrac{Q}{4\\pi\\varepsilon_0}d\\Omega_{\\text{or}}$. Integrando: $\\Phi = \\dfrac{Q}{4\\pi\\varepsilon_0}\\oint_S d\\Omega_{\\text{or}}$. Poiché $Q$ è interna, ogni semiretta uscente da $Q$ attraversa $S$ un numero <strong>dispari</strong> di volte; gli attraversamenti in eccesso si presentano a coppie entrante–uscente che danno $-d\\Omega_{\\text{geom}} + d\\Omega_{\\text{geom}} = 0$, e sopravvive il solo attraversamento uscente. Quindi $\\oint_S d\\Omega_{\\text{or}} = 4\\pi$ e $\\Phi = Q/\\varepsilon_0$."
      },
      {
        type: "dimostrazione",
        front: "Perché una carica esterna alla superficie chiusa dà flusso netto nullo?",
        back: "Ogni semiretta uscente da $Q$ interseca $S$ un numero <strong>pari</strong> di volte ($2k$), con attraversamenti a coppie entrante–uscente. Gli elementi tagliati dallo stesso cono sottendono lo stesso $d\\Omega_{\\text{geom}}$, ma hanno $d\\Omega_{\\text{or}}$ di segno opposto: $d\\Phi_1 = -\\dfrac{Q}{4\\pi\\varepsilon_0}d\\Omega_{\\text{geom}}$ e $d\\Phi_2 = +\\dfrac{Q}{4\\pi\\varepsilon_0}d\\Omega_{\\text{geom}}$, quindi $d\\Phi_{\\text{netto}} = 0$. Sommando su tutte le direzioni, $\\oint_S d\\Omega_{\\text{or}} = 0$ e $\\Phi = 0$: «tanto entra, tanto esce». È essenziale usare l'angolo solido orientato: con le aree geometriche i contributi si sommerebbero."
      },
      {
        type: "formula",
        front: "Enuncia il teorema di Gauss per il campo elettrostatico, con le sue ipotesi.",
        back: "Per una qualsiasi superficie chiusa $S$ (superficie gaussiana), orientata con la normale <strong>uscente</strong> e tale che nessuna delle cariche puntiformi considerate si trovi su $S$: $$\\Phi_S(\\vec{E}) = \\oint_S \\vec{E}\\cdot d\\vec{S} = \\frac{Q_{\\text{int}}}{\\varepsilon_0}$$ dove $Q_{\\text{int}}$ è la carica totale racchiusa. Non dipende dalla forma di $S$, dalla posizione delle cariche all'interno, né dalle cariche esterne. Il caso di una carica sul bordo (vertice, spigolo) si tratta con l'argomento dell'angolo solido."
      },
      {
        type: "tranello",
        front: "Se il flusso attraverso una superficie chiusa è nullo, posso concludere che $\\vec{E} = \\vec{0}$ sulla superficie?",
        back: "<strong>No.</strong> $\\Phi = 0$ dice solo che la carica interna netta è nulla, cioè che il bilancio algebrico uscente-meno-entrante è zero. Il campo è in generale diverso da zero in ogni punto. Analogamente, una carica esterna non contribuisce al flusso netto ma contribuisce eccome al campo punto per punto: i suoi contributi al flusso si cancellano a coppie nell'integrale."
      },
      {
        type: "domanda",
        front: "Perché il teorema di Gauss ha una forma così semplice? Che ruolo ha la legge di Coulomb?",
        back: "Perché il campo di una carica puntiforme decade esattamente come $1/R^2$: questo fattore si cancella con il fattore $R^2$ con cui cresce l'area intercettata da un cono a distanza $R$. Se la dipendenza fosse, per esempio, $1/R^3$, il fattore geometrico non si cancellerebbe e il flusso dipenderebbe dalla distanza e dalla forma della superficie. La validità di Gauss è una conseguenza diretta della legge di Coulomb."
      },
      {
        type: "tranello",
        front: "«Due elementi di superficie intercettati dallo stesso cono danno lo stesso flusso»: vale anche se fisso l'area $dS$ e sposto l'elemento?",
        back: "No: l'invarianza riguarda l'<strong>angolo solido</strong>, non l'area. Se tengo fissata l'area $dS$ e sposto o inclino l'elemento, l'angolo solido sotteso cambia e con esso il flusso, che dipende da $R$ (come $1/R^2$) e dall'inclinazione (come $\\cos\\alpha$). L'affermazione corretta è: elementi diversi tagliati dallo <em>stesso cono orientato</em> uscente da $Q$ danno lo stesso flusso."
      }
    ]
};

