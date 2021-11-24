import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import App from "../App";
// ????

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
        let cookies =document.cookie.split("; ")// ["cookiename= value",'cookiename= value']
        //console.log(document.cookie)
        let login="";
        let user={
            username:"",
            posts:0
        };
       
        if(cookies.length>1){
            login = cookies.find((cookie)=> {
                return cookie.includes("x-auth-token")
            });
            user = cookies.find((cookie)=> {
                return cookie.includes("user")
            });
            login = login.split("=")[1];
            user = JSON.parse(user.split("=")[1]);
            //console.log("login",login)
            //console.log("user",user);
        }
        
		this.state = {
			loggedin: (login)?true:false,
			username: user.username,
			posts: user.posts,
			token: login,
		};
		this.updateLogin = this.updateLogin.bind(this);
		this.addPost = this.addPost.bind(this);
	}
	addPost(){
		console.log("added one post")
		this.setState((prevState) => {
			return{
				posts: prevState.posts +1
			}	
		})
	}
	updateLogin(logInfo) {
		let user;
		if (logInfo) {
			user = logInfo;
		}
		this.setState(() => {
			if (user) {
                
				return {
					loggedin: user.loggedin ? true : false,
					username: user.username,
					posts: user.posts,
					token: user.loggedin,
				};
			} else {
				return {
					loggedin: false,
					username: "",
					posts: 0,
					token: "",
				};
			}
		});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Nav loggedin={this.state.loggedin} />

				<App
					user={this.state}
					updateLogin={this.updateLogin}
					addPost ={this.addPost}
				/>

				<Footer loggedin={this.state.loggedin} />
			</div>
		);
	}
}
export default LoginCheck;
