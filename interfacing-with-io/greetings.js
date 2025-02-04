const readline = require('node:readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
	input.push(line);
});

rl.on('close', () => {
	// Ensure there are at least two lines of input
	// Parse the first line
	const [n, x] = input[0].split(' ').map(Number);

	// Parse the second line
	const array = input[1].split(' ').map(Number);

	// Search for element X in the array
	if (array.includes(x)) {
		console.log('YES');
	} else {
		console.log('NO');
	}
});
