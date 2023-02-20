'use strict';


// e это event то есть событие

// e.preventDefault(); - убирает у события дефолтные свойства

// {once:true} свойство для события только один раз происходит

////////////////////////////////////////

const btn = document.querySelector('button'),
btns = document.querySelectorAll('button'),
overlay = document.querySelector('.overlay'),
link = document.querySelector('a');



////////////////////////////////////////

// Одно событие на один элемент

// btn.onclick = function (){
//     alert('privet');
// };

// Одно событие на один элемент

// btn.onclick = function (){
//     alert('privet eto opat ya');
// };




////////////////////////////////////////

// способ наложения события на оидн элемент

// btn.addEventListener('click', () => {

// alert('click');

// });

// btn.addEventListener('click', () => {

//     alert('privet eto opat ya');
    
//     });

////////////////////////////////////////

// btn.addEventListener('click', (e) => {
// // console.log(e.target);
// // // console.log('click');
// e.target.remove();
// });


////////////////////////////////////////


// // let i = 0;

const deleteElement = (e) => {
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deleteElement);
    // }
    };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

////////////////////////////////////////

//это не првильно на массив (снизу)
// btns.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
    btn.addEventListener(
        // 1 
        'click', 
    // 2
    (e)  => {
        btn.style.backgroundColor = 'blue';
        console.log('eventWas');
    }, 
    // 3
    {once:true}
    
    );


    console.log(btn);
});







////////////////////////////////////////

// link.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     e.target.style.marginLeft = '500px';
//     e.target.style.marginTop = '500px';
//     e.target.style.transition = '10s';
// });

////////////////////////////////////////



