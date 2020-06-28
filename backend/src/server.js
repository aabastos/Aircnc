const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const routes = require("./routes");
const mongoose = require("mongoose");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);

io = socketio(server);

const connectedUsers = {};

mongoose.connect(
  "mongodb+srv://db_admin:@dministrator@aircnc-9mgwh.mongodb.net/aircnc?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

io.on("connection", socket => {
  const socketId = socket.id;
  const userId = socket.handshake.query.user_id;

  connectedUsers[userId] = socketId;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));


app.get("/", function (req, res) {
  res.json({ message: "Hello World" });
});

server.listen(3333, function () {
  console.log("Servidor aberto na porta 3333.");
});
