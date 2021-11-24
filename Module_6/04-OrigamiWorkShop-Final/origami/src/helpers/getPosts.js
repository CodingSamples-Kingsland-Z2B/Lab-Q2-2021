

function getPosts(limit=0,user =""){
	limit =Number(limit);
	let url = 'http://localhost:9999/api/origami/';
	let userURL = 'http://localhost:9999/api/user/';
	return fetch(url).then(res=>{
		return res.json()
	})
	.then(data=>{
		return fetch(userURL).then(res=>res.json())
		.then(users=>{
			let posts = data.map(post=>{
				let name = users.find(user=>{
					return user._id === post.author;
				})
				return {
					id:post._id,
					author:name.username,
					description:post.description
				}
			});
			posts.reverse()
			if(limit>0){
				console.log(posts);
				console.log(user);
				posts= posts.filter(post=>{
					return post.author === user; 
				}).slice(0,limit);
			}

			return posts;
		});
	})
}
export default getPosts;