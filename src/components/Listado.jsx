import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

const Listado = () => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const endPoint =
			"https://api.themoviedb.org/3/discover/movie?api_key=b405f48ef4286b50e2e37b599c34f929&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
		axios.get(endPoint).then((res) => {
			const apiData = res.data;
			setMovieList(apiData.results);
		});
	}, [setMovieList]);

	console.log(movieList);

	let token = sessionStorage.getItem("token");


	return (
		<>
			{!token && <Navigate to="/" replace={true} />}

			<Helmet>
				<title>Listadito</title>
				<meta name="description" content="App Description" />
				<meta name="theme-color" content="#008f68" />
			</Helmet>

			<div className="row">
				{movieList.map((movie, idx) => {
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
	);
};

export default Listado;
