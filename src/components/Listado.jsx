import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Listado = () => {

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=b405f48ef4286b50e2e37b599c34f929&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data;
                setMovieList(apiData.results);
            })
    }, [setMovieList])

    console.log(movieList)


	let token = localStorage.getItem("token");

	return (
		<>
			{!token && <Navigate to="/" replace={true} />}
			<div className="row">

            {movieList.map((movie, idx) => {
                return (
                    <div key={idx} className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <Link to="/" className="btn btn-primary">
                                Go somewhere
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })}

        </div>

		</>
	);
};

export default Listado;
