const knex_file = require('../../knexfile')
const knex = require('knex')(knex_file['development'])

module.exports= knex