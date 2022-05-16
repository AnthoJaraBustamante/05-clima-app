const { leerInput, inquirerMenu, pausa, listarLugares } = require("../helpers/inquirer");
const Busquedas = require("../models/busquedas");
require('dotenv').config();
const main = async () => {
    const busquedas = new Busquedas();
    let opt;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                const lugar = await leerInput('Ingrese una ciudad');
                const lugares = await busquedas.ciudad(lugar);
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(lugar => lugar.id === id);
                const { nombre, lat, lng } = lugarSel;
                const clima = await busquedas.climaLugar(lat, lng);
                const { desc, temp, min, max } = clima;
                console.clear();
                console.log('\nInformación de la ciudad \n'.green);
                console.log('Ciudad:', nombre);
                console.log('Latitud:', lat);
                console.log('Longitud:', lng);
                console.log('Temperatura:', temp);
                console.log('Minima:', min);
                console.log('Máxima:', max);
                console.log('Descripción:', desc);
                break;
        }
        await pausa(); 
    } while (opt != 0);
}
main(); 