import { connection } from "$lib/server/db/index";

export async function GET({ request }) {
	const id = new URL(request.url).searchParams.get("id");

	const query = "SELECT * FROM Profile WHERE id = ?";

	try {
		const [rows] = await connection.execute(query, [id]);
		return new Response(JSON.stringify(rows));
	} catch (error) {
		console.error("Error fetching profiles:", error);
		return new Response("Failed to read from database", { status: 500 });
	}
}
