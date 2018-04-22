var mongoose = require("mongoose");
var User = require("../models/user");
var Position = require("../models/position");

function login(username,password,longitude,latitude,distance){
    var authenticUser = User.findOne({userName});
    if (authenticUser== true)
    return Position.findById({username}).exec;
      if (err) 
       return handleError(err);

  }
  function updatePosition(username,pos){
    var locate = Position.findOne(username);
    return Position.findOneAndUpdate(username,{position:pos},{new:true});
  }

  function findNearby(point,dist){
     return Position.find(
      { loc : { $near : [ -73.9667, 40.78 ], $maxDistance: 0.10 } }
       );
  }