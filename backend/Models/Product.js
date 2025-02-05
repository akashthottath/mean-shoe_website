const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Id: {
        type: String,
        required:true,
        unique:true
    },
    productName: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    brand: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    }
},
{
    timestamps:true
})

const Product =mongoose.model('Product',productSchema)
module.exports=Product