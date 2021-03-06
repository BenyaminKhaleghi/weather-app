const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d503f744a9379461e6d6abe0209276d9/' + longitude + ',' + longitude + '';
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, 
                body.daily.data[0].summary + 
                'It is currently ' + 
                body.currently.temperature + 
                ' degree out.' +
                'There is a ' + 
                body.currently.precipProbability +
                ' % chance of rain')
        }
    })
};

module.exports = forecast;