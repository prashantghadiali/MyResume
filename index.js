const http = require('http');
const port = 8000;     // port is defined

const server = http.createServer();    // server is created

server.listen(port,function(err){
    if (err) {
        console.log("server error :",err);
        return;
    }
    console.log("Server is up and running on Port ", port);
});