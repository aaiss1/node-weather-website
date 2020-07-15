const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=804bf7f89a8b63f99393f6dc6762a5d4&query=' + latitude + ',' + longitude + '&units=m';

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined);
        } else if(body.error) {
            callback('Unable to find specified location.', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
        }
    })
}

module.exports = forecast;