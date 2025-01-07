const users = [];

module.exports = class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}

	save() {
		users.push(this);
	}

	static fetchAll() {
		return users;
	}
};
