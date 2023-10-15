const express = require('express');
const dbtest = express.Router();
const bodyParser = require("body-parser")
const mysql = require('mysql');
dbtest.use(bodyParser.json());
dbtest.use(bodyParser.urlencoded({ extended: true }));

dbtest.get('/', function (res) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    let sql = "INSERT INTO test1 (Name) VALUES ('Haaland')";
    con.query(sql, function (err) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.send('Get users controller');
});
dbtest.post("/add", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let num3 = num1 + num2
    console.log(num3);
    res.send("answer: " + num3);
});
dbtest.get("/add", function (res) {
    res.send("hey");
});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "firsttable"
});


module.exports = dbtest;