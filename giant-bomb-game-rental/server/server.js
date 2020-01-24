const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Route includes
const rentRouter = require('./routes/rent.router');
const giantBomb = require('./routes/giantBomb.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/api/bomb', giantBomb)
// app.use('/api/rent', rentRouter);

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});