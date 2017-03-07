var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalName", function (req, res) {
    var animal = req.params.animalName;
    var sounds = {
        pig: "Oink!",
        cow: "Moo!",
        dog: "Woof woof!",
        cat: "I hate you human",
        goldfish: "..."
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says, \"" + sound + "\"");
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, process.env.IP, function () {
    console.log("Server Started...");
});

