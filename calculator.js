
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // urlencoded: handle form data

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1); // form data interpreted as text -> need to be changed to Number
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result is " + result);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

