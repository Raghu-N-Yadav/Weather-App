const { report } = require('process');
const request = require('request');
const geocode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=65352d0b0fb7c8c3ad045888c5934bd0&query=40.77468615,-73.948685&units=f';

// request({url: url,json:true}, (error,response)=>{
//     //const data = JSON.parse(response.body);
//     if(error){
//         console.log('some issue with the weather service');
//     }else if(response.body.error){
//         console.log('Invalid location');
//     }else{
//     console.log('current tempreture is '+ response.body.current.temperature+ ' and feels like '+ response.body.current.feelslike);
//     }
// })

// geocode('jaipur',(error,data)=>{
//     console.log('Error',error);
//     console.log('Data',data);
// })

forecast(77.012 ,-122,33, (error,data) => {
    console.log('Error',error);
    console.log('Data',data);
})
