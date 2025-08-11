const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/signup') {
    res.statusCode = 200;
    res.end('Signup page - Create your account here');
  }
  else if (req.url === '/login') {
    res.statusCode = 200;
    res.end('Login page - Enter your credentials');
  }
  else if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to our Home Page');
  }
  else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

server.listen(8004, () => {
  console.log('Server running at http://localhost:8004/');
});
