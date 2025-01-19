// demo of experimental Readline Promises API which is used
// for reading a file line by line
const readline = require('node:readline/promises');

async function greet() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const nameVar = await rl.question("What's your name?\n");
	console.log(`Hi ${nameVar}!\n`);
	rl.close();
}
 greet();