var express = require("express");
var app = express();

//ORDER OF ROUTES IS VERY IMPORTANT
//IF ANY CALLBACK HAS BEEN TRIGGERED, IT IS CONSIDERED HANDLED!!

// "/" => "Hi there!", { / } indicates root directory
app.get("/", function(request, response) {
    response.send("Hi there!");
});

app.get("/bye", function (request, response) {
    response.send("Bye!");
});

app.get("/dog", function (request, response) {
    console.log("Someone made a request to /dog");
    response.send("Woof!")
});

//Pattern matching, will try to match a route after /r/..
app.get("/r/:subredditName", function (request, response) {
    // console.log(request); // params: { subredditName: 'home' }
    var subreddit = request.params.subredditName;
    response.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

//Further limitations of pattern matching, following /
app.get("/r/:subredditName/comments/:id/:title/", function (request, response) {
    response.send("WELCOME TO THE COMMENTS PAGE!")
});

//ERROR or route that is not expected, "PAGE NOT FOUND"
app.get("*", function (request, response) {
    response.send("ASTERISK!");
});

//process.env.PORT, process.env.IP
app.listen(3000, process.env.IP, function () {
    console.log("Server has started!!!");
});

//npm install (package_name) --save
//This will install the dependencies