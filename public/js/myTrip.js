

window.init = Utils.initMap();

var Trip = {
    method: 'GET',
    url: 'localhost:3001/api/Trips',
    body: JSON.stringify({}),
    headers: { 'Content-Type': 'application/json' },
  };