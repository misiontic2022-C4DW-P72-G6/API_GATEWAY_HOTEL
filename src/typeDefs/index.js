const authTypeDefs = require('./auth_type_defs');
const catalogoTypeDefs = require('./catalogo_type_defs');

//Se unen
const schemasArrays = [authTypeDefs,catalogoTypeDefs];

//Se exportan
module.exports = schemasArrays;