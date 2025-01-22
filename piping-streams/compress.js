// demonstrating chaining piped streams to compress a file
// pipes reduce the memory overhead of streaming data
// by managing back-pressure

const fs = require('node:fs');
const zlib = require('node:zlib');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt.gz');

// create a transform zlib stream which is both readable
// and writable
const transform = zlib.createGzip(); 

// Chain the streams: read -> compress -> write
readStream.pipe(transform).pipe(writeStream);
