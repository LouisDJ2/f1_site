const express = require('express');
const dbtest = express.Router();
const bodyParser = require("body-parser")
var mysql = require('mysql');
dbtest.use(bodyParser.json());
dbtest.use(bodyParser.urlencoded({ extended: true }));

dbtest.get('/', function (req, res) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    var sql = "INSERT INTO test1 (Name) VALUES ('Haaland')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.send('Get users controller');
});
dbtest.post("/add", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = num1 + num2
    console.log(num3);

    //var num2 = Number(request.body.num2);

    //var result = num1 + num2;

    res.send("answer: " + num3);
});
dbtest.get("/add", function (req, res) {
    res.send("hey");
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "firsttable"
});


module.exports = dbtest;