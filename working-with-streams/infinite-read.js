// interacting with infinite amounts of data
// this code cannot only be run on UNIX based systems NOT Windows
const fs = require('node:fs');

const rs = fs.createReadStream('/dev/urandom'); // only for Unix systems NOT Windows

let size = 0;
rs.on('data', function (data) {
  size += data.length;
  // console output shows the ever-growing size of the /dev/urandom file
  // showing how processing infinite amounts of data is possible
  console.log('File size:', size);
});