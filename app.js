const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

let getInfo = async(direccion) => {

    try {
        let geometry = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(geometry.lat, geometry.lng);
        return `El clima en ${geometry.direccion} es de ${temp}`;

    } catch {

        return `No se pudo determinar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// clima.getClima(28.6329957, -106.0691004)
//     .then(temp => console.log(temp))
//     .catch(err => console.log(err))