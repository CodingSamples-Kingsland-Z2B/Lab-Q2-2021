import React from "react";
import links from "../data/routes.json";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//let cookieValue = document.cookie.split("=")[1]

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

					{links
						.filter((link, index) => {
							if (this.props.loggedin) {
								return index % 2 === 0;
							} else {
								return index % 2 !== 0;
							}
						})
						.map((link) => {
							return <ListItem key={link} location={link} />;
						})}
				</ul>
			</nav>
		);
	}
}

export default Nav;
