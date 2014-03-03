var http = require("http");
var url = require("url");

function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Received request for " + pathname);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello SidGod");
    res.end();
}

http.createServer(onRequest).listen(process.env.PORT);

console.log("Started HTTP server at port = " + process.env.PORT);