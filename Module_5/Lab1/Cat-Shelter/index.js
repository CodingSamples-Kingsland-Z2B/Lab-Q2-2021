const http = require("http");
const path = require("path");
// const url = require("url");
// const fs = require("fs");
const port = 3000; //port should be a number between 3000 and 9999
// common ports are 3000, 3333, 5000, 8000, 8080, 9000
let handlers = require("./handlers");


http.createServer((req,res)=>{
  //console.log(req.url);
  for(let handler of handlers){
      if(handler(req,res)){
          break;
      }
  }
}).listen(port);




/* 
routes
home (/)
Add Breed ('/addBreed') and post
Add Cat ('/addCat'), and post
Edit Cat ('/editCat/:id'), and post(PUT/PATCH)
Front End (views) (GET) || BackEnd HTTP Server (GET|POST) || DB (GET|POST|PUT/PATCH|DELETE)
*/