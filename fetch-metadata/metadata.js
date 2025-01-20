// program give information about the file we pass to it as a parameter
const fs = require('node:fs');

// prints file metadata
function printFileMetaData(file) {
  const fileStats = fs.statSync(file);
  console.log(fileStats);
}

const file = process.argv[2]; // read file name as a command-line argument
printFileMetaData(file);

// launch program in the terminal:
// node metadata.js file.txt


