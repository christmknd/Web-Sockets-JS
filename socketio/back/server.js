//dépendances
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require("cors");
const { Server } = require("socket.io");


//http server 
app.use(cors());

app.get('/', (req,res) => {
  res.send("Hello World")
})

server.listen(8000, () => {
  console.log('listening on port ' + 8000);
});


//Websocket server
const io = new Server(9000 , {
  cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
  }
} )

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on("send_message", (data) => {
    socket.emit("receive_message", data)
  })
});

