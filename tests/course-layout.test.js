const test = require('node:test');
const assert = require('node:assert/strict');
const { ordinaCategorie } = require('../build.js');

// Analisi 1 had its categories written backwards in config.js: L01 ended up at the
// bottom of the course page, under five empty "Prossimamente" cards.
test('sections follow their first lesson, not the config order (the Analisi 1 bug)', () => {
  const course = {
    categories: [
      { id: 'equazioni-differenziali', label: 'equazioni differenziali' },
      { id: 'limiti', label: 'limiti' },
      { id: 'funzioni', label: 'funzioni' },
      { id: 'numeri-reali', label: 'numeri reali' },
    ],
    lessons: [
      { id: 'L01', num: 'Lezione 1', category: 'numeri-reali' },
      { id: 'L02', num: 'Lezione 2', category: 'numeri-reali' },
      { id: 'L05', num: 'Lezione 5', category: 'funzioni' },
    ],
  };
  const { piene, vuote } = ordinaCategorie(course);
  assert.deepEqual(piene.map(p => p.cat.id), ['numeri-reali', 'funzioni']);
  assert.deepEqual(vuote.map(c => c.id), ['equazioni-differenziali', 'limiti']);
});

test('lessons go by teaching number, not by id or config order', () => {
  // Fisica 1: "Lezione 22" is L27, and the id would put it after L21 by luck only
  const course = {
    categories: [{ id: 'dinamica', label: 'dinamica' }],
    lessons: [
      { id: 'L28', num: 'Lezione 23', category: 'dinamica' },
      { id: 'L21', num: 'Lezione 21', category: 'dinamica' },
      { id: 'L27', num: 'Lezione 22', category: 'dinamica' },
    ],
  };
  const [{ lessons }] = ordinaCategorie(course).piene;
  assert.deepEqual(lessons.map(l => l.id), ['L21', 'L27', 'L28']);
});

test('a course already in order stays as it is', () => {
  const course = {
    categories: [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }, { id: 'c', label: 'c' }],
    lessons: [
      { id: 'L01', num: 'Guida 1', category: 'a' },
      { id: 'L02', num: 'Guida 2', category: 'b' },
    ],
  };
  const { piene, vuote } = ordinaCategorie(course);
  assert.deepEqual(piene.map(p => p.cat.id), ['a', 'b']);
  assert.deepEqual(vuote.map(c => c.id), ['c']);
});
