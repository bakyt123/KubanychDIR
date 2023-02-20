'use strict';

const box = document.getElementById('box');

console.log(box);
 
//////////////////////////////////////////////

// const btns = document.getElementsByTagName('Button')[1];
const btns = document.getElementsByTagName('Button');

console.log(btns[1]);

//////////////////////////////////////////////

const circles = document.getElementsByClassName('circle');
console.log(circles);

//////////////////////////////////////////////

// САМЫЙ НОВЫЙ И ПРИМЕНИМЫЙ МЕТОД

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

//////////////////////////////////////////////

// БЕРЕТ ПЕРВЫЙ 

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);