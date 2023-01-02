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

//update review
router.put('/:id', async (req, res)=>{
  try {
      const updatedReview = await ProductReview.findByIdAndUpdate(req.params.id, req.body, {new:true})
      console.log(updatedReview)
      res.status(200).json(updatedReview)
  } catch(err) {
      res.status(400).json({error:err})
  }
})

//delete route
router.delete('/:id', async (req, res, next)=> {
  try {
    const deletedReview = await ProductReview.findByIdAndDelete(req.params.id);
    const deletedReviews = await ProductReview.deleteMany({ product: req.params.id });
    res.redirect(200,'/product')

  }catch (err) {
    res.status(400).json({error: err})
  }
})
module.exports = router