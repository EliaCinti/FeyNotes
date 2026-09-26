#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   FEYNOTES — Build Script v3
   Generates everything from templates + config:
     - Lesson pages     (fisica1/lezioni/L01/index.html)
     - Course indexes   (fisica1/index.html)
     - Homepage counts  (index.html)
     - Sitemap          (sitemap.xml)

   Usage:
     node build.js                  Build all
     node build.js --course fisica  Build one course
     node build.js --lesson L01     Build one lesson
     node build.js --sitemap        Regenerate sitemap only
   ═══════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const { SITE, COURSES } = require('./src/config');

// ─── Paths ───
const ROOT = __dirname;
const TEMPLATE_DIR = path.join(ROOT, 'src', 'templates');
const DATA_DIR = path.join(ROOT, 'src', 'data');

// ─── CLI Args ───
const args = process.argv.slice(2);
const flags = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    flags[args[i].slice(2)] = args[i + 1] || true;
    i++;
  }
}

// ═══════════════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════════════

function render(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return vars[key] !== undefined ? vars[key] : match;
  });
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function lessonUrl(course, lessonId) {
  return `${course.basePath}/lezioni/${lessonId}/`;
}

function lessonOutputPath(course, lessonId) {
  return path.join(ROOT, course.basePath.slice(1), 'lezioni', lessonId, 'index.html');
}

function formatDateISO(dateStr) {
  const months = {
    'Gen': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
    'Mag': '05', 'Giu': '06', 'Lug': '07', 'Ago': '08',
    'Set': '09', 'Ott': '10', 'Nov': '11', 'Dic': '12',
  };
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = months[parts[1]] || '01';
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return new Date().toISOString().split('T')[0];
}

// ═══════════════════════════════════════════════════════════════
//  NAV HELPERS
// ═══════════════════════════════════════════════════════════════

function buildNavLinks(course) {
  return course.nav.map(n => {
    const cls = n.active ? ' class="active"' : '';
    return `<a href="${n.href}"${cls}>${n.label}</a>`;
  }).join('\n    ');
}

function buildPrevLink(course, lessonIndex) {
  if (lessonIndex === 0) {
    return '<a href="#" style="opacity:0.3">← Prec.</a>';
  }
  const prev = course.lessons[lessonIndex - 1];
  return `<a href="${lessonUrl(course, prev.id)}">← Prec.</a>`;
}

function buildNextLink(course, lessonIndex) {
  if (lessonIndex === course.lessons.length - 1) {
    return '<a href="#" style="opacity:0.3">Succ. →</a>';
  }
  const next = course.lessons[lessonIndex + 1];
  return `<a href="${lessonUrl(course, next.id)}">Succ. →</a>`;
}

// ═══════════════════════════════════════════════════════════════
//  JSON-LD
// ═══════════════════════════════════════════════════════════════

function buildLessonJsonLd(course, lessonMeta) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    'name': `${lessonMeta.num} — ${lessonMeta.title}`,
    'description': lessonMeta.abstract,
    'educationalLevel': 'University',
    'inLanguage': 'it',
    'url': `${SITE.url}${lessonUrl(course, lessonMeta.id)}`,
    'datePublished': formatDateISO(lessonMeta.date),
    'author': { '@type': 'Person', 'name': SITE.author },
    'isPartOf': {
      '@type': 'Course',
      'name': course.name,
      'provider': { '@type': 'Organization', 'name': course.university },
    },
  }, null, 2);
}

function buildCourseJsonLd(course) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course.name,
    'description': course.description,
    'provider': { '@type': 'Organization', 'name': course.university },
    'inLanguage': 'it',
    'url': `${SITE.url}${course.indexUrl}`,
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'name': course.year,
      'instructor': { '@type': 'Person', 'name': course.professor },
    },
  }, null, 2);
}

// ═══════════════════════════════════════════════════════════════
//  BUILD LESSON
// ═══════════════════════════════════════════════════════════════

