exports.render = function (req, res, next) {
	res.render('index', {
		title: "Welcome to Todo web app",
		user: req.user ? req.user.username : ''
	});
};