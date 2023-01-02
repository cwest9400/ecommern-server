const mongoose = require("mongoose")
const Product = require("./Products")

const ProductReviewSchema = new mongoose.Schema({
    productId: { ref: Product._id },
    rating: {
        type: Number,
        required: true,
        minlegnth: 1,
        maxlength: 5
    },
    comment: {
        String,
        required: true,
        maxlength: 250
    },

    price: Number,
}, {timestamps: true})

const ProductReview = mongoose.model("Review", ProductReviewSchema)
module.exports = ProductReview