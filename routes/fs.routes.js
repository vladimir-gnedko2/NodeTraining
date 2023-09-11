const { response } = require('express');
const express = require('express');
const  router = express.Router();
const fs = require('fs');
const FsConrtoller = require('../controllers/fs.conrtoller');

router.get('/read', async (req,res)=>{
    try {
        const read = await FsConrtoller.getRead();
        res.send(read)
        
    } catch (error) {
        console.log(error);
    } 
   
})



router.post('/write', async (req, res)=> {

    try {
        const write = await FsConrtoller.postWrite();
        res.send(write)
        
    } catch (error) {
        console.log(error);
    } 


})


module.exports = router;