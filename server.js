// List Dependencies(npm packages)

var express= require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Inform node that we are creating an express server.

var app= express();

//Set initial port to use later in our listener.

var PORT= process.env.PORT || 8080;

//Set up Express to hadle data parsing

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

//Route server to route.js files.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Create app.listen to start server

app.listen(PORT,function(){
    console.log("App listening on PORT:" + PORT);
});
