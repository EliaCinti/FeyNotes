const LESSON = {
    id: "L52", date: "Lezione 37 — 03 Giu 2026",
    title: "Trasformazioni notevoli, cicli termodinamici e macchine termiche",
    abstract: "Riepilogo dei gas ideali e del significato fisico del calore specifico. Analisi sistematica delle trasformazioni notevoli (adiabatica, isoterma, isocora, isobara). Cicli termodinamici, macchine termiche e frigorifere. Il ciclo di Carnot e il calcolo del suo rendimento.",

    sections: [
      {
        id: "s52-riepilogo-gas-ideali",
        type: "section",
        title: "Riepilogo: gas ideali, calore specifico e inerzia termica",
        icon: "🔬",
        content: `<p>Riprendiamo il discorso interrotto la volta scorsa: stavamo studiando le trasformazioni notevoli per sistemi termodinamici costituiti da gas ideali. Prima di entrare nel vivo, consolidiamo alcuni concetti fondamentali.</p>`,
        subsections: [
          {
            subtitle: "Il modello dei gas ideali",
            content: `<p>Quando in termodinamica si parla di <em>gas ideali</em> al plurale, non si intende un unico sistema termodinamico: si intende un <strong>modello</strong> che riproduce diverse situazioni della realtà. In particolare, il modello del gas ideale descrive bene i gas molto rarefatti e i gas caldi.</p>
<p>A seconda della struttura molecolare distinguiamo:</p>
<ul>
  <li><strong>Gas monoatomici</strong>: nella realtà corrispondono ai gas nobili (elio, argon, …). I singoli atomi, se rarefatti, interagiscono poco. Per questi gas $c_v = \\tfrac{3}{2}R$ e $\\gamma = \\tfrac{5}{3}$.</li>
  <li><strong>Gas biatomici</strong>: la maggior parte dei gas comuni come ossigeno ($\\mathrm{O}_2$) e azoto ($\\mathrm{N}_2$). Per questi gas $c_v = \\tfrac{5}{2}R$ e $\\gamma = \\tfrac{7}{5}$.</li>
</ul>
<blockquote>Salvo diverso avviso, ricordate che il calore specifico di un gas monoatomico è diverso da quello di un gas biatomico, <em>anche se entrambi sono gas ideali</em>. La differenza risiede nei gradi di libertà: un gas monoatomico ne possiede 3 (traslazionali), un biatomico ne possiede 5 (3 traslazionali e 2 rotazionali), il che si riflette direttamente nel valore di $c_v$.</blockquote>`
          },
          {
            subtitle: "Il significato fisico del calore specifico",
            content: `<p>A scuola il calore specifico viene introdotto come <em>"la quantità di calore da far assorbire all'unità di massa di un sistema per elevarne la temperatura di un grado"</em>. Questa è la <strong>definizione operativa</strong>, ma non il significato fisico.</p>
<p>Il significato fisico del calore specifico è quello di <strong>inerzia termica per unità di massa</strong>: la propensione di un sistema monofasico a <em>non</em> cambiare il proprio stato termico in seguito a uno scambio di calore. A parità di calore scambiato, il sistema con calore specifico maggiore subisce una variazione di temperatura più piccola.</p>
<p>L'analogia con la dinamica è illuminante. In dinamica, dalla seconda legge di Newton:</p>
<p>$$m = \\frac{F}{a}$$</p>
<p>La massa inerziale è il rapporto tra l'azione applicata ($F$) e l'effetto prodotto ($a$): quanto più grande è $m$, tanto più piccolo è l'effetto a parità di forza.</p>
<p>In termodinamica, scrivendo $\\delta Q = m\\,c\\,dT$ e mettendo in evidenza il calore specifico:</p>
<p>$$c = \\frac{1}{m}\\,\\frac{\\delta Q}{dT}$$</p>
<p>Al numeratore c'è l'azione (calore scambiato), al denominatore l'effetto prodotto (variazione di temperatura). A parità di calore scambiato, un sistema con $c$ grande subisce una piccola $\\Delta T$: è termicamente "inerte".</p>`
          },
          {
            subtitle: "Perché il calore specifico dipende dalla trasformazione",
            content: `<p><strong>Punto chiave:</strong> il calore specifico di un sistema termodinamico <em>dipende dal tipo di trasformazione</em>. Questo è uno dei punti che più disorientano lo studente all'inizio.</p>
<p>Il motivo è contenuto direttamente nella definizione: $c$ dipende da $\\delta Q$, e $\\delta Q$ dipende dal tipo di trasformazione (lo dice il primo principio, $dU = \\delta Q - \\delta W$). Quindi anche $c$ ne dipende.</p>
<p>Per fissare le idee, consideriamo un gas ideale e immaginiamo di produrre la stessa $\\Delta T$ in due modi:</p>
<ul>
  <li><strong>A volume costante</strong>: tutta l'energia fornita va ad aumentare la temperatura, non si compie lavoro ($\\delta W = p\\,dV = 0$). Quindi $\\delta Q_v = dU = n\\,c_v\\,dT$.</li>
  <li><strong>A pressione costante</strong>: l'energia fornita deve coprire <em>sia</em> l'aumento di temperatura, <em>sia</em> il costo del lavoro che il sistema compie espandendosi ($\\delta W = p\\,dV \\neq 0$). Quindi $\\delta Q_p = dU + p\\,dV = n\\,c_p\\,dT$.</li>
</ul>
<p>Nel secondo caso serve più calore per ottenere la stessa $\\Delta T$: ecco perché $c_p \\gt c_v$. Quantitativamente, per un gas ideale la differenza è esattamente $c_p - c_v = R$ (relazione di Mayer).</p>
<blockquote>È come quando comprate un'auto: se volete più optional (mantenere la pressione costante), vi costa di più! Il sistema deve compiere lavoro per espandersi, altrimenti la pressione crescerebbe.</blockquote>`
          },
          {
            subtitle: "Concetti che non devono più sorprendere",
            content: `<p>Riassumendo, nelle prossime settimane dovete abituarvi al fatto che:</p>
<ol>
  <li>Il calore specifico dipende dal tipo di trasformazione.</li>
  <li>Calore e lavoro scambiati dipendono dal tipo di trasformazione (lo dice il primo principio).</li>
  <li>Esistono <em>funzioni di stato</em> (come l'energia interna $U$) e funzioni <em>non</em> di stato (come $Q$ e $W$).</li>
</ol>
<p>L'energia interna rappresenta il contenuto energetico del sistema: se gli stati iniziale e finale coincidono, $\\Delta U = 0$ e il bilancio tra calore scambiato e lavoro compiuto è nullo.</p>`
          },
          {
            subtitle: "Trasformazioni reversibili e irreversibili",
            content: `<p>Una trasformazione è <em>reversibile</em> se la si può pensare infinitamente lenta: tanto lenta che per ogni variazione infinitesima il sistema si trova in uno stato di quasi equilibrio. Uno stato di equilibrio è caratterizzato da valori <em>univocamente assegnabili</em> delle variabili termodinamiche (pressione, temperatura, volume, densità) in <em>tutto</em> il sistema.</p>
<p><strong>Definizione:</strong> una trasformazione si dice <strong>reversibile</strong> se in ogni istante il sistema si trova in uno stato di equilibrio termodinamico (quasi-statica) e se non vi sono fenomeni dissipativi (attrito, viscosità, isteresi). Una trasformazione che non soddisfa queste condizioni si dice <strong>irreversibile</strong>.</p>
<p><strong>Esempio — Cubo di rame su una piastra calda:</strong> appoggiamo un cubo di rame, inizialmente a temperatura omogenea, su una piastra calda. La superficie di contatto si troverà a temperatura maggiore di quella opposta: nel cubo esiste un <em>gradiente di temperatura</em>. Non posso assegnare un unico valore di $T$ al sistema, che si trova in condizioni di non equilibrio. La trasformazione di riscaldamento reale è <strong>irreversibile</strong>.</p>
<p><strong>Esempio — Espansione libera di Joule:</strong> un gas inizialmente confinato in una parte del recipiente si espande improvvisamente nel vuoto. Durante l'espansione la densità non è uniforme: da una parte il gas è più denso, dall'altra meno denso. Non si può assegnare un valore unico di densità al sistema. La trasformazione è irreversibile.</p>`
          }
        ],
        table_compare: {
          headers: ["", "Dinamica", "Termodinamica"],
          rows: [
            ["Azione", "Forza $F$", "Calore $\\delta Q$"],
            ["Effetto", "Accelerazione $a$", "Variazione di temperatura $dT$"],
            ["Inerzia", "Massa $m = F/a$", "Capacità termica $C = \\delta Q / dT$"],
            ["Inerzia specifica", "—", "Calore specifico $c = C/m$"]
          ]
        },
        extra_content: `<p><strong>Esempio — Confronto di inerzie termiche:</strong> se cedo $1\\,\\mathrm{J}$ di calore a un sistema A e la sua temperatura aumenta di $10\\,\\mathrm{K}$, mentre cedo lo stesso $1\\,\\mathrm{J}$ a un sistema B e la temperatura aumenta di $1\\,\\mathrm{K}$, il sistema B ha calore specifico (e inerzia termica) dieci volte maggiore.</p>`
      },
      {
        id: "s52-sorgente-termodinamica",
        type: "section",
        title: "Sorgente termodinamica",
        icon: "♨️",
        content: `<p>Nelle prossime lezioni metteremo spesso i nostri sistemi in contatto con una particolare classe di sistemi: le sorgenti.</p>
<p><strong>Definizione:</strong> una <strong>sorgente termodinamica</strong> (o <strong>termostato</strong>, o <strong>serbatoio termico</strong>) è un sistema termodinamico monofasico la cui capacità termica può essere considerata <em>infinita</em>, e che pertanto, scambiando calore con altri sistemi, <strong>mantiene costante la propria temperatura</strong>.</p>
<p>Ricordiamo che la capacità termica di un sistema monofasico è:</p>
<p>$$C = \\frac{\\delta Q}{dT}$$</p>
<p>Se $C \\to \\infty$, allora per un qualunque scambio finito di calore $\\delta Q$ la variazione di temperatura $dT$ tende a zero. La capacità termica $C = m\\,c$ può essere resa molto grande sia aumentando la massa $m$, sia scegliendo sostanze con $c$ elevato.</p>
<p>Una sorgente non mantiene costante la temperatura perché "fa qualcosa" per compensare lo scambio di calore: la mantiene costante perché ha capacità termica enorme rispetto allo scambio considerato. Si tratta di un'idealizzazione, ma molto utile per modellizzare situazioni reali.</p>`,
        subsections: [
          {
            subtitle: "Esempio: cubetto di rame nel bicchiere vs nel lago",
            content: `<p>Si prende un cubetto di rame arroventato (es. $200\\,^\\circ\\mathrm{C}$):</p>
<ul>
  <li>Immerso in un <strong>bicchiere d'acqua</strong> a $25\\,^\\circ\\mathrm{C}$, l'acqua si scalda visibilmente (es. fino a $35$–$40\\,^\\circ\\mathrm{C}$). L'acqua ha massa limitata e capacità termica finita.</li>
  <li>Lo stesso cubetto immerso in un <strong>lago</strong> alla stessa temperatura iniziale: la temperatura media del lago non cambia in maniera apprezzabile.</li>
</ul>
<p>La sostanza è la stessa ($\\mathrm{H}_2\\mathrm{O}$), il calore ceduto dal cubo è lo stesso, ma nel secondo caso la capacità termica del bacino è enormemente più grande. Per esperimenti di questo tipo, il lago si comporta come una <em>sorgente termodinamica</em>.</p>`
          }
        ],
        extra_content: `<p><strong>Nota importante:</strong> la definizione di capacità termica ha senso solo per sistemi <strong>monofasici</strong>. In un sistema bifasico lo scambio di calore non produce mai variazione di temperatura, perché l'energia scambiata serve a sciogliere o formare legami molecolari (fusione, solidificazione, evaporazione, sublimazione), non a variare l'agitazione termica.</p>`
      },
      {
        id: "s52-trasformazioni-notevoli",
        type: "section",
        title: "Trasformazioni notevoli dei gas ideali",
        icon: "📐",
        content: `<p>Per un gas ideale valgono le seguenti relazioni fondamentali:</p>
<p>$$pV = nRT, \\qquad dU = n\\,c_v\\,dT$$</p>
<p>$$c_p - c_v = R \\quad \\text{(relazione di Mayer)}, \\qquad \\gamma = \\frac{c_p}{c_v}$$</p>
<p>Le trasformazioni notevoli sono quelle in cui una funzione termodinamica o una o più variabili termodinamiche rimangono costanti.</p>`,
        subsections: [
          {
            subtitle: "Riepilogo trasformazioni notevoli",
            content: `<table style="width:100%; border-collapse:collapse; margin:16px 0;">
<thead>
<tr style="border-bottom:2px solid var(--border-light);">
  <th style="text-align:left; padding:8px;"><strong>Trasformazione</strong></th>
  <th style="text-align:center; padding:8px;"><strong>Vincolo</strong></th>
  <th style="text-align:center; padding:8px;">$\\Delta U$</th>
  <th style="text-align:center; padding:8px;">$Q$</th>
  <th style="text-align:center; padding:8px;">$W$</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:8px;">Adiabatica</td>
  <td style="text-align:center; padding:8px;">$\\delta Q = 0$</td>
  <td style="text-align:center; padding:8px;">$n\\,c_v\\,\\Delta T$</td>
  <td style="text-align:center; padding:8px;">$0$</td>
  <td style="text-align:center; padding:8px;">$-n\\,c_v\\,\\Delta T$</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:8px;">Isoterma</td>
  <td style="text-align:center; padding:8px;">$T = \\text{cost}$</td>
  <td style="text-align:center; padding:8px;">$0$</td>
  <td style="text-align:center; padding:8px;">$W$</td>
  <td style="text-align:center; padding:8px;">$nRT\\ln(V_B/V_A)$ *</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:8px;">Isocora</td>
  <td style="text-align:center; padding:8px;">$V = \\text{cost}$</td>
  <td style="text-align:center; padding:8px;">$n\\,c_v\\,\\Delta T$</td>
  <td style="text-align:center; padding:8px;">$n\\,c_v\\,\\Delta T$</td>
  <td style="text-align:center; padding:8px;">$0$</td>
</tr>
<tr>
  <td style="padding:8px;">Isobara</td>
  <td style="text-align:center; padding:8px;">$p = \\text{cost}$</td>
  <td style="text-align:center; padding:8px;">$n\\,c_v\\,\\Delta T$</td>
  <td style="text-align:center; padding:8px;">$n\\,c_p\\,\\Delta T$</td>
  <td style="text-align:center; padding:8px;">$p\\,\\Delta V$</td>
</tr>
</tbody>
</table>
<p><em>* Solo se reversibile.</em></p>`
          }
        ],
        quote: {
          text: "Di tutte queste relazioni che vi sto per dare, non me ne ricordo una. Ho memorizzato il processo con cui mi ricavo le relazioni utili: se ho capito il processo, non me ne frega niente di ricordarmi le formule.",
          src: "Il Prof."
        }
      },
      {
        id: "s52-adiabatica",
        type: "section",
        title: "Trasformazione adiabatica",
        icon: "🔥",
        content: `<p><strong>Definizione:</strong> una trasformazione si dice <strong>adiabatica</strong> se avviene senza scambi di calore con l'esterno: $\\delta Q = 0$.</p>`,
        subsections: [
          {
            subtitle: "Conseguenze sempre valide (anche per adiabatiche irreversibili)",
            content: `<p>Dal primo principio:</p>
<p>$$dU = \\delta Q - \\delta W = -\\delta W$$</p>
<p>Per un gas ideale $dU = n\\,c_v\\,dT$ è <em>sempre</em> valida ($U$ dipende solo da $T$). Integrando fra lo stato iniziale $A$ e quello finale $B$:</p>
<p>$$W_{A\\to B} = -n\\,c_v\\,(T_B - T_A) = -\\Delta U$$</p>
<p><strong>Lettura dei segni:</strong></p>
<ul>
  <li><strong>Compressione adiabatica</strong>: il gas viene compresso, $T_B \\gt T_A$, quindi $W \\lt 0$. Coerente: il sistema <em>subisce</em> lavoro.</li>
  <li><strong>Espansione adiabatica</strong>: il gas si espande, $T_B \\lt T_A$, quindi $W \\gt 0$. Coerente: il sistema <em>compie</em> lavoro spendendo la propria energia interna.</li>
</ul>
<blockquote>Un gas che si espande adiabaticamente non può che raffreddarsi: se compie lavoro senza scambiare calore, l'energia per quel lavoro può venire solo dal suo contenuto energetico interno, dunque $U$ (e quindi $T$) deve diminuire. Compiere lavoro significa spendere energia; subire lavoro significa acquisire energia.</blockquote>`
          },
          {
            subtitle: "Forma alternativa del lavoro",
            content: `<p>Usando $pV = nRT$ e $R = c_p - c_v = (\\gamma-1)c_v$, si ottiene:</p>
<p>$$c_v = \\frac{R}{\\gamma-1}$$</p>
<p>e dunque il lavoro può essere riscritto come:</p>
<p>$$W_{A\\to B} = -\\frac{nR}{\\gamma - 1}\\,(T_B - T_A) = \\frac{1}{\\gamma - 1}\\,(p_A V_A - p_B V_B)$$</p>`
          },
          {
            subtitle: "Equazioni di Poisson (solo se reversibile!)",
            content: `<p>Se la trasformazione adiabatica è anche reversibile, si possono ricavare le cosiddette <em>equazioni delle adiabatiche reversibili</em> (o <em>equazioni di Poisson</em>):</p>
<p>$$pV^{\\gamma} = \\text{cost}, \\qquad TV^{\\gamma-1} = \\text{cost}, \\qquad T\\,p^{\\frac{1-\\gamma}{\\gamma}} = \\text{cost}$$</p>`
          },
          {
            subtitle: "Derivazione della prima equazione di Poisson",
            content: `<p>Per una trasformazione reversibile $\\delta W = p\\,dV$. Combinando con il primo principio e la condizione $\\delta Q = 0$:</p>
<p>$$n\\,c_v\\,dT = -p\\,dV$$</p>
<p>Differenziando l'equazione di stato $pV = nRT$ si ottiene $p\\,dV + V\\,dp = nR\\,dT$, da cui $dT = \\frac{p\\,dV + V\\,dp}{nR}$. Sostituendo:</p>
<p>$$n\\,c_v\\,\\frac{p\\,dV + V\\,dp}{nR} = -p\\,dV$$</p>
<p>Ricordando che $R = c_p - c_v$ e $\\gamma = c_p/c_v$:</p>
<p>$$\\frac{c_v}{c_p - c_v}\\,(p\\,dV + V\\,dp) = -p\\,dV$$</p>
<p>$$\\frac{1}{\\gamma - 1}\\,(p\\,dV + V\\,dp) = -p\\,dV$$</p>
<p>Moltiplicando per $(\\gamma - 1)$ e raccogliendo:</p>
<p>$$p\\,dV + V\\,dp = -(\\gamma-1)\\,p\\,dV \\;\\Rightarrow\\; V\\,dp = -\\gamma\\,p\\,dV$$</p>
<p>Separando le variabili e integrando:</p>
<p>$$\\frac{dp}{p} = -\\gamma\\,\\frac{dV}{V} \\;\\Rightarrow\\; \\ln p = -\\gamma\\,\\ln V + \\text{cost} \\;\\Rightarrow\\; pV^{\\gamma} = \\text{cost}$$</p>
<p>Le altre due forme si ottengono eliminando $p$ o $V$ tramite l'equazione di stato.</p>`
          }
        ],
        formulas: [
          { label: "Lavoro adiabatico (sempre valido)", latex: "W_{A\\to B} = -n\\,c_v\\,(T_B - T_A) = -\\Delta U" },
          { label: "Lavoro (forma alternativa)", latex: "W_{A\\to B} = \\frac{1}{\\gamma - 1}(p_A V_A - p_B V_B)" },
          { label: "Poisson (p-V)", latex: "pV^{\\gamma} = \\text{cost}" },
          { label: "Poisson (T-V)", latex: "TV^{\\gamma-1} = \\text{cost}" },
          { label: "Poisson (T-p)", latex: "T\\,p^{\\frac{1-\\gamma}{\\gamma}} = \\text{cost}" }
        ],
        extra_content: `<p><strong>Distinzione fondamentale (chiesta spesso all'esame):</strong> la relazione $W = -n\\,c_v\\,(T_B-T_A)$ vale per <em>ogni</em> adiabatica di gas ideale (reversibile o irreversibile). Le tre equazioni di Poisson richiedono <em>anche</em> la reversibilità.</p>`
      },
      {
        id: "s52-isoterma",
        type: "section",
        title: "Trasformazione isoterma",
        icon: "🌡️",
        content: `<p><strong>Definizione:</strong> una trasformazione si dice <strong>isoterma</strong> se durante essa la temperatura del sistema non varia: $T = \\text{cost}$.</p>`,
        subsections: [
          {
            subtitle: "Conseguenze sulle variabili (sempre valide)",
            content: `<p>Dall'equazione di stato, essendo $n$, $R$, $T$ costanti:</p>
<p>$$pV = nRT = \\text{cost}$$</p>
<p>Tra due stati $A$ e $B$ della stessa isoterma: $p_A V_A = p_B V_B$ (legge di Boyle).</p>`
          },
          {
            subtitle: "Conseguenze sulle funzioni termodinamiche",
            content: `<p>Poiché $T_A = T_B$ e per un gas ideale $U$ dipende solo da $T$:</p>
<p>$$\\Delta U = n\\,c_v\\,(T_B - T_A) = 0$$</p>
<p>Dal primo principio segue allora:</p>
<p>$$Q = W$$</p>
<blockquote>La condizione "$T$ iniziale $= T$ finale" è sufficiente per $\\Delta U = 0$, ma non solo nell'isoterma: vale anche per qualunque <em>trasformazione ciclica</em>. In un'isoterma, però, la temperatura è costante in <em>ogni</em> stato della trasformazione, non solo negli estremi.</blockquote>`
          },
          {
            subtitle: "Calcolo esplicito: solo se reversibile",
            content: `<p>Se la trasformazione è reversibile, in ogni punto vale l'equazione di stato e possiamo calcolare il lavoro come area sotto la curva nel diagramma $p$-$V$:</p>
<p>$$W = \\int_{V_A}^{V_B} p \\, dV = \\int_{V_A}^{V_B} \\frac{nRT}{V} \\, dV = nRT \\int_{V_A}^{V_B} \\frac{dV}{V} = nRT \\,\\ln\\!\\left(\\frac{V_B}{V_A}\\right)$$</p>
<p>Quindi:</p>
<p>$$Q = W = n R T \\,\\ln\\!\\left(\\frac{V_B}{V_A}\\right)$$</p>
<p>In un'isoterma reversibile, espandendosi il gas tenderebbe a raffreddarsi: per mantenere $T$ costante deve assorbire calore. Tanto lavoro compie, tanto calore assorbe; il bilancio energetico è nullo perché $\\Delta U = 0$.</p>`
          },
          {
            subtitle: "Esempio: espansione isoterma",
            content: `<p>Un gas ideale monoatomico ($n = 1\\,\\mathrm{mol}$) si espande isotermicamente e reversibilmente a $T = 300\\,\\mathrm{K}$ da $V_A = 10\\,\\mathrm{L}$ a $V_B = 20\\,\\mathrm{L}$. Calcolare il lavoro compiuto e il calore assorbito.</p>
<p><strong>Soluzione:</strong></p>
<p>$$W = Q = nRT\\ln\\!\\left(\\frac{V_B}{V_A}\\right) = 1 \\times 8{,}314 \\times 300 \\times \\ln 2 \\approx 1729\\,\\mathrm{J}$$</p>
<p>Il gas ha compiuto circa $1{,}73\\,\\mathrm{kJ}$ di lavoro e ha assorbito la stessa quantità di calore dalla sorgente. L'energia interna non è variata: $\\Delta U = 0$.</p>`
          }
        ],
        formulas: [
          { label: "Legge di Boyle", latex: "pV = nRT = \\text{cost}" },
          { label: "Lavoro isoterma reversibile", latex: "Q = W = nRT\\,\\ln\\!\\left(\\frac{V_B}{V_A}\\right)" }
        ]
      },
      {
        id: "s52-isocora",
        type: "section",
        title: "Trasformazione isocora",
        icon: "📦",
        content: `<p><strong>Definizione:</strong> una trasformazione si dice <strong>isocora</strong> (o <strong>isometrica</strong>) se durante essa il volume non varia: $V = \\text{cost}$, ossia $dV = 0$.</p>`,
        subsections: [
          {
            subtitle: "Conseguenze sulle variabili",
            content: `<p>Dall'equazione di stato:</p>
<p>$$\\frac{p}{T} = \\frac{nR}{V} = \\text{cost}$$</p>
<p>Questa è la legge di Gay-Lussac (seconda forma): a volume costante, la pressione è direttamente proporzionale alla temperatura <em>assoluta</em>.</p>`
          },
          {
            subtitle: "Conseguenze sulle funzioni termodinamiche",
            content: `<p>Poiché $dV = 0$:</p>
<p>$$W = \\int p\\,dV = 0$$</p>
<p>Dal primo principio segue:</p>
<p>$$Q_v = \\Delta U = n\\,c_v\\,(T_B - T_A)$$</p>
<p>Tutto il calore scambiato a volume costante va a variare l'energia interna. In una scatola a pareti rigide il gas non può spendere meccanicamente l'energia ricevuta, perché non può espandersi. Quindi la "mette in cassa" come energia interna. Questa relazione è particolarmente utile perché consente di <em>misurare</em> variazioni di energia interna attraverso scambi di calore a volume costante.</p>`
          }
        ],
        formulas: [
          { label: "Legge di Gay-Lussac (V cost)", latex: "\\frac{p}{T} = \\frac{nR}{V} = \\text{cost}" },
          { label: "Calore a volume costante", latex: "Q_v = \\Delta U = n\\,c_v\\,(T_B - T_A)" }
        ]
      },
      {
        id: "s52-isocora-trappola",
        type: "alert_box",
        title: "Trappola d'esame: temperature assolute!",
        icon: "⚠️",
        content: `<p>Se in condizioni isocore vi chiedo: <em>"Raddoppiando la temperatura da $10\\,^\\circ\\mathrm{C}$ a $20\\,^\\circ\\mathrm{C}$, la pressione raddoppia?"</em></p>
<p>La risposta è <strong>no!</strong> La proporzionalità vale solo per le temperature <em>assolute</em>. Infatti $10\\,^\\circ\\mathrm{C} = 283\\,\\mathrm{K}$ e $20\\,^\\circ\\mathrm{C} = 293\\,\\mathrm{K}$: il rapporto $293/283 \\approx 1{,}04$, ben lontano da 2.</p>
<p>Per raddoppiare la pressione partendo da $300\\,\\mathrm{K}$ ($27\\,^\\circ\\mathrm{C}$), bisogna portarsi a $600\\,\\mathrm{K}$ ($327\\,^\\circ\\mathrm{C}$).</p>`
      },
      {
        id: "s52-isobara",
        type: "section",
        title: "Trasformazione isobara",
        icon: "➡️",
        content: `<p><strong>Definizione:</strong> una trasformazione si dice <strong>isobara</strong> se durante essa la pressione non varia: $p = \\text{cost}$, ossia $dp = 0$.</p>`,
        subsections: [
          {
            subtitle: "Conseguenze sulle variabili",
            content: `<p>Dall'equazione di stato:</p>
<p>$$\\frac{V}{T} = \\frac{nR}{p} = \\text{cost}$$</p>
<p>Questa è la legge di Gay-Lussac (prima forma): a pressione costante, il volume è direttamente proporzionale alla temperatura assoluta.</p>`
          },
          {
            subtitle: "Conseguenze sulle funzioni termodinamiche",
            content: `<p>Il calore scambiato è:</p>
<p>$$Q_p = n\\,c_p\\,(T_B - T_A)$$</p>
<p>Il lavoro è immediato perché $p$ esce dall'integrale:</p>
<p>$$W = \\int_{V_A}^{V_B} p\\,dV = p\\,(V_B - V_A) = nR\\,(T_B - T_A)$$</p>
<p>dove l'ultima forma si ottiene applicando $pV = nRT$ agli stati iniziale e finale. Infine:</p>
<p>$$\\Delta U = n\\,c_v\\,(T_B - T_A)$$</p>`
          },
          {
            subtitle: "Verifica di coerenza col primo principio",
            content: `<p>Si può verificare il primo principio:</p>
<p>$$\\Delta U = Q_p - W = n\\,c_p\\,(T_B-T_A) - nR\\,(T_B-T_A) = n\\,(c_p - R)\\,(T_B-T_A) = n\\,c_v\\,(T_B-T_A) \\;\\checkmark$$</p>`
          },
          {
            subtitle: "Interpretazione geometrica",
            content: `<p>Sul diagramma di Clapeyron ($p$-$V$), un'isobara è un segmento orizzontale all'altezza $p = p_A = p_B$. Il lavoro corrisponde all'area del rettangolo sotteso, di base $V_B - V_A$ e altezza $p$.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Isobara nel diagramma p-V</strong></p>
  <p><em>Segmento orizzontale da A(V_A, p) a B(V_B, p) con area rettangolare colorata sottostante. Freccia da A verso B. L'area ombreggiata rappresenta W = p(V_B − V_A).</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`
          }
        ],
        formulas: [
          { label: "Legge di Gay-Lussac (p cost)", latex: "\\frac{V}{T} = \\frac{nR}{p} = \\text{cost}" },
          { label: "Calore a pressione costante", latex: "Q_p = n\\,c_p\\,(T_B - T_A)" },
          { label: "Lavoro isobaro", latex: "W = p\\,(V_B - V_A) = nR\\,(T_B - T_A)" }
        ]
      },
      {
        id: "s52-cicli-termodinamici",
        type: "section",
        title: "Trasformazioni cicliche",
        icon: "🔄",
        content: `<p>Chiudiamo il discorso sui gas ideali e torniamo a parlare di sistemi termodinamici generali.</p>
<p><strong>Definizione:</strong> una <strong>trasformazione ciclica</strong> (o <strong>ciclo termodinamico</strong>) è una catena di trasformazioni al termine della quale il sistema si ritrova esattamente nello stesso stato termodinamico di partenza: lo stato finale coincide con lo stato iniziale.</p>`,
        subsections: [
          {
            subtitle: "Conseguenze fondamentali",
            content: `<p>Poiché $U$ è una funzione di stato e gli stati iniziale e finale coincidono:</p>
<p>$$\\Delta U = 0 \\quad \\Rightarrow \\quad Q_{\\text{netto}} = W_{\\text{netto}}$$</p>
<p>In un ciclo, tutto il calore scambiato a bilancio netto viene convertito in lavoro (e viceversa). Il sistema, alla fine del ciclo, ha lo stesso contenuto energetico iniziale, anche se durante il ciclo ha scambiato sia calore sia lavoro.</p>`
          },
          {
            subtitle: "Lavoro e verso di percorrenza nel diagramma p-V",
            content: `<p>Nel diagramma di Clapeyron, il lavoro netto di un ciclo corrisponde all'area racchiusa dalla curva. Il segno del lavoro dipende dal verso di percorrenza:</p>
<ul>
  <li><strong>Senso orario</strong>: $W \\gt 0$ (il sistema compie lavoro netto sull'ambiente → ciclo termico).</li>
  <li><strong>Senso antiorario</strong>: $W \\lt 0$ (il sistema subisce lavoro netto dall'ambiente → ciclo frigorifero).</li>
</ul>`
          }
        ],
        formulas: [
          { label: "Bilancio ciclico", latex: "\\Delta U = 0 \\;\\Rightarrow\\; Q_{\\text{netto}} = W_{\\text{netto}}" }
        ],
        quote: {
          text: "Il motore ciclico più diffuso è quello dell'automobile (motore a scoppio). Dopo ogni \"giro\", i pistoni tornano nella stessa posizione iniziale e il sistema si ritrova con la stessa energia, dopo aver scambiato lavoro e calore. Una fonte esterna (il combustibile) alimenta il ciclo facendolo ripetere.",
          src: "Il Prof."
        }
      },
      {
        id: "s52-macchina-termica",
        type: "section",
        title: "Ciclo termico e macchina termica",
        icon: "⚙️",
        content: `<p><strong>Definizione:</strong> un <strong>ciclo termico</strong> è un ciclo nel quale il bilancio netto di calore scambiato è positivo:</p>
<p>$$Q_{\\text{netto}} = W_{\\text{netto}} \\gt 0$$</p>
<p>Un sistema che opera tale ciclo assorbe calore (a bilancio netto) e compie lavoro (a bilancio netto). Una macchina che opera ciclicamente in questo modo si dice <strong>macchina termica</strong>.</p>
<blockquote>Le macchine termiche sono alimentate a calore e producono lavoro meccanico. Il carburante è il calore; l'effetto utile è il lavoro.</blockquote>`,
        subsections: [
          {
            subtitle: "Rendimento di una macchina termica",
            content: `<p>Vogliamo un parametro che quantifichi la "bontà" della macchina: a parità di lavoro desiderato, la macchina migliore richiede meno calore; equivalentemente, a parità di calore assorbito, la migliore produce più lavoro.</p>
<p><strong>Definizione:</strong> il <strong>rendimento</strong> di una macchina termica è definito come il rapporto tra l'effetto utile (lavoro prodotto) e il costo (calore assorbito):</p>
<p>$$\\eta \\;\\stackrel{\\triangle}{=}\\; \\frac{W}{Q_A}$$</p>
<p>dove $W$ è il lavoro netto compiuto in un ciclo e $Q_A \\gt 0$ è il calore totale assorbito in un ciclo.</p>
<p>Su un ciclo $\\Delta U = 0$, quindi $W = Q_{\\text{netto}} = Q_A + Q_C$, dove $Q_A \\gt 0$ è il calore assorbito e $Q_C \\lt 0$ è il calore ceduto. Sostituendo:</p>
<p>$$\\eta = \\frac{Q_A + Q_C}{Q_A} = 1 + \\frac{Q_C}{Q_A} = 1 - \\frac{|Q_C|}{Q_A}$$</p>`
          },
          {
            subtitle: "Casi limite del rendimento",
            content: `<ul>
  <li>$\\eta = 0$: macchina che assorbe calore e lo cede integralmente senza compiere lavoro ($W = 0$, $|Q_C| = Q_A$). È la peggiore macchina termica concepibile.</li>
  <li>$\\eta = 1$: macchina ideale che converte <em>tutto</em> il calore assorbito in lavoro ($Q_C = 0$). Nessun calore viene ceduto.</li>
</ul>`
          },
          {
            subtitle: "Anticipazione del secondo principio",
            content: `<p>Il secondo principio della termodinamica, che verrà studiato a breve, afferma (come dato di esperienza) che in natura <strong>non esiste alcuna macchina termica con $\\eta = 1$</strong>: ci sarà sempre una quota inevitabile di calore ceduta a un ambiente a temperatura più bassa. Quindi:</p>
<p>$$0 \\le \\eta \\lt 1$$</p>
<p>Questo risultato, noto come <em>enunciato di Kelvin-Planck</em>, stabilisce un limite fondamentale alla conversione di calore in lavoro.</p>`
          }
        ],
        formulas: [
          { label: "Rendimento", latex: "\\eta = \\frac{W}{Q_A} = 1 - \\frac{|Q_C|}{Q_A}" }
        ]
      },
      {
        id: "s52-macchina-frigorifera",
        type: "section",
        title: "Ciclo frigorifero e macchina frigorifera",
        icon: "❄️",
        content: `<p><strong>Definizione:</strong> un <strong>ciclo frigorifero</strong> è un ciclo termodinamico in cui il bilancio netto del calore scambiato è negativo:</p>
<p>$$Q_{\\text{netto}} = W_{\\text{netto}} \\lt 0$$</p>
<p>Il sistema <em>assorbe lavoro</em> dall'esterno e, a bilancio netto, <em>cede calore</em>: trasferisce calore da una sorgente fredda a una sorgente calda.</p>`,
        subsections: [
          {
            subtitle: "Spontaneità degli scambi termici",
            content: `<blockquote>In natura non si osservano spontaneamente trasformazioni in cui il calore migri da una sorgente fredda verso una sorgente più calda. Spontaneamente, il calore fluisce sempre dal sistema a temperatura maggiore verso quello a temperatura minore. Per invertire questo flusso bisogna spendere lavoro meccanico dall'esterno. Questo fatto di esperienza costituirà uno degli enunciati del secondo principio (enunciato di Clausius).</blockquote>`
          },
          {
            subtitle: "Esempio: il frigorifero domestico",
            content: `<p>All'interno del frigorifero c'è dell'aria a temperatura ambiente. Per portarla a $4\\,^\\circ\\mathrm{C}$ il calore deve passare dall'interno (freddo) all'esterno (caldo): processo non spontaneo. Un <em>compressore</em> comprime un gas refrigerante in una serpentina; questo gas, fatto poi espandere, si raffredda al di sotto della temperatura dell'aria interna, ne assorbe calore e lo cede infine all'ambiente esterno attraverso lo scambiatore posteriore.</p>
<p>Il rumore del frigorifero quando "parte" è proprio il compressore. Se la serpentina si buca, il compressore continua a girare (consumando lavoro), ma il trasferimento di calore dalla sorgente fredda diventa inefficace.</p>`
          },
          {
            subtitle: "Efficienza frigorifera (COP)",
            content: `<p><strong>Definizione:</strong> l'<strong>efficienza frigorifera</strong> (o <strong>coefficiente di prestazione</strong>, COP) di una macchina frigorifera è:</p>
<p>$$\\mathrm{COP} = \\frac{|Q_{\\text{fredda}}|}{|W|}$$</p>
<p>dove $|Q_{\\text{fredda}}|$ è il calore sottratto alla sorgente fredda e $|W|$ è il lavoro (in modulo) speso sul sistema.</p>
<p>Più il COP è grande, più il frigorifero è efficiente: con poco lavoro sposta molto calore. A differenza del rendimento, il COP può essere maggiore di 1.</p>
<p><strong>Esempio numerico:</strong> un frigorifero assorbe $150\\,\\mathrm{J}$ dalla sorgente fredda spendendo $50\\,\\mathrm{J}$ di lavoro: $\\mathrm{COP} = 150/50 = 3$. Questo significa che per ogni joule di lavoro elettrico speso, il frigorifero trasferisce 3 joule di calore dalla sorgente fredda.</p>`
          }
        ],
        formulas: [
          { label: "Efficienza frigorifera", latex: "\\mathrm{COP} = \\frac{|Q_{\\text{fredda}}|}{|W|}" }
        ]
      },
      {
        id: "s52-confronto-macchine",
        type: "note_box",
        title: "Schema riassuntivo: macchina termica vs macchina frigorifera",
        icon: "📊",
        content: `<table style="width:100%; border-collapse:collapse; margin:16px 0;">
<thead>
<tr style="border-bottom:2px solid var(--border-light);">
  <th style="text-align:left; padding:8px;"></th>
  <th style="text-align:center; padding:8px;"><strong>Macchina termica</strong></th>
  <th style="text-align:center; padding:8px;"><strong>Macchina frigorifera</strong></th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:8px;">Alimentazione</td>
  <td style="text-align:center; padding:8px;">Calore</td>
  <td style="text-align:center; padding:8px;">Lavoro</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:8px;">Effetto utile</td>
  <td style="text-align:center; padding:8px;">Lavoro</td>
  <td style="text-align:center; padding:8px;">Trasferimento di calore</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:8px;">Parametro di qualità</td>
  <td style="text-align:center; padding:8px;">$\\eta = W/Q_A$</td>
  <td style="text-align:center; padding:8px;">$\\mathrm{COP} = |Q_{\\text{fredda}}|/|W|$</td>
</tr>
<tr>
  <td style="padding:8px;">Intervallo</td>
  <td style="text-align:center; padding:8px;">$0 \\le \\eta \\lt 1$</td>
  <td style="text-align:center; padding:8px;">$\\mathrm{COP} \\ge 0$</td>
</tr>
</tbody>
</table>`
      },
      {
        id: "s52-ciclo-carnot",
        type: "section",
        title: "Il ciclo di Carnot",
        icon: "🏆",
        content: `<p>Concludiamo introducendo un ciclo termodinamico particolarmente importante, che verrà usato nella prossima lezione per ricavare il secondo principio della termodinamica.</p>
<p><strong>Definizione:</strong> il <strong>ciclo di Carnot</strong> è un ciclo termodinamico con le seguenti caratteristiche:</p>
<ol>
  <li>Il sistema è costituito da un <em>gas ideale</em>;</li>
  <li>Il ciclo è <em>reversibile</em> (tutte le trasformazioni che lo compongono sono reversibili);</li>
  <li>È operato tra <em>due sole sorgenti</em> termiche, a temperature $T_1 \\lt T_2$;</li>
  <li>È composto da <em>due isoterme</em> e <em>due adiabatiche</em>, alternate.</li>
</ol>
<p>Un ciclo è reversibile se <em>tutte</em> le trasformazioni che lo costituiscono sono reversibili. Se anche una sola trasformazione del ciclo è irreversibile, tutto il ciclo è irreversibile.</p>`,
        subsections: [
          {
            subtitle: "Struttura del ciclo: le quattro fasi",
            content: `<p>Partendo da uno stato $A$, il ciclo si articola in quattro fasi:</p>
<ol>
  <li>$A \\to B$: <strong>espansione isoterma</strong> reversibile alla temperatura alta $T_2$. Il gas, espandendosi, tenderebbe a raffreddarsi; per restare a $T_2$ <em>assorbe calore</em> $Q_A \\gt 0$ dalla sorgente calda.</li>
  <li>$B \\to C$: <strong>espansione adiabatica</strong> reversibile. Nessuno scambio di calore; il gas si raffredda fino a $T_1$.</li>
  <li>$C \\to D$: <strong>compressione isoterma</strong> reversibile alla temperatura bassa $T_1$. Il gas, compresso, tenderebbe a scaldarsi; per restare a $T_1$ <em>cede calore</em> $|Q_C|$ alla sorgente fredda ($Q_C \\lt 0$).</li>
  <li>$D \\to A$: <strong>compressione adiabatica</strong> reversibile. Nessuno scambio di calore; il gas si riscalda fino a $T_2$, chiudendo il ciclo.</li>
</ol>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Ciclo di Carnot nel piano p-V</strong></p>
  <p><em>Quattro punti A, B, C, D nel diagramma p-V. A (in alto a sinistra, alta pressione, piccolo volume) e B (in alto a destra sulla stessa isoterma T₂) collegati dall'isoterma calda (curva iperbole rossa). B e C collegati da un'adiabatica (curva blu, più ripida dell'isoterma, scende verso destra). C (in basso a destra, bassa pressione, grande volume) e D (in basso a sinistra sulla stessa isoterma T₁) collegati dall'isoterma fredda (curva iperbole rossa). D e A collegati da un'adiabatica (curva blu, risale verso sinistra). Frecce direzionali su ogni tratto: A→B, B→C, C→D, D→A (senso orario). L'area racchiusa dal ciclo rappresenta il lavoro netto positivo.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Poiché il ciclo di Carnot (nella sua versione di macchina termica) è percorso in <strong>senso orario</strong> nel diagramma $p$-$V$, il lavoro netto è positivo: il sistema compie lavoro sull'ambiente. Il lavoro netto corrisponde all'area racchiusa dal ciclo.</p>`
          },
          {
            subtitle: "Calcolo del rendimento del ciclo di Carnot",
            content: `<p><strong>Impostazione.</strong> Per definizione:</p>
<p>$$\\eta = \\frac{W}{Q_A} = \\frac{Q_A + Q_C}{Q_A} = 1 - \\frac{|Q_C|}{Q_A}$$</p>
<p>poiché su un ciclo $\\Delta U = 0$ implica $W = Q = Q_A + Q_C$ (con $Q_C \\lt 0$).</p>
<p><strong>Dove avvengono gli scambi di calore?</strong> Solo nelle due isoterme:</p>
<ul>
  <li>$A \\to B$ (isoterma a $T_2$): il gas si espande, assorbe calore. Quindi $Q_A = Q_{A\\to B} \\gt 0$.</li>
  <li>$B \\to C$ (adiabatica): $Q = 0$.</li>
  <li>$C \\to D$ (isoterma a $T_1$): il gas viene compresso, cede calore. Quindi $Q_C = Q_{C\\to D} \\lt 0$.</li>
  <li>$D \\to A$ (adiabatica): $Q = 0$.</li>
</ul>
<p><strong>Calcolo dei calori scambiati nelle isoterme.</strong> Usando la formula per le isoterme reversibili:</p>
<p>$$Q_A = n R T_2 \\,\\ln\\!\\left(\\frac{V_B}{V_A}\\right) \\gt 0, \\qquad |Q_C| = n R T_1 \\,\\ln\\!\\left(\\frac{V_C}{V_D}\\right) \\gt 0$$</p>
<p><strong>Collegamento tramite le adiabatiche.</strong> Per legare i rapporti di volume $V_B/V_A$ e $V_C/V_D$ si usano le due adiabatiche reversibili, applicando $TV^{\\gamma-1} = \\text{cost}$:</p>
<p>$$B \\to C:\\quad T_2\\,V_B^{\\gamma-1} = T_1\\,V_C^{\\gamma-1}$$</p>
<p>$$D \\to A:\\quad T_1\\,V_D^{\\gamma-1} = T_2\\,V_A^{\\gamma-1}$$</p>
<p>Dividendo membro a membro la prima per la seconda:</p>
<p>$$\\frac{T_2\\,V_B^{\\gamma-1}}{T_1\\,V_D^{\\gamma-1}} = \\frac{T_1\\,V_C^{\\gamma-1}}{T_2\\,V_A^{\\gamma-1}}$$</p>
<p>Da cui si ottiene:</p>
<p>$$\\left(\\frac{V_B}{V_D}\\right)^{\\gamma-1} = \\left(\\frac{V_C}{V_A}\\right)^{\\gamma-1}$$</p>
<p>Poiché l'esponente $(\\gamma - 1) \\gt 0$, le basi devono essere uguali:</p>
<p>$$\\frac{V_B}{V_D} = \\frac{V_C}{V_A}$$</p>
<p>Riordinando (moltiplicando entrambi i membri per $V_A/V_D$):</p>
<p>$$\\frac{V_B}{V_A} = \\frac{V_C}{V_D}$$</p>
<p>Quindi i logaritmi si semplificano nel rapporto $|Q_C|/Q_A$:</p>
<p>$$\\frac{|Q_C|}{Q_A} = \\frac{T_1\\,\\ln(V_C/V_D)}{T_2\\,\\ln(V_B/V_A)} = \\frac{T_1}{T_2}$$</p>
<p><strong>Risultato finale:</strong></p>
<p>$$\\eta_{\\text{Carnot}} = 1 - \\frac{T_1}{T_2}$$</p>
<p>Il rendimento del ciclo di Carnot dipende <strong>esclusivamente</strong> dalle temperature assolute delle due sorgenti, e <em>non</em> dalla natura del gas o dai dettagli del ciclo.</p>`
          },
          {
            subtitle: "Analisi del rendimento di Carnot",
            content: `<p>Dalla formula $\\eta = 1 - T_1/T_2$ si osserva che:</p>
<ul>
  <li>$\\eta \\to 1$ quando $T_1 \\to 0$ oppure $T_2 \\to \\infty$: situazioni ideali e irraggiungibili.</li>
  <li>$\\eta \\to 0$ quando $T_1 \\to T_2$: se le due sorgenti hanno la stessa temperatura, non si può estrarre lavoro.</li>
  <li>Per aumentare il rendimento conviene aumentare $T_2$ (sorgente calda più calda) o diminuire $T_1$ (sorgente fredda più fredda).</li>
</ul>`
          }
        ],
        formulas: [
          { label: "Rendimento di Carnot", latex: "\\eta_{\\text{Carnot}} = 1 - \\frac{T_1}{T_2}" }
        ],
        extra_content: `<p><strong>Importanza del ciclo di Carnot:</strong> il ciclo di Carnot non è solo un esercizio riepilogativo sulle trasformazioni dei gas ideali: è il <em>ciclo di riferimento</em> attorno al quale ruota tutta la formulazione del secondo principio della termodinamica. Si dimostrerà che il rendimento di Carnot è il <em>massimo rendimento possibile</em> per qualsiasi macchina termica operante tra le stesse due temperature (teorema di Carnot).</p>
<p>Da notare: l'intuizione per cui il ciclo di Carnot raggiunge il massimo rendimento risiede nel fatto che è completamente reversibile e non presenta dissipazioni. Qualsiasi irreversibilità (attrito, conduzione termica attraverso differenze finite di temperatura, mescolamento) riduce inevitabilmente il rendimento rispetto a quello di Carnot.</p>`
      }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è una sorgente termodinamica?",
            back: "È un sistema termodinamico con capacità termica infinita ($C_{cap} \\to \\infty$). Può assorbire o cedere qualsiasi quantità finita di calore senza variare apprezzabilmente la propria temperatura, poiché $dT = \\delta Q / C_{cap} \\to 0$. Esempio: un lago rispetto a un piccolo oggetto caldo immerso in esso."
        },
        {
            type: "domanda",
            front: "Perché il calore specifico dipende dal tipo di trasformazione?",
            back: "Perché il calore scambiato $\\delta Q$ è una funzione di processo, non di stato. Il calore specifico è definito come $C = \\frac{1}{m}\\frac{\\delta Q}{dT}$, e poiché $\\delta Q$ dipende dalla trasformazione, anche $C$ ne dipende. Per esempio, $C_p \\gt C_v$ perché a pressione costante parte del calore serve a compiere lavoro di espansione."
        },
        {
            type: "domanda",
            front: "Quali sono le quattro fasi del ciclo di Carnot?",
            back: "1) A→B: espansione isoterma reversibile a $T_2$ (assorbe calore $Q_{AB} \\gt 0$). 2) B→C: espansione adiabatica reversibile (temperatura scende da $T_2$ a $T_1$). 3) C→D: compressione isoterma reversibile a $T_1$ (cede calore $Q_{CD} \\lt 0$). 4) D→A: compressione adiabatica reversibile (temperatura risale da $T_1$ a $T_2$)."
        },
        {
            type: "dimostrazione",
            front: "Ricava il rendimento del ciclo di Carnot per un gas ideale.",
            back: "Poiché $\\Delta U_{ciclo} = 0$, si ha $W = Q_{AB} + Q_{CD}$ e $\\eta = W/Q_{AB} = 1 - |Q_{CD}|/Q_{AB}$. I calori sulle isoterme sono $Q_{AB} = nRT_2 \\ln(V_B/V_A)$ e $|Q_{CD}| = nRT_1 \\ln(V_C/V_D)$. Dalle adiabatiche ($TV^{\\gamma-1} = \\text{cost}$) si ricava $V_B/V_A = V_C/V_D$, quindi i logaritmi si semplificano e resta $\\eta_{\\text{Carnot}} = 1 - T_1/T_2$."
        },
        {
            type: "formula",
            front: "Scrivi le tre equazioni di Poisson per un'adiabatica reversibile di gas ideale.",
            back: "1) $pV^\\gamma = \\text{costante}$, 2) $TV^{\\gamma-1} = \\text{costante}$, 3) $Tp^{\\frac{1-\\gamma}{\\gamma}} = \\text{costante}$, dove $\\gamma = C_p/C_v$. La seconda e la terza si ricavano dalla prima sostituendo $p$ o $V$ tramite la legge dei gas ideali $pV = nRT$."
        },
        {
            type: "tranello",
            front: "Il rendimento di Carnot dipende dal tipo di gas ideale usato (monoatomico o biatomico)?",
            back: "No! Il rendimento $\\eta_{\\text{Carnot}} = 1 - T_1/T_2$ dipende esclusivamente dalle temperature delle due sorgenti. Non compare $\\gamma$, né $C_v$, né $C_p$. Nella derivazione, il rapporto dei logaritmi si semplifica grazie alla relazione tra i volumi imposta dalle adiabatiche, eliminando ogni dipendenza dalla sostanza."
        },
        {
            type: "domanda",
            front: "Perché sul piano p-V un'adiabatica reversibile è più ripida di un'isoterma che parte dallo stesso punto?",
            back: "L'isoterma ha equazione $p \\propto V^{-1}$, mentre l'adiabatica ha equazione $p \\propto V^{-\\gamma}$. Poiché $\\gamma \\gt 1$, la pendenza (in valore assoluto) dell'adiabatica è maggiore di quella dell'isoterma."
        },
        {
            type: "domanda",
            front: "In una trasformazione isoterma di un gas ideale, qual è la relazione tra calore e lavoro? E la variazione di energia interna?",
            back: "Poiché $T = \\text{cost}$ e per un gas ideale $U$ dipende solo da $T$, si ha $\\Delta U = 0$. Dal primo principio: $Q = W$. Per una isoterma reversibile: $Q = W = nRT \\ln(V_B/V_A)$."
        },
        {
            type: "domanda",
            front: "Nell'esempio della centrale termica con $T_2 = 800$ K e $T_1 = 300$ K, qual è il rendimento massimo? Cosa implica per il calore ceduto?",
            back: "Il rendimento massimo è $\\eta_{\\text{Carnot}} = 1 - 300/800 = 62{,}5\\%$. Ciò implica che almeno il $37{,}5\\%$ del calore assorbito dalla caldaia viene inevitabilmente ceduto al condensatore. Nessuna macchina termica reale operante tra queste temperature può fare meglio."
        }
    ]
};

