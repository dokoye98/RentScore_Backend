const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    landlord: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    city: String,
    country: String,
    rent: Number,
    images: [{ type: String }], 
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.models.Property || mongoose.model('Property', PropertySchema);
