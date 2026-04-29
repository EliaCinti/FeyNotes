(function() {
  // Applica il tema PRIMA del rendering per evitare flash
  var saved = localStorage.getItem('feynotes-theme') || 'dark';
  document.documentElement.setAttribute('data-mode', saved);
})();

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-mode') || 'dark';
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-mode', next);
  localStorage.setItem('feynotes-theme', next);
  updateToggleIcon();
}

function updateToggleIcon() {
  var mode = document.documentElement.getAttribute('data-mode') || 'dark';
  var btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.textContent = mode === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
    btn.title = mode === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro';
  }
}

document.addEventListener('DOMContentLoaded', updateToggleIcon);
