const passport = require('passport');
const express = require('express');

const { create } = require('./utils');

const router = express.Router();

require('../passport/google');

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }
    try {
      const token = await create(user);
      res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
    } catch (error) {
      res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
    }
  })(req, res, next);
});

module.exports = router;
