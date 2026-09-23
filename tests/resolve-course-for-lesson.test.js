const test = require('node:test');
const assert = require('node:assert/strict');
const { resolveCourseForLesson } = require('../build.js');

const COURSES = {
  fisica: { lessons: [{ id: 'L01' }] },
  analisi: { lessons: [{ id: 'L01' }] },
  geometria: { lessons: [{ id: 'L25' }] },
};

test('an explicit --course always wins, even over a matching id elsewhere', () => {
  const r = resolveCourseForLesson('L01', 'geometria', COURSES);
  assert.deepEqual(r, { ok: true, courseId: 'geometria' });
});

test('a unique lesson id resolves without --course', () => {
  const r = resolveCourseForLesson('L25', undefined, COURSES);
  assert.deepEqual(r, { ok: true, courseId: 'geometria' });
});

test('an id shared by several courses is ambiguous without --course', () => {
  // L01 exists in both fisica and analisi: silently picking the first course
  // in object-key order would rebuild the wrong page.
  const r = resolveCourseForLesson('L01', undefined, COURSES);
  assert.equal(r.ok, false);
  assert.equal(r.reason, 'ambiguous');
  assert.deepEqual(r.matches.sort(), ['analisi', 'fisica']);
});

test('an unknown id is reported as not found', () => {
  const r = resolveCourseForLesson('L99', undefined, COURSES);
  assert.deepEqual(r, { ok: false, reason: 'not-found', matches: [] });
});
