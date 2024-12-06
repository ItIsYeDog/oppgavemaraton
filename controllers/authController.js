const User = require('../model/user');
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.create ({ username, password });
        await user.save();
        res.redirect('/');
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).send("Internal Server Error");
    }
};

exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        res.send("Login successful");
      } else {
        res.status(401).send("Invalid username or password");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      res.status(500).send("Internal Server Error");
    }
  };