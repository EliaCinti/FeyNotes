/* ═══════════════════════════════════════════════════════════════
   LESSON RENDERER — Converts lesson data objects to HTML
   ═══════════════════════════════════════════════════════════════ */

let quizAnswered = {};
let quizScore = 0;

function renderLesson(lesson) {
  const main = document.getElementById('lesson-content');
  if (!main) return;

  // Reset quiz state
  quizAnswered = {};
  quizScore = 0;

  let html = '';

  // Header
  html += `<div class="lesson-header">
    <div class="lesson-num">${lesson.date}</div>
    <h1>${lesson.title}</h1>
    <p class="lesson-abstract">${lesson.abstract}</p>
  </div>`;

  // Sections
  for (const sec of lesson.sections) {
    html += renderSection(sec);
  }

  // ─── Ko-fi banner ───
  html += `<div style="text-align: center; margin: 3rem 0 1rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; background: var(--card-bg);">
    <p style="margin: 0 0 0.5rem; font-size: 0.95rem; color: var(--text-secondary);">Ti è stata utile questa lezione?</p>
    <a href="https://ko-fi.com/eliacinti" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; font-weight: 600; font-size: 1rem;">☕ Offrimi un caffè</a>
  </div>`;

  // ─── Flashcards ───
  if (lesson.oral_cards && lesson.oral_cards.length > 0) {
    html += `<div class="section-divider" id="oral-cards-section">🃏 Flashcard per l'Orale</div>`;
    html += `<div class="cards-grid">`;
    const badgeIcons = { definizione: '📖', domanda: '🎤', dimostrazione: '🧮', tranello: '⚠️' };
    for (const card of lesson.oral_cards) {
      html += `<div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <span class="card-badge ${card.type}">${badgeIcons[card.type] || '📖'} ${card.type}</span>
            <div class="card-text">${card.front}</div>
            <div class="card-hint">clicca per girare</div>
          </div>
          <div class="flashcard-back">
            <span class="card-badge risposta">✅ Risposta</span>
            <div class="card-text">${card.back}</div>
          </div>
        </div>
      </div>`;
    }
    html += `</div>`;
  }

  // ─── Quiz ───
  if (lesson.quiz && lesson.quiz.length > 0) {
    html += `<div class="section-divider" id="quiz-section">✅ Quiz di Autovalutazione</div>`;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    lesson.quiz.forEach((q, qi) => {
      html += `<div class="quiz-block" id="quiz-${qi}">
        <div class="qb-question">${qi + 1}. ${q.q}</div>
        <div class="quiz-options">`;
      q.options.forEach((opt, oi) => {
        html += `<div class="quiz-opt" data-qi="${qi}" data-oi="${oi}" onclick="handleQuiz(this, ${qi}, ${oi}, ${q.correct})">
          <span class="opt-letter">${letters[oi]}.</span>
          <span>${opt}</span>
        </div>`;
      });
      html += `</div>
        <div class="quiz-explanation" id="quiz-expl-${qi}">${q.explanation}</div>
      </div>`;
    });
    html += `<div class="quiz-score-bar">
      <span class="qs-text">Punteggio: <strong id="quiz-score">0</strong> / ${lesson.quiz.length}</span>
      <button class="quiz-reset-btn" onclick="resetQuiz()">Riprova</button>
    </div>`;
  }

  // Footer
  html += `<footer class="site-footer" style="margin-top: 60px;">
    Realizzato da <span class="footer-name">Elia Cinti</span> · <span class="footer-uni">Ingegneria Informatica — Università di Roma Tor Vergata</span> · A.A. 2025/2026
    <br>
    <a href="https://ko-fi.com/eliacinti" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; font-size: 0.85rem;">☕ Offrimi un caffè</a>
  </footer>`;

  main.innerHTML = html;

  // Render KaTeX
  renderAllKatex(main);

  // Init graphs (both formats)
  if (typeof initGraphs === 'function') initGraphs();

  // Init original-format graphs (type: "graph" with graphType)
  if (typeof initGraph === 'function') {
    for (const sec of lesson.sections) {
      if (sec.type === 'graph' && sec.graphType) {
        const sectionEl = main.querySelector('#' + sec.id);
        if (sectionEl) initGraph(sec);
      }
    }
  }

  // Draw placeholder on uninitialized canvases
  setTimeout(() => {
    main.querySelectorAll('.graph-container canvas').forEach(canvas => {
      const ctx = canvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const isEmpty = !imgData.data.some((v, i) => i % 4 !== 3 && v !== 0);
      if (isEmpty) {
        ctx.fillStyle = '#181b28';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#5f6580';
        ctx.font = '32px sans-serif';
        ctx.fillText('📊', canvas.width / 2, canvas.height / 2 - 16);
        ctx.font = '14px Outfit, sans-serif';
        ctx.fillText('Grafico interattivo — prossimamente', canvas.width / 2, canvas.height / 2 + 20);
      }
    });
  }, 200);

  // Handle missing videos/images
  main.querySelectorAll('.anim-container video').forEach(video => {
    video.addEventListener('error', () => showAnimPlaceholder(video), true);
    const source = video.querySelector('source');
    if (source) source.addEventListener('error', () => showAnimPlaceholder(video));
  });
  main.querySelectorAll('.anim-container img').forEach(img => {
    img.addEventListener('error', () => showAnimPlaceholder(img));
  });
}

