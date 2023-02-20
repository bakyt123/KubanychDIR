'use strict';
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', (e) => {
let box = document.querySelector('.box');
box.addEventListener('touchstart', (e) => {
    e.preventDefault();
console.log('start');
});
box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('move');
    console.log(e.targetTouches[0].pageX);
    console.log(e.targetTouches[0].pageY);

    
    if (e.targetTouches[0].pageX > 300) {
        console.log('sad');
        e.target.style.transition = '2s';
        e.target.style.marginLeft = '100px';
        e.target.style.backgroundColor = 'blue';
    }
    if (e.targetTouches[0].pageX < 100) {
        console.log('sad');
        e.target.style.transition = '2s';
        e.target.style.marginLeft = '-100px';
        e.target.style.backgroundColor = 'black';
    }
    if (e.targetTouches[0].pageY > -600) {
        console.log('sad');
        e.target.style.transition = '2s';
        e.target.style.marginTop = '-100px';
        e.target.style.backgroundColor = 'pink';

    }
    if (e.targetTouches[0].pageY > 600) {
        console.log('sad');
        e.target.style.transition = '2s';
        e.target.style.marginTop = '100px';
        e.target.style.backgroundColor = 'yellow';
    }
    
    
    
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
        });
});