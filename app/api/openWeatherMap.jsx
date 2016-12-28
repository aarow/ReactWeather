var axios = require('axios');

const API_KEY = 'ef9ffaefecf42fdfb77e4f1fd18f4a41';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=';

module.exports = {
    getTemp : function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}${API_KEY}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(response){
            if(response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        }, function(){
            throw new Error("Unable to fetch weather")
        });

    }
}
