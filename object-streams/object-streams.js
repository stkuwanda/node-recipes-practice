// creating and dealing with object streams; i.e working in object mode
// in which values are returned as generic JavaScript objects.
// an example use case for object mode streaming could be implementing
// an application that queries a database for a large set of user records
// and then processes each user record individually.

const { Transform } = require('node:stream');
const { stringify } = require('ndjson');

const Name = Transform({
	objectMode: true,
	transform({ forename, surname }, encoding, callback) {
		callback(null, { name: `${forename} ${surname}` });
	},
});

Name.pipe(stringify()).pipe(process.stdout);

Name.write({forename: 'Simba', surname: 'Kuwanda'});
Name.write({forename: 'Chipo', surname: 'Kuwanda'});
Name.write({forename: 'Christian', surname: 'Kuwanda'});
