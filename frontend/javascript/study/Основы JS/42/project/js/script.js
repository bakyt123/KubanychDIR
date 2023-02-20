/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';



const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      input = document.querySelector('.adding__input'),
      formBut = document.querySelector('.formBut'),
      spisok = document.querySelectorAll('.promo__interactive-item'),
      inputin = document.querySelector('.adding__input.value'),
      delete1 = document.querySelector('.delete'),
      check = document.querySelector('.check');

    
      








      

const movieDB = {
    movies: [
        "Логн",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
        
    ]
};











adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();







// 12345678912345678912345


function spiss() {
    if (input.value.length >= 1 && input.value.length <= 20) {
    movieDB.movies.push(input.value);
} 
if (input.value.length > 21) {
    console.log(input.value);
    let gg;
    let hh;
    gg = input.value.split('', 21).join('');
    hh = gg + '...';
    movieDB.movies.push(hh);
}
if (input.value == '') {
}
}



// function spis() {
//     movieDB.movies.forEach((film, i) => {
//         movieList.innerHTML += `
//             <li class="promo__interactive-item">${i + 1} ${film}
//                 <div class="delete"></div>
//             </li>
//         `;
        
//     });
// }

// spis();


function spis() {
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>
        `;
        
    });
}

spis();

delete1.addEventListener('click', (e) => {
    check.remove();
});






movieDB.movies.sort();

// function spis() {
//     for (let i = 0;i < 5;i++){
//         spisok[i].textContent = `${i+1} ${movieDB.movies[i]}`;
//     }

//     movieDB.movies.forEach(item, i) => {
        
//     }

// }

// spis();





// function spis() {
//     for (let i = 0;i < 5;i++){
//         spisok[i].textContent = `${i+1} ${movieDB.movies[i]}`;
//     }

// }

// spis();












formBut.addEventListener('click', (e) => {
    e.preventDefault();
    // if (input.value.length < 21) {
        
        movieList.innerHTML = "";
        spiss();
    spis();
    if (check.checked) {
        console.log('da');
    }
    // } 
    // if (input.value.length == '') {
    // //    input.value.split('').reverse().join('');
    // // input.value.split(),reverse();
    // // input.value.splice(21, count, '...');
    // // input.value.split('', 21).join('').push('...');
    // // movieList.innerHTML = "";
    // //    spiss();
    // // spis();
    // // }
     
    // }
});








// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });




// let arr = '1234567891234567891234';
// let gg = arr.split('', 21).join('');
// console.log(gg + '...');








