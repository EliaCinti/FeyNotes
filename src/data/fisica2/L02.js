const LESSON = {
    id: "L02", date: "Lezione 2 — 25 Set 2026",
    title: "Campo Elettrostatico, Principio di Sovrapposizione e Distribuzioni di Carica",
    abstract: "Richiami sulla legge di Coulomb e definizione operativa di campo elettrostatico. Principio di sovrapposizione per sistemi di cariche puntiformi, con esempi svolti sul quadrato. Passaggio alle distribuzioni continue (densità lineare, superficiale, volumetrica) e prima introduzione al potenziale elettrostatico come grandezza scalare.",

    sections: [
      {
        id: "s02-info-corso",
        type: "note_box",
        title: "Informazioni preliminari sul corso",
        icon: "📚",
        content: `<p><strong>Libri di testo consigliati.</strong> Il professore consiglia come testo di riferimento principale il <em>Mazzoldi</em>. Sottolinea tuttavia che qualsiasi libro di testo universitario di Fisica 2 va bene, come ad esempio il <em>Focardi</em> o il <em>Rosati</em> (quest'ultimo più formale e matematico). La scelta è lasciata allo studente. Verso la fine del corso il professore fornirà anche delle dispense personali che, pur non essendo complete come un libro di testo, possono servire come utile linea guida per lo studio.</p>
        <p><strong>Propedeuticità.</strong> Per sostenere l'esame di Fisica 2 è necessario aver superato l'esame di Fisica 1. Il consiglio del professore per chi ha ancora Fisica 1 da sostenere è di concentrarsi su quello nella sessione di gennaio, per poi affrontare Fisica 2 a febbraio. Tutti gli studenti sono comunque i benvenuti a seguire le lezioni di Fisica 2 anche senza aver superato Fisica 1, tenendo presente che la comprensione degli argomenti potrebbe risultare più difficile senza le basi del primo corso.</p>`
      },

      {
        id: "s02-richiami",
        type: "section",
        title: "Richiami: forza di Coulomb e campo elettrostatico",
        icon: "⚡",
        content: `<p>Nella lezione precedente abbiamo visto la <strong>forza elettrostatica</strong>, definita dalla legge di Coulomb, e abbiamo introdotto il concetto di campo elettrico.</p>
        <p>La forza che una carica sorgente $Q$ esercita su una carica di prova $q$, poste a distanza $r$, è</p>
        <p>$$\\vec{F} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q q}{r^2} \\hat{r}$$</p>
        <p>dove $\\hat{r}$ è il versore che indica la direzione <strong>dalla carica sorgente alla carica di prova</strong>. La costante $\\varepsilon_0$ è la costante dielettrica del vuoto:</p>
        <p>$$\\varepsilon_0 = 8.854 \\times 10^{-12} \\, \\frac{\\text{C}^2}{\\text{N} \\cdot \\text{m}^2}$$</p>
        <p>In fisica, l'esistenza di queste costanti fondamentali è una caratteristica peculiare. Secondo il <em>principio antropico</em>, noi percepiamo la natura in questo modo proprio perché i valori di queste costanti permettono la nostra esistenza.</p>`,
        subsections: [
          {
            subtitle: "Definizione di campo elettrostatico",
            content: `<p><strong>Definizione.</strong> Il campo elettrostatico $\\vec{E}$ in un punto P dello spazio è il rapporto tra la forza $\\vec{F}$ che agisce su una carica di prova $q$ posta in P e la carica $q$ stessa:</p>
            <p>$$\\vec{E}(P) = \\frac{\\vec{F}}{q}$$</p>
            <p>La carica di prova $q$ deve essere <strong>sufficientemente piccola</strong> da non perturbare significativamente il campo generato dalla carica sorgente $Q$. L'unità di misura è $\\text{N}/\\text{C}$.</p>
            <p>Sostituendo l'espressione della forza di Coulomb si ottiene il campo generato da una carica puntiforme $Q$:</p>
            <p>$$\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r^2} \\hat{r}$$</p>`
          },
          {
            subtitle: "Direzione e verso: campo uscente o entrante",
            content: `<p>Il campo elettrostatico è un <strong>campo vettoriale</strong>. La sua direzione è in ogni punto <em>radiale</em>, cioè lungo la retta che congiunge la carica sorgente al punto considerato; il verso dipende dal segno della carica sorgente $Q$.</p>
            <ul>
              <li>Se $Q$ è <strong>positiva</strong>, il campo è <strong>radiale uscente</strong>: punta in ogni punto allontanandosi dalla carica.</li>
              <li>Se $Q$ è <strong>negativa</strong>, il campo è <strong>radiale entrante</strong>: punta in ogni punto verso la carica.</li>
            </ul>
            <p>Questo si visualizza con le <strong>linee di campo</strong>, linee orientate tangenti in ogni punto al vettore campo elettrico.</p>
            <p><figure class="figura" data-id="fisica2_lez02a_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez02a_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="306.405pt" height="156.404pt" viewBox="0 0 306.405 156.404" version="1.2"><style>#fisica2_lez02a_d1 [fill="rgb(100%,79.998779%,79.998779%)"],#fisica2_lez02a_d1 [style*="fill:rgb(100%,79.998779%,79.998779%)"]{fill:#ffcccc!important}[data-mode="light"] #fisica2_lez02a_d1 [fill="rgb(100%,79.998779%,79.998779%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="fill:rgb(100%,79.998779%,79.998779%)"]{fill:#ffcccc!important}#fisica2_lez02a_d1 [stroke="rgb(100%,79.998779%,79.998779%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(100%,79.998779%,79.998779%)"]{stroke:#ffcccc!important}[data-mode="light"] #fisica2_lez02a_d1 [stroke="rgb(100%,79.998779%,79.998779%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="stroke:rgb(100%,79.998779%,79.998779%)"]{stroke:#ffcccc!important}#fisica2_lez02a_d1 [fill="rgb(100%,50%,50%)"],#fisica2_lez02a_d1 [style*="fill:rgb(100%,50%,50%)"]{fill:#ff8080!important}[data-mode="light"] #fisica2_lez02a_d1 [fill="rgb(100%,50%,50%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="fill:rgb(100%,50%,50%)"]{fill:#ff8080!important}#fisica2_lez02a_d1 [stroke="rgb(100%,50%,50%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(100%,50%,50%)"]{stroke:#ff8080!important}[data-mode="light"] #fisica2_lez02a_d1 [stroke="rgb(100%,50%,50%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="stroke:rgb(100%,50%,50%)"]{stroke:#ff8080!important}#fisica2_lez02a_d1 [fill="rgb(0%,0%,0%)"],#fisica2_lez02a_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez02a_d1 [stroke="rgb(0%,0%,0%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez02a_d1 [fill="rgb(0%,0%,100%)"],#fisica2_lez02a_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez02a_d1 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez02a_d1 [stroke="rgb(0%,0%,100%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez02a_d1 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#fisica2_lez02a_d1 [fill="rgb(79.998779%,79.998779%,100%)"],#fisica2_lez02a_d1 [style*="fill:rgb(79.998779%,79.998779%,100%)"]{fill:#ccccff!important}[data-mode="light"] #fisica2_lez02a_d1 [fill="rgb(79.998779%,79.998779%,100%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="fill:rgb(79.998779%,79.998779%,100%)"]{fill:#ccccff!important}#fisica2_lez02a_d1 [stroke="rgb(79.998779%,79.998779%,100%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(79.998779%,79.998779%,100%)"]{stroke:#ccccff!important}[data-mode="light"] #fisica2_lez02a_d1 [stroke="rgb(79.998779%,79.998779%,100%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="stroke:rgb(79.998779%,79.998779%,100%)"]{stroke:#ccccff!important}#fisica2_lez02a_d1 [fill="rgb(50%,50%,100%)"],#fisica2_lez02a_d1 [style*="fill:rgb(50%,50%,100%)"]{fill:#8080ff!important}[data-mode="light"] #fisica2_lez02a_d1 [fill="rgb(50%,50%,100%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="fill:rgb(50%,50%,100%)"]{fill:#8080ff!important}#fisica2_lez02a_d1 [stroke="rgb(50%,50%,100%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(50%,50%,100%)"]{stroke:#8080ff!important}[data-mode="light"] #fisica2_lez02a_d1 [stroke="rgb(50%,50%,100%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="stroke:rgb(50%,50%,100%)"]{stroke:#8080ff!important}#fisica2_lez02a_d1 [fill="rgb(100%,0%,0%)"],#fisica2_lez02a_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez02a_d1 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez02a_d1 [stroke="rgb(100%,0%,0%)"],#fisica2_lez02a_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez02a_d1 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez02a_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph0-1">
<path style="stroke:none;" d="M 7.15625 -2.484375 C 7.15625 -2.671875 6.96875 -2.671875 6.828125 -2.671875 L 4.0625 -2.671875 L 4.0625 -5.453125 C 4.0625 -5.59375 4.0625 -5.78125 3.859375 -5.78125 C 3.65625 -5.78125 3.65625 -5.59375 3.65625 -5.453125 L 3.65625 -2.671875 L 0.890625 -2.671875 C 0.75 -2.671875 0.5625 -2.671875 0.5625 -2.484375 C 0.5625 -2.28125 0.75 -2.28125 0.890625 -2.28125 L 3.65625 -2.28125 L 3.65625 0.5 C 3.65625 0.640625 3.65625 0.828125 3.859375 0.828125 C 4.0625 0.828125 4.0625 0.640625 4.0625 0.5 L 4.0625 -2.28125 L 6.828125 -2.28125 C 6.96875 -2.28125 7.15625 -2.28125 7.15625 -2.484375 Z M 7.15625 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph1-1">
<path style="stroke:none;" d="M 6.4375 0 C 6.4375 -0.0625 6.375 -0.09375 6.328125 -0.09375 C 6.25 -0.09375 6.234375 -0.046875 6.21875 0.015625 C 5.96875 0.71875 5.390625 0.96875 5.046875 0.96875 C 4.59375 0.96875 4.4375 0.6875 4.34375 -0.0625 C 5.890625 -0.640625 7.34375 -2.40625 7.34375 -4.328125 C 7.34375 -5.921875 6.296875 -7 4.8125 -7 C 2.671875 -7 0.484375 -4.75 0.484375 -2.4375 C 0.484375 -0.78125 1.59375 0.21875 3.03125 0.21875 C 3.28125 0.21875 3.609375 0.171875 4 0.0625 C 3.953125 0.6875 3.953125 0.703125 3.953125 0.828125 C 3.953125 1.15625 3.953125 1.921875 4.78125 1.921875 C 5.96875 1.921875 6.4375 0.109375 6.4375 0 Z M 6.46875 -4.640625 C 6.46875 -3.65625 5.96875 -1.328125 4.296875 -0.390625 C 4.25 -0.75 4.140625 -1.46875 3.421875 -1.46875 C 2.890625 -1.46875 2.40625 -0.96875 2.40625 -0.453125 C 2.40625 -0.265625 2.46875 -0.140625 2.46875 -0.140625 C 1.703125 -0.453125 1.359375 -1.21875 1.359375 -2.109375 C 1.359375 -2.796875 1.625 -4.203125 2.375 -5.28125 C 3.09375 -6.296875 4.03125 -6.75 4.75 -6.75 C 5.75 -6.75 6.46875 -5.96875 6.46875 -4.640625 Z M 4.03125 -0.40625 C 4.03125 -0.265625 4.015625 -0.25 3.921875 -0.203125 C 3.65625 -0.09375 3.359375 -0.03125 3.078125 -0.03125 C 2.953125 -0.03125 2.625 -0.03125 2.625 -0.453125 C 2.625 -0.859375 3 -1.25 3.421875 -1.25 C 3.84375 -1.25 4.03125 -1.015625 4.03125 -0.40625 Z M 4.03125 -0.40625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-1">
<path style="stroke:none;" d="M 6.59375 -2.3125 C 6.59375 -2.40625 6.59375 -2.484375 6.46875 -2.484375 C 6.359375 -2.484375 6.359375 -2.421875 6.34375 -2.328125 C 6.265625 -0.90625 5.203125 -0.09375 4.125 -0.09375 C 3.515625 -0.09375 1.578125 -0.421875 1.578125 -3.390625 C 1.578125 -6.34375 3.515625 -6.6875 4.125 -6.6875 C 5.203125 -6.6875 6.078125 -5.78125 6.28125 -4.328125 C 6.296875 -4.203125 6.296875 -4.171875 6.4375 -4.171875 C 6.59375 -4.171875 6.59375 -4.203125 6.59375 -4.40625 L 6.59375 -6.75 C 6.59375 -6.921875 6.59375 -7 6.484375 -7 C 6.453125 -7 6.40625 -7 6.328125 -6.875 L 5.828125 -6.140625 C 5.46875 -6.5 4.953125 -7 4.015625 -7 C 2.15625 -7 0.5625 -5.421875 0.5625 -3.390625 C 0.5625 -1.34375 2.15625 0.21875 4.015625 0.21875 C 5.625 0.21875 6.59375 -1.15625 6.59375 -2.3125 Z M 6.59375 -2.3125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-2">
<path style="stroke:none;" d="M 4.796875 -0.890625 L 4.796875 -1.4375 L 4.546875 -1.4375 L 4.546875 -0.890625 C 4.546875 -0.3125 4.296875 -0.25 4.1875 -0.25 C 3.859375 -0.25 3.8125 -0.6875 3.8125 -0.75 L 3.8125 -2.734375 C 3.8125 -3.140625 3.8125 -3.53125 3.46875 -3.90625 C 3.078125 -4.28125 2.578125 -4.4375 2.109375 -4.4375 C 1.296875 -4.4375 0.609375 -3.984375 0.609375 -3.328125 C 0.609375 -3.03125 0.796875 -2.859375 1.0625 -2.859375 C 1.34375 -2.859375 1.515625 -3.0625 1.515625 -3.3125 C 1.515625 -3.4375 1.46875 -3.765625 1.015625 -3.765625 C 1.28125 -4.125 1.765625 -4.234375 2.078125 -4.234375 C 2.5625 -4.234375 3.140625 -3.84375 3.140625 -2.953125 L 3.140625 -2.59375 C 2.625 -2.5625 1.9375 -2.53125 1.3125 -2.234375 C 0.5625 -1.890625 0.3125 -1.375 0.3125 -0.9375 C 0.3125 -0.140625 1.28125 0.109375 1.90625 0.109375 C 2.5625 0.109375 3.015625 -0.28125 3.203125 -0.75 C 3.25 -0.359375 3.515625 0.0625 3.984375 0.0625 C 4.1875 0.0625 4.796875 -0.078125 4.796875 -0.890625 Z M 3.140625 -1.390625 C 3.140625 -0.453125 2.421875 -0.109375 1.96875 -0.109375 C 1.484375 -0.109375 1.078125 -0.453125 1.078125 -0.953125 C 1.078125 -1.5 1.5 -2.328125 3.140625 -2.375 Z M 3.140625 -1.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-3">
<path style="stroke:none;" d="M 8.0625 0 L 8.0625 -0.3125 C 7.546875 -0.3125 7.296875 -0.3125 7.296875 -0.609375 L 7.296875 -2.5 C 7.296875 -3.359375 7.296875 -3.65625 6.984375 -4.015625 C 6.84375 -4.1875 6.515625 -4.390625 5.9375 -4.390625 C 5.109375 -4.390625 4.671875 -3.796875 4.5 -3.40625 C 4.359375 -4.28125 3.625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 L 5.3125 0 L 5.3125 -0.3125 C 4.640625 -0.3125 4.53125 -0.3125 4.53125 -0.75 L 4.53125 -2.578125 C 4.53125 -3.609375 5.234375 -4.171875 5.875 -4.171875 C 6.5 -4.171875 6.609375 -3.625 6.609375 -3.0625 L 6.609375 -0.75 C 6.609375 -0.3125 6.5 -0.3125 5.828125 -0.3125 L 5.828125 0 L 6.953125 -0.03125 Z M 8.0625 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-4">
<path style="stroke:none;" d="M 5.171875 -2.140625 C 5.171875 -3.40625 4.203125 -4.390625 3.09375 -4.390625 C 2.328125 -4.390625 1.90625 -3.953125 1.703125 -3.734375 L 1.703125 -4.390625 L 0.28125 -4.28125 L 0.28125 -3.96875 C 0.984375 -3.96875 1.046875 -3.90625 1.046875 -3.46875 L 1.046875 1.171875 C 1.046875 1.625 0.9375 1.625 0.28125 1.625 L 0.28125 1.921875 L 1.390625 1.890625 L 2.515625 1.921875 L 2.515625 1.625 C 1.84375 1.625 1.734375 1.625 1.734375 1.171875 L 1.734375 -0.578125 C 1.78125 -0.421875 2.203125 0.109375 2.953125 0.109375 C 4.140625 0.109375 5.171875 -0.859375 5.171875 -2.140625 Z M 4.34375 -2.140625 C 4.34375 -0.9375 3.65625 -0.109375 2.921875 -0.109375 C 2.515625 -0.109375 2.140625 -0.3125 1.875 -0.71875 C 1.734375 -0.921875 1.734375 -0.9375 1.734375 -1.125 L 1.734375 -3.34375 C 2.03125 -3.84375 2.515625 -4.140625 3.015625 -4.140625 C 3.734375 -4.140625 4.34375 -3.265625 4.34375 -2.140625 Z M 4.34375 -2.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-5">
<path style="stroke:none;" d="M 4.671875 -2.125 C 4.671875 -3.390625 3.6875 -4.4375 2.484375 -4.4375 C 1.234375 -4.4375 0.28125 -3.359375 0.28125 -2.125 C 0.28125 -0.84375 1.3125 0.109375 2.46875 0.109375 C 3.671875 0.109375 4.671875 -0.859375 4.671875 -2.125 Z M 3.84375 -2.203125 C 3.84375 -1.84375 3.84375 -1.3125 3.625 -0.875 C 3.40625 -0.421875 2.96875 -0.140625 2.484375 -0.140625 C 2.046875 -0.140625 1.625 -0.34375 1.34375 -0.796875 C 1.09375 -1.234375 1.09375 -1.84375 1.09375 -2.203125 C 1.09375 -2.59375 1.09375 -3.125 1.34375 -3.5625 C 1.609375 -4.015625 2.078125 -4.234375 2.46875 -4.234375 C 2.90625 -4.234375 3.328125 -4.015625 3.59375 -3.578125 C 3.84375 -3.15625 3.84375 -2.578125 3.84375 -2.203125 Z M 3.84375 -2.203125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-6">
<path style="stroke:none;" d="M 3.609375 -3.78125 C 3.609375 -4.09375 3.296875 -4.390625 2.875 -4.390625 C 2.15625 -4.390625 1.796875 -3.71875 1.65625 -3.296875 L 1.65625 -4.390625 L 0.28125 -4.28125 L 0.28125 -3.96875 C 0.96875 -3.96875 1.046875 -3.90625 1.046875 -3.40625 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.8125 -0.03125 2.265625 -0.03125 2.671875 0 L 2.671875 -0.3125 L 2.453125 -0.3125 C 1.71875 -0.3125 1.703125 -0.421875 1.703125 -0.78125 L 1.703125 -2.296875 C 1.703125 -3.28125 2.125 -4.171875 2.875 -4.171875 C 2.953125 -4.171875 2.96875 -4.171875 2.984375 -4.15625 C 2.953125 -4.140625 2.765625 -4.03125 2.765625 -3.765625 C 2.765625 -3.5 2.96875 -3.34375 3.1875 -3.34375 C 3.359375 -3.34375 3.609375 -3.46875 3.609375 -3.78125 Z M 3.609375 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-7">
<path style="stroke:none;" d="M 5.234375 0 L 5.234375 -0.3125 C 4.53125 -0.3125 4.453125 -0.375 4.453125 -0.859375 L 4.453125 -6.890625 L 3.03125 -6.78125 L 3.03125 -6.46875 C 3.71875 -6.46875 3.796875 -6.40625 3.796875 -5.90625 L 3.796875 -3.765625 C 3.515625 -4.125 3.078125 -4.390625 2.546875 -4.390625 C 1.375 -4.390625 0.34375 -3.40625 0.34375 -2.140625 C 0.34375 -0.875 1.3125 0.109375 2.4375 0.109375 C 3.078125 0.109375 3.515625 -0.234375 3.765625 -0.546875 L 3.765625 0.109375 Z M 3.765625 -1.171875 C 3.765625 -0.984375 3.765625 -0.96875 3.65625 -0.796875 C 3.359375 -0.328125 2.921875 -0.109375 2.484375 -0.109375 C 2.046875 -0.109375 1.6875 -0.359375 1.453125 -0.75 C 1.1875 -1.15625 1.15625 -1.71875 1.15625 -2.125 C 1.15625 -2.484375 1.1875 -3.078125 1.46875 -3.53125 C 1.671875 -3.84375 2.046875 -4.171875 2.59375 -4.171875 C 2.9375 -4.171875 3.359375 -4.015625 3.65625 -3.578125 C 3.765625 -3.40625 3.765625 -3.390625 3.765625 -3.203125 Z M 3.765625 -1.171875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-8">
<path style="stroke:none;" d="M 2.453125 0 L 2.453125 -0.3125 C 1.796875 -0.3125 1.75 -0.359375 1.75 -0.75 L 1.75 -4.390625 L 0.359375 -4.28125 L 0.359375 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.421875 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.328125 -0.3125 L 0.328125 0 L 1.421875 -0.03125 C 1.765625 -0.03125 2.109375 -0.015625 2.453125 0 Z M 1.90625 -6 C 1.90625 -6.265625 1.671875 -6.515625 1.375 -6.515625 C 1.046875 -6.515625 0.84375 -6.234375 0.84375 -6 C 0.84375 -5.71875 1.078125 -5.46875 1.375 -5.46875 C 1.703125 -5.46875 1.90625 -5.75 1.90625 -6 Z M 1.90625 -6 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-9">
<path style="stroke:none;" d="M 2.53125 0 L 2.53125 -0.3125 C 1.859375 -0.3125 1.75 -0.3125 1.75 -0.75 L 1.75 -6.890625 L 0.328125 -6.78125 L 0.328125 -6.46875 C 1.015625 -6.46875 1.09375 -6.40625 1.09375 -5.90625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.328125 -0.3125 L 0.328125 0 L 1.421875 -0.03125 Z M 2.53125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-10">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.03125 -1.296875 3.984375 -1.296875 C 3.90625 -1.296875 3.875 -1.234375 3.859375 -1.15625 C 3.515625 -0.140625 2.625 -0.140625 2.515625 -0.140625 C 2.03125 -0.140625 1.625 -0.4375 1.40625 -0.796875 C 1.09375 -1.28125 1.09375 -1.9375 1.09375 -2.296875 L 3.875 -2.296875 C 4.09375 -2.296875 4.125 -2.296875 4.125 -2.5 C 4.125 -3.484375 3.578125 -4.4375 2.34375 -4.4375 C 1.1875 -4.4375 0.28125 -3.421875 0.28125 -2.1875 C 0.28125 -0.859375 1.3125 0.109375 2.453125 0.109375 C 3.671875 0.109375 4.125 -0.984375 4.125 -1.1875 Z M 3.46875 -2.5 L 1.109375 -2.5 C 1.171875 -3.984375 2 -4.234375 2.34375 -4.234375 C 3.359375 -4.234375 3.46875 -2.890625 3.46875 -2.5 Z M 3.46875 -2.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-11">
<path style="stroke:none;" d="M 5.3125 0 L 5.3125 -0.3125 C 4.609375 -0.3125 4.53125 -0.375 4.53125 -0.859375 L 4.53125 -4.390625 L 3.078125 -4.28125 L 3.078125 -3.96875 C 3.765625 -3.96875 3.84375 -3.90625 3.84375 -3.40625 L 3.84375 -1.640625 C 3.84375 -0.78125 3.375 -0.109375 2.65625 -0.109375 C 1.8125 -0.109375 1.78125 -0.578125 1.78125 -1.09375 L 1.78125 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.09375 -3.96875 1.09375 -3.9375 1.09375 -3.0625 L 1.09375 -1.5625 C 1.09375 -0.796875 1.09375 0.109375 2.59375 0.109375 C 3.15625 0.109375 3.59375 -0.171875 3.875 -0.78125 L 3.875 0.109375 Z M 5.3125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-12">
<path style="stroke:none;" d="M 3.578125 -1.265625 C 3.578125 -1.796875 3.28125 -2.09375 3.15625 -2.21875 C 2.828125 -2.53125 2.4375 -2.609375 2.03125 -2.6875 C 1.46875 -2.796875 0.796875 -2.921875 0.796875 -3.5 C 0.796875 -3.84375 1.0625 -4.25 1.921875 -4.25 C 3 -4.25 3.0625 -3.359375 3.078125 -3.0625 C 3.078125 -2.96875 3.1875 -2.96875 3.1875 -2.96875 C 3.328125 -2.96875 3.328125 -3.015625 3.328125 -3.203125 L 3.328125 -4.203125 C 3.328125 -4.375 3.328125 -4.4375 3.21875 -4.4375 C 3.171875 -4.4375 3.140625 -4.4375 3.015625 -4.328125 C 2.984375 -4.28125 2.890625 -4.203125 2.84375 -4.171875 C 2.46875 -4.4375 2.0625 -4.4375 1.921875 -4.4375 C 0.703125 -4.4375 0.328125 -3.78125 0.328125 -3.21875 C 0.328125 -2.875 0.484375 -2.59375 0.75 -2.375 C 1.078125 -2.125 1.34375 -2.0625 2.0625 -1.921875 C 2.28125 -1.890625 3.09375 -1.71875 3.09375 -1.015625 C 3.09375 -0.5 2.75 -0.109375 1.96875 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.640625 0.5625 -1.6875 0.453125 -1.6875 C 0.328125 -1.6875 0.328125 -1.625 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.890625 -0.3125 C 1.3125 0.09375 1.765625 0.109375 1.96875 0.109375 C 3.109375 0.109375 3.578125 -0.5625 3.578125 -1.265625 Z M 3.578125 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-13">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.015625 -1.28125 3.984375 -1.28125 C 3.90625 -1.28125 3.875 -1.234375 3.859375 -1.1875 C 3.578125 -0.265625 2.921875 -0.140625 2.5625 -0.140625 C 2.03125 -0.140625 1.15625 -0.5625 1.15625 -2.15625 C 1.15625 -3.78125 1.96875 -4.203125 2.5 -4.203125 C 2.59375 -4.203125 3.21875 -4.1875 3.5625 -3.828125 C 3.15625 -3.796875 3.09375 -3.5 3.09375 -3.375 C 3.09375 -3.109375 3.28125 -2.921875 3.546875 -2.921875 C 3.8125 -2.921875 4.015625 -3.078125 4.015625 -3.390625 C 4.015625 -4.0625 3.25 -4.4375 2.484375 -4.4375 C 1.25 -4.4375 0.34375 -3.375 0.34375 -2.140625 C 0.34375 -0.875 1.3125 0.109375 2.46875 0.109375 C 3.796875 0.109375 4.125 -1.078125 4.125 -1.1875 Z M 4.125 -1.1875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-14">
<path style="stroke:none;" d="M 5.3125 0 L 5.3125 -0.3125 C 4.796875 -0.3125 4.546875 -0.3125 4.53125 -0.609375 L 4.53125 -2.5 C 4.53125 -3.359375 4.53125 -3.65625 4.234375 -4.015625 C 4.09375 -4.1875 3.765625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 Z M 5.3125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph2-15">
<path style="stroke:none;" d="M 3.296875 -1.234375 L 3.296875 -1.796875 L 3.046875 -1.796875 L 3.046875 -1.25 C 3.046875 -0.515625 2.75 -0.140625 2.375 -0.140625 C 1.71875 -0.140625 1.71875 -1.046875 1.71875 -1.203125 L 1.71875 -3.96875 L 3.140625 -3.96875 L 3.140625 -4.28125 L 1.71875 -4.28125 L 1.71875 -6.109375 L 1.46875 -6.109375 C 1.453125 -5.28125 1.15625 -4.234375 0.1875 -4.1875 L 0.1875 -3.96875 L 1.03125 -3.96875 L 1.03125 -1.234375 C 1.03125 -0.015625 1.953125 0.109375 2.3125 0.109375 C 3.015625 0.109375 3.296875 -0.59375 3.296875 -1.234375 Z M 3.296875 -1.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d1-glyph3-1">
<path style="stroke:none;" d="M 6.890625 -2.484375 C 6.890625 -2.671875 6.703125 -2.671875 6.5625 -2.671875 L 1.15625 -2.671875 C 1.015625 -2.671875 0.828125 -2.671875 0.828125 -2.484375 C 0.828125 -2.28125 1.015625 -2.28125 1.15625 -2.28125 L 6.5625 -2.28125 C 6.703125 -2.28125 6.890625 -2.28125 6.890625 -2.484375 Z M 6.890625 -2.484375 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez02a_d1-surface1">
<path style="fill-rule:nonzero;fill:rgb(100%,79.998779%,79.998779%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 13.506349 0.00190458 C 13.506349 7.459904 7.459959 13.506295 0.00195922 13.506295 C -7.459961 13.506295 -13.506352 7.459904 -13.506352 0.00190458 C -13.506352 -7.460016 -7.459961 -13.506407 0.00195922 -13.506407 C 7.459959 -13.506407 13.506349 -7.460016 13.506349 0.00190458 Z M 13.506349 0.00190458 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph0-1" x="60.40711" y="70.329997"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph1-1" x="68.126694" y="70.329997"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 13.906305 0.00190458 L 62.983235 0.00190458 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551268 3.111365 C -2.084653 1.244904 -1.045552 0.362649 0.00139067 0.00190458 C -1.045552 -0.362761 -2.084653 -1.245016 -2.551268 -3.111477 " transform="matrix(0.996204,0,0,-0.996204,131.330646,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 9.832245 9.832191 L 44.534293 44.534239 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.552022 3.110917 C -2.083438 1.244898 -1.046452 0.363183 -0.00114896 -0.0000386371 C -1.046452 -0.363261 -2.083438 -1.244976 -2.552022 -3.110995 " transform="matrix(0.704416,-0.704416,-0.704416,-0.704416,112.83672,23.256976)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00195922 13.90625 L 0.00195922 62.98318 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551323 3.111422 C -2.084708 1.244962 -1.045607 0.362706 0.00133603 -0.00195922 C -1.045607 -0.362704 -2.084708 -1.244959 -2.551323 -3.11142 " transform="matrix(0,-0.996204,-0.996204,0,68.189454,4.76305)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -9.832248 9.832191 L -44.534296 44.534239 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.55202 3.110996 C -2.083436 1.244977 -1.04645 0.363263 -0.00114705 0.0000405484 C -1.04645 -0.363182 -2.083436 -1.244896 -2.55202 -3.110915 " transform="matrix(-0.704416,-0.704416,-0.704416,0.704416,23.542189,23.256976)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -13.906308 0.00190458 L -62.983238 0.00190458 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551266 3.111477 C -2.084651 1.245016 -1.04555 0.362761 0.00139338 -0.00190458 C -1.04555 -0.362649 -2.084651 -1.244904 -2.551266 -3.111365 " transform="matrix(-0.996204,0,0,0.996204,5.048263,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -9.832248 -9.832303 L -44.534296 -44.53435 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551941 3.110995 C -2.083357 1.244976 -1.046371 0.363261 -0.00106786 0.0000386371 C -1.046371 -0.363183 -2.083357 -1.244898 -2.551941 -3.110917 " transform="matrix(-0.704416,0.704416,0.704416,0.704416,23.542189,112.551506)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00195922 -13.906362 L 0.00195922 -62.983292 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551211 3.11142 C -2.084596 1.244959 -1.045495 0.362704 0.00144802 0.00195922 C -1.045495 -0.362706 -2.084596 -1.244962 -2.551211 -3.111422 " transform="matrix(0,0.996204,0.996204,0,68.189454,131.045432)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 9.832245 -9.832303 L 44.534293 -44.53435 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551943 3.110915 C -2.083358 1.244896 -1.046373 0.363182 -0.00106977 -0.0000405484 C -1.046373 -0.363263 -2.083358 -1.244977 -2.551943 -3.110996 " transform="matrix(0.704416,0.704416,0.704416,-0.704416,112.83672,112.551506)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-1" x="18.799661" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="25.967338" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-3" x="30.929728" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-4" x="39.200047" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-5" x="44.992149" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-6" x="53.259491" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="57.147027" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-7" x="62.109417" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-8" x="67.623625" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="70.380729" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-9" x="75.343119" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-10" x="78.100223" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-11" x="85.81674" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-12" x="91.330948" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-13" x="95.246273" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-10" x="99.657838" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-14" x="104.069403" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-15" x="109.305717" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-10" x="113.165464" y="146.602351"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,79.998779%,100%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 183.589515 0.00190458 C 183.589515 7.459904 177.539204 13.506295 170.081204 13.506295 C 162.619284 13.506295 156.572893 7.459904 156.572893 0.00190458 C 156.572893 -7.460016 162.619284 -13.506407 170.081204 -13.506407 C 177.539204 -13.506407 183.589515 -7.460016 183.589515 0.00190458 Z M 183.589515 0.00190458 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph3-1" x="229.839464" y="70.329997"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph1-1" x="237.559047" y="70.329997"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 184.785462 0.00190458 L 233.862391 0.00190458 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.551165 3.111477 C -2.08455 1.245016 -1.045449 0.362761 0.00149421 -0.00190458 C -1.045449 -0.362649 -2.08455 -1.244904 -2.551165 -3.111365 " transform="matrix(-0.996204,0,0,0.996204,251.876489,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 180.480055 10.396834 L 215.178182 45.098882 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.550516 3.112562 C -2.084705 1.24377 -1.04772 0.362055 0.000356491 0.00160562 C -1.044947 -0.361617 -2.084705 -1.246104 -2.550516 -3.10935 " transform="matrix(-0.704416,0.704416,0.704416,0.704416,247.702245,57.826743)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 170.081204 14.706162 L 170.081204 63.779171 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.548864 3.109744 C -2.08617 1.243284 -1.047069 0.361029 -0.000126256 0.000284112 C -1.047069 -0.364381 -2.08617 -1.242716 -2.548864 -3.109176 " transform="matrix(0,0.996204,0.996204,0,237.624717,53.65247)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 159.682353 10.396834 L 124.980306 45.098882 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.550101 3.109766 C -2.084289 1.24652 -1.044531 0.362032 0.000772433 -0.00118968 C -1.047304 -0.361639 -2.084289 -1.243354 -2.550101 -3.112146 " transform="matrix(0.704416,0.704416,0.704416,-0.704416,227.547169,57.826743)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 155.376947 0.00190458 L 106.300017 0.00190458 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.550567 3.111365 C -2.083952 1.244904 -1.044851 0.362649 -0.0018287 0.00190458 C -1.044851 -0.362761 -2.083952 -1.245016 -2.550567 -3.111477 " transform="matrix(0.996204,0,0,-0.996204,223.372916,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 159.682353 -10.396946 L 124.980306 -45.098994 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.55018 3.112066 C -2.084368 1.243275 -1.047383 0.36156 0.000693247 0.0011105 C -1.04461 -0.362112 -2.084368 -1.246599 -2.55018 -3.109845 " transform="matrix(0.704416,-0.704416,-0.704416,-0.704416,227.547169,77.981739)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 170.081204 -14.706274 L 170.081204 -63.779283 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.548976 3.109176 C -2.086282 1.242716 -1.047181 0.364381 -0.00023824 -0.000284112 C -1.047181 -0.361029 -2.086282 -1.243284 -2.548976 -3.109744 " transform="matrix(0,-0.996204,-0.996204,0,237.624717,82.156013)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 180.480055 -10.396946 L 215.178182 -45.098994 " transform="matrix(0.996204,0,0,-0.996204,68.189454,67.904241)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.550596 3.109429 C -2.084784 1.246183 -1.045026 0.361696 0.000277306 -0.00152644 C -1.047799 -0.361976 -2.084784 -1.243691 -2.550596 -3.112482 " transform="matrix(-0.704416,-0.704416,-0.704416,0.704416,247.702245,77.981739)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-1" x="186.178839" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="193.346515" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-3" x="198.308905" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-4" x="206.579225" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-5" x="212.371326" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-6" x="220.638668" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="224.526205" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-7" x="229.488595" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-8" x="235.002803" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="237.759907" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-9" x="242.722297" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-10" x="245.479401" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-10" x="253.195917" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-14" x="257.607482" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-15" x="262.843796" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-6" x="266.703543" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-2" x="270.591079" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-14" x="275.55347" y="146.602351"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d1-glyph2-15" x="280.799708" y="146.602351"/>
  <use xlink:href="#fisica2_lez02a_d1-glyph2-10" x="284.659455" y="146.602351"/>
</g>
</g>
</svg></figure></p>
            <p>Nella figura, a sinistra le linee di campo di una carica puntiforme positiva (campo uscente), a destra quelle di una carica negativa (campo entrante). Le frecce indicano il verso di $\\vec{E}$, che coincide con quello della forza su una carica di prova <em>positiva</em>.</p>`
          }
        ],
        formulas: [
          { label: "Forza di Coulomb", latex: "\\vec{F} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q q}{r^2} \\hat{r}" },
          { label: "Definizione di campo", latex: "\\vec{E}(P) = \\frac{\\vec{F}}{q}" },
          { label: "Campo di una carica puntiforme", latex: "\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r^2} \\hat{r}" }
        ]
      },

      {
        id: "s02-verso-campo-forza",
        type: "alert_box",
        title: "Verso del campo e verso della forza: non confonderli",
        icon: "⚠️",
        content: `<p>Le parole <em>uscente</em> ed <em>entrante</em> descrivono il <strong>campo</strong>, non la forza su una carica qualsiasi. Il verso del campo coincide con quello della forza che agirebbe su una carica di prova <strong>positiva</strong>. Infatti, dalla definizione di campo segue</p>
        <p>$$\\vec{F} = q\\,\\vec{E}$$</p>
        <p>quindi:</p>
        <ul>
          <li>se $q \\gt 0$, la forza $\\vec{F}$ ha lo <strong>stesso verso</strong> di $\\vec{E}$;</li>
          <li>se $q \\lt 0$, la forza $\\vec{F}$ ha verso <strong>opposto</strong> a $\\vec{E}$.</li>
        </ul>
        <p>Di conseguenza gli aggettivi "repulsivo" e "attrattivo" <strong>non sono proprietà del campo</strong>: dipendono dal segno della carica di prova che vi si immerge. Per descrivere il campo conviene usare soltanto i termini <em>uscente</em> ed <em>entrante</em>.</p>`
      },

      {
        id: "s02-sovrapposizione",
        type: "section",
        title: "Il Principio di Sovrapposizione",
        icon: "➕",
        content: `<p>Cosa succede quando abbiamo più di una carica sorgente? In elettrostatica nel vuoto vale il <strong>principio di sovrapposizione</strong>: i contributi delle singole cariche si sommano vettorialmente, qualunque sia la loro disposizione geometrica nello spazio. La "linearità" a cui si fa riferimento riguarda infatti la <em>dipendenza del campo dalle sorgenti</em>, non il fatto che le cariche siano allineate su una retta.</p>
        <p><strong>Proposizione (Principio di Sovrapposizione).</strong> Il campo elettrostatico totale generato in un punto P — purché P non coincida con la posizione di nessuna delle cariche sorgenti — da un sistema di $N$ cariche puntiformi è dato dalla <strong>somma vettoriale</strong> dei campi generati singolarmente da ciascuna carica in quel punto:</p>
        <p>$$\\vec{E}_{\\text{tot}}(P) = \\sum_{i=1}^{N} \\vec{E}_i(P)$$</p>
        <p>Ogni carica $Q_i$ genera il proprio campo $\\vec{E}_i$ <em>come se le altre non esistessero</em>, e il campo totale è semplicemente la loro somma vettoriale.</p>`,
        subsections: [
          {
            subtitle: "Forma vettoriale e scomposizione in componenti",
            content: `<p>Se $\\vec{r}$ è il vettore posizione del punto P e $\\vec{r}_i$ quello della carica $Q_i$:</p>
            <p>$$\\vec{E}_{\\text{tot}}(\\vec{r}) = \\sum_{i=1}^{N} \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q_i}{|\\vec{r} - \\vec{r}_i|^2} \\frac{\\vec{r} - \\vec{r}_i}{|\\vec{r} - \\vec{r}_i|} = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^{N} \\frac{Q_i (\\vec{r} - \\vec{r}_i)}{|\\vec{r} - \\vec{r}_i|^3}$$</p>
            <p>Questa è un'equazione <strong>vettoriale</strong>. Per risolvere i problemi conviene scomporla in componenti cartesiane. Con $\\vec{r}=(x,y,z)$ e $\\vec{r}_i=(x_i, y_i, z_i)$:</p>
            <p>$$E_x(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^{N} \\frac{Q_i (x - x_i)}{\\left[ (x-x_i)^2 + (y-y_i)^2 + (z-z_i)^2 \\right]^{3/2}}$$</p>
            <p>$$E_y(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^{N} \\frac{Q_i (y - y_i)}{\\left[ (x-x_i)^2 + (y-y_i)^2 + (z-z_i)^2 \\right]^{3/2}}$$</p>
            <p>$$E_z(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^{N} \\frac{Q_i (z - z_i)}{\\left[ (x-x_i)^2 + (y-y_i)^2 + (z-z_i)^2 \\right]^{3/2}}$$</p>`
          },
          {
            subtitle: "Strategia di risoluzione",
            content: `<p>Nei problemi con poche cariche puntiformi conviene procedere sempre con lo stesso schema:</p>
            <ol>
              <li>si fissa un sistema di riferimento e si scrivono le coordinate di ogni carica e del punto P;</li>
              <li>per ogni carica si calcola il vettore $\\vec{r} - \\vec{r}_i$ che va <em>dalla carica al punto P</em>, la sua lunghezza e il versore corrispondente;</li>
              <li>si scrive ogni contributo $\\vec{E}_i$ con il segno corretto (uscente se $Q_i \\gt 0$, entrante se $Q_i \\lt 0$);</li>
              <li>si sommano <strong>separatamente</strong> le componenti $x$ e $y$ (ed eventualmente $z$).</li>
            </ol>
            <p>Prima di iniziare i conti conviene sempre cercare eventuali <strong>simmetrie</strong>: come vedremo nel secondo esempio, possono annullare interi contributi e ridurre drasticamente il lavoro.</p>`
          }
        ],
        formulas: [
          { label: "Sovrapposizione (forma compatta)", latex: "\\vec{E}_{\\text{tot}}(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^{N} \\frac{Q_i (\\vec{r} - \\vec{r}_i)}{|\\vec{r} - \\vec{r}_i|^3}" }
        ],
        extra_content: `<p><strong>Attenzione:</strong> la somma è <strong>vettoriale</strong>. Bisogna sommare le componenti lungo ciascun asse: <em>non si possono sommare i moduli</em>. È questo che rende i calcoli più laboriosi rispetto alle grandezze scalari.</p>`
      },

      {
        id: "s02-esempio1",
        type: "section",
        title: "Esempio 1 — Campo al quarto vertice del quadrato",
        icon: "🔲",
        content: `<p><strong>Traccia.</strong> Tre cariche sono poste ai vertici di un quadrato di lato $L$ nel piano $xy$:</p>
        <ul>
          <li>$Q_A = +q$ nel punto A di coordinate $(0, L)$;</li>
          <li>$Q_B = +2q$ nel punto B di coordinate $(L, L)$;</li>
          <li>$Q_C = +q$ nel punto C di coordinate $(L, 0)$.</li>
        </ul>
        <p>Calcolare il campo elettrostatico totale nel quarto vertice D di coordinate $(0,0)$, che coincide con l'origine. Si assuma $q \\gt 0$.</p>
        <p><strong>Soluzione.</strong> Applichiamo il principio di sovrapposizione: $\\vec{E}_{\\text{tot}}(D) = \\vec{E}_A(D) + \\vec{E}_B(D) + \\vec{E}_C(D)$. Calcoliamo i tre contributi separatamente.</p>`,
        subsections: [
          {
            subtitle: "1) Campo generato da $Q_A = +q$",
            content: `<p>La carica è in A$(0, L)$. Il vettore che va da A a D è $\\vec{r}_{AD} = (0,0) - (0,L) = (0, -L) = -L\\hat{y}$, e la distanza è $r_{AD} = L$. Poiché la carica è positiva il campo è uscente da A, quindi diretto lungo $\\vec{r}_{AD}$:</p>
            <p>$$\\vec{E}_A = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{L^2} (-\\hat{y}) = -\\frac{q}{4\\pi\\varepsilon_0 L^2} \\hat{y}$$</p>`
          },
          {
            subtitle: "2) Campo generato da $Q_C = +q$",
            content: `<p>La carica è in C$(L, 0)$. Il vettore da C a D è $\\vec{r}_{CD} = (0,0) - (L,0) = (-L, 0) = -L\\hat{x}$, con $r_{CD} = L$. Il campo è uscente da C:</p>
            <p>$$\\vec{E}_C = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{L^2} (-\\hat{x}) = -\\frac{q}{4\\pi\\varepsilon_0 L^2} \\hat{x}$$</p>`
          },
          {
            subtitle: "3) Campo generato da $Q_B = +2q$",
            content: `<p>La carica è in B$(L, L)$. Il vettore da B a D è</p>
            <p>$$\\vec{r}_{BD} = (0,0) - (L,L) = -L\\hat{x} - L\\hat{y}$$</p>
            <p>La distanza è $r_{BD} = \\sqrt{(-L)^2 + (-L)^2} = L\\sqrt{2}$, quindi $r_{BD}^2 = 2L^2$. Il versore da B a D è</p>
            <p>$$\\hat{r}_{BD} = \\frac{\\vec{r}_{BD}}{r_{BD}} = \\frac{-L\\hat{x} - L\\hat{y}}{L\\sqrt{2}} = -\\frac{1}{\\sqrt{2}}(\\hat{x} + \\hat{y})$$</p>
            <p>Il campo è uscente da B:</p>
            <p>$$\\vec{E}_B = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2q}{(L\\sqrt{2})^2} \\left(-\\frac{1}{\\sqrt{2}}(\\hat{x} + \\hat{y})\\right) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2q}{2L^2} \\left(-\\frac{1}{\\sqrt{2}}(\\hat{x} + \\hat{y})\\right) = -\\frac{q}{4\\pi\\varepsilon_0 L^2 \\sqrt{2}} (\\hat{x} + \\hat{y})$$</p>`
          },
          {
            subtitle: "Somma vettoriale",
            content: `<p>Raccogliamo le componenti lungo $\\hat{x}$ e $\\hat{y}$:</p>
            <p>$$\\vec{E}_{\\text{tot}} = \\left( -\\frac{q}{4\\pi\\varepsilon_0 L^2} - \\frac{q}{4\\pi\\varepsilon_0 L^2 \\sqrt{2}} \\right) \\hat{x} + \\left( -\\frac{q}{4\\pi\\varepsilon_0 L^2} - \\frac{q}{4\\pi\\varepsilon_0 L^2 \\sqrt{2}} \\right) \\hat{y}$$</p>
            <p>$$\\vec{E}_{\\text{tot}} = -\\frac{q}{4\\pi\\varepsilon_0 L^2} \\left( 1 + \\frac{1}{\\sqrt{2}} \\right) (\\hat{x} + \\hat{y})$$</p>
            <p>Le due componenti sono uguali, come ci si attende dalla <strong>simmetria</strong> della configurazione rispetto alla diagonale BD: il campo risultante è diretto lungo tale diagonale, allontanandosi dalle cariche.</p>
            <p><figure class="figura" data-id="fisica2_lez02a_d2"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez02a_d2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="226.985pt" height="225.331pt" viewBox="0 0 226.985 225.331" version="1.2"><style>#fisica2_lez02a_d2 [fill="rgb(0%,0%,0%)"],#fisica2_lez02a_d2 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez02a_d2 [stroke="rgb(0%,0%,0%)"],#fisica2_lez02a_d2 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez02a_d2 [fill="rgb(79.998779%,79.998779%,100%)"],#fisica2_lez02a_d2 [style*="fill:rgb(79.998779%,79.998779%,100%)"]{fill:#ccccff!important}[data-mode="light"] #fisica2_lez02a_d2 [fill="rgb(79.998779%,79.998779%,100%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="fill:rgb(79.998779%,79.998779%,100%)"]{fill:#ccccff!important}#fisica2_lez02a_d2 [stroke="rgb(79.998779%,79.998779%,100%)"],#fisica2_lez02a_d2 [style*="stroke:rgb(79.998779%,79.998779%,100%)"]{stroke:#ccccff!important}[data-mode="light"] #fisica2_lez02a_d2 [stroke="rgb(79.998779%,79.998779%,100%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="stroke:rgb(79.998779%,79.998779%,100%)"]{stroke:#ccccff!important}#fisica2_lez02a_d2 [fill="rgb(0%,0%,59.999084%)"],#fisica2_lez02a_d2 [style*="fill:rgb(0%,0%,59.999084%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez02a_d2 [fill="rgb(0%,0%,59.999084%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="fill:rgb(0%,0%,59.999084%)"]{fill:#000099!important}#fisica2_lez02a_d2 [stroke="rgb(0%,0%,59.999084%)"],#fisica2_lez02a_d2 [style*="stroke:rgb(0%,0%,59.999084%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez02a_d2 [stroke="rgb(0%,0%,59.999084%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="stroke:rgb(0%,0%,59.999084%)"]{stroke:#000099!important}#fisica2_lez02a_d2 [fill="rgb(79.998779%,0%,0%)"],#fisica2_lez02a_d2 [style*="fill:rgb(79.998779%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez02a_d2 [fill="rgb(79.998779%,0%,0%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="fill:rgb(79.998779%,0%,0%)"]{fill:#cc0000!important}#fisica2_lez02a_d2 [stroke="rgb(79.998779%,0%,0%)"],#fisica2_lez02a_d2 [style*="stroke:rgb(79.998779%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez02a_d2 [stroke="rgb(79.998779%,0%,0%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="stroke:rgb(79.998779%,0%,0%)"]{stroke:#cc0000!important}#fisica2_lez02a_d2 [fill="rgb(92.549133%,0%,54.899597%)"],#fisica2_lez02a_d2 [style*="fill:rgb(92.549133%,0%,54.899597%)"]{fill:#ff5cbd!important}[data-mode="light"] #fisica2_lez02a_d2 [fill="rgb(92.549133%,0%,54.899597%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="fill:rgb(92.549133%,0%,54.899597%)"]{fill:#ec008c!important}#fisica2_lez02a_d2 [stroke="rgb(92.549133%,0%,54.899597%)"],#fisica2_lez02a_d2 [style*="stroke:rgb(92.549133%,0%,54.899597%)"]{stroke:#ff5cbd!important}[data-mode="light"] #fisica2_lez02a_d2 [stroke="rgb(92.549133%,0%,54.899597%)"],[data-mode="light"] #fisica2_lez02a_d2 [style*="stroke:rgb(92.549133%,0%,54.899597%)"]{stroke:#ec008c!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph0-1">
<path style="stroke:none;" d="M 4.921875 -1.421875 C 4.921875 -1.515625 4.84375 -1.515625 4.8125 -1.515625 C 4.71875 -1.515625 4.703125 -1.484375 4.6875 -1.40625 C 4.359375 -0.34375 3.671875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.984375 -1.640625 L 3.3125 -3 C 3.375 -3.265625 3.609375 -4.171875 4.296875 -4.171875 C 4.359375 -4.171875 4.59375 -4.171875 4.796875 -4.046875 C 4.515625 -4 4.328125 -3.75 4.328125 -3.515625 C 4.328125 -3.34375 4.4375 -3.15625 4.703125 -3.15625 C 4.921875 -3.15625 5.234375 -3.34375 5.234375 -3.734375 C 5.234375 -4.25 4.65625 -4.390625 4.3125 -4.390625 C 3.734375 -4.390625 3.390625 -3.859375 3.265625 -3.640625 C 3.015625 -4.296875 2.484375 -4.390625 2.203125 -4.390625 C 1.15625 -4.390625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.921875 1.84375 -4.171875 2.171875 -4.171875 C 2.359375 -4.171875 2.71875 -4.078125 2.71875 -3.515625 C 2.71875 -3.203125 2.546875 -2.53125 2.171875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.9375 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.828125 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.59375 2.265625 -0.640625 C 2.390625 -0.28125 2.75 0.109375 3.34375 0.109375 C 4.359375 0.109375 4.921875 -1.171875 4.921875 -1.421875 Z M 4.921875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph0-2">
<path style="stroke:none;" d="M 4.828125 -3.78125 C 4.875 -3.921875 4.875 -3.9375 4.875 -4.015625 C 4.875 -4.1875 4.734375 -4.28125 4.578125 -4.28125 C 4.484375 -4.28125 4.328125 -4.21875 4.234375 -4.078125 C 4.21875 -4.03125 4.140625 -3.71875 4.09375 -3.53125 L 3.890625 -2.75 L 3.453125 -0.953125 C 3.40625 -0.8125 2.984375 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.546875 1.703125 -0.921875 C 1.703125 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.265625 2.421875 -3.375 2.421875 -3.578125 C 2.421875 -4.03125 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.828125 -3.875 1.234375 -4.171875 1.5625 -4.171875 C 1.65625 -4.171875 1.8125 -4.171875 1.8125 -3.859375 C 1.8125 -3.609375 1.71875 -3.34375 1.65625 -3.15625 C 1.25 -2.109375 1.078125 -1.546875 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.28125 0.109375 C 2.671875 0.109375 3.015625 -0.0625 3.296875 -0.34375 C 3.15625 0.171875 3.046875 0.671875 2.640625 1.1875 C 2.390625 1.53125 2 1.8125 1.546875 1.8125 C 1.40625 1.8125 0.96875 1.78125 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.328125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.046875 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.03125 1.546875 2.03125 C 2.578125 2.03125 3.59375 1.140625 3.875 0.015625 Z M 4.828125 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph0-3">
<path style="stroke:none;" d="M 3.8125 1.734375 C 3.8125 1.625 3.71875 1.625 3.5625 1.625 C 3.078125 1.625 3.078125 1.546875 3.078125 1.453125 C 3.078125 1.390625 3.09375 1.328125 3.125 1.25 L 4.484375 -4.28125 C 4.484375 -4.328125 4.46875 -4.375 4.390625 -4.375 C 4.28125 -4.375 3.890625 -3.984375 3.71875 -3.703125 C 3.5 -4.234375 3.109375 -4.390625 2.796875 -4.390625 C 1.625 -4.390625 0.390625 -2.921875 0.390625 -1.484375 C 0.390625 -0.5 0.984375 0.109375 1.703125 0.109375 C 2.140625 0.109375 2.53125 -0.125 2.875 -0.484375 L 2.4375 1.296875 C 2.359375 1.5625 2.28125 1.609375 1.71875 1.625 C 1.59375 1.625 1.484375 1.625 1.484375 1.8125 C 1.484375 1.8125 1.484375 1.921875 1.625 1.921875 C 1.9375 1.921875 2.28125 1.890625 2.609375 1.890625 C 2.953125 1.890625 3.3125 1.921875 3.640625 1.921875 C 3.6875 1.921875 3.8125 1.921875 3.8125 1.734375 Z M 3.578125 -3.296875 C 3.578125 -3.234375 3.03125 -1.0625 3 -1.03125 C 2.859375 -0.75 2.296875 -0.109375 1.734375 -0.109375 C 1.140625 -0.109375 1.109375 -0.875 1.109375 -1.046875 C 1.109375 -1.515625 1.390625 -2.609375 1.5625 -3.015625 C 1.875 -3.75 2.390625 -4.171875 2.796875 -4.171875 C 3.4375 -4.171875 3.578125 -3.375 3.578125 -3.296875 Z M 3.578125 -3.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph0-4">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.671875 1.765625 -1.046875 1.375 -1.046875 C 1.046875 -1.046875 0.859375 -0.8125 0.859375 -0.53125 C 0.859375 -0.265625 1.046875 0 1.375 0 C 1.5 0 1.625 -0.046875 1.734375 -0.125 C 1.765625 -0.15625 1.78125 -0.15625 1.78125 -0.15625 C 1.78125 -0.15625 1.796875 -0.15625 1.796875 -0.015625 C 1.796875 0.71875 1.453125 1.328125 1.125 1.65625 C 1.015625 1.765625 1.015625 1.78125 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.21875 1.921875 2.015625 1.15625 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph1-1">
<path style="stroke:none;" d="M 7.125 0 L 7.125 -0.3125 L 6.953125 -0.3125 C 6.34375 -0.3125 6.21875 -0.375 6.109375 -0.703125 L 3.953125 -6.921875 C 3.90625 -7.046875 3.890625 -7.109375 3.734375 -7.109375 C 3.5625 -7.109375 3.53125 -7.0625 3.484375 -6.921875 L 1.4375 -0.96875 C 1.25 -0.46875 0.859375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.328125 -0.03125 L 2.46875 0 L 2.46875 -0.3125 C 1.984375 -0.3125 1.734375 -0.5625 1.734375 -0.8125 C 1.734375 -0.84375 1.734375 -0.9375 1.75 -0.96875 L 2.203125 -2.265625 L 4.65625 -2.265625 L 5.1875 -0.75 C 5.203125 -0.703125 5.21875 -0.640625 5.21875 -0.609375 C 5.21875 -0.3125 4.65625 -0.3125 4.390625 -0.3125 L 4.390625 0 C 4.75 -0.03125 5.453125 -0.03125 5.828125 -0.03125 Z M 4.546875 -2.578125 L 2.3125 -2.578125 L 3.421875 -5.796875 Z M 4.546875 -2.578125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph1-2">
<path style="stroke:none;" d="M 6.46875 -1.8125 C 6.46875 -2.6875 5.65625 -3.421875 4.546875 -3.546875 C 5.515625 -3.734375 6.203125 -4.375 6.203125 -5.109375 C 6.203125 -5.96875 5.28125 -6.78125 4 -6.78125 L 0.359375 -6.78125 L 0.359375 -6.484375 L 0.59375 -6.484375 C 1.359375 -6.484375 1.375 -6.375 1.375 -6.015625 L 1.375 -0.78125 C 1.375 -0.421875 1.359375 -0.3125 0.59375 -0.3125 L 0.359375 -0.3125 L 0.359375 0 L 4.25 0 C 5.578125 0 6.46875 -0.890625 6.46875 -1.8125 Z M 5.234375 -5.109375 C 5.234375 -4.46875 4.75 -3.640625 3.640625 -3.640625 L 2.203125 -3.640625 L 2.203125 -6.078125 C 2.203125 -6.40625 2.21875 -6.484375 2.6875 -6.484375 L 3.921875 -6.484375 C 4.890625 -6.484375 5.234375 -5.640625 5.234375 -5.109375 Z M 5.46875 -1.828125 C 5.46875 -1.125 4.953125 -0.3125 3.9375 -0.3125 L 2.6875 -0.3125 C 2.21875 -0.3125 2.203125 -0.375 2.203125 -0.703125 L 2.203125 -3.421875 L 4.078125 -3.421875 C 5.0625 -3.421875 5.46875 -2.5 5.46875 -1.828125 Z M 5.46875 -1.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph1-3">
<path style="stroke:none;" d="M 6.609375 -2.3125 C 6.609375 -2.421875 6.609375 -2.484375 6.484375 -2.484375 C 6.375 -2.484375 6.375 -2.421875 6.359375 -2.328125 C 6.28125 -0.90625 5.21875 -0.09375 4.140625 -0.09375 C 3.53125 -0.09375 1.578125 -0.421875 1.578125 -3.390625 C 1.578125 -6.359375 3.515625 -6.703125 4.125 -6.703125 C 5.203125 -6.703125 6.09375 -5.796875 6.296875 -4.34375 C 6.3125 -4.203125 6.3125 -4.171875 6.453125 -4.171875 C 6.609375 -4.171875 6.609375 -4.203125 6.609375 -4.40625 L 6.609375 -6.765625 C 6.609375 -6.9375 6.609375 -7 6.5 -7 C 6.453125 -7 6.421875 -7 6.34375 -6.890625 L 5.84375 -6.15625 C 5.46875 -6.515625 4.96875 -7 4.015625 -7 C 2.15625 -7 0.5625 -5.421875 0.5625 -3.40625 C 0.5625 -1.34375 2.171875 0.21875 4.015625 0.21875 C 5.640625 0.21875 6.609375 -1.15625 6.609375 -2.3125 Z M 6.609375 -2.3125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph1-4">
<path style="stroke:none;" d="M 7.03125 -3.34375 C 7.03125 -5.234375 5.6875 -6.78125 3.984375 -6.78125 L 0.34375 -6.78125 L 0.34375 -6.484375 L 0.59375 -6.484375 C 1.34375 -6.484375 1.375 -6.375 1.375 -6.015625 L 1.375 -0.78125 C 1.375 -0.421875 1.34375 -0.3125 0.59375 -0.3125 L 0.34375 -0.3125 L 0.34375 0 L 3.984375 0 C 5.65625 0 7.03125 -1.46875 7.03125 -3.34375 Z M 6.03125 -3.34375 C 6.03125 -2.234375 5.84375 -1.640625 5.484375 -1.15625 C 5.28125 -0.890625 4.71875 -0.3125 3.71875 -0.3125 L 2.71875 -0.3125 C 2.25 -0.3125 2.21875 -0.375 2.21875 -0.703125 L 2.21875 -6.078125 C 2.21875 -6.40625 2.25 -6.484375 2.71875 -6.484375 L 3.703125 -6.484375 C 4.328125 -6.484375 5.015625 -6.265625 5.515625 -5.5625 C 5.9375 -4.96875 6.03125 -4.109375 6.03125 -3.34375 Z M 6.03125 -3.34375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph2-1">
<path style="stroke:none;" d="M 7.171875 -2.484375 C 7.171875 -2.6875 6.96875 -2.6875 6.84375 -2.6875 L 4.0625 -2.6875 L 4.0625 -5.46875 C 4.0625 -5.609375 4.0625 -5.796875 3.859375 -5.796875 C 3.671875 -5.796875 3.671875 -5.609375 3.671875 -5.46875 L 3.671875 -2.6875 L 0.890625 -2.6875 C 0.75 -2.6875 0.5625 -2.6875 0.5625 -2.484375 C 0.5625 -2.28125 0.75 -2.28125 0.890625 -2.28125 L 3.671875 -2.28125 L 3.671875 0.5 C 3.671875 0.640625 3.671875 0.828125 3.859375 0.828125 C 4.0625 0.828125 4.0625 0.640625 4.0625 0.5 L 4.0625 -2.28125 L 6.84375 -2.28125 C 6.96875 -2.28125 7.171875 -2.28125 7.171875 -2.484375 Z M 7.171875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph2-2">
<path style="stroke:none;" d="M 4.46875 -1.734375 L 4.21875 -1.734375 C 4.15625 -1.4375 4.09375 -1 4 -0.84375 C 3.921875 -0.765625 3.265625 -0.765625 3.046875 -0.765625 L 1.265625 -0.765625 L 2.3125 -1.78125 C 3.859375 -3.15625 4.46875 -3.703125 4.46875 -4.6875 C 4.46875 -5.828125 3.5625 -6.625 2.359375 -6.625 C 1.234375 -6.625 0.5 -5.703125 0.5 -4.8125 C 0.5 -4.265625 1 -4.265625 1.03125 -4.265625 C 1.1875 -4.265625 1.546875 -4.375 1.546875 -4.796875 C 1.546875 -5.046875 1.359375 -5.3125 1.015625 -5.3125 C 0.9375 -5.3125 0.921875 -5.3125 0.890625 -5.296875 C 1.109375 -5.9375 1.65625 -6.3125 2.21875 -6.3125 C 3.125 -6.3125 3.5625 -5.5 3.5625 -4.6875 C 3.5625 -3.890625 3.0625 -3.109375 2.515625 -2.5 L 0.609375 -0.375 C 0.5 -0.265625 0.5 -0.234375 0.5 0 L 4.1875 0 Z M 4.46875 -1.734375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph2-3">
<path style="stroke:none;" d="M 3.296875 2.390625 C 3.296875 2.359375 3.296875 2.328125 3.125 2.171875 C 1.875 0.921875 1.5625 -0.96875 1.5625 -2.484375 C 1.5625 -4.21875 1.9375 -5.9375 3.15625 -7.1875 C 3.296875 -7.296875 3.296875 -7.328125 3.296875 -7.359375 C 3.296875 -7.421875 3.25 -7.453125 3.1875 -7.453125 C 3.09375 -7.453125 2.203125 -6.78125 1.609375 -5.515625 C 1.109375 -4.421875 0.984375 -3.3125 0.984375 -2.484375 C 0.984375 -1.703125 1.09375 -0.5 1.640625 0.609375 C 2.234375 1.84375 3.09375 2.484375 3.1875 2.484375 C 3.25 2.484375 3.296875 2.453125 3.296875 2.390625 Z M 3.296875 2.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph2-4">
<path style="stroke:none;" d="M 4.578125 -3.1875 C 4.578125 -3.96875 4.515625 -4.765625 4.171875 -5.5 C 3.71875 -6.453125 2.90625 -6.625 2.484375 -6.625 C 1.890625 -6.625 1.15625 -6.359375 0.75 -5.4375 C 0.4375 -4.75 0.390625 -3.96875 0.390625 -3.1875 C 0.390625 -2.4375 0.421875 -1.546875 0.828125 -0.78125 C 1.265625 0.015625 1.984375 0.21875 2.46875 0.21875 C 3.015625 0.21875 3.765625 0.015625 4.203125 -0.9375 C 4.515625 -1.625 4.578125 -2.390625 4.578125 -3.1875 Z M 3.75 -3.296875 C 3.75 -2.546875 3.75 -1.875 3.640625 -1.25 C 3.484375 -0.296875 2.921875 0 2.46875 0 C 2.09375 0 1.5 -0.25 1.328125 -1.203125 C 1.21875 -1.796875 1.21875 -2.71875 1.21875 -3.296875 C 1.21875 -3.9375 1.21875 -4.59375 1.296875 -5.125 C 1.484375 -6.3125 2.21875 -6.40625 2.46875 -6.40625 C 2.796875 -6.40625 3.453125 -6.21875 3.640625 -5.234375 C 3.75 -4.6875 3.75 -3.921875 3.75 -3.296875 Z M 3.75 -3.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph2-5">
<path style="stroke:none;" d="M 2.875 -2.484375 C 2.875 -3.265625 2.765625 -4.46875 2.21875 -5.578125 C 1.625 -6.8125 0.765625 -7.453125 0.671875 -7.453125 C 0.609375 -7.453125 0.5625 -7.40625 0.5625 -7.359375 C 0.5625 -7.328125 0.5625 -7.296875 0.75 -7.125 C 1.734375 -6.140625 2.296875 -4.5625 2.296875 -2.484375 C 2.296875 -0.78125 1.921875 0.96875 0.703125 2.21875 C 0.5625 2.328125 0.5625 2.359375 0.5625 2.390625 C 0.5625 2.4375 0.609375 2.484375 0.671875 2.484375 C 0.765625 2.484375 1.65625 1.8125 2.25 0.546875 C 2.75 -0.546875 2.875 -1.65625 2.875 -2.484375 Z M 2.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph3-1">
<path style="stroke:none;" d="M 7.1875 -2.71875 L 6.71875 -2.71875 C 6.5 -1.34375 6.21875 -0.46875 4.375 -0.46875 L 2.875 -0.46875 L 2.875 -3.265625 L 3.421875 -3.265625 C 4.375 -3.265625 4.46875 -2.84375 4.46875 -2.109375 L 4.9375 -2.109375 L 4.9375 -4.90625 L 4.46875 -4.90625 C 4.46875 -4.15625 4.375 -3.734375 3.421875 -3.734375 L 2.875 -3.734375 L 2.875 -6.296875 L 4.375 -6.296875 C 5.984375 -6.296875 6.234375 -5.5625 6.40625 -4.359375 L 6.859375 -4.359375 L 6.5625 -6.75 L 0.390625 -6.75 L 0.390625 -6.296875 L 1.453125 -6.296875 L 1.453125 -0.46875 L 0.390625 -0.46875 L 0.390625 0 L 6.734375 0 Z M 7.1875 -2.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph4-1">
<path style="stroke:none;" d="M 5.625 -0.140625 C 5.625 -0.25 5.546875 -0.25 5.4375 -0.25 C 5.03125 -0.25 5.015625 -0.3125 5 -0.46875 L 4.390625 -4.765625 C 4.359375 -4.90625 4.359375 -4.953125 4.21875 -4.953125 C 4.09375 -4.953125 4.046875 -4.890625 3.984375 -4.796875 L 1.4375 -0.828125 C 1.1875 -0.453125 0.96875 -0.28125 0.5625 -0.25 C 0.484375 -0.25 0.390625 -0.25 0.390625 -0.109375 C 0.390625 -0.03125 0.453125 0 0.5 0 C 0.671875 0 0.90625 -0.03125 1.09375 -0.03125 C 1.3125 -0.03125 1.59375 0 1.8125 0 C 1.84375 0 1.953125 0 1.953125 -0.15625 C 1.953125 -0.25 1.859375 -0.25 1.828125 -0.25 C 1.765625 -0.25 1.515625 -0.265625 1.515625 -0.453125 C 1.515625 -0.546875 1.59375 -0.65625 1.625 -0.71875 L 2.1875 -1.578125 L 4.171875 -1.578125 L 4.34375 -0.4375 C 4.3125 -0.359375 4.265625 -0.25 3.859375 -0.25 C 3.78125 -0.25 3.671875 -0.25 3.671875 -0.09375 C 3.671875 -0.0625 3.703125 0 3.796875 0 C 3.984375 0 4.484375 -0.03125 4.6875 -0.03125 L 5.09375 -0.015625 C 5.21875 -0.015625 5.375 0 5.5 0 C 5.578125 0 5.625 -0.0625 5.625 -0.140625 Z M 4.140625 -1.828125 L 2.34375 -1.828125 L 3.8125 -4.109375 Z M 4.140625 -1.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph4-2">
<path style="stroke:none;" d="M 5.4375 -3.046875 L 5.859375 -4.796875 C 5.859375 -4.828125 5.84375 -4.890625 5.765625 -4.890625 C 5.71875 -4.890625 5.703125 -4.875 5.640625 -4.8125 L 5.140625 -4.265625 C 5.078125 -4.359375 4.6875 -4.890625 3.828125 -4.890625 C 2.140625 -4.890625 0.484375 -3.390625 0.484375 -1.828125 C 0.484375 -0.6875 1.375 0.140625 2.625 0.140625 C 3 0.140625 3.671875 0.0625 4.375 -0.546875 C 4.9375 -1.015625 5.078125 -1.609375 5.078125 -1.671875 C 5.078125 -1.765625 5 -1.765625 4.96875 -1.765625 C 4.875 -1.765625 4.859375 -1.71875 4.84375 -1.640625 C 4.546875 -0.703125 3.578125 -0.109375 2.734375 -0.109375 C 2 -0.109375 1.1875 -0.5 1.1875 -1.609375 C 1.1875 -1.8125 1.234375 -2.90625 2.03125 -3.78125 C 2.515625 -4.3125 3.234375 -4.640625 3.90625 -4.640625 C 4.703125 -4.640625 5.1875 -4.046875 5.1875 -3.28125 C 5.1875 -3.078125 5.15625 -3.03125 5.15625 -2.984375 C 5.15625 -2.90625 5.25 -2.90625 5.28125 -2.90625 C 5.390625 -2.90625 5.390625 -2.921875 5.4375 -3.046875 Z M 5.4375 -3.046875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph4-3">
<path style="stroke:none;" d="M 5.46875 -1.484375 C 5.46875 -1.984375 5.015625 -2.40625 4.28125 -2.484375 C 5.125 -2.640625 5.8125 -3.15625 5.8125 -3.765625 C 5.8125 -4.296875 5.28125 -4.75 4.375 -4.75 L 1.84375 -4.75 C 1.71875 -4.75 1.625 -4.75 1.625 -4.59375 C 1.625 -4.5 1.703125 -4.5 1.84375 -4.5 C 1.84375 -4.5 1.984375 -4.5 2.109375 -4.484375 C 2.265625 -4.46875 2.28125 -4.453125 2.28125 -4.390625 C 2.28125 -4.390625 2.28125 -4.34375 2.25 -4.234375 L 1.328125 -0.546875 C 1.265625 -0.3125 1.25 -0.25 0.703125 -0.25 C 0.59375 -0.25 0.5 -0.25 0.5 -0.109375 C 0.5 0 0.578125 0 0.703125 0 L 3.40625 0 C 4.5625 0 5.46875 -0.796875 5.46875 -1.484375 Z M 5.140625 -3.765625 C 5.140625 -3.203125 4.5 -2.5625 3.578125 -2.5625 L 2.4375 -2.5625 L 2.859375 -4.265625 C 2.90625 -4.484375 2.921875 -4.5 3.21875 -4.5 L 4.265625 -4.5 C 4.984375 -4.5 5.140625 -4.03125 5.140625 -3.765625 Z M 4.765625 -1.53125 C 4.765625 -0.84375 4.0625 -0.25 3.21875 -0.25 L 2.09375 -0.25 C 1.890625 -0.25 1.875 -0.25 1.875 -0.3125 C 1.875 -0.3125 1.875 -0.359375 1.90625 -0.46875 L 2.390625 -2.375 L 3.859375 -2.375 C 4.515625 -2.375 4.765625 -1.9375 4.765625 -1.53125 Z M 4.765625 -1.53125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph5-1">
<path style="stroke:none;" d="M 2.609375 -0.875 L 2.609375 -1.265625 L 2.375 -1.265625 L 2.375 -0.890625 C 2.375 -0.40625 2.15625 -0.15625 1.875 -0.15625 C 1.390625 -0.15625 1.390625 -0.734375 1.390625 -0.859375 L 1.390625 -2.75 L 2.484375 -2.75 L 2.484375 -3 L 1.390625 -3 L 1.390625 -4.28125 L 1.15625 -4.28125 C 1.15625 -3.65625 0.875 -2.96875 0.203125 -2.9375 L 0.203125 -2.75 L 0.84375 -2.75 L 0.84375 -0.875 C 0.84375 -0.09375 1.4375 0.0625 1.828125 0.0625 C 2.28125 0.0625 2.609375 -0.328125 2.609375 -0.875 Z M 2.609375 -0.875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d2-glyph5-2">
<path style="stroke:none;" d="M 3.671875 -1.484375 C 3.671875 -2.34375 2.9375 -3.09375 1.96875 -3.09375 C 1.015625 -3.09375 0.265625 -2.34375 0.265625 -1.484375 C 0.265625 -0.625 1.03125 0.0625 1.96875 0.0625 C 2.90625 0.0625 3.671875 -0.625 3.671875 -1.484375 Z M 3.046875 -1.546875 C 3.046875 -1.203125 3.03125 -0.84375 2.828125 -0.5625 C 2.640625 -0.296875 2.3125 -0.15625 1.96875 -0.15625 C 1.71875 -0.15625 1.34375 -0.234375 1.109375 -0.578125 C 0.921875 -0.859375 0.90625 -1.21875 0.90625 -1.546875 C 0.90625 -1.84375 0.90625 -2.25 1.15625 -2.546875 C 1.328125 -2.75 1.625 -2.90625 1.96875 -2.90625 C 2.390625 -2.90625 2.671875 -2.71875 2.828125 -2.5 C 3.03125 -2.21875 3.046875 -1.875 3.046875 -1.546875 Z M 3.046875 -1.546875 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez02a_d2-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-miterlimit:10;" d="M -87.874936 -0.000419159 L 113.157656 -0.000419159 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(64.99939%,64.99939%,64.99939%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.213335 -0.000419159 L 0.644176 1.34732 L 1.81953 -0.000419159 L 0.644176 -1.344241 Z M 4.213335 -0.000419159 " transform="matrix(0.99704,0,0,-0.99704,205.404606,132.878488)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph0-1" x="213.681044" y="140.664372"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.001534 -87.873821 L -0.001534 113.158771 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(64.99939%,64.99939%,64.99939%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.21445 0.001534 L 0.645291 1.345356 L 1.816727 0.001534 L 0.645291 -1.346206 Z M 4.21445 0.001534 " transform="matrix(0,-0.99704,-0.99704,0,94.294498,21.76838)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph0-2" x="85.559432" y="11.560677"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(39.99939%,39.99939%,39.99939%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.001534 -0.000419159 L -0.001534 85.040379 L 85.039264 85.040379 L 85.039264 -0.000419159 Z M -0.001534 -0.000419159 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(59.999084%,59.999084%,59.999084%);stroke-opacity:1;stroke-dasharray:0.3985,1.99255;stroke-miterlimit:10;" d="M -0.001534 -0.000419159 L 85.039264 85.040379 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,79.998779%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,59.999084%);stroke-opacity:1;stroke-miterlimit:10;" d="M 7.885093 85.040379 C 7.885093 89.393108 4.355112 92.923088 -0.001534 92.923088 C -4.354263 92.923088 -7.884243 89.393108 -7.884243 85.040379 C -7.884243 80.687651 -4.354263 77.15767 -0.001534 77.15767 C 4.355112 77.15767 7.885093 80.687651 7.885093 85.040379 Z M 7.885093 85.040379 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph1-1" x="90.569557" y="51.512062"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph2-1" x="71.867084" y="36.24838"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph0-3" x="79.593146" y="36.24838"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,79.998779%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,59.999084%);stroke-opacity:1;stroke-miterlimit:10;" d="M 92.76526 85.040379 C 92.76526 89.306915 89.3058 92.762457 85.039264 92.762457 C 80.776646 92.762457 77.317187 89.306915 77.317187 85.040379 C 77.317187 80.773843 80.776646 77.318302 85.039264 77.318302 C 89.3058 77.318302 92.76526 80.773843 92.76526 85.040379 Z M 92.76526 85.040379 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph1-2" x="175.564211" y="51.512062"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph2-1" x="188.879678" y="36.362042"/>
  <use xlink:href="#fisica2_lez02a_d2-glyph2-2" x="196.60565" y="36.362042"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph0-3" x="201.571995" y="36.362042"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,79.998779%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,59.999084%);stroke-opacity:1;stroke-miterlimit:10;" d="M 92.816192 -0.000419159 C 92.816192 4.293542 89.337143 7.776508 85.039264 7.776508 C 80.745303 7.776508 77.262337 4.293542 77.262337 -0.000419159 C 77.262337 -4.29438 80.745303 -7.777346 85.039264 -7.777346 C 89.337143 -7.777346 92.816192 -4.29438 92.816192 -0.000419159 Z M 92.816192 -0.000419159 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph1-3" x="175.495415" y="136.299332"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph2-1" x="190.322395" y="119.706595"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph0-3" x="198.048456" y="119.706595"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 96.28125 132.878906 C 96.28125 131.78125 95.390625 130.890625 94.292969 130.890625 C 93.199219 130.890625 92.308594 131.78125 92.308594 132.878906 C 92.308594 133.976562 93.199219 134.863281 94.292969 134.863281 C 95.390625 134.863281 96.28125 133.976562 96.28125 132.878906 Z M 96.28125 132.878906 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph1-4" x="106.282905" y="118.406455"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph2-3" x="113.871375" y="118.406455"/>
  <use xlink:href="#fisica2_lez02a_d2-glyph2-4" x="117.734361" y="118.406455"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph0-4" x="122.700163" y="118.406455"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph2-4" x="127.115055" y="118.406455"/>
  <use xlink:href="#fisica2_lez02a_d2-glyph2-5" x="132.08161" y="118.406455"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(79.998779%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.001534 -0.000419159 L -0.001534 -35.574475 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(79.998779%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.442129 -0.001534 L 1.285293 1.569523 L 2.664375 -0.001534 L 1.285293 -1.568673 Z M 5.442129 -0.001534 " transform="matrix(0,0.99704,0.99704,0,94.294498,165.890387)"/>
<g style="fill:rgb(79.998779%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph3-1" x="101.195011" y="165.214484"/>
</g>
<g style="fill:rgb(79.998779%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph4-1" x="108.700727" y="166.704061"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(79.998779%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.001534 -0.000419159 L -35.575589 -0.000419159 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(79.998779%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.439326 0.000419159 L 1.286407 1.571476 L 2.66549 0.000419159 L 1.286407 -1.570638 Z M 5.439326 0.000419159 " transform="matrix(-0.99704,0,0,0.99704,61.282599,132.878488)"/>
<g style="fill:rgb(79.998779%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph3-1" x="57.525664" y="124.487401"/>
</g>
<g style="fill:rgb(79.998779%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph4-2" x="65.031379" y="125.976979"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(79.998779%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.001534 -0.000419159 L -25.158033 -25.156918 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(79.998779%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.441097 -0.000788318 L 1.288323 1.570008 L 2.665193 -0.000788318 L 1.288323 -1.571584 Z M 5.441097 -0.000788318 " transform="matrix(-0.705007,0.705007,0.705007,0.705007,70.949848,156.223139)"/>
<g style="fill:rgb(79.998779%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph3-1" x="44.789477" y="152.18417"/>
</g>
<g style="fill:rgb(79.998779%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph4-3" x="52.294196" y="153.674745"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(92.549133%,0%,54.899597%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.001534 -0.000419159 L -64.101437 -64.10424 " transform="matrix(0.99704,0,0,-0.99704,94.294498,132.878488)"/>
<path style="fill-rule:nonzero;fill:rgb(92.549133%,0%,54.899597%);fill-opacity:1;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(92.549133%,0%,54.899597%);stroke-opacity:1;stroke-miterlimit:10;" d="M 6.667157 -0.000788318 L 1.929836 1.794407 L 3.508943 -0.000788318 L 1.929836 -1.795984 Z M 6.667157 -0.000788318 " transform="matrix(-0.705007,0.705007,0.705007,0.705007,32.64626,194.526727)"/>
<g style="fill:rgb(92.549133%,0%,54.899597%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph3-1" x="7.611856" y="213.28975"/>
</g>
<g style="fill:rgb(92.549133%,0%,54.899597%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d2-glyph5-1" x="15.117572" y="214.779328"/>
  <use xlink:href="#fisica2_lez02a_d2-glyph5-2" x="18.221461" y="214.779328"/>
  <use xlink:href="#fisica2_lez02a_d2-glyph5-1" x="22.180588" y="214.779328"/>
</g>
</g>
</svg></figure></p>
            <p>Nella figura tutte le cariche sono positive, quindi ogni contributo punta allontanandosi dalla carica che lo genera; il risultante $\\vec{E}_{\\text{tot}}$ (in magenta) giace lungo la diagonale BD.</p>`
          }
        ]
      },

      {
        id: "s02-esempio2",
        type: "section",
        title: "Esempio 2 — Campo al centro del quadrato: sfruttare la simmetria",
        icon: "✳️",
        content: `<p><strong>Traccia.</strong> Quattro cariche sono poste ai vertici di un quadrato di lato $L$ (si assuma $q \\gt 0$):</p>
        <ul>
          <li>$Q_A = +q$ in A$(0, L)$;</li>
          <li>$Q_B = +2q$ in B$(L, L)$;</li>
          <li>$Q_C = +q$ in C$(L, 0)$;</li>
          <li>$Q_D = -q$ in D$(0, 0)$.</li>
        </ul>
        <p>Calcolare il campo elettrostatico totale al centro del quadrato, nel punto P di coordinate $(L/2, L/2)$.</p>`,
        subsections: [
          {
            subtitle: "Analisi di simmetria",
            content: `<p>Il problema si semplifica notevolmente con un'osservazione sulla simmetria. Il punto P è equidistante da tutti i vertici. Consideriamo i campi generati da $Q_A$ e $Q_C$:</p>
            <ul>
              <li>$Q_A = +q$ genera in P un campo $\\vec{E}_A$ <em>uscente</em> da A, diretto lungo la diagonale da A verso P e oltre, cioè verso il vertice C;</li>
              <li>$Q_C = +q$ genera in P un campo $\\vec{E}_C$ <em>uscente</em> da C, diretto lungo la stessa diagonale ma nel verso opposto, cioè verso il vertice A.</li>
            </ul>
            <p>Poiché le cariche sono uguali e i punti A e C sono simmetrici rispetto a P, i due vettori hanno stesso modulo e verso opposto, quindi</p>
            <p>$$\\vec{E}_A + \\vec{E}_C = \\vec{0}$$</p>
            <p>Il campo totale è dunque dato solo da</p>
            <p>$$\\vec{E}_{\\text{tot}}(P) = \\vec{E}_B(P) + \\vec{E}_D(P)$$</p>
            <ul>
              <li>$Q_B = +2q$ genera un campo $\\vec{E}_B$ <em>uscente</em> da B, quindi diretto da B verso P e oltre, verso D;</li>
              <li>$Q_D = -q$ genera un campo $\\vec{E}_D$ <em>entrante</em> in D, quindi diretto da P verso D.</li>
            </ul>
            <p>Entrambi i vettori sono diretti lungo la diagonale BD, verso il vertice D: si sommano <strong>costruttivamente</strong>.</p>
            <p><figure class="figura" data-id="fisica2_lez02a_d3"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez02a_d3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="179.598pt" height="179.864pt" viewBox="0 0 179.598 179.864" version="1.2"><style>#fisica2_lez02a_d3 [fill="rgb(0%,0%,0%)"],#fisica2_lez02a_d3 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez02a_d3 [stroke="rgb(0%,0%,0%)"],#fisica2_lez02a_d3 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez02a_d3 [fill="rgb(0%,0%,100%)"],#fisica2_lez02a_d3 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez02a_d3 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez02a_d3 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez02a_d3 [stroke="rgb(0%,0%,100%)"],#fisica2_lez02a_d3 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez02a_d3 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez02a_d3 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph0-1">
<path style="stroke:none;" d="M 4.921875 -1.421875 C 4.921875 -1.515625 4.84375 -1.515625 4.8125 -1.515625 C 4.71875 -1.515625 4.703125 -1.484375 4.6875 -1.40625 C 4.359375 -0.34375 3.671875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.984375 -1.640625 L 3.3125 -3 C 3.375 -3.265625 3.609375 -4.171875 4.296875 -4.171875 C 4.359375 -4.171875 4.59375 -4.171875 4.796875 -4.046875 C 4.515625 -4 4.328125 -3.75 4.328125 -3.515625 C 4.328125 -3.34375 4.4375 -3.15625 4.703125 -3.15625 C 4.921875 -3.15625 5.234375 -3.34375 5.234375 -3.734375 C 5.234375 -4.25 4.65625 -4.390625 4.3125 -4.390625 C 3.734375 -4.390625 3.390625 -3.859375 3.265625 -3.640625 C 3.015625 -4.296875 2.484375 -4.390625 2.203125 -4.390625 C 1.15625 -4.390625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.921875 1.84375 -4.171875 2.171875 -4.171875 C 2.359375 -4.171875 2.71875 -4.078125 2.71875 -3.515625 C 2.71875 -3.203125 2.546875 -2.53125 2.171875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.9375 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.828125 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.59375 2.265625 -0.640625 C 2.390625 -0.28125 2.75 0.109375 3.34375 0.109375 C 4.359375 0.109375 4.921875 -1.171875 4.921875 -1.421875 Z M 4.921875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph0-2">
<path style="stroke:none;" d="M 4.828125 -3.78125 C 4.875 -3.921875 4.875 -3.9375 4.875 -4.015625 C 4.875 -4.1875 4.734375 -4.28125 4.578125 -4.28125 C 4.484375 -4.28125 4.328125 -4.21875 4.234375 -4.078125 C 4.21875 -4.03125 4.140625 -3.71875 4.09375 -3.53125 L 3.890625 -2.75 L 3.453125 -0.953125 C 3.40625 -0.8125 2.984375 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.546875 1.703125 -0.921875 C 1.703125 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.265625 2.421875 -3.375 2.421875 -3.578125 C 2.421875 -4.03125 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.828125 -3.875 1.234375 -4.171875 1.5625 -4.171875 C 1.65625 -4.171875 1.8125 -4.171875 1.8125 -3.859375 C 1.8125 -3.609375 1.71875 -3.34375 1.65625 -3.15625 C 1.25 -2.109375 1.078125 -1.546875 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.28125 0.109375 C 2.671875 0.109375 3.015625 -0.0625 3.296875 -0.34375 C 3.15625 0.171875 3.046875 0.671875 2.640625 1.1875 C 2.390625 1.53125 2 1.8125 1.546875 1.8125 C 1.40625 1.8125 0.96875 1.78125 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.328125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.046875 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.03125 1.546875 2.03125 C 2.578125 2.03125 3.59375 1.140625 3.875 0.015625 Z M 4.828125 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph0-3">
<path style="stroke:none;" d="M 3.8125 1.734375 C 3.8125 1.625 3.71875 1.625 3.5625 1.625 C 3.078125 1.625 3.078125 1.546875 3.078125 1.453125 C 3.078125 1.390625 3.09375 1.328125 3.125 1.25 L 4.484375 -4.28125 C 4.484375 -4.328125 4.46875 -4.375 4.390625 -4.375 C 4.28125 -4.375 3.890625 -3.984375 3.71875 -3.703125 C 3.5 -4.234375 3.109375 -4.390625 2.796875 -4.390625 C 1.625 -4.390625 0.390625 -2.921875 0.390625 -1.484375 C 0.390625 -0.5 0.984375 0.109375 1.703125 0.109375 C 2.140625 0.109375 2.53125 -0.125 2.875 -0.484375 L 2.4375 1.296875 C 2.359375 1.5625 2.28125 1.609375 1.71875 1.625 C 1.59375 1.625 1.484375 1.625 1.484375 1.8125 C 1.484375 1.8125 1.484375 1.921875 1.625 1.921875 C 1.9375 1.921875 2.28125 1.890625 2.609375 1.890625 C 2.953125 1.890625 3.3125 1.921875 3.640625 1.921875 C 3.6875 1.921875 3.8125 1.921875 3.8125 1.734375 Z M 3.578125 -3.296875 C 3.578125 -3.234375 3.03125 -1.0625 3 -1.03125 C 2.859375 -0.75 2.296875 -0.109375 1.734375 -0.109375 C 1.140625 -0.109375 1.109375 -0.875 1.109375 -1.046875 C 1.109375 -1.515625 1.390625 -2.609375 1.5625 -3.015625 C 1.875 -3.75 2.390625 -4.171875 2.796875 -4.171875 C 3.4375 -4.171875 3.578125 -3.375 3.578125 -3.296875 Z M 3.578125 -3.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph0-4">
<path style="stroke:none;" d="M 7.5 -5.28125 C 7.5 -6.046875 6.84375 -6.78125 5.53125 -6.78125 L 2.3125 -6.78125 C 2.125 -6.78125 2.015625 -6.78125 2.015625 -6.59375 C 2.015625 -6.484375 2.109375 -6.484375 2.3125 -6.484375 C 2.4375 -6.484375 2.609375 -6.46875 2.734375 -6.453125 C 2.890625 -6.4375 2.953125 -6.40625 2.953125 -6.296875 C 2.953125 -6.265625 2.9375 -6.234375 2.90625 -6.109375 L 1.578125 -0.78125 C 1.484375 -0.390625 1.453125 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.390625 -0.3125 0.390625 -0.125 C 0.390625 0 0.515625 0 0.546875 0 L 1.8125 -0.03125 L 2.4375 -0.015625 C 2.65625 -0.015625 2.875 0 3.09375 0 C 3.15625 0 3.296875 0 3.296875 -0.203125 C 3.296875 -0.3125 3.203125 -0.3125 3.015625 -0.3125 C 2.640625 -0.3125 2.359375 -0.3125 2.359375 -0.484375 C 2.359375 -0.546875 2.390625 -0.59375 2.390625 -0.65625 L 3.015625 -3.140625 L 4.703125 -3.140625 C 6.109375 -3.140625 7.5 -4.171875 7.5 -5.28125 Z M 6.5625 -5.53125 C 6.5625 -5.140625 6.375 -4.28125 5.984375 -3.921875 C 5.484375 -3.484375 4.890625 -3.40625 4.453125 -3.40625 L 3.046875 -3.40625 L 3.734375 -6.109375 C 3.8125 -6.453125 3.828125 -6.484375 4.265625 -6.484375 L 5.21875 -6.484375 C 6.046875 -6.484375 6.5625 -6.21875 6.5625 -5.53125 Z M 6.5625 -5.53125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph1-1">
<path style="stroke:none;" d="M 7.125 0 L 7.125 -0.3125 L 6.953125 -0.3125 C 6.34375 -0.3125 6.21875 -0.375 6.109375 -0.703125 L 3.953125 -6.921875 C 3.90625 -7.046875 3.890625 -7.109375 3.734375 -7.109375 C 3.5625 -7.109375 3.53125 -7.0625 3.484375 -6.921875 L 1.4375 -0.96875 C 1.25 -0.46875 0.859375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.328125 -0.03125 L 2.46875 0 L 2.46875 -0.3125 C 1.984375 -0.3125 1.734375 -0.5625 1.734375 -0.8125 C 1.734375 -0.84375 1.734375 -0.9375 1.75 -0.96875 L 2.203125 -2.265625 L 4.65625 -2.265625 L 5.1875 -0.75 C 5.203125 -0.703125 5.21875 -0.640625 5.21875 -0.609375 C 5.21875 -0.3125 4.65625 -0.3125 4.390625 -0.3125 L 4.390625 0 C 4.75 -0.03125 5.453125 -0.03125 5.828125 -0.03125 Z M 4.546875 -2.578125 L 2.3125 -2.578125 L 3.421875 -5.796875 Z M 4.546875 -2.578125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph1-2">
<path style="stroke:none;" d="M 6.46875 -1.8125 C 6.46875 -2.6875 5.65625 -3.421875 4.546875 -3.546875 C 5.515625 -3.734375 6.203125 -4.375 6.203125 -5.109375 C 6.203125 -5.96875 5.28125 -6.78125 4 -6.78125 L 0.359375 -6.78125 L 0.359375 -6.484375 L 0.59375 -6.484375 C 1.359375 -6.484375 1.375 -6.375 1.375 -6.015625 L 1.375 -0.78125 C 1.375 -0.421875 1.359375 -0.3125 0.59375 -0.3125 L 0.359375 -0.3125 L 0.359375 0 L 4.25 0 C 5.578125 0 6.46875 -0.890625 6.46875 -1.8125 Z M 5.234375 -5.109375 C 5.234375 -4.46875 4.75 -3.640625 3.640625 -3.640625 L 2.203125 -3.640625 L 2.203125 -6.078125 C 2.203125 -6.40625 2.21875 -6.484375 2.6875 -6.484375 L 3.921875 -6.484375 C 4.890625 -6.484375 5.234375 -5.640625 5.234375 -5.109375 Z M 5.46875 -1.828125 C 5.46875 -1.125 4.953125 -0.3125 3.9375 -0.3125 L 2.6875 -0.3125 C 2.21875 -0.3125 2.203125 -0.375 2.203125 -0.703125 L 2.203125 -3.421875 L 4.078125 -3.421875 C 5.0625 -3.421875 5.46875 -2.5 5.46875 -1.828125 Z M 5.46875 -1.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph1-3">
<path style="stroke:none;" d="M 6.609375 -2.3125 C 6.609375 -2.421875 6.609375 -2.484375 6.484375 -2.484375 C 6.375 -2.484375 6.375 -2.421875 6.359375 -2.328125 C 6.28125 -0.90625 5.21875 -0.09375 4.140625 -0.09375 C 3.53125 -0.09375 1.578125 -0.421875 1.578125 -3.390625 C 1.578125 -6.359375 3.515625 -6.703125 4.125 -6.703125 C 5.203125 -6.703125 6.09375 -5.796875 6.296875 -4.34375 C 6.3125 -4.203125 6.3125 -4.171875 6.453125 -4.171875 C 6.609375 -4.171875 6.609375 -4.203125 6.609375 -4.40625 L 6.609375 -6.765625 C 6.609375 -6.9375 6.609375 -7 6.5 -7 C 6.453125 -7 6.421875 -7 6.34375 -6.890625 L 5.84375 -6.15625 C 5.46875 -6.515625 4.96875 -7 4.015625 -7 C 2.15625 -7 0.5625 -5.421875 0.5625 -3.40625 C 0.5625 -1.34375 2.171875 0.21875 4.015625 0.21875 C 5.640625 0.21875 6.609375 -1.15625 6.609375 -2.3125 Z M 6.609375 -2.3125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph1-4">
<path style="stroke:none;" d="M 7.03125 -3.34375 C 7.03125 -5.234375 5.6875 -6.78125 3.984375 -6.78125 L 0.34375 -6.78125 L 0.34375 -6.484375 L 0.59375 -6.484375 C 1.34375 -6.484375 1.375 -6.375 1.375 -6.015625 L 1.375 -0.78125 C 1.375 -0.421875 1.34375 -0.3125 0.59375 -0.3125 L 0.34375 -0.3125 L 0.34375 0 L 3.984375 0 C 5.65625 0 7.03125 -1.46875 7.03125 -3.34375 Z M 6.03125 -3.34375 C 6.03125 -2.234375 5.84375 -1.640625 5.484375 -1.15625 C 5.28125 -0.890625 4.71875 -0.3125 3.71875 -0.3125 L 2.71875 -0.3125 C 2.25 -0.3125 2.21875 -0.375 2.21875 -0.703125 L 2.21875 -6.078125 C 2.21875 -6.40625 2.25 -6.484375 2.71875 -6.484375 L 3.703125 -6.484375 C 4.328125 -6.484375 5.015625 -6.265625 5.515625 -5.5625 C 5.9375 -4.96875 6.03125 -4.109375 6.03125 -3.34375 Z M 6.03125 -3.34375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph2-1">
<path style="stroke:none;" d="M 7.171875 -2.484375 C 7.171875 -2.6875 6.96875 -2.6875 6.84375 -2.6875 L 4.0625 -2.6875 L 4.0625 -5.46875 C 4.0625 -5.609375 4.0625 -5.796875 3.859375 -5.796875 C 3.671875 -5.796875 3.671875 -5.609375 3.671875 -5.46875 L 3.671875 -2.6875 L 0.890625 -2.6875 C 0.75 -2.6875 0.5625 -2.6875 0.5625 -2.484375 C 0.5625 -2.28125 0.75 -2.28125 0.890625 -2.28125 L 3.671875 -2.28125 L 3.671875 0.5 C 3.671875 0.640625 3.671875 0.828125 3.859375 0.828125 C 4.0625 0.828125 4.0625 0.640625 4.0625 0.5 L 4.0625 -2.28125 L 6.84375 -2.28125 C 6.96875 -2.28125 7.171875 -2.28125 7.171875 -2.484375 Z M 7.171875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph2-2">
<path style="stroke:none;" d="M 4.46875 -1.734375 L 4.21875 -1.734375 C 4.15625 -1.4375 4.09375 -1 4 -0.84375 C 3.921875 -0.765625 3.265625 -0.765625 3.046875 -0.765625 L 1.265625 -0.765625 L 2.3125 -1.78125 C 3.859375 -3.15625 4.46875 -3.703125 4.46875 -4.6875 C 4.46875 -5.828125 3.5625 -6.625 2.359375 -6.625 C 1.234375 -6.625 0.5 -5.703125 0.5 -4.8125 C 0.5 -4.265625 1 -4.265625 1.03125 -4.265625 C 1.1875 -4.265625 1.546875 -4.375 1.546875 -4.796875 C 1.546875 -5.046875 1.359375 -5.3125 1.015625 -5.3125 C 0.9375 -5.3125 0.921875 -5.3125 0.890625 -5.296875 C 1.109375 -5.9375 1.65625 -6.3125 2.21875 -6.3125 C 3.125 -6.3125 3.5625 -5.5 3.5625 -4.6875 C 3.5625 -3.890625 3.0625 -3.109375 2.515625 -2.5 L 0.609375 -0.375 C 0.5 -0.265625 0.5 -0.234375 0.5 0 L 4.1875 0 Z M 4.46875 -1.734375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph3-1">
<path style="stroke:none;" d="M 6.890625 -2.484375 C 6.890625 -2.6875 6.703125 -2.6875 6.5625 -2.6875 L 1.15625 -2.6875 C 1.015625 -2.6875 0.828125 -2.6875 0.828125 -2.484375 C 0.828125 -2.28125 1.015625 -2.28125 1.15625 -2.28125 L 6.5625 -2.28125 C 6.703125 -2.28125 6.890625 -2.28125 6.890625 -2.484375 Z M 6.890625 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph4-1">
<path style="stroke:none;" d="M 7.1875 -2.71875 L 6.71875 -2.71875 C 6.5 -1.34375 6.21875 -0.46875 4.375 -0.46875 L 2.875 -0.46875 L 2.875 -3.265625 L 3.421875 -3.265625 C 4.375 -3.265625 4.46875 -2.84375 4.46875 -2.109375 L 4.9375 -2.109375 L 4.9375 -4.90625 L 4.46875 -4.90625 C 4.46875 -4.15625 4.375 -3.734375 3.421875 -3.734375 L 2.875 -3.734375 L 2.875 -6.296875 L 4.375 -6.296875 C 5.984375 -6.296875 6.234375 -5.5625 6.40625 -4.359375 L 6.859375 -4.359375 L 6.5625 -6.75 L 0.390625 -6.75 L 0.390625 -6.296875 L 1.453125 -6.296875 L 1.453125 -0.46875 L 0.390625 -0.46875 L 0.390625 0 L 6.734375 0 Z M 7.1875 -2.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph5-1">
<path style="stroke:none;" d="M 5.625 -0.140625 C 5.625 -0.25 5.546875 -0.25 5.4375 -0.25 C 5.03125 -0.25 5.015625 -0.3125 5 -0.46875 L 4.390625 -4.765625 C 4.359375 -4.90625 4.359375 -4.953125 4.21875 -4.953125 C 4.09375 -4.953125 4.046875 -4.890625 3.984375 -4.796875 L 1.4375 -0.828125 C 1.1875 -0.453125 0.96875 -0.28125 0.5625 -0.25 C 0.484375 -0.25 0.390625 -0.25 0.390625 -0.109375 C 0.390625 -0.03125 0.453125 0 0.5 0 C 0.671875 0 0.90625 -0.03125 1.09375 -0.03125 C 1.3125 -0.03125 1.59375 0 1.8125 0 C 1.84375 0 1.953125 0 1.953125 -0.15625 C 1.953125 -0.25 1.859375 -0.25 1.828125 -0.25 C 1.765625 -0.25 1.515625 -0.265625 1.515625 -0.453125 C 1.515625 -0.546875 1.59375 -0.65625 1.625 -0.71875 L 2.1875 -1.578125 L 4.171875 -1.578125 L 4.34375 -0.4375 C 4.3125 -0.359375 4.265625 -0.25 3.859375 -0.25 C 3.78125 -0.25 3.671875 -0.25 3.671875 -0.09375 C 3.671875 -0.0625 3.703125 0 3.796875 0 C 3.984375 0 4.484375 -0.03125 4.6875 -0.03125 L 5.09375 -0.015625 C 5.21875 -0.015625 5.375 0 5.5 0 C 5.578125 0 5.625 -0.0625 5.625 -0.140625 Z M 4.140625 -1.828125 L 2.34375 -1.828125 L 3.8125 -4.109375 Z M 4.140625 -1.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph5-2">
<path style="stroke:none;" d="M 5.4375 -3.046875 L 5.859375 -4.796875 C 5.859375 -4.828125 5.84375 -4.890625 5.765625 -4.890625 C 5.71875 -4.890625 5.703125 -4.875 5.640625 -4.8125 L 5.140625 -4.265625 C 5.078125 -4.359375 4.6875 -4.890625 3.828125 -4.890625 C 2.140625 -4.890625 0.484375 -3.390625 0.484375 -1.828125 C 0.484375 -0.6875 1.375 0.140625 2.625 0.140625 C 3 0.140625 3.671875 0.0625 4.375 -0.546875 C 4.9375 -1.015625 5.078125 -1.609375 5.078125 -1.671875 C 5.078125 -1.765625 5 -1.765625 4.96875 -1.765625 C 4.875 -1.765625 4.859375 -1.71875 4.84375 -1.640625 C 4.546875 -0.703125 3.578125 -0.109375 2.734375 -0.109375 C 2 -0.109375 1.1875 -0.5 1.1875 -1.609375 C 1.1875 -1.8125 1.234375 -2.90625 2.03125 -3.78125 C 2.515625 -4.3125 3.234375 -4.640625 3.90625 -4.640625 C 4.703125 -4.640625 5.1875 -4.046875 5.1875 -3.28125 C 5.1875 -3.078125 5.15625 -3.03125 5.15625 -2.984375 C 5.15625 -2.90625 5.25 -2.90625 5.28125 -2.90625 C 5.390625 -2.90625 5.390625 -2.921875 5.4375 -3.046875 Z M 5.4375 -3.046875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph5-3">
<path style="stroke:none;" d="M 5.46875 -1.484375 C 5.46875 -1.984375 5.015625 -2.40625 4.28125 -2.484375 C 5.125 -2.640625 5.8125 -3.15625 5.8125 -3.765625 C 5.8125 -4.296875 5.28125 -4.75 4.375 -4.75 L 1.84375 -4.75 C 1.71875 -4.75 1.625 -4.75 1.625 -4.59375 C 1.625 -4.5 1.703125 -4.5 1.84375 -4.5 C 1.84375 -4.5 1.984375 -4.5 2.109375 -4.484375 C 2.265625 -4.46875 2.28125 -4.453125 2.28125 -4.390625 C 2.28125 -4.390625 2.28125 -4.34375 2.25 -4.234375 L 1.328125 -0.546875 C 1.265625 -0.3125 1.25 -0.25 0.703125 -0.25 C 0.59375 -0.25 0.5 -0.25 0.5 -0.109375 C 0.5 0 0.578125 0 0.703125 0 L 3.40625 0 C 4.5625 0 5.46875 -0.796875 5.46875 -1.484375 Z M 5.140625 -3.765625 C 5.140625 -3.203125 4.5 -2.5625 3.578125 -2.5625 L 2.4375 -2.5625 L 2.859375 -4.265625 C 2.90625 -4.484375 2.921875 -4.5 3.21875 -4.5 L 4.265625 -4.5 C 4.984375 -4.5 5.140625 -4.03125 5.140625 -3.765625 Z M 4.765625 -1.53125 C 4.765625 -0.84375 4.0625 -0.25 3.21875 -0.25 L 2.09375 -0.25 C 1.890625 -0.25 1.875 -0.25 1.875 -0.3125 C 1.875 -0.3125 1.875 -0.359375 1.90625 -0.46875 L 2.390625 -2.375 L 3.859375 -2.375 C 4.515625 -2.375 4.765625 -1.9375 4.765625 -1.53125 Z M 4.765625 -1.53125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02a_d3-glyph5-4">
<path style="stroke:none;" d="M 6.203125 -2.9375 C 6.203125 -3.953125 5.5 -4.75 4.375 -4.75 L 1.84375 -4.75 C 1.703125 -4.75 1.625 -4.75 1.625 -4.59375 C 1.625 -4.5 1.703125 -4.5 1.84375 -4.5 C 1.953125 -4.5 1.984375 -4.5 2.109375 -4.484375 C 2.25 -4.46875 2.265625 -4.453125 2.265625 -4.390625 C 2.265625 -4.390625 2.265625 -4.34375 2.234375 -4.234375 L 1.3125 -0.546875 C 1.265625 -0.3125 1.25 -0.25 0.703125 -0.25 C 0.578125 -0.25 0.5 -0.25 0.5 -0.09375 C 0.5 0 0.578125 0 0.703125 0 L 3.1875 0 C 4.734375 0 6.203125 -1.421875 6.203125 -2.9375 Z M 5.546875 -3.15625 C 5.546875 -3 5.484375 -1.796875 4.78125 -1.015625 C 4.515625 -0.703125 3.921875 -0.25 3.0625 -0.25 L 2.109375 -0.25 C 1.890625 -0.25 1.890625 -0.25 1.890625 -0.3125 C 1.890625 -0.3125 1.890625 -0.359375 1.921875 -0.46875 L 2.875 -4.265625 C 2.921875 -4.484375 2.9375 -4.5 3.21875 -4.5 L 4.109375 -4.5 C 4.890625 -4.5 5.546875 -4.109375 5.546875 -3.15625 Z M 5.546875 -3.15625 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez02a_d3-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -31.180872 -0.000306635 L 131.017308 -0.000306635 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(50%,50%,50%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.215944 -0.000306635 L 0.641555 1.346451 L 1.816053 -0.000306635 L 0.641555 -1.347064 Z M 4.215944 -0.000306635 " transform="matrix(0.997767,0,0,-0.997767,164.297378,144.308288)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-1" x="166.225931" y="152.100845"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.00186385 -31.18323 L -0.00186385 131.018865 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(50%,50%,50%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.213586 0.00186385 L 0.643112 1.344707 L 1.81761 0.00186385 L 0.643112 -1.344894 Z M 4.213586 0.00186385 " transform="matrix(0,-0.997767,-0.997767,0,35.287016,15.297926)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-2" x="26.544584" y="11.702105"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.00186385 93.544548 L 93.546905 93.544548 L 93.546905 -0.000306635 L -0.00186385 -0.000306635 Z M -0.00186385 93.544548 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-dasharray:0.3985,1.99255;stroke-miterlimit:10;" d="M -0.00186385 93.544548 L 93.546905 -0.000306635 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(64.99939%,64.99939%,64.99939%);stroke-opacity:1;stroke-dasharray:0.3985,1.99255;stroke-miterlimit:10;" d="M 93.546905 93.544548 L -0.00186385 -0.000306635 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(92.498779%,92.498779%,92.498779%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 7.882933 93.544548 C 7.882933 97.89802 4.355524 101.429345 -0.00186385 101.429345 C -4.355337 101.429345 -7.882746 97.89802 -7.882746 93.544548 C -7.882746 89.191075 -4.355337 85.659751 -0.00186385 85.659751 C 4.355524 85.659751 7.882933 89.191075 7.882933 93.544548 Z M 7.882933 93.544548 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph1-1" x="31.55936" y="54.397538"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(92.498779%,92.498779%,92.498779%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 101.267273 93.544548 C 101.267273 97.811891 97.810333 101.26883 93.546905 101.26883 C 89.279563 101.26883 85.822623 97.811891 85.822623 93.544548 C 85.822623 89.28112 89.279563 85.820266 93.546905 85.820266 C 97.810333 85.820266 101.267273 89.28112 101.267273 93.544548 Z M 101.267273 93.544548 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph1-2" x="125.100982" y="54.397538"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(92.498779%,92.498779%,92.498779%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 101.322083 -0.000306635 C 101.322083 4.294441 97.841653 7.778785 93.546905 7.778785 C 89.248243 7.778785 85.767813 4.294441 85.767813 -0.000306635 C 85.767813 -4.295054 89.248243 -7.775484 93.546905 -7.775484 C 97.841653 -7.775484 101.322083 -4.295054 101.322083 -0.000306635 Z M 101.322083 -0.000306635 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph1-3" x="125.032137" y="147.732623"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(92.498779%,92.498779%,92.498779%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 7.937743 -0.000306635 C 7.937743 4.384486 4.382929 7.935385 -0.00186385 7.935385 C -4.382742 7.935385 -7.937556 4.384486 -7.937556 -0.000306635 C -7.937556 -4.385099 -4.382742 -7.935998 -0.00186385 -7.935998 C 4.382929 -7.935998 7.937743 -4.385099 7.937743 -0.000306635 Z M 7.937743 -0.000306635 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph1-4" x="31.489516" y="147.732623"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph2-1" x="13.544683" y="39.812185"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-3" x="21.276376" y="39.812185"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph2-1" x="137.736699" y="39.92593"/>
  <use xlink:href="#fisica2_lez02a_d3-glyph2-2" x="145.468304" y="39.92593"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-3" x="150.438269" y="39.92593"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph2-1" x="137.774615" y="159.243857"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-3" x="145.506309" y="159.243857"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph3-1" x="13.507765" y="159.360596"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-3" x="21.239459" y="159.360596"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 83.703125 97.640625 C 83.703125 96.675781 82.921875 95.890625 81.953125 95.890625 C 80.988281 95.890625 80.207031 96.675781 80.207031 97.640625 C 80.207031 98.605469 80.988281 99.390625 81.953125 99.390625 C 82.921875 99.390625 83.703125 98.605469 83.703125 97.640625 Z M 83.703125 97.640625 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph0-4" x="86.169125" y="93.426179"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 46.770563 46.772121 L 65.914881 27.631717 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(50%,50%,50%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.440031 -0.00160242 L 1.287514 1.570818 L 2.663381 0.00116593 L 1.287514 -1.568486 Z M 5.440031 -0.00160242 " transform="matrix(0.705521,0.705521,0.705521,-0.705521,99.315419,115.000658)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph4-1" x="106.961584" y="129.464513"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph5-1" x="114.471774" y="130.956174"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 46.770563 46.772121 L 27.63016 65.916439 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(50%,50%,50%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 5.439465 -0.00116593 L 1.286948 1.571254 L 2.665583 -0.00116593 L 1.286948 -1.568049 Z M 5.439465 -0.00116593 " transform="matrix(-0.705521,-0.705521,-0.705521,0.705521,64.594646,80.279885)"/>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph4-1" x="42.750311" y="71.143056"/>
</g>
<g style="fill:rgb(50%,50%,50%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph5-2" x="50.261498" y="72.633719"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 43.243154 50.29953 L 17.126233 24.182608 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 6.665084 -0.000937259 L 1.928445 1.795719 L 3.50917 -0.000937259 L 1.931214 -1.794825 Z M 6.665084 -0.000937259 " transform="matrix(-0.705521,0.705521,0.705521,0.705521,54.640516,117.915494)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph4-1" x="29.480014" y="126.483186"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph5-3" x="36.990204" y="127.97385"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 50.301887 43.244711 L 38.952321 31.89906 " transform="matrix(0.997767,0,0,-0.997767,35.287016,144.308288)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 6.667445 -0.00127913 L 1.930806 1.795377 L 3.511531 -0.00127913 L 1.930806 -1.797935 Z M 6.667445 -0.00127913 " transform="matrix(-0.705521,0.705521,0.705521,0.705521,76.419767,110.21485)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph4-1" x="63.153641" y="128.833925"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02a_d3-glyph5-4" x="70.664829" y="130.324588"/>
</g>
</g>
</svg></figure></p>
            <p>Nella figura, $\\vec{E}_A$ (verso sud-est) e $\\vec{E}_C$ (verso nord-ovest) si annullano a vicenda lungo la diagonale AC; restano solo $\\vec{E}_B$ ed $\\vec{E}_D$, entrambi lungo la diagonale BD verso il vertice D.</p>`
          },
          {
            subtitle: "Hint per lo svolgimento",
            content: `<p>Il calcolo dettagliato dei moduli e la somma finale sono <strong>lasciati come esercizio</strong>. Punti di partenza: la distanza di ogni vertice dal centro P è $d = L/\\sqrt{2}$, quindi $d^2 = L^2/2$. I moduli sono</p>
            <p>$$|\\vec{E}_B| = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2q}{(L/\\sqrt{2})^2}, \\qquad |\\vec{E}_D| = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|-q|}{(L/\\sqrt{2})^2}$$</p>
            <p>Entrambi i vettori puntano nella stessa direzione, data dal versore $\\hat{u} = \\frac{1}{\\sqrt{2}}(-\\hat{x} - \\hat{y})$. Il campo totale sarà $\\vec{E}_{\\text{tot}} = (|\\vec{E}_B| + |\\vec{E}_D|)\\,\\hat{u}$.</p>`
          }
        ]
      },

      {
        id: "s02-int-controllo-es2",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Soluzione di controllo del secondo esempio.</strong> Chi svolge l'esercizio può verificare i propri conti con i risultati seguenti (validi per $q \\gt 0$).</p>
        <p>Poiché $d^2 = L^2/2$, i due moduli valgono</p>
        <p>$$|\\vec{E}_B| = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2q}{L^2/2} = \\frac{4q}{4\\pi\\varepsilon_0 L^2}, \\qquad |\\vec{E}_D| = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{L^2/2} = \\frac{2q}{4\\pi\\varepsilon_0 L^2}$$</p>
        <p>Essendo concordi, i moduli si sommano:</p>
        <p>$$|\\vec{E}_{\\text{tot}}| = |\\vec{E}_B| + |\\vec{E}_D| = \\frac{6q}{4\\pi\\varepsilon_0 L^2}$$</p>
        <p>Moltiplicando per il versore $\\hat{u} = \\frac{1}{\\sqrt{2}}(-\\hat{x} - \\hat{y})$:</p>
        <p>$$\\vec{E}_{\\text{tot}} = \\frac{6q}{4\\pi\\varepsilon_0 L^2}\\cdot\\frac{1}{\\sqrt{2}}\\,(-\\hat{x}-\\hat{y}) = -\\frac{3\\sqrt{2}\\,q}{4\\pi\\varepsilon_0 L^2}\\,(\\hat{x} + \\hat{y})$$</p>
        <p><strong>Controlli di coerenza utili.</strong></p>
        <ul>
          <li>Le due componenti cartesiane sono uguali fra loro: corretto, perché il risultante deve giacere sulla diagonale BD, che forma $45^\\circ$ con gli assi.</li>
          <li>Entrambe le componenti sono negative: corretto, perché il campo punta da B verso D, cioè verso l'origine.</li>
          <li>Il modulo $|\\vec{E}_B|$ è il doppio di $|\\vec{E}_D|$: corretto, perché le due cariche distano ugualmente da P ma $|Q_B| = 2|Q_D|$.</li>
          <li>Dimensionalmente il risultato è una carica divisa per $\\varepsilon_0$ e per una lunghezza al quadrato, cioè $\\text{N}/\\text{C}$: corretto.</li>
        </ul>`
      },

      {
        id: "s02-esempio3",
        type: "section",
        title: "Esempio 3 — Variante con una carica negativa",
        icon: "🔻",
        content: `<p>Proseguiamo con la stessa impostazione: stesso principio di sovrapposizione, stessa geometria del quadrato, ma <strong>una delle cariche è ora negativa</strong>. Questo ci permette di vedere come cambia il verso di un contributo e come si ricavano modulo e direzione del risultante.</p>
        <p><em>Nota sulla notazione:</em> qui i vettori sono indicati in grassetto, $\\boldsymbol{E} \\equiv \\vec{E}$, e i versori degli assi come $\\hat{\\boldsymbol{\\imath}} \\equiv \\hat{x}$, $\\hat{\\boldsymbol{\\jmath}} \\equiv \\hat{y}$; la costante dielettrica del vuoto è sempre la stessa, $\\epsilon_0 \\equiv \\varepsilon_0$.</p>
        <p><strong>Traccia.</strong> Tre cariche puntiformi ai vertici di un quadrato di lato $L$, con $q \\gt 0$:</p>
        <ul>
          <li>$q_A = +q$ nel punto $A(0, L)$;</li>
          <li>$q_B = +2q$ nel punto $B(L, L)$;</li>
          <li>$q_C = -q$ nel punto $C(L, 0)$.</li>
        </ul>
        <p>Calcolare il campo elettrostatico totale nel quarto vertice $D(0,0)$.</p>
        <blockquote><strong>Nota del Prof.</strong> — Durante la lezione a voce, la carica in C è stata inizialmente indicata come $+q$, ma il calcolo svolto, in particolare per l'angolo finale, corrisponde a una carica di $-q$. Seguiremo quindi lo svolgimento coerente con il risultato finale di $-80.3^\\circ$.</blockquote>
        <p>Per alleggerire la notazione introduciamo una volta per tutte la costante</p>
        <p>$$K \\equiv \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}$$</p>
        <p>che ha le dimensioni di un campo elettrico e rappresenta l'intensità del campo prodotto in D da una carica $q$ posta a distanza $L$. Poiché $q \\gt 0$, si ha $K \\gt 0$ e tutti i risultati verranno espressi come multipli di $K$.</p>`,
        subsections: [
          {
            subtitle: "1) Campo generato da $q_A = +q$ in $A(0,L)$",
            content: `<p>Il vettore che va dalla sorgente A al punto D è $\\boldsymbol{r}_{AD} = D - A = (0,0)-(0,L) = -L\\hat{\\boldsymbol{\\jmath}}$, con $r_A = \\|\\boldsymbol{r}_{AD}\\| = L$ e versore $\\hat{\\boldsymbol{u}}_A = -\\hat{\\boldsymbol{\\jmath}}$. Quindi</p>
            <p>$$\\boldsymbol{E}_A = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_A}{r_A^2} \\hat{\\boldsymbol{u}}_A = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{L^2} (-\\hat{\\boldsymbol{\\jmath}}) = -K\\,\\hat{\\boldsymbol{\\jmath}}, \\qquad \\|\\boldsymbol{E}_A\\| = K$$</p>`
          },
          {
            subtitle: "2) Campo generato da $q_C = -q$ in $C(L,0)$",
            content: `<p>Il vettore da C a D è $\\boldsymbol{r}_{CD} = (0,0)-(L,0) = -L\\hat{\\boldsymbol{\\imath}}$, con $r_C = L$ e $\\hat{\\boldsymbol{u}}_C = -\\hat{\\boldsymbol{\\imath}}$. Inserendo il <strong>segno algebrico</strong> della carica:</p>
            <p>$$\\boldsymbol{E}_C = \\frac{1}{4\\pi\\varepsilon_0} \\frac{-q}{L^2} (-\\hat{\\boldsymbol{\\imath}}) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{L^2} \\hat{\\boldsymbol{\\imath}} = K\\,\\hat{\\boldsymbol{\\imath}}, \\qquad \\|\\boldsymbol{E}_C\\| = K$$</p>
            <p>Il campo punta <em>verso</em> la carica negativa: il doppio segno meno lo produce automaticamente.</p>`
          },
          {
            subtitle: "3) Campo generato da $q_B = +2q$ in $B(L,L)$",
            content: `<p>$\\boldsymbol{r}_{BD} = (0,0)-(L,L) = -L\\hat{\\boldsymbol{\\imath}} - L\\hat{\\boldsymbol{\\jmath}}$, con</p>
            <p>$$r_B = \\sqrt{(-L)^2 + (-L)^2} = \\sqrt{2L^2} = L\\sqrt{2}, \\qquad r_B^2 = 2L^2$$</p>
            <p>$$\\hat{\\boldsymbol{u}}_B = \\frac{-L\\hat{\\boldsymbol{\\imath}} - L\\hat{\\boldsymbol{\\jmath}}}{L\\sqrt{2}} = -\\frac{1}{\\sqrt{2}}(\\hat{\\boldsymbol{\\imath}} + \\hat{\\boldsymbol{\\jmath}})$$</p>
            <p>$$\\boldsymbol{E}_B = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2q}{2L^2} \\left(-\\frac{1}{\\sqrt{2}}(\\hat{\\boldsymbol{\\imath}} + \\hat{\\boldsymbol{\\jmath}})\\right) = -\\frac{K}{\\sqrt{2}}\\hat{\\boldsymbol{\\imath}} - \\frac{K}{\\sqrt{2}}\\hat{\\boldsymbol{\\jmath}}$$</p>`
          },
          {
            subtitle: "Campo totale: componenti, modulo e direzione",
            content: `<p>Componente $x$:</p>
            <p>$$E_x = E_{Ax} + E_{Bx} + E_{Cx} = 0 - \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2\\sqrt{2}} + \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2} = \\frac{q}{4\\pi\\varepsilon_0 L^2} \\left(1 - \\frac{1}{\\sqrt{2}}\\right)$$</p>
            <p>Componente $y$:</p>
            <p>$$E_y = -\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2} - \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2\\sqrt{2}} + 0 = -\\frac{q}{4\\pi\\varepsilon_0 L^2} \\left(1 + \\frac{1}{\\sqrt{2}}\\right)$$</p>
            <p>Il vettore campo totale è</p>
            <p>$$\\boldsymbol{E}_{\\text{tot}} = \\frac{q}{4\\pi\\varepsilon_0 L^2} \\left[ \\left(1 - \\frac{1}{\\sqrt{2}}\\right)\\hat{\\boldsymbol{\\imath}} - \\left(1 + \\frac{1}{\\sqrt{2}}\\right)\\hat{\\boldsymbol{\\jmath}} \\right]$$</p>
            <p>Modulo:</p>
            <p>$$\\|\\boldsymbol{E}_{\\text{tot}}\\|^2 = \\left(\\frac{q}{4\\pi\\varepsilon_0 L^2}\\right)^2 \\left[ \\left(1 - \\frac{1}{\\sqrt{2}}\\right)^2 + \\left(-1 - \\frac{1}{\\sqrt{2}}\\right)^2 \\right]$$</p>
            <p>$$= \\left(\\frac{q}{4\\pi\\varepsilon_0 L^2}\\right)^2 \\left[ \\left(1 - \\sqrt{2} + \\tfrac{1}{2}\\right) + \\left(1 + \\sqrt{2} + \\tfrac{1}{2}\\right) \\right] = \\left(\\frac{q}{4\\pi\\varepsilon_0 L^2}\\right)^2 \\cdot 3$$</p>
            <p>$$\\|\\boldsymbol{E}_{\\text{tot}}\\| = \\frac{q\\sqrt{3}}{4\\pi\\varepsilon_0 L^2} = \\sqrt{3}\\,K$$</p>
            <p>Direzione, data dall'angolo $\\alpha$ rispetto all'asse $x$:</p>
            <p>$$\\alpha = \\arctan\\left(\\frac{E_y}{E_x}\\right) = \\arctan\\left(\\frac{-\\left(1 + \\frac{1}{\\sqrt{2}}\\right)}{\\left(1 - \\frac{1}{\\sqrt{2}}\\right)}\\right) \\approx \\arctan(-5.828) \\approx -80.3^{\\circ}$$</p>
            <p>Poiché $E_x \\gt 0$ e $E_y \\lt 0$, il risultante è un vettore del <strong>quarto quadrante</strong>, con un'inclinazione di circa $80.3^\\circ$ sotto l'asse delle ascisse.</p>
            <p><figure class="figura" data-id="fisica2_lez02b_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez02b_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="198.222pt" height="213.795pt" viewBox="0 0 198.222 213.795" version="1.2"><style>#fisica2_lez02b_d1 [fill="rgb(0%,0%,0%)"],#fisica2_lez02b_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez02b_d1 [stroke="rgb(0%,0%,0%)"],#fisica2_lez02b_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez02b_d1 [fill="rgb(0%,0%,100%)"],#fisica2_lez02b_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez02b_d1 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez02b_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez02b_d1 [stroke="rgb(0%,0%,100%)"],#fisica2_lez02b_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez02b_d1 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez02b_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#fisica2_lez02b_d1 [fill="rgb(100%,0%,0%)"],#fisica2_lez02b_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez02b_d1 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez02b_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez02b_d1 [stroke="rgb(100%,0%,0%)"],#fisica2_lez02b_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez02b_d1 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez02b_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-1">
<path style="stroke:none;" d="M 4.921875 -1.421875 C 4.921875 -1.515625 4.828125 -1.515625 4.796875 -1.515625 C 4.71875 -1.515625 4.6875 -1.484375 4.671875 -1.40625 C 4.34375 -0.34375 3.671875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.96875 -1.640625 L 3.3125 -3 C 3.375 -3.25 3.609375 -4.171875 4.296875 -4.171875 C 4.34375 -4.171875 4.578125 -4.171875 4.796875 -4.03125 C 4.515625 -3.984375 4.3125 -3.734375 4.3125 -3.5 C 4.3125 -3.34375 4.421875 -3.15625 4.6875 -3.15625 C 4.90625 -3.15625 5.234375 -3.328125 5.234375 -3.734375 C 5.234375 -4.25 4.640625 -4.390625 4.3125 -4.390625 C 3.734375 -4.390625 3.390625 -3.859375 3.265625 -3.625 C 3.015625 -4.28125 2.484375 -4.390625 2.1875 -4.390625 C 1.15625 -4.390625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.921875 1.828125 -4.171875 2.171875 -4.171875 C 2.359375 -4.171875 2.703125 -4.078125 2.703125 -3.5 C 2.703125 -3.1875 2.546875 -2.53125 2.171875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.9375 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.828125 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.578125 2.265625 -0.640625 C 2.375 -0.28125 2.734375 0.109375 3.328125 0.109375 C 4.359375 0.109375 4.921875 -1.171875 4.921875 -1.421875 Z M 4.921875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-2">
<path style="stroke:none;" d="M 4.828125 -3.78125 C 4.859375 -3.921875 4.859375 -3.9375 4.859375 -4.015625 C 4.859375 -4.1875 4.71875 -4.28125 4.578125 -4.28125 C 4.46875 -4.28125 4.3125 -4.21875 4.234375 -4.0625 C 4.203125 -4.015625 4.125 -3.703125 4.09375 -3.53125 L 3.890625 -2.734375 L 3.4375 -0.953125 C 3.40625 -0.796875 2.96875 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.546875 1.703125 -0.90625 C 1.703125 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.265625 2.40625 -3.375 2.40625 -3.578125 C 2.40625 -4.015625 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.828125 -3.875 1.234375 -4.171875 1.5625 -4.171875 C 1.640625 -4.171875 1.8125 -4.171875 1.8125 -3.84375 C 1.8125 -3.609375 1.71875 -3.34375 1.640625 -3.15625 C 1.25 -2.109375 1.078125 -1.53125 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.28125 0.109375 C 2.671875 0.109375 3 -0.0625 3.28125 -0.34375 C 3.15625 0.171875 3.03125 0.671875 2.640625 1.1875 C 2.375 1.53125 2 1.8125 1.546875 1.8125 C 1.40625 1.8125 0.96875 1.78125 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.3125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.046875 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.03125 1.546875 2.03125 C 2.5625 2.03125 3.59375 1.125 3.875 0.015625 Z M 4.828125 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-3">
<path style="stroke:none;" d="M 7.984375 -4.265625 C 7.984375 -5.671875 7.140625 -6.78125 5.640625 -6.78125 L 2.3125 -6.78125 C 2.125 -6.78125 2.015625 -6.78125 2.015625 -6.59375 C 2.015625 -6.46875 2.109375 -6.46875 2.296875 -6.46875 C 2.4375 -6.46875 2.609375 -6.453125 2.734375 -6.453125 C 2.890625 -6.421875 2.953125 -6.40625 2.953125 -6.296875 C 2.953125 -6.25 2.9375 -6.21875 2.90625 -6.109375 L 1.578125 -0.78125 C 1.484375 -0.390625 1.453125 -0.3125 0.671875 -0.3125 C 0.5 -0.3125 0.390625 -0.3125 0.390625 -0.125 C 0.390625 0 0.484375 0 0.671875 0 L 3.953125 0 C 6.015625 0 7.984375 -2.09375 7.984375 -4.265625 Z M 7.109375 -4.640625 C 7.109375 -4.140625 6.921875 -2.515625 6.078125 -1.421875 C 5.78125 -1.0625 5 -0.3125 3.78125 -0.3125 L 2.65625 -0.3125 C 2.515625 -0.3125 2.5 -0.3125 2.4375 -0.3125 C 2.34375 -0.328125 2.3125 -0.34375 2.3125 -0.421875 C 2.3125 -0.453125 2.3125 -0.46875 2.359375 -0.640625 L 3.71875 -6.09375 C 3.8125 -6.4375 3.828125 -6.46875 4.25 -6.46875 L 5.3125 -6.46875 C 6.296875 -6.46875 7.109375 -5.9375 7.109375 -4.640625 Z M 7.109375 -4.640625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-4">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.671875 1.765625 -1.046875 1.375 -1.046875 C 1.046875 -1.046875 0.859375 -0.796875 0.859375 -0.53125 C 0.859375 -0.265625 1.046875 0 1.375 0 C 1.5 0 1.625 -0.046875 1.71875 -0.125 C 1.75 -0.15625 1.78125 -0.15625 1.78125 -0.15625 C 1.78125 -0.15625 1.796875 -0.15625 1.796875 -0.015625 C 1.796875 0.71875 1.453125 1.3125 1.125 1.640625 C 1.015625 1.75 1.015625 1.78125 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.21875 1.921875 2.015625 1.15625 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-5">
<path style="stroke:none;" d="M 7.15625 -0.203125 C 7.15625 -0.3125 7.046875 -0.3125 6.921875 -0.3125 C 6.3125 -0.3125 6.3125 -0.375 6.28125 -0.671875 L 5.671875 -6.859375 C 5.65625 -7.0625 5.65625 -7.109375 5.484375 -7.109375 C 5.328125 -7.109375 5.28125 -7.03125 5.234375 -6.9375 L 1.78125 -1.140625 C 1.375 -0.46875 0.984375 -0.34375 0.5625 -0.3125 C 0.4375 -0.296875 0.34375 -0.296875 0.34375 -0.109375 C 0.34375 -0.046875 0.390625 0 0.46875 0 C 0.75 0 1.046875 -0.03125 1.328125 -0.03125 C 1.65625 -0.03125 2 0 2.328125 0 C 2.375 0 2.515625 0 2.515625 -0.1875 C 2.515625 -0.296875 2.421875 -0.3125 2.34375 -0.3125 C 2.125 -0.328125 1.890625 -0.40625 1.890625 -0.65625 C 1.890625 -0.78125 1.9375 -0.890625 2.03125 -1.015625 C 2.09375 -1.140625 2.109375 -1.140625 2.78125 -2.296875 L 5.265625 -2.296875 C 5.28125 -2.078125 5.421875 -0.734375 5.421875 -0.640625 C 5.421875 -0.34375 4.90625 -0.3125 4.71875 -0.3125 C 4.578125 -0.3125 4.46875 -0.3125 4.46875 -0.109375 C 4.46875 0 4.609375 0 4.609375 0 C 5.015625 0 5.453125 -0.03125 5.859375 -0.03125 C 6.109375 -0.03125 6.734375 0 6.96875 0 C 7.03125 0 7.15625 0 7.15625 -0.203125 Z M 5.234375 -2.59375 L 2.96875 -2.59375 L 4.921875 -5.875 Z M 5.234375 -2.59375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-6">
<path style="stroke:none;" d="M 6.375 -2.453125 C 6.375 -2.484375 6.34375 -2.5625 6.265625 -2.5625 C 6.171875 -2.5625 6.15625 -2.515625 6.09375 -2.34375 C 5.75 -1.4375 5.3125 -0.3125 3.609375 -0.3125 L 2.671875 -0.3125 C 2.53125 -0.3125 2.515625 -0.3125 2.453125 -0.3125 C 2.34375 -0.328125 2.328125 -0.34375 2.328125 -0.421875 C 2.328125 -0.453125 2.328125 -0.46875 2.375 -0.640625 L 3.703125 -6 C 3.796875 -6.359375 3.828125 -6.46875 4.765625 -6.46875 C 5.0625 -6.46875 5.140625 -6.46875 5.140625 -6.65625 C 5.140625 -6.78125 5.03125 -6.78125 4.984375 -6.78125 L 3.515625 -6.75 L 2.1875 -6.78125 C 2.125 -6.78125 2 -6.78125 2 -6.578125 C 2 -6.46875 2.09375 -6.46875 2.28125 -6.46875 C 2.28125 -6.46875 2.484375 -6.46875 2.65625 -6.453125 C 2.84375 -6.421875 2.921875 -6.421875 2.921875 -6.296875 C 2.921875 -6.25 2.921875 -6.21875 2.890625 -6.109375 L 1.5625 -0.78125 C 1.453125 -0.390625 1.4375 -0.3125 0.65625 -0.3125 C 0.484375 -0.3125 0.390625 -0.3125 0.390625 -0.109375 C 0.390625 0 0.46875 0 0.65625 0 L 5.25 0 C 5.484375 0 5.5 0 5.5625 -0.171875 L 6.34375 -2.3125 C 6.375 -2.421875 6.375 -2.453125 6.375 -2.453125 Z M 6.375 -2.453125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-7">
<path style="stroke:none;" d="M 3.8125 1.71875 C 3.8125 1.625 3.703125 1.625 3.546875 1.625 C 3.078125 1.625 3.078125 1.546875 3.078125 1.453125 C 3.078125 1.390625 3.09375 1.328125 3.109375 1.234375 L 4.484375 -4.28125 C 4.484375 -4.3125 4.453125 -4.375 4.390625 -4.375 C 4.28125 -4.375 3.875 -3.984375 3.703125 -3.6875 C 3.5 -4.234375 3.109375 -4.390625 2.78125 -4.390625 C 1.625 -4.390625 0.390625 -2.921875 0.390625 -1.484375 C 0.390625 -0.5 0.984375 0.109375 1.703125 0.109375 C 2.140625 0.109375 2.515625 -0.125 2.875 -0.484375 L 2.4375 1.296875 C 2.34375 1.5625 2.265625 1.609375 1.71875 1.625 C 1.59375 1.625 1.484375 1.625 1.484375 1.8125 C 1.484375 1.8125 1.484375 1.921875 1.625 1.921875 C 1.9375 1.921875 2.28125 1.890625 2.609375 1.890625 C 2.953125 1.890625 3.296875 1.921875 3.625 1.921875 C 3.6875 1.921875 3.8125 1.921875 3.8125 1.71875 Z M 3.578125 -3.296875 C 3.578125 -3.234375 3.03125 -1.0625 3 -1.015625 C 2.84375 -0.75 2.296875 -0.109375 1.734375 -0.109375 C 1.140625 -0.109375 1.09375 -0.875 1.09375 -1.046875 C 1.09375 -1.515625 1.390625 -2.59375 1.5625 -3.015625 C 1.859375 -3.75 2.375 -4.171875 2.78125 -4.171875 C 3.4375 -4.171875 3.578125 -3.359375 3.578125 -3.296875 Z M 3.578125 -3.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-8">
<path style="stroke:none;" d="M 6.96875 -2.140625 C 6.96875 -2.859375 6.390625 -3.4375 5.421875 -3.546875 C 6.453125 -3.734375 7.5 -4.46875 7.5 -5.40625 C 7.5 -6.140625 6.84375 -6.78125 5.65625 -6.78125 L 2.328125 -6.78125 C 2.140625 -6.78125 2.03125 -6.78125 2.03125 -6.578125 C 2.03125 -6.46875 2.125 -6.46875 2.3125 -6.46875 C 2.3125 -6.46875 2.515625 -6.46875 2.6875 -6.453125 C 2.875 -6.421875 2.953125 -6.421875 2.953125 -6.296875 C 2.953125 -6.25 2.953125 -6.21875 2.921875 -6.109375 L 1.59375 -0.78125 C 1.484375 -0.390625 1.46875 -0.3125 0.6875 -0.3125 C 0.515625 -0.3125 0.421875 -0.3125 0.421875 -0.109375 C 0.421875 0 0.5 0 0.6875 0 L 4.234375 0 C 5.796875 0 6.96875 -1.171875 6.96875 -2.140625 Z M 6.59375 -5.453125 C 6.59375 -4.578125 5.75 -3.625 4.53125 -3.625 L 3.078125 -3.625 L 3.703125 -6.09375 C 3.796875 -6.4375 3.8125 -6.46875 4.234375 -6.46875 L 5.515625 -6.46875 C 6.390625 -6.46875 6.59375 -5.890625 6.59375 -5.453125 Z M 6.046875 -2.25 C 6.046875 -1.265625 5.15625 -0.3125 3.984375 -0.3125 L 2.640625 -0.3125 C 2.5 -0.3125 2.484375 -0.3125 2.421875 -0.3125 C 2.328125 -0.328125 2.296875 -0.34375 2.296875 -0.421875 C 2.296875 -0.453125 2.296875 -0.46875 2.34375 -0.640625 L 3.03125 -3.40625 L 4.90625 -3.40625 C 5.859375 -3.40625 6.046875 -2.671875 6.046875 -2.25 Z M 6.046875 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph0-9">
<path style="stroke:none;" d="M 6.421875 -2.375 C 6.421875 -2.484375 6.296875 -2.484375 6.296875 -2.484375 C 6.234375 -2.484375 6.1875 -2.453125 6.171875 -2.375 C 6.078125 -2.09375 5.859375 -1.390625 5.171875 -0.8125 C 4.484375 -0.265625 3.859375 -0.09375 3.34375 -0.09375 C 2.453125 -0.09375 1.40625 -0.609375 1.40625 -2.15625 C 1.40625 -2.71875 1.609375 -4.328125 2.59375 -5.484375 C 3.203125 -6.1875 4.140625 -6.6875 5.015625 -6.6875 C 6.03125 -6.6875 6.625 -5.921875 6.625 -4.765625 C 6.625 -4.375 6.59375 -4.359375 6.59375 -4.265625 C 6.59375 -4.171875 6.703125 -4.171875 6.734375 -4.171875 C 6.859375 -4.171875 6.859375 -4.1875 6.921875 -4.359375 L 7.546875 -6.890625 C 7.546875 -6.921875 7.515625 -7 7.4375 -7 C 7.40625 -7 7.390625 -6.984375 7.28125 -6.875 L 6.59375 -6.109375 C 6.5 -6.25 6.046875 -7 4.9375 -7 C 2.734375 -7 0.5 -4.796875 0.5 -2.5 C 0.5 -0.859375 1.671875 0.21875 3.1875 0.21875 C 4.046875 0.21875 4.796875 -0.171875 5.328125 -0.640625 C 6.25 -1.453125 6.421875 -2.34375 6.421875 -2.375 Z M 6.421875 -2.375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph1-1">
<path style="stroke:none;" d="M 3.28125 2.375 C 3.28125 2.34375 3.28125 2.328125 3.109375 2.15625 C 1.875 0.90625 1.5625 -0.96875 1.5625 -2.484375 C 1.5625 -4.203125 1.9375 -5.9375 3.15625 -7.171875 C 3.28125 -7.296875 3.28125 -7.3125 3.28125 -7.34375 C 3.28125 -7.40625 3.25 -7.4375 3.1875 -7.4375 C 3.078125 -7.4375 2.1875 -6.765625 1.609375 -5.5 C 1.09375 -4.421875 0.984375 -3.3125 0.984375 -2.484375 C 0.984375 -1.703125 1.09375 -0.5 1.640625 0.609375 C 2.234375 1.828125 3.078125 2.484375 3.1875 2.484375 C 3.25 2.484375 3.28125 2.453125 3.28125 2.375 Z M 3.28125 2.375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph1-2">
<path style="stroke:none;" d="M 4.5625 -3.171875 C 4.5625 -3.96875 4.515625 -4.765625 4.171875 -5.5 C 3.703125 -6.453125 2.890625 -6.609375 2.484375 -6.609375 C 1.890625 -6.609375 1.15625 -6.34375 0.75 -5.421875 C 0.4375 -4.75 0.390625 -3.96875 0.390625 -3.171875 C 0.390625 -2.4375 0.421875 -1.53125 0.828125 -0.78125 C 1.265625 0.015625 1.984375 0.21875 2.46875 0.21875 C 3 0.21875 3.765625 0.015625 4.203125 -0.9375 C 4.515625 -1.625 4.5625 -2.390625 4.5625 -3.171875 Z M 3.734375 -3.296875 C 3.734375 -2.546875 3.734375 -1.875 3.625 -1.234375 C 3.484375 -0.296875 2.921875 0 2.46875 0 C 2.078125 0 1.5 -0.25 1.3125 -1.203125 C 1.203125 -1.796875 1.203125 -2.703125 1.203125 -3.296875 C 1.203125 -3.921875 1.203125 -4.578125 1.296875 -5.125 C 1.484375 -6.296875 2.21875 -6.390625 2.46875 -6.390625 C 2.796875 -6.390625 3.453125 -6.21875 3.640625 -5.234375 C 3.734375 -4.671875 3.734375 -3.921875 3.734375 -3.296875 Z M 3.734375 -3.296875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph1-3">
<path style="stroke:none;" d="M 2.875 -2.484375 C 2.875 -3.25 2.765625 -4.453125 2.21875 -5.578125 C 1.625 -6.796875 0.765625 -7.4375 0.671875 -7.4375 C 0.609375 -7.4375 0.5625 -7.40625 0.5625 -7.34375 C 0.5625 -7.3125 0.5625 -7.296875 0.75 -7.109375 C 1.71875 -6.125 2.296875 -4.546875 2.296875 -2.484375 C 2.296875 -0.78125 1.921875 0.96875 0.6875 2.21875 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.4375 0.609375 2.484375 0.671875 2.484375 C 0.765625 2.484375 1.65625 1.8125 2.25 0.546875 C 2.75 -0.546875 2.875 -1.640625 2.875 -2.484375 Z M 2.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph1-4">
<path style="stroke:none;" d="M 7.15625 -2.484375 C 7.15625 -2.671875 6.96875 -2.671875 6.828125 -2.671875 L 4.0625 -2.671875 L 4.0625 -5.453125 C 4.0625 -5.59375 4.0625 -5.78125 3.859375 -5.78125 C 3.65625 -5.78125 3.65625 -5.59375 3.65625 -5.453125 L 3.65625 -2.671875 L 0.890625 -2.671875 C 0.75 -2.671875 0.5625 -2.671875 0.5625 -2.484375 C 0.5625 -2.28125 0.75 -2.28125 0.890625 -2.28125 L 3.65625 -2.28125 L 3.65625 0.5 C 3.65625 0.640625 3.65625 0.828125 3.859375 0.828125 C 4.0625 0.828125 4.0625 0.640625 4.0625 0.5 L 4.0625 -2.28125 L 6.828125 -2.28125 C 6.96875 -2.28125 7.15625 -2.28125 7.15625 -2.484375 Z M 7.15625 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph1-5">
<path style="stroke:none;" d="M 4.453125 -1.71875 L 4.203125 -1.71875 C 4.15625 -1.421875 4.09375 -0.984375 3.984375 -0.84375 C 3.921875 -0.765625 3.265625 -0.765625 3.046875 -0.765625 L 1.265625 -0.765625 L 2.3125 -1.78125 C 3.859375 -3.15625 4.453125 -3.6875 4.453125 -4.6875 C 4.453125 -5.8125 3.5625 -6.609375 2.34375 -6.609375 C 1.234375 -6.609375 0.5 -5.6875 0.5 -4.8125 C 0.5 -4.25 0.984375 -4.25 1.015625 -4.25 C 1.1875 -4.25 1.53125 -4.375 1.53125 -4.78125 C 1.53125 -5.046875 1.359375 -5.296875 1.015625 -5.296875 C 0.9375 -5.296875 0.90625 -5.296875 0.890625 -5.28125 C 1.109375 -5.9375 1.640625 -6.296875 2.21875 -6.296875 C 3.125 -6.296875 3.546875 -5.5 3.546875 -4.6875 C 3.546875 -3.890625 3.0625 -3.109375 2.515625 -2.484375 L 0.609375 -0.359375 C 0.5 -0.265625 0.5 -0.234375 0.5 0 L 4.171875 0 Z M 4.453125 -1.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph2-1">
<path style="stroke:none;" d="M 6.890625 -2.484375 C 6.890625 -2.671875 6.703125 -2.671875 6.5625 -2.671875 L 1.15625 -2.671875 C 1.015625 -2.671875 0.828125 -2.671875 0.828125 -2.484375 C 0.828125 -2.28125 1.015625 -2.28125 1.15625 -2.28125 L 6.5625 -2.28125 C 6.703125 -2.28125 6.890625 -2.28125 6.890625 -2.484375 Z M 6.890625 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph3-1">
<path style="stroke:none;" d="M 7.8125 -2.546875 C 7.8125 -2.71875 7.625 -2.71875 7.578125 -2.71875 C 7.40625 -2.71875 7.40625 -2.703125 7.28125 -2.4375 C 6.6875 -1.125 6.171875 -0.46875 4.5 -0.46875 L 3.203125 -0.46875 C 3.0625 -0.46875 3.03125 -0.46875 2.96875 -0.46875 L 3.65625 -3.265625 L 4.34375 -3.265625 C 4.9375 -3.265625 5.125 -3.171875 5.125 -2.84375 C 5.125 -2.671875 5.0625 -2.40625 5.046875 -2.375 L 5.046875 -2.28125 C 5.046875 -2.140625 5.171875 -2.109375 5.265625 -2.109375 C 5.453125 -2.109375 5.46875 -2.15625 5.515625 -2.34375 L 6.078125 -4.546875 C 6.109375 -4.6875 6.109375 -4.71875 6.109375 -4.71875 C 6.109375 -4.890625 5.90625 -4.890625 5.875 -4.890625 C 5.6875 -4.890625 5.671875 -4.828125 5.609375 -4.640625 C 5.421875 -3.890625 5.125 -3.734375 4.375 -3.734375 L 3.78125 -3.734375 L 4.40625 -6.265625 C 4.53125 -6.28125 4.640625 -6.28125 4.75 -6.28125 L 6.046875 -6.28125 C 7.125 -6.28125 7.5625 -6.046875 7.5625 -5.09375 C 7.5625 -4.921875 7.515625 -4.703125 7.515625 -4.546875 C 7.515625 -4.359375 7.703125 -4.359375 7.765625 -4.359375 C 7.96875 -4.359375 7.984375 -4.453125 8 -4.640625 L 8.171875 -6.40625 L 8.1875 -6.5625 C 8.1875 -6.75 8.015625 -6.75 7.859375 -6.75 L 2.359375 -6.75 C 2.15625 -6.75 2.140625 -6.734375 2.09375 -6.703125 C 2.03125 -6.640625 2 -6.453125 2 -6.453125 C 2 -6.28125 2.140625 -6.28125 2.40625 -6.28125 C 2.625 -6.28125 2.8125 -6.265625 3.015625 -6.265625 L 1.625 -0.671875 C 1.578125 -0.5 1.5625 -0.5 1.390625 -0.46875 C 1.21875 -0.46875 1.015625 -0.46875 0.859375 -0.46875 C 0.609375 -0.46875 0.578125 -0.46875 0.546875 -0.453125 C 0.421875 -0.375 0.421875 -0.21875 0.421875 -0.171875 C 0.421875 0 0.59375 0 0.765625 0 L 6.421875 0 C 6.671875 0 6.703125 0 6.796875 -0.203125 L 7.75 -2.359375 C 7.8125 -2.484375 7.8125 -2.546875 7.8125 -2.546875 Z M 7.8125 -2.546875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph4-1">
<path style="stroke:none;" d="M 5.625 -0.140625 C 5.625 -0.25 5.546875 -0.25 5.4375 -0.25 C 5.03125 -0.25 5.015625 -0.3125 5 -0.46875 L 4.390625 -4.765625 C 4.359375 -4.90625 4.359375 -4.953125 4.21875 -4.953125 C 4.09375 -4.953125 4.046875 -4.890625 3.984375 -4.796875 L 1.4375 -0.828125 C 1.1875 -0.453125 0.96875 -0.28125 0.5625 -0.25 C 0.484375 -0.25 0.390625 -0.25 0.390625 -0.109375 C 0.390625 -0.03125 0.453125 0 0.5 0 C 0.671875 0 0.90625 -0.03125 1.09375 -0.03125 C 1.3125 -0.03125 1.59375 0 1.8125 0 C 1.84375 0 1.953125 0 1.953125 -0.15625 C 1.953125 -0.25 1.859375 -0.25 1.828125 -0.25 C 1.765625 -0.25 1.515625 -0.265625 1.515625 -0.453125 C 1.515625 -0.546875 1.59375 -0.65625 1.625 -0.71875 L 2.1875 -1.578125 L 4.171875 -1.578125 L 4.34375 -0.4375 C 4.3125 -0.359375 4.265625 -0.25 3.859375 -0.25 C 3.78125 -0.25 3.671875 -0.25 3.671875 -0.09375 C 3.671875 -0.0625 3.703125 0 3.796875 0 C 3.984375 0 4.484375 -0.03125 4.6875 -0.03125 L 5.09375 -0.015625 C 5.21875 -0.015625 5.375 0 5.5 0 C 5.578125 0 5.625 -0.0625 5.625 -0.140625 Z M 4.140625 -1.828125 L 2.34375 -1.828125 L 3.8125 -4.109375 Z M 4.140625 -1.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph4-2">
<path style="stroke:none;" d="M 5.4375 -3.046875 L 5.859375 -4.796875 C 5.859375 -4.828125 5.84375 -4.890625 5.765625 -4.890625 C 5.71875 -4.890625 5.703125 -4.875 5.640625 -4.8125 L 5.140625 -4.265625 C 5.078125 -4.359375 4.6875 -4.890625 3.828125 -4.890625 C 2.140625 -4.890625 0.484375 -3.390625 0.484375 -1.828125 C 0.484375 -0.6875 1.375 0.140625 2.625 0.140625 C 3 0.140625 3.671875 0.0625 4.375 -0.546875 C 4.9375 -1.015625 5.078125 -1.609375 5.078125 -1.671875 C 5.078125 -1.765625 5 -1.765625 4.96875 -1.765625 C 4.875 -1.765625 4.859375 -1.71875 4.84375 -1.640625 C 4.546875 -0.703125 3.578125 -0.109375 2.734375 -0.109375 C 2 -0.109375 1.1875 -0.5 1.1875 -1.609375 C 1.1875 -1.8125 1.234375 -2.90625 2.03125 -3.78125 C 2.515625 -4.3125 3.234375 -4.640625 3.90625 -4.640625 C 4.703125 -4.640625 5.1875 -4.046875 5.1875 -3.28125 C 5.1875 -3.078125 5.15625 -3.03125 5.15625 -2.984375 C 5.15625 -2.90625 5.25 -2.90625 5.28125 -2.90625 C 5.390625 -2.90625 5.390625 -2.921875 5.4375 -3.046875 Z M 5.4375 -3.046875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph4-3">
<path style="stroke:none;" d="M 5.46875 -1.484375 C 5.46875 -1.984375 5.015625 -2.40625 4.28125 -2.484375 C 5.125 -2.640625 5.8125 -3.15625 5.8125 -3.765625 C 5.8125 -4.296875 5.28125 -4.75 4.375 -4.75 L 1.84375 -4.75 C 1.71875 -4.75 1.625 -4.75 1.625 -4.59375 C 1.625 -4.5 1.703125 -4.5 1.84375 -4.5 C 1.84375 -4.5 1.984375 -4.5 2.109375 -4.484375 C 2.265625 -4.46875 2.28125 -4.453125 2.28125 -4.390625 C 2.28125 -4.390625 2.28125 -4.34375 2.25 -4.234375 L 1.328125 -0.546875 C 1.265625 -0.3125 1.25 -0.25 0.703125 -0.25 C 0.59375 -0.25 0.5 -0.25 0.5 -0.109375 C 0.5 0 0.578125 0 0.703125 0 L 3.40625 0 C 4.5625 0 5.46875 -0.796875 5.46875 -1.484375 Z M 5.140625 -3.765625 C 5.140625 -3.203125 4.5 -2.5625 3.578125 -2.5625 L 2.4375 -2.5625 L 2.859375 -4.265625 C 2.90625 -4.484375 2.921875 -4.5 3.21875 -4.5 L 4.265625 -4.5 C 4.984375 -4.5 5.140625 -4.03125 5.140625 -3.765625 Z M 4.765625 -1.53125 C 4.765625 -0.84375 4.0625 -0.25 3.21875 -0.25 L 2.09375 -0.25 C 1.890625 -0.25 1.875 -0.25 1.875 -0.3125 C 1.875 -0.3125 1.875 -0.359375 1.90625 -0.46875 L 2.390625 -2.375 L 3.859375 -2.375 C 4.515625 -2.375 4.765625 -1.9375 4.765625 -1.53125 Z M 4.765625 -1.53125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph5-1">
<path style="stroke:none;" d="M 2.609375 -0.875 L 2.609375 -1.265625 L 2.375 -1.265625 L 2.375 -0.890625 C 2.375 -0.40625 2.15625 -0.15625 1.875 -0.15625 C 1.390625 -0.15625 1.390625 -0.734375 1.390625 -0.859375 L 1.390625 -2.75 L 2.484375 -2.75 L 2.484375 -3 L 1.390625 -3 L 1.390625 -4.28125 L 1.15625 -4.28125 C 1.15625 -3.65625 0.875 -2.96875 0.203125 -2.9375 L 0.203125 -2.75 L 0.84375 -2.75 L 0.84375 -0.875 C 0.84375 -0.09375 1.4375 0.0625 1.828125 0.0625 C 2.28125 0.0625 2.609375 -0.328125 2.609375 -0.875 Z M 2.609375 -0.875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez02b_d1-glyph5-2">
<path style="stroke:none;" d="M 3.671875 -1.484375 C 3.671875 -2.34375 2.9375 -3.09375 1.96875 -3.09375 C 1.015625 -3.09375 0.265625 -2.34375 0.265625 -1.484375 C 0.265625 -0.625 1.03125 0.0625 1.96875 0.0625 C 2.90625 0.0625 3.671875 -0.625 3.671875 -1.484375 Z M 3.046875 -1.546875 C 3.046875 -1.203125 3.03125 -0.84375 2.828125 -0.5625 C 2.640625 -0.296875 2.3125 -0.15625 1.96875 -0.15625 C 1.71875 -0.15625 1.34375 -0.234375 1.109375 -0.578125 C 0.921875 -0.859375 0.90625 -1.21875 0.90625 -1.546875 C 0.90625 -1.84375 0.90625 -2.25 1.15625 -2.546875 C 1.328125 -2.75 1.625 -2.90625 1.96875 -2.90625 C 2.390625 -2.90625 2.671875 -2.71875 2.828125 -2.5 C 3.03125 -2.21875 3.046875 -1.875 3.046875 -1.546875 Z M 3.046875 -1.546875 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez02b_d1-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.0000403991 -0.00060362 L -0.0000403991 76.536905 L 76.537468 76.536905 L 76.537468 -0.00060362 L -0.0000403991 -0.00060362 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.0000403991 -0.00060362 L 76.537468 76.536905 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -66.333593 -0.00060362 L 116.557208 -0.00060362 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.549428 3.109211 C -2.08276 1.242538 -1.047463 0.364103 -0.000400447 -0.00060362 C -1.047463 -0.361389 -2.08276 -1.243745 -2.549428 -3.110418 " transform="matrix(0.99609,0,0,-0.99609,186.937899,117.42518)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-1" x="184.497866" y="125.401872"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0000403991 -91.844045 L -0.0000403991 106.35269 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.549237 3.109855 C -2.082569 1.243182 -1.047271 0.364747 -0.000209018 0.0000403991 C -1.047271 -0.364667 -2.082569 -1.243101 -2.549237 -3.109774 " transform="matrix(0,-0.99609,-0.99609,0,70.43754,11.089636)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-2" x="61.511574" y="11.86549"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-3" x="35.685937" y="110.736433"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-1" x="44.177608" y="110.736433"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph1-2" x="48.036915" y="110.736433"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-4" x="52.998985" y="110.736433"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-2" x="57.408677" y="110.736433"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph1-3" x="62.370502" y="110.736433"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 72.582031 117.425781 C 72.582031 116.242188 71.621094 115.28125 70.4375 115.28125 C 69.253906 115.28125 68.292969 116.242188 68.292969 117.425781 C 68.292969 118.609375 69.253906 119.570312 70.4375 119.570312 C 71.621094 119.570312 72.582031 118.609375 72.582031 117.425781 Z M 72.582031 117.425781 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;" d="M 73.296875 41.1875 C 73.296875 39.609375 72.015625 38.328125 70.4375 38.328125 C 68.859375 38.328125 67.578125 39.609375 67.578125 41.1875 C 67.578125 42.765625 68.859375 44.046875 70.4375 44.046875 C 72.015625 44.046875 73.296875 42.765625 73.296875 41.1875 Z M 73.296875 41.1875 "/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-5" x="34.241605" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-1" x="41.684393" y="22.440983"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph1-2" x="45.543701" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-4" x="50.504774" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-6" x="54.918814" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-3" x="61.668956" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-4" x="53.023887" y="34.349244"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-7" x="60.742592" y="34.349244"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;" d="M 149.53125 41.1875 C 149.53125 39.609375 148.253906 38.328125 146.675781 38.328125 C 145.097656 38.328125 143.816406 39.609375 143.816406 41.1875 C 143.816406 42.765625 145.097656 44.046875 146.675781 44.046875 C 148.253906 44.046875 149.53125 42.765625 149.53125 41.1875 Z M 149.53125 41.1875 "/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-8" x="151.584049" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-1" x="159.608554" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-6" x="163.468404" y="22.440983"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph0-4" x="170.222441" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-6" x="174.636481" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-3" x="181.386079" y="22.440983"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-4" x="151.584049" y="34.349244"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph1-5" x="159.302664" y="34.349244"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-7" x="164.26428" y="34.349244"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;" d="M 149.53125 117.425781 C 149.53125 115.847656 148.253906 114.566406 146.675781 114.566406 C 145.097656 114.566406 143.816406 115.847656 143.816406 117.425781 C 143.816406 119.003906 145.097656 120.285156 146.675781 120.285156 C 148.253906 120.285156 149.53125 119.003906 149.53125 117.425781 Z M 149.53125 117.425781 "/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-9" x="151.584049" y="129.776702"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-1" x="159.386425" y="129.776702"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-6" x="163.24528" y="129.776702"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph0-4" x="169.999317" y="129.776702"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph1-2" x="174.409462" y="129.776702"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph1-3" x="179.371287" y="129.776702"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph2-1" x="151.584049" y="141.685959"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph0-7" x="159.301758" y="141.685959"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0000403991 -0.00060362 L -0.0000403991 -39.624264 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -3.028946 3.831345 C -2.476003 1.533298 -1.240705 0.44702 -0.00148538 -0.0000403991 C -1.240705 -0.447101 -2.476003 -1.533379 -3.028946 -3.831426 " transform="matrix(0,0.99609,0.99609,0,70.43754,157.489761)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph3-1" x="76.325431" y="160.744158"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph4-1" x="84.905754" y="162.233313"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0000403991 -0.00060362 L 39.62362 -0.00060362 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -3.02959 3.830782 C -2.476647 1.532735 -1.241349 0.446457 0.00179218 -0.00060362 C -1.241349 -0.447664 -2.476647 -1.533942 -3.02959 -3.831989 " transform="matrix(0.99609,0,0,-0.99609,110.502121,117.42518)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph3-1" x="103.469892" y="110.04913"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph4-2" x="112.050215" y="111.537289"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0000403991 -0.00060362 L -28.011898 -28.012461 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -3.029265 3.832689 C -2.474664 1.531096 -1.240678 0.446852 -0.00114515 0.000398261 C -1.240678 -0.446055 -2.474664 -1.5303 -3.029265 -3.831893 " transform="matrix(-0.704336,0.704336,0.704336,0.704336,42.112194,145.750526)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph3-1" x="21.67692" y="157.584559"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph4-3" x="30.257244" y="159.072718"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M -0.0000403991 -0.00060362 L 11.756861 -68.49887 " transform="matrix(0.99609,0,0,-0.99609,70.43754,117.42518)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -3.029862 3.830206 C -2.477479 1.530985 -1.24289 0.447662 0.00121729 -0.000642814 C -1.241418 -0.447884 -2.474244 -1.533461 -3.027571 -3.829915 " transform="matrix(0.168499,0.981697,0.981697,-0.168499,82.250426,186.24479)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph3-1" x="86.955708" y="198.243975"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez02b_d1-glyph5-1" x="95.536031" y="199.732134"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph5-2" x="98.636965" y="199.732134"/>
  <use xlink:href="#fisica2_lez02b_d1-glyph5-1" x="102.592322" y="199.732134"/>
</g>
</g>
</svg></figure></p>
            <p>Nella figura i tre contributi sono disegnati in scala comune e hanno tutti lo stesso modulo $K$; la risultante tratteggiata ha modulo $\\sqrt{3}\\,K$ e forma con l'asse $x$ l'angolo di circa $-80.3^\\circ$.</p>`
          }
        ]
      },

      {
        id: "s02-componenti-vs-modulo",
        type: "alert_box",
        title: "Componenti e modulo: un errore da non fare",
        icon: "🚨",
        content: `<p>Le due <em>componenti</em> di $\\boldsymbol{E}_B$ hanno valore assoluto $K/\\sqrt{2}$, ma questo <strong>non</strong> è il modulo del vettore. Il modulo si ottiene con il teorema di Pitagora (e ricordando che $K \\gt 0$ perché $q \\gt 0$):</p>
        <p>$$\\|\\boldsymbol{E}_B\\| = \\sqrt{\\left(-\\frac{K}{\\sqrt{2}}\\right)^2 + \\left(-\\frac{K}{\\sqrt{2}}\\right)^2} = \\sqrt{\\frac{K^2}{2} + \\frac{K^2}{2}} = \\sqrt{K^2} = K$$</p>
        <p>Dunque</p>
        <p>$$\\|\\boldsymbol{E}_A\\| = \\|\\boldsymbol{E}_B\\| = \\|\\boldsymbol{E}_C\\| = K = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}$$</p>
        <p>i tre contributi hanno esattamente la stessa intensità. La ragione è un'<strong>esatta compensazione</strong>: la carica in B è doppia ($2q$ invece di $q$), ma si trova a distanza $L\\sqrt{2}$, cioè con $r_B^2 = 2L^2$ doppio di $L^2$; il fattore 2 al numeratore e il fattore 2 al denominatore si cancellano. Ciò che distingue $\\boldsymbol{E}_B$ dagli altri due contributi non è quindi il modulo, ma soltanto la <em>direzione</em>: $\\boldsymbol{E}_B$ è diretto lungo la diagonale, a $-135^\\circ$ dall'asse $x$, e per questo le sue proiezioni sugli assi valgono $K/\\sqrt{2}$ ciascuna.</p>`
      },

      {
        id: "s02-distribuzioni-continue",
        type: "section",
        title: "Distribuzioni Continue di Carica",
        icon: "🧵",
        content: `<p>Cosa succede se la carica non è distribuita in punti discreti, ma è "spalmata" su un filo, una superficie o all'interno di un volume? In questo caso la <strong>sommatoria</strong> del principio di sovrapposizione diventa un <strong>integrale</strong>.</p>
        <p>Per descrivere come la carica è distribuita introduciamo il concetto di <strong>densità di carica</strong>.</p>`,
        subsections: [
          {
            subtitle: "Definizione: densità di carica",
            content: `<p>A seconda della dimensionalità della distribuzione:</p>
            <ul>
              <li><strong>Densità lineare $\\lambda$</strong> — carica per unità di lunghezza: $\\lambda = \\dfrac{dQ}{dL}$, misurata in $\\text{C/m}$.</li>
              <li><strong>Densità superficiale $\\sigma$</strong> — carica per unità di area: $\\sigma = \\dfrac{dQ}{dS}$, misurata in $\\text{C/m}^2$.</li>
              <li><strong>Densità volumetrica $\\rho$</strong> — carica per unità di volume: $\\rho = \\dfrac{dQ}{dV}$, misurata in $\\text{C/m}^3$.</li>
            </ul>`
          },
          {
            subtitle: "Campo di una distribuzione continua",
            content: `<p>L'idea è di suddividere la distribuzione continua in elementi infinitesimali di carica $dQ$. Ognuno si comporta come una carica puntiforme e genera nel punto di osservazione P un campo infinitesimo $d\\boldsymbol{E}$.</p>
            <p>Sia P il punto in cui si vuole calcolare il campo (punto <em>fisso</em>) e sia $dQ$ l'elemento infinitesimo di carica (punto <em>sorgente</em>, che si muove lungo tutta la distribuzione). Poniamo $r$ = distanza tra $dQ$ e P, e $\\hat{\\boldsymbol{u}}_r$ = versore diretto <em>dall'elemento</em> $dQ$ <em>verso</em> P. Allora</p>
            <p>$$d\\boldsymbol{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{dQ}{r^2} \\hat{\\boldsymbol{u}}_r$$</p>
            <p>e il campo totale si ottiene integrando (cioè sommando) tutti questi contributi:</p>
            <p>$$\\boldsymbol{E}(P) = \\int_{\\text{distribuzione}} d\\boldsymbol{E} = \\int \\frac{1}{4\\pi\\varepsilon_0} \\frac{dQ}{r^2} \\hat{\\boldsymbol{u}}_r$$</p>
            <p>A seconda del tipo di distribuzione, l'elemento di carica va espresso tramite la densità corrispondente:</p>
            <p>$$dQ = \\lambda \\, dL \\ (\\text{linea}), \\qquad dQ = \\sigma \\, dS \\ (\\text{superficie}), \\qquad dQ = \\rho \\, dV \\ (\\text{volume})$$</p>`
          },
          {
            subtitle: "Che cosa non si può portare fuori dall'integrale",
            content: `<p>È essenziale rendersi conto che, mentre P resta fisso, al variare dell'elemento sorgente cambiano <em>sia</em> la distanza $r$, <em>sia</em> la direzione del versore $\\hat{\\boldsymbol{u}}_r$, <em>sia</em> (se la distribuzione non è uniforme) la densità $\\lambda$, $\\sigma$ o $\\rho$. Per questo motivo <strong>nessuno di questi tre oggetti può essere portato fuori dall'integrale senza una giustificazione</strong>: si può farlo solo quando una particolare geometria o simmetria rende quella quantità effettivamente costante lungo l'intera distribuzione.</p>
            <p>Questo integrale è un integrale <strong>vettoriale</strong> e può essere molto complesso da risolvere. Fortunatamente, in molti problemi di interesse fisico la simmetria della distribuzione permette di semplificare notevolmente il calcolo: tipicamente si sceglie un sistema di riferimento in cui una o più componenti di $d\\boldsymbol{E}$ si cancellano a coppie, così che rimanga da integrare una sola componente scalare.</p>`
          }
        ],
        formulas: [
          { label: "Contributo infinitesimo", latex: "d\\boldsymbol{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{dQ}{r^2} \\hat{\\boldsymbol{u}}_r" },
          { label: "Densità lineare", latex: "\\lambda = \\frac{dQ}{dL}" },
          { label: "Densità superficiale", latex: "\\sigma = \\frac{dQ}{dS}" },
          { label: "Densità volumetrica", latex: "\\rho = \\frac{dQ}{dV}" }
        ]
      },

      {
        id: "s02-int-filo",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Impostazione di un integrale su una distribuzione lineare (esempio illustrativo, non svolto a lezione).</strong> Per vedere concretamente come si usano le formule precedenti, impostiamo il caso più semplice possibile: un filo rettilineo di lunghezza $\\ell$, con densità lineare uniforme $\\lambda$, disposto sull'asse $x$ tra $x=0$ e $x=\\ell$. Vogliamo il campo nel punto $P(d,0)$ con $d \\gt \\ell$, cioè in un punto dell'asse del filo esterno ad esso.</p>
        <p><em>Scelta della variabile di integrazione.</em> Individuiamo l'elemento sorgente con la sua ascissa $x$, con $x \\in [0,\\ell]$: questa è la variabile di integrazione.</p>
        <p><em>Elemento di carica.</em> Poiché la distribuzione è lineare, $dQ = \\lambda\\, dx$, con $\\lambda$ costante (e quindi, in questo caso particolare, estraibile dall'integrale).</p>
        <p><em>Distanza e versore.</em> L'elemento sta in $(x,0)$ e P sta in $(d,0)$, quindi</p>
        <p>$$r = d - x \\gt 0, \\qquad \\hat{\\boldsymbol{u}}_r = +\\hat{\\boldsymbol{\\imath}} \\quad \\text{per ogni } x \\in [0,\\ell]$$</p>
        <p>Qui la direzione è la stessa per tutti gli elementi (tutti i contributi sono allineati con l'asse $x$): <em>questa</em> è la semplificazione che la geometria ci regala, e solo per questo possiamo portare $\\hat{\\boldsymbol{\\imath}}$ fuori dall'integrale. La distanza $r$, invece, cambia con $x$ e deve restare dentro.</p>
        <p><em>Limiti di integrazione.</em> Da $x=0$ a $x=\\ell$.</p>
        <p><em>Integrale.</em> La primitiva di $(d-x)^{-2}$ rispetto a $x$ è $+\\dfrac{1}{d-x}$ (il segno $+$ nasce dal segno $-$ della derivata interna di $d-x$, che si compensa con quello della derivata della potenza). Quindi</p>
        <p>$$\\boldsymbol{E}(P) = \\frac{\\lambda}{4\\pi\\varepsilon_0} \\left( \\int_{0}^{\\ell} \\frac{dx}{(d-x)^2} \\right) \\hat{\\boldsymbol{\\imath}} = \\frac{\\lambda}{4\\pi\\varepsilon_0} \\left[ \\frac{1}{d-x} \\right]_{0}^{\\ell} \\hat{\\boldsymbol{\\imath}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{\\lambda \\ell}{d(d-\\ell)} \\, \\hat{\\boldsymbol{\\imath}}$$</p>
        <p><em>Verifica di coerenza.</em> Per $d \\gg \\ell$ si ha $d-\\ell \\approx d$ e quindi $\\boldsymbol{E} \\approx \\frac{1}{4\\pi\\varepsilon_0}\\frac{\\lambda\\ell}{d^2}\\hat{\\boldsymbol{\\imath}}$: da molto lontano il filo si comporta come una carica puntiforme di valore $Q = \\lambda\\ell$, come deve essere.</p>`
      },

      {
        id: "s02-potenziale",
        type: "section",
        title: "Introduzione al Potenziale Elettrostatico",
        icon: "🔋",
        content: `<p>Abbiamo visto che calcolare il campo elettrico richiede una somma <em>vettoriale</em>, che può essere complicata. Esiste una grandezza <strong>scalare</strong> associata, il <strong>potenziale elettrostatico</strong> $V$, che semplifica notevolmente i calcoli.</p>`,
        subsections: [
          {
            subtitle: "Definizione",
            content: `<p>Il potenziale elettrostatico $V$ in un punto P è l'energia potenziale elettrostatica $U$ che una carica di prova $q_0$ possiede quando si trova in P, divisa per la carica di prova stessa:</p>
            <p>$$V(P) = \\frac{U(P)}{q_0}$$</p>
            <p>È dunque un'<em>energia potenziale per unità di carica</em>, e si misura in volt: $1\\,\\text{V} = 1\\,\\text{J}/\\text{C}$. Essendo definito tramite un'energia potenziale, $V$ è determinato <strong>a meno di una costante additiva</strong>: bisogna quindi fissare un punto di riferimento in cui si conviene che il potenziale sia nullo.</p>`
          },
          {
            subtitle: "Potenziale di una carica puntiforme",
            content: `<p>Sia $q$ una carica puntiforme e $r \\gt 0$ la distanza tra la carica e il punto P (distinto dal punto in cui si trova la carica). Adottando la convenzione di riferimento $V(\\infty) = 0$, cioè potenziale nullo a distanza infinita dalla carica, si ha</p>
            <p>$$V(P) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}$$</p>
            <p>dove $q$ va inserita con il suo <strong>segno algebrico</strong> e $\\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99\\times 10^{9}\\ \\text{N}\\,\\text{m}^2/\\text{C}^2$.</p>
            <p>La convenzione $V(\\infty)=0$ è la più comoda e la più usata. Con questa scelta $V$ risulta positivo attorno a una carica positiva e negativo attorno a una carica negativa, e tende a zero allontanandosi indefinitamente. Il significato operativo è il seguente: $q_0 V(P)$ è il lavoro che le forze elettrostatiche compiono per portare la carica $q_0$ da P all'infinito. La discussione completa della relazione tra $V$ e $\\boldsymbol{E}$ è rinviata alle lezioni successive.</p>`
          },
          {
            subtitle: "Sovrapposizione dei potenziali",
            content: `<p>La proprietà fondamentale del potenziale è che anche per esso vale il principio di sovrapposizione. Tuttavia, essendo una grandezza <strong>scalare</strong>, la sovrapposizione si traduce in una semplice <strong>somma algebrica</strong>:</p>
            <p>$$V_{\\text{tot}} = \\sum_{i=1}^{N} V_i = \\sum_{i=1}^{N} \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_i}{r_i}$$</p>
            <p>dove $r_i$ è la distanza della carica $q_i$ dal punto considerato e i segni delle cariche vanno inseriti nella somma.</p>`
          }
        ],
        formulas: [
          { label: "Definizione di potenziale", latex: "V(P) = \\frac{U(P)}{q_0}" },
          { label: "Potenziale di carica puntiforme (con $V(\\infty)=0$)", latex: "V(P) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}" },
          { label: "Sovrapposizione scalare", latex: "V_{\\text{tot}} = \\sum_{i=1}^{N} \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_i}{r_i}" }
        ],
        quote: {
          text: "Vedete? Molto più facile! Non ci sono vettori, versori, componenti. Si tratta solo di sommare dei numeri. Questo è un grande vantaggio. Spesso, è più semplice calcolare prima il potenziale totale e poi, da questo, derivare il campo elettrico.",
          src: "Nota del Prof."
        }
      },

      {
        id: "s02-int-potenziale-quadrato",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "🧩",
        content: `<p><strong>Il potenziale nello stesso quadrato (esempio illustrativo, non svolto a lezione).</strong> Per rendere concreta la proposizione appena enunciata, riprendiamo la configurazione dell'Esempio 3 e calcoliamo il potenziale nel vertice $D(0,0)$, con $q_A = +q$ in $A(0,L)$, $q_B = +2q$ in $B(L,L)$, $q_C = -q$ in $C(L,0)$, $q \\gt 0$ e la convenzione $V(\\infty)=0$.</p>
        <p><em>Passo 1: le distanze.</em> Sono le stesse già calcolate per il campo, ma ora servono alla <strong>prima</strong> potenza:</p>
        <p>$$r_A = L, \\qquad r_B = L\\sqrt{2}, \\qquad r_C = L$$</p>
        <p><em>Passo 2: somma algebrica dei tre contributi.</em> Nessun versore, nessuna componente:</p>
        <p>$$V_D = \\frac{1}{4\\pi\\varepsilon_0}\\left( \\frac{q_A}{r_A} + \\frac{q_B}{r_B} + \\frac{q_C}{r_C} \\right) = \\frac{1}{4\\pi\\varepsilon_0}\\left( \\frac{q}{L} + \\frac{2q}{L\\sqrt{2}} + \\frac{-q}{L} \\right)$$</p>
        <p><em>Passo 3: semplificazione.</em> Il contributo di A e quello di C sono opposti e si cancellano, perché le due cariche sono uguali in modulo, di segno contrario e alla stessa distanza da D. Resta solo il termine di B:</p>
        <p>$$V_D = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2q}{L\\sqrt{2}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{\\sqrt{2}\\, q}{L} \\approx 1.41 \\cdot \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L}$$</p>
        <p><em>Confronto con il caso vettoriale.</em> In D il potenziale non è nullo, e il campo non è nullo né parallelo a nulla di particolare: $\\|\\boldsymbol{E}_{\\text{tot}}\\| = \\frac{\\sqrt{3}\\,q}{4\\pi\\varepsilon_0 L^2}$ con direzione $-80.3^\\circ$. Si noti che le cariche A e C si cancellano nel <em>potenziale</em> (contributi scalari opposti) ma <strong>non</strong> nel <em>campo</em>: i loro contributi $\\boldsymbol{E}_A$ e $\\boldsymbol{E}_C$ hanno lo stesso modulo ma direzioni perpendicolari, quindi si sommano. È un buon promemoria del fatto che l'annullarsi di $V$ e l'annullarsi di $\\boldsymbol{E}$ sono condizioni diverse.</p>
        <p><em>Esempio numerico.</em> Con $q = 1.0\\ \\text{nC}$ e $L = 10\\ \\text{cm}$, ricordando che $\\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99\\times 10^{9}\\ \\text{N}\\,\\text{m}^2/\\text{C}^2$:</p>
        <p>$$V_D \\approx 8.99\\times 10^{9} \\cdot \\frac{1.414 \\cdot 1.0\\times 10^{-9}}{0.10} \\approx 1.3\\times 10^{2}\\ \\text{V} \\approx 127\\ \\text{V}$$</p>`
      },

      {
        id: "s02-potenziale-continuo",
        type: "section",
        title: "Potenziale di una distribuzione continua",
        icon: "∫",
        content: `<p>Anche per le distribuzioni continue il potenziale si calcola con un integrale, ma questa volta è un integrale <strong>scalare</strong>, molto più semplice della sua controparte vettoriale per il campo $\\boldsymbol{E}$.</p>
        <p><strong>Proposizione.</strong> Sia P il punto fisso in cui si valuta il potenziale, $dQ$ l'elemento infinitesimo di carica e $r$ la distanza tra $dQ$ e P. Con la convenzione $V(\\infty)=0$:</p>
        <p>$$V(P) = \\int_{\\text{distribuzione}} \\frac{1}{4\\pi\\varepsilon_0} \\frac{dQ}{r}$$</p>
        <p>dove l'integrale si estende a tutto il dominio occupato dalla carica: la linea $\\Gamma$, la superficie $S$ o il volume $\\mathcal{V}$. In particolare</p>
        <p>$$V(P) = \\frac{1}{4\\pi\\varepsilon_0}\\int_{\\Gamma} \\frac{\\lambda\\, dL}{r}, \\qquad V(P) = \\frac{1}{4\\pi\\varepsilon_0}\\int_{S} \\frac{\\sigma\\, dS}{r}, \\qquad V(P) = \\frac{1}{4\\pi\\varepsilon_0}\\int_{\\mathcal{V}} \\frac{\\rho\\, dV}{r}$$</p>
        <p>La differenza cruciale rispetto al campo è che qui <strong>non compaiono versori</strong>: l'integrando è una quantità scalare con il suo segno, e non c'è nulla da scomporre in componenti.</p>`,
        subsections: [
          {
            subtitle: "Attenzione al riferimento all'infinito",
            content: `<p>La scelta $V(\\infty)=0$ non è sempre lecita: perché la formula abbia senso occorre che <strong>l'integrale converga</strong>. Questo è garantito per le distribuzioni <em>finite</em> e regolari considerate qui (un filo di lunghezza finita, una lamina di area finita, un corpo di volume finito), per le quali il potenziale tende effettivamente a zero allontanandosi indefinitamente.</p>
            <p>Per distribuzioni <strong>illimitate</strong> idealizzate — per esempio un filo rettilineo infinito o un piano infinito — l'integrale con riferimento all'infinito diverge e la convenzione $V(\\infty)=0$ non è utilizzabile: in quei casi si deve scegliere un punto di riferimento diverso (a distanza finita). Non applicare quindi la formula in modo indiscriminato.</p>`
          },
          {
            subtitle: "Esempio: il potenziale del filo finito",
            content: `<p>Applichiamo l'integrale al filo dell'esempio illustrativo precedente: filo uniforme tra $x=0$ e $x=\\ell$, punto $P(d,0)$ con $d \\gt \\ell$, variabile di integrazione $x$, distanza $r = d-x$. La primitiva di $\\dfrac{1}{d-x}$ rispetto a $x$ è $-\\ln(d-x)$: il segno meno viene dalla derivata interna di $d-x$, che vale $-1$. Dunque</p>
            <p>$$\\int_{0}^{\\ell} \\frac{dx}{d-x} = \\Big[ -\\ln(d-x) \\Big]_{0}^{\\ell} = -\\ln(d-\\ell) + \\ln d = \\ln\\!\\left(\\frac{d}{d-\\ell}\\right)$$</p>
            <p>dove l'ipotesi $d \\gt \\ell$ garantisce che sia $d$ sia $d-\\ell$ siano positivi, così che entrambi i logaritmi siano ben definiti. Si ottiene quindi</p>
            <p>$$V(P) = \\frac{\\lambda}{4\\pi\\varepsilon_0} \\int_{0}^{\\ell} \\frac{dx}{d-x} = \\frac{\\lambda}{4\\pi\\varepsilon_0} \\ln\\!\\left(\\frac{d}{d-\\ell}\\right)$$</p>
            <p>un integrale decisamente più semplice di quello vettoriale. Approfondiremo il potenziale e la sua relazione con il campo elettrico nelle prossime lezioni.</p>`
          }
        ],
        formulas: [
          { label: "Potenziale di distribuzione continua", latex: "V(P) = \\int_{\\text{distribuzione}} \\frac{1}{4\\pi\\varepsilon_0} \\frac{dQ}{r}" }
        ]
      },

      {
        id: "s02-esercizi-intro",
        type: "integrazione_box",
        title: "Esercizi proposti",
        icon: "📝",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e <strong>non svolti dal docente</strong>. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s02-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1 — Definizione operativa di campo",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dare la definizione operativa di campo elettrostatico $\\vec{E}$ in un punto P, precisando il ruolo e i requisiti della carica di prova e l'unità di misura. Spiegare poi perché gli aggettivi "attrattivo" e "repulsivo" non descrivono il campo, e dedurre verso e direzione della forza che agisce su una carica $q \\lt 0$ immersa nel campo di una carica sorgente $Q \\gt 0$.</p>`,
        solution: `<p><strong>Definizione.</strong> Il campo elettrostatico in un punto P è il rapporto fra la forza elettrica $\\vec{F}$ che agisce su una carica di prova $q$ posta in P e la carica stessa:</p>
        <p>$$\\vec{E}(P)=\\frac{\\vec{F}}{q}, \\qquad [\\vec{E}] = \\text{N}/\\text{C}$$</p>
        <p><strong>Requisito sulla carica di prova.</strong> Deve essere sufficientemente piccola (idealmente nel limite $q \\to 0$) da non perturbare la distribuzione delle cariche sorgenti: se così non fosse, la forza misurata dipenderebbe anche dalla sonda e il rapporto $\\vec{F}/q$ non sarebbe una proprietà del solo sistema di sorgenti. Con questa definizione il campo è una grandezza associata al <em>punto</em> P dello spazio, indipendente dalla carica usata per rivelarlo.</p>
        <p><strong>Perché "attrattivo/repulsivo" non descrivono il campo.</strong> Dalla definizione segue la relazione inversa $\\vec{F}=q\\,\\vec{E}$: se $q \\gt 0$ la forza ha stessa direzione e stesso verso di $\\vec{E}$; se $q \\lt 0$ ha la stessa direzione ma verso opposto. Perciò "attrattivo" e "repulsivo" non sono proprietà del campo, ma dell'interazione fra il campo e il <em>segno</em> della carica che vi si immerge. Per il campo si usano solo i termini <em>uscente</em> ed <em>entrante</em>.</p>
        <p><strong>Caso richiesto.</strong> Con $Q \\gt 0$ il campo è radiale <em>uscente</em>. Una carica $q \\lt 0$ posta a distanza $r$ subisce la forza $\\vec{F}=q\\vec{E}$, cioè una forza radiale <em>entrante</em>, diretta verso $Q$ (attrazione), di modulo</p>
        <p>$$|\\vec{F}|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{|q|\\,Q}{r^2}$$</p>
        <p>Il campo è uscente ma la forza è attrattiva: le due cose non sono in contraddizione.</p>`
      },

      {
        id: "s02-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2 — Sovrapposizione per campo e potenziale",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enunciare il principio di sovrapposizione per il campo elettrostatico e per il potenziale elettrostatico di un sistema di $N$ cariche puntiformi $q_i$ poste nei punti $\\boldsymbol{r}_i$, e spiegare qual è la differenza operativa fra i due calcoli.</p>`,
        solution: `<p><strong>Per il campo.</strong> In ogni punto $\\boldsymbol{r}$ con $\\boldsymbol{r}\\neq\\boldsymbol{r}_i$ per ogni $i$:</p>
        <p>$$\\boldsymbol{E}_{\\text{tot}}(\\boldsymbol{r})=\\sum_{i=1}^{N}\\frac{1}{4\\pi\\varepsilon_0}\\frac{q_i}{\\|\\boldsymbol{r}-\\boldsymbol{r}_i\\|^2}\\hat{\\boldsymbol{u}}_i, \\qquad \\hat{\\boldsymbol{u}}_i=\\frac{\\boldsymbol{r}-\\boldsymbol{r}_i}{\\|\\boldsymbol{r}-\\boldsymbol{r}_i\\|}$$</p>
        <p>dove $\\hat{\\boldsymbol{u}}_i$ è il versore che va dalla carica $i$-esima al punto di osservazione.</p>
        <p><strong>Per il potenziale.</strong> Con la convenzione $V(\\infty)=0$:</p>
        <p>$$V_{\\text{tot}}(\\boldsymbol{r})=\\sum_{i=1}^{N}\\frac{1}{4\\pi\\varepsilon_0}\\frac{q_i}{r_i}, \\qquad r_i=\\|\\boldsymbol{r}-\\boldsymbol{r}_i\\| \\gt 0$$</p>
        <p><strong>Differenza operativa.</strong> Nel primo caso la somma è <em>vettoriale</em>: bisogna scomporre ogni contributo lungo gli assi e sommare separatamente le componenti,</p>
        <p>$$E_x=\\sum_i E_{ix}, \\qquad E_y=\\sum_i E_{iy}, \\qquad E_z=\\sum_i E_{iz}$$</p>
        <p>ricavando poi il modulo nel caso generale tridimensionale come</p>
        <p>$$\\|\\boldsymbol{E}\\|=\\sqrt{E_x^2+E_y^2+E_z^2}$$</p>
        <p>Se il problema è piano (tutte le cariche e il punto di osservazione nel piano $xy$, quindi $E_z=0$) il modulo si riduce a $\\|\\boldsymbol{E}\\|=\\sqrt{E_x^2+E_y^2}$ e si può parlare di un angolo $\\alpha$ con l'asse $x$. In tal caso $\\alpha$ <strong>non</strong> si ottiene semplicemente con $\\arctan(E_y/E_x)$, perché l'arcotangente restituisce sempre un valore in $(-90^\\circ, 90^\\circ)$: occorre scegliere il quadrante in base ai <em>segni</em> delle componenti.</p>
        <ul>
          <li>$E_x \\gt 0$: $\\alpha=\\arctan(E_y/E_x)$ (primo o quarto quadrante, a seconda del segno di $E_y$);</li>
          <li>$E_x \\lt 0$: $\\alpha=\\arctan(E_y/E_x)+180^\\circ$ (secondo o terzo quadrante);</li>
          <li>$E_x=0$ e $E_y \\gt 0$: $\\alpha=+90^\\circ$; $E_x=0$ e $E_y \\lt 0$: $\\alpha=-90^\\circ$;</li>
          <li>$E_x=E_y=0$: il campo è nullo e l'angolo non è definito.</li>
        </ul>
        <p>In nessun caso si possono sommare i <em>moduli</em> dei contributi.</p>
        <p>Nel secondo caso la somma è <em>algebrica</em>: si sommano numeri con il loro segno, senza versori né componenti, il che rende il calcolo molto più rapido.</p>
        <p><strong>Conseguenza importante:</strong> $V=0$ in un punto non implica $\\boldsymbol{E}=\\boldsymbol{0}$ in quel punto, e viceversa.</p>`
      },

      {
        id: "s02-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3 — Forma in componenti e significato della linearità",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Enunciare il principio di sovrapposizione per il campo elettrostatico, scrivere l'espressione del campo generato da $N$ cariche puntiformi $Q_i$ di posizione $\\vec{r}_i$ nel punto $\\vec{r}$ e la sua componente $x$, specificando in quali punti la formula è valida. Chiarire inoltre in che senso si parla di "linearità".</p>`,
        solution: `<p><strong>Enunciato.</strong> Il campo elettrostatico generato in un punto P da un sistema di $N$ cariche puntiformi è la somma vettoriale dei campi che ciascuna carica genererebbe in P se le altre non esistessero:</p>
        <p>$$\\vec{E}_{\\text{tot}}(P)=\\sum_{i=1}^{N}\\vec{E}_i(P)$$</p>
        <p><strong>Forma vettoriale.</strong> Detto $\\vec{r}$ il punto di osservazione e $\\vec{r}_i$ la posizione della carica $Q_i$, il vettore che va dalla carica al punto è $\\vec{r}-\\vec{r}_i$, la distanza è $|\\vec{r}-\\vec{r}_i|$ e il versore è $\\dfrac{\\vec{r}-\\vec{r}_i}{|\\vec{r}-\\vec{r}_i|}$, quindi</p>
        <p>$$\\vec{E}_{\\text{tot}}(\\vec{r})=\\frac{1}{4\\pi\\varepsilon_0}\\sum_{i=1}^{N}\\frac{Q_i(\\vec{r}-\\vec{r}_i)}{|\\vec{r}-\\vec{r}_i|^{3}}$$</p>
        <p><strong>Componente $x$.</strong></p>
        <p>$$E_x(\\vec{r})=\\frac{1}{4\\pi\\varepsilon_0}\\sum_{i=1}^{N}\\frac{Q_i\\,(x-x_i)}{\\left[(x-x_i)^2+(y-y_i)^2+(z-z_i)^2\\right]^{3/2}}$$</p>
        <p>(analogamente per $E_y$ ed $E_z$).</p>
        <p><strong>Validità.</strong> La formula vale in tutti i punti con $\\vec{r}\\neq\\vec{r}_i$ per ogni $i$: nella posizione di una carica puntiforme il campo non è definito. Il segno di $Q_i$ è già contenuto nella formula e produce automaticamente un contributo uscente se $Q_i \\gt 0$ ed entrante se $Q_i \\lt 0$.</p>
        <p><strong>Linearità.</strong> Riguarda la dipendenza del campo dalle <em>sorgenti</em>: raddoppiando tutte le cariche il campo raddoppia, e il campo di una somma di distribuzioni è la somma dei campi. Non riguarda la disposizione geometrica delle cariche, che può essere qualsiasi: il principio vale anche per cariche non allineate.</p>`
      },

      {
        id: "s02-es-teoria-4",
        type: "esercizio",
        title: "Teoria 4 — Perché $\\|\\boldsymbol{E}_B\\| = \\|\\boldsymbol{E}_A\\|$",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Nell'esempio del quadrato la carica in $B$ vale $2q$ mentre quella in $A$ vale $q$, eppure i due campi che esse producono in $D$ hanno lo stesso modulo. Spiegare perché, e chiarire perché le componenti di $\\boldsymbol{E}_B$ valgono $K/\\sqrt{2}$ ciascuna pur essendo $\\|\\boldsymbol{E}_B\\|=K$, con $K=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}$ e $q \\gt 0$.</p>`,
        solution: `<p><strong>Contributo di A.</strong> La carica dista $r_A=L$ da $D$, quindi</p>
        <p>$$\\|\\boldsymbol{E}_A\\|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}=K$$</p>
        <p><strong>Contributo di B.</strong> La carica sta sulla diagonale, a distanza $r_B=L\\sqrt{2}$, dunque $r_B^2=2L^2$:</p>
        <p>$$\\|\\boldsymbol{E}_B\\|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{2q}{2L^2}=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}=K$$</p>
        <p>Il fattore 2 della carica è esattamente compensato dal fattore 2 introdotto a denominatore dal quadrato della distanza, quindi $\\|\\boldsymbol{E}_B\\|=\\|\\boldsymbol{E}_A\\|=K$.</p>
        <p><strong>Componenti e modulo.</strong> Ciò che distingue i due contributi è solo la <em>direzione</em>: $\\boldsymbol{E}_B$ è diretto lungo la diagonale, a $-135^\\circ$ dall'asse $x$, cioè lungo il versore $-\\frac{1}{\\sqrt{2}}(\\hat{\\boldsymbol{\\imath}}+\\hat{\\boldsymbol{\\jmath}})$. Le sue proiezioni sugli assi valgono</p>
        <p>$$E_{Bx}=K\\cos(135^\\circ)=-\\frac{K}{\\sqrt{2}}, \\qquad E_{By}=K\\sin(-135^\\circ)=-\\frac{K}{\\sqrt{2}}$$</p>
        <p>Sono le <em>componenti</em>, non il modulo. Il modulo si riottiene con Pitagora:</p>
        <p>$$\\sqrt{\\left(\\frac{K}{\\sqrt{2}}\\right)^2+\\left(\\frac{K}{\\sqrt{2}}\\right)^2}=\\sqrt{\\frac{K^2}{2}+\\frac{K^2}{2}}=K$$</p>
        <p>Confondere una componente con il modulo (dire cioè $\\|\\boldsymbol{E}_B\\|=K/\\sqrt{2}$) è l'errore tipico.</p>`
      },

      {
        id: "s02-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1 — Campo e forza su una carica di prova negativa",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Una carica puntiforme $Q=+4\\ \\text{nC}$ è posta nell'origine. Calcolare le componenti cartesiane e il modulo del campo elettrostatico nel punto $P=(3\\ \\text{cm},\\,4\\ \\text{cm})$ e la forza (modulo, direzione e verso) che agisce su una carica di prova $q_0=-2\\ \\text{nC}$ posta in $P$. Si usi $\\dfrac{1}{4\\pi\\varepsilon_0}=8.99\\times 10^{9}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$.</p>`,
        solution: `<p><strong>Passo 1 — Geometria.</strong> Poniamo $k=\\dfrac{1}{4\\pi\\varepsilon_0}=8.99\\times 10^{9}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$. Il vettore dalla carica al punto è</p>
        <p>$$\\vec{r}=(0.03,\\,0.04)\\ \\text{m}, \\qquad r=\\sqrt{0.03^2+0.04^2}=0.05\\ \\text{m}, \\qquad r^2=2.5\\times 10^{-3}\\ \\text{m}^2$$</p>
        <p>$$\\hat{r}=\\frac{\\vec{r}}{r}=(0.6,\\,0.8)$$</p>
        <p><strong>Passo 2 — Modulo del campo.</strong> Poiché $Q \\gt 0$ il campo è uscente, cioè diretto come $\\hat{r}$:</p>
        <p>$$|\\vec{E}|=k\\frac{Q}{r^2}=8.99\\times10^{9}\\cdot\\frac{4\\times10^{-9}}{2.5\\times10^{-3}}=1.44\\times10^{4}\\ \\text{N}/\\text{C}$$</p>
        <p><strong>Passo 3 — Componenti del campo.</strong></p>
        <p>$$E_x=0.6\\,|\\vec{E}|=8.6\\times10^{3}\\ \\text{N}/\\text{C}, \\qquad E_y=0.8\\,|\\vec{E}|=1.15\\times10^{4}\\ \\text{N}/\\text{C}$$</p>
        <p>$$\\vec{E}\\simeq(8.6\\times10^{3},\\,1.15\\times10^{4})\\ \\text{N}/\\text{C}$$</p>
        <p><strong>Passo 4 — Forza sulla carica di prova.</strong> Con $\\vec{F}=q_0\\vec{E}$ e $q_0=-2\\times10^{-9}\\ \\text{C}$:</p>
        <p>$$|\\vec{F}|=|q_0|\\,|\\vec{E}|=2\\times10^{-9}\\cdot 1.44\\times10^{4}=2.88\\times10^{-5}\\ \\text{N}$$</p>
        <p>$$\\vec{F}\\simeq(-1.73\\times10^{-5},\\,-2.30\\times10^{-5})\\ \\text{N}$$</p>
        <p><strong>Passo 5 — Direzione e verso.</strong> Essendo $q_0 \\lt 0$, il verso è opposto a quello di $\\vec{E}$, cioè radiale <em>entrante</em> verso $Q$. La direzione è quella della retta che congiunge l'origine a $P$, che forma con l'asse $x$ un angolo $\\arctan(4/3)\\simeq 53^\\circ$, con verso da $P$ verso l'origine: la forza è attrattiva anche se il campo è uscente.</p>`
      },

      {
        id: "s02-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2 — Campo e potenziale di due cariche su una retta",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Due cariche puntiformi $q_1=+2q$ e $q_2=-q$ (con $q \\gt 0$) sono poste rispettivamente in $O(0,0)$ e in $A(a,0)$. Con la convenzione $V(\\infty)=0$: (a) calcolare il campo elettrostatico $\\boldsymbol{E}$ e il potenziale $V$ nel punto medio $M(a/2,0)$; (b) determinare il punto del segmento $OA$ in cui il potenziale si annulla.</p>`,
        solution: `<p><strong>(a) Passo 1 — Geometria.</strong> Poniamo $k=\\frac{1}{4\\pi\\varepsilon_0}$. Entrambe le cariche distano $a/2$ da $M$.</p>
        <p><strong>Passo 2 — Contributo di $q_1=+2q$.</strong> Il campo di una carica positiva punta lontano dalla carica, cioè nel verso $+\\hat{\\boldsymbol{\\imath}}$:</p>
        <p>$$\\boldsymbol{E}_1=k\\frac{2q}{(a/2)^2}\\hat{\\boldsymbol{\\imath}}=\\frac{8kq}{a^2}\\hat{\\boldsymbol{\\imath}}$$</p>
        <p><strong>Passo 3 — Contributo di $q_2=-q$.</strong> Il campo di una carica negativa punta verso la carica, cioè ancora nel verso $+\\hat{\\boldsymbol{\\imath}}$ (formalmente $k\\frac{-q}{(a/2)^2}(-\\hat{\\boldsymbol{\\imath}})$):</p>
        <p>$$\\boldsymbol{E}_2=k\\frac{q}{(a/2)^2}\\hat{\\boldsymbol{\\imath}}=\\frac{4kq}{a^2}\\hat{\\boldsymbol{\\imath}}$$</p>
        <p><strong>Passo 4 — Somma.</strong> I due contributi sono concordi:</p>
        <p>$$\\boldsymbol{E}_{\\text{tot}}=\\frac{12kq}{a^2}\\hat{\\boldsymbol{\\imath}}=\\frac{3q}{\\pi\\varepsilon_0 a^2}\\hat{\\boldsymbol{\\imath}}$$</p>
        <p>diretto da $O$ verso $A$, di modulo $\\frac{12kq}{a^2}$.</p>
        <p><strong>Passo 5 — Potenziale in M (somma algebrica).</strong></p>
        <p>$$V(M)=k\\left(\\frac{2q}{a/2}+\\frac{-q}{a/2}\\right)=k\\left(\\frac{4q}{a}-\\frac{2q}{a}\\right)=\\frac{2kq}{a}=\\frac{q}{2\\pi\\varepsilon_0 a} \\gt 0$$</p>
        <p><strong>(b) Punto a potenziale nullo.</strong> Sia $P(x,0)$ con $0 \\lt x \\lt a$: le distanze sono $x$ da $q_1$ e $a-x$ da $q_2$, dunque</p>
        <p>$$V(x)=k\\left(\\frac{2q}{x}-\\frac{q}{a-x}\\right)=0 \\;\\Longleftrightarrow\\; \\frac{2}{x}=\\frac{1}{a-x}$$</p>
        <p>$$2(a-x)=x \\;\\Rightarrow\\; x=\\frac{2a}{3}$$</p>
        <p><strong>Osservazione.</strong> In quel punto $V=0$ ma $\\boldsymbol{E}\\neq\\boldsymbol{0}$: infatti entrambi i contributi al campo sono diretti nel verso $+\\hat{\\boldsymbol{\\imath}}$ e non possono cancellarsi.</p>`
      },

      {
        id: "s02-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3 — Campo di un dipolo sull'asse trasversale",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Due cariche puntiformi, $+q$ in $A=(-a,0)$ e $-q$ in $B=(a,0)$ con $q \\gt 0$ e $a \\gt 0$, formano un dipolo. Calcolare il campo elettrostatico $\\vec{E}(0,y)$ in un generico punto $P=(0,y)$ dell'asse $y$, determinandone modulo, direzione e verso, e ricavare l'espressione approssimata per $y \\gg a$.</p>`,
        solution: `<p><strong>Passo 1 — Contributo della carica $+q$ in $A=(-a,0)$.</strong> Il vettore dalla carica a $P$ è</p>
        <p>$$\\vec{r}-\\vec{r}_A=(0-(-a),\\,y-0)=(a,\\,y), \\qquad r=\\sqrt{a^2+y^2}$$</p>
        <p>(la distanza è la stessa per entrambe le cariche). Quindi</p>
        <p>$$\\vec{E}_A=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q\\,(a,\\,y)}{(a^2+y^2)^{3/2}}$$</p>
        <p><strong>Passo 2 — Contributo della carica $-q$ in $B=(a,0)$.</strong> Ora $\\vec{r}-\\vec{r}_B=(-a,\\,y)$, quindi</p>
        <p>$$\\vec{E}_B=\\frac{1}{4\\pi\\varepsilon_0}\\frac{(-q)\\,(-a,\\,y)}{(a^2+y^2)^{3/2}}=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q\\,(a,\\,-y)}{(a^2+y^2)^{3/2}}$$</p>
        <p><strong>Passo 3 — Somma.</strong> Le componenti $y$ si cancellano (come previsto dalla simmetria: i due contributi hanno componenti verticali uguali e opposte) e quelle $x$ si sommano:</p>
        <p>$$\\vec{E}(0,y)=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q\\,(2a,\\,0)}{(a^2+y^2)^{3/2}}=\\frac{1}{4\\pi\\varepsilon_0}\\frac{2qa}{(a^2+y^2)^{3/2}}\\,\\hat{x}$$</p>
        <p><strong>Passo 4 — Modulo, direzione e verso.</strong> Il campo in ogni punto dell'asse $y$ è parallelo all'asse $x$, di modulo</p>
        <p>$$|\\vec{E}|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{2qa}{(a^2+y^2)^{3/2}}$$</p>
        <p>e verso $+\\hat{x}$, cioè diretto dalla carica positiva verso quella negativa (antiparallelo al momento di dipolo $\\vec{p}=2qa\\,(-\\hat{x})$ se si orienta $\\vec{p}$ dalla carica negativa alla positiva).</p>
        <p><strong>Passo 5 — Verifiche.</strong> In $y=0$ (centro del dipolo) si ottiene</p>
        <p>$$|\\vec{E}|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{2q}{a^2}$$</p>
        <p>cioè il doppio del campo di una sola carica a distanza $a$, coerentemente col fatto che i due contributi sono concordi.</p>
        <p><strong>Passo 6 — Limite $y \\gg a$.</strong> Si può trascurare $a^2$ rispetto a $y^2$, quindi $(a^2+y^2)^{3/2}\\simeq y^3$:</p>
        <p>$$\\vec{E}\\simeq\\frac{1}{4\\pi\\varepsilon_0}\\frac{2qa}{y^{3}}\\,\\hat{x}=\\frac{1}{4\\pi\\varepsilon_0}\\frac{p}{y^{3}}\\,\\hat{x}, \\qquad p=2qa$$</p>
        <p>Il campo del dipolo decresce come $1/y^3$, più rapidamente del campo $1/r^2$ di una carica isolata, perché a grande distanza le due cariche si compensano quasi del tutto.</p>`
      },

      {
        id: "s02-es-scritto-4",
        type: "esercizio",
        title: "Scritto 4 — Quadrato con carica negativa in B: campo e potenziale",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Ai vertici di un quadrato di lato $L$ sono poste le cariche $q_A=+q$ in $A(0,L)$, $q_B=-q$ in $B(L,L)$, $q_C=+q$ in $C(L,0)$, con $q \\gt 0$. Calcolare il campo elettrostatico totale nel vertice $D(0,0)$ (modulo e direzione) e il potenziale in $D$, con la convenzione $V(\\infty)=0$. Esprimere i risultati come multipli di $K=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}$ e di $\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L}$.</p>`,
        solution: `<p><strong>Passo 1 — Contributo di $A$.</strong> $\\boldsymbol{r}_{AD}=D-A=-L\\hat{\\boldsymbol{\\jmath}}$, $r_A=L$, $\\hat{\\boldsymbol{u}}_A=-\\hat{\\boldsymbol{\\jmath}}$; carica positiva, quindi</p>
        <p>$$\\boldsymbol{E}_A=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L^2}(-\\hat{\\boldsymbol{\\jmath}})=-K\\hat{\\boldsymbol{\\jmath}}$$</p>
        <p><strong>Passo 2 — Contributo di $C$.</strong> $\\boldsymbol{r}_{CD}=-L\\hat{\\boldsymbol{\\imath}}$, $r_C=L$, $\\hat{\\boldsymbol{u}}_C=-\\hat{\\boldsymbol{\\imath}}$, quindi</p>
        <p>$$\\boldsymbol{E}_C=-K\\hat{\\boldsymbol{\\imath}}$$</p>
        <p><strong>Passo 3 — Contributo di $B$.</strong> $\\boldsymbol{r}_{BD}=-L\\hat{\\boldsymbol{\\imath}}-L\\hat{\\boldsymbol{\\jmath}}$, $r_B=L\\sqrt{2}$, $r_B^2=2L^2$, $\\hat{\\boldsymbol{u}}_B=-\\frac{1}{\\sqrt{2}}(\\hat{\\boldsymbol{\\imath}}+\\hat{\\boldsymbol{\\jmath}})$; la carica è $-q$, quindi</p>
        <p>$$\\boldsymbol{E}_B=\\frac{1}{4\\pi\\varepsilon_0}\\frac{-q}{2L^2}\\left(-\\frac{1}{\\sqrt{2}}\\right)(\\hat{\\boldsymbol{\\imath}}+\\hat{\\boldsymbol{\\jmath}})=\\frac{K}{2\\sqrt{2}}(\\hat{\\boldsymbol{\\imath}}+\\hat{\\boldsymbol{\\jmath}})=\\frac{\\sqrt{2}}{4}K(\\hat{\\boldsymbol{\\imath}}+\\hat{\\boldsymbol{\\jmath}})$$</p>
        <p>coerente col fatto che il campo di una carica negativa punta <em>verso</em> la carica. Attenzione: il suo modulo è</p>
        <p>$$\\|\\boldsymbol{E}_B\\|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{2L^2}=\\frac{K}{2}$$</p>
        <p>non $\\frac{\\sqrt{2}}{4}K$, che è il valore di ciascuna <em>componente</em>.</p>
        <p><strong>Passo 4 — Somma delle componenti.</strong></p>
        <p>$$E_x=-K+\\frac{\\sqrt{2}}{4}K=-K\\left(1-\\frac{\\sqrt{2}}{4}\\right), \\qquad E_y=-K\\left(1-\\frac{\\sqrt{2}}{4}\\right)$$</p>
        <p>(l'uguaglianza segue dalla simmetria rispetto alla bisettrice); numericamente $E_x=E_y\\approx-0.646\\,K$.</p>
        <p><strong>Passo 5 — Modulo e direzione.</strong></p>
        <p>$$\\|\\boldsymbol{E}_{\\text{tot}}\\|=\\sqrt{2}\\,K\\left(1-\\frac{\\sqrt{2}}{4}\\right)=K\\left(\\sqrt{2}-\\frac{1}{2}\\right)\\approx 0.914\\,K$$</p>
        <p>Entrambe le componenti sono negative, quindi il vettore sta nel <strong>terzo quadrante</strong> e forma con l'asse $x$ l'angolo $\\alpha=-135^\\circ$, cioè è diretto da $B$ verso $D$, lungo la diagonale.</p>
        <p><strong>Passo 6 — Potenziale (somma algebrica).</strong> Con $r_A=r_C=L$ e $r_B=L\\sqrt{2}$:</p>
        <p>$$V_D=\\frac{1}{4\\pi\\varepsilon_0}\\left(\\frac{q}{L}-\\frac{q}{L\\sqrt{2}}+\\frac{q}{L}\\right)=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L}\\left(2-\\frac{\\sqrt{2}}{2}\\right)\\approx 1.29\\cdot\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{L}$$</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Dai la definizione operativa di campo elettrostatico e spiega perché la carica di prova deve essere piccola.",
        back: "Il campo elettrostatico in P è $\\vec{E}(P) = \\dfrac{\\vec{F}}{q}$, cioè la forza elettrica su una carica di prova $q$ posta in P, divisa per $q$. Si misura in $\\text{N}/\\text{C}$. La carica di prova deve essere sufficientemente piccola da non perturbare significativamente la distribuzione delle cariche sorgenti: altrimenti la forza misurata dipenderebbe anche dalla sonda e il rapporto $\\vec{F}/q$ non sarebbe una proprietà del solo sistema di sorgenti."
      },
      {
        type: "tranello",
        front: "Il campo di una carica $Q \\gt 0$ è uscente. Allora la forza su una carica immersa in quel campo è sempre repulsiva. Vero o falso?",
        back: "Falso. Uscente/entrante descrivono il <strong>campo</strong>; repulsivo/attrattivo dipendono dal segno della carica di prova. Da $\\vec{F} = q\\vec{E}$: se $q \\gt 0$ la forza ha lo stesso verso di $\\vec{E}$ (repulsione da $Q \\gt 0$), se $q \\lt 0$ ha verso opposto (attrazione). Il campo resta uscente in entrambi i casi."
      },
      {
        type: "formula",
        front: "Scrivi il principio di sovrapposizione per il campo elettrostatico in forma vettoriale con i vettori posizione, e dì dove è valido.",
        back: "$$\\vec{E}_{\\text{tot}}(\\vec{r}) = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^{N} \\frac{Q_i (\\vec{r} - \\vec{r}_i)}{|\\vec{r} - \\vec{r}_i|^3}$$ Vale in tutti i punti con $\\vec{r} \\neq \\vec{r}_i$ per ogni $i$: nella posizione di una carica puntiforme il campo non è definito. Il segno di $Q_i$ è già dentro la formula e produce automaticamente il contributo uscente ($Q_i \\gt 0$) o entrante ($Q_i \\lt 0$)."
      },
      {
        type: "domanda",
        front: "In che senso si parla di 'linearità' nel principio di sovrapposizione?",
        back: "La linearità riguarda la <strong>dipendenza del campo dalle sorgenti</strong>: raddoppiando tutte le cariche il campo raddoppia, e il campo di una somma di distribuzioni è la somma dei campi. <strong>Non</strong> riguarda la disposizione geometrica delle cariche, che può essere qualsiasi: il principio vale anche per cariche non allineate."
      },
      {
        type: "tranello",
        front: "Nell'esempio del quadrato, le componenti di $\\boldsymbol{E}_B$ valgono $K/\\sqrt{2}$ ciascuna. Quanto vale il modulo?",
        back: "Vale $K$, non $K/\\sqrt{2}$. Il modulo si ottiene con Pitagora: $\\sqrt{(K/\\sqrt{2})^2 + (K/\\sqrt{2})^2} = \\sqrt{K^2/2 + K^2/2} = K$. Confondere una componente con il modulo è l'errore tipico. Infatti $\\|\\boldsymbol{E}_A\\| = \\|\\boldsymbol{E}_B\\| = \\|\\boldsymbol{E}_C\\| = K$: la carica doppia in B è compensata esattamente dal raddoppio di $r^2$ ($r_B^2 = 2L^2$)."
      },
      {
        type: "dimostrazione",
        front: "Nel quadrato con $+q$ in A, $+2q$ in B, $+q$ in C, perché al centro P i contributi di A e C si annullano?",
        back: "P è equidistante da tutti i vertici e A, C sono simmetrici rispetto a P. $\\vec{E}_A$ è uscente da A lungo la diagonale AC verso C; $\\vec{E}_C$ è uscente da C lungo la stessa diagonale verso A. Cariche uguali e distanze uguali $\\Rightarrow$ stesso modulo, versi opposti: $\\vec{E}_A + \\vec{E}_C = \\vec{0}$. Restano solo i contributi di B e D, entrambi diretti lungo la diagonale BD verso D, che si sommano costruttivamente."
      },
      {
        type: "definizione",
        front: "Definisci le tre densità di carica e scrivi l'integrale per il campo di una distribuzione continua.",
        back: "$\\lambda = \\dfrac{dQ}{dL}$ $[\\text{C/m}]$, $\\sigma = \\dfrac{dQ}{dS}$ $[\\text{C/m}^2]$, $\\rho = \\dfrac{dQ}{dV}$ $[\\text{C/m}^3]$. Il contributo infinitesimo è $d\\boldsymbol{E} = \\dfrac{1}{4\\pi\\varepsilon_0} \\dfrac{dQ}{r^2} \\hat{\\boldsymbol{u}}_r$ con $\\hat{\\boldsymbol{u}}_r$ diretto <em>dall'elemento</em> $dQ$ <em>verso</em> P, e $$\\boldsymbol{E}(P) = \\int \\frac{1}{4\\pi\\varepsilon_0} \\frac{dQ}{r^2} \\hat{\\boldsymbol{u}}_r$$ con $dQ = \\lambda\\,dL$, $\\sigma\\,dS$ o $\\rho\\,dV$."
      },
      {
        type: "tranello",
        front: "Nell'integrale per il campo di una distribuzione continua, cosa si può portare fuori dall'integrale?",
        back: "In generale <strong>nulla</strong> tra $r$, $\\hat{\\boldsymbol{u}}_r$ e la densità: mentre P resta fisso, al variare dell'elemento sorgente cambiano sia la distanza $r$, sia la direzione del versore, sia (se la distribuzione non è uniforme) la densità. Si può estrarre una quantità solo quando una particolare geometria o simmetria la rende effettivamente <em>costante</em> lungo tutta la distribuzione (es. un filo allineato con il punto: allora $\\hat{\\boldsymbol{u}}_r$ è lo stesso per tutti gli elementi)."
      },
      {
        type: "definizione",
        front: "Definisci il potenziale elettrostatico e scrivi la sovrapposizione per $N$ cariche puntiformi.",
        back: "$V(P) = \\dfrac{U(P)}{q_0}$: energia potenziale per unità di carica, misurata in volt ($1\\,\\text{V} = 1\\,\\text{J}/\\text{C}$). È definito a meno di una costante additiva, quindi serve un riferimento; con $V(\\infty)=0$ si ha $V(P) = \\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r}$. La sovrapposizione è una <strong>somma algebrica</strong>: $$V_{\\text{tot}} = \\sum_{i=1}^{N} \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_i}{r_i}$$ con i segni delle cariche inseriti nella somma."
      },
      {
        type: "domanda",
        front: "Se in un punto il potenziale è nullo, il campo è necessariamente nullo? E viceversa?",
        back: "No, in entrambi i sensi: $V=0$ e $\\boldsymbol{E}=\\boldsymbol{0}$ sono condizioni <strong>diverse</strong>. Esempio: per $+2q$ in $O$ e $-q$ in $A(a,0)$, nel punto $x=2a/3$ si ha $V=0$ ma $\\boldsymbol{E}\\neq\\boldsymbol{0}$ (entrambi i contributi puntano nello stesso verso). Viceversa, nel quadrato dell'esempio con $+q$, $+2q$, $-q$, i contributi di A e C si cancellano nel potenziale ma non nel campo, perché lì hanno direzioni perpendicolari."
      },
      {
        type: "tranello",
        front: "Posso sempre usare la formula $V(P)=\\int \\frac{1}{4\\pi\\varepsilon_0}\\frac{dQ}{r}$ con la convenzione $V(\\infty)=0$?",
        back: "No: quella formula richiede che l'<strong>integrale converga</strong>. È applicabile alle distribuzioni <em>finite</em> e regolari (filo di lunghezza finita, superficie o volume limitati), per le quali $V \\to 0$ all'infinito. Per distribuzioni <strong>illimitate</strong> idealizzate — filo infinito, piano infinito — l'integrale diverge e la convenzione $V(\\infty)=0$ non è utilizzabile: bisogna scegliere un riferimento a distanza finita."
      },
      {
        type: "domanda",
        front: "Perché il potenziale è operativamente più comodo del campo?",
        back: "Perché è una grandezza <strong>scalare</strong>: la sovrapposizione si riduce a sommare numeri con il loro segno, senza versori, senza scomposizione in componenti e senza ricostruzione di modulo e angolo. Per le distribuzioni continue l'integrale è scalare anziché vettoriale. Come nota il professore: «Vedete? Molto più facile! Non ci sono vettori, versori, componenti. Si tratta solo di sommare dei numeri.» Spesso conviene calcolare prima $V$ e poi ricavarne $\\boldsymbol{E}$."
      }
    ]
};

