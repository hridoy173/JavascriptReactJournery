
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

module.exports = app;


// const express = require("express");
// const app = express();
// const PORT = 5000;

// app.use(express.json());


// // user routes
// // app.use("/users", require("./routes/userRoutes"));
// const userRoutes = require("./routes/userRoutes");
// app.use("/users", userRoutes);


// //product routes
// const productRoutes = require("./routes/productRoutes");
// app.use("/products", productRoutes);


// const server = app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });