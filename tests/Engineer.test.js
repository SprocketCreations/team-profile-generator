const Employee = require("../src/Employee");
const Engineer = require("../src/Engineer");

describe("Engineer", () => {
	describe("Initialization", () => {
		it("should extend employee", () => {
			const engineer = new Engineer("Dave", 15, "john@example.com", "Github");
			expect(engineer instanceof Employee).toBe(true);
		});
		it("should have the property 'github'", () => {
			const engineer = new Engineer("Dave", 15, "john@example.com", "Github");
			expect("github" in engineer).toBe(true);
		});
	});
	describe("getGithub()", () => {
		it("should return a string.", () => {
			const engineer = new Engineer("Dave", 15, "john@example.com", "Github");
			const github = engineer.getGithub();
			expect(typeof github === 'string').toBe(true);
		});
		it("should return the github username passed to the constructor.", () => {
			const engineer = new Engineer("Dave", 15, "john@example.com", "Github");
			const github = engineer.getGithub();
			expect(github === "Github").toBe(true);
		});
	});
	describe("getRole()", () => {
		it("should return 'Engineer'.", () => {
			const engineer = new Engineer("Dave", 15, "john@example.com", "Github");
			const role = engineer.getRole();
			expect(role === 'Engineer').toBe(true);
		});
	});
});