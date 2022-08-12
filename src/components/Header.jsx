import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="p-3">
			<nav className="w-100">
				<ul className="d-flex justify-content-around">
					<li className="">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/listado">Listado</Link>
					</li>
					<li>
						<Link to="/contacto">Contacto</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
