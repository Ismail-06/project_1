'use strict';

let numberOfFilms; 

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
    while(numberOfFilms == null ||  numberOfFilms == '' ||  isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
    }
}
// start();

const personalMovieDb = {
    'count'  : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        let a  = prompt('Последний просмотренный фильм'),
            b  = prompt('Ваша оценка');
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDb.movies[a]  = b;
                console.log(i);
            } else {
                --i;
                console.log(i);
            }
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
        if(personalMovieDb.count < 10){
        console.log('Довольно мало фильмов');
    } else if(personalMovieDb.count > 10 && personalMovieDb.count < 30){
        console.log('Вы классический зритель');
    }   else if(personalMovieDb.count >= 30){
        console.log('Вы киноман');
    }  else {
        console.log('произошла ошибка');
    }
}
// detectPersonalLevel();


function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDb);
    }
}
showMyDB(personalMovieDb.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDb.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
