const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CatalogoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.catalogo_api_url;
    }

    async getCatalogo(catalogoId) {
        return await this.get(`/catalogo/${catalogoId}/`);
    }


    async getHabitacion(idHabitacion) {
        return await this.get(`/habitacion/${idHabitacion}/`);
    }



}
module.exports = CatalogoAPI;