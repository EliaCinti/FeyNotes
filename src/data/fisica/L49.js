const LESSON = {
    id: "L49", date: "Lezione 35 — 28 Mag 2026",
    title: "Gas ideali: energia interna, espansione libera di Joule e Relazione di Mayer",
    abstract: "Si dimostra che l'energia interna di un gas ideale dipende solo dalla temperatura tramite l'esperimento di Joule, si ricava l'espressione esplicita ΔU = nCᵥΔT valida per qualunque trasformazione, e si deriva la Relazione di Mayer Cₚ − Cᵥ = R. Anticipazione sulle adiabatiche reversibili.",

    sections: [
        {
            id: "s49-primo-principio-energia-interna",
            type: "section",
            title: "Il primo principio e la questione dell'energia interna",
            icon: "⚡",
            content: `<p>Il punto di partenza è il primo principio della termodinamica:</p>
<p>$$\\Delta U = Q - W$$</p>
<p>Il simbolo $\\Delta$ davanti a $U$ serve a ricordare a colpo d'occhio che $Q$ e $W$ <strong>non</strong> sono funzioni di stato, mentre $U$ <strong>sì</strong> lo è. In forma differenziale:</p>
<p>$$dU = \\delta Q - \\delta W$$</p>
<p>Il differenziale esatto $dU$ si distingue dalle quantità infinitesime $\\delta Q$ e $\\delta W$, che dipendono dal cammino.</p>`,
            subsections: [
                {
                    subtitle: "Espressioni operative per Q, W e ΔU",
                    content: `<p>Per il calore e il lavoro disponiamo già di espressioni operative:</p>
<p>$$Q = \\int_{T_i}^{T_f} C(T)\\,dT \\qquad \\left(\\text{o equivalentemente } Q = \\int m\\,c\\,dT\\right)$$</p>
<p>$$W = \\int_{V_i}^{V_f} P(V)\\,dV$$</p>
<p>Di $U$, invece, non conosciamo ancora l'espressione funzionale. Sappiamo solo che, essendo funzione di stato, la sua variazione dipende solo dallo stato iniziale e finale:</p>
<p>$$\\Delta U = U_f - U_i$$</p>
<blockquote>Spesso non ci interessa conoscere l'espressione di $U$, perché siamo interessati solo alle sue variazioni. E le variazioni di $U$ sono semplicemente la differenza tra il valore finale e quello iniziale: è una funzione di stato, quindi non abbiamo necessariamente una funzione che dobbiamo integrare lungo il cammino.</blockquote>
<p>Punto chiave: il <strong>calore</strong> va calcolato lungo un cammino (serve la funzione $C$ da integrare, che dipende dal tipo di trasformazione); lo stesso vale per il <strong>lavoro</strong> (serve sapere come $P$ dipende da $V$). Per $\\Delta U$, invece, basta conoscere lo stato iniziale e quello finale.</p>
<p>La forma funzionale di $U$ dipende dal <strong>sistema</strong> (cioè dalla sostanza), non dalla trasformazione. Per questo motivo, prima di chiederci come $U$ dipenda dalle variabili termodinamiche, occorre fissare il tipo di sistema. In questa lezione il sistema sarà il <strong>gas ideale</strong>.</p>`
                }
            ]
        },
        {
            id: "s49-gas-ideale-domanda-guida",
            type: "section",
            title: "Il gas ideale e la domanda guida",
            icon: "🎯",
            content: `<p>Un gas ideale è caratterizzato dall'equazione di stato:</p>
<p>$$PV = nRT$$</p>
<p>Questa relazione vale <strong>solo</strong> per i gas ideali (e in buona approssimazione per i gas reali in certi regimi). Le variabili termodinamiche rilevanti sono $P$, $V$, $T$, legate da questa unica relazione.</p>
<p>Le domande che guidano la lezione sono due, in ordine logico:</p>
<ol>
<li><strong>Da quali variabili $(P, V, T)$ dipende $U$ per un gas ideale?</strong></li>
<li><strong>Quale espressione assume $\\Delta U$ in funzione di tali variabili?</strong></li>
</ol>
<p>La risposta alla prima domanda è fornita da un celebre esperimento di Joule.</p>`
        },
        {
            id: "s49-espansione-libera-joule",
            type: "section",
            title: "L'esperienza dell'espansione libera di Joule",
            icon: "🧪",
            content: `<p>Joule immagina (e secondo alcuni esegue effettivamente) un apparato sperimentale progettato per rispondere alla domanda: da quali variabili dipende $U$?</p>`,
            subsections: [
                {
                    subtitle: "Apparato sperimentale",
                    content: `<p>L'apparato è composto da:</p>
<ul>
<li>Una struttura con <strong>pareti esterne rigide e adiabatiche</strong></li>
<li>All'interno, due camere comunicanti tramite un <strong>rubinetto</strong> inizialmente chiuso</li>
<li>Nella prima camera è contenuto un <strong>gas ideale</strong>, nella seconda è stato fatto il <strong>vuoto</strong></li>
<li>Il contenitore del gas è immerso in un <strong>liquido calorimetrico</strong> (con pareti diatermiche tra gas e liquido), nel quale è immerso un termometro</li>
</ul>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Apparato di Joule per l'espansione libera</strong></p>
  <p><em>Rettangolo esterno = pareti rigide e adiabatiche. All'interno, un contenitore con due camere separate da una parete divisoria con un'apertura (il rubinetto) al centro: camera sinistra etichettata "gas", camera destra etichettata "vuoto". Lo spazio tra il contenitore interno e le pareti esterne è riempito di liquido calorimetrico (colorato in azzurro chiaro). Un termometro è immerso nel liquido sul lato destro. La parete divisoria è interrotta in corrispondenza del rubinetto (piccolo rettangolo) per mostrare che è un'apertura controllabile.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p><strong>Parete adiabatica e parete diatermica:</strong> una parete si dice <em>adiabatica</em> se attraverso di essa non può avvenire scambio di calore. Si dice <em>diatermica</em> se invece permette lo scambio di calore per conduzione.</p>`
                },
                {
                    subtitle: "Il concetto di universo termodinamico",
                    content: `<p>Si definisce <strong>universo termodinamico</strong> l'unione di un sistema termodinamico e dell'ambiente con cui esso può scambiare energia (calore, lavoro) ed eventualmente materia. Per costruzione, un universo termodinamico è un <strong>sistema isolato</strong>: non scambia né energia né materia con nulla all'esterno.</p>
<p>Nel nostro esperimento:</p>
<ul>
<li>Il <strong>sistema</strong> è il gas</li>
<li>L'<strong>ambiente</strong> è il liquido calorimetrico</li>
<li>L'<strong>universo termodinamico</strong> è l'insieme gas + liquido, racchiuso dalle pareti esterne rigide e adiabatiche</li>
</ul>
<blockquote>È un po' arrogante l'uso del nome «universo»: un universo termodinamico non è altro che un sistema qualunque con l'ambiente intorno con cui scambia qualcosa, purché le due cose insieme siano isolate e chiuse rispetto a tutto il resto. La storia della scienza ruota tutta attorno a una domanda: l'universo fisico è un universo termodinamico? Cioè: è davvero chiuso, non c'è niente al di fuori? È una domanda da qualche milione di euro. Nella fisica classica si assume di sì; cosa c'è al di là è metafisica, non fisica.</blockquote>`
                },
                {
                    subtitle: "Esecuzione dell'esperimento e natura della trasformazione",
                    content: `<p>Si apre il rubinetto. Il gas, inizialmente confinato nel primo vano, comincia a riempire anche il secondo (in cui c'era il vuoto). Durante l'espansione il volume cresce e la pressione diminuisce.</p>
<p><strong>Durante la trasformazione il sistema passa per stati di equilibrio?</strong></p>
<p>La risposta è <strong>no</strong>. Per assegnare un valore unico di pressione a tutto il gas occorrerebbe che il sistema fosse in equilibrio in ogni istante: ma all'inizio nel primo vano c'è una certa pressione e nel secondo la pressione è nulla; via via che il gas si distribuisce, la pressione nel primo vano cala e nel secondo cresce, finché non si raggiunge un equilibrio finale. <em>Durante</em> la trasformazione, quindi, non esiste un valore unico di $P$ associabile al sistema.</p>`
                },
                {
                    subtitle: "Reversibilità e irreversibilità nell'espansione libera",
                    content: `<p>Spesso si dice che, per rendere «quasi reversibile» una trasformazione reale, basta eseguirla molto lentamente, attraverso una successione di stati di quasi-equilibrio. Questo è vero, ma con una condizione fondamentale: <strong>la trasformazione deve effettivamente passare attraverso stati di quasi-equilibrio</strong>. L'espansione libera no: la si può eseguire veloce o lenta quanto si vuole, ma non attraversa stati di equilibrio. Quindi è <strong>irreversibile per sua natura</strong>.</p>
<p><strong>Espansione libera:</strong> l'espansione di un gas in una porzione di spazio inizialmente vuota. È sempre una trasformazione irreversibile.</p>`
                },
                {
                    subtitle: "Osservazione sperimentale fondamentale",
                    content: `<p>L'osservazione cruciale di Joule è la seguente:</p>
<p><em><strong>Durante l'espansione del gas, la temperatura del liquido calorimetrico non cambia.</strong></em></p>
<p>Analizziamo le conseguenze sul liquido:</p>
<ul>
<li>Il liquido calorimetrico non può variare il proprio volume (è racchiuso): $\\Delta V_{\\text{liq}} = 0$, dunque $W_{\\text{liq}} = 0$</li>
<li>Il liquido non cambia temperatura: per la legge dello scambio termico non scambia calore, $Q_{\\text{liq}} = 0$</li>
</ul>
<p>Per il primo principio applicato al liquido:</p>
<p>$$\\Delta U_{\\text{liq}} = Q_{\\text{liq}} - W_{\\text{liq}} = 0$$</p>
<p>D'altra parte, l'universo termodinamico (gas + liquido) è isolato per costruzione (pareti esterne rigide e adiabatiche): non può scambiare né calore né lavoro con nulla. Dunque:</p>
<p>$$\\Delta U_{\\text{univ}} = 0$$</p>
<p>Poiché l'energia interna è estensiva:</p>
<p>$$\\Delta U_{\\text{univ}} = \\Delta U_{\\text{gas}} + \\Delta U_{\\text{liq}} = 0$$</p>
<p>e avendo già stabilito $\\Delta U_{\\text{liq}} = 0$, concludiamo:</p>
<p>$$\\Delta U_{\\text{gas}} = 0$$</p>`
                },
                {
                    subtitle: "Conclusione: U dipende solo dalla temperatura",
                    content: `<p>Riassumiamo cosa è cambiato nel gas durante questa trasformazione:</p>
<ul>
<li>La pressione <strong>è cambiata</strong> (diminuita)</li>
<li>Il volume <strong>è cambiato</strong> (aumentato)</li>
<li>La temperatura <strong>non è cambiata</strong> (l'osservazione del liquido lo conferma: inizialmente gas e liquido erano in equilibrio termico, quindi avevano la stessa temperatura $T_i$; poiché il liquido non cambia temperatura, $\\Delta T_{\\text{liq}} = 0$, e alla fine gas e liquido raggiungono un nuovo equilibrio termico, anche il gas mantiene la stessa temperatura)</li>
<li>L'energia interna <strong>non è cambiata</strong></li>
</ul>
<p>Poiché $\\Delta U_{\\text{gas}} = 0$ pur essendo variati $P$ e $V$, e l'unica variabile termodinamica che <strong>non</strong> è variata è $T$, si deduce che $U$ non dipende né da $P$ né da $V$, ma solo da $T$:</p>
<p>$$U = U(T) \\qquad \\text{per un gas ideale.}$$</p>
<p>Questo risultato semplifica enormemente la termodinamica dei gas ideali: se tra due stati di equilibrio la temperatura non cambia, allora $\\Delta U = 0$, indipendentemente dalle variazioni di $P$ e $V$.</p>`
                }
            ],
            formulas: [
                { label: "Risultato dell'esperimento di Joule", latex: "\\Delta U_{\\text{gas}} = 0" },
                { label: "Energia interna del gas ideale", latex: "U = U(T)" }
            ]
        },
        {
            id: "s49-espressione-delta-u",
            type: "section",
            title: "Espressione esplicita di ΔU per un gas ideale",
            icon: "📐",
            content: `<p>Sappiamo che $U = U(T)$ ma non conosciamo ancora la forma esplicita di $\\Delta U$. La ricaviamo sfruttando il fatto che $U$ è funzione di stato.</p>
<p>Consideriamo due stati di equilibrio $A$ e $B$ di un gas ideale, rappresentati sul piano di Clapeyron $(V, P)$. Per andare da $A$ a $B$ si può scegliere qualsiasi cammino: poiché $U$ è funzione di stato, $\\Delta U_{AB}$ non dipende dalla scelta.</p>`,
            subsections: [
                {
                    subtitle: "Il cammino conveniente: isocora + isoterma",
                    content: `<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 2 — Piano di Clapeyron: cammino isocora + isoterma</strong></p>
  <p><em>Assi: $V$ (orizzontale), $P$ (verticale). Punto $A$ in basso a sinistra, punto $B$ in alto a destra, punto $C$ in alto a sinistra (stesso $V$ di $A$, stessa $T$ di $B$). Tratto verticale $A \\to C$ etichettato "isocora". Curva $C \\to B$ etichettata "isoterma ($T_B$)". $C$ è scelto in modo che $T_C = T_B$: il tratto $A \\to C$ è l'isocora che porta il gas da $T_A$ a $T_B$, e il tratto $C \\to B$ è l'isoterma alla temperatura finale. Una curva tratteggiata da $A$ a $B$ rappresenta un cammino generico alternativo.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>
<p>Scegliamo un cammino conveniente: prima un tratto $A \\to C$ a volume costante (<em>isocora</em>), che porta il gas alla temperatura $T_B$ (il punto $C$ è scelto in modo che $T_C = T_B$); poi un tratto $C \\to B$ a temperatura costante (<em>isoterma</em>). Per additività:</p>
<p>$$\\Delta U_{AB} = \\Delta U_{AC} + \\Delta U_{CB}$$</p>
<p><strong>Tratto $C \\to B$ (isoterma).</strong> Lungo l'isoterma $T = \\text{cost}$. Poiché $U = U(T)$:</p>
<p>$$\\Delta U_{CB} = 0$$</p>
<p><strong>Tratto $A \\to C$ (isocora).</strong> Lungo l'isocora $V = \\text{cost}$, dunque:</p>
<p>$$W_{AC} = \\int_{V_A}^{V_C} P\\,dV = 0$$</p>
<p>Per il primo principio, $\\Delta U_{AC} = Q_{AC}$. Il calore scambiato a volume costante si esprime tramite il calore specifico molare a volume costante $C_V$:</p>
<p>$$Q_{AC} = n C_V \\,\\Delta T = n C_V (T_B - T_A)$$</p>
<p>Mettendo insieme:</p>
<p>$$\\Delta U_{AB} = n C_V (T_B - T_A)$$</p>
<p>Ma $A$ e $B$ erano arbitrari, quindi per <strong>qualunque</strong> trasformazione di un gas ideale tra due stati di equilibrio vale:</p>
<p>$$\\Delta U = n C_V \\,\\Delta T$$</p>
<p>In forma differenziale: $dU = n C_V \\, dT$.</p>`
                },
                {
                    subtitle: "Validità universale della formula",
                    content: `<blockquote>Attenzione: la formula $\\Delta U = n C_V \\Delta T$ vale <em>sempre</em> per un gas ideale, anche se la trasformazione non è isocora. La $V$ a pedice di $C_V$ ricorda solo che il calore specifico in questione si misura a volume costante, ma la formula resta valida per qualsiasi trasformazione, perché l'abbiamo dedotta sfruttando il fatto che $U$ è funzione di stato.</blockquote>`
                },
                {
                    subtitle: "Interpretazione microscopica",
                    content: `<p>La temperatura è la manifestazione macroscopica dello stato di agitazione cinetica delle molecole. Più alte sono le velocità molecolari, più alta è la temperatura. In un gas ideale si trascurano le interazioni tra le molecole, e quindi l'energia interna coincide sostanzialmente con l'<strong>energia cinetica molecolare</strong>. Per questo $U$ dipende solo da $T$: aumentare $T$ significa aumentare l'energia cinetica molecolare, cioè proprio $U$.</p>`
                }
            ],
            formulas: [
                { label: "Variazione di energia interna (gas ideale, qualunque trasformazione)", latex: "\\Delta U = n C_V \\,\\Delta T" },
                { label: "Forma differenziale", latex: "dU = n C_V \\, dT" }
            ]
        },
        {
            id: "s49-lavoro-espansione-libera",
            type: "alert_box",
            title: "Sottigliezza sul lavoro nell'espansione libera",
            icon: "⚠️",
            content: `<p>Torniamo all'espansione libera e applichiamo il primo principio al gas:</p>
<p>$$\\Delta U_{\\text{gas}} = Q_{\\text{gas}} - W_{\\text{gas}}$$</p>
<p>Sappiamo che $\\Delta U_{\\text{gas}} = 0$. Inoltre $Q_{\\text{gas}} = 0$, perché il liquido non cambia temperatura e quindi non riceve calore dal gas. Allora necessariamente:</p>
<p>$$W_{\\text{gas}} = 0$$</p>
<p><strong>nonostante il gas si stia espandendo.</strong></p>
<blockquote>Vi ho detto più volte che un gas che si espande compie un lavoro positivo. È vero <em>quasi sempre</em>, tranne in un caso: l'espansione libera. Compiere lavoro significa esercitare una forza su qualcosa che si sposta, trasferendo energia. Se un gas spinge un pistone mentre si espande, sta trasferendo energia al pistone: lavoro positivo. Ma nell'espansione libera il gas si espande <em>contro il vuoto</em>, non spinge nulla, non trasferisce energia a nessun altro sistema. Quindi non compie lavoro, anche se si espande. È un caso limite ideale: in un gas reale ci sono comunque interazioni interne tra molecole, e la situazione è diversa.</blockquote>
<p>Riassumendo, l'espansione libera di un gas ideale è contemporaneamente:</p>
<p>$$\\text{irreversibile}, \\qquad \\text{adiabatica}, \\qquad \\text{isotermica}, \\qquad Q=0, \\quad W=0, \\quad \\Delta U=0$$</p>`
        },
        {
            id: "s49-relazione-mayer",
            type: "section",
            title: "Trasformazione isobara e Relazione di Mayer",
            icon: "🔥",
            content: `<p>Il calore specifico di un gas dipende dal tipo di trasformazione (oltre che dalla sostanza). Ci aspettiamo che il calore specifico a pressione costante, $C_P$, sia diverso da $C_V$. Vediamo <strong>quanto</strong> sono diversi e <strong>perché</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Confronto qualitativo: perché Cₚ > Cᵥ",
                    content: `<p>Immaginiamo di voler aumentare la temperatura di una mole di gas ideale di $\\Delta T$. Confrontiamo due strategie.</p>
<p><strong>Strategia 1 (volume costante).</strong> Mettiamo il gas in una scatola con pareti rigide e diatermiche; cediamo calore. Poiché il volume non cambia, non c'è lavoro: tutto il calore fornito si traduce in aumento di energia interna, cioè in aumento di temperatura. Il calore necessario è $Q_V = n C_V \\Delta T$. Questo è il modo <strong>più economico</strong> per scaldare il gas.</p>
<p><strong>Strategia 2 (pressione costante).</strong> Vogliamo aumentare $T$ mantenendo $P$ costante. Se tenessimo bloccato anche il volume, dall'equazione di stato $PV = nRT$ con $V = \\text{cost}$ avremmo un aumento di $P$ insieme a $T$, ed è proprio quello che non vogliamo. Per impedire a $P$ di crescere, dobbiamo permettere al gas di <strong>espandersi</strong>. Ma se il gas si espande, compie lavoro: gli dobbiamo fornire calore non solo per aumentare la sua energia interna, ma anche per «pagare» questo lavoro. Quindi $Q_P \\gt Q_V$, ovvero $C_P \\gt C_V$.</p>
<blockquote>Mantenere la pressione costante è un «optional» energetico: oltre a scaldare il gas, bisogna permettergli di espandersi e quindi fargli compiere lavoro. Il calore specifico misura proprio questa efficienza: tanto più alto, tanto più «costosa» è la trasformazione in termini di calore necessario per ottenere un dato aumento di temperatura.</blockquote>`
                },
                {
                    subtitle: "Derivazione della Relazione di Mayer",
                    content: `<p>Quantifichiamo la differenza $C_P - C_V$. Consideriamo una trasformazione <em>infinitesima</em> isobara reversibile di un gas ideale. Il primo principio in forma differenziale:</p>
<p>$$dU = \\delta Q - \\delta W$$</p>
<p>Per un gas ideale, sempre:</p>
<p>$$dU = n C_V \\, dT$$</p>
<p>A pressione costante:</p>
<p>$$\\delta Q = n C_P \\, dT$$</p>
<p>Per il lavoro $\\delta W = P\\, dV$. Dall'equazione di stato $PV = nRT$, differenziando a $P$ costante:</p>
<p>$$P\\, dV = nR\\, dT \\quad \\Longrightarrow \\quad \\delta W = nR\\, dT$$</p>
<p>Sostituendo nel primo principio:</p>
<p>$$n C_V \\, dT = n C_P \\, dT - n R \\, dT$$</p>
<p>Dividendo per $n\\, dT$ (entrambi non nulli):</p>
<p>$$C_V = C_P - R$$</p>
<p>ovvero:</p>
<p>$$C_P - C_V = R$$</p>
<p>dove $R = 8{,}314 \\ \\frac{\\text{J}}{\\text{K} \\cdot \\text{mol}}$ è la costante universale dei gas.</p>`
                },
                {
                    subtitle: "Significato fisico di R",
                    content: `<p>La costante $R$ acquista qui un significato fisico molto concreto: rappresenta la <strong>differenza di energia</strong> (per mole, per grado) che bisogna mettere in gioco per passare da una trasformazione a volume costante a una a pressione costante. È proprio il costo del lavoro di espansione necessario a mantenere $P$ costante.</p>`
                }
            ],
            formulas: [
                { label: "Relazione di Mayer", latex: "C_P - C_V = R" }
            ]
        },
        {
            id: "s49-calori-specifici-tabella",
            type: "section",
            title: "Calori specifici per gas monoatomici e biatomici",
            icon: "📊",
            content: `<p>Il calore specifico dipende sia dal tipo di trasformazione sia dal tipo di sostanza. Per i gas ideali, distinguiamo tra gas <strong>monoatomico</strong> (es. elio, argon) e gas <strong>biatomico</strong> (es. ossigeno, azoto). Definiamo l'<em>indice adiabatico</em>:</p>
<p>$$\\gamma = \\frac{C_P}{C_V}$$</p>
<p>Da notare: i valori di $C_V$ si giustificano tramite il <strong>teorema di equipartizione dell'energia</strong>. Per un gas monoatomico ci sono 3 gradi di libertà traslazionali, ciascuno contribuisce con $\\frac{1}{2}R$, quindi $C_V = \\frac{3}{2}R$. Per un gas biatomico (a temperature ordinarie) si aggiungono 2 gradi di libertà rotazionali, quindi $C_V = \\frac{5}{2}R$. I valori di $C_P$ seguono immediatamente dalla Relazione di Mayer.</p>`,
            table_compare: {
                headers: ["Tipo di gas", "$C_V$", "$C_P$", "$\\gamma = C_P / C_V$"],
                rows: [
                    ["Monoatomico (He, Ar)", "$\\frac{3}{2}R$", "$\\frac{5}{2}R$", "$\\frac{5}{3} \\simeq 1{,}67$"],
                    ["Biatomico (O₂, N₂)", "$\\frac{5}{2}R$", "$\\frac{7}{2}R$", "$\\frac{7}{5} = 1{,}4$"]
                ]
            },
            extra_content: `<p>Si verifica immediatamente che in entrambi i casi $C_P - C_V = R$, come prescritto dalla Relazione di Mayer.</p>
<blockquote>Quando un testo d'esame vi dice «gas ideale biatomico» senza fornire il calore specifico, si assume che voi lo conosciate dalla tabella. Vi basta sapere il tipo di gas (mono o biatomico) e il tipo di trasformazione per scegliere il calore specifico giusto: un gas biatomico in trasformazione isocora ha $C_V = \\frac{5}{2}R$, in isobara $C_P = \\frac{7}{2}R$.</blockquote>`
        },
        {
            id: "s49-adiabatiche-reversibili",
            type: "section",
            title: "Anticipazione: trasformazioni adiabatiche reversibili",
            icon: "🌡️",
            content: `<p>Una trasformazione adiabatica è caratterizzata da $\\delta Q = 0$. Combinando il primo principio con l'equazione di stato si ottengono relazioni utili che legano tra loro le variabili termodinamiche.</p>
<p>Per un'adiabatica reversibile di un gas ideale valgono le seguenti <strong>tre relazioni equivalenti</strong>, ottenibili l'una dall'altra tramite l'equazione di stato $PV = nRT$:</p>
<p>$$T V^{\\gamma - 1} = \\text{costante}$$</p>
<p>$$P V^{\\gamma} = \\text{costante}$$</p>
<p>$$T\\, P^{\\frac{1-\\gamma}{\\gamma}} = \\text{costante}$$</p>
<p>Le tre relazioni accoppiano a turno le tre coppie possibili tra $P$, $V$, $T$.</p>`,
            subsections: [
                {
                    subtitle: "Derivazione di TV^(γ−1) = cost",
                    content: `<p>Si parte dal primo principio applicato a un'adiabatica reversibile ($\\delta Q = 0$):</p>
<p>$$n C_V\\, dT = -P\\,dV$$</p>
<p>Sostituendo $P = nRT/V$:</p>
<p>$$n C_V\\, dT = -\\frac{nRT}{V}\\,dV$$</p>
<p>Dividendo per $nT$:</p>
<p>$$C_V \\frac{dT}{T} = -R\\,\\frac{dV}{V}$$</p>
<p>Usando $R = C_P - C_V$ e $\\gamma = C_P / C_V$, si ha $R / C_V = \\gamma - 1$, quindi:</p>
<p>$$\\frac{dT}{T} = -(\\gamma - 1)\\,\\frac{dV}{V}$$</p>
<p>Integrando entrambi i membri:</p>
<p>$$\\ln T = -(\\gamma - 1)\\ln V + \\text{cost}$$</p>
<p>$$\\ln T + (\\gamma - 1)\\ln V = \\text{cost}$$</p>
<p>$$\\ln\\left(T V^{\\gamma - 1}\\right) = \\text{cost}$$</p>
<p>Esponenziando:</p>
<p>$$T V^{\\gamma - 1} = \\text{costante}$$</p>
<p>Le altre due relazioni si ottengono sostituendo tramite l'equazione di stato $PV = nRT$. Ad esempio, per ricavare $PV^\\gamma = \\text{cost}$ si sostituisce $T = PV/(nR)$ nella relazione appena trovata:</p>
<p>$$\\frac{PV}{nR} \\cdot V^{\\gamma - 1} = \\text{cost} \\quad \\Longrightarrow \\quad PV^\\gamma = \\text{cost}$$</p>`
                }
            ],
            formulas: [
                { label: "Adiabatica reversibile (T, V)", latex: "T V^{\\gamma-1} = \\text{costante}" },
                { label: "Adiabatica reversibile (P, V)", latex: "P V^{\\gamma} = \\text{costante}" },
                { label: "Adiabatica reversibile (T, P)", latex: "T\\, P^{\\frac{1-\\gamma}{\\gamma}} = \\text{costante}" }
            ]
        },
        {
            id: "s49-attenzione-adiabatiche",
            type: "alert_box",
            title: "Adiabatiche reversibili: attenzione all'esame!",
            icon: "🚨",
            content: `<blockquote>Queste relazioni valgono <em>solo</em> se la trasformazione adiabatica è <strong>reversibile</strong>. Vengono infatti ottenute integrando una relazione differenziale lungo la trasformazione, e questo richiede che la curva integranda sia ben definita, cioè che la trasformazione passi attraverso stati di equilibrio. Se la trasformazione adiabatica è irreversibile (come l'espansione libera vista prima), applicare queste formule è un errore grave: «prendete zero al problema».</blockquote>
<p>Confronto diretto:</p>
<ul>
<li><strong>Espansione libera</strong> (adiabatica <em>irreversibile</em>): $Q = 0$, $W = 0$, $\\Delta U = 0$, $\\Delta T = 0$ → <strong>NON</strong> si possono usare $PV^\\gamma = \\text{cost}$ ecc.</li>
<li><strong>Adiabatica reversibile</strong>: $Q = 0$, ma $W \\neq 0$, $\\Delta U \\neq 0$, $\\Delta T \\neq 0$ → si usano le tre relazioni</li>
</ul>`
        },
        {
            id: "s49-esempio-isoterma",
            type: "section",
            title: "Strategia generale per le trasformazioni notevoli",
            icon: "🗺️",
            content: `<p>In ciascuna trasformazione notevole di un gas ideale (adiabatica, isoterma, isocora, isobara) è utile chiedersi:</p>
<ul>
<li>Quali variabili termodinamiche restano costanti?</li>
<li>Quale dei tre termini $\\Delta U$, $Q$, $W$ del primo principio <strong>si annulla</strong> o si semplifica?</li>
</ul>`,
            subsections: [
                {
                    subtitle: "Esempio: trasformazione isoterma",
                    content: `<p>In una trasformazione isoterma di un gas ideale, $T = \\text{cost}$, quindi $\\Delta T = 0$ e di conseguenza:</p>
<p>$$\\Delta U = n C_V \\Delta T = 0$$</p>
<p>Dal primo principio $\\Delta U = Q - W$ segue immediatamente:</p>
<p>$$Q = W$$</p>
<p>Quindi per un'isoterma basta calcolare il lavoro (o equivalentemente il calore) e si ottiene automaticamente anche l'altra grandezza.</p>
<p>Da notare: la trattazione sistematica di tutte le trasformazioni notevoli è rinviata alla lezione successiva.</p>`
                }
            ]
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cos'è un universo termodinamico?",
            back: "L'unione di un sistema termodinamico e dell'ambiente con cui esso può scambiare energia e materia. Per costruzione, un universo termodinamico è un **sistema isolato**: non scambia né energia né materia con nulla all'esterno."
        },
        {
            type: "domanda",
            front: "Descrivi l'esperimento dell'espansione libera di Joule e la sua osservazione fondamentale.",
            back: "Un gas ideale è confinato in una camera collegata tramite rubinetto a una camera in cui c'è il vuoto. Il tutto è immerso in un liquido calorimetrico, e l'involucro esterno è rigido e adiabatico. Si apre il rubinetto: il gas si espande nel vuoto. L'osservazione cruciale è che **la temperatura del liquido calorimetrico non cambia**."
        },
        {
            type: "dimostrazione",
            front: "Come si dimostra, a partire dall'esperimento di Joule, che l'energia interna di un gas ideale dipende solo dalla temperatura?",
            back: "Il liquido non cambia temperatura ($\\Delta T_{\\text{liq}}=0$) e non cambia volume ($\\Delta V_{\\text{liq}}=0$), quindi $Q_{\\text{liq}}=0$ e $W_{\\text{liq}}=0$, da cui $\\Delta U_{\\text{liq}}=0$. L'universo (gas+liquido) è isolato, quindi $\\Delta U_{\\text{univ}}=0$. Per estensività: $\\Delta U_{\\text{gas}} + \\Delta U_{\\text{liq}}=0$, da cui $\\Delta U_{\\text{gas}}=0$. Ma $P$ e $V$ del gas sono cambiati mentre $T$ no → $U$ dipende solo da $T$."
        },
        {
            type: "dimostrazione",
            front: "Dimostra che $\\Delta U = nC_V \\Delta T$ vale per qualunque trasformazione di un gas ideale, non solo per le isocòre.",
            back: "Si scelgono due stati arbitrari $A$ e $B$ e un cammino conveniente: isocora $A \\to C$ (che porta a $T_B$) + isoterma $C \\to B$. Sull'isoterma $\\Delta U_{CB}=0$ (perché $U=U(T)$). Sull'isocora $W_{AC}=0$, quindi $\\Delta U_{AC}=Q_{AC}=nC_V(T_B-T_A)$. Per additività: $\\Delta U_{AB}=nC_V \\Delta T$. Poiché $A$ e $B$ sono arbitrari e $U$ è funzione di stato, la formula vale per **qualunque** trasformazione."
        },
        {
            type: "tranello",
            front: "Perché nell'espansione libera il gas non compie lavoro, nonostante si espanda?",
            back: "Compiere lavoro significa esercitare una forza su qualcosa che si sposta, trasferendo energia. Nell'espansione libera il gas si espande **contro il vuoto**: non spinge nulla, non trasferisce energia a nessun altro sistema. Quindi $W=0$ anche se il volume aumenta. È l'unico caso in cui un gas si espande senza compiere lavoro."
        },
        {
            type: "domanda",
            front: "Perché $C_P \gt C_V$ per un gas ideale? Spiega qualitativamente.",
            back: "A volume costante, tutto il calore fornito va in aumento di energia interna (cioè temperatura). A pressione costante, per impedire a $P$ di crescere il gas deve espandersi, compiendo lavoro: serve calore sia per aumentare $U$ sia per 'pagare' questo lavoro di espansione. Quindi $Q_P \gt Q_V$ per lo stesso $\\Delta T$, ovvero $C_P \gt C_V$."
        },
        {
            type: "dimostrazione",
            front: "Deriva la Relazione di Mayer $C_P - C_V = R$.",
            back: "Si parte dal primo principio per una trasformazione infinitesima isobara: $dU = \\delta Q - \\delta W$. Si sostituisce $dU = nC_V\\,dT$, $\\delta Q = nC_P\\,dT$, e $\\delta W = P\\,dV = nR\\,dT$ (quest'ultimo da $PV=nRT$ differenziato a $P$ costante). Si ottiene $nC_V\\,dT = nC_P\\,dT - nR\\,dT$, da cui dividendo per $n\\,dT$: $C_P - C_V = R$."
        },
        {
            type: "tranello",
            front: "Perché le relazioni dell'adiabatica reversibile ($PV^\\gamma = \\text{cost}$, ecc.) NON si possono applicare all'espansione libera, che pure è adiabatica?",
            back: "Quelle relazioni si ottengono integrando una relazione differenziale **lungo la trasformazione**, il che richiede che la trasformazione passi attraverso stati di equilibrio (reversibilità). L'espansione libera è **irreversibile per sua natura**: non attraversa stati di equilibrio (non esiste un valore unico di $P$ durante il processo). Applicarle è un errore grave."
        },
        {
            type: "formula",
            front: "Quali sono i valori di $C_V$, $C_P$ e $\\gamma$ per un gas ideale monoatomico e biatomico?",
            back: "**Monoatomico** (3 gradi di libertà traslazionali): $C_V = \\frac{3}{2}R$, $C_P = \\frac{5}{2}R$, $\\gamma = \\frac{5}{3} \\simeq 1{,}67$. **Biatomico** (3 traslazionali + 2 rotazionali): $C_V = \\frac{5}{2}R$, $C_P = \\frac{7}{2}R$, $\\gamma = \\frac{7}{5} = 1{,}4$. In entrambi i casi $C_P - C_V = R$."
        },
        {
            type: "domanda",
            front: "In una trasformazione isoterma di un gas ideale, qual è la relazione tra calore e lavoro?",
            back: "Poiché $T = \\text{cost}$, si ha $\\Delta T = 0$ e quindi $\\Delta U = nC_V \\Delta T = 0$. Dal primo principio $\\Delta U = Q - W$ segue $Q = W$: tutto il calore scambiato si traduce in lavoro (e viceversa)."
        },
        {
            type: "domanda",
            front: "Perché l'espansione libera è irreversibile per sua natura, indipendentemente dalla velocità con cui si esegue?",
            back: "Per rendere una trasformazione quasi-reversibile occorre che passi attraverso stati di quasi-equilibrio. Nell'espansione libera, all'apertura del rubinetto in un vano c'è una certa pressione e nell'altro il vuoto: non esiste un valore unico di $P$ associabile al sistema durante il processo. Questo vale che l'espansione sia veloce o lenta: la trasformazione non attraversa mai stati di equilibrio."
        }
    ]
};

