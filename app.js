const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];

app.get("/", (req, res) => {
    res.render("index", { todos });
});

app.post("/add", (req, res) => {
    const task = req.body.task;

    if (task) {
        todos.push(task);
    }

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    todos.splice(id, 1);
    res.redirect("/");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
