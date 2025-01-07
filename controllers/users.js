const users = [];

exports.getUser = (req, res, next) => {
	res.render('user', { usersToDisplay: users, docTitle: 'User' });
};

exports.getAddUser = (req, res, next) => {
	res.render('add-user', { docTitle: 'Add User' });
};

exports.postAddUser = (req, res, next) => {
	users.push({ name: req.body.userName, id: req.body.userID });
	res.redirect('/');
};
