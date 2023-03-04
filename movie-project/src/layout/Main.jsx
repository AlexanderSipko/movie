
import React from 'react';
import {Movies} from './Movies'
import {Preload} from './Preload'
import {Search} from './Search'

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {

    const [movies, setMovies] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    function handler() {
        // произвольная выдача фильмов при первой загрузке страницы
        setMovies([])
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=top`)
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
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}${type !== 'all' ? `&type=${type}`  : ''}&s=${str}`)
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