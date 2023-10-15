/*******************************
 * Title: getaero.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 22/10/2022
 * Discription: this file holds the functions to get the aero-data from the database
 * 
 */

 const express = require('express');
 const getaero = express.Router();
 const bodyParser = require("body-parser");
 const dbconnection = require('./dbconnection');
 
 getaero.use(bodyParser.urlencoded({ extended: true }));
 getaero.use(bodyParser.json());

 // Get all aeropackages and all their stats
 const getAllAero = () => {
    return new Promise(async (resolve,reject) =>{ 
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from aero', (err, rows) => {
                connection.release() // return the connection to pool

                if (!err) {
                    resolve(rows);
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }
                console.log('The data from aero table are: \n', rows)
            })
        })
    });
}


// Get all stats of an aeropackage by aero brand
const getAeroByBrand = (brand) => {
    return new Promise((resolve ) =>{
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            let sqlParam = [brand];
            let sql = "SELECT * FROM aero WHERE brand = ?";
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

                if (!err) {
                    resolve(rows);
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }
                console.log('The data from tracks table are: \n', rows)
            })
        })
    });
}

// Get all stats of an aeropackage by ID
const getAeroByID = (id) => {
    return new Promise((resolve )=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            let sqlParam = [id];
            let sql = "SELECT * FROM aero WHERE unique_ID_aero = ?";
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
// Get all stats of an aeropackage by type
const getAeroByType = (type) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            let sqlParam = [type];
            let sql = "SELECT * FROM aero WHERE type = ?";
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

module.exports = {getaero, getAllAero, getAeroByBrand, getAeroByID, getAeroByType}; 