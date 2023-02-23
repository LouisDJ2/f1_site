/*******************************
 * Title: drivers.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * last modified: 19/10/2022
 * Discription: this file holds the functions to test 
 * the genericness of getdrivers.js
 * 
 */

const express = require('express');
const drivers = express.Router();
const bodyParser = require("body-parser");
const driverDB = require('./getdrivers');

drivers.use(bodyParser.json());
drivers.use(bodyParser.urlencoded({ extended: true }));


// get all drivers 
drivers.get('/all', async function(req,res){   
   var drivers = await driverDB.getAllDrivers();
   console.log('-- the result is: ', drivers);
   res.json({ status: 'ok', message: 'Drivers Found', drivers});
})
// get driver by ID
drivers.post('/id', async function(req,res){
   var resultID = await driverDB.getDriverByID(req.body.id);
   if (Object.keys(resultID).length == 0){
      console.log("FAIL");
      res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in id'})
   }
   else{
      //console.log('-- the result is: ', resultID);
      res.json({ status: 'ok', message: 'Driver Found', resultID})
   }
})

// get driver by name
drivers.post('/name', async function(req, res){
   // console.log("### NAME = ", req.body.name);
   var resultName = await driverDB.getDriverByName(req.body.name);
   if (Object.keys(resultName).length == 0){
      console.log("FAIL");
      res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
   }
   else{
      //console.log('-- the result is: ', resultName);
      res.json({ status: 'ok', message: 'Driver Found', resultName}); 
   }
})

// get driver by average greater than
drivers.post('/more', async function(req, res){
   // console.log("### NAME = ", req.body.name);
   var resultMore = await driverDB.getDriverByAvgMore(req.body.number);
   if (Object.keys(resultMore).length == 0){
      console.log("FAIL");
      res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
   }
   else{
      //console.log('-- the result is: ', resultMore);
      res.json({ status: 'ok', message: 'Driver Found', resultMore})
   }
})

// get driver by average less than
drivers.post('/less', async function(req, res){
   // console.log("### NAME = ", req.body.name);
   var resultLess = await driverDB.getDriverByAvgLess(req.body.number);
   if (Object.keys(resultLess).length == 0){
      console.log("FAIL");
      res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
   }
   else{
      //console.log('-- the result is: ', resultLess);
      res.json({ status: 'ok', message: 'Driver Found', resultLess})
   }
})


module.exports = drivers;