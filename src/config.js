/* ═══════════════════════════════════════════════════════════════
   FEYNOTES — Course Configuration
   Single source of truth for all courses and lesson metadata.
   Add a course here + its theme in base.css → everything else
   is generated automatically by build.js.
   ═══════════════════════════════════════════════════════════════ */

const SITE = {
  url: 'https://eliacinti.dev',
  title: 'FeyNotes',
  author: 'Elia Cinti',
  description: 'Appunti di Ingegneria Informatica — Tor Vergata',
  cssVersion: 12,
};

const COURSES = {
  fisica: {
    id: 'fisica',
    theme: 'fisica',
    name: 'Fisica 1',
    icon: '⚛️',
    basePath: '/fisica1',
    indexUrl: '/fisica1/',
    professor: 'Prof. Mercuri',
    university: 'Università di Roma Tor Vergata',
    year: 'A.A. 2025/2026',
    lessonLabel: 'Lezione',
    description: 'Guida allo studio con lezioni, formule, animazioni interattive e visualizzazioni Manim per capire la fisica davvero.',
    nav: [
      { label: 'Lezioni', href: '/fisica1/', active: true },
      { label: 'Formulario', href: '#' },
      { label: 'Esercizi', href: '#' },
    ],
    categories: [
      { id: 'cinematica', label: 'cinematica', gridId: 'cinematica-grid' },
      { id: 'dinamica', label: 'dinamica', gridId: 'dinamica-grid' },
      { id: 'termodinamica', label: 'termodinamica', gridId: 'termo-grid' },
    ],
    lessons: [
      { id: 'L01', num: 'Lezione 1', date: '11 Mar 2026', title: 'Introduzione, Metodo Scientifico e Prime Grandezze Cinematiche', abstract: 'Metodo galileiano, grandezze scalari vs vettoriali, posizione, spostamento, velocità media.', category: 'cinematica' },
      { id: 'L02', num: 'Lezione 2', date: '4 Mar 2026', title: 'Vettore Posizione, Coseni Direttori e Velocità', abstract: 'Coseni direttori, versori fondamentali, somma vettoriale, velocità istantanea come derivata.', category: 'cinematica' },
      { id: 'L03', num: 'Lezione 3', date: '5 Mar 2026', title: 'Velocità Istantanea, Accelerazione e Moto Rettilineo', abstract: 'Tangenza della velocità, accelerazione, decomposizione intrinseca, moto rettilineo uniforme.', category: 'cinematica' },
      { id: 'L04', num: 'Lezione 4', date: '9 Mar 2026', title: 'Moto Uniformemente Accelerato e Caduta Libera', abstract: 'Equazioni del moto UA, caduta libera, composizione dei moti, moto del proiettile.', category: 'cinematica' },
      { id: 'L05', num: 'Lezione 5', date: '11 Mar 2026', title: 'Moto Circolare Uniforme e Moto Circolare Uniformemente Accelerato', abstract: 'MCU, MCUA, velocità angolare, accelerazione centripeta, relazione grandezze lineari-angolari.', category: 'cinematica' },
      { id: 'L06', num: 'Lezione 6', date: '12 Mar 2026', title: 'Fondamenti di Cinematica del Moto Circolare', abstract: 'Descrizione angolare del moto, leggi orarie MCU e MCUA, periodo e frequenza, trattazione vettoriale con prodotto vettoriale, esercizi svolti.', category: 'cinematica' },
      { id: 'L07', num: 'Lezione 7', date: '16 Mar 2026', title: 'Introduzione alla Dinamica: Le Leggi di Newton, Quantita di Moto e Impulso', abstract: 'Dalla cinematica alla dinamica. Prima e Seconda Legge di Newton. Massa inerziale. Quantita di moto, teorema dell\'impulso, forze impulsive e forza media.', category: 'dinamica' },
      { id: 'L08', num: 'Lezione 8', date: '18 Mar 2026', title: 'Terzo Principio, Risoluzione Vettoriale delle Forze e Forza Peso', abstract: 'Terzo principio (azione-reazione). Equilibrio statico 2D con scomposizione vettoriale. Corpi a contatto. Forza peso e reazione normale.', category: 'dinamica' },
      { id: 'L09', num: 'Lezione 9', date: '19 Mar 2026', title: 'Esercizi, Vincoli, Reazione Normale e Attrito', abstract: 'Esercizi su MCUA e teorema dell\'impulso (pallina da tennis contro muro). Vincoli e forze vincolari. Reazione normale. Attrito statico e dinamico.', category: 'dinamica' },
      { id: 'L10', num: 'Lezione 10', date: '25 Mar 2026', title: 'Dinamica: Forze di Contatto, Attrito e Reazioni Vincolari', abstract: 'RN ≠ mg: problema dell\'ascensore (5 casi). Piano inclinato con e senza attrito. Esercizio fondamentale: cassa tirata con fune inclinata.', category: 'dinamica' },
      { id: 'L11', num: 'Lezione 11', date: '27 Mar 2026', title: 'La Forza Elastica e il Moto Armonico Semplice', abstract: 'Il modello della molla ideale. Vettore deformazione e Legge di Hooke. Sistema massa-molla in 1D. Derivazione dell\'equazione del moto armonico. Pulsazione, periodo e frequenza.', category: 'dinamica' },
      { id: 'L12', num: 'Lezione 12', date: '1 Apr 2026', title: 'Moto Armonico Semplice: Soluzione, Sistemi di Molle e Attrito Viscoso', abstract: 'Soluzione dell\'equazione del moto armonico. Determinazione di ampiezza e fase iniziale. Molle in parallelo e in serie. Attrito viscoso lineare: velocità limite e soluzione analitica.', category: 'dinamica' },
      { id: 'L13', num: 'Lezione 13', date: '2 Apr 2026', title: 'La Tensione e le Funi Ideali', abstract: 'Definizione di fune ideale e tensione come forza vincolare. Proprietà della tensione costante lungo una fune priva di massa. Applicazioni classiche: masse collegate su piano orizzontale, macchina di Atwood, massa sospesa a due funi. Forza centripeta e attrito statico nell\'automobile in curva.', category: 'dinamica' },
      { id: 'L14', num: 'Lezione 14', date: '8 Apr 2026', title: 'Lavoro, Energia Cinetica e Forze Conservative', abstract: 'Dai limiti dell\'approccio vettoriale alla definizione di lavoro come prodotto scalare forza-spostamento. Dimostrazione del teorema dell\'energia cinetica. Confronto con il teorema dell\'impulso. Energia potenziale gravitazionale ed elastica. Classificazione delle forze in conservative e dissipative.', category: 'dinamica' },
      { id: 'L15', num: 'Lezione 15', date: '2026-04-10', title: 'Lavoro, Energia e Forze Conservative', abstract: 'Applicazione del teorema dell\'energia cinetica a problemi meccanici. Forze conservative, energia potenziale gravitazionale ed elastica, conservazione dell\'energia meccanica. Effetto delle forze non conservative e concetto di potenza.', category: 'dinamica' },
    ],
  },

  // ─── Future courses — uncomment and fill when ready ───
  // ─── Future courses — uncomment and fill when ready ───

  geometria: {
    id: 'geometria',
    theme: 'geometria',
    name: 'Geometria',
    icon: '△',
    basePath: '/geometria',
    indexUrl: '/geometria/',
    professor: 'Trusiani / Di Gennaro',
    university: 'Università di Roma Tor Vergata',
    year: 'A.A. 2025/2026',
    lessonLabel: 'Lezione',
    description: 'Appunti di Geometria per Ingegneria Informatica. Spazi vettoriali, matrici, sistemi lineari, applicazioni lineari, forme quadratiche e geometria analitica.',
    nav: [
      { label: 'Lezioni', href: '/geometria/', active: true },
    ],
    categories: [
      { id: 'spazi-vettoriali', label: 'spazi vettoriali', gridId: 'spazi-grid' },
      { id: 'matrici', label: 'matrici', gridId: 'matrici-grid' },
      { id: 'sistemi-lineari', label: 'sistemi lineari', gridId: 'sistemi-grid' },
      { id: 'applicazioni-lineari', label: 'applicazioni lineari', gridId: 'applicazioni-grid' },
      { id: 'forme-quadratiche', label: 'forme quadratiche', gridId: 'forme-grid' },
      { id: 'geometria-analitica', label: 'geometria analitica', gridId: 'geoanalitica-grid' },
    ],
    lessons: [
      { id: 'L01', num: 'Lezione 1', date: '2 Mar 2026', title: 'Spazi Vettoriali', abstract: 'Definizione rigorosa di spazio vettoriale, gli 8 assiomi fondamentali, le 7 proprietà di calcolo con relative dimostrazioni, e i primi esempi costruttivi.', category: 'spazi-vettoriali' },
      { id: 'L02', num: 'Lezione 2', date: '3 Mar 2026', title: 'Ulteriori Esempi di Spazi Vettoriali', abstract: 'Dai calcoli espliciti in ℝ² alla generalizzazione in ℝⁿ, passando per lo spazio delle matrici M(m,n), lo spazio dei polinomi ℝ[t] e i vettori geometrici: una panoramica completa sugli spazi vettoriali fondamentali.', category: 'spazi-vettoriali' },
      { id: 'L03', num: 'Lezione 3', date: '5 Mar 2026', title: 'Sottospazi Vettoriali e Vettori Geometrici', abstract: 'Dai vettori geometrici alla teoria dei sottospazi vettoriali: definizioni, caratterizzazioni, verifiche complete con esempi in ℝ², ℝ³ e ℝ[t]. Combinazioni lineari e Span.', category: 'spazi-vettoriali' },
      { id: 'L04', num: 'Lezione 4', date: '9 Mar 2026', title: 'Sottospazio Generato, Proprietà dello Span e Spazi Finitamente Generabili', abstract: 'Definizione formale di span (sottospazio generato), esempi di calcolo, le 6 proprietà fondamentali con dimostrazioni, sistemi di generatori, spazi finitamente generabili e il caso critico di ℝ[t].', category: 'spazi-vettoriali' },
      { id: 'L05', num: 'Lezione 5', date: '10 Mar 2026', title: 'Spazi Geometrici Finitamente Generabili e Indipendenza Lineare', abstract: 'Dimostrazione grafica che gli spazi vettoriali geometrici (1D, 2D, 3D) sono finitamente generabili. Metodo algebrico per trovare generatori di sottospazi definiti da equazioni. Definizione rigorosa di indipendenza e dipendenza lineare, con catalogo completo delle proprietà e caratterizzazione fondamentale.', category: 'spazi-vettoriali' },
      { id: 'L06', num: 'Lezione 6', date: '12 Mar 2026', title: 'Proprietà dei Sistemi Liberi e Legati', abstract: 'Proprietà fondamentali dei sistemi di vettori liberi e legati: caratterizzazione tramite dipendenza lineare, vettori sovrabbondanti, unicità delle coordinate, e l\'algoritmo di scarto per estrarre generatori indipendenti.', category: 'spazi-vettoriali' },
      { id: 'L07', num: 'Lezione 7', date: '16 Mar 2026', title: 'Basi, Lemma di Steinitz e Dimensione', abstract: 'Definizione rigorosa di base di uno spazio vettoriale, dimostrazione del Lemma di Steinitz (sostitutivo) per assurdo, e introduzione del concetto di dimensione con le sue proprietà equivalenti.', category: 'spazi-vettoriali' },
      { id: 'L08', num: 'Lezione 8', date: '17 Mar 2026', title: 'Basi, Dimensione e Formula di Grassmann', abstract: 'Definizione di dimensione di uno spazio vettoriale, le 8 proprietà fondamentali di basi e dimensione, intersezione e somma di sottospazi, e dimostrazione completa della Formula di Grassmann.', category: 'spazi-vettoriali' },
      { id: 'L09', num: 'Lezione 9', date: '19 Mar 2026', title: 'Esercizi su Grassmann, Somma Diretta e Inizio Matrici', abstract: 'Applicazione pratica della Formula di Grassmann per calcolare basi e dimensioni di somma e intersezione di sottospazi. Definizione e caratterizzazioni equivalenti della somma diretta. Introduzione al capitolo delle matrici: notazioni, trasposta, traccia e famiglie notevoli.', category: 'spazi-vettoriali' },
      { id: 'L10', num: 'Lezione 10', date: '24 Mar 2026', title: 'Operazioni tra Matrici, Invertibilità e Trasposizione', abstract: 'Prodotto riga per colonna, algebra delle matrici quadrate, matrici invertibili con formula per il caso 2×2, e matrice trasposta con tutte le proprietà.', category: 'matrici' },
      { id: 'L11', num: 'Lezione 11', date: '26 Mar 2026', title: 'Rango, Sottomatrici e Operazioni Elementari', abstract: 'Spazio delle righe e delle colonne di una matrice, Teorema del Rango con dimostrazione completa, sottomatrici e disuguaglianza sul rango, operazioni elementari sulle righe, matrici elementari e loro invertibilità, equivalenza per righe come relazione di equivalenza.', category: 'matrici' },
      { id: 'L12', num: 'Lezione 12', date: '30 Mar 2026', title: 'Matrici Equivalenti per Righe, Matrice a Scala e Algoritmo di Gauss', abstract: 'Equivalenza per righe e conservazione dello spazio delle righe. Definizione di matrice a scala e pivot. L\'algoritmo di Gauss per la riduzione a scala. Calcolo del rango, basi di sottospazi, verifica di appartenenza allo span, complementi in somma diretta e discussione del rango con parametri.', category: 'matrici' },
      { id: 'L13', num: 'Lezione 13', date: '31 Mar 2026', title: 'Rango di Matrici e Introduzione al Determinante', abstract: 'Proprietà fondamentali del rango (effetto del prodotto e dell\'invertibilità), definizione del determinante tramite sviluppo di Laplace, esempi di calcolo su matrici 3×3, e metodo di Gauss per il determinante.', category: 'matrici' },
      { id: 'L14', num: 'Lezione 14', date: '2 Apr 2026', title: 'Proprietà del Determinante, Teorema di Binet e Matrice Inversa', abstract: 'Completiamo le proprietà del determinante, dimostriamo il legame tra rango e determinante, enunciamo il Teorema Fondamentale dell\'Invertibilità, il Teorema di Binet e ricaviamo la formula esplicita per la matrice inversa tramite l\'aggiunta classica.', category: 'matrici' },
    ],
  },
  controlli: {
    id: 'controlli',
    theme: 'controlli',
    name: 'Fondamenti di Controlli',
    icon: '◎',
    basePath: '/controlli',
    indexUrl: '/controlli/',
    professor: '',
    university: 'Università di Roma Tor Vergata',
    year: 'A.A. 2025/2026',
    lessonLabel: 'Guida',
    description: 'Guide risolutive per gli esercizi di Fondamenti di Controlli, organizzate per blocchi tematici.',
    nav: [
      { label: 'Guide', href: '/controlli/', active: true },
    ],
    categories: [
      { id: 'blocco-1', label: 'blocco 1 — equilibrio e linearizzazione', gridId: 'blocco1-grid' },
      { id: 'blocco-2', label: 'blocco 2 — sistemi meccanici', gridId: 'blocco2-grid' },
      { id: 'blocco-4', label: 'blocco 4 — dalla soluzione al sistema', gridId: 'blocco4-grid' },
      { id: 'blocco-5', label: 'blocco 5 — fratti semplici', gridId: 'blocco5-grid' },
      { id: 'blocco-6', label: 'blocco 6', gridId: 'blocco6-grid' },
      { id: 'blocco-7', label: 'blocco 7', gridId: 'blocco7-grid' },
      { id: 'blocco-8', label: 'blocco 8', gridId: 'blocco8-grid' },
      { id: 'blocco-9', label: 'blocco 9', gridId: 'blocco9-grid' },
      { id: 'blocco-10', label: 'blocco 10', gridId: 'blocco10-grid' },
    ],
    lessons: [
      { id: 'L01', num: 'Guida 1', date: '6 Apr 2026', title: 'Equilibrio e Linearizzazione', abstract: 'Come partire da un sistema fisico non lineare, trovare il punto di equilibrio e costruire le matrici numeriche A, B, C, D attraverso la linearizzazione.', category: 'blocco-1' },
      { id: 'L02', num: 'Guida 2', date: '6 Apr 2026', title: 'Modellazione di Sistemi Meccanici', abstract: 'Guida risolutiva completa: dal disegno meccanico (masse, molle, smorzatori) alle equazioni dell\'energia, fino alle matrici di stato A, B, C, D. Procedimento step-by-step per esercizi Moodle e primo esonero.', category: 'blocco-2' },
      { id: 'L03', num: 'Guida 3', date: '6 Apr 2026', title: 'Dalla Soluzione al Sistema (Blocco 4)', abstract: 'Dato y(t) con costanti arbitrarie, ricostruire l\'equazione differenziale (o alle differenze) originale del sistema usando l\'operatore Δ. Procedura in 4 step: individuare i poli nascosti, costruire il polinomio caratteristico, calcolare la forzante e scrivere l\'equazione finale.', category: 'blocco-4' },
      { id: 'L04', num: 'Guida 4', date: '6 Apr 2026', title: 'Decomposizione in Fratti Semplici', abstract: 'Come spezzare una frazione', category: 'blocco-5' },
    ],
  },
};

module.exports = { SITE, COURSES };
