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
    .populate('comments','content')
    .then(Topic=> {
        console.log(Topic)
        res.json(Topic)
    })
    .catch(err=> res.json(err))
})
router.route("/Topic/:id/comment").post((req, res) => {
    const topicId = req.params.id;
    const newComment = {
      content: req.body.content,
      // Add userId and username if applicable based on user authentication
    };
  
    Topic.findByIdAndUpdate(
      topicId,
      { $push: { comments: newComment } },
      { new: true } // Return the updated document
    )
      .then((topic) => {
        if (!topic) {
          return res.status(404).json("Topic not found");
        }
        res.json(topic);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;