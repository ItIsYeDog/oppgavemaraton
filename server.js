const express = require('express');
const app = express();
const port = 3000;
const testRoute = require('./routes/homeRoutes');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', testRoute);
app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
