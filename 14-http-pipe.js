const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./dir01-test/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
});