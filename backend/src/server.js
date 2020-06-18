const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.json({ message: "Hello World" });
});

app.use(express.json());

app.listen(3333, function () {
  console.log("Servidor aberto na porta 3333.");
});
