# Gravie Software Engineer Challenge
Courtney Olesee's Giant Bomb API - Game Rental

## Installation
Create a database called "gravie_game_rental" and run the create table query in the database.sql file.

> npm install 

> npm run server

> npm run client


go to http://localhost:3000/#/

## Challenges 
1. Parsing through the Giant Bomb API response. I started by limiting my axios response to one result, and used JSON.stringify to have a more readable result rendering in order to see the nested object coming back. I could then dig down to get just the name and image that I wanted coming back in my intitial GET search query response. 

2. I created this during the final days of completing my Prime Solo Project sprint and preparing for the coming presntation of that. I was able to fit working on this technical challenge into a busy schedule by breaking down small tasks and fitting them into gaps throughout a few days. So, my commits aren't emblematic of my coding pace, but rather my ability to stay on schedule and complete projects through incremental progress while balancing other responsibilites. 


## What Else I Could Have Done
1. Have a component did mount route to grab random games for suggested rent so the user doesn't have to search for specific keywords or games to start viewing games.

2. A 'Complete Checkout' button on the Checkout page to clear the rentals. 