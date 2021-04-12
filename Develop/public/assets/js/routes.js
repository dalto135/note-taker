const path = require('path');
const db = require('../../../db/db.json');


module.exports = (app) => {
    //API routes
    app.get("/api/notes", function(req, res) {
      res.json(db);
      console.log('db');
    });
    app.post("/api/notes", function(req, res) {
      db.push(req.body);
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
    //   db.forEach(i, function() {
    //     array.push(i);
    //   });
    //   array.forEach(j, function() {
    //     if (j === id) {
    //       array.pop(j);
    //     }
    //   });
    //   db = '';
    //   array.forEach(k, function() {
    //     db += k;
    //   });
  
    //   res.json({ ok: true });
    // });
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../index.html'));
        console.log('index');
    });
  }