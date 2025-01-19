const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(process.cwd(), 'hello.txt');

const contents = fs.readFileSync(filePath, 'utf8');
console.log('File contents:\n', contents);