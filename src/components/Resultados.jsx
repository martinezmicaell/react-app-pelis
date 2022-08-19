import React, {useState, useEffect} from 'react'
import axios from 'axios';
import VisualizeMovies from './VisualizeMovies';

const Resultados = ({ addOrRemoveFromFavs }) => {
    const [movieResults, setMovieResults] = useState([]);

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('keyword')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b405f48ef4286b50e2e37b599c34f929&language=es-ES&page=1&include_adult=false&query=${keyword}`)
            .then(res => {
                setMovieResults(res.data.results)
            })

    })



  return (
    <>
        <h2>Buscaste: <em>{keyword}</em></h2>
        <div className='row'>
            {movieResults.map((movie) => {
                return (
                    movie.poster_path && <VisualizeMovies movie={movie} />
                )
			})}
        </div>
    </>
  )
}

export default Resultados