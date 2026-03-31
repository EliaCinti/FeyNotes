const LESSON = {
    id: "L11", date: "Lezione 11 — 27 Mar 2026",
    title: "La Forza Elastica e il Moto Armonico Semplice",
    abstract: "Il modello della molla ideale. Vettore deformazione e Legge di Hooke. Sistema massa-molla in 1D. Derivazione dell'equazione del moto armonico. Pulsazione, periodo e frequenza. Significato fisico di massa e costante elastica.",

    sections: [
      /* ====================================================
         SEZIONE 1: Il Modello della Molla Ideale
         ==================================================== */
      {
        id: "s11-molla-ideale",
        type: "section",
        title: "Introduzione: Il Modello della Molla Ideale",
        icon: "🔧",
        content: `<p>In questa lezione si analizzano le <strong>forze elastiche</strong> e il tipo di moto che esse generano. Per fare questo, si introduce un modello fisico astratto e semplificato: la <strong>molla ideale</strong>.</p>
        <p>Una molla ideale è un dispositivo meccanico che obbedisce a tre ipotesi fondamentali:</p>
        <p>1. <strong>Assenza di massa</strong>: la molla stessa non possiede massa propria. Tutta la massa del sistema è concentrata nell'oggetto attaccato alla molla.</p>
        <p>2. <strong>Punti di ancoraggio</strong>: un estremo è ancorato a un punto fisso (che chiamiamo <strong>punto C</strong>, tipicamente un muro), mentre l'altro estremo è libero di muoversi.</p>
        <p>3. <strong>Stato di riposo</strong>: esiste una configurazione naturale (non sollecitata) in cui la molla ha una lunghezza definita $L_0$ e l'estremo libero si trova nella posizione $O$.</p>`,
        subsections: [
          {
            subtitle: "I Tre Casi Fisici Possibili",
            content: `<p>A seconda della lunghezza $L$ della molla in un dato istante, possiamo avere:</p>
            <p>1. <strong>Molla a riposo</strong>: $L = L_0$, nessuna deformazione ($\\Delta L = 0$).</p>
            <p>2. <strong>Molla compressa</strong>: $L < L_0$, la molla è più corta della lunghezza naturale ($\\Delta L < 0$).</p>
            <p>3. <strong>Molla allungata (elongata)</strong>: $L > L_0$, la molla è più lunga della lunghezza naturale ($\\Delta L > 0$).</p>`
          }
        ]
      },
      /* ====================================================
         SEZIONE 2: Vettore Deformazione
         ==================================================== */
      {
        id: "s11-vettore-deformazione",
        type: "section",
        title: "Il Vettore Deformazione",
        icon: "📐",
        content: `<p>Per descrivere quantitativamente lo stato della molla, definiamo il <strong>vettore deformazione</strong> $\\vec{\\Delta L}$, che descrive lo spostamento dell'estremo della molla rispetto alla sua posizione di riposo.</p>
        <p>Le tre caratteristiche del vettore:</p>
        <p>1. <strong>Modulo</strong>: corrisponde alla variazione di lunghezza: $|\\Delta L| = |L - L_0|$.</p>
        <p>2. <strong>Direzione</strong>: coincide con l'asse della molla (la congiungente tra il punto di ancoraggio $C$ e l'estremo libero).</p>
        <p>3. <strong>Verso</strong>: uscente dalla posizione di riposo $O$ e diretto verso la posizione attuale dell'estremo.</p>`,
        extra_content: `<p><strong>Attenzione al verso!</strong> Il vettore $\\vec{\\Delta L}$ punta dalla posizione di riposo verso dove si trova <em>ora</em> l'estremo. Se la molla è allungata, $\\vec{\\Delta L}$ punta lontano dal muro; se è compressa, punta verso il muro. Questo verso è fondamentale per capire il segno meno nella forza elastica.</p>`
      },
      /* ====================================================
         SEZIONE 3: Legge di Hooke
         ==================================================== */
      {
        id: "s11-hooke",
        type: "section",
        title: "La Forza Elastica: Legge di Hooke",
        icon: "⚡",
        content: `<p>Quando la molla è deformata ($\\vec{\\Delta L} \\neq 0$), essa genera una forza sull'oggetto attaccato al suo estremo libero. Sperimentalmente si osserva che questa forza tende sempre a <strong>riportare l'estremo nella posizione di riposo</strong> $O$.</p>
        <p>La forza elastica $\\vec{F}_e$ è descritta dalla seguente legge vettoriale:</p>
        <p>$$\\vec{F}_e = -k \\vec{\\Delta L}$$</p>`,
        subsections: [
          {
            subtitle: "Analisi Termine per Termine",
            content: `<p><strong>$k$</strong> è la <strong>costante elastica</strong> (o costante di richiamo) della molla. È una costante positiva, intrinseca della molla, misurata in Newton su metro ($\\text{N/m}$).</p>
            <p>Il <strong>segno meno</strong> è il cuore della legge: indica che la forza è una <strong>forza di richiamo</strong>. Il suo verso è sempre opposto al vettore deformazione $\\vec{\\Delta L}$.</p>`
          },
          {
            subtitle: "Perché il Segno Meno? Analisi Caso per Caso",
            content: `<p><strong>Caso 1 — Molla allungata</strong> ($\\Delta L > 0$, estremo spostato a destra):</p>
            <p>La deformazione punta verso destra. Il segno $-$ ribalta il verso: la forza punta verso sinistra, cioè verso la posizione di riposo. La molla <em>tira indietro</em> l'estremo.</p>
            <p>$$\\Delta L > 0 \\implies F_e = -k\\Delta L < 0 \\quad \\text{(forza verso sinistra)}$$</p>
            <p><strong>Caso 2 — Molla compressa</strong> ($\\Delta L < 0$, estremo spostato a sinistra):</p>
            <p>La deformazione punta verso sinistra. Il segno $-$ ribalta il verso: la forza punta verso destra, cioè di nuovo verso la posizione di riposo. La molla <em>spinge fuori</em> l'estremo.</p>
            <p>$$\\Delta L < 0 \\implies F_e = -k\\Delta L > 0 \\quad \\text{(forza verso destra)}$$</p>
            <p>In entrambi i casi la forza riporta verso il centro. Questo è il meccanismo che genera le oscillazioni: la massa supera la posizione di equilibrio per inerzia, la forza la richiama indietro, la massa supera di nuovo dall'altra parte, e così via all'infinito (in assenza di attrito).</p>`
          },
          {
            subtitle: "Il Significato Fisico della Costante Elastica k",
            content: `<p>La costante $k$ misura la <strong>rigidezza</strong> della molla: a parità di deformazione, quanto è intensa la forza di richiamo?</p>
            <p>$k$ <strong>grande</strong>: la molla è rigida. Basta una piccola deformazione per generare una grande forza (es. ammortizzatori, molle industriali).</p>
            <p>$k$ <strong>piccolo</strong>: la molla è morbida. Serve una grande deformazione per generare una forza apprezzabile (es. molla di una penna a scatto, Slinky).</p>
            <p><strong>Esempio numerico</strong> — Allungamento di $\\Delta L = 0.1\\,\\text{m}$ su due molle diverse:</p>
            <p>Molla A: $k_A = 200\\,\\text{N/m}$ (rigida) $\\implies F_A = 200 \\times 0.1 = 20\\,\\text{N}$</p>
            <p>Molla B: $k_B = 10\\,\\text{N/m}$ (morbida) $\\implies F_B = 10 \\times 0.1 = 1\\,\\text{N}$</p>
            <p>A parità di deformazione, la molla rigida esercita una forza <strong>20 volte superiore</strong>.</p>`
          }
        ],
        formulas: [
          { label: "Legge di Hooke (vettoriale)", latex: "\\vec{F}_e = -k \\vec{\\Delta L}" },
          { label: "Forza elastica lungo x", latex: "F_x = -kx" }
        ]
      },
      /* ====================================================
         SEZIONE 4: Sistema Massa-Molla in 1D
         ==================================================== */
      {
        id: "s11-massa-molla",
        type: "section",
        title: "Sistema Massa-Molla in 1D: Setup del Problema",
        icon: "🎯",
        content: `<p>Consideriamo il sistema fisico completo: una molla ideale ancorata a un muro, con una massa $m$ (corpo puntiforme) attaccata all'estremo libero. Il sistema si muove su un <strong>piano orizzontale privo di attrito</strong>.</p>`,
        subsections: [
          {
            subtitle: "Scelta del Sistema di Riferimento",
            content: `<p>Fissiamo un asse $x$ lungo la direzione di oscillazione della molla. La scelta fondamentale è far coincidere l'<strong>origine del sistema di riferimento</strong> ($x = 0$) con la <strong>posizione di riposo $O$</strong> della molla.</p>
            <p>Questa scelta è intelligente perché semplifica enormemente le equazioni:</p>
            <p>La posizione dell'estremo deformato coincide con la coordinata $x$ della massa. Il vettore deformazione diventa semplicemente $\\Delta x = x - x_0 = x - 0 = x$. Non bisogna più distinguere tra posizione della massa e deformazione della molla: <strong>sono la stessa cosa</strong>.</p>
            <p>L'equazione della forza elastica si riduce a:</p>
            <p>$$F_x = -kx$$</p>`
          },
          {
            subtitle: "Analisi delle Forze sul Sistema",
            content: `<p>Sulla massa $m$ agiscono tre forze:</p>
            <p>1. <strong>Forza peso</strong> $\\vec{P} = m\\vec{g}$ (verticale, verso il basso).</p>
            <p>2. <strong>Reazione vincolare</strong> $\\vec{R}_N$ (verticale, verso l'alto).</p>
            <p>3. <strong>Forza elastica</strong> $\\vec{F}_e = -kx\\,\\hat{u}_x$ (orizzontale, lungo l'asse $x$).</p>
            <p><strong>Lungo l'asse $y$</strong> (verticale): non c'è moto verticale ($a_y = 0$), quindi $R_N = mg$. Fine, non ci serve altro lungo $y$.</p>
            <p><strong>Lungo l'asse $x$</strong> (orizzontale): l'unica forza è quella elastica (l'attrito è nullo per ipotesi).</p>`
          }
        ]
      },
      /* ====================================================
         SEZIONE 5: Derivazione Equazione del Moto
         ==================================================== */
      {
        id: "s11-equazione-moto",
        type: "section",
        title: "Derivazione dell'Equazione del Moto Armonico",
        icon: "📝",
        content: `<p>Applichiamo la <strong>Seconda Legge della Dinamica</strong> ($\\vec{F} = m\\vec{a}$) lungo l'asse $x$. L'unica forza orizzontale è quella elastica, quindi:</p>
        <p>$$-kx = ma_x$$</p>
        <p>Ricordando che l'accelerazione $a_x$ è la derivata seconda della posizione rispetto al tempo ($a_x = \\ddot{x}$), sostituiamo:</p>
        <p>$$m\\ddot{x} = -kx$$</p>
        <p>Portiamo tutto a sinistra e dividiamo per $m$:</p>
        <p>$$\\ddot{x} + \\frac{k}{m}x = 0$$</p>`,
        subsections: [
          {
            subtitle: "La Pulsazione ω",
            content: `<p>Per semplificare l'equazione, definiamo una nuova grandezza, la <strong>pulsazione</strong> $\\omega$ (omega):</p>
            <p>$$\\omega^2 = \\frac{k}{m} \\implies \\omega = \\sqrt{\\frac{k}{m}}$$</p>
            <p>Le unità di misura sono: $[\\omega] = \\sqrt{\\frac{\\text{N/m}}{\\text{kg}}} = \\sqrt{\\frac{\\text{kg}\\cdot\\text{s}^{-2}}{\\text{kg}}} = \\text{s}^{-1} = \\text{rad/s}$.</p>
            <p>Sostituendo $\\omega^2$ nell'equazione, arriviamo alla <strong>forma fondamentale</strong>:</p>
            <p>$$\\boxed{\\ddot{x}(t) + \\omega^2 x(t) = 0}$$</p>
            <p>Questa è l'<strong>Equazione Differenziale del Moto Armonico Semplice</strong>.</p>`
          },
          {
            subtitle: "Cosa Ci Dice Questa Equazione?",
            content: `<p>L'equazione afferma che: <em>l'accelerazione del corpo è proporzionale alla sua posizione, ma con segno opposto</em>.</p>
            <p>In formule: $\\ddot{x} = -\\omega^2 x$. Cioè:</p>
            <p>Se $x > 0$ (massa a destra dell'equilibrio): $\\ddot{x} < 0$ (accelerazione verso sinistra).</p>
            <p>Se $x < 0$ (massa a sinistra): $\\ddot{x} > 0$ (accelerazione verso destra).</p>
            <p>Se $x = 0$ (all'equilibrio): $\\ddot{x} = 0$ (accelerazione nulla, ma velocità massima!).</p>
            <p><strong>L'accelerazione riporta sempre verso il centro: è questa la firma del moto armonico.</strong></p>
            <p>Qualsiasi sistema fisico la cui equazione del moto possa essere ridotta alla forma $\\ddot{x} + \\omega^2 x = 0$ è un <strong>oscillatore armonico</strong> e compie un moto armonico semplice. Non deve essere necessariamente una molla: pendoli (per piccole oscillazioni), circuiti LC, molecole vibranti — tutti obbediscono alla stessa equazione.</p>`
          }
        ],
        formulas: [
          { label: "Equazione del moto armonico", latex: "\\ddot{x}(t) + \\omega^2 x(t) = 0" },
          { label: "Pulsazione", latex: "\\omega = \\sqrt{\\frac{k}{m}}" }
        ]
      },
      /* ====================================================
         SEZIONE 6: Caratteristiche del Moto Armonico
         ==================================================== */
      {
        id: "s11-caratteristiche",
        type: "section",
        title: "Caratteristiche del Moto Armonico",
        icon: "🔄",
        content: `<p>Senza ancora risolvere esplicitamente l'equazione differenziale, possiamo già dedurre proprietà fisiche fondamentali.</p>`,
        subsections: [
          {
            subtitle: "Descrizione Qualitativa del Moto",
            content: `<p>Immaginiamo di spostare la massa dalla posizione di equilibrio ($x = 0$) fino a una posizione $x = A > 0$, e poi di lasciarla andare. Cosa succede?</p>
            <p><strong>Fase 1</strong>: La molla è allungata: $F_e < 0$, la forza richiama la massa verso sinistra.</p>
            <p><strong>Fase 2</strong>: La massa accelera verso $x = 0$. Arrivata in $x = 0$, la forza è nulla ma la velocità è massima: per inerzia la massa supera la posizione di equilibrio.</p>
            <p><strong>Fase 3</strong>: La molla ora è compressa: $F_e > 0$, la forza rallenta la massa e poi la rispinge verso destra.</p>
            <p><strong>Fase 4</strong>: La massa raggiunge $x = -A$ (simmetrico), si ferma un istante ($v = 0$), e il ciclo ricomincia.</p>
            <p>Poiché non ci sono forze dissipative (attrito nullo), questo moto continua <strong>all'infinito</strong> tra $x = -A$ e $x = +A$.</p>`
          },
          {
            subtitle: "Periodo, Frequenza, Pulsazione",
            content: `<p>Il moto è <strong>periodico</strong>: le grandezze cinematiche (posizione, velocità, accelerazione) riassumono gli stessi identici valori dopo un intervallo di tempo costante, chiamato <strong>periodo $T$</strong>.</p>
            <p>La relazione tra periodo $T$ e pulsazione $\\omega$ è:</p>
            <p>$$T = \\frac{2\\pi}{\\omega}$$</p>
            <p>Sostituendo la definizione di $\\omega$, otteniamo la formula del periodo per il sistema massa-molla:</p>
            <p>$$\\boxed{T = 2\\pi\\sqrt{\\frac{m}{k}}}$$</p>
            <p>Si definisce infine la <strong>frequenza</strong> $\\nu$ come l'inverso del periodo, misurata in Hertz (Hz):</p>
            <p>$$\\nu = \\frac{1}{T} = \\frac{\\omega}{2\\pi}$$</p>
            <p>La frequenza indica il <strong>numero di oscillazioni complete compiute in un secondo</strong>.</p>`
          },
          {
            subtitle: "Significato Fisico di m e k nel Periodo",
            content: `<p>L'equazione del periodo ci permette di capire fisicamente il ruolo di ciascun parametro:</p>
            <p><strong>Effetto della massa $m$</strong> (al numeratore sotto radice): la massa rappresenta l'<strong>inerzia</strong>. Una massa maggiore si oppone di più alle variazioni di velocità imposte dalla molla, e quindi impiega più tempo a completare un'oscillazione: $m \\uparrow \\implies T \\uparrow$ (oscillazione più lenta).</p>
            <p><strong>Effetto della costante elastica $k$</strong> (al denominatore sotto radice): $k$ misura la <strong>rigidezza</strong> della molla. Una molla più rigida esercita una forza di richiamo più intensa a parità di spostamento, abbreviando il periodo: $k \\uparrow \\implies T \\downarrow$ (oscillazione più rapida).</p>
            <p><strong>Osservazione fondamentale:</strong> il periodo $T$ <strong>non dipende dall'ampiezza</strong> delle oscillazioni! Che la massa oscilli di 1 cm o di 1 m, il tempo di ciascun ciclo è lo stesso. Questa proprietà è chiamata <strong>isocronia delle oscillazioni</strong> ed è una caratteristica peculiare del moto armonico semplice.</p>`
          }
        ],
        formulas: [
          { label: "Periodo del moto armonico", latex: "T = 2\\pi\\sqrt{\\frac{m}{k}}" },
          { label: "Frequenza", latex: "\\nu = \\frac{1}{T} = \\frac{\\omega}{2\\pi}" },
          { label: "Relazione ω-T-ν", latex: "\\omega = 2\\pi\\nu = \\frac{2\\pi}{T}" }
        ]
      },
      /* ====================================================
         SEZIONE 7: Esempio Numerico Completo
         ==================================================== */
      {
        id: "s11-esempio",
        type: "section",
        title: "Esempio Numerico Completo",
        icon: "🔢",
        content: `<p>Una molla con costante elastica $k = 50\\,\\text{N/m}$ è collegata a una massa $m = 2\\,\\text{kg}$ su un piano orizzontale liscio. Calcolare pulsazione, periodo e frequenza.</p>
        <p><strong>Pulsazione:</strong></p>
        <p>$$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5\\,\\text{rad/s}$$</p>
        <p><strong>Periodo:</strong></p>
        <p>$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{5} \\approx 1.26\\,\\text{s}$$</p>
        <p><strong>Frequenza:</strong></p>
        <p>$$\\nu = \\frac{1}{T} = \\frac{1}{1.26} \\approx 0.80\\,\\text{Hz}$$</p>
        <p>La massa compie circa 0.8 oscillazioni al secondo, ciascuna della durata di 1.26 secondi.</p>`,
        extra_content: `<p><strong>Cosa succede se raddoppio la massa?</strong></p>
        <p>Con la stessa molla ($k = 50\\,\\text{N/m}$), attacchiamo $m = 8\\,\\text{kg}$ (quattro volte la massa originale).</p>
        <p>$$T_{\\text{nuovo}} = 2\\pi\\sqrt{\\frac{8}{50}} = 2\\pi\\cdot 2\\sqrt{\\frac{2}{50}} = 2\\,T_{\\text{vecchio}}$$</p>
        <p>Quadruplicando la massa, il periodo raddoppia (perché $T \\propto \\sqrt{m}$). L'oscillazione diventa più lenta.</p>`
      },
      /* ====================================================
         SEZIONE 8: Riepilogo
         ==================================================== */
      {
        id: "s11-riepilogo",
        type: "section",
        title: "Riepilogo e Mappa Concettuale",
        icon: "🗺️",
        content: `<p>La catena logica completa che porta dalla deformazione di una molla al moto armonico:</p>
        <p>$$\\text{Molla deformata} \\xrightarrow{\\text{Hooke}} \\vec{F}_e = -k\\vec{\\Delta L} \\xrightarrow{\\text{II Legge}} m\\ddot{x} = -kx \\xrightarrow{\\omega^2 = k/m} \\ddot{x} + \\omega^2 x = 0$$</p>`,
        table_compare: {
          headers: ["Grandezza", "Formula"],
          rows: [
            ["Forza elastica", "$\\vec{F}_e = -k \\vec{\\Delta L}$"],
            ["Forza lungo x (origine in equilibrio)", "$F_x = -kx$"],
            ["Equazione del moto", "$\\ddot{x} + \\omega^2 x = 0$"],
            ["Pulsazione", "$\\omega = \\sqrt{k/m}$"],
            ["Periodo", "$T = 2\\pi/\\omega = 2\\pi\\sqrt{m/k}$"],
            ["Frequenza", "$\\nu = 1/T = \\omega/2\\pi$"],
            ["Relazione ω-T-ν", "$\\omega = 2\\pi\\nu = 2\\pi/T$"]
          ]
        },
        extra_content: `<p><strong>Anticipazione:</strong> nella prossima lezione troveremo la soluzione dell'equazione differenziale: $x(t) = A\\cos(\\omega t + \\varphi)$, dove $A$ è l'ampiezza e $\\varphi$ è la fase iniziale. Studieremo inoltre l'energia nel moto armonico: energia cinetica, energia potenziale elastica e la loro conservazione.</p>`
      }
    ],

    oral_cards: [
      {
        type: "definizione",
        front: "Cos'è una <strong>molla ideale</strong> e quali sono le sue ipotesi?",
        back: "Una molla ideale è un dispositivo meccanico con tre proprietà: 1) <strong>Assenza di massa</strong> propria. 2) Un estremo <strong>ancorato</strong> a un punto fisso, l'altro <strong>libero</strong>. 3) Esiste uno <strong>stato di riposo</strong> con lunghezza $L_0$ definita."
      },
      {
        type: "definizione",
        front: "Enuncia la <strong>Legge di Hooke</strong> in forma vettoriale e spiega ogni termine.",
        back: "$\\vec{F}_e = -k\\vec{\\Delta L}$. Dove $k$ è la <strong>costante elastica</strong> (N/m), positiva e intrinseca della molla. $\\vec{\\Delta L}$ è il <strong>vettore deformazione</strong>. Il segno <strong>meno</strong> indica che è una forza di <strong>richiamo</strong>: sempre diretta verso la posizione di riposo."
      },
      {
        type: "domanda",
        front: "Perché è conveniente porre l'<strong>origine del sistema di riferimento</strong> nella posizione di riposo della molla?",
        back: "Perché in questo modo la coordinata $x$ della massa coincide direttamente con la deformazione $\\Delta x$. L'equazione della forza si semplifica a $F_x = -kx$, eliminando la necessità di distinguere tra posizione e deformazione."
      },
      {
        type: "dimostrazione",
        front: "Deriva l'<strong>equazione del moto armonico semplice</strong> partendo dalla Seconda Legge di Newton applicata al sistema massa-molla.",
        back: "Si applica $F = ma$ lungo $x$: $-kx = m\\ddot{x}$. Si porta tutto a sinistra: $m\\ddot{x} + kx = 0$. Si divide per $m$: $\\ddot{x} + \\frac{k}{m}x = 0$. Si definisce $\\omega^2 = \\frac{k}{m}$ e si ottiene: $\\ddot{x} + \\omega^2 x = 0$."
      },
      {
        type: "domanda",
        front: "Qual è il <strong>significato fisico</strong> della pulsazione $\\omega$ e in quali unità si misura?",
        back: "La pulsazione $\\omega = \\sqrt{k/m}$ è legata alla rapidità delle oscillazioni. Si misura in <strong>rad/s</strong>. È collegata al periodo ($T = 2\\pi/\\omega$) e alla frequenza ($\\nu = \\omega/2\\pi$). Più $\\omega$ è grande, più rapide sono le oscillazioni."
      },
      {
        type: "domanda",
        front: "Come influiscono <strong>massa $m$</strong> e <strong>costante elastica $k$</strong> sul periodo $T$ del moto armonico?",
        back: "$T = 2\\pi\\sqrt{m/k}$. La massa $m$ è al numeratore: $m \\uparrow \\implies T \\uparrow$ (oscillazione più lenta, maggiore inerzia). La costante $k$ è al denominatore: $k \\uparrow \\implies T \\downarrow$ (oscillazione più rapida, molla più rigida)."
      },
      {
        type: "tranello",
        front: "Il periodo $T$ del moto armonico semplice dipende dall'<strong>ampiezza</strong> delle oscillazioni?",
        back: "<strong>No!</strong> Il periodo $T = 2\\pi\\sqrt{m/k}$ dipende solo da $m$ e $k$, non dall'ampiezza $A$. Che la massa oscilli di 1 cm o di 1 m, il tempo di ogni ciclo è lo stesso. Questa proprietà si chiama <strong>isocronia delle oscillazioni</strong>."
      },
      {
        type: "domanda",
        front: "Cosa significa che l'equazione $\\ddot{x} + \\omega^2 x = 0$ descrive <strong>qualsiasi</strong> oscillatore armonico?",
        back: "Significa che <strong>qualsiasi sistema fisico</strong> la cui equazione del moto si riduca a questa forma compie un moto armonico semplice. Non solo molle: pendoli (piccole oscillazioni), circuiti LC, molecole vibranti — tutti obbediscono alla stessa equazione con diverse definizioni di $\\omega$."
      }
    ]
};
