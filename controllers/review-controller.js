//2. incomplete - make product-controller first
const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { ProductReview } = require('../models')
const { Product } = require('../models')

//JSON body parser
router.use(express.json())
router.use(express.urlencoded({ extended: true }));

//get all reviews route
router.get('/', async (req, res, next) => {
  try {
    const allReviews = await ProductReview.find({}).populate("product")
    res.status(200).json(allReviews)
  } catch (err) {
    console.log(err)
    next(err)
  }
});

//create route
router.post('/', async (req, res, next) => {
  try {
    const newReview = await ProductReview.create(req.body)
    res.status(200).json(newReview)
  } catch(err) {
    console.log(err);
    return next(err);
  }
})

//show route for reviews - display details - http://localhost:4000/reviews/
router.get('/:id', async (req, res, next) => {
  try {
    const foundProduct = await Product.findById(req.params.id);
    const allReviews = await ProductReview.find({ product: req.params.id });
    res.status(200).json({ product: foundProduct, reviews: allReviews })
  } catch (err) {
    console.log(err);
    return next(err)

  }
})

module.exports = router