import { yelpFetch } from "./yelp";
import *  as Utils from "./utils";

window.init = Utils.initMap();

var userData = {
    method: 'GET',
    url: 'localhost:3001/api/trip',
    body: JSON.stringify({}),
    headers: { 'Content-Type': 'application/json' },
  };