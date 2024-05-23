const express = require('express');
const { getAllUsers, deleteUser } = require('../Controller/user.controller');
// const { verifyAdmin, verifyUser } = require('../utils/verifyToken');

const router =new express.Router();

// get all user
router.get("/all-users",getAllUsers);

// deleteUser
router.delete("/user-delete/:id",deleteUser);


module.exports=router;

