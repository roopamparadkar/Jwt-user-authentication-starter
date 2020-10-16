const jwt = require('jsonwebtoken');

//  middleware to check if access_token is valid

module.exports = function (req, res, next) {
    const tokenString = req.header('access_token');
    const token = tokenString.replace(/"/g,'');

    if (!token) return res.status(401).send('Access Denied');
     try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send('Invalid Token');
    }
}