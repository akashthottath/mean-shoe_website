const express = require('express');
const { addProduct, getProduct, getAProduct, deleteProduct, editProduct } = require('../Controller/product.Controller');

const router = new express.Router();

// add product
router.post('/add-product',addProduct)

// get product
router.get('/get-product',getProduct)

// get single product
router.get('/view/:id',getAProduct)

// delete product
router.delete('/product-delete/:id',deleteProduct)

// edit product
router.put('/edit-product/:id',editProduct)

module.exports=router;