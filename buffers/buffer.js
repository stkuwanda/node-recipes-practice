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

// writing Buffers (writing to Buffers)
const buf5 = Buffer.alloc(5);
console.log('buf5 empty:', buf5);

// the second argument is the offset, determines where to start overwriting the buffer.
// offset says overwriting begins from and including the third slot or 
// number of bytes to skip before starting to write string. Default: 0.
// the third parameter is the maximum number of bytes to write (written bytes will not exceed buf.length - offset). 
// Default: buf.length - offset
buf5.write('hello', 2, 2, 'utf8');
console.log(buf5);

// reading from buffers with buffer.toString() method: example copied from Node.js v22.13.0 Documentatiom
/* all optional parameters in signature order
encoding <string>: The character encoding to use. Default: 'utf8'.
start <integer>: The byte offset to start decoding at. Default: 0.
end <integer>: The byte offset to stop decoding at (not inclusive). Default: buf.length.
Returns: <string>
*/

const buf6 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf6[i] = i + 97;
}

console.log(buf6.toString('utf8')); // Prints: abcdefghijklmnopqrstuvwxyz
console.log(buf6.toString('utf8', 0, 5)); // Prints: abcde

const buf7 = Buffer.from('tést');
console.log(buf7.toString('hex')); // Prints: 74c3a97374
console.log(buf7.toString('utf8', 0, 3)); // Prints: té
console.log(buf7.toString(undefined, 0, 3)); // Prints: té

