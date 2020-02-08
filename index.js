const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });

app.get('/', (req, res) => {


  let data= require('./Baza_date.json');
  res.send(data);

})

app.post('/', (req,res) => {

  let data= require('./Baza_date.json');
  console.log(data, typeof(data));
  data.push(req.body);


    fs.writeFile('Baza_date.json',JSON.stringify(data), function(err) {
      if (err) throw err;
      console.log(req.body);
      })

    res.send({Status: 'OK'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




