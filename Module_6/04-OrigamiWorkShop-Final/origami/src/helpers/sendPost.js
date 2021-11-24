function sendPost(description, activeUser) {
	let url = "http://localhost:9999/api/origami/";
    let userURL = 'http://localhost:9999/api/user/';
		
    return fetch(userURL).then(res=>res.json()).then(users=>{
        let user = users.find(user=> {
            return user.username === activeUser.username;
        });
        let data = JSON.stringify({
            description,
            author: user._id,
        });
        console.log(activeUser.token)
        let resources = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+ activeUser.token
            },
            body: data,
        };
        return fetch(url,resources).then(res=>res.json())

    })

}
export default sendPost;