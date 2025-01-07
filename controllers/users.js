const User = require('../models/user');

exports.getUser = (req, res, next) => {
	const users = User.fetchAll();
	res.render('user', { usersToDisplay: users, docTitle: 'User' });
};

exports.getAddUser = (req, res, next) => {
	res.render('add-user', { docTitle: 'Add User' });
};

exports.postAddUser = (req, res, next) => {
	const user = new User(req.body.userName, req.body.userID);
	user.save();
	res.redirect('/');
};
