const express = require('express');
const Review = require('../Models/Review');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { reviewer, property, rating, reviewText } = req.body;

        const review = new Review({ reviewer, property, rating, reviewText });
        await review.save();

        res.status(201).json({ message: 'Review added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
