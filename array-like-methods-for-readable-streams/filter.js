// use the readable.filter() method

const { Readable } = require('node:stream');

async function* generate() {
	yield 'Java\n';
	yield 'Python\n';
	yield 'Golang\n';
}

const generator = generate();

const rd = Readable.from(generator).filter(function (chunk) {
	return chunk.length > 4;
});

rd.pipe(process.stdout);
