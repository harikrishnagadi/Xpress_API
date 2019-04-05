
const fetch = require("isomorphic-fetch")

const data = {
  id: 132607,
  from_area_id: 571,
  from_city_id :"NULL",
  from_date: "01-03-2013 17:15",
  from_lat: 12.95185,
  from_long: 77.69642,
  status: 2

}

const url ='http://localhost:5000/ridestart';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
