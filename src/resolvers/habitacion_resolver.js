const habitacionResolver = {
    Query: {
        habitacionDetailById: (_, {idHabitacion}, { dataSources }) => {
            return dataSources.habitacionAPI.getHabitacion(idHabitacion)
        },
    },
   
};
module.exports = habitacionResolver