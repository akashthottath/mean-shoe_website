const User = require("../Models/User")
const { CreateError } = require("../utils/error")
const { CreateSuccess } = require("../utils/success")

exports.getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find()
        return next(CreateSuccess(200, "Users Found", users));
    } catch (error) {
        return next(CreateError(500, "Internal Server Error!!"))       
    }
}

exports.getById = async (req,res,next)=>{
    try {
       const user = await User.findById(req.params.id); 
       if(!user){
        return next(CreateError(404, "User Not Found!!"))
       }else{
        return next(CreateSuccess(200, "Single User",user))
       }      
    } catch (error) {

        return next(CreateError(500, "Internal Server Error!!"))
        
    }
}

// deleteuser
exports.deleteUser=async(req,res,next)=>{
    const {id}=req.params;

    try {
        const deleteUser = await User.findByIdAndDelete({_id:id})

        return next(CreateSuccess(200, "User Deleteed", deleteUser))
    } catch (error) {
        return next(CreateError(500, "Internal Server Error"))
    }
}