/*
 * Primary file for the API
 *
 */

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g,'');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query

  // Get the HTTP method
  const method = req.method.toUpperCase();

  // Get the headers as an object
  const headers = req.headers

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();

    // Send the response
    res.end('Hello world\n');

    // Log the request path
    console.log(`Request received on path: ${trimmedPath} with method: ${method} and with these query string parameters`, queryStringObject);
    console.log(`Request received with these headers: `, headers);
    console.log(`Request received with this payload: `, buffer);
  });



});

// Start the server, and have it listen on port 3333
server.listen(3333, () => {
  console.log("The server is now listening on port 3333");
});
