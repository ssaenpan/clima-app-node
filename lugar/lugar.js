const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCgBbFlNaFJFVeQFnawMo8myI36sgGbALA`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let geometry = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: geometry.lat,
        lng: geometry.lng
    }
}

module.exports = {
    getLugarLatLng
}



/* let encodeUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCgBbFlNaFJFVeQFnawMo8myI36sgGbALA`)
    .then(resp => {
        let location = resp.data.results[0];
        let geometry = location.geometry.location;
        console.log('Dirección: ', location.formatted_address);
        console.log('Latitud:', geometry.lat);
        console.log('Longitud', geometry.lng);
        //console.log(JSON.stringify(resp.data, undefined, 2));
        //console.log(resp.data);
    })
    .catch(err => console.log(err)); */