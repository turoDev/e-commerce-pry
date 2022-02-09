import React, { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const checkUser = () => {
		console.log(email);
		console.log(password);
	};

	return (
		<div className="div-container">
			<div className="wrapper fadeInDown">
				<label name="Email">Email </label>
				<input type="password" onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" spellCheck="false" />

				<label name="password">Password </label>
				<input type="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••••" spellCheck="false" />

				<input type="submit" value="Sign in" onClick={() => checkUser()} />

				<div className="mb-3 row">
					<label className="col-sm-2 col-form-label">Password</label>
					<div className="col-sm-10">
						<input type="password" className="form-control" />
					</div>
				</div>
			</div>
		</div>
	);
}
