const User = require("../model/user");

exports.homePage = (req, res) => {
    res.render('index', { user: req.session.user });
};

exports.helloWorld = (req, res) => {
    res.redirect('http://10.12.12.251/helloworld');
};

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'username isAdmin');
        res.render('users', { users });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/users');
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send("Internal Server Error");
    }
}

exports.upgradeUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { isAdmin: true });
        res.redirect('/users');
    } catch (err) {
        console.error("Error upgrading user:", err);
        res.status(500).send("Internal Server Error");
    }
}