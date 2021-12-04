const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ReservaAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.reservas_api_url;
    }
    async reservasById(idReserva) {
        console.log("entra getReserva "+idReserva);

        return await this.get(`/reservas/${idReserva}/`);
    }
    async createReserva(reserva) {
        reserva = new Object(JSON.parse(JSON.stringify(reserva)));
        console.log("entra getReserva "+reserva)
        return await this.post(`/reservas/`, reserva);
    }
    
  
}
module.exports = ReservaAPI;