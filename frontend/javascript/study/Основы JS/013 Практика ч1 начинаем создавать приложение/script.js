'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');


const lastFilmp = prompt('Последний фильм?'),
      estimationp = prompt('Оценка из 10');





const personalMovieDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilmp] = estimationp;

console.log(personalMovieDB.movies.lastFilm);
console.log(personalMovieDB.movies.estimation + '/10');
console.log(personalMovieDB);

document.write(personalMovieDB.movies[lastFilmp]);







// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);