const request = require('request');

var getWeather = () => {
  request({
    url: `https://api.darksky.net/forecast/54a45bff24ac08d9b5e2d8d65b5757fe/37.8267,-122.4233`,
    json: true
  },(error, response,body) => {
    if(!error && response.statusCode === 200){
      console.log(body.currently.temperature);
    }else{
      console.log('Unable to fetch weather.');
    }
  })
};

module.exports.getWeather = getWeather