function buildLesson(courseId, lessonId) {
  const course = COURSES[courseId];
  if (!course) { console.error(`  ✗ Course "${courseId}" not found`); return false; }

  const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  if (lessonIndex === -1) { console.error(`  ✗ Lesson "${lessonId}" not found`); return false; }

  const lessonMeta = course.lessons[lessonIndex];

  const templatePath = path.join(TEMPLATE_DIR, 'lezione.html');
  if (!fs.existsSync(templatePath)) { console.error(`  ✗ Template not found`); return false; }
  const template = fs.readFileSync(templatePath, 'utf-8');

  const dataPath = path.join(DATA_DIR, courseId, `${lessonId}.js`);
  if (!fs.existsSync(dataPath)) { console.error(`  ✗ Data not found: ${dataPath}`); return false; }
  const lessonData = fs.readFileSync(dataPath, 'utf-8');

  const url = lessonUrl(course, lessonId);
  const vars = {
    THEME: themeOf(course),
    PAGE_TITLE: `${lessonMeta.num} — ${course.name} — FeyNotes`,
    META_DESCRIPTION: escapeHtml(`${course.name}, ${lessonMeta.num}: ${lessonMeta.title}. ${stripHtml(lessonMeta.abstract)}`),
    AUTHOR: SITE.author,
    OG_TITLE: escapeHtml(`${lessonMeta.num}: ${lessonMeta.title} — ${course.name}`),
    OG_DESCRIPTION: escapeHtml(stripHtml(lessonMeta.abstract)),
    OG_URL: `${SITE.url}${url}`,
    CANONICAL_URL: `${SITE.url}${url}`,
    CSS_VERSION: String(SITE.cssVersion),
    COURSE_URL: course.indexUrl,
    COURSE_ICON: course.icon,
    COURSE_NAME: course.name,
    NAV_LINKS: buildNavLinks(course),
    PREV_LINK: buildPrevLink(course, lessonIndex),
    NEXT_LINK: buildNextLink(course, lessonIndex),
    LESSON_NUM: lessonMeta.num,
    LESSON_DATA: lessonData,
    JSON_LD: buildLessonJsonLd(course, lessonMeta),
  };

  const html = render(template, vars);
  const outputPath = lessonOutputPath(course, lessonId);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, 'utf-8');

  console.log(`  ✓ ${lessonId} → ${path.relative(ROOT, outputPath)}`);
  return true;
}

// ═══════════════════════════════════════════════════════════════
//  VALIDATION
// ═══════════════════════════════════════════════════════════════

// Every lesson.category must exist among its course's categories, or the
// lesson lands in a section nobody sees (the L25 Geometria bug).
function validateCategories(courses = COURSES) {
  const errors = [];
  for (const [courseId, course] of Object.entries(courses)) {
    const validIds = new Set(course.categories.map(c => c.id));
    for (const lesson of course.lessons) {
      if (!validIds.has(lesson.category)) {
        errors.push(`${courseId}/${lesson.id}: category "${lesson.category}" is not in the course's categories`);
      }
    }
  }
  return errors;
}

// Which course owns a --lesson id. An explicit --course always wins; without
// one, an id that exists in more than one course (ids are only unique within
// a course, e.g. every course's intro lesson is "L01") must not silently pick
// the first course in object-key order — that would rebuild the wrong page.
function resolveCourseForLesson(lessonId, explicitCourse, courses = COURSES) {
  if (explicitCourse) return { ok: true, courseId: explicitCourse };
  const matches = Object.keys(courses).filter(cId =>
    courses[cId].lessons.some(l => l.id === lessonId)
  );
  if (matches.length > 1) return { ok: false, reason: 'ambiguous', matches };
  if (matches.length === 0) return { ok: false, reason: 'not-found', matches };
  return { ok: true, courseId: matches[0] };
}

// ═══════════════════════════════════════════════════════════════
//  BUILD COURSE INDEX
// ═══════════════════════════════════════════════════════════════

