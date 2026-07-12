
const User = require("../models/User");
const errorHandler = require("../middleware/errorMiddleware");
const asyncHandler = require("../middleware/asyncHandler");
const ApiError = require("../utils/ApiError");
const successResponse = require("../utils/apiResponse");
const QueryBuilder = require("../utils/QueryBuilder");




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




// refactored getUsers with pagination, search, filter and sort using QueryBuilder class
const getUsers = asyncHandler(async (req, res) => {

    const queryBuilder = new QueryBuilder(User.find(), req.query)
        .search(["name", "email" , "age"])
        .filter()
        .paginate();

    return successResponse(res, {
        message: "Users fetched successfully",
        data: await queryBuilder.query
    });
});



// old query with pagination, search, filter and sort

// const getUsers = asyncHandler(async (req, res) => {

//     const page = Number(req.query.page) || 1;
//     const limit = Number(req.query.limit) || 10;
//     const skip = (page - 1) * limit;
//     const search = req.query.search || "";
//     const sort = req.query.sort || "-createdAt";
//     const filter = {};
    
//     if (req.query.email) {
//         filter.email = req.query.email;
//     }
    
//     if (req.query.age) {
//         filter.age = req.query.age;
//     }
//     const total = await User.countDocuments(filter);

//     const users = await User.find({
//         ...filter,
//          $or: [
//                 { name: { $regex: search, $options: "i"   }},
//                 { email: { $regex: search, $options: "i"   }},
//             ]
//         })
//         .sort(sort)
//         .skip(skip)
//         .limit(limit);

//     if(!users || users.length === 0) {
//         throw new ApiError(404, "No users found");
//     }

//     return successResponse(res, {
//         message: "Users fetched successfully",
//         data: users,
//         meta: {
//             page,
//             limit,
//             total,
//             totalPages: Math.ceil(total / limit)
//         }
//     });

// });


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