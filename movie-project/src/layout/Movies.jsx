import React from 'react';
import {Movie} from './Movie'

function Movies(props) {
    
    return(
        <div className="movies">  
          {props.List.Search?props.List.Search.map((item) =>
            {return <Movie 
                key={item.imdbID}
                title={item.Title}
                type={item.Type}
                year={item.Year} 
                img={item.Poster} /> })
          :null}
        </div>
    )
}

export {Movies}