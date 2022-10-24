const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the server!");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Welcome to the About!");
    return response.end();
  }

  response.write(`
    <h1>Not Found!</h1>
    <p>Está página no se ha encontrado</>
    <a href="/">Volver a la página principal</a>
    `);
  response.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");