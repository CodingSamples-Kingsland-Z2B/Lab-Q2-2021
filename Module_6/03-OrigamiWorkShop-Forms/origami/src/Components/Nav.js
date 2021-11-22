import React from "react";
import links from "../data/data.json";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		console.log(links);
		return (
			<nav className="Navigation" style={{ position: "fixed" }}>
				<ul>
					<li className="listItem">
						<Link to="/">
							<img
								src="./img/white-origami-bird.png"
								alt="Origami logo"
							/>
						</Link>
					</li>

					{links.map((link) => {
						return <ListItem location={link} />;
					})}
				</ul>
			</nav>
		);
	}
}

export default Nav;
