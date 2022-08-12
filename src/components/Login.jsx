import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import catImage from "../images/cat-running.webp";

console.log(catImage);
const MySwal = withReactContent(Swal);

const Login = () => {
	const navigate = useNavigate();
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	//Handles
	const handleSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		if (email === "" || password === "") {
			MySwal.fire("Los campos no pueden estar vacios!");
			return;
		}

		if (email !== "" && !validateEmail(email)) {
			console.log("Debes escribir una direccion de Email valida!");
			return;
		}

		if (email !== "challenge@alkemy.org" || password !== "react") {
			MySwal.fire("Credenciales Invalidas!");
			return;
		}

		console.log({ email, password }, "Credenciales enviadas al back");

		axios.post("http://challenge-react.alkemy.org", { email, password }).then((res) => {
			MySwal.fire({
				icon: "success",
				title: "Tu gatito ha sido posteado correctamente!",
				width: 500,
				padding: "3em",
				color: "#716add",
				background: `url(/static/media/cat-running.dee526226c5cb884d75e.webp)
                    center center
                    no-repeat`,
				backdrop: `
                  rgba(0,0,0,0.4)
                `,
			});
			console.log(res.data);
			const tokenRecibido = res.data.token;
			localStorage.setItem("token", tokenRecibido);
			navigate("/listado");
		});

		//resetear el form al postear la data
		e.target.reset();
	};

	return (
		<div className="">
			<h2 className="text-center my-3 ">Formulario de Login</h2>
			<form onSubmit={handleSubmit}>
				<input type="email" className="form-control p-2 my-2" name="email" placeholder="Email" />
				<input type="password" className="form-control p-2 my-2" name="password" placeholder="Password" />

				{/* <div>{isEmail ? <p>Felicidades, escribiste un mail!</p> : null} </div> */}

				<button className="btn btn-outline-primary p-2 m-2" type="submit">
					Ingresar
				</button>
			</form>
		</div>
	);
};

export default Login;
