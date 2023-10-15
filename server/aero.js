/*******************************
 * Title: aero.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 22/10/2022
 * Discription: this file holds the functions to  
 * create responses of the post and get requests
 *  -> connects with the database via getaero.js
 * 
 */

const express = require('express');
const aero = express.Router();
const bodyParser = require("body-parser");
const aeroDB = require('./getaero');

aero.use(bodyParser.json());
aero.use(bodyParser.urlencoded({ extended: true }));

// Get all aeropackages
aero.get('/all', async function(req, res){
    let aeropacks = await aeroDB.getAllAero();
    res.json({ status: 'Succes', message: 'aeropackages Found', aero: aeropacks});
})

 // Get aeropack by ID
aero.post('/id', async function(req,res){
    let resultID = await aeroDB.getAeroByID(req.body.id);
    if (Object.keys(resultID).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed -> Error in id'})
    }
    else{
        res.json({ status: 'ok', message: 'Aero Found', resultID})
    }
})
 
 // get aero by brand
aero.post('/brand', async function(req, res){
    let resultBrand = await aeroDB.getAeroByBrand(req.body.brand);
    if (Object.keys(resultBrand).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed -> Error in name'})
    }
    else{
        res.json({ status: 'ok', message: 'Aero Found', resultBrand})
    }
})

 // get aero by type
 aero.post('/type', async function(req, res){
    let resultType = await aeroDB.getAeroByType(req.body.type);
    if (Object.keys(resultType).length == 0){
        console.log("FAIL");
        res.json({ status: 'fault', message: 'Task Failed -> Error in name'})
    }
    else{
        res.json({ status: 'ok', message: 'Aero Found', resultType})
    }
})

module.exports = aero;