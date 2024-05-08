const express = require('express');
const router = express.Router();
const ReadReview = require("../models/writeReviewModel");

router.route("/WriteReview").post((req, res) => {
    console.log(req.body);
    const newReview = new ReadReview({
        subject: req.body.subject,
        year: req.body.year,
        teacher: req.body.teacher,
        descriptions: req.body.descriptions,
        // timestamps: req.body.timestamps,
    });

    newReview.save()
        .then(() => res.json(newReview))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;