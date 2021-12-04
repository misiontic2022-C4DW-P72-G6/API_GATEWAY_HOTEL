const { gql } = require('apollo-server');

const HabitacionTypeDefs = gql`

input HabitacionInput {
    tipoHabitacion: String!
    capacidadHabitacion: Int!
    costoHabitacion: Int!
    descripcionHabitacion: String!
    idHotel: Int!
}

type HabitacionDetail {
    idHabitacion: Int!
    tipoHabitacion: String!
    capacidadHabitacion: Int!
    costoHabitacion: Int!
    descripcionHabitacion: String!
    idHotel: Int!
}

input CredentialsInput {
    idHabitacion: Int!
}    

type Query {
    habitacionDetailById(idHabitacion: Int!): HabitacionDetail!
    
}
type Mutation {
    createHabitacion(habitacion: HabitacionInput!): HabitacionDetail


}`;


module.exports = HabitacionTypeDefs;