const express = require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();


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

const titleRoutes = require('./routes/title-routes');
app.use('/search-title', titleRoutes);

const directorRoutes = require('./routes/director-routes');
app.use('/search-director', directorRoutes);

const actorRoutes = require('./routes/actor-routes');
app.use('/search-actor', actorRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
