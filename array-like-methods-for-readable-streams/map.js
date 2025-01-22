// use the readableStream.map() method to map over a stream

const fs = require('node:fs');
const { PassThrough } = require('stream');

const rs = fs.createReadStream('./file.txt');
const ws = fs.createWriteStream('./newFilter.txt');

// create a PassThrough stream to
// which allows piping to 2 different streams simultaneously
const passThrough = new PassThrough();

// pipe the readable stream to the PassThrough stream
rs.map(function (chunk) {
	return chunk.toString().toUpperCase();
}).pipe(passThrough);

// pipe to stdout stream
passThrough.pipe(process.stdout);

// pipe to write stream
passThrough.pipe(ws);

// The PassThrough stream essentially acts as a bridge that allows the data to flow to multiple destinations. 
// This approach makes it easy to pipe a single readable stream to multiple writable streams using the pipe method.
