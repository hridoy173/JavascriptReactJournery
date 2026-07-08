
const User = require("../models/User");
const errorHandler = require("../middleware/errorMiddleware");



// create user model method 1
const createUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// create user model method 2
// const user = new User({
//     name: "Jane Doe",
//     email: "jane@mail.com",
//     age: 25
// });

// await user.save();


//get all users
const getUsers =  async (req, res, next) => {
    try {
        const users = await User.find()
        // .populate(1) // like to laravel with() function
        // .limit(1)
        // .sort({ createdAt: -1 });
        .select("-password");
        res.json(users);
    } catch (error) {
         next(error);
    }
};



// update user
const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// delete user
const userDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getUsers,
    createUser,
    userUpdate,
    userDelete
};