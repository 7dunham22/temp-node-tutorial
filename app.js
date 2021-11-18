// npm - global command, comes with code.
// npm --version

// local dependency - use it only in particular project.
// npm i <packagename>
// npm install <packagename>

// global dependency - any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file
// manual approach (create package.json in the root)
// npm init (step by step)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
