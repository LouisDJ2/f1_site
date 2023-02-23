const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("port", 3001);
const cors = require("cors");
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
);

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("hey");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from a beautiful nodejs server!" });
});

app.get("/database", (req, res) => {
    res.json({ message: "Hello from a beautiful nodejs server!" });
});

const dbroutes = require("./dbtest");
const users = require("./users");
const race = require("./race");

// made by Louis
// const dbconnection = require('./dbconnection');
const getdrivers = require("./getdrivers");
const drivers = require("./drivers");
const tracks = require("./tracks");
const tires = require("./tires");
const aero = require("./aero");
const cars = require("./cars");
const condition = require("./condition");

app.use("/race", race);
app.use("/test", dbroutes);
app.use("/users", users.users);

// Made by Louis
// app.use('/dbconnection', dbconnection);
app.use("/getdrivers", getdrivers.getdrivers);
app.use("/drivers", drivers);
app.use("/tracks", tracks);
app.use("/tires", tires);
app.use("/aero", aero);
app.use("/cars", cars);
app.use("/condition", condition);

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});
