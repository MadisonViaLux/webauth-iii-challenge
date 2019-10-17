const jwt = require('jsonwebtoken');
const secrets = require('../configy/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.auth;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'HECK NO!!' });
      } else {
        req.user = {
          username: decodedToken.username,
          department: decodedToken.department,
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No token provided' });
  }
};