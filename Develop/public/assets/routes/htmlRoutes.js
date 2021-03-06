const express = require("express");
const path = require("path");
const app = express();

module.exports = (app) => {
    // route to main page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/Develop/public/index.html'));
    });

    // route to notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../../notes.html'));
    });

    // if no matching route is found default to home
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'));
  });
}