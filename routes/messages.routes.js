
const { message } = require('antd');
const { response } = require('express');
let express = require('express');
let router = express.Router();



function Message (text, id){
    this.text = text;
    this.id = id;
};

let message1 = new Message ('ОШИБКА_1', 1)
let message2 = new Message ('ОШИБКА_2', 2)


let messages = [message1, message2]

console.log(messages);





router.get('/:id',(req, res) => {

    console.log(req.params); 
    
    const messageId = messages.find((item) => item.id == req.params.id);
       res.send(messageId);
   } );




router.post('/create', (req, res) => {
    messages.push(req.body)
    res.send(messages)
});


router.put('/edit', (req, res) => {
    messages.map((item) => item.text += ' PUT_method_is_work')
    res.send(messages)
});


router.delete('/delete');

module.exports = router;