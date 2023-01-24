const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
	describe("Initialization", () => {
		it("should extend employee", () => {
			const manager = new Manager("Dave", 15, "john@example.com", 215);
			expect(manager instanceof Employee).toBe(true);
		});
		it("should have the property 'officeNumber'", () => {
			const manager = new Manager("Dave", 15, "john@example.com", 215);
			expect("officeNumber" in manager).toBe(true);
		});
	});
	describe("getOfficeNumber()", () => {
		it("should return a number.", () => {
			const manager = new Manager("Dave", 15, "john@example.com", 215);
			const officeNumber = manager.getOfficeNumber();
			expect(typeof officeNumber === 'number').toBe(true);
		});
		it("should return the school passed to the constructor.", () => {
			const manager = new Manager("Dave", 15, "john@example.com", 215);
			const officeNumber = manager.getOfficeNumber();
			expect(officeNumber === 215).toBe(true);
		});
	});
	describe("getRole()", () => {
		it("should return 'Manager'.", () => {
			const manager = new Manager("Dave", 15, "john@example.com", 215);
			const role = manager.getRole();
			expect(role === 'Manager').toBe(true);
		});
	});
});