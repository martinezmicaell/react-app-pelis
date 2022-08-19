import React from 'react'
import { Link } from 'react-router-dom'


const VisualizeMovies = ({ movie: { title, overview, id, poster_path} }) => {

    const addOrRemoveFromFavs = (e) => {
        const card = e.target.parentElement;

        const title = card.querySelector('h5').innerText;
        const imgURL = card.querySelector('img').getAttribute('src');
        const overview = card.querySelector('p').innerText;

        const movieData = {
            title,
            imgURL,
            overview
        }
        console.log(movieData)
    }

    return (
    <div key={id} className="col-4 my-4">
    <div className="card">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="..." />
        <button onClick={addOrRemoveFromFavs} className="favourite-btn">♥️</button>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{overview.substring(0, 100)}...</p>
            <Link to={`/detalle?movieID=${id}`} className="btn btn-primary">
                View Detail
            </Link>
        </div>
    </div>
</div>)
}

export default VisualizeMovies