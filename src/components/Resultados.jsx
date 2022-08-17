import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const Resultados = () => {
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
            {movieResults.map((movie, idx) => {
				const { title, overview } = movie;

				return (
					<div key={idx} className="col-4 my-4">
						<div className="card">
							<img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="..." />
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<p className="card-text">{overview.substring(0, 100)}...</p>
								<Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">
									View Detail
								</Link>
							</div>
						</div>
					</div>
				);
			})}
        </div>
    </>
  )
}

export default Resultados