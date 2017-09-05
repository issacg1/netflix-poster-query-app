const express = require('express');
const authRoutes = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRoutes.get('/login', authHelpers.loginRedirect, (req, res) =>{
  res.render('auth/login');
});

authRoutes.get('/register', authHelpers.loginRedirect, (req, res) =>{
  res.render('auth/register');
});

authRoutes.post('/register', usersController.create);

authRoutes.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRoutes;
