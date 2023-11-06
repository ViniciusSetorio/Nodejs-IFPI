const http = require("http");
const url = require("url");
const queryString = require("querystring");

const PORT = 3000;

const soma = require("./operacoes/soma");
const subtracao = require("./operacoes/subtracao");
const multiplicacao = require("./operacoes/multiplicacao");
const divisao = require("./operacoes/divisao");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  
  const parseUrl = url.parse(req.url);
  const query = queryString.parse(parseUrl.query);
 
  try {
    if (!query.num1 || !query.num2 || !query.op) {
      res.statusCode = 400;
      res.end('Parâmetros faltando! Verifique se você incluiu "num1", "num2" e "op".');
      return;
    }

    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);

    let resultado;
    
    switch (query.op) {
      case "soma":
        resultado = soma(num1, num2);
        break;

      case "subtracao":
        resultado = subtracao(num1, num2);
        break;

      case "multiplicacao":
        resultado = multiplicacao(num1, num2);
        break;

      case "divisao":
        resultado = divisao(num1, num2);
        break;

      default:
        res.statusCode = 400;
        res.end("Operação Inválida!");
        return;
    }

    res.end(`Resultado: ${resultado}`);
  } catch (error) {
    res.statusCode = 500;
    res.end(`Erro interno do servidor: ${error.message}`);
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
