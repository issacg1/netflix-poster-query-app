const express = require('express');
const commentsRoutes = express.Router();
const netflixHelper = require('../services/netflix-helper');
const commentsControllers = require('../controllers/comments-controller');
const relationship = require('../controllers/title-controller');
const authHelpers = require('../services/auth/auth-helpers');


commentsRoutes.post('/', commentsControllers.show);
commentsRoutes.post('/new', authHelpers.loginRequired, commentsControllers.new);
commentsRoutes.post('/edit', commentsControllers.edit);
commentsRoutes.post('/update', commentsControllers.update);
commentsRoutes.post('/delete', commentsControllers.delete);



module.exports = commentsRoutes;
