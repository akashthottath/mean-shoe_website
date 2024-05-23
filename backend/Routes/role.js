const express = require ('express');
const Role = require('../Models/Role');
const { createRole, updateRole, getAllRoles, deleteRole } = require('../Controller/role.controller');
const { verifyAdmin } = require('../utils/verifyToken');

const router = new express.Router();

router.post('/create',verifyAdmin,createRole);

// update
router.put('/update/:id',verifyAdmin,updateRole);

// get all
router.get('/getAll',getAllRoles)

// delete
router.delete('/deleteRole/:id',deleteRole)

module.exports=router