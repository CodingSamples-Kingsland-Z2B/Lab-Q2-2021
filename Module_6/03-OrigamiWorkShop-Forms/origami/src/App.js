// let apiURL = 'http://localhost:9999/';
import "./App.css";
import Aside from "./Components/Aside";
import Main from "./Components/Main";
import Input from "./Components/Input";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

import Error from "./Components/FourOhFour";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
/* 
  ToDo - Dynamically Create Routes based on what posts are in the DB

*/

function App(props) {
	return (
		<div className="App Container">
			<Aside loggedin={props.user.loggedin} />
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/post" element={<Input />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/login"
					element={<Login updateLogin={props.updateLogin} />}
				/>
				<Route
					path="/profile"
					element={
						<Profile
							updateLogin={props.updateLogin}
							username={props.user.username}
							numPosts={props.user.posts}
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
