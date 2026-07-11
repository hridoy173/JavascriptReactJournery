
const User = require("../models/User");
const errorHandler = require("../middleware/errorMiddleware");
const asyncHandler = require("../middleware/asyncHandler");
const ApiError = require("../utils/ApiError");
const successResponse = require("../utils/apiResponse");




// create user model method 1
const createUser = asyncHandler ( async (req, res) => 
{
        const user = await User.create(req.body);

        return successResponse(res, {
            statusCode: 201,
            message: "User created successfully",
            data: user
        });

});


// create user model method 2
// const user = new User({
//     name: "Jane Doe",
//     email: "jane@mail.com",
//     age: 25
// });

// await user.save();


//get all users
// const getUsers =  async (req, res, next) => {
//     try {
//         const users = await User.find();
//         // .populate(1) // like to laravel with() function
//         // .limit(1)
//         // .sort({ createdAt: -1 });
//         // .select("-password");
//         res.json(users);
//     } catch (error) {
//          next(error);
//     }
// };


const getUsers = asyncHandler(async (req, res) => {

    const users = await User.find();

    return successResponse(res, {
        message: "Users retrieved successfully",
        data: users
    });

});


// update user
const userUpdate = asyncHandler( async (req, res) => {

    const { id } = req.params;
    const { name, email, age } = req.body;

        const user = await User.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
        );

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        return successResponse(res, {
            message: "User updated successfully",
            data: user
        });

    });



// delete user
const userDelete = asyncHandler( async (req, res) => {

    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return successResponse(res, {
        message: "User deleted successfully",
        data: user
    });
});




module.exports = {
    getUsers,
    createUser,
    userUpdate,
    userDelete
};