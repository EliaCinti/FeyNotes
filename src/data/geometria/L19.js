const LESSON = {
    id: "L19", date: "Lezione 19 — 16 Apr 2026",
    title: "Sistemi Lineari Rettangolari e Rappresentazioni di Sottospazi",
    abstract: "Come usare Cramer anche per sistemi non quadrati, l'algoritmo generale di risoluzione, e il passaggio tra rappresentazione cartesiana e parametrica di un sottospazio vettoriale.",

    sections: [
        {
            id: "s19-cramer-rettangolari",
            type: "section",
            title: "Cramer per Sistemi Rettangolari",
            icon: "🔧",
            content: `<p>Il Teorema di Cramer si applica direttamente solo a sistemi quadrati $n \\times n$. Ma possiamo adattarlo anche a sistemi rettangolari ($m$ equazioni, $n$ incognite, $m \\neq n$), purché il sistema sia compatibile. L'idea chiave: <strong>ridurre il sistema a un sistema di Cramer</strong> trattando alcune incognite come parametri.</p>`,
            subsections: [
                {
                    subtitle: "Esempio completo: sistema 3×4",
                    content: `<p>Consideriamo il sistema:</p>
<p>$$S: \\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\\\ 3x_1 + 4x_4 = 1 \\end{cases}$$</p>
<p>3 equazioni, 4 incognite: non è quadrato, Cramer non si applica direttamente.</p>`
                },
                {
                    subtitle: "Fase 1 — Analisi del rango e compatibilità",
                    content: `<p>Scriviamo la matrice incompleta $A$ e la matrice completa $B$:</p>
<p>$$A = \\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\end{pmatrix}, \\qquad B = (A \\mid \\vec{b}) = \\begin{pmatrix} 2 & 1 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 & 0 \\\\ 3 & 0 & 0 & 4 & 1 \\end{pmatrix}$$</p>
<p>Cerchiamo un <strong>minore fondamentale</strong>. Prendiamo il minore $2 \\times 2$ formato dalle prime due righe e dalle prime due colonne:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} = (-2) - 1 = -3 \\neq 0$$</p>
<p>Questo minore ha determinante non nullo, quindi il rango è <strong>almeno 2</strong>. Per verificare se è esattamente 2, bisogna controllare che tutti i minori $3 \\times 3$ che <em>orlano</em> questo minore fondamentale abbiano determinante nullo.</p>
<p><strong>Orlato con terza colonna e terza riga di $A$:</strong></p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 3 & 0 & 0 \\end{pmatrix} = 2(0-0) - 1(0+3) + 1(0+3) = 0 - 3 + 3 = 0$$</p>
<p><strong>Orlato con quarta colonna e terza riga di $A$:</strong></p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & 3 \\\\ 3 & 0 & 4 \\end{pmatrix} = 2(-4-0) - 1(4-9) + 1(0+3) = -8 + 5 + 3 = 0$$</p>
<p>Tutti gli orlati in $A$ sono nulli, quindi $\\text{rango}(A) = 2$. Per $B$, l'unico orlato aggiuntivo da controllare è quello con la colonna dei termini noti:</p>
<p>$$\\det \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 3 & 0 & 1 \\end{pmatrix} = 2(-1-0) - 1(1-0) + 1(0+3) = -2 - 1 + 3 = 0$$</p>
<p>Quindi $\\text{rango}(B) = 2$. Poiché $\\text{rango}(A) = \\text{rango}(B) = 2$, per il <strong>Teorema di Rouché-Capelli</strong> il sistema è compatibile.</p>`
                },
                {
                    subtitle: "Fase 2 — Riduzione del sistema",
                    content: `<p>Il rango è $p = 2$ e il minore fondamentale coinvolge le <strong>prime due righe</strong>. La terza equazione è quindi <em>sovrabbondante</em> (combinazione lineare delle prime due) e può essere eliminata:</p>
<p>$$S' : \\begin{cases} 2x_1 + x_2 + x_3 + x_4 = 1 \\\\ x_1 - x_2 - x_3 + 3x_4 = 0 \\end{cases}$$</p>
<p>Verifica: la terza equazione $3x_1 + 4x_4 = 1$ si ottiene sommando le prime due ($2x_1 + x_1 = 3x_1$, $x_2 - x_2 = 0$, $x_3 - x_3 = 0$, $x_4 + 3x_4 = 4x_4$, $1 + 0 = 1$). ✓</p>`
                },
                {
                    subtitle: "Fase 3 — Riorganizzazione come sistema di Cramer",
                    content: `<p>Il minore fondamentale coinvolge le colonne di $x_1$ e $x_2$: queste sono le <strong>incognite principali</strong>. Le altre ($x_3$, $x_4$) diventano <strong>parametri liberi</strong>. Spostiamole al secondo membro:</p>
<p>$$\\begin{cases} 2x_1 + x_2 = 1 - x_3 - x_4 \\\\ x_1 - x_2 = x_3 - 3x_4 \\end{cases}$$</p>
<p>Ora abbiamo un sistema di Cramer $2 \\times 2$ nelle incognite $x_1, x_2$. La matrice dei coefficienti è proprio il minore fondamentale (con $\\det = -3 \\neq 0$), e il vettore dei termini noti dipende dai parametri:</p>
<p>$$\\vec{b}' = \\begin{pmatrix} 1 - x_3 - x_4 \\\\ x_3 - 3x_4 \\end{pmatrix}$$</p>
<p>Poiché abbiamo $n - p = 4 - 2 = 2$ parametri liberi, il sistema avrà $\\infty^2$ soluzioni. (La notazione $\\infty^k$ indica che lo spazio delle soluzioni dipende da $k$ parametri liberi indipendenti, cioè ha dimensione $k$.)</p>`
                },
                {
                    subtitle: "Fase 4 — Risoluzione con la regola di Cramer",
                    content: `<p><strong>Calcolo di $x_1$:</strong></p>
<p>$$x_1 = \\frac{\\det(A_1)}{\\det(A)} = \\frac{1}{-3} \\det \\begin{pmatrix} 1 - x_3 - x_4 & 1 \\\\ x_3 - 3x_4 & -1 \\end{pmatrix}$$</p>
<p>Determinante al numeratore:</p>
<p>$$\\det(A_1) = (1 - x_3 - x_4)(-1) - 1 \\cdot (x_3 - 3x_4) = -1 + x_3 + x_4 - x_3 + 3x_4 = 4x_4 - 1$$</p>
<p>Quindi:</p>
<p>$$x_1 = \\frac{4x_4 - 1}{-3} = \\frac{1 - 4x_4}{3}$$</p>
<p><strong>Calcolo di $x_2$:</strong></p>
<p>$$x_2 = \\frac{\\det(A_2)}{\\det(A)} = \\frac{1}{-3} \\det \\begin{pmatrix} 2 & 1 - x_3 - x_4 \\\\ 1 & x_3 - 3x_4 \\end{pmatrix}$$</p>
<p>Determinante al numeratore:</p>
<p>$$\\det(A_2) = 2(x_3 - 3x_4) - 1(1 - x_3 - x_4) = 2x_3 - 6x_4 - 1 + x_3 + x_4 = 3x_3 - 5x_4 - 1$$</p>
<p>Quindi:</p>
<p>$$x_2 = \\frac{3x_3 - 5x_4 - 1}{-3} = \\frac{1 - 3x_3 + 5x_4}{3}$$</p>`
                },
                {
                    subtitle: "Fase 5 — Soluzione parametrica",
                    content: `<p>L'insieme delle soluzioni è:</p>
<p>$$\\begin{cases} x_1 = \\dfrac{1}{3} - \\dfrac{4}{3}\\,x_4 \\\\[6pt] x_2 = \\dfrac{1}{3} - x_3 + \\dfrac{5}{3}\\,x_4 \\\\[6pt] x_3 = x_3 \\quad (\\text{parametro libero}) \\\\[6pt] x_4 = x_4 \\quad (\\text{parametro libero}) \\end{cases}$$</p>`
                },
                {
                    subtitle: "Fase 6 — Forma vettoriale",
                    content: `<p>Separando la parte costante dai contributi dei parametri:</p>
<p>$$\\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{pmatrix} = \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 0 \\\\ 0 \\end{pmatrix} + x_3 \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix} + x_4 \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>
<p>Lo spazio delle soluzioni è uno <strong>spazio affine</strong>: un punto specifico $\\vec{x}_0 = (1/3,\\, 1/3,\\, 0,\\, 0)$ più un sottospazio vettoriale di dimensione 2 generato dai due vettori direzionali. Al variare di $x_3$ e $x_4$ in $\\mathbb{R}$, si ottengono <em>tutte</em> le soluzioni.</p>`
                }
            ],
            formulas: [
                { label: "Minore fondamentale (esempio)", latex: "\\det \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} = -3 \\neq 0" },
                { label: "Soluzione per x₁", latex: "x_1 = \\frac{1 - 4x_4}{3}" },
                { label: "Soluzione per x₂", latex: "x_2 = \\frac{1 - 3x_3 + 5x_4}{3}" }
            ]
        },
        {
            id: "s19-algoritmo-generale",
            type: "section",
            title: "Algoritmo Generale per Sistemi Rettangolari",
            icon: "📋",
            content: `<p>Il procedimento visto nell'esempio si generalizza a <strong>qualsiasi</strong> sistema lineare $S$ di $m$ equazioni in $n$ incognite. Ecco i sei passi, che costituiscono una vera e propria ricetta operativa.</p>`,
            subsections: [
                {
                    subtitle: "Passo 1 — Verifica compatibilità",
                    content: `<p>Si calcolano $\\text{rango}(A)$ e $\\text{rango}(B)$ (matrice incompleta e completa). Se $\\text{rango}(A) \\neq \\text{rango}(B)$, il sistema è <strong>incompatibile</strong> (Rouché-Capelli). Se sono uguali a un valore $p$, il sistema è compatibile.</p>`
                },
                {
                    subtitle: "Passo 2 — Individuazione del minore fondamentale",
                    content: `<p>Si identifica un minore $M$ di $A$ di ordine $p$ con determinante non nullo. Le righe e le colonne che formano $M$ individuano rispettivamente le <strong>equazioni essenziali</strong> e le <strong>incognite principali</strong>.</p>`
                },
                {
                    subtitle: "Passo 3 — Riduzione del sistema",
                    content: `<p>Si eliminano le $m - p$ equazioni le cui righe <em>non</em> fanno parte del minore fondamentale. Sono sovrabbondanti (combinazioni lineari delle altre). Il sistema si riduce a $p$ equazioni in $n$ incognite.</p>`
                },
                {
                    subtitle: "Passo 4 — Scelta delle variabili libere",
                    content: `<p>Le $n - p$ incognite le cui colonne <em>non</em> fanno parte del minore fondamentale diventano <strong>parametri liberi</strong>.</p>`
                },
                {
                    subtitle: "Passo 5 — Riorganizzazione come sistema di Cramer",
                    content: `<p>Si spostano i termini contenenti le variabili libere al secondo membro. Si ottiene un sistema quadrato $p \\times p$ nelle $p$ incognite principali, la cui matrice dei coefficienti è proprio $M$ (che ha determinante non nullo).</p>`
                },
                {
                    subtitle: "Passo 6 — Risoluzione con Cramer",
                    content: `<p>Si risolve il sistema $p \\times p$ con la regola di Cramer, esprimendo le $p$ incognite principali in funzione degli $n - p$ parametri liberi. Il risultato è la <strong>rappresentazione parametrica</strong> di tutte le soluzioni.</p>`
                }
            ],
            formulas: [
                { label: "Numero parametri liberi", latex: "\\text{parametri liberi} = n - p" },
                { label: "Compatibilità (Rouché-Capelli)", latex: "\\text{rango}(A) = \\text{rango}(B) = p \\Rightarrow \\text{compatibile}" }
            ],
            extra_content: `<p><strong>Osservazione sulla notazione $\\infty^k$:</strong> quando si dice che un sistema ha $\\infty^k$ soluzioni, si intende che lo spazio delle soluzioni ha dimensione $k$, cioè dipende da $k$ parametri liberi indipendenti. Per $k=0$ la soluzione è unica, per $k=1$ è una retta, per $k=2$ è un piano, ecc.</p>`
        },
        {
            id: "s19-omogenei-sottospazi",
            type: "section",
            title: "Sistemi Omogenei e Sottospazi Vettoriali",
            icon: "🎯",
            content: `<p>Un sistema lineare $A\\vec{x} = \\vec{b}$ si dice <strong>omogeneo</strong> quando $\\vec{b} = \\vec{0}$. Questi sistemi hanno un ruolo speciale: le loro soluzioni formano sempre un sottospazio vettoriale.</p>`,
            subsections: [
                {
                    subtitle: "L'osservazione fondamentale",
                    content: `<p><strong>L'insieme delle soluzioni di $A\\vec{x} = \\vec{b}$ è un sottospazio vettoriale di $\\mathbb{R}^n$ se e solo se il sistema è omogeneo</strong> (cioè $\\vec{b} = \\vec{0}$).</p>
<p>Questo è un risultato <em>se e solo se</em>, quindi va dimostrato in entrambe le direzioni.</p>`
                },
                {
                    subtitle: "Dimostrazione (⇒): se Sol(S) è sottospazio, allora b = 0",
                    content: `<p>Se $\\text{Sol}(S)$ è un sottospazio vettoriale, deve contenere il vettore nullo $\\vec{0}$. Sostituendo $\\vec{x} = \\vec{0}$ nel sistema:</p>
<p>$$A\\vec{0} = \\vec{b} \\quad \\Rightarrow \\quad \\vec{0} = \\vec{b}$$</p>
<p>Quindi $\\vec{b}$ deve essere nullo: il sistema è omogeneo.</p>`
                },
                {
                    subtitle: "Dimostrazione (⇐): se il sistema è omogeneo, Sol(S) è sottospazio",
                    content: `<p>Sia $U = \\text{Sol}(S)$ con $S: A\\vec{x} = \\vec{0}$. Verifichiamo le tre proprietà di sottospazio:</p>
<p><strong>1. Il vettore nullo appartiene a $U$:</strong> $A\\vec{0} = \\vec{0}$ ✓</p>
<p><strong>2. Chiusura rispetto alla somma:</strong> Se $\\vec{x}, \\vec{y} \\in U$, allora $A\\vec{x} = \\vec{0}$ e $A\\vec{y} = \\vec{0}$. Quindi:</p>
<p>$$A(\\vec{x} + \\vec{y}) = A\\vec{x} + A\\vec{y} = \\vec{0} + \\vec{0} = \\vec{0}$$</p>
<p>Quindi $\\vec{x} + \\vec{y} \\in U$ ✓</p>
<p><strong>3. Chiusura rispetto al prodotto per scalare:</strong> Se $\\vec{x} \\in U$ e $c \\in \\mathbb{R}$:</p>
<p>$$A(c\\vec{x}) = c(A\\vec{x}) = c \\cdot \\vec{0} = \\vec{0}$$</p>
<p>Quindi $c\\vec{x} \\in U$ ✓</p>
<p>Le tre proprietà sono soddisfatte, quindi $U$ è un sottospazio vettoriale di $\\mathbb{R}^n$.</p>`
                }
            ],
            formulas: [
                { label: "Sistema omogeneo", latex: "A\\vec{x} = \\vec{0}" },
                { label: "Condizione di sottospazio", latex: "\\text{Sol}(S) \\text{ è sottospazio} \\iff \\vec{b} = \\vec{0}" }
            ]
        },
        {
            id: "s19-rappresentazioni",
            type: "section",
            title: "Rappresentazione Cartesiana e Parametrica",
            icon: "🗺️",
            content: `<p>Ogni sottospazio vettoriale può essere descritto in due modi equivalenti: tramite <strong>equazioni</strong> (cartesiana) o tramite <strong>generatori</strong> (parametrica). Comprendere entrambe e saperle convertire l'una nell'altra è fondamentale.</p>`,
            subsections: [
                {
                    subtitle: "Rappresentazione Cartesiana",
                    content: `<p>Un sistema lineare omogeneo $S: A\\vec{x} = \\vec{0}$ si dice <strong>rappresentazione cartesiana</strong> di un sottospazio $U \\subseteq \\mathbb{R}^n$ se:</p>
<p>$$U = \\text{Sol}(S) = \\{ \\vec{x} \\in \\mathbb{R}^n \\mid A\\vec{x} = \\vec{0} \\}$$</p>
<p>In altre parole, il sottospazio è definito <em>implicitamente</em> come l'insieme dei vettori che soddisfano certe equazioni.</p>`
                },
                {
                    subtitle: "Rappresentazione Parametrica",
                    content: `<p>Sia $U$ un sottospazio di $\\mathbb{R}^n$ di dimensione $h$, con base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$. Una <strong>rappresentazione parametrica</strong> è l'applicazione:</p>
<p>$$\\rho(\\lambda_1, \\dots, \\lambda_h) = \\lambda_1 \\vec{u}_1 + \\lambda_2 \\vec{u}_2 + \\dots + \\lambda_h \\vec{u}_h$$</p>
<p>dove $\\lambda_1, \\dots, \\lambda_h \\in \\mathbb{R}$ sono parametri liberi. Questa mappa $\\rho: \\mathbb{R}^h \\to U$ è biiettiva e le sue componenti sono combinazioni lineari dei parametri senza termine costante (il che riflette il fatto che $U$ è un sottospazio e contiene l'origine).</p>
<p>Scritta per componenti, usando la notazione $(\\vec{u}_i)_j$ per la $j$-esima componente del vettore $\\vec{u}_i$:</p>
<p>$$\\begin{cases} x_1 = \\lambda_1 (\\vec{u}_1)_1 + \\lambda_2 (\\vec{u}_2)_1 + \\dots + \\lambda_h (\\vec{u}_h)_1 \\\\ x_2 = \\lambda_1 (\\vec{u}_1)_2 + \\lambda_2 (\\vec{u}_2)_2 + \\dots + \\lambda_h (\\vec{u}_h)_2 \\\\ \\vdots \\\\ x_n = \\lambda_1 (\\vec{u}_1)_n + \\lambda_2 (\\vec{u}_2)_n + \\dots + \\lambda_h (\\vec{u}_h)_n \\end{cases}$$</p>`
                }
            ],
            formulas: [
                { label: "Cartesiana", latex: "U = \\{ \\vec{x} \\in \\mathbb{R}^n \\mid A\\vec{x} = \\vec{0} \\}" },
                { label: "Parametrica", latex: "\\vec{x} = \\lambda_1 \\vec{u}_1 + \\lambda_2 \\vec{u}_2 + \\dots + \\lambda_h \\vec{u}_h" }
            ]
        },
        {
            id: "s19-dimensione-soluzioni",
            type: "section",
            title: "Dimensione dello Spazio delle Soluzioni",
            icon: "📐",
            content: `<p>La seguente proposizione collega il rango della matrice dei coefficienti alla dimensione del sottospazio delle soluzioni.</p>`,
            subsections: [
                {
                    subtitle: "Proposizione: dim(Sol(S)) = n − p",
                    content: `<p><strong>Enunciato:</strong> Sia $S: A\\vec{x} = \\vec{0}$ un sistema omogeneo con $n$ incognite e $p = \\text{rango}(A)$. Allora:</p>
<p>$$\\dim(\\text{Sol}(S)) = n - p$$</p>`
                },
                {
                    subtitle: "Dimostrazione",
                    content: `<p>Dall'algoritmo di risoluzione, le $p$ incognite principali vengono espresse in funzione delle $n - p$ incognite libere. La soluzione generale ha la forma:</p>
<p>$$\\vec{x} = t_1 \\vec{v}_1 + t_2 \\vec{v}_2 + \\dots + t_{n-p} \\vec{v}_{n-p}$$</p>
<p>dove $t_1, \\dots, t_{n-p}$ sono i parametri liberi e i vettori $\\vec{v}_1, \\dots, \\vec{v}_{n-p}$ si ottengono ponendo un parametro uguale a 1 e tutti gli altri a 0.</p>
<p><strong>Perché questi vettori sono linearmente indipendenti?</strong> Ciascun $\\vec{v}_k$ ha la componente corrispondente alla $k$-esima variabile libera uguale a 1, mentre tutti gli altri $\\vec{v}_j$ ($j \\neq k$) hanno quella componente uguale a 0. Quindi nessun $\\vec{v}_k$ può essere combinazione lineare degli altri: le righe corrispondenti alle variabili libere formano una sottomatrice identità.</p>
<p>Poiché i vettori sono $n - p$ e sono linearmente indipendenti, costituiscono una base di $\\text{Sol}(S)$, che ha quindi dimensione $n - p$.</p>`
                }
            ],
            formulas: [
                { label: "Dimensione delle soluzioni", latex: "\\dim(\\text{Sol}(S)) = n - p" },
                { label: "Rango + dimensione nucleo", latex: "p + \\dim(\\text{Sol}(S)) = n" }
            ]
        },
        {
            id: "s19-cartesiano-parametrico",
            type: "section",
            title: "Dal Cartesiano al Parametrico: Esempio",
            icon: "➡️",
            content: `<p>Risolvere un sistema omogeneo (rappresentazione cartesiana) significa esattamente trovare la rappresentazione parametrica del sottospazio delle soluzioni.</p>`,
            subsections: [
                {
                    subtitle: "Il sistema omogeneo",
                    content: `<p>Consideriamo il sistema omogeneo associato al sistema della prima sezione. La versione omogenea del sistema di 3 equazioni in 4 incognite è:</p>
<p>$$S_0: \\begin{cases} 2x + y + z + t = 0 \\\\ x - y - z + 3t = 0 \\\\ 3x + 4t = 0 \\end{cases}$$</p>
<p>La matrice dei coefficienti è la stessa $A$ di prima, quindi $\\text{rango}(A) = 2$ (come calcolato nella sezione precedente con il minore fondamentale e gli orlati).</p>`
                },
                {
                    subtitle: "Riduzione esplicita con eliminazione gaussiana",
                    content: `<p>Partiamo dalla matrice dei coefficienti e riduciamola:</p>
<p>$$\\begin{pmatrix} 2 & 1 & 1 & 1 \\\\ 1 & -1 & -1 & 3 \\\\ 3 & 0 & 0 & 4 \\end{pmatrix}$$</p>
<p><strong>Passo 1:</strong> Scambiamo $R_1 \\leftrightarrow R_2$ per avere il pivot 1 in posizione (1,1):</p>
<p>$$\\begin{pmatrix} 1 & -1 & -1 & 3 \\\\ 2 & 1 & 1 & 1 \\\\ 3 & 0 & 0 & 4 \\end{pmatrix}$$</p>
<p><strong>Passo 2:</strong> $R_2 \\leftarrow R_2 - 2R_1$ e $R_3 \\leftarrow R_3 - 3R_1$:</p>
<p>$$\\begin{pmatrix} 1 & -1 & -1 & 3 \\\\ 0 & 3 & 3 & -5 \\\\ 0 & 3 & 3 & -5 \\end{pmatrix}$$</p>
<p><strong>Passo 3:</strong> $R_3 \\leftarrow R_3 - R_2$:</p>
<p>$$\\begin{pmatrix} 1 & -1 & -1 & 3 \\\\ 0 & 3 & 3 & -5 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$</p>
<p>La terza riga è nulla, confermando $\\text{rango} = 2$. Dividiamo $R_2$ per 3:</p>
<p>$$\\begin{pmatrix} 1 & -1 & -1 & 3 \\\\ 0 & 1 & 1 & -5/3 \\end{pmatrix}$$</p>
<p>Il sistema ridotto equivalente è:</p>
<p>$$\\begin{cases} x - y - z + 3t = 0 \\\\ y + z - \\frac{5}{3}t = 0 \\end{cases}$$</p>`
                },
                {
                    subtitle: "Soluzione parametrica",
                    content: `<p>Le variabili pivot sono $x$ e $y$ (colonne 1 e 2). Le variabili libere sono $z$ e $t$. Dalla seconda equazione:</p>
<p>$$y = -z + \\frac{5}{3}t$$</p>
<p>Sostituendo nella prima equazione:</p>
<p>$$x - (-z + \\frac{5}{3}t) - z + 3t = 0 \\quad \\Rightarrow \\quad x + z - \\frac{5}{3}t - z + 3t = 0 \\quad \\Rightarrow \\quad x + \\frac{4}{3}t = 0$$</p>
<p>Quindi $x = -\\frac{4}{3}t$. La soluzione parametrica completa è:</p>
<p>$$\\begin{cases} x = -\\dfrac{4}{3}\\,t \\\\[6pt] y = -z + \\dfrac{5}{3}\\,t \\\\[6pt] z = z \\\\[6pt] t = t \\end{cases}$$</p>`
                },
                {
                    subtitle: "Base dello spazio delle soluzioni",
                    content: `<p>La dimensione è $n - p = 4 - 2 = 2$. Per trovare una base, assegniamo valori canonici ai parametri $(z, t)$:</p>
<p><strong>Ponendo $(z, t) = (1, 0)$:</strong></p>
<p>$$\\vec{u}_1 = (0,\\, -1,\\, 1,\\, 0)$$</p>
<p><strong>Ponendo $(z, t) = (0, 1)$:</strong></p>
<p>$$\\vec{u}_2 = (-4/3,\\, 5/3,\\, 0,\\, 1)$$</p>
<p>Una base dello spazio delle soluzioni è $\\{\\vec{u}_1, \\vec{u}_2\\}$, e ogni soluzione si scrive:</p>
<p>$$\\vec{x} = z\\,\\vec{u}_1 + t\\,\\vec{u}_2 = z \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\begin{pmatrix} -4/3 \\\\ 5/3 \\\\ 0 \\\\ 1 \\end{pmatrix}$$</p>`
                }
            ],
            formulas: [
                { label: "Base trovata", latex: "\\vec{u}_1 = (0, -1, 1, 0), \\quad \\vec{u}_2 = (-4/3,\\, 5/3,\\, 0,\\, 1)" }
            ]
        },
        {
            id: "s19-parametrico-cartesiano",
            type: "section",
            title: "Dal Parametrico al Cartesiano: Algoritmo ed Esempio",
            icon: "⬅️",
            content: `<p>Il problema inverso: data una base di un sottospazio (rappresentazione parametrica), trovare le equazioni che lo definiscono (rappresentazione cartesiana). Questo è il passaggio più tecnico.</p>`,
            subsections: [
                {
                    subtitle: "L'algoritmo in 6 passi",
                    content: `<p><strong>Passo 1:</strong> Si parte da una base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$ del sottospazio $U \\subseteq \\mathbb{R}^n$.</p>
<p><strong>Passo 2:</strong> Un generico vettore $\\vec{x} = (x_1, \\dots, x_n)$ appartiene a $U$ se e solo se $\\{\\vec{x}, \\vec{u}_1, \\dots, \\vec{u}_h\\}$ è un insieme linearmente <em>dipendente</em>.</p>
<p><strong>Passo 3:</strong> Si costruisce la matrice $M$ con colonne $\\vec{x}, \\vec{u}_1, \\dots, \\vec{u}_h$ (dimensione $n \\times (h+1)$).</p>
<p><strong>Passo 4:</strong> La condizione di dipendenza lineare è $\\text{rango}(M) = h$ (non $h+1$).</p>
<p><strong>Passo 5:</strong> Per il Teorema degli Orlati, si individua un minore fondamentale di ordine $h$ (formato dalle colonne della base, che sono linearmente indipendenti). Poi si calcolano tutti i minori di ordine $h+1$ che <em>orlano</em> questo minore (cioè lo estendono aggiungendo una riga e la colonna di $\\vec{x}$).</p>
<p><strong>Passo 6:</strong> Le equazioni $\\det(\\text{orlato}) = 0$ danno un sistema lineare omogeneo nelle componenti di $\\vec{x}$: la rappresentazione cartesiana di $U$.</p>`
                },
                {
                    subtitle: "Esempio concreto: dalla base alle equazioni",
                    content: `<p>Prendiamo la base trovata nella sezione precedente:</p>
<p>$$\\vec{u}_1 = (0, -1, 1, 0), \\quad \\vec{u}_2 = (-4/3, 5/3, 0, 1)$$</p>
<p>Vogliamo trovare le equazioni cartesiane del sottospazio $U = \\text{Span}(\\vec{u}_1, \\vec{u}_2) \\subseteq \\mathbb{R}^4$.</p>
<p><strong>Passo 3:</strong> Costruiamo la matrice $M$ con colonne $\\vec{x}, \\vec{u}_1, \\vec{u}_2$:</p>
<p>$$M = \\begin{pmatrix} x_1 & 0 & -4/3 \\\\ x_2 & -1 & 5/3 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 1 \\end{pmatrix}$$</p>
<p><strong>Passo 4:</strong> Serve $\\text{rango}(M) = 2$ (la dimensione del sottospazio).</p>
<p><strong>Passo 5:</strong> Il minore fondamentale di ordine 2 è formato dalle colonne di $\\vec{u}_1$ e $\\vec{u}_2$. Scegliamo le righe 3 e 4 (dove il minore è non nullo):</p>
<p>$$\\det \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1 \\neq 0 \\quad \\checkmark$$</p>
<p>Ora <strong>orliamo</strong> questo minore con ciascuna delle altre righe (righe 1 e 2) e la colonna di $\\vec{x}$.</p>
<p><strong>Orlato con riga 1:</strong></p>
<p>$$\\det \\begin{pmatrix} x_1 & 0 & -4/3 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 1 \\end{pmatrix} = x_1(1 \\cdot 1 - 0 \\cdot 0) - 0 + (-4/3)(x_3 \\cdot 0 - 1 \\cdot x_4) = x_1 + \\frac{4}{3}x_4 = 0$$</p>
<p><strong>Orlato con riga 2:</strong></p>
<p>$$\\det \\begin{pmatrix} x_2 & -1 & 5/3 \\\\ x_3 & 1 & 0 \\\\ x_4 & 0 & 1 \\end{pmatrix} = x_2(1-0) - (-1)(x_3 - 0) + \\frac{5}{3}(0 - x_4) = x_2 + x_3 - \\frac{5}{3}x_4 = 0$$</p>
<p><strong>Passo 6:</strong> La rappresentazione cartesiana è:</p>
<p>$$U: \\begin{cases} x_1 + \\dfrac{4}{3}x_4 = 0 \\\\[6pt] x_2 + x_3 - \\dfrac{5}{3}x_4 = 0 \\end{cases}$$</p>
<p>Sono $n - h = 4 - 2 = 2$ equazioni linearmente indipendenti, come previsto dal corollario.</p>`
                },
                {
                    subtitle: "Verifica",
                    content: `<p>Controlliamo che $\\vec{u}_1 = (0, -1, 1, 0)$ soddisfi entrambe le equazioni:</p>
<p>$$0 + \\frac{4}{3}(0) = 0 \\quad \\checkmark$$</p>
<p>$$-1 + 1 - \\frac{5}{3}(0) = 0 \\quad \\checkmark$$</p>
<p>Controlliamo $\\vec{u}_2 = (-4/3, 5/3, 0, 1)$:</p>
<p>$$-\\frac{4}{3} + \\frac{4}{3}(1) = 0 \\quad \\checkmark$$</p>
<p>$$\\frac{5}{3} + 0 - \\frac{5}{3}(1) = 0 \\quad \\checkmark$$</p>
<p>Tutto torna.</p>`
                }
            ],
            formulas: [
                { label: "Condizione di appartenenza", latex: "\\vec{x} \\in U \\iff \\text{rango}(\\vec{x} \\mid \\vec{u}_1 \\mid \\dots \\mid \\vec{u}_h) = h" },
                { label: "Numero equazioni cartesiane", latex: "\\text{n. equazioni indipendenti} = n - h" }
            ]
        },
        {
            id: "s19-corollario",
            type: "alert_box",
            title: "Corollario: quante equazioni servono?",
            icon: "⚠️",
            content: `<p><strong>Un sottospazio $U \\subseteq \\mathbb{R}^n$ di dimensione $h$ può essere descritto come l'insieme delle soluzioni di un sistema di esattamente $n - h$ equazioni linearmente indipendenti.</strong></p>
<p><strong>Perché proprio $n - h$?</strong> Il collegamento è diretto con la proposizione $\\dim(\\text{Sol}(S)) = n - p$: se il sottospazio ha dimensione $h$, il sistema cartesiano che lo definisce deve avere rango $p = n - h$, cioè $n - h$ equazioni indipendenti.</p>
<p>In altre parole, c'è una dualità perfetta:</p>`,
            table_compare: {
                headers: ["Rappresentazione", "Parametri/Equazioni", "Numero"],
                rows: [
                    ["Parametrica (generatori)", "Parametri liberi", "$h = \\dim(U)$"],
                    ["Cartesiana (equazioni)", "Equazioni indipendenti", "$n - h$"],
                    ["Somma", "Totale", "$n$"]
                ]
            }
        },
        {
            id: "s19-riepilogo-conversioni",
            type: "note_box",
            title: "Riepilogo: le due conversioni a confronto",
            icon: "🔄",
            content: `<p>Le due conversioni sono operazioni <strong>inverse</strong>:</p>`,
            table_compare: {
                headers: ["Conversione", "Input", "Metodo", "Output"],
                rows: [
                    ["Cartesiano → Parametrico", "Equazioni $A\\vec{x} = \\vec{0}$", "Risolvi il sistema (Gauss/Cramer)", "Base del sottospazio"],
                    ["Parametrico → Cartesiano", "Base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$", "Annulla gli orlati del minore fondamentale", "Equazioni del sottospazio"]
                ]
            }
        },
        {
            id: "s19-orale-tipico",
            type: "oral_box",
            title: "Domanda d'esame tipica",
            icon: "🎤",
            content: `<p><strong>"Le soluzioni di un sistema lineare formano sempre un sottospazio vettoriale?"</strong></p>
<p>Risposta: <strong>No!</strong> Solo se il sistema è omogeneo ($\\vec{b} = \\vec{0}$). Se $\\vec{b} \\neq \\vec{0}$, l'insieme delle soluzioni è uno spazio affine (traslazione di un sottospazio), ma non contiene il vettore nullo e quindi non è un sottospazio.</p>
<p>Il professore ama questa domanda perché testa se lo studente confonde "spazio affine" con "spazio vettoriale".</p>`
        }
    ],

    oral_cards: [
        {
            type: "domanda",
            front: "Come si applica la regola di Cramer a un sistema rettangolare compatibile?",
            back: "Si trova un minore fondamentale $M$ di ordine $p = \\text{rango}(A)$, si eliminano le $m - p$ equazioni sovrabbondanti, si trattano le $n - p$ incognite non-pivot come parametri liberi, e si risolve il sistema $p \\times p$ risultante con Cramer. Le soluzioni hanno $n - p$ gradi di libertà."
        },
        {
            type: "definizione",
            front: "Quando l'insieme delle soluzioni di un sistema lineare è un sottospazio vettoriale?",
            back: "Se e solo se il sistema è omogeneo ($\\vec{b} = \\vec{0}$). La dimostrazione del 'solo se' usa il fatto che un sottospazio deve contenere $\\vec{0}$; la dimostrazione del 'se' verifica le tre proprietà: $\\vec{0} \\in \\text{Sol}$, chiusura per somma, chiusura per prodotto scalare."
        },
        {
            type: "formula",
            front: "Qual è la dimensione dello spazio delle soluzioni di un sistema omogeneo $A\\vec{x} = \\vec{0}$ con $n$ incognite e $\\text{rango}(A) = p$?",
            back: "$\\dim(\\text{Sol}(S)) = n - p$. I vettori base si ottengono ponendo un parametro libero uguale a 1 e gli altri a 0; sono linearmente indipendenti perché nelle righe corrispondenti alle variabili libere formano una matrice identità."
        },
        {
            type: "definizione",
            front: "Cos'è una rappresentazione cartesiana di un sottospazio vettoriale?",
            back: "È un sistema lineare omogeneo $A\\vec{x} = \\vec{0}$ il cui insieme di soluzioni coincide esattamente con il sottospazio $U$: $U = \\{\\vec{x} \\in \\mathbb{R}^n \\mid A\\vec{x} = \\vec{0}\\}$."
        },
        {
            type: "definizione",
            front: "Cos'è una rappresentazione parametrica di un sottospazio vettoriale?",
            back: "Data una base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$ di $U$, è la mappa $\\rho(\\lambda_1, \\dots, \\lambda_h) = \\lambda_1 \\vec{u}_1 + \\dots + \\lambda_h \\vec{u}_h$. È biiettiva da $\\mathbb{R}^h$ a $U$, con componenti che sono combinazioni lineari dei parametri (senza termine costante, perché $U$ contiene l'origine)."
        },
        {
            type: "dimostrazione",
            front: "Come si passa dalla rappresentazione parametrica a quella cartesiana?",
            back: "Data la base $\\{\\vec{u}_1, \\dots, \\vec{u}_h\\}$, si costruisce la matrice $M = (\\vec{x} \\mid \\vec{u}_1 \\mid \\dots \\mid \\vec{u}_h)$. La condizione $\\vec{x} \\in U$ equivale a $\\text{rango}(M) = h$. Si trova un minore fondamentale di ordine $h$ nelle colonne della base, poi si impone che tutti gli orlati di ordine $h+1$ abbiano determinante nullo. Ciascun orlato dà un'equazione lineare omogenea nelle componenti di $\\vec{x}$."
        },
        {
            type: "tranello",
            front: "Quante equazioni linearmente indipendenti servono per descrivere un sottospazio di dimensione $h$ in $\\mathbb{R}^n$?",
            back: "Esattamente $n - h$. Errore comune: dire $h$. Il ragionamento: se $\\dim(U) = h$, il sistema cartesiano deve avere rango $p = n - h$ (dalla formula $\\dim = n - p$). Più dimensione ha il sottospazio, meno equazioni servono!"
        },
        {
            type: "domanda",
            front: "Cosa significa la notazione $\\infty^k$ per le soluzioni di un sistema lineare?",
            back: "Significa che lo spazio delle soluzioni ha dimensione $k$, cioè dipende da $k$ parametri liberi indipendenti. $\\infty^0$ = soluzione unica, $\\infty^1$ = retta, $\\infty^2$ = piano, ecc."
        },
        {
            type: "tranello",
            front: "Se un sistema non omogeneo $A\\vec{x} = \\vec{b}$ ha soluzioni, queste formano un sottospazio vettoriale?",
            back: "No! Se $\\vec{b} \\neq \\vec{0}$, le soluzioni formano uno spazio affine $\\vec{x}_0 + \\text{Sol}(A\\vec{x} = \\vec{0})$, dove $\\vec{x}_0$ è una soluzione particolare. Non contiene $\\vec{0}$ (a meno che $\\vec{x}_0$ sia soluzione del sistema omogeneo, il che richiederebbe $\\vec{b} = \\vec{0}$)."
        },
        {
            type: "domanda",
            front: "Nell'algoritmo per sistemi rettangolari, perché si possono eliminare le equazioni sovrabbondanti?",
            back: "Perché sono combinazioni lineari delle equazioni corrispondenti al minore fondamentale. Eliminarle non cambia l'insieme delle soluzioni: ogni vettore che soddisfa le equazioni essenziali soddisfa automaticamente anche quelle sovrabbondanti."
        }
    ]
};

