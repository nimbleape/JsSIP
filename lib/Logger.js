const debug = require('debug');

debug.log = console.info.bind(console);
debug.error = console.error.bind(console);

module.exports = debug;