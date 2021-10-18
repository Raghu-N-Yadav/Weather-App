const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=65352d0b0fb7c8c3ad045888c5934bd0&query=' + longitude + ','+ latitude +'&units=f';

    request({url:url,json:true},(error,response) => {
        if(error){
            callback('Unable to connect',undefined);
        }else if(response.body.error){
            callback('Invalid Location',undefined);
        }else{
            callback(undefined,'current tempreture is '+ response.body.current.temperature+ ' and feels like '+ response.body.current.feelslike);

        }
    })
}

module.exports = forecast;