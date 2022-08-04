//fetching first 5 results from the Yelp API using a given lat/long
/*need to:  accept user input to get location 
            (optional?) use dotenv to hide gmaps API key: AIzaSyAigt9WzHgkJnidN6iEN2Uq0KMSEo8lef0
            change name of pikachu/data variables
            add input from handlebars and obtain lat/long from search results
            export results to yelp.js landing page*/

function addGeocode(){

}

function revGeocode(){

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

export { addGeocode, revGeocode, searchMap, initMap }