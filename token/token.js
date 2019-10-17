
const jwt = require('jsonwebtoken');
const secrets = require('../configy/secrets');

module.exports = (user) => {
    const payload = {
      username: user.username,
      subject: user.id,
      department: user.department,
    };
    const options = {
      expiresIn: '1h',
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
  }