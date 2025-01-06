const express = require('express');

const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(bodyParser.urlencoded());

app.use(routes);
