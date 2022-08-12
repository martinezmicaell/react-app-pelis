import { Link, Navigate } from "react-router-dom";

const Listado = () => {
	// const navigate = useNavigate();
	let token = localStorage.getItem("token");

	return (
		<>
			{!token && <Navigate to="/" replace />}

			<div className="row">
				<div className="col-4">
					<div className="card">
						<img className="card-img-top" src="..." alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<a href="/" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div className="card">
						<img className="card-img-top" src="..." alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<a href="/" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div className="card">
						<img className="card-img-top" src="..." alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<a href="/" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>

				<div className="col-4">Peli 2</div>
				<div className="col-4">Peli 3</div>
			</div>
		</>
	);
};

export default Listado;
