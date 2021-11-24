import React from "react";
import Post from './Post';
import getPosts from "../helpers/getPosts";
//import posts from '../data/posts.json'



class Posts extends React.Component {
	//todo fetch the first 8-9 posts to get the links to the pages
	//todo - auto limi the number of posts from the fetch helper rather than from here in the Component
	constructor(props){
		super(props);
		this.state={
			posts:[]
		}
		this.addPosts = (data)=>{
			this.setState(() => {
				return{
					posts:data
				}
			})
		}
	}
	componentDidMount(){
		//console.log(this.props.user)
		getPosts(this.props.limit,this.props.user.username).then(data=>{
			this.addPosts(data);
		})
	}
	render() {
		//console.log(links);
		//console.log(this.props.user)
		let {posts} = this.state		
		return (
			<div className="Posts" >
				{posts.map((post)=>{
						return <Post key={post.id} description={post.description} author={post.author}/>
                })}
			</div>
		);
	}
}

export default Posts;