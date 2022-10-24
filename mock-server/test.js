"use strict"

var express = require('express')
var app = express()

app.listen(3000)
console.log('Node.js Express server id is running on port 3000...')

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response) {
    response.json( {
        "coord": {
          "lon": -123.262,
          "lat": 44.5646
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 84.09,
          "feels_like": 82.67,
          "temp_min": 81.23,
          "temp_max": 87.06,
          "pressure": 1011,
          "humidity": 35
        },
        "visibility": 10000,
        "wind": {
          "speed": 12.66,
          "deg": 30,
          "gust": 19.57
        },
        "clouds": {
          "all": 0
        },
        "dt": 1664663893,
        "sys": {
          "type": 1,
          "id": 3727,
          "country": "US",
          "sunrise": 1664633455,
          "sunset": 1664675654
        },
        "timezone": -25200,
        "id": 5720727,
        "name": "Corvallis",
        "cod": 200
      })
}
            