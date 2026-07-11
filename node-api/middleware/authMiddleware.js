const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("./asyncHandler");

const protect = asyncHandler (async (req, res, next) => {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new ApiError(401, "Authorization header missing");
        }

        if (!authHeader.startsWith("Bearer ")) {
          throw new ApiError(401, "Invalid authorization header format");
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.id)
            .select("-password");

        if (!user) {
          throw new ApiError(401, "User not found");
        }

        req.user = user;

        next();

});

module.exports = {
    protect
};