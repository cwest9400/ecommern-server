//1. build out product controller first, then review controller
const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { Product } = require('../models')



//JSON body parser
router.use(express.json())

console.log(Product)

//ROUTES - http://localhost:4000/product

//All products route
router.get('/', async (req,res)=> {
    try {
        const allProduct = await Product.find({})
        res.status(200).json(allProduct)
    } catch (err){
        res.status(400).json({error: err})
    }
})

//create product route
router.post('/', async (req, res, next)=> {
    try {
        const createdProduct = await Product.create(req.body)
        console.log(createdProduct)
        res.status(201).json(createdProduct)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//update product route
router.put('/:id', async (req, res, next)=>{
    try {
        const updatedProduct = await db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatedProduct)
        return res.status(200).json(updatedProduct)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})


module.exports = router
