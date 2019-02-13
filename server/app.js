const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routes/parties');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/parties',routers);

const port = process.env.port || 3030;

app.listen(port, () => {

})

module.exports = app;