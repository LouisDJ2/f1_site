/*******************************
 * Title: dbconnection.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * last modified: 19/10/2022
 * Discription: this file makes a generic connection to the database
 *  -> get connection with: var variable = require('./dbconnection');
 * 
 */
const mysql = require('mysql');
//connection to database using a pool
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db_fut_f1'
});

module.exports = pool;