function buildCourseIndex(courseId) {
  const course = COURSES[courseId];
  if (!course) return;

  const templatePath = path.join(TEMPLATE_DIR, 'corso.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`  ✗ Course template not found: ${templatePath}`);
    return;
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Build category sections HTML
  let categorySections = '';
  for (const cat of course.categories) {
    const hasLessons = course.lessons.some(l => l.category === cat.id);
    categorySections += `
  <div class="fn-section fn-fade fn-d3">
    <div class="fn-section-label">// ${cat.label}</div>
    <div class="fn-grid" id="${cat.gridId}">`;

    if (!hasLessons) {
      categorySections += `
      <div class="fn-card fn-card--placeholder">
        <div class="fn-card-num">Prossimamente</div>
        <div class="fn-card-title">Le lezioni di ${cat.label} saranno aggiunte man mano che il corso procede.</div>
      </div>`;
    }

    categorySections += `
    </div>
  </div>
`;
  }

  // Build lesson index JSON for client-side JS
  const lessonIndex = course.lessons.map(l => ({
    id: l.id,
    num: l.num,
    date: l.date,
    title: l.title,
    abstract: l.abstract,
    category: l.category,
    file: lessonUrl(course, l.id),
  }));

  // Build populate calls
  const populateCalls = course.categories
    .map(cat => `populateGrid('${cat.gridId}', '${cat.id}');`)
    .join('\n');

  const vars = {
    THEME: themeOf(course),
    COURSE_NAME: course.name,
    COURSE_URL: course.indexUrl,
    META_DESCRIPTION: escapeHtml(`${course.name} — ${course.description}`),
    OG_DESCRIPTION: escapeHtml(course.description),
    OG_URL: `${SITE.url}${course.indexUrl}`,
    CANONICAL_URL: `${SITE.url}${course.indexUrl}`,
    AUTHOR: SITE.author,
    CSS_VERSION: String(SITE.cssVersion),
    NAV_LINKS: buildNavLinks(course),
    YEAR_BADGE: `${course.university.split(' — ')[0]} — ${course.year}`,
    COURSE_DESCRIPTION: course.description,
    PROFESSOR: course.professor,
    CATEGORY_SECTIONS: categorySections,
    LESSON_INDEX_JSON: JSON.stringify(lessonIndex, null, 2),
    POPULATE_CALLS: populateCalls,
    JSON_LD: buildCourseJsonLd(course),
  };

  const html = render(template, vars);
  const outputPath = path.join(ROOT, course.basePath.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, 'utf-8');

  console.log(`  ✓ ${course.name} index → ${path.relative(ROOT, outputPath)}`);
}

// ═══════════════════════════════════════════════════════════════
//  BUILD ESERCIZI PAGE  (optional, per-course)
//  Generated only if src/data/<courseId>/esercizi.js exists.
//  Reuses the lesson template + renderer (data defines `const LESSON`).
// ═══════════════════════════════════════════════════════════════

function buildEsercizi(courseId) {
  const course = COURSES[courseId];
  if (!course) return;

  const dataPath = path.join(DATA_DIR, courseId, 'esercizi.js');
  if (!fs.existsSync(dataPath)) return; // course has no exercises page

  const templatePath = path.join(TEMPLATE_DIR, 'lezione.html');
  if (!fs.existsSync(templatePath)) { console.error(`  ✗ Template not found`); return; }
  const template = fs.readFileSync(templatePath, 'utf-8');
  const lessonData = fs.readFileSync(dataPath, 'utf-8');

  const url = `${course.basePath}/esercizi/`;
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    'name': `Esercizi — ${course.name}`,
    'description': `Esercizi di allenamento di ${course.name} con soluzioni guidate e risultati verificati.`,
    'educationalLevel': 'University',
    'learningResourceType': 'Exercise',
    'inLanguage': 'it',
    'url': `${SITE.url}${url}`,
    'author': { '@type': 'Person', 'name': SITE.author },
    'isPartOf': {
      '@type': 'Course',
      'name': course.name,
      'provider': { '@type': 'Organization', 'name': course.university },
    },
  }, null, 2);

  const vars = {
    THEME: themeOf(course),
    PAGE_TITLE: `Esercizi — ${course.name} — FeyNotes`,
    META_DESCRIPTION: escapeHtml(`Esercizi di allenamento di ${course.name} con soluzioni guidate passo-passo e risultati verificati.`),
    AUTHOR: SITE.author,
    OG_TITLE: escapeHtml(`Esercizi — ${course.name}`),
    OG_DESCRIPTION: escapeHtml(`Esercizi di allenamento con soluzioni guidate e risultati verificati.`),
    OG_URL: `${SITE.url}${url}`,
    CANONICAL_URL: `${SITE.url}${url}`,
    CSS_VERSION: String(SITE.cssVersion),
    COURSE_URL: course.indexUrl,
    COURSE_ICON: course.icon,
    COURSE_NAME: course.name,
    NAV_LINKS: buildNavLinks(course),
    PREV_LINK: `<a href="${course.indexUrl}">← Lezioni</a>`,
    NEXT_LINK: '<a href="#" style="opacity:0.3">Succ. →</a>',
    LESSON_NUM: 'Esercizi',
    LESSON_DATA: lessonData,
    JSON_LD: jsonLd,
  };

  const html = render(template, vars);
  const outputPath = path.join(ROOT, course.basePath.slice(1), 'esercizi', 'index.html');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, 'utf-8');

  console.log(`  ✓ ${course.name} esercizi → ${path.relative(ROOT, outputPath)}`);
}

