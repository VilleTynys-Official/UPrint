const jwt = require('jsonwebtoken');
const config = require('config');

/**
 * Autherization middleware:
 *
 * 1. protects the routes by checking that
 * the client has a valid token
 *
 * 2. adds user id from the token into the request.
 */

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.send(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //Basically checks if the same token can be generated by using jwt secret from this server
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    if (decoded) {
      req.user = decoded.user; //adds the user from the token to the request
      return next();
    }
    throw err;
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};
