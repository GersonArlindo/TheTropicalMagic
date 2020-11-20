const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
    price: Number
});

module.exports = model('Articles', ArticleSchema);