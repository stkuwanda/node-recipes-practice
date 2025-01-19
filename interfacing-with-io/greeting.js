console.log('What\'s your name?');

process.stdin.on('data', function (data) {
  // processing on each data event
  // console.log(data); // data is a Buffer object
  const nameVar = data.toString().trim().toUpperCase();
  process.stdout.write(`Hi ${nameVar}!`);
});