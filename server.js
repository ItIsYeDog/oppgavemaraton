const express = require('express');
const app = express();
const port = 3000;
const testRoute = require('./routes/homeRoutes');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use('/', testRoute);
app.use('/api', apiRoutes);
app.use('/', authRoutes);

mongoose.connect('mongodb://10.12.12.252:27017/test')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

  
  const greetingSchema = new mongoose.Schema({
    message: String,
  });
  
  const Greeting = mongoose.model('Greeting', greetingSchema);
  
  app.get('/mongo-world', async (req, res) => {
    try {
      const greetings = await Greeting.find({});
      
      res.render('mongo-world', { greetings });
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Internal Server Error");
    }
  });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
