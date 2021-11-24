// let apiURL = 'http://localhost:9999/';
import "./App.css";
import Aside from "./Components/Aside";
import Main from "./Components/Main";
import Input from "./Components/Input";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/PrivateRoute";

import Error from "./Components/FourOhFour";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
/* 
  ToDo - Dynamically Create Routes based on what posts are in the DB

*/

function App(props) {
	
	const loggedIn = props.user.loggedin;
	const notLoggedIn = !props.user.loggedin;
	console.log("Logged in ", loggedIn)
	console.log("not Logged in ",notLoggedIn)
	
	return (
		<div className="App Container">
			<Aside loggedin={loggedIn} />
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route
					path="/post"
					element={
						<PrivateRoute
							isAuth={loggedIn}
							path="post"
							redirectTo="/login"
						>
						<Input user={props.user} addPost={props.addPost} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<PrivateRoute
							isAuth={notLoggedIn}
							path="register"
							redirectTo="/"
						>
							<Register />
						</PrivateRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<PrivateRoute
							isAuth={notLoggedIn}
							path="login"
							redirectTo="/profile"
						>
							<Login updateLogin={props.updateLogin} />
						</PrivateRoute>
					}
				/>
				<Route path="/profile" element={
						<PrivateRoute
							isAuth={loggedIn}
							path="profile"
							redirectTo="/login">
						<Profile updateLogin={props.updateLogin} user={props.user} 
							username={props.user.username} numPosts={props.user.posts}/>
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
