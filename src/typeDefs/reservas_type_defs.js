const { gql } = require('apollo-server');

const reservasTypeDefs = gql`
    type Reserva {
        idReserva: Int!
        nombrecuentaUsuario: Int!
        fechaReserva: String
        fechaInicio: String
        fechaFin : String
        personas : Int!
        idHotel : Int!
        habitacion : String!
        estado : String!
        medioPago : String!   
    }
    
    input ReservaInput{
        idReserva: Int!
        nombrecuentaUsuario: Int!
        fechaReserva: String
        fechaInicio: String
        fechaFin : String
        personas : Int!
        idHotel :Int!
        habitacion : String!
        estado : String!
        medioPago : String! 
    }
    extend type Query {
    reservaDetailById(idReserva: Int!): Reserva!
    
    } 
    extend type Mutation {
        crearReserva(reserva: ReservaInput):Reserva!
    }`;




module.exports = reservasTypeDefs;