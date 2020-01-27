const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// search router get search query from Giant Bomb games API
router.get('/:searchQuery', (req, res) => {
    let apiKey = process.env.API_KEY;
    axios.get(`https://www.giantbomb.com/api/search/?api_key=${apiKey}&format=json&query=${req.params.searchQuery}&resources=game`)
        .then( response => {
            searchResults = [];
            for (let game of response.data.results) {
                searchResults.push({name: game.name, image: game.image.icon_url})
            }
            res.send( searchResults  );            
        })
        .catch(error=>{
            console.log('error getting Giant Bomb data:', error);
            res.sendStatus(500);
        })
})

module.exports = router;

