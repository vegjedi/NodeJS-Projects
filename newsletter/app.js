const express = require("express");
const bodyParser = require("body-parser");
const https = require("node:https");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static("public"));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, responde){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(firstName + lastName + email);
      });

app.listen(port, function(res){
    console.log("Listening to port 3000");
});