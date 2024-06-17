const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const path = require('path');
const port = 5000;

// MongoDB connection
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'ledger-app';

// Serve the built frontend application
app.use(express.static(path.join(__dirname, '../new-frontend/build')));

// Connect to MongoDB
MongoClient.connect(mongoUrl, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');
  const db = client.db(dbName);

  // API endpoint
  app.get('/api', (req, res) => {
    db.collection('transactions').find({}).toArray((err, transactions) => {
      if (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ message: 'Error fetching transactions' });
        return;
      }
      res.status(200).json(transactions);
    });
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../new-frontend/build', 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
