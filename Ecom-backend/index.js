const express = require("express");
const app = express();
// or const app = require('express')();
const connectDB = require("./config/db");

const dotenv = require("dotenv");

var cors = require("cors");

dotenv.config();
app.use(cors());

const port = process.env.PORT || 3000;

// connecting to database imported
connectDB();
// Make the backend understand json
app.use(express.json());

// defining route source for PRODUCTS
const productRoute = require("./routes/productRoute");
// defining route source for ORDER
const orderRoute = require("./routes/orderRoute");
// defining route source for USER
const userRoute = require("./routes/userRoute");
const { userLogin } = require("./auth/userLogin");
const errorHandler = require("./middleware/error");

app.use("/v1/api/product", productRoute);
app.use("/v1/api/order", orderRoute);
app.use("/v1/api/user", userRoute);
app.use("/v1/api/login", userLogin);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
// routes
// 1st route example
// app.get("/", (req, res) => {
//   res.json(data);
// });
// app.use((req, res, next) => {
//   app.get("/user", (req, res) => {});
// });

// app.use((req, res, next) => {
//   console.log("I'm middleware");
//   next();
//   console.log("Second middleware consol");
// });

// app.use((req, res, next) => {
//   console.log("I'm middleware");
//   console.log("Second middleware consol");
// });

// app.use("/v1/api/prod)
