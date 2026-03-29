#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   FEYNOTES — Migration Script
   Extracts LESSON data from existing HTML lesson files
   into separate JS data files for the build system.

   Usage:  node migrate.js
   Output: src/data/fisica/L01.js, L02.js, ...

   Run this ONCE, then delete it.
   ═══════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, 'lezioni');
const OUTPUT_DIR = path.join(__dirname, 'src', 'data', 'fisica');

function extractLessonData(htmlContent) {
  // Find the LESSON object: starts at "const LESSON = {"
  // and ends at the closing "};" before </script>
  const startMarker = 'const LESSON = {';
  const startIdx = htmlContent.indexOf(startMarker);
  if (startIdx === -1) return null;

  // Find the matching closing: look for "};\n</script>" or similar
  // We need to count braces to find the correct closing
  const searchFrom = startIdx + 'const LESSON = '.length;
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let inTemplate = false;
  let endIdx = -1;

  for (let i = searchFrom; i < htmlContent.length; i++) {
    const ch = htmlContent[i];
    const prev = i > 0 ? htmlContent[i - 1] : '';

    // Handle string escapes
    if (prev === '\\') continue;

    // Track string state
    if (!inString && !inTemplate && (ch === '"' || ch === "'")) {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (inString && ch === stringChar) {
      inString = false;
      continue;
    }

    // Track template literal state
    if (!inString && !inTemplate && ch === '`') {
      inTemplate = true;
      continue;
    }
    if (inTemplate && ch === '`' && prev !== '\\') {
      inTemplate = false;
      continue;
    }

    // Count braces only outside strings
    if (!inString && !inTemplate) {
      if (ch === '{') depth++;
      if (ch === '}') {
        depth--;
        if (depth === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }
  }

  if (endIdx === -1) return null;

  // Extract the full "const LESSON = { ... };" block
  return htmlContent.substring(startIdx, endIdx) + ';';
}

function migrate() {
  console.log('═══════════════════════════════════════');
  console.log('  FeyNotes Migration');
  console.log('═══════════════════════════════════════\n');

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Find all lesson files
  const files = fs.readdirSync(LESSONS_DIR)
    .filter(f => f.match(/^L\d+\.html$/))
    .sort();

  console.log(`Found ${files.length} lesson files.\n`);

  let migrated = 0;

  for (const file of files) {
    const lessonId = file.replace('.html', '');
    const htmlPath = path.join(LESSONS_DIR, file);
    const html = fs.readFileSync(htmlPath, 'utf-8');

    const data = extractLessonData(html);
    if (!data) {
      console.log(`  ✗ ${lessonId} — could not extract LESSON data`);
      continue;
    }

    // Write data file
    const outputPath = path.join(OUTPUT_DIR, `${lessonId}.js`);
    fs.writeFileSync(outputPath, data + '\n', 'utf-8');
    console.log(`  ✓ ${lessonId} → src/data/fisica/${lessonId}.js (${data.length} chars)`);
    migrated++;
  }

  console.log(`\n✅ Migrated ${migrated}/${files.length} lessons.`);
  console.log('\nNext steps:');
  console.log('  1. Verify data files:  ls src/data/fisica/');
  console.log('  2. Test build:         node build.js --lesson L01');
  console.log('  3. Full build:         node build.js');
  console.log('  4. Delete old files:   rm lezioni/L*.html');
}

migrate();
