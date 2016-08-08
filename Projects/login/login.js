var express = require('express');
var app = express();
app.get('/', function(request, response) {
    response.sendFile("index.html");
});
app.get('/cheese', function (request, response) {
    response.send("hello cheese");
});
app.listen(process.env.PORT, function(){
    console.log("listening on port %s!", process.env.PORT);
});
//process.env.PORT defaults to 8080
//8081 -> https://<workspacename>-<username>.c9users.io:8081 //     https://parkerhgordon-github-io-geffro2.c9users.io, geffro2 is confirmed, I think the workspace is right?.
//node app.js
//curl http://localhost:3000/
//control+c interrupts current process, use to close server
//node Projects/login/login.js