// ═══════════════════════════════════════════════════════════════
//  BUILD COURSE (all lessons + index)
// ═══════════════════════════════════════════════════════════════

function buildCourse(courseId) {
  const course = COURSES[courseId];
  if (!course) { console.error(`Course "${courseId}" not found`); return; }

  console.log(`\n📚 Building ${course.name} (${course.lessons.length} lessons)...`);

  let built = 0;
  for (const lesson of course.lessons) {
    if (buildLesson(courseId, lesson.id)) built++;
  }

  buildCourseIndex(courseId);
  buildEsercizi(courseId);

  console.log(`   Done: ${built}/${course.lessons.length} lessons built.\n`);
}

// ═══════════════════════════════════════════════════════════════
//  UPDATE HOMEPAGE — Lesson counts
// ═══════════════════════════════════════════════════════════════

// La home si genera da config.js (26 Set 2026): i corsi raggruppati per anno e
// semestre, in quest'ordine, e il colore di un corso e' quello del suo anno. Prima le
// schede erano scritte a mano in index.html e un corso nuovo poteva non comparire
// (Fisica 2). Un corso senza `anno` non compare in home ne' nella sitemap.
const HOME_INIZIO = '<!-- CORSI: generati da build.js, non modificare a mano -->';
const HOME_FINE = '<!-- /CORSI -->';

