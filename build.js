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
    THEME: course.theme,
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
    THEME: course.theme,
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

  console.log(`   Done: ${built}/${course.lessons.length} lessons built.\n`);
}

// ═══════════════════════════════════════════════════════════════
//  UPDATE HOMEPAGE — Lesson counts
// ═══════════════════════════════════════════════════════════════

function updateHomepage() {
  const homePath = path.join(ROOT, 'index.html');
  if (!fs.existsSync(homePath)) {
    console.log('  ⚠ Homepage not found — skipping count update');
    return;
  }

  let html = fs.readFileSync(homePath, 'utf-8');

  for (const [, course] of Object.entries(COURSES)) {
    const count = course.lessons.length;
    const label = count === 1 ? '1 lezione' : `${count} lezioni`;
    const regex = new RegExp(
      `(data-course="${course.id}"[\\s\\S]*?class="fn-course-count">)\\d+ lezion[ei]`,
      'g'
    );
    html = html.replace(regex, `$1${label}`);
  }

  fs.writeFileSync(homePath, html, 'utf-8');
  console.log('  ✓ Updated lesson counts in index.html');
}

// ═══════════════════════════════════════════════════════════════
//  SITEMAP
// ═══════════════════════════════════════════════════════════════

function buildSitemap() {
  console.log('🗺  Generating sitemap.xml...');

  let urls = [];
  urls.push({ loc: SITE.url + '/', priority: '1.0', changefreq: 'weekly' });

  for (const [, course] of Object.entries(COURSES)) {
    urls.push({ loc: SITE.url + course.indexUrl, priority: '0.8', changefreq: 'weekly' });

    for (const lesson of course.lessons) {
      urls.push({
        loc: `${SITE.url}${lessonUrl(course, lesson.id)}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: formatDateISO(lesson.date),
      });
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

  if (flags.sitemap) {
    buildSitemap();
    return;
  }

  if (flags.lesson) {
    const lessonId = flags.lesson;
    const courseId = flags.course || Object.keys(COURSES).find(cId =>
      COURSES[cId].lessons.some(l => l.id === lessonId)
    );
    if (courseId) {
      buildLesson(courseId, lessonId);
      buildCourseIndex(courseId);
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

main();
