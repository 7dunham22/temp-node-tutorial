// const { readFile } = require('fs');

// console.log('Started the first task');

// // readFile is an asynchronous process that executes only after the final console.log command.
// readFile('./dir01-test/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log('completed first task');
// });

// console.log('started the next task');

/* ======================================================== */

// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 0);
// console.log('third');

/* ======================================================== */

setInterval(() => {
    console.log('hello world');
}, 2000);
console.log('I will run first');
