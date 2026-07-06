const { body } = require("express-validator");

const createUserValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("age")
        .isInt({ min: 1 })
        .withMessage("Age must be greater than 0"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
];



// body("name").notEmpty()
// body("email").isEmail()
// body("password").isLength({ min: 6 })
// body("age").isInt()
// body("phone").isMobilePhone()
// body("website").isURL()
// body("price").isFloat()
// body("status").isBoolean()
// body("name")
//     .notEmpty()
//     .isLength({ min: 3 })
//     .withMessage("Name must be at least 3 characters");




module.exports = {
    createUserValidation
};