// constructing Readable type streams with async iterators
const { Readable } = require('node:stream');

async function* generate() {
	yield 'Node.js';
	yield 'is';
	yield 'a';
	yield 'JavaScript';
	yield 'Runtime';
}

const generator = generate();

// creating a readable stream using the Readable.from() API
const rs = Readable.from(generator);

rs.on('data', function (chunk) {
  // note, with this Readable type (contrast ReadStream type), the chunk is already a string NOT a buffer
  console.log(chunk); 
});
