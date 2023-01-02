const mongoose = require("mongoose")
const Product = require("./Product")

const ProductReviewSchema = new mongoose.Schema({
   
    rating: {
        type: Number,
        required: [true],
        minlegnth: 1,
        maxlength: 5
    },
    comment: {
        type: String,
        required: true,
        max: 250
    },
    //relationship to product
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },
}, {timestamps: true})

const ProductReview = mongoose.model("Review", ProductReviewSchema)
module.exports = ProductReview