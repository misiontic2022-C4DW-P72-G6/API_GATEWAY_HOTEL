const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api');
const ReservaAPI=require('./dataSources/reservas_api')
const CatalogoAPI = require('./dataSources/catalogo_api');
const HabitacionAPI = require('./dataSources/habitacion_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        reservasAPI: new ReservaAPI(),
        catalogoAPI: new CatalogoAPI(),
        habitacionAPI: new HabitacionAPI(),
        
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});