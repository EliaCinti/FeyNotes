const test = require('node:test');
const assert = require('node:assert/strict');
const { validateCategories } = require('../build.js');

test('flags a lesson whose category is missing from the course (the L25 Geometria bug)', () => {
  const fakeCourses = {
    geometria: {
      categories: [{ id: 'spazi-vettoriali' }, { id: 'matrici' }],
      lessons: [
        { id: 'L25', category: 'applicazioni-lineari' },
      ],
    },
  };
  const errors = validateCategories(fakeCourses);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /L25/);
  assert.match(errors[0], /applicazioni-lineari/);
});

test('flags nothing when every lesson category exists in the course', () => {
  const fakeCourses = {
    geometria: {
      categories: [{ id: 'spazi-vettoriali' }],
      lessons: [{ id: 'L01', category: 'spazi-vettoriali' }],
    },
  };
  assert.deepEqual(validateCategories(fakeCourses), []);
});

test('the real config (src/config.js) has no invalid categories', () => {
  assert.deepEqual(validateCategories(), []);
});
