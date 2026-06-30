const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
    { id: 1, name: "Hridoy" },
    { id: 2, name: "Robin" }
];

// Home
app.get("/", (req, res) => {
    res.send("Welcome to My API");
});

// GET All Users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST User
app.post("/users", (req, res) => {
    const user = req.body;

    users.push(user);

    res.status(201).json({
        message: "User Added",
        user
    });
});

// PUT User
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    users[index] = {
        id,
        ...req.body
    };

    res.json({
        message: "User Updated",
        user: users[index]
    });
});

// DELETE User
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({
        message: "User Deleted"
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});