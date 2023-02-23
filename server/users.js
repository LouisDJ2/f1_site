const express = require("express");
const bcrypt = require("bcrypt");
const users = express.Router();
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var dbconnection = require("./dbconnection");
var mysql = require("mysql");

users.use(bodyParser.json());
users.use(bodyParser.urlencoded({ extended: true }));
users.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//connection to database using a pool
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_fut_f1",
});

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "FormulaOneEngineering@gmail.com",
        pass: "gruobzntzayfmiov",
    },
    from: "FormulaOneEngineering@gmail.com",
});

//Routing
users.get("/", function (req, res) {
    bcrypt.hash(plaintextPassword, 10, function (err, hash) {
        console.log(hash);
        bcrypt.compare(plaintextPassword2, hash, function (err, result) {
            if (result) {
                res.send("hey");
            }
            else {
                res.send("ney");
            }
        });
        // store hash in the database
    });
});

//Function to check if user is new, if he is not new add user
users.post("/add", function (req, res) {
    //console.log("users add test");
    console.log(req.body.name, req.body.email, req.body.pointsoverall, req.body.pointslastrace, req.body.wins, req.body.races, req.body.authorisation);
    addUser(req.body.name, req.body.email, req.body.password, req.body.pointsoverall, req.body.pointslastrace, req.body.wins, req.body.races, req.body.authorisation, res);
});

users.post("/login", function (req, res) {
    console.log(req.body.name, req.body.password);
    login(req.body.name, req.body.password, res);
});

//functions.

const addUser = async (name, mail, password, points_overall, points_last_race, wins, races, authorisation, res) => {
    dbconnection.getConnection(async function (err, connection) {
        let isUnique = await doesUserExist(name);
        if (isUnique == false) {
            bcrypt.hash(password, 10, function (err, hash) {
                console.log(hash);
                connection.query(
                    "INSERT INTO users (name,mail_addr,password,points_overall,points_last_race,wins,races,authorisation) VALUES ('" +
                    name +
                    "','" +
                    mail +
                    "','" +
                    hash +
                    "','" +
                    points_overall +
                    "','" +
                    points_last_race +
                    "','" +
                    wins +
                    "','" +
                    races +
                    "','" +
                    authorisation +
                    "')"
                    , function (err, result) {
                        console.log(err);
                        console.log(result);
                        console.log(result.insertId);
                        res.json({
                            status: "ok",
                            message: "User added",
                            user: { name: name, id: result.insertId, mail: mail },
                        });
                    }




                );
            });

            connection.release();
            email(name, mail);

        } else {
            connection.release();
            res.json({
                status: "fault",
                message: "Username already in use",
                user: { name: name, mail: mail },
            });
        }
    });
};

const login = async (name, password, res) => {
    dbconnection.getConnection(async function (err, connection) {
        let isUnique = await doesUserExist(name);
        if (isUnique == false) {
            res.json({
                status: "fault",
                message: "Username doesnt exist",
                user: { name: name, result: 0 },
            });
        } else {
            connection.query(
                "SELECT password,unique_ID_user,authorisation FROM users WHERE name = ('" +
                name +
                "')",
                function (err, result) {
                    bcrypt.compare(password, result[0].password, function (err, hashresult) {
                        if (hashresult) {
                            res.json({
                                status: "ok",
                                message: "Logged in",
                                user: {
                                    name: name,
                                    id: result[0].unique_ID_user,
                                    authentication: result[0].authorisation,
                                },
                            });
                        }
                        else {
                            res.json({
                                status: "fault",
                                message: "Wrong Password",
                                user: { name: name, result: 0 },
                            });
                        }
                    });
                }
            );
        }
    });
};

const doesUserExist = (name) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query(
                "SELECT * FROM users WHERE name = ('" + name + "')",
                function (err, result) {
                    connection.release();
                    var response;
                    if (result.length == 0) {
                        response = false;
                    } else {
                        response = true;
                    }
                    resolve(response);
                }
            );
        });
    });
};

const doesUserExistById = (id) => {
    return new Promise(async (resolve, reject) => {
        dbconnection.getConnection(function (err, connection) {
            connection.query(
                "SELECT * FROM users WHERE unique_ID_user = ('" + id + "')",
                function (err, result) {
                    connection.release();
                    var response;
                    if (result.length == 0) {
                        response = false;
                    } else {
                        response = true;
                    }
                    resolve(response);
                }
            );
        });
    });
};

function email(name, mail) {
    var mailOptions = {
        from: "FormulaOneEngineering@gmail.com",
        to: mail,
        subject: `Welcome ${name} to F1UT`,
        html: '<h1>Welcome to F1UT</h1><div> This email is a confirmation that an account is made with this email-addres</div><img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2160,w_3840/c_fill,w_1920,h_1080/q_auto,f_auto/redbullcom/2022/5/25/j8tzdfqjfnxciaca06qc/f1-22-red-bull-racing-rb18-sergio-perez" width="630">',

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

module.exports = { users, doesUserExistById };
