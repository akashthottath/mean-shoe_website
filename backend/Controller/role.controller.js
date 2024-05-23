const Role = require('../Models/Role');
const { CreateError } = require('../utils/error');
const { CreateSuccess } = require('../utils/success');

exports.createRole = async ( req , res, next)=>{
    try{
        if(req.body.role && req.body.role !== ''){
            const newRole =new Role(req.body)
            await newRole.save();
            return next(CreateSuccess(200,"Role Created"))
        }else{
            return next(CreateError(400,"Bad request"))
        }
    }catch (error){
        return next(CreateError(500,"Internal server error"))
    }
}

exports.updateRole = async (req,res,next)=>{
    try {
        const role= await Role.findById({_id: req.params.id});
        if(role){
            const newData = await Role.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                
                {new:true}
            );
            return next(CreateSuccess(200,"Role Updated"))
        }else{
            return next(CreateError(404,"Role Not Found"))
        }
    } catch (error) {
        return next(CreateError(500,"Internal server error"))
    }
}

exports.getAllRoles = async (req,res, next)=>{
    try {
        const roles = await Role.find({});
        return res.status(200).send(roles)
    } catch (error) {
        return next(CreateError(500,"Internal server error"))
    }
}

exports.deleteRole = async (req,res,next)=>{
    try {
      const roleId= req.params.id;
      const role = await Role.findById({_id: roleId});
      if(role){
        await Role.findByIdAndDelete(roleId);
        return next(CreateSuccess(200,"Role Deleted"))
      }else{
        return next(CreateError(404,"Role Not Found"))
      }
    } catch (error) {
        return next(CreateError(500,"Internal server error"))
    }
}