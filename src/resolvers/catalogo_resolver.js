const catalogoResolver = {
    Query: {
        catalogoDetailById: (_, {catalogoId}, { dataSources}) => {
            
            return dataSources.catalogoAPI.getCatalogo(catalogoId)
    
        },
    },
};
module.exports = catalogoResolver;