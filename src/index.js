const { leerInput, inquirerMenu, pausa, listarLugares } = require("../helpers/inquirer");
const Busquedas = require("../models/busquedas");
require('dotenv').config();
const main = async () => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();
        // console.log({ opt });
        switch (opt) {
            case 1:
                const lugar = await leerInput('Ingrese una ciudad');
                const lugares = await busquedas.ciudad(lugar);
                // console.log(lugares);
                const id = await listarLugares(lugares);
                console.log({ id });
                const lugarSel = lugares.find(lugar => lugar.id === id);
                const { nombre, lat, lng } = lugarSel;
                console.log('\nInformación de la ciudad \n'.green);
                console.log('Ciudad:', nombre);
                console.log('Latitud:', lat);
                console.log('Longitud:', lng);



                await pausa();
                break;


        }
        await pausa();

    } while (opt != 0);
}
main(); 