function renderSection(sec) {
  let h = '';
  const id = sec.id || '';

  switch (sec.type) {
    case 'info_corso':
      h += `<div class="content-section" id="${id}">
        <h2><span class="sec-icon">${sec.icon || 'ℹ️'}</span>${sec.title}</h2>
        <table class="info-table">`;
      for (const row of sec.data.rows) {
        const cls = row.red ? 'red' : (row.hl ? 'hl' : '');
        h += `<tr class="${cls}"><td>${row.label}</td><td>${row.val}</td></tr>`;
      }
      h += `</table></div>`;
      break;

    case 'alert_box':
      h += `<div class="content-section" id="${id}">
        <div class="alert-box">
          <div class="ab-title">${sec.title}</div>
          ${sec.content}
        </div>
      </div>`;
      break;

    case 'note_box':
      h += `<div class="content-section" id="${id}">
        <div class="note-box">
          <h3>${sec.title}</h3>
          ${sec.content}
        </div>
      </div>`;
      break;

    case 'method_box':
      h += `<div class="content-section" id="${id}">
        <div class="method-box">
          <h3>${sec.title}</h3>`;
      if (sec.steps) {
        sec.steps.forEach((step, i) => {
          h += `<div class="step-item"><span class="step-num">${i + 1}</span><span class="step-text">${step}</span></div>`;
        });
      }
      if (sec.content) h += sec.content;
      h += `</div></div>`;
      break;

    case 'graph':
      h += `<div class="content-section" id="${id}">
        <h2><span class="sec-icon">📊</span>${sec.title || 'Visualizzazione'}</h2>
        <div class="graph-container">
          <canvas id="canvas-${id}" data-graph-type="${sec.graphType || ''}" width="700" height="400"></canvas>
          <div class="graph-controls" id="controls-${id}"></div>
          <div class="graph-caption">
            <span class="interactive-badge">Interattivo</span>
            ${sec.caption || ''}
          </div>
        </div>
      </div>`;
      break;

    default: // "section"
      h += `<div class="content-section" id="${id}">`;
      h += `<h2><span class="sec-icon">${sec.icon || '📌'}</span>${sec.title}</h2>`;

      if (sec.content) h += sec.content;

      // Steps
      if (sec.steps) {
        h += `<div class="steps-box"><div class="sb-title">Procedura</div>`;
        sec.steps.forEach((step, i) => {
          h += `<div class="step-item"><div class="step-num">${i + 1}</div><div class="step-text">${step}</div></div>`;
        });
        h += `</div>`;
      }

      // Formulas
      if (sec.formulas) {
        h += `<div class="formula-box"><div class="fb-title">Formule chiave</div>`;
        for (const f of sec.formulas) {
          h += `<div class="formula-item"><span class="formula-label">${f.label}</span><span class="formula-katex" data-katex="${escapeAttr(f.latex)}"></span></div>`;
        }
        h += `</div>`;
      }

      // Compare table
      if (sec.table_compare) {
        h += `<table class="compare-table"><thead><tr>`;
        for (const th of sec.table_compare.headers) {
          h += `<th>${th}</th>`;
        }
        h += `</tr></thead><tbody>`;
        for (const row of sec.table_compare.rows) {
          h += `<tr>`;
          for (const cell of row) {
            h += `<td>${cell}</td>`;
          }
          h += `</tr>`;
        }
        h += `</tbody></table>`;
      }

      // Extra content
      if (sec.extra_content) h += sec.extra_content;

      // Subsections
      if (sec.subsections) {
        for (const sub of sec.subsections) {
          h += `<h3>${sub.subtitle}</h3>`;
          if (sub.content) h += sub.content;
          if (sub.equations) {
            for (const eq of sub.equations) {
              h += `<div class="katex-display" data-katex-display="${escapeAttr(eq)}"></div>`;
            }
          }
        }
      }

      // Animation embed (Manim video)
      if (sec.animation) {
        h += renderAnimation(sec.animation);
      }

      // Interactive graph (Canvas)
      if (sec.graph) {
        h += `<div class="graph-container">
          <canvas id="${sec.graph.id}" width="${sec.graph.width || 700}" height="${sec.graph.height || 400}"></canvas>
          <div class="graph-controls" id="${sec.graph.id}-controls"></div>
          <div class="graph-caption">
            <span class="interactive-badge">Interattivo</span>
            ${sec.graph.caption || ''}
          </div>
        </div>`;
      }

      // Quote
      if (sec.quote) {
        h += `<div class="quote-box">
          <div class="q-text">${sec.quote.text}</div>
          <div class="q-src">${sec.quote.src}</div>
        </div>`;
      }

      h += `</div>`;
  }

  return h;
}

