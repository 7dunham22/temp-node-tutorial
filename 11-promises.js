const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./dir01-test/first.txt', 'utf8');
        const second = await readFilePromise('./dir01-test/sub01-subfolder/test.txt', 'utf8');
        await writeFilePromise('./dir01-test/promiseResult.txt', `This is awesome: ${first} ${second}`);
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile('./dir01-test/first.txt', 'utf8', (err, data) => {
            if (err) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

    // getText('./dir01-test/first.txt').
    // then(result => console.log(result)).
    // catch((err) => console.log(err));
