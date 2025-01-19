const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.resolve(process.cwd(), 'hello.txt');

const readFile = fs.readFile(filePath, 'utf8');

readFile
	.then(function (content) {
		console.log('File content:', content);
	})
	.catch(function (err) {
		console.log(err);
	});
