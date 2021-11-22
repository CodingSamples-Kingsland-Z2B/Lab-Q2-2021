import React from "react";
import Post from './Post';
import posts from '../data/posts.json'

class Posts extends React.Component {
	//todo fetch the first 8-9 posts to get the links to the pages
	//todo - auto limi the number of posts from the fetch helper rather than from here in the Component
	render() {
		//console.log(links);
		let limit;
		if(this.props.limit != undefined){
			limit = Number(this.props.limit)
		}
		return (
			<div className="Posts" >
				{posts.map((post,index)=>{
					if(!limit||index<limit){
						return <Post description={post.description} author={post.author}/>
					}		
                })}
			</div>
		);
	}
}

export default Posts;