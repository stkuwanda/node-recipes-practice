// readable streams with asynchronous iterators with the for await ... of statement
// readable streams are asynchronous iterables
// this means we can use the for await...of syntax to iterate over
// a read/readable stream

const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt'); // an asynchronous iterable is returned

async function run() {
	for await (const chunk of rs) {
		console.log('chunk:', chunk.toString());
	}

	console.log('No more data.');
}

run();