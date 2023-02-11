
import React from 'react';
import {Movies} from './Movies'
import {Preload} from './Preload'
import {Search} from './Search'

function Main() {

    const [movies, setMovies] = React.useState([]);
    
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
    
    
    function searchMovies(str) {
        // позволяет оставлять предыдущую выдачу в случае отсутствия выдачи
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