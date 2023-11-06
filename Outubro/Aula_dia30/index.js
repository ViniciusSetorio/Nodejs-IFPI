const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send("Requisição GET");
});

app.post("/user", (req, res) => {
  res.send("Requisição POST");
});

app.put("/user/:id", (req, res) => {
  res.send("Requisição PUT");
});

app.delete("/user:id", (req, res) => {
  res.send("Requisição DELETE")
});

app.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});