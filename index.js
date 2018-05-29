/*
 * Primary file for the API
 *
 */

// Dependencies
const http = require('http');

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  res.end('Hello world\n');
});

// Start the server, and have it listen on port 3333
server.listen(3333, () => {
  console.log("The server is now listening on port 3333");
});
