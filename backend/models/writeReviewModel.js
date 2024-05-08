const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    subject: { type: String},
    year: { type: String},
    teacher: { type: String},
    descriptions: { type: String}, 
    }, 
    // { timestamps: true } 
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;