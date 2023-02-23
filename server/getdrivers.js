/*******************************
 * Title: getdrivers.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * last modified: 19/10/2022
 * Discription: this file holds the functions to get the driver-data from the database
 * 
 */

const express = require('express');
const getdrivers = express.Router();
const bodyParser = require("body-parser");
var dbconnection = require('./dbconnection');

getdrivers.use(bodyParser.json());
getdrivers.use(bodyParser.urlencoded({ extended: true }));


// Get all drivers
const getAllDrivers = () => {
    return new Promise(async (resolve,reject) =>{ 
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from drivers', (err, rows) => {
                connection.release() // return the connection to pool

                if (!err) {
                    resolve(rows);
                    // res.send(rows)
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }

                // if(err) throw err
                console.log('The data from drivers table are: \n', rows)
                
            })
        })
    });
}

// Get all stats of a driver by name 
const getDriverByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            // console.log("### NAME = ",name);
            // var name = "Max Verstappen";
            var sqlParam = [name];
            var sql = "SELECT * FROM drivers WHERE name = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

                if (!err) {
                    resolve(rows);
                    // res.send(rows)
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }

                // if(err) throw err
                console.log('The data from drivers table are: \n', rows)
            })
        })
    });
}

// Get all stats of a driver by ID
const getDriverByID = (id) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            // var name = "Max Verstappen";
            var sqlParam = [id];
            var sql = "SELECT * FROM drivers WHERE unique_ID_driver = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

            if (!err) {
                resolve(rows);
                console.log("Done in if!")
                
            } else {
                console.log(err);
            }
            

            })
        })
    })
}

// Get all stats of a driver by average greater than
const getDriverByAvgMore = (num) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            // var name = "Max Verstappen";
            var sqlParam = [num];
            var sql = "SELECT * FROM drivers WHERE average > ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

            if (!err) {
                resolve(rows);
                console.log("Done in if!")
                
            } else {
                console.log(err);
            }
            
            })
        })
    })
}

// Get all stats of a driver by average less than
const getDriverByAvgLess = (num) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            // var name = "Max Verstappen";
            var sqlParam = [num];
            var sql = "SELECT * FROM drivers WHERE average < ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

            if (!err) {
                resolve(rows);
                console.log("Done in if!")
                
            } else {
                console.log(err);
            }
            

            })
        })
    })
}

module.exports = {getdrivers, getAllDrivers, getDriverByName, getDriverByID, getDriverByAvgLess, getDriverByAvgMore}; 
