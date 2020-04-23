const express = require('express');

const app = express();

require('./loaders')(app);

app.get('/', (req, res) => {
    return res.send('Home Route');
});

module.exports = app;
