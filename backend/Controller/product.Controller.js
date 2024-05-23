const Product = require('../Models/Product');
const { CreateError } = require('../utils/error');
const { CreateSuccess } = require('../utils/success');

// product adding
exports.addProduct = async(req,_res,next)=>{

const {Id, productName, image, price, brand, description } = req.body;

try {
    const newProduct = new Product({
        Id,productName,image,price,brand,description,
    });
    await newProduct.save();
    return next(CreateSuccess(200, "Product Added Successfully"))
} catch (error) {
    return next(CreateError(500, "Internal Server Error"))
}
}

// get product
exports.getProduct = async(req,res,next)=>{
 try {
    const allProduct = await Product.find();
    return next(CreateSuccess(200, "All Product",allProduct));
 } catch (error) {
    return next(CreateError(500, "Internal Server Error"));
 }
}

//view single product
exports.getAProduct = async(req,res,next)=>{
    const {id} = req.params

    try {
        const singleProduct = await Product.findOne({_id:id})
        return next(CreateSuccess(200, "Single Product",singleProduct))
    } catch (error) {
        return next(CreateError(500, "Internal server error"))
    }
} 

// delete pdt
exports.deleteProduct = async (req,res,next)=>{
    const {id} =req.params;

    try {
       const deleteProduct = await Product.findByIdAndDelete({_id:id});
       return next(CreateSuccess(200, "Product deleted",deleteProduct));
    } catch (error) {
        return next(CreateError(500, "Internal Server Error"))
    }
}

// edit product
exports.editProduct = async (req,res,next)=>{
    const {id}=req.params;
    const {Id, productName, image, price, brand, description}=req.body;
    try {
      const editProduct = await Product.findByIdAndUpdate(
        {_id:id},
        {Id, productName, image, price, brand, description},
        {new:true}
      );
      await editProduct.save();
      return next(CreateSuccess(200, "Product Edited Successfully",editProduct)); 
    } catch (error) {
        console.log(error);
        return next(CreateError(500, "Internal Server Error"));
    }
}