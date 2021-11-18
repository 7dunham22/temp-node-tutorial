// CommonJS, every file is a module by default.
// Modules
const names = require('./mod01-names');
const sayHi = require('./mod02-utils');
const altNames = require('./mod03-exportAsYouGo');

require('./mod04-execMod');
// sayHi(names.john);
// sayHi(names.peter);
