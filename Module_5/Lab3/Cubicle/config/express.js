const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");


module.exports = (app) => {
    
    //Setup the view engine
    app.engine('.hbs', handlebars({
        extname: '.hbs'
      }));
    app.set('view engine', '.hbs');
    // Setup the body parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    // Setup the static files
    app.use(express.static('static'));
    app.use('/static', express.static('static'));
    app.use('/static', express.static(__dirname + '/static'));
    //set up cookie parser
    app.use(cookieParser())


    
};