'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 1 способ цикла for
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }
// }

// 2 способ цикла while
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//         i++;
//     } else {
//         console.log('Error!');
//         i--;
//     }
// }

// 3 способ цикла do while
let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
        i++;
    } else {
        console.log('Error!');
        i--;
    }
}
while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов!', '');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель!', '');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!', '');
} else {
    console.log('Произошла ошибка!', '')
}

console.log(personalMovieDB);