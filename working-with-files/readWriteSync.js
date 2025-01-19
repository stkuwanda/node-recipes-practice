const fs = require('node:fs');
const path = require('node:path');

// const filePath = path.join(process.cwd(), 'hello.txt');
const filePath = path.resolve(process.cwd(), 'hello.txt'); // | path.resolve(process.cwd(),'./', 'hello.txt');

const contents = fs.readFileSync(filePath, 'utf8');// without the utf8 argument the call returns a Buffer
console.log('File contents:', contents);

const contentToUppercase = contents.toUpperCase();
fs.writeFileSync(filePath, contentToUppercase); // overwrites the file with updated text
console.log('File updated.');