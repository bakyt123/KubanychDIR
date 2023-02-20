'use strict';

function searchName() {
    let name = prompt('Введите ваше ФИО');
    document.write(`<h1>Привет!. ${name}</h1>`);
}

searchName();