import React from "react";
import loginHelper from "../helpers/loginHelper";

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			username:'',
			password:''
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	//todo fetch the first 11 posts to get the links to the pages
	changeHandler(event) {
		//console.log(event.target)
		if(event.target.name==="username"){
			this.setState({username: event.target.value});	
		}else if(event.target.name==="password"){
		this.setState({password: event.target.value});
		}
	}
	submitHandler(event) {
		loginHelper(this.state)
		.then(data=>{
			//console.log(data);
			document.cookie = `x-auth-token=`+JSON.stringify(data.token);
			document.cookie = `user={"username":"${data.user.username}","posts":${data.user.posts.length}}`
			//console.log(data.user.posts)
			this.props.updateLogin({
				loggedin: data.token,
				username: data.user.username,
				posts:data.user.posts.length
			})
		})
		
		//add the updateLogin function
		//need to save the email and the # of posts from the user
		event.preventDefault();
		// Doing some AJAX with the data...
		//run the updateLogin method
	}
	

	render() {
		//console.log(links);
		const {username,password} = this.state
		//console.log(this.state)
		return (
			<main className="Login">
				<h1>Login Page</h1>
				<form onSubmit={this.submitHandler}>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input name="username" type="text" value={username}
                 onChange={this.changeHandler} />
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input name="password" type="password" value={password}
                 onChange={this.changeHandler} />
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