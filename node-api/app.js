
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}
));


// user routes
app.use("/users", require("./routes/userRoutes"));

module.exports = app;


// const express = require("express");
// const app = express();
// const PORT = 5000;

// app.use(express.json());


// const userRoutes = require("./routes/userRoutes");
// app.use("/users", userRoutes);


// //product routes
// const productRoutes = require("./routes/productRoutes");
// app.use("/products", productRoutes);


// const server = app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });