const express = require('express');
const app = express();
const port = 3000;
const testRoute = require('./routes/homeRoutes');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const session = require('express-session');
const galleryRoutes = require('./routes/galleryRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.urlencoded({ extended: true }));
app.use('/', testRoute);
app.use('/api', apiRoutes);
app.use('/', authRoutes);
app.use('/', galleryRoutes);

mongoose.connect('mongodb://10.12.12.252:27017/test')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`App listening at 10.12.12.250:${port}`);
});
