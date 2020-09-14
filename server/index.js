/** @format */

require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const ctrl = require('./controllers/controller');
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

//Endpoints
app.get('/api/houses', ctrl.getHouses);
app.post('/api/house', ctrl.addHouse);
app.delete('/api/house/:id', ctrl.deleteHouse);

app.listen(SERVER_PORT, () => {
  console.log(`To each his own ${SERVER_PORT}`);
});
