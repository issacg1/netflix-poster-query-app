const express = require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

const titleRoutes = require('./routes/title-routes');
app.use('/search-title', titleRoutes);

const directorRoutes = require('./routes/director-routes');
app.use('/search-director', directorRoutes);

const actorRoutes = require('./routes/actor-routes');
app.use('/search-actor', actorRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

const commentsRoutes = require('./routes/comments-routes');
app.use('/comments', commentsRoutes);

const profileRoutes = require('./routes/profile-routes');
app.use('/profile', profileRoutes);

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.render('404error');
});
