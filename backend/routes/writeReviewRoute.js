const express = require('express');
const router = express.Router();
const ReadReview = require("../models/writeReviewModel");
const User = require("../models/User")

router.post("/WriteReview",async(req, res) => {
    console.log(req.body);
    const {email} = req.body;
    const user = await User.findOne({email:email})
    const newReview = new ReadReview({
        userId: user._id,
        subject: req.body.subject,
        year: req.body.year,
        teacher: req.body.teacher,
        descriptions: req.body.descriptions,
        // timestamps: req.body.timestamps,
    });

    await newReview.save()
        .then(() => res.json(newReview))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;