import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const isEmail = validateEmail(email);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<>
			<h2>Formulario de Login</h2>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" placeholder="Email" onChange={handleEmail} value={email} />
				<input type="password" name="password" placeholder="Password" onChange={handlePassword} value={password} />

				<div>{isEmail ? <p>Felicidades, escribiste un mail!</p> : null} </div>

				<button disabled={!isEmail} type="submit">
					Ingresar
				</button>
			</form>
		</>
	);
};

export default Login;
