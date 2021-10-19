const { report } = require('process');
const request = require('request');
const geocode = require('./utils/geoCode');
const forecast = require('./utils/forecast');


const address = process.argv[2];

if (!address){
    console.log('Enter an address');
}else{
    geocode(address,(error,{latitude,logitude,location} = {}) => {
        if(error){
            return console.log(error);
        }
        //console.log('Error',error);
        //console.log('Data',data);
        forecast(latitude,logitude,(error,forecastdata)=>{
            if (error){
                return console.log(error);
            }
    
            console.log(location);
            console.log(forecastdata)
        })
    })
}




