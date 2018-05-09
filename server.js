const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
require('./connection');

const app = express();
routes(app);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`listening to the magic port : ${port}\n`);
});
