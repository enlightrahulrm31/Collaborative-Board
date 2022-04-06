const express = require("express");

const app = express();

const server = app.listen(3000 ,function(){
    console.log("The server is working fine !");
});

app.use(express.static('public')); // these are the static files which are not changing 

var socket = require("socket.io"); // requiring the socket which we installed using npm 

var io = socket(server); // creating the object for the socket where we are passing server as a argument

// app.get("/",function(req,res){
//     // console.log();
//     // res.send("Hello I will be making drawing app !");
//     res.sendFile("index.html");
// });
app.get("/:customListName",function(req,res){
    res.send("Hello !");
});

app.get("/",function(req,res){
    res.sendFile("index.html");
});
io.sockets.on('connection' , newConnection);
function newConnection(socket){   // we have to an argument to newConnectio funtion 
    console.log("new connection : " + socket.id);
    socket.on('mouse',mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse',data); // this will emit to the all other clients except the one which is present 
        // io.sockets.emit('mouse',data); // this will emit to the all other clients and  the itself as well 
        console.log(data.x+"," + data.y);
    }
    // console.log(socket);
}




