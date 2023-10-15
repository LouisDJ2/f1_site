/*******************************
 * Title: getcars.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 26/10/2022
 * Discription: this file holds the functions to get the car-data from the database
 * 
 */

 const express = require('express');
 const getcars = express.Router();
 const bodyParser = require("body-parser");
 const dbconnection = require('./dbconnection');
 
 getcars.use(bodyParser.json());
 getcars.use(bodyParser.urlencoded({ extended: true }));

 // Get all cars and all their stats
 const getAllCars = () => {
    return new Promise(async (resolve,reject) =>{ 
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from cars', (err, rows) => {
                connection.release() // return the connection to pool

                if (!err) {
                    resolve(rows);
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }
                console.log('The data from cars table are: \n', rows)
                
            })
        })
    });
}


// Get all stats of a track by track name
const getCarByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            let sqlParam = [name];
            let sql = "SELECT * FROM cars WHERE name = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

                if (!err) {
                    resolve(rows);
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }
                console.log('The data from cars table are: \n', rows)
            })
        })
    });
}

// Get all stats of a car by ID
const getCarByID = (id) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            let sqlParam = [id];
            let sql = "SELECT * FROM cars WHERE unique_ID_car = ?";
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

// Get all stats of a car by Brand
const getCarByBrand = (id) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            let sqlParam = [id];
            let sql = "SELECT * FROM cars WHERE brand = ?";
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

module.exports = {getcars, getAllCars, getCarByID, getCarByName, getCarByBrand}; 