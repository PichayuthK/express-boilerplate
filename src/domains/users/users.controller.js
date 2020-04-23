const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('get user /');
});

module.exports = (app) => app.use('/users', router);
