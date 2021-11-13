import React from "react";

class Login extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<main className="Login">
				<h1>Login Page</h1>
				<form >
					<div className="form-control">
						<label for="email">Email</label>
						<input name="email" type="text" />
					</div>
					<div className="form-control">
						<label for="password">Password</label>
						<input name="password" type="text" />
					</div>
					<div className="form-control">
    					<button type="submit">Login</button>
                    </div>
				</form>
			</main>
		);
	}
}

export default Login;