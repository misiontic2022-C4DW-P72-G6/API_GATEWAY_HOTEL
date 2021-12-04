const authResolver = require('./auth_resolver');
const catalogoResolver = require('./catalogo_resolver');
const habitacionResolver= require('./habitacion_resolver'); // ver
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,catalogoResolver,habitacionResolver);//habitacionResolver
module.exports = resolvers;