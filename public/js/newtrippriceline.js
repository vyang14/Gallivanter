/*const newTripform = async (event) => {
    event.preventDefault();
  
    const StartingLoc = document.querySelector('#departForm').value.trim();
    const endingloc = document.querySelector('#email-signup').value.trim();
    const sdate = document.querySelector('#password-signup').value.trim();
    const edate = document.querySelector('#password-signup').value.trim();
    const methods = document.querySelector('#password-signup').value.trim();
    var method = "HOTEL"
  
    if (StartingLoc,endingloc,sdate,edate,method) {
      const response = await fetch('/api/priceline', {
        method: 'POST',
        body: JSON.stringify({ StartingLoc,endingloc,sdate,edate,method }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       console.log("we lit")
      } else {
        alert('Failed to sign up.');
      }
    }
  };*/


