
const authResolver = require('./auth_resolver');
const reservasResolver = require('./reservas_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,reservasResolver);
module.exports = resolvers;