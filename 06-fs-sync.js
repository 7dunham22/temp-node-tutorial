const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./dir01-test/first.txt', 'utf8');
const second = readFileSync('./dir01-test/sub01-subfolder/test.txt', 'utf8');

writeFileSync('./dir01-test/result-sync.txt', `Here is the result: ${first}, ${second}`);
