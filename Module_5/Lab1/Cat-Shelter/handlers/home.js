const url = require("url");
const path = require("path");
const fs = require("fs");
let cats = require("../db/cats.json");

module.exports = (req,res)=>{
    let pathName = url.parse(req.url).pathname;

    if(pathName == "/" && req.method =="GET"){
        //show the home page
        
        let pagePath = path.normalize(path.join(__dirname,"../views/home/index.html"));
         fs.readFile(pagePath,(err,html)=>{
            if(err){
                console.log(err);
                res.writeHeader(404,{
                    "Content-Type":"text/plain"
                })
                res.write("404 Error HTML FILE NOT FOUND");
                res.end();
                return;
            }
            fs.readFile(path.join(__dirname, "../views/templates/cat.html"), (err, template) => {
                //console.log()

                let output = cats.map((cat)=> {
                    let option = template.toString();
                    //console.log(option)
                   let keys = Object.keys(cat);
                   for(let key of keys){
                        while(option.includes(`{{${key}}}`)){
                            option =option.replace(`{{${key}}}`,cat[key]||"");
                        }
                       
                   }
                    //console.log(option);
                    return option;
                });
                //console.log(output);
                html = html.toString().replace( "{{cats}}",output);
                res.writeHeader(200, {
                    "Content-Type": "text/html",
                });
                res.write(html);
                res.end();
            
            });
            
        });

        
        //return;
    }else{
        return false;
    }
}