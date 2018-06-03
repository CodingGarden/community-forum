const passport = require('passport');
const express = require('express');

const router = express.Router();

require('../passport/google');

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }), (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;
