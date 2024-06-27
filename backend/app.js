const express = require('express');
const { MongoClient } = require('mongodb');
const compression = require('compression');
const NodeCache = require('node-cache');
const cache = new NodeCache();
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGODB_URI; // MongoDB URI from the environment variable
const dbName = 'Ledger'; // Update with the actual database name

// Content Security Policy headers for font and data URI loading
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data:; style-src 'self' https://fonts.googleapis.com;");
  return next();
});

app.use(express.json());
app.use(compression());

MongoClient.connect(mongoUrl, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Fetch transactions
    app.get('/api/transactions', async (req, res) => {
      try {
        const transactions = await db.collection('transactions').find({}).toArray();
        res.status(200).json(transactions);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ message: 'Error fetching transactions', error: err });
      }
    });

    // Create sales
    app.post('/api/sales', async (req, res) => {
      // Placeholder for sales creation logic
      res.status(201).json({ message: 'Sales created successfully' });
    });

    // Create accounting entries
    app.post('/api/accounting', async (req, res) => {
      // Placeholder for accounting entry creation logic
      res.status(201).json({ message: 'Accounting entry created successfully' });
    });

    // Basic root route
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Start server
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
