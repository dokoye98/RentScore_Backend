const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    landlord: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    city: String,
    country: String,
    rent: Number,
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
  });

module.exports = mongoose.model('Property', PropertySchema);