function renderAnimation(anim) {
  let media = '';
  if (anim.type === 'video') {
    media = `<video controls playsinline loop ${anim.autoplay ? 'autoplay muted' : ''}>
      <source src="${anim.src}" type="video/mp4">
    </video>`;
  } else {
    media = `<img src="${anim.src}" alt="${anim.caption || ''}">`;
  }

  return `<div class="anim-container">
    ${media}
    <div class="anim-caption">
      <span class="anim-badge">Manim</span>
      ${anim.caption || ''}
    </div>
  </div>`;
}

function showAnimPlaceholder(el) {
  const container = el.closest('.anim-container');
  if (!container || container.querySelector('.anim-placeholder')) return;
  el.style.display = 'none';
  const ph = document.createElement('div');
  ph.className = 'anim-placeholder';
  ph.innerHTML = '<div class="anim-ph-icon">🎬</div><div class="anim-ph-text">Animazione non ancora generata</div>';
  container.insertBefore(ph, container.firstChild);
}

/* ─── Quiz logic ─── */
function handleQuiz(el, qi, oi, correct) {
  if (quizAnswered[qi] !== undefined) return;
  quizAnswered[qi] = oi;

  const block = document.getElementById(`quiz-${qi}`);
  const opts = block.querySelectorAll('.quiz-opt');

  opts.forEach((o, idx) => {
    o.classList.add('disabled');
    if (idx === correct) o.classList.add('correct');
    if (idx === oi && oi !== correct) o.classList.add('wrong');
  });

  if (oi === correct) quizScore++;
  const scoreEl = document.getElementById('quiz-score');
  if (scoreEl) scoreEl.textContent = quizScore;

  const expl = document.getElementById(`quiz-expl-${qi}`);
  if (expl) expl.classList.add('show');

  // Re-render KaTeX in the explanation
  if (expl) renderAllKatex(expl);
}

function resetQuiz() {
  if (typeof LESSON !== 'undefined') {
    renderLesson(LESSON);
  }
}

