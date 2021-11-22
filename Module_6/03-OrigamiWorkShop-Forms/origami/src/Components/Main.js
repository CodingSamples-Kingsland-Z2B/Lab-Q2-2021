import React from "react";
import Posts from './Posts';


class Main extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<main className="Main" >
				<h1>Publications</h1>
                <Posts/>
			</main>
		);
	}
}

export default Main;