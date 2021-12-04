const authTypeDefs = require('./auth_type_defs');
const reservasTypeDefs = require('./reservas_type_defs');

//Se unen
const schemasArrays = [authTypeDefs,reservasTypeDefs];

//Se exportan
module.exports = schemasArrays;