// imports
const sayHelloVar = require('./sayHello');
const http = require('http');

// url
const hostname = '127.0.0.1';
const port = 3000;

// set up server 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Welcome to my first node app!\n\n')
    res.write('In progress\n');
    res.end();
  }

  if (req.url === '/numbers') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// run server
server.listen(port, hostname, () => {
  sayHelloVar.say('Yen Ther');
  sayHelloVar.execute();
  console.log(`Server running at http://${hostname}:${port}/`);
});

// check for connection by new user
server.on('connection', (socket) => {
  console.log('New user connected..');
});