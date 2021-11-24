function logoutHelper(){
  
		//console.log(data)
		//add our fetch api
		let resources = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
            //   "Authorization":
			},
			
		  }
		return fetch("http://localhost:9999/api/user/logout",resources).then(res=>{
			console.log(res.status);
			return res.json()
		})
}

export default logoutHelper;