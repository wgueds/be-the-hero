// importando express
const express = require('express');

// import cors
const cors = require('cors');

// import routes files
const routes = require('./routes');

// import celebrate to trait response errors
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
app.get('/', (request, response) => {
    return response.json(['teste']);
});
*/

// porta para acesso
// app.listen(3333); -> change to server.js

module.exports = app;