
import React from 'react';
import {Movies} from './Movies'
import {Preload} from './Preload'
import {Search} from './Search'

function Main() {

    const [movies, setMovies] = React.useState(0);

    function handler() {
        // позволяет оставлять предыдущую выдачу в случае отсутствия выдачи
        fetch(
            `http://www.omdbapi.com/?apikey=32d959c&s=matrix`)
            .then((res) => res.json())
            .then((json) => {
                if (json.Response === "True") {
                    setMovies(json.Search)
            } else {
                setMovies([])
            }
        })
    }

    if (movies===0) {
        handler()
    }
    
    function searchMovies(str) {
        // позволяет оставлять предыдущую выдачу в случае отсутствия выдачи
        if (str === '') {
            return null
        }

        setMovies([])
        fetch(
            `http://www.omdbapi.com/?apikey=32d959c&s=${str}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.Response === "True") {
                    setMovies(json.Search)
            } else {
                setMovies([])
            }
        })
    }

    return(
        <main className="container content">
            <Search searchMovies={searchMovies}/>
                {movies.length > 0 ?<Movies movies={movies}/>:
            <Preload/>}
        </main>
    )
}

export {Main}