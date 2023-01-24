const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./src/Manager");
const Intern = require("./src/Intern");
const Engineer = require("./src/Engineer");

/**
 * Uses Inquirer to prompt the user for information about a project manager.
 * @returns {Manager} a new manager instance.
 */
const promptForManager = async () => {
	//Add team manager
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
			//Add team manager
			type: "email",
			name: "email",
			message: "Please enter the team manager's email address.",
		}, {
			//Add team manager
			type: "number",
			name: "officeNumber",
			message: "Please enter the team manager's office number.",
		},
	]);
	return new Manager(name, id, email, officeNumber);
}

//start();