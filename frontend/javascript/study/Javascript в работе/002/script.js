const btns = document.querySelectorAll('button'),
wrapper = document.querySelector('#first');



///////////////////////////////////////////

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
console.log(btns[0].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));


///////////////////////////////////////////


// console.log(btns[1].classList.add('red'));

if(btns[1].classList.contains('red')) {
    console.log('red');
} else {
    console.log('no red');
}

///////////////////////////////////////////

btns[0].addEventListener('click', () => {
// if(!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
// } else {
//     btns[1].classList.remove('red');
// }
btns[1].classList.toggle('red');

});

console.log(btns[0].className);

///////////////////////////////////////////

wrapper.addEventListener('click', (event) => {
// if(event.target && event.target.tagName == 'BUTTON') {
    // console.log('Hello');
// }

if(event.target && event.target.classList.contains('red')) {
    console.log('Hello');
}

});

///////////////////////////////////////////



const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


///////////////////////////////////////////

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//     console.log('Hello');
//     });
//     });
