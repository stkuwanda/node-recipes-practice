const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.resolve(process.cwd(), 'hello.txt');

const readFile = fs.readFile(filePath, 'utf8');

// pure promises version
// readFile
// 	.then(function (content) {
// 		console.log('File content:', content);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

// pure promises with async/ await syntax
async function run() {
	try {
		const content = await readFile;
		console.log('File content:', content);
	} catch (err) {
		console.error(err);
	}
}

run();
