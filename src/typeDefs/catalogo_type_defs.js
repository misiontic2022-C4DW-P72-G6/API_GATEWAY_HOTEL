const { gql } = require('apollo-server');

const CatalogoTypeDefs = gql`
input CatalogoInput {
    Nombre: String!
    Ubicacion: String!
    Calificacion: Int!
    Direccion: String!
    Descripcion: String!
    Correo: String!
   
}
type CatalogoDetail {
    idHotel: Int!
    Nombre: String!
    Ubicacion: String!
    Calificacion: Int!
    Direccion: String!
    Descripcion: String!
    Correo: String!
}


input CredentialsInput {
    idHotel: Int!
}
type Query {
    catalogoDetailById(catalogoId: Int!): CatalogoDetail
}

type Mutation {
    createCatalogo(catalogo: CatalogoInput!): CatalogoDetail
}`;

module.exports = CatalogoTypeDefs;