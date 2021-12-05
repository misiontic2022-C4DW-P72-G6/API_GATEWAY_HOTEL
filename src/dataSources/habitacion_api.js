const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class HabitacionAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.habitacion_api_url;
    }
    
    async getHabitacion(idHabitacion) {
        return await this.get(`/habitacion/${idHabitacion}/`);
    }



}
module.exports = HabitacionAPI;