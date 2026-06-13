const LESSON = {
    id: "L53", date: "Lezione 38 — 08 Giu 2026",
    title: "Teorema di Carnot e Teorema di Clausius: Verso l'Entropia",
    abstract: "Dalle conseguenze del teorema di Carnot alla disuguaglianza di Clausius, fino alla definizione rigorosa dell'entropia come funzione di stato e al principio dell'aumento dell'entropia per sistemi isolati.",

    sections: [
        {
            id: "s53-riepilogo-carnot",
            type: "section",
            title: "Riepilogo e conseguenze del Teorema di Carnot",
            icon: "🔄",
            content: `<p>Nella scorsa lezione abbiamo introdotto il teorema di Carnot, dopo aver enunciato il secondo principio della termodinamica nelle sue due formulazioni storiche. La prima, quella di Kelvin-Planck, è strettamente legata alle macchine termiche, ovvero a trasformazioni cicliche che hanno lo scopo di convertire calore in lavoro.</p>
<p>Il secondo principio ci dice che <strong>non è possibile trasformare tutto il calore assorbito in lavoro</strong>. Il calore assorbito si riferisce al bilancio del calore scambiato durante un ciclo: in una macchina termica ci sarà del calore scambiato con diverse sorgenti a diverse temperature. A bilancio, la quantità di calore assorbito sarà maggiore di quella ceduta. Il secondo principio afferma che non tutto il calore assorbito può essere trasformato in lavoro; ci sarà sempre una quota di calore ceduta.</p>
<p>Di conseguenza, del calore assorbito a bilancio durante un ciclo, ci sarà una quota massima trasformabile in lavoro, mentre il resto verrà ceduto a una sorgente a temperatura più bassa.</p>`,
            subsections: [
                {
                    subtitle: "Il Teorema di Carnot",
                    content: `<p>In una situazione in cui una macchina termica opera tra <strong>due sole sorgenti</strong>, il rendimento massimo si ottiene quando questa macchina opera <strong>reversibilmente</strong>. Tutte le macchine che operano in modo irreversibile tra le stesse due sorgenti hanno un rendimento più basso.</p>
<p>Questo teorema ha due conseguenze importanti:</p>
<ol>
<li><strong>Tutte le macchine reversibili tra le stesse due sorgenti hanno lo stesso rendimento.</strong> Se il rendimento della macchina reversibile è il limite massimo, allora tutte le macchine reversibili devono avere esattamente quel rendimento.</li>
<li><strong>Conseguenza pratica fondamentale:</strong> se riusciamo a concepire anche solo idealmente un ciclo termico reversibile di cui sappiamo calcolare il rendimento, quel rendimento sarà lo stesso per tutte le altre macchine che operano reversibilmente tra quelle stesse due sorgenti. Questo è un punto fondamentale per risolvere molti problemi di termodinamica.</li>
</ol>`
                },
                {
                    subtitle: "Una relazione fondamentale per i cicli reversibili",
                    content: `<p>Ricordiamo la definizione generale di rendimento $\\eta$:</p>
<p>$$\\eta = 1 + \\frac{Q_C}{Q_A}$$</p>
<p>dove $Q_A$ è il calore assorbito e $Q_C$ è il calore ceduto (che è una quantità negativa).</p>
<p>Per un ciclo di Carnot operante tra due sorgenti a temperature $T_2 \\gt T_1$, il rendimento è anche dato da:</p>
<p>$$\\eta = 1 - \\frac{T_1}{T_2}$$</p>
<p>Uguagliando le due espressioni per una macchina reversibile, otteniamo:</p>
<p>$$1 + \\frac{Q_C}{Q_A} = 1 - \\frac{T_1}{T_2} \\quad \\Rightarrow \\quad \\frac{Q_C}{Q_A} = -\\frac{T_1}{T_2}$$</p>
<p>Identifichiamo il calore assorbito $Q_A$ con il calore $Q_2$ scambiato con la sorgente a temperatura $T_2$, e il calore ceduto $Q_C$ con il calore $Q_1$ scambiato con la sorgente a temperatura $T_1$. Quindi $Q_A = Q_2$ e $Q_C = Q_1$. Ricordiamo che $Q_2 \\gt 0$ (calore assorbito dalla sorgente calda) e $Q_1 \\lt 0$ (calore ceduto alla sorgente fredda), coerentemente con la convenzione che $Q_C \\lt 0$. La relazione diventa:</p>
<p>$$\\frac{Q_1}{Q_2} = -\\frac{T_1}{T_2} \\quad \\Rightarrow \\quad \\frac{Q_1}{T_1} = -\\frac{Q_2}{T_2}$$</p>
<p>da cui si ottiene la <strong>relazione fondamentale</strong> per un ciclo di Carnot (e per qualsiasi ciclo reversibile tra due sorgenti):</p>
<p>$$\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0$$</p>
<p>Questa relazione può essere scritta in forma di sommatoria:</p>
<p>$$\\sum_{i=1}^{2} \\frac{Q_i}{T_i} = 0 \\quad \\text{per trasformazioni reversibili}$$</p>
<p>Questa è una conseguenza del teorema di Carnot. Di per sé, non ha un significato fisico immediato, ma è un punto di partenza cruciale per la generalizzazione che segue.</p>`
                }
            ],
            formulas: [
                { label: "Rendimento (definizione)", latex: "\\eta = 1 + \\frac{Q_C}{Q_A}" },
                { label: "Rendimento di Carnot", latex: "\\eta = 1 - \\frac{T_1}{T_2}" },
                { label: "Relazione fondamentale (2 sorgenti)", latex: "\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0" }
            ]
        },
        {
            id: "s53-teorema-clausius",
            type: "section",
            title: "Il Teorema di Clausius",
            icon: "📐",
            content: `<p>Il teorema di Carnot ha delle limitazioni: si applica solo a macchine che operano tra <strong>due sorgenti</strong> e, per i cicli irreversibili, ci dice solo che il rendimento è più basso, senza quantificare di quanto.</p>
<p>Clausius si pose il problema di generalizzare questo risultato: è possibile estendere il teorema di Carnot a cicli operati tra più di due sorgenti? E si può dire qualcosa di più quantitativo sulle trasformazioni irreversibili?</p>`,
            subsections: [
                {
                    subtitle: "Enunciato del Teorema",
                    content: `<p>Per una macchina termica che compie un ciclo scambiando calore con $N \\ge 2$ sorgenti, vale la <strong>disuguaglianza di Clausius</strong>:</p>
<p>$$\\sum_{i=1}^{N} \\frac{Q_i}{T_i} \\le 0$$</p>
<p>In particolare:</p>
<ul>
<li>Se la trasformazione è <strong>reversibile</strong>, vale l'uguaglianza: $\\displaystyle\\sum_{i=1}^{N} \\frac{Q_i}{T_i} = 0$</li>
<li>Se la trasformazione è <strong>irreversibile</strong>, vale la disuguaglianza stretta: $\\displaystyle\\sum_{i=1}^{N} \\frac{Q_i}{T_i} \\lt 0$</li>
</ul>`
                },
                {
                    subtitle: "Nota sulla dimostrazione",
                    content: `<p>La dimostrazione formale è stata omessa a lezione. L'idea chiave è la seguente: si accoppia una macchina generica con un insieme di <strong>macchine di Carnot ausiliarie</strong> in modo da ricondursi a una macchina che opera con una sola sorgente. Se la disuguaglianza di Clausius non fosse verificata, si arriverebbe a una violazione del secondo principio della termodinamica.</p>`
                },
                {
                    subtitle: "Forma integrale (infiniti scambi)",
                    content: `<p>Se consideriamo un numero di sorgenti che tende all'infinito, ovvero una successione continua di scambi di calore infinitesimi, la sommatoria diventa un integrale. Una concatenazione di infinite trasformazioni infinitesime che riporta il sistema allo stato iniziale è un ciclo. In questo caso, il teorema di Clausius si esprime tramite l'<strong>integrale ciclico</strong>:</p>
<p>$$\\oint \\frac{\\delta Q}{T} \\le 0$$</p>
<p>dove il cerchietto sull'integrale indica che l'integrazione è estesa a un percorso chiuso (un ciclo). Distinguiamo i due casi:</p>
<ul>
<li>Per un ciclo <strong>reversibile</strong>: $\\displaystyle\\oint \\frac{\\delta Q_R}{T} = 0$</li>
<li>Per un ciclo <strong>irreversibile</strong>: $\\displaystyle\\oint \\frac{\\delta Q_{IRR}}{T} \\lt 0$</li>
</ul>`
                }
            ],
            formulas: [
                { label: "Disuguaglianza di Clausius (discreta)", latex: "\\sum_{i=1}^{N} \\frac{Q_i}{T_i} \\le 0" },
                { label: "Disuguaglianza di Clausius (integrale)", latex: "\\oint \\frac{\\delta Q}{T} \\le 0" }
            ],
            extra_content: `<blockquote>Questa disuguaglianza è estremamente potente. Cominciamo a capire che il rapporto $\\delta Q/T$ è importante. La sua somma (o integrale) su un ciclo sembra quantificare il grado di irreversibilità. È nullo nel caso ideale reversibile, dove non si "spreca" nulla, e diventa negativo quando la trasformazione è irreversibile, cioè quando una parte dell'energia che avremmo potuto usare viene dissipata.</blockquote>`
        },
        {
            id: "s53-definizione-entropia",
            type: "section",
            title: "Definizione di Entropia",
            icon: "🧩",
            content: `<p>Concentriamoci ora sulla proprietà dell'integrale per i cicli reversibili:</p>
<p>$$\\oint \\frac{\\delta Q_R}{T} = 0$$</p>
<p>Consideriamo un ciclo reversibile generico che porta un sistema da uno stato A a uno stato B attraverso un percorso (I) e lo riporta da B ad A attraverso un percorso diverso (II):</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Ciclo reversibile nel piano P-V</strong></p>
  <p><em>Piano P-V con due stati A (in alto a sinistra) e B (in basso a destra). Il percorso (I) va da A a B passando per la parte superiore (curva blu con freccia verso destra). Il percorso (II) va da B ad A passando per la parte inferiore (curva rossa con freccia verso sinistra). I due percorsi formano un ciclo chiuso.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Possiamo spezzare l'integrale ciclico nella somma degli integrali sui due percorsi:</p>
<p>$$\\oint \\frac{\\delta Q_R}{T} = \\int_{A,\\,(I)}^{B} \\frac{\\delta Q_R}{T} + \\int_{B,\\,(II)}^{A} \\frac{\\delta Q_R}{T} = 0$$</p>
<p>Utilizzando la proprietà degli integrali definiti, secondo cui $\\int_B^A = - \\int_A^B$, possiamo scrivere:</p>
<p>$$\\int_{A,\\,(I)}^{B} \\frac{\\delta Q_R}{T} - \\int_{A,\\,(II)}^{B} \\frac{\\delta Q_R}{T} = 0$$</p>
<p>Questo ci porta a una conclusione fondamentale:</p>
<p>$$\\int_{A,\\,(I)}^{B} \\frac{\\delta Q_R}{T} = \\int_{A,\\,(II)}^{B} \\frac{\\delta Q_R}{T}$$</p>
<p>L'integrale della quantità $\\frac{\\delta Q_R}{T}$ tra due stati A e B <strong>non dipende dal percorso reversibile seguito</strong>. Questa è la proprietà che definisce una <strong>funzione di stato</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Definizione formale della variazione di entropia",
                    content: `<p>Si definisce <strong>variazione di entropia</strong> $\\Delta S$ tra due stati di equilibrio A e B la quantità:</p>
<p>$$\\Delta S = S_B - S_A \\equiv \\int_A^B \\frac{\\delta Q_R}{T}$$</p>
<p>dove l'integrale è calcolato lungo una <strong>qualsiasi</strong> trasformazione reversibile che connette A e B.</p>
<p>In forma differenziale:</p>
<p>$$dS = \\frac{\\delta Q_R}{T}$$</p>
<p>Il differenziale $dS$ è un <strong>differenziale esatto</strong>, a differenza di $\\delta Q$ che è un differenziale non esatto (il calore scambiato dipende dal percorso).</p>`
                },
                {
                    subtitle: "Proprietà dell'Entropia",
                    content: `<p><strong>È una funzione di stato:</strong> la sua variazione dipende solo dagli stati iniziale e finale, non dalla trasformazione seguita.</p>
<p><strong>È una grandezza additiva (estensiva):</strong> se un sistema è composto da due sottosistemi 1 e 2, l'entropia totale è la somma delle entropie dei sottosistemi: $S_{TOT} = S_1 + S_2$. L'additività segue dal fatto che l'entropia è definita come integrale di $\\delta Q_R / T$: se il sistema è composto da due parti che scambiano calore indipendentemente, gli integrali si sommano.</p>`
                }
            ],
            formulas: [
                { label: "Variazione di entropia", latex: "\\Delta S = S_B - S_A = \\int_A^B \\frac{\\delta Q_R}{T}" },
                { label: "Forma differenziale", latex: "dS = \\frac{\\delta Q_R}{T}" },
                { label: "Additività", latex: "S_{TOT} = S_1 + S_2" }
            ]
        },
        {
            id: "s53-passaggio-clausius-entropia",
            type: "note_box",
            title: "Come si passa da Clausius all'entropia per trasformazioni non cicliche?",
            icon: "🔗",
            content: `<p>Il teorema di Clausius è enunciato per <strong>cicli</strong> ($\\oint \\frac{\\delta Q}{T} \\le 0$), ma la disuguaglianza generale per trasformazioni non cicliche è:</p>
<p>$$S_B - S_A \\ge \\int_A^B \\frac{\\delta Q}{T}$$</p>
<p>Il passaggio si ottiene così: consideriamo un ciclo composto da una trasformazione <strong>reale</strong> (eventualmente irreversibile) da A a B, seguita da una trasformazione <strong>reversibile</strong> da B ad A. Applicando Clausius al ciclo intero:</p>
<p>$$\\int_{A}^{B} \\frac{\\delta Q}{T} + \\int_{B,\\,\\text{rev}}^{A} \\frac{\\delta Q_R}{T} \\le 0$$</p>
<p>Il secondo integrale vale $-(S_B - S_A)$ per definizione di entropia. Quindi:</p>
<p>$$\\int_{A}^{B} \\frac{\\delta Q}{T} - (S_B - S_A) \\le 0 \\quad \\Rightarrow \\quad S_B - S_A \\ge \\int_A^B \\frac{\\delta Q}{T}$$</p>
<p>L'uguaglianza vale quando anche la trasformazione A→B è reversibile; la disuguaglianza stretta vale quando è irreversibile.</p>`
        },
        {
            id: "s53-secondo-principio-entropia",
            type: "section",
            title: "Il Secondo Principio e l'Entropia",
            icon: "⬆️",
            content: `<p>Consideriamo ora un <strong>sistema isolato</strong>, cioè un sistema che non scambia né calore né lavoro con l'esterno. Per un sistema isolato, $\\delta Q = 0$ per qualsiasi trasformazione.</p>
<p>Applichiamo la disuguaglianza generale:</p>
<p>$$S_B - S_A \\ge \\int_A^B \\frac{\\delta Q}{T}$$</p>
<p>Poiché per un sistema isolato $\\delta Q = 0$, l'integrale a destra è nullo. Otteniamo quindi un risultato di enorme importanza:</p>
<p>$$\\Delta S_{\\text{isolato}} \\ge 0$$</p>`,
            subsections: [
                {
                    subtitle: "Principio dell'Aumento dell'Entropia",
                    content: `<p>In qualsiasi trasformazione che avviene in un sistema isolato, <strong>l'entropia del sistema non può mai diminuire</strong>:</p>
<ul>
<li>Se la trasformazione è <strong>reversibile</strong>, la variazione di entropia è nulla: $\\Delta S_{\\text{isolato}} = 0$</li>
<li>Se la trasformazione è <strong>irreversibile</strong>, la variazione di entropia è positiva: $\\Delta S_{\\text{isolato}} \\gt 0$</li>
</ul>
<p>Questa è una nuova formulazione, analitica e potentissima, del secondo principio della termodinamica. L'universo termodinamico (sistema + ambiente) è per definizione un sistema isolato. Pertanto, l'entropia dell'universo può solo aumentare o rimanere costante:</p>
<p>$$\\Delta S_{\\text{universo}} = \\Delta S_{\\text{sistema}} + \\Delta S_{\\text{ambiente}} \\ge 0$$</p>`
                }
            ],
            formulas: [
                { label: "Principio aumento entropia", latex: "\\Delta S_{\\text{isolato}} \\ge 0" },
                { label: "Entropia dell'universo", latex: "\\Delta S_{\\text{universo}} = \\Delta S_{\\text{sistema}} + \\Delta S_{\\text{ambiente}} \\ge 0" }
            ]
        },
        {
            id: "s53-calcolo-irreversibili",
            type: "alert_box",
            title: "Come calcolare ΔS per trasformazioni irreversibili",
            icon: "⚠️",
            content: `<p>C'è un'apparente contraddizione: come posso calcolare la variazione di entropia per una trasformazione <strong>irreversibile</strong> usando una formula definita solo per trasformazioni <strong>reversibili</strong>?</p>
<p>La risposta sta nel fatto che l'entropia è una <strong>funzione di stato</strong>. La sua variazione $\\Delta S = S_B - S_A$ dipende solo dagli stati A e B, non dal percorso. Quindi, per calcolare $\\Delta S$ per una trasformazione irreversibile da A a B, possiamo <strong>scegliere un qualsiasi percorso reversibile</strong> a nostro piacimento che colleghi gli stessi stati A e B, e calcolare l'integrale $\\int_A^B \\frac{\\delta Q_R}{T}$ lungo quel percorso fittizio.</p>
<p>Il risultato ottenuto sarà la variazione di entropia corretta anche per il processo irreversibile originale.</p>`,
            quote: {
                text: "C'è un'apparente contraddizione che dobbiamo chiarire subito. Come posso calcolare la variazione di entropia per una trasformazione irreversibile usando una formula che è definita solo per trasformazioni reversibili? La risposta sta nel fatto che l'entropia è una funzione di stato.",
                src: "Nota del Prof."
            }
        },
        {
            id: "s53-esempio-espansione-libera",
            type: "section",
            title: "Esempio: Espansione libera di un gas ideale",
            icon: "💨",
            content: `<p>L'espansione libera è un processo <strong>adiabatico</strong> ($\\delta Q = 0$) e <strong>irreversibile</strong>. Un gas si espande da un volume $V_A$ a un volume $V_B$ senza scambiare calore. Poiché è irreversibile, ci aspettiamo che $\\Delta S \\gt 0$.</p>
<p>Come calcoliamo $\\Delta S$? <strong>Non possiamo</strong> usare $\\int \\frac{\\delta Q}{T}$ sul percorso reale, perché $\\delta Q = 0$ e otterremmo $\\Delta S = 0$, il che è sbagliato per un processo irreversibile.</p>
<p>Invece, sostituiamo la trasformazione reale con una trasformazione <strong>reversibile</strong> che porti il sistema dagli stessi stati iniziale e finale. Una scelta conveniente è un'<strong>isoterma reversibile</strong>, poiché nell'espansione libera di un gas ideale la temperatura non cambia ($T_A = T_B = T$).</p>
<p>Per un'isoterma reversibile, il primo principio ci dice che $\\Delta U = 0$, quindi $\\delta Q_R = \\delta L = P\\,dV$. La variazione di entropia è:</p>
<p>$$\\Delta S = \\int_A^B \\frac{\\delta Q_R}{T} = \\frac{1}{T} \\int_A^B \\delta Q_R = \\frac{1}{T} \\int_{V_A}^{V_B} P\\,dV$$</p>
<p>$$= \\frac{1}{T} \\int_{V_A}^{V_B} \\frac{nRT}{V}\\,dV = nR \\int_{V_A}^{V_B} \\frac{dV}{V} = nR \\ln\\left(\\frac{V_B}{V_A}\\right)$$</p>
<p>Poiché $V_B \\gt V_A$, il logaritmo è positivo e quindi $\\Delta S \\gt 0$, come ci aspettavamo.</p>`,
            formulas: [
                { label: "ΔS espansione libera (gas ideale)", latex: "\\Delta S = nR \\ln\\left(\\frac{V_B}{V_A}\\right)" }
            ]
        },
        {
            id: "s53-adiabatiche-entropia",
            type: "note_box",
            title: "Trasformazioni adiabatiche ed entropia",
            icon: "📝",
            content: `<p>Da notare la distinzione cruciale:</p>
<ul>
<li>Una trasformazione <strong>adiabatica reversibile</strong> è anche <strong>isoentropica</strong>, poiché $\\delta Q_R = 0$ e quindi $\\Delta S = \\int \\frac{0}{T} = 0$.</li>
<li>Una trasformazione <strong>adiabatica irreversibile</strong> (come l'espansione libera) ha sempre $\\Delta S \\gt 0$.</li>
</ul>
<p>Adiabatico <strong>non</strong> implica automaticamente isoentropico: serve anche la reversibilità.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Enuncia il Teorema di Carnot e le sue due conseguenze principali.",
            back: "Il rendimento massimo di una macchina termica operante tra due sorgenti si ottiene quando la macchina opera <strong>reversibilmente</strong>. Conseguenze: (1) tutte le macchine reversibili tra le stesse due sorgenti hanno lo <strong>stesso</strong> rendimento; (2) basta calcolare il rendimento di un solo ciclo reversibile per conoscere il rendimento di tutti."
        },
        {
            type: "dimostrazione",
            front: "Come si ricava la relazione $\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0$ per un ciclo reversibile tra due sorgenti?",
            back: "Si uguagliano le due espressioni del rendimento: $\\eta = 1 + \\frac{Q_C}{Q_A} = 1 - \\frac{T_1}{T_2}$. Da $\\frac{Q_C}{Q_A} = -\\frac{T_1}{T_2}$, identificando $Q_A = Q_2$ e $Q_C = Q_1$, si ottiene $\\frac{Q_1}{Q_2} = -\\frac{T_1}{T_2}$, cioè $\\frac{Q_1}{T_1} + \\frac{Q_2}{T_2} = 0$."
        },
        {
            type: "definizione",
            front: "Enuncia il Teorema di Clausius nella sua forma più generale (integrale).",
            back: "Per qualsiasi ciclo termodinamico: $\\oint \\frac{\\delta Q}{T} \\le 0$. L'uguaglianza vale per cicli reversibili ($\\oint \\frac{\\delta Q_R}{T} = 0$), la disuguaglianza stretta per cicli irreversibili ($\\oint \\frac{\\delta Q_{IRR}}{T} \\lt 0$)."
        },
        {
            type: "dimostrazione",
            front: "Come si dimostra che l'integrale $\\int_A^B \\frac{\\delta Q_R}{T}$ non dipende dal percorso reversibile scelto?",
            back: "Si considera un ciclo reversibile A→B (percorso I) e B→A (percorso II). Per Clausius: $\\int_{A,(I)}^{B} \\frac{\\delta Q_R}{T} + \\int_{B,(II)}^{A} \\frac{\\delta Q_R}{T} = 0$. Invertendo il secondo integrale: $\\int_{A,(I)}^{B} \\frac{\\delta Q_R}{T} = \\int_{A,(II)}^{B} \\frac{\\delta Q_R}{T}$. Essendo indipendente dal percorso, definisce una funzione di stato."
        },
        {
            type: "definizione",
            front: "Dai la definizione di variazione di entropia e spiega perché è una funzione di stato.",
            back: "La variazione di entropia è $\\Delta S = S_B - S_A = \\int_A^B \\frac{\\delta Q_R}{T}$, calcolata lungo qualsiasi trasformazione reversibile da A a B. È una funzione di stato perché questo integrale non dipende dal percorso reversibile scelto, come conseguenza del teorema di Clausius ($\\oint \\frac{\\delta Q_R}{T} = 0$)."
        },
        {
            type: "domanda",
            front: "Come si passa dalla disuguaglianza di Clausius per cicli ($\\oint \\frac{\\delta Q}{T} \\le 0$) alla relazione $S_B - S_A \\ge \\int_A^B \\frac{\\delta Q}{T}$ per trasformazioni non cicliche?",
            back: "Si costruisce un ciclo: trasformazione reale (eventualmente irreversibile) A→B + trasformazione reversibile B→A. Si applica Clausius al ciclo: $\\int_A^B \\frac{\\delta Q}{T} + \\int_{B,\\text{rev}}^{A} \\frac{\\delta Q_R}{T} \\le 0$. Il secondo integrale vale $-(S_B - S_A)$, da cui $S_B - S_A \\ge \\int_A^B \\frac{\\delta Q}{T}$."
        },
        {
            type: "tranello",
            front: "Perché NON si può calcolare $\\Delta S$ di un'espansione libera integrando $\\frac{\\delta Q}{T}$ lungo il processo reale?",
            back: "Nell'espansione libera $\\delta Q = 0$, quindi l'integrale lungo il percorso reale darebbe $\\Delta S = 0$. Ma questo è sbagliato: il processo è irreversibile, quindi $\\Delta S \\gt 0$. La formula $\\Delta S = \\int_A^B \\frac{\\delta Q_R}{T}$ richiede un percorso <strong>reversibile</strong>. Si usa un'isoterma reversibile fittizia e si ottiene $\\Delta S = nR \\ln(V_B/V_A) \\gt 0$."
        },
        {
            type: "formula",
            front: "Scrivi la variazione di entropia per l'espansione libera di un gas ideale e il principio dell'aumento dell'entropia.",
            back: "Espansione libera: $\\Delta S = nR \\ln\\left(\\frac{V_B}{V_A}\\right) \\gt 0$. Principio dell'aumento dell'entropia: in un sistema isolato $\\Delta S_{\\text{isolato}} \\ge 0$, con uguaglianza solo per trasformazioni reversibili."
        },
        {
            type: "tranello",
            front: "Una trasformazione adiabatica è sempre isoentropica?",
            back: "No! Solo una trasformazione <strong>adiabatica reversibile</strong> è isoentropica ($\\Delta S = 0$). Una trasformazione adiabatica <strong>irreversibile</strong> (come l'espansione libera) ha $\\Delta S \\gt 0$. Adiabatico significa $\\delta Q = 0$, ma per avere $\\Delta S = 0$ serve anche la reversibilità."
        },
        {
            type: "domanda",
            front: "Enuncia il principio dell'aumento dell'entropia e spiega perché rappresenta una riformulazione del secondo principio.",
            back: "In un sistema isolato, $\\Delta S \\ge 0$: l'entropia non può mai diminuire. Poiché l'universo (sistema + ambiente) è un sistema isolato, $\\Delta S_{\\text{universo}} = \\Delta S_{\\text{sistema}} + \\Delta S_{\\text{ambiente}} \\ge 0$. Questo traduce in forma analitica e quantitativa il contenuto del secondo principio: i processi spontanei hanno una direzione privilegiata, quella che aumenta l'entropia totale."
        }
    ]
};

