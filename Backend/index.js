const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard Get Request, ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard Post Request, ${user}!`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});