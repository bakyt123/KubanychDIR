'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 4));
console.log(calc(12, 4));
console.log(calc(111, 4));
console.log(calc(43, 4));



function ret() {
    let num = 50;




    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hi');
};

logger();


const calc1 = (a, b) => {
    console.log('1');
    return a + b;
};



