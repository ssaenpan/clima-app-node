const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=06608253103e0d68540f56c14d84e6d2`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}