
const User = require("../models/User");

// create user model method 1
await User.create({
    name: "Shekh Hridoy",
    email: "smhridoy!73@gmail.com",
    age: 30
});

// create user model method 2
// const user = new User({
//     name: "Jane Doe",
//     email: "jane@mail.com",
//     age: 25
// });

// await user.save();