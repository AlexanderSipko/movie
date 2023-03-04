
import React from 'react';
import {Movies} from './Movies'
import {Preload} from './Preload'
import {Search} from './Search'

function Main() {

    const [movies, setMovies] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    function handler() {
        // произвольная выдача фильмов при первой загрузке страницы
        setMovies([])
        fetch(
            `http://www.omdbapi.com/?apikey=32d959c&s=top`)
            .then((res) => res.json())
            .then((json) => {
                if (json.Response === "True") {
                    setMovies(json.Search);
            }
            setLoading(true)
        })
    }

    if (movies===0) {
        handler()
    }
    
    function searchMovies(str, type='all') {
        // позволяет оставлять предыдущую выдачу в случае отсутствия выдачи
        if (str === '') {
            str = 'top'
        }

        setMovies([])
        setLoading(false)
        console.log(`http://www.omdbapi.com/?apikey=32d959c${type !== 'all' ? `&type=${type}`  : ''}&s=${str}`)
        fetch(
            `http://www.omdbapi.com/?apikey=32d959c${type !== 'all' ? `&type=${type}`  : ''}&s=${str}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.Response === "True") {
                    setMovies(json.Search)
            }
            setLoading(true)
        })
    }

    return(
        <main className="container content">
            <Search searchMovies={searchMovies}/>
                {loading? (
                     <Movies movies={movies}/>
                ): (
                    <Preload/>
                )}
        </main>
    )
} 

export {Main}