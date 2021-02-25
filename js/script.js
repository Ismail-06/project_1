'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

const personalMovieDb = {
    'count'  : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
};

// for (let i = 0; i < 2; i++){
//     let a  = prompt('Последний просмотренный фильм'),
//         b  = prompt('Ваша оценка');
//         if(a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDb.movies[a]  = b;
//             console.log(i);
//         } else {
//             --i;
//             console.log(i);
//         }
// }

let i = 0;
while(i < 2 ){
    let a  = prompt('Последний просмотренный фильм'),
    b  = prompt('Ваша оценка');
    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a]  = b;
        console.log(i);
        i++;
    } else {
        i--;
        console.log(i);
    }
}

if(personalMovieDb.count < 10){
    console.log('Довольно мало фильмов');
} else if(personalMovieDb.count > 10 && personalMovieDb.count < 30){
    console.log('Вы классический зритель');
}   else if(personalMovieDb.count >= 30){
    console.log('Вы киноман');
}  else {
    console.log('произошла ошибка');
}

console.log(personalMovieDb);