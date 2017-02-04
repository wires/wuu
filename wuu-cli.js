#! /usr/bin/env node
const wait = require('./wuu.js')

const argv = require('minimist')(process.argv.slice(2));

const port = parseInt(argv.port)
const host = argv.host || 'localhost'
const retry = (parseInt(argv.retry) || 3) * 1000
const timeout = (parseInt(argv.timeout) || 60) * 1000

if(!port) {
	console.error('must pass --port')
	process.exit(-1)
}

wait(port, host, retry, timeout)
.then(function() {
    console.log(`Port ${port} is now in listening for connections`);
}, function(err) {
    console.log('Error:', err.message);
})
