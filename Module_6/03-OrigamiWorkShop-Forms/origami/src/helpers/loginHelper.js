function loginHelper(state){
    let data = JSON.stringify(state)
		//console.log(data)
		//add our fetch api
		let resources = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: data 
		  }
		return fetch("http://localhost:9999/api/user/login",resources).then(res=>{
			//console.log(res.status);
			return res.json()
		})
}

export default loginHelper;