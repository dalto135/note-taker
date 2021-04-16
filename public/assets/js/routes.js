const path = require('path');
const db = require('../../../db/db.json');

module.exports = (app) => {
    //API routes
    app.get("/api/notes", function(req, res) {
      res.json(db);
      console.log('db');
    });
    app.post("/api/notes", function(req, res) {
      let newEntry = {
        id: Math.random(),
        title: req.body.title,
        text: req.body.text
      };
      db.push(newEntry);
      console.log(newEntry);
      res.json(true);
    });
    //HTML routes
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../../notes.html'));
        console.log('notes');
    });
    //Bonus
    // app.delete(`/api/notes/:${id}`, function(req, res) {
    //   let array = [];
    //   for (let i = 0; i < db.length; i++) {
    //       if (db[i].id !== id) {
    //           array.push(db[i]);
    //       }
    //   }
    //   db = array;
    //   res.json(db);
    // });
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../index.html'));
        console.log('index');
    });
}