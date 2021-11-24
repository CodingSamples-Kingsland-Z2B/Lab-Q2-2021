import React from "react";
import links from "../data/routes.json";
import ListItem from "./ListItem";
//import { Link } from "react-router-dom";

class Aside extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<aside className="Aside">
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
				</ul>
			</aside>
		);
	}
}

export default Aside;
