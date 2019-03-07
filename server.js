const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;



// Serving Static Content
app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// SERVER
app.get('/', (req, res) => {
    // Render home.hbs
    res.render('home', {
        name: 'david'    
    });
});

app.get('/about', (req, res) => {
    // Render home.hbs
    res.render('about');
});


// PORT
app.listen(port, () => {
    console.log(`Listening to Requests on Port: ${port}`);
});