const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Olá mundo!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("Olá, página de sobre.");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Olá, página de contato.");
  } else if (req.method === "POST" && req.url === "/info") {
    res.statusCode = 200;
    res.end("Olá, URL para add info.");
  }
});
 
server.listen(3000, () => {
  console.log("Server rodando...");
});