'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);
// console.log(box.textContent);
console.log(block?.textContent);
// block?.textContent = '123';
console.log(2 - 1);



const userData = {
    name:'Ivan',
    age: null
};

if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

console.log(userData?.skills?.js?);