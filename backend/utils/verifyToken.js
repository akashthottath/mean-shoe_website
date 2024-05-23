const jwt = require('jsonwebtoken');
const { CreateError } = require('./error.js');

exports.verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
    return next(CreateError(402, "You are Not Authenticated"));
    }
    jwt.verify(token,process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return next(CreateError(403, "Token Is Not Valid"));
        }else{
            req.user = user;
        }      
        next();
    })
}

exports.verifyUser = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(CreateError(403, "You Are Not Authorized"))
        }
    })
}

exports.verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        
        if(req.user.isAdmin){
            next();
        }else{
            return next(CreateError(403, "You Are Not Authorized"))
        }
    })
}