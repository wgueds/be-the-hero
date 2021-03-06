//const crypto = require('crypto');

// import function to generate unique id
const generateUniqueId = require('../utils/generateUnique');

// importando conexao do banco de dados
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        // gerando ID
        //const id = crypto.randomBytes(4).toString('HEX');
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({id});
    }
};