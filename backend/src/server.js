const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(
  "mongodb+srv://db_admin:@dministrator@aircnc-9mgwh.mongodb.net/aircnc?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", function (req, res) {
  res.json({ message: "Hello World" });
});

app.listen(3333, function () {
  console.log("Servidor aberto na porta 3333.");
});
