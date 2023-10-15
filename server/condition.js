/*******************************
 * Title: condition.js 
 * @uthor: Louis De Jonckheere
 * version: 1.0
 * Started: 26/10/2022
 * Discription: this file holds the functions to  
 * create responses of the post and get requests
 *  -> connects with the database via getcondition.js
 * 
 */

const express = require('express');
const condition = express.Router();
const bodyParser = require("body-parser");
const conditionDB = require('./getcondition');

condition.use(bodyParser.json());
condition.use(bodyParser.urlencoded({ extended: true }));


// Get all conditions
condition.get('/all', async function(req,res){
    let conditions = await conditionDB.getAllConditions();
    console.log("all conditions");
    res.json({ status : "Succes", message: "Conditons Found", conditions});
})

// Get condition by ID
condition.post('/id', async function(req,res){
    let resultID = await conditionDB.getConditionByID(req.body.id);
    if(Object.keys(resultID).length == 0){
        res.json({ status: 'fault', message: 'Task Failed Succesfully -> Error in id'})
    }
    else {
        res.json({ status: 'ok', message: 'Condition Found', resultID})
    }
})

module.exports = condition;