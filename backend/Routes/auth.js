const express = require('express');
const { register, login, registerAdmin, sendEmail, resetPassword } = require('../Controller/auth.controller');

const router = new express.Router();

// register
router.post("/register",register);

// login
router.post("/login",login);

// register as admin
router.post("/register-admin",registerAdmin)

// forgetPass
router.post("/send-email",sendEmail)

// reset pass
router.post("/reset-password",resetPassword)


module.exports=router;