const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productTitle:{ type: String },
    productPrice:{ type: Number},
    productDescription: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);