const jwt = require("jsonwebtoken");
// info to send with the token
let payload = {
    _id:"userid",
    username:"username"
}
let options ={
    expiresIn: '2d'
}
//this is the private ket genrally we stroe this in the config.js or in the env variables
let secret = "My JSWT Secret/password";


const token = jwt.sign(payload,secret,options);

console.log(token);