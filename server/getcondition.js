/*******************************
 * Title: getcondition.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 14/11/2022
 * Discription: this file holds the functions to get the conditions-data from the database
 * 
 */

const express = require('express');
const getcondition = express.Router();
const bodyParser = require("body-parser");
const dbconnection = require('./dbconnection');

getcondition.use(bodyParser.json());
getcondition.use(bodyParser.urlencoded({ extended: true }));

// get all conditions
const getAllConditions = () => {
    return new Promise(async (resolve,reject) =>{ 
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            connection.query('SELECT * from conditions', (err, rows) => {
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


// get wheathercondition by ID
const getConditionByID = (id) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(function (err, connection){
            if(err) throw err
            let sqlParam = [id]
            let sql = "SELECT * FROM conditions WHERE unique_ID_conditions = ?"
            connection.query(sql, sqlParam, (err, rows) => {
                connection.release()

                if(!err){
                    resolve(rows);
                } else{
                    console.log(err);
                }
            })
        })
    })
}

module.exports = {getcondition, getAllConditions, getConditionByID}