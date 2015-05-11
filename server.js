/**
 * Created by navia on 2015/5/8.
 */
var http = require("http");
http.createServer(function(req, rsp){
    rsp.writeHead(200, {'Content-Type' : 'text/plain'});
    rsp.end("hello world");
}).listen(1337);
console.log("server start");