function themeOf(course) {
  return course.anno ? `anno${course.anno}` : course.theme;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function countLabel(course) {
  const count = course.lessons.length;
  const unitSingular = (course.lessonLabel || 'Lezione').toLowerCase();
  const unitPlural = unitSingular === 'guida' ? 'guide' : 'lezioni';
  return count === 1 ? `1 ${unitSingular}` : `${count} ${unitPlural}`;
}

function renderHomeCourses(courses = COURSES) {
  const inHome = Object.values(courses).filter(c => c.anno && c.semestre);
  const anni = [...new Set(inHome.map(c => c.anno))].sort((a, b) => a - b);
  let delay = 3;
  const out = [];
  for (const anno of anni) {
    out.push(`        <div class="fn-anno" data-theme="anno${anno}">`);
    out.push(`            <div class="fn-anno-label">// ${anno}° anno</div>`);
    const semestri = [...new Set(inHome.filter(c => c.anno === anno).map(c => c.semestre))].sort((a, b) => a - b);
    for (const semestre of semestri) {
      out.push(`            <div class="fn-semestre-label">${semestre}° semestre</div>`);
      out.push('            <div class="fn-courses-grid">');
      for (const c of inHome.filter(x => x.anno === anno && x.semestre === semestre)) {
        const prof = c.professor ? (/^prof/i.test(c.professor) ? c.professor : `Prof. ${c.professor}`) : '';
        out.push(`                <a href="${escapeHtml(c.indexUrl)}" class="fn-course-card fn-fade fn-d${Math.min(delay++, 9)}" data-course="${escapeHtml(c.id)}">`,
                 '                    <div class="fn-course-glow"></div>',
                 `                    <div class="fn-course-icon">fn::${escapeHtml(c.id)}</div>`,
                 `                    <div class="fn-course-name">${escapeHtml(c.name)}</div>`,
                 `                    <div class="fn-course-prof">${escapeHtml(prof)}</div>`,
                 '                    <div class="fn-course-meta">',
                 `                        <span class="fn-course-count">${countLabel(c)}</span>`,
                 '                        <span class="fn-course-arrow">&rarr;</span>',
                 '                    </div>',
                 '                </a>');
      }
      out.push('            </div>');
    }
    out.push('        </div>');
  }
  return out.join('\n');
}

function updateHomepage() {
  const homePath = path.join(ROOT, 'index.html');
  if (!fs.existsSync(homePath)) {
    console.log('  ⚠ Homepage not found — skipping');
    return;
  }
  const html = fs.readFileSync(homePath, 'utf-8');
  const a = html.indexOf(HOME_INIZIO), b = html.indexOf(HOME_FINE);
  if (a < 0 || b < a) {
    console.error(`  ✗ index.html: mancano i marcatori ${HOME_INIZIO} … ${HOME_FINE}`);
    process.exitCode = 1;
    return;
  }
  const nuovo = html.slice(0, a + HOME_INIZIO.length) + '\n' + renderHomeCourses() + '\n        ' + html.slice(b);
  fs.writeFileSync(homePath, nuovo, 'utf-8');
  console.log('  ✓ Homepage: corsi per anno e semestre');
}

// ═══════════════════════════════════════════════════════════════
//  SITEMAP
// ═══════════════════════════════════════════════════════════════

function buildSitemap() {
  console.log('🗺  Generating sitemap.xml...');

  let urls = [];
  urls.push({ loc: SITE.url + '/', priority: '1.0', changefreq: 'weekly' });

  for (const [, course] of Object.entries(COURSES)) {
    if (!course.anno) continue;              // fuori dalla home, fuori dalla sitemap
    urls.push({ loc: SITE.url + course.indexUrl, priority: '0.8', changefreq: 'weekly' });

    for (const lesson of course.lessons) {
      urls.push({
        loc: `${SITE.url}${lessonUrl(course, lesson.id)}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: formatDateISO(lesson.date),
      });
    }

    if (fs.existsSync(path.join(DATA_DIR, course.id, 'esercizi.js'))) {
      urls.push({ loc: `${SITE.url}${course.basePath}/esercizi/`, priority: '0.7', changefreq: 'monthly' });
    }
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const u of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${u.loc}</loc>\n`;
    if (u.lastmod) xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
    xml += `    <priority>${u.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  xml += '</urlset>\n';

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf-8');
  console.log(`   ✓ sitemap.xml (${urls.length} URLs)\n`);
}

// ═══════════════════════════════════════════════════════════════
//  MAIN
// ═══════════════════════════════════════════════════════════════

function main() {
  console.log('═══════════════════════════════════════');
  console.log('  FeyNotes Build System v3');
  console.log('═══════════════════════════════════════');

  const categoryErrors = validateCategories();
  if (categoryErrors.length) {
    console.error('❌ Invalid categories — build aborted:');
    for (const e of categoryErrors) console.error(`   - ${e}`);
    process.exit(1);
  }

  if (flags.sitemap) {
    buildSitemap();
    return;
  }

  if (flags.lesson) {
    const lessonId = flags.lesson;
    const resolved = resolveCourseForLesson(lessonId, flags.course);
    if (resolved.ok) {
      buildLesson(resolved.courseId, lessonId);
      buildCourseIndex(resolved.courseId);
    } else if (resolved.reason === 'ambiguous') {
      console.error(`Lesson "${lessonId}" exists in multiple courses (${resolved.matches.join(', ')}) — pass --course to disambiguate.`);
      process.exit(1);
    } else {
      console.error(`Lesson "${lessonId}" not found in any course.`);
    }
    updateHomepage();
    buildSitemap();
    return;
  }

  if (flags.course) {
    buildCourse(flags.course);
    updateHomepage();
    buildSitemap();
    return;
  }

  // Build all
  for (const courseId of Object.keys(COURSES)) {
    buildCourse(courseId);
  }
  updateHomepage();
  buildSitemap();

  console.log('✅ Build complete!');
}

module.exports = { validateCategories, resolveCourseForLesson, renderHomeCourses, themeOf };

if (require.main === module) {
  main();
}
