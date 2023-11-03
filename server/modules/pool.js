const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'ben-cook-book', 
});

module.exports = pool;
