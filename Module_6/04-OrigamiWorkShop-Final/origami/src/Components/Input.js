
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import sendPost from "../helpers/sendPost";




function Input(props) {
    const navigate = useNavigate()
	const [post, setPost] = useState("");
	const changeHandler=(event) => {
		//console.log(event.target)
		setPost(event.target.value);
	}
	const submitHandler= (event)=> {
        event.preventDefault();
        sendPost(post,props.user).then(data=>{
            props.addPost();
   
        })
		navigate("/")
	};
	return (
			<main className="Input">
				<h1>Share Your Thoughts</h1>
				<form onSubmit={submitHandler}>
					<textarea
						name="post"
						value={post}
						onChange={changeHandler}
					></textarea>
					<button type="submit">Post</button>
				</form>
				<h2>Last 3 Posts on your wall</h2>
				<Posts user={props.user} limit="3" />
			</main>
		);
	}

export default Input;


// class Input extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			post: "",
//             reRoute:false
// 		};
// 		this.changeHandler = this.changeHandler.bind(this);
// 		this.submitHandler = this.submitHandler.bind(this);
// 	}
// 	changeHandler(event) {
// 		//console.log(event.target)

// 		this.setState({ post: event.target.value });
// 	}
// 	submitHandler(event) {
        
//         sendPost(this.state.post,this.props.user).then(data=>{
//             this.props.addPost();
//             this.setState({  reRoute:true });
           
//         })
// 		event.preventDefault();
// 	}
// 	render() {
//         if(this.state.reRoute){
//             <Navigate to="/" />
//         }
// 		let { post } = this.state;
//         console.log("render");
// 		return (
// 			<main className="Input">
// 				<h1>Share Your Thoughts</h1>
// 				<form onSubmit={this.submitHandler}>
// 					<textarea
// 						name="post"
// 						value={post}
// 						onChange={this.changeHandler}
// 					></textarea>
// 					<button type="submit">Post</button>
// 				</form>
// 				<h2>Last 3 Posts on your wall</h2>
// 				<Posts user={this.props.user} limit="3" />
// 			</main>
// 		);
// 	}
// }
