const express = require("express");
const PORT = 5050;
const app = express();

app.listen(PORT, (err) => {
	if (err) {
		console.error("erreur du server: ", err);
	} else {
		console.log(`Le server run sur le port: ${PORT}`);
	}
});
