const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// JSON Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Ledger App backend!');
});

// Listening to the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
