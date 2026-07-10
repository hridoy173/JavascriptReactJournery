const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const asyncHandler = require("../middleware/asyncHandler");


const register = async (req, res) => {

    try {
        
        const { name, email, age , password } = req.body;

        // Email already exists?
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            age,
            password
        });

        return res.status(201).json({
            success: true,
            message: "Registration successful",
            token: generateToken(user._id),
            user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
            stack: error.stack 
            });
    }
};



const login =  asyncHandler (

    async (req, res) => {
    
    
            const { email, password } = req.body;
    
            const user = await User.findOne({ email }).
            select("+password");

    
            if (!user) {
                throw new ApiError(
                    404,
                    "User not found"
                );
            }
    
            const isMatch = await bcrypt.compare(
                password,
                user.password
            );
    
            if (!isMatch) {
    
                throw new ApiError(
                    401,
                    "Invalid email or password"
                );
            }
    
            return res.status(200).json({
                success: true,
                token: generateToken(user._id),
                user
            });
    
    }

);




module.exports = {
    register,
    login
};