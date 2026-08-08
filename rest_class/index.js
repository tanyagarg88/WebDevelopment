const express = require("express");
const app = express();
const port = 3000;
const path=require("path");

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts =[
    {
    username:"tanyagarg",
    content:"this is my first post"
    },
    {
    username:"Btech",
    content:"this is my second post"
    },
    {
    username:"CSE",
    content:"this is my third post"
    },
    {
    username:"honesty",
    content:"this is my forth post"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts: posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let {username,content}=req.body;
    posts.push({username,content});

    res.redirect("/posts");
});

app.get
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});