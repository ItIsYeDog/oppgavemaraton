const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const greetingSchema = new mongoose.Schema({
  message: String,
});

const Greeting = mongoose.model('Greeting', greetingSchema);

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}

router.get('/mongo-world', isAuthenticated, async (req, res) => {
  try {
    const greetings = await Greeting.find({});
    res.render('mongo-world', { greetings });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/galleri', isAuthenticated, (req, res) => {
  res.render('gallery');
});

module.exports = router;