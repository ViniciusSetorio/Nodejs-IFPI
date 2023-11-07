const express = require('express')

const app = express()

app.use(express.json())

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
  }
];

app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    const user = req.body
    users.push(user)
    res.json(users)
})

app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    console.log(users.splice(id, 1))
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server rodando na porta http://localhost:3000")
})