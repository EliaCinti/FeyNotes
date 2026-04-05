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
  cssVersion: 10,
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
      { id: 'L13', num: 'Lezione 13', date: '5 Apr 2026', title: 'La Tensione e le Funi Ideali', abstract: 'Definizione di fune ideale e tensione come forza vincolare. Dimostrazione della costanza della tensione lungo una fune ideale. Applicazioni: due masse collegate, macchina di Atwood, massa sospesa a due funi. Forza centripeta e attrito statico in curva.', category: 'dinamica' },
    ],
  },

  // ─── Future courses — uncomment and fill when ready ───
  //
  // geometria: {
  //   id: 'geometria',
  //   theme: 'geometria',
  //   name: 'Geometria',
  //   icon: '△',
  //   basePath: '/geometria',
  //   indexUrl: '/geometria/',
  //   professor: 'Trusiani / Di Gennaro',
  //   university: 'Università di Roma Tor Vergata',
  //   year: 'A.A. 2025/2026',
  //   description: 'Appunti di Geometria per Ingegneria Informatica.',
  //   nav: [
  //     { label: 'Lezioni', href: '/geometria/', active: true },
  //   ],
  //   categories: [
  //     { id: 'algebra-lineare', label: 'algebra lineare', gridId: 'algebra-grid' },
  //     { id: 'geometria-analitica', label: 'geometria analitica', gridId: 'geometria-grid' },
  //   ],
  //   lessons: [],
  // },
  //
  // controlli: {
  //   id: 'controlli',
  //   theme: 'controlli',
  //   name: 'Fondamenti di Controlli',
  //   icon: '◎',
  //   basePath: '/controlli',
  //   indexUrl: '/controlli/',
  //   professor: 'Prof. ...',
  //   university: 'Università di Roma Tor Vergata',
  //   year: 'A.A. 2025/2026',
  //   description: 'Esercizi e appunti di Fondamenti di Controlli.',
  //   nav: [
  //     { label: 'Lezioni', href: '/controlli/', active: true },
  //     { label: 'Esercizi', href: '#' },
  //   ],
  //   categories: [
  //     { id: 'teoria', label: 'teoria', gridId: 'teoria-grid' },
  //     { id: 'esercizi', label: 'esercizi', gridId: 'esercizi-grid' },
  //   ],
  //   lessons: [],
  // },
};

module.exports = { SITE, COURSES };
