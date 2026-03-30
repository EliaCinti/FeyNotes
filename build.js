#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   FEYNOTES — Build Script
   Generates static lesson pages from template + data files.

   Usage:
     node build.js                  Build all courses
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
//  URL HELPERS
// ═══════════════════════════════════════════════════════════════

function lessonUrl(course, lessonId) {
  return `${course.basePath}/lezioni/${lessonId}/`;
}

function lessonOutputPath(course, lessonId) {
  // e.g. /fisica1/lezioni/L01/index.html
  return path.join(ROOT, course.basePath.slice(1), 'lezioni', lessonId, 'index.html');
}

// ═══════════════════════════════════════════════════════════════
//  TEMPLATE ENGINE
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

// ═══════════════════════════════════════════════════════════════
//  NAV LINK GENERATORS
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
//  JSON-LD STRUCTURED DATA
// ═══════════════════════════════════════════════════════════════

function buildJsonLd(course, lessonMeta) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    'name': `${lessonMeta.num} — ${lessonMeta.title}`,
    'description': lessonMeta.abstract,
    'educationalLevel': 'University',
    'inLanguage': 'it',
    'url': `${SITE.url}${lessonUrl(course, lessonMeta.id)}`,
    'datePublished': formatDateISO(lessonMeta.date),
    'author': {
      '@type': 'Person',
      'name': SITE.author,
    },
    'isPartOf': {
      '@type': 'Course',
      'name': course.name,
      'provider': {
        '@type': 'Organization',
        'name': course.university,
      },
    },
  }, null, 2);
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
//  BUILD LESSON
// ═══════════════════════════════════════════════════════════════

function buildLesson(courseId, lessonId) {
  const course = COURSES[courseId];
  if (!course) {
    console.error(`  ✗ Course "${courseId}" not found in config`);
    return false;
  }

  const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  if (lessonIndex === -1) {
    console.error(`  ✗ Lesson "${lessonId}" not found in course "${courseId}"`);
    return false;
  }

  const lessonMeta = course.lessons[lessonIndex];
  const url = lessonUrl(course, lessonId);

  // Read template
  const templatePath = path.join(TEMPLATE_DIR, 'lezione.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`  ✗ Template not found: ${templatePath}`);
    return false;
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Read lesson data
  const dataPath = path.join(DATA_DIR, courseId, `${lessonId}.js`);
  if (!fs.existsSync(dataPath)) {
    console.error(`  ✗ Data file not found: ${dataPath}`);
    return false;
  }
  const lessonData = fs.readFileSync(dataPath, 'utf-8');

  // Build variables
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
    LESSON_DATA: lessonData,
    JSON_LD: buildJsonLd(course, lessonMeta),
  };

  // Render
  const html = render(template, vars);

  // Write output
  const outputPath = lessonOutputPath(course, lessonId);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, 'utf-8');

  const relPath = path.relative(ROOT, outputPath);
  console.log(`  ✓ ${lessonId} → ${relPath}`);
  return true;
}

// ═══════════════════════════════════════════════════════════════
//  BUILD COURSE INDEX
// ═══════════════════════════════════════════════════════════════

function buildCourseIndex(courseId) {
  const course = COURSES[courseId];
  if (!course) return;

  // Update lesson links in the course index.html
  const indexPath = path.join(ROOT, course.basePath.slice(1), 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log(`  ⚠ Course index not found: ${indexPath} — skipping link update`);
    return;
  }

  let html = fs.readFileSync(indexPath, 'utf-8');

  // Update lesson file references in JS
  for (const lesson of course.lessons) {
    // Match various old patterns and normalize to new URL
    const oldPatterns = [
      `"/lezioni/${lesson.id}/"`,
      `"../lezioni/${lesson.id}.html"`,
      `"../lezioni/${lesson.id}/"`,
    ];
    const newUrl = `"${lessonUrl(course, lesson.id)}"`;
    for (const old of oldPatterns) {
      html = html.split(old).join(newUrl);
    }
  }

  fs.writeFileSync(indexPath, html, 'utf-8');
  console.log(`  ✓ Updated links in ${path.relative(ROOT, indexPath)}`);
}

// ═══════════════════════════════════════════════════════════════
//  BUILD COURSE
// ═══════════════════════════════════════════════════════════════

function buildCourse(courseId) {
  const course = COURSES[courseId];
  if (!course) {
    console.error(`Course "${courseId}" not found`);
    return;
  }

  console.log(`\n📚 Building ${course.name} (${course.lessons.length} lessons)...`);

  let built = 0;
  for (const lesson of course.lessons) {
    if (buildLesson(courseId, lesson.id)) built++;
  }

  buildCourseIndex(courseId);

  console.log(`   Done: ${built}/${course.lessons.length} lessons built.\n`);
}

// ═══════════════════════════════════════════════════════════════
//  SITEMAP GENERATOR
// ═══════════════════════════════════════════════════════════════

function buildSitemap() {
  console.log('🗺  Generating sitemap.xml...');

  const today = new Date().toISOString().split('T')[0];
  let urls = [];

  // Homepage
  urls.push({ loc: SITE.url + '/', priority: '1.0', changefreq: 'weekly' });

  // Course indexes + lessons
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
    // Match: data-course="fisica" ... fn-course-count">XX lezioni</span>
    // We use a regex that finds the card by data-course and updates the count inside it
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
//  MAIN
// ═══════════════════════════════════════════════════════════════

function main() {
  console.log('═══════════════════════════════════════');
  console.log('  FeyNotes Build System v2');
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
