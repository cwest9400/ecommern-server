const mongoose = require("mongoose")
const ProductReview = require("./ProductReviews")

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, "product must have a name"]
    },
    desc: String,
    img: String,
    price: {
        type: Number,
        min: [0, 'you can not add a negative number'],
        required: [true, "price can not be empty"],
    },
    // reviews: [ProductReview]
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;