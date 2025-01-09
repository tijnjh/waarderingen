import { connection } from "$lib/server/db/index";

export async function GET() {
	const query = "SELECT * FROM Profile";

	try {
		const [rows] = await connection.execute(query);
		return new Response(JSON.stringify(rows));
	} catch (error) {
		console.error("Error fetching profiles:", error);
		return new Response("Failed to read from database", { status: 500 });
	}
}
