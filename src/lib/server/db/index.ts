import mysql from "mysql2/promise";

export const connection = await mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "beoordelingen"
});

await connection.query(`CREATE TABLE IF NOT EXISTS Profile (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    opleiding VARCHAR(255) NOT NULL,
    skills TEXT,
    global_review TEXT,
    picture TEXT NOT NULL,
    UNIQUE (id)
)`);
