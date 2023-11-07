const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());

const users = [
  {
    nome: "Kauê",
    dataNascimento: 2005,
    endereco: "Rua Chico",
  },
  {
    nome: "Artur",
    dataNascimento: 2005,
    endereco: "Rua Chico",
  },
];

app.get("/user", (req, res) => {
  const { nome } = req.query;
  let results;
  if (nome) {
    results = users.filter((user) => user.nome.includes(nome));
    if (results == false) {
      res.status(400).json({ erro: "User não encontrado!" });
    } else {
      res.status(200).json(results);
    }
  }
});

app.post("/user", (req, res) => {
  const user = req.body;
  if (req.body === "" || !user) {
    res.status(400).json({ erro: "User não foi definido!" });
  } else {
    users.push(user);
    res.status(201).json(users);
  }
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  if (id >= 0 && id <= users.length) {
    users[id] = user;
    res.json(users);
  } else {
    console.log("User não existe!");
    res.status(400).json({ erro: "User não encontrado!" });
  }
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  if (id >= 0 && id <= users.length) {
    console.log(users.splice(id, 1));
    res.json(users);
  } else {
    res.status(400).json({ erro: "User não encontrado!" });
  }
});

app.listen(PORT, () => {
  console.log("Server rodando na porta http://localhost:3000");
});
