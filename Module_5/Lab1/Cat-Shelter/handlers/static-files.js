const url = require("url");
const path = require("path");
const fs = require("fs");

function getContentType(url){
    //css
    if(url.endsWith("css")){
        return "text/css";
    }else if(url.endsWith("js")){
        //js
        return "text/javascript";
    }else if(url.endsWith("png")||url.endsWith("ico")){
        //png |jpg |gif | ico
        return "image/png";
        //||url.endsWith("jpeg")
    }else if(url.endsWith("jpg")||url.endsWith("jpeg")){
        //png |jpg |gif | ico
        return "image/jpeg";
        //||url.endsWith("jpeg")
    }else if(url.endsWith("html")){
        //js
        return "text/html";
    }
}

module.exports = (req,res)=>{
    let pathName = url.parse(req.url).pathname;
    
    if(pathName.startsWith("/content") && req.method =="GET"){
        //console.log(pathName);
        //console.log(`I'm sending the static file ${pathName}`);
        let filePath = path.normalize(path.join(__dirname,".."+pathName));
        //console.log(filePath);
        fs.readFile(filePath,(err,staticContent)=>{
            if(err){
                //console.log(err);
                res.writeHeader(404,{
                    "Content-Type":"text/plain"
                })
                res.write(`404 Error ${getContentType(pathName)} FILE NOT FOUND`);
                res.end();
                return;
            }
            res.writeHeader(200,{
                "Content-Type":getContentType(pathName)
            })
            res.write(staticContent);
            res.end();
            
        });
    }else{
        return false;
    }

}