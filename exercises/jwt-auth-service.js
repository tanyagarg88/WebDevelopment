const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'dev_secret_key_2026';

function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '24h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };


<!-- Updated: 2026-08-17T11:30:49+05:30 [August Series Commit #7] -->
