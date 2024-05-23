const Role = require('../Models/Role');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { CreateError } = require('../utils/error');
const { CreateSuccess } = require('../utils/success');
const  UserToken = require('../Models/UserToken')
const nodemailer = require('nodemailer')


exports.register= async (req,res,next)=>{
    const role= await Role.find({role: 'User'});
    const salt= await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(req.body.Password, salt)
    const newUser=new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: hashPassword,
        roles: role


    });
    await newUser.save();
    // return next(CreateSuccess(200, "UserRegistered Successfully!!"));
    return res.status(200).json("User Registered Successfully");

}

// register-admin
exports.registerAdmin= async (req,res,next)=>{
    const role= await Role.find({});
    const salt= await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(req.body.Password,salt)
    const newUser=new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: hashPassword,
        isAdmin: true,
        roles: role
    });
    await newUser.save();
    // return next(CreateSuccess(200, "UserRegistered Successfully!!"));\
    return res.status(200).send("Admin Registered Successfully")
}


exports.login = async(req, res, next)=>{
    try {
        const user = await User.findOne({Email:req.body.Email})
        .populate("roles", "role");

        const {roles}=user;
        if(!user){
           return res.status(404).send("User Not Found")
        }
        const ispasswordCorrect = await bcrypt.compare(req.body.Password, user.Password);
        if(!ispasswordCorrect){
           return res.status(404).send("Incorrect Password")
        }
        const token = jwt.sign(
            {
                id:user._id, isAdmin: user.isAdmin,roles:roles
            },
            process.env.JWT_SECRET
        )
        res.cookie("access_token",token,{httpOnly:true})
        .status(200).json({
            status:200,
            message:"Login Success",
            data:user
        })

    } catch (error) {
    return res.status(500).send("Something went wrong")
        
    }
}

exports.sendEmail = async(req,res, next)=>{
    const email = req.body.Email;
    const user = await User.findOne({Email: {$regex: '^'+email+'$',$options: 'i'}});
    if(!user){
        return next(CreateError(404, "User not Found To Reset The Email"))
    }
    const payload ={
        email:user.Email
    }
    const expiryTime = 300;
    const token =jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:expiryTime});

    const newToken = new UserToken({
        userId: user._id,
        token:token
    });

    const mailTransporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "akashbhaskar789@gmail.com",
            pass: "tgkn qpic xmje qxms"
        }
    });
    let mailDetails = {
        from: "akashbhaskar789@gmail.com",
        to: email,
        subject: "ResetPassword",
        html: 
        `
        <html>
    <head>
    <title>Password Reset Request</title>
    
    </head>
    <body>
    <h1>Password Reset Request</h1>
    <p>Dear ${user.FirstName},</p>
    <p>We have received a request to reset password in your account in our website.To complete the reset process please click on the button below </p>
    <a href=${process.env.LIVE_URL}/reset/${token}><button style="background-color:#4CAF50;color:white;padding:14px 20px; border:none; cursor:pointer;border-radius:4px;">Reset Password</button></a>
    <p>Please not that this link is only valid for 5 mins. If you did not requesta a password reset,Please disregard this message</p>
    <p>Thank You</p>
    <p>Let's Program Team</p>
    </body>
    </html>

        `,

    };
    mailTransporter.sendMail(mailDetails, async (err, data) => {
        if (err) {
          console.log(err);
          return next(
            CreateError(500, "Something went wrong while sending the email")
          );
        } else {
          await newToken.save();
          return next(CreateSuccess(200, "Mail send successfully"));
        }
    });
}

exports.resetPassword = async(req,res,next)=>{
    const token = req.body.token;
    const newPassword = req.body.Password
      jwt.verify(token, process.env.JWT_SECRET, async(err,data)=>{
        if(err){
            return next(CreateError(500, "Reset Link Is Expired"))
        }else{
            const response = data;
            const user = await User.findOne({Email: {$regex: '^' + response.email+ '$',$options: 'i'}}); 
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(newPassword, salt);
            user.Password = encryptedPassword;
            try {
                const updatedUser = await User.findOneAndUpdate(
                    {_id:user._id},
                    {$set:user},
                    {new:true},
                )
                return next(CreateSuccess(200, "Password Reset Success"));
            } catch (error) {
                return next(CreateError(500, "Something went Wrong While Resetting the pasword"))
            }
        }
    })
}



