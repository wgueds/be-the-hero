// importando express
const express = require('express');

// import cors
const cors = require('cors');

// importando arquivo de rotas
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
app.get('/', (request, response) => {
    return response.json(['teste']);
});
*/

// porta para acesso
app.listen(3333);