// 'use strict';

// scrollby относительно вашего текущего положения


// scrollTo относительно всей страницы 

////////////////////////////////////////////

const box = document.querySelector('.box'),
btn = document.querySelector('button'),


////////////////////////////////////////////

// размеры по факту

      width1 = box.clientWidth,
      height1 = box.clientHeight,


// размеры которые указаны в css

      width2 = box.offsetWidth,
      height2 = box.offsetHeight,
      

// размер скроллов

      width = box.scrollWidth,
      height = box.scrollHeight;

   
////////////////////////////////////////////

console.log(width1, height1, width2, height2, width, height);

////////////////////////////////////////////

btn.addEventListener('click', () => {
// box.style.height = box.scrollHeight + 'px';
console.log(box.scrollTop);
});


////////////////////////////////////////////

// console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style);



console.log(style.display);


console.log(document.documentElement.scrollTop);
