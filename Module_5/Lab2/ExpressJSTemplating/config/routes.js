// TODO: Require Controllers...
const createPOST = require("../controllers/createPOST");
const detailsGET = require("../controllers/detailsGET");
const homeGET = require("../controllers/homeGET");


module.exports = (app) => {
    // TODO...
    app.get("/",homeGET);
    app.get("/about",function(req,res){
        //about page
        //no need for conext or templating this is a stitc page.
        //technically you can store the page infor for easy editing and then templat that in, but we wont do that for this example
        res.render("about");
    });
    app.get("/create",function(req,res){
        //about page
        res.render("create");
    });
    app.post("/create",createPOST);
    app.get("/details/:id",detailsGET);
    app.get("*",function(req,res){
        //404 page
        res.render("404");
    });
};