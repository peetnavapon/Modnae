const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    title: { type: String}, 
    descriptions: { type: String}, 
    comment:[
        {type: String}
    ]
    }, 
    { timestamps: true },
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;