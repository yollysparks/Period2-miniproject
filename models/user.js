var mongoose = require("mongoose");
var Schema =  mangoose.Schema;

var JobSchema = new Schema({
    type: String,
    company: String,
    CompanyUrl: String
})
var userSchema = new Schema({
    userName: {type: String,requires:true,unique:true},
    password: {type: String,requires:true,unique:true},
    firstName: String,
    lastName: String,
    email: {type:String,require: true},
    job:[JobSchema],
    created: {type: Date, Default: Date.now},
    lastUpdated: Date

});
 userSchema.pre("save",function(next){
 this.password ="indeche13"+ password;
 this.lastUpdated= Date.now;
 })
module.exports = mongoose.model("User",userSchema);


    