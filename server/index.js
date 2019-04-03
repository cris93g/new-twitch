require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
const port = process.env.port || 3001;

app.use(json());
app.use(cors());

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
