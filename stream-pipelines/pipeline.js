// using pipeline() method to chain multiple streams.
// unlike the pipe() method, the pipeline() method also forwards errors,
// making it easier to handle errors in the stream’s flow.

const fs = require('node:fs');

const { pipeline, Transform } = require('node:stream');

const upperCase = Transform({
	transform(chunk, encoding, callback) {
		callback(null, chunk.toString().toUpperCase());
	},
});

const rs = fs.createReadStream('./file.txt');
const ws = fs.createWriteStream('./newFile.txt');

pipeline(rs, upperCase, ws, function (err) {
	if (err) {
		console.error('Pipeline failure!:', err);
		return;
	}

	console.log('Pipeline success!');
});
