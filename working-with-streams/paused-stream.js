// working with paused readable streams
// a Readable/ReadStream stream is in paused mode by default at creation.
// typically, listening to the `data` event on the readable changes the mode to flow mode
// in which data chunks are read automatically.
// typically, listening to the 'readable` event on the readable object keeps the mode in
// pause mode and data can only be consumed by subsequent calls to the reable object's
// read() method

const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt');

rs.on('readable', function () {
	// manually read each chunk because rs is in paused mode
	let chunk = rs.read();

	while (chunk !== null) {
		console.log('Read chunk:', chunk.toString());
		chunk = rs.read();
	}
});

rs.on('end', function () {
	console.log('No more data to read.');
});
