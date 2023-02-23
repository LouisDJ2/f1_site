/*******************************
 * Title: tracks.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 22/10/2022
 * Discription: this file holds the functions to  
 * create responses of the post and get requests
 *  -> connects with the database via gettracks.js
 * 
 */

const express = require('express');
const tracks = express.Router();
const bodyParser = require("body-parser");
const trackDB = require('./gettracks');

tracks.use(bodyParser.json());
tracks.use(bodyParser.urlencoded({ extended: true }));

// Get all tracks
tracks.get('/all', async function(req, res){
    var tracks = await trackDB.getAllTracks();
    //console.log("All tracks: ", tracks);
    res.json({ status: 'Succes', message: 'Tracks Found', tracks});
})

// Get track by ID
tracks.post('/id', async function(req,res){
    var resultID = await trackDB.getTrackByID(req.body.id);
    if (Object.keys(resultID).length == 0){
       console.log("FAIL");
       res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in id'})
    }
    else{
       //console.log('-- the result is: ', resultID);
       res.json({ status: 'ok', message: 'Track Found', track: {unique_ID_track: resultID[0].unique_ID_track,name_gp: resultID[0].name_gp, name_track : resultID[0].name_track, country: resultID[0].country, type: resultID[0].type, url: resultID[0].layout}})
    }
 })

// get track by name
tracks.post('/name', async function(req, res){
    var resultName = await trackDB.getTrackByName(req.body.name);
    if (Object.keys(resultName).length == 0){
       console.log("FAIL");
       res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
    }
    else{
       //console.log('-- the result is: ', resultName);
       res.json({ status: 'ok', message: 'Track Found', track: {unique_ID_track: resultName[0].unique_ID_track, name_gp: resultName[0].name_gp, name_track : resultName[0].name_track, country: resultName[0].country, type: resultName[0].type, url: resultName[0].layout}})
    }
 })
 // get track by country
tracks.post('/country', async function(req, res){
   var resultCountry = await trackDB.getTrackByCountry(req.body.country);
   if (Object.keys(resultCountry).length == 0){
      console.log("FAIL");
      res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
   }
   else{
      //console.log('-- the result is: ', resultCountry);
      res.json({ status: 'ok', message: 'Track Found', resultCountry})
   }
})

module.exports = tracks;