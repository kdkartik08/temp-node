//HTTP Module Basics
const http = require("http");

//we need to create a server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to Homepage!");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is our about section!");
    res.end();
  } else {
    res.write(`<h1>The page you have been looking for is not found!</h1>
    <a href='/'>Take me back</a>`);
    res.end();
  }
}); //createServer function takes in a callback with two parameters i.e request and response;

//define port on which server runs
const port = server.listen(5000);
