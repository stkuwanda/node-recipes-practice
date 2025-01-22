// promisified way of dealing with a pipeline of streams

const fs = require('node:fs');
const { Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises'); // promisified pipeline method()

const upperCase = Transform({
	transform(chunk, encoding, callback) {
		callback(null, chunk.toString().toUpperCase());
	},
});

const rs = fs.createReadStream('./file.txt');
const ws = fs.createWriteStream('./newFile.txt');

async function run() {
	try {
		await pipeline(rs, upperCase, ws);
		console.error('Pipeline failure!:', err);
	} catch (err) {
		console.log('Pipeline success!');
	}
}

run();
