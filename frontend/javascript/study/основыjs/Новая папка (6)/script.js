'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 
// first:for (let i = 0;i <2;i++) {
//     const a = prompt('Последний фильм?'),
//     b = prompt('Оценка из 10');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }


// раб
// console.log(personalMovieDB);

// if (personalMovieDB.count < 10 && personalMovieDB.count >= 0 && personalMovieDB.count != null && personalMovieDB.count != '') {
//     document.write('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     document.write('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
// document.write('Вы киноман');
// } else if (personalMovieDB.count == 0) {
//     document.write('Это продолжить');
// } else if (personalMovieDB.count == null){
//     document.write('Это Отмена');
// } else {
//     document.write('Мне нужны цифры');
// }

// console.log(typeof(personalMovieDB.count));
// раб


console.log(personalMovieDB);

if (personalMovieDB.count < 10 && personalMovieDB.count >= 1 && personalMovieDB.count != null && personalMovieDB.count != '') {
    document.write('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    document.write('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
document.write('Вы киноман');
} else if (personalMovieDB.count >= 0 && personalMovieDB.count != null && personalMovieDB.count != ''){
    document.write('Это ноль');
} else if (personalMovieDB.count == 0) {
    document.write('Это продолжить');
} else if (personalMovieDB.count == null) {
    document.write('Это Отмена');
} else {
    document.write('Мне нужны цифры');
}

console.log(typeof(personalMovieDB.count));