// creating a writable stream to which we will write to some text

const fs = require('node:fs');

const file = fs.createWriteStream('./file.txt');

for(let i = 0; i < 100000; i++) {
  file.write('NodeJs is an interesting runtime which has V8 engine and libux.\n');
}
