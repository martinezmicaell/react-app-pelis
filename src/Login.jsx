import React from "react";

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		if (validateEmail(email)) {
			console.log("Es un mail!");
		}
		// if (email === "" || password === "") return console.log("Los campos no deben estar vacios");
		// console.log({ email, password });
	};

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	return (
		<>
			<h2>Formulario de Login</h2>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Ingresar</button>
			</form>
		</>
	);
};

export default Login;
