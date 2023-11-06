const express = require('express')

const app = express()

app.use(express.json())

const users = [
  {
    nome: "Fulinaldo Nogueira",
    dataNascimento: 1500,
    endereco: "Rua travessa do pau ferrado",
  },
  {
    nome: "Nobrinaldo Nogueira",
    dataNascimento: 1500,
    endereco: "Rua travessa do pau redondo",
  },
  {
    nome: "Arthur Chique",
    dataNascimento: 2,
    endereco: "Rua Chicolândia",
  },
  {
    nome: "Luisoão juniosr",
    dataNascimento: 90000000000000000000000,
    endereco: "D E S C O N H E C I D O",
  },
];

app.get('/user', (req, res) => {
    res.json(users)
})

app.post('/user', (req, res) => {
    const usuario = req.body
    users.push(usuario)
    res.json(users)
})

app.delete("/user/:id", (req, res) => {
    const id = req.params['id']
    console.log(users.splice(id,1))
    res.json(users)
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})