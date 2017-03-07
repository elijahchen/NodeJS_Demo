var express = require("express");
var app = express();

//Tells express to serve this directory
app.use(express.static("public"));
//Tells express to automatically include .ejs extensions
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/posts", function (req, res) {
   var posts = [
       {title: "FIRST POST!!", author: "Suzy"},
       {title: "Donald Trump reveals it all!", author: "OfficialDT"},
       {title: "Dalai Lama will not reincarnate", author: "REAL_DL"},
   ];

   res.render("posts.ejs", {posts: posts});
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.listen(3000, process.env.IP, function () {
    console.log("Server Started");
});