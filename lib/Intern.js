const Employee = require("./Employee");

/**
 * Intern class
 */
module.exports = class Intern extends Employee {
	/**
	 * Constructs a new Intern instance.
	 * @param {string} name The name of the intern.
	 * @param {number} id The id of the intern.
	 * @param {string} email The email to contact the intern at.
	 * @param {string} school The school this intern is attending.
	 */
	constructor(name, id, email, school) {
		super(name, id, email)
		/** @type {string} The school this intern is attending. */
		this.school = school;
	}
	/**
	 * Getter
	 * @returns {string} the school this intern is attending.
	 */
	getSchool() {
		return this.school;
	}
	/**
	 * Getter
	 * @returns {string} the role of this intern.
	 */
	getRole() {
		return "Intern";
	}
}