// // DEPENDENCIES
// // Series of npm packages that we will use to give our server useful functionality

// const express = require('express');

// // EXPRESS CONFIGURATION
// // This sets up the basic properties for our express server

// // Tells node that we are creating an "express" server
// const app = express();

// // Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 4200;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// // require('./routes/apiRoutes')(app);
// // require('./routes/htmlRoutes')(app);
// require('./index')(app);

// // LISTENER
// // The below code effectively "starts" our server

// app.listen(PORT, () => {
//   console.log(`App listening on PORT: ${PORT}`);
// });

// app.get("/", function(req, res) {
//   res.json(path.join(__dirname, "./index.html"));
// });

//

// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
// const PORT = 8080;

// Create a generic function to handle requests and responses
const handleRequest = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`It Works!! Path Hit: ${request.url}`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});