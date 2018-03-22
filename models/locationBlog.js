var mongoose = require("mongoose");
var Schema =  mangoose.Schema;

var LocationBlogSchema = new Schema({
    info:{type: String,require: true},
    img: String,
    pos:{
        longitude: {type: Number,require: true},
        latitude: {type: Number,require: true}
       },
   author: Schema.types.ObjectId,
   likes: [Schema.types.ObjectId],
   created: {type: Date,default:Date.now},
   lastUpdated: {type: Date,default:Date.now},
   
})
locationBlogSchema 
.virtual("slug")
.get(function(){
    return "/locationBlog/",+this._id;
})
locationBlogSchema.pre("save",function(next){
    this.lastUpdated= Date.now;
})
module.exports = mongoose.model("Location",PositionSchema);