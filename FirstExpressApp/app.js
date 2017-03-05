var express = require("express");
var app = express();

// "/" => "Hi there!", { / } indicates root directory
app.get("/", function(request, response) {
    response.send("Hi there!");
});

app.get("/bye", function (request, response) {
    response.send("Bye!");
})

app.get("/dog", function (request, response) {
    console.log("Someone made a request to /dog");
    response.send("Woof!")
})

//process.env.PORT, process.env.IP
app.listen(3000, process.env.IP, function () {
    console.log("Server has started!!!");
});