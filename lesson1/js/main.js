 "use strict";

    
    let numberOfFilm = prompt(` Сколько фильмов вы уже посмотрели`); 
    let film = prompt(`Назови один из последних просмотренных фильмов`);
    let raiting = prompt(`На сколько оцените ${film}`);

 let personalMovieDB = {
    count: numberOfFilm,
    movies: {[film]: raiting},
    actors: {},
    genres: [],
    privat: false
 };

 console.log(personalMovieDB);
