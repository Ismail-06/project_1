'use strict';

let numberOfFilms = prompt('Сколько фильмов вы просмотрели', '');
const personalMovieDb = {
    'count'  : numberOfFilms,
    'movies' : {
       
    },
    'actors' : {},
    'genres' : [],
    'privat' : false
};
let lastFilmName  = prompt('Последний просмотренный фильм'),
    appraisalFilm = prompt('Ваша оценка');
personalMovieDb.movies[lastFilmName]  = appraisalFilm;


console.log(personalMovieDb);