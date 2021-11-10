import React from "react";
import links from '../Data/data.json'
import Link from './Link'

class Footer extends React.Component{
    //todo fetch the first 11 posts to get the links to the pages
    render(){
        console.log(links)
        return(
            <footer className="Footer">
                <ul>
                    

                   {links.map((link)=> {
                       return <Link key={link} url={link} location={link} />
                   })}
                   <li className="listItem">
                        <img src="./img/blue-origami-bird-flipped.png" alt="Origami logo"/>
                    </li>
                </ul>
                <p> Awesome Junior DEVS!!</p>
            </footer>
        )
    }
}

export default Footer;