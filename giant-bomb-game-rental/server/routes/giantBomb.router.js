const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

router.get('/', (req, res) => {
    let apiKey = process.env.API_KEY;
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then( response => {
            res.send( response.data.data );
        })
        .catch(error=>{
            console.log('error getting Giant Bomb data:', error);
            res.sendStatus(500);
        })
})

module.exports = router;