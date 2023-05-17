const express = require('express');;
const router = express.Router();
const userRoutes = require("./users.routes");
const messageRoutes = require("./messages.routes");


router.use('/users', userRoutes);
router.use('/messages', messageRoutes); 

module.exports = router;