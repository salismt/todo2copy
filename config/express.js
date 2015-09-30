var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser');

module.exports = function () {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.set('views', './app/views');
	app.set('view engine', 'ejs');
	require('../app/routes/index.server.routes')(app);
	require('../app/routes/users.server.routes')(app);
	app.use(express.static('./public'));
	return app;
};