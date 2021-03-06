const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }
    async createUser(usuario) {
        usuario = new Object(JSON.parse(JSON.stringify(usuario)));
        return await this.post(`/usuarios/`, usuario);
    }
    async getUser(userId) {
        return await this.get(`/usuarios/${userId}/`);
    }
    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }
}
module.exports = AuthAPI;
