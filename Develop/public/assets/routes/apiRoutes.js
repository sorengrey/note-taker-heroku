const express = require("express");
const fs = require("fs");
const path = require("path");

// exports the routes
module.exports = (app) => {
    // get route for notes page 
    app.get('/api/notes', (req, res) => {
      // console.log(noteObject);
      fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        //console.log(data);
        res.send(data);
        // const noteObject = JSON.parse(data);
       // console.log(noteObject);
      })
  
     // console.log(noteObject);
    })

    //assigns unique ids to each note - does not work
    app.get('/api/notes/:id', (req, res) => {
      console.log(req.params.note);
      const chosen = req.params.noteObject;
      noteObject.forEach(note =>{
        if (chosen === noteObject.route) {
          res.json(note);
        }
      })
    })
    
    //post route for the notes page
    app.post('/api/notes', (req, res) => {
      let note = req.body;
      // reads the json file
      fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        // console.log(data);
        res.send(data);
        const noteObject = JSON.parse(data);
       // console.log(noteObject);
        // console.log(typeof noteObject);
        // console.log(noteObject);
        noteObject.push(note);
        console.log(noteObject);
        //writes what's in the json to the page
        fs.writeFile('./Develop/db/db.json', JSON.stringify(noteObject), err => {
          if (err) throw err;
          return true;
      });
      })
      // console.log(data);
     
    })

    // writes to db.json
    // const writeNotes = () => {
    //   fs.writeFile('./Develop/db/db.json', JSON.stringify(), err => {
    //     if (err) throw err;
    //     return true;
    // });
    // }

  }
