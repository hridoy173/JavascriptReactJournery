const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());


// app.use("/users", require("./routes/userRoutes"));
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);


const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});