const path = require("path");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");

require("dotenv").config();
const io = socketio(server); // server listen

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Run when client connects
io.on("connection", socket => {
  // Welcome current user
  socket.emit("message", "Welcome to ChatCord!");

  // Broadcast when a user connects
  socket.broadcast.emit("message", "A user has joined the chat");

  // Runs when client disconnects
  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });
});

server.listen(3000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
