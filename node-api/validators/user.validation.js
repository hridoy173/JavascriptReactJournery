const { z } = require("zod");

const createUserSchema = z.object({

    body: z.object({

        name: z
            .string()
            .min(3, "Name must be at least 3 characters")
            .max(50),

        email: z
            .email("Invalid email address"),

        age: z
            .number()
            .min(18, "Age must be at least 18"),

        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be at most 20 characters"),

    })

});

module.exports = {
    createUserSchema
};