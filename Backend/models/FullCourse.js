const mongoose = require('mongoose');
 
const FullCourseSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    title:String,
    description:String,
    duration:String,

})

const  FullCourses = mongoose.model("fullcourse",FullCourseSchema);

module.exports = FullCourses;



