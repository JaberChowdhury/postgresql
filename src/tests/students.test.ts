import { describe, expect, test, beforeAll } from "bun:test";
import { app } from "../app";
import { seedService } from "../services/seed.service";

describe("Students API CRUD", () => {
	let createdStudentId: number;

	// Run seed before all tests to ensure clean state
	beforeAll(async () => {
		await seedService.runSeed();
	});

	test("POST /students - Should create a new student", async () => {
		const res = await app.request("/students", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: "Test Student", roll: "999" }),
		});

		expect(res.status).toBe(201);
		const data = await res.json();
		expect(data.name).toBe("Test Student");
		expect(data.roll).toBe("999");
		expect(data.id).toBeDefined();

		createdStudentId = data.id;
	});

	test("GET /students/:id - Should fetch the created student", async () => {
		const res = await app.request(`/students/${createdStudentId}`);

		expect(res.status).toBe(200);
		const data = await res.json();
		expect(data.id).toBe(createdStudentId);
		expect(data.name).toBe("Test Student");
	});

	test("PUT /students/:id - Should update the student", async () => {
		const res = await app.request(`/students/${createdStudentId}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: "Updated Student" }),
		});

		expect(res.status).toBe(200);
		const data = await res.json();
		expect(data.id).toBe(createdStudentId);
		expect(data.name).toBe("Updated Student");
		expect(data.roll).toBe("999"); // Should remain unchanged
	});

	test("DELETE /students/:id - Should delete the student", async () => {
		const res = await app.request(`/students/${createdStudentId}`, {
			method: "DELETE",
		});

		expect(res.status).toBe(200);
		const data = await res.json();
		expect(data.id).toBe(createdStudentId);

		// Verify it is deleted
		const getRes = await app.request(`/students/${createdStudentId}`);
		expect(getRes.status).toBe(404);
	});
});
