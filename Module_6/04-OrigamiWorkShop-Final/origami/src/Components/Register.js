import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function isNewUser(username){
	const userURL = "http://localhost:9999/api/user/"
	return fetch(userURL).then(res=>res.json()).then(users=>{
		let hasUser = users.find(user=> {
			return user.username === username;
		});
		if(hasUser=== undefined){
			return true;
		}
		return false;
	})
}
function registerUser(username,password){
	const url ="http://localhost:9999/api/user/register"
	let data = JSON.stringify({
		username,password
	})
	let resources = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: data,
	};
	return fetch(url,resources).then(res=>res.json())


}

function Register(props) {
	const navigate = useNavigate()
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [repass, setRePass] = useState("");
	const [error, setError] = useState("");
	//todo fetch the first 11 posts to get the links to the pages
	
	const submitHandler= (event)=> {
        event.preventDefault();
        if(password !== repass){
			setError("Both Passwords must be the same!");
			return;
		}
		isNewUser(username).then(bool=>{
			if(!bool){
				setError("Need A Unique username");
				return;
			}
			registerUser(username,password).then(res=>{
				console.log(res);
				navigate("/login")
			})
		})
		
	};
		//console.log(links);
		return (
			<main className="Register">
				<h1>Register Page</h1>
				<form onSubmit={submitHandler}>
					<div className="form-control">
						<label  htmlFor="username">Username</label>
						<input  name="username"  type="text" value= {username} onChange={(e)=>{setUsername(e.target.value)}}/>
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
					</div>
					<div className="form-control">
						<label htmlFor="repass">Re-Password</label>
						<input name="repass" type="password" value ={repass} onChange={(e)=>{setRePass(e.target.value)}}/>
						<div>{error}</div>
					</div>
                    <div className="form-control">
    					<button type="submit">Register</button>
                    </div>
				</form>
			</main>
		);
	
}

export default Register;
