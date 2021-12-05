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
    
    tipoHabitacion: String!
    capacidadHabitacion: Int!
    costoHabitacion: Int!
    descripcionHabitacion: String!
    idHotel: Int!
}

 

type Query {
    habitacionDetailById(idHabitacion: Int!): HabitacionDetail!
    
}
type Mutation {
    createHabitacion(habitacion: HabitacionInput!): HabitacionDetail!


}`;


module.exports = HabitacionTypeDefs;