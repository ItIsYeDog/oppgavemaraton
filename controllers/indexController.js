exports.homePage = (req, res) => {
    res.render('index');
};

exports.helloWorld = (req, res) => {
    res.redirect('http://10.12.12.251/helloworld');
};