const express = require('express');
const commentsRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const commentsControllers = require('../controllers/comments-controller');
const relationship = require('../controllers/title-controller');
const authHelpers = require('../services/auth/auth-helpers');


commentsRoutes.post('/', commentsControllers.show);
// commentsRoutes.post('/new');
// commentsControllers.get('/edit');



module.exports = commentsRoutes;
