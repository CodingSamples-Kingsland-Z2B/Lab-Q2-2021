import Posts from "./Posts";

function Profile(props) {
	return (
		<main className="Profile">
			<img src="./img/profile-default.jpg" alt="Profile" />
			<div className="personal-info">
                <p><span>Username: </span>
                    {props.username}
                </p>
                <p><span>Posts: </span>
                    {props.numPosts}
                </p>
				<p><button onClick={()=>{
					let cookies =document.cookie.split("; ")
					let token = cookies.find((cookie)=> {
						return cookie.includes("x-auth-token")
					}).split("=")[1];
					
					console.log(token)
					let resources = {
						method: 'POST',
						headers: {
						  'Content-Type': 'application/json',
						   "Authorization": "Bearer "+ token
						},
						body:""
					  }
					return fetch("http://localhost:9999/api/user/logout",resources).then(res=>{
						console.log(res.status);
						console.log(res.body)
						return res.json()
					}).then(data=>{
						console.log(data)
						document.cookie = `x-auth-token=`;
						document.cookie = `user={"username":"","posts":0}`
						props.updateLogin({
							loggedin: "",
							username: "",
							posts:0
						})
					})
				}}>Logout</button></p>
            </div>
			<h2>Last 3 Posts on your wall</h2>
			<Posts limit="3" />
		</main>
	);
}

export default Profile;
