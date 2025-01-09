import { connection } from "$lib/server/db/index";

export async function POST({ request }) {
	const form = await request.formData();

	console.log(form);

	const query = `
    INSERT INTO Profile (id, name, opleiding, picture, skills)
    VALUES (?, ?, ?, ?, ?)
  `;
	const skillsStr = [
		Number(form.get("vakkundigheid")),
		Number(form.get("productie")),
		Number(form.get("complexiteit")),
		Number(form.get("zelfregie")),
		Number(form.get("samenwerken"))
	];
	const values = [
		form.get("id"),
		form.get("name"),
		form.get("opleiding"),
		form.get("picture"),
		skillsStr
	];

	try {
		await connection.execute(query, values);
		return new Response("Added to db successfully", { status: 201 });
	} catch (error) {
		console.error("Error adding to database:", error);
		return new Response("Failed to add to database", { status: 500 });
	}
}
