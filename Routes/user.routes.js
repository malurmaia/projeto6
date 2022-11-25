const { Router } = require('express');
const router = Router();
const { 
    listerUsers,
    createUser,
    listUser,
    deleteUser,
    editUser

 } = require('../Controller/userControlers')

router.get("/user",  listerUsers);

router.get("/user/:id", listUser);

router.post("/user", createUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", editUser);



module.exports = router;