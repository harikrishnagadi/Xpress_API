const express = require('express');
var router =express.Router();
const database = require('./database');
const log = require('./logger');
const bodyParser = require('body-parser');

// add your routes here

const jsonparser= bodyParser.json();



// Get time from DB
router.get('/time', async function(req,res){
  var result = await database.queryTime();
  res.send(JSON.stringify(result));

});



router.post('/crbooking', jsonparser,async function(req,res){
    console.log(req.body);
    database.CreateBooking(req.body, async function(result){

          console.log("result is "+result);
          res.send(result);
    })

});

router.post('/ridestart', jsonparser,async function(req,res){
    console.log(req.body);
    const result = await database.RideStart(req.body);

  res.send(result);
});

router.post('/rideend', jsonparser,async function(req,res){
  console.log(req.body);
  const result = await database.RideStart(req.body);

res.send(result);
});

router.post('/canbooking', jsonparser,async function(req,res){
    console.log(req.body);
    const result = await database.CancelBooking(req.body);

  res.send(result);
});

router.post('/getallBookings', jsonparser,async function(req,res){
    console.log(req.body);
    const result = await database.GetallBookings();

  res.send(result);
});

router.post('/getbooking', jsonparser,async function(req,res){
    console.log(req.body);
    const result = await database.GetBooking(req.body);

  res.send(result);
});


module.exports = router;
