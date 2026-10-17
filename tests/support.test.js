const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const script = fs.readFileSync(require.resolve('../js/support.js'), 'utf8');
const key = 'feynotes-support-dismissed-at';
const now = 1800000000000;

function visit({ saved, blockLocal = false, blockSession = false, printing = false } = {}) {
  const values = new Map(saved === undefined ? [] : [[key, String(saved)]]);
  const classes = new Set();
  const controls = new Map();
  const events = new Map();
  const externalEvents = new Map();
  let timer;
  let appended = false;
  const dialog = {
    open: false,
    setAttribute() {},
    querySelector(selector) {
      if (!controls.has(selector)) controls.set(selector, { addEventListener: (_, fn) => { controls.get(selector).click = fn; } });
      return controls.get(selector);
    },
    addEventListener: (name, fn) => events.set(name, fn),
    showModal() { this.open = true; },
    close() { this.open = false; events.get('close')(); },
  };
  const storage = blocked => ({
    getItem(k) { if (blocked) throw Error('Storage disabled'); return values.get(k) ?? null; },
    setItem(k, v) { if (blocked) throw Error('Storage disabled'); values.set(k, v); },
  });
  const window = {
    localStorage: storage(blockLocal), sessionStorage: storage(blockSession),
    setTimeout(fn) { timer = fn; }, matchMedia: () => ({ matches: printing }),
    addEventListener: (name, fn) => externalEvents.set(name, fn),
  };
  const document = {
    readyState: 'complete', querySelectorAll: () => [], createElement: () => dialog,
    body: { append() { appended = true; }, classList: { add: c => classes.add(c), remove: c => classes.delete(c) } },
  };
  vm.runInNewContext(script, { window, document, HTMLDialogElement: function () {}, Date: { now: () => now } });
  timer?.();
  return { dialog, controls, events, externalEvents, classes, values, appended };
}

test('first direct visit shows the appeal; continue restores access and remembers dismissal', () => {
  const first = visit();
  assert.equal(first.dialog.open, true);
  assert.equal(first.classes.has('fn-support-open'), true);
  first.controls.get('.fn-support-continue').click();
  assert.equal(first.dialog.open, false);
  assert.equal(first.classes.size, 0);
  const next = visit({ saved: first.values.get(key) });
  assert.equal(next.appended, false);
});

test('a dismissal expires after 30 days; invalid saved values cannot hide the appeal forever', () => {
  for (const saved of [now - 30 * 86400000, now + 1, 'invalid']) assert.equal(visit({ saved }).dialog.open, true);
  assert.equal(visit({ saved: now - 29 * 86400000 }).dialog.open, false);
});

test('disabled local storage falls back to session storage; disabling both never blocks closing', () => {
  for (const blockSession of [false, true]) {
    const page = visit({ blockLocal: true, blockSession });
    assert.equal(page.dialog.open, true);
    page.controls.get('.fn-support-close').click();
    assert.equal(page.dialog.open, false);
    assert.equal(page.classes.size, 0);
    if (!blockSession) assert.equal(page.values.get(key), String(now));
  }
});

test('Escape remembers dismissal; visiting Ko-fi closes the appeal without claiming payment', () => {
  const escape = visit();
  escape.events.get('cancel')(); // The browser then closes a native dialog.
  assert.equal(escape.values.get(key), String(now));
  const donate = visit();
  donate.controls.get('[data-donate]').click();
  assert.equal(donate.dialog.open, false);
  assert.deepEqual([...donate.values.keys()], [key]);
});

test('printing cannot leave the dialog open or the document locked', () => {
  assert.equal(visit({ printing: true }).dialog.open, false);
  const page = visit();
  page.externalEvents.get('beforeprint')();
  assert.equal(page.dialog.open, false);
  assert.equal(page.classes.size, 0);
});
