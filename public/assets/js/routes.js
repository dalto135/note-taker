const path = require('path');
const db = require('../../../db/db.json');

module.exports = (app) => {
    //API routes
    app.get("/api/notes", function(req, res) {
      res.json(db);
      // console.log('first get route: db');
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
        // console.log('notes');
    });

    //Bonus delete route
    app.delete(`/api/notes/:id`, function(req, res) {
      let array = [];
      console.log('req.params.id');
      console.log(req.params.id);

      //Add non-deleted items to array
      console.log();
      db.forEach(i => {
        console.log('i.id:');
        console.log(i.id);
        if (i.id != req.params.id) {
          array.push(i);
          console.log(i);
          console.log('not deleted, pushed to array');
          console.log();
        }
      })

      //Empties db
      while (db.length > 0) {
        db.shift();
      }
      console.log();

      console.log('empty db:')
      console.log(db);

      //Add items from array back into db
      console.log();
      console.log('array:');
      array.forEach(i => {
        console.log('element:');
        console.log(i);
        db.push(i);
        console.log('pushed to db');
        console.log();
      });

      //Print db items to console
      console.log();
      console.log('db:')
      db.forEach(i => {
        console.log('element:');
        console.log(i);
        console.log();
      });

      res.json(db);
    });

    //Get all
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../index.html'));
        // console.log('index');
    });
}