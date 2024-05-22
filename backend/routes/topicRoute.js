const express = require('express');
const router = express.Router();
const Topic = require("../models/topicModel");
const User = require("../models/User");

router.post("/Topic", async (req, res) => {
  try {
    const { email, title, descriptions } = req.body;
    const user = await User.findOne({ email:email });
    const newTopic =  new Topic({
      userId: user._id,
      title,
      descriptions,
    });
    await newTopic.save()
    .then(() => res.json(newTopic))
  } catch (err) {
    return res.status(500).send(err);
  }
});


router.route("/ReadTopic").get((req, res) => {
  Topic.find()
    .populate('comments', 'content')
    .then((topics) => {
      console.log(topics);
      res.json(topics);
    })
    .catch((err) => res.json(err));
});

router.post("/Topic/:id/comment", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const topicId = req.params.id;
  const newComment = {
    userId: user._id,
    content: req.body.content,
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
