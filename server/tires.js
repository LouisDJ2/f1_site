/*******************************
 * Title: tire.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * last modified: 24/10/2022
 * Discription: this file holds the functions to test 
 * the genericness of getdrivers.js
 * 
 */

const express = require('express');
const tires = express.Router();
const bodyParser = require("body-parser");
const tiresDB = require('./gettires');

tires.use(bodyParser.json());
tires.use(bodyParser.urlencoded({ extended: true }));

// get all tires 
tires.get('/all', async function(req,res){   
    var result = await tiresDB.getAllTires();
    //console.log('-- the result is: ', result);
    res.json({ status: 'ok', message: 'Tires Found', result});
})

// get tire by ID
tires.post('/id', async function(req,res){
    var resultID = await tiresDB.getTireByID(req.body.id);
    if (Object.keys(resultID).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in id'})
    }
    else{
        //console.log('-- the result is: ', resultID);
        res.json({ status: 'ok', message: 'tire Found', resultID})
    }
})

// get tire by name
tires.post('/name', async function(req, res){
    // console.log("### NAME = ", req.body.name);
    var resultName = await tiresDB.getTireByName(req.body.name);
    if (Object.keys(resultName).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
    }
    else{
        //console.log('-- the result is: ', resultName);
        res.json({ status: 'ok', message: 'Tires Found', resultName});
    }
})

// get tire by brand
tires.post('/brand', async function(req, res){
    // console.log("### NAME = ", req.body.name);
    var resultBrand = await tiresDB.getTireByBrand(req.body.brand);
    if (Object.keys(resultBrand).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in name'})
    }
    else{
        //console.log('-- the result is: ', resultBrand);
        res.json({ status: 'ok', message: 'Tires Found', resultBrand});
    }
})



module.exports = tires;