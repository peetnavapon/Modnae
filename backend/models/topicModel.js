const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    title: { type: String}, 
    descriptions: { type: String}, 
    comments: [{
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      }],
    }, 
    { timestamps: true },
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;