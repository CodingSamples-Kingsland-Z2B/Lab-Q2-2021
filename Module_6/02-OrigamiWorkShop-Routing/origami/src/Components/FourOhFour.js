import React from "react";

class Error extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<main className="FourOFour">
				<h1>Somthing Went Wrong</h1>
				<img src="./img/404.png" alt="404 page" />
			</main>
		);
	}
}

export default Error;
