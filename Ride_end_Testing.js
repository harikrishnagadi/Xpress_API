
const fetch = require("isomorphic-fetch")

const data = {
  id: 132607,
  to_area_id: 'NULL',
  to_city_id : 'NULL',
  to_date: "01-04-2013 00:00",
  to_lat: 13.19956,
  to_long: 77.70688,
  status: 3
}

const url ='http://localhost:5000/rideend';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
