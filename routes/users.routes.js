const { response } = require('express');
let express = require('express');
let router = express.Router();


function User (name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
};

let user1 = new User ('Pasha', 25, 1);
let user2= new User ('Vova', 29, 2);
let user3 = new User ('Gena', 28, 3);

let users = [user1, user2, user3];

console.log(users);




router.get('/:id', (req, res) => {
 console.log(req.params); 
 
 const userId = users.find((item) => item.id == req.params.id);
    res.send(userId);
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