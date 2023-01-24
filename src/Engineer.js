const Employee = require("./Employee");

/**
 * Engineer class
 */
module.exports = class Engineer extends Employee {
	/**
	 * Constructs a new Engineer instance.
	 * @param {string} name The name of the employee.
	 * @param {number} id The id of the employee.
	 * @param {string} email The email to contact the employee at.
	 * @param {string} github The github username of this engineer.
	 */
	constructor(name, id, email, github) {
		super(name, id, email)
		/** @type {string} The github username of this engineer. */
		this.github = github;
	}
	/**
	 * Getter
	 * @returns {string} the github username of this engineer.
	 */
	getGithub() {
		return this.github;
	}
	/**
	 * Getter
	 * @returns {string} the role of this engineer.
	 */
	getRole() {
		return "Engineer";
	}
}