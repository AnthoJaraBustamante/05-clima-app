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
    get paramsWeather() {
        return {
            'appid': process.env.OPEN_WEATHER_KEY,
            'lang': 'es',
            'units': 'metric',
        }
    }
    async ciudad(lugar = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox,
            });
            const resp = await instance.get();
            return resp.data.features.map(
                lugar => ({
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lat: lugar.center[1],
                    lng: lugar.center[0],
                })
            );
        } catch (error) {
            return [];
        }
    }
    async climaLugar(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    ...this.paramsWeather,
                    lat,
                    lon,
                },
            });
            const resp = await instance.get();
            // console.log(resp.data);
            const { main, weather } = resp.data;
            return { 
                desc: weather[0].description,
                temp: main.temp,
                min: main.temp_min,
                max: main.temp_max,
            }
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = Busquedas;