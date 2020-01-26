const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// rent router posts to database 
router.post('/', (req, res) => {
  console.log(req.body);
  const {name, image} = req.body;
  const queryString = `INSERT INTO "rental" ("name", "image_url") VALUES ($1, $2);`;
  pool.query(queryString, [name, image]).then(result=>{
    console.log('ADD RESULT',result);
    res.sendStatus(200);
  }).catch(error=>{
    res.sendStatus(400);
    console.log('error posting rental', error);    
  })
});


router.get('/list', (req, res) => {
  const queryText = `SELECT * from "rental" ORDER BY "name" ASC;`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error getting rentals: ${error}`);
          res.sendStatus(400);
      });
});

module.exports = router;

