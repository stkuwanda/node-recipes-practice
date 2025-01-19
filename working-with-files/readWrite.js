const fs = require('node:fs');
const path = require('node:path');

const filePath = path.resolve(process.cwd(), 'hello.txt'); // | path.resolve(process.cwd(),'./', 'hello.txt');

fs.readFile(filePath, 'utf8', function (err, contents) {
	// without the utf8 argument the call returns a Buffer
	if (err) {
		console.log(err);
	}

	console.log('File contents:', contents);
	const contentToUppercase = contents.toUpperCase();
	fs.writeFile(filePath, contentToUppercase, function (err) {
		if (err) {
			throw err;
		}

		// overwrites the file with updated text
		console.log('File updated.');
	});
});
