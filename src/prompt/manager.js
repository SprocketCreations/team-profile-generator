const inquirer = require("inquirer");

const Manager = require("../../lib/Manager");

/**
 * Uses Inquirer to prompt the user for information about a project manager.
 * @returns {Manager} a new 'Manager' instance.
 */
const prompt = async () => {
	// Make team manager
	const {name, id, email, officeNumber} = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Please enter the team manager's name.",
		}, {
			type: "number",
			name: "id",
			message: "Please enter the team manager's employee ID.",
		}, {
			type: "email",
			name: "email",
			message: "Please enter the team manager's email address.",
		}, {
			type: "number",
			name: "officeNumber",
			message: "Please enter the team manager's office number.",
		},
	]);
	return new Manager(name, id, email, officeNumber);
};

module.exports = prompt;
