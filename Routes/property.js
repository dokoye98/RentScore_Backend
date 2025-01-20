const express = require('express');
const Property = require('../Models/Property');
const upload = require('../config/multer'); 

const router = express.Router();


router.post('/', upload.array('images', 5), async (req, res) => {
    try {
        const { landlord, address, city, country, rent } = req.body;
        const imageUrls = req.files.map(file => file.path); 

        const property = new Property({
            landlord,
            address,
            city,
            country,
            rent,
            images: imageUrls
        });

        await property.save();
        res.status(201).json({ message: 'Property listed successfully!', property });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().populate('landlord', 'name email');
        res.json(properties);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('landlord', 'name email');
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
