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
 * GET /
 */

app.get("/", (request, response) => {
	response.send(promos);
});

/** On ne touche pas ce qu'il y a en bas ⬇️ */
app.listen(PORT, (err) => {
	if (err) {
		console.error("erreur du server: ", err);
	} else {
		console.log(`Le server run sur le port: ${PORT}`);
	}
});