/* ─── Build sidebar ─── */
function buildSidebar(lesson) {
  const sidebar = document.getElementById('lesson-sidebar-links');
  if (!sidebar) return;

  let html = '';
  for (const sec of lesson.sections) {
    if (sec.id) {
      html += `<a class="sidebar-link" href="#${sec.id}" onclick="scrollToSection('${sec.id}')">
        <span class="sl-icon">${sec.icon || '📌'}</span>
        <span>${stripHtml(sec.title)}</span>
      </a>`;
    }
  }

  // Flashcards link
  if (lesson.oral_cards && lesson.oral_cards.length > 0) {
    html += `<a class="sidebar-link" href="#oral-cards-section" onclick="scrollToSection('oral-cards-section')">
      <span class="sl-icon">🃏</span>
      <span>Flashcard</span>
    </a>`;
  }

  // Quiz link
  if (lesson.quiz && lesson.quiz.length > 0) {
    html += `<a class="sidebar-link" href="#quiz-section" onclick="scrollToSection('quiz-section')">
      <span class="sl-icon">✅</span>
      <span>Quiz</span>
    </a>`;
  }

  sidebar.innerHTML = html;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ─── Scroll spy ─── */
function initScrollSpy() {
  const content = document.querySelector('.lesson-content');
  if (!content) return;

  content.addEventListener('scroll', function () {
    const sections = this.querySelectorAll('.content-section, .section-divider');
    const links = document.querySelectorAll('.sidebar-link');
    let currentId = '';

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120) currentId = sec.id;
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  });
}

/* ─── KaTeX rendering ─── */
function renderAllKatex(container) {
  // Inline formulas in data-katex attributes
  container.querySelectorAll('[data-katex]').forEach(el => {
    try {
      katex.render(el.getAttribute('data-katex'), el, { throwOnError: false, displayMode: false });
    } catch (e) { el.textContent = el.getAttribute('data-katex'); }
  });

  // Display equations
  container.querySelectorAll('[data-katex-display]').forEach(el => {
    try {
      katex.render(el.getAttribute('data-katex-display'), el, { throwOnError: false, displayMode: true });
    } catch (e) { el.textContent = el.getAttribute('data-katex-display'); }
  });

  // Inline $...$ in text nodes — broad selector to catch everything
  const katexTargets = container.querySelectorAll(
    'p, td, th, li, h2, h3, h4, span, div.ab-title, .step-text, .q-text, ' +
    '.card-text, .qb-question, .quiz-explanation, .quiz-opt span, ' +
    '.note-box h3, .note-box p, .method-box h3, .method-box .step-text, ' +
    '.formula-label, .lesson-abstract, .info-table td'
  );
  katexTargets.forEach(el => {
    // Skip if already processed or contains katex elements
    if (el.querySelector('.katex') || el.querySelector('[data-katex]')) return;
    // Skip containers that have child elements with $ (we'll process children instead)
    // but DO process if this element's own text has $
    const html = el.innerHTML;
    if (!html || !html.includes('$')) return;

    // Display math $$...$$
    let processed = html.replace(/\$\$([^$]+?)\$\$/g, (_, tex) => {
      const span = document.createElement('span');
      try { katex.render(tex, span, { throwOnError: false, displayMode: true }); }
      catch (e) { span.textContent = tex; }
      return span.outerHTML;
    });

    // Inline math $...$ (but not $$)
    processed = processed.replace(/(?<!\$)\$(?!\$)([^$]+?)\$(?!\$)/g, (_, tex) => {
      const span = document.createElement('span');
      try { katex.render(tex, span, { throwOnError: false, displayMode: false }); }
      catch (e) { span.textContent = tex; }
      return span.outerHTML;
    });

    if (processed !== html) el.innerHTML = processed;
  });
}

/* ─── Utilities ─── */
function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function stripHtml(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').replace(/\$[^$]*\$/g, '');
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof LESSON !== 'undefined') {
    buildSidebar(LESSON);
    renderLesson(LESSON);
    initScrollSpy();
  }
});
