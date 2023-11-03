const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET response - /cookBook

router.get('/', (req, res) => {
    console.log(`GET /cookBook response`);

    let qryText = `SELECT * FROM "cookbook";`;

    pool.query(qryText).then((result) => {
        console.log(`GET /cookBook success!`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`GET /cookBook Error`);
        res.sendStatus(500);
    });
});


// POST

// PUT

// DELETE

module.exports = router;
