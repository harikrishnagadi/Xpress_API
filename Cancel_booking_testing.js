
const fetch = require("isomorphic-fetch")

const data = {
  id: 132607,
  car_cancellation: 1,

}

const url ='http://localhost:5000/canbooking';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
