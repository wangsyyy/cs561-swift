"use strict"

var express = require('express')
var app = express()

app.listen(1012)
console.log('Node.js Express server id is running on port 1012...')

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response) {
    response.json({
        "coord": {
          "lon": -123.262,
          "lat": 44.5646
        },
        "weather": [
          {
            "id": 800,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 24.71,
          "feels_like": 24.52,
          "temp_min": 23.26,
          "temp_max": 26.15,
          "pressure": 1013,
          "humidity": 49
        },
        "visibility": 10000,
        "wind": {
          "speed": 4.12,
          "deg": 20
        },
        "clouds": {
          "all": 0
        },
        "dt": 1664495067,
        "sys": {
          "type": 2,
          "id": 2005452,
          "country": "US",
          "sunrise": 1664460511,
          "sunset": 1664503079
        },
        "timezone": -25200,
        "id": 5720727,
        "name": "Corvallis",
        "cod": 200
      })
}