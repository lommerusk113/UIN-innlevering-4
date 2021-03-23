import React, { useState } from 'react'
import Movie from "./Movie"
import {getMovies} from '../utils/movieService'

const Movies = () => {
    
    const [data, setdata] = useState([])

    const handleclick = async () =>{
        const movie = await getMovies();
        console.log(movie)
        setdata(movie)
    }
    return (
        <div>
            <button id="btn" onClick={handleclick}>Knapp</button>
            {data?.length > 0 ? data.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>No Movies</p>}
        </div>
    )
}

export default Movies
