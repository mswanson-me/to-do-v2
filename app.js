const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongoURL, PORT} = require('./config/config')

const app = express();

// Configure Mongoose connection
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(response => {
        console.log('MongoDB connected successfully.');
    }).catch(err => {
        console.log('Database connection failed.');
    })


// Configure Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Setup view engine w/ handlebars
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');

// Routes 
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);

// 
app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`);
});