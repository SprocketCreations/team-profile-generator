const inquirer = require("inquirer");

const Engineer = require("../../lib/Engineer");

/**
 * Uses Inquirer to prompt the user for information about an engineer.
 * @returns {Engineer} a new 'Engineer' instance.
 */
const prompt = async () => {
	// Make engineer
	const {name, id, email, github} = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Please enter the engineer's name.",
		}, {
			type: "number",
			name: "id",
			message: "Please enter the engineer's employee ID.",
		}, {
			type: "email",
			name: "email",
			message: "Please enter the engineer's email address.",
		}, {
			type: "input",
			name: "github",
			message: "Please enter the engineer's github username.",
		},
	]);
	return new Engineer(name, id, email, github);
};

module.exports = prompt;
