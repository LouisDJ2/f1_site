/*******************************
 * Title: gettire.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * last modified: 24/10/2022
 * Discription: this file holds the functions to get the tire-data from the database
 * 
 */

const express = require('express');
const gettire = express.Router();
const bodyParser = require("body-parser");
var dbconnection = require('./dbconnection');

gettire.use(bodyParser.json());
gettire.use(bodyParser.urlencoded({ extended: true }));

// Get all tires
const getAllTires = () => {
    return new Promise(async (resolve,reject) =>{ 
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from tires', (err, rows) => {
                connection.release() // return the connection to pool

                if (!err) {
                    resolve(rows);
                    // res.send(rows)
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }

                // if(err) throw err
                console.log('The data from tires table are: \n', rows)
                
            })
        })
    });
}

// Get all stats of a tire by name 
const getTireByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            // console.log("### NAME = ",name);
            // var name = "Max Verstappen";
            var sqlParam = [name];
            var sql = "SELECT * FROM tires WHERE name = ?";
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
                console.log('The data from tires table are: \n', rows)
            })
        })
    });
}

// Get all stats of a tire by brand 
const getTireByBrand = (name) => {
    return new Promise(async (resolve, reject) =>{
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            // console.log("### NAME = ",name);
            // var name = "Max Verstappen";
            var sqlParam = [name];
            var sql = "SELECT * FROM tires WHERE brand = ?";
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
                console.log('The data from tires table are: \n', rows)
            })
        })
    });
}

// Get all stats of a tire by ID
const getTireByID = (id) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            // var name = "Max Verstappen";
            var sqlParam = [id];
            var sql = "SELECT * FROM tires WHERE unique_ID_tire = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

            if (!err) {
                resolve(rows);
                // res.send(rows)
                //console.log('33 the result is: ?', rows);
                //console.log('33 The type of result is: ?', typeof rows);
                console.log("Done in if!")
                
            } else {
                console.log(err);
            }
            

            })
        })
    })
}


module.exports = {gettire, getAllTires, getTireByBrand, getTireByName, getTireByID}; 
