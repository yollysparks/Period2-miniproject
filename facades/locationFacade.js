var mongoose = require("mongoose");
var LocationBlog = require("../models/locationBlog");

function addLocationBlog(inf, long, lat){
  return new LocationBlog({info: inf, pos: {longitude: long, latitude: lat}}).save();
}

function likeLocationBlog(blogId, userId){
	var blog = LocationBlog.findById(blogId);
	var blogArr = blog.likedBy;
	if (!blogArr) { blogArr = [] };
	blogArr.push(userId);
	return LocationBlog.findByIdAndUpdate(blogId, { likedBy: blogArr }, {new: true});


}

function getAllLocationBlogs(){
   return LocationBlog.find({}).exec();
}

function editLocationBlog(id, blogInfo){
	return LocationBlog.findByIdAndUpdate(id,  { info: blogInfo }, {new: true});
}

module.exports = {
  addLocationBlog: addLocationBlog,
  likeLocationBlog: likeLocationBlog,
  getAllLocationBlogs: getAllLocationBlogs,
  editLocationBlog: editLocationBlog
}