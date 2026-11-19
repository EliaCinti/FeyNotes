const LESSON = {
    id: "L30", date: "Lezione 30 — 11 Nov 2026",
    title: "Derivate di Ordine Superiore e Convessità",
    abstract: "Introduciamo la derivata seconda e le derivate di ordine superiore, le classi $C^n$ e $C^\\infty$, e il loro significato geometrico: convessità, concavità, punti di flesso e test della derivata seconda per gli estremi locali. Chiudiamo con uno studio di funzione completo (parità, dominio, segno, asintoti).",

    sections: [
      {
        id: "s30-richiami-derivata-prima",
        type: "section",
        title: "Richiami sulla Derivata Prima",
        icon: "📐",
        content: `<p>Ricordiamo brevemente alcuni concetti fondamentali legati alla derivata prima. La derivata di una funzione in un punto rappresenta il <strong>coefficiente angolare della retta tangente</strong> al grafico della funzione in quel punto.</p>
<p>$$f'(x_0) = m_{\\text{tangente}}$$</p>
<p>La retta tangente è la <strong>migliore approssimazione lineare</strong> (o di ordine uno) della funzione in un intorno del punto di tangenza.</p>
<p>Inoltre, abbiamo stabilito una relazione fondamentale tra il segno della derivata prima e la monotonia della funzione.</p>`,
        subsections: [
          {
            subtitle: "Segno della derivata e monotonia",
            content: `<p>Se una funzione $f$ è derivabile in un <strong>intervallo</strong> $I$:</p>
<ul>
  <li>Se $f'(x) \\ge 0$ per ogni $x \\in I$, allora $f$ è crescente in $I$.</li>
  <li>Se $f'(x) \\le 0$ per ogni $x \\in I$, allora $f$ è decrescente in $I$.</li>
</ul>`
          },
          {
            subtitle: "Osservazione — Importanza dell'intervallo",
            content: `<p>È cruciale che il dominio considerato sia un <strong>intervallo</strong>. Se il dominio non è un intervallo, la relazione tra il segno della derivata e la monotonia globale può non valere.</p>`
          },
          {
            subtitle: "Esempio — Controesempio per domini non connessi",
            content: `<p>Consideriamo la funzione $f(x) = \\dfrac{1}{x}$. Il suo dominio è $D = \\mathbb{R} \\setminus \\{0\\}$, che è l'unione di due intervalli disgiunti: $(-\\infty, 0) \\cup (0, +\\infty)$.</p>
<p>Calcoliamo la derivata prima:</p>
<p>$$f'(x) = \\frac{d}{dx}\\left(x^{-1}\\right) = -1 \\cdot x^{-2} = -\\frac{1}{x^2}$$</p>
<p>La derivata $f'(x)$ è sempre negativa per ogni $x$ nel dominio, poiché $x^2 \\gt 0$. <strong>Tuttavia, la funzione $f(x)$ non è decrescente su tutto il suo dominio.</strong> Infatti, la funzione è decrescente separatamente sui due intervalli $(-\\infty, 0)$ e $(0, +\\infty)$, ma non è decrescente su $(-\\infty, 0) \\cup (0, +\\infty)$.</p>
<p>Per vederlo, basta prendere due punti, uno nel primo intervallo e uno nel secondo, ad esempio $x_1 = -1$ e $x_2 = 1$. Abbiamo $x_1 \\lt x_2$ (cioè $-1 \\lt 1$), ma</p>
<p>$$f(x_1) = f(-1) = -1 \\quad \\text{e} \\quad f(x_2) = f(1) = 1$$</p>
<p>quindi $f(x_1) \\lt f(x_2)$: questo contraddice la definizione di funzione decrescente. La funzione assume valori negativi per $x \\lt 0$ e valori positivi per $x \\gt 0$.</p>
<figure class="figura" data-id="analisi1_lez30a_d1"><?xml version="1.0" encoding="UTF-8"?>
<svg id="analisi1_lez30a_d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="203.25pt" height="199.818pt" viewBox="0 0 203.25 199.818" version="1.2"><style>#analisi1_lez30a_d1 [fill="rgb(0%,0%,0%)"],#analisi1_lez30a_d1 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#analisi1_lez30a_d1 [stroke="rgb(0%,0%,0%)"],#analisi1_lez30a_d1 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#analisi1_lez30a_d1 [fill="rgb(0%,0%,100%)"],#analisi1_lez30a_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d1 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d1 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#analisi1_lez30a_d1 [stroke="rgb(0%,0%,100%)"],#analisi1_lez30a_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d1 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d1 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}</style>
<defs>
<g>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph0-1">
<path style="stroke:none;" d="M 4.921875 -1.421875 C 4.921875 -1.515625 4.828125 -1.515625 4.796875 -1.515625 C 4.71875 -1.515625 4.6875 -1.484375 4.671875 -1.40625 C 4.34375 -0.34375 3.671875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.96875 -1.640625 L 3.3125 -3 C 3.375 -3.25 3.609375 -4.171875 4.296875 -4.171875 C 4.34375 -4.171875 4.578125 -4.171875 4.796875 -4.03125 C 4.515625 -3.984375 4.3125 -3.734375 4.3125 -3.5 C 4.3125 -3.34375 4.421875 -3.15625 4.6875 -3.15625 C 4.90625 -3.15625 5.234375 -3.328125 5.234375 -3.734375 C 5.234375 -4.25 4.640625 -4.390625 4.3125 -4.390625 C 3.734375 -4.390625 3.390625 -3.859375 3.265625 -3.625 C 3.015625 -4.28125 2.484375 -4.390625 2.1875 -4.390625 C 1.15625 -4.390625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.921875 1.828125 -4.171875 2.171875 -4.171875 C 2.359375 -4.171875 2.703125 -4.078125 2.703125 -3.5 C 2.703125 -3.1875 2.546875 -2.53125 2.171875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.9375 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.828125 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.578125 2.265625 -0.640625 C 2.375 -0.28125 2.734375 0.109375 3.328125 0.109375 C 4.359375 0.109375 4.921875 -1.171875 4.921875 -1.421875 Z M 4.921875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph0-2">
<path style="stroke:none;" d="M 4.828125 -3.78125 C 4.859375 -3.921875 4.859375 -3.9375 4.859375 -4.015625 C 4.859375 -4.1875 4.71875 -4.28125 4.578125 -4.28125 C 4.46875 -4.28125 4.3125 -4.21875 4.234375 -4.0625 C 4.203125 -4.015625 4.125 -3.703125 4.09375 -3.53125 L 3.890625 -2.734375 L 3.4375 -0.953125 C 3.40625 -0.796875 2.96875 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.546875 1.703125 -0.90625 C 1.703125 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.265625 2.40625 -3.375 2.40625 -3.578125 C 2.40625 -4.015625 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.828125 -3.875 1.234375 -4.171875 1.5625 -4.171875 C 1.640625 -4.171875 1.8125 -4.171875 1.8125 -3.84375 C 1.8125 -3.609375 1.71875 -3.34375 1.640625 -3.15625 C 1.25 -2.109375 1.078125 -1.53125 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.28125 0.109375 C 2.671875 0.109375 3 -0.0625 3.28125 -0.34375 C 3.15625 0.171875 3.03125 0.671875 2.640625 1.1875 C 2.375 1.53125 2 1.8125 1.546875 1.8125 C 1.40625 1.8125 0.96875 1.78125 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.3125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.046875 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.03125 1.546875 2.03125 C 2.5625 2.03125 3.59375 1.125 3.875 0.015625 Z M 4.828125 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph0-3">
<path style="stroke:none;" d="M 5.484375 -6.3125 C 5.484375 -6.765625 5.015625 -7 4.609375 -7 C 4.28125 -7 3.65625 -6.8125 3.359375 -5.828125 C 3.296875 -5.625 3.265625 -5.53125 3.03125 -4.28125 L 2.34375 -4.28125 C 2.15625 -4.28125 2.046875 -4.28125 2.046875 -4.09375 C 2.046875 -3.96875 2.140625 -3.96875 2.328125 -3.96875 L 2.96875 -3.96875 L 2.234375 -0.046875 C 2.046875 0.90625 1.890625 1.8125 1.375 1.8125 C 1.328125 1.8125 1.078125 1.8125 0.890625 1.640625 C 1.34375 1.609375 1.4375 1.25 1.4375 1.09375 C 1.4375 0.875 1.265625 0.75 1.078125 0.75 C 0.8125 0.75 0.53125 0.96875 0.53125 1.34375 C 0.53125 1.796875 0.96875 2.03125 1.375 2.03125 C 1.921875 2.03125 2.3125 1.453125 2.484375 1.078125 C 2.8125 0.453125 3.03125 -0.75 3.046875 -0.828125 L 3.640625 -3.96875 L 4.5 -3.96875 C 4.6875 -3.96875 4.796875 -3.96875 4.796875 -4.171875 C 4.796875 -4.28125 4.6875 -4.28125 4.53125 -4.28125 L 3.703125 -4.28125 C 3.8125 -4.859375 3.796875 -4.828125 3.90625 -5.40625 C 3.953125 -5.609375 4.09375 -6.3125 4.140625 -6.4375 C 4.234375 -6.625 4.40625 -6.78125 4.609375 -6.78125 C 4.65625 -6.78125 4.90625 -6.78125 5.09375 -6.59375 C 4.65625 -6.5625 4.5625 -6.21875 4.5625 -6.0625 C 4.5625 -5.828125 4.75 -5.71875 4.9375 -5.71875 C 5.1875 -5.71875 5.484375 -5.9375 5.484375 -6.3125 Z M 5.484375 -6.3125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph0-4">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.671875 1.765625 -1.046875 1.375 -1.046875 C 1.046875 -1.046875 0.859375 -0.796875 0.859375 -0.53125 C 0.859375 -0.265625 1.046875 0 1.375 0 C 1.5 0 1.625 -0.046875 1.71875 -0.125 C 1.75 -0.15625 1.78125 -0.15625 1.78125 -0.15625 C 1.78125 -0.15625 1.796875 -0.15625 1.796875 -0.015625 C 1.796875 0.71875 1.453125 1.3125 1.125 1.640625 C 1.015625 1.75 1.015625 1.78125 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.21875 1.921875 2.015625 1.15625 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph1-1">
<path style="stroke:none;" d="M 3.28125 2.375 C 3.28125 2.34375 3.28125 2.328125 3.109375 2.15625 C 1.875 0.90625 1.5625 -0.96875 1.5625 -2.484375 C 1.5625 -4.203125 1.9375 -5.9375 3.15625 -7.171875 C 3.28125 -7.296875 3.28125 -7.3125 3.28125 -7.34375 C 3.28125 -7.40625 3.25 -7.4375 3.1875 -7.4375 C 3.078125 -7.4375 2.1875 -6.765625 1.609375 -5.5 C 1.09375 -4.421875 0.984375 -3.3125 0.984375 -2.484375 C 0.984375 -1.703125 1.09375 -0.5 1.640625 0.609375 C 2.234375 1.828125 3.078125 2.484375 3.1875 2.484375 C 3.25 2.484375 3.28125 2.453125 3.28125 2.375 Z M 3.28125 2.375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph1-2">
<path style="stroke:none;" d="M 2.875 -2.484375 C 2.875 -3.25 2.765625 -4.453125 2.21875 -5.578125 C 1.625 -6.796875 0.765625 -7.4375 0.671875 -7.4375 C 0.609375 -7.4375 0.5625 -7.40625 0.5625 -7.34375 C 0.5625 -7.3125 0.5625 -7.296875 0.75 -7.109375 C 1.71875 -6.125 2.296875 -4.546875 2.296875 -2.484375 C 2.296875 -0.78125 1.921875 0.96875 0.6875 2.21875 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.4375 0.609375 2.484375 0.671875 2.484375 C 0.765625 2.484375 1.65625 1.8125 2.25 0.546875 C 2.75 -0.546875 2.875 -1.640625 2.875 -2.484375 Z M 2.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph1-3">
<path style="stroke:none;" d="M 4.15625 0 L 4.15625 -0.3125 L 3.84375 -0.3125 C 2.953125 -0.3125 2.921875 -0.421875 2.921875 -0.78125 L 2.921875 -6.34375 C 2.921875 -6.59375 2.921875 -6.609375 2.6875 -6.609375 C 2.078125 -5.96875 1.203125 -5.96875 0.890625 -5.96875 L 0.890625 -5.671875 C 1.078125 -5.671875 1.671875 -5.671875 2.1875 -5.921875 L 2.1875 -0.78125 C 2.1875 -0.421875 2.15625 -0.3125 1.265625 -0.3125 L 0.9375 -0.3125 L 0.9375 0 C 1.296875 -0.03125 2.15625 -0.03125 2.546875 -0.03125 C 2.953125 -0.03125 3.8125 -0.03125 4.15625 0 Z M 4.15625 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d1-glyph2-1">
<path style="stroke:none;" d="M 6.890625 -2.484375 C 6.890625 -2.671875 6.703125 -2.671875 6.5625 -2.671875 L 1.15625 -2.671875 C 1.015625 -2.671875 0.828125 -2.671875 0.828125 -2.484375 C 0.828125 -2.28125 1.015625 -2.28125 1.15625 -2.28125 L 6.5625 -2.28125 C 6.703125 -2.28125 6.890625 -2.28125 6.890625 -2.484375 Z M 6.890625 -2.484375 "/>
</symbol>
</g>
</defs>
<g id="analisi1_lez30a_d1-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -89.291651 -0.0017952 L 88.894696 -0.0017952 " transform="matrix(0.996324,0,0,-0.996324,93.131342,106.22868)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072172 2.38981 C -1.691867 0.954847 -0.848925 0.280493 0.00185945 -0.0017952 C -0.848925 -0.280162 -1.691867 -0.954517 -2.072172 -2.38948 " transform="matrix(0.996324,0,0,-0.996324,181.896585,106.22868)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph0-1" x="185.601125" y="108.365794"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00147601 -89.291002 L 0.00147601 88.895345 " transform="matrix(0.996324,0,0,-0.996324,93.131342,106.22868)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071522 2.390129 C -1.695139 0.955166 -0.848275 0.280812 -0.00141177 -0.00147601 C -0.848275 -0.279843 -1.695139 -0.958118 -2.071522 -2.389161 " transform="matrix(0,-0.996324,-0.996324,0,93.131342,17.463437)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph0-2" x="90.519978" y="11.829018"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M -79.372371 -4.961435 L -77.866836 -5.055531 L -77.117989 -5.1065 L -75.612454 -5.208437 L -74.863607 -5.259406 L -74.110839 -5.310375 L -73.358072 -5.369185 L -72.609225 -5.424074 L -71.856458 -5.478963 L -70.350923 -5.596583 L -69.602076 -5.655393 L -68.096541 -5.780854 L -67.347694 -5.847506 L -66.594926 -5.910236 L -65.842159 -5.980808 L -65.093312 -6.047459 L -64.340544 -6.118031 L -63.587777 -6.192524 L -62.83893 -6.267017 L -62.086162 -6.341509 L -61.333395 -6.419923 L -60.584548 -6.498336 L -59.079013 -6.663004 L -58.330166 -6.749258 L -56.824631 -6.929609 L -56.075784 -7.023705 L -55.323017 -7.117801 L -54.570249 -7.215817 L -53.821402 -7.313834 L -52.315867 -7.52555 L -51.56702 -7.635328 L -50.814253 -7.749028 L -50.061485 -7.866648 L -49.312638 -7.984268 L -47.807103 -8.23519 L -47.058256 -8.368493 L -46.305489 -8.501795 L -45.552721 -8.642939 L -44.803875 -8.788004 L -44.051107 -8.936989 L -43.298339 -9.093815 L -42.549493 -9.250642 L -41.796725 -9.419231 L -41.043958 -9.59174 L -40.295111 -9.77209 L -39.542343 -9.956362 L -38.789576 -10.148474 L -38.040729 -10.348428 L -37.287961 -10.560144 L -36.535194 -10.77578 L -35.782426 -10.999258 L -35.033579 -11.238419 L -34.280812 -11.485421 L -33.528044 -11.744185 L -32.779197 -12.01079 L -32.02643 -12.293077 L -31.273662 -12.587127 L -30.524815 -12.90078 L -29.772048 -13.226196 L -29.01928 -13.563373 L -28.270434 -13.927994 L -27.517666 -14.308299 L -26.764899 -14.708207 L -26.016052 -15.135559 L -25.263284 -15.586435 L -24.510517 -16.060836 L -23.76167 -16.570522 L -23.008902 -17.111574 L -22.256135 -17.687911 L -21.507288 -18.307376 L -20.75452 -18.966048 L -20.001753 -19.679609 L -19.252906 -20.45198 L -18.500138 -21.283161 L -17.747371 -22.180993 L -16.998524 -23.165079 L -16.245756 -24.235421 L -15.492989 -25.41162 L -14.744142 -26.70936 L -13.991375 -28.144323 L -13.238607 -29.740033 L -12.48976 -31.531777 L -11.736993 -33.550919 L -10.984225 -35.844507 L -10.235378 -38.479194 L -9.482611 -41.521629 L -8.729843 -45.097275 L -7.980996 -49.343354 L -7.228229 -54.475504 L -6.475461 -60.795614 L -5.726614 -68.778087 L -4.973847 -79.171768 " transform="matrix(0.996324,0,0,-0.996324,93.131342,106.22868)"/>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.961116 79.372052 L 5.713884 68.931323 L 6.462731 60.913565 L 7.215498 54.573851 L 7.968266 49.426018 L 8.717113 45.164256 L 9.46988 41.576849 L 10.222648 38.526572 L 10.971494 35.884044 L 11.724262 33.586535 L 12.47703 31.563472 L 13.225876 29.767808 L 13.978644 28.168177 L 14.731411 26.729293 L 15.480258 25.431554 L 16.233026 24.255354 L 16.985793 23.181092 L 17.73464 22.197006 L 18.487408 21.295253 L 19.240175 20.464072 L 19.989022 19.695622 L 20.74179 18.982061 L 21.494557 18.315548 L 22.243404 17.700004 L 22.996172 17.119745 L 23.748939 16.578694 L 24.497786 16.069007 L 25.250554 15.590686 L 26.003321 15.13981 L 26.752168 14.716378 L 27.504935 14.31647 L 28.257703 13.932245 L 29.00655 13.571544 L 29.759317 13.230446 L 30.512085 12.905031 L 31.260932 12.595299 L 32.013699 12.297328 L 32.766467 12.015041 L 33.515314 11.748435 L 34.268081 11.489672 L 35.020849 11.24267 L 35.773616 11.00743 L 36.522463 10.780031 L 37.275231 10.560474 L 38.027998 10.352679 L 38.776845 10.152725 L 39.529613 9.960613 L 40.28238 9.776341 L 41.031227 9.59207 L 41.783994 9.419561 L 42.536762 9.254893 L 43.285609 9.094146 L 44.038376 8.937319 L 44.791144 8.792255 L 45.539991 8.64719 L 46.292758 8.506046 L 47.045526 8.368823 L 47.794373 8.23552 L 48.54714 8.110059 L 49.299908 7.988518 L 50.048755 7.866978 L 50.801522 7.749358 L 51.55429 7.635659 L 52.303137 7.52588 L 53.055904 7.420022 L 53.808672 7.318085 L 54.557518 7.216148 L 55.310286 7.118131 L 56.063054 7.024035 L 56.8119 6.929939 L 57.564668 6.839764 L 58.317435 6.753509 L 59.066282 6.663334 L 60.571817 6.498666 L 61.320664 6.420253 L 62.073432 6.341839 L 62.826199 6.267347 L 63.575046 6.192854 L 65.080581 6.05171 L 65.829428 5.981138 L 67.334963 5.847836 L 68.08381 5.781185 L 68.836577 5.718454 L 69.589345 5.659644 L 70.338192 5.596913 L 71.843727 5.479293 L 72.596494 5.424404 L 73.345341 5.369515 L 74.850876 5.259736 L 75.599723 5.208768 L 77.105258 5.10683 L 77.854105 5.055862 L 79.35964 4.961766 " transform="matrix(0.996324,0,0,-0.996324,93.131342,106.22868)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph0-3" x="175.901915" y="95.09875"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-1" x="181.83004" y="95.09875"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph0-1" x="185.690794" y="95.09875"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-2" x="191.362864" y="95.09875"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 74.75 126 C 74.75 125.230469 74.128906 124.609375 73.363281 124.609375 C 72.59375 124.609375 71.972656 125.230469 71.972656 126 C 71.972656 126.765625 72.59375 127.386719 73.363281 127.386719 C 74.128906 127.386719 74.75 126.765625 74.75 126 Z M 74.75 126 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-1" x="32.356603" y="136.94932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph2-1" x="36.217357" y="136.94932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-3" x="43.936871" y="136.94932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph0-4" x="48.900555" y="136.94932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph2-1" x="53.311279" y="136.94932"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-3" x="61.03179" y="136.94932"/>
  <use xlink:href="#analisi1_lez30a_d1-glyph1-2" x="65.994777" y="136.94932"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 114.289062 86.457031 C 114.289062 85.691406 113.667969 85.070312 112.902344 85.070312 C 112.132812 85.070312 111.511719 85.691406 111.511719 86.457031 C 111.511719 87.226562 112.132812 87.847656 112.902344 87.847656 C 113.667969 87.847656 114.289062 87.226562 114.289062 86.457031 Z M 114.289062 86.457031 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-1" x="116.407452" y="80.470728"/>
  <use xlink:href="#analisi1_lez30a_d1-glyph1-3" x="120.267663" y="80.470728"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph0-4" x="125.230893" y="80.470728"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d1-glyph1-3" x="129.642614" y="80.470728"/>
  <use xlink:href="#analisi1_lez30a_d1-glyph1-2" x="134.6056" y="80.470728"/>
</g>
</g>
</svg></figure>
<p>Gli assi $x=0$ e $y=0$ sono gli asintoti della funzione. La funzione è decrescente su $(-\\infty,0)$ e su $(0,+\\infty)$, ma non sulla loro unione.</p>`
          }
        ]
      },
      {
        id: "s30-nota-terminologia",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        content: `<p><strong>Precisazione terminologica sul termine "crescente".</strong> Nella nota sul segno della derivata, l'ipotesi è $f'(x) \\ge 0$ (disuguaglianza <em>debole</em>): la conclusione corrispondente è che $f$ è crescente <strong>in senso debole</strong>, cioè <em>non decrescente</em> ($x_1 \\lt x_2 \\Rightarrow f(x_1) \\le f(x_2)$). Analogamente $f' \\le 0$ dà "decrescente" nel senso di <em>non crescente</em>.</p>
<p>Questa convenzione verrà formalizzata più avanti nel capitolo, quando nel teorema su convessità e derivata prima si userà la scrittura "(strettamente) crescente" per trattare contemporaneamente il caso debole e quello stretto. Nella soluzione dell'esercizio di Teoria 4 la stessa ipotesi $f' \\ge 0$ è infatti associata esplicitamente al termine "non decrescente": <strong>i due termini qui sono sinonimi</strong>.</p>`
      },
      {
        id: "s30-derivate-ordine-superiore",
        type: "section",
        title: "Derivate di Ordine Superiore",
        icon: "🔁",
        content: `<p>Così come la positività della derivata prima ci dà informazioni sulla crescenza della funzione, possiamo chiederci cosa ci dice la positività <em>della derivata della derivata</em>.</p>
<p>Se calcoliamo la derivata di $f'(x)$, otteniamo la <strong>derivata seconda</strong>, indicata con $f''(x)$. Se $f$ è derivabile due volte in un intervallo aperto $I$ e $f''(x) \\gt 0$ per ogni $x \\in I$, allora $f'$ è strettamente crescente in $I$. Ma $f'(x)$ rappresenta la <em>pendenza della retta tangente</em>: quindi una derivata seconda positiva indica che la pendenza della tangente sta aumentando. Questo corrisponde geometricamente alla <strong>convessità</strong> della funzione.</p>`,
        subsections: [
          {
            subtitle: "Definizione — Derivata Seconda",
            content: `<p>Sia $f: A \\to \\mathbb{R}$ una funzione definita su un aperto $A \\subseteq \\mathbb{R}$. Supponiamo che $f$ sia derivabile in $A$: questo definisce la funzione derivata $f': A \\to \\mathbb{R}$.</p>
<p>Se la funzione $f'$ è a sua volta derivabile in un punto $x_0 \\in A$, diremo che $f$ è <strong>derivabile due volte</strong> in $x_0$. La derivata di $f'$ in $x_0$ si chiama <strong>derivata seconda</strong> di $f$ in $x_0$ e si indica con $f''(x_0)$. In formule:</p>
<p>$$f''(x_0) := \\lim_{x \\to x_0} \\frac{f'(x) - f'(x_0)}{x - x_0}$$</p>
<p>purché tale limite esista e sia finito.</p>`
          },
          {
            subtitle: "Notazioni per la derivata seconda",
            content: `<p>Esistono diverse notazioni equivalenti:</p>
<p>$$f''(x), \\quad f^{(2)}(x), \\quad D^2 f(x), \\quad \\frac{d^2 f}{dx^2}(x)$$</p>
<p>Se una funzione è derivabile due volte in ogni punto di un insieme $A$, possiamo definire la funzione derivata seconda $f'': A \\to \\mathbb{R}$.</p>`
          },
          {
            subtitle: "Definizione — Funzioni di classe $C^2$",
            content: `<p>Una funzione $f: A \\to \\mathbb{R}$ si dice di <strong>classe $C^2$</strong> in $A$, e si scrive $f \\in C^2(A)$, se è derivabile due volte in ogni punto di $A$ e la sua derivata seconda $f''$ è una funzione <strong>continua</strong> in $A$.</p>`
          },
          {
            subtitle: "Gerarchia di regolarità",
            content: `<p>Se una funzione è derivabile, allora è anche continua. Applicando questo principio iterativamente, otteniamo una gerarchia di regolarità:</p>
<p>$$f \\in C^2(A) \\Rightarrow f' \\in C^1(A) \\Rightarrow f \\in C^1(A) \\Rightarrow f \\in C^0(A)$$</p>
<p>In altre parole, una funzione di classe $C^2$ ha derivata prima di classe $C^1$ (quindi continua e derivabile), ed è essa stessa di classe $C^1$ (quindi continua e derivabile).</p>`
          },
          {
            subtitle: "Generalizzazione alla derivata $n$-esima",
            content: `<p>Il processo può essere iterato per definire derivate di ordine superiore a due.</p>
<p><strong>Definizione.</strong> Sia $n \\in \\mathbb{N}$, $n \\ge 1$. Una funzione $f$ si dice <strong>derivabile $n$ volte</strong> in $x_0$ se è derivabile $n-1$ volte in un intorno di $x_0$ e la sua derivata $(n-1)$-esima, $f^{(n-1)}$, è derivabile in $x_0$. La derivata $n$-esima è definita ricorsivamente come</p>
<p>$$f^{(n)}(x_0) := \\left.\\frac{d}{dx} f^{(n-1)}(x)\\right|_{x=x_0}$$</p>
<p>Per convenzione, $f^{(0)}(x) = f(x)$.</p>`
          },
          {
            subtitle: "Definizione — Classi $C^n$ e $C^\\infty$",
            content: `<ul>
  <li>Una funzione $f$ si dice di <strong>classe $C^n$</strong> in un insieme $A$, e si scrive $f \\in C^n(A)$, se è derivabile $n$ volte in $A$ e la sua derivata $n$-esima $f^{(n)}$ è continua in $A$.</li>
  <li>Una funzione si dice di <strong>classe $C^\\infty$</strong> in $A$, e si scrive $f \\in C^\\infty(A)$, se è derivabile infinite volte in $A$.</li>
</ul>
<p>Vale la seguente catena di inclusioni:</p>
<p>$$C^\\infty(A) \\subset \\dots \\subset C^n(A) \\subset C^{n-1}(A) \\subset \\dots \\subset C^2(A) \\subset C^1(A) \\subset C^0(A)$$</p>
<p>dove $C^0(A)$ indica l'insieme delle funzioni continue in $A$.</p>`
          }
        ],
        formulas: [
          { label: "Derivata seconda (definizione)", latex: "f''(x_0) = \\lim_{x \\to x_0} \\frac{f'(x) - f'(x_0)}{x - x_0}" },
          { label: "Derivata $n$-esima (ricorsione)", latex: "f^{(n)}(x_0) = \\left.\\frac{d}{dx} f^{(n-1)}(x)\\right|_{x=x_0}" },
          { label: "Catena delle classi", latex: "C^\\infty(A) \\subset \\dots \\subset C^2(A) \\subset C^1(A) \\subset C^0(A)" }
        ]
      },
      {
        id: "s30-es-derivata-seconda",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Calcolo di una derivata seconda",
        icon: "✎",
        source: "docente",
        content: `<p>Calcolare la derivata seconda della funzione $f(x) = 3\\cos(x^2)$.</p>`,
        steps: [
          `<strong>Calcolo della derivata prima.</strong> Usiamo la regola della catena. La funzione esterna è $3\\cos(y)$ e quella interna è $y = x^2$:<br>$$f'(x) = 3 \\cdot \\left(-\\sin(x^2)\\right) \\cdot \\frac{d}{dx}(x^2) = -3\\sin(x^2) \\cdot (2x) = -6x \\sin(x^2)$$`,
          `<strong>Calcolo della derivata seconda.</strong> Ora dobbiamo derivare $f'(x)$. Usiamo la regola del prodotto con $g(x) = -6x$ e $h(x) = \\sin(x^2)$:<br>$$f''(x) = \\frac{d}{dx}\\left(-6x\\sin(x^2)\\right) = \\left(\\frac{d}{dx}(-6x)\\right)\\sin(x^2) + (-6x)\\left(\\frac{d}{dx}\\sin(x^2)\\right)$$`,
          `Sviluppando i due termini (il secondo richiede di nuovo la regola della catena):<br>$$f''(x) = -6\\sin(x^2) - 6x\\left(\\cos(x^2) \\cdot 2x\\right) = -6\\sin(x^2) - 12x^2\\cos(x^2)$$`
        ]
      },
      {
        id: "s30-convessita-concavita",
        type: "section",
        title: "Convessità e Concavità",
        icon: "🥣",
        content: `<p>Il significato geometrico principale della derivata seconda è legato alla <strong>convessità</strong> della funzione. Prima di collegare i due concetti, diamo una definizione di convessità che <em>non dipende dalla derivabilità</em>.</p>`,
        subsections: [
          {
            subtitle: "Definizione — Funzione Convessa",
            content: `<p>Sia $f: I \\to \\mathbb{R}$ una funzione definita su un intervallo $I$. La funzione $f$ si dice <strong>convessa</strong> in $I$ se, per ogni coppia di punti $x_1, x_2 \\in I$ con $x_1 \\lt x_2$, il segmento di retta che congiunge i punti del grafico $(x_1, f(x_1))$ e $(x_2, f(x_2))$ sta <strong>al di sopra</strong> del grafico di $f$ nell'intervallo $[x_1, x_2]$.</p>
<figure class="figura" data-id="analisi1_lez30a_d2"><?xml version="1.0" encoding="UTF-8"?>
<svg id="analisi1_lez30a_d2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="213.267pt" height="162.968pt" viewBox="0 0 213.267 162.968" version="1.2"><style>#analisi1_lez30a_d2 [fill="rgb(0%,0%,0%)"],#analisi1_lez30a_d2 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#analisi1_lez30a_d2 [stroke="rgb(0%,0%,0%)"],#analisi1_lez30a_d2 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#analisi1_lez30a_d2 [fill="rgb(0%,0%,100%)"],#analisi1_lez30a_d2 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d2 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d2 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#analisi1_lez30a_d2 [stroke="rgb(0%,0%,100%)"],#analisi1_lez30a_d2 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d2 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d2 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#analisi1_lez30a_d2 [fill="rgb(100%,0%,0%)"],#analisi1_lez30a_d2 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #analisi1_lez30a_d2 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #analisi1_lez30a_d2 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#analisi1_lez30a_d2 [stroke="rgb(100%,0%,0%)"],#analisi1_lez30a_d2 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #analisi1_lez30a_d2 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #analisi1_lez30a_d2 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph0-1">
<path style="stroke:none;" d="M 4.921875 -1.421875 C 4.921875 -1.515625 4.828125 -1.515625 4.796875 -1.515625 C 4.71875 -1.515625 4.6875 -1.484375 4.671875 -1.40625 C 4.34375 -0.34375 3.671875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.96875 -1.640625 L 3.3125 -3 C 3.375 -3.25 3.609375 -4.171875 4.296875 -4.171875 C 4.34375 -4.171875 4.578125 -4.171875 4.796875 -4.03125 C 4.515625 -3.984375 4.3125 -3.734375 4.3125 -3.5 C 4.3125 -3.34375 4.421875 -3.15625 4.6875 -3.15625 C 4.90625 -3.15625 5.234375 -3.328125 5.234375 -3.734375 C 5.234375 -4.25 4.640625 -4.390625 4.3125 -4.390625 C 3.734375 -4.390625 3.390625 -3.859375 3.265625 -3.625 C 3.015625 -4.28125 2.484375 -4.390625 2.1875 -4.390625 C 1.15625 -4.390625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.921875 1.828125 -4.171875 2.171875 -4.171875 C 2.359375 -4.171875 2.703125 -4.078125 2.703125 -3.5 C 2.703125 -3.1875 2.546875 -2.53125 2.171875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.9375 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.828125 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.578125 2.265625 -0.640625 C 2.375 -0.28125 2.734375 0.109375 3.328125 0.109375 C 4.359375 0.109375 4.921875 -1.171875 4.921875 -1.421875 Z M 4.921875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph0-2">
<path style="stroke:none;" d="M 4.828125 -3.78125 C 4.859375 -3.921875 4.859375 -3.9375 4.859375 -4.015625 C 4.859375 -4.1875 4.71875 -4.28125 4.578125 -4.28125 C 4.46875 -4.28125 4.3125 -4.21875 4.234375 -4.0625 C 4.203125 -4.015625 4.125 -3.703125 4.09375 -3.53125 L 3.890625 -2.734375 L 3.4375 -0.953125 C 3.40625 -0.796875 2.96875 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.546875 1.703125 -0.90625 C 1.703125 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.265625 2.40625 -3.375 2.40625 -3.578125 C 2.40625 -4.015625 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.828125 -3.875 1.234375 -4.171875 1.5625 -4.171875 C 1.640625 -4.171875 1.8125 -4.171875 1.8125 -3.84375 C 1.8125 -3.609375 1.71875 -3.34375 1.640625 -3.15625 C 1.25 -2.109375 1.078125 -1.53125 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.28125 0.109375 C 2.671875 0.109375 3 -0.0625 3.28125 -0.34375 C 3.15625 0.171875 3.03125 0.671875 2.640625 1.1875 C 2.375 1.53125 2 1.8125 1.546875 1.8125 C 1.40625 1.8125 0.96875 1.78125 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.3125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.046875 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.03125 1.546875 2.03125 C 2.5625 2.03125 3.59375 1.125 3.875 0.015625 Z M 4.828125 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph0-3">
<path style="stroke:none;" d="M 5.484375 -6.3125 C 5.484375 -6.765625 5.015625 -7 4.609375 -7 C 4.28125 -7 3.65625 -6.8125 3.359375 -5.828125 C 3.296875 -5.625 3.265625 -5.53125 3.03125 -4.28125 L 2.34375 -4.28125 C 2.15625 -4.28125 2.046875 -4.28125 2.046875 -4.09375 C 2.046875 -3.96875 2.140625 -3.96875 2.328125 -3.96875 L 2.96875 -3.96875 L 2.234375 -0.046875 C 2.046875 0.90625 1.890625 1.8125 1.375 1.8125 C 1.328125 1.8125 1.078125 1.8125 0.890625 1.640625 C 1.34375 1.609375 1.4375 1.25 1.4375 1.09375 C 1.4375 0.875 1.265625 0.75 1.078125 0.75 C 0.8125 0.75 0.53125 0.96875 0.53125 1.34375 C 0.53125 1.796875 0.96875 2.03125 1.375 2.03125 C 1.921875 2.03125 2.3125 1.453125 2.484375 1.078125 C 2.8125 0.453125 3.03125 -0.75 3.046875 -0.828125 L 3.640625 -3.96875 L 4.5 -3.96875 C 4.6875 -3.96875 4.796875 -3.96875 4.796875 -4.171875 C 4.796875 -4.28125 4.6875 -4.28125 4.53125 -4.28125 L 3.703125 -4.28125 C 3.8125 -4.859375 3.796875 -4.828125 3.90625 -5.40625 C 3.953125 -5.609375 4.09375 -6.3125 4.140625 -6.4375 C 4.234375 -6.625 4.40625 -6.78125 4.609375 -6.78125 C 4.65625 -6.78125 4.90625 -6.78125 5.09375 -6.59375 C 4.65625 -6.5625 4.5625 -6.21875 4.5625 -6.0625 C 4.5625 -5.828125 4.75 -5.71875 4.9375 -5.71875 C 5.1875 -5.71875 5.484375 -5.9375 5.484375 -6.3125 Z M 5.484375 -6.3125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph0-4">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.671875 1.765625 -1.046875 1.375 -1.046875 C 1.046875 -1.046875 0.859375 -0.796875 0.859375 -0.53125 C 0.859375 -0.265625 1.046875 0 1.375 0 C 1.5 0 1.625 -0.046875 1.71875 -0.125 C 1.75 -0.15625 1.78125 -0.15625 1.78125 -0.15625 C 1.78125 -0.15625 1.796875 -0.15625 1.796875 -0.015625 C 1.796875 0.71875 1.453125 1.3125 1.125 1.640625 C 1.015625 1.75 1.015625 1.78125 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.21875 1.921875 2.015625 1.15625 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph1-1">
<path style="stroke:none;" d="M 3.28125 2.375 C 3.28125 2.34375 3.28125 2.328125 3.109375 2.15625 C 1.875 0.90625 1.5625 -0.96875 1.5625 -2.484375 C 1.5625 -4.203125 1.9375 -5.9375 3.15625 -7.171875 C 3.28125 -7.296875 3.28125 -7.3125 3.28125 -7.34375 C 3.28125 -7.40625 3.25 -7.4375 3.1875 -7.4375 C 3.078125 -7.4375 2.1875 -6.765625 1.609375 -5.5 C 1.09375 -4.421875 0.984375 -3.3125 0.984375 -2.484375 C 0.984375 -1.703125 1.09375 -0.5 1.640625 0.609375 C 2.234375 1.828125 3.078125 2.484375 3.1875 2.484375 C 3.25 2.484375 3.28125 2.453125 3.28125 2.375 Z M 3.28125 2.375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph1-2">
<path style="stroke:none;" d="M 2.875 -2.484375 C 2.875 -3.25 2.765625 -4.453125 2.21875 -5.578125 C 1.625 -6.796875 0.765625 -7.4375 0.671875 -7.4375 C 0.609375 -7.4375 0.5625 -7.40625 0.5625 -7.34375 C 0.5625 -7.3125 0.5625 -7.296875 0.75 -7.109375 C 1.71875 -6.125 2.296875 -4.546875 2.296875 -2.484375 C 2.296875 -0.78125 1.921875 0.96875 0.6875 2.21875 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.4375 0.609375 2.484375 0.671875 2.484375 C 0.765625 2.484375 1.65625 1.8125 2.25 0.546875 C 2.75 -0.546875 2.875 -1.640625 2.875 -2.484375 Z M 2.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph2-1">
<path style="stroke:none;" d="M 3.28125 0 L 3.28125 -0.25 L 3.03125 -0.25 C 2.328125 -0.25 2.328125 -0.34375 2.328125 -0.5625 L 2.328125 -4.421875 C 2.328125 -4.609375 2.3125 -4.609375 2.125 -4.609375 C 1.671875 -4.171875 1.046875 -4.171875 0.765625 -4.171875 L 0.765625 -3.921875 C 0.921875 -3.921875 1.390625 -3.921875 1.765625 -4.109375 L 1.765625 -0.5625 C 1.765625 -0.34375 1.765625 -0.25 1.078125 -0.25 L 0.8125 -0.25 L 0.8125 0 L 2.046875 -0.03125 Z M 3.28125 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph2-2">
<path style="stroke:none;" d="M 3.515625 -1.265625 L 3.28125 -1.265625 C 3.25 -1.109375 3.1875 -0.703125 3.09375 -0.625 C 3.03125 -0.59375 2.5 -0.59375 2.40625 -0.59375 L 1.125 -0.59375 C 1.859375 -1.234375 2.09375 -1.4375 2.515625 -1.765625 C 3.03125 -2.171875 3.515625 -2.59375 3.515625 -3.265625 C 3.515625 -4.109375 2.78125 -4.609375 1.890625 -4.609375 C 1.015625 -4.609375 0.4375 -4.015625 0.4375 -3.375 C 0.4375 -3.015625 0.734375 -2.984375 0.8125 -2.984375 C 0.96875 -2.984375 1.171875 -3.09375 1.171875 -3.34375 C 1.171875 -3.484375 1.125 -3.71875 0.765625 -3.71875 C 0.984375 -4.21875 1.453125 -4.359375 1.78125 -4.359375 C 2.46875 -4.359375 2.84375 -3.828125 2.84375 -3.265625 C 2.84375 -2.65625 2.40625 -2.171875 2.1875 -1.921875 L 0.5 -0.265625 C 0.4375 -0.203125 0.4375 -0.1875 0.4375 0 L 3.296875 0 Z M 3.515625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-1">
<path style="stroke:none;" d="M 3.578125 -1.265625 C 3.578125 -1.796875 3.28125 -2.09375 3.15625 -2.21875 C 2.828125 -2.53125 2.4375 -2.609375 2.03125 -2.6875 C 1.46875 -2.796875 0.796875 -2.921875 0.796875 -3.5 C 0.796875 -3.84375 1.0625 -4.25 1.921875 -4.25 C 3 -4.25 3.0625 -3.359375 3.078125 -3.0625 C 3.078125 -2.96875 3.1875 -2.96875 3.1875 -2.96875 C 3.328125 -2.96875 3.328125 -3.015625 3.328125 -3.203125 L 3.328125 -4.203125 C 3.328125 -4.375 3.328125 -4.4375 3.21875 -4.4375 C 3.171875 -4.4375 3.140625 -4.4375 3.015625 -4.328125 C 2.984375 -4.28125 2.890625 -4.203125 2.84375 -4.171875 C 2.46875 -4.4375 2.0625 -4.4375 1.921875 -4.4375 C 0.703125 -4.4375 0.328125 -3.78125 0.328125 -3.21875 C 0.328125 -2.875 0.484375 -2.59375 0.75 -2.375 C 1.078125 -2.125 1.34375 -2.0625 2.0625 -1.921875 C 2.28125 -1.890625 3.09375 -1.71875 3.09375 -1.015625 C 3.09375 -0.5 2.75 -0.109375 1.96875 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.640625 0.5625 -1.6875 0.453125 -1.6875 C 0.328125 -1.6875 0.328125 -1.625 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.890625 -0.3125 C 1.3125 0.09375 1.765625 0.109375 1.96875 0.109375 C 3.109375 0.109375 3.578125 -0.5625 3.578125 -1.265625 Z M 3.578125 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-2">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.03125 -1.296875 3.984375 -1.296875 C 3.90625 -1.296875 3.875 -1.234375 3.859375 -1.15625 C 3.515625 -0.140625 2.625 -0.140625 2.515625 -0.140625 C 2.03125 -0.140625 1.625 -0.4375 1.40625 -0.796875 C 1.09375 -1.28125 1.09375 -1.9375 1.09375 -2.296875 L 3.875 -2.296875 C 4.09375 -2.296875 4.125 -2.296875 4.125 -2.5 C 4.125 -3.484375 3.578125 -4.4375 2.34375 -4.4375 C 1.1875 -4.4375 0.28125 -3.421875 0.28125 -2.1875 C 0.28125 -0.859375 1.3125 0.109375 2.453125 0.109375 C 3.671875 0.109375 4.125 -0.984375 4.125 -1.1875 Z M 3.46875 -2.5 L 1.109375 -2.5 C 1.171875 -3.984375 2 -4.234375 2.34375 -4.234375 C 3.359375 -4.234375 3.46875 -2.890625 3.46875 -2.5 Z M 3.46875 -2.5 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-3">
<path style="stroke:none;" d="M 4.8125 -4.015625 C 4.8125 -4.171875 4.6875 -4.5 4.3125 -4.5 C 4.109375 -4.5 3.671875 -4.4375 3.25 -4.03125 C 2.84375 -4.359375 2.421875 -4.390625 2.203125 -4.390625 C 1.28125 -4.390625 0.59375 -3.703125 0.59375 -2.9375 C 0.59375 -2.5 0.8125 -2.125 1.0625 -1.921875 C 0.9375 -1.765625 0.75 -1.4375 0.75 -1.09375 C 0.75 -0.78125 0.890625 -0.40625 1.1875 -0.203125 C 0.59375 -0.046875 0.28125 0.390625 0.28125 0.78125 C 0.28125 1.5 1.265625 2.046875 2.46875 2.046875 C 3.640625 2.046875 4.671875 1.53125 4.671875 0.765625 C 4.671875 0.421875 4.53125 -0.09375 4.03125 -0.359375 C 3.5 -0.640625 2.921875 -0.640625 2.328125 -0.640625 C 2.078125 -0.640625 1.640625 -0.640625 1.578125 -0.65625 C 1.265625 -0.6875 1.046875 -1 1.046875 -1.3125 C 1.046875 -1.359375 1.046875 -1.59375 1.21875 -1.78125 C 1.609375 -1.515625 2.015625 -1.484375 2.203125 -1.484375 C 3.125 -1.484375 3.8125 -2.15625 3.8125 -2.921875 C 3.8125 -3.296875 3.65625 -3.65625 3.40625 -3.890625 C 3.765625 -4.234375 4.125 -4.28125 4.296875 -4.28125 C 4.296875 -4.28125 4.359375 -4.28125 4.390625 -4.265625 C 4.28125 -4.234375 4.234375 -4.125 4.234375 -4 C 4.234375 -3.828125 4.359375 -3.703125 4.53125 -3.703125 C 4.625 -3.703125 4.8125 -3.78125 4.8125 -4.015625 Z M 3.0625 -2.9375 C 3.0625 -2.671875 3.0625 -2.34375 2.90625 -2.109375 C 2.828125 -1.984375 2.59375 -1.703125 2.203125 -1.703125 C 1.34375 -1.703125 1.34375 -2.703125 1.34375 -2.921875 C 1.34375 -3.1875 1.34375 -3.515625 1.5 -3.765625 C 1.578125 -3.875 1.8125 -4.15625 2.203125 -4.15625 C 3.0625 -4.15625 3.0625 -3.171875 3.0625 -2.9375 Z M 4.15625 0.78125 C 4.15625 1.3125 3.453125 1.8125 2.484375 1.8125 C 1.484375 1.8125 0.796875 1.3125 0.796875 0.78125 C 0.796875 0.328125 1.171875 -0.046875 1.609375 -0.0625 L 2.1875 -0.0625 C 3.046875 -0.0625 4.15625 -0.0625 4.15625 0.78125 Z M 4.15625 0.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-4">
<path style="stroke:none;" d="M 8.0625 0 L 8.0625 -0.3125 C 7.546875 -0.3125 7.296875 -0.3125 7.296875 -0.609375 L 7.296875 -2.5 C 7.296875 -3.359375 7.296875 -3.65625 6.984375 -4.015625 C 6.84375 -4.1875 6.515625 -4.390625 5.9375 -4.390625 C 5.109375 -4.390625 4.671875 -3.796875 4.5 -3.40625 C 4.359375 -4.28125 3.625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 L 5.3125 0 L 5.3125 -0.3125 C 4.640625 -0.3125 4.53125 -0.3125 4.53125 -0.75 L 4.53125 -2.578125 C 4.53125 -3.609375 5.234375 -4.171875 5.875 -4.171875 C 6.5 -4.171875 6.609375 -3.625 6.609375 -3.0625 L 6.609375 -0.75 C 6.609375 -0.3125 6.5 -0.3125 5.828125 -0.3125 L 5.828125 0 L 6.953125 -0.03125 Z M 8.0625 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-5">
<path style="stroke:none;" d="M 5.3125 0 L 5.3125 -0.3125 C 4.796875 -0.3125 4.546875 -0.3125 4.53125 -0.609375 L 4.53125 -2.5 C 4.53125 -3.359375 4.53125 -3.65625 4.234375 -4.015625 C 4.09375 -4.1875 3.765625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 Z M 5.3125 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-6">
<path style="stroke:none;" d="M 3.296875 -1.234375 L 3.296875 -1.796875 L 3.046875 -1.796875 L 3.046875 -1.25 C 3.046875 -0.515625 2.75 -0.140625 2.375 -0.140625 C 1.71875 -0.140625 1.71875 -1.046875 1.71875 -1.203125 L 1.71875 -3.96875 L 3.140625 -3.96875 L 3.140625 -4.28125 L 1.71875 -4.28125 L 1.71875 -6.109375 L 1.46875 -6.109375 C 1.453125 -5.28125 1.15625 -4.234375 0.1875 -4.1875 L 0.1875 -3.96875 L 1.03125 -3.96875 L 1.03125 -1.234375 C 1.03125 -0.015625 1.953125 0.109375 2.3125 0.109375 C 3.015625 0.109375 3.296875 -0.59375 3.296875 -1.234375 Z M 3.296875 -1.234375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-7">
<path style="stroke:none;" d="M 4.671875 -2.125 C 4.671875 -3.390625 3.6875 -4.4375 2.484375 -4.4375 C 1.234375 -4.4375 0.28125 -3.359375 0.28125 -2.125 C 0.28125 -0.84375 1.3125 0.109375 2.46875 0.109375 C 3.671875 0.109375 4.671875 -0.859375 4.671875 -2.125 Z M 3.84375 -2.203125 C 3.84375 -1.84375 3.84375 -1.3125 3.625 -0.875 C 3.40625 -0.421875 2.96875 -0.140625 2.484375 -0.140625 C 2.046875 -0.140625 1.625 -0.34375 1.34375 -0.796875 C 1.09375 -1.234375 1.09375 -1.84375 1.09375 -2.203125 C 1.09375 -2.59375 1.09375 -3.125 1.34375 -3.5625 C 1.609375 -4.015625 2.078125 -4.234375 2.46875 -4.234375 C 2.90625 -4.234375 3.328125 -4.015625 3.59375 -3.578125 C 3.84375 -3.15625 3.84375 -2.578125 3.84375 -2.203125 Z M 3.84375 -2.203125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-8">
<path style="stroke:none;" d="M 3.609375 -3.78125 C 3.609375 -4.09375 3.296875 -4.390625 2.875 -4.390625 C 2.15625 -4.390625 1.796875 -3.71875 1.65625 -3.296875 L 1.65625 -4.390625 L 0.28125 -4.28125 L 0.28125 -3.96875 C 0.96875 -3.96875 1.046875 -3.90625 1.046875 -3.40625 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.8125 -0.03125 2.265625 -0.03125 2.671875 0 L 2.671875 -0.3125 L 2.453125 -0.3125 C 1.71875 -0.3125 1.703125 -0.421875 1.703125 -0.78125 L 1.703125 -2.296875 C 1.703125 -3.28125 2.125 -4.171875 2.875 -4.171875 C 2.953125 -4.171875 2.96875 -4.171875 2.984375 -4.15625 C 2.953125 -4.140625 2.765625 -4.03125 2.765625 -3.765625 C 2.765625 -3.5 2.96875 -3.34375 3.1875 -3.34375 C 3.359375 -3.34375 3.609375 -3.46875 3.609375 -3.78125 Z M 3.609375 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-9">
<path style="stroke:none;" d="M 4.796875 -0.890625 L 4.796875 -1.4375 L 4.546875 -1.4375 L 4.546875 -0.890625 C 4.546875 -0.3125 4.296875 -0.25 4.1875 -0.25 C 3.859375 -0.25 3.8125 -0.6875 3.8125 -0.75 L 3.8125 -2.734375 C 3.8125 -3.140625 3.8125 -3.53125 3.46875 -3.90625 C 3.078125 -4.28125 2.578125 -4.4375 2.109375 -4.4375 C 1.296875 -4.4375 0.609375 -3.984375 0.609375 -3.328125 C 0.609375 -3.03125 0.796875 -2.859375 1.0625 -2.859375 C 1.34375 -2.859375 1.515625 -3.0625 1.515625 -3.3125 C 1.515625 -3.4375 1.46875 -3.765625 1.015625 -3.765625 C 1.28125 -4.125 1.765625 -4.234375 2.078125 -4.234375 C 2.5625 -4.234375 3.140625 -3.84375 3.140625 -2.953125 L 3.140625 -2.59375 C 2.625 -2.5625 1.9375 -2.53125 1.3125 -2.234375 C 0.5625 -1.890625 0.3125 -1.375 0.3125 -0.9375 C 0.3125 -0.140625 1.28125 0.109375 1.90625 0.109375 C 2.5625 0.109375 3.015625 -0.28125 3.203125 -0.75 C 3.25 -0.359375 3.515625 0.0625 3.984375 0.0625 C 4.1875 0.0625 4.796875 -0.078125 4.796875 -0.890625 Z M 3.140625 -1.390625 C 3.140625 -0.453125 2.421875 -0.109375 1.96875 -0.109375 C 1.484375 -0.109375 1.078125 -0.453125 1.078125 -0.953125 C 1.078125 -1.5 1.5 -2.328125 3.140625 -2.375 Z M 3.140625 -1.390625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-10">
<path style="stroke:none;" d="M 5.234375 0 L 5.234375 -0.3125 C 4.5625 -0.3125 4.453125 -0.3125 4.453125 -0.75 L 4.453125 -4.390625 L 3.203125 -4.3125 C 3.046875 -4.296875 3.03125 -4.28125 3.03125 -4.28125 C 3 -4.28125 2.984375 -4.28125 2.84375 -4.28125 L 1.671875 -4.28125 L 1.671875 -5.390625 C 1.671875 -6.375 2.53125 -6.78125 3.140625 -6.78125 C 3.4375 -6.78125 3.796875 -6.671875 4 -6.453125 C 3.59375 -6.421875 3.53125 -6.15625 3.53125 -6 C 3.53125 -5.671875 3.796875 -5.53125 3.984375 -5.53125 C 4.203125 -5.53125 4.4375 -5.6875 4.4375 -6 C 4.4375 -6.578125 3.890625 -7 3.15625 -7 C 2.234375 -7 1.046875 -6.484375 1.046875 -5.40625 L 1.046875 -4.28125 L 0.265625 -4.28125 L 0.265625 -3.96875 L 1.046875 -3.96875 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.375 -0.03125 L 2.484375 0 L 2.484375 -0.3125 C 1.8125 -0.3125 1.703125 -0.3125 1.703125 -0.75 L 1.703125 -3.96875 L 3.28125 -3.96875 C 3.734375 -3.96875 3.796875 -3.84375 3.796875 -3.4375 L 3.796875 -0.75 C 3.796875 -0.3125 3.6875 -0.3125 3.03125 -0.3125 L 3.03125 0 L 4.125 -0.03125 Z M 5.234375 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d2-glyph3-11">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.015625 -1.28125 3.984375 -1.28125 C 3.90625 -1.28125 3.875 -1.234375 3.859375 -1.1875 C 3.578125 -0.265625 2.921875 -0.140625 2.5625 -0.140625 C 2.03125 -0.140625 1.15625 -0.5625 1.15625 -2.15625 C 1.15625 -3.78125 1.96875 -4.203125 2.5 -4.203125 C 2.59375 -4.203125 3.21875 -4.1875 3.5625 -3.828125 C 3.15625 -3.796875 3.09375 -3.5 3.09375 -3.375 C 3.09375 -3.109375 3.28125 -2.921875 3.546875 -2.921875 C 3.8125 -2.921875 4.015625 -3.078125 4.015625 -3.390625 C 4.015625 -4.0625 3.25 -4.4375 2.484375 -4.4375 C 1.25 -4.4375 0.34375 -3.375 0.34375 -2.140625 C 0.34375 -0.875 1.3125 0.109375 2.46875 0.109375 C 3.796875 0.109375 4.125 -1.078125 4.125 -1.1875 Z M 4.125 -1.1875 "/>
</symbol>
</g>
</defs>
<g id="analisi1_lez30a_d2-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -14.17428 -0.00107643 L 155.508486 -0.00107643 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073309 2.389926 C -1.693101 0.955324 -0.85037 0.277221 0.00019924 -0.00107643 C -0.85037 -0.279373 -1.693101 -0.957477 -2.073309 -2.392079 " transform="matrix(0.996575,0,0,-0.996575,183.757614,144.377834)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="187.461693" y="146.515486"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000732132 -14.174624 L -0.000732132 127.161046 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073929 2.391734 C -1.69372 0.957133 -0.85099 0.279029 -0.000420486 0.000732132 C -0.85099 -0.277565 -1.69372 -0.955669 -2.073929 -2.39027 " transform="matrix(0,-0.996575,-0.996575,0,28.582761,17.452706)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-2" x="25.970738" y="11.818441"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 14.172816 63.779888 L 15.462389 62.502074 L 16.748043 61.251697 L 18.037616 60.020919 L 19.327189 58.813659 L 20.612843 57.629917 L 21.902416 56.473613 L 23.19199 55.336907 L 24.477643 54.223719 L 25.767217 53.134049 L 27.05287 52.067897 L 28.342444 51.025263 L 29.632017 50.010067 L 30.917671 49.01447 L 32.207244 48.04239 L 33.496817 47.093828 L 34.782471 46.168785 L 36.072044 45.267259 L 37.357698 44.385332 L 38.647271 43.530843 L 39.936845 42.699872 L 41.222498 41.892419 L 42.512072 41.108483 L 43.797725 40.348066 L 45.087299 39.607248 L 46.376872 38.893867 L 47.662526 38.204004 L 48.952099 37.533739 L 50.241672 36.890912 L 51.527326 36.271603 L 52.816899 35.671893 L 54.102553 35.09962 L 55.392126 34.546946 L 56.6817 34.02171 L 57.967353 33.516071 L 59.256927 33.037871 L 60.5465 32.579269 L 61.832154 32.148105 L 63.121727 31.736539 L 64.407381 31.348491 L 65.696954 30.98788 L 66.986527 30.646869 L 68.272181 30.329375 L 69.561754 30.035399 L 70.851328 29.768861 L 72.136981 29.521922 L 73.426555 29.2985 L 74.712208 29.098597 L 76.001782 28.922211 L 77.291355 28.769344 L 78.577009 28.639995 L 79.866582 28.534163 L 81.156155 28.45185 L 82.441809 28.393055 L 83.731382 28.357778 L 85.017036 28.346019 L 86.306609 28.357778 L 87.596183 28.393055 L 88.881836 28.45185 L 90.17141 28.534163 L 91.460983 28.636075 L 92.746637 28.765424 L 94.03621 28.918292 L 95.321864 29.090757 L 96.611437 29.290661 L 97.90101 29.514082 L 99.186664 29.757102 L 100.476237 30.02756 L 101.765811 30.321536 L 103.051464 30.63511 L 104.341038 30.976121 L 105.626691 31.336732 L 106.916265 31.72086 L 108.205838 32.132426 L 109.491492 32.56359 L 110.781065 33.022192 L 112.070638 33.500393 L 113.356292 34.002111 L 114.645866 34.531267 L 115.931519 35.080022 L 117.221093 35.652295 L 118.510666 36.248085 L 119.79632 36.871314 L 121.085893 37.514141 L 122.375466 38.180486 L 123.66112 38.870349 L 124.950693 39.58373 L 126.236347 40.320629 L 127.52592 41.081046 L 128.815494 41.864981 L 130.101147 42.672434 L 131.390721 43.503405 L 132.680294 44.357895 L 133.965948 45.235902 L 135.255521 46.137427 L 136.541175 47.062471 L 137.830748 48.007113 L 139.120321 48.979192 L 140.405975 49.97479 L 141.695548 50.993906 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-3" x="173.496691" y="96.042961"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-1" x="179.426311" y="96.042961"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="183.288038" y="96.042961"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-2" x="188.962535" y="96.042961"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 28.346363 51.025263 L 127.561197 41.100644 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 58.816406 93.527344 C 58.816406 92.433594 57.929688 91.542969 56.832031 91.542969 C 55.734375 91.542969 54.847656 92.433594 54.847656 93.527344 C 54.847656 94.625 55.734375 95.515625 56.832031 95.515625 C 57.929688 95.515625 58.816406 94.625 58.816406 93.527344 Z M 58.816406 93.527344 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-1" x="7.280975" y="104.483949"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="11.141706" y="104.483949"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph2-1" x="16.816203" y="105.972832"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-4" x="21.269895" y="104.483949"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-3" x="25.686081" y="104.483949"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-1" x="31.612348" y="104.483949"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="35.473079" y="104.483949"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph2-1" x="41.147576" y="105.972832"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-2" x="45.602265" y="104.483949"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph1-2" x="49.463449" y="104.483949"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 157.691406 103.417969 C 157.691406 102.320312 156.804688 101.429688 155.707031 101.429688 C 154.609375 101.429688 153.722656 102.320312 153.722656 103.417969 C 153.722656 104.511719 154.609375 105.402344 155.707031 105.402344 C 156.804688 105.402344 157.691406 104.511719 157.691406 103.417969 Z M 157.691406 103.417969 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-1" x="159.212785" y="97.427203"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="163.073515" y="97.427203"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph2-2" x="168.748012" y="98.917082"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-4" x="173.201705" y="97.427203"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-3" x="177.617891" y="97.427203"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-1" x="183.544158" y="97.427203"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="187.404888" y="97.427203"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph2-2" x="193.079385" y="98.917082"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph1-2" x="197.534074" y="97.427203"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph1-2" x="201.395258" y="97.427203"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 28.346363 -0.00107643 L 28.346363 51.025263 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="51.768073" y="152.161082"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph2-1" x="57.44257" y="153.649965"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 127.561197 -0.00107643 L 127.561197 41.100644 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph0-1" x="150.640249" y="152.161082"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph2-2" x="156.314745" y="153.649965"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph3-1" x="86.245573" y="68.316258"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-2" x="90.162357" y="68.316258"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-3" x="94.575565" y="68.316258"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-4" x="99.539802" y="68.316258"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-2" x="107.813201" y="68.316258"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-5" x="112.226409" y="68.316258"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph3-6" x="117.464673" y="68.316258"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-7" x="121.325857" y="68.316258"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d2-glyph3-3" x="91.913094" y="126.476361"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-8" x="96.877332" y="126.476361"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-9" x="100.766316" y="126.476361"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-10" x="105.730554" y="126.476361"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-11" x="111.246815" y="126.476361"/>
  <use xlink:href="#analisi1_lez30a_d2-glyph3-7" x="115.660022" y="126.476361"/>
</g>
</g>
</svg></figure>
<p>Formalmente, la retta passante per $(x_1, f(x_1))$ e $(x_2, f(x_2))$, con $x_1 \\neq x_2$, ha equazione</p>
<p>$$y(x) = f(x_1) + \\frac{f(x_2) - f(x_1)}{x_2 - x_1}(x - x_1)$$</p>
<p>e la condizione di convessità è</p>
<p>$$f(x) \\le f(x_1) + \\frac{f(x_2) - f(x_1)}{x_2 - x_1}(x - x_1)$$</p>
<p>per ogni $x_1, x_2 \\in I$ con $x_1 \\neq x_2$ e per ogni $x \\in [\\min(x_1,x_2), \\max(x_1,x_2)]$.</p>`
          },
          {
            subtitle: "Definizione — Funzione Concava",
            content: `<p>Una funzione $f: I \\to \\mathbb{R}$ si dice <strong>concava</strong> in $I$ se il segmento che congiunge due punti qualsiasi del suo grafico sta <strong>al di sotto</strong> del grafico stesso.</p>
<figure class="figura" data-id="analisi1_lez30a_d3"><?xml version="1.0" encoding="UTF-8"?>
<svg id="analisi1_lez30a_d3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="213.267pt" height="162.968pt" viewBox="0 0 213.267 162.968" version="1.2"><style>#analisi1_lez30a_d3 [fill="rgb(0%,0%,0%)"],#analisi1_lez30a_d3 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#analisi1_lez30a_d3 [stroke="rgb(0%,0%,0%)"],#analisi1_lez30a_d3 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#analisi1_lez30a_d3 [fill="rgb(0%,0%,100%)"],#analisi1_lez30a_d3 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d3 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d3 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#analisi1_lez30a_d3 [stroke="rgb(0%,0%,100%)"],#analisi1_lez30a_d3 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d3 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d3 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#analisi1_lez30a_d3 [fill="rgb(100%,0%,0%)"],#analisi1_lez30a_d3 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #analisi1_lez30a_d3 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #analisi1_lez30a_d3 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#analisi1_lez30a_d3 [stroke="rgb(100%,0%,0%)"],#analisi1_lez30a_d3 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #analisi1_lez30a_d3 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #analisi1_lez30a_d3 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph0-1">
<path style="stroke:none;" d="M 4.921875 -1.421875 C 4.921875 -1.515625 4.828125 -1.515625 4.796875 -1.515625 C 4.71875 -1.515625 4.6875 -1.484375 4.671875 -1.40625 C 4.34375 -0.34375 3.671875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.96875 -1.640625 L 3.3125 -3 C 3.375 -3.25 3.609375 -4.171875 4.296875 -4.171875 C 4.34375 -4.171875 4.578125 -4.171875 4.796875 -4.03125 C 4.515625 -3.984375 4.3125 -3.734375 4.3125 -3.5 C 4.3125 -3.34375 4.421875 -3.15625 4.6875 -3.15625 C 4.90625 -3.15625 5.234375 -3.328125 5.234375 -3.734375 C 5.234375 -4.25 4.640625 -4.390625 4.3125 -4.390625 C 3.734375 -4.390625 3.390625 -3.859375 3.265625 -3.625 C 3.015625 -4.28125 2.484375 -4.390625 2.1875 -4.390625 C 1.15625 -4.390625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.921875 1.828125 -4.171875 2.171875 -4.171875 C 2.359375 -4.171875 2.703125 -4.078125 2.703125 -3.5 C 2.703125 -3.1875 2.546875 -2.53125 2.171875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.9375 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.828125 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.578125 2.265625 -0.640625 C 2.375 -0.28125 2.734375 0.109375 3.328125 0.109375 C 4.359375 0.109375 4.921875 -1.171875 4.921875 -1.421875 Z M 4.921875 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph0-2">
<path style="stroke:none;" d="M 4.828125 -3.78125 C 4.859375 -3.921875 4.859375 -3.9375 4.859375 -4.015625 C 4.859375 -4.1875 4.71875 -4.28125 4.578125 -4.28125 C 4.46875 -4.28125 4.3125 -4.21875 4.234375 -4.0625 C 4.203125 -4.015625 4.125 -3.703125 4.09375 -3.53125 L 3.890625 -2.734375 L 3.4375 -0.953125 C 3.40625 -0.796875 2.96875 -0.109375 2.328125 -0.109375 C 1.8125 -0.109375 1.703125 -0.546875 1.703125 -0.90625 C 1.703125 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.265625 2.40625 -3.375 2.40625 -3.578125 C 2.40625 -4.015625 2.09375 -4.390625 1.59375 -4.390625 C 0.65625 -4.390625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.9375 C 0.828125 -3.875 1.234375 -4.171875 1.5625 -4.171875 C 1.640625 -4.171875 1.8125 -4.171875 1.8125 -3.84375 C 1.8125 -3.609375 1.71875 -3.34375 1.640625 -3.15625 C 1.25 -2.109375 1.078125 -1.53125 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.28125 0.109375 C 2.671875 0.109375 3 -0.0625 3.28125 -0.34375 C 3.15625 0.171875 3.03125 0.671875 2.640625 1.1875 C 2.375 1.53125 2 1.8125 1.546875 1.8125 C 1.40625 1.8125 0.96875 1.78125 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.3125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.046875 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.03125 1.546875 2.03125 C 2.5625 2.03125 3.59375 1.125 3.875 0.015625 Z M 4.828125 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph0-3">
<path style="stroke:none;" d="M 5.484375 -6.3125 C 5.484375 -6.765625 5.015625 -7 4.609375 -7 C 4.28125 -7 3.65625 -6.8125 3.359375 -5.828125 C 3.296875 -5.625 3.265625 -5.53125 3.03125 -4.28125 L 2.34375 -4.28125 C 2.15625 -4.28125 2.046875 -4.28125 2.046875 -4.09375 C 2.046875 -3.96875 2.140625 -3.96875 2.328125 -3.96875 L 2.96875 -3.96875 L 2.234375 -0.046875 C 2.046875 0.90625 1.890625 1.8125 1.375 1.8125 C 1.328125 1.8125 1.078125 1.8125 0.890625 1.640625 C 1.34375 1.609375 1.4375 1.25 1.4375 1.09375 C 1.4375 0.875 1.265625 0.75 1.078125 0.75 C 0.8125 0.75 0.53125 0.96875 0.53125 1.34375 C 0.53125 1.796875 0.96875 2.03125 1.375 2.03125 C 1.921875 2.03125 2.3125 1.453125 2.484375 1.078125 C 2.8125 0.453125 3.03125 -0.75 3.046875 -0.828125 L 3.640625 -3.96875 L 4.5 -3.96875 C 4.6875 -3.96875 4.796875 -3.96875 4.796875 -4.171875 C 4.796875 -4.28125 4.6875 -4.28125 4.53125 -4.28125 L 3.703125 -4.28125 C 3.8125 -4.859375 3.796875 -4.828125 3.90625 -5.40625 C 3.953125 -5.609375 4.09375 -6.3125 4.140625 -6.4375 C 4.234375 -6.625 4.40625 -6.78125 4.609375 -6.78125 C 4.65625 -6.78125 4.90625 -6.78125 5.09375 -6.59375 C 4.65625 -6.5625 4.5625 -6.21875 4.5625 -6.0625 C 4.5625 -5.828125 4.75 -5.71875 4.9375 -5.71875 C 5.1875 -5.71875 5.484375 -5.9375 5.484375 -6.3125 Z M 5.484375 -6.3125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph0-4">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.671875 1.765625 -1.046875 1.375 -1.046875 C 1.046875 -1.046875 0.859375 -0.796875 0.859375 -0.53125 C 0.859375 -0.265625 1.046875 0 1.375 0 C 1.5 0 1.625 -0.046875 1.71875 -0.125 C 1.75 -0.15625 1.78125 -0.15625 1.78125 -0.15625 C 1.78125 -0.15625 1.796875 -0.15625 1.796875 -0.015625 C 1.796875 0.71875 1.453125 1.3125 1.125 1.640625 C 1.015625 1.75 1.015625 1.78125 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.21875 1.921875 2.015625 1.15625 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph1-1">
<path style="stroke:none;" d="M 3.28125 2.375 C 3.28125 2.34375 3.28125 2.328125 3.109375 2.15625 C 1.875 0.90625 1.5625 -0.96875 1.5625 -2.484375 C 1.5625 -4.203125 1.9375 -5.9375 3.15625 -7.171875 C 3.28125 -7.296875 3.28125 -7.3125 3.28125 -7.34375 C 3.28125 -7.40625 3.25 -7.4375 3.1875 -7.4375 C 3.078125 -7.4375 2.1875 -6.765625 1.609375 -5.5 C 1.09375 -4.421875 0.984375 -3.3125 0.984375 -2.484375 C 0.984375 -1.703125 1.09375 -0.5 1.640625 0.609375 C 2.234375 1.828125 3.078125 2.484375 3.1875 2.484375 C 3.25 2.484375 3.28125 2.453125 3.28125 2.375 Z M 3.28125 2.375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph1-2">
<path style="stroke:none;" d="M 2.875 -2.484375 C 2.875 -3.25 2.765625 -4.453125 2.21875 -5.578125 C 1.625 -6.796875 0.765625 -7.4375 0.671875 -7.4375 C 0.609375 -7.4375 0.5625 -7.40625 0.5625 -7.34375 C 0.5625 -7.3125 0.5625 -7.296875 0.75 -7.109375 C 1.71875 -6.125 2.296875 -4.546875 2.296875 -2.484375 C 2.296875 -0.78125 1.921875 0.96875 0.6875 2.21875 C 0.5625 2.328125 0.5625 2.34375 0.5625 2.375 C 0.5625 2.4375 0.609375 2.484375 0.671875 2.484375 C 0.765625 2.484375 1.65625 1.8125 2.25 0.546875 C 2.75 -0.546875 2.875 -1.640625 2.875 -2.484375 Z M 2.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph2-1">
<path style="stroke:none;" d="M 3.28125 0 L 3.28125 -0.25 L 3.03125 -0.25 C 2.328125 -0.25 2.328125 -0.34375 2.328125 -0.5625 L 2.328125 -4.421875 C 2.328125 -4.609375 2.3125 -4.609375 2.125 -4.609375 C 1.671875 -4.171875 1.046875 -4.171875 0.765625 -4.171875 L 0.765625 -3.921875 C 0.921875 -3.921875 1.390625 -3.921875 1.765625 -4.109375 L 1.765625 -0.5625 C 1.765625 -0.34375 1.765625 -0.25 1.078125 -0.25 L 0.8125 -0.25 L 0.8125 0 L 2.046875 -0.03125 Z M 3.28125 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph2-2">
<path style="stroke:none;" d="M 3.515625 -1.265625 L 3.28125 -1.265625 C 3.25 -1.109375 3.1875 -0.703125 3.09375 -0.625 C 3.03125 -0.59375 2.5 -0.59375 2.40625 -0.59375 L 1.125 -0.59375 C 1.859375 -1.234375 2.09375 -1.4375 2.515625 -1.765625 C 3.03125 -2.171875 3.515625 -2.59375 3.515625 -3.265625 C 3.515625 -4.109375 2.78125 -4.609375 1.890625 -4.609375 C 1.015625 -4.609375 0.4375 -4.015625 0.4375 -3.375 C 0.4375 -3.015625 0.734375 -2.984375 0.8125 -2.984375 C 0.96875 -2.984375 1.171875 -3.09375 1.171875 -3.34375 C 1.171875 -3.484375 1.125 -3.71875 0.765625 -3.71875 C 0.984375 -4.21875 1.453125 -4.359375 1.78125 -4.359375 C 2.46875 -4.359375 2.84375 -3.828125 2.84375 -3.265625 C 2.84375 -2.65625 2.40625 -2.171875 2.1875 -1.921875 L 0.5 -0.265625 C 0.4375 -0.203125 0.4375 -0.1875 0.4375 0 L 3.296875 0 Z M 3.515625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-1">
<path style="stroke:none;" d="M 3.578125 -1.265625 C 3.578125 -1.796875 3.28125 -2.09375 3.15625 -2.21875 C 2.828125 -2.53125 2.4375 -2.609375 2.03125 -2.6875 C 1.46875 -2.796875 0.796875 -2.921875 0.796875 -3.5 C 0.796875 -3.84375 1.0625 -4.25 1.921875 -4.25 C 3 -4.25 3.0625 -3.359375 3.078125 -3.0625 C 3.078125 -2.96875 3.1875 -2.96875 3.1875 -2.96875 C 3.328125 -2.96875 3.328125 -3.015625 3.328125 -3.203125 L 3.328125 -4.203125 C 3.328125 -4.375 3.328125 -4.4375 3.21875 -4.4375 C 3.171875 -4.4375 3.140625 -4.4375 3.015625 -4.328125 C 2.984375 -4.28125 2.890625 -4.203125 2.84375 -4.171875 C 2.46875 -4.4375 2.0625 -4.4375 1.921875 -4.4375 C 0.703125 -4.4375 0.328125 -3.78125 0.328125 -3.21875 C 0.328125 -2.875 0.484375 -2.59375 0.75 -2.375 C 1.078125 -2.125 1.34375 -2.0625 2.0625 -1.921875 C 2.28125 -1.890625 3.09375 -1.71875 3.09375 -1.015625 C 3.09375 -0.5 2.75 -0.109375 1.96875 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.640625 0.5625 -1.6875 0.453125 -1.6875 C 0.328125 -1.6875 0.328125 -1.625 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.890625 -0.3125 C 1.3125 0.09375 1.765625 0.109375 1.96875 0.109375 C 3.109375 0.109375 3.578125 -0.5625 3.578125 -1.265625 Z M 3.578125 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-2">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.03125 -1.296875 3.984375 -1.296875 C 3.90625 -1.296875 3.875 -1.234375 3.859375 -1.15625 C 3.515625 -0.140625 2.625 -0.140625 2.515625 -0.140625 C 2.03125 -0.140625 1.625 -0.4375 1.40625 -0.796875 C 1.09375 -1.28125 1.09375 -1.9375 1.09375 -2.296875 L 3.875 -2.296875 C 4.09375 -2.296875 4.125 -2.296875 4.125 -2.5 C 4.125 -3.484375 3.578125 -4.4375 2.34375 -4.4375 C 1.1875 -4.4375 0.28125 -3.421875 0.28125 -2.1875 C 0.28125 -0.859375 1.3125 0.109375 2.453125 0.109375 C 3.671875 0.109375 4.125 -0.984375 4.125 -1.1875 Z M 3.46875 -2.5 L 1.109375 -2.5 C 1.171875 -3.984375 2 -4.234375 2.34375 -4.234375 C 3.359375 -4.234375 3.46875 -2.890625 3.46875 -2.5 Z M 3.46875 -2.5 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-3">
<path style="stroke:none;" d="M 4.8125 -4.015625 C 4.8125 -4.171875 4.6875 -4.5 4.3125 -4.5 C 4.109375 -4.5 3.671875 -4.4375 3.25 -4.03125 C 2.84375 -4.359375 2.421875 -4.390625 2.203125 -4.390625 C 1.28125 -4.390625 0.59375 -3.703125 0.59375 -2.9375 C 0.59375 -2.5 0.8125 -2.125 1.0625 -1.921875 C 0.9375 -1.765625 0.75 -1.4375 0.75 -1.09375 C 0.75 -0.78125 0.890625 -0.40625 1.1875 -0.203125 C 0.59375 -0.046875 0.28125 0.390625 0.28125 0.78125 C 0.28125 1.5 1.265625 2.046875 2.46875 2.046875 C 3.640625 2.046875 4.671875 1.53125 4.671875 0.765625 C 4.671875 0.421875 4.53125 -0.09375 4.03125 -0.359375 C 3.5 -0.640625 2.921875 -0.640625 2.328125 -0.640625 C 2.078125 -0.640625 1.640625 -0.640625 1.578125 -0.65625 C 1.265625 -0.6875 1.046875 -1 1.046875 -1.3125 C 1.046875 -1.359375 1.046875 -1.59375 1.21875 -1.78125 C 1.609375 -1.515625 2.015625 -1.484375 2.203125 -1.484375 C 3.125 -1.484375 3.8125 -2.15625 3.8125 -2.921875 C 3.8125 -3.296875 3.65625 -3.65625 3.40625 -3.890625 C 3.765625 -4.234375 4.125 -4.28125 4.296875 -4.28125 C 4.296875 -4.28125 4.359375 -4.28125 4.390625 -4.265625 C 4.28125 -4.234375 4.234375 -4.125 4.234375 -4 C 4.234375 -3.828125 4.359375 -3.703125 4.53125 -3.703125 C 4.625 -3.703125 4.8125 -3.78125 4.8125 -4.015625 Z M 3.0625 -2.9375 C 3.0625 -2.671875 3.0625 -2.34375 2.90625 -2.109375 C 2.828125 -1.984375 2.59375 -1.703125 2.203125 -1.703125 C 1.34375 -1.703125 1.34375 -2.703125 1.34375 -2.921875 C 1.34375 -3.1875 1.34375 -3.515625 1.5 -3.765625 C 1.578125 -3.875 1.8125 -4.15625 2.203125 -4.15625 C 3.0625 -4.15625 3.0625 -3.171875 3.0625 -2.9375 Z M 4.15625 0.78125 C 4.15625 1.3125 3.453125 1.8125 2.484375 1.8125 C 1.484375 1.8125 0.796875 1.3125 0.796875 0.78125 C 0.796875 0.328125 1.171875 -0.046875 1.609375 -0.0625 L 2.1875 -0.0625 C 3.046875 -0.0625 4.15625 -0.0625 4.15625 0.78125 Z M 4.15625 0.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-4">
<path style="stroke:none;" d="M 8.0625 0 L 8.0625 -0.3125 C 7.546875 -0.3125 7.296875 -0.3125 7.296875 -0.609375 L 7.296875 -2.5 C 7.296875 -3.359375 7.296875 -3.65625 6.984375 -4.015625 C 6.84375 -4.1875 6.515625 -4.390625 5.9375 -4.390625 C 5.109375 -4.390625 4.671875 -3.796875 4.5 -3.40625 C 4.359375 -4.28125 3.625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 L 5.3125 0 L 5.3125 -0.3125 C 4.640625 -0.3125 4.53125 -0.3125 4.53125 -0.75 L 4.53125 -2.578125 C 4.53125 -3.609375 5.234375 -4.171875 5.875 -4.171875 C 6.5 -4.171875 6.609375 -3.625 6.609375 -3.0625 L 6.609375 -0.75 C 6.609375 -0.3125 6.5 -0.3125 5.828125 -0.3125 L 5.828125 0 L 6.953125 -0.03125 Z M 8.0625 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-5">
<path style="stroke:none;" d="M 5.3125 0 L 5.3125 -0.3125 C 4.796875 -0.3125 4.546875 -0.3125 4.53125 -0.609375 L 4.53125 -2.5 C 4.53125 -3.359375 4.53125 -3.65625 4.234375 -4.015625 C 4.09375 -4.1875 3.765625 -4.390625 3.1875 -4.390625 C 2.453125 -4.390625 2 -3.953125 1.71875 -3.34375 L 1.71875 -4.390625 L 0.3125 -4.28125 L 0.3125 -3.96875 C 1.015625 -3.96875 1.09375 -3.90625 1.09375 -3.40625 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.546875 0 L 2.546875 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.578125 C 1.78125 -3.609375 2.484375 -4.171875 3.109375 -4.171875 C 3.734375 -4.171875 3.84375 -3.625 3.84375 -3.0625 L 3.84375 -0.75 C 3.84375 -0.3125 3.734375 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 Z M 5.3125 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-6">
<path style="stroke:none;" d="M 3.296875 -1.234375 L 3.296875 -1.796875 L 3.046875 -1.796875 L 3.046875 -1.25 C 3.046875 -0.515625 2.75 -0.140625 2.375 -0.140625 C 1.71875 -0.140625 1.71875 -1.046875 1.71875 -1.203125 L 1.71875 -3.96875 L 3.140625 -3.96875 L 3.140625 -4.28125 L 1.71875 -4.28125 L 1.71875 -6.109375 L 1.46875 -6.109375 C 1.453125 -5.28125 1.15625 -4.234375 0.1875 -4.1875 L 0.1875 -3.96875 L 1.03125 -3.96875 L 1.03125 -1.234375 C 1.03125 -0.015625 1.953125 0.109375 2.3125 0.109375 C 3.015625 0.109375 3.296875 -0.59375 3.296875 -1.234375 Z M 3.296875 -1.234375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-7">
<path style="stroke:none;" d="M 4.671875 -2.125 C 4.671875 -3.390625 3.6875 -4.4375 2.484375 -4.4375 C 1.234375 -4.4375 0.28125 -3.359375 0.28125 -2.125 C 0.28125 -0.84375 1.3125 0.109375 2.46875 0.109375 C 3.671875 0.109375 4.671875 -0.859375 4.671875 -2.125 Z M 3.84375 -2.203125 C 3.84375 -1.84375 3.84375 -1.3125 3.625 -0.875 C 3.40625 -0.421875 2.96875 -0.140625 2.484375 -0.140625 C 2.046875 -0.140625 1.625 -0.34375 1.34375 -0.796875 C 1.09375 -1.234375 1.09375 -1.84375 1.09375 -2.203125 C 1.09375 -2.59375 1.09375 -3.125 1.34375 -3.5625 C 1.609375 -4.015625 2.078125 -4.234375 2.46875 -4.234375 C 2.90625 -4.234375 3.328125 -4.015625 3.59375 -3.578125 C 3.84375 -3.15625 3.84375 -2.578125 3.84375 -2.203125 Z M 3.84375 -2.203125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-8">
<path style="stroke:none;" d="M 3.609375 -3.78125 C 3.609375 -4.09375 3.296875 -4.390625 2.875 -4.390625 C 2.15625 -4.390625 1.796875 -3.71875 1.65625 -3.296875 L 1.65625 -4.390625 L 0.28125 -4.28125 L 0.28125 -3.96875 C 0.96875 -3.96875 1.046875 -3.90625 1.046875 -3.40625 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.8125 -0.03125 2.265625 -0.03125 2.671875 0 L 2.671875 -0.3125 L 2.453125 -0.3125 C 1.71875 -0.3125 1.703125 -0.421875 1.703125 -0.78125 L 1.703125 -2.296875 C 1.703125 -3.28125 2.125 -4.171875 2.875 -4.171875 C 2.953125 -4.171875 2.96875 -4.171875 2.984375 -4.15625 C 2.953125 -4.140625 2.765625 -4.03125 2.765625 -3.765625 C 2.765625 -3.5 2.96875 -3.34375 3.1875 -3.34375 C 3.359375 -3.34375 3.609375 -3.46875 3.609375 -3.78125 Z M 3.609375 -3.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-9">
<path style="stroke:none;" d="M 4.796875 -0.890625 L 4.796875 -1.4375 L 4.546875 -1.4375 L 4.546875 -0.890625 C 4.546875 -0.3125 4.296875 -0.25 4.1875 -0.25 C 3.859375 -0.25 3.8125 -0.6875 3.8125 -0.75 L 3.8125 -2.734375 C 3.8125 -3.140625 3.8125 -3.53125 3.46875 -3.90625 C 3.078125 -4.28125 2.578125 -4.4375 2.109375 -4.4375 C 1.296875 -4.4375 0.609375 -3.984375 0.609375 -3.328125 C 0.609375 -3.03125 0.796875 -2.859375 1.0625 -2.859375 C 1.34375 -2.859375 1.515625 -3.0625 1.515625 -3.3125 C 1.515625 -3.4375 1.46875 -3.765625 1.015625 -3.765625 C 1.28125 -4.125 1.765625 -4.234375 2.078125 -4.234375 C 2.5625 -4.234375 3.140625 -3.84375 3.140625 -2.953125 L 3.140625 -2.59375 C 2.625 -2.5625 1.9375 -2.53125 1.3125 -2.234375 C 0.5625 -1.890625 0.3125 -1.375 0.3125 -0.9375 C 0.3125 -0.140625 1.28125 0.109375 1.90625 0.109375 C 2.5625 0.109375 3.015625 -0.28125 3.203125 -0.75 C 3.25 -0.359375 3.515625 0.0625 3.984375 0.0625 C 4.1875 0.0625 4.796875 -0.078125 4.796875 -0.890625 Z M 3.140625 -1.390625 C 3.140625 -0.453125 2.421875 -0.109375 1.96875 -0.109375 C 1.484375 -0.109375 1.078125 -0.453125 1.078125 -0.953125 C 1.078125 -1.5 1.5 -2.328125 3.140625 -2.375 Z M 3.140625 -1.390625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-10">
<path style="stroke:none;" d="M 5.234375 0 L 5.234375 -0.3125 C 4.5625 -0.3125 4.453125 -0.3125 4.453125 -0.75 L 4.453125 -4.390625 L 3.203125 -4.3125 C 3.046875 -4.296875 3.03125 -4.28125 3.03125 -4.28125 C 3 -4.28125 2.984375 -4.28125 2.84375 -4.28125 L 1.671875 -4.28125 L 1.671875 -5.390625 C 1.671875 -6.375 2.53125 -6.78125 3.140625 -6.78125 C 3.4375 -6.78125 3.796875 -6.671875 4 -6.453125 C 3.59375 -6.421875 3.53125 -6.15625 3.53125 -6 C 3.53125 -5.671875 3.796875 -5.53125 3.984375 -5.53125 C 4.203125 -5.53125 4.4375 -5.6875 4.4375 -6 C 4.4375 -6.578125 3.890625 -7 3.15625 -7 C 2.234375 -7 1.046875 -6.484375 1.046875 -5.40625 L 1.046875 -4.28125 L 0.265625 -4.28125 L 0.265625 -3.96875 L 1.046875 -3.96875 L 1.046875 -0.75 C 1.046875 -0.3125 0.9375 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.375 -0.03125 L 2.484375 0 L 2.484375 -0.3125 C 1.8125 -0.3125 1.703125 -0.3125 1.703125 -0.75 L 1.703125 -3.96875 L 3.28125 -3.96875 C 3.734375 -3.96875 3.796875 -3.84375 3.796875 -3.4375 L 3.796875 -0.75 C 3.796875 -0.3125 3.6875 -0.3125 3.03125 -0.3125 L 3.03125 0 L 4.125 -0.03125 Z M 5.234375 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d3-glyph3-11">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.015625 -1.28125 3.984375 -1.28125 C 3.90625 -1.28125 3.875 -1.234375 3.859375 -1.1875 C 3.578125 -0.265625 2.921875 -0.140625 2.5625 -0.140625 C 2.03125 -0.140625 1.15625 -0.5625 1.15625 -2.15625 C 1.15625 -3.78125 1.96875 -4.203125 2.5 -4.203125 C 2.59375 -4.203125 3.21875 -4.1875 3.5625 -3.828125 C 3.15625 -3.796875 3.09375 -3.5 3.09375 -3.375 C 3.09375 -3.109375 3.28125 -2.921875 3.546875 -2.921875 C 3.8125 -2.921875 4.015625 -3.078125 4.015625 -3.390625 C 4.015625 -4.0625 3.25 -4.4375 2.484375 -4.4375 C 1.25 -4.4375 0.34375 -3.375 0.34375 -2.140625 C 0.34375 -0.875 1.3125 0.109375 2.46875 0.109375 C 3.796875 0.109375 4.125 -1.078125 4.125 -1.1875 Z M 4.125 -1.1875 "/>
</symbol>
</g>
</defs>
<g id="analisi1_lez30a_d3-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -14.17428 -0.00107643 L 155.508486 -0.00107643 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073309 2.389926 C -1.693101 0.955324 -0.85037 0.277221 0.00019924 -0.00107643 C -0.85037 -0.279373 -1.693101 -0.957477 -2.073309 -2.392079 " transform="matrix(0.996575,0,0,-0.996575,183.757614,144.377834)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="187.461693" y="146.515486"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.000732132 -14.174624 L -0.000732132 127.161046 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073929 2.391734 C -1.69372 0.957133 -0.85099 0.279029 -0.000420486 0.000732132 C -0.85099 -0.277565 -1.69372 -0.955669 -2.073929 -2.39027 " transform="matrix(0,-0.996575,-0.996575,0,28.582761,17.452706)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-2" x="25.970738" y="11.818441"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 14.172816 70.333586 L 15.462389 72.058244 L 16.748043 73.743704 L 18.037616 75.393888 L 19.327189 77.008794 L 20.612843 78.592343 L 21.902416 80.136695 L 23.19199 81.645771 L 24.477643 83.123488 L 25.767217 84.562009 L 27.05287 85.969173 L 28.342444 87.33714 L 29.632017 88.673749 L 30.917671 89.975082 L 32.207244 91.237217 L 33.496817 92.467995 L 34.782471 93.663497 L 36.072044 94.823721 L 37.357698 95.948668 L 38.647271 97.038337 L 39.936845 98.088811 L 41.222498 99.107926 L 42.512072 100.091765 L 43.797725 101.040326 L 45.087299 101.957531 L 46.376872 102.835538 L 47.662526 103.678268 L 48.952099 104.485722 L 50.241672 105.257898 L 51.527326 105.998716 L 52.816899 106.700338 L 54.102553 107.366683 L 55.392126 108.001671 L 56.6817 108.597461 L 57.967353 109.161895 L 59.256927 109.687131 L 60.5465 110.18101 L 61.832154 110.635693 L 63.121727 111.059018 L 64.407381 111.447066 L 65.696954 111.795917 L 66.986527 112.113411 L 68.272181 112.395627 L 69.561754 112.642567 L 70.851328 112.854229 L 72.136981 113.030615 L 73.426555 113.171723 L 74.712208 113.277554 L 76.001782 113.348109 L 77.291355 113.383386 L 78.577009 113.383386 L 79.866582 113.348109 L 81.156155 113.277554 L 82.441809 113.175643 L 83.731382 113.034534 L 85.017036 112.858149 L 86.306609 112.650406 L 87.596183 112.403467 L 88.881836 112.12517 L 90.17141 111.807676 L 91.460983 111.458825 L 92.746637 111.070777 L 94.03621 110.651372 L 95.321864 110.192769 L 96.611437 109.70281 L 97.90101 109.177573 L 99.186664 108.61706 L 100.476237 108.017349 L 101.765811 107.386282 L 103.051464 106.719937 L 104.341038 106.018315 L 105.626691 105.281416 L 106.916265 104.50924 L 108.205838 103.701786 L 109.491492 102.859056 L 110.781065 101.981049 L 112.070638 101.071684 L 113.356292 100.123122 L 114.645866 99.139284 L 115.931519 98.120168 L 117.221093 97.069695 L 118.510666 95.980025 L 119.79632 94.858998 L 121.085893 93.698774 L 122.375466 92.503273 L 123.66112 91.276414 L 124.950693 90.014278 L 126.236347 88.712946 L 127.52592 87.380256 L 128.815494 86.012289 L 130.101147 84.605126 L 131.390721 83.166605 L 132.680294 81.692807 L 133.965948 80.183732 L 135.255521 78.639379 L 136.541175 77.05975 L 137.830748 75.444843 L 139.120321 73.79466 L 140.405975 72.109199 L 141.695548 70.388462 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-3" x="173.496691" y="76.714393"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-1" x="179.426311" y="76.714393"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="183.288038" y="76.714393"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-2" x="188.962535" y="76.714393"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 28.346363 87.344979 L 127.561197 87.344979 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 58.816406 57.332031 C 58.816406 56.238281 57.929688 55.347656 56.832031 55.347656 C 55.734375 55.347656 54.847656 56.238281 54.847656 57.332031 C 54.847656 58.429688 55.734375 59.320312 56.832031 59.320312 C 57.929688 59.320312 58.816406 58.429688 58.816406 57.332031 Z M 58.816406 57.332031 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-1" x="7.280975" y="51.344589"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="11.141706" y="51.344589"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph2-1" x="16.816203" y="52.834469"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-4" x="21.269895" y="51.344589"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-3" x="25.686081" y="51.344589"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-1" x="31.612348" y="51.344589"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="35.473079" y="51.344589"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph2-1" x="41.147576" y="52.834469"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-2" x="45.602265" y="51.344589"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph1-2" x="49.463449" y="51.344589"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 157.691406 57.332031 C 157.691406 56.238281 156.804688 55.347656 155.707031 55.347656 C 154.609375 55.347656 153.722656 56.238281 153.722656 57.332031 C 153.722656 58.429688 154.609375 59.320312 155.707031 59.320312 C 156.804688 59.320312 157.691406 58.429688 157.691406 57.332031 Z M 157.691406 57.332031 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-1" x="159.212785" y="68.28935"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="163.073515" y="68.28935"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph2-2" x="168.748012" y="69.778233"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-4" x="173.201705" y="68.28935"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-3" x="177.617891" y="68.28935"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-1" x="183.544158" y="68.28935"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="187.404888" y="68.28935"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph2-2" x="193.079385" y="69.778233"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph1-2" x="197.534074" y="68.28935"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph1-2" x="201.395258" y="68.28935"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 28.346363 -0.00107643 L 28.346363 87.344979 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="51.768073" y="152.161082"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph2-1" x="57.44257" y="153.649965"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-dasharray:2.98883,2.98883;stroke-miterlimit:10;" d="M 127.561197 -0.00107643 L 127.561197 87.344979 " transform="matrix(0.996575,0,0,-0.996575,28.582761,144.377834)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph0-1" x="150.640249" y="152.161082"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph2-2" x="156.314745" y="153.649965"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph3-1" x="86.245573" y="69.390565"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-2" x="90.162357" y="69.390565"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-3" x="94.575565" y="69.390565"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-4" x="99.539802" y="69.390565"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-2" x="107.813201" y="69.390565"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-5" x="112.226409" y="69.390565"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph3-6" x="117.464673" y="69.390565"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-7" x="121.325857" y="69.390565"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d3-glyph3-3" x="91.913094" y="25.942895"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-8" x="96.877332" y="25.942895"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-9" x="100.766316" y="25.942895"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-10" x="105.730554" y="25.942895"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-11" x="111.246815" y="25.942895"/>
  <use xlink:href="#analisi1_lez30a_d3-glyph3-7" x="115.660022" y="25.942895"/>
</g>
</g>
</svg></figure>
<p>La condizione formale è</p>
<p>$$f(x) \\ge f(x_1) + \\frac{f(x_2) - f(x_1)}{x_2 - x_1}(x - x_1)$$</p>
<p>per ogni $x_1, x_2 \\in I$ con $x_1 \\neq x_2$ e per ogni $x \\in [\\min(x_1,x_2), \\max(x_1,x_2)]$.</p>`
          },
          {
            subtitle: "Definizione — Convessità e concavità stretta",
            content: `<p>Se nelle definizioni precedenti la disuguaglianza vale in <strong>senso stretto</strong> ($\\lt$ per la convessità, $\\gt$ per la concavità) per ogni $x \\in (\\min(x_1,x_2), \\max(x_1,x_2))$ con $x_1 \\neq x_2$, la funzione si dice <strong>strettamente convessa</strong> o <strong>strettamente concava</strong>.</p>
<p>Geometricamente, questo significa che il segmento e il grafico hanno in comune <em>solo i due punti estremi</em>.</p>`
          },
          {
            subtitle: "Osservazioni",
            content: `<ul>
  <li>Una funzione è concava se e solo se il suo opposto ($-f$) è convesso.</li>
  <li>Una retta $f(x) = mx + q$ è <strong>sia convessa che concava</strong>, ma non in senso stretto. Infatti il segmento che congiunge due punti qualsiasi della retta coincide con la retta stessa, quindi la disuguaglianza vale con l'uguaglianza.</li>
  <li>Una funzione che contiene un tratto rettilineo può essere convessa (o concava) <strong>ma non strettamente</strong>.</li>
</ul>
<figure class="figura" data-id="analisi1_lez30a_d4"><?xml version="1.0" encoding="UTF-8"?>
<svg id="analisi1_lez30a_d4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="190.782pt" height="162.968pt" viewBox="0 0 190.782 162.968" version="1.2"><style>#analisi1_lez30a_d4 [fill="rgb(0%,0%,0%)"],#analisi1_lez30a_d4 [style*="fill:rgb(0%,0%,0%)"]{fill:var(--text-primary)!important}#analisi1_lez30a_d4 [stroke="rgb(0%,0%,0%)"],#analisi1_lez30a_d4 [style*="stroke:rgb(0%,0%,0%)"]{stroke:var(--text-primary)!important}#analisi1_lez30a_d4 [fill="rgb(0%,0%,100%)"],#analisi1_lez30a_d4 [style*="fill:rgb(0%,0%,100%)"]{fill:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d4 [fill="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d4 [style*="fill:rgb(0%,0%,100%)"]{fill:#0000ff!important}#analisi1_lez30a_d4 [stroke="rgb(0%,0%,100%)"],#analisi1_lez30a_d4 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#5c5cff!important}[data-mode="light"] #analisi1_lez30a_d4 [stroke="rgb(0%,0%,100%)"],[data-mode="light"] #analisi1_lez30a_d4 [style*="stroke:rgb(0%,0%,100%)"]{stroke:#0000ff!important}#analisi1_lez30a_d4 [fill="rgb(100%,0%,0%)"],#analisi1_lez30a_d4 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff5c5c!important}[data-mode="light"] #analisi1_lez30a_d4 [fill="rgb(100%,0%,0%)"],[data-mode="light"] #analisi1_lez30a_d4 [style*="fill:rgb(100%,0%,0%)"]{fill:#ff0000!important}#analisi1_lez30a_d4 [stroke="rgb(100%,0%,0%)"],#analisi1_lez30a_d4 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff5c5c!important}[data-mode="light"] #analisi1_lez30a_d4 [stroke="rgb(100%,0%,0%)"],[data-mode="light"] #analisi1_lez30a_d4 [style*="stroke:rgb(100%,0%,0%)"]{stroke:#ff0000!important}</style>
<defs>
<g>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph0-1">
<path style="stroke:none;" d="M 4.9375 -1.421875 C 4.9375 -1.515625 4.84375 -1.515625 4.8125 -1.515625 C 4.734375 -1.515625 4.703125 -1.484375 4.6875 -1.40625 C 4.359375 -0.34375 3.6875 -0.109375 3.359375 -0.109375 C 2.96875 -0.109375 2.8125 -0.421875 2.8125 -0.765625 C 2.8125 -0.984375 2.875 -1.203125 2.984375 -1.640625 L 3.328125 -3 C 3.390625 -3.265625 3.609375 -4.1875 4.3125 -4.1875 C 4.359375 -4.1875 4.59375 -4.1875 4.8125 -4.046875 C 4.53125 -4 4.328125 -3.75 4.328125 -3.515625 C 4.328125 -3.359375 4.4375 -3.171875 4.703125 -3.171875 C 4.921875 -3.171875 5.25 -3.34375 5.25 -3.75 C 5.25 -4.265625 4.65625 -4.40625 4.3125 -4.40625 C 3.75 -4.40625 3.390625 -3.875 3.28125 -3.640625 C 3.03125 -4.296875 2.484375 -4.40625 2.203125 -4.40625 C 1.171875 -4.40625 0.59375 -3.109375 0.59375 -2.859375 C 0.59375 -2.765625 0.71875 -2.765625 0.71875 -2.765625 C 0.796875 -2.765625 0.828125 -2.78125 0.84375 -2.875 C 1.1875 -3.9375 1.84375 -4.1875 2.1875 -4.1875 C 2.375 -4.1875 2.71875 -4.09375 2.71875 -3.515625 C 2.71875 -3.203125 2.546875 -2.53125 2.1875 -1.140625 C 2.015625 -0.53125 1.671875 -0.109375 1.234375 -0.109375 C 1.171875 -0.109375 0.953125 -0.109375 0.734375 -0.234375 C 0.984375 -0.28125 1.203125 -0.5 1.203125 -0.78125 C 1.203125 -1.046875 0.984375 -1.125 0.84375 -1.125 C 0.53125 -1.125 0.28125 -0.859375 0.28125 -0.546875 C 0.28125 -0.09375 0.78125 0.109375 1.21875 0.109375 C 1.875 0.109375 2.234375 -0.59375 2.265625 -0.640625 C 2.390625 -0.28125 2.75 0.109375 3.34375 0.109375 C 4.375 0.109375 4.9375 -1.171875 4.9375 -1.421875 Z M 4.9375 -1.421875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph0-2">
<path style="stroke:none;" d="M 4.84375 -3.796875 C 4.875 -3.9375 4.875 -3.953125 4.875 -4.015625 C 4.875 -4.203125 4.734375 -4.296875 4.59375 -4.296875 C 4.484375 -4.296875 4.328125 -4.234375 4.234375 -4.078125 C 4.21875 -4.03125 4.140625 -3.71875 4.09375 -3.546875 L 3.90625 -2.75 L 3.453125 -0.953125 C 3.40625 -0.8125 2.984375 -0.109375 2.328125 -0.109375 C 1.828125 -0.109375 1.71875 -0.546875 1.71875 -0.921875 C 1.71875 -1.375 1.875 -1.984375 2.21875 -2.859375 C 2.375 -3.28125 2.421875 -3.390625 2.421875 -3.578125 C 2.421875 -4.03125 2.09375 -4.40625 1.609375 -4.40625 C 0.65625 -4.40625 0.28125 -2.953125 0.28125 -2.859375 C 0.28125 -2.765625 0.40625 -2.765625 0.40625 -2.765625 C 0.5 -2.765625 0.515625 -2.78125 0.5625 -2.953125 C 0.84375 -3.875 1.234375 -4.1875 1.578125 -4.1875 C 1.65625 -4.1875 1.828125 -4.1875 1.828125 -3.859375 C 1.828125 -3.609375 1.71875 -3.359375 1.65625 -3.171875 C 1.25 -2.109375 1.078125 -1.546875 1.078125 -1.078125 C 1.078125 -0.1875 1.703125 0.109375 2.296875 0.109375 C 2.671875 0.109375 3.015625 -0.0625 3.296875 -0.34375 C 3.171875 0.171875 3.046875 0.671875 2.640625 1.1875 C 2.390625 1.53125 2.015625 1.828125 1.546875 1.828125 C 1.40625 1.828125 0.96875 1.796875 0.796875 1.40625 C 0.953125 1.40625 1.078125 1.40625 1.21875 1.28125 C 1.328125 1.1875 1.421875 1.0625 1.421875 0.875 C 1.421875 0.5625 1.15625 0.53125 1.0625 0.53125 C 0.828125 0.53125 0.5 0.6875 0.5 1.171875 C 0.5 1.671875 0.9375 2.046875 1.546875 2.046875 C 2.578125 2.046875 3.609375 1.140625 3.875 0.015625 Z M 4.84375 -3.796875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph0-3">
<path style="stroke:none;" d="M 5.5 -6.328125 C 5.5 -6.78125 5.03125 -7.015625 4.625 -7.015625 C 4.296875 -7.015625 3.65625 -6.84375 3.359375 -5.859375 C 3.296875 -5.640625 3.28125 -5.546875 3.03125 -4.296875 L 2.34375 -4.296875 C 2.15625 -4.296875 2.046875 -4.296875 2.046875 -4.09375 C 2.046875 -3.984375 2.140625 -3.984375 2.328125 -3.984375 L 2.984375 -3.984375 L 2.234375 -0.046875 C 2.0625 0.921875 1.890625 1.828125 1.375 1.828125 C 1.328125 1.828125 1.078125 1.828125 0.890625 1.640625 C 1.359375 1.609375 1.4375 1.25 1.4375 1.109375 C 1.4375 0.875 1.265625 0.75 1.078125 0.75 C 0.8125 0.75 0.53125 0.96875 0.53125 1.359375 C 0.53125 1.796875 0.96875 2.046875 1.375 2.046875 C 1.921875 2.046875 2.3125 1.453125 2.5 1.078125 C 2.8125 0.453125 3.046875 -0.75 3.0625 -0.828125 L 3.65625 -3.984375 L 4.515625 -3.984375 C 4.703125 -3.984375 4.8125 -3.984375 4.8125 -4.1875 C 4.8125 -4.296875 4.703125 -4.296875 4.53125 -4.296875 L 3.71875 -4.296875 C 3.828125 -4.859375 3.8125 -4.84375 3.921875 -5.421875 C 3.96875 -5.640625 4.09375 -6.34375 4.15625 -6.453125 C 4.25 -6.65625 4.421875 -6.796875 4.625 -6.796875 C 4.671875 -6.796875 4.921875 -6.796875 5.109375 -6.625 C 4.671875 -6.578125 4.578125 -6.234375 4.578125 -6.078125 C 4.578125 -5.859375 4.75 -5.734375 4.953125 -5.734375 C 5.203125 -5.734375 5.5 -5.953125 5.5 -6.328125 Z M 5.5 -6.328125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph0-4">
<path style="stroke:none;" d="M 2.015625 -0.015625 C 2.015625 -0.671875 1.765625 -1.0625 1.390625 -1.0625 C 1.0625 -1.0625 0.859375 -0.8125 0.859375 -0.53125 C 0.859375 -0.265625 1.0625 0 1.390625 0 C 1.5 0 1.625 -0.046875 1.734375 -0.125 C 1.765625 -0.15625 1.78125 -0.15625 1.78125 -0.15625 C 1.78125 -0.15625 1.796875 -0.15625 1.796875 -0.015625 C 1.796875 0.734375 1.453125 1.328125 1.125 1.65625 C 1.015625 1.765625 1.015625 1.78125 1.015625 1.8125 C 1.015625 1.875 1.0625 1.921875 1.109375 1.921875 C 1.21875 1.921875 2.015625 1.15625 2.015625 -0.015625 Z M 2.015625 -0.015625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph1-1">
<path style="stroke:none;" d="M 3.296875 2.390625 C 3.296875 2.359375 3.296875 2.34375 3.125 2.171875 C 1.875 0.921875 1.5625 -0.96875 1.5625 -2.484375 C 1.5625 -4.21875 1.9375 -5.953125 3.171875 -7.203125 C 3.296875 -7.3125 3.296875 -7.328125 3.296875 -7.359375 C 3.296875 -7.4375 3.25 -7.46875 3.1875 -7.46875 C 3.09375 -7.46875 2.203125 -6.78125 1.609375 -5.53125 C 1.109375 -4.421875 0.984375 -3.328125 0.984375 -2.484375 C 0.984375 -1.71875 1.09375 -0.5 1.640625 0.609375 C 2.234375 1.84375 3.09375 2.484375 3.1875 2.484375 C 3.25 2.484375 3.296875 2.453125 3.296875 2.390625 Z M 3.296875 2.390625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph1-2">
<path style="stroke:none;" d="M 2.875 -2.484375 C 2.875 -3.265625 2.765625 -4.46875 2.21875 -5.59375 C 1.625 -6.8125 0.765625 -7.46875 0.671875 -7.46875 C 0.609375 -7.46875 0.5625 -7.421875 0.5625 -7.359375 C 0.5625 -7.328125 0.5625 -7.3125 0.75 -7.140625 C 1.734375 -6.15625 2.296875 -4.5625 2.296875 -2.484375 C 2.296875 -0.78125 1.9375 0.96875 0.703125 2.21875 C 0.5625 2.34375 0.5625 2.359375 0.5625 2.390625 C 0.5625 2.453125 0.609375 2.484375 0.671875 2.484375 C 0.765625 2.484375 1.65625 1.8125 2.25 0.546875 C 2.75 -0.546875 2.875 -1.65625 2.875 -2.484375 Z M 2.875 -2.484375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph2-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph2-1">
<path style="stroke:none;" d="M 3.296875 0 L 3.296875 -0.25 L 3.03125 -0.25 C 2.328125 -0.25 2.328125 -0.34375 2.328125 -0.578125 L 2.328125 -4.4375 C 2.328125 -4.625 2.328125 -4.625 2.125 -4.625 C 1.671875 -4.1875 1.046875 -4.1875 0.765625 -4.1875 L 0.765625 -3.9375 C 0.921875 -3.9375 1.390625 -3.9375 1.765625 -4.125 L 1.765625 -0.578125 C 1.765625 -0.34375 1.765625 -0.25 1.078125 -0.25 L 0.8125 -0.25 L 0.8125 0 L 2.046875 -0.03125 Z M 3.296875 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph2-2">
<path style="stroke:none;" d="M 3.515625 -1.265625 L 3.28125 -1.265625 C 3.265625 -1.109375 3.1875 -0.703125 3.09375 -0.640625 C 3.046875 -0.59375 2.515625 -0.59375 2.40625 -0.59375 L 1.125 -0.59375 C 1.859375 -1.234375 2.109375 -1.4375 2.515625 -1.765625 C 3.03125 -2.171875 3.515625 -2.609375 3.515625 -3.265625 C 3.515625 -4.109375 2.78125 -4.625 1.890625 -4.625 C 1.03125 -4.625 0.4375 -4.015625 0.4375 -3.375 C 0.4375 -3.03125 0.734375 -2.984375 0.8125 -2.984375 C 0.96875 -2.984375 1.171875 -3.109375 1.171875 -3.359375 C 1.171875 -3.484375 1.125 -3.734375 0.765625 -3.734375 C 0.984375 -4.21875 1.453125 -4.375 1.78125 -4.375 C 2.484375 -4.375 2.84375 -3.828125 2.84375 -3.265625 C 2.84375 -2.65625 2.40625 -2.1875 2.1875 -1.9375 L 0.515625 -0.265625 C 0.4375 -0.203125 0.4375 -0.1875 0.4375 0 L 3.3125 0 Z M 3.515625 -1.265625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-1">
<path style="stroke:none;" d="M 3.578125 -1.28125 C 3.578125 -1.796875 3.28125 -2.09375 3.171875 -2.21875 C 2.84375 -2.53125 2.453125 -2.625 2.03125 -2.703125 C 1.46875 -2.8125 0.8125 -2.9375 0.8125 -3.515625 C 0.8125 -3.859375 1.0625 -4.265625 1.921875 -4.265625 C 3.015625 -4.265625 3.0625 -3.375 3.078125 -3.0625 C 3.09375 -2.96875 3.203125 -2.96875 3.203125 -2.96875 C 3.328125 -2.96875 3.328125 -3.03125 3.328125 -3.21875 L 3.328125 -4.21875 C 3.328125 -4.390625 3.328125 -4.453125 3.21875 -4.453125 C 3.171875 -4.453125 3.15625 -4.453125 3.03125 -4.34375 C 3 -4.296875 2.890625 -4.203125 2.859375 -4.1875 C 2.484375 -4.453125 2.0625 -4.453125 1.921875 -4.453125 C 0.703125 -4.453125 0.328125 -3.796875 0.328125 -3.234375 C 0.328125 -2.890625 0.484375 -2.609375 0.75 -2.390625 C 1.078125 -2.125 1.359375 -2.0625 2.0625 -1.9375 C 2.296875 -1.890625 3.109375 -1.734375 3.109375 -1.015625 C 3.109375 -0.5 2.75 -0.109375 1.984375 -0.109375 C 1.140625 -0.109375 0.78125 -0.671875 0.59375 -1.515625 C 0.5625 -1.65625 0.5625 -1.6875 0.453125 -1.6875 C 0.328125 -1.6875 0.328125 -1.625 0.328125 -1.4375 L 0.328125 -0.125 C 0.328125 0.046875 0.328125 0.109375 0.4375 0.109375 C 0.484375 0.109375 0.5 0.09375 0.6875 -0.09375 C 0.703125 -0.109375 0.703125 -0.125 0.890625 -0.3125 C 1.328125 0.09375 1.765625 0.109375 1.984375 0.109375 C 3.125 0.109375 3.578125 -0.5625 3.578125 -1.28125 Z M 3.578125 -1.28125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-2">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.046875 -1.296875 4 -1.296875 C 3.90625 -1.296875 3.890625 -1.25 3.875 -1.171875 C 3.515625 -0.140625 2.625 -0.140625 2.53125 -0.140625 C 2.03125 -0.140625 1.625 -0.4375 1.40625 -0.8125 C 1.109375 -1.28125 1.109375 -1.9375 1.109375 -2.296875 L 3.875 -2.296875 C 4.09375 -2.296875 4.125 -2.296875 4.125 -2.515625 C 4.125 -3.5 3.59375 -4.453125 2.34375 -4.453125 C 1.1875 -4.453125 0.28125 -3.4375 0.28125 -2.1875 C 0.28125 -0.859375 1.328125 0.109375 2.46875 0.109375 C 3.6875 0.109375 4.125 -1 4.125 -1.1875 Z M 3.46875 -2.515625 L 1.109375 -2.515625 C 1.171875 -3.984375 2.015625 -4.234375 2.34375 -4.234375 C 3.375 -4.234375 3.46875 -2.890625 3.46875 -2.515625 Z M 3.46875 -2.515625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-3">
<path style="stroke:none;" d="M 4.828125 -4.015625 C 4.828125 -4.1875 4.703125 -4.515625 4.3125 -4.515625 C 4.125 -4.515625 3.6875 -4.453125 3.265625 -4.046875 C 2.84375 -4.375 2.421875 -4.40625 2.203125 -4.40625 C 1.28125 -4.40625 0.59375 -3.71875 0.59375 -2.953125 C 0.59375 -2.515625 0.8125 -2.125 1.0625 -1.921875 C 0.9375 -1.765625 0.75 -1.4375 0.75 -1.09375 C 0.75 -0.78125 0.890625 -0.40625 1.1875 -0.203125 C 0.59375 -0.046875 0.28125 0.390625 0.28125 0.78125 C 0.28125 1.5 1.265625 2.046875 2.484375 2.046875 C 3.65625 2.046875 4.6875 1.546875 4.6875 0.765625 C 4.6875 0.421875 4.546875 -0.09375 4.046875 -0.375 C 3.515625 -0.640625 2.9375 -0.640625 2.328125 -0.640625 C 2.078125 -0.640625 1.65625 -0.640625 1.578125 -0.65625 C 1.265625 -0.703125 1.0625 -1 1.0625 -1.328125 C 1.0625 -1.359375 1.0625 -1.59375 1.21875 -1.796875 C 1.609375 -1.515625 2.015625 -1.484375 2.203125 -1.484375 C 3.140625 -1.484375 3.828125 -2.171875 3.828125 -2.9375 C 3.828125 -3.296875 3.65625 -3.671875 3.40625 -3.90625 C 3.765625 -4.234375 4.125 -4.296875 4.3125 -4.296875 C 4.3125 -4.296875 4.375 -4.296875 4.40625 -4.28125 C 4.296875 -4.234375 4.25 -4.125 4.25 -4.015625 C 4.25 -3.84375 4.375 -3.71875 4.53125 -3.71875 C 4.640625 -3.71875 4.828125 -3.796875 4.828125 -4.015625 Z M 3.078125 -2.953125 C 3.078125 -2.671875 3.0625 -2.359375 2.921875 -2.109375 C 2.84375 -1.984375 2.609375 -1.71875 2.203125 -1.71875 C 1.34375 -1.71875 1.34375 -2.703125 1.34375 -2.9375 C 1.34375 -3.203125 1.359375 -3.515625 1.5 -3.765625 C 1.578125 -3.890625 1.8125 -4.171875 2.203125 -4.171875 C 3.078125 -4.171875 3.078125 -3.171875 3.078125 -2.953125 Z M 4.171875 0.78125 C 4.171875 1.328125 3.46875 1.828125 2.484375 1.828125 C 1.484375 1.828125 0.796875 1.3125 0.796875 0.78125 C 0.796875 0.328125 1.171875 -0.046875 1.609375 -0.0625 L 2.203125 -0.0625 C 3.0625 -0.0625 4.171875 -0.0625 4.171875 0.78125 Z M 4.171875 0.78125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-4">
<path style="stroke:none;" d="M 8.09375 0 L 8.09375 -0.3125 C 7.578125 -0.3125 7.328125 -0.3125 7.3125 -0.609375 L 7.3125 -2.515625 C 7.3125 -3.359375 7.3125 -3.671875 7 -4.03125 C 6.875 -4.203125 6.546875 -4.40625 5.96875 -4.40625 C 5.125 -4.40625 4.6875 -3.796875 4.515625 -3.421875 C 4.375 -4.296875 3.640625 -4.40625 3.1875 -4.40625 C 2.46875 -4.40625 2 -3.96875 1.71875 -3.359375 L 1.71875 -4.40625 L 0.3125 -4.296875 L 0.3125 -3.984375 C 1.015625 -3.984375 1.09375 -3.90625 1.09375 -3.421875 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.5625 0 L 2.5625 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.59375 C 1.78125 -3.625 2.484375 -4.1875 3.125 -4.1875 C 3.75 -4.1875 3.859375 -3.640625 3.859375 -3.078125 L 3.859375 -0.75 C 3.859375 -0.3125 3.75 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 L 5.328125 0 L 5.328125 -0.3125 C 4.65625 -0.3125 4.546875 -0.3125 4.546875 -0.75 L 4.546875 -2.59375 C 4.546875 -3.625 5.25 -4.1875 5.890625 -4.1875 C 6.515625 -4.1875 6.625 -3.640625 6.625 -3.078125 L 6.625 -0.75 C 6.625 -0.3125 6.515625 -0.3125 5.859375 -0.3125 L 5.859375 0 L 6.984375 -0.03125 Z M 8.09375 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-5">
<path style="stroke:none;" d="M 5.328125 0 L 5.328125 -0.3125 C 4.8125 -0.3125 4.5625 -0.3125 4.546875 -0.609375 L 4.546875 -2.515625 C 4.546875 -3.359375 4.546875 -3.671875 4.234375 -4.03125 C 4.09375 -4.203125 3.765625 -4.40625 3.1875 -4.40625 C 2.46875 -4.40625 2 -3.96875 1.71875 -3.359375 L 1.71875 -4.40625 L 0.3125 -4.296875 L 0.3125 -3.984375 C 1.015625 -3.984375 1.09375 -3.90625 1.09375 -3.421875 L 1.09375 -0.75 C 1.09375 -0.3125 0.984375 -0.3125 0.3125 -0.3125 L 0.3125 0 L 1.4375 -0.03125 L 2.5625 0 L 2.5625 -0.3125 C 1.890625 -0.3125 1.78125 -0.3125 1.78125 -0.75 L 1.78125 -2.59375 C 1.78125 -3.625 2.484375 -4.1875 3.125 -4.1875 C 3.75 -4.1875 3.859375 -3.640625 3.859375 -3.078125 L 3.859375 -0.75 C 3.859375 -0.3125 3.75 -0.3125 3.078125 -0.3125 L 3.078125 0 L 4.203125 -0.03125 Z M 5.328125 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-6">
<path style="stroke:none;" d="M 3.296875 -1.234375 L 3.296875 -1.796875 L 3.0625 -1.796875 L 3.0625 -1.25 C 3.0625 -0.515625 2.75 -0.140625 2.390625 -0.140625 C 1.71875 -0.140625 1.71875 -1.046875 1.71875 -1.21875 L 1.71875 -3.984375 L 3.140625 -3.984375 L 3.140625 -4.296875 L 1.71875 -4.296875 L 1.71875 -6.125 L 1.46875 -6.125 C 1.46875 -5.3125 1.171875 -4.234375 0.1875 -4.203125 L 0.1875 -3.984375 L 1.03125 -3.984375 L 1.03125 -1.234375 C 1.03125 -0.015625 1.953125 0.109375 2.3125 0.109375 C 3.03125 0.109375 3.296875 -0.59375 3.296875 -1.234375 Z M 3.296875 -1.234375 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-7">
<path style="stroke:none;" d="M 4.6875 -2.125 C 4.6875 -3.40625 3.6875 -4.453125 2.484375 -4.453125 C 1.25 -4.453125 0.28125 -3.375 0.28125 -2.125 C 0.28125 -0.84375 1.3125 0.109375 2.484375 0.109375 C 3.6875 0.109375 4.6875 -0.859375 4.6875 -2.125 Z M 3.859375 -2.203125 C 3.859375 -1.84375 3.859375 -1.3125 3.640625 -0.875 C 3.421875 -0.421875 2.984375 -0.140625 2.484375 -0.140625 C 2.0625 -0.140625 1.625 -0.34375 1.359375 -0.8125 C 1.109375 -1.25 1.109375 -1.84375 1.109375 -2.203125 C 1.109375 -2.59375 1.109375 -3.140625 1.34375 -3.578125 C 1.609375 -4.03125 2.078125 -4.234375 2.484375 -4.234375 C 2.921875 -4.234375 3.34375 -4.015625 3.609375 -3.59375 C 3.859375 -3.171875 3.859375 -2.59375 3.859375 -2.203125 Z M 3.859375 -2.203125 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-8">
<path style="stroke:none;" d="M 3.625 -3.796875 C 3.625 -4.109375 3.3125 -4.40625 2.890625 -4.40625 C 2.15625 -4.40625 1.796875 -3.734375 1.65625 -3.296875 L 1.65625 -4.40625 L 0.28125 -4.296875 L 0.28125 -3.984375 C 0.96875 -3.984375 1.0625 -3.90625 1.0625 -3.421875 L 1.0625 -0.75 C 1.0625 -0.3125 0.953125 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.40625 -0.03125 C 1.8125 -0.03125 2.28125 -0.03125 2.671875 0 L 2.671875 -0.3125 L 2.46875 -0.3125 C 1.734375 -0.3125 1.71875 -0.421875 1.71875 -0.78125 L 1.71875 -2.3125 C 1.71875 -3.296875 2.125 -4.1875 2.890625 -4.1875 C 2.953125 -4.1875 2.96875 -4.1875 3 -4.171875 C 2.96875 -4.15625 2.765625 -4.046875 2.765625 -3.78125 C 2.765625 -3.5 2.96875 -3.359375 3.1875 -3.359375 C 3.375 -3.359375 3.625 -3.46875 3.625 -3.796875 Z M 3.625 -3.796875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-9">
<path style="stroke:none;" d="M 4.8125 -0.890625 L 4.8125 -1.4375 L 4.5625 -1.4375 L 4.5625 -0.890625 C 4.5625 -0.3125 4.3125 -0.25 4.203125 -0.25 C 3.875 -0.25 3.828125 -0.703125 3.828125 -0.75 L 3.828125 -2.734375 C 3.828125 -3.15625 3.828125 -3.546875 3.46875 -3.90625 C 3.078125 -4.296875 2.59375 -4.453125 2.109375 -4.453125 C 1.296875 -4.453125 0.609375 -3.984375 0.609375 -3.328125 C 0.609375 -3.03125 0.8125 -2.859375 1.0625 -2.859375 C 1.34375 -2.859375 1.515625 -3.0625 1.515625 -3.328125 C 1.515625 -3.4375 1.46875 -3.765625 1.015625 -3.78125 C 1.28125 -4.125 1.765625 -4.234375 2.09375 -4.234375 C 2.578125 -4.234375 3.140625 -3.859375 3.140625 -2.96875 L 3.140625 -2.59375 C 2.640625 -2.5625 1.9375 -2.53125 1.3125 -2.234375 C 0.5625 -1.90625 0.3125 -1.390625 0.3125 -0.953125 C 0.3125 -0.140625 1.28125 0.109375 1.90625 0.109375 C 2.5625 0.109375 3.03125 -0.28125 3.21875 -0.75 C 3.25 -0.359375 3.515625 0.0625 3.984375 0.0625 C 4.203125 0.0625 4.8125 -0.078125 4.8125 -0.890625 Z M 3.140625 -1.390625 C 3.140625 -0.453125 2.421875 -0.109375 1.984375 -0.109375 C 1.5 -0.109375 1.078125 -0.453125 1.078125 -0.953125 C 1.078125 -1.5 1.5 -2.328125 3.140625 -2.390625 Z M 3.140625 -1.390625 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-10">
<path style="stroke:none;" d="M 5.25 0 L 5.25 -0.3125 C 4.578125 -0.3125 4.46875 -0.3125 4.46875 -0.75 L 4.46875 -4.40625 L 3.21875 -4.3125 C 3.0625 -4.3125 3.03125 -4.296875 3.03125 -4.296875 C 3.015625 -4.296875 3 -4.296875 2.859375 -4.296875 L 1.6875 -4.296875 L 1.6875 -5.421875 C 1.6875 -6.40625 2.53125 -6.796875 3.15625 -6.796875 C 3.453125 -6.796875 3.8125 -6.703125 4.015625 -6.46875 C 3.609375 -6.453125 3.546875 -6.171875 3.546875 -6.015625 C 3.546875 -5.6875 3.796875 -5.546875 3.984375 -5.546875 C 4.21875 -5.546875 4.453125 -5.71875 4.453125 -6.015625 C 4.453125 -6.59375 3.90625 -7.015625 3.171875 -7.015625 C 2.234375 -7.015625 1.0625 -6.515625 1.0625 -5.421875 L 1.0625 -4.296875 L 0.265625 -4.296875 L 0.265625 -3.984375 L 1.0625 -3.984375 L 1.0625 -0.75 C 1.0625 -0.3125 0.953125 -0.3125 0.28125 -0.3125 L 0.28125 0 L 1.390625 -0.03125 L 2.484375 0 L 2.484375 -0.3125 C 1.828125 -0.3125 1.71875 -0.3125 1.71875 -0.75 L 1.71875 -3.984375 L 3.28125 -3.984375 C 3.75 -3.984375 3.8125 -3.859375 3.8125 -3.4375 L 3.8125 -0.75 C 3.8125 -0.3125 3.703125 -0.3125 3.03125 -0.3125 L 3.03125 0 L 4.140625 -0.03125 Z M 5.25 0 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph3-11">
<path style="stroke:none;" d="M 4.125 -1.1875 C 4.125 -1.28125 4.03125 -1.28125 4 -1.28125 C 3.90625 -1.28125 3.890625 -1.25 3.875 -1.1875 C 3.578125 -0.265625 2.9375 -0.140625 2.5625 -0.140625 C 2.046875 -0.140625 1.171875 -0.5625 1.171875 -2.171875 C 1.171875 -3.796875 1.984375 -4.203125 2.515625 -4.203125 C 2.59375 -4.203125 3.21875 -4.203125 3.578125 -3.84375 C 3.171875 -3.8125 3.109375 -3.515625 3.109375 -3.390625 C 3.109375 -3.125 3.28125 -2.921875 3.5625 -2.921875 C 3.828125 -2.921875 4.015625 -3.09375 4.015625 -3.390625 C 4.015625 -4.078125 3.265625 -4.453125 2.5 -4.453125 C 1.25 -4.453125 0.34375 -3.390625 0.34375 -2.15625 C 0.34375 -0.875 1.328125 0.109375 2.484375 0.109375 C 3.8125 0.109375 4.125 -1.078125 4.125 -1.1875 Z M 4.125 -1.1875 "/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph4-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="analisi1_lez30a_d4-glyph4-1">
<path style="stroke:none;" d="M 7.171875 -4.421875 C 7.171875 -4.625 6.984375 -4.625 6.84375 -4.625 L 0.890625 -4.625 C 0.75 -4.625 0.5625 -4.625 0.5625 -4.421875 C 0.5625 -4.21875 0.75 -4.21875 0.890625 -4.21875 L 6.84375 -4.21875 C 6.984375 -4.21875 7.171875 -4.21875 7.171875 -4.421875 Z M 7.171875 -0.5625 C 7.171875 -0.75 6.984375 -0.75 6.84375 -0.75 L 0.890625 -0.75 C 0.75 -0.75 0.5625 -0.75 0.5625 -0.5625 C 0.5625 -0.359375 0.75 -0.359375 0.890625 -0.359375 L 6.84375 -0.359375 C 6.984375 -0.359375 7.171875 -0.359375 7.171875 -0.5625 Z M 7.171875 -2.484375 C 7.171875 -2.6875 6.984375 -2.6875 6.84375 -2.6875 L 0.890625 -2.6875 C 0.75 -2.6875 0.5625 -2.6875 0.5625 -2.484375 C 0.5625 -2.296875 0.75 -2.296875 0.890625 -2.296875 L 6.84375 -2.296875 C 6.984375 -2.296875 7.171875 -2.296875 7.171875 -2.484375 Z M 7.171875 -2.484375 "/>
</symbol>
</g>
</defs>
<g id="analisi1_lez30a_d4-surface1">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -14.173537 -0.00147049 L 155.508413 -0.00147049 " transform="matrix(0.998859,0,0,-0.998859,18.337047,144.521969)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.073009 2.391886 C -1.693669 0.956654 -0.848955 0.280101 -0.000330472 -0.00147049 C -0.848955 -0.279131 -1.693669 -0.955685 -2.073009 -2.390916 " transform="matrix(0.998859,0,0,-0.998859,173.867518,144.521969)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-1" x="177.580085" y="146.66452"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -0.00111066 -14.173896 L -0.00111066 127.163202 " transform="matrix(0.998859,0,0,-0.998859,18.337047,144.521969)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M -2.0714 2.390557 C -1.692061 0.955325 -0.851258 0.278771 0.00127798 0.00111066 C -0.851258 -0.280461 -1.692061 -0.957014 -2.0714 -2.392246 " transform="matrix(0,-0.998859,-0.998859,0,18.337047,17.305964)"/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-2" x="15.719038" y="11.658787"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 14.175226 85.040906 L 56.692503 28.347292 L 113.386118 28.347292 L 141.73488 70.86848 " transform="matrix(0.998859,0,0,-0.998859,18.337047,144.521969)"/>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-3" x="163.423262" y="76.225009"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-1" x="169.365472" y="76.225009"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-1" x="173.236049" y="76.225009"/>
</g>
<g style="fill:rgb(0%,0%,100%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-2" x="178.92355" y="76.225009"/>
</g>
<path style="fill:none;stroke-width:0.79701;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 70.86884 28.347292 L 99.213692 28.347292 " transform="matrix(0.998859,0,0,-0.998859,18.337047,144.521969)"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 91.113281 116.207031 C 91.113281 115.109375 90.222656 114.21875 89.125 114.21875 C 88.023438 114.21875 87.132812 115.109375 87.132812 116.207031 C 87.132812 117.308594 88.023438 118.199219 89.125 118.199219 C 90.222656 118.199219 91.113281 117.308594 91.113281 116.207031 Z M 91.113281 116.207031 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-1" x="39.456914" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-1" x="43.326492" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph2-1" x="49.013993" y="128.680071"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-4" x="53.478892" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-3" x="57.905198" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-1" x="63.844048" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-1" x="67.714625" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph2-1" x="73.402126" y="128.680071"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-2" x="77.866025" y="127.187776"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph1-2" x="81.736058" y="127.187776"/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 119.429688 116.207031 C 119.429688 115.109375 118.535156 114.21875 117.4375 114.21875 C 116.339844 114.21875 115.449219 115.109375 115.449219 116.207031 C 115.449219 117.308594 116.339844 118.199219 117.4375 118.199219 C 118.535156 118.199219 119.429688 117.308594 119.429688 116.207031 Z M 119.429688 116.207031 "/>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-1" x="120.951793" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-1" x="124.821371" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph2-2" x="130.508872" y="128.680071"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-4" x="134.97377" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-3" x="139.400077" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-1" x="145.338926" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph0-1" x="149.209503" y="127.187776"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph2-2" x="154.897005" y="128.680071"/>
</g>
<g style="fill:rgb(0%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph1-2" x="159.360904" y="127.187776"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph1-2" x="163.230937" y="127.187776"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph3-1" x="61.635571" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-2" x="65.561331" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-3" x="69.984652" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-4" x="74.960267" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-2" x="83.252626" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-5" x="87.675947" y="110.75755"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph3-6" x="92.926216" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-7" x="96.796249" y="110.75755"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph4-1" x="105.088919" y="110.75755"/>
</g>
<g style="fill:rgb(100%,0%,0%);fill-opacity:1;">
  <use xlink:href="#analisi1_lez30a_d4-glyph3-3" x="116.146284" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-8" x="121.121898" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-9" x="125.019795" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-10" x="129.995409" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-11" x="135.524312" y="110.75755"/>
  <use xlink:href="#analisi1_lez30a_d4-glyph3-7" x="139.947633" y="110.75755"/>
</g>
</g>
</svg></figure>`
          }
        ],
        extra_content: `<p>Nelle prossime sezioni vedremo come la derivata seconda fornisca uno strumento potentissimo per caratterizzare la convessità delle funzioni derivabili.</p>`
      },
      {
        id: "s30-proprieta-funzioni-convesse",
        type: "section",
        title: "Proprietà delle Funzioni Convesse",
        icon: "🧩",
        content: `<p>Iniziamo con un teorema che elenca alcune importanti proprietà delle funzioni convesse, <strong>anche senza assumerne la derivabilità</strong>.</p>`,
        subsections: [
          {
            subtitle: "Teorema — Proprietà di regolarità delle funzioni convesse",
            content: `<p>Sia $f: I \\to \\mathbb{R}$ una funzione convessa definita su un intervallo $I$. Allora:</p>
<ol>
  <li>Per ogni punto $x$ interno a $I$ esistono finite la derivata destra $f'_+(x)$ e la derivata sinistra $f'_-(x)$.</li>
  <li>Per ogni punto $x$ interno a $I$ si ha $f'_-(x) \\le f'_+(x)$.</li>
  <li>Le funzioni $x \\mapsto f'_+(x)$ e $x \\mapsto f'_-(x)$ sono funzioni crescenti.</li>
  <li>La funzione $f$ è continua in ogni punto interno di $I$.</li>
</ol>
<p><em>La dimostrazione di questo teorema viene omessa.</em></p>`
          },
          {
            subtitle: "Nota del Prof. — Conseguenze del teorema",
            content: `<blockquote><p>Questo teorema ha delle conseguenze notevoli. La prima affermazione ci dice che, anche se una funzione convessa non è necessariamente derivabile ovunque, essa ammette sempre derivata destra e sinistra in ogni punto interno. L'idea è che la convessità assicura che i rapporti incrementali siano crescenti, e una funzione crescente ammette sempre limite destro e sinistro.</p>
<p>Un classico esempio è la funzione valore assoluto, $f(x) = |x|$, che è convessa. In $x=0$ non è derivabile, ma esistono la derivata sinistra, $f'_-(0) = -1$, e la derivata destra, $f'_+(0) = 1$.</p>
<p>La quarta affermazione è particolarmente sorprendente: la sola proprietà geometrica della convessità (il grafico "sta sotto" ai segmenti) è sufficiente a garantire la continuità della funzione in ogni punto <em>interno</em> di $I$ (agli estremi di $I$, invece, una funzione convessa può essere discontinua: ad esempio $f:[0,1]\\to\\mathbb{R}$ con $f(0)=1$ e $f(x)=0$ per $x\\in(0,1]$ è convessa ma non è continua in $0$).</p></blockquote>`
          },
          {
            subtitle: "Dualità convesso / concavo",
            content: `<p>Se $f$ è una funzione convessa, allora la funzione $-f$ è concava, e viceversa. Tutte le proprietà che enunceremo per le funzioni convesse hanno un'analoga versione per le funzioni concave, semplicemente invertendo le disuguaglianze o il tipo di monotonia.</p>
<p>Come mostra l'esempio di $f(x)=|x|$ in $x=0$, la derivata destra e sinistra in un punto possono non coincidere. Se coincidono, la funzione è derivabile in quel punto.</p>`
          }
        ]
      },
      {
        id: "s30-caratterizzazione-convessita",
        type: "section",
        title: "Caratterizzazione della Convessità tramite Derivate",
        icon: "🧮",
        content: `<p>Se assumiamo che la funzione sia più regolare, cioè derivabile, possiamo dare delle caratterizzazioni molto più <strong>operative</strong> della convessità.</p>`,
        subsections: [
          {
            subtitle: "Relazione con la derivata prima",
            content: `<p>Geometricamente, abbiamo visto che una funzione convessa "sta sopra" le sue rette tangenti. Questa intuizione è formalizzata nel seguente teorema.</p>
<p><strong>Teorema (convessità e monotonia della derivata prima).</strong> Sia $f: I \\to \\mathbb{R}$ una funzione derivabile sull'intervallo $I$. Le seguenti affermazioni sono equivalenti:</p>
<ol>
  <li>$f$ è (strettamente) convessa in $I$.</li>
  <li>La sua derivata prima $f'$ è (strettamente) crescente in $I$.</li>
  <li>Per ogni $x_0$ interno a $I$, il grafico della funzione sta al di sopra della retta tangente in $x_0$:
  <p>$$f(x) \\ge f(x_0) + f'(x_0)(x - x_0) \\quad \\forall x \\in I$$</p>
  (la disuguaglianza è stretta, $f(x) \\gt \\dots$, per $x \\ne x_0$ nel caso di convessità stretta).</li>
</ol>`
          },
          {
            subtitle: "Come leggere il teorema",
            content: `<p>Le parole tra parentesi vanno lette <strong>in modo coordinato</strong>: o si considerano tutte, o nessuna. Quindi il teorema stabilisce due catene di equivalenze:</p>
<ul>
  <li>$f$ convessa $\\iff$ $f'$ crescente $\\iff$ $f(x) \\ge \\text{tangente}$.</li>
  <li>$f$ strettamente convessa $\\iff$ $f'$ strettamente crescente $\\iff$ $f(x) \\gt \\text{tangente}$ (per $x \\ne x_0$).</li>
</ul>`
          },
          {
            subtitle: "Corollario — Concavità e derivata prima",
            content: `<p>Sia $f: I \\to \\mathbb{R}$ una funzione derivabile. Le seguenti affermazioni sono equivalenti:</p>
<ol>
  <li>$f$ è (strettamente) concava in $I$.</li>
  <li>La sua derivata prima $f'$ è (strettamente) decrescente in $I$.</li>
  <li>Per ogni $x_0$ interno a $I$, il grafico della funzione sta al di sotto della retta tangente in $x_0$:
  <p>$$f(x) \\le f(x_0) + f'(x_0)(x - x_0) \\quad \\forall x \\in I$$</p>
  (la disuguaglianza è stretta per $x \\ne x_0$ nel caso di concavità stretta).</li>
</ol>`
          },
          {
            subtitle: "Relazione con la derivata seconda",
            content: `<p>Se la funzione è derivabile due volte, la caratterizzazione della convessità diventa ancora più semplice e si riduce allo <strong>studio del segno di $f''$</strong>.</p>
<p><strong>Teorema.</strong> Sia $f: I \\to \\mathbb{R}$ una funzione derivabile due volte in $I$. Allora:</p>
<ul>
  <li>$f$ è convessa in $I$ se e solo se $f''(x) \\ge 0$ per ogni $x \\in I$;</li>
  <li>$f$ è concava in $I$ se e solo se $f''(x) \\le 0$ per ogni $x \\in I$.</li>
</ul>
<p><em>Idea della dimostrazione.</em> La logica è diretta: una funzione $f$ è convessa se e solo se la sua derivata $f'$ è crescente. A sua volta, una funzione derivabile ($f'$ in questo caso) è crescente se e solo se la sua derivata (cioè $f''$) è non negativa. Quindi $f$ convessa $\\iff f'$ crescente $\\iff f'' \\ge 0$.</p>`
          },
          {
            subtitle: "Proposizione — Convessità stretta e derivata seconda",
            content: `<p>Sia $f: I \\to \\mathbb{R}$ derivabile due volte.</p>
<ul>
  <li>Se $f''(x) \\gt 0$ per ogni $x \\in I$, allora $f$ è <strong>strettamente convessa</strong> in $I$.</li>
  <li>Se $f''(x) \\lt 0$ per ogni $x \\in I$, allora $f$ è <strong>strettamente concava</strong> in $I$.</li>
</ul>`
          }
        ],
        formulas: [
          { label: "Convessità (tangente)", latex: "f(x) \\ge f(x_0) + f'(x_0)(x-x_0)" },
          { label: "Concavità (tangente)", latex: "f(x) \\le f(x_0) + f'(x_0)(x-x_0)" },
          { label: "Criterio con $f''$", latex: "f \\text{ convessa in } I \\iff f''(x) \\ge 0 \\ \\forall x \\in I" }
        ]
      },
      {
        id: "s30-alert-implicazione-stretta",
        type: "alert_box",
        title: "Attenzione: l'implicazione stretta non si inverte",
        icon: "⚠️",
        content: `<p>A differenza del caso non stretto, nella proposizione sulla convessità stretta l'implicazione <strong>non può essere invertita</strong>. Una funzione può essere strettamente convessa anche se la sua derivata seconda si annulla in alcuni punti.</p>
<p><strong>Controesempio.</strong> Consideriamo $f(x) = x^4$:</p>
<ul>
  <li>la derivata prima è $f'(x) = 4x^3$;</li>
  <li>la derivata seconda è $f''(x) = 12x^2$.</li>
</ul>
<p>La funzione $f(x) = x^4$ è strettamente convessa su tutto $\\mathbb{R}$. Tuttavia la sua derivata seconda si annulla in $x=0$: infatti $f''(0) = 0$. Questo dimostra che <strong>$f$ strettamente convessa non implica $f''(x) \\gt 0$ per ogni $x$</strong>.</p>
<figure class="figura" data-id="analisi1_lez30b_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_g1-figure_1">
  <g id="analisi1_lez30b_g1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_g1-axes_1">
   <g id="analisi1_lez30b_g1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_g1-matplotlib.axis_1">
    <g id="analisi1_lez30b_g1-xtick_1">
     <g id="analisi1_lez30b_g1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_2">
      <defs>
       <path id="analisi1_lez30b_g1-m514e81e6ad" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m514e81e6ad" x="44.8" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_g1-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-xtick_2">
     <g id="analisi1_lez30b_g1-line2d_3">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m514e81e6ad" x="187.2" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(181.716328 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-xtick_3">
     <g id="analisi1_lez30b_g1-line2d_5">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m514e81e6ad" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 378.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-xtick_4">
     <g id="analisi1_lez30b_g1-line2d_7">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m514e81e6ad" x="472" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(468.500625 378.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-xtick_5">
     <g id="analisi1_lez30b_g1-line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m514e81e6ad" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(610.900625 378.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g1-matplotlib.axis_2">
    <g id="analisi1_lez30b_g1-ytick_1">
     <g id="analisi1_lez30b_g1-line2d_11">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_12">
      <defs>
       <path id="analisi1_lez30b_g1-m35c2f76f5d" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m35c2f76f5d" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_6">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-ytick_2">
     <g id="analisi1_lez30b_g1-line2d_13">
      <path d="M 44.8 300.25 
L 614.4 300.25 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m35c2f76f5d" x="329.6" y="300.25" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_7">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(316.10125 304.428711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-ytick_3">
     <g id="analisi1_lez30b_g1-line2d_15">
      <path d="M 44.8 236.5 
L 614.4 236.5 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m35c2f76f5d" x="329.6" y="236.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_8">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 240.678711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-19"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-ytick_4">
     <g id="analisi1_lez30b_g1-line2d_17">
      <path d="M 44.8 172.75 
L 614.4 172.75 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m35c2f76f5d" x="329.6" y="172.75" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_9">
      <!-- 9 -->
      <g style="fill: currentColor" transform="translate(316.10125 176.928711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-1c" d="M 703 97 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-1c"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-ytick_5">
     <g id="analisi1_lez30b_g1-line2d_19">
      <path d="M 44.8 109 
L 614.4 109 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m35c2f76f5d" x="329.6" y="109" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_10">
      <!-- 12 -->
      <g style="fill: currentColor" transform="translate(309.1025 113.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-15" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g1-ytick_6">
     <g id="analisi1_lez30b_g1-line2d_21">
      <path d="M 44.8 45.25 
L 614.4 45.25 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g1-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30b_g1-m35c2f76f5d" x="329.6" y="45.25" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g1-text_11">
      <!-- 15 -->
      <g style="fill: currentColor" transform="translate(309.1025 49.428711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g1-DejaVuSans-18" d="M 691 4666 
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
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-18" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g1-line2d_23">
    <defs>
     <path id="analisi1_lez30b_g1-m48e8809a3f" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g1-m48e8809a3f" x="614.4" y="364" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g1-line2d_24">
    <defs>
     <path id="analisi1_lez30b_g1-mb68aa14c87" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g1-mb68aa14c87" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g1-line2d_25">
    <path d="M 44.8 24 
L 49.550626 46.124245 
L 54.301251 67.150769 
L 59.051877 87.116497 
L 63.802502 106.057722 
L 68.553128 124.010106 
L 72.828691 139.350756 
L 77.104254 153.943927 
L 81.379817 167.814301 
L 85.655379 180.986149 
L 89.930942 193.483327 
L 94.206505 205.329276 
L 98.482068 216.547023 
L 102.757631 227.159179 
L 107.033194 237.187943 
L 111.308757 246.655097 
L 115.58432 255.582011 
L 119.859883 263.989638 
L 124.135446 271.898519 
L 128.411009 279.328778 
L 132.686572 286.300127 
L 136.962135 292.831862 
L 141.237698 298.942865 
L 145.513261 304.651603 
L 149.788824 309.976129 
L 154.064387 314.934081 
L 158.33995 319.542684 
L 162.615513 323.818746 
L 166.891076 327.778664 
L 171.166639 331.438416 
L 175.442202 334.81357 
L 179.717765 337.919277 
L 183.993328 340.770274 
L 188.743953 343.656721 
L 193.494579 346.26543 
L 198.245204 348.614815 
L 202.99583 350.722662 
L 208.221518 352.782766 
L 213.447206 354.593293 
L 218.672894 356.175264 
L 224.373645 357.663972 
L 230.074395 358.929413 
L 236.250209 360.075608 
L 242.901084 361.080062 
L 250.027023 361.92804 
L 257.628023 362.613331 
L 266.179149 363.163921 
L 276.155463 363.578369 
L 288.507089 363.852638 
L 305.609341 363.982881 
L 348.840033 363.992918 
L 370.692911 363.852638 
L 383.994662 363.547578 
L 394.446038 363.086197 
L 403.472227 362.460982 
L 411.073228 361.722918 
L 418.199166 360.815527 
L 424.850042 359.746174 
L 431.025855 358.530927 
L 436.726606 357.193743 
L 442.427356 355.625158 
L 447.653044 353.96245 
L 452.878732 352.063648 
L 457.629358 350.114637 
L 462.379983 347.936158 
L 467.130609 345.510872 
L 471.881234 342.820804 
L 476.156797 340.157991 
L 480.43236 337.251645 
L 484.707923 334.087349 
L 488.983486 330.650274 
L 493.259049 326.925178 
L 497.534612 322.896402 
L 501.810175 318.547873 
L 506.085738 313.863104 
L 510.361301 308.825194 
L 514.636864 303.416827 
L 518.912427 297.620272 
L 523.18799 291.417384 
L 527.463553 284.789603 
L 531.739116 277.717956 
L 536.014679 270.183054 
L 540.290242 262.165095 
L 544.565805 253.64386 
L 548.841368 244.598718 
L 553.116931 235.008623 
L 557.392494 224.852114 
L 561.668057 214.107315 
L 565.94362 202.751937 
L 570.219183 190.763275 
L 574.494746 178.11821 
L 578.770309 164.79321 
L 583.045872 150.764326 
L 587.321435 136.007197 
L 591.596997 120.497046 
L 595.87256 104.208681 
L 600.148123 87.116497 
L 604.898749 67.150769 
L 609.649374 46.124245 
L 614.4 24 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g1-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g1-patch_4">
    <path d="M 44.8 364 
L 614.4 364 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g1-text_12">
    <g style="fill: currentColor" transform="translate(335.6 358) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g1-DejaVuSans-Oblique-49" d="M 3059 4863 
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
      <path id="analisi1_lez30b_g1-Cmsy10-49" d="M 225 347 
Q 184 359 184 409 
L 966 3316 
Q 1003 3434 1093 3506 
Q 1184 3578 1300 3578 
Q 1450 3578 1564 3479 
Q 1678 3381 1678 3231 
Q 1678 3166 1644 3084 
L 488 319 
Q 466 275 428 275 
Q 394 275 320 306 
Q 247 338 225 347 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g1-DejaVuSans-b" d="M 1984 4856 
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
      <path id="analisi1_lez30b_g1-DejaVuSans-c" d="M 513 4856 
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
      <path id="analisi1_lez30b_g1-DejaVuSans-20" d="M 678 2906 
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
     <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-Oblique-49" transform="translate(0 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_g1-Cmsy10-49" transform="translate(42.652786 41.865625) scale(0.7)"/>
     <use xlink:href="#analisi1_lez30b_g1-Cmsy10-49" transform="translate(61.895951 41.865625) scale(0.7)"/>
     <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-b" transform="translate(83.87349 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-13" transform="translate(122.887161 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-c" transform="translate(186.510208 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-20" transform="translate(245.006302 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-13" transform="translate(348.277786 0.565625)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g1-line2d_26">
    <defs>
     <path id="analisi1_lez30b_g1-mfd45601a2e" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_g1-p92ffa3bbf2)">
     <use xlink:href="#analisi1_lez30b_g1-mfd45601a2e" x="329.6" y="364" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g1-legend_1">
    <g id="analisi1_lez30b_g1-line2d_27">
     <path d="M 554.733594 38.408281 
L 565.733594 38.408281 
L 576.733594 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g1-text_13">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(585.533594 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g1-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_g1-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-b" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-5b" transform="translate(74.21875 0)"/>
      <use xlink:href="#analisi1_lez30b_g1-DejaVuSans-c" transform="translate(133.40625 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_g1-p92ffa3bbf2">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
      },
      {
        id: "s30-punti-di-flesso",
        type: "section",
        title: "Punti di Flesso",
        icon: "〰️",
        content: `<p>I punti in cui una funzione cambia la sua convessità (da convessa a concava o viceversa) prendono un nome speciale.</p>
<p><strong>Definizione (punto di flesso).</strong> Sia $f: (a,b) \\to \\mathbb{R}$ e sia $x_0 \\in (a,b)$. Il punto $x_0$ si dice <strong>punto di flesso</strong> per $f$ se esiste un intorno $(x_0 - \\delta, x_0 + \\delta)$ tale che</p>
<ul>
  <li>$f$ è convessa in $(x_0-\\delta, x_0)$ e concava in $(x_0, x_0+\\delta)$,</li>
</ul>
<p>oppure</p>
<ul>
  <li>$f$ è concava in $(x_0-\\delta, x_0)$ e convessa in $(x_0, x_0+\\delta)$.</li>
</ul>
<p>In breve, un punto di flesso è un punto in cui la funzione <strong>cambia concavità</strong>.</p>
<figure class="figura" data-id="analisi1_lez30b_g2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_g2-figure_1">
  <g id="analisi1_lez30b_g2-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_g2-axes_1">
   <g id="analisi1_lez30b_g2-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_g2-matplotlib.axis_1">
    <g id="analisi1_lez30b_g2-xtick_1">
     <g id="analisi1_lez30b_g2-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_2">
      <defs>
       <path id="analisi1_lez30b_g2-m81db05f10d" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_g2-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_2">
     <g id="analisi1_lez30b_g2-line2d_3">
      <path d="M 126.171429 364 
L 126.171429 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="126.171429" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(120.687757 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_3">
     <g id="analisi1_lez30b_g2-line2d_5">
      <path d="M 207.542857 364 
L 207.542857 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="207.542857" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(204.043482 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_4">
     <g id="analisi1_lez30b_g2-line2d_7">
      <path d="M 288.914286 364 
L 288.914286 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="288.914286" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(285.414911 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_5">
     <g id="analisi1_lez30b_g2-line2d_9">
      <path d="M 370.285714 364 
L 370.285714 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="370.285714" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(366.786339 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_6">
     <g id="analisi1_lez30b_g2-line2d_11">
      <path d="M 451.657143 364 
L 451.657143 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="451.657143" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_6">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(448.157768 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_7">
     <g id="analisi1_lez30b_g2-line2d_13">
      <path d="M 533.028571 364 
L 533.028571 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="533.028571" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_7">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(529.529196 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-17" d="M 2419 4116 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-xtick_8">
     <g id="analisi1_lez30b_g2-line2d_15">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-m81db05f10d" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_8">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(610.900625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-18" d="M 691 4666 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-18"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-matplotlib.axis_2">
    <g id="analisi1_lez30b_g2-ytick_1">
     <g id="analisi1_lez30b_g2-line2d_17">
      <path d="M 44.8 321.5 
L 614.4 321.5 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_18">
      <defs>
       <path id="analisi1_lez30b_g2-mded008c4dd" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g2-mded008c4dd" x="207.542857" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_9">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(190.075513 325.678711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g2-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-ytick_2">
     <g id="analisi1_lez30b_g2-line2d_19">
      <path d="M 44.8 257.75 
L 614.4 257.75 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-mded008c4dd" x="207.542857" y="257.75" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_10">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(190.075513 261.928711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-ytick_3">
     <g id="analisi1_lez30b_g2-line2d_21">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-mded008c4dd" x="207.542857" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_11">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(194.044107 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-ytick_4">
     <g id="analisi1_lez30b_g2-line2d_23">
      <path d="M 44.8 130.25 
L 614.4 130.25 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-mded008c4dd" x="207.542857" y="130.25" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_12">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(194.044107 134.428711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-ytick_5">
     <g id="analisi1_lez30b_g2-line2d_25">
      <path d="M 44.8 66.5 
L 614.4 66.5 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g2-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez30b_g2-mded008c4dd" x="207.542857" y="66.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g2-text_13">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(194.044107 70.678711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-line2d_27">
    <defs>
     <path id="analisi1_lez30b_g2-ma9773f6efc" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g2-ma9773f6efc" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-line2d_28">
    <defs>
     <path id="analisi1_lez30b_g2-mb77a9c8a92" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g2-mb77a9c8a92" x="207.542857" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-line2d_29">
    <path d="M 44.8 364 
L 49.075563 350.95026 
L 53.351126 338.586041 
L 57.626689 326.888847 
L 61.902252 315.840182 
L 66.177815 305.42155 
L 70.453378 295.614455 
L 74.728941 286.400402 
L 79.004504 277.760895 
L 82.805004 270.548715 
L 86.605505 263.762893 
L 90.406005 257.390439 
L 94.206505 251.418362 
L 98.007006 245.833672 
L 101.807506 240.623379 
L 105.608007 235.774493 
L 109.408507 231.274023 
L 113.209008 227.108979 
L 117.009508 223.266371 
L 120.810008 219.733209 
L 124.610509 216.496502 
L 128.411009 213.543261 
L 132.21151 210.860495 
L 136.01201 208.435214 
L 139.81251 206.254427 
L 143.613011 204.305145 
L 147.888574 202.372748 
L 152.164137 200.698412 
L 156.4397 199.263642 
L 160.715263 198.049941 
L 165.465888 196.938167 
L 170.216514 196.051112 
L 175.442202 195.304622 
L 181.142952 194.725688 
L 187.318766 194.32625 
L 194.444704 194.088628 
L 204.421018 194.0012 
L 221.998332 193.880865 
L 229.599333 193.576794 
L 235.775146 193.112473 
L 241.475897 192.458969 
L 246.701585 191.631743 
L 251.45221 190.661017 
L 256.202836 189.455785 
L 260.478399 188.149605 
L 264.753962 186.614428 
L 269.029525 184.83176 
L 273.305088 182.783103 
L 277.105588 180.723825 
L 280.906088 178.426778 
L 284.706589 175.878974 
L 288.507089 173.067422 
L 292.30759 169.979132 
L 296.10809 166.601113 
L 299.90859 162.920376 
L 303.709091 158.923929 
L 307.509591 154.598784 
L 311.310092 149.931949 
L 315.110592 144.910435 
L 318.911093 139.521251 
L 322.711593 133.751407 
L 326.512093 127.587912 
L 330.312594 121.017777 
L 334.113094 114.028012 
L 337.913595 106.605625 
L 341.714095 98.737628 
L 345.989658 89.337311 
L 350.265221 79.338082 
L 354.540784 68.721443 
L 358.816347 57.4689 
L 363.09191 45.561955 
L 367.367473 32.982114 
L 371.643036 19.710881 
L 375.918599 5.729759 
L 377.901177 -1 
L 377.901177 -1 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g2-line2d_30">
    <path d="M 281.298823 -1 
L 285.181651 12.032416 
L 289.457214 25.695748 
L 293.732777 38.657412 
L 298.00834 50.935905 
L 302.283903 62.549721 
L 306.559466 73.517357 
L 310.835029 83.857308 
L 315.110592 93.58807 
L 319.386155 102.72814 
L 323.661718 111.296012 
L 327.462219 118.446488 
L 331.262719 125.172463 
L 335.063219 131.486925 
L 338.86372 137.402866 
L 342.66422 142.933275 
L 346.464721 148.091143 
L 350.265221 152.88946 
L 354.065721 157.341217 
L 357.866222 161.459403 
L 361.666722 165.257009 
L 365.467223 168.747025 
L 369.267723 171.942441 
L 373.068224 174.856248 
L 376.868724 177.501435 
L 380.669224 179.890993 
L 384.469725 182.037913 
L 388.270225 183.955183 
L 392.545788 185.853785 
L 396.821351 187.496675 
L 401.096914 188.902348 
L 405.372477 190.0893 
L 410.123103 191.174107 
L 414.873728 192.037095 
L 420.099416 192.760461 
L 425.800167 193.31817 
L 431.97598 193.699326 
L 439.576981 193.930472 
L 450.028357 193.99983 
L 465.705421 194.109348 
L 473.306422 194.400197 
L 479.482235 194.849675 
L 485.182986 195.486217 
L 490.408674 196.295143 
L 495.159299 197.246949 
L 499.909925 198.431086 
L 504.185488 199.716422 
L 508.461051 201.228992 
L 512.736614 202.987293 
L 517.012177 205.009821 
L 520.812677 207.044395 
L 524.613178 209.315345 
L 528.413678 211.835661 
L 532.214178 214.618333 
L 536.014679 217.676351 
L 539.815179 221.022706 
L 543.61568 224.670388 
L 547.41618 228.632387 
L 551.216681 232.921693 
L 555.017181 237.551297 
L 558.817681 242.534189 
L 562.618182 247.883358 
L 566.418682 253.611796 
L 570.219183 259.732492 
L 574.019683 266.258437 
L 577.820183 273.202621 
L 581.620684 280.578034 
L 585.421184 288.397666 
L 589.696747 297.741908 
L 593.97231 307.683301 
L 598.247873 318.240342 
L 602.523436 329.431526 
L 606.798999 341.27535 
L 611.074562 353.790309 
L 614.4 364 
L 614.4 364 
" clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g2-patch_3">
    <path d="M 207.542857 364 
L 207.542857 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g2-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g2-text_14">
    <!-- Flesso ascendente -->
    <g style="fill: currentColor" transform="translate(213.542857 188) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g2-DejaVuSans-29" d="M 628 4666 
L 3309 4666 
L 3309 4134 
L 1259 4134 
L 1259 2759 
L 3109 2759 
L 3109 2228 
L 1259 2228 
L 1259 0 
L 628 0 
L 628 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-4f" d="M 603 4863 
L 1178 4863 
L 1178 0 
L 603 0 
L 603 4863 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-48" d="M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-56" d="M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-52" d="M 1959 3097 
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
      <path id="analisi1_lez30b_g2-DejaVuSans-3" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-44" d="M 2194 1759 
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
      <path id="analisi1_lez30b_g2-DejaVuSans-46" d="M 3122 3366 
L 3122 2828 
Q 2878 2963 2633 3030 
Q 2388 3097 2138 3097 
Q 1578 3097 1268 2742 
Q 959 2388 959 1747 
Q 959 1106 1268 751 
Q 1578 397 2138 397 
Q 2388 397 2633 464 
Q 2878 531 3122 666 
L 3122 134 
Q 2881 22 2623 -34 
Q 2366 -91 2075 -91 
Q 1284 -91 818 406 
Q 353 903 353 1747 
Q 353 2603 823 3093 
Q 1294 3584 2113 3584 
Q 2378 3584 2631 3529 
Q 2884 3475 3122 3366 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-51" d="M 3513 2113 
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
      <path id="analisi1_lez30b_g2-DejaVuSans-47" d="M 2906 2969 
L 2906 4863 
L 3481 4863 
L 3481 0 
L 2906 0 
L 2906 525 
Q 2725 213 2448 61 
Q 2172 -91 1784 -91 
Q 1150 -91 751 415 
Q 353 922 353 1747 
Q 353 2572 751 3078 
Q 1150 3584 1784 3584 
Q 2172 3584 2448 3432 
Q 2725 3281 2906 2969 
z
M 947 1747 
Q 947 1113 1208 752 
Q 1469 391 1925 391 
Q 2381 391 2643 752 
Q 2906 1113 2906 1747 
Q 2906 2381 2643 2742 
Q 2381 3103 1925 3103 
Q 1469 3103 1208 2742 
Q 947 2381 947 1747 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g2-DejaVuSans-57" d="M 1172 4494 
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
     </defs>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-29"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-4f" transform="translate(57.515625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(85.296875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-56" transform="translate(146.828125 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-56" transform="translate(198.921875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-52" transform="translate(251.015625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-3" transform="translate(312.203125 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-44" transform="translate(343.984375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-56" transform="translate(405.265625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-46" transform="translate(457.359375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(512.34375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-51" transform="translate(573.875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-47" transform="translate(637.25 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(700.734375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-51" transform="translate(762.265625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-57" transform="translate(825.640625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(864.84375 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-text_15">
    <!-- Flesso discendente -->
    <g style="fill: currentColor" transform="translate(457.657143 188) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g2-DejaVuSans-4c" d="M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-29"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-4f" transform="translate(57.515625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(85.296875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-56" transform="translate(146.828125 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-56" transform="translate(198.921875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-52" transform="translate(251.015625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-3" transform="translate(312.203125 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-47" transform="translate(343.984375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-4c" transform="translate(407.46875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-56" transform="translate(435.25 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-46" transform="translate(487.34375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(542.328125 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-51" transform="translate(603.859375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-47" transform="translate(667.234375 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(730.71875 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-51" transform="translate(792.25 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-57" transform="translate(855.625 0)"/>
     <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-48" transform="translate(894.828125 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-line2d_31">
    <defs>
     <path id="analisi1_lez30b_g2-m94ce5c6c46" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)">
     <use xlink:href="#analisi1_lez30b_g2-m94ce5c6c46" x="207.542857" y="194" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-line2d_32">
    <g clip-path="url(#analisi1_lez30b_g2-pceb51d39c0)">
     <use xlink:href="#analisi1_lez30b_g2-m94ce5c6c46" x="451.657143" y="194" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g2-legend_1">
    <g id="analisi1_lez30b_g2-line2d_33">
     <path d="M 551.622656 38.408281 
L 562.622656 38.408281 
L 573.622656 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g2-text_16">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(582.422656 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g2-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_g2-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30b_g2-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30b_g2-DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-b" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-5b" transform="translate(74.21875 0)"/>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-c" transform="translate(133.40625 0)"/>
     </g>
    </g>
    <g id="analisi1_lez30b_g2-line2d_34">
     <path d="M 551.622656 54.909141 
L 562.622656 54.909141 
L 573.622656 54.909141 
" style="fill: none; stroke: #2f9e8f; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g2-text_17">
     <!-- g(x) -->
     <g style="fill: currentColor" transform="translate(582.422656 58.759141) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g2-DejaVuSans-4a" d="M 2906 1791 
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
      </defs>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-4a"/>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-b" transform="translate(63.484375 0)"/>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-5b" transform="translate(102.5 0)"/>
      <use xlink:href="#analisi1_lez30b_g2-DejaVuSans-c" transform="translate(161.6875 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_g2-pceb51d39c0">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`,
        subsections: [
          {
            subtitle: "Condizione necessaria",
            content: `<p>Se $f$ è derivabile due volte in un intorno di $x_0$ e $x_0$ è un punto di flesso, allora</p>
<p>$$f''(x_0) = 0$$</p>
<p>La condizione $f''(x_0) = 0$ è <strong>necessaria ma non sufficiente</strong>. Come abbiamo visto, per $f(x) = x^4$ si ha $f''(0) = 0$, ma $x=0$ non è un punto di flesso poiché la funzione è sempre convessa.</p>`
          },
          {
            subtitle: "Condizione sufficiente",
            content: `<p>Sia $f$ derivabile due volte in un intorno di $x_0$. Se $f''(x_0) = 0$ <strong>e</strong> la derivata seconda $f''$ <strong>cambia segno</strong> in $x_0$ (cioè è positiva da un lato e negativa dall'altro), allora $x_0$ è un punto di flesso.</p>`
          },
          {
            subtitle: "Esempio — $f(x) = x^3$",
            content: `<p>Studiamo la funzione $f(x) = x^3$:</p>
<ul>
  <li>$f'(x) = 3x^2$</li>
  <li>$f''(x) = 6x$</li>
</ul>
<p>La derivata seconda si annulla per $x=0$. Studiandone il segno:</p>
<ul>
  <li>$f''(x) \\gt 0$ per $x \\gt 0$, quindi la funzione è convessa per $x \\gt 0$;</li>
  <li>$f''(x) \\lt 0$ per $x \\lt 0$, quindi la funzione è concava per $x \\lt 0$.</li>
</ul>
<p>Poiché la derivata seconda si annulla <em>e cambia segno</em> in $x=0$, questo è un punto di flesso.</p>
<figure class="figura" data-id="analisi1_lez30b_g3"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_g3-figure_1">
  <g id="analisi1_lez30b_g3-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_g3-axes_1">
   <g id="analisi1_lez30b_g3-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_g3-FillBetweenPolyCollection_1">
    <defs>
     <path id="analisi1_lez30b_g3-me583f1e712" d="M 44.8 -36 
L 44.8 -36 
L 46.231156 -38.549957 
L 47.662312 -41.074287 
L 49.093467 -43.573118 
L 50.524623 -46.046581 
L 51.955779 -48.494805 
L 53.386935 -50.917919 
L 54.81809 -53.316053 
L 56.249246 -55.689336 
L 57.680402 -58.037897 
L 59.111558 -60.361866 
L 60.542714 -62.661373 
L 61.973869 -64.936547 
L 63.405025 -67.187516 
L 64.836181 -69.414412 
L 66.267337 -71.617362 
L 67.698492 -73.796497 
L 69.129648 -75.951947 
L 70.560804 -78.083839 
L 71.99196 -80.192304 
L 73.423116 -82.277472 
L 74.854271 -84.339471 
L 76.285427 -86.378432 
L 77.716583 -88.394483 
L 79.147739 -90.387754 
L 80.578894 -92.358375 
L 82.01005 -94.306474 
L 83.441206 -96.232182 
L 84.872362 -98.135627 
L 86.303518 -100.01694 
L 87.734673 -101.876249 
L 89.165829 -103.713684 
L 90.596985 -105.529375 
L 92.028141 -107.32345 
L 93.459296 -109.09604 
L 94.890452 -110.847274 
L 96.321608 -112.57728 
L 97.752764 -114.28619 
L 99.18392 -115.974131 
L 100.615075 -117.641234 
L 102.046231 -119.287628 
L 103.477387 -120.913442 
L 104.908543 -122.518807 
L 106.339698 -124.10385 
L 107.770854 -125.668702 
L 109.20201 -127.213492 
L 110.633166 -128.738349 
L 112.064322 -130.243403 
L 113.495477 -131.728784 
L 114.926633 -133.194621 
L 116.357789 -134.641042 
L 117.788945 -136.068179 
L 119.220101 -137.476159 
L 120.651256 -138.865113 
L 122.082412 -140.23517 
L 123.513568 -141.58646 
L 124.944724 -142.919111 
L 126.375879 -144.233254 
L 127.807035 -145.529017 
L 129.238191 -146.80653 
L 130.669347 -148.065923 
L 132.100503 -149.307325 
L 133.531658 -150.530865 
L 134.962814 -151.736673 
L 136.39397 -152.924878 
L 137.825126 -154.09561 
L 139.256281 -155.248999 
L 140.687437 -156.385172 
L 142.118593 -157.504261 
L 143.549749 -158.606395 
L 144.980905 -159.691702 
L 146.41206 -160.760312 
L 147.843216 -161.812355 
L 149.274372 -162.84796 
L 150.705528 -163.867257 
L 152.136683 -164.870375 
L 153.567839 -165.857444 
L 154.998995 -166.828592 
L 156.430151 -167.783949 
L 157.861307 -168.723646 
L 159.292462 -169.64781 
L 160.723618 -170.556572 
L 162.154774 -171.450062 
L 163.58593 -172.328407 
L 165.017085 -173.191739 
L 166.448241 -174.040186 
L 167.879397 -174.873877 
L 169.310553 -175.692943 
L 170.741709 -176.497513 
L 172.172864 -177.287716 
L 173.60402 -178.063681 
L 175.035176 -178.825538 
L 176.466332 -179.573416 
L 177.897487 -180.307445 
L 179.328643 -181.027755 
L 180.759799 -181.734474 
L 182.190955 -182.427732 
L 183.622111 -183.107659 
L 185.053266 -183.774384 
L 186.484422 -184.428036 
L 187.915578 -185.068745 
L 189.346734 -185.69664 
L 190.777889 -186.311851 
L 192.209045 -186.914507 
L 193.640201 -187.504737 
L 195.071357 -188.082672 
L 196.502513 -188.64844 
L 197.933668 -189.20217 
L 199.364824 -189.743993 
L 200.79598 -190.274038 
L 202.227136 -190.792434 
L 203.658291 -191.29931 
L 205.089447 -191.794797 
L 206.520603 -192.279023 
L 207.951759 -192.752117 
L 209.382915 -193.21421 
L 210.81407 -193.665431 
L 212.245226 -194.105909 
L 213.676382 -194.535774 
L 215.107538 -194.955154 
L 216.538693 -195.36418 
L 217.969849 -195.762981 
L 219.401005 -196.151686 
L 220.832161 -196.530425 
L 222.263317 -196.899328 
L 223.694472 -197.258522 
L 225.125628 -197.608139 
L 226.556784 -197.948307 
L 227.98794 -198.279157 
L 229.419095 -198.600816 
L 230.850251 -198.913416 
L 232.281407 -199.217084 
L 233.712563 -199.511951 
L 235.143719 -199.798147 
L 236.574874 -200.075799 
L 238.00603 -200.345039 
L 239.437186 -200.605995 
L 240.868342 -200.858797 
L 242.299497 -201.103574 
L 243.730653 -201.340456 
L 245.161809 -201.569572 
L 246.592965 -201.791051 
L 248.024121 -202.005023 
L 249.455276 -202.211618 
L 250.886432 -202.410964 
L 252.317588 -202.603192 
L 253.748744 -202.788431 
L 255.179899 -202.966809 
L 256.611055 -203.138457 
L 258.042211 -203.303504 
L 259.473367 -203.46208 
L 260.904523 -203.614313 
L 262.335678 -203.760334 
L 263.766834 -203.900271 
L 265.19799 -204.034255 
L 266.629146 -204.162414 
L 268.060302 -204.284878 
L 269.491457 -204.401776 
L 270.922613 -204.513239 
L 272.353769 -204.619394 
L 273.784925 -204.720373 
L 275.21608 -204.816303 
L 276.647236 -204.907315 
L 278.078392 -204.993538 
L 279.509548 -205.075102 
L 280.940704 -205.152136 
L 282.371859 -205.224768 
L 283.803015 -205.29313 
L 285.234171 -205.35735 
L 286.665327 -205.417557 
L 288.096482 -205.473881 
L 289.527638 -205.526452 
L 290.958794 -205.575399 
L 292.38995 -205.620851 
L 293.821106 -205.662938 
L 295.252261 -205.701789 
L 296.683417 -205.737534 
L 298.114573 -205.770302 
L 299.545729 -205.800222 
L 300.976884 -205.827424 
L 302.40804 -205.852038 
L 303.839196 -205.874192 
L 305.270352 -205.894017 
L 306.701508 -205.911641 
L 308.132663 -205.927195 
L 309.563819 -205.940807 
L 310.994975 -205.952606 
L 312.426131 -205.962724 
L 313.857286 -205.971288 
L 315.288442 -205.978428 
L 316.719598 -205.984274 
L 318.150754 -205.988955 
L 319.58191 -205.992601 
L 321.013065 -205.99534 
L 322.444221 -205.997304 
L 323.875377 -205.998619 
L 325.306533 -205.999418 
L 326.737688 -205.999827 
L 328.168844 -205.999978 
L 329.6 -206 
L 329.6 -36 
L 329.6 -36 
L 328.168844 -36 
L 326.737688 -36 
L 325.306533 -36 
L 323.875377 -36 
L 322.444221 -36 
L 321.013065 -36 
L 319.58191 -36 
L 318.150754 -36 
L 316.719598 -36 
L 315.288442 -36 
L 313.857286 -36 
L 312.426131 -36 
L 310.994975 -36 
L 309.563819 -36 
L 308.132663 -36 
L 306.701508 -36 
L 305.270352 -36 
L 303.839196 -36 
L 302.40804 -36 
L 300.976884 -36 
L 299.545729 -36 
L 298.114573 -36 
L 296.683417 -36 
L 295.252261 -36 
L 293.821106 -36 
L 292.38995 -36 
L 290.958794 -36 
L 289.527638 -36 
L 288.096482 -36 
L 286.665327 -36 
L 285.234171 -36 
L 283.803015 -36 
L 282.371859 -36 
L 280.940704 -36 
L 279.509548 -36 
L 278.078392 -36 
L 276.647236 -36 
L 275.21608 -36 
L 273.784925 -36 
L 272.353769 -36 
L 270.922613 -36 
L 269.491457 -36 
L 268.060302 -36 
L 266.629146 -36 
L 265.19799 -36 
L 263.766834 -36 
L 262.335678 -36 
L 260.904523 -36 
L 259.473367 -36 
L 258.042211 -36 
L 256.611055 -36 
L 255.179899 -36 
L 253.748744 -36 
L 252.317588 -36 
L 250.886432 -36 
L 249.455276 -36 
L 248.024121 -36 
L 246.592965 -36 
L 245.161809 -36 
L 243.730653 -36 
L 242.299497 -36 
L 240.868342 -36 
L 239.437186 -36 
L 238.00603 -36 
L 236.574874 -36 
L 235.143719 -36 
L 233.712563 -36 
L 232.281407 -36 
L 230.850251 -36 
L 229.419095 -36 
L 227.98794 -36 
L 226.556784 -36 
L 225.125628 -36 
L 223.694472 -36 
L 222.263317 -36 
L 220.832161 -36 
L 219.401005 -36 
L 217.969849 -36 
L 216.538693 -36 
L 215.107538 -36 
L 213.676382 -36 
L 212.245226 -36 
L 210.81407 -36 
L 209.382915 -36 
L 207.951759 -36 
L 206.520603 -36 
L 205.089447 -36 
L 203.658291 -36 
L 202.227136 -36 
L 200.79598 -36 
L 199.364824 -36 
L 197.933668 -36 
L 196.502513 -36 
L 195.071357 -36 
L 193.640201 -36 
L 192.209045 -36 
L 190.777889 -36 
L 189.346734 -36 
L 187.915578 -36 
L 186.484422 -36 
L 185.053266 -36 
L 183.622111 -36 
L 182.190955 -36 
L 180.759799 -36 
L 179.328643 -36 
L 177.897487 -36 
L 176.466332 -36 
L 175.035176 -36 
L 173.60402 -36 
L 172.172864 -36 
L 170.741709 -36 
L 169.310553 -36 
L 167.879397 -36 
L 166.448241 -36 
L 165.017085 -36 
L 163.58593 -36 
L 162.154774 -36 
L 160.723618 -36 
L 159.292462 -36 
L 157.861307 -36 
L 156.430151 -36 
L 154.998995 -36 
L 153.567839 -36 
L 152.136683 -36 
L 150.705528 -36 
L 149.274372 -36 
L 147.843216 -36 
L 146.41206 -36 
L 144.980905 -36 
L 143.549749 -36 
L 142.118593 -36 
L 140.687437 -36 
L 139.256281 -36 
L 137.825126 -36 
L 136.39397 -36 
L 134.962814 -36 
L 133.531658 -36 
L 132.100503 -36 
L 130.669347 -36 
L 129.238191 -36 
L 127.807035 -36 
L 126.375879 -36 
L 124.944724 -36 
L 123.513568 -36 
L 122.082412 -36 
L 120.651256 -36 
L 119.220101 -36 
L 117.788945 -36 
L 116.357789 -36 
L 114.926633 -36 
L 113.495477 -36 
L 112.064322 -36 
L 110.633166 -36 
L 109.20201 -36 
L 107.770854 -36 
L 106.339698 -36 
L 104.908543 -36 
L 103.477387 -36 
L 102.046231 -36 
L 100.615075 -36 
L 99.18392 -36 
L 97.752764 -36 
L 96.321608 -36 
L 94.890452 -36 
L 93.459296 -36 
L 92.028141 -36 
L 90.596985 -36 
L 89.165829 -36 
L 87.734673 -36 
L 86.303518 -36 
L 84.872362 -36 
L 83.441206 -36 
L 82.01005 -36 
L 80.578894 -36 
L 79.147739 -36 
L 77.716583 -36 
L 76.285427 -36 
L 74.854271 -36 
L 73.423116 -36 
L 71.99196 -36 
L 70.560804 -36 
L 69.129648 -36 
L 67.698492 -36 
L 66.267337 -36 
L 64.836181 -36 
L 63.405025 -36 
L 61.973869 -36 
L 60.542714 -36 
L 59.111558 -36 
L 57.680402 -36 
L 56.249246 -36 
L 54.81809 -36 
L 53.386935 -36 
L 51.955779 -36 
L 50.524623 -36 
L 49.093467 -36 
L 47.662312 -36 
L 46.231156 -36 
L 44.8 -36 
z
"/>
    </defs>
    <g clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)">
     <use xlink:href="#analisi1_lez30b_g3-me583f1e712" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-FillBetweenPolyCollection_2">
    <defs>
     <path id="analisi1_lez30b_g3-meca12f18c5" d="M 329.6 -376 
L 329.6 -206 
L 331.031156 -206.000022 
L 332.462312 -206.000173 
L 333.893467 -206.000582 
L 335.324623 -206.001381 
L 336.755779 -206.002696 
L 338.186935 -206.00466 
L 339.61809 -206.007399 
L 341.049246 -206.011045 
L 342.480402 -206.015726 
L 343.911558 -206.021572 
L 345.342714 -206.028712 
L 346.773869 -206.037276 
L 348.205025 -206.047394 
L 349.636181 -206.059193 
L 351.067337 -206.072805 
L 352.498492 -206.088359 
L 353.929648 -206.105983 
L 355.360804 -206.125808 
L 356.79196 -206.147962 
L 358.223116 -206.172576 
L 359.654271 -206.199778 
L 361.085427 -206.229698 
L 362.516583 -206.262466 
L 363.947739 -206.298211 
L 365.378894 -206.337062 
L 366.81005 -206.379149 
L 368.241206 -206.424601 
L 369.672362 -206.473548 
L 371.103518 -206.526119 
L 372.534673 -206.582443 
L 373.965829 -206.64265 
L 375.396985 -206.70687 
L 376.828141 -206.775232 
L 378.259296 -206.847864 
L 379.690452 -206.924898 
L 381.121608 -207.006462 
L 382.552764 -207.092685 
L 383.98392 -207.183697 
L 385.415075 -207.279627 
L 386.846231 -207.380606 
L 388.277387 -207.486761 
L 389.708543 -207.598224 
L 391.139698 -207.715122 
L 392.570854 -207.837586 
L 394.00201 -207.965745 
L 395.433166 -208.099729 
L 396.864322 -208.239666 
L 398.295477 -208.385687 
L 399.726633 -208.53792 
L 401.157789 -208.696496 
L 402.588945 -208.861543 
L 404.020101 -209.033191 
L 405.451256 -209.211569 
L 406.882412 -209.396808 
L 408.313568 -209.589036 
L 409.744724 -209.788382 
L 411.175879 -209.994977 
L 412.607035 -210.208949 
L 414.038191 -210.430428 
L 415.469347 -210.659544 
L 416.900503 -210.896426 
L 418.331658 -211.141203 
L 419.762814 -211.394005 
L 421.19397 -211.654961 
L 422.625126 -211.924201 
L 424.056281 -212.201853 
L 425.487437 -212.488049 
L 426.918593 -212.782916 
L 428.349749 -213.086584 
L 429.780905 -213.399184 
L 431.21206 -213.720843 
L 432.643216 -214.051693 
L 434.074372 -214.391861 
L 435.505528 -214.741478 
L 436.936683 -215.100672 
L 438.367839 -215.469575 
L 439.798995 -215.848314 
L 441.230151 -216.237019 
L 442.661307 -216.63582 
L 444.092462 -217.044846 
L 445.523618 -217.464226 
L 446.954774 -217.894091 
L 448.38593 -218.334569 
L 449.817085 -218.78579 
L 451.248241 -219.247883 
L 452.679397 -219.720977 
L 454.110553 -220.205203 
L 455.541709 -220.70069 
L 456.972864 -221.207566 
L 458.40402 -221.725962 
L 459.835176 -222.256007 
L 461.266332 -222.79783 
L 462.697487 -223.35156 
L 464.128643 -223.917328 
L 465.559799 -224.495263 
L 466.990955 -225.085493 
L 468.422111 -225.688149 
L 469.853266 -226.30336 
L 471.284422 -226.931255 
L 472.715578 -227.571964 
L 474.146734 -228.225616 
L 475.577889 -228.892341 
L 477.009045 -229.572268 
L 478.440201 -230.265526 
L 479.871357 -230.972245 
L 481.302513 -231.692555 
L 482.733668 -232.426584 
L 484.164824 -233.174462 
L 485.59598 -233.936319 
L 487.027136 -234.712284 
L 488.458291 -235.502487 
L 489.889447 -236.307057 
L 491.320603 -237.126123 
L 492.751759 -237.959814 
L 494.182915 -238.808261 
L 495.61407 -239.671593 
L 497.045226 -240.549938 
L 498.476382 -241.443428 
L 499.907538 -242.35219 
L 501.338693 -243.276354 
L 502.769849 -244.216051 
L 504.201005 -245.171408 
L 505.632161 -246.142556 
L 507.063317 -247.129625 
L 508.494472 -248.132743 
L 509.925628 -249.15204 
L 511.356784 -250.187645 
L 512.78794 -251.239688 
L 514.219095 -252.308298 
L 515.650251 -253.393605 
L 517.081407 -254.495739 
L 518.512563 -255.614828 
L 519.943719 -256.751001 
L 521.374874 -257.90439 
L 522.80603 -259.075122 
L 524.237186 -260.263327 
L 525.668342 -261.469135 
L 527.099497 -262.692675 
L 528.530653 -263.934077 
L 529.961809 -265.19347 
L 531.392965 -266.470983 
L 532.824121 -267.766746 
L 534.255276 -269.080889 
L 535.686432 -270.41354 
L 537.117588 -271.76483 
L 538.548744 -273.134887 
L 539.979899 -274.523841 
L 541.411055 -275.931821 
L 542.842211 -277.358958 
L 544.273367 -278.805379 
L 545.704523 -280.271216 
L 547.135678 -281.756597 
L 548.566834 -283.261651 
L 549.99799 -284.786508 
L 551.429146 -286.331298 
L 552.860302 -287.89615 
L 554.291457 -289.481193 
L 555.722613 -291.086558 
L 557.153769 -292.712372 
L 558.584925 -294.358766 
L 560.01608 -296.025869 
L 561.447236 -297.71381 
L 562.878392 -299.42272 
L 564.309548 -301.152726 
L 565.740704 -302.90396 
L 567.171859 -304.67655 
L 568.603015 -306.470625 
L 570.034171 -308.286316 
L 571.465327 -310.123751 
L 572.896482 -311.98306 
L 574.327638 -313.864373 
L 575.758794 -315.767818 
L 577.18995 -317.693526 
L 578.621106 -319.641625 
L 580.052261 -321.612246 
L 581.483417 -323.605517 
L 582.914573 -325.621568 
L 584.345729 -327.660529 
L 585.776884 -329.722528 
L 587.20804 -331.807696 
L 588.639196 -333.916161 
L 590.070352 -336.048053 
L 591.501508 -338.203503 
L 592.932663 -340.382638 
L 594.363819 -342.585588 
L 595.794975 -344.812484 
L 597.226131 -347.063453 
L 598.657286 -349.338627 
L 600.088442 -351.638134 
L 601.519598 -353.962103 
L 602.950754 -356.310664 
L 604.38191 -358.683947 
L 605.813065 -361.082081 
L 607.244221 -363.505195 
L 608.675377 -365.953419 
L 610.106533 -368.426882 
L 611.537688 -370.925713 
L 612.968844 -373.450043 
L 614.4 -376 
L 614.4 -376 
L 614.4 -376 
L 612.968844 -376 
L 611.537688 -376 
L 610.106533 -376 
L 608.675377 -376 
L 607.244221 -376 
L 605.813065 -376 
L 604.38191 -376 
L 602.950754 -376 
L 601.519598 -376 
L 600.088442 -376 
L 598.657286 -376 
L 597.226131 -376 
L 595.794975 -376 
L 594.363819 -376 
L 592.932663 -376 
L 591.501508 -376 
L 590.070352 -376 
L 588.639196 -376 
L 587.20804 -376 
L 585.776884 -376 
L 584.345729 -376 
L 582.914573 -376 
L 581.483417 -376 
L 580.052261 -376 
L 578.621106 -376 
L 577.18995 -376 
L 575.758794 -376 
L 574.327638 -376 
L 572.896482 -376 
L 571.465327 -376 
L 570.034171 -376 
L 568.603015 -376 
L 567.171859 -376 
L 565.740704 -376 
L 564.309548 -376 
L 562.878392 -376 
L 561.447236 -376 
L 560.01608 -376 
L 558.584925 -376 
L 557.153769 -376 
L 555.722613 -376 
L 554.291457 -376 
L 552.860302 -376 
L 551.429146 -376 
L 549.99799 -376 
L 548.566834 -376 
L 547.135678 -376 
L 545.704523 -376 
L 544.273367 -376 
L 542.842211 -376 
L 541.411055 -376 
L 539.979899 -376 
L 538.548744 -376 
L 537.117588 -376 
L 535.686432 -376 
L 534.255276 -376 
L 532.824121 -376 
L 531.392965 -376 
L 529.961809 -376 
L 528.530653 -376 
L 527.099497 -376 
L 525.668342 -376 
L 524.237186 -376 
L 522.80603 -376 
L 521.374874 -376 
L 519.943719 -376 
L 518.512563 -376 
L 517.081407 -376 
L 515.650251 -376 
L 514.219095 -376 
L 512.78794 -376 
L 511.356784 -376 
L 509.925628 -376 
L 508.494472 -376 
L 507.063317 -376 
L 505.632161 -376 
L 504.201005 -376 
L 502.769849 -376 
L 501.338693 -376 
L 499.907538 -376 
L 498.476382 -376 
L 497.045226 -376 
L 495.61407 -376 
L 494.182915 -376 
L 492.751759 -376 
L 491.320603 -376 
L 489.889447 -376 
L 488.458291 -376 
L 487.027136 -376 
L 485.59598 -376 
L 484.164824 -376 
L 482.733668 -376 
L 481.302513 -376 
L 479.871357 -376 
L 478.440201 -376 
L 477.009045 -376 
L 475.577889 -376 
L 474.146734 -376 
L 472.715578 -376 
L 471.284422 -376 
L 469.853266 -376 
L 468.422111 -376 
L 466.990955 -376 
L 465.559799 -376 
L 464.128643 -376 
L 462.697487 -376 
L 461.266332 -376 
L 459.835176 -376 
L 458.40402 -376 
L 456.972864 -376 
L 455.541709 -376 
L 454.110553 -376 
L 452.679397 -376 
L 451.248241 -376 
L 449.817085 -376 
L 448.38593 -376 
L 446.954774 -376 
L 445.523618 -376 
L 444.092462 -376 
L 442.661307 -376 
L 441.230151 -376 
L 439.798995 -376 
L 438.367839 -376 
L 436.936683 -376 
L 435.505528 -376 
L 434.074372 -376 
L 432.643216 -376 
L 431.21206 -376 
L 429.780905 -376 
L 428.349749 -376 
L 426.918593 -376 
L 425.487437 -376 
L 424.056281 -376 
L 422.625126 -376 
L 421.19397 -376 
L 419.762814 -376 
L 418.331658 -376 
L 416.900503 -376 
L 415.469347 -376 
L 414.038191 -376 
L 412.607035 -376 
L 411.175879 -376 
L 409.744724 -376 
L 408.313568 -376 
L 406.882412 -376 
L 405.451256 -376 
L 404.020101 -376 
L 402.588945 -376 
L 401.157789 -376 
L 399.726633 -376 
L 398.295477 -376 
L 396.864322 -376 
L 395.433166 -376 
L 394.00201 -376 
L 392.570854 -376 
L 391.139698 -376 
L 389.708543 -376 
L 388.277387 -376 
L 386.846231 -376 
L 385.415075 -376 
L 383.98392 -376 
L 382.552764 -376 
L 381.121608 -376 
L 379.690452 -376 
L 378.259296 -376 
L 376.828141 -376 
L 375.396985 -376 
L 373.965829 -376 
L 372.534673 -376 
L 371.103518 -376 
L 369.672362 -376 
L 368.241206 -376 
L 366.81005 -376 
L 365.378894 -376 
L 363.947739 -376 
L 362.516583 -376 
L 361.085427 -376 
L 359.654271 -376 
L 358.223116 -376 
L 356.79196 -376 
L 355.360804 -376 
L 353.929648 -376 
L 352.498492 -376 
L 351.067337 -376 
L 349.636181 -376 
L 348.205025 -376 
L 346.773869 -376 
L 345.342714 -376 
L 343.911558 -376 
L 342.480402 -376 
L 341.049246 -376 
L 339.61809 -376 
L 338.186935 -376 
L 336.755779 -376 
L 335.324623 -376 
L 333.893467 -376 
L 332.462312 -376 
L 331.031156 -376 
L 329.6 -376 
z
"/>
    </defs>
    <g clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)">
     <use xlink:href="#analisi1_lez30b_g3-meca12f18c5" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-matplotlib.axis_1">
    <g id="analisi1_lez30b_g3-xtick_1">
     <g id="analisi1_lez30b_g3-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_2">
      <defs>
       <path id="analisi1_lez30b_g3-m1c47ffd6fc" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m1c47ffd6fc" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g3-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_g3-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-xtick_2">
     <g id="analisi1_lez30b_g3-line2d_3">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m1c47ffd6fc" x="187.2" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(181.716328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g3-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-xtick_3">
     <g id="analisi1_lez30b_g3-line2d_5">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m1c47ffd6fc" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g3-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-xtick_4">
     <g id="analisi1_lez30b_g3-line2d_7">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m1c47ffd6fc" x="472" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(468.500625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-xtick_5">
     <g id="analisi1_lez30b_g3-line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m1c47ffd6fc" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(610.900625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-15"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-matplotlib.axis_2">
    <g id="analisi1_lez30b_g3-ytick_1">
     <g id="analisi1_lez30b_g3-line2d_11">
      <path d="M 44.8 321.5 
L 614.4 321.5 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_12">
      <defs>
       <path id="analisi1_lez30b_g3-m9f9140a7f5" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m9f9140a7f5" x="329.6" y="321.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_6">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(312.132656 325.678711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g3-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-ytick_2">
     <g id="analisi1_lez30b_g3-line2d_13">
      <path d="M 44.8 257.75 
L 614.4 257.75 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m9f9140a7f5" x="329.6" y="257.75" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_7">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(312.132656 261.928711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g3-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-ytick_3">
     <g id="analisi1_lez30b_g3-line2d_15">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m9f9140a7f5" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_8">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-ytick_4">
     <g id="analisi1_lez30b_g3-line2d_17">
      <path d="M 44.8 130.25 
L 614.4 130.25 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m9f9140a7f5" x="329.6" y="130.25" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_9">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(316.10125 134.428711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g3-ytick_5">
     <g id="analisi1_lez30b_g3-line2d_19">
      <path d="M 44.8 66.5 
L 614.4 66.5 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g3-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_g3-m9f9140a7f5" x="329.6" y="66.5" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g3-text_10">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 70.678711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-line2d_21">
    <defs>
     <path id="analisi1_lez30b_g3-mdc3541b6d7" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g3-mdc3541b6d7" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-line2d_22">
    <defs>
     <path id="analisi1_lez30b_g3-mb4cd53f73c" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g3-mb4cd53f73c" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-line2d_23">
    <path d="M 44.8 364 
L 50.975813 353.178867 
L 57.151626 342.826965 
L 63.32744 332.933895 
L 69.503253 323.489254 
L 75.204003 315.160145 
L 80.904754 307.196088 
L 86.605505 299.588902 
L 92.306255 292.330407 
L 98.007006 285.412423 
L 103.707756 278.826769 
L 109.408507 272.565264 
L 115.109258 266.619729 
L 120.810008 260.981982 
L 126.510759 255.643845 
L 132.21151 250.597134 
L 137.91226 245.833672 
L 143.613011 241.345277 
L 149.313761 237.123768 
L 155.014512 233.160965 
L 160.715263 229.448689 
L 166.891076 225.700279 
L 173.066889 222.225888 
L 179.242702 219.015115 
L 185.418515 216.057559 
L 191.594329 213.342819 
L 197.770142 210.860495 
L 204.421018 208.435214 
L 211.071893 206.254427 
L 217.722769 204.305145 
L 224.848707 202.458769 
L 231.974646 200.84726 
L 239.100584 199.454643 
L 246.701585 198.192448 
L 254.777648 197.082642 
L 263.328774 196.141924 
L 272.354962 195.380519 
L 281.856214 194.800902 
L 292.782652 194.367271 
L 305.134279 194.107771 
L 321.286405 194.004229 
L 357.391159 193.842039 
L 369.742786 193.523951 
L 380.669224 193.019818 
L 390.170475 192.364645 
L 399.196664 191.519186 
L 407.74779 190.487801 
L 415.823853 189.282507 
L 423.424854 187.921693 
L 430.550792 186.428914 
L 437.676731 184.709789 
L 444.327606 182.886963 
L 450.978482 180.840055 
L 457.629358 178.556076 
L 463.805171 176.211607 
L 469.980984 173.641123 
L 476.156797 170.834223 
L 482.332611 167.780507 
L 488.508424 164.469573 
L 494.684237 160.891021 
L 500.384987 157.341217 
L 506.085738 153.546341 
L 511.786489 149.498212 
L 517.487239 145.18865 
L 523.18799 140.609474 
L 528.888741 135.752505 
L 534.589491 130.609561 
L 540.290242 125.172463 
L 545.990992 119.433029 
L 551.691743 113.383079 
L 557.392494 107.014434 
L 563.093244 100.318912 
L 568.793995 93.288333 
L 574.494746 85.914517 
L 580.195496 78.189283 
L 585.896247 70.104451 
L 591.596997 61.65184 
L 597.297748 52.823269 
L 602.998499 43.61056 
L 609.174312 33.187146 
L 614.4 24 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g3-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g3-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g3-text_11">
    <!-- Punto di flesso -->
    <g style="fill: currentColor" transform="translate(335.6 188) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g3-DejaVuSans-33" d="M 1259 4147 
L 1259 2394 
L 2053 2394 
Q 2494 2394 2734 2622 
Q 2975 2850 2975 3272 
Q 2975 3691 2734 3919 
Q 2494 4147 2053 4147 
L 1259 4147 
z
M 628 4666 
L 2053 4666 
Q 2838 4666 3239 4311 
Q 3641 3956 3641 3272 
Q 3641 2581 3239 2228 
Q 2838 1875 2053 1875 
L 1259 1875 
L 1259 0 
L 628 0 
L 628 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-58" d="M 544 1381 
L 544 3500 
L 1119 3500 
L 1119 1403 
Q 1119 906 1312 657 
Q 1506 409 1894 409 
Q 2359 409 2629 706 
Q 2900 1003 2900 1516 
L 2900 3500 
L 3475 3500 
L 3475 0 
L 2900 0 
L 2900 538 
Q 2691 219 2414 64 
Q 2138 -91 1772 -91 
Q 1169 -91 856 284 
Q 544 659 544 1381 
z
M 1991 3584 
L 1991 3584 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-51" d="M 3513 2113 
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
      <path id="analisi1_lez30b_g3-DejaVuSans-57" d="M 1172 4494 
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
      <path id="analisi1_lez30b_g3-DejaVuSans-52" d="M 1959 3097 
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
      <path id="analisi1_lez30b_g3-DejaVuSans-3" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-47" d="M 2906 2969 
L 2906 4863 
L 3481 4863 
L 3481 0 
L 2906 0 
L 2906 525 
Q 2725 213 2448 61 
Q 2172 -91 1784 -91 
Q 1150 -91 751 415 
Q 353 922 353 1747 
Q 353 2572 751 3078 
Q 1150 3584 1784 3584 
Q 2172 3584 2448 3432 
Q 2725 3281 2906 2969 
z
M 947 1747 
Q 947 1113 1208 752 
Q 1469 391 1925 391 
Q 2381 391 2643 752 
Q 2906 1113 2906 1747 
Q 2906 2381 2643 2742 
Q 2381 3103 1925 3103 
Q 1469 3103 1208 2742 
Q 947 2381 947 1747 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-4c" d="M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-13b0" d="M 1831 4863 
L 3431 4863 
L 3431 0 
L 2853 0 
L 2853 4384 
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
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-48" d="M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g3-DejaVuSans-56" d="M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-33"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-58" transform="translate(58.546875 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-51" transform="translate(121.921875 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-57" transform="translate(185.296875 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-52" transform="translate(224.5 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-3" transform="translate(285.6875 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-47" transform="translate(317.46875 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-4c" transform="translate(380.953125 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-3" transform="translate(408.734375 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-13b0" transform="translate(440.515625 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-48" transform="translate(503.5 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-56" transform="translate(565.03125 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-56" transform="translate(617.125 0)"/>
     <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-52" transform="translate(669.21875 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-line2d_24">
    <defs>
     <path id="analisi1_lez30b_g3-m73540f4291" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_g3-p8b7ff1bb21)">
     <use xlink:href="#analisi1_lez30b_g3-m73540f4291" x="329.6" y="194" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g3-legend_1">
    <g id="analisi1_lez30b_g3-line2d_25">
     <path d="M 54.7 38.408281 
L 65.7 38.408281 
L 76.7 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g3-text_12">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(85.5 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g3-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_g3-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30b_g3-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30b_g3-DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-b" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-5b" transform="translate(74.21875 0)"/>
      <use xlink:href="#analisi1_lez30b_g3-DejaVuSans-c" transform="translate(133.40625 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_g3-p8b7ff1bb21">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
          }
        ]
      },
      {
        id: "s30-test-derivata-seconda",
        type: "section",
        title: "Test della Derivata Seconda per Estremi Locali",
        icon: "🎯",
        content: `<p>La convessità ci fornisce un potente strumento per classificare i <strong>punti critici</strong> (quelli dove $f'(x_0) = 0$).</p>
<p><strong>Teorema (test della derivata seconda).</strong> Sia $f: I \\to \\mathbb{R}$ una funzione derivabile due volte con continuità ($f \\in C^2(I)$) e sia $x_0$ un punto interno a $I$ tale che $f'(x_0) = 0$.</p>
<ol>
  <li>Se $f''(x_0) \\gt 0$, allora $x_0$ è un punto di <strong>minimo relativo</strong>.</li>
  <li>Se $f''(x_0) \\lt 0$, allora $x_0$ è un punto di <strong>massimo relativo</strong>.</li>
  <li>Se $f''(x_0) = 0$, il test è <strong>inconcludente</strong> e non possiamo dire nulla sulla natura di $x_0$.</li>
</ol>`,
        subsections: [
          {
            subtitle: "Perché funziona il test?",
            content: `<p>L'idea è molto geometrica. Se $f''(x_0) \\gt 0$ e $f''$ è continua, allora $f''(x)$ sarà positiva anche in un piccolo intorno di $x_0$. Ma dove $f'' \\gt 0$ la funzione $f$ è <strong>convessa</strong>, e un punto critico ($f'(x_0)=0$) su una funzione convessa non può che essere un punto di minimo.</p>
<p>Analogamente, se $f''(x_0) \\lt 0$ la funzione è localmente concava, e un punto critico su una funzione concava deve essere un massimo.</p>`
          }
        ],
        formulas: [
          { label: "Test: minimo", latex: "f'(x_0) = 0, \\ f''(x_0) \\gt 0 \\Rightarrow x_0 \\text{ minimo relativo}" },
          { label: "Test: massimo", latex: "f'(x_0) = 0, \\ f''(x_0) \\lt 0 \\Rightarrow x_0 \\text{ massimo relativo}" }
        ]
      },
      {
        id: "s30-caso-inconcludente",
        type: "note_box",
        title: "Il caso inconcludente $f''(x_0) = 0$",
        icon: "🧠",
        content: `<p>Quando la derivata seconda è nulla, il test fallisce e <strong>può succedere di tutto</strong>. Il punto critico $x_0$ potrebbe essere un minimo, un massimo, o un punto di flesso. Per determinarne la natura bisogna tornare a studiare il segno della derivata prima, oppure analizzare le derivate di ordine superiore.</p>
<p>Vediamo tre esempi in cui $f'(0) = 0$ e $f''(0) = 0$.</p>
<p><strong>1. Minimo relativo:</strong> $f(x) = x^4$. Abbiamo $f'(x) = 4x^3$ e $f''(x) = 12x^2$. In $x=0$ si ha $f'(0) = 0$ e $f''(0) = 0$. Studiando il segno di $f'(x)$, vediamo che $x=0$ è un punto di minimo.</p>
<figure class="figura" data-id="analisi1_lez30b_g4"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_g4-figure_1">
  <g id="analisi1_lez30b_g4-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_g4-axes_1">
   <g id="analisi1_lez30b_g4-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_g4-matplotlib.axis_1">
    <g id="analisi1_lez30b_g4-xtick_1">
     <g id="analisi1_lez30b_g4-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_2">
      <defs>
       <path id="analisi1_lez30b_g4-mc400bb69b9" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g4-mc400bb69b9" x="44.8" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 345.954252) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_g4-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-xtick_2">
     <g id="analisi1_lez30b_g4-line2d_3">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-mc400bb69b9" x="187.2" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(181.716328 345.954252) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-xtick_3">
     <g id="analisi1_lez30b_g4-line2d_5">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-mc400bb69b9" x="329.6" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 345.954252) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-xtick_4">
     <g id="analisi1_lez30b_g4-line2d_7">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-mc400bb69b9" x="472" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(468.500625 345.954252) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-xtick_5">
     <g id="analisi1_lez30b_g4-line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-mc400bb69b9" x="614.4" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(610.900625 345.954252) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-15"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g4-matplotlib.axis_2">
    <g id="analisi1_lez30b_g4-ytick_1">
     <g id="analisi1_lez30b_g4-line2d_11">
      <path d="M 44.8 331.09683 
L 614.4 331.09683 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_12">
      <defs>
       <path id="analisi1_lez30b_g4-m86331e3fd4" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g4-m86331e3fd4" x="329.6" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_6">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 335.275541) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-ytick_2">
     <g id="analisi1_lez30b_g4-line2d_13">
      <path d="M 44.8 275.362271 
L 614.4 275.362271 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-m86331e3fd4" x="329.6" y="275.362271" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_7">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(316.10125 279.540981) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-ytick_3">
     <g id="analisi1_lez30b_g4-line2d_15">
      <path d="M 44.8 219.627711 
L 614.4 219.627711 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-m86331e3fd4" x="329.6" y="219.627711" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_8">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 223.806422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-19"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-ytick_4">
     <g id="analisi1_lez30b_g4-line2d_17">
      <path d="M 44.8 163.893151 
L 614.4 163.893151 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-m86331e3fd4" x="329.6" y="163.893151" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_9">
      <!-- 9 -->
      <g style="fill: currentColor" transform="translate(316.10125 168.071862) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-1c" d="M 703 97 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-1c"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-ytick_5">
     <g id="analisi1_lez30b_g4-line2d_19">
      <path d="M 44.8 108.158592 
L 614.4 108.158592 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-m86331e3fd4" x="329.6" y="108.158592" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_10">
      <!-- 12 -->
      <g style="fill: currentColor" transform="translate(309.1025 112.337303) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-15" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g4-ytick_6">
     <g id="analisi1_lez30b_g4-line2d_21">
      <path d="M 44.8 52.424032 
L 614.4 52.424032 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g4-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30b_g4-m86331e3fd4" x="329.6" y="52.424032" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g4-text_11">
      <!-- 15 -->
      <g style="fill: currentColor" transform="translate(309.1025 56.602743) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g4-DejaVuSans-18" d="M 691 4666 
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
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-18" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g4-line2d_23">
    <defs>
     <path id="analisi1_lez30b_g4-me8eb8b9cb2" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g4-me8eb8b9cb2" x="614.4" y="331.09683" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g4-line2d_24">
    <defs>
     <path id="analisi1_lez30b_g4-m4f433d4b8f" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g4-m4f433d4b8f" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g4-line2d_25">
    <path d="M 44.8 33.845846 
L 49.550626 53.188356 
L 54.301251 71.571165 
L 59.051877 89.026554 
L 63.802502 105.586254 
L 68.553128 121.281441 
L 73.303753 136.142742 
L 77.579316 148.829805 
L 81.854879 160.887327 
L 86.130442 172.336486 
L 90.406005 183.198098 
L 94.681568 193.492616 
L 98.957131 203.240131 
L 103.232694 212.460372 
L 107.508257 221.172706 
L 111.78382 229.396137 
L 116.059383 237.149307 
L 120.334946 244.450494 
L 124.610509 251.317616 
L 128.886072 257.768228 
L 133.161635 263.819522 
L 137.437198 269.488327 
L 141.712761 274.791112 
L 145.988324 279.743981 
L 150.263887 284.362677 
L 154.53945 288.662581 
L 158.815013 292.658711 
L 163.090575 296.365722 
L 167.366138 299.797908 
L 171.641701 302.969199 
L 176.392327 306.203361 
L 181.142952 309.150261 
L 185.893578 311.827436 
L 190.644204 314.251868 
L 195.394829 316.43999 
L 200.620517 318.592919 
L 205.846205 320.499476 
L 211.071893 322.179214 
L 216.772644 323.774977 
L 222.473394 325.14634 
L 228.649208 326.404352 
L 235.300083 327.524031 
L 242.426022 328.487609 
L 250.027023 329.285382 
L 258.578148 329.947271 
L 268.079399 330.449619 
L 279.005838 330.80078 
L 292.782652 331.013812 
L 314.160467 331.094263 
L 365.942285 331.018014 
L 381.144287 330.777907 
L 392.545788 330.38753 
L 402.047039 329.852184 
L 410.598165 329.152079 
L 418.199166 328.312749 
L 425.325104 327.303097 
L 431.97598 326.1337 
L 438.151793 324.823309 
L 443.852544 323.397962 
L 449.553294 321.742513 
L 454.778982 320.002808 
L 460.004671 318.031032 
L 465.230359 315.80741 
L 469.980984 313.550088 
L 474.73161 311.051583 
L 479.482235 308.295299 
L 484.232861 305.264087 
L 488.508424 302.286314 
L 492.783987 299.058231 
L 497.05955 295.56619 
L 501.335113 291.796178 
L 505.610676 287.733822 
L 509.886239 283.364386 
L 514.161802 278.672771 
L 518.437364 273.643516 
L 522.712927 268.260798 
L 526.98849 262.508431 
L 531.264053 256.369867 
L 535.539616 249.828196 
L 539.815179 242.866145 
L 544.090742 235.466078 
L 548.366305 227.609999 
L 552.641868 219.279546 
L 556.917431 210.455999 
L 561.192994 201.120272 
L 565.468557 191.252919 
L 569.74412 180.834129 
L 574.019683 169.843732 
L 578.295246 158.261193 
L 582.570809 146.065615 
L 586.846372 133.235741 
L 591.121935 119.749948 
L 595.397498 105.586254 
L 599.673061 90.722311 
L 604.423686 73.35791 
L 609.174312 55.069287 
L 613.924937 35.824215 
L 614.4 33.845846 
L 614.4 33.845846 
" clip-path="url(#analisi1_lez30b_g4-p2125ed2372)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g4-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g4-patch_4">
    <path d="M 44.8 331.09683 
L 614.4 331.09683 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g4-text_12">
    <!-- Minimo -->
    <g style="fill: currentColor" transform="translate(335.6 325.09683) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g4-DejaVuSans-30" d="M 628 4666 
L 1569 4666 
L 2759 1491 
L 3956 4666 
L 4897 4666 
L 4897 0 
L 4281 0 
L 4281 4097 
L 3078 897 
L 2444 897 
L 1241 4097 
L 1241 0 
L 628 0 
L 628 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g4-DejaVuSans-4c" d="M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g4-DejaVuSans-51" d="M 3513 2113 
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
      <path id="analisi1_lez30b_g4-DejaVuSans-50" d="M 3328 2828 
Q 3544 3216 3844 3400 
Q 4144 3584 4550 3584 
Q 5097 3584 5394 3201 
Q 5691 2819 5691 2113 
L 5691 0 
L 5113 0 
L 5113 2094 
Q 5113 2597 4934 2840 
Q 4756 3084 4391 3084 
Q 3944 3084 3684 2787 
Q 3425 2491 3425 1978 
L 3425 0 
L 2847 0 
L 2847 2094 
Q 2847 2600 2669 2842 
Q 2491 3084 2119 3084 
Q 1678 3084 1418 2786 
Q 1159 2488 1159 1978 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1356 3278 1631 3431 
Q 1906 3584 2284 3584 
Q 2666 3584 2933 3390 
Q 3200 3197 3328 2828 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g4-DejaVuSans-52" d="M 1959 3097 
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
     </defs>
     <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-30"/>
     <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-4c" transform="translate(86.28125 0)"/>
     <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-51" transform="translate(114.0625 0)"/>
     <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-4c" transform="translate(177.4375 0)"/>
     <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-50" transform="translate(205.21875 0)"/>
     <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-52" transform="translate(302.625 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g4-line2d_26">
    <defs>
     <path id="analisi1_lez30b_g4-mf2b9741765" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_g4-p2125ed2372)">
     <use xlink:href="#analisi1_lez30b_g4-mf2b9741765" x="329.6" y="331.09683" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g4-legend_1">
    <g id="analisi1_lez30b_g4-line2d_27">
     <path d="M 554.733594 38.408281 
L 565.733594 38.408281 
L 576.733594 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g4-text_13">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(585.533594 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g4-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_g4-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30b_g4-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30b_g4-DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-b" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-5b" transform="translate(74.21875 0)"/>
      <use xlink:href="#analisi1_lez30b_g4-DejaVuSans-c" transform="translate(133.40625 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_g4-p2125ed2372">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
<p><strong>2. Massimo relativo:</strong> $f(x) = -x^4$. Abbiamo $f'(x) = -4x^3$ e $f''(x) = -12x^2$. In $x=0$ si ha $f'(0) = 0$ e $f''(0) = 0$. Studiando il segno di $f'(x)$, vediamo che $x=0$ è un punto di massimo.</p>
<figure class="figura" data-id="analisi1_lez30b_g5"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_g5-figure_1">
  <g id="analisi1_lez30b_g5-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_g5-axes_1">
   <g id="analisi1_lez30b_g5-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_g5-matplotlib.axis_1">
    <g id="analisi1_lez30b_g5-xtick_1">
     <g id="analisi1_lez30b_g5-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_2">
      <defs>
       <path id="analisi1_lez30b_g5-mcc5bff8578" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g5-mcc5bff8578" x="44.8" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 71.760592) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_g5-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-xtick_2">
     <g id="analisi1_lez30b_g5-line2d_3">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-mcc5bff8578" x="187.2" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(181.716328 71.760592) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-xtick_3">
     <g id="analisi1_lez30b_g5-line2d_5">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-mcc5bff8578" x="329.6" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 71.760592) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-xtick_4">
     <g id="analisi1_lez30b_g5-line2d_7">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-mcc5bff8578" x="472" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(468.500625 71.760592) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-xtick_5">
     <g id="analisi1_lez30b_g5-line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-mcc5bff8578" x="614.4" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(610.900625 71.760592) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-15"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g5-matplotlib.axis_2">
    <g id="analisi1_lez30b_g5-ytick_1">
     <g id="analisi1_lez30b_g5-line2d_11">
      <path d="M 44.8 335.575968 
L 614.4 335.575968 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_12">
      <defs>
       <path id="analisi1_lez30b_g5-m03a6057fa0" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g5-m03a6057fa0" x="329.6" y="335.575968" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_6">
      <!-- -15 -->
      <g style="fill: currentColor" transform="translate(305.133906 339.754679) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-18" d="M 691 4666 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-14" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-18" transform="translate(99.703125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-ytick_2">
     <g id="analisi1_lez30b_g5-line2d_13">
      <path d="M 44.8 279.841408 
L 614.4 279.841408 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-m03a6057fa0" x="329.6" y="279.841408" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_7">
      <!-- -12 -->
      <g style="fill: currentColor" transform="translate(305.133906 284.020119) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-14" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-15" transform="translate(99.703125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-ytick_3">
     <g id="analisi1_lez30b_g5-line2d_15">
      <path d="M 44.8 224.106849 
L 614.4 224.106849 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-m03a6057fa0" x="329.6" y="224.106849" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_8">
      <!-- -9 -->
      <g style="fill: currentColor" transform="translate(312.132656 228.285559) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-1c" d="M 703 97 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-1c" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-ytick_4">
     <g id="analisi1_lez30b_g5-line2d_17">
      <path d="M 44.8 168.372289 
L 614.4 168.372289 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-m03a6057fa0" x="329.6" y="168.372289" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_9">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(312.132656 172.551) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-ytick_5">
     <g id="analisi1_lez30b_g5-line2d_19">
      <path d="M 44.8 112.637729 
L 614.4 112.637729 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-m03a6057fa0" x="329.6" y="112.637729" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_10">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(312.132656 116.81644) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g5-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g5-ytick_6">
     <g id="analisi1_lez30b_g5-line2d_21">
      <path d="M 44.8 56.90317 
L 614.4 56.90317 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g5-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30b_g5-m03a6057fa0" x="329.6" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g5-text_11">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 61.081881) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-13"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g5-line2d_23">
    <defs>
     <path id="analisi1_lez30b_g5-m721e47a105" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g5-m721e47a105" x="614.4" y="56.90317" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g5-line2d_24">
    <defs>
     <path id="analisi1_lez30b_g5-m2d89b697b3" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g5-m2d89b697b3" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g5-line2d_25">
    <path d="M 44.8 354.154154 
L 49.550626 334.811644 
L 54.301251 316.428835 
L 59.051877 298.973446 
L 63.802502 282.413746 
L 68.553128 266.718559 
L 73.303753 251.857258 
L 77.579316 239.170195 
L 81.854879 227.112673 
L 86.130442 215.663514 
L 90.406005 204.801902 
L 94.681568 194.507384 
L 98.957131 184.759869 
L 103.232694 175.539628 
L 107.508257 166.827294 
L 111.78382 158.603863 
L 116.059383 150.850693 
L 120.334946 143.549506 
L 124.610509 136.682384 
L 128.886072 130.231772 
L 133.161635 124.180478 
L 137.437198 118.511673 
L 141.712761 113.208888 
L 145.988324 108.256019 
L 150.263887 103.637323 
L 154.53945 99.337419 
L 158.815013 95.341289 
L 163.090575 91.634278 
L 167.366138 88.202092 
L 171.641701 85.030801 
L 176.392327 81.796639 
L 181.142952 78.849739 
L 185.893578 76.172564 
L 190.644204 73.748132 
L 195.394829 71.56001 
L 200.620517 69.407081 
L 205.846205 67.500524 
L 211.071893 65.820786 
L 216.772644 64.225023 
L 222.473394 62.85366 
L 228.649208 61.595648 
L 235.300083 60.475969 
L 242.426022 59.512391 
L 250.027023 58.714618 
L 258.578148 58.052729 
L 268.079399 57.550381 
L 279.005838 57.19922 
L 292.782652 56.986188 
L 314.160467 56.905737 
L 365.942285 56.981986 
L 381.144287 57.222093 
L 392.545788 57.61247 
L 402.047039 58.147816 
L 410.598165 58.847921 
L 418.199166 59.687251 
L 425.325104 60.696903 
L 431.97598 61.8663 
L 438.151793 63.176691 
L 443.852544 64.602038 
L 449.553294 66.257487 
L 454.778982 67.997192 
L 460.004671 69.968968 
L 465.230359 72.19259 
L 469.980984 74.449912 
L 474.73161 76.948417 
L 479.482235 79.704701 
L 484.232861 82.735913 
L 488.508424 85.713686 
L 492.783987 88.941769 
L 497.05955 92.43381 
L 501.335113 96.203822 
L 505.610676 100.266178 
L 509.886239 104.635614 
L 514.161802 109.327229 
L 518.437364 114.356484 
L 522.712927 119.739202 
L 526.98849 125.491569 
L 531.264053 131.630133 
L 535.539616 138.171804 
L 539.815179 145.133855 
L 544.090742 152.533922 
L 548.366305 160.390001 
L 552.641868 168.720454 
L 556.917431 177.544001 
L 561.192994 186.879728 
L 565.468557 196.747081 
L 569.74412 207.165871 
L 574.019683 218.156268 
L 578.295246 229.738807 
L 582.570809 241.934385 
L 586.846372 254.764259 
L 591.121935 268.250052 
L 595.397498 282.413746 
L 599.673061 297.277689 
L 604.423686 314.64209 
L 609.174312 332.930713 
L 613.924937 352.175785 
L 614.4 354.154154 
L 614.4 354.154154 
" clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g5-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g5-patch_4">
    <path d="M 44.8 56.90317 
L 614.4 56.90317 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g5-text_12">
    <!-- Massimo -->
    <g style="fill: currentColor" transform="translate(335.6 50.90317) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g5-DejaVuSans-30" d="M 628 4666 
L 1569 4666 
L 2759 1491 
L 3956 4666 
L 4897 4666 
L 4897 0 
L 4281 0 
L 4281 4097 
L 3078 897 
L 2444 897 
L 1241 4097 
L 1241 0 
L 628 0 
L 628 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g5-DejaVuSans-44" d="M 2194 1759 
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
      <path id="analisi1_lez30b_g5-DejaVuSans-56" d="M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g5-DejaVuSans-4c" d="M 603 3500 
L 1178 3500 
L 1178 0 
L 603 0 
L 603 3500 
z
M 603 4863 
L 1178 4863 
L 1178 4134 
L 603 4134 
L 603 4863 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g5-DejaVuSans-50" d="M 3328 2828 
Q 3544 3216 3844 3400 
Q 4144 3584 4550 3584 
Q 5097 3584 5394 3201 
Q 5691 2819 5691 2113 
L 5691 0 
L 5113 0 
L 5113 2094 
Q 5113 2597 4934 2840 
Q 4756 3084 4391 3084 
Q 3944 3084 3684 2787 
Q 3425 2491 3425 1978 
L 3425 0 
L 2847 0 
L 2847 2094 
Q 2847 2600 2669 2842 
Q 2491 3084 2119 3084 
Q 1678 3084 1418 2786 
Q 1159 2488 1159 1978 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1356 3278 1631 3431 
Q 1906 3584 2284 3584 
Q 2666 3584 2933 3390 
Q 3200 3197 3328 2828 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g5-DejaVuSans-52" d="M 1959 3097 
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
     </defs>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-30"/>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-44" transform="translate(86.28125 0)"/>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-56" transform="translate(147.5625 0)"/>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-56" transform="translate(199.65625 0)"/>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-4c" transform="translate(251.75 0)"/>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-50" transform="translate(279.53125 0)"/>
     <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-52" transform="translate(376.9375 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g5-line2d_26">
    <defs>
     <path id="analisi1_lez30b_g5-mbbc0db82fe" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_g5-pd7f13b990f)">
     <use xlink:href="#analisi1_lez30b_g5-mbbc0db82fe" x="329.6" y="56.90317" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g5-legend_1">
    <g id="analisi1_lez30b_g5-line2d_27">
     <path d="M 554.733594 38.408281 
L 565.733594 38.408281 
L 576.733594 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g5-text_13">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(585.533594 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g5-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_g5-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30b_g5-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30b_g5-DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-b" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-5b" transform="translate(74.21875 0)"/>
      <use xlink:href="#analisi1_lez30b_g5-DejaVuSans-c" transform="translate(133.40625 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_g5-pd7f13b990f">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>
<p><strong>3. Punto di flesso:</strong> $f(x) = x^3$. Abbiamo $f'(x) = 3x^2$ e $f''(x) = 6x$. In $x=0$ si ha $f'(0) = 0$ e $f''(0) = 0$. Come già visto, $x=0$ è un punto di flesso a tangente orizzontale, non un estremo.</p>
<figure class="figura" data-id="analisi1_lez30b_g6"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_g6-figure_1">
  <g id="analisi1_lez30b_g6-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_g6-axes_1">
   <g id="analisi1_lez30b_g6-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_g6-matplotlib.axis_1">
    <g id="analisi1_lez30b_g6-xtick_1">
     <g id="analisi1_lez30b_g6-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_2">
      <defs>
       <path id="analisi1_lez30b_g6-md5029af387" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g6-md5029af387" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_1">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(39.316328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g6-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_g6-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-xtick_2">
     <g id="analisi1_lez30b_g6-line2d_3">
      <path d="M 187.2 364 
L 187.2 24 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-md5029af387" x="187.2" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_2">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(181.716328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g6-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-xtick_3">
     <g id="analisi1_lez30b_g6-line2d_5">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-md5029af387" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_3">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g6-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-xtick_4">
     <g id="analisi1_lez30b_g6-line2d_7">
      <path d="M 472 364 
L 472 24 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-md5029af387" x="472" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_4">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(468.500625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-xtick_5">
     <g id="analisi1_lez30b_g6-line2d_9">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-md5029af387" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_5">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(610.900625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-15"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g6-matplotlib.axis_2">
    <g id="analisi1_lez30b_g6-ytick_1">
     <g id="analisi1_lez30b_g6-line2d_11">
      <path d="M 44.8 310.218355 
L 614.4 310.218355 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_12">
      <defs>
       <path id="analisi1_lez30b_g6-m69619757bf" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_g6-m69619757bf" x="329.6" y="310.218355" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_6">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(312.132656 314.397066) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g6-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-ytick_2">
     <g id="analisi1_lez30b_g6-line2d_13">
      <path d="M 44.8 252.109177 
L 614.4 252.109177 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-m69619757bf" x="329.6" y="252.109177" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_7">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(312.132656 256.287888) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_g6-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-ytick_3">
     <g id="analisi1_lez30b_g6-line2d_15">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-m69619757bf" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_8">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-ytick_4">
     <g id="analisi1_lez30b_g6-line2d_17">
      <path d="M 44.8 135.890823 
L 614.4 135.890823 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-m69619757bf" x="329.6" y="135.890823" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_9">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(316.10125 140.069534) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_g6-ytick_5">
     <g id="analisi1_lez30b_g6-line2d_19">
      <path d="M 44.8 77.781645 
L 614.4 77.781645 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_g6-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_g6-m69619757bf" x="329.6" y="77.781645" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_g6-text_10">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(316.10125 81.960356) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_g6-line2d_21">
    <defs>
     <path id="analisi1_lez30b_g6-mc526a8d00d" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g6-mc526a8d00d" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g6-line2d_22">
    <defs>
     <path id="analisi1_lez30b_g6-m7a537743af" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_g6-m7a537743af" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g6-line2d_23">
    <path d="M 44.8 348.957806 
L 50.975813 339.094165 
L 57.151626 329.658236 
L 63.32744 320.640538 
L 69.503253 312.031593 
L 75.679066 303.821919 
L 81.854879 296.002035 
L 88.030692 288.562462 
L 94.206505 281.493718 
L 100.382319 274.786325 
L 106.558132 268.4308 
L 112.733945 262.417664 
L 118.909758 256.737437 
L 125.085571 251.380637 
L 131.261384 246.337785 
L 137.437198 241.5994 
L 143.613011 237.156001 
L 149.788824 232.998109 
L 155.964637 229.116243 
L 162.14045 225.500922 
L 168.316264 222.142666 
L 174.492077 219.031994 
L 180.66789 216.159427 
L 187.318766 213.321302 
L 193.969641 210.736484 
L 200.620517 208.393135 
L 207.271393 206.279413 
L 214.397331 204.256074 
L 221.523269 202.46818 
L 228.649208 200.90117 
L 236.250209 199.456744 
L 244.326272 198.159482 
L 252.402335 197.086072 
L 260.953461 196.169949 
L 269.97965 195.421599 
L 279.955963 194.82072 
L 290.882402 194.389331 
L 303.709091 194.116422 
L 320.33628 194.005333 
L 358.816347 193.83271 
L 371.643036 193.501488 
L 382.569475 193.003057 
L 392.545788 192.327009 
L 401.571977 191.499172 
L 410.123103 190.497687 
L 418.199166 189.33467 
L 425.800167 188.027984 
L 433.401168 186.4976 
L 440.527106 184.843984 
L 447.653044 182.96366 
L 454.778982 180.842064 
L 461.429858 178.63138 
L 468.080734 176.185995 
L 474.73161 173.494067 
L 480.907423 170.763313 
L 487.083236 167.800289 
L 493.259049 164.595515 
L 499.434862 161.13951 
L 505.610676 157.422793 
L 511.786489 153.435885 
L 517.962302 149.169305 
L 524.138115 144.613572 
L 530.313928 139.759206 
L 536.014679 135.004995 
L 541.71543 129.980793 
L 547.41618 124.679144 
L 553.116931 119.09259 
L 558.817681 113.213675 
L 564.518432 107.034943 
L 570.219183 100.548937 
L 575.919933 93.7482 
L 581.620684 86.625276 
L 587.796497 78.536547 
L 593.97231 70.051463 
L 600.148123 61.160546 
L 606.323937 51.854313 
L 612.49975 42.123285 
L 614.4 39.042194 
L 614.4 39.042194 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g6-line2d_24">
    <path d="M 227.072 194 
L 432.128 194 
" clip-path="url(#analisi1_lez30b_g6-pb883305e43)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.7; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g6-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g6-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_g6-text_11">
    <!-- Flesso -->
    <g style="fill: currentColor" transform="translate(335.6 188) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_g6-DejaVuSans-29" d="M 628 4666 
L 3309 4666 
L 3309 4134 
L 1259 4134 
L 1259 2759 
L 3109 2759 
L 3109 2228 
L 1259 2228 
L 1259 0 
L 628 0 
L 628 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g6-DejaVuSans-4f" d="M 603 4863 
L 1178 4863 
L 1178 0 
L 603 0 
L 603 4863 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g6-DejaVuSans-48" d="M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g6-DejaVuSans-56" d="M 2834 3397 
L 2834 2853 
Q 2591 2978 2328 3040 
Q 2066 3103 1784 3103 
Q 1356 3103 1142 2972 
Q 928 2841 928 2578 
Q 928 2378 1081 2264 
Q 1234 2150 1697 2047 
L 1894 2003 
Q 2506 1872 2764 1633 
Q 3022 1394 3022 966 
Q 3022 478 2636 193 
Q 2250 -91 1575 -91 
Q 1294 -91 989 -36 
Q 684 19 347 128 
L 347 722 
Q 666 556 975 473 
Q 1284 391 1588 391 
Q 1994 391 2212 530 
Q 2431 669 2431 922 
Q 2431 1156 2273 1281 
Q 2116 1406 1581 1522 
L 1381 1569 
Q 847 1681 609 1914 
Q 372 2147 372 2553 
Q 372 3047 722 3315 
Q 1072 3584 1716 3584 
Q 2034 3584 2315 3537 
Q 2597 3491 2834 3397 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_g6-DejaVuSans-52" d="M 1959 3097 
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
     </defs>
     <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-29"/>
     <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-4f" transform="translate(57.515625 0)"/>
     <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-48" transform="translate(85.296875 0)"/>
     <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-56" transform="translate(146.828125 0)"/>
     <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-56" transform="translate(198.921875 0)"/>
     <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-52" transform="translate(251.015625 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g6-line2d_25">
    <defs>
     <path id="analisi1_lez30b_g6-m1520778b4a" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_g6-pb883305e43)">
     <use xlink:href="#analisi1_lez30b_g6-m1520778b4a" x="329.6" y="194" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_g6-legend_1">
    <g id="analisi1_lez30b_g6-line2d_26">
     <path d="M 54.7 38.408281 
L 65.7 38.408281 
L 76.7 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_g6-text_12">
     <!-- f(x) -->
     <g style="fill: currentColor" transform="translate(85.5 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_g6-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_g6-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30b_g6-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30b_g6-DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-b" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-5b" transform="translate(74.21875 0)"/>
      <use xlink:href="#analisi1_lez30b_g6-DejaVuSans-c" transform="translate(133.40625 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_g6-pb883305e43">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
      },
      {
        id: "s30-anticipazione",
        type: "note_box",
        title: "Anticipazione per la prossima lezione",
        icon: "📅",
        content: `<p>Nelle prossime lezioni affronteremo lo studio completo di funzione e i limiti, in particolare le <strong>forme indeterminate</strong> che si possono risolvere con il Teorema di De L'Hôpital.</p>`
      },
      {
        id: "s30-studio-funzione-completo",
        type: "esercizio_svolto",
        title: "Esercizio svolto — Studio di $f(x) = |x| + 3\\log\\left(\\frac{|x|-1}{|x|-2}\\right)$",
        icon: "✎",
        source: "docente",
        content: `<p>Analizziamo la seguente funzione, studiandone le principali proprietà:</p>
<p>$$f(x) = |x| + 3 \\log\\left(\\frac{|x|-1}{|x|-2}\\right)$$</p>
<p>A causa della presenza del valore assoluto, possiamo scrivere la funzione distinguendo i casi:</p>
<p>$$f(x) = \\begin{cases} x + 3\\log\\left(\\dfrac{x-1}{x-2}\\right) & \\text{se } x \\ge 0 \\\\[2mm] -x + 3\\log\\left(\\dfrac{-x-1}{-x-2}\\right) & \\text{se } x \\lt 0 \\end{cases}$$</p>
<p>Lo schema di lavoro che seguiamo è quello standard dello studio di funzione, <strong>limitato agli strumenti di cui disponiamo finora</strong>: parità, dominio, segno, limiti agli estremi del dominio e asintoti. Lo studio della derivata (monotonia, massimi e minimi) verrà affrontato in seguito.</p>`,
        steps: [
          `<strong>1. Analisi della parità.</strong> La prima cosa da osservare è la simmetria della funzione: si tratta di una funzione <strong>pari</strong>.<br><em>Promemoria:</em> una funzione $f(x)$ si dice pari se $f(-x) = f(x)$ per ogni $x$ nel dominio; il suo grafico è simmetrico rispetto all'asse $y$. Perché la verifica abbia senso occorre anche che il dominio sia simmetrico rispetto all'origine, cosa che qui accade perché la variabile $x$ compare solo attraverso $|x|$.<br>Verifichiamolo:<br>$$f(-x) = |-x| + 3\\log\\left(\\frac{|-x|-1}{|-x|-2}\\right) = |x| + 3\\log\\left(\\frac{|x|-1}{|x|-2}\\right) = f(x)$$<br>Poiché la funzione è pari, possiamo limitare lo studio al caso $x \\ge 0$ e poi ottenere il grafico completo per simmetria. Concretamente: tutto ciò che troviamo per $x \\ge 0$ (dominio, segno, limiti, asintoti) si trasporta per $x \\le 0$ sostituendo $x$ con $-x$, con l'avvertenza che <strong>i limiti destri diventano limiti sinistri</strong> e viceversa.`,
          `<strong>2. Dominio di definizione.</strong> Dobbiamo imporre due condizioni:<br>(a) l'argomento del logaritmo deve essere strettamente positivo, $\\dfrac{|x|-1}{|x|-2} \\gt 0$;<br>(b) il denominatore della frazione non deve annullarsi, $|x| - 2 \\neq 0 \\Rightarrow |x| \\neq 2 \\Rightarrow x \\neq \\pm 2$.<br>In realtà la seconda condizione è automaticamente contenuta nella prima: se il denominatore si annullasse, la frazione non sarebbe definita e a maggior ragione non potrebbe essere positiva. La scriviamo comunque per chiarezza.`,
          `Grazie alla parità, studiamo la disequazione per $x \\ge 0$. In questo caso $|x| = x$ e la disequazione diventa<br>$$\\frac{x-1}{x-2} \\gt 0$$<br>Questa è una disequazione fratta elementare: il numeratore è positivo per $x \\gt 1$ e il denominatore per $x \\gt 2$. Studiando il segno della frazione si ottiene che la disequazione è soddisfatta per $x \\lt 1$ oppure $x \\gt 2$. Intersecando con l'ipotesi $x \\ge 0$:<br>$$D_{x \\ge 0} = [0,1) \\cup (2, +\\infty)$$<br>Si noti che $x=1$ è escluso perché in quel punto l'argomento del logaritmo vale $0$, mentre $x=2$ è escluso perché la frazione non è definita.<br><figure class="figura" data-id="analisi1_lez30c_g1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30c_g1-figure_1">
  <g id="analisi1_lez30c_g1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30c_g1-axes_1">
   <g id="analisi1_lez30c_g1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30c_g1-FillBetweenPolyCollection_1">
    <defs>
     <path id="analisi1_lez30c_g1-m3a49ec7b6b" d="M 44.8 -187.890544 
L 44.8 -199.963515 
L 45.754104 -199.943224 
L 46.708208 -199.922797 
L 47.662312 -199.902231 
L 48.616415 -199.881525 
L 49.570519 -199.860679 
L 50.524623 -199.839689 
L 51.478727 -199.818556 
L 52.432831 -199.797278 
L 53.386935 -199.775852 
L 54.341039 -199.754278 
L 55.295142 -199.732554 
L 56.249246 -199.710678 
L 57.20335 -199.688649 
L 58.157454 -199.666465 
L 59.111558 -199.644124 
L 60.065662 -199.621625 
L 61.019765 -199.598967 
L 61.973869 -199.576147 
L 62.927973 -199.553163 
L 63.882077 -199.530015 
L 64.836181 -199.5067 
L 65.790285 -199.483216 
L 66.744389 -199.459561 
L 67.698492 -199.435735 
L 68.652596 -199.411734 
L 69.6067 -199.387557 
L 70.560804 -199.363201 
L 71.514908 -199.338666 
L 72.469012 -199.313949 
L 73.423116 -199.289047 
L 74.377219 -199.26396 
L 75.331323 -199.238684 
L 76.285427 -199.213217 
L 77.239531 -199.187558 
L 78.193635 -199.161705 
L 79.147739 -199.135654 
L 80.101843 -199.109404 
L 81.055946 -199.082953 
L 82.01005 -199.056297 
L 82.964154 -199.029436 
L 83.918258 -199.002366 
L 84.872362 -198.975085 
L 85.826466 -198.94759 
L 86.78057 -198.919879 
L 87.734673 -198.891949 
L 88.688777 -198.863799 
L 89.642881 -198.835424 
L 90.596985 -198.806823 
L 91.551089 -198.777993 
L 92.505193 -198.74893 
L 93.459296 -198.719633 
L 94.4134 -198.690098 
L 95.367504 -198.660323 
L 96.321608 -198.630303 
L 97.275712 -198.600038 
L 98.229816 -198.569522 
L 99.18392 -198.538754 
L 100.138023 -198.50773 
L 101.092127 -198.476448 
L 102.046231 -198.444902 
L 103.000335 -198.413091 
L 103.954439 -198.381011 
L 104.908543 -198.348659 
L 105.862647 -198.316031 
L 106.81675 -198.283123 
L 107.770854 -198.249932 
L 108.724958 -198.216454 
L 109.679062 -198.182686 
L 110.633166 -198.148624 
L 111.58727 -198.114263 
L 112.541374 -198.079601 
L 113.495477 -198.044632 
L 114.449581 -198.009353 
L 115.403685 -197.97376 
L 116.357789 -197.937849 
L 117.311893 -197.901614 
L 118.265997 -197.865053 
L 119.220101 -197.82816 
L 120.174204 -197.79093 
L 121.128308 -197.75336 
L 122.082412 -197.715444 
L 123.036516 -197.677179 
L 123.99062 -197.638558 
L 124.944724 -197.599577 
L 125.898827 -197.56023 
L 126.852931 -197.520514 
L 127.807035 -197.480422 
L 128.761139 -197.439949 
L 129.715243 -197.399089 
L 130.669347 -197.357838 
L 131.623451 -197.316189 
L 132.577554 -197.274136 
L 133.531658 -197.231675 
L 134.485762 -197.188798 
L 135.439866 -197.1455 
L 136.39397 -197.101774 
L 137.348074 -197.057614 
L 138.302178 -197.013013 
L 139.256281 -196.967966 
L 140.210385 -196.922464 
L 141.164489 -196.876502 
L 142.118593 -196.830072 
L 143.072697 -196.783167 
L 144.026801 -196.73578 
L 144.980905 -196.687903 
L 145.935008 -196.639528 
L 146.889112 -196.590648 
L 147.843216 -196.541256 
L 148.79732 -196.491341 
L 149.751424 -196.440897 
L 150.705528 -196.389916 
L 151.659631 -196.338387 
L 152.613735 -196.286303 
L 153.567839 -196.233654 
L 154.521943 -196.180431 
L 155.476047 -196.126626 
L 156.430151 -196.072227 
L 157.384255 -196.017225 
L 158.338358 -195.961611 
L 159.292462 -195.905374 
L 160.246566 -195.848502 
L 161.20067 -195.790987 
L 162.154774 -195.732816 
L 163.108878 -195.673978 
L 164.062982 -195.614462 
L 165.017085 -195.554256 
L 165.971189 -195.493348 
L 166.925293 -195.431725 
L 167.879397 -195.369376 
L 168.833501 -195.306286 
L 169.787605 -195.242443 
L 170.741709 -195.177833 
L 171.695812 -195.112442 
L 172.649916 -195.046256 
L 173.60402 -194.979261 
L 174.558124 -194.911441 
L 175.512228 -194.842781 
L 176.466332 -194.773266 
L 177.420436 -194.702879 
L 178.374539 -194.631604 
L 179.328643 -194.559423 
L 180.282747 -194.486321 
L 181.236851 -194.412278 
L 182.190955 -194.337276 
L 183.145059 -194.261298 
L 184.099162 -194.184322 
L 185.053266 -194.106331 
L 186.00737 -194.027304 
L 186.961474 -193.947219 
L 187.915578 -193.866055 
L 188.869682 -193.783791 
L 189.823786 -193.700404 
L 190.777889 -193.615871 
L 191.731993 -193.530167 
L 192.686097 -193.44327 
L 193.640201 -193.355152 
L 194.594305 -193.265789 
L 195.548409 -193.175154 
L 196.502513 -193.08322 
L 197.456616 -192.989958 
L 198.41072 -192.895339 
L 199.364824 -192.799335 
L 200.318928 -192.701913 
L 201.273032 -192.603042 
L 202.227136 -192.50269 
L 203.18124 -192.400824 
L 204.135343 -192.297408 
L 205.089447 -192.192407 
L 206.043551 -192.085785 
L 206.997655 -191.977503 
L 207.951759 -191.867523 
L 208.905863 -191.755804 
L 209.859966 -191.642304 
L 210.81407 -191.526981 
L 211.768174 -191.409791 
L 212.722278 -191.290687 
L 213.676382 -191.169623 
L 214.630486 -191.046549 
L 215.58459 -190.921416 
L 216.538693 -190.79417 
L 217.492797 -190.664759 
L 218.446901 -190.533126 
L 219.401005 -190.399214 
L 220.355109 -190.262962 
L 221.309213 -190.12431 
L 222.263317 -189.983193 
L 223.21742 -189.839544 
L 224.171524 -189.693296 
L 225.125628 -189.544376 
L 226.079732 -189.392711 
L 227.033836 -189.238225 
L 227.98794 -189.080837 
L 228.942044 -188.920466 
L 229.896147 -188.757026 
L 230.850251 -188.590427 
L 231.804355 -188.420577 
L 232.758459 -188.247381 
L 233.712563 -188.070738 
L 234.666667 -187.890544 
L 234.666667 -187.890544 
L 234.666667 -187.890544 
L 233.712563 -187.890544 
L 232.758459 -187.890544 
L 231.804355 -187.890544 
L 230.850251 -187.890544 
L 229.896147 -187.890544 
L 228.942044 -187.890544 
L 227.98794 -187.890544 
L 227.033836 -187.890544 
L 226.079732 -187.890544 
L 225.125628 -187.890544 
L 224.171524 -187.890544 
L 223.21742 -187.890544 
L 222.263317 -187.890544 
L 221.309213 -187.890544 
L 220.355109 -187.890544 
L 219.401005 -187.890544 
L 218.446901 -187.890544 
L 217.492797 -187.890544 
L 216.538693 -187.890544 
L 215.58459 -187.890544 
L 214.630486 -187.890544 
L 213.676382 -187.890544 
L 212.722278 -187.890544 
L 211.768174 -187.890544 
L 210.81407 -187.890544 
L 209.859966 -187.890544 
L 208.905863 -187.890544 
L 207.951759 -187.890544 
L 206.997655 -187.890544 
L 206.043551 -187.890544 
L 205.089447 -187.890544 
L 204.135343 -187.890544 
L 203.18124 -187.890544 
L 202.227136 -187.890544 
L 201.273032 -187.890544 
L 200.318928 -187.890544 
L 199.364824 -187.890544 
L 198.41072 -187.890544 
L 197.456616 -187.890544 
L 196.502513 -187.890544 
L 195.548409 -187.890544 
L 194.594305 -187.890544 
L 193.640201 -187.890544 
L 192.686097 -187.890544 
L 191.731993 -187.890544 
L 190.777889 -187.890544 
L 189.823786 -187.890544 
L 188.869682 -187.890544 
L 187.915578 -187.890544 
L 186.961474 -187.890544 
L 186.00737 -187.890544 
L 185.053266 -187.890544 
L 184.099162 -187.890544 
L 183.145059 -187.890544 
L 182.190955 -187.890544 
L 181.236851 -187.890544 
L 180.282747 -187.890544 
L 179.328643 -187.890544 
L 178.374539 -187.890544 
L 177.420436 -187.890544 
L 176.466332 -187.890544 
L 175.512228 -187.890544 
L 174.558124 -187.890544 
L 173.60402 -187.890544 
L 172.649916 -187.890544 
L 171.695812 -187.890544 
L 170.741709 -187.890544 
L 169.787605 -187.890544 
L 168.833501 -187.890544 
L 167.879397 -187.890544 
L 166.925293 -187.890544 
L 165.971189 -187.890544 
L 165.017085 -187.890544 
L 164.062982 -187.890544 
L 163.108878 -187.890544 
L 162.154774 -187.890544 
L 161.20067 -187.890544 
L 160.246566 -187.890544 
L 159.292462 -187.890544 
L 158.338358 -187.890544 
L 157.384255 -187.890544 
L 156.430151 -187.890544 
L 155.476047 -187.890544 
L 154.521943 -187.890544 
L 153.567839 -187.890544 
L 152.613735 -187.890544 
L 151.659631 -187.890544 
L 150.705528 -187.890544 
L 149.751424 -187.890544 
L 148.79732 -187.890544 
L 147.843216 -187.890544 
L 146.889112 -187.890544 
L 145.935008 -187.890544 
L 144.980905 -187.890544 
L 144.026801 -187.890544 
L 143.072697 -187.890544 
L 142.118593 -187.890544 
L 141.164489 -187.890544 
L 140.210385 -187.890544 
L 139.256281 -187.890544 
L 138.302178 -187.890544 
L 137.348074 -187.890544 
L 136.39397 -187.890544 
L 135.439866 -187.890544 
L 134.485762 -187.890544 
L 133.531658 -187.890544 
L 132.577554 -187.890544 
L 131.623451 -187.890544 
L 130.669347 -187.890544 
L 129.715243 -187.890544 
L 128.761139 -187.890544 
L 127.807035 -187.890544 
L 126.852931 -187.890544 
L 125.898827 -187.890544 
L 124.944724 -187.890544 
L 123.99062 -187.890544 
L 123.036516 -187.890544 
L 122.082412 -187.890544 
L 121.128308 -187.890544 
L 120.174204 -187.890544 
L 119.220101 -187.890544 
L 118.265997 -187.890544 
L 117.311893 -187.890544 
L 116.357789 -187.890544 
L 115.403685 -187.890544 
L 114.449581 -187.890544 
L 113.495477 -187.890544 
L 112.541374 -187.890544 
L 111.58727 -187.890544 
L 110.633166 -187.890544 
L 109.679062 -187.890544 
L 108.724958 -187.890544 
L 107.770854 -187.890544 
L 106.81675 -187.890544 
L 105.862647 -187.890544 
L 104.908543 -187.890544 
L 103.954439 -187.890544 
L 103.000335 -187.890544 
L 102.046231 -187.890544 
L 101.092127 -187.890544 
L 100.138023 -187.890544 
L 99.18392 -187.890544 
L 98.229816 -187.890544 
L 97.275712 -187.890544 
L 96.321608 -187.890544 
L 95.367504 -187.890544 
L 94.4134 -187.890544 
L 93.459296 -187.890544 
L 92.505193 -187.890544 
L 91.551089 -187.890544 
L 90.596985 -187.890544 
L 89.642881 -187.890544 
L 88.688777 -187.890544 
L 87.734673 -187.890544 
L 86.78057 -187.890544 
L 85.826466 -187.890544 
L 84.872362 -187.890544 
L 83.918258 -187.890544 
L 82.964154 -187.890544 
L 82.01005 -187.890544 
L 81.055946 -187.890544 
L 80.101843 -187.890544 
L 79.147739 -187.890544 
L 78.193635 -187.890544 
L 77.239531 -187.890544 
L 76.285427 -187.890544 
L 75.331323 -187.890544 
L 74.377219 -187.890544 
L 73.423116 -187.890544 
L 72.469012 -187.890544 
L 71.514908 -187.890544 
L 70.560804 -187.890544 
L 69.6067 -187.890544 
L 68.652596 -187.890544 
L 67.698492 -187.890544 
L 66.744389 -187.890544 
L 65.790285 -187.890544 
L 64.836181 -187.890544 
L 63.882077 -187.890544 
L 62.927973 -187.890544 
L 61.973869 -187.890544 
L 61.019765 -187.890544 
L 60.065662 -187.890544 
L 59.111558 -187.890544 
L 58.157454 -187.890544 
L 57.20335 -187.890544 
L 56.249246 -187.890544 
L 55.295142 -187.890544 
L 54.341039 -187.890544 
L 53.386935 -187.890544 
L 52.432831 -187.890544 
L 51.478727 -187.890544 
L 50.524623 -187.890544 
L 49.570519 -187.890544 
L 48.616415 -187.890544 
L 47.662312 -187.890544 
L 46.708208 -187.890544 
L 45.754104 -187.890544 
L 44.8 -187.890544 
z
"/>
    </defs>
    <g clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)">
     <use xlink:href="#analisi1_lez30c_g1-m3a49ec7b6b" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-FillBetweenPolyCollection_2">
    <path d="M 331.031156 212.109456 
L 331.031156 -1007.260548 
L 332.462312 -406.630274 
L 333.893467 -206.420183 
L 335.324623 -106.315137 
L 336.755779 -46.25211 
L 338.186935 -6.210091 
L 339.61809 22.39135 
L 341.049246 43.842431 
L 342.480402 60.526606 
L 343.911558 73.873945 
L 345.342714 84.794496 
L 346.773869 93.894954 
L 348.205025 101.595342 
L 349.636181 108.195675 
L 351.067337 113.915963 
L 352.498492 118.921216 
L 353.929648 123.337615 
L 355.360804 127.263303 
L 356.79196 130.775761 
L 358.223116 133.936973 
L 359.654271 136.797117 
L 361.085427 139.397248 
L 362.516583 141.771281 
L 363.947739 143.947477 
L 365.378894 145.949578 
L 366.81005 147.797671 
L 368.241206 149.508869 
L 369.672362 151.097838 
L 371.103518 152.577222 
L 372.534673 153.957982 
L 373.965829 155.24966 
L 375.396985 156.460608 
L 376.828141 157.598165 
L 378.259296 158.668807 
L 379.690452 159.67827 
L 381.121608 160.631651 
L 382.552764 161.533499 
L 383.98392 162.38788 
L 385.415075 163.198447 
L 386.846231 163.968486 
L 388.277387 164.700962 
L 389.708543 165.398558 
L 391.139698 166.063708 
L 392.570854 166.698624 
L 394.00201 167.305321 
L 395.433166 167.88564 
L 396.864322 168.441265 
L 398.295477 168.973739 
L 399.726633 169.484479 
L 401.157789 169.974789 
L 402.588945 170.445872 
L 404.020101 170.898836 
L 405.451256 171.334707 
L 406.882412 171.754434 
L 408.313568 172.158899 
L 409.744724 172.548919 
L 411.175879 172.925254 
L 412.607035 173.288611 
L 414.038191 173.639652 
L 415.469347 173.978991 
L 416.900503 174.307204 
L 418.331658 174.62483 
L 419.762814 174.932372 
L 421.19397 175.230304 
L 422.625126 175.519068 
L 424.056281 175.799083 
L 425.487437 176.070738 
L 426.918593 176.334404 
L 428.349749 176.590427 
L 429.780905 176.839135 
L 431.21206 177.080837 
L 432.643216 177.315826 
L 434.074372 177.544376 
L 435.505528 177.766749 
L 436.936683 177.983193 
L 438.367839 178.19394 
L 439.798995 178.399214 
L 441.230151 178.599224 
L 442.661307 178.79417 
L 444.092462 178.984243 
L 445.523618 179.169623 
L 446.954774 179.350481 
L 448.38593 179.526981 
L 449.817085 179.699279 
L 451.248241 179.867523 
L 452.679397 180.031854 
L 454.110553 180.192407 
L 455.541709 180.349312 
L 456.972864 180.50269 
L 458.40402 180.652661 
L 459.835176 180.799335 
L 461.266332 180.94282 
L 462.697487 181.08322 
L 464.128643 181.220632 
L 465.559799 181.355152 
L 466.990955 181.486869 
L 468.422111 181.615871 
L 469.853266 181.742239 
L 471.284422 181.866055 
L 472.715578 181.987395 
L 474.146734 182.106331 
L 475.577889 182.222936 
L 477.009045 182.337276 
L 478.440201 182.449418 
L 479.871357 182.559423 
L 481.302513 182.667353 
L 482.733668 182.773266 
L 484.164824 182.877217 
L 485.59598 182.979261 
L 487.027136 183.07945 
L 488.458291 183.177833 
L 489.889447 183.274459 
L 491.320603 183.369376 
L 492.751759 183.462627 
L 494.182915 183.554256 
L 495.61407 183.644306 
L 497.045226 183.732816 
L 498.476382 183.819826 
L 499.907538 183.905374 
L 501.338693 183.989495 
L 502.769849 184.072227 
L 504.201005 184.153602 
L 505.632161 184.233654 
L 507.063317 184.312415 
L 508.494472 184.389916 
L 509.925628 184.466186 
L 511.356784 184.541256 
L 512.78794 184.615152 
L 514.219095 184.687903 
L 515.650251 184.759534 
L 517.081407 184.830072 
L 518.512563 184.899541 
L 519.943719 184.967966 
L 521.374874 185.035369 
L 522.80603 185.101774 
L 524.237186 185.167202 
L 525.668342 185.231675 
L 527.099497 185.295213 
L 528.530653 185.357838 
L 529.961809 185.419568 
L 531.392965 185.480422 
L 532.824121 185.540419 
L 534.255276 185.599577 
L 535.686432 185.657913 
L 537.117588 185.715444 
L 538.548744 185.772188 
L 539.979899 185.82816 
L 541.411055 185.883375 
L 542.842211 185.937849 
L 544.273367 185.991596 
L 545.704523 186.044632 
L 547.135678 186.09697 
L 548.566834 186.148624 
L 549.99799 186.199607 
L 551.429146 186.249932 
L 552.860302 186.299612 
L 554.291457 186.348659 
L 555.722613 186.397085 
L 557.153769 186.444902 
L 558.584925 186.492122 
L 560.01608 186.538754 
L 561.447236 186.584811 
L 562.878392 186.630303 
L 564.309548 186.675241 
L 565.740704 186.719633 
L 567.171859 186.763491 
L 568.603015 186.806823 
L 570.034171 186.84964 
L 571.465327 186.891949 
L 572.896482 186.933761 
L 574.327638 186.975085 
L 575.758794 187.015927 
L 577.18995 187.056297 
L 578.621106 187.096204 
L 580.052261 187.135654 
L 581.483417 187.174656 
L 582.914573 187.213217 
L 584.345729 187.251345 
L 585.776884 187.289047 
L 587.20804 187.32633 
L 588.639196 187.363201 
L 590.070352 187.399667 
L 591.501508 187.435735 
L 592.932663 187.47141 
L 594.363819 187.5067 
L 595.794975 187.54161 
L 597.226131 187.576147 
L 598.657286 187.610316 
L 600.088442 187.644124 
L 601.519598 187.677576 
L 602.950754 187.710678 
L 604.38191 187.743435 
L 605.813065 187.775852 
L 607.244221 187.807935 
L 608.675377 187.839689 
L 610.106533 187.87112 
L 611.537688 187.902231 
L 612.968844 187.933028 
L 614.4 187.963515 
L 614.4 212.109456 
L 614.4 212.109456 
L 612.968844 212.109456 
L 611.537688 212.109456 
L 610.106533 212.109456 
L 608.675377 212.109456 
L 607.244221 212.109456 
L 605.813065 212.109456 
L 604.38191 212.109456 
L 602.950754 212.109456 
L 601.519598 212.109456 
L 600.088442 212.109456 
L 598.657286 212.109456 
L 597.226131 212.109456 
L 595.794975 212.109456 
L 594.363819 212.109456 
L 592.932663 212.109456 
L 591.501508 212.109456 
L 590.070352 212.109456 
L 588.639196 212.109456 
L 587.20804 212.109456 
L 585.776884 212.109456 
L 584.345729 212.109456 
L 582.914573 212.109456 
L 581.483417 212.109456 
L 580.052261 212.109456 
L 578.621106 212.109456 
L 577.18995 212.109456 
L 575.758794 212.109456 
L 574.327638 212.109456 
L 572.896482 212.109456 
L 571.465327 212.109456 
L 570.034171 212.109456 
L 568.603015 212.109456 
L 567.171859 212.109456 
L 565.740704 212.109456 
L 564.309548 212.109456 
L 562.878392 212.109456 
L 561.447236 212.109456 
L 560.01608 212.109456 
L 558.584925 212.109456 
L 557.153769 212.109456 
L 555.722613 212.109456 
L 554.291457 212.109456 
L 552.860302 212.109456 
L 551.429146 212.109456 
L 549.99799 212.109456 
L 548.566834 212.109456 
L 547.135678 212.109456 
L 545.704523 212.109456 
L 544.273367 212.109456 
L 542.842211 212.109456 
L 541.411055 212.109456 
L 539.979899 212.109456 
L 538.548744 212.109456 
L 537.117588 212.109456 
L 535.686432 212.109456 
L 534.255276 212.109456 
L 532.824121 212.109456 
L 531.392965 212.109456 
L 529.961809 212.109456 
L 528.530653 212.109456 
L 527.099497 212.109456 
L 525.668342 212.109456 
L 524.237186 212.109456 
L 522.80603 212.109456 
L 521.374874 212.109456 
L 519.943719 212.109456 
L 518.512563 212.109456 
L 517.081407 212.109456 
L 515.650251 212.109456 
L 514.219095 212.109456 
L 512.78794 212.109456 
L 511.356784 212.109456 
L 509.925628 212.109456 
L 508.494472 212.109456 
L 507.063317 212.109456 
L 505.632161 212.109456 
L 504.201005 212.109456 
L 502.769849 212.109456 
L 501.338693 212.109456 
L 499.907538 212.109456 
L 498.476382 212.109456 
L 497.045226 212.109456 
L 495.61407 212.109456 
L 494.182915 212.109456 
L 492.751759 212.109456 
L 491.320603 212.109456 
L 489.889447 212.109456 
L 488.458291 212.109456 
L 487.027136 212.109456 
L 485.59598 212.109456 
L 484.164824 212.109456 
L 482.733668 212.109456 
L 481.302513 212.109456 
L 479.871357 212.109456 
L 478.440201 212.109456 
L 477.009045 212.109456 
L 475.577889 212.109456 
L 474.146734 212.109456 
L 472.715578 212.109456 
L 471.284422 212.109456 
L 469.853266 212.109456 
L 468.422111 212.109456 
L 466.990955 212.109456 
L 465.559799 212.109456 
L 464.128643 212.109456 
L 462.697487 212.109456 
L 461.266332 212.109456 
L 459.835176 212.109456 
L 458.40402 212.109456 
L 456.972864 212.109456 
L 455.541709 212.109456 
L 454.110553 212.109456 
L 452.679397 212.109456 
L 451.248241 212.109456 
L 449.817085 212.109456 
L 448.38593 212.109456 
L 446.954774 212.109456 
L 445.523618 212.109456 
L 444.092462 212.109456 
L 442.661307 212.109456 
L 441.230151 212.109456 
L 439.798995 212.109456 
L 438.367839 212.109456 
L 436.936683 212.109456 
L 435.505528 212.109456 
L 434.074372 212.109456 
L 432.643216 212.109456 
L 431.21206 212.109456 
L 429.780905 212.109456 
L 428.349749 212.109456 
L 426.918593 212.109456 
L 425.487437 212.109456 
L 424.056281 212.109456 
L 422.625126 212.109456 
L 421.19397 212.109456 
L 419.762814 212.109456 
L 418.331658 212.109456 
L 416.900503 212.109456 
L 415.469347 212.109456 
L 414.038191 212.109456 
L 412.607035 212.109456 
L 411.175879 212.109456 
L 409.744724 212.109456 
L 408.313568 212.109456 
L 406.882412 212.109456 
L 405.451256 212.109456 
L 404.020101 212.109456 
L 402.588945 212.109456 
L 401.157789 212.109456 
L 399.726633 212.109456 
L 398.295477 212.109456 
L 396.864322 212.109456 
L 395.433166 212.109456 
L 394.00201 212.109456 
L 392.570854 212.109456 
L 391.139698 212.109456 
L 389.708543 212.109456 
L 388.277387 212.109456 
L 386.846231 212.109456 
L 385.415075 212.109456 
L 383.98392 212.109456 
L 382.552764 212.109456 
L 381.121608 212.109456 
L 379.690452 212.109456 
L 378.259296 212.109456 
L 376.828141 212.109456 
L 375.396985 212.109456 
L 373.965829 212.109456 
L 372.534673 212.109456 
L 371.103518 212.109456 
L 369.672362 212.109456 
L 368.241206 212.109456 
L 366.81005 212.109456 
L 365.378894 212.109456 
L 363.947739 212.109456 
L 362.516583 212.109456 
L 361.085427 212.109456 
L 359.654271 212.109456 
L 358.223116 212.109456 
L 356.79196 212.109456 
L 355.360804 212.109456 
L 353.929648 212.109456 
L 352.498492 212.109456 
L 351.067337 212.109456 
L 349.636181 212.109456 
L 348.205025 212.109456 
L 346.773869 212.109456 
L 345.342714 212.109456 
L 343.911558 212.109456 
L 342.480402 212.109456 
L 341.049246 212.109456 
L 339.61809 212.109456 
L 338.186935 212.109456 
L 336.755779 212.109456 
L 335.324623 212.109456 
L 333.893467 212.109456 
L 332.462312 212.109456 
L 331.031156 212.109456 
z
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: #7c4dff; fill-opacity: 0.15"/>
   </g>
   <g id="analisi1_lez30c_g1-matplotlib.axis_1">
    <g id="analisi1_lez30c_g1-xtick_1">
     <g id="analisi1_lez30c_g1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_2">
      <defs>
       <path id="analisi1_lez30c_g1-ma19c4cb3a9" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="44.8" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_1">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(39.316328 226.966877) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30c_g1-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-xtick_2">
     <g id="analisi1_lez30c_g1-line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="139.733333" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_2">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(136.233958 226.966877) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-xtick_3">
     <g id="analisi1_lez30c_g1-line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="234.666667" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_3">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(231.167292 226.966877) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-xtick_4">
     <g id="analisi1_lez30c_g1-line2d_7">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="329.6" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_4">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(326.100625 226.966877) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-xtick_5">
     <g id="analisi1_lez30c_g1-line2d_9">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="424.533333" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_5">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(421.033958 226.966877) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-xtick_6">
     <g id="analisi1_lez30c_g1-line2d_11">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="519.466667" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_6">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(515.967292 226.966877) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-17" d="M 2419 4116 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-xtick_7">
     <g id="analisi1_lez30c_g1-line2d_13">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-ma19c4cb3a9" x="614.4" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_7">
      <!-- 5 -->
      <g style="fill: currentColor" transform="translate(610.900625 226.966877) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-18" d="M 691 4666 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-18"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-matplotlib.axis_2">
    <g id="analisi1_lez30c_g1-ytick_1">
     <g id="analisi1_lez30c_g1-line2d_15">
      <path d="M 44.8 320.766189 
L 614.4 320.766189 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_16">
      <defs>
       <path id="analisi1_lez30c_g1-me25506642d" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="320.766189" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_8">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(122.26599 324.944899) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-ytick_2">
     <g id="analisi1_lez30c_g1-line2d_17">
      <path d="M 44.8 266.437822 
L 614.4 266.437822 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="266.437822" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_9">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(122.26599 270.616533) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-ytick_3">
     <g id="analisi1_lez30c_g1-line2d_19">
      <path d="M 44.8 212.109456 
L 614.4 212.109456 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_10">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(126.234583 216.288166) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-ytick_4">
     <g id="analisi1_lez30c_g1-line2d_21">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_11">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(126.234583 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-ytick_5">
     <g id="analisi1_lez30c_g1-line2d_23">
      <path d="M 44.8 157.781089 
L 614.4 157.781089 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="157.781089" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_12">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(126.234583 161.9598) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-ytick_6">
     <g id="analisi1_lez30c_g1-line2d_25">
      <path d="M 44.8 103.452722 
L 614.4 103.452722 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="103.452722" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_13">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(126.234583 107.631433) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-19"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g1-ytick_7">
     <g id="analisi1_lez30c_g1-line2d_27">
      <path d="M 44.8 49.124356 
L 614.4 49.124356 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g1-line2d_28">
      <g>
       <use xlink:href="#analisi1_lez30c_g1-me25506642d" x="139.733333" y="49.124356" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g1-text_14">
      <!-- 9 -->
      <g style="fill: currentColor" transform="translate(126.234583 53.303067) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g1-DejaVuSans-1c" d="M 703 97 
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
       <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-1c"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-line2d_29">
    <defs>
     <path id="analisi1_lez30c_g1-mfc0923fc2a" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30c_g1-mfc0923fc2a" x="614.4" y="212.109456" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-line2d_30">
    <defs>
     <path id="analisi1_lez30c_g1-m3063e56ba7" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30c_g1-m3063e56ba7" x="139.733333" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-line2d_31">
    <path d="M 44.8 200.036485 
L 80.904754 200.912842 
L 110.358632 201.841545 
L 135.061885 202.837296 
L 155.489575 203.874141 
L 173.066889 204.982922 
L 187.793828 206.123527 
L 200.620517 207.329182 
L 212.022018 208.621709 
L 221.998332 209.977364 
L 230.549458 211.356704 
L 238.150459 212.79934 
L 244.801334 214.273798 
L 250.977148 215.866301 
L 256.677898 217.575719 
L 261.428524 219.218626 
L 265.704087 220.906118 
L 269.97965 222.83564 
L 273.78015 224.798918 
L 277.105588 226.749981 
L 280.431026 228.964955 
L 283.281401 231.116645 
L 286.131776 233.550523 
L 288.507089 235.83668 
L 290.882402 238.403348 
L 293.257715 241.305528 
L 295.633028 244.613606 
L 297.533278 247.612931 
L 299.433528 250.990124 
L 301.333778 254.821393 
L 303.234028 259.204916 
L 305.134279 264.269376 
L 306.559466 268.615935 
L 307.984654 273.535667 
L 309.409842 279.14995 
L 310.835029 285.617034 
L 312.260217 293.147202 
L 313.685405 302.026055 
L 315.110592 312.651569 
L 316.53578 325.595377 
L 317.485905 335.916583 
L 318.43603 347.99459 
L 319.386155 362.319668 
L 320.33628 379.583223 
L 321.294262 401 
L 321.294262 401 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g1-line2d_32">
    <path d="M 338.41777 -1 
L 339.338782 17.469617 
L 340.288907 33.161206 
L 341.239033 46.290904 
L 342.66422 62.404623 
L 344.089408 75.348431 
L 345.514595 85.973945 
L 346.939783 94.852798 
L 348.364971 102.382966 
L 349.790158 108.85005 
L 351.215346 114.464333 
L 353.115596 120.891457 
L 355.015847 126.357517 
L 356.916097 131.063081 
L 358.816347 135.156539 
L 360.716597 138.750033 
L 362.616847 141.929887 
L 364.99216 145.424525 
L 367.367473 148.479587 
L 369.742786 151.173102 
L 372.118098 153.565666 
L 374.968474 156.106043 
L 377.818849 158.34608 
L 381.144287 160.646333 
L 384.469725 162.667767 
L 388.270225 164.697386 
L 392.070726 166.480054 
L 396.346289 168.242898 
L 401.096914 169.954333 
L 406.322602 171.592119 
L 412.023353 173.141943 
L 418.199166 174.595856 
L 425.325104 176.040333 
L 433.401168 177.437653 
L 442.427356 178.762641 
L 452.40367 180.000492 
L 463.805171 181.189831 
L 477.106922 182.345015 
L 492.308924 183.433948 
L 509.886239 184.464103 
L 530.313928 185.43462 
L 554.542118 186.357185 
L 583.520934 187.229424 
L 614.4 187.963515 
L 614.4 187.963515 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g1-line2d_33">
    <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g1-line2d_34">
    <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g1-patch_3">
    <path d="M 139.733333 364 
L 139.733333 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g1-patch_4">
    <path d="M 44.8 212.109456 
L 614.4 212.109456 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g1-text_15">
    <!-- Zero -->
    <g style="fill: currentColor" transform="translate(240.666667 206.109456) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30c_g1-DejaVuSans-3d" d="M 359 4666 
L 4025 4666 
L 4025 4184 
L 1075 531 
L 4097 531 
L 4097 0 
L 288 0 
L 288 481 
L 3238 4134 
L 359 4134 
L 359 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30c_g1-DejaVuSans-48" d="M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30c_g1-DejaVuSans-55" d="M 2631 2963 
Q 2534 3019 2420 3045 
Q 2306 3072 2169 3072 
Q 1681 3072 1420 2755 
Q 1159 2438 1159 1844 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1341 3275 1631 3429 
Q 1922 3584 2338 3584 
Q 2397 3584 2469 3576 
Q 2541 3569 2628 3553 
L 2631 2963 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30c_g1-DejaVuSans-52" d="M 1959 3097 
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
     </defs>
     <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-3d"/>
     <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-48" transform="translate(68.5 0)"/>
     <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-55" transform="translate(130.03125 0)"/>
     <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-52" transform="translate(168.9375 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-line2d_35">
    <defs>
     <path id="analisi1_lez30c_g1-mf74cc147c7" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30c_g1-pe434f78e9e)">
     <use xlink:href="#analisi1_lez30c_g1-mf74cc147c7" x="234.666667" y="212.109456" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g1-legend_1">
    <g id="analisi1_lez30c_g1-line2d_36">
     <path d="M 478.77 38.41 
L 489.77 38.41 
L 500.77 38.41 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30c_g1-text_16">
     <g style="fill: currentColor" transform="translate(509.57 42.26) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30c_g1-DejaVuSans-Oblique-5c" d="M 1588 -325 
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
       <path id="analisi1_lez30c_g1-DejaVuSans-20" d="M 678 2906 
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
       <path id="analisi1_lez30c_g1-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30c_g1-DejaVuSans-Oblique-5b" d="M 3841 3500 
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
       <path id="analisi1_lez30c_g1-DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30c_g1-DejaVuSans-c" d="M 513 4856 
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
       <path id="analisi1_lez30c_g1-DejaVuSans-12" d="M 1625 4666 
L 2156 4666 
L 531 -594 
L 0 -594 
L 1625 4666 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-Oblique-5c" transform="translate(0 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-20" transform="translate(78.662109 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-b" transform="translate(181.933594 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-Oblique-5b" transform="translate(220.947266 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-c9c" transform="translate(299.609375 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-14" transform="translate(402.880859 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-c" transform="translate(466.503906 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-12" transform="translate(505.517578 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-b" transform="translate(539.208984 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-Oblique-5b" transform="translate(578.222656 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-c9c" transform="translate(656.884766 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-15" transform="translate(760.15625 0.125)"/>
      <use xlink:href="#analisi1_lez30c_g1-DejaVuSans-c" transform="translate(823.779297 0.125)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30c_g1-pe434f78e9e">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`,
          `Sfruttando la simmetria, il dominio per $x \\lt 0$ sarà l'immagine speculare: $(-\\infty,-2) \\cup (-1,0)$. Unendo i due risultati otteniamo il <strong>dominio completo</strong>:<br>$$D = (-\\infty,-2) \\cup (-1,1) \\cup (2,+\\infty)$$`,
          `<strong>3. Segno della funzione e intersezioni con gli assi.</strong> L'intersezione con l'asse $y$ si ottiene immediatamente calcolando $f$ in $0$, che appartiene al dominio:<br>$$f(0) = 0 + 3\\log\\left(\\frac{0-1}{0-2}\\right) = 3\\log\\frac{1}{2} = -3\\log 2 \\approx -2{,}08$$<br>Per le intersezioni con l'asse $x$ dovremmo risolvere $f(x)=0$, che è un'equazione trascendente non risolubile in forma elementare. Possiamo tuttavia determinare il <strong>segno</strong> di $f$ e concludere che tali intersezioni non esistono. Lavoriamo come sempre per $x \\ge 0$.`,
          `<em>Caso $x \\gt 2$:</em> si ha $\\dfrac{x-1}{x-2} = 1 + \\dfrac{1}{x-2} \\gt 1$, dunque $3\\log\\dfrac{x-1}{x-2} \\gt 0$. Poiché inoltre $x \\gt 2 \\gt 0$:<br>$$f(x) = x + 3\\log\\frac{x-1}{x-2} \\gt 2 \\gt 0 \\qquad \\text{per ogni } x \\gt 2$$`,
          `<em>Caso $0 \\le x \\lt 1$:</em> la funzione $x \\mapsto \\dfrac{x-1}{x-2}$ è decrescente (numeratore e denominatore differiscono di una costante: $\\frac{x-1}{x-2} = 1 + \\frac{1}{x-2}$, e $\\frac{1}{x-2}$ è decrescente dove $x \\lt 2$), quindi il suo valore massimo su $[0,1)$ si ha in $x=0$ e vale $\\frac12$. Pertanto<br>$$3\\log\\frac{x-1}{x-2} \\le 3\\log\\frac{1}{2} = -3\\log 2$$<br>e dunque<br>$$f(x) = x + 3\\log\\frac{x-1}{x-2} \\lt 1 - 3\\log 2 \\approx -1{,}08 \\lt 0$$`,
          `Per parità lo stesso vale a sinistra: $f \\lt 0$ su $(-1,0]$ e $f \\gt 0$ su $(-\\infty,-2)$. In conclusione<br>$$f(x) \\gt 0 \\ \\text{ su } (-\\infty,-2)\\cup(2,+\\infty), \\qquad f(x) \\lt 0 \\ \\text{ su } (-1,1),$$<br>e <strong>il grafico non incontra mai l'asse $x$</strong>.`,
          `<strong>4. Asintoti verticali.</strong> I candidati sono i punti di frontiera del dominio che non appartengono al dominio stesso: $\\pm 1$ e $\\pm 2$. Agli estremi illimitati $\\pm\\infty$ cercheremo invece asintoti orizzontali od obliqui. Studiamo i limiti per $x \\ge 0$ e useremo la simmetria per gli altri: in entrambi i casi il termine $x$ tende a un numero finito, mentre il termine logaritmico diverge — è quest'ultimo a determinare il comportamento.`,
          `<em>Limite per $x \\to 2^+$.</em> Si ha $x-1 \\to 1$ e $x-2 \\to 0^+$, dunque<br>$$\\lim_{x \\to 2^+} \\frac{x-1}{x-2} = \\frac{1}{0^+} = +\\infty$$<br>e quindi, per il teorema sul limite della funzione composta con $\\log$,<br>$$\\lim_{x \\to 2^+} 3\\log\\left(\\frac{x-1}{x-2}\\right) = +\\infty$$<br>Poiché $\\lim_{x \\to 2^+} x = 2$ è finito, per il teorema sulla somma dei limiti (somma di un limite finito e di un limite $+\\infty$):<br>$$\\lim_{x \\to 2^+}\\left(x + 3\\log\\left(\\frac{x-1}{x-2}\\right)\\right) = 2 + (+\\infty) = +\\infty$$<br>La retta $x=2$ è dunque un <strong>asintoto verticale da destra</strong>.`,
          `<em>Osservazione sulla scrittura.</em> Si noti la differenza di statuto tra i due addendi: la scrittura $2 + (+\\infty)$ non è un'operazione aritmetica su un "numero" $+\\infty$, ma l'abbreviazione del teorema algebrico dei limiti "limite finito $+$ limite $+\\infty$ dà $+\\infty$". Per questo motivo <strong>è scorretto scrivere cose come $2 + 3\\log(+\\infty)$</strong>: il simbolo $+\\infty$ non può essere inserito dentro una funzione come se fosse un valore della variabile. Il modo corretto è mantenere il simbolo di limite fino all'ultimo passaggio, come fatto sopra.`,
          `<em>Limite per $x \\to 1^-$.</em> Si ha $x-1 \\to 0^-$ e $x-2 \\to -1$, dunque<br>$$\\lim_{x \\to 1^-} \\frac{x-1}{x-2} = \\frac{0^-}{-1} = 0^+$$<br>(il quoziente di due quantità negative è positivo, e ciò garantisce che l'argomento del logaritmo resti nel suo dominio). Allora<br>$$\\lim_{x \\to 1^-} 3\\log\\left(\\frac{x-1}{x-2}\\right) = -\\infty$$<br>e poiché $\\lim_{x \\to 1^-} x = 1$ è finito,<br>$$\\lim_{x \\to 1^-}\\left(x + 3\\log\\left(\\frac{x-1}{x-2}\\right)\\right) = 1 + (-\\infty) = -\\infty$$<br>La retta $x=1$ è dunque un <strong>asintoto verticale da sinistra</strong>.`,
          `Per simmetria avremo: $x=-2$ asintoto verticale da sinistra, con $\\lim_{x \\to -2^-} f(x) = +\\infty$; $x=-1$ asintoto verticale da destra, con $\\lim_{x \\to -1^+} f(x) = -\\infty$.<br>Si osservi che i limiti "dall'altro lato" (per esempio $x \\to 2^-$) <strong>non hanno senso</strong>, perché un intorno sinistro di $2$ non è contenuto nel dominio: i punti $\\pm 1$ e $\\pm 2$ sono raggiungibili da un solo lato.`,
          `<strong>5. Asintoti obliqui — definizione.</strong> La retta $y = mx + q$ è asintoto obliquo per $f$ per $x \\to +\\infty$ se<br>$$\\lim_{x \\to +\\infty}\\big(f(x) - (mx+q)\\big) = 0$$<br>In pratica si calcolano, nell'ordine,<br>$$m = \\lim_{x \\to +\\infty} \\frac{f(x)}{x}, \\qquad q = \\lim_{x \\to +\\infty}\\big(f(x) - mx\\big),$$<br>e la retta esiste se entrambi i limiti sono finiti (con $m \\neq 0$, altrimenti si parla di asintoto orizzontale).`,
          `<em>Passo 1: calcolo di $m$.</em> Per $x \\to +\\infty$ la funzione coincide con $x + 3\\log\\frac{x-1}{x-2}$, dunque<br>$$\\frac{f(x)}{x} = \\frac{x + 3\\log\\frac{x-1}{x-2}}{x} = 1 + \\frac{3}{x}\\log\\frac{x-1}{x-2}$$<br>Poiché<br>$$\\lim_{x\\to+\\infty}\\frac{x-1}{x-2} = \\lim_{x\\to+\\infty}\\frac{1-\\frac1x}{1-\\frac2x} = 1 \\quad \\Longrightarrow \\quad \\lim_{x\\to+\\infty}\\log\\frac{x-1}{x-2} = \\log 1 = 0,$$<br>il secondo addendo è il prodotto di una quantità infinitesima ($3/x \\to 0$) per una quantità infinitesima, dunque tende a $0$. Quindi $m = 1$.`,
          `<em>Passo 2: calcolo di $q$.</em><br>$$q = \\lim_{x\\to+\\infty}\\big(f(x) - 1\\cdot x\\big) = \\lim_{x\\to+\\infty} 3\\log\\frac{x-1}{x-2} = 3\\log 1 = 0$$<br>Entrambi i limiti sono finiti e $m = 1 \\neq 0$: la retta $y = x$ è <strong>asintoto obliquo per $x \\to +\\infty$</strong>.`,
          `<em>Passo 3: da quale parte?</em> È utile sapere se il grafico si avvicina all'asintoto da sopra o da sotto. Per $x \\gt 2$ abbiamo già osservato che<br>$$f(x) - x = 3\\log\\left(1 + \\frac{1}{x-2}\\right) \\gt 0,$$<br>quindi il grafico sta <em>sopra</em> la retta $y=x$ e le si avvicina dall'alto. Usando il limite notevole $\\log(1+t) \\sim t$ per $t \\to 0$ si ottiene anche la stima quantitativa<br>$$f(x) - x = 3\\log\\left(1+\\frac{1}{x-2}\\right) \\sim \\frac{3}{x-2} \\qquad (x \\to +\\infty),$$<br>che dice con quale velocità avviene l'avvicinamento.`,
          `<em>Verifica numerica.</em> Confrontiamo $f(x)$ con $x$:<br>$$f(10) = 10 + 3\\log\\frac{9}{8} \\approx 10 + 0{,}353 = 10{,}353,$$<br>$$f(100) = 100 + 3\\log\\frac{99}{98} \\approx 100 + 0{,}0305 = 100{,}031$$<br>Lo scarto $f(x)-x$ passa da circa $0{,}35$ a circa $0{,}03$, in accordo con la stima $f(x)-x \\approx \\frac{3}{x-2}$ (che dà $0{,}375$ e $0{,}031$). Lo scarto è sempre positivo, come previsto: il grafico resta sopra l'asintoto.`,
          `<em>Esercizio lasciato al lettore.</em> Si lascia per esercizio la verifica, del tutto analoga, del caso a sinistra: la retta $y=-x$ è asintoto obliquo per $x \\to -\\infty$.<br><em>Hint:</em> non serve rifare i conti. Per parità $f(-x) = f(x)$, quindi se $f(x) - x \\to 0$ per $x \\to +\\infty$, sostituendo $x$ con $-x$ si ottiene $f(x) - (-x) \\to 0$ per $x \\to -\\infty$. In alternativa si ripetono i due limiti della definizione usando l'espressione $f(x) = -x + 3\\log\\frac{-x-1}{-x-2}$ valida per $x \\lt 0$.`,
          `<strong>6. Grafico qualitativo.</strong> Mettendo insieme dominio, segno e asintoti:<br>• per $x \\gt 2$ la funzione parte da $+\\infty$ vicino a $x=2$, resta positiva e si avvicina dall'alto alla retta $y=x$ per $x \\to +\\infty$;<br>• nell'intervallo $(-1,1)$ la funzione è definita e sempre negativa, e tende a $-\\infty$ sia per $x \\to 1^-$ che per $x \\to -1^+$; in $x=0$ vale $f(0) = 3\\log(1/2) = -3\\log 2 \\approx -2{,}08$. Ci aspettiamo quindi un andamento a "campana rovesciata" o simile, con un massimo in $x=0$ suggerito dalla simmetria;<br>• per $x \\lt -2$, per simmetria, la funzione parte da $+\\infty$ vicino a $x=-2$ e si avvicina alla retta $y=-x$ per $x \\to -\\infty$.<br><figure class="figura" data-id="analisi1_lez30c_g2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30c_g2-figure_1">
  <g id="analisi1_lez30c_g2-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30c_g2-axes_1">
   <g id="analisi1_lez30c_g2-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30c_g2-matplotlib.axis_1">
    <g id="analisi1_lez30c_g2-xtick_1">
     <g id="analisi1_lez30c_g2-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_2">
      <defs>
       <path id="analisi1_lez30c_g2-mf141eb19b9" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_1">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(39.316328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30c_g2-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_2">
     <g id="analisi1_lez30c_g2-line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="139.733333" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_2">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(134.249661 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-17" d="M 2419 4116 
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
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-17" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_3">
     <g id="analisi1_lez30c_g2-line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="234.666667" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_3">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(229.182995 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_4">
     <g id="analisi1_lez30c_g2-line2d_7">
      <path d="M 282.133333 364 
L 282.133333 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="282.133333" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_4">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(276.649661 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_5">
     <g id="analisi1_lez30c_g2-line2d_9">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_5">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_6">
     <g id="analisi1_lez30c_g2-line2d_11">
      <path d="M 377.066667 364 
L 377.066667 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="377.066667" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_6">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(373.567292 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_7">
     <g id="analisi1_lez30c_g2-line2d_13">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="424.533333" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_7">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(421.033958 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_8">
     <g id="analisi1_lez30c_g2-line2d_15">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="519.466667" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_8">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(515.967292 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-xtick_9">
     <g id="analisi1_lez30c_g2-line2d_17">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-mf141eb19b9" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_9">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(610.900625 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30c_g2-matplotlib.axis_2">
    <g id="analisi1_lez30c_g2-ytick_1">
     <g id="analisi1_lez30c_g2-line2d_19">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_20">
      <defs>
       <path id="analisi1_lez30c_g2-m043100e587" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_10">
      <!-- -12 -->
      <g style="fill: currentColor" transform="translate(305.133906 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-14" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-15" transform="translate(99.703125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_2">
     <g id="analisi1_lez30c_g2-line2d_21">
      <path d="M 44.8 307.333333 
L 614.4 307.333333 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_11">
      <!-- -8 -->
      <g style="fill: currentColor" transform="translate(312.132656 311.512044) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-1b" d="M 2034 2216 
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
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-1b" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_3">
     <g id="analisi1_lez30c_g2-line2d_23">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_12">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(312.132656 254.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-17" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_4">
     <g id="analisi1_lez30c_g2-line2d_25">
      <path d="M 44.8 223.466667 
L 614.4 223.466667 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="223.466667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_13">
      <!-- -2.08 -->
      <g style="fill: currentColor" transform="translate(294.639219 227.645378) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_g2-DejaVuSans-11" d="M 684 794 
L 1344 794 
L 1344 0 
L 684 0 
L 684 794 
z
" transform="scale(0.015625)"/>
       </defs>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-15" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-11" transform="translate(99.703125 0)"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-13" transform="translate(131.484375 0)"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-1b" transform="translate(195.109375 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_5">
     <g id="analisi1_lez30c_g2-line2d_27">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_28">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_14">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_6">
     <g id="analisi1_lez30c_g2-line2d_29">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_30">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_15">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(316.10125 141.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_7">
     <g id="analisi1_lez30c_g2-line2d_31">
      <path d="M 44.8 80.666667 
L 614.4 80.666667 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_32">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="80.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_16">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(316.10125 84.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-1b"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_g2-ytick_8">
     <g id="analisi1_lez30c_g2-line2d_33">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_g2-line2d_34">
      <g>
       <use xlink:href="#analisi1_lez30c_g2-m043100e587" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_g2-text_17">
      <!-- 12 -->
      <g style="fill: currentColor" transform="translate(309.1025 28.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-15" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30c_g2-line2d_35">
    <defs>
     <path id="analisi1_lez30c_g2-m2df973a124" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30c_g2-m2df973a124" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g2-line2d_36">
    <defs>
     <path id="analisi1_lez30c_g2-md9c81526e5" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30c_g2-md9c81526e5" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g2-line2d_37">
    <path d="M 44.8 99.516399 
L 66.652877 104.947075 
L 85.180317 109.331905 
L 101.332444 112.929553 
L 115.109258 115.774648 
L 126.985822 118.007577 
L 137.437198 119.751652 
L 146.463386 121.042262 
L 154.53945 121.979727 
L 161.665388 122.590529 
L 167.841201 122.913645 
L 173.541952 122.999967 
L 178.76764 122.857458 
L 183.518265 122.500222 
L 187.793828 121.95011 
L 191.594329 121.23827 
L 194.919766 120.406311 
L 198.245204 119.337647 
L 201.09558 118.194083 
L 203.945955 116.795641 
L 206.321268 115.395648 
L 208.69658 113.737898 
L 211.071893 111.767603 
L 212.972143 109.918176 
L 214.872394 107.773517 
L 216.772644 105.269299 
L 218.672894 102.31901 
L 220.098082 99.743098 
L 221.523269 96.780943 
L 222.948457 93.339621 
L 224.373645 89.289603 
L 225.798832 84.442763 
L 227.22402 78.510972 
L 228.174145 73.731918 
L 229.12427 68.045984 
L 230.074395 61.106006 
L 231.02452 52.320838 
L 231.974646 40.554992 
L 232.449708 32.84959 
L 232.924771 23.150317 
L 233.399833 10.170109 
L 233.673124 -1 
L 233.673124 -1 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_38">
    <path d="M 282.441724 401 
L 282.806339 361.513816 
L 283.281401 339.374447 
L 283.756464 325.212785 
L 284.706589 306.72643 
L 285.656714 294.453809 
L 286.606839 285.37508 
L 287.556964 278.243857 
L 288.507089 272.423627 
L 289.932277 265.382876 
L 291.357465 259.75735 
L 292.782652 255.131832 
L 294.20784 251.248829 
L 295.633028 247.937732 
L 297.058215 245.079743 
L 298.958465 241.828609 
L 300.858716 239.085936 
L 302.758966 236.748163 
L 304.659216 234.739559 
L 306.559466 233.003144 
L 308.934779 231.149459 
L 311.310092 229.587418 
L 313.685405 228.267154 
L 316.53578 226.948167 
L 319.386155 225.87039 
L 322.711593 224.865248 
L 326.037031 224.085826 
L 329.362469 223.494602 
L 330.312594 223.568728 
L 334.113094 224.287847 
L 337.438532 225.12751 
L 340.76397 226.205508 
L 343.614345 227.358759 
L 346.464721 228.76893 
L 348.840033 230.180721 
L 351.215346 231.852673 
L 353.590659 233.840327 
L 355.490909 235.706637 
L 357.391159 237.871694 
L 359.29141 240.400979 
L 361.19166 243.382702 
L 362.616847 245.987899 
L 364.042035 248.986032 
L 365.467223 252.472503 
L 366.89241 256.580708 
L 368.317598 261.505139 
L 369.742786 267.545218 
L 370.692911 272.423627 
L 371.643036 278.243857 
L 372.593161 285.37508 
L 373.543286 294.453809 
L 374.493411 306.72643 
L 374.968474 314.853289 
L 375.443536 325.212785 
L 375.918599 339.374447 
L 376.393661 361.513816 
L 376.758276 401 
L 376.758276 401 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_39">
    <path d="M 425.526876 -1 
L 425.800167 10.170109 
L 426.275229 23.150317 
L 427.225354 40.554992 
L 428.17548 52.320838 
L 429.125605 61.106006 
L 430.07573 68.045984 
L 431.025855 73.731918 
L 432.451043 80.632773 
L 433.87623 86.161978 
L 435.301418 90.717312 
L 436.726606 94.547025 
L 438.151793 97.816375 
L 439.576981 100.640844 
L 441.477231 103.856453 
L 443.377481 106.571135 
L 445.277731 108.886348 
L 447.177982 110.876429 
L 449.553294 112.990886 
L 451.928607 114.766216 
L 454.30392 116.263641 
L 457.154295 117.758708 
L 460.004671 118.981909 
L 462.855046 119.980014 
L 466.180484 120.907903 
L 469.980984 121.710129 
L 473.781485 122.285278 
L 478.057048 122.708974 
L 482.807673 122.951581 
L 488.033361 122.991697 
L 493.734112 122.814939 
L 500.384987 122.373804 
L 507.510926 121.67563 
L 515.586989 120.659599 
L 524.613178 119.299887 
L 535.064554 117.49351 
L 546.941118 115.206123 
L 560.242869 112.416372 
L 575.919933 108.89353 
L 593.97231 104.60054 
L 614.4 99.516399 
L 614.4 99.516399 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_40">
    <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_41">
    <path d="M 282.133333 364 
L 282.133333 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_42">
    <path d="M 377.066667 364 
L 377.066667 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_43">
    <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_44">
    <path d="M 44.8 279 
L 614.4 109 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g2-line2d_45">
    <path d="M 44.8 109 
L 614.4 279 
" clip-path="url(#analisi1_lez30c_g2-p19170f8344)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_g2-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g2-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_g2-text_18">
    <!-- M -->
    <g style="fill: currentColor" transform="translate(335.6 217.466667) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30c_g2-DejaVuSans-30" d="M 628 4666 
L 1569 4666 
L 2759 1491 
L 3956 4666 
L 4897 4666 
L 4897 0 
L 4281 0 
L 4281 4097 
L 3078 897 
L 2444 897 
L 1241 4097 
L 1241 0 
L 628 0 
L 628 4666 
z
" transform="scale(0.015625)"/>
     </defs>
     <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-30"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g2-line2d_46">
    <defs>
     <path id="analisi1_lez30c_g2-m189414592b" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30c_g2-p19170f8344)">
     <use xlink:href="#analisi1_lez30c_g2-m189414592b" x="329.6" y="223.466667" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30c_g2-legend_1">
    <g id="analisi1_lez30c_g2-line2d_47">
     <path d="M 534.65 38.41 
L 545.65 38.41 
L 556.65 38.41 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30c_g2-text_19">
     <g style="fill: currentColor" transform="translate(565.45 42.26) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30c_g2-DejaVuSans-Oblique-5c" d="M 1588 -325 
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
       <path id="analisi1_lez30c_g2-DejaVuSans-20" d="M 678 2906 
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
       <path id="analisi1_lez30c_g2-DejaVuSans-Oblique-49" d="M 3059 4863 
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
       <path id="analisi1_lez30c_g2-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30c_g2-DejaVuSans-Oblique-5b" d="M 3841 3500 
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
       <path id="analisi1_lez30c_g2-DejaVuSans-c" d="M 513 4856 
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
      <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-Oblique-5c" transform="translate(0 0.015625)"/>
      <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-20" transform="translate(78.662109 0.015625)"/>
      <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-Oblique-49" transform="translate(181.933594 0.015625)"/>
      <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-b" transform="translate(217.138672 0.015625)"/>
      <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-Oblique-5b" transform="translate(256.152344 0.015625)"/>
      <use xlink:href="#analisi1_lez30c_g2-DejaVuSans-c" transform="translate(315.332031 0.015625)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30c_g2-p19170f8344">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
        ]
      },
      {
        id: "s30-riepilogo-studio",
        type: "section",
        title: "Riepilogo dei risultati dello studio di funzione",
        icon: "📋",
        content: `<p>Raccogliamo in forma sintetica quanto ottenuto, così da avere uno <strong>schema di controllo riutilizzabile</strong> per altri esercizi dello stesso tipo:</p>
<ul>
  <li><strong>Simmetria:</strong> $f$ è pari, grafico simmetrico rispetto all'asse $y$.</li>
  <li><strong>Dominio:</strong> $D = (-\\infty,-2)\\cup(-1,1)\\cup(2,+\\infty)$.</li>
  <li><strong>Segno:</strong> $f \\gt 0$ su $(-\\infty,-2)\\cup(2,+\\infty)$, $f \\lt 0$ su $(-1,1)$; nessuna intersezione con l'asse $x$; intersezione con l'asse $y$ nel punto $(0, -3\\log 2)$.</li>
  <li><strong>Asintoti verticali:</strong> $x = \\pm 1$ (con limite $-\\infty$), $x = \\pm 2$ (con limite $+\\infty$), ciascuno raggiungibile da un solo lato.</li>
  <li><strong>Asintoti obliqui:</strong> $y = x$ per $x \\to +\\infty$ (dall'alto), $y = -x$ per $x \\to -\\infty$.</li>
</ul>
<p><strong>Anticipazione.</strong> L'andamento qualitativo del grafico è stato dedotto solo da dominio, segno e asintoti. Per confermare la forma esatta, in particolare per capire se ci sono massimi o minimi locali nell'intervallo $(-1,1)$ e se la funzione è monotona sui rami esterni, sarebbe necessario lo studio della derivata prima. Questo verrà affrontato in seguito.</p>`
      },
      {
        id: "s30-esercizi-intro",
        type: "integrazione_box",
        title: "Integrazione — non detto dal docente",
        content: `<p>Esercizi sui contenuti di questa lezione, generati dal verificatore e non svolti dal docente. Le soluzioni sono nel box sotto ogni traccia.</p>`
      },
      {
        id: "s30-es-teoria-1",
        type: "esercizio",
        title: "Teoria 1",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Sia $f: I \\to \\mathbb{R}$, con $I$ intervallo aperto. Definire la derivata seconda in un punto $x_0 \\in I$ e la classe $C^2(I)$. Spiegare perché $f \\in C^2(I)$ implica $f \\in C^1(I)$.</p>`,
        solution: `<p>Si richiede che $f$ sia derivabile in un intorno di $x_0$ e che esista finito il limite</p>
<p>$$f''(x_0) = \\lim_{h \\to 0} \\frac{f'(x_0+h) - f'(x_0)}{h}$$</p>
<p>La funzione appartiene a $C^2(I)$ se è derivabile due volte in ogni punto di $I$ e $f''$ è continua in $I$.</p>
<p>In questo caso $f'$ è derivabile, quindi continua: pertanto $f \\in C^1(I)$. Inoltre, poiché la derivata di $f'$ è continua, si ha anche $f' \\in C^1(I)$.</p>`
      },
      {
        id: "s30-es-teoria-2",
        type: "esercizio",
        title: "Teoria 2",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dai la definizione di punto di flesso per una funzione $f:(a,b) \\to \\mathbb{R}$ ed enuncia la condizione necessaria e la condizione sufficiente, in termini di $f''$, viste a lezione. Mostra con un esempio che $f''(x_0) = 0$ non è sufficiente.</p>`,
        solution: `<p><strong>Definizione.</strong> Sia $f:(a,b) \\to \\mathbb{R}$ e $x_0 \\in (a,b)$. Il punto $x_0$ è un punto di flesso se esiste $\\delta \\gt 0$ tale che $f$ è convessa in $(x_0-\\delta, x_0)$ e concava in $(x_0, x_0+\\delta)$, oppure concava in $(x_0-\\delta,x_0)$ e convessa in $(x_0,x_0+\\delta)$: in breve, $x_0$ è un punto in cui la funzione cambia concavità.</p>
<p><strong>Condizione necessaria.</strong> Se $f$ è derivabile due volte in un intorno di $x_0$ e $x_0$ è un punto di flesso, allora $f''(x_0) = 0$ (infatti $f''$ ha segni opposti nei due lati di $x_0$: $f'$ ha in $x_0$ un massimo o un minimo locale, e per il teorema di Fermat applicato a $f'$ si ottiene $f''(x_0) = 0$).</p>
<p><strong>Condizione sufficiente.</strong> Se $f$ è derivabile due volte in un intorno di $x_0$, $f''(x_0) = 0$ e $f''$ cambia segno in $x_0$ (positiva da un lato, negativa dall'altro), allora $x_0$ è un punto di flesso.</p>
<p><strong>La condizione non è sufficiente.</strong> Per $f(x) = x^4$ si ha $f''(x) = 12x^2$, quindi $f''(0) = 0$; ma $f''(x) \\ge 0$ per ogni $x$ e $f$ è (strettamente) convessa su tutto $\\mathbb{R}$: la concavità non cambia e $x=0$ non è un flesso. Manca appunto il cambio di segno di $f''$.</p>`
      },
      {
        id: "s30-es-teoria-3",
        type: "esercizio",
        title: "Teoria 3",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dai la definizione di funzione pari, precisando la condizione che deve soddisfare il dominio. Verifica che $f(x) = |x| + 3\\log\\left(\\frac{|x|-1}{|x|-2}\\right)$ è pari e spiega che cosa permette di risparmiare questa informazione nello studio di funzione.</p>`,
        solution: `<p>Sia $f: D \\to \\mathbb{R}$. Si dice che $f$ è <strong>pari</strong> se (i) $D$ è simmetrico rispetto all'origine, cioè $x \\in D \\Rightarrow -x \\in D$, e (ii) $f(-x) = f(x)$ per ogni $x \\in D$. In tal caso il grafico è simmetrico rispetto all'asse $y$. La condizione (i) non è un dettaglio: senza di essa la scrittura $f(-x)$ potrebbe non avere senso.</p>
<p>Per la funzione data la variabile compare soltanto attraverso $|x|$ e $|-x| = |x|$; dunque la condizione di appartenenza al dominio, $\\frac{|x|-1}{|x|-2} \\gt 0$, dipende solo da $|x|$ e il dominio $D = (-\\infty,-2)\\cup(-1,1)\\cup(2,+\\infty)$ è simmetrico. Inoltre</p>
<p>$$f(-x) = |-x| + 3\\log\\frac{|-x|-1}{|-x|-2} = |x| + 3\\log\\frac{|x|-1}{|x|-2} = f(x),$$</p>
<p>quindi $f$ è pari.</p>
<p><strong>Conseguenze operative.</strong> Basta studiare $f$ su $D \\cap [0,+\\infty) = [0,1)\\cup(2,+\\infty)$ e poi riflettere tutto rispetto all'asse $y$. In particolare $f$ ha lo stesso segno in $x$ e in $-x$; i limiti si scambiano di lato, $\\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to -x_0^-} f(x)$ (così l'asintoto verticale $x=2$ raggiunto da destra diventa $x=-2$ raggiunto da sinistra); e un asintoto obliquo $y = mx+q$ per $x \\to +\\infty$ diventa $y = -mx+q$ per $x \\to -\\infty$ (qui $y=x$ diventa $y=-x$).</p>`
      },
      {
        id: "s30-es-teoria-4",
        type: "esercizio",
        title: "Teoria 4",
        kind: "teoria",
        source: "integrazione",
        content: `<p>Dimostrare che, se $f$ è derivabile su un intervallo aperto $I$ e $f'(x) \\ge 0$ per ogni $x \\in I$, allora $f$ è non decrescente. Mostrare con un controesempio perché l'ipotesi che il dominio sia un intervallo è essenziale.</p>`,
        solution: `<p>Siano $a, b \\in I$ con $a \\lt b$. Poiché $[a,b] \\subset I$, la funzione è continua su $[a,b]$ e derivabile su $(a,b)$. Il teorema di Lagrange fornisce $c \\in (a,b)$ tale che</p>
<p>$$f(b) - f(a) = f'(c)(b-a) \\ge 0$$</p>
<p>Quindi $f(a) \\le f(b)$, cioè $f$ è non decrescente.</p>
<p>Sul dominio non connesso $D = \\mathbb{R}\\setminus\\{0\\}$, invece, la funzione $g(x) = -1/x$ soddisfa $g'(x) = 1/x^2 \\gt 0$ ovunque, ma $-1 \\lt 1$ e $g(-1) = 1 \\gt -1 = g(1)$. Pertanto $g$ non è non decrescente su tutto $D$.</p>`
      },
      {
        id: "s30-es-scritto-1",
        type: "esercizio",
        title: "Scritto 1",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Calcolare la derivata prima e la derivata seconda di $f(x) = 2\\cos(3x^2)$.</p>`,
        solution: `<p>Applicando la regola della catena si ottiene</p>
<p>$$f'(x) = 2\\left[-\\sin(3x^2)\\right]\\cdot 6x = -12x\\sin(3x^2)$$</p>
<p>Derivando il prodotto e applicando nuovamente la regola della catena, risulta</p>
<p>$$f''(x) = -12\\sin(3x^2) - 12x\\cos(3x^2)\\cdot 6x = -12\\sin(3x^2) - 72x^2\\cos(3x^2)$$</p>
<p>Entrambe le formule valgono per ogni $x \\in \\mathbb{R}$.</p>`
      },
      {
        id: "s30-es-scritto-2",
        type: "esercizio",
        title: "Scritto 2",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Determina gli intervalli di convessità e di concavità e gli eventuali punti di flesso di $f(x) = x^4 - 6x^2 + 5$, risolvendo la disequazione $f''(x) \\ge 0$.</p>`,
        solution: `<p>Si ha $f'(x) = 4x^3 - 12x$ e $f''(x) = 12x^2 - 12 = 12(x^2-1)$.</p>
<p>Risolviamo $f''(x) \\ge 0$:</p>
<p>$$12(x^2-1) \\ge 0 \\iff x^2 \\ge 1 \\iff x \\le -1 \\ \\text{ oppure } \\ x \\ge 1$$</p>
<p>Quindi $f'' \\ge 0$ (e $f$ è convessa) su $(-\\infty,-1]$ e su $[1,+\\infty)$, mentre $f'' \\le 0$ (e $f$ è concava) su $[-1,1]$.</p>
<p>Nei punti $x=-1$ e $x=1$ si ha $f'' = 0$ e la derivata seconda <strong>cambia segno</strong>, dunque per la condizione sufficiente sono punti di flesso. Poiché $f(\\pm 1) = 1 - 6 + 5 = 0$, i flessi sono $(-1,0)$ e $(1,0)$.</p>
<figure class="figura" data-id="analisi1_lez30b_gp1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30b_gp1-figure_1">
  <g id="analisi1_lez30b_gp1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30b_gp1-axes_1">
   <g id="analisi1_lez30b_gp1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30b_gp1-FillBetweenPolyCollection_1">
    <defs>
     <path id="analisi1_lez30b_gp1-m0918874de7" d="M 44.8 -92.666667 
L 44.8 -364.666667 
L 45.754104 -362.61985 
L 46.708208 -360.579901 
L 47.662312 -358.546821 
L 48.616415 -356.52061 
L 49.570519 -354.501267 
L 50.524623 -352.488792 
L 51.478727 -350.483186 
L 52.432831 -348.484449 
L 53.386935 -346.49258 
L 54.341039 -344.50758 
L 55.295142 -342.529448 
L 56.249246 -340.558185 
L 57.20335 -338.59379 
L 58.157454 -336.636263 
L 59.111558 -334.685606 
L 60.065662 -332.741816 
L 61.019765 -330.804895 
L 61.973869 -328.874843 
L 62.927973 -326.951659 
L 63.882077 -325.035344 
L 64.836181 -323.125897 
L 65.790285 -321.223319 
L 66.744389 -319.32761 
L 67.698492 -317.438768 
L 68.652596 -315.556796 
L 69.6067 -313.681692 
L 70.560804 -311.813456 
L 71.514908 -309.952089 
L 72.469012 -308.09759 
L 73.423116 -306.24996 
L 74.377219 -304.409198 
L 75.331323 -302.575305 
L 76.285427 -300.748281 
L 77.239531 -298.928125 
L 78.193635 -297.114837 
L 79.147739 -295.308418 
L 80.101843 -293.508868 
L 81.055946 -291.716186 
L 82.01005 -289.930372 
L 82.964154 -288.151427 
L 83.918258 -286.379351 
L 84.872362 -284.614143 
L 85.826466 -282.855803 
L 86.78057 -281.104332 
L 87.734673 -279.35973 
L 88.688777 -277.621996 
L 89.642881 -275.891131 
L 90.596985 -274.167134 
L 91.551089 -272.450005 
L 92.505193 -270.739746 
L 93.459296 -269.036354 
L 94.4134 -267.339831 
L 95.367504 -265.650177 
L 96.321608 -263.967391 
L 97.275712 -262.291474 
L 98.229816 -260.622425 
L 99.18392 -258.960245 
L 100.138023 -257.304933 
L 101.092127 -255.65649 
L 102.046231 -254.014915 
L 103.000335 -252.380209 
L 103.954439 -250.752372 
L 104.908543 -249.131402 
L 105.862647 -247.517302 
L 106.81675 -245.91007 
L 107.770854 -244.309706 
L 108.724958 -242.716211 
L 109.679062 -241.129584 
L 110.633166 -239.549826 
L 111.58727 -237.976937 
L 112.541374 -236.410916 
L 113.495477 -234.851763 
L 114.449581 -233.299479 
L 115.403685 -231.754063 
L 116.357789 -230.215516 
L 117.311893 -228.683838 
L 118.265997 -227.159028 
L 119.220101 -225.641087 
L 120.174204 -224.130014 
L 121.128308 -222.625809 
L 122.082412 -221.128473 
L 123.036516 -219.638006 
L 123.99062 -218.154407 
L 124.944724 -216.677676 
L 125.898827 -215.207815 
L 126.852931 -213.744821 
L 127.807035 -212.288696 
L 128.761139 -210.83944 
L 129.715243 -209.397052 
L 130.669347 -207.961533 
L 131.623451 -206.532882 
L 132.577554 -205.1111 
L 133.531658 -203.696186 
L 134.485762 -202.288141 
L 135.439866 -200.886964 
L 136.39397 -199.492656 
L 137.348074 -198.105216 
L 138.302178 -196.724645 
L 139.256281 -195.350942 
L 140.210385 -193.984108 
L 141.164489 -192.624142 
L 142.118593 -191.271045 
L 143.072697 -189.924817 
L 144.026801 -188.585457 
L 144.980905 -187.252965 
L 145.935008 -185.927342 
L 146.889112 -184.608587 
L 147.843216 -183.296701 
L 148.79732 -181.991684 
L 149.751424 -180.693535 
L 150.705528 -179.402254 
L 151.659631 -178.117842 
L 152.613735 -176.840299 
L 153.567839 -175.569624 
L 154.521943 -174.305817 
L 155.476047 -173.048879 
L 156.430151 -171.79881 
L 157.384255 -170.555609 
L 158.338358 -169.319276 
L 159.292462 -168.089813 
L 160.246566 -166.867217 
L 161.20067 -165.65149 
L 162.154774 -164.442632 
L 163.108878 -163.240642 
L 164.062982 -162.045521 
L 165.017085 -160.857268 
L 165.971189 -159.675884 
L 166.925293 -158.501368 
L 167.879397 -157.333721 
L 168.833501 -156.172942 
L 169.787605 -155.019032 
L 170.741709 -153.87199 
L 171.695812 -152.731817 
L 172.649916 -151.598512 
L 173.60402 -150.472076 
L 174.558124 -149.352508 
L 175.512228 -148.239809 
L 176.466332 -147.133978 
L 177.420436 -146.035016 
L 178.374539 -144.942922 
L 179.328643 -143.857697 
L 180.282747 -142.779341 
L 181.236851 -141.707852 
L 182.190955 -140.643233 
L 183.145059 -139.585482 
L 184.099162 -138.534599 
L 185.053266 -137.490585 
L 186.00737 -136.45344 
L 186.961474 -135.423163 
L 187.915578 -134.399754 
L 188.869682 -133.383214 
L 189.823786 -132.373543 
L 190.777889 -131.37074 
L 191.731993 -130.374805 
L 192.686097 -129.385739 
L 193.640201 -128.403542 
L 194.594305 -127.428213 
L 195.548409 -126.459753 
L 196.502513 -125.498161 
L 197.456616 -124.543437 
L 198.41072 -123.595583 
L 199.364824 -122.654596 
L 200.318928 -121.720478 
L 201.273032 -120.793229 
L 202.227136 -119.872848 
L 203.18124 -118.959336 
L 204.135343 -118.052692 
L 205.089447 -117.152917 
L 206.043551 -116.26001 
L 206.997655 -115.373972 
L 207.951759 -114.494802 
L 208.905863 -113.622501 
L 209.859966 -112.757068 
L 210.81407 -111.898504 
L 211.768174 -111.046809 
L 212.722278 -110.201981 
L 213.676382 -109.364023 
L 214.630486 -108.532933 
L 215.58459 -107.708711 
L 216.538693 -106.891358 
L 217.492797 -106.080873 
L 218.446901 -105.277257 
L 219.401005 -104.48051 
L 220.355109 -103.690631 
L 221.309213 -102.90762 
L 222.263317 -102.131478 
L 223.21742 -101.362205 
L 224.171524 -100.5998 
L 225.125628 -99.844263 
L 226.079732 -99.095595 
L 227.033836 -98.353796 
L 227.98794 -97.618865 
L 228.942044 -96.890802 
L 229.896147 -96.169609 
L 230.850251 -95.455283 
L 231.804355 -94.747826 
L 232.758459 -94.047238 
L 233.712563 -93.353518 
L 234.666667 -92.666667 
L 234.666667 -92.666667 
L 234.666667 -92.666667 
L 233.712563 -92.666667 
L 232.758459 -92.666667 
L 231.804355 -92.666667 
L 230.850251 -92.666667 
L 229.896147 -92.666667 
L 228.942044 -92.666667 
L 227.98794 -92.666667 
L 227.033836 -92.666667 
L 226.079732 -92.666667 
L 225.125628 -92.666667 
L 224.171524 -92.666667 
L 223.21742 -92.666667 
L 222.263317 -92.666667 
L 221.309213 -92.666667 
L 220.355109 -92.666667 
L 219.401005 -92.666667 
L 218.446901 -92.666667 
L 217.492797 -92.666667 
L 216.538693 -92.666667 
L 215.58459 -92.666667 
L 214.630486 -92.666667 
L 213.676382 -92.666667 
L 212.722278 -92.666667 
L 211.768174 -92.666667 
L 210.81407 -92.666667 
L 209.859966 -92.666667 
L 208.905863 -92.666667 
L 207.951759 -92.666667 
L 206.997655 -92.666667 
L 206.043551 -92.666667 
L 205.089447 -92.666667 
L 204.135343 -92.666667 
L 203.18124 -92.666667 
L 202.227136 -92.666667 
L 201.273032 -92.666667 
L 200.318928 -92.666667 
L 199.364824 -92.666667 
L 198.41072 -92.666667 
L 197.456616 -92.666667 
L 196.502513 -92.666667 
L 195.548409 -92.666667 
L 194.594305 -92.666667 
L 193.640201 -92.666667 
L 192.686097 -92.666667 
L 191.731993 -92.666667 
L 190.777889 -92.666667 
L 189.823786 -92.666667 
L 188.869682 -92.666667 
L 187.915578 -92.666667 
L 186.961474 -92.666667 
L 186.00737 -92.666667 
L 185.053266 -92.666667 
L 184.099162 -92.666667 
L 183.145059 -92.666667 
L 182.190955 -92.666667 
L 181.236851 -92.666667 
L 180.282747 -92.666667 
L 179.328643 -92.666667 
L 178.374539 -92.666667 
L 177.420436 -92.666667 
L 176.466332 -92.666667 
L 175.512228 -92.666667 
L 174.558124 -92.666667 
L 173.60402 -92.666667 
L 172.649916 -92.666667 
L 171.695812 -92.666667 
L 170.741709 -92.666667 
L 169.787605 -92.666667 
L 168.833501 -92.666667 
L 167.879397 -92.666667 
L 166.925293 -92.666667 
L 165.971189 -92.666667 
L 165.017085 -92.666667 
L 164.062982 -92.666667 
L 163.108878 -92.666667 
L 162.154774 -92.666667 
L 161.20067 -92.666667 
L 160.246566 -92.666667 
L 159.292462 -92.666667 
L 158.338358 -92.666667 
L 157.384255 -92.666667 
L 156.430151 -92.666667 
L 155.476047 -92.666667 
L 154.521943 -92.666667 
L 153.567839 -92.666667 
L 152.613735 -92.666667 
L 151.659631 -92.666667 
L 150.705528 -92.666667 
L 149.751424 -92.666667 
L 148.79732 -92.666667 
L 147.843216 -92.666667 
L 146.889112 -92.666667 
L 145.935008 -92.666667 
L 144.980905 -92.666667 
L 144.026801 -92.666667 
L 143.072697 -92.666667 
L 142.118593 -92.666667 
L 141.164489 -92.666667 
L 140.210385 -92.666667 
L 139.256281 -92.666667 
L 138.302178 -92.666667 
L 137.348074 -92.666667 
L 136.39397 -92.666667 
L 135.439866 -92.666667 
L 134.485762 -92.666667 
L 133.531658 -92.666667 
L 132.577554 -92.666667 
L 131.623451 -92.666667 
L 130.669347 -92.666667 
L 129.715243 -92.666667 
L 128.761139 -92.666667 
L 127.807035 -92.666667 
L 126.852931 -92.666667 
L 125.898827 -92.666667 
L 124.944724 -92.666667 
L 123.99062 -92.666667 
L 123.036516 -92.666667 
L 122.082412 -92.666667 
L 121.128308 -92.666667 
L 120.174204 -92.666667 
L 119.220101 -92.666667 
L 118.265997 -92.666667 
L 117.311893 -92.666667 
L 116.357789 -92.666667 
L 115.403685 -92.666667 
L 114.449581 -92.666667 
L 113.495477 -92.666667 
L 112.541374 -92.666667 
L 111.58727 -92.666667 
L 110.633166 -92.666667 
L 109.679062 -92.666667 
L 108.724958 -92.666667 
L 107.770854 -92.666667 
L 106.81675 -92.666667 
L 105.862647 -92.666667 
L 104.908543 -92.666667 
L 103.954439 -92.666667 
L 103.000335 -92.666667 
L 102.046231 -92.666667 
L 101.092127 -92.666667 
L 100.138023 -92.666667 
L 99.18392 -92.666667 
L 98.229816 -92.666667 
L 97.275712 -92.666667 
L 96.321608 -92.666667 
L 95.367504 -92.666667 
L 94.4134 -92.666667 
L 93.459296 -92.666667 
L 92.505193 -92.666667 
L 91.551089 -92.666667 
L 90.596985 -92.666667 
L 89.642881 -92.666667 
L 88.688777 -92.666667 
L 87.734673 -92.666667 
L 86.78057 -92.666667 
L 85.826466 -92.666667 
L 84.872362 -92.666667 
L 83.918258 -92.666667 
L 82.964154 -92.666667 
L 82.01005 -92.666667 
L 81.055946 -92.666667 
L 80.101843 -92.666667 
L 79.147739 -92.666667 
L 78.193635 -92.666667 
L 77.239531 -92.666667 
L 76.285427 -92.666667 
L 75.331323 -92.666667 
L 74.377219 -92.666667 
L 73.423116 -92.666667 
L 72.469012 -92.666667 
L 71.514908 -92.666667 
L 70.560804 -92.666667 
L 69.6067 -92.666667 
L 68.652596 -92.666667 
L 67.698492 -92.666667 
L 66.744389 -92.666667 
L 65.790285 -92.666667 
L 64.836181 -92.666667 
L 63.882077 -92.666667 
L 62.927973 -92.666667 
L 61.973869 -92.666667 
L 61.019765 -92.666667 
L 60.065662 -92.666667 
L 59.111558 -92.666667 
L 58.157454 -92.666667 
L 57.20335 -92.666667 
L 56.249246 -92.666667 
L 55.295142 -92.666667 
L 54.341039 -92.666667 
L 53.386935 -92.666667 
L 52.432831 -92.666667 
L 51.478727 -92.666667 
L 50.524623 -92.666667 
L 49.570519 -92.666667 
L 48.616415 -92.666667 
L 47.662312 -92.666667 
L 46.708208 -92.666667 
L 45.754104 -92.666667 
L 44.8 -92.666667 
z
"/>
    </defs>
    <g clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)">
     <use xlink:href="#analisi1_lez30b_gp1-m0918874de7" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-FillBetweenPolyCollection_2">
    <defs>
     <path id="analisi1_lez30b_gp1-ma90caabf0c" d="M 424.533333 -92.666667 
L 424.533333 -92.666667 
L 425.487437 -93.353518 
L 426.441541 -94.047238 
L 427.395645 -94.747826 
L 428.349749 -95.455283 
L 429.303853 -96.169609 
L 430.257956 -96.890802 
L 431.21206 -97.618865 
L 432.166164 -98.353796 
L 433.120268 -99.095595 
L 434.074372 -99.844263 
L 435.028476 -100.5998 
L 435.98258 -101.362205 
L 436.936683 -102.131478 
L 437.890787 -102.90762 
L 438.844891 -103.690631 
L 439.798995 -104.48051 
L 440.753099 -105.277257 
L 441.707203 -106.080873 
L 442.661307 -106.891358 
L 443.61541 -107.708711 
L 444.569514 -108.532933 
L 445.523618 -109.364023 
L 446.477722 -110.201981 
L 447.431826 -111.046809 
L 448.38593 -111.898504 
L 449.340034 -112.757068 
L 450.294137 -113.622501 
L 451.248241 -114.494802 
L 452.202345 -115.373972 
L 453.156449 -116.26001 
L 454.110553 -117.152917 
L 455.064657 -118.052692 
L 456.01876 -118.959336 
L 456.972864 -119.872848 
L 457.926968 -120.793229 
L 458.881072 -121.720478 
L 459.835176 -122.654596 
L 460.78928 -123.595583 
L 461.743384 -124.543437 
L 462.697487 -125.498161 
L 463.651591 -126.459753 
L 464.605695 -127.428213 
L 465.559799 -128.403542 
L 466.513903 -129.385739 
L 467.468007 -130.374805 
L 468.422111 -131.37074 
L 469.376214 -132.373543 
L 470.330318 -133.383214 
L 471.284422 -134.399754 
L 472.238526 -135.423163 
L 473.19263 -136.45344 
L 474.146734 -137.490585 
L 475.100838 -138.534599 
L 476.054941 -139.585482 
L 477.009045 -140.643233 
L 477.963149 -141.707852 
L 478.917253 -142.779341 
L 479.871357 -143.857697 
L 480.825461 -144.942922 
L 481.779564 -146.035016 
L 482.733668 -147.133978 
L 483.687772 -148.239809 
L 484.641876 -149.352508 
L 485.59598 -150.472076 
L 486.550084 -151.598512 
L 487.504188 -152.731817 
L 488.458291 -153.87199 
L 489.412395 -155.019032 
L 490.366499 -156.172942 
L 491.320603 -157.333721 
L 492.274707 -158.501368 
L 493.228811 -159.675884 
L 494.182915 -160.857268 
L 495.137018 -162.045521 
L 496.091122 -163.240642 
L 497.045226 -164.442632 
L 497.99933 -165.65149 
L 498.953434 -166.867217 
L 499.907538 -168.089813 
L 500.861642 -169.319276 
L 501.815745 -170.555609 
L 502.769849 -171.79881 
L 503.723953 -173.048879 
L 504.678057 -174.305817 
L 505.632161 -175.569624 
L 506.586265 -176.840299 
L 507.540369 -178.117842 
L 508.494472 -179.402254 
L 509.448576 -180.693535 
L 510.40268 -181.991684 
L 511.356784 -183.296701 
L 512.310888 -184.608587 
L 513.264992 -185.927342 
L 514.219095 -187.252965 
L 515.173199 -188.585457 
L 516.127303 -189.924817 
L 517.081407 -191.271045 
L 518.035511 -192.624142 
L 518.989615 -193.984108 
L 519.943719 -195.350942 
L 520.897822 -196.724645 
L 521.851926 -198.105216 
L 522.80603 -199.492656 
L 523.760134 -200.886964 
L 524.714238 -202.288141 
L 525.668342 -203.696186 
L 526.622446 -205.1111 
L 527.576549 -206.532882 
L 528.530653 -207.961533 
L 529.484757 -209.397052 
L 530.438861 -210.83944 
L 531.392965 -212.288696 
L 532.347069 -213.744821 
L 533.301173 -215.207815 
L 534.255276 -216.677676 
L 535.20938 -218.154407 
L 536.163484 -219.638006 
L 537.117588 -221.128473 
L 538.071692 -222.625809 
L 539.025796 -224.130014 
L 539.979899 -225.641087 
L 540.934003 -227.159028 
L 541.888107 -228.683838 
L 542.842211 -230.215516 
L 543.796315 -231.754063 
L 544.750419 -233.299479 
L 545.704523 -234.851763 
L 546.658626 -236.410916 
L 547.61273 -237.976937 
L 548.566834 -239.549826 
L 549.520938 -241.129584 
L 550.475042 -242.716211 
L 551.429146 -244.309706 
L 552.38325 -245.91007 
L 553.337353 -247.517302 
L 554.291457 -249.131402 
L 555.245561 -250.752372 
L 556.199665 -252.380209 
L 557.153769 -254.014915 
L 558.107873 -255.65649 
L 559.061977 -257.304933 
L 560.01608 -258.960245 
L 560.970184 -260.622425 
L 561.924288 -262.291474 
L 562.878392 -263.967391 
L 563.832496 -265.650177 
L 564.7866 -267.339831 
L 565.740704 -269.036354 
L 566.694807 -270.739746 
L 567.648911 -272.450005 
L 568.603015 -274.167134 
L 569.557119 -275.891131 
L 570.511223 -277.621996 
L 571.465327 -279.35973 
L 572.41943 -281.104332 
L 573.373534 -282.855803 
L 574.327638 -284.614143 
L 575.281742 -286.379351 
L 576.235846 -288.151427 
L 577.18995 -289.930372 
L 578.144054 -291.716186 
L 579.098157 -293.508868 
L 580.052261 -295.308418 
L 581.006365 -297.114837 
L 581.960469 -298.928125 
L 582.914573 -300.748281 
L 583.868677 -302.575305 
L 584.822781 -304.409198 
L 585.776884 -306.24996 
L 586.730988 -308.09759 
L 587.685092 -309.952089 
L 588.639196 -311.813456 
L 589.5933 -313.681692 
L 590.547404 -315.556796 
L 591.501508 -317.438768 
L 592.455611 -319.32761 
L 593.409715 -321.223319 
L 594.363819 -323.125897 
L 595.317923 -325.035344 
L 596.272027 -326.951659 
L 597.226131 -328.874843 
L 598.180235 -330.804895 
L 599.134338 -332.741816 
L 600.088442 -334.685606 
L 601.042546 -336.636263 
L 601.99665 -338.59379 
L 602.950754 -340.558185 
L 603.904858 -342.529448 
L 604.858961 -344.50758 
L 605.813065 -346.49258 
L 606.767169 -348.484449 
L 607.721273 -350.483186 
L 608.675377 -352.488792 
L 609.629481 -354.501267 
L 610.583585 -356.52061 
L 611.537688 -358.546821 
L 612.491792 -360.579901 
L 613.445896 -362.61985 
L 614.4 -364.666667 
L 614.4 -92.666667 
L 614.4 -92.666667 
L 613.445896 -92.666667 
L 612.491792 -92.666667 
L 611.537688 -92.666667 
L 610.583585 -92.666667 
L 609.629481 -92.666667 
L 608.675377 -92.666667 
L 607.721273 -92.666667 
L 606.767169 -92.666667 
L 605.813065 -92.666667 
L 604.858961 -92.666667 
L 603.904858 -92.666667 
L 602.950754 -92.666667 
L 601.99665 -92.666667 
L 601.042546 -92.666667 
L 600.088442 -92.666667 
L 599.134338 -92.666667 
L 598.180235 -92.666667 
L 597.226131 -92.666667 
L 596.272027 -92.666667 
L 595.317923 -92.666667 
L 594.363819 -92.666667 
L 593.409715 -92.666667 
L 592.455611 -92.666667 
L 591.501508 -92.666667 
L 590.547404 -92.666667 
L 589.5933 -92.666667 
L 588.639196 -92.666667 
L 587.685092 -92.666667 
L 586.730988 -92.666667 
L 585.776884 -92.666667 
L 584.822781 -92.666667 
L 583.868677 -92.666667 
L 582.914573 -92.666667 
L 581.960469 -92.666667 
L 581.006365 -92.666667 
L 580.052261 -92.666667 
L 579.098157 -92.666667 
L 578.144054 -92.666667 
L 577.18995 -92.666667 
L 576.235846 -92.666667 
L 575.281742 -92.666667 
L 574.327638 -92.666667 
L 573.373534 -92.666667 
L 572.41943 -92.666667 
L 571.465327 -92.666667 
L 570.511223 -92.666667 
L 569.557119 -92.666667 
L 568.603015 -92.666667 
L 567.648911 -92.666667 
L 566.694807 -92.666667 
L 565.740704 -92.666667 
L 564.7866 -92.666667 
L 563.832496 -92.666667 
L 562.878392 -92.666667 
L 561.924288 -92.666667 
L 560.970184 -92.666667 
L 560.01608 -92.666667 
L 559.061977 -92.666667 
L 558.107873 -92.666667 
L 557.153769 -92.666667 
L 556.199665 -92.666667 
L 555.245561 -92.666667 
L 554.291457 -92.666667 
L 553.337353 -92.666667 
L 552.38325 -92.666667 
L 551.429146 -92.666667 
L 550.475042 -92.666667 
L 549.520938 -92.666667 
L 548.566834 -92.666667 
L 547.61273 -92.666667 
L 546.658626 -92.666667 
L 545.704523 -92.666667 
L 544.750419 -92.666667 
L 543.796315 -92.666667 
L 542.842211 -92.666667 
L 541.888107 -92.666667 
L 540.934003 -92.666667 
L 539.979899 -92.666667 
L 539.025796 -92.666667 
L 538.071692 -92.666667 
L 537.117588 -92.666667 
L 536.163484 -92.666667 
L 535.20938 -92.666667 
L 534.255276 -92.666667 
L 533.301173 -92.666667 
L 532.347069 -92.666667 
L 531.392965 -92.666667 
L 530.438861 -92.666667 
L 529.484757 -92.666667 
L 528.530653 -92.666667 
L 527.576549 -92.666667 
L 526.622446 -92.666667 
L 525.668342 -92.666667 
L 524.714238 -92.666667 
L 523.760134 -92.666667 
L 522.80603 -92.666667 
L 521.851926 -92.666667 
L 520.897822 -92.666667 
L 519.943719 -92.666667 
L 518.989615 -92.666667 
L 518.035511 -92.666667 
L 517.081407 -92.666667 
L 516.127303 -92.666667 
L 515.173199 -92.666667 
L 514.219095 -92.666667 
L 513.264992 -92.666667 
L 512.310888 -92.666667 
L 511.356784 -92.666667 
L 510.40268 -92.666667 
L 509.448576 -92.666667 
L 508.494472 -92.666667 
L 507.540369 -92.666667 
L 506.586265 -92.666667 
L 505.632161 -92.666667 
L 504.678057 -92.666667 
L 503.723953 -92.666667 
L 502.769849 -92.666667 
L 501.815745 -92.666667 
L 500.861642 -92.666667 
L 499.907538 -92.666667 
L 498.953434 -92.666667 
L 497.99933 -92.666667 
L 497.045226 -92.666667 
L 496.091122 -92.666667 
L 495.137018 -92.666667 
L 494.182915 -92.666667 
L 493.228811 -92.666667 
L 492.274707 -92.666667 
L 491.320603 -92.666667 
L 490.366499 -92.666667 
L 489.412395 -92.666667 
L 488.458291 -92.666667 
L 487.504188 -92.666667 
L 486.550084 -92.666667 
L 485.59598 -92.666667 
L 484.641876 -92.666667 
L 483.687772 -92.666667 
L 482.733668 -92.666667 
L 481.779564 -92.666667 
L 480.825461 -92.666667 
L 479.871357 -92.666667 
L 478.917253 -92.666667 
L 477.963149 -92.666667 
L 477.009045 -92.666667 
L 476.054941 -92.666667 
L 475.100838 -92.666667 
L 474.146734 -92.666667 
L 473.19263 -92.666667 
L 472.238526 -92.666667 
L 471.284422 -92.666667 
L 470.330318 -92.666667 
L 469.376214 -92.666667 
L 468.422111 -92.666667 
L 467.468007 -92.666667 
L 466.513903 -92.666667 
L 465.559799 -92.666667 
L 464.605695 -92.666667 
L 463.651591 -92.666667 
L 462.697487 -92.666667 
L 461.743384 -92.666667 
L 460.78928 -92.666667 
L 459.835176 -92.666667 
L 458.881072 -92.666667 
L 457.926968 -92.666667 
L 456.972864 -92.666667 
L 456.01876 -92.666667 
L 455.064657 -92.666667 
L 454.110553 -92.666667 
L 453.156449 -92.666667 
L 452.202345 -92.666667 
L 451.248241 -92.666667 
L 450.294137 -92.666667 
L 449.340034 -92.666667 
L 448.38593 -92.666667 
L 447.431826 -92.666667 
L 446.477722 -92.666667 
L 445.523618 -92.666667 
L 444.569514 -92.666667 
L 443.61541 -92.666667 
L 442.661307 -92.666667 
L 441.707203 -92.666667 
L 440.753099 -92.666667 
L 439.798995 -92.666667 
L 438.844891 -92.666667 
L 437.890787 -92.666667 
L 436.936683 -92.666667 
L 435.98258 -92.666667 
L 435.028476 -92.666667 
L 434.074372 -92.666667 
L 433.120268 -92.666667 
L 432.166164 -92.666667 
L 431.21206 -92.666667 
L 430.257956 -92.666667 
L 429.303853 -92.666667 
L 428.349749 -92.666667 
L 427.395645 -92.666667 
L 426.441541 -92.666667 
L 425.487437 -92.666667 
L 424.533333 -92.666667 
z
"/>
    </defs>
    <g clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)">
     <use xlink:href="#analisi1_lez30b_gp1-ma90caabf0c" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-matplotlib.axis_1">
    <g id="analisi1_lez30b_gp1-xtick_1">
     <g id="analisi1_lez30b_gp1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_2">
      <defs>
       <path id="analisi1_lez30b_gp1-m79a4023d1c" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="44.8" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_1">
      <!-- -3 -->
      <g style="fill: currentColor" transform="translate(39.316328 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30b_gp1-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-16" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-xtick_2">
     <g id="analisi1_lez30b_gp1-line2d_3">
      <path d="M 139.733333 364 
L 139.733333 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="139.733333" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_2">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(134.249661 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-xtick_3">
     <g id="analisi1_lez30b_gp1-line2d_5">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="234.666667" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_3">
      <!-- -1 -->
      <g style="fill: currentColor" transform="translate(229.182995 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-14" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-xtick_4">
     <g id="analisi1_lez30b_gp1-line2d_7">
      <path d="M 329.6 364 
L 329.6 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="329.6" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_4">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(326.100625 322.190755) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-xtick_5">
     <g id="analisi1_lez30b_gp1-line2d_9">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="424.533333" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_5">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(421.033958 322.190755) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-xtick_6">
     <g id="analisi1_lez30b_gp1-line2d_11">
      <path d="M 519.466667 364 
L 519.466667 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="519.466667" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_6">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(515.967292 322.190755) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-xtick_7">
     <g id="analisi1_lez30b_gp1-line2d_13">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-m79a4023d1c" x="614.4" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_7">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(610.900625 322.190755) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-matplotlib.axis_2">
    <g id="analisi1_lez30b_gp1-ytick_1">
     <g id="analisi1_lez30b_gp1-line2d_15">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_16">
      <defs>
       <path id="analisi1_lez30b_gp1-mba75b80215" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_8">
      <!-- -20 -->
      <g style="fill: currentColor" transform="translate(305.133906 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-15" transform="translate(36.078125 0)"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(99.703125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-ytick_2">
     <g id="analisi1_lez30b_gp1-line2d_17">
      <path d="M 44.8 307.333333 
L 614.4 307.333333 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_9">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(316.10125 311.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-ytick_3">
     <g id="analisi1_lez30b_gp1-line2d_19">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_10">
      <!-- 20 -->
      <g style="fill: currentColor" transform="translate(309.1025 254.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-15"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-ytick_4">
     <g id="analisi1_lez30b_gp1-line2d_21">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_11">
      <!-- 40 -->
      <g style="fill: currentColor" transform="translate(309.1025 198.178711) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-17" d="M 2419 4116 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-17"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-ytick_5">
     <g id="analisi1_lez30b_gp1-line2d_23">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_24">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_12">
      <!-- 60 -->
      <g style="fill: currentColor" transform="translate(309.1025 141.512044) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-19"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-ytick_6">
     <g id="analisi1_lez30b_gp1-line2d_25">
      <path d="M 44.8 80.666667 
L 614.4 80.666667 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="80.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_13">
      <!-- 80 -->
      <g style="fill: currentColor" transform="translate(309.1025 84.845378) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30b_gp1-DejaVuSans-1b" d="M 2034 2216 
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
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-1b"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30b_gp1-ytick_7">
     <g id="analisi1_lez30b_gp1-line2d_27">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30b_gp1-line2d_28">
      <g>
       <use xlink:href="#analisi1_lez30b_gp1-mba75b80215" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30b_gp1-text_14">
      <!-- 100 -->
      <g style="fill: currentColor" transform="translate(302.10375 28.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(63.625 0)"/>
       <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(127.25 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_29">
    <defs>
     <path id="analisi1_lez30b_gp1-mebc3a04f47" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_gp1-mebc3a04f47" x="614.4" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_30">
    <defs>
     <path id="analisi1_lez30b_gp1-m91dce477a2" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30b_gp1-m91dce477a2" x="329.6" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_31">
    <path d="M 44.8 35.333333 
L 53.351126 53.432787 
L 61.427189 70.020121 
L 69.503253 86.115335 
L 77.579316 101.718429 
L 85.655379 116.829404 
L 93.731443 131.448258 
L 101.332444 144.757631 
L 108.933445 157.631078 
L 116.534445 170.068599 
L 124.135446 182.070193 
L 131.736447 193.635861 
L 138.862385 204.082765 
L 145.988324 214.146531 
L 153.114262 223.827159 
L 160.2402 233.124648 
L 167.366138 242.038999 
L 174.017014 250.013384 
L 180.66789 257.654013 
L 187.318766 264.960886 
L 193.969641 271.934003 
L 200.620517 278.573364 
L 206.79633 284.439638 
L 212.972143 290.018131 
L 219.147957 295.308845 
L 225.32377 300.31178 
L 231.499583 305.026935 
L 237.675396 309.454311 
L 243.851209 313.593908 
L 249.55196 317.159648 
L 255.252711 320.48018 
L 260.953461 323.555503 
L 266.654212 326.385618 
L 272.354962 328.970525 
L 278.055713 331.310223 
L 283.756464 333.404712 
L 289.457214 335.253993 
L 295.157965 336.858065 
L 300.858716 338.216929 
L 306.559466 339.330584 
L 312.260217 340.199031 
L 317.485905 340.779698 
L 322.711593 341.154323 
L 327.937281 341.322903 
L 333.162969 341.285441 
L 338.388657 341.041935 
L 343.614345 340.592386 
L 348.840033 339.936794 
L 354.065721 339.075159 
L 359.766472 337.900201 
L 365.467223 336.480035 
L 371.167973 334.814661 
L 376.868724 332.904078 
L 382.569475 330.748286 
L 388.270225 328.347286 
L 393.970976 325.701078 
L 399.671726 322.809661 
L 405.372477 319.673035 
L 411.073228 316.291201 
L 416.773978 312.664159 
L 422.949791 308.458152 
L 429.125605 303.964365 
L 435.301418 299.182799 
L 441.477231 294.113454 
L 447.653044 288.756329 
L 453.828857 283.111425 
L 460.004671 277.178741 
L 466.655546 270.467861 
L 473.306422 263.423225 
L 479.957298 256.044833 
L 486.608173 248.332684 
L 493.259049 240.28678 
L 499.909925 231.90712 
L 507.035863 222.558545 
L 514.161802 212.826833 
L 521.28774 202.711982 
L 528.413678 192.213992 
L 535.539616 181.332864 
L 543.140617 169.304025 
L 550.741618 156.839259 
L 558.342619 143.938567 
L 565.94362 130.601948 
L 573.544621 116.829404 
L 581.620684 101.718429 
L 589.696747 86.115335 
L 597.772811 70.020121 
L 605.848874 53.432787 
L 613.924937 36.353333 
L 614.4 35.333333 
L 614.4 35.333333 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_32">
    <path d="M 44.8 35.333333 
L 53.351126 53.432787 
L 61.427189 70.020121 
L 69.503253 86.115335 
L 77.579316 101.718429 
L 85.655379 116.829404 
L 93.731443 131.448258 
L 101.332444 144.757631 
L 108.933445 157.631078 
L 116.534445 170.068599 
L 124.135446 182.070193 
L 131.736447 193.635861 
L 138.862385 204.082765 
L 145.988324 214.146531 
L 153.114262 223.827159 
L 160.2402 233.124648 
L 167.366138 242.038999 
L 174.017014 250.013384 
L 180.66789 257.654013 
L 187.318766 264.960886 
L 193.969641 271.934003 
L 200.620517 278.573364 
L 206.79633 284.439638 
L 212.972143 290.018131 
L 219.147957 295.308845 
L 225.32377 300.31178 
L 231.499583 305.026935 
L 234.349958 307.106099 
L 234.349958 307.106099 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_33">
    <path d="M 424.850042 307.106099 
L 431.025855 302.523765 
L 437.201668 297.653652 
L 443.377481 292.495759 
L 449.553294 287.050086 
L 455.729108 281.316635 
L 461.904921 275.295403 
L 468.555796 268.489164 
L 475.206672 261.349169 
L 481.857548 253.875418 
L 488.508424 246.067911 
L 495.159299 237.926648 
L 501.810175 229.451629 
L 508.936113 220.000884 
L 516.062052 210.167001 
L 523.18799 199.94998 
L 530.313928 189.349821 
L 537.439867 178.366523 
L 545.040867 166.228701 
L 552.641868 153.654954 
L 560.242869 140.64528 
L 567.84387 127.19968 
L 575.444871 113.318154 
L 583.520934 98.091387 
L 591.596997 82.372499 
L 599.673061 66.161492 
L 607.749124 49.458365 
L 614.4 35.333333 
L 614.4 35.333333 
" clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_gp1-patch_3">
    <path d="M 329.6 364 
L 329.6 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_gp1-patch_4">
    <path d="M 44.8 307.333333 
L 614.4 307.333333 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30b_gp1-text_15">
    <g style="fill: currentColor" transform="translate(240.666667 301.333333) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30b_gp1-DejaVuSans-Oblique-49" d="M 3059 4863 
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
      <path id="analisi1_lez30b_gp1-Cmsy10-49" d="M 225 347 
Q 184 359 184 409 
L 966 3316 
Q 1003 3434 1093 3506 
Q 1184 3578 1300 3578 
Q 1450 3578 1564 3479 
Q 1678 3381 1678 3231 
Q 1678 3166 1644 3084 
L 488 319 
Q 466 275 428 275 
Q 394 275 320 306 
Q 247 338 225 347 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_gp1-DejaVuSans-b" d="M 1984 4856 
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
      <path id="analisi1_lez30b_gp1-DejaVuSans-c9c" d="M 678 2272 
L 4684 2272 
L 4684 1741 
L 678 1741 
L 678 2272 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30b_gp1-DejaVuSans-c" d="M 513 4856 
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
      <path id="analisi1_lez30b_gp1-DejaVuSans-20" d="M 678 2906 
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
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-Oblique-49" transform="translate(0 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-Cmsy10-49" transform="translate(42.652786 41.865625) scale(0.7)"/>
     <use xlink:href="#analisi1_lez30b_gp1-Cmsy10-49" transform="translate(61.895951 41.865625) scale(0.7)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-b" transform="translate(83.87349 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-c9c" transform="translate(122.887161 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-14" transform="translate(206.676224 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-c" transform="translate(270.299271 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-20" transform="translate(328.795365 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(432.066849 0.565625)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-text_16">
    <g style="fill: currentColor" transform="translate(430.533333 301.333333) scale(0.11 -0.11)">
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-Oblique-49" transform="translate(0 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-Cmsy10-49" transform="translate(42.652786 41.865625) scale(0.7)"/>
     <use xlink:href="#analisi1_lez30b_gp1-Cmsy10-49" transform="translate(61.895951 41.865625) scale(0.7)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-b" transform="translate(83.87349 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-14" transform="translate(122.887161 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-c" transform="translate(186.510208 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-20" transform="translate(245.006302 0.565625)"/>
     <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-13" transform="translate(348.277786 0.565625)"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_34">
    <defs>
     <path id="analisi1_lez30b_gp1-mbf61143193" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)">
     <use xlink:href="#analisi1_lez30b_gp1-mbf61143193" x="234.666667" y="307.333333" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-line2d_35">
    <g clip-path="url(#analisi1_lez30b_gp1-p1ac42a24e4)">
     <use xlink:href="#analisi1_lez30b_gp1-mbf61143193" x="424.533333" y="307.333333" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30b_gp1-legend_1">
    <g id="analisi1_lez30b_gp1-line2d_36">
     <path d="M 54.7 347.607422 
L 65.7 347.607422 
L 76.7 347.607422 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30b_gp1-text_17">
     <!-- f''(x) -->
     <g style="fill: currentColor" transform="translate(85.5 351.457422) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30b_gp1-DejaVuSans-49" d="M 2375 4863 
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
       <path id="analisi1_lez30b_gp1-DejaVuSans-a" d="M 1147 4666 
L 1147 2931 
L 616 2931 
L 616 4666 
L 1147 4666 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30b_gp1-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-49"/>
      <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-a" transform="translate(35.203125 0)"/>
      <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-a" transform="translate(62.6875 0)"/>
      <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-b" transform="translate(90.171875 0)"/>
      <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-5b" transform="translate(129.1875 0)"/>
      <use xlink:href="#analisi1_lez30b_gp1-DejaVuSans-c" transform="translate(188.375 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30b_gp1-p1ac42a24e4">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
      },
      {
        id: "s30-es-scritto-3",
        type: "esercizio",
        title: "Scritto 3",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Risolvi la disequazione $\\dfrac{x+2}{x-3} \\ge 0$ e, usando il risultato, determina il dominio di $g(x) = \\log\\left(\\dfrac{x+2}{x-3}\\right)$.</p>`,
        solution: `<p>Studio del segno dei due fattori: $N(x) = x+2 \\ge 0 \\iff x \\ge -2$ e $D(x) = x-3 \\gt 0 \\iff x \\gt 3$ (con $x=3$ sempre escluso, perché annulla il denominatore). La frazione è $\\ge 0$ dove numeratore e denominatore hanno lo stesso segno, oppure dove il numeratore è nullo:</p>
<p>$$\\frac{x+2}{x-3} \\ge 0 \\iff x \\le -2 \\ \\text{ oppure } \\ x \\gt 3$$</p>
<p>Per il dominio di $g$ serve la disuguaglianza <strong>stretta</strong>, perché l'argomento del logaritmo deve essere strettamente positivo: va escluso anche $x=-2$, dove la frazione vale $0$. Quindi</p>
<p>$$\\frac{x+2}{x-3} \\gt 0 \\iff x \\lt -2 \\ \\text{ oppure } \\ x \\gt 3, \\qquad D_g = (-\\infty,-2)\\cup(3,+\\infty)$$</p>
<p>Controllo rapido con due valori: in $x=-4$ si ha $\\frac{-2}{-7} = \\frac{2}{7} \\gt 0$ (accettabile); in $x=0$ si ha $\\frac{2}{-3} \\lt 0$ (non accettabile).</p>
<figure class="figura" data-id="analisi1_lez30c_gp1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="640pt" height="400pt" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
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
 <g id="analisi1_lez30c_gp1-figure_1">
  <g id="analisi1_lez30c_gp1-patch_1">
   <path d="M 0 400 
L 640 400 
L 640 0 
L 0 0 
L 0 400 
z
" style="fill: none; opacity: 0"/>
  </g>
  <g id="analisi1_lez30c_gp1-axes_1">
   <g id="analisi1_lez30c_gp1-patch_2">
    <path d="M 44.8 364 
L 614.4 364 
L 614.4 24 
L 44.8 24 
L 44.8 364 
z
" style="fill: none"/>
   </g>
   <g id="analisi1_lez30c_gp1-FillBetweenPolyCollection_1">
    <defs>
     <path id="analisi1_lez30c_gp1-ma41d35a1e0" d="M 44.8 -206 
L 44.8 -221.454545 
L 45.754104 -221.419148 
L 46.708208 -221.383555 
L 47.662312 -221.347766 
L 48.616415 -221.311778 
L 49.570519 -221.275591 
L 50.524623 -221.239201 
L 51.478727 -221.202608 
L 52.432831 -221.16581 
L 53.386935 -221.128806 
L 54.341039 -221.091592 
L 55.295142 -221.054169 
L 56.249246 -221.016533 
L 57.20335 -220.978683 
L 58.157454 -220.940618 
L 59.111558 -220.902334 
L 60.065662 -220.863832 
L 61.019765 -220.825108 
L 61.973869 -220.78616 
L 62.927973 -220.746988 
L 63.882077 -220.707588 
L 64.836181 -220.667959 
L 65.790285 -220.628099 
L 66.744389 -220.588006 
L 67.698492 -220.547677 
L 68.652596 -220.507111 
L 69.6067 -220.466306 
L 70.560804 -220.425259 
L 71.514908 -220.383968 
L 72.469012 -220.342432 
L 73.423116 -220.300647 
L 74.377219 -220.258612 
L 75.331323 -220.216324 
L 76.285427 -220.173782 
L 77.239531 -220.130982 
L 78.193635 -220.087923 
L 79.147739 -220.044602 
L 80.101843 -220.001017 
L 81.055946 -219.957165 
L 82.01005 -219.913043 
L 82.964154 -219.868651 
L 83.918258 -219.823984 
L 84.872362 -219.77904 
L 85.826466 -219.733817 
L 86.78057 -219.688312 
L 87.734673 -219.642522 
L 88.688777 -219.596445 
L 89.642881 -219.550079 
L 90.596985 -219.503419 
L 91.551089 -219.456464 
L 92.505193 -219.409211 
L 93.459296 -219.361657 
L 94.4134 -219.313799 
L 95.367504 -219.265633 
L 96.321608 -219.217158 
L 97.275712 -219.16837 
L 98.229816 -219.119266 
L 99.18392 -219.069843 
L 100.138023 -219.020098 
L 101.092127 -218.970027 
L 102.046231 -218.919628 
L 103.000335 -218.868897 
L 103.954439 -218.817832 
L 104.908543 -218.766427 
L 105.862647 -218.714681 
L 106.81675 -218.66259 
L 107.770854 -218.610151 
L 108.724958 -218.557359 
L 109.679062 -218.504211 
L 110.633166 -218.450704 
L 111.58727 -218.396834 
L 112.541374 -218.342598 
L 113.495477 -218.287991 
L 114.449581 -218.23301 
L 115.403685 -218.17765 
L 116.357789 -218.121909 
L 117.311893 -218.065782 
L 118.265997 -218.009265 
L 119.220101 -217.952353 
L 120.174204 -217.895044 
L 121.128308 -217.837332 
L 122.082412 -217.779213 
L 123.036516 -217.720684 
L 123.99062 -217.661739 
L 124.944724 -217.602374 
L 125.898827 -217.542585 
L 126.852931 -217.482367 
L 127.807035 -217.421716 
L 128.761139 -217.360626 
L 129.715243 -217.299094 
L 130.669347 -217.237113 
L 131.623451 -217.17468 
L 132.577554 -217.11179 
L 133.531658 -217.048437 
L 134.485762 -216.984615 
L 135.439866 -216.920321 
L 136.39397 -216.855549 
L 137.348074 -216.790292 
L 138.302178 -216.724547 
L 139.256281 -216.658307 
L 140.210385 -216.591567 
L 141.164489 -216.524321 
L 142.118593 -216.456563 
L 143.072697 -216.388288 
L 144.026801 -216.319489 
L 144.980905 -216.25016 
L 145.935008 -216.180296 
L 146.889112 -216.10989 
L 147.843216 -216.038936 
L 148.79732 -215.967427 
L 149.751424 -215.895356 
L 150.705528 -215.822718 
L 151.659631 -215.749506 
L 152.613735 -215.675711 
L 153.567839 -215.601329 
L 154.521943 -215.526351 
L 155.476047 -215.45077 
L 156.430151 -215.37458 
L 157.384255 -215.297772 
L 158.338358 -215.220339 
L 159.292462 -215.142274 
L 160.246566 -215.063568 
L 161.20067 -214.984214 
L 162.154774 -214.904204 
L 163.108878 -214.823529 
L 164.062982 -214.742182 
L 165.017085 -214.660154 
L 165.971189 -214.577435 
L 166.925293 -214.494018 
L 167.879397 -214.409894 
L 168.833501 -214.325053 
L 169.787605 -214.239487 
L 170.741709 -214.153185 
L 171.695812 -214.066139 
L 172.649916 -213.978339 
L 173.60402 -213.889775 
L 174.558124 -213.800437 
L 175.512228 -213.710315 
L 176.466332 -213.619398 
L 177.420436 -213.527675 
L 178.374539 -213.435137 
L 179.328643 -213.341772 
L 180.282747 -213.247569 
L 181.236851 -213.152517 
L 182.190955 -213.056604 
L 183.145059 -212.959818 
L 184.099162 -212.862148 
L 185.053266 -212.763581 
L 186.00737 -212.664105 
L 186.961474 -212.563707 
L 187.915578 -212.462374 
L 188.869682 -212.360094 
L 189.823786 -212.256852 
L 190.777889 -212.152636 
L 191.731993 -212.047431 
L 192.686097 -211.941223 
L 193.640201 -211.833998 
L 194.594305 -211.725742 
L 195.548409 -211.616438 
L 196.502513 -211.506073 
L 197.456616 -211.39463 
L 198.41072 -211.282093 
L 199.364824 -211.168447 
L 200.318928 -211.053675 
L 201.273032 -210.937759 
L 202.227136 -210.820684 
L 203.18124 -210.702431 
L 204.135343 -210.582982 
L 205.089447 -210.46232 
L 206.043551 -210.340426 
L 206.997655 -210.21728 
L 207.951759 -210.092863 
L 208.905863 -209.967156 
L 209.859966 -209.840139 
L 210.81407 -209.71179 
L 211.768174 -209.58209 
L 212.722278 -209.451015 
L 213.676382 -209.318545 
L 214.630486 -209.184657 
L 215.58459 -209.049327 
L 216.538693 -208.912534 
L 217.492797 -208.774252 
L 218.446901 -208.634458 
L 219.401005 -208.493126 
L 220.355109 -208.35023 
L 221.309213 -208.205746 
L 222.263317 -208.059646 
L 223.21742 -207.911903 
L 224.171524 -207.762488 
L 225.125628 -207.611374 
L 226.079732 -207.458532 
L 227.033836 -207.303931 
L 227.98794 -207.147541 
L 228.942044 -206.989331 
L 229.896147 -206.829268 
L 230.850251 -206.667321 
L 231.804355 -206.503455 
L 232.758459 -206.337637 
L 233.712563 -206.16983 
L 234.666667 -206 
L 234.666667 -206 
L 234.666667 -206 
L 233.712563 -206 
L 232.758459 -206 
L 231.804355 -206 
L 230.850251 -206 
L 229.896147 -206 
L 228.942044 -206 
L 227.98794 -206 
L 227.033836 -206 
L 226.079732 -206 
L 225.125628 -206 
L 224.171524 -206 
L 223.21742 -206 
L 222.263317 -206 
L 221.309213 -206 
L 220.355109 -206 
L 219.401005 -206 
L 218.446901 -206 
L 217.492797 -206 
L 216.538693 -206 
L 215.58459 -206 
L 214.630486 -206 
L 213.676382 -206 
L 212.722278 -206 
L 211.768174 -206 
L 210.81407 -206 
L 209.859966 -206 
L 208.905863 -206 
L 207.951759 -206 
L 206.997655 -206 
L 206.043551 -206 
L 205.089447 -206 
L 204.135343 -206 
L 203.18124 -206 
L 202.227136 -206 
L 201.273032 -206 
L 200.318928 -206 
L 199.364824 -206 
L 198.41072 -206 
L 197.456616 -206 
L 196.502513 -206 
L 195.548409 -206 
L 194.594305 -206 
L 193.640201 -206 
L 192.686097 -206 
L 191.731993 -206 
L 190.777889 -206 
L 189.823786 -206 
L 188.869682 -206 
L 187.915578 -206 
L 186.961474 -206 
L 186.00737 -206 
L 185.053266 -206 
L 184.099162 -206 
L 183.145059 -206 
L 182.190955 -206 
L 181.236851 -206 
L 180.282747 -206 
L 179.328643 -206 
L 178.374539 -206 
L 177.420436 -206 
L 176.466332 -206 
L 175.512228 -206 
L 174.558124 -206 
L 173.60402 -206 
L 172.649916 -206 
L 171.695812 -206 
L 170.741709 -206 
L 169.787605 -206 
L 168.833501 -206 
L 167.879397 -206 
L 166.925293 -206 
L 165.971189 -206 
L 165.017085 -206 
L 164.062982 -206 
L 163.108878 -206 
L 162.154774 -206 
L 161.20067 -206 
L 160.246566 -206 
L 159.292462 -206 
L 158.338358 -206 
L 157.384255 -206 
L 156.430151 -206 
L 155.476047 -206 
L 154.521943 -206 
L 153.567839 -206 
L 152.613735 -206 
L 151.659631 -206 
L 150.705528 -206 
L 149.751424 -206 
L 148.79732 -206 
L 147.843216 -206 
L 146.889112 -206 
L 145.935008 -206 
L 144.980905 -206 
L 144.026801 -206 
L 143.072697 -206 
L 142.118593 -206 
L 141.164489 -206 
L 140.210385 -206 
L 139.256281 -206 
L 138.302178 -206 
L 137.348074 -206 
L 136.39397 -206 
L 135.439866 -206 
L 134.485762 -206 
L 133.531658 -206 
L 132.577554 -206 
L 131.623451 -206 
L 130.669347 -206 
L 129.715243 -206 
L 128.761139 -206 
L 127.807035 -206 
L 126.852931 -206 
L 125.898827 -206 
L 124.944724 -206 
L 123.99062 -206 
L 123.036516 -206 
L 122.082412 -206 
L 121.128308 -206 
L 120.174204 -206 
L 119.220101 -206 
L 118.265997 -206 
L 117.311893 -206 
L 116.357789 -206 
L 115.403685 -206 
L 114.449581 -206 
L 113.495477 -206 
L 112.541374 -206 
L 111.58727 -206 
L 110.633166 -206 
L 109.679062 -206 
L 108.724958 -206 
L 107.770854 -206 
L 106.81675 -206 
L 105.862647 -206 
L 104.908543 -206 
L 103.954439 -206 
L 103.000335 -206 
L 102.046231 -206 
L 101.092127 -206 
L 100.138023 -206 
L 99.18392 -206 
L 98.229816 -206 
L 97.275712 -206 
L 96.321608 -206 
L 95.367504 -206 
L 94.4134 -206 
L 93.459296 -206 
L 92.505193 -206 
L 91.551089 -206 
L 90.596985 -206 
L 89.642881 -206 
L 88.688777 -206 
L 87.734673 -206 
L 86.78057 -206 
L 85.826466 -206 
L 84.872362 -206 
L 83.918258 -206 
L 82.964154 -206 
L 82.01005 -206 
L 81.055946 -206 
L 80.101843 -206 
L 79.147739 -206 
L 78.193635 -206 
L 77.239531 -206 
L 76.285427 -206 
L 75.331323 -206 
L 74.377219 -206 
L 73.423116 -206 
L 72.469012 -206 
L 71.514908 -206 
L 70.560804 -206 
L 69.6067 -206 
L 68.652596 -206 
L 67.698492 -206 
L 66.744389 -206 
L 65.790285 -206 
L 64.836181 -206 
L 63.882077 -206 
L 62.927973 -206 
L 61.973869 -206 
L 61.019765 -206 
L 60.065662 -206 
L 59.111558 -206 
L 58.157454 -206 
L 57.20335 -206 
L 56.249246 -206 
L 55.295142 -206 
L 54.341039 -206 
L 53.386935 -206 
L 52.432831 -206 
L 51.478727 -206 
L 50.524623 -206 
L 49.570519 -206 
L 48.616415 -206 
L 47.662312 -206 
L 46.708208 -206 
L 45.754104 -206 
L 44.8 -206 
z
"/>
    </defs>
    <g clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)">
     <use xlink:href="#analisi1_lez30c_gp1-ma41d35a1e0" x="0" y="400" style="fill: #7c4dff; fill-opacity: 0.15"/>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-FillBetweenPolyCollection_2">
    <path d="M 394.00201 194 
L 394.00201 -3861.714286 
L 395.115131 -1848.02381 
L 396.228252 -1176.793651 
L 397.341374 -841.178571 
L 398.454495 -639.809524 
L 399.567616 -505.563492 
L 400.680737 -409.673469 
L 401.793858 -337.755952 
L 402.906979 -281.820106 
L 404.020101 -237.071429 
L 405.133222 -200.458874 
L 406.246343 -169.948413 
L 407.359464 -144.131868 
L 408.472585 -122.003401 
L 409.585706 -102.825397 
L 410.698827 -86.044643 
L 411.811949 -71.238095 
L 412.92507 -58.07672 
L 414.038191 -46.300752 
L 415.151312 -35.702381 
L 416.264433 -26.113379 
L 417.377554 -17.396104 
L 418.490676 -9.436853 
L 419.603797 -2.140873 
L 420.716918 4.571429 
L 421.830039 10.767399 
L 422.94316 16.504409 
L 424.056281 21.831633 
L 425.169403 26.791461 
L 426.282524 31.420635 
L 427.395645 35.751152 
L 428.508766 39.811012 
L 429.621887 43.62482 
L 430.735008 47.214286 
L 431.84813 50.598639 
L 432.961251 53.794974 
L 434.074372 56.818533 
L 435.187493 59.682957 
L 436.300614 62.400488 
L 437.413735 64.982143 
L 438.526857 67.437863 
L 439.639978 69.776644 
L 440.753099 72.006645 
L 441.86622 74.135281 
L 442.979341 76.169312 
L 444.092462 78.114907 
L 445.205583 79.97771 
L 446.318705 81.762897 
L 447.431826 83.475219 
L 448.544947 85.119048 
L 449.658068 86.698413 
L 450.771189 88.217033 
L 451.88431 89.678347 
L 452.997432 91.085538 
L 454.110553 92.441558 
L 455.223674 93.74915 
L 456.336795 95.01086 
L 457.449916 96.229064 
L 458.563037 97.405973 
L 459.676159 98.543651 
L 460.78928 99.644028 
L 461.902401 100.708909 
L 463.015522 101.739985 
L 464.128643 102.738839 
L 465.241764 103.70696 
L 466.354886 104.645743 
L 467.468007 105.556503 
L 468.581128 106.440476 
L 469.694249 107.298827 
L 470.80737 108.132653 
L 471.920491 108.942991 
L 473.033613 109.73082 
L 474.146734 110.497065 
L 475.259855 111.2426 
L 476.372976 111.968254 
L 477.486097 112.674812 
L 478.599218 113.363018 
L 479.712339 114.033578 
L 480.825461 114.687161 
L 481.938582 115.324405 
L 483.051703 115.945914 
L 484.164824 116.552265 
L 485.277945 117.144005 
L 486.391066 117.721655 
L 487.504188 118.285714 
L 488.617309 118.836656 
L 489.73043 119.374932 
L 490.843551 119.900974 
L 491.956672 120.415195 
L 493.069793 120.917989 
L 494.182915 121.409733 
L 495.296036 121.890787 
L 496.409157 122.361495 
L 497.522278 122.822188 
L 498.635399 123.273183 
L 499.74852 123.714782 
L 500.861642 124.147275 
L 501.974763 124.570943 
L 503.087884 124.986051 
L 504.201005 125.392857 
L 505.314126 125.791608 
L 506.427247 126.18254 
L 507.540369 126.565881 
L 508.65349 126.94185 
L 509.766611 127.310658 
L 510.879732 127.672507 
L 511.992853 128.027592 
L 513.105974 128.376102 
L 514.219095 128.718218 
L 515.332217 129.054113 
L 516.445338 129.383955 
L 517.558459 129.707908 
L 518.67158 130.026127 
L 519.784701 130.338764 
L 520.897822 130.645963 
L 522.010944 130.947865 
L 523.124065 131.244607 
L 524.237186 131.53632 
L 525.350307 131.823129 
L 526.463428 132.105159 
L 527.576549 132.382527 
L 528.689671 132.655347 
L 529.802792 132.923732 
L 530.915913 133.187788 
L 532.029034 133.447619 
L 533.142155 133.703326 
L 534.255276 133.955006 
L 535.368398 134.202753 
L 536.481519 134.446659 
L 537.59464 134.686813 
L 538.707761 134.923301 
L 539.820882 135.156205 
L 540.934003 135.385607 
L 542.047125 135.611585 
L 543.160246 135.834215 
L 544.273367 136.053571 
L 545.386488 136.269725 
L 546.499609 136.482747 
L 547.61273 136.692703 
L 548.725851 136.89966 
L 549.838973 137.103681 
L 550.952094 137.304829 
L 552.065215 137.503164 
L 553.178336 137.698743 
L 554.291457 137.891626 
L 555.404578 138.081866 
L 556.5177 138.269517 
L 557.630821 138.454633 
L 558.743942 138.637264 
L 559.857063 138.81746 
L 560.970184 138.99527 
L 562.083305 139.170739 
L 563.196427 139.343915 
L 564.309548 139.514842 
L 565.422669 139.683564 
L 566.53579 139.850122 
L 567.648911 140.014559 
L 568.762032 140.176914 
L 569.875154 140.337227 
L 570.988275 140.495536 
L 572.101396 140.651878 
L 573.214517 140.80629 
L 574.327638 140.958808 
L 575.440759 141.109466 
L 576.553881 141.258297 
L 577.667002 141.405336 
L 578.780123 141.550613 
L 579.893244 141.694161 
L 581.006365 141.83601 
L 582.119486 141.97619 
L 583.232607 142.114731 
L 584.345729 142.251661 
L 585.45885 142.387008 
L 586.571971 142.520799 
L 587.685092 142.653061 
L 588.798213 142.78382 
L 589.911334 142.913102 
L 591.024456 143.040931 
L 592.137577 143.167332 
L 593.250698 143.292328 
L 594.363819 143.415943 
L 595.47694 143.5382 
L 596.590061 143.65912 
L 597.703183 143.778727 
L 598.816304 143.89704 
L 599.929425 144.014081 
L 601.042546 144.12987 
L 602.155667 144.244428 
L 603.268788 144.357773 
L 604.38191 144.469925 
L 605.495031 144.580903 
L 606.608152 144.690724 
L 607.721273 144.799408 
L 608.834394 144.906971 
L 609.947515 145.013431 
L 611.060637 145.118805 
L 612.173758 145.223109 
L 613.286879 145.326359 
L 614.4 145.428571 
L 614.4 194 
L 614.4 194 
L 613.286879 194 
L 612.173758 194 
L 611.060637 194 
L 609.947515 194 
L 608.834394 194 
L 607.721273 194 
L 606.608152 194 
L 605.495031 194 
L 604.38191 194 
L 603.268788 194 
L 602.155667 194 
L 601.042546 194 
L 599.929425 194 
L 598.816304 194 
L 597.703183 194 
L 596.590061 194 
L 595.47694 194 
L 594.363819 194 
L 593.250698 194 
L 592.137577 194 
L 591.024456 194 
L 589.911334 194 
L 588.798213 194 
L 587.685092 194 
L 586.571971 194 
L 585.45885 194 
L 584.345729 194 
L 583.232607 194 
L 582.119486 194 
L 581.006365 194 
L 579.893244 194 
L 578.780123 194 
L 577.667002 194 
L 576.553881 194 
L 575.440759 194 
L 574.327638 194 
L 573.214517 194 
L 572.101396 194 
L 570.988275 194 
L 569.875154 194 
L 568.762032 194 
L 567.648911 194 
L 566.53579 194 
L 565.422669 194 
L 564.309548 194 
L 563.196427 194 
L 562.083305 194 
L 560.970184 194 
L 559.857063 194 
L 558.743942 194 
L 557.630821 194 
L 556.5177 194 
L 555.404578 194 
L 554.291457 194 
L 553.178336 194 
L 552.065215 194 
L 550.952094 194 
L 549.838973 194 
L 548.725851 194 
L 547.61273 194 
L 546.499609 194 
L 545.386488 194 
L 544.273367 194 
L 543.160246 194 
L 542.047125 194 
L 540.934003 194 
L 539.820882 194 
L 538.707761 194 
L 537.59464 194 
L 536.481519 194 
L 535.368398 194 
L 534.255276 194 
L 533.142155 194 
L 532.029034 194 
L 530.915913 194 
L 529.802792 194 
L 528.689671 194 
L 527.576549 194 
L 526.463428 194 
L 525.350307 194 
L 524.237186 194 
L 523.124065 194 
L 522.010944 194 
L 520.897822 194 
L 519.784701 194 
L 518.67158 194 
L 517.558459 194 
L 516.445338 194 
L 515.332217 194 
L 514.219095 194 
L 513.105974 194 
L 511.992853 194 
L 510.879732 194 
L 509.766611 194 
L 508.65349 194 
L 507.540369 194 
L 506.427247 194 
L 505.314126 194 
L 504.201005 194 
L 503.087884 194 
L 501.974763 194 
L 500.861642 194 
L 499.74852 194 
L 498.635399 194 
L 497.522278 194 
L 496.409157 194 
L 495.296036 194 
L 494.182915 194 
L 493.069793 194 
L 491.956672 194 
L 490.843551 194 
L 489.73043 194 
L 488.617309 194 
L 487.504188 194 
L 486.391066 194 
L 485.277945 194 
L 484.164824 194 
L 483.051703 194 
L 481.938582 194 
L 480.825461 194 
L 479.712339 194 
L 478.599218 194 
L 477.486097 194 
L 476.372976 194 
L 475.259855 194 
L 474.146734 194 
L 473.033613 194 
L 471.920491 194 
L 470.80737 194 
L 469.694249 194 
L 468.581128 194 
L 467.468007 194 
L 466.354886 194 
L 465.241764 194 
L 464.128643 194 
L 463.015522 194 
L 461.902401 194 
L 460.78928 194 
L 459.676159 194 
L 458.563037 194 
L 457.449916 194 
L 456.336795 194 
L 455.223674 194 
L 454.110553 194 
L 452.997432 194 
L 451.88431 194 
L 450.771189 194 
L 449.658068 194 
L 448.544947 194 
L 447.431826 194 
L 446.318705 194 
L 445.205583 194 
L 444.092462 194 
L 442.979341 194 
L 441.86622 194 
L 440.753099 194 
L 439.639978 194 
L 438.526857 194 
L 437.413735 194 
L 436.300614 194 
L 435.187493 194 
L 434.074372 194 
L 432.961251 194 
L 431.84813 194 
L 430.735008 194 
L 429.621887 194 
L 428.508766 194 
L 427.395645 194 
L 426.282524 194 
L 425.169403 194 
L 424.056281 194 
L 422.94316 194 
L 421.830039 194 
L 420.716918 194 
L 419.603797 194 
L 418.490676 194 
L 417.377554 194 
L 416.264433 194 
L 415.151312 194 
L 414.038191 194 
L 412.92507 194 
L 411.811949 194 
L 410.698827 194 
L 409.585706 194 
L 408.472585 194 
L 407.359464 194 
L 406.246343 194 
L 405.133222 194 
L 404.020101 194 
L 402.906979 194 
L 401.793858 194 
L 400.680737 194 
L 399.567616 194 
L 398.454495 194 
L 397.341374 194 
L 396.228252 194 
L 395.115131 194 
L 394.00201 194 
z
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: #7c4dff; fill-opacity: 0.15"/>
   </g>
   <g id="analisi1_lez30c_gp1-matplotlib.axis_1">
    <g id="analisi1_lez30c_gp1-xtick_1">
     <g id="analisi1_lez30c_gp1-line2d_1">
      <path d="M 44.8 364 
L 44.8 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_2">
      <defs>
       <path id="analisi1_lez30c_gp1-m3c6d8c2b02" d="M 0 0 
L 0 3 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="44.8" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_1">
      <!-- -8 -->
      <g style="fill: currentColor" transform="translate(39.316328 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-10" d="M 313 2009 
L 1997 2009 
L 1997 1497 
L 313 1497 
L 313 2009 
z
" transform="scale(0.015625)"/>
        <path id="analisi1_lez30c_gp1-DejaVuSans-1b" d="M 2034 2216 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-1b" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_2">
     <g id="analisi1_lez30c_gp1-line2d_3">
      <path d="M 108.088889 364 
L 108.088889 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_4">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="108.088889" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_2">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(102.605217 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-19" d="M 2113 2584 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_3">
     <g id="analisi1_lez30c_gp1-line2d_5">
      <path d="M 171.377778 364 
L 171.377778 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_6">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="171.377778" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_3">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(165.894106 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-17" d="M 2419 4116 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-17" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_4">
     <g id="analisi1_lez30c_gp1-line2d_7">
      <path d="M 234.666667 364 
L 234.666667 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_8">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="234.666667" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_4">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(229.182995 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-15" d="M 1228 531 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_5">
     <g id="analisi1_lez30c_gp1-line2d_9">
      <path d="M 297.955556 364 
L 297.955556 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_10">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="297.955556" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_5">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(294.456181 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-13" d="M 2034 4250 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_6">
     <g id="analisi1_lez30c_gp1-line2d_11">
      <path d="M 361.244444 364 
L 361.244444 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_12">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="361.244444" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_6">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(357.745069 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_7">
     <g id="analisi1_lez30c_gp1-line2d_13">
      <path d="M 392.888889 364 
L 392.888889 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_14">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="392.888889" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_7">
      <!-- 3 -->
      <g style="fill: currentColor" transform="translate(389.389514 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-16" d="M 2597 2516 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-16"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_8">
     <g id="analisi1_lez30c_gp1-line2d_15">
      <path d="M 424.533333 364 
L 424.533333 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_16">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="424.533333" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_8">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(421.033958 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_9">
     <g id="analisi1_lez30c_gp1-line2d_17">
      <path d="M 487.822222 364 
L 487.822222 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_18">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="487.822222" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_9">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(484.322847 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-19"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_10">
     <g id="analisi1_lez30c_gp1-line2d_19">
      <path d="M 551.111111 364 
L 551.111111 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_20">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="551.111111" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_10">
      <!-- 8 -->
      <g style="fill: currentColor" transform="translate(547.611736 208.857422) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-1b"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-xtick_11">
     <g id="analisi1_lez30c_gp1-line2d_21">
      <path d="M 614.4 364 
L 614.4 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_22">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m3c6d8c2b02" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_11">
      <!-- 10 -->
      <g style="fill: currentColor" transform="translate(607.40125 208.857422) scale(0.11 -0.11)">
       <defs>
        <path id="analisi1_lez30c_gp1-DejaVuSans-14" d="M 794 531 
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
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-14"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-13" transform="translate(63.625 0)"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-matplotlib.axis_2">
    <g id="analisi1_lez30c_gp1-ytick_1">
     <g id="analisi1_lez30c_gp1-line2d_23">
      <path d="M 44.8 364 
L 614.4 364 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_24">
      <defs>
       <path id="analisi1_lez30c_gp1-m62ade4164f" d="M 0 0 
L -3 0 
" style="stroke: currentColor; stroke-width: 0.8"/>
      </defs>
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="364" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_12">
      <!-- -6 -->
      <g style="fill: currentColor" transform="translate(280.488212 368.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-19" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_2">
     <g id="analisi1_lez30c_gp1-line2d_25">
      <path d="M 44.8 307.333333 
L 614.4 307.333333 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_26">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="307.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_13">
      <!-- -4 -->
      <g style="fill: currentColor" transform="translate(280.488212 311.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-17" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_3">
     <g id="analisi1_lez30c_gp1-line2d_27">
      <path d="M 44.8 250.666667 
L 614.4 250.666667 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_28">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="250.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_14">
      <!-- -2 -->
      <g style="fill: currentColor" transform="translate(280.488212 254.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10"/>
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-15" transform="translate(36.078125 0)"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_4">
     <g id="analisi1_lez30c_gp1-line2d_29">
      <path d="M 44.8 194 
L 614.4 194 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_30">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="194" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_15">
      <!-- 0 -->
      <g style="fill: currentColor" transform="translate(284.456806 198.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-13"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_5">
     <g id="analisi1_lez30c_gp1-line2d_31">
      <path d="M 44.8 165.666667 
L 614.4 165.666667 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_32">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="165.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_16">
      <!-- 1 -->
      <g style="fill: currentColor" transform="translate(284.456806 169.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-14"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_6">
     <g id="analisi1_lez30c_gp1-line2d_33">
      <path d="M 44.8 137.333333 
L 614.4 137.333333 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_34">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="137.333333" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_17">
      <!-- 2 -->
      <g style="fill: currentColor" transform="translate(284.456806 141.512044) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-15"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_7">
     <g id="analisi1_lez30c_gp1-line2d_35">
      <path d="M 44.8 80.666667 
L 614.4 80.666667 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_36">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="80.666667" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_18">
      <!-- 4 -->
      <g style="fill: currentColor" transform="translate(284.456806 84.845378) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-17"/>
      </g>
     </g>
    </g>
    <g id="analisi1_lez30c_gp1-ytick_8">
     <g id="analisi1_lez30c_gp1-line2d_37">
      <path d="M 44.8 24 
L 614.4 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #9aa4b2; stroke-opacity: 0.3; stroke-width: 0.6; stroke-linecap: square"/>
     </g>
     <g id="analisi1_lez30c_gp1-line2d_38">
      <g>
       <use xlink:href="#analisi1_lez30c_gp1-m62ade4164f" x="297.955556" y="24" style="fill: currentColor; stroke: currentColor; stroke-width: 0.8"/>
      </g>
     </g>
     <g id="analisi1_lez30c_gp1-text_19">
      <!-- 6 -->
      <g style="fill: currentColor" transform="translate(284.456806 28.178711) scale(0.11 -0.11)">
       <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-19"/>
      </g>
     </g>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_39">
    <defs>
     <path id="analisi1_lez30c_gp1-m5d959a7ee1" d="M 3 0 
L -3 -3 
L -3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30c_gp1-m5d959a7ee1" x="614.4" y="194" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_40">
    <defs>
     <path id="analisi1_lez30c_gp1-mffbf4d050f" d="M 0 -3 
L -3 3 
L 3 3 
z
" style="stroke: currentColor; stroke-linejoin: miter"/>
    </defs>
    <g>
     <use xlink:href="#analisi1_lez30c_gp1-mffbf4d050f" x="297.955556" y="24" style="fill: currentColor; stroke: currentColor; stroke-linejoin: miter"/>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_41">
    <path d="M 44.8 178.545455 
L 75.679066 179.799151 
L 102.757631 181.118166 
L 126.510759 182.495987 
L 147.413511 183.92904 
L 165.940951 185.419933 
L 182.56814 186.981554 
L 197.295079 188.586426 
L 210.596831 190.258868 
L 222.473394 191.972743 
L 233.399833 193.774946 
L 243.376147 195.650485 
L 252.402335 197.57693 
L 260.478399 199.523221 
L 268.079399 201.585113 
L 274.730275 203.60688 
L 280.906088 205.699269 
L 286.606839 207.846536 
L 292.30759 210.237208 
L 297.533278 212.679768 
L 302.283903 215.144771 
L 306.559466 217.595231 
L 310.835029 220.301061 
L 314.63553 222.954469 
L 318.43603 225.878766 
L 321.761468 228.693878 
L 325.086906 231.78513 
L 328.412344 235.195252 
L 331.262719 238.411135 
L 334.113094 241.938931 
L 336.96347 245.826333 
L 339.813845 250.131278 
L 342.189158 254.088496 
L 344.56447 258.434735 
L 346.939783 263.230327 
L 349.315096 268.548758 
L 351.690409 274.480461 
L 354.065721 281.138001 
L 355.965972 287.080772 
L 357.866222 293.668425 
L 359.766472 301.011952 
L 361.666722 309.249366 
L 363.566972 318.554455 
L 365.467223 329.149182 
L 367.367473 341.321613 
L 368.792661 351.710843 
L 370.217848 363.406286 
L 371.643036 376.670807 
L 373.068224 391.842876 
L 373.83669 401 
L 373.83669 401 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_42">
    <path d="M 419.788554 -1 
L 421.524604 9.115207 
L 423.424854 18.85739 
L 425.325104 27.458096 
L 427.225354 35.106841 
L 429.125605 41.953387 
L 431.025855 48.117647 
L 433.401168 55.009772 
L 435.77648 61.138462 
L 438.151793 66.623907 
L 440.527106 71.562327 
L 442.902419 76.031662 
L 445.277731 80.095718 
L 448.128107 84.511228 
L 450.978482 88.493412 
L 453.828857 92.103075 
L 456.679233 95.390153 
L 460.004671 98.872198 
L 463.330108 102.025478 
L 466.655546 104.894454 
L 470.456047 107.872065 
L 474.256547 110.571521 
L 478.53211 113.322034 
L 482.807673 115.810977 
L 487.558299 118.312796 
L 492.783987 120.78996 
L 498.009675 123.020839 
L 503.710425 125.214575 
L 509.886239 127.349876 
L 516.537114 129.410886 
L 523.663053 131.386478 
L 531.264053 133.269502 
L 539.815179 135.155021 
L 548.841368 136.920968 
L 558.817681 138.649276 
L 569.74412 140.31846 
L 582.095746 141.973218 
L 595.397498 143.529519 
L 610.124437 145.030251 
L 614.4 145.428571 
L 614.4 145.428571 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_43">
    <path d="M 392.888889 364 
L 392.888889 24 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_44">
    <path d="M 44.8 165.666667 
L 614.4 165.666667 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: #8b95a5"/>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_45">
    <path d="M 44.8 178.545455 
L 75.679066 179.799151 
L 102.757631 181.118166 
L 126.510759 182.495987 
L 147.413511 183.92904 
L 165.940951 185.419933 
L 182.56814 186.981554 
L 197.295079 188.586426 
L 210.596831 190.258868 
L 222.473394 191.972743 
L 233.399833 193.774946 
L 234.349958 193.943399 
L 234.349958 193.943399 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_46">
    <path d="M 419.788554 -1 
L 421.524604 9.115207 
L 423.424854 18.85739 
L 425.325104 27.458096 
L 427.225354 35.106841 
L 429.125605 41.953387 
L 431.025855 48.117647 
L 433.401168 55.009772 
L 435.77648 61.138462 
L 438.151793 66.623907 
L 440.527106 71.562327 
L 442.902419 76.031662 
L 445.277731 80.095718 
L 448.128107 84.511228 
L 450.978482 88.493412 
L 453.828857 92.103075 
L 456.679233 95.390153 
L 460.004671 98.872198 
L 463.330108 102.025478 
L 466.655546 104.894454 
L 470.456047 107.872065 
L 474.256547 110.571521 
L 478.53211 113.322034 
L 482.807673 115.810977 
L 487.558299 118.312796 
L 492.783987 120.78996 
L 498.009675 123.020839 
L 503.710425 125.214575 
L 509.886239 127.349876 
L 516.537114 129.410886 
L 523.663053 131.386478 
L 531.264053 133.269502 
L 539.815179 135.155021 
L 548.841368 136.920968 
L 558.817681 138.649276 
L 569.74412 140.31846 
L 582.095746 141.973218 
L 595.397498 143.529519 
L 610.124437 145.030251 
L 614.4 145.428571 
L 614.4 145.428571 
" clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)" style="fill: none; stroke: #7c4dff; stroke-opacity: 0.9; stroke-width: 3.6; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_gp1-patch_3">
    <path d="M 297.955556 364 
L 297.955556 24 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_gp1-patch_4">
    <path d="M 44.8 194 
L 614.4 194 
" style="fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linejoin: miter; stroke-linecap: square"/>
   </g>
   <g id="analisi1_lez30c_gp1-text_20">
    <!-- Zero -->
    <g style="fill: currentColor" transform="translate(240.666667 188) scale(0.11 -0.11)">
     <defs>
      <path id="analisi1_lez30c_gp1-DejaVuSans-3d" d="M 359 4666 
L 4025 4666 
L 4025 4184 
L 1075 531 
L 4097 531 
L 4097 0 
L 288 0 
L 288 481 
L 3238 4134 
L 359 4134 
L 359 4666 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30c_gp1-DejaVuSans-48" d="M 3597 1894 
L 3597 1613 
L 953 1613 
Q 991 1019 1311 708 
Q 1631 397 2203 397 
Q 2534 397 2845 478 
Q 3156 559 3463 722 
L 3463 178 
Q 3153 47 2828 -22 
Q 2503 -91 2169 -91 
Q 1331 -91 842 396 
Q 353 884 353 1716 
Q 353 2575 817 3079 
Q 1281 3584 2069 3584 
Q 2775 3584 3186 3129 
Q 3597 2675 3597 1894 
z
M 3022 2063 
Q 3016 2534 2758 2815 
Q 2500 3097 2075 3097 
Q 1594 3097 1305 2825 
Q 1016 2553 972 2059 
L 3022 2063 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30c_gp1-DejaVuSans-55" d="M 2631 2963 
Q 2534 3019 2420 3045 
Q 2306 3072 2169 3072 
Q 1681 3072 1420 2755 
Q 1159 2438 1159 1844 
L 1159 0 
L 581 0 
L 581 3500 
L 1159 3500 
L 1159 2956 
Q 1341 3275 1631 3429 
Q 1922 3584 2338 3584 
Q 2397 3584 2469 3576 
Q 2541 3569 2628 3553 
L 2631 2963 
z
" transform="scale(0.015625)"/>
      <path id="analisi1_lez30c_gp1-DejaVuSans-52" d="M 1959 3097 
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
     </defs>
     <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-3d"/>
     <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-48" transform="translate(68.5 0)"/>
     <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-55" transform="translate(130.03125 0)"/>
     <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-52" transform="translate(168.9375 0)"/>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-line2d_47">
    <defs>
     <path id="analisi1_lez30c_gp1-m2b134203c6" d="M 0 2.75 
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
    <g clip-path="url(#analisi1_lez30c_gp1-pe40447ee65)">
     <use xlink:href="#analisi1_lez30c_gp1-m2b134203c6" x="234.666667" y="194" style="fill: #7c4dff; stroke: #7c4dff"/>
    </g>
   </g>
   <g id="analisi1_lez30c_gp1-legend_1">
    <g id="analisi1_lez30c_gp1-line2d_48">
     <path d="M 512.6225 38.408281 
L 523.6225 38.408281 
L 534.6225 38.408281 
" style="fill: none; stroke: #7c4dff; stroke-width: 2; stroke-linecap: square"/>
    </g>
    <g id="analisi1_lez30c_gp1-text_21">
     <!-- (x+2)/(x-3) -->
     <g style="fill: currentColor" transform="translate(543.4225 42.258281) scale(0.11 -0.11)">
      <defs>
       <path id="analisi1_lez30c_gp1-DejaVuSans-b" d="M 1984 4856 
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
       <path id="analisi1_lez30c_gp1-DejaVuSans-5b" d="M 3513 3500 
L 2247 1797 
L 3578 0 
L 2900 0 
L 1881 1375 
L 863 0 
L 184 0 
L 1544 1831 
L 300 3500 
L 978 3500 
L 1906 2253 
L 2834 3500 
L 3513 3500 
z
" transform="scale(0.015625)"/>
       <path id="analisi1_lez30c_gp1-DejaVuSans-e" d="M 2944 4013 
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
       <path id="analisi1_lez30c_gp1-DejaVuSans-c" d="M 513 4856 
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
       <path id="analisi1_lez30c_gp1-DejaVuSans-12" d="M 1625 4666 
L 2156 4666 
L 531 -594 
L 0 -594 
L 1625 4666 
z
" transform="scale(0.015625)"/>
      </defs>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-b"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-5b" transform="translate(39.015625 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-e" transform="translate(98.203125 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-15" transform="translate(182 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-c" transform="translate(245.625 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-12" transform="translate(284.640625 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-b" transform="translate(318.328125 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-5b" transform="translate(357.34375 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-10" transform="translate(416.53125 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-16" transform="translate(452.609375 0)"/>
      <use xlink:href="#analisi1_lez30c_gp1-DejaVuSans-c" transform="translate(516.234375 0)"/>
     </g>
    </g>
   </g>
  </g>
 </g>
 <defs>
  <clipPath id="analisi1_lez30c_gp1-pe40447ee65">
   <rect x="44.8" y="24" width="569.6" height="340"/>
  </clipPath>
 </defs>
</svg></figure>`
      },
      {
        id: "s30-es-scritto-4",
        type: "esercizio",
        title: "Scritto 4",
        kind: "scritto",
        source: "integrazione",
        content: `<p>Determinare se $f(x) = |x|^3$ appartiene a $C^2(\\mathbb{R})$ e a $C^3(\\mathbb{R})$, verificando le derivate nell'origine mediante i rapporti incrementali.</p>`,
        solution: `<p>Per $x \\gt 0$ si ha $f(x) = x^3$, mentre per $x \\lt 0$ si ha $f(x) = -x^3$. Quindi, per $x \\neq 0$, risulta $f'(x) = 3x|x|$ e $f''(x) = 6|x|$.</p>
<p>Nell'origine, usando il rapporto incrementale,</p>
<p>$$f'(0) = \\lim_{h \\to 0} \\frac{|h|^3}{h} = 0$$</p>
<p>Utilizzando questa derivata,</p>
<p>$$f''(0) = \\lim_{h \\to 0} \\frac{3h|h|}{h} = \\lim_{h \\to 0} 3|h| = 0$$</p>
<p>Pertanto $f''(x) = 6|x|$ su tutta $\\mathbb{R}$ ed è continua: dunque $f \\in C^2(\\mathbb{R})$.</p>
<p>Per la derivata terza nell'origine occorrerebbe il limite $\\lim_{h \\to 0} \\frac{6|h|}{h}$, che vale $6$ da destra e $-6$ da sinistra. La derivata terza nell'origine <strong>non esiste</strong> e $f \\notin C^3(\\mathbb{R})$. Il grafico di $f''(x) = 6|x|$ mostra infatti lo <em>spigolo</em> nell'origine.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Che cos'è la derivata seconda di $f$ in $x_0$?",
        back: "Se $f$ è derivabile in un aperto $A$ e la funzione $f'$ è a sua volta derivabile in $x_0 \\in A$, si dice che $f$ è derivabile due volte in $x_0$ e si pone $$f''(x_0) := \\lim_{x \\to x_0} \\frac{f'(x) - f'(x_0)}{x - x_0}$$ purché il limite esista e sia finito. Notazioni equivalenti: $f''(x)$, $f^{(2)}(x)$, $D^2 f(x)$, $\\frac{d^2 f}{dx^2}(x)$."
      },
      {
        type: "definizione",
        front: "Che significa $f \\in C^2(A)$? E $f \\in C^\\infty(A)$?",
        back: "$f \\in C^2(A)$ se $f$ è derivabile due volte in ogni punto di $A$ e $f''$ è <em>continua</em> in $A$. $f \\in C^\\infty(A)$ se $f$ è derivabile infinite volte in $A$. Vale la catena $C^\\infty(A) \\subset \\dots \\subset C^n(A) \\subset \\dots \\subset C^1(A) \\subset C^0(A)$, dove $C^0$ sono le funzioni continue."
      },
      {
        type: "tranello",
        front: "Se $f'(x) \\lt 0$ su tutto il dominio, $f$ è necessariamente decrescente sul dominio?",
        back: "No: serve che il dominio sia un <strong>intervallo</strong>. Controesempio: $f(x) = 1/x$ ha $f'(x) = -1/x^2 \\lt 0$ su $D = \\mathbb{R}\\setminus\\{0\\}$, ma non è decrescente su $D$: infatti $-1 \\lt 1$ e $f(-1) = -1 \\lt 1 = f(1)$. È decrescente separatamente su $(-\\infty,0)$ e su $(0,+\\infty)$, non sulla loro unione."
      },
      {
        type: "definizione",
        front: "Dai la definizione geometrica e quella formale di funzione convessa su un intervallo $I$.",
        back: "$f$ è convessa in $I$ se, presi $x_1 \\lt x_2$ in $I$, il segmento che congiunge $(x_1,f(x_1))$ e $(x_2,f(x_2))$ sta <strong>al di sopra</strong> del grafico in $[x_1,x_2]$. Formalmente $$f(x) \\le f(x_1) + \\frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)$$ per ogni $x$ compreso tra $x_1$ e $x_2$. Concava: disuguaglianza $\\ge$ (segmento sotto il grafico). Nota: la definizione non richiede derivabilità."
      },
      {
        type: "domanda",
        front: "Quali proprietà di regolarità ha automaticamente una funzione convessa su un intervallo $I$?",
        back: "Nei punti <em>interni</em> a $I$: (1) esistono finite $f'_+(x)$ e $f'_-(x)$; (2) $f'_-(x) \\le f'_+(x)$; (3) $x \\mapsto f'_\\pm(x)$ sono crescenti; (4) $f$ è continua in ogni punto interno. Esempio: $|x|$ è convessa, non derivabile in $0$, ma $f'_-(0) = -1$ e $f'_+(0) = 1$. Agli estremi di $I$ una convessa può essere discontinua (es. $f(0)=1$, $f(x)=0$ su $(0,1]$)."
      },
      {
        type: "domanda",
        front: "Enuncia le tre condizioni equivalenti alla convessità per una funzione derivabile su $I$.",
        back: "Per $f$ derivabile su $I$ sono equivalenti: (1) $f$ è (strettamente) convessa in $I$; (2) $f'$ è (strettamente) crescente in $I$; (3) per ogni $x_0$ interno, $f(x) \\ge f(x_0) + f'(x_0)(x-x_0)$ per ogni $x \\in I$ (il grafico sta sopra le tangenti), con disuguaglianza stretta per $x \\ne x_0$ nel caso stretto. Le parentesi vanno lette tutte insieme o nessuna."
      },
      {
        type: "formula",
        front: "Criterio di convessità con la derivata seconda.",
        back: "Se $f$ è derivabile due volte in $I$: $f$ convessa in $I$ $\\iff f''(x) \\ge 0$ per ogni $x \\in I$; $f$ concava $\\iff f''(x) \\le 0$. Idea: $f$ convessa $\\iff f'$ crescente $\\iff (f')' = f'' \\ge 0$."
      },
      {
        type: "tranello",
        front: "$f$ strettamente convessa implica $f''(x) \\gt 0$ per ogni $x$?",
        back: "No. Vale solo l'implicazione $f'' \\gt 0$ su $I$ $\\Rightarrow$ $f$ strettamente convessa; non si inverte. Controesempio: $f(x) = x^4$ è strettamente convessa su $\\mathbb{R}$, ma $f''(x) = 12x^2$ e $f''(0) = 0$."
      },
      {
        type: "definizione",
        front: "Che cos'è un punto di flesso? Qual è la condizione necessaria e quale quella sufficiente?",
        back: "$x_0 \\in (a,b)$ è punto di flesso se esiste $\\delta \\gt 0$ tale che $f$ è convessa in $(x_0-\\delta,x_0)$ e concava in $(x_0,x_0+\\delta)$, o viceversa: cioè la concavità cambia. <strong>Necessaria:</strong> se $f$ è derivabile due volte in un intorno di $x_0$ e $x_0$ è flesso, allora $f''(x_0) = 0$. <strong>Sufficiente:</strong> se $f''(x_0) = 0$ <em>e</em> $f''$ cambia segno in $x_0$, allora $x_0$ è flesso."
      },
      {
        type: "tranello",
        front: "Se $f''(x_0) = 0$, allora $x_0$ è un punto di flesso?",
        back: "No: la condizione è necessaria ma non sufficiente. Serve il <strong>cambio di segno</strong> di $f''$. Per $f(x) = x^4$ si ha $f''(0) = 0$ ma $f'' = 12x^2 \\ge 0$ sempre: la funzione è convessa da entrambi i lati, quindi $x=0$ non è un flesso (è un minimo)."
      },
      {
        type: "domanda",
        front: "Enuncia il test della derivata seconda per gli estremi locali e spiega perché funziona.",
        back: "Sia $f \\in C^2(I)$, $x_0$ interno con $f'(x_0) = 0$. Se $f''(x_0) \\gt 0$, $x_0$ è minimo relativo; se $f''(x_0) \\lt 0$, è massimo relativo; se $f''(x_0) = 0$ il test è inconcludente. Perché: se $f''(x_0) \\gt 0$ e $f''$ è continua, allora $f'' \\gt 0$ in un intorno, dove $f$ è convessa; un punto critico di una funzione convessa è necessariamente un minimo (simmetricamente per il massimo)."
      },
      {
        type: "tranello",
        front: "Se $f'(x_0) = 0$ e $f''(x_0) = 0$, cosa si può concludere su $x_0$?",
        back: "Nulla: può succedere di tutto. Tre esempi con $f'(0) = f''(0) = 0$: $f(x) = x^4$ ha in $0$ un <strong>minimo</strong>; $f(x) = -x^4$ ha un <strong>massimo</strong>; $f(x) = x^3$ ha un <strong>flesso a tangente orizzontale</strong>. Bisogna tornare al segno di $f'$ o guardare le derivate di ordine superiore."
      },
      {
        type: "dimostrazione",
        front: "Perché $f'(x) \\ge 0$ su un intervallo aperto $I$ implica $f$ non decrescente?",
        back: "Siano $a \\lt b$ in $I$. Poiché $[a,b] \\subset I$, $f$ è continua su $[a,b]$ e derivabile su $(a,b)$: il teorema di Lagrange dà $c \\in (a,b)$ con $f(b) - f(a) = f'(c)(b-a) \\ge 0$, quindi $f(a) \\le f(b)$. L'ipotesi \"intervallo\" è essenziale: su $\\mathbb{R}\\setminus\\{0\\}$ la funzione $g(x) = -1/x$ ha $g' = 1/x^2 \\gt 0$ ma $g(-1) = 1 \\gt -1 = g(1)$."
      },
      {
        type: "domanda",
        front: "Nello studio di $f(x) = |x| + 3\\log\\frac{|x|-1}{|x|-2}$, come si determina il dominio e perché la parità aiuta?",
        back: "Serve $\\frac{|x|-1}{|x|-2} \\gt 0$ (che include già $|x| \\neq 2$). Poiché $x$ compare solo tramite $|x|$, la funzione è pari e il dominio è simmetrico: basta studiare $x \\ge 0$, dove $\\frac{x-1}{x-2} \\gt 0 \\iff x \\lt 1$ o $x \\gt 2$, da cui $D_{x\\ge0} = [0,1)\\cup(2,+\\infty)$. Per simmetria $D = (-\\infty,-2)\\cup(-1,1)\\cup(2,+\\infty)$. I limiti destri diventano sinistri e viceversa."
      },
      {
        type: "tranello",
        front: "È corretto scrivere $\\lim_{x\\to 2^+}\\left(x + 3\\log\\frac{x-1}{x-2}\\right) = 2 + 3\\log(+\\infty)$?",
        back: "No. Il simbolo $+\\infty$ non può essere inserito dentro una funzione come se fosse un valore della variabile. Si deve mantenere il simbolo di limite fino all'ultimo passaggio: prima $\\lim \\frac{x-1}{x-2} = +\\infty$, poi (limite di funzione composta) $\\lim 3\\log(\\cdot) = +\\infty$, e infine, per il teorema algebrico della somma (limite finito $+$ limite $+\\infty$), il risultato è $+\\infty$. La scrittura $2 + (+\\infty)$ è solo un'abbreviazione di quel teorema."
      },
      {
        type: "formula",
        front: "Come si cerca un asintoto obliquo $y = mx+q$ per $x \\to +\\infty$?",
        back: "Per definizione $y = mx+q$ è asintoto obliquo se $\\lim_{x\\to+\\infty}\\big(f(x) - (mx+q)\\big) = 0$. In pratica si calcolano nell'ordine $$m = \\lim_{x\\to+\\infty}\\frac{f(x)}{x}, \\qquad q = \\lim_{x\\to+\\infty}\\big(f(x) - mx\\big)$$ e la retta esiste se entrambi sono finiti, con $m \\neq 0$ (altrimenti è orizzontale). Per $f(x) = |x| + 3\\log\\frac{|x|-1}{|x|-2}$ si trova $m=1$, $q=0$: l'asintoto è $y = x$, avvicinato dall'alto con scarto $f(x)-x \\sim \\frac{3}{x-2}$."
      },
      {
        type: "dimostrazione",
        front: "Verifica che $f(x) = |x|^3$ sta in $C^2(\\mathbb{R})$ ma non in $C^3(\\mathbb{R})$.",
        back: "Per $x \\neq 0$: $f'(x) = 3x|x|$ e $f''(x) = 6|x|$. Nell'origine $f'(0) = \\lim_{h\\to0}\\frac{|h|^3}{h} = 0$ e $f''(0) = \\lim_{h\\to0}\\frac{3h|h|}{h} = \\lim_{h\\to0}3|h| = 0$. Dunque $f''(x) = 6|x|$ su tutto $\\mathbb{R}$ ed è continua: $f \\in C^2(\\mathbb{R})$. Ma $\\lim_{h\\to0}\\frac{6|h|}{h}$ vale $6$ da destra e $-6$ da sinistra: $f'''(0)$ non esiste, quindi $f \\notin C^3(\\mathbb{R})$."
      }
    ]
};

