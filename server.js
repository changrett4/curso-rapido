const express = require('express');
const routes = require('./routes/index.routes');

const app = express()

app.use(express.json());

routes(app)

app.listen(3000);