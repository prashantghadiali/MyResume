const http = require('http');
const port = 8000;     // port is defined

function requestHandler(req, res){
    console.log(req.url)    // it prints url in console when this fun is passed in const server function

    // res.end("Get it!")   // this string is printed on response side or on Frontend side
}

const server = http.createServer(requestHandler);    // server is created and passed request handler to hit that function while creating server

server.listen(port,function(err){
    if (err) {
        console.log("server error :",err);
        return;
    }
    console.log("Server is up and running on Port ", port);
});