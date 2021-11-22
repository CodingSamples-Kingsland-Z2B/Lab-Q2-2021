import React from "react";
import links from "../data/data.json";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";

class Footer extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		console.log(links);
		return (
			<footer className="Footer">
				<ul>
					{links.map((link) => {
						return <ListItem location={link} />;
					})}
					<li className="listItem">
						<Link to="/">
							<img
								src="./img/blue-origami-bird-flipped.png"
								alt="Origami logo"
							/>
						</Link>
					</li>
				</ul>
				<p> Awesome Junior DEVS!!</p>
			</footer>
		);
	}
}

export default Footer;
