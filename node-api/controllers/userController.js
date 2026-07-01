
let users = [
    { id: 1, name: "Hridoy" },
    { id: 2, name: "Robin" }
];



// get all users
const getUsers = (req, res) => {

    res.json({
        message: "All Users",
        data: users
    });

};


// create new user
const createUser = (req, res) => {

    const user = req.body;
    users.push(user);
    res.status(201).json(user);
};



// update user
const userUpdate = (req, res) => {

    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "User Not Found" });
    }
    const updatedUser = { ...users[index], ...req.body };
    users[index] = updatedUser;
    res.json(updatedUser);
};


// delete user
const userDelete = (req, res) => {

    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "User Not Found" });
    }
    users.splice(index, 1);
    res.json({ message: "User Deleted" });
};



module.exports = {
    getUsers,
    createUser,
    userUpdate,
    userDelete
};