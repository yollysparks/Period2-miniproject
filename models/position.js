var mongoose = require("mongoose");
var Schema = mangoose.Schema;

const MINUTES = 1;
var EXPIRES = 60 * MINUTES;
var PositionSchema = new mongoose.Schema({
  //Make sure that next line reflects your User-model
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  created: { type: Date, expires: EXPIRES, default: Date.now() },
  loc: {
	'type': { type: String, enum: "Point", default: "Point" },
 	coordinates: { type: [Number] }
  }
});

PositionSchema.index({ loc: "2dsphere" },{ "background": true });
module.exports = mongoose.model("Position",PositionSchema);
