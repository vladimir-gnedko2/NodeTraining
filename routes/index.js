const express = require('express');;
const router = express.Router();
const userRoutes = require("./users.routes");
const messageRoutes = require("./messages.routes");
const fsRoutes = require('./fs.routes')

router.use('/users', userRoutes);
router.use('/messages', messageRoutes); 
router.use('/fs', fsRoutes);

module.exports = router;