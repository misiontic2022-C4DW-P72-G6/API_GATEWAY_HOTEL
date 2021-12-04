const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CatalogoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.catalogo_api_url;
    }
    async createCatalogo(catalogo) {
        catalogo = new Object(JSON.parse(JSON.stringify(catalogo)));
        return await this.post(`/catalogo/`, catalogo);
    }
    async getCatalogo(catalogoId) {
        console.log("*****************++++++++++++++++++++++++++++++++");
        console.log(catalogoId);
        return await this.get(`/catalogo/${catalogoId}/`);
    }



}
module.exports = CatalogoAPI;