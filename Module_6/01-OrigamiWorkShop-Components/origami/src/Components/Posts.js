import React from "react";
import Post from './Post';
import posts from '../Data/posts.json'

class Posts extends React.Component {
	//todo fetch the first 11 posts to get the links to the pages
	render() {
		//console.log(links);
		return (
			<div className="Posts" >
				{posts.map((post)=>{
                    return <Post text={post.text} author={post.author}/>
                })}
			</div>
		);
	}
}

export default Posts;