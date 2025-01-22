// working with file descriptors
// In Node.js, a file descriptor (fd) is a non-negative integer that uniquely 
// identifies an open file within a process. It's like a handle that allows the process 
// to interact with the file, enabling operations such as reading, writing, and closing.
// When you open a file using Node.js, the operating system assigns a file descriptor to manage that file

const fs = require('node:fs');

fs.open('./file.txt','r', function (err, fd) {
  if(err) {
    console.error('File could not open:', error);
    return;
  }

  console.log('File descriptor:', fd);

  fs.read(fd, function(err, bytesRead, buffer) {// Default Buffer: Buffer.alloc(16384)
    if(err) {
      console.error('File could not be read:', err);
      return;
    }

    console.log(`bytesRead: ${bytesRead}`);
    console.log(buffer.toString());

    fs.close(fd, function (err) {
      if(err){
        console.error('Failed to close file. Exiting process. Error:', err);
        process.exit();
      }

      console.log('File closed successfully.');
    });
  });

});