const authTypeDefs = require('./auth_type_defs');
const reservasTypeDefs = require('./reservas_type_defs');
const catalogoTypeDefs = require('./catalogo_type_defs');
const HabitacionTypeDefs = require('./habitacion_type_defs');


const schemasArrays = [authTypeDefs,catalogoTypeDefs,HabitacionTypeDefs,reservasTypeDefs];


//Se exportan
module.exports = schemasArrays;