import React from 'react';
import {Movie} from './Movie'

function Movies() {

    const [list, setList] = React.useState();
    const [Load, setLoad] = React.useState(false);

    function handler() {
        setLoad(false)
        fetch(
            "http://www.omdbapi.com/?apikey=32d959c&s=matrix")
            .then((res) => res.json())
            .then((json) => {
                setList(json)
                setLoad(true)
            })
    }
    
    return(
        <dev className="movies">
            <a href="!#" onClick={handler} className="waves-effect waves-light btn-small">Button</a>
            {Load? list.Search.map((item) =>
                {return <Movie title={item.Title} year={item.Year} img={item.Poster} /> }):'Load'}
        </dev>
    )
}

export {Movies}