const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// rent router posts to database 
router.post('/', (req, res) => {
  console.log(req.body);
  const {name, image} = req.body;
  let queryString = `INSERT INTO "rental" ("name", "image_url") VALUES ($1, $2);`;
  pool.query(queryString, [name, image]).then(result=>{
    console.log('ADD RESULT',result);
    res.sendStatus(200);
  }).catch(error=>{
    res.sendStatus(400);
    console.log(error);    
  })
});

module.exports = router;
