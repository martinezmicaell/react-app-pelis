import React from "react";
import { Link } from "react-router-dom";

//Components
import Buscador from "./Buscador";

const Header = () => {
	return (
		<>
			<header className="">
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<div className="container">
						<Link  className="navbar-brand" to="/">Pelis 24/7</Link>
						<button
							className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
							    <span className="navbar-toggler-icon"></span>
						</button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
							    <li className="nav-item">
								    <Link className="nav-link" to="/">Home</Link>
							    </li>
							    <li className="nav-item">
								    <Link className="nav-link" to="listado">Listado</Link>
							    </li>
							    <li className="nav-item">
								    <Link className="nav-link" to="contacto">Contacto</Link>
							    </li>
						    </ul>
                        </div>

                        <Buscador />
					</div>
				</nav>

			</header>
		</>
	);
};

export default Header;
