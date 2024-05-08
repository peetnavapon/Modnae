const express = require('express');
const router = express.Router();
const Review = require("../models/writeReviewModel");

router.route("/ReadReview").get(async (req, res) => {
  const subject = req.query.subject;
  try {
    let reviews;
    if (subject) {
      reviews = await Review.find({ subject });
    } else {
      reviews = await Review.find();
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
