// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');

// sets up Express 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

// required route files
require('./Develop/public/assets/routes/apiRoutes')(app);
require('./Develop/public/assets/routes/htmlRoutes')(app);


// designated initial port
const PORT = process.env.PORT || 8080;

// listening (starts the server)
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// going to need a post request for the note form

// going to need a delete request for the note form