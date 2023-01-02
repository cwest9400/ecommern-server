const mongoose = require("mongoose")
const ProductReview = require("./ProductReviews")

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc: String,
    img: String,
    price: Number,
    reviews: [ProductReview]
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product