const reservasResolver = {
    Query: {
        reservaDetailById: (_, { idReserva }, { dataSources }) => {
         console.log("entra a detail Id:"+idReserva)
                var resultado=dataSources.reservasAPI.reservasById(idReserva);
                console.log("resultado"+resultado);
               return  resultado
        },
    },
    
    Mutation: {
        crearReserva: async(_, { reserva }, { dataSources }) => {
            const reservaInput ={
                idReserva: reserva.idReserva,
                nombrecuentaUsuario: reserva.nombrecuentaUsuario,
                fechaReserva: reserva.fechaReserva,
                fechaInicio: reserva.fechaInicio,
                fechaFin: reserva.fechaFin,
                personas: reserva.personas,
                idHotel: reserva.idHotel,
                estado: reserva.estado,
                habitacion:reserva.habitacion,
                medioPago: reserva.medioPago,
            }

            return await dataSources.reservasAPI.createReserva(reservaInput);
            },
    },
    
};
   
module.exports = reservasResolver;