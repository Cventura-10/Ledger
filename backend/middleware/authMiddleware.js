// backend/middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
    // Add authentication logic here
    next(); // Call next to proceed to the next middleware or route handler
};

module.exports = authMiddleware;
