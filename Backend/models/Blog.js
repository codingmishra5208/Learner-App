const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String, 
        required: true,
    },
    published_date: {
        type: Date,
        default: Date.now,
    },
    reading_time: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    
}, { timestamps: true }); 

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;