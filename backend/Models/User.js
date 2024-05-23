const mongoose=require ('mongoose')

// import { Schema } from 'mongoose'

const UserSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    roles:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true,
        ref: "Role"
    }
},
{
    timestamps:true
}
);
const User=mongoose.model("User",UserSchema)
module.exports=User