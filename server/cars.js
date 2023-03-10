/*******************************
 * Title: cars.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 26/10/2022
 * Discription: this file holds the functions to  
 * create responses of the post and get requests
 *  -> connects with the database via getcars.js
 * 
 */

 const express = require('express');
 const cars = express.Router();
 const bodyParser = require("body-parser");
 const carDB = require('./getcars');
 
 cars.use(bodyParser.json());
 cars.use(bodyParser.urlencoded({ extended: true }));
 
 // Get all cars
 cars.get('/all', async function(req, res){
     var cars = await carDB.getAllCars();
     //console.log("All cars: ", cars);
     res.json({ status: 'Succes', message: 'cars Found', cars});
 })
 
 // Get car by ID
 cars.post('/id', async function(req,res){
     var resultID = await carDB.getCarByID(req.body.id);
     if (Object.keys(resultID).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in id'})
     }
     else{
        //console.log('-- the result is: ', resultID);
        res.json({ status: 'ok', message: 'car Found', resultID})
     }
  })
 
 // get car by name
 cars.post('/name', async function(req, res){
     var resultName = await carDB.getCarByName(req.body.name);
     if (Object.keys(resultName).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
     }
     else{
        //console.log('-- the result is: ', resultName);
        res.json({ status: 'ok', message: 'car Found', resultName})
     }
  })

  // get car by brand
 cars.post('/brand', async function(req, res){
    var resultBrand = await carDB.getCarByBrand(req.body.brand);
    if (Object.keys(resultBrand).length == 0){
       console.log("FAIL");
       res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
    }
    else{
       //console.log('-- the result is: ', resultBrand);     
       res.json({ status: 'ok', message: 'car Found', resultBrand})
    }
 })
 
 module.exports = cars;
