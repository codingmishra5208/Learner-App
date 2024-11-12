const mongoose = require('mongoose');

const paidcourseSchema = new mongoose.Schema({
       name:String,
       price:String,
       category:String,
       image:String,
       title:String,
});

const Course = mongoose.model("Course",paidcourseSchema);

module.exports = Course
