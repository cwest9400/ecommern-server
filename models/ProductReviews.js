const mongoose = require("mongoose")
const Product = require("./Product")

const ProductReviewSchema = new mongoose.Schema({
    // product: {
    //     // type: mongoose.Types.ObjectId,
    //     ref: "Product"},
    rating: {
        type: Number,
        required: [true],
        minlegnth: 1,
        maxlength: 5
    },
    comment: {
        type: String,
        required: true,
        maxlength: 250
    },
}, {timestamps: true})

const ProductReview = mongoose.model("Review", ProductReviewSchema)
module.exports = ProductReview