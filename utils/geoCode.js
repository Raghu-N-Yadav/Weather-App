const request = require('request');

const geoCode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoicmFnaHVueWFkYXYiLCJhIjoiY2t1eDJnaXViMWpwaTJ2bzB1MmZkN2I3MiJ9.Wcr9sVYftISDpBFjPGW9Ew&limit=1';

    request({url:url,json:true},(error,response)=>{
        if (error) {
            callback('Unable to connect',undefined);
        }else if(response.body.features.length === 0){
            callback('check input location',undefined)
        }else {
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;