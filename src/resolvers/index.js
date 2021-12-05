const authResolver = require('./auth_resolver');
const reservasResolver = require('./reservas_resolver');
const catalogoResolver = require('./catalogo_resolver');
const habitacionResolver= require('./habitacion_resolver'); 
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,catalogoResolver,habitacionResolver,reservasResolver);
module.exports = resolvers;