const inquirer = require("inquirer");

/**
 * Uses inquirer to prompt the user about their next intention.
 * @returns {string} Possible values: 'engineer', 'intern', 'quit'.
 */
const prompt = async () => {
	const { next } = await inquirer.prompt([{
		type: "list",
		name: "next",
		message: "What would you like to do next?",
		choices: [
			{
				name: "Add Engineer",
				short: "Engineer",
				value: "engineer",
			}, {
				name: "Add Intern",
				short: "Intern",
				value: "intern",
			}, {
				name: "Finish",
				value: "quit",
			},
		],
	}]);
	return next;
};

module.exports = prompt;
