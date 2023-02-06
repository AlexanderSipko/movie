
import React from 'react';
import {Movies} from './Movies'

function Main() {
    const [movies, setMovies] = React.useState([]);
    const inputSearch = React.useRef('');

    function handler() {
        // позволяет оставлять предыдущую выдачу в случае отсутствия выдачи
        fetch(
            `http://www.omdbapi.com/?apikey=32d959c&s=${inputSearch.current.value}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.Response === "True") {
                    setMovies(json.Search)
            } else {
                setMovies([])
            }
        })
    }

    function handlerClear() {
        inputSearch.current.value = ''
        setMovies([])
    }

    return(
        <main className="container content">
            <input onChange={handler} type="text" name='movie' ref={inputSearch}/>
            <a href="!#" onClick={handlerClear} className="waves-effect waves-light btn-small">Clear search</a>
            {movies.length > 0 ?<Movies movies={movies}/>:<h2>Load page...</h2>}
        </main>
    )
}

export {Main}