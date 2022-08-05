// import * as Utils from './utils.js';

var swapButton = document.getElementById('swap');
var dropButton = document.getElementById('dropBtn');
var allBtns = document.getElementsByName('userBtn');
var userInput = {};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        format: 'mm-dd-yyyy',
        minDate: new Date(),
        firstDay: 0,
});
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
});

for(var i = 0; i < 3; i++){
    let iteration = 'a'+i;
    var listEl = document.getElementById(iteration);

    listEl.addEventListener('click', function(){
        const location = document.getElementById('departForm').value;
        const destination = document.getElementById('goingTo').value;
        const departDate = document.getElementById('dateLeave').value;
        const arriveDate = document.getElementById('dateReturn').value;

        if (location === undefined || destination === undefined || departDate === undefined || arriveDate === undefined ){
            prompt('Please do not leave any forms blank!');
            return;
        }

        const travelType = dropButton.textContent
        dropButton.textContent = this.lastChild.lastChild.textContent;
        allBtns.forEach(allBtns => allBtns.disabled=true);
        return {location, destination, departDate, arriveDate, travelType};
        })
}

swapButton.addEventListener('click',function(){
    var depart = document.getElementById('departForm');
    var destination = document.getElementById('goingTo');
    var input1 = document.getElementById('departForm').value;
    var input2 = document.getElementById('goingTo').value;
    depart.value = input2;
    destination.value = input1;
})
            
const newTripFormhandler = async (event) => {
    event.preventDefault();
  
    var depart = document.getElementById('departForm');
    var destination = document.getElementById('goingTo');
    var input1 = document.getElementById('departForm').value;
    var input2 = document.getElementById('goingTo').value;
    depart.value = input2;
    destination.value = input1;
    var departDate = document.getElementById('dateLeave').value;
    var arriveDate = document.getElementById('dateReturn').value;
    method= "AIRPORT"
    if (depart,destination,departDate,arriveDate) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ depart,destination,departDate,arriveDate,method}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       console.log("YES")
      } else {
        alert(response.statusText);
      }
    }
  };
