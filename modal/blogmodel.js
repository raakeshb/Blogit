const mongoose = require('mongoose')
const Schema  = mongoose.Schema // mongoose Schema for defining data model

const BlogsSchema = new Schema({
    "blogname":String,
    "description":String,
    "author":String,
    "links":String
})

module.exports = mongoose.model('blogs',BlogsSchema) // mongoose model for creating collection. Creates collection named 'blogs' with schema blogsSchema