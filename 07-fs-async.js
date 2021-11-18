const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./dir01-test/first.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./dir01-test/sub01-subfolder/test.txt','utf8',(err,result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./dir01-test/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (err,result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting the next task');
