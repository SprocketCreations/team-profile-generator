/**
 * Abstract class for employees.
 */
module.exports = class Employee {
	/**
	 * Constructs a new Employee instance.
	 * @param {string} name The name of the employee.
	 * @param {number} id The id of the employee.
	 * @param {string} email The email to contact the employee at.
	 */
	constructor(name, id, email) {
		/** @type {string} The name of this employee.  */
		this.name = name;
		/** @type {number} The id of this employee. */
		this.id = id;
		/** @type {string} The email of this employee. */
		this.email = email;
	}
	/**
	 * Getter
	 * @returns {string} the name of this employee.
	 */
	getName() {
		return this.name;
	}
	/**
	 * Getter
	 * @returns {number} the id of this employee.
	 */
	getId() {
		return this.id;
	}
	/**
	 * Getter
	 * @returns {string} the email of this employee.
	 */
	getEmail() {
		return this.email;
	}
	/**
	 * Getter
	 * @returns {string} the role of this employee.
	 */
	getRole() {
		return "Employee";
	}
}
