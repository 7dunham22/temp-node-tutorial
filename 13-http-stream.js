// Using an event, createReadStream can read large files in chunks.
const { createReadStream } = require('fs');

const stream = createReadStream('./dir01-test/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
});
