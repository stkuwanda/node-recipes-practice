// fs.watch() API watches for changes in files but can also watch for directories.
const fs = require('node:fs');
const file = './file.txt';

fs.watch(file, (eventType, filename) => {
	const formattedTime = new Intl.DateTimeFormat('en-GB', {
		dateStyle: 'full',
		timeStyle: 'long',
	}).format(new Date());
	return console.log(`${filename} updated${formattedTime}`);
});
