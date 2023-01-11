// imports
var sayHelloVar = require('./sayHello');
const http = require('http');


// url
const hostname = '127.0.0.1';
const port = 3000;


// set up server 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  sayHelloVar.say('Yen Ther');
  sayHelloVar.execute();
  console.log(`Server running at http://${hostname}:${port}/`);
});