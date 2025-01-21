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