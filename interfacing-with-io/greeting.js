console.log('What\'s your name?');

process.stdin.on('data', function (data) {
  // processing on each data event
  // console.log(data); // data is a Buffer object
  const nameVar = data.toString().trim().toUpperCase();

  if(nameVar !== ''){
    process.stdout.write(`Hi ${nameVar}!\n`); // writes to the output stream
  } else {
    process.stderr.write('Input is empty!\n'); // writes to the error output stream
  }
});