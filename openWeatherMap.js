const http = require('http');

const location = "Tokyo";
const units = 'metric';
const APIKEY = process.env.WEATHER_API_KEY;
const URL = 'http://api.openweathermap.org/data/2.5/weather?q='+ location +'&units='+ units +'&appid='+ APIKEY;

exports.weather = function (callback) {
// function weather(callback) {
  http.get(URL, function(res) {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function(chunk) {
      res = JSON.parse(body);
      // console.log(res.weather[0].main);
      callback(res.weather[0].main);
    });
  }).on('error', function(e) {
    console.log(e.message);
  });
}

exports.weatherWithPlace = function (place, callback) {
  const urlPlace = 'http://api.openweathermap.org/data/2.5/weather?q='+ place +'&units='+ units +'&appid='+ APIKEY;

  http.get(urlPlace, function(res) {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function(chunk) {
      res = JSON.parse(body);
      // console.log(res.weather[0].main);
      callback(res.weather[0].main);
    });
  }).on('error', function(e) {
    console.log(e.message);
  });
}
