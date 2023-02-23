/*******************************
 * Title: gettracks.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 22/10/2022
 * Discription: this file holds the functions to get the track-data from the database
 * 
 */

 const express = require('express');
 const gettracks = express.Router();
 const bodyParser = require("body-parser");
 var dbconnection = require('./dbconnection');
 
 gettracks.use(bodyParser.json());
 gettracks.use(bodyParser.urlencoded({ extended: true }));

 // Get all tracks and all their stats
 const getAllTracks = () => {
    return new Promise(async (resolve,reject) =>{ 
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from tracks', (err, rows) => {
                connection.release() // return the connection to pool

                if (!err) {
                    resolve(rows);
                    // res.send(rows)
                    console.log("Done in if!");
                } else {
                    console.log(err)
                }

                // if(err) throw err
                console.log('The data from track table are: \n', rows)
                
            })
        })
    });
}


// Get all stats of a track by track name
const getTrackByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        dbconnection.getConnection(function (err, connection) {
            if(err) throw err
            // console.log("### NAME = ",name);
            // var name = "Monza";
            var sqlParam = [name];
            var sql = "SELECT * FROM tracks WHERE name_track = ?";
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
                console.log('The data from tracks table are: \n', rows)
            })
        })
    });
}

// Get all stats of a track by ID
const getTrackByID = (id) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            var sqlParam = [id];
            var sql = "SELECT * FROM tracks WHERE unique_ID_track = ?";
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

// Get all stats of a track by it's country
const getTrackByCountry = (country) => {
    return new Promise(async (resolve, reject)=>{
        dbconnection.getConnection(async function (err, connection){
            if(err) throw err
            var sqlParam = [country];
            var sql = "SELECT * FROM tracks WHERE country = ?";
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

module.exports = {gettracks, getAllTracks, getTrackByName, getTrackByID, getTrackByCountry}; 