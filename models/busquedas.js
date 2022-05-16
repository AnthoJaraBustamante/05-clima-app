const axios = require('axios');
class
    Busquedas {
    hitorial = ['Arequipa', 'Tacna', ' Lima', 'Cuzco', 'Trujillo', 'Huánuco'];
    constructor() {
        // this.hitorial = ['Arequipa', 'Tacna', ' Lima', 'Cuzco', 'Trujillo', 'Huánuco'];
    }
    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'language': 'es',
            'proximity': 'ip',
            'limit': 5,
        }
    } 
    async ciudad(lugar = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox,
            });
            const resp = await instance.get();
            console.log(resp.data);
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;