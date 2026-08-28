const fs = require('fs');
const path = require('path');

const UPLOAD_DIR = '/Users/fin./.gemini/antigravity-ide/brain/29f1a8df-df19-462d-b6ba-c9fa66f6800a/.user_uploaded';

const files = fs.readdirSync(UPLOAD_DIR)
  .map(f => ({ name: f, time: fs.statSync(path.join(UPLOAD_DIR, f)).mtimeMs }))
  .sort((a, b) => b.time - a.time);

console.log('Recent 10 files:');
console.log(files.slice(0, 10));
