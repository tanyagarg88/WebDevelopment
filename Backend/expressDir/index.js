const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use((req,res) =>{
    console.log("Request URL:", req.url);
    let code ="<h1>fruits</h1><ul><li>apple</li><li>banana</li><li>mango</li></ul>";
    res.send(code);
});

app.get("/:username", (req,res) =>{
    console.log(req.params);
    res.send("hello!i am root");
});