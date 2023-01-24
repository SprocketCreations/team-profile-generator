
const makeTeamPage = require("./src/makeTeamPage");

const prompts = {
	manager: require("./src/prompt/manager"),
	engineer: require("./src/prompt/engineer"),
	intern: require("./src/prompt/intern"),
	next: require("./src/prompt/next"),
};

const start = async () => {
	try {
		/** @type {Manager} The project manager. */
		const manager = await prompts.manager();

		/** @type {Engineer[]} The engineers on the project. */
		const engineers = [];

		/** @type {Intern[]} The interns on the project. */
		const interns = [];

		/** @type {boolean} Whether the application should continue prompting the user for team members. */
		let running = true;

		while (running) {
			/** @type {string} Enum. Can be: 'engineer', 'intern', 'quit'. */
			const next = await prompts.next();

			switch (next) {
				case "engineer":
					engineers.push(await prompts.engineer());
					break;
				case "intern":
					interns.push(await prompts.intern());
					break;
				case "quit":
				default:
					const success = await makeTeamPage(manager, engineers, interns);
					if (success)
						console.log("Successfully created file!");
					else
						console.log("Failed to write file.");
					running = false;
					break;
			}
		}
	} catch (error) {
		console.log(error);
	}
	console.log("Goodbye!");
};

start();
