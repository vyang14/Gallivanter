const { get } = require("../../controllers");
const axios = require("axios");
const e = require("express");
var holdorigin;
var holddestination;
var hold2data;
const urihotel = 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations'
const uriairport = 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations';
const uricars = 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations';


async function getinfo(loc,method){
    dummuri;
    if(method==="HOTEL"){dummuri=urihotel}
    if(method==="AIRPORT"){dummuri=uriairport}
    if(method==="CAR"){dummuri=uricars}
if(method === "HOTEL"){
const options = {
  method: 'GET',
  url: dummuri,
  params: {name: loc, search_type: method},
  headers: {
    'X-RapidAPI-Key': 'bf8fcd3c84msh6b5c7962e7a8c4ep112116jsn7c29ee8aa98f',
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};
}else{const options={
    method: 'GET',
    url: dummuri,
    params: {name: loc},
    headers: {
      'X-RapidAPI-Key': 'bf8fcd3c84msh6b5c7962e7a8c4ep112116jsn7c29ee8aa98f',
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
}
}
axios.request(options).then(function (response) {
    holdorigin = response.data
}).catch(function (error) {
	console.error(error);
});
}
async function pricecall(sdate,edate,sloc,eloc,method){
    await getinfo(eloc,method)
    holddestination = holdorigin
     await getinfo(sloc,method)
    if(method=="AIRPLANE"){
    const options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip',
        params: {
          departure_date: sdate+','+edate,
          adults: '1',
          sid: 'iSiX639',
          origin_city_id: holdorigin[0].CityID,
          destination_city_id: holddestination[0].CityID
         
        },
        headers: {
          'X-RapidAPI-Key': 'bf8fcd3c84msh6b5c7962e7a8c4ep112116jsn7c29ee8aa98f',
          'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          hold2data = response.data
      }).catch(function (error) {
          console.error(error);
      });
    }
    if(method=="HOTEL"){
        const options = {
            method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
            params: {
              sort_order: 'HDR',
              location_id: holddestination[0].CityID,
              date_checkout: sdate,
              date_checkin: edate,
              star_rating_ids: '3.0,3.5,4.0,4.5,5.0',
              rooms_number: '1',
              amenities_ids: 'FINTRNT,FBRKFST'
            },
            headers: {
              'X-RapidAPI-Key': 'bf8fcd3c84msh6b5c7962e7a8c4ep112116jsn7c29ee8aa98f',
              'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
             hold2data = response.data
          }).catch(function (error) {
              console.error(error);
          });
        }
        if(method=="CAR"){
            const options = {
                method: 'GET',
                url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
                params: {
                  sort_order: 'HDR',
                  location_id: holddestination[0].CityID,
                  date_checkout: sdate,
                  date_checkin: edate,
                  star_rating_ids: '3.0,3.5,4.0,4.5,5.0',
                  rooms_number: '1',
                  amenities_ids: 'FINTRNT,FBRKFST'
                },
                headers: {
                  'X-RapidAPI-Key': 'bf8fcd3c84msh6b5c7962e7a8c4ep112116jsn7c29ee8aa98f',
                  'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  hold2data = response.data;
              }).catch(function (error) {
                  console.error(error);
              });
            }
    }

var Startingloc;
var endingloc ;
var Departdate;
var returndate;
tform = document.getElementByClassName("searchForm");
tform.addEventListener("submit",function(event){
    Startingloc=document.getElementById("leavingForm").value
    endingloc=document.getElementById("goingTo").value
    returndate=document.getElementById("dateReturn").value
    departdate=document.getElementById("dateLeave").value
    method = "AIRPORT";
    pricecall(returndate,departdate,Startingloc,endingloc,method)
})


