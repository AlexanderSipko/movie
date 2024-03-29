
import React from 'react';
import {Movies} from './Movies'

class MainClass extends React.Component {

    state = {
        movies:[]
    }

    componentDidMount() {
        setLoad(false)
            fetch(
                `http://www.omdbapi.com/?apikey=32d959c&`)
                .then((res) => res.json())
                .then((json) => {
                    setMovies(json.Search)
                    setLoad(true)
                })
    }

    const [movies, setMovies] = React.useState([]);
    const [Load, setLoad] = React.useState(false);
    const inputSearch = React.useRef('');

    function handler() {
        setLoad(false)
            fetch(
                `http://www.omdbapi.com/?apikey=32d959c&s=${inputSearch.current.value}`)
                .then((res) => res.json())
                .then((json) => {
                    setMovies(json.Search)
                    setLoad(true)
                })
    }

    function handlerClear() {
        setLoad(false)
        inputSearch.current.value = ''
    }

    render() {
        return(
            <main className="container content">
                <input onChange={handler} type="text" name='movie' ref={inputSearch}/>
                <a href="!#" onClick={handlerClear} className="waves-effect waves-light btn-small">Clear search</a>
                {Load?<Movies movies={movies} Load={Load}/>:'Load page...'}
            </main>
        )
    }
}

export {MainClass}