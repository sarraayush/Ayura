const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ redirectUrl: '/login', message: 'Access Denied. Please log in.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ redirectUrl: '/login', message: 'Invalid Token. Please log in again.' });
    }
};

module.exports = isLoggedIn;
