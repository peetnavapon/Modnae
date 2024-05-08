const express = require('express');
const router = express.Router();
const Topic = require("../models/topicModel");

router.route("/Topic").post((req, res) => {
    console.log(req.body);
    const newPost = new Topic({
        title: req.body.title,
        descriptions: req.body.descriptions,
        // timestamps: req.body.timestamps,
    });

    newPost.save()
        .then(() => res.json(newPost))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/ReadTopic").get((req,res)=>{
    console.log(req.body);
    Topic.find()
    .then(Topic=> {
        console.log(Topic)
        res.json(Topic)
    })
    .catch(err=> res.json(err))
})

module.exports = router;