import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Detalle = () => {
	const [movie, setMovie] = useState(null);
	const MySwal = withReactContent(Swal);

	let token = sessionStorage.getItem("token");

	let query = new URLSearchParams(window.location.search);
	let movieID = query.get("movieID");
	console.log(movieID);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${movieID}?api_key=b405f48ef4286b50e2e37b599c34f929&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
			)
			.then((res) => {
				const movieData = res.data;
				setMovie(movieData);
			})
			.catch((e) => MySwal.fire(<h2>Ups, justo esa película no la tenemos :(</h2>));
	}, [movieID]);

	return (
		<>
			{!token && <Navigate to="/" />}
			{!movie && <h2>Cargando...</h2>}
			{movie && (
				<>
					<h2>Título: {movie.title}</h2>
					<div className="row">
						<div className="col-4">
							<img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
						</div>
						<div className="col-8">
							<h5>Detalle de la Pelicula</h5>
							<h5>Fecha de Estreno: {movie.release_date}</h5>
							<h5>Reseña:</h5>
							<p>{movie.overview}</p>
							<h5>Rating: {movie.vote_average}</h5>

							<h5>Generos:</h5>
							<ul>
								{movie.genres?.map((genero) => (
									<li key={genero.id}>{genero.name}</li>
								))}
							</ul>
						</div>
						<button className="p-2 m-3">
							<Link to="/listado" className="px-5">
								Volver a Películas
							</Link>
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default Detalle;
