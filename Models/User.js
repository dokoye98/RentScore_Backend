const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['tenant', 'landlord'], required: true },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
  });

module.exports = mongoose.model('User', UserSchema);
