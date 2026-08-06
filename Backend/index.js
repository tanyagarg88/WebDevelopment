const express = require('express');
const app = express();
const port = 3000;

app.get("/register", (req, res) => {
    res.send("Standard Get Request");
});

app.post("/register", (req, res) => {
    res.send("Standard Post Request");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});