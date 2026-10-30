const LESSON = {
    id: "L12", date: "Lezione 12 — 30 Ott 2026",
    title: "Energia del Campo Elettrostatico e Correnti Stazionarie",
    abstract: "Dall'energia immagazzinata in un condensatore alla densità di energia del campo elettrostatico; poi il passaggio alle cariche in movimento: intensità di corrente, velocità di deriva, vettore densità di corrente, equazione di continuità e regime stazionario.",

    sections: [
      {
        id: "s12-energia-condensatore",
        type: "section",
        title: "Energia immagazzinata in un condensatore",
        icon: "🔋",
        content: `<p>Riprendiamo il concetto di condensatore. Abbiamo visto diverse geometrie: sferico, a facce piane e parallele, e cilindrico. Ora vogliamo calcolare l'energia immagazzinata in un condensatore.</p>
        <p>Immaginiamo di caricarlo attraverso un processo ideale <strong>quasistatico e privo di dissipazioni</strong>: trasferiamo la carica da un'armatura all'altra per piccole quantità $dq'$, regolando progressivamente la tensione del generatore, così che in ogni istante il sistema si possa considerare in equilibrio elettrostatico. Si tratta di due ipotesi distinte: la lentezza garantisce l'equilibrio istante per istante, l'assenza di dissipazione è un'ulteriore idealizzazione che assumiamo (non stiamo descrivendo un circuito reale con resistenze).</p>
        <p>Durante il processo la capacità $C$ resta costante (dipende solo dalla geometria e dal dielettrico interposto), mentre la carica $q'$ presente sulle armature e la differenza di potenziale $V'$ tra di esse crescono progressivamente.</p>`,
        subsections: [
          {
            subtitle: "Significato di $V'$ e segno del lavoro",
            content: `<p>Nella scrittura $dW_{est} = V' \\, dq'$ la grandezza $V'$ è la <strong>differenza di potenziale istantanea tra le due armature</strong>, non il potenziale assoluto di un singolo conduttore. La carica $dq'$ non viene portata dall'infinito, ma viene <strong>trasferita dall'armatura negativa a quella positiva</strong>, cioè spostata contro il campo elettrico già presente.</p>
            <p>Di conseguenza occorre distinguere due lavori di segno opposto:</p>
            <p>$$dW_{est} = +V' \\, dq' = dU, \\qquad dW_{campo} = -V' \\, dq'$$</p>
            <p>Il lavoro $dW_{est}$ è compiuto dall'agente esterno (il generatore) contro il campo e, in assenza di dissipazioni, si ritrova integralmente come incremento $dU$ dell'energia elettrostatica immagazzinata. Il lavoro del campo elettrico ha segno opposto. Nel seguito indichiamo con $W$ il lavoro esterno totale, che coincide con l'energia $U$ accumulata.</p>`
          },
          {
            subtitle: "Integrazione del lavoro",
            content: `<p>Il lavoro infinitesimo necessario per trasferire la carica infinitesima $dq'$ quando tra le armature c'è la differenza di potenziale $V'$ è dunque:</p>
            <p>$$dW = V' \\, dq'$$</p>
            <p>Per calcolare il lavoro totale $W$ necessario per caricare il condensatore da una carica nulla fino a una carica finale $Q$, dobbiamo integrare questa espressione:</p>
            <p>$$W = \\int_0^Q V' \\, dq'$$</p>
            <p>Sappiamo che la relazione tra carica e potenziale in un condensatore è $q' = C V'$, con $C$ costante durante tutto il processo, da cui $V' = \\frac{q'}{C}$. Sostituendo nell'integrale otteniamo:</p>
            <p>$$W = \\int_0^Q \\frac{q'}{C} \\, dq' = \\frac{1}{C} \\int_0^Q q' \\, dq' = \\frac{1}{C} \\left[ \\frac{1}{2} (q')^2 \\right]_0^Q = \\frac{1}{2} \\frac{Q^2}{C}$$</p>`
          },
          {
            subtitle: "Le tre forme equivalenti",
            content: `<p>Questa espressione rappresenta l'energia elettrostatica immagazzinata nel condensatore. Utilizzando la relazione fondamentale $Q = CV$, possiamo esprimere l'energia in altre due forme equivalenti.</p>
            <p>Sostituendo $Q = CV$:</p>
            <p>$$W = \\frac{1}{2} \\frac{(CV)^2}{C} = \\frac{1}{2} C V^2$$</p>
            <p>Sostituendo $C = Q/V$:</p>
            <p>$$W = \\frac{1}{2} \\frac{Q^2}{Q/V} = \\frac{1}{2} Q V$$</p>`
          }
        ],
        formulas: [
          { label: "Lavoro infinitesimo di carica", latex: "dW = V' \\, dq'" },
          { label: "Energia (forma con la carica)", latex: "W = \\frac{1}{2} \\frac{Q^2}{C}" },
          { label: "Energia (forma con la tensione)", latex: "W = \\frac{1}{2} C V^2" },
          { label: "Energia (forma mista)", latex: "W = \\frac{1}{2} Q V" }
        ],
        extra_content: `<p>Le tre formule per l'energia immagazzinata in un condensatore sono tutte equivalenti e utili in contesti diversi:</p>
        <p>$$W = \\frac{1}{2} \\frac{Q^2}{C} = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V$$</p>
        <p>dove $Q$ è la carica su un'armatura (in valore assoluto), $V$ la differenza di potenziale tra le armature e $C$ la capacità. L'energia si misura in joule (J).</p>
        <p><strong>Da notare:</strong> il fattore $\\tfrac{1}{2}$ nasce dal fatto che $V'$ cresce linearmente con $q'$ durante la carica: il lavoro non è $QV$ ma il valore medio $\\tfrac{1}{2}V$ moltiplicato per $Q$.</p>`
      },

      {
        id: "s12-densita-energia",
        type: "section",
        title: "Densità di energia del campo elettrostatico",
        icon: "🌐",
        content: `<p>L'energia calcolata non è "dentro" le armature del condensatore, ma è immagazzinata nel <strong>campo elettrico</strong> presente nello spazio tra di esse. Per vedere questo, consideriamo il caso di un condensatore a facce piane e parallele.</p>
        <p>Per un condensatore a facce piane, la differenza di potenziale $V$ tra le armature distanti $d$ è legata al campo elettrico $E$ (che assumiamo uniforme) dalla relazione $V = E d$. La capacità di tale condensatore, con armature di area $\\Sigma$ e vuoto tra di esse, è $C = \\frac{\\epsilon_0 \\Sigma}{d}$.</p>
        <!-- L12 ADD piano --><figure class="figura" data-id="fisica2_lez12a_add_piano"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez12a_add_piano" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="204.619pt" height="143.55pt" viewBox="0 0 204.619 143.55" version="1.2"><style>#fisica2_lez12a_add_piano [fill="rgb(90.861511%,95.254517%,93.763733%)"],#fisica2_lez12a_add_piano [style*="fill:rgb(90.861511%,95.254517%,93.763733%)"]{fill:#293d36!important}[data-mode="light"] #fisica2_lez12a_add_piano [fill="rgb(90.861511%,95.254517%,93.763733%)"],[data-mode="light"] #fisica2_lez12a_add_piano [style*="fill:rgb(90.861511%,95.254517%,93.763733%)"]{fill:#e8f3ef!important}#fisica2_lez12a_add_piano [fill="rgb(0%,0%,0%)"],#fisica2_lez12a_add_piano [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez12a_add_piano [stroke="rgb(0%,0%,0%)"],#fisica2_lez12a_add_piano [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez12a_add_piano [fill="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_piano [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_piano [fill="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_piano [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#168660!important}#fisica2_lez12a_add_piano [stroke="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_piano [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_piano [stroke="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_piano [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#168660!important}#fisica2_lez12a_add_piano [fill="rgb(100%,100%,100%)"],#fisica2_lez12a_add_piano [style*="fill:rgb(100%,100%,100%)"]{fill:var(--bg-primary)!important}#fisica2_lez12a_add_piano [stroke="rgb(100%,100%,100%)"],#fisica2_lez12a_add_piano [style*="stroke:rgb(100%,100%,100%)"]{stroke:var(--bg-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph0-1">
<path style="stroke:none;" d="M 6.625 -2.234375 C 6.625 -2.4375 6.453125 -2.4375 6.3125 -2.4375 L 3.765625 -2.4375 L 3.765625 -4.984375 C 3.765625 -5.125 3.765625 -5.296875 3.5625 -5.296875 C 3.375 -5.296875 3.375 -5.109375 3.375 -4.984375 L 3.375 -2.4375 L 0.828125 -2.4375 C 0.703125 -2.4375 0.515625 -2.4375 0.515625 -2.25 C 0.515625 -2.046875 0.671875 -2.046875 0.828125 -2.046875 L 3.375 -2.046875 L 3.375 0.515625 C 3.375 0.65625 3.375 0.828125 3.578125 0.828125 C 3.765625 0.828125 3.765625 0.640625 3.765625 0.515625 L 3.765625 -2.046875 L 6.3125 -2.046875 C 6.4375 -2.046875 6.625 -2.046875 6.625 -2.234375 Z M 6.625 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph0-2">
<path style="stroke:none;" d="M 6.109375 -2.125 L 5.859375 -2.125 C 5.6875 -0.65625 5.140625 -0.390625 3.640625 -0.390625 L 1.09375 -0.390625 L 3.390625 -2.90625 C 3.484375 -3 3.484375 -3.015625 3.484375 -3.0625 C 3.484375 -3.0625 3.484375 -3.109375 3.421875 -3.1875 L 1.546875 -5.828125 L 3.671875 -5.828125 C 5.0625 -5.828125 5.6875 -5.609375 5.859375 -4.09375 L 6.109375 -4.09375 L 5.859375 -6.109375 L 0.75 -6.109375 C 0.546875 -6.109375 0.515625 -6.109375 0.515625 -5.90625 L 2.796875 -2.65625 L 0.609375 -0.265625 C 0.53125 -0.171875 0.515625 -0.15625 0.515625 -0.109375 C 0.515625 0 0.609375 0 0.75 0 L 5.859375 0 Z M 6.109375 -2.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph0-3">
<path style="stroke:none;" d="M 6.625 -3.140625 C 6.625 -3.34375 6.421875 -3.34375 6.296875 -3.34375 L 0.84375 -3.34375 C 0.703125 -3.34375 0.515625 -3.34375 0.515625 -3.140625 C 0.515625 -2.953125 0.6875 -2.953125 0.796875 -2.953125 L 6.328125 -2.953125 C 6.453125 -2.953125 6.625 -2.953125 6.625 -3.140625 Z M 6.625 -1.328125 C 6.625 -1.515625 6.453125 -1.515625 6.328125 -1.515625 L 0.796875 -1.515625 C 0.6875 -1.515625 0.515625 -1.515625 0.515625 -1.328125 C 0.515625 -1.140625 0.703125 -1.140625 0.84375 -1.140625 L 6.296875 -1.140625 C 6.421875 -1.140625 6.625 -1.140625 6.625 -1.328125 Z M 6.625 -1.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-1">
<path style="stroke:none;" d="M 5.96875 0 C 5.96875 -0.046875 5.921875 -0.109375 5.84375 -0.109375 C 5.78125 -0.109375 5.75 -0.046875 5.734375 0.015625 C 5.515625 0.625 5 0.84375 4.671875 0.84375 C 4.265625 0.84375 4.125 0.59375 4.046875 -0.046875 C 5.984375 -0.890625 6.78125 -2.640625 6.78125 -3.875 C 6.78125 -5.28125 5.828125 -6.296875 4.421875 -6.296875 C 2.421875 -6.296875 0.453125 -4.25 0.453125 -2.203125 C 0.453125 -0.734375 1.453125 0.203125 2.8125 0.203125 C 3.171875 0.203125 3.546875 0.109375 3.6875 0.078125 L 3.6875 0.359375 C 3.671875 0.46875 3.671875 0.59375 3.671875 0.703125 C 3.671875 1.125 3.734375 1.734375 4.4375 1.734375 C 5.5 1.734375 5.96875 0.140625 5.96875 0 Z M 5.96875 -4.140625 C 5.96875 -3.25 5.515625 -1.234375 3.984375 -0.375 C 3.90625 -0.859375 3.734375 -1.328125 3.15625 -1.328125 C 2.65625 -1.328125 2.21875 -0.875 2.21875 -0.421875 C 2.21875 -0.34375 2.25 -0.21875 2.265625 -0.15625 C 1.859375 -0.328125 1.265625 -0.78125 1.265625 -1.9375 C 1.265625 -2.40625 1.40625 -3.859375 2.375 -5 C 2.84375 -5.546875 3.59375 -6.046875 4.359375 -6.046875 C 5.25 -6.046875 5.96875 -5.390625 5.96875 -4.140625 Z M 3.703125 -0.234375 C 3.578125 -0.171875 3.234375 -0.046875 2.875 -0.046875 C 2.75 -0.046875 2.453125 -0.046875 2.453125 -0.421875 C 2.453125 -0.75 2.78125 -1.109375 3.171875 -1.109375 C 3.703125 -1.109375 3.703125 -0.625 3.703125 -0.234375 Z M 3.703125 -0.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-2">
<path style="stroke:none;" d="M 5.703125 -5.5 C 5.703125 -5.609375 5.609375 -5.65625 5.5625 -5.6875 C 5.4375 -5.78125 5.28125 -5.90625 5.1875 -6.1875 C 5.140625 -6.296875 5.109375 -6.40625 4.984375 -6.40625 C 4.890625 -6.40625 4.796875 -6.34375 4.796875 -6.203125 C 4.796875 -6.046875 4.96875 -5.75 5 -5.6875 L 1.96875 -5.6875 C 1.8125 -5.6875 1.640625 -5.6875 1.640625 -5.5 C 1.640625 -5.3125 1.8125 -5.3125 1.96875 -5.3125 L 4.84375 -5.3125 C 4.828125 -5.296875 4.4375 -4.9375 4.4375 -4.796875 C 4.4375 -4.6875 4.515625 -4.609375 4.625 -4.609375 C 4.71875 -4.609375 4.765625 -4.671875 4.796875 -4.703125 C 4.890625 -4.828125 5.109375 -5.078125 5.5 -5.296875 C 5.609375 -5.328125 5.703125 -5.375 5.703125 -5.5 Z M 5.703125 -5.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-3">
<path style="stroke:none;" d="M 6.53125 -2.1875 C 6.53125 -2.265625 6.46875 -2.3125 6.40625 -2.3125 C 6.328125 -2.3125 6.3125 -2.296875 6.21875 -2.09375 C 5.671875 -0.84375 5.296875 -0.28125 3.8125 -0.28125 L 2.453125 -0.28125 C 2.328125 -0.28125 2.3125 -0.28125 2.265625 -0.28125 C 2.1875 -0.296875 2.15625 -0.296875 2.15625 -0.359375 C 2.15625 -0.390625 2.15625 -0.40625 2.203125 -0.578125 L 2.8125 -3.015625 L 3.71875 -3.015625 C 4.359375 -3.015625 4.484375 -2.90625 4.484375 -2.625 C 4.484375 -2.546875 4.453125 -2.359375 4.421875 -2.21875 C 4.40625 -2.15625 4.390625 -2.125 4.390625 -2.09375 C 4.390625 -2.09375 4.390625 -1.96875 4.515625 -1.96875 C 4.625 -1.96875 4.625 -2.03125 4.671875 -2.171875 L 5.140625 -4.046875 C 5.171875 -4.171875 5.171875 -4.1875 5.171875 -4.234375 C 5.171875 -4.296875 5.125 -4.34375 5.046875 -4.34375 C 4.953125 -4.34375 4.9375 -4.296875 4.890625 -4.125 C 4.71875 -3.421875 4.4375 -3.296875 3.734375 -3.296875 L 2.875 -3.296875 C 3.015625 -3.859375 3.4375 -5.546875 3.484375 -5.65625 C 3.53125 -5.78125 3.59375 -5.796875 3.890625 -5.796875 L 5.203125 -5.796875 C 6.3125 -5.796875 6.5625 -5.53125 6.5625 -4.8125 C 6.5625 -4.53125 6.53125 -4.265625 6.53125 -4.203125 C 6.53125 -4.125 6.5625 -4.0625 6.65625 -4.0625 C 6.75 -4.0625 6.765625 -4.125 6.78125 -4.296875 L 6.96875 -5.953125 C 6.96875 -6.078125 6.875 -6.078125 6.71875 -6.078125 L 2.109375 -6.078125 C 1.9375 -6.078125 1.84375 -6.078125 1.84375 -5.921875 C 1.84375 -5.796875 1.9375 -5.796875 2.125 -5.796875 C 2.15625 -5.796875 2.3125 -5.796875 2.453125 -5.78125 C 2.65625 -5.75 2.65625 -5.71875 2.65625 -5.640625 C 2.65625 -5.609375 2.65625 -5.59375 2.625 -5.4375 L 1.4375 -0.671875 C 1.34375 -0.359375 1.328125 -0.28125 0.65625 -0.28125 C 0.484375 -0.28125 0.390625 -0.28125 0.390625 -0.109375 C 0.390625 0 0.484375 0 0.640625 0 L 5.359375 0 C 5.515625 0 5.546875 0 5.5625 -0.03125 C 5.59375 -0.046875 5.609375 -0.046875 5.65625 -0.171875 C 5.765625 -0.40625 6.53125 -2.109375 6.53125 -2.1875 Z M 6.53125 -2.1875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-4">
<path style="stroke:none;" d="M 4.59375 -1.28125 C 4.59375 -1.328125 4.5625 -1.390625 4.484375 -1.390625 C 4.375 -1.390625 4.359375 -1.34375 4.328125 -1.171875 C 4.125 -0.390625 3.9375 -0.125 3.65625 -0.125 C 3.4375 -0.125 3.375 -0.34375 3.375 -0.53125 C 3.375 -0.65625 3.421875 -0.90625 3.4375 -0.921875 L 4.6875 -5.90625 C 4.71875 -6.03125 4.71875 -6.046875 4.71875 -6.078125 C 4.71875 -6.15625 4.671875 -6.203125 4.578125 -6.203125 C 4.453125 -6.203125 3.671875 -6.125 3.5 -6.109375 C 3.40625 -6.109375 3.3125 -6.09375 3.3125 -5.9375 C 3.3125 -5.828125 3.40625 -5.828125 3.546875 -5.828125 C 3.96875 -5.828125 3.96875 -5.765625 3.96875 -5.6875 C 3.96875 -5.625 3.890625 -5.3125 3.84375 -5.125 C 3.71875 -4.640625 3.796875 -4.921875 3.671875 -4.4375 L 3.421875 -3.390625 C 3.25 -3.71875 2.96875 -3.953125 2.5625 -3.953125 C 1.53125 -3.953125 0.375 -2.71875 0.375 -1.34375 C 0.375 -0.359375 1 0.09375 1.59375 0.09375 C 2.1875 0.09375 2.65625 -0.390625 2.796875 -0.546875 C 2.890625 -0.0625 3.34375 0.09375 3.625 0.09375 C 3.890625 0.09375 4.109375 -0.015625 4.3125 -0.390625 C 4.46875 -0.6875 4.59375 -1.25 4.59375 -1.28125 Z M 3.265625 -2.828125 L 2.828125 -1.078125 C 2.796875 -0.9375 2.78125 -0.921875 2.640625 -0.734375 C 2.328125 -0.359375 1.953125 -0.125 1.625 -0.125 C 1.1875 -0.125 1.03125 -0.578125 1.03125 -0.96875 C 1.03125 -1.40625 1.296875 -2.4375 1.515625 -2.859375 C 1.796875 -3.390625 2.203125 -3.734375 2.5625 -3.734375 C 3.15625 -3.734375 3.296875 -3 3.296875 -2.953125 C 3.296875 -2.90625 3.28125 -2.859375 3.265625 -2.828125 Z M 3.265625 -2.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-5">
<path style="stroke:none;" d="M 7.046875 -5.984375 C 7.046875 -6.0625 7 -6.109375 6.9375 -6.109375 C 6.90625 -6.109375 6.671875 -6.078125 6.203125 -6.078125 C 5.921875 -6.078125 5.609375 -6.109375 5.328125 -6.109375 C 5.265625 -6.109375 5.171875 -6.09375 5.171875 -5.9375 C 5.171875 -5.84375 5.265625 -5.828125 5.296875 -5.828125 C 5.390625 -5.8125 5.71875 -5.796875 5.71875 -5.546875 C 5.71875 -5.46875 5.6875 -5.40625 5.65625 -5.328125 C 5.609375 -5.265625 5.59375 -5.234375 5.5625 -5.171875 L 2.765625 -0.828125 L 2.078125 -5.5625 C 2.078125 -5.640625 2.140625 -5.828125 2.703125 -5.828125 C 2.8125 -5.828125 2.90625 -5.828125 2.90625 -5.984375 C 2.90625 -6.09375 2.828125 -6.109375 2.765625 -6.109375 C 2.609375 -6.109375 2.421875 -6.09375 2.25 -6.09375 L 1.6875 -6.078125 C 1.53125 -6.078125 1.28125 -6.078125 1.203125 -6.09375 L 0.6875 -6.109375 C 0.65625 -6.109375 0.53125 -6.109375 0.53125 -5.9375 C 0.53125 -5.828125 0.625 -5.828125 0.734375 -5.828125 C 1.234375 -5.828125 1.25 -5.75 1.28125 -5.515625 L 2.0625 -0.03125 C 2.09375 0.140625 2.09375 0.203125 2.25 0.203125 C 2.390625 0.203125 2.453125 0.125 2.515625 0.015625 L 5.78125 -5.046875 C 6.140625 -5.625 6.453125 -5.796875 6.859375 -5.828125 C 6.96875 -5.84375 7.046875 -5.84375 7.046875 -5.984375 Z M 7.046875 -5.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph1-6">
<path style="stroke:none;" d="M 4.703125 -3.625 C 4.703125 -3.859375 4.5 -3.859375 4.328125 -3.859375 L 1.75 -3.859375 C 1.53125 -3.859375 1.21875 -3.859375 0.796875 -3.4375 C 0.5625 -3.1875 0.234375 -2.703125 0.234375 -2.625 C 0.234375 -2.53125 0.34375 -2.53125 0.359375 -2.53125 C 0.4375 -2.53125 0.453125 -2.546875 0.515625 -2.640625 C 0.953125 -3.296875 1.5 -3.296875 1.671875 -3.296875 L 2.421875 -3.296875 L 1.515625 -0.34375 C 1.46875 -0.203125 1.46875 -0.1875 1.46875 -0.140625 C 1.46875 -0.015625 1.546875 0.109375 1.75 0.109375 C 2 0.109375 2.09375 -0.109375 2.125 -0.28125 L 2.703125 -3.296875 L 4.25 -3.296875 C 4.375 -3.296875 4.703125 -3.296875 4.703125 -3.625 Z M 4.703125 -3.625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph2-1">
<path style="stroke:none;" d="M 6.359375 -2.234375 C 6.359375 -2.4375 6.1875 -2.4375 6.046875 -2.4375 L 1.078125 -2.4375 C 0.953125 -2.4375 0.765625 -2.4375 0.765625 -2.25 C 0.765625 -2.046875 0.9375 -2.046875 1.078125 -2.046875 L 6.046875 -2.046875 C 6.171875 -2.046875 6.359375 -2.046875 6.359375 -2.234375 Z M 6.359375 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph3-1">
<path style="stroke:none;" d="M 4.4375 -0.796875 L 4.4375 -1.296875 L 4.1875 -1.296875 L 4.1875 -0.796875 C 4.1875 -0.703125 4.1875 -0.265625 3.875 -0.265625 C 3.546875 -0.265625 3.546875 -0.6875 3.546875 -0.828125 L 3.546875 -2.390625 C 3.546875 -2.90625 3.546875 -3.203125 3.140625 -3.578125 C 2.8125 -3.875 2.390625 -4 1.9375 -4 C 1.1875 -4 0.5625 -3.625 0.5625 -3.0625 C 0.5625 -2.78125 0.75 -2.625 0.984375 -2.625 C 1.21875 -2.625 1.390625 -2.8125 1.390625 -3.03125 C 1.390625 -3.421875 0.984375 -3.46875 0.984375 -3.46875 C 1.234375 -3.703125 1.65625 -3.78125 1.921875 -3.78125 C 2.375 -3.78125 2.890625 -3.4375 2.890625 -2.65625 L 2.890625 -2.359375 C 2.40625 -2.34375 1.734375 -2.296875 1.140625 -2.015625 C 0.484375 -1.703125 0.296875 -1.234375 0.296875 -0.875 C 0.296875 -0.140625 1.15625 0.09375 1.765625 0.09375 C 2.5 0.09375 2.84375 -0.390625 2.96875 -0.640625 C 3.015625 -0.265625 3.265625 0.046875 3.65625 0.046875 C 3.875 0.046875 4.4375 -0.078125 4.4375 -0.796875 Z M 2.890625 -1.265625 C 2.890625 -0.390625 2.21875 -0.125 1.828125 -0.125 C 1.40625 -0.125 1.015625 -0.421875 1.015625 -0.875 C 1.015625 -1.46875 1.515625 -2.09375 2.890625 -2.140625 Z M 2.890625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph3-2">
<path style="stroke:none;" d="M 3.328125 -3.390625 C 3.328125 -3.6875 3.0625 -3.953125 2.65625 -3.953125 C 2.125 -3.953125 1.75 -3.578125 1.546875 -3.015625 L 1.53125 -3.015625 L 1.53125 -3.953125 L 0.265625 -3.859375 L 0.265625 -3.578125 C 0.875 -3.578125 0.953125 -3.515625 0.953125 -3.078125 L 0.953125 -0.6875 C 0.953125 -0.28125 0.859375 -0.28125 0.265625 -0.28125 L 0.265625 0 C 0.734375 -0.015625 0.859375 -0.03125 1.3125 -0.03125 L 2.453125 0 L 2.453125 -0.28125 L 2.265625 -0.28125 C 1.625 -0.28125 1.59375 -0.375 1.59375 -0.703125 L 1.59375 -2.046875 C 1.59375 -2.40625 1.6875 -3.734375 2.703125 -3.734375 L 2.703125 -3.71875 C 2.6875 -3.703125 2.546875 -3.609375 2.546875 -3.390625 C 2.546875 -3.140625 2.734375 -3 2.9375 -3 C 3.125 -3 3.328125 -3.125 3.328125 -3.390625 Z M 3.328125 -3.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_piano-glyph3-3">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.125 3.765625 -1.1875 3.6875 -1.1875 C 3.609375 -1.1875 3.578125 -1.125 3.5625 -1.078125 C 3.265625 -0.171875 2.46875 -0.15625 2.328125 -0.15625 C 1.90625 -0.15625 1.53125 -0.390625 1.328125 -0.703125 C 1.03125 -1.140625 1.03125 -1.671875 1.03125 -2.046875 L 3.578125 -2.046875 C 3.765625 -2.046875 3.8125 -2.046875 3.8125 -2.234375 C 3.8125 -3.15625 3.3125 -4 2.171875 -4 C 1.09375 -4 0.265625 -3.078125 0.265625 -1.96875 C 0.265625 -0.796875 1.203125 0.09375 2.28125 0.09375 C 3.375 0.09375 3.8125 -0.859375 3.8125 -1.0625 Z M 3.203125 -2.265625 L 1.03125 -2.265625 C 1.125 -3.640625 1.921875 -3.78125 2.171875 -3.78125 C 2.65625 -3.78125 3.203125 -3.40625 3.203125 -2.265625 Z M 3.203125 -2.265625 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez12a_add_piano-surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(90.861511%,95.254517%,93.763733%);fill-opacity:1;" d="M 48.34375 94.566406 L 48.34375 26.75 L 189.632812 26.75 L 189.632812 94.566406 Z M 48.34375 94.566406 "/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 51.025078 -38.26642 L 51.025078 38.26963 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 192.757053 -38.26642 L 192.757053 38.26963 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-1" x="41.147231" y="13.391022"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-1" x="48.291834" y="13.391022"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph2-1" x="182.436319" y="13.391022"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-1" x="189.581919" y="13.391022"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-1" x="51.268503" y="85.551813"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph2-1" x="179.560334" y="85.497981"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 68.031348 -22.678646 L 168.15674 -22.678646 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.534679 -0.00112577 C 3.978253 0.13994 1.529193 0.919721 0.000979812 1.770034 L 0.000979812 -1.772286 C 1.529193 -0.921972 3.978253 -0.138273 4.534679 -0.00112577 Z M 4.534679 -0.00112577 " transform="matrix(0.996875,0,0,-0.996875,165.108398,83.264503)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-1" x="51.268503" y="62.945678"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph2-1" x="179.560334" y="62.891847"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 68.031348 0.00160502 L 168.15674 0.00160502 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.534679 0.00160502 C 3.978253 0.138752 1.529193 0.918533 0.000979812 1.772765 L 0.000979812 -1.773473 C 1.529193 -0.919241 3.978253 -0.139461 4.534679 0.00160502 Z M 4.534679 0.00160502 " transform="matrix(0.996875,0,0,-0.996875,165.108398,60.65785)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-1" x="51.268503" y="40.339544"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph2-1" x="179.560334" y="40.285713"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 68.031348 22.677937 L 168.15674 22.677937 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.534679 0.000417304 C 3.978253 0.137565 1.529193 0.921264 0.000979812 1.771577 L 0.000979812 -1.770743 C 1.529193 -0.920429 3.978253 -0.13673 4.534679 0.000417304 Z M 4.534679 0.000417304 " transform="matrix(0.996875,0,0,-0.996875,165.108398,38.051197)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 113.367188 57.648438 L 124.609375 57.648438 L 124.609375 45.019531 L 113.367188 45.019531 Z M 113.367188 57.648438 "/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-2" x="116.768175" y="53.4006"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-3" x="115.352612" y="55.659519"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph3-1" x="7.412981" y="57.118944"/>
  <use xlink:href="#fisica2_lez12a_add_piano-glyph3-2" x="12.006415" y="57.118944"/>
  <use xlink:href="#fisica2_lez12a_add_piano-glyph3-3" x="15.599643" y="57.118944"/>
  <use xlink:href="#fisica2_lez12a_add_piano-glyph3-1" x="19.686271" y="57.118944"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-2" x="12.527947" y="68.043697"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 55.605799 -52.443536 L 188.176332 -52.443536 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.763136 0.00177605 C 3.300754 0.111494 1.267055 0.750209 0.00138063 1.447701 L 0.00138063 -1.448067 C 1.267055 -0.750575 3.300754 -0.11186 3.763136 0.00177605 Z M 3.763136 0.00177605 " transform="matrix(-0.996875,0,0,0.996875,52.911533,112.93573)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762568 -0.00177605 C 3.300185 0.11186 1.270405 0.750575 0.000812288 1.448067 L 0.000812288 -1.447701 C 1.270405 -0.750209 3.300185 -0.111494 3.762568 -0.00177605 Z M 3.762568 -0.00177605 " transform="matrix(0.996875,0,0,-0.996875,185.065596,112.93573)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 113.296875 119.347656 L 124.679688 119.347656 L 124.679688 106.523438 L 113.296875 106.523438 Z M 113.296875 119.347656 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-4" x="116.606681" y="116.038244"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:0.3985,0.99628;stroke-miterlimit:10;" d="M 51.025078 -38.26642 L 51.025078 -56.695103 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:0.3985,0.99628;stroke-miterlimit:10;" d="M 192.757053 -38.26642 L 192.757053 -56.695103 " transform="matrix(0.996875,0,0,-0.996875,-2.521875,60.65785)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-5" x="79.606669" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-3" x="89.557475" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-3" x="99.254078" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-4" x="106.523663" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-6" x="129.660659" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-3" x="137.275887" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph0-2" x="146.977605" y="135.818238"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_piano-glyph1-4" x="153.607691" y="135.818238"/>
</g>
</g>
</svg><figcaption><strong>Condensatore piano e volume del campo</strong><span class="figure-explanation">Le armature hanno area $\\Sigma$ e distanza $d$. Nel caso ideale il campo va da $+Q$ a $-Q$ ed occupa il volume $\\tau=\\Sigma d$.</span></figcaption></figure><!-- END L12 ADD piano --><p>Sostituiamo queste due espressioni nella formula dell'energia $W = \\frac{1}{2} C V^2$:</p>
        <p>$$W = \\frac{1}{2} \\left( \\frac{\\epsilon_0 \\Sigma}{d} \\right) (E d)^2 = \\frac{1}{2} \\frac{\\epsilon_0 \\Sigma}{d} E^2 d^2 = \\frac{1}{2} \\epsilon_0 E^2 (\\Sigma d)$$</p>
        <p>Il termine $\\Sigma d$ rappresenta il volume $\\tau$ dello spazio tra le armature del condensatore. Quindi:</p>
        <p>$$W = \\frac{1}{2} \\epsilon_0 E^2 \\tau$$</p>
        <p>Questo risultato ci suggerisce di interpretare l'energia come <strong>distribuita nello spazio</strong>, con una densità che dipende solo dal campo elettrico presente punto per punto.</p>`,
        subsections: [
          {
            subtitle: "Definizione — Densità di energia elettrostatica",
            content: `<p>Si definisce <strong>densità di energia elettrostatica</strong> nel vuoto la grandezza locale</p>
            <p>$$u_E(\\vec{r}) = \\frac{dW}{d\\tau} = \\frac{1}{2} \\epsilon_0 \\left| \\vec{E}(\\vec{r}) \\right|^2$$</p>
            <p>dove $dW$ è l'energia elettrostatica contenuta nel volume infinitesimo $d\\tau$ centrato nel punto $\\vec{r}$; $\\vec{E}(\\vec{r})$ è il campo elettrico in quel punto, misurato in V/m; $\\epsilon_0 \\simeq 8{,}85 \\times 10^{-12}$ F/m è la costante dielettrica del vuoto.</p>
            <p>L'unità di misura di $u_E$ nel Sistema Internazionale è il joule su metro cubo (J/m$^3$). Si noti che $u_E$ dipende soltanto dal <strong>modulo</strong> del campo, non dalla sua direzione.</p>
            <p>L'energia totale immagazzinata in una regione di volume $\\tau$ si ottiene integrando la densità locale:</p>
            <p>$$W = \\int_{\\tau} u_E \\, d\\tau = \\frac{1}{2} \\epsilon_0 \\int_{\\tau} \\left| \\vec{E} \\right|^2 d\\tau$$</p>`
          },
          {
            subtitle: "Densità locale e densità media",
            content: `<p>È essenziale distinguere due grandezze diverse:</p>
            <ul>
              <li>la <strong>densità locale</strong> $u_E(\\vec{r}) = dW/d\\tau = \\frac{1}{2}\\epsilon_0 |\\vec{E}(\\vec{r})|^2$, che è la definizione di validità generale;</li>
              <li>il <strong>rapporto medio</strong> $\\dfrac{W}{\\tau}$, che è la densità di energia <em>media</em> sul volume $\\tau$.</li>
            </ul>
            <p>Le due grandezze coincidono in ogni punto quando la densità di energia è <strong>costante</strong> nella regione considerata, cioè (nel vuoto) quando $|\\vec{E}|$ è costante: in quel caso $W/\\tau = \\frac{1}{2}\\epsilon_0 |\\vec{E}|^2$. Un campo vettoriale <em>uniforme</em> è dunque una condizione <strong>sufficiente ma non necessaria</strong>: ciò che conta è la costanza del modulo, non quella della direzione (il condensatore piano ideale è il caso tipico).</p>
            <p>Se invece $|\\vec{E}|$ varia da punto a punto, $W/\\tau$ non ha significato locale e per calcolare l'energia si deve usare l'integrale $W = \\int u_E \\, d\\tau$. L'esempio del condensatore sferico che segue mostra proprio questa procedura.</p>`
          }
        ],
        formulas: [
          { label: "Densità di energia elettrostatica", latex: "u_E = \\frac{1}{2} \\epsilon_0 |\\vec{E}|^2" },
          { label: "Energia totale per integrazione", latex: "W = \\frac{1}{2} \\epsilon_0 \\int_{\\tau} |\\vec{E}|^2 \\, d\\tau" }
        ]
      },

      {
        id: "s12-esempio-sferico",
        type: "section",
        title: "Esempio — Energia di un condensatore sferico",
        icon: "⚪",
        content: `<p>Calcoliamo l'energia immagazzinata in un condensatore sferico con armature di raggio $R_1$ e $R_2$ ($R_2 \\gt R_1$), caricato con cariche $+Q$ e $-Q$.</p>
        <!-- L12 ADD sferico --><figure class="figura" data-id="fisica2_lez12a_add_sferico"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez12a_add_sferico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="238.108pt" height="168.491pt" viewBox="0 0 238.108 168.491" version="1.2"><style>#fisica2_lez12a_add_sferico [fill="rgb(83.552551%,91.459656%,88.775635%)"],#fisica2_lez12a_add_sferico [style*="fill:rgb(83.552551%,91.459656%,88.775635%)"]{fill:#293d36!important}[data-mode="light"] #fisica2_lez12a_add_sferico [fill="rgb(83.552551%,91.459656%,88.775635%)"],[data-mode="light"] #fisica2_lez12a_add_sferico [style*="fill:rgb(83.552551%,91.459656%,88.775635%)"]{fill:#d5e9e2!important}#fisica2_lez12a_add_sferico [fill="rgb(0%,0%,0%)"],#fisica2_lez12a_add_sferico [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez12a_add_sferico [stroke="rgb(0%,0%,0%)"],#fisica2_lez12a_add_sferico [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez12a_add_sferico [fill="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_sferico [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_sferico [fill="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_sferico [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#168660!important}#fisica2_lez12a_add_sferico [stroke="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_sferico [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_sferico [stroke="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_sferico [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#168660!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph0-1">
<path style="stroke:none;" d="M 6.625 -2.234375 C 6.625 -2.4375 6.453125 -2.4375 6.3125 -2.4375 L 3.765625 -2.4375 L 3.765625 -4.984375 C 3.765625 -5.125 3.765625 -5.296875 3.5625 -5.296875 C 3.375 -5.296875 3.375 -5.109375 3.375 -4.984375 L 3.375 -2.4375 L 0.828125 -2.4375 C 0.703125 -2.4375 0.515625 -2.4375 0.515625 -2.25 C 0.515625 -2.046875 0.671875 -2.046875 0.828125 -2.046875 L 3.375 -2.046875 L 3.375 0.515625 C 3.375 0.65625 3.375 0.828125 3.578125 0.828125 C 3.765625 0.828125 3.765625 0.640625 3.765625 0.515625 L 3.765625 -2.046875 L 6.3125 -2.046875 C 6.4375 -2.046875 6.625 -2.046875 6.625 -2.234375 Z M 6.625 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph0-2">
<path style="stroke:none;" d="M 3.046875 2.125 C 3.046875 2.078125 3.015625 2.0625 2.96875 2 C 1.8125 0.9375 1.46875 -0.671875 1.46875 -2.234375 C 1.46875 -3.625 1.734375 -5.296875 3 -6.5 C 3.03125 -6.53125 3.046875 -6.5625 3.046875 -6.609375 C 3.046875 -6.671875 3 -6.703125 2.9375 -6.703125 C 2.828125 -6.703125 2.03125 -6.0625 1.546875 -5.078125 C 1.125 -4.234375 0.90625 -3.3125 0.90625 -2.25 C 0.90625 -1.59375 0.984375 -0.578125 1.46875 0.46875 C 2 1.578125 2.828125 2.21875 2.9375 2.21875 C 3 2.21875 3.046875 2.1875 3.046875 2.125 Z M 3.046875 2.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph0-3">
<path style="stroke:none;" d="M 2.65625 -2.25 C 2.65625 -2.96875 2.5625 -3.953125 2.09375 -4.953125 C 1.5625 -6.046875 0.734375 -6.703125 0.625 -6.703125 C 0.53125 -6.703125 0.515625 -6.625 0.515625 -6.609375 C 0.515625 -6.5625 0.53125 -6.53125 0.59375 -6.46875 C 1.125 -6 2.09375 -4.796875 2.09375 -2.25 C 2.09375 -0.96875 1.875 0.8125 0.578125 2.015625 C 0.546875 2.046875 0.515625 2.078125 0.515625 2.125 C 0.515625 2.15625 0.53125 2.21875 0.625 2.21875 C 0.734375 2.21875 1.53125 1.578125 2.015625 0.609375 C 2.453125 -0.25 2.65625 -1.171875 2.65625 -2.25 Z M 2.65625 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph0-4">
<path style="stroke:none;" d="M 6.625 -3.140625 C 6.625 -3.34375 6.421875 -3.34375 6.296875 -3.34375 L 0.84375 -3.34375 C 0.703125 -3.34375 0.515625 -3.34375 0.515625 -3.140625 C 0.515625 -2.953125 0.6875 -2.953125 0.796875 -2.953125 L 6.328125 -2.953125 C 6.453125 -2.953125 6.625 -2.953125 6.625 -3.140625 Z M 6.625 -1.328125 C 6.625 -1.515625 6.453125 -1.515625 6.328125 -1.515625 L 0.796875 -1.515625 C 0.6875 -1.515625 0.515625 -1.515625 0.515625 -1.328125 C 0.515625 -1.140625 0.703125 -1.140625 0.84375 -1.140625 L 6.296875 -1.140625 C 6.421875 -1.140625 6.625 -1.140625 6.625 -1.328125 Z M 6.625 -1.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph0-5">
<path style="stroke:none;" d="M 4.328125 -1.46875 L 4.328125 -1.75 L 3.421875 -1.75 L 3.421875 -5.8125 C 3.421875 -5.984375 3.421875 -6.046875 3.25 -6.046875 C 3.140625 -6.046875 3.125 -6.046875 3.046875 -5.921875 L 0.265625 -1.75 L 0.265625 -1.46875 L 2.703125 -1.46875 L 2.703125 -0.703125 C 2.703125 -0.375 2.671875 -0.28125 2 -0.28125 L 1.8125 -0.28125 L 1.8125 0 C 2.375 -0.03125 3 -0.03125 3.0625 -0.03125 C 3.09375 -0.03125 3.75 -0.03125 4.3125 0 L 4.3125 -0.28125 L 4.109375 -0.28125 C 3.4375 -0.28125 3.421875 -0.375 3.421875 -0.703125 L 3.421875 -1.46875 Z M 2.75 -1.75 L 0.546875 -1.75 L 2.75 -5.0625 Z M 2.75 -1.75 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-1">
<path style="stroke:none;" d="M 5.96875 0 C 5.96875 -0.046875 5.921875 -0.109375 5.84375 -0.109375 C 5.78125 -0.109375 5.75 -0.046875 5.734375 0.015625 C 5.515625 0.625 5 0.84375 4.671875 0.84375 C 4.265625 0.84375 4.125 0.59375 4.046875 -0.046875 C 5.984375 -0.890625 6.78125 -2.640625 6.78125 -3.875 C 6.78125 -5.28125 5.828125 -6.296875 4.421875 -6.296875 C 2.421875 -6.296875 0.453125 -4.25 0.453125 -2.203125 C 0.453125 -0.734375 1.453125 0.203125 2.8125 0.203125 C 3.171875 0.203125 3.546875 0.109375 3.6875 0.078125 L 3.6875 0.359375 C 3.671875 0.46875 3.671875 0.59375 3.671875 0.703125 C 3.671875 1.125 3.734375 1.734375 4.4375 1.734375 C 5.5 1.734375 5.96875 0.140625 5.96875 0 Z M 5.96875 -4.140625 C 5.96875 -3.25 5.515625 -1.234375 3.984375 -0.375 C 3.90625 -0.859375 3.734375 -1.328125 3.15625 -1.328125 C 2.65625 -1.328125 2.21875 -0.875 2.21875 -0.421875 C 2.21875 -0.34375 2.25 -0.21875 2.265625 -0.15625 C 1.859375 -0.328125 1.265625 -0.78125 1.265625 -1.9375 C 1.265625 -2.40625 1.40625 -3.859375 2.375 -5 C 2.84375 -5.546875 3.59375 -6.046875 4.359375 -6.046875 C 5.25 -6.046875 5.96875 -5.390625 5.96875 -4.140625 Z M 3.703125 -0.234375 C 3.578125 -0.171875 3.234375 -0.046875 2.875 -0.046875 C 2.75 -0.046875 2.453125 -0.046875 2.453125 -0.421875 C 2.453125 -0.75 2.78125 -1.109375 3.171875 -1.109375 C 3.703125 -1.109375 3.703125 -0.625 3.703125 -0.234375 Z M 3.703125 -0.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-2">
<path style="stroke:none;" d="M 5.90625 -4.921875 C 5.90625 -4.59375 5.765625 -3.921875 5.25 -3.546875 C 5.046875 -3.390625 4.59375 -3.15625 3.875 -3.15625 L 2.828125 -3.15625 L 3.40625 -5.484375 C 3.453125 -5.703125 3.484375 -5.796875 3.640625 -5.8125 C 3.734375 -5.828125 4.015625 -5.828125 4.203125 -5.828125 C 4.921875 -5.828125 5.90625 -5.828125 5.90625 -4.921875 Z M 6.921875 -0.84375 C 6.921875 -0.90625 6.875 -0.953125 6.8125 -0.953125 C 6.71875 -0.953125 6.703125 -0.90625 6.671875 -0.796875 C 6.515625 -0.34375 6.1875 -0.03125 5.859375 -0.03125 C 5.515625 -0.03125 5.5 -0.296875 5.5 -0.546875 C 5.5 -0.78125 5.5625 -1.296875 5.5625 -1.359375 C 5.59375 -1.5 5.625 -1.859375 5.625 -2 C 5.625 -2.5 5.3125 -2.84375 4.796875 -3.03125 C 6 -3.34375 6.75 -4.015625 6.75 -4.75 C 6.75 -5.53125 5.90625 -6.109375 4.71875 -6.109375 L 2.125 -6.109375 C 1.96875 -6.109375 1.859375 -6.109375 1.859375 -5.9375 C 1.859375 -5.828125 1.9375 -5.828125 2.125 -5.828125 C 2.15625 -5.828125 2.328125 -5.828125 2.46875 -5.8125 C 2.625 -5.796875 2.6875 -5.78125 2.6875 -5.671875 C 2.6875 -5.625 2.671875 -5.59375 2.640625 -5.5 L 1.4375 -0.671875 C 1.359375 -0.359375 1.34375 -0.28125 0.671875 -0.28125 C 0.5 -0.28125 0.40625 -0.28125 0.40625 -0.109375 C 0.40625 -0.015625 0.46875 0 0.53125 0 L 1.09375 -0.015625 C 1.28125 -0.03125 1.3125 -0.03125 1.65625 -0.03125 L 2.21875 -0.015625 L 2.796875 0 C 2.859375 0 2.96875 0 2.96875 -0.15625 C 2.96875 -0.28125 2.890625 -0.28125 2.703125 -0.28125 C 2.65625 -0.28125 2.5 -0.28125 2.359375 -0.296875 C 2.15625 -0.328125 2.15625 -0.359375 2.15625 -0.4375 C 2.15625 -0.46875 2.15625 -0.484375 2.203125 -0.640625 L 2.765625 -2.9375 L 3.875 -2.9375 C 4.671875 -2.9375 4.875 -2.46875 4.875 -2.140625 C 4.875 -2.078125 4.875 -2.015625 4.828125 -1.8125 C 4.609375 -0.984375 4.609375 -0.90625 4.609375 -0.78125 C 4.609375 0.03125 5.375 0.203125 5.828125 0.203125 C 6.609375 0.203125 6.921875 -0.703125 6.921875 -0.84375 Z M 6.921875 -0.84375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-3">
<path style="stroke:none;" d="M 4 -3.34375 C 4 -3.6875 3.6875 -3.953125 3.25 -3.953125 C 2.578125 -3.953125 2.203125 -3.453125 2.078125 -3.28125 C 1.96875 -3.765625 1.5625 -3.953125 1.21875 -3.953125 C 0.90625 -3.953125 0.703125 -3.75 0.546875 -3.4375 C 0.375 -3.125 0.265625 -2.609375 0.265625 -2.578125 C 0.265625 -2.5 0.328125 -2.46875 0.390625 -2.46875 C 0.484375 -2.46875 0.5 -2.515625 0.546875 -2.6875 C 0.71875 -3.390625 0.90625 -3.734375 1.203125 -3.734375 C 1.46875 -3.734375 1.46875 -3.4375 1.46875 -3.3125 C 1.46875 -3.125 1.40625 -2.84375 1.34375 -2.609375 C 1.28125 -2.375 1.203125 -2 1.15625 -1.890625 L 0.796875 -0.421875 C 0.734375 -0.203125 0.734375 -0.1875 0.734375 -0.15625 C 0.734375 -0.046875 0.828125 0.09375 1.015625 0.09375 C 1.3125 0.09375 1.375 -0.140625 1.4375 -0.40625 C 1.53125 -0.78125 1.53125 -0.796875 1.625 -1.171875 C 1.953125 -2.515625 2.015625 -2.71875 2.03125 -2.765625 C 2.078125 -2.875 2.5 -3.734375 3.234375 -3.734375 C 3.4375 -3.734375 3.5625 -3.65625 3.609375 -3.625 C 3.3125 -3.5625 3.15625 -3.3125 3.15625 -3.125 C 3.15625 -2.953125 3.28125 -2.8125 3.515625 -2.8125 C 3.75 -2.8125 4 -3.015625 4 -3.34375 Z M 4 -3.34375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-4">
<path style="stroke:none;" d="M 5.703125 -5.5 C 5.703125 -5.609375 5.609375 -5.65625 5.5625 -5.6875 C 5.4375 -5.78125 5.28125 -5.90625 5.1875 -6.1875 C 5.140625 -6.296875 5.109375 -6.40625 4.984375 -6.40625 C 4.890625 -6.40625 4.796875 -6.34375 4.796875 -6.203125 C 4.796875 -6.046875 4.96875 -5.75 5 -5.6875 L 1.96875 -5.6875 C 1.8125 -5.6875 1.640625 -5.6875 1.640625 -5.5 C 1.640625 -5.3125 1.8125 -5.3125 1.96875 -5.3125 L 4.84375 -5.3125 C 4.828125 -5.296875 4.4375 -4.9375 4.4375 -4.796875 C 4.4375 -4.6875 4.515625 -4.609375 4.625 -4.609375 C 4.71875 -4.609375 4.765625 -4.671875 4.796875 -4.703125 C 4.890625 -4.828125 5.109375 -5.078125 5.5 -5.296875 C 5.609375 -5.328125 5.703125 -5.375 5.703125 -5.5 Z M 5.703125 -5.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-5">
<path style="stroke:none;" d="M 6.53125 -2.1875 C 6.53125 -2.265625 6.46875 -2.3125 6.40625 -2.3125 C 6.328125 -2.3125 6.3125 -2.296875 6.21875 -2.09375 C 5.671875 -0.84375 5.296875 -0.28125 3.8125 -0.28125 L 2.453125 -0.28125 C 2.328125 -0.28125 2.3125 -0.28125 2.265625 -0.28125 C 2.1875 -0.296875 2.15625 -0.296875 2.15625 -0.359375 C 2.15625 -0.390625 2.15625 -0.40625 2.203125 -0.578125 L 2.8125 -3.015625 L 3.71875 -3.015625 C 4.359375 -3.015625 4.484375 -2.90625 4.484375 -2.625 C 4.484375 -2.546875 4.453125 -2.359375 4.421875 -2.21875 C 4.40625 -2.15625 4.390625 -2.125 4.390625 -2.09375 C 4.390625 -2.09375 4.390625 -1.96875 4.515625 -1.96875 C 4.625 -1.96875 4.625 -2.03125 4.671875 -2.171875 L 5.140625 -4.046875 C 5.171875 -4.171875 5.171875 -4.1875 5.171875 -4.234375 C 5.171875 -4.296875 5.125 -4.34375 5.046875 -4.34375 C 4.953125 -4.34375 4.9375 -4.296875 4.890625 -4.125 C 4.71875 -3.421875 4.4375 -3.296875 3.734375 -3.296875 L 2.875 -3.296875 C 3.015625 -3.859375 3.4375 -5.546875 3.484375 -5.65625 C 3.53125 -5.78125 3.59375 -5.796875 3.890625 -5.796875 L 5.203125 -5.796875 C 6.3125 -5.796875 6.5625 -5.53125 6.5625 -4.8125 C 6.5625 -4.53125 6.53125 -4.265625 6.53125 -4.203125 C 6.53125 -4.125 6.5625 -4.0625 6.65625 -4.0625 C 6.75 -4.0625 6.765625 -4.125 6.78125 -4.296875 L 6.96875 -5.953125 C 6.96875 -6.078125 6.875 -6.078125 6.71875 -6.078125 L 2.109375 -6.078125 C 1.9375 -6.078125 1.84375 -6.078125 1.84375 -5.921875 C 1.84375 -5.796875 1.9375 -5.796875 2.125 -5.796875 C 2.15625 -5.796875 2.3125 -5.796875 2.453125 -5.78125 C 2.65625 -5.75 2.65625 -5.71875 2.65625 -5.640625 C 2.65625 -5.609375 2.65625 -5.59375 2.625 -5.4375 L 1.4375 -0.671875 C 1.34375 -0.359375 1.328125 -0.28125 0.65625 -0.28125 C 0.484375 -0.28125 0.390625 -0.28125 0.390625 -0.109375 C 0.390625 0 0.484375 0 0.640625 0 L 5.359375 0 C 5.515625 0 5.546875 0 5.5625 -0.03125 C 5.59375 -0.046875 5.609375 -0.046875 5.65625 -0.171875 C 5.765625 -0.40625 6.53125 -2.109375 6.53125 -2.1875 Z M 6.53125 -2.1875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-6">
<path style="stroke:none;" d="M 4.59375 -1.28125 C 4.59375 -1.328125 4.5625 -1.390625 4.484375 -1.390625 C 4.375 -1.390625 4.359375 -1.34375 4.328125 -1.171875 C 4.125 -0.390625 3.9375 -0.125 3.65625 -0.125 C 3.4375 -0.125 3.375 -0.34375 3.375 -0.53125 C 3.375 -0.65625 3.421875 -0.90625 3.4375 -0.921875 L 4.6875 -5.90625 C 4.71875 -6.03125 4.71875 -6.046875 4.71875 -6.078125 C 4.71875 -6.15625 4.671875 -6.203125 4.578125 -6.203125 C 4.453125 -6.203125 3.671875 -6.125 3.5 -6.109375 C 3.40625 -6.109375 3.3125 -6.09375 3.3125 -5.9375 C 3.3125 -5.828125 3.40625 -5.828125 3.546875 -5.828125 C 3.96875 -5.828125 3.96875 -5.765625 3.96875 -5.6875 C 3.96875 -5.625 3.890625 -5.3125 3.84375 -5.125 C 3.71875 -4.640625 3.796875 -4.921875 3.671875 -4.4375 L 3.421875 -3.390625 C 3.25 -3.71875 2.96875 -3.953125 2.5625 -3.953125 C 1.53125 -3.953125 0.375 -2.71875 0.375 -1.34375 C 0.375 -0.359375 1 0.09375 1.59375 0.09375 C 2.1875 0.09375 2.65625 -0.390625 2.796875 -0.546875 C 2.890625 -0.0625 3.34375 0.09375 3.625 0.09375 C 3.890625 0.09375 4.109375 -0.015625 4.3125 -0.390625 C 4.46875 -0.6875 4.59375 -1.25 4.59375 -1.28125 Z M 3.265625 -2.828125 L 2.828125 -1.078125 C 2.796875 -0.9375 2.78125 -0.921875 2.640625 -0.734375 C 2.328125 -0.359375 1.953125 -0.125 1.625 -0.125 C 1.1875 -0.125 1.03125 -0.578125 1.03125 -0.96875 C 1.03125 -1.40625 1.296875 -2.4375 1.515625 -2.859375 C 1.796875 -3.390625 2.203125 -3.734375 2.5625 -3.734375 C 3.15625 -3.734375 3.296875 -3 3.296875 -2.953125 C 3.296875 -2.90625 3.28125 -2.859375 3.265625 -2.828125 Z M 3.265625 -2.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-7">
<path style="stroke:none;" d="M 6.359375 0.265625 C 6.359375 0.15625 6.296875 0.109375 6.203125 0.078125 L 1.40625 -2.25 L 6.1875 -4.53125 C 6.265625 -4.5625 6.359375 -4.625 6.359375 -4.734375 C 6.359375 -4.828125 6.296875 -4.9375 6.171875 -4.9375 C 6.171875 -4.9375 6.109375 -4.9375 6 -4.875 L 0.953125 -2.453125 C 0.859375 -2.40625 0.765625 -2.359375 0.765625 -2.25 C 0.765625 -2.125 0.84375 -2.078125 0.953125 -2.03125 L 5.984375 0.390625 C 6.109375 0.453125 6.171875 0.453125 6.171875 0.453125 C 6.3125 0.453125 6.359375 0.328125 6.359375 0.265625 Z M 6.359375 0.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-8">
<path style="stroke:none;" d="M 5.203125 -3.625 C 5.203125 -3.859375 5.015625 -3.859375 4.84375 -3.859375 L 1.75 -3.859375 C 1.53125 -3.859375 1.21875 -3.859375 0.796875 -3.4375 C 0.5625 -3.1875 0.234375 -2.703125 0.234375 -2.625 C 0.234375 -2.53125 0.34375 -2.53125 0.359375 -2.53125 C 0.4375 -2.53125 0.453125 -2.546875 0.515625 -2.640625 C 0.953125 -3.296875 1.5 -3.296875 1.671875 -3.296875 L 2.1875 -3.296875 C 1.796875 -1.953125 1.1875 -0.671875 1.125 -0.546875 C 1.046875 -0.421875 0.96875 -0.234375 0.96875 -0.15625 C 0.96875 -0.046875 1.046875 0.09375 1.25 0.09375 C 1.5625 0.09375 1.640625 -0.21875 1.828125 -0.953125 L 2.4375 -3.296875 L 3.453125 -3.296875 C 3.328125 -2.734375 3.09375 -1.8125 3.09375 -1.0625 C 3.09375 -1 3.09375 -0.671875 3.171875 -0.34375 C 3.265625 -0.015625 3.34375 0.09375 3.515625 0.09375 C 3.703125 0.09375 3.90625 -0.0625 3.90625 -0.265625 C 3.90625 -0.328125 3.890625 -0.359375 3.84375 -0.46875 C 3.5625 -1.09375 3.5625 -1.765625 3.5625 -1.96875 C 3.5625 -2.1875 3.5625 -2.578125 3.71875 -3.296875 L 4.765625 -3.296875 C 4.875 -3.296875 5.203125 -3.296875 5.203125 -3.625 Z M 5.203125 -3.625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-9">
<path style="stroke:none;" d="M 3.328125 -0.375 C 3.328125 -0.453125 3.28125 -0.515625 3.21875 -0.515625 C 3.1875 -0.515625 3.171875 -0.515625 3.125 -0.46875 C 2.828125 -0.28125 2.46875 -0.125 2.125 -0.125 C 1.59375 -0.125 1.125 -0.515625 1.125 -1.28125 C 1.125 -1.4375 1.15625 -1.703125 1.21875 -2.015625 L 2.75 -2.015625 C 2.90625 -2.015625 3.046875 -2.015625 3.046875 -2.171875 C 3.046875 -2.296875 2.9375 -2.296875 2.78125 -2.296875 L 1.296875 -2.296875 C 1.53125 -3.078125 2.0625 -3.578125 2.859375 -3.578125 L 3.140625 -3.578125 C 3.28125 -3.578125 3.4375 -3.578125 3.4375 -3.71875 C 3.4375 -3.859375 3.328125 -3.859375 3.15625 -3.859375 L 2.828125 -3.859375 C 1.71875 -3.859375 0.4375 -3.03125 0.4375 -1.625 C 0.4375 -0.484375 1.25 0.09375 2.109375 0.09375 C 2.703125 0.09375 3.328125 -0.265625 3.328125 -0.375 Z M 3.328125 -0.375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph1-10">
<path style="stroke:none;" d="M 4.703125 -3.625 C 4.703125 -3.859375 4.5 -3.859375 4.328125 -3.859375 L 1.75 -3.859375 C 1.53125 -3.859375 1.21875 -3.859375 0.796875 -3.4375 C 0.5625 -3.1875 0.234375 -2.703125 0.234375 -2.625 C 0.234375 -2.53125 0.34375 -2.53125 0.359375 -2.53125 C 0.4375 -2.53125 0.453125 -2.546875 0.515625 -2.640625 C 0.953125 -3.296875 1.5 -3.296875 1.671875 -3.296875 L 2.421875 -3.296875 L 1.515625 -0.34375 C 1.46875 -0.203125 1.46875 -0.1875 1.46875 -0.140625 C 1.46875 -0.015625 1.546875 0.109375 1.75 0.109375 C 2 0.109375 2.09375 -0.109375 2.125 -0.28125 L 2.703125 -3.296875 L 4.25 -3.296875 C 4.375 -3.296875 4.703125 -3.296875 4.703125 -3.625 Z M 4.703125 -3.625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph2-1">
<path style="stroke:none;" d="M 6.359375 -2.234375 C 6.359375 -2.4375 6.1875 -2.4375 6.046875 -2.4375 L 1.078125 -2.4375 C 0.953125 -2.4375 0.765625 -2.4375 0.765625 -2.25 C 0.765625 -2.046875 0.9375 -2.046875 1.078125 -2.046875 L 6.046875 -2.046875 C 6.171875 -2.046875 6.359375 -2.046875 6.359375 -2.234375 Z M 6.359375 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph3-1">
<path style="stroke:none;" d="M 3 0 L 3 -0.234375 L 2.75 -0.234375 C 2.140625 -0.234375 2.140625 -0.3125 2.140625 -0.5 L 2.140625 -3.78125 C 2.140625 -3.953125 2.109375 -3.953125 1.9375 -3.953125 C 1.546875 -3.578125 0.9375 -3.578125 0.71875 -3.578125 L 0.71875 -3.34375 C 0.875 -3.34375 1.265625 -3.34375 1.625 -3.515625 L 1.625 -0.5 C 1.625 -0.3125 1.625 -0.234375 1.015625 -0.234375 L 0.75 -0.234375 L 0.75 0 C 1.078125 -0.03125 1.546875 -0.03125 1.875 -0.03125 C 2.21875 -0.03125 2.671875 -0.03125 3 0 Z M 3 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph3-2">
<path style="stroke:none;" d="M 3.203125 -1.109375 L 2.984375 -1.109375 C 2.96875 -1.03125 2.90625 -0.640625 2.828125 -0.578125 C 2.78125 -0.53125 2.296875 -0.53125 2.21875 -0.53125 L 1.09375 -0.53125 L 1.859375 -1.15625 C 2.0625 -1.3125 2.59375 -1.703125 2.78125 -1.875 C 2.953125 -2.046875 3.203125 -2.359375 3.203125 -2.78125 C 3.203125 -3.53125 2.53125 -3.953125 1.734375 -3.953125 C 0.96875 -3.953125 0.421875 -3.453125 0.421875 -2.890625 C 0.421875 -2.59375 0.6875 -2.546875 0.75 -2.546875 C 0.90625 -2.546875 1.078125 -2.65625 1.078125 -2.875 C 1.078125 -3 1 -3.203125 0.734375 -3.203125 C 0.875 -3.5 1.234375 -3.734375 1.640625 -3.734375 C 2.265625 -3.734375 2.59375 -3.265625 2.59375 -2.78125 C 2.59375 -2.359375 2.328125 -1.921875 1.90625 -1.546875 L 0.5 -0.25 C 0.4375 -0.1875 0.421875 -0.1875 0.421875 0 L 3.015625 0 Z M 3.203125 -1.109375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph3-3">
<path style="stroke:none;" d="M 3.28125 -1.90625 C 3.28125 -2.328125 3.28125 -3.953125 1.8125 -3.953125 C 0.359375 -3.953125 0.359375 -2.328125 0.359375 -1.90625 C 0.359375 -1.46875 0.359375 0.125 1.8125 0.125 C 3.28125 0.125 3.28125 -1.46875 3.28125 -1.90625 Z M 2.703125 -1.96875 C 2.703125 -1.59375 2.703125 -1 2.609375 -0.65625 C 2.4375 -0.140625 2.015625 -0.0625 1.8125 -0.0625 C 1.5625 -0.0625 1.15625 -0.1875 1.015625 -0.671875 C 0.921875 -1.03125 0.921875 -1.609375 0.921875 -1.96875 C 0.921875 -2.375 0.921875 -2.828125 1 -3.15625 C 1.15625 -3.6875 1.609375 -3.765625 1.8125 -3.765625 C 2.09375 -3.765625 2.484375 -3.640625 2.609375 -3.1875 C 2.703125 -2.875 2.703125 -2.4375 2.703125 -1.96875 Z M 2.703125 -1.96875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-1">
<path style="stroke:none;" d="M 4.578125 -1.65625 C 4.578125 -2.15625 4.390625 -2.5625 4.1875 -2.828125 C 3.796875 -3.3125 3.390625 -3.421875 2.8125 -3.546875 L 2.03125 -3.734375 C 1.3125 -3.921875 1.078125 -4.484375 1.078125 -4.875 C 1.078125 -5.484375 1.5625 -6.046875 2.3125 -6.046875 C 3.46875 -6.046875 3.9375 -5.1875 4.0625 -4.296875 C 4.078125 -4.125 4.09375 -4.078125 4.203125 -4.078125 C 4.328125 -4.078125 4.328125 -4.140625 4.328125 -4.328125 L 4.328125 -6.046875 C 4.328125 -6.234375 4.328125 -6.296875 4.21875 -6.296875 C 4.15625 -6.296875 4.140625 -6.296875 4.078125 -6.1875 C 3.96875 -6.03125 4.0625 -6.140625 3.765625 -5.671875 C 3.609375 -5.859375 3.140625 -6.296875 2.3125 -6.296875 C 1.265625 -6.296875 0.515625 -5.484375 0.515625 -4.578125 C 0.515625 -3.875 0.921875 -3.453125 0.96875 -3.40625 C 1.375 -3.015625 1.53125 -2.96875 2.59375 -2.71875 C 3.328125 -2.546875 3.40625 -2.53125 3.703125 -2.21875 C 3.703125 -2.21875 4.015625 -1.890625 4.015625 -1.359375 C 4.015625 -0.75 3.578125 -0.078125 2.765625 -0.078125 C 2.078125 -0.078125 0.828125 -0.359375 0.765625 -1.84375 C 0.75 -1.96875 0.75 -2.03125 0.640625 -2.03125 C 0.515625 -2.03125 0.515625 -1.953125 0.515625 -1.78125 L 0.515625 -0.046875 C 0.515625 0.125 0.515625 0.203125 0.609375 0.203125 C 0.671875 0.203125 0.6875 0.1875 0.75 0.078125 C 0.859375 -0.078125 0.78125 0.03125 1.078125 -0.421875 C 1.625 0.109375 2.328125 0.203125 2.765625 0.203125 C 3.859375 0.203125 4.578125 -0.703125 4.578125 -1.65625 Z M 4.578125 -1.65625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-2">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.125 3.765625 -1.1875 3.6875 -1.1875 C 3.609375 -1.1875 3.578125 -1.125 3.5625 -1.078125 C 3.265625 -0.171875 2.46875 -0.15625 2.328125 -0.15625 C 1.90625 -0.15625 1.53125 -0.390625 1.328125 -0.703125 C 1.03125 -1.140625 1.03125 -1.671875 1.03125 -2.046875 L 3.578125 -2.046875 C 3.765625 -2.046875 3.8125 -2.046875 3.8125 -2.234375 C 3.8125 -3.15625 3.3125 -4 2.171875 -4 C 1.09375 -4 0.265625 -3.078125 0.265625 -1.96875 C 0.265625 -0.796875 1.203125 0.09375 2.28125 0.09375 C 3.375 0.09375 3.8125 -0.859375 3.8125 -1.0625 Z M 3.203125 -2.265625 L 1.03125 -2.265625 C 1.125 -3.640625 1.921875 -3.78125 2.171875 -3.78125 C 2.65625 -3.78125 3.203125 -3.40625 3.203125 -2.265625 Z M 3.203125 -2.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-3">
<path style="stroke:none;" d="M 3.6875 -1.703125 L 3.4375 -1.703125 C 3.359375 -0.703125 3.234375 -0.25 2.125 -0.25 L 1.078125 -0.25 L 3.578125 -3.5625 C 3.671875 -3.671875 3.671875 -3.6875 3.671875 -3.71875 C 3.671875 -3.859375 3.578125 -3.859375 3.421875 -3.859375 L 0.484375 -3.859375 L 0.390625 -2.390625 L 0.640625 -2.390625 C 0.6875 -3.296875 0.84375 -3.625 1.859375 -3.625 L 2.859375 -3.625 L 0.34375 -0.296875 C 0.265625 -0.203125 0.265625 -0.1875 0.265625 -0.140625 C 0.265625 0 0.34375 0 0.5 0 L 3.546875 0 Z M 3.6875 -1.703125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-4">
<path style="stroke:none;" d="M 2.265625 0 L 2.265625 -0.28125 C 1.6875 -0.28125 1.640625 -0.328125 1.640625 -0.671875 L 1.640625 -3.953125 L 0.359375 -3.859375 L 0.359375 -3.578125 C 0.921875 -3.578125 1.015625 -3.515625 1.015625 -3.078125 L 1.015625 -0.6875 C 1.015625 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.71875 -0.015625 0.90625 -0.03125 1.3125 -0.03125 C 1.453125 -0.03125 1.828125 -0.03125 2.265625 0 Z M 1.765625 -5.390625 C 1.765625 -5.65625 1.546875 -5.875 1.28125 -5.875 C 1.015625 -5.875 0.796875 -5.65625 0.796875 -5.390625 C 0.796875 -5.125 1.015625 -4.90625 1.28125 -4.90625 C 1.546875 -4.90625 1.765625 -5.125 1.765625 -5.390625 Z M 1.765625 -5.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-5">
<path style="stroke:none;" d="M 4.328125 -1.90625 C 4.328125 -3.078125 3.390625 -4 2.296875 -4 C 1.15625 -4 0.265625 -3.046875 0.265625 -1.90625 C 0.265625 -0.78125 1.1875 0.09375 2.28125 0.09375 C 3.421875 0.09375 4.328125 -0.796875 4.328125 -1.90625 Z M 3.5625 -1.984375 C 3.5625 -1.65625 3.5625 -1.140625 3.328125 -0.734375 C 3.078125 -0.328125 2.671875 -0.15625 2.296875 -0.15625 C 1.84375 -0.15625 1.46875 -0.375 1.265625 -0.71875 C 1.03125 -1.09375 1.03125 -1.578125 1.03125 -1.984375 C 1.03125 -2.3125 1.03125 -2.828125 1.25 -3.1875 C 1.515625 -3.640625 1.96875 -3.78125 2.28125 -3.78125 C 2.796875 -3.78125 3.15625 -3.5 3.34375 -3.1875 C 3.546875 -2.8125 3.5625 -2.359375 3.5625 -1.984375 Z M 3.5625 -1.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-6">
<path style="stroke:none;" d="M 4.890625 0 L 4.890625 -0.28125 C 4.4375 -0.28125 4.203125 -0.28125 4.203125 -0.546875 L 4.203125 -2.265625 C 4.203125 -3.015625 4.203125 -3.265625 3.953125 -3.578125 C 3.75 -3.828125 3.40625 -3.953125 2.953125 -3.953125 C 2.125 -3.953125 1.75 -3.328125 1.625 -3.078125 L 1.609375 -3.078125 L 1.609375 -3.953125 L 0.3125 -3.859375 L 0.3125 -3.578125 C 0.921875 -3.578125 1 -3.515625 1 -3.078125 L 1 -0.6875 C 1 -0.28125 0.90625 -0.28125 0.3125 -0.28125 L 0.3125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.765625 -0.03125 1.875 -0.015625 2.34375 0 L 2.34375 -0.28125 C 1.765625 -0.28125 1.65625 -0.28125 1.65625 -0.6875 L 1.65625 -2.3125 C 1.65625 -3.265625 2.328125 -3.734375 2.890625 -3.734375 C 3.421875 -3.734375 3.546875 -3.28125 3.546875 -2.75 L 3.546875 -0.6875 C 3.546875 -0.28125 3.4375 -0.28125 2.84375 -0.28125 L 2.84375 0 C 3.265625 -0.015625 3.4375 -0.03125 3.875 -0.03125 C 4.296875 -0.03125 4.421875 -0.015625 4.890625 0 Z M 4.890625 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-7">
<path style="stroke:none;" d="M 1.75 -3.375 C 1.75 -3.640625 1.53125 -3.859375 1.265625 -3.859375 C 1 -3.859375 0.78125 -3.640625 0.78125 -3.375 C 0.78125 -3.109375 1 -2.890625 1.265625 -2.890625 C 1.53125 -2.890625 1.75 -3.109375 1.75 -3.375 Z M 1.78125 -0.03125 C 1.78125 -0.265625 1.78125 -0.96875 1.265625 -0.96875 C 0.984375 -0.96875 0.78125 -0.75 0.78125 -0.484375 C 0.78125 -0.234375 0.953125 0 1.265625 0 C 1.453125 0 1.5 -0.03125 1.5625 -0.078125 C 1.5625 0.140625 1.546875 0.84375 0.984375 1.5 C 0.90625 1.578125 0.90625 1.578125 0.90625 1.625 C 0.90625 1.65625 0.96875 1.71875 1.03125 1.71875 C 1.109375 1.71875 1.78125 1.03125 1.78125 -0.03125 Z M 1.78125 -0.03125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-8">
<path style="stroke:none;" d="M 3.3125 -1.140625 C 3.3125 -1.546875 3.125 -1.78125 2.9375 -2 C 2.625 -2.28125 2.3125 -2.34375 1.640625 -2.46875 C 1.40625 -2.515625 0.765625 -2.640625 0.765625 -3.140625 C 0.765625 -3.4375 0.96875 -3.8125 1.78125 -3.8125 C 2.75 -3.8125 2.8125 -3.0625 2.828125 -2.84375 C 2.828125 -2.734375 2.828125 -2.6875 2.953125 -2.6875 C 3.078125 -2.6875 3.078125 -2.75 3.078125 -2.90625 L 3.078125 -3.765625 C 3.078125 -3.921875 3.078125 -4 2.96875 -4 C 2.921875 -4 2.90625 -4 2.78125 -3.890625 C 2.765625 -3.875 2.6875 -3.796875 2.640625 -3.75 C 2.359375 -3.953125 2.078125 -4 1.78125 -4 C 0.59375 -4 0.296875 -3.359375 0.296875 -2.890625 C 0.296875 -2.609375 0.421875 -2.375 0.640625 -2.1875 C 0.9375 -1.90625 1.28125 -1.84375 1.734375 -1.765625 C 2.1875 -1.671875 2.34375 -1.640625 2.53125 -1.5 C 2.625 -1.421875 2.84375 -1.25 2.84375 -0.90625 C 2.84375 -0.125 1.953125 -0.125 1.828125 -0.125 C 0.90625 -0.125 0.671875 -0.890625 0.578125 -1.375 C 0.546875 -1.453125 0.53125 -1.515625 0.421875 -1.515625 C 0.296875 -1.515625 0.296875 -1.4375 0.296875 -1.28125 L 0.296875 -0.140625 C 0.296875 0.015625 0.296875 0.09375 0.40625 0.09375 C 0.46875 0.09375 0.46875 0.09375 0.640625 -0.078125 C 0.671875 -0.140625 0.765625 -0.25 0.8125 -0.296875 C 1.1875 0.078125 1.59375 0.09375 1.828125 0.09375 C 2.921875 0.09375 3.3125 -0.546875 3.3125 -1.140625 Z M 3.3125 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-9">
<path style="stroke:none;" d="M 4.796875 -1.9375 C 4.796875 -3.0625 3.921875 -3.953125 2.859375 -3.953125 C 2.375 -3.953125 1.9375 -3.75 1.59375 -3.390625 L 1.59375 -3.953125 L 0.265625 -3.859375 L 0.265625 -3.578125 C 0.90625 -3.578125 0.953125 -3.515625 0.953125 -3.140625 L 0.953125 1.046875 C 0.953125 1.453125 0.859375 1.453125 0.265625 1.453125 L 0.265625 1.734375 C 0.6875 1.71875 0.859375 1.703125 1.28125 1.703125 C 1.71875 1.703125 1.828125 1.71875 2.3125 1.734375 L 2.3125 1.453125 C 1.71875 1.453125 1.625 1.453125 1.625 1.046875 L 1.625 -0.421875 C 1.84375 -0.203125 2.15625 0.09375 2.75 0.09375 C 3.8125 0.09375 4.796875 -0.765625 4.796875 -1.9375 Z M 4.015625 -1.9375 C 4.015625 -0.90625 3.421875 -0.125 2.6875 -0.125 C 2.28125 -0.125 1.953125 -0.359375 1.734375 -0.671875 C 1.625 -0.84375 1.625 -0.859375 1.625 -1.03125 L 1.625 -3 C 1.921875 -3.515625 2.40625 -3.703125 2.78125 -3.703125 C 3.484375 -3.703125 4.015625 -2.890625 4.015625 -1.9375 Z M 4.015625 -1.9375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-10">
<path style="stroke:none;" d="M 3.328125 -3.390625 C 3.328125 -3.6875 3.0625 -3.953125 2.65625 -3.953125 C 2.125 -3.953125 1.75 -3.578125 1.546875 -3.015625 L 1.53125 -3.015625 L 1.53125 -3.953125 L 0.265625 -3.859375 L 0.265625 -3.578125 C 0.875 -3.578125 0.953125 -3.515625 0.953125 -3.078125 L 0.953125 -0.6875 C 0.953125 -0.28125 0.859375 -0.28125 0.265625 -0.28125 L 0.265625 0 C 0.734375 -0.015625 0.859375 -0.03125 1.3125 -0.03125 L 2.453125 0 L 2.453125 -0.28125 L 2.265625 -0.28125 C 1.625 -0.28125 1.59375 -0.375 1.59375 -0.703125 L 1.59375 -2.046875 C 1.59375 -2.40625 1.6875 -3.734375 2.703125 -3.734375 L 2.703125 -3.71875 C 2.6875 -3.703125 2.546875 -3.609375 2.546875 -3.390625 C 2.546875 -3.140625 2.734375 -3 2.9375 -3 C 3.125 -3 3.328125 -3.125 3.328125 -3.390625 Z M 3.328125 -3.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-11">
<path style="stroke:none;" d="M 4.828125 0 L 4.828125 -0.28125 C 4.21875 -0.28125 4.140625 -0.34375 4.140625 -0.78125 L 4.140625 -6.203125 L 2.8125 -6.109375 L 2.8125 -5.828125 C 3.421875 -5.828125 3.5 -5.765625 3.5 -5.328125 L 3.5 -3.421875 C 3.453125 -3.484375 3.0625 -3.953125 2.359375 -3.953125 C 1.265625 -3.953125 0.296875 -3.078125 0.296875 -1.921875 C 0.296875 -0.796875 1.203125 0.09375 2.265625 0.09375 C 2.90625 0.09375 3.3125 -0.28125 3.484375 -0.46875 L 3.484375 0.09375 Z M 3.484375 -1.078125 C 3.484375 -0.90625 3.484375 -0.890625 3.34375 -0.703125 C 3.0625 -0.296875 2.65625 -0.125 2.296875 -0.125 C 1.90625 -0.125 1.5625 -0.34375 1.328125 -0.71875 C 1.09375 -1.09375 1.078125 -1.625 1.078125 -1.90625 C 1.078125 -2.328125 1.125 -2.8125 1.359375 -3.15625 C 1.5625 -3.453125 1.921875 -3.734375 2.390625 -3.734375 C 2.765625 -3.734375 3.125 -3.546875 3.375 -3.203125 C 3.484375 -3.0625 3.484375 -3.046875 3.484375 -2.875 Z M 3.484375 -1.078125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-12">
<path style="stroke:none;" d="M 2.328125 0 L 2.328125 -0.28125 C 1.75 -0.28125 1.640625 -0.28125 1.640625 -0.6875 L 1.640625 -6.203125 L 0.328125 -6.109375 L 0.328125 -5.828125 C 0.921875 -5.828125 1.015625 -5.765625 1.015625 -5.328125 L 1.015625 -0.6875 C 1.015625 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.75 -0.03125 1.890625 -0.015625 2.328125 0 Z M 2.328125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-13">
<path style="stroke:none;" d="M 4.453125 -3.609375 C 4.453125 -3.765625 4.328125 -4.046875 3.984375 -4.046875 C 3.71875 -4.046875 3.3125 -3.953125 3 -3.625 C 2.765625 -3.828125 2.40625 -3.953125 2.03125 -3.953125 C 1.1875 -3.953125 0.546875 -3.34375 0.546875 -2.640625 C 0.546875 -2.1875 0.8125 -1.859375 0.953125 -1.71875 C 0.9375 -1.703125 0.6875 -1.390625 0.6875 -0.984375 C 0.6875 -0.671875 0.828125 -0.359375 1.078125 -0.203125 C 0.609375 -0.046875 0.265625 0.28125 0.265625 0.703125 C 0.265625 1.328125 1.140625 1.84375 2.28125 1.84375 C 3.390625 1.84375 4.328125 1.375 4.328125 0.671875 C 4.328125 0.3125 4.15625 -0.078125 3.828125 -0.296875 C 3.328125 -0.609375 2.8125 -0.609375 1.953125 -0.609375 C 1.78125 -0.609375 1.5 -0.609375 1.421875 -0.625 C 1.15625 -0.671875 0.984375 -0.921875 0.984375 -1.203125 C 0.984375 -1.34375 1.03125 -1.484375 1.125 -1.59375 C 1.34375 -1.453125 1.625 -1.328125 2.03125 -1.328125 C 2.875 -1.328125 3.515625 -1.9375 3.515625 -2.640625 C 3.515625 -3.078125 3.265625 -3.375 3.15625 -3.5 C 3.515625 -3.828125 3.9375 -3.828125 4.046875 -3.828125 C 4 -3.796875 3.921875 -3.75 3.921875 -3.59375 C 3.921875 -3.5 3.984375 -3.328125 4.1875 -3.328125 C 4.3125 -3.328125 4.453125 -3.421875 4.453125 -3.609375 Z M 2.828125 -2.640625 C 2.828125 -2.4375 2.828125 -1.5625 2.03125 -1.5625 C 1.234375 -1.5625 1.234375 -2.4375 1.234375 -2.640625 C 1.234375 -2.875 1.25 -3.1875 1.40625 -3.390625 C 1.53125 -3.578125 1.78125 -3.703125 2.03125 -3.703125 C 2.828125 -3.703125 2.828125 -2.84375 2.828125 -2.640625 Z M 3.828125 0.6875 C 3.828125 1.203125 3.140625 1.59375 2.296875 1.59375 C 1.421875 1.59375 0.765625 1.1875 0.765625 0.6875 C 0.765625 0.546875 0.84375 -0.046875 1.625 -0.046875 L 2.4375 -0.046875 C 2.71875 -0.046875 3.828125 -0.03125 3.828125 0.6875 Z M 3.828125 0.6875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-14">
<path style="stroke:none;" d="M 4.890625 0 L 4.890625 -0.28125 C 4.28125 -0.28125 4.203125 -0.34375 4.203125 -0.78125 L 4.203125 -3.953125 L 2.84375 -3.859375 L 2.84375 -3.578125 C 3.453125 -3.578125 3.546875 -3.515625 3.546875 -3.078125 L 3.546875 -1.5 C 3.546875 -0.703125 3.09375 -0.125 2.453125 -0.125 C 1.703125 -0.125 1.65625 -0.515625 1.65625 -0.984375 L 1.65625 -3.953125 L 0.3125 -3.859375 L 0.3125 -3.578125 C 1 -3.578125 1 -3.546875 1 -2.75 L 1 -1.40625 C 1 -0.828125 1 -0.453125 1.40625 -0.140625 C 1.671875 0.03125 2.03125 0.09375 2.390625 0.09375 C 2.859375 0.09375 3.296875 -0.109375 3.5625 -0.640625 L 3.5625 0.09375 Z M 4.890625 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-15">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.171875 3.71875 -1.171875 3.6875 -1.171875 C 3.59375 -1.171875 3.59375 -1.15625 3.546875 -1 C 3.328125 -0.390625 2.828125 -0.15625 2.375 -0.15625 C 1.8125 -0.15625 1.078125 -0.609375 1.078125 -1.9375 C 1.078125 -3.328125 1.78125 -3.75 2.328125 -3.75 C 2.4375 -3.75 2.921875 -3.734375 3.25 -3.515625 C 3.0625 -3.484375 2.890625 -3.359375 2.890625 -3.09375 C 2.890625 -2.859375 3.0625 -2.6875 3.296875 -2.6875 C 3.53125 -2.6875 3.71875 -2.828125 3.71875 -3.109375 C 3.71875 -3.671875 3.09375 -4 2.3125 -4 C 1.15625 -4 0.296875 -3.046875 0.296875 -1.9375 C 0.296875 -0.78125 1.234375 0.09375 2.28125 0.09375 C 3.53125 0.09375 3.8125 -0.984375 3.8125 -1.0625 Z M 3.8125 -1.0625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-16">
<path style="stroke:none;" d="M 4.4375 -0.796875 L 4.4375 -1.296875 L 4.1875 -1.296875 L 4.1875 -0.796875 C 4.1875 -0.703125 4.1875 -0.265625 3.875 -0.265625 C 3.546875 -0.265625 3.546875 -0.6875 3.546875 -0.828125 L 3.546875 -2.390625 C 3.546875 -2.90625 3.546875 -3.203125 3.140625 -3.578125 C 2.8125 -3.875 2.390625 -4 1.9375 -4 C 1.1875 -4 0.5625 -3.625 0.5625 -3.0625 C 0.5625 -2.78125 0.75 -2.625 0.984375 -2.625 C 1.21875 -2.625 1.390625 -2.8125 1.390625 -3.03125 C 1.390625 -3.421875 0.984375 -3.46875 0.984375 -3.46875 C 1.234375 -3.703125 1.65625 -3.78125 1.921875 -3.78125 C 2.375 -3.78125 2.890625 -3.4375 2.890625 -2.65625 L 2.890625 -2.359375 C 2.40625 -2.34375 1.734375 -2.296875 1.140625 -2.015625 C 0.484375 -1.703125 0.296875 -1.234375 0.296875 -0.875 C 0.296875 -0.140625 1.15625 0.09375 1.765625 0.09375 C 2.5 0.09375 2.84375 -0.390625 2.96875 -0.640625 C 3.015625 -0.265625 3.265625 0.046875 3.65625 0.046875 C 3.875 0.046875 4.4375 -0.078125 4.4375 -0.796875 Z M 2.890625 -1.265625 C 2.890625 -0.390625 2.21875 -0.125 1.828125 -0.125 C 1.40625 -0.125 1.015625 -0.421875 1.015625 -0.875 C 1.015625 -1.46875 1.515625 -2.09375 2.890625 -2.140625 Z M 2.890625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_sferico-glyph4-17">
<path style="stroke:none;" d="M 3.0625 -1.109375 L 3.0625 -1.625 L 2.8125 -1.625 L 2.8125 -1.140625 C 2.8125 -0.46875 2.53125 -0.15625 2.203125 -0.15625 C 1.609375 -0.15625 1.609375 -0.9375 1.609375 -1.09375 L 1.609375 -3.578125 L 2.90625 -3.578125 L 2.90625 -3.859375 L 1.609375 -3.859375 L 1.609375 -5.5 L 1.359375 -5.5 C 1.34375 -4.75 1.03125 -3.828125 0.171875 -3.796875 L 0.171875 -3.578125 L 0.953125 -3.578125 L 0.953125 -1.109375 C 0.953125 -0.109375 1.671875 0.09375 2.140625 0.09375 C 2.75 0.09375 3.0625 -0.46875 3.0625 -1.109375 Z M 3.0625 -1.109375 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez12a_add_sferico-surface1">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(83.552551%,91.459656%,88.775635%);fill-opacity:1;" d="M 127.484375 81.863281 C 127.484375 58.152344 108.265625 38.933594 84.554688 38.933594 C 60.847656 38.933594 41.628906 58.152344 41.628906 81.863281 C 41.628906 105.570312 60.847656 124.789062 84.554688 124.789062 C 108.265625 124.789062 127.484375 105.570312 127.484375 81.863281 Z M 122.683594 81.863281 C 122.683594 60.804688 105.613281 43.734375 84.554688 43.734375 C 63.5 43.734375 46.429688 60.804688 46.429688 81.863281 C 46.429688 102.917969 63.5 119.988281 84.554688 119.988281 C 105.613281 119.988281 122.683594 102.917969 122.683594 81.863281 Z M 122.683594 81.863281 "/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 60.944661 -0.00185698 C 60.944661 33.658929 33.659232 60.944358 -0.0015538 60.944358 C -33.658419 60.944358 -60.943847 33.658929 -60.943847 -0.00185698 C -60.943847 -33.658722 -33.658419 -60.944151 -0.0015538 -60.944151 C 33.659232 -60.944151 60.944661 -33.658722 60.944661 -0.00185698 Z M 60.944661 -0.00185698 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 18.426599 -0.00185698 C 18.426599 10.176757 10.17706 18.426296 -0.0015538 18.426296 C -10.176247 18.426296 -18.425786 10.176757 -18.425786 -0.00185698 C -18.425786 -10.17655 -10.176247 -18.426089 -0.0015538 -18.426089 C 10.17706 -18.426089 18.426599 -10.17655 18.426599 -0.00185698 Z M 18.426599 -0.00185698 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 38.270191 -0.00185698 C 38.270191 21.135626 21.13593 38.269888 -0.0015538 38.269888 C -21.135116 38.269888 -38.269378 21.135626 -38.269378 -0.00185698 C -38.269378 -21.13542 -21.135116 -38.269681 -0.0015538 -38.269681 C 21.13593 -38.269681 38.270191 -21.13542 38.270191 -0.00185698 Z M 38.270191 -0.00185698 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 43.088957 -0.00185698 C 43.088957 23.797906 23.79821 43.088654 -0.0015538 43.088654 C -23.797396 43.088654 -43.088144 23.797906 -43.088144 -0.00185698 C -43.088144 -23.797699 -23.797396 -43.088447 -0.0015538 -43.088447 C 23.79821 -43.088447 43.088957 -23.797699 43.088957 -0.00185698 Z M 43.088957 -0.00185698 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 85.261719 81.863281 C 85.261719 81.472656 84.945312 81.15625 84.554688 81.15625 C 84.167969 81.15625 83.851562 81.472656 83.851562 81.863281 C 83.851562 82.25 84.167969 82.566406 84.554688 82.566406 C 84.945312 82.566406 85.261719 82.25 85.261719 81.863281 Z M 85.261719 81.863281 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-1" x="77.365175" y="76.137873"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-1" x="84.505426" y="76.137873"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph2-1" x="77.365175" y="13.443738"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-1" x="84.505426" y="13.443738"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0015538 -0.00185698 L -0.0015538 -13.842576 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.760323 -0.0015538 C 3.297659 0.112152 1.270562 0.751256 0.000196059 1.445252 L 0.000196059 -1.444439 C 1.270562 -0.750443 3.297659 -0.111339 3.760323 -0.0015538 Z M 3.760323 -0.0015538 " transform="matrix(0,0.996268,0.996268,0,84.556235,95.652148)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-2" x="60.65876" y="109.833642"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-1" x="67.605735" y="110.826921"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -10.772221 -23.244855 L -0.848465 -19.276921 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0015538 -0.00185698 L -43.174403 36.231028 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.76029 -0.0000697366 C 3.297032 0.112817 1.26816 0.749518 -0.00133716 1.445031 L -0.00103438 -1.446675 C 1.267743 -0.750557 3.296795 -0.112596 3.76029 -0.0000697366 Z M 3.76029 -0.0000697366 " transform="matrix(-0.763161,-0.640381,-0.640381,0.763161,41.541537,45.767446)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-2" x="15.474031" y="30.760864"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-2" x="22.42001" y="31.753147"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -56.69361 48.189723 L -46.687515 39.175612 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.0015538 -0.00185698 L 25.805702 21.653183 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.75864 -0.000275689 C 3.300669 0.112734 1.268613 0.753215 0.00031924 1.44381 L 0.0000164552 -1.447896 C 1.269513 -0.752384 3.300906 -0.112679 3.75864 -0.000275689 Z M 3.75864 -0.000275689 " transform="matrix(0.763161,-0.640381,-0.640381,-0.763161,110.264188,60.289564)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="107.045984" y="73.285558"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 21.837768 -10.184392 L 41.928375 -19.551383 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.532552 -0.000924706 C 3.97855 0.138764 1.528342 0.921436 -0.000883402 1.770148 L -0.00126452 -1.773231 C 1.530617 -0.920487 3.977991 -0.138377 4.532552 -0.000924706 Z M 4.532552 -0.000924706 " transform="matrix(0.902917,0.421023,0.421023,-0.902917,126.329744,101.340857)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-4" x="145.880503" y="122.053862"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-5" x="144.464806" y="124.311405"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 39.650342 8.428043 L 76.538015 22.676534 L 89.292649 22.676534 " transform="matrix(0.996268,0,0,-0.996268,84.556235,81.861431)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-6" x="177.020845" y="62.370448"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="181.777633" y="62.370448"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-2" x="169.960295" y="34.995998"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-1" x="176.90727" y="35.989277"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-7" x="183.593223" y="34.995998"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="193.280098" y="34.995998"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-7" x="200.227242" y="34.995998"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-2" x="209.92305" y="34.995998"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-2" x="216.869563" y="35.989277"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-5" x="169.960295" y="87.100803"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-2" x="177.22508" y="87.100803"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="180.795703" y="87.100803"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-3" x="185.193229" y="87.100803"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-4" x="191.30961" y="87.100803"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-1" x="211.852359" y="81.323447"/>
</g>
<path style="fill:none;stroke-width:0.398;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000223581 0.000983535 L 26.653943 0.000983535 " transform="matrix(0.996268,0,0,-0.996268,202.195535,84.868167)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-5" x="202.195535" y="93.160104"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-8" x="206.786337" y="93.160104"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-9" x="212.362275" y="93.160104"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-3" x="216.080519" y="94.152387"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="220.216027" y="93.160104"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-2" x="224.613553" y="90.595711"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-6" x="169.960295" y="113.91834"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-10" x="174.717083" y="113.91834"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-4" x="182.332944" y="113.91834"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph0-5" x="192.01982" y="113.91834"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-8" x="196.614443" y="113.91834"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="202.190381" y="113.91834"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph3-2" x="206.587084" y="110.123556"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-6" x="210.722591" y="113.91834"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph1-3" x="215.479379" y="113.91834"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-1" x="7.278732" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-2" x="12.379439" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-3" x="16.463577" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-4" x="20.544142" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-5" x="23.094495" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-6" x="27.68513" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-2" x="32.785836" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-7" x="36.869974" y="158.9078"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-8" x="42.475391" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-9" x="46.096803" y="158.9078"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-2" x="51.456565" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-8" x="55.540703" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-8" x="59.162115" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-5" x="62.783527" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-10" x="67.374162" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-2" x="70.965202" y="158.9078"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-11" x="78.113337" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-2" x="83.214043" y="158.9078"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-12" x="87.289249" y="158.9078"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-13" x="92.903599" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-14" x="97.494234" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-8" x="102.59494" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-15" x="106.216352" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-4" x="110.296917" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-5" x="112.84727" y="158.9078"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-4" x="120.501903" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-6" x="123.052256" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-13" x="128.152962" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-10" x="132.743597" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-16" x="136.334637" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-6" x="140.925273" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-11" x="146.025979" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-4" x="151.126685" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-17" x="153.677038" y="158.9078"/>
  <use xlink:href="#fisica2_lez12a_add_sferico-glyph4-5" x="157.247533" y="158.9078"/>
</g>
</g>
</svg><figcaption><strong>Condensatore sferico: superficie gaussiana e guscio</strong><span class="figure-explanation">Sezione delle armature concentriche di raggi $R_1,R_2$. La sfera gaussiana ha raggio $r$; il guscio evidenziato ha spessore $dr$ e volume $d\\tau=4\\pi r^2dr$.</span></figcaption></figure><!-- END L12 ADD sferico --><p>A differenza del condensatore piano, il campo elettrico <strong>non è uniforme</strong> nello spazio tra le armature. Utilizzando il teorema di Gauss con una superficie gaussiana sferica di raggio $r$ (con $R_1 \\lt r \\lt R_2$):</p>
        <p>$$\\Phi(\\vec{E}) = E(r) \\cdot 4\\pi r^2 = \\frac{Q_{int}}{\\epsilon_0} = \\frac{Q}{\\epsilon_0}$$</p>
        <p>Da cui si ricava:</p>
        <p>$$E(r) = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$$</p>
        <p>Poiché il modulo del campo dipende da $r$, la densità di energia $u_E(r) = \\frac{1}{2}\\epsilon_0 E(r)^2$ non è costante: il rapporto $W/\\tau$ darebbe solo un valore medio, mentre quello che ci serve è la densità locale. Per trovare l'energia totale, dobbiamo dunque <strong>integrare</strong> la densità di energia su tutto il volume compreso tra le due armature.</p>`,
        subsections: [
          {
            subtitle: "Integrazione sui gusci sferici",
            content: `<p>Consideriamo un guscio sferico infinitesimo di raggio $r$ e spessore $dr$, scelto in modo che al suo interno il campo sia praticamente costante. Il suo volume è $d\\tau = 4\\pi r^2 dr$. L'energia $dW$ contenuta in questo volume infinitesimo è:</p>
            <p>$$dW = u_E(r) \\, d\\tau = \\frac{1}{2} \\epsilon_0 E(r)^2 (4\\pi r^2 dr)$$</p>
            <p>Sostituiamo l'espressione del campo $E(r)$:</p>
            <p>$$dW = \\frac{1}{2} \\epsilon_0 \\left( \\frac{Q}{4\\pi\\epsilon_0 r^2} \\right)^2 (4\\pi r^2 dr) = \\frac{1}{2} \\epsilon_0 \\frac{Q^2}{16\\pi^2\\epsilon_0^2 r^4} (4\\pi r^2 dr) = \\frac{Q^2}{8\\pi\\epsilon_0} \\frac{1}{r^2} dr$$</p>
            <p>L'energia totale $W$ si ottiene integrando questa espressione da $R_1$ a $R_2$:</p>
            <p>$$W = \\frac{Q^2}{8\\pi\\epsilon_0} \\int_{R_1}^{R_2} \\frac{1}{r^2} dr = \\frac{Q^2}{8\\pi\\epsilon_0} \\left[ -\\frac{1}{r} \\right]_{R_1}^{R_2} = \\frac{Q^2}{8\\pi\\epsilon_0} \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$$</p>`
          },
          {
            subtitle: "Verifica del risultato",
            content: `<p>Possiamo verificare la coerenza di questo risultato con la formula $W = \\frac{1}{2}\\frac{Q^2}{C}$. La capacità di un condensatore sferico è $C = 4\\pi\\epsilon_0 \\frac{R_1 R_2}{R_2 - R_1}$.</p>
            <p>$$W = \\frac{1}{2} \\frac{Q^2}{4\\pi\\epsilon_0 \\frac{R_1 R_2}{R_2 - R_1}} = \\frac{Q^2 (R_2 - R_1)}{8\\pi\\epsilon_0 R_1 R_2} = \\frac{Q^2}{8\\pi\\epsilon_0} \\left( \\frac{R_2}{R_1 R_2} - \\frac{R_1}{R_1 R_2} \\right) = \\frac{Q^2}{8\\pi\\epsilon_0} \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$$</p>
            <p>I risultati coincidono, confermando la validità del metodo basato sull'integrazione della densità di energia.</p>`
          }
        ],
        formulas: [
          { label: "Energia condensatore sferico", latex: "W = \\frac{Q^2}{8\\pi\\epsilon_0} \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)" }
        ]
      },

      {
        id: "s12-correnti-stazionarie",
        type: "section",
        title: "Correnti elettriche stazionarie",
        icon: "⚡",
        content: `<p>Fino ad ora abbiamo studiato l'elettrostatica, ovvero la fisica delle cariche in quiete. Ora introduciamo il concetto di <strong>cariche in movimento</strong>, che danno origine alle correnti elettriche. Se ai capi di un conduttore applichiamo una differenza di potenziale, le cariche libere al suo interno si metteranno in moto.</p>
        <p><strong>Due grandezze che useremo subito.</strong> Prima di enunciare la definizione di regime stazionario conviene anticiparne il significato operativo:</p>
        <ul>
          <li>il <strong>vettore densità di corrente</strong> $\\vec{J}$ descrive in modo <em>locale</em> il flusso di carica: il suo modulo è la corrente per unità di area attraversata e la sua direzione è quella del moto convenzionale delle cariche positive (lo definiremo rigorosamente più avanti);</li>
          <li>la <strong>densità di carica</strong>: distinguiamo la densità dei soli portatori mobili $\\rho_{\\text{mob}} = nq$ dalla densità di carica <em>totale</em> $\\rho_{\\text{tot}}$, che include anche le cariche fisse (per esempio gli ioni del reticolo di un metallo). Nelle leggi di conservazione compare sempre $\\rho_{\\text{tot}}$.</li>
        </ul>`,
        subsections: [
          {
            subtitle: "Definizione — Regime stazionario",
            content: `<p>Si dice che una corrente è <strong>stazionaria</strong> quando, in ogni punto $\\vec{r}$ del conduttore, sono indipendenti dal tempo <em>sia</em> la densità di corrente <em>sia</em> la densità di carica totale:</p>
            <p>$$\\frac{\\partial \\vec{J}(\\vec{r}, t)}{\\partial t} = 0 \\qquad \\text{e} \\qquad \\frac{\\partial \\rho_{\\text{tot}}(\\vec{r}, t)}{\\partial t} = 0$$</p>
            <p>cosicché $\\vec{J} = \\vec{J}(\\vec{r})$ e $\\rho_{\\text{tot}} = \\rho_{\\text{tot}}(\\vec{r})$. L'indipendenza dal tempo delle distribuzioni di carica (e quindi dei campi che esse generano) fa dunque parte delle <strong>condizioni</strong> che definiscono il regime considerato, e non è una conseguenza della sola costanza di $\\vec{J}$: una densità di corrente indipendente dal tempo può infatti avere divergenza non nulla e produrre accumulo di carica. Il legame preciso tra divergenza di $\\vec{J}$ e variazione di $\\rho_{\\text{tot}}$ lo stabiliremo con l'equazione di continuità.</p>
            <p>Imposte entrambe le condizioni, l'intensità di corrente $I$ che attraversa una qualunque superficie <strong>fissa</strong> nello spazio ha un valore costante nel tempo.</p>
            <p>Questo regime si distingue dal caso di una <strong>corrente variabile</strong>, in cui $\\vec{J}$ (e quindi $I$) dipende esplicitamente dal tempo, come accade per esempio durante la carica o la scarica di un condensatore oppure in una corrente alternata. In questo corso, salvo avviso contrario, ci limiteremo al regime stazionario.</p>`
          },
          {
            subtitle: "Definizione — Intensità di corrente elettrica",
            content: `<p>Si definisce <strong>intensità di corrente elettrica</strong> $I$ attraverso una superficie orientata il rapporto tra la quantità di carica netta $dQ$ che attraversa la superficie e l'intervallo di tempo $dt$ impiegato:</p>
            <p>$$I = \\frac{dQ}{dt}$$</p>
            <p>Qui $dQ$ è la carica <strong>netta con segno</strong> trasferita attraverso la superficie, valutata rispetto al verso della normale $\\hat{n}$ scelta: ogni portatore contribuisce con il prodotto della <em>propria carica</em> per il <em>segno dell'attraversamento</em> ($+1$ se transita nel verso di $\\hat{n}$, $-1$ se nel verso opposto). Il contributo è quindi positivo per cariche positive che attraversano nel verso di $\\hat{n}$ e per cariche negative che lo attraversano in verso opposto, ed è negativo negli altri due casi (per esempio un elettrone che passa nel verso di $\\hat{n}$ dà contributo negativo). La carica si misura in coulomb (C), il tempo in secondi (s).</p>
            <p>L'unità di misura della corrente nel Sistema Internazionale è l'<strong>ampere</strong> (A), definito come coulomb al secondo ($1 \\text{ A} = 1 \\text{ C/s}$). Il segno di $I$ dipende dunque dall'orientazione scelta: invertendo $\\hat{n}$ si inverte il segno di $I$. Questa regola dei segni è esattamente quella codificata, più avanti, dalla formula $dQ = n q \\, (\\vec{v}_d \\cdot \\hat{n}) \\, dt \\, dS$, in cui compaiono sia il segno della carica $q$ sia il segno del prodotto scalare.</p>`
          }
        ],
        formulas: [
          { label: "Intensità di corrente", latex: "I = \\frac{dQ}{dt}" }
        ],
        quote: {
          text: "È importante avere un'idea degli ordini di grandezza. Una corrente di 1 Ampere è molto intensa. La soglia di pericolosità per il corpo umano (rischio di fibrillazione ventricolare) è molto più bassa, dell'ordine di $5 \\times 10^{-2}$ A, ovvero 50 milliampere. Una corrente di 1 A può essere letale.",
          src: "Nota del Prof."
        }
      },

      {
        id: "s12-verso-corrente",
        type: "section",
        title: "Verso della corrente e velocità di deriva",
        icon: "🧭",
        content: `<p>Per convenzione, il <strong>verso della corrente</strong> è definito come il verso del moto delle cariche positive.</p>
        <p>Consideriamo un conduttore tra due punti A e B, con un potenziale $V_A \\gt V_B$:</p>
        <ul>
          <li>le cariche positive (se presenti e mobili) si muoveranno da A a B, cioè da potenziale maggiore a potenziale minore;</li>
          <li>le cariche negative (es. elettroni nei metalli) si muoveranno da B ad A, da potenziale minore a potenziale maggiore.</li>
        </ul>
        <p>In entrambi i casi, il <strong>verso convenzionale della corrente è da A a B</strong>.</p>
        <figure class="figura" data-id="fisica2_lez12a_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez12a_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="249.147pt" height="134.163pt" viewBox="0 0 249.147 134.163" version="1.2"><style>#fisica2_lez12a_d1 [fill="rgb(0%,0%,0%)"],#fisica2_lez12a_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez12a_d1 [stroke="rgb(0%,0%,0%)"],#fisica2_lez12a_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez12a_d1 [fill="rgb(79.998779%,79.998779%,100%)"],#fisica2_lez12a_d1 [style*="fill:rgb(79.998779%,79.998779%,100%)"]{fill:#141452!important}[data-mode="light"] #fisica2_lez12a_d1 [fill="rgb(79.998779%,79.998779%,100%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="fill:rgb(79.998779%,79.998779%,100%)"]{fill:#ccccff!important}#fisica2_lez12a_d1 [stroke="rgb(79.998779%,79.998779%,100%)"],#fisica2_lez12a_d1 [style*="stroke:rgb(79.998779%,79.998779%,100%)"]{stroke:#ccccff!important}[data-mode="light"] #fisica2_lez12a_d1 [stroke="rgb(79.998779%,79.998779%,100%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="stroke:rgb(79.998779%,79.998779%,100%)"]{stroke:#ccccff!important}#fisica2_lez12a_d1 [fill="rgb(0%,0%,100%)"],#fisica2_lez12a_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #fisica2_lez12a_d1 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#fisica2_lez12a_d1 [stroke="rgb(0%,0%,100%)"],#fisica2_lez12a_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #fisica2_lez12a_d1 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#fisica2_lez12a_d1 [fill="rgb(100%,79.998779%,79.998779%)"],#fisica2_lez12a_d1 [style*="fill:rgb(100%,79.998779%,79.998779%)"]{fill:#521414!important}[data-mode="light"] #fisica2_lez12a_d1 [fill="rgb(100%,79.998779%,79.998779%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="fill:rgb(100%,79.998779%,79.998779%)"]{fill:#ffcccc!important}#fisica2_lez12a_d1 [stroke="rgb(100%,79.998779%,79.998779%)"],#fisica2_lez12a_d1 [style*="stroke:rgb(100%,79.998779%,79.998779%)"]{stroke:#ffcccc!important}[data-mode="light"] #fisica2_lez12a_d1 [stroke="rgb(100%,79.998779%,79.998779%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="stroke:rgb(100%,79.998779%,79.998779%)"]{stroke:#ffcccc!important}#fisica2_lez12a_d1 [fill="rgb(100%,0%,0%)"],#fisica2_lez12a_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #fisica2_lez12a_d1 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#fisica2_lez12a_d1 [stroke="rgb(100%,0%,0%)"],#fisica2_lez12a_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #fisica2_lez12a_d1 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #fisica2_lez12a_d1 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph0-1">
<path style="stroke:none;" d="M 7.140625 -0.203125 C 7.140625 -0.3125 7.046875 -0.3125 6.921875 -0.3125 C 6.296875 -0.3125 6.296875 -0.375 6.265625 -0.65625 L 5.671875 -6.859375 C 5.640625 -7.046875 5.640625 -7.09375 5.484375 -7.09375 C 5.3125 -7.09375 5.28125 -7.03125 5.21875 -6.921875 L 1.765625 -1.140625 C 1.375 -0.46875 0.984375 -0.34375 0.5625 -0.3125 C 0.4375 -0.296875 0.34375 -0.296875 0.34375 -0.109375 C 0.34375 -0.046875 0.390625 0 0.46875 0 C 0.75 0 1.046875 -0.03125 1.328125 -0.03125 C 1.65625 -0.03125 2 0 2.3125 0 C 2.375 0 2.5 0 2.5 -0.1875 C 2.5 -0.296875 2.421875 -0.3125 2.34375 -0.3125 C 2.125 -0.328125 1.875 -0.40625 1.875 -0.65625 C 1.875 -0.765625 1.9375 -0.875 2.015625 -1.015625 C 2.09375 -1.140625 2.09375 -1.140625 2.78125 -2.28125 L 5.265625 -2.28125 C 5.28125 -2.078125 5.421875 -0.734375 5.421875 -0.640625 C 5.421875 -0.34375 4.90625 -0.3125 4.703125 -0.3125 C 4.5625 -0.3125 4.46875 -0.3125 4.46875 -0.109375 C 4.46875 0 4.609375 0 4.609375 0 C 5.015625 0 5.4375 -0.03125 5.84375 -0.03125 C 6.09375 -0.03125 6.71875 0 6.96875 0 C 7.03125 0 7.140625 0 7.140625 -0.203125 Z M 5.234375 -2.59375 L 2.96875 -2.59375 L 4.90625 -5.859375 Z M 5.234375 -2.59375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph0-2">
<path style="stroke:none;" d="M 6.953125 -2.140625 C 6.953125 -2.859375 6.375 -3.421875 5.421875 -3.53125 C 6.453125 -3.71875 7.484375 -4.453125 7.484375 -5.40625 C 7.484375 -6.125 6.828125 -6.765625 5.640625 -6.765625 L 2.3125 -6.765625 C 2.125 -6.765625 2.03125 -6.765625 2.03125 -6.5625 C 2.03125 -6.453125 2.125 -6.453125 2.3125 -6.453125 C 2.3125 -6.453125 2.515625 -6.453125 2.6875 -6.4375 C 2.859375 -6.421875 2.953125 -6.40625 2.953125 -6.28125 C 2.953125 -6.234375 2.9375 -6.21875 2.90625 -6.09375 L 1.578125 -0.765625 C 1.484375 -0.390625 1.46875 -0.3125 0.6875 -0.3125 C 0.515625 -0.3125 0.421875 -0.3125 0.421875 -0.109375 C 0.421875 0 0.5 0 0.6875 0 L 4.21875 0 C 5.78125 0 6.953125 -1.171875 6.953125 -2.140625 Z M 6.59375 -5.4375 C 6.59375 -4.5625 5.734375 -3.625 4.53125 -3.625 L 3.078125 -3.625 L 3.6875 -6.078125 C 3.78125 -6.421875 3.796875 -6.453125 4.234375 -6.453125 L 5.515625 -6.453125 C 6.375 -6.453125 6.59375 -5.875 6.59375 -5.4375 Z M 6.03125 -2.25 C 6.03125 -1.265625 5.15625 -0.3125 3.984375 -0.3125 L 2.640625 -0.3125 C 2.5 -0.3125 2.484375 -0.3125 2.421875 -0.3125 C 2.3125 -0.328125 2.28125 -0.34375 2.28125 -0.421875 C 2.28125 -0.453125 2.28125 -0.46875 2.34375 -0.640625 L 3.015625 -3.40625 L 4.890625 -3.40625 C 5.84375 -3.40625 6.03125 -2.671875 6.03125 -2.25 Z M 6.03125 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph0-3">
<path style="stroke:none;" d="M 7.625 -6.640625 C 7.625 -6.71875 7.5625 -6.765625 7.484375 -6.765625 C 7.234375 -6.765625 6.9375 -6.734375 6.671875 -6.734375 C 6.34375 -6.734375 6.015625 -6.765625 5.703125 -6.765625 C 5.640625 -6.765625 5.515625 -6.765625 5.515625 -6.578125 C 5.515625 -6.46875 5.59375 -6.453125 5.671875 -6.453125 C 5.9375 -6.4375 6.125 -6.34375 6.125 -6.125 C 6.125 -5.984375 5.96875 -5.75 5.96875 -5.75 L 2.9375 -0.921875 L 2.265625 -6.15625 C 2.265625 -6.328125 2.484375 -6.453125 2.9375 -6.453125 C 3.078125 -6.453125 3.1875 -6.453125 3.1875 -6.65625 C 3.1875 -6.75 3.109375 -6.765625 3.046875 -6.765625 C 2.65625 -6.765625 2.234375 -6.734375 1.828125 -6.734375 C 1.640625 -6.734375 1.453125 -6.75 1.28125 -6.75 C 1.09375 -6.75 0.90625 -6.765625 0.75 -6.765625 C 0.671875 -6.765625 0.5625 -6.765625 0.5625 -6.578125 C 0.5625 -6.453125 0.640625 -6.453125 0.796875 -6.453125 C 1.359375 -6.453125 1.359375 -6.375 1.390625 -6.125 L 2.171875 -0.015625 C 2.203125 0.1875 2.25 0.21875 2.375 0.21875 C 2.53125 0.21875 2.578125 0.171875 2.65625 0.046875 L 6.21875 -5.640625 C 6.703125 -6.40625 7.125 -6.4375 7.484375 -6.453125 C 7.609375 -6.46875 7.625 -6.640625 7.625 -6.640625 Z M 7.625 -6.640625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph0-4">
<path style="stroke:none;" d="M 6.875 -2.484375 C 6.875 -2.59375 6.796875 -2.640625 6.6875 -2.6875 L 1.203125 -5.28125 C 1.0625 -5.34375 1.046875 -5.34375 1.015625 -5.34375 C 0.90625 -5.34375 0.828125 -5.265625 0.828125 -5.15625 C 0.828125 -5.0625 0.875 -5 1.015625 -4.9375 L 6.21875 -2.484375 L 1.015625 -0.015625 C 0.875 0.046875 0.828125 0.109375 0.828125 0.203125 C 0.828125 0.3125 0.90625 0.390625 1.015625 0.390625 C 1.046875 0.390625 1.0625 0.390625 1.203125 0.328125 L 6.6875 -2.265625 C 6.796875 -2.3125 6.875 -2.359375 6.875 -2.484375 Z M 6.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph0-5">
<path style="stroke:none;" d="M 3.3125 -0.1875 C 3.3125 -0.3125 3.234375 -0.3125 3.015625 -0.3125 C 2.828125 -0.3125 2.78125 -0.3125 2.578125 -0.328125 C 2.375 -0.34375 2.34375 -0.390625 2.34375 -0.5 C 2.34375 -0.578125 2.359375 -0.65625 2.375 -0.71875 L 3.703125 -6 C 3.796875 -6.359375 3.828125 -6.453125 4.609375 -6.453125 C 4.84375 -6.453125 4.921875 -6.453125 4.921875 -6.640625 C 4.921875 -6.765625 4.8125 -6.765625 4.78125 -6.765625 L 3.46875 -6.734375 L 2.15625 -6.765625 C 2.078125 -6.765625 1.953125 -6.765625 1.953125 -6.5625 C 1.953125 -6.453125 2.046875 -6.453125 2.234375 -6.453125 C 2.640625 -6.453125 2.90625 -6.453125 2.90625 -6.265625 C 2.90625 -6.21875 2.90625 -6.203125 2.890625 -6.109375 L 1.5625 -0.765625 C 1.46875 -0.40625 1.4375 -0.3125 0.65625 -0.3125 C 0.421875 -0.3125 0.34375 -0.3125 0.34375 -0.109375 C 0.34375 0 0.453125 0 0.484375 0 L 1.78125 -0.03125 L 3.109375 0 C 3.1875 0 3.3125 0 3.3125 -0.1875 Z M 3.3125 -0.1875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph1-1">
<path style="stroke:none;" d="M 5.625 -0.140625 C 5.625 -0.25 5.53125 -0.25 5.421875 -0.25 C 5.015625 -0.25 5.015625 -0.3125 4.984375 -0.46875 L 4.375 -4.75 C 4.359375 -4.890625 4.34375 -4.953125 4.21875 -4.953125 C 4.078125 -4.953125 4.03125 -4.890625 3.96875 -4.78125 L 1.421875 -0.828125 C 1.1875 -0.453125 0.96875 -0.28125 0.5625 -0.25 C 0.484375 -0.25 0.390625 -0.25 0.390625 -0.109375 C 0.390625 -0.03125 0.453125 0 0.5 0 C 0.671875 0 0.90625 -0.03125 1.09375 -0.03125 C 1.3125 -0.03125 1.59375 0 1.796875 0 C 1.84375 0 1.9375 0 1.9375 -0.15625 C 1.9375 -0.25 1.859375 -0.25 1.828125 -0.25 C 1.765625 -0.25 1.515625 -0.265625 1.515625 -0.453125 C 1.515625 -0.546875 1.59375 -0.65625 1.625 -0.71875 L 2.171875 -1.578125 L 4.15625 -1.578125 L 4.328125 -0.4375 C 4.296875 -0.359375 4.265625 -0.25 3.84375 -0.25 C 3.765625 -0.25 3.671875 -0.25 3.671875 -0.09375 C 3.671875 -0.0625 3.6875 0 3.78125 0 C 3.984375 0 4.46875 -0.03125 4.671875 -0.03125 L 5.078125 -0.015625 C 5.203125 -0.015625 5.359375 0 5.484375 0 C 5.578125 0 5.625 -0.0625 5.625 -0.140625 Z M 4.125 -1.828125 L 2.34375 -1.828125 L 3.796875 -4.09375 Z M 4.125 -1.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph1-2">
<path style="stroke:none;" d="M 5.453125 -1.484375 C 5.453125 -1.984375 5 -2.40625 4.265625 -2.484375 C 5.109375 -2.625 5.8125 -3.15625 5.8125 -3.75 C 5.8125 -4.28125 5.265625 -4.734375 4.375 -4.734375 L 1.84375 -4.734375 C 1.71875 -4.734375 1.625 -4.734375 1.625 -4.578125 C 1.625 -4.484375 1.703125 -4.484375 1.84375 -4.484375 C 1.84375 -4.484375 1.984375 -4.484375 2.109375 -4.46875 C 2.25 -4.453125 2.265625 -4.453125 2.265625 -4.375 C 2.265625 -4.375 2.265625 -4.328125 2.234375 -4.21875 L 1.3125 -0.546875 C 1.25 -0.3125 1.234375 -0.25 0.703125 -0.25 C 0.59375 -0.25 0.5 -0.25 0.5 -0.109375 C 0.5 0 0.578125 0 0.703125 0 L 3.390625 0 C 4.5625 0 5.453125 -0.796875 5.453125 -1.484375 Z M 5.125 -3.765625 C 5.125 -3.203125 4.5 -2.5625 3.5625 -2.5625 L 2.421875 -2.5625 L 2.84375 -4.25 C 2.90625 -4.46875 2.90625 -4.484375 3.203125 -4.484375 L 4.265625 -4.484375 C 4.96875 -4.484375 5.125 -4.03125 5.125 -3.765625 Z M 4.75 -1.53125 C 4.75 -0.84375 4.046875 -0.25 3.21875 -0.25 L 2.09375 -0.25 C 1.875 -0.25 1.875 -0.25 1.875 -0.3125 C 1.875 -0.3125 1.875 -0.359375 1.90625 -0.46875 L 2.375 -2.359375 L 3.84375 -2.359375 C 4.5 -2.359375 4.75 -1.9375 4.75 -1.53125 Z M 4.75 -1.53125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph2-1">
<path style="stroke:none;" d="M 6.59375 -2.234375 C 6.59375 -2.421875 6.4375 -2.421875 6.28125 -2.421875 L 3.75 -2.421875 L 3.75 -4.96875 C 3.75 -5.109375 3.75 -5.28125 3.546875 -5.28125 C 3.359375 -5.28125 3.359375 -5.09375 3.359375 -4.96875 L 3.359375 -2.421875 L 0.8125 -2.421875 C 0.6875 -2.421875 0.5 -2.421875 0.5 -2.234375 C 0.5 -2.046875 0.671875 -2.046875 0.8125 -2.046875 L 3.359375 -2.046875 L 3.359375 0.5 C 3.359375 0.65625 3.359375 0.8125 3.5625 0.8125 C 3.75 0.8125 3.75 0.625 3.75 0.5 L 3.75 -2.046875 L 6.28125 -2.046875 C 6.40625 -2.046875 6.59375 -2.046875 6.59375 -2.234375 Z M 6.59375 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph3-1">
<path style="stroke:none;" d="M 4.28125 -3.28125 C 4.28125 -3.90625 3.953125 -3.953125 3.875 -3.953125 C 3.65625 -3.953125 3.421875 -3.703125 3.421875 -3.5 C 3.421875 -3.359375 3.5 -3.296875 3.5625 -3.234375 C 3.796875 -3.015625 3.890625 -2.734375 3.890625 -2.5 C 3.890625 -2.109375 3.328125 -0.125 2.28125 -0.125 C 1.625 -0.125 1.625 -0.75 1.625 -0.90625 C 1.625 -1.296875 1.75 -1.75 2.0625 -2.5625 C 2.203125 -2.9375 2.234375 -3.015625 2.234375 -3.1875 C 2.234375 -3.625 1.90625 -3.9375 1.46875 -3.9375 C 0.609375 -3.9375 0.265625 -2.671875 0.265625 -2.5625 C 0.265625 -2.484375 0.328125 -2.453125 0.390625 -2.453125 C 0.484375 -2.453125 0.484375 -2.515625 0.53125 -2.625 C 0.71875 -3.28125 1.0625 -3.71875 1.4375 -3.71875 C 1.625 -3.71875 1.65625 -3.59375 1.65625 -3.421875 C 1.65625 -3.265625 1.625 -3.109375 1.546875 -2.890625 C 1.21875 -2.046875 1 -1.46875 1 -1.03125 C 1 -0.1875 1.640625 0.09375 2.25 0.09375 C 3.75 0.09375 4.28125 -2.71875 4.28125 -3.28125 Z M 4.28125 -3.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph4-1">
<path style="stroke:none;" d="M 3.640625 -0.859375 C 3.640625 -0.859375 3.640625 -0.9375 3.53125 -0.9375 C 3.4375 -0.9375 3.421875 -0.890625 3.40625 -0.796875 C 3.3125 -0.4375 3.1875 -0.140625 2.953125 -0.140625 C 2.75 -0.140625 2.734375 -0.34375 2.734375 -0.4375 C 2.734375 -0.515625 2.734375 -0.53125 2.765625 -0.640625 L 3.59375 -3.9375 C 3.59375 -3.96875 3.609375 -4 3.609375 -4.03125 C 3.609375 -4.125 3.484375 -4.125 3.421875 -4.109375 L 2.75 -4.0625 C 2.65625 -4.0625 2.578125 -4.046875 2.578125 -3.90625 C 2.578125 -3.8125 2.65625 -3.8125 2.75 -3.8125 C 2.921875 -3.8125 2.96875 -3.8125 3.046875 -3.78125 C 3.03125 -3.6875 3.03125 -3.671875 3.015625 -3.59375 L 2.671875 -2.265625 C 2.59375 -2.40625 2.390625 -2.625 2.03125 -2.625 C 1.265625 -2.625 0.453125 -1.828125 0.453125 -0.953125 C 0.453125 -0.3125 0.890625 0.0625 1.40625 0.0625 C 1.796875 0.0625 2.140625 -0.21875 2.28125 -0.359375 C 2.40625 0.015625 2.796875 0.0625 2.921875 0.0625 C 3.140625 0.0625 3.296875 -0.0625 3.40625 -0.25 C 3.5625 -0.484375 3.640625 -0.828125 3.640625 -0.859375 Z M 2.3125 -0.78125 C 2.28125 -0.671875 2.28125 -0.65625 2.203125 -0.5625 C 1.875 -0.203125 1.5625 -0.140625 1.421875 -0.140625 C 1.1875 -0.140625 0.953125 -0.296875 0.953125 -0.71875 C 0.953125 -0.96875 1.078125 -1.546875 1.265625 -1.875 C 1.4375 -2.203125 1.75 -2.421875 2.03125 -2.421875 C 2.46875 -2.421875 2.59375 -1.953125 2.59375 -1.90625 L 2.578125 -1.828125 Z M 2.3125 -0.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph5-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph5-1">
<path style="stroke:none;" d="M 5.078125 -1.484375 C 5.078125 -1.640625 4.921875 -1.640625 4.84375 -1.640625 L 2.921875 -1.640625 L 2.921875 -3.5625 C 2.921875 -3.640625 2.921875 -3.796875 2.765625 -3.796875 C 2.625 -3.796875 2.625 -3.640625 2.625 -3.5625 L 2.625 -1.640625 L 0.703125 -1.640625 C 0.625 -1.640625 0.46875 -1.640625 0.46875 -1.484375 C 0.46875 -1.328125 0.625 -1.328125 0.703125 -1.328125 L 2.625 -1.328125 L 2.625 0.59375 C 2.625 0.671875 2.625 0.828125 2.765625 0.828125 C 2.921875 0.828125 2.921875 0.671875 2.921875 0.59375 L 2.921875 -1.328125 L 4.84375 -1.328125 C 4.921875 -1.328125 5.078125 -1.328125 5.078125 -1.484375 Z M 5.078125 -1.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph6-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph6-1">
<path style="stroke:none;" d="M 6.34375 -2.234375 C 6.34375 -2.421875 6.171875 -2.421875 6.03125 -2.421875 L 1.078125 -2.421875 C 0.953125 -2.421875 0.765625 -2.421875 0.765625 -2.234375 C 0.765625 -2.046875 0.9375 -2.046875 1.078125 -2.046875 L 6.03125 -2.046875 C 6.15625 -2.046875 6.34375 -2.046875 6.34375 -2.234375 Z M 6.34375 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph7-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph7-1">
<path style="stroke:none;" d="M 4.96875 -1.484375 C 4.96875 -1.640625 4.828125 -1.640625 4.734375 -1.640625 L 0.96875 -1.640625 C 0.890625 -1.640625 0.75 -1.640625 0.75 -1.484375 C 0.75 -1.328125 0.890625 -1.328125 0.96875 -1.328125 L 4.734375 -1.328125 C 4.828125 -1.328125 4.96875 -1.328125 4.96875 -1.484375 Z M 4.96875 -1.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-1">
<path style="stroke:none;" d="M 7.234375 -6.453125 L 7.234375 -6.765625 C 6.921875 -6.75 6.53125 -6.734375 6.265625 -6.734375 L 5.140625 -6.765625 L 5.140625 -6.453125 C 5.65625 -6.453125 5.859375 -6.1875 5.859375 -5.96875 C 5.859375 -5.890625 5.828125 -5.828125 5.8125 -5.765625 L 4 -0.984375 L 2.109375 -6 C 2.046875 -6.125 2.046875 -6.171875 2.046875 -6.171875 C 2.046875 -6.453125 2.609375 -6.453125 2.859375 -6.453125 L 2.859375 -6.765625 C 2.5 -6.734375 1.828125 -6.734375 1.453125 -6.734375 L 0.1875 -6.765625 L 0.1875 -6.453125 C 0.828125 -6.453125 1.015625 -6.453125 1.15625 -6.078125 L 3.453125 0 C 3.53125 0.1875 3.578125 0.21875 3.703125 0.21875 C 3.875 0.21875 3.890625 0.171875 3.9375 0.03125 L 6.15625 -5.796875 C 6.296875 -6.15625 6.5625 -6.453125 7.234375 -6.453125 Z M 7.234375 -6.453125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-2">
<path style="stroke:none;" d="M 4.109375 -1.171875 C 4.109375 -1.28125 4.03125 -1.296875 3.984375 -1.296875 C 3.890625 -1.296875 3.875 -1.234375 3.859375 -1.15625 C 3.5 -0.140625 2.609375 -0.140625 2.515625 -0.140625 C 2.015625 -0.140625 1.625 -0.4375 1.390625 -0.796875 C 1.09375 -1.28125 1.09375 -1.9375 1.09375 -2.28125 L 3.859375 -2.28125 C 4.078125 -2.28125 4.109375 -2.28125 4.109375 -2.5 C 4.109375 -3.484375 3.578125 -4.4375 2.34375 -4.4375 C 1.1875 -4.4375 0.28125 -3.421875 0.28125 -2.171875 C 0.28125 -0.859375 1.3125 0.109375 2.453125 0.109375 C 3.671875 0.109375 4.109375 -0.984375 4.109375 -1.171875 Z M 3.453125 -2.5 L 1.109375 -2.5 C 1.171875 -3.96875 2 -4.21875 2.34375 -4.21875 C 3.359375 -4.21875 3.453125 -2.875 3.453125 -2.5 Z M 3.453125 -2.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-3">
<path style="stroke:none;" d="M 3.609375 -3.78125 C 3.609375 -4.09375 3.296875 -4.375 2.875 -4.375 C 2.15625 -4.375 1.796875 -3.71875 1.65625 -3.28125 L 1.65625 -4.375 L 0.28125 -4.265625 L 0.28125 -3.96875 C 0.96875 -3.96875 1.046875 -3.890625 1.046875 -3.40625 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.796875 -0.03125 2.265625 -0.03125 2.671875 0 L 2.671875 -0.3125 L 2.453125 -0.3125 C 1.71875 -0.3125 1.703125 -0.421875 1.703125 -0.765625 L 1.703125 -2.296875 C 1.703125 -3.28125 2.125 -4.15625 2.875 -4.15625 C 2.9375 -4.15625 2.96875 -4.15625 2.984375 -4.15625 C 2.953125 -4.140625 2.75 -4.015625 2.75 -3.765625 C 2.75 -3.484375 2.96875 -3.34375 3.1875 -3.34375 C 3.359375 -3.34375 3.609375 -3.453125 3.609375 -3.78125 Z M 3.609375 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-4">
<path style="stroke:none;" d="M 3.5625 -1.265625 C 3.5625 -1.796875 3.265625 -2.09375 3.15625 -2.203125 C 2.828125 -2.53125 2.4375 -2.609375 2.015625 -2.6875 C 1.46875 -2.796875 0.796875 -2.921875 0.796875 -3.5 C 0.796875 -3.84375 1.0625 -4.25 1.90625 -4.25 C 3 -4.25 3.046875 -3.359375 3.078125 -3.046875 C 3.078125 -2.96875 3.1875 -2.96875 3.1875 -2.96875 C 3.3125 -2.96875 3.3125 -3.015625 3.3125 -3.203125 L 3.3125 -4.203125 C 3.3125 -4.375 3.3125 -4.4375 3.203125 -4.4375 C 3.15625 -4.4375 3.140625 -4.4375 3.015625 -4.3125 C 2.984375 -4.28125 2.875 -4.1875 2.84375 -4.15625 C 2.46875 -4.4375 2.0625 -4.4375 1.90625 -4.4375 C 0.703125 -4.4375 0.328125 -3.78125 0.328125 -3.21875 C 0.328125 -2.875 0.484375 -2.59375 0.75 -2.375 C 1.0625 -2.125 1.34375 -2.0625 2.0625 -1.921875 C 2.28125 -1.875 3.09375 -1.71875 3.09375 -1.015625 C 3.09375 -0.5 2.75 -0.109375 1.96875 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.640625 0.5625 -1.6875 0.453125 -1.6875 C 0.328125 -1.6875 0.328125 -1.609375 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.875 -0.3125 C 1.3125 0.09375 1.765625 0.109375 1.96875 0.109375 C 3.109375 0.109375 3.5625 -0.5625 3.5625 -1.265625 Z M 3.5625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-5">
<path style="stroke:none;" d="M 4.671875 -2.125 C 4.671875 -3.390625 3.671875 -4.4375 2.484375 -4.4375 C 1.234375 -4.4375 0.28125 -3.359375 0.28125 -2.125 C 0.28125 -0.84375 1.3125 0.109375 2.46875 0.109375 C 3.671875 0.109375 4.671875 -0.859375 4.671875 -2.125 Z M 3.84375 -2.203125 C 3.84375 -1.84375 3.84375 -1.3125 3.625 -0.875 C 3.40625 -0.421875 2.96875 -0.140625 2.484375 -0.140625 C 2.046875 -0.140625 1.609375 -0.34375 1.34375 -0.796875 C 1.09375 -1.234375 1.09375 -1.84375 1.09375 -2.203125 C 1.09375 -2.578125 1.09375 -3.125 1.34375 -3.5625 C 1.609375 -4.015625 2.078125 -4.21875 2.46875 -4.21875 C 2.90625 -4.21875 3.328125 -4 3.59375 -3.578125 C 3.84375 -3.15625 3.84375 -2.578125 3.84375 -2.203125 Z M 3.84375 -2.203125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-6">
<path style="stroke:none;" d="M 5.21875 0 L 5.21875 -0.3125 C 4.53125 -0.3125 4.453125 -0.375 4.453125 -0.859375 L 4.453125 -6.875 L 3.015625 -6.765625 L 3.015625 -6.453125 C 3.71875 -6.453125 3.796875 -6.390625 3.796875 -5.90625 L 3.796875 -3.765625 C 3.5 -4.125 3.078125 -4.375 2.546875 -4.375 C 1.375 -4.375 0.34375 -3.40625 0.34375 -2.125 C 0.34375 -0.875 1.3125 0.109375 2.4375 0.109375 C 3.078125 0.109375 3.515625 -0.234375 3.765625 -0.546875 L 3.765625 0.109375 Z M 3.765625 -1.171875 C 3.765625 -0.984375 3.765625 -0.96875 3.65625 -0.796875 C 3.359375 -0.328125 2.90625 -0.109375 2.484375 -0.109375 C 2.046875 -0.109375 1.6875 -0.359375 1.453125 -0.75 C 1.1875 -1.15625 1.15625 -1.71875 1.15625 -2.125 C 1.15625 -2.484375 1.171875 -3.078125 1.46875 -3.53125 C 1.671875 -3.828125 2.046875 -4.15625 2.578125 -4.15625 C 2.9375 -4.15625 3.34375 -4.015625 3.65625 -3.5625 C 3.765625 -3.390625 3.765625 -3.375 3.765625 -3.203125 Z M 3.765625 -1.171875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_d1-glyph8-7">
<path style="stroke:none;" d="M 2.453125 0 L 2.453125 -0.3125 C 1.796875 -0.3125 1.75 -0.359375 1.75 -0.75 L 1.75 -4.375 L 0.359375 -4.265625 L 0.359375 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.421875 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.328125 -0.3125 L 0.328125 0 L 1.421875 -0.03125 C 1.765625 -0.03125 2.109375 -0.015625 2.453125 0 Z M 1.90625 -5.984375 C 1.90625 -6.25 1.671875 -6.515625 1.375 -6.515625 C 1.046875 -6.515625 0.84375 -6.234375 0.84375 -5.984375 C 0.84375 -5.71875 1.0625 -5.453125 1.359375 -5.453125 C 1.703125 -5.453125 1.90625 -5.734375 1.90625 -5.984375 Z M 1.90625 -5.984375 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez12a_d1-surface1">
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000922721 -0.000298199 L -0.000922721 62.362916 L 198.428559 62.362916 L 198.428559 -0.000298199 Z M -0.000922721 -0.000298199 " transform="matrix(0.9938,0,0,-0.9938,25.407167,105.042672)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph0-1" x="7.609203" y="77.43789"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph0-2" x="232.684033" y="77.43789"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph0-3" x="104.996634" y="124.585749"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph1-1" x="110.771606" y="126.070487"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph0-4" x="119.971212" y="124.585749"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph0-3" x="130.42451" y="124.585749"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph1-2" x="136.197979" y="126.070487"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(79.998779%,79.998779%,100%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 36.282629 43.93617 C 36.282629 46.754425 33.998939 49.038115 31.180684 49.038115 C 28.36243 49.038115 26.07874 46.754425 26.07874 43.93617 C 26.07874 41.117916 28.36243 38.834226 31.180684 38.834226 C 33.998939 38.834226 36.282629 41.117916 36.282629 43.93617 Z M 36.282629 43.93617 " transform="matrix(0.9938,0,0,-0.9938,25.407167,105.042672)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph2-1" x="52.833066" y="63.659847"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 39.686546 43.93617 L 76.029057 43.93617 " transform="matrix(0.9938,0,0,-0.9938,25.407167,105.042672)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,100%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.532432 -0.00146959 C 3.978214 0.140033 1.529438 0.922226 0.000426903 1.77124 L 0.000426903 -1.770249 C 1.529438 -0.921235 3.978214 -0.139041 4.532432 -0.00146959 Z M 4.532432 -0.00146959 " transform="matrix(0.9938,0,0,-0.9938,100.964419,61.377446)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph3-1" x="78.815967" y="51.933007"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph4-1" x="83.264215" y="52.988422"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph5-1" x="87.081401" y="52.988422"/>
</g>
<path style="fill-rule:nonzero;fill:rgb(100%,79.998779%,79.998779%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 172.348896 18.426448 C 172.348896 21.244702 170.065206 23.528392 167.246952 23.528392 C 164.428697 23.528392 162.145007 21.244702 162.145007 18.426448 C 162.145007 15.608193 164.428697 13.324503 167.246952 13.324503 C 170.065206 13.324503 172.348896 15.608193 172.348896 18.426448 Z M 172.348896 18.426448 " transform="matrix(0.9938,0,0,-0.9938,25.407167,105.042672)"/>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph6-1" x="188.052475" y="88.960007"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 158.74109 18.426448 L 122.398579 18.426448 " transform="matrix(0.9938,0,0,-0.9938,25.407167,105.042672)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.532445 -0.00121763 C 3.978228 0.136354 1.529452 0.918547 0.000440809 1.771492 L 0.000440809 -1.769997 C 1.529452 -0.920983 3.978228 -0.138789 4.532445 -0.00121763 Z M 4.532445 -0.00121763 " transform="matrix(-0.9938,0,0,0.9938,147.047313,86.731679)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph3-1" x="154.794958" y="77.286832"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph4-1" x="159.243207" y="78.342248"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph7-1" x="163.059399" y="78.342248"/>
</g>
<path style="fill:none;stroke-width:1.59404;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 79.370084 83.623639 L 109.690885 83.623639 " transform="matrix(0.9938,0,0,-0.9938,25.407167,105.042672)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:1.59404;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 6.080074 0.000648962 C 5.333256 0.189319 2.051189 1.258447 -0.000594762 2.421911 L -0.000594762 -2.424543 C 2.051189 -1.257149 5.333256 -0.188021 6.080074 0.000648962 Z M 6.080074 0.000648962 " transform="matrix(0.9938,0,0,-0.9938,134.41856,21.938145)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph8-1" x="102.146415" y="14.081152"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph8-2" x="108.75027" y="14.081152"/>
  <use xlink:href="#fisica2_lez12a_d1-glyph8-3" x="113.15119" y="14.081152"/>
  <use xlink:href="#fisica2_lez12a_d1-glyph8-4" x="117.029346" y="14.081152"/>
  <use xlink:href="#fisica2_lez12a_d1-glyph8-5" x="120.935224" y="14.081152"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph8-6" x="129.182617" y="14.081152"/>
  <use xlink:href="#fisica2_lez12a_d1-glyph8-7" x="134.683519" y="14.081152"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_d1-glyph0-5" x="140.732688" y="14.081152"/>
</g>
</g>
</svg></figure>
        <p>Nella figura, i portatori positivi derivano con velocità $v_{d+}$ da $A$ verso $B$ (nel verso del campo elettrico), mentre i portatori negativi (gli elettroni di conduzione) derivano con velocità $v_{d-}$ da $B$ verso $A$. La freccia in alto indica il verso convenzionale di $I$, da $A$ verso $B$.</p>
        <p>Le cariche in un conduttore non si muovono in modo ordinato, ma hanno un <strong>moto caotico di agitazione termica</strong>. La presenza di un campo elettrico impone a questo moto disordinato una deriva d'insieme.</p>`,
        subsections: [
          {
            subtitle: "Definizione — Velocità di deriva",
            content: `<p>Si definisce <strong>velocità di deriva</strong> $\\vec{v}_d$ la velocità media (vettoriale) dei portatori di carica mobili all'interno del conduttore:</p>
            <p>$$\\vec{v}_d = \\langle \\vec{v} \\rangle$$</p>
            <p>dove la media è estesa a tutti i portatori contenuti in un volumetto macroscopicamente piccolo. L'unità di misura è il metro al secondo (m/s).</p>
            <p>La media del moto puramente termico è nulla: $\\vec{v}_d$ è dunque interamente dovuta al campo elettrico applicato. Per i portatori positivi $\\vec{v}_d$ ha il verso di $\\vec{E}$, per quelli negativi il verso opposto. Nei metalli $|\\vec{v}_d|$ è dell'ordine di frazioni di millimetro al secondo, <strong>molto minore</strong> della velocità di agitazione termica.</p>`
          }
        ]
      },

      {
        id: "s12-vettore-J",
        type: "section",
        title: "Vettore densità di corrente",
        icon: "➡️",
        content: `<p>L'intensità $I$ è una grandezza <strong>globale</strong>, riferita a un'intera superficie. Per descrivere la corrente in modo <strong>locale</strong>, punto per punto, introduciamo il vettore densità di corrente $\\vec{J}$.</p>
        <p>Consideriamo un piccolo volume cilindrico all'interno del conduttore, con una superficie di base $dS$ e altezza $dl$. In un tempo $dt$, le cariche con velocità di deriva $\\vec{v}_d$ percorrono una distanza $dl = v_d dt$. La quantità di carica che attraversa la superficie $dS$ nell'intervallo $dt$ è quella contenuta nel volume spazzato dalle cariche.</p><!-- L12 ADD volume --><figure class="figura" data-id="fisica2_lez12a_add_volume"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez12a_add_volume" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="205.587pt" height="138.009pt" viewBox="0 0 205.587 138.009" version="1.2"><style>#fisica2_lez12a_add_volume [fill="rgb(91.775513%,95.727539%,94.387817%)"],#fisica2_lez12a_add_volume [style*="fill:rgb(91.775513%,95.727539%,94.387817%)"]{fill:#293d36!important}[data-mode="light"] #fisica2_lez12a_add_volume [fill="rgb(91.775513%,95.727539%,94.387817%)"],[data-mode="light"] #fisica2_lez12a_add_volume [style*="fill:rgb(91.775513%,95.727539%,94.387817%)"]{fill:#eaf4f1!important}#fisica2_lez12a_add_volume [fill="rgb(0%,0%,0%)"],#fisica2_lez12a_add_volume [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez12a_add_volume [stroke="rgb(0%,0%,0%)"],#fisica2_lez12a_add_volume [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez12a_add_volume [fill="rgb(79.896545%,89.559937%,86.280823%)"],#fisica2_lez12a_add_volume [style*="fill:rgb(79.896545%,89.559937%,86.280823%)"]{fill:#293d36!important}[data-mode="light"] #fisica2_lez12a_add_volume [fill="rgb(79.896545%,89.559937%,86.280823%)"],[data-mode="light"] #fisica2_lez12a_add_volume [style*="fill:rgb(79.896545%,89.559937%,86.280823%)"]{fill:#cce4dc!important}#fisica2_lez12a_add_volume [fill="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_volume [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_volume [fill="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_volume [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#168660!important}#fisica2_lez12a_add_volume [stroke="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_volume [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_volume [stroke="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_volume [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#168660!important}#fisica2_lez12a_add_volume [fill="rgb(100%,100%,100%)"],#fisica2_lez12a_add_volume [style*="fill:rgb(100%,100%,100%)"]{fill:var(--bg-primary)!important}#fisica2_lez12a_add_volume [stroke="rgb(100%,100%,100%)"],#fisica2_lez12a_add_volume [style*="stroke:rgb(100%,100%,100%)"]{stroke:var(--bg-primary)!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-1">
<path style="stroke:none;" d="M 4.578125 -1.28125 C 4.578125 -1.3125 4.546875 -1.375 4.46875 -1.375 C 4.359375 -1.375 4.34375 -1.34375 4.3125 -1.171875 C 4.109375 -0.390625 3.921875 -0.125 3.640625 -0.125 C 3.421875 -0.125 3.359375 -0.34375 3.359375 -0.53125 C 3.359375 -0.65625 3.40625 -0.90625 3.421875 -0.921875 L 4.671875 -5.875 C 4.703125 -6 4.703125 -6.015625 4.703125 -6.0625 C 4.703125 -6.140625 4.65625 -6.1875 4.5625 -6.1875 C 4.4375 -6.1875 3.65625 -6.109375 3.484375 -6.09375 C 3.390625 -6.078125 3.296875 -6.078125 3.296875 -5.921875 C 3.296875 -5.8125 3.390625 -5.8125 3.53125 -5.8125 C 3.953125 -5.8125 3.953125 -5.75 3.953125 -5.671875 C 3.953125 -5.609375 3.875 -5.296875 3.828125 -5.109375 C 3.703125 -4.625 3.78125 -4.90625 3.65625 -4.421875 L 3.40625 -3.390625 C 3.234375 -3.703125 2.953125 -3.9375 2.5625 -3.9375 C 1.515625 -3.9375 0.375 -2.703125 0.375 -1.34375 C 0.375 -0.359375 1 0.09375 1.59375 0.09375 C 2.171875 0.09375 2.640625 -0.390625 2.78125 -0.546875 C 2.890625 -0.0625 3.328125 0.09375 3.609375 0.09375 C 3.875 0.09375 4.09375 -0.015625 4.296875 -0.390625 C 4.453125 -0.6875 4.578125 -1.234375 4.578125 -1.28125 Z M 3.265625 -2.8125 L 2.828125 -1.078125 C 2.78125 -0.9375 2.78125 -0.921875 2.640625 -0.734375 C 2.3125 -0.359375 1.953125 -0.125 1.625 -0.125 C 1.1875 -0.125 1.03125 -0.578125 1.03125 -0.96875 C 1.03125 -1.390625 1.296875 -2.421875 1.5 -2.84375 C 1.796875 -3.390625 2.203125 -3.71875 2.5625 -3.71875 C 3.15625 -3.71875 3.28125 -3 3.28125 -2.953125 C 3.28125 -2.90625 3.265625 -2.84375 3.265625 -2.8125 Z M 3.265625 -2.8125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-2">
<path style="stroke:none;" d="M 5.03125 -2.078125 C 5.03125 -3.171875 4.15625 -3.40625 3.890625 -3.46875 L 3.078125 -3.671875 C 2.78125 -3.75 2.234375 -3.890625 2.234375 -4.5625 C 2.234375 -5.25 2.953125 -6.03125 3.84375 -6.03125 C 4.1875 -6.03125 4.546875 -5.9375 4.796875 -5.6875 C 5.125 -5.359375 5.140625 -4.875 5.140625 -4.640625 C 5.140625 -4.34375 5.109375 -4.25 5.109375 -4.171875 C 5.109375 -4.109375 5.140625 -4.0625 5.234375 -4.0625 C 5.328125 -4.0625 5.328125 -4.078125 5.375 -4.25 L 5.828125 -6.03125 C 5.84375 -6.140625 5.84375 -6.15625 5.84375 -6.1875 C 5.84375 -6.1875 5.84375 -6.28125 5.75 -6.28125 C 5.703125 -6.28125 5.6875 -6.265625 5.578125 -6.140625 C 5.453125 -6.015625 5.5625 -6.125 5.15625 -5.640625 C 4.828125 -6.140625 4.3125 -6.28125 3.84375 -6.28125 C 2.6875 -6.28125 1.609375 -5.25 1.609375 -4.1875 C 1.609375 -3.828125 1.71875 -3.515625 1.953125 -3.265625 C 2.203125 -3 2.4375 -2.953125 3.078125 -2.78125 L 3.828125 -2.59375 C 4.109375 -2.5 4.40625 -2.21875 4.40625 -1.703125 C 4.40625 -0.921875 3.640625 -0.078125 2.75 -0.078125 C 2.234375 -0.078125 1.171875 -0.234375 1.171875 -1.375 C 1.171875 -1.453125 1.171875 -1.59375 1.21875 -1.859375 C 1.234375 -1.890625 1.234375 -1.921875 1.234375 -1.921875 C 1.234375 -1.953125 1.21875 -2.015625 1.109375 -2.015625 C 1 -2.015625 1 -1.984375 0.96875 -1.828125 L 0.484375 0.09375 C 0.484375 0.15625 0.53125 0.203125 0.59375 0.203125 C 0.640625 0.203125 0.65625 0.1875 0.765625 0.0625 C 0.8125 0 1.078125 -0.328125 1.1875 -0.4375 C 1.640625 0.15625 2.46875 0.203125 2.734375 0.203125 C 3.96875 0.203125 5.03125 -0.953125 5.03125 -2.078125 Z M 5.03125 -2.078125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-3">
<path style="stroke:none;" d="M 5.6875 -5.484375 C 5.6875 -5.578125 5.59375 -5.640625 5.546875 -5.671875 C 5.421875 -5.75 5.265625 -5.890625 5.171875 -6.15625 C 5.125 -6.265625 5.09375 -6.375 4.953125 -6.375 C 4.875 -6.375 4.78125 -6.3125 4.78125 -6.1875 C 4.78125 -6.015625 4.953125 -5.734375 4.984375 -5.671875 L 1.953125 -5.671875 C 1.8125 -5.671875 1.625 -5.671875 1.625 -5.484375 C 1.625 -5.296875 1.796875 -5.296875 1.953125 -5.296875 L 4.828125 -5.296875 C 4.8125 -5.265625 4.421875 -4.921875 4.421875 -4.78125 C 4.421875 -4.671875 4.5 -4.59375 4.609375 -4.59375 C 4.703125 -4.59375 4.75 -4.65625 4.78125 -4.6875 C 4.875 -4.8125 5.078125 -5.0625 5.484375 -5.265625 C 5.59375 -5.3125 5.6875 -5.359375 5.6875 -5.484375 Z M 5.6875 -5.484375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-4">
<path style="stroke:none;" d="M 4.28125 -3.28125 C 4.28125 -3.90625 3.953125 -3.953125 3.875 -3.953125 C 3.65625 -3.953125 3.421875 -3.703125 3.421875 -3.5 C 3.421875 -3.359375 3.5 -3.296875 3.5625 -3.234375 C 3.796875 -3.015625 3.890625 -2.734375 3.890625 -2.5 C 3.890625 -2.109375 3.328125 -0.125 2.28125 -0.125 C 1.625 -0.125 1.625 -0.75 1.625 -0.90625 C 1.625 -1.296875 1.75 -1.75 2.0625 -2.5625 C 2.203125 -2.9375 2.234375 -3.015625 2.234375 -3.1875 C 2.234375 -3.625 1.90625 -3.9375 1.46875 -3.9375 C 0.609375 -3.9375 0.265625 -2.671875 0.265625 -2.5625 C 0.265625 -2.484375 0.328125 -2.453125 0.390625 -2.453125 C 0.484375 -2.453125 0.484375 -2.515625 0.53125 -2.625 C 0.71875 -3.28125 1.0625 -3.71875 1.4375 -3.71875 C 1.625 -3.71875 1.65625 -3.59375 1.65625 -3.421875 C 1.65625 -3.265625 1.625 -3.109375 1.546875 -2.890625 C 1.21875 -2.046875 1 -1.46875 1 -1.03125 C 1 -0.1875 1.640625 0.09375 2.25 0.09375 C 3.75 0.09375 4.28125 -2.71875 4.28125 -3.28125 Z M 4.28125 -3.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-5">
<path style="stroke:none;" d="M 5.25 -1.28125 C 5.25 -1.3125 5.234375 -1.375 5.140625 -1.375 C 5.046875 -1.375 5.03125 -1.34375 5 -1.21875 C 4.78125 -0.46875 4.40625 -0.125 4.078125 -0.125 C 4.015625 -0.125 3.859375 -0.125 3.859375 -0.40625 C 3.859375 -0.625 3.953125 -0.859375 4.015625 -1.0625 C 4.1875 -1.515625 4.546875 -2.453125 4.546875 -2.953125 C 4.546875 -3.75 3.96875 -3.9375 3.484375 -3.9375 C 2.65625 -3.9375 2.234375 -3.34375 2.078125 -3.15625 C 2.03125 -3.640625 1.671875 -3.9375 1.21875 -3.9375 C 0.84375 -3.9375 0.65625 -3.65625 0.53125 -3.421875 C 0.390625 -3.109375 0.265625 -2.59375 0.265625 -2.5625 C 0.265625 -2.484375 0.328125 -2.453125 0.390625 -2.453125 C 0.484375 -2.453125 0.5 -2.5 0.546875 -2.6875 C 0.71875 -3.390625 0.90625 -3.71875 1.203125 -3.71875 C 1.46875 -3.71875 1.46875 -3.421875 1.46875 -3.296875 C 1.46875 -3.109375 1.390625 -2.828125 1.34375 -2.59375 C 1.28125 -2.375 1.1875 -1.984375 1.15625 -1.875 L 0.796875 -0.421875 C 0.734375 -0.203125 0.734375 -0.1875 0.734375 -0.15625 C 0.734375 -0.046875 0.8125 0.09375 1.015625 0.09375 C 1.140625 0.09375 1.28125 0.015625 1.34375 -0.09375 C 1.359375 -0.140625 1.4375 -0.421875 1.484375 -0.609375 L 1.6875 -1.390625 C 1.78125 -1.8125 1.953125 -2.46875 1.953125 -2.53125 C 1.984375 -2.59375 2.203125 -3.015625 2.515625 -3.328125 C 2.78125 -3.578125 3.125 -3.71875 3.46875 -3.71875 C 3.953125 -3.71875 3.953125 -3.234375 3.953125 -3.09375 C 3.953125 -2.546875 3.53125 -1.453125 3.421875 -1.1875 C 3.328125 -0.90625 3.28125 -0.8125 3.28125 -0.65625 C 3.28125 -0.171875 3.65625 0.09375 4.046875 0.09375 C 4.90625 0.09375 5.25 -1.171875 5.25 -1.28125 Z M 5.25 -1.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-6">
<path style="stroke:none;" d="M 2.203125 -1.28125 C 2.203125 -1.3125 2.171875 -1.375 2.078125 -1.375 C 1.984375 -1.375 1.96875 -1.34375 1.9375 -1.171875 C 1.78125 -0.5625 1.609375 -0.125 1.28125 -0.125 C 1.09375 -0.125 1 -0.25 1 -0.53125 C 1 -0.71875 1.015625 -0.78125 1.046875 -0.921875 L 2.296875 -5.875 C 2.328125 -6 2.328125 -6.015625 2.328125 -6.0625 C 2.328125 -6.140625 2.28125 -6.1875 2.203125 -6.1875 C 2.046875 -6.1875 1.3125 -6.109375 1.109375 -6.09375 C 1.046875 -6.078125 0.9375 -6.078125 0.9375 -5.921875 C 0.9375 -5.8125 1.03125 -5.8125 1.171875 -5.8125 C 1.578125 -5.8125 1.578125 -5.734375 1.578125 -5.671875 C 1.578125 -5.625 1.578125 -5.609375 1.546875 -5.453125 L 0.453125 -1.0625 C 0.40625 -0.890625 0.40625 -0.765625 0.40625 -0.734375 C 0.40625 -0.171875 0.859375 0.09375 1.25 0.09375 C 1.640625 0.09375 1.828125 -0.21875 1.9375 -0.421875 C 2.09375 -0.734375 2.203125 -1.25 2.203125 -1.28125 Z M 2.203125 -1.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-7">
<path style="stroke:none;" d="M 2.90625 -1.28125 C 2.90625 -1.3125 2.875 -1.375 2.78125 -1.375 C 2.703125 -1.375 2.6875 -1.359375 2.625 -1.203125 C 2.34375 -0.5625 1.90625 -0.125 1.46875 -0.125 C 1.296875 -0.125 1.1875 -0.234375 1.1875 -0.53125 C 1.1875 -0.734375 1.21875 -0.84375 1.25 -0.96875 L 1.890625 -3.5625 L 2.75 -3.5625 C 2.90625 -3.5625 3.015625 -3.5625 3.015625 -3.71875 C 3.015625 -3.84375 2.921875 -3.84375 2.765625 -3.84375 L 1.96875 -3.84375 L 2.328125 -5.3125 C 2.328125 -5.453125 2.21875 -5.578125 2.0625 -5.578125 C 1.765625 -5.578125 1.703125 -5.3125 1.6875 -5.234375 L 1.328125 -3.84375 L 0.484375 -3.84375 C 0.328125 -3.84375 0.21875 -3.84375 0.21875 -3.671875 C 0.21875 -3.5625 0.3125 -3.5625 0.46875 -3.5625 L 1.265625 -3.5625 L 0.65625 -1.140625 C 0.59375 -0.875 0.59375 -0.859375 0.59375 -0.734375 C 0.59375 -0.203125 0.984375 0.09375 1.453125 0.09375 C 2.375 0.09375 2.90625 -1.1875 2.90625 -1.28125 Z M 2.90625 -1.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph0-8">
<path style="stroke:none;" d="M 7.03125 -5.96875 C 7.03125 -6.03125 6.96875 -6.078125 6.90625 -6.078125 C 6.875 -6.078125 6.65625 -6.0625 6.1875 -6.0625 C 5.890625 -6.0625 5.59375 -6.078125 5.3125 -6.078125 C 5.25 -6.078125 5.15625 -6.0625 5.15625 -5.921875 C 5.15625 -5.8125 5.25 -5.8125 5.28125 -5.8125 C 5.375 -5.796875 5.6875 -5.78125 5.6875 -5.515625 C 5.6875 -5.453125 5.671875 -5.390625 5.625 -5.3125 C 5.59375 -5.25 5.578125 -5.203125 5.546875 -5.140625 L 2.75 -0.828125 L 2.078125 -5.546875 C 2.078125 -5.625 2.140625 -5.8125 2.6875 -5.8125 C 2.796875 -5.8125 2.90625 -5.8125 2.90625 -5.96875 C 2.90625 -6.0625 2.8125 -6.078125 2.765625 -6.078125 C 2.59375 -6.078125 2.40625 -6.0625 2.25 -6.0625 L 1.6875 -6.0625 C 1.515625 -6.0625 1.28125 -6.0625 1.1875 -6.0625 L 0.6875 -6.078125 C 0.65625 -6.078125 0.53125 -6.078125 0.53125 -5.921875 C 0.53125 -5.8125 0.625 -5.8125 0.734375 -5.8125 C 1.234375 -5.8125 1.234375 -5.734375 1.28125 -5.5 L 2.0625 -0.03125 C 2.078125 0.140625 2.09375 0.203125 2.25 0.203125 C 2.390625 0.203125 2.4375 0.125 2.5 0.015625 L 5.75 -5.03125 C 6.125 -5.609375 6.4375 -5.765625 6.84375 -5.8125 C 6.953125 -5.8125 7.03125 -5.828125 7.03125 -5.96875 Z M 7.03125 -5.96875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph1-1">
<path style="stroke:none;" d="M 3.640625 -0.859375 C 3.640625 -0.859375 3.640625 -0.9375 3.53125 -0.9375 C 3.4375 -0.9375 3.421875 -0.890625 3.40625 -0.796875 C 3.3125 -0.4375 3.1875 -0.140625 2.953125 -0.140625 C 2.75 -0.140625 2.734375 -0.34375 2.734375 -0.4375 C 2.734375 -0.515625 2.734375 -0.53125 2.765625 -0.640625 L 3.59375 -3.9375 C 3.59375 -3.96875 3.609375 -4 3.609375 -4.03125 C 3.609375 -4.125 3.484375 -4.125 3.421875 -4.109375 L 2.75 -4.0625 C 2.65625 -4.0625 2.578125 -4.046875 2.578125 -3.90625 C 2.578125 -3.8125 2.65625 -3.8125 2.75 -3.8125 C 2.921875 -3.8125 2.96875 -3.8125 3.046875 -3.78125 C 3.03125 -3.6875 3.03125 -3.671875 3.015625 -3.59375 L 2.671875 -2.265625 C 2.59375 -2.40625 2.390625 -2.625 2.03125 -2.625 C 1.265625 -2.625 0.453125 -1.828125 0.453125 -0.953125 C 0.453125 -0.3125 0.890625 0.0625 1.40625 0.0625 C 1.796875 0.0625 2.140625 -0.21875 2.28125 -0.359375 C 2.40625 0.015625 2.796875 0.0625 2.921875 0.0625 C 3.140625 0.0625 3.296875 -0.0625 3.40625 -0.25 C 3.5625 -0.484375 3.640625 -0.828125 3.640625 -0.859375 Z M 2.3125 -0.78125 C 2.28125 -0.671875 2.28125 -0.65625 2.203125 -0.5625 C 1.875 -0.203125 1.5625 -0.140625 1.421875 -0.140625 C 1.1875 -0.140625 0.953125 -0.296875 0.953125 -0.71875 C 0.953125 -0.96875 1.078125 -1.546875 1.265625 -1.875 C 1.4375 -2.203125 1.75 -2.421875 2.03125 -2.421875 C 2.46875 -2.421875 2.59375 -1.953125 2.59375 -1.90625 L 2.578125 -1.828125 Z M 2.3125 -0.78125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph2-1">
<path style="stroke:none;" d="M 3.640625 -4.71875 L 2.28125 -6.15625 L 0.9375 -4.71875 L 1.046875 -4.59375 L 2.28125 -5.546875 L 3.53125 -4.59375 Z M 3.640625 -4.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph2-2">
<path style="stroke:none;" d="M 6.59375 -3.140625 C 6.59375 -3.328125 6.40625 -3.328125 6.265625 -3.328125 L 0.84375 -3.328125 C 0.703125 -3.328125 0.5 -3.328125 0.5 -3.140625 C 0.5 -2.953125 0.6875 -2.953125 0.796875 -2.953125 L 6.3125 -2.953125 C 6.4375 -2.953125 6.59375 -2.953125 6.59375 -3.140625 Z M 6.59375 -1.328125 C 6.59375 -1.515625 6.4375 -1.515625 6.3125 -1.515625 L 0.796875 -1.515625 C 0.6875 -1.515625 0.5 -1.515625 0.5 -1.328125 C 0.5 -1.125 0.703125 -1.125 0.84375 -1.125 L 6.265625 -1.125 C 6.40625 -1.125 6.59375 -1.125 6.59375 -1.328125 Z M 6.59375 -1.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph2-3">
<path style="stroke:none;" d="M 3.03125 2.125 C 3.03125 2.078125 3.015625 2.046875 2.953125 1.984375 C 1.8125 0.9375 1.453125 -0.671875 1.453125 -2.234375 C 1.453125 -3.609375 1.734375 -5.28125 2.984375 -6.46875 C 3.015625 -6.515625 3.03125 -6.53125 3.03125 -6.578125 C 3.03125 -6.640625 3 -6.6875 2.9375 -6.6875 C 2.828125 -6.6875 2.015625 -6.03125 1.546875 -5.0625 C 1.109375 -4.21875 0.90625 -3.296875 0.90625 -2.234375 C 0.90625 -1.59375 0.984375 -0.578125 1.46875 0.46875 C 2 1.5625 2.828125 2.21875 2.9375 2.21875 C 3 2.21875 3.03125 2.1875 3.03125 2.125 Z M 3.03125 2.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph2-4">
<path style="stroke:none;" d="M 2.65625 -2.234375 C 2.65625 -2.96875 2.546875 -3.953125 2.078125 -4.9375 C 1.5625 -6.03125 0.734375 -6.6875 0.625 -6.6875 C 0.53125 -6.6875 0.515625 -6.609375 0.515625 -6.578125 C 0.515625 -6.53125 0.53125 -6.515625 0.59375 -6.453125 C 1.109375 -5.984375 2.09375 -4.78125 2.09375 -2.234375 C 2.09375 -0.96875 1.859375 0.8125 0.5625 2.015625 C 0.546875 2.046875 0.515625 2.078125 0.515625 2.125 C 0.515625 2.140625 0.53125 2.21875 0.625 2.21875 C 0.734375 2.21875 1.53125 1.578125 2.015625 0.609375 C 2.4375 -0.25 2.65625 -1.171875 2.65625 -2.234375 Z M 2.65625 -2.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_volume-glyph3-1">
<path style="stroke:none;" d="M 1.5625 1.921875 L 1.5625 -6.390625 C 1.5625 -6.5 1.5625 -6.6875 1.375 -6.6875 C 1.1875 -6.6875 1.1875 -6.484375 1.1875 -6.34375 L 1.1875 1.890625 C 1.1875 2.015625 1.1875 2.21875 1.375 2.21875 C 1.5625 2.21875 1.5625 2.046875 1.5625 1.921875 Z M 3.390625 1.890625 L 3.390625 -6.34375 C 3.390625 -6.484375 3.390625 -6.6875 3.1875 -6.6875 C 3 -6.6875 3 -6.5 3 -6.390625 L 3 1.921875 C 3 2.046875 3 2.21875 3.1875 2.21875 C 3.390625 2.21875 3.390625 2.015625 3.390625 1.890625 Z M 3.390625 1.890625 "/>
</symbol>
</g>
<clipPath id="fisica2_lez12a_add_volume-clip1">
  <path d="M 0.527344 32 L 29 32 L 29 95 L 0.527344 95 Z M 0.527344 32 "/>
</clipPath>
</defs>
<g id="fisica2_lez12a_add_volume-surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(91.775513%,95.727539%,94.387817%);fill-opacity:1;" d="M 13.6875 88.734375 L 13.6875 38.074219 L 154.410156 38.074219 L 154.410156 88.734375 Z M 13.6875 88.734375 "/>
<g clip-path="url(#fisica2_lez12a_add_volume-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 9.071652 0.000383604 C 9.071652 14.08911 5.011455 25.510382 -0.000842662 25.510382 C -5.009206 25.510382 -9.069403 14.08911 -9.069403 0.000383604 C -9.069403 -14.088343 -5.009206 -25.513549 -0.000842662 -25.513549 C 5.011455 -25.513549 9.071652 -14.088343 9.071652 0.000383604 Z M 9.071652 0.000383604 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000842662 25.510382 L 141.7323 25.510382 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000842662 -25.513549 L 141.7323 -25.513549 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(79.896545%,89.559937%,86.280823%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 150.804794 0.000383604 C 150.804794 14.08911 146.744597 25.510382 141.7323 25.510382 C 136.723936 25.510382 132.663739 14.08911 132.663739 0.000383604 C 132.663739 -14.088343 136.723936 -25.513549 141.7323 -25.513549 C 146.744597 -25.513549 150.804794 -14.088343 150.804794 0.000383604 Z M 150.804794 0.000383604 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;" d="M 37.46875 53.550781 C 37.46875 52.851562 36.902344 52.285156 36.203125 52.285156 C 35.503906 52.285156 34.9375 52.851562 34.9375 53.550781 C 34.9375 54.25 35.503906 54.820312 36.203125 54.820312 C 36.902344 54.820312 37.46875 54.25 37.46875 53.550781 Z M 37.46875 53.550781 "/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 26.362899 9.922687 L 36.52126 9.922687 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762541 0.00113713 C 3.298293 0.111298 1.268195 0.752588 0.00135029 1.445025 L 0.00135029 -1.446685 C 1.268195 -0.750314 3.298293 -0.112958 3.762541 0.00113713 Z M 3.762541 0.00113713 " transform="matrix(0.992871,0,0,-0.992871,49.947878,53.55191)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;" d="M 68.429688 74.660156 C 68.429688 73.960938 67.863281 73.394531 67.164062 73.394531 C 66.464844 73.394531 65.898438 73.960938 65.898438 74.660156 C 65.898438 75.359375 66.464844 75.925781 67.164062 75.925781 C 67.863281 75.925781 68.429688 75.359375 68.429688 74.660156 Z M 68.429688 74.660156 "/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 57.542223 -11.338268 L 67.700584 -11.338268 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.760615 0.000282229 C 3.300302 0.114377 1.270203 0.751733 -0.000575582 1.448104 L -0.000575582 -1.44754 C 1.270203 -0.751169 3.300302 -0.113812 3.760615 0.000282229 Z M 3.760615 0.000282229 " transform="matrix(0.992871,0,0,-0.992871,80.906821,74.660436)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;" d="M 105.019531 53.550781 C 105.019531 52.851562 104.449219 52.285156 103.75 52.285156 C 103.050781 52.285156 102.484375 52.851562 102.484375 53.550781 C 102.484375 54.25 103.050781 54.820312 103.75 54.820312 C 104.449219 54.820312 105.019531 54.25 105.019531 53.550781 Z M 105.019531 53.550781 "/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 94.394807 9.922687 L 104.553169 9.922687 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762259 0.00113713 C 3.298012 0.111298 1.267913 0.752588 0.00106853 1.445025 L 0.00106853 -1.446685 C 1.267913 -0.750314 3.298012 -0.112958 3.762259 0.00113713 Z M 3.762259 0.00113713 " transform="matrix(0.992871,0,0,-0.992871,117.495033,53.55191)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;" d="M 130.347656 73.253906 C 130.347656 72.554688 129.78125 71.988281 129.082031 71.988281 C 128.382812 71.988281 127.816406 72.554688 127.816406 73.253906 C 127.816406 73.953125 128.382812 74.519531 129.082031 74.519531 C 129.78125 74.519531 130.347656 73.953125 130.347656 73.253906 Z M 130.347656 73.253906 "/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 119.90874 -9.92192 L 130.063167 -9.92192 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.759877 -0.000369924 C 3.299564 0.113725 1.269466 0.751081 -0.00131302 1.447452 L -0.00131302 -1.448192 C 1.269466 -0.751821 3.299564 -0.114465 3.759877 -0.000369924 Z M 3.759877 -0.000369924 " transform="matrix(0.992871,0,0,-0.992871,142.825522,73.253539)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="148.991765" y="65.086633"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-2" x="153.732332" y="65.086633"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 28.345786 45.354989 L 84.531518 45.354989 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.535005 -0.0000708997 C 3.976335 0.13763 1.529201 0.920555 -0.001242 1.770364 L -0.001242 -1.770506 C 1.529201 -0.920697 3.976335 -0.137771 4.535005 -0.0000708997 Z M 4.535005 -0.0000708997 " transform="matrix(0.992871,0,0,-0.992871,97.618421,18.371023)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-3" x="68.079769" y="13.624169"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-4" x="68.417172" y="13.624169"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph1-1" x="72.86044" y="14.67959"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 141.7323 45.354989 L 169.571403 45.354989 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.534451 -0.0000708997 C 3.97578 0.13763 1.528646 0.920555 -0.00179669 1.770364 L -0.00179669 -1.770506 C 1.528646 -0.920697 3.97578 -0.137771 4.534451 -0.0000708997 Z M 4.534451 -0.0000708997 " transform="matrix(0.992871,0,0,-0.992871,182.052565,18.371023)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-1" x="192.348434" y="21.43806"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-5" x="191.875827" y="21.43806"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.582616 -41.101244 L 137.152775 -41.101244 " transform="matrix(0.992871,0,0,-0.992871,13.688337,63.402725)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.761414 -0.00152595 C 3.301101 0.112569 1.267068 0.749925 0.000223658 1.446296 L 0.000223658 -1.445414 C 1.267068 -0.752977 3.301101 -0.111686 3.761414 -0.00152595 Z M 3.761414 -0.00152595 " transform="matrix(-0.992871,0,0,0.992871,18.238503,104.212453)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.762765 0.00152595 C 3.298518 0.111686 1.268419 0.752977 0.00157481 1.445414 L 0.00157481 -1.446296 C 1.268419 -0.749925 3.298518 -0.112569 3.762765 0.00152595 Z M 3.762765 0.00152595 " transform="matrix(0.992871,0,0,-0.992871,149.861718,104.212453)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 61.683594 111.128906 L 106.417969 111.128906 L 106.417969 97.296875 L 61.683594 97.296875 Z M 61.683594 111.128906 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="64.979034" y="106.77528"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-6" x="69.719601" y="106.77528"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-2" x="75.140071" y="106.77528"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-4" x="84.797722" y="106.77528"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph1-1" x="89.24181" y="107.830701"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="95.074925" y="106.77528"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-7" x="99.815492" y="106.77528"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="15.791236" y="127.546131"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-8" x="20.531804" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-2" x="30.442034" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="40.100678" y="127.546131"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-2" x="44.841245" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="52.459983" y="127.546131"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-6" x="57.20055" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-2" x="62.621959" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="72.280604" y="127.546131"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-2" x="77.021171" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-4" x="84.639908" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph1-1" x="89.08593" y="128.601552"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-1" x="94.919044" y="127.546131"/>
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-7" x="99.659611" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-3" x="121.262877" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-3" x="124.484742" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-4" x="124.822146" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph1-1" x="129.265413" y="128.601552"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph3-1" x="136.114234" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-1" x="143.702743" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph0-5" x="143.23113" y="127.546131"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_volume-glyph2-4" x="148.750497" y="127.546131"/>
</g>
</g>
</svg><figcaption><strong>Volume spazzato dai portatori</strong><span class="figure-explanation">Caso $\\vec v_d$ perpendicolare a $dS$: i portatori contenuti nel cilindro di lunghezza $dl=v_d\\,dt$ attraversano la base nel tempo $dt$. Il volume vale $dV=dS\\,v_d\\,dt$.</span></figcaption></figure><!-- END L12 ADD volume -->`,
        subsections: [
          {
            subtitle: "Volume geometrico e volume orientato",
            content: `<p>Se la velocità $\\vec{v}_d$ non è perpendicolare alla superficie $dS$, il volume <strong>geometrico</strong> effettivamente attraversato dalle cariche nel tempo $dt$ è</p>
            <p>$$dV_{geom} = \\left| \\vec{v}_d \\cdot \\hat{n} \\right| dt \\, dS \\;\\; \\ge 0$$</p>
            <p>dove $\\hat{n}$ è il versore normale alla superficie: solo la componente di $\\vec{v}_d$ lungo $\\hat{n}$ contribuisce al transito, mentre la componente tangenziale fa scorrere le cariche parallelamente a $dS$ senza farle passare.</p>
            <p>Nei calcoli è però conveniente usare il <strong>volume orientato</strong></p>
            <p>$$dV = (\\vec{v}_d \\cdot \\hat{n}) \\, dt \\, dS$$</p>
            <p>che può essere positivo o negativo: il suo segno registra se le cariche attraversano $dS$ nel verso di $\\hat{n}$ oppure in quello opposto. In questo modo la carica $dQ$ che ne deriva risulta automaticamente la <strong>carica netta con segno</strong> riferita alla normale scelta, coerentemente con la definizione di $I$: il risultato porta sia il segno del prodotto scalare sia il segno della carica $q$ dei portatori.</p>`
          },
          {
            subtitle: "Dalla carica trasferita al vettore $\\vec{J}$",
            content: `<p>Sia $n$ la densità dei portatori di carica (numero di portatori per unità di volume) e $q$ la carica di ciascun portatore, con il proprio segno. La carica netta $dQ$ che attraversa $dS$, riferita alla normale $\\hat{n}$, è:</p>
            <p>$$dQ = (nq) \\, dV = n q (\\vec{v}_d \\cdot \\hat{n}) \\, dt \\, dS$$</p>
            <p>Si vede subito che, per esempio, portatori con $q \\lt 0$ che attraversano $dS$ nel verso di $\\hat{n}$ (cioè con $\\vec{v}_d \\cdot \\hat{n} \\gt 0$) danno $dQ \\lt 0$.</p>`
          },
          {
            subtitle: "Definizione — Vettore densità di corrente",
            content: `<p>Si definisce <strong>vettore densità di corrente</strong> il campo vettoriale</p>
            <p>$$\\vec{J} = n q \\, \\vec{v}_d = \\rho_{\\text{mob}} \\, \\vec{v}_d$$</p>
            <p>dove $n$ è la densità numerica dei portatori mobili (misurata in m$^{-3}$), $q$ è la carica di un singolo portatore in coulomb (C) con il proprio segno, $\\rho_{\\text{mob}} = nq$ è la densità di carica volumetrica <strong>mobile</strong> in C/m$^3$, e $\\vec{v}_d$ è la velocità di deriva in m/s.</p>
            <p>L'unità di misura di $\\vec{J}$ è l'ampere su metro quadrato (A/m$^2$).</p>
            <p>Il legame con la corrente è locale: per una superficie orientata di normale $\\hat{n}$,</p>
            <p>$$\\frac{dI}{dS} = \\vec{J} \\cdot \\hat{n}$$</p>
            <p>Il modulo $|\\vec{J}|$ rappresenta dunque la corrente per unità di area <strong>perpendicolare al flusso</strong>; su una superficie orientata in modo generico conta soltanto la componente normale $\\vec{J} \\cdot \\hat{n}$.</p>`
          },
          {
            subtitle: "Verso di $\\vec{J}$ e segno dei portatori",
            content: `<p>Dalla definizione $\\vec{J} = nq\\vec{v}_d$ segue che:</p>
            <ul>
              <li>se $q \\gt 0$, il vettore $\\vec{J}$ ha la stessa direzione e lo stesso verso della velocità di deriva $\\vec{v}_d$;</li>
              <li>se $q \\lt 0$ (per esempio gli elettroni di conduzione in un metallo), il verso di $\\vec{J}$ è <strong>opposto</strong> a quello della deriva dei portatori.</li>
            </ul>
            <p>In entrambi i casi $\\vec{J}$ ha il verso del moto convenzionale delle cariche positive, cioè il verso di $\\vec{E}$ all'interno del conduttore: la convenzione sul verso della corrente è quindi coerente con la definizione di $\\vec{J}$.</p>`
          }
        ],
        formulas: [
          { label: "Vettore densità di corrente", latex: "\\vec{J} = n q \\, \\vec{v}_d = \\rho_{\\text{mob}} \\, \\vec{v}_d" },
          { label: "Legame locale con la corrente", latex: "\\frac{dI}{dS} = \\vec{J} \\cdot \\hat{n}" },
          { label: "Corrente come flusso di J", latex: "I = \\int_{\\Sigma} \\vec{J} \\cdot \\hat{n} \\, dS" }
        ],
        extra_content: `<!-- L12 ADD superficie --><figure class="figura" data-id="fisica2_lez12a_add_superficie"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez12a_add_superficie" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="287.129pt" height="160.619pt" viewBox="0 0 287.129 160.619" version="1.2"><style>#fisica2_lez12a_add_superficie [fill="rgb(0%,0%,0%)"],#fisica2_lez12a_add_superficie [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez12a_add_superficie [stroke="rgb(0%,0%,0%)"],#fisica2_lez12a_add_superficie [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez12a_add_superficie [fill="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_superficie [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_superficie [fill="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_superficie [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#168660!important}#fisica2_lez12a_add_superficie [stroke="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_superficie [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_superficie [stroke="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_superficie [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#168660!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-1">
<path style="stroke:none;" d="M 3.046875 2.125 C 3.046875 2.078125 3.015625 2.0625 2.96875 2 C 1.8125 0.9375 1.46875 -0.671875 1.46875 -2.234375 C 1.46875 -3.625 1.734375 -5.296875 3 -6.5 C 3.03125 -6.53125 3.046875 -6.5625 3.046875 -6.609375 C 3.046875 -6.671875 3 -6.703125 2.9375 -6.703125 C 2.828125 -6.703125 2.03125 -6.0625 1.546875 -5.078125 C 1.125 -4.234375 0.90625 -3.3125 0.90625 -2.25 C 0.90625 -1.59375 0.984375 -0.578125 1.46875 0.46875 C 2 1.578125 2.828125 2.21875 2.9375 2.21875 C 3 2.21875 3.046875 2.1875 3.046875 2.125 Z M 3.046875 2.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-2">
<path style="stroke:none;" d="M 4.4375 -0.796875 L 4.4375 -1.296875 L 4.1875 -1.296875 L 4.1875 -0.796875 C 4.1875 -0.703125 4.1875 -0.265625 3.875 -0.265625 C 3.546875 -0.265625 3.546875 -0.6875 3.546875 -0.828125 L 3.546875 -2.390625 C 3.546875 -2.90625 3.546875 -3.203125 3.140625 -3.578125 C 2.8125 -3.875 2.390625 -4 1.9375 -4 C 1.1875 -4 0.5625 -3.625 0.5625 -3.0625 C 0.5625 -2.78125 0.75 -2.625 0.984375 -2.625 C 1.21875 -2.625 1.390625 -2.8125 1.390625 -3.03125 C 1.390625 -3.421875 0.984375 -3.46875 0.984375 -3.46875 C 1.234375 -3.703125 1.65625 -3.78125 1.921875 -3.78125 C 2.375 -3.78125 2.890625 -3.4375 2.890625 -2.65625 L 2.890625 -2.359375 C 2.40625 -2.34375 1.734375 -2.296875 1.140625 -2.015625 C 0.484375 -1.703125 0.296875 -1.234375 0.296875 -0.875 C 0.296875 -0.140625 1.15625 0.09375 1.765625 0.09375 C 2.5 0.09375 2.84375 -0.390625 2.96875 -0.640625 C 3.015625 -0.265625 3.265625 0.046875 3.65625 0.046875 C 3.875 0.046875 4.4375 -0.078125 4.4375 -0.796875 Z M 2.890625 -1.265625 C 2.890625 -0.390625 2.21875 -0.125 1.828125 -0.125 C 1.40625 -0.125 1.015625 -0.421875 1.015625 -0.875 C 1.015625 -1.46875 1.515625 -2.09375 2.890625 -2.140625 Z M 2.890625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-3">
<path style="stroke:none;" d="M 2.65625 -2.25 C 2.65625 -2.96875 2.5625 -3.953125 2.09375 -4.953125 C 1.5625 -6.046875 0.734375 -6.703125 0.625 -6.703125 C 0.53125 -6.703125 0.515625 -6.625 0.515625 -6.609375 C 0.515625 -6.5625 0.53125 -6.53125 0.59375 -6.46875 C 1.125 -6 2.09375 -4.796875 2.09375 -2.25 C 2.09375 -0.96875 1.875 0.8125 0.578125 2.015625 C 0.546875 2.046875 0.515625 2.078125 0.515625 2.125 C 0.515625 2.15625 0.53125 2.21875 0.625 2.21875 C 0.734375 2.21875 1.53125 1.578125 2.015625 0.609375 C 2.453125 -0.25 2.65625 -1.171875 2.65625 -2.25 Z M 2.65625 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-4">
<path style="stroke:none;" d="M 5.609375 -4.0625 L 5.359375 -6.078125 L 0.34375 -6.078125 L 0.34375 -5.796875 L 0.546875 -5.796875 C 1.234375 -5.796875 1.25 -5.703125 1.25 -5.375 L 1.25 -0.703125 C 1.25 -0.375 1.234375 -0.28125 0.546875 -0.28125 L 0.34375 -0.28125 L 0.34375 0 C 0.734375 -0.03125 1.296875 -0.03125 1.703125 -0.03125 C 2.0625 -0.03125 2.875 -0.03125 3.1875 0 L 3.1875 -0.28125 L 2.90625 -0.28125 C 2.09375 -0.28125 2.0625 -0.390625 2.0625 -0.71875 L 2.0625 -2.90625 L 2.859375 -2.90625 C 3.734375 -2.90625 3.828125 -2.625 3.828125 -1.859375 L 4.078125 -1.859375 L 4.078125 -4.234375 L 3.828125 -4.234375 C 3.828125 -3.46875 3.734375 -3.1875 2.859375 -3.1875 L 2.0625 -3.1875 L 2.0625 -5.4375 C 2.0625 -5.734375 2.078125 -5.796875 2.5 -5.796875 L 3.625 -5.796875 C 4.984375 -5.796875 5.203125 -5.296875 5.359375 -4.0625 Z M 5.609375 -4.0625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-5">
<path style="stroke:none;" d="M 2.328125 0 L 2.328125 -0.28125 C 1.75 -0.28125 1.640625 -0.28125 1.640625 -0.6875 L 1.640625 -6.203125 L 0.328125 -6.109375 L 0.328125 -5.828125 C 0.921875 -5.828125 1.015625 -5.765625 1.015625 -5.328125 L 1.015625 -0.6875 C 1.015625 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.75 -0.03125 1.890625 -0.015625 2.328125 0 Z M 2.328125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-6">
<path style="stroke:none;" d="M 4.890625 0 L 4.890625 -0.28125 C 4.28125 -0.28125 4.203125 -0.34375 4.203125 -0.78125 L 4.203125 -3.953125 L 2.84375 -3.859375 L 2.84375 -3.578125 C 3.453125 -3.578125 3.546875 -3.515625 3.546875 -3.078125 L 3.546875 -1.5 C 3.546875 -0.703125 3.09375 -0.125 2.453125 -0.125 C 1.703125 -0.125 1.65625 -0.515625 1.65625 -0.984375 L 1.65625 -3.953125 L 0.3125 -3.859375 L 0.3125 -3.578125 C 1 -3.578125 1 -3.546875 1 -2.75 L 1 -1.40625 C 1 -0.828125 1 -0.453125 1.40625 -0.140625 C 1.671875 0.03125 2.03125 0.09375 2.390625 0.09375 C 2.859375 0.09375 3.296875 -0.109375 3.5625 -0.640625 L 3.5625 0.09375 Z M 4.890625 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-7">
<path style="stroke:none;" d="M 3.3125 -1.140625 C 3.3125 -1.546875 3.125 -1.78125 2.9375 -2 C 2.625 -2.28125 2.3125 -2.34375 1.640625 -2.46875 C 1.40625 -2.515625 0.765625 -2.640625 0.765625 -3.140625 C 0.765625 -3.4375 0.96875 -3.8125 1.78125 -3.8125 C 2.75 -3.8125 2.8125 -3.0625 2.828125 -2.84375 C 2.828125 -2.734375 2.828125 -2.6875 2.953125 -2.6875 C 3.078125 -2.6875 3.078125 -2.75 3.078125 -2.90625 L 3.078125 -3.765625 C 3.078125 -3.921875 3.078125 -4 2.96875 -4 C 2.921875 -4 2.90625 -4 2.78125 -3.890625 C 2.765625 -3.875 2.6875 -3.796875 2.640625 -3.75 C 2.359375 -3.953125 2.078125 -4 1.78125 -4 C 0.59375 -4 0.296875 -3.359375 0.296875 -2.890625 C 0.296875 -2.609375 0.421875 -2.375 0.640625 -2.1875 C 0.9375 -1.90625 1.28125 -1.84375 1.734375 -1.765625 C 2.1875 -1.671875 2.34375 -1.640625 2.53125 -1.5 C 2.625 -1.421875 2.84375 -1.25 2.84375 -0.90625 C 2.84375 -0.125 1.953125 -0.125 1.828125 -0.125 C 0.90625 -0.125 0.671875 -0.890625 0.578125 -1.375 C 0.546875 -1.453125 0.53125 -1.515625 0.421875 -1.515625 C 0.296875 -1.515625 0.296875 -1.4375 0.296875 -1.28125 L 0.296875 -0.140625 C 0.296875 0.015625 0.296875 0.09375 0.40625 0.09375 C 0.46875 0.09375 0.46875 0.09375 0.640625 -0.078125 C 0.671875 -0.140625 0.765625 -0.25 0.8125 -0.296875 C 1.1875 0.078125 1.59375 0.09375 1.828125 0.09375 C 2.921875 0.09375 3.3125 -0.546875 3.3125 -1.140625 Z M 3.3125 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-8">
<path style="stroke:none;" d="M 4.328125 -1.90625 C 4.328125 -3.078125 3.390625 -4 2.296875 -4 C 1.15625 -4 0.265625 -3.046875 0.265625 -1.90625 C 0.265625 -0.78125 1.1875 0.09375 2.28125 0.09375 C 3.421875 0.09375 4.328125 -0.796875 4.328125 -1.90625 Z M 3.5625 -1.984375 C 3.5625 -1.65625 3.5625 -1.140625 3.328125 -0.734375 C 3.078125 -0.328125 2.671875 -0.15625 2.296875 -0.15625 C 1.84375 -0.15625 1.46875 -0.375 1.265625 -0.71875 C 1.03125 -1.09375 1.03125 -1.578125 1.03125 -1.984375 C 1.03125 -2.3125 1.03125 -2.828125 1.25 -3.1875 C 1.515625 -3.640625 1.96875 -3.78125 2.28125 -3.78125 C 2.796875 -3.78125 3.15625 -3.5 3.34375 -3.1875 C 3.546875 -2.8125 3.5625 -2.359375 3.5625 -1.984375 Z M 3.5625 -1.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-9">
<path style="stroke:none;" d="M 4.796875 -1.9375 C 4.796875 -3.0625 3.921875 -3.953125 2.859375 -3.953125 C 2.375 -3.953125 1.9375 -3.75 1.59375 -3.390625 L 1.59375 -3.953125 L 0.265625 -3.859375 L 0.265625 -3.578125 C 0.90625 -3.578125 0.953125 -3.515625 0.953125 -3.140625 L 0.953125 1.046875 C 0.953125 1.453125 0.859375 1.453125 0.265625 1.453125 L 0.265625 1.734375 C 0.6875 1.71875 0.859375 1.703125 1.28125 1.703125 C 1.71875 1.703125 1.828125 1.71875 2.3125 1.734375 L 2.3125 1.453125 C 1.71875 1.453125 1.625 1.453125 1.625 1.046875 L 1.625 -0.421875 C 1.84375 -0.203125 2.15625 0.09375 2.75 0.09375 C 3.8125 0.09375 4.796875 -0.765625 4.796875 -1.9375 Z M 4.015625 -1.9375 C 4.015625 -0.90625 3.421875 -0.125 2.6875 -0.125 C 2.28125 -0.125 1.953125 -0.359375 1.734375 -0.671875 C 1.625 -0.84375 1.625 -0.859375 1.625 -1.03125 L 1.625 -3 C 1.921875 -3.515625 2.40625 -3.703125 2.78125 -3.703125 C 3.484375 -3.703125 4.015625 -2.890625 4.015625 -1.9375 Z M 4.015625 -1.9375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-10">
<path style="stroke:none;" d="M 2.265625 0 L 2.265625 -0.28125 C 1.6875 -0.28125 1.640625 -0.328125 1.640625 -0.671875 L 1.640625 -3.953125 L 0.359375 -3.859375 L 0.359375 -3.578125 C 0.921875 -3.578125 1.015625 -3.515625 1.015625 -3.078125 L 1.015625 -0.6875 C 1.015625 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.71875 -0.015625 0.90625 -0.03125 1.3125 -0.03125 C 1.453125 -0.03125 1.828125 -0.03125 2.265625 0 Z M 1.765625 -5.390625 C 1.765625 -5.65625 1.546875 -5.875 1.28125 -5.875 C 1.015625 -5.875 0.796875 -5.65625 0.796875 -5.390625 C 0.796875 -5.125 1.015625 -4.90625 1.28125 -4.90625 C 1.546875 -4.90625 1.765625 -5.125 1.765625 -5.390625 Z M 1.765625 -5.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-11">
<path style="stroke:none;" d="M 3.0625 -1.109375 L 3.0625 -1.625 L 2.8125 -1.625 L 2.8125 -1.140625 C 2.8125 -0.46875 2.53125 -0.15625 2.203125 -0.15625 C 1.609375 -0.15625 1.609375 -0.9375 1.609375 -1.09375 L 1.609375 -3.578125 L 2.90625 -3.578125 L 2.90625 -3.859375 L 1.609375 -3.859375 L 1.609375 -5.5 L 1.359375 -5.5 C 1.34375 -4.75 1.03125 -3.828125 0.171875 -3.796875 L 0.171875 -3.578125 L 0.953125 -3.578125 L 0.953125 -1.109375 C 0.953125 -0.109375 1.671875 0.09375 2.140625 0.09375 C 2.75 0.09375 3.0625 -0.46875 3.0625 -1.109375 Z M 3.0625 -1.109375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-12">
<path style="stroke:none;" d="M 4.65625 -3.578125 L 4.65625 -3.859375 C 4.390625 -3.828125 3.96875 -3.828125 3.96875 -3.828125 C 3.71875 -3.828125 3.4375 -3.828125 3.1875 -3.859375 L 3.1875 -3.578125 C 3.453125 -3.5625 3.609375 -3.421875 3.609375 -3.1875 C 3.609375 -3.09375 3.59375 -3.078125 3.5625 -2.984375 L 2.625 -0.734375 L 1.609375 -3.171875 C 1.578125 -3.21875 1.5625 -3.28125 1.5625 -3.34375 C 1.5625 -3.578125 1.890625 -3.578125 2.0625 -3.578125 L 2.0625 -3.859375 C 1.671875 -3.828125 1.46875 -3.828125 1.078125 -3.828125 C 0.765625 -3.828125 0.5 -3.828125 0.171875 -3.859375 L 0.171875 -3.578125 C 0.59375 -3.578125 0.765625 -3.578125 0.90625 -3.25 L 2.203125 -0.078125 C 2.265625 0.078125 2.328125 0.09375 2.40625 0.09375 C 2.5 0.09375 2.5625 0.078125 2.625 -0.078125 L 3.84375 -3 C 4.03125 -3.453125 4.34375 -3.5625 4.65625 -3.578125 Z M 4.65625 -3.578125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-13">
<path style="stroke:none;" d="M 4.796875 -1.9375 C 4.796875 -3.046875 3.90625 -3.953125 2.828125 -3.953125 C 2.21875 -3.953125 1.8125 -3.640625 1.59375 -3.390625 L 1.59375 -6.203125 L 0.265625 -6.109375 L 0.265625 -5.828125 C 0.875 -5.828125 0.953125 -5.765625 0.953125 -5.328125 L 0.953125 0 L 1.203125 0 L 1.53125 -0.546875 C 1.8125 -0.15625 2.265625 0.09375 2.75 0.09375 C 3.8125 0.09375 4.796875 -0.765625 4.796875 -1.9375 Z M 4.015625 -1.9375 C 4.015625 -1.515625 3.96875 -1.046875 3.734375 -0.6875 C 3.546875 -0.40625 3.171875 -0.125 2.703125 -0.125 C 2.296875 -0.125 1.953125 -0.34375 1.75 -0.671875 C 1.625 -0.859375 1.625 -0.859375 1.625 -1.03125 L 1.625 -2.84375 C 1.625 -3.015625 1.625 -3.03125 1.71875 -3.171875 C 2.015625 -3.578125 2.453125 -3.734375 2.796875 -3.734375 C 3.1875 -3.734375 3.546875 -3.515625 3.765625 -3.140625 C 4 -2.75 4.015625 -2.21875 4.015625 -1.9375 Z M 4.015625 -1.9375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-14">
<path style="stroke:none;" d="M 6.546875 -5.828125 L 6.546875 -6.109375 C 6.0625 -6.09375 5.921875 -6.078125 5.5 -6.078125 C 5.0625 -6.078125 4.9375 -6.09375 4.4375 -6.109375 L 4.4375 -5.828125 C 5.359375 -5.828125 5.359375 -5.390625 5.359375 -5.15625 L 5.359375 -1.34375 L 2.109375 -6 C 2.03125 -6.109375 2.015625 -6.109375 1.84375 -6.109375 L 0.34375 -6.109375 L 0.34375 -5.828125 L 0.59375 -5.828125 C 1.015625 -5.828125 1.25 -5.765625 1.25 -5.765625 L 1.25 -0.953125 C 1.25 -0.703125 1.25 -0.28125 0.34375 -0.28125 L 0.34375 0 C 0.828125 -0.015625 0.953125 -0.03125 1.390625 -0.03125 C 1.828125 -0.03125 1.953125 -0.015625 2.4375 0 L 2.4375 -0.28125 C 1.53125 -0.28125 1.53125 -0.703125 1.53125 -0.953125 L 1.53125 -5.5625 L 5.328125 -0.109375 C 5.390625 0 5.4375 0 5.484375 0 C 5.625 0 5.625 -0.078125 5.625 -0.234375 L 5.625 -5.15625 C 5.625 -5.390625 5.625 -5.828125 6.546875 -5.828125 Z M 6.546875 -5.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-15">
<path style="stroke:none;" d="M 3.328125 -3.390625 C 3.328125 -3.6875 3.0625 -3.953125 2.65625 -3.953125 C 2.125 -3.953125 1.75 -3.578125 1.546875 -3.015625 L 1.53125 -3.015625 L 1.53125 -3.953125 L 0.265625 -3.859375 L 0.265625 -3.578125 C 0.875 -3.578125 0.953125 -3.515625 0.953125 -3.078125 L 0.953125 -0.6875 C 0.953125 -0.28125 0.859375 -0.28125 0.265625 -0.28125 L 0.265625 0 C 0.734375 -0.015625 0.859375 -0.03125 1.3125 -0.03125 L 2.453125 0 L 2.453125 -0.28125 L 2.265625 -0.28125 C 1.625 -0.28125 1.59375 -0.375 1.59375 -0.703125 L 1.59375 -2.046875 C 1.59375 -2.40625 1.6875 -3.734375 2.703125 -3.734375 L 2.703125 -3.71875 C 2.6875 -3.703125 2.546875 -3.609375 2.546875 -3.390625 C 2.546875 -3.140625 2.734375 -3 2.9375 -3 C 3.125 -3 3.328125 -3.125 3.328125 -3.390625 Z M 3.328125 -3.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-16">
<path style="stroke:none;" d="M 7.4375 0 L 7.4375 -0.28125 C 6.984375 -0.28125 6.765625 -0.28125 6.75 -0.546875 L 6.75 -2.265625 C 6.75 -3.046875 6.75 -3.296875 6.46875 -3.625 C 6.28125 -3.84375 5.921875 -3.953125 5.5 -3.953125 C 4.859375 -3.953125 4.421875 -3.578125 4.171875 -3.09375 C 4.0625 -3.625 3.703125 -3.953125 2.953125 -3.953125 C 2.25 -3.953125 1.8125 -3.484375 1.625 -3.078125 L 1.609375 -3.078125 L 1.609375 -3.953125 L 0.3125 -3.859375 L 0.3125 -3.578125 C 0.921875 -3.578125 1 -3.515625 1 -3.078125 L 1 -0.6875 C 1 -0.28125 0.90625 -0.28125 0.3125 -0.28125 L 0.3125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.765625 -0.03125 1.875 -0.015625 2.34375 0 L 2.34375 -0.28125 C 1.765625 -0.28125 1.65625 -0.28125 1.65625 -0.6875 L 1.65625 -2.3125 C 1.65625 -3.28125 2.359375 -3.734375 2.890625 -3.734375 C 3.390625 -3.734375 3.546875 -3.375 3.546875 -2.75 L 3.546875 -0.6875 C 3.546875 -0.28125 3.453125 -0.28125 2.859375 -0.28125 L 2.859375 0 C 3.28125 -0.015625 3.453125 -0.03125 3.875 -0.03125 C 4.3125 -0.03125 4.421875 -0.015625 4.890625 0 L 4.890625 -0.28125 C 4.3125 -0.28125 4.203125 -0.28125 4.203125 -0.6875 L 4.203125 -2.3125 C 4.203125 -3.28125 4.90625 -3.734375 5.4375 -3.734375 C 5.9375 -3.734375 6.09375 -3.375 6.09375 -2.75 L 6.09375 -0.6875 C 6.09375 -0.28125 6 -0.28125 5.40625 -0.28125 L 5.40625 0 C 5.828125 -0.015625 6 -0.03125 6.421875 -0.03125 C 6.859375 -0.03125 6.96875 -0.015625 7.4375 0 Z M 7.4375 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-17">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.125 3.765625 -1.1875 3.6875 -1.1875 C 3.609375 -1.1875 3.578125 -1.125 3.5625 -1.078125 C 3.265625 -0.171875 2.46875 -0.15625 2.328125 -0.15625 C 1.90625 -0.15625 1.53125 -0.390625 1.328125 -0.703125 C 1.03125 -1.140625 1.03125 -1.671875 1.03125 -2.046875 L 3.578125 -2.046875 C 3.765625 -2.046875 3.8125 -2.046875 3.8125 -2.234375 C 3.8125 -3.15625 3.3125 -4 2.171875 -4 C 1.09375 -4 0.265625 -3.078125 0.265625 -1.96875 C 0.265625 -0.796875 1.203125 0.09375 2.28125 0.09375 C 3.375 0.09375 3.8125 -0.859375 3.8125 -1.0625 Z M 3.203125 -2.265625 L 1.03125 -2.265625 C 1.125 -3.640625 1.921875 -3.78125 2.171875 -3.78125 C 2.65625 -3.78125 3.203125 -3.40625 3.203125 -2.265625 Z M 3.203125 -2.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-18">
<path style="stroke:none;" d="M 4.890625 0 L 4.890625 -0.28125 C 4.4375 -0.28125 4.203125 -0.28125 4.203125 -0.546875 L 4.203125 -2.265625 C 4.203125 -3.015625 4.203125 -3.265625 3.953125 -3.578125 C 3.75 -3.828125 3.40625 -3.953125 2.953125 -3.953125 C 2.125 -3.953125 1.75 -3.328125 1.625 -3.078125 L 1.609375 -3.078125 L 1.609375 -3.953125 L 0.3125 -3.859375 L 0.3125 -3.578125 C 0.921875 -3.578125 1 -3.515625 1 -3.078125 L 1 -0.6875 C 1 -0.28125 0.90625 -0.28125 0.3125 -0.28125 L 0.3125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.765625 -0.03125 1.875 -0.015625 2.34375 0 L 2.34375 -0.28125 C 1.765625 -0.28125 1.65625 -0.28125 1.65625 -0.6875 L 1.65625 -2.3125 C 1.65625 -3.265625 2.328125 -3.734375 2.890625 -3.734375 C 3.421875 -3.734375 3.546875 -3.28125 3.546875 -2.75 L 3.546875 -0.6875 C 3.546875 -0.28125 3.4375 -0.28125 2.84375 -0.28125 L 2.84375 0 C 3.265625 -0.015625 3.4375 -0.03125 3.875 -0.03125 C 4.296875 -0.03125 4.421875 -0.015625 4.890625 0 Z M 4.890625 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-19">
<path style="stroke:none;" d="M 6.703125 -5.828125 L 6.703125 -6.109375 C 6.390625 -6.078125 6.125 -6.078125 5.828125 -6.078125 L 4.828125 -6.109375 L 4.828125 -5.828125 C 5.265625 -5.8125 5.453125 -5.609375 5.453125 -5.375 C 5.453125 -5.3125 5.453125 -5.296875 5.421875 -5.203125 L 3.703125 -0.859375 L 1.921875 -5.390625 C 1.875 -5.5 1.875 -5.5625 1.875 -5.5625 C 1.875 -5.828125 2.328125 -5.828125 2.59375 -5.828125 L 2.59375 -6.109375 C 2.1875 -6.078125 1.734375 -6.078125 1.328125 -6.078125 L 0.171875 -6.109375 L 0.171875 -5.828125 C 0.828125 -5.828125 0.921875 -5.796875 1.046875 -5.484375 L 3.21875 0 C 3.265625 0.140625 3.296875 0.203125 3.4375 0.203125 C 3.578125 0.203125 3.609375 0.140625 3.65625 0.015625 L 5.734375 -5.234375 C 5.921875 -5.703125 6.28125 -5.828125 6.703125 -5.828125 Z M 6.703125 -5.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-20">
<path style="stroke:none;" d="M 4.828125 0 L 4.828125 -0.28125 C 4.21875 -0.28125 4.140625 -0.34375 4.140625 -0.78125 L 4.140625 -6.203125 L 2.8125 -6.109375 L 2.8125 -5.828125 C 3.421875 -5.828125 3.5 -5.765625 3.5 -5.328125 L 3.5 -3.421875 C 3.453125 -3.484375 3.0625 -3.953125 2.359375 -3.953125 C 1.265625 -3.953125 0.296875 -3.078125 0.296875 -1.921875 C 0.296875 -0.796875 1.203125 0.09375 2.265625 0.09375 C 2.90625 0.09375 3.3125 -0.28125 3.484375 -0.46875 L 3.484375 0.09375 Z M 3.484375 -1.078125 C 3.484375 -0.90625 3.484375 -0.890625 3.34375 -0.703125 C 3.0625 -0.296875 2.65625 -0.125 2.296875 -0.125 C 1.90625 -0.125 1.5625 -0.34375 1.328125 -0.71875 C 1.09375 -1.09375 1.078125 -1.625 1.078125 -1.90625 C 1.078125 -2.328125 1.125 -2.8125 1.359375 -3.15625 C 1.5625 -3.453125 1.921875 -3.734375 2.390625 -3.734375 C 2.765625 -3.734375 3.125 -3.546875 3.375 -3.203125 C 3.484375 -3.0625 3.484375 -3.046875 3.484375 -2.875 Z M 3.484375 -1.078125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-21">
<path style="stroke:none;" d="M 4.453125 -3.609375 C 4.453125 -3.765625 4.328125 -4.046875 3.984375 -4.046875 C 3.71875 -4.046875 3.3125 -3.953125 3 -3.625 C 2.765625 -3.828125 2.40625 -3.953125 2.03125 -3.953125 C 1.1875 -3.953125 0.546875 -3.34375 0.546875 -2.640625 C 0.546875 -2.1875 0.8125 -1.859375 0.953125 -1.71875 C 0.9375 -1.703125 0.6875 -1.390625 0.6875 -0.984375 C 0.6875 -0.671875 0.828125 -0.359375 1.078125 -0.203125 C 0.609375 -0.046875 0.265625 0.28125 0.265625 0.703125 C 0.265625 1.328125 1.140625 1.84375 2.28125 1.84375 C 3.390625 1.84375 4.328125 1.375 4.328125 0.671875 C 4.328125 0.3125 4.15625 -0.078125 3.828125 -0.296875 C 3.328125 -0.609375 2.8125 -0.609375 1.953125 -0.609375 C 1.78125 -0.609375 1.5 -0.609375 1.421875 -0.625 C 1.15625 -0.671875 0.984375 -0.921875 0.984375 -1.203125 C 0.984375 -1.34375 1.03125 -1.484375 1.125 -1.59375 C 1.34375 -1.453125 1.625 -1.328125 2.03125 -1.328125 C 2.875 -1.328125 3.515625 -1.9375 3.515625 -2.640625 C 3.515625 -3.078125 3.265625 -3.375 3.15625 -3.5 C 3.515625 -3.828125 3.9375 -3.828125 4.046875 -3.828125 C 4 -3.796875 3.921875 -3.75 3.921875 -3.59375 C 3.921875 -3.5 3.984375 -3.328125 4.1875 -3.328125 C 4.3125 -3.328125 4.453125 -3.421875 4.453125 -3.609375 Z M 2.828125 -2.640625 C 2.828125 -2.4375 2.828125 -1.5625 2.03125 -1.5625 C 1.234375 -1.5625 1.234375 -2.4375 1.234375 -2.640625 C 1.234375 -2.875 1.25 -3.1875 1.40625 -3.390625 C 1.53125 -3.578125 1.78125 -3.703125 2.03125 -3.703125 C 2.828125 -3.703125 2.828125 -2.84375 2.828125 -2.640625 Z M 3.828125 0.6875 C 3.828125 1.203125 3.140625 1.59375 2.296875 1.59375 C 1.421875 1.59375 0.765625 1.1875 0.765625 0.6875 C 0.765625 0.546875 0.84375 -0.046875 1.625 -0.046875 L 2.4375 -0.046875 C 2.71875 -0.046875 3.828125 -0.03125 3.828125 0.6875 Z M 3.828125 0.6875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-22">
<path style="stroke:none;" d="M 4.828125 0 L 4.828125 -0.28125 C 4.234375 -0.28125 4.140625 -0.28125 4.140625 -0.6875 L 4.140625 -3.953125 L 2.96875 -3.875 C 2.828125 -3.875 2.8125 -3.859375 2.8125 -3.859375 C 2.796875 -3.859375 2.78125 -3.859375 2.65625 -3.859375 L 1.5625 -3.859375 L 1.5625 -4.828125 C 1.5625 -5.765625 2.40625 -6.078125 2.90625 -6.078125 C 3.125 -6.078125 3.453125 -6.03125 3.6875 -5.8125 C 3.328125 -5.78125 3.28125 -5.5 3.28125 -5.390625 C 3.28125 -5.125 3.5 -4.96875 3.703125 -4.96875 C 3.9375 -4.96875 4.125 -5.140625 4.125 -5.390625 C 4.125 -5.90625 3.640625 -6.296875 2.921875 -6.296875 C 2.03125 -6.296875 0.953125 -5.8125 0.953125 -4.859375 L 0.953125 -3.859375 L 0.25 -3.859375 L 0.25 -3.578125 L 0.953125 -3.578125 L 0.953125 -0.6875 C 0.953125 -0.28125 0.859375 -0.28125 0.265625 -0.28125 L 0.265625 0 C 0.6875 -0.015625 0.859375 -0.03125 1.265625 -0.03125 C 1.6875 -0.03125 1.84375 -0.015625 2.28125 0 L 2.28125 -0.28125 C 1.6875 -0.28125 1.59375 -0.28125 1.59375 -0.6875 L 1.59375 -3.578125 L 3.03125 -3.578125 C 3.453125 -3.578125 3.5 -3.453125 3.5 -3.09375 L 3.5 -0.6875 C 3.5 -0.28125 3.40625 -0.28125 2.8125 -0.28125 L 2.8125 0 C 3.234375 -0.015625 3.40625 -0.03125 3.8125 -0.03125 C 4.234375 -0.03125 4.390625 -0.015625 4.828125 0 Z M 4.828125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-23">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.171875 3.71875 -1.171875 3.6875 -1.171875 C 3.59375 -1.171875 3.59375 -1.15625 3.546875 -1 C 3.328125 -0.390625 2.828125 -0.15625 2.375 -0.15625 C 1.8125 -0.15625 1.078125 -0.609375 1.078125 -1.9375 C 1.078125 -3.328125 1.78125 -3.75 2.328125 -3.75 C 2.4375 -3.75 2.921875 -3.734375 3.25 -3.515625 C 3.0625 -3.484375 2.890625 -3.359375 2.890625 -3.09375 C 2.890625 -2.859375 3.0625 -2.6875 3.296875 -2.6875 C 3.53125 -2.6875 3.71875 -2.828125 3.71875 -3.109375 C 3.71875 -3.671875 3.09375 -4 2.3125 -4 C 1.15625 -4 0.296875 -3.046875 0.296875 -1.9375 C 0.296875 -0.78125 1.234375 0.09375 2.28125 0.09375 C 3.53125 0.09375 3.8125 -0.984375 3.8125 -1.0625 Z M 3.8125 -1.0625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph0-24">
<path style="stroke:none;" d="M 1.75 -3.375 C 1.75 -3.640625 1.53125 -3.859375 1.265625 -3.859375 C 1 -3.859375 0.78125 -3.640625 0.78125 -3.375 C 0.78125 -3.109375 1 -2.890625 1.265625 -2.890625 C 1.53125 -2.890625 1.75 -3.109375 1.75 -3.375 Z M 1.78125 -0.03125 C 1.78125 -0.265625 1.78125 -0.96875 1.265625 -0.96875 C 0.984375 -0.96875 0.78125 -0.75 0.78125 -0.484375 C 0.78125 -0.234375 0.953125 0 1.265625 0 C 1.453125 0 1.5 -0.03125 1.5625 -0.078125 C 1.5625 0.140625 1.546875 0.84375 0.984375 1.5 C 0.90625 1.578125 0.90625 1.578125 0.90625 1.625 C 0.90625 1.65625 0.96875 1.71875 1.03125 1.71875 C 1.109375 1.71875 1.78125 1.03125 1.78125 -0.03125 Z M 1.78125 -0.03125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-1">
<path style="stroke:none;" d="M 4.59375 -1.28125 C 4.59375 -1.328125 4.5625 -1.390625 4.484375 -1.390625 C 4.375 -1.390625 4.359375 -1.34375 4.328125 -1.171875 C 4.125 -0.390625 3.9375 -0.125 3.65625 -0.125 C 3.4375 -0.125 3.375 -0.34375 3.375 -0.53125 C 3.375 -0.65625 3.421875 -0.90625 3.4375 -0.921875 L 4.6875 -5.90625 C 4.71875 -6.03125 4.71875 -6.046875 4.71875 -6.078125 C 4.71875 -6.15625 4.671875 -6.203125 4.578125 -6.203125 C 4.453125 -6.203125 3.671875 -6.125 3.5 -6.109375 C 3.40625 -6.109375 3.3125 -6.09375 3.3125 -5.9375 C 3.3125 -5.828125 3.40625 -5.828125 3.546875 -5.828125 C 3.96875 -5.828125 3.96875 -5.765625 3.96875 -5.6875 C 3.96875 -5.625 3.890625 -5.3125 3.84375 -5.125 C 3.71875 -4.640625 3.796875 -4.921875 3.671875 -4.4375 L 3.421875 -3.390625 C 3.25 -3.71875 2.96875 -3.953125 2.5625 -3.953125 C 1.53125 -3.953125 0.375 -2.71875 0.375 -1.34375 C 0.375 -0.359375 1 0.09375 1.59375 0.09375 C 2.1875 0.09375 2.65625 -0.390625 2.796875 -0.546875 C 2.890625 -0.0625 3.34375 0.09375 3.625 0.09375 C 3.890625 0.09375 4.109375 -0.015625 4.3125 -0.390625 C 4.46875 -0.6875 4.59375 -1.25 4.59375 -1.28125 Z M 3.265625 -2.828125 L 2.828125 -1.078125 C 2.796875 -0.9375 2.78125 -0.921875 2.640625 -0.734375 C 2.328125 -0.359375 1.953125 -0.125 1.625 -0.125 C 1.1875 -0.125 1.03125 -0.578125 1.03125 -0.96875 C 1.03125 -1.40625 1.296875 -2.4375 1.515625 -2.859375 C 1.796875 -3.390625 2.203125 -3.734375 2.5625 -3.734375 C 3.15625 -3.734375 3.296875 -3 3.296875 -2.953125 C 3.296875 -2.90625 3.28125 -2.859375 3.265625 -2.828125 Z M 3.265625 -2.828125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-2">
<path style="stroke:none;" d="M 5.046875 -2.078125 C 5.046875 -3.1875 4.171875 -3.421875 3.890625 -3.484375 L 3.078125 -3.6875 C 2.78125 -3.765625 2.25 -3.90625 2.25 -4.578125 C 2.25 -5.265625 2.953125 -6.046875 3.859375 -6.046875 C 4.203125 -6.046875 4.5625 -5.953125 4.8125 -5.703125 C 5.140625 -5.375 5.15625 -4.890625 5.15625 -4.65625 C 5.15625 -4.359375 5.125 -4.265625 5.125 -4.1875 C 5.125 -4.125 5.15625 -4.078125 5.25 -4.078125 C 5.34375 -4.078125 5.34375 -4.09375 5.390625 -4.265625 L 5.84375 -6.0625 C 5.875 -6.15625 5.875 -6.171875 5.875 -6.203125 C 5.875 -6.203125 5.859375 -6.296875 5.765625 -6.296875 C 5.71875 -6.296875 5.71875 -6.296875 5.609375 -6.171875 C 5.484375 -6.03125 5.59375 -6.15625 5.171875 -5.671875 C 4.84375 -6.171875 4.328125 -6.296875 3.859375 -6.296875 C 2.703125 -6.296875 1.609375 -5.265625 1.609375 -4.203125 C 1.609375 -3.828125 1.71875 -3.53125 1.953125 -3.28125 C 2.21875 -3.015625 2.4375 -2.953125 3.078125 -2.78125 L 3.828125 -2.59375 C 4.125 -2.5 4.421875 -2.21875 4.421875 -1.71875 C 4.421875 -0.921875 3.65625 -0.078125 2.765625 -0.078125 C 2.234375 -0.078125 1.171875 -0.234375 1.171875 -1.390625 C 1.171875 -1.46875 1.171875 -1.59375 1.21875 -1.875 C 1.25 -1.90625 1.25 -1.9375 1.25 -1.9375 C 1.25 -1.96875 1.21875 -2.03125 1.125 -2.03125 C 1.015625 -2.03125 1 -1.984375 0.96875 -1.828125 L 0.484375 0.09375 C 0.484375 0.15625 0.53125 0.203125 0.59375 0.203125 C 0.640625 0.203125 0.65625 0.1875 0.765625 0.0625 C 0.828125 0 1.078125 -0.328125 1.1875 -0.4375 C 1.65625 0.15625 2.46875 0.203125 2.75 0.203125 C 3.984375 0.203125 5.046875 -0.953125 5.046875 -2.078125 Z M 5.046875 -2.078125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-3">
<path style="stroke:none;" d="M 5.703125 -5.5 C 5.703125 -5.609375 5.609375 -5.65625 5.5625 -5.6875 C 5.4375 -5.78125 5.28125 -5.90625 5.1875 -6.1875 C 5.140625 -6.296875 5.109375 -6.40625 4.984375 -6.40625 C 4.890625 -6.40625 4.796875 -6.34375 4.796875 -6.203125 C 4.796875 -6.046875 4.96875 -5.75 5 -5.6875 L 1.96875 -5.6875 C 1.8125 -5.6875 1.640625 -5.6875 1.640625 -5.5 C 1.640625 -5.3125 1.8125 -5.3125 1.96875 -5.3125 L 4.84375 -5.3125 C 4.828125 -5.296875 4.4375 -4.9375 4.4375 -4.796875 C 4.4375 -4.6875 4.515625 -4.609375 4.625 -4.609375 C 4.71875 -4.609375 4.765625 -4.671875 4.796875 -4.703125 C 4.890625 -4.828125 5.109375 -5.078125 5.5 -5.296875 C 5.609375 -5.328125 5.703125 -5.375 5.703125 -5.5 Z M 5.703125 -5.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-4">
<path style="stroke:none;" d="M 5.75 -5.984375 C 5.75 -5.984375 5.75 -6.109375 5.609375 -6.109375 L 5.125 -6.09375 C 5.0625 -6.078125 4.78125 -6.078125 4.609375 -6.078125 L 3.9375 -6.09375 C 3.734375 -6.09375 3.515625 -6.109375 3.3125 -6.109375 C 3.234375 -6.109375 3.125 -6.109375 3.125 -5.9375 C 3.125 -5.828125 3.203125 -5.828125 3.421875 -5.828125 C 3.46875 -5.828125 3.703125 -5.828125 3.9375 -5.796875 C 4.140625 -5.78125 4.203125 -5.765625 4.203125 -5.625 C 4.203125 -5.5625 4.1875 -5.515625 4.1875 -5.46875 L 3.140625 -1.3125 C 2.9375 -0.5 2.328125 -0.03125 1.859375 -0.03125 C 1.5625 -0.03125 1.125 -0.15625 0.984375 -0.546875 C 1.015625 -0.546875 1.03125 -0.546875 1.09375 -0.546875 C 1.453125 -0.546875 1.671875 -0.859375 1.671875 -1.125 C 1.671875 -1.34375 1.5 -1.5 1.265625 -1.5 C 1.078125 -1.5 0.671875 -1.34375 0.671875 -0.78125 C 0.671875 -0.203125 1.1875 0.203125 1.875 0.203125 C 2.734375 0.203125 3.671875 -0.390625 3.890625 -1.28125 L 4.9375 -5.453125 C 5 -5.75 5.015625 -5.828125 5.515625 -5.828125 C 5.625 -5.828125 5.75 -5.828125 5.75 -5.984375 Z M 5.75 -5.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-5">
<path style="stroke:none;" d="M 5.265625 -1.28125 C 5.265625 -1.328125 5.25 -1.390625 5.15625 -1.390625 C 5.0625 -1.390625 5.046875 -1.34375 5.015625 -1.21875 C 4.796875 -0.46875 4.421875 -0.125 4.09375 -0.125 C 4.03125 -0.125 3.875 -0.125 3.875 -0.40625 C 3.875 -0.640625 3.953125 -0.859375 4.03125 -1.0625 C 4.203125 -1.515625 4.5625 -2.46875 4.5625 -2.96875 C 4.5625 -3.765625 3.984375 -3.953125 3.5 -3.953125 C 2.671875 -3.953125 2.234375 -3.359375 2.09375 -3.171875 C 2.03125 -3.65625 1.671875 -3.953125 1.21875 -3.953125 C 0.84375 -3.953125 0.65625 -3.671875 0.53125 -3.4375 C 0.390625 -3.125 0.265625 -2.609375 0.265625 -2.578125 C 0.265625 -2.5 0.328125 -2.46875 0.390625 -2.46875 C 0.484375 -2.46875 0.5 -2.515625 0.546875 -2.6875 C 0.71875 -3.390625 0.90625 -3.734375 1.203125 -3.734375 C 1.46875 -3.734375 1.46875 -3.4375 1.46875 -3.3125 C 1.46875 -3.125 1.40625 -2.84375 1.34375 -2.609375 C 1.28125 -2.375 1.203125 -2 1.15625 -1.890625 L 0.796875 -0.421875 C 0.734375 -0.203125 0.734375 -0.1875 0.734375 -0.15625 C 0.734375 -0.046875 0.828125 0.09375 1.015625 0.09375 C 1.140625 0.09375 1.28125 0.015625 1.34375 -0.09375 C 1.375 -0.140625 1.4375 -0.421875 1.484375 -0.609375 L 1.6875 -1.40625 C 1.78125 -1.828125 1.953125 -2.46875 1.96875 -2.546875 C 1.984375 -2.59375 2.203125 -3.03125 2.53125 -3.34375 C 2.78125 -3.578125 3.125 -3.734375 3.484375 -3.734375 C 3.953125 -3.734375 3.953125 -3.25 3.953125 -3.09375 C 3.953125 -2.5625 3.546875 -1.46875 3.4375 -1.1875 C 3.328125 -0.90625 3.296875 -0.828125 3.296875 -0.65625 C 3.296875 -0.171875 3.671875 0.09375 4.0625 0.09375 C 4.921875 0.09375 5.265625 -1.1875 5.265625 -1.28125 Z M 5.265625 -1.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-6">
<path style="stroke:none;" d="M 4.171875 -4.421875 C 4.171875 -5.34375 3.859375 -6.296875 3.03125 -6.296875 C 1.734375 -6.296875 0.359375 -3.75 0.359375 -1.765625 C 0.359375 -1.125 0.5625 0.09375 1.5 0.09375 C 2.796875 0.09375 4.171875 -2.421875 4.171875 -4.421875 Z M 3.265625 -3.25 L 1.34375 -3.25 C 1.515625 -3.953125 1.703125 -4.609375 2.078125 -5.21875 C 2.28125 -5.578125 2.625 -6.078125 3.03125 -6.078125 C 3.515625 -6.078125 3.546875 -5.3125 3.546875 -4.96875 C 3.546875 -4.4375 3.40625 -3.8125 3.265625 -3.25 Z M 3.1875 -2.953125 C 3.046875 -2.390625 2.875 -1.71875 2.515625 -1.09375 C 2.28125 -0.671875 1.9375 -0.125 1.5 -0.125 C 1.125 -0.125 0.984375 -0.59375 0.984375 -1.25 C 0.984375 -1.8125 1.140625 -2.390625 1.265625 -2.953125 Z M 3.1875 -2.953125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-7">
<path style="stroke:none;" d="M 6.359375 -2.25 C 6.359375 -2.359375 6.265625 -2.40625 6.1875 -2.453125 L 1.140625 -4.875 C 1.015625 -4.9375 0.953125 -4.9375 0.953125 -4.9375 C 0.84375 -4.9375 0.765625 -4.828125 0.765625 -4.75 C 0.765625 -4.640625 0.828125 -4.59375 0.953125 -4.53125 L 5.734375 -2.25 L 0.953125 0.046875 C 0.828125 0.109375 0.765625 0.15625 0.765625 0.265625 C 0.765625 0.328125 0.828125 0.453125 0.96875 0.453125 C 0.96875 0.453125 1.015625 0.453125 1.125 0.40625 L 6.1875 -2.03125 C 6.28125 -2.078125 6.359375 -2.125 6.359375 -2.25 Z M 6.359375 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-8">
<path style="stroke:none;" d="M 6.359375 0.265625 C 6.359375 0.15625 6.296875 0.109375 6.203125 0.078125 L 1.40625 -2.25 L 6.1875 -4.53125 C 6.265625 -4.5625 6.359375 -4.625 6.359375 -4.734375 C 6.359375 -4.828125 6.296875 -4.9375 6.171875 -4.9375 C 6.171875 -4.9375 6.109375 -4.9375 6 -4.875 L 0.953125 -2.453125 C 0.859375 -2.40625 0.765625 -2.359375 0.765625 -2.25 C 0.765625 -2.125 0.84375 -2.078125 0.953125 -2.03125 L 5.984375 0.390625 C 6.109375 0.453125 6.171875 0.453125 6.171875 0.453125 C 6.3125 0.453125 6.359375 0.328125 6.359375 0.265625 Z M 6.359375 0.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph1-9">
<path style="stroke:none;" d="M 3.03125 -0.15625 C 3.03125 -0.28125 2.953125 -0.28125 2.765625 -0.28125 C 2.4375 -0.28125 2.171875 -0.28125 2.171875 -0.4375 C 2.171875 -0.5 2.171875 -0.515625 2.203125 -0.640625 L 3.40625 -5.40625 C 3.5 -5.75 3.515625 -5.828125 4.234375 -5.828125 C 4.40625 -5.828125 4.5 -5.828125 4.5 -5.984375 C 4.5 -6.09375 4.40625 -6.109375 4.359375 -6.109375 C 4.171875 -6.109375 3.96875 -6.09375 3.796875 -6.09375 L 3.1875 -6.078125 L 2.5625 -6.09375 C 2.375 -6.09375 2.15625 -6.109375 1.984375 -6.109375 C 1.9375 -6.109375 1.8125 -6.109375 1.8125 -5.9375 C 1.8125 -5.828125 1.890625 -5.828125 2.078125 -5.828125 C 2.265625 -5.828125 2.46875 -5.828125 2.65625 -5.75 C 2.65625 -5.71875 2.65625 -5.671875 2.65625 -5.671875 C 2.65625 -5.640625 2.65625 -5.546875 2.640625 -5.5 L 1.4375 -0.671875 C 1.34375 -0.359375 1.328125 -0.28125 0.640625 -0.28125 C 0.453125 -0.28125 0.34375 -0.28125 0.34375 -0.109375 C 0.34375 -0.078125 0.359375 0 0.484375 0 C 0.65625 0 0.859375 -0.015625 1.046875 -0.015625 L 1.65625 -0.03125 L 2.28125 -0.015625 C 2.46875 -0.015625 2.6875 0 2.859375 0 C 2.921875 0 3.03125 0 3.03125 -0.15625 Z M 3.03125 -0.15625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph2-1">
<path style="stroke:none;" d="M 3.65625 -4.734375 L 2.296875 -6.171875 L 0.9375 -4.734375 L 1.046875 -4.609375 L 2.296875 -5.5625 L 3.546875 -4.609375 Z M 3.65625 -4.734375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph2-2">
<path style="stroke:none;" d="M 4.234375 -2.859375 C 4.234375 -3.453125 4.203125 -4.234375 3.890625 -4.890625 C 3.5 -5.734375 2.8125 -5.953125 2.296875 -5.953125 C 1.765625 -5.953125 1.078125 -5.734375 0.6875 -4.875 C 0.40625 -4.265625 0.359375 -3.546875 0.359375 -2.859375 C 0.359375 -2.28125 0.375 -1.40625 0.765625 -0.703125 C 1.1875 0.046875 1.875 0.203125 2.28125 0.203125 C 2.875 0.203125 3.53125 -0.046875 3.90625 -0.875 C 4.171875 -1.46875 4.234375 -2.140625 4.234375 -2.859375 Z M 3.453125 -2.96875 C 3.453125 -2.40625 3.453125 -1.65625 3.375 -1.140625 C 3.1875 -0.109375 2.515625 -0.03125 2.296875 -0.03125 C 2.03125 -0.03125 1.390625 -0.15625 1.21875 -1.15625 C 1.125 -1.6875 1.125 -2.453125 1.125 -2.96875 C 1.125 -3.578125 1.125 -4.28125 1.234375 -4.765625 C 1.40625 -5.5625 1.984375 -5.734375 2.28125 -5.734375 C 2.625 -5.734375 3.1875 -5.546875 3.359375 -4.71875 C 3.453125 -4.234375 3.453125 -3.53125 3.453125 -2.96875 Z M 3.453125 -2.96875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph2-3">
<path style="stroke:none;" d="M 3.046875 2.125 C 3.046875 2.078125 3.015625 2.0625 2.96875 2 C 1.8125 0.9375 1.46875 -0.671875 1.46875 -2.234375 C 1.46875 -3.625 1.734375 -5.296875 3 -6.5 C 3.03125 -6.53125 3.046875 -6.5625 3.046875 -6.609375 C 3.046875 -6.671875 3 -6.703125 2.9375 -6.703125 C 2.828125 -6.703125 2.03125 -6.0625 1.546875 -5.078125 C 1.125 -4.234375 0.90625 -3.3125 0.90625 -2.25 C 0.90625 -1.59375 0.984375 -0.578125 1.46875 0.46875 C 2 1.578125 2.828125 2.21875 2.9375 2.21875 C 3 2.21875 3.046875 2.1875 3.046875 2.125 Z M 3.046875 2.125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph2-4">
<path style="stroke:none;" d="M 2.65625 -2.25 C 2.65625 -2.96875 2.5625 -3.953125 2.09375 -4.953125 C 1.5625 -6.046875 0.734375 -6.703125 0.625 -6.703125 C 0.53125 -6.703125 0.515625 -6.625 0.515625 -6.609375 C 0.515625 -6.5625 0.53125 -6.53125 0.59375 -6.46875 C 1.125 -6 2.09375 -4.796875 2.09375 -2.25 C 2.09375 -0.96875 1.875 0.8125 0.578125 2.015625 C 0.546875 2.046875 0.515625 2.078125 0.515625 2.125 C 0.515625 2.15625 0.53125 2.21875 0.625 2.21875 C 0.734375 2.21875 1.53125 1.578125 2.015625 0.609375 C 2.453125 -0.25 2.65625 -1.171875 2.65625 -2.25 Z M 2.65625 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph2-5">
<path style="stroke:none;" d="M 6.625 -3.140625 C 6.625 -3.34375 6.421875 -3.34375 6.296875 -3.34375 L 0.84375 -3.34375 C 0.703125 -3.34375 0.515625 -3.34375 0.515625 -3.140625 C 0.515625 -2.953125 0.6875 -2.953125 0.796875 -2.953125 L 6.328125 -2.953125 C 6.453125 -2.953125 6.625 -2.953125 6.625 -3.140625 Z M 6.625 -1.328125 C 6.625 -1.515625 6.453125 -1.515625 6.328125 -1.515625 L 0.796875 -1.515625 C 0.6875 -1.515625 0.515625 -1.515625 0.515625 -1.328125 C 0.515625 -1.140625 0.703125 -1.140625 0.84375 -1.140625 L 6.296875 -1.140625 C 6.421875 -1.140625 6.625 -1.140625 6.625 -1.328125 Z M 6.625 -1.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph3-1">
<path style="stroke:none;" d="M 1.75 -2.25 C 1.75 -2.5 1.53125 -2.71875 1.265625 -2.71875 C 1 -2.71875 0.78125 -2.5 0.78125 -2.25 C 0.78125 -1.984375 1 -1.765625 1.265625 -1.765625 C 1.53125 -1.765625 1.75 -1.984375 1.75 -2.25 Z M 1.75 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_superficie-glyph3-2">
<path style="stroke:none;" d="M 6.359375 -2.234375 C 6.359375 -2.4375 6.1875 -2.4375 6.046875 -2.4375 L 1.078125 -2.4375 C 0.953125 -2.4375 0.765625 -2.4375 0.765625 -2.25 C 0.765625 -2.046875 0.9375 -2.046875 1.078125 -2.046875 L 6.046875 -2.046875 C 6.171875 -2.046875 6.359375 -2.046875 6.359375 -2.234375 Z M 6.359375 -2.234375 "/>
</symbol>
</g>
</defs>
<g id="fisica2_lez12a_add_superficie-surface1">
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-1" x="19.598548" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-2" x="23.17158" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-3" x="27.765477" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-4" x="34.404682" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-5" x="40.401153" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-6" x="42.953319" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-7" x="48.057649" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-7" x="51.681634" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-8" x="55.30562" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-9" x="62.956752" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-8" x="68.320322" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-7" x="72.914219" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="76.538204" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-11" x="79.09037" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="82.663401" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-12" x="85.215566" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-8" x="89.804994" y="14.040526"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -21.261384 36.849308 L 21.26175 -36.850144 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-1" x="7.283904" y="38.931021"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-2" x="12.044073" y="38.931021"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.00177576 -0.000417732 L 57.602124 -0.000417732 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.531985 -0.000417732 C 3.975615 0.136716 1.53072 0.920336 -0.00125646 1.770563 L -0.00125646 -1.771399 C 1.53072 -0.921171 3.975615 -0.137551 4.531985 -0.000417732 Z M 4.531985 -0.000417732 " transform="matrix(0.996976,0,0,-0.996976,100.298128,72.56599)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-3" x="105.002477" y="82.670338"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-4" x="103.499038" y="84.930482"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.00177576 -0.000417732 L 43.69287 25.255652 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.534964 -0.00104036 C 3.976263 0.136354 1.529273 0.92172 -0.00078951 1.774464 L -0.00138654 -1.773317 C 1.528397 -0.919721 3.975381 -0.139203 4.534964 -0.00104036 Z M 4.534964 -0.00104036 " transform="matrix(0.863132,-0.498917,-0.498917,-0.863132,86.42896,47.386671)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-1" x="89.463614" y="40.597964"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-5" x="88.989054" y="40.597964"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 18.425046 -0.000417732 C 18.425046 3.232014 17.574819 6.413511 15.956644 9.211034 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-6" x="66.873142" y="68.605005"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-3" x="42.449231" y="129.515235"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-4" x="40.944795" y="131.775379"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph3-1" x="48.900661" y="131.775379"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-1" x="53.968288" y="131.775379"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-5" x="53.494725" y="131.775379"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-7" x="61.584776" y="131.775379"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-2" x="71.286753" y="131.775379"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-1" x="177.758772" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-13" x="181.331804" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-3" x="186.436134" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-14" x="193.0664" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-8" x="199.955906" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-15" x="204.549803" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-16" x="208.143395" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-2" x="215.798997" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-5" x="220.392894" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-17" x="222.945059" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="230.098274" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-18" x="232.650439" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-12" x="237.49553" y="14.040526"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-17" x="242.093897" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-15" x="246.180937" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-11" x="249.774529" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="253.34756" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-11" x="255.899726" y="14.040526"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-2" x="259.472757" y="14.040526"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 148.819399 36.849308 L 191.342533 -36.850144 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-1" x="176.847537" y="38.931021"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-2" x="181.607705" y="38.931021"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 170.079007 -0.000417732 L 227.682906 -0.000417732 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.535765 -0.000417732 C 3.975477 0.136716 1.530583 0.920336 -0.00139396 1.770563 L -0.00139396 -1.771399 C 1.530583 -0.921171 3.975477 -0.137551 4.535765 -0.000417732 Z M 4.535765 -0.000417732 " transform="matrix(0.996976,0,0,-0.996976,269.864671,72.56599)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-3" x="274.567106" y="82.670338"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-4" x="273.063667" y="84.930482"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 170.079007 -0.000417732 L 126.388279 -25.256487 " transform="matrix(0.996976,0,0,-0.996976,42.868958,72.56599)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.535167 -0.000192368 C 3.976465 0.137202 1.529476 0.922568 0.000844365 1.769959 L -0.00118409 -1.772469 C 1.528599 -0.918873 3.975584 -0.138355 4.535167 -0.000192368 Z M 4.535167 -0.000192368 " transform="matrix(-0.863132,0.498917,0.498917,0.863132,168.87548,97.745309)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph3-2" x="157.19914" y="110.693331"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-1" x="164.819025" y="110.693331"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-5" x="164.344464" y="110.693331"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-3" x="197.802969" y="128.625933"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-4" x="196.298532" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph3-1" x="204.254398" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-3" x="208.848462" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph3-2" x="212.420626" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-1" x="220.040512" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-5" x="219.566948" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-4" x="225.109136" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-8" x="231.233558" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-2" x="240.93114" y="130.88508"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-19" x="35.115478" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="42.004983" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-7" x="44.557148" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-11" x="48.181134" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-2" x="51.754165" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-20" x="59.414237" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="64.518567" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-11" x="70.127967" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-2" x="73.700998" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-21" x="78.294896" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-5" x="82.888793" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="85.440959" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-8" x="87.993124" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-20" x="95.653195" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-17" x="100.757526" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-5" x="104.844566" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-5" x="107.396731" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-2" x="109.948897" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-7" x="117.600029" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-6" x="121.224014" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-9" x="126.328345" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-17" x="131.691914" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-15" x="135.778954" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-22" x="139.372546" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-23" x="144.476877" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-10" x="148.560341" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-17" x="151.112506" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph0-24" x="155.199546" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-1" x="160.811183" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-9" x="165.571351" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-5" x="172.839694" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-3" x="182.533453" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-3" x="187.613877" y="148.407925"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-4" x="186.110438" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph3-1" x="194.066304" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-1" x="199.133931" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-5" x="198.659371" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph2-4" x="204.201559" y="150.668069"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-1" x="209.306074" y="150.668069"/>
  <use xlink:href="#fisica2_lez12a_add_superficie-glyph1-2" x="214.066242" y="150.668069"/>
</g>
</g>
</svg><figcaption><strong>Superficie orientata e segno del flusso</strong><span class="figure-explanation">La normale orienta la superficie. A parità di $\\vec J$, invertire $\\hat n$ cambia il segno di $dI=\\vec J\\cdot\\hat n\\,dS$, senza cambiare il moto fisico delle cariche.</span></figcaption></figure><!-- END L12 ADD superficie --><p>Con questa definizione, la carica infinitesima diventa $dQ = (\\vec{J} \\cdot \\hat{n}) \\, dt \\, dS$ e l'intensità di corrente $I$ attraverso una superficie finita $\\Sigma$ è data dal <strong>flusso</strong> del vettore densità di corrente attraverso tale superficie:</p>
        <p>$$I = \\frac{dQ}{dt} = \\int_{\\Sigma} \\vec{J} \\cdot \\hat{n} \\, dS = \\int_{\\Sigma} \\vec{J} \\cdot d\\vec{\\Sigma}$$</p>
        <p><strong>Riassumendo i legami fra le grandezze introdotte:</strong></p>
        <p>$$\\vec{J} = \\rho_{\\text{mob}} \\, \\vec{v}_d, \\qquad \\frac{dI}{dS} = \\vec{J} \\cdot \\hat{n}, \\qquad I = \\int_{\\Sigma} \\vec{J} \\cdot \\hat{n} \\, dS$$</p>
        <p>La prima relazione è microscopica, la seconda locale, la terza globale: insieme collegano il moto dei singoli portatori alla corrente misurabile ai capi di un conduttore.</p>`
      },

      {
        id: "s12-esempio-flusso-J",
        type: "section",
        title: "Esempio — Corrente come flusso di $\\vec{J}$ uniforme",
        icon: "📐",
        content: `<p>Consideriamo un filo conduttore rettilineo in cui la densità di corrente è uniforme, $\\vec{J} = J \\hat{x}$ con $J = 2{,}0 \\times 10^{6}$ A/m$^2$ diretta lungo l'asse del filo, e sia $S = 1{,}0 \\times 10^{-6}$ m$^2$ (cioè $1$ mm$^2$) l'area della sezione retta.</p>`,
        subsections: [
          {
            subtitle: "(a) Superficie perpendicolare al flusso",
            content: `<p>Se tagliamo il filo con una sezione piana perpendicolare all'asse e scegliamo la normale $\\hat{n} = \\hat{x}$ concorde con $\\vec{J}$, allora $\\vec{J} \\cdot \\hat{n} = J$ è costante su tutta la superficie e può essere portato fuori dall'integrale:</p>
            <p>$$I = \\int_{\\Sigma} \\vec{J} \\cdot \\hat{n} \\, dS = J \\int_{\\Sigma} dS = J S$$</p>
            <p>Numericamente:</p>
            <p>$$I = (2{,}0 \\times 10^{6}\\ \\text{A/m}^2)(1{,}0 \\times 10^{-6}\\ \\text{m}^2) = 2{,}0\\ \\text{A}$$</p>`
          },
          {
            subtitle: "(b) Superficie inclinata",
            content: `<p>Tagliamo ora lo stesso filo con un piano obliquo e scegliamo la normale $\\hat{n}$ <strong>concorde</strong> con la corrente, cioè con un angolo $\\theta$ tra $\\hat{n}$ e $\\vec{J}$ tale che $0 \\le \\theta \\lt \\pi/2$.</p>
            <p><strong>Perché $S' = S/\\cos\\theta$ — la proiezione geometrica.</strong> La sezione obliqua $S'$ e la sezione retta $S$ intercettano lo stesso "tubo" di filo. Proiettando la superficie obliqua sul piano perpendicolare all'asse si ottiene proprio la sezione retta, e la proiezione di un'area piana su un piano inclinato di $\\theta$ rispetto ad essa riduce l'area del fattore $\\cos\\theta$. Dunque $S = S' \\cos\\theta$, cioè la superficie obliqua è <strong>più grande</strong> della sezione retta:</p>
            <p>$$S' = \\frac{S}{\\cos\\theta}, \\qquad 0 \\le \\theta \\lt \\frac{\\pi}{2}$$</p>
            <!-- L12 ADD obliqua --><figure class="figura" data-id="fisica2_lez12a_add_obliqua"><?xml version="1.0" encoding="UTF-8"?>
<svg id="fisica2_lez12a_add_obliqua" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="222.668pt" height="158.199pt" viewBox="0 0 222.668 158.199" version="1.2"><style>#fisica2_lez12a_add_obliqua [fill="rgb(0%,0%,0%)"],#fisica2_lez12a_add_obliqua [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#fisica2_lez12a_add_obliqua [stroke="rgb(0%,0%,0%)"],#fisica2_lez12a_add_obliqua [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#fisica2_lez12a_add_obliqua [fill="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_obliqua [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_obliqua [fill="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_obliqua [style*="fill:rgb(8.625793%,52.549744%,37.644958%)"]{fill:#168660!important}#fisica2_lez12a_add_obliqua [stroke="rgb(8.625793%,52.549744%,37.644958%)"],#fisica2_lez12a_add_obliqua [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#73e8c0!important}[data-mode="light"] #fisica2_lez12a_add_obliqua [stroke="rgb(8.625793%,52.549744%,37.644958%)"],[data-mode="light"] #fisica2_lez12a_add_obliqua [style*="stroke:rgb(8.625793%,52.549744%,37.644958%)"]{stroke:#168660!important}</style>
<defs>
<g>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-1">
<path style="stroke:none;" d="M 5.046875 -2.078125 C 5.046875 -3.1875 4.171875 -3.40625 3.890625 -3.46875 L 3.078125 -3.6875 C 2.78125 -3.75 2.234375 -3.90625 2.234375 -4.578125 C 2.234375 -5.25 2.953125 -6.046875 3.84375 -6.046875 C 4.203125 -6.046875 4.546875 -5.9375 4.796875 -5.6875 C 5.140625 -5.359375 5.140625 -4.875 5.140625 -4.640625 C 5.140625 -4.359375 5.109375 -4.25 5.109375 -4.1875 C 5.109375 -4.109375 5.140625 -4.0625 5.234375 -4.0625 C 5.328125 -4.0625 5.328125 -4.09375 5.375 -4.25 L 5.828125 -6.046875 C 5.859375 -6.140625 5.859375 -6.171875 5.859375 -6.1875 C 5.859375 -6.1875 5.859375 -6.296875 5.75 -6.296875 C 5.703125 -6.296875 5.703125 -6.28125 5.59375 -6.15625 C 5.46875 -6.015625 5.578125 -6.140625 5.171875 -5.65625 C 4.828125 -6.15625 4.3125 -6.296875 3.84375 -6.296875 C 2.6875 -6.296875 1.609375 -5.265625 1.609375 -4.1875 C 1.609375 -3.828125 1.71875 -3.53125 1.953125 -3.28125 C 2.21875 -3 2.4375 -2.953125 3.078125 -2.78125 L 3.828125 -2.59375 C 4.109375 -2.5 4.40625 -2.21875 4.40625 -1.71875 C 4.40625 -0.921875 3.65625 -0.078125 2.75 -0.078125 C 2.234375 -0.078125 1.171875 -0.234375 1.171875 -1.390625 C 1.171875 -1.46875 1.171875 -1.59375 1.21875 -1.859375 C 1.234375 -1.90625 1.234375 -1.921875 1.234375 -1.921875 C 1.234375 -1.96875 1.21875 -2.03125 1.109375 -2.03125 C 1.015625 -2.03125 1 -1.984375 0.96875 -1.828125 L 0.484375 0.09375 C 0.484375 0.15625 0.53125 0.203125 0.59375 0.203125 C 0.640625 0.203125 0.65625 0.1875 0.765625 0.0625 C 0.828125 0 1.078125 -0.328125 1.1875 -0.4375 C 1.65625 0.15625 2.46875 0.203125 2.734375 0.203125 C 3.96875 0.203125 5.046875 -0.953125 5.046875 -2.078125 Z M 5.046875 -2.078125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-2">
<path style="stroke:none;" d="M 5.265625 -1.28125 C 5.265625 -1.328125 5.234375 -1.390625 5.140625 -1.390625 C 5.046875 -1.390625 5.046875 -1.34375 5 -1.21875 C 4.78125 -0.46875 4.40625 -0.125 4.09375 -0.125 C 4.03125 -0.125 3.859375 -0.125 3.859375 -0.40625 C 3.859375 -0.640625 3.953125 -0.859375 4.03125 -1.0625 C 4.203125 -1.515625 4.5625 -2.46875 4.5625 -2.96875 C 4.5625 -3.75 3.96875 -3.9375 3.5 -3.9375 C 2.671875 -3.9375 2.234375 -3.359375 2.09375 -3.171875 C 2.03125 -3.65625 1.671875 -3.9375 1.21875 -3.9375 C 0.84375 -3.9375 0.65625 -3.671875 0.53125 -3.421875 C 0.390625 -3.109375 0.265625 -2.609375 0.265625 -2.5625 C 0.265625 -2.484375 0.328125 -2.46875 0.390625 -2.46875 C 0.484375 -2.46875 0.5 -2.5 0.546875 -2.6875 C 0.71875 -3.390625 0.90625 -3.71875 1.203125 -3.71875 C 1.46875 -3.71875 1.46875 -3.4375 1.46875 -3.296875 C 1.46875 -3.109375 1.40625 -2.84375 1.34375 -2.609375 C 1.28125 -2.375 1.203125 -1.984375 1.15625 -1.875 L 0.796875 -0.421875 C 0.734375 -0.203125 0.734375 -0.1875 0.734375 -0.15625 C 0.734375 -0.046875 0.828125 0.09375 1.015625 0.09375 C 1.140625 0.09375 1.28125 0.015625 1.34375 -0.09375 C 1.359375 -0.140625 1.4375 -0.421875 1.484375 -0.609375 L 1.6875 -1.40625 C 1.78125 -1.8125 1.953125 -2.46875 1.96875 -2.546875 C 1.984375 -2.59375 2.203125 -3.03125 2.53125 -3.34375 C 2.78125 -3.578125 3.125 -3.71875 3.46875 -3.71875 C 3.953125 -3.71875 3.953125 -3.25 3.953125 -3.09375 C 3.953125 -2.546875 3.53125 -1.46875 3.4375 -1.1875 C 3.328125 -0.90625 3.296875 -0.828125 3.296875 -0.65625 C 3.296875 -0.171875 3.65625 0.09375 4.0625 0.09375 C 4.921875 0.09375 5.265625 -1.171875 5.265625 -1.28125 Z M 5.265625 -1.28125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-3">
<path style="stroke:none;" d="M 5.6875 -5.5 C 5.6875 -5.59375 5.609375 -5.640625 5.5625 -5.6875 C 5.421875 -5.765625 5.265625 -5.890625 5.171875 -6.171875 C 5.140625 -6.28125 5.109375 -6.390625 4.96875 -6.390625 C 4.890625 -6.390625 4.78125 -6.328125 4.78125 -6.1875 C 4.78125 -6.03125 4.953125 -5.734375 5 -5.6875 L 1.96875 -5.6875 C 1.8125 -5.6875 1.625 -5.6875 1.625 -5.5 C 1.625 -5.296875 1.796875 -5.296875 1.96875 -5.296875 L 4.828125 -5.296875 C 4.8125 -5.28125 4.421875 -4.9375 4.421875 -4.796875 C 4.421875 -4.6875 4.515625 -4.59375 4.625 -4.59375 C 4.703125 -4.59375 4.75 -4.65625 4.796875 -4.703125 C 4.890625 -4.828125 5.09375 -5.078125 5.5 -5.28125 C 5.609375 -5.328125 5.6875 -5.375 5.6875 -5.5 Z M 5.6875 -5.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-4">
<path style="stroke:none;" d="M 5.734375 -5.984375 C 5.734375 -5.984375 5.734375 -6.09375 5.609375 -6.09375 L 5.125 -6.078125 C 5.0625 -6.0625 4.765625 -6.0625 4.59375 -6.0625 L 3.9375 -6.078125 C 3.71875 -6.078125 3.5 -6.09375 3.296875 -6.09375 C 3.234375 -6.09375 3.109375 -6.09375 3.109375 -5.9375 C 3.109375 -5.8125 3.203125 -5.8125 3.421875 -5.8125 C 3.46875 -5.8125 3.703125 -5.8125 3.921875 -5.796875 C 4.140625 -5.765625 4.203125 -5.75 4.203125 -5.625 C 4.203125 -5.5625 4.1875 -5.5 4.171875 -5.453125 L 3.125 -1.3125 C 2.921875 -0.5 2.3125 -0.03125 1.859375 -0.03125 C 1.5625 -0.03125 1.125 -0.15625 0.984375 -0.546875 C 1.015625 -0.546875 1.03125 -0.546875 1.09375 -0.546875 C 1.453125 -0.546875 1.671875 -0.859375 1.671875 -1.109375 C 1.671875 -1.34375 1.484375 -1.484375 1.265625 -1.484375 C 1.078125 -1.484375 0.671875 -1.34375 0.671875 -0.78125 C 0.671875 -0.203125 1.171875 0.203125 1.875 0.203125 C 2.734375 0.203125 3.65625 -0.390625 3.875 -1.28125 L 4.921875 -5.4375 C 5 -5.75 5.015625 -5.8125 5.515625 -5.8125 C 5.625 -5.8125 5.734375 -5.8125 5.734375 -5.984375 Z M 5.734375 -5.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-5">
<path style="stroke:none;" d="M 4.15625 -4.421875 C 4.15625 -5.328125 3.859375 -6.296875 3.03125 -6.296875 C 1.734375 -6.296875 0.359375 -3.75 0.359375 -1.765625 C 0.359375 -1.125 0.5625 0.09375 1.484375 0.09375 C 2.796875 0.09375 4.15625 -2.421875 4.15625 -4.421875 Z M 3.265625 -3.234375 L 1.34375 -3.234375 C 1.515625 -3.9375 1.703125 -4.59375 2.0625 -5.203125 C 2.28125 -5.5625 2.609375 -6.0625 3.03125 -6.0625 C 3.5 -6.0625 3.546875 -5.296875 3.546875 -4.953125 C 3.546875 -4.421875 3.40625 -3.796875 3.265625 -3.234375 Z M 3.1875 -2.953125 C 3.046875 -2.390625 2.875 -1.71875 2.515625 -1.09375 C 2.28125 -0.671875 1.921875 -0.125 1.5 -0.125 C 1.109375 -0.125 0.984375 -0.59375 0.984375 -1.234375 C 0.984375 -1.8125 1.140625 -2.390625 1.265625 -2.953125 Z M 3.1875 -2.953125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-6">
<path style="stroke:none;" d="M 6.359375 0.265625 C 6.359375 0.15625 6.296875 0.109375 6.1875 0.078125 L 1.40625 -2.234375 L 6.171875 -4.515625 C 6.25 -4.5625 6.359375 -4.609375 6.359375 -4.734375 C 6.359375 -4.828125 6.28125 -4.921875 6.15625 -4.921875 C 6.15625 -4.921875 6.109375 -4.921875 6 -4.875 L 0.953125 -2.4375 C 0.859375 -2.40625 0.765625 -2.359375 0.765625 -2.234375 C 0.765625 -2.109375 0.84375 -2.0625 0.953125 -2.03125 L 5.984375 0.390625 C 6.109375 0.453125 6.15625 0.453125 6.15625 0.453125 C 6.296875 0.453125 6.359375 0.328125 6.359375 0.265625 Z M 6.359375 0.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-7">
<path style="stroke:none;" d="M 5.203125 -3.609375 C 5.203125 -3.84375 5 -3.84375 4.828125 -3.84375 L 1.75 -3.84375 C 1.53125 -3.84375 1.21875 -3.84375 0.796875 -3.421875 C 0.5625 -3.1875 0.234375 -2.6875 0.234375 -2.625 C 0.234375 -2.53125 0.34375 -2.53125 0.359375 -2.53125 C 0.4375 -2.53125 0.453125 -2.546875 0.515625 -2.625 C 0.953125 -3.296875 1.484375 -3.296875 1.671875 -3.296875 L 2.171875 -3.296875 C 1.796875 -1.9375 1.171875 -0.671875 1.109375 -0.546875 C 1.046875 -0.421875 0.96875 -0.234375 0.96875 -0.15625 C 0.96875 -0.046875 1.046875 0.09375 1.234375 0.09375 C 1.5625 0.09375 1.640625 -0.21875 1.828125 -0.953125 L 2.4375 -3.296875 L 3.453125 -3.296875 C 3.3125 -2.734375 3.09375 -1.796875 3.09375 -1.0625 C 3.09375 -1 3.09375 -0.671875 3.171875 -0.34375 C 3.25 -0.015625 3.34375 0.09375 3.515625 0.09375 C 3.703125 0.09375 3.90625 -0.0625 3.90625 -0.265625 C 3.90625 -0.328125 3.890625 -0.359375 3.84375 -0.46875 C 3.5625 -1.09375 3.5625 -1.75 3.5625 -1.96875 C 3.5625 -2.1875 3.5625 -2.578125 3.71875 -3.296875 L 4.75 -3.296875 C 4.875 -3.296875 5.203125 -3.296875 5.203125 -3.609375 Z M 5.203125 -3.609375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-8">
<path style="stroke:none;" d="M 4.0625 -6.5 C 4.0625 -6.609375 3.984375 -6.6875 3.875 -6.6875 C 3.75 -6.6875 3.71875 -6.625 3.71875 -6.609375 L 0.5625 1.875 C 0.515625 2 0.515625 2.03125 0.515625 2.03125 C 0.515625 2.15625 0.59375 2.234375 0.703125 2.234375 C 0.78125 2.234375 0.859375 2.1875 0.921875 2.015625 L 4.015625 -6.328125 C 4.0625 -6.453125 4.0625 -6.5 4.0625 -6.5 Z M 4.0625 -6.5 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph0-9">
<path style="stroke:none;" d="M 3.03125 -0.15625 C 3.03125 -0.28125 2.9375 -0.28125 2.765625 -0.28125 C 2.421875 -0.28125 2.171875 -0.28125 2.171875 -0.4375 C 2.171875 -0.5 2.171875 -0.515625 2.203125 -0.640625 L 3.40625 -5.390625 C 3.484375 -5.734375 3.5 -5.8125 4.234375 -5.8125 C 4.40625 -5.8125 4.484375 -5.8125 4.484375 -5.984375 C 4.484375 -6.078125 4.40625 -6.09375 4.34375 -6.09375 C 4.171875 -6.09375 3.96875 -6.078125 3.78125 -6.078125 L 3.171875 -6.0625 L 2.5625 -6.078125 C 2.375 -6.078125 2.15625 -6.09375 1.984375 -6.09375 C 1.921875 -6.09375 1.796875 -6.09375 1.796875 -5.9375 C 1.796875 -5.8125 1.890625 -5.8125 2.0625 -5.8125 C 2.265625 -5.8125 2.46875 -5.8125 2.65625 -5.75 C 2.65625 -5.703125 2.65625 -5.671875 2.65625 -5.671875 C 2.65625 -5.625 2.65625 -5.53125 2.640625 -5.5 L 1.421875 -0.671875 C 1.34375 -0.359375 1.328125 -0.28125 0.640625 -0.28125 C 0.453125 -0.28125 0.34375 -0.28125 0.34375 -0.109375 C 0.34375 -0.078125 0.359375 0 0.484375 0 C 0.65625 0 0.859375 -0.015625 1.046875 -0.015625 L 1.65625 -0.03125 L 2.28125 -0.015625 C 2.46875 -0.015625 2.671875 0 2.859375 0 C 2.921875 0 3.03125 0 3.03125 -0.15625 Z M 3.03125 -0.15625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph1-1">
<path style="stroke:none;" d="M 1.921875 -2.984375 C 1.921875 -3.1875 1.734375 -3.328125 1.5625 -3.328125 C 1.375 -3.328125 1.28125 -3.1875 1.234375 -3.0625 L 0.390625 -0.46875 C 0.359375 -0.40625 0.359375 -0.375 0.359375 -0.375 C 0.359375 -0.296875 0.546875 -0.234375 0.609375 -0.234375 C 0.65625 -0.234375 0.6875 -0.28125 0.703125 -0.328125 L 1.859375 -2.796875 C 1.90625 -2.875 1.921875 -2.921875 1.921875 -2.984375 Z M 1.921875 -2.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-1">
<path style="stroke:none;" d="M 3.65625 -4.71875 L 2.296875 -6.171875 L 0.9375 -4.71875 L 1.046875 -4.59375 L 2.296875 -5.5625 L 3.53125 -4.59375 Z M 3.65625 -4.71875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-2">
<path style="stroke:none;" d="M 6.609375 -3.140625 C 6.609375 -3.34375 6.421875 -3.34375 6.28125 -3.34375 L 0.84375 -3.34375 C 0.703125 -3.34375 0.515625 -3.34375 0.515625 -3.140625 C 0.515625 -2.953125 0.6875 -2.953125 0.796875 -2.953125 L 6.3125 -2.953125 C 6.4375 -2.953125 6.609375 -2.953125 6.609375 -3.140625 Z M 6.609375 -1.328125 C 6.609375 -1.515625 6.4375 -1.515625 6.3125 -1.515625 L 0.796875 -1.515625 C 0.6875 -1.515625 0.515625 -1.515625 0.515625 -1.328125 C 0.515625 -1.140625 0.703125 -1.140625 0.84375 -1.140625 L 6.28125 -1.140625 C 6.421875 -1.140625 6.609375 -1.140625 6.609375 -1.328125 Z M 6.609375 -1.328125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-3">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.171875 3.71875 -1.171875 3.6875 -1.171875 C 3.59375 -1.171875 3.59375 -1.15625 3.53125 -1 C 3.328125 -0.390625 2.828125 -0.15625 2.375 -0.15625 C 1.796875 -0.15625 1.078125 -0.609375 1.078125 -1.9375 C 1.078125 -3.328125 1.78125 -3.75 2.3125 -3.75 C 2.4375 -3.75 2.921875 -3.734375 3.25 -3.5 C 3.0625 -3.46875 2.875 -3.34375 2.875 -3.09375 C 2.875 -2.859375 3.0625 -2.671875 3.296875 -2.671875 C 3.53125 -2.671875 3.71875 -2.828125 3.71875 -3.109375 C 3.71875 -3.65625 3.09375 -4 2.296875 -4 C 1.15625 -4 0.296875 -3.046875 0.296875 -1.921875 C 0.296875 -0.78125 1.234375 0.09375 2.28125 0.09375 C 3.53125 0.09375 3.8125 -0.984375 3.8125 -1.0625 Z M 3.8125 -1.0625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-4">
<path style="stroke:none;" d="M 4.3125 -1.90625 C 4.3125 -3.0625 3.390625 -4 2.296875 -4 C 1.15625 -4 0.265625 -3.046875 0.265625 -1.90625 C 0.265625 -0.78125 1.1875 0.09375 2.28125 0.09375 C 3.421875 0.09375 4.3125 -0.796875 4.3125 -1.90625 Z M 3.546875 -1.984375 C 3.546875 -1.65625 3.546875 -1.140625 3.328125 -0.734375 C 3.078125 -0.328125 2.671875 -0.15625 2.296875 -0.15625 C 1.84375 -0.15625 1.46875 -0.375 1.265625 -0.71875 C 1.03125 -1.09375 1.03125 -1.5625 1.03125 -1.984375 C 1.03125 -2.3125 1.03125 -2.8125 1.25 -3.1875 C 1.515625 -3.640625 1.96875 -3.78125 2.28125 -3.78125 C 2.796875 -3.78125 3.15625 -3.484375 3.34375 -3.1875 C 3.546875 -2.8125 3.546875 -2.359375 3.546875 -1.984375 Z M 3.546875 -1.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-5">
<path style="stroke:none;" d="M 3.296875 -1.140625 C 3.296875 -1.546875 3.125 -1.78125 2.921875 -1.984375 C 2.625 -2.28125 2.296875 -2.34375 1.640625 -2.46875 C 1.40625 -2.515625 0.765625 -2.625 0.765625 -3.140625 C 0.765625 -3.421875 0.96875 -3.796875 1.78125 -3.796875 C 2.734375 -3.796875 2.796875 -3.0625 2.8125 -2.84375 C 2.828125 -2.734375 2.828125 -2.671875 2.9375 -2.671875 C 3.0625 -2.671875 3.0625 -2.734375 3.0625 -2.90625 L 3.0625 -3.765625 C 3.0625 -3.921875 3.0625 -4 2.96875 -4 C 2.921875 -4 2.90625 -4 2.78125 -3.890625 C 2.765625 -3.875 2.6875 -3.796875 2.625 -3.75 C 2.359375 -3.9375 2.078125 -4 1.78125 -4 C 0.59375 -4 0.296875 -3.34375 0.296875 -2.890625 C 0.296875 -2.609375 0.421875 -2.375 0.640625 -2.171875 C 0.9375 -1.90625 1.28125 -1.84375 1.734375 -1.75 C 2.1875 -1.671875 2.34375 -1.640625 2.53125 -1.484375 C 2.625 -1.421875 2.84375 -1.25 2.84375 -0.90625 C 2.84375 -0.125 1.9375 -0.125 1.8125 -0.125 C 0.90625 -0.125 0.671875 -0.890625 0.578125 -1.359375 C 0.546875 -1.453125 0.53125 -1.5 0.421875 -1.5 C 0.296875 -1.5 0.296875 -1.4375 0.296875 -1.28125 L 0.296875 -0.140625 C 0.296875 0.015625 0.296875 0.09375 0.40625 0.09375 C 0.46875 0.09375 0.46875 0.09375 0.640625 -0.078125 C 0.671875 -0.140625 0.765625 -0.25 0.8125 -0.296875 C 1.1875 0.078125 1.59375 0.09375 1.8125 0.09375 C 2.921875 0.09375 3.296875 -0.546875 3.296875 -1.140625 Z M 3.296875 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-6">
<path style="stroke:none;" d="M 4.21875 -2.859375 C 4.21875 -3.453125 4.1875 -4.21875 3.875 -4.890625 C 3.484375 -5.734375 2.8125 -5.9375 2.296875 -5.9375 C 1.75 -5.9375 1.078125 -5.734375 0.6875 -4.875 C 0.40625 -4.25 0.359375 -3.53125 0.359375 -2.859375 C 0.359375 -2.28125 0.375 -1.40625 0.765625 -0.703125 C 1.171875 0.046875 1.875 0.203125 2.28125 0.203125 C 2.859375 0.203125 3.53125 -0.046875 3.90625 -0.875 C 4.171875 -1.46875 4.21875 -2.140625 4.21875 -2.859375 Z M 3.453125 -2.96875 C 3.453125 -2.40625 3.453125 -1.65625 3.359375 -1.140625 C 3.171875 -0.109375 2.515625 -0.03125 2.296875 -0.03125 C 2.03125 -0.03125 1.390625 -0.15625 1.21875 -1.15625 C 1.125 -1.6875 1.125 -2.453125 1.125 -2.96875 C 1.125 -3.5625 1.125 -4.28125 1.234375 -4.765625 C 1.40625 -5.5625 1.984375 -5.71875 2.28125 -5.71875 C 2.625 -5.71875 3.1875 -5.546875 3.359375 -4.703125 C 3.453125 -4.21875 3.453125 -3.53125 3.453125 -2.96875 Z M 3.453125 -2.96875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph2-7">
<path style="stroke:none;" d="M 4.125 -1.578125 L 3.875 -1.578125 C 3.859375 -1.46875 3.78125 -0.9375 3.671875 -0.796875 C 3.609375 -0.71875 3 -0.71875 2.8125 -0.71875 L 1.234375 -0.71875 L 2.109375 -1.546875 C 3.578125 -2.8125 4.125 -3.296875 4.125 -4.203125 C 4.125 -5.234375 3.28125 -5.9375 2.171875 -5.9375 C 1.15625 -5.9375 0.453125 -5.125 0.453125 -4.3125 C 0.453125 -3.875 0.84375 -3.828125 0.921875 -3.828125 C 1.109375 -3.828125 1.390625 -3.96875 1.390625 -4.296875 C 1.390625 -4.5625 1.203125 -4.75 0.921875 -4.75 C 0.875 -4.75 0.84375 -4.75 0.8125 -4.75 C 1.03125 -5.375 1.59375 -5.671875 2.078125 -5.671875 C 2.984375 -5.671875 3.296875 -4.8125 3.296875 -4.203125 C 3.296875 -3.296875 2.609375 -2.546875 2.1875 -2.09375 L 0.546875 -0.328125 C 0.453125 -0.21875 0.453125 -0.203125 0.453125 0 L 3.875 0 Z M 4.125 -1.578125 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-1">
<path style="stroke:none;" d="M 3.296875 -1.140625 C 3.296875 -1.546875 3.125 -1.78125 2.921875 -1.984375 C 2.625 -2.28125 2.296875 -2.34375 1.640625 -2.46875 C 1.40625 -2.515625 0.765625 -2.625 0.765625 -3.140625 C 0.765625 -3.421875 0.96875 -3.796875 1.78125 -3.796875 C 2.734375 -3.796875 2.796875 -3.0625 2.8125 -2.84375 C 2.828125 -2.734375 2.828125 -2.671875 2.9375 -2.671875 C 3.0625 -2.671875 3.0625 -2.734375 3.0625 -2.90625 L 3.0625 -3.765625 C 3.0625 -3.921875 3.0625 -4 2.96875 -4 C 2.921875 -4 2.90625 -4 2.78125 -3.890625 C 2.765625 -3.875 2.6875 -3.796875 2.625 -3.75 C 2.359375 -3.9375 2.078125 -4 1.78125 -4 C 0.59375 -4 0.296875 -3.34375 0.296875 -2.890625 C 0.296875 -2.609375 0.421875 -2.375 0.640625 -2.171875 C 0.9375 -1.90625 1.28125 -1.84375 1.734375 -1.75 C 2.1875 -1.671875 2.34375 -1.640625 2.53125 -1.484375 C 2.625 -1.421875 2.84375 -1.25 2.84375 -0.90625 C 2.84375 -0.125 1.9375 -0.125 1.8125 -0.125 C 0.90625 -0.125 0.671875 -0.890625 0.578125 -1.359375 C 0.546875 -1.453125 0.53125 -1.5 0.421875 -1.5 C 0.296875 -1.5 0.296875 -1.4375 0.296875 -1.28125 L 0.296875 -0.140625 C 0.296875 0.015625 0.296875 0.09375 0.40625 0.09375 C 0.46875 0.09375 0.46875 0.09375 0.640625 -0.078125 C 0.671875 -0.140625 0.765625 -0.25 0.8125 -0.296875 C 1.1875 0.078125 1.59375 0.09375 1.8125 0.09375 C 2.921875 0.09375 3.296875 -0.546875 3.296875 -1.140625 Z M 3.296875 -1.140625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-2">
<path style="stroke:none;" d="M 3.8125 -1.0625 C 3.8125 -1.125 3.765625 -1.171875 3.6875 -1.171875 C 3.59375 -1.171875 3.5625 -1.109375 3.5625 -1.078125 C 3.25 -0.171875 2.46875 -0.15625 2.328125 -0.15625 C 1.90625 -0.15625 1.53125 -0.390625 1.328125 -0.703125 C 1.03125 -1.140625 1.03125 -1.671875 1.03125 -2.046875 L 3.5625 -2.046875 C 3.765625 -2.046875 3.8125 -2.046875 3.8125 -2.234375 C 3.8125 -3.15625 3.3125 -4 2.171875 -4 C 1.09375 -4 0.265625 -3.0625 0.265625 -1.96875 C 0.265625 -0.796875 1.203125 0.09375 2.28125 0.09375 C 3.375 0.09375 3.8125 -0.859375 3.8125 -1.0625 Z M 3.203125 -2.25 L 1.03125 -2.25 C 1.109375 -3.625 1.921875 -3.78125 2.171875 -3.78125 C 2.65625 -3.78125 3.1875 -3.40625 3.203125 -2.25 Z M 3.203125 -2.25 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-3">
<path style="stroke:none;" d="M 3.6875 -1.6875 L 3.4375 -1.6875 C 3.34375 -0.703125 3.234375 -0.25 2.109375 -0.25 L 1.078125 -0.25 L 3.578125 -3.5625 C 3.65625 -3.65625 3.65625 -3.671875 3.65625 -3.71875 C 3.65625 -3.84375 3.5625 -3.84375 3.421875 -3.84375 L 0.484375 -3.84375 L 0.390625 -2.375 L 0.640625 -2.375 C 0.6875 -3.296875 0.84375 -3.625 1.859375 -3.625 L 2.859375 -3.625 L 0.34375 -0.296875 C 0.265625 -0.203125 0.265625 -0.1875 0.265625 -0.140625 C 0.265625 0 0.34375 0 0.5 0 L 3.53125 0 Z M 3.6875 -1.6875 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-4">
<path style="stroke:none;" d="M 2.25 0 L 2.25 -0.28125 C 1.671875 -0.28125 1.640625 -0.328125 1.640625 -0.671875 L 1.640625 -3.9375 L 0.359375 -3.84375 L 0.359375 -3.5625 C 0.921875 -3.5625 1.015625 -3.515625 1.015625 -3.078125 L 1.015625 -0.6875 C 1.015625 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.71875 -0.015625 0.90625 -0.03125 1.296875 -0.03125 C 1.453125 -0.03125 1.8125 -0.03125 2.25 0 Z M 1.75 -5.375 C 1.75 -5.640625 1.546875 -5.859375 1.28125 -5.859375 C 1.015625 -5.859375 0.796875 -5.640625 0.796875 -5.375 C 0.796875 -5.109375 1.015625 -4.890625 1.28125 -4.890625 C 1.546875 -4.890625 1.75 -5.109375 1.75 -5.375 Z M 1.75 -5.375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-5">
<path style="stroke:none;" d="M 4.3125 -1.90625 C 4.3125 -3.0625 3.390625 -4 2.296875 -4 C 1.15625 -4 0.265625 -3.046875 0.265625 -1.90625 C 0.265625 -0.78125 1.1875 0.09375 2.28125 0.09375 C 3.421875 0.09375 4.3125 -0.796875 4.3125 -1.90625 Z M 3.546875 -1.984375 C 3.546875 -1.65625 3.546875 -1.140625 3.328125 -0.734375 C 3.078125 -0.328125 2.671875 -0.15625 2.296875 -0.15625 C 1.84375 -0.15625 1.46875 -0.375 1.265625 -0.71875 C 1.03125 -1.09375 1.03125 -1.5625 1.03125 -1.984375 C 1.03125 -2.3125 1.03125 -2.8125 1.25 -3.1875 C 1.515625 -3.640625 1.96875 -3.78125 2.28125 -3.78125 C 2.796875 -3.78125 3.15625 -3.484375 3.34375 -3.1875 C 3.546875 -2.8125 3.546875 -2.359375 3.546875 -1.984375 Z M 3.546875 -1.984375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-6">
<path style="stroke:none;" d="M 4.875 0 L 4.875 -0.28125 C 4.421875 -0.28125 4.203125 -0.28125 4.1875 -0.546875 L 4.1875 -2.265625 C 4.1875 -3 4.1875 -3.265625 3.9375 -3.578125 C 3.734375 -3.828125 3.40625 -3.9375 2.953125 -3.9375 C 2.125 -3.9375 1.734375 -3.328125 1.609375 -3.078125 L 1.609375 -3.9375 L 0.3125 -3.84375 L 0.3125 -3.5625 C 0.921875 -3.5625 1 -3.5 1 -3.0625 L 1 -0.6875 C 1 -0.28125 0.90625 -0.28125 0.3125 -0.28125 L 0.3125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.75 -0.03125 1.875 -0.015625 2.34375 0 L 2.34375 -0.28125 C 1.75 -0.28125 1.65625 -0.28125 1.65625 -0.6875 L 1.65625 -2.3125 C 1.65625 -3.25 2.328125 -3.71875 2.890625 -3.71875 C 3.421875 -3.71875 3.53125 -3.28125 3.53125 -2.75 L 3.53125 -0.6875 C 3.53125 -0.28125 3.4375 -0.28125 2.84375 -0.28125 L 2.84375 0 C 3.265625 -0.015625 3.4375 -0.03125 3.859375 -0.03125 C 4.296875 -0.03125 4.40625 -0.015625 4.875 0 Z M 4.875 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-7">
<path style="stroke:none;" d="M 3.328125 -3.390625 C 3.328125 -3.671875 3.0625 -3.9375 2.65625 -3.9375 C 2.125 -3.9375 1.75 -3.5625 1.546875 -3.015625 L 1.53125 -3.015625 L 1.53125 -3.9375 L 0.265625 -3.84375 L 0.265625 -3.5625 C 0.875 -3.5625 0.953125 -3.5 0.953125 -3.0625 L 0.953125 -0.6875 C 0.953125 -0.28125 0.859375 -0.28125 0.265625 -0.28125 L 0.265625 0 C 0.734375 -0.015625 0.859375 -0.03125 1.3125 -0.03125 L 2.4375 0 L 2.4375 -0.28125 L 2.265625 -0.28125 C 1.609375 -0.28125 1.59375 -0.375 1.59375 -0.703125 L 1.59375 -2.046875 C 1.59375 -2.40625 1.6875 -3.71875 2.703125 -3.71875 C 2.6875 -3.703125 2.546875 -3.59375 2.546875 -3.375 C 2.546875 -3.140625 2.734375 -2.984375 2.9375 -2.984375 C 3.125 -2.984375 3.328125 -3.125 3.328125 -3.390625 Z M 3.328125 -3.390625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-8">
<path style="stroke:none;" d="M 3.046875 -1.109375 L 3.046875 -1.609375 L 2.796875 -1.609375 L 2.796875 -1.140625 C 2.796875 -0.46875 2.53125 -0.15625 2.203125 -0.15625 C 1.609375 -0.15625 1.609375 -0.9375 1.609375 -1.09375 L 1.609375 -3.5625 L 2.90625 -3.5625 L 2.90625 -3.84375 L 1.609375 -3.84375 L 1.609375 -5.484375 L 1.359375 -5.484375 C 1.34375 -4.734375 1.03125 -3.8125 0.171875 -3.796875 L 0.171875 -3.5625 L 0.953125 -3.5625 L 0.953125 -1.109375 C 0.953125 -0.109375 1.671875 0.09375 2.140625 0.09375 C 2.734375 0.09375 3.046875 -0.46875 3.046875 -1.109375 Z M 3.046875 -1.109375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-9">
<path style="stroke:none;" d="M 4.4375 -0.796875 L 4.4375 -1.296875 L 4.1875 -1.296875 L 4.1875 -0.796875 C 4.1875 -0.703125 4.1875 -0.265625 3.859375 -0.265625 C 3.546875 -0.265625 3.546875 -0.6875 3.546875 -0.828125 L 3.546875 -2.390625 C 3.546875 -2.90625 3.546875 -3.203125 3.140625 -3.5625 C 2.8125 -3.859375 2.375 -4 1.9375 -4 C 1.1875 -4 0.5625 -3.625 0.5625 -3.046875 C 0.5625 -2.78125 0.75 -2.625 0.984375 -2.625 C 1.21875 -2.625 1.390625 -2.796875 1.390625 -3.03125 C 1.390625 -3.421875 0.984375 -3.46875 0.984375 -3.46875 C 1.234375 -3.6875 1.65625 -3.78125 1.921875 -3.78125 C 2.375 -3.78125 2.875 -3.4375 2.875 -2.65625 L 2.875 -2.359375 C 2.40625 -2.34375 1.734375 -2.296875 1.140625 -2 C 0.484375 -1.6875 0.296875 -1.234375 0.296875 -0.875 C 0.296875 -0.140625 1.15625 0.09375 1.75 0.09375 C 2.5 0.09375 2.84375 -0.390625 2.96875 -0.640625 C 3 -0.265625 3.265625 0.046875 3.65625 0.046875 C 3.875 0.046875 4.4375 -0.078125 4.4375 -0.796875 Z M 2.875 -1.265625 C 2.875 -0.390625 2.21875 -0.125 1.8125 -0.125 C 1.40625 -0.125 1.015625 -0.421875 1.015625 -0.875 C 1.015625 -1.46875 1.515625 -2.09375 2.875 -2.140625 Z M 2.875 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-10">
<path style="stroke:none;" d="M 4.78125 -1.921875 C 4.78125 -3.046875 3.90625 -3.9375 2.828125 -3.9375 C 2.21875 -3.9375 1.796875 -3.625 1.59375 -3.390625 L 1.59375 -6.1875 L 0.265625 -6.09375 L 0.265625 -5.8125 C 0.875 -5.8125 0.953125 -5.75 0.953125 -5.3125 L 0.953125 0 L 1.203125 0 L 1.53125 -0.546875 C 1.8125 -0.15625 2.25 0.09375 2.734375 0.09375 C 3.796875 0.09375 4.78125 -0.765625 4.78125 -1.921875 Z M 4.015625 -1.9375 C 4.015625 -1.515625 3.96875 -1.046875 3.734375 -0.6875 C 3.53125 -0.40625 3.171875 -0.125 2.6875 -0.125 C 2.296875 -0.125 1.953125 -0.34375 1.734375 -0.671875 C 1.609375 -0.859375 1.609375 -0.859375 1.609375 -1.03125 L 1.609375 -2.84375 C 1.609375 -3.015625 1.609375 -3.03125 1.71875 -3.171875 C 2.015625 -3.578125 2.453125 -3.71875 2.796875 -3.71875 C 3.171875 -3.71875 3.53125 -3.5 3.765625 -3.125 C 4 -2.75 4.015625 -2.21875 4.015625 -1.9375 Z M 4.015625 -1.9375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-11">
<path style="stroke:none;" d="M 2.328125 0 L 2.328125 -0.28125 C 1.734375 -0.28125 1.640625 -0.28125 1.640625 -0.6875 L 1.640625 -6.1875 L 0.328125 -6.09375 L 0.328125 -5.8125 C 0.921875 -5.8125 1.015625 -5.75 1.015625 -5.3125 L 1.015625 -0.6875 C 1.015625 -0.28125 0.90625 -0.28125 0.328125 -0.28125 L 0.328125 0 C 0.734375 -0.015625 0.90625 -0.03125 1.328125 -0.03125 C 1.734375 -0.03125 1.890625 -0.015625 2.328125 0 Z M 2.328125 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-12">
<path style="stroke:none;" d="M 4.8125 1.734375 L 4.8125 1.453125 C 4.234375 1.453125 4.125 1.453125 4.125 1.046875 L 4.125 -3.9375 L 3.90625 -3.9375 L 3.5625 -3.15625 C 3.15625 -3.859375 2.640625 -3.9375 2.328125 -3.9375 C 1.28125 -3.9375 0.296875 -3.09375 0.296875 -1.921875 C 0.296875 -0.78125 1.21875 0.09375 2.25 0.09375 C 2.625 0.09375 3.09375 -0.03125 3.46875 -0.53125 L 3.46875 1.046875 C 3.46875 1.453125 3.375 1.453125 2.78125 1.453125 L 2.78125 1.734375 C 3.203125 1.71875 3.375 1.703125 3.796875 1.703125 C 4.234375 1.703125 4.34375 1.71875 4.8125 1.734375 Z M 3.5 -1.234375 C 3.5 -1.078125 3.5 -1.03125 3.359375 -0.796875 C 3.140625 -0.40625 2.765625 -0.125 2.296875 -0.125 C 1.625 -0.125 1.078125 -0.90625 1.078125 -1.921875 C 1.078125 -2.953125 1.703125 -3.6875 2.390625 -3.6875 C 3.09375 -3.6875 3.5 -2.953125 3.5 -2.46875 Z M 3.5 -1.234375 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph3-13">
<path style="stroke:none;" d="M 4.875 0 L 4.875 -0.28125 C 4.28125 -0.28125 4.1875 -0.34375 4.1875 -0.78125 L 4.1875 -3.9375 L 2.84375 -3.84375 L 2.84375 -3.5625 C 3.453125 -3.5625 3.53125 -3.5 3.53125 -3.0625 L 3.53125 -1.484375 C 3.53125 -0.703125 3.09375 -0.125 2.4375 -0.125 C 1.703125 -0.125 1.65625 -0.515625 1.65625 -0.984375 L 1.65625 -3.9375 L 0.3125 -3.84375 L 0.3125 -3.5625 C 1 -3.5625 1 -3.546875 1 -2.75 L 1 -1.40625 C 1 -0.828125 1 -0.453125 1.40625 -0.140625 C 1.671875 0.03125 2.03125 0.09375 2.390625 0.09375 C 2.859375 0.09375 3.296875 -0.109375 3.546875 -0.640625 L 3.5625 -0.640625 L 3.5625 0.09375 Z M 4.875 0 "/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="fisica2_lez12a_add_obliqua-glyph4-1">
<path style="stroke:none;" d="M 6.359375 -0.625 C 6.359375 -0.734375 6.296875 -0.78125 6.1875 -0.828125 L 1.40625 -3.125 L 6.171875 -5.421875 C 6.265625 -5.453125 6.359375 -5.5 6.359375 -5.625 C 6.359375 -5.75 6.25 -5.8125 6.171875 -5.8125 C 6.125 -5.8125 6.109375 -5.8125 6.015625 -5.765625 L 0.953125 -3.34375 C 0.796875 -3.265625 0.765625 -3.21875 0.765625 -3.125 C 0.765625 -3.015625 0.84375 -2.984375 0.921875 -2.9375 L 6 -0.5 C 6.109375 -0.4375 6.125 -0.4375 6.15625 -0.4375 C 6.296875 -0.4375 6.359375 -0.546875 6.359375 -0.625 Z M 6.359375 1.1875 C 6.359375 0.984375 6.171875 0.984375 6.046875 0.984375 L 1.078125 0.984375 C 0.953125 0.984375 0.765625 0.984375 0.765625 1.1875 C 0.765625 1.375 0.953125 1.375 1.078125 1.375 L 6.046875 1.375 C 6.171875 1.375 6.359375 1.375 6.359375 1.1875 Z M 6.359375 1.1875 "/>
</symbol>
</g>
<clipPath id="fisica2_lez12a_add_obliqua-clip1">
  <path d="M 0.394531 40 L 26 40 L 26 109 L 0.394531 109 Z M 0.394531 40 "/>
</clipPath>
<clipPath id="fisica2_lez12a_add_obliqua-clip2">
  <path d="M 196 40 L 221.941406 40 L 221.941406 109 L 196 109 Z M 196 40 "/>
</clipPath>
</defs>
<g id="fisica2_lez12a_add_obliqua-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 0.00139312 -28.346955 L 198.426789 -28.346955 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 0.00139312 28.344893 L 198.426789 28.344893 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<g clip-path="url(#fisica2_lez12a_add_obliqua-clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 7.935896 -0.00103083 C 7.935896 15.65597 4.382841 28.344893 0.00139312 28.344893 C -4.38398 28.344893 -7.937036 15.65597 -7.937036 -0.00103083 C -7.937036 -15.654106 -4.38398 -28.346955 0.00139312 -28.346955 C 4.382841 -28.346955 7.935896 -15.654106 7.935896 -0.00103083 Z M 7.935896 -0.00103083 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
</g>
<g clip-path="url(#fisica2_lez12a_add_obliqua-clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 206.365218 -0.00103083 C 206.365218 15.65597 202.812163 28.344893 198.426789 28.344893 C 194.045342 28.344893 190.492286 15.65597 190.492286 -0.00103083 C 190.492286 -15.654106 194.045342 -28.346955 198.426789 -28.346955 C 202.812163 -28.346955 206.365218 -15.654106 206.365218 -0.00103083 Z M 206.365218 -0.00103083 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,1.99255;stroke-miterlimit:10;" d="M 28.347317 -28.346955 L 28.347317 28.344893 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-1" x="27.734286" y="74.894789"/>
</g>
<path style="fill:none;stroke-width:1.19553;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 93.542943 28.344893 L 133.231163 -28.346955 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-1" x="145.695022" y="97.956025"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph1-1" x="151.803095" y="94.166214"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 102.474658 15.589228 L 32.928992 15.589228 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<path style="fill-rule:nonzero;fill:rgb(50%,50%,50%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.761803 0.00159248 C 3.298531 0.111521 1.268775 0.751464 0.000667585 1.446371 L 0.000667585 -1.447112 C 1.268775 -0.752205 3.298531 -0.112262 3.761803 0.00159248 Z M 3.761803 0.00159248 " transform="matrix(-0.994962,0,0,0.994962,45.219414,59.154666)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 124.299449 -15.591289 L 32.928992 -15.591289 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<path style="fill-rule:nonzero;fill:rgb(50%,50%,50%);fill-opacity:1;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(50%,50%,50%);stroke-opacity:1;stroke-miterlimit:10;" d="M 3.761803 0.000469183 C 3.298531 0.114324 1.268775 0.750341 0.000667585 1.445248 L 0.000667585 -1.448235 C 1.268775 -0.749402 3.298531 -0.113386 3.761803 0.000469183 Z M 3.761803 0.000469183 " transform="matrix(-0.994962,0,0,0.994962,45.219414,90.179221)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 113.389016 -0.00103083 L 150.109159 25.710528 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.531681 -0.000879596 C 3.977188 0.138114 1.530227 0.921506 -0.00134445 1.773332 L -0.00163789 -1.773054 C 1.530718 -0.919231 3.975235 -0.138495 4.531681 -0.000879596 Z M 4.531681 -0.000879596 " transform="matrix(0.815043,-0.570631,-0.570631,-0.815043,161.809888,49.0852)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-1" x="171.015816" y="41.860052"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-2" x="170.543209" y="41.860052"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 113.389016 -0.00103083 L 180.912777 -0.00103083 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<path style="fill-rule:nonzero;fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(8.625793%,52.549744%,37.644958%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.53517 -0.00103083 C 3.977674 0.13638 1.527832 0.921586 0.000606881 1.773534 L 0.000606881 -1.77167 C 1.527832 -0.919721 3.977674 -0.138442 4.53517 -0.00103083 Z M 4.53517 -0.00103083 " transform="matrix(0.994962,0,0,-0.994962,192.456427,74.666943)"/>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-3" x="197.149495" y="84.750886"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-4" x="195.649092" y="87.00547"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 133.231163 -0.00103083 C 133.231163 4.070261 131.974834 8.047327 129.642773 11.380525 " transform="matrix(0.994962,0,0,-0.994962,12.455645,74.666943)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-5" x="152.046861" y="68.738958"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-1" x="15.403718" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-2" x="19.020385" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-3" x="23.099171" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-4" x="27.174389" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-5" x="29.7214" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-6" x="34.30602" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-2" x="39.400042" y="32.363138"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-7" x="46.53881" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-2" x="50.125144" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-8" x="54.20393" y="32.363138"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-8" x="57.760825" y="32.363138"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-9" x="61.32664" y="32.363138"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-1" x="75.317361" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-2" x="78.934027" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-3" x="83.012814" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-4" x="87.088031" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-5" x="89.635042" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-6" x="94.219662" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-2" x="99.313684" y="13.414081"/>
</g>
<g style="fill:rgb(8.625793%,52.549744%,37.644958%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-5" x="106.452452" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-10" x="111.037072" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-11" x="116.131095" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-4" x="118.678106" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-12" x="121.225117" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-13" x="126.063992" y="13.414081"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph3-9" x="131.158014" y="13.414081"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-1" x="54.344551" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-2" x="62.999728" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-1" x="72.677726" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph1-1" x="78.786794" y="124.075774"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-3" x="82.985535" y="127.865585"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-4" x="87.060753" y="127.865585"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-5" x="91.645373" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-5" x="96.789642" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-6" x="119.674769" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph4-1" x="126.805663" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-5" x="136.484656" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-6" x="143.577926" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-7" x="153.252107" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-8" x="158.820739" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-7" x="163.408335" y="127.865585"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-9" x="72.540421" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-2" x="79.793696" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-4" x="89.471694" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-3" x="96.902072" y="150.132841"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-4" x="100.97729" y="150.132841"/>
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-5" x="105.56191" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-5" x="110.706179" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-1" x="116.782428" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph1-1" x="122.889492" y="146.34303"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph2-2" x="128.108069" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-4" x="137.786067" y="150.132841"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#fisica2_lez12a_add_obliqua-glyph0-1" x="143.685676" y="150.132841"/>
</g>
</g>
</svg><figcaption><strong>Sezione obliqua e proiezione dell&#x27;area</strong><span class="figure-explanation">Le due sezioni tagliano lo stesso filo. Per $0\\leq\\theta&lt;\\pi/2$, $S=S^{\\prime}\\cos\\theta$ e $I=J\\cos\\theta\\,S^{\\prime}=JS$: l&#x27;aumento dell&#x27;area compensa la componente normale più piccola.</span></figcaption></figure><!-- END L12 ADD obliqua -->
            <p>In generale, qualunque sia l'orientazione scelta per la normale, l'area geometrica è $S' = S/\\left| \\cos\\theta \\right|$, mentre il <strong>segno</strong> del flusso resta determinato separatamente dal verso di $\\hat{n}$ (si veda il punto (c)). Il prodotto scalare introduce il fattore $\\cos\\theta$ e si ottiene</p>
            <p>$$I = \\vec{J} \\cdot \\hat{n} \\, S' = J \\cos\\theta \\cdot \\frac{S}{\\cos\\theta} = J S$$</p>
            <p>Si ottiene lo stesso valore $I = 2{,}0$ A: è la conferma che, in regime stazionario, la corrente che attraversa il filo <strong>non dipende</strong> da come scegliamo la superficie di taglio.</p>
            <p>Se invece l'area inclinata considerata è $S$ (e non $S/\\cos\\theta$), la corrente che la attraversa è $I = J S \\cos\\theta$: per esempio con $\\theta = 60^\\circ$ si ha $I = 2{,}0 \\cdot \\cos 60^\\circ = 1{,}0$ A, perché tale superficie intercetta solo una parte del flusso.</p>`
          },
          {
            subtitle: "(c) Ruolo del verso della normale",
            content: `<p>Se nel caso (a) avessimo scelto $\\hat{n} = -\\hat{x}$, avremmo ottenuto</p>
            <p>$$I = \\vec{J} \\cdot \\hat{n} \\, S = -J S = -2{,}0\\ \\text{A}$$</p>
            <p>Il modulo è identico, ma il segno è negativo: ciò significa semplicemente che la corrente scorre nel verso opposto alla normale scelta. Il segno di $I$ non è dunque una proprietà intrinseca della corrente, ma dipende dall'orientazione assegnata alla superficie; <strong>va quindi sempre dichiarata la scelta di $\\hat{n}$ prima di interpretare il risultato</strong>.</p>`
          }
        ]
      },

      {
        id: "s12-richiamo-J-specie",
        type: "section",
        title: "Più specie di portatori: densità parziali e totale",
        icon: "🧪",
        content: `<p>Il capitolo che segue si apre con un breve <strong>richiamo</strong> del vettore densità di corrente, già introdotto. La vera novità è duplice: il passaggio al caso di <strong>più specie di portatori</strong> (con la distinzione fra densità di carica parziali e totale) e la formulazione della <strong>conservazione della carica</strong> come equazione di continuità.</p>
        <p>Per una singola popolazione di portatori, tutti di carica $q$ e con velocità di deriva media comune $\\vec{v}_d$, il vettore densità di corrente è $\\vec{J} = n q \\vec{v}_d$, dove $n$ è la densità numerica dei portatori e $q$ la loro carica con il proprio segno.</p>
        <p>Il nome "vettore densità di corrente" si giustifica analizzando i termini della definizione: è un <strong>vettore</strong> perché è proporzionale al vettore velocità di deriva $\\vec{v}_d$ (direzione e verso sono quelli del moto delle cariche se $q \\gt 0$); è una <strong>densità</strong> perché dipende da $n$, che rappresenta la densità volumetrica dei portatori di carica e si misura in $\\text{portatori}/\\text{m}^3$.</p>`,
        subsections: [
          {
            subtitle: "Richiamo del legame con la corrente",
            content: `<p>La corrente infinitesima $dI$ che attraversa una superficie infinitesima $dS$ con versore normale $\\hat{n}$ è il prodotto scalare tra il vettore densità di corrente e il vettore superficie $d\\vec{S} = \\hat{n} \\, dS$:</p>
            <p>$$dI = \\vec{J} \\cdot d\\vec{S} = \\vec{J} \\cdot \\hat{n} \\, dS$$</p>
            <p>Per vedere la coerenza con $I = dQ/dt$, scriviamo direttamente la carica che attraversa l'elemento $dS$ nel tempo $dt$:</p>
            <p>$$dQ = (\\vec{J} \\cdot \\hat{n}) \\, dS \\, dt \\qquad \\Rightarrow \\qquad dI = \\frac{dQ}{dt} = (\\vec{J} \\cdot \\hat{n}) \\, dS$$</p>
            <p>dove $dI$ è il <strong>contributo dell'elemento di superficie $dS$</strong> alla corrente totale. Integrando su una superficie finita $\\Sigma$ si ottiene la corrente totale, cioè il <strong>flusso</strong> del campo vettoriale $\\vec{J}$ attraverso $\\Sigma$:</p>
            <p>$$I = \\int_{\\Sigma} dI = \\int_{\\Sigma} \\vec{J} \\cdot \\hat{n} \\, dS$$</p>
            <p>L'unità di misura di $\\vec{J}$ nel Sistema Internazionale è l'ampere su metro quadro: $[J] = [I]/[S] = \\text{A}/\\text{m}^2$.</p>`
          },
          {
            subtitle: "Densità parziali e densità totale",
            content: `<p>Per una singola specie di portatori il prodotto $n \\cdot q$ rappresenta la densità di carica associata a quella specie. Indicando con l'indice $s$ la specie considerata:</p>
            <p>$$\\rho_s = n_s q_s \\quad \\left[ \\frac{\\text{portatori}}{\\text{m}^3} \\cdot \\frac{\\text{C}}{\\text{portatore}} = \\frac{\\text{C}}{\\text{m}^3} \\right]$$</p>
            <p>Il contributo di quella specie si riscrive in forma compatta come $\\vec{J}_s = \\rho_s \\vec{v}_{d,s}$.</p>
            <p>È importante distinguere con cura due oggetti diversi:</p>
            <ul>
              <li>la <strong>densità di carica parziale</strong> $\\rho_s = n_s q_s$ di ciascuna specie di portatori <em>mobili</em>;</li>
              <li>la <strong>densità di carica totale</strong> $\\rho_{\\text{tot}} = \\sum_s \\rho_s + \\rho_{\\text{fissa}}$, che comprende anche le eventuali cariche <em>immobili</em> (per esempio gli ioni del reticolo cristallino di un metallo, o le cariche di background in un elettrolita).</li>
            </ul>
            <p>In un conduttore metallico neutro, per esempio, la densità degli elettroni di conduzione $\\rho_- = -n e$ è grandissima in modulo, ma viene compensata esattamente dalla densità positiva del reticolo, così che $\\rho_{\\text{tot}} = 0$ <strong>anche quando scorre corrente</strong>.</p>
            <p>Nell'equazione di continuità compaiono sempre le grandezze <strong>totali</strong>:</p>
            <p>$$\\rho \\equiv \\rho_{\\text{tot}}, \\qquad \\vec{J} \\equiv \\vec{J}_{\\text{tot}} = \\sum_s \\rho_s \\vec{v}_{d,s}$$</p>
            <p>La relazione compatta $\\vec{J}_s = \\rho_s \\vec{v}_{d,s}$ vale per il contributo di ciascuna specie e contiene la densità di carica <strong>parziale</strong>: non può essere scritta con la densità totale. In un metallo vi è un'unica specie di portatori mobili, eppure $\\rho_{\\text{tot}} = 0$ mentre $\\vec{J} \\neq \\vec{0}$. La scrittura $\\vec{J} = \\rho_{\\text{tot}} \\vec{v}_d$ è lecita solo se tutte le cariche presenti appartengono a un'unica popolazione che si muove con la stessa velocità di deriva (nessuna carica di compensazione immobile).</p>`
          },
          {
            subtitle: "Contributo di più portatori di carica",
            content: `<p>In molti materiali conduttori, come le soluzioni elettrolitiche o i gas ionizzati, possono coesistere portatori di carica di segno opposto in movimento. Il vettore densità di corrente totale è la somma vettoriale dei contributi:</p>
            <p>$$\\vec{J}_{\\text{tot}} = \\vec{J}_{+} + \\vec{J}_{-}$$</p>
            <p>Se abbiamo cariche positive ($q \\gt 0$) con densità $n_+$ e velocità $\\vec{v}_{d+}$ e cariche negative ($-q$) con densità $n_-$ e velocità $\\vec{v}_{d-}$:</p>
            <p>$$\\vec{J}_{\\text{tot}} = n_+ q \\vec{v}_{d+} + n_- (-q) \\vec{v}_{d-}$$</p>
            <p>Se le cariche positive si muovono lungo $\\hat{x}$ e quelle negative lungo $-\\hat{x}$, entrambe contribuiscono a una corrente netta nello stesso verso. Indicando con $v_{d+}$ e $v_{d-}$ i moduli delle velocità:</p>
            <p>$$\\vec{J}_{\\text{tot}} = (n_+ q v_{d+} + n_- q v_{d-}) \\hat{x}$$</p>
            <p>Si noti che, mentre le due specie <strong>sommano</strong> i loro contributi alla corrente, le loro densità di carica $\\rho_+ = n_+ q$ e $\\rho_- = -n_- q$ si <strong>compensano</strong> (totalmente o in parte) nella densità totale: corrente e densità di carica totale sono grandezze <strong>indipendenti</strong>.</p>`
          }
        ],
        formulas: [
          { label: "Densità di carica parziale", latex: "\\rho_s = n_s q_s" },
          { label: "Densità di carica totale", latex: "\\rho_{\\text{tot}} = \\sum_s \\rho_s + \\rho_{\\text{fissa}}" },
          { label: "Densità di corrente totale", latex: "\\vec{J}_{\\text{tot}} = \\sum_s \\rho_s \\vec{v}_{d,s}" }
        ]
      },

      {
        id: "s12-continuita",
        type: "section",
        title: "Equazione di continuità",
        icon: "♻️",
        content: `<p>Introduciamo ora un principio fondamentale: la <strong>conservazione della carica elettrica</strong>, che in forma di equazione locale prende il nome di equazione di continuità.</p>`,
        subsections: [
          {
            subtitle: "Analogia dell'Università (nota del Prof.)",
            content: `<blockquote><p>Cosa significa che una corrente è stazionaria? Immaginiamo l'università come un volume delimitato da una superficie chiusa (le porte dell'edificio). Per avere un sistema <em>stazionario</em> non basta che nel corso della giornata entrino ed escano tanti studenti quanti: bisogna che, <strong>in ogni istante</strong>, la portata di studenti in ingresso sia uguale alla portata di studenti in uscita e che, inoltre, le portate stesse non cambino nel tempo. Pensiamo per esempio a un flusso costante di $10$ studenti al minuto che entrano dall'ingresso principale e a un flusso costante di $10$ studenti al minuto che escono dall'uscita secondaria: in queste condizioni il numero di persone presenti nell'edificio non cambia mai.</p>
            <p>Al contrario, il caso di una giornata tipica (ingressi concentrati la mattina, uscite concentrate la sera) <strong>non</strong> è stazionario, pur avendo bilancio netto nullo sulle $24$ ore: nel pomeriggio l'edificio è pieno, di notte è vuoto. Il solo bilancio nullo su un intervallo finito permette accumuli intermedi e dunque non garantisce la stazionarietà.</p></blockquote>
            <p>Allo stesso modo, per una corrente elettrica, la <strong>condizione di stazionarietà</strong> richiede che in un qualsiasi volume fissato la carica che entra per unità di tempo sia uguale, istante per istante, alla carica che esce per unità di tempo, e che le grandezze locali ($\\vec{J}$ e $\\rho$) non dipendano dal tempo. Non c'è accumulo di carica in nessun momento.</p>`
          },
          {
            subtitle: "Bilancio di carica e forma integrale",
            content: `<p>Consideriamo un volume $V$ <strong>fisso</strong> nello spazio, delimitato da una superficie chiusa $S$ con versore normale $\\hat{n}$ <strong>uscente</strong>. La carica totale $Q(t)$ contenuta nel volume al tempo $t$ può variare solo se c'è un flusso netto di carica attraverso la superficie $S$.</p>
            <p>La carica che esce dal volume nell'intervallo di tempo $[t,\\,t+\\Delta t]$ è l'<strong>integrale nel tempo</strong> del flusso uscente di $\\vec{J}$: il flusso, in generale, cambia durante l'intervallo e non può essere semplicemente moltiplicato per $\\Delta t$. Vale dunque il bilancio esatto</p>
            <p>$$Q(t+\\Delta t) - Q(t) = - \\int_{t}^{t+\\Delta t} \\left( \\oint_S \\vec{J}(\\vec{r},\\tau) \\cdot \\hat{n} \\, dS \\right) d\\tau$$</p>
            <p>Il segno meno indica che un flusso uscente netto positivo ($\\oint \\gt 0$) riduce la carica interna.</p>
            <p><strong>Perché in classe si scrive la forma approssimata.</strong> Se l'intervallo $\\Delta t$ è abbastanza piccolo, il flusso si può considerare costante e pari al suo valore all'istante $t$. Si ottiene allora l'approssimazione al primo ordine</p>
            <p>$$Q(t+\\Delta t) - Q(t) = - \\Delta t \\oint_S \\vec{J}(\\vec{r},t) \\cdot \\hat{n} \\, dS + o(\\Delta t)$$</p>
            <p>che <strong>non</strong> è esatta su un intervallo finito, ma diventa esatta nel limite $\\Delta t \\to 0$ (è proprio il termine $o(\\Delta t)$ che si annulla più rapidamente di $\\Delta t$ quando si divide e si passa al limite).</p>
            <p>Riorganizzando i termini e dividendo per $\\Delta t$:</p>
            <p>$$\\frac{Q(t+\\Delta t) - Q(t)}{\\Delta t} = - \\frac{1}{\\Delta t}\\int_{t}^{t+\\Delta t} \\left( \\oint_S \\vec{J} \\cdot \\hat{n} \\, dS \\right) d\\tau$$</p>
            <p>Passando al limite per $\\Delta t \\to 0$, il membro di sinistra diventa la derivata di $Q$ e il membro di destra il valore istantaneo del flusso, e otteniamo l'<strong>equazione di continuità in forma integrale</strong>:</p>
            <p>$$\\frac{dQ}{dt} = - \\oint_S \\vec{J} \\cdot \\hat{n} \\, dS$$</p>
            <p>Questa equazione afferma che la rapidità con cui varia la carica totale all'interno di un volume è uguale al flusso netto di corrente <em>entrante</em> attraverso la sua superficie.</p>`
          },
          {
            subtitle: "Forma differenziale",
            content: `<p>Per ottenere una formulazione locale, applichiamo il <strong>teorema della divergenza</strong> al termine di destra:</p>
            <p>$$\\oint_S \\vec{J} \\cdot \\hat{n} \\, dS = \\int_V (\\nabla \\cdot \\vec{J}) \\, dV$$</p>
            <p>La carica totale $Q$ può essere espressa come l'integrale della densità di carica totale $\\rho$ sul volume $V$: $Q(t) = \\int_V \\rho(x,y,z,t) \\, dV$. La sua derivata rispetto al tempo, <strong>poiché il volume di integrazione è fisso</strong>, diventa:</p>
            <p>$$\\frac{dQ}{dt} = \\frac{d}{dt} \\int_V \\rho \\, dV = \\int_V \\frac{\\partial \\rho}{\\partial t} \\, dV$$</p>
            <p>Sostituendo nell'equazione di continuità integrale:</p>
            <p>$$\\int_V \\frac{\\partial \\rho}{\\partial t} \\, dV = - \\int_V (\\nabla \\cdot \\vec{J}) \\, dV$$</p>
            <p>Portando tutto sotto un unico integrale:</p>
            <p>$$\\int_V \\left( \\nabla \\cdot \\vec{J} + \\frac{\\partial \\rho}{\\partial t} \\right) dV = 0$$</p>
            <p>Poiché questa relazione deve valere per un <strong>qualsiasi</strong> volume arbitrario $V$, l'unica possibilità è che l'integrando sia identicamente nullo in ogni punto dello spazio.</p>`
          },
          {
            subtitle: "Proposizione — Equazione di continuità della carica elettrica",
            content: `<p>Sia $V$ un volume <strong>fisso</strong> nello spazio, delimitato dalla superficie chiusa $S$ orientata con versore normale $\\hat{n}$ <strong>uscente</strong>. Siano $\\rho = \\rho_{\\text{tot}}$ la densità di carica totale e $\\vec{J} = \\vec{J}_{\\text{tot}} = \\sum_s \\rho_s \\vec{v}_{d,s}$ la densità di corrente totale. Allora:</p>
            <p><strong>1) Forma integrale</strong></p>
            <p>$$\\frac{dQ}{dt} = - \\oint_S \\vec{J} \\cdot \\hat{n} \\, dS, \\qquad Q(t) = \\int_V \\rho \\, dV$$</p>
            <p><strong>2) Forma differenziale (o locale)</strong></p>
            <p>$$\\nabla \\cdot \\vec{J} + \\frac{\\partial \\rho}{\\partial t} = 0$$</p>
            <p>Le due forme sono equivalenti (si passa dall'una all'altra con il teorema della divergenza e l'arbitrarietà di $V$) ed esprimono entrambe la <strong>conservazione locale della carica elettrica</strong>: la carica non può né comparire né scomparire in un punto, può soltanto fluire.</p>
            <p>Questa è una delle equazioni fondamentali dell'elettromagnetismo.</p>`
          }
        ],
        formulas: [
          { label: "Continuità — forma integrale", latex: "\\frac{dQ}{dt} = - \\oint_S \\vec{J} \\cdot \\hat{n} \\, dS" },
          { label: "Continuità — forma differenziale", latex: "\\nabla \\cdot \\vec{J} + \\frac{\\partial \\rho}{\\partial t} = 0" }
        ]
      },

      {
        id: "s12-sorgenti-pozzi",
        type: "note_box",
        title: "Sorgenti e pozzi — e i limiti dell'analogia idraulica",
        icon: "🚰",
        content: `<p>L'equazione di continuità lega la divergenza del campo $\\vec{J}$ alla variazione temporale della densità di carica $\\rho$:</p>
        <ul>
          <li>se in un punto $\\partial \\rho / \\partial t \\gt 0$, la densità di carica sta aumentando: questo implica $\\nabla \\cdot \\vec{J} \\lt 0$, cioè c'è un flusso netto di corrente <strong>entrante</strong> in quel punto (un "pozzo" di corrente);</li>
          <li>se $\\partial \\rho / \\partial t \\lt 0$, la densità di carica sta diminuendo: questo implica $\\nabla \\cdot \\vec{J} \\gt 0$, cioè c'è un flusso netto di corrente <strong>uscente</strong> da quel punto (una "sorgente" di corrente).</li>
        </ul>
        <p>L'analogia idraulica va formulata al livello del <strong>bilancio integrale</strong>. Per un serbatoio fisso, delimitato da una superficie chiusa, vale</p>
        <p>$$\\frac{dM}{dt} = \\Phi_{\\text{entrante}} - \\Phi_{\\text{uscente}}$$</p>
        <p>cioè la massa d'acqua $M$ contenuta varia come differenza fra la portata entrante e quella uscente. Se il rubinetto di scarico è aperto e non entra acqua, la portata uscente è positiva e si ha $dM/dt \\lt 0$: la massa contenuta diminuisce, esattamente come la carica di un volume attraversato da un flusso netto uscente di $\\vec{J}$.</p>
        <p><strong>Attenzione, però, a non tradurre troppo in fretta questo bilancio globale in un'affermazione locale:</strong> la diminuzione della massa totale <strong>non</strong> significa che la densità dell'acqua diminuisca in ogni punto del serbatoio. Per un liquido praticamente incomprimibile la densità locale resta costante e ciò che scende è il <em>livello</em>, cioè il volume occupato. L'enunciato locale $\\partial \\rho/\\partial t \\lt 0$ in un punto significa invece che <em>in quel punto</em> la densità diminuisce, e corrisponde a $\\nabla \\cdot \\vec{J} \\gt 0$ nello stesso punto.</p>`,
        extra_content: `<p><strong>Perché l'analogia della neve che si scioglie va maneggiata con cura.</strong> Nell'immagine della sorgente di un fiume alimentata dalla neve che fonde intervengono <strong>due fasi diverse</strong>: la densità si riferisce alla neve, il flusso all'acqua liquida. Il bilancio della sola neve contiene allora un termine aggiuntivo di conversione di fase (neve $\\to$ acqua) e non ha la forma dell'equazione di continuità $\\nabla \\cdot \\vec{J} + \\partial \\rho/\\partial t = 0$. L'analogia è suggestiva per l'idea di "sorgente", ma non va usata come esempio quantitativo della continuità.</p>`
      },

      {
        id: "s12-integrazione-nodo",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "➕",
        content: `<p><strong>Esempio illustrativo: bilancio di carica in un nodo.</strong> Questo esempio numerico non è stato svolto a lezione: serve solo a mostrare come si usa in pratica l'equazione di continuità in forma integrale e come si gestiscono i segni.</p>
        <p>Consideriamo un volume $V$ (per esempio una piccola regione di un circuito, un "nodo") attraversato da due soli conduttori: nel primo entra una corrente $I_{\\text{in}} = 3$ A, dal secondo esce una corrente $I_{\\text{out}} = 2$ A. Entrambe le correnti sono costanti nel tempo.</p>
        <p><strong>Passo 1 — orientare la normale.</strong> Scegliamo, come nella proposizione, la normale $\\hat{n}$ <strong>uscente</strong> da $S$. Con questa scelta una corrente uscente contribuisce al flusso con segno $+$, una entrante con segno $-$.</p>
        <p><strong>Passo 2 — calcolare il flusso netto.</strong></p>
        <p>$$\\oint_S \\vec{J} \\cdot \\hat{n} \\, dS = I_{\\text{out}} - I_{\\text{in}} = 2 - 3 = -1 \\ \\text{A}$$</p>
        <p>Il flusso netto è negativo: complessivamente entra più carica di quanta ne esce.</p>
        <p><strong>Passo 3 — applicare la continuità.</strong></p>
        <p>$$\\frac{dQ}{dt} = - \\oint_S \\vec{J} \\cdot \\hat{n} \\, dS = -(-1\\ \\text{A}) = +1 \\ \\frac{\\text{C}}{\\text{s}}$$</p>
        <p>La carica contenuta nel volume <strong>aumenta</strong> di $1$ C ogni secondo.</p>
        <p><strong>Passo 4 — integrare nel tempo.</strong> Poiché $dQ/dt$ è costante, in un intervallo $\\Delta t = 2$ s:</p>
        <p>$$\\Delta Q = \\frac{dQ}{dt} \\, \\Delta t = 1 \\ \\frac{\\text{C}}{\\text{s}} \\cdot 2 \\ \\text{s} = 2 \\ \\text{C}$$</p>
        <p><strong>Commento.</strong> Il sistema <strong>non</strong> è in regime stazionario: la carica si accumula nel volume (per esempio su un'armatura di condensatore). Il regime stazionario corrisponderebbe a $I_{\\text{in}} = I_{\\text{out}}$, cioè $dQ/dt = 0$: è esattamente la legge dei nodi di Kirchhoff, che non è altro che l'equazione di continuità applicata a un nodo in condizioni stazionarie.</p>`
      },

      {
        id: "s12-regime-stazionario",
        type: "section",
        title: "Regime stazionario e solenoidalità di $\\vec{J}$",
        icon: "🔄",
        content: `<p>Un sistema si dice in <strong>regime stazionario</strong> quando le grandezze fisiche che lo descrivono non variano nel tempo in nessun punto dello spazio. Nel nostro contesto ciò significa</p>
        <p>$$\\frac{\\partial \\vec{J}}{\\partial t} = 0 \\quad \\text{e} \\quad \\frac{\\partial \\rho}{\\partial t} = 0 \\qquad \\text{in ogni punto.}$$</p>
        <p>In particolare la densità di corrente $\\vec{J}(\\vec{r})$ e la densità di carica $\\rho(\\vec{r})$ dipendono solo dalla posizione. Si tratta delle stesse due condizioni già richieste nella definizione data in precedenza.</p>
        <p>In queste condizioni, l'equazione di continuità si semplifica notevolmente. Ponendo $\\partial \\rho / \\partial t = 0$, otteniamo:</p>
        <p>$$\\nabla \\cdot \\vec{J} = 0$$</p>
        <p>cioè il campo vettoriale $\\vec{J}$ è <strong>solenoidale</strong>.</p>
        <p>In regime stazionario, inoltre, il flusso del vettore densità di corrente attraverso una qualsiasi superficie chiusa è nullo:</p>
        <p>$$\\oint_S \\vec{J} \\cdot \\hat{n} \\, dS = \\int_V (\\nabla \\cdot \\vec{J}) \\, dV = 0$$</p>
        <p>Ciò significa che tanta carica entra in un volume quanta ne esce, <strong>istante per istante</strong>. Non ci sono né sorgenti né pozzi di carica.</p>`,
        subsections: [
          {
            subtitle: "Condizione necessaria, non sufficiente",
            content: `<p>La relazione $\\nabla \\cdot \\vec{J} = 0$ è una <strong>conseguenza</strong> del regime stazionario, non una sua caratterizzazione completa: garantisce l'assenza di accumulo locale di carica, ma <strong>non</strong> implica che la corrente sia indipendente dal tempo.</p>
            <p><strong>Controesempio:</strong> un campo spazialmente uniforme lungo una direzione fissa,</p>
            <p>$$\\vec{J}(\\vec{r},t) = J_0 \\cos(\\omega t) \\, \\hat{x}$$</p>
            <p>ha $\\nabla \\cdot \\vec{J} = 0$ in ogni istante (non dipende dalle coordinate), e quindi $\\partial \\rho/\\partial t = 0$, eppure $\\partial \\vec{J}/\\partial t \\neq 0$: la corrente oscilla nel tempo. Dunque</p>
            <p>$$\\text{regime stazionario} \\ \\Rightarrow \\ \\nabla \\cdot \\vec{J} = 0, \\qquad \\nabla \\cdot \\vec{J} = 0 \\ \\not\\Rightarrow \\ \\text{regime stazionario}$$</p>
            <p>Quando si parla di <strong>correnti stazionarie</strong> si intende che valgono <strong>entrambe</strong> le condizioni della definizione.</p>`
          }
        ],
        formulas: [
          { label: "Solenoidalità di J (regime stazionario)", latex: "\\nabla \\cdot \\vec{J} = 0" },
          { label: "Flusso nullo su superficie chiusa", latex: "\\oint_S \\vec{J} \\cdot \\hat{n} \\, dS = 0" }
        ],
        quote: {
          text: "La condizione di stazionarietà è un'idealizzazione, ma è un'ottima approssimazione per molti circuiti elettrici in corrente continua. Pensate all'impianto idraulico di casa: se funziona correttamente, in ogni istante la portata d'acqua che entra dal contatore è uguale a quella che esce dagli scarichi e, inoltre, le portate stesse e la distribuzione dell'acqua nelle tubature non cambiano nel tempo. Solo con entrambe le condizioni il sistema è in regime stazionario. Se si ottura uno scarico, l'acqua inizia ad accumularsi: il sistema non è più stazionario, il bilancio della regione dà $dM/dt \\gt 0$ e il flusso netto uscente diventa negativo. A quel punto, chiamate l'idraulico dicendo: «Non sono più in condizioni di stazionarietà!»",
          src: "Nota del Prof."
        },
        extra_content: `<p><strong>Da notare sul controesempio idraulico:</strong> l'accumulo d'acqua nella regione si esprime correttamente come $dM/dt \\gt 0$ con flusso netto uscente negativo attraverso la superficie chiusa. Non si deve dedurre da questo che la densità locale dell'acqua aumenti punto per punto: per un liquido incomprimibile ciò che cresce è il volume occupato, non $\\rho$.</p>`
      },

      {
        id: "s12-campo-e-corrente",
        type: "alert_box",
        title: "Campo elettrico e corrente di conduzione — tre precisazioni",
        icon: "⚠️",
        content: `<p>Che cosa "spinge" le cariche? La risposta corretta, e la più utile per i circuiti che studieremo, va formulata con attenzione.</p>
        <p>In un <strong>conduttore ohmico</strong> la componente di corrente dovuta al campo elettrico obbedisce alla legge di Ohm in forma locale</p>
        <p>$$\\vec{J} = \\sigma \\vec{E}$$</p>
        <p>dove $\\sigma$ è la conduttività del materiale. Per un tratto resistivo, nelle usuali condizioni circuitali, è quindi una <strong>differenza di potenziale</strong> applicata ai suoi capi a sostenere la corrente di conduzione: integrando $\\vec{E}$ lungo il conduttore si ritrova la relazione $V = RI$ che useremo nei circuiti.</p>
        <p>Sono però necessarie tre precisazioni, per evitare generalizzazioni scorrette:</p>
        <ul>
          <li><strong>Moto dei portatori $\\neq$ corrente.</strong> I portatori di carica sono sempre in <strong>moto termico</strong> disordinato, anche in assenza di qualunque campo: in quel caso la velocità <em>media</em> è nulla e non c'è corrente netta, ma le cariche non sono ferme. La corrente è un effetto collettivo, legato alla velocità di deriva $\\vec{v}_d$.</li>
          <li><strong>Esistono correnti sostenute da altri meccanismi.</strong> Correnti di diffusione (dovute a gradienti di concentrazione dei portatori), correnti indotte da campi elettrici non conservativi (per i quali il potenziale non è nemmeno definibile) e correnti nelle pile dovute a forze di origine chimica non sono descritte dal solo schema "differenza di potenziale $\\to$ corrente".</li>
          <li><strong>Potenziali uguali $\\neq$ campo nullo.</strong> Il fatto che due punti abbiano lo stesso potenziale non implica che il campo elettrico sia nullo lungo il percorso che li congiunge: significa soltanto che l'integrale di linea $\\int_A^B \\vec{E} \\cdot d\\vec{l}$ lungo quel percorso è nullo (la <em>circolazione</em> si riferisce invece a un cammino chiuso). Il campo può essere diverso da zero tratto per tratto.</li>
        </ul>
        <p>L'analogia idraulica (l'acqua scorre da una quota più alta a una più bassa) resta utile come immagine intuitiva per il tratto resistivo di un circuito in corrente continua, purché si tengano presenti questi limiti.</p>`
      },

      {
        id: "s12-esercizi-box",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        icon: "📝",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },

      {
        id: "s12-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1 — Energia di un condensatore dal lavoro di carica",
        kind: "teoria",
        source: "integrazione",
        icon: "✎",
        content: `<p>Ricava, partendo dal lavoro infinitesimo di carica, l'energia elettrostatica immagazzinata in un condensatore di capacità $C$ portato alla carica finale $Q$. Spiega in particolare il significato della grandezza $V'$ che compare in $dW_{est}=V'\\,dq'$ e perché il lavoro del campo ha segno opposto a quello dell'agente esterno. Scrivi infine le tre forme equivalenti dell'energia.</p>`,
        solution: `<p><strong>(i) Processo quasistatico e significato di $V'$.</strong> Si carica il condensatore trasferendo cariche infinitesime $dq'$ dall'armatura negativa a quella positiva. Assumiamo due ipotesi <em>distinte</em>: il processo è <em>quasistatico</em> (abbastanza lento perché in ogni istante il sistema sia in equilibrio elettrostatico) ed è <em>privo di dissipazioni</em> (idealizzazione aggiuntiva, non conseguenza automatica della lentezza). La grandezza $V'$ è la differenza di potenziale <strong>istantanea</strong> fra le due armature (non il potenziale assoluto di un conduttore, e la carica non viene portata dall'infinito).</p>
        <p><strong>(ii) Segno dei due lavori.</strong> Poiché $dq'$ viene spostata contro il campo già presente,</p>
        <p>$$dW_{est} = +V'\\,dq' = dU, \\qquad dW_{campo} = -V'\\,dq'$$</p>
        <p>cioè i due lavori hanno somma nulla e, in assenza di dissipazioni, tutto il lavoro esterno si accumula come energia elettrostatica.</p>
        <p><strong>(iii) Integrazione.</strong> Durante il processo $C$ resta costante (dipende solo dalla geometria e dal dielettrico), quindi $V'=q'/C$ e</p>
        <p>$$W = \\int_0^Q V'\\,dq' = \\int_0^Q \\frac{q'}{C}\\,dq' = \\frac{1}{C}\\left[\\frac{(q')^2}{2}\\right]_0^Q = \\frac{1}{2}\\frac{Q^2}{C}$$</p>
        <p><strong>(iv) Forme equivalenti.</strong> Usando $Q=CV$ si ottiene $W=\\frac{1}{2}\\frac{(CV)^2}{C}=\\frac{1}{2}CV^2$ e, con $C=Q/V$, $W=\\frac{1}{2}QV$. In sintesi</p>
        <p>$$W=\\frac{1}{2}\\frac{Q^2}{C}=\\frac{1}{2}CV^2=\\frac{1}{2}QV$$</p>
        <p>con $Q$ carica (in modulo) di un'armatura, $V$ differenza di potenziale, $W$ in joule.</p>
        <p><strong>Commento.</strong> Il fattore $\\tfrac12$ nasce dal fatto che $V'$ cresce linearmente con $q'$ durante la carica: il lavoro non è $QV$ ma il valore medio $\\tfrac12 V$ moltiplicato per $Q$.</p>`
      },

      {
        id: "s12-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2 — Equazione di continuità: forme e ipotesi",
        kind: "teoria",
        source: "integrazione",
        icon: "✎",
        content: `<p>Enuncia l'equazione di continuità della carica elettrica in forma integrale e in forma differenziale, precisando le ipotesi sul volume $V$ e sull'orientazione della normale, e indica quali passaggi permettono di dedurre la forma locale da quella integrale. Specifica inoltre se $\\rho$ e $\\vec{J}$ sono densità parziali o totali.</p>`,
        solution: `<p><strong>Ipotesi.</strong> $V$ è un volume <strong>fisso</strong> nello spazio (non deformabile e non in moto), delimitato dalla superficie chiusa $S$ orientata con versore normale $\\hat{n}$ <strong>uscente</strong>; $\\rho = \\rho_{\\text{tot}}$ è la densità di carica <strong>totale</strong> (cariche mobili più cariche fisse) e $\\vec{J} = \\vec{J}_{\\text{tot}} = \\sum_s \\rho_s \\vec{v}_{d,s}$ la densità di corrente <strong>totale</strong>.</p>
        <p><strong>Forma integrale.</strong></p>
        <p>$$\\frac{dQ}{dt} = -\\oint_S \\vec{J}\\cdot\\hat{n}\\,dS, \\qquad Q(t) = \\int_V \\rho\\,dV$$</p>
        <p>Il segno meno è dovuto alla scelta di $\\hat{n}$ uscente, così che un flusso uscente positivo fa diminuire la carica interna.</p>
        <p><strong>Forma differenziale.</strong></p>
        <p>$$\\nabla\\cdot\\vec{J} + \\frac{\\partial \\rho}{\\partial t} = 0$$</p>
        <p><strong>Passaggi dalla forma integrale a quella locale.</strong></p>
        <p>1) Poiché $V$ è fisso, la derivata temporale passa sotto il segno di integrale:</p>
        <p>$$\\frac{dQ}{dt} = \\frac{d}{dt}\\int_V \\rho\\,dV = \\int_V \\frac{\\partial\\rho}{\\partial t}\\,dV$$</p>
        <p>2) Il teorema della divergenza trasforma il flusso in un integrale di volume (serve $\\vec{J}$ di classe $C^1$ in $V$ e $S$ regolare):</p>
        <p>$$\\oint_S \\vec{J}\\cdot\\hat{n}\\,dS = \\int_V (\\nabla\\cdot\\vec{J})\\,dV$$</p>
        <p>3) Sostituendo si ottiene</p>
        <p>$$\\int_V \\left(\\nabla\\cdot\\vec{J} + \\frac{\\partial\\rho}{\\partial t}\\right)dV = 0$$</p>
        <p>e, valendo per <strong>ogni</strong> volume $V$ con integrando continuo, l'integrando deve essere identicamente nullo.</p>
        <p><strong>Conclusione.</strong> Le due forme sono equivalenti ed esprimono la conservazione <strong>locale</strong> della carica: la carica non può comparire né scomparire in un punto, può soltanto fluire.</p>`
      },

      {
        id: "s12-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3 — Densità di energia: locale e media",
        kind: "teoria",
        source: "integrazione",
        icon: "✎",
        content: `<p>Definisci la densità di energia del campo elettrostatico nel vuoto e mostra come la si ottiene dal caso del condensatore piano. Spiega poi la differenza fra densità locale $u_E(\\vec{r})$ e rapporto medio $W/\\tau$, precisando quando le due grandezze coincidono.</p>`,
        solution: `<p>Per un condensatore piano con armature di area $\\Sigma$ a distanza $d$ nel vuoto si ha $C=\\dfrac{\\epsilon_0\\Sigma}{d}$ e, se il campo interno è uniforme, $V=Ed$. Allora</p>
        <p>$$W=\\frac{1}{2}CV^2=\\frac{1}{2}\\frac{\\epsilon_0\\Sigma}{d}(Ed)^2=\\frac{1}{2}\\epsilon_0E^2(\\Sigma d)=\\frac{1}{2}\\epsilon_0E^2\\tau$$</p>
        <p>dove $\\tau=\\Sigma d$ è il volume fra le armature. L'energia appare dunque distribuita nello spazio occupato dal campo, non "dentro" le armature. Si definisce allora la densità di energia elettrostatica come grandezza <strong>locale</strong></p>
        <p>$$u_E(\\vec{r})=\\frac{dW}{d\\tau}=\\frac{1}{2}\\epsilon_0\\left|\\vec{E}(\\vec{r})\\right|^2$$</p>
        <p>misurata in J/m$^3$ (con $E$ in V/m e $\\epsilon_0\\simeq 8{,}85\\times10^{-12}$ F/m). L'energia contenuta in una regione si ottiene integrando: $W=\\int_\\tau u_E\\,d\\tau=\\frac{1}{2}\\epsilon_0\\int_\\tau|\\vec{E}|^2\\,d\\tau$.</p>
        <p>Il rapporto $W/\\tau$ è invece soltanto la densità <strong>media</strong> sul volume $\\tau$: ha carattere globale e non descrive il singolo punto. Le due grandezze coincidono quando $|\\vec{E}|$ è costante nella regione considerata (condensatore piano ideale, dove $W/\\tau=\\frac12\\epsilon_0E^2$). Se il campo varia da punto a punto, come nel condensatore sferico dove $E(r)\\propto 1/r^2$, $W/\\tau$ non ha significato locale e l'energia va calcolata solo con l'integrale di $u_E$.</p>`
      },

      {
        id: "s12-es-teoria-4",
        type: "esercizio",
        title: "Teoria 4 — $\\nabla \\cdot \\vec{J} = 0$: necessaria ma non sufficiente",
        kind: "teoria",
        source: "integrazione",
        icon: "✎",
        content: `<p>Dimostra che la condizione $\\nabla\\cdot\\vec{J} = 0$ è necessaria ma non sufficiente perché un sistema sia in regime stazionario, esibendo un controesempio esplicito.</p>`,
        solution: `<p><strong>(i) Necessità.</strong> Se il regime è stazionario allora per definizione $\\frac{\\partial\\rho}{\\partial t} = 0$ in ogni punto; sostituendo nell'equazione di continuità $\\nabla\\cdot\\vec{J} + \\frac{\\partial\\rho}{\\partial t} = 0$ si ottiene $\\nabla\\cdot\\vec{J} = 0$, cioè $\\vec{J}$ solenoidale.</p>
        <p><strong>(ii) Non sufficienza (controesempio).</strong> Si consideri il campo spazialmente uniforme</p>
        <p>$$\\vec{J}(\\vec{r},t) = J_0\\cos(\\omega t)\\,\\hat{x}$$</p>
        <p>Le sue componenti non dipendono dalle coordinate, dunque</p>
        <p>$$\\nabla\\cdot\\vec{J} = \\frac{\\partial}{\\partial x}\\big(J_0\\cos(\\omega t)\\big) = 0 \\quad \\text{in ogni istante}, \\qquad \\frac{\\partial\\rho}{\\partial t} = -\\nabla\\cdot\\vec{J} = 0$$</p>
        <p>cioè non c'è alcun accumulo locale di carica. Tuttavia</p>
        <p>$$\\frac{\\partial\\vec{J}}{\\partial t} = -J_0\\omega\\sin(\\omega t)\\,\\hat{x} \\neq \\vec{0}$$</p>
        <p>quindi la corrente dipende dal tempo e il sistema non è stazionario.</p>
        <p><strong>(iii) Conclusione.</strong> Regime stazionario $\\Rightarrow \\nabla\\cdot\\vec{J} = 0$, ma $\\nabla\\cdot\\vec{J} = 0 \\not\\Rightarrow$ regime stazionario; parlando di <em>correnti stazionarie</em> si richiedono entrambe le condizioni $\\partial\\vec{J}/\\partial t = 0$ e $\\partial\\rho/\\partial t = 0$.</p>`
      },

      {
        id: "s12-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1 — Condensatore piano: energia e densità di energia",
        kind: "scritto",
        source: "integrazione",
        icon: "✎",
        content: `<p>Un condensatore a facce piane e parallele ha armature di area $\\Sigma=100\\ \\text{cm}^2$ separate da $d=1{,}0\\ \\text{mm}$ di vuoto ed è collegato a una differenza di potenziale $V=200\\ \\text{V}$. Calcolare: (a) la capacità $C$ e la carica $Q$ su un'armatura; (b) l'energia immagazzinata $W$; (c) il campo elettrico $E$ fra le armature e la densità di energia $u_E$; (d) verificare che $u_E\\,\\tau=W$, con $\\tau$ volume fra le armature. Si usi $\\epsilon_0=8{,}85\\times10^{-12}\\ \\text{F/m}$.</p>`,
        solution: `<p><strong>(a) Capacità e carica.</strong> Con $\\Sigma=100\\ \\text{cm}^2=1{,}0\\times10^{-2}\\ \\text{m}^2$ e $d=1{,}0\\times10^{-3}\\ \\text{m}$:</p>
        <p>$$C = \\frac{\\epsilon_0\\Sigma}{d} = \\frac{(8{,}85\\times10^{-12})(1{,}0\\times10^{-2})}{1{,}0\\times10^{-3}} = 8{,}85\\times10^{-11}\\ \\text{F} = 88{,}5\\ \\text{pF}$$</p>
        <p>$$Q = CV = (8{,}85\\times10^{-11})(200) = 1{,}77\\times10^{-8}\\ \\text{C} = 17{,}7\\ \\text{nC}$$</p>
        <p><strong>(b) Energia immagazzinata.</strong></p>
        <p>$$W = \\frac{1}{2}CV^2 = \\frac{1}{2}(8{,}85\\times10^{-11})(4{,}0\\times10^{4}) = 1{,}77\\times10^{-6}\\ \\text{J} = 1{,}77\\ \\mu\\text{J}$$</p>
        <p>Lo stesso valore si ottiene da $W=\\frac12 QV=\\frac12(1{,}77\\times10^{-8})(200)=1{,}77\\times10^{-6}$ J e da $W=\\frac12 Q^2/C$.</p>
        <p><strong>(c) Campo e densità di energia.</strong> Il campo fra le armature è uniforme e $V=Ed$, quindi</p>
        <p>$$E = \\frac{V}{d} = \\frac{200}{1{,}0\\times10^{-3}} = 2{,}0\\times10^{5}\\ \\text{V/m}$$</p>
        <p>$$u_E = \\frac{1}{2}\\epsilon_0E^2 = \\frac{1}{2}(8{,}85\\times10^{-12})(4{,}0\\times10^{10}) = 0{,}177\\ \\text{J/m}^3$$</p>
        <p><strong>(d) Verifica.</strong> Il volume è $\\tau=\\Sigma d=(1{,}0\\times10^{-2})(1{,}0\\times10^{-3})=1{,}0\\times10^{-5}\\ \\text{m}^3$, dunque</p>
        <p>$$u_E\\,\\tau = (0{,}177)(1{,}0\\times10^{-5}) = 1{,}77\\times10^{-6}\\ \\text{J} = W$$</p>
        <p>coerente con $W=\\frac12\\epsilon_0E^2\\tau$. Qui densità locale e densità media coincidono perché $|\\vec{E}|$ è costante nella regione fra le armature.</p>`
      },

      {
        id: "s12-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2 — Velocità di deriva in un filo di rame",
        kind: "scritto",
        source: "integrazione",
        icon: "✎",
        content: `<p>Un filo di rame di sezione uniforme $S = 2{,}0\\ \\text{mm}^2$ è percorso da una corrente continua $I = 10\\ \\text{A}$ distribuita uniformemente sulla sezione. La densità di elettroni di conduzione è $n = 8{,}5\\cdot 10^{28}\\ \\text{m}^{-3}$ e $e = 1{,}6\\cdot10^{-19}\\ \\text{C}$. Calcola il modulo di $\\vec{J}$, il modulo della velocità di deriva $v_d$ e il tempo che un elettrone impiega mediamente a percorrere $1\\ \\text{m}$ di filo.</p>`,
        solution: `<p><strong>(i) Modulo della densità di corrente.</strong> Poiché $\\vec{J}$ è uniforme sulla sezione e parallelo a $\\hat{n}$, dalla definizione $I = \\int_\\Sigma \\vec{J}\\cdot\\hat{n}\\,dS$ segue $I = J S$, quindi</p>
        <p>$$J = \\frac{I}{S} = \\frac{10\\ \\text{A}}{2{,}0\\cdot10^{-6}\\ \\text{m}^2} = 5{,}0\\cdot10^{6}\\ \\text{A/m}^2$$</p>
        <p><strong>(ii) Velocità di deriva.</strong> Dalla relazione $\\vec{J} = \\rho_-\\vec{v}_{d,-}$ con $|\\rho_-| = n e$ si ricava</p>
        <p>$$v_d = \\frac{J}{n e} = \\frac{5{,}0\\cdot10^{6}}{(8{,}5\\cdot10^{28})(1{,}6\\cdot10^{-19})} = \\frac{5{,}0\\cdot10^{6}}{1{,}36\\cdot10^{10}} \\simeq 3{,}7\\cdot10^{-4}\\ \\text{m/s}$$</p>
        <p><strong>(iii) Tempo di percorrenza.</strong> Per $L = 1\\ \\text{m}$:</p>
        <p>$$t = \\frac{L}{v_d} \\simeq \\frac{1\\ \\text{m}}{3{,}7\\cdot10^{-4}\\ \\text{m/s}} \\simeq 2{,}7\\cdot10^{3}\\ \\text{s} \\simeq 45\\ \\text{min}$$</p>
        <p><strong>Commento.</strong> La velocità di deriva $\\vec{v}_d$ è diretta in verso opposto a $\\vec{J}$, perché i portatori sono negativi. La sua piccolezza non contrasta con la rapidità di propagazione del segnale elettrico: la corrente è un effetto collettivo sovrapposto al moto termico disordinato.</p>`
      },

      {
        id: "s12-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3 — Energia di una sfera conduttrice carica",
        kind: "scritto",
        source: "integrazione",
        icon: "✎",
        content: `<p>Una sfera conduttrice isolata di raggio $R=10\\ \\text{cm}$ porta la carica $Q=2{,}0\\times10^{-8}\\ \\text{C}$. (a) Calcolare l'energia elettrostatica totale integrando la densità di energia su tutto lo spazio. (b) Verificare il risultato con $W=\\frac12 Q^2/C$, sapendo che $C=4\\pi\\epsilon_0R$. (c) Determinare quale frazione dell'energia totale è contenuta nella regione $R\\le r\\le 2R$. (d) Valutare numericamente $W$.</p>`,
        solution: `<p><strong>(a) Integrazione della densità di energia.</strong> Per una sfera conduttrice in equilibrio il campo è nullo all'interno ($r \\lt R$), mentre per $r \\gt R$ il teorema di Gauss con superficie sferica di raggio $r$ dà $E(r)\\,4\\pi r^2=Q/\\epsilon_0$, cioè $E(r)=\\dfrac{1}{4\\pi\\epsilon_0}\\dfrac{Q}{r^2}$. Il modulo del campo non è costante, quindi occorre la densità locale</p>
        <p>$$u_E(r)=\\frac{1}{2}\\epsilon_0E(r)^2=\\frac{1}{2}\\epsilon_0\\frac{Q^2}{16\\pi^2\\epsilon_0^2r^4}=\\frac{Q^2}{32\\pi^2\\epsilon_0 r^4}$$</p>
        <p>Con il guscio sferico $d\\tau=4\\pi r^2dr$:</p>
        <p>$$dW = u_E(r)\\,4\\pi r^2dr = \\frac{Q^2}{8\\pi\\epsilon_0}\\frac{dr}{r^2}$$</p>
        <p>$$W = \\frac{Q^2}{8\\pi\\epsilon_0}\\int_R^{+\\infty}\\frac{dr}{r^2} = \\frac{Q^2}{8\\pi\\epsilon_0}\\left[-\\frac{1}{r}\\right]_R^{+\\infty} = \\frac{Q^2}{8\\pi\\epsilon_0R}$$</p>
        <p><strong>(b) Verifica con la capacità.</strong> Con $C=4\\pi\\epsilon_0R$:</p>
        <p>$$W=\\frac{1}{2}\\frac{Q^2}{4\\pi\\epsilon_0R}=\\frac{Q^2}{8\\pi\\epsilon_0R}$$</p>
        <p>e i due risultati coincidono.</p>
        <p><strong>(c) Frazione di energia nel guscio $R\\le r\\le 2R$.</strong> Limitando l'integrale a quell'intervallo:</p>
        <p>$$W_{R\\to2R} = \\frac{Q^2}{8\\pi\\epsilon_0}\\left(\\frac{1}{R}-\\frac{1}{2R}\\right) = \\frac{Q^2}{16\\pi\\epsilon_0R} = \\frac{W}{2}$$</p>
        <p>cioè il $50\\%$ dell'energia totale sta nel primo guscio di spessore $R$: l'energia è concentrata vicino alla superficie, dove il campo è più intenso.</p>
        <p><strong>(d) Valutazione numerica.</strong> Con $R=0{,}10$ m e $Q=2{,}0\\times10^{-8}$ C:</p>
        <p>$$W = \\frac{(2{,}0\\times10^{-8})^2}{8\\pi(8{,}85\\times10^{-12})(0{,}10)} = \\frac{4{,}0\\times10^{-16}}{2{,}22\\times10^{-11}} \\simeq 1{,}8\\times10^{-5}\\ \\text{J} = 18\\ \\mu\\text{J}$$</p>
        <p><strong>Commento.</strong> Il rapporto $W/\\tau$ non avrebbe qui alcun significato locale (e il volume esterno è infinito): l'unica via corretta è l'integrazione di $u_E$.</p>`
      },

      {
        id: "s12-es-scritto-4",
        type: "esercizio",
        title: "Scritto 4 — Due specie di ioni in una soluzione elettrolitica",
        kind: "scritto",
        source: "integrazione",
        icon: "✎",
        content: `<p>In una soluzione elettrolitica si muovono due specie di ioni monovalenti: ioni positivi di carica $+e$ con densità $n_+ = 2{,}0\\cdot10^{24}\\ \\text{m}^{-3}$ e velocità di deriva $v_{d+} = 3{,}0\\cdot10^{-5}\\ \\text{m/s}$ lungo $\\hat{x}$, e ioni negativi di carica $-e$ con densità $n_- = 2{,}0\\cdot10^{24}\\ \\text{m}^{-3}$ e velocità di deriva $v_{d-} = 2{,}0\\cdot10^{-5}\\ \\text{m/s}$ lungo $-\\hat{x}$. Calcola $\\vec{J}_{\\text{tot}}$, la corrente che attraversa una sezione piana $S = 0{,}50\\ \\text{cm}^2$ perpendicolare a $\\hat{x}$ e la densità di carica totale $\\rho_{\\text{tot}}$. Commenta il risultato.</p>`,
        solution: `<p><strong>(i) Contributi delle due specie.</strong></p>
        <p>$$\\vec{J}_+ = n_+ e\\,\\vec{v}_{d+} = n_+ e\\, v_{d+}\\hat{x}$$</p>
        <p>$$\\vec{J}_- = n_-(-e)\\vec{v}_{d-} = n_-(-e)(-v_{d-}\\hat{x}) = +n_- e\\, v_{d-}\\hat{x}$$</p>
        <p>Cariche di segno opposto che si muovono in versi opposti danno contributi <strong>concordi</strong>, quindi</p>
        <p>$$\\vec{J}_{\\text{tot}} = e\\,(n_+ v_{d+} + n_- v_{d-})\\,\\hat{x}$$</p>
        <p><strong>(ii) Valore numerico di $J_{\\text{tot}}$.</strong> Per ciascuna specie $n e = 2{,}0\\cdot10^{24}\\cdot1{,}6\\cdot10^{-19} = 3{,}2\\cdot10^{5}\\ \\text{C/m}^3$, e $v_{d+} + v_{d-} = 5{,}0\\cdot10^{-5}\\ \\text{m/s}$, da cui</p>
        <p>$$J_{\\text{tot}} = (3{,}2\\cdot10^{5})(5{,}0\\cdot10^{-5}) = 16\\ \\text{A/m}^2$$</p>
        <p>diretta lungo $\\hat{x}$.</p>
        <p><strong>(iii) Corrente attraverso la sezione.</strong> Scegliamo la normale $\\hat{n} = \\hat{x}$, concorde con $\\vec{J}_{\\text{tot}}$; con questa scelta la corrente risulta positiva:</p>
        <p>$$I = \\vec{J}_{\\text{tot}}\\cdot\\hat{n}\\,S = 16 \\cdot 0{,}50\\cdot10^{-4}\\ \\text{A} = 8{,}0\\cdot10^{-4}\\ \\text{A} = 0{,}80\\ \\text{mA}$$</p>
        <p>(Con la scelta opposta $\\hat{n} = -\\hat{x}$ si otterrebbe lo stesso modulo con segno negativo.)</p>
        <p><strong>(iv) Densità di carica totale.</strong> Le densità parziali sono $\\rho_+ = +3{,}2\\cdot10^{5}\\ \\text{C/m}^3$ e $\\rho_- = -3{,}2\\cdot10^{5}\\ \\text{C/m}^3$, dunque</p>
        <p>$$\\rho_{\\text{tot}} = \\rho_+ + \\rho_- = 0$$</p>
        <p><strong>Commento.</strong> La soluzione è globalmente neutra ($\\rho_{\\text{tot}} = 0$) e tuttavia trasporta corrente ($\\vec{J}_{\\text{tot}} \\neq \\vec{0}$): mentre i contributi alla corrente si sommano, le densità di carica si compensano. Essendo tutte le grandezze costanti nel tempo, il regime è stazionario e si ha $\\nabla\\cdot\\vec{J} = 0$.</p>`
      },

      {
        id: "s12-oral-box",
        type: "oral_box",
        title: "Domande tipiche all'orale su questa lezione",
        icon: "🎓",
        content: `<p>Le domande più ricorrenti su questi contenuti riguardano tre nodi concettuali:</p>
        <ul>
          <li><strong>Il fattore $1/2$ nell'energia del condensatore:</strong> perché $W = \\frac12 QV$ e non $QV$? La risposta sta nel fatto che $V'$ cresce progressivamente durante la carica.</li>
          <li><strong>La differenza fra densità locale e densità media di energia:</strong> saper dire quando $W/\\tau$ è lecito e quando serve l'integrale.</li>
          <li><strong>Stazionarietà:</strong> saper distinguere "bilancio netto nullo su un intervallo finito" da "regime stazionario", e ricordare che $\\nabla \\cdot \\vec{J} = 0$ è necessaria ma non sufficiente.</li>
        </ul>`
      }
    ],

    oral_cards: [
      {
        type: "dimostrazione",
        front: "Ricava l'energia immagazzinata in un condensatore partendo dal lavoro infinitesimo di carica.",
        back: "Si carica il condensatore con un processo <strong>quasistatico e privo di dissipazioni</strong>, trasferendo cariche $dq'$ dall'armatura negativa a quella positiva. Il lavoro esterno infinitesimo è $dW = V'\\,dq'$, con $V'$ differenza di potenziale <em>istantanea</em> fra le armature. Poiché $C$ è costante, $V' = q'/C$ e quindi $W = \\int_0^Q \\frac{q'}{C}dq' = \\frac{1}{C}\\left[\\frac{(q')^2}{2}\\right]_0^Q = \\frac{1}{2}\\frac{Q^2}{C}$. Con $Q = CV$ si ottengono le forme equivalenti $W = \\frac12 CV^2 = \\frac12 QV$."
      },
      {
        type: "tranello",
        front: "Perché l'energia di un condensatore è $\\frac12 QV$ e non $QV$?",
        back: "Perché la differenza di potenziale <strong>non è costante durante la carica</strong>: cresce linearmente con la carica già trasferita, $V' = q'/C$. Il lavoro totale è dunque $Q$ moltiplicato per il <em>valore medio</em> $\\frac12 V$, non per il valore finale $V$. Scrivere $W = QV$ sarebbe corretto solo se la tensione restasse costante a $V$ durante tutto il trasferimento."
      },
      {
        type: "definizione",
        front: "Definisci la densità di energia del campo elettrostatico nel vuoto e scrivi come si ottiene l'energia totale in una regione.",
        back: "È la grandezza <strong>locale</strong> $u_E(\\vec{r}) = \\frac{dW}{d\\tau} = \\frac{1}{2}\\epsilon_0|\\vec{E}(\\vec{r})|^2$, misurata in J/m$^3$. Dipende soltanto dal <em>modulo</em> del campo, non dalla direzione. L'energia totale in una regione di volume $\\tau$ si ottiene integrando: $W = \\int_\\tau u_E\\,d\\tau = \\frac{1}{2}\\epsilon_0\\int_\\tau|\\vec{E}|^2 d\\tau$."
      },
      {
        type: "tranello",
        front: "Quando posso usare $W/\\tau$ come densità di energia e quando no?",
        back: "$W/\\tau$ è solo la densità <strong>media</strong>. Coincide con la densità locale $u_E$ in ogni punto soltanto se $|\\vec{E}|$ è <em>costante</em> nella regione (il condensatore piano ideale è il caso tipico). Attenzione: la costanza del <strong>modulo</strong> è ciò che conta, l'uniformità vettoriale è sufficiente ma non necessaria. Se $|\\vec{E}|$ varia (es. condensatore sferico, dove $E \\propto 1/r^2$), $W/\\tau$ non ha alcun significato locale e bisogna calcolare $W = \\int u_E\\,d\\tau$."
      },
      {
        type: "dimostrazione",
        front: "Calcola l'energia di un condensatore sferico integrando la densità di energia.",
        back: "Da Gauss, per $R_1 \\lt r \\lt R_2$: $E(r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}$. Con il guscio $d\\tau = 4\\pi r^2 dr$: $dW = \\frac12\\epsilon_0 E^2 \\, 4\\pi r^2 dr = \\frac{Q^2}{8\\pi\\epsilon_0}\\frac{dr}{r^2}$. Integrando: $W = \\frac{Q^2}{8\\pi\\epsilon_0}\\left(\\frac{1}{R_1}-\\frac{1}{R_2}\\right)$. Il risultato si verifica con $W = \\frac12 Q^2/C$ e $C = 4\\pi\\epsilon_0\\frac{R_1R_2}{R_2-R_1}$."
      },
      {
        type: "definizione",
        front: "Definisci l'intensità di corrente elettrica e spiega da cosa dipende il suo segno.",
        back: "$I = \\frac{dQ}{dt}$, dove $dQ$ è la carica <strong>netta con segno</strong> che attraversa la superficie, valutata rispetto alla normale $\\hat{n}$ scelta: ogni portatore contribuisce col prodotto della propria carica per il segno dell'attraversamento. Unità: ampere, $1\\,\\text{A} = 1\\,\\text{C/s}$. Il segno di $I$ <strong>non è intrinseco</strong>: invertendo $\\hat{n}$ si inverte il segno di $I$. Va quindi sempre dichiarata la scelta di $\\hat{n}$."
      },
      {
        type: "definizione",
        front: "Definisci il vettore densità di corrente e il suo legame locale con la corrente.",
        back: "$\\vec{J} = n q \\vec{v}_d = \\rho_{\\text{mob}}\\vec{v}_d$, con $n$ densità numerica dei portatori (m$^{-3}$), $q$ carica del singolo portatore con il proprio segno, $\\vec{v}_d$ velocità di deriva. Unità: A/m$^2$. Legame locale: $\\frac{dI}{dS} = \\vec{J}\\cdot\\hat{n}$; legame globale: $I = \\int_\\Sigma \\vec{J}\\cdot\\hat{n}\\,dS$ (flusso di $\\vec{J}$). Se $q \\lt 0$, $\\vec{J}$ è <strong>opposto</strong> a $\\vec{v}_d$: in ogni caso $\\vec{J}$ ha il verso del moto convenzionale delle cariche positive."
      },
      {
        type: "tranello",
        front: "In un metallo percorso da corrente, quanto vale $\\rho_{\\text{tot}}$? E si può scrivere $\\vec{J} = \\rho_{\\text{tot}}\\vec{v}_d$?",
        back: "In un metallo neutro $\\rho_{\\text{tot}} = 0$ <strong>anche quando scorre corrente</strong>: la densità negativa degli elettroni di conduzione è esattamente compensata da quella positiva del reticolo fisso. Dunque <strong>non</strong> si può scrivere $\\vec{J} = \\rho_{\\text{tot}}\\vec{v}_d$ (darebbe $\\vec{J} = \\vec{0}$, falso). La relazione corretta usa la densità <em>parziale</em>: $\\vec{J}_s = \\rho_s \\vec{v}_{d,s}$. Corrente e densità di carica totale sono grandezze indipendenti."
      },
      {
        type: "dimostrazione",
        front: "Ricava l'equazione di continuità dalla forma integrale a quella differenziale.",
        back: "Ipotesi: $V$ volume <strong>fisso</strong>, $S$ chiusa con $\\hat{n}$ <strong>uscente</strong>, $\\rho = \\rho_{\\text{tot}}$ e $\\vec{J} = \\vec{J}_{\\text{tot}}$. Forma integrale: $\\frac{dQ}{dt} = -\\oint_S \\vec{J}\\cdot\\hat{n}\\,dS$. Poiché $V$ è fisso: $\\frac{dQ}{dt} = \\int_V \\frac{\\partial\\rho}{\\partial t}dV$. Per il teorema della divergenza: $\\oint_S \\vec{J}\\cdot\\hat{n}\\,dS = \\int_V (\\nabla\\cdot\\vec{J})dV$. Sostituendo: $\\int_V\\left(\\nabla\\cdot\\vec{J}+\\frac{\\partial\\rho}{\\partial t}\\right)dV = 0$ per <em>ogni</em> $V$, quindi l'integrando è nullo: $\\nabla\\cdot\\vec{J}+\\frac{\\partial\\rho}{\\partial t} = 0$."
      },
      {
        type: "tranello",
        front: "$\\nabla\\cdot\\vec{J} = 0$ implica che il sistema è in regime stazionario?",
        back: "<strong>No.</strong> È condizione <em>necessaria</em> ma non sufficiente. Controesempio: $\\vec{J}(\\vec{r},t) = J_0\\cos(\\omega t)\\hat{x}$ ha $\\nabla\\cdot\\vec{J} = 0$ in ogni istante (le componenti non dipendono dalle coordinate), quindi $\\partial\\rho/\\partial t = 0$ e non c'è accumulo locale di carica; eppure $\\partial\\vec{J}/\\partial t = -J_0\\omega\\sin(\\omega t)\\hat{x} \\neq \\vec{0}$. Il regime stazionario richiede <strong>entrambe</strong> le condizioni $\\partial\\vec{J}/\\partial t = 0$ e $\\partial\\rho/\\partial t = 0$."
      },
      {
        type: "domanda",
        front: "Perché un bilancio netto nullo su 24 ore non basta per la stazionarietà? (analogia dell'università)",
        back: "Perché il bilancio nullo su un intervallo <em>finito</em> permette accumuli intermedi. In una giornata tipica entrano la mattina ed escono la sera tanti studenti quanti, ma nel pomeriggio l'edificio è pieno e di notte è vuoto: il sistema non è stazionario. La stazionarietà richiede che <strong>in ogni istante</strong> la portata entrante uguagli quella uscente <em>e</em> che le portate stesse non cambino nel tempo."
      },
      {
        type: "tranello",
        front: "Un serbatoio si sta svuotando: significa che $\\partial\\rho/\\partial t \\lt 0$ in ogni punto dell'acqua?",
        back: "<strong>No.</strong> L'affermazione corretta è <em>globale</em>: $dM/dt \\lt 0$, cioè la massa contenuta diminuisce perché il flusso netto uscente è positivo. Ma per un liquido praticamente incomprimibile la <strong>densità locale resta costante</strong>: ciò che scende è il <em>livello</em>, cioè il volume occupato. L'enunciato locale $\\partial\\rho/\\partial t \\lt 0$ in un punto significa che in <em>quel punto</em> la densità diminuisce, e corrisponde a $\\nabla\\cdot\\vec{J} \\gt 0$ nello stesso punto."
      },
      {
        type: "formula",
        front: "Scrivi le formule chiave su correnti e continuità.",
        back: "Densità di corrente: $\\vec{J} = nq\\vec{v}_d$. Legame locale: $dI/dS = \\vec{J}\\cdot\\hat{n}$. Corrente come flusso: $I = \\int_\\Sigma \\vec{J}\\cdot\\hat{n}\\,dS$. Continuità integrale: $\\frac{dQ}{dt} = -\\oint_S \\vec{J}\\cdot\\hat{n}\\,dS$. Continuità locale: $\\nabla\\cdot\\vec{J} + \\frac{\\partial\\rho}{\\partial t} = 0$. Regime stazionario: $\\nabla\\cdot\\vec{J} = 0$ e $\\oint_S \\vec{J}\\cdot\\hat{n}\\,dS = 0$."
      },
      {
        type: "domanda",
        front: "Due punti allo stesso potenziale: il campo elettrico tra loro è necessariamente nullo?",
        back: "<strong>No.</strong> Significa soltanto che l'integrale di linea $\\int_A^B \\vec{E}\\cdot d\\vec{l}$ lungo quel percorso è nullo. Il campo può essere diverso da zero tratto per tratto, con contributi che si cancellano. (Si noti anche che la <em>circolazione</em> si riferisce a un cammino chiuso, non a un percorso tra due punti.)"
      },
      {
        type: "domanda",
        front: "In una sezione obliqua di un filo, perché la corrente che la attraversa è la stessa della sezione retta?",
        back: "La sezione obliqua ha area maggiore, $S' = S/\\cos\\theta$ (la sua proiezione sul piano perpendicolare al filo è la sezione retta $S = S'\\cos\\theta$), ma il prodotto scalare introduce il fattore $\\cos\\theta$: $I = \\vec{J}\\cdot\\hat{n}\\,S' = J\\cos\\theta\\cdot\\frac{S}{\\cos\\theta} = JS$. I due effetti si compensano esattamente. Attenzione: se la superficie inclinata considerata ha area $S$ (non $S/\\cos\\theta$) intercetta solo parte del flusso e $I = JS\\cos\\theta$."
      }
    ]
};

