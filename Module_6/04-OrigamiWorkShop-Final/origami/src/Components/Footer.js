import React from "react";
import links from "../data/routes.json";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";

class Footer extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<footer className="Footer">
				<ul>
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
