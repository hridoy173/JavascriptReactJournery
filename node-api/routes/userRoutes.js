const express = require("express"); // express directly imported from node_modules
const router = express.Router(); // router in imported from express to create a router instance

const { createUserValidation } = require("../validators/userValidator");
const validate = require("../middleware/validationMiddleware");
const { getUsers, createUser, userUpdate, userDelete} = require("../controllers/userController");



router.get("/",  getUsers);

router.post(
    "/",
    createUserValidation,
    validate,
    createUser
);


router.put("/:id", userUpdate);

router.delete("/:id", userDelete);


module.exports = router;








/// old code ///

// router.post("/", 
//             body("name").notEmpty().withMessage("Name is required"),
//             body("email").isEmail().withMessage("Please provide a valid email"),
//             body("age").isInt({ min: 0 }).withMessage("Age must be a positive integer"),
//             createUser);


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



