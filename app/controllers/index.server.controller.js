exports.render = function (req, res, next) {
	res.render('index', {
		title: "View render works bitch!"
	});
};