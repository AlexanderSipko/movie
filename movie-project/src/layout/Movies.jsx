import React from 'react'
import {Movie} from './Movie'

function Movies(props) {

  const {movies = []} = props
    
    return(
        <div className="movies">  
          {movies.length > 0 ? (movies.map((movies) =>
             <Movie 
                key={movies.imdbID}
                {...movies} />)) : (
                  <h4>Nothing to show</h4>
                )}
        </div> 
    )
}

export {Movies}