// creating and dealing with transform streams
// transform streams allow us to consume input data, process that data,
// and then output the data in it's processed form.

const fs = require('node:fs');
const { Transform } = require('node:stream');

const rs = fs.createReadStream('./file.txt');
const ws = fs.createWriteStream('./newFile.txt');

// creating the transform stream
const upperCase = new Transform({
	transform(chunk, encoding, callback) {
    // Data processing
    callback(null, chunk.toString().toUpperCase());
  },
});

rs.pipe(upperCase).pipe(ws);
