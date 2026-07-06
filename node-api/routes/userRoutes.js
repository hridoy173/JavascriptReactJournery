const express = require("express");
const router = express.Router();



const { getUsers, createUser, userUpdate, userDelete} = require("./../controllers/userController");

router.get("/", getUsers);

router.post("/users", createUser);

router.put("/:id", userUpdate);

router.delete("/:id", userDelete);



// GET All Users
// router.get("/", (req, res) => {
//     res.json(users);
// });


// POST User
// router.post("/", (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.status(201).json(user);
// });



// PUT User
// router.put("/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const index = users.findIndex(user => user.id === id);
//     if (index === -1) {
//         return res.status(404).json({ message: "User Not Found" });
//     }
//     const updatedUser = { ...users[index], ...req.body };
//     users[index] = updatedUser;
//     res.json(updatedUser);
// });



// DELETE User
// router.delete("/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const index = users.findIndex(user => user.id === id);
//     if (index === -1) {
//         return res.status(404).json({ message: "User Not Found" });
//     }
//     users.splice(index, 1);
//     res.json({ message: "User Deleted" });
// });




module.exports = router;