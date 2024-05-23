require ('dotenv').config()

require ('./DB/connection.js')

const express=require('express')

const RoleRouter=require('./Routes/role.js')
const authRouter=require('./Routes/auth.js')
const userRouter=require('./Routes/user.js')
const productRouter=require('./Routes/product.js')


const  cors=require('cors')
const cookieParser = require('cookie-parser')

const shoeWebsite=express()

shoeWebsite.use(cors())

shoeWebsite.use(express.json())
shoeWebsite.use(cookieParser())

shoeWebsite.use("/api/role",RoleRouter)
shoeWebsite.use("/api/auth",authRouter )
shoeWebsite.use("/api/user",userRouter )
shoeWebsite.use("/api/product",productRouter)

// response handling middleware
shoeWebsite.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Something Went Wrong";
    return res.status(statusCode).json({
        success:[200,201,204].some(a=> a ===obj.status) ? true:false,
        status:statusCode,
        message:message,
        data:obj.data
    });

})


const PORT=3000||process.env.PORT


shoeWebsite.listen(PORT,()=>{
    console.log(`shoeWebsite run in ${PORT}`);
})

