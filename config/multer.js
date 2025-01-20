const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary'); // Import Cloudinary setup

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'property-images', // Cloudinary folder for storing images
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: [{ width: 800, height: 600, crop: 'limit' }]
    }
});

const upload = multer({ storage });

module.exports = upload;
