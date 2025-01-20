// program that watches for changes in a given file using the fs.watchFile() API
const fs = require('node:fs');
const path = require('node:path');

const file = path.resolve(process.cwd(), 'file.txt');

fs.watchFile(file, function (current, previous) {
	console.log(`${file} updated ${current.mtime}`);
});

// run program:
// node watch.js
// edit file.txt contents and save and watch the console logs