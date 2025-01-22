// create a readable stream to read from a file
const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt');

// data event fires each time a new chunk of data is read
rs.on('data', function (data) {
	// console.log('Read chunk:', data);
  console.log('Read chunk:', data.toString());
});

// end event fires when there's no data to read from the stream
rs.on('end', function () {
  console.log('Read stream ended.');
});
