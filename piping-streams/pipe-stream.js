// piping readable streams
// readableStream.pipe() method attaches a data event handler to the source stream,
// which writes the incoming data to the destination stream.
// the destination stream must be at least writable (duplex and transform streams are allowed; they're writable too).

const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt');

rs.pipe(process.stdout);

