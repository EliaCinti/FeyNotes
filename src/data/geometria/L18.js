const LESSON = {
    id: "L18", date: "Lezione 18 — 16 Apr 2026",
    title: "Sistemi Lineari Rettangolari e Rappresentazioni di Sottospazi",
    abstract: "Come risolvere sistemi rettangolari con Cramer, l'algoritmo generale di riduzione, e il passaggio tra rappresentazione cartesiana e parametrica di sottospazi vettoriali.",

    sections: [
        {
            id: "s18-cramer-rettangolari",
            type: "section",
            title: "Cramer per Sistemi Rettangolari",
            icon: "🔧",
            content: `<p>Il Teorema di Cramer si applica direttamente solo a sistemi quadrati. Tuttavia, possiamo usarlo anche per sistemi rettangolari (più incognite che equazioni, o viceversa), a patto che il sistema sia compatibile. La strategia è: <strong>ridurre il sistema a un sistema di Cramer equivalente</strong>, trattando alcune incognite come parametri liberi.</p>`,
            subsections: [
                {
                    subtitle: "Esempio: sistema 3×4",
                    content: `<p>Consideriamo il sistema:</p>
<p>$$S: \\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\\\ 3x_1 + 4x_4 = 1 \\end{cases}$$</p>
<p>È un sistema di 3 equazioni in 4 incognite: non possiamo applicare direttamente Cramer.</p>`
                },
                {
                    subtitle: "Analisi del Rango e Compatibilità",
                    content: `<p>Scriviamo la matrice incompleta $A$ e la matrice completa $B$:</p>
<p>$$A = \\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\end{pmatrix}$$</p>
<p>Consideriamo il minore $M$ formato dalle prime due righe e dalle prime due colonne:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} = (-2) - 1 = -3 \\neq 0$$</p>
<p>Questo è un minore di ordine 2 con determinante non nullo. Per stabilire se il rango è esattamente 2, verifichiamo che tutti gli orlati (minori di ordine 3) abbiano determinante nullo. Ad esempio, con le colonne 1, 2, 3:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 3 & 0 & 0 \\end{pmatrix} = 2 \\cdot 0 - 1 \\cdot(0-(-3)) + 1 \\cdot(0-(-3)) = 0 - 3 + 3 = 0$$</p>
<p>Analogamente per le altre combinazioni. Dunque $\\text{rango}(A) = 2$.</p>
<p>Per la matrice completa, orliamo il minore fondamentale aggiungendo la colonna dei termini noti e la terza riga:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 3 & 0 & 1 \\end{pmatrix} = 2(-1-0) - 1(1-0) + 1(0-(-3)) = -2 - 1 + 3 = 0$$</p>
<p>Quindi $\\text{rango}(B) = 2$. Per il <strong>teorema di Rouché-Capelli</strong>, il sistema è compatibile.</p>`
                },
                {
                    subtitle: "Riduzione del Sistema",
                    content: `<p>Il rango è 2 e il minore fondamentale coinvolge le prime due righe, quindi la <strong>terza riga è sovrabbondante</strong> (combinazione lineare delle prime due). Verifichiamolo: sommando la prima e la seconda equazione si ottiene esattamente la terza:</p>
<p>$$(2x_1+x_2+x_3+x_4)+(x_1-x_2-x_3+3x_4) = 3x_1+4x_4 \\quad \\text{e} \\quad 1+0=1$$</p>
<p>Il sistema è equivalente a:</p>
<p>$$S': \\begin{cases} 2x_1 + x_2 = 1 - x_3 - x_4 \\\\ x_1 - x_2 = x_3 - 3x_4 \\end{cases}$$</p>`
                },
                {
                    subtitle: "Riorganizzazione come Sistema di Cramer",
                    content: `<p>Le colonne del minore fondamentale corrispondono a $x_1$ e $x_2$: queste sono le <strong>incognite principali</strong>. Le variabili $x_3$ e $x_4$ diventano <strong>parametri liberi</strong> e vengono spostate al secondo membro.</p>
<p>Otteniamo un sistema di Cramer $2 \\times 2$. La matrice dei coefficienti è proprio quella del minore fondamentale (determinante $-3$), e il vettore dei termini noti dipende dai parametri:</p>
<p>$$\\boldsymbol{b}' = \\begin{pmatrix} 1 - x_3 - x_4 \\\\ x_3 - 3x_4 \\end{pmatrix}$$</p>
<p>Per ogni scelta di $x_3$ e $x_4$, il sistema ha soluzione unica per $x_1$ e $x_2$. Poiché abbiamo $n - p = 4 - 2 = 2$ parametri liberi, il sistema avrà $\\infty^2$ soluzioni.</p>`
                },
                {
                    subtitle: "Risoluzione con la Regola di Cramer",
                    content: `<p><strong>Calcolo di $x_1$:</strong></p>
<p>$$x_1 = \\frac{\\det(A_1)}{\\det(A)} = \\frac{1}{-3} \\det \\begin{pmatrix} 1 - x_3 - x_4 & 1 \\\\ x_3 - 3x_4 & -1 \\end{pmatrix}$$</p>
<p>Sviluppiamo il numeratore:</p>
<p>$$\\det(A_1) = (1-x_3-x_4)(-1) - 1(x_3-3x_4) = -1+x_3+x_4-x_3+3x_4 = 4x_4 - 1$$</p>
<p>Quindi:</p>
<p>$$x_1 = \\frac{4x_4 - 1}{-3} = \\frac{1 - 4x_4}{3}$$</p>
<p><strong>Calcolo di $x_2$:</strong></p>
<p>$$x_2 = \\frac{\\det(A_2)}{\\det(A)} = \\frac{1}{-3} \\det \\begin{pmatrix} 2 & 1 - x_3 - x_4 \\\\ 1 & x_3 - 3x_4 \\end{pmatrix}$$</p>
<p>Sviluppiamo il numeratore:</p>
<p>$$\\det(A_2) = 2(x_3-3x_4) - 1(1-x_3-x_4) = 2x_3-6x_4-1+x_3+x_4 = 3x_3 - 5x_4 - 1$$</p>
<p>Quindi:</p>
<p>$$x_2 = \\frac{3x_3 - 5x_4 - 1}{-3} = \\frac{-3x_3 + 5x_4 + 1}{3}$$</p>`
                },
                {
                    subtitle: "Soluzione Parametrica e Forma Vettoriale",
                    content: `<p>L'insieme delle soluzioni è:</p>
<p>$$\\begin{cases} x_1 = \\dfrac{1}{3} - \\dfrac{4}{3}\\,x_4 \\\\[6pt] x_2 = \\dfrac{1}{3} - x_3 + \\dfrac{5}{3}\\,x_4 \\\\[6pt] x_3 = x_3 \\quad (\\text{parametro libero}) \\\\[4pt] x_4 = x_4 \\quad (\\text{parametro libero}) \\end{cases}$$</p>
<p>In forma vettoriale, separando la parte costante dai coefficienti dei parametri:</p>
<p>$$\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{pmatrix} = \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 0 \\\\ 0 \\end{pmatrix} + x_3 \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix} + x_4 \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>Questa forma evidenzia che lo <strong>spazio delle soluzioni è uno spazio affine</strong>: una traslazione (il vettore costante, che è una soluzione particolare) più un sottospazio vettoriale di dimensione 2 (generato dai due vettori associati ai parametri liberi).</p>`
                }
            ],
            formulas: [
                { label: "Cramer per x₁", latex: "x_1 = \\frac{1 - 4x_4}{3}" },
                { label: "Cramer per x₂", latex: "x_2 = \\frac{-3x_3 + 5x_4 + 1}{3}" }
            ]
        },
        {
            id: "s18-algoritmo-generale",
            type: "section",
            title: "Algoritmo Generale per Sistemi Rettangolari",
            icon: "📋",
            content: `<p>Il procedimento visto nell'esempio si generalizza in un algoritmo per risolvere <strong>qualsiasi</strong> sistema lineare $S$ di $m$ equazioni in $n$ incognite.</p>`,
            subsections: [
                {
                    subtitle: "Definizione: equazione sovrabbondante",
                    content: `<p>Un'equazione si dice <strong>sovrabbondante</strong> se è combinazione lineare delle altre equazioni del sistema, cioè è ridondante ai fini della determinazione dell'insieme delle soluzioni. La sua eliminazione non modifica lo spazio delle soluzioni.</p>`
                },
                {
                    subtitle: "Passo 1 — Verifica Compatibilità",
                    content: `<p>Si calcola il rango della matrice incompleta $A$ e della matrice completa $B$. Se $\\text{rango}(A) \\neq \\text{rango}(B)$, il sistema è <strong>incompatibile</strong> (Rouché-Capelli). Se $\\text{rango}(A) = \\text{rango}(B) = p$, il sistema è compatibile.</p>`
                },
                {
                    subtitle: "Passo 2 — Individuazione Minore Fondamentale",
                    content: `<p>Si identifica un minore $M$ di $A$ di ordine $p$ con determinante non nullo. Questo minore è formato da $p$ righe e $p$ colonne specifiche della matrice $A$.</p>`
                },
                {
                    subtitle: "Passo 3 — Riduzione del Sistema",
                    content: `<p>Si eliminano le $m - p$ equazioni sovrabbondanti, cioè quelle le cui righe <strong>non concorrono a formare</strong> il minore $M$.</p>
<p><strong>Perché funziona?</strong> Il rango della matrice è $p$, il che significa che ogni insieme di $p+1$ righe è linearmente dipendente. Pertanto ciascuna riga esclusa dal minore fondamentale è necessariamente combinazione lineare delle $p$ righe che lo compongono.</p>
<p><strong>Nota pratica:</strong> il minore fondamentale non è necessariamente formato dalle prime $p$ righe! Se ad esempio in una matrice $5 \\times 4$ il minore fondamentale di ordine 3 è formato dalle righe 1, 3 e 5 (e da tre colonne opportune), allora le righe da eliminare sono la 2 e la 4, indipendentemente dalla loro posizione. Si identificano semplicemente per esclusione: <em>tutte le righe che non fanno parte del minore fondamentale vengono eliminate</em>.</p>
<p>Il sistema si riduce così a $p$ equazioni in $n$ incognite.</p>`
                },
                {
                    subtitle: "Passo 4 — Scelta Variabili Libere",
                    content: `<p>Le $n - p$ incognite che <strong>non</strong> corrispondono alle colonne del minore $M$ vengono scelte come parametri liberi.</p>`
                },
                {
                    subtitle: "Passo 5 — Riorganizzazione",
                    content: `<p>Si spostano i termini contenenti le variabili libere al secondo membro. Si ottiene un sistema quadrato $p \\times p$ nelle restanti $p$ incognite, la cui matrice dei coefficienti è proprio $M$.</p>`
                },
                {
                    subtitle: "Passo 6 — Risoluzione",
                    content: `<p>Si risolve il sistema $p \\times p$ con la <strong>regola di Cramer</strong>, esprimendo le $p$ incognite principali in funzione degli $n - p$ parametri liberi. Il risultato è la <strong>rappresentazione parametrica</strong> di tutte le soluzioni del sistema originale.</p>`
                }
            ]
        },
        {
            id: "s18-alert-righe-sovrabbondanti",
            type: "alert_box",
            title: "Attenzione: quali righe eliminare?",
            icon: "⚠️",
            content: `<p>Un errore frequente è pensare che le righe sovrabbondanti siano sempre "le ultime". <strong>Non è così!</strong> Le righe da eliminare sono quelle che non fanno parte del minore fondamentale scelto.</p>
<p><strong>Esempio:</strong> Se la matrice $A$ è $4 \\times 3$ e il minore fondamentale di ordine 2 è formato dalle righe 2 e 4 (e da due colonne), allora le righe sovrabbondanti sono la 1 e la 3. Le equazioni corrispondenti vengono eliminate.</p>
<p>La regola è semplice: <em>individua le righe del minore fondamentale → tutto il resto si elimina</em>.</p>`
        },
        {
            id: "s18-omogenei-sottospazi",
            type: "section",
            title: "Sistemi Omogenei e Sottospazi Vettoriali",
            icon: "🎯",
            content: `<p>Un sistema lineare $A\\boldsymbol{x} = \\boldsymbol{b}$ si dice <strong>omogeneo</strong> se $\\boldsymbol{b} = \\boldsymbol{0}$. La domanda fondamentale è: quando l'insieme delle soluzioni forma un sottospazio vettoriale?</p>`,
            subsections: [
                {
                    subtitle: "Proposizione: soluzioni = sottospazio ⟺ sistema omogeneo",
                    content: `<p><strong>Enunciato:</strong> L'insieme delle soluzioni di un sistema lineare $A\\boldsymbol{x} = \\boldsymbol{b}$ forma un sottospazio vettoriale di $\\mathbb{R}^n$ se e solo se il sistema è omogeneo.</p>`
                },
                {
                    subtitle: "Dimostrazione (⇒): se è sottospazio, allora è omogeneo",
                    content: `<p>Se $\\text{Sol}(S)$ è un sottospazio vettoriale, deve contenere il vettore nullo $\\boldsymbol{0} \\in \\mathbb{R}^n$. Sostituendo $\\boldsymbol{x} = \\boldsymbol{0}$ nel sistema otteniamo $A\\boldsymbol{0} = \\boldsymbol{b}$. Ma $A\\boldsymbol{0} = \\boldsymbol{0}$, quindi deve essere $\\boldsymbol{b} = \\boldsymbol{0}$: il sistema è omogeneo.</p>`
                },
                {
                    subtitle: "Dimostrazione (⇐): se è omogeneo, allora è sottospazio",
                    content: `<p>Supponiamo $A\\boldsymbol{x} = \\boldsymbol{0}$. Sia $U = \\text{Sol}(S)$. Verifichiamo le tre proprietà:</p>
<p><strong>1. Vettore nullo:</strong> $A\\boldsymbol{0} = \\boldsymbol{0}$, quindi $\\boldsymbol{0} \\in U$. ✓</p>
<p><strong>2. Chiusura per somma:</strong> Se $\\boldsymbol{x}, \\boldsymbol{y} \\in U$, allora $A\\boldsymbol{x} = \\boldsymbol{0}$ e $A\\boldsymbol{y} = \\boldsymbol{0}$. Quindi:</p>
<p>$$A(\\boldsymbol{x} + \\boldsymbol{y}) = A\\boldsymbol{x} + A\\boldsymbol{y} = \\boldsymbol{0} + \\boldsymbol{0} = \\boldsymbol{0}$$</p>
<p>Dunque $\\boldsymbol{x} + \\boldsymbol{y} \\in U$. ✓</p>
<p><strong>3. Chiusura per scalare:</strong> Se $\\boldsymbol{x} \\in U$ e $c \\in \\mathbb{R}$, allora:</p>
<p>$$A(c\\boldsymbol{x}) = c(A\\boldsymbol{x}) = c(\\boldsymbol{0}) = \\boldsymbol{0}$$</p>
<p>Dunque $c\\boldsymbol{x} \\in U$. ✓</p>`
                },
                {
                    subtitle: "Esempio: perché serve l'omogeneità",
                    content: `<p>Per capire intuitivamente perché la condizione è necessaria, consideriamo $x + y = 1$. Le soluzioni $(1,0)$ e $(0,1)$ appartengono a $\\text{Sol}(S)$, ma la loro somma $(1,1)$ <strong>non</strong> è soluzione: $1 + 1 = 2 \\neq 1$. Dunque $\\text{Sol}(S)$ non è chiuso rispetto alla somma e <strong>non è un sottospazio vettoriale</strong>.</p>`
                }
            ]
        },
        {
            id: "s18-rappresentazioni",
            type: "section",
            title: "Rappresentazione Cartesiana e Parametrica",
            icon: "🗺️",
            content: `<p>Esistono due modi fondamentali per descrivere un sottospazio vettoriale: tramite <strong>equazioni</strong> (cartesiana) o tramite <strong>generatori</strong> (parametrica). Sono due facce della stessa medaglia.</p>
<div class="diagram-placeholder" style="border: 1px dashed var(--border-light); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
  <p><strong>📊 Diagramma 1 — Cartesiano vs Parametrico in ℝ³</strong></p>
  <p><em>Un piano passante per l'origine in $\\mathbb{R}^3$. Rappresentazione cartesiana: un'equazione $ax + by + cz = 0$ che "taglia" lo spazio. Rappresentazione parametrica: due vettori $\\boldsymbol{u}_1, \\boldsymbol{u}_2$ che "generano" il piano come $\\text{Span}(\\boldsymbol{u}_1, \\boldsymbol{u}_2)$. La cartesiana descrive il piano come luogo di zeri; la parametrica lo descrive come luogo raggiunto variando i parametri.</em></p>
  <p style="margin-top: 8px; font-size: 0.75rem; color: var(--accent);">[ immagine da inserire ]</p>
</div>`,
            subsections: [
                {
                    subtitle: "Rappresentazione Cartesiana",
                    content: `<p>Un sistema lineare omogeneo $S: A\\boldsymbol{x} = \\boldsymbol{0}$ si dice <strong>rappresentazione cartesiana</strong> di un sottospazio vettoriale $U \\subseteq \\mathbb{R}^n$ se:</p>
<p>$$U = \\text{Sol}(S) = \\{ \\boldsymbol{x} \\in \\mathbb{R}^n \\mid A\\boldsymbol{x} = \\boldsymbol{0} \\}$$</p>
<p>In pratica, il sottospazio è descritto come l'insieme dei vettori che <strong>soddisfano certe equazioni</strong>.</p>`
                },
                {
                    subtitle: "Rappresentazione Parametrica",
                    content: `<p>Sia $U$ un sottospazio di $\\mathbb{R}^n$ di dimensione $h$, con base $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$. Una <strong>rappresentazione parametrica</strong> è un'applicazione biiettiva $\\rho: \\mathbb{R}^h \\to U$:</p>
<p>$$\\rho(\\lambda_1, \\dots, \\lambda_h) = \\lambda_1 \\boldsymbol{u}_1 + \\lambda_2 \\boldsymbol{u}_2 + \\dots + \\lambda_h \\boldsymbol{u}_h$$</p>
<p><strong>Notazione:</strong> indichiamo con $(\\boldsymbol{u}_k)_i$ la $i$-esima componente del $k$-esimo vettore base $\\boldsymbol{u}_k$. Con questa notazione, scrivendo per componenti si ottiene:</p>
<p>$$\\begin{cases} x_1 = \\lambda_1 (\\boldsymbol{u}_1)_1 + \\lambda_2 (\\boldsymbol{u}_2)_1 + \\dots + \\lambda_h (\\boldsymbol{u}_h)_1 \\\\ x_2 = \\lambda_1 (\\boldsymbol{u}_1)_2 + \\lambda_2 (\\boldsymbol{u}_2)_2 + \\dots + \\lambda_h (\\boldsymbol{u}_h)_2 \\\\ \\vdots \\\\ x_n = \\lambda_1 (\\boldsymbol{u}_1)_n + \\lambda_2 (\\boldsymbol{u}_2)_n + \\dots + \\lambda_h (\\boldsymbol{u}_h)_n \\end{cases}$$</p>
<p>In pratica, il sottospazio è descritto come l'insieme dei vettori che si <strong>raggiungono</strong> variando i parametri $\\lambda_1, \\dots, \\lambda_h$.</p>`
                }
            ]
        },
        {
            id: "s18-dimensione-soluzioni",
            type: "section",
            title: "Dimensione dello Spazio delle Soluzioni",
            icon: "📐",
            content: `<p>La relazione fondamentale tra il numero di incognite, il rango e la dimensione dello spazio delle soluzioni.</p>`,
            subsections: [
                {
                    subtitle: "Proposizione: dim(Sol) = n − p",
                    content: `<p><strong>Enunciato:</strong> Sia $S: A\\boldsymbol{x} = \\boldsymbol{0}$ un sistema omogeneo con $n$ incognite e $p = \\text{rango}(A)$. Allora:</p>
<p>$$\\dim(\\text{Sol}(S)) = n - p$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Dall'algoritmo di risoluzione, le $n-p$ variabili libere diventano parametri e le $p$ variabili principali vengono espresse in funzione di questi tramite Cramer. La soluzione generale si scrive:</p>
<p>$$\\boldsymbol{x} = \\lambda_1 \\boldsymbol{u}_1 + \\lambda_2 \\boldsymbol{u}_2 + \\dots + \\lambda_{n-p} \\boldsymbol{u}_{n-p}$$</p>
<p>dove i vettori $\\boldsymbol{u}_k$ si ottengono assegnando ai parametri liberi i <strong>valori canonici</strong>: per $\\boldsymbol{u}_k$ si pone il $k$-esimo parametro uguale a 1 e tutti gli altri uguali a 0.</p>
<p><strong>Indipendenza lineare:</strong> Il vettore $\\boldsymbol{u}_k$ ha la componente corrispondente alla $k$-esima variabile libera uguale a 1, mentre tutti gli altri $\\boldsymbol{u}_j$ (con $j \\neq k$) hanno tale componente uguale a 0. Nessuna combinazione lineare non banale degli altri vettori può riprodurre $\\boldsymbol{u}_k$.</p>
<p><strong>Generano Sol(S):</strong> Ogni soluzione si ottiene per una scelta dei parametri liberi, quindi i vettori generano tutto $\\text{Sol}(S)$.</p>
<p>Essendo un sistema di generatori linearmente indipendenti, formano una <strong>base</strong>, e dunque $\\dim(\\text{Sol}(S)) = n - p$.</p>`
                }
            ],
            formulas: [
                { label: "Dimensione soluzioni", latex: "\\dim(\\text{Sol}(S)) = n - p" }
            ]
        },
        {
            id: "s18-cartesiano-parametrico",
            type: "section",
            title: "Dal Cartesiano al Parametrico: Esempio",
            icon: "➡️",
            content: `<p>Risolvere un sistema omogeneo (cartesiano) equivale a trovare la sua rappresentazione parametrica. Vediamolo con un esempio completo.</p>`,
            subsections: [
                {
                    subtitle: "Il sistema omogeneo 4×4",
                    content: `<p>Consideriamo:</p>
<p>$$S: \\begin{cases} 2x + y + z + t = 0 \\\\ x - y - z + 3t = 0 \\\\ 3x + 4t = 0 \\\\ x + z + t = 0 \\end{cases}$$</p>
<p>La matrice dei coefficienti è:</p>
<p>$$A = \\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\\\ 1 & 0 & 1 & 1 \\end{pmatrix}$$</p>`
                },
                {
                    subtitle: "Calcolo del rango",
                    content: `<p>Calcoliamo il determinante della matrice $4 \\times 4$ sviluppando lungo la terza riga (che ha due zeri, il che semplifica i conti):</p>
<p>$$\\det(A) = 3 \\cdot C_{31} + 0 + 0 + 4 \\cdot C_{34}$$</p>
<p>dove $C_{31}$ e $C_{34}$ sono i cofattori corrispondenti. Svolgendo i calcoli (che il professore lascia come verifica), si ottiene $\\det(A) = 0$. Dunque $\\text{rango}(A) \\lt 4$.</p>
<p>Cerchiamo un minore di ordine 3 non nullo. Consideriamo il minore formato dalle righe 1, 2, 4 e colonne 1, 2, 4:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & 3 \\\\ 1 & 0 & 1 \\end{pmatrix} = 2(-1-0) - 1(1-3) + 1(0-(-1)) = -2 + 2 + 1 = 1 \\neq 0$$</p>
<p>Dunque $\\text{rango}(A) = 3$. La dimensione dello spazio delle soluzioni è $n - p = 4 - 3 = 1$: <strong>un solo parametro libero</strong>.</p>`
                },
                {
                    subtitle: "Riduzione per eliminazione gaussiana",
                    content: `<p>Scegliamo la quarta equazione $x + z + t = 0$ come pivot perché ha il coefficiente 1 davanti a $x$, il che semplifica i calcoli. La scelta del pivot è arbitraria purché il coefficiente della variabile da eliminare sia non nullo.</p>
<p>Dalla quarta equazione: $x = -z - t$. Sostituiamo nelle altre:</p>
<p><strong>Prima equazione:</strong> $2(-z-t) + y + z + t = 0 \\Rightarrow y - z - t = 0$</p>
<p><strong>Seconda equazione:</strong> $(-z-t) - y - z + 3t = 0 \\Rightarrow -y - 2z + 2t = 0 \\Rightarrow y + 2z - 2t = 0$</p>
<p><strong>Terza equazione:</strong> $3(-z-t) + 4t = 0 \\Rightarrow -3z + t = 0 \\Rightarrow t = 3z$</p>
<p>Per eliminare le variabili e ricavare $y$, sommiamo le due equazioni ridotte $y - z - t = 0$ e $y + 2z - 2t = 0$:</p>
<p>$$2y + z - 3t = 0$$</p>
<p>Sostituendo $t = 3z$: $2y + z - 9z = 0 \\Rightarrow 2y - 8z = 0 \\Rightarrow y = 4z$.</p>
<p>Verifica nella prima ridotta: $4z - z - 3z = 0$ ✓</p>`
                },
                {
                    subtitle: "Base dello spazio delle soluzioni",
                    content: `<p>Il sistema equivalente è:</p>
<p>$$\\begin{cases} x = -z - 3z = -4z \\\\ y = 4z \\\\ z = z \\quad (\\text{parametro libero}) \\\\ t = 3z \\end{cases}$$</p>
<p>Ponendo $z = 1$ otteniamo il vettore base:</p>
<p>$$\\boldsymbol{u}_1 = (-4, \\, 4, \\, 1, \\, 3)$$</p>
<p>Lo spazio delle soluzioni è:</p>
<p>$$\\text{Sol}(S) = \\text{Span}(\\boldsymbol{u}_1) = \\left\\{ \\lambda \\begin{pmatrix} -4 \\\\ 4 \\\\ 1 \\\\ 3 \\end{pmatrix} : \\lambda \\in \\mathbb{R} \\right\\}$$</p>
<p>Questo è un sottospazio di dimensione 1 (una retta per l'origine in $\\mathbb{R}^4$).</p>`
                }
            ]
        },
        {
            id: "s18-parametrico-cartesiano",
            type: "section",
            title: "Dal Parametrico al Cartesiano: Algoritmo",
            icon: "⬅️",
            content: `<p>Il passaggio inverso: data una base del sottospazio, come trovare le equazioni che lo descrivono? L'idea chiave è usare la <strong>condizione di dipendenza lineare</strong> e il <strong>Teorema degli Orlati</strong>.</p>`,
            subsections: [
                {
                    subtitle: "L'algoritmo passo per passo",
                    content: `<p><strong>1.</strong> Si parte da una base $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ del sottospazio $U \\subseteq \\mathbb{R}^n$.</p>
<p><strong>2.</strong> Un vettore $\\boldsymbol{x} = (x_1, \\dots, x_n)$ appartiene a $U$ se e solo se $\\boldsymbol{x} \\in \\text{Span}(\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h)$, cioè se l'insieme $\\{\\boldsymbol{x}, \\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ è linearmente dipendente.</p>
<p><strong>3.</strong> Si costruisce la matrice $M$ con colonne $\\boldsymbol{x}, \\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h$ (matrice $n \\times (h+1)$).</p>
<p><strong>4.</strong> La condizione è $\\text{rango}(M) = h$ (e non $h+1$).</p>
<p><strong>5.</strong> Si trova un minore di ordine $h$ non nullo nelle colonne $\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h$ (esiste perché formano una base, quindi sono l.i.). Si impone che tutti gli orlati di ordine $h+1$ (aggiungendo la colonna di $\\boldsymbol{x}$ e una riga esclusa) abbiano determinante nullo.</p>
<p><strong>6.</strong> Le equazioni $\\det(\\text{orlato}) = 0$ sono <strong>lineari</strong> in $x_1, \\dots, x_n$ e omogenee: sono la rappresentazione cartesiana di $U$.</p>`
                },
                {
                    subtitle: "Esempio: dal parametrico al cartesiano",
                    content: `<p>Sia $U \\subseteq \\mathbb{R}^4$ il sottospazio con base:</p>
<p>$$\\boldsymbol{u}_1 = \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\boldsymbol{u}_2 = \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>(Sono i vettori trovati nell'Esempio 1, che generano la parte omogenea della soluzione.)</p>
<p><strong>Costruzione di $M$:</strong></p>
<p>$$M = \\begin{pmatrix} x_1 & 0 & -4/3 \\\\ x_2 & -1 & 5/3 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 1 \\end{pmatrix}$$</p>
<p>Matrice $4 \\times 3$, con $h = 2$.</p>`
                },
                {
                    subtitle: "Minore fondamentale e calcolo degli orlati",
                    content: `<p>Cerchiamo un minore $2 \\times 2$ non nullo nelle colonne 2 e 3 (quelle di $\\boldsymbol{u}_1, \\boldsymbol{u}_2$). Con le righe 3 e 4:</p>
<p>$$\\det \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1 \\neq 0$$</p>
<p>Minore fondamentale trovato (righe 3–4, colonne 2–3). Ora orliamo aggiungendo la colonna 1 ($\\boldsymbol{x}$) e ciascuna riga esclusa (righe 1 e 2).</p>
<p><strong>Orlato con riga 1</strong> (righe 1, 3, 4):</p>
<p>$$\\det \\begin{pmatrix} x_1 & 0 & -4/3 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 1 \\end{pmatrix} = x_1(1) + \\frac{4}{3}x_4 = 0$$</p>
<p>Moltiplicando per 3: $\\quad 3x_1 + 4x_4 = 0$</p>
<p><strong>Orlato con riga 2</strong> (righe 2, 3, 4):</p>
<p>$$\\det \\begin{pmatrix} x_2 & -1 & 5/3 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 1 \\end{pmatrix} = x_2 + x_3 - \\frac{5}{3}x_4 = 0$$</p>
<p>Moltiplicando per 3: $\\quad 3x_2 + 3x_3 - 5x_4 = 0$</p>`
                },
                {
                    subtitle: "Risultato: rappresentazione cartesiana",
                    content: `<p>La rappresentazione cartesiana di $U$ è:</p>
<p>$$U: \\begin{cases} 3x_1 + 4x_4 = 0 \\\\ 3x_2 + 3x_3 - 5x_4 = 0 \\end{cases}$$</p>
<p><strong>Verifica:</strong></p>
<p>$\\boldsymbol{u}_1 = (0,-1,1,0)$: $3(0)+4(0) = 0$ ✓; $3(-1)+3(1)-5(0) = 0$ ✓</p>
<p>$\\boldsymbol{u}_2 = (-4/3, 5/3, 0, 1)$: $3(-4/3)+4(1) = -4+4 = 0$ ✓; $3(5/3)+3(0)-5(1) = 5-5 = 0$ ✓</p>
<p>Il sottospazio $U$ ha dimensione $h = 2$ e la rappresentazione cartesiana consiste in $n - h = 4 - 2 = 2$ equazioni linearmente indipendenti.</p>`
                }
            ]
        },
        {
            id: "s18-corollario-n-h",
            type: "section",
            title: "Corollario: n − h equazioni per un sottospazio di dimensione h",
            icon: "🏛️",
            content: `<p><strong>Enunciato:</strong> Un sottospazio vettoriale $U \\subseteq \\mathbb{R}^n$ di dimensione $h$ può essere descritto come l'insieme delle soluzioni di un sistema omogeneo di <strong>$n - h$ equazioni linearmente indipendenti</strong>.</p>`,
            subsections: [
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Sia $\\{\\boldsymbol{u}_1, \\dots, \\boldsymbol{u}_h\\}$ una base di $U$. L'algoritmo parametrico → cartesiano costruisce la matrice $M$ di dimensione $n \\times (h+1)$ e impone l'annullamento dei minori di ordine $h+1$ che orlano un minore fondamentale di ordine $h$.</p>
<p>Il minore fondamentale è formato dalle colonne dei vettori della base e da $h$ righe selezionate. Le righe rimanenti sono $n - h$, e ciascuna produce un'equazione (un orlato).</p>
<p><strong>Perché sono indipendenti?</strong> Consideriamo l'equazione ottenuta dall'orlato che aggiunge la riga $i$-esima (una riga non inclusa nel minore fondamentale). In questa equazione, la componente $x_i$ compare con coefficiente uguale al <strong>determinante del minore fondamentale</strong>, che è non nullo. Al contrario, nelle altre equazioni (ottenute orlando con righe $j \\neq i$), il coefficiente di $x_i$ è 0, perché la riga $i$ non compare in quegli orlati.</p>
<p>Questo produce una <strong>struttura triangolare</strong> nella matrice dei coefficienti delle $n-h$ equazioni (rispetto alle variabili $x_i$ corrispondenti alle righe escluse), che garantisce l'indipendenza lineare.</p>`
                }
            ],
            formulas: [
                { label: "Numero equazioni cartesiane", latex: "\\text{numero equazioni} = n - h = n - \\dim(U)" }
            ]
        },
        {
            id: "s18-dualita",
            type: "note_box",
            title: "Dualità tra le due rappresentazioni",
            icon: "🔄",
            content: `<p>Le due rappresentazioni sono <strong>duali</strong>:</p>
<p><strong>Cartesiana → Parametrica:</strong> Si risolve il sistema omogeneo con l'algoritmo generale (Sezione 2), ottenendo la soluzione come combinazione lineare di $n - p$ vettori base con parametri liberi.</p>
<p><strong>Parametrica → Cartesiana:</strong> Data una base di $h$ vettori, si costruisce la matrice $M$, si calcolano gli orlati e si ottengono $n - h$ equazioni omogenee indipendenti.</p>
<p>In entrambi i casi, se il sottospazio ha dimensione $h$ in $\\mathbb{R}^n$:</p>
<p>$$\\text{Parametrica: } h \\text{ vettori base} \\qquad \\longleftrightarrow \\qquad \\text{Cartesiana: } n - h \\text{ equazioni}$$</p>
<p>Le due quantità sono <strong>complementari</strong>: la loro somma è sempre $n$.</p>`
        },
        {
            id: "s18-oral-riepilogo",
            type: "oral_box",
            title: "Domanda orale classica: struttura delle soluzioni",
            icon: "🎤",
            content: `<p><strong>Domanda:</strong> "Quando l'insieme delle soluzioni di un sistema lineare è un sottospazio vettoriale?"</p>
<p><strong>Risposta attesa:</strong> Se e solo se il sistema è omogeneo. La necessità segue dal fatto che un sottospazio contiene $\\boldsymbol{0}$, e sostituendo si ottiene $\\boldsymbol{b} = \\boldsymbol{0}$. La sufficienza si dimostra verificando le tre proprietà di sottospazio, usando la linearità del prodotto matrice-vettore.</p>`
        }
    ],

    oral_cards: [
        {
            type: "definizione",
            front: "Cosa si intende per equazione sovrabbondante in un sistema lineare?",
            back: "Un'equazione è <strong>sovrabbondante</strong> se è combinazione lineare delle altre equazioni del sistema. La sua eliminazione non modifica lo spazio delle soluzioni. Le equazioni sovrabbondanti sono quelle le cui righe non fanno parte del minore fondamentale."
        },
        {
            type: "domanda",
            front: "Quando l'insieme delle soluzioni di $A\\boldsymbol{x} = \\boldsymbol{b}$ è un sottospazio vettoriale di $\\mathbb{R}^n$?",
            back: "Se e solo se il sistema è <strong>omogeneo</strong>, cioè $\\boldsymbol{b} = \\boldsymbol{0}$. La necessità segue dal fatto che un sottospazio contiene il vettore nullo. La sufficienza si dimostra verificando chiusura per somma e per prodotto scalare, usando la linearità: $A(\\boldsymbol{x}+\\boldsymbol{y}) = A\\boldsymbol{x}+A\\boldsymbol{y}$ e $A(c\\boldsymbol{x}) = cA\\boldsymbol{x}$."
        },
        {
            type: "formula",
            front: "Qual è la dimensione dello spazio delle soluzioni di un sistema omogeneo $A\\boldsymbol{x} = \\boldsymbol{0}$ con $n$ incognite e $\\text{rango}(A) = p$?",
            back: "$$\\dim(\\text{Sol}(S)) = n - p$$I $n-p$ vettori base si ottengono assegnando ai parametri liberi i valori canonici (un parametro = 1, gli altri = 0). Sono linearmente indipendenti perché ciascuno ha un 1 in una posizione dove gli altri hanno 0."
        },
        {
            type: "dimostrazione",
            front: "Descrivi l'algoritmo per risolvere un sistema rettangolare $m \\times n$ compatibile con Cramer.",
            back: "1. Verificare compatibilità: $\\text{rango}(A) = \\text{rango}(B) = p$. 2. Trovare un minore fondamentale $M$ di ordine $p$ con $\\det(M) \\neq 0$. 3. Eliminare le $m-p$ equazioni sovrabbondanti (righe non nel minore). 4. Le $n-p$ incognite fuori dalle colonne di $M$ diventano parametri liberi. 5. Spostare i parametri a destra → sistema di Cramer $p \\times p$. 6. Risolvere con Cramer: le $p$ incognite principali sono espresse in funzione degli $n-p$ parametri."
        },
        {
            type: "definizione",
            front: "Cosa sono la rappresentazione cartesiana e quella parametrica di un sottospazio vettoriale?",
            back: "<strong>Cartesiana:</strong> sistema omogeneo $A\\boldsymbol{x} = \\boldsymbol{0}$ tale che $U = \\text{Sol}(S)$ (equazioni che il sottospazio soddisfa). <strong>Parametrica:</strong> espressione $\\boldsymbol{x} = \\lambda_1\\boldsymbol{u}_1 + \\dots + \\lambda_h\\boldsymbol{u}_h$ dove $\\{\\boldsymbol{u}_1,\\dots,\\boldsymbol{u}_h\\}$ è una base di $U$ (generatori del sottospazio). Per $U$ di dimensione $h$ in $\\mathbb{R}^n$: servono $h$ vettori base (parametrica) e $n-h$ equazioni (cartesiana)."
        },
        {
            type: "dimostrazione",
            front: "Come si passa da una rappresentazione parametrica a una cartesiana?",
            back: "Data la base $\\{\\boldsymbol{u}_1,\\dots,\\boldsymbol{u}_h\\}$, si costruisce la matrice $M$ con colonne $\\boldsymbol{x}, \\boldsymbol{u}_1,\\dots,\\boldsymbol{u}_h$ ($n \\times (h+1)$). Si trova un minore di ordine $h$ non nullo nelle colonne dei $\\boldsymbol{u}_k$. Si calcolano tutti gli orlati di ordine $h+1$ (aggiungendo la colonna di $\\boldsymbol{x}$ e ciascuna riga esclusa) e si impone $\\det(\\text{orlato}) = 0$. Le $n-h$ equazioni risultanti formano la rappresentazione cartesiana."
        },
        {
            type: "tranello",
            front: "Un sistema non omogeneo $x + y = 1$ ha soluzioni che formano un sottospazio vettoriale?",
            back: "<strong>No!</strong> Le soluzioni $(1,0)$ e $(0,1)$ appartengono a $\\text{Sol}(S)$, ma la loro somma $(1,1)$ non è soluzione ($1+1=2 \\neq 1$). La chiusura per somma fallisce. Inoltre, il vettore nullo $(0,0)$ non è soluzione. L'insieme delle soluzioni di un sistema non omogeneo è uno <strong>spazio affine</strong>, non un sottospazio vettoriale."
        },
        {
            type: "domanda",
            front: "Quante equazioni linearmente indipendenti servono per descrivere un sottospazio di dimensione $h$ in $\\mathbb{R}^n$?",
            back: "Servono esattamente $n - h$ equazioni linearmente indipendenti. Ad esempio, una retta ($h=1$) in $\\mathbb{R}^3$ richiede $3-1=2$ equazioni; un piano ($h=2$) in $\\mathbb{R}^3$ richiede $3-2=1$ equazione (un iperpiano)."
        },
        {
            type: "tranello",
            front: "Nell'algoritmo di riduzione, le righe sovrabbondanti sono sempre le ultime?",
            back: "<strong>No!</strong> Le righe sovrabbondanti sono quelle che <strong>non fanno parte del minore fondamentale</strong>. Se il minore fondamentale è formato dalle righe 1, 3 e 5, allora le righe sovrabbondanti sono la 2 e la 4, indipendentemente dalla loro posizione nel sistema."
        }
    ]
};

