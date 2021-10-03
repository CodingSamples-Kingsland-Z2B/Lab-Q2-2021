const static = require("./static-files");
const homeHandler = require("./home");
const cats = require("./cats");

module.exports = [static,homeHandler,cats];

// module.exports= (req,res)=>{
//     let pathName = url.parse(req.url).pathname;

//     if(pathName == "/" && req.method =="GET"){
//         //show the home page
//     }
// }

