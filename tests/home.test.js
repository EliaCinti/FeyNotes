const test = require('node:test');
const assert = require('node:assert/strict');
const { renderHomeCourses, themeOf } = require('../build.js');

const corso = (id, anno, semestre, extra = {}) => ({
  id, name: id.toUpperCase(), indexUrl: `/${id}/`, anno, semestre, lessons: [], ...extra,
});

test('home: per anno e poi per semestre, in ordine (26 Set 2026)', () => {
  const html = renderHomeCourses({
    fisica2: corso('fisica2', 2, 1),
    fisica: corso('fisica', 1, 2),
    analisi: corso('analisi', 1, 1),
  });
  const pos = id => html.indexOf(`data-course="${id}"`);
  assert.ok(pos('analisi') < pos('fisica'), '1° anno 1° semestre prima del 2°');
  assert.ok(pos('fisica') < pos('fisica2'), 'il 1° anno prima del 2°');
  assert.match(html, /<div class="fn-anno" data-theme="anno1">[\s\S]*1° semestre[\s\S]*2° semestre/);
  assert.match(html, /<div class="fn-anno" data-theme="anno2">/);
});

test('home: un corso senza anno non compare (il precorso)', () => {
  const html = renderHomeCourses({ precorso: corso('precorso', undefined, undefined), analisi: corso('analisi', 1, 1) });
  assert.ok(!html.includes('precorso'));
});

test('home: ogni scheda si chiude e il contatore e\' giusto', () => {
  const html = renderHomeCourses({ a: corso('a', 1, 1, { lessons: [{}] }), b: corso('b', 1, 1, { lessons: [{}, {}], lessonLabel: 'Guida' }) });
  assert.equal((html.match(/<a /g) || []).length, (html.match(/<\/a>/g) || []).length);
  assert.match(html, /1 lezione/);
  assert.match(html, /2 guide/);
});

test('il colore di un corso viene dal suo anno', () => {
  assert.equal(themeOf({ anno: 3, theme: 'controlli' }), 'anno3');
  assert.equal(themeOf({ theme: 'analisi' }), 'analisi');
});

test('la config vera: ogni corso in home ha anno e semestre sensati', () => {
  const { COURSES } = require('../src/config');
  for (const c of Object.values(COURSES).filter(c => c.anno)) {
    assert.ok([1, 2, 3].includes(c.anno), c.id);
    assert.ok([1, 2].includes(c.semestre), c.id);
    assert.equal(c.theme, `anno${c.anno}`, `${c.id}: il tema deve essere quello dell'anno`);
  }
});
