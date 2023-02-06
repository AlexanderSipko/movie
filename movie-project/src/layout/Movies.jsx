import React from 'react'
import {Movie} from './Movie'

function Movies(props) {

  const {movies} = props
    
    return(
        <div className="movies">  
          {movies?movies.map((movies) =>
             <Movie 
                key={movies.imdbID}
                {...movies} />)
          :null}
        </div>
    )
}

export {Movies}