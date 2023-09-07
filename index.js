require('dotenv').config()
let express = require('express');
let app = express();



let bodyParser = require('body-parser')
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

const routes = require("./routes/index");
const { text } = require('body-parser');
app.use("/api", routes);

const fs = require('fs')
// let file_readed = fs.readFileSync('data.txt', 'utf-8')
// console.log(file_readed);

app.listen(port, () => console.log('SERWER WORKS'));