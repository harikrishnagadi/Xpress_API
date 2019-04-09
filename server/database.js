const postgres = require('pg');
const log = require('./logger');
const connectionString = process.env.DATABASE_URL;
var mergeJSON = require("merge-json") ;


// Initialize postgres client
const client = new postgres.Client({ connectionString });
if(client!=null){
  console.log("client creation sucess");
  console.log("client created");

}

// Connect to the DB
client.connect().then(() => {
  log.info(`Connected To ${client.database} at ${client.host}:${client.port}`);
}).catch(log.error)



module.exports = {
  /** Query the current time */
  queryTime: async () => {
    const result = await client.query('SELECT NOW() as now');
    return result.rows[0];

  },

  Test: async ()=>{
     const result = await client.query('SELECT * FROM public."XpressData"');
     return result.rows[0];
  },

  CreateBooking: async (data,callback)=>{
    var keys = [];
    var values = [];
    Object.keys(data).forEach(function(key) {
      keys.push(key);
      values.push(data[key]);
      })
   //console.log(keys);
   //console.log(values);

   var query = 'INSERT INTO public."XpressData"('+keys[0]+','+keys[1]+','+keys[2]+','+keys[3]+','+keys[4]+','+keys[5]+','+keys[6]+','+keys[7]+','+keys[8]+','+keys[9]+','+keys[10]+','+keys[11]+','+keys[12]+','+keys[13]+','+keys[14]+','+keys[15]+','+keys[16]+','+keys[17]+
   ')VALUES ('+"'"+values[0]+"','"+values[1]+"','"+values[2]+"','"+values[3]+"','"+values[4]+"','"+values[5]+"','"+values[6]+"','"+values[7]+"','"+values[8]+"','"+values[9]+"','"+values[10]+"','"+values[11]+"','"+values[12]+"','"+values[13]+"','"+values[14]+"','"+values[15]+"','"+values[16]+"','"+values[17] +"')";
   console.log(query);
    await client.query(query, function (error , result) {
        if(error){

          callback(error);
                              //return the error if te query has thrown errors
        }
        if(result){

          callback(result)
          //return result;   //return the response of the query
        }


      });


  },

  RideStart: async (data)=>{
    var keys = [];
    var values = [];
    Object.keys(data).forEach(function(key) {
      keys.push(key);
      values.push(data[key]);
      })

      var query = 'UPDATE public."XpressData" SET '+keys[1]+"='"+values[1]+"',"+keys[2]+"='"+values[2]+"',"+keys[3]+"='"+values[3]+"',"+keys[4]+"='"+values[4]+"',"+keys[5]+"='"+values[5]+"',"+keys[6]+"='"+values[6]+"'" +
       " WHERE "+keys[0]+"='"+values[0]+"'";
      console.log(query);
      const result = await client.query(query);
        return result;
  },

  RideEnd: async (data)=>{
    var keys = [];
    var values = [];
    Object.keys(data).forEach(function(key) {
      keys.push(key);
      values.push(data[key]);
      })

      var query = 'UPDATE public."XpressData" SET '+keys[1]+"='"+values[1]+"',"+keys[2]+"='"+values[2]+"',"+keys[3]+"='"+values[3]+"',"+keys[4]+"='"+values[4]+"',"+keys[5]+"='"+values[5]+"',"+keys[6]+"='"+values[6]+"'" +
       " WHERE "+keys[0]+"='"+values[0]+"'";
      console.log(query);
      const result = await client.query(query);
        return result;
  },

  CancelBooking: async (data)=>{
    var keys = [];
    var values = [];
    Object.keys(data).forEach(function(key) {
      keys.push(key);
      values.push(data[key]);
      })

      var query = 'UPDATE public."XpressData" SET '+keys[1]+'='+values[1]+ " WHERE "+keys[0]+"='"+values[0]+"'";
      console.log(query);
      const result = await client.query(query);
        return result;
  },

  GetBooking: async (data)=>{
    var keys = [];
    var values = [];
    Object.keys(data).forEach(function(key) {
      keys.push(key);
      values.push(data[key]);
      })

      var query = 'SELECT * FROM public."XpressData"  WHERE ' +keys[0]+ "='"+values[0]+"'";
      console.log(query);
      const result = await client.query(query);
        return result.rows[0];
  },

  GetallBookings: async ()=>{


      var query = 'SELECT * FROM public."XpressData" ';
      console.log(query);
      const result = await client.query(query);
        return result.rows;
  }

}
