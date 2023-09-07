const { response } = require('express');
let express = require('express');
let router = express.Router();
const UsersControllers = require('../controllers/users.controller')






router.get('/', async (req, res) => {
    try {
        const users = await UsersControllers.getUsers()
        res.send(users);
    } catch (e) { 
        console.log(e);
    }
   
});

router.get('/userId/:id', (req, res) => {
    try {
        const user = UsersControllers.getUsersId(req.params.id)
        res.send(user);
    } catch (e) {
        console.log(e);
    }
   
});






router.post('/create', (req, res) => {

    users.push(req.body)  
    res.send(users)   
});


router.put('/edit', (req, res) => {
    users.map((item) => item.id += 2)
    res.send(users)
});



router.delete('/delete');

module.exports = router;