import * as Utils from './utils.js'; 
import { userInput } from './newTrip.js';

var Trip = {
  method: 'GET',
  url: 'localhost:3001/api/trips',
  body: JSON.stringify({}),
  headers: { 'Content-Type': 'application/json' },
};

function weatherFetch(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + depart + "&units=imperial&appid=629118eb1a8773a241db2bc4f0a52be4", {  headers: {
      Accept: "application/json",
  }
  })
.then(function(response){
  if(!response.ok){
      throw response.json();
  }
  return response.json();
  })
.then(function(weatherData){
  var cityOne = `${weatherData.name}, ${weatherData.sys.country}`;
  var oneTemp = `${weatherData.main.temp}°F`;
  var oneWind = `${weatherData.wind.speed} mph` ;
  var oneHumid = `${weatherData.main.humidity}%`;
  var oneCoord = [weatherData.coord.lat, weatherData.coord.lon];
})
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + destination + "&units=imperial&appid=629118eb1a8773a241db2bc4f0a52be4", {  headers: {
      Accept: "application/json",
  }
  })
.then(function(response){
  if(!response.ok){
      throw response.json();
  }
  return response.json();
  })
.then(function(weatherData){
  var cityTwo = `${weatherData.name}, ${weatherData.sys.country}`;
  var twoTemp = `${weatherData.main.temp}°F`;
  var twoWind = `${weatherData.wind.speed} mph`;
  var twoHumid = `${weatherData.main.humidity}%`;
  var twoCoord = [weatherData.coord.lat, weatherData.coord.lon];
})
}

function searchMap(event){
  var myCoordinates = { lat: parseFloat(event.target.dataset.lat), lng: parseFloat(event.target.dataset.lon)};
  var locName = event.textContent;
  var nameToUrl = locName.replace(/\s+/g, '+');
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myCoordinates,
    zoom: 8,
  });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: pikaLat, lng: pikaLong },
        zoom: 8,
    });
}

weatherFetch();
window.init = Utils.initMap();