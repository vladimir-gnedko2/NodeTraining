let express = require('express');

let app = express();

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())
const port = 3000;



const cars = [
    {brand: 'TESLA', model: 'S', engineType: 'ELECTRIC', id: 1, age: 1},
    {brand: 'FORD', model: 'F450', engineType: 'GAS', id: 2, age: 11},
    {brand: 'VOLVO', model: 'S40', engineType: 'GAS', id: 3, age: 6},
    {brand: 'BMW', model: 'M5', engineType: 'GAS', id: 4, age: 4},
    {brand: 'AUDI', model: 'RS6', engineType: 'GAS', id: 5, age: 5},
    {brand: 'FORD', model: 'EXPLORER', engineType: 'DIESEL', id: 6, age: 7},
    {brand: 'AUDI', model: 'A8', engineType: 'DIESEL', id: 7, age: 10},
    {brand: 'BMW', model: 'I3', engineType: 'ELECTRIC', id: 8, age: 3},
    {brand: 'VOLVO', model: 'S70', engineType: 'DIESEL', id: 9, age: 8},
    {brand: 'TESLA', model: 'Y', engineType: 'ELECTRIC', id: 10, age: 2}
];

//GET /cars - возвращает массив всех авто по типу двигателя и бренду (query) (закоментирован потому что имеет точно такое же название как метод в самом низу)
// app.get('/cars', function(req, res) {
//     let result = cars.filter((i) => i.engineType == req.query.engineType && i.brand == req.query.brand);
//     res.send(result);
// });

//GET /cars - возвращает массив всех авто по типу двигателя (params)
app.get('/cars/:engineType', function(req, res){
    let result = cars.filter((i) => i.engineType == req.params.engineType);
    res.send(result);
});

// POST  -добавляет новую машину в массив. Возвращает новую машину 
app.post('/cars', function(req, res){
    cars.push(req.query)
    let result = cars[cars.length -1]
    res.send(result)
})



//PUT - изменяет машину по ID. Возвращает обновленную машину
app.put('/cars/:id', function(req, res) {
    const updatedCars = cars.map((i) => (i.id == req.params.id ?req.body : i));
    cars.splice(0, cars.length, ...updatedCars);
    res.send(cars)
})


// PATCH - изменяет поле машины по ID. Возвращает обновленную машину
app.patch('/cars/:id', function(req, res) {
    const updatedCars = cars.map(
    (i) => i.id == req.params.id ? {...i, model: req.body.model }: i);
    res.send(updatedCars);
})



//DELETE - удалят пользователя по ID. Возвращает boolean

app.delete('/cars/:id', function(req, res) {
    const id = cars.findIndex((i) => i.id == req.params.id);
    let result = cars.splice(id, 1).length >0 ? true: false;
    res.send(result);
});

//GET -  подходящих по возрасту машины
app.get('/cars', function(req, res) {
    let result = cars.filter((i) => i.age > req.query.min && i.age < req.query.max)
    console.log(result);
    res.send(result)
})





app.listen( port, () => console.log('SERVER WORKS'));

