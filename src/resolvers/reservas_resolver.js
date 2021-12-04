const reservasResolver = {
    Query: {
        reservaDetailById: (_, { idReserva }, { dataSources }) => {
         console.log("entra a detail Id:"+idReserva)
                var resultado=dataSources.reservasAPI.reservasById(idReserva);
                console.log("resultado"+resultado);
               return  resultado
        },
    },
    /*
    Mutation: {
        createReservas: async(_, { reservaInput }, { dataSources }) => {
            console.log("entra create "+reservaInput.idReserva)
            const ReservarInput ={
                idReserva: reservaInput.idReserva,
                nombrecuentaUsuario: reservaInput.nombrecuentaUsuario,
                fechaReserva: reservaInput.fechaReserva,
                fechaInicio: reservaInput.fechaInicio,
                fechaFin: reservaInput.fechaFin,
                personas: reservaInput.personas,
                idHotel: reservaInput.idHotel,
                estado: reservaInput.estado,
                mediodePago: reservaInput.mediodePago,}

            return await dataSources.reservas_api.createReserva(ReservaInput)
            },
    },*/
    
};
   
module.exports = reservasResolver;