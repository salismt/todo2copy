var users = require('../controllers/users.server.controller'),
	passport = require('passport');

module.exports = function (app) {
	app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);

	app.param('userId', users.userByID);

	app.route('/register')
		.get(users.renderRegister)
		.post(users.register);

	app.route('/login')
		.get(users.renderLogin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.route('/logout').get(users.logout);

	app.route('/oauth/facebook')
		.get(passport.authenticate('facebook', {
			failureRedirect: '/login'
		}));

	app.route('/oauth/facebook/callback')
		.get(passport.authenticate('facebook', {
			failureRedirect: '/login',
			successRedirect: '/'
		}));

	app.route('/oauth/twitter')
		.get(passport.authenticate('twitter', {
			failureRedirect: '/login'
		}));

	app.route('/oauth/twitter/callback')
		.get(passport.authenticate('twitter', {
			failureRedirect: '/login',
			successRedirect: '/'
		}));
};