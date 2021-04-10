// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require('path');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 4200;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./Develop/public/assets/js/index')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});

module.exports = (app) => {
  app.get("/api/notes", function(req, res) {
    res.json(path.join(__dirname, "./Develop/public/index.js"));
  });
  app.post("/api/notes", function(req, res) {
    res.json(path.join(__dirname, "./Develop/public/index.js"));
  });
  app.delete(`/api/notes/:${id}`, function(req, res) {
    res.json(path.join(__dirname, "./Develop/public/index.js"));
  });
}
