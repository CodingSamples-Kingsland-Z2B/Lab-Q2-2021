import React from "react";

class Register extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<main className="Register">
				<h1>Register Page</h1>
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
						<label for="rePassword">Re-Password</label>
						<input name="rePassword" type="password" />
					</div>
                    <div className="form-control">
    					<button type="submit">Register</button>
                    </div>
				</form>
			</main>
		);
	}
}

export default Register;
