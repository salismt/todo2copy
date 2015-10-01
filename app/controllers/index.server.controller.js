exports.render = function (req, res, next) {
	res.render('index', {
		title: "Welcome to Todo web app"
	});
};