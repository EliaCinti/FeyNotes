const LESSON = {
    id: "L02", date: "Lezione 2 — 4 Mar 2026",
    title: "Cinematica Vettoriale: Spostamento, Velocità e Problema Inverso",
    abstract: "Introduzione formale alla cinematica del punto materiale. Ripasso sui vettori nello spazio 3D e sulle proprietà dei coseni direttori. Definizione vettoriale di posizione, spostamento, velocità media e istantanea. Introduzione al problema inverso della cinematica tramite integrazione.",

    sections: [
      {
        id: "s1-strumenti",
        type: "section",
        title: "Introduzione agli Strumenti Matematici",
        icon: "🧮",
        content: `<p>Prima di iniziare a parlare di moti e traiettorie, è fondamentale padroneggiare il linguaggio con cui descriveremo la natura: i <strong>vettori</strong> e l'<strong>analisi matematica</strong>.</p>
        <p>In cinematica studiamo il moto in maniera <strong>deterministica</strong>: dato un punto di partenza e uno spostamento esatto, dobbiamo poter determinare il punto di arrivo in modo univoco. Per farlo ci servono grandezze vettoriali. Dire "mi sono spostato di 10 m" non basta. Devo specificare:</p>
        <p>• La <strong>direzione</strong> (es. la retta su cui mi muovo).</p>
        <p>• Il <strong>verso</strong> (verso Nord o verso Sud?).</p>
        <p>• Il <strong>modulo</strong> (l'entità dello spostamento, 10 m).</p>`,
        quote: {
          text: "\"Se voi dovete smontare la ruota di una macchina e non avete una chiave adatta, non la smontate... La matematica, la geometria, i vettori, sono gli strumenti indispensabili per poter studiare la fisica.\"",
          src: "— Prof. Mercuri, Lezione 2"
        }
      },
      {
        id: "s1-coseni",
        type: "section",
        title: "Vettori e Coseni Direttori nello Spazio 3D",
        icon: "📐",
        content: `<p>Un vettore generico $\\vec{r}$ in tre dimensioni può essere scomposto rispetto a una terna di versori cartesiani ortonormali $\\hat{i}, \\hat{j}, \\hat{k}$:</p>`,
        formulas: [
          { label: "Scomposizione vettore", latex: "\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}" },
          { label: "Modulo del vettore", latex: "|\\vec{r}| = \\sqrt{x^2 + y^2 + z^2}" }
        ],
        extra_content: `<p>dove $x, y, z$ sono le <strong>componenti scalari</strong> (proiezioni ortogonali) del vettore lungo gli assi. Il modulo si calcola con il teorema di Pitagora tridimensionale.</p>
        <p>Un modo alternativo per descrivere la direzione e il verso di un vettore è usare gli <strong>angoli</strong> che esso forma con gli assi cartesiani: $\\theta_x, \\theta_y, \\theta_z$. I coseni di questi angoli prendono il nome di <strong>coseni direttori</strong>. Dalla trigonometria:</p>
        <p>$$x = |\\vec{r}|\\cos\\theta_x \\qquad y = |\\vec{r}|\\cos\\theta_y \\qquad z = |\\vec{r}|\\cos\\theta_z$$</p>`
      },
      {
        id: "s1-trap-coseni",
        type: "alert_box",
        title: "🚨 I coseni direttori NON sono indipendenti",
        content: `<p>Ne bastano solo <strong>due</strong> per descrivere la direzione e il verso nello spazio; il terzo è vincolato.</p>
        <p><strong>Dimostrazione:</strong> Partiamo dal modulo al quadrato:</p>
        <p>$$|\\vec{r}|^2 = x^2 + y^2 + z^2 = |\\vec{r}|^2(\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z)$$</p>
        <p>Semplificando $|\\vec{r}|^2$ (per $|\\vec{r}| \\neq 0$) otteniamo la <strong>proprietà fondamentale</strong>:</p>
        <p>$$\\boxed{\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z = 1}$$</p>
        <p>Se il vettore giace nel piano $xy$ (cioè $z=0$), allora $\\theta_z = 90°$, $\\cos\\theta_z = 0$, e la relazione si riduce a $\\cos^2\\theta_x + \\cos^2\\theta_y = 1$, che implica $\\theta_y = 90° - \\theta_x$.</p>`
      },
      {
        id: "s1-fig-componenti",
        type: "section",
        title: "",
        icon: "",
        content: `<figure style="text-align: center; margin: 1.5rem 0;">
          <img src="../assets/L02/componenti-vettore.jpeg" alt="Scomposizione di un vettore nelle componenti lungo i e j con angoli direttori" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);">
          <figcaption style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Scomposizione del vettore $\\vec{r}$ nelle componenti lungo $\\hat{i}$ e $\\hat{j}$, con angoli direttori $\\theta_x$ e $\\theta_y$. Nel piano $xy$: $\\theta_z = 90°$, $\\cos\\theta_z = 0$.</figcaption>
        </figure>`
      },
      {
        id: "s2-cinematica",
        type: "section",
        title: "Cinematica del Punto Materiale",
        icon: "📍",
        content: `<p>Per descrivere il moto di un corpo dobbiamo prima di tutto definire <strong>dove</strong> si trova in un dato istante di tempo.</p>
        <p>Il <strong>vettore posizione</strong> $\\vec{r}(t)$ è il vettore che unisce l'origine del sistema di riferimento scelto con la posizione occupata dal punto materiale all'istante $t$.</p>`,
        formulas: [
          { label: "Vettore posizione", latex: "\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j} + z(t)\\hat{k}" }
        ]
      },
      {
        id: "s2-nota-traiettoria",
        type: "note_box",
        title: "📚 Legge oraria vs Traiettoria",
        content: `<p>La <strong>legge oraria</strong> è la funzione vettoriale $\\vec{r}(t)$ che associa ad ogni istante di tempo la posizione spaziale.</p>
        <p>La <strong>traiettoria</strong> è il luogo geometrico dei punti nello spazio occupati dal corpo — è la curva "disegnata" nello spazio, <strong>indipendente dalla variabile tempo</strong>.</p>
        <p>Due corpi possono percorrere la stessa traiettoria con leggi orarie completamente diverse (uno veloce, uno lento).</p>`
      },
      {
        id: "s2-spostamento",
        type: "section",
        title: "Vettore Spostamento",
        icon: "➡️",
        content: `<p>Supponiamo che al tempo $t_1$ il punto si trovi in $\\vec{r}_1$ e al tempo successivo $t_2$ si trovi in $\\vec{r}_2$.</p>
        <p>Il <strong>Vettore Spostamento</strong> $\\Delta\\vec{r}_{12}$ tra gli istanti $t_1$ e $t_2$ è definito come la variazione del vettore posizione:</p>`,
        formulas: [
          { label: "Spostamento (definizione)", latex: "\\Delta\\vec{r}_{12} \\triangleq \\vec{r}(t_2) - \\vec{r}(t_1) = \\vec{r}_2 - \\vec{r}_1" },
          { label: "Spostamento in componenti", latex: "\\Delta\\vec{r}_{12} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j} + (z_2 - z_1)\\hat{k}" }
        ]
      },
      {
        id: "s2-trap-spostamento",
        type: "alert_box",
        title: "🚨 Trappola d'Esame — Spostamento ≠ Distanza percorsa",
        content: `<p>Lo spostamento $\\Delta\\vec{r}$ dipende <strong>solo</strong> dalla posizione iniziale e da quella finale, ed è rappresentato dal segmento rettilineo che unisce i due punti.</p>
        <p>La <strong>distanza percorsa</strong> reale $s$ lungo la traiettoria curva è in generale maggiore o uguale al modulo dello spostamento:</p>
        <p>$$s \\geq |\\Delta\\vec{r}|$$</p>
        <p>L'uguaglianza vale solo se il moto è rettilineo e senza inversioni di verso.</p>`
      },
      {
        id: "s3-vel-media",
        type: "section",
        title: "Dalla Velocità Media alla Velocità Istantanea",
        icon: "⏱️",
        content: `<p>Definito lo spostamento, introduciamo una grandezza che ci dica non solo <em>di quanto</em> ci siamo spostati, ma <em>quanto rapidamente</em> lo abbiamo fatto.</p>
        <p>La <strong>Velocità Media</strong> $\\vec{v}_m$ nell'intervallo $\\Delta t = t_2 - t_1$ è il rapporto vettoriale tra lo spostamento totale e l'intervallo di tempo:</p>`,
        formulas: [
          { label: "Velocità media", latex: "\\vec{v}_m \\triangleq \\frac{\\Delta\\vec{r}_{12}}{\\Delta t} = \\frac{\\vec{r}_2 - \\vec{r}_1}{t_2 - t_1}" }
        ],
        extra_content: `<p>Geometricamente, poiché $\\Delta t$ è uno scalare (positivo), il vettore velocità media ha la <strong>stessa direzione e lo stesso verso del vettore spostamento</strong> $\\Delta\\vec{r}$ — cioè la retta <strong>secante</strong> la traiettoria passante per $\\vec{r}_1$ e $\\vec{r}_2$.</p>`
      },
      {
        id: "s3-vel-ist",
        type: "section",
        title: "Passaggio al limite: Velocità Istantanea",
        icon: "🎯",
        content: `<p>La velocità media ci dà un'informazione globale, ma se volessimo sapere la velocità del corpo <em>esattamente</em> nell'istante $t$? Dobbiamo far tendere a zero l'intervallo di tempo di osservazione.</p>
        <p>Facciamo tendere $t_2 \\to t_1$, o equivalentemente $\\Delta t \\to 0$. In questa operazione di limite, il vettore secante $\\Delta\\vec{r}$ diventa sempre più piccolo, e la secante tende alla <strong>tangente</strong> alla traiettoria nel punto $P(t)$.</p>`,
        formulas: [
          { label: "Velocità istantanea", latex: "\\vec{v}(t) \\triangleq \\lim_{\\Delta t \\to 0} \\frac{\\Delta\\vec{r}}{\\Delta t} = \\frac{d\\vec{r}}{dt}" }
        ],
        extra_content: `<p>In componenti cartesiane, la derivazione vettoriale si riduce a tre derivazioni scalari (essendo $\\hat{i}, \\hat{j}, \\hat{k}$ costanti nel tempo):</p>
        <p>$$v_x(t) = \\frac{dx(t)}{dt} \\qquad v_y(t) = \\frac{dy(t)}{dt} \\qquad v_z(t) = \\frac{dz(t)}{dt}$$</p>
        <p>Da cui si ricostruisce il vettore:</p>
        <p>$$\\boxed{\\vec{v}(t) = v_x(t)\\hat{i} + v_y(t)\\hat{j} + v_z(t)\\hat{k}}$$</p>`
      },
      {
        id: "s3-orale-tangente",
        type: "oral_box",
        title: "🎤 Domanda d'Esame Orale — Direzione della velocità istantanea",
        content: `<p>Il prof potrebbe chiedervi: <em>"Che direzione ha il vettore velocità istantanea?"</em></p>
        <p><strong>Risposta esatta:</strong> Il vettore velocità istantanea in un punto della traiettoria è <strong>sempre tangente</strong> alla traiettoria in quel punto, con verso concorde a quello del moto. (A differenza della velocità media che è secante).</p>`
      },
      {
        id: "s3-fig-riepilogo",
        type: "section",
        title: "Il quadro completo: posizione, spostamento e velocità",
        icon: "🖼️",
        content: `<p>Il diagramma qui sotto riunisce tutte le grandezze introdotte finora in un'unica figura. Prenditi un momento per identificare ogni elemento prima di proseguire.</p>
        <figure style="text-align: center; margin: 1.5rem 0;">
          <img src="../assets/L02/spostamento-velocita.jpeg" alt="Vettori posizione, spostamento, velocità media e velocità istantanea" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);">
        </figure>
        <p><strong>Come leggere il diagramma:</strong></p>
        <p>• <strong style="color: #cc0000;">In rosso</strong> — i due <strong>vettori posizione</strong> $\\vec{r}_1$ e $\\vec{r}_2$, che partono dall'origine e puntano ai due punti sulla traiettoria (in verde) occupati dal corpo agli istanti $t$ e $t + \\Delta t$.</p>
        <p>• <strong style="color: #3333cc;">In blu</strong> — il <strong>vettore spostamento</strong> $\\Delta\\vec{r}_{12} = \\vec{r}_2 - \\vec{r}_1$, che collega direttamente i due punti. Nota come sia più corto della traiettoria curva: la distanza percorsa $s$ è sempre $\\geq |\\Delta\\vec{r}|$.</p>
        <p>• <strong style="color: #cc8800;">In arancione</strong> — il vettore <strong>velocità media</strong> $\\vec{v}_m$. Ha la stessa direzione dello spostamento $\\Delta\\vec{r}$: è la retta <strong>secante</strong> che taglia la traiettoria passando per entrambi i punti.</p>
        <p>• <strong style="color: #9933cc;">In viola</strong> — le <strong>velocità istantanee</strong> nei due punti. Ogni freccia è <strong>tangente</strong> alla traiettoria nel rispettivo punto, con verso concorde al moto. Questa è la differenza fondamentale: la velocità media "taglia" la curva (secante), la velocità istantanea la "sfiora" (tangente).</p>
        <p>Quando $\\Delta t \\to 0$, i due punti si avvicinano, la secante arancione ruota verso la tangente viola, e la velocità media converge alla velocità istantanea. Questo è esattamente il passaggio al limite che definisce $\\vec{v}(t) = d\\vec{r}/dt$.</p>`
      },
      {
        id: "s4-inverso",
        type: "section",
        title: "Il Problema Inverso della Cinematica",
        icon: "🔄",
        content: `<p>Abbiamo appena visto come, nota la legge della posizione $\\vec{r}(t)$, è facile ricavare la velocità $\\vec{v}(t)$ tramite derivazione.</p>
        <p>Ma in Fisica ci troviamo spesso di fronte al <strong>problema inverso</strong>: supponiamo di conoscere la velocità $\\vec{v}(t)$ in ogni istante. Come faccio a determinare <em>dove</em> si trova il corpo all'istante $t$?</p>
        <p>Dobbiamo invertire la derivata usando l'<strong>integrazione</strong>. Partiamo dalla definizione di velocità istantanea in forma differenziale (asse $x$ per semplicità):</p>
        <p>$$v_x(t) = \\frac{dx}{dt} \\implies dx = v_x(t)\\,dt$$</p>
        <p>Integrando entrambi i membri:</p>
        <p>$$\\int_{x(t_0)}^{x(t)} dx = \\int_{t_0}^{t} v_x(t')\\,dt'$$</p>`
      },
      {
        id: "s4-trap-muta",
        type: "alert_box",
        title: "🚨 Attenzione — Variabile muta di integrazione",
        content: `<p>Usiamo $t'$ come "variabile muta" di integrazione per non confonderla con il limite superiore $t$. Scrivere $\\int_{t_0}^{t} v_x(t)\\,dt$ sarebbe ambiguo!</p>`
      },
      {
        id: "s4-formula",
        type: "section",
        title: "Equazione di evoluzione della posizione",
        icon: "⭐",
        content: `<p>Risolvendo l'integrale a sinistra e portando $x(t_0)$ a destra, ed estendendo il ragionamento in forma vettoriale:</p>`,
        formulas: [
          { label: "Problema Inverso (posizione)", latex: "\\vec{r}(t) = \\vec{r}(t_0) + \\int_{t_0}^{t} \\vec{v}(t')\\,dt'" }
        ],
        extra_content: `<p>Questa formula dice esplicitamente che per conoscere la posizione finale servono <strong>due informazioni distinte</strong>:</p>
        <p>1. $\\int_{t_0}^{t} \\vec{v}(t')\\,dt'$ — lo <strong>spostamento totale</strong> avvenuto nell'intervallo temporale.</p>
        <p>2. $\\vec{r}(t_0)$ — le <strong>condizioni iniziali</strong> del sistema. Senza il punto di partenza, l'integrale dice solo <em>di quanto</em> mi sono spostato, non <em>dove</em> sono arrivato.</p>`
      },
      {
        id: "s4-orale-integrale",
        type: "oral_box",
        title: "🎤 Domanda d'Esame Orale — L'integrale della velocità dà la posizione?",
        content: `<p>Il prof chiede: <em>"Se calcolo $\\int \\vec{v}(t)\\,dt$, ho trovato la posizione?"</em></p>
        <p><strong>NO!</strong> L'integrale definito della velocità fornisce solo la <strong>variazione di posizione</strong> (cioè lo spostamento $\\Delta\\vec{r}$). Per la posizione effettiva $\\vec{r}(t)$ devo sommare le <strong>condizioni iniziali</strong> $\\vec{r}(t_0)$.</p>`
      },
      {
        id: "s-riepilogo",
        type: "section",
        title: "Riepilogo Formule della Lezione",
        icon: "📐",
        content: `<p>Tutte le formule introdotte oggi, raccolte in un unico quadro sinottico:</p>`,
        formulas: [
          { label: "Vettore posizione",              latex: "\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j} + z(t)\\hat{k}" },
          { label: "Modulo del vettore",             latex: "|\\vec{r}| = \\sqrt{x^2 + y^2 + z^2}" },
          { label: "Legge coseni direttori",         latex: "\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z = 1" },
          { label: "Vettore spostamento",            latex: "\\Delta\\vec{r}_{12} = \\vec{r}_2 - \\vec{r}_1" },
          { label: "Velocità media",                 latex: "\\vec{v}_m = \\frac{\\Delta\\vec{r}_{12}}{\\Delta t}" },
          { label: "Velocità istantanea",            latex: "\\vec{v}(t) = \\frac{d\\vec{r}}{dt}" },
          { label: "Problema inverso (posizione)",   latex: "\\vec{r}(t) = \\vec{r}(t_0) + \\int_{t_0}^{t} \\vec{v}(t')\\,dt'" }
        ]
      }
    ],

    oral_cards: [
      {
        type: "teorema",
        front: "Quanti angoli sono necessari per determinare univocamente la direzione di un vettore in 3D?",
        back: "Ne sono sufficienti <strong>due</strong>. Poiché vale $\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z = 1$, il terzo coseno direttore è vincolato e ricavabile dagli altri due."
      },
      {
        type: "definizione",
        front: "Definisci la <strong>velocità media</strong> e indica qual è la sua direzione.",
        back: "$\\vec{v}_m = \\frac{\\Delta\\vec{r}}{\\Delta t}$. Poiché $1/\\Delta t$ è uno scalare, la velocità media ha la stessa direzione e verso di $\\Delta\\vec{r}$, cioè è <strong>secante</strong> alla traiettoria."
      },
      {
        type: "domanda",
        front: "Che differenza c'è, vettorialmente, tra velocità media e velocità istantanea?",
        back: "La velocità media è allineata alla retta <strong>secante</strong> la traiettoria. La velocità istantanea ($\\Delta t \\to 0$) è <strong>tangente</strong> alla traiettoria nel punto considerato."
      },
      {
        type: "tranello",
        front: "⚠️ Se calcolo $\\int \\vec{v}(t)\\,dt$, ho trovato la posizione?",
        back: "<strong>NO.</strong> L'integrale fornisce solo lo spostamento $\\Delta\\vec{r}$. Per la posizione serve anche $\\vec{r}(t_0)$: le condizioni iniziali."
      },
      {
        type: "definizione",
        front: "Cos'è il <strong>vettore posizione</strong> $\\vec{r}(t)$?",
        back: "Il vettore che unisce l'origine del sistema di riferimento con la posizione del punto materiale all'istante $t$. In componenti: $\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j} + z(t)\\hat{k}$."
      },
      {
        type: "definizione",
        front: "Differenza tra <strong>legge oraria</strong> e <strong>traiettoria</strong>?",
        back: "La <strong>legge oraria</strong> è $\\vec{r}(t)$: associa ad ogni istante la posizione. La <strong>traiettoria</strong> è la curva geometrica nello spazio, indipendente dal tempo."
      },
      {
        type: "domanda",
        front: "Il prof chiede: <em>\"Che direzione ha $\\vec{v}(t)$?\"</em>",
        back: "Sempre <strong>tangente</strong> alla traiettoria nel punto considerato, con verso concorde al moto."
      },
      {
        type: "definizione",
        front: "Definisci il <strong>vettore spostamento</strong> $\\Delta\\vec{r}$.",
        back: "$\\Delta\\vec{r}_{12} \\triangleq \\vec{r}_2 - \\vec{r}_1$. Connette posizione iniziale e finale in linea retta. La distanza percorsa $s \\geq |\\Delta\\vec{r}|$."
      },
      {
        type: "formula",
        front: "Scrivi la formula del <strong>problema inverso</strong> e spiega ogni termine.",
        back: "$$\\vec{r}(t) = \\vec{r}(t_0) + \\int_{t_0}^{t} \\vec{v}(t')\\,dt'$$<br>$\\vec{r}(t_0)$: condizioni iniziali. L'integrale: spostamento totale. Servono <strong>entrambi</strong>."
      },
      {
        type: "tranello",
        front: "⚠️ Perché nell'integrale si usa $t'$ e non $t$?",
        back: "$t'$ è una <strong>variabile muta</strong>. Se scrivessimo $\\int_{t_0}^{t} v(t)\\,dt$ ci sarebbe ambiguità tra variabile di integrazione e limite superiore."
      }
    ]
  };
