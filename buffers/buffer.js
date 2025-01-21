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

// convert a buffer to a JSON object representation

// simple method
const buf8 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const jsonString = JSON.stringify(buf8);
console.log(JSON.parse(jsonString));

// using buf.toJSON() method
console.log(buf8.toJSON());

// concatenating buffers using the static Buffer.concat() method
// Buffer.concat(): Returns a new Buffer which is the result of concatenating all 
// the Buffer instances in the list together.
/*
list <Buffer[]> | <Uint8Array[]>: List of Buffer or Uint8Array instances to concatenate.
totalLength <integer>: Total length of the Buffer instances in list when concatenated.
Returns: <Buffer>
*/
// Create a single `Buffer` from a list of three `Buffer` instances.
// example copied from Node.js v22.13.0 Documentatiom
const buf9 = Buffer.alloc(10);
const buf10 = Buffer.alloc(14);
const buf11 = Buffer.alloc(18);
const totalLength = buf9.length + buf10.length + buf11.length;
console.log(totalLength); // Prints: 42

const bufA = Buffer.concat([buf9, buf10, buf11], totalLength);
console.log(bufA); // Prints: <Buffer 00 00 00 00 ...>
console.log(bufA.length); // Prints: 42
