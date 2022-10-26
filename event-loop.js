const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome! :D");
    return res.end();
  }

  if (req.url === "/about") {
    // BLOCKING CODE
    for (let i = 0; i < 1000000; i++) {
      console.log(Math.floor(Math.random() * i));
    }

    return res.end("Welcome to about! :D");
  }

  res.end("Not Found!");
});

server.listen(3000);
console.log("Server on port 3000");
