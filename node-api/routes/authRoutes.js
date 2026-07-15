const express = require("express"); // express directly imported from node_modules
const router = express.Router(); // router in imported from express to create a router instance

const { register, login } = require("../controllers/authController");
const { createUserValidation } = require("../validators/userValidator");
const { validate } = require("../middleware/validationMiddleware");
const validateRequest = require("../middleware/validateRequest");
const { createUserSchema } = require("../validators/user.validation");


// router.post("/register", createUserValidation, validate, register);




router.post(
    "/register",
    validateRequest(createUserSchema),
    register
);

router.post("/login",  login);



module.exports = router;