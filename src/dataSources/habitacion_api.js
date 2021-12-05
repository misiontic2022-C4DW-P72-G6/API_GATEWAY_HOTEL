const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class HabitacionAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.habitacion_api_url;
    }
    
    async createHabitacion(habitacion) {
        habitacion = new Object(JSON.parse(JSON.stringify(habitacion)));
        return await this.post(`/habitacion/`, habitacion);
    }
    async getHabitacion(idHabitacion) {
        console.log("zzzzzzzzzzzzzzz");
        console.log(idHabitacion);
        return await this.get(`/habitacion/${idHabitacion}/`);
    }



}
module.exports = HabitacionAPI;