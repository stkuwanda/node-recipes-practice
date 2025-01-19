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

// proof of asynchronous execution while file is being read and updated.
// using unref() on setInterval() means this timer will not keep the Node.js 
// event loop active if it's the only remaining active event in the event loop.
// calls to unref() are useful for timers for which you want to execute an action 
// in the future but do not want to keep the Node.js process running solely on those timers.
setInterval(function () {
	process.stdout.write('**** \n');
}, 1).unref(); // 
