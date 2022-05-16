const { leerInput, inquirerMenu, pausa } = require("../helpers/inquirer");
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
                await busquedas.ciudad(lugar);
                // console.log(lugar);
                //Mostrar mensaje

                //Buscar ciudad

                //Selección de lugar;

                //Clima

                //Mostrar resultados

          
                

                await pausa();
                break;


        }
        await pausa();

    } while (opt != 0);
}
main(); 