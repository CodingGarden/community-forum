const jwt = require('jsonwebtoken');

const users = require('../queries/users');

function create(user) {
  console.log('sigining with secret', process.env.TOKEN_SECRET);
  
  return new Promise((resolve, reject) => {
    jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    }, (error, token) => {
      if(error) return reject(error);
      resolve(token);
    });
  });
}

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SECRET, (error, payload) => {
      if (error) return reject(error);
      resolve(payload);
    });
  });
}

module.exports = {
  create,
  verify
};
