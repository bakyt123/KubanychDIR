'use strict'

// в браузере локальное время а в вс коде другое




// const now = new Date('2023-02-16T16:21');
const now = new Date(2023, 2, 16, 16, 21);
//  new Date.parsel('2020-05-01');

// console.log(now.setHours(18));
console.log(now.setHours(40));

console.log(now);



// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0;i < 100000; i++) {
let some = i ** 3;
}

let end = new Date();

alert(`Цикл заработал за ${end - start} миллисекунд`);


