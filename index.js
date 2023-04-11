const express = require("express");
const PORT = 5050;
const app = express();

/**
 * Data de la promo
 */

const promos = [
	{
		id: 1,
		role: "trainer",
		name: "Anthony",
	},
	{
		id: 2,
		role: "student",
		name: "Roxane",
	},
	{
		id: 3,
		role: "student",
		name: "Alexis",
	},
	{
		id: 4,
		role: "student",
		name: "Oyhana",
	},
	{
		id: 5,
		role: "student",
		name: "Denis",
	},
	{
		id: 6,
		role: "student",
		name: "Hafsa",
	},
	{
		id: 7,
		role: "student",
		name: "Pierre",
	},
	{
		id: 8,
		role: "student",
		name: "Chloé",
	},
	{
		id: 9,
		role: "student",
		name: "Jérémy",
	},
	{
		id: 10,
		role: "student",
		name: "Kylian",
	},
	{
		id: 11,
		role: "student",
		name: "Badis",
	},
	{
		id: 12,
		role: "student",
		name: "Sébastien",
	},
	{
		id: 13,
		role: "student",
		name: "Enzo",
	},
	{
		id: 14,
		role: "student",
		name: "Thibaut",
	},
	{
		id: 15,
		role: "student",
		name: "Samuel",
	},
	{
		id: 16,
		role: "student",
		name: "Stéphane",
	},
	{
		id: 17,
		role: "student",
		name: "Vincent",
	},
	{
		id: 18,
		role: "student",
		name: "Victor",
	},
	{
		id: 19,
		role: "student",
		name: "Youcef",
	},
];

/**
 * GET /promos
 * @desc la query `limit` prend en charge un nombre entier
 */

/**
 * request.params ⬇️
 * http://localhost:5050/promos/11
 *
 * request.query ⬇️
 * http://localhost:5050/promos?limit=5
 */

app.get("/promos", (request, response) => {
	// Je desctructure `request.query`
	const { limit, role } = request.query;
	// request.query.limit;

	// Si j'ai un role alors
	if (role) {
		const members = promos.filter((member) => member.role === role);
		// si en plus du role, j'ai une limite, alors cumule les 2
		if (limit) {
			return response.send(members.slice(0, limit));
		}
		return response.send(members);
	}

	// si je n'ai que la limite, alors
	if (limit) {
		return response.send(promos.slice(0, limit));
	}

	// par défaut, rend moi les 10 premiers
	return response.send(promos.slice(0, 10));
});

/**
 * GET /promos/:id
 * @desc permet de récupèrer 1 membre de la promo
 */

app.get("/promos/:id", (req, res) => {
	const user = promos.find((membre) => membre.id === parseInt(req.params.id));

	if (!user) {
		res.status(404).json({ message: "user not found" });
	} else {
		res.send(user);
	}
});

/** On ne touche pas ce qu'il y a en bas ⬇️ */
app.listen(PORT, (err) => {
	if (err) {
		console.error("erreur du server: ", err);
	} else {
		console.log(`Le server run sur le port: ${PORT}`);
	}
});
