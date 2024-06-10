// backend/controllers/exampleController.js

const exampleController = {
    getIndex: (req, res) => {
        res.status(200).json({ message: 'Welcome to the API!' });
    },
    // Add more controller methods here based on your API endpoints
};

module.exports = exampleController;
