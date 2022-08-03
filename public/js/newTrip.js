document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

function initMap() {
    map = new google.maps.Map(document.getElementById("gMap"), {
        center: { lat: pikaLat, lng: pikaLong },
        zoom: 8,
    });
}
            
window.initMap = initMap;