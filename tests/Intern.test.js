const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
	describe("Initialization", () => {
		it("should extend employee", () => {
			const intern = new Intern("Dave", 15, "john@example.com", "UW");
			expect(intern instanceof Employee).toBe(true);
		});
		it("should have the property 'school'", () => {
			const intern = new Intern("Dave", 15, "john@example.com", "UW");
			expect("school" in intern).toBe(true);
		});
	});
	describe("getSchool()", () => {
		it("should return a string.", () => {
			const intern = new Intern("Dave", 15, "john@example.com", "UW");
			const school = intern.getSchool();
			expect(typeof school === 'string').toBe(true);
		});
		it("should return the school passed to the constructor.", () => {
			const intern = new Intern("Dave", 15, "john@example.com", "UW");
			const school = intern.getSchool();
			expect(school === "UW").toBe(true);
		});
	});
	describe("getRole()", () => {
		it("should return 'Intern'.", () => {
			const intern = new Intern("Dave", 15, "john@example.com", "UW");
			const role = intern.getRole();
			expect(role === 'Intern').toBe(true);
		});
	});
});