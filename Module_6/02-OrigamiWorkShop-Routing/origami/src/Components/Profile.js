import Posts from "./Posts";

function Profile(props) {
	return (
		<main className="Profile">
			<img src="./img/profile-default.jpg" alt="Profile" />
			<div className="personal-info">
                <p><span>Email: </span>
                    {props.email}
                </p>
                <p><span>Posts: </span>
                    {props.numPosts}
                </p>
            </div>
			<h2>Last 3 Posts on your wall</h2>
			<Posts limit="3" />
		</main>
	);
}

export default Profile;
