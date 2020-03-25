const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

// exportando variavel de conexao
module.exports = connection;