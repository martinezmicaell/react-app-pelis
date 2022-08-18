import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

//Components
import VisualizeMovies from "./VisualizeMovies";

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
				{movieList.map((movie, idx) =>  movie.poster_path && <VisualizeMovies movie={movie} idx={idx} /> )}
			</div>
		</>
	);
};

export default Listado;
