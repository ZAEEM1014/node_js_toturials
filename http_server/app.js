const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n im new to node js');
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
