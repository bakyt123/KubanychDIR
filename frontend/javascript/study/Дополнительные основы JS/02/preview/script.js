'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h || 200}px`;
    elem.style.width = `${w || 200}px`;
    elem.innerHtml = h ?? 200 * w ?? 200    ;
}

changeParams(box, newHeight, newWidth);
// changeParams(box);


let userName;
let userKey;

console.log(userName ?? userKey ?? 'userDefault');

