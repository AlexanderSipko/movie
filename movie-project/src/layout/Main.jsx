
import React from 'react';
import {Movies} from './Movies'

function Main() {
    const [List, setList] = React.useState([]);
    const [Load, setLoad] = React.useState(false);
    const inputSearch = React.useRef('');

    function handler() {
        setLoad(false)
            fetch(
                `http://www.omdbapi.com/?apikey=32d959c&s=${inputSearch.current.value}`)
                .then((res) => res.json())
                .then((json) => {
                    setList(json)
                    setLoad(true)
                })
    }

    function handlerClear() {
        setLoad(false)
        inputSearch.current.value = ''
    }

    return(
        <main className="container content">
            <input onChange={handler} type="text" name='movie' ref={inputSearch}/>
            <a href="!#" onClick={handlerClear} className="waves-effect waves-light btn-small">Clear search</a>
            {Load?<Movies List={List} Load={Load}/>:'Load page...'}
        </main>
    )
}

export {Main}