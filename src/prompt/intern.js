const inquirer = require("inquirer");

const Intern = require("../../lib/Intern");

/**
 * Uses Inquirer to prompt the user for information about an intern.
 * @returns {Intern} a new 'Intern' instance.
 */
const prompt = async () => {
	// Make intern
	const {name, id, email, school} = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Please enter the intern's name.",
		}, {
			type: "number",
			name: "id",
			message: "Please enter the intern's employee ID.",
		}, {
			type: "email",
			name: "email",
			message: "Please enter the intern's email address.",
		}, {
			type: "input",
			name: "school",
			message: "Please enter the name of the school the intern is attending.",
		},
	]);
	return new Intern(name, id, email, school);
};

module.exports = prompt;
