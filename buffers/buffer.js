// ES6+ JavaScript buffers and array buffers

// the 8 byte buffer array created cannot be manipulated directly
const buffer = new ArrayBuffer(8); // argument is 8 bytes

// the data view is created using a typed array to represent the buffer in a specific format
// the view will accommodate 2 slots each of size 4 bytes (32 bit signed integer slot)
// allowing storage of 2 numbers inside the view
const view = new Int32Array(buffer); 
view[0] = 1; // stor a number in the first storage slot
view[1] = 2; // store a number in the final slot
view[2] = 3; // no error, but this assignment is ignored as this slot doesn't exist

console.log(view);

// NodeJs Buffers
// Buffer objects represent a fixed-length sequence of bytes in Node.js. 
// The Buffer class is a subclass of the Uint8Array JavaScript class and extends it with 
// methods that cover additional use cases.
// Node.js API accepts simple Uint8Arrays if buffers are supported

// the Buffer object is available globaly but it is recommended to import it explicitly
const { Buffer } = require('node:buffer');

const buf = Buffer.alloc(1234); // argument specifies the size of the Buffer in bytes (octets)
console.log(buf.length); // Prints: 1234
buf.write('some string', 0, 'utf8'); // write a shorter string to it using UTF-8.
console.log(buf);

// an unwritten Buffer of size 10 bytes
const buf2 = Buffer.alloc(10);
console.log(buf2);

// creating a Buffer from an array
const buf3 = Buffer.from([10, 20, 30, 40, 50]);
console.log(buf3);

// creating a Buffer from a string, there's an optional encoding argument
const buf4 = Buffer.from('I am string data inside the Buffer.', 'utf8');
console.log(buf4);
