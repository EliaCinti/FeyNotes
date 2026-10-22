const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync(require.resolve('../js/renderer.js'), 'utf8');
function renderer() {
  const sidebar = { innerHTML: '' };
  const context = vm.createContext({ document: {
    addEventListener() {}, getElementById: () => sidebar,
  } });
  vm.runInContext(source, context);
  return { context, sidebar };
}
const figure = {id:'diagram', type:'section', title:'', icon:'',
  content:'<figure class="figura"><svg></svg><figcaption><strong>Peso e normale</strong><span class="figure-explanation">La normale bilancia il peso quando l’accelerazione verticale è nulla.</span></figcaption></figure>'};

test('standalone figures have no empty heading or pin and keep the visible explanation', () => {
  const {context} = renderer();
  const result = context.renderSection(figure);
  assert.equal(result.includes('<h2'), false);
  assert.equal(result.includes('📌'), false);
  assert.ok(result.includes('id="diagram"'));
  assert.ok(result.includes(figure.content));
});

test('the sidebar keeps the topic and omits the standalone figure entry', () => {
  const {context, sidebar} = renderer();
  context.buildSidebar({sections:[{id:'theory',type:'section',title:'Ascensore',icon:'🛗',content:'Teoria'},figure]});
  assert.ok(sidebar.innerHTML.includes('#theory'));
  assert.equal(sidebar.innerHTML.includes('#diagram'), false);
});

test('a titled teaching section containing a figure keeps its normal heading', () => {
  const {context} = renderer();
  const result = context.renderSection({...figure,title:'Il problema dell’ascensore',icon:'🛗'});
  assert.ok(result.includes('<h2>'));
  assert.ok(result.includes('Il problema dell’ascensore'));
});
