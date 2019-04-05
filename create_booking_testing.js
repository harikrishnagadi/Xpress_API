
const fetch = require("isomorphic-fetch")

const data = {
   id: 132607,
   user_id: 2227,
   vehicle_model_id: 23,
   package_id: "NULL",
   travel_type_id: 2,
   from_area_id: 571,
   to_area_id: 'NULL',
   from_city_id :"NULL",
   to_city_id : 'NULL',
   online_booking: 1,
   site_booking: 0,
   booking_created: "01-02-2013 09:31",
   from_lat: 12.95185,
   from_long: 77.69642,
   to_lat: "NULL",
   to_long: "NULL",
   car_cancellation: 0,
   status: 1

}

const url ='http://localhost:5000/crbooking';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
