// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require('path');
const db = require('./Develop/db/db.json');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require('./Develop/public/assets/js/index')(app);
// require('./Develop/db/db.json')(app);


// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});

module.exports = (app) => {
  //HTML routes
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });
  //API routes
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });
  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(true);
  });
  //Bonus
  app.delete(`/api/notes/:${id}`, function(req, res) {
    let array = [];
    db.forEach(i, function() {
      array.push(i);
    });
    array.forEach(j, function() {
      if (j === id) {
        array.pop(j);
      }
    });
    db = '';
    array.forEach(k, function() {
      db += k;
    });

    res.json({ ok: true });
  });
}
