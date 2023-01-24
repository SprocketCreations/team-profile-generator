const Employee = require("./Employee");

/**
 * Manager class
 */
module.exports = class Manager extends Employee {
	/**
	 * Constructs a new manager instance.
	 * @param {string} name The name of the manager.
	 * @param {number} id The id of the manager.
	 * @param {string} email The email to contact the manager at.
	 * @param {number} officeNumber The door number for this manager's office.
	 */
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		/** @type {number} The door number for this manager's office. */
		this.officeNumber = officeNumber;
	}
	/**
	 * Getter
	 * @returns {number} the door number for this manager's office.
	 */
	getOfficeNumber() {
		return this.officeNumber;
	}
	/**
	 * Getter
	 * @returns {string} the role of this manager.
	 */
	getRole() {
		return "Manager";
	}
}
