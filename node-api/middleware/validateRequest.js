const  formatValidationErrors = require("../utils/formatValidationErrors");

const validateRequest = (schema) => {

    return (req, res, next) => {

        try {

            schema.parse({
                body: req.body
            });

            next();

        } catch (error) {

            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: formatValidationErrors(error.issues)
            });

        }

    };

};

module.exports = validateRequest;