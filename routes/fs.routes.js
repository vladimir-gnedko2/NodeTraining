const { response } = require('express');
const express = require('express');
const  router = express.Router();
const fs = require('fs');

router.get('/read', (req,res)=>{
    console.log('read');
    fs.readFile('data.json', 'utf-8', function(error, data) {
        console.log('асинхронное чтение файла');
        if(error) throw error;
        console.log(typeof data);
        const obj = JSON.parse(data);
        console.log(data);
        console.log(typeof data);
        res.send(obj)
    })
})



router.post('/write', (req, res)=> {
    console.log('write');
    let data = fs.readFileSync('data.json', 'utf-8');
    console.log(data);
    const obj = JSON.parse(data);
        console.log(obj);
    obj.push(req.body);
    console.log(obj);
    fs.writeFile('data.json', JSON.stringify(obj, null, 3), function(error){
        if(error) throw error;
        console.log('завершено');
    })
})


module.exports = router;