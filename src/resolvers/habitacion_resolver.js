const habitacionResolver = {
    Query: {
        habitacionDetailById: (_, {idHabitacion}, { dataSources }) => {
            console.log("rrrrrrr");
            console.log(idHabitacion);
            let dato = dataSources.catalogoAPI.getHabitacion(idHabitacion)
            console.log(dato)
            return dataSources.catalogoAPI.getHabitacion(idHabitacion)
        },
    },
   
};
module.exports = habitacionResolver