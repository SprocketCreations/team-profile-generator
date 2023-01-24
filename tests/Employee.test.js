const Employee = require("../src/Employee");

describe("Employee", () => {
	describe("Initialization", () => {
		it("should have the property 'name'", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			expect("name" in employee).toBe(true);
		});
		it("should have the property 'id'", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			expect("id" in employee).toBe(true);
		});
		it("should have the property 'email'", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			expect("email" in employee).toBe(true);
		});
	});
	describe("getName()", () => {
		it("should return a string.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const name = employee.getName();
			expect(typeof name === 'string').toBe(true);
		});
		it("should return the name passed to the constructor.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const name = employee.getName();
			expect(name === "Dave").toBe(true);
		});
	});
	describe("getId()", () => {
		it("should return a number.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const id = employee.getId();
			expect(typeof id === 'number').toBe(true);
		});
		it("should return the id passed to the constructor.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const id = employee.getId();
			expect(id === 15).toBe(true);
		});
	});
	describe("getEmail()", () => {
		it("should return a string.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const email = employee.getEmail();
			expect(typeof email === 'string').toBe(true);
		});
		it("should return the email passed to the constructor.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const email = employee.getEmail();
			expect(email === "john@example.com").toBe(true);
		});
	});
	describe("getRole()", () => {
		it("should return 'Employee'.", () => {
			const employee = new Employee("Dave", 15, "john@example.com");
			const role = employee.getRole();
			expect(role === 'Employee').toBe(true);
		});
	});
});