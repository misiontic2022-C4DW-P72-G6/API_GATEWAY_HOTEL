const authResolver = require('./auth_resolver');
const catalogoResolver = require('./catalogo_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,catalogoResolver);
module.exports = resolvers;