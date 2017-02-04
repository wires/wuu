const tcpUsed = require('tcp-port-used')

const wait = (port, host, retry, timeout) => host ?
	tcpUsed.waitUntilUsedOnHost(port, host, retry, timeout) :
	tcpUsed.waitUntilUser(port, retry, timeout)

module.exports = wait
