const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
	res.render('user', { usersToDisplay: users, docTitle: 'User' });
});

router.get('/add-user', (req, res, next) => {
	res.render('add-user', { docTitle: 'Add User' });
});

router.post('/add-user', (req, res, next) => {
	users.push({ name: req.body.userName, id: req.body.userID });
	res.redirect('/');
});

router.use((req, res, next) => {
	res.status(404).render('error-404', { docTitle: 'Error 404: Not Found' });
});

module.exports = router;
