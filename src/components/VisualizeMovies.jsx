import React from 'react'
import { Link } from 'react-router-dom'


const VisualizeMovies = ({movie: { title, overview, id, poster_path}}, {idx}) => {

    return (
    <div key={idx} className="col-4 my-4">
    <div className="card">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="..." />
        <button className="favourite-btn">♥️</button>
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