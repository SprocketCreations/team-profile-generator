const fs = require("fs");
const generateHtml = require("../util/generateHtml");

/**
 * Creates and writes an html document for the team members.
 * @param {Manager} manager The project manager.
 * @param {Engineer[]} engineers An array of project engineers.
 * @param {Intern[]} interns An array of project interns.
 * @returns {boolean} true if a file was written.
 */
const makeTeamPage = async (manager, engineers, interns) => {
	/** @type {Employee} All the employees on this project. */
	const team = [manager, ...engineers, ...interns];
	/** @type {string} The html, ready to be written to a file. */
	const html = generateHtml(team);

	try {
		await fs.promises.writeFile("./dist/index.html", html);
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = makeTeamPage;
