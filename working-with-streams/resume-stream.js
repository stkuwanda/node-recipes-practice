// Node.js program to demonstrate the
// readable resume event

// Including fs module
const fs = require('fs');

// Constructing readable stream
const readable = fs.createReadStream('file.txt');

// Handling data event
readable.on('data', (chunk) => {
	console.log(`${chunk}`);
  readable.pause();
});

// // Calling pause method after 3 seconds
// setTimeout(() => {
//   console.log('Now data flow is paused.');
//   readable.pause();
// }, 1000);

// Calling resume method
setTimeout(() => {
  console.log('Now data starts flowing again.');
  readable.resume();
}, 20000);

// Emitting resume event
readable.on('pause', () => {
  console.log('pause emitted!');
});


// Emitting resume event
readable.on('resume', () => {
  console.log('resume emitted!');
});

// Emitting end event
readable.on('end', () => {
  console.log('end emitted!');
});

console.log('Done....');
