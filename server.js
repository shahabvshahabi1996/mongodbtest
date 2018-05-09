const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
require('./connection');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

routes(app);
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`listening to the magic port : ${port}\n`);
});
