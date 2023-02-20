'use strict';


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('Button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      
////////////////////////////////////



    //   wrapper = document.querySelector('.wrapper'),
    //   hearts = wrapper.querySelectorAll('.heart'),
    //   oneHeart = wrapper.querySelector('.heart');
      


////////////////////////////////////

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

////////////////////////////////////

box.style.cssText = 'background-color: blue; width: 500px';

////////////////////////////////////


btns[1].style.borderRadius = '100%';

////////////////////////////////////

circles[0].style.backgroundColor = 'red';

////////////////////////////////////

// 1 способ плохой

// for (let i = 0; i < hearts.length; i++) {
// hearts[i].style.backgroundColor = 'blue';
// }


////////////////////////////////////

// 2 способ хороший

hearts.forEach(item => {
item.style.backgroundColor = 'blue';
});

////////////////////////////////////

const div = document.createElement('div');

// const text = document.createTextNode('Тут был я');

// div.append(text);

div.classList.add('black');

document.body.append(div);

////////////////////////////////////

// document.querySelector('.wrapper').append(div);

////////////////////////////////////

// wrapper.append(div);
//wrapper.appendChild(div);

////////////////////////////////////

//wrapper.prepend(div);

////////////////////////////////////

//hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div,hearts[1]);


////////////////////////////////////

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

////////////////////////////////////

// hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

////////////////////////////////////

div.innerHTML = '<h1>Halo</h1>';

////////////////////////////////////

// div.textContent = '<h1>Hello</h1>';

////////////////////////////////////

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

// afterbegin 
// afterend 
// beforebegin
// beforeend

////////////////////////////////////
