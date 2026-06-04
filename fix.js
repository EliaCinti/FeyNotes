const fs = require('fs');

// Read the current broken L51
const current = fs.readFileSync('src/data/fisica/L51.js', 'utf8');
// Find the index of "oral_cards:"
const oralCardsIdx = current.indexOf('oral_cards: [');
let goodPart = current.substring(0, oralCardsIdx);

// We will fetch the oral_cards from the git history (HEAD^)
const { execSync } = require('child_process');
const oldL51 = execSync('git show HEAD^:src/data/fisica/L51.js', {encoding: 'utf8'});

const oldOralCardsIdx = oldL51.indexOf('oral_cards: [');
let oldOralCards = oldL51.substring(oldOralCardsIdx);

fs.writeFileSync('src/data/fisica/L51.js', goodPart + oldOralCards);
console.log("Fixed L51.js syntax by merging oral_cards from previous commit!");
